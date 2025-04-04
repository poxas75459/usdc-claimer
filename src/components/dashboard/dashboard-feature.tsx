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
    "5JkVSwHo8B5oQAoxNncMwLgkbjRECeqShMMx5QB1MxStU7c2QE6StZcqBhn2HCzhXGukbba6oT4mHrXU314J86Bw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65Z8cWZvVg9WEzN3WLbxCCw4mDV5Rcr1joZepXM7x9FiHYPNQFqM3ZRJAutuShr33swKzHtZbXNaLyoUBDoV4u7n",
  "key1": "52vsS3Ly8tS4XRFYsiyfLJs47Q2aa7tpmUkMCt5ZkWrjKzNLYb2qZZw1F3ViMhEEXYfpwphEasZQPur4iupZiUcg",
  "key2": "3fGhQqChtsKw6TRsAiNxD9eWfBnZ1hssJAFD5YacFjkUH2aqwrTSsmd4sFbLfHZKomJfuFHCVkn67UWWziz8DEQh",
  "key3": "4akQ1kCSaztkqCokrx4ig5pRN5joay3aBRQCQsBchNo1AhoHLB2QfiCDRnsaodG8y8GqvLMARyVdoSzy7Pwvm47K",
  "key4": "35xxtBXDb36AZ3ViMkCxXD7TCkV2es1odnMZxj2p57pQM8cVzVMyzDx3BAzP9XkQDGVALYmJn1iYRxZ86TY2KYv3",
  "key5": "3g3zygz9eMnW5HKCeghPbFxuyyeNk41oLKQycojEV7eGqezgbkgFTemXScvfSEQAADUejKcKEyC8CcQjYgB5r9hd",
  "key6": "2xQm2Brmy2RfpqpPShsp8b4AKYcRtEWGKPVZMyfyrowavmAdnEpoBBMV6qvRikcvANmwCvPhLs9HydmgtZ7F5JWB",
  "key7": "3xYW3aHjdxrahew2JRoytybPp6RsRnARSPeUzYoRSm9YaHM3fRPGmvmJAAzccAohCrsJgkgxfixzVmbGrqhkeBCF",
  "key8": "2JYQAJbgH7SYxR9W94kFtUHyvcwwQ6KYqSrCJ4WApmbXwgTLdbVhH9Tc7LJRdsyApjaJiwarfYFGfnUVq3oPowkv",
  "key9": "371dowyBP18sgx2N8JNh1SPpSnW6mr8SJ5fGj93fZT5GFSrZ5a2jfBNvbqEpTupKQ9Zmmmu9hq6SUJZYENhqRZVW",
  "key10": "5moAhuhRho1VhSQ9RpoBAJwtPkENCMg8QbPYBpHSFQYu1ZFaxPoQGevdY1momahVTH4nr1vep5wArij7tqwESEB6",
  "key11": "32dqdx7yS9yvQUqhVt1SgR7vu58t3iCWAbShAPTx3sdtLD72DqvmdvoyB2AYrHKjuAsTEEPnSHCstk8U5DMyR3Rd",
  "key12": "yKedB6M8rH9gT91JLn6dAHTcyuVss72y6ooowQknk1dFUetbUDF8Xx1XvgUe14t81rUYfsao2JSw7toFvFSEADb",
  "key13": "2AGz3HRAX6upZUcjxiHfydHXrzotVGBiPMBUmK5gdfRFMFYF79xSM879s4CApfTphXcS2pEGvKEsnEJ5V5qoeoUt",
  "key14": "F7hubTPAV1EKQNAqjThTyrmdwocnuK2bMNqBi6mbvYpkKDUFhnZHej6udvhX99x4QpmbtLpfrbbtDs4NtzKErCZ",
  "key15": "4ceB7Tvm4wc2hwMUfBYmsmt7w44HEoWE3dyis9JC6AJyTjcSepcNebznuA9ibhFbVvndinSgVaSee9JPaqUghCGJ",
  "key16": "2RtHWETXkauyzN6c2Yex2b3nTKrDmsY6C6m2nu5ovTP35NQ9Xu1KYyRQY5bnBR9mHEiQ95ckS4DTJdpeVAR3Km8M",
  "key17": "2fRZVrvuT5sonwUFCcpYoKiWnHX8N2Nyec5FP7nsUU4bkiaYzmJNZgdbNmPQGDmaKR3rFYnNBC6LTqUHPwVgBfPx",
  "key18": "3fxsCANMprV5xCKp3mBHs9AptrCiTp8yPbkqcMvVf6DbXfEixhDg6JNEQpVCT9MPTeGRxr2UNKymtZAHWkPmyZPd",
  "key19": "5swhTQpoVFx9GCt6RcPv1w1TpxwWoGU5MP3DYa4cNRC5DmtiMQXHfN2dh33AA8uDaPX5uMK36GPy5tji2c9D5tF9",
  "key20": "28913bY62KMzg76dRkj1hvG9w9yiRqAU4sE5Hm2gENpJQhvUW3z3HwHrCvDJYkLi2QLYnBWA6ZRBPBxUs4Nfs23m",
  "key21": "3LXE7zXaNW4Z8jUt3KkoPjX54JzuUFP1RG6j1sVDqF1ZNYkF9DWWH5EC9pEXffvYcK2AQ1YriHgZEgUniy1NtZAm",
  "key22": "4yiQg8rGaFnmX6uKiAnxxRYCu44yTEZRhm5HcLDs92a3sZxY8Kh1gJFMDe7CE6owgEmYCRtA1ig6h4989kCrk9cy",
  "key23": "5jf99o8Rjs1dthsK5n6TXKNo88iZYeGohoYxFGT6WDPxBjj96B1rrYaabKW6r3uJypgEoY9HaGERu4MHadBPXY5o",
  "key24": "56QjfaESo2AtmcsYb3t4LZ4BzqoXiCu5jgQGweVvdiMAVVD54xm58i8bojfAZXsfAY5FpWqh9g15AQ8qCS23zoaS",
  "key25": "4XcS99BvodWidviG6HmiSbFiKnfDiSELzyAjx3mHwp8kFA5c3r8QG43iMFbuBjsafyg2HvjhEqiJxcdw5M5sbtYu",
  "key26": "4nFHXrFgbjoz4oj7cYeyhaUyFyHYWPfo4Xqqt3P3xSNWkfGAsrr1cWk1T2aweUPHYTekCBqQcATDcawF7j45rYxw",
  "key27": "5nPvqcLFqHjsJRrGjkMrMzp6GL1YB3yvdVFzgTcT6sG2U2Yg8isevHEMFJB7GNNaiPTghKJK4a37P4HowFwAdUdg"
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
