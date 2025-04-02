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
    "3ByM5Gs3KGFpgaUFWpmC8y8wytEbHsHMZKLAG3ywD43MSKEewr72yZEHZTSLjDLi97U6HAvaPURRkCopncmjKzyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fV2U2VjooRQKAkaxpKTFCMGuNxk2fCZagbYZixpaFBUUvc3Vi4W3r2NpunkGQN3Naouq4Wqp9KARNT4eaXG9DXa",
  "key1": "3ukyNW3gcBVRAZiWqcYtLpoGEobpCYQKGRzBJdwMSjsHmLKoQaXn585GXq2LAGgytabC93pfqAsW5rMaDwcLe25L",
  "key2": "YYbwUYB7f8pvBpnCytnCQGfVqo5GUuwLuUbebo3PFB6HtEQUDUhcsBobeHF8CGpbq6u7eW2ajLB6TS1mjEHbG1H",
  "key3": "482QvFeLjepAWXbFoJCn7AXxaCPGgoX2E2K2mfTN1q3MdchZ4YEABr45iUsx8zAfhZNGrrQCj1g69XxrXfEJw3pS",
  "key4": "5TNFA9o1g8s5x8Uw6QBQEBVomxmugfBWYX6HnyCuzprEDAEJLBfRbzZuAEaZtdR7ffsKmYEfMiBZ5fEyPsyJ9kf6",
  "key5": "2wWuNp2CrT92B8K9QoSMxCedqABTcb5kVUHiJViYy2AcHwmv8o8G9G5VFMH2GZNWWv146yuZFS8Q92RcLucv5QsQ",
  "key6": "X6zYuHJ2ZsWYkWjJfZbzqb5fGCGEczbxhVY66z22BxHLTir6hogEiitvuPYCD5MXNuMgW6fU4Y6KpPCT7WdL1wA",
  "key7": "64VLUR9gENGmNhYcym93kiHgV99rxNe59mV1AiqYaD3aF9cC39HdCVPafNW1u48Hhz1fXcS7uj5kHZ1woeUm6ymW",
  "key8": "2YQ3ApqXUFnSo1YdL8J26sNLtvDLBy3NJFTyfJAWcvmBum2CQBChE7BzN8SGquPNtZj4Jv8y49xQdjxuefdG8ZJV",
  "key9": "2ovbgDjuHwrcQZpmfubHqrnakBmk3xLskgNCSJ4rFusbmeFVQg4HJYT3bvC8Lx4S6ij97nKLJSjgMxwrAJQ3xaDD",
  "key10": "3V5wMPEUrrYScYBPDVQ8sReNYWDHkbdiapPDyYHj1AEPaxvkoHudPGkKTP8igPgbcSg5g5sqx5r8qeuRDnLKN4Qd",
  "key11": "24Co1mekV3bfzHJmuXvcrbwNPBbS6qei3iZ8qYU9GVuus8cm2vqCEpnkgBhTsUotNH6V6jCEK7Kafmr4TbJoDKAN",
  "key12": "LezMsxyrR5twRAeMjpWTaMCLFLa5r9X2WcBboxuRWhxprKmtpfQuxAcBUzyrF533jUG3XRzfp5wASqvdJmjia4K",
  "key13": "3MJ8pkPvFR5GjguzGB4CZ126MCHJNu1oMrHVkJw3TKhcXkR21uuzVYNQ4gTauiM5QrAo7XjdPWWxPLYShGbUoxZQ",
  "key14": "GvAH9swaYFVRFmpcKwjQcTs4QRht9bZfyg3PkpN36zfqaau5nenVo7PxRq26Nn9RRNih4wpvwpr1MYoWM6RWQJ7",
  "key15": "4KdqWhJjwfWKAJHmjrHLRT8Puie8p8aN2kMaSeKNNKZ9Uq7WFszqPUSybboqZTVqm2Kp8wDTWbnVGW2WR7YoS4hp",
  "key16": "24R4uYdbvmK1F8hZxvFTU4BMrfL83ZrGCSNYK4rNUZ1n3pKcC5pd4CvMp885KiDoEEioDm4SywkfUsxe8gQvFdyY",
  "key17": "4oHbYkf6ifvjDQZAzBqWGj9Q2bzqEYUZtpUUWvLATfuM4X3vrtHCm7b1pjBNmEiHssva5v8fWPQLV4hBrABj7uMo",
  "key18": "3omhdYfbjxhYzC8sDw42VyGtJbhyDS5Npv8C76zaRXefTTrr6htrootyxEHm41oxzRs6LHE9NuoiSrTXNSJJr1Ye",
  "key19": "2pXiEnqk7tNwRnqRRoEmwv8wFDFbgobDsPVeumLcaw2ukPn86RGsFdMgrSvekiQixRki45KvwSkPtEZ5zzhmZ7MM",
  "key20": "5W4BVpKHhDX4akSdAyWK8jA7Nx2dKN6V19vZhZd4dexTt9CYUMB8xkZSb5ffbdaDB8yAMJdipuB2iN9Q34rKrdFJ",
  "key21": "3fF1d75zJvnqpfTg9fzgUPzcLcwmSoKt56hXaYMGMko9ypJN94edGjuD91mqVmTkgRvcK1eJ3AEgqHccphPiw7ES",
  "key22": "32y7aVky9vmiY3iUSvraEh2v9WXz1EhZxGpDQpv42p4p5FZpYsQXTDvH46zZGdeQfX8SGSe3b7vSdaP9adEfRZRh",
  "key23": "5KR3dY3Dd4tUURoSTubbYLb2LkZE6rtkP2RcwFCTxJ8B1g34vpyFrgEpFiE6qpm3d8fi4tjRnxxVDovqnpgL36kx",
  "key24": "5ETJgS1n6dR1BckdXDx56UUa6DWEMCmkz5qf3GzM41iQqtdUpVqgBHU3ZSQm8qvLhEkERnnL4vQRsKSf7rbiyHjB",
  "key25": "tkrd9LaLvHDJswq4AaRe6SWqf8Urbzm2XJEEiLJLoKL2E7gTfzDTxfuBvmoMRotZGBQyyf262oab7st7qF6s5dg",
  "key26": "8DfMVWTv7R9EcL1ZgSnh8NUTW1vRssyG16GahkmJxjZpLNyYRbvTDUmYWnNRsDohmhCHDbpwHd62HZVDFj2NaVg",
  "key27": "4xqLLzNMwtM3XnrsPg2gZrwBwKxvwoC1DFJM9QvXUGRe4nH8jwnMySUZ3NrkBPVa9TmyVn5mGJoacGWLGqaYUVbw",
  "key28": "39qts8NouQe8uniDQfishSHzgS7kWPkpyQJGxoFKVy3hfKRDNLFzwkJvqwvEbbFRKc2eJDczxMz5XMfKL4Gjt5eW",
  "key29": "3RqMUSg6LR79gfy3Us5PeLuA9sy1ufzYyHuvTQXHJFvkAEbMLArqaoAmW8jQNaBHH3pzAAZQeCTStL2Ju2551c4d",
  "key30": "3PbzBESqtQ3jdj3PceZCeEXRSw5QUUe8zgMzxNFzcfXDyLSzaQJQMUmXUFtn3GmWarrttR4LYaxobYjQddtsSNee",
  "key31": "3LT9x9VBSBe5Zr8Jasff7cN9o3nyugJA46sn9Nwttyx4ERq9vjqWinja5nqnRq5dRVCb6zHBqh6EJ4DSceYJLELe",
  "key32": "Fp7hkUeDZdM56YARn9qtfkdVt5JpoWG16PxKLNLbhfw6M1Sz7ntmxBk1YRS2hoceSqVP7JK2yHSkTh4KgLZVX1m",
  "key33": "5NnnSU8bKug2Ybz3gbGXtak376N41V1tKHJXbmdfpEdRxRycWKdmEmssSofh8S3Sx86dhVB6XkUb1zo2FCUM1kPK",
  "key34": "34FZ1aManBnhuUydpLhB5uDdjfQESnQiVrXFyyp4qndbFMtT9zwrcUKX19HEChkdvC8B3yvTNz4TkZXHz3Z95q7o",
  "key35": "7TXPVTgJeU41veoKpTyueU6MfsjYJjGx2ewEUkpJ9kN4JhmYgne82STQ3C5mpKtHsyiFLE5txYxmRj3MucqKv7h"
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
