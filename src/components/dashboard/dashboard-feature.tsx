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
    "5fZwAZPKLwbA83TXpm22b5qnKb681GConbjVDQHPbiNw18CxFnxDBv3vFEkiW3YjHE1Ca5gkrsTfUVjqpsc92Lvt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pUXyKYH9npvXTn7MDFcHfPg53JWD7BCBi5SnHqmDJneQjRnKFL9qdSCTivWsfyXMrTotrcf1wfeErA7tqNPEt9r",
  "key1": "4Bu6PGPGGyhpPMnymeb8t6dprSJbeoHsWQQkE4Hha7obFSgiy5r424BLZHAba4qc8oWVVpKiWZEv1TR8ue2iiqGj",
  "key2": "3u3VamJdunRX2WRn8yAFwejrxQGFBGCAXjxLLZviwtjmPZcHjXeHuP9mmiAwTMKrGpjuenMJBCuYSTEEDhVUGch6",
  "key3": "oNz8U4HqupoCM7yYTCZheARVREnv3pQ1m5UtyKxFkfu4rFa3FfzNSE3UHargmfpi5FKPb5vSpeqF2UG7GEvGSBQ",
  "key4": "39RbxShWxv54A4ZaNJGsbzg6WRpXKuRACh2bK5Yeg4E8sn5VJffRyJfPU4cWzc8rwrFoTSaYpGzjDMBdpHySRhGW",
  "key5": "44beg4jDdMZkVAPziEzNBNriMk8eBnneZx4fykRpwyGoFdu7q1eEUq6v8tNbXTiBojnjYyv9zxyb1Brn818q4qAe",
  "key6": "Vgh9BM7TutYmmad9Qf5gtBoBE11aGTBMaJ4boBvLzLBvZxR2oqGqY2TxvP2JqaFCgNKmYnPwuccB3xHKzMMrbNr",
  "key7": "4rDz71WL8jNM2uCcqdDJdGmcqXHnjd72QJtNFDqKN5A5i9rrkwT3AzbyrCSSuzRe9sV7F8C8hhNrCKmJf3mfLJ3H",
  "key8": "2uqr2sF3UYxkb61cr81Lnfyx5Wg7FJRw1DZcAisNAVyaJh9scMBdN4KmSWHLRtgAhYShdWfWSG4d2o1hMwGtyuWr",
  "key9": "3p8JxSKsuGDku2eeUAAR6UWdsFZdMmfbS4Ta41raToGBuGvs4AxaTtZ3pPscdpPoVTNisdo9rTzW6ycFCrSQHKvT",
  "key10": "4szXAAhAAJFz8k5pcaoAagFEwjzMEM34B8s7pEtm2jdPJ5zVYMqhW6jKEFxKHsm8wJ11uie8zxnsdYRC5rJQA1dP",
  "key11": "2YNaQkCZXfj7sCL4vc91YeFMiTfhyeyUkp6fVVNR7hCjwHCZE899XdpgAzaRA12npse6ByzWfJtbCvD2MWx6PCGU",
  "key12": "4XuCoxbxPDxGnMThoBoDjhXvDJu8S31MaHLmrNgGbG7WN6o2h3VxzYkr5jNGPHmhW7gesRsA2e1Sy921NqMBfkQu",
  "key13": "4XxAnehQZTF9qiDmVb9UH2uV8JnMEdwYvo6qS76BR9iwEBHECw9DdSyRYWwHJkVVEGeqcMxjYLcsXDeSSDsRrZzn",
  "key14": "5FanTs9JLD7Y18sAaU6D6wcDSFRobTJLNYyMEQz6HpGfdCiuUJUG4FAvGNKHvjt57WcN5z29km78d9muFvAEL8oe",
  "key15": "25CFyz9HFq88CCMzNGMczjqhu4pnPvncy2WhwMTS8fvHmzwui2YVeRX53HC91Xp52ti3yELu4b3dbkmLZmwoPc2M",
  "key16": "233M61TH2j1Gw5ezdfmY31E3qdmZTP1AQwahs9xkKupiSzw4LBgQRtAsP3Si3v7ngtjAK1rSmE4b5aieaUyJU8cm",
  "key17": "4QEb183pJ8Jqbc48tc9n5yWhjDoFoeQSRhwfyLXv5r7DD4Ts5bKwFD6aWCbk7QPi2xmZg6aEuPpP5uwPjBv38gyV",
  "key18": "5xWNpPydfTD6WWppseJZfhcgRd5DQPXr1m83bZMSDSFBiC6gBHzGXVHr2zGqJLQQd3CqP1XgnJ3gkcZnr8rNymNE",
  "key19": "65U3snaLZDuQWd43f1t4s1i5cFmCgRYZZHiqmoyGCahpvzjxWQcEXwchJwAWdwvAsVCPYBivCHebroPGgvmPFAY6",
  "key20": "2ms6ctT8D8Wnoe9gFXs2dvVBWkPdbu2JTvrGAdyMR3CTiCPVqf3qR8MTptzcu3LKR226vGxhmZbE4qzoYNBuwTVF",
  "key21": "5R7RmK6yodwugx3Y6UYWE2v2fY51QFXkRJEq6qLrH8XqjkTG5SxWEfYb9DSrJoYZ2yoLY8h7141dhrtPyNZJKYce",
  "key22": "4rGuzfCCtetqQbU2eDY6CjYXvEBAiCvN2C94TTSw8hbRimNZHxih5nR7ohxJBwZsQjQrqAzvvUWo6jb9GERv4UZ9",
  "key23": "2F5C51PZ8sWEYyGLzYB8e8D8xmx7DzZG8BJP1ob8p1UmeckvbZccU1f9Am6QZFW1mecv9mMFBeqAkRrxH8iZazXf",
  "key24": "3Mpj3Pcrm3BZPX9zrsuwcRkYKSVeyvAVXTfsmfhsDYiQXitiPTjVfpQ9UPxjG5PF5jjBKVwMQ23wa5H3bzyx1dse",
  "key25": "29NqnYyLtYP6uWFeRLjSbmRkZmX23iEK1nFvaNYrvUUayEEEAE1F3Gtd7MrzdhMDVTdDSiPUehEJ984C8XEDGyWY",
  "key26": "5ufKhsLLmTAKx8YAtD9yXwV8RU9frcFwjPEMJ7CXLkPKJyLaJD9AA2DxZEv7J61fFTuGRYj8TokxGyaN2LD5MGSf",
  "key27": "3uZWbi6LsLa9VGQSKaF3xgv3W5ZS6o1dfeBcNMnwwEfKvdUve9kc4nAgd1nERq2TwL8aSeDiAANVWGtx48S9koix",
  "key28": "5ptsLSmfAwsatXTzJRjjjb3BmaoT35cUEzrngKf9b6WMg7dPFcTVNUthLncBiAKVc9ezWJpEMezjegwTs9mZut2j",
  "key29": "22CmTPKm7UchiESj9JVrGNdmLsTpRrpHGmWcFD8iftCfjiBbK925XCNDgaeUPLcsFMyyUpEwKMDDiSPbZSavJf21",
  "key30": "3NJkLCcbMTovbGStpCHbAGuT9mur5M6iRFy7n1SujeBH7XePTiBvRdkTitAaay8DCGUg6CyFhMNgNh2U4VAh9rNb",
  "key31": "5ADqRhDB6WyB6f5aPFEpR54osMbJaR49THLSMQnLM1FjXX6KfqSwoxGg1gZPKTeE3KhApad3o9E72VchbYWW3ZbC"
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
