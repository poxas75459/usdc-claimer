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
    "q6wajeKbCXtmTp8Y7CVEeH5BF3oJ7NkCjfiiSAHz8X7RZeY1eKaLedV6UnniXHYXwbPz9aPytYF3xJXJvCVkLXx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "323dGTmqYg6a4YzAAuxDJNWrvApkh4rYopD2EvgJCvhE5SEbYbnpCNXroqM1kfFD1B5fAjESvL8GB7gVXHtm3oan",
  "key1": "2xg5rNAepXqXxS2SGVtLuC8yi49S4uNog3LLcQKn4A2gcxdTQccFpVUffqSkDb4EScrE2TRtPXK1cp6Fj6k6CSwL",
  "key2": "1KDMN6q4tBkg129ThocUKrY2nfQngpX8ua9rCsgsKfNRqKXEKnMbGotZfRyqdAuLEqWfaVkdA3NmD1XVuZmNRdq",
  "key3": "2asai1X1GhHfMFVqkgjUrExD6TtSiuhLf8AVKEriqHWWktZHH1wZ9bdkJ5xjPWSHTA4k71yGzUCuP9WrxjuRXmLj",
  "key4": "VYUi21NDjyKpdG5SMvcs8go4QLrsVPzdMJvC4wxNj2pbgdBTSFYyeuzRXwvZSAeN3qudBZm1agvK46GRVieGKRT",
  "key5": "u4JcUx2bBz7B5Y6KXnvWaGEvztyyPhEnptLytXKMmZD1NKzg6mbgodabUiVU35cWf45JnT8YmE7DhtmHVawR4nw",
  "key6": "3mmuTufgwdMy19uYVcUVrGfGJDS7dKjJPmXmcsLEKomWfegSwcnKGmUg8NZq4BCyG1tiNXbdjwgBFfmPjYcrM8uu",
  "key7": "5fStrmwCuorVBhKGu34inb8bDkeYAL6tCNGaQKjbK3yvWqcKf4neCSKYW8WqUAevodg3kzKXiner5UTPDoGQfnxS",
  "key8": "4H5kn7WPs1tzK5GsMZxnzaLnJMMYyiqGAaQqyq9qqZNDQggtd6PXKDCiWryZL3udBBLtYqWh7nbvuDF9pyo9MpSG",
  "key9": "3cHi1q8cxY92HsdPJCWCwSEe1CXSfsdmxdvU6fFVQk93twJN9irvgHJeJesZoE7GruKSEyMWqu8wrjswqnTXyBfQ",
  "key10": "4xEZADNxeMUJygVRAMdShANYNdt1Ug6Bt4hHQuZBFKw1Brxk67DvqoguaHtLyZUxJg48ZFBcCpeADzXrkJSswBmd",
  "key11": "4yoDmbuDtzRgcMCgDk31WdDvaGbnF268yDpCft6h5MqghsPqyYSJUJKVyZeJRWbaogYnP89h7GzukTFwpw2NKTuG",
  "key12": "4KRUhD63994Je5pcMLNUNJmuWs2WVzHDe2U32gfMebfT2B3GeT462tZYHPsjjn49WopyEPJn72nm4UtMGnAcWSGr",
  "key13": "33kgH4vTwYS4Q8GeSfDBQKPw8gcjFWn2uJ5LS3qND1AYhSWyAKGyHwRfrTxQFXskafVgwULb9dfGSNdP13L2WxUX",
  "key14": "nVm77yb3Zt3yHWBVYwdrVJ8DMzGg5ZmjMSybo723kb1cNWv3kGnwTs6smYoibQracdycbrtLAVJc7qn9cgMtDNj",
  "key15": "3JfGY7t5rVMCE4ZHd5kUeeuEGABp2PoFSKBFjjCdeNFBzWq6oaJv8V3D46ajEsx1txauRVR3cXGhQXjpz3giFA71",
  "key16": "4ttqcNL9itSWSkEoAkKbU6PZ5uepJNEn1rRyZxH41k3RFbUtXKzJGmMAWzq8a6Unoyga6TmoUU9YwZJsY5v3J5oJ",
  "key17": "5kAwQRyrcxEG8v2yL7LwVpiAnewHEREK1bGgpBSuynMbFCFqSRdJaW7oabtDSqpYtzwqPnohzMNHKnAtF7zcCkQc",
  "key18": "4wofA4GGqyxtLjkEsKEagNTFSUJQFTzKL1zkARPuJFxT8HBV2dRxgtuxtyuRDH1BirTdrZeC8nYogLAtWyVMj2gK",
  "key19": "21eaYkTkedsqCCeuUSN1oGCFAtJtLtxMQjE5nWJkA11rm6mKs3T7mx4UCY6mVYq8y9yR4ackGf64T6cYivpSfCfe",
  "key20": "2NT26Eda5YPMJjrDC6FuSsozZ8Bm7sC24zWNHSWed3AYWV3iLnzFRS16L9WSRDZ419h9aezpVMkKUw45U3V46LPh",
  "key21": "7szbyaYaUiyi3x1c5EMmYxf6veqidsPcP6NKudRSnfzf2g8etUNwFjdCJa8fFB6kcsC9zqwKNT3ZpGWdhmqjpUj",
  "key22": "b1AuViB8vJPbioHSmAHYLEyPrTEuw4qFmEoCgZCemnCzVBatbPTBoNB2XyJL4G65PuFJwqjkjL3iZ5MpofG9s3b",
  "key23": "4cyrhAu7JGmxbYxLUSz7fujBXPs5KFLsjnuAqv4PPg8vwzYSJ9PnC5bit77gcXuiiL3QbwABS6UDKGY5oAPs3Qp",
  "key24": "5cEan3pbVKHpixbgv5xNPJS9aebWPRjrM5FzG9ks38iwYw6hnK7CrAtHXFe9rBqyP81wZb6tmCMLxaW9CRE2m2jD"
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
