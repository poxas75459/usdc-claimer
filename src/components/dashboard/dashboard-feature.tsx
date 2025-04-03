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
    "435QQJJ1ESnedAADM5kXtmkypPS53WAAuEVv9mHNhDZNDh1NLq2AS13bZPDtGBAYg39JEZQEcqBHUwktixk7uejE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dnftgpez1vVTFMgeBjKuwtUbokwKcDRFs7TL84p9Rmy3EnJiMQmTfhtSrqsRXjEUE9KJiXJqfw5mjvenimGn4k5",
  "key1": "j7vLsfyJexy6eBLXysXmDuyAThbGQKMKgMFT62PeMPdxKj28xj2PAXPkeHhRyovJU23XgYrJLsjbXPvjrtW7d5n",
  "key2": "2tW1Bx3CDMrjpuKV72g5B2vwboQPdddukn3QY5kxh2PDMrwGNu4kt79qkP4YvL8xC79Tgq6CNvc1PRC69vpPpoSA",
  "key3": "4DZcRTYbf9dAvKR2FXN3TQCUQoxU7J8dBxdGvmETCrzhoUjFL9pgfLbmABSaJ5uC6hUuZk4wGpf7ega1oKzyAQX",
  "key4": "Fks1RAcrDfoEqwzZo317qjMyrHFJsGvxzuPZ7aZkFcGFhnYDSKFgXkBreJwnLH6P3XenfGm4ubcSXjcAMxr2oGF",
  "key5": "2w6s4mjvkTXsmxXSQM17CkU9nL1SBaETcxjXuKcUSGk3hrHoKCm5fv2fwtaQFbCrixCWdk8UjR9bYLUrZnr7FjfS",
  "key6": "5tjk1dLpgaLtXhYCCFDPP2YhT7E8fRTmv3nVrNans5qqN3n51WH1k82jDjjbYub7Ur7zkmJZQ9w37m3z9pBLRbk7",
  "key7": "3TYXNNBsMwthKhByzWWezsxJWhqG6Rh62Wg7mbF6CwNyFuFQMzUrqiMatT2N51f5AFAne7URF49ZL8szh2eFASqw",
  "key8": "hUoqoX6QWKj3WrqqTirgRqNdTNRGUZ5GDSaXiQcJcSwEe2YzSiWqHd2PhUZzCfZBD4vbrRhtEYzRQ1FbbnEwHpA",
  "key9": "5VHeEoBQazeYMhipXSt5wWUkkf2vf5pHxL8hEprKpAWvaxLmk8QrV48XuktyBKhr4wXKVqDZvXABWQsnfDFL2oNY",
  "key10": "3xqM3z8TMh6RRGTbr56MLM7cTPGTonr3N1nxBooRv84CVE3c884u6k5tg1svn9msv9ofSpNA9osFXjgF9uadT8x4",
  "key11": "VLWZHdQ43Enm93QWbCSCWs5jbmedpgwwAtnzMPx2XD7cV3aa9z195fexv5g97j9dZdPucDUY7Gd5hbjYyaoF4Po",
  "key12": "aEmkJdPjbgwGj8VPKB7tqEsn7Lvbnu5KcAWrmEzAgSMgv1R3eL4EqyttdGgxG1dajKNUdXCZq2bNCZNbu7wZoNg",
  "key13": "43V5Qw8mnBn44RP7yQY9b1y9eH7x59KHNe6wjYFiVBnFVXwy5ssqkakzhGD8nw35TW5ZSdRVqs85MMvmn8kfbtpg",
  "key14": "2KEMfJynw7XQDLahSsbx6h3FQxvP1Byo5jinastvyxatHimdgfTS83wU1JoWmM2zsLoeY7KXAABMDJKeHpyj19Sz",
  "key15": "49hZEpvtgCHHBwBjgKuUXgJsoSL4Y7y9QfgQ9nwTigj9FBzaCkgWinvQmYhnXqtb5iLu3J9w3tZkRtu1xLPruwFT",
  "key16": "2EL65cvr5jJgxo1Jcotzr26TGgtdaKKmdG8LkE4gSkPZri2f66T3UGpJf8bXBNDZCStMbFaYxnqSR8dVeEkLKUTY",
  "key17": "DVP9GqwwRi1KVMHjQpwewrvWT5SUnaCMDVWELLaHrqk77zDZQyf62x5GyJXyhAC7GEZXTwj4rTJEbXCkDVmXHzq",
  "key18": "5b5BPjDQoucJenTjJZkPxcrhUnaUUt4J2Nx8LGAM1J7dP2CzGS4BiQZtTr5LfihyTWDrXdHkXPGsdkRJ7wTfRbE7",
  "key19": "3DogJpEpm7HtMsByzzv4kCznmTGobL75XqcdtHRvny61AyU7bZtyVvoJHxNHvvTwnZs3eHEVL9toXMg6wgSY2hwF",
  "key20": "5BwBGjK9mGQzZcRBTbrqe2uTjCPNF1jenWE73x2zDT1Si81v6S2C9YC1Zmvn9FA91NScfn9JNfwLDVqHykqT2oed",
  "key21": "4nh49T48Pnw5rMQ13KVQ9VWZvjS2Ckj38Vz5Y5hmuPRYLHj4B6DU3A2NV1eGvxHQ5BWiKjSB6uDrJHNDimmdqn5y",
  "key22": "2beXyzoW7UBbmqU4PKPUbV9gwTWkH8dsPh5PTvDGrBiiNGHYfqAT9PL1hyNnxG291MgEwred5YAeep1poSwSQtT9",
  "key23": "5ftKuAwy3CsK2uEjgbdDZorha7k5ArynK8fXnzuvM2BqBZRJuaYhe8dWNZbrYnj4pxnJhRxH6Bw6nETSht2z6qur",
  "key24": "3WmmpVD2Uv24pgNj9g1C89svjXgPyQmQNHPHMri3ArZ8v7aC9KR96iR9gfmFReS5otUuk4jATtpYWiE1piYJNvqC",
  "key25": "2AmdxpV4Hw2xHFDk12GDANgLbDkYyymTP3RaUUsAP35gB74JaqEFCqsbBPb1PJdmp9uNJFxgNRu8j33m84JuNvgr",
  "key26": "34phMu7RNGvj1CAz6ra8eebKR9GPMHfQwQhEv7towe7oV1wWU98Hh57wxi2cRfioZAAQJ17Nc7fndKsHLswgyMf3",
  "key27": "4rY41vwsPEcH18dFypwBy9ZCEkPgQrHF3qRPPL1TZVUGt9njmCpS9SGtXxxKhPj9i7hNt6varSxE3G2Xn8wqHPAk",
  "key28": "4vgRbFQadF3BMZAM142bFkgSGKVRbxYxtauvWYRdJGBwBTcDrcLLAHybe3E9CfcxdXEbX3wCeDtFSHhXUSKhhhKD",
  "key29": "5j4Ls1Y5aHx4oLzbATVygZK6V5mZZ45N5YEbQQuqdYonJjgUmVzMcqkDSwX1C7XGrgNxPi67DdDjEGf9DJQ22K2H",
  "key30": "5j4sWRzGRn33Po2GkjrMFRiVRAreQvmCgnEN3Rp5DZzzD5DpNDTzo4TmYZxvhRxiTykH94iUWKBGFHLWEvK6inny",
  "key31": "3Py8uCiFkwUFpPeWMxhn4Y3LUAfhxxSyDZnV8gZ1DrwWw568uuUnrWxf71QuxtdUxUaJjtDRrzohadopTtQAervP",
  "key32": "3sQaGji8QTLwCEwtyBuFVsEc9r4hVR8NatNPD9rXCQJxJCGck5fA5T2VGwZLQTgUWMyF3xcWsMyoiCPUqwyppV2v",
  "key33": "4qepd6cZMMNsGFmrXTrRDswePvycdhfTzDDkWB9cFoYStUY7zzaV2tqbDCKBbDpS3yv9aWjGS9hJQ4AHm4f7zsx7",
  "key34": "47MVujKnxpXBMks2D7w6dxvwn9DdsK58wvm5CKZtB8tMcSKAFNfhLpnJ7hr2i6o3khbroK4tdTPYZXRc98DQZPDc",
  "key35": "icDje8wryHk6t7ZiYNLddQrwy4kAbLKxeh3mQXacRunxqeVV2oUTYczGr1EkDUbgYP2yjiEKGY1K6ZkbZx6XL7z",
  "key36": "2MPcWvjWTFYrUECECUWUrB1ueFCv5e4nazSq6wxccyZhsTjph8L8m442RTZoQa3uXcgBR1oJHtW3sUmq2LxV1pmz",
  "key37": "3Xv16aA8d3UDDYN5V3hRwCdpXKhiZHw6U5nQKn2Xk8nFkM5gXt5xTT7wNkFNckfsGAD1XmBpDWzyqneSjtkSJzio",
  "key38": "5TNTn4bkBuzP5B4xee6auvbasUSsurZMdLGVgYpkDfry8nhBYuNoT8Tw3PSWvGKtQYzoyLVqcgA58DiuhY7PJqcd",
  "key39": "5GZSCiDEqmNqGa59qGsQiPmJ5qoANFGmNRTwGe515sBN6gjnAHzp6ygcdTqKEFhxsX9hELSXUtiQbiXsRrTyLKXp",
  "key40": "oiutxo6eSC4REpKYfqt17RLyLu34autJryA3Npri5Cp6udbWXXbuMwJKBEa8swrSaLa2h16mKXwGgNpGkkCmCSV",
  "key41": "Gia877hWyvaM34zcWfhLTbdNUANEjmrAckg8BgCoe8ZEEe58a7gW6YedCmXEoRUVVCXM5cYKcygd9mfovgcARzt",
  "key42": "4AocHo8txtdJLUSXLxY8LYEcTZiLYrf5S7NNRVcfQDRdnoMfoYFqLbxkse45btT33mkgHzuGmh7ykN1hpyKUaTUp",
  "key43": "4ei9vHYHT3FJrDnJXDn6A7h7gh5pPUwVnEN3sybgaFkFhCy7oi482HEEE72mxxhgYM3P4pSSgWA33Lei3dT73dn7",
  "key44": "Noon4ciSK68FWJjGeztVztGidXBQrDYx1gwqrSy4xrHiTA6MxMBs8kCZvw9KSjMkW9iShXfCZxYGwKUwV1oi8cz",
  "key45": "3GuTTDUeqKw2wU2GY8WrUZCYGktdJGMxm9Lh1XdqtU21Bt13bJ3HzJ7dzND9XLVGDri78WVmcWKRgV4Cm2bGQo2K",
  "key46": "5hQjMVUAHE1tQP3u5idQ2JuVyevi59PgheF5oVgZ77C7BErwoiSeKBHKj53rJNmVjQdJcrGtkCeer5r6DDpG8jUo"
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
