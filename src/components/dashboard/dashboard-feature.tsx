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
    "3oRzmHRX5mKVMJ31nTdm7WwnyfuH5YA2kX7geaiTXMZYC5wPF5pRkQHTqNdh9TKmCQd7ALSGk9cNf8mfgXVdHFH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rzsJYHTgWQMtEHYc9pdQXZAMSrhgzjLHRK9d3cMfghQqueeCqiS6v2Hkjn8MTs2KDtr5Kmj52rmR7XSbWx1edyD",
  "key1": "5fMVdzmqJyw432g95PzKwBeCLz3sQi9mUsV5UDn2j7drjZE6Sp2pyJ824jH9EAB4YXAEaNuJ7cq4KAcx2uUi4xSg",
  "key2": "5YhWarNwcusFvhtFRgHsWkGsUzXAJaqFxyme15VxfcWdX5yYG6eUgjt1tqJn9w5Pu8ygqbiTyY3jMbT8J4JAKAzG",
  "key3": "42Bn89xqFHMEWJivS2ugMw6Tj5THAjUrkcPYi7j3gd2H3gJzufRLAiuZrRSSC2NaPCRcxQPcvjcuYHdUZbKJVYoU",
  "key4": "jTjC9b57vjCH1ztf2n51kMmyANzP2LGSiV584uuY8pFPjoCKVj5uwuSKoRVAR6BgiUmyQzDdDC1fcmmEz1uWi6g",
  "key5": "2bcQS6Bdfg7EatpwuoA69t6EJbDj8q5NYqmJrE4NUam3tY4cfS95qFhTDap8BRD2QNkqsk8FnGoY8yvqgXLmDaLU",
  "key6": "4SRnpEY4ympqWciThhUassAth9Uuc9pLsCs5DXbjzoprY5djH2h4twgDS97HqWxZR6uxkxXwGs3vfeD4WNDpJFhp",
  "key7": "4h2LmhWi8bFj31Yjx53F7icqVDQMAnMt4cpNpK7tgQHUgWsnLrAapApuozXoUEawcXmBqrP7xwnBBxdFfxc2Udtg",
  "key8": "2vExUX85FwxNmc6VCNuwebRivob2gXizkowKUtvfoYVFLupTDyKwBVhq5Hb3uE8HZbE6Ggsxuaser13h5pP3wcsE",
  "key9": "AS9feNJPxv8ZBNcHDBs9XApUrzBZ3ETWhjcxtvzriNuHVhGnVqcoN5ATK3pi9u9d965tgpecmi1ADG83zFkU2it",
  "key10": "3Ft1h5v6uDGeagm3E3hZSPnpLNSdrzpxsbyU2P2FsEfYgbA6fAjURy7ww894A32ghVU87MCYkGo7iBVFFypYreB1",
  "key11": "1pb7exTJPJfynEmuXpKSH41WPDZp5eMpcjiqdYPSztms8oKwEFXdpJQiXyp1J5fvPzHMX9QkmQrKsXuqdMr4QQb",
  "key12": "5XTiqroRp6kDLRSX5wyWWxeapUWDHNK5UCNvanGe2kjJeVUEST46r1GowPMV2ZTLs1a6rgW64kQhaQvgz3CcwjC",
  "key13": "PcPVybL3DUyvYK6kGtEaAoywHJcotm9k6atjGDBWTaCvdfsf7Jn2JerNxjSas5dNAXTEXKsvjFCJu4uPCzdy2ka",
  "key14": "4amWW6pXHBQFknJe6DmtiQ1MYSMLGWAXcb48uj1kDHqjcmPajfgsPDyo9txAnP2TU3pPq9VUk37Dtanap6QSFbMb",
  "key15": "2VUcC3K2B3aDpd6QYBvVRCcY9YrMZdQeAfiikAdbFFYRfRGE2Un7E2t6raSmNBLK1ijgH8Hv7PvqGuD3v5vQhN7y",
  "key16": "2DLebVKu1eAEKKyVZDHUeQGWCAfxn6uSuDRBFR1E4HEeC2gcAWyk1CsKm8LYd1yGh8GPHrchNbKkahg7Zm6JGQkE",
  "key17": "2nMi8PKh1By3i79bw2MvXQ9CBXdgDTgff2QvJgsT2XwmW6kdE8Lhfc5JMxmNibk8kqfNBahbtc9tey2XQuH8LF73",
  "key18": "57BxwGhXqtqFMUghRcPvqzjFKN77ZGapxPEymvy1CX9hPPUHhTXdQgdHTDJP23extGotppUA2HFTN3vCyYGZLXHQ",
  "key19": "5UpspC84SHwfhcE4cLPHS5VxtjNDdTSGCV6mku1y2xNsHEiagLeWUY54HpBJu2QRmudQscyTMonfgTPnDrGmtfGi",
  "key20": "dpaWXFY7JVBjZnnP5RcSr7zMaxV9o6Lm2mQUo1MMkvkGxq3xAisKRZgrHmcCReVKJqVDmms9oTgJVLpsmaPeDAz",
  "key21": "5P92MuAGoQjfTTXwFJMGsdrjGp2ceD3eWPiecVN7J8W3qoXwjYFq3txFnUnjzdnqmB5qUeGfZmhLQFtMCXttw2on",
  "key22": "5nFoUPeKHCAMqMP3JHBTTxwessiZkh4k43UZyyygF8Up7KkwHA9mVaWFWGKyPWA6xLkzFHkxtCtahjhJAnZsKEKz",
  "key23": "5fhtK57TjUgJMro41SKPT7WBiwP1GMUgqPwtKMEKh53b4MY7AoXEVJsZpuQNhUnaaRBiRip9rCSH7EQTLxZZHXiZ",
  "key24": "5Ka8c79fazCzqXPsKg5XjdAGfepWwAjzt7TY4gEfzQMmFW5ivum3RZyZ1vY4nK4cKXSm8TjoCLp33wq6HiPm7LhP",
  "key25": "2JewjjTEKRw3bzGBLzm8aamfrQzF3b9CWQR2Q8e7WGmgbQuTsLVjpYvECAFVCxyfn4huPLtCKGuM5B5f3TKpueDB",
  "key26": "4y22wuQ8Zo7WfVRSA6hDFTZvEih1EK8dg9ThFcL8Pd4onjZ8YW2QPN1yGdYKtMFrNLyizxVCBsP47Kao4BjUppjS",
  "key27": "4G885M3mNrhQgQ9NjnNtvrB1pPVFqnc6i5ZTEXYiYHC91DFDjVcFQrv3BfNATPpPd52Q4mAGYQ7oT34ggfhHp3Lt",
  "key28": "4xfriYN6QWRXx3vygAQ1nHGmXzpJLNoE6tnaYLmJWasnMtMUd6Y3WV1sg2DTkpHR7QB69Tbyi5EcVJtbUA5BRaC5",
  "key29": "5XoAS5BP14tYC51wEfzFySgvXVosdinC2XtkipvEUPJxMrzmKw8g99WYcJHJcPF2uSKrjRBSwxJqw987MDPWr3iw",
  "key30": "4GH5uv9ZHjfbffx2FV51GdwQWFvyqdmhcgBHQ2W1o2PrDXPWFC8zfn9sc8k3qTmc4rmcKsevH26QScLw4UnPUWbo",
  "key31": "4GqQct5ueQeyhbwWSfMEnBN4K3Y9FBRdMuoWCvHgPVexXPLdZRCr3chtW1JEzV9bLiEupy9iFMdHnZN1NzJN71Qg",
  "key32": "4Vpv1GYQ5nVLqstf2vUbao4WJYgCWqs8d7h8fL8WJVRkR6nQhsJH3njAtWgE4of2qXiFoZWztibFVEYEMrgerYNU",
  "key33": "2ZKPwSKP8SXqCNYnwgbot1QQoti6kiByKdnJTYgR8FyYR8MNjj7M2HdYjYwMLLrTs2kRkWHJPT5poLfmmYpoK4Qf",
  "key34": "4vmJYnYJs2Fn48ZCy8zKRBG6iQChAWRCXLAyD24CpPHp1CmZTT1bA3NwnRy7DtmiTkTU9LoqWbEi2rx8fnJo7cEv",
  "key35": "RdYsR2ruYrEgnJD9td2EiKXsRxkXCmDZvKi6aqkN59biQXrPYoEdwTDYTHeLrVzsAGF6FWbsKtD2fyjjp8JPQtX",
  "key36": "EKMhna7DwfZZJdeNYL6x3pAmgqDctHEGaDDQWj4LgKDVnGsDRtrtH7VvFy691hhUxEVW5fDKipXS1aTRK9X7ozL",
  "key37": "25fUnFpiBknmzLiR6WNqzcM3MPVJdMNcZHkyte1mUAWpcbGFbbffRzxiknpeUVxRdf1mJQd8vsHEXhYpqd3QRK58",
  "key38": "kJQMeX6Yebj2qrit7Ro5E26A7LRPESjCXdPTDDTV1Kry4V2n3AmNvgvXsRgVqtDFqua3Cdv5cKM7mZBB2aLjkN2",
  "key39": "tCuqSmKCVBcYt2SQgu5GLZYUkVnPxRi4w1SMpLESX7u8MrRpwA5MC5LhJwKzULG6yzWJufiFnrmLF3mrM8uhSAy",
  "key40": "5FeJpi1m8izA7F3xBmpy7fYpueCtRCadNqYJGQYriWqiDeSRpxoAQWBSre3QFptMebLqjMNucCw6HMEZsqPV4ed8",
  "key41": "3cnr3u3YJz8nfdP4n8iBhoUjRDMr9qFpJZemYxv5C5JXj7xcgKQYp28UF9z9XQDsgdbpe5UAcT3GNEQwbUiyieJM"
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
