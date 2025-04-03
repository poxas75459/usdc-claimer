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
    "3D7X6bGXgdnkTKmzKFP73eLsDsy14kPy73bG6Z6cbkG2QkPjxcN3MukSM43yVZiW5RZmRsEtvhFwUznEKFKxqXPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fkZ23rAvz4AUBhTq4xRjDpNhU7kwmQX9gCmvpMFmwFctNtz9SbveFFhAVE3nqX9H6wshYgExco1iojHq9mMb6GT",
  "key1": "5mHaBbvvw6ipspVzsjG4iF6n28QhqSc9BinZuxo94xc7ymv4xtUnutLVC5XeEvuZhsmi1zmrohX4hrX6aDxaqxkH",
  "key2": "2koiQhmkPvUxVEw7ZUHoMSUVJhNYN7TpMskbrCuse5vTFn7xtmQ8RzRMeGSNGaKhJRcgX4oM2tKveU9VtVXsVBur",
  "key3": "34RGQcLhjTkN2ujhxa4vTTk5sGXPbhunbtjYzFXVGMEgm3EtayeAifM8hRXshroCp7ZjHZgReM7nqJvSyvqEVRsE",
  "key4": "2BuWu7pLALmN5Lbfft7oaC8uDeGKi47ihn7boLJ1etgxXgxkXNCUbDmWtmQgZKFdVQ5GoYQqWcdyGpck97FZoVDv",
  "key5": "3urstZsNqrzd7eSMqBV2P4GzhZVEGdUJfaAYtSA1KBQ8J53UBt6z2VH3AYHQL9ST6PNwPD4EricmEx348HGfX2HU",
  "key6": "416CoymcwMbcFXEd4vA6knpRBaev1wdpwMAu8fXvr7KNY5zz7LGifvBH7g9TPNRf35jEHFZHSKFddZMWGvygtnic",
  "key7": "2gthUaJaftLLGDhfS4L8ybFWyxehqAxY2UjYU69wX3Q8cd5hqYLDbzCkYHzcHoei17oRituTR8QB94RcTRsQUMMu",
  "key8": "224d9xxwVBGQmsSdztRL1XuUKtHTkhuccbBh3LVQczURFAJPxBWQRkWvf5jnTUWijNfmhrpbrAa8XESyz3eiYyvS",
  "key9": "5XgNUDcdXEBBQsjoWfwMJaEZKyP3a1TPGgWX36TWpnAnQk9wpKPTw8eAZtzagXqXmcPZi4AZipvSmhtzvusY73Mj",
  "key10": "2G1a2vzbqsowPxExUCQ5qGuzzeYf9fuqYmMCvvobCcStxGEJdsXzyqCjh6ceQQpphkrFBTB6SQtG4MrGzF9okzGW",
  "key11": "41oV84xGXPS5eqWaWGqhGXmnbTbJSB8wSKNViVHVq1qLGPeiXrHNBxjazRiZXKdAtKJ16ZuQeuepHUW8eGRjyzwg",
  "key12": "3QKHr5MKfboA2KErwuHHKYcqTMgr2mVydd1Us7pjp2u7vwsjoFzN3fXrUc35UWw6zjn3KJM8yhUSKJr8Uu6dysNN",
  "key13": "5zpTFzH2MxxHte3pWBzXp2r9eqQg14MjjnjDukhJwatv6VjEqEWTM9a33Lc4C8XhxVi8YcB6ZDTiR2M8gQMQfUsx",
  "key14": "4K31svjjdkiCroasnBL84bWUCegPQrWkm6WeULbcpt9B6dbo2zzyaznnwFjrmyUxTbD1XJLabaaSKzAhwtXzVNkB",
  "key15": "61wPGuH3aBdoRxRLuaBThdbF9REEqm6q3KvGk4HcZ9KoHG2fa4kq8K8Ze1GoAkKWASbEJv8UDBUg1Esh8UYpd6SK",
  "key16": "21evaVSwfEyv2BZQ5ptbUDU4nUZdq1kfmog4xvgJNwB7xq2th1YTE8vn3pnU3dSQ8iAS4N9A1eW2F8EPRhiZ61aZ",
  "key17": "2PXMFEoRiQgN4PZazja5eq9n6KWssCCyt7DnoucRc4XtjD5fag3fEPfuabHbBN1zSypyEi94NkszNiSSVt9kJ9HH",
  "key18": "3yrWEYFwqZ5Du4AMcWReP9K28YZAUi4cNurtNTgHkpzU75syYCwBgT69nPNZggfneCg2tLQAcN8WUsnX3QyE5WNL",
  "key19": "3yXKGXDZ4eNYVxKZsK3wkbxZUmpG8RmU9NWckRtBXei9NzuT41bo8qD18oUyDtLch8eydwCjd42kDPkVDFSz7RyL",
  "key20": "264LoFiz3a3MB4mjbMBUJvaX5i5XLfoVAnMnQkbUN1GjGmhdWp85pXxHri9PgjxDQ5GZ2stEzxAkiquVfZcNynM5",
  "key21": "3emYhGfmuM74yTwCBtmpdTZSvaPAYJRcuHuh1teN5ukfY2vXa5DfcyHgxooeDwLugkgMMDx1hbRoYBkZ4FnXLM2Z",
  "key22": "3FvG8iPQLkh6jr2BNjHtQvcZESQo3411XkC53oDHMUWQnFr99sQFksMGVGytNe1mZv5fzBVLHkhca3mX4RPLNcf9",
  "key23": "56HYEUAVUEB3yHwpeF9JendGNqadEzV3pprigtJD9oJBn6Eq3wQFcdbF5JYmpMJByHVpRSnaCmWJYdp2sScxuPGW",
  "key24": "3CNqyD7nhqjvEcPJ3x5Rwdgm3GCCqHtQMRH4ybMoCnMDbGboVwCd97dHPHNyDdJEZZTdKF5YGvNgCcNJmqYbGWnX",
  "key25": "5UHzvd6woVHxKVeWQTznTtzjUPEi74DJVkvJ4vx8cxmp4qqGPRwkLcLEUijwDgS1LJcQZ8ky5gbGsZLuzMCzoXGN"
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
