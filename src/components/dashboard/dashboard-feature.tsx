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
    "5v5oBSTbnkok6ESz9wjSJNqyxcWG4X3NRNkPnv7qdCqmSkZT4q85HH3vR9YvuHYZaj5X9iC6pBDD7TnzyXiTAfnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45gXnYft1Xcwf93uT65C3wcJeLwtvAJ96zkhswEr9PFmaQSwguQ11wwq3u1WDkL45QFohmrLDwomoAnMiGcezjqr",
  "key1": "4hgbpCmHQVXti9BHdjv8W3pRH3xaCV2mpVLuygk3h3vAshZi7zkSjLJ2ow8EMDpmYEHfdbz1rU7UPu8T875H12SC",
  "key2": "3Z7Jk2w8ushEHRtPiryZs831aiFCxEFmGikH3qndYsh9feREwAjy6CjneVjrXpQgfxLbKPzQ7qLVLDYJUkB3WHqk",
  "key3": "53GWx8feDEz5WqQsmaSZjSKusJXktaLxADCjERCNRFaHZExUrsqXpokA62f6ZrXK8Sr4a1gqVaqXmSKsetFYiDe2",
  "key4": "FtEEWLySXjsD1eLUo7DKJz8jcRnehrXCNkUhzgCWe249NaZpud8tKUWzqjtYdQfFu5BC6r18EhJsyQQmRbzf7CX",
  "key5": "4nuEtRr11dsoMk4NXJaAarqy8oHzn4WpHZZ92jtgnuyK4pZBVuCWEa7gBAr79sX5fbBY9tLq1Rm53BrbhMhGwuu5",
  "key6": "5VNPeRyQUBGuVn5tDzKXCVhDZaMW3n7TY4xyWXrP2L8N7x8uQ4Um7mgtFKak2zUieFszcJ5aJ1rXAnE1QrrNUXvt",
  "key7": "8RfhMnMjax9iQ7JHVL2oyftJvz8MGxNhkTSVVgS4UDQNQUkqvkFzq65RqvY3fL4BQSdUsJTDwdqaFsafFWpR62V",
  "key8": "5V2kkDW4jwe5m2UgmjfFZcLmR3wAid41ecvgkSJUTZ8crXF3tNpAUek1uJVVHGLLUCSmADMf7Th2ubUB9oTALPEW",
  "key9": "5CBmnTrZTznbWGNMzLnUfhyfKHNKHmHgFBna7Q7i5NNY9HbCkZXDAusDcbG8YyR8XAaUUHn345Qk8z6W3BJUpBF7",
  "key10": "2zjT4NWyrfuBoUAALp1DniWU4JJHFwASJZQrHDR6seMKV4b1psWNma5QM8TwHiAg8BwVwqhnGkg37suDS4B57ntP",
  "key11": "4GXCTArtefEkfcyaG66mhYGLwwHcEPoXkdA1VzTqxXjwxFkaK8z4thWTeS4pd4zyUK7GnbBBA4ncmD2ZWaYKs81x",
  "key12": "2vHazxPKVFwpLsBkKv9yjsiiLktrZ7gLoPAgMzG9sMJKJpGcSCCJpggzW2HxRbWHEfyJG3pt1rEbKpeLF1VjaV4Y",
  "key13": "3Xm5cS3rUSqQ7X8Z5XM99mfaSaDHfoHfkKe9SgsKjWYKrfk792BArhwmtSjC3x3t21qtT4PTZvXD7Fo5LY6CExAG",
  "key14": "3TnW7opX7nmA6ZHqmMHuNsncXKuDSaJMxnz4eqhusyC72QERqjnZRbvisWzMghvF84SP5QbUSGry8E1Kq6ZwduCG",
  "key15": "2b7PBA1CALNoxgQohYtD6W22ANFGDAvYVfhkvdcGK1sUeDShFhUFgk8LLaF1MbeJvqtyCUFK8Zpj2TvdSQTeHEz9",
  "key16": "5X91drjvfuSSSm1a7aH5uzySSSBh8WpcXLP6qszyce52PzCPgmsm8WFB99dyAJXx9pWurzjq3sDSRZDkw6Cm7bpR",
  "key17": "W7r8Ywoi286diL7SYe9gyECMosXHMB1rVHeLLjnEkFvocrY9WUWquzLFg71YHircjwnKjXFLu3T8WE7C2nUNyNs",
  "key18": "4eZogg2jaTfAebVJYaUY42JfcmnxoQxwtFxHKiSpjYNh1tY8BLRunzJitehAgmvbx8RK3rteEGzrhYtkSCS5hP85",
  "key19": "2r7jcgQCiX63utJHkADEmgQDPWoKjJLR7XUeqc1sWfkvipvN2EEt1KViRsY15E7kAU33qM3GpUscFtA9V8e52Y6x",
  "key20": "2NMtwUKBrxVUGR7pvWecGa5nWTrogK5ZiHTYbd26qqMCdoHJ857YCgei6f7ZA3N7Xy4KA3bneCnPAWNy2cQnRemo",
  "key21": "4aM4s6UJ2ywgGi8ho8YQRjN4YXT5wB6TrgrFifMnFkFszzYH1JLNHoXKCkQrKXPGjv83nj4z6zt9gsfPmAz2ozvy",
  "key22": "62N68enFbhRVQoTbrbAVmMBNapYvSYHM9SFK9xEYTWYytES6JeSjiPHeDcLPCQHXgjZeh25o6TKWrpVB9awYD7FJ",
  "key23": "4cRjZ3i59eYSfTrHCZYVEepiyR2z6LB9ns5dJ6aVbUsHmP8CihvUAcZLa6yMUPcEGvcMn9ZkChTsoU7kC2zLqa6w",
  "key24": "5rkFzvLYYwHobgRgPRBosYpMwaPe89UTueGTK6eWK4SKkzmGfzpKck18wmjozhFp7VrRckEtD2hCmojDJLijPnEH",
  "key25": "2g92VfidF6fAhUEBZ7wsfXhtT3JGwURxhbkgGhJrLBe5TshAWrwn426Qnr9cQiMuXbJ8iuDGSci3R7Hgka7v1ci8",
  "key26": "34Hyvy63noNAdrautNFUFHDtKGLa5u9nZUjs2ES549AjUSowdtB1wc6Pa62ywAsZPTgcgSs79LYvLRtoo6Sy3r8J",
  "key27": "5nS7qz5LYeMDqMtFXeicwyF8yKhgdeve4MLpswuDha6myrmNaP1ZTw2UFBTMfqwgkGiVoeyQiAhv76cv47uBV7Z7",
  "key28": "2DnC5KRmQoBPCgYeWnaXDGTwByZCu3k4MsrajS6tcLnDct67vKwJsVPPGZToAymSZseWkuHaqb3WDKkG5d3p3BSx",
  "key29": "5AesDJT9rVNG7tsiA5VGto4NM3U1ouGmcc97db6XbNXxibDnBMmS7FVGSXCbme1uKGK1cTKJhny4wVwL6X7C7NBg",
  "key30": "2HjPQCGv1c3v9aPK4Mc8648bAofvaYziRLyUbuaiJiWwsevJZdinbQGCAUErJLhktEXhtdKZ3YsQMSY1xQoUSXjZ",
  "key31": "5RwPfdaDDuJYX8BzzRcBcQgxeRpRabjVyZJmEVPYjKy43tizBU3Rpjp1W8SAu9eSrEJkK1ecmoR1h6AR6dBmABQx",
  "key32": "3ZePFCmQp3uJMUhWbVsR6tLZBq4vZgqeC9nfWw549ubUHaSmmRWApQKfbZEBGWLTxCSSRJe6Sh4bcrfTcvCueebx",
  "key33": "4DYrBpCsJ7JrCdbP5GBy8P6bRfoYdc2uwFyMa7N396PcmbAobMXc3tVuKHEJNmVsRPVbUGd6Ngwb6PjSx4b4zuMJ",
  "key34": "52B8TtnZx1D76YLRDQedninN8hrgj2x6Ywe2LEDRpQgTnHoMyM6BEX7aVzu5ur9nusyzoKJjizU4juAJJtdbJh8i",
  "key35": "5BTtwSjjRV8PKsVfzb7R4BBCa64S5xUQTehB4gRHBGtxrCUST5jHkwvVZMbpipfGrSqyLdLAbopTdCHoBD5aTxV5",
  "key36": "59cF6dECx4y6W7wH1gRbHtAhBAAz5ThGbtEbBfbmujkgYFq2uafCvxkqB8ZkXHa7e3ZHgKFCaQ62aM43GEEGNw7o",
  "key37": "4TnVktaqkvxGmtaMyhTkkZnpFE5sY6nTfTNsQscNxBDbjzkmAC7khXwhQZhb38uSVxNaHaf6jMMNJWGdux42qWeL",
  "key38": "3Lteqc2SeYeNK3oYoHFMWQMSzXKQk338XReZa7R5Cay6Y5522GimRAb8uYzT6uBAsG6xXDVDc8f8PqogixeR6SsE",
  "key39": "5BsJuMJTHm47gjTGk31nPehSZ12j2x5N2e8rJgyScD4WVBsiQg91BMNwNfV5gphgVzUDNz1zc4neNmVXf6XXdY8J",
  "key40": "4cbsde8zPFoZwPjFzX9C3pqZbG1ejkznNEwTYETqxYGCxkUw1R68kFTLemnnsYaoDh3rtbDsMwvgPSxqaEpAWeoR",
  "key41": "5cRAGZXuKpKxboJLy8yeeEvGHwR5JA4ZuWBwpLfEKVa9mrrsFLnsaExJ2CkjYpYcmfCNSXtAPa2ZnQcpsNEcHmFM",
  "key42": "2yJTr7eBq6Tqdc9ntFRRSXLusyRmzAGgBZEr85xCEkLK2ZcBteLjtbKbT1c3NHwWjNaAmuv6GovQNNgVcfWmcdXR",
  "key43": "2n8A8YFJG7awSvfCZv2XYjhjJCZw6q7UVsKp7Qu8ZKGDtWvNLoXVjG6AnNyiawRF5k6gi4S7k3NBK2B41GbimAmy",
  "key44": "2c44BioP1GoGhbDvYs5tHL8NWBTJorjADThXzBznFcnv58xGje8wAkS52z8Rp1StaS5DoUCVTbcwTsXP5c8K8XPT",
  "key45": "42UWkCSsjp7gDxenUpUUCra8EXCmvusKax7Ecqczb2WH4VVNmwckbLKKnJ342o9uuiBwtb8LbvZfePViz4BNHK9g",
  "key46": "4J9QifHEbPkBm3ivoYqTG3cs5wDewFy7JParrSKxeNkSQCoXtkyW77VQcpNemFggw9DNPdmbryhkCzhzhv7jCznX",
  "key47": "4TJtLszrLGiLL61AKvwWAxcTgm3f6NeDmJrV9FDYfeSf4CygVfP8o4MhyF62EFw9Yyph6MGDQRdg1fm4zBxq4MvG"
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
