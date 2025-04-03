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
    "3o7DMi2JmszhuxP5Tuq19h6w25ERpW7Lipue53cXFgefv9q4EDa5hDgsTB4rSUMgfwvsAnUhaKkvyVHVg7MHuKkf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5b1v289G5KcvxcovZnzMBx7qF9shg3wsxca6JBb9AvXca1BcRYcSf8SjYnhUpTYKPCvYnGVMoTTDT2Bi32vafKxe",
  "key1": "2wT3PGB8oLdr6KCQvn3qciS3XzeAbUvJvaGj4u2a4Pb2kXsgurgXk3QqQ46VDWYHDdQcJtqicRG1McVgss2mRXnA",
  "key2": "5oc5ucKAJLizBHWRwH143GWkuVonmzRKEKRiMLiCWxkkzT788VAAPnJztSBNi8WSfUAZtGJrxbdZ3osZEepRpaaJ",
  "key3": "e3qNF1EPWSXy56E2SAdQs3w4ZV2uucQ87rhshS7amQ1NnF7c4FnPwiTH4hoJowVEgTs4mMDLfASE96QbgqXtGEd",
  "key4": "2zPspjVqeQQoqHn6fKf5wbbJ2xDqRaD4xthLwFm7spdqa3YGSAYrU5SmPJdvw29nsx4q5KZn9mL9S7MkDwFuNLBi",
  "key5": "2eiMAwyVCeBwxwmU14uSttxywcjVAjWwQM1Mad51Z8GfZKcLYHwytRQaQrCov7VsJiTVzcTeTUZBFxPSmrXaFC39",
  "key6": "55YE1DceJ3QQzH8ZYwKe2wpw9mxXT8knCPTCxfXAarJeAuGaGUkajaiTngGaRirPetG1uRv5zvxyug4sr3h512ba",
  "key7": "4n3DPWR76iHbpewQujJ1cdKZxGvrKh9JP6NfCWKgd6vZ6YNk9yPFLkDgt77or7fkjGgk1JfUA7VicawAUxi4zsju",
  "key8": "4cDxAaqEjYiYWgHLmg3cZrtYUe2wUaZbB2b1HWReMK6y4BsaTexNxNnWiPv9MaJKdgDpHss9AQobqCfiHMKKMMso",
  "key9": "5Znh4Jy2aZBbdCTo6LaiMFExRaUFttig9xgRj6cp2dsVQAyvSgWRKMCWSRsErwAD2nWv1d7kirygY8GQgTE8Tc2u",
  "key10": "3Dv64rPyyqkv9wzYkCByq5UtYPJrZvY4nARKcn74gEsmL5HGsk1Anr6D9V93WczZBjMDULBxHghnHiDTrJRwXTSs",
  "key11": "2UuEqHcXgrNcS1opwNDTgi9DKu8GwZacBH8xLgVsH21MZzPAQEgRvMNpxyBwdy3UeEejFLtbprrVQM5eXMgKhwKh",
  "key12": "2ZabHyVEuC3GNWPKzqP9VipZzhj6AinfYstLwB2h68HWkKAE4c87otfvQbDDvRNzdV5YmsQzFVTMAwydPueQuYSx",
  "key13": "3qpiEuGYHR3FPZjtWnkekYgK4ppUizj5ED9Q14D4XKQo2KdgA7Z6syFkq8U5xDgh8P3ajJd6HBnSi7YKuHUCjZM5",
  "key14": "W5AB3fUL4WWP59z8QpcrQEipvfJnCT2mgMJXYmPkNF99GJ2NtaRRXQvPraFghoa6ZHdkU6WdcLDwMgYjeJgXHkd",
  "key15": "fQGn9jpqtBVCWwLydN7upBsM9fihd1P2ZfwiXxjFwa65zfGPYACuCD4aNrMpVMcYxFWmGUQWNd4i8iK6fvRQ8tj",
  "key16": "3rPLfW1oGbDN3oYMo2oaVocmPJPDoY6eSNRwjZhp3u5TXC21taPpdhHtPP34dvmHJmBQnbfw1sUodFNkV6gSW7v6",
  "key17": "3J8hxsNFhGY83NBB641xFTzqjmo2BR66AwKMXSFtLxNYWFFn2aDWiVEp8xGThaiZnR33QgP4Hiiv33HA3Cwybnks",
  "key18": "3eaYU9jUJur9A3WDodE3abMKFZRuPjCq9FG9n7WBHd9w1FPN68UaWwozdPRXeuFsvEAiepW9pQGZPgvMWT6sH3sF",
  "key19": "3F7LSVnPqPmwatdzRh27fcLgRWdhnHtndZxHRaYzDaxaPHCuCkXYdccSRGZjwN3VN2bx1TUnFhxxzR15bgq1vCrQ",
  "key20": "2N9cFak3u8UGim238qqE7bRMWZmVfPh1Jo2ZZqFDSZh36AZZ1wkMvb9PwW3XHZXkxwfLfYyT2TPBbCjE5tGX3tKN",
  "key21": "42ZYpV3YFgzgqTvrYfmsQ3Z6fHwQmgWTfuHsvcdrnW4vCbBjm6pqVEWReFay2eZbdX36k7zjBfQWjKNppCc6dHpA",
  "key22": "3FTw49CgnTbJ1ynjRZkEB7jQuJcYnECSvwUEXagu4Xxb6AdprqzLZzQb4E64qrWGEToYSkUTVpmpq5wCcRiPPn11",
  "key23": "2a79EwTCYjoh97FLWPuAqdvdbDw6RdsSeCc8SQJi5E7jysM25Wn9AzyFoudPRQHnLQDRtPKnFTkf3Qf34kgpSWmk",
  "key24": "4bvqxgkaPoFnQuV9WrACnsPjVLQe2rPUu4qUpHWfbCzZJQjSzbGrvn93US28U9iAAgUEVpe3pySDKip3yqHcaMWQ",
  "key25": "3TVRxywX7ZCgoMfn9aZWzeSbhdrPPos3xvB9FAPSj9C8KYGfX7rUVTAK62ZHxcoYfw4aw2U6vUbU9YgoevK7jjJj",
  "key26": "2ALUtcoQwhSfDJkYcw8nChi4MAvQf4nexNcnmKHSMQLnKcaR7D6yXPP5ytmWjfc6s98dUjYTBk8JLKuJCtnu5VHX",
  "key27": "3BftyDRRfxjY5DRYjsVAKwxdWE1nJN1WgFvNGEe5bbALrxu7sPz9eNBoPQbSXTQG3R2e2mKj5betDZfNCGmKBCZ8",
  "key28": "4ZEoQsH7uw3xyL77pVx6Gc7EfX7B88FBW5kwghb1RXQhtH6W6QxZBfT25rNXgmMzNxrd1sxG2HdZsU2BT4QUTfpX",
  "key29": "3yyeWyM7ESx38KwbbB43QHcQ8oVWrd9WVx5wkFGtH4etQmhD2B8f6WQwy9R7nCangyYFLU3VEi7ZwAghZX9zV5CZ",
  "key30": "5kH1o2kZQGteiy4sgtB1kvHnQKeRdtcoVCAiu3phxofCkue8ZPkMB49rxmRw5VyNNH5mxH3ThDTDLnnxrigNryu9",
  "key31": "5RWHjV3DhkfxG5zA6VadGpkdaNhKqeuXf838GHjHcLKNyzCpaGhkX3dREqMufMr2jhJM17BUJYRNz25LNDLAdzfi",
  "key32": "hD1kSVeNgyJP9r2vdRDyg1AjUHdBWzqKJUdcpipsUQpsGDhZE3C5BWF1rncAMvVCZjcctjwt6qH39BUwSp4752m",
  "key33": "3mX6qXQuMrkQXZyLBSrhmTqhz3bBYjC5pZeSpQksxtZK6RZMLPRXL7djYuRNBkd5oRcsJ4r9wB5x2tr5fKbZ2565",
  "key34": "5he3Apc2RRaHUwYnaARtvTsN7kmzqE6j2cAXvMJZqBujFLZVo5y3irMHFnaKWGjq9EWnbZ46P8HBTanJKAQpfU8n",
  "key35": "24aSznoEbVhK8MiDbgQT84Jfa6f4B8CkSePwSDvyF3z35zreiSqVMfpHKLgmSnD1nZVN5KDxFQb4X459XHRAVker",
  "key36": "5psYuK6irACox7Hiq8Smt5CKUp489SaraT3HJTLfNZSZJu54oURBooodJnvET7RiwL8RH5QfigDcSGV37kBirwvv",
  "key37": "3btjUbXWQQxYWRUq7MQBMocEMjUieddbes52Ha6egFyVAFT7kZo15LHt5evG8YPKHH99rZnyEJLQxDN58KgaRFXE",
  "key38": "QkadkDN7QN62VWdkFdFGZjNVkmwc5eAqCZnngtHHmMaV2pJvFAtQj4Z4yfzYi3p33krKgpnKNPgVtDJ9gXhyCwf",
  "key39": "5hhUKNYFCYxBwQKsJYoovacGtCZQamnE9HE8mDEbninCJRFRWrnPAW4UBKs3Ve3UEthFf5YuMUWY4QY56CBeZUUL",
  "key40": "4G2BKXdQbycSDVyTRNUdTyUgD9MNZNZeoAK7pwtWkxqNVE2pKWQGaKjdWRu6noDKRT66GtmrRKZc79a11G5RvGYf",
  "key41": "3C8pwU8yi7ha9s5Uti1bVrV1feY8f2AaPmNBTNMgXqkquBQtXyxKkhJ2aGC8WKnArjNvDF6qL38m42YpHVEY3ELj",
  "key42": "56gGGnGQpnmNmr5mJ9wxULyEwc5BVp5NjKciXvDioNBE7hLxErBVCYSUdprDX6HGNPiAhhN4kh2CdwuxLKVphw6h",
  "key43": "cfH4vLKB2p9iHzNcY6sJHui86q6ZBEQ3zd1XPQodaUpFSkBqVecrocYQwjfXFvnAxQVJNisLuPjFXjn5WgtqAP8",
  "key44": "4ZCvhXcACTKCevsCn3PuKJ3CrLpGN29zAYoPV8g38U4Q6LK3Gzz1Ud4SEfGeAJyaUEvCBVfRKbc62if9joJu26xE",
  "key45": "5aHefdAiRcT69Y7xTw3cCqDrXnwWGeud9VVVULBsBACm6LUduoPtTvgtJwuef2CkcdH22V3LdpXEQV9rmceSabA3",
  "key46": "3GhdMRMfKxuXXW5k9Dbdui7XfX1DeCGXyr6HziJvMygvQkLgwt62fevaLyS7vtpCmzdb29bGUQH8QgCN9bEAbvHv"
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
