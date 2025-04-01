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
    "4BEScSv9x9x598TtgGFNKuC5CtUgWEjqTg3Y7R1syMHSXhMvCVysoRjfsqTgcBG8f3BFRWwNmdPeqZd1Skg3oCm6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ynySKqRQdFxuvPMmyYWy8dtfjKY9vRxxYQ997RZpxwhyQYCc9jbM3eExUTB2hiv38qUNE3yB4u17iyEjGpsAfy",
  "key1": "4SQoTLDhiDQajifogBUEaXXHuXrCPoNzCrmgoq6HFHzy3ujZWagXZug8V5KSVg8H6iD954DiNnrYBG9PHdZW13Uy",
  "key2": "64YfCf8ZefCFcmCGWnqeirRZjsYP3V4bKmQu7hhHQfSs4hj5ksN48ZLyZPcYvjJXqvqSSV7gz2Kw39kvi4U8EPYM",
  "key3": "66kX6VLbiuNT5uKf3oWw1zEtCYbDuN8sBNJjmpXRefpNYdKbpYW3j4S8WPQ2TEHUg9jKsrhv5hTSStXLoJVnKpUa",
  "key4": "5NuhZQX2dznZye6txW2LrsTrjFbkHv5TPfdvd7gJjwSurar2LbK2LSDRwD6yHH5C97bicwWt8eNTYTCDaqdqmDCE",
  "key5": "1UoZqjEPpnsgtJYTnyX7iE3qdM823viHZSM6E6EtRbJp7MW7mQBb3rPHDLW5giWQ14qoMWmhUrrSzfp3BESE984",
  "key6": "3nRPxraEnbFbjgq4AR3hdFgYQniBf8sgSSSBiPeW1juuo33Qa1K3jaiUwRhKBtTzyt3VrAEKtFPQzpzjrEWLjc4w",
  "key7": "24y5hRrBeWetuW7r5bRtost1h5UiJrDRtjJSTP4GHGZ9uoosCtgdPXosMq1cWALHwJRGN1k37yCAyrRaaegcY2uy",
  "key8": "5eUDShmabnRDzQDi5tQxcaojTzAypTyAvpwZbvQx4fgwTmNfCGxtC4Wg17YG4v2XtsUoR67PDJdrHtYGgPQZ36iB",
  "key9": "2866QBw2A7wg9FYvc3tuTZ7E8HMPKyEEfuruZa8p6axAu8pgySRHrzqNcXbwm9bkH8shvzHJBFoSy9ud5uP2Cv43",
  "key10": "vuYdGjSEj17io6cy1HcUKbcFNxw7Pn2evgTep47RWY31iJ4qKmpNjdE9eLoaM6Wm6p9bTS9BbfotAzqr4RERgGH",
  "key11": "2ipfAmZzFFJ1JrVobDBaBataHdCq8eArsVyMq8KQapk7RmJJ8xKVPCF3Nvq1627ChVFw22VpWsYRcVjZL6ajnfzA",
  "key12": "3XvvcG7AkEfd2jmfzULJEWs13Kjiu1ugZoHLDuU72oEpMhT8dmR2Qta92DgJ7wCgz12zS7C3Zp524z9FTcRumsGy",
  "key13": "57baB5jSY5RpgJUpXXYcZuRMT6Z4igC3uCkWPuAp3VvZ5PgzGjSM5jnZcyfiGsEoEtjZwACxG6VzWnuYYsZaN2tk",
  "key14": "Gmi4US2UjP3g4ukRbe9yZg9ELaXWnSNTRSZFDLeNYFugcbDtywDUqgydAqG4kSTBt4mun4rdRJshdPf91rLWBeb",
  "key15": "4gauuiLTdkxBQqbcVfBDJPV2padouzC93HaGnAari78J3LfiTkfsKv8duGtNFLpJkbx7zsmmeLN3rFQjLWdTHJhX",
  "key16": "56EJk8Jm3gyW1huZy2pbsidY76jKgLqdz72brY3nxwJ8BfH7m4aaqB73JrqUzEPEQdgSmdKXg8zuxwMAP5ySiNd",
  "key17": "5CMik97Jo1GqcktF5vZxBKVccDrLdv4wEvGyPJGCgfFSk7GTQsareW1VAS4Kz6rS8ffP1ChQJTLFqS1ohgt1NDu6",
  "key18": "5fmLfMmFeY3kppoG8WdhGRudhMtH65Xm4pCQpuVS6QcLKmzMSrnHH26zay2soTXbAVb3uR8LLtkpVZJqFXrfTdxz",
  "key19": "3uijrLTbrHPYwgrUtZrxxZqsFw7epU4wmBtMQYc5hT3dBd8neBpMCHi57dGq9FE6EFg95LwsrLsH48XHESvGN8Kk",
  "key20": "49iVPviThPrgeisAhrD41sar22saNR29bQBYyPjjpeqgAMeTGqEju1ghxs8Ybj8f66uGTmaJYsjTjS4sVWXdPdWE",
  "key21": "4sT45cujRRnS1EKpPj6n1MP2cahZuuvtTQNtzZ2nZ8oCU1ighRnJTz5JYxdsA6c7WGyd2yvf9CNAexqUwV6CnfXV",
  "key22": "3kh2DKufYUBuQika6Gar2SjWxafAjJPjwNVvFe7qC5McZmJQYdcYAg2moH7wLdGpgy8JGZLoeVVRszsp8q1na1p6",
  "key23": "L7yp6Jthez4uyHAJvQ3Asarj9a5C4EeHA8AHQVjHppiJzv4knoZf57evu1YzeesDCoCaoZRRdXJ9qnvY8BzSJsG",
  "key24": "542jdaLvQrEgppUBauRe6twAXVRAucYy3CoWQygwb12KAsDGGf2nFE3yc2g5MjeQt9uYrBKjtrPGaV27Qu8KTBhQ",
  "key25": "gUs5H9Ux27hXCV52se5UKsBfCTA7395rerSnW6GxEJwRsv6muutvM2ZRpjaeozvZY3w5bs5qJzfteqpZLc63ewT",
  "key26": "4mFdouG7c3RQVBM7NNo6RtgFaFtNc4NC5bg454UVRCKibBGY72bBPy5zFts44MAnL4Kw6SCimbdk2JZ77RwSCmDc",
  "key27": "RUM469zsPqDqg18vqke95Ckda5E6xSFKgaPoyynpW5BwkaTyr4hAGLn65Hu9prk1fvBEtXDGKbSRCaroAnaLUV4",
  "key28": "4HBcV492kV9UJs6iyND4hgd1hfoDPL8b4NFGMJG4kUozwTqAqDSSkmTy9Rk3Z6eTVpn38GsbLX4A664XnmYuiXcY",
  "key29": "2752uziUmRekCXcP1SEk4T1G5UtTDiRacdqQKJypW1LC35sMs95WJ1ZhzxPpGLVVidw9qsSFnz83BHT3Q6puxE6w",
  "key30": "BkNuXJXyRjC7V5LuVeHA5RZ8fpd2BXVZm5RXpH55vpJv9FEXYDyH2v3YvMjaQkJczDLuav8QN38R4RZSev7RcW4",
  "key31": "2bK6YACZ8VmHWb6QXzCUwtKncvhRWj8Req6gUpbzAgpUF7UePg4jm1k9Q1CTz8Kpc9mXL4U3DiX7uwp7Cxaci3nJ",
  "key32": "3DxpbC7ftJvbgpkc97LG2oRHEvQcgpKuox8A6PNLANB8vuxnqBah5YB4jFHjY93fT9qwrEyQ7wvAp2EQPKJaLX6P",
  "key33": "5GzAWTXWiU6zgkKZnwZWSVoujPbJAF62ELmUrKsUjEsJuKUkhoafixLvmiPPQY45ZJvmNMVsrgc9Q6jw5VnLQywm",
  "key34": "3R5qtSf17WTadi4F7WVoSJwVtVh5NuQt3zSQzfjVHQw6H9tTmq3yTM6afADNNvpJy6JCiS9rgTmycPSDrr2qB8nf",
  "key35": "62duiaKvpe2t4n5vHhsMzc9doH6J5fUaPpHRUdu3Cxb3bPEMKsUqy8M6XywxbEsVrnhBJnXq3rvZ2PsM7TK4pf9",
  "key36": "nSBL8owGpBYKkW2VfBhJDEjuS2VpnTb3AMApbYisaC7UUvqkBRK7NBZQDyYe8x7fgjnEta6sPKhRfCieS4nKdSD",
  "key37": "eGXanL4RjzJjPfRbKbvDH3xzLN9C8JKGBFNcmX11ofbUaAinTh2yTWss9ug38Cmgdv2NnnNMHUnCGAgdYUANQKS",
  "key38": "5QdnjzmtcShUqdeT2wLemo5s3wyaebVZACzgSDf2dwoHe5UTqJnoHzqkPmmP7kpMmhkebDAVQoGeit2AA5C51r8t",
  "key39": "34Ujn8PvLZT4SpQjVzGV7dDbe6b99koZEwTK69uXPMErZ63ns9jwW5H79qoYMZmrE8Sx3Uv1yJ1nu4kYsKLmRvbJ"
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
