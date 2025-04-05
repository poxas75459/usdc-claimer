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
    "64vBFpL1USGXzKE5G71SNqcetBHp48pDU3nyDu4i1vHbH5DpeyeU6tN6gop5RSRRfYP4gSm9bmvB9LWMsUUzHjZh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oYWyUjqHu7niKhSJchdAUSR1JvGrXHFyeYnhDrkutQ9J1wrfuCr4fN5Q49cdWANuANKzouwcJpCWotcX8uusqhk",
  "key1": "5LaNtpZHbNzNX2rLsehggpgoLqpi1dPFnc6mFHgxfnd2mzZxwKH2CfQf3dbmJR8ruyMrrGc3At8ZLANzj6Yta42g",
  "key2": "4QXNx3Pd2FpKfSeqHFuRwnCaXUtKJnJDuT2pbkHGsnhVmbzSH1EbfpanXMbePLmkAFV9eVSoV2s8k97VKwbpLBAb",
  "key3": "4rpxZqwzNm4Hm1BFAvowx4ioXVHAfU2gTjna3ZkMRsEUaiTZidCRpE68baFUDMY3XFSMMsWxA7mY7iqHRR7QweEb",
  "key4": "3iUYgzPUDEcpqd7ZZp5kKhbNXPUSZ1HcGiMJh3Dqa3J6isjyNxKq1ksqKycZGgDThjXecfR9VCRJxEaofHVPGSh9",
  "key5": "3tRkG6yBAuccydFgzXsyGwjh6LwFEoGV6t9gpVRqYs5NetmLboBEamHFrHgfjz3e7bj8HSPMAi5upP7eSJSsigRq",
  "key6": "5KwoWufny66kBWxZDwE42Lzv6bqroQ7ihtd2yyriZWw9Fqmn2j6YgYtfbGyARqTWmZ6gcC9JtNBLo15qW9rFEZv7",
  "key7": "2XunifYKXf84BUqHjdya4oZxNU8UEfZSNJyYorc4JRnF5qowyFg6SismFySQTMNR2GyWKTTzgW4eMqVL8uKhKzqY",
  "key8": "pghoLQK6XSc9bWCmz93Ytp5LkvqGj8DCEn3bvbuFR2qdu4L21i5eZQyLwMkAqwokPvqM37ZEZjqkCwQWaGvKmpT",
  "key9": "3LQnduGgovWkcMjYkd3bQSC43y29Q6ugLtCMnTR2EyoMHtSVJgUPSJddAXEvwztf9nszNDG2v1adxzmaZses4X5G",
  "key10": "2Gc92B2YuKDw3eBUsWbN8GEC8PxMik5yL6AGSLdZV1dzr4aCnQCg3cMwCohfhcj8CAuhdmQZUSZMgtJxmc65vPXb",
  "key11": "3Khc3VnSWT1kEtad4w2w8mxdu8psagyH2JZvEDj9eTkwuwYffzyaEu2GzDyHLufkcDEtPwuSmQ6NUzbmUFx5RKN9",
  "key12": "6NGgeL2A2YHZAQcf2rMfwJJYoznF58DtTTafmiu56KBHJ2NAEwnw6QfkiHUMBL4TNpEu2FqM6HU7HKVFfsNNbh9",
  "key13": "4L3nM1uv42ejv37ZusnaAQLcXfbEm6wkBU9LxdcaQUd9G31qoNbd8P6gfYj1CmVkmrvsdfRooJTVkeduRgD3LQPT",
  "key14": "2A9q3nivLAoCWXFMRgmnzUjCf21EM2gxFxMqkauT6QBZt7pUgtUpoYZ2JyKUv93v4vWMJd2E1Gmmy8WfZmasfDiz",
  "key15": "2giMx9EyuRd7yYHZjzVMvg7fZT7ZwhLrTS5TzdAcmGvoFk6MFG9GbW4wzVN7agfsS3VDKw5j3SXQfDLdLjNYucyB",
  "key16": "5eZts7t1nXsyg8iVBXPhDkMBsTrUUHc5kEqNcMMVRmhMr3VsXvpHUxuWtvv9w9GPVGwmPW9wdGD2EVGXt3izD2X1",
  "key17": "2Mw4fs4nuBiYEDxnP4PVPU51VJ88nrpq95CTfZieTDYaUkFQN4qHDuftUVR27w3Umd53mYyNf13bcds4pYSJVjcy",
  "key18": "2hVH6giDkASDeZDSBdRAjPyoCYX6kV5TgU2zcuDfYKhYzVE1SBGGhk8dPZQNku2TXwDSG2ztnZKByf8Pdji5GQbv",
  "key19": "4eoi27iz4GDndkGxD4STRvvQdrdUTXCskS6CGT3BSSRFge988T1PJyn8oEdQxLbJtc949Z2bV9gg3vueBwuZW4Ab",
  "key20": "3ECdJhPCCusBEucELWqF3JW7EmyVUUoFSzpqnNJGbBkwArdD4omgfqmRpQRxRv7Jtz1dgDxs4VkUp6iwBs4WhQqU",
  "key21": "4o9V1f4dkLQYTungMusmmmqC2tmmEAY4fThCFVj2rETyoEPwa2dv6yoqMDU2ZJJSpaumzQWhLJ2UYjhe51SYk37V",
  "key22": "4xsCcEJgKcym7r4Qxf2PGBYXqWZwrEk1CYMjomcp8EF3KSAneZz2Urn4vERNcvqnxjR3ZrRicA4D3mkmsc2pZQZ7",
  "key23": "h7oWdcmHhtfByRNbFEBPJEKQVsdckLgSHGKznFcbS69Ps9HUgGY8dKz69cvAqVK64GwudaScY5uFp2Zu76VV2ET",
  "key24": "2DNAfDj39WEqwaE5J3biD3S5Ybb7yz8D3XjwaGLiZKKbPPYNYsFAPtLUARccn8nCN2qGs2BfRt41Y3x9SZteNVH8"
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
