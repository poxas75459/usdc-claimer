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
    "UsHg6tgib8RX4veKwfrCbXyLubmfLAdy1av5RWQWeFam3ZcMvSWXkMiGQb7KmeFwn4TAXY2fYX51nKzWKAVMuTH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YLHqbX5WuMipeqR4wPcAyYoQjavCiTxpPxwtQ4DmZGRhD3Sj4HEb9xsz1VGcYNeXvLFoi7uVi7Dag1jBXvuH7dZ",
  "key1": "2qCaiYG4ZgDoTohuWQTArwsNiSdQBes6Va3bFtNSfAcw3onXhJpxQkAqyT9WwfqB8qRRnDcpzZ51dEhv93MmPL1N",
  "key2": "44jL9jNrEwA1SMmg1Th65vsTEQSFG7fQWjfrgw65hWTAQmmnLXstMmrBVyws5j8jECWr4tToaAkP5VeoNg1wQS57",
  "key3": "27KHgfw5ewbVL85jZa4ArU2VNnYJCJAgfonq5bPRGw8EPAjejydNQjDocwG2GMr76At65JrEnKaRXuTWtabVc6Hx",
  "key4": "3fNo8Ntv1aEgEqB86rPA25XeLHfBc3Jqkjo7DjaQMo2yJd3cz6DdAuehx1tVV4nSnqaLb7Nkvhp32VCyi2yYyYB7",
  "key5": "4d3bWeKpGfChe1jQWf1KE79MGoEMwQEsEo2YFFfQVH9wsvCcWKbcC1tufZNvPcLKUpBkqZYEz1aMz39bBCUtDuJC",
  "key6": "4duDEBBrDjLfU4d6hkKUHDTV9SYRNNsKa96SpzsBVu3ohLrfft7kzCS5KZsyHXmi2wF6TxcAeQxco4wDzeU1GFoL",
  "key7": "4qXnM5BAaDwoVY8u2Hpo8HQsFZ1SkadCKFkxCLRntjSbNJJzisx1AwRQiRh3JWccYaF8r9FTUoESKZMRQemfL1b8",
  "key8": "43VGpgP1LtL3HMuuFtLhGTyzAsJrCzVJbcydijXF56UY6CTooevN61t1RGiVQYtcveTnLp5ydi3MSpK167HQFeH9",
  "key9": "5NWmFU8w5GWHVMPgvfXUJyC1zjZi4HRqaWeJ15PtzB7hvLrLa6hFE2RhfAYGar6ieAawbwggzzo1YNW5fNQZksyq",
  "key10": "4msYJ44n2cyFMuHosBpDVNjYLrFoeQVK4xB1YH9mYCrdveEpv8E1wV1KTrDb8YaVxj7cfnjAk7SCf9McoohyQao8",
  "key11": "2fDpiEWtCyW7kgNhnLzRx2jaFHF9KicLYu7Nn61CxouSxBC5q34oow7NfJNGLoRXLaLjzXfEmTVgfpDagxgX8GjZ",
  "key12": "UxTkF6cwMpoaEDEDhkNKa3bkF7Z5m54oLseyPyckrWDj4vVbsntE3oevk6aHTfLVMVZAMLAzJHYqL2WMukM2ioP",
  "key13": "b6wVdGTKpxieesQa5Wi6CBsaoEWFeKTGUynCvr1yg33ajZHgNpzuSSCBKfHdWLJF3Ejo1uGzoUP8BygCjdCGmjv",
  "key14": "32KEqE2oXfBCjYHJm6xra8DLJTDjtBCYeCTsTjje9UFFd2igcpnomx7e8yMedT9o6iztidoiBnWQohkmUi2vSXGE",
  "key15": "5j2Qtq199qAdu8PFHuBxupPKBmWkEB7Mey5Y84Lg6k8Q1ixLmmVums48eQJQqnnLtRJxbpDxDx2Tu8PokxHZnA1w",
  "key16": "5vzYQNEFedpArURUHptfvi9pbpyrGyoy6zCdXN1zT53nU678GEzJ3yqL97f67XAQLndqyRvsn7GdCyBn7Do18Z87",
  "key17": "2tS32hWApgcmo9nMMUmyQ6yKbG7pjGNirx4AvxfRtj3osKcoCp6wU8RZX8eXBJJJRQ9dKfEi5eEJ1UMsSwu8kEua",
  "key18": "vCgYrt8AgBywXYCkKcTRWrA7Vo8YNEgJVG33JDzZPjRvhKTKxL8z6wrXN1CZ47Lhw8Th1uXTQHf71oQQ8YnE5yJ",
  "key19": "2crYhz9PzZF3MG5mZG7NT2tu5UtvkwRBZx7FSM7NeCVz55Gx52ufWchob8yF49KZZ4WvJDG75pP4UpsfxYhqj17i",
  "key20": "2BxiUL22hB278E7ZbQoQ8fEcezmvAbHV2hHqKxxRHm8o8ZZC5KLLhuMAJJq2H2XH4XZmpEEh3uNyvxUBrBZ2vkie",
  "key21": "3J7Rz3FnWo3mT9fGoq2KFU1ZSrYPwyxmZM1dBfrCfTy3Swcz17qhVeAYW4ZuRNXSiX4nq2UPq2LZouC8bQytxCEa",
  "key22": "3n3UymDkxzdvewhuzsyJotiDH4HhookMSvbFdbH65kh2jFCVaimmJRMs7wcdG4XVVJC9mP7Gx3bdtzmNcT12XuYh",
  "key23": "Vc5Rb5xB6Ar653y3D3JCGKBoZR6BzhV4fjxSHyqHJ18oHQ5t1aWZZ9ZrE3dadkE53SGnR43bFYjzdzqeyXbRekW",
  "key24": "4CRRusSyPbbaCTjsDoDUKSTrsFBPpt8Rgx2xFu3j3jttRqE5o3D9sdhpkP7RjXFousEEzqJvLWYLTtH5tgFCPvms",
  "key25": "598rR9bbN3kkcAVJBXURszvH2tZYD3ARqD3aKBRPVNXcHgTGPnwDCr4gwzqxWMzujMxywweftbZYV59mX5jKKdqP",
  "key26": "3ebrPQMuyBn177b1ua3QEnFDBcpY62qVAKAQRovZQWM1aR9DKGyZLhzZumanGGDy7gpQmSZMxGGmL9EQ4DcHCSV1",
  "key27": "4Gva5EvJ2cx5LtwW6iVs7UVgMvJRKd2Nsa9cfsJk5E8KDKmKctqvaYrWzcXa7MkMDaeGD28cp4jvzRigQoRxSJiE",
  "key28": "3syXeWjXuZLTZ4pzUgsgpWvT57ingtcsCrtLa78NjsXZQkZeWpLJaWe4FdSrnLzBnxvLtk2THDLgm6TXu8EaxbR1",
  "key29": "2iAuCdNRGuvFGqyTknKgEa87xjZrTbscDo4ndVhqKg1bxPSC1GJ7V6qjS2Wm7ggiMDHhzFKe1cXk7SpYaJcXFWUf",
  "key30": "47a3ze2tQz5rn55WSrBgBx73e6tHFFuzPNfkprB7RVdDeQnxxZ2rvSWpBvSYbDZ3nu1Tzqh9s8B7tZQZRVrXcZqJ",
  "key31": "4xjLNh5obL81BWja1VnkcL1u5o5TkzurN8MUzSCUWUN3p5jCgo7ifGD9K5pmhvjMvDs11tchy39v8tHwy6nc5W5V",
  "key32": "mWXYcKoYq78hXg5GpeQ3xBsvydhxGDg65xe2ta57K9WZCrVmrmmQmMZc9oBDs8BK5cfvj82Q6UGhBNBJVTV8rKK",
  "key33": "2sFQ82ezfQyNytyDZJQc6TfnJRx9vgt7q1MHZgbQzkRxpvdCnUNv6fvmTvYitkMQsRBMEgpcWfS8oivo8MELjPmi",
  "key34": "3P8JMbuwCvAZVXSHFXHK4XsmpwUoCGNheitXW3XNEVA2q2rBED9Lb55sAR95P949Bnj3rrWLHPx7D11uTXSXyxv8",
  "key35": "4B9WfoW4BwguKJ9cQ9m4ZKgiAFHrb3GwJccyxUR88amr6QiCQppawH7ozSggU1W1vcBYCavGcUSYte6i2cu9Yac7",
  "key36": "LBbVMozArobpYxxK5jPzwBcuSnNWZvCvhgS8Kvg4ukW3hX4bvTDFfdHjftxsDLS8E2Qg8yrUn8VD3moDLo37CSx",
  "key37": "4aNTWRAR3Yj2z4yM9ntphaH1UVCYPxNPKnHghvtoyJPi4KjdL4J8jQzooSv7NF9HhJBLX7wBL2V9PRZbiUTWvdQi",
  "key38": "26XXC9wx9kw3wmAGnJzaFyfDswdnXdPaE37hkTTRhgwj1JwweRZBqnj96sW6ReAZXW2xKuLqxsGzMtWFimMSi9k5",
  "key39": "3vyLS3MDZy1iAgMNJauyrqeAwoHsSYw3MNQSRJUSVD1twgGfq8WueUw66ZSJSQuBSJn5drd6G8yowxT3b7QQXdzD",
  "key40": "2VqLaaYikWWBwSWKZC2eg4BBNR7qQKzA2AQ1rYMokGcmNHoWsGYoef9gDedSh4ZWcDUAJx2m6Gn7XLBHvTRLBax9",
  "key41": "4cQSCehciiHoHoY7xCW5U1hpzY6toBBTZjCq7VXYXf2iEkcVEo2uA1mS2ZgEvcr8jjbiA7SUgRN1wZv2gh2viwxW"
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
