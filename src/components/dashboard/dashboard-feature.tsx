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
    "3FVjgbCPCS8p13qTjXmYuCY6ZqNoWedGbEX9jSa3MHmd5XXZq3eW5XP3TDXUej6bhmwBR3G8kdLJAMEap2FBturL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45hdAM3omgaiwCjW41MRbGZ8MUJQ4qWSVZ9TiJvenimQHmRhBJDaUxPubXE8Ji1Wk1edN16jyEGFwp4dV3oEvPos",
  "key1": "3kfZdw2gMAY4b6hSV8qZ6BVTzzXDqKZkyuft8Tw2zc6uSZo1FDaZfSqupA7WAywFA63Fhi4d4tpmR6nhRiD5YCUa",
  "key2": "2HrPyD6jvyi4qgvpNNG3GBb4PCqbMn2nH8qHDTD5KbBjBGYbCnWeecY4fGxvtMG26nbDadyT5uP4WrUhRRCKTV9B",
  "key3": "diJLWLunu7tD4AWFxeMCgaMw75y3e2TyTCa9kvFMVHQ6MjGG1wf26Mc9qaXM7PhAmhiR4X5sDc35beHE6JQrprm",
  "key4": "3CzZSTeTQtvxeqhqhgaMyLB64X8aMTAsbSx4jH4zdR1tbaYVYJaHQs9hXcu77jxqf9wXhy3Eq3ow6BGjqjRhdzv",
  "key5": "2kiv5TNcH2V39BhgwdftDEyPvZqpGFYXSgJmkhbhKEwgwmmHpyjo8GjcrQ657VyeiBnmDG4LCL8C9RqA34gXNQwH",
  "key6": "5GmU1DKqfji4TfW3eFn5GbpBSahx5JLNeuYP5UpSKiEVupVTpTxNEcK2Ea7SKnxb2WWHak21ygWPz3NtRAuC2Xdb",
  "key7": "3jASY96TNBYMyoHJLw1kcJDujs8FNKyGzyzfXu9HrXqKt2kTReGTukCkMhEpFATiKfsmdnz62XeU4nvzS8Zdccus",
  "key8": "4yb2MurRpSQBbfPYJTz4EV3eqUQMVhwmteJBs6BgWT839hj7SnVpB59Pq7g4Mwg7HZauhEtMBFhsLkxRkczYTM3J",
  "key9": "65Me8i5TQtmzvpGQwAQyKR8PapCZVfPnczU8VeGbogkme4s25wZ1ff5rNRmXphWQ68o3ign41FJeTLAXXmSYwn9L",
  "key10": "HAWowzPtYW6rgAtwED46oe6GHSmhhK5E3MPUh2dwXoVPrWBu4NMgMMo7NReR9jHumaZSX3DBrhTSdSGMtQbW9dS",
  "key11": "5yUXyjN7dNEGucb4LcfLAbARps4RX1fyxzosxrLEaw7AFj24XHfMMdRfN85zjCCHmmXu5LfgF5a2UWAzNYHG3DQa",
  "key12": "59tR8wmc72KJ2stmnmVDN7bhT5gwTSVNetNo3MRDHUwDHFusCAKg6HpfYf8j5y12SVta8yXQ3Yor8LNEdaJ81phi",
  "key13": "3Fw68vxGVvwYn139puH1HXZYqo7dzVwYJHrKZxQrBPNNNiH9vd6nKBBxZnPWRvDKJ8xroiWSBEKLtpEB8uuPn8Zz",
  "key14": "5t5c8aXNKhp9Vrvpo5uyPuohqxVCcRcMHon9dwXKMsy5o5439UkdpYQYSYEBEp8RWAc65y7d5EALz4iCgjvLKdt9",
  "key15": "2wsEjySW8wvZQ9HLnog4JKhBSsNxm8tBbbYk2fFrDQFUMaBANaGnZYZ5dTiJbJEZkZKTCuUFcTLaVGLZuoUyBnvg",
  "key16": "4K1Yh5fUmJNEPgYvQgceF6hf3J4SXWszUADpJfXKFg32dmqeBLqfxv1SKx8x6BM8K6s66ip3WUphcDwChwPyQfiL",
  "key17": "3ghH6XhKrbmnpydURstQJJgJdbsJeLjFDoxvGFbgoVKJRTbkoUrud5nCwyFPsf1CGdKbKDDtbwwFrQjVgsUHE7wE",
  "key18": "5ZDnLw1NnAtGaz799ttjq5MRyqkX18EEvtkze1XLxKDEGZyyPkNoBkHBF7uwozsk8ZZg6dAW56JMP9tqsKANm2Yu",
  "key19": "5mMito3mwq53kWmr5BnE3quiTeSyjkH9U83JTxtxZEha3xgr374RMSPmop913uYipTtZmJXNcDvcGT5cwxiFxuwR",
  "key20": "3eRk9rKfTiu1yJuCaAi14NvJRnN6SmB7cxkiafTxGcKpgK5sCHtpSCetUXuSSRYpVaqKFAWPrcT6MEn9ZZo7QMud",
  "key21": "3kRaNLriQNHvPPWBLuzj2GuyAiEbV8DWCHPZS53AZLh12yvTVZKWNfvMnBvYJcNMPid5Kj7UdWXyapFzhJfQPyTV",
  "key22": "4cyJghcJi1r98tfExNEmybUTwT28PZLdeCNfhwvhyx2NGMXLqzcuZVkkEnxiJjHK4NFNhaVLVtQFEXExHPWrMQH3",
  "key23": "2571mw5AdiJKR11sr9oFrmqVE2r1hqT4ZvMbS5PGLzoAEnj6TmcP4TcM1TmCXTPgxZe1Mgdd2UuRk3CY5nQPaebw",
  "key24": "Zt2L62x48urB7GqHnvxUfDc73gYAt6mGy4eCXkJrnsTnk4wSFbLdLYbvgj4W6KYZrg4TiHLvkasEzDpdZ4UyQg1",
  "key25": "5XToZBmr35Gp5jTddw9ZtxqE9ZJb9EsyCpnwMYC5NhPDyby7BAiEReU3bzjik77sTJqWbX4jZ9wg9Yf3sxeiDX4F",
  "key26": "2khc54hDhsCZBzFxMRa7wnKv4P8n5tgSd9dpwmSo9xN7MgghuKgDceFe2SCWkLkxFM7AD5P6ZFD9kLMUpguDq8aC",
  "key27": "3ugEygTqyUnFdY5Bk5GtUTecnPLA3S8w61cyEgq7eDJWLe5o982ULNF488VJhngDxNDaRZ8zAvSFh2ESaTbSskit",
  "key28": "3iwGAakL6gHWPbsWyAUGPxYFVBaSqRW1iNHit7imXaHaPvpB93sJDiFjy4o94AKAR1f2376CDScETYBs43nbrbzW",
  "key29": "2wNG8FBeEanWkzQDCBCt3HbYcxvEzL6JRib8dYquoWiuW5haVivj6Tex1nbkVByR5Rs69Cmrp4KmVHBYNVBv2QhY",
  "key30": "5d5EZX6zNx3D6uTvzkUeR91nTJHFVhapvLff2yLj2HkNF4UyzAMVzTEmBWE1Cg2ZhT34uSAyc9jiMdWLYtMDvyxQ",
  "key31": "3bH3LcLCMnsj67BrfrJYgCFYav5Ma1v8tBifa9w9mUBgEMQhjnMK6e5WqRfK9VDTt9vMcQaHAxMdV3jjcFmaNfPL",
  "key32": "2minwTFLmd99qKnadaDRDg6uTM3dCLXe9jx9qZfMgTNE8mhT5mQAgS6JEWkgn5LVHd665qXN7vVUupuLDdm35cMf",
  "key33": "3MpbTCMZxYZ1yxKooghY8a3T1nm3NViYLWiuopg2s5iyKQ6jtTVh8fVuxWtdEoBTENU6vzv285ebUNSsXbUNgA6e",
  "key34": "3SUiM3BGB6Nv3Ui6EAdJK2uEnELSZgK6oHwxNz1PsSpEedMNm7A9MZ31vPUaz2PPh5jVuycskT75aZwdT5iFyqZZ"
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
