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
    "442zyDV2Es592eMqgSVyiaNdFbsMJBZwKxA46bW986GRWHjwpXZb4dCzRNrdzTJJELjVP2dNf194WwdzQoeVsPTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32ZVmPDkSFMj6dYGVxf2TiqT5wfvNmc1rjdDMAB6sBoA9sw3D1g1VLsroMMVa48fKb9acaktXvoaqKfTun5FXaoJ",
  "key1": "yLYcj3XdFuHW2HSG87qxf29uCffGjnQJQaAfmtq3VA5Hi2pd5Z3eChVgbPZsG3WKPBLWoVfJdpMJkbksfptU5fp",
  "key2": "5ZAqxXa1D9y15Gpkgyqdo1VWHStXSt4TuDhjx56SdZQeMAdzGQpumfLC15DEyybciZjRpniDTPHYEgRiaEQZDUoU",
  "key3": "5m5LRUtUeUJ1meZAed6bWAh7DF7VnpkmCzMPL3erR8z1ufnpJZb7qVhrcAKXyLw2T6nKR7813v6bZc5nVdm7nASb",
  "key4": "tWGZPBeZq3EYwV3Gf2nUXjdn7NDXfojtXgyTtLfuvuv1qhSe9UAzh4BgUUxZMCLPUQUecyP9VvLZeshHrpRMYFe",
  "key5": "4bCqR6ZZtWy2a1MYj4HRqvu2qqwXZHZKy6TaQgSgHCyGJ5f7h3iyTCtyXsQgWrbrSx3WC2CWqy7ZrwYBmzR6gFcu",
  "key6": "5ZuwFNV9gMex9cX4DAaqPy8LBhy2XfWNnMS11Ggw3b2QAkT1kacrRs11KSMz6LNVKgZ1BFNHrB3cGf7HN7xihnP6",
  "key7": "5EBGyDwvBtweYZwb3YE1rCZB8zkdCTEktqt5RSuLaSun2oF2wMmPA1yzTiwcjG55XzTtA9XAwSUuGkAqtf84zZRk",
  "key8": "KYqcCNqW2qYwkRK3Chsn8KGNyEuSUQXbcMT3Pt7Bq8tCnmLXWpQm68QufXGr6wvQSZJ4K7A9ZLy9kmi9tPudrnd",
  "key9": "2uhoSdV8ySPEWvs7ccv2CUY7kpdKeMuy2v973ExQew1q7edtWsjn7HQPwVer884M4aNf1dDxNPLGYzgJY8tjvwd8",
  "key10": "4Wp2m5WdjvnAB7cnuqxTjzxeU26vbkJ4FMmoiuhbeTJFVosQXNHaYQHSvcnVVSmwoRvsVQP55cGkeCjqUJzK9ke3",
  "key11": "3GkRfcCX71wwHUKFPGir92gRM49mniGHAbHG2o1xr7EeD7oZBFrsenrRfNViec4PLBWKg1yijuZyXsB8ppWyDedn",
  "key12": "3USkJ7c4857UH9ECzHEeFkYTmx1Go6BidpEn2fy7gug2BduTBCvyXPpFbzqNhPM1NpGbDzHe4xwzVbhFLMJGqtC3",
  "key13": "43HFaTG3n8KTJ6CxYzQErTrtHx7xuXE9f1yFDAbpWcLb3uPnNJ84q2rujsmiGWEXZ3eacU2eHETwLezb8Nh36ZoR",
  "key14": "4kj9CPTbU81zSeQa5Ut59YuZwRacpEswMEAsKW2G7eUw7sSxwpfjiL6LJ5iCGrd76CAfGEyRpCbVxjPaqBYaC5JK",
  "key15": "2hzYWDka6eC9DkGZf3fcKJxUn4wS55actgpe3miyf7kzMZmKNBb7ALM28LjFtGpLdxicuvEsD58dgEoZrZxgF149",
  "key16": "5w575SQJr3RXGsw7dRo7FFbTrPEhxwkG7ptMpJDBzZNyXSGYUyu6BuHErSAhs9UyUt5y8T43LKQPUWsFgg1W1yEW",
  "key17": "5KUKScJnGvePGibLSNRyUoeZRrEb6CwWdwPZHCsMkB8nZbdzinyacbDNdzHCMUctTshhdszQVJDcJtUQvQWGA4D9",
  "key18": "2pwh6YKYxqf8mwaK4VDeBk5ujhZRt9CshDphvbkWnVwYfC7QqurGY7xwXvNaiQKiMtGyFovxzYLa7KUiEo9xX6Gn",
  "key19": "HMNzVakjEKKLKsM1MNxnj3QaCwPvwmW6A4L62JphwN1hSMef659JHjUE7US4Qqs27MpieB7qM2bD3btb9gjXjRX",
  "key20": "3UUtx5MCsUNB8we9rCnxRQ98aBWGZj96iQAmmTWHt5R9CXHcePWXmyyogr6XhVgctNb5tx2pAtisTF9hgz8dUZk6",
  "key21": "3p7E14EHotbh5CVP8KqPSS7kbYW6d2SXsH94ye1bFx1BnLeUA9gs4dDnvZ4qdAUbSzQVwdD4jDwYq6BCfuEF17eF",
  "key22": "kyrTBeqt3QtSBRWAEkSjYdEoCVH9mPa7kRiADxHbjDb63QfRPHzjWe81ZUByGDAUGQtf9ZPEebU6g5FqZoooUZ2",
  "key23": "3MqcU1PsKPzHfpNs96sf2xgXhqpXzZQCBjLFPSje9AQjPsykZRHY4aVpXTaWF28CuTE955VnjZyamNEtrNZ4D1xV",
  "key24": "26ZpW5E39m7cn5gDFGf7CATQ3pFnRPtEQ9C3kjXcWh3uHXu1mLTWhwZEpPKH8zqPArQ8CvdAGyQUHLQicKTZ9hY8",
  "key25": "2JVnmUTJTQU51JEfRRHTjCrEZhBf1R6mBsAQAP9yeCCAQyYTGDoo648MUinGgmUJxoNGmfUfbtQZKjPyVJEn7Cet"
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
