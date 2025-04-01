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
    "4LdPfiviNsKDK62SQo39BoYeWnob6H4FXNq1eUyTtbPpeiKwYik4qiWPXzYjxQCorPgZqHBymLNaeTy2xZW7WkcR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ErMXFTHJxrozsUH3pHDpVscA39cJYV9dML7ZRJTZcQfVvdE6g72Kb4ZmEhJ2xUjbrnNgZB7SFCktfvQYz1xEKzv",
  "key1": "2SAaDCuegbYKP5mher4omZSEtq8LpKDnn9BcfRLfMbbhfke7Zh2SfVscp4N5vHChmp9gz6mrveUeYiMe4do6ei3d",
  "key2": "5oQspFAFqenDSKEL1fsyJRpj5p5p9bPpBfuRLBnibtpGa6m8yrexdBGBQVBtvSLmAfKnJMngAfv9z5XxWNfgdc43",
  "key3": "qhHf2XNbBv15Bbe4QqEBrHjXRi1uhcTqYZtAgWgtDWcSxcYxhyvBg8ZNnwx2vKuYCj4UFW9RMd9EQu448Dv1MxK",
  "key4": "5aHWvceGrLTxfEaPXLQgBagsKtrtn4YpUDVXgkrpuSkzhCuLBZeqvkRmXiD6X8FJVcJ4kmaukcbLP1Yae7DWdjRf",
  "key5": "273WnmMobA3kxwuLzmEYxgLJqUQyL8b7Z12DbFKHcmt4nb8PSFp9icsReTwpY85AwEEywr5t7yxqGUiFjn5xgnmd",
  "key6": "2m1y94HxVrbRSQ4ejBPf7bzfoR993P9sLhMQ8dZ4fu1s2kiuKF7QdyF4Fx6y9qsXcpHtW6AN64Dkskm1eZQV13qQ",
  "key7": "2howWEhaEJnqgU8h2ZLurv1QKrCLCN91AbTRAKxUZ4TznzbG9BP3KfxqwvmLU8eXgQxR299GgaTf89cXcPMCfXJG",
  "key8": "VdBziiaz6hewxKJwcgxEopZpKAajQxssQ1wyeNLHGs4wDG3j4D8kFp6r6jyGXg4yjBmWGGjqLXG46iiDt71xRTf",
  "key9": "4wumWFqybnwHZZU3qYpQ8uTa64CwTxGkGkzJ1K7F3eGdaDQN1qUTCLKAD72og99S6KcZRQudTDEHFCLZ4nSJmkJt",
  "key10": "aKJvi4e7wQmxq4mnc2yVAsWfvN2n4aLGmUmNbnumWRFUWbg3MXahx95dZ7pmu9GXnxkCQ6diwzzMapWJeGQEWyC",
  "key11": "CyvvBXBXFoi5S8gGbh7sHCPDbwUFmtdpXNZoohqCLZ5RDixUNwUGy7h1egiszwf84WfefyoKj1ytERWza7Wrw9B",
  "key12": "3bphqLn4BV8qmcYPS4d8uRD17Qv1AHgGRjRSgRtFePi47SCSgRxXaPyHp7rNHV1goBPrsj9q8q9iNPH6kQyuwZUF",
  "key13": "4c82VMhuebAjRDvPbSXorsUCFVNamEhXNRAGboy1Ryq96wQkUo5dR83YcDg3EMpL9BqsjjSLGqhfnWgbqYos53D4",
  "key14": "3DAypNFNVdgZhweMvKstBDtNiYhyqoNotBAAR66i2inK6JoYtRWLHrD9a4Q1WEXRJdkGp4QdwFxgbHM5UXbdEsAd",
  "key15": "f5xiNnwFFnHNnDMiupK848cFgPoshTKw9WWGpBE3xkYeDBGUbtcYNmTbibi6guCfoSwpdCBNa8TaBuUCXtWDApa",
  "key16": "2jKJcnERXZDDYnSUmR18UXW4FEVnz1dQThy24Sp6ZVVna59nVjxXhnwBYYGLuohpPtnR1j76yRK3AyotbSDDj93u",
  "key17": "3Z9BLZEJCiLNf85J3G3vBMH9vU5J9aKvwVwGJnVnSmbM9i7DBYQ4p4wYBQnLJLAvUsQNuddZSGJVoBYwhv895A5g",
  "key18": "G4hRMBQ6QbVPRs2hjX34gFU7zXBuNpaFbyQBisoGdHtnqBneonPUpYpbYqDQjHaXNFd46nmHaF7zoR8EYkmsoLd",
  "key19": "3JSDqSTqVaff4H9vY7fxfVFMWgoLvueSKRP3DAyvQoteBm6DxLUnj9XbJgDYyBc9ViDM8N7tcPzEydPr62vaTJ82",
  "key20": "WB2RnQZQEdttJ41e5JhqjuF5jz6aBjCmgDwTDxzo4chwr9Y2MjhaXsDDwyDHkPfDnV42zoqZbxx8cH48VFoxy5q",
  "key21": "4WAx9YMjvqvNuUtySadbbm7PZJHkGf9CkrFXr8tJLzQhcPNPCKPym9MahSRWaCV9LXJMXjY4kLxCLvMCdETueUZE",
  "key22": "3pcg4D9nbeKwVTmkRpxhhhuzGRop3WshjgSkb6zSpPsJZvo9sdpJBry7Bi3zxU68h1ArPQeMCmtzUd4tn8WVT9mZ",
  "key23": "4H3CKCjCcWGtqpfpLf2HS8yeXxD2gFnRLsVVWVKZWQPTS2HWh3ms5fanNft7pRtFFsb9uCrFA7VdxPTRWASo9rZR",
  "key24": "219EV6vehC4s7JL9dRE6YYzezCrgEshLBtdkVX45YNTRv3wCH44m4ZBDuKkWVatqkKoaE7U4A5YKaFaGuchSQD4w",
  "key25": "3YAm6a53csyurzxhkqYeGhi3Vo63ymbKMBr7gnxCTM9nk9XnHnPxhjPXktfAcbadaLDbFXS17to4fjRgLT95ze4Z",
  "key26": "WEemVaf7Cty9R3S24shM9DFDj1Wh21Zjkbss3QP6kvhudNxPx374BF8Hmos6bESuvLBRXLPghp9HWUpJs2t6dVf",
  "key27": "nYyiZVCJe7uuuT2X3JqdJ2HGbgrAMjjxiQMpVAwhyH5oNk9BwMUSPqf3L2aUZ3TTfJbwy3pYbQchq8SuHExtqX3",
  "key28": "7cyvQayMkxqgpVAYx6oybfoLrpcXsLaJ16gkUWN3eiDbNUD9aorsKRg7qZyD63no9dGZ3fTYeAteN5kfuhRhGbw",
  "key29": "4inXqBjk8PxiGSDuJZofpiQj91SY9akRuTcjcGnzhzwetqeAQ87dK1LZ3ed1TFwU2EsBSTEsAdXiEVnBTxsLmXPa",
  "key30": "3ZaQ6zWfGv9bMibF9tT5u4TW1RNzbdn17h58uPAUDWj6jcuzRNYEvV5maxySDgb5uikMV8Rr8gHxFZxFn27qm4Yu",
  "key31": "5HT2EaAGcDp9z8W9cD3Ja9XivejLV91nRAE8Sy6tfkHF2NCo55wVAokNaFNzFTzZS4pWSmXeKsAej3KmrKEHAUXG",
  "key32": "47KXYMhv9McEPQtVJHAFrvdGtxWcjuFURFVZ8H5NryC9FifA4CakL2BRTfdgzj5FW7hDGGSGiDS9QzHaEytXy3Ct",
  "key33": "2AweqGhurMvDvjjCwmkqZHB3pyEEw2ZiyC27QTw9SM2nT4eqdp8kKNEvjGuS2mQC3at3bdrJdYawecmLKTXpuTqA"
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
