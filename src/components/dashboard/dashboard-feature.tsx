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
    "4BrY2g4jkvzKaD4Rzk29mac1NAFvJxQbSbfopzvjodXoxC5217LzSv6bTZBuoFjbXdqH7g6cK9TqsqSTGhW9rKJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wU6PoZ8xVRhecfzDeKz3D4ne9TTtVNEaWPLNHfCCMUKcPxZBGFb7GnU6TaAGJCfoWPZQUv9SwtnhZ8KxJd9QdYd",
  "key1": "3r3jQfFVmFbZTKgAvoqRWuHeYDrdgYnsUkLKemYvacdrJxMt466CgfBwaZTUer1zeBRQ7x2rEwcGJLWE55tc6oTy",
  "key2": "2udXx1wAUonXv7o2LuGFx6E1gym7Ax8oUhf7MGA6U7JYmqn6v8395VtW7h3wmJunuxBgj6BUo1mdApxTwfbdtSoX",
  "key3": "4XG8YFLiJABdXkT1ymzLw8insirVzrUTCZ2Ht458xq3vvvPxqB75TYcWi84cNRu5G8ARakafwGB1mTYi54MXVsEj",
  "key4": "3tCpNbdRJRyRqKdsN6AoJmmbzPNpTvEe9Gh7tPFQgs5tbCyk2iq57neS4gtKFYBqCUB6CDQUCBfmbXFdZq5dSuC",
  "key5": "5rQiJSGDA1vgdZDfAjXxwgYompMXMPV1HG9jKR9eutUHQABsaGt3wzQgDQnk1rEQkVwCyZEVP1zHB2ybZYZhJRc1",
  "key6": "56jP5gDg1j3SShvbKFEUzkjr43r1g9EWTgehJcrygoKS1vWFYp56W2C4v95YVV2UqL3N5UpyuRSsE9iR7iaskQxe",
  "key7": "23vfD5tHxVRr8MxT3Go4LdvMHmnKjogEFFT9TW5cutFZEZnGEfLmKAR75rKznaik9V7XaECeRzTGvdZLHCq1adWb",
  "key8": "2tNDgpgcFwYpWfh6PhLYPoWsCUCRLBmwB2jpjrMyL5QpKNjMTeB9Qwm89k3DTP685ahzsUZmHJWLAxqQNJDbKWX6",
  "key9": "4w5Ht3kWdgSL1iok7GcojpkaBSiNsHTiB1N9F7vRgRBk6H2LKdnW2gXEfTFE7ZzAvCDTLX33fyaA52zToTHoSksQ",
  "key10": "484uiGe4nR9h9vndVSB8HHw3zZKG1FtTA1NiezMBxRtKXS8rqUGLz14B2EwgQPy5EfLAH7kAbeSNbnSzAXDHXuKE",
  "key11": "rYEaT1M96gr2coba41oEiT7s8QdG5c9xNXNBMPEyixUfpzcoLp7GqHybuXdqHTz19gQB5aZ4je6utJnBsjQHhPr",
  "key12": "5GjThtEAxS9pUXk8hmNrYXr4ueZn2t7SBj9pHKiMQuFW4fcBPGDTwGw7ehwfvB8bc27juavqJzpntXt34Fa2tn2G",
  "key13": "53Rz9jUiRjjt5ENeHSwRpn6xZKGPGeDAe5oZKQtdmofoGBmqhfJhbExN2ySg6pWijmYisxuNnEps15HnsroXEdEW",
  "key14": "59WvtP2ekehxXq5LSsCLfbvW4uE7EMAvvAfT8efQLD7PvivohRvAShJQp2966Cp1xMojdAFusQboNKq3ayX2BxEV",
  "key15": "3QBUrv2LsY1DXGmBKYLpR3DiHsLYGNefgzY4c1d9gyraqJj9V3K4M9iKqAyRwXgvkpEgu5jaJVsC1prpYPBa1rBt",
  "key16": "4UjnrBbkZtdpbZcxx8731W2TSM8ThuJ1Wwer6MgLemVzwUus8yTQQt4kY5Xf4KA9o111SrvjEWeBUb1Lof8u3xgQ",
  "key17": "3nQ9s4VizSk73aL2aBR8zAEyWhshn2YchhPJvCgq16dgECvKWuLQ61i5BDy5YBqbJCF1A87pJKt4KMUAEX8cuM56",
  "key18": "4KvsnnrogTbC1AnuBwSSvKRaQPMQgDizD91K9b81VG6sEnA3R8Yb8SSUh95jM23eB5pWTt8Wwbdooqe6uoMQaXZo",
  "key19": "28ydrWzb9xLHDjvLb6dYV7Nsj51QWJwFqG8jTn8CEmeaMAMPQLvPyrpEYjQncJfwifUf2efNV9s7QPwmdWqwdZmB",
  "key20": "2myPS8Lj3ibV7H8Rh8RVw9yjyB5ewksXE5oeUpMhUb1q15D2UrXzktbnmspxnhz1s1qTZv8pYFAX3SUCny57V8kE",
  "key21": "39Apa3aPD7PFdHK2kn8mqQD4ZGxzJ6J5HEZM6MZEYnHJ4TWNvbDhnefCdmYxWz9Fvg3CajSBWUFdraF4WCLHuyJA",
  "key22": "4337HThy7ctKL3kMFwRmEmhNGY6c2SNeZDsCFEVFkspCtTipg5CVij81ehrt1nAUvm2goLe7tjmJZdGtCrkinxFb",
  "key23": "3KnvKgVBCn91pQGnEjMCbLXZyivoF2HbhSgLEZwndSowRtBAGnYeRptsVNtBELYHLu18NWWsziXd1Gvazn1dLW8H",
  "key24": "4hpeV7dNFBKpxLcE1DT68BULr7bG6Wmp7ymyWpsGN2yNJa8gcr5a565inE1V9bSARqUsohXrcEHiqJ5psnDxUbbg",
  "key25": "57SM6JWDnAcBGrd2VVfG3QBzp8xA7VHwvoFx3beDggHKovrJPcuGpFReSZ3zMnZHoVyzJKnPAhSgeCVcaGLwnqxA",
  "key26": "5d7S5HTrZtxy7Hcbw2Loh8VzeebV4zge3bHbMfqvDfFrgz4hYTpxkk7iU8WJfCaESLozNCCEci5BhUAXNbKbdegP",
  "key27": "53cmSPXYrzKKju1Uo4tfSBccVd2rgptJMoyUYg5MJmYzTecExYATeRmCMW7SCNYcy9hxuxFGJXyRmVYU21hR7Ku2",
  "key28": "3AapQuZRSWi8GovWxPJeAaLb86koP8CT1PNR9PtAdzWDHqaGwqY5WQaySkjzPbd1SQEwGr2ZjMbrUJzJUnYj6B6M",
  "key29": "4ArTY8DSLcvXZUj2JzUvTPFUCYraCyfNuhkz1RQc3eUxd7DSPiZU8bKfiUkcZmm98DpDHaJz9FZM4fbv91hg4qP3",
  "key30": "Tz7JvJJR8jTMbvFLZmX2KGHB74xtx42NeF1914ZiHfiX7NjQCF2gGX7KMyMGiE4s2n1QVKsPHFJmJrE7uAsmqh4"
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
