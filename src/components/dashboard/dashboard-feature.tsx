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
    "4r1UfQbmvU9WLJXN9h2FeAYYeKd5vNETwyLizssM71T3mdNfzGUPMamawgLsApyxdoEDakQdwsTnzvBkky1cAVbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zosgZZCCLxx7LR2XDBp15ofZHkF5WpCZFB4exw5V48hkkuD9cwPC8Bp26woH8DBAGdjpGwZSTDVYbCJnMnnUPWk",
  "key1": "4YS2WX6xpqS2QMPcpxQsspVmbqjgJJnBweFVTbdMx5Y42E7QwjZgecMuckhUwttHXfTZCGq5Ukto5CiNDMsmV8b5",
  "key2": "5kf3rZkj8HYx2KH8KNhcLH1gNBT299U9KC3heDEeKSy6wAEj114sdy7L64YNjB4Wa74zysmH8SXu8bRdds2GUibD",
  "key3": "2K3Fq7DsRexpFrqyZfWfTTSnt6VDQHZeG54NF6CkQueb7RzHedko4DDi9xMk4riXsdSsSxmkcYzJ23Bra6BgApzi",
  "key4": "5hqzX9eBLbyoJjvhKpdbvHsyCwY4a6axueiXT4A5ry1ZLPYG7M48McgUtjsVo24SuhqV8QtLY4Lm37Z2U8cG1QRx",
  "key5": "3FitkEWSjYhgY49q8QLFffM7PwPN5qbn5gJ6zdT5F3KL2RtJewiu4GFcmfSxpUcxsbNayd5Kx2ht5n1JVBoBWkSt",
  "key6": "h1rXGbSZjwLG3iXzXZAHSPtCaL5dKom8i8CwULkWRAxF5rgB5C4SQMadZwsFSXyPMBHZJvX5bkpj2P14AgqNoR1",
  "key7": "51zvcnFedne1mSUYt51nmk6CHw6UFydiCjfWH3JCzHSqodYrZmu4uwrWm3PPcxef2cdkp5BAfjDbpizp8uhPNLVL",
  "key8": "4nHvF4mZEgG4FtK2notBFTuUaA2YUARKcbLNSLTsVYLA74Dx8b5xHrbDxGHpQqsy8hLzP67MyZnrqd1WPnBVCHuR",
  "key9": "268G8HQ1pT36jasZuXyk8tjYxUfb351yLsebPgkPAYBbSvBJ2hmknVyJuMmdADSeY6sV5wMvvzDtTDzBd42SpFUu",
  "key10": "At3TrBAayndNGKvGMMbCuaeUAsFtrReQaX8jkVx8ZLTt4v1oQ1YWdu52xomRZNR8EcCij5maxAnS9dCGmUznr31",
  "key11": "2DuRPXj2Y8u15GXPU1f4zKQwEkrodnx8JEWWbJ4fhUBayePesnzPCJvs3kw9b36duzJTgvCDUipbBwmN12QJHocx",
  "key12": "4g6kjXg19GoTGQkXWsQKQ42cnReJbRjXBKF8DmsRK9njZnHQseCW9c8fip221e6qj8ceSX7bSuGWKb1sWLZBTJU8",
  "key13": "28etdMXCjDVuJ7fqpRQZApqqEK48kz1NXgC2uDwNF9R5oWE2KmEoPhiyrif6qxivisck596NJ2bejgoXPUEARxJ2",
  "key14": "4BoaBvv2gF8pjUMRG9cyT6SH79sTz6a2aUSMLyhYbuXoZDRWgUzicQUVExB5rDgDgz57qKC3K4q9SxXbeUJNvZe4",
  "key15": "4Ccgscatj6m8pMWyFJ9b8ciuVpzkfpaDsHvfFyezcVbmH9vjQFAXQmbKMeY8TSiY7TNNdV8JGxz32q74GSpSBqbM",
  "key16": "adH5AeUWtZWyH6wqync2ekZTPUcicr37vky4wneQJXn81VAyaMkFEy7nskTQ6A8kPsy68nACEicDGuSrJjbA78u",
  "key17": "5JbPhAKoAeFrHbNogz6ZjD4fUV9NEA6PiJ23R18ndHfEb2KoYZLUuUnFziXH6vU5q1jcygWoYnSgZvhttzgjVwFN",
  "key18": "4W6y5xqNW5t9Sfxsj1CgHgyisza1h814es3qz6QzeF3jNnWnSB8h532UUAiv1FURDfR2ifgUAdLJvJ6zS8stcrA9",
  "key19": "4AKFeoWKdCEMVjSxCu1piZCQhvTj4XGMmrSEuk3npfBSiCo62ketQCoN8eZeP1ZzkoTQVvkFkfJQnbqrG5bJqDvN",
  "key20": "3ceJWpbWHQcPBbnoFQ99m41hxYgbxRwado7bk9HvKLTKyNoSJ52vbec7qjRPRAMWngTtNXD9g4CiYAqCoSuZRTkE",
  "key21": "3GsrbmUZCZpcdjT4wRxKHHXnwkknX2VAEG229BTtN4rsXD9zAnoA9vVYhyoC8zM6mqmUauPRxG8ozHh73GChpoav",
  "key22": "3h8QcE6x7YhJLEH6jWzN6AHB2PKLTf1Lr2AYUDrnp9UL1rrwDCDM4RDdCKYEfzV7K6ECoexF7kGRr6YfemwXRhhz",
  "key23": "2dMesXXhyHhgs8cjdXwdUuE3PkK3h5vgzy8beWWpDbayfo1kEjtjJi3YJJ1cR57CncshV7YohRhazxMuGQ34APXS",
  "key24": "5N3GFazs8HrsohhBouL6vESS3xjMMX1SRNxCx62SvxMBTgiYe52EdsZaXRhVfegUYtATiVU4io1ZGhjCEDoU7mVG",
  "key25": "TrzVyPsakdqty8kDz4Xx2wSZ6ABZFfBL4tUQS45uFY9LkfEzU2jx1KjuTHn37mVmLYaTHFKR117nbW9yNUpbASw",
  "key26": "5DmbEiBzBt5o6Rzij4GUKAo4uKpYWFzRX1heNUoFuQc8TKZJe2TgFkJDFtG92fUnWLF5wxHzzFPngKjJwrtVrMGK",
  "key27": "3sHDJ7E5CyPZZUe3hEoEJrbsrxSxXHges8Q93tZxw7i678ipJi9oapTQYGzDRBCYD92GmKhaBBxGKbrzsgmJyw5G",
  "key28": "xJbo91LNdAfsGLMyYTCz2Pc8NSj1NwkkJXehKnxmyGVTjd87xEVnYQzecszMUFhHox5KWgmVvZJuJo8Tnfw5yvQ",
  "key29": "2HSz6S1Y9Fj3Rj5foQtQUMAAxjGZ9BaaE4QY4Tc4psdNLHRsG7mJeGp4zNZPoQrrVNTt5YGWdc7TfyN5VBkd54uA"
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
