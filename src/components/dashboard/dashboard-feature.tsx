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
    "5JEFkRZnCbPHBQuQyuU1JbFVuUTogvpBHmjiZLhQ7SSV3vfdX6vnvaE4zg8j63XNMFaJiB4X58C3Kjv3qbsQNFuc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ckxXwKMKBLkfzPV5U8X1bHWWpye8WUd89UMb81db7mi393fcoqEwcaAa3aZvkanE1qykadyoC8sfxH7TgW15qt2",
  "key1": "49ivi8Jknm15HuL9XrbfKk1fhQToTybruqLqGxBW8qetA4izKpZyyLkAtH16RYfRuzoyyQEdZQRm8fsh7NoKVDUE",
  "key2": "5kYYPTU6yY5mkDi1WkLDxmFLs8M3aRkN8RNxHgqkvcBzT497QfSff6NuGoTfdRNeB3JZdPmL5PKUdR28QicebQE2",
  "key3": "3ByQR9y13ivK8Tr3eBkHau2JtFzP9ekDXTBKegwRjmqfqt5UHTgWf2m89BqGvkCgVmqDraWA5tghwute6ZMZfF4i",
  "key4": "3QJppHPaNNpCWKYgmA8iit2kKXPphyjYcXJSaJ8jvQhDhCtq1fTfgrGbKejCUEQrX41a7gxpBueJeMCyHZgeABK5",
  "key5": "59SrDDAPZeNyURYXwcSAbETTZXdJgqDTGFBfbAWSmPPekTPaP7JW7DxixZWdrMzRw7CGJwkeKQbgoFM4tiPdp7mS",
  "key6": "5S9T6LCreSbh3gL4svYf4MRmhPD5WY6vuM9YNqFYe1Xtf9BkwsTAKDL5X9Xh6fktGeoFJbRv1bVra96RiU2sJDxh",
  "key7": "c397SgaGFH1R91GyJkTkAK6sXguFw3o5ECR7Rp6q1KYr9iEq4bm6cCn3YfaLEyYuSsJApEbfs4d9hRWMs9r2dtr",
  "key8": "4ZNRqFNXBLu5phm79PM92KTL1aWwxWtSTwHM5oqzhBduhhvddxckeAXcrAvWKJnUHKzrrw7AGCXz6gxsXyRWSy2H",
  "key9": "5HW34q3vdWQYr4rdB5TfF7si87N77jRq9R1EkeYg3nEuBeY86ZSWqr9QtW8D8mncBgFE96BskLLG5Gtvw8BR4ePh",
  "key10": "SKD11pxopkykeiGamypSwXvu58xTGqCsoSQi3XwRk4PhuduA4aMRFgDfzFfR1uEj12Ce5G4VH7pf7XHp2WrSuwL",
  "key11": "4eG4vfHqfUPQjuyMHMCAiWpCq59CCV59cwoqbjoNWEWrQ8XV5EJkupHBGq7VNn5nahJ9N7wAcYNZm4VFe4c5AbqQ",
  "key12": "zWUfSY7mAEf26jiApb1h8rRHnQeXA3s1Xk2DU5PPRUs8G7j5xwFQCeijfX7kFbfjxVQcbrbm5EeskyepajTToTs",
  "key13": "36ykxoHvS57bpk3QWj8gGqdo2h76HwvD2CyFazACZxGzutztDJMkhaJyRn15GmnXdKwVWgSM4a25unGH8Yxjj3Wm",
  "key14": "574atXa5w5yzE2S2pwK8Ta5Gqm2r9Dud2z9sZB7aqjirFAVufjjy9tN9AJYqE3rGyQm36UoGXWKYXiognHSduyYG",
  "key15": "34s2SBT9Z79fvCPnLJe2xUoX9cAaGeBUAd5raZCF2qcs1RdKK4dusohE39Zd2Rt88otAJyGq1Cdmy3u9RDuH8KzL",
  "key16": "3exjaRusoGg1z49rkju8KQQgH2USiZH5NrS2L5f3NY6BdRFyFTrzTrFUNcG7LYo1CxBeL4Li37foxepmP39SkiFV",
  "key17": "t1WqwABW5GWAAgtnfzXG7Ys4gqqiNf1fFCNaUqXFYz3esJfQz3X9J2Dy2E6T2dBbR7sydESXp5q7wtTBCTXSAoe",
  "key18": "B1BLpG1fnZpTyGv5oWxUqRTASuWetcuf7B32zmuiAXf4s3TfGfiHEAhAmXqmRK8KM3XjPp3ZSzW3gokz5kH4Kuz",
  "key19": "37YkD7AyfN9AiQSdae1sY7CbC85c78EtSxQfdARWCa2zYVEgvDwaW62PaFurMeuLaMaC4RJ8jDuv5njhPga6foQD",
  "key20": "CjxCKiERv5goFv7gddbDMKNGsktf6S3vJ6yZXxKhdLxDgyw3ToJgR8Bs8j2KwoGTYWPmpdKTwySFrrSG5HgLTJX",
  "key21": "24GkCrGGiJPZ9RuMY2NNBJSvUimiRQ5vd3F2t7tLof1sZM6QfV2T2jhDYnNATRnWn9q94DpwFuthMZqnTaJUJaY4",
  "key22": "gbJGMCJvqieq2zJKzBV1C3i2vfH54CR9xVAqvUzvoZVNEhoaxoa841iCd64zi4FEX4Ngatz8YYqxAMbGBkd7eKd",
  "key23": "4ggDfcJeP7rmiozLCbSQwtPr1KRaVu7jhms3BSoZmRDQLPThpAT3XKKEnmUnvfFM86DZQR7wBvHgCsRZNeyT17Jt",
  "key24": "5b8oZVfkk9FGXtmz3x2v3GPCewU1MFhqnBrLmjKshGg38hkeatYpQ87TEe8p9PqcwpLj2P8cwdrNom4MRtGsFbTr",
  "key25": "5Tixtd7ruqYkXis2EgCn9xpqRrMcvcXrghR7axcbG2kAnacVfj7erVP3JUrWYti3BSTx1FcTNRAkCqabEBK5ybZz",
  "key26": "59vRQtsQKQErGgPNibgzpEmKDMyE3V547kr9r85ut8FvpeC1PrmtRNoo4TqmosesvKPZmqb8dejb8gnFrtsQPKWZ"
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
