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
    "5RdkqGjq2YPFWYjkhDYPzjxWG16LTmhum8sSXGWZ5j1jjE1oe5crDdgkJo6is51s9Nk56M1KhNM95PBc8gdFc4MX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26gTvNxG24Hd1GnZ12uzqcqp87jAfaxQ9qDv7YdEzPRQLkdo3jCcxwPEfLwUpi1hzBEhkuXKooCxU2ApqaDq1M68",
  "key1": "4XGLS1J462VEXmT7tLnpc8yfEqhePfqm5ec1qiSw5kFk5fCFgD6xUN15emA2eyYSikBsHBwceAxux9c6uSugt2ex",
  "key2": "3fRXWWE3d8yWGsWbQCvUUUgmr9DgjDYG8oYY8xK4aKfH9WGdEXmdmrvbJn8jM5JqQ8feuurKeJTCJAcu4YqEQKXs",
  "key3": "jxyzWwo77pda71y9L7CoxyF1XYLUVD2RzQHYzZQMcgTHuU7y5VDzbdsEkggPJVun2ByzvJc2YpjftaK9gRq1Hvm",
  "key4": "3FrtMuhmL6X1etVoBRuyNcLHmD3qfpLSxhL5WdKy5CVT4Q89ZBPjXcJTGDcRdFJMi2jDb1Y4aX3FHvhBuiTemMNd",
  "key5": "4s7PaEMrEUD2LH2NgazyAiknwP22Cjrv1q8P69nrN6EUXQjZ3a1YN1FZDmUoNuwQf74t1PwhM3Yuc1jQFR53mgZZ",
  "key6": "QaqyFv4RaAzBguR2zy8Dsv8uQfwuXoQgGK8UA6Nq47aq9Dtp5DAP9izKyR8rpLhuknKqj7PVqtSS1t1ffNr4enr",
  "key7": "okxkCUu36QeaiACHxZLX5H8wtXAjPbLTbLbkrTK3YQe14qk6Rvao7AmqVrKdQwzfMPyJdEa3gK3UokuGRDYXM7v",
  "key8": "3hKPLvrd6j1H8P5JuafbHCWHz7ip5ibicseMXMGiNDSeTwYttwJMG8XGx26AgqJYCYY1mDtyKFntUzW9XUBjynwV",
  "key9": "5DGSPMyRygMixpm4THcAPj38zQzBEZwsdtAYRAE1vos9B1rd5zDXc5d5ezSt6qSYTF3FZfxG8qxvRCvgB772FHs5",
  "key10": "4uBJRJZbrhhPRjFPpFUTAgb4D29WRvKdHtmFtXz7T3wg3jnEqFDxmDTkpZzkJpztzid7yLhmZwP6CJK5nyJ7PJXz",
  "key11": "5fCaVea66WWswz8dagBcNAW9S76H5MzFJCy38tQdAYzqLQuxdn74bGskHvAFawiSW7oT7qytpdD55eGkfQizm5No",
  "key12": "36A7UQjCtpCqfaAjnkreLWx3yb7mjqZ1WrjCQ7xgbeFZvNfdqRCZ3EbbrfiJXfpNM1yP6Bbm1N8HvoeZzYMJGi2W",
  "key13": "4xPt8MK4Jbkw6D8H97GtvRWWtFx4ZxPsvmartgsfoDnNT2wzLtjxYfzUnHdnYfyyz47HUy3Din3uanQgTQgYzYFk",
  "key14": "5o5YiLaku6aKdRfXKKeUdZ6q43zLBc2gj4g3wjFsqMKc9nk4oYK6kypZw6UpXHtjocWzSFbMGrJkMy7WVFjoK4eQ",
  "key15": "3D3hofesQhWWMUWWsBVFYhyCTdiekHqoR3GzbNLECKUMiWHeD6X7WzQZ4k2ZtvoK63zQsKTwwBTquRfiTHncxTc",
  "key16": "3mttyikEMmYu7s7mrrf5JBzYWLQSn4CaNPzwqXbEHGqijeJHuriiGj8S8bWxcboMGS881fx4Swy289YLM2Xg9aZK",
  "key17": "3N74qG9dmc43MqwTGQNwVVKd1gdcmZZAqHKDD1NHP3Gi8HbyJRZL86XduAUMczefRZXD5hjYP7npynXG3SPM63oK",
  "key18": "2PmYyoAdGQ6zEEA5RzS7SRBbW6Vqs1SWbjfBj5dBgrrPxPn6W3bq9nBBZ4Rji15aD1pkUcrzrfyi7yQgZtcB6aa",
  "key19": "5YNURw1wBWDd1Y395Z4L4H32mNhnbBQ4wjYJDpWKcmZcDg3nswhZNWz9HkGdL4TzHTgznTGYErND9XhCvGaQFLqV",
  "key20": "536Ct31ncmrVpPBp2e6qKNe1MQmCGsEL3nuXSvJrt2gUk4etnvcLscdC28P3RJ1PHXyWyqQe94W5M3ZHUwyubBhW",
  "key21": "4DAoQq7B4RXoBSy6fheChc3DwCrQ3FWzrjqykF7cHtvzNTfFwMFA9TgHZnEJAdyoN6kGFrspj5UeZvq75YkEzcYL",
  "key22": "33FqCKGuggzQgxhM17f1SoBDnQ82zmahaSFwFrskL614KAVXiYVrysySQzDafatzNma8HS3R6QbxLVe4zmPKfQ74",
  "key23": "47ewVfdvbyfFruBsjU3vKsv8hZcNBr7Fq6hWytYMPFSH6QJq1PEtw7cYCYeTWH8wgy2SEHR7RSHqhFjxqR3RvkEz",
  "key24": "3i3BNyQ4EuRnGCj1Gpvsx3ZxBGktTkdVnMFr351zf58dHzU9EBXLnGZ3LHPtMbXH3o8fa135oWfbMfNJLuaKUEeY",
  "key25": "33SWRWC2r9hqqCmXFGkdYnqoNsTNQn3nLjUE48mzCxu48yuNH3R5LW7Zn6HTdeJzVcZfBrT9JSv9iezdmTdxZoiU"
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
