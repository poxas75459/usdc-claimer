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
    "2BkeiWHKcgTzfmXAMteHj6xJK9ydkFvZbmt9GC3B6iDvvtvJipQovFUeMJdYaCYrcuvuX8gXVJKxj9gj3adqseGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHXucyYZtSqymGwNS4xPJgZyZBGo38dEFDZ7faytFALmArxAQ9inAJ4WwdSAosmHrzoqZivLpjmQXRQwvEdfFGS",
  "key1": "5PqCMJJMYhDjH7WRMXvYb35W82cbK9M2r3yoGJsUuHrS35q6NFq6rskNyCxCCsU6okUtWktHqtv1yjPwMEPNcxjE",
  "key2": "57QuKXxRTjfAxnUGAiTMYhiXAz8xDq3pS9b8HNT6FxVo7yaxicZUmBV8h5weQ3cYAW1FLMEA4WZoNPMMGtY23yi3",
  "key3": "47TutwLBnYYveiyZMK6pGGsCUibqucMYskiNp8bi6yV6WWD4us5JF9AF8TVp4uJKcri6dpcTQimdSK8PjC6gHQn3",
  "key4": "3FkgxKihh8QgvWn6m8HBv7RkFqGVsvuTt6VyeGYseFqPhhBaLVGao6h4gVs9NNvSUf7Dt1w3jwyxUcKj73Sig6wV",
  "key5": "54FvDrPnNKdp9wijHJXN84LpReLgphPyEpzw14oAXbc7t42hiCcyqzQEcJKhHuTzQWiCYCC3BxaeFiyi5fLQdrsY",
  "key6": "4QGsF12UaWTgnpmZ5eDu38mqqZi2o9YnsriFgGRXowTeJFqVWERyP96Vg2bdKRhL3a6wjCG3F9LrMJjeoboawVMH",
  "key7": "3XUXR5sxkg5MtxwzRuDTZY4EVz7QD3uK8y7bk3VPDL1YYaGTTq9sjJ6Ztb4h6hwyuXKtTCyx9kfQDnvYPqdCFQKL",
  "key8": "3FTzmNGrvUHVFttGdeLhqN1gB4sVhLs1prBdYz7NkoFbmzsL7kssBybZcXwsccyptDE3Rz15hqWVZMwdLZUETE2R",
  "key9": "5wRfuwkJCUGexfh6aNDiEWrkAi56pNy3Fhaq53uSRx9hm8eeM6paDVkfrFXU9fM2H3uWQTSJLB4X5xukxMEEQ6Mn",
  "key10": "5VDiunEDa2VWX7J338ybQE6wnsmbEi6HcqgKc9Sez3Kq9BW8yAp69jCHjnZmAuPU58mTQvJNdHLMpspaEfWVuxP8",
  "key11": "4rB67u5WFYHGzxWfQv4VnnjxGgJdwmgRfBzzyhQrsUm94UgMWM4RdKu6YgUaLgRweFQTfuEDkGQ61jzM1bkp7oC4",
  "key12": "cLtUXywYeWEW7fu5wRLYEbLAj6oCN7ZwM6ZedXrnXoiX84duTqCkmQqyJrYC7Vj3j77Axq9VGthv3Gn3C3qtyeF",
  "key13": "46gJUcssuqsbfr6Du5CYMkDjkuaSNK1Kgqadgx16uV26fUNST1UUVe3jew9qBrfeAW8ShKRvvfV9qwi2fDgHjsfa",
  "key14": "5wjj6T4rTQw9QkAmsoycLFTmCwMS8BGu33ZJ2ZfVFVYNU4BnL4FuVxf8ZvBXGzMU6Z5cVzVYWH9b6AkkNUtswj9d",
  "key15": "4nn4ahGC9XMbydwmpqDaBiPao8Rtd2oMa4zvWFjYCbC69azhXzm1VTmTaxU5wGjSSAxgAaBbENJ6TXkhpxAvo8KV",
  "key16": "4UqYFkbuVSgXtwaaK4SBTHKTg4UpDRg3auVy5V4ZduPPHrrAQktAEZNsLTL8AzjfmmeZdyd9kdbCC6LD3Mr6jR9V",
  "key17": "sbxmTMWBShaP3ABchb3LGJZQrHHdVS15hAofwwX6T79bvJN8rq4KMQdwuzety5cykfsxh5751rh5vtri6YxuqyW",
  "key18": "A3f3m8hyDw7wzYddjPedEPJ3NbDjeDiGaBzgHngUsUTXxwU3DbqtqndsKrFZDRV7Svdk45ygmKUgcjUfpk8ZYiC",
  "key19": "4yR2o536zjtLUaJf2dqxEeWwMZGRc4af9zohdLyEcr5QfnsEnqKrjzE9QR4MY6ykhzGjgwe29LSnJePDC6CM5a6a",
  "key20": "3veNv5CYqQARosdB3SLUzkgNWDmzgskFV6jYbNURS3BmN3ctwZS3fXsHNTC7yAkWki7N7q7X3YXPKChorHtjG9Ge",
  "key21": "3aDH5vv2QLyUJAoMtKtLVLtebgve37it6g8Mg1jfiq5VDnho8t2sUmAw6dksYEsKrj894LpkM8Pqmm8kBhBaL1XM",
  "key22": "5HCvUR1FYtR1fbXNbgvixn6AC8z87TwBTPsz4sddois9HnXAxiLhkQcbyUWnrfDdsfLoDD1nF3jB8tRyvNNauAcS",
  "key23": "tdppLohsnr6R6HVsatHiUyLWM3QkdbffATXYL5XkTp1fRZmR83utuofcHYJe9cMuY14utWHubE1jdGHDVfwsHq7",
  "key24": "5h9iya273ykgaLU5uquhe8KC8qYqbZWi87kuVCULvX3aAJP8sUezJ715YwA1r3hx6aiCAcNrm3rCiqozC8GpjZau",
  "key25": "mqn4ay2cRyPfemWo2L2Rc1WVfTembmMU1MKfer7jgjd4ZVbB2wnhEdpBqxcVPVc3Wnw2cNWa5WSA4Q4kxcBzfKQ",
  "key26": "4X4zWJ3QQq6JTbPsp1A2RNFzxKnc5kCatEaG77S6iz3kk4L8QsX5xLoFhKz44SDfKdeMpgMgA8qAowoK6SFSdMs2",
  "key27": "2922Fb5CAppioL1X7B3sjswuuRStuge36NDKdQjcz8sJM2CzmhBduhtgi9pt8J8Wix19WWKLQFv5WUQq86ci1vud",
  "key28": "4UCT4UQ6pBftfW24iSQuQUNuayN4nvSfK1pRLhJRjbrj5gGjf3CB7xCu75d9iZPvu2S3Po3RhodDNs2TMENKGFE",
  "key29": "59MPqAJ9m3CreWNU2WFjfprqnFeBcvY152UMtrTSWLfrEdjbhoFHR3CbSB9jkFZK7J4mLhADJsux1TiVQ6m2aFeV",
  "key30": "2sDGdPpnvcwRAxMe4mF9Top1osSkVug6mM9jrjuVJijoyQne74UVEfpFd4wE8SDniAnhrHi6e6Weoncw5stBLLuR",
  "key31": "3oFmH5Hu5yrhvsATHwkSwhbdctPuHc2kWLUBiTDYkrVrNNxMLS3pXxQG5MLbV5bpye89waEWQZqn1N3z1HXwx7An"
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
