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
    "5kmufhDwNdgAkz6KH2fovfKCUdN361RhS7BBc11pq8mnrjcs8fEK7jVhB5PRB1rU9P6kAJPMoJ8oQ1zdwPfir2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6kw26xAdsH3i4ZJF67GV75G6AKKC9xetrBp6HXvBQH4Byi28kWmsvuzW9Egz4uYNKfxEpRGtLzUxAatAu25KSD",
  "key1": "3R54EUkF4jso13XSTDT2NLcQPyKuJZYu3L87hRLqgx7Kq8pZdXeC2R6DqBWNdgXJSswbUxhq4HMRXhfDfuE2mDBT",
  "key2": "2FJU64FtRYG1kRCapkvwNdm6Y56CGgbiM3xvfuMTo1vKfiJ4Sh56xNoKWgFXuki3EL7s5Lm1rYS57T32F1UUTSxy",
  "key3": "dArRte8LVCq2cLwZqPu98T8xTGMc1EwpLTReEZ5CvdiziDd9joRzwLY8p9ErroNF1D5Wb9ULGeUGtsFRrZsTfmR",
  "key4": "3HVj14ajHP849mrzeaLtTkzHiSfCEmFAnwLFFLYFeJKgGdzykCpdVWfWXPKcE5sHuYyx9rGDgXKzKk9rZsenrKZy",
  "key5": "26NJ6N7MpvyPvvt9diXPfYH1q6nNgYczA3qVuV7M6cXwfJkbTNekQCfE9tc1YeCWDCRvkJagS4D2t3RcwRBgRuUA",
  "key6": "5tJkEeTLnLSZoXuWGaZUUS4duQbE7TneWyVFMWt9X3w9RRQtdVcauXqyoAZYALBZkHW53pynmtbvtawQrZzKKEV3",
  "key7": "5qzYULrhxHvG4tWkrYHbVKuB4pRn51HgWGRiinaqt5amrkc2woKwMTM5bRECHboqLfeR4RATan5dhWZQQAfUEiw9",
  "key8": "5AqVvV5ex8LhwdxpSnHXjF8Tdc4dW5qbgxCytaopZwH4HgLwNUYgbqKQ4aFYmFLoMZuDMw1vDcctfCDajAEqU65A",
  "key9": "63aNiYVuCqtsVv759YP8QQr3HguJfPPuonpLq2FZnYe2MiLFTEJk53XGB72s3nKenu2YxUvi8ANvWJMsZtDwHPBi",
  "key10": "38BzdEdtMbJtDPjQf57hvMFZ9KiUywouupZxa1146MwtSw1bzKABFy1fJkwncvZkxcwCo4axoab67gVfvsRtyqhf",
  "key11": "4LuVAxvwWs5wjzeAUYgSirrBaxSFqg47igLyft6qhZr99vAwJALV2Y5n9FCpYyJGAA5pFUMa5CL5L9iZM4pBFwbJ",
  "key12": "5QeuWqsNp94bHFb6DL1S8RaZAAiUNgNJx72TxS6zke3Q7PQ2Yzj6B4mUAu3PekKKYoCsV261ndVHikc9HFJ5JnLK",
  "key13": "R5vx2gNRSZTVTVYMXFSUqY1adujxstEVkatnDqEs3VezmtoNz8HYsyWbodjYvqCcQ61L23SnE65PRPhJ5kbzRte",
  "key14": "4GNLr4gPkvanQEWsPnqLizVyqoSkxKomc91KYk2mQGTZTyYWRJY38kLvzpcr7ZhrUESkVQGMbZT7kMPB3u43Z7U4",
  "key15": "2RtDcwEvUod6cByYUW3d6gJR77RR6Bk812b1Q956QWGim5Kdo3V8AE94W5dLYN8LSNfL6hJu4Qdd8agFJD3Hdhni",
  "key16": "3JEjBBF9ij5g5Br98uVGLmZYMKNuB45Si5UUeMhHbxtJJLLwGwtqTzZaEfTEM5dE3KAg5nwHcvaxb2FEwHxZtf26",
  "key17": "3orWDRgiXYkCpRrcH4CK52Yh7WkHSxFPxf8pghZVToY9VhycV3yBYXQgnHtaZYsq3WU9aPR1w1ShtThJFbCTYCBx",
  "key18": "3378fndrD7KyXLebKv4zcJqqTzmVfgAuiU4kJpbLXuZ1MxASBEsRp6r72v7jMYcUqb6kYmPgC3aAsAvixQSQGrY6",
  "key19": "fGEfiWqZh2PE91PsjxYzefpfUvATFh6762kt7a8XMNyS7U8M6jauisXPYyvFrmCrpkhMcNJ2P4DNWvnBysmLCBW",
  "key20": "n6TT3k76uSzJtKtuMVMTcVauTXWpWJ6kR94DBBqvhsRPiySkeHr5NGiTNhT1DmsFx29AYcoUtiUNjRqENCzXrgY",
  "key21": "3jweqwU9bhqpwGN8qSmUTVnLzqEHrKFyPWNXTzWV3DUYFvNzgiBjYbnxih9ZXRHYPyUtVTDbnPMBVjSCDWLWnDxg",
  "key22": "2J8NbVGBFVx7v3ahM167WRQH1G5sEVGjYaKSKVE1eTgV5bciz4BZJnxKReCPaBVPzz4APmPHaFrdW2BXYMzXhBNw",
  "key23": "48W6erDxW1H1STsTBewZStbDBRCZiMBS6aSAjnWgxUyRy8qaitLR9L7wMLS1ykKabcCDdrAd94Njk4pWagYScyCy",
  "key24": "2mv7joNQPCrgXdLiUszPGXuwHaTYCFnUXdqtYvodRqYsgT2fYoAU78HtCBqhV9FYTXiLpYHS8xB6HbPQWBuPgZsD",
  "key25": "2CkL3snCJhgeeMyUt1GYWMmqnoxLzLDnuj3DyTKyv8nmYBZ9hEjtpNd29EMy9xuZYSsXaTgd158e5QEoeDEn9UFn",
  "key26": "9UsHCwPFn53vFog3QkZ9U799gWXmtaz3TCbpK67x1dU7FnKhP6GiEBvUK2bo1PWku7BcET6D3Tov6NLA29DF6fh",
  "key27": "2qAhdgyxdyvmnk6YaCizjyCmk6Xzs77D1yDyaYGfvew4RVpfqb7cgBakG8cnpYFCPh8KL4raSUoo5euUgrWeubmB",
  "key28": "519HiRpp2w1xpPqx9VXtwE1jeNWAqawRjd3ZxV3PYZp3d4acaWA3Dcc11NMvsg8dygJKKekPaRXX74fEUgHuCYUV",
  "key29": "44xEw2fJ7f7qiTN3YdWxRQ7sJBYJAuJQ2vxhmYKqzNxBEM6mZ44NASXicfP35A8s4uqPSAyeGzTsdhHRNLfuhChn",
  "key30": "3FTojXCeN8N7VFKzYFA9WhrW3QE8Xd2VupHmPkVEFVesfLtuUDGjeCcSQ7j6yLC6tMF2ZVDtq3sQqBF93s9abJwq",
  "key31": "5pjEsvn54wVuFST3RGQ4cWNXmt49eZaWreMdq2RKwNr5jrXrkEz6XWCvqyTnCm3QtMZYToZHqSeLt1vm2R3MQXhF",
  "key32": "16TEbAWE4vN6Euy1iQigSqQYvCaFcDjkctLUvxLSoAMV3Fg21jYkTNYNaYfDyUH9VRCtobizqpZ2a1N2C6WS5Kb",
  "key33": "2Z5SikJj9QTAcoFWxJN6Edipxn5nGbti3P3jp2cdDH3e7U3Q7XFfWDz2Y4bsso2LxLYY9a9PgHQZ9Wrvdbg1apBw",
  "key34": "2sV5rmp5fspCR8mhXJQv96AvqnWufVdPxbL3P7pfMGmAZ2NreXi563yHCJrpbJx6HVJwv2PpJuHJFv4PvzT7RvSq",
  "key35": "2FapEKkWufcnCEYC6857eZMsctYHrmimoNj6Hyb2Qxpiay1TnZMd2CEWcK1tWv8g4RXZYTpZ7htUf7g8yXUsERiL",
  "key36": "3miY9q2WcrRB51NEnZJ7zzzgw5frMentCQmqxLntZnBNPGFp8k68yJ9iWYe2TjDJNXktGf3zJiZVCdiKP9c4v2dM",
  "key37": "9iNmthfCCu9irJ1CD2aFg9CbT7uQQ42DQEf4SsGZwPM6xqWVirCGp8ejiLecZsq98YRd2bzGNshkGfrs4vkKVyB",
  "key38": "5pFB1r8wcWm9iLpaZctzX3cHe4JQt4rptPM2DFskCerZaN64MfZ32dxAE7tn8g71G8S4oZ3SC4otMwauRkgLuJ24",
  "key39": "2rB7pwfbMLSA8WZaqP6ZpaDWBgUJHoYbVzh4cZnsCyTNN8EnFhKCKrLYkdCjjtWjFZubAWBSJpEfY1cyUWjQgGJW",
  "key40": "3eeYRE1qrfJo9i26ESNpYxQLmBJKxXakAs69RXSjqknDi3QLCYA7vZkmgoLxJcbo3oG4VsETmRbstkwriZyPq3x8",
  "key41": "5bhwppykrux2jKXkYEWYQFCTKopVA5BSG6PSbshLC8DZb8KkJ1dtjQvuGSBuexTL6NEhRQAtW9QnDufKJVP1jdof"
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
