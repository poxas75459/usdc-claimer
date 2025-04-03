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
    "3L1cguQuigbZ3pXxYJgg3bGHdncF5UNV5DTd1Z7yUvxHUDbTa8dRSDyjYweiNCTFSCVv5yVvLWzW7BcjwJt8xEgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MLij81hRRwcEyq2p6UfHG1AvyyAsStTALNZSLepuNgZrXcZtykdbChiCf5rXThMeCXyfcHARLEoM3fmZp7tGmdH",
  "key1": "x9tVMnrxAwAL1EBou1drcDRzpraZTiytHx9Mfxv9StF2FbfHX7LxvwbKvJi195bwaVSv95bPG4to62xu34qUCWo",
  "key2": "2GD4mNe1dZLjr8rowJy7feynA3qr6eHdejMu48DsQLrVjAjAu8KaJi43khA1H8MfyZFsFkUHCHDDKUC8tZa3pdZx",
  "key3": "2dhWgEv5umSs4yavc2y2PetNuTXZSsqgE9EYaEy2CpMSAV7s26uHeDXsWj9AiWCzDssvFNAXJfQYi4DbV4VRc2kY",
  "key4": "3yXAii7wuxUYsoi5DK3NfK7jw2v28tP1G8KY3vRSiF1PxJopkd3wBcht7QSfzBh6fbhjPY1wwzDaBYANekYzvMaN",
  "key5": "48iTAkWPxDZCQ8WtCH4HkykdJMF7gBhcrb3zPMa3GDqeTYhSHJNLgHA2R3tZi4hHvjc1FayWXzUQk6Z8giGZwjTq",
  "key6": "5tGYSGtZL28cReLJkBRUAJ7MM8yTyxWh4t1NZ69EenuStCKsLBw6wctcQM3atYwnA2PqUSPpGpYx16yvH1Bwba1A",
  "key7": "3cezgJj3in4JLeyUHw1D7EVztpNjN7iTGZqpi9bJ1fHAvXkdzCfKTdpu6griBLK68cUk3MwauwG9frKsnYyKmjxK",
  "key8": "3pRnzY7iG4PpaAnafnpNGH7N4NFaTBiHNZmDfJ5LA1gwry7rZ2aw16hVj6kNzLT6mABLhbvvqxFvBo5dzpZjYGUh",
  "key9": "53oyT7PQQ77VaFZJZ7AGtQLS7BY8dFcHVjPTmFjCgqG8iPDzy5jsFEcouZt5Ddf6rPeH6diqHHd2eG27wsjKZJwV",
  "key10": "34gmT4gxxzd7KXG1hoqXypNaekJTSkB5Fxg96AYSq8ciowRj4gHNzE2Yn5x2XxmPKVW3vjqUPbomtoUY95Kahh5a",
  "key11": "2dZLX2vwWN8W7G4hpbab7T5r6jpWSEPVAjYp869YsKYid8phdX2D4mTEumAzGGGMKK4GRn5E8EjaupSbcDsBNZsy",
  "key12": "5E7Yr4UfAorUdK754BPAVwQAX4d6JEdYV6Eoow9QkRmbpVYNc9veqDrbnzvRbHBMUY5AqRx13eGKUTxUaiSdg9vK",
  "key13": "3wg7qGP2oFVwt8Pr7bTi3mhd9H5mjYssXDBr6EaGqBypXtXjcseNtAToeUmNy6HzGBergVvUAc4JA5AQMjJCjocB",
  "key14": "3AZM14bku6iVXjrGN5g3TUJbt8RsJy9J7nvQrVpHReMDvQT2WEh5gDoZi4Kfg6uwAH6mkofc8HLyCFxuJW9G7oLX",
  "key15": "qXdV13tCbG5ANnbZNGXuRkYzt4aBpP22m3aRMUTUMLgB5iSvexvfZgUQTPV1kbeMkcLybqY9NEfXxzRMRuzV3wg",
  "key16": "3S1w11Z2H9xr1NcUsbBwQ5HWZxCG1KSPBi3PYBg3NVxcEfGFgoBEA29jJkbD629w5ccd28ZgEmWoj5zuGxBax7yX",
  "key17": "5xBAVfqaYCSxFAGaudvCaNk4kDB3SnrJmLFewJb7K5gsSKE3EkUUL48bBbQPoH76kGoKSt7s3pkJreo4gjmiKQ9M",
  "key18": "2Xwko8omRB7LBGpiskGZTpnUpfPhMSrnyT1VcUnrqQKX2or5rrTavozsQHd8oUztbcsa7h7SyapCe2QtVkpTFqsm",
  "key19": "4M4cnwS5CYByDu6v6Chp1oyo9XK5ydfPtchBBMWA9MajWSiJiToqrewGPGQkfj18xQ1QkxfHAZYTTcsVRZiztJn8",
  "key20": "5jFRESA8ySimBCZa6r6nfvRVZtgAwgYeqcMDS9dGCkVnbkYRVptWTtoPpWxZRcLeLdfpL2G83VqBpFaYh3YZuEhL",
  "key21": "4gHdwAYNGBMvXJ3wKz6hpTHrZ8F4wiMExA5egSjtwd3G1KtVQMXGbpf9FotZeHNdBQUXxKWnLQtPTRBuzD2cgGuc",
  "key22": "3h3qx58SYAdFvLj4GNPQvitdpqQ1dG3Q85biU4UnMzRbPvrZqBa6khkkTwseTf6UvA3t8Wf6EM6EeNzoxvZRFryu",
  "key23": "41mQJqnrLxVgVfNMhqAtnxVNb8VDRKQCWPE7C7mHwNFziM8Q5g24hCs2bGyDSNJ4Jnee4xdvRn61DScxhUmgUUWy",
  "key24": "531RUrmzNEeAiXTGDifDTU4E1BmbN64kqpJszj7RUVVtrqgfCL4b3U3xoyQ4EaZJvjQqELJ4gsGjM8P9GVUHLvq",
  "key25": "nQzThsuzheceehCGydQ4MJbG52yJxsbhZKc2YAF6yGCfQUa3DTwEomdKipp5GY4StuobQ18f2i4RzHaDoCsoeWZ",
  "key26": "2nDHkeqBYKScgNnqrBcR6BX5u9BNFQ11B5X36aFpmrtQyTaCM3eK5Czo4Vus31GfsAMNgS75MkYyNmW1QvmTaE3w",
  "key27": "3g2uVThV4Yr3r2XnBMCgh94bqQxog8ce7fPxgUp8ahGJeY2VkwBemz3ReHAxkT15gs7bUXmVTypVVzuzoJ6LQPgq",
  "key28": "U49XqW121aypirgYLPad3VKDmrjGyB1VvN3EkrShs5Cyqvq3ZXrkDmxTE3w3bUzmUiYibEidCJLmU18mRx4UaLN",
  "key29": "4V9nwMovQd2buCqyzvEoF6JuksvDhCYPRD9AeaBd73qcTpKnMyZNbAeKMPnPWZNNnEhMmxp1QW2epPK71hrtwHd2",
  "key30": "wUxPRaU6NBp2oYjhbSSyN3Q7gBiSC9PP85GCviantF5FMgTxkUTrEwLn5wy5XUwFEQkib8uQNVaP46PuzMo8ACF",
  "key31": "aW6ZbSLgn2EtMVx14dW9mM1jDWXpmvjDCYVRx6wUda4PffxMr9rx1JbS34t6BdBU5HA9ra42n6hiabF1Yw71Zad",
  "key32": "4szQoYWfDXtm84q9reXEh93NBZtaToNiNy3KjUR5ehwD27fhvAQXzSUCsNnSyxyee8jxxEkfaCpHtfA9tk2wDcH",
  "key33": "2mzh3ybKz7mZvB2XPCB1FVpRLyrErgNFozmhTYDr7JibxVRUuzjJqnFYXSFbFAVXCC2G7sYTaB93BdSjgmhd9WHn",
  "key34": "67S8QeAY9hDabzQtiPN3VvxS31CSuzXXaxC6eVfB1M2Coak3KsSxgwy88vTFqqDDvQte28KXhcimq3pPGFXT5AW8",
  "key35": "2fqYJPqaoDDhmeZiGr8Gh6kCYoLH6aWQNnwecYGhNDwZMxDFfuWqKwv8vGRD4bPfMjfLhJpfHNanQYCCzwLfEN4J",
  "key36": "4yU4JJFBbbPSyJUj7N5Q2VpR68hUjDgwJcL3TA6fYWyeosLPQsUaj9vttY2uUvSqirHhsx4SsvwCF45JjY3ui2rk",
  "key37": "4Q3DX5nt47LeJEzLzVZ81r9yGdHbivaf8fvyYQJBQToaVjz9pDNhsfaRDkCFDDMM3F3KX4UidZmEPnEP1bpsAY36",
  "key38": "3PtiaMB3EDJfjBUezpvU2Zhk3HTg4vWivHfa7Whbky3JsiwZCB2dH3BDRiiWP439gEf2dq4SkKoHZCWAeySCSGWk",
  "key39": "5x1pH4cJoPFVW7as9gNtAXMirbUnmpydHg9ZHt8Ee57Cuu7NNHHWS8xLwLzEHtHK2enrf9MXfm3qfExWwNx96QxD"
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
