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
    "5wxZJcPJQLxkqvZLCiJmR3MT6N167NGJ6sepQ97dR8Uim92dhNamDbsBFN1ZSZFvkRqZCbZjhx849ohaL16Z3U3q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "255y3ivYKDzr11mztfULNrDdjuvEZhbeAU6o3tUaJpYH2kEcEUDwAxwmqbqg5Xn9PHVqHSSZLj4hvc73CGSp1itE",
  "key1": "61FGA6VuNJR9KzZGNJjYGyLqeVHasp6HVeaXvEpanJhiJZrwZSUWcHVnYQvAW9atRrTZxUBLNgvgQH2oDFapQrL",
  "key2": "36Av4huCnPfXJJfUAEqUGnNzdk2qQh8gEtQ1CGoYta7BcHFTypKuRFK73QiyUMi6i82WuSchWXDqqdRCbkRedAmY",
  "key3": "4Wzg1ehPGU7yT442FNKjJ3UfXiq2SMChE1X9J7bKt26EGCfDgKgatigPjMxghZe29mhxGgiHytR2sbj3AbybjV5x",
  "key4": "M1nFaGPdbvEDmCJ5GRVnNZUz9vKS1hWMZDnbNNcknKcS2MimCMyzPH9vSJ52hztXy7g56X2661Bpwu3So9oSPuu",
  "key5": "4VTehuk6t1FJsEh9BpFV1MJHtu74fvKewaCLDcexTV8vDNtqWzeobNDCVdJvRN8Qym9GAa5LDA3bz4U7VyYJxi2W",
  "key6": "bBsL42i3UJuQn6BKmtsbBXVabjuhR2umwLqcZ6BS71XdEejbE55aTbikvcTVngYhDGmHgf4e28GTPn6NBTMBwGA",
  "key7": "55VJvjKB6xc3ti47u4p1YWbFy3W2v631MYApCsoUy42GEkMbzhUXpF2vWmRVGRbVPjXoj3WoWiYav3cu7u7htJY8",
  "key8": "3HqTRevw6cBPi1uzxqrkjNxE4R6mXPcSVsxt27oArYyasezPZc5vKcuFPQxtiZGAxVcnGK6PKfirdYw5F31RbzuC",
  "key9": "2APLwL7fwgdVdBeXDjQqCyART91NfFeNXp4jNawiASeQJanLB7HUnNAvyqucohWPHjVy6dAPYarRZ5L1AdHKjA9G",
  "key10": "31NsvDXqfTvmraed2w4epJSG92CZGBxBWYg491hb1xJnwY5cbZZV4nRQnNPQnzecF5NvQdAGeiEoMEXLXv62Hrih",
  "key11": "3GVrtVWNT5k4togeYaTKNunsVDHALZavk5kVYSDXMxUkvShdtgXfCBFfvpKwvJuHa1ms3PPFt3a2F6vSSm5yPq7m",
  "key12": "4qC1oZu168DyaXYEbYFxb6jpYeRdmBJAGynpPWcxgVTHMoDjPvqccs3PdzaHUWubWLnDTVjqT3oKonwzztxxV5k9",
  "key13": "4N8HejbnbtgLY5Cfa8QdwwiC19B5qRN9n398f3i94DYRRhSUhkCbvhFyyXUM5zyw9w9B83LYFJ7jUcjKq32oakEN",
  "key14": "3w6zaQPxZKFxa8jQ9F7jLiGxZMj1Tx5NEqpBQqfUnnwrYCbsEMmxsZDe2mxjAYjo42dD2Jtb7gooHK2NTGDSeDqj",
  "key15": "2crNpSpSBRSpZubn4AMsSSNEnzSAMAciTX7CBAni9W22rZi4Mb6PKZam3RaruMKToqLFS1UrLcEV5rPoTUdgAAtW",
  "key16": "4HVTFi16LaLauL6W8MPfCpHh65aRoFrfHkSiW2W1eL2CCdT6zPhYcp3aDGqgTbToAgUstgnBCsmupdYo5BNDKasA",
  "key17": "25EkGkRSi1WPrT9PThc9ha39CkfQ78BNKA4dY3YKofjHzpvo99bMqrExoLxVrnvtdhmYXJdjkUxFAcMPC1bFaK3g",
  "key18": "95AHtSNDJJ3yC2jSt4MRUFiUNbx7j2h5AmJM3pL8q2m5zngMHVDJqxjuvvV7HztnopT94omPp9scCKhL4uSQ7Uz",
  "key19": "2tmXxU9GyBinAeEwtdLskfwPKRiFnLFiztpqDmz9EpE7FEvtdC836sJLWk8WgYVP37t7DRWzP2KuBsiBPjc177pN",
  "key20": "3ZZ9nBcntYQjZcNJLGyEEdeBbLqkRAUQrc3n1ufESyGNSRzdDwDLevscBq9Gs32zfLkeB22AobwyaKAJMVDuDY85",
  "key21": "3qUC8XYezJdRpCV6CNf3Hx4axZHAoEUDNDMb6w5no7axRKVouoRZdGaJKAvdKaE8xYRZCRjnu4DrgJpZu7d7HGZJ",
  "key22": "2oSFF1QvPDRp1WRGA5WNb6yXZjvoscRnWkKovmQ9KSsoE8FH2wMRBMV8FkPai6FABFx7y2wM9HHu2gU6vpVd9qNp",
  "key23": "4YoWmu6ukYhYdaSZWAS8QaBcCAyS4TmWY3EpXvjwgQCEubGBCPHvaJQtPR3vJnQrxLSzq11LjHaZ9SDYbzRrUpaf",
  "key24": "35LuwrkebsvKodyWYKyApQMKru2jmTkp1jeQXpcJFEHSPcuMFiutrdr98XRbCj7ahsUTdbsr5WMyubhBeKnu5Cz",
  "key25": "5VDKzqMPwGkkznBraX3tJAEdMkZnsAYWuuqVvevw2mtN3hPjzZd4d1mFRAMds5cJwoyMiQGZuLHNZ6EQtmmpA4DW",
  "key26": "SEinVCpqU4rWnrQw3NM9oGx2KtUbtKnNnN9bTvQm31mXvniKQdsqfuGuzbasTi285YeCfgzQkDdWgU31gR5qLFZ",
  "key27": "2qckwbJWcCmKNSZ9kdV4SurqsFW9tgk3xj7mipLa2apSFPjxeABhRj4K4ihxwurq1FHbXkUQSZg8UYqHoaebzfWg",
  "key28": "4sm2adJE4X3qebkVd1vDKoK8UxhxzPxL4BfEwr6AhmnSkcJR64oo6USxC93KDW7j62cxtUuq6CkcHVbqPuMmKhSD",
  "key29": "S15e2aojmPwaB4AVPoqCE3uo5M3fhmPRK5uHb6oLk83Gktm5mD4y31jD3hSKjGouV6MZ7PPWWkVkvvHP9xkgYww",
  "key30": "2NB1sXiTpqLEBHwWDXnAwmMgmqoChxfwiw7gKfE6hxVF9F3TCN6JQ9wL83Z8fX46ZJrzZPDW3Maebzand97xTegZ",
  "key31": "GqaD6GJgpHQmPyJbnphKLWPTKnNkkkiYZZ9ZK6xiwWYaqcFj2926xLhGK6WRPn1wTCf4P4FH2NUCw14VNFvM5v6",
  "key32": "3xiCYQh61NkhhyKP3eGXTetHHim3kkEgRGGjw4hZmo1hpWA1EeAF95LihXR5z77CBSuTB9PUkgfzr5DC8XFdDZt1",
  "key33": "Rqnuc1NCYLf5JB3C7j4SBs69ZeLDczC7BcmeFXRyZuvX6QSXhmB1UjRGj8LqDr9UiSq1WxJrSyZdP7URApjadev",
  "key34": "2w5v2YJvtevrJ6X8SwD7Q6XMYGmxYNqp32UNN3vehFuytMXsL1t1jZ8x5YqiKpiCdGQK9btaj2cjKAegkuGcWroy",
  "key35": "4fatwEGbhC7vSzow3YPvJZNmaoDEzspKhBG61XRhxHsEg9KGuhthtYRpVH7FFvUK3R9ZsxmbJmtYPtuXbheM7hg8",
  "key36": "5pq5SjBGyEBVnsCecZMWp39C7vvWoCHCRyXkAXgq39c5y4xXhuoRucGXNnS95DN6pyBbVmCM1vbvtRMYmdR4jNCh",
  "key37": "aj3xCN6DaqFYcb1gnEyjP8ycJFTbUapK1XUwcyg4tRwUtKNSfbvj676fzY8MBjjdwd2o1H1m3CnNUdqcwnx8Pbn",
  "key38": "GHArSYymvk9a2FZTcbtHDcXaHH7HT44qJEYFBMhcUjcUEYKT8TDpuaa2oxHnkLiWxkCMRqzsPjHQy83xqdDoA2C",
  "key39": "4dPNgGSaaPS4FXp1aH36h2RtX8iqBr6gVqy9n3axdBGGybbDBktWEnsjwDNLciYNbBfVh9rLvV3Kdb3CUwxjKQAj",
  "key40": "3Kf3U3PZ6kYYRqAVoVW8WSMVoEPXWXAMuHsW4LxR2kKEUGgmwwd9DHhd88PabfriZVFQZdxHgqPsfJokfuvUzBNb",
  "key41": "2hrDCghZU1ejZEZaFgeibtbKaRy5UbhnVhku55cVT47HEcsTCJpWzBPv8hF57hZn3TdZpX5puKFCcA2JKECd9F8C",
  "key42": "32wSRfNSxuELYjaJQeVgUz4xFqp1Zene8iYtbXMpZmVy3FjupVKM2q3CRuKpuJHxffLxLHu5US199Ab5W8N6vZr9",
  "key43": "2R5tNdcHZH7xMfhQFv71PdbrUsV9D1XvhUzYT5hzp5wpMfzh5NWBgsDS1zqdqXiy921Ss9YfPdrgneiszH2ghFJH",
  "key44": "3dn4A9pR82UkU5JxHTKyvrHuHPe6X1czTWJbNohAc1GnMmdN6UFYrLJ9ddVUbe9QndhzMr6S37rumVTh8dHGJwqX",
  "key45": "48NQKNrnbDWxiYrBVtwRfkfwFuMSPBPPWbFifteLQKUiyYExDunZMhET7etmRRH1APzcJN5FWFrhDjS5YeUqkdmm",
  "key46": "5Ey3pMJpcGf4HELYV42dhowrLwsxVgQeEDhNpChuP9e2beik5nYPBqGVLtDwnnK5LcoPAPgYR1JvkbDN9tcVejNX",
  "key47": "2t69vVkLZedeRvQYUTC3t4pZ7E1w65q9DcvDeMn6oeTBjfCbqv4oNp3asGCyDTupQRyB4XiRAmKRJUpu3G29aDAS",
  "key48": "4GWGRYZQLcmFFosY2jP3SKxt9QXd3YRZoduvfH6iqVxWdsPU3se9Ks7NgYzQLz3DRy9BcvjS33pCZmFNdU4PMPgi"
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
