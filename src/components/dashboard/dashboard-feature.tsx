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
    "SgAUUVK19yLZ9Z5Fb2bHBbz34rzgwZx7eZEEqUPYvXjkfM2nfGCQq4kuC4haZD76AsHnd67XwgdzJuFx253NoqJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zeN8Um8dAeL1Myq1VUQTf1YKX6qtHCQ8ESf45muCyBwK5RWCDRKRTTnGE6NsuYGqkAtg41Gwr5pLWTn6zQa5VR8",
  "key1": "Xs9A4HqjgBh8VRVDYEbjFBNde55ztEYRTEMhXLq3iAMdrkZTpGxkrJsD37yULPvcsVS6Emgj1kswrBdEvb66ahW",
  "key2": "35zECPaBwh85XswbwKiUimpuKGTJeS6C578WxfTmGY7Tn3d2Y7WnG6eRwLYX2zmV3EpGWLRYGfJAFTK9UDhPdMV4",
  "key3": "4Ct6KjdKfumcLBymcqFWKAX3eUn6BoSjovzunxJLcxR93Jqp5urxgN2aBqiZLxRLtXGVfSvVH18MyRdodoLKtuaF",
  "key4": "4gX1UA6r9EES1VM1m8mzPdRfNoD8C1x1WuT5YNh6xSGEEQ3gQkGn4syVgdN62zUHhu8M9LVk6NtAa7k7QzAEaKdb",
  "key5": "3ZvRdbDBhtpVtsDceiQVXkMvFYPfYYti2Hvffj6XCSqnjMC1TuRaXHWSKRwBp4xfnhNoz1WZTw9PJxRj2utfNuPm",
  "key6": "26xuVxR7NK2LfejzTTH188V1EP6JukcDAw3MCxHFcGnPETUeqYQS7Agaet2pmKLAy5MedviFmyT3GmD5tp2daG8Y",
  "key7": "4dgyMpf8wCf4LkWuLXTxPU7k5xAweUxuGsngDPsjcA2rpd17PbYnVAb3oAChPH2W6i7mgRasUuF3hyyCoky5h2cz",
  "key8": "dZReXF24ARjei6ej7WqRso5zn3mabMEUHRdumA2E5H5u5rWwRmztHfyqDtkVFaCdZgAkPvM9LABn5TsFS2xq6hW",
  "key9": "BMkNhNiBiVvAm5f3TdY98BYiTGZNfNZGMH2tL9B8sgcSsVU8wGawDy6oCQ6m7B4GPg9vRtrNU9qK9Pidgedt11w",
  "key10": "3FRw7w6dcFQmnhsaqZFXzJDpzZpJbBEyEZAXG8mwbi6cuUECT4YaZ3uf441LmhnoFf2W5t1PhkibX7ie2YRCQEUN",
  "key11": "48UexxwtiV9UWnawpp27e2yAwhYddvQnBxZ5BFtMYm5ZBCmTVAgoPHvbo7PyBzomY7DxyNuHffuKao1qVxUohjtm",
  "key12": "3FpUK6LTk7PKtTXr7HyUts8JScj6wE8UjMH7zJ7qnGc4N43hrpyqa73yv7MZfs2BMSeQ4Uskfn98A4we1cfW64xN",
  "key13": "4c6WMNesc3L62jscoj9zSCfAp3PYon5awu1FpqKKQnFnuE1aPoVXsf5b4h5388bhuF3N8uaywHxxqiR39PdqBt6i",
  "key14": "4E4fzTopgnyHrL2V9CxkzmLzje7M1nZAt1WgLncBXpLCPDeh8DrWMXFpgu6zNoiaUHqpebrnFFRCTKknzbXN9ZTL",
  "key15": "3cLLdHogSgbUmZMRvcLFwCbDagtv9aFSjnyNBzhdA9mgtaHiiWxxXScA7iiNpSJxCB8gCLLfCdSZn3Emka5hKbis",
  "key16": "3KCFdwWmHRabPbpwa4QBoRCnidVhLSnUXmLJgSNgxB2WaqZ24aP5DBr4bLCeBpzjYtjxcWS3tDZvhCperJDgQ6jZ",
  "key17": "3CqDTBuYTgohKjiLsUv7Gzvc5c5oQGg4BTsQ1WCAuKjcvyVRABruzMQwkuQjNj2347BGf2FcLMWowJkJMPmP2xbb",
  "key18": "2CrPJbn1eGAz3b6EhT2FBKUMcdo1pzNbLCmAn1HF4duvPJSsvfvyPnKshfuv6McyALRMrat1ZWSsDPg52MHhH9ak",
  "key19": "2ab6Nn6RBz5L94NTj1tzqin6TRyaswoCtmcYZUxByXg8A4iYBzV6jwvFSqzDRrfsrWR2XXUskp4VJQv9fV5SoANR",
  "key20": "4jGsXGG6wzg7oRDP87SWK6RB8CgKKDV4yDmFt5zb9thbGeBHbbA2S4dsr6RyED2Xn2MCfVLMfoerMHbjetUC9tJC",
  "key21": "AS9sRE6DkvoFCvY1ca4dwx9KMRgoujkBiVurDFrzvygiSRUxvL88j3ugVMAwuyqzpK23zX1vPh5M2kyQFGwN2bB",
  "key22": "3oR7H726mR1fcJ23bsDLm487nkCbWgQjVYB7LySgtxVqrp8A2KGnYhu5dcYjhvE5HxewcRGUCmNUctfkcwCiE8i",
  "key23": "uzGNipa4Gzc2rUXmunEQ4L1LPjPfEiJgLWriYU5UKhReiBqZibzuoAxS8bZh2yn5r9U4S2TBBKbhr5jBbhrsWMr",
  "key24": "4bt9ZHWq3zY5PQPEGUsj4GWWzgm28ms9YTa2YDSJwimCgwe4HyNYJ6WFaZogwZRDB8aU7nqK1TD77zTPJy6XaEea",
  "key25": "2CMJ6Y1QAVGcgDhfsaFGwJjtfAyeQDYTzdxZ1YV8PGXkAjaoygu9gQchaFn9YaLg4MzFhBV4VKJcaJDjskXoTi9s",
  "key26": "2ZJ8YoxGccvUPVJJ8grf7E3qUwEro3dUtwoqG4JpnefRjtnTLam1AM1KUv2LuiK2AxGhdt7uhkWbeqH63jRAj3M4",
  "key27": "4pX8yA6tmfLehhsdDQ268gJCzdkeX6Tu62tiZuajwQLxTo4yhQZj7USWzCJ2rSWuqum2LQRDg1V2H7cxxwtrVKbe",
  "key28": "BvuUeMqxTaL3QSNQYh8cdzRR5cWH9U7LearA264V4kHd8DFminTLSQtoB7xaoRg9Vb3ChusJVHtGAb2hnwyW8JR",
  "key29": "5rJcjaS7qJPhi65tE1iHWca2PyVzyDgZDs9CWsSW2Eg1oZHKV9om1j33upzqyj4kRiTqfRRWNhjXy1DuEysB3BZN",
  "key30": "3qrnG5rWGSipzW8nfSzoNDrqPCKtj1L87m1AtUVLzs7DBgh369QJUBsce21A7Ceiw6MWUrXgmQCNDHcgj8H1jTxy",
  "key31": "2Yhx8eoy56HEWDpTEX99p1URM8jgZsgkRhcfUL8Xj1K4zZNubYgSxSUiyjofMpBGvkSkLPFuK8QSa8on91Z8HhrD",
  "key32": "3YWGsV3ZCFcyRxwLVZycSAXhEmW2Bsbs3QCDJtZXjxNFX8Fg633znnkuWMk5tLUWYqczp7tuyf6pwqDauE52MWYB",
  "key33": "pAWS6EP5bq1UCPK6YGXN7nHAno7gNkypEVaEVa7hzd1uz5zfz3rN3jnizRPaQmG17foVqMBxJ97FreFsxa9jzrU",
  "key34": "2d6ikeHJ7AoaE9ZXH9DoWFcVfk5AKHjsTRfREdEuoKvGCX6ZWcoT8wBnAD5EyLY3kA1cP5DcTcsBMS1nBA2tWXja",
  "key35": "5adH3KirrqD2wFokGEer6gx1FHgDk22LxLqSiy2SjW6R1wXpUBD7fhKvZ4PUvh4C1LPYHdFcczs79FDt44xZEXt4",
  "key36": "4Ej1DvH8hSjHq6b7Tr6KFXVyQky2ELmsxm8PfGQjHGeGMzzH6gYZ3e7xqZa9Yt4XLU3D6P4QRqHfG6qWDZip6eCF",
  "key37": "2YfhXqopPc1KnaZ74d5u3vicnp2sE6aZd9bd3EesPhXYewaqxJQS96LLPn9GfQa83vdKSmqyk2e2Lrit252GWaUP",
  "key38": "4NXFdRH93w8BAYQFx4BC1mthjDBHTAP7vkfGUrvwu4c5DpcndjHdxTXfuHBXJkKyH3MM1BXcXf4z8nwppuLAsbqx",
  "key39": "uVpnYG3GMXursL71zBFRQviDBxb8RVpdWPXbo3rMWLZZu3hcT9owh3y4EQ9MJHgimw5fDCK9S7rw29M78FrqVsE",
  "key40": "42ZyDFKjUskLUgoxvDouKyeFveudjfsRX2AJFWcpfj9DWEXdaYXG3LFYzDoGJP9yx2GePN3G6fBDAHkymUDmXSL",
  "key41": "5N4YyoQV6qtN46dNysMM9dEsjVrX8ZTXDBgHMcinWrfqQpHC4YUp1DizjBRZrWm28whNZ3UQbnuXuUkhmuSx7TY",
  "key42": "2rzGUnVUtE8WL3j1BtdcXPetj2UrAJLtHvmhM2kK497SV2md9wHYmbovaa1BryooBsYt25vsAdfqYZnWG8Q3mgSx",
  "key43": "3yHBjJCxgYFvegJNYFxjnb9SRsL232ucrAZcg4H2LnS5xLWJ4iTtycNPbdhuR6wZWC366wvTw9hVekCfpfJi5sEj",
  "key44": "2zbMSHEXQh5emtwY1FgJBgsMqXNNjwoxmUKjroZFZX9znvQ5NqoPRWt3dsfaMMebdsLurJEFzc2ttq97RqPmXopf",
  "key45": "3eKhTxXdvFGje3gZUfacQUedC4aCEYArLAjU5q4VffMX8TgX5MwFx7Tk4bxsPokBXpFL27KgPGZNoRF8T9ZyJVjJ"
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
