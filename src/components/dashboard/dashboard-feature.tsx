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
    "3MDiyANWAe8YgBgyd4WKrGctyg4i4hvnfJVFqBctv26nXs14k6VipRN8RbLyGSr5BbAJbZeJb3dp45w53KqE9Usz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FPVw4LY9qeeBYJcG9MzNbYCEM1hqzGAATC6BDg64AyTmsqMuiWdbDqthZnVxCV51ycSyBQu4dmfXYbx5ifi9bH9",
  "key1": "263AqWQfgAySvycsYUrRZGqdBDzopGqQ47a5qXqJn6YFyfWeXxjMV7kLV3aUnmBgbzsWqvr5oP68maWLAAEvQw84",
  "key2": "5nVr5QoovMbqGpin7edmXPKHv3Q3AXtahuW81fqVsbtd9uLiwG21WGxmmdZ4DYNBaPrqaSbkNttN4j2sxcfvukT1",
  "key3": "2hyAjN9MD32cfCduggoFteTdn3ZmEryj8hdJYrBTtnXUKPJ4P4yVmbKNjwJk4MFjjiXxr4At2goZBPwLcuGfpYtA",
  "key4": "2CTNsbXhzpGNgFrmj6fRXrsTyuqYzx9gtqbcG2tn52D8x8KLgq6qceMTLLArwysWCLPvTbMtjrNjadqZJjTRtAby",
  "key5": "3Hj564E5Brr9j42GtxabHbscBKyZZ3Qtbq2aEFzQttM8gjYUbzPva73EX6UhiCXfbttBEKGLCLiVzReRbppCpJTd",
  "key6": "2MHEb9GXMaxHce1j2mMJF6wKViRz6DyyK1mUY8eUtKWhRsotGXxCWd1nkx7pBiiooqYYhj6BTUcpcHVCiWsSvKaT",
  "key7": "3hRVCTeozgkUkdcHBKcGx2Fv1uogcchuZUCk7Ei2tyFZmsU38QK4B1zMXniwnn8wve41a11UEnVtNjovqrcRsPon",
  "key8": "5xUQ5PaLgN4RpebRrNZY1h1FpgE5E6tjRefLDpUurkJkBWMzwdW5KtyKAmEGMRhYZ7iqSr73R1FyRCLRHXEJ9CWw",
  "key9": "3BxDKo4uYPFrSPh1aTUBzucgm2NLcTLBQtoPML3tfFxqqQv2EAfY4cbJsGPpqEMJvLm11WoaMGnn6X6s9opzhyqg",
  "key10": "4L86cnfrAdVJ7B5uDAnyXRvVahwfZmziafaiSAuEuCJ8m9M4JmwD2bUphV52wjetV3wV7txr2nKGNPt9zqpB6u6z",
  "key11": "hDmaxqqSiAYdXqwyHGXcHWpe4FyhEnyKpTDX8K3DzxJqPsM5Y53AXaK4STeg8hjj1fe4KuHCr6gaQYLNL8ww3H4",
  "key12": "4tuSVfC45qmSmTaT34RVWuNLQsyDHrTMrkXA3akgM9R8gFwiiCs3pF4hehv2PsuqBLGRWgRLHGRrF8yBRirEMSr",
  "key13": "Fj4gssQUp8NaUB1iMpUhuTG9j6qLfiNhvnasEjtGpb2kWQRyngnRjg2cnKDVc2BtQqjRHBXiSNSzRcK4kGCYp1b",
  "key14": "5BBMg3MtFvHqt7DVhnYTC2rfL6vuRr8gMYYBewXPEXWtfwsVathTxn2NAqCaP5dTDTDnyq7Ka7MKV8AFaoWT6xdM",
  "key15": "2MskZdtdFbQzprn795xBpxDj1RMDJatuYb66nQWhTtxFKPwp6MY6EU7Jt7VqKkaXFX1D7BFi1oAj3pHhGuhDZLSC",
  "key16": "4KMXLHC9uVEJRxUk4tTtJ61L8GQR9DEEJC131bD7NoosfhFcwJmVXAfYdE2ZUXbNKz7e3N5pfbcKv9jDRUEvrYga",
  "key17": "5GSEQcj9juM8eRYvebQ4KBNCCGENTwQu5Fuif7noNuuM9MePh5i54Jhn67Vjc9mmMYaWe98smYUrSjRPzdAzJL1K",
  "key18": "4hhSMKxtF7pb3qXGd2sCEcWwqB1y1Vu8hoVSCGiRQEJPh97QJnikmh6qD72JweHp9d1ZsxVrxRhQvK6Gw7Roxdgm",
  "key19": "7vNNrJewjByyPghr2osVqmeYGNAJPbbZqKWGqQMAMzAs96tL17aerfQCVyG9Rxvck9w3pC8MQmaNbuswxReUomE",
  "key20": "5KLoz91SbgbPEsaefN6Zg1UnvdLgJDZ2yBmNmbogFWkznPUcnbTidsqZARqW1t4P5UnY7g3U9d1pVBJTZAAYJRnx",
  "key21": "5UAojKTmvkj3VihNdjKVf38fxRjVhdACCsjQ9Sw2AuTHZKTbyTmdeN7MqBW5i8wr8NYWQTnfqVLLm6ws3JMb7T3f",
  "key22": "4u7ip7oGju2BFty92RYwi5nnixKZKVqUa9d9pFzH62xePMuUqb1fJF9rcRSgK5QYhPWDXzkiTDMSds6sGcUS8hDr",
  "key23": "4NJaTtRtfPEsuwmVu5bd1grMBYeJtYMKjf81XoCwnqzvFa4pTrrZHdLQn3a7G6sSjnEJwo2NVk9jAtdGiX2KrQE",
  "key24": "2mtyBdEd1Ui3K8xaZTm5pZebLqaoJhkd8hscsFGyqa7qNmRsf5mhXyPXQRkkWhZHgYmAR7ca4GRd8HNx1kFsrzzi",
  "key25": "2ox5NfRF5T6p6GApunZHVPXg9kBsxgzrYPMu7gNQyRqYPh83krcR79vGTDgJcQdSfebp6JDvFFwct7JBB7fVt5s2",
  "key26": "5G195JRBDcJyxXmEYk3CQGoLvxW1vwDzZGkyWBJ7L4ajQQ15RUfuaJe3UWxxGx19ANkh6MipZ1gcnQPUBvBXnpWR",
  "key27": "tBAyMMmCMzAtLxmFWUT44ZZxxRhLKuLWhWHdUN8TpDBvm8vpURuyTHhnaSu81Ehhyj1oDh3uv9gZcAp1vqFWTHm",
  "key28": "HWqoAVMLo7mzB3sz74wYTZTQKd7YKdAems26pmDrHuZTNpWk37eMUyr9xXZhQucdHf2RgtfHZACUaAiK3LuBq1Q",
  "key29": "54AZZf4nksk5xSUxEzEVHQ9WALe3yrMXRYUKYoaCTYoA2qoCdpkyUxNUFA13h5zU7HzAhcDXgbu31xPNvXTrNxJt",
  "key30": "2ctBRBdc3HeLaqPHtzy9gSaG8g1MnjsRX1WC11m4hEJ2GtiRrT9PHaXA5g24AgvX8nJoZwE117N9arqMsbNtG5LM",
  "key31": "2zMyHcR2zQm597TtFvrNKSU9GNbxcAaTirqs9PMjAswpR8ihv6GmvevDxibE8fzEmBYEPBWbUELwb3qyV9hmAHEw",
  "key32": "4MdvLFPdyoi5cMC2fpymCSwg4YtoBaUqqjYFNqjFS9cDgxMGaZUFb6AaQhCJsmQk9VjBsJmY4kkM8apTD4yu7drh"
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
