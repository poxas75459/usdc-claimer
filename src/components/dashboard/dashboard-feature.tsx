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
    "3gRzFoxzPDUiYCGq74GAigP4mqNFHX3FoiMyw8FBHerGcbBCSG6Q8M1Bw8z2hCPeQCnhvfvMMgRs6odSV4paRoFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cdsu1xJNQqgcrWfb625NSVjNgwGhuh4g86pVNzEg8KWTmujvS7yf56nRbPy4DeBE7KkM7iCzpL9HrhcKCz8bgvm",
  "key1": "2Mz5NAnxXVCGMqCnupRbwm7HFwRUkccifPRmkMFm8GnuaiBfsM8ZAe7NExMpQcTRs3Gioug4fxN6dWv3r35mzKEU",
  "key2": "2uXSbdUGVbppdY6SUHkXwkrETMG1r82C3GRjX5EXyuqyPR2zKFTq2vMb3TueyRJAJTuA4cH2FDejr9nk1KuYqz6v",
  "key3": "4cnqLzTb5BeK2cPqFrWx2CUdLw5pzkgTk66HNoH3w7FqY6ghur9X1Gnaeu7z9QKp5UVGhYu4Bx88WMfvjJvAmrvh",
  "key4": "2TwRb3NfqmbCF1AZZTpEzxCgKJr8T8tfyJvARLmVX3ELX8q3mHfrzSqZpmVY8tQtQnccphjebBFvWcBZ7LwkHouy",
  "key5": "5RaVGY3X3eiLUyTgtBDWf39cVo8vLcHKTp97Ezewnqm1Do3f5BDDtoQFSGGsQQ9wFs48tjxNerpcSxZJyfjx8Tjh",
  "key6": "2c6eF9BFc3eKwntfMUc4snnsuN1CdjrrAazEwLc22r9nAvhVbApAEN8wZsKWid2ocmv7649QMnobp2yG29PrBCZ6",
  "key7": "47Jk6ZbRvSDvLxLt8HHr4a9jPacMiyRuzi97Q3NVqBMZ6MyMK8fhpLy9SFgZvvcRYH186ZRadWCb6tXg2FXsQg49",
  "key8": "4hgfHnBH6gNnJGeVL8VSpTw1TLpXjaYP6a14LrMWVXfez7NghRY7HFGpM3sz5veFTngXah6aKSofFDVypJghrHQu",
  "key9": "2Z3JzoEHrDsFMHq9SRgvUJseBZhuSY5wqvJmMn1DpumPHrsuFbBjGRgSj3o7itmKSQcXbJ9vbkEVMnzgoxvwrzru",
  "key10": "37ybDxLwMgPVxUUCXVK6NdnLSdhyi2Z1R7UoxkgwMwqfsLcve5RugvfmxVedzqBdgo4idkbUHqYBpD9YwJmx6kVv",
  "key11": "57sP9w8a6C15XZYBPsDp8hiPFyypiSHh3FSjd913hGDREqoAEC9v1z75epsCRji2irxe1E1pFpZhdQvvBHkKA14M",
  "key12": "3cwuirPF9PoJKGApobgCKS7WRXeo9bnj5sGWf93YoEsbkw25ELZ6SJqbAELTuQz2za7Rbij2kPnf4TFiHKcBw6LE",
  "key13": "4DaAZ7FWHCJZUcT4BrQCJFT4zQmBsa6ZVH2npHCeV8UTa7jGZWnLFQ9kYs2eEtCpP4xy3wGhHrzmLThZj8CEv5BA",
  "key14": "4PLbn5oNyVignGzczEH1wZLzWDm17s2K7n9pTJoWZNyCQW6ieUMfxu3je32Z9caRmcXDs43jRcunpRtrJrGbCpa",
  "key15": "2HLAN9J6dtQU7iYTT1mSAaEjgUhFsGfjEsQYrYB4g8ierkbojmxeq53B7TMtgL9grYzrz6uvkkcGfUApBKMCzH4e",
  "key16": "34PqYSVzrk5uDRJnmoLwGKw5TUaDzncaHvPYHF4gGDNntKGzauaiFdBLYm18G5bqkLLg1A9givsPhVPcNBU4fUiq",
  "key17": "3DiZyFSawRs5wRjoTN2k75yhZQtYTdDvWdoefPJWw534guCRPbsWUctEUNQ2v5eJ2SdCphkuXWbnYHqwUXJUgCd2",
  "key18": "5KkhjxrMuun9CA8hCsvbXMgSqxoC8y4igFDnjUV7vRbqUi4RYSvyHxE36s5qfryfcNBoS3n5VYBtdQ7pergDc6Bh",
  "key19": "3jQzvNuECj46S414baupn2xMeGsadZp2NuZLR3aKRHAW8eMez8eXGHfgrM4SAWN6jTsEDvAMoDb5aFqU6ZcntnCN",
  "key20": "3gjhodrzyQv7qXXzaagNUyKs5TX3BtkqjcVzPeos8U3ZsU4ebstoSrWjpRketqv7KrmfD7zV6qkfCQssWKABdQ9Y",
  "key21": "4NgyhcbVQT7GUwmao3JbP5Q7J3jvheVTsv53jrc4oLSJBx6RMM6rPQ2Mdg6sWf7UVT7gxABq59qEehsK4vHpuvV4",
  "key22": "5rHkwoQ3yaGvqBEkgMT5xzVA4jehaHGQXDgXUwHJz1psrGF61VVrDF2D6fyZfU7kMxiK6a8KP3FXuF6MhsQoqyty",
  "key23": "F6ibA6kpTdNCsSnK8w5fGn63hpDnuj4gvmfUgQh3cL5k1bPcvp6MEk86dKggcnc1FDTfsTj3S9GaSruKMZS2CH9",
  "key24": "4jDnuzdCYKdZKMgfyze6vzmtoDzRCMBdSqx83bg1nUBoWKd1iHNNw2173AuXHoe6cPDpxjAuBSLhwpmn1HzDdDYX",
  "key25": "3yo2W7oAzSzWFQuxqRJMazTJwcXsNQ4Q4XDFPp4mxG9tPGTjgu7HgBYvFcMTAymZzFeqftVGPMdtasMCsTzQHsDG",
  "key26": "bw5XBfwmExohGEMBP4pse3tScGVGuJXthd1yerqd6fzX6kPHavXXniGWnEUNAJbbNiuGeh5s6E82wRCYt7S3Trw",
  "key27": "5i6JCUmkBKkGTqAKCwW1PGSx1TqJSJxtN3ftDK7Z48QLUPcHkT8Z5B8uhUiSCSFQPS8ZUj15y7XbGG5jg6pD5NHz",
  "key28": "3vmYnCZcejCoqK1sdLjepMN3E2A9wbzxXUZWmunkscqsvrmdQMVcoAPLK9XhRU3tQwBat2w3F2DkRd1CMkDnT6kE",
  "key29": "3R4R2rFjNvcuXQwN6hHuAhcoWn4jCz1QfnGZsrAPjBgfJUHqD7UWaX11iLEXQUGBi26XJvi5EfoP7aHhJSK1vJ7A",
  "key30": "43XS5HNkodFYZfWKg9JYsYqQK6rY1bu6GNMBgwAxB3mgrHsDhaY9AiwfJEQgRERoAD897JjGXupmhpSHCLFXpcu4",
  "key31": "2psURrh3tahSMkTrstf52XJi7nN6tgRHspUvectGb1wwrMVxYTL6gS7rhT25eWvnguqRVG32UmGARyX523QypVFz",
  "key32": "5bQ3KHLsR1Ps7yHz3J2hD2TGRtvJAPwj17brJcPahrHqJTz7ah3k2nrPToC7hpMwMoGQsskQwuo2aTt6v4iN2cpn",
  "key33": "2VZsq3wHPDfcDyHi3eG9Lhcy1Ft4Mi4782sFbzsn1r8yHeaRYkDADPeSBcCxbSTqY7gYgU9oHUKHSM3LcshMWhP2",
  "key34": "34r3ZvEqZyMw8Kf1QjTDWinpVe7U9oqA4NYbywF8djNBwhhAYgeG3wDGnsZAv4uiXkaq7aFuD5T7oiKEzxYM5VkQ",
  "key35": "3FjATpjapMMi2RYBrFpUcqRqeH23J7CJ7mq3HQgZqyLdhvQ1sSmJ27noGjSiSdVF5UeBG6mx9zWYRkaPErk7PPE2",
  "key36": "5CJQWtqvaXxY82qf5HEDejgtJuo9Z4LhNDnHH9N6AozJeQGAX6f8dZ474D6R1fCbvNApjr8UvnvNz9L9nwUNpq8m",
  "key37": "2Q3vi26iff4svNv2F8jmVyugasBLbMvBNagxu3Kucog8fJbGbAVXYY7JGN4zbrKeQ1UFiFsj58bk8yJgPU7TREaC",
  "key38": "5ny5thUgdeeofjhepVkJYUxZa6tQccccqe7jcvcyfyvivAv1NcsZcqPTs5ZWV1pJVA1yVC54oyKafCqoMYwqwSFz",
  "key39": "5g2r4bB6h4oaL2G2kLjpjgMWnvvx72rhWVy2bgFYyqjZ8tL1kXc8CpXr6NAaDBTDBEFQEt9C5uaZUE4mFQ59r7K7",
  "key40": "2WPCxbueaZDS85eK6GM316cLNFKPR7ksxi6Eh4PurzGEbYfcXkVa1aZpq1EWaBiFP7vwzq4kXdCjFeomGznaDoLS",
  "key41": "cyRrsfLammubB6WF36LqsCjgCWCnMdmVcyuaPNycCERPgEJ4ugyLgFf7754nFdmV5B9NDNNwGvn98jYz27unNrv",
  "key42": "645ndacwtEyn5NksT9HutgCvJ5PkeQemkAJ5u59Q4Y3Je586YkuQnbQgAws2mzCdtxCpEr9irBNN3Tay8eM5uLe2",
  "key43": "m8PY5yhqVcXiVxiCk7rbxHthaGQ5E5inG2mnfpsSgemvZfTMz8RScuawmJdYpHGVhkigvxDqam8syHqpHbUAXxx",
  "key44": "3jYU9dUKRAiwSyxPCj85YK4PYDMAWD8M5Crtx6XAimK3i5g5vr8SR7tw1kaYmqT3R2Brc3gJGETHU5r7ZZzJhTgR",
  "key45": "SZRF5j2LUPM6nraU7FCbCt2yLKtU7zNJN3ZjQUgY86e1WLp6ja294H3RTdYHrdgW4Cb7gpBp6mQgKEVo8mb1kga",
  "key46": "newVmBLJR6Mxd6f644cxiSdeUTk9PwTdrWi9D8zFct5rxaUbnWRMcg2FVcxr8X2b9fYkELgbqDWtX9oqfafStqD",
  "key47": "2bnHQDEdNmimGF8xSgFSyvJARuKP6qQuZdTdrD1XjgXvSiE5jQEtmvxMcT2XrzmsrHCY5ma77P8A97z12WkA1jns",
  "key48": "2BLhyEUttM9AnoAhi6P9dapihpbpJpePJi5Sp8MJD7ZGZTQoFm5fz3K8sUuqn96jub8qwqK4zy2MmWvZTAxGRsRm",
  "key49": "3c8QjqgDo2Fkw8bQkHoCPKxd3NKePtnR17WiLzMZpf88oxxPdBCVxiTK1agShN1cCvwSCiiwyZPtYwPsupYxjjH8"
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
