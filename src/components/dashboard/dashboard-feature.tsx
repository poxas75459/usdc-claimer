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
    "Lum2h1y8Vd8UQxekxk739rpxC589pkFko5yng3ghkVxVXFgPs7xSGskrZFfmiYEyJhfsrXx2okGxcnWvnWYt8zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtETsmJzFutriEs2kuB9DayLE916LqFCKzpNTNVQrZNEyCedmfHH2u1hEEhSFNjrZZgj4yFYT8nkkgxwSkjv9yQ",
  "key1": "LpLbRnKE4G7RvJyt1DuT9qdqwq7Ag9BTdJ5qotBqHdCUa3YmF5NzXWGNRuVi7DMfkUWXGVw4cUL5NDL9GWWhmRS",
  "key2": "4fKuNj4vFMSeJvwfrWK4195QHBVhJ9eg4oU5SZKyoHezCZaENAQdkifjvghf6ttexrQzieLUpv4deaj8c6Ec4LMT",
  "key3": "jeBjFJikKbkN84YyfXzQSHVgANLK9Pswf2aui9Wvr9XvGiEQopzLJy1VKSxGVXyW9zHZxGwECUdoySn6jLYLDjm",
  "key4": "iHfV2avWKGzdvQs77Qud2vq37xbMMoixUxw7MVajep8ohst4NcqFRPUdjVcmUjuQbStEcK2pMnKb4eVcJPYMUY6",
  "key5": "3Bibx5ynrsqq2U6r4d81doodfokS6BKSVGE5EZt1ssDoTPMeLeHMuYWd55N8J2h5nkqv36ZyUMwYLhwnKM6pg55G",
  "key6": "5tXwfnsHUDEX9EaGXUgna68xk8wbe7r3NvnWMx82RJ5EuEgTTwQgWsqjG4iixsbvgxwRQwkCaeNTV4xe9o1ENdUJ",
  "key7": "4fZozpD9r5zkmdRz5ktQcx2X4YKCqo1DEhaajFsKHBfF36H4754gbKh1oiydcCVifrmKqWfchkqzRUM2YVMkMAxw",
  "key8": "2N6ftyuLpNbXeqaqrSTMp4dJyoLeBveT9eiP1oZkgEpCMTFak4LFcFe25B55AwBVJaDsVXyFT1Ki3z4t8iNntLYJ",
  "key9": "4iTwCcFgjfheiRPvQq8i8WQ4L83UGSH17BYUxr4E1Zd71pfufqeqMkGoJkDBh9mCktJfoWKSoH9m63px3a1quDNm",
  "key10": "34QdY77xVatHxZ8SwgAwwi1Mxppak4xNw5uES9xGb39pJ9Kt9kyDEJt8q9vtc4MP7oeFufoLPEt7FFsvUk1gETbh",
  "key11": "5WreZ5UXBFP2gxn3AsaXsXQZ4XJcQt2tKdwViyfJV1zQF5x2v232urA52CgN1Z2MCfLH8pUCV3fMTzQMGwbzNqB4",
  "key12": "4DJDdoqGEXXV7E189zG8FZVUZbWuxCS8zBQW8AcMw7nZrzLsUxpgoKKiZEfWuYfWsJi8SPkLHGrGAAnFUQfR5Q4x",
  "key13": "3cSTd4Yq5NbryuLagMSMqCdZ8iPgRYuvXqXEguy9dkdJ35HWkzoa6JJaaPmcAA2KqGngBoQJZmNKjYj7wfG7STd4",
  "key14": "4T4fAAS2uBTy5ujrc9zRcNomiExEn2PFTMAmZJrfXR16YFUU3y45bE8mKsccNdYUvCAKRBpjuAwuTe2r3VowHAcS",
  "key15": "3iu5L5BSWnznGeWHvcviq1Gb9WqXptdqAJ5R7TuLPvA4FAcLX8aqX3EG1xPLDjMwJ7UAVSBVhVSuxtmmndGRuiyN",
  "key16": "3mvqJsAXrPUexvH7pwpR4H9KnBFVAZfw3mwyGZQHmH1EApisHibdyX3CYYg5VeTusrKy9wtHpZCPGFsoAWgt6g8W",
  "key17": "4ugeZaSNZzAX6dKwmWLoozpEKyPJcamAnBCncycdTRa2c3i5JEJ8HFNqjFN6zJyyshHBnUP5tTY5PyFYhpV3HcXE",
  "key18": "uLiSSpCXbZNGEmEgpsda2VFD3Uy3VYisFUmLE3UwrGf5D6c64LqTJbz78vQkXd2XQSRsPuUJJ7bDEyPPtbUwfTQ",
  "key19": "rY9uKtoGQcqc1CKQbm5DnCuzr7wVMK3MYKo2DGbE2cywvCXWnJgQL6As8wvPykkF2SRZSXmFtAiqLNXQGDDocHq",
  "key20": "2Yid4nGDCrWddJDwcaBd1KXgrsYrwoj8V4UumjYdbWRJ4ubcKAbXuwfKBNHiwpB5rWLSqqEi926ontPGDpQuYmbX",
  "key21": "5trrcQoTUQm3RMbf9ZAYdf3r1QYv2abmL9ybMcRB3gnUGVNwNNtUKdNBCUennGYxmUy7BUtdLK4rWXPAwHwvcuAu",
  "key22": "4kqfLSm6PStcEgvEAXFsRKYYciDjXuUWk8AQ54VvxrZk8bnPN8qwjGCRt3cN2AV3Vpr2PyEzhppSYxbbUNHe72Ki",
  "key23": "5hTLWavRVupq6NBjKxVMYi5kASTu52utndnVESuW6VxEcBw4qSyaVAMD57a6adU1q6Nm7QXvXA7hxZ8p3gmHXhv2",
  "key24": "3J1DFJHE6xiVfnFxqJga2t2BrhfjWUHBSK6Z2SpvP8j5gczuxbeR3MehQ78gxFvVX2MUqkTfHmJMsLYerfWNGCwh",
  "key25": "29i1wSyydckKgmc3C66D6r1ETg5BuVxkHw1YDjL4Xy7nBKGJ8UU93UPDnCDT3cRhzyWCWJTYomXqDLUWy4y35hRT",
  "key26": "4qP9MLWKnerFJHKMAGFxH1UK4kZRK6KpRNuhuFVKDa91H6bpVQc3p3MJdQ9CAUWhs7a1tsvb25cyWQDEDEkvUMye",
  "key27": "2rBoRPpQ9gqLo7YcFJPesAhkKT3mWVG5KTQSX8dYanfdKLftWdUmeYTRP4Fg4FLjTJVYiXosybY83T8YW3pXrc7p",
  "key28": "2n1SUuCE17RaGA8NjcZpbKst6rDXeH9HRX1kvXWhtN1EHdHGVETVTEtkqeCFp1RcK2VzLq4SgD4YawknzzCyp99R",
  "key29": "4PUo1G6ymZRupomEsUjMgiq8FRVda3oMQmY4mp9z4yfrKSemFVZWmmf1qXYonjKHDcMhku9tPLCcRZCSvDTDDY7B",
  "key30": "4RUKnQ8NCV8SxC3KYtSkghN23VAdN4Srm713pfJyXnAwMi8p5zpxXBqMhrgkAsfda1d9LAZgDZZ1N94Xw2D3bn6u",
  "key31": "38o6VBKjpaFEwwf7XPZQR3MM4sfmwfPDJmRBPHQJsAsoHK1bSRAf9UyZScGYSQpq7rSUc6LpizBBnqpvHymp8iWT",
  "key32": "26BHGS3SnnDLa2RVL3VXoo3DaDxiiqHFwKmx6HoMcJToWdfTqvC3DEiXTnU9TtFKnqHYE1VWKStDoQVQCmJgdWyX",
  "key33": "3A3QB2pEV6AsgYB2bwqDrXPeNF6gn9CkhdSNTUQygdCmam98pEHYiWU3nQ5i8tTHSNr6rbVjmezBUH38RuUUg4QQ",
  "key34": "F9QgMidpMpgUxvjbxTg4aAZELgDmLBK2pkH6UxFog1BjGvxjX5QuN6Xr5EE8d6j3NUGohJB8EtGUg1nWd2mQZ2H",
  "key35": "47zb1sUabUss45wX44kpZfaWRz5M22hLFxnu8u6YEFgta1grmLWofS7gHGV3KdUeuTyyWiUM8wdaAb7Ho42npuLr",
  "key36": "3oFHgLWccuF7hgKtGLPF8hCLLD6m3onPi1Vh75VWrmvRK54tT5UWKjhJHDgF1LnGhZWiHZFHW8LGb8UyjnSSwVfz",
  "key37": "5gRY9sDvSkN1jPn7zKjnDqTUVcCpfXWR1SYX1KKk7fYPnjFdBFXmmcYM4BcgqiPtHrBdSqgmGiTqNvTK3S5y3H7c",
  "key38": "31MoSQNtVFBGdkNZAXEtkECWm4BjHUFUzFeP5esNdLA6U8ktnpLtn9K7gorSjevrqD3GwW5uh6fhtiu76NfqbSJv",
  "key39": "5SZPvxUe6AqjUe43K2rKYw3WrDNCgoMnmnw9M8H83RWsWaBDmK2CmKNvGads72dHrBMBrr5J2zTcYkpj68yJCfz8",
  "key40": "28jy9rxUa38WFmFnFVkmpdRgdisy6aXUWJn8MnZ7XD6HbWmjcKYu5TQR6vKJ58pYUQSXr8NXK2UnLm5F89yW3bz9",
  "key41": "2E3aRhMZfGZ3nSSjjFKaHgd5Rp3fHNTeNdt3A4YPPLxqvsxiQ7hPzVwJsBzcAnopSgwvuthJVP9VyViBocQSTFYD",
  "key42": "onRuU7WV45snCzXfK1RkgB5pMmXYXBWdBcEo8dDGuajWcrGondjqf2dqwTe7Xz58T1pn9jdRdBBPJkvnXMfP6cH",
  "key43": "4TJcDqZTE37X2f8D6Fq4aCCG9HenVWdi2GpcFcZGdjACYxQZACrmzrqxZsTGYqgug4Zhcy9nUD5npfF2EdpB9djT"
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
