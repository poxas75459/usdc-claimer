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
    "5Sto4ZKAvATikBv5itVSiQkQAJ5fE3KsTBk6u1B8qrHBKukkcrKThmvZQGnd19zG5M9V3EBuEWmyxZcjRLHZ89Yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nLzbk1hunADXCPUKpWRnJHvFsvVjZaK8bEXN7RSTDiz8wi6pJNN3uYEGEPzxnnesnFJLNJ7Uyhy8tEwUczUuZhq",
  "key1": "4Nhqr9Fzhvmz4pHpDBY81QaWKrUVfEL9Y9gvm9wAdqs8PVAbUbn2sUe8zScBTH9UtH1uCgRHfR3Kzjy79q9fQNbp",
  "key2": "5CHR8iE6BKYqjZ6oaucJRHvG8idk2dHvhGqRQZhWcSDg3xsQcNEWWn7uVvbY1XS4tptsTqFp37JjGV1HZTSrqpyH",
  "key3": "54Gm7y1KB4yNqMVYebxHr1iRF56Z6rxUrZK7rYZnTKD5LFS6PopUgGcZLrZdbbwcgyQVLQRiHE7r8xpuz4tArKhr",
  "key4": "321QaQPYu7Xn3QiE2rdoWz64CFgFu8DCTEWdNwem1x1NeK4toLSDKVBWqGektEJpGZWKz5pA1yT5KrhWJQ35nGQh",
  "key5": "3Lpghv5w49mBvxKDpAdqGgYGmZ6eyAbwoudi74hSMPyv8bmbRhXj8y7fLr8vaPjD6eFhtDq8YE2HvACkaHMm1NS4",
  "key6": "2NErKsvULtACV9BcRMBewsLJeHjE8ncUnksg8NzefazXM1CZkEAdvYPifRENiEsQtb835wYyD24kZQVrJvfiQiUn",
  "key7": "36EPaBuyrSNc5CdLztFpaCStRGRKv9X7BwRjmWhX47PbpK7hNbLwQ5WHxsmzefquqfMrBW2tCz4L9e3ad8bmvyh2",
  "key8": "4z2pT8T4ULNsSQ9AR9SJre1xQsY2rJ8E3eJcGQSdAX98AvuJM9wdSD13b4FwCg93qLVNuFFiHLNSzUouV4CtZoRm",
  "key9": "2PXRjJ2ok7dUtFhVgNbyywuik9LUd4itrTSP5rWoEUFQnEDKD23VnUbs7gRn1SYQvtsKYTKSv8BYMwKEwxhiMV8S",
  "key10": "2S4rKAYuVNJAbdRBUbG9dDQKgaRBmAtFHjF8ahA9oR6RZSnTCo2aQpi6UrGajzc5r6ZZUNWCLduC7aT1Ah9rGVM9",
  "key11": "GAbf7MXuizXGx8USso1EdKFUqnV2JezX4aStRpFZm7GDRsj9gqtXoSFExLD8jPxfvCM2BPRhWZgt7ERhPc84ATm",
  "key12": "26oT3oNGHxtjrbgH3dxsTJRViChjzCSuCJRQnFxjnR6nLtnXKbsCWevAZZaFNXZxNmSyZZ1C7VhAHKDc2vK22MmQ",
  "key13": "3GMRf28QmGxEZ5o5hjye6FB5YMhbuduLkEGSGLCeeL41niwUH1z7kaGG8ma8Yhvw3Hyoeq9sH3n72dqXPdXgHB6a",
  "key14": "RY2wF2V2Vy4zshrM7dmFPvUfwFyefUjxzdEzuBjZoYa1wu5nH8ndnqQWZbDPxBZvtx6TXRYLeAso9LNEVtcMwas",
  "key15": "2m6RewTNbobvdRJPbGynTVL6RPxtUVeuQAqxFF8PKUJ6mpSFfDbK1taExshhPuUyXtZp2fHqVyQ8drccyHMMSkHY",
  "key16": "3UpZ1B22fzjknK9gf8n6vhxucCQ26d8H2iw5NW3PGdPoZ81SLqaioxsUe2ZHKLqV7cEtt15SJRZ3B1RzpaUSVXt7",
  "key17": "1Hf19bMMtPhoqVo4UFKJyqK1gLKQfW2eVB3zmDc2HbQLk4jQUHpZShoGX49hPyGhuAkmqvd7mZaDhZjpu9hTZdT",
  "key18": "2E9G2k1oGQ4XLoRycZ1ZwBZKJddNtv2qDrVKrTT15TX1iWLSgyCQKV3d2vT3WKjDUuWxCoNy31LoiCXLygpJcq8m",
  "key19": "27QHbWkoiwcJRtyfdxS6Qc3UQSEiqr5ksRk9nMr7ihJKPjojCdD9UD1v6cXpDKGsiPsZd6TurjgJS3CUzhWiHrbR",
  "key20": "2SsbSQyRvKjHXRNcYbmWL2vzJhdqKrTaT3d94NebpKMCpqgw8fNmjxET2cxu2nK6hucxZKm3VvDdpsu5mqB7h87t",
  "key21": "31qbLt41yRshhvZUzH9ujRXEvTaqBJxnhn69RswnLCWMF5UCGYQJdfLaskEM8TuSwbGLP9gZULX2FANejcB5579j",
  "key22": "5ySDN429kNZ3wZG4a4FLa5RMtHJXgj9SzmKpVdZ3LGvYgQ64uu18owRoz8YHab9kA7KBEgjW78DivpVnnTes1riL",
  "key23": "3qtsXCD2M7nRzxmkx25faN3dmndBytNg5LETaFKhnXCQk3v1T4WgrL5d8KLjfm3iNggpjSHi7EGV8zV4a7R7TUqL",
  "key24": "2PDdsd63DoKqVrbEmhnX4kPFVLLgL2a1o9YC3yXkYVXUTiBigCkb2NLdwfetZRNggvyo2ZRGxVnHbNZ7LACM6Kh5",
  "key25": "2cGYeBASxbTfBAkTPf4XkFjhWAFK58gH5ean2nRat4EovJEViLkUZrawov8rqM6bYyDa2f2FZxwaF9cerBa9LegC",
  "key26": "2pJm9t6Tp5tAbFQFaDbX71XixiVLm4hgYXaU5umMKHUQ5QYhTDh864NrA2vzfmJqgXQAykw2LC1x7r8X2d3rDNxd",
  "key27": "uiqhpdpqkSMKHgQZjaM2X9DvSrz34QCqBF3ujS4bt3GWU2NwaE3vNGDymQxMXQmxFMG78E6wFf86vdvbV34UzVZ",
  "key28": "3ftdy2A3778uWbxexXQXxB9kcaJpMeMjDnrA1HYc3yBh59zVFgSfQirv4Cwc2c4WYh5qomCSnGUjebrZ2haE9xS4",
  "key29": "TTvnLYyGiaXQtrkxLHjc6dH9ZMb44Xgk2mgvxfRNd2AYyXZ1SvpxKUyLR3p5per7rMtmQmMgyjGn4eRSZRns2Ss",
  "key30": "27MkLZmDXfPMSbfBc3uF6a875Xx6sTVkgkRfkwRwKewtGLM3eUzVuttKUwFDSRZmT7wk9ebyRoLoVeDeqDE5jZ1X",
  "key31": "4W654UMVj2qRXGRDZ5WyLZP4Tv65ajj4QJwduxcp1RTj4HQhRj4BD9cyEdaRZFGtFAjgLsUiJUbhhJKoWEeoxsmi",
  "key32": "4hKnJidswoafcrDZSgXu8sH8hcJShP51E6dHRdcSZQx4xkZNKaFCJmFxmL2Coyz2pQWsLs5AkUp33dWpqTN2Hvn5",
  "key33": "1mF8hpRTZqiQQ7Bh8MuYUzC713u7m5hKmPybF7UQiBNU7gFe3ZniYDiG3Pny9ZWM9ifjR4RMG8yd4Ne96MPaCXg",
  "key34": "ywog2MGqXzMxWYuaYeTQ5Fe57Ph4paR6eAHMqeGSJbpYJF6axg5e2K5AbrrQ8ygwXEz9dY3wvvy2euQSSe8TV7F",
  "key35": "2mAv4pTbDDbVge8sPpCig8zA6mFUTSPwTGMXuCV9y3sKQVKoo6vphEuCjF6aGmNnGn5LubQLCh2g4geM12YwWtGt",
  "key36": "rysmNEsG5i4Q85Xd1raYh6KooyztyjXbdL38pKKqtkQGxmvUGVZwzmADnu9T6zV2AS5Te57qtCnRDmgmiY7nNFv",
  "key37": "4h1EQQNhj6X4gyGs9LN7mjRtGmAahgBtqeSGbdp4PeDrCY74WY1mrwaxVLcZ5P9AvkFpdhKMF2PRh925NY5wgyZZ",
  "key38": "21Gcw8BN3oFeUboBWdEuSa7Q6LZSFQsjXRE7P5GjsXVfBKV1sYDGUVXQVoUecoLozizo7aUsgBvpLMGgKeosBoTK",
  "key39": "Qi2fYueEnAfZQYpfc5vkqfzibNibVEyP5LGZpkmx1RQe1XwkZAkBLviPrLk5r2DWpgsYAN81TXGHw86yF1c7nVW",
  "key40": "5hLrnbXFRjG8uuyXerccPg1NhvH5sPZUCB9zLxeYj3sPdXjMArFiEPGrFkY1sSL7fHCgz2UBWUgkx8b6973pLnKb",
  "key41": "GnhfMMCKV3C7k6EFZY1CdDRpACjuxQX8CbcKwCBYZ8XytpESzB6mS6Ht3bDWxHMoCpuxXcfAKEuhBVAAHjsVmQM",
  "key42": "36cEgwqrCfwjMwVotRE2QpqQjde7Xy36TeSYF8i4PRsSY8jsPZkCBv4KPwm48wfJKsPjfvjbApYFMz6VtEH8mo2e",
  "key43": "3ydZnH73BkskfMu2XJRDzF9hXuQ7gxU9pj7xCUztuLzmJSvxxhtVthS6SbFphhUmvNguTsgm24Rp8pJAqMTSs882",
  "key44": "5P7g6XrMMwRs9njappCr1avzzDUUGgTj91VARzdjnJvJK7ZGqHxEa8AiuHKBDSB4T46246QXvmbv7Br4jUvkSKrQ",
  "key45": "2RHBEMvXJV7Wma49HU1gkhfEpp7PQp6BQVei77xg3yeoHgnZTYgPZEfS3QEhgPmscdBdqe89oCjfdBevAEsTkbDd",
  "key46": "5wBdVNKdzKpnTzUqPg9UL1Nh32KTjto9RXasruMyyRN6ggSiBWMDKQMwAzwRwBnyu4ZztEwswvogbSKeoHG5Ssdq",
  "key47": "7uzgxgrWr8eQQSuba4do6Vf6kqfHNszXVk3591ai2HccdYxDqX2Q1aAAfuexiC4mpkCzeKGxw7F58KYWyebPM9b",
  "key48": "x2CQUqi9RJmAEmALYQUfApaYNa1oEpZ45JKa8RvQAxU1Xm2K2edTzGWGcpxVKo8YDWrNuHFka5d3Q4DdZov13Jf"
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
