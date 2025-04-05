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
    "VjhDfXGiy9a6FJf1U6BMCH9YSoMZ81XfiXpBvXKeCjcs23N3PfewRnHV2PN4YVDnJucfzdxE7PvynhyYYMq79aR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44b9EsjM2Bg6EtaKCpQgXySKzj2mVxaE6tRZVhnigsaM91MjaQvBnkMqUUMUBaXCXnwxya8Fd6jwa3K4eyeCi8Ds",
  "key1": "3PrDTtcgQX1LdfCgAByq49GTdLHcR8hiXPVDMpXJAS5zKDd21DU7qtVaMNjMnynRvyjTzfNr2f2E6TQczWspMtvb",
  "key2": "5FNHwUnvEHtZNVTuTWQ1uz7FR5ZmUqFKRxkGjD4tdKrLicJx9Mt9q743kWDt1uyA2C8bACduFLH4gLmW1rxB7oYV",
  "key3": "5JBuNsW8RP42oSaZuHNQfNNuy2diQ1meWYXcSgEX16W6sdeEjwuzLEMRY9RSfptKSQ8dTn8aNPw2ivXB1A1EjfuN",
  "key4": "4XdsKUg2GztSKyMQwPeoiVMMJMYh9ArCb4xuSeyQf4KodwxYVTFC24nzsdSJy3CPzGxPrt3JbBqXb3X7RQhmuPw4",
  "key5": "2xi3Jp6cD7f4q3FG9aDP4vMf46AhfKdBz1RQZqbcHs5VKtxxUCQymNviL8p6UgSynEHgRAUnUrvbmtQyUkAbQy7Y",
  "key6": "3HuJWfFhagHAD2PaCFKxMZqtgoDTyae6VYDafJSpcP1AYTWmejc6RPB9TJtUJ41aa1vgCasAhDvjrqydyZyKxnpe",
  "key7": "4v1exSaCUWRfRP6Hdgck7vLdHxJddD3biYZbWkt7pVxLf1FTiX2nfGSvvTE19Pbx8ANEUAcxrNUBxoeE48LQBZhE",
  "key8": "4v1zkEaeNozyNuoGeRkVyztmTFevRzbmMJ6seow6xM3yDnzY5zSwhqLzDpyP4uuAVBmqv4MZgNvUyZKr1FEMgtfN",
  "key9": "ja86ufDCEDXHmKi1ZJmy7xuGr9rP3rtgkohFizfac1pGt6U5cVBBzth2htbr2347XmeugdN73CruVqFAdvn9kQK",
  "key10": "9tw7a9WPADSnVXwVExk5eDDV8VHFEsJBcRisYQmA9hoENHrRixtZowaUuYCEE7VvFVxRgDesg3k4jcYG3WDciDK",
  "key11": "2dNaDya6MjVZzDEQfbBFcVHR8ZBEhxqY5uqakDz4viGJxH6yDxGYprWGHNvqFRF66yBBV9HE3T4g1omiN6kTtEqV",
  "key12": "3Zpeg3aRKZTVBsWmBRysrc7sP95kwpVJFEo3U7Uteh9WqB3FQW48bQ692iaH57ezC51TQw34pTvKBamNRqr4o1xp",
  "key13": "i27wVbKk9hDkBTHFGkK9qu3SvL7K7khuizQVTAzxokSF9irtkmC8m6U7q6mzpXw8QkXWAX8D5pxwR78xzT4cEbq",
  "key14": "ehwJooeYBsTk9kF9piPV6X6AtDLqJ2vEnRNN3r4bQsD6qhJD5Ke3rTB7eom78ctmR4Kdi3gcZmqGhHjZQFik6pA",
  "key15": "zSvZHo9ZttjABud8VqgEzbyQDvzF14BTQ3uViX6AKHWKf6wGXyD3YNQVp9i7uQEGfzTsiotwAKq1E9BuM9rqXGx",
  "key16": "HmZeMKcRaYUGgS8CZWqCNA6pnvwLY9zqggCDZvV7vj59jM1xi2vU61foHTp5B764RMGMjAzVSEJmWrrUM1ckrNa",
  "key17": "3GqneWCHLvs4PozxwnH737cZiKdWZw9waHE7zd1eJough4Wkx3TigkUkmuXdMsj4hc8wzRzBUi6aGRpPTA5z1BzA",
  "key18": "5bZiH9FB5sH4mDwHXgfDLp9UMFSB4bqTVwxiAAQknPo7EanwLhWqgzBKJzTSyd2iyEZK77i49XR8JPYzYE7gkHMm",
  "key19": "2nkeApyKKzUjF5pP4TqhWggTSkmAiaqAgq4bQfCd3WGFApz9PptdjVKsYcE12S3r5t26Pu8CbpJTjzpW9NiYqMMt",
  "key20": "3EwKJPAdcvyNYLz3CnHn838ge8ZX2ykJFRjavMVsi8Vt74rUm2TW6ALauMyB57uDWFwLxDHisFVSpZjS1MqzuCTE",
  "key21": "4okUpQ5dgSToS83fbhNDG6w8bbKSV5eAkSa3nzywcosparJZ1dUg2BtHBHUjd96Eye7XVN5LwZdLuf9S1pBgHwuq",
  "key22": "2Y95NMgtFhYZ38w9ZN3BX2BjwgxYdu5AXRkogJ1pqXfmUBRKKk5odZgrN5N88YQfxzoXDcP3DNytrMRfMQR8DceW",
  "key23": "5cXoNLYw13KbZRjPB5e8yzYPCuX6PFWApcvPCWugfga7iQvb6XDaq6BxzW9jveQZddcRk7kbpJPD4n3L1VkpY6J9",
  "key24": "5ybKGBXnryzP2qaRguJ4NZLb2spsc7sV469EymnFw5a8tAMGGAPLrMgSikqib2JpqqmSzAWMZt4EGpmpNE8R15QF",
  "key25": "7ZFMK4LT37KR9SFG6hnbx8Fa45QcXtTyCVH5F2QLXvkoPi5YVhzvQhYrsQqVEh6iJjDViXXB8MS2VutBt5fBdau",
  "key26": "bRhTh5Njw5miXPFYdrJVR9NwEUauLaPGnu69HgJvZJSLsDehxmmpGwJ4VckbvN5qqk7vuCdDCksbNaudgWVb9Ea",
  "key27": "2XL24A9rXuofb5asLynVAnUNrTFyFJhVf9iNRom5aG86YakjLGPdEEZYEiUvN5y7YiWmxyxe9JMtFFjbMV1RbmpH",
  "key28": "2ZSFSc9FQgrn6AdAzscct2qxKiiXyR8L52nCoe2Wpp8Cx96tFtbXfjbBcEUoNLXRJWYmMi3wBKNki7BJnDT32khk",
  "key29": "4ZRFneDx2dJvVUJVLh888L2dyioHT1WAAcYaLpdj5mhxoosKsPuii3SgsAoT47iVp3SCWak7FvKLABgqQaGeLSRL",
  "key30": "4nqNFpfA4mmhR5fcj5WSc4KexiBiVdhg4ec8SqW8dNnUJNtuE5CYsWZ5wqbm9uQ1TL88J1FyPGehvU2z3pM1tBGz",
  "key31": "EkGgn8JqgfGNua9o9dAHAe1intkmBdj6JNgQrnyfPXyKfVZpxstu58T3jheVqafBjFYEXBnKCjgCz67ppE3eEDw",
  "key32": "5PQP9QmJeHEYDJTjmjzd8zZpRBARTCKsaa66iZvpWLxkDvvep4Lc1hmYYwozdUXQ2u5VsEEXSd44EzfYzbkusixg",
  "key33": "45isBa5ThGZFPQrbPnYf5VovF5LE9K1Bq7kaSAcPLXLusEbgCcempVCNHue4yXewMEyhcap3swbNZLciPpKD1d6L",
  "key34": "VBtrNUkJjThN6P2pH14DjCdrx7Yt6FPyR1CSQhPXdv72sU4jRG2T1f7qSpnKeb2ACCpBNVLz3jsbJjyXofq9kMG",
  "key35": "5rY7kpxGGWapTkFrSeEoyKpeeZPETivdMFammN4pMH2sh854oTjAr5WoEzrBfNSCYzgbvqmhYK9io2SS9dqahm1u",
  "key36": "4iyAAMmcpVZPN5Ryf2dWLxKAFX9ErYrUGkC9Tg86p8UWVY3RCF42MEtubyuAdzgXcRjH4Lp8AgQJ7vn81W3iprUe",
  "key37": "swFF7Xn5tVMeB5b3JZoEubKFNEE55fty4JhYMJuDL3WT8Kev64nbZUSfDmrBjcgGKwwhUPE9fVS6ETmCKtg2SSL",
  "key38": "2Cd9V9AYXAHRJ1hfKsoPE25Fsu6Ue4E8z3EXw8KiNdus9oJ5sEuQRJgkEeeaWif39nav7asLboanL3mvEaBQ451k",
  "key39": "2y2qd49SgfiYEwNTr18GJQBjRAcymD5s6eYFAoFj99tTyFrk2A8n78ctEQZka3guj6ybRfZKxVnoqX5fd63WPU1S",
  "key40": "5iqwZdQsSrLbvXC6RmSGJ8Wzwnn3Sd2roLsEpeYhD13sC8vBtuNPmsgEQSr8tizcSYLQBPexjg7U7Q4dCsz4WQd",
  "key41": "2tdEbpdhg8mGbTo2tFHrC5vFETBiv8Ny2qh6egqRVK4sPTrqDbYaturL2KfSQdSzSiVRfqCxHQvqhxdLyGru5iiT",
  "key42": "39Fm1SXkRD3yK8rzRXCpdGVwYKfCddahy4dgVEamYnwyEXFTVtcV64eKhzwBqqhNHfv5ZSTCn8KX1NV9aogt6aLu",
  "key43": "36NfmZ7RbhPhtXxoM8x7MuELwE2sC5PtetY3Ls99fnPbFZKvBsh9AXqJHdSWjcJaBTdwMYYEypHWbKPYL5JMp5B1"
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
