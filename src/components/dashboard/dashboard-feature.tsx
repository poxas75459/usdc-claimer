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
    "37SdN7Dbmvii9dHoX8CZjDdJzJk5UriUyVu2fXVa59U9oa9QgssPNT3vXdWDBKbMvzeTbq2e1Gr8yEm8quPUaTLv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58hpqSZNWRwKiUE3hsS9zd5ico74RFPGeyf24tDLrU51HgW7iqdoNWSEZoHxQK8yMwSTZFreLefFFV1H4UYFJx4y",
  "key1": "3Db8v8pAWBox8kAzqzvzRrzNqK2zL7tWFsudPZe6Bb9sUzH1awsqGrJXj8iFNpjFtnKTEsrxoWZEBcy7Vw6m8VWq",
  "key2": "4TKpcQzZEcrqvU1cQPXDzn21pkTnhZdJsmcUrqFUFsPV5niRgR4MenxGhPVdceu1dEnEVjv5eJQHDtqzQiwAAP1C",
  "key3": "2wxaf2zFrnE1guW3jcjjtAabS2rdNPEAksqPVQC5nEtTVt7UsfWSfTxKfieoEjCQdTf7Lpk731E4jiPFmHv9FwZR",
  "key4": "3i8s2mjnKsJCZBYtWy2tnhHo7m2FpXsgfatuJqxqTn96ay2szsNFgrQjFH9KrZLE3Jo4PxD3b24KrxdwuUqgPcsL",
  "key5": "2FtY58nvLnkv9PzYVdQwprZGGMm5ZCUsB3YdsyhwGDQrwfpWV5CammYXqWwdy3BFM3qt7ud8gsYHDmDPY3y5bsbL",
  "key6": "2b6C4pz8YQk4ishKghzcvnynavMKXowaqA82cqTwcNj5281rReMZZ165NNewt9PAFbM32wzYPnLscRGoBTmBfsSZ",
  "key7": "3TjKkJtSkEsioUENRDGhUTnUAdDi9k8V9rBRNKUPtufNpTU5WT3Yd89JbAneiWd2APJ1CXFfhY4pa7eFnXWiXHki",
  "key8": "33TU6WBitAkwPPRUBpbzrkaqwNMyZNLUDgpeJaPhcfSYrUCHb5YuDTzSA1ju5cnNBpiDmDjXbUKoJ1ZJk1NhxG5i",
  "key9": "42sSEZFAuxMNQ8xVDLdC5RVgfeoBdrqfpZuwitZRasMFUn9x5o62trchPHmYwncd3pENpnAcxpCwsaGSZs24inye",
  "key10": "4ZDPaGQJFzZ3h84GzQgMsAvQPCA6gFSeNyGBWENUjPSPqcCB72Gy1RGeowBwkXqv3ufta6SCdMdNqPSJrBEbK8b9",
  "key11": "38i3fFJhdYMW6JBCLdRC8mHjhCJ1ifZsjdoJ8WVwEo73soiHipcukvDaGhrtxTdMP7Cm6QkpM9zwgWQPChhgGjj7",
  "key12": "3abpVsuDhAE2gKHmin6r6NNmCVuqgc8JBvsgp1XK6QgBFPBzm6w68S4sxeo6R8KzngNBAb1zY67Dn4mTxjmeLDWv",
  "key13": "JeK6U4it3Xewk3pZudq7EFNXnzESootTPNtrNzqRvqguASB6FLhSxhbYpPhCMkpLAPN2dpyF4ijqWQB2tWcbBrm",
  "key14": "2HvxT7eVhpU27jtssw3UN4fyK1E7Psk8HRbAewMq6XyBxszybAwLtjPVEheRJ54TJsFuZazsyhTiF9vFytMiBhM7",
  "key15": "2eLexYZQVVgCQEmaayNvBAvos3S8nfyTxnahN7b2SiuN8mvTFry1r27Wc7qq4u6XcuGucjcxYpYTd172rDvSrLmV",
  "key16": "541dE1r3mycNANAGZKyFQgJAiAh5X779uSLXh85s1dkfypEXdgdRkH7hv43cSFF6kLVQ3qfcdpfo9JFj2XKkj8S1",
  "key17": "3Vdi3TmSyNuHEW9BULJe3ZpK1Rh5cu68Biuc5uyuoGRhdjhdZMETR96D3crpc93AUa7j3GhdfT3JoFa7hs29urht",
  "key18": "3rHUjcx3bex2JatwrQERVNYwNrazcteR4hP6Bby8N5BN4hG7XrVqxXFAoYYNWBHXfb3a5yVo9XfhM931sVe3cYYB",
  "key19": "3E91yFsdSfUDPKJM2AP5obte7cjKLnBzJ3kKjWyh5gVdNSWYHBzi6LjGxiZ4mQkPGhBn27sqbVigVeUM6Ki2vash",
  "key20": "2UEopB74mPavgZuU6WGH71638YfRyAbvEDp4x54ZVcxkGsNK1bjuy7hcrN8LxPnA8MWgmoGe69CaZ8PaVm7puFgD",
  "key21": "3n6Eag7HyBEuSKKd7EVhGii6gY2qzUnBQEeJzRRj6v9ikSwnodvtVNjjy5QPstystghrpsK4BWY6jyrr5zxb4ixs",
  "key22": "4pyddZiPLmVSc6fXm9vMkBPb8HknKUKn9NB7AcQm1Wi1Z3QW2j22AuyCVGQb3N8tQevm5xPkUXRBfjpuXgmVaUvC",
  "key23": "4JA2XWY95uAUfURMoEYBik5ReMZeueTN93i1BcE87dyXQfNCUGCVKZ7yVvxPpzGF9mgfdM7qNqjRTZf4ym9i8Ra4",
  "key24": "3aqtfUUiPgnNuWG7wf8u6FxVoqg8B9QHzDupcNvERMDsK3aoszuZgMuJ7WwAFbXQdsgtF2NBAoH7rfxWXepfrFt5",
  "key25": "2Ep3qSnh8EdqWhvsamDiLtYuoodeBoHBY4pCcNu5FHPP9sGcRidtRhLRwWDGJ4fNNk5tRJVKgwLuPRP2vHqHtjz7",
  "key26": "3rM7wJHX9dhK4w9KQpcvUKV37YWDGMBpsvxo56KNNGGJUvQTG2yHc3FFJcf6casvHAZZDea6zkA82HQKMqAPHJyG",
  "key27": "4pm2FL6MoDhEVfRUYa3RrsT52weZHaELGG158rVuomfiGoMcSn3Za4W5WjUXUL8UovCxDfME2uowr3oR8L8LQnsr",
  "key28": "2MCqXX2N3xmFUvFRkqRkq5SNF7jvHPwJZSGxCubuaaKyJT8b17t8JuLj69FRhCRRWUAfWv82mJLXBGsXKNDsEqsk",
  "key29": "5zWBX8rmqMtkopZwe4CUcZS7x7e7yHaUkoSernMKAf7AnBndW7dRvraByzfUsdGnWFJAy5wemyPAW8fiqbFmjJk6",
  "key30": "CZBnWmwRDUuunVceu3oej8jvLpSaaJe8uDR7FqHACHKbDamBdCCbWjZJEcqjuCWqCev5bTZCzknTGdrxA1L9pBU",
  "key31": "6XBXQiqSmyyZocr9zLs3q68N4TTxTVjwJ9qacGPEhcVoSdbXZB6iG7Z9TGyHo9y4tJXV8C9BxpYnJaBTwvjsyMN",
  "key32": "3ERwtoXQmzgh4HRjz22ErNjda34Qu2nt6CPW2XXFCYwByFDS5iYx7XUJZFLGabijfmABu6gps6owqQeCLhvwsVyz",
  "key33": "4UriHo34yPKSwCSTz7pk6AdN7GrbRgDsoPyp9r3nsaqbB6BM2sRJNjbWroXpLwKHHnBMZNUrV8n47ufgYdzf1pg",
  "key34": "4nysTvKxUyCPJBFh8nEhj6Lsx7zGuJXpAtRu4jo9aBaXK8U5pqm9tXRURnJs7hZtvZoKiZrKvtRLJXU675RWT6wr",
  "key35": "38ZZJpqmVqqfMAa9DcsUstM9JncErc78xGNEK6q1Jh3xtpSGwCeLU9qN7PStWaNevFFTpSif1XgFxMZDPJMBF2ZZ",
  "key36": "56X73ZxT5CnqcsLHyNmLpAbKL3SFiVrus9ikZchsRqy9FPDgZ1mMBjmCDW43Uoxjo7a5TZhAeeGtE6h3nahSBiyr",
  "key37": "2DnyF71WhsHG2moHYhkkop8DCpSgquPRRmPdnqVteyBhUyTz9RLML6YtXyU2R5cLMENusF9jxJAqtkbawd1GeR1c",
  "key38": "4L2pSAZgabW72uBCa23wZkxqCpdunWEH857RCSD5sFDLdmAL81ANchKuiNGRDZb6Wq33oUE4B4rKXxA2RpqzjfLM",
  "key39": "3vonr9ywZxJgD5CDpieNygb7u54cDkur2LQtDW84mRNtHXMk8S35nyTJQTDN4XWor21jn1oquSaw3Q53EcJQWuVF",
  "key40": "5G9f1AE5p2ANk5gyf4c8VTiHbaWXsdsStWDS8EEiQkY3qmcbP7oz84QX1yeUeJhx11VHkcVa9RsWP8Gv4X8eb9HZ",
  "key41": "9c2ycxWfkgz7SzVTFWRVeaV5SaNs6gMdqpYSnrnh8g7K5h6zfWVbac4BtEVsCxeViRzPVPo4sGWeQ44HDFoz4hV",
  "key42": "baUMDjSFcYSTWBZDUfEPCEyfGEpa2SdVowdTiTtfrCZBS2qZgY39iJajtvUTupT4j5heCBCxhjXmdpuDZ59C8EW",
  "key43": "4VRrpdVpodWRnmHBZeHZuNVqZ5rvjqCgVRo7gJfga6PMkGzeD1ZNnxaAUTYxDcrpZSkRmP2tGYSVgNpuA7XLSEMs",
  "key44": "4F3bw2S644eV7qj3TAL8UkDaD8ky3GUJ5k743ShSQSWdfFr5PG9GRWCcZc4yP9p8Xe513YUoRCrUomd7itUWtwPW",
  "key45": "3318J6yyzgCxScXjwgWEsqcHdQ3aKx6NMd87jvVbAGYR3rDRj3wfBnMGPgjuwiENqEqmn6eoERGm4fgTy4peHCLU"
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
