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
    "4YE6tbTMD7nRtKirKe9agqCGn5eU1yMkDV4EmTSYvDy7gjbFzcFFpq5EKY7CzibnwzWbji4xj1VrWyZerkuxdP5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YL6r6FUgzGDhXDZrrPhokjbgmebNXv6ahR6sBQpdgYQLUifbn8uizrY7AwMd4DdXzYnTQNrqN2gkh5DQUcHZHEi",
  "key1": "4hXxxD82hZRZhmZi1ir7yy5b1aKidSEbVfgniib4isZj3CjB9PjyesLh2nEHn7amsPKSXB6yavrzYc2zjjHSf2a7",
  "key2": "4EdAgUu7LWJeSs7RXi2s7sFmuKtDzXtaSrdRLpyBrd6h5nJbiLrxg3BtEbqRswe6dRnW9ej1q74k2U9maCAveQ4J",
  "key3": "52KPLD8VTDdCGcptFeMJZRKUa8WsMgmXi8axiva4CBsSAqeHZtgqg1tHKAryx2gWGaxmh43p8VKwfQrrcv8nRVXg",
  "key4": "66omT8s1re7Ry4SvBmdCpvCAMPrZVUpkkj4JMW3SmgGSB4YceJqeNV1gYH6NtgtaGG9AYRTgSKyMV4TDXf3YyKtb",
  "key5": "2ncLcG3kV9JfWtQbxY1EZRy9JHkTJHtR3MuSeDRRqR9CWxMbLKjV7bGTcUgfLcLWbfAjDA7aH7pFuBtUe23yLdjZ",
  "key6": "5rptdw4FDaiW2QHFU2crsnJdBW966rT1RwafzJQQBUjCvbrxQ31FWTRZSoNxgcSLogR6vchAZuRxJGfgH3MHmfKE",
  "key7": "5EcEArx7fkAyKAiMbPAP5qbyfbCCCapJWRubXKeyuxgsVjBiWzU4vhQyX6ZV6cnQFnAvrLHSjHifPTSK8A2WrfrQ",
  "key8": "5msDbK7RkjDeX6oB4xbgBnSyzjf7eE3CT3LertuPdX9uKEXPc5nvwmFqVqAMpgnDVfHy1nXHYmmivsNJDGUu7V35",
  "key9": "2M9iL1V4efWeyEbRbHdFdwjZ9vke96XB2xdPYwXrKbHdEbCAfzaVkEP7MafPiFZdhwmGy8QBG7mx84cgMs41XGvq",
  "key10": "2XC6fLiHihhkYUmDBKSCyupRNxUSToc9SkwG9VbM4K8ncmAR1UzYnLQD58MQAZwFurbfT6PzpvBPPWMtpFRFKuY8",
  "key11": "56ik1vSFcrTBuMYw5RBYsWv3gBYshDKv3KQsBsJuP2X6W2XgHo4tPQVgsha68JaPhhciGM7gjprycnjJBFEnEo2d",
  "key12": "5ZikTwqNQQTpTbCgjpPJjuTBPxRmQWXEL9GABV1odmyqGErHgcwJDdqL1DkNcLaHHsXjTfdX5Yo91yxrTJrnhqRo",
  "key13": "3wY5qCFaMtP3xnzMskhmH8vXvenEPW1CV62X2FfiXnvAw3TfYcj79fU69xxCxqgsx8YNRT51dcftwwQa4Ubwcj5b",
  "key14": "4W7dvkuFSHRynK2r5Gj5Cz7bg8VoWW7uKLMkCA8DypJmModJSVW9W7NoMJVT5KzN7CBeaNQLX66gEsEdxpRyG78R",
  "key15": "Yop1K1e1J9KNXSZyeH7e3U5XGgy92FXoUf4CurYiWaaTnPBMvwTouJwsjFxzGrzAofS7g8UPMtyA56AzNPG7fGN",
  "key16": "3vmzNdVeUFw6knokjZSFipefqSqevGiJ6kak7LVDg5y6HpPB8RnRJDS24jekZCa4ere5K2aP2PfrFBizBnViyZne",
  "key17": "3oH1zMKg2xNfWBdcJn8soA3nCeggkowfQYJAA7k9Bohi2W8BA3qemg4gPTx9y2hdqZtGCso597v1vdS3i9wFia58",
  "key18": "3zZAKbRgawr2SNgNXM2bFEjDtuFsRvKWVMNgfgVqXdp4fHWTx3PQqDHH9SozPZRayudqH4jocKiSwEHYSe2gTue9",
  "key19": "3qU3krcqqtd1vGh3Nwoqmc5pB53nVoFPCtwSw19xMeVfuVdQ4A1ymbkfpstdkjbwcxqG739HDbPa3dywd7tHjgZ",
  "key20": "3VdETuvA8seEoQsMHXy5xBvMdFiZBHgfxHS8VaEhCMcLSoDdSmShVu3ba5rJCLnGd1PcvjdcPVVqmrwdpxhtkDvg",
  "key21": "4Syvgd23yiconZoi4Y8MSCd9wNU6Rgp227CdBaMPtJQP8yvT7qzLXah776QFxTUNfCGWbNeYEFxfq9jTZL5BUWjr",
  "key22": "ks9d2i1ikAqogKVui1yGvbDoCi8chyZ7bCu968oeAefmpTo1sKeNK8SpRbZB1AyqJR63UZ2fLjPrecYwWNBPpuw",
  "key23": "3oXUdZnxDuoKjpfLLaXkX1nMLWiSnexYfHwsWKiXzbhppt4P16EqUFRXxN7VYT7t8QaKHtdTMoGk8d8Y4hfTRp1Z",
  "key24": "4zqXWzziZDfdfLrXpGza43hXGbBgTktdixKptyqjqExVUg1dtvjHSndt5LY7BkBZw6mEvr4WbFpyBzbDBNEBSaXb",
  "key25": "447QKzC9qtB9uWRn1ViqtisyAe2g8bnuWB6SNxxyinghwv1bPonuRaGLTqfbPCzoSQCkewRZA4HsCawAHxbnuswu",
  "key26": "32d48vTVWetFbAnfAWoDcRmCYzJV2Gky1b7Ezg5BZZutuTx7cvoEAZHvDgmoofh66ZELhrVX31KBZhozyAg26bBi",
  "key27": "4mrUTmAzuYUnNmu1wZozAo9hzgCTTFwN3KvJ5Ea6D6nnXDA1i7oSbJbNduoY8x56x4xFZega6ouDMsFpUFuJ7y8D",
  "key28": "65hJ2yeg5cdpNMNguRX8VoRqX6yH8WNg6LJUG8de7BRwsyFF7Ptm7i4Qp3rJgtRfFsJ5oExPjadz2e1rrVGkt8aV",
  "key29": "5VLruUyVwfFtJ8ZKAj2GrS5nH5U1PrZ1SJLjJ25aAj9QmpLRXGHfrJfwWGZsQkYW3GS4oLshsLxpRTM4y5gcje5t",
  "key30": "5g9sQYr1hJnRuZov6LsNLXPSeJ71NqjUmNHHpHo1GnsxbiRGKL2bV384xUjfTShd2t5ntpUUaZty4XSoLmmvDBzj"
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
