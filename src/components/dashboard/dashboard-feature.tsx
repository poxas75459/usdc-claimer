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
    "3tPB48QiNH6hcN6TfSTBRNkHLvrb2y2keNp2jfybm4qf98JHGYzZCDazD9Kp4PhGjTa2upc9t77hsD5BhLhWiP5p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fqTmsbEkyfpbRKa5AYfbFVw9vP11o38adFaVrvYt44fV4ZTtNw1yo66cByRJsmRjHjYbmjhQNpZVXnqToGrxGaD",
  "key1": "4bnwezHCDzwwfPCNmuppisnS3fW6nKf4TARpBCe26ydiK33EQpdy6GhT9H4jjNmm9FunsTExZwHzkd4cemaYGDZN",
  "key2": "yAY3wZA6my8y4iieifGGYMTreB1y9VZM4rpUrpbSnodjJ6sr4SoiGdvo8kYweSYY6FT4kt2UCE55Bu4GsBEijdY",
  "key3": "3EEVh7jsozfQ5GUQyuS6XejDZ2wB7xCDhzmy1useCfgWjn3GXkY7WYpGULcAb3qFuRNj3x3ELUwZqytHRSGmEQKk",
  "key4": "2M2NkYhuUhSgAhNgjrFEjzsi9QQqX42jqNdhWyqmYE85XyxAZ94KMcVHFszBNMQm9jdPogYBXDHgTKaKxP1vwetc",
  "key5": "2pNLMuYY6eAWPGZWqEVULEhBtkMtRtnctmnN2tbdNdZY1MabkduzYaQT1WjpHBKyjVJtqwGRRULMTWmibxFF7E9w",
  "key6": "2z4N5S5PawbxpDzPFEJKwG4jdz8GhQ3TA4XuvcSPbQuquhk4EYXiGaq3T7dypzwq24s6ugmwrjxWA3AdiwVe13wC",
  "key7": "5g7qmDeBLNEwua3JXVzQQQCToszJxK8uvy5KerSZfXojNGcUMsMRicD9JHhUK29nZgTH9BGbp1shxFfaD2sSZJeo",
  "key8": "5vFQq53jWkqabMFDoVdwGZNr6GKpcBeZfZVN7XiZTWMLxxMoWUwTCtqBA5GKLEY1gGyQFnoP68PCKE12y3nH1UZu",
  "key9": "2gbGBx5b6vtUMFXpni1wPvV7iYZeBaR1TD2XykDGygJ2cFcZjpJjcJJdajGfh6HqpfYDa1GVXcCKwNTCuWH9ASN4",
  "key10": "4Rkn5T4ca6m2a8FtnbxtoqxGhpDePMWjxVAcSJtGqNjYAV17zuek4WkLH9Swqio8iFeqDSqMesZVX4JV28k7KE8p",
  "key11": "1GqSGEeeq8TMXVsQYWeiAXGERCgHo2HNfDue4WmF3j7Rre7VetvpwjcT6nTrQy81TC7WMpDn68ds7WeC6zhoshJ",
  "key12": "kVwA2YnyCWEqacEGZL7JjEk6uR16BWQ5xGZewE8tJxvhD2rWhhuJnSyeYqMRM7b6jaxW2xPuTcR2so9K8adZwgB",
  "key13": "2Uw82dhZtFjE1jL4XqLXuqEgT7bGrCGk6NNYZ5MPSMZRz77vj4RiiRASBGQsidRZPQBSZB9At9zCcGBJA7TFXpdS",
  "key14": "esqiQdLNd1Pr5RD8mGaKVgbin43uAyqq4yQhiyFkaAWHTNzV9qy3CEPxbMJ1dnK42bKbkmaDHf1mKza71eftFFV",
  "key15": "58FynAGDcj1KqXp8RoXwW6WMEQquGZfoJ6UH4fEZVS9tsUL4LVRyPaKbkLGosJST2nos64zuMeMdK2M9m6TgnfKd",
  "key16": "23qLobDHTz2qerpoqB1QkGhB1Bq6w6iCyS4gWzDoDUPsDx9KFffwN2bH3J7fD4dw2neHt9eCpUF7VRZ4dLc5HXfZ",
  "key17": "2nR6TsUm4jRZoAiUtECYUTYYBtej222nDAUHRnAE8VDtZSyVw61J4QToE82NLL9kEZ92hpp2mi7ACTRxSeLiRnGo",
  "key18": "56HhGMVNKh3eSnTQrKdaTS35xappTcTH3WTJghnrxESVkYXjvA5ZjTYbCeVYE4iAE2TBQBMpTcJXRNM553jZ6yQX",
  "key19": "2Qn4SjwuzMiiLHroqravAp8z7fzofXmo2pYuapBWXkkZJNMaGTbQLcV4PCLpGkRSRJsa9WzVY8NLNHxXdWgJLcrx",
  "key20": "5FNvn9evC9UCZkzMRPkxSKmbK5XNXrtz38Fq5S9sZCvpZEsbAozctpmxWjJGCfJb4b9UjM5SrATAWWoSndBMXrhv",
  "key21": "4KcehwnKrNW8VtT6Kt9egYBktMWnyAs5hiX8cumjHLvGenjMgWSNjPSjQB4C3hcWGJBq6RNKXLB8WRN4b7YPevNh",
  "key22": "3TzfqPeGhi5wjBKZ4mnbgVg9P5m4y7eKS6Crr6NxTNCod1chC6P1Fc8xZZG7vz6mCTbCYshRaMm9GiKruczr4RyF",
  "key23": "w6vd2omLFCSFWxhNjLz5uRn2svaTsSx8mcKojaLfj73hiLJWLhmb8VSv27hnZbg8YjXunc4xhovADoMxwpBcMgc",
  "key24": "2mZgm3h43irm14zXPrQPHXzvSFuA55Eq9W7jWuax22aorhf6rvw3jMf1WjvFQ7Y6vP7c5t8EnE5sLdbZoAjJioMw",
  "key25": "4cNWAURsp8JJyc7Ea3waB5Xp1LTbN6uHptf8iWfc2dPtT9KTeHdCpfDodH2SS8MmqXGqB9cM41RQhziHAbuMSz3p",
  "key26": "44rRTE6fmoEJain1QFuYiKZ1ASzZxpcHqB9XXk73vGUQy8ojERYLyqh8BNQjjPW4MY96qJmzLCGhzSzdDwW5nXgr",
  "key27": "4ZrbAqabGep3EXQZ8YhMEbd8pPfPd8PsUAar7HRpPZB43PzAPbfUBjYE26RPctaxa9A5mj1uaW2sNe2xMpZJWRir",
  "key28": "FkYhnh8woxrpK7rQcH4bXmHPbLnTu6eu2rr7pmBjPgfn2PrC5p1cbyQLV6ppBU6oiJCdAkHLrtfPysongWPuQRU",
  "key29": "5tZu5gmH1uYzb4HCLjf3L4sX9BVmYPkdWqWLteff8M1t559GGaWtKxUcwBeWemm1NJqXnkP4xKaxsguoYKge4tpE",
  "key30": "3jJYrYzH8WLLRESKhT3xyuNuqxtrhywYvnH2ioK3JkLGPrXwroScAAPV5GFoRqmQzBWjQ6N4EMgcLJnEqZvbLTjf",
  "key31": "5P8ksiVAhGfm2VpLFxZnMTTPfbrfs34efvnF7UhfdoSxp1Eqa2P1unk2Yh27vbgBLtM28yWE2TbZSBKJa9wPZJWX",
  "key32": "5nhrxP5WpvnZoNuLkGiqPpcm9K6bTcP6nSc8ALH6MxKTkhXHmQpUXZQTfqcEdSDtmFaGss9Ww6Uz54VxkGzyxmju",
  "key33": "KnTkibuktVXrZgozfwKJBbNSk5i4SwiDPuTK7KCLMRLwXGFCVz6rnBtJEm5Ge7zXm34276QjSCy4GLmYpEPpXGK",
  "key34": "2CCz7EQmeMGjVQTs8SiAUvDWKGLtjsDw9fMQdDWsEjPkyZ4cRgbrTfsnriCBqvSQwTgApWK3aUN7Wi7xdWEsNH7U",
  "key35": "59V2f2DXLDEuQHQVWGR3ypKBeJRGn62P38SUUwvKnrwATwSVHNZj3pi25Cz9xCtV6dGcZGpsZErumTXQAkfiaN7T",
  "key36": "Naf8b7KdHyHEX35MX9wbvLGxi1RCzFSgQAaH1Do3WutiQ9FS4jwiMeocJBkQcNMgtvXC45VATRr91Dsf8Zch66x",
  "key37": "3RY5ixcouPwb8mwn2gSpc86Jiq1K5LfeN5SYBr2M3WRvRrRYGo28xkdefRyw7jeGY8sUCax7VGsVt5dZuRwkzemT",
  "key38": "2S1o1KDdtANMEwHfKoEGLXkXZamPa1P1J664DTRHFKKj8akTUnUUqbwR9kVQgupmTQQqtBcnzQToDKMCpoN1Yyu7",
  "key39": "24Wy2MMaz4XW7kD967RMYywV6njNFZkryRpWhHxbgmBFhRB1pbZmhNja6CJV1YSE2ngfT7BLPA6CfMiVd8FmdyYB"
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
