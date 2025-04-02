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
    "dN6RKsBWpmmMULvpweQzReKYt2RBUfd6cndtstipspxqWTtjNecUXUaWNmzA4rmwi1QwTzFESg5fJZdxiqVcZTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYfDTUHYG2TwAP7QNNwpigHKfYfGQXmXcrM35MsfWvzubCtx3jpXoF3Zs6iQKbWuQZJQksMRrnLz1xZ3vcnaPce",
  "key1": "5pK6sDJAFuiFKjyfpS3TEj9mZdxAfBEkSDQx4h4T4r7FBdmoupKFbXtYM7Cq5JSHYFniQnJkn294y8p4XUgdxjYk",
  "key2": "55yo4eNqYfm6eo1W9mADf6UGpdjQj4PTyEcttk8dp429CTYUEEzh3Zomighhgtzu5AXWRsdQeoHGscYN9gwqvDkx",
  "key3": "3PAGEhGhFWZ8x39NFcCuX1VapAdo1Q8hdAoMGEqM9nhKrDMwbeit36rE3Kym9mmtEsh3YH9J2qYHapaQgU1bzGrc",
  "key4": "4ejkVx2dTAsTSmuGAkMogRrKRj7F8wcVzBnbrxC93otT5rJKRobMKiWPKVTe52FC6W1JKpUE6owquwwMoa2XG3h2",
  "key5": "5GX4o3QtNW2GLv2vQ32GgQJCrb4W8fubnWrjA6bFY6NSYJmYbRa98WHQm6M4MHMqckHTFhprFjU9MoXCN2k8DAyu",
  "key6": "3FmknYYVBE1P1p1CcXhxWdTsQrtvLc9PhFJsKsmqPAAkxVxgJG9U5iR23L3aHLzXccE6scdHxnx3tePNk9dnffqn",
  "key7": "kqvvzPxhtrTwobSy3NkdsYYLXUJTirF4NfUR3PRiLSZHJ38iYh6XgTQasn9o1MArBhFMrHgMom83vKXyaCHNgxc",
  "key8": "3hhnDtTVxC6WMTYco5dEPVTVwYbKWZr3YzFor5Hoh774kY49qJQRLek1mtTnmUxEFkzox8dSscszUCFBz49Cumwa",
  "key9": "4LK7pzG2mJj9V57uAGwNN1yCeZx5zSFq2HxAP9LcDAJK4ePGWYKsU9bHxFrb7oS4aSUJysQWEXxHtF8DJRL6MQtH",
  "key10": "3Xk683gz9kmBEiMa7YzowvUQkswCZTfEUsLaLTZ8bgckJb6WSFYKwSuRYYkYMQuQ1TNxBJtmXLFDdkEZWKgs1Yi7",
  "key11": "47s2wu98GTM2p2NbJAYeGXgBt9nxW189iJMTvv2UYZxZmBDK5To78oJ8TZPUbzSMkYkNvCDqxwdkkxDuAyUpvLqK",
  "key12": "5K4cmMECy5fA5rGqot97kqqyudxRpwLkeGfDagHpU9RGde2k5Di1k3XJtA4sHEwC7XcMsBjxZ9A6BtSS9HFSwvU6",
  "key13": "5LJxxaN3oMkndgUDxFrXYeX7PEhNqCVwPwbGcvPpwMt1YJA72Kz7RSQQi1e9VhzNpWhJP7QQ9shJfgSg15TDaKPY",
  "key14": "5wZftx962AE2Kf7U8p2FcTiaqZ4f1HBMTrjQ85Fjt1z6hWWp7RQFfG4ABPHsdAsqZf3wurZGQ4G3CRjJ3SKm46if",
  "key15": "5LxaHTJXPyCHU2FneJxYrhENn4VmaQBY9ms1meASXavgMDqahYVLzmrVrLmdUvicZL9AjVZPk5jj1FpDJPbWWQuB",
  "key16": "42sVyChZ7DRigu4BUJjZWyskW2Ky9c17DSWNRcj3vEsDCRcw1iBZM5r6hCLZ9DfvUN8VpP7XL8wyZwcy3UMdDCdh",
  "key17": "3mhtCDm1htvprzdiijeGzaBss6u6S5wW6SJ735743r9a5TU4s39bgvoaHf7X91fdAZxwtTJYjiB68WJLbYtDLJQ9",
  "key18": "4eMYRoVyLS52nUnwFn3rZZiXKq8WL3eQgNnkxHedojaCM6SEQkhcz8tE9x2zWkCjRkdWgmCKriZWvKDAHXNgCLhT",
  "key19": "4QRC1jonZx9msJAX81GjkhdxSbeUhgXhpK1pRzBUmxUoKvmqiWrS1d7cajCFdroAoqMpPmxbGnigUNRjm5fnExBy",
  "key20": "5MUvX85iibJWpVuPqZVSHhBywz2oNAbKpsYTY8yMkpbXfST9YwetAbhrQS32MyFRL126iZascA4AbA5Hi9ZWTnYU",
  "key21": "2X9eDF2C5LyRvYPEE9KWTzRRRSLRRtoSMbmFkSx3kTaPLcovcngJmsKnRk7kE2718VaHN9Ppk3FJDdsw6nyGoMKM",
  "key22": "65ft1LyK8r8pwUMxX2WwaXSv9M4opwvej9uiE2qhu8K719DKPNEQAojqWAaBapfHJcjmXhTW8GPPwVJn9TRDTEEj",
  "key23": "5ofc3BeAmbfnEFCumf4iJFfKHUGmRhCNo9H9AtAsryPK5P1YxtLPaqQCfhhY3Bbb8dwmh2u3Hz9GWNLxigjyvCa6",
  "key24": "sfyWLxv4Na1ecPfTpxxQv9bA1mpuD4kRw9rQScqHmAr53cndf7YrmL1UP4DfYdNywQ5hvQ2y4oMyD91DP92mdJT"
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
