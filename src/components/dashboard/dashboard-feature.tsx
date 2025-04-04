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
    "mHtH3R1HikhNcHaPKo7z8VdvEUas8oxk1oedtecggoe62PcPrW1F3LSoCVaMuiNLGkwHbwX9af2dBEwTsGqBEuN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51wcnsr6DWD3jy94qv14HND6wrLRmSWiMUjCK8Uj7SV8UwRgCUPgtPUn8AMtPcd482Wr4HcNtavmQ44HsMUvqyjb",
  "key1": "5YfAPh8zsEBE8LqoGyDxRik5QJLH2iDdJrcmKUEEj6NFgecApA5zp7Pxx4DypioetuQJ997LDhYMWs5gqZReTHbL",
  "key2": "4w8xXpFR9PXzi2yY52Zhf9mytuK7jkWyKXsdj8CbD2UAU9s41gnHzkv8tNiWPuvmnTtnDWkCGfubp6PbwZNWNZQ6",
  "key3": "oaUW9gDN5WvgjnyUNsufSnJgHRKgoN5dzfh3EXHjZFmyL2Ps3Vw2DAsaZeegXNpm5SBR5D4n1qM2ZmUYBNqr4bU",
  "key4": "2ZbTJYDx3HEfnGq5YDBLsJkyoP5rKSpQStiN3EujRX1e8D5A45B55b7Ab2UuZ4rKkU3MwuBxrjeXreTyXKbigewg",
  "key5": "4tKv47xV4oS8SmSZ9TSCnCxRZtdE4zjZ69q3sTDQAxq5PVFevgpK196ttc6qJpnJ8nK8tkruvvWfPK4wnQM7jKhc",
  "key6": "2KpyDvpmtb3sdwKAaxgBAgZNbgS2TnBmrXq4TuDre2C7W16j3awRE25uSexbQeDVdgAqzwgshKuug1ZnaU5B8U47",
  "key7": "3CM3WxPzG8MDtry13FDnsMRq1tktEgZ8ETUgJsF7NiK5WXKabKNeGHt7d1uoRcY71Z6zEkJgBDzhjn12y8FYNvPr",
  "key8": "4wGviYZSNuvcD5aVGUS8Uq3S18iQszb9jQ1A9ha6UGvmHSJSMFNJPCupgy7buMy4ebLimpUassRAW2HrAkrnFQ6A",
  "key9": "5pFeCjreAZUnb7ykmjxHVFaZTdPxoNMNjjieor6ocscgo1yk8ywW6uQvi6vWRDAvZvbB8BrteQbj4jwAYuCQq4Zx",
  "key10": "43UToKTK9EKFwBJPsBDSnhihZnDoinGjj3z1Q9tXxd3w7VhRHYyZkU8NnFqvctqQx8GMAd4WQbiejmH32JRE2Ez3",
  "key11": "56bqnMbaP5h2EMw5iDr8KDoWvkq84kHP2t8UMA8C6MGVuCcdMsYMnrsw3TLode1YhUwJyYASgqXUuRVUaefa5qfN",
  "key12": "5VNycqpHvx2apiSVqNvNKJPo6n6dYuKTgpa2raLxbbh52Ff1dmDV6JUJBaBqbpdPyetAFicZZ3MYELufSvXJejpV",
  "key13": "yyjzJb5AXnSzxtgoKsUbesbS8UDWKDNtcA6e1nJ76JZr3h3FL7Fdx4MSmLCwDXLwwve2rrpaeWyGXAAH1Qp2Mgs",
  "key14": "qVBRqopvbCgUqWaJ9jGwf24Tcwr6t6apY5JtGiWPEmMweMB3gkhP7zNg3EaaVuuTZ365Ezz5RPnsHYTXLBaLoEW",
  "key15": "3oEyvMAm6V1EyZq7sUYfPXHSaYtxefUtrdqSdtAhh66evR5WazoxEkQHL4PCWQMwhm22NseA1VEHyapS24vSW726",
  "key16": "63o1bGW1jmhGduzco2qG9hyLWhMaubBAq4ZFfRrJ1Ein54FfDANLoqQKiRSGfyQbxcfyG9szbvAqS4R61FXXUrdo",
  "key17": "2EDjbcx42wbsuGH3cW8K3GG1tebVxWoPPFxgkAuF6HLj1m36nPz4dnzZoz6dVwrAVATkqbgh8Hyp9ARYAFUDDhiU",
  "key18": "3BYH2NPxtXSf3FjmdyW4QGB56LXXMDaEFpDAD9xdU8kKbr6qDS9uhxPnfgmrwJ54q2CtJTg9hCqGTfMJxbbM84oj",
  "key19": "3iYNyTQdyAzXTTakq3YVWbwR7unJqkcd5f5yXgunv5P96rPmswnxUoQEJBLXuivVGzAy31P1jqzWgNhxM7wTuEv6",
  "key20": "3MH5ir6XvuWTcnarnVWSEfN4pTRDFJ6KzYoqiFVMYg4CTVHYbJnZ13fgv2SfpBUFVJH7JUJMWx3z2nSJMznWP5p5",
  "key21": "uxfbrCXZd3DoSHAmFsbsPe63SC6TmQ3fF5q3NQBTyWefNiRw9E31vtte6mkK2VipNY3rciZAGjZkUKm9zFrc6md",
  "key22": "5zMW9sf9xBTY4Wh1pxpjwJ7KmrdMX4AZpK6J35xPMHwbH5jiLDmaiS6cfUFKpDy4ZSZi3eLCCYRNGA8ottcBVftf",
  "key23": "28EQzgR7q6D9pscwkgtFpymr9DjgasXEPRwE9VbuNAdfN997B9k3LHDnJwKUdgj1facKK7wsvCzL4BBHYbEgmTrG",
  "key24": "4oAtp4pqTZUZRGbKtjixR7iZNpejjUL1JBYthJvTThvjczP7HXuiD6ZDfT4P8ewW8uw3v1GVPVwuoimkRdhJRQHB",
  "key25": "28m9U6F9gHESPbnKm9TRAz5SVdsdPmf7H9FSaMNt1k6NyWvog6Skr4QgobNJymiXbGEs344UqNxUqm7xhqekbZrj",
  "key26": "2G8Yc6cEMECGJhvNB2AehDj6Tw56f74phrLndcHE9Rzrdbk3gUT5HgDTfVZ5KrganQScM3879eChC4ZF3TgyWAGD",
  "key27": "2WHtTHm9odQGtuHnJkXv1DewtpLTMP1dUy8cwvTTbJw91uuPBSsffAukXC2pA2TGpxVbwZVfcECV9WVATZWcHn5h",
  "key28": "6muUYPAk5vtFEEBKngA1d44Ar5iBygYaepqRvAYgHgxctEHsordMrMhHZNRsb9DfsNcGbMzrNGBonXp3XCDd1v1",
  "key29": "isg6kuqfJ6DnoUNun47a9pCjeC1RWRJBVkbbKy9gtsdHdu9zXdUbe3XBVKmK5oTEuBrQnjsjsfkS5JBoA8WTV4n",
  "key30": "2NwhV2TgCRYsueKXXYnMB3ebTvsoPvW3gt6kj5AHVQByAWqEePCnSZDxApuJxQwTohLudeBmj1i15DkNWY6aiLmE",
  "key31": "5LVkujN84yZudXQZnbWaDfE54TSNvnTXxh5fbbRHo8TuVkqYN5PoHDBvkAbyfWXpKVA42Gyo7dhjdrjiyimDjU6k",
  "key32": "M4L8L8pPdAiK7CxLhBfz1GVFismnPZqBvkgN6SmmVC2Nhgvx3An1yp1k6qTng8HjW7B8r1K913xEdBdQDJvZCZQ",
  "key33": "2c227EHBVSAUj1ZKVg1Nau2oBVmk7xJ9YwsRiaJPg5kFgHFcBDQVkAZZ2qAKAsnqxQxQ33NeGr1EKem6e5Lk7Dai",
  "key34": "fzVBhtYEfGshPj5VewWWaAwm6bX3DwNnxCREmVU5vUg3i2a2EFrHZAjgFbQNrNjEGhfXUceywnc648sTSgfqvnv",
  "key35": "yr1dD6pSN2XM1gVcR87uQRKJ82qChRy1U61Ugfo1SJcXG8a1aDGnLndvvqmEF3nsW8SJ61BVAxFQQsStXnfxS97"
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
