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
    "F4foZKr6vCxzJkGN1vjrATNoYPQvQf1FobKoXodSjybeWiT2ngoLDo5131Lv1WwmKQLgQuWLY29yCnHQXggnsJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kNtzguZjAtab5seSdCakFPjZwAd8dZsysydXkxP2Y3TZpe7XZqgEaMbkwNnzUGn4vYLHY5xnQCeyDLnBL88NWFY",
  "key1": "FdcggNLUXLWgw9eQ263HBJjs4r9eV1mDysRWHxNMnzBB2hB8L1KyNYrdPRB5Ui7hZe5vz68DctrpNwfSr2LSYwd",
  "key2": "5L6v3TNXykRKbAS2W13ZAJ7R11jLtdiiuhsa6qBQWwiRECdSjh2UApnr1E5B9Sgrz7qnYD8qqYmknnVHUUMcUtg7",
  "key3": "5D3nuAVgQjzYr38Leund222oqZpYKXQDvcL1R1MdMTfyi5QT4FBAn6FFNf3gN9F57NfYLsoCgBd1qJ44fbmSo5MA",
  "key4": "3N1eGYsQcvYJvyvMw3BriX1Bw91sQk1RBJYVxNSUBZ1LNscdnXemrph86pAk8gxXxnTqBaRUa4c2w7ty6xcuBVCX",
  "key5": "4TSrcGSUr4nR91Nf6XHNeDo8YapFg5xJBSk1dFrvphnUVVYW1QkBR7WKGh4Kfrt6UMKtS3RCb31LFZvZYDtvxiyy",
  "key6": "2PyARjVfpfLsWhMMmzLWnXs68k6uq12qPywpmmHDsmKF395qGFJmsjxyN8ine7p52uBWQQgJCA2WWWSbUSHKS2En",
  "key7": "tA65hAPhUQvsvXoahjJzs9H6jBypz5EWZ7YcUyoJryu6Xi9irXSMS9sgRScxRhbm514sZcraAVsafDkMHmogt9j",
  "key8": "2R21bQdxaf6RRTExd1gJfSH7A6iRzUKSJrymrvCT54kJ9PPuaR1BmGj1Cjp79ADi85LvYd6Xo4mjVxhFSkfqYdKS",
  "key9": "5ZhsugWV61J3xCpkYkQ8Bi284Rq3yqAwPqc5xVxfphdZcoevQDxnnuEo1DtRzs4BXLpnETPpUvwQWLGTMp3guHpz",
  "key10": "38vtFGgaBLT3jQF2TMmHxik8khNNgKtPtNRhPvCEXXZtSA8a55sYxQVajuKCdn6KPkf4GNwm7HXfQhMzpnQExXN9",
  "key11": "5oGBMUE58mFoBTsp54836SuWgGS8ujRFYQDcRYJ1fuKJecjj5JqeY4SemtjzXPL5j7HGASPMQXesSd2Zz9Prg9mT",
  "key12": "5RKXMtMbHDemfLWsUwu8opMEFLDQeESE1vdEw7W15UZj5zcFFV7eXj5Sj4vBxo55eiC5RhTqiM9PXUSVT4zMh8aL",
  "key13": "2TZfK61VvwVNQ62W5YAtfqzNe5Hje77h1QVArwoNMykpuFs5d4VL6kaSFvytWFEa98pf9CooiRprxEGq3W2ery8Y",
  "key14": "33isjJHZT84KKgKf6DjhD2eKCzEkdGvg2Mr1eedbACbnEHe7EW4LZTGYMeMkR71oxLL5GBhGmrH2qjsG1x4ixFvx",
  "key15": "5mwMUVLUfJHaWdrU7agnZtxysmKNKVfU3UJYqqfHwNw6VX2Hri6HtTxXcCQ3peUuhaJFHchv9oBsgZpMn2hDEE8z",
  "key16": "3pupQqgqZKXKGsBhi6R1hxMDLrj7muKhYtikrVo1oahEgRmEbMNzemy4cEt51aVq976tyB6Lj6UxYyYJFiLVVnrv",
  "key17": "43YXTBau2kn4gkLwYFzV4Fnj7CMq4oMrPq3j5PSEnaaAu12owYXf22h5E49LjChS2ozuPDeUJ2pVfBn4zVEnp4YC",
  "key18": "3ibkZqPrgD6EFdhtCJGGQQgqCpFgj2Pm3fpsoHYb447N3QSDbpKV9a3gA48mZkjEQS6KovUmW3DNHB84MwMvSHsh",
  "key19": "4mXGU2XcPHc6JvyiC6TAabsyiEULV2ELMneF78o4fMWnfR5gv31AcUN72Q6Gz6Wu6uycybehj3PhcsyzKetLwBFs",
  "key20": "4JCxw49GRwCXa2ayn8pEgiQpyPD1AwvtAAuvUgr6sqb25B7nHtSFrsWnNc15hsRaGvpEWzwWXQkUmu74nQDoBkdq",
  "key21": "2Z51xt6d9bEbgAhByMHfNT1JTA5VFA73RUNApggT18Lwub2GTigoCT45w22PLgHzdZG2smMs3Sn338DKREhtPdsF",
  "key22": "67qC3y5FRefqLG5DmtDowMJjvkv6ctYGWsULjohMvh1feJmd9f7bSZdfM4V6Wf49TMPu5kTXnkDRcM87MKDscnB3",
  "key23": "aS4N3n21V75CUntmaJc6LPJk1TC1LRbZHCe5WGsqc1EbyCdXanot9v1zUsMNk7sQMRN1eiVFeSwqt6mxEPy9fyj",
  "key24": "31WvUVfsobaazdM3pSu8MDRqyUrrPr4cQgWYtiKKi6hMxraUb8hKbi1J69vuxhFf8k2CewDjiU8miYnrKyatxCPR",
  "key25": "2dEMb3oSX12wo8cRRoMZQHjBG2azquUSeryTFdXPmmid8j1v3XrmgLB85cdb3Peu912YvLiJcuXmrX5wYZquceHf",
  "key26": "2zpEPsYM7SZ9RcnpuNyRLpVhmFbGWeRi86wizrF3KVtvfvmRAErAYWwqHLfcpzUnvEkZYZXsvmrMCZjQDnoWNNva",
  "key27": "pwV4k7kcUj5pH85oeRUaX8HpJA1xtKvGVY3qXqPL6NEVFriMX1ip88BsRE2qumQycbMJkw7v7as9U3jKwzTXyJz",
  "key28": "3vNvYQ3HHCEnBW14gmp7PFg7pFrFZAcq27yFh4LbiYiJEALUELyVjvdv9BH9qGjTdgpcPe4wupmy23cb2SVSgVaq",
  "key29": "4iZ4FEKmzugu5hHMmWrsPuZjnygyxp46tSZK1ptrqg27bySQaZ6rcXJBaWpF8Y5G8x44omYM4sEjjyiyrR37p4wd",
  "key30": "2VdcrW94fSWHAAKC8B99VZGATZevGvfd3xi9PEvReYcUHruvbp2J8UsFfQVxbgBx72SJzUYdD1CBgDLaLTQ2qvye",
  "key31": "4Bhj34FAufi44CtNa7BpaNVRQs6FXc1C6KiKvzFBy2Tkc4ASTw7fTN6ah21jnLQy7oAcJNzdPEnufXWjJ1PbNq9r",
  "key32": "4cyJFGTLzrkbVrntikyrBKNXXDRPfeaV1tBjT2Y7LFkcXFJz8aikFJfxxjAvUj7c7MzkBwmvGUAHJrWXb7x8Z7sU",
  "key33": "5bpNFw6CDBrHcFnAsG3QC1mhF49XERdjyTfYDwLCcZJ8PMov3N63gRto2Sj9m1fb8i5P9GwEQ9GztAbyqnjwYcNA",
  "key34": "XMQmVcrQon34FA87CHg6imJ7BxxTeEZ9YKq5egGj24FKeR7ypqKTjkeyKeamkzEfT9pw3AsxSuu4BeUwbr9RJcZ",
  "key35": "3D5QwDvoTfX6j8vBHj6hMvLUJZ12GndwR4mFB7uygLbhX9Bw7HXMkTyXYMNojc7WAaeDDpQ2NpT6yAtVzYXtyQjG",
  "key36": "5M565uY7kn4JKn8e3RSA4mg7KEPiuZYuUqhPMjBD4nGZSdy4fSDm9iyiovt3f5uGYkmUVJNfJCyNn53Znt18Mc7Y",
  "key37": "4GBRKy1gBY1cGi7QVdcrZ7XWtPfu8hBLFY8kS1RSqfNVugghcE9chSP1eodM62sHnqXwtfuYcomEGeAAebVAWCeq",
  "key38": "3PLdx8sLbXKeeikAD8MNorgKBBhAiuYQdjd1WtcTGqNS7hV19uH54QPAmdmQ9Q51CLVKyFMFtS3ZuLmoeNQMM1mT",
  "key39": "4KGT1crhMtCkabAMdd4GdThST2KkVPRLyr9xjFLKDi1K8Ncg8hDYVHAMY5FeKCGVJiLLkzLhcLnw5mmKboekPAGs",
  "key40": "puHh34Ub7H3j7zycibjRCr7ABdCEVUoaEV8mjvQxtVmozR1LsdPtJrVXCV235zmEfHh9XFMWdMwJg9JVr9DeJSn",
  "key41": "2b643TD2AEFpQDn21M8jVSMiMd1PDAqKQkssLFFxtDASjiQm6x5AG6pkF8V4cvz7AQubDUmZYU7bBjCrWoC8UNgp",
  "key42": "44GYaA3vye7oJnSoMwaegH5AS1z7CNnr93S6Kwduqm9SYi5pC7zerNx4hb9zWPatuBYgNmTZusXr2ADXy2EcgWyJ",
  "key43": "uzGLZv7zQr1JoqYWYp8nF7RZg3WUNw2UhszHRzqLvY83rdNUeDnCbeyPARwinhVRN2yeW3chFMoK5FPKY3X2qUw",
  "key44": "43DVSEQZgMPtMouPnb6aspcMetkBX3fX6MnqjNVvd6hWmELsr7FTTDhPSvDBdJ4fUV6jk2ZWvCnULuCzF5Y76dAJ",
  "key45": "2N5FD5pnBsYNShkeYZHWANdurAnoRP4mv7V2HqCmtm9sfKiaSTg8vcvKpedSxKi1svqmJhCNoZADH1HXgAp6u4qa",
  "key46": "4D4iySvYSa6S1rmxTM7g61i8YmoAgA24NLYoG82zCqgxmL5FgpmUqbaTjCZa2ESZnqTPxgnbSUDwFSvgTQB78R2B",
  "key47": "5rg9Pgd9jdX1yeMTpzFErzLmhX4gVvbckxLiYmMkRyCfUdk636VV42WeVw429AzrcjvAcMwQJdxF5k4VH7rYJXs2",
  "key48": "3uvgxYe1NMZofdLasXSXTDNFSyoKEtRBb8F3ZuKntVpmYG7TEmuf8uaXRixfL5DMrui4AiRi36hoHZFPBeJkpnaB"
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
