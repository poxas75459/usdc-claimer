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
    "2H5YasCkzzq2ZVjQPzP2RaBBgA4DCkCfdoQi5qTtTDDoWz6KdbRyP2AyoSVMZ8m4NbXe7bWN4stSGtBWa85gzs8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ecjw8yyRXKh5QSFuxhH7hdDP6mkQMddmSW8wGGfTTumyuecBrBNyoLfJeVQQiN3XgpvjvrjgyRM7rNZgkej1Gn4",
  "key1": "5veiP9ZcKjExVEsZ318c7hStWXz2WRsfhA3pCSjUt6coBGxwPykheYAADpKdFHao1roJhhG359BF4diCurjtjPTL",
  "key2": "5VyVdPwhZd4qLj4tZce9iuBr1SAyuV9ZQfZKBq8iFkQDfNHwaTGd7r1deRfnwuZjD1sLPGLqcE49MdgjSAtWDv2e",
  "key3": "2csWYd9CKVPwZArKzjALBySPnvT8n4vNF86safxLHP4tXF8SeMcD5HyZhrVWWEZh67NANpfJLHCskFVQ55efWRqA",
  "key4": "4GAqcUCa3qdVWbg68KS252bWwoqd2AyUNTA4s3tpQdxfjN5WUt39vQtQb2C3dcViDkj73jBL4KBKPxn86x1t1a1d",
  "key5": "cdibeQN4nAVesQDmWxLgLcoj6hKrrr6TtiiRUGigp5uBKvRg8qUo4LNi8DcKZMCBxfMDo4mX2U4mUjxeV3gBkH6",
  "key6": "5mGqmNiYyYRkMex8Szezv5R7Vb9JfT4MLfedWcrcEXvLSjuKztfuHyqKPtJAkZ9XpYmBsC8mxQed9kWyaZzWidBq",
  "key7": "3FMvZeWEMJep2zcAeg3Sm61F4oBvmHZ6pe3rhAYEwuxFWbggmwtC9LNWNeZpVXmyjAJZAW6RXr5YyTEWMhXVpSog",
  "key8": "zsdTYMqMiVeANuU6NtC7zuesazJnFFyhd6PrDMRAkbJPiSijSqSLXbkALxp3sWoGFkocoF2ig2wXwVVYACKckVQ",
  "key9": "4Gv1oxg3RSXZwoa5CoUrp38WLbyMaB3BRoWMQEnowRkthf8V6DAGF7Tqoc2tfYCvnN6NAWkMQDkewUTSbqdXkC3g",
  "key10": "2ry9WAkZZN1Md1a4ApMPQixqXhdMD5gYFTgodAexFj6Fkw72R6PLNdP78XDnCEgm15JFg288aQujyB4ro5Cq2PPR",
  "key11": "m1RvUo8GRxUokQcJydcMGkHGeT2YoX1HCkqf5dYbxtMxTse444r6ZkVwCNFoTNxjHNqofLQCXA1boH3aQHPPvHP",
  "key12": "31GRbriY3QmgNwN4ZaatpxwggW5jfYhdStDeDHxhchCufhJ1bZLrvKZreKEGryy5JQctkqDtut2TZ5aCwA4JXci2",
  "key13": "3o6pXFgoBwapZtwVm4Mir3wBVcaoWyTUbUpntrvpGxBB4rqrs9jEMLeSEg42pNALLy5Moir9DuN2FxAfZbvdNjAK",
  "key14": "5kgCEXQcrdp64zFtGPqyq8SE3zRiNVW3KtnoieJTBtwZDdsPH7hevHg4uL2akNG7wPLpTKrjZfiy2V5UQrmSEDRQ",
  "key15": "3bB2jBGueThRkUpwK63PHhzTJK6FpQmFd56cn1wGEPxq5d1jEAzVrV8zeDRjSuZBd5XrsFWEM9HWQ99pYxwvRzWX",
  "key16": "WCB6eDwumjiTd5B66yLRdT6yNLL6PLbsf638RtTFUmG66UEGeN9xeAGiXXSHMKAkXDgkXs5xaXSmuJKDoBXyfiN",
  "key17": "4ZbzEphHHiFsRXFJhNYTna3yZdCqKsHGC5HyN618v2d2cZ4CvizZJ9sRVmQcMSgUeE3sx17cmC9MEtEQuPsVDhJK",
  "key18": "4q9Xn1AX1EjLyapXV7cG9jsZUAtNXudnEdFX12qdAheSSrwMnNNwWtCHEXkPBKEe5x5XhSc3AmFcq2Mt3fyHznUs",
  "key19": "3gsw1CrTfMvYSaJjasf3bDt6HfbG99VbKfC6FKZiAkWi2dBLNLJLFLMB99mXebHjvGJbq3sr1A629S2fWC3CQJ16",
  "key20": "Reocj7dcEaWkh4iSnE9W6nRmTcZeio8Kwr8ZzLgjZDuXdzQp3R1ve4UqNc7f46Ui7Sv2FjJG2RSk6SRQMqpvDsa",
  "key21": "zVhRRtd8whnbRu1FqjAFTQu4z6BF18ZdbAfgR97UMdM2dchFa9aoeFw5dokbjEJLcrdt32HDXBCvSCaQKJCe18Y",
  "key22": "21VW81nauwJxBydQEqVNzGZPsxYavz2UfisXANrejMKYjKruiCmRZe4e15E1ERHMtZMGyobVwfLyiJaEwLEn7VkQ",
  "key23": "3dh6r2WQLnu28JW7PNx88X6yPmkgogwoX5GvFZ57dp5sco3JdfGASj7mv24qUy71oKqhQkfQ2oXhLpbevFgqtJ6k",
  "key24": "5FYvBVUNXhohAqVf2XB1es6yv1ZsD3eJKFukSvzU2pUJD9D2BznFXMJ4BFEb22oMhi9PpADMz1ttNDDDaoegVgV6",
  "key25": "4LvbtL6mD4qckWr1cu3R1g75QwXSgnVsy4nY4pvPmrMfQHRrxkZ8NnSYfHyP9f5kuL5deVHCTbszVBtroKmhharM",
  "key26": "2bqeV5bXitmWGYg4Wz5wY1tC2SsLdjX8SCPU69CFiUyEKvvMPuuqJ9SS352AqjNFTKEp7sg1ZfwZkU7jH3x6rXFp",
  "key27": "3NrX1m99whsbWLpFj7DVUjWjFi2EDHHuajDdbU5tFSX2cx8oDaV5WPneTRUhCSLHg9pafTLSzGHyPDgNQbQqKmA9",
  "key28": "41t3eLERAVtSQxsoc1iqFfpE8nLDqeJrW2mkTG9aHYuzogDzCT41HEC7WcpJs4u2rZurQEi1ZoasrhxnJbZ4Mqyr",
  "key29": "ebyd1RwtQG9UPpKkwvowQ748Wj7xgU1vU3BNy8tGRbGRHUH59nnYZ9jcKrvPQrtRD4UgBWGufudoQUNpGvxagJG",
  "key30": "3tenoWTtrYwiT98ytVAFpq3QT7aSsQGREPzRfjyUmkdfK3VqMF137xkBJPx6RQbPwkfn7vfSMwpYjfsn3Nfor2Qc",
  "key31": "V2pHTvSKv3WXv1H44a1CppiLj6t9i4nMoqaLjLU1fXWFGUKecuUHMdEeLAAssmtmeWY5NjR64boyX5KdsJR1N6A",
  "key32": "2CjXi4CoN2SSCd4c5eryoUQCeRvTrHQnWpgYUD8woW35YWDcnvEeNocnirYgSXpsWx8pxkQqQ9UR2E7Lvc2yncLk",
  "key33": "3ikeoB6ZLirkE37LW7hZUtyaU8VxFNawH7zxZmbRH8bGrRMKZ1XguHdm3RDj6rHFxEJk4RPciijMBgeh9fm9qkx6",
  "key34": "4UpV5eziUi6Hdb4xDycJakQLnK5mSUeAg42c6CmE9nAgaxPTqgiJgWnXxjjSEr8v1izmCv7tqscH1ETDVFGT93dB",
  "key35": "3yF8Gfjpuz55rHNEFQnTwbm8vN6rvsKDxrNMDnNhYHgXevbjSHmhSm4pQjVSJ4G7EFhDhYKg3EawAn5rHH9TtjB6",
  "key36": "orQKVkgidBzvQ7tU8b7FcbTNqRD3bfzRmsSn8TE8sD5ZHvJrihc5Eh7kksKBCiLf74Azu3MXykFJG5frkL4V1ef",
  "key37": "47WirqdN9PWCbmq2CQJ4CqwXGuR6eQNBTGEHXyx5oLH98A9cHQEZSuuofXr6mXMx7tmhZJUqfoP3pcnGpdZmnrRR",
  "key38": "4ws8cpDk6mEFpp4ULneWSyvj5cSLa2xW4k6xYnxvLBzCMLGSQAiJN7HcrWi56fx6RsbMat6U8VcY3EVjGBRYdiVC",
  "key39": "62CTr3r4NpiWo1AfEsZCfhDNnoHrXAyQm4PhozD9SfZpCAStXppNf693yzHELLRWdu7r9WAx7RhmsXvW3QmkDcGg",
  "key40": "3o8zQmETXLz8Ui7gRuaZ1AJHQJ2CgFBFgueCNxHjSY9MkPGBxiF1Taa649QpqVSx5YoEL1f1mspmwv6ooDpafEjd",
  "key41": "wmThr7Y3txMjGeR6tGL5dBYyYK9tgNc7kpYGM7Do999rZUzBpaNLBk615E2WWMM72c8jpiYts4NbvGjnXRB5dWu",
  "key42": "3gFenhVf38We9T2GYEmkYFbd2kA7tDX4xWvUHUMrvQiJkykwecp5wyHMh3dwVCt1FnJT85hdAXPYzRhpVptDRhMn",
  "key43": "r9R5BPNxLsteZmsH9N4tiLbWexMGkiu2ZNVWzfKVFUsgj5jrhjwYqhpztPCyWuufGicRqLkZock2ceiCCNzZ5HG",
  "key44": "3oBkG3Q138i3PD1qvqi4tu8qY9jNRMZTL3zsA1tXAv8uhWyR7a98h82uHzouHPibuyYng3sCvJotfU2S1NDzoBsf",
  "key45": "NS44Rs3dKqrqf4L7Xwbxev9P461iCjt1AQMGMaVs484Ck3NUyNtMkAemnrhqiA784kTRcKoQvRxUSnv9J3Whtdz",
  "key46": "2RRQHx5dnAj9wMwzBAQRFnRq9cczg57a9cGgyMtLUkmrQhrU8jd6vmy6JeuYQhzXqD5X7b5snTfd2TgSXuKSAV4M",
  "key47": "4WTLCmfCpJryGPsocpQWyCGfbSnAkGaw52d8T8gyNgjpBHsXMkD7u2XF6WzqmudNPQ4GAoJbBPAp2PEDtKzE4ton",
  "key48": "4nQ98kKGreJtyK9tStFE66axC6j6XsDgpWxtUVQooH4TjDWLbophLwd7jYDYe9RRQJDdJCGV5HZmFSX6XCTPvxRN",
  "key49": "2YbMAw68b64QpSp6AQX8xNusDGU5L7JBB7v5iaCRAdXnswZjfo3pgz81AQhsw9p4vNQXEt7qVb6pTw2stA6vbzRF"
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
