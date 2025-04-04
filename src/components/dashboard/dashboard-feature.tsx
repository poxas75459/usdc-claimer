/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "gDuPo81ZA24hN3DKeCD9BNgqbvEjuQN4rdvZnkK8T9cincEZtqw3UUMUsSEWe1ENT8pE5sufjPgJQndUjtxiihh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61M6tL7bViGiqgycH2VSyLt8XuoJnUp5nYjWcScYMFYCqkEGfn4ZCiBEJTzTQ1BfLhDuY6vpsHCaTH2CsDKyMa1Q",
  "key1": "3ZZGJiAjaZun2gYbk5nD3VfAzkX4T3Ufgh7VWvtvm6irn96Tx1y1Ep4M1hRy96HACWSNC7KQt3SjnPM7ZjzqEgjh",
  "key2": "3bpMUNmZZhkPXQBgaiyC947yShPdjVUMu3uw1r2UDJnPw1RWu1RxzJhcM6UYnmSBxWh3R9LzVCYUf5x7Acp9Ebvd",
  "key3": "5yTcoYbuGtPCM6ox7ME865JjhJ7Peq7X5TfVTbHLhUzp6Q4H4LHZwY389ZB2RBvFvx2YfXhTw19NfdYJwvwM5wRw",
  "key4": "2qRP317nbTSfGwNhhBjMoui5cwb5XGaJY1YRpG8m4bknczHp9CFfkLiaaHkzsyz3sPJBFG4RWVPfgbbeHazSufGF",
  "key5": "4JtfX3tvqGtiApin1AefGnVurLZSjLsYYJNkR2f686BQXZa6Euk3SPC5RTCr8xmy5ChHAxdezcCiKuAe6SyBHeKg",
  "key6": "4cGdUUy2x7QQU1gQD4zV4X2NuwaTBndeHCzWcT5Qw5uBE7zxq1HoNbR5fEmv8Y4vvWhY3RiQWbgaWLtisdyG1pze",
  "key7": "5EzJZUw8t7kZtNvaFErE7Z7eZh5WoUsaWR1GXrxQ9HSWW6p3tUn2zmGVQpKYCb1R8ghG7yhFQzPEb7NnyW2yiVmQ",
  "key8": "5E6pzzB8k6bkxbBSFypSsKbfmTNBhGRbRTTkLAX4Ee357dfJmViJZmQapes8ieLWaZSoUx5mzGueVUPiz37HP74L",
  "key9": "5C8mT1nsSmFAGBZ8vFggFd4B479J1sPcqk1EYfdt2d1igVzQTJUp6DtpPk3y3Tqtg2JoMt216jKhjgVGCwip63HT",
  "key10": "5d3gD3e4Fq2jqF7dvPrRUbLoBMU9xZGPadmmZtvpKG4k6Rrrk2KZK2v8QJynyTGZCSuhQBjv1PfsHVy4TejiAWgw",
  "key11": "zzaCkDhyYRLWAefed3aePZ6h6ukLZRz8jUUCjctyTZsMEA1UffBH6QKZsbcdhC95R1uLsMWvgTnBWsbghUyzgTS",
  "key12": "4PYFekwPdFejoowi2aWVMkosMRwDQD7krAwVDeGCGwSGu6yBU5N7D5kwj9Qi5HH9ks2AUqByL8Xdqs2vwDXt2SsQ",
  "key13": "3P429LWq3hya4hWS1XK25q8vBgKDL2acJKCrbX98KUoJRtM93PgpDKdtmS3zu8Udo8UjWRCTGg6CiVdqCXPTfyBG",
  "key14": "52Zm5SUFoyVbxaMc8tqrhJLSByDm629jPdiAcNH3483dcFDhxE61ETgzp7TWX3kCpiAcSXx7vgkZtrNpB4asYiRg",
  "key15": "5shYi7tr1gE94tFpvPCPqePxzP4VCvZEEHX85FVs4nPQ88nMAuSnPxqzgH1Z7q6SPssFtSePoDBkLoqm5ty5qptY",
  "key16": "fjLMb3R3Vq4WbMpMZkxyDkpHSXTy87q3QRkKosJTQi3BrHU9VXDf8NNKP8tdXrxe8PCBUmheGgKpb3cjBtbRKnu",
  "key17": "65D9YdqD3ALiB6MsM4SE2ZNKbbprRWrYtYjZEB2iwQ6wpqjJBy1fS4QPgSeyzo1ys468BYcrw76JT6XWSYsUPSfg",
  "key18": "4rPoM1K4ZAZ3LDEQJhDgP4sFH1Y1Mxahh1EKYdDP7RvC7oyXGMWfHFuiKkwyd3zu9z2FoFkS1Qs9yydHdbuzu7iq",
  "key19": "5nkkjzPqLSGu34w9taxT6TFGyFSRDzVNNarvkMmy68YKQKixPm82ixoeRizJ9ESCqJjQ79E8x7GFRfSj1CqAMd3D",
  "key20": "3Zfvykz15TdYinTNo7qA9NLVgLdgKD84MjKQYq8AK5GSJokrAzsg8YGFZLgxweie3xfLcr6du9T1rjDS1DGC2nia",
  "key21": "sbvQ6MwM8cJuMSDYKwM27WfaeE38GvfnUKxRDD1htTuSbtyXGx99DJ1KirruYSirNBqt5dFBba3ku9A9o4J7cJx",
  "key22": "4Btdw58kCTfKNrkm8j1YV3CW4SwZv2Wksgu3FuhKjsvbkXQZe56HMEC7Q8Z6jLGnyYhJiVArm3Zh1L8hn28bT1rp",
  "key23": "3rdMnQjySDWH5uGHjVgmEW41QkoJmeF3VVW52FnzmM9hDXQGekULGThoFLZC6WC4ouCaxDh2BmN7ujwNghuENGNx",
  "key24": "qPMYqp8h8ChF8tmGQGRattk5g7ik8erfbM5aMMYZQxTuUWDrRry1B5ejioAEBK2Yq8yGubjMJQJVcJwa37x4GKE",
  "key25": "5HLPDWqp1dxZVShA1exxr49z8vp2sgF71QnM4HYT1v93Lh6ZTPjSwoqTbApQn5M1mhouKjoCMQa6UUbF2UZ83bUf",
  "key26": "5a8L6ANWsJHLqCTPPuoxdW5dmBiV6gt7kYjboZ71fjYPKiXCdfZ8VE2roBXvCu5EYips8rJpoXtuoaDMok5n82RS",
  "key27": "28BQ2puaRzkU4BaAgpWZhTKpEADHUVN1yrZWvrEJ2EFCiAgw6beosCwzBYDMTVXw7UZrUY8HX6HgSTfPAZxjfvxx",
  "key28": "3QeeRyrVnu9ar29rwR2LDvxhSHB7HhPC57sZpXqawCSTmRKyuL6uya8aUu48u9RttR24vUSC2YWSF6zaUiYzccwn",
  "key29": "2CT3FnS8fRptdBSwYBaT9iRbvV8FDtwco2pYZzs9ri235q7MJ7G6ZzeyQpovhx2UCxo1LCSbW6Zz8YwdCLFKtKRX",
  "key30": "43438YH3YDBN1zGUneu1DCxB6NqaGoSV46AF51NT98YCdAfNJzSzGzvx4H1jeK414HUgwcqBA5dpkWmadpMRhzWP",
  "key31": "2f8i3581fwqQbYpc54Mw9HMhK7edSex3fnbUmtDKtL1YVLN77M6QZsfTV6c24tFmiZqbk3qw3MWx6F4H27MV9QbE",
  "key32": "5PDUHJ3NE8nAyFt7YX2jbtS8X3aJwhuTSQYnjkPVjdjPPF82B3ksLmARU1wQQfZETq9KW3qKH1htgxcXdRrHTtep",
  "key33": "2ahdAuVCDGXhd5ALyjsyf8dKkped8uLbRSTPLUkpVuoZYrFZfdg2P3rybo8bEqJYW3iMJgc2XSP9QhKMFouuXeRd",
  "key34": "3cSaZP594b5EstLdn3enWXYGYkEGLtmtmQgnpe13QDLA2kXHuiSeBzP3uLPUfxEKQ557VZacTQY1bG8d4Anv41hM",
  "key35": "eQy4LY29aHBohQz3meY51ySpoCXcBaaFwYNPn25BZGACj6mBEeAnnydsbgjgQGEvcu3eiYFVHt52LjRKKqc6WBC",
  "key36": "o96CpsSR1ETiaUWWDmSvQjAn5eJajTfyz2bph7of41i8TN8jWYMi4HxEC29Ux9oANL88u9G57KNQbKrqNd4Fz6G",
  "key37": "2E1cMKnuEfkJ98Y9PY6YGpN3M2FSaPYpnU3KYLKab7Drow8uTymHam6rBdQ1sTVVtEQE35nbrFoTmAHdzc6XYNkZ",
  "key38": "3yMPyU4EHR7aeFhcxa4E5YKFz1rhzEzDJc6DbJVAJSwfS7nxtF3EFdp9wFT8AM6FQcpVHkn1xGVnscCqc31N6XpE",
  "key39": "3rCkVx3miVeH8dhYSSjD7W16z75AwCRU6XXA29nRUNGwCt7Rv3BTpnRRbjMsig3TwPkfSYtS5bsJZgg5Zw5zVBui",
  "key40": "gY9rAMT3rzmPxodXMM1uzzhHiPDw1aDKyvMiXtuyPB4zAxgLhbpPaxg45pTCbDgKH7Cbg3A8FGGFBe4WnYWGmn1",
  "key41": "3cSP1tBCJmojcRe1YFgch42oqBLGTvn9g18jZNXbJGRTLjbyegtazfe8dKpQiZw5sS5JrYfwNoy5kSB2iR48ap1y",
  "key42": "64WJyP48zLuQ25U2vKfFm4bWvo8PBRJMGgfAbKiycV7wGFYvywTmR4QbTCcDEjnp6N8A9BYNzDw4b1QKEMJyqu2w",
  "key43": "5Afwqxyk3FbK9tmBugLYugbT81u5GQtZLxFPCoNgDBfobkBQtGJ6ZbHNzCD5hSrcfE5ct2ns8pVMEkGEu2D4PcYc",
  "key44": "2tifUBeFp6QNU69SrXZnQMTar88Xg2ZvMLHwZiruAmmn9dPyzy17fuxxyswsm5qcaRHqyTa4o1qcsRC2bdT9NJ2T",
  "key45": "5pWdnArwxC88o3yEFyZqvvZvPjHTKLbdXqDgog1fZKrn9hFZKdmAH17wNYPGQT1hWENriL4kHJhD4mhayrVBqTxa"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
