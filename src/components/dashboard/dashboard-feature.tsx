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
    "5iKTarhUdmbDqev374XHNNWxuYZFM7Egfnn1fgc4FgkdCYtZmrxbVy1CLKsCKDjBafwv9dXAak3T7t1koCjTuaa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SbYbY28tmh7Xt98XLhyNL5WRqsuUqaTSngZLqJusJgKyD5fCfmmUEtYG1nHdJeXdb2f4bDuGLvtmTxkrMsXKUiv",
  "key1": "4oDSYieCC6B4usZ24X3BVHwJp9h3gXYV6ujU9UWgih4BAEukvntVJHRmSLcXgY952bar3S9DMmdBkbNLZvppX2x2",
  "key2": "3pvyXDmSCCSTZfzM9v7zjttHs9TYiwyg3RegAsmVmp3w9XjAjBs4WYPiV11MqSocRnMb6WsVj8FqmFGm7HsH93v1",
  "key3": "4YnpqFYcGZxHuBJeAiiq4Q4zq7RBU94iZJgW58r7wDLmCXJaN3dWGEXzBY9PJxRkkZjJqKhVceQVgomHf7XaQMJd",
  "key4": "52RHY8pjH5Jt25RVnaFcm8w6mSw6GQdeRS52EoAJojBuzZCoYLscX2a2UWhrvLqQQ7vguqfk5wZQai3hGvuTw9Mj",
  "key5": "2EqT5CksEYnAoKzgS1fHxi5weN1hgpeq2QeKRX2gSizM6WKnduhBg3F4VCd1kkJkdi4DC4FmCmKXNTJRBvoMcPYT",
  "key6": "5TPCaUdoh5TykmMAsv3JXTRqwm6Ciz1FQWY4PJkUAzA47DQ3tAEg6wJYfmHfEQQG5TLBh6fowTpEERdE7LZHsWGg",
  "key7": "2VZQBfzN1ewe2Hr5KmurS1QseWiLRhMNTFdySKiMi2Ttf3mXEEz3dUYZSeaY8VUySG9RFkLtbuNaNXPHgRfRB2tU",
  "key8": "BS7U6DiwFVXJ2xa462m8fvbapCk9R7wRkbErPMXxQ27jaxX3qXpT2riGpRNknYfB4uahLJ7iQVWZunN1BjiZSvn",
  "key9": "36FaeC4Ba8h85hmL8tLpj1WrNmzW8BDhfQ9D5nsVYb8dVebrHTa7R7u5cNKajYvK3xxjmuJ7g86BVLCqwReEioAn",
  "key10": "fwBXJWgwp3UqbVPMqGCnjg9E1CqeJkt4U7iFpCHqZdwjGUwbdFtL323Ydsv8z9uSzyLiZuDaLNFEtPoKWBy9SxM",
  "key11": "iqWfrMurc6woLbKutZhFA8kKeNYvGanthPcYTRRdpx9QfzC9sLoYBvZxhspuUdjpeBFhw5p2mqLiA6G2NtSBzPR",
  "key12": "48tERXSEEBZk7yLhMM5HMVj37nH4oxFyp9B4iUofh2Uj3cj5EQkgcyUHfTFjrNkWfE4du1MugqgAMnEJ2ZDMUJNH",
  "key13": "2qK18VKtdrij5vpdnEbBY3v8se9DRT2bzhEDuM9GB1RDX1hkKFYknY99VrVVBADxQArWKLaboAvau2b5Nk5Wv8yM",
  "key14": "4GYxm9WwWUjQEcTDWpa9oxBzKcu7gRqe6ShTV6o1R5F74HvgX82yyhSPGavWT1v8soARUiPR29HtjJcDVFkDHykh",
  "key15": "2VHuooNEghrE9dXAG4jnef5orjz14vH9uQc8pwTbdYiQsC7YoG1KXtV7AoeAWDFJWYjkfnxTNaWze3EvxBWsW5mv",
  "key16": "3X3gSLnPXboJ4Mi3E8JfKbygXNsyNBd3pzARoFUpZqZv47XiZemQKCfks2qsH54Yh6MaARTgcRNXYK8iPDAgMp5T",
  "key17": "3iRuZsN58UiiKwDg4qBvtZeuPCYqTgQG4tegKrRVUP7D6QxNmTndZMJvJNj948p6YojUBiXnzySZhhEfMNx81Hfs",
  "key18": "5qufRQboA3iUfz6JgXYRtiMwgWVAAFnLmzihKpBvPiJnaBz4UaXYikrGSEiZsV1obFdS6RXUpSL7cXmtjUZsPPWt",
  "key19": "3bMVBTMk6Stb5zuWCHG8m4o22PTQj3GHvgT23xC2YrjswTvUpDgAy4xd6C9uMsqsjYZuq7AnLmLXQ9Xjmij4BSp3",
  "key20": "9qhKucFTHHn9rWv5JiqpJQfRkSsR7NwpVPM3JiDg6q3xKEw8pNyJfpbAFDpfTR6T9kjLvPSvDhF7WYdNNpE1Hu9",
  "key21": "4ruoUdZkfrGRASQDQz4U2McLFZmN3t8J4xtt1hb2r9TcV469M3JaGsKvZ9h3S8bZLz24NtvatGSc6T2PkRMpGXSe",
  "key22": "66DHJ1VzYt6pH8bFiPkSyLtTKLJnQP79PbNsismSmvdq3o5fspHGDPkTBXf3yLQkE9zxNc2yyBk9afSr1Bo7iH27",
  "key23": "2DgeZXeWNRP5mT5ZQsan4z2mK4pdzTBgwKpndbjwe2AYEjmzLJ4KA6CX23c7WseCUmtuFUnhq2S176sDYWnuEdG6",
  "key24": "QtHrw49YTs9fwJe6kzibHe9tkFGyCneiwon6xGzWsiqp7UxmsTD45jSmPvoTPrkYdfnRPf9tTB8kKsrtG1ks3ch",
  "key25": "22rw5o8jxvRpzCvNDwYsEPTqLH7RSNyabJUoN8RASRrnkMof3rgvB261c8AxPQZWD1Roo3c13dk5dUNNB42mzK1D",
  "key26": "4WitMwip2zqGmKeXmajorBR19eyXu7on2aK8PaqC2udCdj45RdR8MKREPKFYZw5nj5yqVH9xrWKEMBQft55K6gJw",
  "key27": "2WsJinaW7HovgP2qkhuiY1gw4khAHE2nKgMksE1KKo4G4d96g5Ka4o9iviUxmZtVDhhD4FhdDXyhwtaziX2txa7Z",
  "key28": "bN5TtC4rWSoVZ32ZZyGhBn5krk5tncc2RyruDU3E1xZkFCbSJhnJ14UnwcmfxybwK5QEiqjLBcpP7uHv53ERjeP",
  "key29": "4J47JroQ2Vf7j4VP9uNaHATjcfRypMNMJrSQ72pfXUQwkhf2dr2BwWhkeyeKKgEgFygy3aXd9qSCPt7HSX5VPiXL",
  "key30": "2PEvWyPhqTNpxLxgsZK4PWi4yfhFhNSP8s2dR7bY5pqCGk46rmceYehgNqmrdkQfDsW5HNu2GjQUhSp7yz9NdhJs",
  "key31": "5niQo32tiSuHWC43qdVXR9Zos2Dzf52VUyYjEGCRFMTUBGC3PjQhuxsksU6icDtRw5D98JjzphwXFK4BhhKxSstD",
  "key32": "3NQrXyAZR92BKpHnSAXhowVthXKeb1qKpcFPL3Fw84ABWfScRZijBrNAvHX4YZiYRDFG1Zxhd7AaD4RYDe5Z98f2",
  "key33": "3wz14QnHgd2GQrFvhmQioXfvd2LAvkDuHPZL5UNxpdWxw2hGw2e58kN42wMGa6ft9zXSgS9qoQdvVtGsYCXG2JP7",
  "key34": "PNgqa94V3acWovcY6rdLyMACje6rNNrUYMybAy8Bk5Aambk7ehMMXZgxYK5Gs59z4Cq15Mcd2ae5FKrsyPoLvk8",
  "key35": "u9bAyh8p9jg2EHoApW6sTS96o1e3t4Lph6Qr78hRzbqkZHdu4snoEoD4Js4Ruf5uo58uGD8WevfE6X8mRzUh74q",
  "key36": "2rLfS5xhK6TJSopM4vtEpx1BuwPaTUhzCKyeH26wkhiFXao8SrBptf69MuancQqtHgT6xKPy5nNP4cWxTmZF3AVV",
  "key37": "KLYosmwRHRdueHaw35awxgWgQjH36tsYDTeikwSpiPADmqXardHELcKU5x6DbXxGiAXXWt1cmRiZjuq7SwVNoXb",
  "key38": "27a7h2uDsxCJWw3wmWLYJJT8NBEaVQY6XaaWehpDqhvHrR4UyM7kKQscm5cYGxGz5w4NiD9hi1qk5bdsiY3ciBpJ",
  "key39": "FyhoNXaw9TmSaoNCfFf4ZZiwGG2RgWhrw5jhe1qHMXkpuNFeGNWkXaB8KksNJxFjKvQSarYtewhEdJqfvv5TjRy",
  "key40": "35NnXS8iQj8qMSVaKB947rLUQL7nvGxjLr6vnWmJwSYzKcUx5cmdFUKQe5nJHvEVNwKbYeFhqbMv17yNehUxtUpi"
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
