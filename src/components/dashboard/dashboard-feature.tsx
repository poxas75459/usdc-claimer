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
    "3yadVgFdWanFggfFrHap2NGPUS9J12XQKYawJXEXaqv6GpsuRjANYiLy4Lcdr4N7oQDvSdNQoqENVwpqvrSqxLeS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yZvniPSNBgcp2kkLVkTct2tcrG6WtBc5fNkx4Coo5BRNFQiXJsvrVag4xngntR3JgGf3BXSwYcresqgmsRT4TRs",
  "key1": "HgmYduKdew3HyD16prFiA9AJDAAm92nZF1po1JdtQ1x9s57N6zvZQVyD1ayANfFRsrLKgMvtkmma7sUxuTmJ1WA",
  "key2": "2Dn6v1BFMjf6igkB3M9815mY5aNfXnJkpsw3zjg8nBNRvJDQXEwKkuXbPCq3vGosVQy5zD6RgWWU4aSHqUv7XAzu",
  "key3": "31ms71vBx4p4gsJsLJw3SZ423u226aV7rd9h81rmXut2EYQRJ4q4Dyv8WKR7Av2nm2ZyYCX79Uh95RH4b3bWfyST",
  "key4": "ke3QXJNoewbV1LqgzPFmQLxHaviGu68zohBFhKeS6NXzcpN2ZGfRBErtt5sGqUJLZyCrVeHc4DP4dpWeCKsLyEG",
  "key5": "26KyDF8KUiiknFfaZQcu2rBeqXdnfXrbrVoGFNDL9QsHfjpCfLMnA74DH3ZjnzRaWwrzJNE3nQ529i2nW7jjotkb",
  "key6": "251kMPGxbv7wipKp7N3VPo1SMN2rngpMFatcVXiJg2jtDfnEmHyyhvfQpxWAQwn8pKkSe1GSvNfPdBNSdnPaAKK2",
  "key7": "3r8bUjZrc5sPQqu39HCzURwFNPso4e7RekmNsGJxJg1A4cRa1xz51jbGqarND2se3rayKWgfeDNqipecZUbC8hST",
  "key8": "2BiR9zEjEaQWVHB9a5SYWxvPfAGEjRWqHMjiujf1hgT9vJQqBmn3dTNyEDvwNNSWgikXjpWawb427eRYGKh2YDv",
  "key9": "z6rrL3Yf3wm2Dgzk1yfPPV9afjaxdVkSe2cFm1VVYxAoxLxh9exYjA4brhK7SBcEFAjCnwoodEuqB24z9tVey3Q",
  "key10": "53dEaqt3MqtiEZxEy7w9q5kRQngQhpQ8n2TFr4LLh2W67gTQkwzuMwGSeR4RVeNsZkBF7r6BcjwAbPQUZee2HcaZ",
  "key11": "4nYouqLmUrh8m1HbhgZjtd2UFodMjdXoYiNbudfZr7PsBPUzikexr1Q8tQHwW3vATNbwcr6gBm7XoJH6dfdAvbJA",
  "key12": "5sd3vKKa1aErKM5EH6Vy5xPkUr6pso2YqEKavBgMENUGk7Tr8srEzxFjeCKg3A86y1j3QW53YevFxUvPaYScEJrV",
  "key13": "2LFmmVvLCBTD6jsd8sfG5fj5YhdbRSavjmKuYxCTvksjFS7vEuDeuK78Jtik16dW3Aa7VCCKurtzVv6hMoYfjuKU",
  "key14": "5EGMCvPqJ8anDBmQ9Pq34VrYXzFyU3cMDrixDhHgxghtmyywBuHrr2p2Jt6Kr7vAPfWi1WKNd9JMxMUsPyUFjXWN",
  "key15": "5dbSJ6FbMg39iePZpLTJqAgacvhXVq3ECYAYb4my3ruf1rmsopnAHVzeRjdDJXiPGxqfQqv9o6F4NNNw4fyYstnm",
  "key16": "5G3u2oxffcf2q3Pi7GB3jUxwNLwDmc8JXwhQZxASesUSxD75AZY2NhVrA5ogDtA6Y1qUF9KpELDbYuPG2jH8tGyj",
  "key17": "4NhajKA26HDywkauSXoKFsdx52LXBiVsRBcUjUYxYWJumjd2L11dbvbei48QiiRSC2k7xbuG16psgrsyA7L3jGXk",
  "key18": "3m2ADPjLLVRQERAwLBvC3fbkMfzqFyzu6cTnGpgM6ffcxBSCTYNtbJUnepsGXDpvPQymBUUUzWyeFnUx1hJo83Li",
  "key19": "5tXF6oa1GHFoK6T6p4Qyf3iyasSi7bwzVPEmk6iC8Pf2rAL9XFHuY6u2iqkggawtgakdCCgCUToCLgDpggkxrU8e",
  "key20": "3Fc7qWkGLzP1KjHtoWUE4t1TSaUxa4qLDVQHxRy3iUsdaFStPJDLnjPJZrXx4pQq3HCQtUrfPxhinTqAisd3tDke",
  "key21": "67E76YJDdk3MHj4e9y8Kab4USqJzX5gEdm3KJRF83fNHWyY1Q21Ut8HafKpVKmDpZLvsYSW7NRMbzCXedB7d6Jtc",
  "key22": "5k1YyKass7avFFK6rsfcMrgq4bPXSof6aX8LTeLiKoyeaiyEti5PrUUBjhjW94nXySRq6EzBGqqgYZf4BP77TdwS",
  "key23": "5qDJ1eKeJyDPoZqzvnEL29TzTYe5fjmvw5uQKjnWGopAa1UvN8R1dJL9Nr9rrCyUsPmsKNU32wJzBLNNj1SbnqXJ",
  "key24": "5BiZKkjp6p7wBZx7Db7vVYSMwD1VrZbxMrAUxj2Z1FgitXE8ZMY7pDYscjykyVkf3TCHqDnNHHyjf17j1RxnLgQ",
  "key25": "dpN7HSHPDTYHETNwVmcoUNjp7dK1pnKGuztuokxSh26jaZ9bhr4LSqojtk7ayuqTVgZ48SoHjycqHXy85EKwPko",
  "key26": "62ix1aLLi6a1TWhdxbF3bk9f48PFQrFSk2YD33qoJoEWoMi6Yq7pNAghB6qGwRm5NunVL9JGBBLaxroiZiWhc25d",
  "key27": "5XEgVHqBpfQzYgeXq6vfgGgxj887LJyuTpjyFNJ2oBhLKweyPY5VWRFhkYwrwqmaGnjYZxxmjEeVuYre948Hkoen",
  "key28": "4dBY5jpd4nWSdL8dYvDjvmnPLrKmswrbyscF77DVSM7SFrQq3KSXQZJzLbkqhZLNwjqkBxTzqXy2i24fEWxLDAWE",
  "key29": "2PFsR2GQ4SZJQ9EtncPU6QmdjsW3rLhTkuKaGHsU4tHEPKtoahcBGyHn483VfwHHRg6WMwH1GWhUszV3w4DfRQ1z",
  "key30": "4FUeurjaQruseoeFb9HzVwk3QLLCC2yrPtjfgj25drxEsmcFjpAyFsgVUZkh3SJZeCXCHpcqaGKXqM2fDNx9ZaEU",
  "key31": "25NxxZUvKQVefN4BdVeDURrxhGjSvQvfKMEhyC22SLBki9WDmXgYneG2t2joVV99MyfMFxXkQQV8kA3PrbUBNwEZ",
  "key32": "2HVXPMyGpvzo32kpXyg2esmAUZSCnmLVTBw6Efrt5dRUqMxwK7KbcipcqyN96xMDPm1dQX7bvomFecu14RC8zVEP",
  "key33": "4AFpJd6QRf7hgpLZdM8NTeZ3XsiQbNfYARNen57ReB6oL33chxZENscHuaBxvgwa9TXMYbou5Tk9XFnctDBBoF5J",
  "key34": "TKxNj4fXThF76S2RQjFYhyVpgwhZBNqQ4nK4r7z3FenQQkQnsRo6m4SG267bsuzqar9o4eeos2wTP6USzFcVXfs",
  "key35": "7o58FvoNsD7GKK8yDGjFSVyQDBwZCxh5mEG898w1dMyGStweWLM8uDTt4SZFYoVmkDwboeRfHqdEhx9gn7mhWSw",
  "key36": "MdWA1ChvZ3XrRqSaunCasFzcbt75ffYmZRSxB91txjZr19NWd2Mp7cDM1nua3nHhHK9jpinReYWUfTc8FtvVPBv",
  "key37": "T72mpzWYsZHMwB3Dx4N7aVynRJSYmHbXtgrby2HAhAfhWcmY1oRknkf32LJiRFdc18nK4wTRZzBDn4ua9Fk5sbm",
  "key38": "2X5t9jjWBmAwHw3d2ErSzxUBp7etC1hsqUKwnsoM64VJuWprMjPdMeY38wooyhTHNt6qSjW5FgvcfCuijghTf51z",
  "key39": "8AwH2ssXpTUbZEeKGWpd5mRjpk5CAHnQig7wUEjxeTtZNVxE5cfkMUqHr5fpVZmnZ8DJ1TtGFnQf29aBYjW9ay7",
  "key40": "cL62fHDu3WNzHbJzhDULmvRGHP1Vc8GyYDnf4ZnFPLKwF5Xfx8qQ7ck4YaNa9Ns2gxWAnprJvGioN282RgpjmZJ"
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
