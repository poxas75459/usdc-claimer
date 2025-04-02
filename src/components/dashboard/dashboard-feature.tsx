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
    "fyFWpiwbsZhebY45dP5CDTAoXkhzKgH5uJ3jSTXmwjbAYjZCeBLuDD7299qgYwzULuVKEUnryQFJwst1nR2x4Mq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nE9pTwKuowj7fuaxZJyc8H6BW21MRmxMtPeHmr8zRtsHeiNeQDioijYDghcGi5dpsTFwLxnWE27ZeazgB6rQTkG",
  "key1": "43rsvQvfgyF76Q26fi9QQg9XTyV3tbcERYwoyahpSMSo4E27JHjPKmg25uiuTeoCTJ5NCKbNUmsTvsNptSWQQ8ny",
  "key2": "3BZcjHrQ5GezGoZi8Jh6LEeVXJY4Kdbc8qcVUs4116oRYUHSRnDX5sAGMzMkWsGesmbhkmdHBog63nK5jq4JD8ww",
  "key3": "5VHWDNjfM2XYJrWEAx8naxDQFxKz4oeJKySj6ZMHxCWfmkBBsWmkvRGA56Kh2tU84Qd9wQ6pDoVpZUHV3soZYESV",
  "key4": "2WQbLZEjGQzAEXBCt3QGTdfjV6ydKNGaoHHU5Y1m8PjxPV5kc7ngCiwXPWxKdxp7bD4FiJhjhBy8Z5i7eQZmZdnz",
  "key5": "3b151AfSMH9rUNRXWjCY5KdRNyGVMPSd922aqpP2B4ZQKsLWfQ1VPBDsB6XhYJJUL7WXxYST1VBBX23TPV7ENEeM",
  "key6": "3PVriwqW8Wm4M2Rh4xUdQttuVUMkF9SJmJ9MUfuHFZmRyCPDe6h55FsMfdKgNW5PA411163LnA8FhQk9XzEiCDgm",
  "key7": "ov2n7FPWEZqK5mVqyAKPiQFQMq2TkiPc7wH1nZDrfR8iaJb3oPHW7hcToyZzUx4qnzij5Nyhh7o8doky99HP34f",
  "key8": "2nZK5kMvaPieJssuLrhrk1ARAVtVvL5BsUemx3ZroqiBScC5nZ5uxyj7cNq2gxzVRH5zmQPi5QU7F1xZm5NWyLni",
  "key9": "5G9GZWbVDBzQP83QLxpb9zzvMBtoEjyRjx1VctvWVBZic9ogEXjxRD7PFeW2JS67SaTVkfTJvd7rHR6A6YPYum5J",
  "key10": "3PmPaP3SKjwmfvio3dKFVi7aB2FhhjQi2istpK2LfRPxWxuCadRekJ7dpmy8j1S3V9YLgWjiEdLUoFVbF4ahRs5D",
  "key11": "5kByz7EBXBksNtra5nycpCf6ok9cCyKpewU82nXwekzyjBZ4D18HmkJ8CxD2siCKEvA5JNRxDvzyxLcdMzxY7xNK",
  "key12": "5w28Kjs7BvnPhGhGmFBqaSszzT7UrevBxtKpE6dXBVXa6Lvm7EzFZBRq7om35WgqBgCLrGNYwXZzNhBGdu6xXPxY",
  "key13": "4ovAgV6SP9gywc4DMeVYnsbZXe3qs6dCuSp5G89DqSvu26d8BXaAFbS2AxDm4ceDbEEky6xpNA8ffvgrqquDnUq7",
  "key14": "5qosBZU5K5jtSn32JujFxpdnzpkg3n31stn1BXrfN2xhm6nnZPtSruWcDpW1ZFRzerbAXjQQpdiFKsH4BA2P5SMX",
  "key15": "pPphhbMR6Jp2GuzgXeBBMN5p8tfJn27uTiJxXB9rSe3qyeaaK6AGK7oM8YEXX1QwWQAZjcnY5pstGvKhyrK2mva",
  "key16": "4bYqKJRhVFd5JWJmZ7anV1AHJbV1J2HqSSoKMQMn7gTjo19TYMRzj284QtkNU6ysL6H9VPBdRGsaAvMGZ3ZqgPzs",
  "key17": "ufdrh61rsn8bXdRbxDsTgi7oAhJNhpqnge3a1n5JPhLZ8bVPfQufMEE9zNVxukEVqKQUK9vs2STrzPv3TiXgAPu",
  "key18": "REaJ7Aph2E8Z6QWwbzU2apZkWVKDkNuwWLM63T9PEN9bmjjvrWWG8Z2xXMhinJ3rJp7Y3HxXH7NbqJuTHVCkYpE",
  "key19": "27QpBEtQpLRBiBX1DoEtWvpfajHMnpvq7pmGkpWqszGVChHXvbtBeJtfT7dD9vUWpBL1AP5XYYcfxSqjf2DCahbo",
  "key20": "5oGChJf174up1U2iW8owDFk9zEMkcyL9nCN8mvJA7fB24y5P4t9J7YJSESozqdj64Ab6ZbwwY6mgEC9aC4NcghGf",
  "key21": "4Trfwnve63PXVn8Sy3TrFXwE8bg14bMfXjFLXtbRQXngAhUEkvPeUNGg23e4Av692DLevFTQGV1YxKuDdfciAhWY",
  "key22": "4YEhqjudJdFZsXTLm5kSCg6AWLtiHFGEnD6HYZWXEfzMdzaCZN7vdYp5CGMsvTzUKpYCkx7L6MCgyUTgvgUkGKDW",
  "key23": "zTSCYgVwVBt8T9k9nho1oQTWjbBXW1ZTNn6toqYknvBSXZCM5VnbRsCSZZAkzQDLPbpCDdFBoHpZB8xwrMVmqCn",
  "key24": "2HfHqkLMuxqyomZQMEkSzAcCbYCQVS36gssyH6uVM5XHmSPQuS1EpNcaxQAR8N8iJpCfh5cHb8RV5LEQPRYLrCkh",
  "key25": "5G1ZM7Gx68vnsrMnwfyiS8saVTWVinYt7V9DrEGooz7EjC4hk6PjFVLmjn4eS3gkvzfZzitWyxR5K8G7cUZtcbmu",
  "key26": "3EXkbvfeDBK8NfS3myWAuhGCgSxswQjkVvsJnwHLqCpzRyZJQXTCHuYnNGcQkLM9SzFRmJA8ZGBa3QYRbbBhsv3g"
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
