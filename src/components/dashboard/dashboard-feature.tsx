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
    "632wyRFAxw4WPPKvQqH8s7yAp3VgeBHhiCuL1enJ63r589UNeWDZ3MHXYyHnGCx2VtzTwbswGXh6cypPnSzRYjDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ek5TUN9eRWmuJAduZEjk1aXwpNq69fKep12Zy3HJd9qs2QU6kB6kMLLYyD1dwu6jkSp1Gv26dJncKuDvTzzFEDa",
  "key1": "xwE2XTZAGzNd6riij1UfEgcvwfqeFKN1cZj31U7sM15duFKXuJpG194H5F546jzDr65PPGt2RVv7SAEJNDxhfZi",
  "key2": "Knkizca3Lw6fmTS1wKowHkg5ik7FDbwc5FNHmi44QqhyhHzMgu7t7aq15ZUco2bsGDcEyTkLP8zpxZaziJRh7Hp",
  "key3": "3BezH5DDkvux3qPkMwWNhSDPn6y8wPZNeGWsgSUazZBMbazQyAs9Cfc9EdQr9Bv5FiwGv1GJssNNjyQo3NQm8Sna",
  "key4": "3QYGkbEE24RZ18TiMEf9YX96XVW9N6BLL8CUWh5DdJDXb8Qw2DqC21VdedNdHUBnPeXCYTCEkbDeRD9QSG9dY3bW",
  "key5": "3V5N8V1zb5fMmbBRg4D4ZVrbWmFjNcbTfWgrhb46D8QzqasAGepmTWpreM8dLfzXz4Gb9UqAmfxdKPpM5mJuvdDi",
  "key6": "41YDekpLSXouddbGyPBVdrGvSRnQ6uQ4MW34pmhJdo1BJrHjrd3PNcuAo8oZzS7rhHALMtmj3g5bkuWBPL9RKZyL",
  "key7": "WLvfCRhRD9TnpvmRrv6dbTGkojyCEHJQdnEmummssAkNtj8BgrHqYZSjQzXb6JscLd8Rc4qhzBWfb4PtXBMe8yB",
  "key8": "oPX6jEzfceCVi1uk6n2fGPcg7Stn4mKorPLnzHpNSdkqPRLGpb3d6z8pnEQHZSecAJqcJYNUpRtTADqV33AEyxd",
  "key9": "8S9EBoa1nfKfLmb2AQfmKk6wWynjf1nQYEWMzJpdZGK8DydwdagGwgH2KzttmFGimH8vfcgvakJB4Sy4h7EWu4D",
  "key10": "2M2eLj5Buauy1KvSCmhnus3k23AcWieFW3HzUXaUTznMVXfHGeunLTPMsfFsWJs22PitDqdM82a4NuTK2JwUB6r3",
  "key11": "2YcCCHgjMTwAu7EC84ek8oAhPaJ1XDBBzJsu1Q3henUXsCqozouyYQFqNmFjt2cnaKpJXo3q6JKrKxT5ccAyTWZh",
  "key12": "yWRKtmAU8tgTpUt6EtQZoz2GhquKxfZHwHz1y3zrFYqPjSQiHisgJjvbbwY3AkFc2xuCWJcvxgrcU1TpEfTxMXQ",
  "key13": "4t7QKUWh6hpUQ6TZqyBa8sEzDVBqRPc2mVpu1Eukj4MA4EHobMWfaPz5fYw6fo6r7fkFophNih9nfxSAQf5CawtG",
  "key14": "DC8h8YPB5Sj5yQsMjqTvsueHjeKBWimnJZN2nEGpWommfAm4UCUDa6FaVxVMxvCQ8HQyzdxY3mPBmbEEGU55UYK",
  "key15": "3smgYAVZJeBtdHykHGGrcA7RFdk9g4VVUasUFPPhcoq2EMRkPRqpsEKuF8zUj658FWdQyBi4Zn2qdpATeUH5ACMx",
  "key16": "5ZGeb9qBiK9HyU5uvN9BHWLooDwocobwNe7P2vprHNEDebA4aVyhTTQ51ZZPNUPLtWKqhjxng5x23uHTGtsZDTGG",
  "key17": "3cLpPu7TipcUjg4ubEKWoWDkZCFWH3sddEyAqrbNpittXw3XLP3NZv2ykBvpVLDJDN8AUwA633SfEVFrnEEnYSBj",
  "key18": "4UrY8y2SxpcAA3pQY1CiywFZT59Ug9ZG5FMNMPekedfSSUZ1afbXwagLPhwUFcxbGGNZFnixQUUm35fyMwcs2czp",
  "key19": "3g62As2k28uZV3VKTr5LAr5g1goNMQKEytH9FRJsiPqgWwBemDEU48y95FQPKkskeXXVsHqMyFFJxKE8dzAwZAmR",
  "key20": "3Y7wj2j7S7GNQwE9fKGowMNBo1Wr5GDnUGD5UNPqyqoyJB3cXwfX8GoyhUhni43ubeCBoi8UG3MZW9HT6SR2XSfw",
  "key21": "3mUg4XzWhhDU8MUbvBmC5Wpt8nod6Yb6VWbizTvxJYvGdBDVaWVT5DHkBpgq9JnEa7uJmm4skzgLiLRkHkdGc3Ja",
  "key22": "mucWdm35bto4d9RTeZ2YXr6Fr5fTSUfSsHudPhVDFuFfEV4LE8NcPUnFXdQEd4gpqGEHXtK193w2wvAUeQJcAyt",
  "key23": "39HvjMYNj1PgtJdnrz7jEtVDyCCsbSW3dX7C5tc1pV3XXBk8rwu1e9wQfeC9fBVqoYhz31svH8CsWZ5CHZAnvR1H",
  "key24": "4YqgCVgefYGJNJp9B2mYQaEv1Yxk7KMvz9zJRng6LQPeHXcorPNuu4GJ3ZchDcacDusnekkQPD6m3sUbPoqLRw5p",
  "key25": "5UpjmpxifR4JNSFpj5DTNcw87uyuJAL7B1ctYdVfTfWsda8oGKJLzEqSVNafuBQBf59HqB2Bz2V3xTmGyN5XHN6",
  "key26": "4gTR36r4WtW1vmCqMsVtoV75yyMXJSe2AGjeJ9qHqEjJRhy5N87esPDN3ZY6hXHmxejk5t9YrtYsG9Tto7Vnw1Jm",
  "key27": "5oHpZjnkS1GEULF2bV7jHqB6nv1SiWirGPQNWKP4s6rzrJGvTjYoNctg8L6xQVv2CNrs5J7S85XvhwJBXoVCyLEY"
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
