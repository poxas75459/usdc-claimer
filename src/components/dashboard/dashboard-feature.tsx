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
    "2fYieW4Smv9EUr5xdBQHVZ91X9byCXScgxSNTVev23N4ysTSuPUGJyL8aveHg8sYKYJHktKdq3ZVFofThBrMQL5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xpBWwxRye46gzRZKUj89YgUQFQnVAw1e1JSBzt3wodQTn7baDxdch8NgxdxydfvY3TV6wwQYGzt2tTDGR5v93HY",
  "key1": "qR7yRW9AuYxFGmvUW75Qt3rNs7MhJ65VUC4jGbCz6YHYrvSnzHLD9XKJ9jqLAjn3pVDB9jvRJZwxFKh82v2d1KN",
  "key2": "BJTcvykmTk69fU2V4fcqqm8Kbcnf92Bar3qmq7jTAGqMgWpbijmDo3NJT61psGE1HcvyNwKagi6jABX9x6eTbeL",
  "key3": "37QifreDox2Ex9SLvF1SDbcmhfUBfTo9n7Eqq5CtzB975MfXiW65HAVrHgWAYyKYxV8HDGAe88DtZeQmepbRT2t",
  "key4": "2WWvMtd8UcK53EBnDPFXg3ae3n4LpbkuXNJ4w4MQUe3X28utzZcw9ebX1idZ2Am8VyoJ9Xi155YjNh9wFHq82sPD",
  "key5": "4H4bSXuWSxU4brkiMo6QmPEwYffUvChv3g8QtzyyGU8ZhkCLVHJAwbcKjWXUd8sEfKoLwvBn3ZNDwFZmxCsRQxJX",
  "key6": "2kaMSgKERBNZTgvLsa6ucQfhdCdqSrLHD2AwQZe9eFUiWfzXq6Qqf5ZkDtHVF8XtvoSqU3Fzzgv7oDqRPxxzQbnA",
  "key7": "2tpwrQiDQoKKx2PBbBJ9LEzUm3fsm3dP8XMrdzmQD4SyaTGG1e9JeJuFPE93XEnyVF7kNgAA9sKzXBGDAoBkVyQg",
  "key8": "4XxWC3jmxUjHLMbLCsdaZHiqmz38EL3hm6xa65EiuE2inzG1ZvUwCGFNi5MJPoZ7sH9goUGa9mv2E66G4rtGhgrV",
  "key9": "5U5DpZyeqmpWARHKwPcK64VdTkK2jvDmbR9YjKK9PcqxLAZCWgQJUh7N4KDphfoXgfv9MaGjs4qLKX2aEQ9UfSnz",
  "key10": "3d1UHBkP1pdiyqJMJKULg5JZGgtVjzkFj3VRfR9CxggzPH5ThmqFJCpTsFoTYqJA4Z9Kh5n373YiLsjb7E6BDBvm",
  "key11": "2UUSvPjSYqXMUVhAUSsSq36fUW8YfQX2AATe7ce7kf84TgEKfWDquFBKtiL5JeUD2rundxEtKhXH75LDFNHv9afW",
  "key12": "sZqz2RvSNcvtx1Kdd7e7yXxNmFXU45o6pTqd8TbB7k3m1xyFUUwVt4zT5jjqJmnG2eUmsPVbB5NBqseTcY3Yhj9",
  "key13": "fdRKYmTYD2KYqvCB1wezZtBV3DnZSJmGv5wRimJek6fKYP6oyW6fPJA4UVoUw3G8Ljeh1TDTgEo4C4LEMjdg8VQ",
  "key14": "5uZbHMGrbpCwbsKSnmuGdudgPpygYyfqWqdtdECvZFKan4hay4qR7n2jRLCY8fwKcwJLefivQLURvPRCGiZQkuNi",
  "key15": "5QVyKx9bgkNBsNMKx6qe5DXMi59qNd9zA6ZoRFLnMPnCMgdQub7b9YbKNShV58tiREPVEM1S6Vy3MX8KoZBUGwD8",
  "key16": "49JvA8i4iQBgQskDb86CH3vcdTjaHNiJgjYFWuBWZtQY6iLubFr4i3MHLA1hwL9x8Tsj6UHx3bP9e9EBa37N96F9",
  "key17": "3oXb2zAcvaMBa9qT3iMAXyjoqYZicygPASokSKLUTwAW3yhbHqWBEGE68AH66RK5Gz21nCLxttefXW5yrt2yDpLp",
  "key18": "4n81d8B2FPoqTueSjoz73HxffKx9pBf21s3C83NsKtEw1QAMorQ1LrFk3zw5ALJ4KcNZqMH7gyjgqSSymz28cyKH",
  "key19": "3dS8qdENahsfBBAaJMJ16KqSbgH7SoNYcU4B82mrUXHqSSf2k53aU9PEiuTp3yqKphuwdi6fqg6a7oEM2RpYN4MS",
  "key20": "kBjZDkS5paaEnN96HVRkXasbKca3aGvdnPmCKMaeFGajdZ1Cq2YAwAAgbP1NQjVAkRnyocsU5qLqpAXABTLi5dd",
  "key21": "2msP4JsMKQqfe2twc4izZD3iHjew1nUL6EHuqtxoqmSMbmAHV9HBtH1gFXeKEAd63N8iJTujDrwdSN84ZSLgux2a",
  "key22": "3JiCgBq4EqWGY5DroRHfhEjc4wK7ULgwsMYaYMutDSaCshuYRkfgLps2X6JJKrGd3Qxxc6LAHn5CdtbfgWifmYHv",
  "key23": "3DuGYfyRvYdCkGDGBAsLdLL7B5csAX2ozhyxqdWJ4FCVnQd2TSBjbH95fy7yS8XbboigpyELRREZ8ucHRF2wufuF",
  "key24": "5gMWmK35EveQq6tuVPH6JGkSpUjs7y56yhqeMBUjihXVNkwzvNnECAxtz9ZXBn3fXygUxoJbWJvtLNhtjZnkpX6i",
  "key25": "4nR8iTKgDg1yJREbVZvCnsEvWYKmudXwPDdoRfGogfwcmXrHq4JP1Yi2BAp26NvZwLJ3fHZtNz2UhWERwjHcdvqJ",
  "key26": "41MywDieG8aKe4ERafy8Kc44id9uPpBP7DHfQzybUtn3K7uJaFJY8nmw7ueTESQYuE98vi2hpgv5v4XV2ADAvcKE",
  "key27": "4EyXJv17rQXHTzbtozDaXkrNXNCrEwZtiDxwL3x51jqebSW8bwf47pjR75wvvs3PNxe3SMEhQZEikLmVXeZcVmLi",
  "key28": "PJVhkzKW8Lhf1wvcSjeEk4gJbxjLzgtaqp3SjE927JhgS2nM7tEpdjBWceYSTUSnE4s3zbBoMUiy26LBZnMCfNG",
  "key29": "4EHU98Zi5VHgtRjxvd1kSLkeztEV91DUsBy387JSs7Ph9XPyVUDav2m1XDG8LBwHQa9gaPvNCxUf96r8yu4YPXtG",
  "key30": "2kimFydsEPMmJHqYs3oGsPdVm1xYohuqvYFPEd8U11VByVYa9HQDRRK4ikAnwfxvdx8YXLwEw3cYepFLvWU1ojs9",
  "key31": "3fpHRh4oCYfDoQtUoeY67xpbx85MYoTWgrjwmsyUGG63FVrcP5g2FS1rgRbpR7RwCAtZ9bTeETYnWH5b6oJRxW7o",
  "key32": "61CYr8uBU1sn4sdsPdqyrJ46a28ThT8WRYaVrsotp8uu5gqPLURnoTKPVyYNz5e7DMTfDGhwXMQBtnqnmh1jH5H3",
  "key33": "4DnyMbTVLNpnnRGg46Gv34RjspDKcsDG8G8YHpHHtKZ4LxGHQauQHkH7t8RpYuuq12fcrL4VreEY5peMB6jWmMTL",
  "key34": "53mcS3XAQM6RNBxcPVXqQJCVwKq1E7oqZcWNz5EXCqBsoaiiAP1Yr3aLumhWapzip6aMTWTGzL4cd9ave2JoKgpq",
  "key35": "4MZyNe2WcnxvJvc6JNATnmjZrGuRni5qiMYC99zy77BkoF3HRPFWCb9EgePwGTPWvwiQShKqAmWEW2X1m95uG1XP",
  "key36": "UhvmEaRp3o2NGpNKqkiNneAcQPJLBBJRJwk8fBXA3uW2uiNm2MqViudkfxYQt63KkZ7xitgFcx81cGh7Q4TGzQE",
  "key37": "nHGEXBKJ7Tz18AbUqXFV9QTQxEMqwBc5cMxZhmrVViHinXCALU3dfWygX9PpCwP4LmUR1tEvWYWAuidH4P9wqi8"
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
