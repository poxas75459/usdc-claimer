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
    "59xJQSpXtziSpkvhgVJ2UAqB2jWojXiQCHAzbp6tGPYZs5UBYtiZHgoUwfWnUeuCqUGX7SVANUfGTkA8Cz6BV2KF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UeBebts3tLg1M4u3ocQQT5kho3GsGsMUtLLwTpiR2yhn3QCNMSnZprv8Wsj48t98WZPestwiJJmTDDToPHgWrDX",
  "key1": "3AB5eYJpJ4TWdsP6MU37dxtB3FKu4bK4scvFesnpLNcJemNUV7i8kkrCHZjwaZR2HiSBZndG7Wsy3kq1AbN1LSAb",
  "key2": "5dtY88N3wnpNj9VYyFzT46Z7Nm9ZfHHJwQwVJnD2nqgDTqmhTqwtL96F5jgsiGwrRH9SkwGAzhV2TfW9F8e3GLat",
  "key3": "2KH8N4Jh6r48QKEkZ2gHY5tH7UvAcTgt73UoPS7n6EeCoUGG5uNKA6sns6qYrGLKvLmbYYL4RMHKBoVFDK7Hth7e",
  "key4": "62B6qwwsMjcqYRuQesBU8UQFYn4ivkwAcxqBo3wxrdxeJtDKRLMPKS3VFKaU4hkS3JP88sEZRoT7rXAVoZkF5qbt",
  "key5": "3GanwgSPEDww274AoaeeVQRYAwKcpkvpHWT15GNQzojXMBFnxKPwfKVmgx9oZv7q4cebhkJtmUSNgSQ3TLAkJp6n",
  "key6": "2uUX1Sjs8i83bJ6GZ2HaSrCKv6rdGNAQUeyyYHRuFf7rv4zu1RyEhss6a66hFfzGbDG4naGVkDzQHLCALHuB4zUy",
  "key7": "5FxGci8KvHDFTqiUAyBKV1Co4WVma8uofWEZLp7mx5uB6YRgtsjNwdyyfzVxU87j2j8FmRiungYwrbYXZLcwhN63",
  "key8": "47ZxdrMg1W4wMyT4kyDyHjkpAiYN8CtkNbmXkCb1QyFzjV71GF2VhCSBZirrfj2ggy6T8xr5rhKKoRQ3CW5Gx2Gi",
  "key9": "2cE32eE8UL9w6YckoiMaXxquDtHvvQ1dK7Fj7Y9YAbvb1LANo5gUyKNr2XYn9mQQWwaE4k4ehaiJvHWqieknShYJ",
  "key10": "4n4Q4LdDBVGrjm6XLGCNpAtWy1cCx9JEZUPVC6Dud9WaY1epui5LrwQKUgRPe3ritgZFj14jGqbgVci5bz5Ddi2T",
  "key11": "4vxphYK1WDa8SCZHT4pypjURqnN4JHkp8JnfqqstJXxrxtNemWJrXZbr69rtn782dSs8znULwYCgNMp63xcYgpFK",
  "key12": "qobq5TzKXQ8d5F8RLiRetS3xy9XUM258sA9WhkSHdgtRqWF5qXRHnu9h7mXcB221mVnG7SDwkpJ3MYUwhLThdNd",
  "key13": "4druXS6eBui5zUg7vN85omjr4V6uPsTZ56MNvmcMeb1b8iNo7jVzBDv2GNcLNFCk5SEb4cLMHyTzueMoLGVU8DGa",
  "key14": "2BDxhnoJZHNuzAGgvrTQtZcAPS9wesszmzbdVqhjj7NQChG55NMkyK5ihGaB4iikMFMtnQ1DmmAAMLVUtWcJLZxY",
  "key15": "3vmGrM5ZCEmgJpAhxkvDSS7N68ZnyHewvogAcDJiW5YTrfLfkHPkpkPbyVTiqhVV4ApNKyh3j5cn5MDa4XctR7eE",
  "key16": "2TVKUX8RAA5jp1EXJSRevpSg2QfVGbKGdRgSDz63n3TArEqbewpy4jG4XofPVDy7vuRqCwSCNKatRtLnNHJQgPi1",
  "key17": "2mxnQRAnEEfVuz4mqzVJnq9MWjxYoe9qQijFMH42EknTZtjxerH1d23kAQ41LgP4JNUBHrRdfdY12DtV34eP4Bda",
  "key18": "ZftDZw5rieFcBdHzB3q9pFugNjjZ24Utnity4J8kyBH2pxj9oTuZrWBsbqJ8TykqqVqxGHmtW1TmfAceAYyYwH7",
  "key19": "3gNWrCmXATCbLoFUALWLFmNE7YVwtZyN5Yg1uykVEYkovUJfTH6Jw6B9vUyaPZbyzXbBTZgcTNqxsxtFn8nfsirb",
  "key20": "3BcpePHYAUknBZF9EeFDFFiiiUrrzpuCA2TquAxCJfB2Ahp2jLTS7deCUwkFTYku3aH9CCRbLSrmS2LWKnbHpHas",
  "key21": "29N2VkrYL2CaxnpHWKTiVidrRmRE1SdjXndmehdWk4t2LNUXoCMxHTfJVAaUtMesW7q6FTPEiiEZggYBH9vQmcWR",
  "key22": "3kmshGZjs7GRak8qnQBMsW1WM5Y3Hvg9KikkuiZsDFSCyEdi1AJuH5kzM54Zi5Jwq7qynLSwKmjpFn9jSJ5ZjCRg",
  "key23": "2AWkn7i1q4Ap2yY8aDJ3UtMno7gNMEsYCecQoTN8rVJuUsmKooz4YfgAAwisJ8KiUBWpTgksXvt5tev63Wt8DK19",
  "key24": "3rc3obJyYQkGcuz5rTj4vE4bSQey7oeZGA49Nr7qh6ByPujkmuf5AL5vhyq3W4WFHYusB1aGHXKH917XPThYhf4h",
  "key25": "Jm35RKDC6BmbzVtUpUsW411uyfN9jRN64kYWe1G7ypqfG8vnMhg4PYoQqkWCheHULgGuf2emKSnXs5gZMmJ3bws",
  "key26": "m6o7TkFxTqmvCzfH2NxU4oUD7gcErRNWrRBaYHSvmgtaU7FKwiACUmehaqkBeYEU5zHzw4XA9cWwqz3csUgb12T",
  "key27": "5iBc3hjgXqgLtvC8UfLMDLurCBDpDMbHoEjGJSkbq6VzRT3hLFL542Lu2mEjegn8TaDAPQYXr18Qnnu7uZ4r8Nzm",
  "key28": "2GbKv8Kb3c8SjSXG6qSvEoBHf4i9etNpYx5FiF5icsKdYPRpfdBS8Rdx3yLQ926rtEZwFFYUiRCT7EsNnvHstEfk",
  "key29": "612maWmWWwDxxViuKnzmB3mb1BKCYYkWjayjit318qpZyUouTJF6yKRwXQ8EbEQeXqvuL7svv9PtndR73dhwfijz"
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
