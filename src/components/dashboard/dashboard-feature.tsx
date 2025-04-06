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
    "4voJqgPBQPr15pdSSdvp4FM7syJeNKCAz6TXM4CMahbkssfA9o2nduh2QaHBC4uJYCafBaTsgonEhxVsfL9qgQdr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GJ98aZEnmrMwsTDy5hdGAfpB9vPW7Q7EBsF45h1vUMdJx2t1jktkj9G2cUan8s6Y5RCKNKEEqUZkSuvYeAeYzBe",
  "key1": "2kspxDaTmWFCufiP3wnAhJwyrLVJGebRePW6Ez547pZoKGQpWPaW3ft24aSWGesRFEAcWMvdPbJXcDbRm1Vf2XjJ",
  "key2": "5p3eJjXPCz5gNP8xzzS4PNnrBPy5q6ciGyg145nBSNCRNZFyxMecgz96Ncn7khppt3xfxBYiKtxN2E7CucCqpPvY",
  "key3": "YVjGcirQfZxeY2GfG94gQP8w5TPNBhF7ev6gG4HP7bgeP6rHEQ8sZNCGGcpFyeZpBMKdcdyUoubZzeG3cuaFuU4",
  "key4": "3Sm5PKUPdCRg8pGih9uEK9Xy1BBWLJQBGzkR5kvLftJoRsapJTAj8NB9CstL8dDcQMGbhdMHW2RbEDKJt4uJADwW",
  "key5": "2AXmcRCfJQNqfcuzNEYd9FtbhjgFfxKkfb8RUAYyzLtRmvx1Q9VuN9yL8YCYrh2jwLybGTc36xjW8qb6k9qYQqmE",
  "key6": "5P4EWd8Zwsnrk3aANU54URnVnpvn8hmg2JZNpkxjpPvVnZD52o2twcVvptXHjw8XXvLuX86UL8u1FrACrQtxjUXK",
  "key7": "6BxDqSfx9MjKJkM3KES75c3DwwZC9kZEKLacervHeypaWcQJCyDynCdordivY4o7Gv5ojWKUiXx9mwdLGaCS1ae",
  "key8": "5WEnNESoS4fDqSMVWuDdrVTuq9HnjAAWuoZBtSSFQYT1e2xnfM1EMftvjJQj9k8i4uzBhUdkbyHxY5dkcPDwvhdm",
  "key9": "5krHHSASaUj293nH9Vff7mCdrYd1QUqmnKRQZVUUxixYwLR1WbpjBuB8qYhYDfHg4XGxAXvfknEk9YCEdCqB1X8L",
  "key10": "SSBBVKWoSuvVD9E83AAhnULyzvu1MUYZt1Rt2BaeYkq5GoxaS99EC2TuGQgMkBAQwnPZjsQVPb3ATD3dBT2r7g8",
  "key11": "4R1ZUWnF4Yh6tVDJchDd2y5b2occrscZ3UwnERuxmFFBEGXvjG3xxUL7j3Bk7DMyhPEcwjHzMMDoEwizPDq3ZkXc",
  "key12": "37CA4u9PueJoZe5H64gMsVkseYF5MqSd4uPhofJZD7YfYrY436MPDXwUjSmU4b1ZtW7f83eG6iGz4BoXKsev2qRg",
  "key13": "5vTGrBxujDcsYsNeNvqMq8F4LxARbX3bMkx2bfEQoSkC5yAi6F84R5oUVoCeWzuoAR25q8jywJDRDtEjMmK95PLP",
  "key14": "5ueP3ZLxQubG3fbQoT6MPpPv5QqsdfTfZ82KkvFYXB7iPphvvzz6soYMu4kSsC7VnbRAKCK3hsWyXmZFKNZywduv",
  "key15": "whAm4MFvhsgQQz1AAoSvPoN1ZVTXCWv8LTErxXYWThJosvmKrkTx2ezWTk7fNNsLfydwZ4zxKHC1AYiT11G99Sv",
  "key16": "2LD1wq7SdDPBfVEar7yuYhVoneNJ74BCAChwnc24vURcM2qyQ5aFQq7nRDfDx9pquV19ntmv8Z2Fz635DJxsifNX",
  "key17": "3TgDxQS84orY69bi82JT2Z9TduMDEFXdiScvpTsKCsBtUkga1qHHKNUViAntHbXvRvREMG11nuNuuozp29tKsyDs",
  "key18": "hNRvargfWydXMVT2sVeg3X3nmJ1UsBVjVepRNi7EpyMcyQUhroed9pzXonAgMcuv2Nm9hAJwFCUs6rdMAWZFaTd",
  "key19": "4wVBB2ciVFhHpY2YeBaXpjdswq8pHTjwNUUQG9qtBd8UCtiKyyuuB5eZPpFUGZWaHNRkiCZP4WuwQQyuCDrBgs9H",
  "key20": "sM22C5wRjqF74NcMB7D415g1658bfTSiKpmtkmeJhh82EnXKW6QQs6jS5BCBbnYYg8Snwn1K6o6Bn7Nkguc4tBv",
  "key21": "2H9T4ctjxuVDpFcErT1Z6Y1y2LZwUQW7jFv3nxqebgoDZg3J36yLqktUTR9Y6TwkotBPaeGqQKASb7Tj9TymmJTd",
  "key22": "4pqV3Xxi9QyyQaRBBk9Vw6aMSLzrV8WH9hc54eBcv9hiR5Gru161nQpBSBzffEW27EQk42ykzcXYczJmj1VEuNQW",
  "key23": "2ughtYKdewwD6FJpFu9LLTFEmT4L7LLZtHUtoiaak1F8Ydr7F8NgR9B6y7fxSqyp9GywzASXHxAm8JbP6GUowiJi",
  "key24": "3k1C2k1e2wzAYz5EzWH25XnvYCPm5asAT2tNj5FkBmW4VxQVASFwjb9o2c5hogv7Nht79aXHo8oWiX8RtT72HemV",
  "key25": "3epUDvVcL8Y7rUZcnyYxPgaViLvkFmepr7eqkqFYPm1r8JH3935hPj54QLqBensVyKEq9PecmcZHYKmam1uHwLzh",
  "key26": "2qDnrK5V174ffxvgdNJmGE3aD7wezW6exQQ92PMr9XdA7jjXeAjy2gGBxHqNr8qKwQDsrewWeKNjhsZ8FAEKj8b8",
  "key27": "34ZLJ5czFMjwUUoJJoWGGMBJAkq6Qk8rPsNiPwrtZHeWDRE83v1wWaZKdwvrR7AxYssJELC3sAXuKgEaBkTPZ4Fk",
  "key28": "xuz4Ko4qdYAvDSgWAiE6usa86AQGR4axbYa7bczbKJFEYhngUbXG9fn2bByAbtraA5MvFF2Aw6a4xoZQraYk6mn",
  "key29": "2uZPhh6Q9xJzJMyL3WgjTfmgMSGbGtskeeEjCUVKvH4cEn6DdE4Zi7yk4CsHoDzA1HxFBvfAXof7QT7AU42Gpbcp"
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
