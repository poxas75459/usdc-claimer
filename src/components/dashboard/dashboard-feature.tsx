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
    "54M7X3Sr7A1NrBh197dNS5GmMGMNxqpmkxFfmBJYR41C8qy7eww7mkNbXxTA2oVS6YkN8WxognYWctwPfhgJzDt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CXkFmF3jbeuhYCwi9pN3DAquQmcnPV3WU4M1YZ1BCk9Dqx8NvvxNdo8dKMxv4QZxBrTNx9smq8CGXbw5doKrHqR",
  "key1": "62reLEHeBtzxvL9Y7v62wpRTBvdoQiMPcFgMbNdNwEHDDxf8FtB15kS7Sx3K4dsix3jcbFDJN2LYaDZRJqsiTp3N",
  "key2": "2qkdqJCcsBXoXoMHh7NpouLtrkbijMQvcCqbjawahrSc24zgomecHKUU9PMtrXG6adt7oPF3ME3wWosrb2AFFGxv",
  "key3": "24guPDupYEYJ9k84poao1xGT1LxJRKfcd7DqwBtc24aKU4rsKhwp5A4VrXbmBfZ6TwZjxS519CsYPN5iptZ2XnDu",
  "key4": "3h4sxNtMJe4mFWzTncbvYd8JTq2vh8QUz9T6hXsD6ofkiAxuwgMQe5ozU24nWNDSnTdTLN4zDFbBamjc8gSQcx5Y",
  "key5": "637EskAbnJLGN5485N1ZgyrvZmX8uEwMPNQPCV6GVD1yzvBnM2bBsiE2onxJRAFU9ynm6V92wa4CzpoZNbgTTJEc",
  "key6": "WPVp2SzJmQFjaNwynF5kWj3T2KAtxw2XVdugX5BiSaqjEU6XJrcQa2i2jm2chFm9MvtVCDDpaZnhrK9aPecMbxw",
  "key7": "Hf8o6nyBtLKCfJt3y9YDoD9Zc65xReEcGKHMBoC7ZnPejUQiSUcaRgje9C7eJaDKxSX6PZBBScV3XxDQYjZ6yab",
  "key8": "39wYEL7RGcv6gsJVGrB1mMb7gf1shwRAdtpQei3DFdgjVqBtx1Qx9Q7Vyyax7ThCaWxYY1851P6y8QkbTubVShk9",
  "key9": "5Uq5L65rQs2wADv1EgMjuTnyZrSiNecQFKr8iU71QaVFkc3R3eFBuefDTEeKSdmpDerM5EFJ85J6tGihof5zMfeF",
  "key10": "W6545bjJi9HfJYqKFmX3qRxPeQK5NknEapK91g5LWojUrsRKf5MyqSbHtkDx1W9YkyT7N65NajsUyjbKeW5azQC",
  "key11": "RDx4jDSWi7Rvd5tbKQBntqGHSRR5A7dCXpekG27UAcR9b28Aj7PgYpqxgVw7BeJqFyvsZ3zCeY1L87o3HszL7pk",
  "key12": "2QEMJzdgeAvvcPTMFa6qY6tP1WxMCZtTXXh4gMvtf86A5FTQbcY4pB9kCa5BErYUtZvf4FWKCVAZcAz9LKFANKrR",
  "key13": "2LECfSChQU5Goz4GT2QDjKobGESCndBL7zjovesv3J6MfJE8rBKJ8N6XaVrBKKNzy5bJouRZcxfRUyeJfugf3jWt",
  "key14": "3ZzZq63Uo83zqniBAuW384j8mJjZJMUL3a3rthPisokd5J66xCiBudLGisoH64EHr9GEWYkt8VbbBzeuqE8qwwWK",
  "key15": "4S8bKLFHqg8LtDEQe739FHzbHNp2JYcv8efVuffsKhPQTrmywtqZW5Z4H2xHgE4xXp6dLnRS8YpBWURaFZco3A1x",
  "key16": "2ZCQFea4aQ3iYFqcBMw5Fq1Qjt1PvB8fL1UxvArctMwW6pcpHiE4qX8mgaQH3VtuHB2Ziia15FRZDUgu8r5WcDMd",
  "key17": "3o1xN3DMc6AfwR4diyKzp2AqzVUCWvmbwHSg5q5x9cScjpNR8gvG3tSUQi33BnWvYYoi1eMc5KvhdThvq7Sci3pC",
  "key18": "4JhEmB2uptsjdWUnZuFjoQKBgeJTKMRCozHLg1xcwYWjoHYLaJJv2ntba1Vos1nWayVsE6EfaLF7QFq8GXCfAo6s",
  "key19": "2kiMNTtofSAQAG5VSeHz6kCmPcmSxeRtCFu1BdABS9GnC1piTfMRMmQawo62Gci5CrGp5Z4ZdRgfcV8WSdvDgPvD",
  "key20": "4ug6z3optv1cu5F1PnJtQiAcgymJobaqnx45MeQqCtosZZN7FQ7bnwsyppTiB8YpRZwFUxqimmHhdY2kDq1fu9gW",
  "key21": "3K6VmgA6KitrfwP9eWD6jsfMd89G2xYNYvANc2M4CYVM4RQjkMQ7ghmzeBewo1vHJsbHXzWfgvo2kNWjnid6fBRm",
  "key22": "54o17Fxy5ctNqx6iKMk9VKG1CSR4LCWSYCxBkRDq4DdYw8DmiZqRHLMvkGv7zDH3z1dM6HRFxvnrpKmApbchhYZQ",
  "key23": "pat2fVNCNFbyNo9ePi6DAZdPdNf1xkGZwtd6boZvFKFMC4nCiQtHi2N4ZQPvyZRha5XUuBYmuW1S4EtUBRakeda",
  "key24": "4gXE6FmVD6ewpzCybtSfsKmvsuRkr9eUy42DyxEvxqoJMbKWNpGzp4yNQ7xKdPDJu7pMoa2b5ASuKRQGgWTkbiJq",
  "key25": "3rnjSaxuQjtGkUcoxA46YtbGkRR5sNoehyAGTTGcgNBuPCcaGppToHmYB9M77Q44XCpcnYZBM1Tb7SshsG9h4fps",
  "key26": "2e2DcxWNiEfxpQppJCt6owXqGpSSwxqGeTR1m4WRjCH5w8EWdVTkXm9hqqwekvoPKiNrHoa8yrVPEqFtbmxng9EF",
  "key27": "vAczvPGKVJZg73ZATCj7AnJ4Pwcqb2JmgdcgpD1WN46gesrJZ5ekrVajn5Hs7k8S5hkE2Zg7j7dtCwkpsyCNQPX",
  "key28": "3rRJWq6DfZceTVUgvHRALkaRHe6v3je2MsBjHgGsJfGDBAQaMG7pkN6sEMLZABBvoj3mVav4ikuKTswJGAPzLYrY",
  "key29": "5kFWhTevwNJaRFjz65R5ft8N9ff4PUmVp7ZMKbZfNGN2JpUHMEEcQ5Xb1s4CbVjWG7nwKoSegvr1X2FHMqKSNKL9",
  "key30": "Y8VenMU6xJoYzQPhUnRBuyih85CguSLHVss7wenysMtTCsxf4GbD8VSUeUjghDuiH3c3NhrYkn6H2hhQmwKtrfb",
  "key31": "TtJ1qe1FJ6NgmZhYsVD2UJEvbpgDMd28xyr8zoxak7bfRuiwE2UZQ37X1Rt3c1CYa3aLM5R1S6PmWHs2ATBmnfb",
  "key32": "5WXt7fpKBmGsVrQZLxeJLqqJ2nBuf33zLHwBWgYD3crer7ao5ZW325s6zVgS7wb2sP8hJge9QCuHeng9Q62dSZLC",
  "key33": "3qvjWSqhtKGZrtU94EqRMx8aqGhZ1GzTgKR29G2AMhtPDwtqid7v62jUT5RtHAMkt7Mdyzkf122YQ2VLzYUvkbXZ",
  "key34": "365JVQbwHspHq9w85tFosuNxBEcRd5zWu3YAgh4xczvGAJW5QJQ47cVXqcX9apDBW1wwVUXtQVF2ztEtUfHghRme",
  "key35": "4FoUF4mp9qwHnCdamUAzLKCh2GLFme4GKGtCQSPgzPw88GhZwArQ3aqsBNKTwzACG1kdt4KGhj95YSqaiYnBVxvr",
  "key36": "2f39hSrZqcSKjs4PCXYS2XFEWbXUWYo6TCcGyeX1reM1d2fetVY7mo7E8hWtDiBGGwpiQrGdXz16YL3RAuBNBSU6",
  "key37": "59LHb4LrVz1avEjAHZSi1i7Ds41FHQpNxvuJvojQTVXxJc67bp75vsZ7fnJsRsPZnWtP9EU6LZbNfEbRbde3x2Za",
  "key38": "2gHC521x2a5nt1UjmZqBGtH4uQKQxAY3p2PiZrg3vCjp8Yq6qX3GE75b6sjpXqabdpB2DPHGSAP3Xr74t3gb6LXL",
  "key39": "5Fj9DGX4LbQSS4gny1A17RJB2UhTm277d9FSTncwJ9ZabsQRbmK8sau875tK38qWeEZ3zQPcuorFMLD6Ft5gZTHL",
  "key40": "2pQy1yzyfa3mjn4dYe3LFppsBPBAZYWZuQB16ec3HiR6SKCRRZF3UjSZ9yh1KXXT6K4pBQdP6H2zSTubarKYZaVb",
  "key41": "3hcwJtNn38WWsZ5K98Qjqs8PnL1HYLRrpKdcYxzSAsPyHZvdFQdoHfyjkxuuJFpJ8zYy8u5yi6AepC8xff93uHDm",
  "key42": "Qx2mfqFWUb5oSmQUZ9p3qEjJKVJyjSYdXhEUeUs9dmjC6sehfLLaaiBfTaix5XzEeignW44jWeWtQyTHV51Pnz7",
  "key43": "4oFFAwRSsYCGEbN9cDWtyHXCochh5BoMPKPyufwqhMQMZJ2XFqXvkAURuozxggkchgirKSBbUx4iJzGH4Zm1ooQb",
  "key44": "mTcU1H5v3rqEwE6x6ArAG4GyoEVduunNuPPxwyyDwPUUZiw2kVFEyNfn25sWfZirMxcLuGp1B8dXP9Ur5WZhtwP",
  "key45": "M3pUjgK4V8c42L97BHmK6YX7RhWerjhRY5yLQkAiazX5g6HBv7DqvJChERkUVCjwNbFYV9fHVTs5MMzp1fbDKJV"
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
