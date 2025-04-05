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
    "3hgMyxk5k4fwimLvvoyCv4xbWp5B6nadt3bLYTTWKHjYgBmjycQPKUGMjyh2UAXELbV1YNHNDGep9muU7jTxo8s5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQNtZcehxX54GaSBbCJTdWembJB1X6NL55VD8RFFNK8Akf2Bu8u6seNXvR1qXquR6XiVS3kqNQm4iVYihv7pzts",
  "key1": "5JRqDLiV6WByufooqE7NoZLMFDTfVyQyhn6Q7WkJ89zuExiprKFm6fWxzg7NHi3h8sAZqqwnT4bRhKuF6oBXmx42",
  "key2": "2X31hg8SPypAvD9KXhdbiLwYn834N3hJCEPyvYkEpFoBhLRv9JQytjcJyTeXCEHXy35kgBo2xQvC5DbmrAXRqaAA",
  "key3": "UAAKqBUTBVWBFP1YaCYhFzxwf3v9iJJEpUvZLjsY9pfetvmr2SmiipxsdpTHq6XPY9jAze1yWwKp3CTQjcEgbva",
  "key4": "3SP4xF47b5PZ5paMrtf6gzaxtpC1cJmJXXpJPSfSP62aBRXRDnc3eiikkDandB21QTZKzxXyBxzxVjUhfGTeaAsy",
  "key5": "jUk7i8yFzFRqRhgUJMmmacWMC1SGeNh7S5psf91BjozaHtwmanXYo5wPr1cxxHw5EdZb4vVyXt2fuY9viLCxphG",
  "key6": "35XfFXxnhbY9V8c9MrinRrMxqSpH58VBiCJLNWNoMY1agP3QHM6thKRfd8FK2ewVJwy2isvcei3u5R9xufLLJiMR",
  "key7": "3jNMxXfcYSRqHArqsydSsh1Xp4CB9jLzDZDj4WbrEtx9s1MDNXn9YABdP6s94MVxmKnLjXVKRtT7QMdfPJn6bprw",
  "key8": "4HF2BzxfMQb1sKGiNS1zUNg2qu9mUpQvBX2YLAP1uFoNTC6i8PFTyAYWu67AmHmnLmowMPMcMZWxAehMPQXF8sYD",
  "key9": "4qQ4TSCJ9EKpGk5WyjcdMuh193ANkQrTAzJSVqnZxJvfDvTVRMkoZyXHwHbn6N25T9QGEBM9dxA4HNtUSHdFYmVH",
  "key10": "5TJGWvE9yPS8CkxQ2NXsgBpNFDp4y9LTAQQN1YHJVwchjJvVfa8MWknvRs1MxwbvLgt8iwHM53aMvkp7Z8PEHf2h",
  "key11": "3Z7HzL8oz7cKtCPwZNvGYF3AgfDw6aXmADsmYYR68E5AfCiHfNE2eg2aFRS6gUao7ixnoTRjyvkcZeD6LUQ7AshC",
  "key12": "8giZxELYVMdGtNS1J4pRcnvtm99KJkZuDBmimwnDwkiUdUHBjdtb5nT6w1njzLvdjCPtdzJyXCgfKB6fsgnD7Pf",
  "key13": "2u2GuQZjpBWtyCo5fhVudQocaoR21Jw7kThbbE1LtdYBDetuVUrCJ89zh5MyFL5Wbtqaez4rSiDrGbfXmTnibLws",
  "key14": "4GAq35twNcDax1FPjnEDHXAtS8Q54Egkt95194rQonLJEbVPCgpVC2X4yF4RwzFytyVgjVQhQTFd84vWoNc2XQ8y",
  "key15": "CTXY7Xk1pVxHbHqM6kpZ5QRWyqzYWjw88T3hyePke4ZnuhJUkcGncfBzNKoTGx4yjD7reFsqtLSaFHKDWTk1YAm",
  "key16": "5RSQEaCg1pDFNZ36kaHA1UhjCuWp3hAKWSJAKrHTQxZdJEKQ4y9Wg4ffMuX7ZBZnxufyVxRtC5yL8EsxzkYUqQus",
  "key17": "3Ewaw85Wd4D4MxUNiq6TZmv1CaTJChgQUvg1bwu5VBcNf7kkzqtjYtC3ihywkKJBpJZ9J3bTA43ThbN7UyWRzs7T",
  "key18": "5UDxUY7wGLXET5q6hnbCBVxwhC8u6dFczLnpLnNeeEGJUcg9hcFFHHEHgWi5q2ziuEDaZ8zzt3FjqrLUikVY53EQ",
  "key19": "tvSffPgNah3DmVkHmNmyNLnDeLWhUf4DAkLign9KfiNFH21yjG5Rrq7358BoG87yf8Et6C3ut6pvvrGseYbugs1",
  "key20": "2JpnKqABkPMeLkse7iDYX6dBrVf6n8vS5seZxrhoZH6FSHkvSyutaEeXikfMNyXbaLzvHktRKyaEVsdzwkdSALkb",
  "key21": "2XEX3EFHNnwAvHWUdpiWZe4XJvbWkqr2jTh7nnyLfZYnUhUXKTWJdbjvzoE6Vsg2bc9iW6U5jQVEiJBTiB7EZgq3",
  "key22": "32YUNfT2Bohhrnr3r58Eb2sLThUzBrxL6tb38juCm1qqHUm2CP8eZPxWyqxRKmorCEXczqHeXrbb7RtcHbaNQRic",
  "key23": "4826AZFH8V6CdTzAWW65mFDNxrb12amFrVUUZTV9PBbNgRethr6xWzt9JhS84abnnGSrfxp8riPJmuURF72mRQJg",
  "key24": "5Kj5YdZXs9Vh9gkjxi9TbA2JkjGifhvXe7DGAgwh6EnPpcxhGZWQHggwUYpx391NfLZUg6SkNGPP83RReD9NN92d",
  "key25": "2ikt2ahedCcpmCWPDSgWfYGkRt2jCzJsY6dq2RWYicA8rSvGKJDedPcUx63hENcqSdaNvWHuAn5oAcYYGrUn7UxW",
  "key26": "3SXeXmgApD7EKZPWGiV8ENU1tARGGvebHzgAxdHNRoQfB5i4pUTmxVNHUZZLPVYdSzz1tVFN5XzVaDp836dWkBQ3",
  "key27": "4iQoRUDggEcS14T3h9cx3L4rwyb4jSLZPTbvuznFifFNBKhVWYpHEZ1ov9Ac2eyox995M1vgFZhT6Husww2fT8yv",
  "key28": "4DYSXHjwd7FTKjKBSEnCsvm9g5SjyNo715FnHPFFXfUQ3AFGTnoSjdCdDEsCkpzCKep4UKGCHkaB4SjjtXp8iEvt",
  "key29": "33cufz7kYZ29CFtT2Tr95fXAabuMx1YK1ysdbcdQS4uhmtGo3ie4Nho4JyF8BxtQT7jKW8dhbdPNgNnfgpT6zFsP",
  "key30": "4RizcbEbj3X8M7up8syrPojnPJv8ud732gNJD88TaX7iYgKf2CUKEATqpTvAcR9nEqgXRmgB17bzVtQiowJZN9M4",
  "key31": "3BD4XeQgUyafu1dtQ4kBrzyNxEuCVCw5CWw6BuXVwJ8CG5z7TE8Q642cb6dFh3wezMVZJu1U1oTmmr7CSKvj7HJP",
  "key32": "4beY36LQ43cW5TMZsQ8Ugv6k3NnkyoUCRYPxX8aJatejvBqXQNai3vXgZmHQwXmaUNNUqwu6yQVED1fxMN1AVQau",
  "key33": "5BJ7cTf7NhKVuBBwqLuKeptQ4RRgUzRfnQuhfnF3rS16bmGVDucBZZK4rGM35ZrbZRfkJBmDNSZPPPjjCWbfBndw",
  "key34": "4x3XuJbGknWKQcevmQM4PR5rJfA21CawsX4vF6zVGX87NEPsz2ZJ3XQ4K4uG6GfwvPh9eM5Z6jVD9bpVKcuWP7MU",
  "key35": "4k95MgngttSKin7wjHB7kxeJd7RRY7w28uVidXVLHKKymxYEeqkonb9mZ72FjrYHwzbDPzrWydaDPD2oZGVJbHdi"
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
