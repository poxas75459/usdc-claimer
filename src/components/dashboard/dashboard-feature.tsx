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
    "2x1ZpnBnHNMzt6uQZp5GxnYZYMo3WVL93omqTH52B2uuzh3qaPn4VxgC9qKhz2HXzcgKXN8Syp7Gb2vfbEkhQjbe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Fr4b9ihLTfwrisyzpN81FQLFuvvAW1gBSYf5xW9JbiCmZFNNAwdGcAQi3Py1mELrohuAB2y97NdAn7qPBbXLP3Q",
  "key1": "5MLKuHctPBugzjrMtcsThiCr19B4nNxcjYXw27vTqoVzenS4QwkWWiqsgoYR1Rhmeg8gVqHwqkPaLST97F1LsbWs",
  "key2": "2A5WZWEoHwbNzNBxReVyr9acu3ievYVkULW4jxPoiWZ7ds3ghw4qQA7voLzUDPaFuaZrySdgQWWt1QS6Rb6jUXLo",
  "key3": "5WyoXrFLzzCyF1WbNYCrVFtKVxyQCyKbSrnKiZbqHGxg38GHDDHcKXM929dToJVgFRXfPAPPEEyBM869UdKu4vZB",
  "key4": "4xzZjDGjNGqzQ4CrTjeuezs52ftoR4GyRkFbUBiDFFeVDRqBYGdCCCequrJM6xcAjXJeyV1ZX54k9eMmvtUutK3H",
  "key5": "3B7MkqmfW5SfMxDvXXTVYKArnd15cdkVh9mF1dU6xvxvAxczwTKP5pdactiGjnVvHbP2UR2n74WtD9tg5rNNMrYM",
  "key6": "44Eyx2CigBrTKCqX1qjnTBpTuW2DsxZChCWksKMgG3nnsSapfncqgC11VnEkEWRccGP3r8sLRyjkPRpFXzepBN3G",
  "key7": "TytuBc7qWqgMdSiBipgzvgmKcVUvZEjQLEyFHSTsRSEhxCGxAc7cpn4F5VxqyTu6Fx1wmntEywmM9DqxYNK3WYz",
  "key8": "4D4M6U7gabPDGyPM8jcTmBNaDb2nPzVSkBEMZ7pdVUPESjioDPxQPDFyBsRC9CHn21fSH3Zw1tyQyKTQphB2k3FL",
  "key9": "k2Bdvr1p5evPShyAakVSwmfSwAMt5oLmjwPS4AtTG9o4ES6sb28wN7icLJCALBYH5ayKJN7UDhbRYm4V6mB1wt4",
  "key10": "65WV6cy7zmSNkpVK5N2dBGFuNPtaYZtaHhcRNXFAxw7ggDNER1BKHgpfYdNywnedRnNsAk8auP2kcxxHSKhkdYTH",
  "key11": "35xc7nfqjJUwgzxe2Vjx3VtPDWexZH3auDsmSTvbiJxbUQFX3BP4NvJLVFsDjvX3HAXa99kAjc3fowDHm9gKToaD",
  "key12": "5nmEhf7FFDVejtqcJsyMJodHohSYaGM2C6Z3gpJhtZWet7pGDkuz7JU7DomNrQGi84i5TApFGu4YyPDWVVVdeosv",
  "key13": "5JmyNkS6kD5BB1MwRKADRqHnU6Xdjw9wQemYaLQvLnoQNFKedPxC7pNAVMcPtxSpRG967KR4itfhBsSkXJduuqgV",
  "key14": "2jzdvPUsJVfnzp8mdBeMFLn5XhcoMB8SExNY2y9AEuQRcQE9EAsQH6kGQyVgWJ3vQdk6aPpes76PmJoPHNxXYbEP",
  "key15": "5jtApQobRSXbjbKmeWnJ7HtdHuz4p5Kc51tBnfakHxDrC5YvQNMzkgjysDJxZo1fmD2kwVkLSh4CQH6vp2J2w9XB",
  "key16": "4KSpCzqSiuZ9HHSrrJe4XKUqwqWTNMoAXdGjbbZX647HKVa7KcnimkmRNAtMyDaSfxh7mzPSfmzF9dDvZ9Jd7Dob",
  "key17": "q7xFG1AeUXU6FmChk8nzbvo5o7heQ4Ww8qmBZHVsSbk8otquTtiWmqqNmWG3vKPJJuNHvhDU8pMCoCqUGhyLT1F",
  "key18": "26P46L6Vud7uejVTXzPAfTvxmSoRaRLTzKYjJM3bvkHy4vAXwcsgJFriVURCyWVfX7rwFTDYFyNC8ptGZyEtT85F",
  "key19": "519bRp2f3g9oEx7CbVctYW4SefLe6eneWoJuuqVxCyT7KJsY21t7sQGLWvBAB2nP2ryDswyY8hRDCiquPrA7wFR6",
  "key20": "2He1df3FVdG7GWHzvY3k1K3eU8PLSot2H5QhgUw9TZdK2Q1GRGs3fUdoA3cfuQAtWMVLp2x9Rvpam613GcA2NtW2",
  "key21": "5hQDnnSTky9LZMS7MpyxpA8PdX2dSd2wjjbhDiDLMXR7GkaFiMT1kS3fGj6tqd7h4XxsEkMjFXzK6dfBaqyFiy78",
  "key22": "3Q5BAAGqyaGDoH8SREsgEJWQ1EH45kjD74LWz74MMhmi4zLt6kDHBNUZ9yQi1NBwksocBj7PHB8Da2zs6F7Ky5DM",
  "key23": "pP42MMaiwKwQJMEAui7dBHg2cQbNry4gPpBm7ADn7hJWyWK8wARjx3zuJtSVBUWX786ow7AWGvTJtX8CNsj8HDK",
  "key24": "5KSWwf11uwacSNDPVNgzqyeS1aZUMjFJgTj9ufRNdzbWMkautz6mGigpPzpoxkVZYhparygLBnReB2HXVUMgGuTm",
  "key25": "4GBBfvoXMaUkp8Xpt2jGnT4ZCDF4JPqep22m96BL12ggoDo8ruKYiz9BVcwcRrzqrVywoBUYuwayBKkdaUHJwCGA",
  "key26": "675hxA7b4qn8MBzBk984kx5sfHBmu4gJimhDrv2UMMRuZqMWoYVa4tBXK6gCELbS3EmF8dXVDYsYReupykez6dZ3",
  "key27": "3dctv5CQzRmtFgZvpDL1CNEwuJJ1WHwcXp19s2Y3daEPqFBrNXaLt7joTyz3TBBz6ujJEwxwkMHHJYxvkZMD1sfy",
  "key28": "4ibqQX8vgUtjWri3WeQcFVe8Rn3xWkczq1mqMf4S9HGjC7AoM8HCqgXL23ezWSJyrjqAqWN9wYXKheXcNGFD5PCp",
  "key29": "46hbnmtRLkDfwC8FKd3psHu7sWnRvBgc8pTJgtce4WYdmT9cfT2RSMHfT9uxPvGZdM7TsAA6xt2aJM7Skxt3UVET",
  "key30": "5uyUmQVhya9cSW8G6ycyxzs9Qr9TLUxhMk4gWqviSkf2aXNg7Cy5kwEXnZZ9miDf4ZKFm61jV9Gb7co7gEd23Jr7",
  "key31": "3wAaErKg9nX3CfvYukLmNHifeTpGQ4Zt7M1iHo1H2YyTeooUN8yAkNVeCV1pBWXVGT1vW1pNxocnQ6vHdxDc7TxT",
  "key32": "WRkcqHW6dFQocKziRSRvE4McXwdqqAnpms8JXwXDhvvCoZ5DkxunM5wWJMmxWDkDCdan3QtjUiWgwmb4J45bdxJ",
  "key33": "57oAFfhTbTRsjR5Cd9P2i6HLjt7ZojfjwZNDcC5qGW1xu2fjM65C3PWbmMsGtuVtvcRzVPGv6DAgyP5tdSFQSExi",
  "key34": "5pXvdCo56y2gv7V62EUHRtTAuHo47cYetWLh5RSWJpPz215kJ8bAQpkX2tKBDe2qUKfEaSVuYZTGMQBB6ViyqVeE",
  "key35": "4nWT7PWHo7kATGA7kU1i4nGHWB3rVJcKp5R3fUmVXaWwb2XqeXj8yDpmwTHn3Pe4wehYr7r6sHsgVZED9nrbqUEL",
  "key36": "3FeGBJA1W5cNkbjMGJkgos2EaCDTt1BazE2v43F3WuReP54t6pCt63MgTavcEBhZrtiLpQ3njRrEQMUFufwLS7W7",
  "key37": "3R3kHDJXBy4mrT7Cbi2tGxj6p3tadhwcwa82YRpJZmD4XWXeacFSLXNzv9aRALQofxtrPZa1EpeDxPs2UbNHmp58",
  "key38": "2xik2fc4uJmeqFmWbJ1Bnn3494zbx55jwdJYHwEuL9rmgeyYG83aFEcMgm7RqXeNrBPWB3z5QZ2R4DuarUZhdFif",
  "key39": "66tmNeYMyCXyt4AhF6fJqeFV5vtuBRcSUk53FKWmQuvKcbhFzsucW6vy3D2Zwx9rHd4KHBoCfst3t6bt7VkhuYzC",
  "key40": "2PLoCSL1KQ87Mib8NgtDmkFv4b55bHfvhgErq6Q1gMrGFDD3nbC8r4bmXHQuSwSgXFZw9Tse39BHx5cWELVYUkgy"
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
