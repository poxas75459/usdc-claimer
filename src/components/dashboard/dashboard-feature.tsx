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
    "3Syd9KvZe7fLWhRbuQSbPRbcdyHxPwjprsPbW5Qu65Fk3j7gQhiwtJHUWGWeXtGfyB326vvUB2nWGezW9sxFCQkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KVUsiTqGgYsus4CfexoCwuRLW5d3h23thzhfHbh9PDQ2s2WuiU7EHqakcwLQh5hxkDRxuFbavguqFwUingjjxYH",
  "key1": "2qbb58Wy2wyb19vjXYRW1e9GRGFuWhcoFPFU6vRuKphcuAxaTrS8f5nyXpGeGsP1zke1rGAmGxsrxMCP9efSeK5P",
  "key2": "3fEtdob3Z5CzAMxwEfUdyrTJ9kuc67F74i5ie1fsD4rwzkkEUW324XKdgBLRA2RRk9tzgPEpRzmdaoWUZiCTyYjd",
  "key3": "2oiwacX5kSVnMSycMRhNo9UoqYcKuWfC6cfQ5yzRxYVTshtsMhmuYE3fpxPEYJibs1aZqZfyKzASJmTatdWYMsRu",
  "key4": "5kvHN3UNGaFpKXwEUCcdRLn5w3v1UCcNazpnWyjPnVsbynVVVCKgyCka1EjuqmqL7nbCHMM34z42sPhdL2UKfnHT",
  "key5": "2LdgGR3AAkJiGcgVxfrBU6oD1oURskbH6EYLBDGBHjM8XPd6hikbhZLa2qoABumiHA8bgTaxQMEQiC5jbMXi72eZ",
  "key6": "57dKnr4HxVqYTLFJASzNXerLH459qBe4v24ASX8GRF4Yvtmx7BpStmXLRsAdZtvnLuqsDyA1XPgmz4VQmNqrz1N5",
  "key7": "KxXr7nX5N4zBMfjbmFwzqRHGx4bNzhLuT2CwNEj95W4HeAtEuLDagT8P8DXwauBLwioxD2QwMtDtqS3Yng2NhkF",
  "key8": "4MWZE8QW9bkoVMFubNUjdpQRwE1GjEX11YvWHTPYr8owjSi5bHtWRWLv8Moa6bB5uF4XTSfGQdRRcwix2egEzqZM",
  "key9": "afbXWf9UivJSWmsbhcPcJDwg1e2vr6LrCPiUqrD2ybP3iEiGKgc4XZiKLbPBDgPtmHvrBqTGirvmzfQBEiQjEwF",
  "key10": "4wKpiZivKS6g7A1s2f16Cg54HJdNkeEhkfjjLo2355rdsgMPn6uPTuQn65jhPokiFMhAUAoJcfLnaRWZ4tqxQhry",
  "key11": "5BNWvJnNFit8Kqcaz2Lv8k44sU23hpRCwnm3hGBKXPqdH26dKX8FVzwYG73R7A1syNjKG7BwkCs4QPTs2ptHcMfM",
  "key12": "5KGsmPjUtUrQG22YtZyory5m55vdiRg4KeRq24SoFHNVRxbGQMKj25wk8riVkiizRkMRt1P6PA85tfRBMLr9CHqV",
  "key13": "5i4FELpFFnLqnew7oEgJBJVxmWQ5coZzCJkeLRQUiX3Na3vn4XYXdB2GLMq5gnfEN5KZ7advRgTGvBEU4DHnm36u",
  "key14": "HbGJ2xUsFnZwzqNfGUiJJ18YCs2A4hpMJEVXZ73tokZRowX7snhAdTrVY27TRxh8v5hqLCJZzEoNkWe5cUMwjic",
  "key15": "3CRA8mb6V1RtSV98VwfiVBcFH8zX2hi92FBVdotaWZeA6BXp5XSwTn31HxDCqc2M26CW8T7WqtXSwnf4Q4p36ZMJ",
  "key16": "2rQDtktTgczk7VTs8FXy5eEmEKvJJbAtajMmpkgtjWJBmTh9qkxCMytV9GucjyDYscFxthGVYSPXpBAX5hmquQ2c",
  "key17": "4hC9H6dJD3awxPwL5fbiSjvv2YmxenGjTGkr262yUiY81uegiyWDTwMQy98eeE63ed7g6CvGEMegmu8Lhw5jqH2m",
  "key18": "283X5UFg4vau8Dnnm2T2tYKV5YffMcGmgZpqeTcu8YJd3MDukbGP3sWkxTjF7mLQrjQpcpgrnZcWCxAjzeevFU5Q",
  "key19": "3qXD5MocSWpAnQM6W7CSc8ARniUCiHm1KGQQ8DykiDtRpRrT7gDmDuEYjdfGVuSBTr5nRZkHfkewS3Dv5ZLps6Bp",
  "key20": "2gzPFXnJdiKEafPfR6FjA75LgjUNdsVLi7ZyUVXzAY7LahrDFyTLjZV3i9r6J5CiXHcQvfvEe4u8PgVeRRa22ptX",
  "key21": "48g12F48bKB5g2DBeknsSzwLcVqH6RRrGGn4T2gQaTwoG9ouyaKZcc9fo51ZBVQyX4EZmeCHbjwpYzUKgCuvCK67",
  "key22": "3fzR5F7J2r29QPj42HbrGxQNqdftqboenD8UVMD29EFLY4ys5AiLC32S2hJcYZWdB1Jrf6fQAfTkDp3wq9KWf8A7",
  "key23": "4fU7s1m2VmaXJ1PUpksFm8ZrSMAwthuVASbwS5Xf3WKnFihRtw8rZRbLmxLBLd7aWFLxKw71SKbVYzx5CKdiqY96",
  "key24": "2chzxrUTqPbTSTk2V7WPCsYSZXDsxmHxDhpdtSyHSPHnnfK1fcdNqVQjR9MQbAkvaxKkvZRp7eByNFthf18DhLXY",
  "key25": "3oqiM22Y2t863M3hBXJJKLF5y5hcxM57jJZGCBYJoQvphxSqp1xczBnbe6xTzGAJyFnm5GXznrqCJJDVPeVc4ML6",
  "key26": "UqqNmkB9Au8wg2pPw4ZMxP8ejVhr5uJomDs7spyS2ako4QEqRiofWSn1P1qVxncMUxuv3mNmMnphm55dC7KR6Td",
  "key27": "5uwQkQYt9mk1ZDF35qxkH9EiSonJ9GSmcLdv29a86PsA6CtAaHuTMhcC3ac74qHoLurLRAceDVE69UdphfygRCBc",
  "key28": "ayp3wYb3ibAmac8WWFHqbonoqm3j1LMQUK4fEn6gGb8eUYeqQ6kQxaUeeKVU6L7eax4JqvxRqv4dJQW7YT3KFvd",
  "key29": "4fBKy1qLUWUQi5Ht9JaXrbcmkr2GJteDKT7KiCY51DyZR2BEwYqrkRvVgSa5qQ88TJGPsCjYpUVumqiV19w65qbY",
  "key30": "4PsnXfE6nL4xdg3o6jEh3oNsMQnT8oGGe1VE3b85beoYa4rqVQ3vtgVxcFhxAgswCDEirAmCLqJqzFjYLSjsJUFN",
  "key31": "3N6HAdhJMgm3JU5D8KpcsrhZBH7NupAbvPPiw4xKQVPL4G4yMMwJXrQMSRnBKdCMQKrSA1XUTpa1erdFTUXKUXG3",
  "key32": "2KSwaRPeFFnkfCR97YUMHoJA6vX2sURMWipar8NTEwYGxe4NSd3QqAkFG6jCLePUnr1yRGGHVjUAPGuFG7ExHotn",
  "key33": "tV8h3jhHCRftzhw7cDVgrD3kSiD4Ba4U1bugz36J7wQT6KvTcxJgWq6h4ay3MtazQeLaktQ7o79sccw4LqR2iiE",
  "key34": "4x6vkfgdFicJZTWrmTdGGfSUbG7rkk7pmByqVRi76FTqUz814vH1eAWUfiU8XbrNd8RTmwBahPhkRRxgh1f7A9w7",
  "key35": "56om6qvxcifZ8B9ogvB8k7a6yXcycYLiA39xovqtihfnYgSPRjsraMFTph8enSMscYTXYpEzRzdSAULCjv4ydFeA",
  "key36": "2sEtg4siYao3bB3chkmywKzuusxP9ymHJaaQgweet6NQvVpwW1ganUSJqTToz5eqMqK38nKAXz1VhocWTSiFEjRx",
  "key37": "3SV89waeuuPP5NYHkYF6gk61ReME766CZZ7cn2jZLAKBbWEeeonCxvRJPUc6pT1rqWbcocQuPpLFLwvGJTL9b1wd",
  "key38": "3qCG1qBeGDMWXJYtJQc2hHDiozACHpxSJAXKNxrjwZb8iUxE1ZMeo36p9D4v6kcwwYAaqtY89VeKrBUwVKBG1LTP"
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
