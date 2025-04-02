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
    "2s9MdHAvbea8EZgw42CTohgd7PAoh4ffjuKqkxJmUCwoK4ZN9RpP7cGRkJUcshjpg49jS7qVBpN2VpM5K7KHeAJH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yqyhQBZ5hW2xpB5gvrrQcZqkE276QRVzR56aWee531GfSfe4Y4hH7mr2iRif2B4V1PbLBTWHkquviLnSronb4eB",
  "key1": "3HLmKRuiHnSzHNejTPF4tFPyi4UQ5NCkCww3RNUFUBYefyj8rsYaXxS2mdQ6DUuJRms2cKgoZcEKeuczzAHGsfFh",
  "key2": "3GwoSyvo17is1odPj8wGPtU1Qkkh6yTNxduZfS4WosCRVRq3ubzvxep29Khmgho8mBbWZjWo82x9Q1ppCvZwLqhT",
  "key3": "3p94zJ3yjqK34juLsyL3rs8rMQZc8S1wiz7StqgtJ2mzeoWtfp7wzbYcyqQaXkzHqvDGreHTKmermigTikZ6Rn7a",
  "key4": "4P4nYZBL7F2pLVaavCnrcsBcDVy1WvwRWsQFzqcqrgVnBcdsMKLmCuespq2NsbWgUkrMUme3HvXD6x9f6wukLnz4",
  "key5": "59UKSfWJS41hNiEypXtGo7w3ZWuaSgBd3iZa3jHUQVjUbRZPDhXwi6jAkLg9Ssht9BYLi6wospH8VTjo5k7t5TaB",
  "key6": "2LuMNQSobXcVpU6hZJ2rUvc3YxH6RoWhPVyGuhGaDKHvMcsFZWg1U2d6TkD6GwdFYB5MY2oZcZ2fNtSmdjE6mQ8v",
  "key7": "5GxQNZ2hvdbQUq7m3c6pvQEbTZ48psuT93sK8VFmXC3JEbAmZaxf7ztXW2EwvybgYViUYnLKfF8ar25zWhRK73XZ",
  "key8": "4W1gr23tiY8Xvx1M3ovFnjjQmc2wBMumeWa5JoUc5FMmZ41SczrMAtUX8GZoKJX7hRx4M9nFki4qaWfbTeaEdJHz",
  "key9": "5TVQP5Rdf4JQHmzP5TjU5BTJLjk3PeEZDYGBbsDiLHwGMJYuBJqx91XTWtMLYquuGDM3QhRHtTfhadYDpxtkFman",
  "key10": "2tc6kH4yVxF7kR4X3GHP7cjYSsCgVyewaoxKgwL8N5qVQkvsTZiNycaSqA8f7HtxLdY9bYGMq4HeRh9VTpiZVjsz",
  "key11": "2bht9DMcQLxjDADKw953GfJ9TQQFbtohaaKajBSpFMwt8N58KV2qrGuNdFFsVZefqVzkAzWL1dA2fXSDaJVu6PUT",
  "key12": "2ZLjvkrnn4YhTTu1y6ufJrbe6wLhJ3arDTX8DXgALvgwqiErzpXQ4XLTq1d6Y1jRYEUgnMmKtRnBdkJ5sg6FmnHB",
  "key13": "3QxfAZ9exMyNXHNmmj1DE9sT1KiiajvveJpANGzff6UybesTqg3ypdDyRj3GXyLrhc723X1NynKQ9fSrrxds23ov",
  "key14": "22YSEmgqYPPzbJqK171kqD1su1PtyJNELd2srsuXvER7EDjnKhEieJaAMV9wvEbw3jSaWMxrkTQ4yyJm5eQY8CiU",
  "key15": "4BjA1xHPBNx9kNYyKenJUKdm6GBnAkpd7BBLH5BxabMWcEQHDmL5GqSykzFd95pL5N5soY81ESoZUMTkgHf2Tpx1",
  "key16": "2ouY9LCx9TmkmZuupUNdmzUBfnHjWSNt2joG5dXs2Tj3svwXr8E3AiXrVBBoHV5mnq5FiWGb83VyrE4Qravj8WmB",
  "key17": "4m2TGBXJibngQ9fXVV3wFkMXwQbvS8jq9KDaTzkeCHmgvB37XZJt8n4ZQgL73Gry93WfdHR3CZxgTu2fmVLCdd1d",
  "key18": "5DN9jLnm2M8gwa3641JuKAt8rJ29RwMni5pYQjCs3d97JCwhMm1cj9gR2UsQ5KCEHZeUru2XVCDcJTATG3Fyz9KV",
  "key19": "4TWG3oUByEED57EdDM3LU3Csf99riFFjHmGgZhFjbPvtHA3HTiQyUpFQ1874W92s5tfA6S4hLP9vajESwcdokyVG",
  "key20": "4LVTg3gEvZKJTjciSRRNPn9xUChnxv2rxXTVQ4t946snZVcUL3SNMmNtQ5RM8sE7Kn8qVpkHMBkjHFu62LXqKjjz",
  "key21": "4aGh7ZGJNRvMc8qJUQaMFRpfQdL7vzox3aFas7Ka5hR1rNGT7KGFAvZQApoTrmfWkqNkZHjNALFbHTCWnKGVLVn9",
  "key22": "5CREcUVxK6DioVYYfufofoGKE9xsRR7GWAqwVocCCyMHNdFpnkbp3AiEKWf8AtcK2y1LcNsuM5iX6WZTnHYd8ihB",
  "key23": "63LNcHv6MkbvTA15i1oRx9csrVWkre5aKjTc2uUJzUZRC2DEeVt3XZYY2ExSuc5Go2sCKwEf71kyYaWFrffd2gh7",
  "key24": "54EYoAFvAoZ34EoMXcW3Xo7BCdJLD5Y8XrwzUvjRyBKjDokLuVBUux1ZdYcfSDeWh4qULgVzDxHdZfEwqND5k8sx",
  "key25": "32dEwvQBr8X9AKTvNmG5f3NwF8r1SsNNfXVZB3gsuTXJVBXYRTeihoXvd7trGZp2Kya3K5oCRQgXvG1Pn5cESBku",
  "key26": "5o579NTfzN8iAwWv9kHcvW1LrRzDHJFZrfWQGgTFtSyn7jrKrexw1yXXFmHs6ZZZp2JPAuZQuj34KxF4UWQz27dQ",
  "key27": "2M2LDmVw8iE3ZnASocgnNw312UhFGCzqWKjjyENMxpSgvVRfGen7tohsmLit7eErV9hHYZWtfRcDt5MUnzyHtgYs",
  "key28": "21CvdStGE3ipAW2uFjCPaLdJu9uVyh13Mtpb1LQAuvPEFoh2J2yUaSbXHS74Jw1ZJYc5Rn6wnrKJhCZsmhxaXQho",
  "key29": "2eZZ5KVaeWxHdVsAkY4PRMXTicPe7h7Gb5pNEtz4Dvo2yZkbz154qFJNz7mNhEx4g29nkxijb3R4z3XXBmTx79CL",
  "key30": "S8q9Vo84j7SjLA9S7hkLiUcwEoasfw3L797NQ4uhfNAuhpBQXBBnnoD22JJvw12EBYcpT8X2oS7k9mrEkrsK23V",
  "key31": "4Fhp1XkjSmb8oUbntK2g6Hi7VZ88LS3fHg8jeKf95z8BhBeDpootMca2tcbu5vWK98RJ9nqu61hQcFDpecaXoXyk",
  "key32": "4DmALFatLX4PV6seMDBnz6DXumCJ9Jko1wBvLvjkef69o39TAycmfsMeee9cf5p3qtbf6S5x51W3h3L6cAiQveya",
  "key33": "FG4jyMwuA4czsTmbzKLuSVWxawJL1HEsywPEqGygNzsXmcGTuSp6dGHxo8XAS8KWu3KeTvCMhukvVdF9VtF3PMe",
  "key34": "3rJpmQT9kYBGBKWj5S2VTYneGH6i25vtME5zJzDxxPwoUgzNUyXa7u1JdtkenmxBM6gTcCdHj3MdCbfEjv4SMWkH",
  "key35": "5CfSVHBZrJmwN8tM2qaPRRFEuY9m2QufX1aDJahjjwVnpWebsVvoWujK6h8NKwoveRQi8ra8tL4VsaxatymVwoN9",
  "key36": "zSP8BdHmHcqa7qGHTq85rDmjJhy4MFmB4oBVLH7eqp7JiGu67AtY3bncDUuhxqEVEJGCR5J9Z2vQKmvGk3i7REu",
  "key37": "2EEQUvexwpby82pPaqJnbULDmvioktBBDafdQDezgat5fZRf88hzyVzY3jwPXY8rnbpqFxvgcSicSDB2PQNcsBos",
  "key38": "2aT4kd2kBMWM3EwsM8Xmo1re7EgcwpAcESjKVvDE7ke3YQ6GdJBpC2S4WCv991kbmgLzJtJ2Ka3AQN4KYEHjGFzL",
  "key39": "2GHdezvCgiEXReUZYkPHETYSCw4MMvTdMtMrQNH1i5aeCZyCKf3ZUbAmLDJDUfYndgVUn9yQ5V1uTs82KSwtxK5J",
  "key40": "3Cuh4NjhzcYsy7vGQKGbADGbm8ztywgXQQ5dispaJZ1WoiiCd784439syCenziQU8U82qPxMdniosu4EsU6TVv6Q"
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
