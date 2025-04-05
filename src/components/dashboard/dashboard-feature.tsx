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
    "59w2QTcZaPdxQW3y1amwMVMjYkUA28iFaviWKDCGEvJHAWwH4V5RtbY7t4ZGQRwZqxacr6T4BdvBsUroruDkwbWy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52up5kAmS5PuVCmCYXK7AyeQ5w9Y5PE6LMQaZDJbqQx6ZthKTksEHCSdNPWRUwmbTA8cAemJoY5fdwgBWZ9BEzKy",
  "key1": "2mdurzTJnTRgALuRSyPRDa2YiuzM56zCKa3v3ZmdiWnXqDFVZT7GLwzVgkrbSwfxc1mtfKv4xFJFuKNR6oVHiV4D",
  "key2": "5s9XQX16LHCkfV6JRC3GPevvvxJzdB24dRdUG9N42trAwrxQgPeoMruzKQMWYknFzLCfZpDYWKrwerGQUsZ7Jtsf",
  "key3": "5MJmnfgM2A7V6gj5u1EQhJFhMyHrgQBnczBKH5FAQGrAjkE5p5MM6TNHtWw8ceD7onJr1a3qChhBHM5a2qWp2aDc",
  "key4": "39beCdCU7MiWibmj9ex8N1otNgpTgBcjkCCxxZfAKcAjdtw9HCk1FUqjUemiSNhxNVi7emjypVHfSLFkcb1AQFxb",
  "key5": "3TkqyMpPCLdyoTEq2U411cNXmPPYW6L8aWANaJsYbJsM2HH6KyCq6ZGfeof6v4jhpwCcx3VGE5mS5x9jhaGohbNL",
  "key6": "3H64JPv8pTw723gQh3u5ftGeoig8BGBTQiPjCxzYuCVbn3F7sK2LiQk2FTGycayZcUnGPo4jZL5nfiNuRdxQJowD",
  "key7": "3JoYj4uwLU9CSKd5iD3iodFzS5mNANasJKW2zP6BnvpzP2JDNCRRHWwB5GV1JmdrttiowGJ2WthbPqEfJBjznVkx",
  "key8": "3aAz2rfbVUQ926vGtwmenUVfnu25TaGi4CF42oJ7ugiCNGEc8Kpgzwc8s7QecYiUznubjprktKpq5YJo8V5KVSKb",
  "key9": "28pQXi896iCfKLtgAu7zHUFjYQq1YDxLPBo4f59CuK46Cn1iWqvqwRpNdTb1UHqsJ44MrZvBgF4oAnLKBofvtpPT",
  "key10": "2kpsHzdb7BzXShG8f55JihFzAprZCJrStgyv2wge52UFehM1DXwxUgm5SgGKN96j6cDx9dd2aiQrFZ4uviYtoeJi",
  "key11": "4SH7dYCLTAqwxKpHk1as288ety5S4QD5YKdAMBzekz98X2DuRsd2BCR2AZt8UGw8Hx4yJ6EsNv5K9bCcwQ6umg5H",
  "key12": "S5M4fhstjJog7kyYRJoKH3f3PGob4Qw1Rc9CpyJYQZ6z2Huftpt83MTkMmLav7oKRnU6tyiJBwfZv35rM4v1xxx",
  "key13": "3Mo4dNfCGdwQkdZR3X2FZYUsgbWssxk132VKe5GNANiRns6fFZzssvxHAcFeWM8yTcDBKtobD1qiR5Z2TqTM3Ps7",
  "key14": "3KAXPW56NYJvujAqYBerTX61BPgnc7CtQSSGJfT9b75b637XNfwtpNcHCAPSZ6gT6jxCGyw6xkpbghdcdYbP5ykd",
  "key15": "3QP1HqvDdr9DsaTwysmBfm3onrpPJRmQJW1eszEW4rEBjYFVV3Mgp35FxPnE9jVtmdCfb74YA8rA6NXD7Va9Qbnj",
  "key16": "iEjyhPEsG4VT1k3AewsUtQWQoEsYL35BoLkzA3G8ZAXqutQJa4FNjo3oQv452MMtiMNryGbsEsorRAtCJhZUgUV",
  "key17": "4adp67Tqi7Y3L1Wd18CftFL29J3n2SJWYSkKbJbBaJwKXtuZRHjEpKdfvogifpPuXd1cakAsc2XAyRj1FkUsgXSU",
  "key18": "4MpLcK2wzFo9sDpViz1vFhooAztDSRMNy77hUiGxj8KXoPEnePJBmnQY9FHsg2n9XnBeo6n5KFfSL6yHNiToGew7",
  "key19": "3nNDXHBm5tZRVeLJc1wAbqN4Ax8eyXLGPA5m1iPBcaFkBWqpkq9pbLCvtk7w1sZw4mfCB5DRRQeb3EWXchX4pMLU",
  "key20": "39wE1xSXub5kmAHekX5Lbbt4BBTWiCtUQJ75QBN5LCaewcDtNcLmFT5LS6CEhXjkPTkA5xeXrxVtyx4vweFt5qTH",
  "key21": "3Xx1aLw4MpNqxuZuSmdfX9BfBDE9UzT98muiRM5KdghKVkbDVyfwwYsm7K6GDgeAhABRtfJVWTewrpHFwikuEMce",
  "key22": "UcmwsDPtU16FndWRN19rjkUt43yjn6Hu3bWZquejpSoYrgfviWMErdD3bNPYiqWfabA3LiWyMFy3SYuJbKSFpf1",
  "key23": "3PJLY65KXe4juHdQCM38MQcbBnaRtfuo3dUpUMPsC7aibChLBZLFCBqo5U6kkZ1x6mbgYYgkymzkAEeSsP3eiVh3",
  "key24": "4KZfDvcE33JfzGcrqHbxtJHqwFPRSm5EhM6aoDJTUd715FnLV4TJaPgTVrxdiMgTLN32wRY5mupQpmVhJ8cd57La",
  "key25": "3ZdxnC38baFE8Hp3LCZdLmW2eE9c9nTNp1eJtD8sCuCWoVkXHXqMfPuZa9WEtTxWDCZ9XhS5ALmRwfyJfziAAwzG",
  "key26": "4Zw3K6zzWWyMUViydpyRv5xDpWJHWBjvYFxHhi5pMtLo8xtpAkCRE3zUtCZtBGzQ2KaA6XU4FZbGoV5QVMQEybai",
  "key27": "3F55EtGtaTXfoEykRrqteiMibQfKoPBsotjVeAqqRheDXhRV2Z4hurvGoZMSxZQA2HamufQzqpNhLeJBFdvPBeny",
  "key28": "3HEFaGvptJuancXa4X6btiGfFSpjBJAdzBxx9c8s4mztPnbiVbWfjTYmA1J9AF2sPekqneNaMwbU9esaguGmP1bT",
  "key29": "3EU5jCA5W1vuNNkBYfYJmi8ZkVUKDkUXGaNkkMaTPsiQXkDivZ1GR1GJKid4XFEaHbwBq9TrJ4pbrFFjjsucrDgc",
  "key30": "bF1TwFn3xXpAwgB43pKWbzXQTBccyHMR5kFDdqRZdJLWkTStThqRedP9RtMuiiUhsjbaLZjwQELgqLuDJsbozQd",
  "key31": "3EpDx9ReM2NJtx7esPcuq4nHFJ1DqsUe4VC46rcVTVowEEp6gLNZmXqX9cfPME2fvKAMChfEhvDRk6EaZxqnHtqy",
  "key32": "44X2DW91gh2xKGsUzEVUKpEuJygTB9ChdpDnNdBKvVPZHKDcVgpaShN5J1jZMMtCAkMfXTWdsS2v9p3b58WZYh6i",
  "key33": "4NyMV8z8RVM4rtKQLPsCZEVpyhaLbeGMs5B3wnEcpoE5WfnScmd5bZTsbRkos4nRfJVFvMhZQFQSdLZFPMso9LCt",
  "key34": "4j98GTLaqsysWc9pNvZYd79XPDZpaAsqsSE8RdkBN4gVH4er49aCpbh1sjbybxVtWrUgSb6GPEqfv4mhoZpV1gky",
  "key35": "DDhJcHZMnNTtLD9XTerud9Fef7jGFvXK12gxKgHQskqNaSfLyWNwYG6dZyn21ShVKdQtrh847QUqXxgiDdqRuuE",
  "key36": "3ZJXjXcPQCj8j4dtEefmjLF7H5S1phPK2QFqgrfKJupXdVEk3p3zPrYhHbjFpLPdSQw7ah5M8CvsURF574hjAkxb",
  "key37": "4zDUsFhuYMqVP93FfmEonN7ZkztRw63CG6BFra9ooR5VUBcBkW9aNt4as5Rg16oYPaMqUCE3pf3jLbVHjKp5w3Ym",
  "key38": "37iUUbtkm7sK399cWcFuNTMuXpHo7GsUvYFFWtAXKNavZs6KpqhaAAdtKjCpRLUDHU75n2dJPvsTgraF1vaZTt9U",
  "key39": "2WcyvLJjTvoP6GyqzYv8D7Lerd3XPd9iDBWFiqdjWJLmG2iQEoLPnGUBKtK5QGUyX2w1WA8VY4QQWNrm1D1xCbnm",
  "key40": "4rtgi3w2p9gRtVtuQFGyAo6ELg8uMtM5YKUczKBZu3AwPYVfxWVLNvUf96iRdChaebcGDY1dpJK48L5gMKeAcqss",
  "key41": "2bsW3XhcENwaNBumKvE3DFgYfmYKkbCcfZNpVrr4bTiospkP9GHc8jWkcyHCQJ497qrYWgYWm68KHWA3mNhcqMwJ",
  "key42": "Z2mm4NSMPk32uMfHPi5irjKvheMoj4nB98Fc74WkJP7ygSrNZuMMTpWQdwep3WygLYAAEfRVEvtwvDWEs6L1MPe",
  "key43": "4brf6XgYbYLSNqBAwr2zMn5zhF2H8wqZVEJHhvTrMKBP62MXhZx1JxC3BxXhSCMBCQtRDjRiqgR3pppcyp86mSj",
  "key44": "2dz1X19mmJRAXbAuotWAfm4pedeAk5mdcYm6j74xyS8gwq3umjNfrhYd37E8qYGHFQ3NMqQEfraTzVTe7yG2Ydgz",
  "key45": "za1m6LApMWuQWWRV5M6JGbiLE44amYJUy2AcU2VA5ikimEACayp79MzCFJzbFPDWxvgW9ciQyYDzASuceDw7X65",
  "key46": "63VDFApbcxmAHDRsjoFcei2CruKkhCiLo75rmDewV7Wh3vjarWZJS8vYLSuhVag4Sre4YiFNn692uCRLDkH3QSJd"
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
