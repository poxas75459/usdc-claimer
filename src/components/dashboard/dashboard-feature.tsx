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
    "5xvftWUUNLffwJdE6L82aUoshQPxhW8qwdpwi91fLFNYTfzQWNQEdnJYeykJoHFA5CQRCMaAFSEDn8sqqB1zFxpF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z4xC6kavEZT74xb9LrpSRapxdFjXygznFmKsHu7o1U82dcn9VYxe3JehdTjGkU3nZURWJHpMb4ZMRUXC5U7yjXQ",
  "key1": "42T8ftsN6B1Z8gp94M13FWyaqZturXV3Ht3bVA9bzHgVQhfTikTgdprawS5ip9ykMaBPDWHsihSTAytn4rrva32o",
  "key2": "31CpWTfz3neGrAcJ7jS8EpaiJoeB5HVW37wzCYFHEgsDxcHKGgHrncQmicaCqVkwjHzz29xPEqhK6BLhUtUWBaT4",
  "key3": "5vpzgEfLiZqjfK8GAhDKkWeqaXrF2iEjqdpByY3TALPEVcZxSaibByxoP5kdBstv4N9yTN9qSKxhvkkGBnNDp9mW",
  "key4": "37gh1aPz1bjWEvuK8AfU6MmToLyhuThwGh9R9VZRUb63KmDLvPeV6fQZwemspyR2Q68xg31TsTL8WWemdsS8gNxd",
  "key5": "5zK9s4tfg2Aaev7yACz9aZLZapaUoFJHfRvhTmknCLCud1xiEht84diaqmDCGpQJiXFqkiV7xrgMA4comoXBQu4t",
  "key6": "jUhMY6uJAmSqwfg4Xjk4NoDgJFh1xYLg3vGrZdBZAcDa5bn3xZV48PUeJGovvw1uDp3pVMebwJC2iedw6NDTjYm",
  "key7": "2d8odgEJVfEgcHcD13WecTfJ8xseYyqmSpGuidGtfaUapUBsxcoA383RM4xnnhszs7zYgbwRBjoV4HKPR79sXwuy",
  "key8": "38TzMbpK2ZLd8jiXkT1tUSo5nXAdmeFg9SQQ5cKMXrdN6HPRmV6E2W73dFqTMCYq8W5qHCA11o3MkYJr9giELiyA",
  "key9": "23CjkabQY2ueDPd88uh4LbttneSRkp2Rso1GhfSiFJ45N1qALZPgKb2ckXRSa2evoWrqtExjYZQoj9kAFoAA3wwp",
  "key10": "H4V27BeAGLzdy3z32128BPbHe2M8Sof2PG6M9SKtfShR6A1e5dnATkeem5dMB7baWUwUxgBVfxCmrq9cgUgQVfw",
  "key11": "T2nYkgQ3MFfaXdCGLRP97QcVaj1SHsaBy66bn9YCju4ZpjCBDPGjivVZkTt4wGKEdoB5Uqeuzwj3yGUVDh4DfXZ",
  "key12": "3BKtaVpFWzuVGTMYm5NyCRZ4X7tZZuTnmbkiS6XVSRNd3SYzwLKpYPyYzpHcQdkcZw7SHv1q7qWkopuiNEzv6eJB",
  "key13": "2pnznmDBYztfQaC3hR3LCH5UsJR8tqKrwfUyEiiAR8tubmPodDKffLfxjXMf6Ypd25CcHd62Hw4ZxRKEQ3etcG8r",
  "key14": "22jruyKtciN7VTiEQi7Unywi7F221s6SWBeHoWGxTPavN1d9kxKY1R3XgxmSBqZrw6tRzxjz13cq3kgBxU2pEwWp",
  "key15": "PHZkfuyjRuGgnD6S3oNU7EGvU25mGH4sNYrKXchyCnLrqWiuzRM2zqRtLTZXVFGtrZDFJZZtCcHw2njfeZt6hqZ",
  "key16": "4eTj2KXa56e3Mn7Q2kd5P3nnANRGET6u2pzFcgtobcDVAqrSydw68GDPuAZTjjyqSiNjKjuFJ8uqMjTQbk6dygw3",
  "key17": "5ZpKDEF6NAVeN83A5dvu2PBg6FoCnSBJsQvefHDUPxMfz8kuigfiaXBcNbQdSsEPtQRNu3LyfF4oSK7GFXATDz24",
  "key18": "xksGEGmeapcGdBAcrPjXnEn47mazKQF4WRWCpQ5pB5PSzTtCS27ehp2gPz8wALyb9iVP3WEBkub4tqKwpzZPjRe",
  "key19": "4RcGMFXiMtUzoDM53qSW8jfdkhGhrt9rm3hoRXXez7nDb5tg8eE8wHaaQPkBtTYCBHcordMmrp8MeZH2stftTkmR",
  "key20": "26vpyKqT6PQytSDpdjoyHogXwL49WaP4nE83qZZZ3nDTuqjcGcfT7ucK2ZtgXqfoX8yX5QKRdupYRDjuZfJadtio",
  "key21": "43nxxmU2j8diqsb5y2gqvFkeimd2scMeYxVTWvxMpooUVC5LbogNqz1cVqopZVJedLoKLw9U8g5xFj2Ut57qa9Qd",
  "key22": "4E4kMrPuebnpseZ4yjbNNQoYsswjmt6MWauTEKGSLnYp8XsDnqkFDr3ePxdqHTKVwnGsqgHVHpiqkGUARQzavXxD",
  "key23": "5aHYJ779wi4JGdT3qUkA329ebGNiPWz3VatqxcQom8XB3mAydPY8sGW2AVLt23xTek3vCfuruHZuBiJWCuBY1b9a",
  "key24": "3U5BYWhu3B3xAkdsC59zu94uNbQuya5hgDWeR8iy77CKQNAvLZHgRSNDjadXFDmj3RswjHhiU6mYFDC2bP24MVWR",
  "key25": "6MWFkir3vwvmxVuN13YzvB3icEjijuLEPWrEGtX5Ha6nfpShQQDgHhGyys2p75j8nojnnBHb1VDhPBaqKNK8LqF",
  "key26": "djpUFETRUiFM8mp5oL5NM1YiDfidRZ82Utf17vdWeXzmbJ82WxRczF3R6Jv8JLgqb3NHTy1q1qxx1RHrqaDF4vN",
  "key27": "592UJzeMUCPhPS2Cz8eETrrfCZb3pTLchB3AAwAPDiihsXiN7rSb7tMedw6Aig9UgvTPj4hKcXKVdDLuMAm4Bm2q",
  "key28": "24wVDE9dav8CzNTgnomVRCtoHQ863bNaHraxMU1fdrc3VskmEHtnAAANhy3eGPnZDsoChdeR4b42VCtrw4pVrDZH",
  "key29": "43RdeyDHn3D6Nonbrhuf3P84jsuSq6oGYtfwtfPA3MQt4x8jnKktN9zn3AYohkaZReP9nteMwvTdAQDzE1oCvsss"
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
