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
    "4C64guwmzKw1ifjJkRdXakuHntrSi4RGitTorbTbHx6DLg3y9crKE2cv1KYSJ4qqP5MSpf46cgdf1nYTxyrdqLWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26DTZY3TVvApzLR6RwjPGdNkk3x4TTBY9TCqvcD4fGN29Dh62itqRQSAe79pF4UpQc9yhFhQkeyAM5QfqAUnakdx",
  "key1": "3kie8fcJrhtYk4SGuZgpoUDSfb6GBbcNjU9e2GGJbPwq2bnSD3JGFR1vVdDR58TTpWAsdPxshXheeNpQNSiUJHGt",
  "key2": "36TtzUbYpS4t3yYQETFmnhwZojXCnrVU1mEpeZ3Dp8Fgrbv1As9WftE3ZVJFHoJD8hEb1pDpSBrqwhWGkgc5cQTL",
  "key3": "3rxfwxSXMdD2zAdYmuYGL42gSyggAUxEJK3NYtq5tXw4gsLtdPb1zFa2jHET1PbqBu34YVHyh2heGw2KjQr6q8Np",
  "key4": "4wKdSTkLueugBAgJaW8FgV94MfGgg7XJgug8AFwyWGfVS6ZFPe93ijrXWS4CWDY5FYicjocPTRMFoAX3caRyHNuT",
  "key5": "4ubrhr2LYYmDdGfdzZao48hZfmBSk7MgWi8M49fE7D6vCEEJL7uDofUdvjZDaUEW9U2jWg8Sum3xhopkUbLVdEJu",
  "key6": "3cUa8fa2yQBVuRGDFDKUSXq9rPuyfiDDfDskWfWUUMoJH1Kxz53Y5HhfUkhpRbZAbeSCGzYCSF5VgrqZVQBNGCNN",
  "key7": "2DJ8jgxQ1SY9QK6t3A6rVNPQwKcjMqRK8G53WkMtDapzoEERrZmDNkLUijgzSV6UvuzUaL1TLn896b5G1JkNyoWX",
  "key8": "2c4U3sm2brpRx1cegNmrhASyPsPQWuYViwViH1iRK4cFY9DuedZCC3jY9nzMH5S7sdCBgdgYEpnjNLASdM1QMsUd",
  "key9": "3DfknLXEFV7WN5iy65DDdFpYqNUEyuqkVDHxYCpx4HKatcFxPh6yHBHnRwmWQrA38QvnTMkArtjG1yMHvJL1qyz4",
  "key10": "5dcYx1vfvZaedXeVPCj6h21ooi6tLz4tJSLdv4HX6xzwrCXHXmFr4tJHvFoKg728Drk6mC3bHtyGSihDWNfCbaZL",
  "key11": "5uRM2quUYWurT6ySWQzN9MrimBwLQ9KLbNoBQXZzHbwSB3UiJC8zXiJiwcVhkzGFj5ZGfzC6XVUy91ta6Aa4zk6F",
  "key12": "4Ky2gqx6dKTuf1jTgeoCSrmZU6MSf548GbbKqsDVoKBaZ9oKxWYedmLRghf2EqRbESf2EjLZ2h3ZDFMANBFJdQ7d",
  "key13": "41aM6bVstH4qWHEFXMzcRJaXjKVQTSBMPf8msnJu2cgJnhB8P7VLRk6eUERSEervK7ZGffCFESLT1aDcBpDdmZgX",
  "key14": "5c9cjH64hf1MpWUAqDezwp1tgTCcWtJVaEzwRfA3Rc7a9WFtvbuUvLkzfmb6YvEAnA69h1bJG87Y8VGykTn63cDy",
  "key15": "3nrVu2NZPxJQLcpfbKkc5gu8PzPDcu3mMxeyStWCSFKfe7um4XFz3QhKca3WnzfG3Qm2fvmwyiU83CPcTpcY6RYP",
  "key16": "5xgztmjGpf7C8D1tNXkNb9AxysLYQERXdJqogBb7qkmdEHjQTS6A69v3kaP3RY6EtEaD51XqsudpHGUS7c73VR1b",
  "key17": "4nr6bBZmcrwxvUZaFDELpme5jypq4aBdMfzRrUdD2LLwvmmsXDzew19p5PU3NRhhnEh4qMUTQG1M4jV8zHceuBJV",
  "key18": "2gP6Z9wjZUxBi94rBHcrSMQVoM1M3enLQ4bMN3a3UENF6DqWpbNHjgi4Ywzred5PdB93GMKYDg9zpjiF4EEt2FUg",
  "key19": "2RCbutDAm5U1CxF81J6cJAT2xZ3nb2Q4j2sYc1KqkJPAe1FT68QkevZhC2jwTsNqf2EChCBC36iHkrQNDboATLLW",
  "key20": "3dJJUp2W7GDE8tS7VQpAT49dMUTUEsB7pRK8MVeJ9thcam1rSGysTC4FYm39Xe3Qpvpoww3jHvxuHh3FaAH61Pze",
  "key21": "4c8GR3BnnCmFjyuUVXmBpHxnfT2rfvL1j1edUnqRHJqpKRLZvnhJgszbjWAE5FgZuQU7N7PMVvFFTHV99876kQ6o",
  "key22": "38Y6MJBCibdYmegRto3944snP92SQYZkCY9di5sSBJyH1s32foYu46GZa6w6o6vFYRiBeK7Eir4joJYwaAAKLXnx",
  "key23": "4fatsX9Dwq6yLGHzc4HpNpur2eQacvtRXLm3hwhpEPP52ZsLde1nF9zjryHmZgnyjpkpvUtkhEvseLDczceC8uUC",
  "key24": "a3LU9yr7wk2hTEFMhyN8vMDgYU57LxAuMf4sy39jf9wBe1hJntUbnFxe99Mn2MBiKbza7EGLuWBcsturPWYCgTT",
  "key25": "3HK4qk26gNeBULrKy5YFfnEChwtgPyzYyXBr7KxU8tLXYFRHt4bE5ymEb1ZJqSec7oLieG3K1n3sVtXEy51UPFig",
  "key26": "4GBr1Yx1WC139zhCV7CRhx5WCQP1Q3S4b7QBu7LqWWx2k89VXbFAxQdiGN1B1Wqra6CNTyarFxw5hpoUfeqwrkfv",
  "key27": "5RDsx9to76n24wPtHF9EqMGecCYuxbUMrxXrvUgnkGDZTr3TH72WAiYg7x5WjsP8ADSVnGnAz2qFHn4JxRzRxxbr",
  "key28": "4dBEaot1fWxky65qBPAt4iLd6JMcfNUtLPTeCfvHceYZRvV4UUvo6Chubb7ebzxTpFr8Aqi6G1pGkjEGJUPj9uAV",
  "key29": "5MkUknt1GdEjeR7EJwyzSxRGQtcdefzSxsAFnKczdfpgA1uaWAsdmgnMAPKgo7VRUFRZhAYKsZoj1kvnzDucK8rn",
  "key30": "58nqJgVotXKdxxrDgrAPY9tLD1gHsxwvfLoZEm58gK3vBGmDMdM36cHMnB2DxoQh3dpnRk8QBATtftgWvQ1kpmmu",
  "key31": "51ncefgsxddM1mmeVG3kLeQmUTZY7xat27NqC9i1Cjmeb6FjbfZrwiyPDtgNQ4CyScnXYe3Hh5YFa4MGQTtpa7mP",
  "key32": "vbNDx9ZPQW9oSHMweVzYtuYBixJAKztRpKmRBqzjaUQEhkSQbzcw6YJ2usQDtQfBXo1PdwGZmx6VdsDcpGVC3RY",
  "key33": "4ocHeQPi6QNaLZavjzcMCfSLeE3xgQReg5A3exgXpG79De2M9C3mAT1G5hXCmmXDtwkByy5hWFyN4mzshr2wvKyv",
  "key34": "3jxvgafgg28f4e7bir5jfSbShCmKw1MKNXiameDVTNPafuAKGBvTVySpGuXFdNDJKMdtfmu1xrvKhJ46d23Ghm15",
  "key35": "63unpH88xB874LzcdV9fJv9GYnK4YHaiUzV37NJ2zhZ67cDBsUEn6Vov1YAPm2PCgp2cH9hYjVWVkYs5wDNyr5RB",
  "key36": "xffGfSAUC1WCL4eZ9KjsfBLkD6vxUSSjDCCBLnetfKCFyyCULnoU8BAj89n9i2vKHuXS4ZPkGyzMAxpYjQWsWWo",
  "key37": "5PfgBo6bGdFXcHKBvdnxYNcwrNZBN6JLGDUpG6vKnzG8SEc8m4szj7hjmfxg2uune6RbaKhr1YX5dLU3EmpuFf1S",
  "key38": "2YdgNZ6ydQUfbQpagdfg1Lbj3Y1vALvyQWawsEYkrjWqdbWFLDWUKhcwipFpEnTw3Yfqq1E8iEweEJjMVujJj6Hf",
  "key39": "K2HD2zMGpN5KEkezh773VAqVepErYPjmjMN7ac5vjgcDtC9dhocz1TZR7XCHe27Hr7gU8uvcBP2njsiSMudfcLM"
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
