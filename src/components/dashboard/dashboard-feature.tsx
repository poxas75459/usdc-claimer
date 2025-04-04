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
    "2ZCdHnyfBQxRYubqUqptvSgcCohvpnDrX5V3QagkYmUdGXULMSBeguuVJAsSo8y3iBdSJimkmZBrsrqFcyLTsHLP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cZkv9WLFgyBgBSnTx34BSfWePahtBLvcPRud62agfZoqGt8baZMLaunBDeTSBbTkzVdquLXzHHJyo72HApzTL76",
  "key1": "jB7he1gVmhRyXPnuVdt2CqSwL6Bu5pGKWNLV1C36GUmWAC9Z2QpvepAGVVtMSsbJuxYckSVs9GPrGqNM4T1xRHP",
  "key2": "zd36HmAWsyZLjQk1NxfCHxFjrfX8rNHZ5Z1UXj7Sj6ozGpTGvHdABh8C8fibv35j2a26Sf7tKJLnssviin2K55h",
  "key3": "2iY7EGmaZTSn5wEvXMmf8pN29H9ALnSPaN3f2iTW8SnSsB4TBfxJ9JaFSoAR892yVpd7KoW6eSscGLURNxQSpDnm",
  "key4": "4cxMjqXhSDtpdmSeJXeeFvZSCeLSQZLQDuuYxv15CmBtoBipuxPZu2w6PYKixxpkPzYSUGv3z56r35uDJAg2cejX",
  "key5": "xKdF8xTjUovzKJ1brktvyEKUC6Hjyp1c2rx3LStHDezVB2sx9tWJyHPPY7w415ji9zyF4sGvgXQoD1psYiWomRe",
  "key6": "3QGQeTcbk8tWmdQeiKb4TMXk6KPLr7Ne7PRJHjx5KeRH2cenVVqNcesQViyuBAa2xJHhWTxPABLA57LJMQHJJwmg",
  "key7": "4GjCHZR2f7WK8VfWAjrcJ2GMT2yiwUbUiJHeu7h7WQdAg3mFVemFA1B2Rf6tATojx9fnbVWvrgGA4JrerjtDgsXs",
  "key8": "4QDjU2HQ6Q9Mpz9pFdwDZAawGSE8NZ6W5LJPw9RM4idQM4j98YD4J4RtKjQCvMxpuZCgcUBDToGW2LxNVFNgt7WN",
  "key9": "4JRSmU8Usu1ZEJZu2zRLQwtpy6xUSB1PWdPZp7jrEwWk1jSXYbuiFfsjF1y5GJnJiRwvvy5sLz3dinWHZvJdjP98",
  "key10": "LbLrPcbFVxFjVtwLWpXMUnE6N3xtSaqMTBQmJMmWXQzAbCUJjWAPnNv6NigAkPXHrD1gd1GJGkcfpjCywMbSLTj",
  "key11": "4m6Hq7FsgrnyvCX1ata98qD1YRFVsDfphvuQFoLBGdmyk2Dcrb8z9UJJhspKXt5v1PrxyHvYmy8PmXpaHH3JRWjd",
  "key12": "aQhj7UqQikUYBpDHRc2JD63g9zthWSoyuMnYX24WB7tNNjzNz7N2cNC4GFzTV6LvARJuP4k88C1MC23mdzDyWWW",
  "key13": "qqibqiFdgt6FkHmFt9C9xCaejbMv5wETaDPsL7uTjYMpWQBYLKZqR3JomU1eNUQL3dbA2b2xjnRq4yBnyTqngRX",
  "key14": "i9WvG4AFn6eg8MsvDQr1kym5EaYuiNh5CNfzsuSH9xoes5AeQwiWva5HehFBEhjhTDEewixQXm7xvcs58h1g94B",
  "key15": "3CQfrXGhVjva7oaQXpw4fLN8BY4tTvpWT5h5RWzhLxdhM9WaarQjJ3tB5aTPQUeogcLemNU61orsvWh95zwuQ9vt",
  "key16": "4kRSacsGCwDvUwRuGsizFP7aJiWb4HXGDrbh6sghJ8sEunP6uWe7CELkuPGnoWQDGdP7yQg1PF7jZwk1YrdkY1GS",
  "key17": "4vrvmfWtfGQGAMnNfusrQXPyZmLb51p881qtK386c9vQjfNDVZaxdDeN7RbBpdGBJoMVVCkiMzEBxd8A5nQiDbp9",
  "key18": "36MQ6xX7gWHUYrNpZZ5kyhypHYDatjh18LBRXfzbeMv5kJbFUNjfcaKMFuH35B7q5sMWYGd3GSzVACQs6SdrtJ5L",
  "key19": "51NTh5bDnHhcZ1HEFCeVvPy7TGUiFrCyXWyowrTSv8NDSn965uuWD2NENn2qo6SiyNS7hPGjQnqFMeujPLWD9Zka",
  "key20": "41y8DLHX96ETvhdc7q1B4uMPp8q6vFwN1ZPtXT9ypks6T2d2CCCV7P5muDqD7Y4PWDhdZgSuNm97zD4KNmJqbMsw",
  "key21": "5p2jdtiWvpdbhVTpnfYN17ey2Bn522qXKVJH7joSheaJ2z2zMZwHgst2ggz9imKNkr7Ti5retR3Yd7pBXrHfNaQA",
  "key22": "2Egff3TNJJyq53jDtbt8EJCzhZvczxn4RGj39dYNb7EUhmbUtVXUtBRY2m9PZxQZyiDVsToXxoPrv6869WXLf6Qe",
  "key23": "578kMw57PBakt7thH3cASbsofyQCR7v2sxhZVarNsQ211HgfWy6mp1x3RHG68rRzsLfaC8YMW1bVEueCZTT61H4F",
  "key24": "Tzpe1ZNwD913PiwqyWUUxYV2AYDikoG8jQXQc58gSpvakq7qYxDkwtqaC4yzwo3aP78uaR7r7FgSBjsZAmNkuSc",
  "key25": "28T4Laych55s9VAUGtJBmigzqTkHwmshpTcbb4Z2fPwvoEW2kPcviSsoMAYAPtR376MBbywgH6CRwNMCyBszvRQK",
  "key26": "1H1JVPde5N2zyjekhZruL3U6kqT17wsCRMDZaJG3QNJw3nXMLDzjeaPs6cnvS8LNAXc7BaiUYdVUtDk8UCKMRQ8",
  "key27": "53g4nbatq5q9uTbXEBVnJKnbefs4bWihFK3pvn3NSmwMN8TwePi8nmWJBvaRfrzXqn98gRiBJGgB92VL6Z9pmL3D",
  "key28": "53ydFbc749HXPTL2BtR3dN5Bsku28eq7oiH9v4a56XwxdqYk1hirwkGnemKEQLZzNCBG8YuFKoWVWmKa3Xp9481X",
  "key29": "3oQoUCXD99RmLemw2c75TcS2ALgSLbckzzkGWkVLU8HDMfWYDuAfTS33uYPQkCr5mqSMLWQMKiS4hWPa8BWPs2w7",
  "key30": "3ZSkiSUfF5cmAXqeeUuUTQcAGDwhyjRdvMeovwMYNPmUPM9Y5AvM4dMTcroLM7MVkw9ZyMwoEsr7MW8yuiSeqRAj",
  "key31": "Bnxpm69LChzf2j7QQ8B6nfYVvWFJ93jVgQDTDA9giTP5wyTaAHVtoGo55FkxLPkmdcorz5Qr2W84UNBS311tFcZ",
  "key32": "28hJF5Hbx4cyMuRdDsvUtPx4TarqqnnNbDrU37HyHfobm7ixEnYTtj3cngSz45GX8bmKjSsoQ6Mf8QpoGYrQjmZ3",
  "key33": "41j9bnqD8M9vwTxLBkCVyJCnZf5TAfX86YWTURFRevkkXNY3Fa4xA86NJUf9TMPM87Ppjw2gNNKQdhrx1q8hCWDE",
  "key34": "3Pj4AJ8o5acTTYZkft5jxv6ZyFZrYgsABBHZsbH5XGnhPV36mRQfHT4HHBGmmavjENMLJn8HJ7NdvbDPYdJrSxHD",
  "key35": "27uVyx5GBxmJkjboi9z174KbcWjrbe7ZtbUt8mJeVndra8BPf4FohrmK2kyzBaQFyFMe8cy8y1quuSQxPbWDxVmA",
  "key36": "ZxGhtBLB2mv9NhTa7AvUz7nFJm4L8j11d8ogh53mv54aE1mBaxtoND4wbqUT1ukM96cy5X7XrN4DQXGiS6zNX6g",
  "key37": "3B7TpUsQ4jkCUVrwb9DTnq6oT7CMvc2EUbor3fxVrhrGgtAqKKoKCxNgJXfUS6YqzaTfpoWNxuUqdbiFAtZYHPdg",
  "key38": "5GMyhDkFfp7oJ4vh75er8g43DSGHnFuPoXF5ciNdxvRELpbtsHDpSCqgxS9yyaxyGfr1qozrzuzQiQWW5x5vYbSx",
  "key39": "4HF5XdYwDvJdaBJjgDsnD9VxkyUkWMm4kCpZqiN8YHn6KYo1PRfbxZ3HsXqYbLx6qwSYskyGek8bT4CbQLTFGu1q",
  "key40": "VbR9EyMVRJHB7Mev6wwfZstV9qc5RqJ8nvB3ENYsNmdkvhiPSxLvkEzGhVerhprYjgEwdfdtRAz41vji2TwsuTG",
  "key41": "3FMiWHh3ibeKbFtX5ikhTu4n1JjLYh7WbqURcSq83PSB5w4e5UoLxc89ooz3m48saiGPwDwTN588a1db2K8E4aPq",
  "key42": "2RxTcHzmKC8xBsfjZ8BCoy5Pq9ghBatouHKfvwyQ8nYCdSogUbDgr7qiKQEDxSTAq9h98XyqkLx4TWrjkQNYRRg2",
  "key43": "5dwzUm3MUeAiFcTR78EP9fmk7TUwcYjBK7AWtQ1uD6fDUzSrhzKSoD87sxUjNUbQPojoZDQfW4QpaeuhbuSeq54H",
  "key44": "4fk3DSdba8Ni1KivXXSy7KzfjQV8BcyJqeD48Fb3uDMpwft72t2X4sHAMzacnbW3zrM3D5BbP4drG7GiZGVf6CTa",
  "key45": "44UbWasSbyK9AayWDgo6kjzHnX9sbvqe1QtJrBCmGpEWak3yP7H5x2P4E96pVU2eBPngvdFm5Hk9XdZeRYsp2WmF",
  "key46": "4Q4KTtg8yEckEARf2n26MribXbnCT3Dvq9q58EUKr5RszqYrhe69XyhUNhfeXw3RjqMFXDemRS7RqdPRyzHTuPhA",
  "key47": "57vRQ2X1uNaUUkBBbDh9GtyspVJrCpGfJGwmDyZNKLTBhQCu5qdeHT7J5HA131yfCuK2GyyQZ4UtmHpAPYkqzbhk"
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
