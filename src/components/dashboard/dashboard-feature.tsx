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
    "36TWwMcXnfs7BD3yNEfX2J3gfjntEKJtWxBwekWaz3U8wtUvAc6v6rBZ1hGuT3QZ3NCiCSr2WuSTBdHADDkC5Z68"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n42J4zC8wurfv3gcmbCU7LxUqJvFWQPMjpU14vHkjjmigFNNPSF8PwLRAJhVMgyZHMLs5bP94FGXwWHuCUCKvC8",
  "key1": "55j3gQVh3aruFfsiUkgUyP8vFkMEGXqUHQgx29BQtG6DVgzXYgEwb3L6RmCfW19w8ixNhtaP8gTux6bYh1c6cWK2",
  "key2": "3BuFfNckByYTLGTDT1Y72sehCmL4VEhg7S3P2Ku83zPtHiyGkuXXbkG8v3QwaMADT7WBEiwdv2pLk6ZVdDvR8RsV",
  "key3": "5kmurQfyq6TBGbnFimvqKqbTkQrJBiRAJkEsPtNmHULDLkmZPqjmKUxdQT37xGiwr1aBUimn9WLmSsnjq5uHBM7k",
  "key4": "49wYVtxw6NsX5QEM7j3RbUXvmZykMvESYW9DnZdEJh2F1vhYKZWMaZ3RceHRf4nCkNEFDiyyAVAvgPjA3bUJmHG1",
  "key5": "5gFSB7EZiKobF3S6jWc2iKBDC5ZZM631fbZs4KUzLFtudaQUHU8rm9FYiJPtmU8xc8EsC9eUxv71t418oVsYhzih",
  "key6": "8Kgc39BgugtnMyxHDwzoi4ReGMneHh5jtUMYSFKic1YAwjkHjKkgYwLCJZqj3X3yBWkvb2MYBMhudwF1bdugQQS",
  "key7": "3V336eKA3C93GTRjossXt5VcfhY8zCh4aVYXs4B67ev9qDuKsfGjXsrp63c81cEjabxLWzm6wWznkLzZAdFuN8XV",
  "key8": "u3N7iFzfYsa5TAnD4ADkFRQVrPUuFDoEWRi5sJSQNM4fggjDcspndHFJjXwryFgTftTXiudhF731bLyW7YpsHGf",
  "key9": "3ckj6aMUcgyuU18GWKU4R6cjYLD9Mh9rD2RJ7ffQnxvNk3CxDaguGJUcfRXf1wjUEF7CZHGQw3CfkFpoKeTyBWxT",
  "key10": "3wPqk3eRCfkLgtebKD7k2P7eRZEcxp1dnT2ibiC4z8TNZDEZohruGnc2HXYVBdUJw5CGVdjhHanwju8BY8JJHdoD",
  "key11": "337bEFcQpPkHtf6nDAy456k6TzWUmkmvQ8VUzxoWAixNSRzgVpxHABRoVSpqNqpwaBBw9P5PAQgJe2ED5DcHhPy7",
  "key12": "4k81iurP72DZa7im7jYNvqUaxVT1YE5YGx9UeJLVWJqDsHsbyD1yfXh8zwvju7kD2ziEpcDHbVhDA7Ym8QySAF31",
  "key13": "qMHew7RyXMGQdfuX82zsNmPr2iNDsJZLW7cPWwU8cAEH6BycNzWsa6Sw8Yd33Hjythmeoe5GY7D17akvsx397k3",
  "key14": "YpecFTYrpAMtJBBQDpfQAVXu7ST43EMLzusBCHAffMwp1YxaSMywc6yuB7MnK9TxRAwvgLzSNrhBibNL6JRKu6N",
  "key15": "2Rz9xUPxnk4nmQHYykhEJkPUaAD7F2SVYv64TfaDsEb4hkxYVYg7v3s22opfsbGATZbYUBWpZdGuAJnNe7XZSYN",
  "key16": "3XCCmodsSHL2FszGNuAsHy8s1w6VyiFFwvWUzkVecfuZwhGCkqpnDLHg4r7SwCeELGddQErYbRp1KB7cYEkVUw9g",
  "key17": "UHXF42h69iTLWDAt75wQAi1SvDpp7P1T2D8djYqY8enC3xdrHg1c6rcdJp7yuRVgdyVeZ5Q3uzf7xwyrrujzphA",
  "key18": "4uk3EZdc6kuM1RsVQ7p7ejurkFipc1oAvGL86BF2xP7xeo26JaVsGtomGeCdkPduyLbJyZgzQJYhvBahfD7eQzgE",
  "key19": "4msMn3xtE8R5XogVsneXbUvQ57qpeJpHVekg9HTZJqyyddzNgToqYLAjrCrRGSYF1hqzjZWVVm12AUpQTf1et7ve",
  "key20": "2T41HH1oocm82rxVBCx8QVFx4stpFd8MafDM9wPf2rrUCjZi19Ej24S78oaKW7WsPkbgjdmy79RbAfQTUHBdZZ2C",
  "key21": "4PnUVyu65HmWVrpKhhtjJWjoH2fe92Tu85kaJjNMkZvd6xJ8mr6ubGNHZMUZrcwGBH9rAUr4Aad2CeRdP4o5SNX",
  "key22": "5eyHKhnpjPbyyz7vsbguGM6dsBGFAp5uJxiYMsf1cmLaP8or6BZW7qywsp1HX2WGQTzDrv4EhpKhq28RsCNi7Dsc",
  "key23": "2FH5BhFRS99wsTzrkSPHbC7mPf8VimfMpceRBkj9YxjNZ7DnidExVfjxh9yELLLArYrHEgxCbumRr2cRNK6rCFTZ",
  "key24": "2f6Cu5ESZE9CA2dcfjke8gChpSr1ntH5GFANFnfmc4no8LriiV54y9gMEZCFnipmQMDbuzUFx53sV2mErSthov92",
  "key25": "2Yotiy5q9drkL5tqN2ejCHQdyAbMvBqPk3TcLP8FDnHENN3veREuYBoou9ktSkmVjzc37ggbriK5fhVAbFqkRvoj",
  "key26": "63GU82UbKzHh5Sf5DkbotQ4sbzZuPSEWFhkkbeerku3BsYUBtGTNf9BftvYDZDr86JeJ6f9Eay91XoxY34GYZUZ7",
  "key27": "3MA3GqqmyeR2CnmXH5Rn2KKTWhHJAy2HL6KNfFmCB9539HGiZZBbF8Las7pGx6CAJFPDsNis5oZCCnAgjLtmDkTa",
  "key28": "5GrQ97eYTJ668r5cb9gkasdruEQikpVkPdqqGazzCj49EUtzXh1VA6n2JrS5vCtabe2hzvWdVQCjC6YSaVnVx3AV",
  "key29": "Moa2dHSzbAu3TmXBb5dkSaaE7jHdK8d1avYRJ3PgL83xWhkxwtF8kMjN4UB7MwFr4vYhBnU1ZSEu2L2Jt2VxwLL",
  "key30": "r8c53WPTH4W4sAgioLPfo5LR8JqGthq7uBWLNhaZnkG7szbfNsgZdkWtp5EoaEZ4ADh1KnRfjev4m7mthvUnYbw",
  "key31": "5Jh7jpmEHuuBQZRx5yLJts4c1ecNZUAwApZNpTrnoPhHxmqS38UqoLXa2qaGN8hFUWrH8EKaDsKfqVcFPaDRGFKu",
  "key32": "4xWJrp3vXfiXmHA8HgCssWNTzRSRWyPawxSJyrYYfwxMqCRTHxMg6R1cKWhrbxmDYWXK7Ldx1gLCrb6hGhDcC8Ax",
  "key33": "2VRGNbr6Wda8T3qEJaQQ4q1NttJVuQajycHs8FKrdeCCSNJn554qFu1NNwU5FEUzjQh8VGYCLth6885rZs9CCqN8",
  "key34": "CJbAmHLqpXj25Ga9rWVcTY8HunYZ1RFi5AKyB9V2UMv2dj4UmkAyXV5V1ELYqzehvMhPsMu3XWCoGxVEWMkx6Kv",
  "key35": "2q7G3TBobGPXfgmrMJRNxdapYtF7Pg5Gs2vbePSxJ7V15WtTDCPsYk1pH2oN7kVj6K16bof7nmkekem2Z6WKuSet",
  "key36": "517q6yHt4rpcdPt6fqmoXx1154WkucP1EDxfeSR28t2ybLkDce1HQNWyzTTRbfxJCo9fUWH72zBpXHVwyg6PdRFx",
  "key37": "4czbpnkDrJoDuLttCd2uyTKkEYzRPxGnW7XiBgrvsYGWgbVgntHKexPuzUmMpYUVrsggzrKDUYVHQgN9ed9hDwuH",
  "key38": "yYPaFYkVKyzXrE81wbdi1Wc7AsUKgtKyKAhKG34KDjHWywPn1pX295pAvhvPsjqGxhCGzPGLvZ4MFgHya99N9LJ",
  "key39": "3DUmtWsfMW5od8UnVbJvNUkF3RtjgFLuM75eof65LvLo5jS9Ccmx7mv1YMjpcJzUrJ8eCn8k45hQ9H5YmNmombit",
  "key40": "3L8nTgXCLhyMsDA7X7SVazWHWM8Hzfhf7SeSi2vEck9D7Ua7ipMcZk2CAaCZsMhLLmp1qr22KUhgnt8LLmkfWVGJ",
  "key41": "5pauEuxN96RtQAcsEq6N2guUSwRpu2UM2YKkJ6yNGbXuo8tGar86b6WUjhDpgueUsFS5BtrcWQHYafZFZ8h9iHPa",
  "key42": "4YGHBcwzfCzzVyDCNd7Wa6MCbWFUTBS12zzNRx3d97xc5oZbrk6UEzX2XDkjgzKjPKbxeRWsBCvb9vcpR9AvLr6N"
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
