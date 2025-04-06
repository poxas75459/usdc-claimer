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
    "2AZB122Y9ofwuyWiWcuKYgDzXDMJwZxkn8M8q24Mxntes86DUEhXBtQw9hJLJpkD7UJywQGmNhEYroLizLgfoT7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3r3Xk2UKAEaNQdLzvRWfhoPC3E3uDAnUTVDrSb7tX9BcrM4EhLVR7KcJ7P8oXQKZ7HXmqzBuM1WDdGDEUkVySTmn",
  "key1": "3KFmNLmkK7MSrUXTCmz8qoEWHMT6oYTTFT4T1WSXHzwTB412gq1gUSm2MYaK4zPMn3CDGm58wXzvz4igTneGzdWi",
  "key2": "3ndEG3UAQTRuBnRzjCJ7v99PSKTtBjVgb7kqTpS2j1EDcwxATPuz6R2qHZ8AqVd9TtWchPj7vRSuWQ8C9SvLVCJX",
  "key3": "66J7uiYEo7AQtuvyrq96WnbTUB7eVs9XDpngGSFA3sHbkPe1BwyVeWAvXhxU9vuiQAywU3QLWEZEMMNxZzpPYsKY",
  "key4": "24BaiVVU1oaHEWTX9sYcY4tAYYsdsyy8aKGrV6qrxrRjVV3f7ThM5UUx1uxYkk3XjzdsETByefKsHEgmGf5Morfs",
  "key5": "DBpukTX4jSbcjMr4xpTkK2qULyP72asGTw3Z7kLoWYatwmeHGNo8BjyemssicmYyxqHTdRq6xxNwWN4oGpcG6dM",
  "key6": "5tMyvn3TyeaCGP9XB1HHpUw1LpxDLSZuSTdgvZZ9ip32BhezdvQVuT4K8HZUNPA5vtwLTbKsdU62rAWxUUjJH33K",
  "key7": "4bLpzqhvdiimXLQ9FdNwERKBiWpXRL3EdD4Kk6KJnH9jS93C2oiazx2Eyqr3W7Z4HvWC6P3NPWrFzneFotRSvBd",
  "key8": "2GqYrN75VMqow8NgPQVRUjDnD2pSAcz4phGNEyHNwj8XVA9wS6eYUbb7awLTRh8UCVGFT71CoC2KgfXq5AfH1dBj",
  "key9": "5v3zHEKRm4DDumDQfwu7EBE3jMT169yyW8VcQwAQ94ALLbLJ71WYxa5ThVihmwR4Hx11Ji5fd5DcnjKWQ29RKNuP",
  "key10": "5y1qxF8rHQXr1Ygmih2YVX8kMJMwRawDGQaSUtLMXwibk7eMuboNWPHKLv4ippmBGywEctKivkanwU2D4poWTitf",
  "key11": "4ua9MfhytAvPzdmpjCxdjXUUp6E9ZaBrUGk2v1xwbmGw6EjgajxHcCV1eK9AGDHWb58yCQ8yheKC43FeSTd2236e",
  "key12": "55eLdmtNtfW14tY9TNADpuoGdmvSQbqvTrNLoaUhnZu2U8g1mH3V83iRyHCkrumr5RBrqTwqYKqe95jnC6ZEeixz",
  "key13": "EKhwEFYkZBQeQa1RfUfdkgjSyDrV6VRNDLkLZBDaEFPsYEnqCFXeJAKDtPVGhzkLH4ajwpH8LqCwCxyn9LAqTHw",
  "key14": "3dpDnxur2Aei6ap1t74smqSNiuajZSyQXPXxniWSu9zYbjzKezrDS14UQpMQsRXtYV4bCUvPFvdASoNHS8442gr1",
  "key15": "3FXE1ovJQ7vfQPMoVtGsZBAtuvdtckQRMsgKoAh7WeAm4KGFM2NhPKKtWPiELMW2snoa8jAsernKnk1WJmCsh3cP",
  "key16": "56q3fp3Jop1cMsyYsWatrjXhDdzW59UEtQeVQK6mFeTAn4FKh2kvf7dGRN9MGhNHnfdbZrGkfBoPEinaAM1HE6Xq",
  "key17": "2Wxf3VwSsehFCGhM3iz4DjYCTubLuu7tX9NxeNUTfbN53DbgAFtUkKQRu5efcvUrJ2UrLjZA6ribnP6WHeKwi8YK",
  "key18": "4XwFFZq5mwiGkMxdF6yUd3PdC134chPXW1auWNK4HDXEZnWj6kwiaCnWF86fKkvb6rq5U7ETTX7ydYHGkbnWyEWv",
  "key19": "22cTRcXEqaFqXDES9TP55pxU1YMonpmBbDbek7tPG85ztGbufF82rKRYDDkS3Lp6sycFp5WiRVRuhkpY7QvbdnAJ",
  "key20": "4bo1dKtiX2HdLUh3zihKLr2Q6zgh8fBrhrC2YBTCTVKesJEchGHwnh4fr4kNoeRYNTx9HDvW7rsjQDrJ5mNu8AQP",
  "key21": "4cRq3uqeH5X7Qo5571cVgDyNUM3Fs5QZfH1FYn6n2eTYBKeC8qJbDerSNeQ4jZL2ELUKvbMhfvZgVZnTh3tF6PYU",
  "key22": "uYZPBHV7mGsrS5xZLUbzoX31wbi1Nf2cEQZa9QU9E65F7tDgEvEGKLDoR38UdESZJw5RvHpMWB9iLzLfwqMcDyu",
  "key23": "5uUufXza8dPyb2rZ48BFhHn4H3Ae1hYhwpTAFvUcyjcVYfZaummyakTQ96R4bDbTjc3c8PBJ681ZSTurJyCQZtXx",
  "key24": "2sJfZhMYjeieWdb6s4MXpvsGAY84G5YcJc8X8FGFCZbUvoFPHSETEBNHw6dmJ1QP2fuUJAK3qro2tRbP4jhyijCf"
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
