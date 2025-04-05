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
    "3JAJLHSmvuN1TbrfrWZtixjtp3NVL94rE6j2SakDw2oBgnxQMckTSjMz1DqxRa8WowpSiCuPnrCDe8Ac6N5KSdva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nunLGBe1kEJ1NQBxFZUUkQ8E6pgaydy5EfAZj2PvM2sU8qk4NHEusA9BpkhXDeTErA4xm1hWCLNUoC546uokUo9",
  "key1": "r9H4kMGwW1SYrfFugL64DS3mt3jPwcE2tsSkUCeTWA2AUBWyYqoMX5zRJqmkwahUWFFr9KbZX2qC6T8wj2suM1C",
  "key2": "phHFgNEZpRuPmauD14JafabPTmvHF7xfnZmzsp6nm6W9WRSR3uvUSNkWWLFtVHNS4DNqPUaAoYjCdNs1fddcmTe",
  "key3": "4W7wGCCsXFTApQYeN8beq77rR2LpbHfQUqX8NeDuvyRuDRvytq4nJhxnjtBbd5K9s6xiLQ4vigLHvK1FqKbxcxL2",
  "key4": "3g7LpivXkuvWGq6ckkftMDJoTjC2wwmz5b75o4jMWvJF66Y7XpvDYHcN1BwsgutATMpLm6d5eghy3n9gUSm4XYKt",
  "key5": "5o82LXNPN4SxvHkgnPDYNF5tnDriiAhcVncJ7gQN9e76SzvRpbAoYcAUTay99fxQNHxhzT8w4zYv9pbvn7MV3eLX",
  "key6": "5uhb6yE2MLMDPsk1QHhspVFCt9oiTKeEj6iq4sWgPisF3DESswRdKFLNfE9R7Zkkg4qzYKFcA2PbtBoQK5vhRmyq",
  "key7": "2HwKiRuMoDjatvXUfAoHn4yLEfHY6oadwLV3z6LqwjTDb273VFoMVWcn1bGVbGsq6F6Ss5V95BXtbH5TGF8P5QTn",
  "key8": "2pNCWeCVgLs8gXFzcAANydGHQjoWyvhQcUhVZ9DQDFmw1fKTyg3uSuh9NkVygrpi8RmLzrij3wqJHDD8eA9s5TJP",
  "key9": "5Qr3ws4AqdjsQtpYKgV4kMUcT53yUCQwYz4o1NFfbbBkDLAPxgwmNZMhT9THmMxSqbYQSz2k1ep27zaYs5C2s1Py",
  "key10": "26KMnf1Dbk6dZguhgEo9gYidpYvZHsbXiMHxc57CfZiAF3Ffx5imj3keRQJu5StZZAZM9fsDr12B49sbht2iZY3D",
  "key11": "3e7zjDmNdc8TY4QaVowz8QPZC4QvCXDS6PZefipsYhbzxvtnjx8JzpAygfH33tYGi5L1xnYhmMS6AN4WDrQDn2SX",
  "key12": "55qrBL5NGEAEyiN6jJAYi2CSNJejWbGoiCQa1NYGvGQNJhwfbUzGJCoFQd8oW5qT8EkL8X9PAinLEuZFWy7iEyx",
  "key13": "5YpGgvdPqzgqAQngbzZ4a65BT57YYyE49XUvpUfPXeNUSWkg9tSuRV6urndxBKfGKnLXVLQQk52HVmwUQkeLSizr",
  "key14": "3VsDNPinD8Phykj4NTCwVFvSvpMNcGzBFi1XJCAYMQYGiEQs6ga8ZAmhx5ZhWywn21Y981bDUp5A8JaXnv8ZediR",
  "key15": "2d6Hy23iJPhsCComPBVbwA9zABdgbw27JzCcdGvCXfGtzjXFThwTCnCZUj8CcKgtE1GLF9D3wQZzaQZRnMZkvfJj",
  "key16": "3KW4vayuPvTA9b5WYSyboqWWYwwkuHquV2oJKgPSpCbEJ7GFzzLWbK1x77jv8qXta8duyMqtZyTwRgWCVuw4tuof",
  "key17": "3x2a3aUKSLaGUURSwUugVhb2GhNdxFQKPRSaij2QTB9KeokjaQSvgMEjSuTyydjoa8fHtY4DnzBRACLTqzFRSeMS",
  "key18": "2TPEM16yApJyS9YMRCFCBL8AUaBCnrLKyxWQuYJhe1uhPRkAQnwhzMtogn7X5zhpNpiB6oSeGVWP9yhwZnib4v8d",
  "key19": "4vkWsaYpmFYvjhT83gHz9oXZqTpHEUotJTrmoJxbSTbeb5PshssgniNex7E6F7eWffzvmRBZ1CC7riQcRsmYrqKz",
  "key20": "pPJabRaLTs3qy6m3bbXSXNKBEUobiRSp83nQsRrJWyikRBjzNbp1xPW8d2nHkT2D4abeRGkb5Xi7UhQ6tbdb23L",
  "key21": "3oRbj6Y5G8VVeC9YF9gBfKcQnabe4qe2UKWS8MeiPHeJHyRampavW5eXW8h8xRsjcgb4o9XfdA7mT4xndJmHkbq8",
  "key22": "rXHJsgySFsKN7BR9Tx26LMcs2WyyjJRNyzDsBuV1tXJc9Qjbp6z6rVcDYDSWGDDtVQapNs4JSCmkrY3D1iGhkEZ",
  "key23": "Rzt13usU3FrodewNgB9FguXGmmk8JLpmSTTFH9gebrzCEdSFsXUxyPnRyw5BTGtoyv1Le2gxYaRJ3EjUJiUTkLn",
  "key24": "4aLBEpvHa4Qmc69N1yH6xHJf8tM6ocyitxM3X2ZK3mpzBatncdbUwrjqPRnKSkEQNeK8DJSUWg3HqywaHec9Bwd6",
  "key25": "5kESP5ZVjYKoz9wto4drgZ3jktWwvp5GBSVHLsiWxohvgRPxAbXXdoRVy8c3oFd7nBd4miPcDmPixF6AyZ9QJSF2",
  "key26": "2wHAC6KjYsLF23hA68gQAuWvgBaraX98URDWkTYWMuyn4aSifLdbGEAZUmXqmf2s5At5TgDEo43rtEuzsijiiDMU",
  "key27": "5GHjgJcBTJNF8DzjkKpZCYw9M3tmUtdEbMavndU4oGhZjyG1JKhQjH8zeW6VVedwYhVEKCNs3soU1XCgCwMNxmNH",
  "key28": "Ksa7a6YHyQ5Zvnvp5V9KCvpk2UpPth38rkZxz99wBhATkN5bPtBY26sJGjUV4gaqShXqtnZFtGuaRN6hhfyuLNX",
  "key29": "3rc35w5xSfcmGgG3jrYpDJ7zJGof3Uf6Nvod1CTf959ySjUMxfsVE59ZZWJhW4asfvzhvNZRP6wzCypzidGg58X6",
  "key30": "UTNE7HbTqdfKgoxQasR8EgwUiEU2a8rLrMg8frbmdzXEaeoPicU8ZKi6VHXbvbMfWXUEeD9YgADLyvKjLWJWn7p",
  "key31": "52WQMruaazQZcZgjMsrhuQyLoSuQPKpmjgM5TWSzbWVWnikbLzJKPYLpLqg8XTcCeZEzEDhJfFCqH3EM1wANrT7G",
  "key32": "qD4yAyRAFA6uvL1iYFa4NkRgk5Lda29kEXkPyVPcJNQCEofUyYYsvqDUnVykYm8xkfsJwiuxNbEm1cnBGTFTHM9",
  "key33": "5XejSf4p9yEpHdhWbgmpojhcwAwvySsrvTNtphKVX3SKrm7PpDjN1n8ysfK1CYPAoWcJiKzd3Uzyc8zvCxfceFQJ",
  "key34": "3k7JAqzCgQ3tpsryYQ6e1z3P4LynYUsXt7mY6BfpXQwvpFttFGT6Gy5weVFMKhASYtngAkVZiHvZM56XC3PrJJ1h",
  "key35": "4SfhL4BMLAG3Le1LbHeN3y1dLT1yJKJh4MUCg6o49AaRWCMXuZAHWb3U3xXoVsCPFcUobo3nzhJm9t7JZWXMAMzV",
  "key36": "3wUo6RNTaQgiXhudaaKU1YFvTWKJJv3R8reRExsywPEsfDB3EUYegXy1wkqqKTT3rQh6HCSKMZK6KoiKkGSv3P7P",
  "key37": "2qHxXAXwtnxv1SswfboNT4MHn9bCB6qQ1tA4e1VcC72Vmt59Da7d8SiAGW3okU8RX4sfETB3Jdf7cm5cgUqAa5aD",
  "key38": "XDcxN2cqatdWM8gho9sua14eMNYYAjnQ8WU3HBWig31A7BaMsujMTEXP1gAAXdbLofSSho66bAmWDAHrY61HGE8",
  "key39": "47V6zcrhQ5DqNHuWhHMUvzABVryzjwEtWeKhA7ampbgmdYenD6iYCedVcuBsMtS87pUGLzzB4YNdBR4x85ThNrYD"
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
