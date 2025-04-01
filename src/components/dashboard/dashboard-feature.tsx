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
    "29a4HF4P3fcVxeBmV37R6CcUMzSn3pLECU48HsreaHehU8cjfdRLJFw4zsaFW9bXfa4EwawSUGREq592ZBZvZMoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z4WgmWWBJ5ERQFogUiZ1ezdZvU494S8TT7P1gQuV4bXsFMJqoj4sP6Qd67d4cUku1qSrR9zYQK75TWYiYfgDzD9",
  "key1": "4DAp7Rpm5q5xmgUrharXxqsiTnhkSvk39X72GqHuBnJc1xAA1TFFNFPEPjvLJ4x3Ybm1TTaRKifnNRmvsa1EvJ9B",
  "key2": "2vjA7EGNXn6eRoj54XU56YaDXDt2UzeNbDPmcwKC5XWRxyn4zgvJoaZ8YToyXPbDrcTV6gbTYsBQgLUVRU4pgZGn",
  "key3": "31kHCuv4gkjXuTGCxc8oEHxsdJeMkueVGhghiFTMLXpvxRPVPWAJy9ZsDripvXy9HPkXBjMYp1L5szLkZsU2m7Dr",
  "key4": "eac6w147sCxvQsBcdWgmywWugQTxrug4DR78fADwjWuDw5wJtT6J69Jmkt3rbGmutkKp4H2vPqrGe19DtU1QYxW",
  "key5": "31b5N2TMVpUhhXJKnNoKgF58dfSdWyf5K9mGTC2RDBUCEJJQeFDDi7qHpkziYDNebpFcjiitCnAV3dChs9vMeREp",
  "key6": "J9Y3wbd4DmvnbRjag7eXwdMbMJi7GhpiM6REpWQ64TH38jkmMd6MpJjjxn4H4ed4E9i3YaiiKyN6JabEF9vPksu",
  "key7": "2Wx2EkERuYUeYjcZCMQn8Pq4VRs9dV3GDfDKvw9KoT5PwfFYUSqzgntfoEEkVwRQgGi8JgXX5sA1fof8Drs6gk6c",
  "key8": "3PqdLB8FfRW8q9DfDsrmt3K7Z1ZksAi8D134ELTjLVd7KWEbh7vnKEumcMuoySvinUwjqiZNeA88nxm3DMgDajVC",
  "key9": "58DKy3TZ3XKaeWKkvnJaoH3BFBHUDG2fgnnRKNLFpeTiXU29MZ8Z5ha4oxGEG2jWymFThLAYzPkXEBCYfUVp6Fi3",
  "key10": "5PKDUGLY51eCpcub2PRZLa7yt6e5fg1vJdPDU3JBxQpX5FfPtgEEuAYCBx6JgqJbu51swr5wDfomMJ9sY1U1bR4X",
  "key11": "2AcS5o7rSeaJbz7STUQSfKDxCrHLbR7T7Urdb4X9usDV36KoVpgUN8vxyALeMdWukzVHcLEfjcZ74PDwQ1RgsUzh",
  "key12": "5EGDkgf7RqoHFsKcn2N7D3nTMC8xGcGYDNDny3wQNrtMF6v624PpBZPYiTfwcHC5QG1QcvrEUMRptAz17j2xiAKE",
  "key13": "7sZUAYqURcqBYGq2KtFP4XnkMTi6Qms1FVXKbeppU9mtTUX1pZkqdgFkyPyLb1n8SLBpn72ksVf2GpYxBXUHrJo",
  "key14": "5WQMqx8QPBXFGR28EGFkFUuZ6w6AR9XrXztsPq7GmXCzzDU1Nnp1TE1TsLDbfgChJVfsybiz11Re2rHPwu7v7gwE",
  "key15": "55dAJuNAgiBRdxRijXT5Q2vLBNxEkpAmitygv2aKCS3uaZEdXEBS8zrFqnUprB2ebWMHxrobf3hCU1UE4yjNfrqU",
  "key16": "2kKod3vnXttKpApAj9hTfZS45eYygtSJ62KVHH695JU7TvdierQr99dkDukDMVGZ9AU8GwE26ZGrYZH6SEAiE8Y1",
  "key17": "5fdmyEuLqwHsGcxCWzqjZaYVWh63H6mZrdNi9Jx96uEh2Vn57y8y8Zo54ZXeyTUVvW1s1uhdBCwcM4AiF17Kr6BM",
  "key18": "3vQPxZXF4E4JiVonLtUudHhdRj36MMf1RQuUHFbj8fK3fveQtTRCppBRvn6uE5BvrrjEdfmsjgW8vnuqHf9mkRNG",
  "key19": "3TZjiv7BNG4jPTKvdnL3TYu2r9GkviALKYwYHeEKXJwJD32LTvMssGncDhSr2unkZUfiUM7kEtN5VuNpkfEw9YRk",
  "key20": "5ZiT34dwmwKkSFAG1FTuLaKcRQ2Z7G4Tu3trnKqCWJJAorVi8Vj8TJLpbF3rckQvfCkzjkNYzHDbwxkXLaSFsQV2",
  "key21": "53xaCFoQTQHCxXVddVQKFHBtDzHMvGSUM3QGghdaPh5HWHsWL7NsHNDTot5fXdr15tMVikVtfdFh3JzWT8sRVPNm",
  "key22": "nWWmi6b9Lce1XsHaPYLjkFPfBChboku5teHi6qBCHY54ZS9ypmyvkg1kHYML8wPfraPrVdGvq554w97nqNNK1gR",
  "key23": "5UzzxFxXqyGNZ8dJEKpHibiCTCcqaaagj4437zRj4Uws7nw1xFkJkaRuvYpGh7VEMEieTNUHjmW1x3dTUk8gMdTz",
  "key24": "2C5HHRjiCuKiwpZN5KUzNX3s5gV8hqt7sXiHLn1YePyHfw4LNBvwJz9mKyDx33ZZjxcepp7Ar2Uw15urEPgQZvW7",
  "key25": "67fSoDgac9JrFAPogb4TNJnSd6x2a5aQzBM5dUMDzjkx2caXC4k95yVpZidoL6Ac2Xy2GmGqV4irUZhVBjVPJFXZ",
  "key26": "5wwBjrLkKwgpLmGLt5Ga99RfEvDSjU7xDarJBf7geA9pzTN46niScTzDKDm5JnzMiwc6n8BxodPVaHAgFhJZTVA4",
  "key27": "1gwwqPaT65Vaqf2NVX8e6zCnT5FugWVNE1enSKpdeQ45fVEM4ZwT6EQya45286o4TBLciwBJFaxpJkUCKhD7CW1",
  "key28": "36ZskJFAbiC561X6cWEGezXd8J2wnd6S1Vm16nczNhuWxZZt6qM4K78LvJVnQ6hhnzuTbVyNg2wziFfNWz8Xk7Pk",
  "key29": "AJRYGo7DtiiyqKVyiVB4LfgnUrNHrSpePM7UPc741mApqecPbgcSkLGrQeEdCTFMAYoScCGKP41QKhdwqqnk81M",
  "key30": "5h5nixjUsv2CAJK9eWd7Db67TZiTWKLdhDZXS7QGng7uxx1Z2eU7LXurGsXzSAmytzdUQFMuNq6wCDJnNG5ZnLPg",
  "key31": "5V3rHeAFvxjxTG2GLetqKLKfXC8ytTT1b2Vh1JSgJnqA7g4RNrMbq9WzC5VGNj93ZynmnBe5gmXoZi9Lsv5dWk8o",
  "key32": "2bnkrYb5TE2vfsmqzPjattAqUcTwwKRiiivHLsYPJGq3MvX5gUQpxB9cqE8NAWTTs2uG77A2JPqpPM5SmzLA8ho",
  "key33": "TKoUBZsqxncSnkf5W4495AHHJrVk7gjMpzHwBYicVwpgneMRVoCBJheUpha6RGYUmJDaBR3ph5oi5xtY7BSsB4S",
  "key34": "eohzZUGh5X1dXm16Ui4GzHKifwMxfxpEShzpRygHzFQJ2Tb9rsuVahudZCo9NntkevgMcq6XokQyeyZZEwxRQYX",
  "key35": "2NJVy9BpS7YntAmknqPuE9mvU1AkGEttm4zdug55DxAGkFvBRYaRoYnd5M2EcbrsT5mGXh9SeDvQKVevKgXf6piZ",
  "key36": "23U2gm413doAP3CNfy7nqtyv8Zj5pqw5e7skbBVabPcM8oYV2cGGBgLbpPMvmQNBMiaJWmdvViLYPXLouyW6iEXJ",
  "key37": "4puyDmjzQySKnbDZGbuQs2nH78xprrWALPob36y9VBQ3hv4z7qXPMhopVV8dgWKjwEsrJYoFx2DsBK3fD55TmzVv",
  "key38": "4hu9DzDoBoUh6oSZugcwCX6byP7heepWaXkXcgqZTzvtLeSoe1QWmt4Tf3zYJcWMArHmz9VXDTbcRL9Y9CarKZYb",
  "key39": "5BGBHYqSG9ZYaBKcpjaaxCN7LecFZKAEDeUdHTiTmjTFo1QJzJXpd3Su9P3VoZGwu2exeWPRbahZYKv9skriUcy4",
  "key40": "2vbzxT1wFawbVkCLjageBE7bvvA1KdzKU6KeUx6mUrMKisng7VSwthKfoccZH6uXi4xddCDJ8y7DVkjr7Sg6AtPa",
  "key41": "4Jz968UTgHHZC35cEVXmF5Q2vfHctaGmyBeyCWwVMtHTWZ9AVXjetgqPbme7yRg7L5XK8z7SeyqB6ahzyqXB1RJ7",
  "key42": "4nEmnkNQnr2mVbfiizuQdbYsFFRhLZZd4SqXobJ41FJu6JQvV7qmRGmh7WgVDRKDh9BJpL3xBhP1Hu7jd1DYvMz3",
  "key43": "4L91ajhrU9WzLSVNWJbNV12izzK2mAB35CPEsRF9aXX3cdeKJzZUqqLgWByVoXCaAYqn8wSoZMEKDyvqg4Ex6afL",
  "key44": "5GgvmvBWaM1DfMEy4bfTcqGg2h2UyfLzPkLr9ksoaC6wVWd69Afmhd6imDDqV79xUn22U7yRCybQAzJq9YEN9c7V",
  "key45": "57vBJGyEYq9RZBYw27d64WP6ajREN4k5KqABD4wgedpjhRERkpyjbbAiJ1ZkXEGRCnio5oKPNZKAeXWMRj4ArteH"
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
