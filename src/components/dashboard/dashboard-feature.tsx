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
    "Ks4jVWpoQ8N4BT78n2fWwfozFYnm1BQH6DTpn3Fd9VYYAP4uLXX4kJ6vTVBeH9pTT8D5qJfLGZMknSDP5WkaDub"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XfnyNdyrQriuyrqk6Pgea8FYBXsqnQu1dPxmdZagqXCHvWqDDJ6SJgLubYSnCZA2JESCdDaT92vmr8qBTwgBPkK",
  "key1": "5wMvJr6JP4URTRQPk6THhwDX9QBvt9ab31WaMd3MwkVn6EezNw23ZZeP6syPKUaqSFpc85wkS73TtfkTWirTR82P",
  "key2": "5C3z3mjH85BRToJPVwgcfzeTbwcup1phBn41CLb2BGGaFKL7utrPg4kQxJduo3r1KaGUvbQf3AQwPKfnDvqpEFbr",
  "key3": "4VYanFmx5xHvFJQyyyAqJpXiwAafymXwNVai3CocxFgBG5PCThWH8Gd4UTyD6KuWgbM9J65umrq6mYfHUWGcdUDc",
  "key4": "3fhzrQvKvR13N5tfKCXnNz5DcsbGLGLxXNNrDZJN6zv1xjQ2w9XDyNiFtzR1ebsN6QdQqVDbnWoehazAd8uQ8iHv",
  "key5": "HPqUTGtZhaCKvsUiN5bf6x1ghWrPiWg6zjf5mse5LhTvCRLKKsVhBSZDgDxMKcewRxCe9S8vc79YAo1iMsQuF4a",
  "key6": "4jeZPkAH8xcZRXRFBFbRxQrNP7seWCsn4tLEEhkqxKuDpXLaBgiELoYha3R4fnwEPFfGJyZecewv9dJNC6CqYUgu",
  "key7": "FFTo2gXNwJp9g9conPPwHi7qcLZ7XZR4rKv8UHqamaKQ1z91HRS85ub4qStsFPdQ4VdGB7VpsX6iVRFqihwYNda",
  "key8": "QyiH8juF2WHDNrqUAGCicko4wW9fCi5mHjqLS1mk8Wb5o1vCW5mqdozQ1p3h8qGSfLcB9gVaUTFDDQhTapsdTnM",
  "key9": "4ttZimBbD3WWdeXRkyJrGEpUsdhVhuv7RWRAbboyFVg2AJFbcvh4zurjNmPaVJUr2GMUCfYos2BwewZob2X2BfKe",
  "key10": "3sb6nf315FdtZoEs84b1tBLABEmjJfermodZwmt2ArT5e3ag2yUR8CCyJ871aa3kdDKd41dC4R4D8suoVfL4orn1",
  "key11": "2Ct5oHiKmbyHUGqSTeNLB48nZ8uUBiNtHTv9EGr2829atHTLkHsSR7wdMTMFpBZF3iUof6Vy3Vmt28h3SDgcQ7m7",
  "key12": "P5XAjoewj3eNXoSknQC9BUXTuCAVWDr9z3M2bCetcxznpjVEFyAVV8BgSWgT1YUkTy8DgKEiLN2TvLYMY1weQKw",
  "key13": "4NxvQEK36EPs7QgEW4kj5J4CB8oYDwYVbCtkJZURbMJF9HXxhAa5goVGaYcaLchSUUPxbfbRxUmH45Xwrx8aeA4Q",
  "key14": "4k2Ke1ocqjQPmU5V4fPVKN4rndCaSnoYLES2F1KZLAtqfDcvAUGPek8kDM5KFk423w4rqf7SkYBJ5yuPMvKybS5z",
  "key15": "36UQA1WJELCX9gacQ8Ekw6ZqxiGcHBFLFJhFvFuxSSbYUiFYja3c6dtM3pe6xTrVrRVMK1b4Ck45hFGUWsQ8s9u4",
  "key16": "Lzyi4VQeqUnsWwYRjNtPfMcWtCNXNn5jpQcQ13qzbWKADoKSnDPex59855CeoxFyDVRc7Ng6eQJLMaWAg9jTka4",
  "key17": "57XHPXa4xMWkcLF5XMDSjE5Qzz2W6gxEV2xChAwK6Cum8VVFtjt5PDChsnrwueWyVgzFRSqkkyHZomMQmB4qnMpK",
  "key18": "5yWc7DGmdWtJ9tWNXKFP1MUh5C6c9ENEo4zRemQ295vqkA3zrnCi97JjahQVFj16QfdyatMTmRDdroV4NswZuYBr",
  "key19": "3DdwTNjkuC2TBKiFbLvoSdHcueTFem5dTMkMfavRLUA2jNfjupF8LGpz7agU3FQeRXhpJcdUE5fCNfJYXNVS9jw2",
  "key20": "468utfjkyTtcp6bZpVhCp76hiP6bn8byshrnoVmhsSZ4o89qjxxnVq4Kg1Mvp8C69KDC4AHNTSqynCVMp2mNP6X4",
  "key21": "RsFEXPJs34JUf1kjLZYCdFXdf3kAdxsiymmxVmvh3Q1r3Sjxj7wH8GgFyynZdbjQn4AaZmyxWy4xMAA3HXxkLoc",
  "key22": "63K3NAKf15fY5PtMkFdvFeYGN2VnZm3XPFJ9Ln4kySpTxdybnUrDxD1LpkyosS86a6RLxDdonmyyzBEPUKvhxTeA",
  "key23": "3tqaaTJ8tEVUNTGbZDoTxXj5S2hqnJi2o9LQwV5ALB8vWdJTJo77UxrLhGQNmLtRyTvrt7yKtHMNPaYdvcEZb8Lv",
  "key24": "2NUKYqyHYu2GXxaEfjsUoZRjznoUdfKDkfUT9Kv86kvz77YgU7vG2B9K1BBDfBWRh7xtaa32z8GEQcELWPFkPaJ5",
  "key25": "5GajkAkP1opfpdH1KbUAgYK2QT2oGGGFjdtxCQKpjzUNJQqZctDiBSWvHad9hs4cGo37BDUEQmkK9E1hPUwHmbnn",
  "key26": "3K1mh6116VCTnQ2bfS47gLBoJVEEV6TXuiR7ZbzUCGpWjPTw6CvNsyxzotmT9GCMn2PCwjqCduF62hbLw7cWdAdd",
  "key27": "53SkrS79mc3fqvD7NnYMizqSZq1ZZMStNsvNkTBsGXm612jCZLsLSDeucgcrTAsqDp2ECEFRXP3LwyMLqJDqxfhP",
  "key28": "2T7jp1JiJYB2ghmRvqu58VUGTkSyEUNP63E3CMnBR5XzPounoPKSdVsA27ag2fkuRJo57WBjFZyEpfZHyUnKHFAw",
  "key29": "33wSahbhSzenNPDQvfxAyz5VRivYXobDN1Wcn1AKQDJeMxzXdu5BoZZ6vsAmC7NFx58sbipgGgxqDBPaKMWRF9Sh",
  "key30": "UxbmFu4juyU1CM9Ddyzhz6thwoKJLVXiRdNoSdrspWfct2VqdEqy133CtxvS5ZQeSswo2PgCnashHXHyvbd2hsA",
  "key31": "4YErumLT6JPdhR7zuSWioiPrbf4ZZdQV1PU6yjY7fcbX3bZwdm9LYAW9BrUtKkZgbcqqZr6FKryHBv7xKYLtC2SK",
  "key32": "9d2RnjjJdzyH7nRMDkcS9wyKy8ZUEr7GcAjVnbvxmYiNyudFTmsRgpdNgsFoPZonKYfdJY4tYm6yCCGoaskvrsz",
  "key33": "7g8cMCPswwP82wwg8gc2Um2uTMYew6pwJUQNWuvMYf8Dk2dKxgDiiu6T695JDoE5ppThaRiSM7Pa22zPAKiUbEy",
  "key34": "2TecgDNTvr9h6Pn1oZUqb9UnhLhFmj5PyBepXqeTvVnUTPSp4Nf7495kyWMDbqmStvXJUWwLNdQPrmAqD4kV6C8i",
  "key35": "4wMbveBHCHpDKZkrz6By3ELpDCuzS5Y2ReoQqWTw4poF5k9uLKE26pov3NDqFCPtoYriCWtobSnnRTRrNRTrYM6Y"
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
