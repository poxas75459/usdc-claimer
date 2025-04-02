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
    "5fZCR97DzsvjpfCsDdSC2uUQ9zR5vLwK99oVXFJxpCdmrVtkf4s5uZkAWLt6GGioQkCnfkWQUqfqN3ocz7UxY6JG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Gyccyvkkn1LizhXrBeDGABkcKUkgn84yyMTKFc7Zm7XL9GKzLCyyFTtpBr2Ys8gXdqMSHueyRK2AHqehaBeZNU",
  "key1": "5CEeZggLzKPs5kUMuLp41EAEL4Wfbcebqjyo13s1DwrvQ6TrSxDX5MjcLspr87Lbwv9aaiKkzrxMFpLQ9hSVoUYD",
  "key2": "5pLjTxb6doGpAtLFVAi9QLJ85WuXxrXjrz7Y5e7vCHr4vK8hVGdxHvxEL1APHhTsQwp8KN347VCtf8vsK1q4jBP9",
  "key3": "3QwwC6VuP8WMBd7eaUtokpWVPZNMXJdUeWtv1v2ATUgkxUd2eFg5niyfPi2c39nMvFDnMUcgPgjEhXAgnZWHK8i",
  "key4": "5pQUZM3J6ZxKd7BYkdX27X4cRfi2WjBrQmQnZKJcG1XrjDUKjVziGeWthMR8mDYJbeDov6vzeKwJN8GgDiBPDW1F",
  "key5": "JBaCjndVUHdBuPtfNM8pn3JMk1tTkuCR9GXbTim7jYHhLJamKMnhCjorCAB59tcKzDVfkpYMCdgnQANNrYQwQTF",
  "key6": "3GHoNNXxvJRZUmd9R96TyvYhchZHMsbBtVoAi3PeEdu6fyVHcbHcgCF1W2uDppZsHF9MFoSFTjDgsF2LrmvgvAsR",
  "key7": "2vA3N2bxwNBqJtfH5K5wuRNMPDxb3qqpBMyKXkxhGCpBgsxbqyBtGdXETKAh3VmqFet4fmjMtRSpZ2EU3SPxH14A",
  "key8": "5ikrpTFXoAUPvRiRqKvjENDuRdZJWcqCuLCE3DGHrmKeTSHmhopWrHfypT1VBhbdWPjWSsoTkyUcJgcPdnfGqaFZ",
  "key9": "3ru9jCcR5WYhbQEXFwypxAY9gpvrzT3uwuwFjhFwWffG44XQsGg2Lw14JPm5s444cSbfCXqsmo3SqhgmGnkqzjHN",
  "key10": "5C1iFJWoZY2LPRRHhtPrsJCTvNefiCkw29EWAfL125uXiCHH5z5TZRFqvvv4vBEYrCrohxVPAaypPZ3NtUdmzko2",
  "key11": "2wNpNNJvmV2PrXpcVNbZyiRJw3J5nyZxvirAzo19F8gcRD4Y49yUT8pqMgnGjJD349aqm2Njs9iyeALqGe2ikefD",
  "key12": "4WjwZmQsjWTFeqFWXgS7JeTra5WHTDaBsgJ24XmNReG2qGEUw17sL73ZdtpcLFoRfphXA44NsGfWeG9sSURTTiZP",
  "key13": "5ntqxr28hNXwMPt2p1iun1Uwopthqgbs1BE1RdiNmkjBo5wVS3hHKSk9QRNwMn8gyStatWyYpq6ezQierkaxgXpC",
  "key14": "5awm2ND6gKrpNbTZihL8xfXJzuNjkVYxtCzTXf87aa6JxWTLP18Gmd4XpJgS65pNFC4CttaSAGrj4ezugyJYA4V8",
  "key15": "5X2ZNDzNWVcW7ezK2E6iNLsmCKKbmXzeYydgqE94tvsPy3xTRWrV7S2Avwc5hvsd81hW53aL18QxAbkKfWmzZ77i",
  "key16": "5NrWTcVU7ihS4Sg48v8Um9MwNFp4MSQ5fMjJZzSKFpRE6Yir2fRHr6R8E43jZcMXVr2aq8X4aGmT5kdMJA5ULuUp",
  "key17": "DeKKsoDJg8rctvfmNdKCJD2xpJbbbyiUf2mwD9Ed5CrgxNyY3wXq8F6mzCaSBCg61nG4Bk4GnZTzrJX9WMi5zm7",
  "key18": "5HKSyReHYjKiWj56Fc29S7iCBZhKHrBNSrep8rERQXVgT4pUK1vcCngh91mp4tVXRi7NDvbbecPWxJhQzLHP2Ubs",
  "key19": "3vqtgZcJ5i2vrWR469bD7HQGjvZQi9vzGBLXoS8kxfRB944udJfuA7yjnGSVF6dwdGmLWr37nNofEVi56bvkBbzq",
  "key20": "5w4bXx72NCMpg1K1ef9NRaKChcdA2iUusLJj3vhXG9c84PjUoBkb51p7H5nA58YofcLNASQqLgaLnhME4gAjNy3F",
  "key21": "4sMhYpBhZvAPw95SenRammvCndCijQFuQDnKma3sjg9uvV4y4tRP4pTZorXZDixvMr7KQZ2HZEpUW8t3ekXdMn39",
  "key22": "22F6gQR9LAo28ybF5aLUNnMoyp7bjFZwSNFr1fCmJ8qGnuTTkegdMBTUU8NDNggsWMWurq4AqyCT32kRkKMSmVpC",
  "key23": "3kbGvCR1aExXUc9ArqLRwy7PYq9CHWA9PQ781FkahapvzqnBdPfggxhPZo5jwp3KjxaeFMkZ5iEZGUfXgoguSUiR",
  "key24": "4sJx5YtGpuFsvVRxD7uvFTLTe9DGTkv9gEB9tGzfVeMgrhtZ8ukyshsGPdtBVF8mPUm5r5VuKZEEX9hvb85TDpeH",
  "key25": "rgqPbUk9pontdUt8Mvp3NxBHyN2okqK4Z3jokUrfxfQTVA83riss5EAZo4PiSDTZtgGgHa3Dw33vAW7FbAEMyMV",
  "key26": "2kZ8W7pfNhHod62nba9jMqmu2MnXxwbXb1omHS2JRF4xn2YkzE94YnNJBwRaQt1bfbBq4jdT6gjTagpPUaUfvQXK",
  "key27": "31wpHYqPNxANvixSfEUa789DpfnWdUKumvPai2rRs3i45um9Wukep1EMaGeyKo1ikZrVS8EMtmVcN1mpEvAgMpmr",
  "key28": "2fiHDRUGQLeLCzap4qvQw96jpBVrCnfTqiXGhj8hGu7Gwx1pEHwVSorqYa6qMM9RGcGjVMHxhFpheaYML3wgL1bh",
  "key29": "439NdAExfpqyTRQ3NJnbQPU92ds8GMCCz5ngSguwWFh8A2DVMGE1mfjvSVacYrRKc6meGxUFJ67r2LoAJwNCGDHu",
  "key30": "2VtTCVJsyT3DxPDitxGvPG5J5dhSaV8GsGhXr7XCS5GsqthCLk3cwKeidwpD6uPLVvK95xtjtkfdNgP3ViHFQM2q",
  "key31": "547PK6G2Q6TeWqprCMVw6z4mYoSWBzJCVn8bRKqFR9f7gEv7fE73vssMF93Bhf4oPPgj8onKbRvgoP5KejBo7Grv"
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
