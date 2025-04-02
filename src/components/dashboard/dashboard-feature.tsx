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
    "39VeRveoTNjVCdvUEjeFQwHoyt2FejRNsMh6JDYYzRyazBprR7V8DnTw4JRckXCMYpSeUsYkETzCBxLvHLDNYYY6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kXjF22WApMzNWAe4WnwVEds7QbY98YznWmNAbwuA4RcPG6U7wrSfhbKrt4dH7jcmy8errPWKXC5pRgXhqi6WoX",
  "key1": "2bk8rkYj11x5Cs5x8bdCmoBwf8RJtUdooMrrgpdqz9NK2rhSxn4unjxd7GpxQqNFXAmz2hbadUBxqLSR1NEJ6fME",
  "key2": "3wACcdUTYY8viY4bFS55ZPzmZMD2h9haKLiAEkrMXHAF19iAaLxJz91rpLW5sAFYmnc7cM5gM3WkcKrw1gJkRQDT",
  "key3": "3zx7MYaTAgNfD67LY4SFjSjz5UrYta2i1jEuxCJufrbENsrgeGhYB6i6BfivmdYDR7Jkfmh1hzZpzPgrc6kUtkbS",
  "key4": "2iodxhfqdkBjnd8TPMkytfKRUuvoRYXt2J7Kf1pebutXR8g5EnZ3pdrKmCa7gZDTmGirFSnUT3qPqpbNfHrcAU1L",
  "key5": "4gd7UFuASuyR4imAcJCiAtQFQfRjtetzwpJvdNjPPvxEk6MWLxhhVspQBZXtZeau9KKwDYrfFm93T9riQk2FRzj",
  "key6": "xHS6Fz524NQDvWpSog9ybviWNMw65gKdMDPcA8Ss61B51W4ypEnQtmZgzuAVFf5xgUepRYYpFtSDX1tUMVFsfeM",
  "key7": "4hU4K2Nv4BBXrSa5koMbNh8VprQ1nEc734UPcrwN5ucMTdmLt6Tum5cLdqPSjQ58dxmXomPnh8ErvaZ4Kc1YWjjz",
  "key8": "4SR8LXQnfdmCzWazXrEEeWZ41oWNgyC3ZE7gWoVyB6DieKUUNoZudKTMPAiRhDVNYGW9zt26kHTDuvwXRiMPVxct",
  "key9": "wPwJizTVsPxoYFNEg4kg4vqx1Sb6zRXL74WSwYKkHvMZM8B1GeXGZv8FJxVxfeCvtaKnhYNWLefyuZAbN6Ed9Pr",
  "key10": "3CNA29QMPw8PpxQZTfjaGE3vK9cYuhR6ZC6ravxEfEvuhpiiofMbYSfcGdk8qay3nfpoge3bgheXKXgA7a5nVWo8",
  "key11": "88ecknQt7BWSTpJ3qKWRqgCW9zebzW5t7n612ETaP5QSekboXQsVbhJDGQbTQZm34CMjjCZxVKEJgGk89Dty1bs",
  "key12": "9qN2vvGi61DYHTouiDFQtJeRF9jRufoaeRCUkoPwjY7eagq67TDP3MSjANSGijzhLsTzq5bD55RHmfFYhy9H5Ae",
  "key13": "1DQ2UTfZ3jNuS7o77mJDUATBY8YcpAWG73MquMepKqS3Ub4GBH5y2mRXfmVxRrpMF3j69tohFFW4YLwedJhLN51",
  "key14": "2ZfiUu1TL8ndc9gRK8dMmgA8pn5LCFy5HaXnGKXpkaXCbcRwjYpsvFTRDV2AEnZPkcJq8g7uXPa1Pj8DAhGzgkfa",
  "key15": "5ZUZtGt9srsH1dnkVxLm88jTxG9m9z2empKSHCExbd6Pg1ky7ke7H6XrJ5uHPvqPFjqLeGfYba6u8w4vyNEkyLx8",
  "key16": "5Ki5iKVCKmeR3BnP26Df5xsq6KtiXoA2TgQPeWtFURMEkL6zhvK3q3wqyfJZRwwQqhdvx6fgwMnkkgPvRfRMh2jr",
  "key17": "55yAEnFm6oythhDgCYdsqo6RCRdmrvnA2YUXPceoeQiS4c5g2LXgepztCR9Bi6jA8AZDqGbte5nvGAs9NY4myivh",
  "key18": "497TLkp7hZev1n67WDLPxgu1vdNkfw5yzAcd23cYFVDGxUKKo1eWXv5PYYHGjmENBh4iH6Wag2EjkgfvcDViioRi",
  "key19": "4NBceF9gYrSU6v1pDs74627nG6DQmpdjxXaaJpDaseVDpYNNwrrxQ1FWUeuVrFVdn1NdjWbeSe62o15FqLepEJUC",
  "key20": "2shVmEdgWRLdLxgxUm8DVFovi6odaJCAvvf6ekXoghPtc39x6CFqAUiKsyB76Btr5Huv7mLjgE1Kd89jHxQWiypT",
  "key21": "5ZPzy3ZpQgVEhgsNhpQSLvLN728QFPFV8actbGujafRAhKjEcnaDDUHjyVs5dTfgprWc58b8SUQJDviXzth7wkjZ",
  "key22": "WRXGBFcDEn5cDe1AqKVT15cqejhzD6MShZMAFk3x4HhkxmknXhfazbr5WB9MRdfudB25iMBECRq1KwFcFPaMBSy",
  "key23": "3CJeBiYRzB9MF2uv9SB5Gak5kTJzZGv4rMYnqWCrbuBg525AVHd5qQAk5NHZTU7tj1VAbypaWK9hCJCefuLEmh2D",
  "key24": "3ML1KWMShQ7zjAUSZVoR9W2EZfNhUNoCVANykXNM5SVYWC4SP25vhMfXBmGryWMncK5LS3kqM7UE7EAFEiAg7Zdt",
  "key25": "Ed8MebejMWwx7eV6oG87a4xQfifzoNapoXFP9WL1x2VUK9L4ixg3ZxxMpnAxLufkN5cajVMhdWVb5EqUsJevPQd",
  "key26": "5TtemrbqBbjyn9ukqjzBAiuydu3k7edMM8ZKn1Vujv69GLqrLJpUyfM9bp5qwR2q1QDWszNGUjjVwRBqiFFJZgxk",
  "key27": "3qZ7PYybdrMGwhZu9PWX7BByWFbFhz7hWKhrS76u9VhD2pj2F98bkgskzhrkkBvbHTviS4BJdH4LEfUSUi5HBwKc",
  "key28": "2thWV3QJwfw2XGZUQ5WTnvb1trQCMPFPCV2qURCfVypijcS5LxyEt4txDFdxoWQti6jgHYHbKTMQff2zhsQAispS",
  "key29": "61ZUWps28JBGHVr7Xe2AuQFyFNKgHstLMVYrazyToub1C8jehw7FMw4mqgbJ6379qAcM1kzj1cTcGNUp8p4kvY3b",
  "key30": "5LziK5c8PEvhWAxWUkjibJZiNw9jKQ6mauEjuVmQKgUajsnPhrM5GYaP7GqruARfYHNSs2ToGdENLRH5LrFcrTZD",
  "key31": "5ddL7g3H1Cwmr1GSdhC4ReL2JXzNt7XMotY1BNBABe6Vpfjqd6eWXdVumLfjZtPjF9uHEFKoqZpavpqv4xzAEs1N",
  "key32": "4Q3yzkUnrk1u5TstoxRQH7pRoMtAcMLuSaS22Lipk9dpahfUKatf9dJCrZYBhQ7MvT9aMkrwcnYAAS9d8EZoFCYL",
  "key33": "3PFfib2w1XW33pXQX85q5fgF81LV6CCbPgkMVybuQu6rcBGY49XkABv7PdunSwMxK2nMB4RayYPpMYku23PnyS6A",
  "key34": "4CAqGZcZTnkfmorcuaQ9KQao7BevsZBMpFauS2Thjaze6MUeckJRg9FsWELHXpBNfx2qUoS6W9CMrbtNqo4X6Lmc",
  "key35": "hiDKy6ivwqaLsmMAu62aJMxdhAUSYCmgeyxB7yqjKaRKSrhQgEnBz7CLjsBPJqBXVLJgFS7CNqhP8RGCVyvAqd6",
  "key36": "2PiiQ36CQGBs2dThNHuzvvkmrieEcs9oWUe7TqJZinDWVG4SLwJr6qDSUm2ugSVRxQ2HpbxEYvhdoZTagV6aQjXU",
  "key37": "JVGtEFcga19akyXHhyRC1GiwHTyPUNdwAah7uPatwGqqeNr9vHESiRHPgXppjVYPkMKsUP4sYeUZd7Z61hYWebZ",
  "key38": "5Z1PHi4iVkdSRyZsG8Tr9PUsbeeiye1bdqUovcCDPpcT56zf9ucZ46T6v8FFshfWyHgVbfv78hnh2TUzWq9ULxNC",
  "key39": "5JDrnATihJdMJ6C71R4ZH1HZSMmYL7bo2WvMKaiP6jBBVevQfrQ3UXBH2djPqgy4Da7FFBqLaDxaDdTxBmWLC9Zb",
  "key40": "4m3on7z4whXsSLo8SEZ1RvnCRe9K4wt7LexRxdEBi7b9Mwm21QpRNHdk2JRWfh1kMup2pT3tTPeY39VA4fMAqryJ"
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
