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
    "4mbCdqsTDaywfiAdpeUyVvfzHV9D8DF9Jsk5bZJS2DF6G2LUiRzmJDVksRFCUUmH3UbMKn5mezntwb9zUX2wvtDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uFtgqQ3Hrwnjf2gRGd86dfMpUiCmQYUSL8ed2mY6Yrvfd3Hyj7wmM98d4Byn6unFhivJ7g9G6aH7J7EdM2owtUi",
  "key1": "5vvqLPFb2scQTW6YDVs4GCmp1HKezpN8hFEi3refWNGCc6DjRj1PSBqKKdW1HFwwvYuJHbq6da8zW5BRabc44sdX",
  "key2": "3viNgsT5bcrkGot857Nn1DvVRdmUs3eJ1z535jCAvkJTmwVfACuwSLB8eqCbHxfSjtgryoYppPeage71gTrXCqAr",
  "key3": "nsiNqRHwAkkUGsGSaBi5YAxhpETS1MNfyH7QDAfmfeuaiKnah1oggC5mst3VPZnT7yuy4M7BqCnPPozgLr9rFAL",
  "key4": "FM1T3k1fhLkzJRCXVDNg4ysnKqMVrDfZhXsfgg5SSy2Q1VTMtxb3qWJ7phYEfBNsKS4W3otvNmaiLNfwNwu7dWo",
  "key5": "2HS2RViPSad7KGgc8hhveS4h3CkbaheyzB7FAUqRGyqPnMQ9HDqwRNsVPi2wNmuPcYeXBzDSPuRKGLgLKp6xgLtD",
  "key6": "j79Xi6RowodoC357sYBrTxdZzzTMHSEroaWnhvUuzvcLxYDYhACYCtK8yT8AUvt921ndgzuRPoEmrMqh7yz7gwh",
  "key7": "45ZSJtdCv4HD46zMhfzdJa9K3TNc79bSSN1pYneZfGKZGSr3KBThoVSWh97qtMuCm4JKHeaExdwQGP5QZRMCuoGX",
  "key8": "36vfGD2WQ7TsMFv6QyBuKskuk5rv8T6aYAqX7uiB3chmX7DEtaPgHRxaGYtGyFgbZtZb4QT3DpGrn4f3bDzDVR7i",
  "key9": "2hYHUAg9dbLcsNm5Ac7zsvVhwKPfyprAT95DKiXY3piisQ19s2Kjmeh28L5fAYCS36AECujM3XCV5Nmwq4HWGGJv",
  "key10": "5GA61qeBv2JPzCXptZbQEwvGPg26rc6UABpxRr38oZcUcdryk13cp4uLKQLAEMfe7e2Ans3wr2dDJ4SQFJLyfseU",
  "key11": "4hwYUniT1AnNzFFdUympF3j8u71mbRc8waYuS3Mmr8vdDVMnnm24N1WnqjV8jwgXVaiRTg3SWmA38je86aB7fY6Z",
  "key12": "5TeezDbBpkJJSr68qW31sbQHk3Zzxbx3WzWknJziKfm44UXSRiQegorMhRmtHnehLS7vqz64vykfu2jJSGpA4P1g",
  "key13": "5JkS3Ay7VwqrxzYpKLPbUP1Q9oCQtt5hewnkAqHsbm1dgm22W5mp8kecvrV55CHJKQcFMGWqM2Gr25aeQ81kv3Bf",
  "key14": "2k3GV67XD6KQGhS3BnLCbswvVdmc6TsM99DZ2iffJ59oAnJZP8YNkwVAfjE9JDip8bNu9bpn3jrGN1Fao5itJKmz",
  "key15": "4JaUvfQN2y2baUwNc46XXiDLgBaG7r673bVvR5b9Rp5smqKTTSPwGj2pECd2oCsgBdJ4edic1bquhv98sm6ksxgn",
  "key16": "3XyCTxyV1CU7X9M1r2s5k3JvtnZYHG2XSKXsmprQRK2JSjjYvfqTbVHDwSN8kXjCvxeNteZZRVB16KcQ48XW3k3K",
  "key17": "4pv1nMnYcPwDoztEcHhVCN7oMvDyywKtnVsEXoqhre8badGBfjGer2V5UcACgsFFVwybXCyzYuVXBNA5wQcQuETN",
  "key18": "4RwtQ5gvrgGfxowQBBRhjcsk8DEYBuHvjC5anmhcvJBaWxAPjw9hGoUyX1nAZhdeqA4Ck6GVWC4YK2MBrUedrqNe",
  "key19": "2vgtK9emv3fzGuRDf1UrYBtFeWofKNSexkXr9LnqCpa6vzpRprgzLgT1vFbKx2yangTHytBNPPHyyuc5zaJqxQqU",
  "key20": "3YS19zPQC3vXqCZKyzSyk3XQbMLHqPPAHid4wqVKoKacdo3wN3hUfyMEC36W3yXs9Lzfjw1upVtPEcw3nehCvKZh",
  "key21": "4fa24jk3tuXvFexg5J31rmVyioEjAYxpD6u9ncmqvodBaWJYaNoszaw65iAvQaJJRDor1gEcBP2oe5Sd9dwjftJ1",
  "key22": "34mcghtK61qhBzA97kDVEd9ncSy5x2UdCzuApKW1B45s25MNgygPUErY8GCFRv6u1z5xyFDFcEgnrQXK4wrnpxAi",
  "key23": "5BraMmpqVzzPBvJXm7qWjCN5Mpp1GU58ugQSWGZ44hAYhggi5DstUvoJAGUoBKBd5KomHoi7HLC8epKWKDvuTm3B",
  "key24": "5aGKzseEKfYUXBr9L6QZrgyj92GUnfxz2YEjYpF9tftDYYtjCP2etVUjvTvZNbW1Eu69yuYoybbWJ2jAXx3TPPmD",
  "key25": "2M5HL6hpdZk2eUsNtBb1piHcLUAh71UKiXm1QSyBTg5GjYsSun1cQi6sgASJgHNptBDqUoXGYen75WFq3HntN9c1",
  "key26": "4644dc6jUC5u8Wb3HR9rasK7a2cSZu6BJhrTMVVob66Ahx3zUQGQyHEjz9Rpye5s8wAsERj3ifVMwp6vBKMXcBQJ",
  "key27": "4SNptvksBUCiyRhqQBVzEHfxpRTPENtsZHjsRgdTNim5vgJicAgKKTgnsPWirdsxDQb81yjNsuNEhviYiMGooA77",
  "key28": "26k9AR4fs8Lo67aH3GzczM4gK3Hfi6Z5GRGoXp3N1UN8jG814C6aSrzMSrffAcJGkM6odh4zxVXCsUMPp8dVR9Ww",
  "key29": "qwLcXPPvoRbjfCHnML3ccqx95zJCc3s42h8pZrfVEFLGKsErguTEtZFT8C6hDaajKjejDeopAb2k3P4gkKST7hW"
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
