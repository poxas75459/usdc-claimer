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
    "3awifAeuhdsNj6enPZ7i4bySXi2abDj5bDcw6XEkdbimxqdW9jjWVBh6GnUE1GRdcxJT6P5K3kcFRfAKvkABcar1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "456xMkAajtbEMgJg4UwnZC1m7w9w3s5nFbbgwtxNNXLJn5XPjCeih1XHGvd7ZFpCstPZaa59BpixscMX5gy6hPr9",
  "key1": "5mXmuphvRdCWMYeF9R3w1RP5bLUyemBZ1BzxbNshyYjSZZTZjZjktc5aMjRkgkxWiTEoENgFeHpHnTFfjNjZRiTG",
  "key2": "2uyASPU18j29cpTzShXLKRumG5dWyrkFWdEYEM2qqP59haZadbUgGa7VZhF4Y7fGZi7xuwJrpcFwHGWWNgQjFqnk",
  "key3": "2ogdUzJfBXDhbawjzUNyVPajhMnUthVy2DXBJBMsaoi8bEDTxcwyzwg6RYCEyKdjq7ZfzsyAd1yFszaXRdb6CCP3",
  "key4": "4wh3KqTCiYDQqwtL5AzCsU7TXpNb2DJA2r2X92QJhLR4AKVFeU2GsqsGVrjE9ARqFnnZYiNautcn8xCgxjvW2cFb",
  "key5": "64kVrD5zZF9m3u1abnhqK7ecyhYvUQoTHvZz1J3YPVxak7vZbVbiBPePWsEXkf2VChktUd2f21F6YUwNtx3WcoQ1",
  "key6": "quBdaZxCoZ5kUbRopzDuVdkkmZ4zsWYVHsLR1C4SzzKaooULa9M3v52EFh8yzuTm3Q6fcVVyW861vtqQ8SYrQjR",
  "key7": "49tqqrUCTLsVTBpFknTmDTWWpxykRzTFjwwazyTAVDhLchdFZvJzZC64mBJYF2uL4aqK8dV9C3GVuYzqQq6WsnkW",
  "key8": "ChPw63sygS1Mo26u6a8xAtaN8zxv12mJtxTUakqr5KfKTLLC9cgHiEoyWb3vLTqACP4LKSe9Hxmg6H9qrSryNQw",
  "key9": "3QdAVqy1TFYkrH5hJA4RJqvuRc3GTkE65anjxaA8GyyfoyV56HeCUYBMPvPKkbtstTtqyTqfDF9xQme7rqK1Uer6",
  "key10": "4evo6RaAdxeAFQ4Yku4Bt9mtZyWGSGJUfQG9XPDqmTmXYM7E8L2La96t5NaAQcgtFaPebHpdTfqC8vqfLY1mUy35",
  "key11": "3du8dePep66mYUKdeMExHfjYnmb4h1njLmK6BTa1NbQGjsMgcQTi66vh1VFet73iqjLDeU5m2BQGKgnAUvwmAZNW",
  "key12": "y3UsYWqxVPNpqh4hgcxaLup5qQR91uFHdubJRX4CuU4Wr8VNaPoWEtMtvSB8pz9H7qoyEZpvgapbJbMRee26C1L",
  "key13": "wdxRqXGHdj6zACfruLs2zT72i89GM54cDEAa7BFa2Rf9bMztj6YxryeBmeJAHJ1Bpd6juB4ZLegiAMTRrpwygAC",
  "key14": "4vFY3GQizbxexCPTozntJK2WqpPRGA3Uz1f8QkEGBWgSwswxxAvD2dsxnZv3bg6giToR3r8zVCW36jT8n7ZaKNXL",
  "key15": "5Rbm5QzW43Rva5mAGGBwsa5zPQqMENrWpzw1H9i81ctCNzQjdFvRZewhtMbonSySGLoMRYV15D8prVGt68Cp8jXt",
  "key16": "2fejHQNoJDAtXhi2uYeRZzjviANfpLZ6yKHrpTSVhaio6dTcn5AL49eaS253wATs9vSH8LFYkfBT2A2Zo3uURBZh",
  "key17": "5VbWJJffPnUNZeT6TdDfX1qZmZUYEqk4NtxDtiyfmyUdu1HwT7tqnVFHoZCirx5KBzBNFSFjUKXUME4NN6RUvmYx",
  "key18": "2UVPSpLhVVnxEjV9HAzWmCpHUtr2Qob3eBoHoNAoZHn7jbfMSFy9gQ72X8PAN62tZ9L5Qfhm9sCzxd4zgkrJ9YSb",
  "key19": "JGdr2UcMevWxJfC6W6KgNCcV5WJ45BtZQDu6Bc9wvnjXYb1RyuoRebY524CyaDbnDjUFcPSKCf3aa8RdNMnZgWF",
  "key20": "Kfue4PQtRbuJfwKLkJ7oYZEehXFBWky4pDiDWHBeuLtqLQDev9MYZpN53ywRWcKg9VfAJ4MwkFDvjYGTofi5oYH",
  "key21": "kVfVNtFM4tmiHdp5wRmVouRxGxA5CT83uniJRG9JcenvPho7JdgPWkSppjFQuYzmyxCWw4v2yUP5qj4pK4sC959",
  "key22": "3xKr2KeEzqMDVwJakyh1eAUqt49MJSmjCpeE4nZrBvPkLdSqC338gTSPt2Jn8rrtq5xVD2kLK3KDJps5LBr1TSkM",
  "key23": "53TEUwfFoDcokpvBFctoBCNNDBECgtbrLJHDVJoevhKXptH1shDm2xDeDYkdbpduXwLVdUESen6EdeMieDakVgEL",
  "key24": "LZx65SSDp2XeFADGNEFHRXFExavDcaLUV2XR2JKDKAjxvjB1jsJCaTD1RQDGM3QDgP4mZKG7MxzgQENNGHYxXT4",
  "key25": "9Mkcz6DPYcnp9zJFkLBWocEHexxE8XybtBmuTrX6tidsDeG2PkdEKqVfonxV2UBnVHjbHkWXswBF1X7mrMHQYAE",
  "key26": "5fQcM9C9NYanVmuhp5vbCRXi8rBFyWWcWeuRNojYeBH3mzHmUQwRQFaZaHBLRgDrxfw5AY5UMcfWiRUrUwgfdAEn",
  "key27": "3ZyWkQGvebKDcAY7QBCv31fEZrbBKMdYbf9nbxpjnntWahiAmkXAHZCQMpgvAPYZo3jnXjmCd9ApntjK5rfJ1o9c",
  "key28": "28kFuX8SwtgBjX94VdNesRMbxhPY1aTnQXKKvuXeyMtC1NpUYnt8GD86SxdNpCYYjzgGfogZLVFcoJiooR7aTqxV",
  "key29": "53jJGsuYeLNSfqgSd7E94W91fbwAfNmLAPdgjCijAe3uB58i6uGyniJAgBMFXrqyBUYxgDsobySBiiKbchjzHoFQ",
  "key30": "4jD4ghpVfBgWNejiABbpRiorYVX2LBfaTpX7GGp4GqSpARjATpbYcqanVGH5Se2on4bZayHG1Nb68BsrdXURKDZ6",
  "key31": "4PqUGpJTdc7DpUFrtkdaLbT4CfaUQLs1zB9BfaZXXEuJntVjvNCE1aNGm5sVPDehnL7Fsz2PQ54kKzW1YRA6yMx9",
  "key32": "6yDesfrLj3d2cVmgjEY6JjU1gtMwJfL3sAKTv7ppueBGsgtAL9RgZ9ks8aS6LE557bbRt5Qk2Zu1M3MVtf2fQju",
  "key33": "5o3KTcDvyoTZjmftedUrAFcAw6USqzXPHfwNXdFVNws2WRDmin8Q8jXnSBWHEgWBBCUuXDyvqLb1H4HDQen5wtRo",
  "key34": "27ncMwcKYxZuHzzH4YnfUByhHkjJFmCW6su3ixwmsAZVSVtJDejxba8q9eAMCE26a9qz7SjCb6i4CnJjtHDJv4CA",
  "key35": "mm528Q7MSbBw64TpY8CHjpnfRe5cea6iw4z9CuSoeNdz38YZuj88gPZ5m7QPeHg3bC2JVVzB73bi26UE1oseFJH",
  "key36": "428sx5hmcQahjst2oiwreFD9dg2Vxi6Q75jRLNJCmbL9aErHvEff5fRbYsy3icK21AwLc1Ytw1WkY7cbXAfZwtgg",
  "key37": "4oXv1Jnc83oiALbmAeQTMYHT1jor5VK56ALKutunN7y6XLHTBzo1qf858CaBpUncqQFmB1PKWBASiSVgJcUuSNjA",
  "key38": "6gAvXHe9cnjGWXLpNWm2HGAFvEkFYrLsSxWmbmkLmBr9JemrE3tzjDUV1arGrdbd3Mfzfo9GbSLVixF2TK54tkw",
  "key39": "4VfhV4LMVYfZFk7TsFdmuJGETaYw1t4vDXTussRFQKSQ16P7GRg75b6NAWPg1MrwJayQREDG7TarzXYDjry8K9GA",
  "key40": "juvPrsa8Ba5rh9pZAZEYifN3hgssyahJSGueVemmhSXhaCaKWZv3NeAiTNB5qK1Tp4bQPRdp7LGag9oKP1y818E",
  "key41": "EELainHTELkWxgv9GrUt9rQETaKYnM9uA8Zoe2922TpPzkVReC7ohmSgcMG1SvBAukznb91tjdmAYv2H1GWosPx",
  "key42": "ZyEkf1Vgdi7pPvaUZTxogaFnxFUxLKh7YrkvGwQNB2Upnxhm5fSzEYz41oMyGB7rX6SC7DswcWpRGd2JfSnVPAk",
  "key43": "4hVcUY1GAvyesf124KzPQYTChnJXQSksNko4JxhdrpyRpimN1knBrVuHfcwuar5v7FnRJsjyUT8qe1ReCZzg3D4X",
  "key44": "4dQRWPLyEPJjzhRGLpuzMcZBNL349EQGsXoNPBh7Yrajbsd2ToVDtnmgzGcqdELdPxr3YQjFHT5u557UrLP8u6Wd",
  "key45": "34M98JKTmg5TmnY5JFzmHoTnRkZvLC4VQYv2wxmhTkvm93CeaXC6RpJcn8yfrvFrK7AoALb9h1YiDAUGbjrRhqs2",
  "key46": "3Grr1HmXqjxHjr5DGBT1t3uxAfvxx145wxc2HSH6TDPk5Z3VxVNREaeKDedrgizWhFB7BrTjNEMPY4WsFaSn8Fvg"
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
