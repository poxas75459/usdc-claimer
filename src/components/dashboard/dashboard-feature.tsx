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
    "2pTN8JdLjpee8GsyvqJXsh5yoT6MutmVP4aPPjWTGyPJNGjkk9iJxdKrjt7w38z2bXpY8xj4eCMQbs2tkgnoPb7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kJQ8TqnGZE26N7WT5esr2A2aZLgt6hLz5eH8N4e4QAgzaH8AV9G2RqfTDxYgtSbxHN4WhLVr5udyPhSsAqtup8S",
  "key1": "4iu8KaLSkCQRofpgMFygP7ACJENCv7tH1XquAtSrUxjtT579THitJ2DiLBB3ojkaC7WwFn6vxWfsK1h2AQGbaXTE",
  "key2": "646EewbmG5TskNZaw29KqpPd4nHQhSRawDAWHPQidazgoELR6YZ43iwMVa8DmNrNffvcLDoszpZfQmejd2e85GD5",
  "key3": "24B592wbptB4CsdgugaZGX9fz9WVrLzJjK4Ysw6ouGr5b4siCBGFz6DUXo2tbcHVLQsUooSki8bkQiyVrkUm6p19",
  "key4": "5ihT2iFrJDqQ2LYLSHQcyUJMSsfUVkzoPLfiASi2b5JJfRpU8wAwGySbk6NSHLNgZ6TtNJnr5BDYZ1k5PWQ21tiE",
  "key5": "3Sc4Hk69pHqfQroV7bB8Tt6eWJzUJU5gMQZRT5JpERYr9bmGFJfA65VPuobxMnoEcGmJGVoKHHPhMZZBYgRStyjQ",
  "key6": "FCbuAG9Gt57XzcSDZwL3fYGkgVUuVaHWxKx1J4FnwkFXqraqS3sHvHuweD8awmLYb1Q62MRTtF8vhzFg1KN6pzk",
  "key7": "5FpdUXHsTSXF8Kwp6w8eiA9S4VxRGK2QfxybJbRmbY947vEXaMZNfA1PmS7amByfnPQyhTZ8We4SFgQSzSz9Zm1F",
  "key8": "2b6V4G2QVDi8xWY2AJrvz42JgXe8KmoawDPxsJuWm69YyDaB8DPTHumdpKXQATsNxPzHj8R826gkiaDfyWRN1sm9",
  "key9": "47dLamiWaNkZnpmP9sfk5fAQPgPsCdFUx9iiH3UKWoZrekM1xAVksN2yhhNq778edaLUcKybBws3EmhtyobKdrds",
  "key10": "5QWvsfbzgHaPKciJsQf2vCPUaHpGyjiLhtd64gFvRzqo4iLpU6WameiQV1FTSg42awpzA5mS2Et3GyXBRKqBhj6F",
  "key11": "4JYk9MLUgkJx93rM68V9F7uzGfWyW5zTMBgAKoQoQjp5tSkAKNYmYUcZaDKa6MCjoDtfRSTGT84XV34vRnyPe9DG",
  "key12": "57RXn6QgjrYvzGgEU3WdHVkFyms673Xd6tHyUe4PYXjqShoRr2AtbqypKtWzNUmuM6eeBgY68MHq5kpbiTwP6RrC",
  "key13": "3DWHfZc5mK1DD9pFz9BryP8dsJRtEVibWBwkXRNuZbf9rM7TuYcbn5maMU1CBvoxjvufaBMs8MefZ7cTMTxxVe5Y",
  "key14": "2KVWUGaMYfUdcNvxascmT5oCc8gHSuy9kuLM9CP6DotdSxJh4X7jwXzf7ZoP68gSLW2SdnhzNiSCU2DfpX2nNTEw",
  "key15": "2QzhX8MfAA35sodvrdikDBSK8HMKSmvgiMpy7H24D51tNvLramDSC8RZL2vB2kpWG9w8yCk8QDEgwh8Gk7aHdn8K",
  "key16": "4JtYfcrrcJRxZ5hzNHHJZEbUHKRqAUGY4DDCSW3FNhwzGLEKEPu8azLqyGGPvkE5yQDo7wGYKyKTbdJQ3ScJ6Dgv",
  "key17": "2gtkToiVGTMiJvTaLT75U3hMLFpD9VvapiRGMCJtu78RCGx2oRCttJgZEn45JchMf5x5VUYnNoKuav5hnT667FhN",
  "key18": "2ijVMBq6cmzXmfEzcrZ2cL36bKRyU1qbKQKeLgTzAdhL1zoT8451Y9rEH85XJAiu3chPKucjhiNRDJgiM3C7tG4v",
  "key19": "5K7YQwSudBMSSMuG5tuhhUN6SUW4zQVzLkK2rC1PvXR6wncnFW8x2Wac1pw4RXQ36qV8NH8k2XWYR5fUgLgYuJUc",
  "key20": "4ej63yFeEzZnNiPPfzwpRg5XwHnb13Csj737mkVuGssUFzAShdNddwXPAzzDYwAek2yFk4BJWx22phV1brCsAP8y",
  "key21": "2xrkgjwo1PHEMenU3zJ8PAJAuKXHvQKfpnWtJHusj2cUxHXaTpFFaEDS9eULZ3Tg3docLgK6j4URHAPAKrMyEXyS",
  "key22": "AzymS1gc7NAAXQB29f1NZ5y99CctsHqQFscgAs5pYUBsJCxckHYiSGg77ecz95uB6wf371HaEYZGnd3xEMRWveu",
  "key23": "38p3zTTQYBLntra5cK7HpGL7DEZvehuUon4pZywNxDLsShZxJ4kbiJqJZfLDoF9ipK8neVE4uxFW9ZFGUdR87zk7",
  "key24": "ZfWYKqpxPvQv63A2x68Vpx3vRJPH9xZL4gnVuS6xGYeojPAymfmUwfC5jX3sSgrCtAsFc8gjFLpcrc2e7Trzqrw",
  "key25": "kn3V4pNk5coVXWL7neiJsdirZuZzmoa4x3WhZbQdwLtGMvFnyt5ifi8QXiCm1QpT5CHs7YjHhuovEbGABpYCCvs",
  "key26": "3rn6xygJcD9XyxoDpMNb2oywzGRPbFTCJkB1Kciuwqiy7uL2if6MH4Nhjpe3TA2orw51mfgpULjU4PMTdte1tU26",
  "key27": "5CvcVN953NGiCBKqq1npUP71TTjrWDyhZrfrejT5YKihrq64dxHM5hbiUncQR4jjHRS2tQ4L3zMta6G6m6ajKV6X",
  "key28": "nvXLdNgRUHJ27Nj4USRfDsBCmThxkwt2vcvRQBDpiHgJgqexrVSMNBXJBRLUz4GSYZLVJp5fbnd4KcC8B8T9mjm",
  "key29": "3n2HNj1mPiLuTqt6pUs41VPMveZt4CFBzxWtx4S6sRVK9p3Y1kAbNU4KMwT1BoFaBeqE7PrCA1aJDz8gPSyAQLBu",
  "key30": "2CVvSSg6HCH8RhdFrezvrhPkLykmvij7zPf7FtYgpkELN1qDUATrCTJYFcCk8cZGjXHCjVLMu3Q2ZLMTjHYcgkaG",
  "key31": "5JrTzTdFkE4MUcSEJzgWft2SZCofkqG6qpJp1kKYL9VCxZ2jGo36Gi7wyDLCeMQ8F2C1gCjTmjwGQVbhogRCEYjV",
  "key32": "jbQfMQsuqq9pe4bGwtBa2vUFHXiqszXU4Lp4MrXtNyCwXzkFEWSp41Q7NFBKe2FgxdcV4esVV9cmxxeVqqcm7PZ",
  "key33": "5QbxYop2Kwt2xkze85W4mxBgEjMcXZMtDt9cCU4HWddtVR54F2WMAFtGr1wWwWzceyCX9EP19x5AJ9mMgTAEjCZ3"
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
