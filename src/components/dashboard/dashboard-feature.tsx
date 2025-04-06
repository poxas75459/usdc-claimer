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
    "SJU4mdcUbf95NQjQwUdYTCr3ZqvthYVx2AzoQajoqafNMjnKWN1AbKVYuQhBdGj1sEduJ6RFTT3FeLo6qFdkES2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NWX5F7YStBDvuETXEfCczo2GQY7NK6TkvXABNjR1zZSuC3Bv5K1zWPKU1RMNyt1TQ278crUT5n18syc2GoRauBo",
  "key1": "dkmb4QBy451zaNmC3e6Z1HoftVbHVHbCKQMfEhc3FXHefUHfw13QxVMPsVzhJoSoSNyP6s4a1GLJjdGoyG7BgCt",
  "key2": "ADjvdMozaDUPStiUsgfnTEy3DqSL7V56NWdAggEmNX76La31v9j2fxjkDbLHo6HNGgzmfnvvVxEkmozgf9i46dK",
  "key3": "3riAyVsNg5kaSLuVhyYuecJyyz2pKy8agWVuPdA1PU91VnEhZ1dCdjj2YGpCpYERsWqP8h6xvJnYCW8mcZ2sWSVM",
  "key4": "5aAAZuQCtjgcmA5ouZuBSsdueRnyorGJgDirbcYi5xE1Dc2jhjJGpdNTFbUyBkouJay19xqyXZjwhPxewgRqSxDx",
  "key5": "4pvdj6Ae6kRecwhe1nJ6JADdi11NSj2VXJU6jF9E1mCfUWLjBSFU89aQDWR4cPY2feLRuH5rQiQBvt6nxAaUWRTa",
  "key6": "4KQw71xWqLESSkBXYGYgV2UXZofXZCvYwtq82NMg7Z6EThGViSep8P1E7mCLEn8LyJ9wYWbuMnBphn72okAnVAeS",
  "key7": "2KQZuSVG2Crn3mnB2gNAKU2Qbz2mLtvQFbA7sFKZpfmQH2nAc2tBLTjJkkyJ6W4aY3m4GateHZgDKo9GXRs1BmUL",
  "key8": "4y4AtoqAE5uYUiRG4av6HSseZpusqANycryHgPdvH4YAh2ybzNDNqLj62zSatQiKMp7bV1DxmS9nJLq7mFd4vUHY",
  "key9": "3CaTXyYBJhy3XwGo7D5VhLyXY4VbGr2Hsn1fQFXgrPetwbRM6Rfp6EMtZR34RjgHSXVRbLZJp8khoSdga4XxtZiU",
  "key10": "yWGH5LcDx8fWsaXXfBN1WNVr4wTXkdcYrV4JoUZ6psxchyHnrXFigfB9vXQ3qqg8aRzmTUTx8goh2MdnwXhpKEd",
  "key11": "3drFxtM21iDgeGRJP5XrmKYR6iZ1uK4w5s8VXYtgFyzLHx8V7pPUDpYvDv65seJe2HQkvRtScc3U9BcU9twyGv8x",
  "key12": "4FmXa557x7HhGU3DYUG3s9hZXo2eMw1Vc8ims14mWWgQGo7RfsJUcAYL9Q2S142J2F3KCRrAtU8bcD4c6jX3A8wF",
  "key13": "5oRUtcdvKiGaq4xHtPeLWkJMJztxu9Kqo2hN2kxoSbd5eWzc6FeSFXMKwHau9eMZ1iAm4GAqmAamKVskY64uSoKp",
  "key14": "2Y1Z4dJCAUKLVgqus1hWsvFmCoeFW4pBQDz56GU9N9ZTkxeDUoDdVoaN1dY2CJLjdrodG82faJBhcULcdJ1Vmyag",
  "key15": "4FVhjbWpE9wAWUWJt2PZ7H4Lvg5xaJfgNoRz8QbGkgL9WmKMnwt5GyfJnnzrC1q4eS82duRPyUMQQMjfcMzjrH8s",
  "key16": "4MtVaeAtGPj1HgX8rWmpEVGGc98JwKofXvQ7Auj3q8jbubcK3MHChGLASzUDgGJExpmzmR2cvVCyqGoZ9gNH9udq",
  "key17": "3TB43BmQxTkXWAWEHmBQxZksnruwZmr9hCZ535NtBPeN9xRJVVw7pUZRDrkje7AjnDpwWUFRqp2QaVetHfpTyhJe",
  "key18": "m2iDuUyQfuhWFngcb82zjyGdG8ctvvKoEBUoDbtae9LYhPTcxZwHvNtFNxFw2shhYnd1CX9xg4rkvAY5ixEVd23",
  "key19": "3npNwDFgubC39Q79wZJNT9CMXoszzHzuQvLauUpVyTT8rpQkY52zSXm1gqp7TRMtLc7w1ef9DWhm1spdWKCvRjeT",
  "key20": "5zZhrP12DB3xGK5CrYLVat2h2SAfJAHntrrjER5N26sJVXJXGfGmKWL2YYmBJXbCLJbWHs6SwQw7czyZK8fydQg5",
  "key21": "5BXhaxNxvqdYmCTuCYYbsYyKp3cnXKoXBHY5YDYijNPcrxWURswTrr9HUUa96kaLmJc3YagFWzx1wd31Lfs6UaD",
  "key22": "2RBer4SLFjxyS35P8wqxa2RuN1VLA3GqeWtVaDnDKNWQ8Y2yn5m2ugLR7aEDvxvZi9Lu5GpGtmkQHAmrAYE7PVM",
  "key23": "5yBVDvEZM1xPSTRV8DW9sXU45R9FHowXJP3ANDxyVHLCPBTe3XavYKd1U7hJDqG2TGQrgfjm4xv7EVa8BahNkLsQ",
  "key24": "2f8Hb3mB3pQiQoJ2xaHWoWXLsbknqvR2qoyf4qFQoBCek7KW4ELGi5wi98zMoSiLAaPeZqnWFS532xiAZYfMCkvD",
  "key25": "2RYvgkrFsDx5H5kW1E37RHgQg7EV3X7CjKpb2ayNDVrXY2yGv8enK3X7xcQryYhXjj1WVU1y3BLviZeGGxfgAZj6",
  "key26": "LPxaa78zJSQ1xdJeTEAwZHizpJP3UTCyTpNx1QcBkVHbmLFS7K3kbSSYWdYSzRpvmmmjkevuatwu3YZLWveWatA",
  "key27": "2xv8v4vqXPHVSRo9CompZhsL1Fxxkcbt9nidttWxpSpmmWhp4xPCZqJxzQWurJKGb5NaF7ebFdeSH1K2AVUss6TJ",
  "key28": "4N19v2E6mjXi57MbLWC6tHCfzMSai1UVD64BRyeaHxs2Mk38o2mvHgjJi2sJvpi1fKC6xfe2Z99GptYBVHSaUPym",
  "key29": "3inBRtrVNTUNHmB3rfzRCaZR9YzYyt5xiSxe8widBprfF7attfjB7gPcjC1ckuJkBr7wBcKYFiT8zmFfvF2fRyTR",
  "key30": "83d98rk5WatoHz4v7BgpxVWKe4hRGk8Xf88LtxMHpVRgNrrHPzCd8f7y8xVxuyvbRDSG5HZRZGmEoKHsKNCV7gb",
  "key31": "2VH3FYge6tKkoaGdWYBkjHXB197LCVcWtLEV5fZgQSNwLcodsVD4VeRJQUo24GxebYkCwAJdA7GDbviMpJ2y8RrU",
  "key32": "5PBg91BSYgu26bXFNUacmyfhBe1DnxoZHifYkWi9jeWtHxSaYtjMMhQWiyrtPYUYpmkQJMQRKavJMZ3JXSst8e3w",
  "key33": "4HJ5HXZLBhKba4xXngxvRmN2SxwRNWe1P1KJ3zUxofH7W95Zn4i15TDBeSnX7K3vPjDzY7SpwSd1sr6WyjX6mXi1",
  "key34": "4tMHpkE3HCqLjyoY8whps9WmgcoM9m6qjJYYZLZrWKbceERtfvU86dyQL3nHEKxYbSAnN82oqvPwe5smBD7QRQSM",
  "key35": "3mMBWoXA7X6FdKXhaLZFPjq8QtWsS1q8dwQm19i6ptEMGqzqE3ae2heVNfhryRDYKcEL9DeuaDzKeTMe3XQMcXgG",
  "key36": "G3NfkteRYChcqnyJsCYMmm2mW3JXksk1AHExtwCgczcgzJMmTXFJRdegPjH1MCaUikU1fh4qDc2MxHm1NTUJK7a",
  "key37": "37o3MKKcJRH1MGiUNZtvykAnLNJVQCVg1K2SxQQNZcipfyYoUggYL39owaUexG5B1DEowvjii83BsydUsuD9Rb7w",
  "key38": "3ugCKGbBNks7BEkbKT82PC7GMJRsHqhduDy3sGHoqPqKsapfGWn3z1Gb1G4hYnZRyCB7GVajB3Q5edMSJsFkfz4h",
  "key39": "CSFK4twvCKCWFdJaShf1XncPKvjz9qWTgsBQof72YhAckft3zD1NdffKSzaf2WKAxFcnuqfNuZiAaA2i7DXTsJ4",
  "key40": "4brgcNAF3LxS4LHfW8Z8ZDhqL3Q54Gima3XD7LXoByLKn3HbFNvJPjTJwtcBrQ64dutWxWiQpEJfcrg9AFC8LDyX",
  "key41": "5wVVrQL2ReRZLFZ2o7y12ruJrb1zxKR1bXsqx3Ncby4Nxucj8Pi2VymrG95uQna7fg2sxWN3WSp6oPh3hSp6d2FN"
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
