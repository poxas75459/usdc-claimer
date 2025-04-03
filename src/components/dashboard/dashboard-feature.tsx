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
    "5r7gR267eCa69hKvgckqz1ddZV7RsgkJS1wc3q8JD9CDBbvwbjxq5GBTfoQ2eMYeUtijmdsa9yVPt4RkzXLSXS4L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t6MKF4ZzEWD9qWvkHasfTRdKGKEiiyLjxnGfrYMGqKv1fNMtfuGjdboQTeQNGQVCo9ho9jS9Nx7gVgKKD3vXyF2",
  "key1": "5dU77vS36nY5NsFWWb7grwwb8RBuDM6KamQfGtcTrRdFaUQGBPqVB4Uu8UCQ1GguSisdqMzeKkUpFELQqeDogXok",
  "key2": "56n9i14Y9K8zGnyQc5h29nk9dUm1V6JTguiyaXmsze8CMiGSyNnVA7PpjvpRryCoJDB4tJuQstwacjgvT5WVkXjA",
  "key3": "3bebJK3Rhax4eghufUAWud7CmMTobrNdWV5oMmSSHg51KSYVkAptJp3YtQqf34q7BZ36Z76f5UtS2y2sZPDw8sbT",
  "key4": "5DUsV4RqFMP4LYZoTLKyXPKw8EMzemz1hNpy4ED3SydVGBHv77snA4gH2azV91D5b6hfe4d1hZCuGvxdm4pTtEMU",
  "key5": "Rbo1Z4qkFhkGiBFKLM1C6vSnRdvZjJFkdnCdLEiuzTDyRZxDLBPRb2y74vrsZYJ5ensFppDa9WexFJC1AtBCGYG",
  "key6": "3TRgBJ3NsYFHrs7uKa9jZpS3nkqF3bJWiU97zjfoaQWJMc8dSCMRgBXkomDA9jSVmjGYNXJUdoaDS2CAQRsWYhfR",
  "key7": "5qrMRqRffEN9KYRXLzuHbDKLbxMo4o4izniLusnZn1BTm4e41AnnjpGaczmLmTJmyoevwCtuU5wY7oMzHa3pPjFt",
  "key8": "9vF65yTvncvv5wGDco9wA4fkmpjT7A8dsUVESUr7fgUQaUBmi1je5y6xsQCB8zSScXfTdxTSDXyJPs5N7AJpQLk",
  "key9": "4xGaKn74ccKwJk6hhwuJhiuvNszCqmsu5Evp4T3L9oQv7KfhFG4kVy1SzL4N1QFe6UyGZZsVLTWJ8awTmnbBjvi6",
  "key10": "64RXRQwtLFZarNLCRkrAHTuZV96fs2zHQw8mv7nwoKRpQN55PGhRAu2zzSAjLmfP8j4jk2YtQheptRHzfw8Lv6yC",
  "key11": "3JJnmNi7hPt4JsaXNJHSA61zmnJ2De6FRNodaunTFNuc37DEriasfHwMkBX51yJwoGN6PW3MXwsfTtxtRtmRYyWR",
  "key12": "3FtCWxoLbX8Ri3fsfWssiKLLk4oVqCiuFDiR8D5MZFWc5MioDF9ZihGceko9zFhqFJ7e8mkbKe1afKQ5Ctg48ao9",
  "key13": "3CyEsrEaVMLcEKkmq23pyBL8RBj29A8R6k4MqBNAiv7Tv1ECeBEDkQKnGM5kzjdPVQQYZ5Q2oaHndXkfcBVpmhtE",
  "key14": "2mazXncGv8NnQB4sPWw9eH8dDBE6ikLtkYMcyr2v8eH5iX1XKNv4STDpfcAyeect1jMsQBUcgL1EiceKVNCW8NWe",
  "key15": "4Qtz2aVerHWbjaSzPzk9xqr3FuCasoCavfa1mHijcdoPc25tXnZcpu7SM3M5bB57hqDmzkDPbNckkMkQ5qn1j4AM",
  "key16": "WULAGyBXUFxGZFDxjfuMTA426BsVXfQzpgh8j4eCD8mwytVyw7UqggGcDEeQvFUGw44CCkgkr8mbPSpz3C7pDhN",
  "key17": "3sKDuGLGeyQJpdjWzsiK1UyJ4uGh47aBYLfkaugfjMawACLTZGM598LHSsaHYQfU2KTH69hVrS2Wkj2RG5rm7vxj",
  "key18": "LHq43Mg8tCg7BzuCTZ2s4YVfakQHHaXkGk3T55f3UkfJmgyJaptCSuadEDRsgpG7DXPrj4jgXskx9UzxdUvMbCo",
  "key19": "B1jUvQN4JiFzKsydYSnR5aNPS7DdLFoP52iYY3pbcyKmPNaBbFjEvVLSrD9uvMebYiBXAvyrtUU1iRU2WanKB2A",
  "key20": "2VDCLSXKuYCqd8MpyJXndHHfHEKkFQDsNCRFbQdHhyXkwqF5hpjw4JBS7x6q1RYJW8JFQGQAkdPSkS2CygVXAwxo",
  "key21": "5HkaAf3U6WkUwm3N8uP2SvL9xA6aMLtvPJncCfiRHk3Ghn9Re8nGA4RhLsuexNJLRK3taamrLeN54kNPgEHP25Cs",
  "key22": "5F6s7uyGSuNyAEzk6gkC1kS42PRV4RQBT5pAPcv4jraeVZ5QBJAdNYXE4b5YrbjToWxgF2Ke6w2NGMRc1b5phqkX",
  "key23": "3cidiCix2UwQQDsrvG2mDefse75tSfRYfGaiWPnxpcn3skwMJyz7ekygNjq7mM6tkR9wsQz1QKhW5rXCB9TyiJBi",
  "key24": "2cbeYSJLYcWQEqd61UwsBfcCPidnsXQA4xKaQQe6y7jmdseVYeBfkTeDesLqF2v9Ca8xSFV22pB3UU5BcvfJj6N5",
  "key25": "23xhwnUk15Tp9K3VWQAiRY6vZ89RipXAvebEnShhsuoeVrLzNcBv8jngtPGDtDQSHYHEi8qiUF2juFXU3WH4VcmE",
  "key26": "2sLa1oNhBwHsJgvNgij1DUZCxhQF3ghw6bms9b1QAq89fJs4bXorBeBx3czSo8ipp4tqMiCDBLPc5r7M93LCeuWu",
  "key27": "66N8r5osQix5CgDZCevZJp6pjQ1rwz8YpSH144XeyyfaQEugPEvacRFGSBM1tqqdVxdKTuu67jeb1HJt42h5xbRw",
  "key28": "2LvkeUQaChxo3RoYHaDQyNXbri7b82MpcBhV2bbAUivGnzGsu5rQXihCjPQeSWgCbt3MamUNJrX13iA3G4y348N3",
  "key29": "299hPSf255C2mqup2GQdwa8pzG65wjoGz4ufEqGwpk563YPu3BXEjTdYjVX7KW6FYpx5xWJJjw9Uos2MgfRpAQiC",
  "key30": "H4DzCHxYKwuWiocJrXxiqzPQd6GL5epKyKRDQ41MntrUQtahod6u27yQGdyKyUcYU19CynTugykZUy3ZdsicL8S",
  "key31": "5zEEJPPnrJ3cKHsdLcGbPvFisCYZzkhkDWqGsZqRmtN92oi66R96RB4mz4jtFkygirVKQ5nM7RoSHePrcHPCT623",
  "key32": "612rDrsRwnaRN9LMpnCiwbHBDQCJWLBKhdLwPnxhuXS3a1ihffGBsfvU8aby1CZLoSTq4w9NdNiuN6Rdus1ZSJC5",
  "key33": "4bFMvPgCUd4nt9nFau3hYTmcfHuZQVDuodBT8rk9aTNSyddtnreYentxAh2DFAKSrTV1NNtVQimF4mjJsT4ouAaf",
  "key34": "5MVpx8wcnWzuya8bEWSgMR4VKXPZ6ZkwzohRJGDhuRAWFB148zC8NTP8zjPQ5NSPCvxNfwYDjqZNN982xYyj3vXk",
  "key35": "4tbiqpot9uFJui2Mk9KhRGWf1YbZZKjVT6K8dDpz8rBk7w5ppnpHvb5dNbpjeGmuRDNgsKauPTHn1DBa12L3xDni",
  "key36": "3G4mFnRQt2eyDCXodd5pGN9GHghUyLJwwrJdWpaKarqMGHumL2tijhyuekj9o1rqeEkkPX22A9dyN21eLs9zm152",
  "key37": "57sGKUXBeV4h8pSsGwXFMb8WRAS37TNbwGGbtxbVKXynoErCy9K7bc8qwaLVp7GYH6w4FKAednnUFYSoJe1sLVtJ",
  "key38": "3ZBzpfjFfbkvhW3uS3SCgZgbk4TKmxVWum3W9QDp3q7N1qo75o85q51WrMDeETLYcn78HMit31JFfQwKDw35VeAY",
  "key39": "3mxDLKdjBFc3oviVGDysNB6CXUDpdcAiKVMJr9moXrSw929znaxYKSkikA5Ae28YL93B98x7yaBmKQavtsgYgL7M",
  "key40": "51GLEtkwunqPvpfsXXsbBzZr5B5kDVNSVBpfJ2C9whq4b5wEM1DTaWoFMhjYopMSgoKAEM4VNsjRGAaT1bBWiooP",
  "key41": "4ENvWv6XsiLDiHeHM1pjWF8uUZgyqR3ZrU2AarTQSmnz1kN3tT3FHqxykC7TmMp6TtKWM6fWfrqMwxk3e2eW9jro",
  "key42": "5jhiMuxwpJFXTuzGhBn2nD5A92kbjyi33Zscr7X6aTacVmPYQSi9MR4qnU8tU56mSpQGW2v7u6jogCZN9xrP3upE",
  "key43": "4Jr6FNCb7dVACL5z5UoePDow4FhFYhU55EzRekkdditH7PHSyXP7KJToW7YGd9Lwkru4wVxACSfPQmcQeEvhdszR"
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
