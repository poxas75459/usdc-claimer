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
    "UNPRcC8aaUjUw8q4ChuFq1h8v5NHVjaFuAxBqx4eaoWgfH9CHi4WQqqMio3wMk9sNTqtbU9nX6iiAzUV66YyrzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pQWwijoCDGs7fYKn34xArcbvHZSaTSLV8ybTJTNVYpFwnvsqv2RoA6gQK5svjZtZMvkAdQudfeS54RvHVhWmyDX",
  "key1": "3AWZV4i7hqNgiBuViCK66noYGXWkXSugxx23kAiuKFH38oB2My1qEgr5VZpBAYQtvT1TxFrsCT9DotLersqfiYp7",
  "key2": "5GbKUcA86qQ3niV4TvvHAgasHpTvXFuNZeDDuobyJxpn6P4ZCKswvsLnGFTuyeMWqzPbHKfo5f23d6UX5RC4S7sK",
  "key3": "2NzNGbnxjKMAMRd5KVWM867SNZMejuTLJQeWctMHcFK2byuWjm33V6SYaohNLyPsR87HKxEDMsc7odNShbCA4D1k",
  "key4": "456vokB5FNX1n3cr8S8M3XCFvcKD1JA8vRygjbu5YrgdQrv6EJESEsdgxLgcCQziydVvHKhQsYPKxWXyR87PV65V",
  "key5": "4ABfVUvKFRAjbU5MqUeYC7vDfbCpHkY9D5puiaep8HnjqEKaEMeFmjXDCrDGhckGZAD726tYGKXAeVyrWFBUdLSf",
  "key6": "3XF1b6MSoSL3bhuCi9eqdQJwQoqGd2KqnW6zx2ZuFirz2umk3dwv6jmynCSXVnzCSU1SZCfUunFzqgevH3Jn1H7p",
  "key7": "JRgcqssB2WS5BPrcsrRB1TgehrRsgJxTG2Js9Y9RTbxrfJYwCDCsFQNKwPuznaEjy1i7466zsq3NDyWAbbVJctd",
  "key8": "S5SByWw6tN17dcySX1wkscr5xhpcuYCB6L4SvzV4wWbMVLg7LNjhkBwGx1GDceVFg6QW9M3V6kGipnz1jPeYMHb",
  "key9": "2tmbiFcZTC56vDn3TixJYJZfHwunmQ4cj4u731irw4u8aQFxcRxefZyeMH3YA3xaQzbD4SszFHMyH4kL8RWyypvu",
  "key10": "2fZAJDy4E859fMPKDtKk5KhLm2BzHgp6qUCoYcEYnwm6HzTPFLcVGTtnvcowb9BkDiYsbZFitEQcmRafBq1WRJTa",
  "key11": "3VVsRAoifkak8AaDXmixZesynf31ZcJ4X87dSY7M3nHPvgA5K4uXFXJoNDXRD2AsYnaqmTUNbQeA7AZdenzmKpR1",
  "key12": "5QGrEPkFm9jMpnmASUeCcS5aaSYPA8r3VKUt6PkZmKanNTZvZiUJAFeR5Nkb8JudNrSYxQg6g2UB3d6LSZgw3qQW",
  "key13": "62gKrF14itqfVnKVFBmVPUXK1E5FaiQY18Drrt2DY9jja84s7oiBeCu7zCzP8PrVXmT4wPTFKxudaKWf8anGH2s9",
  "key14": "4ohaMztvg71gSVbekCN1j4gyrPnojjLMkMhXfTmmxY969yBvL9KTkGK7vW5vAhuGK72U1PKmBZeJ4gEzi65HJdZG",
  "key15": "3TRr3vGhQc8rjRqNYUPU3CpGpXi56xgUQRvB3WHBGQQfmA7T3sCN2Da9gpusfrMSFNrrcFe4mZK6A8jbcMwi58Fv",
  "key16": "4UrFpJCsLY2jPfoW3Ry7rYmkMv8zhJbjzPfXVtBhwKTWomNuSEGrJHcvuH1JRMq8s4FKEfx3KG7NDHpoWVu5c6iQ",
  "key17": "yV3cVuiZn3kMJKFf9WDWqwErKs4CQ8T9N9a6BmpdzKCMxKQd4pg5gJes4dsAxnvD1PkexbBAyz1x1hBwSDhMLx1",
  "key18": "yLGoo6R5hcu9vm3xpercTA5n98xcrcEAFjrxkXx6N1C1ndV4NLLZhqiJbWc76smCXVhnfBAEQbwz6FR6PbWdkKT",
  "key19": "4emaCnSF4XLk1n1mTr8NECuWG1CkagMtwr7TkdfTwvCTX9eVf9SwJHoeiM95VqKayztkfRdLwx1kevZk3ct2ch1",
  "key20": "44ruCrVDKCfk3ZB6sWGtJSwgWha8wt2pxixHoK6RhaobUg36BjWpfPzFrtkdAycNdKZbEkD6Um5cSgaCNHxvUtsY",
  "key21": "5wt1uEzAM5mnCmRYiMy2G3gfRhwRXaiSC29eZbn9EUE4veeBbhNmsP3L4dgxr2vqWuVrxm2Z6dbvHyiwBsoLfap",
  "key22": "4sQnBRR8EY54ycmgqfoPXXdfVuYEJqX7g5wfC6DUtDhj6pyJV6Qii8sryGh5USeeCNGmtH5TrkPGoABbipoHQNjg",
  "key23": "5B8M6LX7oHaXz9HkvsmxGkhCfsLu7ZHxA6haWkEGo4sCBShnmEX54RZni9p13Y6AvfJiZzysGcfF3pkBjguNJQT2",
  "key24": "5WueuXF22a8RTZGNEXNYWVkm3iAfgjjyr5skMFg2cLCqG37nSAQJYuMVcDDZqsBrFHhCeKxbVkqVJqkwfY5xsi7Y"
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
