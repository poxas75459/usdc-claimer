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
    "5tuGxkbsNxmdNFnA2wYY5d4bkZcG8jpyMHuB4zPGHxwPdGTJPUWuM5GqeduaTFpa2F5uBQYGeZcjpJLrynMt96ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RE6J2r1utYZPvQu9syEireK6PCHvvreRgcfpdoE8P54tbG5zmUx4Hn6h5neYSE18jm7JiN5J4G19EqV9PuQwfM9",
  "key1": "5LxNMGH1DU7BbdkYSooTDya4mR6cLs1FFDxkfdo6GbEyWr7C11QfqSEJKeSjYyjppjPZtxeFyqEDfDbdMTiGEorW",
  "key2": "2QWhEmNNUHd61FcDzhcxNJxUSQgmTk6kniuPieQNqkhfAD2uv2Y7TkvmmKpMUcrFR1fAVD8UeRm3qAUoMxy9KYmS",
  "key3": "23ckkzTHivyVGDHgo3X6LdxtyhdkX9UEyedHctuSKMT3FXeCqLB3bhEcgwYSWixtwZRbvyYJnh8icN99SY5YTHzH",
  "key4": "41AFYrVuV7G5TX6pk7T4SuizGpQwK21RT1qcYLiysTtRu8soU9oB2yDFp757twNV6c8KyMoFD8CrmSANuEbNQPVB",
  "key5": "e3afAsEbxd9pbvbxpgMhX6Cz1J3wa5DJkZ7QptGYaBPFN1zo9GWKxZ1CKf1rFg8UfboGQoekXYgFYUfpstDcv7J",
  "key6": "4YapAuAmRtJ84TfUgSGtaN699Uu9V6L3yxWWcwHoWqbegSuPRvsf3qKmNVuET2rvKexZ95J3CsVXzSjtwBWJjp9H",
  "key7": "5yfRFj3aUTCr7QBdBqBSVQWnKkckdXpKPeR82nbiWHJXZNaftay695dLb7wqkTc5BcW7LKVsWSKnFZ46NNZnE3K6",
  "key8": "241EBGUUGybs1U7g759avuK1ZYGPStqhnqMHfeX9rHvZzhXGY68EmtoG3aewJtAi58dPCGwoRwQb6cox1JXfiLew",
  "key9": "3DnZKjd7xfUY6jJzNEx5ftpnw4ts9AbYSiz8LXbSHQTUf2k17Fq54gtuQQ7VpwTLt9Jf3SmSVMPmerRZSYJKyupM",
  "key10": "C8pcrC3Ae3zPCG5A2JehGyiMSNG5rHb2UQxPFzrXdmpmXANdwrRkaXTigJtJtoEXVJANo6aNAMHa93AqSko2NbG",
  "key11": "3awvbcp1GZF99fg97XAWTJUXVYjPxFcQ5grZC7AjCnQwsavm5uRcP3XwfQWqD73XobzmmxLBRurKy9azfWgxnSYx",
  "key12": "2Y6P9pPHtU16T7GQ4Qjbt18CT93aE59LNfG7BUX7nk5kSPrWn9humztYjYamWDfqocxXggszbaaQm1XJyenZ4HJ8",
  "key13": "3zLQcoZf9q8WCMKd3Y9rqpyUoh7v7LbAr9cvbQt2xrMtVzuhvPaWfEjdqwrkKGX3DpUQhf2ik5dobqp5JwxCC352",
  "key14": "n1VVhBDJQ3Pn7jWk5XZqPcdFXEMdjsKPbPGXbFh2tbESbcHF24fGQU2YpLSH5sVLp9cwWWxVwAhzLwqE1bSGmx3",
  "key15": "22jUT8kKxbCyJ3jBkVKzwYCzb9EJ3ntDEkBrYnHkFoCdcEjLjkb78LQcGVoJsHFc36a3BwpGEyoyVPeKU7w4hktE",
  "key16": "2Rp6Kh6EKLx45fQSaUFSbTaRy6mVB5uNGhTKLBLPR7fJEt7bmiL3wCzsLXdSfjtpmpAGHa5rh1MNK357jyErY1DX",
  "key17": "4AbZdHX2eLUyTCNdz4XJMJwknJpv4JdqwLEz4fgg199cVHsgX3FK3R4eanKC1FzUz4dDYaon4cwDrx4WY5smRS1f",
  "key18": "3P8TV3rMA5GvwzYS2jdA7xm4WGQZVu7rfMJaHBYXxh78EDVPXRMdxPiEHvq1kFVj4M3bPaSZcA1PzeNoH8gQr8fm",
  "key19": "5owbdPNtSNwAgbjADgtpwAm3m5w7sqXWngw5A83tNcxTwShiVxRi1xyRcmkMmCH59KKX3MJi5f8vqMMbJxzs2SRr",
  "key20": "2FiKBm1JtSL1WmVU9EWBeSCkg5gEG7JXAXqHtufz83vsEzy7DvzYXvuAX1s6uPpKfaECoVLZvztbeAKWoDCrGzer",
  "key21": "5qyzABW1oA1CBP27oYuBVLxqz3JWXC1GtharJT9VQUiCNJFRSk7AjDxCyEZ3K1radf3otkfNvCQ5MoYWbL6L4WyV",
  "key22": "5VtjYjgkwXpqrHUK2u6EHXnaPbK3y5yXxVa6rVTcJ31Y36rvboxqz28w7n1MDutPL5BLmjNN5F1N99GyVPNM4JmJ",
  "key23": "2bVCTzJmW1jLLqmiCw3KKSQaHLbYgyDkbXrGELWqhVto91nE57bk79ZmLX3FSW53kEZxvfdM6647m6YGurFv8t8H",
  "key24": "4smscBX2yG8ivUMpBDNNjMErBcUABkNVBTFM7LbZWxdL3ZZLHPwNeMrJ9LcfsiSzwidn7N9scfUw1TEr6jV16vMv"
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
