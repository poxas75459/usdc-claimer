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
    "qfVXLBjSk5jf5zT33h8w8n2KphebvB8MuEXmSSncZF1LmF9LBWAFpTYwfWXi51cw6Dpw23d1JYzFeXegiRbyMCx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ySHVUEajCRXAAZj9aRQJUv1w1sHixYSFtSPeWCP7PAD6ajNCupaMNoHzngzZ3pQUvn2L1JBd7DsH1Kd4R4cjYhz",
  "key1": "oenycx2nUWMit3eUoJPCutfDjzvSVGXPS5Wvp4Y7zi8GyqbMhrP6d3vLnU65Q9vaRjxhhwJvwbFJHw2MmPkdvUk",
  "key2": "2qKRVJ39K2qvV3fgZKpPDUNnJWFdAu4rrda5uwpKKzEd6YtcpSEu9iiQGPcPc4fqFFjgVraCeZJWEdnxPgBDaP3H",
  "key3": "2RdjmABQ7g5mT4L8AGvnrznrtNUb9WxGN7UNhBMTTTX77Jr6cZoDQkyE9riLseix4ro6kh3juL1K1q1s5cm1SZuR",
  "key4": "qKabMEf13ZznmshZHZ8vJuwwQ7GsBKuGz7Ef6vRddG1WcxzZYwrmYKYJdVfNBA5mNvghfSVai9nEgkZ4t4ksmJ8",
  "key5": "2s5U4TbzVu494hVDSjDXY7B6AxZijt3xkA6NnFmDwXqksVpaYyk8RUHzbj1Yt8KiBSKHHhoAQnuiAuF8Kyvg1Ujc",
  "key6": "2uKwyLUKdfinfy4nyS4EsgTNuHWCV61itvazKZtd38i4xfVQhSbcUKxMdkUXCUVTmcw6BQ4MRTVvCQmjjT1UukaJ",
  "key7": "5eUrKQBKditwLPKZQyrqwJXo7uLCfdevApbknSaRUJKdETB2fU4fGrDSHxX7muoLs8vwtntwGTRW5vjh3Doj6MNH",
  "key8": "5heC41fwh6PGRD1czFehSBddCQKq7RHA7u5HRL5VcHEv19Aa3L6PeeAwLdNZLim6FLgB6xkYGdFoheo76SejHbaP",
  "key9": "2CZUpmdMSnyhpBs3H2WKceMSVXbbYJ6nFviBM9TgUy2Uec7LUjd3sa6gCNJBmkbUAe8dmKrZhwok6Yd1cY9WKbJ6",
  "key10": "oq1wuSx1FrAPW7Ts8KoseEtUienV2krQb9uxXyxXRDqko1Savtb9fHTTZtqaVcxYtixi97wXKw1htR11tZrSjbA",
  "key11": "5UGMRmiGRoffFuwNwJxxeYJ5i6jK8JXiovwiNx5WdotcjjaqoT7zWHzwtubU9CtgAD3C4DE9GcmtN7Ce9MfYeEyq",
  "key12": "23FULfkj5vavfXn7GkZibdX1JQLHmrX48A914xTUKLD39Gfk22xQvxKmYZ6VSRyXBdgeL32L7pt6yd1uUGdHBAep",
  "key13": "3fbCQxx7d4q42iqvJQfvARhRrm2EcbMNmBQpt8Dj2UvHFNRotUGy14gojdsKPrY6dB5kYuBn9ZWnsf9BewbSyEFG",
  "key14": "3kn2iDzjoe8Qn43WqRifnvrBm6FhQcAtJZ79urQPzjtWd7V7Pv71YLsNwWeqpCUYxpjAKYp25p9raxhmxkEbivwC",
  "key15": "ECxEKKfteSVkbonmW3H7F9Ev5qvYd2LGvmmBwUfLERrAKsowRBb2tfnf2zBs4cRrQrgwTfSxdv54JreAjunJk3o",
  "key16": "3JZApEY8jfVXyTYvX5ELSUoa2akczZxgiMeycJkwLF4kfcycWAMmND1LhWkicvfHLyQzqwprM9yhegn6oTLJJ3kN",
  "key17": "3uV3k4ZgS6VpQhtRUb64uPWzQhXs5s5MjmQa8FBRAqcoZRinR3FzYUoMGoDX28XSnJhT4psawHmo6aX8NVufETNq",
  "key18": "4fsb1zb1fhaYTv9UW3DafM4V8LRwaKPhQftEGFHJ5rZ1M4RhrLz7p4o3GDVzvpSpaTeqqkTSnvbLThhT2Ba5KNB8",
  "key19": "2L9uFeDG9C8QFaaGnPGcmDSF24Fh4S2VQXgCBR6GkRi87WRoMtUiAXGevHKLdwc2qTqCUkDjwdbz3azfNLV9QdAG",
  "key20": "64dRiEmtRCTHaJUX97shvb1FojAu8ZabsdganMUuGLMK2UAu4ydhaNvLVsakn3FkCGnxBr3diCYa6nBDT1tTapEU",
  "key21": "2hh98cRm22Ns4ppmKbAwAjmbqyB2p3YbWhps3MAv94zTszMQCdob2ZUmit8MrQHGPvGyxjRcpotXQCaFmphYUvuq",
  "key22": "5U2EQRSsmhDWnuow1irtvYcHNuHgndUrWwakh6qJv7uYSYNg51151B9pfRqgePW7JuXy36g4x4nGCsDUGFiCBr3",
  "key23": "ewDzwpsFjtSVYECSby4tCJFWNmTZHR2pLrtxEbPUoSjWZrg1WgSD1za5JhhXA24JCMpZiTurHMgw44RkeP5xB6i",
  "key24": "2j61pwf2cBnzCmvMAwh4RsFGt3eMKCSmQN482w1iYpN5eKtk6fTDuurw45frs35DwMtnM5ZWa4HjUD6CQcSQ8VGN",
  "key25": "3sqxTxtriFyvA3f5vvxZ24QxFcETKFkoF5fgnBSJZ8HeuaaKBsS3dUJuCayX4P8J1Qy6wAy2KGDFooPXpxAHrud7",
  "key26": "5wHghSq6CH9BfV168BzpmGtNChou5dnWKqn3bMXXraDe8JYssW2PHyL5t8TLfkxP1vrzQkfpFFBrGn3rxqbk6cj1",
  "key27": "21SW6mVpBsfsSWcDKczFLr3xozRmmebdpFb9ASNqsXiaRN8PS1jqXWtZ2z5c92P1rFRxL1QcEPqCFU5hSHPC79TY",
  "key28": "67hWjm6pW8yNjEqceTA3Cf3zr4ayzMFNe8xGhJHFe19UstD7aYYETdFFmsHgzDvCw5e528YNAVqMZfqHabssFiyi",
  "key29": "KPKfwSZoyS2eSR7RXtjqHLQ3jydfrcMVTnaPL2QGxDYoQvGQDffnjz5tSvMriXsqh9GBH1tBZbMz8BhfqjvMkXX",
  "key30": "5V2qw7ubkozW6Q35SKY5Mfh7uQiXNwtnkecAWqwYikThKdBKpCZksZW1ZuYFmLmHreFShf9CbMYcTZTvH3EysacK",
  "key31": "5mCKa9Qq5iYNBgsDJNmD8MkfG5zRNbUEhZ7pQCT5YaLjShSiA3qvrr7E87kTraqVHDP5v9vuo6Bdd2XV429Ue1iZ",
  "key32": "3iw2or8VW1VgGEZBZAjNABFZviWm7DpiWGz1FM7Vcj34d2AfmyLGw4D9gcQyvgcawa9EUvTPncJZXQyySvC7MVGn",
  "key33": "xvpqBeEGbGMGATvna2FFFNhCyvVDRL5cxQwJBGRcgd3q65bk9H2FWjjV5PEnZpyg6zDqybwZnvdwU95bSgaWcXF",
  "key34": "5XvPsGR7aWivD6W4Z681cGq1NfFuXEqpN92DZ6YWAwdKCLu6TVe7AmYPb38Gumdm9KPmnXroiHBkVz3BFmczuQLN",
  "key35": "2YqgNVF8dp9cugD1Sea7itvMcnE4qCKJB7tBPoEs1URNRe8mEMMDv9AzFCVqE8Sz7CsFaBLSMnvjbyTFZrU1Ngwq",
  "key36": "vnYcWDkZTxD78unCxMhdZMPVBud3v5uLGsPMSV9yUrpDp4xbCvvYVwtwAypwMekN1zDKprvNrNts2Q3n7QrXNqJ",
  "key37": "yZs5ZDGbpxu2fqVmdovUDsjKFWXHqcGbBjHy4dB78MTHGB9muKkgdy2ANfDYowhrTdHULHeWcEV3bRnXGgM63E7",
  "key38": "4wBnBqdZ7fYZms45vgECkzZAwni4XfiUSVh3QYdzctt7kYkEfMsVdWUq81ZG15MyTAFi2dVPcWGPj4CKA9pn2Z2A",
  "key39": "4UqEQkhTL78AbXKg66CkDZXkfL9BmqXw2w34CTMCnbdKqcXauqFUZh2sRED2HNLXzPCLrkUhDuV9j8oUcpUkezgZ",
  "key40": "2NZTkMVzXAQJBMtdy4TaZCEfeWcwqemJ5fYPGpHvK7b3KKKgFHV5gsX2VkR3f2gbv93tBsEDiZcsUMWbk8YNnpyG",
  "key41": "M8oAanZYs4wkrQPp2fvJ9xADkHSEXPTwGFNyvygpzthCA5v4eVKhWaX3kVjmXmVJN9dbkM9u6w4nkY2HexhkVd3",
  "key42": "5D7j3DQEEJb98dZtFppb9FmRQtovPQZU7KqQiTgRYmRWHmqpYSkQnVW5zvJjgHsz6FnjtBFeDfbtJQsPX3ryo9g4",
  "key43": "66ZdirXALMKscpbeLSjXCkkm9GAAiYrXbNv9J13ATMp5LQUPVKuoq6tUtHUAMisNqzsNQwc5M1uVikkcaraL5jnE",
  "key44": "G1tcJfQ36UgR13GqhMG4zqGY6iWPXr3BzYX4hQxL6ahkEAH9NR3GGNNnctPRwPz9K5E6F8QAC9kT8gCZ5oknaWJ",
  "key45": "2VgpPJdTCiH7XooyUyvJ7BZUu9wTPBtTzJN1WB8Ki85p3pouMEvxF6nmCUMr4uTAgdhGiT2G4MkiXHDvB6ce5eYs",
  "key46": "S8NFEi3pd8X1CG2JmAaUQ7YUjrZT4vt3C83u8fsFzfN3KHZD1mheddo7BKbKAwco2P7RNZ6jvAGF6azMkcwtWce",
  "key47": "3DsmGiS2X8o8QYnGqdddjm4WoHzt5cpw7y98C3iuanwa5M7DwwnUtxX1EfUaoi3jvTF7ho4YLCUupbQZt3Hndst7"
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
