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
    "5DxUrFTuCav79kauPrGGzU18SrTi3Y2pbm4XJxx7W82cu6YDnGzcdsWHHJT2uZSRBK7gTaYzmoH5Wjj4mywC7Sop"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WkN2AhAt4E8WzQsjXH4ywVyp7yZQdmfrGbEa19yUCh3LqRxkMEXYVvbzMK9pUUyGTA864enbWRJSSf4LKeQbCCD",
  "key1": "3iRoyLwBehnKyiNYjWuCZnyAoUVT3gLSutu2RA2TR2cuSoXAFgxAHY5wGxhggk9vpvqR7Jn5NbdNTq5coziJzrwW",
  "key2": "ApSWpqAzyq3UfYA512qLZHuLmgo2Uqw3xznfHLS6LnK8TQPtxa5ktS19swivrSn2q8KbpNkyxuoJwvGd2SRT8za",
  "key3": "41iBUSPciKkyzePdT2TvmiZtEjBxfrsLCQumDU2yRQaqTx1iYwZUAUvC3BJGkNrTZhabDQGrnFsAWebJhpr3v1nv",
  "key4": "2VYSdQJxeWkTZqUhGt5rgpDs87AdiBDyetyjGaynKFsB4zkxYZRSY8jwaP5NKyh1N9Fzph2iocBboV14NLfe2xAn",
  "key5": "5SLu6oDkLv99JJgJximKb3ix43xm9nSyTY3TSgNDn2e6RzKXs8hM4x8TQkE6VBdk9sDmpQ8xvGSot77gzjEkmkxS",
  "key6": "4J635mqaYBC8YYET11iwiv6XGJLnGZT7L5ZgRkdLfzdSZUmxg9KdcdGFQdoy2JtYXNy8dqzV3DLetubqAE95wmDn",
  "key7": "22iUDeZqEzJLJTxmZEKb6QPcKGK3YkKTkQ5M3nwZPTr8eyb3tXZAB9hsMYJQXZq7jDF7GZ7RAHnvVxYZkJFJh5T9",
  "key8": "2kQ5qEdVJivtR3obx265jt4eAaQjzCqpcxDpY5aZhBYpjqdi12Nn42f6UYSfCxaNcQQvYyiF2i5aVqBVbL4pL2br",
  "key9": "NxKfpkhQSa7J3VWYke1xdhW3WmVA1qZQKCEySZrQ7HcN9TU2LRGC7wbVmgdiWBvSze6n7dY6YR18EqcUF6Hp3Hc",
  "key10": "rEHL3xU3LW2MQiSE8zfM2mHK2HU8WzgzohA4DZtaz35fpcKXrvXvEqDau8HGjAfxR7qn3DKo8xZhoggnXYP9FJS",
  "key11": "2ALWKLtpK8VHoMJoUFjMaNYLRvTHEzBqQxMVSwLN5oVB8jQtFrdfX9QKLA7jSSm2De4zTF5epwA2Jiv17kum86CN",
  "key12": "5KpRFMMDTfHRHBfqciNXp8gGS2C1uWM9PeUajDmDt5BofKB61yHzb9CJ1bW2paw1TknJA8ZcrwY5JPHdJfJWAvYo",
  "key13": "2vrY7oqRTx27FyByBFFXb3D4s982bjJvznxZRfXjQnwf6oucw8F4bv3ACVYbkKT7Ra6WJvUdgL6fdZN4CNAr3QND",
  "key14": "2GpmzxLdqWojWMgEsfzG4cyhcbBaZzDsFBxNfs3KdqNrvGrDqs8ZqM6o1Bt7wYQu8bEAreVfs8TELzGYzX5kmeog",
  "key15": "3r8wCsmyXQs3DvrPTTvHSavMRsDYpZkHfRS5ihEHGHzdEzcszjXefoFxXKiZhGrbgsjaV7YC1vvXRq391XpR23zz",
  "key16": "2ThjYpEo3ojdUdVsui7fj9CNmfHsYrg6gvb44ww49puCxAWPsZ9iCW27ksBMTfwiuQJ4WR6NQd7c8KBzxyMBWeig",
  "key17": "4V1PvNp4vSmARzGDgVza97kX5tJngKRiQNGsNiUMW3mDgdsPagq7Y5BiBpxWxmd9qvPpt2hs13tu2ruVWqsdMoVr",
  "key18": "wZaAuvuuS8KkDCa2gVocxeoHcSQttBQrcafFoDHp2GtgHyyCe3NjHrP1wD2KhP7MKS8cSvzyr32ZpydPQtXvPht",
  "key19": "3gftCausiw4F2KzL4SWBD4EEwiXdXgL4PFgeXETaJrbVppcNHRq74uuupe1ZgT7ybyKidJQdbrxCyhJDsghCAQqH",
  "key20": "2FZGiqBrNXXA6xMRYmcRh7aWkwTsAyt4zXNML9vHUWBPjpGRD2Ty3jAYmHXsS7okeC3jt9TEcwRUd5BhnixR6sTv",
  "key21": "4UrY9V8LbSiEiS7Tt3Wg7Ne1eepd8Y7fUa8HBehBmzxfY7XoRCXBDo2GFJjc9tYrKExa5aR1HUMM19L89ii7E8Am",
  "key22": "4bJdwErpgkBtgLZg9TcvsrJ42P1svBFfoegWjrfSsPER1pjSutjaT8mYrp4WKzP6cQA6YF3Mh9hGGc3uoGsxqfGZ",
  "key23": "2NLG59p23wNjb7X1HDQ932Qk4rQcJVeSAkbVH4iTvHEm3gFMLynkYbqtJM5CWUWmf68S1w8ZBMLiA7B1KG3cyRzX",
  "key24": "4ksJaYwLS9pKE1JVZ3CuTXyysHfgUYkoFYiAZLzX5q18LDHGXpeauuD2CPZpUyKs4FxpV3rX7WEbLMzb1fuCY16W",
  "key25": "2qkNSV9fGRFDoDMiX371eDept8atZqBYVt1wpZRcmzcx9ueZvtq95JmL9gbj4iKAQGhXvxc15QBk3ea77gAkxaTg",
  "key26": "3NiDTmyWnA7oojrAH623mGh6YteSHnjFtXy4CX3Zk9jst4unLL5H9gihmf3dxpBai5bkm8T3EbRpxREAqkXKFizn"
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
