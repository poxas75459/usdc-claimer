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
    "3JsC2CGQi8Nzctz8QDsysJf7evHee6aEup6cWiJsj9ZhYRT1qexsFND2tRUgzzkd6PfvKzmYnsoByqSy1dVCYojD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uE2sUWKD7moNKtWrbboNhQTSzudWMjS2P15veyGKbDWWWTbb3i1Hhy6ANiM9MHqLjkdzU9oQVahKTTN5LEUcW7Z",
  "key1": "2QzfmWv7trTCDbwbB1ouexjaWcTcsUqaWFTUftSFESQvC3bfNMwKtwCAm5n6QXnd9FUTw6eQ2n946R67boDt73d8",
  "key2": "5uuH28Hc1QJTt6Fg4SpfChVg8qq3nQXvghwuWmJ9BgTMGs8VgEBvrUe1VYAzugiqW44R7SjeToEhb4id3MbSCtY3",
  "key3": "2RojrPMpu9yU232YLJsbgSGS7Rsg9jaMmkTXVGgEGTDC5XymwZECU6ViJHahCFUcWfMBGN61cNAaxtA2bSv21oG",
  "key4": "WAdnoYCPZCkMctfcyiSVgZKFuvQ2tZALA3mZydM5QAo8AgQ9SEA2qEh5nNXhZ46obCG6RCuFZ7koS5QoL3M58fa",
  "key5": "51Bfr7qaWRC1azp2ipS36muphByrC84eaPAwbbKkw2XQF8kTZYzMJQaxgfXeM6ybsHspsu6shkQo2PX6DqzeSSFt",
  "key6": "3GBju8RhUW2Yjj18Bir9oK6aD2Pa3XjXpaUnVjqUVcFfr6eZiRFWxHymZgey75z4FcztfW13TbUHT56bsuC42UL2",
  "key7": "36ewFj76Y7DLWLJ2NdbFFSEs7dQbjASFGQqqnfswMMW1rHooFkVxpXqC3cbvfwnjL5vTeedygDYx3cFADBRz8YPC",
  "key8": "2sjzUPoViMdKK7b7F1cG12BErr1uotEKbisUBNaXxN4aqwYXPuGMhiCR7zK6LXw16hspqda8FhzrttjnCoAE7YRs",
  "key9": "2ZyjGT9Xs1aMi87Wa8uhJuMFgiyaxd8CgjYJk8MK8R2F2RfWJcZZfhpmak6qRKzk7vRra66KGRPdiD9AwvYAooWG",
  "key10": "39z67oDFmqLvragtRfRDZxm8rFtfJBpk4bfjksn19yZY1uF7mXTrJKhUYHR56XmcEekam2mXZHo3bxSwKYog4Wvn",
  "key11": "2ZpyU1TJS42CeJgRCBsqv8h7TH9irNdQSyAQwN843N75tBCZjTCaw8mYHc6UFZzHHbse1oLSHuFpeVjoA3JtZUxk",
  "key12": "3jHuzFqrVW7HKXMpe4GZuPBgWbLkcozaj2goC23S1xdr2vwuBLdm6udgPt8XBvK7TEen5RLQHqVtrkuYKvU4uFqZ",
  "key13": "26VxuATWm6DXY6r7Z7u3s4L8F2ByVLAT3y4g5ZWwcdJWhBk1nwwUgcugo4mwBG5XiLLFvA8EWsjU7CfJJvSzR2EQ",
  "key14": "aWa9KB6hVqixCRy78BGMFRW64NFtfYkjP4zR85nwManFeshiihD5acRdvev3pLg7RqkCnigvb7B1WkpN1oH6JYC",
  "key15": "HgFzyLPjCw64t22wHrfeZrJZAmEJZQyMEfKQ84PbAyt4JfnoWrnCkTes21sH4oCvyA3EpzehmgPKpMJQPEnFfQ7",
  "key16": "3dX7oSJUkexTeLcRScdkt6ZyJkXjzrKShfpAHEby16Baeav59MQWVn4zUKLqTJTEdJJ1NiF8j2QFsSZRP4wWx175",
  "key17": "59ma9eS7ERWcfsRBTi8QrfuEJFD5Zd8hZrQnb3D3QDVthZujpHZLG773UZBCu7aWwHpTXaxFveh17nhBYFkBirmq",
  "key18": "HrGhvSZZ8abPQZVska8eExWAq2QGu6JLw5C4sS8sJm257H2gAi53g43Yc4MD1GrSv99dZc5metZkT8KPxm51U7S",
  "key19": "5HSUULjs6oxuP4JZqDLqUArSaT1ATLMtr4KskYEkBe3TNihV9N4pVaopsj3nbtmNSrov5XX3AwsxYGMVpGeC9zoY",
  "key20": "5rSeRH7yJTovsx6vevczcE45Spz5vgEfb5XzhtZGkFsMoc1dWWk7jpX3Zm36yYonP6uwBD3sdfeTqC2XTL5yfvNj",
  "key21": "4H7DQRL7n2mKBRa42Be6bG3s51RkArbAmcfYB2B6kz4u5YWiZzbZwukBmZSEGREyygSz64t9seX54K8occu7xBXv",
  "key22": "46VcaCATbPxKzsTozvLWuBARTfdaPD5qMk4oZvCSUAL5Y6vfqjYPSVB9zw87F8LxBcinMPUv9k975NcdvgE21e2",
  "key23": "MXSHAE4AJohqRRJmMme7rYHQHAkS5riy4qQzd66dBXUFoZiePrhaux8ZWHB1vQKz9aL5geE3wsqPHsdFuzxExVB",
  "key24": "2i2KXh96dLxccrW6Gww9fLFDg5kArncHoKqm55bENMS5AXvse3vQmQXJjSPuyZpJ1BS74xQ4d69PL1y8z24E8gZV",
  "key25": "44XrEPCXMqwzoifj78AMtLHd2PiX3PvoQGkZninAA7ptVEt5qCuPNR5pgYAYgo1J8WbWLBQCM5jdQCbmZFbVgHGs",
  "key26": "27iYa81KcbPcgebEcyPiHg8xYV6mxGrTiRousaPz2L4JnSTHZxbFWDNFqJoWnEJir2xxqQm4JZkfCgdRJtLD7qsD",
  "key27": "CP4AZZapNNjcuicSFmJyq9UuC7Egym9ArfyuPvLLA2iqjRn3Lon1Qc7CrA86QkC9r9u92TqXFrZdxbLHegqibNu",
  "key28": "4mpJd2gdab8ZA2UpHBL1zwc1ntYumam798bsuXi4VKYXq83LH9tZ9Jmot7YUTDhUPpArvCe1RdZjYnjnBo3B9mtr",
  "key29": "4BYFH5SHvbfnwzPHkZHXgpBxr4ZAe47KrET3t1PdfrAMQPS4bzdzZc3fTDX3ouQyYtjKjqbvTpLXEbd7cNKitoEM",
  "key30": "4yuwUyHYhAuLyJ1Gi7UdB8o2LnRbf7aFJSoERitJEbJi46shstwspSe8nt9izd1vY9yxkhFmMcjBfwPJCwvx5bvy",
  "key31": "pr8jjZ2AB2aYP5JFnn3tm1NqTZneCL47C9ntwRg54nej1L1Nk4svq6xf2svBZVhbH4ZWx6B8T5r8xWZKgtAt4sL",
  "key32": "5fp3coHGBNobTJapMxb23VnjrYF2m3Km7F3o5Q46wMAX8hW5FFnVmAPuGF76X1m2xuG7wbJwmXJEYxcyy37UV7Ax",
  "key33": "5L2iDrfCcagTmsnavHeUtMQkqk7swvWp5ZqBTFJvTTKMBe7PK4wkM8oCQLDWU3PaodY3vLh2QDumzafi9venZvSw",
  "key34": "2FCrWAso4yzrjjksBo6CxxrJZUFGM1QJNdpiDFYuhNcyN3mnpLmtV5613YKrz5QFZ7m7g2ugEZ2FAWDycDi3cP3i",
  "key35": "4zqTXLJFZYW2dfzdeqjPnCgDj41chNnRtU25ngnuCbB9aGRMYrNpygsCbd3dbdPvPSY9fFxo8HnkU4PrVfzmYU8y",
  "key36": "3djhyVFJWymtgrZ135UsziQ1k7t7WgzrwgahY3w11ttMn8LcHMLDak5yooHcKLVTZ2DSe8mNJzU9emJ8FwpYyxQG"
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
