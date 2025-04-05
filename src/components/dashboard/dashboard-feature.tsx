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
    "5Q9MxyPfw9aUFkBkPt1jz7XwrnaNX6B2tKWQz6aTrBF1UgjCuj9WKcKZvoZXkkVCvzTPvNq9g7KiHBqU7h6Uucrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "465MxCdcsQnHR67v78BEgjR6vP8Y2ASurmyARAhBjbTTuXZx2GU1j2Ai8bv2KD9iU5VwYnc8zLcjTQn5LGf5f9Rj",
  "key1": "4mA65zh8T6EexJmCkrYUbyk3DjuGkX1iFrxPydCiXwXPwBKT8uow3qhgPWaoqHvobhJBzsBK5FTouYHwCUHuFeKa",
  "key2": "R1XcbhFtok3jDkwGZTcvzMGW9mNsNJ3vY9HkabFBAaujY3GZEPNYh9ER6xiNBZSDb3PzzH6W5h6Z2dDd2YxAqVv",
  "key3": "3L6NbZy8Jo4KhHprxbRyW1dYFQZGEfz4B5v7eZkAajKVtUsRJZkQwfjT6aZaexuSXLp5yMMT5gjpMgpMnfuByAJ9",
  "key4": "3J8vS5sC9qSFrQKfT2uimXf3nT2ywxZs348zDKoku3D9RAXwGWU1hgdfcs8sbCREJrMaVdaLDqhZN2Q3zj5uuRKg",
  "key5": "5KFoGin99ZHNtjpstL6doEeMdvriPPM5fJSMEwukgnaAwXVzAFVrdxvc9RXvG9b6x5MZZnSX5kmXWjX9HcjviCNc",
  "key6": "bVL3p7phqmKcsko2oujq4zD1CvHqLs1enAar25L5yJEcFfwsNoU5X19Lpme9Dckz7MSLuWApYZyB2kdgnqXV72V",
  "key7": "UEs1QQVQQN3AxjwMr7JHbWCNg6ZdadArLYnaSuS8dTtTA8UWvGb9kt8LVjfmoFnvy9Ln1SnAa98uuUfA2Q8vPV9",
  "key8": "5D5mG9u62SfmSVTTtqZzidW7TevJFQ2RvcFqr7xnQ2X6Zn3Q3HJKm7YadpSjQbfdMMJKKPmfDuPELLYSgb2ct5JF",
  "key9": "YM9fQY6B5H2J4hnwYVNUWcH4BoT2TQTtVNdr5UrgQQb7NZ2c49igh2PYR88mochwQSdiJeaRYoQSNBSDyY1Juv3",
  "key10": "2qq8E7Qpki7RsmuQMUmAJGpxUg51t4amcZ6SDP3pHNxJdxayMfLvk8iaEXuCWDzqpVi99JXXwXwM4aC9YfVrPd3o",
  "key11": "ZiJ8eBrPj2fMnXhtAHAak9kgSGG2YmE4QVm2csVize3JurCK8q67mfvmYU9RzcroeHSe8VXupHXvDbUneJS93eF",
  "key12": "5yTuqwPaLxv25VtmFevX8nExbJwkW6VKCqbwxY3eieYMpNYanD64ryVDv96BP3Hmh83LMUXiQLBX2KQPmp7JBsMk",
  "key13": "4sTVAXR3qgrgVhhyBRujAmocgxt1gyE4k4wReCL9f6S3kdEo5AdrZuzM3XVty9t3KEvmFfyxzGj11TzE4CPve9R9",
  "key14": "2PFLWM3iReaszMSjod4eJjopQ7YmhYBB9yc4CghsusJaDSc5od2MS3w2sfMs8B39Dbh4ewNaAzS5AaAHkrXQ7k3z",
  "key15": "4AyMctnM4YHog2oDqabZLJFdUvQUqKerHsfW2AdeHe5xD6rJpm5A891pdgB8b3oeBXf36RDa8SeyQL3fx1imUAP2",
  "key16": "5B1adxKy2TKZbc4dV4Mq8HxwECbzNRb9KeX1PyamAkTVLdg6hmQMd5DGG1aZ7REbC6Mb4MpauPLMqPbV5cxexQeL",
  "key17": "4MPrPk4UGctUdZ238bQeaUhajoD1unHYhwigHfhCMw69YJqzFMfeGGwo1jWRp7Hh42vJ6pmFPY75ccPFKmGqWsiZ",
  "key18": "4zn3sDM9HMUAFkCieYS9kiMokgyYDhdgJxKQfy4BcyaaceJN2APHMk3BKiGkL86DsKqcPZKUP2SViAUjMtH1a4hv",
  "key19": "fo59dbhoRmKyBgptnARtomefCFtnmwLxAF13YLVAk4BXynkXhrf1FLifkix56j28LJzAp5ZGqAb8pzDWgA83fah",
  "key20": "2wwcjZsrvdGrCzkU1YH2RwjcTi8wMPmVEN8GQQ5kgNtYcM41cuqrC92qyMQF4JLQLStcphQNH1ntY9ctuSE2rR2e",
  "key21": "5gcv1HmqF81axq6JPzQ4M83SqSm9BnqNxPjKyHBUuXAy6msxG77QmtK13Hv8kai4XGvFWDWoqohmf83QbH5UKGbX",
  "key22": "3MpNvB2c2Y7uGeU8RKDK34NfKBEpUELcUchyeDCxF8xYCGEPe4VQmFVggX8mDRZPZ1F9bxo6KxQyns43i9ZWgxdW",
  "key23": "5JLEF3gxU7GURUxuFFKD2GGKS1iaS3R2Gob2dkWWPhyFyCQsXDViunFcXvNfN1MiescutDn1JW3NzDrAVxtYEEzE",
  "key24": "64HW57n3T1aysRsHojxSXPz6b8nbMioR4jRZFRJouUmnBTeLkhLBXAbbP1Mj64DobpVZtxs5PGtwG53r6DqkdVXn",
  "key25": "tQcsX6yzcKnBQ7Z7SaJxZWgRNh2VWZ8PaQHx6cFFjs8H1HyA71dJPuXEoNhzGH17ynTA2whmfJnQXfBwtjESfPV",
  "key26": "2y2XPbS8Pdvpt4mNe4f5eRp2FMshar1rSMzwbwXXAWDYAaY26gBJs1X3rXPeYJrEjJ5iygaW9Woc6Jbb4wVucpzf"
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
