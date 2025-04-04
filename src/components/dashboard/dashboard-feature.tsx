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
    "kAFXPhhMym74tAMHrTYyGKzFaBvWpnGqywBmgFrZG8ARJ8P6ztyhcr1HrMnuthkHXQE8bBaKPDmEodWtTAY6zuh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vwug2BU856Kb8VT6kyRXswTSXVsaWKd6EcEhw2ZPxPN5eYCKbDpWrh8dgFu2qQZeu52fBB7pr5sQkTw4yCXHGP2",
  "key1": "3HJ5ksareSEBkfLdMsbaGEdS7jSNoZ53Cobg5Vq9vYLRtVsCoCXynbm7TTMaxctXWfiGq7N3gdPektVmxZMUuGF5",
  "key2": "3v1KvzoDcvyycBjjDGq5eSwseUXpw1ZmfesZJ67X9ECbmM1ANJTHrPGfN2mBoDSw8h6Hg6aowiuGyRP5YagMcVaT",
  "key3": "4aspGDQSw1Lh5DSUzEhDX9B5nNbsTn5s7kAsWPqvueWjaGfrEVLLs7QeG97mMFkAitJKdXVSvBS1XkgqFFo4UV9E",
  "key4": "2eHJJE2qXKoAHENyoagW5JVZAu5faidLXwjwKL9LAyeXRspvyWaVQZz6jTXiajVPmiAnWRHu75AdNroiAngCwUEe",
  "key5": "mNmdp7HzaLGFh18aw1mJxx6T3WZKmSRzpEZcFXuTT1qGGy8emjNjqm9MGCDTHm479WBSvVdMjaHTgTfTdrAeDFS",
  "key6": "2tQbRv6SmQtfMBz2jSDxdgjBC5qMMwBEFWezhK2TUZkKtPe4LzRKGRpBu8cxKSeBKJf2ni7KqSB1DEzzziKsj4Sg",
  "key7": "255kmTM77h1NqXccryU3az16Gz8TWzeMsJovtfK6WeKrsRUJLDPN8L1nTwihxbFXBk4xa7j8cguHRZc9d1YJuM3M",
  "key8": "4S1PnmqkDddfBo58r3WNodTZJiTsg11hRQ7ayHgRs7y7ZdeEUS4TposYTTXGdx2mdGPugfwYMeb94J254Ghbbgkc",
  "key9": "2XwsuWnbCnNVnVan2JKHYVUF7i34DXD9gJZUqVFJmpfx6FSV9dxtYiiau2MuHyUsPF71HY6DwTerfjoM5tK2sFns",
  "key10": "HLBfKrMExU64CP85gVwAozQLBnEAMTauDuEdg8ogNkfvg7Rumea4mMyr8wLVBk4DnstDHkWsCbzL1LBqPkqmySZ",
  "key11": "2YAum49vbFrruepysMJXtvq5Lu7oiipG5CmvnavPVhU62sqh9xfCq6cYzfru8FQUCaVtnG7eJvZBXAtXky1JLLdf",
  "key12": "2Ap7NNNGGGvUasFUzJeuFWGBTSt56KxMwiZzbanjYjG8UqMWX6pyEgPBuNyJwQuqVS3ryLmC9BrojGR8Eiu4V9D5",
  "key13": "vy78XKFUSVCDcPMMqX8SR8xAKqy3FGRZdUmMtUeeZFK1PL4ZYWfdzRWAwkAn2bx3F9e5JACLk6JhjREGC8UsMhG",
  "key14": "c6ZumVwEKwbrR2cE4NWkx6FBpAHYRpNe4JngJMSGEUhYbQEtPsGhjbcfRTUA78d9Uj1wyLfsX4HhPYTX1Gb6z53",
  "key15": "5BUFMgaAfw9cQPy5hRYB5kXT8vMbkZhQgWQNko1C33fdert5AqnxA8ytEm21kZQchFcWXV5mXqwJkR8L7Cvvt3Ay",
  "key16": "2KMxsdazKBB7FEbdZSPqmLUS59taSfmzjCukWY86vZCs5yXhjF12ov7aZwiN41MkbKDVmCnUyix6Gw8dqgnsP87Y",
  "key17": "DsnAjMgFCBUdvG5VT3DxHVQCtSb5RMkerjCVaG5zo6dSXA2Tz69Nezc7NxYYJx1sXYWFJzhcCCaJS87Por5EYEm",
  "key18": "2DSW1B66Heao6cHpi7JaCVRe2t3RvUE9BhCTD67nRSZeEVmV5QsJjTV9vFxBe9f8GrzQfxNPdxsfh29jnRkBKtAR",
  "key19": "2gSNqfXUcd56HwXxJgaeEkPES1KPTZ7fmHLCqwrzupbAMc6a4L83qYYVeDzDMUbUWkw8VTTAdb31zab5MfGNK4vr",
  "key20": "5xsYvnjxdAbtC5EAf7SAuvFJRXww9WzQYTJcNB8FJo5LmqPDmKUMF6KC2VXBefwJ8HZTNmvgmvYjNHaK6uyfXfPD",
  "key21": "1iSnCsUTWRJbTSG2ZPH6xUDPnsyus9UU8HSRrfvRpMbMEZ7Sr5XTPaDPL8kbApNir2orxcqqt1tUP2S5EtVRcST",
  "key22": "343dxdHYDC8QLxRQAxxFD4kNR67dDEiAF4sAa63M7uqMrCVzmigQBAaBMnbRjM9KhXxV6Rz76m9XBuSNgrvwDPEk",
  "key23": "39oEjbffdEva6Dnze1xb32Nhnopbf7SYivjJunBWhrZ4zx4LfykwJK3CBCWmvUFdtKZTpiNM7FkJdEFmoRPRfY9U",
  "key24": "4nCsPKM6aa3vM1FQQA3jKRSuDDMjBmntqDXaxXN8jMmBpK8Vw7aKu5agPozBET8d5WCbTgdLPXMg9G8zKahDYT3q",
  "key25": "4w3sQrMUoQRju4cNUm1vunTSNwPvnhcX82zjj2oPe641bfncKym6Fju7zPEKoStLgH3sBpiG8WuBjSDrSXyVq72m",
  "key26": "41PXTWjW9KEjpVWywcyf9hEoJq6ip3DtnNQxiH5x6NuR7ehPNrrG6MSvY8RdsQt51hFDYdu9q7WmERVt8ANH6SVL",
  "key27": "4h58EY6dWtaxKNx9qY5MDgB9G3gqJDyWqpJ3hcmjL1AFzupanqxyase5rDHQjV9z5rGJqJTyjEreQJXxpz1BXmLH",
  "key28": "qjxZC1o2TNxxLPUp52Ms5gdamEqdvBtYXMh2fKGB6MFvhuQHTooTaYBq6wkfgvtGdkAM9Ygbu8dtDq6Ny7rhYc2",
  "key29": "66BGFtVJcmaQfv9bGeu3F4UEEdyAVk6tjv8xQtHeuz22ZVFV8Ex8GXfXA8F3qKrFGsDhmXU3X9mskJhtKequ3DJY",
  "key30": "4vknuexndeenZ4gvaorgsSuDHTLwpFsqXMKCUnK3s5nSBLPf64GQ9efhxthnLAQgYHpi66G3TXSLuRAxhrkia8KZ",
  "key31": "3NVjtKRh9GV8v5WXDRJd1oaLd3hB61SDRxJGX16N3E9phe7Cp7tgwCv8DNUPu6XCSqRq1VFf5e3T8zZJ7mvYumtm",
  "key32": "3gn94L1rHq1KsqgokLs3vZsHmPBrCKMxxRLEu8QWu8An2R3LRSU7nMDsrkCed11BVG6kfJrnUQgBg7eUkfM78NZc",
  "key33": "33hmeWbgGSmrQfdji2eWGpWJ2hMVcvjUKFc8927BsNt9rx64ktNk99WByRT6Vt2dz4cHBiCXohovYZ33hVFZ4ezt",
  "key34": "4hLqwuqGQ3XCDqPmJGwXvWsjPycwL8K84XBMY3cFHbTU9QwzUCLYAZWNVW6dHwB8wPZ6damTtJBKHyqKcSFZ8J5j",
  "key35": "5wmztQvyDoAV1ov4d4YPLH6rEgNyt7jLqYckb4a9nwPEbnmDgKzP9e4VcK1mZP9kV7vVYsWozyfSN3RzJFBbbGUo",
  "key36": "5WNXRCsyfiG6xLdFEYoNPzphgPbSfmnTFE25U7WoYMM2rFGECtGsuvFNrd2zkBxSby6yE58PDPrDp1Y8krdHFDk6",
  "key37": "1J8PvT9qpBoMGSswMZWUhC735xPRugcB7Y1qkHDxtbQZGCUnu3euPzzrP3nLX7MfND3WftA46bsgWkTf26LhfFr",
  "key38": "4rsVaWbMWQ1Sw9RsEpsVpN1zpq1J8tUZ9cb9q3QdPGb7YWBgmyEuNmJcNJKqTdKUzVZ9xo3oeDSpRWJR41bGpKuv",
  "key39": "2vWbUa14unDjSB8zR8QYbJsQwfGJi9fVWyxNFMvxcPAweEGi6r4AnwTmhrVA79hh6133CARKqiNWBYrxozRFZvhT",
  "key40": "62sDAtdHeU9dpwQJA5fTG4qb1Xaa9uiMHtTGemfQHiWACxHHcSBUFqpct4rdyW2JE3n94D41uUCVNLWMAuKqJFfX",
  "key41": "uAfLtTCXvmavu8V8APuqP6TthfdLJEiQoGYAp6AmbQjZ6qYqYeprQXCeieJ3kWpp8J7gdGbz7jwZWkbZtRKTxPh",
  "key42": "qGPLAXLoF2gj2NRgvXe2Qqeyp2aujgwNcN1MHLFer7Jhb8PVjgg3zyJCCATjkdEwnUwhCrwFXKD9SHSdhts3o4C",
  "key43": "4Zq9NEM6uSoxXDEeEPNRm5kgWziWjk19x8wrMA26AMaNjixWZWtmBRh5nMDzUEs3JpfEH4p5iKZ44h6dcs44vJRf",
  "key44": "417oF5mvApRpMSYFTfrdn7eupm5unx5c3GtgrE64hf5NEtVCmctZoa4HsDSwaQA2mBfxex3uZVpZ4XJsv1PP2Uz5",
  "key45": "2wWvb6qGyJYaKyoGSKVhxGBRvuiScHWMWrXTa5g5EAgKTUgt2wzGRUWGCimWCEjdgKkZLW7PxBDNuCh499cpWueB"
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
