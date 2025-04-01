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
    "39ZYn4E6CMXTrrgBq8r2FBdkcyzCnF6mibNxF4hVu59F8qCJjwpZSk4dVP3NcRA62A9swn4kjoV4NL6yoSio5kQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qzKb8f2x9HNUwzqk3SbxwYiAcpqpjf6urp2CeQZE7U8jThGfmmKMi61dyR8xzCGtG7TSGRui4X3pLHHkyvfFsYt",
  "key1": "4YLyCLD313ivTFnsoLRgzX87DJve9XXkvXC8VbfpA7LLx8P1rT3nd6uBzGiEpKaA2y32AbMk1jeTBWLhs6cJDRWp",
  "key2": "25t9TN5ua86e7VoYSC18pVvVMceeQoT8ZTkmQzVgPAbHwNzGCCZamXE1gBZHDThCBgKfC6MSLnAP6MtYMJRBbaRE",
  "key3": "5QwdM9s2D93iVaG1G4eADda3jVA6R9T5S7mcMzXxDD74t5Z61HF8q6LuBFnb2GM1V68M1W1WaaDsUcCVHDwooKAB",
  "key4": "3rHYGGUbywK7SL1m2tjTW5EkSH6AgcHBg9vFbizyzbks6NDpvYSXiPiADDeJ71sHk27bVHGdJtWgGT4CCzrBKbyp",
  "key5": "SohjAD7J9pLRTztT1qLVmnsCPq6MboV4KiU7vyqfejoe6sRgYrBj5G72dcoXG5bKFfDvhVHi15ALjmpErHQqt2z",
  "key6": "3mcvh66RFoaDCC5tf56SeXRAZAssYtfQQ5se6AgiiNHtCfQYHbCdULvgK9BZk5ifeCb7rJ93mu2qQeBnKPh5BXnN",
  "key7": "45UMM8EKRsDJxEhnTGsS8VdakmzradvkixibYBMYynrksBaD2aS3L8xQ1BYhrcchyJt5XTfnvXVdQgk9wNtJ6jc6",
  "key8": "2ZxMdzVyTPqesERpTo37z7ekm4s8qvXGujWiUkxPEetAFVYRViaYaszDQee4dPwvU71TL5HBhS6QYarmViRZ61cg",
  "key9": "2XWE2F3tJ9VTXEmn5jkBAiFJQRdbQYfar4WaN54WxwYvKFN35fqfSQjiHiZv9iVvtHqAey7QDFFSMPpE4a9jK3JU",
  "key10": "38mz1CNMD7aWuRqh2noiMPmkeXuvtxMqBnHopwZQr64mKmh8DA73ke9c3unk1545z1NjQpEjXEs3HFUTqRcSpmfi",
  "key11": "3HXs1bkYMtQWGTzT5Dm5n5yoyNMNmKViTwb4L3FCVnRkBmdpgAJgYmbKRRivvt1FCUNzeEq7ThccMQbk5zD1zVaw",
  "key12": "4m8AEYNVbtvFTjSvPgBkx4pksoXd1uHajh8tcYftJu6BrJx4PHPyJCvpt6SafW4bki4GN64bvztcLbqTRyJFsALJ",
  "key13": "WhgcrAFWPXmHfCq8ukEq3pypwK9PrsXnMSC9jeuXQp59MwcKFCGFVXwu5jbkyHXhSf6SnNhQQySSVFPMmZbxbZH",
  "key14": "5QRCH1og9QQukx8z3icjVJwRyB3iGBEaXF3Gvx6LAhQ4ZnSHMK8dXb7E68Y9LiJDBv6sQb8XtA4minLnayajXdGz",
  "key15": "4eyRTbdBkh73wDRASWJ8cuqWKKuVBoAo2Xbn5zgUUnqKcn3t763rNs9aZ2AY8UVND1Gr8hPuu6M9AgGKJPQmb6b2",
  "key16": "2FTvMGkWuuoNba7guQwU4YkhYCb7D2M1VnbNPzgHqFTGoYsxpQhgvjyhH37meM9JJ9c1gS2KXnA4aEHEcfhA6X5N",
  "key17": "x8W8D6bdMx7mdKwAhNRqSuTsG6ZW5nDBDyhYWmDQEGR6mw7CJ2ZxFKyNirAYDi7H9ZqtHZMj8Ff6dKA2BHWKaMG",
  "key18": "jW4qRvuyd9RkdNbnu3wcqkSYi1MydmcvFX5JmgcUkaJZ7J9aiKGg24GG2F7pMFCSkXhcMGmjMeQv7XqAX9HYof5",
  "key19": "677rfHQYTnJCkhVdzoWKdUDMyFMthK6qGgGk5ByigYAZ45aqwwZjREjziuSAK2HzDEbo6vncabL68EiesUB4CwPf",
  "key20": "RyaD2nbJdU7d3QTqvCgSrEGA2ER5yTWmZWDvX4WwdoegrP2p1rXLabNR1R3zTQhUpmqubA9o4uF8eseMWHknzD5",
  "key21": "5bCjtkfRD4PaPQnesM14RKoDEwxV5GnDGijqZFkbaB8iqvC3Yc9ZH9L54t5asARiCLaBvEbRjRtffU8Nm3Pajhkk",
  "key22": "fv9WChiQMrpPNiBR83YcMHUy6Sy4jCVUKhU2sWbBjf2QnJsbnoxGeZzE1f9VZSqcBur1DP7r7FMNNK3yCj2ycZg",
  "key23": "2LhAaf9zeicCRLZt45MdLHDKkh4iENsVWYuvYTwJLUsGYtTjw6GVgpU6EvcjrVVAtcGQJreFU1TUdfijmhbeQSQJ",
  "key24": "2jVEDJHTkhmpVtjTQgvShnyPokdG5LPVxbqbxiEDXTeskUAq3FgGag9yTsWgsBRQTN9im2xWeoenQyTr2RAwD4Qp",
  "key25": "3T9tiY6keaWxSDqYH3dpQ9ouAQe8HVjbCWeUvGgdPq2tw3gnbdjJaXhZ8QyvGkaqrS862UPgQVEf4AnER7neto4A",
  "key26": "4oyBzk2HL4fFTqBTcthhwBEjHjrPJsu6ShrcDJrUHiXvErrUxUVyBbYKmgVe4d98VvAVtSyfYEnt5fRA2X94KnBi",
  "key27": "3WgxB44o37oobWUbR6mfsNFiB9aAkx2qT1dGQ9TuBEimXhWTfNpxUwAZy76oMnCmHD8iavyVX7XtWc6QCWdmK28v",
  "key28": "k5zxbUpPkc1TKWnZ2n1LTb6v94KGykvtm4XYZF5ducyQVHLDzdUrBr28gh39Dkj8kg5WWfaa1gy5Kbidia7B261",
  "key29": "k4zCPMyzN8uy2eJF8WAKeTgocUHMmiSFak9i6YVUKsm8sQwdCu1r8YT8dsLHjtK7cfux5bPUA4XmkijegPutr31",
  "key30": "4DrSpwKpTXwwBVAYj2Jp7x1xgje9p8haomKTWbVbNyKd8yCppq6Dtu2YYUQnDyFpAbPDzDuBfBf2Y2yzPTT8W9ss",
  "key31": "7m3MkNhamA74UaebaCLC7irxaa1YmCE6Mf8WMf15bfRpu9XDk5kHim8TrQzX4PxyciCMC6nsvU9t7iz9vr1AhXe"
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
