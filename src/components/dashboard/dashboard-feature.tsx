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
    "2tS2NgoyFApH9G2obn8LZZaKSdYhjGrYZvTNc7ttL5h7FBKSu14P247NTjJiBFLmbQuh8ZbMeMeN42uxa1NoFEr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24yTSNHrYxK1ax9Pr8AtSn4WZ4fUbsj6g1Tu1g9FkQaTVvkqmR7mkJUwF7b9MEQDnTPb7TkoWsyGhwwk73UM6Nsn",
  "key1": "3zEM6Hcyqh4VemYdGMxtgNvhAv5iHXP4VexEsLGQaa5B4s1boY6UGEfzu6d7gU1Mz7unY2psj9vYyjvxtY4v8YLW",
  "key2": "roN5bCYdoq5XW8eyJMBhhn8AoGXgtBr2kXr6DXRPBf3bahbbGRqqCY42VjkydREz5QuFk8cV5qYEYTdPeNRGWpa",
  "key3": "3gHJJpG3NnYmp5Cgt7Xv4F9kPDpQUu2ZE4LRBbvofcC2K1CmPT5FTwGXZnbEygpd8gjMsrAJe6mSe9YbdrbxDNnJ",
  "key4": "3wmX6fTT27VvrEAZzJsVfsFN2CwSsWQbAxKotWE3yZ6PQubjE6Po8jKJrUW5t6mvbfhmu4Jwakmvgvx7UQnefxuq",
  "key5": "5RzBv1Vg6XNMVcKDyos2Lnd9EgHiRcxLNSDLKF4VjaCg94ZTEQyt4B1NE6e2eFtBpBcH9EcUYpvoDLHBVDTSvvC4",
  "key6": "2p6fKAeKFEa2NQ4TWaB5n71NMuPTtxBE6Kq7JdqenE8ewr5UVZQtauxcxsJcYmCQHoFueUz3S5hZphr4WAzBCS4N",
  "key7": "t9VC7tqBf5G6HNCPZqL8mcysaRAg5CACaKVj6m5jYNgZ2YEqyXwWA6a8txpuT7m8NeiwppCJYUq8C7pvoeBVJqi",
  "key8": "5U6SL7fZWDu3Rq4AMEKAv5kWKH6C1Jaw9RpmKisNxtLBx9vz95zwQ2TS1m6nscGnhCuVEMXwV4WH2ZnXrG2pHPiK",
  "key9": "5TwyLgXpyrjRP9CAtqmJzM1v96GunHEyHQUBhk5RP1kh79SmN4nPbfGwr7iu8MbMUKkznEC3uLQExT35ZYWtv5sz",
  "key10": "52CuvimiFx6t2rgWhUMoDfdXCUH9tknDp4Kt99ZRzfbQKJCcjWkdyZE1x9XagytWLszJK9AmtmHCmnNdp6ASh1Q7",
  "key11": "3b31vnaHCHXAqywkJQu3veofEXhc3tkG5PJApGrsqERLvMvFahNB85Y7qVBra6gMtfm13Vy2ntKkTdiwxVEfEHQv",
  "key12": "4SyKjpQTTkK8s77ZbBkH1vqq1nWYVsFfCFhFWD6HiKfSrC7rvgBSoY3yeBxEf3Ze7GQSGSmiXkbD78nHQQBEm8A2",
  "key13": "3N572EVoCSAobzoN5boB8pEnnhruLabWGBcudmWQh37XpANGPd35npMBbPAfCtow1UBAGuukbLoPbrw7RyhdcwsN",
  "key14": "3sKxFgxizmZv6NaMqVASHzn8NZTQ4gryThaSCDNYdqdqKr44Z4EgDAfBcMnZJhpLX3Cp9kNHR2jeAvYEimArpY4F",
  "key15": "4bTSArfCTFouqXeYVsLZwRiQeoHXpaSKdHCbPFsVcXJELtsR2hKR2N7WotXWKGRUphB4KoUTfVmvyp6wautTebFW",
  "key16": "5uUKLjvFzYMiNfYuwzfbwVrsuqCHfinNZ4jz5N6PcD5YFpV6MPrhbBbXYRBA1UDMZVxrtWumcLyQbzTazXb9Wiuc",
  "key17": "uA9Z6zfVUb5eCW96ZvkE4pXXeTPWVJJ2SKR9UerBNwj5nbQdGMka2EazZz1RspxLJKmFfBj6XpRS7sh3M9NXVBZ",
  "key18": "3dEhX7268ShXixpqvoLLnxShjXkubNBoeCzej2HbAe6mtXKAQudsPyEUa7jP44CDoohpec5qZUbvpEuutYdCBykh",
  "key19": "5qJAXFLPwWqeY9rMTiyDnCyLLv8FLNGAEZ9q6Rnp9GvD2MG7NvCeFAEpjfpRbg7S523qZ1duCdrCn5Tos7o1JRp6",
  "key20": "XEEWetQW93Dy3BFAF8rPxH3Z3pSHBkB4QxzbZzkCkQqxLcWnpMV9xrpTi8JETg9HLzSvPaWc4nbNwyJtRfcE8K6",
  "key21": "4ExyNFkm3Eq8EuGHZ7BjkexmMRRvFwFu3tGY6bbrCiCXGKx2QWqongoTN8MHMCNuATByXmh6dQ5wDR7bAyQFmA9w",
  "key22": "GqNhnpqYXAL5whsH78vPKFGHdeHTeqL15h5ECgnZYBd5XrLkRszJKbU3VvAGNkjpRNTpoy7jbQP2aajoPeJfuGG",
  "key23": "3SdRf7wn8e4PSzZQs8gP9cgheN68sbrFBttfHiup88W7yeN8zd6aCP6G3QiLjZhAdoa7Dgs3pHKSGRwDKsmek6At",
  "key24": "4pdArAQmE5hdYzAAXrKogRgnxsE2TzYVjhttsUKsGf7A1kxQAV76HAHqUr1j5X3EHLDbttMMNbdR2yUZKm6K93C9",
  "key25": "5rTi8F9G5pwAGx3XEY3Rp6k4uA9ZxvsV8G4wXgvJuzpm3eXkcoK2u65PT2F9ALRbXuLVQsWjqEC6MvvTgPS54Wyy",
  "key26": "38ekaXpoUKy8k9vYwLw8uTjfCzTMV4Gqi7t782h6L96EDCdm73Z1jZ5tz3LxCFjudhW7bpw5TtvzJa5EBunb6Ub5",
  "key27": "5E19hPoUuy3mA2xmVQBJkiSgMePGE8tv3QtBhW8px8UN7Af4joBgd7XNzGB4CumT4YKb72bYJMyr1QMC6t8yWF8w",
  "key28": "j8Aj4sR6VKcamPB7qWR7pFa76GA7WEeA7Rb9HWuhXUHNZZVsVxQfJruwHeaZySJJF4WYbQgyeDmx84gervwwxHJ",
  "key29": "4M2bGc2wWUDiLq2mnQJfmBotrpYo76nMErz4toHSyaEktdg64a4fVKH62eAeuqN2kf65s3Y7nVbQUQBZRnpxXkwm",
  "key30": "5wYpjzoaoECJPNvYpb7V9EEz7xpq53MNHrCv9SYajdQ4C3pUxSS4Wh48HSW44s4efp25WeD7dkYAQy9UawPrGdfu",
  "key31": "2acN4Q4rznGq5GxrJgmy8VukyT2URnGCysSVd1skEEYED2hFBBsRKTndT2WUQay7Lxkm98Uw6UEpj9xMyJ3s78kc",
  "key32": "4i8uy4wwuNnTvEc1Kp474CAwPHBXgQtewqP2dJY1VN2w8jLRnVUas4VYrFMAMd9ntWKTReuBT2LpqaySEmBMdnNB",
  "key33": "2X6yynXEoBQ1XM5VaPwTnRxK6KheXAsRAJ5nQsYuq3X62Rk2e8pR6uUiA7LcK4ZJmxJk5WurPTQkFAtmD6ZpbLzw",
  "key34": "3tAGRmyXGwvswTmoxx2JVCzMUVGuYxG7z8MJbKLYq1r7QCBKrp6KR1QpyApfm5W6as9Q4dNoZzZAY4RPysRfNrGk",
  "key35": "31RTyjV7mBihfHt28gTPexnQrLJ2JFstiAM1Wznz8WmwXgRSAxruLh6W4qYLQtbCWrpm11nC9tEVnymKFo5Z6hx7",
  "key36": "2BaseyyPr8nhNZVAmbVYjtfLKaq3mBTqeZF5pvBGGDLRZQi5A4QrsTBvdfDowsmd7A6zUKCVLsLNAUeQ8H7JrahQ",
  "key37": "3L9dEt2sssnwdUbAWwQhCa2hggszX7bfar7U31skgCQrPeyuirVkFjqGnVrV7FMhfP9mGBnc6pdoDLsWZ4ay6vru",
  "key38": "663h31TWsKhB7Me3hrQoLsxTu3svnLwH4GWqETa2gEwuqSUy66wEVSh1knXAT1JpGo67rL6HYDfPmWdwFSVA1ugs",
  "key39": "349fVwjeqTZEfXZDV7DJG8oeaob2pY4CGZxXjTWC2vRHBtwSunZj2PyH7Fu4RrwefMU91dgvphaTu9mgqCQKHRLe",
  "key40": "3fXhhTm7HKkrMxs3YRwQvFrnp3dEJGKJtrXxSrXGji4JT72jBhbaAsk4joQDZHLagfk5GzgJhsYXRLxU3UrU1Ues",
  "key41": "2YtfLJfuHNGSc1D8kLrNEVMZxMNoRch4Nm4pnvFADCmHhSxBNbyo27M3VGZPGwc1GQ3dG9bPuY2FMFxiBzKpPkwD",
  "key42": "h7hM1JoAzmeLn9w294F2HAiyVYzSod6QmY293Xno6j9zJuZANfisCL5kXnHvUtcrdrR8jnrnzLs2VmtVVuDnHaB",
  "key43": "2Tgg1BGgoMJYkfEuyrC1TUehxHHRBVvZoVkyKGhANofX3QYAjxZEBktsHxMRXFg33MnyrKHXMFXKhB1ZnFkssuky",
  "key44": "56DEUSPXtZsTU3WPDBZXrvsvdo5SRMzwCaPokxmqp3cXK3iCHWhyY93UxgAPAAKPrhzgxuZLgPGzKqtV1mby9xXg",
  "key45": "D3kS53vDubuy1g8tBGpLeaELE4PJXvijPhwawNLo8RFe574xkAiSubAGSd2CwZmfjkzDJKmpsuyyADqaQ8DDvcP",
  "key46": "5jLVvBEcMp1FnwYVfUg69ivF4iKiBiBDCh9CQMAULmxpoyiLeLYtTSPeDAuu3Q4WZ6AJsC6Dt7Jr9KKkvS6npAHZ",
  "key47": "4QX9YXbabHoQbxSxYstAPNmUSdowHYQxeQhJnxyuYzvsdkZAmaRE3zp42AmXPAeKFChckoJtuqeuDWRXV9j4f25Q"
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
