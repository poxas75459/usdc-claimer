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
    "QHHmuGzxdPZpMTb1Cqnxfa3nfzLPQPsqCfEX6tH5ARi8cgNBEgQS46JAPZbksmRMzfrDQyrkiq889Q1yqkjTgmx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1myhqnjvFB4jfhtYXphtpJRnZsPAizFd4VZ4PuZFeFcfDbC8MoWmhkwC8b4Keci9ZGNE1Mt21apUKF7TgDNrUT",
  "key1": "2ni38ozCzuRFyvfLYm8F6gKEhBCBkygzz7WtPLwhcQ4fBMFTcZHLmxX9cLqxYhzrR7fPpGy8NScwVLYfsZVqHunk",
  "key2": "6364pSorcbXCcFz8aEWQN9a7YYd2BiSV3zLA2pAf5xY26rPsNs6hyLDeJzgPEjAcG9sLLYnhcyGVGCrdXSjGXwb9",
  "key3": "zpfn2YwApJfa7Mb5dwFm2vgrqexyxsQDcZAu2X2pKckHuLZ8o2TbCf1oZtuYKgBtgbzd2MQToFgQNuZkJcskiWX",
  "key4": "TdSRyqYDnAq8RoBFeRBqYVnSYRht8B6S65Xo4pFyd16LYDEUqWhXG1QU4cfoaN2cmAY3eQSZYceQ2Y377zaoD6v",
  "key5": "3yJPwX3M1cwQeEsqmgrjeeRYxwJRUbrGXWq3rMT9mYGCdzRZU51LvLaLvqwQXpcZs7SAEMXDRtJcAJA92EZ1eihB",
  "key6": "2CM99fqyseXpHyyXDcQvqnChGJboC419WDg7EkgmDg58oSWBmuaFZCzZV5MXwGPFc8tSHVfApfRspxQErV7gdASX",
  "key7": "5AwTbAc7MaAmMQv3RhmnMRU2nZkEL8c56J77WcB97K6FgEXfuoxQ9oPEGGZt1RUcKwxFzRQZHF8ouSvWRSgLeyf1",
  "key8": "KLyhwD9JgbAzgMUUdJMvT96buiRfPuDVg3ciZugw5MKtU6xodDEvJHP9j8TZtPhH7bt7zqeHCk46FNV5RFwCqy2",
  "key9": "2rWf5oxmeV9FQTCrnRwDSs1xWZnux823LTs7VUcLoGkWEN8jqzYtMFxNx9xTJgQU5cFysRzpeeUM4osPC6oQcWPa",
  "key10": "7BD76Hx9wRqasoKh7ofQSWaHxxw9ZSPTgHxYW3ieUVByFTVPUvBR7w8XZxKnpcZrjci75QJCeQniZgShZrTnD2W",
  "key11": "3cFUgbbQrXqRJ7bG6ZHRALenJvSxpKkaP86YKFExybegRCUYzsTNQ3gdLyi2b4Pn3D3UMEYunjK9wiFZByn2hg54",
  "key12": "4sb5wXChQJe95QcbrSAa7yjng7RwkvFeKGM31gRJNyFeGAkBx4UunWuvReeumk6c5KAXZHr4fZM1BWXqEsjxv6p4",
  "key13": "5s1hpQUHFkXJXWCYQUdT5WFPDXTbFVjEme6Ld4gSSThDLDAzW9YQRUCXF8BCFC4kgLUzNcCgmMkruJzwETrneRMW",
  "key14": "38Y5irZdgZKxf2bNXVwvEryDoyaeF6BQTcwzEya4wNkVAqZ73LCR3X88GA4zQBoxHuFE5DvqNaACFFvRbzC4PKwB",
  "key15": "3hCUtashyVsVAYCcxFmV5PT7zibvtvDF8uhW34MiRLb7Sf214ZEjDRZsX7i1KPZngjFVzEsEhzW2hherpykkkL24",
  "key16": "5AzJQ28S4SzGhdrwJTkP4SJp7xfzJDPpvgu4PjNPVS6PQDkh3U8CtZeBGFbx8ZhW4rLfR1XWGiNBRN3v7hN3dGL9",
  "key17": "4i9VNup28UXhD7LB83DXsE8hFQ855nQaFuNQB6MBnPxaJtjuxVzP4dqnhVk8zHLzPEzrDbV47RpLa8yadTVZ1vo9",
  "key18": "5gEx8WTwX61AjxjTmm7yLtEEBwc55kjA7VqW7CVtwEN6NL4kcXzFVXgLGecJ5AUktTsPeo2EghSN8YAu6KUYA7Su",
  "key19": "21bPjiPMPRz3rTo61UDvqqSc6s3D1v8127RywNgNV3oNhqDkpJ6VnndxvZFPFFaDXXw6kvBuQ6fTqN1iiNnLpC9L",
  "key20": "3VNu5fjsRYTt5uAE4kjvSsTmB3Pgi8MDrVCxuPfGwk7fReo1o7V6CwycMyujiNxrkzKDhdPbAxaf3ReiWD4hCjUP",
  "key21": "4QMJisBtrNxvrSYAojfdssa3mseb1oh3K12xXQ2H5ahct6iSZckg56jBs8ZWSBd1YSVFStitnbSuYN7Rq1mn7yhx",
  "key22": "qoKd3NqbkmQpqdE7m4HWd19J8C65gfgWVsaY6v9ZqQXU3djhweDaS4cUvvRK7HApAH4xVhTHqSHurHL4UJrU7SE",
  "key23": "3XhsiXE3hFhUX3fMtP6vxEL2xf8wv1RHL79ty6GBAnvBqTp5peiZwKS7zWzG6ugH9iZSciv9vTKeFurAgRZgpAXf",
  "key24": "4Jer4SDVmLSPBiQhKHqKaZruvuvK6sf662tBiwdivfQki3S5XHqvAAX8VkAea1ZFE8XZnwgJxvwa9qqSSy7uLbh3",
  "key25": "xboxkRQVCsoHUfxbhQHyQvF6xEM6hb2yC9nruuqx9ynmfeEMy3nNxepfkmEF7KP3y86t5so8SvDabYWHLSf8iBd",
  "key26": "2nAM3USCGkd6p3ZRmG27yAmHUXUuBTwczHhRQUEZxUMyGFf19LsKVikJcvmDf5BZ4imwHkDBt41QAaoBQX3hkYn6",
  "key27": "qZhparVAt77BgDpayrzLeMVZxYi7PhR3Q7EPETazzuww7oTmvxYjCXQwa1sdmbRJsJ5Egeq7G8ji1PEmN64BY8x",
  "key28": "284WFfTww5DTpkgeUwC94j62Q1CyXtSLqKrYqsAbdoqdyXTiFmdbkYEpEnCNwtE5o49XHsvE1DnSxFcyAFTZXz5w",
  "key29": "4ULJxRjQwtnrSaGPYR3aqfgzY91vnTWjWGdbCWx4cQT45qt9QgmVRqTJwsuRLCQx9ekghxsYdnA61q1FguA2JoUa",
  "key30": "43xq8ZJgJZDULWERWYGB38DBjNBYgd3QfMBeZrey7rMwAhiUe914kzCA7kXPeeH8TweKgbvVsBAiTMK9iHFQteMh",
  "key31": "5NMSWKbWoDoV4exJzuVwZTkKcupx9RcjFPWNhUMqWPsjYfc8iAvEn3Yb9ZgkfzcBfAFTYvhycVeiU6KvqkzN2P7K",
  "key32": "3HF4YGH7u7L5JbYwyf1HeP7swk1TiCR17QrP9Y6siRUnskRKTJp2oUFvD4kAaKYHiYxaHJEySdXztE6LUjFCVg6o",
  "key33": "4N6UFZgwCEunhMeoZGzngtSxqLuAFuQev1vUuM1oFbnxyhuPbw8QfucFjZzsETkBNwHToXs1SpQGUVosP3vgEowh",
  "key34": "jvPRarjZ8LLgxsf9sBme8z94Zoig7kmDiNtdNqB49LMGfCtuQT9TV1Q5kWTtS3dN4WDP9YPYS8yF8iXtW4SWsf8",
  "key35": "4TGhYKjKQS3LkJe4TyWPmtBQv7YSv9WgKxwq2CeSJUW4JDVqG9D7KFeS7dgYPZsLRHfgLR4pXnYtwamX7grC57XT",
  "key36": "4My1WCFoh6u8QTasn6k3NjA5EQhryiYohpPYczBR1yRjGgzhaf4caxzyjYhi7HjGhkb1pxjejnDg4wQ8HtdDhc9Z",
  "key37": "3SdFKooGK8MBY5GxwZ3GMtQsN1k1mufCJKWaTubpTwWb3iFfsi5RCsrEr1SqDzUa1fM5RywYdrWtUvEapt4h88K6",
  "key38": "4myukPiS3by5z3HzQ6m5ACFo6GdV5CGKZ5zmEvEPH6fMyZ5eRFDPRBszUBxwut9QD9MVDApX1kcMAJnjUHottPY7",
  "key39": "28fRkTeq5FABiBFNzRpc8x47p5mWG8syQpX2shbdcj4bg42uqLR66enZBYQdb4XzF3B8z5HnwG43H2ei9yMTzdjN",
  "key40": "4AZp91AoUV3wf81mezebGgp4q9oX1XmhaeJbFGEAfZQ7SVrHMJCUuYWyzKZX72kZc65ybvZusKYbc4KjEe98D2fL",
  "key41": "3rFkXaVTe8mC4Amwp9THgMg6SPURPhBPfgFFPd79axK2FvBfxZqgBm3Ssf8quX6NsWx2hrMxTghLENDAUugHcsYX"
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
