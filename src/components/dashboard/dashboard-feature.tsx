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
    "k6GVG6Dzr6PzCp1N5JMPZsS9srSyAirQpj4HFbhawLDivmitA6qhYVKkptQLNxL74MpK5aR1zUjbpKpxMoBwtKs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cRRDyBdkGfAFCd9MzenDwPKWQ6yAu3h2uWvs3saFLfpj7kZinH7bKf4Ry2zNeycht5vDNj6ps96n1McWFDX9TKw",
  "key1": "MW9jxK29id9BgYQwJdTbgBW7oo7kzoyqfYgny3JCWZEdf9F9SjPKftosZsc3ATXp3rVzfXgmCBz5bCPLin8k44W",
  "key2": "24KAheDJTTNtGcPdWp319bMFo5wchdFqc1F4KLkNnDdNEkbZWb5JTgjBhwkg88p7ptuDWyVH8cbZJ7wCu4HtDtJX",
  "key3": "4cMNtCrMTiJZ79JZSYBUcjUMNMW3XndGGtQbpDxJ8swM5QKh9Qj8RJ9d55KnM3gVH1Y5QCV7gFQsJmAAcVh5nBjY",
  "key4": "66fGg2anL2e46Zu7SZR6mzp8ERmasGJDprBUGToYY1JGQo9oknj2aChPjfkvN86oj8StxPTq7Y7Z68jdtoggTXHJ",
  "key5": "4Vkf7xsMcpH2WRKES1tCNiq6reQ1ZgrkQNSLbNKkzTGKPwQ8MXYwA9STMN6s1FUC6VGs7FwrrAxvsskA5mXJLnYX",
  "key6": "XTWXFR7xMtwxUVZi4AcARP1327tGTpLhsyZvwu4MFz6y9nJLAiMbfS3SaU1GhUMfsXUbbr11CVnizvj6S59NCMp",
  "key7": "4xctPvmrfXavkBw651kPWaMpUhUB93vBLp6Fpc3oJYr83zFXSkeLuoCotfV7TT23n7Enqq3SsBRFJLQty8ySQxqP",
  "key8": "4HWsATYBTAKAKL4BRuFSdiLxyEq3qZTLgF6oqRXPgrQDjDe8fWZySzpAc9j3aojK8Yp9FSZHTJgvDB5K9DMWk9SM",
  "key9": "4hmvUtUHTyipDoyMxBFc1JsG2oQoa5HXJ6cwvWQc8NT5sHyuJFJXWxigu1sEQRtUf8Wj7c6B76Lo7RWU9qUfojyo",
  "key10": "8561VsQxSKHNqFiyzrnL82uCFEDoi8MP5uxgks7hAaHf9SyZ7ZvJ2uJjmcUEmXEwrpoiYrBXGPBL5jVFTXXeuXy",
  "key11": "41JBcmoBoPjfy8LydUwqWstTFjEWmEPiMmUMoKX8LqguTNDM1p1G7FSUywcwt2qojodLPMeED843cVN89CpaFhWx",
  "key12": "2rTAYrXewe8uHKdYscugUGtK9y3oEDyADSAvMKDcK6ypU6dc3MH1Le61R2KXsGV3dCFPaFNtfQHGe8huGdoj9paW",
  "key13": "29EfQi6Hhv5fvkvkd7rtBicVugioy9cZiSJqeMfNJ6jthhxum9jzTsnn5Lq7McwkMK8VvTAe2YKMJLkVe4mLEaTV",
  "key14": "2WVtLqi44Yjq9Xuvv7Cn7USnEEBg5pfscLbXo3JC8TE7vfnL63kmvDacz3usGg9YZ5vv9CKJuYqM5phfQ1bPB1SX",
  "key15": "4osQpphMgqsKznF5PW4QEaAQAbT1xT9EPfN2Srnictyaydv5zrQXZTTtv9AJXh2kafDbZSLdJn3ekoAmMwTKGGzn",
  "key16": "4M4F4WyWPUjVwWRjqrY56njLqJfWxxaAwPMEFJFCfT6k4sq3RZpvidfYye3YWcYpfCs2b7TipWgByXd8XiEZ4bTV",
  "key17": "cYBu8pTbfCnGyCog1HBnPHxGupQY3ZSqtWsngWJqi5LUSg3He9bZyGNVe6ikHtChZyrbJvU6MWzHBDTKSu1ertQ",
  "key18": "25NcVFiypqeDeq8uXrGAczT9iaQ9tJphrtMchUVcqApM3RVC5Y9JUE4dr4Dm7FuU3UXJnmU49WvoLRnewnEtzKPE",
  "key19": "38xka55HEydV4C3mqtL1YwdZvARitLoud8cPqZSnFWPTnTcnjcoqRMSe34kkXthCGPms6STmH1588ktfdPmYKJFV",
  "key20": "22QNortUMwCAvjtVXPjLMhPMhxcQQ3s4cz5NXym2f4oRpfsovQVJQ4Q7bRK7XcjLvgYBmxHnz6uRHY2Bw56Y5snd",
  "key21": "51EiKtoNt8vuWRngyV1sZRTFrUVX6rSApVWRMY3mdZTCoxa72dzWkaPrMZFvQUJLA6BHwqarPvmfdMaD6Pp3gawp",
  "key22": "7eKY5pWTD2dQjr1EKcaJTkrsEn9FcjHxU2v2y2YdSES93T4yzQLiNpmv9HC8YB338Ep8q6bDxcfxZBPEtsrHWCc",
  "key23": "2b1cHrLpqPvbQdEbZs3ifyh66xCv81pidrMKsadTeXpVaGncvSEYHzj1Sq25M331AL2Mmx5XFLcfNJswJC2Xb5QF",
  "key24": "FTnvoudfGKmQH7gQVXExTfQtgUckVv7zbFrX9zMB13UYaCFw9YheaVJqwxWMku6tVoqVBg52WeAmhJpHRgYBfUs",
  "key25": "2hS5cW8dbE4cMXsN6BtG814XtVt7xAyc6mVqnQB2Re4oMmoY3ivTygJAmqcLs5fvmPuhFUKsHThwwMFU78AD6aj3",
  "key26": "3nWFSA8ZeheH2oF1CjjK6iyiWE4RdtHjVrfRfqz1AGUUmtKZq6Kx28UcyQozcv1Fo8L5wtygiSjEePxQrgTPXpjs",
  "key27": "22Ykm9kBDnivgzwMQcyKvxwhy6EQpJKmMc1rDPHFdoJMmTMFFZRHAhL1MS1BqUXJHySDCPVMvNVejUcwuuCKDAiz",
  "key28": "4zPu7kPJEyf2co7gdh3d9yjSRe659tUg1rJKgf4APkoop6cAoP3kHxZtXSgbz4ZZvh9qw8abK8mX3qEJrs7eJV3S",
  "key29": "2SiXK55w9ncoTPZygC2gfjgGmSS4c4W8bxB4PgEbAZzjASywz5Y1jscrBw8UVtZTCKeeEf6m4BPKFDcvdujeGiWZ",
  "key30": "3x1sDPaoCgicj3E5u29gRf1724qH42w1g64KZBqyqkJpGvpVzdvnkG6pA71b45uV1d4m4tQ2d3tsbmGroEmoYeYg",
  "key31": "5t3PbYWsQY2QB6kTV7QW2VZoAVf6yLghJqmp5LcQxNgDAG6HC34G5PFuovC5Ho53d4Bmj3XtYe9LgwFggAYBVLAM",
  "key32": "2NAYApRo2QAWLGBhzA6ZiFA48NX57zfbDrTQdzpZR4Y844zWek94y19ZaBQsdBDkDwWCUuuhB86kM3V4FvXfqFUD",
  "key33": "3ou8GuYZU7WZSfaZQ4VTLjLszh3ahbVqr2MLUD5qeQvtzfgjhJ9zDZECfgZCZLX8E6tjQDhfVBniKF4gpsjLNG7w",
  "key34": "2vV9kkEo1nT2abHSfQ1ey21ndUKeNcbUphfsvpKSrcT148vJtoiknoFtwi2dV4xn55Kd4MmKHoSupKLEF7gsSmz3",
  "key35": "2k2sjMV68nSAtdJXV5Bg3pF5QpPY1Uxsepo8kXiKuPTvCbgkWou66r3WZBdhSAHP9b9qPK2XXRZc72LVtpMHuqH",
  "key36": "53HhJ9gnKTpf8Y8eh6DXSCETrZc6qtQkPpkkRryKd6P1DXaNUQHRzzsFk1UUbyZ7V1hd3cFaVUfzvbPvzCN97CMe",
  "key37": "5rANVVbbhhiZ6ZVCuWNNyYdXS2twD8DUPvmZnQDPwHvFqHdcf3aYeUTZvVr57Fk8BMVzQkuownmxn49FUJNxHrh2",
  "key38": "5ubjDDd2E1tHk5KGKFDXewb1Z1ZxLsutvfRyyfdBzqvTU6vccdFqJnDkEVJtWngDUKR1JGXU9W56osVBxBZUabpf",
  "key39": "2xec2ESta58Sgvpi68CUJTRTSJ8oWncABR8hVrAtrCq6PkSM9sYhV4f3G4pcsAek8hAa18snqbCJXQLaSbdkwPC6",
  "key40": "2kgns84KZJKTZ4QiHXWYFDr1rhuYHC885FX1ouCC8cTZxzAZN26bEGCNpmmZkaca7T3ByATdy6yhJ8JSF5RB2L6h",
  "key41": "322QW7wANzgkR3QsRipzoZJC82rDuvzyGCGsVawxQ82H49kU9AMrTgf1ztCX8qD5xKLV19FztpjNPairoVnYTTEy",
  "key42": "2tzjDogov8sx3XSiJgypb9Ryc5q17Phf4LDhREZtaURmpkCjwhMdnMQBaD3omJvaLx7i8A8PFa9SYiTsmkCYqoUn",
  "key43": "35W2D7opHCGwL9CKEusPeXbSwsbqNeiGZ8WQa5eoFG4mAKdgdxrYMhkHEreY9RyAsJHn8VKEJLg7NNiH1DmoTc5x",
  "key44": "5BbSEYCqrZGQp7vppwojZDiSt7nC7UbY1RKpn2TV9AHRsCxMJK4iSq23vjyakmSNFnunBxHWyXE91UXs2joKB1pv",
  "key45": "5aC2oNwNFydtnxQgLA4yiHApDgp6NiFepo7QX8KAJfudcss3Uc3XP5Dk42tLfAPgBjUWCJ8uuyZDZmVjonhVyLRe",
  "key46": "emiWPJQpc8dJ4ccH7PUNHASjrAvBzrq36nfZSng9PWdLBQjXzVeLZAiYcjPNynKHzkQFwbCetpVfLy33GAViPZ6",
  "key47": "w8pCBJq1FmnPsYba17pva9tcA8wbxAoikYbmWwCLbQqndXDao17BTEdVUZw1bLQnmmj5Savg5Z4NqE2Txb4qKe6",
  "key48": "3SSLpgMp8S5f9qgj4uQWsPJ7RT83ALDM7oNfYaPKXCMvaUTVykwq2jtuRqAcBWr5HassVUEjk1bWTZoeGFsXbQeM",
  "key49": "2mRFZrc2FoWS665XFB6Vfi2uxgPo3i4MHrNd9c23KpDXhDsNRenhaY3PKVEf3HpR6Qk5LJLTXcATm6icnjerhyzw"
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
