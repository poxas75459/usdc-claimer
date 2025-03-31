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
    "5T4cbyU9ftZYafBV3zncfjqKDD1KCRVHoKe5phTBXvG5Q6M8nSa1ivg8phVKuBehQgvtSNEjjbsarwaUZTsJJiDq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3umB4yuHp5V3SBqrFddgzLPZXtcbxAXU9BTQsWJdw3qVe5HXyLFFM58B3vKNJQpqAPtfcQi9Gq6gYahSQruV11xg",
  "key1": "5wtxwRjvPVQBNnUpGog7ecMe2iUEtXqJFDxz1dfbRp4H83JD9j4jPRTJjvKyx3mWWESEWzZJyUH2WDF4iuJgMUve",
  "key2": "4izPAJVGo3qgbrpZPvNSNtFBwqf53zcEh1Ap3Jfo77dEZnGn6ydwiSjrfAv1iJ3xpSjF9oxBxxi5QbYmFZ4KwidS",
  "key3": "4j9BGY9ZRzkNENHKiiLjcxs3rbyv3Xxirfc9gYhHapen4unYjsBQ59zQ22URxMhVsyZXg1FJDK8NtkByiVM2sS9F",
  "key4": "rosg9mp563EU3AJXcpbCNKFcwSUW1HUvG1WiR4u8VFqC6SAyvDLsVH94U8Gr1GbiifioP2eJhFhxWUwo42bkHXD",
  "key5": "4xdyLwxv5dRVaBij91K9WwM3KHZeEfad4m9rX8E7mxmWxv2oAipyxUHFATEdZHjdgBDRUFQxdzhfmTMHzGe1E6hr",
  "key6": "hbTSPSrq8aegYBTT5wiVVuWyzZ79FpQay7rgs1W5WaR8sJMWiH4rwcZAYS5Fb8f537rTm1wXrYeuPf449kPfQ69",
  "key7": "2L2xwg1pp2n2KEpdN9KY16JHEPGGPmnXYSKZ31DpbWYrjnPxUZ5umnWfMRvFxb4rxzqberDBi21tYdUC19N8frj6",
  "key8": "zv6oVVTShUFyTbo7y7pF6chbaz62Q1S6vqY92pwLbhuHanee2fZciGcrbvZxQd12EEJwKt9z77aNT8RXhoKW4jK",
  "key9": "55omjduPN8xUcFGvpw5Lk4i9qZExfvJkYRssZgKPMB1UxvBuTeTuUtxtwD5K8CQyY38RDH3enCM2pA7xt9j5WJA8",
  "key10": "4eAZ39HTt3g8p8ETbiUHvHVx2qCrowZivrtY6ZCppP9CfiFxLJKW2RrhBJPqNGGTrnDhQzKBmrwGke6uutnpFePw",
  "key11": "4y2zZYru7HYRFtY5BujNfAwE1GV21rE3Uc2NKWPoVRHpGqtFNEyEfgCa9hBUTHFR9eXGPbtMMk4NaxA8GzAvTVqT",
  "key12": "2VvuydurnmJNuwYokAedV1xwfDZsTwvUyz9B6yrEMWPCdWjwhD5j6owxQWueYNjzG6M53g6aLx5bxeoKm5EZ7Nh6",
  "key13": "36TPsHgpY2frQZdmiFKXVsWNUxxH8zrMyrNrTB6D41gc4UrkgmxnKMz8qi3SF3mjyYGhHmYmLWS7n2FA4h9z2E55",
  "key14": "JK1LDWhrMbGk3q79vjKpVagaS2XYK2c8vA69MkT9nkQDC8xhCfMAvmFegifE4J9CA1mXzQHufVkke7dLExBiTxn",
  "key15": "4PbBPMncmab9oJGBq3Ba8PxgkzaVQf2rkxgMaWnedcwk4mRakyCgRbZ32iYUe8t4q3NKQWWaLQqWpfLGJuKvzCfu",
  "key16": "5RgUnXUpF5hPNC29Czi8EDfbx1eMkhxrdkQYiUheui1aLSTXt6Lf7iQwTEQgW2CDLoSnY2adGcq5Mw61FoLezLAi",
  "key17": "66HY63AsJFvsFUWEDVQkmwZdUm8kAU1zziXayKBAqv48KwpzRffCbF2ykG6xz9QaokvZ9oBxxTsia9WzrwSthuew",
  "key18": "4WsudGoc5K8J7p5MD923oAejmN1Hdj9tzKXtbzTjk3XgQqMqJPEJHmPVJLhaLwqmA8NxQjASgDGJgbcgDKFwCoaD",
  "key19": "2XfxXzJ7qPfgDaR64QEqqnP692AYaB8mGLz4pJbBeMb9WGDDmxQ7oRHjeQ763bPeHbSh5NnAmp5HUWNDXPYyVv4S",
  "key20": "2mWsZ22SFxEZw8t12RBVeTQDLBm9fgGSigHA2YmLbtmy9nJEfvudSdQ2t7BVuv72NpBAm9k5tE798pAyJ8w9PFdB",
  "key21": "5HiPvGYwdevcHpk9EgrWUatTfz5WDpLCPLXDBCuJ1NLhAMWaSYn7NrW8LcFWstKEDA7idq981QJLrvnLtGvZCigb",
  "key22": "2AMM9RfEVHoTWSffLGqfHUoWJmBR5RouYdWvqg4Tavzs9mQfNbErZXpuWWbv258NDNBoZKhmEKKRrSbvtze9F2C2",
  "key23": "2rnbhSLcbo2HF44UXCaNWzhg15byWwYm6kfqchxXA4nQSXYRM77aoh4qqi2qFpogLugaHm7Auf2snTf6d2gQxLHp",
  "key24": "557HQm3zXoUAVFG7kddCSRGAbM9ptzK8zEzxr378yBCyKA5U5kGiEXLNE8J2zUd65AdhbRE8AoDY89Vhs9nfuXKW",
  "key25": "d3m7mnsTnPvtVPqD1JaXXm1hMguVokqRp32EcW1PXN9kTu6L7DhTGPt7XSzE3XTo1ZTm8G7cgTi12RJouia3wFN",
  "key26": "j5ay9vXpSh1Q9WFBEgvRaB2TKu12ogzTJjf8u8NKDQw1j58UjWj8MSbHXJGd83ngGxEGxD1jaswYj8fyib2w8Sz",
  "key27": "3oPktWhwvoT8zrpwEt3jHgxEpadXTpSiveEtyeVQ3DEa67uhkaNrUbFNqerEgkBnuV2AS55K5x1DYkQ2KqPXiZV2",
  "key28": "42McJi6cgTCGQaBJoxCet637ynJGbAzTFgepcvrVzXPxBFHGESAzhMoEi9F2djTZbqz8NZSrUGhdYoderQzDE85d",
  "key29": "vmVcwxFYyNw6ciCtrfveZnReSy2LVuquFPdCqZsak1wvvV3RHKMiBvDYzDaUwQs8M9xN2xmVn4MLKmVspdESBsf",
  "key30": "3BTz11hMfJNARzJ4sNvmn5jbHEL75Yg86m327zKvAVmJXcY9KZBkHW5VMj35kiF2DSGmnv8fjj2AXFbsv6B8V2qo",
  "key31": "3HGZ9dZLRQefd4HE5uETDNRfDz376WFBq4aarqobZ4LJoHVFxgwYx6rGBHPtSfbrNmWZrsieBHApLgL29WJD6mte",
  "key32": "5gcyE2Y5SuUT858hXACMy9Xwix6Bemyxpn2zbYei7ZZnuJR4SLACoqG891ovFS2C7b95VWgDxou8Yg76H5UfBbq5",
  "key33": "5Asi7dkDCjDG11TLDbSEK8fUQ4UPjC488LJApu3USc69M6siKtExeHNAYJE9puvrg4Z61C3gbRh4LHSHt7WjFde4",
  "key34": "5GDWR2oP8PUnBodGLPFVKaH3diWSfLPqoBXjEgZJSMhTRcTU2VstCyPRVsS9xn78BoYsR1FXkkSvgPVkbA4XNRnp",
  "key35": "wYmtNV4iuk4tTqLmTG5Urosb6SBBEKP27v5RBLuinmB2Eqnn7tyrgUy5YC7CAkyEBvVEb5j5XDiDJkerrbFFWfw",
  "key36": "2hyKCMnEyJQpANZJPFeMHJ4mkKMdeAvyiVRcYRBaSUAoUa3fL5mgF7FscVjs4qqCp1B2oqaWF4jQh3VMgwUm31Av",
  "key37": "66qWqJ9Pivd6vyHsq6KFqGw9rQ1RGaQmVjjCeWs7w7Rx4KNj5fpF4sGWh2Ya3mdBDSthoLDuRMQwqmPqX54uhT4h",
  "key38": "5QNg8GJ9NJ2MqHb2yeNPK6zzeuqiNJyzdCpJuJ1YhbQ85ZAcsWxduuMnyTkTTgUu8T49KFG3Y8s5STiPfL3g3G8E",
  "key39": "3NLgSegxapQdNKXFUs2ecVW72jaR7Nsrn1jP2yPJ7jpXTwL1aeBsuaovaed3i3AGUvP3KdhcDjJxKvqsoZBo2Eby",
  "key40": "5yTX3shdhUgYawq5eGenfN3nysaUccNHZnK8SPEEj128mTFtzQZrJZ99KEaSgx8NzhqEW1FRZD1ob3CZeKtB7o34",
  "key41": "2rPGn6ujfQcyEzVs9PJnfku8M6fMqBPWLdKETf1y783x4FWPC7WnYvkRsAhKRBirWsQvszv7ZLEZGEqPEp4jCNY",
  "key42": "mVZhr9pFJd2t345SxUTdJQNQ76j4qMW4TjY5Qht859LrMbBjFsjYtu5ik4mYtvSPw4JZ5J9n1ANrJRFgZs1t3UR",
  "key43": "2h5RWnej7oz6kNSUmJJUg3iz2BYgjLypqoNrNtDfrGw9VpMdCb1xVWTBFee1nvkzqkevAMjZAUR5MKCEecZYbyx2",
  "key44": "4yk4HqCqm8DbQ84REiWRdMAWFAzrsJ9P7EXSvCzEuK5fu1Z7pyRBTQe8eXWmNzmEeghbztnVq3QhMzjvjaaU76fr",
  "key45": "3BYHzvo7vemjde61PC1eLpRui17Uu1cVH9jLau6dny5KhbHGUtBbBM6ujkTNwJAFHbJcFaNh75iHRNmrgEjrKJfh",
  "key46": "2f9tGf1Zq7XaKg5S5N2GUJPZAivCgkKH1yaPEv71B73jCtAUsPVKqbFd9ZbRA9CcPu3haMkTLSg18FV4HH3Qn9Xa",
  "key47": "QBA5HVoRzxMHmyfNhceo3HGMWnYT2m7ko8Az15FHRmzCk5Tba5kegy8wPycUqS6t86DHTDfSMLqxSrvmAdMcKWf",
  "key48": "4nw8j4DQqGbrHChr3wu8zuTP7fVt4EPRo1AfbKr7cgHX7YytCXWG7jmc3tNK5fHTuYdzdPDEGpXY231PDJWarjLy"
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
