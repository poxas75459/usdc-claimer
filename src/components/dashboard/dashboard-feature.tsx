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
    "5NTLKZaWnBkFakVVpFQCcx3npNrDHJCmsW9ehQQX5amTatQa73MB1tZeBWZVFu9GjS311xuHoPBiMZHCKw7aDvSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6G39PioWo1THn8f5LEWoA6ESZoL4PmR2QpiwSRGpQQ1bBZ8hzh3XmpMN3j21sy7nqPodYACWwKZx9SmEVMNqB6W",
  "key1": "38MNCW4ruU3Riv1pCTu4HYhpevkLu2p472nb4HDUGBspBTngmD1PDB3FzHg5FALQBeDZXqbAo4ohTdifn4fCYJTT",
  "key2": "2E3LtqjbNPwxfnR94Z4KB13EWBaw5jMcZtgftaXA78gNkf5DKoSckSkMndxAMrZE73vRVrB1TjQGwK2XLVnx1qNn",
  "key3": "3PNipu8ygFFyheciXeJKLEQibb6zRTvRYyNVTzvTtiqgEmwfck1QeBDCBLbEAYfocVUFeoa747Q4n1vY7MZmAxZN",
  "key4": "54yAJ4b6H74JtR38b8MhbffGwpL1E78YFDeg5Fe3sJLQhpJfinUXpUzGevRVnmWEfjFvhUm2gMtxXZhvAZQPkfeL",
  "key5": "5TZWwogz1ktywmAPuqKjAo5CKjZFJKBE88dDFiXTtrNhMBLj3J7Sa3dpgDt2MXyEaMwD76crxAYD1gzZTeuz7bHi",
  "key6": "5jkq5nZPucQqRbgQMNFsH5i9Jc6teEUem6mPTiUixW2Q7rcQw5kzXj1XnnauNTMoLppbgqqTRENntPGaPoKbPT8u",
  "key7": "5XiLxaDHYmby9uhpDWZvyg6NGDyoognAV8jpPmXugcYh3dzsHzZqEe1vomvghXtBWLr4vKEFN5Kq8GjVb6HQSoYj",
  "key8": "XZqJ7x9b7DzoiruFhgGzqNjPcGDLkjAh5XY6CPk8Qe9C4UErqbyQUiT7kQEDBx6Z2ZVPgga93KLnNnfaWaK8i9o",
  "key9": "RG9bewoneBe5STVZ8DZf3KRxY8huXQPsWpGPGesF5WirawfMWdR7rjcc9fhzGJ1JQ4CS1PPcD7icGUYfEz9gE3U",
  "key10": "3cyFnqef8gbE78UZ3f2VAaZJQmHWUeR5dmfPzB7xHJqALkDkyQBUtmap1niJ5KrbVjBjnK2s7z8qcQAQTsz1cwMS",
  "key11": "55buunVQZwcrM1TLu7kKYRtYGdJaLZ2euNF3CR6k3Pz55nbpNXA4dZGBVm8LZi5nztxms6Z1DQvsq2QFZUoCqr5U",
  "key12": "4G8LgfZHVrrMV8zZZKW3rfjamDHC5bKqQJTZ74Lv6D3XRcoW8vAbPu3prSwVHWFqdL1tSb1gpodgujtA7G1zrxgP",
  "key13": "2cURiQCuWs2DVTxYaTr96ZmJZdnojSyUB7S2WEWCT9JRBnrEtWQZr1VMzUVBCnKfPpATjharuGYxNMWs89t5KveN",
  "key14": "2UP9esuE1JpGFSvT7HSqoouJT5hX42SaGABKRhXwbK3C3R1HaiySgd2RSutr7aHP2udGag834tWvLYnUeKqsH3Dk",
  "key15": "F48uEWMG8nnfNbdb8tnVeZDzozzDcMkhqCrakQ35HjkinYBe3PRZmStW3nosJ45pAGVbvKG4WF9tQb7PK2Rw24Z",
  "key16": "5wFywfbWN3gieHzUkbttnDLA3UNVeRV6Khfa3XHrRqDGPvxY6gwHUagHaYMbfSKLQhfP2FDsaCMAwSf92J3pNocT",
  "key17": "4GD6ebXDHwCR1SPDtG85VXvjKsYEVZr5gZ8ynuzF55QT5i5o2aeCCHcQxe5fbNhGXxdteFjtaHAaG4A2AWRWe3cD",
  "key18": "3a7YCScPKx7KU15Zrk15shfjd1jjUrAbPBkUHtF92SkpX8WrVpTDVkkt3D33FjeQDDKwTzc1QYNx9sznvWMEE7pu",
  "key19": "3E4VbhgzFHv3ALZPXL2L2rpJJeABXQKqPqGsohZEJEv7MmCXhmBGaNpzQc3abC1XUo386T7mFHfVmSR57LnR6q5P",
  "key20": "DuKxUUqTFQdnWG4M9DwEH5N4z9qUPkiT6pCm5LPaAMJ8sbgJnyQKyMfMqP9Eb2rTxFzBi8yrvf2odqz6CMazAVZ",
  "key21": "4cfP2rSYm5xGVGrmwLac89j7ow8nF591wvJ5rhb1b268ptXUCneR75cdNmWxmedhgdwc29uHvzD1teQ4FXce4pVz",
  "key22": "5gBW3NoKCRprxEUviUcpzdvVBRZf7skfmeFbVrjsq7jGxjBVsQir9GiAk4FWCKY9W4zL62anM6yyAkjy4hNeABB",
  "key23": "5Vr1ycy3V2RdYQ5Mxdc6cRfLerftfux9Z2f6ofz8MT7gQrGAGLMwr2NkHLjsqDKHa8od9oi1VGYNTTky7Uzb4n8T",
  "key24": "52mKCV24o15MvHFTZYBjTrhUVRQ3SX3fpJW1oAzyLpJaTWzY3ffVemtkHMzQrKHHNuQs2aMS1NzPuqDSUvdG6PbK",
  "key25": "5FeTTyq3gUCVNQcsVezgRv7kgK93ZoNnoCXQv4DsqSuyQMugn2KKUuXZQTz328Y83yzTJAM97RVa3U5Mv1VjiR9T",
  "key26": "5ZtXvZGMe5Zw3KqULVmMzg8kigKm5iqcbA4oMUnSHLpxKubwvUPZcL4VVmomMmd1a1bvVimJYP6t7X3pXy19gQbY",
  "key27": "4jhDGvoPdUEstXRSYMKwRRsEASJn1nXvcQtm7Ptmn5ZNa7isqLigwVt3PCkC7D1s8UaAWxvC15VFYsvsfVDZXH6H",
  "key28": "MwszhGtevUfB2CUc3QDUDpYUbdbBuheBZwArLnugyuEp1TABFmew2MzmEUREUQQLaomjiZ5CckGHYbtchvyGbVY",
  "key29": "4ajcPQ3yHebXUujyVRzEPu1Pi81ox1RoWPjbrt8GxBT4Gx3SXZUw21qghXvKdV2YDpzmU11aFmXoiK9KouEcqcNE",
  "key30": "2NDLod4GLmFdeTUFxZShJfJLc9qF1bCAnYWb4KuEvmHHoLK7DMbN7CwLxUedZMWDLE3C9kws2xU6LMSRdW4FFkmh",
  "key31": "55QP5mPGSEoD7JyRFauirPgtMzeL9uDj7TXXSFRjkEmSE1ehYUGUMtt7tsFnerdVQVD5sBLaQuhLSaNtJkSJhtba",
  "key32": "nTh28UZvPdr996xrzumMYJegNb9MkR99zfsujLo6bJao1RFjnZLASFxn2FurPZGUzhzRkUJKN56T4zkRP7WU5Wm",
  "key33": "3aTGzszbgqVAtXiyY7mAex3sMpahztRtTTPEivWbwuWkAYNpJMi2eN3qWNE4rzj48F8j3HRekmVLfXZywDYFneoT",
  "key34": "4X1suKjrrGsHh5Ao4cHB7cCgfW5FCAfxvVcKTe8fzMgED5qp3rW3UYRBKV63fhkVzuMHSmCkU4SDG2rXUJgjycke",
  "key35": "3oUZwuudor9tQXonkP35pQQF2gAMsDu2yHJLWfM8heKuadim1Amo1tDCq8wg7U2FUsPNN4YDFFGyNq24Dv7zx4Bz",
  "key36": "972UKVGq2brHC4ExZr2NML1omaaLDPV35EA6ir1Lho6Y5CQqLXmotyRNr9PyncRszVwoKd5coHwEfDG3ajz5D3E",
  "key37": "3WCVAyHd9oH9ZeZ54bEuWzegpUyYo8GvDENP7LepMFtq2rMxTEtomyH3PqsZMHchtqHyMJM56zQ4TfjPumQU2xe8",
  "key38": "4woWgrfJfooqbnLMozVSitpXwTpubDWRoU3x25rcsEhdDBxZkdS7sgYRAHNXdrXvs98CFzMNW1kqqiYLkUHFF2po",
  "key39": "5ZL7VuRnS48ymRdWWj8HFgNHvYvWH3XvNsaeSUti7VGxDCyKF5QxpHZtZoL1VAWngcN2LBuGoGvAwDNvhrCjY3cV",
  "key40": "2myW46GdvGabKGgftjnr4bp95sKcrs6g2dNkhL31jVkmd8rD3uRtjNN8KiABuRhC3oZzrJNsn2fxe2K4THtGheoY",
  "key41": "5inTMC1QjpN8YoEJzYgrFm8ksRx6q39KYyio5pTVoND8Nsfb42S2MXtvtrBiwAoJ81ZUbNeynuY3W29Dd89rBo3p"
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
