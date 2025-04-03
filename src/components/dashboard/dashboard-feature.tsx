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
    "57hY37ohQXBjUF9bT65ywYEKrJAvVhWptvSR3pftpsv6ZvseYuHNCxr6ygT1eaa9WsTGViKTHohXjEJsD5R3gqrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hoh2wJLXYiTRw1BVLWEypUFPMR4LASouYTNbdqb5X4DMwH4iXaPqQnGydF3AbbXw1BbaKV4jw8KJ1dTPtog7qeh",
  "key1": "5b7o487X7gqLq21pjHXbJiuxM9cSNURkshcP8QNtKFSzXTb9Pas2vwSgoAaRujUceqweiGTyQGw3WEQEj6RskEnf",
  "key2": "3xi7ioGKhbETPvdKxLrEoB8pKqjK5kjHw5r4Vf3uAT8ihVehR3KXJguWyHHtc9YMXFz84mJbWYi5o8rEocbAFqU3",
  "key3": "4kyKB2k8df3D4MJDoki4ZJwH6imWqfL6hQKR61sQLVPNT113kmTaYtA2AKHHLGdT1A1dnbjBbaP496dqSX7Ru83y",
  "key4": "2yeMYWzqsnQniW1YT8KpEdKcySguxjmcmE9HWEehn4JVj5c8mv1YDVPJHyMkmv5CzSxHA9g7151Js1NKNMxrER5a",
  "key5": "48jvrWvAYKm8Y4zJ1KMr3Rg1BcWzoZ7YSPrQkm7VzL4gDPcpGtpTyHXCb1AC8riKwUW2ksFfhtysNffVo88y72xj",
  "key6": "4PSFYmMR2Q9ebsnvSEvEiHrxZJH7iyT6cRW7vU1NdM9UNipfct1PhyXyKTYAz6A4ivXF2XxzHJb2XphdbfxLFmVT",
  "key7": "26zeptZ4JJoMFTLGTyxGF5tLPeYcGc3TCGYTC8zuEB1ff7q2EkgL7Tr9ogD8frFibVXSvTGjkh4KALH1HfgaU9Fp",
  "key8": "4JDQSCVFxafdd2WZNDv5J24VTqBPNathSYMJDrRAXid5c2LUw7vEqZffcRpErzogojQqF1DcMqzBguXn2pL2mJUG",
  "key9": "3NZ7okXHVwxGMUjeKA9u2KnFRyNsygnZciYGfYGqz8QhrKYnCqJvDU6HUtrV8LE4Cofs7DSgQW6pGKurjYS2AvXB",
  "key10": "3rVbdtwygnqfA9EbSNztyhGwSPnuGud6GN9GTx9JJBaACuNxFJqjX3Tcmf8tWXLefF7hiKAsvXtyyVXw2oaE4aGj",
  "key11": "4DjZJosNHFwr58hB12qAHUS6XKjztkkmwACXnybYJwivS7AHrJYSJYRUh4hRm73HC9257KzQzx45aZ1jATmm3jnh",
  "key12": "qmrq1rpD7jcACtrEhrwxfH9CxV2r2TMJyUBy8aRjcCgeAR8HtD4tT6AWdVRpJCDMTRzxHAajEjbMYVXfNBaq56X",
  "key13": "4FWQBAHQPnySZ7BxXkN3XBHxJgCKPgiFBJgvq3y3pBpB99L78moj7xv6aUJKTr1B9etuF3RXCNqVD3t7HWKNB63i",
  "key14": "pJ7ca94R6qWrvh9kAPis2fUv5hggshM9kt9LCBRiYyz2Pyo3N27bosubLSyi5xrpFKUxCeZztj5b3f5GzGqWxwa",
  "key15": "4DqxpPqdnYxGStUPxwmGZGXKZxyWSBCRFriq1Z7FDxFfKxwbAJcRUZtz8JSHn3gyie4s2PVVTGV9dauSi69jaCLH",
  "key16": "4cwAS1oDpJmRAikYBznjsYvPpB2dTW2iLhRt6NQwgdziemddTrZBgSJKTdjdqYe4JZsyXwDD2Rz3nzoimSJ6wpJB",
  "key17": "42DXxz9JzH3soHcoGggdQUqWGdCsDC3dURJ3nEBC6vYt8KMEQntk1TVr3aBcrwfKhZCxikTkQmDStxnKjV8njBti",
  "key18": "5kraFeBtZmqizRX9NUyzc5uirRGL5EuXFBqAqEfFVFtBsb4yhZqNeGK4eBZKKuphqWbLZCQyuj9Bhn6yA7JEyphE",
  "key19": "5DsEkvin2C1nTgWYgAkoGMnXRWFXxk83Cd4CJR8fhwsXP7np9L3jwfGNuhJZHZLPT8R5VqmGbYmEWgcLfmhnQDPn",
  "key20": "vCK3wvdiPLtGeo4XiRNi4bmRAahKziH9gDYQvRJGK4iYyB6MYmaEU5cpYJWnZhS2wPKGSgCSg9gSVA88KX5Nown",
  "key21": "3bW46fhvCHGnTSWaZrNkwLP25dLdQJhQq3z6VgSrjv5AxUtz8VeX2GzJe3sfr2HR9X4rcT3ERHtprpP6wVxrrcGk",
  "key22": "5xcAWXZZEk4puaaoujc2QiBTs64MNEnwx67ucNUcAEKQGTEoTKqCsg84bXsshyDZ24QekQqyhESMgx95LKLsEVrt",
  "key23": "2fKeWS7vQCVnTuf3uB3NpmD2AwpakideXogvv9hhryyYvQthnTcw5xsXywMXvchr9B1m3zQh4hD5im6haY56nmpa",
  "key24": "3tLiXPRkAjtNEHxUDnU9Wfb1hWAsUjCuh9aiVVpA223hagFT73NY6oTN36Kz6WxfwpFdix8MeVDE6QhSn22o41nM",
  "key25": "23pKdTYgSaG75CD4R1mRiopwLQy89tGfRRV6ncTyJebHXgJRanYjjbDM6Suvzxwaf3BnxKR65kdB6HSA7PoDaVP1",
  "key26": "4U13knikFkBYfk2yw5ooE8fVPcgFuZu3b8oyv4fG36cGfojcRmkDg9re7expL7kxN2Q9fxXNBe6uzqnGVN6GjZu9",
  "key27": "pAHj9yVaRnNp7e6d9c5AjpjjRR1trvf3nzRA1wgmLvpuBZmjpQPVdDhxV3xVjHVPtCgArhYgGN35wZDx7RPxwXQ",
  "key28": "5Th2wigkE1YBH9PhprvTemUSKeTEupzUBF3TceXuDXS4x6dvBg3e31GHa9kyMpdtAaEKP18p1GiR9JyZebgjty7X",
  "key29": "Vr4HKc5HLNobHtJY2hrawu5RAAwpUoZU2MGG6QmpjCGVJS5Jk6iJ2j91b216S7cYVXBhF2K3BuuKe2Ypfqd8xq4",
  "key30": "2p5MvuSELhFqe9um4Xc5QfQRe1MJ4UjC67vYwtr1MT7ThTAK4HER199m7gsTNjhnK1vqrUxpCExoAV7eajAxZVHB",
  "key31": "54vxT2uk3PBLgVEjWdTcBfgCvaQY2qWPWyKCH2GrBZE6onZmrFgdK3axbEjLMM4Ps44j6b2y9DdDsHD3Sp5fWa8K",
  "key32": "38wi2tNZe8UgppWonkn6B5wR4B844s2MXSGzctpo11V8jEAbwhdua4Gs956h8fcZbnwXKvodcXJ4XFKLsCoHeyuT",
  "key33": "QcsrVqER6EiXmDp3CgcpwsPVNpd5EAzYNb2HUrTmWXXt7bsA8ALLwyX1kFpejAfi96NQ3a7gfDVyXwyzm8KVxVw",
  "key34": "5BQckuppsxwGdPxWbWGPx5uKHhuLzexdE3ZcURxkyn19VL7QFk43VDyhaKjwvv4nTES21GMTRGZRg2YWLq9L9xwS",
  "key35": "4pF4XGfxzxjNasvCQ2Py5Vj8EVC3Epc7vsiYdQUfRdcim2Qv9dtuacATAbyn1Q4cHm3g5CK4Qz6HfeaFuwkEyWgS"
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
