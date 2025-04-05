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
    "Yfayf53uD5nfwFHEohjiMpYTSkX8dVB5ux9dZuP4tBe7S4PgbqDkQi4ENKznqKNP4S6govuFb2kmzSqshLWNUvZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56RkkZhPxnza7kiPEGnDwBzQ8vQrHXobPc9unWGpgEStvN6hsrounKEyS37zg49wSrs6d1QcpQBrRJGXJjMyBhMa",
  "key1": "2AhbnsysTTUcnYqDobMRPj86neLhZLPbUkyrsynkrF5vKTYNsPnNVTtoJ7q6FTQoaFSGn5TgRBn9VgxcPbP1amMw",
  "key2": "5fS3SJozqyQPris5eECrvzGRFBaYoKyDVqJRPNf1bQCd6k2MQdhamkX5rX47B6cYpvV6yE4sq7mhhowDYMtuHDus",
  "key3": "w3YzaNVfm1qvHoKuT9djwaF46HDVxi2on48XuafHJjgv6o4V877QSmP4T5y4w3Pzm2khQQv5TvzgZe4S9jL3tHb",
  "key4": "2fkogtqGFBSS7F4nWZoTmtDM4fEWV5T1kM3NKvcBaBQZ4LwgBh4Pi7YSQRPFH9mXq736r5FLVHdSZrcyMmzLHS2S",
  "key5": "3qFNnfoaFfiNMfVdh3P728whCy9fJ2tSvypFmRAFNfrVGYWK4jrzTtjhTuTNYuZbqqRUWQW8rQn3cdY1Sy9rB8e4",
  "key6": "4j3LUzxebBtxrTVi96rEzY1ntu8WZjoAPpHHMyXnLqYzpUXy6rHuzXVQRAbncd1LWX45yGAsgjMFgf9EYGEyuaWE",
  "key7": "4d61AS1FYPQsm6Q4NZG3n6nR3Tnp7r9RCz15qdyWcaoFQLEgwydidG1ErNDV5jKUxM2FxKmCg65AGfc3rwLcSdcg",
  "key8": "4seEu2sTi3UjBNzpo2VwLk4zTPM4wzw6oiRdCQq8Qs5gc1RwG4tEEj37mDPZvqgrHGiuwNqSDFzWBCpSZwVaVYi5",
  "key9": "QHhDb4HRNqi9h81ZpBcbkYQ6VoAk8v1aTy8sfMeiq248YQawt8Kds6cgwt3Qa9cPrV3qFDgdkhFpK3DCxMLae4k",
  "key10": "4QRCgLmDSfzT46kwJwyY6VVE1MamkBCX7Ye8uxrPJq9XZndgsCWSjhrzQTv2FRbzoEbUv4bPKj6sFBU9RKsysJdx",
  "key11": "z4AyNxEdanJDoRMurcXfZAGpqyBVAFLypJ4GEqPnTeM9Rcset6R3iXquLQb4kYsz1uZo9Q1kk88RJLf4dHeq22q",
  "key12": "2cFfWRugm6Qcx7eJ4WwV1U2msh5DunrFBN6yXAdpErfQzXE9eUywv3qThZR2y2w34ip8YeiCSk7ZV1ZHftyTu1fs",
  "key13": "w2RJuM9veXDRgiYi9dfHkPo2KiCQLcAeH5GTKgyzfjR2SAbsk2mBjFGDa2h8R3UuCv7mf9yzVwSWcrKeD1tMAj4",
  "key14": "42QgJ1fzKC4RPAnVfDVJW1mUyynmUgUVuotTt4Zrm4c2X2v5XZNu3nsMN9iAgU8nSKzoj3kNGAMUGD6JrQ5mhzn5",
  "key15": "5oWd64gt25CzU2bViMPv5Fn7Fdok8LnapvCQzoRqbjz5tU4iDSA3uHbZFqDScYoigTBVoSy7pAYs4vRW2PhHjAPn",
  "key16": "5ancQYdoEerWqmwzLcET52kL5Kudt7UMevDK4JC5cTG37aawRuLjDHi6qnFZaPd5QdDwnC6PzpKaHBwFp5ut1zHJ",
  "key17": "2y2kigRv4yXqQhwUMbRuXaLvANUZGa1TWPbZVmPzSqrBqcvsBtPGbJcT5xFy5EsQhDjZVaVmmctkWp4JsbQnwA6b",
  "key18": "Z3SUKXbLjiHhSo4BkBVVUVTZCep7fLNfvSeCyjnbgCTSeoByR5UoBkbtwaNsTT7zhboqktM8uWhCR7C4xUMKFkT",
  "key19": "4y3JdVC77gvc45ZHfPZop1TjUD8fmdfViWzQdDHbe7RMCL5vUo5qcDrB9w5ANpH2B2iQVJXjw2LCbT7KW3xQUzGM",
  "key20": "3V5paiXCKGEra3ikswPUnPFS7zVMhjc3MYdkRZ7YkrZCSymaYxmf6RtjBfLy6kLUsqyzXuTsAMzn8BmFB2YzykMV",
  "key21": "3kEAnDQUWa3LDiwfc1WakFHDXw59PWaNoWyBF7yVASvBSi1aX8frFKQtJXGpnM9P5aV7DjyqLkgi6BrT6KHHkuJb",
  "key22": "3FqNPdtj3q2949sStRzxMd8HcFDsjNta7VCUMP9HFXLj93hhHhdhdn2mHu4C2ogjzEC5dTrRP3pjpPsxcTMZzpXE",
  "key23": "2hVPtPiKPrtNvixYYfddSmjy3NSf1pqycuj8LUroPnCopzg5xKjNhsZi1ooybXhHdZacfmMer8tSwGqh3542qjGe",
  "key24": "44KZXULykQTFX1qX9afyQWFXvCpWouUbR1JfEhx3Drsy6EUo68TGDErqgMSHwbrEYtRriZT1o7wkYHUbLCmEqAA6",
  "key25": "PkLC59h21wZxjRLaUdDra3ycsYfmXbKwA4EN13pzwxGUr6DXWcC5yvZjfY8BPBfVEvJjwAgCF8yxYaf1EFjKMNy",
  "key26": "4TdMXKSm82mfrHPStqV2ik1nWfrud4MxgE4hKRSwaDMsQALDurQvzPE31AucDCH2AQPzJV4tWeJeVxXi4HdTMtmi",
  "key27": "5vZqyynxAfFu4MXpMHpyuhB4qzvR5ViyAwZ8X2XCA5RyDy4mrSfi1k55SwoYG8fYhms2AJEPSDgBAAG5vQeP9m8b",
  "key28": "5bn7w44DX6KeSgNXa6RPTr6MtyRa62C9sXTNskEH16YMUuFc3tWX4prq9jnGAe2S1LGFq5UhcWvmKjL5qEo8aAxT",
  "key29": "4MXMD9QnLmgVw1KWyAw5unm5qK8JGvMsZsSTx4Hh7P5UXSUwfAk1JoPpBANLB3RCUWg7hxN4qbFxHxkosKQcW2ds",
  "key30": "uzj6kxRRzH7nT8HiqkiAbWMaFnrcAv3ho9u8TihftaPEnHjDTGnZcivMH1C81a9Lsd7n1Y43GLt1bGC9kbgraq9",
  "key31": "9Pbsb2nQ2xdHGfaHRwEVcaoAJhxqoZtRW8wRSxcgKQ53ijvwGWmNXUuZjAdgpntMdLYqDw1q3d3ULtNxcu6gPX5",
  "key32": "2KrE8Ja8vJMa28c1wH91DAhx34ZJioM8vaBbyiREhwDnNhjoG3Rj4emnHXUF8VwyAg9fjBRQzCN9rbyDfkSyLshR",
  "key33": "3pfEixZ8f6CLxtKcvuw8sK9TzrPjufsPDRpWMAJ2SLz7fjyGnnSSSWsa1fuxkXVcyiAb8ituJtRymj4fBL2SKEUr",
  "key34": "25ZxvFPngY6agVvpT9BMjb6P7UD2tq71Spnpo9ZATxCJX7cKX1DcmWbusD6UBtHhTnE9sWJjQyUkbjrmH36ExQo7",
  "key35": "3DSuR33YvEjiga21Ej9fYLQktzNgY6VgBSyJ1D8oaocauYjDzRNTZvEd8rqCHC3gHs9cw4VKu9TrJxyccBZY8sQC",
  "key36": "5BXx6aZHPpfb5uAhGoc7FLEuD5FogdJbZmN11u1PfxqYd9irzFQvB7uXtcqpEfLSzVqbfFs4AobeQYKzAPQdPjTT",
  "key37": "4oZnEfw2u4Wy3txKQkx5triVdwYe5ByZysEGyTQ5bRv5tk13on8RSUUE2hVGJisj2NfMzdgmJzv6x8hYciETAvT9",
  "key38": "3RiiZwwCTB2ViAd178y217n7zn2ZPv9MUjnrP9CXmoBVSEXaEMibXXnYazZfjShrvHU8Cm8KbYE18nChtvxZsgcg",
  "key39": "4Wjx74eHT2WT1YpNWF3mBBFY7uzvEwdDZSpsdAKGSci9euQuYkCU8xfqzdpoAnWMWCYHaaaXwjAhBzFvwKodLh7S",
  "key40": "3kjbqVFzbdBJw6WWrgkDQRuKF8USeVmvtTQVhmhWsPtKU2dUB3tKjQrHEUvR72Ra7zc3JyWrVR7bKUR1e1fRwzgu",
  "key41": "2xd9pVYcWaqXgrRFhu3hXV4iDifAqDA6kE2iB77jQ1wrBsiW7UQkZk4EVHyQwxJVra3wQxYMAx6gLufnmLnwA429",
  "key42": "4DXt5BBpgJuMmTwds9Cz6MzkwYeZAgRx7yAynT2GZMxUmPpjZNEd1tVsFZibkbbLWWbSokZpoBnAukXenNaeRmT7"
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
