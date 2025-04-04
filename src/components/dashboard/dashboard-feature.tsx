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
    "3K3cT7be8B2TRz1aW71vaHHcUqzz1ntUkhraNAxAQtH7p7wRpFo11B6PbnqhG7wd9P5JXxhkdH9udt36F7J96a5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vF2Z2tBHZzJ53JikxfCU1HwMa4yuiEcnvNYYRkJJYxM5KDDPG7RYVodVRDpkM94zyUnHttZeuAsQiz13MjFy5fy",
  "key1": "4jp7B8nyEeizNpoQwSYqsDDpb6xnjDuZrPype8DEAsqryhqLedZwyfUQQgscdUZ9j89EfaHTk7KcSEJGrdqpBKax",
  "key2": "t3HHRi1FLQvr3XFs4pbRrRQypTcR9jtSB9pg1AZq6wsXZQYjrDziBbWygGJ8dUMBGsPaztPjKACsoax1kZwJ127",
  "key3": "5FdqKHFSVoeuSBB4eyNXcY2KHt7x3mXGVqrLxos5H6Ljtvh8cQHPzfEjcVQATe7MDuYvgKdBBAikZh37Vh99GHBu",
  "key4": "3wFfkr7UtyANZVBqNDX8XicAP62aosXDmHNnYGg1ToFSH9Knb5S9i3tXxiw9GEfMVX5kTd3BW9wwGAuRghWXA6N4",
  "key5": "4ANMrBJzN6CjcXoxhnkFwvauqRnxnf1paHU4Pa2pNE7Dah2yuae4mc2AP2UB4csJocWcJuuib31wU1bEJ1koynFj",
  "key6": "2y1Aq97mFhScY6octx4vh3bRgn72noY3rFGdVQHcw41B9J1cU7EhvWXjqYrcBhgcoKrxUr4hqVvjtZHweLxAZ268",
  "key7": "3xFUV7P2vzsNyuJbkW6AiZiLrN9ntHByDyVWf5ikUqoFuxHK1jac5pfqFZ5RmDmtAJFNYp4HkBzhcVpHZ8rGi9eG",
  "key8": "2kboJxwV5dh4VqqHU4NZu6nuLrD8ZN7LWHBoaCFdEkW9bev6oYdjTNcZEDJft9dShX8qFJXEkRjyn2hweWbqZZac",
  "key9": "5h1N7fmJWv9wn4xJQD5NDx7TChbLjTRvcHdDtNKZGB2oD3MC9FMtH7faKALWgNk116cUHSZCNJVRT8K8UJzX5PT7",
  "key10": "5WYGSUzGtz24egqfN6GJiAPHucvE6azrpWDAu5hWsMgmGzPJPf6ravFCab1wsgmjN8zf7KnUjURRDTB3V8LKmang",
  "key11": "4MtEdWVXEw67R8FrRNq7CVSoJGEuULebdsTkT7w4ZctyQyhnRQt9W7ESyk2Mzmdy3HMnTUtDnRiPcFU5rtk4SWpz",
  "key12": "3XHo8DdgrCC119y8fS7skH2f35TyynmEvatof2A2gp1w34HgVBvPerF9vbsteDgkzTHcTBUAp5q3r85q1qXPmYdg",
  "key13": "4wpvxExJSH7RnKP3pxPDVA4DAVhkZLMbUCh4PD2ZyQyjURSArP6ZGm4KLRZnXmTAhaKWxecVXGSLgRt9frnfsvBw",
  "key14": "47QAfR1Rmj5h442jX9b3fx5yBX4iwb8VJoETUtUjJzo61WTCfSAcecfshnixiTvxUbAzNZSzrRrKyPyoh6VRiidm",
  "key15": "4Nmx8tBBprUAgaoYAELcBWvhKkdfyd2XvZdwhxjX4swJoMeKXksDGPqnfPaCdznoxqwaaev16pjqrcvuMPz91TUz",
  "key16": "2cCnEqiquMgEUCEcMD1ooLTaNKfGc3G56S9YE9x8eyZF2dosWfEr9ddUAvia9BoB4zWfZzbDpfrrXJFWHJFZVuwy",
  "key17": "56kiwXNZca8Z6611QuFAcaaw8KSaoVtyhev8S9AudPi8Ey1mHaeKytGXvbc2CyQY2dKWKEA6biaCBASb7PJADa6y",
  "key18": "3GgXKKN695JjGqvJvvMdgw14riw22fHL3NoZyEfF3h4zPFa2w1de2hXa2JD9c5SJSfpcpLDaAx3UYuCwkP7udsnj",
  "key19": "2sMpesc9i5v8atzZUSko9ZqPUFiuYXgvLZop25zMNJJZKVxTDYoGfwuhhwbGQ4BJGBx77gDqHrTW8xRAHJUASUHL",
  "key20": "5nKHZ5PovCaPxK6uXpmzJBdYtXq1vVA62FwNDjMHcGhgQtnh7UDkemYTJnqyTce3oCsg8SL3b8e5e48psJfXmWuo",
  "key21": "5LpQ9fQGEfirHerTF8tQsrBhmvQ7SgEEKEFTVhiyGxcrPQmTayLNjmukogNdoUfNwGYxXTqaNUQfXqX77hZ3uLhH",
  "key22": "4wDPWPtbzkiyD2sS7oj2CepvTmiHx76cCwu6nADGznj7v1aKMsM9TEcni1dcwYBmFwZYvYcebpgSyTzYmThCGnAP",
  "key23": "2EpaEXRN1eCvkGiakitrtMa2Pd2yDNQUD4CRdCMQ5jJEPoYVKKxuqpSZ51UDrWeg4TsY3A8TzE4h2m2PRBJmibGc",
  "key24": "5R1FwM3psztLm9ssatWabv8H8e8qmkk275HqYGbYCobtrJHX5r8mvms6WHQFAdM1U67uUyzBYTWPFKU6kuFARHy5"
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
