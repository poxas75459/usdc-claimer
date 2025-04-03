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
    "TFJgnHuUufpdbdtWaX1Dhofow4nQJDdSJC268Lk8TdpvRf9JZyGmo8BR8k3neCq7S7PWy9AiXbSvgYPCnTMTU5n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yPgjS7y9nWd4DgfNB66foqoDRGYN7e3evjX9dfjjbt8sWeMbh7vf7aKH4MZXCKdZdwX6SAVpuY8S7U4VtVtZteT",
  "key1": "4AMw6jYtxa1nuohJStrXiipYKEPZi1urASHGiF5nae4mZExHruH9KUoyhv6hxvjtVzryQ4GJDhUmyQZYJYW396BD",
  "key2": "42R82f6psiv3yFAnehunHVB814JZUeXS6kCxa3tutVtLe5FGMJPdJdmrmtz75NUTAJXaob2nsTvmwUVF9jLoG27P",
  "key3": "4yUagh9Vq5eFHzkxFC9KXcbrNwYkwjnw2paeh298nAtKqfNzER97TLaEWw16hfLmbdVwwKqLnzZ3DqxDaxjroqbw",
  "key4": "4QrPXhziK8PeHdc5d5hUZ3KyAPedk9jHysjSHF1L1FXJ4Tu7PJTEVBNhAC3g5Ri8K5zUdNApfNsQBKin9dqQsWfT",
  "key5": "2NY8ZXwd6G1xX8KFZXXYnDwBdRiDPk3GSthaCkBbP4vJeBiHrbbH2mx8AYcLxAp65m3qAzXg7n5SStmsHBpHfynD",
  "key6": "5dnCJT1ZpaT9jpHhWHbZY1etxckZUXRretV9FJNQ5C4mzvmrSjchUe7qmZNes81eFphTqUvoNPaJT8LdUtqXAviC",
  "key7": "SAUkx5EcnNwMLVVvoSwJJ8SWN7YsPzv75HGrhnyCs6ktBrLnwgzsteRKBY4TuQ27572Tz5TsmDR9bibJwPUDGzL",
  "key8": "26gQdkhGp1MSjRqW9iTADHY4heEmpgwhv4bnDrEjbvvyHgbymCaiqCzzDAXpysyNzrwiadw9suRsbGSz7LUk1GhW",
  "key9": "5r41CUQyCSg8jv7XQwFy1frwrXm2xzcSHbgoiyk9oT543DHdoNTkKKfMKTPBHnFwud3NtYakJXoBbF8SvH7o9jrm",
  "key10": "nucggYJdEZtt46msbwSaV6w36P92hfjAJ58eRggQXLUWpiPrMxobbfnAWZRxErT9miYWZ3xMHpt5A5E15XWjoJM",
  "key11": "2FjCHVFo2NFAt22k7Y5fg6yUGrctsCStPgrQa55KBBEx5f1tFkdjKDCTo9mYQVcujeqp2ABWdLBbtyZmhwgSRMR",
  "key12": "3zhXyHL5uobtQZa4kMwcvJhafVmMFEH1vWdu8GdyxihsEFh5kyT5EE6yF773rvftrw9efwSSzy4uFoNm9rTyVjWH",
  "key13": "4VssQUuzPBUEj1LBE4oHjjsCVGBYsakSy5CpWfTWeGJZFNG81UqddmBqpWq4uFVw7wByHcZujMAiavJM8uCmMYNe",
  "key14": "3u2QRJct2wnJoLiR1KHJfV1zysTemcuesHDomE7yxEofeo9pmMiKXjvHjqQESQcQMWCrK77tUighLd1AcnAaRLAf",
  "key15": "4qhLMhESzUQbMyJp4TVA3Mkyhzd72hUPZ6jduvHyAUqE4h3KJ33y8Lpg4y6dnH2cdqUwKB3snHQG5LpBMZcYYMFs",
  "key16": "2E9B5HEy68gJa5sNx2dpXtpLUiz72ck8keZQQYegNjq2NuKwjyyAF7txiauU5JmrMaiFkJX7pgUteRjKCdU6Z5ni",
  "key17": "3dyGZ9CULKGbbaas3Wf2uYvihvB5ShyFxVfMB8gjt8D21hMKGzashAiMSsnjaipfkUnDLAUMQBTkTLVY6X9TQP7F",
  "key18": "67Kat8bvVvc62hdjr7hYrMJJ85c3ApcGLrmtFvfNNzTKzq6RXrrTJUAgcpJ2iRur6ULuDgeRDGSCXtMjQ5yaSCct",
  "key19": "3fzjJZEXq7LiDPqetwa6s5AiUQJuMX7AsrxBCngE9dMUZXCbfm6eTxJFWYqadrgqxVGMYjawVaCZmVCTdvaLGepa",
  "key20": "4rRLTMUhzvpWsRuwymvPUTAU9mwSjsFNXDKV6DDnFyJerjHb9bmxo2pRUe797QGa8Gvc52htVwqrH6XTzfineC3q",
  "key21": "5E163LFf4SvJJW6NP4GKQWStxEadD7woHbisCadpzQ9wZAYncGg2GPpL9J6eYiBZASCapRdAyr1mYvoMAxfcxBNt",
  "key22": "3abK6Gw1oNscaUjLuBHrCFSBiuAFNdrL1PVYpMyhi9GewTHuyd4zUzs15vC4K1RHn9ExKYPqBjh27vWoRXwxL2v1",
  "key23": "3QtKHs3qpLSphzWFFdZaUgUpHdB7eX37PBr42CPC6y6sPETRad48AQi3yrgsTPKHgRoEhN28FAdchFuvs51QTKsB",
  "key24": "pnJAYNDB4TeG1ZLjbExKWjWv8LZkGKFXwz5dcB6k9nmHYgqiss9CZggVvMHp8ohm5m3bAyjyE5znTsVuLXE49Zb",
  "key25": "4sCvixGnQerWy6Yy52PU6VjLcTmDaDWwzXe16TBbPUcvwQHFx8ZGKXNm7wAny5pcd4WY4t4t3tCihA6EQwrtgeCi",
  "key26": "65Fv5GkYUptBHTWWWNASs7HqWkRSU1Mkxy6wwNzUKqwvWeRss62yaxButma91Ffi5Q6jZBEry8ZkmfJadeRB5S1h",
  "key27": "584b8jCSgLVddJNWHBDTCpzVWnFYLH1tX5aRWhSkx8oNZzQqHB7ERpq4SbvsLvAZhpydfdLrJpyU8DnsFfTcCBVd",
  "key28": "boedTAsiAq8QLzzQmU8LTtBwmEFWtyXvc5haGWWYQxKRmG9uYQJWYjRKhBxzeQQZKVUKnGhADrqf2NBjRbpAQnt",
  "key29": "4w6rCZk5bS64fho74SShWaMxW6gwrJJoFKYSEowTJh9gSi9VVrpFy5wmPDguc6jnjLj3mXCAYeTpy23VAZ4sM39T",
  "key30": "677dHHT6NiUhQUfoC1ergfAAeXjJFsfw9wXAmvGsR24QDV4BLxqCvBMg1p52fNc4qUG5Pz24rewydvXq5TqXM9gh",
  "key31": "5UDFh2rnp6PCGoGZUPCjcgTFitXvTJE3i2SdvGFFmJHUiW38nXzsZLEXzy7TtCcnYk7LE5Dx9zFfwuKt8Roh49Zs",
  "key32": "4YzcUZjaksJTxaFxm2McYoFmK1GDL4xKA29q68odbpicX6MqXq9KX6YcUScju7YJ4j2AqSpFLwgwui7nk9Erqe7U",
  "key33": "3ebqjEuPGijYrYzhtMpAXyDPtja4KHff46CdLxpdHV7yfcQorZqYUzcMaREvaxZ7yPdfyxmjj6YgSUE9f7Mdav9e",
  "key34": "5nCWUcpuWaSm4AgEnf3ZK51FZ4EG8E5Fc94rTiSvaKQwukwphK3F5JRG6kFraxrZmvqQ8QwYsYUbYcvDhp19xhpF",
  "key35": "4Yxxeo72cHRxGvbWr9PRkNSJ8Sx3pjEYpuH8U4aEAidYxxfCNPuWKk59CqzDJw24BbTxfL82etodddLgLfrua6oD",
  "key36": "2MF3hJtRbMRekdXMNCnJdiZGZ8o4Bd2AUjvjXcomyn1ukzAooy4X35VP7sAMa3n7w1ov96UUn3BmGiUeDU6psqwx",
  "key37": "2KVViDYHW5JRuPhEY9UhcVFsthTpsNAp1WjLSaAYyeyW8BBAn2f3117AhdXX5juwtEhDfp7NvaGJS5e452QP4PWZ",
  "key38": "nx1FpiBWZcJVPSM5v5VB9GemsT78c9MjKasKScWDiCKGBcVrWPKPbT6z1pTTjqsXMSLhDM2nVDjnLCJYg7D9XSg",
  "key39": "2CXRFUa33F8yZMUGK5F3NrhPQExpNTWBTvmx4qZwx7jVpohxkiKRoFjVsuUorUnrexxpmWGj55XBsQmAF36WX94A",
  "key40": "34FpADdEdEfms3GRgPv4MH5a7iguEWzBjd1TPcLEBroka9Cur71GWPCEqtjVHqSumNJmignjNNEF8wvH8dFirz31",
  "key41": "SeqJcemtehQSG9MBNxUX5qDJX1EtP9CregbTgUdBPVkx4FfQXrxrRYpQRQnGeYYebczPkzsyUcQaSjaG2DE5Mwt",
  "key42": "47vLn77RHXngAbicHYjXGfk5KkU42i6EqkQEzGMgc7REF8Rw4bnAeXq81WfR9RRkdcz5hSw23mHvXNdA7vJXWKXz",
  "key43": "4ajX3KC1hcomjSviujYLL4o5xVoQ6984CZ1AH74nQyU4KLZsrQCovscT1TBmbkdqMVNhyeH3DPaPXZ5SDdqcF8Z8",
  "key44": "4gZgGo7URwShtn4r9YGPvbvUwAvaTed27AVhjNiGXuc8DSsf89aWe5cjWjfag79Z1G3bwmpL5k7RyHpXBYobhmNA",
  "key45": "2awLFsdgxLnbwXzqBhNC7fuimWxLDVysHYWKrYivSXZ7aW4Wxq9tZkbTZCjhMagG6XcQnFSeVrNyhuSPGuL8JCEN",
  "key46": "5PjoNQMwBW1txDB2xidVKt3NMksoqaquSkEVoyfzxcB1rpCsdLXebYTQncJbPLXTMoWhLyFcjyE2WK7hAaLDScoc",
  "key47": "29Rw6mU2RAuURYgDmiAjagjnbPJUoBc9oRxQyvCDnqueQbfT4Khr2yENm3Uy6udTt6j1mKGYhJaGP8r8pPoVtwnR",
  "key48": "XA8VqeJ7YWgesA38RQQuPLScdYsgVPQLnF4Mpd49W4UKn5o9YqBRYL5yJ89evkyp9pupEuhhcLV2VRUhojyqCEK"
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
