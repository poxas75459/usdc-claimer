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
    "2uSE6PYhjHNoYmLidkWZhaSBJdNYw4FBRGJN76Us2cWc8uVP33ysxbYwUmKmGkgmAc7veGgknRGkqRkXRVoEueu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jhtjMbYdkJDTbJmkVBQYVXsE2kNR5PYw1UTn2t6LSWH5FYKrLt6NjL4CWgLWRtmsBJzxy8bHPDQYSQtrq8QZxyH",
  "key1": "3e7mgw5VXxWnk61XmXuwDxFqYP3H4hYXPr3eC52mEn1x83EoB34gZ1UGwuprLj7MaeM2uagBbJBn9uvmFNXy4kHj",
  "key2": "2fiZuoxBEdqaUTFgRP9bYYcx53ZyvQvLwFVu1YtYYGVSQNYx2c3JsqvYTJS9VYzYyECtVmgocdP4Vioot1EXMRvt",
  "key3": "2N6m7gi5ZyHgBR55suS23M2yfjBNZ7AUFi7uZG7HEQ4uwZZ7oDdNHCvUs6mFN6czMM75pjcoaeZpZUqWDR8ahgEk",
  "key4": "33Nd5uC8h5GhUJaAptCJDEDTG81C6EkUEBUuVxagiHKPditDD7s2RXAAjFjUXgRKcHcKgwLXSHPUK2daaR5Wxy9z",
  "key5": "41ri4x1PDbS4ZXaFZ7u4dPXn7S2HpQGBb9hDVid9Qd14qgkFBPk2BoopfNDYwBsoFycLkSb15S37BbjuSc4aWT2S",
  "key6": "3ywXFwyWfE9MQnAY5mJrTiSeXYiaLd7VCFNBSVru2AFur4NaMFzYgTrkviTg2jKyZC9ps2wFKarUvdXKHQpk3nSK",
  "key7": "5qVC4K8sTpTfmn68cq7tPX8oo1UfSu4jHSpowvprRK8iufYrTx1LBZFgLRyey5tDzdy2wKVLE3CYNfvhXxeqn1Uy",
  "key8": "533HdxZLVJaD7HqdWecCTiDc3ZF3B5Y9yDFYCWejFhovCWFyH7NvMzxJs5RCMxHR4NYk952QEgBb6jrqoMz6ehQQ",
  "key9": "Ja3BiEQyiHy8kHRXxiAvcHsWxnv3xj9ksYKPBbfGz48gEUy8YceULTX9wRvJA3UffJKuDAJtqSyS9kQCQvGCBWc",
  "key10": "2qaZX6KuFpRcr5P18oUoNGmGKfw7XmbANv23fKKvyW6yGx3qtYWXFepFK6a6P8av8mdLr9qwGLsZW22xvaEtJz3s",
  "key11": "M8NzYetF4Nvbn78hLSKTRf78Ztc7tBy4xD2bwcduqPM2JukPW9bJpzuFXCuYZUm8aq9Y3jb5ZbLCFxakCdhpj6M",
  "key12": "5vyBFYr8jJhSTLnd9dFq7rtaU4cg7DRL9Rdazp1nebYcQ5xoHo2BMvor8e48TtkMnSZUW3BK6c2EqL17GUG7bwbq",
  "key13": "QFLLitZF8C4thCipVTHDHugnzqvueqdiijCwrGFRdE5JJJsfEEEoitkXKgKUwCcKxW8HqxZWgmj5oPECqT4T5oo",
  "key14": "dwjyPsnTRQyQ6SgsHYtUjNRcWYJ9MQnMr4Kk6PGTRwBMhFKbvjYZLsHu9zssCvG5xNXQPjK3JT3SE1JaHryToH2",
  "key15": "3xuWPtkT5iA36PZ48nXxoTQFcMe1XokCSc5U3NgsFDi5D2XzJB57LWPSoRsW9kjnUffC6Qriev1BJtHLF8HCQya3",
  "key16": "2Pbm7uyKryJsihd1dFP7asDyZeRegJRRSxnSpKZ3jrHzAEE7AM7rcDPcBnejAJemomDpNyKAkCbiY9oBTJNrnL5R",
  "key17": "2b5w8EouRD1wJZCmwLPd9ohH7eB4C8boGLTqeAjJRWicEac7Uvtt6vjPjz8Yd7F4swJY6ex2jLqbqeiccgEqdSWq",
  "key18": "63LK3SmqVhVU53cjk71MJA1jNa2CmSsjMq5oGXTJ6zb7ZNVbkztMkxuXmdqn3YvvFTDugKHfe2aeKMH6UvNgrgrV",
  "key19": "67iixBaEZZabxVhtA6WS9SEnwpxJbKrjqDpPuLKUt24TJeHnHQCnUmv6Svqq1AKdTUL9sKuW3Xtnys293dar1v4R",
  "key20": "56kuc2cETDU6DTa6MsH7W2x4Pes1qsJArjutX4GkYQPmsBzevxduxiLv8wH4kkv11pYchEk7EWoeB2XbqFArTuiw",
  "key21": "311zgFeW6V54qsfFnQQbemaUS7dELkf42JxKEpW1tJyt88WxpR1vkuxMeLqtirDqBiesSFzic5jRo3vhSQR5be52",
  "key22": "3iiKbDkWnTYGdYuitdN6fF6dKr24Pcfhq3krCvQBFJQy6MBYmjQau2GUTNfzhDvvyMF7o5h1znNkvG1722RRkWwX",
  "key23": "2DRf4fuDRVeziyWoyZejfgmKaEtnyLB1zaStfbaaDC1JTt7Srt8UBz98Y8CGSbWtdF48XLo5i31nWsmuHAtDVJZY",
  "key24": "JeTtLsqhgW55fzn2vQVdERG9qy1Kowsuf6g7uzdQCGaafaAzs22QRDsb6qQRM6eiKG7e8V8gSQQXVEUtcvYJUWg",
  "key25": "4mL2XQHthuSQLqeP5oU3LKhcGo8TfqGDVPwRjrMRgQT111iYHEiq5KLa3TqvSJVirf5tAyPFKVqd6nDPusfAryU9",
  "key26": "5LenQy1iNtUd3JHZWi7Q2Y4YqveGoBrgfp6ridiMNsWtgEAfoy5pFkYR6M8SzNJpWGaCPYpaGKtamE2vZWsFwr5Y",
  "key27": "5EVXJ8UkMQ32n2HpTu6nnZ1Ku4uq3Fyn7Y2pALZonVvtHU5iXsSRKF78PyZ5X376b1Xfunv3bpALt5UXeChW4mXq",
  "key28": "2Kh2RpnuniddDn2Pt9o5QL29SUqBkGZFDZQvbXWZ3Wi2hTc3UhwyADhHeDYrekqWATVeyUdM8dQz67XUkFqNV7NT",
  "key29": "3TNDibniUTaBbcYY7sPKzrB7Ep6DnWwXUNwoSDaZwRtrBtf8FErM9XCZjBbPN1LR79ekdSQ1ojZwJPwzgC4y8Z2D",
  "key30": "4wXGmw99EB1oDRg1suPeZenBSw1YdhTwHMSDwJqkd8wFmVX7hQgSxyS5QhXSMVjdXCudabwMR315T1tAwWnVaaZT",
  "key31": "4PF5575SgcHHt4vuKEbotx8Jx6dRKRGG4AydTFUj1HwAsWXcpLQSe3zq3tVM6Hw6nKGrceYe4hivLYE142hnKKU2"
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
