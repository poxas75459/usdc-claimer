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
    "4UAM3uNJXpSDnM3FUbTrd9PRtn8fB5CPXJVtw2L2y3KV4JDseS2jNjF2He7ZBMmgv2ZcBzc1FE4tMp3dc5N2RC1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G1k5Dr8tUcfVnMmLV3QVcvArA7m475zYeutk4XpYe7kyEX3y28SZSDEisDkM31gjx2N6hnNKRcBo6ATgfb8JGpC",
  "key1": "esaHDKZv2hRhp1TNoSbEyhR65RE4fvBhQdVcyi199cVCaodeEApom1pNAwsYXE1PegZsA6T99ygdg59aVbuNacP",
  "key2": "3B1kqUS8Jvxckmc9ShEepEofxR4t3oaXbLWQiU8jv6CdgJmkkVkJotXwBLJwJxtnuTqrZ32kQRtZzLWpEx7UqfFu",
  "key3": "43fr75UqZ7FSoSHgMJ9nMah1gP8uHbLajBeZNbfx5KXLwzFaUndeLuoYNTbp9cuCPbj8LPkJrkz5Psrh4JuUXpzV",
  "key4": "2Ep8dSUX5CteiqgxxPXbzP9pv91aPiTmvK7R4X2AUpK2ZW3guTwB2hPUw4HX9uyEHpSPPMC5yYWKoSgwsuvbh5AT",
  "key5": "2WAS19mLzmqRLvmyseHc6m5AmDJ8mto34qpNcUwFXhtGmZXChP9nq9HR13rhvMUchQpfnGF94aXxWEwyQ6H3CJ1o",
  "key6": "24tFBKLc4jijuCcZCbqaDAtSwgYG5eJyvJXhwnDoiXkbeoDZrYvxVoEhnUKKsosB3LhLg8W6cabSDpqXB8VD2wmq",
  "key7": "ZN4avgP6XRr1XLwHQRQp6SKrGTpvD4DyhPd68Pb4B8agSnV7JiX2Pikj2dodBxH89XBnddWdKW7U1CuScDgXwWh",
  "key8": "5T5ULDnhnVb5ACqbpJK1oz1f5T2B4i6pJXg4K4z6cjyJQ11ZBYAxkq8oEvT9DPMTeenJ43aW858JhtcTB3EfwdWP",
  "key9": "HC1WkABAP4QuKvXNexN2rjNeLnPWRQLoi4mGBoUqGKu4Z1k2QDRFnhcQTXypGBjhDyH3Wcw14b22W2eJ3ijkXw9",
  "key10": "4g2pBeV882xrKWAbKuWBb8NNueTNsec6hckmd6DeRfmwPyohjssxoRJWUuVXBcnubj67ZeMThUJWBQ8HLf251eUm",
  "key11": "4Z5HXc68hjYHbMJB4zFZ6kcbgMdFoVtz93PFQXqKFuEDiyUqjXG7p5D71Rhw5zTYVLsQ4zEUDSKoC4ETA2hBiaNC",
  "key12": "3kijiaoGykWF4E5PKSVpkvgMptn6Mg6d8T2vpyVCX3BS8c5MUm24kzngN6SWqB4UiKh7mJXhKsziga5m4WJbMAeA",
  "key13": "4q5QdF87a8Uqqiu4WhpEzd1Qqyf3d1ckkfddQBmherPQJ3zQ5V8gRsQhLLUUgFPj51a3wMCzq6BK2zScETytMXHS",
  "key14": "5HDgAXCeUhn8mJk6ds464En92hV3S3cHyFnmn3o9XetbmyjWWv1ajxxQBFfZE867dNYZXZ1NL54hiuJQ9KJ8jecT",
  "key15": "26GnjHMZTRjqKYdZ8FJAu6jP53G2YMBYo7dAsMnS3boFSyqHVAeLkm6NMcsJboZPqok5GMH2BQ6FuN3XYUy2UAes",
  "key16": "XQmM25Ua6rYtQiL3dwjF9QG1p9t7L7kTRTauHzTzbovkkkkgbRWRd7AQiG7pTMeAs44JPwiZaMxLm7mEKYoHURF",
  "key17": "2iDv4TJns9vSca9S8g4EUdtpNamxcGjvJjv5jWLzqsbV8fhxqedkjsFDTfnVs7mR6hNPhdqjCkJ8oA9mgazgSPir",
  "key18": "2Bcrnp1yCsiM2NsQJPmgAeFjpurBuCx9pAFVgUZw3sv1bDkrbjLJJ33kizz2WZobX5WRLSjNDA6ec7kvo4aCJhEP",
  "key19": "2pjYh9H9GMaZ2CPGLqciGEV7nDLnKwCnyhPo5ARG2x6QGWXyRGt1kvaupf8SLBm4Ds8cfqpCiVT33jS1rWudYS6y",
  "key20": "57rY6GSgEFdZ53z1U8EXGqnGuTv81qpfyohM1FHnKqMeMm3ZY8XbMkfcURcn9s1BbeegJsXhttYmWcLsVXCyo1uR",
  "key21": "65iqD8upXK82j7T9vtztYfQSGor7mnc9fgczHLVNDZVw9N4XkUtYF9EvS5uu5UDCFrsaKqRf2Fr2YjRayGdRQh5X",
  "key22": "d6u23RX63hN5jPsAAkQLwQd9nFZDZRUxFBQE4a9E31CXt5vw9PDXVYQDkE3Za1NarCrpba8yaef8aLE4E4BU24z",
  "key23": "eQAQJWxuiwhSW91mp1u1E1ZgNt2AK4ERhw8WT5gsVkoLf4aua9nSSMDirh8JDGqu13KnXKPHXKGAmXdpmsqMZtD",
  "key24": "oh2B3wKW5TNtHKsPKskCMF7TZNzwcMC1SAzJbbvfC7Qt4dVVqhb3amnjtrBYYTmLcjzi5cwAravxeUwHWp4C6yM",
  "key25": "39vaoYbPY8eM4Uih4uSBQnm1U83PnmKKmij8Sz6cZbjG78EJSf6EvL7D19jXaV4rPzbmZciSYB3CHYQPChCRzwSj"
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
