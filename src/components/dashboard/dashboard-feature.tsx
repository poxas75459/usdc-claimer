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
    "58WGFaGZNzikgXGGu68U5fFpcPYb9GgSHbBjU5KMU2g7SYN7wuyYkcJ5bQgRhXS5uUhtjEuayG5JTu6BxjFiQMn5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qivpw5hyxXKfH8keHzDKrjBs9YGkiWohcEwCyoPZJCGrPCFJ7DE7HWkxHxtbNH6MMk2Gw6BbC7ShdggqoAAJHhf",
  "key1": "pnETydrdSAtg4F8sEFVuRJKqdGXJHuFFoXKu1edqh34caJSUhLfJZkzfDYoT221qERndGFerSRdp1ddRdniozGK",
  "key2": "61eHUy7M6ZqHMDeHeZ6P6nxZMf7EsCekkJvScRoaZkgBDRwu5zMSDpfXpfJde4SQXKojVvErrF55ia84xsj8dpex",
  "key3": "3iMkhqCbeeG8hxuR49bCFi3htF2vz4axq99XLt8CVuSxTNUHdrewwTQYg7h4Msxo3UaVcKzxCzHQGJrBnzYg4i1t",
  "key4": "MWZvEmvRdMx5bE1zZKrUiXRPArGmXgf5sykga6aYHpLRwp7Fs6af3CEfANPh1CTs2PC4d6boTntGg4BeVT81QRJ",
  "key5": "xr6thkWjqPZZZTZ5jQMtkiG9rYp1kVMRWYD4x2SmMCktbQB6sWniZRnmoPC3z4BT2Tr7uvw56yc9FKvZkwdWnnd",
  "key6": "594jFVZcfNmJ8XmpkVvCmDgTnHiJJsMJX1t29X8qGbPABWNYAJLjGHEAKxwLXzcjsRzqjtLMGiTwJX51XRq9TFZy",
  "key7": "4NBCvtEM63b4idBunjFVEdaXc7wGYY3SWWPTGTbhmiEMrkFoAyZ5SxugyUPS56G2B9wtHaGeVs85FEwkuPC2hRso",
  "key8": "3wtymgrqoTcsAySyv9oNybVWRVv68tYZ3ZVzhapHKxi7E7FBWsM6TdNKVeV4qYufbx4qZsKoaPaed3Ujr4SU4ZYD",
  "key9": "4mS8Bn4yrgpnr51X7vsg5cNyJypX952zGxxLC5dMX75rBPXRPFkoW9kN3SztYi13k7Gx1Q8JG3kmnzW54ENVXMCp",
  "key10": "47xtGEm4xptKYo7UYvJtKkwfLheu13tqNCvZHyhDwqBUN7PvAUCtDR2pRA25XSkKX3Mqd8bECujYatuWVku54EMi",
  "key11": "iWbXyz6ccw8WxMSWGVgtkCYDw5A1oP84vtSEbDwHQirVJqTVD9ugX2WGV5TCpM3rmysAxYFgULFfGdy6bhg73p9",
  "key12": "2GN3zTMFB8kiXopUJbexwgQFzs4uSX7DnZNRzoxJHBovGmJYf29kAv6Xm6a9ZZyuw6TURAGhxSN2r8kcVpCGehTe",
  "key13": "2533c2ZXLRya74VKCas1XTi9TGzS9PXV6SHivUA47buPnSrkPq7LZR5uVqtnrnjTLBzPRKAiCYUqxzSvmbCETkss",
  "key14": "4fFutpXojz5ZDwBPo4r5gWYZREAmFkqbosTSD3VKAtU3MEfkT7uKTdo6uheGdGtJUMVN3aAuHzJzzeE2MYQGR2Zi",
  "key15": "3CQ4n9WfPqzt2VjURjBMENMVzz8xj3a6n7ruzrEuxd62FQ4hQo6A6ho4RCoWwL8AUayEtzGRfsHXmhPKDYNZ6ddS",
  "key16": "2vU7B4Kyc3RRyHfknvWNkF9aC4J7na4GHpHwL7XGzGMYeY27pQPpyANRZN2aVuq4Xmi7UnfH1H9kmcw23ViMpJCE",
  "key17": "mh7bc374JkYMEajrppFsahDqHKqaWD6oDGKErfSD2cosEf2s5Ni4wRb96W4aD7yPLMLQr7gk66CdvTHgTCPMbHi",
  "key18": "4Dn4Kdjt4tMVYQGbmi2QBKxg7YW6MFAqWF9rYsbsudZDUdCqW84JQMeDULXP43Gh59uTW1rtrCVBRoY75rLzbtyk",
  "key19": "22CcenZFVc2w7QbuChaECbXMY9FrcVFpkptCQHQKoiyLvUaiaMcYjYT9BEjdG1U9Nzeox7FH87tj1ttzsixy3Atj",
  "key20": "NTJDx4yoBazbTZtV8GuA9m3pptoKamWxr2vyuZMDPLYq79dJjUZkXGGBhcYndY5b6qoT5YSi3fkSffBioCLhLMc",
  "key21": "3LjVKy6QkUGyhuXoQxhLt5UETKgnpPMwyXq7QzADefMLhf2d7guTwDy8mze5dmFezKfxkZJTSpLkxCK816gMkZJo",
  "key22": "4UxKBA5op4nnTKNPJi7KyzwGXW2292wbH5sG1FGWtsjebuYUR4PgdstkkazypMY55ptJHzLTQxKkrMXQbX7XMTdJ",
  "key23": "4YtAb423fduKvJLWmDsepA1HSypBLSGvSJzoMYAXmWJuiNwtRGc53Kysukp4HUxi3aJZ1NHNGQ2d4sB1SfppBgWc",
  "key24": "5BzzyxQmcJKDSJ6PFGxj9fy9E3gsLetBeT6vX4gY1btKZ7BradJozGybsfsy8yWmWLMA78it7V3hWnsqLNdZqMxx",
  "key25": "4MRSUdASgDuniXZ7kEu6dP1t8Pie9npSHE83Dvb4BHujLFhwFCJpgmDZQDK3uDbzYGczcfFCYTMgh8D13ZwXrjfa",
  "key26": "23WKWKKanPUJTxFsBZX2CYzfNdahUbCAnu42mXe3NyUirhhY6aLv4w7baCTWMRtXx29iAaghfCc1pmSAkSUFvnjy",
  "key27": "2YTX5mksRVEPHDqTB721jtuAgqMTVyf8nqzM8MUdsvDBaWxXY7sKFKq1dao7DTWcpaSR69yXkrXTt8c1SGvHBY3M",
  "key28": "5fepzinaj3QRaJ7wFX638JjmkCugAawUrytmNdLdXYTFAmaG75V68fDDqEkbEu4THbVEYjXeXi3wuuQVAS9ybSga",
  "key29": "5cKhs1npiSRPpTCGndbTnpqyVdSBsMAK4ZbC4PBxPxAKS8MeGuwGg9XF7ycck3C9XC2rDFS823T487i3siao3Uzy",
  "key30": "pkFESSrM5ewR19GkjkL8SQtNRbFJpbG8etTzYJ2keiR1PebYvD5BDza6VhtcaaKWqztYLPpCJJ2MpD44h41ZQ1L"
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
