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
    "4iuEw59VeYUok2XdZHcv7m3x2WiD5cuHUAvyEBRio212CkShydj363MW3rDPSbwZShaqpqkExp87EWb2am7W6QqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ce1F7GAH1iN91eLtsJGjteA1PJJHnk9N83V2Jjrk3zFMqJbVAYyNrwJBA8d27uSb2QJboTHMV65nwJ6LdSa2y23",
  "key1": "4St5YkUZcppH4fD8f5RSPghQKovPbzrY3rKzx2jSLsEaBKDwRHrphNHiRoBXTqbwYeX3xRR92NQNe1HapKmQK66F",
  "key2": "4kj45Bjb5HEvocvwHArt9zXRRC8TsQTEfe9mKTCScp7TmofLs1ATDUx2Ns13si65jebQkkcgr2JWkdMgfFPEwu7t",
  "key3": "4E4mprSCNJb2vocxS7mvH2uAdk7rVpXbwdXV4r44v6czsJVN5HQPvdTJdJgc6BePGkmKhFNLNwYA2mYSoi5YL1Gy",
  "key4": "2ZkA35DmaWWDX1NP7kaU8SB9Kyby3K1btNnGcjTyR8YgQwbx3hzzRNvzYcDTDkoRNPiMpeGt5BswZame5CBngsUz",
  "key5": "3X7jHdR18DN3fWgtRsa8X6XYV8NP46panjgpq9zdNmojWVhdavxGgiSPh8iDvgWPmrsvcqpRbUehPM5PZNLqYmKa",
  "key6": "53MGTtuE9dE9GyNsAC3Jc41tKh6nYiURWsdn7LiRdMmDvkg8rUVc1iLkj4262yaghGpSUJgLucdutobi2mGCaypQ",
  "key7": "515kW8q2eVzm7Q54vxZcPZyDVxJwpg7dvYuZH1Y48H2KUoKp9W9dcjRro5fJseZUoR5wt8FERFYMbGVDJ57kZzXx",
  "key8": "2GtvsW5a7rsjmU9uZjPRn3UtG41PeEJvNtAkf3GfwmGAMehYdYRW2muKCGQ9S6cWAUGjhTQsiqc3cjuVSppjtaoV",
  "key9": "4rGqgKEUYRpghWcY6Dg5P4yxoqgq2ex7KzC66T6yedve9YP1LriTNUoZgkVT6VRLJJwjL33JSHGst7g4g56TCsFB",
  "key10": "2YUrAqj6C5Tqz6zvoQaWRxP23eywK3zpTUUMSaQ48FpmrYpbmTrWVPJ5Cc8Q49WCGVwLqGFjHjf296SJeST6UHNJ",
  "key11": "4grNSmYrBqWRUVej2LRfjDESaKCVjZJMrZQFBWoQkXDysxfNBRrEEhgg5GXDmEHRjxEWMhre4AbSvgPv8jgudPky",
  "key12": "5j1PfqjHgPUJ1McG8SrbY7ERLd18USwZCC87oADMYHa89HmQmZE7oZmcTPZonN4Z5HGrBhACe4d9YX3JGnwg6aGx",
  "key13": "5VF2D1tEF8nhrN2aEkm6dMxikV46R6GyRCvngx5szrJGbVdHT8bmTrFTSACeFA2t78c7Jpvohut9Kh7SYW1fLpBJ",
  "key14": "9VFnNyU92rVPKG35gH5fsNhc3BaAqtXsixrJUvDThBpGFt1XNqgptueziSwD6FFp2ZpfxgVAmpDrXzCicfCe7Xr",
  "key15": "XgKZWZ2CBxbU447cvpBzXV93xZ6Xs7UbFJwjDpaTRyWqyNerjnV6wUWKN849fd28jyAQMes1mjr7Kv7KEAZ4t9U",
  "key16": "4DNhn4rRhbvx5vHCC5vbeKPiECtnCvyV3i5rxpT5D5uUKVBRDNfVizkyTFsZU9nAosGZAaZeDcbRXYRnMGtkJQAJ",
  "key17": "3k7QBvcGEbjdueyBVqkm4LyaS83NMmbjuihMUfZz9FtYZAToMvj8nMY7KFQHbtqxWfo7FFq5pV4Qxr1tMsnc4osc",
  "key18": "2xZ7cHB5BeWnJAhLpeWXQXLtJsXWMXPJoVY5Pa4XeKUVhScTSbu8DXamWZwJT8Q5Z4myibAtKLqj5wUVcvevMVBo",
  "key19": "3ksLQqo8BtovRPa2mr8KFUnCBhcubWK7bwQCfieTWG7JZsuMuiHUCWnaXp2JF8Br5FVNytDFyzBEt6TsovQmT5KP",
  "key20": "WHHqyyesbSwzYwkQaxKBXpsGMRGVQHv9YaJcYzaWYiy3V5QwGLoRQRHsuQWqKoRNu5DgErvnLgbc5xQagjymzD7",
  "key21": "5Ws81SPiUGCZJMiJ49N2r2TfG3dJciWUGJ4zXJbvTN1vM8PaN8Sfu4MGPhato1NWCYs5kSzL1XouBqQ878xYFcDq",
  "key22": "52woaDocxcVQeuuwUQ9qsR449t6g4rqcR31jQoukoctoXo1QYuqjdFz4CGmSahtpt9vxAWo2LW8uujeo2WTtE9XX",
  "key23": "2ChUcQ7ABDYBLviokfjWgBkEUM5svQiucd6uhffB3Dpmb1j1NB2Yx1o4LSLQhUBqpCwaxbjBBgsfVS1ZP4K93iek",
  "key24": "2HAT8kELHqC24UfVC9JnSZyJcdv4KZEWkWyQPEXDGkJZbSpeuVmrKuAFxioct7LPGvfGFeyrcjAetiZ2nSuuJrTj",
  "key25": "dHZPcSzuwiQu3SUYDfq3ZgADHmmZACpbiFKjsqE6UVs4VKqVffDz9VNsRXB2amszoinyuThJKcfXgRRSdB3syTT",
  "key26": "5uSzBqi1tncoFy6Tna4GJuRSNSgBx7jchowrinb4NEKyggBA52Qna2EQTGv3rmKhKuDvrFQeuhorLxerZ57pAgK8",
  "key27": "33nAmiDjpJ7heoefLve49FuKtBmWLu7xoUhH8jMveKkagfQAQx53wwHbjsoBErSJQFH8ek7bxsXyB9KUUaqU5C4n",
  "key28": "2BBdngmn2u4SCzqgoe8E44745d94cYhkVv3FpdAQ8XA8u1xrhKYwHoxQ2JnWYrNDMsAc5F1i5m6akLBqr2RuZtxY",
  "key29": "5Nicvxni6xEXtW4FkzQNk2fAEauckNiLQ5RmACF4BK2jMvPZeYQXyLskUAJQJoYeEDg8SDF5xLa28B2EY1frVdy5",
  "key30": "aNzhozcLWQaL8E14WcE7aokdfUqXVEztT3xocYMjRJzAxcEzdnFnVoMXz9YHAbJgUDaEvpCnujqEkcJjNRDybb1",
  "key31": "2BD3nwAret554NWyqM8hMgQkaGSgtPhSdBu7eM8yPA6KGKJHr7rSeiWYgdNCeXaXeY6rT8ew1cWijnJuvCQZ8s8b",
  "key32": "41zVxbeotY6UskPVifhzRGHRPSgczJuwttb2BB1FwrskbRWeJvgBPSGwHK3C9zVqGC3WHkpPLeUzhV8cWMk2PUB",
  "key33": "4DQXy37XbK1PJQh2hyWXMiQ4pZU5mvkf56ixENnGMWpJPzdD2wUug48LvWBJj4ey1bVCQHNy3o5A4sbyd71nHgDN",
  "key34": "4mqz4sq6hQWW3E64ZBK2kDQySYsgGd6VGMhtJ5VCDU5Hhqp9PV8NYuRXZRHMEXHdZmky8yrbFQqsUbmTNJdfDtft",
  "key35": "L6HwAuTyHb6K18HHpSFVsM3jkzzrxKzUHDenyomUPnZLunP9GQ7ZpkaAGNs1kDoCVJzZTyAzwnRP7fQieBvb9Nr",
  "key36": "5uwPaNpSxjsdjs7SMz9focF1a1w2WLu6uWE8bnWhoZ6721wtbKqvzh8AjWnk795Bx9SpNBfpbsRHb48g2MqGFsvQ",
  "key37": "23GZQf8sXtpjsAqmn5356XLrSb86CqHKJFmk9XSYFmqL7T13wrnuaGKjPi4V3Fi16bAZLFPgdoJzSk29fSsCAcrM",
  "key38": "2z17PdiHutCWbTFv5hDUvKAzy6kbaaKPV614BR6UjjBrFm9aVjFwJSawqxYK4VT8HeQS1YSNCzB7QT66v65Trzno",
  "key39": "4J7wKkoTBQB4aAo1Vvmghxj7Ug1SdrsaQue5rLNbMR7zANifVpcGvShhmvY9iBb9KdKL4zogEhhWQKCgwGe8vEQ3",
  "key40": "5zo5EJ3Aka9DUMBopv6VCcXWpHxR9RTPFDYhVRxN4PpUU1T4zC4ox1A2fT7haA3mqsqUo1RDKDMVSmUqMVVcv2yE",
  "key41": "4zPSLUgYNRKxcLUhjqtWXHBKbMCV45mKiRXfU7NdrB2MTECgKPboXQwz5XgmyzSTHg3jTgBy8ttyCDBEFo3R4kFG",
  "key42": "54rqbsL9SoUfHGsi2oNXozncpYtvCs9CNzm5676FrfRABpbZSMzYnQC7KHMVL4Uam4K8VpZbjfNDCKCHjxEeQuP9",
  "key43": "sFSY5V6UunFaN6xrcRp3t22Py6AusM9GuD7a3F8Kv7jvfquqYBmSLqKzMXFEVhF2f5YqhnWq55Dr57RHNfNcBsb",
  "key44": "4Kz2127h58Y2yTGEYkiq96AKbcUmLeXA73Y5SHT7hqm91n6p6BWv9hgELvJFNSEmQKYF7JLkjimkAKc5F1yopjrd",
  "key45": "3A8M7AhUfu3Wy44YHb7ZzFDK2M4RXs6WDMuLHFCyAZ4Jv4ExA977RNwyfxDJw8hubaEE3ZUCWuvFyDBD6zPdoasr",
  "key46": "2ciZEaEZBLk8CsNodGNrvxm2T53RLkGQLHM6BHQWGoVWv3hMwRoEtNn3v9169n8Ti42pesE7yVouwnQJLFgvJXvd",
  "key47": "5V9TAC3ovsstGgrCWyc8rAkyN6MGUrHKhuXVnRM1ajwmWbuX152AR42LFCXcK8TWQ1Evbr3A2rwHnBju5s4heUoT",
  "key48": "57pnELfzbUEKLRDzfetjAf8wiD9qftUYJbRTfpkm1pW1BP6VbYGb5Ee5bCv3aNmpHY3bV1NBpLRmD7VqaMQyCLA3",
  "key49": "4Vb3bp3EqQxWWpaFwbQ8osDqBymtF3zDZVaGyphorMcWxB1Q5emBfMpNjN3QXR7yRdDwBDvTTXWFEHi5SyKnP4wV"
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
