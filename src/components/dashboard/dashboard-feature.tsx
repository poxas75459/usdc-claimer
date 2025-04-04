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
    "MHdPAX7V3RB8V8m3R2ByW6258enVrJ3ZboWhQUhbbn7Udmmc6qr4jCQ5HScU8vMzceadLtwM2LsTLR9VbpNjNXU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25wT5xLd2VJC7AeRdohSMusgpbLZaHebBJsPVFg8KkehK3jL1unLD2Ev6Nij6N4HTZR6ZtEtJu64traSiXKwoDML",
  "key1": "36vE66JJAq9zgzwpRztkHCEtUmWKmv8sAnjpg24fsucxrnBSW2KVah9eire8JJeLnGJEvKqnYbTCxviaGFGrrJ2N",
  "key2": "5UYbb22uBKhg1bRqA9oG5X2rHyGEFqdNRbTDoBWpmd8nY7xmUSFmMtZ4qqNCq437UERWss6XgFtcEPCT1c8ZuHXL",
  "key3": "QD5jB3xRrwt3o7QQeVegDoLj6UvTTb1FET9g53nazzV6WxpJvAziaAgBis7Ae3ZptVn99V4NanqJLXzSvmMzpgy",
  "key4": "2h6RjHEPfP9KXguArdrgZjKdi9eYd6XkgC2R3iTfhH3qGRUKoqLynDQMoWQi3M2qUm77LtV7qhz92QjTdysYa8N5",
  "key5": "4jAM2uE5N9zo7uZN326ou78aim9WvLViZAAzuruSMYfEXPWu7UwzEQMPAynVH4esc9xmYwkt56kTqfQfQbhXBQxQ",
  "key6": "4dh8qSPa9viY35XNUzcxT3Q7qUu7SHYyTRbFtn2QKRppQMttV891ga1mx27gs9sYwaZmNf68Wh5jVJgHQNXuPRMR",
  "key7": "2W151mB2crPQH5z9odCAeGA8K4N4NbeYFC3CGL4p7wmbfyEJxxBHmjZBM3FoMddXNZ55kwAjdaMM9wFk7Wq8LB6B",
  "key8": "5FffvDzzPS9AbJK7QMHKLwevbzmnqo19UzW2QFCn3uK1Mdx1XP51CwyyPt2aEXjaFJX4oFDc3EjrY79Bqdbs5f2A",
  "key9": "66yjgJBdtZ5ztt3ctTM9cLzw1vjVjDXhuVYLAsHWYdHp7o22xv3D6B4KhnEtrgegjrAdBDQ3KJb23eBWWogiAAeV",
  "key10": "5QAaaa2FV3negE1aYcdTJrw64uiYmYHHAAuNP4tsPZ463EP7QpfKbbnP7bj27tJWbDPUX9bZsX2JUHVrivRphyCP",
  "key11": "4Tu6M8TbnobaXn9ZLeMAEoYpycnZDbYUmmGHXvJP8gH3rtLzgH2ZrYWuUiVFxCrpshYvzK8eZuJdraFVMKrHemMK",
  "key12": "64f6tyz32M8Vdp2urjHLuHQtnZCVQeM9Ey7CdC7ShENx6xbw8nDZXpGupqiLYoqwMuZegFRWRmefCksDFqnV2qWJ",
  "key13": "4zLVUg3G2kgNVs3QhJv6fmFwZeBkisnMfTaQDMv5zUe9sJ48G8wHKgzmDW8Gs43AN1NQMcsKKfbTsMf3sks4cgSZ",
  "key14": "5q9U1mCPK2bDoyTmuQ1jzUXWgcJwMkDomZtmwFwH8GoiQ4kicBXKubANbo9c76LxMW4oGSnK7ihF6qFfakZYJWJD",
  "key15": "2iTtGXtFJVNKkNbPqwqwyRc7wU8gRFW2GpEghCa2beo1qPVNbRs6PaiMgCopsLiDc3ZigNW67cBEEKcj22NNyJXK",
  "key16": "4AgH1dJZAwS9YEd58B3yoULzGhEBdToC9RtvNqgdfdFNgNNFcCBcafN9K4Pkq1nWSqVyhXpmxcZmb6Z94Emr4HY8",
  "key17": "2DMR3JCwFG9NAYpF59YSF8yTRiXPM5ZwaoDnLnDpuLMtDdVTMWJvVqm57WoMuwT1mZDJgJNJwTpuhR2jxuRgSmad",
  "key18": "3YXJEnrVPj3LtL4oRGsnYMfxTkVwTE3Q2hdwYfa3V7ZiFyqLizYUgXwwaoJZh9PSRv7djuETFWiLngBcR8mw9pmS",
  "key19": "5u8ZKGSAcpcRJmKYh8s5bVsadEhKZr3kTfn7Bpck8fKsx47AfD1faFhKHyBoGFcgWSmZu3BoG7WpQjoa93kbfpqz",
  "key20": "3uNkwh5HWXHfJQ5yiAoNKnT9xVY26KA6o9CM1zUNaTJmfKJh4yVrgo5Ro3z5h5YMPr4vU6HMLfFFnysWmjaWiCPD",
  "key21": "5af6YnY8FTFyWzomcfs1ifNXRYbKuVhQ3FTCiGSB8wqKRuVMHzGiwHGPPsZgtEmUpuy1jumX1NrcQtkqL4HHpHMe",
  "key22": "3qfiMKYk5FuT4Hz1wxdLqWPN4S9yYBT4dybrr9SSjwrC8W5qAnLDhzBgbM6J1rjUVAoothx4viQZBRB9W1yduqZx",
  "key23": "VcKBCeC9vWbQscuiKtPBnMDyD1PmevRRjxbnsNJ5xcZCSu2KqbqWa4KidHUoLyFDGLiPrZFcKf16CbFPQgnzA5B",
  "key24": "4B2DBiQdrLFP3RetmZgnsNGrWzGggFiAXpaeVGLP71eQB8ezurANGA6XMyyVd4uM1fMMBWVjQoKei4GEGA9gbh15",
  "key25": "4TyMdqL8KLGn3MgYm9DGTbPpzy7S1n3bLwgUT1oJCK4UpYCrXnP4wSHgkFBLiXxPKdvXaNnANRBtpPNWw7N8bkex",
  "key26": "38sxKjGXBZY8sqYrHNoACrEMfN1w9EbgycjwBcXiAt2BoGFEcpEgsXLFZRFibtCt7oYwR29cKPH58Ej5qLPF3ddY",
  "key27": "5vbkjba13mUZc1pjB6WbBor9NbH1XMsSoXXpgp6Wnhy1NXtCqjFbRZYtCT9RjFtG7218B3xF5nKxh2kVxmo3gaHK",
  "key28": "4JDiGzzzcyvkWkjB9hiVhGWXpXNZK8qWoooyD584XrWxkygY1AtpZDwERg3txF6CM8egfh3fM26GtKHGb5xM1cbn",
  "key29": "4FuQ6MgWjnfFq1229hWgPEHFzW5Udcnkc9bCTSBzGZ8bypFqyZPbQg24PRQHuYqn3vW56yrJsWcnr9pf9BaSAv38",
  "key30": "DEETYatGr2rjKFaZXbARM3WP29tBK8EHQDsJaBbJDEk9BvprgwPd8atjETp7dfJN4tDuMPVWpNawqsfUx8akxJ9"
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
