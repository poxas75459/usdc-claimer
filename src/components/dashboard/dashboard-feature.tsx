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
    "2eJbdNrG2w8KrNzhAH64XDZX4zNRtMmiXmoZAUJDwgFvasWJhLnxkNcpEdmXVN91hxmsoxAEHym1FpLbpRRLghHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RsrvSPmwtm2JGQw8U1Ni299RqS8CZfAL5GNpvm47Tvk5xY9Zu4F2q6LYLquhuCShaRF2QvW9zjQRscbk6j7iRNc",
  "key1": "2p4ufchVR4M7gFpY67zxGMrN1WakuQ9q8ACxr4NoZX3yAg9r976UY2vSbxH1MRvmoTL5SzAfMQVSfgk5iikhsKZj",
  "key2": "5TBmLE1dv1Qq9AsxoxsAvVsNC8u7y8bHzF9ufEJCtWNv11J7SLumNvUsRTz7PkartjzJBzB2n6CYrEiU5hQnrNgF",
  "key3": "2GytFNFGsJtDrAaX7Ms4gyM23HVc2QqUZvNgWoHnxkPdXC8qkXJTAhxpBH84pB29kJCuEmmQabB5JDPmTSjQRf3N",
  "key4": "3kCB5gSvMFBkj8MBdkuS6E8Yj13NKPS6UeoCRAnuMa758WcGeStKhbc5Up6zchV8mRJNvDugaSrbLw6u2RPyXHwq",
  "key5": "4uJ3mnkhY3Aj6pFvhKQ25rC5SDiYCxcYrxcmmHapqcCu3F7DUJ65vwDGCkn82BVJ23nySdAC8W2MmUcfPWYj5tvT",
  "key6": "5BY74yTWXRRk9M88KdPDTX7JYmyhYmjractrJhapb7Aaw91tEbxokhjJxoGJV24yKxHRx5ct1Wp7ZReQXwMKsSUf",
  "key7": "3TuyLzMpRVX54UxGuAXmoFj3mh4x8TB9NLkpg9KktZu33J79pWVdx6ppDosGUXWoJRWL7ARKxU3Nn36TPHzvFT8B",
  "key8": "4zNMZSR2c8kN6zjT6tcn6W55mGwXc12LzjoYY8Ffub3GgaTGNz24obyHKjTtXad6jZouRxiopfgGMfirx8nwzjnW",
  "key9": "HBy4XqC5qzdrwNmVmhsL1bMMEtPcWX4qn96dt8kKFng7zsjpXArQGXh75jAuA3UoBGWtdUpped5nvopiT8GnemX",
  "key10": "GLXsFY7NbB7qqjsYsVQJym5eacmjw2UbxSAQummvddb45CHRCFkJ5x7Cvfu6UYzZboP3GiKf5JJ6wEedMQjZFFq",
  "key11": "49PsZPwKsHn5U2mGFehR85m7RikqNxSUrqQMi2g9A37TftFZTHh7KqfkcciPH5ZqoeAJj7oqbXjv1oA1Jezx3LAL",
  "key12": "4Xq7NeSMLLoJTPP3yGghJbozCN9r9oYazi78cat4BKaPtD9mTcssQsFbpNR2CGDGmJfWSjLNrzEt3MHDUtcmtHjj",
  "key13": "4kw3823A5pYHAZWi4kyox1ctWtEXqucJ3YNfKiAaYtJud9TabQio8WWadFkRppooEp1UkDPqKSAAXSCtdtvmu3FA",
  "key14": "4J2T7KhPTw1JfWrdjyRhf2LRA7ZZ9ZT5YJjv2X4oTGuP7UFmpfAEhCZRP3VcAqVtrTzaSsindRUzGJrABFbwsNjL",
  "key15": "5VJEXLVgaHLKVhaQCXknTxT6stPo4HHCdSE6F1BPNmjRC6zwxjDRFCtiNbGRcLjF1emz5eUYME4HqtsyKXeBpHL6",
  "key16": "2xAHJ6PYhG5TZFCT4yH5riDfVzsnXJRnZiuNv7RmA9ZwGtfQ6VBUm3dfY8BzjfbU3LwBjMTHQ5HfqXcXi3cnnoR6",
  "key17": "2XoNBkX7GtQfv2ZwVhLdY9QFrCzQeTcXtRDxCqzTW9fHLFwKUt9461QsMp4iswsKf8oh1VqF2gRGyuDX3oasZJck",
  "key18": "4uG3TSDu7RBWpJwXJNUkGAM7GrfME1d6jLL7xjVhsBeJibXiuirD2AAiZwZVzCvwvbMTzhXF7xiFmARAZF91iU7r",
  "key19": "7EbUrLozjtAqrudhaKqkwTZXHPwnyo1p7Us1jPfgEg7Pfw4BTQaanwzuBm8xoQ9icShbaTwWhRUrZ7n77pGBFzk",
  "key20": "5vu7hDE4Fyj61eNdD3ikFGq7fVeddb82UNdzKGuwuzorvVJ4fnzfCMhihgEDn4wzAMLJySpsfW6kfJBYC1MTipTZ",
  "key21": "2xAVXeufcMXD1f1W7wBkhTqTCFUu5NjXP1ChBitxgJhcU1b73eFDnc7NzmNBvF27TY3xdi1dTYvRaw8fyBm3iMuJ",
  "key22": "JHcJb3rEzru6ddvyKB3w6zLs4CSTQCfthx3Jg8YaD67uXLnkYV7G1Yg8qL3GccsixXYFciVr9J7Fnk5rvoPPmqc",
  "key23": "3poHAqzrhNFDiL2cj1kxWj2SLonkNX7CCw9ZmDBp2YnzbDAHyqyqc2UtBSLdxDnR9TEf8c42BoaBvbk74qWwuwrX",
  "key24": "3TQTpAvtu3UgMFM2RkezVQ3ZAJgbqZLX8YC1SrvxeHPEYGwYKpwdoYbgMpmavbnCSNW9LXzFaqzQnhDLavjpqRGM",
  "key25": "55pDWxmh223z18u2Au3TCsrdqjKGU1SL7kPS46b5QmdcZPDE3qkLecfLkFzw2mFtzH2tzGYwZjUJ1krXrpHd8NGJ",
  "key26": "36pbW2xxPRFwWASzwnHBwPnzDDKr3up5xBDH1mVXD9EocPVhcFECYjUeGQdRA6HvV4vb8p1bxUQ6VojRWk1AWUh",
  "key27": "4ykmvwE2aSC1UbWQzNyu3D7GdiQfMcmLarddC8Jb8ZBh5UE9ZkrAan6uEcgy5VSRZx7117iMMnvzdVh7HeGpqgiZ",
  "key28": "58UNkSkJ7JzsbmeoUEhVAFcsdbeW22Z9SG5qjgMRB3n5o8WWyZmMfTuj3rggwyihfkeBGTCQ8wCmBzMFVQFA7zXk",
  "key29": "2KryNNqCDeAJyiWqjSURv3ia9erbv8zysjPjpGsDgrBELTDMjdWbBT5RcRp5w7UGgF9y3DDLchPEBH8BTZYok6n4",
  "key30": "3DSoxWXVy3KTkLwocSYTgQtn6H7gVJ67SFVSrgY9Past6VKH7iTfP7UM5kGH48HCz2e8kJCYBdedKnCw4aEGiLtw",
  "key31": "3yMZ7NhMsZPpk3foDhwwHTKEP3dy1Y49XUDQLZn3Nfp3m5L5PHQWcuc3aTrWXuCokqjHDCSar5cmnX44V77SzUyV",
  "key32": "3cKRdFaiwz7XE37tTtCtcqaY4Hbt6iMi8T4ayBUsLBkD1wCmSA2XjwpAWwtqHvm9gofQGzroDVoh7sbADrzLgp4N",
  "key33": "31dTPd2ExMoLUY8znAFiJo5hwzgQpQMjFAhHjfjENnWw2Zi29EfksSAMJv9Ui3bLNxviBuoWHgXtHaFh1ucG4PxS",
  "key34": "2dq4YXhWbN9cVUQRrc8VavUCwhACsVwxDaWz8GkNSxGpG3Yo4ax8yBCVWWRC9cHiUXaofQxYSupyXEGdpRx5KQva",
  "key35": "2tMS1NeWoUq1qAiQsRz6smigR8YA3GTb6hG2PvLdJYENXbiJJTMg76PC3gwPrVkyyziZGVX3EDik8BJXXXVybFMn",
  "key36": "5d5A4zf9a4aJZQQgxypySvafqM4FzMHXZzHVDk3yQeWyKR7oX7CRMZvb266oE2nDFyUDDDWvo4wuzzZwAovJs4j3",
  "key37": "3ALrG7vFeKEt7vdxowNC4hJziFQxSCkwUWfEbwJi81u9v1rPyMV2sMX3aeB2WBniF3P3dGAGcMsuUPf9bM5paL76",
  "key38": "5t3746w3scN2hd33VSC3YV3jbjNcJnN2EAU51MXEiae3dzMgYKnMy9vHR1zJxtuD6My13a5grE5ASYJo5JVthn7J",
  "key39": "5Ag7TZeM7E4pYDETGaN525Xt2J1UbSxnd6HB1HkeHBc3g4UGoCFYZD19uBKAWZFWV6FkzCBMiuJ71qv1nun61xFQ",
  "key40": "4DEBRYaTyShL1LPVenqZhhAK7LxyHX1yA6QsUg8EhmojkjUY5FJUMXiKU6ishaFNDzWprhf8U9zWs87SiWnu8xWJ",
  "key41": "2gjfEkMR8a1CV5Lf8WiJjQ6hkWF6r2aJjsBKt5febRLvx8SafUMnVe6sEPp6iaBaKJG4g4W3bA3kqqnd3huAv3mb",
  "key42": "667zeuTpby2XkuKyj3dmdKHxNyvFHZaVTPtFYof8jAKPRsbvVLjZUGH8Lku3adNQXQuiGYzVUWtDSETZbzku9kHS",
  "key43": "3sopw7U6YE1k8mRH2fedHGa7K2m7qaWkHiS1jyM7ckMD6iHk8KGC6JBdNqKx5TVZuDYipYWux6Yc7ZE6gtghx5xT",
  "key44": "4kBJ875wmoBKeMXGW3dtym5v8PNGR2cQbPqX26uy5iL2VCZZWka7hzjZRD5JFQpCtq8EneNYGGz2WwbrSnn5TpwB",
  "key45": "4MqMScEdXAGeSwSQH4A7o7qPeBn6hgBwxgVFcwomWjHCBwSXLiHeGrFQHuqiRi3VhJcQfKZKCvdEghuZCRZ6CbbB"
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
