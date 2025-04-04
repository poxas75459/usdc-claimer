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
    "4pCVAnFjQFDcoFZRwzGW9WEo5gR7jPfTef9RJmKRADHNRzX2Yr1Brv5KMpxXL1KZKUNU78TQY9WwjaQziMdGkdnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXCzLYghbEfbXFfgR5yQWmy9mJWNRSxwAsqhwHUd63roG6ELhC1tMAnq4XnCn74ryLriBkYAxK4cBftPoZpRT8M",
  "key1": "2LC6eB4AL31xkcccrCCXq9UUbu7wn6DCstMcPyVx7F8ZKy87R6EEEohADYtQHd83RaKY9LY7QnyV4H6ekUwABfrM",
  "key2": "onVEYNDhoU9X2MsE5JVFunmzASkBmjL4xdgwrwhhobKhJTbpqwXYb6jJXbDahD9jAaxZHcbPHCStba9Q6RgfBQ8",
  "key3": "4FnhrjHdGkAFoizYe38C6Xuy7hsHggGjybUBNFNXR3bohL3dUspAysJbVEBdX6ZNPhY6ukhp8cRGLpP5RaZA24bB",
  "key4": "2ZacXUN4bqgG97i2hfbPqduSjBKvia8BKVWeJr9T7pgFyCFK7ABRED6NsVvbj8bp2vmeAC5iTnUHqujczrnRYQ3n",
  "key5": "26oRugrMhur6bRncHFLKkwtA6fYBKRnZ9Bpbz8vD5PNoeZ2rCngiQNKAGTHfbV5tvhoD9paqBm7jCPgcdvigMsPf",
  "key6": "47ZQxWW1FmRAHW5WSUf1V35ArKQjrXmpdKPowosznYAf3JvAM1MTsvu2CeUdFT7FSy1BC9GiSKkBiJXF6gBKfznh",
  "key7": "3kJGzwnvAkEjsufLiKmGuneD4kK3w46airWEJEuYL86bD5sshGdLZDoXVQqMAHM85TPDDJxxJbHQB9W4zXR2L1XU",
  "key8": "5TxhABaXjLzhH2nX323iGVD268rhFPUTvE1YqogmZ9M2qz6MK39Noa9Y9nGo3xGqYLjfyvV7nHLnkapsLCQaHRHe",
  "key9": "53duzbjcYdiJ47aTCVtWFST3z96kGMoFsH2Jv8sgGwSZu9DVgeXkvQ8pC37JL5m4e978HBWqbPGzVySZd34NeNMy",
  "key10": "4agkQoEtniB3yFxvpda1pn65NM158pCNUF9iSiZ41Ee5UvCMyheQboKjpC7s2PWHTRPqj9U3wakrWFwKDyVdvu8c",
  "key11": "65oTR3ML7GYCqbeC7oX8QWvkNmH9VPLxxPVMbjLeWBee7wggVNRrZLkWnpRnDPV2VRreHgKf599nJ2w1h1ei16hF",
  "key12": "4eQEEBm6VZHV1gDxrv7UszZgTaEhYmwNVJQ8o1Kn8WZkwcACXLNZNU2pTLfE73HuvsqhrRGcxirhRRMBCbMBmNcE",
  "key13": "5XN218Ys7JqrDTmz8PM1kQfH4YKWnqTBb94XzfueKnNa9J6wrHudnBG3AKjf7Noe9Sijgae26cK9b83hWsjQ55MT",
  "key14": "4HCgcUpTzwSzv2Huy88W7LZxQpgvjjerfpLFGdnBGQK13xnSyHWYSntpWefhJQ1dZv9LfXeDid6t3n4PWXX9iMHf",
  "key15": "5mmsjMiLqcbaip6cgPiyUmgfA1N52AorGGeeJSuS5jwu2XMxrfqeVUbbzzE6zPMDZZJ2bzKJVAR2YB3M4SDgfBYj",
  "key16": "YBUY1EhLBAVthcZoiY2VT8HB63MNyy5UqwFxAWsTyMvrRZr7FcJGCYhVt1xFnDG43mhERix8uYN4ovy6uVvnCYM",
  "key17": "5UuDUfJsz2Vht3tYnrFwpsMyFoA3i94iC2RGjXrKAQSfCipNxKsoUKdX1sF36oSf99Js9AJxj2Wuw4QP8UckRVPo",
  "key18": "63M5hpe1U6qzAEpDsjeREVjV7ZWEoLvR7XFfhaAfonA1WaNtKLShsytMNr48bLjiGALBCkmzZs16QpsQv8j2uLE6",
  "key19": "3NgTnWDPV1zDQF2oFFH2ejeVFaLsw6K8bScQedE8tkCdLEmAWT3UiMF9PCeo5HhaCf1EdiBvxKxb2x161hhevczJ",
  "key20": "3nYrZnmR3VKKkirXpDqES7Sye7FLJa3LAchEGCdoWgEDHbZYcrBtJnHUu4WXAbpAnFYrBsmz2siFZVQ84ZkBr5uh",
  "key21": "39uf59hasnLYEKtv36Zgj4RsLghe5ov6rDCwjeXwQQKRo3b4f5Eji5nrx2t2M38ACXGDruFMaPZYBLHG6eXRFu4U",
  "key22": "47Hr8SX6eC1pbbXT9a1UroNwdjSpSC43gRfePqbQW3hsqoHxocz9tWddjMbvtwhKYRjM2PtNAJUJfNuDKR1RPpJo",
  "key23": "3agHApXfkaPaoDcos8556ay6jkntBzGJYH2hDzeXRhdVQKVj7LpC8HR7xnyVWJHS6bsJ4bZsFYBUCgLXsZBYhcYa",
  "key24": "532Z52bH6a3rLy2MFj4f5Yo5ZCFh5rYCrRtRq4Sccr1bKZnp3fNA4g81cTnL4dkMCveGKPAvC2J3hg63UxQWhgTn",
  "key25": "66qtpLz1BdNDqNGkN367VeUqjC8JtFexmSdMAb7Qvg3QTVpFd9QXfvQz7DZ2Y6xaVF7cqLi2bkwHRaU4JS59yaLU",
  "key26": "5VCxQ6C9AozxDqzUHiZE4QxugZU4Bv6tspDp7g6M3r5adzUqXYdnEEs9Ne5YTs2azC82epGaF2wL6pmf9H14yz9x",
  "key27": "2LbnZFgBR8bjhPtRLqtnVrHyvNva3x1ZkwmXvdHMCoiMmB334VJ22pAS39ppwgiguNAJVQXBRhV4fNo46w14croZ",
  "key28": "244ULZEK8ZVoNh2KujknYHWak1ez6vS7DdxyvRDauammAqXfeh9tC2xQiL6im1XgL7WxoB4JBYHZwQTJupFTSxHp",
  "key29": "3HwixqD86vsDzqxFNFUKyYyR3C9zr2Kk9j4nckZzQPKYj3CQ45Y54qqyURQgNoUBPXskcy9PuxE2GpfxiGFdHLs9",
  "key30": "2zBUbjanqN9pZxVCoihQTdFu6cSybBTi85mWtPv4fEiKaYM4gvvs1fJUnnMCtZapeB4y4xpBFSF81WCBTvwvWF7M",
  "key31": "268CWFcgvwhneyGvNHYdg2h4YB7BMceXTZhMaPKK95x86WGVQDLRuhpnk6PcXmETB1dzZdudA9DLCznVbeKGtk4q",
  "key32": "28DC2tkevbctNiDFWZv6skgZKrcn2xy3NpAjwDpFapBSa2BPhXLB9ZCU7yArp7cbyebUGZgjm1jcnwiNp81EyDHp"
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
