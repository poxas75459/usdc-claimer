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
    "22Fos9V4LmA3NiPQNPf9ixVWoyke3dRWwQTabipamsNitgExx2jKKECjCaBGKcst92wsYRbS4z2M2dRzY2dt4KZK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ceN3auHKzZXPquVXqWz8id9c9rEzSJyY6i4yPyfbP4atrobZ3LcJ9Tr3YKQjDPm3pGj9DZNsGohVa2rtqWJCeEs",
  "key1": "5k1Kt7fK9NQ9fHwM6jjQbh17qEsDhMQxYMHwYkQst9btHsitqs7fTzTBrMkvcBsq2vU1D27SCGAHxGwz9MULLZWW",
  "key2": "3PBmHhvfSWzyyg6NpCy8XPNprpi9PUbTEskDKQkphowTZemRNEWgXdV7NRRUqW3wUEosagXx1fWxNpLzPC9DBo6E",
  "key3": "3a3NVw1R3GvzgCcjb3em1rnfRwPgCgq7hxdyEWN67Zcky1gTnr2KYCYq416EC5BDfHeLBHnkH8rCK2DoqkqJE1AD",
  "key4": "5UzEDpRSsSdbrinvE6VSJPZWsAwsS7LHPK3gWQpGK2fWApUv19RTQybhyGLip8U9KjDoe23hkMpysyrXmudVFNJn",
  "key5": "3hpMuDvKpWZocVfDVLvBDHAcVZDdy9U23t1fEc61GUvXZBxN4sHdHRiL6C9jUbkotrUo5PkLkR8C4xeX46FFZd1d",
  "key6": "4ntMeBpi2EoxF5prv3aCyeaXHUd96nf7w3AvjgxJBpZoxswxj57v9M6zwhear8hPBB9GBqMF3vF3QS6UGa72MGbG",
  "key7": "4s8ToM8k9E4TYQu7ktBg3nHEfDnHDmjuDZYkKuCYgPTQrCCrrUwnSXX89V62fwW8BwTkhtkS1cH7xyG6KSVghAa8",
  "key8": "3yw8oidCYAzf6nYQMFDzKxwiKYWoPRM33sRR81i6mJgdKuWjmkzN6aGRh9qwjD983tzTMHxYbk1mzhRr9A1Z9KKz",
  "key9": "3LBK6vCRFvbLRcsmfx659xDdjzvWxtywB3xRjUDsnTVWHhyrrimoqtNWX72dLWbU1sy161hTbR2ohb7iY8JYuAX6",
  "key10": "57Whu6CdsDcxaCUGJ5LWyhNZW7gyhGhvspeXupatcvVpb5m7u447rYDd7uMCcVx7ShAQZMwx4QR61FfchuL4QAYS",
  "key11": "Rr7ptgDrpiuhoScjg8r9LwtXgMPeznPCZejmRzAn9jBQnVdUdhYehQ3XvUfQmEQRmiF56mpkeAv7ubvtMjfTeci",
  "key12": "5dLDS8dQscCFEuho8Bd6BmnQA4xCTvuherYB4PmdJWvekTkiuB4KRznb2Xxc339tCxT6DJHEiC4E24z2fnwTow9F",
  "key13": "5e8ZNpMhjWN9LZG15twn1zAYsNZ9zQudot1WWeGH4CYP8rerKsdxY2mWgGDBfuvQGijgYr9pdoZ49W5dkwPiqSz4",
  "key14": "5Q5WpqQJHzk6MGRY54ZgeXRCJS5wazrn77VrG93dqJyWpNC3BGgfumNcSdfmJNxqrFokQLD5YqtfEyKv3uvJ48q7",
  "key15": "3VHJA2YUc9e1muLsCxBWyqcgS6UL2fhNgWm3TB2MNewvNL2tGa3UTNivnXbqa1xJMYHyCq3XCcfoLgMkPtan19oX",
  "key16": "5aJeR1k8Zzfd8v1r5etGMPYX8nwdMG1WjNCRwZksfbctRMFxrScczGR3RBUux8TW5JLAhMYNxFpxmKK1K6p7D3iv",
  "key17": "4bh9G8bBGMJd8SSq9pvUjnu361evJvURXx6g5Riy6ZbvrnnHAddZHwSjcB3gQX6xaV8Z7e4RkmZ4jtKgxkR3g3vH",
  "key18": "4vDPAx7iHUWCshweSnLYEob7o6Die4FdS5mNL42PtqD7RanoJRCyP2UwGMZjJGA2EGY5sRtYZtCNrbr88sK6mrkC",
  "key19": "5N65gwsRqUHPfFZfn1uUh5guxmFeW5RGuiqJiDG7St9yScF5TM9asPJ18Axa5CV2zjFUNxhfgaqT6YqiaCeU5j6L",
  "key20": "3y6nB3qsNqgHMng2uZrL4RJj1xp4yqQErqzCLdgHySfCQYS7xev2nMyoU19ZfaypFwT2Qk2S4XmDQ4BHfW4CGKgo",
  "key21": "NUe1zNCL59LpReLk4jXjNgQr2yZdTkuzSoRdAZ5z8mHCUhtUnWDW3sHXpx1P9nwuixdcqpuo7QemmkiRUpCFqgV",
  "key22": "3wxFTjfbsjWGZxTqCRxioq9VEXehyHhJiGg9NFjoahrnyoZtQgdDqcKwqQmeL4DQyQKs2sSZFJAxD4WXQrdffxLN",
  "key23": "5nzapELCTBfMNvtCSYkyp4dxyQDJvoBrNEERaZicpnM89UfGKjLFJMjjf1Xy5VVHoiKzgRgjUYwYiUKpBctNDSAY",
  "key24": "6njg5ibB7CwJxiVheJGAdjKVvmerDzKN5b4tJViX2M4Brzjy8gkJjXoxJt85w13Juxw7MQkyt6CorZY6pt41uBK",
  "key25": "2qh6CTKb7FKDT8AWS7zVyyD1wS8P3tJV7N3KkLNvPTxDvN5G5jbYAnGdps16pczxH28scPNGdNS1LUYhtZ1jDk7G",
  "key26": "2n1h39ZTFw6djeYCt63ENmvFMvAvXjM2xN7y9XRcj2sYxd3azwicfDVtnwoDARvZ1wqo4aR52qb7QC4KBdghnXRq",
  "key27": "HhB9CtTvt8PUgkSUkC9GFUVfMRoG9vYV5csbkrVhSFFGecdFuqdArikDsPp8RGY35kfzM89JUJ5MhjhNwrTGeA7",
  "key28": "c84xMfmndBBeduSEf5MgSETTpB7EmhVnDh6WzqJjrGYaSLsJNDdiyGVS2vLZqCF9rbBfS7SGyDg8zjE9Q5qyWK9",
  "key29": "PNaeutJQXnPbM14eyfqNwZo2WcXJs1BwuZGYTdu3gDyfmyEP4DoJYhjTgq97gAVgMrxYRA1j3nUkw7myZogjCcQ",
  "key30": "5f7YR68sbLswMwgqmhmtRJEmQsybGbj65raY5KLVSsKVPkMHNgR1sN1QH26YtgvBqUgrXRTu9B5193ZGgi661sZW",
  "key31": "4d43HYv3kBUwbQExxtv6PUqrXBRFGnyGbG9d7wmLoTEk36tJSAFphqKh2hbuNy9mq7CYg2bB9LQCQVu4sKnRfJe2",
  "key32": "2TXEDBWDjALoRuUPLm9cmUzi5kJG7axP627NnkPhBjd2VNq8s1D6N58hDuichi8SL6LrfAU1qZfFKQ9BkKrVFw8L",
  "key33": "66QfyePCBQoCJU4VefcLRi7RovccnbMnPnGeBRttZRMLY3tRuuqvmRM1S4MTVVB5jydyp6qKuFhGqjLmhiFbNb6U",
  "key34": "3NvisKzzFqhwAcHGo3z2SB71W2276thc84d6uMWMsoKsJ2Z1QviDErmuwd6fdv3wkmFrQ9RpnCNtHU4zsLeEmTTq",
  "key35": "3MCT49V3Kze5J2K9Nr829dJErNvvVvLS2tLJ7KKynPa5LV8NfauLsdX5AYG5EmTjH4yF5CAa2W91VDi5vU78Hkqb",
  "key36": "GwZ9vMx9CXgRSahTTkdE5V6Wfft3fUEBUaLKLiGrGXFwmqWi13TQdrr94zFmzUq86KTu9UmLWwykswGJLcxbKPZ",
  "key37": "3jE3vKo2sDYAyb5ju3FNgmgHPje5qVsQax4hti7WHfMuPNM3AEWeUA56KsrszvzsCgwtnjNy9y53A5XiHKBoLw3G",
  "key38": "5kBzFWzF7DCze1HKhVVupguX6i2FPyY8EEU88ydSe1hLsyJCaYvdK3pCsdzstsYL1KxtvvaX87ujH2akegQS3KLM",
  "key39": "3pYT7x2Vcs2xuHSD3QEzKkkQJsc3Y9UoxbvSRnLiaongwdXbhKi6Qxwuo4f3F6Y7V7kJ7wx16Nvfa2gJB4pmfXAX",
  "key40": "2YrwaT1pPG8KzNUo4F821uPQbQDbWWHGbyvyKDzCEQTQj8dGYgD1b3EyVfb5gkYF6CsHGd1XZ6GmsatwMpWZRBxk",
  "key41": "2j4ThqjYbeKMcE5TaTrh9csge9LSkq7XsuDQhGYGM5egyZTEhhN2USQkqH4sZzTWEBnK4UGNFNzHjRviVLzBnk7S",
  "key42": "48hivawxaE53aXnA3oc8pFUcdvDKvaxQ8y4684CvBexAneEbnXzx94L3dGM31S5cgTX987JerSJW2ZgkMsf14ZxU",
  "key43": "2p8noGzD8mJRGLCDQLXHtAYAqtFFjxDgyHhMKLWDEwyJKPej7FiuGE1otkb6MUzsevrPhobiAUmieDv1TETVf8Tm",
  "key44": "36DRxqKhxTXbGvpHDzKLbYLTYATVvknc4VBPRkzdJCWbhjkpm9zjNVGSEyxTo4JYxZoWwdTGCp5fb754gE4ixAZR",
  "key45": "fTjyMTxPWS5imwbwcuQB2SsrfqfsasaW5ojkmFCnXpRtRMFAQbCftDBZbVGejyh8CN6zoccNdVYj54rzf5rnmqC",
  "key46": "663WVa8o4GkyEQTwrcytsWwkthuaqxKezVQRVvkW8XXbKkqPDysiNRfvjcGMrsm6hdbLjpty9AScPBd4k3wmc5DT"
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
