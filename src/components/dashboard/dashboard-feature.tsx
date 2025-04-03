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
    "39av2hcMnDMwi53JCMtFPCXWam4ZbE7m6PMYR8dwuVtGdLqQXBHFWhNNDuDZQfcMaeD7FmYdTLEng289xqYcSXyC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hXq2BDJoSr1aGxuEZvpH3bsjFuZo7By3xJVYCjr3uGzP2q4A1nHZS9eSL8UuiTEZnkEXKRjkNJRJkr93Lm6jEom",
  "key1": "5743673AyJr7gFLvwDPEEc3r6Nj9PxACq2ppNWCxgedmz2M1xdneBPUZEhTnunuyRTvceJpiCBvwHuZZKYJqs5yp",
  "key2": "2Yvm1zHaLxKASkhsB7KSdRVMsKzw5XUzFKPgbx74uygmjqHFZX1y2dREUtrKV3gKQj8JL1xL7N6d4kf54Stdm8EM",
  "key3": "3LkybpiaboVRL94fWghuZsQ2tANRSfMFLN5EezwrcXshpzgAuSvVNLcLpZe6F7K93o7zuTPhFXz6BHfF3iyJdagT",
  "key4": "2W65pwQKn5rr7CUfx11DcHzmJmgFAKaPPe29JfRYfcCyE5nrrtexoY7onakY5KEkEtA1ZD7JKGzYNFrZY3GfLBUe",
  "key5": "4AzrCMTb1F8PKoWumXhZeW5kfxXEPHVAiztMHrfijs5R8F4TcBHckWNwpq5de1qaia5zg6cJDgsm83QmicLzR3vX",
  "key6": "25iojxQHgejHBVZ32gfxXm6BTGjQZYVoWUU68WojEKv7wmdso6cdFAjbxHbiDsfKJ9AGFoR1wT6Lo6cxHQiNRhWr",
  "key7": "2Pfcz34EfSPrQji1e6SiZtFixEKPovwW1dNsPknso8NpwFjuqTUZoTRNyfAMMmoizxfzxzriHPX99MkLxj3HM8G",
  "key8": "3uiGzvrm5Uv8KksyQcA9NsRtqikqBT3FDjAdGHj91FNqzoG2sP7PtqbRJeLt17Va2xo2NqoWuPdhLQbziQQtqiSu",
  "key9": "2CVQQEx5t4o3HU61vFQVXRJEgXLmrxB9NAckqbFnkkp22qY5e8FD6LjE6B72ietTeRTtqzaeU1MFhenpFAvNKRWp",
  "key10": "5FnYFzBmFieNCe6neu9x5Jr9zs4H6cbWAHebeLqMi8s73Gy7Ma1iGjB3thLkaPyy3BgPerXsuMjEgZeSSvPCEyxx",
  "key11": "5dgBrmKJE9CEf8uAUReWeH5zzZj7zGqkzPTp5yigvD7qGmyVEKFk7AnQcVSnkNC7XgQzQJqVpiKyfBCNuCcgpju",
  "key12": "5oaFWAk1AJk9uRDjZgqzp7x2pp7Ds6cmDLDZAdUwMaHAgEdxpGEarXPsXpu9YHc2qfW32wkbgyaSxMFyzKmThH4B",
  "key13": "BD3kGWbdbV9gYQxwn1JX2ZGEumcr3gDwUKkPLc5pd8ci3tc5hWFG4jFd5AL2XteepS6Jr6vDzoP4GG5fqGCJ9oR",
  "key14": "44Guz4515Q5JcPn77SmcJdhDZ9GLSMq2vsZ9ozR4PafqzmmfS7KbNxgF3kiijPMTNqE86V8ok4VnVVNay3JRGTog",
  "key15": "5zmjkbfxth2hdd4WBVhYtgUy3VULUpEUGgThsc3KGAhJ2RETfgcW3P1SgV5TA17YMtrmr7HUznJ8AJTE2zqvCEkp",
  "key16": "4cRYmJjBWyPz5wUE9kq7fRCTJBYUcnDGwAat6NaQSvu8b4JCaoTKFDYSMJ8iVvXANZyFkw3XLS6GWgy8HHscHoha",
  "key17": "4Njrfrt27U5MJCeZkKs1CSE8qAaE7uSEyc5UDbERaBUKdQhrZ2QSjwvCcFn4JXaMzHraFa2kNPEzfnBgHC3w28LU",
  "key18": "3PHBAzSQhBkDGmWEppVP7EiX9k6eJcJg1Quwh7FXJ558QZFPXyiY3a2Yqr7pcfVEdTiAyGTyHLLV9Cw2X81eZeeg",
  "key19": "5bVAAxqwv65khhtr3MiUQkrv2Ac6Y5y2ACvyVi9HNs8s6KHWWfpiPsK4c375WWrQ26Z48HccbHHvD8UGdjzN8xtH",
  "key20": "5mStCFSHwSTFeFdqL14DDYmVPCz8sZHva96tiYqxxes4egJrBYQUz5UALvkQauuRUJ1xsYH9YzRchS9Cb7zKG1bH",
  "key21": "3xjxhjVh9TZpiuB7MiU5Ag2E94fMecmUibcsKXhdeqBq5NyXMfJPRaXRYHEBf8YKCq4xxpfHAS9SFS9kPce8YNHF",
  "key22": "2QhMAqaV5ytce5gBwoS1KR5ryW3BcQFG2Weo7E5o1nUsyVEv2GTvkxuUB6M4YqXVboxKC5AVX1fvgUQudt4mzw3U",
  "key23": "38qwqurtYeLKSCA2vaXPaQn31nbdyyhw8nUAykwoV4kje3xK3YhA5UwBrT6ojj1FXNqX9ao6VYR2LSfSFuhYM4Mu",
  "key24": "61xGzuCNaPZFtkiti4Bdw9ARd4TNhyk4W4nRTfhZFEgmRppbcp6ySD1gQY4mSjn9HNyeMrRkE8E9ZqKMwvbz3j9h",
  "key25": "5MZLLR7mZWEMhHo92YQuKtJPLLiMfF6vqSu9ypCv1qQq3JEi6fYzW51FYNexxQaurB4RbitSwmbSqeebLTnVEWFw",
  "key26": "Q9Kzif2qDYSa76FBzTp3G94mHWheeY2HP1pnxVPgQsLR4Ui7aiHYRMQS8sSTgtNivcYqNBwejxrvcUGrWVomm7A",
  "key27": "4JiaGxGpkgxaGGC8onBXGDMaeQjo65CiwSbcBFjAmSSmecAs88eEEYddWF9HpWWrdzoWj1kq7zwx1iX74i5ubDLh",
  "key28": "Dzv8YT8tJRovjf75givDD7Z8ypjreuL8oGc246AY3PY25ECXMswue9GXZnWsseY9d5EDrMHxaM3VA7tGYE2QPSE",
  "key29": "zjrE967crxneAxfMWHrTj2c4QAQnudZhSXnsYuEKzEB8xRm1qUfBHMMfWxJ1oTSf2Nun4W65FiTtwvgrHJWzTCZ",
  "key30": "2wBufyJ4T85WLRccihksxKHBfasjTbDNDEbrP7Qx2MdDkWeD3bnTrPuUy7zaSGea5eupy1iGCFQPALCiMR1A7V4J"
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
