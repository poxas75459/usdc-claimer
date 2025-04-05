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
    "61ELs3Lf3FWNehii1HQ4ZcbfcQUJwd8LXzM7rb8xDX42uiyVJsnAicn4szY7nzAnp6WJeRYXxCRvpit9DEaPmbbr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RxT4DdnpogvzmuVXKw6qUuYeXK3dD9Cihv83Jh1mmcvnSAM4Vfv3XggaLwJt3W1LNVsnwU5hsbfghbQ85wziQHa",
  "key1": "4cpzVqNK3mmPnKNLGBbbJULiBSvN8buhBA3QDt9XwLcXDPfTHkcEu7Ai3KPt6XdHQH8wU28SqRo86mnzz43Z3HzJ",
  "key2": "2VxUzhydjZzD3vhk5LXKHqjVw7VRFBg5L9hBYGUK7eyMWnPdo9QadHMjokUQTEGfyZaYKiA2hvtuQhd4z3NPEVvQ",
  "key3": "3SwcPDR17tA1PjWDryZ8b4AwoKeBEZkPTBo9oVD67LgQsxM7ojha26eSPBAFro8vDW8mSx3UzfDZ7ZLFy6nTUtyx",
  "key4": "YyrQbCc7zbEYPSgDvpP1fqPy8QzPhNTohrodeVtdNj5mrHi49AMyaLMCYP1j1iWmDJmXBL1g3dyj1GR41mDAUwV",
  "key5": "2LtQ8EVB9wRZ41HPstyzdEqQbZc1nN1si7WDMpypof4zYDpZYyw9oyGkyKZuFdeWGMBczYiJzywMZWw4uShpjfzJ",
  "key6": "gkVaNpUbMur9oapCdPfu6MhgXp3SCdksfr414o1tDD8LUPRkjjTUoyQJdK1ooD1oM25ytNUN1EvXVk3gVRDCNqF",
  "key7": "3N4BR2RqNNJGKhrrNrcwfJtL7f7t1nqj1jUfXP6Bu5t5Gja9MVYZE9dUiA59vk26gkaPow28N9hVEjK4myUuXu2m",
  "key8": "Qk5RrsVAfD2gNgj4s1tG6BofoiLcEe1HpWKFeer2wMyxjSpXqyrrxd8NzzSFGa4Aggy7ZcvCEWJi4kav9MAxdh2",
  "key9": "5Nuq2mwhbyrkkpeeFUSnx3c52aAprdVqjWVU5SkTbAmYmrAV25Gmx6SXhScr6m9SXfJhbzJg5wSL13kUbB1koaNZ",
  "key10": "NNBwWmaQ5LPfyd1UfnbAKRQMTTPhxyg5BnE2dGXL12AmzxX6VYS9vQj6uBrWJHZz9xaRepfufxPJtYDsDuHGynL",
  "key11": "4ypLVFew4hcDkBhLLnBNCGdRYmoTMETDZ43RwDt4iXwNf3K8S2sQT8sVtwDtLSY5fYWprVaB8yZKo2HUvAtL85E7",
  "key12": "4jUtMjmw9NTutJ5ohwWRrH9VdRamW76YG1iMaW19q7Wwbgc8FQ1zsWKRaUr2XU7NvGhcwFbzNZL9DxLta14MmK8i",
  "key13": "4maNGYigzJQ9tCsS3eMkeo8t1Xci1HHfueZT2Ks1bFDGHEyuYY4MnAKk25DqmLht1pF36TRifHyg6fvpgm6MF2oE",
  "key14": "3SuBDBdouEAv7aoAgAVgzdAs53e1QHErRXTTHAz4u2cStUh7AqwRXyNe1UBYfNiBaiN3CEFXG23Bg6LU1y5JpB71",
  "key15": "56HfbD3iQNiceS7BPnViEbvueBBtfoLFosbHBP98avAjwHtkRr1tESTYENRz7YM3zvrGnuhwAagGQXGExPXLJSGK",
  "key16": "5djwffWKqcFwbuSCy67Z8ijMfxvz5uXMYSvHLNoF283N2KSqiHokCQtSQfTHgQcmvipwAfQ7MJawtzU6NXE6g1QT",
  "key17": "3b98UbHVR3KBGbb9BsjvjDFSmpWmc3eshzwuoBrLQS46GKBe1psHXdWfd7eWeszQh3N4GiUajn2Ms7r4etiFS6zH",
  "key18": "4krbDiYbg2NhorCFNXP1p8e9zoFzL9VUyoUyPdvfkgbgLyWtA41f8iFqN6hgHiMHwj7XGBX5cQzRrN7NH2HatGWz",
  "key19": "4DZbJJ6TVuo3qUmZTrHxy8aSxwtyAPYuMKBmkrQsQQT8eQcdTzkGQCrcbNr7HGYVossu5kDXePRbgoovrekfAnGk",
  "key20": "5caVZddqRkPZFamX7KfMcQxATz1ryDM9ftXaSowhg8k7DBsuYecbA4cUSx9mmnZHNUpS1W4PoVLx4Yr7ftRRsgEy",
  "key21": "2aJR5JAqTY5p9BZvUSejdPYnuxG6mSKWCb8oJYLiPfzdkwAvLHM6aHqmBWoGUHWRKMbkg14hJE9gTxyvb9AVzXqb",
  "key22": "3U3cfy6ts7JjNY6HK9w7PWgb4G4zbQKqW9Ea9zN8fysFJ8LyVaSN42MESfHfabFn8tmP1G6A1bzBYiRayq7Fxs7G",
  "key23": "3UBn7FF44K3ekmH2qXYoqTW5742ehM4J1wwFiBe93zPpgCxsPEuDGHCJ6B7axafR1wGnV83z7UaW3625mU73iqud",
  "key24": "mUpZQd7YxXqZTiLBeRjwgT34L9YwnzzyEpAcebU6NTVgcocMYFx9dd6rDcd24CXbVF8YGZ5HEZFbXwede2eCSo6",
  "key25": "5vuj7jLeNQYjApB1uBZLt8o6evyJqtzMvCSMPRj7aDAtRkT1rnfVXb9DWP7dr1KAqcnCpy4YQfm9RTAWgJWWJhA8",
  "key26": "2LxYK57PoR9LQCYnAHxNE7cQHGYy5WDfD5MzEt7JtvK3goJ2b49yrBjBxixQ4AMieU72toQhhG1fh3HiZ2r7JwBa",
  "key27": "4tHJCG2KP32YS48aGmSL6Ued7e2znXUdsa3zR3wEwUPz4YwbCCvALcNhoPeEfZ1hRFgxewB6b486rL77Sn64L7sP",
  "key28": "ZsAWCp4bzPecNmpyPT1D7neHQZuXBdvfkviZcgtLHscFE8YENcbRiudkCsXW1jViD1YWdkfwKKZjD8zqVbnbgrH",
  "key29": "3R3oS96nX1C9UsXaMnctGBirPVXCiqoanfHm5Y9aT4hbHXNd7Ke7BpM3ngdbKwPj4nzfFWB3LAjNWAior6tPbQg6",
  "key30": "zC6a1iE8wJktwvtfmd8dXVkhfBSmX9BPynnykQaxshwabEoQcEGmhakg6uHBwCnjaxZuHAaHRdAf8PTnUp6y6uZ",
  "key31": "4gQbuUJ7EVLFChGV5KTpmoEXmtVu34rsmYt9NnzVuoRDUwBqetpCBgyegTgqrRVr5TSZMPtqaX8FwHpgsRzoC486",
  "key32": "8V3iF9TMgN2xGbCADDpEHadwmfnLxxLpRGisBqr5ZPgXLtU3LCmWaGLdNhYDseHyvuqg191tBo5yQr3ZFF6vSx5",
  "key33": "SdBUfPfAJ4ggYCwmpRfpAB69aNNdJmakXfchwf3kfFmvD1adifu5PqsCMHAkpyrxqkzGMC4mqqjFNgx8V5wpmof",
  "key34": "5AjczSywumZuHBE3xPjEezhvEZqbrS6R1toEZBcgaYpLxe9hxsGT3GsAFFeVYscg5MS6mmqSzCuJoE9tMBzZKpdy",
  "key35": "48UMCguFKM9Wcr2cXSPDGrUpiCDy79BYFJkeRo3ZT642acpGTiqsUkjEnysE5f6GZ9yikVsXfa2SVG8v27uu3BLY",
  "key36": "4erB7ydVYYFRumu2YBus5pCc4QrnDJv2sm14CmTzakK8PqCPfaB7LoEwzM9CojeGAQA8RkUHTAKbcvEjdmZDVyZ7",
  "key37": "3kJtc6TsyJ8x4yhp35P58V17TCy9MhWqUXs4nCy3VZQfHS4nXHPkoL2i5JsABLvLsvRAtPRL7NJ8nK7piQt7EZjD",
  "key38": "2t97odLefCr57PzmzLvJqwTso2W5fWQEwB9TdAKJohbViRBzxmw8nUK1C2tVzktHwLcBXEHVH8MGCpLcZaDiH6cB",
  "key39": "3vujwQnHy93xtKjgzP1MrB76UYwqzyAnixvHKDiodngLuRucqYEQjUNyHdxWjwTL2JHineKSjx5VcxWQU2JnUQ72",
  "key40": "4BzsEtNJBr7jfc95ynzmAxMy9PWwfytNpXexLaTi18T5K2KQNVeRoiu1mmebDBo6XP3rDnxwan5NQX2gmENJyjCC",
  "key41": "4NpsjVBcDfV6VfzQM3jHGBX83snAurrehjE64uiajmWDBQxZfdn6bKDfeiSf5A1Jux9ic1hMN6wvYEzvK9No3cZN",
  "key42": "5GZvpy4eov4X89JBDPufRJ8LXuSTgvNZcDg9i263FoYsm9PCn959T9rjyP6jyognWgCn8e7jwC7jxyucwqmAWZzX"
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
