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
    "31o7wGJNB4YDoy3iKTitgikNEnd4wU1JYoU6ieotMH8Y7LJVreizSCZc5KW7tpfEXMjBmfTSpNVwbHGDPX7TM7eR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sjxpTporCZ6VXLjhoc1Do2uxDgqmoysiUeQuXRYbMMAxP8WDqwkCbYCSpWZWSKKAyRqeqNraR9PhRBWFnsbsUCh",
  "key1": "25C5uw9U4NRRfFiBviQiT8DM3PFk1AAh3cX2fceJYNjWNpbzPY6cda6ZbX9k2Fi4poZtBuFAPGGfvRKq68iPND9T",
  "key2": "2ixkKVK95c6wWa6F5Jnix7hhpWJnN3ZeZyzsF4XQ43mW4FQLm5og71kh85bpG2YYsEj79XBrErhEU1qJizSEvRNe",
  "key3": "nBBRckYDVhHf6euwLs26LHM3skA2w573JFKmLuH77GW7qL5z7UHkZZ3XNwU3GDxBPmwa3GZ5ZuRnajrseu5EK8R",
  "key4": "3LZrJuXK34iknD65tVCRPWiA3XgUnNifYVtKBSWTnFJE4uwN4QfsTTPs51bcW4HWVpkgZAJ1pj1cWN6MEewZhTgL",
  "key5": "4ABt6vuvE2jqmGRUiZEoTugfD5hwBDiDF5Hn5Z8nmuMty6GjDRKoUQhJwVuR1Ao14Kk5fHQ3Df9uyJkrfX7WjLcB",
  "key6": "4WoHta8iMks7fWdcatqBVUS3tckM3VGCf3C79yxgmku156uPPn8qbGiJnfFsh96j8f9h1iUhJX2kpzG9dLDMV6QM",
  "key7": "4qDd2Hux4RgW8t2mBjX1QQWE4LL63jhA2oBRyd2yJm7zuCaS49i7FcM3y6Tgty9SQTArBGgVwVAnSQ2zFwQXEhz1",
  "key8": "5izAvjw5C2n1WR4CzEWX7cr2BsKrbSYUWcU5FQQUBAdKUNZFddG9dRa5tPyxmFpZTQX7Sg2CjGyug4J7saumoMK3",
  "key9": "62Y9yzcyULEvWkzUhSZNFZqQK14evuJ6EbebaCWnkkeuscZFgjXrbtvF2cYHesuQQNM5Gbv9YRN3Co4a5L6DWzdY",
  "key10": "56HTwnvjFygzMMRoj7w1mYzpxDayeTaNoMSzj49fGCJLGY5rgFeNKteoWKQ3GuYhGC23JJS3XKGAHUSWPgCGt227",
  "key11": "Zqs5fYnvwcSeUkjFdFJ2jwttGxRdiZmjbiMFQiMLsSN4S4o8dQ492yLEPS7wdtUBdqvJDMPBZP7RV3QuXLTgzs2",
  "key12": "3CAye4qbK2z1xs8TGJ2hYK7vfChgWCHVKvDDmkYdwKNiT329Z33t6TEQKVDWcmvcyaX9S76RaeTW7pZFFgXshoke",
  "key13": "2TCVJb3Neghe6H91tZ2t5jZuxrypqZuwQLyF3RN9Rr7MdCdc8L1f6TqtrZmaoiUsDciW1kzUUMVmxtmytCSk5LiK",
  "key14": "81n2pTsFVoC4SVJKhCVN3Tb9D2tEi56ANVqeGC726G4m5iDjGLEzhFmwrSeFKFgwUGtp7KoX46XLcVpoiNYYEnv",
  "key15": "42mPqmjrWdaC2ekj31WW2VpGXqPbefLfCbtEMFvvAkn9AP6PWdQQ6A7EJecpaXVVqxrKc8cmgPRGd2odGLLTUYFW",
  "key16": "5yUVGZa6N3tWiZDPCZBr7DM7tPm8DJMCBZQ1q8NkC3EDvtN9MMTi8maRg6fDsaEcFcnKcreiUkhQJuJYJCUgYTSf",
  "key17": "4UxD2KZgp67MhKt7YJZ6ftkRJUmYCbK1pHKMGcWeiQ7jiDjriCYfF9KTzMR3jzciUXfUWGZqKPGvfhAxbyajwNHf",
  "key18": "67PxuGmmfBNMwCH9z5CRpHnzrPWXNwFCwe5CafRzAemQF3wGVYDJVoU9ozuZAG6ikLEwuimYbgBVyWawg62YQi7T",
  "key19": "5AALfGN78X9yoSo2KcM8xQY3uFV18jc6EoXhKW2LL2U1y1KiDJT6DR3ZijhPDTiC2JZv6Ne8P4yLLQrHFzTkq45K",
  "key20": "3mqwsXMHcryASNUb5ghHB6CS2WUUMK5LrC59SYVyxkxdCcjfrY7SqUmzekMiCkmnJ1eN1ksJUrbZjDRQxFanzRYC",
  "key21": "4u9P7QCf7vTBfSnHh9DQSLj2xNw4KCbqt3LTYcnRrZMm3GadZvXuPLadd6XAMZubNdtCY3nXE7egUgcvs7ymQNFg",
  "key22": "M1suPXB9Zg2GsAfa198ATaZgZMHg7nN4Wrbmh4r1hxFHVZko541EawGobMrzMmH2ZqDVSesAbzD8dG6LfwZT82c",
  "key23": "23UsiMnygfEC4kLhc1Yt2enzQJzkqGNSs6DrfH11sMEMBvp67NsVAF6GHrP6rJJeumBvTaYnHcVVsjvY8RorsEEi",
  "key24": "3AmEBG8e4fSgAzC4WRogRveXwosYZqEVFnZHTfdhgR4jitPkungDfhC3ZgMFuR2tDhWf8tk3ELxUCntLvHDEgxkk",
  "key25": "3qVN8jNWAaQSkuju5oPewRSTkvL3vu157FXnBwHpvHTVEhWhpTnKEGw74q3jXsudPjC9tELZfwgHCXmq81MZq84y",
  "key26": "4C2KPmaLAtDCCM6yr25vMnVVaGWBQ8D1czfsYFbtp9ohyDrMaM6qzDgNb7HRaBbnc8FCXQfhcVgBd83r42HzkHoM",
  "key27": "4Q56DGCQ5qyhsnA4ErmaJKyr1rzfZ6PzJQ9Png6baKE7BaFuunG8AFh17S5yXjrp4iifRcXoJHGSed9a4iRiTrMT",
  "key28": "38FxFyoK4PGSTiMK9mQomnuu8uNRjT3Ewrg9GAfdsPGwbxo7aQprqcxChmXLWpumheUwGNXsgjbpycPthbJW7RKe",
  "key29": "4dYESHCjcoKjzn4YbR3ojjYH4LhRVEuxqkLdjcexGodq6mKq2VcgCQu3nUnLV7n3w7D6naBzELwQ27BYR2CbcDQ9",
  "key30": "2HLeLu5Ve8HhNVXFTBPSey7xTVaF5aCmppA9S1X27bn26nK6dG2NmkBjSr1ui6TsCtawoMANJSPu3v8h58B87jfR",
  "key31": "3ec9RDQZHJHYGQTv9qKQg2ATAmWL2s7TC385VqmpnxJiKMZsdcw7xTV3Ya5XKEPgtGKb9Nh1eaEMQaF4N1ECSQao",
  "key32": "3oowaqr9CDQKcpsfRF4pudNVggftzDaMrzxD7GvpMFmrftfxLF867ZZCM6RzEp42FcsDbfUvq7oNQiGMB9MuNi95",
  "key33": "3u3iUL31CZpwX41XCfKDXZf99Mw6G5qjVhZKXsoXjw8YhSX74vaUaYEcE2BWEHH9QFFb1uTu7Pxd1Ti7je4y7i9w"
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
