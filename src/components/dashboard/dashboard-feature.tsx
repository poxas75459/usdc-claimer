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
    "2EpyNx89EgQrwfYfkebdZXpBHyRLvoa6rCb5ThMnh2adBCnpToDwthgJh8N5dbqEmAc8Kt8gv8SkLaowVgSUWAVm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KckptQNYUM7ne6SDGFBV17nGaxGhhAT5amgeqo1MRz1KoracixgDbpCMBXvAVZTrjtSbsniAGWbCzpDqMVc7YhS",
  "key1": "2EX3ycLG3FR7TQDVNLr81Jgt8r7uybnAcHUutSQ2nx6pmoPS2Fo93Gd8KYXALbqfJXQefX6VRcPGaGpdryCMEegB",
  "key2": "56manEcgE3D8YSLu2Kw4wKpnr2NLhmJD7wUqigJmbLhqSKzYZsWV1RDqXh57wdjA43jVzjn1AjYo1DYsnsS3MUNM",
  "key3": "2TsCvnC1sF9pkRPu7HWJueJGd9TcobL6CEQq7iAB5a3mYxZnXF4qkgDwKDiF2skLY1BooAJQhYUHv1WD1z5mTWYW",
  "key4": "3Qknh4AtvX4Mc7D8eiNswac4MBPTqtYuCSVNiyV5h1JpwVqg21YoHvfaYHYiKKQYkdSjwoW4NXGbhG5Fy98Q2zJR",
  "key5": "2GTEoPVEFg7XvhMHropvnwbyfyGjTnfTjfENyFrCHkGbADoxfSXuN7JZHud1w6nSP5AtoQzjp4E96UyGRD8pfDZx",
  "key6": "5P5ijgFFUpmPC1Ljdu8dtadHV6H2RhdbayU88S6k5nnnuH6go6xToLc4fZ1EE2UPemogmrMxLrZovwrqskjZAo1y",
  "key7": "2dNYNC47GPASC8yxdz6pDcjSrD2kiewUduxX6tfYxUTH6qQZfXTLyGA1r2Ue3LuQm4fQzWuyqyGDqUYxJutpmiq6",
  "key8": "2SrMKXRJgUXAuERGosde8bUP8UxWqMCytgFZRudgmsLBRn5xLzDqsCcH4TQYphFXzcx55aZYGjP6FHfp4AMy7UKb",
  "key9": "3yfpYKsoB1kL9uXEyXZNhLmqCLvBbfTUrS82AVGMFSj2T4mEsA8K6H8anGgdcJ84swDkMcnRUcCyMHmqgBxwicTc",
  "key10": "2U3H5am7bv8MaLybvDeWibRA7CQ431V7aMofGV3iSokc6dHG6NLcPVMxTBwRa6y9vdE4W4MExnw6BreN5X2cbPpX",
  "key11": "2mjCFXt8JfGsbioYrzVGp5sp5MVPe3Uq8dFtutt69hvKFwEE4EBsSSg8BJh19cDd7HfQ6sauFoNNpnahZP3UqJAz",
  "key12": "3utC7fWjjLpa9naBFhDgDUvJwix1u58VrY9AtiPqrFdvpAsM4bg6VbFbtDMVM81cgpsbhVevwnTgqHZ8BtYx6a5t",
  "key13": "39yweeDXUUuUiuR72chkhSy1CBC26ziSAosvRcZrzswSgAFuBDFBJJgHX2t2RqUCNJhJz9fRvii1CdPauE1UNMo4",
  "key14": "q2RgviBMLnyXufQgmUtze2oYoE17LmY4XgTgtsEzxE6JvhjsJhM3v3GMgX7nKcQPUWYQT1C77Rxep4qihJKbZHG",
  "key15": "5vrHf3txSPSww7AQgUBrQYajtLkpWUV8aUvcJkLRr7cmQYo4qL5gyPBjwAEN8T52RHXhWAHnPCWZao4xsKQANvaF",
  "key16": "EhCL5meM4ozA32XMQdp4MtcwqLdcu2zgtMZTHgwuWHR4MjjpCH4nencZJqqZjvB9bdwnsgCNwBrJEeX6XFQJmew",
  "key17": "4DS3XSjGzvue4P8UX75aWRbn65XRgQ8mQBrwixoK25kWAdaGsN3Ce9Depp5caKHgNFGwkrWvTtpSmQrnHKRxa8mT",
  "key18": "3iNTw41kVPHqLy9NRE2Bxh759JsSuSzJgEb11H3x521STtn6A2SGqni9B9YmgRrrZiignLtN2G4bqP5FMWanQkhu",
  "key19": "5EoMFvEr9Znjb68MZ5UmZofujzKZUMWqe4yY34YdRysqQwih4XYXK1H8F29zUX1yuNc1MtavAaJDZViCh4DYqSGL",
  "key20": "5kDdvNY2jNzG6duS6VuQKuYy7n3zn5NYhXqKcHRvBK4SMTJ5RBecmYARp8kJJSBxKeNgrSNSCZN8P15Sa6naQ5dP",
  "key21": "5mcZ7G6JwnTKjJ4Jzc9FE2EQey7P9A8YQuexjfULo9WEDzT6MzdcCJycwqncoKxTpctn5rMjTgFP63p9s8qusYWK",
  "key22": "4aR5ULHg1Kgd4rnEgAuSY7szmzdmyrFfw9U5xjYhXqpKvLzMpGixVSz6ETm2s9EfbEkk6wpk71Y28Po7s6z37bDV",
  "key23": "4jgHCG9uMngwmvZcADzJ6xkHWnWFVozbGPwyPBDXxXgXhkJNECN56sh9dns58s9JshrjpT8ED775DEoCDTrukPBF",
  "key24": "K997KnFUHfmndrH7yBrD573vLoj4ctFF1H39pqK8ALjB1Gq9YP6LxupMgRgYcrSbe3gC1oKen2wzEjthgduKate",
  "key25": "2Z4JmYqGtDc7ijcQafZm8VG8qtKoo3McgE1853u7PLdNjN2cPYbytdZ25zrMyx7Hguksvyj3MFkzoDNZfLqFsa47",
  "key26": "2ifk7m9zLUagQdPW2TY3gucsfC3KVzUpCGm7KXpGQGUVEfh18MWRBDLStV7Dd9WPQ6ai7ti8Tr39ponESsggkPxR",
  "key27": "61G9EdDHJdtBP9xSmwEVrkwMUghuA5w8iRjh6815gNootophammNVFHbP4ovoQ1YiENwzDpH1Zqruvau7gn5jXNh",
  "key28": "2HHCmr9tVRox9ymxuWKsbwLUkmznGjnQEHRBp1W7Z7kKNJwKtVmD3sGhEiZtNWJDyBvb4NmCcPtdUqCye1Z3TuUb",
  "key29": "63EkwJfuoMxVveram5EHGBDNV7HKaSrMTWKjWAjA5mzrjTRbJnppwTgoua96ChLc5ibqiWteY39QNAm9Usp5KTHH",
  "key30": "5h5DiJnWbw6AyQKc1fCDTC4tH9pz9YKcdcrhiWxY1ZLzycvNaVacxR1ayiqBSRQrHHEpW5x4zWiixZh1cQcUeGtz",
  "key31": "4iB7Yn7FmCubLXfvJYBvc8zVb7dcPRqNhpUpHwgWC3awt1pohh5a7ziJdmTpHKuCixQ3jUBwsHLQ7wVhMznoQBhk",
  "key32": "4xPofcwrWRwQYutGpcQZjN6VEBERgFy9PidiunhvgrMFD59jggGK5YLfFGP4EqSrewhKrGaDuDQ9AxXtSvRFXHXR",
  "key33": "4EqWRfbdqPBjoJsaDiVYGRoqXTAe2cHCDqULW3citLuUBPwKgRV6DoHEw1RwLu1R9pMTrnyuDRBf6Nq24uREnpZW",
  "key34": "39npLBgcFBKRwppUAtXrUuaRRJYAPtfSwaQ1xHSA6EHRobz5vJreGBx7rZa8HxSrLWf1WnkxvGCqb1eSiDEbY6MP"
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
