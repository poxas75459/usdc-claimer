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
    "4gBKe8971zgoaDcQ5u92P5xHX8Kc47ssAnfXSpdC451H4nobVwnyQH7oXcgc433QM9o5PwVHxvSzq1s7mdDexYtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qcr1vG5Ln3STGC1E2VVKkS48H9wBzzWbCoTzHXsN7dRoXZwLRVJGWn5BAb35ThYi45rjfxYmHF6Dg1nMX5B2Rze",
  "key1": "zb73e292AprgpQTQNhCwzASWFDs7Zhiv63x2wahtz8CBCtPYU1uRPq4PZxc9kJKFdQVKEjU8EoGTbZ7nshnNpp3",
  "key2": "PrJ9arLyRb91MRNT8jkzddvYk7u2Dcsu149hmy2G2t4Yxb4HZ7rcxyhLLHuckFuCVfjsRhS7s5i3KxngBqgqQ2h",
  "key3": "4wU5oonX7ozaqoX29XzD3MpNTdkKZukEBrG1KMeQMdtoP8r8c7cpPzhEQQ8eJe6GGfhBCqGn7AA8Mtq6XHzMujZA",
  "key4": "ammNcdPp5cXoTbQD3A4FttYcqjq7Vvy1TWRmA6QdJJeE71m8rGWMpHedTqcWKCEapPtbHv3oDii4fP1ChKT9KbY",
  "key5": "5JGy8cLmsAaPtoJyEYWcHvqbwgE8o7d7xaRBuBLPDVJRazNE8DQipcBGGZcTWhGkvnF2ZnpFqV2fjRV3i9yF7vum",
  "key6": "3xFVskyugFhcAqJkM7HggcuwENMXdieduE5ZMcj1TttaMPYtmSaX89XnMwiaXYV1UZnAArWwVvmYc1PbxBbucY2u",
  "key7": "2wLmrfj7acikG6PpHfHmj6bxbLzqhHDLRevSCrNi37g1t93gSxM2CrMy8PMqNyWcbhiqEgLaSUtCCCqRZrt9Z34y",
  "key8": "uxiiTe25jMQTfVyMHmosy84UEMSfq1eL4bXpoXbkai4AGXxoeJJnJjw6Dx5UdHHAkFcg83oZ3L1nJ94BD5xo7M5",
  "key9": "5mGvB7gHiK4h6oCpS4K9jfCXcF1du99Y9PGRLJqCg5jfjup5Eauf1HQtSRee6vTWSWTXk5g1UCH57JtZPMfzpgku",
  "key10": "264JxK6LuUxWFeKfmmLFSTCRejw8LHY4Q6awJTUsQDtqFT9jQuUpy31b61oeCYm56xM9yC9dZeFFf1n5qBP7jFD7",
  "key11": "MCScFa6hRjrQRggXsjqcsc5dsc8oyk4N2qrfaT4ufGdQWvsfyyxtP6Hfa9W8HLVoHCLA5V2DD1xH45Y4dJKkKCs",
  "key12": "2qSFRVQHeb5xHkLGK3enzGwMyest5emybZcgWhMQa4nXMRSqsi6su2FWUannYSdvfKhceLb9podrZnv6SX89WU1T",
  "key13": "4WUMXuvR9w7BEtJ34F4ZoKVHjS4StNirdpi68GZPmYd7Lwgf73BCkr6xJVRLa1xJbopbhEnGSosVzQfEoqPRJm6R",
  "key14": "VAxpccKuMQ72xZtiq91fRj32UHD31EUVwHpgGaWyxLhqNtJ5nqsrJH25EujDdy7HjYMvNkaCPS1iVhsB9iNfG9z",
  "key15": "2vY6P2T4xtW5dE61kkXeHBDdxeXVeUe8LmN1nwCA7Lv8qYfabK279b4BvRkPrkKE63HimhgXqBNxZJ2KdXS3MNuk",
  "key16": "47AyeW8uMQVEQkSG9fjXWrrnGSkNBQii6CF823vgRvNyp3wjtBQip2SLf58Zc4S2oHYwV2i5Lq98iFT3uAmuMaT7",
  "key17": "2KsosowurhPgfWc7Vri2yJJquqwniGFGDgPyZk9ZdhThi2eFt3g4oNiDQvQjYgEo1CBmEsQzTdkVG2XkYTJjTRf4",
  "key18": "2GFM7TJdXEWyUnBEhTESUDaVPWoVeL4YcyRhCgT8wt5tYS7z4TvKXXgey6dRktgd2Z5PtFDHuGGdZi1kvfcosAtV",
  "key19": "5t85UnDeQKjA6sYBWnQH2f53W1aciyDi4955iK3XQfKjVqpJxpaPjYj8gSbBJJzuZFUWZZt4CaH2Kz35wK3EXpjw",
  "key20": "9GkrtMHgzByrvWaEW4zbCY3MCkjFgeNxvPYJxFbUVjGtbTLXQUiRhVb6G3ekqSbbc5Jg49W1PEgtva2ja18pFva",
  "key21": "4JbMhjCSivYqjRQt8gYw68Vyq4uaMBxuCpSEQgWfprey1WqnLQt95cXSJ4KgrB6v8JYFeXfn66BczW1ZoSANhEV8",
  "key22": "66zpNgVX6muUrxnLdjHCfhttko2yYyj7gPzU8bzZZv7gwK67ACXWLZy33vHkT8BirJdzCAMT6Q6m33auoL1CC2D",
  "key23": "4W98TyektvXoag3DF7nujxzU7rxPGt9ikYDw4GKjxTeRHg1CxiF9XpLtJRqgokMscSQe7NtsyCfWuMmz2u6QwvB1",
  "key24": "3yHRTGpiTpeYjczv8MZsnQpFWPNXXPYYwjKfTdd3a4LDojgzFw3ZMrcaJmGRGsHYfaeZqQpf7r26r5Z8JjxEKxDR",
  "key25": "5W8Lq6pZtAPDDXTfCsZxak5GPGtkDm8SzeBSCgH2MvEyeVxmcWtBMWkwNsLTsErXY53uvqoDoYFGcfpi32QganhN",
  "key26": "e6imKmYppjfndogbtCv1eh9agCneovam3iCzuWMBMpP4DXyow2eGUdhfFUsMULkou2NDyxix3QpGdwKb95Qxn7d",
  "key27": "53Fds2aMuuMdKjwAwGk7FajJF7BFRaPhTg6cSvXWgMWPbWgMsNpX57f1Yp3G5Zvp7QCgckY3XB5Sp8yiwjsecjVP"
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
