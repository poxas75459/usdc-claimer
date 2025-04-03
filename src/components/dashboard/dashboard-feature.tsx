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
    "4C75cEYGbaQPDmnKf92jEWCah12wds55mmr2U33ZJf3xaAfvnL3hSW7XyrjANvjDXMhPe1CeXjRwV5CsnXiM4TZy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vP6Jo79EDkru5iG3Bqny59mC5P2JmsNhG2y9rJDRMpor5VFTvdqMPqmDnePG3eQ7s7dPyUJAW3SqJaxweHbh4nj",
  "key1": "3fxodemFbhJPVQrikL3Wp36gfNrWHeTb5NMXhG3YLDn7nDCJXLvgVdQJoYTHm1dvKwUadRpk6xJhgQ47EAjVMHvv",
  "key2": "4D6Tx5iefj8C1Axt7EWcRvudnVLdjxdZKyeg8hzoXuo4HdD6t945amUmbCVRcLPeTToCyzMocjuUV86xsXuiuj9G",
  "key3": "2vpuMzrVw3jBXxqpTN4ZyupTAKYrraXc3y5wSnb3aHXa1DkPT12xy9XJ3Y7Vc1298bDp4u5fb7zxVVdSUXQxhfY7",
  "key4": "5kRDNoUnAqussDynkW9s7hkWtFSmWBWAuBH7S8QvvqeqwJ3NCNNxdF3qtcAPvXDLSPcMzP43cWe1xCZmZUHooTD5",
  "key5": "4QSUjepoH3uqeqQ2F39Liod4d6D7THetVHUr6QzHaz52ff7Xv49wQpeiL8uCSp4zF8xWfL9UKeWjuhq41AvFC31u",
  "key6": "42nxBU1byXZR2Kz8CdZYPmaHiMZbvsi4GoBY5i7fmBrUmpCgFKA3cxG5SNgWt5BwUcRdZWrFijVtSm3bZJt5sydn",
  "key7": "5r8wJncWwBBHDmWYu3BbDdCKch58r8MECcpRrRck3n6mSJcGKT2wDSSbeR78B1UExCKSRUdTgKqz7Mxks6why5qC",
  "key8": "2qGtoXL811h2N2dDB6xSBXKoXgsQCeWp6bomiBSkXR2HJsKHj2xYWUXHPdLPjajhyYAvaxWtk8a49h14cvi5Dv1o",
  "key9": "64URrNu22c6mZrZ8aW2x6bxXfXXLn1jnjgDVQemquS6kKpwDjZLq2SWxmjWogwFc8u1M5TEq1ck44XEd7eCis8bP",
  "key10": "5oba3JxK6NvHVjqrYMv7EGJkw5Dojv4Cbo4LYVG5JvNnWcbzfn2hnNK7o5Bn6iyV1LJnw9HQAqeANJ7EsZWQj4de",
  "key11": "3ZpSbNuWRV6opNLDDa2ZsR9gEqLDaeeLk6x2Fu1gZTP8YfWSktDttSPcZhFqKjYNyD6cS2wJi9tCSvmin1k3aJri",
  "key12": "sDq1b1RWcX3cfjxFnu5zGk679RbKzqjSNP89vxRwMKL2BbHjKnDPG2dmL5eLrWwcZ7aCnda5pn1DtixqdUYtNWb",
  "key13": "5KbAq5hr2h4Srt9xAbKP6aTgrJV71njJBwtJf6QpM6xk64mfvrEZNJVjzzovTs8hw7TLFhEAyM1YpnQDouHU8XBM",
  "key14": "2ZkwHoE2opEcvMVDz4zFq8Akj5rRrsC9oU5MS9CpMxkCCkCvDmk34M3xKqTq9WDs5mgehrZqWnYhgdPSboTZftkm",
  "key15": "67XhLo9hgzZG5CVTthDCDD7ASGWwYNZvJzMVenon36WKCY3vqyznbiMABaeAggDwQc5hXY7mrKQbDZD7wJcFPq9Z",
  "key16": "3TqaVvKiZxtKcwMKHEi7GBNpsXVu4NPYEaUDekskjHswEWcjkaSnxdJKbYWvptBExB4MihVcfSujfkDoM9uhWW7D",
  "key17": "3GH9SpBpuurT2FXveJQ4TkGrLxGWbUWRBt4aDNTWSJegEM2iYBmSdALcS8R5nA1wRynca3SB7buUZ5MkCXFzNZsQ",
  "key18": "3sFMtatyxrwEjeg2kzo1eXhjpLvUwAUpy1ka1mEd8wvsYA6GwDE7ciHh9tRDyXj41wYZbALr6pjVwRKBTPSmQoMJ",
  "key19": "2Rb8PS7hQeYVRD9tsKHBzWdxYRxAbin7eoAXn94JPACAEfigfhNmkEdtsQ2YSfrxLAKXcRDF27bpEPsTSXPTQDfm",
  "key20": "e7iWYBmHnmYSuNYpU9z4SL6bUimgprVXXDXa8BCx5WHcJw2Q45qTqscEKcLAKVs81JMq4jGyEPerTk2fDgwGedv",
  "key21": "42hZ741NtKHaaBFDV9bcjiEqxSVfWbGcz3ZoVTy8EMp3KMxf5M1kTt69WXdkPEpnfSmdAn4enkJZw456fAZCixtv",
  "key22": "3ddfn7z3tsXWoNZHYtvVkaZrVAxZsmXrGKXKyK2NxRnCjvmVijEv5QpaS3pk63eDm5VW28oHq3KFsNe3GD8WM2We",
  "key23": "5Bo6CwehgjaHkgaXncytDYdV4G4275p729QA3fYzPqkpTG74uaB3RpafPAYYqn8f9eSXAPLWLfQjwc75BkvHgxqW",
  "key24": "YUJ1ZnGJvRiU7c9xZkGovrtcFDo5bnGbDnZC2cidV9KEfeknFQodWLRQtCD8Fm5KWWP7p3kym9HKo48sK8qqBit",
  "key25": "PdLvMCniTZ7LFxhoppXFHGWnPPVz7kpP8kqJiC7G7qMUjdatgJD6nu8afMgSZ18qwMqjGb1pnpMQfxHDpgCz4w6",
  "key26": "5NPxDRha32BDy9xTFBaEemSfN7z5JStjKzftX1J797dRsKuWM9P3VxovenqzpGZvhC6vBmgsP4L8S8581to2BaQA",
  "key27": "4gWZZaw97mKik7nPVuWQoEPKWfvHxTAd699nSjTPEwY9zxmdqzwMhg9XVzApZEKCPMHp64X5HKycHE3GKTuwHiDV",
  "key28": "6ZAiyVxgGbjnMNyxkAgCnCfNmmXpN54BtJJRPcALBfuPmrQan6M6sTNqMEtUYwr38VxwFJnbVWYRbeqHopDMRap",
  "key29": "3UqjgU6CepvLhkPo4448KBmGhvyKSWNnehZd5hpM2NPyYyivX5NSW69V6jdQiqDFUj1L2EThJeELJLCmMEDunaNZ",
  "key30": "NW3oa1NPvTJYKe7pr56MEoJS6XKxBvAQwy4H8H2YqRKvbmcUanz6mPAoZVZ9N3qhXWBWn86YSRCxTNafZQgobMt",
  "key31": "36Ksx9XtNK1c8vSQZoXr86MHRysmt1aywnmfzuoHVYUkKAZewteuoece9G4Q2iKNs58ugwYfLUuJ8Bkqg3U6nPnA",
  "key32": "2R953wsgydKynpV66Hc6MtjPMjGkJbLR4U8eD7k63hBPjavfKhY6JqzfhVwjo9gpYSwoZeYyR9L2W7Hntqr6pzvS",
  "key33": "5Ln9pexqcRJ9TjVznNv1h63rYaqA5hYD1Bt2m583SeoFhLedN5Ru8qYuoEFpBoMcAHUifL6bmpRQzd96LfEjLfyi",
  "key34": "2BrarzdAcfDz4eVsxXEwjtpjEM5QVWGsgo2w2YocA93yk9ToVc4PdpTYPyKREqaPjrRLzDNhshioWjaXDs6xH9r6",
  "key35": "5aZ5UAoNuXJa1RbvEGHrkpihgKBUfZMmQ3FLLyJcGFAd9JrCP3z2qqbdbVtc1L3xpya5kzH6FcgKyhuV4KPQP7zw",
  "key36": "45UGBEtj3T8gPXEiA2wGD6rkkU6GehnbeWAMtpUpUgcXDG37bPjePQt3kA97xaDa8R57HFxTAUM4AMMK32RZWxym",
  "key37": "5mG2Bug4YAbJr585rWGa8w1MQQnnQ7boBjc8jMdNufzw6CKzCfd5AJNvz3xciJYeR1VyWAKD1hwUxMXKYqB8iYVK",
  "key38": "2aThFNV8dccS9NhvhMD6Rtji6JmXBoS4Knzy6Ky6PFACc1tYrEjAfwzJqyrVQBpXKrsmv1u7h52ja1e4CRxnVPRL",
  "key39": "4iYYNZujQBYWvUExm6aJXJCwb381jgWoJUjLame1dVdneXytzAfDBBe2mUsANiBmo1WKWjMRKjCo6j683P6PQcG8",
  "key40": "3kVuNRkLp4XxDVSo7A7ofLieqZThvDQKXnHiv74cbm4KsgSLknAbDhCXW6aimi53Guk47boDe3mZnfWgHrMrksCU",
  "key41": "4MDogLtpGVxWbptfaxuPM4HProfJaZ4EkaqLATXyqoxkVEj99SgbgWxuZz7bN8RVPUqKeFLZ6o3ziU9u1VabvsuC",
  "key42": "4PzRU9VCbJ8ySADYX6xrpCEu2zihbJChLLcUJrMxtScY9DSU78HKnnswYJydgLcV824ZP31cU9xMJMHaUXUq5fPp",
  "key43": "3pC9g6MZbaK3LK9wghXZXMtaajCfNCsoJcGxwArBXV6bg1eKkRHaSGjiYqgGMYNALvEAVszF3WRqWxasf38Q4ECt",
  "key44": "4kBQEJk17MB7sgVpHtnA89aBf9dzQgXBZx29Hpg5wPNSEbb2KJRsXB31xvqzxHN2AvxWHeMwLA4Ax8vLb9pRz6Sf",
  "key45": "4qgzmP5nKyDhvLD5VwzDNeYJ3qyN8D8CCg413aHH59ckHVNtwesBcFMaghRCXKRTtgX1BMs7Ss5kz3BxmiTEt1aG",
  "key46": "4ojUVeApqryHbkr7FXQiYgRH8vAeVbheaPLZDakgc21RmQhjWAJSiMa9YcvWuiquGQBKjuB6x8z74GsKbZi3abB",
  "key47": "P1ih9gV71Hw7wo2zFDULvK3nq7su3puFXKGX3cyadYenX6StW8vw6JB2Zgq8Jfp5DN99ETeUihSwB2TR6LjqnX6",
  "key48": "2jVEYd7D8hpapiEzFHBekeH4y6j74eqLmYnpiVMqGuuSgkPpfz9ZwGzac3iLQVFvphfZCCaAvVs2zNhzJH4nwQhP"
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
