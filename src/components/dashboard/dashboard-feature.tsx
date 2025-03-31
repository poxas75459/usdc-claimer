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
    "3DTK8f8Akm3LuKZ82AufLfTzmr9m4d6GoexdJD51y76MghbvQXhMLsovYcctmqakkPTT2GysmfNdgZkrLdDRXCtE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BiRe14kXpE1Lq8mxqrX39mpCNQRZD9UpwY7E9aeq85fMeZJcdV4D8yZvSN5bZRdwZVjUN6MfxAx5RenVv98TAvx",
  "key1": "DdqmBc7TCeHQh5Yph6QiQj6FWdBNDC85meB55ucoG86Ws2RsSryThZA2VH4zDQBzu2WRQBaisGMdtbf9aiiEMpk",
  "key2": "3YfaSNhznx78zrZ6Zsi1ptZYfMJLvp3bYCoxdMeWyqbDBuLZoRFXzPKvdsd7J8kdckgvCmdEMghjZo4ZWXPd4XJ7",
  "key3": "2RtPNzA2ZFjeLTmDLjCJK4i1N8prmhCwzSBxBmQyW2z4HMbz5Bw46ZHiGDd8SUzk1QBJr3e4KsJE2oFQbhFKKW1w",
  "key4": "42hgzUt9uS1TgMf2i2qsRSYDww6HDrG8Mc1VWRoeQJRvP8JWRGiYY6L7YpfVoXw6CDQBrwi5n6hggNQf6jvHLUi7",
  "key5": "2iky17WJnL1QeARQPxmU5XGUQk81MdwuNjNxtUrp9hdenn1SWLCHtiTd1tSXZdvVEUqJ2rnFFFRiucqvay1614Te",
  "key6": "5tzG69RrbQnAPVUyN1gqmyDQ7FY1KKGvHFSGoj5uigbUuzWgrYhgBWfzLY2inuuygN2UNUQjwcJfWkbhGbeuhzse",
  "key7": "3YWZEBRLj3ddBmbvtag6Uf5XKfeNZrzQx7ggUsgGVFpExznnTv81ifz4qbQopNiKA8yaPxQVA36rrdyVqzaWF9J5",
  "key8": "4Q3yt9kKLq4ECfTUFTXWVh9KnEX9K8UvPjJbB1MdjXNACbF3Ad6jcPPXLtGLBR8cUNZRLMumzqprgoYtdrztQAht",
  "key9": "4WLVZCK8cC6mAj41wjLMCCTuUhtFGC39TDZMJsAfMRCYU3e7JdMUxAu1kdjZGsjPD2CsAqdJ8FRXN1XTPAP3sb8h",
  "key10": "2372nP9nxzi4rsZEDZyuGLAbPpLTqCnhUtNZmVTSfrJ5FLJAPe5M3DKf3v7KUVxvEQjHM6ByCun2LxfRMz1w5NeT",
  "key11": "33zkoxB9gqjstB3RiteipFnX8eXsqYVxzCWcBt9usKXfHZUJKHs7oLP81p9pvGoT7RcBDmSExCnxDmJmR625S2Xt",
  "key12": "4MbdyPMuRnc64BsyGqoE4xsJgr7FRS8X6RqRr9WikBJPqajnAP9sxMrEExvtMwhdSNVwtuwoMntGo8XMTpqnaZDs",
  "key13": "s59GQM5uZkHnB6rwHA1NEwXz7x5T8cdYdP6QEVU9WeqWCaKerZzhUPUGG2wbpQD77CWKqhQpSSZ7TQAeunTw7HU",
  "key14": "24LtPp1GgmZP3UuK6RieZ8o9v9vyGwPvX68kesWkwBDGfJ63vjjyZhxk7yF3L5JDFBcS9bLuXY8xgEUkJTjNFjMA",
  "key15": "3w71ZSjyeGSeDrCvwgLt2375FTHcLqHaPuZHgcCfN6Z9EETHhPKX4rTJJViZhikLBFW2aEMq6pD8jNutNCMAPJsw",
  "key16": "28vAMuqoGQDhPDtz23ZJBy2Cmb4FZcCc9dREQGEMBDwxzmyaAvJjEiMFsdxe4gWdBA67nsmDqAFaxmFEpncyJT2E",
  "key17": "4tcqKLN4WotFhnpPgukGorQqzsAEMFcmsCFTHyc9J884YEfvsiUmygjCqjSVpd3uuZE5zATCDT6oHcescWNY8Nbv",
  "key18": "2DPsBTRFjvdgUV9ontmasZzHBx7gcTyoJDiFtAdLypgJVfDtBdrac88UJc3fR1tmm89SVwqFCQeBPXTawkadSxJp",
  "key19": "sGHDoVoVaR12divXddKdqYmq2xJHmUsataB8yAuw8MimEZBZ7wAYkT8rLzSa4KytknTrSAp8eJmtVyFdT9QeN7N",
  "key20": "3xniB179SL26DQSEcNAeWrgL2rKZYkwY7dZumyMRRscaTEuTaqBfF3kBEgQTtK1Qk1uq3gUqnqqkGuAoZQMYmBRz",
  "key21": "2r9QjNkbgGuDdMA1mGYU7ULGDFYAY8dEcYEUdQgbzAKLYMkKMqZqoncjkomJhyXqhcxz3snFCg17ofjRokLEQAML",
  "key22": "3NSaCfxGBmvvc6CckCDhASYTan4gBD4E7wFJEpgzPJUAXzRcvJToVGKnqh5s51XtWkSWuEczwpbGhD5vRT1oaUij",
  "key23": "5wEkvvsL31v7YmS7kak53XKigsSdJx8AZ2v1R3H6aeoaH4u7eS4rNxT9SG2TiGiuG8UJaWcHpUr5TVoRHG2dD15b",
  "key24": "2VG8MtTc3hPx5wmLS9NvQeD5oypYNoMeRAx1DnF3YadKg9KhU2xNoLrvdqpsfM26j5BWLqJLzUmhNuwseBNEU8wL",
  "key25": "3LhX7BLDGAaM61x7cCL7d4hrtLUZ3UfXqFGWLRxdDdoP4UfRxinmxjEwF7GC5XRd15pxNxegPSHznZ1BUX3k5dk5",
  "key26": "32WMcJaeemKV3M9wY3R6BLuz5caDWVSj2xY6UhsuUwNayh6QKtUoD5VriSPwYPMGxEXBGqobWwNt6h5dQYCU2Anb",
  "key27": "2qwXKPih1XF4kty7cowwzbiWsW8WbjSXdKCJfNacMD9QPPLf47MPAG8gBpR7FgRh5fSoSczw2TQMfXE2fkJKQ9eH",
  "key28": "TLL1LGFAw13KLJNKexV133RmAZ4sVHAe185x5LCXfk4T6A94cjzR5RQGovHQV52o6ux2szAV9uBshkakm6ZCngK",
  "key29": "4zFHV3uDPDKqTexG6fmnwKvEQ7Pt44KBBP32E16AT5ziCVdnsbtK7DrN2kDtxNHf6itkrYiPgcnhwfm4PWeGSLwW",
  "key30": "2b5SpD7kkroiEGUAi4Cr1MZRThdjwFCZiU2tTwPqsJwD1cU5VYgQiAzRKkJ3pmF3Mub5QnHwpkxvGJhmvv2EpJBi"
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
