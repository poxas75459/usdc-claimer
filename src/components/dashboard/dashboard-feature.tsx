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
    "4UKqkP9vxGmf7tYD9qbW1S2cmisRu8ebLETEsV2k3mKHSNfd3awj1PJRfJw7VQYF4NWpngpEpJvhaFPRZCno5mPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ccn8Z9qWGx77Rp4aCySLjgAJPjFLVtpsNr6rke8SfodkZXchywDG3aC3F2CUDCzpUaA4D7fMzTm41M8J5PGtsbv",
  "key1": "57FWwBUBZev5VPd8kgptjWhHqLhQHMK5cCmirJN4da93sQKz54DuM9w2rXc5eSJduzbTpix3zboudReX4ZjA3z3",
  "key2": "3Ttt1qZRRyMRgGWhMpaQXR8E7T4nHuZfP5bipNwo3zBKdC3NYJgDXXknAAtJEr1dfoLhsDsxyz48nCabWeCyN6JK",
  "key3": "4jLK62Z8CyvUHhp5nKBjWdq6Mb4Wq4x3PAYVdgUwWiroYSruZP5xtdFoHSv3t9L9p1KRxuysd9sV6fto8iv8NTps",
  "key4": "5HXR8gMfJpZFp8ifW7ZJAPYSxGhnFSRSH1tBeKHSeKYVnU6CoCoLcWu1byWUTrQVS9g4gsfcLqXNxDab2nuAfPWA",
  "key5": "2LABQGR1i2FZVtuUNSoJGTDwkz6cqAcRP6L4dt9PPdJn2y1jFwxHohVZZFVQ5Jrw7hikAqXqwwLXxysGPiDtkQGb",
  "key6": "3N9LZbrJrSxmUuZ3psUEoxUZwG5rGiQKrdzmRHhEW17d3igDXnyi3t2zy3vgps8AoB1MkdEGcVHHTpTnbVZF2YkR",
  "key7": "5eZrYfkpacZXmGxH1C8kJGkv15kyb2qDXmFB83WobB8BoqEZ43cJp3PNUFZtY9a1YxoW62h5pKzDPVG9iBruhELn",
  "key8": "3zFv7K87tJt2EEAsnkfCeVsNrjkeWz2kPzLs2us7ehYY26JQnXTycYwJsrsyV63VvPAdoYhW8HJEvCfAwFrvSN6W",
  "key9": "fei3EGcYweWgyx4WT6EecRHTUa6gWiKEaZaHiA65VKoMaxsyYvMgr5xuvstYbaMgch1Pk6soYhf7ELYmRzf5xdC",
  "key10": "F27TXPzk76369f7oUh8ZyMgottC2BL8ENpnz4T5VqS4sZ8xWWd8cPpSgqoWqSSi4yFXHsXNCfdhzqFPQDVmd7ws",
  "key11": "38BE1oqLhyrpUULaLZCajPEuNgykX9cxiJ9GJZHGDRyK4aDQ7yzjhnczvbV2eDE8hAqwKoQD13oMuV3Da3VMUrAN",
  "key12": "NvcQuHuFTSrbTNxD4t5tk2xEFiUYsXbBJcRukvC4o8Nbfva2nq5t6TMKDGP1BSybBmrmHdeT4TpNPxuD362DD7T",
  "key13": "31HLv5yfU8iywgYdU9BUnUiBpZFyryi1LERrxWERtFTHCJhJutYfxcLWnHh3tj8G2ZiGcS2taW1NtGr7LwU7EVFv",
  "key14": "3mfnde3h7tzmt5uQMEgot2Gu453ZSyBgR3pLTdEuUgw42mz5dGQDY9cE9yb7oSjoqmTuHRpexD3N3Ze2qneR11X7",
  "key15": "4WKXZQQbAMNq2D7P6LQZWgUMA7vD2Nk4FxgnYjxp2ekRpyFCXwvuayuA3Zo5QRQ8BhA2v9s8y6nWdRXaReWz8SdC",
  "key16": "2K281WaCCvM33gzSAoW4omNYbd43F1DyoaypYt2rnpxzicA1M7RdQg6vaEggZnFNuVt96riJn7XVN5nPv59kSg2W",
  "key17": "2bgxrtC5r1jdEmcjhRz1xaL6cAoy9zDQaZuP3f3RKQQoajxvVRNo8YZxmjMDkcYueRqfoC5C6szGkN84iKHdVgAs",
  "key18": "AuB6BrdrpQpj3qzoSGAr8KkJ8JCWBz8uXXnm6yAXBskhTxPLnVrbhkXiADKyUibuv339CCCfq7sTvFWZZXvMyo5",
  "key19": "44Ecnajh52vg7XcDbKDbBMhiFQ8NyZBEWmS7fbbSodAZW3KJQHzoMVgtnCmbjD2ETeY9xFnV8Gwt4pasp1qyrcbs",
  "key20": "3MqAZZTq1UNRewTPjs42LZ38mZfM69Rzx5NpnW2P3Ni3CYxYnTGvPNFSSnJKRUJZUVcSH83pAAgJxyHb9JJ7gu8B",
  "key21": "63zgfHaJVDMqSjkeLsFgWfVHSmtxVcDZkh7PHb4HEFfe9CUqL2geC5FH8koDsNWLLDUT23fFg1BB6rhu1gC1CACx",
  "key22": "67fGdnUioHkuSjrrrnGcd2HeNKVudQTpHsne37qcRvEPKAETZ3vKn8ecr8GQgThZvE7CCMExFLdA8X3NViiUA6Jp",
  "key23": "5fGy61NBqCoaTat5GfqMYUnsL41awycRfpuT23LMagogHuh8bGyZh4sBLk5CsesrVeFyW29f9hVvLqh6vVrB37eJ",
  "key24": "BhP4fC9btPrnKPDT9M9a4sNkQ4wahAdAi2oQRCJXmkSgB6vht2AtQtyVFdpRKP7w8L9PAizQHJYz3YVYLzxPM6i",
  "key25": "3zQ4JYxuWV9wA8CfQFjJXGv3AnLuorK2XESRZRQxi5NwuYpz5cNWwytsPAw4qAS2266DdAnhZbE3vWnrbrRveECr",
  "key26": "3qF3kR93QgP4houGPKywcKX4rugeFCF6r4rmjHpVkpDxcM8SetZ7dDAHYDZW8qFCiSpPvYM8DoLxcoTbWZz39qhY",
  "key27": "22dqSX54hQK75GMPxMHfngEirnyEpBxSiEFekcSkk91pYzFpE5FRoAGgJzG72nxWk4cinHKatPtc6rVkdzAAVRzY",
  "key28": "51W5LGjuweFwGnHQqzL7MW9BoRnuBXpPn8E8ytRB5SQf5mMxbBK1tMNfDPrT8NFQ3zc2Lj7x9s83M5v66E5YiN4R",
  "key29": "Ac4VWsxiekKn7h7QqEaS561fRsjR4HvV1jTYLWTJQN1h5s5eGpW5b12FiLXtafisH3zvSUCZhf3SUtiMzDFWfAw",
  "key30": "2aRgE3imKGUk9GRXfhjrnkwy2XxYKDSzNidjr2uGU6rsjYaWyakCa5oPrzPTv1HpAniCkwnyAAzU7p2snG3sc9bQ",
  "key31": "4iBytpob9mjLX6n4db8dqZw2xTveCx5Si8tKyU1BTPVvVFmSmDKPdgjBNKApmmmYUAAicZPNvSSVxDdsRhG9uCAr",
  "key32": "vSuKdyTGPHA5DPADPTA8tDaZfcCF5i3e5nDCqFBFX3zwx4SHs39fyKbpLGQDX2ZYX548JHpxUh4XTdwzKKZ1445",
  "key33": "2BpubopzNPdntGKeBC7UV2rYRrYFDcNoeN8BQVCVB1a539P5uWYNUjcd5ko62wWAsbXNhxfhtkNdUrZ26CZmpYKu",
  "key34": "4RThsuLKefzhEbca5YwWQhsfxEpVASLKXEvuEBzc26oXbkyYgkFF9enVv23DFwcPKWkeFVeEqhY6r2RZvQB9ReSj"
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
