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
    "4qZ16tKcKTq4TfKRSYbGhZyg1mQwVvc3VYVN6t2foo7devpkdRKxcCfNY9dakMsaWNv1yobsMn7jQjZzVf5Vh11q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hKWE6AzPdAeWd6RtWso5ubKtx4SNDVo6wsqyCwwR5UUUkBrAbKwqTpWrC5E7so65A7x5tQxFeScha5pJyVq94en",
  "key1": "4WTJQw2HWPuy4iQy73LWjmF9MmiB5dWhj7jJYHSso3KYEHh7Ngoi1EHYA2hFf5SWoqRKYRDbFTwfgKYaLuLBBWjy",
  "key2": "58cS4hDiJS6YBHZdPkgC4vn3jPPSqFtLbqU71bKUwqvRVvm6rTcAoFFh4vYbMfi6iU8WNa6w1PiHuDXZ1Dvhviwu",
  "key3": "4wo7n3uHmVCzaDPEuHwmPumyAC54NT61DGZJGZqkL2AB9VVKxvradz8jSyLqaaLfdCy1Tx16xb5G7U1BLEXF7Ku1",
  "key4": "QWiBQSyPDJtEu9XsSubFk3WiHx9xksCGq9ZdWWT18aSgMMsoWnfqcQXrETSGh6cXWoBABg5PjhhYzH1YnHxKCo7",
  "key5": "2AJXKguD366qKq86Ymrb8uDJH1AxFGQLczy4Z8EZNcnf9t5K6qEWV1Nwdt1HDDTd6s5pUvAGiKXZkzLRFp1XKfJY",
  "key6": "4iKq9niSnpkYJLLn8JWHKL1EUYaPdU57nzNppsDkrcdJ5mg4fGyzA2yyj6NSh1QQYPx7miS8kgpSV9isnxDeAxZT",
  "key7": "2ExB8Hk8SDsasKBySFV3phsXnrMbeYMai9qsiVLDA4NKmJEgL6HU9nHQqBnkQVPz8bQMzmS9zxkzkhwPUWRzguGB",
  "key8": "5KWgDnd1gnWLeUY8FqiAGhhemYuRhLnUmVLFryKF4bLjGE8bggaCjMR4yvZoF2HPtpsWUkG871sU4kmfVLwVbMXH",
  "key9": "3ExMrv1ZfG9FysmuHWuXEUeGsNBcezZyzU7LeVGyFpgCgyrd9WXXxmoTYmg6xVFkEaFuFAKeYfL3U7JZmT4CvUMv",
  "key10": "DPjoKTFp54bTJjd6CHBBer729cu5PW5gPibUVFXisAac3fDA8yNgXbKyovFgXwh16cenTrVbiyfa4vViGXayqE4",
  "key11": "582ntEua2BvvpUDSkUNAo3pqAnRcQDD4rtMsxkmwZCeK7mZmbvKUCqA7QvPCvpPWg5xZvCXDn7tL2ZRnUQU2CAvC",
  "key12": "3n2SkB8stz68BEXpp6ouL46g7oH9u3KcFzLGoJv1K992sgfgmGWt25uT7gt4834HfpH4JeMgT9TdyyjzWg76KGNg",
  "key13": "528PZBEWC3Q8pyyQr6oRT9cByuqXxXYeTJHthS5zmGn7WaczhzvM4zv5jMVn8LAsuncs1iyCRB1mF5c1wZ5sKgeH",
  "key14": "4rCf3EeV4zND2dUnB45oCHa2tDxMFbKx5nyqqmWNkaTwncT44YTQqhPpZmTVLFaoBGRhQD8Mh4FghDBAhgTDfFdA",
  "key15": "5oZiYf2RiDt8r37wpki3LsYxwknVhvbaQukeR4VdKFJUVg99D6mf7vFgQiysBZwCUwdK8sLjWyyfudMFmJxcoq49",
  "key16": "4tSbaq4o26TH8cRVA7Jdra7VkS8omCPKSrtVfys5t5VJjpqUtbGcYNj6Pk45PSDrptqnbMZyEU6hEtQmejog8fND",
  "key17": "2Mhhfbhivyr7xQ99Rvb7LaBP1begBeW2LPwvJXLc6EzhPwi2Hv37piBE8UFvue7dGZYfhAydfHHEaWoc5Kjm61xU",
  "key18": "3M8sU1XAjeGg8F8SpiZHwykwuuAfkRm3MQ9cTiRC79Twi8c3VkjFot55SRkzmM6rTSPzEPoWdmJPvNoPhFn7qywt",
  "key19": "4EKhR4zrhUjvJPm8pnCv9uDtnKZmeF4bscmj27zacaqZWam8uGMfAojzcfqchp9VFdJTFGkwVVmsfTS8tB28Bj3x",
  "key20": "3Gz4mjZV8rf9M5vwksd2AWXd9c3iGWTTPjUhDTcfC7bQNqzE5sfuSPSXGavrGSHmwqR7K1qkU4zgtX2CPDJ9vnvJ",
  "key21": "2CV7b1kUgr4cJY1Cq58fSQtaBun4buhPufSpBeJLdqkxc3aLjtpNB5CWybZhQWFZWJXNzUF4U1MQMDcDyopRkgqJ",
  "key22": "3QLwzXvZY5TTyshYz9AR7qn21teLSbLghNS48xe3A7cQYcSDjicS77ysnCubyMxx8LiF6YH59nxZssFtWV8TaRFv",
  "key23": "3TeVNdTz8U1xppENnUgu8jZLEpe6bK4BHHNWwewFMwtCM2tSAvGzVgrhtBGJMFYC2HGVTbZh7A5k1kBPqtUGHiUs",
  "key24": "3PDabzsSoFVMK4UpfptVQnXta1dvCvJtgvPDDPUYk6f2w8VgJYjJ2xymZwBEEdxALZtoV8hQFzzYmPwXuLXVgdPq",
  "key25": "3nEhyKx9SDSyPJMdstAcTEcxSLBgZBsN6QgVDNT9i2xAKzcZCSuM6b9HTNBbfjDdT1GsQbXxKPKu3nPUSmscuwHi",
  "key26": "3mjLEbWDKj9dBUgGwmEnYPnuP5RgEdBqp7uSmJMX8cPDxyEkfeHUXLbRYD4uuX995GFy5qNA65xSb6DwF93pwkk6",
  "key27": "63G1RAZB2RgfkU8dgJeFtEticCKTySHR9G9PCJg2J1w7z4iELTEwV3Fje5QkAxg1qEtuYpGyu9ELiL7k71Gk3Nii",
  "key28": "4py7cukwMVcjKFEK41Hmc3VzKiH29bfyRNFffvHZAUbqbCJBPq919p5E6v6vfJcQycnj8kpgK9WzJLzEUhRzzQS1",
  "key29": "4PyyVU6rLQ71527YJt1G5nHYUu1MpcN5Z7mKUhoSV7EFdyhwKoUy1Wnw4ADqZT9m5ku6VH7irbNEXkry8oJTUmiU",
  "key30": "2LkfZecEy2FNsBf2G7bxTCHKN5z58BLdTkHtcJoTk6EEDK2rRxouKn2DC6zf3dbg83uY2ddnGkEoSQEey2bcL6Ys",
  "key31": "56VUYeNoHwrkW4CP38XJ2pVzAveF632UGsgboZmVx8a9kFkD89PAUXcFjd3xFNTL4a6Hcz8mm5qhyZ7rrTkGrFP7",
  "key32": "4LHpnMSjjXzC8R5gZYHdENhcZcZeK4XFy3ceAoCW8EZcoCkipT2r5vBN46NWhp9DZqpWSzJ8ZFfuxdJNdYgfgjda",
  "key33": "4QFbFqaiB48GfZp1b5g2Qwo3y3uKWAPurwvAiC1HrM2j8UEFjx8pd33jJo9i3pb4jWcT6hdrmzVHpga5SmZwdY4i",
  "key34": "3dVMJG3ffn6p9eDwLBin3WDj3gWHSKkYDrvTj9y2ZRp5CQqSvEgoMi3dUjh67ydX4DUPcoTEDduh2LtjDhkQAvZm",
  "key35": "5hBD3xk3NQogm5HjfddXMDLJsGeo5raPf97RsPEHT4QHwXfJgbhpr3d8zzymAP1cfsNF4YHhZuwvVg68G1XRSEro",
  "key36": "4p5tCT5CvrUyy3Ls54WyhWiiMuaWXEwCfBfBTcFzPSw1yh5PswAcqyWPcPLQKmuffCA7gAWodD3AugmZqxPGh3AN",
  "key37": "4HSwASg75jYG8WwjAbNNxHjFnhz6VRrk45Hzo8eECtyxiNobatBB8NwyRVVqqxhKQXTaLecBr1vjn8kxNodKniCx",
  "key38": "HHNcqZL3R7Gd3WFzp2tKx56eAjCjV2jNaWc3Tw9388pZZzUXcN9fKAUAEgwPdLZ87ixFw9FBeyHR7tmJNh2JSmW",
  "key39": "KVjnpTmahktZ56fQQwaF4wbtJjSy8kggeEwc1yXPeTitooVDaipGS61WjTioXXDgcSjSB8Mf9Nyz1cCbqwwcxzo",
  "key40": "4iH2PMBdbXXMenNeRPAWgDwQ7gywoW5YxUwzXETJsh72hiLwWNQq44ckhX1bz5czRmjAm3BnRKe1fS1JWTNjhJGq",
  "key41": "445Y6JCUW7rrXfSxfnMrnipws4fSpMbutJFpXX5uuiWxuhD7TrBSqdBCU8zYPyGibrF3BapMEirm4D2FmJogVH7c",
  "key42": "h1zmE71toZ3Ue6cGxdyiS9wRyTQYJSdBtfzZjuPYVSJC1NvivxheD2BonKgzKur8B1Zs1Eha6zr2h1sFPMYJ8mn",
  "key43": "YrKsEXdnqBiAMHAFpTutRrm9xbNAWmySLpR3VfN4Zh4vwCUmgrMPvQKAUnpNjqgbGitjua9fS7PFpQoMjD4irQU",
  "key44": "tdvosuvw5wTfaukfDYRFJMiUkUvuqTac3Qm7WpokRDW2u1Gdu7sonwBJxjQBo1s7ZPmHDS62GdRR3ZLFQKPU77x"
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
