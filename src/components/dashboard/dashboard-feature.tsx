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
    "3qPdxBqLTPKrRX6sP6Lkyy6BVpTymZ8eLggbjVWLmjqYcHgwF5FiLY2VCEJe8vWQLuBad24x5S42E4WYYtP79koW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fVyfpaYA1iZyhFx3MnMbaRMGFi1GAquHEstDe8uHwGBRRanLEsxLBgQTWqnJ1nMH5XLsF7b35Lhj1Gdq88F8Afw",
  "key1": "2XoiXidKZrnUAJ3n9oTqmkiGCCUZuTw396hCpQiCcqKjRDvEpRvFf9cjTzjYatG7BQHzPRxx8tPh9H2HG18JAgYM",
  "key2": "CWbSviCVhEPPu3iaBtUxEUQhyTLPjQgyfEiVHsWKduj8u5Nvgj6hz4VyrXLoM3nJ6wBArz8kzGKN2KMec393EfJ",
  "key3": "2e5puKrU5QTu6vso8hu4U48EqXKvkmEPfTYunN2kRFJ3GP44bVLud4Yw6w1UxjJwRJDgY4GcF5Rs54gVjpUxyJgX",
  "key4": "x7b3jnmZ5ARRGuQrPXakkbATJVMaRr1vyZGnzRVsktGXJtKMsBLZJ3NndMfpk6cwCYAfjqUDJocczv4iEb2jqaZ",
  "key5": "Y8em7ysYGmn6uPzZ4gvKCd1WH4LNRp1rQWYzAs85uWKCwzzz2MysvA3yj4LosGVpPFARGYUiCSZ4VUP41tpbqf4",
  "key6": "AMhiQc1BTL7WFHAkKc4jUdjWa3S4M2YVX1yiD6bCEszfWQVhtZYMhesQNE7NgvbeZZGmbg4aXMZjG1UBF9qPZco",
  "key7": "3FKs3QzviwDBSpfhyWy3obghsfe11E5h94SBzVjR57TeeG19M6fAVgJ3mJa3CvbcfyU1CbHDtLxxBWZfz7akfBwN",
  "key8": "4qibo6uA4Gm2urUoNPmotWcpXN1EtPra75CeYaNJ74w9SErXeDka7r11KjsEmuKroigwHgr8JCgGtgkgY49PiBQo",
  "key9": "5cTbngeBZ6RRo2QSYkjmcMdRdtvGhGtHBTTCygzpyPEroX1AUKyyAkMtoFFYtjmTHnYRivHDnAwmqDZZVC8NdY3j",
  "key10": "ouVUnVZjepNZ3Y65t4S1SWnh7KJgN2ySCWTPxjdnt8ciRvtL2kcEEUDRyQYXmTc3AccozHGi3YTFQ6M3HzLeVAA",
  "key11": "5FrFUsCHun4VPsc1VRtfBvZszY8S5BszXvDBnAhvAbmQsHLoLQm7xe5tvhZuQQVjovW1Nymsdi8sNyDHLM5FKNGx",
  "key12": "KTNPGRub5s9R6j1gfMv3xBR21reM8Y5m6hFQriZZG9ZCSg6moDsB2H6CQ3S9HnsQvXwoDihnHyu2a3pz9qQdRby",
  "key13": "4LMHY1PQgL3LZZ444xdRmMBceKsDgBV9fLw6b7aBVjNGYbD1Q8sjWCPWy62krAjxMhVRwt9bxBZxLFtUsshD7GWX",
  "key14": "4oUVEGffMVEZYJjVjGpESxEx8dMvmp2obM9HrHxb2pXbAYkt7waVcPrk6Pfdc9hCxeoSpLnuTArMd2jvSD6PYqZ5",
  "key15": "2nqs1MQMAQGzes67EZBoeZJKbFhaXcpdCmtTuW5uMWLUWuAdAsyGkCf6XjRGDWPvrYzemxjvfWXFdjcjvECgmH8p",
  "key16": "5UXmCRSHndp3JQKzu1DVDdGMv2p7jx75P9a3CN4jYySN38tUJJWykq9KYMWfTX3HQZFMTRfx8VHM5K1CRqei7T3w",
  "key17": "2dit1h8chvtVL2ZVAYrHfSSPJ496rq2D1y5eBzAHMXxq3nFBnJzTShzgEgAzf2HZnUU1rT2Pcg8KhYk2GXWHvpmT",
  "key18": "67gGQGWWQCKqpPvzV712V5w6VQGSNNDd8i1twyddH7M2tsa3nT4zW3PRcD7jYdCfat7ES4sfgwoZVt7ANgS1rcCJ",
  "key19": "5B7JZiFgsj8Q1UQH8HsPPTJstTw7Z34N67F43hvvNT8LeQVEjGmHDtLndS3ARGZXZHtryxn1MDnVEx2gDQyYyXZr",
  "key20": "3hreHYHYXczvATtr3eKvgDb4uT4XGfPXGi9yJfevAWHQ1GJYS7n3wxT8A1279aVN6U5Zv4KCsMZfvGTzq87Y6Gh2",
  "key21": "25iJM7mMFm1TDwzVkdQD3L3sDzG3kZiNFWATzoopNLY54eU77sQLavjDzpmjzCBjbbi8twi2SHyVJVbBdzJxW3aS",
  "key22": "4zXp6Te81ZM7MQWXkfbeKZMzYzWRCCLASVNafyaEibnRNmZCfkMGK8ozcQdixDK9XexGGXf9noWsrnA3E62vxzyf",
  "key23": "5usRbsFhNNCnQqyiYigdwusPMnfe5iQ3GhDPe9ctGJJ5YvP6LsL2jNK3sJBbcSYnUbqdeZg5oZ8K3PMLBkuW6dSt",
  "key24": "2jLD6mqKj4ux4zCK6RtAgKiVxajvdsVpyHw7CJoXSKRkgRRtsq5n4rPK9CjVsNzPvuPBVSnfv2S6YDjHdXp5Ywfz",
  "key25": "5hdWoFHk2gvX1QQBNABazASCwnBMD7tNRCKPTtJTXx4U4jHdcMqreUrjVMTxAuTMjw3jisCiZLUMReQA5YsfzsnD",
  "key26": "4XpfStzzhFxF9v6ny5sx8LFwyAafsnaJNexkUpBYFWeRrEBRpoBaSj4qK8fDgmzTdrGFrQTHSowF6kumcc7QpeEn",
  "key27": "4xcK2nCe6GTiGsD18HuLSu5dkAYq2goVvQbsxWeWNyzRz7Lx4tZLZ5WA8yyJyqGSC7qsWbQGYDwbBmHhT15RHJeT",
  "key28": "2jqj1Ru4NDnNJSdP8MTjbL4mBQDhFqidiRDEfsXqnNhrzEua8dCPrgdpYoHx8Kx6tJYPjK3fviyXThPbUPR6YyR",
  "key29": "3o8XiQLHHjFHkn9m4X6ZKkDpMWwTPmrPdxwDmbVkq79bnsRPSGsaUTGuJQKbw1RkxDzsSiov2rzmVG1J6KKjbtEv",
  "key30": "3afh4ByiQixZRkhLD6Neg3dzVxdoywAahkkC6gLVbL8s7MWfEkQUmdKerL8veu7VQg6JYFC5GvjpJyqMrjfBiCxS",
  "key31": "3qUFtLMjTfSfpAmoZknAeLvCAwdsKwR3PEu2Y1b5vhJRnApCd44Nx3MJWouGZouMhkgntG2ecEgjMVBK6TWz1iJo",
  "key32": "4haFv77UpcPqREcLT9mnEvzvBdzpUhcZxeJ1UauaZMnqPoK9S68Wmuexkm9EgCQzjXa61GB55RSPhqTwvn69bNfJ",
  "key33": "5FmrKj65GFYkXdK4qdGSTMGVvQ7tHCgHSrs5PUMNe5GBGVKTyM7NngSWZmvZTSMQRLrmoBQsz6A8axSpvQ2dwVVK",
  "key34": "2X7dY5foxsX341WotpF4jvm1VmX9Kk4goknAvM1ZyFpZd3mU2YyVfm8DiCVBfkmVPhB4KJDRQQjWCqd5sCyjA2cx",
  "key35": "58FyvnJfeirvEP2XRBx1tJRgC9Ha1fSJGGgpjk6oD3jri7NcmXRbp4KYmGMzTMg59yvNjGssZbSTs2nAden4LDLT",
  "key36": "48bcKANZoJf15cwrkEDdSMo63VZyGQujdNKRUe7vVMP9Jp3tQTTVW9YV5mKeecznnWvWbh7C4dGzur2Mk7Tpugkr",
  "key37": "47XvR9mTNKUU2LdSWjCi5FsEwxmivL2htM6fwWvapRmU1VhqkbPHboGpzHELTZ4N5MnQir8AuFp2qe7A1HtEfp7c",
  "key38": "z9rTDFVL4UuG65yKb7SF3Vx1FK4P2SjGrCxieaab9Rd2SvKUF6jAu67y9idVQocNbZJr1yi11bnxg7o2WwBmodq",
  "key39": "4aSbD7AEtCybXgcU2sPvs8uxm9j2pZFhLF9Pr9atoFS1bA2xac5Kwbys7fHrtNXmm1JvVu8DzxNPtxLj63aLzVEJ",
  "key40": "4YQkv9H8AVf9Kzq8GLQAMFYKdY77ovibvjaPjxtFEh65orcC6A6bVzhRRdX9gxZy9JCcThQKzgWgucy9sqkkqhMh",
  "key41": "4Bouc8ySSNRBYHVAAhsbb5vZvhGndjdNTeZvRsCVeTsqvEMt8n5xU7qw7ZdD86nDa79Rx8rXQKdeLeiQkA8og5Y7"
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
