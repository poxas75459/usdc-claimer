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
    "63bbVt4SGBx7KPjky2cwY8xHUgzMyAA2gigERYTque6v7VyLccEFKKrXZ7EPZqnsQbkcMqawGiBzZcTUeGCYTKy1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M46Pv7JQLjzZwnA3HgYxuxPUL6GihxAA8f4xGLcNzMVdfp9jGbqfAGRgs3ocFtSRVnpod4QhuWNt1cSkbVrTmMo",
  "key1": "4hTSdgUW11KMLhLVjS9ZGpruCZR3p5PmM5ohp89Wwq46Vk5PVY9WsKDYS5PX5PcAV3bnunKJrQkpR8jasXsmJvS",
  "key2": "5ndG6pK2oskSgLHKGW4XGJaovgPKsjdJTGShaBU7bpMVyADAAfh7aPTPmZcsEQ2nHcuvZfd32DVoHoaMeBRWHJeH",
  "key3": "5HwkpVqFoaKUNu4b1aqvPbu2o8Eyt2Zn4W7VsfhbkBBcuZKkaJCVPngqTrdqR6xiXHvah7k7qPQBDycNJHKTBfCn",
  "key4": "5dQRibSQGeCTJDg6Uf24RZHye6wnPWx5gJKLaTG5RBj8b7rpYgacJDKyZtLpEKor9rtES8AXJRJcpAYvwjDQKKdt",
  "key5": "2CWTFPt8XBCa1caF3iWA1nxPEXUfV7keTHkcXxkf8qx2rPdRwjCBYw9nSU42kVK49nw9EpaCgyHqbqBtiDWYpAB7",
  "key6": "1sF3DnMJVSjLrByPaxaPQYzyN4DwMVpqgGo8Wtu1EvGjHNcg3nhfQppmJ5qAk3YXPnzQqQsLJxt4ga8ou8mUrBN",
  "key7": "3ETE4ZwAU3XL7URh2jKkfTgrAh5jRbZJhto6MTGCp5tcE6ehcra8cCaKF273HSXs8JeCfGyiAJNZN8D1iesPFP72",
  "key8": "8TKf24b7Bzd3CFKgKKY9nkEjaLMUvHHpYYN4Leyycy4arFBX6o7oTyFdsVPGm8VQAuZrFZQd1usparLMpiacb9B",
  "key9": "4ukoWTchHkgHXbFwZRMLtDErwABDYXHb9wV87DgJP8Fnuo7nRY2tHHZbBrHMTd1RaXjBueHCbkYCqd1VZMM2ibW4",
  "key10": "4kWKLvUpZPbfA8U3Ez98S6GjJhQJSkd97og6BjaYmKQf9LVX4YGNZyuHWqFE9iJVrn9URqA1VPWdxzbxH75Y469L",
  "key11": "2rSXSj72KWUWMoAhmMPAo3wfFSszqmfpTDQbikYtH2rh2Mp1veFRRcWeV4KRTDfkSUpwdXbbiou5epNiHmZ9LL39",
  "key12": "5xoErCpECb85qyhMQkeE2EG1yGuk1CJ1SeozzMeWE6HJ3GkyaMSjwo8manaPdNy3umLQ2EggbfuYPrycR2BF2M5Y",
  "key13": "4qGDrKd64syRoF5sY3mFP3QZLrv8G5WK11iB97HnNTNUrX4xgBJSGjey6JtDWAGWhMVQfRWUBp6QwgtGgkbPuT3K",
  "key14": "2bY7UhHA8nYgLf1iP3uoB2pWDyPsvRd6nBhe5GCYcMZRqLEcVAgdivBsusDwWHJCYPF8ix6YCXkbSJ9MDf665MkR",
  "key15": "26o9bEuH7JyEUTY68GT1PBLtPVFhrNFXEfAPBNB1ah86LodVuc6zKua5yL2pZwAjMq86pyNxhaCkNRi1k2K4X1j1",
  "key16": "4d1JsemndPBwRtxSmKe9oZrWRAKc2JzJ1KXyRqEPvFavii7BAqqFV8yjoSs4jAtxnHwBYD1HiSeBVKajAqFUmNjy",
  "key17": "4izorU1quNPaG7sr9uqdkXd2p3RtKBMRoc2JQazj9m6dREz1q9vB4xoKp2jWcwtHTP2tLWrxMLxRzy4hgjhaxQDo",
  "key18": "2ud5JVaKndHVxDqaD3GH1pD7dzLZyRMisUsYtstJUXCUB45bwM9EgRpmnaSmz6WCAP5FvDP88bX7bh7GGSqj1M7q",
  "key19": "2fD8GGTJyPEpr3HQZFNMg6h55EVL4dWrykNdhwik7h1AQhAgP3WoczphvLnQtq5rJX7GvcWXcDHh2ep3gHsoQNUY",
  "key20": "2VMPgzJ5TUKJUe2YQUXkqwBgF6jb7e1sxH9jujgQUevgrzRKkiuNx5JCAnjn2jdDoz3vqFgneDXphmSvxSKPwQVT",
  "key21": "5sVV4VtkQdbcVzaxLREWNSrKJouxiVEPJ3oiHZ1ofUkonqNynyKPNaSE5iPS24P7zydFTjCjmX5Q521LUJTBZAYA",
  "key22": "GyEdZesqySuaB33qs2ztyWcWQbubtMkJjtyNstVpC1MwhQyidtAJhRNPutC7ndhkqWBnX9kN27kMxVV8PUnXUAC",
  "key23": "5GJL4TFKvrKPdJQhjQutzryWo8eeVLzbKKAVh5G9nnuGRHbvNdRekTGhCA1fLY5ifSezbDTQ1NhCHWvk6WGGRqJh",
  "key24": "3eU8beNCLWE8K6z6ntby63DWbV8q7QUKePuqDCTAos1iumDfCoj6Sh9Ls8yWkD2NMnAv5kyNnXdXPfa7y43c4z4x",
  "key25": "3SHaoZhRk2sXXWXpfk5TcwDYjxLwGia1PuHfr2KwuBQUJNegXeW8MFixvzBzPdiTG3Nds1L1shNfHSBExKhVJKa5",
  "key26": "xsPtEh28bqQJTPD8LRhm1uctgeARR9ttKrnnkts2dekFA7v33RmgovDz9Y68gv5eq2kqpb5TBinTbhcNryYUvMh",
  "key27": "4YfB4T5wvndiRpbqd1UPms5zLu1XLnPgpTvNAJ3dKHjrhyDhCc6EGixYvPnPYE4UR1LtUiKreruRP1878YfFLtiC",
  "key28": "2dmJfekVf8C96g5bNcH8aM2c5YMiQbBJ3zqPVprkuCFdBXUrQPyQJamYYLNyMPbxmXk3uBh9jridkHCoE9KgoDg9",
  "key29": "5LrPe75zAhcj2HDnhcXemiNrsAUYfmAfrPLhVU7egAYeYiDFkimDqmkcAKHXtkYt8Y22fYih8piZJCcU6BxYftNG",
  "key30": "3M5Ht2oji11oQB7zASTxFCpnCDWtoosSKYiyiNB7yF6kTnNGN3GCY8mNpmWXhT66HcyAAML1yqHREv5jtHCL2he4",
  "key31": "3e1DZGVWcjbefgTu1bp4CkvhiWDyQ1xi8oCmSoZPUNwbjwBNtvaTKGWCHSm7nnpE6s8CRDbfHrAwvi1STkFA3uL9",
  "key32": "23nQxV7tYzskR46qe5wafdBRET567X2KXquy4NQikWVA6Fu9Ltkq36XdufYigPYuoyd5rSLpEg2796RCtfTt8JWQ"
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
