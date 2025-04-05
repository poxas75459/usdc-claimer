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
    "59i1VrKkNTZWviicrvk6Qt3QVmb14MX8iNqvHWY2wrnHrMQNwdhdUtY6ezMY8WiLDNSCTMbBucMnjr5DvkVDPveL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Danmy4Egu2npLeUuqXpfD2t5oTeEYYw4YVpNQALZsheogpE6nHys7ZAbMoK1JBSMKpipKV8bjTgRna5JnBsrCMj",
  "key1": "5RL6yNKnmRUe2ncsK8VAsrnSM3wXknPDpUGVckZwNWYtaUkJYP79bpJEyJ2KxGmmt1YxreHFmsSLwjaidkcu64ry",
  "key2": "48MRsFnHA1U6j2TkXwxkBrma5UvqcZgrJqytCVT61UgzFo5UPiFt5Qh4cyeA4NJ3UWdWwMUaZRH7mfwKQ5uhQR3z",
  "key3": "2YBZGs9mRu212i2yqA5nszLfAvx5EFegjg6FwB9Az8W2Bb528jfFDEcoREmNhcZmaV4BnUXseWXsPY7aQmEELNCP",
  "key4": "ofepaEfnx4g3YCLjXJsts9Zxupz8CaxhBn2HV61TiajwE2sAPKpme61TEEpK5dJFNv5zKdWPFwDb3eJYpvPA15N",
  "key5": "4vBGGtPkusWihL3zs4nkTATYhokgtkXgBpr8oWUt6fhf64dqJpuuW5JF1H52medsdGHyMynsj69PW6WcZbKxY6LP",
  "key6": "3YB7FkPagqVdaytDALAVTYkxDDRhAFEpRG69bZ29zRAwUF154MQQRFvESSgk1ni1kNzhFKb6ejBjR7cJLQEdcJTv",
  "key7": "jcDVLCmhRxJz2D3zLJAuCTXoQVeE26m4DKv1Rddc5JLdpFh5MKmNy5qjR4zcJEZeAA13kcVmZDq4ZPJeimhHLve",
  "key8": "4Gc2XKxAco4cJqLYwnQCxKWwPfuT52vdSwNmR7HmPQAAfCi9bpwVFzrScoLkEYz7A2yfE4mFzdL828nUWKaJu1WQ",
  "key9": "4oKHUbU1tbZQJEBkmaHKXaaL97c51Vx84GWx6QpojHKgLnHnqcBTBCeCzXd6FH1cEKBT11jJtTokiqZxWyJGvXxn",
  "key10": "AqW8UJ4Mdfpx7wSr1MyuuQhtZpkC2LewdoQS4q9eDMHu1dF9fLCz9po1WofFmKTtV4y1cH3EUcratsTfK4nagyy",
  "key11": "5DawWqHgfLUPV8eie2mtnA31qoVVHCQ9jB5KPfnWCHUoH3SRZmkC91MbNHguqCHLeF8vJYuQqBpAknqeF92KwR6d",
  "key12": "56m2GMM3t1edgBrftZazAqzsVwdbuLGmhwuo49DXMK3vvUyXtVuz5dCN5kWvmS1cr1ZtaipBthfXs2QiPXG38gtM",
  "key13": "3WkhUMAu898gdRJis6gxcDhkBL63DsLxzJsBT1dG5DJEKDWRPDoUDTrSYnkkkaj9pjnL2bghTWroXBgQVNUD3YZW",
  "key14": "3QQYvdjitq96MVrwjFauvzK4H5t9ofavLFKbxNbySmiJ5K7KJYQf5baCuizQdcGSS6zGz51qGQmnL57CEGYTYt5T",
  "key15": "5hUZQMEqThjMS3aCa3FNWMeoGZ3Hvegmi7Nn9uD7q5J6ueTWEFVUmkbhkV83hGkygFuRRtcv2xydrBk2km9UFysF",
  "key16": "Vmq49DESEHVoU1yVYUk9i2c3aPYVMPRsDrGEYE6vG48Led6yqBYK6r8YaittXRHc4YBtJPdDRwUzUibnpxXWHPQ",
  "key17": "4ztzpCm4wonSxRUn458q2UC5P6LJaeLE4MQT3LDTWDMv9zdrfLJxBcE5sAR78BJ7puMVYFC7BUxVUjxkspRFky48",
  "key18": "2nPyr8fMuuDWAtrBaj9qAk3tsZBj3s7evpfBYxqRN2xdJHNHn6TdFrEp7kzEWKnG9anWm5aMAFqiCkpvnTstyaC5",
  "key19": "5obkzkESM5kKeFYQrdSRf7Ca34g3PcJNDfbi6yuw3C3SDyBkK1SHascSnxbza76mLcFmP6iX8VXoY88g6sPJVivA",
  "key20": "5Y8vuLMCD9EL8GaMXR8ujf5C7RU7iS5fsaZ7amnGVyLv5eKCprjC3ihuTbfmixudMxUwzuZ5cdkPS5JVBoF7H1hy",
  "key21": "3FnbFGtsCnwN6RSKpCg4w7T7X3ifC8bNXQkTNmBG8USnFfCVcxFobgCsDhSbw4nxZgiDZssruYcmkcZfSZz1xh2X",
  "key22": "2AVoR1D95Gi8dyUFB57RCUkromEnLdYQmKtTQJRi167L7Z6dhXJiyCHxETvksHX5k1QTwxmTbNc77qHdXt71kAVR",
  "key23": "4cBu6iQk4uvf64FUHboRD5GDtqqgNDUfcv7KQBREQ1EcSD8axCTzgocdWQ619zdTz1YmSjmk6e9euBKoYxcEqghQ",
  "key24": "64EGDNfchuw1NZa4ehhF3EnN62iMeLAVwb2emAdN8BDYwEk39XxhduVq6EZSuHhMaYG7eP75qQkTdyinLsSp6BpT",
  "key25": "32bX8ZcjFmbEQxYHiFFSQhpqo3cCgUR5iTJGHEgoVmRoXKjwnP1gXWhdNmbgbkLPQhzERcRzLXomRZnKiiwxzJZX",
  "key26": "199B4Gjd1ioWzR79QWCoKZMc4wcSWQQQsqqKv8dCi8UEjJfHkSKyE5QiD92EiFFiuTX4kyaCCw8MQU98vbcwrRQ",
  "key27": "3acChKZxaj2M9aGjgbLAvGXSnGcDMexWCHVnkBh9yL4J4FXDAbZCzr5pAyfSgphUSQkpLTEn6rSXMSHtZgVBwtrf",
  "key28": "a7gqzEP7eY23vCdJxYFWEiU4NKpFbG6danoSAtmJpMf4Tn3cBBoUaa2kFY9HaJFPK5Vy9UF1xqf9cvCMdYfHgiQ",
  "key29": "5KeYtiVjbT9h7kF4epA8MMbsQp8bS9sPgNKEeU1aLqABfS7ayJ2G6NQQN8FuQQQqmp9ScX6LEsCNwsesRS7DLnD6",
  "key30": "eJEbxi6UZyMSufct92XSsFXCQDNxbVuMGpTmMS4zHXYQSnCy9dGAMbPS3WTu1Nzp9xpuog6v7n32wNYyj3TKdNH",
  "key31": "3A2Nc5osuoi2FWGbfh3Pf8Bc4amrfZ1GbeNfYhL6g98JKGQJ1W9nV1jEK9T9pY2YnLHeTYm4Tio7oZJVqKyvAFJJ",
  "key32": "2ESqVwxxiSNQ68ZNGXtGJAeRMJ5b83WqCNGod731ETdp5cxS8qvQD5rDxgrjqre4MxsdV7oc1bvVcWUARnBWmdjf",
  "key33": "3fJht9riLK6b3Yjpt915aux18sZmT2a3kDvt7Uq18HHaTiFedCZ8iF9iCwzJh5dfUhoPg9LvJmZ5s3Rz3NbWoAvt",
  "key34": "3YXsErSg6Epr1dcaAHs2BYwiQVDSrnrg7RHaMXiBsPhZAzBXdABriodmA6T6TvtC1VbTZZeQhoEELtqu7WcFNrge",
  "key35": "2FJaKXhAJornrBXBSWEuzUNHnirBTVAGLaiauYmK3TuUSMYacTgeXvvvGs4V79g4T3pfei6if9mjmbvuxGPKAW3M",
  "key36": "4RhyAiFBqzU5S3Zbc17MoVd3EYyARVX5dEo4GnAa45WDrA1Yquo4xJdujh9p137eBn5N64uAwu6GkJgx9gXwUgPX",
  "key37": "5mJiH9Ngpw6VnEfMvKELjykQaZfVfQwxDynCdUdHtfhfqXQ4YvhbjsXrPwqVv3N1WLmzx5VtYAKCLuEm1Kkvgyap",
  "key38": "2L7zoSkcdWCwAWHAXhSKSCvz9MdPmLkcc3cMgYVFYXiAsus23evHxxE7eJeJYy5QSc2hvJwgyt4ZxBzKj6cpgj6A",
  "key39": "eqE8qLdmSdSZ62jiLc93vsc9KupKXPpDi3VQ8aZYdizKqAXiP4cWxLoBiURNFTNZZ3QEeZx5vbEtRqWTYsjVPRC",
  "key40": "4PVsvvoTEYgrGnFcx2dsUFUww2scn4U77cYxWAu1MAUjQ9jLQqPnF7Z1TnBKJVLrupf6rETC571fk5hXXb3pWDvH",
  "key41": "3WCb6KoWv9MmDUJtMD35m2BAHCJs6bW2TdDnF6ZF4yH7SALCqM2AENEFHUp3HCbUpnuAmqeT2pMSaVNViraLmpdi",
  "key42": "2MReJbDbZxF4kyMRFx3Jf2iZrWi9kEYJNM3dhgteEYHgWfT7Rmg55HgSDB58WegzvTkdGLU7RWXBuGs2i7csJuex",
  "key43": "4R71UqTHXxQBWT2R9nipnDc4QRQPNf2dNgKFnX8MiiFxHNJvM7GKVqmm4y4n1WoQerJJsUP6yD2UXkvkfKhxDHcR",
  "key44": "3qEaq6r1xgP2mKq7Ddk4ZcwDBgYXbLW7KH2Zv5f5dtdZKWkQAGs9hgPgCtGgSXYMexkQ8aYZPFr6VenFwtWJAoRR",
  "key45": "2pUPhcCSPuFXaSjUspYZo9TiLzwY2L3b4LLfg29p7bMD4wR47sdQBqkDMiK71SvC6oLfr346RtMWftVmzjuDEtie",
  "key46": "5kVoCnb1QY2Pk13aJs3Sd5hw4ZwwwQMeZChQ2yaA8ZhwyeD9e7c2916GAjsccWeJKKccHNx5mFNEi6ro849tqExi",
  "key47": "4y79FCJgpVgCRGEh8sEiirxEdcFGaBGfr9kUHbbmAPZMCZjRiB7rtRo84np2gAGdD6B6wbdMGcGqRj1itnHkRBdv"
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
