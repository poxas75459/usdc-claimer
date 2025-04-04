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
    "51d9aPPyjuaRaBZR9MfhVZDtdq4ZxSyJAfsgV8mZ74R9ZYZ85tfY1bHLuq9zs7hMcpDXr2Nh37xDZjU2hCEnydpr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FTCiHnkqgcbKXVZj9C2rtRZ571brSEgWSoT9vzqzCR2EySXuqs9QTdfvkKzPA2pCFx86j1r8pmzzUxvfbRdSEPC",
  "key1": "2hbAU1MSCYqwWYXjJEs1EDPjVtR9244vvUwX2snHK5YXetDAPUdKp1haru6f6sR91f5a8i2wHnyMcwkZUXkVsEGw",
  "key2": "5iEcQJuM39ei6ketUt7KBVjddU9SyYTTcLehPPpUiNgsE8gPchap12kpULHkFf5TSLN4RKJhMww9Q6HGFCJfAeHn",
  "key3": "2ZoVAVQcXCFtiWRFpxEtvBDyRLk9urfZfkLdZL3uCRd1Y19W7xY9YFLP2xvhk5pyQZxNr5Lz3pwFqar4eoyAXMRV",
  "key4": "5UUoBcqZEuCxBCVsvUyKjQmdQCfWYmGLQiJUTmGMrHFrgsbYYRbi57Xy8xPAN1ophtgkXuz8YrAeCY9W8JSciFnr",
  "key5": "4HWxhptWsWimyQaYHtzCTLw4XyhLoeCiJ4T2iKb1e6xBojV2CRYwrrdoVz7q3AHPsBvkDUFNfKiipee3WsCEaB6g",
  "key6": "JcrtCkSTWdajGGinQFWKACacDqWka3ETF2AZq7HWTUwUAhXaUrWXDG6jm8XfipfB8XquktghjfQFvj4DVh17ytT",
  "key7": "5JE5iH2Jt2ZWHc23AHs1cTPQpngSYoXFMgdHJZGQuQacq26fphTiwhmY66CXi1YnJ9vXkv7g22tyUq8om8EGH3PL",
  "key8": "3vRaZSzdZqDz5RzSYA2Kmtei4qRygFAb4tWviuUpkTTTfFh4bY6e6AfB4nVCPRDrKqyTURUWCRDjdH4ybvEgPvUx",
  "key9": "45CmPaBr3mPVXPUDGiWefd5dyZz3Sn5cHKzVsReHQNoY22zUBjKzCcRut3h3iQY9wDmt4wCbKw3FHFCnHwfLChWG",
  "key10": "8Nhi9ru3s7ycV8x1gr9BgQ1TVYQiA56Kx6EucokDNVSbUn1bjJqNnMBKCNFQbia9YrGtxRjMDJWQC45wjPGVjhw",
  "key11": "LFRxKfysVcdD1vHvBNseZrUd5R4xzUYWLkydADYHTG84MhMReGHCai9RLGd2PJEnDSTmd6kGDxEJ6WeMiLDrp53",
  "key12": "2wVVwQj6VVAjwWh22fgTBmjqwcrNpWoF5YVERuWpyAToyBsAMauT4bPa2MvQER7xFX7bATrZwiR5ywrCqeVwv12Y",
  "key13": "Y5zDeHCGYwYoe1hAGiNrXh6Cu4jiseuS7uCNmNgRVYVarH1knkcaShvF9SCUapBbWbVyhJFtgnCUywaVRDBqe51",
  "key14": "1AdqR7Qfn9921henEM2jbQvqvsciDY6EJ6ChC7tjsGVYFuXMAssgQweHDYcKzTwEDf7wz1xLyHpenYGpLwbEBPj",
  "key15": "4P5FA8MEC7i5juTUnxVmuZAsr5x1ZgpzmZe96t1CMMcMiE9kgzy3Apu2w7bh7oGZxcJygniVKAo2aGtrPVE2tFDb",
  "key16": "3Z5fGYvw6NTjFRnonEf6FTNkiKHQjRBFx7mNbGUXpLQnGmGeM9CycWZFibD9C1Rca7ptNRjjpnVqpVaqoNebj8Zm",
  "key17": "4ZcKUnw9394kcjPRAATTa1fAe8uvQ4PMKRfQfXuFGhSPXyR4B6iAZAbPV92anHeH16nUFxXwMfp5gjduP2QQsFw9",
  "key18": "4VegMrb8QKRJupnczQgD7qNcqYoAh7p8X42qfJaqk2qSmDbtfzA37Az1cq6puDoEY1YXo2WuBVZytp6ouLX6jXmz",
  "key19": "3qeT9Le4u7Gxyf7uPvRTVpLBqfGoyNQTtnrw955jc4tDbi443dDqf4wNJNQNf863VwxH2TjrMD79zS9Z1UjgNKCt",
  "key20": "2pcZuDGARzLAvjHe6V7HVtLiVoBCrK7wYRjw9FaqJ3pFhCec7HGTVXDUpMnyKK8VTc3Hvv8pfuHtCq15fVswZ4V7",
  "key21": "4EMQo238vinqgV8HbxoZ4yW1Hk4Ajh7MYyCqg2bN3mFyb5wUNM1S9FxdfkAQQKhzCzmCukpumxMJPNaKGEV1BFif",
  "key22": "2oqfsBT8z6DYphvwFR84MBS1XErpes8ykSDHmoApFGTU3tesUMVg9bf5ot7w8r3obA7j2gVRmfANCNy77oTaywSh",
  "key23": "yiy6DEZDyuBYeT5ta3jyzAQPSuZXvzZxh1zJAjhWrRa2s1Zcts2oovCnBtZBKDmzEgdkD6wFPFihmFi62zMVyMp",
  "key24": "21Kc8at8Q3dtoFm5Ntxthq4uRkotGQEJ2jFcNUNFjuCNy9xvVuNyzct5vZr2MfX1CBcxaJqBZ6VvVYTnWDSCBY7z",
  "key25": "N72nNsjVKbE1dxKKT1NuATT4i7NLFSXx4h3AiPbU1GPZaQiUcGnLSZufZUfe7fgLaK6cWoWc3qCUrUGoVNE3LSQ",
  "key26": "3vk8VAnob2L6i9PydQUfsTLRKMNNRN6hyK3cXEb8taQ4rZjLzPwNHfpzFv7kEeJNERSXTCHiwtBfv53axGbYpQJw",
  "key27": "4bZ711Zz1bZDHVuLc2WiMAW1qUUjdwJBMqhRGD7jwqjGzbyrgYh2DE4uA69kZDbd92L8NdMaWzzLCLT9AsVagJcw",
  "key28": "2HzM6AFZAfyAF4wgQvHXrUfcSpmaHuQjjsC8gb5shDV8USd4TfTgncn4KtF99o7AK1sDczimPZaKr3igUXkmpz4C",
  "key29": "59dPRH3Qo5GMp6yzotVq12HdueUv95xHprfJReKGg6eBvdfWBmLFZJtMNb2kNA8sBeapaqqzGSk4ihV8nHiQViMG",
  "key30": "25Dtaj9kazvHGr5QrkZY5jJtGfzTsVUh3qNKmZyLbsxUW9gLD7N4R7UqrEdBCXvRMPGgcSQKTgr5SuTZHZnN1bK9"
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
