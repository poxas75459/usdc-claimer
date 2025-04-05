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
    "3DmZ6y46WZ6vu2gABFHTfeSXTGHT6sP7aHV1UabQwACehMeUsxSZK6mSycwjM671xHnCMqw4Z4u6GcSF3BCsTe1u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qAMaiLJJHYH5U4aS2D19ohL4HwdnRnTmXQ9utcFR4cqQgmed7yPAKcuQSsYmwiT5iG7hctXRYK5JfKVfd4EcuM1",
  "key1": "27CGfXMza3Ld2dUf8YUyG5CWK4DPHteEtcjveNoLLWUf4oiwKdVKvkDSg95sgHb6LMCeRPrwc3a2i4XZaqqbR72w",
  "key2": "63h4U31Ng1QyULQqJB4rPcipZ3EM6mNyK9jCckMnLvXQ9Vg7xSpWqwJfCBe7W6PQFtwQeexpDyX2JpMdnKVjuqeV",
  "key3": "2Xr2PBAcpjXHtnoZm9BXrtZBqz8k37AeqNZyVykf1maGZNAN99WjUrtpv1gxcvdEoqaWV2ekesdSkZ4yEpEnomCS",
  "key4": "2vAXwRxkWqwGqUeZsN18aWnesfpp2q2L8ysoR1qkMNdcjaWyARTHDbQe6FuDuEWaUBWDq62pD8vN4iYvd9Wba7Cx",
  "key5": "vbUnLvYGa1s9JQJQeJhc6HWznNPBzypyUe9b9ZZRXRYCAFbMBiwkkEPAGBs93ZTBSwVEtb4jSb2WQLZDgiyhLHk",
  "key6": "2UpMayQ13BxXVLye16jvUhRi2pnZ5cYscuZYZwyKq6bXiE9AG4qqULJr9e5qoAz2QF19rytzfq1MyZb3B7EYC1Rd",
  "key7": "4Dc5cENF74Hy2xsfAH2gPwr2CTTX3MqQ29ovBciyL7hHku33WGH66kdNXiywwbUFsNnJzfrATDf8HLHUwJTUK116",
  "key8": "Cf6VcsgRCmdrNpRPHhJW3otbQ6FRc2bncLVahQHPSogzfhbXbUijdZgw1MJVA4nKneH1hQcW7Pf1hezaXTpfVRv",
  "key9": "4hZNmCiMzoZFYRCHR7TtwHc3wNSfzczoeBTVNXaDNi73ZHc1B5NSWbn5jiYgPSRZpa4XEYBgx42QBxsBBm6Pz4nd",
  "key10": "462ACf98DXtQZMNBn7gz4AMxteEwwg86X7763dbJ71TcHwtz42TUYEFZcWjmzdbWjzyPfVXRAWqGWep4p5ziw7YG",
  "key11": "2uPyhCQb4urP2HNddua7Qsjetpj5FwoeCYFj8E9mKNe1eS1Vr3eVbaWRve5kg67UU24s2wrnJaD4ZgYKTK8ZkdKq",
  "key12": "3JPKGMntDvzBSeR821LZcxEvkybEtdQzUtCWanMCiDsLgwcjzL4EEfEpjmpXVdEpXydW61VV9q4xvZaS7GcZZQq4",
  "key13": "5gzPGLb4axBcWhVdc78Rfvr8M6guqEEbPzfMbGyx6jQgMLcv56ob4V27ABvT4Ax9KzeATRqiPDXRBH1wxFoVQEPj",
  "key14": "3oxRNco41tG48LFvvF3FZDEr43BGpcVPXfbkEU9EMsaeUJXcB1NreuN2amLeYSRRa49rwwLMjGasVdqtGtj45Un2",
  "key15": "41HgBpCsgcbZ1ViDhidyQYKFv9EUciJg4URV4cZ2bdDwovYZwFfFL7GeNtdYvhnzsBp5L7WMRJ6k26MeauU11K31",
  "key16": "sXoeMLgbnTYLFb8MCrHtMKzXrpg2e7saTeCoXYoMd4o9bw54BffSkqc8sNadbihBp8QjrwYBhnskSY3EBPkjswU",
  "key17": "2p4cFLdSGU1kR8Jcisu7as7ju33v9wqZGiYdETDR4iyd5uWU9aWvoMwgwpAHYR1R27P3SPLzHxaXWDbkYZyxmR2D",
  "key18": "4sJQMHEkaEPnkAcH4yF7tnqjbnZDL9r8mU8PTa5WHAvvfJD6wbKXH8FdsBoMvKXemZowZJsvWx3v46kxmhUWVseP",
  "key19": "5v1TCUgp2jFUoGZUUSvG4K3MxU5k5hDEDPXAog3mmQPRfW2fyGbtPKgXDUrEip83ZLMp1jY7pEoJfgBV6UcEh339",
  "key20": "4ThTST2Y9BKk3SzR8djDpos4mWyjXPWDn12oMAcewKau7fWdbbQ6pEpx3xt1YwCS6dxYgTBuaUkC1igPn9NtFVFy",
  "key21": "fHmfmgqpXiEHHU5VNJuXuQamZ2mUy9pRJ4y43RSUXPGd38FoqfBwiYUYDhiqJhkXQ95rGzrSGwUupjDJ2KV1PuJ",
  "key22": "Vby6bC3VJe71h95kSkC7xBBJAU66VHGB3KaQSVnx95YvujxW1FPEJvL9Hkr42x4VFCndAVgEFCF1tpKknA5p28z",
  "key23": "4GqR3VD6MttKYYaZiybrrKxB7a9eJxDKt76H2oupo3LByrLQddFTSwR6AWKT9BLukHKaiU6hUCbkmMxkyUDgmcKR",
  "key24": "2GmR2C5gm8abrqW6Uz4io4Q5PuRwyrzCWicXZyeFX9eqjeEBe6idbzB1o7BR9cTR1HjqMV4me6AmyZAojgujtXFM",
  "key25": "jTMmLobXCmjLvFGg5H7xK6esagwqk7kHncXgorn2Zui26Y7nYQcPQnBLdr9VkUo6d9siLKvE4zy5iAnL5imyYEA",
  "key26": "4Fp7FnYExHiRR5AEFSGvrWAznNe9cKwiudYhK9o6Qwy1hRsBamRAiQsuXyWSA3DTRRUHmjra1JqVgAM3VHV3SHBX",
  "key27": "UgfExceUH7Dha8FQpD6Rox7R7LFJ8SYcq8cui1CsJ7FbJPupw3nZW7TXFRCwPdTUmWEqkqJgrVvbj5MoWUF6CZL",
  "key28": "3KoqHepDdxMn3KVrnSsooo8bwhTdkTuLr48RWk2YsaYZ84kuPJoumkkjjb8chkW5r9gkNX2Ai6tiHdmwwnjx7fn1",
  "key29": "4UPNNUbjXBRVacu7CTa74mpRncJrTPDNbbM3WCv5X6h6WYq7ktk7YpvcQmzVfsiZdmXxevqTgg1NG92pC6NbQH3K",
  "key30": "wLmitPAcuKi4CcdhP2sEQES2tJyH5G2MJVsrHc7sHjKK7yk27hz8k1Y9HS9MiarCVcmciyLEZwVuY7z8A9Mn7FG",
  "key31": "tkKeQvF9xdBoR6e3cWXe8r5aA3PzGdJfD6i6CRuiALvR2TyQ71Jf6dTwCT5iGtP9dHgcZ6S9gYDtYgykaD9WaZ2",
  "key32": "44PfjnU6YGhGZVZg2rNvVMzfytNHNq76UVdbyiFXhMxCnATNQ284J9GdfEL3KyABseBCcL9VgwgNHhEiEp43J8ko",
  "key33": "4nRxQheUgEtLz97DsVrCCEjC3CNEQWekTTzCCDj8sQxWE2oW7k8rraGgUx2XQNzKCBd57t5qd1dYQ9EqVnmGQzTw",
  "key34": "dYw8Po9zyDvmmHE1PAJGL9rigS4iDGjjkyDYr2eMMyjhCi912KRwDZEs1brdDoq5RC1u9Krm5NkvKmjBzi4aQKg",
  "key35": "36ZebFKXiwfBpE6fam1qCHyTJ4ATfwkfGmwNx9qb7r4yarMogd1TCZotPpS7jt374cGuvsmLs68SFaTSqULuCLm9",
  "key36": "59g5TeHdwyfy9MHUMii3t7wkxnAnDRjxhcm8UhfismcmuwuxbjqZJHhPo7nVFELbscPq78r5PnVa2ojHxpovknet",
  "key37": "BT3hfaw5FfEhahA16PMQxCw8DoDMtXrJhLuqR9c7ZfCso6osXVMJARpyUtumgm5eESqw1HyYuDLKC7H4oQdxtx9",
  "key38": "24k4RN1RzKLQDERnc67BE4mcV3iVgrkTNShcx5L9XoQSyaibWBcA6rdXwyb8mfLjACVQzZ8nSJG27FZXjreqeMPA",
  "key39": "4atsqcbhBn87qkNj41C3EsoL9poEgtH6XGfHu3BEanSmisXkBv5PiKDjNc5W1HYxV9wGUs9fFRoswJMxg77e3ZdH",
  "key40": "5nw5qurEmq6ZEC17VgXiFJeD7GKqEw3VFJNtHcYtSA74UJjVnaT8wEAxfEjZaTaDHVNypJcZJpskvbxjzxeoG73K",
  "key41": "27gx6aX96DEADqvdAdUReYDHbozJDhAoYMGbYaRaPHkNf3gRFFBrNSrDf1GHNjB3S1miaBnD8ixw5tDimKiS8Yec",
  "key42": "5xAyT1bmpMhoUcvPRqTUmSjBWBuDJNZzv4RTQ1q9KsmW9E47dwDWShQfz9dHeWBGMgoMoSfFQ7XRrFeVtZUjnfN5",
  "key43": "65mARByELaakN5whuHSLbZKTvamWS1ofGobcR9zgSrX1xFcVhJFfdj3G5RrZiVJqWnL41utJEDNEJCrwnxx8dkJd",
  "key44": "34PM7tsdzBPkqWwfhyxybWfT5TRZyGbhGSCmfmftNhvcE5oQDmQ1gVtFLq8BcQau38Vp4yDU1cuMMiR1GFKkhPwB",
  "key45": "5k2L7wSgDY6kpaEqsh9prd3w3XP6paoahmHDKnAG8E1AckyBhagwq1YqB1qQJw6LLr99QGP6rNXgAZqt5oAcXn17",
  "key46": "4ezEAECsKqYyEN2WxZjneCKHGSE3asMVnCiRUaGCrSUeCyitpqz5yhhnL4sMftyC3rJzcmPBKwTc2aynGxRA4jzf",
  "key47": "5mCEL5VUCqrpUjbKVHdDHuG1pxG3G1iGszjnoaG5ALBoLpRKbrxpfhe4Toruh51RWHjE8cevVeCTKMu1ZbixrEv6",
  "key48": "3mPQMnfjT96wxDDDpEtVMGJWrD8Abcee2STjX5vtSZ56URSwPvvP7uBjNy2br9c6tnFdddTdzpdNCLo6ekgWe4ua"
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
