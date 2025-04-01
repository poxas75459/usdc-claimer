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
    "4D2rxubpXTUH4naaKTZn1XcQtPuDNNe2avbQvgjh7v2GmvkQGsxJ92pruRQvuNgb3q3UpxniYEiSpW5a71MsUwhc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cM3puUApghoXv2yPTAbiGG4jqA4q4UqJ9jRsGAmrUaX3NSAP1ak6Pgj8NgPjSG753GYxTK8YJdRNN78nkx82yPs",
  "key1": "2BqsrVM2oKZrGubrBtF11Ej89S6LLEB4Q61WdQu383KBmJyRHMq8YTX97GwbMomBWAu9V3nx7Dk9VAGZm1jWoeHv",
  "key2": "rVLEZWZuGF5xPaKohgz5nru6x6SwLWrNcAXk7Ku8ZmskWeRGN7A3uPDp1kvyHmznc4xQtf5JaEGh4CGtFfZNFKA",
  "key3": "41yS6536mtDkQA4njdUvsM761qf4P5fWc3YpdPireQ5eL1opNuEMMWTEWJBQM5RNDNiNAiTRuLgsCLMB2jAa1MrK",
  "key4": "2T8hSNzaCgxrVGCQYL7Wjx2n5QFWiSFivdhMF3DxpTgEc1HdRtedWEGTutozQeYFRsJukBSSimC4tQhPVy5sZpJ3",
  "key5": "5znxWpNkfj6dBDiuEXhUzXdiLEvKGRUsZU3ETAUPnACYEHBFfDZAJpGq9q2t5stsD7tLKqqgZ7zSNpNZAzkFPvVf",
  "key6": "66RrQBkfKCzEgfVecXCzp7L9STnLJumwrxrKEDcWGUJC75iLQGSEmSuPqho4ma8fe7UU1mYQK7zs47Q89rSEmXVe",
  "key7": "5ux4EKrhqLNXcuMkuFHbDLMvigFZcQyobYNkegdT6mibZh4GCGUDDdu8zUZVDWAwRMcB8og3Nx5KBbM4E7yXmoBE",
  "key8": "5cGd9Vok5H1tSWCZmjhSBin2MptVKQ6UeiFuG7Z5vGzrkTCQeyQEgviSWqYNTiQpyiPmUGPfWJb5taSF33nUq5Yy",
  "key9": "2EF7g7NJSYR1mT3eMb3eD4Y4V7sW9i6AAxz97tPeE5vAJBNWPjWoJLiAW9mTkbrFiLaX4UvEigN8GCQanKP6wuX4",
  "key10": "57KTYB4auupK8yJx5NXYSDFYQ1DpQpCMRUYQrEZh56FLP1uzFWRZnmEvGjmXs39uxm47CE1spdyw6v9GxmzQTs9C",
  "key11": "4UXvUuRUNfcxuVwTttGcAnvGdwnWT9VbLw7H12WoLB8i4x7wgYRBP7rDpkqaoHvENzNC3xHmWdEtg3fQksTt6wJS",
  "key12": "JbKm2PyyguoQwCo6yoTVBtpMFCEn7djnUDDR89x286aL9p7BjVAHJwNTP6dGTsjD6DkdYKDDZS22qjKVdG7QvFA",
  "key13": "2F1XaPZe7Kx1uaNddQF3cmD4ndb9ysbvj78jucZPRTDC6hJ7dQZydCRervpoiCeAkBkpaN3hUTUr7JS2tkTaumqs",
  "key14": "3VQfeddkDZDygnC2hNwSDZMckxofJqWmxk9z1pANGwSzXPxKU6icH5T9EC2hN7yjZCLEL6x6qCN1hkJjifNdLCrv",
  "key15": "2ugjzzcZHQP9cr6jgrT3EgqYkxkazg5XEzLmeG8gdVAUjyZEpXBqdG9EQjLGyX7TWxeGfz35nxvL2zE9tzLZ3UGo",
  "key16": "4B8GuRGoTVX9G2sxVCjKNqukfwoC42eSZwUUxzGgyuXQ5F9mqSSMtkXXKUUwupSU5uUbrdrQxqugmzUErjYDgP6N",
  "key17": "3DLkKXYBFfG5U4GmWQt81dzB2qEe3C1cJ275QpupUxzJF8Mdm2U5YJYGoAMoJ653mfxo9sTDUYeoCx9dyLhGRs7F",
  "key18": "4g4NZP1ePiPZw6Hr8ZkfLCD5PJqBBGkieH5HozrRaHWth9tCupzeo4myYqJzyD88HkegJVHWjHvYJykLdneytFP4",
  "key19": "ckSPdgWUx5FsvK9TgPXbExh4tu1H79ZuhBvPwX6XbEkMz8aCHcKNwGVsipqQZGZKtLXQ3fVH2XkXPJarbt3ZhLa",
  "key20": "4gb6ACXssUCVWP2nHfp7MxwHgJAj4xZu7MUJmvbiLS38TDDveoxt2oSzZznpQE3B1Gcr4QtXnjXj1id4yLuMRDBs",
  "key21": "sidmCZXqTDPoGektwsSFSmQkWUYS5hPsUHTLy3ESsURvoNE6geQwMsW97dQqWixQJD2XFkzaAYwvp3qZWJqbss1",
  "key22": "581bWXbnnjobA6A32DY2yL9sUVoTo23Um99Mt3yV19Nm1qJs9hWBm7Dg7J5th3arZx68tV1CVvb4MN6j33ThcmoN",
  "key23": "5Bwe6X7D3J3s9wT8j7rJfnVintB8hpQ5CdKZMNwNupHsU1uQsf65QP9tEhZycjptMsYEgm1cWuxZi5kg6YkbNW5S",
  "key24": "4vMTRjTcVsSYBNZYnVe13v5spF4dsfp2K59eNZKP4wKw2AknQM9rqVe6aAvhGUA4rqhNZfDNMPGpZrnySK7BAEAh",
  "key25": "MFVbayzPnBWSEFuVwfhJk5PnUKksirZsD8yCYu8DgPgXMpuLe87CDAqUkPDSpfGvrbqobhrD6uBNhA2e3uLvNZX",
  "key26": "4L3vSnCouUTQVJ7yWw8zkretCDWhvBFSGJDAcSa9hMhbaAJLzoQ8YyDpE59ghv3npGVsrZGzeMdGsJUgKG9AE79p",
  "key27": "4gvNJfrYmXy281Mry7ELbdNKsvRZ8dmtYoU6bXzh761qa8v52QEtLUaHyoGRALC8qNnMSFjUcMsruwN1ECWpGs2t",
  "key28": "2fMcv7U1N4LTkfzEFPZetVyoogSNDHhZeEovQzyboxFa4iEnwREC9UEvJPXu74DUjnuHBJBijkMph1zegmQznaw7",
  "key29": "w2Bha4HBBjDRF7PZvXWsQWrtK8yNjvZpNSLHZWsqgpaMjFPpniQfrg5KFBoQtQiuofrtS1yfSPWgnvxs4ZDNN34",
  "key30": "5wa8eMi7DLQztQcZ2q826XqMgWarYosiXuRP9mVMS1xhARzC7GPyznw9AMrgAMVoQeT9yidL3uvL1vBdZTyxHa1q",
  "key31": "u5NcXqbG9z6M277FxKfBMrGmf87JavPMx6HgyvxxXJTN739Gc65W8nCFN6MyPoZzkCSMwovFqZnxozn6i2AsAYX",
  "key32": "3Gx9hK8sqjxhg2AB3duXdVp18P1sgDDE1fGSjd89WzZ6HirMuDEV5jeXm2xf2t7ghYYmy5aHKczHrfaUa77bDY4U",
  "key33": "kGLUkcjNBHV1gFiY7Z8E2tER9JFD3XoY93ATrW2eFtxeVExfZpqhPshk33g4MnYJWsA9aqZnLkJoZDJmRqHQjVj",
  "key34": "2dFyfx4qJ9z9brGJUGdBJgte49Va4BMKFo7kUwPmpQHkEcEVpLTUN1AMmdo986fKazre6EySkheDnkXwejdHEa2P"
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
