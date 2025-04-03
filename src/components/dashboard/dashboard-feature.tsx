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
    "mBB7aem43g2nwJKh1Xr7fFCN3oW2P9hMhuYQcVmQ1h7uQe22N38qEntfTBZWG9gxbhhKCJJf66Ucj1CiGoPNt91"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GoV8hkSb6cwBert2hzA6r6KXrkKyxi4jSAsPJu1HJ5RjoKpcPMuwY7NLF354oEgHU5CiPuboJ9G63LqKiSJP859",
  "key1": "3wjt6GPAn6aH1USsRGgDC8HNpim8Q8bSUzkZzQ8bhorAiugsrYBsM7EosLpALdxdwfVgZ5EWEWgYnssnTTVhTSBH",
  "key2": "4qpxJzMHpNTUaAdQ4X24HvE8izpm682N4NpLa7uZS8Vpk28TCmxTugU3mfmDDMcppFkS8CKVT3RMrXjZRrPu1X6m",
  "key3": "5BnEqEseUeB3jQZHAueTJqqD25vqCXihX5sAswUBwa9sGiRN25xZnAUmGQWX8DfQiGRHMzqvLCvwwLzKrz6CHRBh",
  "key4": "4HJp2u6LDLjGdLaUcyPJgjc3S1PWxDauCFJ1pQ3koczYt8fpkqPgchgAMKUdapKpRavD5EgGnydr3YojV6Asuqv9",
  "key5": "4aTmsAyjQ6KVUWrZngS5WJqHvAnyMHdfKBxw3G7eqJZqAEpQu6o8txhKheK44YMXYSmPztb9VY9sgcSFV6Wn9J3y",
  "key6": "3roeGgsjGArpb7mq39HvoUeGHpJgBPfFmvZoJjp2JyQUTxBXCDB389TcgWNuB58DNvUaTVMViEbBcYzaSzX26fCr",
  "key7": "5xnJ2ptShxYFv8YLcLt7NMaLtxWxDSYbJy98AoksbvJumbPqzEsjRQ22VTTPgF2fTJAZ2gkkJ6yUWVku7iz46RcQ",
  "key8": "5biyBA58rS3HnPrxuYnTndg3c2FHAn2ZTmbEk95m3UdZnSMgFTCLrwBrcmSWpMeEYUPsBrHMxdGFhiXbkfFv3Nxr",
  "key9": "9HHNRUPqTwC6bpmDDqcjrmSWEfTUxkNv2hHfdHdb1ujCzpNQv3jyAczbKr8ns8HotEmvBMar1dH6geS1RzTGvbi",
  "key10": "2Dowh3VD25vuooTrWibz9BKiEPKd6q3FSWNXmdyVWLqehFBeCNmmz39g8TSr2BF1TAEfgF2mK66WHNkChtq2R6XR",
  "key11": "4RDGUYLrDmqwToAbKG1AMcXVnyEbzsFbeNWTnWPNwj1U3rr8HsybUuuXLQv8rXRQN6wXy75VXEZwyrJg9q3KB4fD",
  "key12": "45AnrgfooqyhaZzGgd861p41CCrCyPkTbBt9XtrKmv26kJZq2TEHW1gP7qCcZieXgKEntj5XzxgtB43UpvdeMDj1",
  "key13": "2Abz6raLznS2rgn67C7146dQUgNmB4MpFPgvxpWQvLveXsDQdpd8Ej1AE31C4pihs2uZd4KbdTPQGTjjkMz2iVfz",
  "key14": "4DL37aJYEhABPn1xuK1xxyiksuH2XPLLWStgBhixVqEAEbAzXhX8CubX12DiqNhvvGwCqrNxLXC1tB8ZYSaQWFP2",
  "key15": "2Qj614Up7c3cB9ymezyAdUFcBmyG2mpovnRUAxB5cJv1NK6urEe8cbJCT9a9N9HM8juFgsGFZzGB7UK2q4wabSWn",
  "key16": "2n89ND6Cnc65uHkG57Ayw9Ex37W51J7mgoBpe47cehb9cmERE2TnhTtZTJ8xEsPdbfxuPbnJkJPBcrsQuVs8NYDZ",
  "key17": "2vJseC2TuExmirK65o6gLxB52pTyuU61D2cp4XnHiifiwBF2wLYQMhojFTHTnVBTLW3imRv8gJsvzEiGqViVDax5",
  "key18": "561eEEmRfSXqwE8WuKF49bFcAYZqbTUrZTu6t3Chm9NZjDzMDzWkYsjtuY8UicMCA97jVmgbUNxKm8NHbxiP3DAs",
  "key19": "KwK34tpP1PMZRWJ6DkU4ZMDByVnE3rPYoxH4io1N6cnzcwTfsmVxudjDpHDEHGTpi7ZEZ3sJvtLK4aXsbjg1oiw",
  "key20": "5NkjDXV6c5KDbHCfGYNEanECPqAg2YwyUwRnc3hdW6LY98e8irA16SH96uHk3oipoQeSgYx67ofLNh3M22QQohVU",
  "key21": "3Bz3xMTeVjP3UKWvoQzHMd2am4u9fQzWuMaQFMVd8U3n4wY4wVkXSKPGCXnqUeEqvDwXx7eQaLCfDkqkAocouhan",
  "key22": "xfbppk3jEcgHofiYbr1wmghsjXwHYEUabQEghwdhQKivdEp2QLiRrN6gwevqrBpmFAiFzLRuBgbuTJogbuW2RpQ",
  "key23": "2PzqpsR2RaoreNSVQGpNA9Y77CUhUXgtXXkRWCAoGTZFwG4CnZHEdc7bvn6RYJbYg9Jra6JbeBCZH6c5LU1oWPyu",
  "key24": "645SqtG1vnbVYJVqjfi6fk9MGYPLoQSfeARLiqVQ5a59FAszSGeuf73DmfziiSwHf4tuABjMGb6gFBPgBLfvBvjB",
  "key25": "278xuAJw86XrmYLJiZp7nBKo12K7Lrm6QDQ35dCUSJXg2gmirkEC2YpLun67DaZyw1wDRBETmgH4WEArrt4Z9ubg",
  "key26": "5jaTfq92yPRvYCWHJKWv7eJn4sw2VZnkzDaZSwDiEAWp8zwRxaeJpgNruQAvpURB55zwCFH3DMdV7opAMxJ4Nbxh",
  "key27": "4ZrgtipFus1Z91DybQ7Sf2jWAucAs1UPkr9bo9dPzriDC6sHZ2F4c573ZZhYL3j9TJu5nEwXvbhscZWdv1dzphuD",
  "key28": "hazQtmpjddkqaPFL6q1TqZJQijWCdG9mVRsFu2xoxYn5JReqYYMnK17mua6E2SCoz9omodSx8Q8QSD5KKFv6RLo",
  "key29": "2krQfEpG8LW3qyrKRyVAinFebSimP8uDhpCgpLJXwoswZb11ERN9a2FbCKJk6SnfEnZRiJrrBugsTD77kUEF3Hbd",
  "key30": "5U4rBEaioWdP9gwiwaLmBNCatEq3MZhnh12QhifoPchNo6V3QWBidaW7SPFWu4zgYxYSDN35FHdVXGxktiB5Q6TG",
  "key31": "3aLjPuVs1hidpPWarvq2JkBmzHxC2EVUQ5YhQBfzJex1iuvuaEDtzBLH5RCAq6TzFXKS2zLVdftE3DH8Ryy9iDYG",
  "key32": "4GXTawNcTGCjjmjsedQ7Sz5kEQJKx5FTBH5NtQyKhiU5FB5CmcoyHn9ksRHpxa4BqEQj7zjvFoRiWfbyvzeNxU5K",
  "key33": "27x1h5eZdwGddY3eu3LoAqzuJrMWMBGGCxZMKgpQJE83SwQtcTenuvC6Hwo87XqH1ZeT8nEJED4H9n9V38J5nfYq",
  "key34": "5pJH2z2CySg5tobhB2Zqz6VqaKT5gj3s2F7mZ5iYocdZDwLks9phR97xT9XPUDqb5nTM98eB3ooKiTPn7Uku3WFV",
  "key35": "42Ab47K1cVRVXHZTx2cBReRYtmh5oge6zXoBFa9yS4KHcFMjiqWMfHcbkVndZxpZVSAQkZNzT1aNTsXeN16nduVw",
  "key36": "PYisNFmi8cL4cczTktkap1PaoDJnC6LeBaJKL9uGRRqNFyKWYuFcC12Dd6zmBiQCYQj2D88b2WbesPujbCExgpw",
  "key37": "26pAyQXSC1WvP9iR5oaDFASZxVR3Mivy31858sYxDfMjcBud6LdbUWDCdPhpwREX41eBtdA2LxeL86VvSTRLLjpr"
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
