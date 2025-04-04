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
    "3m4KUWNCt6EvgAmnWtPNV2fYUW8fjMaGygzxzGEbkKgCVH1e6LSxrRg632VkiXK2JDzb5vsnLm2bdtD45USbdLmX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CF9YybSXGpo4oyqH8fqtVoRAZvSFGpeGHmn5SJu5m6b28tng9aWj8cu9awkTfTmc5TnRYiXcYtMK6emCUXkRir7",
  "key1": "CsZatmdZ6jsEBBrZYdMiT4WqWNGhX4jnGg6MMq3TEpRHzg5E1ZBug1V8TcuJvKTAeaBBooPycWbsYPAmcsLVZNd",
  "key2": "2mPkcorNiumped4fuHU9SXAU9homRAidk5Uw6noXrpKME5CE4WcQCZfbnrGWuuPd1qnyvY9EDqiF5XyUPb2GWt1D",
  "key3": "5qq4w1MeaAvfPfe8gHEVrLE4nu4GzYt5SVwYthNZGFV4wNsXwdeufV2v5jLXZQKH8VoSn92Hmp2qnNoKKTmAwifk",
  "key4": "4VV61ZY2rWTSaz9mCFqRfjWpLf7TmMEAUGsB8JfycF52XzALo64JAHnK22AAg72AZLUByX9Mdnixv6b6fLZ8pcob",
  "key5": "5z5jec5wSjgngCh12NXJzSQrJba6uKPTGA1G7yGKMisnefDPvXfjnwekMdmq1tEnNr2Wx6e3av3WTTTSKkQF8YGA",
  "key6": "5UcfAWnMdNFnAKwHZE3XzThHDxFiSV9FyQ3s2hYpJnFEH3CtvLcmdVb6RjUkTbYtENzPoZ4vjZqVrPkPE6XU6qkk",
  "key7": "CzvrsZRfvrah2zcHzECDAJZGVrN1UYxHRuZBih4n2Ln2Pdjo9pS2WYSkZfkj8Ba9PEiNM9KRJ5GTi4BiMCfbYGx",
  "key8": "4CLg9LCGc8x6hCDnFwWqk4h3HAYVan7eSNp7urzguGPe1EBaMgMkQW148QFJyhPbCnyDaSRfLnuxLeHFRzbbhiKA",
  "key9": "2Y8qctBLYYdWVGTsoCGNrca1B9T1invcCe2s6rSrKpipcECSinr9kMKffk7cD5apU5o5HW4L9rdhDAqoCWt6dgL",
  "key10": "5YCKaD3iyTTEaH1Ay9E7oJLEQhYbyByQ3k9EhjintAW4QhwWFTBok2bvJRk1VtnoasEHNAmetbL1F2jbE6m3ogt9",
  "key11": "35p9aYFpgiEffSt22E2sDWD7GcVavAuAonnqArdSgeNjbzEPDDtc47NkWanFCWkzhb7YBbyJH8PTzHyMUqRDYHEe",
  "key12": "38RLTT8wjb5KEyNjiGGewF5iniVnW5cWAVSVKHqsFtxKWXKGMNUU8zwpFYwVGTp3xraqrnm2UThSZuDgRfrNg3EF",
  "key13": "32k1xtZT41CmTaM147G3s12ZqiS3cQ3HjVsK4phgFTYM9cAG8XYjFVLP1XtqQu1TnrSsnarqs8DcLtCS6i6yDqBt",
  "key14": "7hF2PHezosAzJzJdCVhN2bha3XvkGrTZ6fsjcBJ35kwYdaip47K1HNYKZUJ2dye2ZfX9Vv1tiiGs4QrSSaUsYxt",
  "key15": "56ZKEjCkr8vHapzM7tNgY7EQmzcf3ccyMWsXHfairkjNxNdcnLxG3Wp92VfcnX8CsaWrmnep3WigTtKzF4kcVQY2",
  "key16": "5au4h6Dyjv9quVbpt7qyraKyoxHniatMwBmYy72Rf437NrEJFdmnqbBqBJcUjxiZmrU1oviXQiLTM6SZ9h8D5w9f",
  "key17": "5z1jchnCM1nQ8y8dwYwvuPBdL7ivaE5sTNBojeyNXK5njD5CTFkWbbReaAtuPDHJFAFY2hHEgMJBUqqgePwxCgdb",
  "key18": "4k6snKm5eLPS7W16CSB4Y7R3h66F8Pur9bb9NT1Zpd75E7eegdJ935oMPpVQwmcZaWLauc7wYjtSGkLvXtgkeGbt",
  "key19": "5nd9j4srstxCQgrZe9BSWuzMdkiAGbMiKvsiy4ftSRkL5j6CYWtSPfJi2Fvgw7wHCoKph5gqfW1ZV1q7SP5v5z6y",
  "key20": "57FLp1HpDXAGCWafKBX4Pu2KyhFnigKshPEHKvU77txgAwEq4pTusVxy1gTua8Q93RxvMX3ZBzkYZkM7Q7U6k2fZ",
  "key21": "5nDwBm7rHqaAERzTvzTZLbzHFKMbfxcr5R3eHV1droLmEX23FpoztvxqhTG2777Gr4qxS5sMuXzVBo4au1UbsxPw",
  "key22": "5hvwuf6R9MdSDq2u9Cs9o4FZSdnaHLsE1yY1rwA54vYVLCGRFCEB3CU7zmTYCcvU6on9xr2JsRyTkN2RzQ4SuT5Q",
  "key23": "2fceWvpzL14kamjpmANNMS3qCS6yG47z3KecFvSJkijMDV2A5CN6RMo9XcCnrEkQVp8WumqGrRyeKB4FdaMdwEen",
  "key24": "5kcX2eH6yjcc8u44TzDmbqGd4AwUm3mrYgUZmCwGaRf7YvY4sVzdB6XKyiLJNjbEx1FaJbcEHphQ8ivtYTztxvyx"
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
