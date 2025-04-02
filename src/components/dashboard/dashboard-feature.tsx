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
    "4FUna1VK91QjwK5VZSztFTTUx7uJtDaJiF8avKBgNwgbgXLzZjVhKTUSZZNY5WXxZprGsi4fCXxpAhrRUjqa612m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28dVxJ56yZdTPMA2u8wxX94rCQD9m66Vkus8H21f1QrSmxJj6rd7re7sDYKV8VSpLgQHeuBsJJ29LxjH9RJ6GwuG",
  "key1": "5vDUgVUC11duH4wg8GE7QQYeW7qmEer42P5z9f5PnZhQcx9s3iaVDgm6nYC1i7KMx5DCngEPM1pKRNiMd6srjpbP",
  "key2": "timqn8GuHoHWGsLZSJ9KQMo3sgkVY8JAGPzQtUBWQoWsdZH31ikK558m5T4rJKJMkaa3jRCyxYUPGpjcjxzdrf5",
  "key3": "coisnQBpTH78iezv6YoWzHk4XJoiDkHVovYFwXEPbRju4WXtach2XmrbQqXRCZkAwzQoCee443azhsPyAAdw7sv",
  "key4": "Xv1Ue9z5W9vMNr8JZgnnVxcVV8ZUNVrryts1vBR14SKprgiipCBvFAoqhNPRLj6NPXYFd9bYDvjzTjFtZkTzCQK",
  "key5": "2dXyB1g9jkSR3tfBdd4HGwggWCai7hpJTE8rVx3E9a6Ku4y9qApFEY8p8qEdprWZ4dicfsk8ajYjcoiDYhWLonjB",
  "key6": "74uWSGHxnwzkWUZ9vTMa61ezk71tgwezmfP8SyWDxA49J7ihKDsTeSVtKpj6zABekSaGqo2ot4grYbAhhapmxNB",
  "key7": "4g3oN77VycsiX9S1mAqhhi2qYUd7sY5CUECbS8FHYD1kABFxfQk7y2CTsUYD5YZQjdvbwyeRsxAUF5R64ajMK4aV",
  "key8": "5jthJP61PB39iQXcU53ZTPc2JAmfY1v8RUaDgbmMVrZ36hNykdjCoHX8BoqF7Kwgzy2aK8WERQdsmvrWedUUfDiq",
  "key9": "4idq5zxUN9SLbzu84fZFCAn1cY9eFD6CLGTsczwbwMeYusgyoFsMk1bXbtREbaWRqjSeMwUhK5c6GZfgvhJN61hX",
  "key10": "5hF4eZbTntoE4LRsEfW1uc1TsND3JenNnLVBtv8fWo8F1rWeARp5g7ESxbHM5vzx6LeBF4u146xS44bbKYE6YcEK",
  "key11": "4aGPevgcGYpccAT2NYNjx33B9ZuSvnzxh3nnstebvxnmJvZqfB7X9eoGu9XyMNy7NjcBtt6HpyH527hd49QswLVi",
  "key12": "454ZQY5qqjbirE2UEL2vKvDQvr3sn27YPLZuSzErNnebptCHmTbzrsJpg4gwDRSCZNz6a5ByJfFRda9do4QCJLuK",
  "key13": "39g7EEsVCpENNcdyekWsdM5aC5bVPL9jPiNpGinLe2XKUzCNuMxt2GBogWD2vVxbjrDf7b5D6vNcpEKSLjnenp6E",
  "key14": "3txfRNnYUH9j6THG96Eijw1EocEcB5fuiH4tCXAegNTYimzqzbBhT94mBEm7jJwozeQhJVRTz1KoE1mdbvVW1ieg",
  "key15": "3qHbA1JdRfk7yLFYdBFM4dAm26ZakQmv88Cy9DgAUXZ5VhKkUg3RpzAsuyWCXAfQW1dDWZWFqhxHcp2kkHfJVkmx",
  "key16": "63hzdux828gctVBLFbj1MCmHipAiH5mih1eUggZBPHknkFw22EaUgXk2YGRcUAmc4aRyqvRBv77Gw9hRDptiTkWz",
  "key17": "2VSY1UoKv8HJvzfDFTQuSEW4okJE91CGmScv1M6Foxn1K8v92TzWkWX8VATCGL2kYdX2bB2fhbkWoB3X73nUmxC5",
  "key18": "47k3TDBA82Ys97TtGugRq53taCpQU8mCVJmzA9tJcZnvcFw3Si3pq1qdiqAFcDfCsUhVpCCuqmek5jP2PgTe9G5a",
  "key19": "v1DMfc9tqP1ShHzMaVbtohkLmz9PzdpMCaS9xz5z36zectbqgvQrbXHEyQoL6DYy1ViBtG69JoER1dSdi2Q2Agh",
  "key20": "57Tmr57WFX63c74WZ7dZ9XpKhcCdm5k9kXypVqexTgyixfir46GfxWsK93znfnPWmHUGdwKnKzed4jHZdVAVtufv",
  "key21": "3E6HuxujRqRCb61PcApsUinKR76d4SorRZaXePiu1w1TtfPNTJTcujocx5GcyLgxnVC2xG8fG3Sv3XZFWLW9VKUm",
  "key22": "425CrTWAghzC7PS7L5sJqGsTEMSHDxwmu1h3gguN9LcBipeR3PQ482FsHQJ9aRYHaTAFirvAHBiF5TYKo2eCyp3N",
  "key23": "7nyD1AyHXZ6JLEzoD72e9k5qNLYF6bW76pwn9YnZad3mVBKhtmm4NfpVKJohvqfVFfQ8uJepBBiDzGCXBrs3mM4",
  "key24": "4HNVLFNoBucLG3SPURecTKDMsiHRbtqWPe28ux3CbYJoLXSXyAMGmZk2jaTnRgW8sZaFZy2og2uab4F6u1Kpko4U",
  "key25": "4ekXhfWfmGDb43M5ZPqVqg4F9g9Q8GWhpbFq2eSmtaTZsmdMZ1JdABytrcBLytubD8TrXpGx4B78Sp5tUrw6Dyo8",
  "key26": "2p81zfdfxhExDofK9zL1DnUb6cSeisyDksMA22ToB8wYmXm1U2StZC6zcf9MShr85hLsyREaQWdVDpzP5FT33AuU",
  "key27": "3Ctz6UqLxQKgR8rey1uomT3pmUW69fMWbkutjXs3n79FuwnD2i55h4e5SqWcwf3rFR35iynAC2YTK55GWJPeH7FZ",
  "key28": "56BoAR6AvNU1bFa6P7K7ov8c9M7evLqh7mUCifNS7kEiihzSVgXzPp55Mjke5z7hDkKDUmeg4DfAi9CZH6E6qUGk",
  "key29": "3v4d9ZHW2DWoWavAro2U1688Hb8kMVYPRiVqvi7xFLamnX25Ez5spAkK13SemWsyL6nTjBK2LBcxcRhFMgUgZVr7",
  "key30": "5EubCWzt5Uyv2YrSKPKo41KmzbKzYhzLYPWdGyxZvb1aEYH5hSjgihKvoSJcdZBCELkv5SejfrboqyGeBaJ445vP",
  "key31": "54vUimD4U8pshnmzH7W67hoUGmiMJFWQ2s85mmvMGZTtGj9swgSwcwkCzinXXS19i5SdeTryD4zY2cmHTL96H5Fx"
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
