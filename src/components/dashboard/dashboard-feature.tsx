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
    "5M62qMzTPNLxATgPuE5D7gtNiYZSbxhBGuPBiTMwpePRjc1jeco8nez48ygg5Xc6RrXK8oUYpdwLdypXbfYzwVtg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZKSCoPtukNA2Vx9C2XbVaeNi8qS63MUrUiHkRfAxEvnGq2fJppwcGwrLZs1xfabijpq3qMbxXtmZZsPTZENsYYK",
  "key1": "3y6YXwoVnZAq4ZqZqQtLDsyZggrhDFtqrvSNbWnQdAM9rttVT5gJgLZB5VDF7RYS9B8dCf1DyXTNMKTkxjgXGC14",
  "key2": "3fCn7p9dH3DUBVp9j962tVJMhCdiCZrPejbSEQ3Mqseekq8Eoa3zwyHncjBtteuC64T2HnTaM25katLHncAoqmD6",
  "key3": "5iCFgL3pWW1x3kSwtVxVVdTuoH8Q7A5FDtoiTD6rrp2WNPiU82zB2RNLn58Wd1KQi5ymb6uqK9XHxVfZncPqYdE1",
  "key4": "Sq3dYVDC8Jx6xX8f7BNGJymfr8YLiK6nszTdMJmRkB3oJ9U3cVQnW2QebvhvwG6C5bfXSe7q8dgMJafsxkJEqsh",
  "key5": "4pPJ6nfDCFgGyHTtuSWp5pva8naze77DKhRpdsmKTowR83Wfi3Z33aMetKvuqdHEs4BnViL2E1bgpeyy2BDpCmRP",
  "key6": "1oun26CBBMhQVevmTTeMuNEZRCPmxE31k9pRBsbWBnynZoN7HUdqdsnKJYxx2MA96kB4c1B23hZaKoDy6RgGVoq",
  "key7": "3RErYT8rnKnWSR2foj8Zfji21KJ3RJAj8W2wd9qGP2XiADm9SBbpXqLJCYz1vEJY1saGbULMooQ6AnCrxB9UkGWB",
  "key8": "3p2HNySTcxmNjLpMjYa7bFc5o85HXpWcg46pSLvFfBm4pCcKF27cykKbWhceL7nJT17NfKvPj9xpha42KxN91CiF",
  "key9": "3bRPurCQktVR3iQp9MwmkVoo9KvdS3D3VKxBaZvosbdZ3nriZD8dwrNz6FR2qRYJMQbHgqqgaiZRzzALoF5oT6zx",
  "key10": "2RcQ52727aFWq3ukKhrq6H3pb4vTcK6Tqp5MYvh5HgNG6VpmdNXdF8ioXGP7mrn8F9SKdYHASnbUyUuLqqw4FByL",
  "key11": "5UMt2jc1bJ9NjQxmrH82Zie7tfd5LgZH7eYNPDneXygD69CwBbx9cypvZ91ja8znYdF53AehCZtNKttRfmyyPKjN",
  "key12": "57V4LhkAzZac8jVCEbhn5AdW34Nkt3Mia5ser2jWWx6FfFUd8Tx4QTa5PP8op88Zjfw3wiw3raCCqxqE5VfkuRTK",
  "key13": "4k1eonfgqvFctBCbQ5cfpoqd8Ey2aupmmN9bL6R3QQeV2amSNHkiEvPLUSqXg2nMJkuAZeTaeyAULA3U8raemdTL",
  "key14": "5U5mQgm7uyjSBSq3ZdRep484Eg7saq4ZmhhbGkSWEk2Gtxjvgxn2Zi2ivDaSYxDJEKa6BYVGj9dJTBYR4yoJ47XX",
  "key15": "46RvzDwk8ver3tTNMctwXvEoN3Wae4o7p9idmq1W8YkNv5ZtfWEV2JoZUT8VxSizozGFJiEnVugrocMWMzku8c5B",
  "key16": "33iyAmEbAQP6aEPJv2EzMF9LNZu9NrAFPDKNjJwZr5eZUyAnEBH5RSPA8gh3SGe2ekkq7YFSD9zX2BBEHTMXLbDX",
  "key17": "59fWcX1gYhnaKGLuLPaTKUpeX58ZrYf3ZedkazTsHGnyxGuGYJLxBjf4EBNXxcU1p1yK4PLWsmFaupsaZNRuJtw5",
  "key18": "Bn6vPKR2k1utLfEfm23Sst8A7jqcBSiqYNKhsX4c4ZE2zwy3p3YXm5YCxiPFthdMKfuS7QaXVhX58LnEC1genKd",
  "key19": "5nTkECRE9L24JfRgWyEBdGDiUFBxtM4nPBykKYpsRPpiN9sDgfvSgufb31wQtFc9w2rZtm7ZnC9k4vw2GnwURt3s",
  "key20": "2Lwu8N6NtvV2MS87o9aXEUSvNPiTidhp5KVUprzaH1XoCiT2UUYUi8Vm6paEX6Lz96oDryA6o4hsrMyd4fKPBWH9",
  "key21": "cLukzgdMWyi89gqxhTCwpxVDXTm2GVmP8m7xyRc5xfAZjUDLjCUGA4941dYFWJNJdmUZ5WH4xSqiFfd5Q4JWvJT",
  "key22": "7vvpF1mshMrbLbd1kC2fdaEjjzkrMspFcyd1SvSNDKtHAN2KUkZQu8iHSmvWNkci8qe2ocoyWxCXRmUov3o33CP",
  "key23": "24r2fpVFs8qFdNF3q2oum4Ub3UBWmZ5qrKcDaRFadNKV2ktdZN31kh7UGgqbQCQe7UqCXk6wfWLfBnR3bgDu8zih",
  "key24": "3DqAGRECJnmbe2kSkBtKHKNNoGNTBL8opGtPRUQCQBvuWnQPQpTboJ9tZGCzSbQcw6aYwE4o55mdDd4dt6r4fwyA",
  "key25": "XgB9P8MQqVUDrdExEsF4QnApJgeRHCHjmBZhiZwRke5AHJMHgFyHgMpYWT8xtEetxsZ82j43Whs5WtbSUDug8TU",
  "key26": "3cTscJrBnYYGjofoXe6qi1gxjr6fd9oYHUdFEp8G9epL1YwJjYzAiNvvJJTwBD4RTMDx4dBZDhqv7AS6z3DL9HoF",
  "key27": "Qs4Ti6cgscY9Et5hcmXHQHVwAeh75oBxonu8YWx9QQJq9az4yPYwHuK9ss9P4TWZuErN2Yy9QNzaWrYaGALizHa",
  "key28": "4Eb3qVDnGb8Z6BtA4rje1x6amtC2nK1m3p4NDruQuULg892F6KvYncPMkyBbuFwHv49AyKPKHn42pScxPa2xcW8P",
  "key29": "3RJ9T4WiYK1D8SMhpdbXv8rPJRkJo9zJ9Thpj2eGqr4ceURYZN8qhZ6stzfN276m7u8qrtvANYmRtE23b95ZQxh4",
  "key30": "2YDoqJjYdAYA8SHPvfe5E17WZzzvmQPXZRZb1az86kYW5wh6Mm7HyxS14Jj4PQAc1fAFUWXrvcBJqmGbj6CnALre",
  "key31": "4fP9ZP1sXeKfGgFwHTGoa9iPTbzq7Nbqg2E5qYKpiWeL5GtzvpXvPNUqKJTJ2HSoAJgTm6H4tjzw3QiZTDqEFYGp",
  "key32": "5D52iPgx9EyP4Eaeh9aNkYKakoy2kmGKek5mXmd3ZGcSbooNgjxHXx6CZKwcF1uzkrg4HWVWTSmrCR8mpL5yz3fh",
  "key33": "2jM5ErKCTy5w8hQypQf3cCNFbN9LXPeVs39wzXAKLWrsVDVcGCNhxDrqze2CRMZB3aESpsXELQQTmrTsYT2ajReL",
  "key34": "589mDjyn3irxQykn8mDg9Q6a8hCnEjqJr78G3faLMUQWHWurWJECVXVsBE3JYpHeF8684k2LVL9RAnEcLzoEqhmu",
  "key35": "4kt574nPFwyEZCoF7N4mnuJgNoyZbfBJoFJ8hcESj324H8VFdXtpYCLyPoeNXRRx78bFFmUtwsEnhymuEx3qSVux",
  "key36": "jtAjW5uNfDMdZfKnUCiS8e84j6T2WdfKbhUUupLV9RMTZacxqpJz678yaxC7QYU1k8uqzagumayK6hD6U9nmDDq",
  "key37": "vutQZ8BJDJuGgZDtRubM5yeRhEYFdwMbGvVPqqynD4XwVfBhSe2CFgFzh7XNrNh5PB6CxhnYHvpmWaQKzpqRYcE",
  "key38": "4UaEt9FFSD6DaZCDNrCM39uGa1N34wHkbgoGEqgWZJd2wy1kM9PtA8i6ppVYSMrZqogstvx5jAsu7pB8tqKXVsFU",
  "key39": "4iuv1uXV6Pu183dFagNn1r9r4x9QCkZe32yk1CsnS54iXWAS2p2enTX4JRfHy9rCpggNismJUE4T3H57mg6EWKRm",
  "key40": "2JuKZWDC6V8YkjyMd2gqK8NXjCA4yEWWWqtHfWvy2jETjDwZqdWEomnXFDzhxsV4V7yFGhyPmvhPFWUoYiga36SJ",
  "key41": "2ibsWt9HMkGtFTybZK186tQJtpHyhmJMAtzdBi3ZufSfz8rkBe1aEJZc5AVCXzirfsDaccprXTr3psmHPbu5b5pD",
  "key42": "5Pzx5VJzgmxsvhMwCgYCdCPVav7dNd39oMVupxbEP6hXVGcEN18eHf7s45vGd9aeuaHRwRk9pgkh2jd3f9HTWQjx",
  "key43": "4He9AfUC4KuY6CryfUagPPWcDxgCWzPPWKx1QVNj8NvSo3JwcRYphhAuH9ZXYfDofgtVoz6ZWPQV5yToxCoTnxh6"
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
