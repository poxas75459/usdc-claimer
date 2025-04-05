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
    "AhXgiJ5a4kbgeTSNGDa8oz6bXCESKN7iY8DFyrMKLFAtGfF5ef4dHjGWgv16Xp4K1gCz3fTr6k9LtXcAquH5zXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y9PPJPd1CpxVkzFaMsFtTpZuV6bt5Pdo1kKUxYuW56mtJoWC2h4PXZLCr3vkavrEKpeZENej5AsEbtx9BW9WFLJ",
  "key1": "o6CTcTvwrK6ZY1XWeE1WGje5xXSohXuWN4D8tjfc4FqZxYdcRpVk7TN2iPLF6s3EJSHK8tKzE1K4M9Mesw3PTEq",
  "key2": "5ZG9vKdAud176MoGEvVCvVvyhEiCPW6W6timXUBYvgP7yYMca2GcwS3SGZnMU72YpXq1PPVZqmoYzPaxrACuUDTH",
  "key3": "352jpB2pQzJoayorHMTLhcx9anYKE5epb8Pud4bmsdBxNKyPoeaovgFVzEkR7qTNBJtuyMqj55zmumKY5rpFDNFG",
  "key4": "J8JtJmq53jwozJCGT84jreqNy5qArGKfvas3cLCP2GQChKQ4DrRpFPCnLjs4C4rM1mHiNCUxVniTyLeUfKy4rrt",
  "key5": "5DcvZNoGnN97g5TGCM1ZUELYyJuGsAowNfXKfTyZQVQ7yG3wpVGbjQUzgoYGTMVhF5UaXQg6pfiAG7vs5eQXY89a",
  "key6": "33tRSd6dziE34dx23rN15KMbYt9mM6ktD8VC4LCB3nUmRpmzwW9zppHNhKWtGg59KThK9ujd5xS1uBtwgyvQWsAT",
  "key7": "4x9HqMuWMxY3WGUakEdh3yFTpaWJd5Ef82z9Kog5Lmh1jZdaqpsg98iM1QQrsVcm7dDMiJVpMKzjg4Mh1qkXdc2E",
  "key8": "2QhzAC1FpsdsEy23KDCXSCyYzDZwswcK3J8qdbgL7KdyW2xWXvV7CjRaBs8fpNZMxSUjSi8Y6x8MSpJTrNJU7cK8",
  "key9": "64Nk6MPY5jZBizpwAid3RZodcbQzDA5dGQTk8hsQfeMDkPS38qtc4StLF24YGXnRiKiJvnMfRuHX1tDAdJqtuMqe",
  "key10": "65ECqu2ZdMHGUekW1omfTbPsYTRurm1i67XYtzDexyCtvQfJjfYXzTSTYwCSDNtDfPFW79gfd4hF4yeBP4iLF8Xw",
  "key11": "5XENpagdqZnANmqZUrABJQ4h6dqisznPRJXJA2g6LjaZujVZPmFuQkBTYbfhgW9cCSipNPm96uqeMY6tPpADsgwT",
  "key12": "2vrdSYYWypr35PZTqhsFr47Z4PRVdKeXn6Wd3fwQ1pxktb6g7ka2FJeFmygC2iL2JFjFXG4yhzLnTPvfYY7WKvgc",
  "key13": "5Q7kgQcjn1YHXNUKmKhuk21dAVQS6Ua6H8c9e65cACNM3f5oDetrjxxJZ6uD81bW8pVZYqsBGjgn3PS2A2FbfmH1",
  "key14": "3r9D2UggvL7f2JsCLYpWoaiEdWxEGF3u3WdfYsW5mEEjy2MC56aSgabVv515Ykfa61oxiRtXHd886ZqrF6Q8X3b4",
  "key15": "3g1FnZ6Bzx4R4wzTJDA5vkbM2pZ6QfMNHtd6hRUjMfMeseURfTYF4TUvyp4XrTiHw8mtdASX17GMGg79tHB667TP",
  "key16": "5jZRQyNihak3cAX2h6ZuSyK7mhtBwj5dKYzpXWoSFYMLzNREvd8aHxR3oLgzFRrf6Cm7bMbPR5x568pWm9pRF7AQ",
  "key17": "iptJufFj1CeL1W3rzH4ad5BhSukHCE3bUL7EQNo1CCHA7p5hvmiPeghtevpCEv3viq6cBWCaon414KRmRwtJNSe",
  "key18": "65i95GRr6GxDvrmR3RetWkx3GJpsqG2Sd8LBCRmnYeXuqKPBWaqL3eY53cthVyZDTXT9G14ZTpSZqD4xgFdbrMq5",
  "key19": "4PWaCfXjK2nzfjNCjqcS2HS3NYqnzDACB9fHnuMp2mhxxhpzbWez5Bc7az8jDWE6thGZipgXFadTaf1roXcTqQLU",
  "key20": "2eQSD9mcrarF5DCM1WcEduZBbRZzr8voW37ugJuvT6ArSHAUGmFuxyaRwMPyPSmqD9ALnYb9aJEQhHziEiXpbM72",
  "key21": "3iXTTbo8x4gnvaGjHWUYWpS2Qxd7TygGoB1UFZpvJgtW9ahend2L6r5z2unCA5PFepwZ1XhgufaFW7n4G4cQjuBg",
  "key22": "2Vkvj2W6GFjcYdbQTFGCnNai2xocWGT2tQ8FZqV5LiA7dRUxHAFJmJt7jqPV5GQA14y6u8ZdXSQ5kyq5cUZZKJFk",
  "key23": "5QFWc8M8tHDbSwv5v6T2XdWYsgoM1JC1mijjobkwoA6dQ4uX1yxBKgbsFAfJVE3MhPw7mVX22Bj6z9KUz1TuvB9q",
  "key24": "WRzw3DLTyNNFDsWghRnK4msHVnjPfbT4GuuEpiYeTfJFkab21PtTQMDaao15q2hhNza4MrveeCQynKR91T5m9aM",
  "key25": "58TZj7ZRtx1Dbby5Dhbt6pWKRmM7q1Mf8qE1G9pTCGxFr5s54EhECFMaH8fj9ANjHHr9ia22VALmkqh3YKmR3XhL",
  "key26": "4WBZyFgUi2kx6q9Uc8LtyW11PBg5gLdxRCDNLv33S7T7WyLhESCydzvb1gcecnf4SeYGhVh7MXnaPLMomYBfuWPx",
  "key27": "23o9yjoA6d6cLEsXmzjf3XTHRQkGCrzgKyog9ngYKgcd4fw4yRNVscmgrsGQCatWuZQvCqipZrS6GWQ8AAuom713",
  "key28": "5FDKPSYmmh68AFYLP85fFxrQTHRk6zs8rEqGqNtCah3Z4xDxHjC9j4bPzeC4WTVBgXLcJ1ES3ovEkBCUB45FVsZU",
  "key29": "zGonw3u9REWbBsWyYRZFvTuzLrryJPui3L3ArxSfcs8oBiksK4uBsCkFFWrVikSWRsimyHbBi354ygZ3jktTzXK",
  "key30": "3cUaFZhjzsZV3Mw8ZKkNVAWTDRq947NvMeHbuK3Kw63xEHReztrLMeeAFnts3NsGzcXJurXnu4Qi4cxX5dCsRVs7",
  "key31": "3hPe546DPM6jxMrCW9FVacH5bG4iVap3aFTJvZWr4JGTDD2oVUhCKAJzrRdYpPWysRk1oxRUZ4zKDVUuuBuZprxH",
  "key32": "5GyLMJDBQkNDgdjBiuArsi9nach3US2mBP494EscVXYJrwx2mXL7aToDdo1sRH5bL2o8Kix5n6EkMgCRUTe4NyCA",
  "key33": "4VrLmc9NxAuGaGfTQ7MA3crAiCiirCLWrTxBVdasHXP1MYWcUDLuiQVdZNR5aJHxXghy2S97LnvGC7eN3VC5QiNg",
  "key34": "2fDJS4NRk2dvMbEvn4cwq1mfex2kHdH8QvVMxHeD7JvQFMoJEFDDcWk2eukN78yqXDb7xNfmoAdBM2em3awmKZLw",
  "key35": "2gP76aB4rvuUTnQ8LEXQ13mwTzjo6yuQrhD33KoPWCL5DnBZasLTFdG5eeeZnAaSVypmj1ZVEKQcKUtR9r86w3Ft"
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
