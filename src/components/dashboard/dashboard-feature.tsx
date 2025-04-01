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
    "2QEcpJABNrtzBLaH1HdGR4sEQd6PvdQmdbycvXSQDrotCoKzCaYDLdzmFzKEUBTYCbdowBicnz4qaB1SCfUXdoDt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zeMhD7AaJMBt4VYjDDiRJepFWjvuVQ8cy3qfuydqML869o9SZxc3skFTLorZJhkJGwegMhRnFUyJiT9ocgUZXzb",
  "key1": "CCxSZd1tsVMqrRKDbfSiGV5eDQRhYn4wZ5GyDV1j8gV6i8h1PRMdYfMHMyoEEEgFoFGbpgc91cdGofbHov4BCDH",
  "key2": "bms3619wwEZTqK5qBRPLYF9X7eVZvXvEn3DiJt9mMpZADdnr8qK63fhLktDKPU1N8AgoLxXaDZdL91fkdoBN8az",
  "key3": "3qaupzcUVDoe6Jz4EWNfcryhDp1zw8oQB7ZXxrUohcxqLpn6RYZFrufqDwmVBov3aV8TbkJrNMGUR4N51dMNuGHB",
  "key4": "2gc9pPhpuCnn1bBShMnRWYWjEyReCBHvae7HE6eStKk9W37pXADt8Ci4FVV3NhRs2kMcLEi3Hb7FrnDEd26UTzR1",
  "key5": "8wp628bcumQ99wMw7EqR7xjxHBzEz5LJxPKQ2G98LGd7fYLroiw5hi7DJtUSu4EYhggxu6JsgHoyxKWs8idL7iU",
  "key6": "bTKcZE742p77pf7LPvDMRPnmbKWC1YvYFg5VmvL5GUZjiqiA8y8ZmDnqwrUvDKLepMTKSCkSsPEakQUKDib87Tv",
  "key7": "3Kp6FkpWnMydoX6rRgr1u4CA44RxKUVjCwWihMuJPi16UDC9qX9cUxPXiLauwEinsEXfKUK92zc44LCPAKb8Y5z5",
  "key8": "5ZrFkgRQpLwBV73kwKuLLHs18VSfApcZ2CduurJYAayuApm4Kg32uudEdFaBTLuiwzAvDSwf38j8zdPBEzFTuC8F",
  "key9": "5GbfDzstztRQE8MyfKKYiuGb2ZH7istkKXf7bQcJs5R1eiCeNDS9goUK4Ju3MCDA4QNkJr384cz5o3xSYWBXSnNJ",
  "key10": "3qBbAdMVCEzV3SWWFcAzxpLRfUuypZcnQ8uDtQnyGirZMBpDGqq3Zot6gRwSsFN8Z7KPqEMKdzQQpSJFWjUxPAWJ",
  "key11": "2GLP9zHC9U7kddFnWbdQSuFU1Y6WBKQzRkHKTjAud8dweBzaCYh6R3GfjSzNn8eWKX8Yi9EbB21JzviZNBVqXFeY",
  "key12": "4sQwR7kJfwoZpeaJAhz1wELes8VGfMEjLtu2het4CqADVxL5TFocokpy75XezFg8yfw91fqweoChM1wk9EqCNjHu",
  "key13": "494Cgu6hUkmE1xQG6xBUqEU9foN77pC5VPZTVrbBfxzGHPEbkCeAVV1MGfzaXHiJwY6p9tqVfZwxUeA6nzmKtNV7",
  "key14": "5qzhkjnvn2kAhMiJDkeMFRfFfKn1gzPCdkP4xEFvHjXpNNjsBtrHDnSu3ugE3Z4T4TiBMKKtn2rZWFnikTuPnnLT",
  "key15": "3am81pnwJBWfPNBCYtUp5PT4SmPBBuVm6tfCzdRS5ChMEogABq7WfHgr29UPwZaacYtwYPZ82DhjpZfJwM2AizBm",
  "key16": "5jzFq5sMZEnvLmDSSVmxtDuh2Gxo1uhmb2h3YMpw1A6Cri2cbSwZYmU4HyNScDzQkCLAvLC6zBvHYPJR6JCcvKPv",
  "key17": "4dBhHwReJZ5iPsXrRkRpJnMaLwbFdcSv2NnRn3Zxb7AYVw8oEq8cjVJaqMJiQiP4NinhPRP7yuJRuW7kbyhYkN54",
  "key18": "uTAXQB18AXth1YoFtETNuLhsKe7D5fz8sLzuRfy8mRjuxPyC63h1MM9AVg5kiHznaN3KFZENfAxKubaLnibo8fj",
  "key19": "2N13jG5FsXeGxjv4vkgZkHszsy6ijbUzT6sL7spuJtRKN7zFXGBurWu3myVVxcNU9yYrTZwq31GmJUzyo5Dqpwh8",
  "key20": "DUJuuyQZkVCBagPQ2AhaX5CWw2ts8SXNnxpadajj2oiB3b91Jx83eQVgwjjaYdGDq1JLDRPK7epHXR3vPiuYycL",
  "key21": "64deRB2bAd5YNibj65J497NwLjUn6G5kKQyQYPeFYBvFVPqUZZ5TQ8rfZpy8P9YJGcLcrNp3C6hcvZ4X4tyG1R9C",
  "key22": "59XhS7dU9DLUtk8rCGwLQG4dc7FZeZqj9Jk8soGyhJxSNmNJP2Ab29HHPSMVwSxaTx4BDSmrxkzC6Vvtot83VLL",
  "key23": "2Qhr4m2rAQBmspDPpKmG29xuTneo45E5EYysrECxF4gzKj8ddV6TJsXFtyUhaxUTjtbocSmQe9tAp428oHUqxgW3",
  "key24": "tBvkN6oPaanU1SgF9q5QjSoNKExqa7i4iSmEuWPnEGYuGQVgbDwxF3CUnxGvgVGnwpYFmLvxCMcuDGE2Sbr6tmX",
  "key25": "4tDGdJ8hqJUauXR4ev8brsCajzc9UicieWCp4iKMs7SZXHbm2eh6Wco7r7fhnSvWWjVxNyBBjQEa5XBgkHwceEJK",
  "key26": "4YkrgphL9Czjdvfei6sjUcBqpPLYCh88w4dTpgyvfMKVnGgSdBa4vtFcmZKkEho3hEB1SDjcKoRrVHWcKHQVWdTH",
  "key27": "Y69cWwnUyZiP2jewLu6KXBKF7cvpGo1GAumqVD26CkZeBPostYwnXbUKfbJ63nfAygmB4nnZFC9dygEswwPW88H",
  "key28": "2PFiwrD5VxT3pgx8v8vpvhEAwkMwJo1jvoYhhXEQjuSYtpnQBKKZEWkNVKhCD8Hejx4zGUMycK9J3x57DAgqB4Vc",
  "key29": "5fKja5DGRBhNMaM415WuSB5yYXNNZMQYMHuzcZZ7qBBV8SULqmew44mdoqUfhghww5Cpgsr1yaPVrs4UEcXKdRQu",
  "key30": "iirvGvEwDP2NKXajPuXE3yx4xM4JU4G2Rzc9JJapywutUcyc3rj9TQCrSBtcm22nULdRSDAspqoNDgPhy1DGBk3",
  "key31": "3hn5bDEFndT6mxRRamF11uKoFTizKcSzeK9MSEMi4EyJgdB2En3Ev4kcV52GUShTbQFrHgxYx8eKiXuyph3ru12U",
  "key32": "2kgRp5SpZwjpFMLaRUmBkshsPZSSLEkgwZHdCfqpW79w6TYBzJYzwuPnb2A5TVPqttmuLbXhGw7K4xWvp7A1HvPQ",
  "key33": "TCtUuBXbaUGhdhD6EJdTgBdhrqHA92ub1DTWrduce4QapuG13sXbME2ouuMmybmcgd6ZMixHtqWp4fbE2v2UhjL",
  "key34": "2AG3GxfxHnCzvTb1r5FAjdYVJUnAHfGZyjorSBDNt57cGa17ZhNPy2Kr3iSzDHodYAA3GqmXbzMaTBtchnWQz274",
  "key35": "c9Gb2qj7KAa64sft7fV1YovD8qjsPEKVgBsCQXHxsx34QuN1V5wfTAHax1dza8eHTz8xvRLe2EMmjztbBDMZM4w",
  "key36": "FQuS8D9MQC6ybaDjfMswocLku5i3H77HgZWR6KLBrTT4WKNH8fbpu8Jo4i5bj1uzKp4GjkcYE2yAenPQUpTGBoB"
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
