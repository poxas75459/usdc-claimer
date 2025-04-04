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
    "5PUdZVdyJBo56BihzkCX5KjWxp91Lz1hWA9E7gSCJBU8g3F3kQkEKDtrQVK85hvMfkvus9D4ZpEE41bwe9xP6ybD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59kJLGJRRpsFURgyfx9yvdwVoDCcUnHSKXjZGTK59duE9QM9ApvmJQyt6J1vmfgujj6FdV1fSFWG4RUF2Ttn6tDg",
  "key1": "2V9Lb74c7kPFC5r8fQE4cptnWzHz9Pd2AenFYZPfGS5R5YTkwasKpnGWE1CT4V8DSoJATRFDsG6k4emaeeoNGvAS",
  "key2": "4CpJ4TezvpTzzYJmKhF1xvuxchTMmjHqrwv8zf7AKzDsv8xQT7BUjDjmcoPy2GQwPFgAnsQx2PyiVXUbd1CQYCPh",
  "key3": "2aJwCqAD3WCDtmzVSDvA9EFxqQQ859ZwA4K5zSPExgNEdzA5TARPKQVzwKbgS1Uec61yr5Nj8mcPva9TnuVTcvUD",
  "key4": "5s3oSj1XBQYVvytAPZiUx2kQDfzfFdDTEekP2WhfzpekXUc7iE2HQbsxjvhc9ZSaLubJXLVpkRidP71F4WjJ38P8",
  "key5": "2YUvVE3nwszFFy4PVRiYof9LnKt2HAV9UFCTsDqNiyz2sa8uUftjfLuPqCzh1jf5tHzCndbxKH3cKW7yVd8jmPXf",
  "key6": "3q3y5bvcDojBAYeYcKD3NJhJHy8KeA2hokLy9eAnr5M6hqonGoc1uCXUYRmqWMvNQ8Kwaqwa2vb1VKRvfkwuRn9y",
  "key7": "5qq7KA2FFrrcsQAMK8RkN9pWHAgXwMXZjJbg5ADbkpZ61knRcn1vgwEuR15VEh9buEFkArYYWPZ5m3YvdHrpnBbx",
  "key8": "82WRCnTPRDpDQceHFWtese8YBHHyDT4ds8yKEqBXBy5qK7cKRxtvVnE9avnRqmKmGHKNiyx3re47gJVbTVXBEN5",
  "key9": "2KdPMDMrj3FQUeFSCnMjXVFPL1cJnjx6tMtg36eJHGJavm5dzZHd1DRMm6MydGiFLWcanBpuxczTymBcaJQK66JA",
  "key10": "2yhQWGMYRXmJema8Mvo8xCPU6SNDRjd5K3ZqpF7erjrExVCHic8BwNjckrRUmrTa2cft5AzRinwojE53EV4j81jQ",
  "key11": "3pKmQbjpXhYoxtRA7Jh1jD6sacRrDXPwZSxjHy3t6n5VWyZVidYRnmScKHM7VxmEYt52oY63VBq2W9ms7pRkimLT",
  "key12": "5TwYXAgKgzTBKbPJXgSPioEZ5kh2QcEyCqGQVtcziPY4khGjgvdws6JggztSyB7NqxW14PCjeyATXUeJQbqMEsvd",
  "key13": "3XiQRp27HfMwrkTyhAHicZp5nvze9eMF73iHuriUv28mX6MMDdzY2sFu9GqYvWwXi1rTSHdUoTWsTQen8Q8JUSmU",
  "key14": "4kJw3NoXioJ7RkJVh7byjBMMoFuefUq6PmcEAmMZ8a1GjJsBSkQsiFfrd8NJDkdRW5NTvFo1mjP8VKvemoazX6x8",
  "key15": "2RpDctW7eEA5KhqmxDjnhDLYqe8L7E8xMDjKnxWtpBGp9dGNQFbo3Er613YGdJyS8PLeJ6zJ1nbdYShLqqAGNCJN",
  "key16": "fh8yhCJoMAgVVBEU8Cbr9B2na6nvJAB8HdA9A1LSt1YohxV1vZD7E5dp2zthzjLMTACPr6een6A7wSTt3iUjJBB",
  "key17": "5SBYgAopJFt1CqYkNkpMuh6VPmE9HnJZjYCFdcBLaAbqNpPiaYrDMirBHu65i9JSh6vmDMTCJC82a97PxFrZhitz",
  "key18": "3wvAoZBad4h16NNh1GxrRYCoYJzMX7SgcCsT1Gi8VJNYnF6CqnGzJfFmYHmB5Zcv55vNQLTnPApye6phJQrTusfP",
  "key19": "2qDLTNk2HoGPn28Y5NDhm1ehFtrQZAYL4tHsCSr91M1crNTMcwjrKdXusMSKrfSDgNbVDzUeQBunxXrmiGwizscZ",
  "key20": "4XGJjau17YYNFmL46AH2Lr4pBkMxqVwd21ufXfm6YymFgxwyBFFdUxa7VHYZdiYYNrCAdadfwHU9CSrndSgcVo89",
  "key21": "2EJCk8L8iW16xc2wzZ9Z4JAYTW3nYXTev7WQYt8k2EDKgpbeco7nzgFhpaPEjVntYnmcFQvmgBy7jrwfoM5N6668",
  "key22": "4TWXkBjo4oWSMkvTmNAtM665MBwNLChmLF8CuR1qHD2tjvj75EqK92u52Wa2HMh9PfpEYLR9ZNrG2HT1g5qKSQKm",
  "key23": "2XJSi6ZpZcRjg8mbR5VpY8j7gJFL1Y7Tsb1ioWkopGHmxayKo8VAhECbKU5G2EP7naZsNeyDiUd8S87RTprnfj7W",
  "key24": "5kSkNhHo5x3TXs8RUH4TpBxs6ukT7KtBW2XjAC3kidig5WNNuvxP2ZPkkBNQXNLAMbwqUSDH5tMVpvFzySKoRe7o",
  "key25": "2keFtcfmUEdZwTs4nTiEM79tFgtaPemx7dcuDZ6VCqtt86RXp7Ahh12BoXW9QkXMfc4AtohPswY9Pv6d9gB1saSh",
  "key26": "3sRYUgsTWFMaRsCRyzddNTZYsyE8LwYNriGzXUesu3n3VQuaN9wPmsA8Pb7jnzBaYdvD8xpLMgNxTTkUu4QCpTC9",
  "key27": "4PfZxmQVSpt47bUkvYGDjZ6NKpcj9NAf9PL6ZW4saHsKypxX5vfBSauNus997ARmGrCjHGjhNTiU7MNpPsisaSFe",
  "key28": "61FqhnrxA94WVWGuGmtQAjwXhTmW2hBrLrW6RwkeEmYb3XmGZfihYyQKQWJmVyuGvMPexQdsNJ5jmcNbgPEfio3o",
  "key29": "3fFv6jVrWt8zvhP5ohSELsJiePwuCgqLB4pZUPTnL66PwPTU6Mc3bUknQpc6Pzw7KaJ4dxFLqMX5VNF8ZShdpRFp",
  "key30": "5vHNGyoUKKPZ8pmPW5b3KbP9mQcfNzD3j83aeNg77qBBiLHn8J8zEp9hg5w3bFg19UG4AVDzHFger7N5frWMGFG2",
  "key31": "3VEu7XbMqReFwDQqMgX5FJmPzToYGPDcGog7iG5XTMo7YTWjfyCXMjJzc5kYDFb6W2FMH9K1y44hwg2oGyrbsEsr",
  "key32": "3Ew2iKspsrUJMvL8NzuVee2EVaB4Qf1vzUHTRRd5TFAQEW7HAMePcHMBcrKd8xGf77aAqbjf9hSGzmtYqJee3tbX",
  "key33": "2VtCY6YWKTMYLxM7Te71mia8CATaR5cEpTAeeQ9feDLHJTPi5uo79zRK43uyKaSCkZrxaedA1rpDefgvNzGwrfxY",
  "key34": "rorGZsw5biSV11mMHhDpDqpr2A9idreyd7t3mceuYBp3gu238974wkKXCnkRvwKfqzKxk4WbVBdTzpotWx7TfWq"
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
