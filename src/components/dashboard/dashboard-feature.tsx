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
    "43gVU31qRvUZwBEWGwKxnZUUemvcWARHgUELRkCAvq43jkFDRQyYUNU59hCYVC9MHkP8SfPtpxhq7MUTUGnuFBYJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hL3wCgW6bkW8RFYUgszaU7Lc4Ec9oTH88dw4wUK2kBeCefKsdRivzAunkFUJhPKfeX5h6A4GEDztsYoh8dbvEc4",
  "key1": "4ed4xXTUo1xJXBny7HMU3fZ37KSEH79SzvsGEkExRdSi4JK1Syke9EvA6Tb6mMLLGTZXwL8pUKmL2a4pCeDkH1LX",
  "key2": "4gKPCHxDg6fH1RYpZArFRwdLiTY4RVhTefme9s2cGfauEfnvEmSS1cUfeCwburT38F1PVu7LeqKmMiKMdpQQi7TQ",
  "key3": "4APLwQh1Gc3VkMTAKYj8Z5ZRFuNEZar3UeMzKhMtewiF4BhQsHwjq4ERxaj52zBUWr4SGvXZeht972pPYxgRfR3C",
  "key4": "5Y4pPWh6haNJLtcz8Aaa3hna6fEJGyRTXZe9chWyyuVNjSiraMrsC38B5VGPrzKT8R8i87mQPkCKmrKSR3nRbDaS",
  "key5": "4rSJAMzt4E6EjmYPLhPeYuU7X1UoH9aw7G5ssnMt8WdxpZQymFmjpChDMx249SYCoo1wfV6vZAPy671ARsovBps2",
  "key6": "hEbvjwWrvhyMgP2nogk9VhtvAXrjWRu3fV11VJc8ZJabgss2xq2ZWBRBVKtNRpUZmejGj4yNEtdtYcANxR8uFXL",
  "key7": "4zkZ8X1u9X2yxmyMAX4Jiy6wfChyGDHWyhjwDk8n8qwZA1znLke9SWCymrcGpYah5GCjoxCVgcRP42jJumnmjiRE",
  "key8": "3LxHVSwPDSWNCznRhv9QahBL24Cug24Stti8FReGXV15jhj7zs3idA4vUi5s8sACPsrZ4YwqjGoitgXaKMt1ebux",
  "key9": "DyRX7GtPfDCckvxpyryZiLBckkWZkgg5Eumf3uAoHMbg8S2UcJxxhpQbkqhDPejVbPawkqEwZAqn2QB6hU2KWH8",
  "key10": "2SoSkanMW9FuScXMGUJZZn8qZdPzuJdtd212LH3AbjEpADb514M47yRPDHtXGWyAHa5WoY9iNNedb5rf2AkFC7h1",
  "key11": "3Sgn7Aj5mCon3JoDPdCewUjrVjh1nyBv2AESL1hGLwoRtFtrzCt6TwH4FXhnfhqiPgpZ8NH6jeniKUryxhYaiyj4",
  "key12": "3wxemUum2GsWK5DtGtBi6SaT8RC4HbwCceW55BeQVQ61hh21bf1XDsQa8rspuTD1kS2f9geCjbqZA4SD96noFtoQ",
  "key13": "5HUEW1GFtcwxWnxF7sLxiod773jwSLFBYVfz8Ug9DT3jz4q9EcGxRhs1t5XXEnU4b7Hi2cQpvaKT9HFMNXiRHJBy",
  "key14": "4iHG9RqQZCgkER9cmVs6cdE1gDZi7usdtUBZ8ziYghDujbGzbgtm6VowfyyRLhDwgGD53yEBPWsNhvKMZPnVCoVg",
  "key15": "2GN1Wm5NBZk4oArwpKkHPwgiSzLd9qfBAzjsVkteozpeDu3kxx6xQy6Y4PeBLaangpJcSQgy7n6NcCkW3HzQ1d9X",
  "key16": "67WZCXAFYeeEyxFcdpkPf4Q7oRGgXhoiRqZ8H1vaqQ4qHRDKFvixDPnKgJY5XmEQwVqDLGUCjsBwSVNA1m9TEyVj",
  "key17": "2ZQKCcpRR92HnpeQD1GU5SryG52CMkEB4jArciwdVQs366b3VjRaiFo5avSocJZukrEwUNaSwQSLRK6y7rY8boiZ",
  "key18": "41zgFW2iyERwaazQgzCmJpsKvSbov5m9MFDd1QzDqP3wDR59bAE8BPuNfKimnMSCMXUQPZAvHcRPod5C1ngx9AqU",
  "key19": "4Zd7x1RBt5RDVTWBLFsoZGi7Qg9S76u4gMuwhEHAZPPao4fQotKwXVCHGnzeawsyPv5NTMCebBLe4UpbBUWGP2Gk",
  "key20": "32yzAX6JQrsSjeC5NbWCGnZ8fVKEWFg8eDB3MyrfqZzLoojvkvrD5vMaYaR1JM7AAgJtUmfFXyvVSsfbV1bskkYj",
  "key21": "mMvZidH2sLLNmJGa5bq6P5AfGKzrrGzg35wnEz4MTJVBbHGSjyqQGV59cc2h57zQR1AngetZ5NwCmCTcuANkexW",
  "key22": "4Bao7f8mvBP4J64kL7JSLVScpEF65sjJAg8RRwdyPUpJ44wikHb9VYkx1porZeJ2SXbHtisEnF4CH6H9vjFxtzfE",
  "key23": "46a7KBcmuV7X4uyQp9Jwz9VwmxexKz7iF49FLS9T8BZG3zGsS9mG1s6m9SLRbhgimTuQKuaLdDu6LsAfewvtWDK9",
  "key24": "4epNw8tNgqeL1NJ7nW6uavnHPjw2Bvm57yq2XEFt1kUwkPb1vZHbNe8PQjCUvoUGgJ7hcRHmVzuLwgc8cSQ6VsqJ",
  "key25": "5NdcuzHXf1TD5tYC45fxPrPp7FMzinwc4u7T7EmyhmjwRLnWTwszNcuShWFYz5p7MNchztzrQEVMkupYJBk1mMz9",
  "key26": "QkQzPEXBt1SRTLyvrANT1xUA7c15xywDDbnZRtVGGagHUkGYKJDd9hS2Gd1x1HENUumj3Hri1nHXeXY5ARXitVm",
  "key27": "vxVTWrM2rBzrL3vtR56xKjFEMbwSz4FTmEAwAPAevM7GUQTGMGuSTSZmXY7DgwgYxY8mva9hEV6UuwCW7jMX3ZJ",
  "key28": "3CrNBGtoEqHHtWkH71bR1G9xHWZpz3ZbqSvyVeWukS7g9inBGTfoh2onx9Zz36dJG1hxMLyja2X56tR2rTeyPCNM",
  "key29": "3Fab8HmDmkKA7sxXgy3quStLPVRsVmiy14Mt36mWFV2PqXoVEPz7yz5TqwjZCJeT1rhmHhx4LjnCqtPMBuZtMSPJ",
  "key30": "341DdSPg8CExGyVUm79Vy37fPJbvThjNWJmrpYcXbvjzbm2rECs6Gup6jsjaztUZYsNmc7RAmDjudgXLRZDFJx9i",
  "key31": "2ffpnPiA2qmFYvhuZsvofAfbwzZaJxADHREexmJ9NThEodsLNux2EN3MeLFTHp48QTcePMmMK2NSGR8FeUGop2gr"
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
