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
    "51Fe3x2sLxNcywQs1D9RsrQf5KsD8pRjMGCmVBSUcGkeVzTCevkeWTL1M6FLqwFjGwgUPLGoiAwbhJgJczGkUJwa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CwDwsCLDokQhRkwqWUYHNm4rHyNovxXaNLunVXTP8Q3PENDqeAPM2fta963PK3N72fmjREiYmJy3GNr3RZ3vXC3",
  "key1": "BB9UmMD7LixLYVPN8euiQyDCYnHNaY81kyijd59tjy6DMdhkJWpLUCqCyD5QrfbqdnHyPifcBcKbagK3V5VWd66",
  "key2": "2CzXkyp1NvYMXZtmr2CcUqXt6VvrAnRHyRKxrNhYjqnNS1snyeuD3Qnm6cMzdRGyaJtiL5iNq6enfGiF5mcAuRSv",
  "key3": "223D7dXGGMio6nofFA3QADZCmQr78WpR6zJArA2D1ZiDP12tiXwimRhxJRp2iiTu6ciaFQ6reepmPgBG2c2Jcy2f",
  "key4": "3HGSWpJoj2bPW5jSMoEZRkDckgWDjiHCU4W7CTJ5eRsrpDB2xTSrU6XFs4JbC9UUMH5MKFEyX4LBQWxQB63QnMXW",
  "key5": "5uxvc2zVNU4aDd8iHLTEnnZvDcKqBqGa93pxLL35D8gjEtEDTCRfGqSrkmPvJrYvnUmcrrmKmxNzAtVRg6LMEH8e",
  "key6": "5QLKaa83UvwdYhh7RMgUgyXENMYFywxzdJoLAETjTyUY3i8mujy4i5f3JFpRqU4rftq8VvaM5JAozWryTdQbnf1p",
  "key7": "n7Mv8Wn8xUdqrPpezj6hmRZL3QrfrTUmFr2H9rxmCqW2w3f6o5kEuYzbFjR6iDryDSkgDdZ9SvPw6VA3gsYHckS",
  "key8": "53c553MAnT6saJmT472zYxFZWbVGeNBQrQrXpaimvBx7fcy3tHGuPy8QLbj4CnNM856pD6TW3kqMCgqffU4aDYm4",
  "key9": "4FXhYHJyYYgnAKv8DVBpTedDytkJpUuKFpDpCEQ4wsrEYkXm31dAfS3LrdPFj26FRMLrNXNTH7G3Wes6EXQLoQvr",
  "key10": "53bWsE8yGvMsktcKpohY3zyuDcY8XiJocKvQH6o1FwzFDz4xrefSxhbQQWRYrC18x1VuvU8N7yVrBQbJryigU2WB",
  "key11": "3w15mhsKgpNCydNMk3DjmQutL4NBkT1m7AbtKnfBmbGJtMGaeVWJmqoMpccHrHRXYutcs7ME5DfALrTQJTq253M6",
  "key12": "5d5Mu7o9ZZ7oRZPmdUVBEC8CEVngz1Y1hHA5Baz3fdKWMeMsUKiZ4m9LDeSoUrnws7myJodTL1b24BkWCCZJqF39",
  "key13": "FKuPRg838z3qAeytw6WiVmfufbk8dU1e1ECwFFtiDAXHcMadckfzoyDoF5aS28WhyEqfBXJaoJQWz4dXFoPMGQS",
  "key14": "6m1e9DCrgMykdio9FUNdQw9kbKFKNYRdkvLzejH8jy1S2P2GWszbf7Ay2qZSKc1magFzmCukendxHpDHsn5CvgX",
  "key15": "BCuyE18rgDr2iGsePhm8qUgsyb9vH9hmSNgkACaskgGSzLVwAi8YJrY5D6oe34Cq2HpVYVRztEEKFqZesUGYayG",
  "key16": "E4BaRRtbnq4v4WNuQS7kiczNey7df14JGPDZBCo8Wz6i9kB4sLmykq5L5KJk6Te6ShYAJCgU7sTbRjW86ii8BCT",
  "key17": "3XLTE1AVtK6HS7BszT4t4VmS8ZcCT7W7Z7aANvybqPWyTioTNZJiKabUAZ18fmXrtschcJ67tdJSYUcJF4cJAhbs",
  "key18": "RRCmECmSagTLU1DYYrLtUAtmX7L6XpkxHXycqtypELv3FWX8W2MXGN4wovsjA4XxkeP198tLSFqZzM9LomoQ6Zd",
  "key19": "2174MzGm2xsH1QR7YkMeNEsdnf5WrwDBjFbRcZ72kk3UioxQMeULpdL3w5kVB2LBi4ptwX4LGNqfhiAv2XnHUPc2",
  "key20": "2AouswHbNQjy9PDUovdFi46hGMiX5GRTxgxhHubKy1h2vmz8hCbkgMmpGiMVbHkHMWXYWFNLwcuLQNv9d4kZEqkG",
  "key21": "5mGXLqkjkdVSXkZUs9BmtZTi4nd4r2cwffCVj7RU81ik4gHS33thiPjnPwth3yUTqa5ceRnCc4ZZWetkLobmjVq5",
  "key22": "5p8jA4mK1AfhUGNt7GHkpf9SdPg7jybBQu9VC3rH7mJ1Pozs9VDQz3Et26fV8xBbKw2Z1Qy8v4BeV3JJFMrrDgCN",
  "key23": "5pC2LxPo37zb7WMfwe5EB2a5wwkSCrcs7VGofBxDgD9aiecawGiv3x2WWzNryAMzazyzdH7sKDHkqLUF8bJNbW36",
  "key24": "zA64gXeCfTJZnh7zvzFFwUnBTYV1DPjvDpcgUUiSjhm53d4f5rJZTvrKEjB3Bnn8C6UErZ6RLHYtM8BdtaqxMs2",
  "key25": "5z94VTcspBuTXu17VCAmBiak387GK1AfTMiGwgvSEK1bnLgQFnTL65Tg2VM79UeB16pB5Et5coFc7MeS9j3wDHfL",
  "key26": "5MZ3h7haWzfDMAH5rvKwzFzNUUc3dcs2bwf1mTnUtbpqar8EvFNpKY4u9CVvX7hXTmZ1eRBZyxU4bZKc56TsXHsa",
  "key27": "2QwEmK7vPRNgDaimZgW14FDk4NYhXJasFK4EKeCQ56Y9Yk8d3nQ8v3aQhpgZPv8UVXm8PnwEE28rEnZACNpNiJDE",
  "key28": "4GnU1Pjit9yCWPXPfeUXjhxcRn7TFPg86wQCixw5CXbAuv45g8nac5PQqXPnCgaogyYeSSe9WpWhDHkmXTT5FWTx",
  "key29": "44CRBaV7rUhF3Y4J52EgLJFMVrDGj6omFW8b7h1ckh9MncxPWGqkQgmwHn7mptCzh36evvPnctCoQAXBjmX1gjtn",
  "key30": "4dhcPtMBKY9wuVySnie4JDTumNzqZUzRm7tw1RxKqApyMymx6FixzJi9qxG1vQGSMekf3eAP6wA4YSsBxjG7xtce",
  "key31": "5Zru4ZWT5X358oAGin6kPQud58DLhJzdmSEMUiTxMM9TSWGa9iy3dvHAWdtKNUTzDm1XNZhjXgine5CijndTa4Mc",
  "key32": "skoBD6ohykQ7ntiiCSCpbbQvADiHoT93Z9ujsH1mJ8SQAEMZRqnNazA2JQFM7ofKTdR2otDoaHk2ME3y1Wfub68",
  "key33": "2JnuPsDs2q4F5tUAzXL5Tfvy82DiMtTz7zBfEpzDoC4E7k7TG87b4vniyojCBQSAeLqc2EaR3DJkNjUPsBUwMQ7L",
  "key34": "472JYYM29osTwnrRu7gSaDXWq6d6mkJXqog3W4G2qseAnpbwLMz1qHutTLr5Du1FS2gQTqB5oskpwjBmqL5mjmGw",
  "key35": "2k4USw2CthXGZWhWERZyfqdrXGcMkkWt1nK6hsfrgWaD3dudqKXXd2V1jRPiyPfwMYJrx6gf7n6L6HimTxknx43o",
  "key36": "4EzJdomUDCgEjnWfHyYijWGCWT2frxhMpPQRhwtxEYgAhs2fo9xyC8DefHZGAj7NroqXaLqQRUvnbCj6PBGTU58H",
  "key37": "4oGZRrQxD8i1MNA8QKBWxMwPwVRmaarNmo4XhPCLo5vEqhYiJiHynm8XcnYdkBWcusoq98Wz5m28W5YhaPMK8fZ6",
  "key38": "59hLmm4r6GUrmZpGXqpLsspXSxuP94oxWvJ8yLYGGDcqcoh6cZTUCWuTvH2GffDHYS9fNCuzb2pUxiiMYV56X9k3",
  "key39": "2GfK7sw6EYbm6LJcZsdppzxWPiZ6CUcDgJ54Uij6M4ErYH9LvdgrEg2jkmVJQv3aNfAEsCtQ6Lw6gjcRo2v1h5ud",
  "key40": "5LA3HaqaCA15XcBzsx4WA1aFBx45eRP8Uj6ZCq6oBGENmFTg2TVmDWzKznhSme7Gv8fxME3oyNSXpvmmD9WKa4Fn",
  "key41": "5QtpJ6mqMREXTRRnSXR1fQCKr2YGLkB8cBKjU5c2pDmy4KWoEdU9UEJ5eWHa4ZfS9usLm7GomMNCVaCZqPTVEVA8",
  "key42": "2YA2myz4Mk7taf6PmhjBUJyjz5EcccNdjtaDKJ6W4CfMnVBKYZ76iqA8tZJSJ5r7a6QfcLE33PMeimVHRcpGSA9E",
  "key43": "2gWNhWauJkeJ9RWqs486RZgFyzTS9KsrtsbbPewPrfxKifR4J18KBgKDN98msoNwqgBBrjcAouUJCJQKLQRWvZfa",
  "key44": "4XhJrezHd9WnnPMV6wGMxEyF55ek5Wwsk9LgXwzXCgKM3KGiWxYDs6USbpZKqA6KxmdzVjkwkAdFTjtUNtRnvkiZ",
  "key45": "Ggh3CXe5Kvx1PSTgaoeRT9tsNjUULUrcRPTuAFxXeeA9XH2cGu6JhHYHxUp3JLaqVMpsjUao6oMVTaCEzrZ4B4n",
  "key46": "5TxRzQYTHYKBgn4W9kaipqqzt8odyqbMUApAVQBeRqiBdHTyWxkXWk1PLVwjJELZG7CE7m1t3LthsrJDAZMZ5j9Y",
  "key47": "44bhiRqe7uyifWjeKwvsfTgUqAztxhtVY8nk5e6p6KhJNaVb1CKcTR9cjUSRPK2SKbQSxxtCX6zVEFpc1BdVpucv",
  "key48": "5kSYXP4cxgHY4p7rG7JCw1c1QeTSN7bZFUAJvsNgDoLGNsJYKhvh6N6CRZzteUyMLU7tZPyjttvCrjCwQgDcEQc3"
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
