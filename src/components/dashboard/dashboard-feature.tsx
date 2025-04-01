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
    "cTzxKsTL9jdKjFUQe9XKptP49UTqov5S4ze2XF95YYQuycsexuvm4UiXMiJuMo1rRoUKJseVVgvbsiDXeUakkTT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CVLM54a27FUJBD8d5MBn6abJHJu1YH271t8Mq6uxgbLehWKHmyY1zEZG3T5mcMv4RZaZ7Kq9E1BZteUEw9GZARC",
  "key1": "32cgLNNXdi318bnKZFaJdNPrneWY44d1gk5XQkmvG4xpGe4bnvCHq4AEH3DvaWEFpVMdyhjcfHSXoDYLczuqmxvp",
  "key2": "3Hr5XP1bCPRK2U3YGPnGfgfEoemtWB55EDcPWT2y3xuLDfJ9UPjpr8itnPbeqbAn1kEVPjfKdLxUKyw5TMkYWwM6",
  "key3": "2fBavD5yWZs7GbUSwNcuQjkegaF8k8BMB2MJwj6DjGZTL3sWqUAANJd3RBQYsyDzkrJqqENUFSpR1VXynkPKo4Wv",
  "key4": "359nZjDVrR4jv1NBTQcBkKFPUfUom2nzk2DNK6sTFVxFtVBS2htiSXV9c8vNwC1hEs4AXTniZsEwfLfN7ZbdL5To",
  "key5": "n84UXeb9G3frJh9dnqYoC2v5kAQG1CoyJbYc1rMYQgABcE7kH7r3pNQdPc44qxrg171LMA3NXTKo9nKUeCa7eSA",
  "key6": "3bfqbaX9A4HAw3jAAZNgwCQTwZ51M5sgaSPnYio6gGajJ2KBYsnHU6PnM5sbjbpczjjraNfeaF7QxEWB6xRSDXoR",
  "key7": "2GYtxhgLJ6vBzrphZMVG5nNc8EeBrnPPKPaSTC45eUxrAqYhGdiPysyGK26JdwyffkMmZVoFrzMoFMFSc1HpqJHK",
  "key8": "3L1Ui6ENWKCe5pFnKdmx9WeacBsSvSaPbfAMHhzEnLhvGTjEhDB2o7kCchttbdtmdAznFvj6qfQFpHXAeTiMVAkE",
  "key9": "4s5C7a7ah5mmwBwgsWFUyWzTNAD6JiqJNkaLrnUdDGgec9BDKg6vT5rDcpgee2MGtGeLufRAwJ42gLb3tRCGnTfq",
  "key10": "awUiwRNwq4ESjHFj2atfypfbiRPcRtE7aGzhQa6itbtRKsYpnVYRaSZy58nrh3Hde2KM4aECAY1zDcSqQJwv4q4",
  "key11": "22NBmbS8J5fPtxU48nj8eXYCtsrzACee1E1skZehgJHPufzA21iL5kKGc1a6Sa37wvWGJWzrWkb5TVHEfxEa7fBg",
  "key12": "4i2Yp3GGxncTcFfewgNRSb8hj6Nq9g45SNyH8ixLVXmPoxc4GjaUrctQDA89ibbkMXvBTeDfQbm3VuwzjF7CpcRL",
  "key13": "5T1KbGsHbkMC77M2bbCUZTa6YxeQY55MbntyCav8qemXGQy2KbSra6FpNxttgpxMYVaiSP7T2HHwx4GgC1GiTUGc",
  "key14": "TF6Y3S84jMWQBS11zQA7YCvXBP4YMKekN2oMZApT1w7wdPY3jc2hDP8yGCZm31kL1Drivw911WQdBaxikemUxoQ",
  "key15": "56FRMsmfCf69k4XrpEFq7Ffg4bMPwkm9LBb5zQPMqpBUifuoS8Zu8NpMhhpysszjvacfFbgPsEnihXJp9ay5N54d",
  "key16": "48cuTKLQuAn7FjmT86nkSy7CXsKnDj7ADcH6mMwjNxWw26DWkyD7m4TEcCCWmiwG1yRjDAtskAc1nTXvJLrtjwDA",
  "key17": "3dFP67iCswGRXvLJT9ZpcFgu9g77AsAqaUoX7qqFr7o3T21AxadPRM1J3aidEUC6kMKdVUyjAGM4KUmHXDDCxkTU",
  "key18": "331QEwwpmhCuGehuSrd9GWcYccfvci1bWos2CPaomZi3JC4uRg81uHDV6VCmsyxFjiwpVeXHQojzvajDcqMK3Su8",
  "key19": "22VoZ6a5493cvGey4VXwJiysK5dUF4xW9c8EUkTLYWz9MHdsX4Q4geQdz7GGar6PTaDXERtE8TX7QsyGkTqngRFy",
  "key20": "EUkAB8p7rVg4JTPBpiVwE7oK3MybNxqnXnhKxyJG2jGhEQ4ML6qBc75s86b1LM3CVhfdSnUfNqfvNHktDoKf8BD",
  "key21": "5Gr6n4Z8vuQcgG3yvkP3twc84BAQrqP3SbQAa6QKuS5n65fEKCBb11EdDA2hsFk1ABKCiPJYvbSz65TPkpvM4U1s",
  "key22": "3nfrJfWxGnw9Vf8evUtDrtqakXx3Z8MzRCmhULG9pYJjJToYUAfD5k5vUo7fUg71r2PmMjWXzjwD3bwKbSSHvyCe",
  "key23": "2zDGji21wRehEkzLwWcmtbbyAumkhAeBmjk3VdwqpMPSw4YoDF7EUEQSzn4ewGUwr5BWAyUrKmnC5L1JbdZYmekD",
  "key24": "39pTqcjTSEtRowzDHxZyTgAL9veBD1pSeTchDKMK89LSavwBtHD4GteDW2dcFdqWq69Z5HpKNgMdTvbBw1xPDEkv",
  "key25": "29yAiS4do9DHTfgTpvHrdw6o1XjyXPDdgDiMsfQun6tNrmoReRme9MwddUS7xosdcKgmixuZKPg4FkMg89dat8Hs",
  "key26": "3URxgJqUz8GopceBE2EfWh2tJTqBsPPxJwTizsmiV7SjFenj5aDRdTVFWGquzt9hd4iyoTfyFTtnNpWmVYdW7cd1",
  "key27": "5v5Cd12XTgpYygEaH5WhcXTtw2ZM85w1DLMxNPe4T1vctKzWRckAHhjeC8Ji8WdLHhVAEU9H9eZvXziyH9ovpUZT",
  "key28": "3ikxCRgxcqJuRJyxBy6y7MArNgviC9RsAGz8drGpqt7nghLwtCvPM4J3M2PkjMRV8LGnBFGBES7vXYv7eqAo4NxS",
  "key29": "37hFQyvM7Qvs471tA8FMiN68gcgn4q69MpVvTzRecnypWLCvADPRqhFFWWH6x4s7YHU3eu46KziMRzTMCfxQe34A",
  "key30": "41oz1f22DiG2Bj2GnvgNMTmcQhpCGPJ19beEYxD7kgNAJ39gY8Pm9qTAxYWW5CtG8jdQn7NiC1dGV6BpSaFW1rZP",
  "key31": "4UwAcdtdzfXWtKAk9fMwpCpaGBq8BxYSwYEM3WV4J5oLCG42qWZnhLud7Mb4BD6TJ9nBnTephUj7AVDtXLPVLE4K",
  "key32": "253xRbWkQfUKfbMVLs6MnQuEVARZpmGog9fHxU4dWodPFkbo4Q7c3CTFUC3oQwc8vRfkQP3g6szES63jGvWTY246",
  "key33": "4GPS3ckPJqFJwLd6atXvAyXHiCcrRZHW4WnYkRFcfRV4Dbnu9dah3P3tSd7jRdUA6S5EyPNHCuiTwbSxZ7bGpJqK",
  "key34": "NuHPVpUaSkjG5dGCXfJFbSM6gdmT92DMUbM1T3RuDSYLj3wsoaetcQbZyns8CK5EYeGUk1aMswehoasv3JXFaiZ",
  "key35": "a4gr47GwhRtBXAcoTTF1jcKwwgVU7AwJddYDpo5ksRpDyzifPmCLnLbS9VUH9mG4e9Yduj2jcTy3cUmMR6pKvPp",
  "key36": "z7fMWBFhZUY1jJVgWRKxmidnrBxcCcTPCBeSGvcfdcEUxRP1C9ZG5Ax1JawsLujrnbr6391ivwEKGBrygMaXkC4",
  "key37": "2XpUt4tGDG6htSTQfxPSkWA1iEmbPhc9y5UBRpTPBM8arXDzt4pgFZo3WyD5z8kd8d6hgwopBcc1dcsX1FVRmbxs",
  "key38": "4Bk2fjXXpjFGps684K6GUKsXyoBVsdCdaFZzCM6H4N5ebzTuxSe9AY6KyeFLzgjS47wLmn1mbFYCXwJu64V4eaLm",
  "key39": "21JKx9qYLybcGoMM26uUySxbPRkZPomF56WjF6goovJneGwtHiocddPDySRJPemaJrJ73Q46gfigFRhwEtYjXkjx",
  "key40": "ztxMCUx5QLs4xanuMrArAEz3U69kuihgZvGGg3rHsFp7efBSa2o8ejRhJo7yu8gnn4sXS6fos1HoViW7kq53abq"
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
