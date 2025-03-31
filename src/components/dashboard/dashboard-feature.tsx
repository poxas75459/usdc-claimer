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
    "5EVQeYLDS1PrTLVz54Spn3Pvawa6L69iREMnNfHaeoPTaD1ErSE37Y4APqik8BTjMngYcBXsr1aHtaJGdjM57KbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ng7Guo6ZgJRA6PdqqxkL9mXFTR3M3KGD8P2YgNBpxFh5Nujs7SjYJnR9MS4MQiV6V7Yk1rMfmGd334au7ub2ACn",
  "key1": "5C2poz7xv1UFPpZ9egVEFp25AeHgcK8hkReEqF8DNjLszMgRyDZJcBo8JBRsKQDTKxWNQDu4tBarLg6qPa4pAuWx",
  "key2": "5obgVoHLVxkoYDpaXbEGS6jKhYeMEPgb7VcTP4BgEZTtrSxs3Yh61PrSnzTzwoamTAKW9oqEZp7vBjrgeQ4rnPWJ",
  "key3": "dtyDr1RDqLEJbyERP99jrGzKw4pA2maxvGG2h3YYcWNzzno8D7ekipqpXd6fdef3z2R3Rb7QUCPMyE38RNuf6BP",
  "key4": "438dnSEyWXti66TAXMKjXgMV5q5TeuadNv29cQUu1uW2CMsLi3msLocL7vW8rV5jQ54xP4htV4XC3wozumxnqWjk",
  "key5": "4BgyEguCv9VcVcmzjJbViYkrufZAQZhuz9ZE6uNxh577wTDzHu2PxcSLZsXzxGj2wyw2KPyt9i23S3VeNdASS1RH",
  "key6": "3eTHxLShW3gfxvQtKjhDSgMkoB7hMBes64Y4YZHp8MY2UYUuMDcyBwrQ4SEQisQbT5HmeEgEkQcp2DEArwb1KHAv",
  "key7": "5kQpJF1S9qWPEGb4M1cvymYQL59Gu2tYjKVpat8WH2ccqQjgbYVwgyrmoKsruN4aFgM3Ban7WFWiDvmCQnj8tU3m",
  "key8": "61RRBEuRMr6LyP6VUdND8nh8KLr6nhb4sygowgPDonSdst4SEnF3zow5mGubuZgP7M1Xvh45rys266NydACb7WGk",
  "key9": "29wJirXr3V2oCSqUCc64R97HfLg4AEGRKrCButSfq5dAoPpFXA9pE15ZGtEf7BZMy8Rw6RhZLiE1a3DXQRE9XnYS",
  "key10": "5wwLTemJ5zrtcks6CmxF5uAF15aa22aSegsAgTQ1WM72U8TckMYFAx6hVPwPs5woEYDaWf9h8CQKp5rZ7aicDvCB",
  "key11": "5tWgVj36aAfJ1QZNkpJH1L7Uvj28Sziv5QQeq1hoFRywYtP7UhC5Fxir11XofyjE6wETRF2r15QWyD5d8BnJRydr",
  "key12": "dUQHFiU1SjUxXvnWJjWqvrzEgagbHkmgxDubvu5pmeTFgiFT8cUzepETnooy49eGHXzCQAFn3LtsLJuyZvf3ySB",
  "key13": "4W6Xj1J5MuwWmJqtA8yFTDLxkpikGPyw6UtfKJen8G21QULqX8YPTad1QAukDcu17HpUXcc8pDoLCdt3QHxETZby",
  "key14": "8ki6q4RLZrAQ7yAza8LQV3BwmPsi3uvMPWXx6ch2G97ZXSdSBt6LVbuWWaZAHNbuvYL5gP89xA3TU3FWhcE6tkg",
  "key15": "2ECpNHFC5faGuENY2PLJiuANVdqh66wWFUNc2pQFGMXiAdpW56Yqn8M2hs7SrBNrYQATjfqdacaHxgLUbTk8CvQV",
  "key16": "4WUVJuvAjPBCc2Q4kUth2D9B1Goi4uCFqTqFnhAkH3F5MppoXfoaQfcDNam67roimsARgqPEtpTzNXKKJdTrtAXP",
  "key17": "2oabYXUoxmpBXBdYXwDDWGtQJ3nmbZ9zi5QTAZx2o5ng5RTKgvK98HFWHUqG1ZJw72QCcCdwLW9717LiQQrdTFqF",
  "key18": "53eBECgTMpNUAvsSfTxQKSpQ9Af5BrHRdGv8YzHvRvHBUnZtnma7a8Cn5WF53VgqF4sYjXncpMKMoCvLKZ5YtfaT",
  "key19": "4tGorZddXyqPjFzT9TKX1wTUEXUTsLTkc3kxESezMVwzPDSfVXBpGSQGCZPxsiFytEjT9UQxHRcZZxZbPF3zhpqJ",
  "key20": "5DPR6rYydRppgZC9PBagmaeELHkp9PY4P7vw8Fi4o9WqtHLkZsqVnYJDkgETQoG5L1hiDfeEj29o4W2vYdVQwqKc",
  "key21": "2JN8yfzLEEn874wNBGuo1wb7enyaHL7DmtT2Mpx7T4VNpSTTzBa3vgBNYTC6W22w4Wed6fUA5ACz4gLRKdUeBtJ",
  "key22": "46bG7m8fYWHxwDKr5rY1C94BErLNJrbFvkRDWpztnVRiAEnPf1aibGsWaD4qiGJDontMYGJ3cLw8nR5HDN7K8FTj",
  "key23": "4ECWTfAdVYaejyDDTamtuPZwF24NiZdPfnMDjparCToJgkP8AK93JaePsuSUtbDrVUn6ynRYSh2BmcasNafCWZMg",
  "key24": "2eLtNoZaXYTz1CvWPTnUeGgj54wQsFEuaweBryAeySPh61kvrKEBMXgVmYhowH9dFVeQci1rYUwtcU3LKjKbZb3c",
  "key25": "5z6MG1RcXUaQcZ9D5YyfYsdD2UNAUJeUpDc6Ad3xiNJ7VKmtTeBTA47addzRmuJig3eBSQNVTVCSK727JfbKsqxK",
  "key26": "3mP68FzE5JCNxwiYU3wgunQDH8deF7AdXMyYEoW737y1o1VmN7YYfUSqMuuyfb6KVHsLVBwRy5Q8RD8rVSu3bgAs",
  "key27": "2pfR3tanmQyQanCHnuYGxnhoJrhBzymzGYDcnxVLgfebxU64F1icw8j3v1y8uQ6KwifyUfVBUuSCDPUK1zjZ7ziV",
  "key28": "2B8LLzuTQZ7EQfgDaDYyaeW7qQTUxfPw6f2TaE6QXKmmf1MLoRNkQX1BKyryjoR7rrs77f1stLZFomxb7Eenfsvq",
  "key29": "4rtLtPPxN2GBPUXEVukjeKZBsepixi5tEZSc2PY8f9sJV2ayPxX9udZCnaC8D5t8zymEQjjiKSU3MRAkj4Xx5bCg",
  "key30": "4s2vzg9LPbX2ta5EiUJvtGJyvFL3UhbDwnhL717DSPLswaeWpRSiinERC1nt4D3WLpQFe9ww5DDGhx87cx4SVRot",
  "key31": "2TRXxfiSRcRL86Vc2tQWApSAjb9FPhriZrdTiQePk6mWAJX11qrFzx3knQ7ZdvXzCTrdxZSTAd67D6CC9AFDade2"
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
