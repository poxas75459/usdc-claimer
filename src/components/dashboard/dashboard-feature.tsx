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
    "5VdTUAC1B1UStVrTmM41cz2Q2pci3rX31Rhj7XzcUViwuYV7CXB3ENoajA6FiYhK5W4cyJnhLMiNwfZD6fCt8YpN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BFnha2o7GN5EWn4ZEYpW9GiBM7GymJk7Y5UJdvfSTtsPsjXi9kYqQ4rSVEHvNZCbFpn7uQ8wHuApG1pXfkrUsPP",
  "key1": "289XTFXKMY3boTeB5pUjuXkRmGepueLspKUc2tsVkq5ybeDQ5wvfqFskSZqFPGAyDZ3aw9117oyHna73gv5Ndj1A",
  "key2": "2nRm99XCMzyQQPPoEjaZ7JV2sdPMSJvbuUhKwrP6KwDA7gqPzcgYrjXfiEZHBkA3itnUdM1eBBh3JNr2Lhr2P1J9",
  "key3": "kBU1iBWnVt32KcC1eLdHQQyMKB8NYobvFnpw5TzyMhkHhVuAJofJbb5T9cyJXKV7RPhWovmLhV4hAQZiBAwbE5J",
  "key4": "5HA2AtK171Z1NRFX5q5PhNfJkST6YmVCXrAGpHb4HXaCX3H89jrjXpeyvxDJKzRPxCHEEEv9XJ5JJiijpWZES6BS",
  "key5": "5UyJRGxKo48h7NMcA9VFq1uVHsQ1hZi3Ue4m6krRpTyr3aCZ88azC5k9Urmo2FMmzCXu7wve7EyvNRswc6mswDKm",
  "key6": "bZNMg2ANpCvq99HvFVLesYAY7LAhjbZ89NiBqEVZYfX4A84gE7NdnY3yHzd7ugphDHNdDm4wKrPUPRvtuo6t98q",
  "key7": "54FJDWr5BnNFCGkTP2rcT2pKe1rTQQhpKYwN8f3VB2qGTyV3XLYASF3nL7nKxuumdbCct3WT654ShiMHmoMGupsG",
  "key8": "2WFn2M63hB9XqTdKGquAueKyMiDNsfuYEEJUE1tqfbPoFcJqrPaYokjJdERzPKnncsZNpnVMEmR8dXaMHBoxUXAL",
  "key9": "3DYBL92971XZVPgKrNrDb2oCY2iBshpQhmmnUBmxK34qkw7Hy5YxYs9bnZCcC1td5sCA9wmgnDpCMf7auWqiBdc2",
  "key10": "42G6WSQF3gY7gv2jFUKYLY6hEKsKUnsk7qmmQ2pzR8Yf9Nbwc25LvjYH8xQYJayHEU214MdeYY4hiSfSC6rGwpd6",
  "key11": "5sEaFoeiQzkkw5AX6mFRL7wGDiy7WskZoYc1fhJqRXQPueQYivXkR7NZQ54jEDZE2iBkn1WKSJnLm2Z4kEPNkPh",
  "key12": "4rt4UomC48SFrJMHWbDos8DHR4YpmCuMA2L4kdaW5BkAoR2d1wutTNhfpECcAPhTDXx43JWr1ZQJpjZNkysnK9gv",
  "key13": "532r6rxbJC9pSH1eApKc6ePHg6CCvTbY6g15zBYhoWonJtWKM31ZxnHt5kYdgMqqPg4qnsvHg1YYt3z1DoW9m99J",
  "key14": "2gbPkH1FNfPfTwyRmVrkvwv3P9KkCeejNNxxipSNKEtH52wq6nTSAjy47DBjCoEK3w58hBsUyLBkwHMcjJRih6U9",
  "key15": "4LrURhdtL9SBhWSkKqgjj6TPZ16oKqa6Kn994HP57CNyk9UCyETWHEYUJ6Ay7gdL41JkmnHt97u3r3Hho1ymKfLB",
  "key16": "3Kg6WBx5tJUVJxRVaKKQs5kcUhwpNxcURqkrqJWhbg93Jv3tWLrT4J4NTvaNsjS1BvPGmm7gTo4Cjo9LKzBnQ9vj",
  "key17": "4TccJ35PLkYUVCSsqhwj94xor3HLGhrkN3MVMezVaieBytGru2A62XDxbR4rLGw4eKWTGCZ6Lv95Bp38xyNMYio5",
  "key18": "3idHca1RP1kdYFnonULDe6sdoBJLX5Z9z6dd1xEYMLfZLunKFaGv687JxTgDHBtGJNoT9WQ7Yf1wDzM3GKEiXVSq",
  "key19": "3yxrHEBsoVwWVrUYo1G1rnsHJmNGXdga9BGWBpQukyZPLHNCAWNVTGqYtJQsxWr4fjqUweMeCY4V2qy1WcafCwwJ",
  "key20": "56GcsPqBqsko2DJXi365rdCgwah6iaWQaWfAXviygqNXeCJyGHsrjWrbNMsEU6S1LueJ7bf3bcHcdWnEWQxZZZyh",
  "key21": "2bohyR5ePPVTjyZ1ATgYLhmnTWx2wCP1ad5zi3c9gvnriwUYbKE4A1XLFTGQDK2rdNy5aDV22X7JHBGpNQEuynTx",
  "key22": "3MD8aVq7Mj3AAXDuXh3JffSXigyDTR799YTPamVeVmx59bEyf2er1uUgwoPhgkQQ9hdcmqRmUdrzbArfJvXNetLx",
  "key23": "4Wu7YtFL6ADrpz4vvQtdKg5uACGxRTovBTh3yCQbws2C37CuAApMZnZwhQn6tB8dXueBW2XXW242Bapd6nowxftg",
  "key24": "K5RLLZdiRHZccnEhWMMhWWMJto1dcN2YAw4c86WEVaZ2Y7MCboXiLVCFbvv1k7YTnZGMnAmMBCqeXKJmUDsuM4H",
  "key25": "zgb7W4raNhbegETBwXoeEVCFJYpuDs5JYYx1Q8Knb1YBpp5xJGmKZeyq1z6oRXHm2JKNn5TkTcziUbfnXmZkXxr",
  "key26": "4FZV2bWbYUbdmx18A9JonpUAhZZPMi9zNFYhF7Y2pB7pB7R147seZ8yfLnE8qd8omrHifqGShhnmeEYgRJQzkdHv",
  "key27": "2LTroSLYjUno9xEiUQ4aAa5bVBRYPkpVNu1UvpY2vDQtEAtS7YrDbB9gfHVcr5PnTYV9spAEFwWpqHNYYb2xh2ws",
  "key28": "4qGHPqXQSErtmdyg1Eg2b6JtJoxmaH6fNjFK3RjVHm2HTYziAvmRsgdkLFZ5E8SXLPGiBjxxaWBHKb4rRb9Dhxkn",
  "key29": "Biud82UALrTCV6puV3dn1tkUpZFWCBwXBMPiZjs98sFkGvu1yGqxqiW8nJvyE7FJEzhCrKjD7wMy3w54r4TgkWu",
  "key30": "3s8JS7wP1AgfDR1sV9aU1kK4vFj7mRK1hmtcneFzZt3JQ7uFm3MmiSMDeGyBu8s6n5dDaJiTGoAgmJBDT7UqMJZs",
  "key31": "f6YE7TsKfg1CHca1UY3gLa5cViey7s8qRuMRkz3iZSKfz1SuihnGxYBFf6CSrCFrj5dRUtSgCp7DnadtGotcA62",
  "key32": "Ew3TLeAduGkDwwHmCzdN7TnTxuwu4ANGpfpWx7NyVdR1vpS1ovzqCjpvTBViS54gYsqq29WF8sioQMcxPMDPREZ",
  "key33": "2mAsvVMBge1xgw1stP3pfhnqVzVZWMopy1vZyPtaX4cM2csaRgZgbf2Gs14zMGJ1MgrxSup8ZjjVYq58i1Q2554s",
  "key34": "4bT8PiY14pfWDMAURpbNq1fBUE77AJ4N1sbmktedsgJBKGs7UopSXh3TDHLMeybNKb7YwY2Quu2T4s446PM3wcTZ",
  "key35": "3oFcrdsj1K1M92LwLbQRgz76a1ALpwFsNDgRqeLnVkD8jrzfXhSVk8iPGjkSkP3TFzUTbMxrK5poLJTL2xXFsRgF",
  "key36": "5vu32Y9YWud449PGXpsv2DqDJ6k8b5hygmWH8zHyf3xjTBkSybA4g7tN9rEG739FsPydatLN8XmY2EB6369Zcna9",
  "key37": "42UQaGrMqTYRqcoqKuuHHGzW58ZfWLq1yyiM9BFuKZwvEwchFoPfL8sXF68XRjqvXvCJ7s93PLihHvtBKAATTjUs"
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
