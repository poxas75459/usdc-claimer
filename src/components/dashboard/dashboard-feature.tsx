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
    "tPws3ZYo6b1XnKQ2JcRz4ZvuATx9zECNA1DZQLGTpW7HJinC4iD4AFT1f1C5KYGbsDY3UhDD2gUtt5SfHtRG1wG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CWZB7W4uFzrv7p1w8cobQfPtgFadrdPe4MmesvJfz8xokVisUznnrYyzw5zbsB5AwGWyvURybfnXAg6pcG4eLVo",
  "key1": "3TnbjdjgjXTiSoKKxYntRp6AaKsdnbS14h79PcWghP3H9sPXjJAzkL89PDFgyECcqaScbL46FWXmCBb94keeQopK",
  "key2": "5SCBE4zcPci5sPiL9oJgJS7isDmQkbSNJBea4FekcNXammwKZFZNVT7WTTf4mS8rzbTUErpv7z3TpHPz5kGakLty",
  "key3": "5K6vFvi6SBShS5YTpYNDttxacj51kF5tm89Vp11Ln9aK62t5W12KmpveB3V6TC82a3Aiv8fDHmYJyqhqXKVqFRt7",
  "key4": "2CkhfHdu49fEeRY4HsMAPLzM4N2qvxLCGBsPkJocES93jBYMkNGEZm5hHATuLK1DK8Ycqjm65xQLBRiXXEW4jcs2",
  "key5": "mKuzNMivqfiQgQEo77zviH8o2Us2iHWvP6EsirFVBR2becfM1xkcXLgPAk97YQcFbebNPKHAxuUZVvYa2hEWwwr",
  "key6": "5nCQWW8176NtaUSXFiE5ScHaEwHyYcX8FGLtCedTtzCvbiGjJSooRRpVvqTMYFSigNm31igcKwBoZ3tbzmBVh8At",
  "key7": "5u11mXoaeFnthSZpntzKm4JKioYtosL7FUULR24jiYE7LHEE7tvk6jday5vH5d3hBMRcxYLza5QqjMTg1vfr71VQ",
  "key8": "3R8ULMK4FobUaCoa8BTp2DTdff4QSg2xHKp2gV1DZ5WqZrKNn3hRh2bD5Y7iwnuZ2iRAGmq8jgoB5gXpYfP4cwTt",
  "key9": "3GYzPWFoZbzxjbW9nTdXa1fvzSGHQLHXHYRFtd4NHkoEtRTfjmqsa6i9ijncKYDbZu5nYqTvxpeyeMU4T999AD1S",
  "key10": "2AmNg1BnF9bKbzuUTLKrdaqUcvTu3jps58BYxZtwFV2Gn4etce32eMUhdmBZUzDmBZMqRzCqeeuxjreACmPjT46V",
  "key11": "312dvoZPHXM14XfiESxZQ8WHhHefTvya7rbQ5HPCJ6Kt5qVZ5z32ZJawScQFhqiCcrdjx4XQ7NcL1uq4yLm6kJLg",
  "key12": "HGPGtLDRficyC6ENimApbHZZrvzXTUq245DZPjhNjVuUzdmtDsNsuMZpioJahUFewJ1DqQ9yAs3e117sRkVsygP",
  "key13": "4vD15q2M8CJMTEynwfttdafBLMZ8fBfCRtWpBxks6KWZHtxBjUThQbWm4QbN93z5Un2W6kMahaHf1r2oX5ajyHep",
  "key14": "3L3hfQ7hhB31eS9uVZoGwzo9KNFGXHNe8pbNsUwHuSGg9KYaP3DL4ckyQD2R7F65KdP8nyw2N7z8KQkZz9rb8ig9",
  "key15": "4kNqQmdwH1ivqhED9dgRLyKu82VJnQP5YbLvtVWa9xfKwuMBnKXfea5mHsPwmyY3km9ChFNBn8SEcSv2qzDLEXwy",
  "key16": "53wBdDHZKffF9Q8uYY7UpHqLWb2mZuXzodYLZahuJm53xibGJF2VoqEVB5NKFb82GnXPkrHZYKEVo8HkBzPuGq9t",
  "key17": "3n4XhdfZYHi4j5uyjKCAtz3VXyaLFSDgQrFiBbqCbeB26PAyn5WfnXoFb2FZqcTsFJZiXAZpSN4U1c1P7q6cf5gR",
  "key18": "3qvJjuEe8ku3nRR8P4FVRecdmnZZRgvHPrNen9VjVgqmBAGs6o8i2iEupaMbLYBFa4GXhuMgaYBM4mEYjDKXGpHp",
  "key19": "2BCA1mdYewxnuJwwLHM6W8P9bfbhr3q8RjP57DrfdyAy1YnvVZf4MBrJBPkzfLxUu6pbNpQiphxC4M38UFgXhNQs",
  "key20": "63nK1LmxESenkmGirv5JWXG2hBLMoP7fUDjHBGB3V2c3Z4gTMPR6PHm2Qm5ejpwda8AV9TMUrVZjjRbqrvgwWvGy",
  "key21": "2zPBgzqJx1bd8gDo2qSELZPdtnUVk4ZoT4je8gtNFRP6qjcD1LJXrwZBQEtXhvfxBMZmfhPvfj65uGK3dPqhTou1",
  "key22": "2X831RLANpMUjbZboQkn6rh5qr8QiFBmUtKAQmc92c7tLwBajcLSvCh4JwreBWkkuQsMukArhG9jAbr3CVpcKE1k",
  "key23": "p7P5DTzeDofd3Y38tDprzeDTqAMKzUVvQHEVBpd3hbURWyBfAfckxRzSDvREWyzRNXY3RUJ6nvKjMeQ19XjopgL",
  "key24": "2E9G8eFDRo4eJbKLsvKMaFRjfxHvqZcy9soXrgEwF1VVbi1ww8yTDDVbXrHQDuUjVgwy9gfnWKdEsWPhi5twotnV",
  "key25": "4fvjaVA9Uc7agadknDqtf2ZnoY2gSgjpCyHYY8rRL4HXSDCkB6gesM4A3wos9FLa1JTAshvzrmRiqUHgwMdU4qAV",
  "key26": "LSjazwkFAx1uYGZVFx4hJovySQfatC2fZ7pZKpYxsJhwsXPxxaVMmzpzTecmojKRKUtdqvUJ9Tah44jG761KQWw"
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
