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
    "3nV62icUJN1ehGzDaqKnwZCcSgQWMiJ5EpPDnbyjmR7jH3mrySp5YnEWvfG3KE3Q1ToXjoCQafBCbWarpHNuJk5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mgshvKwifW4M1Jo2CWaSZu6i8qKNjCFuAU8iyBQgLNamtXLZTT94Wsa4XosrbhDa1iUBfUUogCmjdEtunewYtin",
  "key1": "2UxU4bdXYRTrEmhZdQ5Yi33DKFT8PizTRLcCUtePVFD7aLhSyYpxGH9DPHGwpWL9bTkDP1dZCYTzJ8g1FfoTA9XU",
  "key2": "PkKauYbeEsyCYZEsimVLTPvhsKURRhe194yXCg5JtGbU1yP7zZ2DV8DTJhd85nXBtddAAdsykPndKpuwCqui2sz",
  "key3": "2uNvtj4xuwTzS7yeanoG2jrtf2SZaNBCnYFJkKcJLvDepNpgkzQ11tshCMrwpHM4ZtrixzvLa8odDM4DjCaB7jL3",
  "key4": "5iPQuhucumRdT9Ho8EYyibzue58uc5wFojFRUNWLVfsm6t96KCM5kjHGJ2TtUmttdnDEWa7SB3nkqXKAsFe7eDtd",
  "key5": "3NTPT6gwWTWY1k7qiPXBQma3NYVKsXYEzXh3NPN4Y2zdBEPv1pJ6EfHakojD9kgAZA3K2Y6rYNRsGANPqygQKmxh",
  "key6": "58dCfQHchfJ6SP6fZkk2WNgTWF2F6XdeDFJRvKAvVahJ8mfRQMWoDyC4UutXrLUDsA4nqkJ6wRy2vTi1xhjXBVoN",
  "key7": "3rZ4m16dft2kpptBgZbG5FJ5yBpQDqLWGJpU6LYkRzERFWqD9RpZHFv816bsjGKeVu4Sfax9pcEiXx5HyG83yAiQ",
  "key8": "XJyv6eYeZmyFnXs9HR3wbjXakVpxsRzKzv4DRwK6jetCkL4QEVf9sHC67bDwWWKwpP7D3X2MkXVPut5BFVxGdvo",
  "key9": "5WNNuCV8ozrQxFQjXJX18vfYGCn75DrsCMcfsdrJXLrfK7u38agNGHi1MYDkyFDg9poiadXEELKqHY4XEZcepyaG",
  "key10": "4hWyreit1FdhfJWcCJdFjva8QmsZ7EjNgL6i5KUC1w9kh2DtaBk7237tXyZonWCgXsLyPMDfdzUQHr1aj23GYuNG",
  "key11": "4cg6qa6wR1DhtVeviaScHSn7Hwe8HvGgqk7ouy6RnhLL87kQdystFpjoQZodFANp4UHCpCY1ZDjqNmN3s979NuXH",
  "key12": "3wMMpc4Mqc4MAn7drh2akQbmjFM4ikc4Q7oycKfenYHUdPRUMJXredpbHBqJP1kNQXq9BzxD4xRazeHi6Y254XPX",
  "key13": "24MoYQL8P5bLZCNKWRHxrAYBANSmBBxwpGqHUCiDocc7MDTCYEBUmphufwtaiq8DkqPdXQRSqfX9pb8irMiEaToj",
  "key14": "3pGEqC53XMFRrvzCTWQaTUzcHZmvgq58HdCnZzE98gF8gVYMznNzJaVzZZC65b17RWRArPu874j39fEZfzBsNStX",
  "key15": "2oJa7dedi428rgb6P4Vdz6ydVm5EXaL2JUBvYjztZfnnPKvoj1YaF2AEKQCyVWSnsNxx6M2uohnarWtrsWiH5Hy6",
  "key16": "tMwsWiBMmWWLWnzuu4if5h76GXDyo7iygaDA45oKRxLYaFFnL5GGm7Qm1nLoiJMAWf7NjJF47sdKhZniBPw3VfY",
  "key17": "2HAE7uvVAp36npu2GMiD6QPyg7ZRxGCKNbFxtRBjkj5DDAmmRx4ypk1oEBzNkdqsCovaE7Rs92mULnGbSCHAe2Ee",
  "key18": "5jbiBkyHS6SjvkXjCw7Nkn7S1RRBqGydbqDWsuPHCGUcJshG6SiNJygcGWuCE3dga4NU6mZxsEVVsN9nKXZGV2Sm",
  "key19": "2drgA4N1oKDmPRgNGcMM9mdBKM9TenY3vpNLep7T4vsdfqoR3L1bKRdS9KC4QkX2bJDvATbJckHskze4vQpauf5k",
  "key20": "4qCSWsPMfyAu9gD3Sqv34a9HnSGkjRadX5oNTA6gtXhtDaHeZzfwfK5w9jjsUQS35nmmrofqHYm9RdqQWdMAs2eT",
  "key21": "4fHdtue7QE7BoNxoey7uDNTDP7aNLb1sBEqdWbKfxNM3CHADEXuZnsJ44neV6m9gLwHXTwTEPMrQghBpG7qwvV9N",
  "key22": "GhGCfejS8mUAQjB1xWPiciVphNe2Zo19gVtj9dk97HRSxT1Eent3MEoAcgnCRJGzafFCsVeftHKK47cabku4JAi",
  "key23": "5UUQA4W8sSNf67yPfmGJXAFBryJS7Xh1pkPSfTddYwmWcx7BmkRMofTYgqVDUJN1ZWg3fAJMdcoh8M3VyRLSCv9u",
  "key24": "4cLMrY8tJboXtuVqvcCHGqVwHiMYkRYNDeFXXUX3wCP6NZX2uFAcAEeX7BcQSWamR2VzE4Aat61RQg4asgC4SdbL",
  "key25": "4zbrDgk1ZNxwYCUFkA1VxDqLhCAWeHEinpzACxvskYauEHADY7sSTfg3u3Hz2GCfXd2Ha4FAV8AGJdzQrTSsokWn",
  "key26": "24rrqUL9uzH6x2VnMKtPJUwTgviD8GBYqdmrZQekatfG3qBHPytUjgWqXGvrB9hFBTLHAs9zL6MHLZC2QoaquiMt",
  "key27": "55AW26J9LH8qMaFLK5F7TM3StX47RDxryTC8vTApeG6p9y8962fyif4GGJwPbA4FVREFwHe6Y4ovDFuvgxg4fLTq",
  "key28": "5t2qQum9zF4gJdzxGFPAd6W9UY4XBDnkyDp3DLBhXCUiuv94crubS3sMkuf2ee7phoiD87mE9fcLkFKLmXZWjdF9",
  "key29": "hNHBBdNZzpyap9RGzJeEg8noykbfvgncxrzo76zk9QAUCKc6JHZpsauvsHSxsFqdbjzKA7YaHDsGtn52Y1GbLv5",
  "key30": "Wmu8Lz2cueW58B9ZkdgZE6fYLDJCZmejHUASnJqvMWGFtiqbuhMnrNvdrDJzLJE1WJ3rCx9vmBiEkYBP6AbbwN4",
  "key31": "63ySpU7XibNVzQTQkYokTnCp23teE3ftiXdUvfKzM4gLUu23fZBC3D8ohp3g2xGHLF9J4M2Pfa7RFiTXE7zBqdf",
  "key32": "21mYgdWcsUvqxqs6sBFZ2LZYwGBH2ggSJbnzPuFshvTDK4fB34Mfq9K1uhBh2cD9F23zNWjXtGLfHjDc4o6U3gqb",
  "key33": "5LMxXV7dLTw8qV63T84ibkMFTajrwrPhoojtG4P2iYy37AbLhQxMhSz7ffKBpZ1XPiCqJJF98EC1FVWDxCtyH6EJ",
  "key34": "3fvqfZMuG985xGSdTMdmPTj4uJ4y2pFq7kb5XtgXPMbTwc4JBiyJ26Poipaqw7WqdG5MHSDyTfXdKPEpScckASFH"
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
