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
    "5q7JDYGWyUsktumqrGSnnkzsvGt7AHv2i9416MPfwsk5GpzaRf1ZDGWZZ4mPBnWrWYsv9SajLq61K12jyDTuPEKH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BdHwJQsrdwuaVQVYHYFPiSp4rMPV2y1LSWc9y8DryrKi4nAyhvHopDryYWBznKreFLWwobhoUfT4xd8755XJwwe",
  "key1": "2guF5bvnDPFXQRQRvRc31RhybgT1voohUk3NkHWXSrdqee1zVyqqQECBGGVuXuQ4LzsKFtbBJtDpyvcT5pEhXukj",
  "key2": "jdA9viBaHfvCs5Vf7TrWPUY6njMak24msLowuPm3RzAKpDYocAgStC1KhPKtFEfJcyuti1uif6AdU8oBK2zyiSE",
  "key3": "2Aqt2FfsZywYV7SguminAd4Rec1xRRPmifc814vZM2JiyRaNhQzANcBVCaoRKgHA5PwnurVZVJ3E2cvxa4hVZucW",
  "key4": "3n5yoY2RvpMJv9YWrD1Wb1BGBhjAyGrUmxTEmPxBPryH2tPFXL7tNNTBPCmvngiEQjDxicuom5Q2PChiq3o9VrVP",
  "key5": "4MpBPX2mdJZUBN69WYnAurBsGCwEnQDi3zQ9b8aRoWQRtsWtgjLtcQeoeUdfNoVMMebZXY2XpAL5mW35bGUMCbuf",
  "key6": "3cYx7CjWR9eEyzuQudv4oxivqFzbR5d54n2dqVJZqoqrYzYu52LjjmAxZDetoi7LLcjPnxfhwkZMBBrQAJz5XHyD",
  "key7": "2YJLr39DRxm4rELPBbrZJpp7VuVjhyRFwcPoAdkzGELg9sA6km7pdtQP8SShyAsHAMGVNT9wyFRpSNqGtfaJeeLa",
  "key8": "xP2jqEJraXwMVPhPiuY1M28yQabfRGyyy3ZoG1p519CJM7XkMcpz8QPiTztxHizQJSY9SMkTR7TgfQSaVafSZkS",
  "key9": "UE3D2yNhDj72i7HhJ8wQ9z4ovAz6CxJHwMzvtGv14dgWzkpZwuEtK9ZtnwigWTv1AaNt3UGv7hNcXqbMt9PFCHT",
  "key10": "MJhSZze6iUvSbsmywPHFpLAX9kH9xFRSFjY3bfkDoVh8RBP8ASTVkMZKecKv5yTREbacmdHGeV7E38eTGBH6FWY",
  "key11": "37Qu9e1rPTV4rFJp5MT92S3mvZr9SJoR6Ye9arfW9RSfyMpiGAmtmA5qZAecwefzM5PB9MMCEXkBW2dsQEFXndKB",
  "key12": "2c4DrHjfQStGr8p1rYiA8Y53zjoSuK7HGh7ckHPAShZ3j2v9niQN449W9T4ct5YtidxZUSEjNLSfCnePnLr7Wb53",
  "key13": "63M7Tn12KedauTxY3wqk5vo6LLJgSK7J6ekvhV1jS7FFBNZNaPuA8cJLjiNb891jmYDdtatkqmhYSx8NcrDtift3",
  "key14": "4PwNtmHkdiDZxxGBTc11EQRNktckgpNwybGiTFJSwXMMJMWVZDe81BpwGq45GVrx4A3hTseXt6XB1J5haa4w1D2U",
  "key15": "3PkDG5YxYi5hXrK4EVU4ZqF8rWnkBXYV8X7Zdk9ZWGjeMChxcnrtj9xj9PzoHxHhF3xSGTJ3yKRCeu7JPDyBBhhA",
  "key16": "2kVC15BeAS93xDC8MLdhxLwSJenhGju1kJJM7wYggu9hjL89NoUFdTDSEhvf7KYQzE2yhzbMNERqHsb84zpjXaku",
  "key17": "KjL6Mp5SABJbNoyPtHL4adWWjRphznQVNK7t8oUCW7VCVqbSdSxyfPe7nJwgzyqdXbq4bnvkqhSiXXUgW8HZqKQ",
  "key18": "MFCYJcrbmoC7dVvwCuRRGs9fYkR2HLE8Kr6rjgMS5mPb88avRXv2d1DoXDxTEpdTwpBKAe1eUNiXUtoQCZwd5HX",
  "key19": "5vziDkq9zVRt9CYwjcCmpHQGFYYek8RjJ6v9mTNVRdCF5CHwwaiJqJzRoGgpfdfpyrw8S4fPAb4Ypw9N7u2iA4DU",
  "key20": "4FPmGvb7a8kH6ud7KGZQiJyuu6xKBvHGJhazrVTeuwnzKwwFxcoufs3NVJmLDoRbkkYjL5Ld8gzCu7QUCgduXwdU",
  "key21": "36BpUZheCSff9njBF7SZFeBXWXa9ni2V74exBmxZqtPQz8WJ6rf7CDW7hq7cNBWgFsSkap9YMK7FY2zyv7SXtePw",
  "key22": "5tuhqRcTCuqVKgnvWEJHgqnjsKFnGS51J1nNRHDShvKmDy8hJEv7b8QUAQjwg4nZMbeSBpf3GZJjVBxKhFZLoTst",
  "key23": "3X2nTRW4Rz4jGuwt9NdZUWos77jx1YXftDTx1PrTnb5MQXQ5uu76MxhpoYbz9H4iL7sDr5Q47c5np2RmARFzeGL6",
  "key24": "5AUPVgVhAuBa8EF7rDyBYFsr3rUvPE4cQbxBspFJKscuhkMrphkUrFXNgKdXYMnWxfCpHWJQJysEAjVhHRu6S3zh",
  "key25": "2sETCRQwACDQReSXpNKrZZcdez2y4zHanfzaAQoJUxby9pLLN81Utov6cTjoeK7RDeEJtsc8pe4Hsao1J1PXXGR",
  "key26": "4ALsjztnPNSEYV414hw3aGScGgeWeaX4a4NLRiTnKGDMeDV6UaX9USru1m5mFS7nZtWAaPSv7kiG5kFaGpNeoXMW",
  "key27": "tpah1Fz6E6occxxTM3t3J8v457mzSyYNnsWeWVA5vWGQ8xuWH3QCzp9nEpXMeJuqNswuRrr2qgJ1A4Fxm3HV63t",
  "key28": "fxXGFr97rt23aZAoSPhYXNVoLJSZp7PQXRgL4AJZqkhnRaDAmdGfQUsn56wEENbapNQKnpCR9ZRKsTFcY98xNge",
  "key29": "63GPLyuz7u9ouNTRTUh6BvySsrmfnjS4JC8Hdmdfwwv5jpoNGCg9BaVe4wZ2Zq1tAcCiSe1BzQevUkUWUDJZ2Ne7",
  "key30": "55Y8RZZy2yigRuP1dv82faQkrZqLPafgeH5DQbtBmqwQtHtAjK8C99EWaLhX63MRvCNt8hapChqZ57gja99DrFaH",
  "key31": "3Y88x2CzWL5aHoVPoodXkm7aB5pDJqq3U8DEBjdNEwLqvjcoGJvc2Yans8i7uRbYxSn3xb6gKx5YBtbTDJVeMsRo",
  "key32": "PJaWfhkaHKPTtDBGjQebfgsv5ExLtmEK8nzTt84SdXseFdLXPymGyBwjDArC1UCeAVmejxuNwphGCeBGdujanpK",
  "key33": "3F481SwFosf5d4oURf8WyKbv5AiMnEioGz5dVh8TDCeEt94HcECpp1rQBWgyEsa5g7x6U6eXRjLimJiwsAFuGtS4",
  "key34": "3sHqJFB5Y2Ymfwk5ttvLPH1azcHugBhKdAXZr9fho9K7QtaTn9VREUUsq9bTJky9ywMAiQ8MuvQVAXp6a14NRLJg",
  "key35": "53eWrdoc9cSCtun365Q4ZgVJuh74EtYm38A7KXNdQLJDdgjzu9RcF2vksaZAuGKtn75sNwwNYzhSgqYLycVxYoC9",
  "key36": "3SytT6wdj3yMWMtYFcJgYDpPVL6aBUvXvKuRk95hNT4yha4bdEqqz5dbPXLgFS5VbaCtFCytD7wcoCKci7jtCCyk",
  "key37": "W5gxnZ1ibR96PnAt74EQ4Y5VMQ5wkYL8gdSN6HQRARozQFTfJrEbYDTsEQBaFjR2ixsrrJXPFBBxXDfskuEz2Jy",
  "key38": "47t96rQbS3ycF3SFMPZXdk6XS5EpU7SCZRXknQJuEzVUHELQ79ooxFHgqTZQM2T1HQzcCadT7YpQitJZ7es5m4XM",
  "key39": "VYPBuH3SiiWgvmBoeSkw81Gneg8xKsFTcqpERUseD3MdtqdMHTCk3zBgTWztEW6i2qD1vc9juKA76kAS9vHXFfP",
  "key40": "3bC2Y7j5HJ6jWxzzn5mQD9PnSfy2zoN8dUvk2rKPPZ2XR6DXQE1p2iCBjQXKCp21V8AUR8nWtZCkfqWo1rQTX6my"
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
