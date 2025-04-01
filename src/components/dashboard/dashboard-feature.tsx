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
    "2JJ6Ud8pLpr939b924pXTt7j7UmPgTDPeWoma6MARV5mq6bnRzeeKDdVXGvksC1tSp6BDj77XEcDNnsuHiqbP4Dt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZsXbbhnnMVmdXm8C4Kx8tFjmBGRd21CzGemr6MdYnMvKKaQvUKC5ua73Jie7pfLWa1E1DSSNyrSWaEpxTwuCa2t",
  "key1": "3o4fXCncVzBaraVVwcGVCzoA2RTMwoNWcFpnQV4hVeGrqBKVeiwSXA6xQEwhZxH55gft1fJ8UXrPQwAnWcTEwtmT",
  "key2": "4UUAjEhGrrVYsRaTu681MdE6TNUGvbgiuECF3WQ9jj3knt8JvsVoE8zjNvMaZR3R6ciy37gNtNyY9ywxcXheeQr1",
  "key3": "5BT2Z1CyRi5L5dgk3Xb8nWhFYvmubXX9WNpdJWAUX5RX7hNegyZsVhjP23DoHJ5WtYDKFUWSCx6WniUGsuLKc9bj",
  "key4": "2R2RS1zRVkQhdkZwTquDDvykppRoJ2Li5ptFagMMgFycM7kd2x8piQZEfUACZQyfB5cVtHEVqnpbLJSS6cbxg7Cw",
  "key5": "4ik1E8Uo6bzS22R378uieJB141CMRB1ssSNE6ng2dtRApotA2P1gmRcrFwA1JGfstimtLdWpcqg8y9QeTLSu369e",
  "key6": "5Gwt74XNh5E9zrTK1cp6GpgXi6cBrvNyYnvNAboEMSuXAkPrnCMRHpCHoLtfJNPAb8fonH2hmQx4fUZu6iEEqjKt",
  "key7": "2Bq3EeNZKhamK9UM6ZrGLanDV24oksC3XmtbaQqNboWmg34y4XFF24z4ta3z68wvVrCo9cX7g71r6ishVWR9vakx",
  "key8": "4nN2p689av7s5d1x9eBU5D724N5iKKJ4FYEW9ZU2i2LyWj2Y9XW4gbZPzkSj33vUKRZna98SfEnYD5iBAk3k5z5m",
  "key9": "2dFykZN4umTfM91zpKUw4b5gXu4u9QvTZab292HsXhTf8WTzMZMRE8Z6ibNnRA9hhWzeJzpNXzMsj2j861cZpbsL",
  "key10": "uPw1A7udD22gjjzmvrKHyiz4JaCXMtnbZSqVzXucKXVF44ZSU7WLUbVWpusM1C9TDeBwkzDQwSjeWfge1ZYqJ3r",
  "key11": "wcvXPDWGeB1LSvqrF7fjJPdayyj4LhqsUyYoBnSvvfvygFRYAqtrjireQx2MuRhQJumzrzEYUKc9cWYSiJabuLp",
  "key12": "ccpa1y8yVRKF6scsggsM291Y8yCDNKkWEcXGd7zEgQ1AjyLGUv8NxGkfCEJKHFNeYJVEFFe5iwBhxkVrxU7o9ws",
  "key13": "PsSwgzW1WUWeSthCQV4rv5s1LBxzXCKVBVY4NUu61F2FETn5HUKGfuRs14A7MAbzmSoKaP2BhHi6qGWvd9KCTFE",
  "key14": "HDUG1AJhih9LjJhv9CNGmWdbZ2rKyFsARZw616MBKs3AmPTnxmi2mAgtvPs6tw3Y897mprjUGDNSKRcVJsYccHH",
  "key15": "YFthKRe8LS5WUVeSNALogcGNDaJgw5sBKkDGeMVr4p4fgu4d31fFBWeAAM8AFyH4rDdmXKevvVkXgiWSwFt8fR9",
  "key16": "4Smszq1qvAz1HPh3s6TuJ3UpNYpWHgJMQ8L8WLdVeeVuTg5uLMUmM8tFBk7a8gVJnwxRE3vA7WXNKAcbxsog9VHc",
  "key17": "3fNPotsRf76HUxqG5mF3Dc5FsHXnBtwcoX15UfmGGesmavQt12eHvLK2URPtW7XQzdzpeRpREA59MedEjhSM4mWj",
  "key18": "5omPxboipKm6Gb6uF5tXCAdGxv7tLZGY9zWXkzNCQ1wVnoRRMpJEPBjy24BPitqY1a8c6AeM4NkRpnZViwBssS42",
  "key19": "epn757k1EnkLHKC9sHd4cKvyupJgJJapVd4uJBgD291mr6MQemMvU2pTihKgzBwWyrDLd1FNuZWfea7RVRGVSmq",
  "key20": "2CGF7BicCsw26XbbQJyQJcuvtHeFiR4RhstH9xfceBRXDfjExNUmsyZL3wqsq8sXuPWbu9ziPHgEipMTbSxNPH52",
  "key21": "3bDLZtymQ8jTYiEse1jqSLwknB6tJELbWrfi611E1vXTjAixFyg5MgeBmT4YdURprbVziSYSsQyXLmPUMajfdGSz",
  "key22": "2DRkso1umF6qmfXrkkMsZWhFhD9DJJnihLZVKeb6xDYPcA7VxBonAswtbdRY9yKNiEURd6fik8SkXGEuTHdXCotM",
  "key23": "4TsbNa62oc4UYDZVKaEEucMTWvzhJQf2Rgav8NxMjf4o6bQMfQBXTmvcebtmGUoCjC2FP2wRwsta14EBocpA4TER",
  "key24": "3Jw9LfQV9Q6gBryo55msyAg2x4LoYPz3VcpiaGehdpsTKbXC8GKUXZtkMvho41Km9Ew9J8vnqkERpMdmBtXFEGdD",
  "key25": "3KtDWbce7qrmB9PUFoXDLZiUUeyE1mCAjqDG4NFSLfnrPWGxRwiRa1phCNGsqAMYYGYazgtuFjsAf6tJ1L9MbePt",
  "key26": "2ieCcZHSYdZXXNPBJwve5mTnmrZckJdgtZmMA7tYHXLxpfbX8p9J3hxXKS7CF1RZuKLg2fMsjhcX2W5acSc9P3jn",
  "key27": "5aMGb3X4e3yCZpo64dcUCo6NGo157cJkRTBwhdfWnzNPuxq2vj3t9vvo8ZCaARmmw3p5hgNweJVe3ka9bdf8MBch",
  "key28": "4Rge7NxBjCCBLHw9L7FJBcEXbwz2NCRRwDWAMqjR3kZspx8MRYdGd6QkoNSr7HwjVSffp4PDPUsa8856JPLohYYz",
  "key29": "NJzTqkB13V6vZt1b1XRPJhpWKkq39TY4LxCgziUZRkF1K3yrMnoUtcFLdsjRQ8rE1PwRegGHV3ZYne2raavmsfz",
  "key30": "YuK2t5Z1TLXJWkhv7TqrmWfcuzhfDtRDy4ghSM6wghBX3tnjPsyjH2bYUcsDbKF1Qyo61bxEwunhtXQumWjjuN6",
  "key31": "5gRY6scgHgSzPxkPJADSnerFVQWTEvwepDtxS678iiAgwCrfYzkEVB4hhGXo5983GaGZNvAQ5KAtVbdBAmFgQp5M",
  "key32": "2T1fhgZWTHbZJjRNRwTKH3FehFs4yBtEYAt4ngqPy61WtbPy33fK6neDZx9qC1M1qnbf7GghoCXtFe6q3g8guNPB",
  "key33": "TqtvEPYBMkmpwZ1rY1ii6uyNcMCDXnB139Ms3WUfD9sGKaLdQ5gHD7eMHswXzCZGDkichu6ZP9T5q3es5FAg592",
  "key34": "UsdaVtffJCbnrargiLT1ttevAxDJhyjPfMPrnTiTg3QqZWTTkXB2JLDKpS5C39bVLBTftfJo3ptg81ff8LAxZhD",
  "key35": "5hFaJFiX3feMS6qHpVeDyXGrSThnVXfh5RBkkYQpJv3RuWBRnKHXJW9jTxNS4AgtWUeqn5nPMM8Vsb3caaAedPYa",
  "key36": "4Tie1epci4czu5k6oCvRW5KdAwswFQHEAvVgMPL4HmERSsUkJiqn9PGckTjffnwJWhF2E2inQUabego3g76TZESd"
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
