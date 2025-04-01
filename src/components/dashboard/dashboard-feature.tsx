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
    "tAuGy4ZfaBSqMG41t37jxMXnZhxkJJQfgci84M8csQpT8W3vnV1vZdeo33Dh51XBzTWvQh8P1HRMhm4oWEViCrf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dyHmUKYPjVnf2xPh9GxhwifEB8EQhNpLfBMtxbybAYGr9GdcJfsbfZhoHnePgvP4xMx5WJ8To62TXeVGaL7pEdG",
  "key1": "5EQFsqukd9qKDef1in1Xmx3q4ntz2dQ8hGc79f1TX3Gjxq31aHH9cygBCziLV2bjHbwM326D7jAWDeAMbpSzHu8s",
  "key2": "2sTjEKvYgCxxFk3tgpbzYbsPehGBtupxQpPA8YfkxyY2BhWL5dnw67kc1d9mBUStpcMFzf6UVduEvqCe7uAtoDsU",
  "key3": "8oPsNZzme7wuD8jDvoJe897Tdi89buGHF1yfwokSH9syDYJoZLQz5pAJ2or93hzDfy96sLFkfdn8wcUCJve7Xng",
  "key4": "33dqE3XNMsZ9uMY76Cfx83c9jrbjpXUP3Q3fSXBP7CmgzEzocVarW16yNg2fNbSwiKHSxwBwuzSkchHgakP22yZ5",
  "key5": "3My3DPmmgTdnyTwMwefRPKken8TYNtpLxQWyTkNeKDG1Kk77q9WCTnYdJVAvgypRYycmr7mFnYRfruBgMiVDHZJp",
  "key6": "26DQ6kMumLuH4EbnoRb8rh4ftCjxWQ2xU3nsBCkwYRMTcfGgaeqRkqWdKeS257QUQmmFQd1asqUfCDygfxVb15Lc",
  "key7": "vybgBPrffSgaQoA5bwwrfqPCpBnEs65wcjEpCx4mMKf1eaXrJ55PEsDAdBEnfBsXJw6v5HQnSxadruCdFKtJeYB",
  "key8": "5TvbACgHjRSgnjVE3kW7DfQ7mnzsEnbhgcLczTveVPGj5mN1qYRX8w9Vg3XDhsnkogMsbmnx7dnTXxUFX1qzCi1x",
  "key9": "4aDTgg9669N4fsN4VAcUJ45hGrjpLK9L8kHTSJV3tnR43PVuZqNPADqPm5kPXH4CWunDPGx8EXLoq9GttoUwJyvE",
  "key10": "4ZNLFo68GkFDPECNaH6QSBK1NFrrnKzNUiWxHk9YV3tJFFqGV5KKqgNJufDj2zYLHZ6H9aWuxJDnFMtuYYxmXDJJ",
  "key11": "4KokfEzQYYPV7U78WWWMtA4R1BhKz62iaoNreV7e65Ba8o9pv9YUmLLrugjsFjEz39zgK5biTTAHFaNa1RkXztme",
  "key12": "4ooE8NAN9Y1FmPsntifwEQkzCLkmeZ1evBztEAuUpJVipaWgsne2dGqvyofoNy5AHJ4osAmv7vfR8ovXDtR75SXT",
  "key13": "4dBpWNydr9aSfsWyasiY1ivk6sB5RfeekLToU4mij3MsHa9Nt313HSSX3j1Qh25GRPvtHtQTZbrVaxGmn8p44rza",
  "key14": "5kEcdjcwvwK8gn1ZEtccUYzrDTmNjUCc2R82uuTEVN16urQEV3ePXdttHCbKFi6LURZHA3jSMgggSJkB4KEUJoxj",
  "key15": "W7xDQQ9NUpYwPxrffUsBLAbSk1vF8a1ZPPsFGJVEb9t6EZs1hmVVkrGFnPZSov4vcerg5TdUYhNTZgWY1cLS15T",
  "key16": "Apf2rsFxbdVojLSVZfcevG469jAv2jiRweuwZsddRG1XRKibLGhvC2uUooD6u8fVrY7KoEJsk2PBerWZdFjoTX5",
  "key17": "3yrrBbYFkP9gsvohBnX9DezudXHmhk5hoSTjZuLxnLfxz9RLRCXxPYvRB8yPvsjDyjxQAXjwfXdmBMD7HdNGZEMU",
  "key18": "5JMDQo3hdHhxiPX1npTiMLLZxggT6EYVGWxEANQAB9hyWpyPFN8UJrFjKJMzZeXL5KGtayBkWSBnqcwX8uqGjb3R",
  "key19": "3ore419spHGtFeSB81r3dj1w5aZtmjqVG7Ba7gmiyq9K1dbmAKjgou2GzDLzYTHz6PUjnFj7nhCUGY61mdvi9Pkn",
  "key20": "6sR5kkp7UnYwc7tXmqRQ9ZtDcp64PRf8MudPAmZNPTj7juDdhDZcLzkmpnqDWUKeteLGuYV2eZtPP5otb1eJEPG",
  "key21": "4n6KZBu9Ltg6u1Azw7puxEYK15dsxMQnyqTBYfXWYKdeP8gDPaaWefRZdbv7nwU6qjrCAo52hKMkicaSZQ77avMa",
  "key22": "5BjerzHCvb3PEoc9zWyRQv6BUoc9JDaatM8LAVYWhx9nv7YdHRsoTEVLijDiDSDR4V2KZHwREKuGkDod6icuJoNE",
  "key23": "3H318oud8oWsJRuXxegve11X6fRjF8dRR3MQdQne7USANBbtVeTtMb2vgFUvuUYgPKeoELoULZrSRPFsZXytDToX",
  "key24": "324qEXpUAcb4a5Ftf7GHDF2jWdUdfFxEBFpKUHuanbpLAyiCwJosdfcBNFZBLwjdbvsBSgkD191KaWoYysHpQURf",
  "key25": "2t42FXoy8WiJBgCDqTd3j3okwSKUtNcGYrM5zmALQa7TXmiLoAmCvyoBaX7noFvefATFQqGGGnZtxZ6FHLPhmoxm",
  "key26": "38PffHdFYtgf4HgAfD7rwGwo2dTzgWhrxoVVxjXuJa49Dwg5tLHAcirz181gx4QzkwyaSgbeqRjAwUocqA7uxWAX",
  "key27": "5d1MtsGauGFfx8wADtPnAHJRqkxv7vdvoN3K85fdAcwvz2f3NDtaddmsGxW6VZHoM9vftJupNa2dQsnW4wZCNDm6",
  "key28": "25iKo24i9L6TxuYcUu2muQv2GhGRv1ZbkB1Vz9PcEaNNmLM7x29XFFX83BbYLpQQp4GiAchqvmosDfngYRN4JMfc",
  "key29": "jA2ash3FmXLkS4RWRHeWA3SieArJBrDVKHW3kDhKTvLb8LJ92MsCHAP5jWK6UWr4B55XoAbA4n1mAHm8i3GuMkv",
  "key30": "3MKpg6HrNWRPV7LQM6PvScTE8nRCe5p94peq82mBGdfmLZLgbn9KpxwX2Ho8vUF66zgUwRQmc5tvSHUKZCpzjuPu",
  "key31": "2eBHsuWcbi9Pwz6KbRxDR4nw7Vw8MGHf6GZzdGcd9MHPc8xJ9m5HXZD3DDsHnz6B4BzE9mgsJV2u7YEmrEPFWnq5",
  "key32": "4Q6XMRUWzoQhDss5v8n9uKDEAdX9LdVH3i5Xq1SzyJteR67pvvZeWEkcqfbVy5Q7mktT8a67xzBAysXhTJgKWckS",
  "key33": "2FUHohQVJuRFRPXVnrJqz4EJ2FpzgcLG8XfoFm4dWX579GijkXcm7W7mub9kCLmQkuMYJuNsdUt5NWQJ9qfuYFG8",
  "key34": "2Kxqvrbpo753kbykNJ3r2SVum1yvDf7mNhWSvBbwDTp4ubLk4cDUyuV6rgxVW6avSHwPUCkrsSuypUED5RQxaTqr",
  "key35": "3b2jvb3TiGLCB3613odTVs8nDjY6d9gBLUvc12JD7M6CbCp4qQNHR67GpW3hiCmmBSHk58wvkKYuRz2vsvTVTPQq",
  "key36": "63c14EhHHbGevGTvJ2H5t5qSDP2NSigCu9yN6ndxcSV3UtL2sXLGGjG1qZCdm4tN311H9k4t3rFaUDe53shUYkCM",
  "key37": "3hSbAWzXtZ595TxHGbFZNL9wezoytW3ParrH5Kuc169sVNZmje4WRoQNhntqJk7mJMMHBiPVF4eMT6dSgTs3FRwa",
  "key38": "2JiqQDD5detQ8xugFxiJscWWWtGcpd69cKWyX7A7dsuHKcmYYuTAD7WVq4eA8pVqEAsHCZV1hXsswcHQBUALUrGv",
  "key39": "5iBs86WupgfysRyByUU7fnpvaVgMasbL7Dc4292k3Qh44HuyPmRVnwS4Y7tv8onsgPTmKwQW7mRSdH3zUVKKfHMM",
  "key40": "4Ypj5WjHf8VypueYS3shBdCe3eA5NFSMcNejoXv7CkZQ1RSdVDGGhjxb9vHBNjtDzMBexmYEoDy61CsFTrQrQtmL",
  "key41": "4HhaAkFb9TdCEeetbaR56mPxBMCwrp3xPe8rFvEFca1hzqc6gJjD8kUqhkXDqGsfbMznSgmMcZpex5fR1V7D9fJe",
  "key42": "29TtnPuaNYgjPwWPhumSLdvd3cDcx2M9ksXAupGPWcc4ySUVmoCXwUQvCsyjMCWLVvs33qxpt9QdPidDBC3xk3MD",
  "key43": "5N4rQ2hMmW9XT9c2sic6SPwYkj3D1cA1BkzFEiLn1EdGeGKQnNphzYSZv6TFXZFkTnHJektSzZPAMMZ6pkqMRqsQ",
  "key44": "5rcuZCsWHXQQXu5TTkSP1GTJxmNJ5EL3x8dnpa4jnynq5jdhMEytM7LK394T3crQwFv4aiP9sEBRwos5Hw8UDckB",
  "key45": "3wSg3NTNhBhFFaQEbDbNwg4zHRnTiEj6HdSgeMhQtAXjcyRYchNDAgRUuFnkEzL1uajdY8UzGryDFyzw3qMsBxgg",
  "key46": "4aTBLZ3koH1jNnSzdRVpQAhtVSKVHrDPs7TS1aLBhPgnJvTuvxyW5ojzC3JhAovgnhgYHUMJcHxvYaMjg6MuNqJv",
  "key47": "4enMM1HBUpRBrhi6tfsN9z4ZwzAUdD3DFnpXdsLPdVAMBhpzWKKm9xybwDUYBC6eiMPKyysSQjCaJMCCHdC8fLbB",
  "key48": "2phwsjMYoyZrwcTGL1bVVYiTtgAY4G663xxoEYErJius7Q5k33boH6PFcSMKw1gqMbX7y4jWVmKbNdYsvZv81TV1"
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
