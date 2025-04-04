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
    "4VzPdLLQ3cDEbZWBgttGibewh6Ei5pJz8gjzcfh96hEg3A6XVQwMiQW2KfQmZg7xNPiu1PegA9YDyjRM6NntLdZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aCGAXBfwZRizC5xiGktCsQA9FknfuFwL7TiYiZZrmmidnx3bCuPNrPgDVXAFqT7FXUkFrvDmKa2JmaffhPyhgc4",
  "key1": "3TRCF8Rc8wN9uGBf81akoPGggZDjN7FeXQdukQcZYpLGRqp4LHHjhp5ZxVPU4sqLhQWgTZoTN2cMWuTdx6HpbrKa",
  "key2": "3c5okAu9bUS1z3iXtoB4YQgSmg7TynMH6ickt289cUD8EPzoS1jV6DzmHF5PZajtG76C6KzD7jZ3FDMBJpmjmYe1",
  "key3": "xKozv4gnnD168EDTZGpVLknXqMhkJoHSZbYRsf7DMiybjbPCH5GV5x5CpQ6SR3LJNfTRFSKbp5MuW2NDL3ahzPj",
  "key4": "3hPWn2Mya4W9D6UN9jNeSwSkGfuMy8xAfPRyBiszWY2nW8JXVcMqex4qjgKFHcLKC1FAmWVzSPrf1ceLqEosCvh8",
  "key5": "2QAiUjC3QJkhs792YpaS4rV3WLzohBHbvsqtxHP1BF4RZnXK8QVu4pqbuuPn3XLw51dN5dQDxEUXzaP58LcXWN3r",
  "key6": "5cULJ47s39aiAjyyv5S3cyEmhfdwQWjuEeiGioQv9FzYjN5UpZfqUN89d4GR3mHtFpzvLj961GvBFrqdShBCDoSG",
  "key7": "5ATgu55EEoAtoTGX1C8z6QzvHBsvqoH4RJ4fi1vjc9DWbGAuVyfCkFV4aRdi6nJYaqixg4LVaSEwpafYbSt8Msbb",
  "key8": "4ggq1PGvwudQHPJnuRPbaCpBkD3Yq859RoyTG7fcndwpoeBX87YdBTrYTTp7H1xge6JpWoTypHAh8s9D8NAu7Uaz",
  "key9": "3hrRSadQDNCL6RTnE2PUHf7i9oXaG5btBn54aaikrekHDJ2a45uYfBi4SV7GWYBiZQ1myU87RKuC23r1uzbnYZtt",
  "key10": "2sscFVcsUPNcPxK8nxn8TNk35MuFgBseUyrd4m443g9RNkykipuJJQ79dMZEDf7wY8SMyHKT5T1rYHosGdWDEDJo",
  "key11": "3FiuUQV9ggbh2oXUEL9HyriJSd4iDTRSvQpH9yhibGb8txcHidFbfmZzkfo8xySiG4iCToqRAYo5MM2BJX6EQLXw",
  "key12": "5Zkzj7ZP1NCqxGEJhWpDMDhB13vpvsQmcfEoD6GpiD3Nr1uoDt5i98C5PuB5kSES2oRFUDF1MLK6tAMeuCy1wum5",
  "key13": "2bmvs31PxH3Vdvqxn3z3UE1HgVGB2PneeTnAJpSjqW5HPF6XpxmXsRbffp3Ceh1tzTEpLWmfJQ6PohYgTsVf9bta",
  "key14": "4b4BZz7mJpGb5Gj9fbBkUQzXqYpjfgr65PNt2jSbNqQskPGuUncFQMTQyBp4x6BE9RkkZztZfU5uj1yur8ta7JqK",
  "key15": "3zfUS4529b4zPWNgKbn23ytgveMfrnzVt93mVZEyohdbMnGUAxX6cFX63sN44u9kiYYXHWRzTFf6Kwo9pNn6FHMY",
  "key16": "3hhMoAEkR67wWYvVnbHH4Vh975iZHUQXC32eKmBjmAM8eacA16Bo3m6MgSejuekcBEeMgiuNYqgawHWMPeWKQQre",
  "key17": "23k2oP1WbzaposNskghr8tNJSeE36MLAjhQG3SRwJc4CsAhAU9kVCyacSjhc7CajTS1RJRQap7EdHzLXk8PZpnQg",
  "key18": "5eg7Fr8VvbckxZHhxHuwNZvUAffrsHFJTpSeyggw7proKXrqvRaCP8WPkFykbUywp35amUQQXW2fHxnbdD3yMLUw",
  "key19": "3kZEZDKebGUvZcQquqLubhRwTKNVK6EtstzEL2ozjxDfRixyB7JwWEbJRFNvAijWRQXppF8eSmbtskzMUi7ENSTH",
  "key20": "5nmHke4uN7AiZGXeDkURjaGDCphffYgTm4D8oQ7WodKrr8nnwBz8jcjTiUpBd8SUDRDSx9GWYdpw35e96GgTUv6u",
  "key21": "3sFkbnw47uw9nF6BCkjgr5V9zwk546wjRaXskcn4h7mpQaLF8XqJ7VpRAhfHevFDYY53HA3XTxcsj3iVjL5wCpiU",
  "key22": "61YiS4aGnvRkKSZVbuuQ8m6khDQSNgi652pEHyy9kTHUMCFJFBZByAbGRQzzPMfveMSN5ijs3LvmtLiUSvnxhs4h",
  "key23": "57HPixVY4pNsS5MiogR2fU47rbgyZBCQdLyXqnHCsQRvkmkcSuakwoaXiuGnf4Yeda3SRjAc9dECqVyoC7Hdwce4",
  "key24": "4t7pNEFfm33a3j8QdNNa3J9vFsansCmka6Bb9RgUAwZ7nxqqzbZ1Gvv7Mj22zYmW9iyeFMjYbzdvx4PrijRzaVLd",
  "key25": "5hXvjPLMV21DNuVfB2HpDbXaKFXq1x9EAkdcEeN9EuMXcmM79pE7LpsdCKBqV37dFVztq3HKEMRJQmRARKrWxXEB",
  "key26": "3nkm8iQw2dvra2gHXxS6RRp3U3riuoCSJYuDu8Hudw1Fzc6qMjbivAu6G8xCwe5hYSZpt5W6UHWGFz27bQ6f611W",
  "key27": "5e4PYsYampo5NoVerdnTu249hunCChfgPgoSdak8F5j1Qs6srovTJ45jswXZ2AV6WmuEW56vb9p7jfoHENo337U5",
  "key28": "27s36rWQYq1zc1HuQ1FgFMtGVKmfXZ43pP9nU3VighdGy8p3XUcoQJDLHoFWnZLHeA2qRzYRxMDRmo76uyj3gyLX",
  "key29": "uJ5Q73Eve9T6odc4rKkWJBeXQVRQ29sMPgJc3pZGWPK5KEmUyu6HoHPmPgJYVLh5JpGJjj7e9crXAQ1166yxSHx",
  "key30": "5eCEHZqRhGrfwtbgxDnuhSQCNHBstZYLST7AMbwBpnmPrkpww1foXDRdTZn9v8c2ZBZWBiLLCymmEvZrmsxfHkJs",
  "key31": "bp8z2PcazYM5CnekqWetthjc1cvkMNBFAQCDZGVUJmomCLUrJExB4QVMoTP7pVa9KzmpxhC71BhAdH1VEkJVkkf",
  "key32": "4jKRfpUgQMqLVRbe6PfFNf7RBZhCjmNYpjJK2kWFdBHLa8eYsmBoUNoPFpSd6e6bnUJQT8RBzE46E1vhCyDx1nnt",
  "key33": "39dePb2arohdx7aNauh8prTccgKS4xznAGM5ush3aQYaEeV6ZcHnJL5hT7p3be3GvLEFrqZ5k3xJmacf2hXu5URF",
  "key34": "3NiQ3cEpGqkbPfce9L82HA6TU1pEPJrHBqus5oHcXQHtSoNYwbHUmqBUbQHa9pUqcDf94HtJ1DeNHzWv9av8upQ9",
  "key35": "5K2bH1v3vT6RX3zNU2u6eL2UtwKFgNfc8Tye4fNHUNKefyndYofR8jcGZRthHQPXkV1ofBNoUmtLMffiFKnXzuha",
  "key36": "amqze2ffWC5SaYYNkb9UHuBgzwNK6QfSST9gokQriTtoB4Hqi4BYp9M4PNSjPuCRpZDXTMvZR3otr1n58hMWRz2",
  "key37": "5ZntLwu4MWvRpWa3awJTR9o513AtciYxQkwnDDUaDwaxf8xCvDQJeNMWY11DKSU3VZ3F33YMRTGo469TC9pozemA",
  "key38": "4xPf3Sh5xrJ2A7MoUCiJrBv7mdj9ZKjTV6dpgugoeC1CvC8sqZUV4iQ85B11qDGz1uHMPDRmJL8SjVbLhRABihJ2",
  "key39": "4GRpxv5CZbPs77DNrEGobfrrgS3P254y4Wfu5jkkPD5QWvBT1B7KDAYZSNRg24gPJtsX268fJ9j3xHGM2FZA84RV",
  "key40": "3LxoBqYEuE3GcsqBmBwhqHmdrCw9TeRYkdPDUXSbAtifqvemFcrtFxcC452uh1qKcSzpnJXoeytzri3HcEejoBrh",
  "key41": "43K2geLH98qocQ1sjc6V8pSBKPk8m1ZjPC4b51EPRFkUfetp1pAihbtGQydukZR242Mg5rW655nkQhVvUW4xsrqn",
  "key42": "2GATJkNCZfWPUNahjST6EQC6wSAo8g5zZjLbVNr1DLKERiWeBZXJ4NMoM8R9PsxdiJuukKXYco58vMLaSJcfKr7y"
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
