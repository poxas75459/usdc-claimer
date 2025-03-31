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
    "2ggX6LQN2Yzu34WhshDMu6beGtmSCYciioEUWnENGGH1fEwV79WMRJXq4xfT26fTD8Dvud5LshUyN4X9qrSGw8xt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2z548HFrpbPVQp4W9g15WA4D7aYJsCA9ybcUhi7WK4ALBKUwaSYiABxDWshkvEB5BjR59WpXMX7QfUL8rkoHegEC",
  "key1": "3wNVhxw2doP59syyhoT2vAr2mWMfLY1bg2dAiQJmuctwJQ9XN7v29o39EP4FxxU7wAus4b4bZdsaz1LjEKDnCNEr",
  "key2": "2AwFNR7x3pr1yuQZptfrkUvPTGb9WWf81LDVYZBJh4KYCYsa7hkejzPtDFQivvoGbC6rkWUcjHkBJiKcMd7XAPnH",
  "key3": "4janYrqwCzMT9qkwrnDE5T7HsQofGGisufnnThfUmb2S9JLdEjePbKcurvwqo4e2vE1AkUcTikXd4JCAGtu2DbWB",
  "key4": "HVGwAPdpiURYsmgGxcjQ9WCewpXy4q6Ehk5PxNo8rG8Q2wLMTX6SjppsoVMCBHEL2GnTgNzmTRymAVt1cFFU1Gw",
  "key5": "5h17rjiwsZ2hzPkqnVPsWKDYV4698WmAAG6Gf1aT6voRgdt7hSeiLLEUBD2atz8iFfraUAt2oBtKmN3PyHqdu4zq",
  "key6": "5ssqHyhvSWxZY15ZPZpjbUkEuZh4JP3a1dDPBmvwFibK5VNnPmkE5vaG5jXStd3HEi2PLvPPcUmD3rZuy8rwvD9m",
  "key7": "3js4vdsCKwN3cvw5YoesKBB3k1oH9Dnbo9r35BAWxseRRYUHn3KQMMBvrfnh3NgLmfVViPVhT7Brqie7rSHZHzDb",
  "key8": "5EUHwQwwosengHaSRnm47Y9QfQpRUKCpQ9vd5icamKaqLo1N2ru9hbB4jPWzc6rivniDCj8xmvouYSvQFuFoVkY5",
  "key9": "5nfA68F3NLEFVX7feYvACJjNqrADEg1aKmcfz27zLS6CkQqadkKz86Fkhi6T8Nyn2yvUghc89UdmC5mEqumAXVPh",
  "key10": "2nYrS78md66eQfvmVeBawbERRMQ6sEZ7f6f2hPpai8pX3NQtvoJ4eEM8M36JYwibWeoKH6EN9BHk5xp5iH5KnXVv",
  "key11": "3wA3NKKXvBKQQ7Zvv4ENoADKyH2Tzf7vtyXExp8ZmmaAX4pyY51oN61dSpYVQK51Ymwm5KnRLSQfUBSkna3GMabk",
  "key12": "mnKKJ88rx4nCNu68kuH7EDHURwbNQFRSvkNr3hvWMBw55rVeBoWFbF1N8Giw8eaUFiNSxYVgdZY7G2htW1YPBqx",
  "key13": "3SjWnYrxNgxConP993KsJdsAk4BV9YxnWE5SVw4eXFgfFsgp97dbCZ5mvRggBPiPG7ES65Wczn4MyKaTTPqJUmVr",
  "key14": "2W1g8P1quZaUakptcBUioVrNgjg2ceonYWuybi3vvX5XpAwB4K3EfjhWYxseKbYrgP4vuw5PbYCtwgwrp8H6y7VU",
  "key15": "4yUTt8Ck8E31w5eM3tWbX8tLK6x1jWKLXanB7Ezv3NhPwDt4xc4x48zQCUpz8xKe6bNoKkqvVit3UBzfAAC4cKYK",
  "key16": "4LrV1YgiY33hRzG66w8j4eVe3CNAMDBYSyZruAW254vcfM6ZDg1ui6ZoC7anNXDTGA2zqfBoH6J7VGihLfhpqKAE",
  "key17": "3eKE2wA7M5Qpati5ybEpFnvz6N87UNHsdfB9T65P2RYyuZ8pahm6dFWycCmGBKbsZrTAGUBRfjNqzJaLzDoFHz9d",
  "key18": "41Y7j4ZXWxjroiQo5KKLRFpA5jC1pJbfir8nu5SCbGnsvSKTeek67xZbEqkabtfuHpKH7HpXqecshktzNHVTW6qg",
  "key19": "5aJDwRqFURsY5fzMuEKC91cEFtyYdDPeGqU2yNKCf4HfmeyfFGn9P49dtHYg4gfDCpiabEzfAMzkSBsUBWmzwA5v",
  "key20": "4yLuaA3vFkxoUr5rQnPsUh67JucV9jFBDNnoW9qtxktF5aKza5kndeNehDpywz7o5ZQxEGPD5phkBgJvneY7FZ5T",
  "key21": "2KCJnQktVyUcY385MWHMRTBdczxkQ2utSutnjh6czwngisvi5DgoViV8zodD57DwNcPoL4qvNmQVEJWATUfpmVzY",
  "key22": "5Q4raVtPbQJfdZuZTf9puRzsGiQeoFmzreWaeBvWDroKtT6t7Nc6Fr8t4F3VkFvwKUASN5Y8sW8i7aCuc3ZwTCxb",
  "key23": "2UKqWXfmXZvFxZHtX9kNUhLKQX1SE5Gq6UvC3LHpTuKToUdus8xmMtsHcSX2984uFvbyVDJDfFHuTbVJa6edBHeB",
  "key24": "2ssymV3dX1mibfMaRJK1JyE2VquhB9Mw9xHLYmfxFGtPUnsd4pPKrd9xETJ5iD8Rmsauas7hFbYZAee11Zw9BQB1",
  "key25": "3P4RFCPN1cqcxiyHYvTc9JbkYEFZi3bQkuDCA85W4sE7yLQ8skG9nq76QHE89veR6SVK6tcUixiod2e1dytW469n",
  "key26": "4zr9xYh57AshghZVCUUTSsewLHZ4hzHv6oFqV4LFhb3n1e9dZCNGTbNRZJvmsPHiKx9GvYv1W7WzJDrWF7bkxTy4",
  "key27": "5vdJupUzSLSqPMbrriXwm1HR6dXhwZgf8ty5fev613SbX9aYpHtJhKW8BU6hoJ8VVUuHZLvpRZZPKQcKe8HArGBq",
  "key28": "4KzyAKXrKBJKkCZuL3hgZjwGRsNKYF1enSw69u1bvmpVFn1yRk9nYc7j6czPrrovuDuFnRxVMkpHUJAxCgKyvNmn",
  "key29": "2GKGWor2HJNPS9J22TUiXLw3Gkccx2qzGjJDom6EvsyLg6tLzkfjQH8uNu8RG9teJvgYuoU6rc81fxfyKb2e3YzQ",
  "key30": "2uPeGbyeWepsquTNPwkSjd6jb9yQ6LFUJSkNSxDQTpyvo9abg2Q3Vh4eqpnaazWbSPG8awNxY5hFezGoKSCSEuiy",
  "key31": "Mg9VomxrC8Rxvca4Jsyg4ZS1BfRrD1re4VvPwF8rySbAdEcD9vMJt8Ka1iJnDG2VCmEmRCxQcVXntmfHh52RxVU",
  "key32": "43waXgkshMgHUt1C8ActAT42P2kzpjZZ3zgm7V7qSbKy7ZFdnXh82rtW8ZCEsLMgVRdxw2bnyTYNcJWgjnaXAeoa",
  "key33": "3XcwL3j8WuABQdcjDoVcDF1JJwheWzcvxszkHbt1RKnJQfwJPCmVyfYyUjgWJBXUKE3LvhaY9ymRoak9a1FXwMyX"
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
