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
    "3y8485qGzFbi4Jfqn759Z4xrHW8Y519VZGCdYT7qUjWj3t5DDTFcKrpmsiLmJfihjJvZu9s2Vw1dvZiJsg7sQBVf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bbyZeDahfwHdjLFG2SBbcwgUFTzqgYyWpSrEaujm8TrYM7m71iPfJz27PeyjAKFcSBt4jguo3DDCb1acYQjP5AJ",
  "key1": "5fAeQtA3KND6y43dWN6HDj3H55x5yq33F5kjVqKhMXH52SYnyzyaBzH1uhyMcY6vKNjYHDGN6mtMEFyKhn5xmVjX",
  "key2": "31yA7WrBCPwMeUce87BTHn3BLZ9Nna9dD1qaoXSo6CsnkqGJ9MQ2Xmp3A3PVvdS5T2QoXfaemzWnx9iMY2afbhyh",
  "key3": "5eUhtrq9J9AY1hKJHzK5i27Pcj5CqfNtTYzJ12P9oSiksLooedYmTLF3N22EkpiEusbx8gD2XqVL2PRm2HEAzcps",
  "key4": "3T7TVBdkUTCD42HcFRifXBdpj1KA3Q3684rHHshDBa39JtmZ4uoFnVQpwxnfrN4L7Gs6xKnuJGhKdYn5ABLSCtiw",
  "key5": "7QMWAnpTPUeUhBXDG6uJhiLb5iVDnReE7QNM7xWkAVoJ4V5ZvJWye9bsfou4CYnkZufgihM1qooPPHESx3WTciB",
  "key6": "3wCwBTjzjvQv2gfgLDx1xSu76sBXj9d25J7rkEjCKz7Kf87vxDmEnQEb1u58tfauieUhrpNFhtc23rBB9HoQMQoa",
  "key7": "3ZviiNdCFuauzNnjCbi7zTSGrsr9tD6VWsZJb8GahbhxDgKkTDXUZufXCe2yXe4vqYCxhGYCBU4mvwpNnQ1Uthgh",
  "key8": "2KoSZo8dLKY4efxCJ3Lfiqi9HbN52nzFA1ZsrXuBP7mMQuKvUwFtFUApoRmUr8y9Ty9VudFpkmc6VoHbCbeXPnh2",
  "key9": "37J9zDxYhfk113n1C9DiSgbcYHxDSnrnwE6dvVEPbWLof6TYVShTvdT1igb13XMEFwqFX46BcaBzRHWH6d3wPhju",
  "key10": "4pB8o2yFfgKKH5hsMwkdoQ1R54hN4SvvGAs4LUmEeKJWi6mnYvsYU6EtkPyY8FdArQidDo1NK521MfWVoNgxDfjr",
  "key11": "2QGBdRGfMBT7Rkejie1isxwu5Vhq56yRf3qUaoxzZ6oA98PKgStJnf1kMigNJgtwEgTbwkR6xmi4VQqAMrNWsvbS",
  "key12": "4mfRfefRcqvKgojRobfHFPiA9CaaMfpuk6MwWFUGJPbRhXVLMkLJSMTFVsEGkdLD37AcBB8DNrYkTj56qfC4Bydw",
  "key13": "65786SsjtWQvktyyHq1wwrUmSnk3HMhAqLw64wGjXJ711q1R5whoiQ3etXdXqQUHfEvLY1w56YC5gocuTjpQKxYF",
  "key14": "4Zhn2sxvPpw9ML3DGLJcatMc34dfmKDuhuVShKSjsXQC8WzCxZ9QRYTD1bNKqo7SHwi95UxQbn6m8YCEbQUGFrci",
  "key15": "4qCxkUxG93nZhK5WMw474mERjqGcCYeyuT86EYgJyqgfdq6eeQQZFyBGZ459TeQHZiqmGH3DUT346EN3WFw3f8tX",
  "key16": "sf5CbfP7nH2ViPCLVHEaCVjxmXyAYafR1VviFd5auttmAWkwmZTGMJJ2oxM77K8GshziooiLX6ZhvFW8kXs3Nkn",
  "key17": "5Lrbned5R6YgMnaXnKa9pgFaoqFC2c9J3zBsZifKy8ij7671QSHGcU7EAKRnRaPSB4BxF919KbUwTvg81DUECqp9",
  "key18": "22mgKbLvZ4U86nrkDaywBZbQgS3uNx42N4WejjgUZtMkjwgeCKLKibgufabXpnSTgxKDRXuFtVB7bMXoC1aCwx4p",
  "key19": "5zqdzYjCCBhRK1Rt99u7bWceZHZJhr7N3QCo2V6VXk7upSvT86JxfsriKmYYUmfFs35w2T6wtwrJquMJPYGCK8FH",
  "key20": "5oY4ecFrYrxaDFuqtem1MYvpSfzRboF12evusSDsfSvzwjwxX8BV8dWsAJGEDmaCb2Ur8airNrvjzW7kJ2dYgDAS",
  "key21": "3VKpY3eKt7L5rbdHXXpGEPXcq1mBKZtJLNkwuGjHGcrXZTmbywGQf3GjtJyGv2ZFamjjXRLxyWpLXq9arqpK6i2n",
  "key22": "BrEjxUXxcvHF624qZDrY5N9wH5wfPXuU3Dm2moYv4bTHg1qJWam2YsEtDxJY1stf32gqBM3ENUWzzTE3JeHsmMg",
  "key23": "34fH5mdCh6d93iVoWUB3djtuVxjsY97tMBLyu1PUNat9AXAbbb1mcXdSsj1jiXArxFLZwi5fUZemAvCTxfwsb2C2",
  "key24": "2ekS6fiM8e9imjsvRfrdXxktT1hWcddnkZ7QbYfCAwHYXNx9jtpf8twEG5m1MQPBWwsbDVpBZvmA81hvLCoHLdSa",
  "key25": "4nebDvxewdG8VQB1S2bnL7jAUMqgej4bxVMt4PKbxcwMRAtsR9HP7vDbFz1TB36C9j164sCRfaPdcfSNXSA39dZ1"
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
