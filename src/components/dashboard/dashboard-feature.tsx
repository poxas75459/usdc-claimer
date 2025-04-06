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
    "4TDL6Jtcr8WSwMK2D8o6GrQjFu7WSv21FXTipWZnAETyGkuvQ8RPKevdt4Y8XFgxn2d8RaqRpomVzX2TmDhqGakS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xcYw7qup1GjZ4e3G1vavUxukGq7nR8YA1usrVVsWoEo24VjPiYwmRGzVEqBGcLDgxTQDjDatsWUJtwZzyDtxs3W",
  "key1": "5tWFMAVsnPkTXNYtNJSZC9MUwoeNZPiLtLdyWy7oftcxfMCb3aCkr78zXit93vt1eKK7fMTxjSWm3HRVQVea8Bv8",
  "key2": "5fRk4gujssvnMjb3XHaDVkvYz5MyPNXXecDvXUsWFVbrKkCddXvnPjr6SYJ761iNzmouM7sKLgskRRLMFeQKeWNF",
  "key3": "KrmkPUpxXoWaH15ypapRZSDzZgnzByxc5fuFcQ6YqFSyect5o7nj9xE8U3b3dAf5xtG1D8M7t3ZpYmAh1Y1NkAA",
  "key4": "62sPWuSLtdYuhfxURAqXAjWk6PbADyXBP7caisqw1mjdo4P64LmXDhccZ4ac1WhBvfDxx9wg1U4TxxPrUV8fXU7c",
  "key5": "4YsFg8kkW423MmNu35FDCCiqX7unR67MNiDjDX5S8AzbTbHtrMYmX2AWbYceCSBwEyenCvLkanUWR43nwfFNeKwN",
  "key6": "58DL3RhKKJ9QKnmdZfk8zqDXztg5d96AM2gyZe8NqrykZzRQpJWDjExdPKMNu3XRCc1vKAyXAu3qjuKeAHazmtSN",
  "key7": "61npcCryfcnnZeyrxGA5Vg8Dz1fMfyEFoi2Vk2RRSc7AiLdLXURafE71p3CrBUXHybL7qM4Et79dCewXrZg2Rqiz",
  "key8": "3G8V6byRuP2UU1DyfE4fjfv7MF9E51DG5TnQGWd38km2YzG4fzMHyky1Cgqawnvb2XTQEigrHz3ZuK6hgteVqwWd",
  "key9": "51H466czmYj3akupjwfUwgEgSQQoipSFNAAz7YRT3pAogAviWaCes83GHvwu9P6BJqJH9uG2hueAiWb5rFH3RNz8",
  "key10": "tNNQuzAoCpeEkuzrNvivNGP5EnogM5pCnjW14v3jkm9Tae9fZfmN1kgSW2YNoj4vP1vjWdSrxdhuFp2tY6fFJrr",
  "key11": "434pX6JGaCEoBHdKtxbGJmdjDu8fqdbnBLbzAMsc2QCR1xsRtbeWCCmKtMfnU3xzKn16pLzz7CPHUPBNou5t6DWe",
  "key12": "5RD6R1GYE2LQWh2cEP87pFQahwE8c3T3QJAp5VddLHFb6ZTELBoZm69RaSukhrPr7Geezc91WT3WT3WCi8Dnh4rd",
  "key13": "5gpCRSgAEyPNRmhxxKLt48KFC9VruBGPF8bWM8rzLohMfxok1RvgvMYWapPu4jdR17Uymc3Cd7YodwhddzXYwFmQ",
  "key14": "4261smXJoP95QuK8DaAJhAMKa1x9N9usHz6yg4n8wYCk5jjo1XQD9up7cbfBPjSwWeNfVftoqQA88HFHdJfZnQBB",
  "key15": "4HKxCKcRMHDugJXzDYVTFeC7VnN24vgBpy7RgtjGskyMnN32zL5QkYFfLu496JJPmadraRr2AriiiDd1N3JNUQMv",
  "key16": "5xTEnhF2DpK7i1LeYvvn3JR1miLDgqFZf2ynQiuukmCnATtgoKBAZFErCWGHPwcvpy76NMETn7m8dLwfpLv9CkuP",
  "key17": "2bnX6F2ZDs7nPnE3eqhwFE1afBYA4E56NfZFggiTzx2s8t2okAtzgzqWcNAXuwNFxPpBqBQgKymE2UZNhgMk9pyq",
  "key18": "5MVEKtbh3X61dUUxrJ9nHK6whv7bW1bsc4brDUufEiXKjufWmAAmCVD7tZ7W3W2gT6JCKL7Bg3hmCbc4zbmKg6Qa",
  "key19": "5g5AA6P98zpfDfYcKCyd6nrBXhYFpovdmbL9ZNx5YyvRJi8VCcu3eo9xNxYdrNbux83qWMXtzH2hg1rZQwA7FutA",
  "key20": "3m9i1GyejjZzGajD7RX4hnvjYrSxj8TRp99Vtheo4iQxWJwSecjN4RnXZpxKnjkRkXjRDXwDq3LRUHwkDHEkgKjL",
  "key21": "hXs44E2ej1KeJ8RYkgaYud2ErafCgdW4EhTJFLyqF317FRyyKB5AuLhDnBCfodrZC8nA8MGm6Zy7TXLzA2xrdGd",
  "key22": "4uXABPPJF9J12QFKnvtXcRsxKNuXTEpca857FB9bfPgvoHUnWVzk5FvTxnppsTe67FSrNQ7yXzCMjz1SdjMSExy3",
  "key23": "4RgoUUMqd36Jh3hY3wmZkfKEK5kPbAqu6XjyiU6diFGEzxwDY5yC4t1EXv6XxgQdcfK5dzdNbeJgrbAGTPDPaj81",
  "key24": "4kd2qYJTsVv8Yk6Ft7bqKwU2m2cTJ4eMMztPUGVjo1s1bYNw1L3pMtjwjpSUNQY9x9tFP6iXzzYum157XdNtfmz3",
  "key25": "yaZ8sBFV8nxs1N2tV5GpbJQKaEZVDSmgsfE9wTwmgiaG3ZggPQzn8q5p7FWPVUF4nBmgsDpuxJ9YyAe6tVLcK6K",
  "key26": "26T888jgvpXL92dZe1T9wDFnZPPYi5kVGBqao6PtyNQitMe8HdEC1ZT34g4NYSMRoXhkpxMAi22pjH34EVgarzMP",
  "key27": "3vHePg5qcBZ7UxNR4uk7Kp1iGdbFsX38xsvF139XnFufxWphaPcaNJNqKdxpQRifFbdQWqBs5H6ThPagS8bvM9du",
  "key28": "2ix3iEWhCyAH34N1a7s9YwUUSE76C9PrkiYH7dw7VSXccEqvpqYFwcxYiSQvXNbA9rhLNHfpzEib6jdb7FqQ9Xkt",
  "key29": "2f3Kpt3iNyvwiyL2TxjhSBikx3pKKLcDfmcUpRngGh7ENcZiWZCRzENPeDGaVemosr4AFLybLaUCkXyrA8eKVWgZ",
  "key30": "4H3u1kPnywRTR2NpSLKjuT5tmpF9XNPAHimW89QsX2Z92ffbZtFig8RSCKkwSJsxYCVF9bBSdK8kmyF2i2n1X1JB",
  "key31": "4Qeog9W494qBXZ1Hh3nAbsh1jUypeE4h3htkBFHLLy8j3BgtSNgCapQubd1i7EinP4NFXDMKEQ3JHR65jJvjLZS5",
  "key32": "4g1hXfixvejXbQKRkNoz6csCNnWqVGRAWktssuzuQzLwm5NDjUGjN54FgJRUxbsJsupjQef1UZ7xK3AhmBRdKaxp",
  "key33": "5pa2SLvPSBgSPnaJEgJvtvkA1oKEhwMusJPZLbbfY1fbziXdN7UdcWzAVFi9o55RfZNn7625CrCzpUb8hdza2c6g",
  "key34": "CM6LmGFD9u3FPnjwb7z9WHR1Pyb3iyPcy7GfpBcMRiXAnKnP2K1u3JHC2YzMKnhWvpHofnu3dDWiNNurGLVUkKu",
  "key35": "4mxEGjGuugBTkCv4Far5zCvYn3bsoPs9AQuksHdZTE8ZGkPjqMuvZnFq3SkXhNXbjvWhf5vr18fRxoXKTnSnK8bs",
  "key36": "2Qb2GWoSkdWU4J1phYUGyxjtwTLmmBqxGzJPrNdUsKPmAXhmFhFogctbLeEYD4MB18ew6fdTcxAD9f14NWazgdKA",
  "key37": "4UnATKCeVJkFvsvia3Aa1vVoGMcimF18bAvzS75NQ5jEHa3a7UAij9b5LT83V5DiMB6fW7mCTUAwdcFrSkqazi1A",
  "key38": "ueEquAgiujebSkhqguKfx9ZnggKHj4Z88qYaemS9KbWp4JRVkc6wQpkeZdxD1bitFjrE8hjiBxTuWYs86bmxyua",
  "key39": "GsYtxmp6wUBVraMZWCczHZQAK1GmBmyo6udAmu5EML7Pbex7KxSmcrgeYBkNtoWdTqKkVzMzVrVt5dSiTm3higo",
  "key40": "5yUJ1Y5yhK5YFZruqBWvvoMedRKeqDRXJX9Jb1CRBguip4xDicqSC4V9AhZZBvh24hkheSBpmGN1xzauTBCbd52h",
  "key41": "3V7stYepH6JEU8aYxWrRdRaN4pndFTr4UZEseYnTcLGabbT1qLhdnuJ7BKKUAySvR27ys9kkWR9oZwDpqWeB1Gac",
  "key42": "471F8K9enjwezAk5Vtu7fp1LPqp3v6ywQRDGPcvRZUPgc7czN9Tz98BpnLcGSEVBRQ5QgFH94nJhGHgTHgDvBMoH",
  "key43": "3GsHLSLrwawExTqjCdw7UDVqL47AFzc13GtQSifJ9wYJAJKBitwG59RDFjA6Df53XUApvK7uJyMtHjijewgT1QyD",
  "key44": "3QVmRxzhXYWA6FwkmMbYgxRRaFFAk9RbeYKVjFUXaFDxcyyVtrhXvD6vEhzGrUTHmW7xjrRi9qoAsKz25uB5GQoV",
  "key45": "2AzkojTQchb1E8TMoyrSJwuUs5WhS2B7xZANn8d1YKiFdNVw5T3gPtfsXCuBAejAXkJ8scthZczuswUxeJqnoB6q",
  "key46": "XH8HsTm2NNBwoBcnZDCDoTKS1GnaC6ku9WAAZjqm5TvQF9qkghwAigAsRXPVyAhy4bNkf5wNjJ6zq9VeQ9UQw78",
  "key47": "44RYwhta2J2wfjasne1jC9sbPQG3DynHXJvbbv7y1TNDVaws9MA5dgrYcLAs624xf6uGHVnH63i5rcqXGSgNTzrs",
  "key48": "55w11ZHWVRuKpo53QUEHxwfgpoLAC6UGR4FEMVFQNgLxcdhcP5zwLeeRr7igkBJ4SMkfkDJQ2h9UkbwFd39sLxi8",
  "key49": "3hwaF3jf4ATspJFDxMutGxCRyATWAEBFQHn53BT3BXAM5XXQaSSjMfkbRPqPqVgQ5jddouBeVFoPfkUgacyUwLyX"
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
