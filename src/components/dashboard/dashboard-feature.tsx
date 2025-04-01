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
    "4T7yxisB7W5oDi67bqVwNEXfs2nY6sCFsyCFS7Rj5yrEXDJowQkKoAcdPYefKK7GPWHDk96angkj6W8W4rMa5Cuv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iSRNUXk1GLocM6LRL4KdU3saw5yfFfSJRyuYV4PuLzYnTv2Fj8H5L4JkmuefX2TwKzEXSYrP6QrV8hcLwUv7dwa",
  "key1": "5V7TtyCueH6wMErafbqDhiSCRrYABxXSMseV4tbptBZ8dznsLKFsGZa7bjbDS5sfkX35Bw7pjWgz3DusXgtKsjQU",
  "key2": "2Uz7Sf7UV7FaFWFP2BUwvRh5BR71SKHowmZx5Sa7NZnSJDraWb4qZMC8WA3nm7TXxFfPnSSCuv6tyAKb59RzV57J",
  "key3": "3oXUJGZkeNM8GFFu8iS7Ahf6FAZFuuUoQj6wN4mpzp8uY44jr1qsKhvNUAQdruvhUp4rpVLM1f75aHJNN59ZM9Xk",
  "key4": "3zZqPpTTaNr8TDVDYxwo2v6wU8MXrYhCwtHeC6NgJTpUXZdv6uG3WwQgetybue3bGvRGVXm9w7jK2CHWjtywcHdf",
  "key5": "3RTUv9DBsYyWUnaHZHZPj9UXWY7zQETowvG9XyuFMiAb3vxSAN5S2ZGtmj7gcY3zEhGkHd1jBjcU14Sh4jknas42",
  "key6": "NbCEHXopdFch2chStKdB8iVms5BCuDbG4dFwZai9xtDhhV8VaoJ5vPKdHsQYAP2Fypz9GGGFpKum3UPMsjmj7nv",
  "key7": "25yta34H9rxLfGRGyDF97FQuLhAb8LtsHCycxAYaGofdLPUipFmH3Cho64eGGMWrcKpCBKWh1yPkpmqmoxKS6wC4",
  "key8": "5fsf8mUhyr8C2TtEFfyUdCKtxiYwQkcZ316j2mrYHszC5dCnfCja4YQuer7d6tQNVq91K1yjYzmjhLNEVoSpFapR",
  "key9": "5gAtimNDa4sqzrsvrhkUiL2XTGZdhECyV66LmqJuTT9c1U6cjFGgQ7JANARxJ1QZppvXBpt1fzbW4EyRgYCUH14Z",
  "key10": "3wD5bh8TyqJotwkCjDUaAohWxvbuaxCinHe1mVRACRfg9xmHaAkHbGqdjrD9pNkSL6UA35Vj5i7CRTC6pTLfEP89",
  "key11": "M5ovZY8MWP9WaNEji2Gc3GjDNg79boYW2kNam1tgvTQ6kDGGw5fozGF8TGYDgSJ4AXdUorrJ3DdSmu1WrFyNtFC",
  "key12": "RDYEUcxuPRfEuSvYfRy3ZyNJv6tVMdNtZRXNpMH6jJt2TraazXg8QLVywiZ3nFgjPZSsL22RZDQTrrxy43v8pmR",
  "key13": "2eNxGAeNjV7tVrE7NMeTU9h3kFc5kh2skFeskMeWKLa4HyNyrUjfMdR941Fibow857GXGXkziZt5DQPtR5emwKYe",
  "key14": "4YiM2zveQiFqW28x8tLKEejCwCEgazLHovsVSkXDNsBXQEPhpAEhtW5EZ9DJ6hGEGzNrUJNtSzB3abJQBZKTX8wr",
  "key15": "HHhgztjHSynsy8Xju4xng6ZRF6UbUT7CqHVX1JGd2Fptkhw279YKzv2JUSKHpbs4tQnTugoBfQSqYGz6TPEX9oq",
  "key16": "4qKMyt98DrQHWksHkDfCUMUykAnUJFnwQm3yNvDDXUtpgJgkFR88ivGefgVhVeiWVgQpSvHwgpwjy6NkmGu31eAk",
  "key17": "y4sygAwCWR8FJosPJcAd3EJTCHMLPsSLEcpvLZZQM88wmEHgGC2UCKbcewKowsdEXWLXRc8oe8kS32P14Urx6jw",
  "key18": "2VvuKCTJPmy9bzkbG7wPUktaYB1DMFho7rrg52oiPJbNnFsfrxJU8Cu8meyFdKUjyEeLU2N8dwUNmFcq2vUUQVg",
  "key19": "339857cAYKSRZ6sAApvDZxf93nA3GnSDiTevSC8LeD17DRMLow47CQZKkTaJEdCFGUed4hP3BgHQAwRowba3Mfku",
  "key20": "5z5tp6q3KQS4rJSwgMzr17xHDS3mq4hQL34aE1oPNDP9Zw4wHoacEiGqfpVpdW8NKENXthTkaomintaGGEkDLVVb",
  "key21": "3bNkyWEt5TmYbddjCuML48cKaUts5GScvMLisicx7XGtMAGw7mfWKX5qLnvTF2WZGKhccLkkL23vFjZkquE4EVX",
  "key22": "49vJTYYJpNZ2PNHJxG4XCFopj9hNMYCFUWjX1Fr9BUXjwDiRFRjAdFaJSsAseeZHJ7sK9NU8JscXokpYxWRF3AqP",
  "key23": "3dneSdq9yqfZUJT66tAou7ku7yFQFGmrip7usf27mkLMrQgiLjhLikcLMQbr5cCCB5aTe9bW8asVFcUfG3hpHhbZ",
  "key24": "267VrYdS2Uoy81zkYcwExFgTaMjVtfGWjxXTz5bifA1r8voYmWLSPHPrrDjp9JKD7FEauzGasqgeLjnRB6dkkmR6",
  "key25": "44aRRSorb9H5U7tRyJFfxqB2PtLm2he7FHM66SMs6aWZGS5KbrUdMvzfSkLcCamZ7C4p1S2rcTDf26z8G2jZ3XCb",
  "key26": "2Mk7ZDghqLTvv4qZmVQh3TPpkKoXWqfutMZQDJK3wXZ64Nh1ZTJPdNtLVE5dDy8xoCsu2nBA3wNYdn51WhmCiAj6",
  "key27": "2swZo9r7CD7GKF4eYidXzHA4f6unFnjZqwMAmwFjjpXcewdY69BNYaQR7VgjGKUjTtUspP8M3uWcZcxK6kn56eN1",
  "key28": "5x5AnGjy4kyaJBfWKB8NKsnbdZ4mrKB52mwXQJ7eF2DxCYZRo1xW17CmeZCr65Pf755HZ99WtjxqpKaNPqPTq8Pv",
  "key29": "5qYRxFe1HvYUAfJbMT7LaYpTo5qaNsXH9uFW938rnQ8ii4Mv62MThN8bRgZo4LttcKDqPtcN2HnfjP87oAV8eT13",
  "key30": "3qaNeECXuiwPuAZN3XoaPhawhjMkg8me6aSueUmqas1hfPsHYEybZee6fkSCHGQrRQmzo1r784ikZEhMMn45KmQZ",
  "key31": "23GX88sFoGPnTmuqhdKgeFgFnWxPHB2E9p7T2kJUjQLVAyfoY99rnueshnzJhpZAsuQMGRwFhMSN377meGHtdsx9",
  "key32": "2kBnJGHJbgc1brABbXwai8CXC2MbzxZPXZ1WcwrgiSUCJadMMtwBiDnYQLcjCJjGGUKc6cE8Bf8zUJh1z2adVv7x",
  "key33": "4HswAyVzXBf2DUWUQHLFScBrjchU5pMK1eCWe63fBUQxQE8r3GsGquY8uN7eRQCznLV4abk9ZqC7fLvU5w9mSkHF",
  "key34": "5zRosq7b5Bq8CXxLJDdC7ZSxCZ4mpjPUUv7dmVukh1Zergi8Rf5sybXExbjgbsBk5bXSdGfvo4aFMkMyu9d1kEqW",
  "key35": "4NLtBedFYi97vTERjcuDkY7STpAdvnnFzn4bvyHx7wjDcVJHtr3dLMTiNxR7x3sXBPFV6VREtrVRddKRrSk6Rsyc"
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
