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
    "628AvrruqHfdcHgcA4ry8nq11faqCtG7QB6s5nNfi8APer7gjAsBkdG7PV3eMzak9iCNvmhp829KKp6coka1b1E5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fu1zxYtL2jCcoNoTnkyReivENv1pXsJQLncWEGrq3ByyxERKe3nUYXgG86X7WkkwXVrV76HeMhizL5wXFo4XpUC",
  "key1": "32S2LhzgPoskdmhEHvGMpiXwULU2AB73XiF16L48ngbWhKfaUy5XJB14Yt1t8ZV7BWqpSrGw64uqmx7aSAw4HtrX",
  "key2": "dacAKS42AaP95mCd21vaovPhV7HsToPzGftPUfnvnse7zzrLZBu7mVHv6h4m4gyeMb7qvtTKF2VgXQCHbZnk7zo",
  "key3": "4k8uuecrsHhUZc3kXCaRSRW49ScQ67cx7Xtbr6jKLwoarhQ4Zky4NdK7x7yQEPNTqQnho11QWGcNN6q1u4FPStUS",
  "key4": "3t6kMU3oCzkMiD8FvTHhtci6ytQvo2h7CpLANJf9C4drSP1TdAmhXinLiNKBPGbmpkLDFjm1kDWU92xhHUTqNxBo",
  "key5": "67YpapFpZQirdJKf1jZr1YEtz2Wf4jMGvH5xx3NmTCveE6WeimS4j8jST6cS6HbjJ6NkwGCbiGzxzYTCSebnVVye",
  "key6": "4a2t4E53eiomyds5Tdsxr4SdyPGJYb7QEMwCUa5nm4fY2Ci1UzVmuxCz321icRBKTeieV7SQmAVzpYvpepsCGYwP",
  "key7": "3PVd3aMmRiYt5xq14Pb8bcii5tsaYYKEyaPYdgybvsGUqbPGrJNpLzVY9vY88FHCDx2NAr9NMwezsCk5dDfXkCUd",
  "key8": "QeE7HspGE71Mj1eYvN9fAZa5s4w7gvASyByByEbaxm7iuK9LvEKBzkRKnVgQJBNCfiD6hcXuTssKMthgFQeyRif",
  "key9": "RPBhqtZwyjm52VFUfyPuxNmL8y2tWqXjqPoV6jUcYQjNHhx8H5bTJ6b2sybTi12hK1KtZwQiF4T9KVEh5krZTuM",
  "key10": "4Se3jurWbfkUhF7mgFuvqbekrb3kQkjyiGg1FbV8oZ5yH9sGfzZUXJtpP7SXaEUuptdS27nuZ7ySRztbDBdZ79S8",
  "key11": "xHbEGc8Yy8yqb7b7Txn3XPZgBCo7S1rzgNczZLqywxYjCSvsicx92x58vAyXNrLEn8Yav78UATtgFAfeZizzPBQ",
  "key12": "1AozDS3mKicGFaLToauriWrz6uWdhZQordTxVKTNb83PXAbTCCFvVrBLhheNaPNgCyPDLiZ7tKwPriP1QJDv3cC",
  "key13": "4wFAZbU9a74trNzZM5YzUWvjyQSyyeaPCoBQvsDKp3FrJhj3x4wLWCLyyWzw1hrA7gztoQ7hNJgzuXVhHZzNdf4u",
  "key14": "2swgji2Y9xpR6LHWjyUokh9QfwzG58mcS39dhp9Z4hLRyXJEM4zYEs1sBX2z8FiT87sKyNuxQrHYoAtR2R7NiGYu",
  "key15": "4DoogBXmbTtL2otj3U1594isMExBKoaM58Hyw1US9uCLr1NJQApLmZ569pTnWxKGHkQeSGmsCUQ7WF8NfWeEc5ND",
  "key16": "3JR8EQtkvb2WMjhvoM9LrSFmiryyBRRjqyaHZcTM1kbeBHxstNSxBUbZCRmzauwHqW3f47g2F6TdCk6VWy4TTwej",
  "key17": "GtGFME3eAezw3UnCkXRUZpmzEzZUBw3fU2MT9xzmeDazEZVMmNzL1bzqvNDbHVxoEd6A373gJVZFJpFR6A9UNwp",
  "key18": "uJVPy7hi5v1BK3AhtbWPFUHzUmUhvmebAkqFZeBcCDH9P2ohx4bQZLWYxEMW2KczCb5Q3Usc4Ba5qVaAKDFti55",
  "key19": "3kc2ayAj5Snf9W22SZp51LdAgfyAftVpKRHVRJbXrL1hGghjVUVQZ5h6fdFLVQ4pr4N4cBWWPvY8vXDu9BoZhUki",
  "key20": "2mEkhA1fA7M5s2eoypm7SBkW4xsTZUTFgmUaPsPiCV3mAi4vFUH2qFqHUtXu57NthYi4sVQyFKuZ1THpNfSV8jQF",
  "key21": "Y3GbCbMnP92KuxvkkN2WS2hxrAajbthcaBGFky6vEGFosAoAuxXVoUweVEjtzqvYek6gwZo3zFnweLva7wmsamo",
  "key22": "5HPSRvCEs3nKhPji7g1ceRh6vVeCpVYmQTB1d5VHStb3mMxZGAxcCaBHeghRJGbXJHXNys9JYzpuhQz33bV6wPFZ",
  "key23": "5ASbS8zQNt3foZ6acvHYeNfYg6oM3WdxXunzUhzpD83tk158ustFUZwFQrrGqPP8CaHBKoSorX4Awc8dNKyzFJPL",
  "key24": "G1HWkLxqKCNL13BSaMx4ceDxAACx4W3VWPxw5UWxboRG4VnHfrQQf7m3Tip5FhxXDYfKtQjKieP2w3DxUf6weE7",
  "key25": "47sfUeWPeueXfnqiyh8gij91H7EnZNBrbacprDfMiz1rUkBMq1fxzosw7tSQBVE3GsE2f8Yd8j8DjDFeNDqAUYtt",
  "key26": "bjFgwnpPA4Q1srUZg5v5zVa4TiNKojn7uw1bEGpxsZp3oKWARzDRynsUTn1Qb7aJftvk9qzEqQchiqJN6hyV8hE",
  "key27": "3M2gGPgxRBohzJnEWKp4jW6Li6Y9dPuFXu1b4U6XnBj9oGpzYoWbDXAb8mCuGZ9nMygaPyrZeuB6huJQWRAkudEd",
  "key28": "3pTosxMVUKCjCBcgMbchrkrWfFZcazxeL9Bc53pLF5EaSsxC1vV2oh8ZgcvbXyyVoG3otHEs6VV2cbqDBwzYjhHL",
  "key29": "2M8RqD2J8cHn12kgwsy8fgVGzakquqKFYQ6T1bjKEARMF1KSvwicak4qwgkY6RR1xnnFhHTHhhGGX25MveTdPCVx",
  "key30": "2meyyrk5dyzykp4eGMQD6GBoejh3oagB1fdERtfJyjZPXaHBMuAyiMfXEFUkGc8Hkt39Wo1sk8oTSL1Mjyf9Ggoa",
  "key31": "SEGb8XkSw1deMF9UKBnyfFHChTohrB91KEem38jCtK2xBWuWuA1XicoPyJK9BQsUPNxYSxhqqQACPszdEpJuikv",
  "key32": "52BMEHjfaidS1365urzr2e3ZjEVpnk5hm3KNCZLP6W4B4keVYaXdKoPaBcN4wcbJzxRrSgKq965dB4ihdvjjxcSR",
  "key33": "51rCr9LFNzxbmRaBryDB8fndDkHnQ7jGatFv2Boi75cm49TPNBPEJb4enpjsYnTtA5WUvrvcnLRf9J7s84pUF5Wn",
  "key34": "4JmGbvbQZWaxikvjF2XWZPTPEUMmpYqhJVoGkdCBfhRBiWTUtNBxu1dgqNP4Dz6uCsVzt1VWjwsdUryBe3gf3MH3",
  "key35": "3cQVGqb1N7StLRwgdckoyDCcVVjARUa3CF2xC8HH91b3PFopZF5B2vpP3aHew3YEMyUBeDj8KkDLPpz3mkizjfcq",
  "key36": "5rCKK2byh3iJosGu9D5d9rCU8PGwhPkSbKCUKiiLRqeZYKXHNgRF6pUBuBCYyFyLk5GxCh2y8c2TEdiAb6yoGmwp",
  "key37": "ENXRWQmhG96KB3cZw4sawTLJR1cn2ZiggVH3eJutBquDf9CBakEB67RvMtbkTiiFMGxDLesgGrhekWn9gwkvuPa",
  "key38": "4ZHLHVrJbQrEXTr9PKBWG89wDSMEgeBTa5H3dFBrkmxwYLAjizzfiYWnV6BcQsM168aMaL7dUFt3QEcs6jiwRUMK",
  "key39": "273Zp8vnwS5ceoZUvVKiGi9XFtCZPgZtTBTVxbHiBwzrMukYciGPdHVcrrGZtjzPfkrd4kW69zDQSJ6xWNmwvAH8",
  "key40": "5cnmmNTpQQjMsmvfau6M7PemcB6Lsi7kkjfYxty4vtT5V7Hnu7bxgWaEs9C49ff5MUd6qfQUbGe428uP4aDgK3L7",
  "key41": "2oZsbipLnCLHZPwACsnT2Ws9UaRTWvDC9fCu92Ni82XmcWv719d1T5sP37b6STHMCMumcWMQiSgQLVNC3z34uBGj",
  "key42": "4Ua3y9z1HfySV9nvaybGNKxKbuUFCVRVuaahYdvSsLttvkg2JCvdhaEKn9tXhpVGTYYyuZ4AUBAT6GRr2efKdHiG"
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
