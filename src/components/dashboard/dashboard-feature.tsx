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
    "4T6a8yDz4UhCtQLqtXD6tfu8Bhfe1BynSHEhmhiGo7rKQVCewZ6zSLw5i2WUSri37dyczQEGpkpEau6pHAbZxLaT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TW1CA9o3EdZr9tJoC4LGGfn3CW7tTfyxniTgGrrGhKZtUBHhoNEEK8SDbSFHzkkE2RgKo6od1pkTAtpfrLdfnYY",
  "key1": "61NfYbd4etFuG8kfwYrxvh5SptHGsxaotA2bMcgVZH3jXAAMxbeiQT3wzrAueoh1qVwQFh13cfkoFfcSB5y829Pz",
  "key2": "5yvtKog7eKETjdPC3TGv586VK3ssW6K34j2vgNji2XjPHA2wQWSNMMtjTEDpHGUjr1yJgw57Yk7HyZFb9e8cMJ1E",
  "key3": "rgAZCeWCJuciqp78dG3Yv6J6pszpeb9mrHjBrVDup4SJ5u3VdcHD4aZFbUUcdTmQHcvWr77jufCQK23EWTHDvAS",
  "key4": "67BXakLefxQBfFd2iwwqNwHcgACnPm4aMvBoWjnFWqJtWaEkz49yHJWfhmHYB6DkhKuimD4W9i2NMvFN1CzCKkuV",
  "key5": "3yQ23tkg8dTAYBGYDGTg9f9q1zdUfv4mQQX5f9f1PkmccvZPNSNTAtRm7q7HVSogxd5FbcVq6kQ8tVXsxeSV71Ev",
  "key6": "2smppaR7XZADyRWfGTkcejkD48k8PvbnQ9k1vdyrSvSsYTUnrHhzWEfmcDHmtLzNxTDMMpEPrMFFTNtmLVrTa269",
  "key7": "41mu5hrnrVUvqRSrkW3n8qzJKJnvKR8ohEHiMASHAsTH18hL3oZG4rgvHj6k83PhSvh1BASirK3PjyrLvwvwSBsJ",
  "key8": "2L6BLNEz33STxDBx3iCV3ZwefJJHsbzfrbTp6iuwKn9SxAWcFL7Qf3N1zsaXcAm3KrjvNvqc8uMJQ3br1MyAQ74w",
  "key9": "SYvzGxc9eQkenQPgyo8nRczzesBswAAhahyd2gTqBGkYWvh1eKFc9eYDRazGsHjMp4r1GVVJtZQJBtDQeKyKESr",
  "key10": "4oJ8hVkSjz2noNXuyivUGSnijGYR333REUMXZjeop6GLpzWT7EsUncSgoBmzVWpX5zK3gtsjN6Qhmwd2JFFJXoh",
  "key11": "JZRVb1AcsDJQBCWWRoVRtG29bZymtc1REyz1VktN6SNp4HBuYVKxJbvWcJpmKnJsEhEzAfLAUUNC1fVnecp2VhA",
  "key12": "5Z13twJf6MSMKpaVjAp9d1FuSNs7LSzaEXmBbPdDfQcrA9Zy7GeJ9sHGjkJY4jV9YnDpDc37mr3XdLsBc2hEr8V8",
  "key13": "3We5GonKDzXdTCFkGD8rVu5NSs1t7AMCtLxH6k4mFK5iixXFip6hRQRkV6Q4miNfSDe7LRQVLYttoSLTkLjhRafG",
  "key14": "3pNPvxiHyjHsiQgzzjiGaRwATvbSMgdKUG7WXgX1C2MP8DcLXbSNQRR2wKD8NGpATgj65EQcRbJHBAZW6F8FTok7",
  "key15": "5Z1k2nvKaHPjsHdJFe9WXmwtJsqyv67tXmrika54mXhYz3KHFa94Cwp9jLd9yCgUFbcDcrtKePKt21H9BvLk38uA",
  "key16": "3vXbLR3cgqJSErv1twm1vaE64Etp1eDKwNjWq9yVjMiCjLgjudKefar3aMHZYkGioES2cmsRji2cQbNGYtgDjscN",
  "key17": "YVcdFt5g5tpcukxXvfLF9FiqHgfChs7u7Hbd1JwGKi8VpE7FLrekqcoG9Fo1FuuhDHS779pMSDJZhna1zkqr59T",
  "key18": "5P2LyzMHkXNE7gr11KVCiCwm62CYzissukk4Vt75GqECrvZkRiy4VZvGRPcnmvmV7MDJStJyqArtiaHb8g1omS79",
  "key19": "5oWQDSRF94v4nSmEJxGhbKiVwXtckHZR3nMd7LjswfiuhwH4s28kB1M2BerJda6ee8Z4fXbANJ68H2m6UTZwUui8",
  "key20": "5kFSLLqEBU3kR6gMDXkc6o7qq3EAqgEAzhQTmigFZRvkkPAZrq4Exy29wLiCdggtWAvtuqBTDFmyVCbgSjJfNAQm",
  "key21": "nvwD68vjUoPCv8PiRwRCCf7hsB5ncwznwxkaVxBjVNcDbpBLf3iaTNYngGNKJS9mBXQxPTuR5w6vcvnu99oSL7B",
  "key22": "4H7wK2qBL2Jkb6LTB7edZjTsdyKcGqpYrqv3nG3QHCr5V6F8Yoa3vXTF8hfwaWtPoJN56WcVJGqXNowNmChB2wnN",
  "key23": "3RgNmDp39wgghuwYzFenbLMmNTxEevSoh8eZLsuHnPfcmc4uAqrhTwYdBq89RRJFngYdXMdo9Ztv1SXLPzg7MsCH",
  "key24": "ZutFUsa3k2GoNxy1HSECYMe7aqRzxEHscP7gze9WUJzQ4ueNXVyzhmncXv1gmzZsKyTkvivQuDKbVFWGiPLqJ5u",
  "key25": "2xccYhsK2FHffqYBK4rHV3BPRCYUbBwocU1gxN5vzFm7Ka7CQY456dRSBjhq3Pp87hXJhC3WatJK5TbacGp4iE1a",
  "key26": "3WpH4MdSzk9LFLhHCLt2pr5m64DhmCiNPTWYXXmiANggkT3xiRXRoLRa1Rtm7H6bKikPaLNnCPoV68MxRVQQzaA7",
  "key27": "4p9QsJMedYvqqvcjsVVdEDZDDmys7Y5StDvC3Hhy9jtZ7uwggeiasWNZ94vPK9GiyCgf3aiNsq983dbCjHf3jrnJ",
  "key28": "37P5dvbF9XKytPNP1g8NWvqasdkFHhBuFJ9i2BR4psek3MeS4g7dq7Cwu4XNTNGgmDz2f5AYzyiSFtq6t4pGgEZy",
  "key29": "5RzrG6FWwxDwnn2n4tfKkREeEV37UkZX291JgaPi3QJSXA7sebdexsi1tUKEooEeVvNgVXZueGSNkgHEPapMpC3y",
  "key30": "61bzPAH8gkZHCtcWKiPNvV9PqV8DeKvXF5vZzwqJ2DTRxixBjm9KPjas216osQLoR2uUGsBkEtiMrc2p4BD9vGoj",
  "key31": "uWKNAm4SWA1wJsxRgRm3zGNUeRhJuJBhRhonakustCrY5zd8PQwM9UcPqJCB3W48ptwPLNfaVe89GqvkP9Lb7Rx",
  "key32": "5yWfnegjqrc4UMPLsjUvY2Z6xRhyvXY8Rrswd2JCAc7pUAbAZzqZ9bCix1WSQQ8KpaHQ7ukLBf8q95L4mAL9yJqn",
  "key33": "1AbfDd4Q4DVbTCjqBgtsxjfHBsAQ4H5xWMu2jdWV44avbXQYQk5U9zT1M34wtWj4Rjg6zAuvQveDtahGxw55Af9",
  "key34": "5zeA3VdnTmvrtHfTcZ5zAQjsycxSBmVZ3eLr4MRvSCLPGfRRxhnPr9sKArY3nTCraPZHCBHre6dJ6pJ8sLHGu9qb",
  "key35": "5wQZZxmUFVVsm7J7XYPRiRLNFb4XwKAshm5XgBJyrqXwYfKoTbpBc3BwCr21X3JE3n8KimazLjuY1Upx73N9jg3d",
  "key36": "3nLgJamByC319c8DwzeSwTQgUgxoJitjgjfvKSGsPUzERWgzB3xEACiB3GomyJmu4uxZdJkU9VrJwxsvYH7dN9vz",
  "key37": "3cZFg1Y5GqWCDaCiaxjgD5csEy8GUkVUwjvDpWaiVgUSU6kj7HXpGk2n1GiXN9RudxERGZcBhUQ4waPb9tf4iEei",
  "key38": "3BGRo8mDZYt7HpxM7CCS2gC2ep3vDeBrhjhjTuMWqSnfiFJUobEgx1pMGRkYrvzbzLXaH8vkWBUgX7d5YeuvG3qX",
  "key39": "2WzfWq1qkcQkkdrbfXQ1dTd8DMWsB2dK4MCbp3azn8k9FpoGehgfExXiMixiy7K7TGeySmjmLQeGxBnviQNReTsY",
  "key40": "W7gbpDA6xhB691UFYc5qJ6qXEgw4q9FGR8WpRZLYKL5wX1VZ9fWP7bZkxwjcZpomLqGpsJcqmz354d56jxjxgW3",
  "key41": "oZQzGKyY2HgymCgcnMFAkX8ajjVL8yHAvg3RYi8KRFpsDPqtYf7AxQ6BzrBifYod1Lg4X1kSgM8GKZkUSegvLcU",
  "key42": "qp2PG4j3URTPkuRaPqeZYqeu5tuB42BMEwLVwi9HegFHxPRNdai3jmu8VAARZ21eU82ToVVMak1S4qSm7RFV6jQ",
  "key43": "42UBGjW5ZcgdwfZTAwMszbDauKYokCARkaRfYjrp7YWfimmgcVymx4CyEiVx9sAuTytMKjkwv83RtrcQsJX97Ryq",
  "key44": "4NBFjVQvaXhkqg52Kj2YpfPKKhc2Qrauu7rLu9DW77ejkugvYm1D8qGUirxJdjeSku2yJf63u2iFwkSjMdNP16eS",
  "key45": "2i75T9jiyyA2RePjpKrmLrCsyJVBF9WN22ESKAys2yzVeKoDRj3D179yhuoNT1PCG2wPp9NPugJxwswez1hafKh8",
  "key46": "fcRRaVW3EwQEB31mtyxC9o4MU4XmxPKrrPrXFueq4eS66qesiDB4G3VvuvJbAWVq53yStCTzGJd7MZ1G68LWoZQ",
  "key47": "2Cd1cuUWq82yAFDWMukW1dFEF3eq3sqmoiuogYDwyjBE627iexLqqf2A8Hq6T1SDD6PVzEFR5fCT5LJhiTf5BYAk",
  "key48": "2UwarB9Ch1TK9AH2GhYTWWtiyGcSyVhk2kcR8W9Lk3QKCTYHYzZCQrf8DSZSvXm5g6RktTkNLravnfdziU1mQWNp",
  "key49": "5PbEAZRML4qwCeSVkT3HNxUnCDHRMXTPx5KqCJMnLkzaYxXx83gLC5Wxbzmxp8cjDEYhssmeHcuEWxjMjZjnyFUv"
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
