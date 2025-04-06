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
    "2w3UcMyRW7ugNN868CmzYtP7MLbF5ArgZgu45woFgQuWBwxZmwEs4H1CmFD6uFkhUWGfzDiP7rnpxzDtBzLVFtfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uFQLB7ra3txBnSLMji6Gs6k11L91CbCGaUdqheKkdtox2JCguxMKR2XJgfNhzpAptL66sGJ7DqEmRVM5r6wgadQ",
  "key1": "yAMxkZSemFcerxW9MthfLH7N75vTsMdDDZkh13fjiw7ZbpBVrvNLbSPYH3CRyiR6NWNi8uH8G5EQSPLtkVqEVXu",
  "key2": "2P8G1dAVMBh1vLcKKq6WDULEn2MR5pHyLTBkBXRa5NsQMy2kimhkwwD4XcB8hbpKTTXXUZ9KGqsw4zPGD75YmSgD",
  "key3": "2YT7GcLgzmkTBNz93R2EFh1RDzSbFvv4uGKNjVnW924HVFx51NM1gaLKgnw1inYBdLnmRWfXTM9qcKjp2NgNA6qY",
  "key4": "53YpaQaQAzwg7QiHL4mNJW3X79Bm3XZnGscvsm5RG7Hsgxd2QDLMaMuJoDJaCUoXMAWVjdS3GnoXsZxzfWBY3ey9",
  "key5": "4r3u5sQmDeJPk5P4VUKSFn2hNwmBwRCaALKDXuQ4ueBkhBA2afqMk69WDFcn2AZwTD6V5QC4boFCxaxmL8jpxbKr",
  "key6": "3kYh14GSMHkwDyd68VbYAsBRm7Fzrdt1srWvUd3N42VehE2wTRGQrFuATgAvBQx9pc6eU871a762ZPZvDGAsWvRV",
  "key7": "4NbeBKifsPJxVzfydW4tSoSmNyeDvTYEkTUi9De6M4SJRkzt5AZGwMyAWC6CmTcPNkrUXydFo3zQNLCwwtKJahLu",
  "key8": "4RLv7D7DsbB8HrVUm6VREd6BL7t5mv9VHe11t5NoUepqYu1BpUtpAYXkihyQWpqK4YBLgeU6SUbLHQa3fxmQyZnV",
  "key9": "2jfMJxyGyKR7TTHGqcxTSDLUs5mZoryfsKK3xEH2UZxkrxHjjugMyWEsHdmu5HY9CT1hQiipCHp2yDepwjanoMwc",
  "key10": "3b9UXUgSiGCfkpeE1CFk8hw1taLhDmYBwtaq3vV6NXTotNF7M7QB1ike43JUXcRxxgkeV7r8C7okhrAqxwpnMdmb",
  "key11": "2RD1K95zKvgi8vb9zhKntMjHqjnJV5Rioh3WBfSUQab4DrwtUXxrZTxycvfP6NFjz21Cf4VzdDw67E6Tc8UVmJwv",
  "key12": "4iVqbAxEA34uRkwM9b4zPWdqj8ZBYhuuVRh7YPji4qQ5MaQuAFwNahfYpAQZqri776uWD7Uq5QShiUgp7kVvrod4",
  "key13": "EtnrBBShdcwBHo8go8UCY7bkohmNssFNsjtu7ddCCUeXXg4z9jerVSVWQTkzwExrXAKjc9WbMUST42gG4W3UKgR",
  "key14": "3k3cxbngAMnGeFPgjvyDvLugftAe9WALBCjTKfpSpU6kYGBucx7KwnQhvqPgQz4f75mfYFoqzF3cCHmvfATV9x8k",
  "key15": "3uuzbNLhaYPJmXjfLYTSya9RNJJPsDe2NhFPRqRdAn8rqMV1NWoF9ZFm9Hc9yKXd4PMKBKSdikNUw4xEoAWHcdhx",
  "key16": "4BKiitMd5nad4WUU6mzaUCArXajqX67fTXyYKAatjnErz7r5JbdxEWCqa7PnVTMRG5oH71Y5yHNDsRXwNvUinwBW",
  "key17": "4WiHmRb8gJvTGZZdL7qwGL4iYRjZJ2m3wZ83GvDm77ykj4pVxDQESedp7xAHZ9G122grRoioqa1D6Zt4A4hk1AtC",
  "key18": "2KwH4jXcDmwJ9b9cnFreTXDfsWYksQQbC1mNqFYA8MQRFxKVRFzKG8QDLndFpvmuVSg5H4jjiBr5Ni6dF8SQVHrC",
  "key19": "3eH3BsPs62RQ72pRSCq87RJJXmvjmj5RNEYMZxkgZpdbQAqbsCn97fUqUp4QLQHG8zpEE6pRuv4rmPPM2CZ88WAj",
  "key20": "3NVo3W951dptqoMEGhNwNvjZdXm95RVtunqPpi79mwAvTc6igfrjwNRcmxRmdHSNx5hDYCiozV8Yxv5sJxjG8iS7",
  "key21": "2ypXAXpytWUZN8iFkQQq8XYPW2NCkauGfCDvGirmwSd18uevBiy25ktVP7RNrxdJx1MSnYzn8qjBqFjYs9ZfFtsp",
  "key22": "2k8mmDE44RyoGxnXdgmmAAUJq7mufqzwYLgGzsRScbkFMdDTECKSB5n7cdEdGd3hXVyCASBM159Zf8C1kzay5Ft3",
  "key23": "4seTnWustxZQDGiwHgktriaQiLem2wZJUmtbuZC2k3FD1F1gA4XmjeTDj9GUVriutrfDBFp2JWbUzWtQoX8Pjk6z",
  "key24": "4iEo5gXZULuai8UTAhw7CvWE9b8WNYSoJnar2fFBLbrpuKBB3CSJ9svK9s6vtbKJA3L1GrtPFDCuCk5rB79Sj84s",
  "key25": "3VVjfwdDmHoeoMSkCxaX3a9tC7fkrm6YjDbKzxS8fwGtAT4AoPyk3hBv2KnJginZecfJqyNeSo3JxiNE39b4xBZ2",
  "key26": "2gB6BgYRWy4XdiFjC53CWhZr888bWQnDdDecHEe11ob6MMnszuq1Eg1NqxRJoKATL57YchoU5tsa8mhpPvu4Nf62",
  "key27": "4NmAji4nFehcUQbWDfnJnYKgi5PnnwzVLsvox8JMt11Drmn2fWrLfEUfeT9xcczsHvSemwVZapR58Hf2jKXP8gk3",
  "key28": "o9mfgayRsMaaQNhpu5bb4MdYGF7NdhRp7jE5jWTJBrkm5gWvqFs7vnyKswS8u3WAjFh3EppbhFG68p8vUcaAp3t",
  "key29": "2xX7rHvj3EzJDUNAU6k7sKsm6P1u8YhnNays4ve8iuFUkKG5dyBx9dJqipj6WwD2VDAaxwkeyz472gEqypMht7Sy",
  "key30": "3W5G15sVg7VZy6bYjfF17xB7ExFbAZAeXHRrfhF9q8Q4Qv1LTLFzqJsz8bMpyCQ1h3PEhUAfS8aGFwQPChFV4CRf",
  "key31": "3CJAwvEfdiLMYFwSVvnYLaTySoJxuML1DQPjfczp7HCXDRaWxJzxpZvnJiALm5LZ68RPBfWkDMA6coirw46ktnqb",
  "key32": "2aZR3sHC1uZad5sx3EmRUZ9ssh7HVVhU5y3SRo6s1i7YKhpeSpwZdhGb8dtKTd7g5Ag1B6YGA12HAL18CgRy1Bah",
  "key33": "3rc4VPHtxUTt5kaRTjR1Vth7pP69FgfPLMT5w1UAA8Byc63UEpriptpJqoeqgwrQ8V2tKai2Gnig7UrnDsLYPNXz",
  "key34": "Toe8UnkcDyrP81rPaogJP3Vj52bjCKGFtjc3sGoTfGEfQhyLorXoMNmwf7u8uR8tuD6ci5Aw5HXxwv5FudRTuJh",
  "key35": "4bsU4yNxTrp41p5sFgJJkeRmPLk2egWJpcVkDUakFHLB2kfuVmwXMQugrMo9LqT44XaZ2iN2quKf6MXvJLjxhz7x",
  "key36": "4ePbGMCk9Lt9VdmwWsxEQ9WSnnpupL3riZZUw4ngfJtjxgcNYX2vE41B1LBMZvzt4P1bffHoFkPKXimiyJMkrcY4"
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
