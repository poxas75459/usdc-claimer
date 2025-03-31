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
    "2zQ5E8Nqiw25FCosgZQzLpMf1puzjDe36QuiBWP8bW8JH2UXphtQMF5DTfYbXq792NXkLuXmmFDXBfCQpSdGZ3Dx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rwYvT363tJ5xRhdSMcqJif3L5hN5Zfgsc4EPiFCqWLa8YYeRejiSXRM79ycDo9gxgMj1wW6iK9PTdQAKMeLHq71",
  "key1": "5uKA7LKspwGgyoPRzgsbJznNB1QmuwntYvtL6ASsUvBLbzXeo87eYwu49khrQTofPQN1C1aVn3rQrpevPN4PHhsn",
  "key2": "2QMt9LC7YrbeXTQ4fs9yBGYU9vX3szEK7RmrxmYXbH5sf521MkNNpjHS6FgNrXxUjtrsUndE1oiUC5ER71GwqRrk",
  "key3": "bM66FfGjhse2aDwFbCdbGt39K9zmvUpcVFzcNy5ksmm2LybGtNoDkydnNkjpbgtCobJ3pP3STe7mgCP7QaNxRxj",
  "key4": "4hhi5raGWf6PuTC5TnkyDgJYynFjb4YThjNxZ1G3z2WtvMueeEgjKhWS6WfhyD6NoGG3iYD6zcPbhEKTjQibwCoL",
  "key5": "v9vcSTKyDKLPhQBMUfr9bjSyKnKxRzNNxkRiNxXZSe8kYH4wPRLrft3WoEXZa2upTqTXmjrCSMt6kR5yTkqka5K",
  "key6": "5ZsZniqYm5BCwtkBbasE6BBNvMM9FgZqvuUvssyuGbuDPZEvZYxitPm3sTnMRPkf1jQx5Ukw5vCYnimiRMXZRsQj",
  "key7": "5uuAmgAMr6XeCPnNyuZRFpUaWq9hV4kNWAK4UhYowTi7y8Q7itM3ZkT2uDQ8ZNH4du6KvZ36i39PxByzvYCi14D8",
  "key8": "3MQ5GfRTUbSa1ShPHPMFhZPoyT5yWjN37c68fW4UqHFc5KL464XMcZsaNtFtjWQ1Lu5cgp4DaazPP85VuXbKf44w",
  "key9": "2Htw8uodzqLVcGcZZkcigrHWL1WoVwz8zFFRLkfv7aDRvsxv8D4eowwpS59E4ZXWhKqqgVJf8ET32ngTn5ZMjdRY",
  "key10": "2uFKronwKZPYWc4UyxsxFANvKvSCCEgjVFW1GnN4iofHvoeTvr3MqxLhnvHgk7YPUEY2byFRJxBgczAkZ9nT6F24",
  "key11": "3UcfsYisAovLUfgm38XFUnbGroMm9zMKnUytc24FkEpKEgjoGB19RTtxkv3h1pw7qtyftXtek7FcPxqiLU924dS7",
  "key12": "MHfRT23uhspA1tr975GrK4YyGw19mbfXhQxHBFnkgrCciNtpVh3mhMutkzcoBn2dkv5nfamQrTfXbz8VKecDAQY",
  "key13": "5U52FaZRtGpnaxRZGM3URdoAH5xXCZuneUXBQL8tGAB2uAaofknTs8JWWDdb88iUTfUjrQgcESgqqf75feit9Q2Y",
  "key14": "47PCCXhEQHEZBUsC5uoNsWNu2om4QBh1U1LZt1d8jNQxZjZkfRN4XNukxVJhWwdjKUg6s9vt69kPmVtbkuoCoSq1",
  "key15": "TkvkvpVVdsZt4Hmvp9gJCQHcf1t5mvAhMaYQhJtzxJT1EuAZk3JYaKnEaifBVARzRzkF9iy8B2TMpXucXPxoQfz",
  "key16": "4D6e6j951rmBb33HDHPzkQiHrrtiprs68v9qye39KG1j64Jj5MucWdckmLZLQYb4LGhwqbBeL49ELFEsSxfhmqn7",
  "key17": "j4H5hFNNM4prWjSmSyuUeeZPPWuCdUdG8hchR4uXy9DB9CWBSPh4UANyisMCH9mL1bM7ywmQo23NoAb5hGxpgmp",
  "key18": "2JW8KmuUVehNtHoBC3EDMX6pncxWZvghuM66kcvWCoH1Nr5x75LyBnWfwP5Gw8KVummEEUfrVd8yQqTGgFBdgKNW",
  "key19": "4iN3CtbeXWHbNixqv1U8etbgazXathBD5FAPBh4xXbJW7oPer9ioXwFzEubJyTtLyyZa56imhXCdjpNamYLg5gzD",
  "key20": "MFN8ukRcF5VqJCUAxjuvbPeTfvmEMvJrzWqBSYjnVWj11aTRUqCmzCn97aw7iY4ZQec2Y2r1EEr769QuSJ9UduU",
  "key21": "4VYm9zhjdo6nQXWoYP7noCeDCaAwwft7oovrVTxhN8UJwfMdqKs16dCJCbaNDq7WDgZkksfu9h3DjQ1YDRKw61nm",
  "key22": "zNmJrVu7oKUGjBSLyfwGNsJdFH1gsWBFJq5CrTTFtyCnZ7Ayoq5wh6qqRGfRCFkS1GXnk9c36tDEjwVnNfMSV4Q",
  "key23": "ZUUpRDngAhydiBwDZu15SkhvGLCb8tVjAZmvqmCJFTgiDtc7NjkUMDALchvPLQi1V8qKb5HTrRzoEdYJC1Es8zz",
  "key24": "3zuNSNpsYDRG44HDhwyrZcg3bMvpSpZeVthHcT99bGNSTgR9dWuQ1qgFE1r3GSZyUVcMLXgJQjAJSNBANAn9EcDs",
  "key25": "5iiWhwAZAAmvVPtQdLUE8S5Y5nfABfX3oqSC3d8czPFnqFFaqeTsiUH21Ytx5NfyCNMmQXDGr5uqihoWqiHSjcbu",
  "key26": "bJFKuSZtjByKCKa6pMLREXdU2xTRGCzxxhPFUAbdvfjqh474jSmATUi3ofvL55NcmV8XfXneh3amtVGLQcmV2LM",
  "key27": "4rktDCQf9FYtmTA8MsWToaRKE12K55eTc9G3XabZ8NyYdj9VPbX64HqvzznJNVDnNjv6zZXBVFnr6orUzR9zQp53",
  "key28": "3Cu7LeEQFrxryX5HjYLyDsxGjunM1cjsAF2g5Fxichi8pxnqX4WVrnDRdzkJTYoaGKkx5tvyMVeSzkFZQbng36Aw",
  "key29": "4czPoeH2UhtKZJ1WbJUJSmW9XfxX4YHtmtTzTiV5xLuv5bERWmccbju77sfLpfDxXvkvs52AVCwG21mHKdCScwhm"
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
