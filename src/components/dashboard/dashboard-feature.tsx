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
    "559RcCoidBhj4cGx53JmniXnR6sExn3LUzZka8McU6u9y5eQMucftgTwBifxydSZ1i1ksfV7TRBhCEbQBMpR3r1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x4yjW9YNz1Ca9EJhKBQaAon7JRpTKb2TVGamdYeCgrZJRUcKqrJfgLxgpj5KAwQ8FpNde4X4YQVQVy9tNbnC3hp",
  "key1": "5gowJnGDRZyNXEzK5WtWRxr29fMyLdJGUjZ7u74sJSsqUXscHK41BxbzhmwdGGQeoUXxaEfvEnWExJHM8FHG3HHk",
  "key2": "5KbtXc78h3vZiRr8Rpeuudx7p1sd6H8XUuSJf4MwDW7rbDCgS79BquV9k4t46ey2XgVU3wFtvfyBhqjzwMLfUCNB",
  "key3": "9TxkyVSB9z9q1EY17J4Y6wuzhrZVvJqcvA7RZfb4nF38BqWKg2bE5q84REYjizim5GH6UcSwF9ixqMYkL9Ld28t",
  "key4": "5ubRZdHkSp9qfu2u2cnYNiZTizEUad2jhxTRoTptpwCcKdqmN8SDqNfST1vKJwEZC4xmPya4DTaziTPYK8bC4a5k",
  "key5": "5WPaSQsk6rvX3rreqCsPbdtrxavAV7w9qwN3N4Lywu8WxVgMERqZnGqUHCuW92Pzo2sDhUnbmG8vnadgv892WmmU",
  "key6": "4B8UDwMAhgmeGBsB6kaxxB4KX7xgF897MVNz3q9iPKBEJSMgYEce8pR2io9ckWGk9C4Fnakv7EWJPkQ3cEwoLh2G",
  "key7": "VmgGjEAHScDVUrWTeBJsTzpmJigmDqaZ645iKg61HkBAD52Pqv9Fyru4hyEEq8VRxhXcm5nw2dru4NPgZnu4vJ8",
  "key8": "39GCxnvHrNXURJYGy6XWVhGst3wz4B4D1r6XKmEv97vvPDQ9ssT9b4utKRxnL34fEJx6UvpvVsoV1oAzfHq9hPZx",
  "key9": "zQpofACruQ6vZEp8UQ1CTepCjvT5VcpH9PzDNQS3Mdvbo4uWdQQ9eHPC5KqG6Dct99dADU4jzFs1nqsSJ2x7pAv",
  "key10": "3wz9cK6eGFmXDeGf9J7LmGbsEhcj7N97XZMBkdUsxxUJ7Bo5PuavunmbcfKD7CVJHRGGeXkwwGuaqH6bquLL6wWY",
  "key11": "3iVR7hu6KXodXS7QhoUNN9Z3RXXyMdVyq5hiQxcvJAqyAZf9TdYy2bR3Tm59LB91ixD9pJWxZ152z2tRBv115Tp7",
  "key12": "2Rem2WVNpV9Rq9HVQGZvwvdBTUKNyeRU2wjq6yj6wigk64PURSHspv2apJGR54UyQwayYnjiCu6bPirZeCokxciA",
  "key13": "sF78Gyb6Uq1EkoUHmEcAcJYGD1LT5y87Zr6G7ToP8GKj5eujkrTcXWSbPEGLM6L6hKCjDNTVAzGMutXf9y9bKT3",
  "key14": "3XhA3o53GJYp2DZCaP5can2cq8mEz2W9xnCQt86bx7L4BVYHY9Emt8mHEwJ2Kvdueb83XRsD6VdWscQTfUriy5U7",
  "key15": "2kUc5MAXhWayKt4y3yeJEiuy7LQpDLuQhqi7fa8XtSB4FmZyoJaqhqkizXCq1ZJ7Cy6UHXuFkXrRgmP6d9x4Xs1H",
  "key16": "3yjbi8ywMXe71RY2NyTNp9qKYz9ESZ2D8Fcr7iZ7m6jUZ9iDgkUa3FBX731NHJBQdcxE1ZKW9NeY2XRdDDg8KU56",
  "key17": "4iYhT8rZh4kr2hi5Uqnowp3FdqmSgRgJcWhowW13N6c5azktTMCQYbm3Db3FMDZyaoj1xkfiWqxZEMFToNp1sk3G",
  "key18": "2pH1zELresKLCc9QKyVzWjXsHVYZUEkbo6L3RSiBPao8gTM5MwLvYZc8GeKuePNjCHxRiUnrxqVLAo9xbf4PvCBQ",
  "key19": "4fWqbEWgcZgUQniSWFmUXxTsatCdwBWvSNAYNHkPiceFQKeFqkwVK3kqSTgHDwCVvNDmqkCYP1mbPVcfid7SX14Z",
  "key20": "39RHiSLz21Kper3zwe4ZfbWUmXx4BxGi2rRePYJEVXZLhiUDSrHMTWMy2oKnHryAAemde4g4yvP6nBaUyB8onA9k",
  "key21": "5QRJzSZn7fjjzg76rTQnW3t19FFjREzFzGYranQ285uv4zzsyjud4GdzpwRdrWPJ8QhaTuAwKwSdBTbLxCVWT1uf",
  "key22": "GQ3FzMpJpbodu8JaJRq7wMDtdniY9oFHg2ZWWrGftT1XQFFdcwy7MbCHcEXQHoS3n12S881T8QsVLwwCZjgAmei",
  "key23": "4t9caqynx3dcbMM5kKuxzsnnx4kXZdspQZHAzW7xUPpHH6BkMetWai28gbDFnJABTHXTM6YyMgesKzjTkEybzm7K",
  "key24": "5DFhvYj62HPwibJop8rCtimug4Wb9wGt1tPWWQdS7upQibvREvfv1fkneRKSTXq6WJzSweanwL4VbTsWMwxXK4Ge",
  "key25": "5uCYEPqAEQCfMJJdRDrLiQD9jBFqEJLRr9HZRz3zTQdGn1W8MUBGwxj7of5DUbHsoMQzkLVwzwM8SAnTM1ySxJLV",
  "key26": "4cWqGmaKpvgzj3QGCT5p4kLAeyRdWGtaqJDW8eXLFfhNiZnwzg1KnWb6SAiWPP4WprMsopEWbLrUMe7JJWJ2YvrK",
  "key27": "2RKarjZcntJuHgww9w6SVShKGZfay2piG9vcBd1Rk4V6jwHswLspfXmsJTvctDmFg1HpTAcovRwQWZqR6d3wyESs"
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
