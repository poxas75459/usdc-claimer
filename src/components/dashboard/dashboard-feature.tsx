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
    "364b942ai8bMRKnnot9x3d6wYK8Yuc1FTVoZ2sf6kwuLyKeUsZZdhKDp2CmQMCgWFNn1h5YqS1Wf34JPQA7RnqR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L8DaVCtNo2GwEE9XwZDDDjALpuoBcxqtCtcxQ2t5PAKRMB4CqMeB5UKFpb45iHa2JTSUskj8gQ8aQvgw7Us89bT",
  "key1": "4n7XRSdkW4mA88G3HBY6MUQXpftCpKpAromTBBqY6m5ibNSWPfZvWByNXAgnwcedfSSJ7Yp4fPMxykkYgAaprVzc",
  "key2": "5o33y8apvqKPuLBUWsTZXJykqK6gpYjmdn4FcfohY62wHCjKkQc3CdkzgLXv8un9W5snDbSMYxyJMXj28BpHgDgk",
  "key3": "3iyEuDM5EVM6UJQVWrUvmGD5SrqBZ7Pg4UqArgBd8aqckz8QRvkh1EPmx6BJavWb5Z6kNgZud81iGdHAMh71ubVt",
  "key4": "4BG7gnELKWeu6zpzi8rWC2eQ4pFo6XAWmfkKk2wcB7d22wDBXAieJ8BeEeNtuzzobVnJqymZdqFzZtvLEkXTmWLt",
  "key5": "4VcWEtNE4NVcfyU6s4E6q44m3dcykMsvpPqhX8AMAbkuj9pjFuEYFPYSTzc6mNNZxUpg9bMwiFtTS3dDTmCrJLNh",
  "key6": "5A3jGDNJ7BPf5QFHqpsbkahuBVES4yjELRCR4e7fttXLtHA6qgmQhDND1MP6hRxtxAzNhQgSrKfeReqYGyWsP752",
  "key7": "3tW3p4afVUDFkf3DNAbR6GVaniSpJqYwJdv7YM6vgi7XV3xzXCsfKCH1QSqm6Ejn431LdMAAaYpu7SxUZa6sXVyX",
  "key8": "3TfgwHn8EwUMNrUjLkaZZJkmd2Aw3426EQYsarvVVYf1hSY2wUhhLEuqoPvsCJ6oewkMR2rCKZmcYsQ5gXEQb4xV",
  "key9": "MP9jLPAUMHGrHSS7CXXGeZQEDoniogGoHpBTQaoah1FXMi2eounFFSvXRNcgqam9R2BcQtADVPYTz89jRsax23K",
  "key10": "2qzenuY2avBqKA44xBuibZAHqSwm196RwubQd2fWYFKHLPJ44DtdciL6jSn7rDLZS2HNx3MMvqWpUH7fTCUjQVPe",
  "key11": "4PRSahjQckuPGv2a9a2qf3DzmKVx42oSyQgxKJiYubgavphtc8TThNE6wGAbyLdwA2dUqZLbMwqsKEkoXPoJ1A7m",
  "key12": "4uEdktSTQb8wxhBrcDCF7JesRvwu6nnX5ZZiftUiT58sKPfGmhwbYo5mnP7fkVLW4zhche5QjpP2dj9m1Rcsm9Ew",
  "key13": "5oXvQ4n5DGAom7XAZ5f1FH7qGEMHBv9K8wvzTHem5XkHezueoGu1TKz9xcU7qE22dgzngeaJeepX6Nwz4EHxwqQY",
  "key14": "pGGUZ6M8XpuSC9pYnbY6na9DgUx5Hj1ApUn97nu5kGkyMCcdyFrDvMkMbwyi8jdrPBcUDUWmqNjCcqh5yQedCHN",
  "key15": "2FFi8akosdnbbR7wC31sSLKoAfYpzPgs146aRewrDS5qhWamYnmUSpyFsAhqJK9ZGF2TXBYeg8woDdzgfqDwStZj",
  "key16": "64DHphjz98EXNzj2CdChNoVqH5bGzLK3roNh46mQZmyUvJKfnYELvE8t3hfjYPcKXyJBKkh2LmanY16wBZDvzhkw",
  "key17": "owyhEjtPqNLmLtkrunKbgHgsJ9D3t9XF96kSjKQZtYnkjg5ieX7J6zEafQC7Z1seJkmAcjnBHRBcfZSKbsFwtgi",
  "key18": "61QfUTUcn5scGQdEg1WYeb33pbTHYNFp7Bg7Ynb3KkR8v1qPNesQZTx6ktAqBTLabGJ1TNRBpzW6gQJvnYTr8kiZ",
  "key19": "3Ln3zKUUEwf6X3oj9fCv7QRTTShnNF1gQfHCYHQUU5Aqhzd241aCuxAXWWRK3LVZPFKBUS7vpVHvAWyEinnavC7b",
  "key20": "4PHm4eiavvKvhFqThexm4vgGTreuzQF79jc5UNpwsJbCWYrmKnygK1R8dKHGg5BVpJpvGHyZrsGnY8WxF2dUw2vu",
  "key21": "3H33UJqu6QCHFjRauprBJBBwZC7QAsuayaP5KKZWeseZgbuDUVN21zc1TtHHouLcj8Qeg72F3L3Po7TNGYL287dc",
  "key22": "67B8THzemABt8hwUEf2Gr5HiVCtqvb3vT6PShyvMhFY3P31Li6gRNCQYY2pC4S5nqdRNwoyuc7d98Q1BA6rUeUR9",
  "key23": "3qMmSiowMLEeLkX4DReCMvQB5MZtyiQJfToZEJeaPhKcLZpQQJixAunmXio4oigVoG5mGEt8jx1Pvmzq5gLn7X3T",
  "key24": "5bBYeFVvEjStjun2t4pCaZQGoUmr7kYnELXJ41hdSrW94UEcnxcAXnDYvTgrqQj3Eb6rPS5Ud4KqmSFvpnnwsLXZ",
  "key25": "4q1TvdjbXAmohULX8tG6iCA4v3MUMEuLLknCcvCXGNeDxG2QvUgvGnQ6xdksg4N6NM8euPRxWwNaEN5H6bow8de2",
  "key26": "2wkgRq8EKDP2LGy3uzppwEaPVPnPwKLda17pXVhpdwZqsgvPJUHrcwcXdqW9621Kbuh94cW9Buu87zGe4gvdq7jN",
  "key27": "3K4MgXoicu37ySPTrUQCby2uZX3w8kLuqaYtQzj43JK7CjdBeAmg7xbqKwVY72xgaSp3EMzAyVS7GN3LPZv2Z4vX",
  "key28": "Uc9nRtG2pni6Z4TSyXzPLEZFVgFbL1pCCr9mFAmhxMUwiSJkJNnkHLZs1Zr8TAW7xGF4m5SF1yKYw6qaEDjJ3Aq",
  "key29": "6fH7qWxqPmRZnYZrLnbZDd3JekHZn5vFPW9ZRikc6r7tKRsXALjNNLworPkFaRazL3ajYDSPFHwoMLxpjuG7KHD",
  "key30": "3tSnWSbyn7CVGmuLaZ2HYMYU5r2cEKk2Bhh9e8DEiFfSJ7EbWHSwq3mphctnDCUwjfbEtn1dium5CjmBVJ7oUiaQ",
  "key31": "2xrLcF6sgZbJ6Y4ZvkdQPoFVsaqkRMX7i1aNpHM9cfzz2W7MYzF1Gg1zGRp6k2UXQQzjv6H85cTWhGktMwiiHws9",
  "key32": "4RuJ7eXKZWaoaQ6txkoLep1oA35j3p6udrCaRonr84fuhD3rywwvTVvvfzjXw3YWFEVpgD3ThdBKr2ido5YWuh1q",
  "key33": "2UbaDFByVXodco1VVw2Nced4G5XGkMUxH77o8qeDK4MWmBGjGdDMeZeSxnVFXzHTCNdc3zg8cdHdZg7A62vLBmMD",
  "key34": "3pGRgHznA9REJm1yDomMy1qBQZgJiDd8vVUg2mcsjs2J8n9kXrxoqRyMvASEqVEdP7V3YBrUtRmHPR6JgPnJarCk",
  "key35": "4Jpnn8t6PhqpeVPK3J5tDszreESzyRdtPKTBquzzGKNxbr9YAyb89fxELfsXUFnFVNXojd63kHf6uhnc9K3WEXJL",
  "key36": "5NJyoZseaQZJRP79w5r4JwDajMRySWvey833n1k3aMenaBJEfvLvnxE2AfnmawURmZegszB4DdPWXCfgHvyqU6E8",
  "key37": "3xvRbTCn2YbDkNEkzg7txmYV8KkSBgAoRD9sBMjnDMbtJdWqcDLB5hKrPjvqFVVni6eGTSWFtCsEAdQWpc5kyHu4",
  "key38": "4sUSUmN4P7oB52jzdPy41Vc43o2tt8dbQCtvxr9MEKViv1Zv8RB2J3Eb6mTWKLJBy5Ray2Ldr5hYbLpAn4rj1Qv2",
  "key39": "31KiuWBhv91U58z6VjVRAV2GEcJzJAEmnLtWvLVmedmgiLQuRRFgZ6XYQexn5dRzZfjD5VztjnhfGT7iZuMGgPW",
  "key40": "5rmAAnE9gwbd2HM8YJTZ5bBNkfYSanys5mkWcy2EQfKvaLJNknLnHnSfWDoHkU795uEGTf6h9qWjWXD6HUKZsDmD",
  "key41": "5DQ8UgCjNt9PSrW1ksEY69UUe4KyucEHRMYPVeizxTW1EFtgHvSAtCaKDuaFmnRqYnkaXpvKFT3mhNeRQt2M6J8L",
  "key42": "5mJWoaURjQNQdjg8FuhKy9R45tG3j5LXXM3miFLugvYFZPiWci2GFFjC6u4ja46mCgfTgSV78LD5iXRgSCce8CQE",
  "key43": "4SEMTp6RXRaP12fFuBEYNWTSSrVdnK4SRmwvNrJ3BvCdeHncmdSLHxnYKVb4FJepzBbjWBWwnQBE267qHqjr9jrC",
  "key44": "2T8Yo4DJfcBjHhrXhSNfRmgdmJLKRPeorkekxJAQ8VKWwuVVi3X37qAg6tiasYZwu4xVS9PsDWjcVMo91s8mLSC1",
  "key45": "35sKKWxmijWfjeimfkwxrF95onFWZQTRb8bYkULHspg3WaAbSVq11aFDdPqz5A1EHMZTnq5erMrVMrGX36xQUC6h"
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
