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
    "5RKo9JXXL4h6oPeitT8C2dBQo2xV5L4gwaPLt8DDb19SKSBVe2U7aG1DPFWm4B68ktVR326CH8ndf2HGACkBQ2j4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ZU1jRP95DUx8CdxA3gqS5yXbYGwKtrSh4R9yxzR8HR9doNvYDE6FoKzvjsaFnnqfpaWC7jArb5twUhg8Sx6b6M",
  "key1": "w75awTtvawpxS3EFmeSUDMoz2WZViFXQhUhiSx8o3LMuM42NubVreEGMqdrmr78njBC1NeTRYHQKdPF2krhmtfb",
  "key2": "2CCDKTR6f2EZ4QLTe2f8S7TXEKEX5gaxFARmqJ6y6TiTEvaQLCR374dPnBeRpDv116k3R6oXExG5iUEeeAKNwhmt",
  "key3": "33EL41XqPwtpHJW2kkTSinh3hbVQZkd1K3h2biWecuinGC9xgqeK9VJXkpNrkVAia4TNAXhQG3zqMNP1qFDECfHS",
  "key4": "4WNE5ZdMo46PQuQMNyykkGmEhz7BRWmGuDTKVyaReqsCNnVpiKPs8auudn8Cutv71UCNGhs88YnxzP6tUKGVqUWN",
  "key5": "2Mb5LfmmW58AbodMAi4Af9dKEbkgPydnTVCz9miH9ezeRPZ3bBGJj9HVg4fW4RoRidhnRk5m73TXrhmm615891HS",
  "key6": "wD9C8HD7V4BcLoVH6WQHbnfUicZQZQsbhKayhv8DBe1MWaqbLdoeTufrgYFyEovX9ofKe8jsmnBheX9z3XBRezy",
  "key7": "2jqTpDVrZv5gefkEZYvsFeGM4HAmfXbqWyabvG7VRjhMSTxbo2rnPzeEEGdGvsM6y6ugfG7HvcezpdCuk3SdVJgA",
  "key8": "5dfgVB1HFKJz1cMfcCqTNvmP1iZuGuuo2VWjNZtX369iDuoDuve9L1odiJ3nV3jqRi7HawWNkKLn7BNLTUbCi4Sr",
  "key9": "5PqEGLxSdMFWfzdoZzukELnsjhSazUwM5gY8SKtFhXeAZBwAuoEuAW1nfXQqQmDfsAd2viwx6KzLexWeBNHXbgHz",
  "key10": "3njp6Hos5zJHJ8nbiVgoDS9jFgYaYzafYg7CPfit9cV18evjzR1ZC9pU4zvhHbNtXXZG39hsVzvh3r6o4pSEnzvQ",
  "key11": "AtNNATW1mSPG93G851hf4a2TxzD46zq1YuxhqnBiDZcmVMibZyHZ2a2EvDVnpydcXYpB9qNKHuJpiD8K39fGzPa",
  "key12": "5FxZL2SSg7gufJpWFEpaPSvYUQdHN3u4GMvs1jPzAc2q6ChNhbNMKQ9qoyHUJzAz93wuX6SWqKnCEYiZGsqLMfZJ",
  "key13": "3ugNCbTjZgRri6b2oZEo5GXatZckgoCu1WEeVs4CBqAuiDKadxpNtu3KnGntDavDasXjTnMfD3FBQTe4jcXr239N",
  "key14": "4Jd9NMLzFzMfRdyfpPRBphTjLdK1j28KE7J8bgF6cnDLDXFwXE3MeobuULvPraFGF7Ak5VvMy7dPMNQNMxnsGXs4",
  "key15": "41W2u4ZpjXt1WETaycSNacfPNokY3jRndJYMuqimDWG3YQNdaEroRTpuuAY5EdCQn68ud2tq9HzXUcxH6c2drbGW",
  "key16": "TV4ep2RSig5wntQn4tUGinU9Co18zkPjJrx3Nbncd5PF6UH35cbZs79oWZYgE5ujwrNQcBQS7K7gUdwRYJmtTAi",
  "key17": "5VquaAAv8g6AKGooUyU4o2sPDQfxAt7G9jeyGkPZ6CudQ7F9PweUbfGZsAaqAN4rVRrkm9C7JXRsBM3RwDRC18tq",
  "key18": "63Hm5UcsiL71urJk3XHoZ4w6z8Km2Cx7vhqgAdtyyqJj8xsupAu5PReZhSfkZpNpSZ3JFXS88B3Sr8hZrRbvEv1g",
  "key19": "2eB7WkFBZxm4SVPuPWQjieepkw6DFoTJvR9goi64XYaWxdEJxKMszpkW9VrWo7UxjiqN7ZkRG311y4BnhCx9S1kp",
  "key20": "57buvvgWZYw98okEK8cG2xKYQRyKzpXdUzLkcVWyPk3Zb7duxtRknsC8Ej4eWDT3tSYvrqYPkvUBy9S6iFurBfdm",
  "key21": "pTDC83r5B4R6xJ9FmFGaJbAvSY9g5nY2vZNyNcp1n1885hpUjbgBfcJva1rE1f2u7ZW7MddUvkYeMkpjhxvFoBa",
  "key22": "23i6YwyySsRsRMEtbPD6BMahThjMZHtKi8mmnVkCcFuejZiMVZNR39awDc2ZHdb2qCQz1JytkiC9363uUaNFEfys",
  "key23": "zX2sHLjRgh5xSV5tA83WE7w7tGZqGHvXqouA4UzDR81osybWZ6B5jiNQyz7u2tLUiMZsnohZ8mo4ovKf6rVB7FT",
  "key24": "rVVyGmUbEjatwxFJp1rSKWTCjpSvicNrvpL9beFMN7q5fGXd4spaXCCBzEe58R5b7g3jKKSZom6rvkY7wSbUNUE",
  "key25": "2VCm4XBMHmFsrASYvKMjrLtY4iNNJsH7FGjPeZ8yoMgYKGWyhDDnyrL5mF7wNgsf4DDYri2sChhftvA6UgrU7C8F",
  "key26": "2CPmNq5r3LPG22bL165NkVQ9zQLzHikY5r8dWssWHPpiNeQ2hnHtYf8PMvGfEXqa2ZtTS37yMMQu5LTLjyTxZpxo",
  "key27": "2Qed3FsYhbDQEvZUiW4pTaLp6VHAgD1ebHDg2A8LLoFwj4Y6Lw3jLmKr5vrmYSBaKMKREPwdPNEArMNtELJfkwqm",
  "key28": "fQUhsPcZyaHJJsRvBJH8KgEzA6GLrnHcT6fp6vzjfvyF2FQB3pnwd5JJxUxohRWhea3UYDfkKiUJ1zP2VipPYvH",
  "key29": "Nfwiq2MYfHdVkX1AQsFok75MCmrQpHxbR4byuFpgn5hhu24XfaQ99Wm9hifFBRdmVNr9UvUsBusWZvgZJMiXbD7",
  "key30": "2zmNzBkzWZ1PRAHfmTbMGUcVSE1qXk1twNDZVt5JLqTjuSY2m89a8HQkmuctKqnSJ4QoQG6iiAaeKE1EF5cRCcCQ",
  "key31": "33gxNaGLLXkWtJZjLXru7T662EBmxCLhGAdrwJx4i9HfSLAvvkTki2RDt31U7yvRAwQorKtFDegovjHFDa5WERtq",
  "key32": "Qn6E65PMTNb1YfEnq9NTd8yvDCUT5yA7iQ1Q6kahBJnJ3UE1cD8VVa5wjxWjt4B3JND7BWFprdz3bjN4auK4Bxy",
  "key33": "5WFyDkLQeHf18YLwV9azaoxQphUbWnmXVG5x38r5Kf9YpnirFV9C94MdzMpMprh2YaRh5m4vGXGJUpqPrqNZW2Zn",
  "key34": "ZZd5eig4vjScYfq1s4rx9Ks4KdZZP8bHmerxsfZSnNP9rhnFkDxZ8PtD6TFtzoTKofCR6iGhmuu1fg1C83RD9ps",
  "key35": "4MmjEAP4DihnDFGwTt5HpnNqEAYpCrcYCZJLk3A1xP4uhjsio5X3c7XMHngCQFRgMrD8HZMkhgUDCBzLaZWaGezD",
  "key36": "56iyiKMtxHi3dkpAzAjvUq4XcWzu6PE6zPgvMnfz8rDdbYoGZzBxTeJ3YohNiBQFVMy3kkQyca4bcqVg1Q4e8ive",
  "key37": "5qjjYtLJQs1umMBxt5HrirnZmRegrunHbNoqybKoSPv5Jevn3xppchDTcu6GW3WeTSkCdUGn9gB5u6RKjd2dAUni",
  "key38": "4Tg7eghiVBEEap2Ts6R24q25vdychduNxeJeXe4qkTNPuaShBEGFbXMpYX5oQUA8pNrJVxJAE3X9qDTK3qVs9CS1",
  "key39": "5CXQhuqUkxARqxjqiynyEt7gGHhiR7wjhv28GFyNAN2k4xkthb8C1EBAkCgJx8AhHkFWmw8CDmmR9geZiwcRQcZZ",
  "key40": "JiJZLUzWDmo2ivDsqiMYKXWtk5kAKY1DNwqctSSkiz4nop3eMU7itqYgJnH1GUdFik26ZasoCnrUcXbLHAbXiV9",
  "key41": "GsTQdFwFUucPNWbqkMdtzAfe5VzfzsJgAwYBagoVyuAwXkH4vN7DXekFEoxDZ1J7i8iHXT8r4XwzAQw7HRE9qhs",
  "key42": "5ZUbJEw2ScvLGuptznDLs7RypzkYn6g5wyP4u7586rrcJGmacbtfdfBvytbQNMJ1S9Z2ubPoyEbFRgH7AhFbUNCx",
  "key43": "3Rn2XrsQrUAWG2PXR1N7sY2QdFpTAJ3xy7YuNohHcD6Wa55MRKMZgJ6dwnQ6ywiE4tfAZBbGYVhQ1oc6gve3f5RS",
  "key44": "3bUjiRNCYPMZd1DnrsjfRvjMFhRZtyz8HKjFxoZtmqm1p4nQFvZEf1quoQAFhWqsLvtLAi73pMUJjbVS671Lk1af"
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
