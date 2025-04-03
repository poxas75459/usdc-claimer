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
    "Q6xxSA8R8RxdLrQ3dapqypBusVm9V2hv51tazUJG2JxXFB8vPBUPnv4AE9dxngkyMzUCyDAQc9ZJae6peJpJP2R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hshUeXTmbdrPpTpeE4tP3C852BzV7m4UDnSt3oagRXkKaD4N5VeHstajmHJyttJ9bK98Vyyom28fJD3jz5kvUZc",
  "key1": "4xguWE1Cgaub7aHgiKTAvuFZmFL9QSNXSsMVoHMTg5BANo2xAaYuWD1Mx9E7qL1VaoB1govjXhojZbgHYwmvYuKx",
  "key2": "497fGA4fVNHdouzrAZQyLM3YvvRr49RW4kdV655xFaLCJ3kMjiJXCHF5dzx7gFjcabPxSE9T9xZyuV942i33ZND1",
  "key3": "2SzLm2bFoKY4X9xjbrzcri5Jn6xn6on3dAMzoBYtxXdygo9gzU9V6ZAj95Hq37N6gDwN9bj26VNb6s41aa6VyjQ4",
  "key4": "5sbfpge8VZsh5gDBHkGXm6tfqn8ZXuTVRfCahgXdoS5gKmgATvmzkfvhVdj7yZie7rhSvCwqUbNKBkv2PoXRqMPo",
  "key5": "3wFrgG2527j5KPg1RC5tyu4cb5RnrnSbRDkx8WRfpdC3mS3Swy8M8TQqea4SQRpwj9Ee3W95Awhuf9rZnWXgwxMj",
  "key6": "3ZQ8jJkAgY7pLd9mF7C76Q9L4LusxKxo4CHMagrPfdQ2h7BqYfADVYEq3JTAmRFNiKUzU5tcY41wTzi4cJw7WgSG",
  "key7": "3ufeB48Kk6tPbNWA4YbsfWQdVbxbGDc2VeyRa85mQhiesvJfnf4HLLhwQqdwDZKZsSX1ND9kWbw4kTMAe5JGr2KA",
  "key8": "5AxgzJdqWUgwNXX7RMnc8ngfzYsUNqtuhWh6ppyqDHYU56J78Svzx5piKkE1RMMpYq5nZQLFacai32iUj2NZzLWc",
  "key9": "4YEu7XhRYU8MpSJkAH8v5UWgvMf3wGAbFdsiT1Cqd4AtacMSiR1qxWWgfsGkX1zsVnCpDcNyQujUKqT8XUWKMtjz",
  "key10": "5UArvSDeTpNBtar9EV7pT7cyr6wr8whj8G9PeuHLZwfMkVR7mnE9Hp1RRdXJq2bxkTzzXhaUUXi57rDg22edT7gC",
  "key11": "2CP8NELC8QXeUZTb8WzdsRMnJPk3F1yzWMo7z2sXzjZHBS3DWrsV7dJaf1PuYSFBcacNSsW7mhjRrgxa13jvcFU9",
  "key12": "5kjDrmWAUzEo6aQMinUtu6jmiCLzjJkHz6bZjaicFPQouh7o3n6DDb2H5XJ5QAwDxVWtxCqLg9aiEXMcwoDFk7g5",
  "key13": "aw1o9P8Px2ndkWUNNyoEaVuxoeQCoVLAd7PtZ1H7P9YkiPz3zYa1rV2LbK1339nsVEvVVH16ibTEZcqAViYz11G",
  "key14": "25tThezTxGjYwbHEM4qhZ7yWCK24BcDPqGMMByj2T6RaDjKJEysVm6kizW52e1kkN4mijh2QBdH2ydW7PpJkPyP3",
  "key15": "3zcidmAZKeAKJL3q42AR6fgeXqraKdtBzB3kyDX5k9JWiKxSYHmhP5x9iBRDsbvVKPrVQxuUcoo5bgUQQzL85Kt4",
  "key16": "4FraQhEd9FtFmxuSUyzAMVREniPL3CarHwRhUC5EBvK9dM9pD43J6Qm85YHeqEkXhtNs6rCrv8TFQjRhfBCnkS4A",
  "key17": "3398KTgRfVy6ZVA4U9VutgkqggEiRpWbXKHxp2ZDsB2N7gGaB38ozmJVLpr8mm1Q8uoJQzkKaZ6Xwm1JqxL4D6kk",
  "key18": "3K1Rb6g7ihYfEEaU1GQxBTaffNNaR97XKq62oZpRSnm5fPygveh7ZwBSm4CPeeLJg6xmgY4ZSBf6qxTd7rQndNhg",
  "key19": "2XrBaNdNkpMVCxpQRkswRSrafEmJYwGMsdFotRm2ixjXEku9CUisZjcdW8cNwnkT1dV9p4JYuDvy6LhK4nXCGuzn",
  "key20": "m1W5zcx3V739suS799rRCgZVXiQ91s8AcJLvwknAmLecbAagWmqZ8oemnbVMkPFXo7Q8cKPLyEs2XuUBAsWGTDR",
  "key21": "56UKaxRPs9NU7ABCdFXU9oy2tpmnPdXnmAet9ndxgW18QcgpVs5tbSpnUiddREqverhsY6n84sKChSHBfUbQZcNn",
  "key22": "4Dmq6kZv99UMWrPmpXBrfLKpes2D2Fuwv5x7DUM3rmvomhn29shNWwyi5GWSqE42yCajjUd9ai6HKrMcrNtJb5My",
  "key23": "vgPYrk3v8zB8EEeWEn3V4dm4UhsRBjzzgJQjJ3h7ekPr5RzK1wVs7Hx954xtk9apW6mDKVxde7jh5bPnBf6ES86",
  "key24": "4wwbPbbUpbV7ck5q8h44cDEa7x4rK5zNjGHJGHUVyZdUd94bAJGzEVvj8ameze2J4nGsTqWmsyMW9ojuhC1LTMzg",
  "key25": "2Fw2qXLPpn391AacacTR2ht8rChvUVsrTcTziDLnxUMNatCotPFxpGiGF7Wxz69toT8fk56ZRKXi5PPzEMQDZNei",
  "key26": "4M8orSBzqCybTAjfnVb7cMvX6346m2dSHBKWvFjGr8FCLgea1Dn84JmvFFSFmRJ1PY6sjq4W9PY3TcDDwk6hrAWX",
  "key27": "9JEbAMfg6E3QJhxtDc9uqeSo9JaCyBZsqwBZBD1WqH8nPiLBcnAManqc6GzQ7uxRtP8B56nfZRsSVDWNYaMEL6U",
  "key28": "58peccNAzNNUVGQy2Tq3dHcW86tYMRpQ64ks9K7gg9V7hEfXZa9qdPgd2NQdbVZVxYUNRx6hmkNoPSPiCTrzhYAV",
  "key29": "43eKgR39BQejYn62AYbtAr9PVJAob2m9CqEhxmnX6SBrtUAVGg1ek8mQrrm7kkTMJ9Dh76kCy32qNmQ7akv6E5m1",
  "key30": "yu8WEewC2BcMPxBj8QXujTBV7WDtFELtRfg6RZPZNDASAmUse32ThGgRsHsrmQ75Lun2K4d5arK58k8mHHApwJJ",
  "key31": "5u8BUkTKSZXka4VAtz2xADZMZzemyVbzy47hEftsB3WHDpeqtrCZ18vabZcraWkKtS7P8SjgJ8cWJndNiCPCRvnr",
  "key32": "53Nu5owqBEnN2YsDP6uwLdPu4FT7hX6FDh2jrAuWJWLQPmsM3iAY4w6NckYQURd8FZXYK5FLvagARHy8X9nbXbuu",
  "key33": "FKNPJ6obAP8jJ9pBFy2vFgrcydx4RKEEoWudUAKedVHDZC2KePmJ7RQ9Q2TeoDFgL34pRiBBXQbS9kYtUb6gUAa",
  "key34": "2Ag8UU27mcMx5fLdHZAGLHv3ywY8NNUPv7kBEjni48m4CRwB4yb3ys4YniiA1Wk41yYHRHj2TebSPiVDqbXcyeDL",
  "key35": "zjaGw2mKzktFavVvXQG3NkthHfwbjGvamvueH7x7zLboaM5J7vDD9KD1wcgUunbom97BQM1m725Y23YKGgCWWYj",
  "key36": "4yrsYePCH3oj8mnLTafKzD2w8twWubHNDsGXcBLSgvcUsEekvjw4wi7GTG95wbo9icKzg8QgA1T4dDeSHF1LA4Xb",
  "key37": "4qPsAxNUha6wFtfPFquZ32DKivh5Hx3vbpbuybTm5AfGRjo8L8QcNSANnDv9djJ8MWuL29bhn26c3N6kTKZMhDCp",
  "key38": "5BQRGmCJLw7PGLsHtqPQfVKj6g2JZ7mPSN7n4z8XNe8tMJdkSuZbep8eRSdbLLgH4KkNn45UTbnXfvDottuG5G2g",
  "key39": "ui1C7wL6UV41sZF44TvL3Z2xReHBmmdpLaxQ259pHFk2RJdwdCxbeY7XZGRqv3bMjNgWEfQKDHdE6QMTaHpLLqC",
  "key40": "3dd3zGfXYBt91xTqY9W8qQQKknowHgSWCUZUEvaMxj9ySQpKh6C2p9gYNmzvSLFKEyV7Lf3hVmZCBi6FXjR5gzNo",
  "key41": "549yzHW1QQLGA7FgP6eTzaPQLmHDA4fyk1p3vn5SjEkLBVzyy78X1XQPQvFm8YEfUsRsupNBTSEQtmpkGvRUfv33",
  "key42": "5a7Jyj6fYrjt26nEQf5iT82DH9YJC46YxkCCmCAN4jpPVwz9aiBwxFMTx1msJxE2YcJyyc2JkKja4AGJWJLNMusn",
  "key43": "N2cnXowTdY462ntxo2FUGz4qEjfaKZuKyhtGHvpK8kH15Dr1fbrvLxyaPYU17QgqEHntaTU6575RN3V1dt8eovd"
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
