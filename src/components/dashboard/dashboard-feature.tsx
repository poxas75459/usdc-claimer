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
    "5EaqnWhhbYzbuPejHD8ToTdGbhRMbRzAwek6b5hYVXMx2uqDkS2bqj8ndVeGcSq5aUFFWJ8KMPgFzANATUqJND1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W3rQS8kHdr7wyquwKPxQT6MKzyPP86pj15u4n6xXX4J3WiLAchmeDQ3X7McYnsZ2VFjK5EyBqYARzvo1uuExJHu",
  "key1": "3L4arjqAfW7AXpUHiv73B6DnUqE9cUsAKQGL3mTinNBiGCALp6eJaZjy4AS53HiuTWFZJmMc6nKySC3go5gjWLoc",
  "key2": "x9uV78CP3Q6Nc6fUqgcUzkMcez1Tm2eGDQPrBqcRZMFGYAq7RUQkSeB81581u5ag55BEq7jbN6VaBzGnSjxGo1B",
  "key3": "2hWt6T7PApc9DTSz1yw8AXpqgC71tAqrM56Te2FtTEuXvMgfdhRaakiidrUX2jea5rwvu5bZjZRovS9WEon59HJi",
  "key4": "2EZiNhu3Zy5W2FFc4hyFsP29Wjwj6Hb1VLoie1MAmQgPg2KCsGRpAcLRw3sYh2msu5yWhMtN9vjRH9K717aUTh2P",
  "key5": "KzxQH8zy4o5iNrWaccrYHkGPvenxb6rHc3e7SzRNYzqE5ccnhCCcPYHJXsRwwDReyWULACattgqekNTTXieW1wQ",
  "key6": "2Cu7NybbaJ9hUJc7mb1HXiWzwEeA4n7Cs2wCYPmd2KLHC59GyazU7CQnw7sw4qhFYvKaeNBaM9YW4v7aMaCAZMsu",
  "key7": "BLVEgsCPVavP7zXREa4ynxLeXAmpzHp4A26yiLDaXUaLAvDw2Ra18uLcx68Lv9cMTLrhRJpZo7SBKa5nth5PxMU",
  "key8": "5LH5Gwor9inJ9jMMCsPpYXGVJz2zLZdCymzioUg2R9TkJfURrwE8mYwvN1EGYYy1sstvpk6XQLAosLp6uJNUMcpk",
  "key9": "3JsBkg6ixiguz69uMghiChW4mdXhjq1KYuVGWHyktjXoSumUEjWuTMBECBhg7HTTYdFKU118pgR1A2fixqL5m9rX",
  "key10": "haGjQDENSsLbYwpiHME8hjm6M83fAtBKT2BVaKrMaXidV9iRD8w6Hm7aHgh3HLzjEjnnBrbfLbANxznLy6JGZwe",
  "key11": "5Xpqy2pdB73Q4bj6ckaARoC7Gkknfr13H1YpcKkqSVCeNqecf37BPunym5BgCZcHh95mcmumaN5wAYmEr6RNvoFZ",
  "key12": "2xU7sGmVVKuZCBiWdV4aSn9DrA4oCkw6U8VVZekpfQKfMqfJCrS5M826LKo2GKysqvJ7qsNj1gkycSPRjbZqbHwB",
  "key13": "3EnnSJ8b4XMaMNUvcEx2oANWavF2BXDz3s9X3KAR2XzgMqzdSp5XhqxXaDsdhoxcApsaQFPXPzbf2siWxEC399s3",
  "key14": "36V5JwuHQbnVSdeaE77EG9xFipMeLy3SbC5SurXrWWmB3m6AhNAWXkJ2ZuMtnexvmPPai23jvndLW3pbWE1ZtCnV",
  "key15": "3qhMd7JfPFbt1dDQtEiPV6YrxMrdJj4bTLdW7FK4zHEtyfaFBt6aiYsxTgyZdo7H8EaaJPouuHibH4sRef3i7K3r",
  "key16": "534CAndtY2TA8DcBRunoz4sXas3c5GAYL5ie3f9R7XfxJFictXsU21RVsK8bsJwoaUitbYZ9Z61rDarESTscf7J2",
  "key17": "3ahdZgefxg69KXRcqaAaZD3dnEgiK7be1Lh41Qrab6QZ56dQ3roAkLSNkZxQB6z37TLifArsAqAxbmr3SzcaWyP",
  "key18": "51ADYvZQZ9eqHedLDGLd1poLcsZhup88mSc5mmjb8bnK3C5pDjYaJGLyKor2S8kp6Ay1Khd7zu1bH4d8qpm6UnKP",
  "key19": "4RNxY3PRxrDenU4gDrXNTARTLQnuSrNpr6S9Wc99jSUhPGL1edgJeKif4mqJCf4Q6e6DYryS6P8kW4jvSbi8Aobu",
  "key20": "5DGsWmbUf9rawxSWatydHbWogYuCfZgbcocBDNgWGartuA5LDaeDuodctjkWnZvFzALhZXdrSZUzVtyvs4pbUVu4",
  "key21": "4XJ5u1E2fhEeLHg8Yw1u2qfFyDZxaXrFQa2ZU4L3zE7rV125L8oxDgrJCCKQ1xfJEadmuavoPUit1xe3NYMS6JEE",
  "key22": "5DWRpq8E9k3RAurAtgkQy38tJqoX7g4F1tAWL9bcu6St3YBQNJ7vEXmzG6oSUJC1pGV5XMz5EwbRtsg8rngbGQHE",
  "key23": "4JXMmdpnpLi3qn9rrm9DsxcXhFwit9GQAn16ap7aC1GpB378nbSnKzKiSH2ves7LRLKMXdVSsQ3XnZeM3vrnULq1",
  "key24": "3X9MN7nNGd5zNyhv9pHqB8m2LPRWRFek4UbdVv4HomfZbeW4H7FoRTpK1jLhitJ5us8oG6aanfmbcUy3DpyDAvvH"
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
