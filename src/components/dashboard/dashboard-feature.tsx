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
    "2tbkZCW38ah4MsZ9UKUS3JQYfHaYdoRLBM7QZXaZmpv5KYR29mPvZJrMt5owPCvi35hbWZfeYo3P1HKUzWQvJG69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D3YRjEqnhNy9B1UbzktbgM5c8WiTsA1mGFpKhmbvJAW5u6opmAYFmjrTBb5ee3HPn6tBxhAKhfBAXBaeEudUHnW",
  "key1": "5LFJruJ5V2KBwoiuWrHhKJYi3AwHMLYq1k24vypREr1eDw9WYVBWhBLrRUD4Tjz9U7m5pcuroYQHMgsds2vWbjAi",
  "key2": "37iThwq8p33BNsjQQk6VJVhM3MteEov6sJ84HaXjNEyqa4VhGX4zajFNqXwEBb8JnUw7pYoc4EjR1VeA3Xkq2wTi",
  "key3": "4zfctCTEkLPTfPdZQtv97W1swiYiyd6oZ4WZ2pupwfz8oDxUSzRmCm7u8KYABedC2NdHwNJfTbfpFacZJZJAz9fK",
  "key4": "3sCCfdJUmZPtMix3Pw7rXTbjvFQftWnMYM1aEJuNaMZtKc8uAZ81J3e3PNMiPLXntJiiNwPhNm1A2wNShj3GCxQv",
  "key5": "5cpC8QSeAWDUfzmZQ5p8C9o6DemuS3LgcJfFGGQ2o6cG1ba4GvkgcomcARHSf3yhs2xY24wM5ndj2ws6Uf1yD2ob",
  "key6": "2ng6SKem74rsrEH7B4PtxnHdDqBVrKgutqgRSxnNrib2cC1NvJewLmvtAjtXieg2p8FdjzbVchfUvcghwESsxYSV",
  "key7": "64KxqMZXCLJie1Rq44TVhs26rkxDZ1gaYrtbmLmPandhREpQnuWJLt4Mdso1kCBHrVgyfSX9iHnVqXdbghdPsRUP",
  "key8": "3jRkygUJvjM2qvc9Mr3UazBKMcUuzhMJBdrf4BBco5Z82eXcMYVrg4yhTyYNAJ8YNda7Av53fzUoYb6DMeCkTMwa",
  "key9": "kAnuL2qLnX7ahng3gKvmR8keP57m1LfKtfhzwgYKMbky7hd7ZcWwmueRGGQ2HRZ7GGreWXh93W9MoeRdDMpNXtG",
  "key10": "298rU4fQqoJq4znguJ3V6ZJe1ZjSNrfDKE5HNuXBNbhvN9WLwVnwc3uAy4WKWRME8Noo2eABWKojAb1fN8GahHkW",
  "key11": "59DqyFMz18FCUu2o4tL8HSEwvxpSqDcApdm75z8t8J53hguQFQiVTDDcMX5hiZH9QxMJGfFqGAUn6hQxa7FP8hzN",
  "key12": "28CrbmTVviZnvU5c1UKnkNYAf3xfTT4echbwYWaYUqfsY2YEvHjaPfLJZekTSYcdsxYnSFm3CU8CTzztEoFF6erz",
  "key13": "2rYianUyjb5WUtYCQpq7YbPoNUwhhQHHgrtkBHLqPHwFKjGK2LUDAkvc8VQ17xQkoG8ug8exMM2LQm1u6aBcuDpH",
  "key14": "4wZT1oDPJgW4hs8nFbD6Ym4HbBopMtb8VDWF4FmXP6fCDtxyrNH2iLNvDr3pMB39ECAS4UiyEFYpdMxd3H6tFSZy",
  "key15": "5j1HYKxNkztTmKUbbJmzaAaoSFUUPY5nrT7tGFqP828mypf9Rmo71X4LoXpKgzmbnsWj8xzPJPUKkyc1s4f46Yrv",
  "key16": "gU32UpWi2TkQ7dDKZKuXZVLKBQhesz3u2KyZaqPc4Yc7CBezHyPzrSXS9NgjJTfsne4MMY3e33bxLP4NNmqEiZi",
  "key17": "3yFQegkste4vbaCcRFjDgiHkZmHzVkJaVRLrHsyjdCCZA3uBoVJrEfirxPpDHsWYfdC9syS8ASSLUo9KLKpQinuG",
  "key18": "2sS77f9fNa1g5SfWbydrFTJTYCUFeFVEnf4YraeXsA7Y5RVkdiKLdY2T7GwKzEoGBfkJjPEhGMijPScyMDrWmpBH",
  "key19": "5nSHqcJRbh4HTRY9dBx9soK9gLU9byHfdK2xmkxWwg7vYpgDeZVBocYX8e98F2rSrRevPUeerm9qyt9WwNAVKNUo",
  "key20": "zE26t218AFNxBguAhKvzUyiGydLV8FsQVv6rUD7K8tbgKaF2EcNqyMSvnkgwFdvNmgcUy9QiM9sac9Y9z2jFGpj",
  "key21": "3DzswGFPnr7kuidD7B9rqWJJGht7sJ3SyQXRmq1u8TNh8vzpwZyVSSpH1ACC99TkrGU3vdiCU8kzaAJjUCLv7kiJ",
  "key22": "4GJhMTZspZi6Qa2yEqCx48GL4obtjibjA3zBRerNccUJeXBLWebLAAPHZZ3LkmD8c3Sh1ro6GewkqBCbdPvZwYJz",
  "key23": "3d8PPLzTE8Uyb5fKjj6oQhKA64bZBPVmahJ131mggV8jWFqoTWYLaRYzsZokUKbzKuXi2HrEuYHEcdrqtzyrjZdT",
  "key24": "2V3dUaTPRLfMdVibXivUt5e7hjF72iEDmKouTvKxp3NWu341mpSk69jU5PRHstTyXB7LjbQMW1QTgez7BuRz2ZSu",
  "key25": "2tUn2y3rjxj4mrCYkSucLeNtBxSkSHfxHYjuNL7ztoDMYQ4ZXNEooRjYz9edXTJKrMSASMafM4VMvQUDT71ks3LH",
  "key26": "3HVH1g5RgZjVeicXMy7HX8ut7RTRiGDj8dvqLVNo1M2gQBsPnmFpZu6M3SBoCuMqdTX2prmBAVt1xKt5JyHHAjZd",
  "key27": "RP3xLvWnzkpbti9kG7A7KEf29eirMzYGwa1dftmeMqXmJ9cHMy32iFoMSS5muVAhDz7BakpQnF6i4VQYk3JBh2X",
  "key28": "43QaJWMJC9XTe5KpYZmqYhizQAcmzFZ3WNxJxPi6dT43hfezKaLFFsrARpz7xQezH76eB6c9gwKpCDKqY23HArMN",
  "key29": "32M2pTSvhWYVb5jhNW8NN7MagPKKU1FrSXsdEVruCSyX9vVbmT3bG9dEV2enHHDaiLUPkDwRi5sffKBUzh3YUsHL",
  "key30": "aJT9dcggJtMp88RiYV7o7o86coUSgbNa3kMDnmWW16DYyLgL27KrjT2vtQGqX1uJULCcKaR5zz1ntCZhyJHfLgE",
  "key31": "5jb8ZFaij47tn741Q5yFDpY7hSjoFpzkAQoNB4eSetGfArcExuEmBM2QAVfHBtAmVxJXVupFraMrHWuRJtRZ7Mmt",
  "key32": "2KxWo3zHUmXHv7HEVutfif38JkWSs6FKKFeBj9inyWrfNish5CGNqRjsvgwjv8oy5UjKLoGxFGkj33JS8fiuQYRi",
  "key33": "3AdoxJ41UUxNGjNoWNuybN229Sa1U2AgyFbjcxnrnVQ4bkGVeMmrWU2nTQ6zQ7htbW355wfgjn1LTtkKUB4z3gjz",
  "key34": "4GThUgnJ629QSTwPQ61mKki3Zro1yxkqqCjHfXdE64vyagzVfi5k1YP9Y6mUyNeog6UzUswpe3PdKQVRzUntaw92",
  "key35": "5xPt3C6p8XWkeMzP9RsoF3wPWj1ctVuYAKykotY6LDGCSHpuMbRaLFFZLGcmyzKidxjFaUVbAsRHrSpcu7H8pCXD",
  "key36": "4YV3GRyTc1GeNVw3nhwfatbbo7nn44MQ32JsbYbYLn9gbhAzTPk5XFZf3CxMQUfCVjF8uUvKVKZqQgEPiB6VLrY8",
  "key37": "5B8149jci71yxcntJ5BKqVCD2q1ZAXsjn2hidYxK3KZkkTxij4NyBAhMEPHzimqBPFVK5EZ3yevTQdpPLydW4viy",
  "key38": "dXuxBQRko3nxBzCaJ4qJWDimADLQxupiNEzWsPTiR34gDSvZSGrPMx21o5orucLgvQfVLGQDN27DtoHQqXiYhVt",
  "key39": "318N9uXZqqpJsRCsbH5hb72gaLH2oAc2gwTTGoww62TpBRbZsiUT8M5W3tCHnidcLAiFJrHNSycCiyhBXDvZqjpm",
  "key40": "JHyWy36hFanqT3VfhFKCzSYU5DSvq3V5g58ZcNrUsHSj7eo4Hma3omZegDyEQLivS19q2hUZew4i8KkH7dCQX1x",
  "key41": "4hP6JKCwKbXpJGUNW4xtd67NFYshqCB1FUupyMFmFud1HXJD5SKBUv2ZwkJTnzKm48jjBLG4ECWVjnRSX8xbci9t",
  "key42": "3Q17wkHC3szvDkoLyhZS2AsdgSQN4jEreLnzGFS4UhmZg38o6kuZEr75GXT64hQUWqEt4xxCe7wgKVxxSDRS5cDv",
  "key43": "3j9iXx5evDXgAGyZSv761K7UeedawjCKCvj5Zf8rDhL2s8RXGBMZPKGutnzZNsCnEZybPRD1zDMTerH7nckpVZDS",
  "key44": "5XB29h77bxNVXdnxie3q7ZT4q1D6WWkhggFJUqdqKT9mcumxFA1ChLtnjSXNQLua7orkDB2WpR5oX7wRt8o42srS",
  "key45": "2CLH5JKYtxui2WPdYTcCYPjTDbztgAnpyETQQNccnjnkWUcpxDPNPqainbhJkZxHeUaEDwPdZEopgC7pqiHrTZcf",
  "key46": "3mjvv1nb71UCs3u1uBGfV6REp46wSp65RAqT6jyYPqUXmGMEkUvcpTr3C16usajaZTTxvhGi2oFc43LhC6VEmuPT",
  "key47": "2chKs2f2T9EhruToGDAcZtaY2sZFTokLKeD9MJ6pBTYmYUdC1c2eV7zR6BjsqtPxMCnine8NDZBjjzABdvrqcLXm",
  "key48": "t1wCHJ2pDphqw9ggGyrUsD3axfLqcPH3bByfpy28gRJRUuN3enYHVKiyd1uYZineB4oTqqXYYKUxdj3vm2q3euA"
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
