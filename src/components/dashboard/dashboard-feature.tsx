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
    "SJCBWouwqDqe7k6Vq7CvyL2YrVCfNnZoKUagh5iXH5aaAJqsnkLxmEV84bBiNGxn4y9NgM1FhTEmDrETRLfWXK4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57PNUmBeDpFUwFSUqcvVF7snY77BxzQQ7krcnPAdwsV3n2CAHHb4sUaeknDp65Jmt6SnA1pABc6kvwFrmqoDqEPe",
  "key1": "4t11jXXxV3G5jMZ9aFaKcg1tHyrCP91viRsnfpNEhpuWtE9gixkXMCTJ8Q9i14qzo8DzedrrYiBVc9TgjxqijTgv",
  "key2": "62QcVNXSyBbtAdQNRip5hBo8MTeN7eaMsWrgQXpfuL3icznJ1qR4QrMEtoTE5FbTN51hH2NeEFwakNXBBdJcwkrh",
  "key3": "2w2i6qiRWyXA8eFEDS4jn3uTDa5m3E4NiEnszggZo4tADDRnySSxpZ3zkm6Yt868CUNP9tuFEYzP5MtAP7tv7Hau",
  "key4": "2AYPr5rFaxppx6qxF7Th1Jytsm81jcVYj8RqbPEy2R9sZBpr1JkfjMAah79QxQwS5KnywkqqPuFz6A8N5GZBxjzh",
  "key5": "3ZqNtwRXGK4uwALSHJ9gUiHfN4hUxXd4VFv3JfjLcVuPumdUN4dLemqXdAEq8MkGsci2Q9YtdRM6gEzQqc3vki7U",
  "key6": "2fHHL8TeacxQWK6DcypEjTtLPEkH9SEaLxA7c7YE4ZchaJaCQutVK8ugVZMRk9bNv4xqjF3Q6nAPMAEby4LefxgE",
  "key7": "mMfQF1vL5t9yEz6ACK5WKeFseZxKJUJKjqy47FirJm8YbvNjS6XP2aCq4RBCJnAcDVFqiJpJ1WgMc1MLrZaYNEm",
  "key8": "5tarrDRPY3edrG9epBV8j8Wk1nF3vYmeg8R8AEBnW8MZVa44fPvFi9fogN9yZRgPwvttSVbVGAsuF7YCDMZBa1L7",
  "key9": "3iw28t2M7r7BzYnb7cY4Koyk2mztAGr5QCKSHC9sXiJq5Hr2VHNFPrx1ERoMbFUBwZarAee2qTxcmuG44ayCe4XR",
  "key10": "4e4M6PJezmUG6QsRmeRT2JknMkSAfxg8cm9U9ah7qRYJ9Pf4DKqtvc3tBZQxJz54izfwihmHXzgN2N6xsRLqCo8b",
  "key11": "23cFfZGvk9wJUkTwA7WgnPvk7mpVUqcZnQpzbBqQtvVUKKUiPqDGanzQbB9QizAZy2z6YPqB6HAgidRgW9UvWog5",
  "key12": "3eqxVSjMpgcLGVjnXtydh7gL8W8s5qiAsyat5TL31KCqscsaE4duqnPHmoqEAzWtwCc8QJxfhBmHJycua9d4eJKv",
  "key13": "1bfimBoZXykgDAJWhYUBFsU8YX922VXzxyzVyhAxyv1ex5Um13TzXD7dib6rMRzQUpAFMoNHnLh4gsSL7vsUquq",
  "key14": "2qRrjMHEoNoBsV3Cy9voLyy7x18gpXgqhoHfCe197pEz6UpLzmxvBJoqBpsG4NmEdUhRbQi8XLoYUGpVeZCMwBU",
  "key15": "2BAM8TFz7ZVqkWv9QmNXdQTNz5akEhTxyVHxGibF2LkwPeJ6CVV2tj3strK9fTvtCYSg4zbCstAKxn4hAdy7h714",
  "key16": "2NY1uvHhQzGToh5wcn5D3FXB81E7vxcf8vFDqGivR3yTbu6TSLdHKLdnr6B7iPaQygHzgZ7afNicdteuJ1ryqK2Y",
  "key17": "3e5QT8tnGTm9TREYhqq2aCLViR3UgPAAXp4e4KVqRkbWBjBem8Hc3e1m5TfrdNt9w5JhnVvWgZkE1PcDUgcStvZy",
  "key18": "3xPnV4canHY83NkoeBz8vtf5Ded97rRsjrmLsicM3ZgFoRqXjJi2iUod3h8dxdv4H3iapusv31GuzLmNvFTQkjjz",
  "key19": "3YxBuhffzFarQM6rLJBTNhCUJu5H77zdNsRfjtL2ux9zzusyNLU9avLX3cGpkmXFF2757T8K6t54cjB2t4gdWeyH",
  "key20": "2vjqgpYLS8RfcunjxUPBNAKSJ9CDmA46hbxRe6ut2fxMhToDi2dzfz8x4UZvzRtY5L4AMiLyzQQQr2CadpFZHt9k",
  "key21": "3Lyo3UZfZhc9hFeu9QHjXoEHvYwikBdemfieyKAWKodbdULvSqFm3cU9JoZjyHSgxkvStzFUw7Vtq5zZRqCW8tg5",
  "key22": "QJZDNfYhSL9utjKttkme8QXhBbasX6vjnrvkea3QyJ6X6pCBFuHFjEgd8z9WLWmtWTEWo3WLJRU4pLqVFe5BKRL",
  "key23": "awH7pJ7CZDrXkEx4xd13N3KyxD2ot3KagQ82wE3HpRQBEcj743Bk9ixBe6ViSXyk6Z5wCqAP5v3Wfg5m4Jfy9gu",
  "key24": "4Fyg91vwRvYeN3iFAEvuHrgxbC2RnF7jWtjrEVBkB7RUn6GRH1ewHsNAPGPtEzfrHsWzCQNPRoX9PcoaNUY6YGfZ",
  "key25": "5dc5JURzcFMg9FV27QgFb4wXVjK8XpD8MqLRHu6QVuKzjCvPBin5QivHHxJNHhqo9ygYXD6q6Ci3f7DXhMyYejTU",
  "key26": "5v4RqA162drrnxBGTshwbrZKoqQ7mBKiabRiGdtJTnYMRgKVWkoahLZDzgrFzx2hcHJwpphvZsDXkHVCLVC16xKy",
  "key27": "4eJDXV9sbqPevSx8jjGT31MfoCPWUaGUQ9FcTrL3Emm1odLVddyBvZ6Y5tRMXH9TWx1uHvwt4cnjbRuaLC2HtJkE",
  "key28": "eXY4NgUUtthHWewtDnLhjaVsT2kZ3NMXvdgvaDcucEcZNnqeBJU5SydLpjUCdRDEDmKo9fFWdTcsCELuiW1jZpt",
  "key29": "4ZHUX7Qejo5GCttiZmQ1uRp9xUzgs5mCGBY2bAEjJJ5tqZBj8zeLGSRy5NdrEpkw7z8q6dAum1xamtKiYERTPnVu",
  "key30": "37g1LtAGUPDp8nKG6Qo8eLdcFV2hQbroRPS8qNMHnwCP6DoDAibEvM8p2J8Fz3cN9FrZoVbmHFdSE8QYXQ96txh7",
  "key31": "2QYm52hDJXK81ANAqxKnxCrhmPjkNkx4ZXo3FkM6m5Nj7rvLqeKjPVjgy2tYSpWeCzxadRkixxm8nW6cui4gJ9Qy",
  "key32": "5HAWxVXcUCwa6ocj4pW52PQetXQGh9Wj9tqCP7pbnoZhXwUEmaFV2stFEtwv2WyqQfFVu4EBw2ZrpicL6dHVySVP",
  "key33": "51fCzJLFZ4xjP1jfayRUQLeR91c44DQRAp3hHY7Nn2Zerv6mztCg2x2fiwJ8cKhubJHjnYNwQU8UymPxQEFVujem",
  "key34": "2MsN8YTvhkZy1hTTxkgtLuukiZHgBEsyptQ8cLusmg4X7cDermcAmrjuPrXyZXcTXKaQLxLVcWJ6akkS7g7anwUV",
  "key35": "4hWQAsmsrCDzuvodpJHZwQscjgJb4Nzaaz7iK2qgq8Gb8sgz9tbcJsVZAbDxr5ACBdsRiXzcJtPKJFgXDcwqz6FB",
  "key36": "f3NUKYtwU7kVFNMgTNnvgwZqujUmSHrJdm14iEP14t2MidHAP7iYAjGwJpVqH71UnVMDWcs8wT4FDeu6JhhFq6o",
  "key37": "3drrxG2znkUf2N2QLqa4VJRK5BmBcGDtCxo3oDLWhAe5pRkpTX4SCS6CePaBaY61a58gJTtZ1fMtst4Q4njQMB4S",
  "key38": "4DaMzsBVrk2t6ay6FBkvk1FvtYSBQr6iTpNwXXNvxciHEFoPYwefrpMWHP7KWmHwHQWzY5Zag73GZRrTCCKCBgck",
  "key39": "4m156A8PJZd3EXN7i6ydBow8e9ywhwcarMrqNQENGuyQgF9SnyKHQeQ3whzMiDX15skMp3j7befqKrJQeuVdvN9",
  "key40": "4VkRVt4Hj1yxdCbCy2Vy2UaDZoGdRupRHN6qKSKXFgRx7hTSNaLuheBuorsumLwnPWwStNSdX4sypRNUT8kYN4m",
  "key41": "5uNLPFzfwiszFEj2LuTuRtuNtzuDSsxuuATgLA2yE27gbFbRQD61bLZWBCi1Rfr3sCau9FLV9sBvYmrJ891nY2Us",
  "key42": "5bX9eSQ2oQm4jNhQTxRbC5mcwWZb4GEmKy6HEv7YgKtjo5ARuDvjDhEJkamEV599z1qjFQizhQrcgb9pBf5qWMdV"
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
