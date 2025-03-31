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
    "4ksrWRaB67kgHNVqdZkqjiy1D3TazdW3JwcRuCsVSJxPnkjQ31L6NnQ5222LV48QKYmcKkfMqQx6aCfeuModuSrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hDuLJsDwR4T2cdmzqeBKM3ZsL5jjQL7mCXyS6Pn2cLgggA9LLPV9a4sWLRqgG6whzRSLmexk6yFropexDJCSp54",
  "key1": "roU9VneKH9XNWp4PDFHwfRhMopTD98LNAajcQGaf6HxpXyPovNTN1beYmweV5PZWs7DzCzP82AdGe9Auyb7ubBE",
  "key2": "4jjxURyD5ycFmr4nBhTatXabs9NujRkmEKzjc1SRJKZSASnVEZgVWdvT6S9pTeu1EwcU8Tkj7A5fSsbanHwG3EXu",
  "key3": "3N6SzZ3NrZmmeAUZHa3BvdisSqfueeRYr24qGGkBXws8XnbGVJEfYB9Y2jLsZqSLJ7fe9vfYRnzZeqMVqADXBWFE",
  "key4": "5ELEju9kF4RkbKgAefwDjXbNLk6jjz4F17hagWYGYa7qBakLrwenhMS3rtuU4oQ9A7d7XQA5Tgkch1hnzd8fjHrJ",
  "key5": "5FcPDhvQfYekE2v9meDrSi6wJ1iePvqgbPvF1AMh3WwyzGaJk4hsUDZj7gDaroXFBFp4YdBzggGLVAWk4oxyRNJn",
  "key6": "2HGRK1pKBQ3J2AXS8Ta6oMK2T7wSemiQ9eRwkBtjByUngN9kFHogD4sZYsfrfAKj3JjkmQaX1E5a8SuMhfEo8J9Q",
  "key7": "4fCNTdTSL9dgqrd6Q5eC6XiDYc6SKaT4n1YVVWoVvHEmMWTjSL4AV8w9PfLtkG51mCEnP8kLvN9kU3of1dRDRQ2",
  "key8": "5iFrL4cNBAU9kxC6PtzHV8XqLgK3vpbBGMGgBGhvpjnHV1gxRnDiswWYCRFHRmNwQGnJ593mDTzopeCf4HpN486w",
  "key9": "2bDzCLcqfeGr7UcTGhJ9Jfk1FsHKA7rdcJFKrGHbRstbzLE3qXkJAsgwYsFBQFaKno5SXop4sTpe4cCr9XbCoNvv",
  "key10": "3NdFD6C7Ld7dQwT3uk1uc6sJjD25j3vMqbY98TfuKKULJiUv6DEwxxhvGGgQtu7xL1CEPWPrwNYmQgd9Dt8NtJAV",
  "key11": "5sZirRtxvx8bgKysGh74thZbuPUfnEiZmCDrsabzraVM4gh91Ns4rmhyxvf4fmELDQxnZdNp3eagcNyvCcUPKx3X",
  "key12": "sRukgwBFyq7C2ij7Wr7f3m6yts13iccGvB5PRBuEeyUzR93GNfVrKbxetsan9pKJ3gLxE2noTHBBeT1cW2LFubg",
  "key13": "2wuKrDdvsqBPuUtu2Zn6VYmRA1SaEXKCmicEDyxvcKEWbwND66fkuhxBCDimRavmCQWNpQiZ4bfhwgBhdWFiP7oD",
  "key14": "61cYLDU6QDrJY8UCetiLwqHC1dyZemG2DN6oHY8d85ZAq3ywt3Pg5uB2e8jg1A5ZqAymxCAfh4xqhStg5mWeUc8D",
  "key15": "2kMedipq239JRnZ1SE1B9fE5auNH5ru3KFQW4dDJcstD7Sxixo4Egio6dyQiK2VV7z4ZoLPv6TtJ1EEdYsqh2jkY",
  "key16": "5vaVvSq9zW5pPHJ5bH9cPqu9Cov8JhSiBFpdmj6wQwvLkHxN397cYRG8qduQjurijNfRbSAjyRFU7sHjzTXmh3vF",
  "key17": "4v726uxKJQh6ApnmGstnGnNUtTsWnSSjcPysJe7eqGXeVHd81uL5rtQ7nDuKg4vgfUYHrUCDmnbvFW9gYEVA7nVM",
  "key18": "2Q2WkojMqasNtsnyoLcQy88zCxpYKvWDRPBv3a2GSkzmf7zZtXqzwmZaxDf4fvFN9kkvTBGrvJjsoRe3jjCR2HMk",
  "key19": "4sSy3xGhhV7UqJADuVU8JHudgBBsGAe9UXhzHPi3WrwmLCXeE3ZnbHj8wK7G7NMWmBKvD8mxPZS9ZZQUFH8Rhij3",
  "key20": "4PSqV2amQ8bTAKqLWYa9jKX2p6a9MpCFgvWmAQKwdESXD2CTxmrZLsSBsS8A5vCDQC9vr2AHKv5cSaAdugX6bLyC",
  "key21": "2dhvfEmfTsLPb3DKRwyPCSocu1YEZyjf84uW2FjoL2yiGDyzgwcKtiKJEXUgMnP8QgE2NUMNuagSbiqExtrf6Lrk",
  "key22": "4aoKzqxgXoAzeR8jzfqCmo8hvDPa2yCr32RycxJ1nnZD3p89ndThpG4XPNPyZnL8HBwji3K5ewFRWyXxSYLdamiU",
  "key23": "5uTXAe52mxHFx8mQykVtyG5o2PrdjoLpNnYZt5xp4JWRKWAhNTJDUkRtKH8pMJKZSCdYnyUsGPw4pwuC3hWtACZ",
  "key24": "4E4YKqLb1etyLyp7HYscwsakvYgcYvzUN4AqNDiNES5hnh2fcwqRuccNxnhnu4NYGCDyMypRTcxoUkSMvS2RL4KG",
  "key25": "bhuE1tUZDnwMXvsAnBTSGX8ytKgR472wnP2B3QW7b734SBAKmvqvx5U5xeQ2ZKbLcday42gLMWohF1Runwx88tW",
  "key26": "5YwjjqVLKtpvsskymtT5xAGfqRETwhn41iaarRNzb1araZCnpkSLyHwehh2oFviiFVPjwE1TMv4nzm1R6NbkxLTf",
  "key27": "53Jn5jzYSzPGEJTqy7YzuWeJ699VoCmmkq3CcJKY6DcsakgpH4p33BtgdvXsn7PxxcLnEiUBuFrKifgxTeWmusNx",
  "key28": "4zLUYgnpU4KjByPMJHmA6hZzLD3N2P4v3X6tDaUueJrZqxnEfdFD3iffjD8oPj2vMhtWuGR56Ds2iTk5aK9eKLDa"
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
