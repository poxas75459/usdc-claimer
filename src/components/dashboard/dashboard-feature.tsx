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
    "qSeGbeHDrvqSMfenGypX61bAL9xe1ydf5KErtpG6DWHyKdMwPo2URjASWB7LxUn1w4d9mNsmsKsbbebTDCpw9aF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BeLqkQr6x3v2dB2NLTxuPHqFFbwxiD9d3xsu23JnBm9jgaRk4F3NMQX5VLPvYd96xMGdppwyJr3C8eVWJweP1Lt",
  "key1": "jayzCcU6PjwWFKKpnrtfEHQaEABskBh4CP4RZ4RaPwVkpF7mnJBND1X2ugRYTy1MWmCuMgiauGqK5hWAWdaYZAN",
  "key2": "3SDGJjWHMGrj7jDserBh2MAwcpjF3Nxo4E3RVLcA5b173CMo9ZhsCCgJ2iSQiPizqhP4zvZQo3Cq4i4mTeyCNXHF",
  "key3": "5FrFDtYP6sZaQguaHyHyuzKnDXsgEZED3uHoc2kzNrsjedmDArg1oqAgptwhiTY9pBMwvQLU6HB7AnPggQhf2sby",
  "key4": "3o3ME1awYHeaGiTkM2HaTtY7auw1Fv4pC1UCS3z7WXiST12zV74iDYt8ESSvrPZmmSCtZhLN3fMLX5HEEbazy5ih",
  "key5": "8ewaEmyn3fBRvYrjZYyVPFf3kz79sR6iSLm82yZM2yebwpQJ32JGsxPW7pPRQkc6XrcubZszCiXSn9WLuiYB3ii",
  "key6": "2mEyca6Evejqe324t4JLhfVp14dPHDYmbcHCZxPY7dKbPfK1hxtZiXm7Jyf1tQE98E7rmtdSH4bk1YVpcHtLopcm",
  "key7": "5gfX24ptMXcKiYPJrXfYvtmHjJAZnoMuXasFTCFZHhSFocpB8TLeQeGvUnDJmW37bZahapXEyCcenjHq6z9Qgyfc",
  "key8": "4poxbGzEYUBNDvCN27ZuMKm1BGXSwoBGnsRzhJTJtgR5cvbNWXzCvnqqNXRETc29hrdsbw5k2eUsBvMiuH4X7jVv",
  "key9": "3AJZDt3Fdu81D49AiUkua3pDkwYeSwdvU2JNRpGXsd73kx4nexQCDqY6ETw4ghrrNo2KZMMYwwX2DvYU7upMfCGD",
  "key10": "4Y1W2ifq9DL2xd621LFqnVDpFd3yMMEP5WoxQhM3wLBQBydYmGPNkU6J8f8gBicLZKx6VFGQwdu5XNuCprptp8Sp",
  "key11": "23fsiorPq7byf9g9tVDZNKNd6jEQBWkzpgcpUmnHdNqk7zDNW2EfvXZ3MddUocJQCg19EjDiuWmeyaPeaJfaNgEf",
  "key12": "26XiKh6mYkXt4x8dzwwADmnTToKuvAKbzj5wtQeRSWNFpef4q2H3EA94i58D4mfzHAzHTE6ZRPP17BSkwgpWnz4d",
  "key13": "4KbAKi8jZq3Fwop4TU4VQx4e3XsHbzNqY5hGQ6sogRWsawyQprcjJicA5qhaTerikNJ6NmPwJtKNDN6NXubcVMVi",
  "key14": "Lm9SQZoVLJvFbDvdYWTeNus7fpMZdnnesR45m6J2Uzjo7w6bdATLDwpRR9HCYa6JNHmvgyvMvuosHGtB1PbBuFK",
  "key15": "4HoUQU46HgHqxi55JLMArUVpiUpd2AARKuGgkTJ2JLVi5sAVBkfucgThHeve8swTGiH3UK6NcxFfTs2rdmYXWHfY",
  "key16": "5u5GicSpGX7otYWy8k8QisiqGYQqqRb3ZkKLU3bbq2u5vzqvn9eW7Ms89CRjw9GVc3TFLCkVFw8aJkB1t7upHACn",
  "key17": "4rDF2gruCF98c7dZyNDEJC4vnWX8omCeQT8yoiPKH79miRrfWownp66P9LidAFVpbbUGwnrBoMnQjvk6pjFxM7c9",
  "key18": "5frj9jT3S5UeVQsUuXvRW2DxjRNY5q2CunbDfo24fXbT8QVd27eSXaMN3XMdL6r7yhggBzAmDboGvSamcHZ9LeMD",
  "key19": "4wpe8reevx6pqqH51G9cApFXzDZt5JWvcE9gMEJuxHynhqWJS6kzkgPVrPopkZ8TSSMCodpJRP7m3zFrqmMPJDDD",
  "key20": "5J3SYn1ZAfQVh71ZX5BYzmRkKrGwjfuuosL5dKwpYDtLcP2JhCLKvX6TARr6AL7XP2ge26YWxJq7bYdisSLipfks",
  "key21": "4UHBwRhVBwCtVzSyiDdpfwnppSYndPrqjm1Evi5jziJuFPFjMLmLLV6ivL4A1wppymKvi2sr9HDpYoV4fMyUgCHE",
  "key22": "2hX4BhdwJ8GqEYgF1jiieNN6MbZtXB3yogpNkzsrJGhRFVPaPZ13HWB6RPu7intftbN8MsT76dejsPpoZDEtF3hn",
  "key23": "gEPWPzxRtJE4kL2EKcM5r4DkWBM9PGSjXsTrd5Pyb46UDBxnkGk911RyGGprGMbKP5NS34X6rjUibWyxPPheGEw",
  "key24": "bsynyjfcQgtarY2tpKQi4biysxxJAiUbDoUP76TwBGzFryKRoNevBmVsRmuokwJkoLMvfKKjKKDiZGUPa5ctUZQ"
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
