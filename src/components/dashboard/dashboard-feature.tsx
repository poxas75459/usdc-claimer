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
    "2T79GYbCCYuKoNMA4xKfQsPe4wQ7phisZoJXnvCHhitCtBBQtXg3rgB2M6TKhF2W7EQQ39YUEvYthk5hdBvQrZTr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57WMEJNfUn5RKjPzB2vgW5nBDBUnN3vWB78KvCgKou6BpVz1KdHNqMVFcWNgvSGAvaBQXprFzJ9eEurJiWcvJ87W",
  "key1": "5ZvLtFaJzbPQavht4ymZmC1L7TBYidv1S63xr9pBjWjenyc4PqKTLXJy1KAzcBc4MFNVBSgRQJrcT8putuh9PeNF",
  "key2": "F72c8kRyQEQjq1BYiiX3icLPG68ZUypHVy1AK39TuSbFewMwqAdyBLjYeen4cqeFejLNmvb1r3AcxRdFScmuDL9",
  "key3": "2uL2ipdi3siEh4tUed5cre8hDnYLXTcjFT1mBzkNfEjRp5ds56THfoZTpzVVvUxWuyfqWHCGbjsbr8h2a3M6bXfx",
  "key4": "6W1RQEaweV4YYZxoKE6qnGkp66fZjqvMwrtMi7kgmjNtTcFKHQxwuyTteMHfeFUT3jVvtivUxsMbrkaJtC12RvP",
  "key5": "aChqAiZZH9e3QTmMy54THaFPkTe31deyDxJyMLpQCgScDTXqGb259Dw6doxPHm7A6YYjE4QzqsC127oLMnfYELj",
  "key6": "59PYRnAgwstwrzxvAXC6rbTauMF8AyffAYECsNQ82RPWZUKF9dZ6yg5CaAq8mnivZESUidVYsnzS6hoUjmhjSs13",
  "key7": "2jQ49VBfbDR6fWAdAT5JTpU2W8ZXhEhNjBjF9DLnJi3Ey3Y6CBeeTAt8eTUfW1kkDJ7h53kgzFkbmwHPRGHYEFxU",
  "key8": "3iub9bmQfViYnMUmBSKQdgqSMCaSmSr6D2aJDby8sLaPCg3GseHTDmDU7gqdDEgXxpp2nT3Vy9yX1kUdMZz6xi4f",
  "key9": "2iuoJbtEAHV4266mU64mMhvud42m2gQ7FcCdQCqJhgVCYqBF32g7i1uUS1YTsNP5yDsh3ZZyP9EbmTiHnzrtRpAb",
  "key10": "4tKRLLb31nRA5NhowBnHzMJTWWQQ3zeV5UHZREr7Z7jBGTKKjgBGPCv1GcsoFQRCkZUZkoRm7Yxa8t84X8djN1XK",
  "key11": "4G98myAqgJeZyVc2yUM3awbedxbcshHZ2rBTQwjMXHybDnDh5org1SxSBcVWHE837aFDbxaNcDFdLH3RncSQqtZt",
  "key12": "3aPjBko58fraVKWYcAgpzYPuJhp93Z7HnbG6qT8GgwAkEEFRCUFo8z4DX7TG3Z2QPeuXP1uAgqTqrtwW37diVieS",
  "key13": "358CqeccCoE6yRcUWPD3kPgwRZKLaLgmTLyAqhuer86bWUZJzQCSUhUpEdj91JRgNNjXtTdEpbSq6kCx4bnzx8wc",
  "key14": "77rRFJmnQEw66XhfcsRXaWokDdVEzEZGXxWwb8VgHM6vCsydmCJhUNwJFm17Ku7c8b68Qe3L4UWJmzew3QbJdiY",
  "key15": "eB4PPoV9bc23h2CGiS8uauLYmYifza1KPzGrGLB23ju6tZmuTnUaHrVfXCPC38GkyLFtsoXQ6j8CtQKqTHmAJ8s",
  "key16": "4zDXDpr42DYXGPiavxFZ7ggbfCamBnS7hZuzXH8fp5fCynxauJwLTNhQywSx7DVCk3VuiZGMJrbZ4iYoLJUFJaXb",
  "key17": "4FoU7kgJZ7P2rEfy1DjdG8G3TGMPN6MzV9Yk8Cwd49Rs6CtDZy9yJonhi8QQAzsgazLLa8AUspwkZ6tYEp2SmrEV",
  "key18": "yD2jQpRQJuVqaE2zdFFRHtLpETmvgZnJ5P3ZQgN69vogP6KjZDufarx8qhJHpppCYc9fysaqUBP9q7skvYPiT1y",
  "key19": "2xf283DD4iU8E3X8KwGFWnNK9h4QPqER7ePBicc8CfbC2kuzughv8yvEGJc5f8372iL1TBjMTFedbKffSBAdbdiu",
  "key20": "35vsW24aTCoWJnevVsKFRxr2irtadG83Tr9j6ucyGKZwBNajar9CiV7YUPCxfFw141zRCgfVgcMaW3Gi1FhQibqd",
  "key21": "4zhokyCeRxVWn3btLp5MqcuV7wT51Fcdf7L8XnNa6WE56yTM6EgiNW87mNyheyy9A3FsqZrEg4RsrAZTQtM55ZeG",
  "key22": "PTmTzmLsPDFivw4SNuynSENQUJ83GRamuWfkMoT6nd2G1RJmNLZRBNcyz5pbsZ9UMmtT71ThDXYTbfxeS2SJfeN",
  "key23": "5LXk2gjXtT9kumMLV4b8bEbxphzgSG9di6HrM4inscWJVQD7UqZe2SgwmrCdn48U4zESwXhDCynravpakUqgaboW",
  "key24": "3eCRJRx6rsRVzq9W2EtLCkuvx8Sao1voXZUr8Fafw7YudjcqSnaJNQLUKwaTfFbQzRLnBEL8ZWbDApDu4AiKSQNj",
  "key25": "34vPp3x2TQkdumHiCRggeSHebpA18CqXXJP6ccQZJm8DCDXSZh6gw2p7ArJufrSXdzYFQo4J9PNYeRRcukGAt8ci",
  "key26": "2hHk594Vz3wQExaG7GmkuDbB3gxXwhf5qbzFydbSXgtHJa9WitPhAvAnDjA9yMvNmMw94NNAnZGN26rxRXP29K6x"
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
