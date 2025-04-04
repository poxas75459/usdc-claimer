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
    "2nwXw2CqH3UB2fWPLyfg23dQMr1TZco6rdv5ZLSkou4AEpoyRpiMhs2x4sEEvjKMPKFUEfex3Yy5pL14GGomrZ45"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YHYPSh5VoqZWVRKU15Df1VnLDrWsjckFQaydFg1cNw8nxV3zNDwWJrAygMfDPjYqmaXADZv1N5k93qw7opwhznU",
  "key1": "3HndAutxF7DzeVtJ81eL5G5Br1ffcWgj69eTP5UZYxKqcMZo3TvZoVxvajNdfpS7hYGDc8h3fVLGc4Jmoz8bcm8y",
  "key2": "2RFzWDdUrcuMLwThetRjKq5eaRoHFzqJFFLPdB7tP1DUsMy6om8zevXQ3kpm8wRQvPTZhkvj1cRvuTqwqLRKkKJA",
  "key3": "5zatRZooX41WB6DZK8NuepxrcsibgdXyXfQE2Y6SbbaDjSfTzhTcobCdRcuh9fAXX9qw7j3GAv8HeM9tRST71XVv",
  "key4": "28xeeScQe92LeUwuaC7tNHroSsHU9kbVEeuR92vDcPq14D9EkV5GQrCpDDNRCSiPro8MRou18v2uYTZgZLcA3auL",
  "key5": "48TBc4jCnDjzU6dKbiatSsMHLnxBPrZ5DJtG1GDFUvGauqbatiXtyvfmbyti9DzekCA7UguMKFtBoWxuYULL1Tub",
  "key6": "PzQYQ3WR3j2fSoAKB9r4ZvtGDy5Mgp3Z7ZpEsDUTyyxYeHK9oRpwpLgVSgAEdhrfyQpY8yTVN9C8qmNocua7xY5",
  "key7": "AeaymNSR72bjPu9zgSY5Sq2PRDxzEwjVhxeqrnAmpUWqbHGL4hgTt5mGjKt54iJJY3dvZ6jtSkeWhfFNugSUCjL",
  "key8": "3kZsF5tBWjP3tvkurkemcMFTBnFZ3NbjN5jpkaDQVsrQaxDUXWWz9vjRCmZE2W2SfKF2ZCqpg19N3usQf4kbknxi",
  "key9": "5GzWhzm8wmDd1P2rG8oSQ7fJ3t8zWD6CfoVP6JG4RUG7M1Aiv2Mc1Vn9MnJyNcEruUqkReCZvZD7eFNod2Nr4VFP",
  "key10": "39VNuxQ8P9YSzXPbSKPFJ7iBfvK4dSWs7dZ9CBqhMtWxJy8mc2Tzc8imWhvxGNoxr5h78R1bAbGbEpCdZZa9utUM",
  "key11": "zo6admdUewkxjAjM6o544oPQrvZLJiPbEmhA1EG1zdoHrmjDEMgwJEUC61bZtoyhRuDPE3ZQyNbiFbS5vPzPRHt",
  "key12": "4i7N8suSuzY3SYSpB8J9pxUeGqVVwXEPpAZ7udc1moXdiXVh7U9HfALRvmFkEziMZt6TvFGSPK2vVz5oRtVJfNbC",
  "key13": "2Ef8n3LL4RXPQoCpfNnauYaJCNiggcgu8Xjw9zZoiXcT6T4ybZs6oV14fTiXVgbf1jre7SoJazfXvemffymM7YG1",
  "key14": "3Xv5CUyrmpSpccc83grLZM3QqiPxDZBzLy6sNgZcGvujfe1Gmb7e8aXP528sNZv28CmXp1Xb76L2tvuZgHFEVV2d",
  "key15": "E3syTPkJGKGfxoZPHp2dNpC8XUdgdF8tJax48c7761m1qqe6q4Tqrdr5kt64q7oUxXXbCV2gkVg14GtbQTgZ4S5",
  "key16": "32ruZjaWVWstKcn6j24WQjxbjN5HpDRN8Ryn9Pj1uCUFcML2tKqe5d1ZhgWt46Fmg5Ryosi2c3rRbgj38aunmonB",
  "key17": "2D1C6bmuhxpB9q7eqBW6rrjBDhvFjib2TT3Tctoqz2D4Tunc8WsdN7AGQgi81n61RtnXF1AVdPp6ZXMzcTCpQXK8",
  "key18": "2bbnmnFpwetcuyr1UgPfV5QZgwCjQ3sbvwTECgLs9Vn7C6sL6ewTRjeKQ63YJDpPi74RgzxeP5oNhT2ubtkkAYRf",
  "key19": "3ykBLPCWTVKuuAhsoZrrvu8LTYc4Q7x2t5cDvAf2bGoGXKtScbw2XgpvvwcTMoBBbWQAgGvAxh4aYz588XNVCfZs",
  "key20": "3BecGFjaGmxt9ZZ8wxUwdiaN4ZnQK9tytQbvYWVVrJSuQ163e1xA2JCpMG8U1ASYQREDyy2PUYQioHsPtBYJTqdS",
  "key21": "4ijcdPfaRrefx5Ttin77GdUMDBsZMSSYAdmmwfXYjqdBq9pCkAxprfhH46touKXPEbsSGv4XF84inaomwCwuRBEZ",
  "key22": "2Az6er1Q4pj4dMwhjz3pRqmYDL8h4KHJvcLGwFPKygwysewRtvAsoEdEyWtK1AyhcUWZ83pwXPPjMpTH4gLSAgUb",
  "key23": "5i1Kt9z9HcSMSuWEqfLe3h5W3FWpRieFedjaEtH9CZTCZensbEVXKnegzVHaPeguVMjwJ54vLMMWiWSPyKHEjQRF",
  "key24": "M2uuSjmUoQBXTBGfEZqdZZV8LoAjmx7NVyL7HkvSVdKPaDZQfH1trUuE9z3ZMbWQ4UrbNxvwokJUgXYJ9gWkjvW",
  "key25": "3rETsh9mAyfDdNsHfFjX2aB9CcRPpQ3UBxU9AFHsVg6NvjytvReCMqdnPo5mfgM32rS73pGFS2VPo5LZTvKfKDzm",
  "key26": "4gQWDCVs3iMbeEVQosNzpGEmA5s6W7YY6ABwNjVJCCLe73QevhzHyTohMBzjZUMHraDKiA2j6eHeHbdzAQRjQabP",
  "key27": "Bg3zyW1m4RfnQwt8yitgJzvUPZjuy4e7BmU3sT5qNqqxKwdprXW2Gj87V5AvRkHY3LJ4ZeKB9NfgYBVA5kHtXuT",
  "key28": "22pvYi314hr4eYYCH5vbe7Bax6pbEYR76qXrPQXJs8nMNMjAQNr9Fcp6aP9E68ChoFdqE9MwrQ8uZa1Uu7tb2sik",
  "key29": "2nESB61GcHgS1yEdDXG2iVhLrzJ2NqviU2RHT6rn3hi1VppMBhURWMt9Y99c3EmRARcxT1LcMAixX9BtN7xrVnh9",
  "key30": "JcUvSQhYUARoH6GyHPLcqj7T53GcmihLxtgw55Jw2YfitXqunmfmMpjy9TstSzEM5j5gFVdrppmvG31BxGf96Sa",
  "key31": "2MdV7FWhGfimctLvTesicJ79ekV6ruPwuKSHEiVPMvwhRDCKcidXDM84eEg8X5wkJjea5HASrmkdo6L432JrDYjy",
  "key32": "4d4rjizHxvmqbhdcZwtDus4nEtKqHN2qoU7ptexPYmEFfz8kjEkXSdFmayeuErHHSZAaL7gswcofsHJxzrdkuyS1",
  "key33": "5R4mi9py2ZcEQAUxdwaxahhwBfRcRaMinPEwkC6XAoBjSsNaeyFVEtjoL1BCRj2PGsecDcqsQEULWz8bsicc28Nc",
  "key34": "3pSZn7ehqjSZPTVfVWv4mEpvy1qxWVXSNCsYzZNpA1pWevJXZWTYd1RmMiYnW6EP82VRA5336WkdFYnQoJLzdDWs",
  "key35": "3GkpuFYawgREpYRsUute4NcTKqSmhfFtSDSGwhMduKYNnJXDJiJ79yE9wZcZFRxZcNDnHNVpGPuMUFs2wUuuQE8q",
  "key36": "536L87a6YiQfHz4n48psoB9HEBfwAoopEPVJJ7fCmEK84BD89MmqE7SEm9F4kM2UGVYwQJnKP75smK4BdD36MbCB",
  "key37": "5eqPGQtiSLQhufNu7Xs4M4vU7CqdmLSMbd5nGEwWVKNDhWqELhNzryBhMbhnX52k4JawVMctTBXhtAFFEyKdymXk"
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
