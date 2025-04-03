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
    "53Yj98U9ven4qJG73UzGri9tE4cfuGwobCEVKL79uzLJvAh2HbRrDdwxd9Fy3fphVLjdBqrSZz9HmMrQcbQLaqq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uZnh5UnrCBQBqzpCfAXBsa1jB7Wsv6QkheNd2PoZVoo2r84rKCyPmChhADHxJ1t2eC4YjTtFqF1sJQxV2MU7bKc",
  "key1": "42sCiFHssC2uqSi3o1jWDhFRJEkyioQJCWs5C4UvbspBuNPhCXUB9MeHmiE6Ert59qcVEtkrp1YU4tuJPbWNvXBZ",
  "key2": "NW3rZfa4vJL7uJNxMCffBbYmNpF42X4rK67nYcpFHBouzyChi8KQSNVUjGaWy8xYkRitiox2y251zkFMNmcMfMg",
  "key3": "2ghnTiF8GZECgbGmqAX17uzr94dapvSXiNL7BqKTEPeZNNRbjYh2uYEj4Ac4tanD5wsQA1kAa69coPrFWgf2EXKK",
  "key4": "5adH3XTDM7s2a58NmbYdqTRC1rJoQwxeDoHZewFQByUdi8FUcYxWC3V5ysgvrWrL2kLoK4QvcH4GRB2nPLZEECDY",
  "key5": "2XW47xWNZj715wZ5EpZVnzqzinNJ9F3eCeYdFv5pJAcRmkqemHEsjwWps2NAGfdr52BbzJR6RjpdYSUztdrEKvrB",
  "key6": "24f8dxjvVv8N9pMXYEQG4yaBcxvDoBS3KuaBZN7qXPYTSSBRzuh6awp13qzZoTzyx68gTbmKqCzTLr8AnBQWov9n",
  "key7": "35dh1eLaaF9hqFTUUKFpgQJBZk8YbjfwhNMvcxrdsGLkf1UPVYmPJgCrSZrPiuQH84zFbFRZxDFW2PecbXJX27Z6",
  "key8": "4viqvvxbLtuvKy9i6a47SkUmb9cxAjyLgvzfWp1ZbEXe6Ttx7bhHcZKDaFzGrivYg2FsP1Hws9cEuA45NA63qi4F",
  "key9": "6CaCnhtreUwMqVX4erf1r1p9QtyiMyzt5mDZ6g4r8uzFWcTHimhoxs3mcaDpXZWGPhMuG2EVRCyDoYPeP1WQYf5",
  "key10": "2KUNZG97XcmcZKfySxUbpSoQjiorfoK31Xq9KWDV1nhxYt4DigdTENTqKqdSgA14y4g5ZdyVEEvkpmzHBb2NabPF",
  "key11": "3kwB9wJwbfxLjXTTpFHsERBfdRiBwFKpuLGZnkK4BEmQzbL9T9PQzmtQcgXTrtKqQrEm7CNVC29TxKTdMfsnNeuc",
  "key12": "kuvU1pwgePgGTJGAFH6hvDEu4uE54JZkcyM37cmt4FhVrKRCCYkjyCoGxii1uT6RJ6NW5wq62tJQQSpL8G2454f",
  "key13": "3GUtCaEfSoQD8H7MBvbT8NwHyHrmQTxz8W2TsuabSKGnCr4CZXtogmESZkR5AMKaoVJdz4URszopGZqvLtdSnTqA",
  "key14": "4gwQdKboxWsrP6LcyB1Uzbvo31LjFKoab6E81DN1dXdYHFYjdKJ4q1donKiXTNetPcFM46EUbEyAE4Yorc77PyQZ",
  "key15": "41m4tkMEr3VgkNDytAjgWBhfi5JcacopwGRwuZBMTeXSuCNfhr91eZCqgDTWBtMC5dqZQHqj9YXgfuwXMXS2NLxV",
  "key16": "2fXs3qw2nmnsAuFuSYL2XkrSSFRLuFRAT7ppLUYCSs8ZPVMCEirjd1ppTvbUWE9mDjHZjvhPchZ72nb3Nxzw4QYP",
  "key17": "yRpfSc4vNrtxuoaNW7aRYcjrqmuKjp8mijWtnNern1ojwJ7x9kLZPg9gZHPtLBfg7mPxUjXxEZ9ozeV7LHPUvPX",
  "key18": "4J63M1KxhUaxppZgqpd1SZLBu22RmnFyx8mTWX3n9UpDCr9pkTpiDQzksJGiyM9LBxUsqXc8jYSod3bTQcqZeiSx",
  "key19": "5MspwRyXknQEFHcV3HG1SvmpxaKohV3Fd3txzBkJSTu4Xz6R2uKpCPn63SKvxwoSAUe4Vm9iEEUWeW9apFmQwNMf",
  "key20": "4tU5yBTfKZQjdNPEXLURTRcvWVCq7eMhjZCr73vTCx7WNsZwrooxYJN6pjjsUAoXGPfts3xFDm5vqJXdWru8VoY6",
  "key21": "3inBDjzeW6yrwSGTiwSE7Ga9vL7ASBH3T7bNvFnSaAzwt6bZcavbUzqWXwziYAacHbYVktrViSdEwav5L7FTTwYM",
  "key22": "4X3YnVvXUyZGodnv2A8qgHNKv61MskgRcxFiD129uTWvZbFwp7t2FMDqTu4GCepeZTk3fkWmsUwLjrvzQAUEC5fC",
  "key23": "61dC55E5GZ8VakCF7rUEF8PLCcnQnztaSmHXAy6JEMRPpzwVQpSfMmVPFDxHZbTbN4dDk8cau4UonmDsbU4Hsj93",
  "key24": "643kTjM4yycUqgCnipz5fuf4vJFnzqU1bzzHZNQNY6g28sUD7GfuaAtqXyvkgthaKogL91vbYgBEjQHp9ahJkaYR",
  "key25": "2JhhX65aeeFuyh9x9KFpeaUNgvkZkPrP1zPNmkr1JUuRer661TrxaxvRocV9uqAP9DrFjpirRJCD6wRvK6zkug7K",
  "key26": "6gQLhZCTc3MPnmDDTQKUx8skwuKoYxvnNJ5E6Hqy1y4L9GKzBxFgESfAkqY9vv4suuvMg3ZixrtveWcQ8vXXBSh",
  "key27": "HrsPwD8ZdY8eJNLuJUzULXbC1RCRG9YXpnrQWiURcws3E45scqw5cTKrHajbaP9u5nraTLNfwKWxV8KuDpuc3Yr",
  "key28": "3cXGGFmEVvJ2ZAUSaYKefRRUKpqkBwmZkLCLJXYwNc9phCYh8UZrKHkgvzY6mrqCB1LEoEG5BBQ2RZF3qgbpPro9",
  "key29": "1xdhFYpod5Y86Cya7j9hok14WMfTKZzZeLuYidvj6Z2v4PVpMNJZrmnxQdmzMBjxFRJm791u1Rfn2A2LCR1eHMb",
  "key30": "5jN8ZkPv5xmZe3BjLi9YQ5tuFTJE5XuGyAjSqGeHQd9NfUCtsJ4F3tFvLVMqnXFepGLg6yCDHygp278MY2QnsZk2",
  "key31": "4S8MwmUnFiCFVbCge31U1fmomnUQ2Nv5CtHZHyKjgQA7fc9xKedkKxuiFw1QBWsxeqiu4dGzaPLZYrw4tmWv7YyJ",
  "key32": "CYfSzqp7Av6Hd4qzyF2gxY3fgEckJSvfqKCZg8GPBDh8rbP6iCSk2JBtiCUGV2Kg6FDvktKQGpM9PmDkNXu4CHK",
  "key33": "3RALmc446z9k6yScXnLkgQaxL1wDRDwndWRwpCggVqWfGHzLDGLtSRPn3EW3Fe1TpikB1AELRnphFi7K8DirYar8",
  "key34": "5U8APzQcPWRJyU46BHpFvzQPJ2BxrGJbVpb9Zz81KJEQE3LGQ5tAXxxj9U9ADHjiRzdRgA2kyAzeVif3bTv2tnN5",
  "key35": "MAK1Km3LicRriZGSzB9ADmDXrg88y4FHJEhdygmUUX7MDh2NFbaehbG1p1ZdrRULFzSZQT4cfEN6p93rBZFkEjC",
  "key36": "24ZmjZwsiNuYmqjtwTQZk6Pfof3FP75DRWou9ZGGkVad5FvXBLF6Mqdv3SKmhHWBte63hMXbsbqTuX5zX9cu18Pb",
  "key37": "313zTtHbqaE1aRXh3m5ooc9y8bzxw7YMfoTPN7JN9RSgiai2ZaZcRaH2eUbPDL7bzBQhS1LBPyMPmXQk8yhafm1E",
  "key38": "28eDZZUcuYrd4yLaq5tcBDoZqf6FzHaNa7vwf9iVG18h2rJR8QBTfkPrucdAntqkTPraHBkbMnpP5JeEVS9ypMsd",
  "key39": "4JQFhDMtEgUN9Tk1Z2jveTsT7wbaAv1n31cbfAyLfruezxPv3b35qaN1cqBnJj48VLEMNnfsaeWbxegpjhqHcjMA",
  "key40": "49aYsqegh7nDXVraa29EEPL3jwaYHS9N3PVgBMc3ucfx596cGFc77KJJRmzPkK6md9V3BsGjcMpprE8Z9jVxTJHy"
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
