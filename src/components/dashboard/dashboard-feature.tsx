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
    "25Pd5xjA3rNAVvGx3kjnGPvn1BoEfFTxz6jKGfK6VqcDRw6NKNGKAArwSazewqy2wpzTzzYS5diFkkw1n1KvigTE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1YzS2zRS2Qg9kjgw5z9xDayg8HNfkwQ7eUgJJqtyz2GK1QyVnv56FHipk1Rnoy9CcJwcUJC1f9PqgohrxLjAU7v",
  "key1": "26rgyFCbpAvJrkHcScdbYo3Ywc8GQQh7xBiHNfLsCmwgQL8e5nVKhhuRT2ReASHGhyH26SS67XeYsT6hjE1fh3kD",
  "key2": "34xjr86TkMfZMuGtG7o85vtUbB1XCqXMTNwfmjcJxRMqP7tWr7itojyrDC6KgpVQovLJ4LE6ztQkV4GodPuaPGc8",
  "key3": "2XGZnspQprrWjbPtoAA5UT4J2Mjr9tA6QwYo5tR6UmZgEQCSC1KGBnfn1bbBgq79sFcmsZmRAXJ1zUsuyNuKSWJh",
  "key4": "5tLABjsNu5SNc2wBCtHvJCBVgHhJbLRgZBMhSNYCuLGmW1VfzY8X71uBMohWaWLM6Cfh45XpzRHb571prvsgxvP4",
  "key5": "39Ws81JaxMNUrX879QKNadvtJ5WAc8DcvCfAm1VVXTH27GBvb5YaKrvHQTipMruWin1Jvmt5uB9aXe37TNzRSAmX",
  "key6": "JdpQtU55DLcNNf9sXA1EzUYU7otP5kown4ZYe5RoSVR7Crc8BtxNLdSoyibLLcdECRzcZ3rtTJLrYHFZSEQ1Dss",
  "key7": "63KgGzLoNWA6LrPFXg34Ux2es4mrYkCf61DLmcT7uXHM3hm8F45KXxRGJf3tXJQ73EJmtCAiHhYZdXGfhHT2T1sT",
  "key8": "31jAF5hexFWJRLVJZNL1LbdvBvcsBboTkNyjQSWv1J1nXLFNKPADWWX5NJVY9gYX1TsjKQQLk3k6Ue4Rq4YrFBjt",
  "key9": "K92rUv5ewnXRL3YGyT5AvARjXg2G5mnnTNS8ZRS7EddUwSzmVRxLjmQfRJ6vvqoFLgo9XKjepBxGKEgiMtJJqaE",
  "key10": "2ZLqvQtXq8nqiENLH7XJVzy7aYcMuFVwT1ZeL6QDu1t6nce79AMr8oWvRgwJtPWUSzvqLAgkdgVkGK2RnLbws8Bt",
  "key11": "4EkhjMTJBNtjb8s5YGwLuFraGnj6hEaikF8JdPWqrfxJP7Tton1DgteKpBotUGwMuxzZ9RMGVxUodjzZBukk8GFK",
  "key12": "291Nij3MkDhJq9Ciq4dLgLSKgiLYaC46stiUR4N2rd8ha4R8pqXmuJNbTtSpok4raJaDqwSVXPR2VE12YJ6RXozs",
  "key13": "2WrCgLpMdWoLxtWLaQzp8aGQXotMHU458PAF12k7nRpZjHA9tquTbKjB18Ho9E75vboELYxk8JLQXNDHW1fX21YK",
  "key14": "3kFvai2DNRg2r3iHMs2gdfVdMUf4A7S7xkM54U6MWCQrzXbYRXdGMxSrYCvdLVU5uxZeQ9zYug5vksjuBSFbw967",
  "key15": "5sbzCypbNRU8ZKeVRL9cPDsRwqdh36MZULH9cvrZaodvjbsEjBqsAASeo67rohwyoq3wvkWcFfjJibPPfsZaGVjj",
  "key16": "476LDmXMeb9Gdvkuudhqem9f47sF8rvE7fadryZR7zs8QCR9acc4EMTCPLYqA3TEg2UGDTyBGAQQ9AvDeDRKATtj",
  "key17": "4xrD1SkcGjhmNJ23eBtKxsq61eCmvF6UDc1iYuq5MCAJBocJo7oSfv9R56PaEesLYCYcWNiA2kMZGE2jrnzEiuU7",
  "key18": "296etXYDsrVoGdQfpr5H226wx4mETK32aVadNGp56aRmxvRpjJFXR7ZzN94QRR3MvZ9aGXS4WH7aU8t5mfpshv12",
  "key19": "5kiA3YCJAA3wZycsZ5Upr5wk26d3FKcEouqwF6WAVMy1EiTkqCx15kxJeArbGrB9swHJRGc2wqRMcwKB5ntoW9Rq",
  "key20": "3Wya3nUQ2C8BMSsc1sM2NgQyCd7DEemD5D16UNp4y7kXwaVpHydV2aj9ii68VwuMkv71EKzZ3ttAjjxq2KR7VR75",
  "key21": "5DN6C52GaXCgV9rZ2aVeFMoRCvgiBhWNSJkiNYWdpPErZ5cY1jcnSmwxds5TmpeBE2gF1WoeJUFtUXEe9evsXpG4",
  "key22": "3W2m2bhSAqrYseJjHXrJF3nUgTkHfLyoFHvLivjGYkirowtCUM8kq7hNKLTCfyJQRQbKkKs6ANti2EhALipHGnub",
  "key23": "3W7sFDeWv93EpSRCzHFo1gb144LmtRakM1G82uuD5f74GUbhuxXJQNhBRjqiF5GRDeut5kqKyg1LxCgM9mh3U3uY",
  "key24": "ashEibgyi4HghSn3sPorke3NA6nyU92Ud9zXhUTNA9gTfJjjfh266rA2ffYE3HjirzYQ6719a9LMCeyCRYHq4qp",
  "key25": "sbLE5zxLNpbT2K1Kranjfr64bNhr69bA4NX1asP8EWg7w9DJVzFCotGxtzi8A2MXRm4g1o24JF1Kkjq1gyFVUsF",
  "key26": "4SWbTbikdDv3yiVUPa5qja5EHVSCyc1J6FzZrgtYdnEpG6fqEfbmHEDX5P1d88iMwJkMV6EtHZ1jYSJpCFGxpaYy",
  "key27": "2rqnX9e7BnCMAz7WD3q7fWrWKDe7fYyy3FpR6xozffBNELZKGPyRYiftzkHkzw8T7cnk1Q8rMurPmdV9fCqmQstP",
  "key28": "3poVPAts1TbjFActZwMzcXq8Zsbrri3j9Fzuweg72YWVyVhdcVPKRJ4mG3EbXVfNz1iTxLRyhgTbiXi91SVzf2G1",
  "key29": "dzzZf3un5VGEjKogfba3MxSRkF3JjZFKpEEGtj3gWJccG2diPmEc4245RpMcXa3tcvuvsS2nFoJxkgysfNFJ7sE",
  "key30": "Te3XNGixq1eT8oyv5AJUEasSZxcak2AbLStAMqDqJy7mfCT1rYR3BJwf3aLcEJEEKmSNcUTQrjPVmap1MpwT7Dz",
  "key31": "2Kj84qfoYuqf5Smr4osgYPa1Mb8SiQcXwFrXpkL6bNTSPnVcPmDXUhzwrwah3PwDCs652SVFc69htqR4njvt3Mbq",
  "key32": "5DDUsbUkFX189xDPrNXRg2JjZnVPGpbH1yNETyMwqLgQWhimmcGzntUkCzpLNMKPtZaLser4bwHkFEnhfoNuhpoP",
  "key33": "5x7WKec1iU8Cvpy9Uq3TTiuMMdRDj6nSZTU1BqBjpJ11Wv7BAZTC3xB3s1VHRvd6Axqnv1Gg7eJr7sxg6dpWXZhm",
  "key34": "4LJ86mRe6676t5YbCuWX71ikPKT154MWJHs2Hz6cEHAD8R41ptauFpee1cWuUzwachePpZddgDiuedakdd5yapqE",
  "key35": "3RXBjoXrJKTNpZHkYkgnF7c1wADFifPgeKikBYJd625joMKX1BkHV6RFbioBVtEnCXANosQ2Buc2AFkyMhdJpRnG",
  "key36": "2hqkdvwhjo8UE1nx9Fq7P3sZsmoHjX4NjKig7fNF1xmw1xmGgHgQ238gPdgScCCRaq2zwXzmrkgSCSQasF4pEAfr",
  "key37": "2FJmecSov9Eq8VQSMxN3DNpsyfgFYcPoaRbGcg93bCSG5WVhmyM3znaemt8GjuXyqbEzUwugGSJktqLcFq5YrvEk",
  "key38": "37ZfawTFP4ftXXABUJ78fcKZFwoixpa1NsaGp6EQdiTUdeQ92GbEqf4xyU8NLAeUe21sx69vBLWkiDC44m1B8C7H",
  "key39": "2Zyo7eb5YwV4TeGgPt3JJUbhEV2nXPneGC1iKBQsUKRRxS4BWRwJnDz1FsBrFhvmPFQREJREg4Czu45TmDyEjB57"
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
