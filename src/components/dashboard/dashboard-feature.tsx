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
    "3wThof9kXu4GH7QTQZhrMwd1ND7wvYUvXevVvLoC7c15H1ydeAkohYnL7zBHavEbkPFsrBjPYQd26LR4vycfKhCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pyPAhB6ry9zfz3cTUQ6EiYcmPdtrWCGFsBtLkLRhPQGpdV6M2FQCVuBxneVwA6MTx8fnMc11xMsWjXJG9KSeBuh",
  "key1": "41pz7G4hTZT8T8Fxw2CDUPquzKptcu5xWxay8jAQpPGLTdeMcQQ9MebVcG2NpwZ6i17bCVEg43Eb5LpFNfWmkMQg",
  "key2": "Mkrv8FWqwrEx1mt5QxQcqXZ8qZukbc4XPYJHhbuKW1tzFVdc3vMaYP5F2514NFKCvxAfdN7a3VxX7KGCwQdgV7b",
  "key3": "2jFtLYZe9pHdkSbT2bdC3NhmnXUMGspQa6a2JWLDF7RNS4QKevBKgD2VwL5AvpVGGjT4Dsqtudwu4C29E6611GoK",
  "key4": "4nQb3MnvVg35cDc69VhRTWc8RVdWL7deJmbNfmbEF2gYwr46ig3G1v955a9UFpReMbNY8ERjgE5scbxJd2f2JYkn",
  "key5": "3xwE4nDcCQRCCEQqvz4iPfHTVK9bKJ7iZ1fsQneDUzHUvBb9rgRj4jsLtSWHtxa9sYuYJeZUrm8C4Qzzhz912CrR",
  "key6": "22mQiBjepkxFkEAkQ2szeqX5KxuGky7K9XPXQp7BZMVrqwwei1N1fhy1qnqQvPv8EQYq3gxEPPPnBhQmUeyGcLXE",
  "key7": "3X63bDkTjTa4aAuoXECaSGq63cN7Nvy6veMwGHQgZvkBUeoVUEMGxtkzaDnRGmfTjv6iqSyM4W2pU6QtQ6KNzu2S",
  "key8": "2s3EoXahPcyMpRKT6BsDgU9sLWLzLfxScAt8CE1f5v2guAmqeHFehvPpVg1xCo67AdkMvnkW7bYfAxehYjjPJXL1",
  "key9": "2jDBVnuSbMcXi4TFyr3yoEwqQxASyX8KNQcKp5BbneVZDHef6XvFaQ5MKugtHruvzKvsgE8vZtyQ8pPeFAFKhXMs",
  "key10": "4FJ9NpzaFc1FNtUuS9K3QyJ4vScTqaGjMVbpfVjZCpUsim3QSUDWFg1YwR1FmfCfbUePnZXwyjpvaKaABMtDyaW3",
  "key11": "2z1MgEcUNXkQj3kFYspvH4ioRoFqEqNdAAi33KEPUch2AAWvZDoYNodnvxuht83JpdvjNm2NdVsCHzn3PjU5G8qY",
  "key12": "2H6vB7o9dKs31SdyUhzcK8WtdM64xCaYeMsMuC73WupCpujusXKYF97M83cqVwwsJWmr7aTRRQJVx7dVVvgLwWLD",
  "key13": "3QGppFvDLZCNp8UpbZDrgHaRdaUCQZReVDAc47xGE7zzziVQ2vxQpGJkt4uqpKqdaPetwqQKkSjnrNq5z7qqdcHV",
  "key14": "2USej8cUFssuBi2d5VaxPhPafVGKG26JrTPgfoLk7emPVqtXQXDCBQj5pNXzBUnvZWZjj9z8gLfDxQpWEfNC9mqu",
  "key15": "KbPoJPVYpJKv2ftamvygyz4sy9WoNqdz9zV9qAgvhfnDd96UWfV4XfSCK5Z5JmrdHYfohWSkW8pSwGqG2pbZ3tq",
  "key16": "498dCyg84YDytM6BmwTgHDhxY95kF2SwHVB1odEFykaa7jXppUCZeDm1cm2pc58TweyNaPqFXs6i2u6V3XNYeSUS",
  "key17": "4d9zFHxwgwHkWt1tKFUX9JSkMxi3dRSgNZcVPrNTDM9bmaT4NLybWk2Cq4yngTrpxjQ6m46GmHRs547YF3H3rpHF",
  "key18": "xCTYYTv9kDLiMgSEoWf9FbvQG5Yj2JhdcuoDSuA47hovLzPJVWefPv9t2PCxL5ARrDkEy8MmZzS43rpgKLtYLLn",
  "key19": "w6yjFNECnkijrFH2Tu51BbbkbHMSDqqWrexqUjuXE3zgdqwvh2dwjqREHPCzRCUHJd6pK8K3sL3X2L9NRBXTo8N",
  "key20": "5B7MJxvWJu9hDkxSqo8TvE9JagmMQSxZ726371gwGUTV9NxcCSaNuPeukyD4eKBfxLVpUSm2Ld2w8f922Zo76rd4",
  "key21": "4ZJr7HYB6S4ifbVckRgXYwWboC9QEsqh8ZJUtcP5KD7KXJYXRbPy88prijxHDvzFaQnKJQT2fDuni45nQfSo3Y9X",
  "key22": "5nzbGf8PHgxLx3LpuNGP1tNnaCB4T9cXbXzUi7xipiGhJq23qu8oG8yyzmPmq7bFMqNzXLxV8ofzy5TfiEiUGjhi",
  "key23": "679f76esPVZkZWVHzJHkLs5LfDWuVrygoyzKRa6GU5uG7QvVcMEZoUtGaMoqEeZkinofGwqCF5SeeoXhXCrzWVax",
  "key24": "5FnpwTAAzyPUxnG1T2RR3rARhfY2xvz4dPYUrLQutUuFSo11H9CCas2jV3dwFUcy2rtocNDcCjJfLTsv8HNpAiJs",
  "key25": "4c7rrPiFsU3eLpnviqcoGtwf2xcKtF2PzP9CiQexygpFbX8Xn5hvV8Wvkj8GQQ2JHQKcCQoCqSFCRbbQsMRhoJrJ",
  "key26": "2rntFSsrjgViDTGASVxmG6chLhCGghkfV7QVYF9XSXU5CGaey4JNnAZG4upkbHxJ1Mnb6EfC2jqLV18MbVh9kcHi",
  "key27": "2fp95ZSPUqEAJPsbj2xgYQG9TJanR6N5Fs9NB9osiNBvaJ4csZDZbUkNihojzdqhYbCucfRjHjC2PiYDTMwq6DW",
  "key28": "46tTSk36PPErTwZfsvap6aGAY3VPGTzFEwWm665GjxLt6B2UPc5DBh6za1GQcE9yGcM13QnmMSDkQrfi5N6u9rvV",
  "key29": "57EVxmta9c6CpGEm3EJSNmFCoeJYnephWJm9fyzckhpSmCER4WF8fbuFwZFT8SdZXSjj9xeLEWBQQ7u7NjDjruRq",
  "key30": "3oGBHtyXhBtWNDSSLppqPTxQ9V2GeRYQt7wkGaUSMbNnuvVdWHkA9FuuNRpvKaRS4GQvYH77aQfkUySoFfv7bu3i",
  "key31": "fchbwJzzaV2WLdcR9uddYKELtTqvRSwverhQTQm3BrH1vhY6oiRU5rKCk7ZPDmVqtea1rk3bffoxnPdsgvyXnRy",
  "key32": "2SBBP9uqYcDn4wvTAN8iafHWx6gEyb7UF5TiKrotB1WRZo5mxvxW4UsiTrJQeHy8DW51j7922NwwTvjSHDpJ2jSs",
  "key33": "mVhxUY6mrDxwtGLa2kJLfmgfh4Cv6tQKSZKaBnyoRvHVxxZqaq8nZpyGo3yZN5dfPoXaQb5y3miFXiUn6afUjy5",
  "key34": "2oxnHjA8dqDYVRvbkbGDZ7vHYhfZL1HmJ6FFQ8HTPsLriistTB6vm8V9tj9eqKX86UZtLhW1ZTQBRPTzGnbgvGDA",
  "key35": "4biseCJV3XJinhGof613TE68BxqzyXTE6bHozvx7rezv2kgFJe1JwgvsjtR6Z26i4WT3PczaMJnkahQiGBkzh1PZ",
  "key36": "3RLMJ916dNKUk4ZtpGz8Jo66Kd5S4Zo3K8PQseNe5DvPnmJ85FipdEiXiN6sb5W4Gk79rqodsVHYwpMNzntMqUai",
  "key37": "3eYEkHgxjBrPj2C4sGapRohsGt4ySwsAc5n7s3H8okLEKhDHet6ej8eY1FgL5AS5Fj2QJJceRNpJf44EqwABk7K1"
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
