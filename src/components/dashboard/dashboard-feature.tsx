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
    "3RatjVFEBwrh6qiVANZuEus9ZdEhigxctwcG5rdguTnJzJcCxcK572LXdcDd9m7MZ4RzGTamZuH79c7Pf6nPS89R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26bhCZtXEfmEHBSn2j2EQnjEsiThJ51tQ3qQKxgfqqQ7oUjSf6N1WndKLduskAB1vbRUYYGapvvMLkoCmq5sousT",
  "key1": "5oERHmiwT2yHbH79Tv7CXDfgxGt9qf44YMHn5WTRXWvkKm49wgFkqddF93qcDGYQ9YCKS8U84VXSoE5mKn5B4xMN",
  "key2": "LMQFwv1x9pZLVDEfXGJB3E1UffQQ64hsdkJifnBZLChVb6RtWThFj8JtXqwDmJgZw9AEiM25LsDU7jmBqKjJEmk",
  "key3": "47WdsAURSCh374sgy2sf3uSw7uG4kWAGF4e4HhKAYSDtAo7SkdFVNoVnnNYE5TkBhYhM8Ay5fckV1o6TWpKxeY3m",
  "key4": "3dWjNtXUfS1uvHdm38coTQgxh1pY8sug6BrSqDmXJenQvBfCkAC9Tqd44vgCAXnAFg2Nz6yQsG3hawCY6UmFfVB8",
  "key5": "5mBeKh1QMg2sgNuprR2DVeVZYH7Fi9aUGK1t4shiz6Q1mDfBTMmZVi1zXGdtUwkR8GDVdz8hc1F3xP1fAmFoKWLo",
  "key6": "eo9ySzNNauW9Vsm7yEkTsuBD1vMYMJAKqAqnZxQ2radaKujtdgUuoopmG8cvmUgjL1q3DHJzojMA7EiW9K3pxRF",
  "key7": "9nWZKn3PgdEH1kSExkuLJwfcqEUckDrVXbp5arJ89mBU8Uqb2CehJkXoBbgeQUJdUA5CA1uENKyLVPN5CHqEkRn",
  "key8": "5ERi2LXWcFPUDNHAV4tQFxJS3jBvHT6fzWvB9qD59K6JEZEB3gHoafQoKUad1aqj5K3qw4d7K7S55xz93di6aV6v",
  "key9": "2mWKAzsnSw3YPkRLKWGXVogVy5pgkDyc2FZitWtbgvAS8qBCovL5Sq65kqjSzv7TFtnPNxK5ykWc3wEaxvmY7yEt",
  "key10": "5R231LLi6uFwSrJ6RakYFwwuM5fkRrtQ5LqacRSU9CVEA6V6NTqVAtnUeFyKNiTRZiuTyYoefCY1ydCE5X7WMth2",
  "key11": "4PKdR1Y92ywNGpLVw21X5XEWjyRqNSZvK2Bjirrt1iUiCFqYkufnKGYpVUqY992S4X5kJt3pQHcNE3ssWaG55kB6",
  "key12": "4sBGbBCrHVSnqh6PjJVukwy1BBqZN9mf4ucfFHb862YbJujWzjbomNxQ21JJ3MRLQzkDF9qfj2iB79vkaxKh42gw",
  "key13": "9PkNNaM3tveJt6bpg1LcoLyZVPMtZyCNcEhGAkiqaR9oQk6dvSFxgj66BEzdjLcHFFozkscNuoAFxXeBrobwXj4",
  "key14": "3PxbxYL4u5yXkhDa5DieRPA9jh4cayz2Q9CuvyZ3n21SiyKHEtski3f8r85zAFsVQNGn4H1MDJSsD9V2K8P5zoyg",
  "key15": "ifojx3KP98WszGJtg5DdwVj4R8TxrjXgHDYUX3hFLBSqGkBRKGfMjwVKnSGimSWFd9gE4d7on763NMGyULkhRbi",
  "key16": "4AuccJZBzEsqHNmZEGst8qgDJf4GJywfZJbUryFmLn2u16aFyR4cwPjLgmhJNCYDbSkaWVWWQWdusjsHQRRUPrUn",
  "key17": "37keGLzx8bncdDWiDTJp2xmJHbRa4MouSfW6d2uvgF74sPfFugd4h1QsGz3MSxA621aCuRjZEE386Fgtbt55Ut1S",
  "key18": "2LzCtwGmjettwEBrXPcfwhHX79hfZT5nuiLW5pZ7JpRFKr7ahHsQpBeYXhxLLVNWdB1AFj8NqY5JvfYD4yrTf4yx",
  "key19": "4ZocCXd7EFY2bf4FjL2wZj2347gafNZJMPDHKYxenAaiu8R3pNPL3rBvpxjsU6xtMmoW66DhFTFAwTu1HBZHjjAP",
  "key20": "43sjVmgpxHbinZADm5bCccs2rEbFyYroEYEQfVjJqBec22QYcVem1MXLsxZvXtGX9xZkwrNsZuMKy3JbURGBvM2d",
  "key21": "7dGUg2LqCEsUDc6etpLEAad4GdYNfqdpRCqZc8WYeF15eCn1j2oU1txNqTgtQ8PT5Mx5PnbjU6M1hvPWyYybPCv",
  "key22": "2HbqXbttxZZvvert2sg9eHps5X9kFnwprdFpEqYn6Q2YWf3mfP32ELYVSS6BifTKwRZ669erQkUmMJxNSft9ZcHN",
  "key23": "45rEDa9EH19dh23iG3JbdNjcTajStEswF2TRY7KTtTuH1Z4puCsBZ68TRT7c3WTrLCRRku9gmWgKeMZAsRcSfFLu",
  "key24": "5Sy4VJx41gS8fQb7yCp8yUbpLVFVriNJ99fh1DSMDpjgLPzWagijgw6hgiSABJpVJTZQkf4xArt4BnbdmZPAQkQT",
  "key25": "2Av8Yu3cDzDozTAiH2sepPpLuw1jEZ9Zy9drwbDin2NA6Y7ZcUZk8SjZ8cLUPh6btTc96mbsHKX2c36EebhmhHPJ",
  "key26": "2NMK89y6PSg1yJJGhGBJwAfYrngMBva4WRdFQPsp9Vbm2WpTW4Ssxqe7gBKHus1QbjUH1G3QAikAEs9tMY4wTexG",
  "key27": "2qPwjTjDtmuzcMy5cKauKJTYVmW16bzD2qP7ZjWKiivioBJ6ujtBzeTB47mknDKy9i62o3KzooJTYGm37Stz5MpJ",
  "key28": "65n5Sv8UjgWeXWdsHdi7LemLjViJKGvkyWmeTNPWw7kbegBqErJX8u5uBpoWtf6xkJZ3G6KD2HMAJhQUGBtWtB5o",
  "key29": "i4Evp7T3Kv5bGMiB8icbjYFBWmGLEYau7v2m5zwxYwn9FYhGrf8tn8AtbHSi4sfcRur1ga5Yi9vCTMS5SXPNGKX",
  "key30": "3d7WpftBQJRF71eizQCjYh8PbXv4fcZUfb51iCZJ6YDxS7Ls7zDJpaZkbEJK9tkkTtLH1ajadTYRirtdYWJmYtsu",
  "key31": "484NjJZv143HYA7pa8tZNoYGBB7tieV9BVkCeEw6zkmhEB3jxnhHENpQKst5b3DbDSrHsX17nsm9cxVgu8NQ9zvJ",
  "key32": "F8QN8Ux9n2pKJDMfqA9URjnbwTtLSGW4AEpSN7CX3LFnjeviGZNrjgKkTsr1Vpu6GpGYC9pEtUr15LYZQ1aEtQt",
  "key33": "59i8oU74bf9CXAVPXhCrBTkhWyrr6q4rKLzXqdYpRAHXbNGGLWE3CZMSndgv9wWpd9H6n7hAoF1Gzap3ecNEa15b"
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
