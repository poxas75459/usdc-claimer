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
    "2hHSQbccLw8aUpLBzbAg6zHS2MKbNXmTCz1X7viuowkPKT9NKG3NVhkAND67dYSHxXBrExND1N4jHJL31sEHKJxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LCc1V6TCUjTpacLQEibiTnWsoeztZspmWAsPGUGEidVfF6qA1HHTFG38DaG1kNAbyF2a1TPU692R38oVgspzm6d",
  "key1": "5WUm6Cw7TvjcrCxFW4kTsPRVaFqAxFt6THWRWnAaHHEaEancEwEi2sqaSgJpdW4veRbCuFaGDN5yJ5U7J3UaF6Jo",
  "key2": "3KT7hHgSF3XxotLT7HQ7AvmQWr2ajTomjnxgQrC6L2S9v5JcPCsGYL5NrGhBVtYC52NXakqMHSsuAFBRyYV8Y8ee",
  "key3": "2bLJwEdJwNrES2fgQDwrKNxynHtgua12MMDxBWVBJWUNvu35keDiMm4V5hGNVEeFhCit3qZS5DFFpfHo7DpWGYNY",
  "key4": "2DSkEgNUQkuoWnfp3vaq3Ah9uxLXhKajR4ktHUfzbAXPninQP7phvRdhib2SJGowjpi7hkUqrWhZcrrNj3DZjMQq",
  "key5": "5LHT2ntLAaiadf8HeSzx4i8yeVr2qL7FWJVUpEY15BLKXDMooU4C6kFwJemo6HM45juAYLaKTbigzi2NmPrrYmKF",
  "key6": "2jqsG93Zhq6gQHgnam4jpt1L42zh9QtnGKgTVgUNwCtcT87SU4ZQCGCgUKa5TpHeBdKvUCEBZSQpPPH62gAbh4Bo",
  "key7": "2C28Kp8fnoLnUGvdJAJVbNeWXJkAnh8hRnWckzhExvNUAqhAUkkWNKtE3P3Tyzbzcj8nTuw64qk6wvzUV2Dn1j8E",
  "key8": "2GLKjC8C5uWMwYw8izkxoqnFe8QtZAkgWvxg2nKxUkUepKoHhNU5zMPqehCcuHP6XSJGEfnZXwphnRF15oYC1JE8",
  "key9": "4oyJjyjxKTk4sRALCxAwtrofX4QattPR24supweuuvBymsEPsaBGYzmyaBaA72CdgvcnBrMCTVQ539kTdoA5SSg1",
  "key10": "31svMpD3cYKBpD4mfwsznuwvKRpxr3uCQzEUDSNVdfgmpp3ihxNd5QN6aQiAeBTbR8gHfATDtzegXvL6sAv3Dgfx",
  "key11": "3e7nfZywW3fQPJtn67nDa8mw4f1LifQa4qBCaE6LsyjYUYnMrmUSGyazEpKoBiDWkiU9k6dYhGJLsMKpX9ZEBPhA",
  "key12": "5Z4jCqVeZYHCSeyV9z1DAmPnYJsUcGUZk1TtD1fS5mbpDdzMDLpBbVUzKsJTyJUF7LxMQpomkqLZo5t8rtz2BTAe",
  "key13": "3RreC1qBdYT3h4mKxbmdSYL8trTqtv5WeBne3phS6wNkpJqhg1YfTPnYfJyAPpFZqygDFtFvj2XY6eW4Jq8Eig7Y",
  "key14": "3eyZT4gMgcv9PXfuhDgVoJty6kPi2Xzmd4gVb1qQse3vZb1tJtfw9MVqax6YvsErRd3f7nLs2iscAQqSenEeX1z4",
  "key15": "4pz1vLRSUUfvnhZ2uPA5v5vS3KHxKYERKdX9TdviG5ykV57Zk7HMGhJrxXiWkYqVo1TjXP3BzHBZ6Nf8G34ccdm3",
  "key16": "5bDPWAFV4ygvbFYV5QMfeTgu2wodMK5YfEKAfyZx2wEPgfDy319Q9iektfHsmnuVdrN85jyHnA23EqyeMHS2STtb",
  "key17": "4MWFPbzk85ZtUvgiMWYnubJdY4HfnBwdHGGgUPPWCYcpfTR8vpjkZ1iJQNcTJ8hrqgtriidwPveGkSvjKsDBx9Qq",
  "key18": "4Rru8hVenUDQa9N7hs6Hr8jFoKM87AUYKJ6vH11bG4fq3Q12Z6kFVSwJ9yLVUsSjJcr3AiyQk1X64dFjD8yk71US",
  "key19": "3sepqGTqZwMeZHZCXBWrmqZkvGotvskButmpHS5H7ezSuHqqk5UWFe5xkBKnuVCuyQGRKU2tLxo8GborLZCe2ah6",
  "key20": "2XWZCHCJGqoYBovGCR8KpLA4yQ4qDgfteSiXAbwh5H4YPQgcAwT1iTNFVnGQXMgdV3ajRDuXHkPMKvxmzrPmatA9",
  "key21": "5H1r6XerTM27ng77NQNNYcvaJYJBi6d9nGvrpPf24ZLCKXWuGiqd7Dz7sHfh4dddZTia522Sj6cEetdWrNUbqBgk",
  "key22": "37Zz5DniGy81Ls5rLXBfKihA7RbMaFPo9AWHgetMHtFnnTS8u52iM34hYeFxmzoAC8BprtK9wp1cwLMp5UsjWYXL",
  "key23": "2TWeesDRCoHHYPnyspv6j15SPtAqLLd9yZxqXMye5nh9jsVjcgA8549FxN2g569jtZHMAu2ogXSidtY6Syrz1kzu",
  "key24": "bGjbjSTXFrfUuyDttR4tq948wAgXHYjjW9M213FVhmCG6hBo63brcwhoU37pgeL9miArt3rkCxFxZAdZH1aJmv9",
  "key25": "5tzz3XYyBewwivxny2ztKyakoPxgW3CG4htvzCzXkZGbrd8xwUd625Z94PeZcAb5pW6WoRMwAE2W8a3x7naF2Fz3",
  "key26": "4xwsZ3gZCEqTsf8Tiv2tcZJXEQ1cEAyvDugyx6mEfqPep96h8LFxbLSSXfGUWRwxXvbwp6jEaJneZ9pCz7LtpeA9",
  "key27": "71QBFcjjLJ6vHrEjPmqxFdFvSYgkUno2UhtuKK8km5uqEUfGBJgZBkZLv2MRmiTUSR99LLCDKgb3ZjJT9LpyfeD",
  "key28": "346svBRaQqQASVnJEq7jjA5pNi8HPUVZegq8zYkv6di5rtWn1C44pSgpCLXMPoysK7dWcJ8cLDB8NDncgarRXFSo",
  "key29": "3MnQq8UMNtTo2adNtWECFVVFnw4p7vH3GANW444rroLB2Jt3eBNBM2mSE84gHdiEVuipdjJVrMyCwfWo8aTLFdd9",
  "key30": "2Vq4ym6ntX4bgbDRhawSuFN5yXZexvS1qvvQuyRUPkred3BuDtC7ptiXmxeiVRZVy7ti9VqMxD951xhQHzunuf9A",
  "key31": "54ZHoutCB6x5Rnb6VpTqHCTqjHPiFZLF1pqBBTD2zsEk56riWNvfecydN1tMkD5jMYkSRdPDSoP44E5R2R8ire6T",
  "key32": "4JdWcxdJ2MWTD7g2xLfaUCWESXkpWDXb8uDCJWkvC6vRpzvuLds2aZ4TyAkxQfh3C4HuopLtreM9YuA1gpKq2yZs",
  "key33": "4Mz8iQC44YnDdQE4r2UHymnrJBUDpKsoogSawS7oAKQVGffJWqv2oM2FcWkVGVfpbNt3fW2oiR1HNAYX1AoakzKL",
  "key34": "gccusTsa1R2hn6C2qtYznxUBke6L7uCRggDrvW1mBz1t8uuqakzkdyQ91xS2ez7aysBMebdC3DHRPjjBjxbhCw5",
  "key35": "PbTJZooUX6DaM4B49s1cMDiryvrSCtZCwDAfbjmVEvAmc6Gr9f9Ptoq87CMN1GanZUrUzCX3Sb11cFPjJjvkt8D",
  "key36": "512pdog8AjDdcTGe1A8Mcn7x81p2tmKqpWeknNm9fFQvZ8UUUP5sq89Zubs2XQjt3f9zZAbLdZYP8uuabDAmd8Lw",
  "key37": "5HMminzUZoFSqdHPy1A2ewvVwSyR3QSoS2UumyDaG85853D356rn6chGdvzZZ5HWzQQgE7gd4DZpXMz6kcWD7Qoy",
  "key38": "4sWM9rEcqM4w4WsRKup5BrLT5UaXdt9gkhovTGmfyn8x8YaFXp4VsVMUyQnJHCyYnuvLqFGhGERsjVwRHHVqvT2Q",
  "key39": "3NQoSkUGqCwkJwyhdfawqL5Zt8foEe1K92SYvPRyu1KfaHVDVcT5wpnKpgK69Eygn8TZADsWkxwHHFYRiVWvGwEh",
  "key40": "3UuGJf4DhLBsYQPpwv2CAxTGVEbtfhgBacuL3S2eeTSmhy6yDbtVDUVgFpBh4b4g4yHs2QLN7BWecz55xyN6viUU",
  "key41": "5vkc4MoFjrcd7ptiY7CQU1v7ARJfqvGC4duK5qfWMSqF8dyu15ApF6MfqXmXEzkFg4sBCDEqU4wDde9fD3bHx5JN",
  "key42": "4ia8aZR2oYTg7wzCMM8Z5TL2okL1Y7xwV21bACfeg91kZGAQNz1Lzi9eRmbnM3SeHSMpWKrNoyRkMRjVK5bPuoRe",
  "key43": "4s2ARX9joanou13XgKneBnL2ET7AXyBiG2DVNhb4u6kdFVyFtNfbP1P9ZYbNrEW6YhRUcDoycGpgicr66oxVvPHN",
  "key44": "Q8T2GThuiTqNue6cH9KDZR2bh3XcGhQfEdNhHcpVfbT43nUHLWj6pZmNoNDB155qEytxLvfoZ6LVYmkN3gipN9r"
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
