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
    "FxseQrDcGXWmCpL7KHRwZBtdgRrzD2uAZUSdQEqYdpDbWiV7xizYvfCEvpXmvGFxe8TFKniFoSV5wUPLsvocS44"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DYkk2x9f6nAgmkHci1AWruisu52FY6N8gCh2Uu53GjX66WsbnkcEoMkr6JBg4QvG6Eh3SFWKyediuuPUFYpLewT",
  "key1": "3C2N34Ky2id7cPnZeA6AqsbL2sKLaCmMNLJwQFb95tsFtXS6EN9dmAu6ttFJeWohMtiE21gQopkjjXMom13ErpUK",
  "key2": "3mE1gFysGQRFn18LkNNbYJhfvnBYBZj4cNuaRuZ5dPkMvmcUbboSYL6rjPZuEB38FcfXTbe2yFzkCn2rARSxcjaa",
  "key3": "3em8kg8eKy2kcUrvtimgEw1BkLgjUHqL1z9edmwAf6EfWrHNa6trYWftYA2kmu2JyGTwrPXnNjD2VLjgBbnENggv",
  "key4": "35cizs39nZNajDNPMYq44chfK2nCjUn6HCvyjxe5ZXyvGd6AYuTF6MJiywvr9t492asQK3yFiiV7mPkSw68w5EGD",
  "key5": "5zmCFSAjaR1RQmbdPwHgv4GAhEkLLCEETdjarLL5bYgoQAQkeNwpyVoAM7U5bAeyb81FmkjhCzErqTMfaY3GRSVC",
  "key6": "37C516HQLKannG3jnd7AidGgaQ9MsK3DXXU71fkMHohBWoczFAUuUJG2K1McuRFPXbBQHPNpK4VnXkCYJ4ZG1zo6",
  "key7": "4NPztToBGvErzFxUcE9xytd5TmNy33P9VFQfMVUdys6WDPQ4c5D9tVEsgs8oJP4PPGUVotjysmnUXC9yr8GXqsyq",
  "key8": "63vhwHrSnPESjwwaf3zgPRg3XtYN4auiVvvQ2Re7HMC8aVVrVGrhhFE3i7SHUHVTLuRuoKWPMdSm7JX1vG58xaqN",
  "key9": "278vbK4tYKAQgyg7L55GVA4c935HLU2Houu935C93h8WCN9CJJGjwYyAFVyRPcUbmANpWjtSQA9j5hwvHiXgWbFA",
  "key10": "d2FsMx7kafn5EuvVMoJehLAS6gjGmbgdDudYkQJxNiiFie66JG7iNPk26fpfLdgKjDXDXB5GjGYAsizmPmQwpmH",
  "key11": "4NpNw1MVh56PEgPepDCzintwmg4XdE9Emh6iTv4LCkTf1H7sbqTgtCSEfMCPPWNvgR8KZBymEL393zxnrdPitqQ6",
  "key12": "44mc35LWLzoUxETvUrFJ7dYma4RgZu99wH9EHZhCVFVzB5vVho83JThbRwqKYcz7x4Wv8PLW7dLVvRVuMiKr3d1J",
  "key13": "2V9nU8oDaV3hMNxDpZEGPSoBEPY8yPkBr8v9yw963YiK9dW5AhcZHYwkbh88Nuaw5ScawcWDzqpL2yPZuftEtVBk",
  "key14": "5CQDnegtDxneDAVa5R7Y3nncev52wnCdQQrF83AzBMWYzCezFQuftvghBeUufFH4hZ9tjsmdFSaWC4jVhhEvCwcn",
  "key15": "3ijf3Y3jzNnRQRUoR5kE5byba1Ee1QpsYDCiLeNyEBT9grpAjWwL7NThRir2jA2egTWsJQkyB5aCpoo7wKF47bRj",
  "key16": "XMz7nrymz1sjPUPcHXbCLC3zJbJsjkBUFHw6Q222La95gSXLUHJq3yxE5F2Npu7kMAre9mUZKhYZrBj9Jwe9qrT",
  "key17": "4Pg6daeX1hA3hdMke9KsrW4a8N8xDrkQkuL3JhoU2i58XgxcLcu3XAVL9vwgEhoZTw46ebTyFNGkc8bnc6Uy8j3U",
  "key18": "2JEeqKCVFxX3pBtwFMihr58BUXwsQafXiouFr3By2mrSRJbGxNr96p53gMDwaTF8h8RX6VxFC4D9pmPcozpYdeRf",
  "key19": "2whxa9DpjozeXJDB3bkGkh4JaedY54vBDs3TmRTC98jZEiP9Bbi2zcwfsaDU2irERHoU3u1Xvj5D6iYX6HusZtWL",
  "key20": "3HUjPvxKyid7RzGETr5a4ERzUF87GzvXfZxTn7GnJ9EkfvaDcUjNB1vH72UGCeJBq7C4ec652QnndQxEAqygAzdD",
  "key21": "2wnTYQLLa8W8zxjgLosrLMZyYwv1EB6Ar3uK6FhrBLD4tQa818ikAp8LPNG185AhnqBuvJaeXVo19o5MYLFcNNtD",
  "key22": "2PXFqLrLyw3Pvi92NF2qsCpBuocaj289YQNQPPiqwDkhvsxbrVMof3u5UnUTpUcxzKdRmmmLbrDs9saJycNpZR4g",
  "key23": "3eehtFXPsAVJTXuXm69ZZNKfkF9q29F5qkzeXuiAVvWM7t43ZeZdeYeycNzqkWQmVK8HxZGUYqNV5Rp9f2aenwZs",
  "key24": "4ouD3CPEpsumbzWwgePMqb4tazszXyDChv5DNawjnjKN8Y2BHdZXNW8b8jTDgejEwFJqd6YAQXHmp9eMZkhLiaTN"
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
