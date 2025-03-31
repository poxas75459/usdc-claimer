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
    "3VjL91Kh3t6AFbxGTTbCKRjLkx32TsRQY1qJD6o3S7Kyqq44xi3yyWqXzxVd3Xdpm1VwxhQEteCz7abszHqzYXPU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DnagEWgWBs612MsEPjwTiTd96vw8R6yJtdzc2UaFrX7BpMxpVF1m88uBcNka9RTtoSuWPpnhdrGtXbJgQo7hy1V",
  "key1": "E9wV99D16FXzh9QrnPHrTWK3TxhZs76kDNHtRpmNDHezgi8PCaVy1hf4iV3vwbQwEwEfv99dxJGFqWSEvqqxUGn",
  "key2": "3Vq4nXNfdSkyqzcQKeJjWVD1FDwjpW2Fdhh8VmCLaHSPKMDCop6NVJD2ydtyiuCp2LWG8Y2toCEeCBNWVCkpE7Sm",
  "key3": "5jYQmqwSVfp3cvHmmAeVF5xUhcJb4ekKH1YRrkV2KdiM2VZXVXjv73c243ZJsTHD38iHazQYB9Vp6DgwkFvFxUME",
  "key4": "4pxaZNyTgNQMXNEuKcQzvRevkKVJuXkRQhozvftZ3uwBca3oAGrx5YseLjUD8xtPLKUbGTkWfxVq7z5nNCMt17CS",
  "key5": "TsnJFohSJpY4qzNZarJwcu87ySNmLrY8PDFwtxdGeDkNiVVFsy7MtaTrqBppjabdpdQbmD5zmmmEh6QV5eSwBhE",
  "key6": "4CHp3DMFqgDFqKdyy6s5tEH7mzrKqeByxTjMZiV1rRTK2SDL4fy7Zdp45hx9PtP46P1noANLT6odGYxZMjFQQGMB",
  "key7": "3BJKEek1xBemLqoRdtqgTjySVT9nHtuvjjKRbke5NL3M4gR6v7Qxpu1fJhiXEByPGtzRnh2YtFiTqSP4RukyG3qe",
  "key8": "2AtaYTHVqDXkkY1BSEyrEQ6bbJjgoXvhqnBXuFQ4f56YHrfv9JazhrCQceTK6onRZ2pPR29gthDcmrm3LEfmsd3S",
  "key9": "3wZZaqsfs3j1PWvUkMDPCzfRaJ6bGo3DLXxmLM7dnM2fyLdUj28bEAjT1XXMeW8JFkS5guecsGytoecLUQae6aNZ",
  "key10": "2qwiok5hTmkx4TaAG6sZwQSaAVBkMMsgaj88ouzo9hKqV1fUf2sxCo24nPP67vUHEBeM4LArZJw5ZzKBcJhvDUS9",
  "key11": "5bAioJmqgKkjvCQGnkKSyrVx3kan1Gvw2sDNcCzAGeH2k5WQHCYPRjUkLVP3w52kdGj5k4U9k6h9qYMYnPaKzufT",
  "key12": "5aevPYgVpKwXP6HR8DnktDoprx15nmPHcAvxvLy6hfUAH8cuNzjnkApq4NiiAKK3KFWXLCqsFnbjRYkCPmoSknxm",
  "key13": "T347Hzn8QWV4mTfzmZzsyXoLk3WhJhjD1zZqs4h2sfEVuiKefzWVrus34SfEkSSa17fVeaVasyQke59ku7uUhL5",
  "key14": "67FxNLdCErdvaj7aJmDcqS3mKq4brZLu4YPXCRbvNxPstxGoUaEozLcBE4N7r12RZTfUTSFbMEgxZoFeoMUdSjWU",
  "key15": "3sNemRR9DsNY2dJBeDpNfVcTCShfTEzWvDLt5S6b6BvGMp1zDS5oixguUxSHRe43KELPGAQKsgjT8YSWCFFUXxXH",
  "key16": "UKocCMVqVp1noAiNbuT4MzJL4YuryNqR1Gbh8qjQ2ycmuQ4wiGfnaBsDMFXvUhRjBAZ27vYWfcKmfBrihwFBMm3",
  "key17": "5UDENdViGp6U9DVPiyJkc4Gv7F5hx3zjHfaemwmrSN6owi3ohbeMtFMQ38Nuuh5dnq9qHdcRxN9W6n6Hhdyej1vK",
  "key18": "3qNy9b6XKPAFL5aG2uXKpCBKDWrggJEPvyAopJacM5qMYZXyMGBTrUh3ov7RnxFDtsRREVDxXonmswuoWHKSF9KA",
  "key19": "2zbFLR8HucnTqTnDfhzeHFbuFUbh4MkA3R18rPjE9asrktsbkBUQuiKazmZBMYVFJ3ZssM3wsmfpt3MejurAETbw",
  "key20": "aAk4rPsMg4ezLnWHaJTH7vg8YEQ62bekRWdmJmTffQyaEwcNYqxjymeTH8muZNHtbiVeQ29S7u9Kpzc6qQDgs4L",
  "key21": "3PwzBLHUs2BsHg8SZ4Rc6X1JCRqLjSGN31nFn9Z2cFoMb7XehkbfHXMbVthwzGaiAR6DQ4yy3c58QR6VgMQRDPHm",
  "key22": "3csqqTLxMP54PnTDiQdQRwG6wT9CxCyK7TpW2EQXLtU9Caq6R3mTCzT1g9PY3npQE5EdXvoj6VuhVbRz6c2H4rK1",
  "key23": "5qq7eNQBUmE2KmG7WQNPr9hwBBfMkdG6dPo6tJpVFCmK7NawtbSv8A9yegfdn4RHJd2j6kTEo4gsqwQQSi6qi4ah",
  "key24": "3CgM9X7K6YAcEDu3m1Qb3U9LBpoxFkNL2BFrormZGACbenfCH6SeqLJULXwU5bo8kpdX6YQYYR8p48BEVLFuCTTN",
  "key25": "5BkKogMCvQ9etAUJk9sz4C8oCas7ghEgrhfPgG1YPNwXvMLjnoMZTPWpkTpDufGiS7s4WQ52RX92hTfvjMZxoA9",
  "key26": "DgtPySaAQ7mCcUDavEjdaADConS8UzEmYSpvGJQeChu2ovYp1iNxWm2yN8sStUhJjCU3pchbss6bL3MZWv71HxG",
  "key27": "41ATHtXxYQwtQsHp5cmu1upsNqXySPJ7idV2K1JcNsdYGV1ZKujRWowtk5XqkHxn9EFbvkoxMLJA8mZm7RfhdngQ",
  "key28": "2MKUmJmzYaXtEBGMu2s8nReHXoZsDpZTrJvUS9g4viMFutgt7nkwSSV4zo8567M1EGxeAmYHtFXeCv1NxZGco4cY",
  "key29": "2hVecdvuPfbs9UkjzfRHvfNZv5xRcDJ8S13bAMYKrTTnkRFpMvsKFMvfVFUp5RctCbpMaVdnzUz79cwbFs7wn9z1",
  "key30": "2KAPcQXwQujTpQKDJ2K1EP25y7nPKBDWFFPjGM9TnyrqTCaXhsgtf8WGg1MA8zQCM2Lj4W5iC1oFEJ1rnE6dW3BZ",
  "key31": "43fhTiW1WRBJpK8E8zC3tN87G2AGCE1jG6uAQzVQkY9cvyh5FmqkW2UFwszphU59ULiY4hw8RYnbp8bBxZ1X5yLo",
  "key32": "4fbUFsnn8MeMFS3fAc9WWWjrNqntVHqBvaHSkAJuY62mSnPz5xgQTCYzDhPQGmY33kzgafin1DyD5SUjFWvRrE9E",
  "key33": "3jDh778jW49Srx8cjoXsqtzMRypRvVcjkZnNHAvBjUEtbDy8ydJMUKk22Gf8QSRtStqMouaUcxan6KLDPhwEQ1pq",
  "key34": "2ufABVrMpSBjaP8f6tQ7E7VR7sMxkQg8AWsavNgHgdibFgak9SZ3N6iXcnQjWkqZDEmrAayvqQLbouAQbQ7S8Fji",
  "key35": "33gTykqQTHQJiCjomQNJfEsuP26SVtVhGS6eGUQaa6JGzvcniaMwgUNpZodUy6XvDDttBHXPph2G8reb7iASANFX",
  "key36": "4Ca7Andf2jf6R1XPXEV9HBXc8JVpPiyhR93x6CnUtnVppDPA6DtWZEXk9qwaEqaFcBFJ5fy1wovYSTBqCQTRktvo",
  "key37": "eqk2jBBcD37joh4kyCCZDp4n6omfCVXj2HvVwgMFHbPnR2PVXaXvQzMCpvA82kfSyfpQMTXJB3bJbphm7KTyP28",
  "key38": "3LXet2cEhJEGBLcpSZEaX6poJNRLZq7Ucfy6ATXPcWaen674dKgLgEkGzfpzi4sMYcbza43C9ZHc21vs6iF51cLe"
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
