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
    "4VR3Jwze5Ah37MBYj9cUzWpFqnZH9HPms63NHtkeMvkWcXsWP4hauE37757D79rLSeQCaHphhaWXkmzjAHGbz1uE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47hApTe5bD1U7YiJwcoqint4uTxmeMzGZzRfhmSRH6gWTmpZgNELbJB2imXsTEacbZK3Tn2wmRH6M3As2FFv3HtR",
  "key1": "5cZhEYPz77iKm3xTF74ZkxJUnMrrK5ArUcRPAiv6uTQWkttfFwmDWjdPbU6m9LbSLJkiNd9QcEwJWcYJRs7BgxTq",
  "key2": "3KL8w8tNZZPtn1E4Wd2JjzDvZmU9BrrxWtCnBJKTveJYeH82Abrb9WUd514wbpSkcaWWkrDPBiw1K5t4CDW8upY5",
  "key3": "5HvWDQkk1dqcgqWonqFqq6BHugSngsKGg9L5JFq4mLz8MskpJXGycW8cCvo8XtTCUFoLwxpL3eoPzqdrASKnC8kU",
  "key4": "2Kxa9tg4wBbdMSZVmbZ49BCUW8mR2EATK42KzzVywTYUHhZitDeZW4APG7rvZM6zZQVvdRJRt5yz3RfztLWeehzg",
  "key5": "2WoZn8Pz3PGJfpvGEkSDcrPDLXPcibaZib2mHDBagWN6yBNnrY8wAKe5h1u4S6WxFNXreWTCbNwuvsviwHssg5ha",
  "key6": "AKzXFtvqYb2Z22kWtNNCCiBgLndZe5rvqu4SF5Zz2H1ZQSSfrbbfAhtyZTBLs9UkpZQVdBRXp1etgHjW2LEBosx",
  "key7": "5vre3B3oEYDpwD9jYJgBpW1Rn6Mvv923T8zStS117RHcSZUXr3pAPwawZCdXEHj8qXF7TmKKNRfjUj8NHasft34x",
  "key8": "58zFRW79QBB1sWuoJihpvLd5bbjRRrQqja8X1ATMcccBMo1wVB7STrMC7KthkV2mDeZZtqFp7xreKVEbxitDvHY2",
  "key9": "4jKMWTjvpwdDXCUGVhQFA2qPkhQ8aP8s7MxxmDZNshpaZofQ8cRt6BNwp9Qs1oZnUNQet319Sup6Cm2EhBjpYP2A",
  "key10": "4d6HESxxNW4XaLaTSxRSsuLXyaQGp5gHbcDnKEtYPqfN1XqvECKHaGiDqQYwgZM8mhU8yXaEDjmSxeaJMNnGUJga",
  "key11": "4bKwJi33UonBLmkSi42cXftV6MFTR577Mf3Rs1RFJRYu6gh5B4ygyDdTSKssTizucnzwhETqSXmwwLSX7Xr3jrrK",
  "key12": "3rwWJ77QMUMgw42geTf7ncGoJgCBP4kztjkGoxa195nGPfenUGCAT7VyFixgevTagC346oW4FSWURVkRFpxdVbJH",
  "key13": "5AhAS8zozuC4hV8G1a2ZF5kyUTyyYqhu3EwmaoRA2GKtM9SALnvZZNmJchTcPxrWa1D9oyhXJCPmdguphi2ZjjhD",
  "key14": "5oWJvHLvQEgqyj2hcSf5EVL7SdmEZiG6SiQCtaX3Ek9JZJrMRkCkgTeAWr6GKiZyz5qDB6dcCvX53qPAeSrXpwdw",
  "key15": "4iuhCLp3knjeFjeTHRQPwiPxU31w46wJ3MYoJvreC5ypSxsoDEFRi7489eNA6ra6uxNH1D2oCH6quBRE7urKYnEM",
  "key16": "2Jt6N96jVefbocaU4GXR8H23MYr1JLqEuJttoka7nYesahJD2hhQSz2KFHAzuojo9235KGvhcW9MdW2u2XdLWMSZ",
  "key17": "3K4kGka3hKXiNFgP5tnAJcS7GsfCp8m8niJzRi5P7mcENS4rFz28ziSVBEiasWYoSHh1kFthHwggvyzT915wa7cZ",
  "key18": "LbzEj7VDHZpjgCiNcFApwgC2bgduK8qLv9Yjtqkf5MDeeDjSaYMBHZ5QGJ5e2DYgZste1YAJqKMFj22SfokCYPq",
  "key19": "4wq4TPmr9RbteRmDyS7jC82z3UgJGKHiprpZoSi2teUL1y52ViELt1Nqd5gC7PVt29sBpX3wkpjDgRJcngJ4pVj6",
  "key20": "5VpJrMfxof9pcVi9rv5Z7i3itX1CimbPyfjJznojwAGsxLXXpVnWvxXRtcV3xsUriUaMy1XM7PXej1YTN3PqZKsA",
  "key21": "2mWMQLMTjbG4FnHNQACMFJFR7dEKE5oVf8RNaSahaEM8y3oFKycQMvQHw2yDz1VCJeH28togqBNuG4nD6iK1XT6K",
  "key22": "Yz66Knv2oAVibM1CaZJfZKPwvt6pPcYFQcsJS2E5ZcKw4iSvw2nywZkS7tKGYNLmsQEkXJDXaiBBFQxLn2siVLc",
  "key23": "21h6yYQiMPGPhAQRvoYJkK876cd6EPN4A78v5EFr6a7KkPEmoGCL1K7JE5aV41YKFUV2gifSEM6Qp6o9cPcm4Zw7",
  "key24": "VsC2drwpVwTV1sKAjd81Pci5ZrkQtZg2867Bq3LeDWPQ5L5knjp97TYY4pg7e4FfPdDky5HaawCDtKr4MXinWMP",
  "key25": "4HemdSyn4YMxz6xyfso9ruLRsnPRoxKyoSA3FeVaVqFNhhmUExjsp8R5L57Xe3Qc3fai73ydrPZEkNdLBP5LLvzJ",
  "key26": "5EGcLFzwosPcLDKBEwjvKGs3t791miGhjUmVnHJNo6rNhNmvAs1Df1HV1Zfedwqu79pva3WgEvtnt8qPziWkmz4J",
  "key27": "3qUxE7maUwFQebQPXPehWVa1bhtGdURpPijQun94ukDHnzcdrjG44HTNqz2sxTSxuKvt3CCUjmNakJub2Zho4m8n",
  "key28": "4xkpa5fNAawmS5vhdkcWfAju1dKoz56qaLrW4bhLqUGET3MvxVrWyPsKBjwXLj1oBbFB8cPxFwKe2eUsGkg1s5nw",
  "key29": "2aWv8m1uunZ6cVjVLRYftVJUhCd5Ev4CeMy61eYhVrNvXz3mDhEe2nPruajjPWFMPRzZ6TR9CtwVodQjiMJnYHia",
  "key30": "55nCnQNLK6xiAqmz8MkFWhTw2NTs3mYhh1qKhXskTx8HqonrsQpLDctTwW7sXjxUuSzb8BU96W5HsxBkpvWoCEyj",
  "key31": "2USa2Xrvd2M4QThxBza6SEhioayu7CTb1932W5LLrKznSWGej6YKsWKYdSN6L59RkMGUhvCknvE9gJ88TzoBXb71",
  "key32": "3YqmZWoPZ2T7w5nRsUN1pgVMqneP8cgLQEQbHs1UA8K8XkyJ7Yta6dAMBeHSx9wL8UGjWvqTbgVjhRZPsPJbnqWG",
  "key33": "42UX3152Toy1QTjTv5SVfHtT52msZf2zLZ7nPrVr3ZYVQQKwYxD6EbSZkJjJqM89JHTQmbmqWV4JVcUcASX57Wkp",
  "key34": "3UgFNWUUT8pGBmssvj9iSQ8Uxpbs7Tug7tVosET6zH59TmSD8zNKEki3H5t3aeJCFvWM9khbSYdwndwiJpyCaHUy",
  "key35": "4mFnj556MdQLndSi7JXxmEHkB4td7TZ8BPkASk7WPJzjCMCRUY1Prw7btbxQWVEnrFecBfr3bd9c9DS8bwm1NFBY",
  "key36": "3nCSv2JqwMyVXcWERMzFBBsCBnvsp46swq6PShNRarYijAgq8XdC7MgaTmWZmqSwWz2hAe3SLpiKkVjt39hoqZsa",
  "key37": "5YKpqhG2yAFJkZ4nz6Eu89rEd1Y26T4hHhq9tXtJCajTmUQcNa2AEN4P8pQWdZNpS7uTisvJ4C8WmJpH9us9a6Y6",
  "key38": "47AbyLJAhGReV6AxvfqyLg94rghA5UyYxC53G1ErDRHeaTVuQdtzinUaHud9ALYRDQDwmuFk3t4rFQ6i2f2E54PV",
  "key39": "4uNXDKtVvwU22zbySahQebNDYemVo1CSCztjgMmFYnSYiqWJnQkSvNuNtTVmdjpHZHTrepypBkhhfXdqg33BJgZy"
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
