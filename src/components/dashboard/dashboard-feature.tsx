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
    "5W7nt9UJyBvPnDJUP4tSwBgiiPuqoAR3or6fpsuyiM3n5h1k7q5PJQYKA7hLQZaUYy8RubYaYcF1DSF2ykkD4fDi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29u46ervXMbC5ZWsYxMNa4MyRzjjcsZVnv43E2LNSpXN8hscJ5ZVDgEf3JeVQcLto3rzK96pLuWbKWRWhdoVJESK",
  "key1": "381nLD3MAehhkspxw56jLZxXTGqq3XDrQmVLSxCBJnfz4YwkZno55RZsThPML5upTUfB9Zzk3xfMMuN3ycKbjXsq",
  "key2": "XczzpAees4vfKSvrzaxozuhk5eATRDiHmKAgUZQUw734S6cDGt3ohRM7Mik6tCGoKEriTercHvuYw6ZtjXnYxUP",
  "key3": "3cXkX2GvPdD3m1NfFKnMxah3ofax5JXoEtkDgvj5ezGh4kAxcFj5fRrauf1xF89wyxp81kHCxNJKYBm5zTi9eCJx",
  "key4": "4RZDjAk197EMvek6AUf6eLn8hcK2yemGDDBNgzrVcgSAD3fEYDAL5wT9TbPqLBXTdyDwEdArVWN7vzUby6axJYzp",
  "key5": "41c1gBDV7wngs3LQfDLi1WJLfvLB2stjsPdvCYxyDUP7KqFVJL8QJFoKk1Zsg53Nyna3au25YDQQoCtV6RuFUbU1",
  "key6": "3cdDb7cEkgY1EoYTPay5kaznMHnB65QxLAX7TT6V5JnVwgncJA4envZaLvCs7MEchDhV1kSW2K4ugpjY91XvLoT4",
  "key7": "21owTzEMvxTeu5iK6yukUpp7nijWDFKXsfgpDkkKDwEzmBvLmA3nbKF5vaKwMCPfeJWjFjMYXJCub7QsYxEkLWdD",
  "key8": "4XDQsSkeVR6G1NHy7czmpyE9xne1GFSpeGi3Q4GzvCZGVGQN49fN3ptKndyV6d2FFH1i6CJJ26pD98mnA1zQTzHV",
  "key9": "2iVJR5ZiVt8KWrY3ca6FgT1hnMXNoHg7vi9NUsFQxuHdcH8tnArDE5i4t6QJ6dGw15FkjDduvgrVQ8UPCuzDUtof",
  "key10": "5vZaDLjn2RuPEqvCAhJRSib528vS3qqKyAdoDCykKXHFcnRQPC1xppbAMprEVtNYMsNssvvaYGMb21NBRCEQKJ32",
  "key11": "4g8bjWMXMT5Y3fQcKgS5BKUTK9NQatqXDnEQEzcyuJmXvymkA5QtCgxcQDa3pyZFuZMpJSupqUU2hLTpHd2EywRQ",
  "key12": "2Fp8xh7ijiFTgBkAzvPWhfVUxyUGL3JibqM8mtviBNcNm37puZmpEkajGZoubS4mkXFbruq5hAd2PPdNpg5AiEWy",
  "key13": "3iJq89x9x4TcZyhUjmzfPajarvsUwkrcHhxiMQtdm1UYsuux4fwDtKFdaTxose1HAwGMQc41MkRLcpC66toLyiBT",
  "key14": "5NYRix637CBWYiNwxRvdUgVr7GhHerijfJyyKoLZY1v7CjjHAoqwZFrcRHhVqFfwE47eTxMYtMMmiyaumaGtpoMt",
  "key15": "5jnpMSdzeYYSHiimyiUGjgnafWnifKg9fiXnUBbhWUe2LPWAyjkDR4vWr9QdmBfGh5wCPQFoeZbRz2PsGnsaYeRt",
  "key16": "5Wt3RL73XurkkXf3PtcAmp8F1Q5Hw2DSoDWTXJRgroEDUjvamNUZfSCMrnuDbzbHhkD5C9cU9WAPMraW5rY2zwgp",
  "key17": "66io8cfmLNL5r7Kcjbg3LNHU2isXt7FpM4AD7m3PdT8me9De4Mk9Cw4TgBwJViooRpbLXzupNVVQ4uTdf7wjaGUb",
  "key18": "2Zznmb3G7ioT9FckqwzixxMx57fJ8w3H1cQrCdV4WzfhgK9sawPr5NL4LUVmjgrz3beQGWgQNqyEowoHUrMjPmNX",
  "key19": "3v49NJTrfYkQbpxgDuXX6NfSwuFdQUEoqfBfvSavuhsyrG9KYiJyySCzEWeeRNgAEecZGjkiR58CCxa52bCqPazr",
  "key20": "3hDn7XEeWG1jsRWzfEEvYjpve2p2aACEBpbdfaaQE1VFrqDJ8KmMysM5VuigDxJZ1N7oKEX8vfMMNwB8oSB5jUXo",
  "key21": "45X79F3RSiVbyMP82otdJd9GvT83KLW7cCkYqqtdwkMWuipNQmNLNa1Yj4ya16tXAZhki19g2EQ27ugZjH8SN4x2",
  "key22": "4tJSum1KmP4xMhqNuT2Eyj3gnuGNBUuyDqivcaW5a4REZpyea6xKGWXGhQy26QaRsDAyAppAjBjSQcALyfKkJRoR",
  "key23": "jBtG8FdLj7VMjfkti2MpRfnk4pZ5cvn5WqkSZHP49AU2qvwfvkmHFxr1Me4odrKMmiaTpgvTB7pyzUKBiopjprm",
  "key24": "3U5DtiT7uURfFP1x6E8uziFuBEk7yrcERGw8tPp7xmmPa3dthA4X4rphFifwdVToo9AwXG9muoAqYv1kX4L5yYD9",
  "key25": "5hRvXR9F5z2rYRbmVWYMAr9owxAC1KaQ8QqcpKBJHtDFWhgop87pVQbBgCwtcHLrQjYuLj4WYciuRJ6ToUpSbUBg",
  "key26": "5uxF5SDYSzgCURQ5D4UjMYEhdqnszbEtvDjF43gbQ9dRQXENNdJTqRQtwEvmKK5jAj6RCvcAn8hGKuGrPCTBfRAJ",
  "key27": "414D2gdJ9A7Etb6zdAo3QoCWhypeuFkUSJgzo4Pmw1Q1xfREfb4Nw3MsBPxB9xwY3G5QBKiz3wtP7URRt9apr2JS",
  "key28": "58oSgQrU15SHQqLuprVWxCAdrUiDM6J9KWatpP4UaKuXmXNnVYqPsxHUgCKgqd8ddLZG3nXgj417szRKTQh2uZd4",
  "key29": "2arKJ4TK4juDtZyVg8D6iJDhF93RAGj8xzGLdxeoJm5SLjBR5WsN47aDgfnw2RPxyW5GUdRKCEBYrTDsde9E6hzx",
  "key30": "2PovcuGUys7SGzUU3v4PYM4xv2JB3n2tNP7NxR15i4BTWjNu2k6RLhTMxRQUUYuT9tXh1LW6r5tF8o6N76QCRSD5",
  "key31": "3nXtEY3e3mQj5NxVWB2KM1ZQkmN6J3E5HbjXu5TCLH8wFHcRrgNUsY56rBf3obtrKdpyQeqqnmnstX8G2TEivM2z",
  "key32": "2PCnNWbSU635tXGciLaeEub5bpHri7eQ612nzWT8WgVCSADDpHfZbAu7kh42MFWJJajoCRxnHkFpQHVxFTH9A7RS",
  "key33": "4euDP584VnBvc7geq6Z5u32ojar7iS6kHEemJgXh9QgwCMaPoUqJX69iNtZjXZo3ejQ86xUzAPyD4Z7Cbbv5vxQU",
  "key34": "2ofswNu7GP8iMnnDbWbYmH2PSaapNNHnxojSyy8LU9MxrNz2UHV8tezcxuEQbqwfxdZFxnwjMZ4Sq1ypoiVuULz5",
  "key35": "3kNb7yT6BgYms6w61bkCA2fzXAj8eJnWuqZQRSL6WKhSss7UWCqfTuzBk4LaAZB2TqUL6PdvfUHgorRQUwQjhTub",
  "key36": "3sueYZsLcSKfKchnwBqZenr1pCy5VvCApUiLjafBVVEyY6mrTNiyzgJo1sfmZ6WUPZtUfmBr1k6N2hgK5rt5MUYb",
  "key37": "4M5s6LiuKkprueGmuTUeFwZ65f4X6LsCDADsC4gdDj2NWmShQZbgkmA36kQokDvwE9AeTg36esbcJZueSSLfWgn2",
  "key38": "3oe1qfTRinmdrKDUb6MJVAzMyFXQTKH2uWYPoSWCKkQdxnZjd7nPLzM52XAtJbQpkFfPdPJyihwuaqp8J4tkeoYv",
  "key39": "P48in9xnisxoeT7M7mbWfi6evLFdJfX7CZY1FiqqLLXeGTyPam2wGWMmeu9m3CATABRnC3AVYEn9jWHeiSi4dnc",
  "key40": "2cvukhhi1h4LxeZfjHUjssuU9qA4QFAfBiVjvn4DhYbeKA7xuWTQX8QS2U1LBwqfhkM1xtdvMXJ1kG976NiJ8MVK",
  "key41": "3NK9rJ9NU7yYej8yUn4mgh5LycypAi3tPS9Cfs7guLH3u1ewQL8Fvm3ngLQLhho6mWf1tk2yCpqhoKwszyF93c2o",
  "key42": "5wSoYtu5mbKA1gUwKtLp6BNLr41FdwWs2nY5ECBA2PAhN9fpUfvyfNBmLmn5gd699UquWYsKh4sVJZQpQan13mwg"
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
