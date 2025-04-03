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
    "D2ASW2g71qHxCaMmvcTmQtm1WxRSKowe35GJRPJ6qJdoQJhjfwVUgfcAft34dYDdGcfJJJbssCVbpWji6YbCUkT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wvj5Ey2xSBLqb8BQwM5WGbDvq8Rwxk6T969vDAwq9x8ccuZSjufvzrsz3cnjST5coVGfxT6DCpy1eP36d7UaQ9",
  "key1": "5Vzo2FhPD2vmz98e4oMAmmG7YbAN3UpbWXquuKqMLHNdk3CCccsDp2AVaCvuL13jQBTfYmJVVfC1TNrhZ4VDhUKY",
  "key2": "34ANRUo8pMWz9hod2b68MNEdLNPRw3ug8SPicgvofFsfiuEPy2abM7Xg9rkTR273XscdyzJPLYz3opBp6TBJFNCp",
  "key3": "2r1qqRUm9H5xKbJvSmMwhbWze6EmrB5kYtSrCJyCA5kBV46QNRmK8g7eJ9uS1SuX8bSo2Z1v5uUdR8SL51vTRBht",
  "key4": "5zhuoPRJ6mqsjmSH3n5hc5mKX1aBCev1otEybouLTfEKBfuaUNkhk9jnPvWPTcjYvb7y9QFwFobp1ta3u1Eq1mS1",
  "key5": "5rV13m4B3DXywb5tFDjGs9xMyD4EDEXxxZcv12cX7MQGxjYqJdF3MHfiGM2N1yZwuTsp6TH52vBSD82CVG5AnXyX",
  "key6": "7b2xatbmCG5ypnJYBspqb7Rhvrs7bW74FS7QoQdzrM6ss1eSUjgzUW7HyzJxA3TmQeZ7JPGW8WustdRDrT4CHxa",
  "key7": "56QRMtrFzLfeUE5Ht42mBYs2p4hSMfEkNmHUUSk6zEwiyhZtxhFZFYSBddSuLU2nrFeHYh4B5aTML89b9nSm1akb",
  "key8": "5ojfNoEQNCWiqQgZqKP63ew3ZxccjEsu1Y5Rrw6yY1vuJ5ASHHJgGsBajMnjZkvmbnQouuzuDQkXoLE8KbnXZg2B",
  "key9": "JabifAWSzYCUEZAsU2exgiTQCyKxbkGavEZCsZNfgTm7SJQT61mRsZpHseQN8MGXdZRrk4ZtPWZfEkjgrfkkVVG",
  "key10": "4V36yUP2CrhRuZKBBeRFeGFfnh9HfgYrAG5agAFryzZiabBt5WoPFhGbN8wtt6qwWQX5hcGSfaHcyTspU2efHso9",
  "key11": "44AZfrQWLSs3XFi7ia6hg1vGt1zpUYNaEgXGkuzgrUPMsLfZHNyY8jUJtHJLBRZZNUpcaAugBjLXmP6Du3UDRTvS",
  "key12": "5QYppHU1xne2BGW2jJzRX3zCN9dAA598HnXX2d38vrvade6wWMsempA4pQZ9vsQv5v8zvmWank1TK7GDe22jJJbG",
  "key13": "56FYxBrj6yzfdqr6nAXLnb22wJKEzBAsHqL5dcpCy85sxQjecikDcaWNSJqzF3N4DxLnFzsMAFPW2YKmQohApXo2",
  "key14": "4U9DHXrRbYMnmAFsYSACsDCFQ9YTiKKHjYgGEcfx5nXifAhnHLNh5bj6a4ZoSntu8smAZeCwBzfgtLWeRwxtWE7N",
  "key15": "2kqsSbSwS3RpsLiHumg1NyPLUaYBwQxGtTUwk6RU8JNhpL2tvsQ7JdGTs9UTW5auXoNgvYJJPndLCzUu9LpKJ3TL",
  "key16": "B9wefXQdecKxzZNVaVsC2TgxhCbBtceRCmbpcv4KE7HLGkqoBwtdjN6QycJ2tSPAg6bYdpJt4UadSRm7YvkLhrs",
  "key17": "aGrJwpHLpoqGBUBT3m11TxuRFVGjWPewETazVAr84oJ48TsHZ6axWprdfeE3QLhPnzwPbBNeFynXZPSiZcbLpst",
  "key18": "38iuxEXbq4VnC9HTdK6rpo8QYp1g3mVqn6TsQJ62qYEB8Am5jV4Mj97EymYM1J6gCT6ZKgZkcPBX1JSyDtPVHcqg",
  "key19": "B3oakd7iFQhtwRhF4SFmGrumh2Uze5LqpjNj28uhbgbo3jBKRuZKDMijG3bpjVzsSwzLW2cvZrUBDaCwJ8V5ve6",
  "key20": "5wSGvgVcYJ7Dg8qaaKuT9MavoVLXPn43idaTi1UcMPrhjZMhfG3BvLAYBHEmb7MCMEVWr43Sr1yjoAfk1iNnH68q",
  "key21": "4n1wwgbgJnuN7HuF1Ba76PJkG32XEsUyJKZg3tQE2ccnsUnnDLDByLv5KKLp36H3yD3umhipVoWkG41Ne4gHkYYX",
  "key22": "4W7MTvZpjgmcv47zSDNMH1P8osT5j4tFgYW8Su1Rf4gwvkzTGcePB4JNEyWoZ5WJN8r5zV7HAznuCkdvNVJbHBCU",
  "key23": "5nuBZWHVUdgrxjKs1magR3ABfDAspHmXzh2mkNsP5xCF5dDvJiodppvwgbb57krQbZFR6BF31kH8NVBrwS4gBADz",
  "key24": "38PhBvzUzyFB2kjwRmDcCehuknCbZMx4BRkm4rvEr2R9LB9JrPRTmuUxx8vsbxCrruSp4YBNJDRmbTkrnUuXXtqM",
  "key25": "5AaknZVn82h34sf6W6WJBRBnMXwnykTnqAwyPoWnmNWfBbbpdwhrd41QSe73W4rDu6wFNEBKjKB2GyzmnEBCwvyy",
  "key26": "3BQ2aLNzu3iKuZF93Gm9pAH3EYBH79X9TTwrj2noqfrcSPj98xtt7QubTeKkHT953Jj6Mc5yXhuRZhKXbWXRvxqa",
  "key27": "27NJ4d6HymvJfUFejcbmutALu2NHU7Aqa18DTJ9pVjoK5jweBUcpVde9ybzSCPASPVkkNSuapdTjfTYzKYnc65GP",
  "key28": "3RS616AyUuCLUfKSZMQgXLsc7WzpcD9pSYEjaCb3uBVi1SXrmERfQHm6RC6MydfckujbsJyYBxLQyBicG34yAy2V",
  "key29": "S4YZm9Fbtc7sgyW9AHNFDsw3tq27xZfi8z3n82L2bTzcURL5Ac7EX4Kh439A9eXhYygRcBJMq2no9ff3p9kRGgr",
  "key30": "3dW5H3Gs9boLfy6W5gnZV4sEiLshrpW94PguLTKVCyDPQh9xyukooEUpAnxXwFbUCCfHjhuzifysSpTnHN68qAsh",
  "key31": "3nBy5FiAozbafLTkgpy233ysVry9xf8RHx2PMnGGCa1ZZYfuiXnG9k4vgQLzMcEUeCppVFoYgSRHZffBuQeKE5mM",
  "key32": "hiJvm5HWbpFxqw4T53MAVBYPLineAAshQ8BUM35T5TuwTBUpxFKbWZXDdQQM2SPVUMaLf9P7zgwUKTCUHVy25kt",
  "key33": "2mJAWzcPvwMgXoFeedwDnfHQeKS1Jy6D6JCbHEK5vBRg1X2wCHPFxMWxWUVCtPAn8AnQ5eixfa3RpE9BUqJ9GNT3",
  "key34": "3o8VtkBW7cVwKp2aYndzRcuWHaUu9r2RD5p3Gn27E1ErNzaBLRgd5zQWDXQMaLJNCyaJnpRoVgu6Nekp5aBCqkZF",
  "key35": "2wqdAVEti7xrX2jRKEkCrEyu4esfLpeYs3Nnit1snfe81tCcj56anjjanZX7swyKfVG35iyZLGTeA1193Y7qhXcB",
  "key36": "25bc6BQ1pT7wcWnGsLBcZTfy2vnN5qQPQR1oNgE3hGqEjmDX8Kfo4Eujf5WPvfoPpztdaXvkQK7rkzD1BxvJFTqY",
  "key37": "5Rx8cUT9eUViuomutpxRvZPK7RoX17w8CNF8ezqcjE59K3qr5eoGasEvYJmg1KpTEhsjw6QXNRzn2GemTmZFocLq",
  "key38": "ZHa2k5YSUAoWyYyrAfiwvw9ze1Vuvtf5B1Lxxr8Xz9XKSxsWygReaNGbQghAPrSMcRo39yWczMHe6PFKx7bnSUw",
  "key39": "4iJd4ShqUCtJwB7rp36cW1kN6tNtb5RLxrr9dQoKBmB2bTCRLArUajqaW7suAWizRey3PUxndb3pcVkTPj26Cx1E",
  "key40": "4SpvzaJd76uhJmGqpN9xrddY46rGkziQquu7Akv1fH39oGUvBAYHgmUKpSDHtaewhb1JTFTKQ1pxdvwgrHi4Ghfz",
  "key41": "1Nks4VQZmFm5J191QxWGbpRk6nCdpbPxu5trY3Nwe9tH6snNfBVDT2cfvry4rzp2NQEDQbbFPErnAogob4wzgJM",
  "key42": "SnBDpR2BVWxbcg6KQfQut3pMHaJL8syCk8zUPPVN6nCJXDnLjmHcMghSgqutzrbotMVjtXe7YLxVT7TYffDmo7k",
  "key43": "5ToLvWgr3dUXaqE7LPiWcCf565TJ5zSsT2qwVYdvUNoDgAH5gLWQD42G37hRYwQwr62cBDdyVifXFKr75aRahMDm",
  "key44": "5tKM7UvcHXF4oKuJvnnbcQpXiCdgRxD2RAxNMnz6weX8aZ5fSH9tHek2xA7bptwBer89mHDXAs1kR7Da8qCDTcVV",
  "key45": "4n6qRR9ttcnnfcchvEssXY8ccBsNZ22mxBfmDsHChCew1EKKRhQ9ttG1XKdrdzz3CxJ2iV9enXBw8gNVeZ6YQGcv",
  "key46": "2JTLUoyu61GNfB2Z76Cvhza4XUV1kSWRA6pgdV5ri2ykZ7Fj4Wxs252R4aZ27fZZWHPX2G16z4k4kg3nzVwikMer",
  "key47": "2ebzQWj4hpJj2msPnxvC3jnMLeCqgsyqzwc2tkW3kGspjU5P4kZMSXbeSSFLhWWU4VQqubLQ5kgDpQCjcyvWV6GT",
  "key48": "3qJdtWP4B8a2XQiHrm9WtWb7Uqf1YBwTMBumcivV5VKiV1jMki8dbRzho1HGW9B6b6xVX3cCwPasmGhe7oAir9BY"
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
