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
    "ZhDDa6mKrRxftvkuqTTjFbVBPvgDwh2LH7gArYvMKVBsvV27eBdYy6L9HeEiKxDfUdbfdDsxGC1AAWcrQSn5LA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aYtWM5qavp4V9DyWkm9zXYfCCxk7spdgU46hd8tDe1aKVdfEELHHy8NTTn32TWY5o7oNsChu2uvEEkB1db8BMvR",
  "key1": "4WHqsCaXhS1nq1xSjjDqK1rQnKbcXm9wWuUF5VjLt3xyeTJoR2vZJzsgF122LcBrqADJFwnKLBmz4eoTxYjn56sT",
  "key2": "7jrr2AGkK8WbeZJLxfVFhr5L2gS4sxkPP5e6NFJ66naJoCAChGxuYniDQhV8LpHCH2mN5JHmTbMeeJAHsPjBz8f",
  "key3": "46AsWvnhgmhH7mL8ctMBv9MQmis8DZyNbzmjsHA99eGj7XbaAQXmcrszJDYTWCTQeKMpTG9c5oAJv7EapJJ6EVsP",
  "key4": "2MyfWAs92z3yH6TRszTscPm9Aoyzg6rjNjRRVN1pTAaXLaFsLEcGE3gE7uKuojbpQFu8T15SsCj4qTTVLVnvBPRp",
  "key5": "4c3hwt7PVkzCCTyETx4vk86ppK2rijiWvypbAsemR8SqdRKHd8LmBFBPh4W1wJMAg3T4ZunFFntgXVMMzoXc4KFh",
  "key6": "MhSG2EqbhUXqFscGXYFw4pBHJEBtYRisKRvMf9SF5yVk8371ZtfFroZJHz2RkUJPeJ8tKBLRwHTnRDDQnTDiwEr",
  "key7": "4keBNKyce9nQeA9VznSbjJG3FnDGBoxVPSVmh4DScmjgzscYQZ1tHjGxVRd8HBAF9vkAG8gpJN7pBgDgHx5rYP68",
  "key8": "3FdrH1korEE6KZsiT3gRq4ZExzD9qivX3W9Deq1zxTPmCaSXBiwMaEuWmi11XCGWGgUkXeAvHYbzF9e4C5jHfra2",
  "key9": "4nyYCzYjyKsbsYaFa1c3EXtAbGAJqsP6xjqQzsFpV1Hpg8phLqQFQouJ9QhwyD3WyqLBjjmR3Zu5SqjHewnd5cF5",
  "key10": "2D9jMWktkCP2peRayCQXfggsr6SktttSKb2ydKceiv8aM1Vds9qkGPCqcRSP3GBMUwvNxzSLhf3qtjTCu7gJWs5i",
  "key11": "53znXmyF45CEd5zynk7pefZMMpPgacbrAsuN2e3aYnvSnWDTgghg4A3qWkCyGyH2oYcXn7iaYTBQVNU5GCWhfcUp",
  "key12": "3rQ5poYHWArHzevJthf5BGtRybZhj1gZ3Dbb9uoofHXjQAFYucLiuf6kiAeo9HUrmjnnEjtQBC8VGwAcbBeRe2j9",
  "key13": "26UbbJBSaRvmNMa5Cxwi3QkR9PJTd4N7RHEw9ZUgSGVArALBuFYw2vLHmBz4Sv29gyX54dTJ3i1Z6J5pXpFwraWh",
  "key14": "aHcwoZZXdjMT99oDAe3eZBeHz73UgAtYqSw45wFHn5npN4pNHrzTchTiVvt2SsgXpXomUeaiz4mxboWJMoV3jZn",
  "key15": "2myZvtZsA4RUtsmkAjqJ8ouDuRfkfCSQVKvMzSTyMyv59ED7EAvfpeoMWLg2dfZzYXWfbQkZ3x1KkNA2aHAPPCYC",
  "key16": "2iWXmgLBJ75F1yJt3ZrcNyUkhqw2AXm7B7JtE2cPiQwknmoLiGYawQ8qTmJRkgG6w4mqRwzgh8GQHhVLsBtGKZqj",
  "key17": "4x7VrMr5uWvMWWzamsUG8uyi4rfeVQi6KWg7T2Vw6zT8NynsHsjbsF6PQDenrZW645GCdDhwh3V6hvGpTXJWc1xu",
  "key18": "E9gebv4s8hZ2q6SMkP4rRFmSBhPsuKdKC7XXQpFg4oeXzjC1PeKJ6CrTbPHp12676w3NPA9VwDBAkcZ1sbZ19LV",
  "key19": "2kpD5NorzxvvEA9XonsQyJA8PuPCRWUZ8JTB2qUi5hnfxs8CAtJsneHgpxBX5cfBuiYePFnGL7UJgDTogQEjKrZN",
  "key20": "3BagWCtqaC4BJi9t7T9pTn95KPidLmjoBP1j6ShPua31A5Uhha3F6M8W6qW6cSh28MRmkULgWsbFFVwSFrvEXQHh",
  "key21": "4QPhQ1X8oYmnzLef9N7bnmd6qgkh3az3G7KKqccAjLBAewox3fZsmXfRaDdrP9xVAqtJVsnEqETumYNXEgM9Qeyq",
  "key22": "5kyNjR5pskktz6AYGAvzsxwYFzjGWPg9BKbnNxFBFnBpspcVVJ8ZssDxKBQy1pWH5e1npKcswUTvL1zWcn68Tzkd",
  "key23": "udZ4edYh2P26XdqDXtNipxvjcUqNEPKGQZQo3XfJQjMB9X97YUeeChHDU8QWbWkyXxCj29BAdjZFdz6j4j8mvfY",
  "key24": "RR5sqdqFAFR7F4KakF16Z4uNaXUfrpDTED3QeEkYDCRqCSeEHDMWtzpgZH3AkqRnzcUEKzq15pYscGGsTRze8DU",
  "key25": "48up3kUhwTG41nCYcTN9xmmRMs7e21irvYW8Wo18G2SpTzBURYKop7dh2GVyTxvnDqLhhcnfVJPNTjfXoeDtW5sY",
  "key26": "5oeSSpdFWWJg5C6sj4uZoGNmW86iUEuDSce6TmoGL4F85hL3u8uxBjpeaZogahqx7mfGAdmg6MeCeSCVaqfTmKWh",
  "key27": "3zdzn5feHZZDWw67J7yE2HNRjB2jZavsrzEkc2TavCxUatHrtbiXG3woHEKYqLWa53atPgyiHFMEfztnUVnC2fXP",
  "key28": "5nMh2mxWxndHqfbEqAnMSgwPmAojwbBPu11HW9J68A69AWCj5fGek1dqTYX8DtYRnDeL1JaWFRz9kyJmtmovq8MS",
  "key29": "2n9rFHCpRbpB6Mv6sHHra6b6grudRRU1FK1nfwcx9BuhkZt9upAyGGVGDMe9T3oQ3ZLenc6KEJxNuK5pLPrCtFHF",
  "key30": "2SmhViNzZa61bKV6NpmvVeSDi2CuRMYWuPx8G3vu6eRPmdcvCDXfWr66sMdJMfjoKRuxes3yZQBdJiwPfhjD4ZCD",
  "key31": "3zGVLYvpmsB1RiaSnj1jV6tKNUzpvtNFjwA4qTQ9GFc2SSjjPy9iidTiDUjsesDanViQTCYY5tfXjdTzJagSx233",
  "key32": "3ZRqkunXgiafAM5g7iwbSNxFgNzX7e4o3PWPFME89pcuy2vv39hgSUZ3fviCYsuy98ottiv4Et2ToapAtHzted28",
  "key33": "28BYDYT5AYXytYbXDSgAeAr8BXMk8Urg6rAKCTzPb2aFXJ8P7cpNTFjY2DaTwrfETanseLNBVHk7qpxjrZyoxuRt",
  "key34": "Z8B3iR4pVVhKsAY1SXAMvWM1FEgyBdDFSDx6ihKakcprgSPJpFtCmgEK3pG4BW3aq3PT4hPFHuyhfNf7XF9j8Xs",
  "key35": "EHmgRyKsDFyM6pERcyxUAhDAnG2gUjTkfrMhymJidyeG8xG16mhropWfYfijCfFcWiFsLiWnbrCa6KGyqysb9W5",
  "key36": "29TD2rJmXw9gsgu4yD1PcGatob3vhfac13g4LMrqZLDS5BJYJum78oFwNyy2sjzQ7akz6w3a88wtw5ZyGssCjepd",
  "key37": "XdmrcFDwkWu7HAoZ9sa7WvkzRqk9S4h76XoJWhp1LRecwhNVk9asjKPfgV4GksjYmKDNFTuuBvaLckDDwKrFHMJ",
  "key38": "4QPSz8cbAFccpUA9WoNQKHcG4TKj2EXgu4wuLej8XS2So8GJYs7zR5w4iTcyoyp8KRXsDzv7W1PHzyjKonT4X5b2",
  "key39": "w8zG9KqKPSjJeJFcAwxDMdAxmfvsVb4u3h3mZGJDhjavKKoE5kUBradYWFRWwDZwsx5u6Y8pDkTbvtumr82o82n",
  "key40": "27KPbQiyc7WsWf453Trvvx5zzocRYjAoVF1T5eno3XCudciHEMtxXPjg2MgDvD9dWxZzV9NTxVAYGurWdfiNhz48",
  "key41": "3MbAesdpC6iHf7zvcHuTQa8qqVonvXEmmrGfojMij3NE4N7UkjPh1SNf2nT6fL5xMTCbCdXD5BHtxJbzG8HTycnr",
  "key42": "kGUHCyE5xony7EJoEUvqWzmqN9T6Ti22sorgBEHmTC8pCW2McEXZbe2is6AgYtLra3HrtEJULbm5fMSWdqaZfGA",
  "key43": "5JNJgBiVJg92vi5FoyYeuB9cScHQvMCUbyyJg5UCW2zXHmV55VVHLiCo94XLjzC9PA5P4eLJZbwBkEfrpJ4yJBzm",
  "key44": "2TJs9jn4Sn6UPYLztbCCCheNP4Bn1GRqRNM1Q7fsiiN3J5HvEXmXUV137aYHWWGXVBY2RPAepod3qFhGLnX62JF5",
  "key45": "4stZfQ4Ls3XizE81eLSLQaKp8U5YffVYGwkoGuY71CChpzKhUYyWmeWfQ82K7LJXtoEms57cAUNP7fM4E4vgpp8r",
  "key46": "qapxhdbGPYD7YAK2ma9WosfnNpfgvhjYciKr9xr6aN7DZkd4Vt8HGZJ3QgcsT4qH9H8P3opERo14dCXvJdvpA9p",
  "key47": "5uhHGoCcc8gY8wm47ACSteJaZE1T9j8VFzQ4uepLioKLu1ZZmzWoxGztcMTaN59CFRLCBo813DAccZQKDqLQEMut",
  "key48": "2KmyqJDyBh652a6gYcFAmUnxSzxgCFoiihSXd3k1K4fjoSJ1TEhWU3ckFiU2vXsQZi9kkHeXkgAj7u3TdS9yQsiq"
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
