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
    "22ZycJjAS2D4F1ud5ZHEwczUFe3xqfWGLsnKWuQuTBmY6SukoYCXwpiNbVwkqT1SnhtTa4Vo3Vs8JUFUtamKkNr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Czq3Xkf5VXjvA8ruvjPMUPVcRc7ciQwyUKm2A3kQLFi4YKNS8DwHtsmXmTqihdjSguPpwmyCynU3QEvPN18qYd8",
  "key1": "65YKNYQkHBgkp5hGYrRXw4zwEVCCoh2wVc6jxrPSqGQuR8hZcWN86GFvUwBRsk9mXuv6JGbr7QgWZ2ws3CqjzY1p",
  "key2": "5NKARU91gc38UPEQ34t8868ygwdBvJF9Qg1Hc317ywb7DD7eA4Tx1xKz3HHySKWe5MiFX57jy2dD3pTHvE5LEGs9",
  "key3": "5FCBZ2UTk4i8m2yYsG5vqnXP2emqwtVFssLdxG8MQBopEAuCXuNLcfDB4nWSL9VLg8nr8hxBMdM3dPynB43x9RDW",
  "key4": "65gKrQqubH6oX8AxetmzMv8GsEL7HUfRx2kGV98mdPhnW4YZEGNQtdvAjyTS9utyQqnKXBiT5W8Lf9XUXDVuPS4d",
  "key5": "5mLZNvVo4hhcXNZ1LMF5EwSzrrZwCCC4aYewhE68ETuuhbkdEjiHonkFfZAtP7ycMSoffKEUjFNTDnUMuCC4vzw3",
  "key6": "dWzcHj84RaNmmVBk6caY22mZGRyRV7obKUNVyqFJns7CeyF5EoBTiHh9nRD697rvnyCs5o1Gz5pphJduQiYe4kD",
  "key7": "2WUFS7P7mrSSS3CX7v3CRKKMLg3jvLx7ZPE4JDSMHLaLbxp2zh4kD4huyDNKwYAYVUBrDM151pReermYTqiXuZPS",
  "key8": "24uwJEBB9hwRjhADCLWDWT6YEdz6jpLDSP2sA8YozMUcdQbBTSH3bs6A2vRyu3BxHxvoWetG5s1zJgXD5Aeitw5h",
  "key9": "5sNbAmUa2s9XZMnUVNSW6gUY5TxqQ1hYqagZ9KdaWqiJkG2dHepoTr9XUyZkX8wPSGgoGRxWGFuDbMDJa1nTSQWU",
  "key10": "2b5HWG7VRnkb5wdNi2F2T4wDw4TRtR2WiczPBnrkFBugAvvmEodtyYYhuAg2GSLduDuhccXRdqnQkTVVgV5jVKPb",
  "key11": "4qJY7rVnMHZaHwTWbNoqum1QpxXkoKotUQ5onhiQZaLLRPheXp3Vg3d8xqh3Ceoufky4jwuwK5Ni6e8L3XHWSMeC",
  "key12": "5pS8uxLQb2oyZNYzHrm62GWdxshkv3euerg3g5W2VEX71Wbxm8ywPmY7HeAHztbgYrGrsAXEQc9JgPtCkmSNXVcb",
  "key13": "5smfXXmqWkyov4AiVjKt3trWXS72N4oFhGoz7zCzVDU3tUuaoBBfhUPjLfk231YPe7CdtVn5rpZ3WsXU8Hiygfdk",
  "key14": "5a9ZmJovwe3vniV6swErtCydADq1eG7t5ihdpd1tPLgri1YYiXU6tXJhvytPzrmpamWEDRLV2H9jHs9UQQqBoUCh",
  "key15": "2u26gq4ob7G3xZMVV8SyPoknGSe1evw2uv9MJXQeHpf3tE6QQEHxM9o194W5i2KHuaDXHnU2Kqi59dMCcJ9mzpmH",
  "key16": "4f5TWqZeE6SNEy8zifp71UgRuybVt5hvmvZ8ALagKPhA4XcGuPhV7n33UvGJN5dNKDoSB6587AVWy92ZVCaXkmjp",
  "key17": "5tPmfBR8WvSDfG3mhuWiwZM6yuoSf83FhCoMdLYG8jDhYent62RHj9zsSsBLiMxEjFNb3rD899r2UCmb9N54TYaQ",
  "key18": "63qbDqvVjfQAxmg8qTNXWiMgbkhgVpmWfrU8V85iPEtTjbCwMFRq7axuyJboyRjcMboRFgXUyHPpyNwPAuDSEXf7",
  "key19": "3L2JvHZQHPdnnmGd753Hg6Ju8uuGGNfVhJh5szCG1y4Vx6aRyD6VbP25TCczz3NLGiQPyM2pezrJT1oGP9ZowjGF",
  "key20": "49HPcNxDxeV9pnJTjhTCskrbCjZJ6GdXdhfkatDQSvuA88B8YY4vmmseE8NELbqNjHRktVqYQ9HjLmtdZ3HNbU7j",
  "key21": "2X7NDQMoVZ7ZGqzw1didi8DNthZqTG1a47TtPTQn2Chmck47TnMqkvA1WtGQE99USnuF3bYqMDpNRaGZ8dy2iTsT",
  "key22": "5J2n5UkWX5emo7R2cZEgFzg78omu9xAP8o3CjFhiwbkcdnWHWASiHXiEb1FxBPLfqggsATS2gF2jjnJbsb6rLaB1",
  "key23": "H4ormnRtKcbicFubfpFfBqgAZnZEBpq486kx78QDBkN2A24h1xTF8jvESe133mJuMT7PbVVWdDFhMizzTYeQN9J",
  "key24": "3cGKCG7nXm4cJzRKYWVq9BQ5zEdGTeFskXgMNPPZNCQKtHY4oFotpQmjr3xAiGV4JaDjZxBrsMiUbnCmWeaC65ZQ",
  "key25": "2V3B8kQNykTpqn5vnB961QJqd1btpEtyAcQ8YQh9U4VzqsHBKWfvGE18QRoxxtt6DZfakBH96dYLj8LSDhSYchuG",
  "key26": "5yUo97izVb7rZTL8N1ekgGW5YV98Z5UVpcrEwLesqKAmbuDAhYq2NuEivYi2UpSwhyFCYQJKFWvjm7m5Fk9sPkS6",
  "key27": "4y8yiTABqjPvBMXQ38YoNN5KQnPaQZkzt91hyChw7kcZDEZCFDbgg8nDJVTQzS63U4chpC1Gx27tkJtxqXx5E2AP",
  "key28": "3WpXDsmPMB2sgNgELeJ5FcsgcdnrGFUC99HFApaMtTnJGMNy5oNjo8w5c1CLZC5AMmwfdRCBHubB9XUZQPqzi7cH",
  "key29": "2gWJXy9oCoqnxji4gsh8pTa4XmT48AT6QrukxfdvkSf3sKV7UwtNL7S5GBm5kPPZF8SWpkXXCW6mC8owxmhbz2Jp",
  "key30": "2njjNtVynaLf2hqhfDyoQiPrTNwiW8aFxfwRHo8Ju7ERkZTRQfcUeuqB1S7LbZcmxXVU8DWdJnn7o9eAond9inDS",
  "key31": "2px2noexBnc9ePf9oasgAjScy6L3qgaYmfCjP6BFwQTpPBgPbMMbeTJTMB8eLZRoATGUpuy83T8Mi75n9zaN3MxW",
  "key32": "23XcQsKdS1qcTknioEGFNdn9Bc5tRfUjuxJWVpbk3168us2muvL7fL5HbzyM5e5d9iHRjU7nLqLfMpDW4tVVhrHQ",
  "key33": "3UPR2wX2ArfS3NDJTddtFFYJXHJHBYmYM7Z9ZXcMZqXJPX7EnEzGZJqmfpg8vZXiSw8e6Pf4A7GCyvsugTjdejyy",
  "key34": "4ojhYzjj2fEBo6sb21k6MzSRjZicgHnQHwNZVL6YKa5vvDQsS2LhxduSFp11qfdATCLRFtXJTyy4B2qQLdgFRZMH",
  "key35": "5G223vDNNyWjJLBguNL12wttfXnbneykeVoTdTESPpsrMvuwXwJm8u4eYvDQxv725FocTtyXccmwanb42vWPk8oX",
  "key36": "25uGA5ANZgwuosVX4K37sR5TLgD9Gk8Y9AuZHwptGSDd3mXmyink4QvkGdHiC2WXM4woJEs5x5quX991jjrk1qD4"
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
