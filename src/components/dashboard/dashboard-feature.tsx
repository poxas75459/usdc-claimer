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
    "Sr5NzMNCW2eUsLvx5Wstsuy1ph7ypXA679MLSv7BAjZqdeA7Qo1TAUKhyav3YVXjxi5j1KCkkpckezXv83UVxfS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CQctiZiMuYvbhBrGStb8QbSV8W36y5JNUbgfi6rGBSkE7JYxoZohVsaemMPd1bvks5rNvhxN1jyKcSuAEDHdLBj",
  "key1": "4K88g4U5XEqnHqCfxEYSiKPMHhEyLmFqLfYfrC5Y846RjyUvcZfasUA1Q9Yi59YxRTRbgKYQr4KopeuZKqZjwkej",
  "key2": "jyfY21eQKg8U4B62WGmJ1hWW5huku5eneGpuc6g6fVYz7N3tv1rbHkMCNk49JtYfyG9tqhCouW18mVqF5oucjF4",
  "key3": "23YHn3BxcS8V2E6gxpgK8WATjcA9v9NKX9fZpMyLXHha9c2pDWbnFwdJH8fxmX14BfZ6a7Yr9wRnagigDscBH5o1",
  "key4": "3wMNsAXBhMFRUf26KNPCCYKWieVYXkX7Zq1kGqVJbCdGWRrB2CqL7Wyb7acVHAnnMRJJ1SFHb6CdNtCoPmDkkYNz",
  "key5": "2hUZZKS7Yxbnx9w1vZpXsp7kmthMM9YGR3oWUeGa5RqktdtsoMJKN4seAVWXAF9Pgx6WoJ1NSpTCeWwEetVKUUz8",
  "key6": "4ddKwLSirxWL3g7mWTR7SpeKYYu5UsSNprq17MWVyc8nouzDGjFyNXqdNnmeBbiRbmtsBS5VXjedJmS89QxKaX5d",
  "key7": "PZXfzauiH14pN3oejdZ459LxBPvF3DUNWBFr264c47pZV99cfordCmRYyPNoXtWzFd6cbnatW5XL8Bsk7yT4yGU",
  "key8": "5duDYrYHX1Yqf9u29o3eP5fL4iFZeafuW7YRMNVkebtFnrtEHsFepjbntEh2U3qXwXRwVZqa7LyS7SN2KMV388VH",
  "key9": "61szXiHzbDmutKL5ae8e3eJnuJKZXehD1PrB14sz3zesWVphCc1QF8wNnk9FeGVN3ueVLKk3ckzNrTaLHJxtKqwJ",
  "key10": "XKtM5aavgBG1oNe7xYK4zg1qd8FiC6nmWDSS1fT1qLRCs5ggaeVAdTfJXsrTh7XYZ3TCDXNGqLeBHhevBRG74zZ",
  "key11": "2iqAgqoHtr5QfdNLBKjuxoKgbNYCLwvMdGAk72uCZQMSRJkaviAqHWKtzBVc6CzKqEpsKziCBNqSWaXGptziQVZG",
  "key12": "5xLCVLTuT4K1oihr1JZPZcWTojv19VK67ruonbjTEmtfTAELZrk6Rq7e3tMvHtm2MiNgxhmpAEpDjwGBXSTWbB9e",
  "key13": "eXMEJesfZyi6MvkdswJNVM6k3WnVHEN2czNv38ToGbtXCyi4P5XSjghSyxVoBf4S4fDEZbuURWv4BtNqi9S6hPz",
  "key14": "47rmEAwv8ooU7gDnVqQUWmXL1QemG8fxQ3eLLR5pZn745amq5NQWArM47fjqTQ1rxc5XiuGFxVzkonzzdnYyGGQh",
  "key15": "uD7RcxAsr7AdzpvcJKXjsmTZ3448MV1QrKcWUnoKuKRnW6wxkZSTz2v4zFiLTKgK94bg1cuKWTNBgfCEq7wAa1U",
  "key16": "29A2yCgw2ivxnzbFhdev75Sxy73t2GQfThmnNEt23mgJd9nXYgT3Hkth9vr6mepFgAZ5nLeu9ncRhjSq8JijbuUB",
  "key17": "59LMuN9budMgEVRPphDidJ4Bjc4AMfBZLgJGcnQTGreE2equxvRcmoj8d7TJLPy3b92b7ZxP94ZU8aNN4LXinCQi",
  "key18": "4nmTtT3tnETKrWPhCnzcD3ohZqbS95XZ23WBSPE9eqdWDEdGkx8jv9MXc97Y1UbK9dF1g5TLXywGVoZgpM3rThJR",
  "key19": "4ycfYohtF56qJe5xj47mzEV8k7dXQhw8XiU4VuWiKndKdzdwYNacS1KutLJEFwpyiz8FyshtjpSSep8eTe6WL53e",
  "key20": "Jk9aDQ1Wr58X6tVyCCn8RAt82UwbH5ysAWuWhGteXHyq2XKuSndBakycwLC2qNNS3ZLdtMBGbcmNZuoazvAiP72",
  "key21": "3bEJt3b1CVePnbUz3WdoLAdthFSyfnNwvXbeoUy29x2vmLDQ6bgkp3piR3HcXg4JUE71sJcfc5omQsdLv7QAj3m4",
  "key22": "4p1jjUkRek7XCC4A65cRbDimN6yumsP3PwzuwDuBbrH8eNZrJMKHPyABGWB82jjUkdsgRN8Uxi6jwJGQYo5eKmCx",
  "key23": "4hV7LLyLWRe5c3Zp6GhAhu7y51batEfTPgW1mi1u21GatQ7T4GYpzvFRQ7JJeVEzhjkYAeWbuZyH6uySB2Uy8mXz",
  "key24": "2vF4qQcqXVuQ658DD8pizFEWPxWdeKyU4LWyhsx4q1bnWMuxn9ARFoWgcaw1msS7ovTHJtLyPjYZx4oaiwF1etw7",
  "key25": "4S6mQ8b8iPAtFUqp16oDMWdAbUDYB9f8AHnmJbfSX3mtZBtUhGGyU6WDn4fFV1NmRVKpeJsiPVS6FfWsLd87aHET",
  "key26": "4njKfB5LB5xL9FxxtSux68BdkdTyUKoJHk6knvhL7DjZgcjJgEzoNdkEE69NcrEGcsuovLSmiEEmzL32EUMZ2ofb",
  "key27": "3dYWAGPnzQjFqK6yBwtz9zRdFb3gtRfan3UEZi1wnoE6EHpXA5ttjRVCkNptrnQeaw9M5mP7egatHsjQ4AfMBCDa",
  "key28": "294cLRpsWC7m2q2nv6TUnB2acH2Souqx9t2MqJKzvpZbFQM1UUPvUW15qZLSKYzV7BHfpdtJVgyhiaEDfS3iYwwU",
  "key29": "3nacxadPznBAqRNWuF3kxfRheg3gfVdGPTFKqXM63yHq7teAPsTJLhnSugiLJN5Yc7PtAShmM27euFhKggQvo19v",
  "key30": "53bXmnsSfGnQGQZuriNg2t26Em2YEPkuUH6Q8SSjv4AkjPkjUvcx3auNChGGPe4zt3DB1XkxZP85KhGpf66MdV3L"
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
