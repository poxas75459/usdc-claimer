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
    "2N81BryDwcApHrgNCEArgDuQzkSMyojm5UXQByFiWCbAjGQx8C8SCmT3kfbAr5KEzGTzuUCZvbgURYX88PgV64tg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tDeUP3PMhkqcrDVLiAJu1av2gnF76LEy6m7MgzFmurajbHtTGrDpT67xTCC4oJyA12BiRJcmHWk6AUuv8c2X1XD",
  "key1": "2Ukk2YSVzCbmURnjqn34EmdU6i4yUDB1ffkFvRPG6CMziGCAmwhfK95nr5ueetN11CquifcjtpaQ454BCaFJcP3i",
  "key2": "1WyY5N3vDNUn8cqXv9xYZgDx8MvUQRmQwLfam3BTu1wWw8J434uBaa1bZA9fCcfDDmm57nhUnb78iQZKZfczTPG",
  "key3": "66daddZ2UNnGcwePWaMp99aiWFnkCfv3idxpoUKcxBEVrWXi2joeWkP2Fnwxf7uED5JFibaawiFJdoMuM85Kry2c",
  "key4": "4uKqej8D74yxQpkhV6CXERHK58HfKUDVjiUwC3V9E3RoecUeqkRBEFtHZbHwJxxhZPXPuhQvjUT7agFvK9XQHKuF",
  "key5": "3GmKyj3aZDfmFz16wuyra9BPZDiwF7zu2h9W4AcbnTTttbJCCsqW3vEjUZRZxcHeziq4ocx7UxEatLAii3fx3rEh",
  "key6": "2jqqFbFdFSVBUr9u2JWvqEAKqENQ9gn4rKj7xLVhzpXS7Lxso6KP97yLMAF7eBSMfhLY4VHEygRvypWhYpibdNSE",
  "key7": "scHWHTitWMM8wMRc1qqRrGymk2h6dQaKpphNjBqXrzg8VhcWJkUmYejx4j1oDvUSe24PJaXeZpx5m81eyw59uRM",
  "key8": "37hD1Bh7htWSdLngREZ85hAqDHzTp44kYyvcjqybsYSJtoFZMcWGywWMuBYiQ1L9qEGr1GKDmu72aYkFgHvT2cZT",
  "key9": "2iQj5dRRs8Wvm9uryRNdLT2UrYb6Mbo5XTGPZJUjsrjvegzQVNyJvdDi7iyQxMT1GWEw7TPigQwiEhVnCxPgzMZi",
  "key10": "5BK2oUYhH4YqbGR7DJLRhzEt5xeQ7RsVEZDYeSpaGZZvyAsnXA8nXAZHzZzzRC8dJ61zQNByx4X8nSc2NBHVHf7t",
  "key11": "3hwMBQM15Tp6MBXG5GWGhCph5DFVXzZNsecXWw3HGmMZGWbVv9xPRfMkVd8vkVpXLLJbtvtwD3CghhvmgtHQS4Uf",
  "key12": "EZYY1jUM7zpfuUHBV5hHgM9pjzr6QQEx6KtyJQtAqo9KFUDJazSesg8G3mVBWvLWzFWnTVZbYYL5r1NaaLP81CT",
  "key13": "2ZFEofcQCTFhoHQU3LaZkaYKTN6yKgUD3PnVd7dakbdiPHuzHwzVicoZ334DhwV8AdyH5jbtnbSPsRVKVYZTSJ2j",
  "key14": "2V9iJi91PS37Rwrk554Av53RwtNys28qfK3DPWGeSLMYaeNqzWAVDtCPaTwfxfZKuj6YdpTNiKYTqce1nH8wueJR",
  "key15": "Qi3QQk3knuATyBga61w4fcydgVpiV87WgXCsLvPSB7APMQLp1rpdk6x8nPPNjxsMUjvA82M2h9XxTZoVaTm84b6",
  "key16": "wMngQWtMoo6QJpXLSsYDDRB7oqgKM5nZ9FkoaB6j9efqd2z5FY1URSvnEMfdxMV2nUZ9JdyKS4UrSH5SixpdNSC",
  "key17": "4r3B7WuancDcTDHmhhtDhcwcfGbQp2HarVKCTb8xdfXrq4ueUZAGuqsYD76CUJ3rMJNhSPbUUvp14LQFweLg1U8m",
  "key18": "5CyBc73nEJfDaq7yG1RrYedVrQbzZ7fiZY1oULY5AhS1c4o9qKHZ7sBrD7w3YEWNHCKFh646LU6NrwzNPGtgH1A1",
  "key19": "62kJVJ1cMKVi8gGDCigfbVs2ma4PSmphftGe64UbMKirw9pYDp9YZRxAkX9CvgDpRtccK29xXsiJoX5waCJpLHiw",
  "key20": "5WrUySE3axHydMhSH65SUi5FyPM3tU33tRG9ULEqMoKfrrys2uBGk3Da2yPMyofteavTQewuQBpT7ifuoSTcqvkt",
  "key21": "3naJviSfgSKfzSbGCB24uB9XqbesCnkENcde1rixhVkGEog1KYsLa4aZ42hrZnPRqyFqh41mtvekPCHk5iZqhn6h",
  "key22": "2gUcc6XvBvSm4jHySCmVnbw5QVXToQUSasKiShWCS7R9tZpnXj591Qs3rc3ZaB6RpKTsox9d6ir17dLsQEEK2MiZ",
  "key23": "5vBKzdVYFP2SPMBbQiVUx5gQk4w7EbmhMoaMgCajUoGJG51qaCDuEQ1j61QmKKjqp9CDJU9tYfZgHmTtfrEPHXrM",
  "key24": "2guXBdRRLnuguZxMVWtEPxXnBLkGffF2EwffRZ8R2Lg2YnnrgwWfpM4zgrZ8NPx2y2S9aV4FEMm9HRheLbS2GJsf",
  "key25": "g97qpWZjEgbY4HCG6xX72BF1szePa8s1XRj8WEzWQDYQ4Fy9jjyMHoHrUoTSLyKq9Rqa6VLe46FvyEW7CK9uZgv",
  "key26": "3NVCkMKsA2d2ZVsuiSLDbhQKe3z3AxvmGjWuN7DstQjYz3xSLh24MhSpjkkT8Wa6qefTs3PUsmF96qPGahdxsQEo",
  "key27": "uEWM23hf7MLUanQuYaDkyLug2XP1N6taUWrhAXz8nUvQXtWwEwg22Yvzk4M7ta8UE1RKEJhh4uUBjTmQzv9KDwb",
  "key28": "2c3R6CPfs6s7NYqX33moqiAVqhxtLDmzibAPi4ZBfdvXeEiRiXKRvQG2VdB7GbJ11KRjHEfb9oSiq1RsEybJRJLC",
  "key29": "2p12Yoy48PW13GMYZWHB5gGrsBCsNeg4bgkqygjUFcwmQs77mGxhS5dQPYH7KK9o1CQ8cSa9BQ5aNgb1GZU3PAGP",
  "key30": "CmEhQ8hJCtLUVtsYA3vQ4AQb8zwB7cVWTm7z2XWY54M8gG72bi1J7N4ZX5Vjqcpoj3NHZFAJ4yuqXDwzdktngov",
  "key31": "21bXMLfxY9eEh3QatgmppeEcHRxBh1Xb6Lc3V26VSYJwj6VFXjMCBCQaUDmDyzXEud9cjd7gS9Vbsd65qvNJqkCV",
  "key32": "3bEmGNW7cA6pbbfrBY1uusFgV5LxWCs6h18BqGHetW9HBctvBVw1uZpW3ipwS9QirkinaFiATDgwLEwEamTtm1fq",
  "key33": "p5JLm8zncKJMnyEZosjvBnFoHtYNoJ9PnAWfP1yTATfkjT4wxJqb6VDcCWyXdCgzQnvsXpMjXcuXsRvHYBcUBr5",
  "key34": "34TUigCRxBxCzTLqbSBRD9sJLuS5m8vWSd8uthujzkgD2S6axD1HBp1hMvnDHQekZhCSRsesyZzr3KqRLNMwgZLD",
  "key35": "ZHB8rmVD3Ez4yiq3HqwtNq3jx8j4cS1vKUKM12W7dcyCMCP6hUxrB5sVD4YgK1djnywYTK2yiEyEX9gExYY1rvK",
  "key36": "tbxVJSzLu8dkxE5ku3Z4BWucVsEbswowBb5MiVV4gpVtBXr9Wgs4FkTafthuLboRBfkGTJSP7jNe96DmrruJcow",
  "key37": "38hiB1TrTisbamKrn5nJnueKQCcmyyYV8rm6oHW4iCQwkwFsvyMzRMg1y6PEFSY7poP2YY5m9kCqoCdprjYDRrXb",
  "key38": "4joXjFpDvW7B3MJymqYFoixkNSYyhRhP1YN9VcT575nR4feCeSY2ohPFPkm6c7QGE8SfAfhAnHuv8oBFhWjBZVuE",
  "key39": "2YaU5GhUccEo95KLCiNjz4xUsaFdfarwt3tojNxpZ5ByFEgwYcMMtTiHoQZB6u3aRPYhWezHH1Zkm2uLu8ReUGso",
  "key40": "2b39fVW4CR2Q55PbjsofAkxr9Sq2qM2Gq4V6JJNdS4sHm4djNbf1FrFLVVZxnCLuqmxhw7hoYuUfTqGcpnUHFQs7",
  "key41": "45jdajQQTTveMKZUUUuXZAJ9gckybYX8gzP9npMYwS6gYpLCmGe3zWWVDgeYctSPRge3U3voWEZf7LUPi9SQYkfh",
  "key42": "32pmoRFfdo4qUjjys9foEis8hYVHqKyxZdRuxQ2tPSXo4jEV6L8odxaznqQeWvh3YL4FHpci2a3AiagJaUc1zqLi",
  "key43": "2spY3n9VPPKQC3nSrvgGopWEWDzz4x3B4nkkjkGrYM9AWFPbJYhQT7yybZpUBDLrFgi5zcy8RDWy4XEJq51FmWTa",
  "key44": "4PmCopfjTErGNz1SJdWUAqZW8qKq4mrapgE9e6S8DvuBDdN5a8XkARpLqM3xFgaUTywMfMQFexMZ2ptaXa6fSgur",
  "key45": "VgTtm5UbEVSajs7hucXVjb7JxYyPCtPUEswh1Fkb6mJDC7nvRoeAbJpdM6i22iUMGWWuqdWpy3MgTp8uu4qETUr"
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
