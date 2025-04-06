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
    "acL85iR4sT1y5LYpn899G9ZfRRGs1Saj1NCikyjpV5faMqryUbcUsXB9jfuMGfPkeTj5JS7uHBw2sN7kc8ysnTP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8setfFaJfdu8tJjYAqRAgPmGDwCNPo8gqZAivoE1Pyjog6xKHpKpC6niBNWf6R8wfNutQ8s55c4WZx9mQuRCmCU",
  "key1": "3PFBsE44sN9qrTSEzhQ1WRSqBxapVcoQsnw7kG8V4xjLgKvvM8Rd4kRWNv5ccKp3Ay3YuYts9VBxY1KAQAMfQPUc",
  "key2": "3yARGeXe6eZZTy6VfJqjMTsFQX4UayP4o2FSnpa3NXyYZfsvh7f7E795noQtPLCAzVDUh3NQhUYS38CvjXAfsFH7",
  "key3": "48dsep5gbYz92osHjTtaRZ2LTrKCbLwPS6b78KFiLYBUpt39N6pgJHGMB5eMqeUF1Shp82xpEi6JJNXSBaZQ8fDM",
  "key4": "34hjDE26UUoyWU1xBLxpFKdpZdxEFRtSzTidQHhSS45V73J9dXdLWwV1N4CCG5U1VYFeDJ7qN2HHyovfnxXNBZM6",
  "key5": "2z2cwsiiNRGJYwq8SY9hGvq4GaBnnpJfiSL2B6i5MWBUMXNuB4YyUGfdetXm29nquthzN2JLUuqG4uTDrEPTLqJn",
  "key6": "36G2wufgMaVqxRk2SkzcWAyZaWhBzxucseDN1rfxNLkMvjovHkcP333KQ5Ks8JGzBjgJ6pS9WjEWQ9Bd5SyUx3tz",
  "key7": "2iJLikpqWrX5HcBdXutHqfrbeUb4yzYneW9nTKNs1XDdLMW5CpdKahswGJGwwwvuZPCE8dVJWvxcVsAQwyRYeGPu",
  "key8": "2oMLbBGiLxKw8tKKLgwFkyoDn7isSnS2FMzYWUFYajwAM1KLkzq6LcSW2t8TB19zMeWYGQYpJhhwbA7aHABrTNiC",
  "key9": "4tqpURSoXLg1Sv8Gav2v9iptAN4fCgxfPRuA2rvfSYRLUwq4JRfhStKF623x8b1y4Jcc1Uh4QvQEBUutv1GC1utd",
  "key10": "3hBV8kTUoXRFPfz5VciuXFE5NjNGqHqipLbQaL3RbftJAfhGttGANiVqL5cPAjaX3Uxh6b2WACo7XewqzPWFpmDd",
  "key11": "2kiw5WzEH5U2FMDw6RoDf2DWY35cEFXzcHUDvdKCpVnREjqgPwJQwyDfwbjKR4mDSka5nRpha9vts6RyZo6CQtPw",
  "key12": "5GfFRSMiFwiYxz5RpoPerieVHtx57gwbwaT2ReajQJA8vDKTFZiTTahseJrzSWbTTSRUTQvJaUQhGPK7r3K9FUAR",
  "key13": "67nHx7fAnk5zeCap5B471gxWoFNRGA9SX93WtupREeDus4eXchBjNL7KNtn9CjAQ7MMSRhYDhpdyHTWtm9AC7L2C",
  "key14": "2wfETEVGpW4v1zgmeytM6PnqvjnbKjJHcFeyAJCgRiLeaY4zovFvJvWzKe5zKvhzL2yHvB6qmVND9hL1kQ9ggbs5",
  "key15": "3ZQcjFhzewZX3EkjeHodkAabVMtJQQfKdnAkDJUPqi9MGHMBiyC97pMqyNRZBnUusAbEnMpWeY6SEhrDrUUmCjvR",
  "key16": "4gURTHnEyYPK8uR7wPXpr7rEp2Y1SjvRbr4E2txUW77RPrKfPDt2zh4e1a2gGXb8A3oxEADA17fVuHCzEGn7jz9a",
  "key17": "5ujUsVXqrUnDEFzYseQbA1dUQ5xneqXzNXabdu71iAXHLhuqyNKw37WyWz5NpSeCKZL2e7VbUozWQM3UxC6M9sYH",
  "key18": "6jcMZwzGPaELfxWfi2uc3mLtbEisoFTrEYy2PXftk3Lnjp2GQzL5KEX9zyntRFfxYSujKNWwbGAvtRAnBQ2PXLr",
  "key19": "4sjJojetS7Rmhb5SWbjAdRiAxvv3QvVPa6N4ZdcMnsMZm1Bav2sTfUcWxceBAayeXfQq7ieLydGeDTiXReHpfEps",
  "key20": "4bHLWwz1NrXuUAPVqiAQQELWoxqxfx1Rbtm1QsEuTzjYtjM4sYcYTXuS23eFJoTc44yiXHh34pv66opLfYXbbTFS",
  "key21": "NyBAiVEapDrzLsLXJdXdQg7dYPAb5JKHM7o6iWD53Ch8oYLJUhJcT2GGwbqFBJsTwkHf1pG3ZoqBYtASp3ewTxw",
  "key22": "2Q8H7L9RxGhaJ82m6bLVL6oQvTskzJfmUoiWQ6vdvqpzhN3Egwh9fEEHm4YUTgt3drRM7YmufikYBxk3UAgR999C",
  "key23": "47Dh9z18iSKa3Q7teRdhPGagXGPYLzz8dm2bAww8AM1kQ5yWJ383Vso3j4CqYDtWRN8yDc8CVGwji9rBXVPLPueF",
  "key24": "4isSDCo2ZEMTcenBTXNjseMgcPL3Wu438urmGAQzTEzQVF7tdgLCcVt2cABU9KpBRQmvHw8dzfM2fbDWw6W3H2Qd",
  "key25": "2uoiANaJ16Ctzn2P85qPa9jnmLn7SiJ7eVLaS8oJBpL35LaVabRws8RJB73rh1kfDGVyEopSMRrV6SC7UuoYkevA",
  "key26": "3T5nA1eTsA77NS9Y4EhzB9GJaiRLoR7YsrjrK5DXoWbtDHdR7JjHQqUQ3c7UKaVq4byKrQe3zfDLK4hNVCcoihXB",
  "key27": "G2TRB45Ktt2pjS6J6bZrRnFFJFtFtapjGgQZpDgh7FzhetTq1deGkzBECJ8zzPCqwCUyVpEJvDR14rn2BMuRHwx",
  "key28": "4W5ooqVzU4VdEDutRHYF1JFWeo66xXdkHD9xX43zBt9sfYLFbbdPJm2k4EFJCJmYzrpDuSsCmC3iEPp5MgpL9UTm",
  "key29": "5X6G6rejVtcrhJWnsW3H3Mv4RN9UPgnuHxd3RAfkZnHZ5gyZcEANXcvuKnWrGzW2bKd2g3kD2YS8DuTotCYotw58",
  "key30": "3Vrh2gcRLXV3pVB9JCbj4BnsJChj4goaLD3hfLiqego2WcSNQJ21dr3JJNAiJJarWKTgbj9AtB9RzJ3E4YuGikKG",
  "key31": "3BE7oAtun2osfr4ZdQBRY4kcXqeP5VHiGru9FkvZwViWgxn5s8XQQXsRoUywbrKhG4dTUgtUBPUAgqaqBabkyEV6",
  "key32": "4tT7Lmk3CPMqaBnMUCQyCz5u6S4RPd66cSUDW9H37BjGfmf7UTWT2fE2sXY1GjbWD4yuqkuAReFo2aLggExMveYR",
  "key33": "ZbW2wa1dqcLoCa9tWaVymDFCNuAxTzheQc193XDdiDhF4faMhcMZqZ2cLhAjXamzshjmj6Gf5BhMvnHeV1tsmHP",
  "key34": "2YgcLPLVui3oLbzWkroegKroJk3vQGaaJfMoxsnC69UyZ3aonduLTcxAAkq2dkgxKVxQqdVcvrsJVp41gj6DgkZk",
  "key35": "yktdFVgDqAfkty2SgVbYdtwrF8mFZ3XiRKas5anVedfW1RfJKrE7WqaYi4owBnAcDpNmrNwm2qRqRFti85Em1xX",
  "key36": "2P83ApQvmgpJ3PA4deHp7g5uoMQkGphFaTxKd8pRE8sqvmt7ND51NQoxPuZa9DjnL2nTTvDzLSjUHSrL4eSNkVR",
  "key37": "78XZpm45EUwM7J3Gd5LMFxChRfsytEdqQnSoao3yaeKEwPbsY9EV5a6DrPmfLrQGwC5qQzep6BxUMY3Dvp6eDrZ"
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
