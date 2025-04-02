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
    "2LYJoxAT29bq27Ua3Yzw6pCTYQC5psqAjJfyQrDnf7kCkF2e6VLbkASV3iRuJMqbNjk1im85UApA1mnJ74A3YVXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33NpRrAYSsWGJJy6zeZ85cRaKHSbXsRJFknWHmETFyL5FhumnACA1uSP3qjmMUn7jXQvQZwa8k7FEuitKjReEJkY",
  "key1": "kWG7exSCJh6BRyaWxZXpecmc1mSwDyGN9pHCXJmBGibqCSceNh1i3j9LXdXT1bxZeeKYfPSmamjsmt5w2F5Mydk",
  "key2": "3LeL1PqjTVTNhzjGWc5sUWTPFgHe2eNxRMP3dqmecKbADq6p3nPGuGQbRgXHTkxqa1nLHRC1h2RHepWFgVfns8eZ",
  "key3": "4w2RawAC31hgJLqCf1Ac6j2HS6482ELK54cyaKWgrC9uKUqDT7EjajgdiMfAvXzE5TskW6FXrf5FgNzqyXD5qW5G",
  "key4": "2w7xrZVNrXkKLs48sEzXTkyChVJDbo9VajMF756DCaXEgne3DpSxBFNiyoJUhr3RxPmStZiD4cg15Uxn3hRHuKmY",
  "key5": "2Hbpvtoz8UH5rhgCEaaNcFXxubEuEeRPHyjSnNi9MEpgafrYJKvgwh6VStXUd2RH1H15PZt7p3Wme2GPC3BTZbu4",
  "key6": "57FnEPnYncEmnkkeyGzGHHxqBLinZKRbxi4TXHHRyYzGrWg178Pkmh5TvNS3xy2S47fivaBQmPvxF9WzkQNSWKLW",
  "key7": "4apg5RnjdnvMg6un1KCEN8ArBcqcqC2EGwB2d5zHFvk9dgMn4PoCZovG6Y5Y5zd9D2FKwszEZ3gA9oRuefDEjsTJ",
  "key8": "5DAaPSbEW8XftY5Q2GrpAraiyR8rtg2bMMzCou1ptkECb7m6ZcPwwdPM6jE23LsP9gc3CmcfiL1acSKmEMBbPq1g",
  "key9": "xNsor3i7XWEsf7xLdUFp9uYbMBcwC3Ny64LpYiuLTzoujoNosnSJPzgaXZjhg6okKeW2zjzLUiipbJXZKa6yTtj",
  "key10": "5DYnUmiFE8rHzUrYRPfWxqJFuRQbv3hsEaGpHMX7yqYzgirzJRSUuewtUwxQ3Qwu76HoK9y5qxMQTsPSGxYLDF25",
  "key11": "5EqG3czV5pzuj2qsSUopfUQ3NMaF8FgFLjAhtQQjWRMTfp5s9kjpdPXHpcqQcNH7s1MNSS5MYPR5W4jxzJ1pddvq",
  "key12": "5zjASentZneag4uTRe79iHCh85U18vSE7a29rkMYGRNuupZ9ypcRrwFqjtjPctq8fBmTZNSmCmsZC5Ny4V8WGY7h",
  "key13": "xVbz5cGLSenciYhfV99H3QY7BUWkDBs4YpCPvropDeFw3vLGGw9rJj21h2WfURWnMeQmueVETsmZNAKWxwapZJB",
  "key14": "MUW7GnoqRpKYnpTaxMatcJf9WnMP1PTmMV8XCeei3hcs9BZg9AvntKYNYGJNo1XKo1p9JyREXVfDrjHu5DAkiLd",
  "key15": "3NyzypeekSKe16EDTK5A9F4xTYh8N521ct8M5oKmPU6frcpDWUpMyG8ccRuWGWayXR8Ax43cVGNX7xD498kUH9U4",
  "key16": "2EyYhDw88dPwydsiWBd3fTSFSvSTrutUF7dA26Z5LZa8Mb7JWb8fXfnHL45nuiNT7a6nGvs2qQnvkXfhXSCBi9Ef",
  "key17": "5T6C8M5FL5fecZSfoz5YnyCjeahTq3iyQzdwLozHWM2AWwy12M94L4UkA3r1uyMLpsUQeUsX16JX74TRcjUeQcc8",
  "key18": "3D33NYMavnafnM3cqWVcAJpSukBrqbwRC4pX318nmuF8E1j45897Yvw4ue35NZjBRbqTembBWi2jC2sj2vjGdPqW",
  "key19": "3gEXSu3mLHPH17oPMP3yjY71J5HcukU2croQAo1oyFchko3hLc17yJaCe8CKnXirymBGNsC6BD63p6z93JpDrFzs",
  "key20": "5Xj9EU2EpJ2zDABbVVygyHUaLutCePsTuVTuYWA9qB3jRDJpv79ZKgtwqchM13nGUMkPiGcN5NvoJqeo35DERhqM",
  "key21": "4epdY8cPSutYp29TeEURuqiJnBSZpPsQWti7MN7b9obEEoX29vw7nEyrMdSQapaSd9VDdxhUhuCjKwoqPbcteBRS",
  "key22": "2aTkcDC6rMHo55zikK1z2DdPR7bMyYQMZqDsos8hcGHRn4HmRjm3CGTjoo5zAABoUPRnXenAP2yGaXm6y7kBToUB",
  "key23": "vQAjMZAkx3gRyAfbAeJVAdvzjAEaCvBdarhLnh5Z9La28Y1sVr8MvGvymwGgh1Wbimp6PU6fvzkbw9S3FLeCNn2",
  "key24": "34XZZZ25we4fXnQEtGyTN4vdXV5WcSeG9jjs2RX3afYUhFkToknHphbJZnHyHHYZXRQaaQKf5HcQdDJFsdLuojgm",
  "key25": "4cAj3RwSsDg3xZRMtRJ1crnbKmxZK7MPd2jreYaK51VzWyUAsbCDTnoNNB2fiH6e4voEyuN1CC7dubyhm6kY3ND1",
  "key26": "3x2PPTkzntrX9S62nUhYFro2X97vE9R4cvDEi8fVgkUDGmxz96KuM4dtPPMpXc4r7hZYaDd3uewy1GNJJa7zB47y",
  "key27": "4NA9tgmgqtfcrSEFQ18FvEPnBu74ii1U6huYB9gtQ2jBtwfCCXcrhweWAFAkujJrQnwwWCjFYaUQm7UX39gTY13p",
  "key28": "iCsZMFuChX6ooLtDGnCNKqikESckBQNk9ATFGaARLsv9iu1sCbyYMUnWCvBS8TG6SqP5Zi3rM2BdrXZpk9TwdrP",
  "key29": "2gEV7PD5PJ2ZrpZ5tVQuUSSuXghCMnE4GVWqBhDQz3QZaL1ykWsPmosV7RBxs3jPbpGm1Z9KZbYFCQrtV1i9qgg5",
  "key30": "2McrsLVNK8x5LShmbDcMLuc9fGFZyAFwdP18gXzutrARJhb94SR7ieE7Dr9T8UufTmSh9zcgoH8m6wAgwXLu7S6w",
  "key31": "VD7mirwL6G5EKMHZHzjchqsCcHABW6aDiAHhzDVq8TMEXQf3Xo7C6ZbpW6bkeXgJcZqo2Lc6snwPXtYS3Tosmms",
  "key32": "3bxhq4PUZSJLBHPLbyYhkos84kzJpU4NjWoJ3EtXi5KKXVpfed4shQM7hCUq8k8TKjh1a7bwzkPxR45uZX5tNJHU",
  "key33": "4mD2Fm6B7J2im7QNiDKR3cbJPoUcAxgg7FedvgC3u1K9fNKMdskJFFDTiN6HTtviYy29muo8Z6X7M4rw6ixrC4Vt"
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
