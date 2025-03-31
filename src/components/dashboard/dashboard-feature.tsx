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
    "5FYFvsiPjDwCDAbbhztaWctW1xePZRkom5ML36q6eTn4DR6MkNUrbti2s4VNtnQHS42E68EPRGPkVPF45Uh4uDh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CkBqfERL4vXpimwJTsfTwVrYx8rfe8wVYtoj1dan7UiBNvb8QzqYjnZ5zfVFtDPxmHuNR6TmFwhrNBs2h46hKF6",
  "key1": "447xoTGSwurQ9cJx8iW4S1VwyADfd5weS8hzvzdGzUkaHpLQYBTmDxx9bnMyJffY2Z31Fzn3RPV6UJtZtVuiwJ1K",
  "key2": "54BRfvLYZc34bjxPfBJ3rue6Y16KBBhaTXjoTJe6w3mnzNAUc7mEmC6nPr8yqGPDKRDchtMwr8osNzZDQjEpQwxE",
  "key3": "WzN2XDC4aUeztAXVyUuuLjKCJkeVk6HHoQS37Fz2KxEnoWFUX2UHrd7HJP2EmvBuXk5ZfW8pKYJmHY1b2ENiQZk",
  "key4": "2X4iZRCti6DR6ACLiru8u4yuaWda1H5QvKfssiJ2icPB61AjumBzDbQuPXjaYx8MqzFssyUSJgSV4XqRcC9S6SSJ",
  "key5": "G3RhdjeE9FK2CgTtWFBeSQY6D3yRSKhQrtT2KLyruKk1o5gM8YoV6QrrwhqNpT6ZGYJrHwvhpMr4Fcy1zRo5F38",
  "key6": "394DKKAhUtjT2vTDKtbTn9MWMwH3kDNErtnXQuW5Yb7B8fD4LjpvDt7AhXc67WszncuRWArgMp47qofD9RsvyCHj",
  "key7": "5aDabXC4TskXipWpDzUN6MecGwTu53LVbuNURoDVjeKh2T3bNDSnSEwnMJpfnMbLYicMxPga1vfhM7cgH1HHx2Wn",
  "key8": "37c5GJG3udTZ1vA9C6RsVpophDm2uyRzCPDtJgUSuzfLByDyFRMWznpLHwjq7wjEwkV8kx8ky8rL4q1CCjaueYxW",
  "key9": "32U6CXRsSxmUJqnmCT4gZHsJ2fgG8c4ZkUauJif6efV1NUSdBScoDXdmz4HvRzY65yphrBWuebMhRA2tUkyjWsUm",
  "key10": "BPiTmYMD3yjWjw2vdF2SduixomQYUcDkodRMVaSZaEcoCwU8YSb2k25gQNWadQppHqwfcBmiveA7SEx5GCZnE6i",
  "key11": "3iJs42ZhhkKr1Mmx33uPaTrxB5PQzCKJEGXgRcPdQYW4J3oTfDYgHU2LGY2xNrVWWzS6r2ebMKNTjiQfX1CHDjno",
  "key12": "2utWuehHZKsmSVETpSFD37Pey3vDMXoHiyMHsTpPvnc6mHwbsyXF4CoCGVf8gH74JADWqghCZMEHxUNPSTCzdXj6",
  "key13": "2GQY82XWHud7sWW3hAm8F1cvh8kAWnmVEyrT3G1MfHtHJHCmd79K4NV4Lfpa4qu6L8HhWKf2Hn2APd9rPkaJicvb",
  "key14": "5oPmQfvwUKxiTyjEJgtgtzH1xt4kvATmoJUnVRPKsMzCnMBcmA9QxpNmHBAhrNZECv4r6eJLhD5bqSVpNiin1WQX",
  "key15": "64oCJAdpRXp9aYsavZw3stsYz8evidY2rnH3jnT9dyqC96F7hYXdZEcXpiAHduTkm2cHhk4EBNm9PtZLmsibhCPT",
  "key16": "2k8ApU9KHagmidBUfKYwsjqM82kgPvYhbAjdYKaFrGDvuHQioywFn7SfbVKphNMKLka6xkQ8fSo34JydXmwd8ibK",
  "key17": "2YLJzrxvV7RA7a8zJHiwJ8NWbFD55kkix8yeDR3usTFSJ1DtcCCjF5CBsxJU1pYxQvcuSdL53ZStHjv9TT6WhYZm",
  "key18": "2xyxe2AGqAs3AwH2rJSzNAXBnwxiHRavPSe8Du8dMD11UkytoG5cfxg6BAXrXrkMxFMEApPWgvm9sG6krJBxJSCK",
  "key19": "2Ww6yW2xxmpPEQ6npLSqGAK34nC7ckHgju3D9LmxbXpwXhnLxVKZA7beR7Svnar5RvZpiapksNfQBatCCEXELvZH",
  "key20": "2UVNdMz6knzXfsxNv2SFZpGCfzFgSHozNKwvgFgXEshMtRaLD75oM6DDiFrjXQ3B1Cwmds9eu2oFGMz29HAUWv16",
  "key21": "65ZDDAPAH9C9rcuFDQbLmKcuyn9x31fnpcApFfF9uJ3TLqDeLyoDoqzvDvrt3Faydzu2w1JLbbN2phBWkU6rJ8CQ",
  "key22": "vWHXoh8ejp6yRedfvk9hsnDKWyN33fopgDJf9GR5oP3MLWiRQ49ixokH3uS2ydh8hREacMTYvBTksVXZm9Gtxx9",
  "key23": "2R944j2eDBnxjS5vYgQjh8ziFZiqiH6FNtQPY4XiZuZFAsCVwrNpvBkoU3MEYTj2aKQGt3wGuhmFqBjjPeKY9C4n",
  "key24": "58iyPGc48hVd8xVL1rmgf2mAxAgTpEmSjskstdX8MMJ15e8yynJnNxjBdDSWoBrC79iTrtLwsswBn7zQJouS5X8K",
  "key25": "23zEfV32EgpNQDBUCuVboqQVxV91jQRPaHQCoKdpepmzPvXAtQCFFKDYiyBimXVUA8ZpnfRUkbErrxYw5PoM2GYc",
  "key26": "bAmcZqBcVw4EsJVfwpkpi5QJ9DbGfywCGrc4WR57MxFZPv3nkfLSLv37BwaHB3B9cfiPQtx35Yzzhy7eZPRiRgg",
  "key27": "22x5LJkTvmDrL6XVvkPeQ6VMUAr89TiebMTFkY9ffi5ifQu35yJ8dRXgwaL6wGxaYSyXXF6kHBHcvwofnwFLL1Yh",
  "key28": "2i7jEN43b4SLQaVVBuYhSjEVrq6cFgnsa4HrrKTycmYGokc4MZypFu21JWSep7Yq8sBQFWzjYzDb9nNhAN4y8B6T",
  "key29": "4fvnRAFZHbGpUDGr7hnyBhAZuwF2XdW9ocATWK9cDMrF6B8cUeurbPWtzKXwPv2uBWHLfRhzTLW7RuozgbgGDg8",
  "key30": "3MHB5pJRsjCHkY2s5rzSaP8gj4sBvybWJL6ASvRLKMXeGKUMfUXvJHhNau6avHLhq3tKJMdVcCU3kcAPVLXc7h91",
  "key31": "38Vzb9aopUvV9Eriuy3LKeSkyRMGGe8QvqFNXXcz8p22WBuGdkbW6qJKJXq5Dg663sXUJC9fpCWfb33GvNbxGS8D",
  "key32": "3xZniHKT1rCE417sbBgfUnpTesmF98kdz3d9mxzFtZyXX4CFFrTq91L4quJ3gVqUteT7jrQLzQi6mvr26GzDWgM4",
  "key33": "4hNTG55jEUP1HWYYQyRu76mKiwUrBGpjiU3vvqBnC3b2N2QCcZa5A6xpTu1nzuQyEJGQN5GjrVkAMvdGxUZ6Szmf",
  "key34": "4YYot9sDfYrySdWaUsdMXzhesrNqdtDGrrVDpFKe71uNcST3u4V8Q9qWCk7duS4jKpxiCfJBZDmBvcdds4so9dxA",
  "key35": "5PcBDXWrPyFGzJtKDiCRfJFU6ShMVzFc8wRpFuJk4WdZN1oEaJHjDKp285eKJd3eW3vcRczePzUnoU7JLGBnFERg",
  "key36": "H5bkscQYAsfjv2vRgpjYLkDPAiDhJ6cKtuwPzZyBuAHUz8AuPpQeAyGGFZFSLnxQABV9rXcyXAqaVnNWKL72sck"
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
