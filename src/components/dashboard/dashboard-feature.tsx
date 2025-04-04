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
    "53DsJi8yY4CeqBQHraisq4bLpBQDeBHZoN81qSm5s1wFo3hnHmTxRy2oA8USsDr3rHyXtuEpTfez1FzmTRvZpc1i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kCYa7tBdoVKigd5UmWqs4SxvkR74LQJrskhG3ACcVYvM8Gi4dQKbQZRNAxtpT3snU2AhX7m2tABXbsDKDxHxvtP",
  "key1": "2ZqLBCjhL3CnfsGY99kMKKRQVzoQafBsGfcD8LeM2hoHRvzMns3xxuimJitk5fFSbm73AtPo8fHW2N3fjUGbaera",
  "key2": "2Xvf2nNuebyQ7NPTgRrKw6JEkS2TUbTbxc5Z2FKabH7gCbwPtbMKXcBFdpqNsMcmqfurUNcFW4r41Azr9FXRczX2",
  "key3": "5csE8fE2twWHaV8iSjemkbrX1FFQJBzugo1BscoR6PQ37w6s6D5wyxcvdFh3Jomk2rF233RECWC512zqj1TRpZBF",
  "key4": "qN2soHm9NXuYrbS5ufdpZGZgos9idS5PbwNUTvjyXgLP6uwoBJqKKvBRQjjjVvXujhVFmGsvcPCDgZaRxtNP6ca",
  "key5": "3xLLqv5JbPUa9CDMzTWiVp8ZdBooP3VDY5NJfp4rTDuSkQjNUCZhFVGHUHk1KC4aYgRSoqiGDbbCSpCnSqnFbqWp",
  "key6": "5Adau9cENbvAPsmpnvE348AVTDJTuGb8UBJAs91c3XF1uxYz2F2QkHXMYLhYgemwW5VWPLpjL3u16orQoM4WJg7z",
  "key7": "unzvaz3ZKis6LSEqU1mTquPFsiuebRKVUHK9Ewm9fXj6xX3WqLYUn97U1oT9b2CLRh6nW78GbDDFBJVR1BW7ro1",
  "key8": "26nv4qEuynTYmevyarMJWuh4fhP5YfXbbwYzjDDReDqjXUd7s7tv19VLzAQTDM4TYYRi7FMZMJiU2ibhttRnEs3u",
  "key9": "3cprJ7U481P5UU6MXFVLPA6YvwUkZrstFm18FnYzQQQXBWudUG78fT16QmmJnTyz4onSS46nQCKyPdZikg5NpNYs",
  "key10": "2cKWxwyXQedHRkJV3aWsdma7cpy3cAmRBr3NLEtmawyJfTDBoHpy7gXV39KEZYC4oVSdm81GR7LVPqcQNVNaNNdE",
  "key11": "SVorLqCzw1PGTYV1b8ESe5gVn1k2iVUvNkMz5Md3NXKtY5GMYiw3CYTZzxxpSExjGR4MUWMCqWg6rnCtLsRGtCH",
  "key12": "2qtP2SkkjXyjbTE4bHtZhe4SPzS7eBBRfBVvn4bNQo8MEN5epybnZVCXc3xX7aLUW6bbSDcgxVFvwBQVqGNTXcHD",
  "key13": "5EmZkU185kpMheFa4sTCRMPgCJpMmg77AWupF9Q1DuA4L25k5mq1piBJ2bU7HiNB7BjuWDN97juZNFquvedrud8Z",
  "key14": "2kogC3dDHWR1okjQfqGFTDDagXMpeJ4F2p8gDhmX9zTYhXaHAvwQQbm99N4J3qfyzx5BjVLRttorDCkjq8zAm6VG",
  "key15": "QSnBgvYoMM58wybmGaqwZ5HYPw3ginSc7k2wUPz1fqHCqyq8tLNm8fqrVFgqFqXay6pHc8Z2bgzwr9iiLjMtksA",
  "key16": "3UpiCqZNu8hJMwR3F3pRR3hq2d7Zy3XBVovnC9uPe2BVcdiu34rDeEZK4zzRFFMjMLxTsyvyLN87etLv37NjYtJc",
  "key17": "65QoCWvdLiEXwHTNGsjFMqw4u1fExqAs3qUWF9Ti3nmrsiBrWSoUihqabAPN4cg6CWv9S83v1eYdVoaaLoxsZjG",
  "key18": "4KcDGGTMfwHWN2PVDq4rbEtg387cJKaAdnHF6pMxdJPN6WKfHGS6UuqdBkaQEAt4MRpnF9YULQQjhqnxw9FJEXJj",
  "key19": "2sfx8479REU1BMgNCTXe3dwhppr3G4kkcxrgSiHjUGG7PyUyY4Y9K95kh9w1o3tNr9Nq9qDsAGpvjBYiEQo9GBsu",
  "key20": "46zE3FeVWaiZEMjA4UZu6KeLVRzDPKcKs8sXCUofecaZRU4wctSPP2ynP59WdkdQxPaGDCvsVxeAWWjGFn2mQSup",
  "key21": "37jcFwBpRfLLMVCNJhWAzkZRTqTuoBqp79MqZkmfapSJcMKd4itafQQ5qKQ41jGtrbWQiq9CED5yiHsuEbcJGFeN",
  "key22": "5gTpavRZmS1FCHVUkZ54rf8dBxr3VyGU3V37mCjttnYcaqEVV7eqtcLRcwxszYgoX4djCdJSyQk5G7ELWAU7Lbtu",
  "key23": "5DYqjt4Xiv7DQawQasj1t7gE98KZ2EMyW4LRvrhos7fNu2ndzVbC9QP7qjYhcUEcPzXoy45wpRu5p4ogBSjJGW3G",
  "key24": "CVi4cHLCoahDUwFDvbR7c8Rf95cQvLeWv537FBHvECAAjqfcLejVwPCkRnsbyrp43uhkxgHMPiSZdVM3aC3R3zB",
  "key25": "2kthqBYhejpwZc1ev2ngPGM3ZxueVW4g2GXcuw3q77Gg6dGe82ZEVqmycLGcZyoEvAGTHurVGYebmP7CA9Di6exV",
  "key26": "5hoc9A3uywm2bksUYf6GNkphjFHxEV7mKULAQRM8GY61gF75cNjJ16NT1D8ya2vwLr3yaceJLTmVvUndEK2GDXoJ",
  "key27": "4G1jyMW5cyo8ShE5fGFSb9A1Q6dA5ffcnYyyjn1mQc7LpuezBP5s4HKufWQ9xc2ahXwdhJsYQ4wp18MpgeFpcSAW",
  "key28": "34e6b6XyTQi3PY4cLSocz2ZiygGgbJQZW7opYLnwKTPnc7vKx8MUG9gXtxP2ESia8T8esLFLjiocYz3yJRvitJpF",
  "key29": "6rMcjP2Fvgt2uNEHoRr4rU9NWhzJ8RfdpJAY4u1Akw4N7Tde3fcaFixraoiV2wrADT9W4u8DV3qxSf4zwKBJT4H",
  "key30": "KVb8Emfm56soUc33eCjRGnCaxpgETZfNjypiUt6fsFMrQ8FmFu6UYEvnDY3ksq1RviYt7RyhJ9ZSWtDUiTeWLty",
  "key31": "UwoyKj8bxsyDUiH3bkPSu4eZeTeyQP37tpa4pf7oK266DmeUJevKj9jguEfHzz84CpPYMxoGLU7vSB3TmV4Y4YD",
  "key32": "4QTYtFvwndqn9bKeAPQakw23puKjMy3MubwCuTMffjR8xiuBCxjadbu1cLQ6KNyKV9JLtrMXD45QUq7sBpAi61Zk",
  "key33": "2ZwyXKCcViRzc4GQLivp9ViTeraV4j4FQsUwa5So7YtXjB67bhxMguFsWqwGsNgAyTYvTF7bAzXjeikgo39YpCzq",
  "key34": "4ypWA1v7kgx6YZBSndeXGHHwuQCWaCSipUTgSc12P23TjGdS57EtkPNDi763yrsaW3kku2mkapQvyBRB26viVSvs",
  "key35": "2K5RkyUBtFqMnZyvXY7jfGjFGdVfpE5i2ZJNcfaNW7x8xbvpNsKYRGRuQtLesCMzJbHFgTRAUXurkSHviGvtA7Ly",
  "key36": "syHJrFM6m6pqBHheZ4jEC9NQC5NFFwNQHynB7r5cuYt1zGCQR1RUfNVStmHkExEC3E5srRQgQWVNuGvSY1mb9u8",
  "key37": "a61rMHTzxccor8adfnJyWVPG6juwBEJ8y8sP3gBe665e9soZ13yDv2FnC6oCSNcuywGQKr5kxucKSjbPv5RFqPY",
  "key38": "DShwJdCuJh3icFUaCntKCN26on9xfKsTwDDQ2dYbPBpKMvLaYhvWkswttMERPJNwsvMxVrBwdGmrm9LQptLPpdR",
  "key39": "5MB1BgXAsrss5ZHL6YmGu1xcuCiRPRUpCFUFWbD3jXLLJgUns3dBy9KRtqPGF3pX59T1eKprsYDycYtzCHfDLVca",
  "key40": "Q5V2xZLAnxjKP8uyNEjAQ1yjtAUfsMU1TbGkEyY6Ce49QHVm3vRx5rJr2X2WTPnoLSyPFnhaJWp8w7DsFMh2s2Y",
  "key41": "5qkK1jjpNfGSBi9kewHHGLEPLN88UsmEvmyfdyAW32Ktibm2EwgbdGjLCqmRocGepJP2GD2ZoahpicdHH5VMKDuo",
  "key42": "3yvC57U727kdDYbgQfwsicyn78am5xEBJ9zStXHLMd3pmcmK9raPo7P7sAfq3SDyi2ERY45RcJbgZ3av4ou6cHR1",
  "key43": "4dZDHr2CMLvQXxDTCZuRVMVn8S4Vf7isiLEQrRft3rayGtGGmZrJ317hFQD4e5Ej7LZb5yegfBvH67CggXsSAnDX",
  "key44": "BfbmWxtKJW65PEFipxfnekBcDqp4bhJZNEGwoPQauHsFoTBFGNfUQvQwXNVqWiwsjKEkNsRisAVwSodfMFFvypD",
  "key45": "5cJQRbzEKjLLSQE2LWtAPcsxzUMRS4PbNqEp1YLVdcmNpNfjBFMQ4xmjXBj7sCKnSSqLbXJiwzLebjqj4yEdg9F6",
  "key46": "9pozvgYQpanPB8JyJXTEX1H65o2JDAgdzB8GksaSvkbykSjwMBGTtNYibpEDs49fJrmdTTPzcbQop6v4EzTrDmc"
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
