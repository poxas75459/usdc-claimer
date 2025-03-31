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
    "3jvsjaL5Tm6Wgc94b7J1eTzDvjcrJxMhmoc1uTJnSHUUEKztMn3CtLoUfed2Nt927gKDhHNso2wZYYAmCxdQAu3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32xExwzybLHbtbek8XVrEysunS9E7qzY9xeuM5LatjdLmBAjEQs1aFv5nrEo3E4RBqS3iWHNr8kbCBBxdyU5aW7B",
  "key1": "5ayU4S53oYmTphc2vre4x5BzQriyKZ8pTJYovrD5En1nGM3s7jMp33Mgf6ozzDNpxR4128S7bj9yUoV5cTwcRMV1",
  "key2": "ckcyr83xTbc3CUHNumgJDQqfqgdeaARa1eWWLs5JBSvbw34m6pmCEiA627ZL9hfkUPR68UAhDFsaCkEmowGQmzq",
  "key3": "2QmqotDXdFZ2CZNMHFhQjMxjAVdsdESSHFmTmttynRa6JkBBebQoXdki6abzc1ZgBmCrQe6nrnY1PJ8fDL8qxTMw",
  "key4": "329xKMcWh9zdFoYNXkAoLQDWqL32GmGCm3G5zwNN5yGg86Ee4fpNLRYnaijWqB9SpkjW4PNAVYicDPhbUbavAh4v",
  "key5": "iwUqCqJxWq5zSjoQj4CneC8QyFwPzoyaoCMMrgmMySWcNvN2q6b4NtRkd8VyrAPinCBMvBadfVpMV8EZdpdKfcN",
  "key6": "5Tf8VyepvyjNYVbi1pdYdj28sK9VufR8XLaur2o7m2L44zutzrcpFWKVpE4z1CEe8Hoh92SKupjxJVpycCpFQSze",
  "key7": "3PWKL6iMZv7HeGn38w1Gcj3A2gun54nMFYBvSoksgVJLAD3mGaYzddHjcSi3DQ7VHititgjZ8vBtid3yy8GAkqmv",
  "key8": "3eKNQ9LXV6PMYFAYVrzGc6pbGMJrCd2CtC4GC3AfeMGe1eCNLTEhk1ssEW5bncebnLBXSsyBc46fWKYTzgwtDEYb",
  "key9": "vpxvf1Hze9ZL5SNHggeYtaHSzob2FQDwsnc5i6e3Gk81RHo8gZrbxq6iJv4sxyVBCRR5Yqb4zm9brJZbgycfWdX",
  "key10": "62fNyYJKQjHotUGJRagqfQYE6aHGjV1cN8uwSZabFCG7kKkJyAWagduSkjPK8Jov3uMEVmkso7XpTAPREvsdDydr",
  "key11": "3nFjxZr2st5ERCnPwqNdwWwTBKKkfKetYbGvLXozdJrzmnMJdz6pFiJRvdVtcJ8nz1mZnBN3Y6eya7rsqaDn2wjx",
  "key12": "atUdjeeSDegbniCDysBvvskBpwXFzH7k1wK4pgvwhRzAEBeT2k6pnjUjhvr3f5kRk2JyRb3fY19dLB5dxVnhWmE",
  "key13": "4dBseu9q8xy34AjJqbXv7wM9hR9HqS2VTYc3X7LQ3bSgnrGL67Z7e7jJAdmVVNL7r8NuRy85ao12jhAn8iiJF4a1",
  "key14": "4QyzMzHFASJnVE5cNyD3wmdNBD8yxFRHEGy92QATh9ncyAWzD7GLYDsieLgGMvB2TdDQQ8CCe3BX5GoA1X1X2Y1b",
  "key15": "3XbBVf7agNGFnrEZ48RqYqpvoxaLBYxTvhyhzqqxjEkaZtHki71DRz827oEihfEyvhNV1a5w8X2P5LvJefY6zJqF",
  "key16": "4eZFHdauXjn1Zrkkezv4uFT4WsUUerEwQMfhaBM6WebDCuQTZzyGQGiAnBvMtDjRyGZAcARF5LTGH2if2My81w6D",
  "key17": "3P6TSKvDWWHrasWq1KsS6oDV3Tkk4yPZ6R7YXEsWvHw1MCzJ1U8udoSpNhjneREF7j3Javm4zaHG8AfXmMEJuZQg",
  "key18": "2Tcua5bv1mQ28FnzdBcidm4okodc5RjZJEuRTU2zVzhPZHAd88XUAzFZJEDvPpXz1axPVhimPc38ZnfxGCULh4o5",
  "key19": "2v3UVASHcBLia6zrLt5RGSPseSbBjfciUpRKKEhbT8je3NiBGCrKEt2q9KjqkqKEC7yPkVgnbYoZAgESmgL4zpLL",
  "key20": "YJebWW9UBRTP6jKevFr8g1wWjU3XtxHgwPaiaN6uBwxHDYqzD1jimeugBtba7LkAFzzXWenZKM65TtqzEdRpx2r",
  "key21": "54KfTk6anSgvHWS5ekM9QKXeqBHJrHf1ksYauu2gw2bhyBjS8WFnXeZssQ6R5vUxa4phGmv7u7J2C5EtPCNvw3AQ",
  "key22": "4M6SPxAncXojrbpXa1pT9SFHbReYXAz5jv6rHysgTjaSkbBTyRHxMfKGqEyrmtZjotmCcRABxxVQX6huhDE8PHF3",
  "key23": "3CZZfWMipXAznzYjdZFFYnTH2PV5B56pi37H1MoRt2QDHoB6rudFphkNA9rHLMxTkYUMq7HLnAaEJFN7h8KKgNJt",
  "key24": "4W56vrP47rZZvt24NoS5TDw1Nt2tQzg7WKJPfdHHdoTFUtfyciTa351MpAHtXqgwoq6d29BBCfjMvMW3nFCYN7Zj",
  "key25": "inY4uNPt4jcBG6pV1tX4491njmxb5mH93NNQ3DGpJzeFGTsqph7iQM5pAzMp49f8bNxVwQY6DNZ7QSHZUEfc9CM",
  "key26": "Px6qssxdB4HHBHT1V1LtmDMmbERmW611QE1KRHY3a4FXNTLwBpJdxQpK1LN4XxDRaW962kpLjHkV9eFxUWdmoPR",
  "key27": "64qCpAUvfa13RbHdWzVQAusFGULWogRHyfd7LRyWspHdKtWCGodDmpEKr2Jk6sSbkFndKWanxaH2p1r1h65HP5eV",
  "key28": "5qkVEm9JfCHFivxYivBVCiG6L1nztHAY42rUAr83WwkWLXRvZNSRD5W9Ztk3tUYX38nudBaCnDPFqhNcvADg6Uu7",
  "key29": "4gpGRjQ7ncRBPnceqLm1VqZQUpP8ziDHmGCmWKmo35b2kAjg3SUi9Lq7CXUtAXSGPXZCLocsatzVd1pAjsRYVfG5",
  "key30": "2647V9RsKGpVMkPqRoNvj47L7Tjrfr9E3hZ8zsmmTiEKRnYDwv3eVqUweVH2HewpJy4CPtFsJ3NXqt8UAVqPtg3g",
  "key31": "6MLt2t3uCe4TT25HUChcf2Q2qFnU55nxTs59RQhkXPwsu5E7TAsoNwcWYihKt7hytitxgxxTwJbFzTnupX2uQ9K",
  "key32": "4J8rpFSNaKCK28r8XX12wCgRJrMcpoNZnEenMx7LLzySWqJmNQ6Cctz2KLPsfM8gcRa8sUCkLBFfM9Q61QaEYQJn",
  "key33": "3mLUpcpdXkR8JcCnXYnU2YYYiL5ygT6tWE4XSJpVns14Gsw6KLmscoDz7q3pHfWvccUEFT1Z1QbCvsXBcR9bVwoE",
  "key34": "5VhD8EKoafbJYhJ7r8YrF7FuTtTmx6df5qPR6VhYBy7w3VY3RH3anRwFCfQS2BnkEDMZ6TgeHQMkzrANCHTJKyVP",
  "key35": "seGfrztvkMNKo49SUMDbDQPmeyPpMdM6cNAYby4KnmBpV95KoXURuPfUPyUufAXE8Qy5XbsCiSM7EJLahRPJtZb",
  "key36": "ALhLCrsroPZRv5rUp3knbQpRRjffpQ1Pni4EKRndDT1AJboXjnKFgKMb51B7buzT4AhtgdwTocYdWRtQVjuxE8N",
  "key37": "2RGcr8jahGajQ4xj1N1ww5TLjGcoLTVqKoYTujTEyskhuE6qsGcFs3fALiNCcitLNvFvzjKXCZaQJRxj1arAmbp5",
  "key38": "2HZn6vTrPqv7BX15WNjpQbkm95zNXaMeiFZ1JQX3UDLgGFKV7L9XniHjgUDeb2uuYUr9BbhYiF1Y4zManAYx1vst",
  "key39": "2SqjxHgVhx6sKgoTFAfbeDJEct7D6qQoz3Xfp41vkYaBryy68q1cZkAjoujmpA2P5CiwpmFWBcxq9CcQRMtvUTe7",
  "key40": "3S5npqaE8CFHzhkocnMkMUH8mmrTcCQFmcn87AfKZF9S2ABXA3jGv4c56k9C3xj7VdwZvw5Pohj4ectm2oVCDCUw"
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
