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
    "k3DdXMGY93ahpovGrar1An5imegezp9teP9DpChH1gLmrkegAHqRGLuCmgSa9hoYtArBmNYA5Z5Dbs3iMnqF9zF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VMi15w8738wbKAJrT6i8CnLJAHhVvjLBSy8a9PS9U7RD8Yonq8TiYpcYVhF6nNKwqokXiWedZE8KChyHvNDYvmZ",
  "key1": "3N5t7Y6Y1khyF24Wz6TSn4Ja1WTbDkRa45zpLnD5hb3wFc7CkPfrybWynEDuis3m3rsEcrt6CUt5chgtjUeTmNm6",
  "key2": "2vDAMzJzYgi4CJtiZiRzb3PmiosKk8EDiQu5dLsPUawheR7XQ4vYwrJjTMjJLHN7B3fcTvQQMf3CCd8sLFWZPjUs",
  "key3": "4k29hB6Nvv8WGwzKnHoaQjfxjgzmjGoZDQKd8iGKsM8LasGw4MeqTiLiL895jRdgJQE8A68erjmt277JNyXCMECD",
  "key4": "4mJhXma3tsXpoAuHNjYZEHxkwGWyWN5ZacKwS1cqC3UnzbMZ62sSZT3a5mHxvjSKjEiBC8igPQkUL8J9k88VRrs7",
  "key5": "4GUNbGxbabKqnmK4ch6LvieSCfx5zKBs7z4CHSVDX1hDTbgqTVXwtopXSPE8YPp7bDHmJRxoE8GdYjByuACnpgyY",
  "key6": "49dADXKBJvEQcBjaSxFUgx6AeRQEqFdkwAPLXhbfKzXcjNTKQ6hWN6jWpdNnDpZrxtYzbyz6Ch9pb8xNpx1ExTgs",
  "key7": "3i4jGB1RKbyYmktwC17ge6mKzswJ4MkKbszTPmLaoExs3CMS1VEgfhPEMDYngLuJVDapsRBSsxEWYe2z42JHeTse",
  "key8": "2wnu4x6JB4XUAxy7wttvnXq8RsU9GxVKVtebEfBPdLtG6hTqLkDubdUamimPyh63RrB9qYB6nJknjm7HRDos5Cot",
  "key9": "cyt6LTk8bjyvgexdPmPEci3VqSB3eyV9LEPjXZRMqqPMJY3ASZ6gPxKkkaXUoB1FtX49jTYYJqJCbYJPBgRFiot",
  "key10": "i7cLte3F1YaG64FSqxsAh9tXPmoLPrMdNRMjKJEAMpHpCSKrbrvucjfp8ggHCBBCpewzivNsv2TX4WseFajQNuy",
  "key11": "5qdBnxwe8QXR7i4yyxaL8G4TDukWfzZNvWkU4MucAoGHPPUYfc4ivxZrvJ6ZEAd5MZaa6ZxUPS9txJ6i8d92zQRJ",
  "key12": "4QmmrGKS7LXA41AREXm2HTgGuifRX7ps8DofJff7GAQrywEL7A5YZYqjR7g67xjHmMf8moCNqYdKFkEzBucdLsqN",
  "key13": "qdX1H3Wmw2vHxhYHLiUemF73VK4neL94BwodTp7JWz8nGTtMRQUAjERivc6jtm24Y9n6JzzKRAy2iyGtyVgastR",
  "key14": "47GSQ7X7NyubMULJk49kX8FkeNeoXGeRi26zrKxd7uGJvQBTpThRwsfNEmx9M4mdKVUBDipSVLmf4WfJ9SJscP4W",
  "key15": "44jySjmAU485xkjD6pbxjHJkF58oQeMpjz94HvYPQNRkZoMaPefSvBAmWjpwRGA1yNc9U2ujq6NbfM54DrsShwCE",
  "key16": "4akZjer31mRX3xCeapmFRM9mPUKoGfrvQvuHwt9kt4X3skzncVpPU9wTB9azHbhnZqEzWerxRoWjgJP1X2e69Fym",
  "key17": "3HuyVVk9uHtuUY3KNTUz1rhdzfv1vazkbErhjR23YcEb2gk7Ae9gmcXH5NhK9L6ZUP5kiXQqWBXwQ2oPEd3nw3p9",
  "key18": "3zXGkZSVXhQUQTTzUcidcMAbMkwFGV9sxRHBt8faHgbck7WzEAnZpgK2LExL5EYWNaHkmK1ALd8CLSKyhvo61oNc",
  "key19": "2PjbNqB7Jkg8YiwfvQk5v6sRRogkUSr8mPdJJRB8V4DFYNmZD4N6fs26BmHAimSqktGJMBFABdheJuvwtU4VeFdD",
  "key20": "DmNfdQB7dsuLAD7T8Yd9TWvCGoxWTV9UeDemCUYzXUGRkmEw8tSL4kWUqTsj2sDxuqNNwx5CDNcRBaPBogzPDE3",
  "key21": "3xDbJncL2kAiXe3ofqieFzumRo8M5xbufBz6LtomuSYW9w3fcufTUdAtSwTKiSaYkaejYX4ZES6oJm6SAyM2WcPy",
  "key22": "5ha5yzhmG53RLSb598YHTvSLVJ2fHoeHZEian4sLNDPbRfR5EivKp8yp3CxM1cPTEqLz2hpm2UoY7UVDMS7fN2Jz",
  "key23": "5en7zZLifNeB9oTYcscKYGG4J1u48DdLfksFqAFmsJMjRM3pkRUtH7ZyhAoSFk5V43FzYoM996iZzBmFYSFcDpwT",
  "key24": "5JZxJyvYvuUFfdY6jwUGHp63RWw4dphAEd5KmWSuq28YJuckmTMw4s4F5BS3ce89Q4txhQVcZu4Wzs1rGqSFQ2ry",
  "key25": "JLkazKJVj86rGEuxJDwkZk3ZMB9FQByED7zzmbXJCKyvLPoXjcNfgJTyET9TnTfDZfeo4Gv2s95EwxfG8NdLEG9",
  "key26": "YkUauGo8TBhcRndFZhqbnDJvEH3peJ5S16DXVpCRPczLJiJ6iZZVLvjf5TC1WXKdTRiK2efuAQFA3RCwMkK1qrQ",
  "key27": "3QioZnmTDLQv4iRz6w3Tz4f1RkrqGspdkS7erRQxK8vZ7WN6ZRYVo4EWuR5XuLWdrLbrsUPDaCzgxjKbLmwNA5Am"
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
