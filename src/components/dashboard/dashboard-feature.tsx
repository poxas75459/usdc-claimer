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
    "56gGtN3Nnp7uti6CHhhL3KGDJvvPY9MvLfV3q1YHhAqnczMiKpK7teosdnHES9C76ET2eh1eBLaGQCvcGSXWi1u8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LgQLsUoEdHX4UFmrb313gaeyWJLhruXJwDaPdTxS4sG4qD7KFmwrbD2mYxrdhefQaHSX5Ui79JVNtKWGUCo6NWR",
  "key1": "v4KaD5k9Ss9667CvMSYKG14m52HbNKEHta6Tx74CkG2rsbC5juKXhxYHNaxgE4zt84ysapQTHMkCTyYD2ZHeGVw",
  "key2": "3zaEXC61BjAT2EY7ahmJX9ARffb1YKptMt2XpjzLvLyW1XimQP4PpbVQpxMvjNLSZR8XXoewo1AQ4DUGunuLiNEk",
  "key3": "2F77e6NFir1H5UwNuiBhWPXp7NgBgHhEpTtwokwiLPoBehvpknQ2o9acYgNdSdaxN9CgthMa8gJg69dzdhByrezb",
  "key4": "2FKG8RWWBEAoj8VVgqTQMEy5y9cHQrxMTbSNsLz1TYgRLU4H1pvfUo26UaqBjfikEThWnnsTz1xbVUQrecVgjRPF",
  "key5": "QJGk3vPCscJDSMNXtrw3JDgSa4EUQ9DRK9bwCkLcRRLhWzSgGaKA4wtQXKBF5YTinzq32w44hmfM8XgutCK2kaz",
  "key6": "5CivaeM6DfXc71jyxCDrsyVydM8GEuX3YhWMAPeBmnbPQi8uCHwrCTUZo951Z1eKVVm1QYjqLETExmzLj594gk8v",
  "key7": "4Xvawb6XhS7WHPuRf1h9BDzdnbDXYCkEddytSkYvmuJBMr7Evz7uPNrfdH7cXhPba2PKHK9ftTR8XqQBRn74j5e7",
  "key8": "3ttNUfQegRSMa86dfnLQP1q4o8LMAnvdwokDXTu4p5cpaUFbBgqZVUyd3Cpity1zeRRYoHs8Dr8eV8VJaiSLDSj6",
  "key9": "2oaKTUfhHMawBo1N9oMnobfEZ41uc1obpYEvkqGkW1NjHmbZtqTXH6qDHingB5wdG1k7bY7aDYTvTYNPTHVnsVuk",
  "key10": "5HPB7jFQXsWTymsBNZFxBfqke3rJvxbCZoYeTa3KkYL552p1h7e1U89fQgKqxc4kF5ouFZR4GmaVKNiFpERRhn8T",
  "key11": "4eo7CqvmcRTbZZR2koYLVeiNmhnAD6E6tSbjYYf2BpYHw1uoAAGnjRRSprv3HqXiGFPxNmAPHBccE7hEoC2Xp4wg",
  "key12": "sSbEi6xzkUhvwnmmoZwsHfNEB1h5V1L7JZu94f3dqqVL424cJWcKjAMiv7D9ATUo6DP7mV9f4mPHt8PzYcxJjdU",
  "key13": "3s3L9o73YMbRXLuKmGvGv3wtaPzAC4daSp8yKqzqHC6UYSZuzGSggpePyhPoZBdniWz1UtCBTG685TcWcAkbNAYC",
  "key14": "4fU4Y967CHHz6qDxnLsSSNmzTHvjeHKBfu7MLHEJ2FkTYja4kiD5komTrAiKYdLATWUaqhhxEWHQ3UqQz5LLaNvT",
  "key15": "5KX2yB8HTzNTJ8N8bGiy4dTCAdE9ri7MAJds5edSLkgickSsTq5CJiXaMEmN1YkJsi3ekhtbfVwmwhmj8UByR3xG",
  "key16": "5VniuKN17ygzMeYiDHFnWBimkGob3FTvYceGkwTpWKfpQLs9Xj4ZaM4SZ29FzjM87p6fMCNtvzMeMb42HpRDvgAb",
  "key17": "Je6C3UVgsknfVnGUbNc9wop2FWSqpCdFm8gM9Wkeg5u9t6u1G3Q53kfWbhwX14G7HgnLW2UeDcW5cvoFW3pScdu",
  "key18": "2G53VPi7Mw78RbXQ2552szijZ66VwBw1W4e65TrWXptoUFnocf8oGMiK7ytSt6cXPts32JicnQS7p7WBJUtd8EPG",
  "key19": "5dGN2aujqKL4ujsC9G8gvrQUVEeEpRuHgqxEoxPNZ57LJo1Ff8R6M6AWoLT76A6bAhesLvzWnjwmBbnVskLnGTqR",
  "key20": "yC2qJ16aH3AYkJvTNLRaQwovYqpS5pgRYsKaEURq4WkRKxcPZwXHEkMGrky22v2sSjDojJhygF94aWFDczKBbUA",
  "key21": "2EzFVEXYKgSCWbrj1672r14wXXE6vSwzatxvneZssC2Qe7U4ThBuM87C1idj8Zzf9vEyKJdiSYJxtyysA8wTkji9",
  "key22": "3uG4xcLYFmMWyG14y7KfNCcrY7tgzi4E1v5W2xgXof9rSWmda6QJHHV6tR2PyVuye6UkNpYpBYjmLx4nE48Xx3J7",
  "key23": "4h882gE4zea6HV4zYc5DrmTvNoyQN3tN52D4hHGwvaB7rPfnd695oQMRcDTis1Cr6X95DdPoanKi5XrNBysFgVeu",
  "key24": "46QEMQjcGqoPbcUPpsdAWZZfcLCJ6QRc7DpQZE1ZQpgdP3o98i84sfgLTuHQTqjHcgf2G7mGy2uYderWZmUg1fMk",
  "key25": "LLHbEQQ7TrCjQpDy6hTrSsDaYLvNnFHrtziNDDKVcEe5a1vKDM2CT2FdkJiqbQavfofzkzaV33LMGqEFoyTq2HJ",
  "key26": "5TRbsMvJ9fSzKWnnJZvD5DdW6k61xcbT7okeRc55p2EChXBmAWZ2GEHYUgyRK3e2aqzDzDovYw2k1V8b4qf8LWjq",
  "key27": "5uaNqDwBJoUMfe9hg5X1yymuCrcFUtS6q6q7gpgmEhXktgEDFkF5UoBHdZBXYfdsFrWAPCzRTcBF2fPfGv5ugnwk",
  "key28": "25wCgzFNMM9UrhkUpZf9RErB5vyXZQiQhsYGfbDpWKBm7cuwC3gT32Wi3KCwjLHfgMD6ZVaCYM9FhS6bNqd8xvmh",
  "key29": "2UxrHnd4idQpTFtiSDsLPw6qLQXuJVtETzb86a9ZYiuUnhLzycT84CpLFzSzAUmt5aGBRzK1Xa4h5Qzjhm3cSQpT",
  "key30": "2GtDiUGz3GJHeBBuVWtfZoUiTqyx7XEEDj57jw8EuBXwDiumDeFnxSbCwZs9r6Xv4fzmZEtUpFQChdpxnd548UTt",
  "key31": "2djEPK6bkmvkjgXRnMQqdBpshVpXSMEyG8gXXBR2jRdZ6XWYxKVCJAGxsSphKMc4XM6G71kRErB1N8F7AS57LQud",
  "key32": "5TSfUbftnJZFwBYYLtK7L5ZzjRABrs92EMYR99qo1wT3TzcYbbEmfmeJ6KtU7KBuAajLoQwBtW3e3hRttuADecEz"
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
