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
    "TqbqkbKHxKG99UJrgiKDiVxkfFUHY1Hn5rgeNGvEpCeFUCZXbMdzPLbmZuYW6Xp2qyhVE4bMyBQCnTKsCEUWCgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DF2eCUH8hVuqQvN2H3afQhyExNWjFW9swruR7ufesPKCRCm4MGGwZbKc8624PTTwJQ4je2jAgMYp1mi9xbTbkx3",
  "key1": "MhMZvLusVyq2aVtqBDa5ZponKM5KCPfTrqm2LXnFvMrXJspw1r8jXYeNVgxUCoddQN2koVrqLVDtfepX4Riger3",
  "key2": "5JAvRdiCdgMmMJEDdj18oSfkPEQgjzsj94AZnv5VGLVv4iaVJnJPKx27VYSq1oDc9Lh5uaSotqgBYHftUhNVAKh2",
  "key3": "3K2kHAQRszcnnfoWbpZr9DLAJUG6Cppzf2xeFJfHd43iz5z2tuPrnPkHbTzfsprNPbC3uQJzXh3ovKcxt47Yx9Hd",
  "key4": "4W2PvUrUrYHs4e5fXizKz8frUa568LVEHkRcEfUxqd6y44d23BC2FVLvoz1GJv9vBjJsPpi9eMiiP8UzPEtDL7n4",
  "key5": "3sMxdyAhovT1Gtpn5uCWFBJrHPMiFDSZ3bTmMpkCMCcZjvVi7mbjza5PkWEmVU95atDQGyjffiek57vX6zYDdjeG",
  "key6": "3FGHZmkaUYDvbncDvMvYp5WczrGVYkfzHQ6M6YKRtaJCzqExWCaefWqjMu9tFvtcD8uidLquBnei2KBMAMG4Df2Q",
  "key7": "2kLCgUTMed6fWNj5UXzxZFB25QJ7SxcdwBAeiCEAUT1HBeiUFFnRs3XxGArUc43HuectKf9BFAQCZ3XYuszkYgK3",
  "key8": "2ZhvqKQSTqb4sHDKoia4WGjS5m62eTnMMTYD3pUKoejJ6fUsKsVp76F9DRaZ7FvMGEnRguWqMTF7AB5wSf9vXh2S",
  "key9": "53ZvdUSyMgaJBQmemCSFppt8T6XufdJbFwPCm1hBtbRfMn7KHGmuXjwWpcWFkxMC2ntQ82bSCDRsy17HP2B3Wo1U",
  "key10": "5LK3obKTwkJqtAcdUSNaD5ZhkDQ82pFRmk11AkoEfHxKNkfktpRptFL1r9YRnSxmKdSciHMpP6Aa5egKAfF6nEne",
  "key11": "4AmXTUQwQmyeotS64qTr2cchYSdSozaTiUR9bSLh2rHskBbaMUhbRQFwsf5qWwhW77bdFitnKKAPwvWwu1K1uA2P",
  "key12": "4CK9iwUMfiXhydYBRsUZGLc1SPjyJ9auxhqA7ev2JR7nVogafM9f7yi9pAYf3biuU1zsgMuucJ8MKZsZfyckHbxB",
  "key13": "3FXz5qG8eJfLcLHGctCTJVx1y8sjPGmJzYb9ioFGX1ReQz8qi97dVN6SYyFKDZ2KQ3Yb7JicL34xcPJSkD5KrFuR",
  "key14": "5LhM9DjGazthXL4FKjf1PXZkXAQsFn4VdSYLVES3qiM9QMrtQe97XXdhrXyRnHZtiKBm4v4gtsZpWUAgtDhE5MRc",
  "key15": "32EbFoB1Y84HLf6fth1HEabQNABvfEZrP5b8MyW7iu5czzFqNSVpNN6kDGAVVRtLy6gVVxuXxUdfhxLVL8p4bh2t",
  "key16": "35XcxBxPk9z4zndFyYgX2VS2nXMWWV5WLfYXHSAEQh73DYeAGLvsVPAojvp5dpogP7dnPbNLwYGx6ZuyEHDmvV7Z",
  "key17": "PnWcfxUEsSrq3j6xTBEzVf8gfRXUm6ii6noLUzda3TCL9BZVF7tugnPehA2t7oYpsJu4FikU99o1R6S8VyWPASB",
  "key18": "5L5JB8KJRHgzMa8C6XwEk7VqKd9FaRPHtN5h3rocT6ntxo9Y3tFXuYz1fZYu4upPHG1gmxExyruix164qoWFrJV1",
  "key19": "5Uz5YZXBgvjXbMhZs1tvPDYtaPBoUwh5bBBUtJ9ioFk7DRVKmqT1CAdCfXsmM913YYU94yQkESmGTkGq58HTia5w",
  "key20": "419rNNZ1b1BaD71bN1dT6YgRYZtRUG1HRPYTeBL73gtSmEnrThKpk9jwZiRSf52qJuJtfvpfgXtEkhPxHb9mmMSR",
  "key21": "37rSmd4yEPxXNev3xpXxScrYZuhhGQfHTfZj8oSkfwuBvpzaG1MrwW2t5J8BZaV8gSGUzyrLhFTxz6p8or48ZKN3",
  "key22": "3nEL1d582MLmq3WZct2e7MPY6d5UXEDN6CGW4KVJ6q4Fr9n6fzZaPGSTyJN9TK9SN7YDL22wbLiFE3mLQLTnykYv",
  "key23": "52aMTn6uc5MKuu7dhx8VeWgMNxaVxAN8styV8eKxUHA8EDrSqqDrSiH54CGdwrxrAJurfDyZpBPtq4duqRVQUpNg",
  "key24": "KVJgP1WjMLH98X63ZutLN7wKmpmPXLNqY55DPhDMuezGrGFSvVcMWci4EVqS8vGqp1K7F6viqSzsxutzL7TZwJy",
  "key25": "4ZcYL2Y1yxPcwW8sQc5w6ZmJf7JHgVbMBVtELwuehBogd81Q3YCyn4GKNkpHzvqzspFDJ3qGHkMJQVBkmmZv3aUd",
  "key26": "5Tga5kT2NVvShzASn6uzxMpgEbfYiybo7caqQT6D8RZCrP7Y15egC1U13PmTEfnPtP41VyWe63j2nfr5jPByv6P7",
  "key27": "xy3DM7MNWEJr8AkQCfaxNQBMZrCu4N6qyvng8MVsJTgbTu2dTdETyPkFrDLjt67PLsyXVNPZvaFi4V7tRyj6Szy",
  "key28": "4wwDwmfYNRLB4hVppdP3yc1ojAMK8NvRBQDwaj3z44KAdvbiFT3hVJkpubiGDreJo7TA2k2KgcCYzS3wpiC38gGk",
  "key29": "3hhZSJ3BeW3D6Sz8swudt3k44798SuNHrGBZwHzd47rLBmeVdq8kZrw7DtAZq6u7XLuj8HnRStaVY1okJsES8stv",
  "key30": "4LfoUZLjaMpmY11WV8k1Y6yKhos44fVNKmEA9EatKr3fBRH7CPjMBXHufwWQNsa1F4Sv4JuNWpJAcshVcv79Zxvk",
  "key31": "5ZFQK5GJWH75dWUZiQbN1td3x4jSzfd4smcPoV1fQQmKDYooMFzEthVoTbkosudwz5Tv4zJtRffm4cc1vUj4YSQP",
  "key32": "pYRCXdwhCS7AVQZdeSz4EoZc8ooxuzVFKkGHiUjo6WMru5H9ABDeBHhqcGws19brubNaA42UEDZdFicDGqmjsvi",
  "key33": "S3vrVr3GpZcb14cS5ht7axTcnLE9E5suLDAqUqw4JFLU3eC1maM4TkeheoGwP4CQNDEcbi24Ui3w5hXBcChVavF",
  "key34": "4xxwZK2FNLdrFhYwCFuahSf6t5asbgqijc4chxAXJ5ZU7PY5y3YDpPM2fwpcwxB8FTUvMFsxcitAi1jQvVT4BTyQ",
  "key35": "5GoQ5aATcZqXLwDh11HM42ypXmfuM8kYNgFbaBfVcVpU26wS29fBzW3DFu79dZLarCKkuW2BWkJBrgU37VitRCwo",
  "key36": "2tKTBMJuK73fRjt2J57E1kmJLdFPDJNADaPsicyngRx7sMz6a4xTZ62iUwbVEptd9h9x5CAi5Vss5rjChdWn4FcB"
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
