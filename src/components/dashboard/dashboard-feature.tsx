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
    "37ugEA49Fd1KvCo6DQ6RaQXDQ2Y8AFUcRZWBvSh1dkbZivwhb79voDCQiGE3FUxFd3zLTibw1kcyvt1Wm1gVhvbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oysJDuE3RRwV5Q63pAPQz1Bp7suY5KgQr2HErALEpCifKmpRhvWM6K4j17t9Z3YDyR3izrXCsWRkt1YG9pyByrN",
  "key1": "3i8bSfNsbozgk59vLf61fK8YitGyhmir35BbdGfykPxU3bKiaN9KWWstmP1vidprJoWXLyo5vYKM74ZHeCmB2Qm1",
  "key2": "3nNxXEuz1piVkjrxbG5UDiGAtaypEYxQZYY5WowzgbLRhmCix9WCVb21RGGSZLuoLqDMW6eMP1ysD2m3LFKodM1D",
  "key3": "3Mv9YyRrkMmrYRqNY6rB2TKyRji8SL8qNFU6sQEsmcTTnCyUL9dn2nMnAiTY4hyHb62i9AFWVFKimfdJbk4dLyQM",
  "key4": "2pYzeMtsVTQpvDecnCaGyMQ1ZVtBjXbqkvVeh8pne6JniRp5zbCPnACBjzbPy12HQeFZK91wxUxmyvHxcbwqk4HS",
  "key5": "29bBkqXV66K14WBqhubhj9ZzbyWW7HcEVaNMz6Fo2r6oZv6CHfNMMRPoHGZmwLutmMG1AtMGa26VMiRaXS6qzt2x",
  "key6": "36HQRNPvsw2J8bfdoTetWtbvWrFc16zdoYBQDHG1B4ygZQSLu99YuJBXu3PCSa8zq4urqVySwK7JVS7GxMrWHLrd",
  "key7": "4vE2AfuHpwsmEVTUoZVGgHo6QAuh4sErVsy2a2ktM4gGjuq18SbAmAqX7s6cXGbJrFr8WmcCHZcfHRHK6QHWg44s",
  "key8": "5LT66TQ3oBQsEhrg6au253jcAGdXLRU5ZJPSHiJ5J4i5vFWCs2UeSZwa7D6rSKhAkERmBQoSm2Az8L6H4RCyyrfx",
  "key9": "2MswzktAF6iyhuwHnV9kabRMDViDMns74r2uDCjBJNnAaytCyKmfrrzYxRmtPkDSWY13UJb1XXdBP4ys1eYSdi6y",
  "key10": "Hvwu3KnHKNP8CNspA5FReTu52yLr714W9iCNUgTok8KQ4Uxed3ZzUetM1YiLaCbBAY58d6yUKHZCXDMnMYEq8Nu",
  "key11": "2CSQiEiUcHgFeQaP2dpQVnYDBwACkVVyuTj9sVETkGpCBqjfk3eCEJ9fYkJxsHKNkDJnBpBPLvJkwQQNVYXnc4rx",
  "key12": "3BNYh1RL9QWF9HpzoNqBFwmQ372ZTuwfNixkquRL8HaLVFvHW8hjrCHykCpXuASTCRsAcCLaHfthju2hDtDNXH93",
  "key13": "29TNYfo4TRx7m36rS6fwySPxatpEj1UEWk9fjxXp7CQAU7Fo1qU1A7NHyyrKfvq5uXn9StKkc9iMeFiMNxnKXRHS",
  "key14": "A5BeFRHKvmKc1SFtBxi64aeD4xsD2dZyeESJYGYX4DNHZqMmJg25oFjAnWCig5PynxjGqDPnc9PdEXsTYYgQgJf",
  "key15": "5Vv7SV3EZpj1hdepojx1XAY1LsDVtJjmfwGb2QSeSGgK4CBuCtQjEdtxq95W7fCdTii53oaAWu9dQ6WgpqDQrWnK",
  "key16": "YZfGwQogP9nQtSUSjEZ5KKnmLRfGwdPJp1AUywGLv3eUqbSir8ZtJySowVAVdVFqob7466gR2GjeSB3RJS2KJtZ",
  "key17": "DBi5BkVrNuTSQntBEK6uqKUyChW4VU555HrxUvwvucJZYV376MCDhiDMK3y5DwjqLVddo5HSetpyzpuzs98CEoY",
  "key18": "2yk6FgEZNjzMgzu8z8umVvbCDreQgvGrbPgCTkn5u36gKW7ybvZMAFFr6prrxQLn5msp8y44nhbHaj7NX116KwDC",
  "key19": "3Y232bSx31mkn7ghhBqrkvV58YpSHLRGNC4pgpRgDLDdWynV181Z9QVxxEvxwG92N51hfTvpcbyLWiq9z4rQ4H9n",
  "key20": "3BJX93mYJvCpZV7Fgkm32xVHFFWmtSE3nqM9vWtEMNFxuxANNWEXTx6onuJsc71UzmXt6UowdBaQZkJDqta8yCwU",
  "key21": "2zDBNxDy3KaTxiGJisgJrCfYvriSYnZWvAao9HAa9ThteAhpi4eQrHa11JDLKYL6eoK5gFHPNtTp72H5frFmfY48",
  "key22": "3icKKoTuFuWyCyBbVSjTxRdZZ5m3SUXrqNNP6YtPhWBXf4JhfU2V3eXpjFgjUKPeVfjzqo8yZrVmAPKcphTYhGMv",
  "key23": "572TYihTAcRA6BA1X6KH4stRnj21HKs6B9sY7opqQB818Eic4G5RQigPAPx7Rm62LJuW5cUe66UdHPVT632xD152",
  "key24": "61ZdHBRy7Z8bzVM6tW459qr9Yfk2eTz4dTyi3efq7uaLwqhBCewHu8TsKdCJpeWFrNJMm95AW5wasbs2mraoRZJx",
  "key25": "3xZiLoruNYEqRxVUZFnteMWJxnvZkQu6d9P4fGqVkwdp8QGoSy4NwA1F1c9km9vyYpyBQVFMkHoctuiZGB9mqLkM",
  "key26": "4jCvwtiRF9oZpXNnWX7BKtPnsveNxzbEeCB5mzoRADajLvKrKCYqaNJwU2c6hmzwCEKoH8bUTjyhs1WEL7qqFShe",
  "key27": "2864it71w1wTo6NZUnenS2FLxARgmvQfxySNb4eWRULZn8DVfMfAdzwtgnNL613cWikcGFJuKF2XnjAkznUqvA7d",
  "key28": "fxmar3hJda6GWFQM96jLbLzJaZ95evJc77gi7egDB7oEh9DRu4pTokJssSAhZjTT1VQJxH5pevCTH7V2v18WAxV",
  "key29": "hVW5rLqcu1uygWAsA1bHpq9PECv8Xs26AsdQHMgL2tWE54WkpSMYwu2fhLjvexHpdnDGmcMy4CGDWphKmur9MQ1",
  "key30": "3jKWTNXdZYnubrsAoZ1AT8dJz2Wdav5oo3nCJGeENfbQVDn9XM44fVQEZy8CKAupa86BRZzWZbkyosd1KZ1qhNhi",
  "key31": "25HK8k42x9L7WCC2oubWYcdXxwyiZUYztnLidjxJQJEVtCuVQNvttY7rDucq36BVfYF133XpYdbUMfTkSwJD77LH",
  "key32": "ng2bAs7Uw8atnLVbnEYYFFx4MB9SFVtWGBr39sTifSqwwaFUwZ76KtEWKhP9JvZ819D42XigV84r1haFiHpPQj9",
  "key33": "3yGRbbYPoA8sZw1w5DLcyMweGhsKnGLesmqhi6Vf2XJXEGCSy9XXW8ZLiagitCFqNAujid3K83QR4rJJfhPZPmeR",
  "key34": "3fH2nPDkwfyfnxFFcSMVoHUPFhdvGMdQ7hf6dAXxEKWow3LfvqakxxAbLkiyuLdLeshqxMmnXecEzcXwiaQgAkjM",
  "key35": "3T3qvdbmnzYWALG29TbdAG8ZYU9TdMqqpLkeQynBQ59NpjFi18fMWguHaJJBgYmy3xjr1ketVcaKifgaeBuRPHPr",
  "key36": "3bvrV7r2vtRjLa7V2so9VVuDJLbQrj8US1bXg1ueUJW6n8xaaxoBDrtiBTJzVtshChd1XjHPckJqaaqZw6NjQ22E",
  "key37": "374oJ3VAznER9Bg6ELPtTcqdCWoNVFVcCEdPcZKdyxmqZJa6d5fF2p97pMmzLVgXipjZ4NRQC5GX1YEyqCGD9fzn",
  "key38": "2izxEeMa7XV1hed6q4WQLQEWbB3khmzafh43DhRaV7yD1pFGvsQTcUgnsh4179VpF9FFYBCU9G17kLierVbr39rt"
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
