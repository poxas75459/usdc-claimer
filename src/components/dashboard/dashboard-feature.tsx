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
    "2mGR6yHWq2myQVU2nUrgbWyzz3ivgSEY4HAwjCAaSD4B4SPVPzDV1R7tWvdA4NCMTwycoYPtR8UFYgVHNLuAJE3c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wckQ7rgogerkqpNhDv6r5sPctZ7GuKpT8fP5qbqC7qxWH7ts2oPdQ1uWJQeb23x5PiHCFTzdLVH3qo9cbdr1f9q",
  "key1": "5sYPAVV51pmNk1tS9jGKwExD4GekKzVevUfvpJmsB85skj7qrPBy8g5AHEoEdjKfkej2PugWXiZ87PPYQFWCUHfR",
  "key2": "4vtRYctw7QjN6V9tKj3eGVkcEdNT3UQ6nGhifBvraWvKeocjhnZYQiFeRn31dfqVLcRazg1FvtzmeFBQmbFJqm7R",
  "key3": "4KHrx2mhZuMRwEsWpLyuNWtK6bUvqQWr5kZgDtBYE9pP2h76uYDbM1VY7XZmeK6fwrm7Qv7m32YYMLALd1wTpfNS",
  "key4": "3kKuakrbALs894bTLxtm3fuCpNWqNVETshNDVFnL8WFScbLeV6uNQK1s7K6EP8H3t33TfUMgtbgGX59VSA2wUpzw",
  "key5": "CrkQACGUrEK7fAVfWqW2NsP9ucUZfkeaPWjP29e46C9jvLQUKVk3UE37kDRxxLw7yh571TX46VRJ8D3Ssd5SNWB",
  "key6": "5FegZE8UuBnrLYmpXsG9Wm5QFBDJjotdb2riWZXyZFTzLB9np1hMVR2pcptAMvjGZxQhYYx3RS8EYAghgBj2DfYN",
  "key7": "2xvv6aN7H8cgP9oAH6Bj3Wn98cDH91UUEcsQfWwReUFG3Vk7p6SVaN6rrrZWicDbaTCsiposPa7axWTfjUQCFCv2",
  "key8": "3Bckb8dYMVw6hiSZWBv6MnbG8RJ8Wd3gtuauSe7iJftX1dmyJ2cMu8orDXsU385fmLTBLVwLQfsr3kB7UZPgEX7h",
  "key9": "5X3wUMZhmECKXtczkuopdHP83YWpXT6fScAtsS6r6woLBXJPSkDuXUtPHAgv7c45Rwga9fi44cgsShrpquKMrmr5",
  "key10": "4Tss1upawCSoasEvWevWNxh5RrZu9wtDax1usAPGGPFnVdgFqqp8wrgjmCA7VaMuF45dPx5nTwAJr1VeRZCpG3kP",
  "key11": "Gpwv8NT8uJ8QSjuD83eYdiAYfjqfEhSXG3UkMQTiutW3rZLsHxcpo4y3vXt8xWi8WE3cdCGSX1rrphG91pMkrXP",
  "key12": "3nhi5ksZd1HAvxAVHAKSqkqG1bzZMWSvGpmegzWom6Jkpe9J1sD2cHbBGnNaFyBcVe3CKcw2E2SNa3VkbKg6Rbdd",
  "key13": "aVothJDek4fNzRQ5uhXEs68A8hN5vXq3xPaV9dRzRRQJNBVoLjxatMJi98Fm8uadBtYphzMntvmvgbcJHSGDTqu",
  "key14": "5VUsRMimqXBhP1XmDKjMRxHEDJL4WSXzpdR6tbWReWZFhyeoRWbg3NxPZzocoNQ1sADVX33FQT8vCVjkeKgkpFuj",
  "key15": "3N6eSDEjPiJtkQKVJVxEdiJBfGJ8bcxuGH6awADv4vcyghcL9EwXAMM2rKhTT2by6EFwQ1U36LXk5qqRQTbnQqAH",
  "key16": "5Cozq4QXnoquKNqA1qpMQZnV7hfG4oJ5BctqCsVAiGjvASqUSAicekwKnix9CSckPJvCK76xjvjh1WEKsGehTAJ4",
  "key17": "3qchKjWqxBwZyhp9Bi2xRJGK7xSpv4eYCqy2yq32Sxw7XDEFEUgoMVMi68HLXyy65iLZRvUKHFTnwp8pmUZBMcVR",
  "key18": "27xVwurpBHULtrjBC6Jkq1h4fag7F9tm8a32ksFtK1dJS1bmihBf9LRLLwT1zWGRo8RQ5a4dY7tDpUgWQQUkvzMc",
  "key19": "5YEDKSKQgghuM5AVTtSFB3mPchN9DcXXLrgNmWNJX5NPsTbz5zeyr3EQAir8NAjx5Y76S87bD4N2BDj4CnuitwGo",
  "key20": "2Du39P6GoCF9WH4eM3bM3AxyJmo7Wn68rLPBgNa6Rk7ykNxMvgWvjEMHqdv2QsDHL5EdvLt2fxFRQkoAbohgqfQe",
  "key21": "2dtdz9FRWbkZFxwWFRDy2nTmwD9MsFQZht8Z4poqkUwWRPQo7EutuXtyw1em4VZ2JvvBzGdoHBK34QXiDkL8R6MM",
  "key22": "4kYuymSkW5W67QAeDnwCS63Kqgpfunjx5sS5KkCjDdn4pZ1LQRY9A4UraV3jsrbA87zgyA4sg6o7e9swGMy8DofS",
  "key23": "4sZ4YBD9zLEqWnpoNYezqSRFqruQRxQw25npzTJkn9grJAYg9kYNgBALTjBvFwvqufjsFCKNWrBB71oJfUJw9Bnd",
  "key24": "2KZ4cYNVzmVv9QAaqkRq343cvvJuZaRbVCUjViRjf5nzv76Zeudqu9J4uqtybKMNJJa6P6Wj76X4CKv4RWRvQRYJ",
  "key25": "BM5yZ7oDPYja55Poemo41WxMLH4kGhSnEpTsZreWrqPJimmewABQkva8yqtxvDNFtm8Y6sqMZvttvNSpHQpHcdA",
  "key26": "41UKSMWhW5q5QRnNd6rx9X527oyKUJ6aqw2cmXTW3rNSD729MESzRmcq4ADGntUYbax6v5vdsyg295UMQfoBLY5D",
  "key27": "5nBYuu3sZEenPywhsUDpDYNVGApxKercJcdGvsLBdeuc2kyUq87FbcTDJWogeZ1QNzvwDw1Z3yr8HAGYmwHDqJKV",
  "key28": "2ZSk3yT91nByQYrK71ews6gVBjQp77qCtaCrBK7RbiJF8SJQTEVEjCHmQMuDdoEGYoyk55PiZMBYxpdu8uSD8udX",
  "key29": "3vhwueyq7qJFbhzvsBKCfN4SGgsZaQDvjwiTQKciio8wWwXu7gMXCEvR6sZNndybtQVWJ1CHC3JrVfdkv8pCjuzU",
  "key30": "55veU2UTnWoKb4WzZtreoNf6owBXmMyGtsMQsPB3sfaCCpVAjyXEWAHJuZzsSTgWSwfkutQwHuCYeuRc2mawarWB",
  "key31": "23HCNtiS2Gbspb9oLdq644RQ2Smdqzy93onzs2HRMY58yAR7QGnWch8Fenq15VyeoKrami7mnTWB2tcX1rhSW3F8",
  "key32": "pgPazKiMS3jX8B1G37yss5cEuDZuVCyDXJ7Jf5CCmukQRjHHdtB2mhNJLsK7kZr1PoFffrcPhkxY6t6GkHjnJiX",
  "key33": "4fJqNLJLaPGVXPZRmg87pqbPp1qqLxP5dFqafWd9NSZC6vzo9gdw8trHcMNZQer28EsAV71Uauqc38nkzfVNGwyQ",
  "key34": "5rG7mY6oHzHhmLwuiszWog74G2yzHrvs3Bwe1aeTSmVn3YV7c52L2SMocXx3Nbhqisf8gnZveLVJvyxtaiATWp2C",
  "key35": "4KCes1rucsaTZb8RgPsmw6rwkEVr7veqH2oduard8o34sGkLRETW3jQ9UqZwBG8ZtsyGZ8jcSeRxP663b2T6871a",
  "key36": "2V5yCwHV3UxF8C4SqQYAMi7UBwnUdB28RqB7VGW4SnHat22BvHHtBP53CLSiFp6reftAcuP4yQG4EsM3vnxh9XDi",
  "key37": "4NSy99YoZaB7QX6MBWwNrVPCJvY19zLzH9hQBQ5hsRAYgPo9gwT1hZUGTZsCTvRpNsExnM3HN6kTNrXfvrYUsQRf",
  "key38": "5ALKT7o6UuWsYNBWHoZ7iiSBvaARJv5jVR19emVSRShJPgAXLzBoWYUAxNHkGANqorhuC1jFVvKppGKccR2YnSzp",
  "key39": "DpdCHSgMWfDwge7EqMMP1LZGNksBWk9NtfNgkgiP2QZsaUJZcV2asDTpCXX8eofXhBq3Yu3oeSdjFSY4iiFrvyn",
  "key40": "2cu9NYAquq29DnUNzwzQQ8GAnacvMKALox4yq6Wpjbi6Z3oxWzxD9FMkEqrSLYsqLJ96DdbKz6LerK4Kww6HxiCc",
  "key41": "2Dk4F33j9Y7VtXgSMKTCyPdygX6Awc3ndd7m2GqQpm8zVw7P19xqDn2GV8UtaM1of9RKenEEbz8CvvYeq44inwwd",
  "key42": "4eaSMWnnD4r9buAY4UAym6ppp49HwmaB7Mvx4Sm7RV8Q4DcnR62TTroquGA7j2GnhaZzxKX7KS1Jb9ZnHGZ7qM9p"
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
