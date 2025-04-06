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
    "2WFRKdiwj4Q9f4hQY3EEn9soFLD1HrNtwBXJcHc5sf7KwRXDZijwB2js2jJjADCPgnT5sEQbhfTTbBooVtn9YQZC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "U9twUoEgX3jCFnt3na7PaNNTpvPVGi6r9oKAhj8DYQUtMJKSyD5UEqna8sZF6X8JR9NmNNkZPoVCBJM9WgdAujR",
  "key1": "2oEj3RSibwAihyEDHkDQj1PANFrqet4xtwtxJGw1nj1WD87gkXQREtWYtCxpGbkZvYDJaV8FVP4WPgg2H4KJDwUb",
  "key2": "4p7sqEbQicwN2eo4kyynxsrTTCcVx3cRMMwVf6rQtahzFgcEVVrvvB82j9WgiicCNkvKLpZkmckbRgdXWKKy9MUT",
  "key3": "MCsVaPh1TnfqyaCnSyLFobSuRwUxYKTXA4QQ7D7g7onFM4eyRVSQ8Rm9Xx4W1BJhUQ6v1D1eUtYs8AJjYnxMqDs",
  "key4": "3QsKfDwB1hu4oLqdF8vu352H8zYNxHtzbz8wQVfCiN7MhBmNHx2Rq3jg3Fd8m2MqvkdwPoqePZD26qBFgrhgYXXa",
  "key5": "2HDk9eDMCKGuc5LJxqHMNuXGShGBbdCtWk4vjfXmA4aRh521rXLMCqhpA9U19DQruRQ7jFygwkpBqNxiwHpJAR4R",
  "key6": "59hvejssRaXirSoYMZr6CgXAPZHbkGrcMKSUqRExpxWQCb3zRJzKZz8k3LGtduLS2L7r3aP1Fy2qf1QUteC22WF9",
  "key7": "uk1jjJdrD4MUqwbXer6qX87xgEYiEDMMZDCfFxjL7gGF6rUq2ERE2wAZ8FDavWQ1vRTLamc17x6NjHeez5WxWQz",
  "key8": "2j4nYLbvAjSpJxD2WFZJNGWLh6eknyQSCyEUVfH54twPS33cW2hxowDWZoPLnMxNGzB7bhoT7Q6CEnpmk9ZA5dmm",
  "key9": "29mAdyMgarSBLrpCSsGsJKxKwHiSmgvgtcp83Hy3DtEXw4B7FFtSCe6zBkvq9VJzbXRaFzPRqM4pxiRW1FK7mC2b",
  "key10": "2CX9gJFN3jc6vh1xjVEejJv8eT9utG99J6J7XY8Ur1pJi2gHvTHx8ZWMreHmLimpRhGFb3TNCwVzcSPXQK9AhXcD",
  "key11": "5yhagftFwRFV22xkohppUjVrURL8fMcbN4WTkEGgHyo4ELbuaxw4audd11Gg35qMFTb3Z1byTKxQNDe4rVgHsZs1",
  "key12": "4dUBgxNthjVxLKH9PKBDR6mpwqhy9RDARPezggKKUtuVaz75efBkwzc4FkhNVQFM4BMvT5cazsTsWFhp2qCcnpv4",
  "key13": "UVG7bdvzXuCGCL5XmNSYKy6r4G1K7UCvN1KwFFuEH9r7Ni7X3MjqftEotwXPssNqS8UBXTD3RWKV7ms4DUnUeTB",
  "key14": "5hEzztGzeNJNkXthzDz6CaqVdfkQNiS7QKDfoPfURmZ1vAfuJUBcCX9RFXp8St1PpF9yPYww7UedHpcfymYW1qB",
  "key15": "GbfgcVyzMUNmsWMuN93hq7GhsmaNMAV2z2yerj3NMgty3wTkgix6PXjbwPXTPYwcbtZkQn4MCVbhcNSsPYyf1md",
  "key16": "4tH5gAs3f2thLmtFBY79xbEzWjf4Q7ne9TbQ4WrJtQzjWiu2XP8iAWmpciDEAmc2MMWmfvSvw28dnRjRkcUsLymP",
  "key17": "A9b1pacicikq2kDKEiPcMwYtGUvkaj86UCXBa7PgoEb3whRdqDVS3nzQ5KRtsTnYBMUa2UQnD8ZeJUDsGwVyFpL",
  "key18": "2FxbwXbq643Y8ozMfcNTRsZ1KyEHSpXSBXQkwK2mad6cwoYAAiZ96GhW3didrcYCLo3mZRYwMYcJ3v9tLhS4qoSQ",
  "key19": "2CsGLjAyimiQGhs66piuiMPoUF5SuWefmk7V2sTzKoszhDeFHt9WigB8BjtMpJYbvr3HzPHyZC5qSjBwcSuWPKiT",
  "key20": "4yqM4z6Ey9dHW23ik3oDu4xeu51Q2fUWW3M9qBBTsey7CQBUH9XQbZAn1TALKSu7nKdZvm8geNaMKotqM4YTJntA",
  "key21": "3AoCjsGqSxXrVVo16LZNnmbtx1FSPGVwRxxYtSXkhXh7vcTtf73QeejRKUNsHG3XSDZDXmJz3LLszoFNQqT7weF",
  "key22": "2AcLnx68fgYrdcpHTxb2reAPHWxrQ4YWT4RLfQmEDb2x9ztUWp9kQM4U2kFkEyrvmoxKsyWa5Pjp366YtotTVQJm",
  "key23": "5v7igeZTCGmR3mrswkxfod8LKgjnFfFUxzqLXTdhDCZ6Nnfa4FaVQaHHjXUfTwcLTQdp3cihax5SkkWDXBcvrsp3",
  "key24": "5w8nLjoeVto4HeecgmV3LR1dDqC5YEdeFS6h61k9aDqySyHhG9jneJhDJCeigmqSWbRcSzCKeVmGbKGUgSyhbAaw",
  "key25": "BjbiiAfGy1DsrB7XLcVh13BAzPZNzYNZqoB1nNRqALBoYVZXpxZLYyxbAQsPJDeNeKZkb1zwgqnd86JpPeu8mv8",
  "key26": "3sMq9LNrRsSWrPRLKwbpzQAUQzTjJJWMXCg1pSJAEQxXMMarwCVETL3BuQQDcbDANLJ99qjHBToRqm725M9RLPf5",
  "key27": "5BWrx8f6GEsXH5GVgue8ANVoXbQkpGKBygVVMTvZQtFm7yhCVN5sSVHpJLiawzqv253ncdX8wrjvhSUevghiP6ob",
  "key28": "4ZcMtLGhumDPh3mktgdmMwj4V8yNAUHYsVWoi7WNw61XfcqoUkZ8c4RqQJi6q34gc7s72q3eGoYLaEtSvbzJg7Sf",
  "key29": "5pHxkudgm6ry8QQc3YFcqKUt5urBbtYhgXuYBXUKVEwpeasHZUGhK6DQPW8SGoTFHmUKNBbmzxaYEmkRHaQnaES",
  "key30": "548LkCphmFxWAnCQLyFRQASdLw7XFiu4RpxTc5fgNHGYw8NtDAVJizd7Zetzryyvz1uYhzyQK3QY2MbGQ6bHkg4u",
  "key31": "UmMhEkMx7Ed5CmSur82XcshPfo5P6PZ4fRBgN6Y83dwxg77biUpBR2HBF9C5qoxdwJMf8wmgRGTDtfYovVUTtNe",
  "key32": "fUmx7k6DaBeRRC2twne2Z9hsJkf49JAUvK1B9EiJBowVuQacJDrbZGbUHaNUKfkNYH8TMbUNKjimAcM6zQHoqYE",
  "key33": "xkdCURRbwDZiteCPG53xe25T8VyDkrYaxusypy57e62air4WzZVmzUg3Gn2pKixj9Sd1Ut6JFYBLL7TdW88bxp2",
  "key34": "2UvDL22VxKrta8DJcJAhjLZzRTxy6yWh2oWvbPCzsYquV7ymxVrYVK8ZuqKvVYD5HoCkH1KgSdmSqTqekmUzSrWe",
  "key35": "5vbKuZMFvg12BPMtSyRyxGVC1V4Fp1UTDQt9iBSjd74i3XYeYaSrq2LAYKyWBhQKawmx3CGJZ2phwewyexhTbibu",
  "key36": "5FN3m4tVD3JYqMmfEdQjMjs44NhdvVq2keSRpPi7c8aQ3fsr3zbC1FyJfmoa7UdKpzeCNLSxCDUGK8wK81vnui7f",
  "key37": "5uSw1iooZyUj7TTwXix7cNNiKcCJtzebv7yKK8ydHhi52WcYegRTtWe3cvWWx1fjKdGXTejaHQ9ei86pY9iuaqfv",
  "key38": "2pxdWA4nvboyo1gZAThxML5rDGeUAwM6qZWhppDEZVXDZscfmFjeawkavRawouWJqCHxsXzefdzzmebDAHcRiEFn",
  "key39": "2MXo8R739aP9nKd6igMuVdTFYwu9yGLiw3veugDy9K1NL33a3BjAi5sGRXEuYd8wwWZPosDkWE2N3BV4PnCAzJFW",
  "key40": "5SzWhtybzYpnNym6sow3ggBGFXH7RR4TYraXw4gNbVD4NYZstF6z27xVFYwD2yUN6YJ1KYQCy2EbdodgNycEkhzZ",
  "key41": "54DmudXbmXPfLhAn2QyaeKULTobjJXyYr9FZp1R6jm5rBCsu7zGYu8TUtWxYuvW5BtDwcYXWEKNZv3ku1MpbyXN7",
  "key42": "mRoau1JEvV8K1krBFE3rfwb3g58FfeEQADbVhgTiRye3jmJtPQUT8vkv16dntrMbHtJEU7W6cUFAqqamALLWPEe"
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
