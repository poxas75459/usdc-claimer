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
    "4biF8u2uwyDh8uwH1Ma9zK9bd8S49ZqyrViUnw4boScp7z7YcV8jKAbaw7iNpScHBgqwpNtC6pGz23A66Snuc83U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t8ZtxrFDAPxrmLuiJebGzChM9wf8JZwXsWGAksLc7YC14sKaTCyFwjdEKfNqaKR977yhkNLtXZMqSJNaBTwei7f",
  "key1": "4uSwXyw35nrRTRUTABUGukpYhS1qokMvCF1QEhaqXxj7hvZGCh6CdUnhehKN1Sz8EH5Jw6Ys3m87rRiYjNGEXvRV",
  "key2": "5RJL7Fpa6sdTaee5zDpzdAUWm2qrTF1HpC6JD8tjdZcFyb6VSjZayBshH1KzA1tXfU7QUkBzYtibCcngcHVbLSig",
  "key3": "2tBZr4PR8q2GgKcaFWvo87RKMbUd8Qf8AP9P2pX7y9mCxnA4B7qKcNxZczWSETpEuFA5MHutif3eQdpPHmwQ96xT",
  "key4": "2cgUM4xWFkwZbLLieSPG53g5BjzZS5xjekaLwGFVMJdHvxt1vsnHxTuZQvvTJpse1CMqo9HMFLChsrpDwaFZuCL5",
  "key5": "2oE1MtzoRMn2FrnszQ5LHotUbmGEQnaLeMBaKoYt95ALhkyAp13B6E1htt3wYCW5gTeHfiza9hL13TSXe8TmG2D2",
  "key6": "Sj4QyaBpVjfLe1BCw5Qy1niqzHX2S5Ahintspuf9kZpszdcgByUHwCvs1UcogcjQMoaAxsKFhswx3p2XbXzif3R",
  "key7": "3a2ev9zZwvShVavpWiBUZSYxHM6894QADUANMFmdiPbi1P8BpMahL3LzsWKawnhyN1Hvn1sG2Ux45K7tQ1yji5Pd",
  "key8": "2m11nYH4Vsn1yJak17LQydAHxHyKRdBcVnGUVKbFRFnVgdj9Lc7vtPSBgcp2hL9uVwjmKRTFQQqWn2Kgot76nTdu",
  "key9": "pzVzBQtLwUgW88SmtyKg2mSorYAHLTr63oBfAyTMv32b9TMfKv9oU6nuXht2svwdHACKmdMZGd899Lg8ZzyY4Kz",
  "key10": "2v1EKJjwN9Dt27WQmVatTPCoMjXTqq5u7GYqmQKc2PpBp7XwQdsT1MXt4LoP8WGJWqtPwnEckmgoMQ349RfeKjgq",
  "key11": "222K7LUDLHaACgss2UiQBsEkJzV41RUQCFFXQ5QzNHaLRcpun3idbAMLKiZFDmWpY92ADcGUevyxTDAwixC5QN3d",
  "key12": "aG5BsimkY33e12G7UBTwwMBMjsy8r961sAAm2kzPrNABycU96BJM5z8arpoutEqE1MacBfEjfrWQofr5W1EFiAh",
  "key13": "5jjzbEnNQ2QWsfiuBrXBznkg8HmKPcRtsi13FBp43nd7fAULfu14Ko89PVwvjcvLi2xdEU6zGDNsJAiH9kdecKA5",
  "key14": "2jPNFKtJGXy89EZNN4Z9vBWFi4RJTJ135QBsn4RVQ6CK9GaHfGFNGuQbhrPKND9mmSh7aXWmtFUByEGJygKRYw7K",
  "key15": "5g8X5yoT1b9qvm3xrqyxRaduamE74XVKLusRy9JimZ6zzyRwHm4fg3P7HUWsjKxAEDwoGAFSMcUnAqs5gAz86LKK",
  "key16": "5rERWCeQzCNk2bmjXmctC5rHqNeQqgUBvNMT8ddpfTNnSZBLsfBTRdnABa7mryuzrXUUZWyz2zMuqCGGvkKLTr3r",
  "key17": "fEfMmcVLLCCMQoeZdbEQrRZrCsp59tw23iRsBzRNBn8RCafjUD53MgaVy7uW8M51iz5sJ3VLcpVu394ECQw8qFn",
  "key18": "4GmpKUAtZipQYoMinDvGcmyuFci9jRirdQ9yaPR82rW6pJ15Hdeu8GEjQtLeHRfAXB59mppKDHXwN1RopG2Et15x",
  "key19": "432FveVcPLENVCvQPbiP61G81HVqztiWxH8eqgZUSKcaRfmzKGCKV48yfGHVLtBhCx2d7TK1FPS52cUbAyJ1twCG",
  "key20": "qnrmjLGyz9NgjqhRrVk6ERbWjrhLYcsuAaNKftuW9L1pHRTVpGzuWHPcJfEaZ97fLhGrRAbeBDcm8uMm38EWcwJ",
  "key21": "4APMRSh3fHL1Fy2nvMyDRQeXtuAWqdGh6Rewt9VKP3YhFBm2sbiDA5bkneiDrSgUxcUdirnLQgfb4K5ktBpKGxcu",
  "key22": "h2T8jzc8MBwMF1kLuksRvvB2fVgswNj6ZH1NFaKTbNQ1itEntVAFwVMW1hdhXAPeer8a2kqdCuy5AqpcqLSDxqj",
  "key23": "3ivk6rjKdXWTU34uCgus2ZD2f4KS6hpaZ7GmydH9tRuySYgavSb8Vjpy4R6wh6RZSRY9Q2GcYaaDTXxSpu6ih5Re",
  "key24": "CTwmjdzZHMokLPkLNLro1uyimFSkS6TmGbHb86uQZTuGawcBu4LRg3FdEh7gQw8HnTptT6eeVKj1LNPJYhU4LuY",
  "key25": "2P9wdqT1zD3erGfe8EQEQcMA6doLkM3YZmL3oXGNyVnkCHHW2dJDwXGQ1FtCXRnnUVwNcj8GxdHZXgkqnNECwBwD",
  "key26": "bpmTeCcfnh71k56AjcE2KbHBR9t2jAEL7vw3c1pR554QYYqfhJXNEJ8kG3t45L18UA4TG6ep1oHmc6HKSUGAfe5",
  "key27": "5KxRXp5vrzxSmg3zKhj4VsE54yUfAGzW9NX724V76qQBLWoVLV14U6aUnWZcwhA9yEgtGoxYCe96XopgdVSoHRGR",
  "key28": "5pZQM2E1sHqnzZkvNMDwssD3wWz5aiF8dyfw8g56rKDKAM4sXe2PJjNX4ZodTqwpmm6ZA9Ph1UepyUe3oEjnwC4J",
  "key29": "U1Gwr6baDHbHhdePyZE4tgBc6SRzf63WcoJmQf7w5FGNz81q5B8MXeRqo8eWictSMbU7Nsp42pog29r6ukBptVA",
  "key30": "4AaDKqpemKj389A7ZyhBtwonArYnpRxNuaJuK18tJVpr9mJ5CoYL1C2bPY7nMNwCgViha47wZiK5ECu3ysFZDhKn",
  "key31": "3jLwffJGR9ArUxDBmWv1V4SuHGH1MmEMmD3q9mS9HNmuYVbwkwDNdNeUVVAbFzzfSGbFw1tpUJNfEh56KxYudUd7",
  "key32": "nxguT8DKxLNSi3QDCiwJ2Wp86bvhKVQ7wjhePVXXB5vRnFnftQsGFEj1cVreHeFx8gZKAv9nX9QCP8kWRHn3TJv",
  "key33": "4vWWrzq4PN1wcXk4EgqgBt5o7MQ6eXWDdseNNvEyEV2jThnERbD3V5fT1xZUQCuMHcAK8nsgcLDp7Cpun96uPgFk",
  "key34": "tfD1uHtpq9DTppEkAAeqDgL5DJRXVNrYHa1YFLLhNxNTshN8YQnEXZvveBnQCbUrX2wqF3UAK1KfXdNxDoprxdz",
  "key35": "2EDGzd498AmnPSiEKQ3ZHU3Z3EqPcVKAAodaJ6AQNpU7CE329Qj6b7f7uisdLMes7sPc2Fzqev2foLpniZje26K9",
  "key36": "29aC5vsruHxUGnC6XwhmKRbi9MfqMbv55j282tv6378NMobUTmvR4Kp5D48XXALKxdkrxHW1uxx5J881RRBMg79S",
  "key37": "3g9DVY5Dkgm5EP4rgJpWw2ARdC1gdMotNwzManhDA99iMY8khEQ7ZDqUYzqHdq9hkCkmDqTmVgEoRtLxxRnpsZis",
  "key38": "XJba9XEsDCEVWFAQmfKpEa2r9fxXK3eNGQ7JejUTWqFWbELFCtGf7WJL2zP7QMpUQYqmPwMwTd4FW968fQcohXT",
  "key39": "5g8byp7Xea3jZyGQzeyctiK9pWA2qXq2L5HwEN1ye5of5bRfZLTqg7B3xkhrn8JwBLrgNHhj3dmvhJoTsC6S6gMo",
  "key40": "5hMnASnTTV1rsdiUmafhhLYDagPjV4APyy5T9Y5CSPmJL8Rsd6xNpeCt8rCSiG9LkWz3uyZEvrwt4fowezmHZppc",
  "key41": "2cu3za8xYdKvfVzWfPMR9yGLsQF3jR5muzRZDCkkCQkNamQstXzcZwdJ89heMJAauDjDt5YMkYqgkqGxwLWUk4H6",
  "key42": "5P5R4qKMAXQZKHWst5QEg39Hsq82MxmhX9AZW3jYoNdH85TtkF2yphe95oDM8YYVjxo66fRtdnxjMisqzKvvV4zC",
  "key43": "mSwaLqFJE8U2o17DbdM7vinkg87ZY7kD5MAFN8EqhqDwfRCydPnxscHcYJqsEdawk33XrFgEwhkeFwxMQsEqevU",
  "key44": "5bg4Dj6EPMXB66f4ch1FiH7MZ8qiuvkpGUpHxADGcgDxBSJsFQyv9muyDjm4rUGx9SWfASxG6yRzCYHWaKEbFV3W"
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
