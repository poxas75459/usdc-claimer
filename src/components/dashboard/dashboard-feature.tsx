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
    "5eXfFxqdSvSg3b8yWsUrpA6ZvmYPMDLfqSnipqXoTPuKFW9om4PPB5JK3VRzvZFyYvsV1h2VH4v71oJModfQWTMg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VWa5KGHpdfCnLRMkdGj4PnsvZD3MSjvunZJtg1hR5Eh4SJh2StKC93yAep1zCN8KTsNqtfY3P5b1UuKJwyjxQZ2",
  "key1": "3UEkmj5Gn9TXsg4tUJW7noGzArK3hqk3hfv13NzBFDF6jUhvPAWWwfnmcG3X6MYEpbNynezyFsBQr9n4UDvhtkyQ",
  "key2": "3Axo3ygzNPgv6NZHrxpmvpCiokqKjoukGMY8X2AFoiqGKPxGPYvrHcrE4uKg6LMSf95jfqFVUi4kesFWP58tLtNy",
  "key3": "5BQngJ6DfvHpw3TZgx2hhAMzAyJ52GbDMtfTkCD3NGTKoWJR3i1H94izRAQg7mYtLXABn3inzTEfWX163eFxy3rm",
  "key4": "uCjrqduYjY8im2NaWsx6v9zPe7tihf9w6Ws6TSBcv9pRieGEQXeAejFBxjjzASoSnWDdDZxa9rt8MhjyexXxpNC",
  "key5": "B2ZHZwBfckmvt9G4Moj1XbEhZVt7nVpHVVc6tHhDMnAs4JWe6qPUdBJ15FhNPUaBPMddpmzJ7vDVv2JnrEUUmD3",
  "key6": "5cnEnagEKEGhxUzpAAqLBdBoptqPH6od8ceaCxZ3RYW7wNFiwQRyrSjecgJCHgstio44tprika3cP6imAJxs4N7T",
  "key7": "5nLXofA4ckQrgevde6rMQnTx5YLCBdNfqkemwsWPPh1bdZXJt8efWhPADPLespgaXUAaYNawiTzNwNuTbMr9nXWN",
  "key8": "2ospw3yiPrmeuQtfgYdZ7ujPFfdhf1nFFDZScpWFt54AzNLdeSY7tvoNKeoAr2B3xWcNxRPymYGo4X1Xomm5prVk",
  "key9": "2jvbg5QgKPw6JsuDcmmKm34vmc1z4USbQkogpYDTFszBKEWvA1uVqfWfg4eGjzAT9LxAZ6DEtpnpChUW8Mv53bsn",
  "key10": "4h21U9cx5dQ9J5m5Fq5jj3aH81VeQPSJtvzRjnG88cFa1GCCjkgN1CF7kkLmj4tsZyXyto7r27328w72Aim58cd5",
  "key11": "5jBrwSg71U9kHaRptip8KwKfBDxs4qS1EdQxg9iWaLCQ6rV2GxDo9Xq4Ggxoy97pDvZWXwFjwyixNBgd2XGH6JYq",
  "key12": "3NA3d4azaFF5tLLsycDtCuAtVbZViNrAiTnHMd4kyE8yxgSJKLfo9gzBV9usRZWh4rstZhYNFnN3dMJ3M695VoyH",
  "key13": "2x6UYNmcqksuEWvLvEsB1vSjsjkM3bxKUbXDHufL887nRHRtjs9CEPbQcLC3oNNxhEyUDE6yz8981BaveE1mmWYR",
  "key14": "517RxjsMeixm1Wfr1tmQmcq5F9WjDk6Q8gCkiEa9X3erAnDoE9UkBRqgMmUsZTkALMWy93HGVYQR3mnxL1Ugv7t8",
  "key15": "36Y8LqeZAGN6LX6aXEFG2aA5bSnaWJ2JveU2DpCPPsuXRAapRjCFat3opa7KKQSGGufU4QvPGwUN8EprqDMRKBPo",
  "key16": "3MPvpjJixsvq6xXMgus1hDz97LqpH21WKddEgvzmMQ5AAJt5QMCUryX8R5JmFK8MM8XMJAkmYwYH7btsd5wCD2xj",
  "key17": "3au2yHx95mYYtdaKHwZ3wjPtbyghGgZxZsabh84qx6NLokoAP5RuNAaewNeB5MNMprDqKpApn8Ty5JdTSEaJrUyL",
  "key18": "5moNsoS4vK94PqpU6aZVMKcDhi7pEUfcjtqGEb4U4se7syKbx7jsR3wf7JustCkenKEjvW9j6S4AtPJa9GPTGW7C",
  "key19": "4uksHsR7yMWaYu3GWwdw7v8DaPSPT2QF8kLFKCAQG4Ga54ckHjimFMDg6NfpW1FRcDgtn6UUgAEHyt4WZPgaD4y1",
  "key20": "5QpQ5f7R4JrPqAyAwwkfUjsqGZwSUFS8aXd8jYvFSGH6Y3YQFA8iDFJdK3xwNGChjJRe6CNeAgHS4VmkkU9ZVGvb",
  "key21": "2hxeXAzba5XaQ7ByDLfuoMqUgBoCinhww5jk5DhEsXrvog5VCnUosoXgg7RkABsVaMRitY7xRmKeFLcNU5jNpvVK",
  "key22": "2JYKZt4srEb8BKGXN1vdoMrG3iHCAnkuouxuDc7DEiSQaFTVEu4jR9ixkxeDQHLaQNumwuGo9mhg6LSe2qcNFXNe",
  "key23": "kpVCoPaMJvRZBBzKapDJij7zwNa9fczdei56JEFyTiAE347qRzJdXR2G2YkNHwHHhup2J51jFqrhnp4G15wdF7H",
  "key24": "4m2GRJEFvs1fxbzhh1Sx1TaMfGVChMepCHV7ZJi7me2u25umV1UbMCEU15MZkKsRi14TEikjddsu2SBNnk78tEWU",
  "key25": "2XJivfD9kvnA2DnE6TntGi4d8hyrCHT7dHotHqDLcn7ggFYdBGA7Uu8bM3j39nRMJWicqUiBV19CP9aBSRqsMfh1",
  "key26": "3MjdYVJzqkJCpS9kWucDiALVVny93nRaZov4YBX2XdxASdJpPP8cK5A9wNFCmKdeAgMTnzwVP3xFKCcBsLsMzgL4",
  "key27": "3iSBC39RdYufbeYf7XEj2yVCtaQSe93FLYLaGVHGpgweakXBjrCpFgdvky1RQnyvgi2eC6SPgdGghdwwPw6wrBi9",
  "key28": "4ZuCeoVf6aJNpAzriRmH3k3wDemX1mBrREP5FfbUeimxzyzzo452UyCKjq8QXMG2guQo1Va2AyWwtbLfPi8UJNH7",
  "key29": "5B1ha1BN4ZfYzmY3nF7nfCN9sHYdMvLyNxWg8GG4ozsBhJ4NKkiQ4NyxQgdi4AM1usdTQVj6WTfNoUwrX6WPbZbe"
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
