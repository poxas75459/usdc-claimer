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
    "4m1hZoWrFGMYdi1eGdR2CFntUotggkvaNZJjiBNMUAAX3aXKwFrdGjsFrdGDHamaa8Be8mzyghS14JhV3EkandPa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZThnwuTXbuVa4ZVyTjpXpgaAqySUAjXhtUrzCoSGEbAcpz259K2X8LrZdZeBkx3BBEpbnrJKHQ7QRWeQswhVSN",
  "key1": "5L1BUuzrKEjgHKB8oU4FXdooJesnMPSGHfcXusFpvqyhTGRhTPufBAXGgaeoU7LvaDA2m5vcmv3A24JJBnbTxWoU",
  "key2": "zWAMCWHhtWvvMtMP7e6A6JcCE54ex4ZPvqZKNdgJqGdLxJgqZqwWsNN8U5Mx7wpNrCvoLcnFjd2Mcmetzc4rSvE",
  "key3": "3M7vBSe2XpBignsCACZJ2cTwDE2J6abjVvaSy5R4X6NUqnAdVi6wADM4Vdc5Vd1N38QNFbciLXbhCqLcTRc8buiH",
  "key4": "pXfJ5jynwYMJ6G8hxT6Gz4r7bzZxNhYLX1nFiSk7VDc7w2dEwp6iR3eq4v8a6nM2iriAgCSKD6EuGE8uWyEEijP",
  "key5": "5dvzoGhmwNRcrkcQUeYrvJgjyuuGUAAVYjVLdzd9aR87241pJc8YdPZJqGe9UKD8yiwo5FeWkRi6ru8L59spzKQM",
  "key6": "sYSKeFLHRbVNcypdWGKVKYrDRK6zoKpLQV1ofvikfgAuxVANuqmxcnToecXfTiXXCxAh7WQueiV76f5cTH7R3FW",
  "key7": "5bPsiaUQAmUex9xE1PCEeXhyEwRr9M5aAAJ1SRkmQJuqmkWT3pucw6EQE1pGWXU6p7PAheCjCWDkWEjR4CrtVw25",
  "key8": "3BCB8hB5tQb9LubxqKsczTCSFYfuhpF1yeLApe7cJKGj9hThSdzDssL8ZX8U3J946K7xFCQ6uh3vjvBAQ9xX2BDo",
  "key9": "5LxBq4WkXgCVJckE9icvGqM6sD99WCvS3T7pfBNqJ5LEu1HjfT66mwMfxnKPmYm9W5NXUaF1frQuENinmMCcfZrQ",
  "key10": "2EPeU5JN8WrjM1hBXxxYYmqXFM4Ment3VjdZoFiim8Wu5JbMJVfsxLVzcz4EZe86UwXA6NZjtNtj1mz5MqzCUpmJ",
  "key11": "2rWeCGtwTr1NrguSGnwwrRhg2qYvtn5HccHdiEB3Y1SooZwgs639zKKbnBJ9JiPbjJTYpbYRBHu58TvasiwQKEy6",
  "key12": "5bkiW32qcNKGz5ypsT5aVn4TcVsvizroQR6jrRzBdW7RffmYpYpMqyEwA3hAE9dVZyumsJGnvhj4PeXied3X8vPx",
  "key13": "4WUU4NutKvnf9WQ4ZYvNxZAJVsaB83NQiYnjVLYfMGjSuepkZGATLWHRChhF4w85Rcf9cgrhPPAioZe21XEDan15",
  "key14": "2TV2eUJJzJhSswoiRDCPM18L2ijBSt9CTsjdi3ohiE1fUisQ5SuTgshzqM4Hout66odisRUMHtyLRoXpBroUadiN",
  "key15": "3xgpjzRJaxurBu9Z4qnDvXxeR6ebQM9VXveipnQaup5j1sGK3ZDhj7VS3LL9Z5BV9Mi8Ud5kc6Fcre7m8kKVL5j7",
  "key16": "3fBEUbZGV9PEp3DRpGtzoQCmRJh4EyffGLEWnxrscy4qcaLUjjPfvkYCzBtPLK8DWBrXPJvs5D74qg3tV9QPniuH",
  "key17": "2YzdDy3P4VgRjpzx3fo7Z2sy1KdpPnxT49zESGGGZLtX1KP3Lgi8KgFVF82repNiWpxcRACfadqjPHe7qa3qRC1a",
  "key18": "3Rr1SfLXb2hawJAecMVduVEJSJ85ThmGu1zKpnvwgqe4Jqqqc62HuVEX8sXvoG7V4CeAdgp64f4FTL7v2qExJZvx",
  "key19": "aKsB5F3ks5aitygKYiuAMu6atYn7DhtDQYeCL6hZFyub1BkagynnpuXTHMo3eYYDQSHVxH3RmpPmLmZ9CNxVoVS",
  "key20": "YeeN9mzmBi5nBY1jMW5YPTWFZoEqqrcHZiQWNEscFpXCM5oYRczjEZ6ySL8q191XviGGAoB6gU6cvtSjAJQdgfX",
  "key21": "4rkgsxHnikzdT5gJEQdLMEmNfJdpZzxwhv7J23phtvJqMPgkQqw32NLVNCuXb3oQh1FLQeS5MC9EU2NzYtEYKnTT",
  "key22": "3HcMDa94ascXyw7nb1wKTMGbj3WZKiixKsHfHLC5yZ948zJ1aopptBXuKhMZmG9ttiXatLvhf3yd9NtndeumNKSY",
  "key23": "2dvZ2TTY3o8ojsZbHLBNLn2VuFDySMk2LkC1vk9uGoiF1ELEKwio5ZkCXcgVANnJP4aB8eQVnpzMWmtTjLTuPrsw",
  "key24": "2LNAgrcLKLiVbKStFUpnBA6kwjMAeYvZuSztkHBFxAmDmrDwsFPQyhKvyoLX2SL7Cx5DAuSfhQZGZ5mYLpuH5VBs",
  "key25": "5tLmEubafSxptMs2yPyYDnADxY7S4webr2oAU7BXnVz24jxF9afJWsaFWGJcFKtJTKVbPQyAUGf9GoLPn4CSJqK4",
  "key26": "7nhqepBVA8dNtgjTm86iCkHdYdLy2QZ1X8aaWwuGnGBsQzNHHhGHVTX3hgaATd9SuByEAxGhrcopyPpxiZowCca",
  "key27": "5qiwWGfCsLuFYLDtqqiD8jv2QruJUCnThuVMUKTfpukkQbaZrnjANBbuMVjhZNQKvonSGUTZgueTwCWpGj99dTNa",
  "key28": "3sheRTbZGSA4F24X3mpg15dvP7dHFQH3YoPKLthcuiM5uj7NLiMMvEn9YYCyEbxmtKJmZAW86SsXemY9xtavWhmT",
  "key29": "zU7PYJGmeAmQPuBSq7o4LuuVWdsfy2BgjgS8TM5JCHM3zASjt2cyxt68YxYkv4e1USb9WrrGMs8VV1jAeV8HwAK",
  "key30": "3FxNimnejKxi1K1a2poqoBNGxEDuDdgZuiuriXNcRbTmd6PB1x9dkUDd69RKVNBkzCs8c7Rgwnt3JLwU6kGJE1fb",
  "key31": "3pEBwqNPyKPTqCUCN8HaULSiazQNND2PXAF6xxVLwbowCXgY5dwWnBbxaEBRKAoRVpnPRut4WFMekoUkxtDM2Dv6",
  "key32": "3y1nU27DKrhQUPgsWTD1WRTeAJQuxKwjHwra4G1JPtYEMHznPbiUiFw4aSCQqK3Npa4A18VBaNihnrTsKj379LZW",
  "key33": "4Qy7uemJcGXwQbxQmm2Uy5871WGyi9hyNBMq8QpXPie7RR3C1LsKij9c3YwppqxZSJ78Vmzv6fpspvL97ACwhpXX",
  "key34": "4ZKrH1m2sGBkwbPWp4RYG91aQimPFdv8Xfv2TiMG34abiNAQY62PPp1UhEfDVZSRqHSkCMg2xaJBxPo6uuR4krpG",
  "key35": "3fN1FMFy5qXUFtjc3baoA8WfYkqxkB6UqN4aduoMa4mR6K24AzPPPDs8pMnCyLWxDMvzf4wxjyqn5RAM79Vhyg7F",
  "key36": "2d7tp8e7jRMXuY5Zp8UZrmcCqSN6Seq2PmKVHkFYmQbRREqPwJMHxnQhp1oe9KxrpxdfYKkVbSWTeprQkN9GSfZx"
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
