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
    "3zwwFwZn3nUFXKr8BnPiDD8tpgcuTbQDtmPcn8AMCKnnrfF2ME32Bg2NiQdnB15Av89Ya7Hxnm5nHPMCfFRMbxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58wZwThhXDcR7suKTkfJJdZPkrv4wYfgkAW7Hn6gd3akXJapqSLgSbezqkuQz8YxS5Xjv642qyZtiMSpSbwxamxf",
  "key1": "5wAgHLX2vfdzjkVtaUBitHthn3LmbS7BaxnFCsK4yZR1KvL7FLZpN3c2TUssz7jbjY7TXZTDM3uuMQ51pHTB6fUm",
  "key2": "45PBe4JtZ6sjadzCLkKJE8yFaHnWjNQduPGiLNyH2cmxY4TbHdNZdgZH7mrHYjkea1cqY8PpduJZQ7ePbRUswJmE",
  "key3": "41AmcEUzvEoCpyeoJxj7oUS88We4ZdJ2EWW1yHwHhehRxDtoHkb8EWYbjw8JwYpdMKdDtaNSWUTafb7uenXqR8tS",
  "key4": "2MiXuAHNUkxbrkoQ2VSaWUta4785Nbe9Va86kZTorpR7Fh895W7es2LXJnPbvRQL5NY5jbbEjmmqYWxg2ebEvHfk",
  "key5": "3CrETcQExujXw5gw4aCsMQRe9eSCPiCpaEv7su3jf33oZfJQU2W2BKKGAPRdcifMej5Yn2gTwasMUKfmtCGfo8UF",
  "key6": "3YoJ4k2hoVPBcW8XR1HsJbqvTNtM7BezKgpTkLCT3wkYmp25uiYYXLm9gp26ruvV5sxEmueARpRJdL1C1ZK3qYrP",
  "key7": "61zv3RGGdrei5DJ9qabHWqcNnreAkQn5Nrjfmpz428hHAiHGRg7tMP3hNfjYNaRPmiTptEESKyzLC53ktbgcAaGc",
  "key8": "YdMXH13ZnSHMYhKUf1YyyywJ1QDNchurfq5wgfkKocHB4uV5KEHFT5X8pnmWv1mNaYtAbfMZQL3cHYqYmrfesyT",
  "key9": "YBuxPz6Dva6xJbX58HsT7DVwJtZYxecnPJioUexqrJQcxpHLain8sx3asvqTTeDk7Kgu6FWwbZFHBt7k6qytiXm",
  "key10": "3tFTQtmNP71En1gT8ZiGSNqNU1R4M5Suc5zppHgymUaJEREcQvKUckzA1TAbrcheUSoXUB926916yDthvLukhwfv",
  "key11": "2Myg51J68QJ73STHhAAcfr3FGiW1oJ1F5zZP8giZk5X4rUjcspTuj88UaHjBZEVNoTuyuCe1tL3MeshAJUw3cEDK",
  "key12": "2UeQB578zcA6QhwxhLK7rG2PeCAmyhQYF2o9GSNUfwB4EJykuXUnfeSH1rzrh5GFPzoXEJ8o9iz33if9qPFVqV9S",
  "key13": "2NL8VJbVeqkKnepVrKESZu7nDBcbrEJrS7dSNV3YNt9bAoeu4ihn6KxHtgfBpcLmBRAeaAPswLrqTcykkDt3mR56",
  "key14": "5zbX21uTmbzTwrn8jZcM9VcfAbucgF7iHwXpWqHsJDuQDqqFuLHcmddhpssCi1yuSGuhHUijbk6rNuv1ZR1ww6Mx",
  "key15": "5Zms7U6s3TcLN8Mx41DRJcBHTG66RwNCpxFbzXuegpK2FrjkVCKjw9Txsf34WVm1dEMHps6oh7awVqkExJjxYGJJ",
  "key16": "2rLUKPW9fNcqB82W1GRxvMa1oKmw5jdRRNt9et2AhEsFTep6QvPdBny19vjm3dgcG1LB8GdKwvjct4sfmgy27Vix",
  "key17": "3SP1uHEVwavziSfuqUabcjETpj99fQyKWExbMyX1joZTG4yQ9P565oLB5DkedyswnFkMeU6BVemkFmT8ZFhpEL3T",
  "key18": "2eF6irggKhhp6DJoFetSGk4ZarTSrsGnGfxb8xEohVbgdT97nAsbkwQRYGeWwuAZkFD4n7BiCbz1po2aQHRnCwYq",
  "key19": "dVAS9sDXGkE7p2oLhjuFQ349wV2aLp2QKuZzUQMjTKEzaDVcx8mLozvE3huNg47gcB8ADo9raneQMPFPxHRUtET",
  "key20": "2qqbTUgz9hdRumZTAY5BEjMCmyKKp8KxvMtgHgJZKWyGouzGZayyusbUMUEF48nft63ZDgDifvxSXZ2YkRNG2QNS",
  "key21": "3dBQEBF8PJXhaw8ksTeAzzagoLsxkK1ic21GRstmRSCwL1PqvJo8mMzexHahZL2BfdTnWqugP9QWaA44HCcvxuUb",
  "key22": "WE1a9qVZJVXot8ajgvqwLK9DCuk9bewU5ckQH4QG8FApcUSw3U1AVvLgRRQLnmq8TxpM9dLGxfinw3UYfvA413S",
  "key23": "4psijv9rGkgUuxQxYGHRSmD8QuWhLty59WK31jKqQnqyTi3LwpCtBvLp5UKSrPEtrn1U5xgVrmhBFfhupY2ki5HM",
  "key24": "2zF1KvBVHmZB4mTxPHhzXfHPHtgxuov6bMe76DCqdXcawyabUEqHNtpMn4Pu4xYJZdSYMkw6Esbbg8Sb9MZf3Yqd",
  "key25": "5vGceKKdyts8vrU9g24dsq1NPv8L72fM4P6V62Mvoi3ei1FPAUb3WJwBPzSojRocwudBRoUZRkfbRqM3RZgJmrY3"
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
