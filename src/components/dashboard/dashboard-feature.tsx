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
    "vNeiu6qLDKjbFnWZNrxinKJ3EAk7SPm46Wv6wfdTDfH6PnZdNVgatWqfxjixfyg5j6R6YhGn4Eof9EMvYavyKhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35i7nyKfTSStsxCqpfi59F9dGwgS6PQMVvEQSLXrH2vj9v8CBtmABEqdf56umT35CEuYPbupvGRRxuG4FDU2gPum",
  "key1": "4SJ8WDZqz2hCNGXCHgeTNhugP8HqpLC4PfHuZSTpJWEebEwEZRrbASGaW3YdPkpa5mTH65KTo37fjKMyQNSwSEaA",
  "key2": "bYCsFks673wEfoqnZsuBLbZmZ61usyXEwLbhv2GWF847zUZSXeQzyQ7ejKnLKfTtJWUoTAU1FLovGpBe8MBV44Z",
  "key3": "3ZmKaNsrMLfnnX15hP9yfFT5i3D5zYq8mSmSfXNYudij3EdRbrL5utZ47fpLbcyNSYmaiSvtL9K8HkkT9SAkCUE2",
  "key4": "4AzUxw2uWsEwSv4aEh7CnUmkHhkjVy14C4BCJXPRtzyMe143wWSBN1uknv8HFktoBnKRum5hZcB74JKufQ5zopcn",
  "key5": "4NvnQx3ooH5EHN1zPArzmyPZR5tNM5EKz6fTEFYnDG3sRvULPTmmMPnRQmZbkM7SFsJWfLDHKrLhXd7m5XpanTQS",
  "key6": "4ZZgtGS1ckWuozAayZqYKkBTfhthDwEb3SET7z4i1NugTUyvxaYukPJM37tuLHaFj7dwmA9h4Qnh98t97ggaVTu",
  "key7": "5UBv5FTRQGx1VheCgjUEyjW8JiD8HNvij6DVikFCHAj9EFAeeJZrLtC8qPc3ri9cBkv5Nwz3hsLnG4xoSx6Bbkhe",
  "key8": "2G2agC3fZ8Ax7Xv6MLsGqx1nCyDiTCuLVKs9gZsKHaEZEhsv9tcpNc5r1ZZf1j6ZMUzvvw3p5xyETL4Qoet7t8LS",
  "key9": "31G1fyR5TquWwP8o9TxiaTKHg9nG7sDwvJuUTWbqwBS6KE9wZP35JsNtztN5LRUG4EmZBhZz8RzLe7ocX5Wum1Ws",
  "key10": "21PkWLjdFprfKqSeFv4kMTTgaDFj6S5KxVgf998LESJe4oKFibHXQPiPBiQ2BHAN3P6zdeWbHhm7BXX339wonSox",
  "key11": "5VkP412GTNaW6KrdhH45YDzWFQVnXtTgSE86gXmtUSAzfMC3q7aBPyRARDyJEvLCFaKvMJL9FfUXWGXLF8JX6vDs",
  "key12": "3SzviSxfkmiSxQp4Wuq4kEm74DKxPUpDiACxneFAar8udur1ek8b2NkfpZfbjtEp27xKfP9w7mXpQksmJfaxxH2c",
  "key13": "4UHLgZpDx5gM7GBVzPYZs5X95h5N4HESB69wBB25pYcbqUfgcVmQDLh9nJ8F45dL5Xyn3u3jAjgKfNccaJMpYkiR",
  "key14": "7nVCyM3wfdmyW3DVqSDVE9sjLNdsyhDY47NSodqUDy9hkqPcyghr3eEjM3WajLpQKXVUoWN8UJTnis97UHLYUUo",
  "key15": "2fM4egkKwDApo6ud5n7TE3BMi7kSPNeudagS51GxH6sk4B5hCFqGDCEHDdvCeBcU8kynXyTaZeni9huo8kKspyWs",
  "key16": "37Vhax2EGHoCw3PEiFWa5PyjaQVVvcR3aLA4eY7a15YDkxQPxALNE537WJ6zrZrNcngkY2naiPqG2HmYvpBXVwbX",
  "key17": "4W3vXo4EbPp1b3DmSdxtJAFCYME7pS8cWZRQnjnHjZ3m82mAgkDapv6sdFuA2TDuABcGHQipnCvRU2ZeRuoSSw1u",
  "key18": "3opDMnwhHx5QyXeQZkrMg4rG3v3D2DsD87BfvxU1tJDeoJqfJNGGRGRzgBDSS2WMeqKoLWdMeXbJR2QKEW5ZEwuw",
  "key19": "34kumydzxkUJJNXkWNxJRSkEbW2SuzTBrvk6xGV7QABzuAjaYJkEC8roUNm6NUZHCad8DWrP4GSKfpPhz5uQiYji",
  "key20": "5NEP1aUQagK7PLXeJU4pSQuXVM42EBHbWHWWz788fketebjgxW1mH8zvq7t15phfMKeWgGqPt93bNCiX4cM6SQmr",
  "key21": "3RN1wCZBin4qz1M7Gnh6u8hrJY5AEu1YtZkmWXnb67D6F6wwuHJSxsxfmo47oX2xEYwUKAzHe51VGyUQcPF3vaw8",
  "key22": "ShUP6C87iAAhoVwPY3fiXpFJEnyuW4Me3Rqo6u4eL8S4MpbjdQTNZguJJZQuScEnW4AYE92k5S96iu9KgYfeGFr",
  "key23": "4odbNrYJvaL1dfuZFcjgYqhWLY8GN7Mh78XMjXmten9MTH9nuePiBZz2bzxoTEunvb23TZTNbxvNobiHN4H286t4",
  "key24": "5WKae82XbFRgynPw7dXrVGZMQF1NqEMzYUq9sEKypjUsRPTQ21RWVjWSREZWdtQ1pfjrkw7pYr5Bj1i6WwBrsPvX",
  "key25": "5KM5XTxxY1CNn3KBpyHcY6cY55AuZV9oFNchExX6tDrDrEzdgPeJLoDDeMEwzGHAasCryDFowdjyAX6AR2Y91Gqw",
  "key26": "3pHKbq2UeyZiSGh3MTmneG1Z28iYScLhZbBZgBsiDk454GKFEo5n6EJggm2iR6Fi8nV7dZbPkWJjqeupEZdUdgyD",
  "key27": "9NYFpyXUazCE2c7mx7VJ3TWbzmNGN4Q3V2dm5vATJ4NphErkRCQYaJYMmpZXpn8c5q7uLv2iP5EHtYeHASnPVxh",
  "key28": "pCfJZQ3cRQGGndJPJ6w1w8VbNjpUMtLj35Yuw4mdXK9E7qUypzG6t8VhWRQ5EZj1XKhkLVZo3G5wQ3fxMzfZQ2p",
  "key29": "6UcoH4vw6mDGrmobWG8LvybgyEJdYFFrtueBfzENG7QFj4qK4Rp67xqu9bpfzr4uen6jMN8cVVZyqtbhJVqepv1",
  "key30": "3949WPDXA51jkN1kLCLPfqAJK6o3JVTyaKM2dPSoDPdnDzUhR4FH7y22tv8b9FpgVqCRfaesrnGS9ASp42xH6X7w",
  "key31": "59e55ugaEYUYxJfsLFgmSZtYJdsSKFBBYfLEwS4XaLFd1M5pKYKV8jqpqBs2AdUcEM8h1GbMBT1JCMjPMvaYxdwY",
  "key32": "2CbygGpKAnwoq9bn3FWBSr7MWCsSptKnktU7Dv8tTkCKSDqK7GPYDSkeuUAVUJcLFwXME4nsh2DCVbvGEJCPZdP6",
  "key33": "2s9D3u3znRmZRRouAUbQJD6VUS8verNq4RfhHfGWsBUm8g2rkZvZkW8ANYiCzZwoKrxeS5K9PSLMYaxPJwBvww7o",
  "key34": "5FzRs5Gp5hQzMW8goeTbHspCctz1JzXZdMmyduPqgckJJurwu5LLn822UytH99NjgCKqEtKQBBEpyCSWiBkdJ8Zp",
  "key35": "3nJPCk7RPaC6i83Tfb9A8ximzt4XH5194Dm4Dxieu1rvRyUr1HJs7f2YvsVeBj88HqdEoN23yPMyuAJcxNJvbZUX",
  "key36": "2cLUufyJh1pqEQ8i5e1ND5cyru5KsmV2S6AMYUgZMa5jtNYtpHsPq3waHrhwN2VTQ6t8iS9QRjssrToYs8mHW7T7"
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
