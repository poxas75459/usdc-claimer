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
    "5QBkqg3F5uAesqJDEqGd6F8jzchZzMtA3qspUN8wktoWCCi4Vq417RaLiNLih74UDkZ2Thtcebv2FWoLxpvkwEpu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rg82gJLx5ZNaUXHhxp7rDVLpswr9rCf2ni825YgLj92bRpRuAzhBy3fYgFS2iCsHU6L3aUBHJjc3tpb9ej23otm",
  "key1": "4GVAD8mw3QBTyt5uoYmUWe47ofN4xrdc5WCBKY7Pe7UQo1hj987cuqM4SGLBrtK2TFJBeC7XDiHCmhaYRZSYyVFQ",
  "key2": "5LiiHQpqK66s95zakxEhkeVxwfbQLqmbcXpN616rA995Xq1ohs1vQEvuAu33NRqAaVL4THhrkZa6QAadYGPD6FzG",
  "key3": "5hKgRezWW1KXpVLJ3D7YFKWn985vk32JsqEjJymyTWsNXECca5cCUzV1sSSYU6AaUXF3yUf7z7ESUnJvQ5Kwv6g8",
  "key4": "41hKn9qqkxNVdqXMgroVkoN6xyPrbrA14jUCaSLMHEViU6iS3NxfRWDCLgKF2sW6ypLfKSZasHRTMScibTAzwAUw",
  "key5": "3EJWTyBYDFVn1rqawWFKr2xa2eP9TFMxWdLW3YXvp2xTUXWjeonPs9bXKyYHxkgLSPb3CScpnenSYECq77pfizbY",
  "key6": "2BmaNs9nyZX6iAD3wu3KjdNyE6Roc9FWUcJRQx1zh16TRfio2YvXZe81JJmQibjjyBGQMBMXsH9Jm6tLkLck23Rm",
  "key7": "233iZizDWUhQCTzfgq5tvZ2cEExdLBx9CrpJCGSUVwEv9rxDTRoWxPGXV26dVjhcW7WviNUS5rUj1NiECHDcbZqs",
  "key8": "4FmJ97wiL1LF4nyt622KS5ujPaomeypLduFtiyVXt3AfME1VTBAXovLYdMQwamRyGZYYKxBVNr5ZrBe26zQU5Lm7",
  "key9": "4HQ2NN6JknEw2z4ftaTd1zb88FcimWf6UWGsFaDvwb2bL7etCeVsntjQDFbWhVPrAtaiLswUMPBzmMwNRjRG7rJG",
  "key10": "RQvBaiGn7htwkSPQhcWxA9CAVExagyGefgP9rogwg9xk9APxrvuLcZ5fFG1aAt3tjdU2db5Rzy23zinT58kpcwU",
  "key11": "Qe5ZVnwWyqifhGHSDn9EVpX3kuMWPwDycUQSAfAVXm11eu8ghCJLz3WXDgF4TzWue1DMtpSW8ok11v5PgPCZMXX",
  "key12": "2kNRnuGtRtF2TMKtKvAYRNCkX6aG5dudMi1WGPGFfFx2WqyoJPW8AuND27VF1fAZuJuw62bY5FHAnAPmpTxXZDQx",
  "key13": "5WGZafN7tS7MPosFYR5bow4KnUZ1eCM32j7VcmWahsYwWohJBrQWWv1pWBgEoDfCvjwmdwc7asExASMSjzrxQQDx",
  "key14": "2K6UTias62fc1Y7kVkd8Zy1tdhPHVuyxem4yZABhx9w6AKPqBiPfSTd2WCDw1RNJ2eKxcAuRwxuvUdyfHX277UkW",
  "key15": "Mj2pxYz3B7mttLvBbzPMJsZ6CdZ7JaDnvZSEArkY7V5pPBarXHR4smA1N5vHq7epejYaGMHnVBRisnMF99RujQ5",
  "key16": "2sJcgEeVM3e2v3UJVsaaduYUjrPbZaNSZcatt7KUrc3VJay3SYqRXFnUyEN8QYhPycngv117Mb2LY1ZCB7ptp9L7",
  "key17": "62rgLUC4ZEZ2aARGHWXYdcjwWTdFbFgq7yj1KVagNUi1p3vxMqRMsTUjWdDrv6WTauFWA8rjWKXjyShe5KakWp64",
  "key18": "2UeM8prLWHUa5e4h8XmkzJu6P7CtAk53y6SB2PE6Ty5evTKfqgFcuFddabVPFNGJuTtjQ3VSboPFQbDiByB5H8jy",
  "key19": "27i7p3WvehrLFWewHTEH2XkZoZ3BvQAgcAo34VBouNVWMbW35cbZ5j41kSwJAusMqqkB9WAANtPpz2qpuU4rGkge",
  "key20": "2XPcN9tg41VsuAwJwq5PZzrSyaPoJjQrMnC8VJrF4bwpqgEr2hCspqWn58hXkUf8WSgrZcMGe1WCnKobbj74dLLc",
  "key21": "xfhTHFDfGik798Nk53qyynqz8CctEgA5xJF9wHLbMTvtBZ1Y5fPCnfK5tjFcWJKhNXSwMj2hXj1TbAfJrKzGfhW",
  "key22": "4PoKp3EzWqfeRgt2UAh3ooTBWkfj5NCQseALA33bXd8QX5S6Q81dpynPp6u5QbFikUjY1k1pMbiSS82cPKvCvoRd",
  "key23": "4csxrmicLJj7tUcwGZktHizCPUSmSjiWLssPQy87C4U4z1QGpyByUgJe1wPgdawkeAuCQ5uTyYDCaUZTpdbx5Mxx",
  "key24": "2PkMDcryUkRp8jkQcGsepnNRy8vkE1poebeks7qeKGZ3YDR6ACwNZHiPHDpYDh3ruXtxsRm8rSaqxfhGaYr4zEtT",
  "key25": "2nhrJMGkUBeMU1qkeTZRHBJGyhjWJYCAMJUHPdo2C4F8BNxr4RdpwTunuLz3FjYy4MHLEdEvkN9VZuBH926CMtvK",
  "key26": "4BiF2TZ93HmRGXwKGbwvnzfArLKNbeMVf8BqadctxKZGf1DZimXFiJmEWa3P2xaxLPjtit6giYWNhjYSs2Do7cG9",
  "key27": "aEF5woguunP9a8xJWWoBgwcppNKYU8DoVvpGWBBPHsFfw3e89rUAjnBMYz8y4eNJWPfpBR8gSBwiL7xkbzokFcy",
  "key28": "5LWumMNANgG3NwB2jt8oN8nnMGy5TLdPYjj8rKk1bF9opspFWw9Bb9NHs72Qk7XPn8ypVdLzy2DgDhqDxE3A2Ky7",
  "key29": "53BKGbtwpC5BkD6MFc1vHaDQuHoYP7ATG2dsT9FEXzyBp9LXi2VcRN9jdtQcSJesREhCMB5wqxhRjbxxGPEC1uvZ",
  "key30": "HsuijcSvBVZcDyiEAVD3BzyETBG29LNYjeb7d14D71EG86Trqb1nvV9m3ajH3ah3cjktBSgURdyUgonKrY7nKLT",
  "key31": "5VRHM7WUAt2uqcLvXQB8h2awwYQpvL6G1UCrKk8mqpEcqSUExk84X91YCDEE3tsCcp2kzARzHbCcn7MWDdGSykSp",
  "key32": "3T41ydhdLqDyZN5yjGAe4qcsCsT3tqi7a3ZPTaJgCDdsWnnP7ik474h7uDF7sm7tTdkz2MCWg5q2EDjbpkSGBYnZ",
  "key33": "4kWWhdt4ARSykFusS2CV9p4DTAvGGFXrt1ikheYtfvD5NM5KSRBCXMcVrhRqnqinLiycScGXCuqJXZuBFiC4xBfi",
  "key34": "2eHKsntLR5QHKo5njYwExQUND28kaqBB6XdfaE17rMoVExwABhb55Jrs9adVTHAVLRfJeHAxgozMc4b76NS3oF2X",
  "key35": "j4fEgUwrJcLjbtUZBXHXk6ZZXXbbAfTy7MrfBzbUypNTbaJEs6SRqjG8Ui5yzmFvGsV27qUhqgMsHzAmdGDYjRx",
  "key36": "5AXahuxQV6599xQjQ4JePg4hWHzvzifS6R44MDqeE4ES3uiLTRauYXbVaDZUa4xQQYCAgJnqSfugVrNZodrkP1h6",
  "key37": "58nqNYjVRMhTZfKZjzCZetWZca3p6ehzRknxPhEXzTnE3oJVohGvjpecDXo4zCSbu5Fm7AhorHNGwd7p4sFwCCzr",
  "key38": "xdJiyL5A4V4vxzeyMjTBWHjAkUezRUMfh6D2CGwyyNEZe8QWnCSHPHF7wTz8P13ehQwbyeYN6MxZd5rt3CqRPKb",
  "key39": "xb2jy8C9XTEYwoiH6H46kjneMjtr5B9mAYBjGDTZrFoQ6f9uaXsFEu7nf5HqqUgnJEzWADaY5d4w9EdFM4zcyBX",
  "key40": "2B2J2EUrdRkKRejCwkyvRZemotxvxHVAEc2cjeaLPg8CvGGBke5RP3Xk3BDAJWCbAjCFU9bf9j4R6uVjN27pi39W",
  "key41": "56QwJ5Ewh2BZw9dBQ5xy6ZPLDPebmhJkUJX9Mzx4uF38ui8msUaXgDfKZcNYihhjgrFXX5rzbmg4TdhjSybUQAsk",
  "key42": "5EHbD7rLnq413REkhpwPKbQdDdpAc4eXNfpwJ5TqMGGJyXQVb2QTkTpL2d1TP9GtUNuXxrK6kLkKG35QXUT71PCq",
  "key43": "28LYoEEhUyoha3Ccrnity3wAGJg6bvjKApziGb5UmJxWK78oAnhkGQkn2hon7Qx48s5k5kYqyQyL37iNAjx2DB2t",
  "key44": "4SGhS6XFhgArPysbRznv67wqqHENnwanSd7nn1aG9uGW7YEzk3gN9PZ8hVkuNamUCJTxcWHHcRqhpszmeJTSGiiY"
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
