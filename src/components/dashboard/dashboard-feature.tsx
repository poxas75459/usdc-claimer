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
    "2e6p1SfrYSQkMncx2og4aWQ4n5ueERgkNdQoywR6KqLWZK5HPbazRhaGXZWajQzHYFZKaLm2DSu4QkXszMjMgqMd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UF8fPoPSy9Lk4wV6v6xmf4x8RBqMn7tMJUQUYKXqAZQJWyWnDjews1ZHkpBwTSXcjMDdmqHkMDuCPttYwVLyC4Y",
  "key1": "KytmAD7cy65huFv6bD9kuyEgQLD7ScJ8GLmjeg4ZCfnVLiFLiT34KuSpUiSiqFrchfV8mDMny7ewyHiYapNKDKt",
  "key2": "8g5qHed3NCiJf28NFHpositk2eTdHdjTpLh1o7en5Nej8xtqbhpxQE31gTUHZxwyPEhF5V1DabDRATmCbbNdGTx",
  "key3": "3trQYhNPrTLcrsjEkFyG3Hderdmr4fH1inTuE27DHDZeM2UHhbLbAMYQRAEguY8vpAErkVaf5o5yG6QBpokzKHJF",
  "key4": "5wN19symtnxcEQdxkhFzaMWUSwifuntVWV9arUVkHRfxiq9DMkQ6RXTos1jkVFLTAXfRrrjXavUAci8vwdvQF97c",
  "key5": "3evbq1LXNx87ugQGvuuPrXteTEwRjmkKfJJJ9D2Ho9ZHe1VdjLq7amu5dpXc2strUVzNt8q8qm7u8FKyFYcbPce2",
  "key6": "4GpqC2FeR9eySPjG6xgVqkgWCqX9646uMMLUdQ2B3viFBft9LWNu9HULtDMQbCa5NjABqwtqrYd83tZP2AbV9Dgk",
  "key7": "5JzBkmvtYywXdkpsH9VHxiDhqPRU1sSsvmjD6pDQgsFZzVPJ9jFLafzoEMa3912tN5Prp4DiXRZrH1SKQWeEgBEk",
  "key8": "28u9xCFfRFZ2enY7NDCSBXAUcVk9qQxNqWCur6ZdWohbTcDgXMXuDDuVe3vrPtKWhgSEaEDjjmPkU45F9koYumwq",
  "key9": "48JPBn429MrhrQzjzjFg8C6y1zzsfatgx6UEmKNXufmtswgHgAQ63AACLzQH21AB5KT16xLi79VzRB8XfqVDjwcN",
  "key10": "4oTSVKrB2a9t1nn61ZA586oGGwdHnwyALvgfkuBs7tkF1asErqKHpqHm11sCWvWD7R79uimdeMn4kaZzSg1zTSwS",
  "key11": "4JyjsL4PkMb14uGewToLhfX6v8P8HB57cd3uGKqT1eLLDdu9ZC7FK1mfUH9Cs94ZvJvZMD62bovzAqUivkQUuign",
  "key12": "4gYkaoxWqBAM23y1bxgozA4BjBXfAGsbMy3uDdLxNWP3C1fWVkHSvAK9LEpKu1yUAaChHvHQVtXxn9bXwrUpRTvS",
  "key13": "3oQYKAo7XPBdQyUv7SQYaABtbVN3vyYUBUuf1NNqdGqKryPXifULsqPmdQMdDpT5FrhQKbRYZwLxFKJWJBDpeD4M",
  "key14": "dWWQtaZQ6cwEyoV48dDSatHwc7Bp8sFTGVSz5HdktGfNmbX4sAR9iCtG234cMXFwGmeNQxeW3YTQ3Pg6JzQ8exy",
  "key15": "3e3XFztrZMSbccNiGSGBqkb2XHDBsn9Rr4aJcAbSM22LGpZypQPHTosDy8GCJT5FAyFkecEwfg1MXSZbEchQUwZb",
  "key16": "2fCMcUYgf6BAfmgmRJsahfE9bNTcNdUpqPq1Wh5PFHkywMj48Bd8WkLT5QC77YhhQLQqQbtXe7mvPYNzp8CqiaD",
  "key17": "2WEKJqXpd3DKGw1NH6cMk13TagLvRe57fK1ovZceK7kZU8nc1ChBcv2Fn8R3xRX5KNnmV4aawgC5LdYwvUVuNiBU",
  "key18": "625xG4jUQAavt6BAmDwZkJQ73QBchr23tSmhShPcgDjiEZzBPP6aGiGtqCuSkEMQEqqMrAMxW6yPT5H6hk3yQsSQ",
  "key19": "2GUwze3G98S8hV7sykS5MR4cz8SV4spzztGS9kicRmsRiZ9E5xRHaWH5Useaezk6kPEsE7bU1qro8j4MSG2yc5A4",
  "key20": "5cdJgKRgCZQFxjiFNRCCjgrA7g373W2MY1gXgEUnUbt5j1b1WsRiBLn6DtMsUAkyGtsQJ3c2KVUxmkPKaLmMnR2T",
  "key21": "3Xu3tM2yqizrBCiiyv7DXyyaJdSeqDp9uA7z7MvoBHKYVGF2JnoAmoDVEDRHx4nCVXNPCNsazCSSSBsFc38F3Hxv",
  "key22": "4nGp8L8FuzNGh9z9DkPNL6XALQkoCpTbtp5TQtSjSLd4tCYkPozpmeUs2X32VrumZ9YpemTwN8975sE1nmsxVrTA",
  "key23": "4h4QftcqDL96bYqNtkyEmDqaqRzbgEFSSGtXZsKx2EmtR5f76n94uF7u5frqPYyzb9PhyvkKqwE7gjwkrDYveGzu",
  "key24": "51YN8id3mec8wJMQfn3NnahmyHWFhxXcBakz8BZBi34jDjyFJRqfHE6L9rb91WQ3ahRJBP9UbT14QghtxPByrq6R",
  "key25": "3RoD8R9GPHRWx1dBZ1LNL6HyMxDPgV4zWkWLZWzLBUpAmFmjsTAdhRkgHZDbHTnJvzqYnshDNFbusK2XA9Eqwu1W",
  "key26": "5HBo3jLLd7vGSg3hagr278xvRyx3ZeR3bnR3mjX3nQjEh4jGipqHhMwNJsdj17YBa6cXbKdjEybHKsYY9r6sNnU6",
  "key27": "fWxcR7s8fX7bb2eXudJXfeFP4uZDreR9SNT6FbVfDXNR5sX7PrcCSQJDDyn7Xxp4jrg2fdoso5gqBa4BrPBfMQz",
  "key28": "2aehjkMUQ479Vs9zSXERamMtubuZHXPZuMnSdiMzUxcyjmPeNwqy4ujqWKFP5fuzDLnPZU6hWBj4iWtUC1PuLqe1"
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
