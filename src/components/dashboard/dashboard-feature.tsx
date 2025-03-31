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
    "qrkjQ9RKnCMa9TqDBukiHWTmPbkhvxhaiJXj8YnxqsrARsd3VX9a2PCAXEc3YNCy7E2dpNRbPaoGUk8h4fmNFQE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BzAA3ypijbcugaWpj8MatadfUV87xhvPKZsZRzvzuyfCKtHNikDpSw74jqp2cUGb1asXdV7jA8JAeRvpPD6oYWu",
  "key1": "66XF3Jmr6GRd1jrjnbDywwZYSauDhatUR1s3eKUS3kPkRjQ7i5Af1od1EwPX3NWrDCueSaQSWTSUKsQmpKiDCYLj",
  "key2": "5D8HBAwtH1idNUJQKD6a81rkzp9r2dr2aZ1jdgWKz3r42PYywpMhUezYe6hAhMZDfAvV9cfBY7P6BgJ62BQi6eLc",
  "key3": "bEKQqndUCmDmJaFygaXifkzaRPnbFedk4nAnHz8SbtTiYPn8RAzakJhJAnDKVLdoijkw5zVLZq38gAZtqFbYkqX",
  "key4": "2QgenR8cNYsV7V7W8ky3AgjuMMYmtbAf7PCSTPLmKkFBGraBp4oKnrGqnMgMqkhfKLohd7rrdwKnEi3Q1drGH73J",
  "key5": "2j2QEN4rqswTbV3tWfUt7SDAYYG2h1ShZ8S1Zp32W6poiSfceiDkWzKrHGRDxaanwGxvMio9WcaVhbVwRVWstXkw",
  "key6": "2eQwLkyopvM19mZXx13cRqGXcNdsD1QLDUvt9VS3HMT7euGo8ZHN8SfHfRckuekc4CeHCzxAQbG6u9M4djFKKNHf",
  "key7": "3ynRzdgZqRY1efre3LQJxqqczJuQFUu5dLr3uThwKk7DLVF55Kz456jPY6TBe8gSLnxCyJVKXHLNtkMifxAKrayS",
  "key8": "St2HNXgzViBB6Dvx8dYLdUuqWqGRioBzHUYtSmnhXNmCzduEtH9Fu7hJLDu1MVNyaHzVgnY1cJTaWqUC2Sbua2c",
  "key9": "2Ei3gyQQD1pdTmwr5CbYUWFwpksvezA6myBVhHJJXMBUAJrZremyUEti2mvZECosHsFB55NBcvuXg3FyZYc2VhXx",
  "key10": "3tcNLKYEqFQ8Vq1bw6eeCnDZ78noVYcaaDXbJYNEad1s7jmewiyqAGQtrvQXoka6P97dKfuRvfuaoiu9bBywsKe3",
  "key11": "2qhvk46qy4qcUSc8sRhxK26X2ypz7Fe3iG6kc6Br8yomf6gzWkqnmmTKfRFwSZkuqmPLdXFBZBoRnoFiNk1hX7Pd",
  "key12": "2L6wZWeaGbdgSCAtphFKd5XqzDRfa5MiMDiYXDVkUWAznz87zomfhyJQr2nbCD5tuZszSBzZMCBjYH7DYyMEwsbN",
  "key13": "339Wuchr7k6VzQ5qGK84GffQxbVWumaZ9kbayXNf8tVJqiJDRoEFErDCy39Jo9XKm6S4cCeTSnYCYTCJqNRVXQMa",
  "key14": "5xaEq9pTCYPv6Hea3BMTuaUXp2y2krD9qKxfwyySVeqhxHvoKzMD5aEJPLGVaVmi1wFFfC7isP2RM3gxcWDFT6zG",
  "key15": "3p3JFsyrejC8hNLPJbEpFCPFoDcjtvnQ27ALUvFGGQd6gK1dSJRySwjW26aFkUtNnuaA7Zuqz5FgDUyDVXRn88qN",
  "key16": "4nUzYxAF8Xy57mbrsVoR7SaTrZ2UH43THUJjo6repdtSVus2sz59aHBWMXx1t5AparJt9oh4pmAE2fRgEdHKphQs",
  "key17": "2beTcFiR3tVN2B47pzgGM9qVaFFdQEy1CF1Y4U9814sjZm7yKPVBbhfqGChkDjnRxWHsQdtMPyeX6v9s45YXNzDm",
  "key18": "4eWukh2CmZUCoGcsyqXhJRzMgdFUBPyxU4bdaeTF1UiVE7biiAmSHxnHPn91m6Pg9zTbGjxF295EfNT87B2W3Usn",
  "key19": "2TmT5SRR4pH6eEuX5om8wL6KnmnoupWnwfioaL24BrodXTpKp4YahM7rHBiBR56VXq89gUZkT5dPBDCjj4hTHfdD",
  "key20": "2LDic87TTNDfq1VX2Qk18LDrc81rPupV9ag52JaCi6ejd7VXKQMjUEEYQuSbtLG4KtWegP8ayYw1V57eQe3kb658",
  "key21": "ciCBCdbCCpcrTWs8E5GB5BLgPoPZBwgqqAWMmEknBNruf5ugQWbeVjPQuTstMEccSkpDArbbSdwrq2pKv6rRA4h",
  "key22": "2w9XnZ5H8S1BNkWvYeYcdRyLcXhBYPKiyB6C7GPn5PWxMoghtuGsA28UUd9VRLoDbTQ6QtFpfKdmetBTjxXEe7CC",
  "key23": "52Xu5mjBFqbRuguoo55Xh3jGU6yfrFZRvXDnXfTi5WKZ5uxH8rEYeP3LwfE48faRSUb594GstbwCYaFf7CewYFA5",
  "key24": "4wafz5ZjpWbca2rTQPfHfRXuLRMXuJQRh1ZV3SN9JDQ65ktGxUA3ZeqTeHsZKVzebdMeC5dvaBizAxEubn8pY2gD",
  "key25": "42FphcCb1k5WVhmJtUDoM4S1ie4WVbTdKBSW4gbt8ucWspRGwzqFBz5t1soga8PzF4UNz8hTkAvJcVuNvbf7UWbW",
  "key26": "2V7wPccxGknNE45sAtjG8JVvDnXUyHsdp6uAopyGCrtNEAFpVPosDmxaRm1cn6NF3Er5BHc7t7sd3TP4y4rja56Q",
  "key27": "4L7BZUSgBBUoKVgbBw6ZhDx4AJnGsR46pPHzFLkUwfhzQ6pqtNygS9DxSV2GTqAArAQtx8F6Q7zQoQmZ7oytT7Wc",
  "key28": "3mSpjp8McERetrZzX3wbeT5MShuqZ15f4H4eYwt3F674g3rhZKfdFx9BzigjBMYPfuYZtotMGddskBFnbBHZoXWJ",
  "key29": "5kZ6CsXQcZEH1orJ1dNGY2MRWR5Zotq2PKbx4VTDZT3EWJLkDHWhvx8dEmGFm9TC6bSVBM57FH1BfnqrotCVPnK8",
  "key30": "5Kyb5d3AwA2VDCuDicwgugjxfHJCCUg6wk1xHk1Sy3LZJ7REuK6pLZMfUAhc3B2UcWDDbTCZqnek3pAJXAY1XpRA",
  "key31": "2JKzfuFfXmxoVW9PtqDzPB9SKnp6fv4TCjg7uEfqKZMU64wyYjAuuqhKfuCd2eZ3HEWHKU5Cgxwhqb4ivMiYCbWp",
  "key32": "2qi9R7EEC9CedNJ4ur9Us8tjgKbYUHGfhhhugNmmwmVxonpXpXJwEV3LFAag8xJDnVP86zgruGAyn4J2Uda7XtLW",
  "key33": "4YCFoUNS9mkLGzoZxBdrg7eh3n9NTmo2ZVuV3tNg4ALX2GGUquFLk8Xwhvcgen47mG2V1JWyfahM5SPMn25X513X",
  "key34": "5RHJmXpJ3BcVQTmghY9syduU4L5FfXDr5uZSVv2yqFdWvRvSfksmd4m1Mzg1ELyzN2LuwA7Kwoch8BReZF6EwBVN",
  "key35": "4v1QctzHZmQuYyNBnyYGesEzEMsLeJhWVjtMST3sPpnCk8L7ezBvfq8aun8WP6kWXb2mmgzvyp5kDgP4tEKZ9gLY",
  "key36": "2mmkYMQDYyvbMjm8fHJiASf4qSkv9stapfHMsRvpCYApn69T5MDDDMwdHJ1FuKDDcKSViL6VqkDE9GXfy15RgCXa",
  "key37": "4PKpMg1vVfNXe8skqKU9Xp1VjAXK4Ju7Q7LQgrFpSSFJ7PWuZShd1E5zUtYVXwaYWYshHLXiYd1qsDMbxw84Fu5T",
  "key38": "W2rSVWavKw8q5y3BXVk4zckbMJkcp4B14BxmRoztn2rzrcA4epzq1kkSC9n8ZuGjxH7HHrQu89qtE5Fvmpsu13o"
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
