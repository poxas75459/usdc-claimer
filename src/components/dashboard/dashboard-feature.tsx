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
    "4g4xZwEGUETA8FKMWb9KvG7UhXu6Z6gmmLaJrDUoqc2R82oMdEuASCtQ4xYLjGwfTHZZvaafuQbqkvrWZici1tvG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3meBcR6sN8Xk3xzs7j5gHm5StG5GsstL6DpK1KoCD9HyhbZU4ataWBMisN9eAavTgyMionyHBcYm3GLCyMDEX9Xf",
  "key1": "39KQPP7sdQTm125dACXrKqfoHYtwebjzqFUfLHjDsEzbP82q5VdHrYGG36AQwyz5szqXGXnb3SBHNYwbvxMGXTqy",
  "key2": "3XvsaETzN6hcNG3vYAoJ5vnxeRF5METgvSk4kwg3ujNiT9eFAs68X77nLzGN9iFotQVP2EJKEimbCcLDZCf8PQMu",
  "key3": "M8CsAu3h1bvvuPUuxF6YySisrUGQDs4jQv2nG6Axt24C8yCEpUyfuyWE5KM8k4CE85AQVevadXSKpvzPGssz9gb",
  "key4": "3SfPrkK7eAoY3SCCR14FRYRJWMztqEa42JiXBqFWPAEEyLGWnVQHASu9DU67BA5zCJw1yMVmFc4ttJjEv3cDY3kr",
  "key5": "38qBfgRpJWGBTcUPMa6AA55Rar2wtQXC1y8KkQrnU8PiNSmaEiJiNX4YiZNnfdFbU3dsPR2pDuv15CPUbck8FSFU",
  "key6": "5mcWQk6oFBKGKsMzPt7Nkzahzf31kFKoA8Ha4u1Jn28kSBRQ9te7x9ynA3b887FDcZ7dBTbCkagD6KP9kLYKULoa",
  "key7": "5KxiHttZNqkEKh2HyC9yoJpAyDmYM9yXRxoh57JLsezxt8TmgwEHP21QDrJo4K93BtnU4nMo4ZdDtngF3v7rHmVv",
  "key8": "2JYUqDVZSVi7WqbCEo8QTAZaHBxBz1iUKL1anwzV58b4WuHdBJP8gLxnNaQHTxoe2UZcu5AzqykZnWg6aWe3bEz4",
  "key9": "TU6swPs1F7agNWYSfQxnDH7LCoMFQJN4uVzCt8jVAxpr1vi9qFB1wtPd2kb7jSNL8Rod2M7ExkC8w6Xy6sSo1uF",
  "key10": "2RQdZWJ4k2dM5p7NMh6ATrgLEfEDQScLTbuiizwXBcE4BHhnAWDE39cFajWD1DneSWNDyXBi4jt2rqmvmLdNbXMZ",
  "key11": "2a3xzmKd3xbeWnFzUtBizACYEeo9zMkU7U45rbZqkqLimAZV1vURqd5vRYebwwL4YWLp3Qom5cu9PRrh5oVCj7xK",
  "key12": "2DSFnJDUD6MLCV1qTHCq682vKpJQttGeLATrb8DgwZWjdKKxeeEoREfCpkXbSfBoRVNnCv765XzWub4EWUKQ3AY7",
  "key13": "4du4thDPbYLWdL35NUCDxiwucqe75Jpmi9eF2Kr2xcF5eapPdXgMz3Ekd6Qo8KJnrkPjNHFTvrSXn3ta2vHuu7Me",
  "key14": "3jGVxZbvtkQog12qBgWyQ9fd21YWrvv56cvXgFsxQUHCNnLPr13mkNz34Rwxd496rEFLnfGkQoHrWBQinnA3FHX2",
  "key15": "56pRpT8PvuUyNLrqzk84WtJ1DGF5tCDmBFDEqdrjsCsTFyYPftpFngpnSay1MKUu2ri7D23NpXCosS9xuXJDeGVQ",
  "key16": "4uAsSURUn5fMuVZRqfZPiR5kXuw8PkFxnQ6bBmu6rnuq7RrBEccA7bK9P9LmccHsZaMuDE81ZKHgsE3v1DHdz8XH",
  "key17": "34SV7pAkczqoZm32YVkEZrY5pUU9sHC7g8kbd3eCgub92DjUTUY8a9KKJ7DB7ByY7aW9oVWMNUG6CQW5itasvXcZ",
  "key18": "3hgmVkdiERriwbC6drRX4FLg4ZyZwERKhBd4AVgJcYwU78YjmUV6tCH74YZ8NFDEmnJvEurNeHMtMgfjbaKNSRJR",
  "key19": "4UF7ZVrgmGB4PFjGVtw6RpLA1pN6EShgTihmC1rbvFBQaUTAs2WSgpv55NEa24WX2ZRfvZj76stALRVRniCzvmHk",
  "key20": "5o1bhq3HyZDtXGdZmFZUpR5rgtZ7hyHJ4d2X2FiWuQKCQcdBdF1ph6dmRcYkJKggJ1Ur9txQicEGJz1CZiCnqKzB",
  "key21": "mPaZwno65wEjkQzBgFHcbpUWptpkDCf3JCfFgCNoih141LnF3i1YyX962WmbtWmYXzSgzqY3Myu89AL39jiP8xW",
  "key22": "4F2DNJKtNfd7BtKa5Gux4qjSBDKegddz9arA1ZEMtnrynkK5XNKkxjUFmFJnFMXtLc7sAfQrxqeZUd3uU8FAmjTX",
  "key23": "4DMAZGoFE6UuixyjeP4XzzatTxgxme8aKMASVyiSSatLFR7V8rWiqwAQCoJDJW632w8o5MQgWoEZQEDHgdtUofLT",
  "key24": "51LPvpdUPuBjFRdwNisWgRKo7AkYZmMuKYYA6MnYXF42PPm27cGeCWccfx6wKZNFzyqPfEPYMHWhWNcdPFiS8xXo",
  "key25": "mWEZyCxsmYk1CmXpYYH1vAHRAbhP9UZBT2mn9njKFgsKJa84d2EiKLR9H6LhiaUD5ZCpvg784YEypFWndgJy3GM",
  "key26": "2D7XrbKfVCyEAdnRtqJpUtpPPpryjooPzkzkctiXs6ScLyn9eiioi1NmKMsjSiVJC1yXgyMUbBxUgbj1CXpZikz1",
  "key27": "5jwTP3NKs3G8ujrPnLXptvx6i3W8MbJ7ai8X4HGqbkvpipWjCAPM7Wa82sedLNBnKJvSi9e1CQTAjzpihw14YYtY",
  "key28": "3BTguZHd9RGLstFo52VNNtwb5hFZgu8hyBSPzzMVuyP3rVYCLgyGbmYkyyi7B7rmb4NhS6vShmogxTgnzxKoPCDF",
  "key29": "4ngJshLogtnmrT7XbgBenWfjeyiHmakneYcJBZ24rG1SmtSWcwdUTQ4z4WHfs2ntb2UGBNHKMi1hp6u1xD3kaS5e"
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
