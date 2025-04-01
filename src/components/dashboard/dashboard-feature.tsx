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
    "2faRHgAmr6fVSXiiWJMKp6cFRsJSUYTLzTDjv11tnPRarJ7hjWWAffNVAKo1Vzuh3EkEx9Ns2JMo5bxQB8HSMysS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xVgQcqxd9oBT4eLhDgrY16zy4BR9Wgeq8VCeqxKdXhYmqSESrjYvT1vLo3xmbJDpByE51gKPXZyBzAr6HeBDFVJ",
  "key1": "R5vacLeHqwKHV3jzihnJ4ofAs8ucrUvLzWqTXg9G63De4pHVFHQ6GT6fYKroyL98ngUu4PxyqLgkTbTjuwVEJxx",
  "key2": "5Db3hqhmXFGhQCvR5ooHkb2QhZPJzq2QDU7iJ4d9eLcXL7RzXe2VU9rToSJ8jqEFrVibEzvVUetbajZLXNgLKykD",
  "key3": "2tfpHqErLLguvjNcFubpfKPTfL35gxpsZXjU1eX8Epk3SDZrLM32t4VUsyNHFDDqqPq6VQZYVgcjhJZYYX3BN2ps",
  "key4": "1ZrDN2XDaqgujep3yEH52Pt6dSwx6nRBWFJip1aAaeRiEBukrGrASoLFSkthPGfwkdi4LBBQMwhwPHcnVaNeG7Z",
  "key5": "2oMTqk6NmEvQmbvajEHQUtC6XUK15j4JswAaJNfzhSRuXiSxvCKHhKQaMiXpWhYmeEQBBtrwpEUBaPRD5sskB5VY",
  "key6": "2D4ds3y5ENJnEBzWs9QzUzX6cZE4fGPurx4PCL5NqFEUAdCtCzQJ3qHgrqKE8SW3z645GyESqaWNpyZL3EBGDFFu",
  "key7": "4hWu3gcRsfzmkoawNkHcCsaYYYmM621MANFKkhU1uf8rxw918kGsUcK8TBPpNs9SxSVuXZeijYZTXomEZR1nmDgk",
  "key8": "5bm6gy7QbYEbgevBgV9KkYEbRQ5KruX9ADyVFKEZ6qCUj5a1aJiz87v5JtwExy45RcYd3gv1UNaTp8uBop7sVSzc",
  "key9": "s8N6PNZivWw1pkTWNi6oDP6RoTe3gyYqjMjo14M4SsomNUNCKExKGckWhSUFZkCYP7oFgKUGJDP3ghpPWSWfepo",
  "key10": "33jBgvrGXvGthAcUNXvujghJWqd2m5WGareJbM3HBfm4yZfWwJNkCzKhpNHZfZev7EPmtepdWnd9uD7Qeby53pBp",
  "key11": "5Q6hMA9TkbsVKBKekf3QKBV4UcEJDWszPNvd63sKYaQE71iSfXCHguYifLPvCxPNMX2TTPuy5YrRBRDb8uyqgH28",
  "key12": "2U2PhzDStS1Vw9VSE3CuEaHypihLi81qDPm3SiGJ9vEYeDAaaSrQiDiNx8sbhbsk5NRf7WkmuDTX6gM4H7oWsoBF",
  "key13": "2NGSMV2ZVJhkG3YyY9Q9kXncfNQurXsDDzn8VHu89AQjmEA2wR2z6FStrdLQKsUG8BJnLVoGVKJSSFRrdmvTrabv",
  "key14": "3pwRzfAhsX5xjvpX2f7HyMFPzBnDf8BTEffDtCpnXwqNHbRGcfLy8JD3gU42kouppKd1i4eBbgRLShFmzmr9jAAW",
  "key15": "rzPAekn5QB8g4BkmYvGEAzmM42qQ7no9SmDSYqggHB7cneD6A7tZXuDEir7ESGbmyTxBRxfDPfQWa7AUPogrCVR",
  "key16": "R1vWP545FN9m4tEtSibgkkrMCGUcZVvF41bqXEma69upc2zLUQGJaCR3ed1kYRdirgXEnvV6GR5qwAe6sNFnGSW",
  "key17": "5fzHtUB63pjVL3kPjzasm6AhWk4cEq9eJ97QK7nLtTVaJLgRGdBJ9Z3BXcQgPbYibaLdPTHmZaPCdFFdRMgiPEeR",
  "key18": "9fHtt1XNJAn4a8nT8hV77z2MGeNxWC7jqJ6EQzSgUTqV9xH1642PvYSSEDumUBcghhXYSP64DnFxJUFuZKoSEu7",
  "key19": "2aZa7tZunodH9YUwyQrWwfu2vhvGZ5ZncXZZaWPDtEWM5YxCpfc9mvmSVDFoWHYEmihxC7HJLDALZM5yA9A4YpVE",
  "key20": "37eEX6CBDY5gAqWd6q22M4cGQbeEVbVjQHX5ybQxc8rDCZuTMuqC13uznAuwghioBfeC99MskNY7GewB9AYjhXkR",
  "key21": "4D1ZoAPFPDbupTqNBwBMH5sABNsu8rH6xNZXSPot2MayMhagHabhdzkdaZNo2wAaPztDK9qpedYpjqy4khx4xvJs",
  "key22": "2ZDrsvWU5yiSBkheFRC3ppKWehkYoevtCpM4Dg7T4zdiCjPfbj9UgRFy21VkgpX43rcYZH2cHWAmNh1nG66G8n44",
  "key23": "3UjX6JTA2c18K5zRZNMqbutoCuwS5RiEQVsgGni89w8XUd8ehwoxjf5q2gRmyPmvk222rkPethYzLXdFsFyqsjr6",
  "key24": "4JZskiNFT16PC4zYi6cMXfncDEqSv8oy3Emsgyuj3B6ZrEovD1DDnHToXBhDS7QVqDu2phg3s2682zAi5ip8MNv5",
  "key25": "2suLeKe9Jh418CQTxZhFYUXAUWn8QL5jqLG4vi2M77XgD6gZ6Chce3ATMg7zZ5sRLb3ixXkeapFMojeksMGXtUAr"
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
