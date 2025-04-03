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
    "3o2btFigs7Wr6HGT9UpoC4s4TJXh7yMRQZSD3oqGjahJaSjLEzPJWEkb62c9WxecrVHuuYbSgXwEB7V1TeW35DuG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VhnnvLE1ZPZMrYqDTDBMaryK3SwHbc7Xa1AuTSQQWhiWFbPoafSTpgHDasbHKbtuEEEmLwNrHpBrZpzDpRafbN3",
  "key1": "617S8V4VmaYdooeQvsU7cTKGjXW7BUzkQJZnLfHDxW6KomqBmgCu4e5MH1UswCwHvSUeNimQPXfotFC8rPEsb37D",
  "key2": "5BKgWX9PQUxxbKy4sHFmkdF5syv7aCpVhARF7TY6Sa4tCd59nWMx2zA354CfDT49XUyA3kfZhHTNWdwiv3onECHe",
  "key3": "5Vcq1r7F1v4fpGSRjm1oaaXn3UfmLzugescy6Pr59KmPhA1is4KwRT5uobBfD4rb9vchgzPZJzjhNNtsu7FEwktm",
  "key4": "2KRJSx15o2no589SfhWq6PcXSkPuW9ZWMCyKvmffJjc39jD4SQ35dYu97MxU5HWp1Zy47uPNptyUhUZErPDEwp8S",
  "key5": "3pvS1vFg3wWQQpSPYhkWWYh856X27hrCzs4rUKSMbPCtRuWr5WjHDFTDBngke8SzdV51HTUL528hZPonY2LrdzJQ",
  "key6": "2Xq4m16dNHowWViKFSQcBzMFEkk7ynms2oZzbUdbupTQRYneiLwwk4YF5x1MjDLGyPnc9htJ5GnWYkh2FURrCy3a",
  "key7": "4A4wuaLeUEfdjFASX81M3af7ryztXU41kAkgtxbWzC1edGaFwVrRuwxTq9fDFNNSpgZj6ti2r7YzseGZWeZDj2vd",
  "key8": "fjrzC85EFZkEQuGjPezCzF2kJPHRYGkgQJ98g2FyAPGdg7PQXNjtamzVaGAxeKpXjA9SDD2zHfbaheKkWyuYCyK",
  "key9": "4ZeLx7Ugj82Xmv8oRPTWUPLhdhETeZMvs4qsR7cPEGCTZexzjvnHQH2kLfT4f7aV5GhBWRYXKxSgR31AC8fypCH5",
  "key10": "3UZLHLjycXSczgpQ6RUZu9chLhJoYTH99KaKMNt7cRyVqD7RnRJo76DUZWHJQcPP46DdjWVrRnq9zLvzS4bYNDWe",
  "key11": "2fvPbTWbFMds7FkcwG6HLo3icuHf86QHcJ7wMuM6evefqccPDZRL8TC5rU73BddTR4vTbtKX3k7pM8K9dwoPDsGp",
  "key12": "2zZg77htTvJWmqtqXH3FByszDfyVFztmxq9GLJSjyLEpSLQMK9pTheWRSohgRiw5hWXu965ksYiBPJT3FVjirARm",
  "key13": "Aaa1eWncvr9eQvAoJ9VXdRS3WmLGpFduCYpbUGnYkW1XyzbLWUHFvEYJWuTJUKLF9GrZtPRssQVUBugrcFsbfpH",
  "key14": "SpuF47oyXEwaB1MXEE3LUz53hrbHZLxDKqBGzNyFzvpUxQPwmUhzmFEFDVKXRVXFftefRrqUaV8j1CQWnENAwka",
  "key15": "3vHEo69BVgDfwigAWAtWvQwsqS2QUy53QaAEc67X68WyXH3cFukFmLPwi6eGNj887S2n77TADpe5mbGqMC1NaBvH",
  "key16": "569YP6RwtDAGDQSQR1FoqeZtVxkmR296DBJ38QL3fB4w2qoPfpzBUDrANn5as7kLnn5vLoS37rvrVvTzVJexVzhH",
  "key17": "2DqVtTXXVvHzFdCZ7ZDzPPnr5EQYcRMjMByFZcY7f7hzeBBuVYh3AcSpkrKE3tx8rZAtKftXQ9dzSXWxnYKtr9vR",
  "key18": "3AZbJqHe71ouhKsFFogjQvRnkHcthswTwiasi1YgJWTu5PvZfAq2K5BcRGvZAd4FNX73n3ECJHZ91BaiEZ8H1DWs",
  "key19": "2dC4xzHoPkQHtuKPkHEsrRpS7ziz9ENepuoshet3d5eqTzSSD5KqUKufqwTek9HiJwswca8xdiH8Px9QZAMspS1D",
  "key20": "47tNR85hZ4kkDyzZerSdogdQCnxE1JQGwAESnTEQnVZE8vEV4hobjV1NctkFWwEx2KSNuz65bNpRHweyS186uKXL",
  "key21": "kJQToVTSiMhCJrppveY4rrfj6sZzvswSbhCLvtagdGNvS1bWQgjcVDJZBPc7vJu1F7fUj9TVNnrqBwAKVXFC28K",
  "key22": "4GBaJZVpisYBLxEfbvK4G5JwHXLX7X47GjPwfU6oAJPrzfHTKcMKQeakoLkWRgVsTgdQ1VN9Ff6cwRwpUVBXMaum",
  "key23": "2cXCtxeSHGs7NxK3coUhBApgmR5kJAQjeiFrnNFQAWAHUC6pkKuZJtdvdH2GS3jm37K4GvGkF94hZje7dnXRHLF3",
  "key24": "41CwpViyjfcjcuD812YCJ1enHAVotoRGgDXPo5sxPWgqorMPWG5bkFxGeBMCe3aVEY9JWs9LQsoeJkexdNG1rqmR",
  "key25": "2w9fiP4D78eHeaVNsnYyqRoscLUC8gjfRd761utFDjnhWPpHsUb3XBiQskjHKMpkGKHW7y8vL79JT73fr27efkug",
  "key26": "2rV4EkpGbAepaxEUkCWafQHR6wWwfPeuzvhVMtc8JBrbDUSRb89bgyH7AUns8skz5sz6H5GrTUE2VQAMnRo1cpiX",
  "key27": "38LYidxn2BMDF1nhYhe9fDcNvcKe5eakyHEAt9R69vENPvFRCJXVzoHRKGJqYgHS8DnCqcGhD3uQpyE25gssuagA",
  "key28": "Yc43Jw2cCnHcuhsmdqXdaWicxZTAeugGGzCnWgTUieVkfrZtMaXyB6QoH3CF7jvc2Z3di7Mn1UMEUAFfnT4qFRx",
  "key29": "J58BA5LYXiw92kYU4pJDjhMqfdtfGgtfjaUHjfQW1fg8g4SAENbeSMnva5sKumxijoApp3jYqaTzi9nKjjGR8oA",
  "key30": "XviCRzs5QMmZjdqwP3ih3B1X193tD5QCLPYWoo8VCfJj8FB9QnWA5wNzuHccPQhARrRpG8Pwbw1E7mHk9imWKzQ",
  "key31": "3Tw29E72Rbts7gxu7XATsLBJexDhgHNJDqmTZqgvnYaii2tiPEkGyeme2oRN4nXCRgzoL2PMYpAmruiX8WQu8Ztq",
  "key32": "6t3vJmpWSGS6WL1LLAWRJqohuoW9hPSUNCwbH1H388e6XKBGYV853cpoHe4bWamJ2Ey92hwynjonpuY6gwvUG7g",
  "key33": "3vNdVRooE63dYjwmUTjGvGGNPXidycxskb4LEC3XPWVxMJiZVWVonBV2u5eLopYaS9g5uFyY2cY9ZVyi6g7EmjFv",
  "key34": "2snqPiHooXoadjXDDqP4754jsi8gxcU2d7gFov8C5twut8LSFcNv25JZcQwhxbJ1dRpBBJgkhzDMuLXvTNRodNMS",
  "key35": "5THZ59BoV4FLDxapVDmoZdzb8VyiKj6XxUw3jnVyobfyCUZFZwYadXAkDuD3dVTzjPTw9EA1Ksc4ggHsmqjfKtEA",
  "key36": "3YsgBSkMzzG3tPebvAMhLmXbcQQaPzrZymAL5UKPpNKdDraET67LtJKmncx85dCpgJ7bmSiUo49opJWMfXmVwe6U",
  "key37": "4Tt7M1vWzTdb91RqcVs6r7qdnFcrhuzPobHxs6Axnu94oyh9d4tToN2rmREbRwhU8wYDE9x7xpqkV4zZzP7KiLh5"
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
