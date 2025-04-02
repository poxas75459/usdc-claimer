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
    "tg3AFvFTwda1dn4GtvNomFk5LWXXkFWbpj7FEeWFVh5q99VXfzTyaDFzEkAgEzG1Us3Mk7HzK5YNRuxnj3e63kD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ooreNfPqtGLKaZBbSrDWyaWHaJpHv2DxxYM7bBvY7VppZn9Y3mSKqvJdVJGmUDVbA4ueyY3fZ4roVJNf4P3F7C",
  "key1": "63GLzmdvaobzmkJvQ8fy82BWvnhSfiwPN5Upra6F41MApsmc3vSG4cF73T7rrZQpgutmu4cUw5GLAuiY7mdKtpFq",
  "key2": "34oSaZ58EtubnRDwZT9HmWd8X1919Dmi1Jb3a5ipE6F8gDNVPSdwDWxZZX9VxtcxWj4oXFMaKJ8zkBsHWkq9AzCA",
  "key3": "3VqrBd6uBMZ3ETTAygEu7Xk4DjoRQgzn4zqVH937kynY4zin6yRXQczzaNFB6NE8Sxi4d1qY1bGUN2BSGmss6fQJ",
  "key4": "3sUEeCrkb9rEaU11vgdwgq38WQPP5nwSXS6yg1tYp2fMpEFfsC19USYNrsuAwU77LczWZw1VkAP4Yj8CMkhLCSWZ",
  "key5": "5PYhfVbq9qHBLfnkU4Agq8vdkKbrKwtHEyxj13oy3GfD3q3VrEVgcbEuRMn2ZfW8r7miyjgMbi6kuSzXgAvU6sb3",
  "key6": "29Na8GFUv1yeqJgwwAXrjYYavMpCf1cLLsQnDN2SWQvGxAwk3yLwLoRyZ5osE4AKKJVFWsK3tktjAMzs8M5HCL57",
  "key7": "4oX7XRyZX3aAirLch5N758mSRqADnAm9DTYw2x7DwLCwejibkMf4NCjmtAywYAK9UFhntYz7A1K5E5hBUqHfSQgm",
  "key8": "3v8f73jn8YVWQuF3kez9N7a42kV7RwhSpeKT6VfDZbaSTQL2X7TjDwFuMtmtMG6qKjfryji9tr5jNfRdfREFoTJD",
  "key9": "3uYb2H9AXyu3yGr2MJBHgCyVN9Ern9G577zDQhn3eMALYu2sUr4LZb6HoVaR5ooMw9uUmh3KdggDmuRUYBS5uKBu",
  "key10": "3qQNhejFmWG1zfsRxwCG6ivkkT3wgD4Ds14u2QgSCtR3zHupAWQYgeLuBbuuEmNpfaRPYHyjPCVC8kmfxPWZnk2s",
  "key11": "39ANMDtpaefMVm5t4iTUpQF4LTU6RiwMro5T79Phe8s6qbzMMp5w81FKfAPYGxE49ZB3WGMuKy7HU9SkEnui6V18",
  "key12": "2VKo91Pq8PMRsb99pQ6izHjVE951csSCuppSmFbEPafAwmgsMg9ibaPxGugWj3qSRNREgvKQ8ZGZ8nUbRWWv38zz",
  "key13": "3nCkSPt9zWC44bgd2UpUj5pYMXyawcvTQkhrrZRwjEmNFm83ttxcbcvNYKiLyxoUs4WxeePk8JvzkmLqHR9cqQEy",
  "key14": "3q7yChgdCu93b89LeQyh6eCk7QqTEuta1MEnyaZ9T9utx13BNW3xyhcgf5r6VvRBEJ8Wtk1J33ekrVEaSB2tm9yv",
  "key15": "2c2sHaQxjKFNbLsqS2Yg7NwmqtuHvJgRHAf7ps8LXP1esftJ1vFQ4JmqnHDJ8M5rX6kpSSxojFBzASqCy2nRyRUw",
  "key16": "5sa3nw92p1CD5AhRYz2AoZ5EcKfGUaGgBizFULo4whAMaab8rTcWwJKAdQh1K7iXKeXeWw4U54qGZckW9bfHud6e",
  "key17": "3qmEjX5Aa77TDMHTAT1TxnZWNHtXanqohJzT57gxzdtYD7cFBfo5RM1NXFMVjYFc7GRZDugtQNYD9Lva91YntraR",
  "key18": "32KTbHi3mPAS3KX5GzmrfWRg5pd1ZonpPWNS1ftXmavL2uAZrmf1jgwuBgGzrTdnYPi4mLsE7hvd8qXTyAfTCahM",
  "key19": "5k5CbNdej2XkcTPLcNeoHptaZVENcgrxUgpmUYow879Rzjt7ywLyYWKc86H3GhnF53HCHR9PQd4vRmzgPw4PyJdk",
  "key20": "3n4KLVv9vU7BjLHbbws8rnptgUjy1twhDFYkQguT8TdY8ZKQ3hTiEbuSZw8oyyybGzdyPKRJfZ9gva7eRunKQbop",
  "key21": "2ejREHh5BkFbNF3w2yuwiTFD44eTyU1pn81SWvvyUJwRWLtfLUpwgSq76TQCQ5aeJtVXe7PRSESLspegMC1AcSFW",
  "key22": "M1uoeLyoBryRHnMYsSPMrwYnkyEE6Fb5F7WbLUgiosR49ALpBcoYo8jSLft8L6tertMqsGuT9eLYa1Yy4HJrZUM",
  "key23": "5mg7itQdcuLhmdoMgRw4tPLDnWnNRMv3GmrWqtXb8TUCuuYEpQSBfwR1KBZ1e2Z5hdwL3tMUwjhAa13CXRzPP9VT",
  "key24": "3iuG1ZS9ZefTg9MACFvuJmhNiJnngeqc6sxoMZUFaeGKPG5xeDdcBh2xxtQYthgzmjGstGHT1yedmAumHq1euRMt",
  "key25": "5UotjuRgbTax55fz8UsJWjKAkdpZKXZCpmDERJS5NUDGNd2LPsuVjN9BmJUekxNkpnF5LX1GhffVnEyBwokLqf7d",
  "key26": "3LEwcKpmPQcVAb4ZGKQrJknnStmzUPFFZrePsFAWY9G4YnuWwxdQu5knZyvdAekA4RhvfttkV7snD2fvasAeK2YJ",
  "key27": "3r2cQgcbdSATnRYEumtt6P7JfQNggjHUf1rwjjEDwjcAArwSPndm7c495bBf5SNMkLyZGSa1Vee5mPTfXr3wM5z2",
  "key28": "5Ci8xN5LtZaxLu99wbYmjSdSoxwRidkhDTV2H2MW68EDyvZXSyMvjXxxvJWtPvyNYymrbNUvU6p5EpNqLvcvdJNW",
  "key29": "23qCFj4KaWqS7hedev18Ze2wZxLpYJcvSSWcSu5Nf3wwpQqfg2ybxzVdpd6ZNR8VvgJpSgKRnujHpF163kPQSgpW",
  "key30": "2kLZrvtC4sG3RPfAYAT99H8ecaTsTbHoytGs5kcLcbW9ReNwCDw71NhjJjG4ownsGV5CA61VaWaLGRSxcNVkviWM"
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
