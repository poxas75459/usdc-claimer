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
    "2e7ktc2gdknE8as8jakyCkrj8g13u1UMae5wboGBkbyvyYwBw1UnznhUuFTMNnxCANP648jcxNJX5VZJSCiceBqD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LDJz6wXZyQPQskio9xoxj7atdwZAZM9KkYd5sJLdEqHddxjYbJrTrAGuRGqTHhimTWGjNpzfRpsy31phaKS78ug",
  "key1": "468ErWH4YMjsCyNeT7VhfninRj4z1PbJMcm3bs85SZozdFpKrLG1bkDJFQq7YrVxX2FafzFnnbECH3ZQ73JufuHK",
  "key2": "484pnJVjifh7VunfJM2WAnj7jmVqWeETyEbDokp384r5vpbK3mHu1Mpe16kdVcE9WC16rFS53GrRkY5sP9zW5UyN",
  "key3": "5Ke8PVUSKLoT4uB6rKhwXQ9pFqZfYa3pYqAytBv8iMYWbSKs52D9oGqgtvDtUF7SXBKmH94syipEStPeYCESUfgQ",
  "key4": "djCSm6nUAaUXMBGWtNDwFvXK5ZJEuzicX3ZijsoDTtK7VrFMKy91pikRsoZvTj17dvtEBqsixSjkcBZZjLBjQUB",
  "key5": "3VrNndi7Zh2Zry4HdQhbHj6GSTRjBmyJck89cucKNCzg2P51DCkuoTew1cafSgjeizknqiY29ttRio9pDHrnts5m",
  "key6": "5JF6fdUotnjzVsiyfRH9bjPWJgfKG89Av35ziBs2xjoVL1n28Wo8SehxkMeDFNpnHLkKJSr5nU2NyDMPuTTR4F4G",
  "key7": "PhFTM3dqsf2YVdkUFwJCmx1u4D5B7VHpU2efpwnkaUtEPfhGAACXy325gyniNFijjG1EbevkHrTuaYy9LYFWEM8",
  "key8": "3k2Bdfopcaxus28m5JsYnKEQwaxcRSFCwCWAKHjYCzn4MR3MP9Mp3zkqxo3cEQJRanes8MYy6touVXjh6ig4xUCA",
  "key9": "3x4G7XcxCWm63dUZaNrdMHDvhp1bQ93wbbN7wG71hesqnsr6JsLxQgPHsCHq1tQ6dyhH7hvHrM8g7ifjM86qxfZM",
  "key10": "2YzZyeBKHbzP2nbHAsuZhraV53oUG9VZbRPp5r6YTtq92ZMEX1QvQdXsnkYmTgMQLbZDKkcJDYTHxRMFBWMF7VFM",
  "key11": "2eW6TGBe1RgBvYbRsGuc8y8q9CY8MG6Zycti6GAN86FvqmK5KELrfyz93MWLZss1K3LYNo6HLKgKdkj13tcWV8ED",
  "key12": "633q2Fxfpq8Y9XrgrTrPj9wF42Nxz1RpoDqMu44Gcee13tdX1vMsE5biVgqGJD6GhS9RuksEmS9YMCWQZ2d4Wivj",
  "key13": "3domMELBjFmE3pWoxiWSZiLAz2M7LEgx3oDrUFYfac8RszA92Ed218BWd4xEAQgjGpvk46sdqimTaSzrzXaLZKJS",
  "key14": "UBAmppLyBPvW3Nt1uYHVXkFWSgX8xgotvvfzzvXg8o6kFLxyU5WrMaGoL14gVZ9D1zQ2LYPnRc4suxmzV6CVK68",
  "key15": "3B8qfYgxzoiWwsGqzNukCe6fawkrZKFLjThUchYFmwJHgdz6xyCpZcaknerRX1EKtP83HcvUVNhtvFVRj4vLHTgG",
  "key16": "3yL44e9EYk6SwkxzuzQ4kJvpLD1Btx1qGmdxM6dHL4bhrGWTgzscLD5n7TntuhYUjWdgHTuqwm9BxnZN9hHMSjgE",
  "key17": "4eFXd9Umu1BSLpDpds8aerU4M7yfo42t7EjJsBtMmJRC7pdquL6ZuW3sW6GNnxJjnhJFNUvewaPBDC6FVDoiPzgo",
  "key18": "2A8bWYtUaCFEkChx47cGjevaaFESVsytBEnGcJFTzcTbstUsezqf9USyLKwoCZnPZAdsLSix3DnSmwKDk3A3GG2S",
  "key19": "2kGmHKq8BjhtsBiL1m9epUF7ZzEqcNWuZfHMSyEHbQcFW8hubaDQoxyJG87Sb3xq3vAhqUZB9j5jbdvbTmV2W41D",
  "key20": "2nyXdNB2kBcFWGjg6zHkzi847KoQg2fkn8anQYy9PkwWmmgfBQhHnfmJ5nWgdvFM7riUcHofyQ9AWaMP5xYm4BxL",
  "key21": "3eD4PfLGnxDDmjc3cfK5yGpSeyAvAKYes9gmxkvChmZL5UTvxXdGYnFVQUUozok1wPXRtZVyHjT5uAoUBWGdLew9",
  "key22": "3FHU3DY3HCwfCZjfsQJYCoT3bdMveSTZzXMUZhkdtQGb6YEFzVnwLzGHk5ofDL9Pkzryg61xCqfwLBHpGC8raSV",
  "key23": "4z1sBhrn1gNHvZfBLQVudVaCTuMGT2B3jkrnevNHBFcdfYYzuWq57vwdyCVqbXJXumo3GmunjAyKwSSPhzsosBo2",
  "key24": "FNrwL8ueR7wdxGeJ5fKWQhG9PufdkeuMRugwCGadwNh8hJrvkXVinTJtpoDNy3ovwT7S4Nocc4eTSF3mBAqwTBm",
  "key25": "59nSa3rvo1dnnkjppRd79X2PC319Pf4DmsYnWqeJWp88hKrLsaqiq6TWvChA3VGUmhTNDbz7VhxfmYgncNco7QQE",
  "key26": "63JHvNJGNxmq2Ey4zhrKkWfFR69SrmiSQzS9wLyp1VgCQbEivrxu2KEdAMVwgF1AG5q1Zqvobvj3w8R57eat6MXw",
  "key27": "4e9Pju7ziuRup6AyNDQxQauAPeyh1zWmoEmZvo8cSTcUDUXQH3S6CDMQmJQAuLYEBis12CUDDTN8dCqaX5wBPs9F",
  "key28": "3SEAxgoUWMgiZXP9XZS3SQLFVR7BhpCfp1B5h9QXXr98QSHmKxLee1gJu4yrF8dqyvcUAaxvYHXpSFecbLrtayoC",
  "key29": "4aTcJFMC2jdm41Kquq7KNJkLLxrGsjnkECAHTvvTrQcPJVzWEHBiaW7t8Cct9SscBXpvjHtF6LiCHSMoTLFkzQJY",
  "key30": "4dnRecfN5wpr3xg5yRqHJCkvdAiSQgU4NLkTncQY4D3DmeQFkMWwCqG1XtG6GfSZmDBXdKzLX5Z8RYBfusqWdrw2",
  "key31": "yg9zK96ygAEH8iga1ymiMZTww3gs6RpycfChB4Y5vCeAFRZ1ogsa4uq3nvUKB4iVns7wwdZj1qZmWK5V6emurNM",
  "key32": "5tpwu52FS8kKRNwgRBnC3Un68JomZV7v7oyYgPcYcCGkLCQ6kqssn8YrX5XXeoyaqHdCYuhasdedY9uFDsBCZTX5",
  "key33": "2ZC5q9ppSXERS2P8diVGPPw4dJQjrRQ3Ye4mDgKkRDLE42Trx9vCyAn5zMSMRWBdkzDBg6PktskRtTfnte4NS7d4",
  "key34": "atZE4a7bu5qqfmYqsQrHB1WNdpPDdnDy7hb3eGqWaet2jA2p4EGJNcoTvy7FyMsTEXk8DDy8j2MyAyiNn7jczpx",
  "key35": "52dGkCFtVBASALoSGonWhNfR3FqL7NMpvEBctvGwEWFKVBs2aS37zDun45gT9SBrqhdve6cMZtGfvp8seqbxWvoQ",
  "key36": "5hUgVZVE3FbKh3xx3ZXvfPefUeFKs95SHWzCSiKissghS7THYoUF6YZHPTmzpedUyGvKtBGjStr9c91maHHCXiGo",
  "key37": "fzWDAJobvHjKECGWGssETaTKNT6LrWuzZMhF6516zCCRyBARynfrmuBMVV432sUzmws3sgdP44WQNAC4odwR9Sh",
  "key38": "3BTZMc4S6eurd2HiBr68BeKUx6q88q2c5wsJEj7MSTaQUhm6NkkipiMoynX1rs13j6LvNE5foUGSeoq7sww555Ki",
  "key39": "5Wwexq9USYwaDU3LQQviK3L9BBUQPQxkKdhaBoJWftW8UpobnJFBZGuviCPzZZszV7qDRbivd7U4mLzjSdUQQHmH",
  "key40": "4LnZfDPpfBgeXJGTs57cBBSRNd9MG3w6ceVGK3wxsEPEUXZkQKRLhWZvS84GGugJ3X9X8W4MD7TCJoV76uC3aJ1j",
  "key41": "31mZWo83opa2WySykcpzPdZcvffz5fwERg1VGym4xkypsbxDPqGBrGsNZDUfRW3Hn43ib9E1L1AnECJm2HbkXbSy",
  "key42": "5wnKedCutauAaRJpd2SPSDKgtTUUL5iaDPaCvke6FV4KDwq7rTundWNj1PrjSrEFsa4dQVeS7U7cj3rD6W3EMVqV",
  "key43": "rRUr5VZCXiov8ajbd4bRWry8tYBWC2mS6LY45MwWhTJyADcuGZzpJuN3fTd2gzSKiKu9dmFw3gYpfZx9wpuZaUj",
  "key44": "2NYbUdsTFYXctKBWoUyBEJU4YiRmVHBpNQdHRUADGriygEbzUiT3oEEEzuQ7qRdd6TwTGRj8PiWqWBxYY18HPXxC"
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
