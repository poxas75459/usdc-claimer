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
    "3KiNMZocNz7X9Wvcu2DQFPb4UDSHCR7u5RpN3f25hnMR1ymfx1tMA61WhnvudLsx8sADZqx7bKJiRLv4Lt6Vboeu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63mWAmsahTfmjufYZnBPQWgThkSnBDYMp5xQotDLCDmb6Z3yARghSfg5FCnqnPN5NtUhNAws2s79fVmpQ3bBVK4W",
  "key1": "2FtPCtsSoxvenY5kmfGSSqtB7q1TAtEyqxu81wGdHSJ3bwuPbuyzSzxqVvE9YKrAyf8cv27LSZtTxgWvRqeGmpGD",
  "key2": "2dNFwoFLmtQu8JWYn7NvP54fhD3wzmoTrP3z7ZRub4tD4iTRhoW1VoJH44dzgqoDKPa3b5Uniaxnf5GnsMEaincV",
  "key3": "3RupPpew6vFUmpQWMuhySqkjykFrgBJWracoB9GivsgkheLUPv9WL3pKcndEuk7WW9gSMeU9vKq9t5yvkdcs6tBK",
  "key4": "4HS8YfN2v36TYEgdTcyLz6gU8UdWWn38gABaHeBim5PpUkqzcdyKbSY9c5trPqcvYLt6FBLmbmd3oMPpEQM83pwy",
  "key5": "wxdM9Tmms3iZbfX38MnXGPgzPTJgXPmdz572PcvErkJS6FzZeXp56FowvC1Vguzq6Q4aCCAq67bv5nZJwzGcBfA",
  "key6": "oft5YAZhDS2opyFb4JotRV12P4hcw1GS432tEy3vFVn3RCeTQ2ZPxTnHp8Emus4tgeKcvVXBS6PiQfP3DND6gvD",
  "key7": "jdCvBmJq7Lhgop4ncgaE8HcJA8hcZYZiCMsfDbQbaYQDpR5RcvkwMt8LFXtFVuH6sCmCBTi3G8g8XnexKXXHVt7",
  "key8": "JQRvD1R2u3RmZk2VKqHwBzD11absejq4cjR1vqTxcyUx2PHbyNM8RS7fubf9fJbYjc91pCQN8hzVvpVp8cu44zU",
  "key9": "5nMLfmVjRsEcUTKJVdJ6qBn3GcQrg4e5uKjtta97vuM2kGHGuHGbh18SrSYDTyzkbY3922MMWkngd79h1sheHnk4",
  "key10": "QbZJEsbjuZZPvKHYDuchxmiuNaWjbD2GG73jHxMoyYj3Bebpbp5K3nmpk7N2whbtLLMu4SXmnaokpJ53YBdaRpa",
  "key11": "4DWctqGcZHSfJYdGJH2t467fC1WqoNtqz7QS9NpLQPVjHhkkX1m5Rybsz7U8NQmgQ75ixXx971SZLYr5F5ARYXiU",
  "key12": "51rEZzmHUbEa7GRYULUAZoijynUuf4BKjrd82qkvu6Z5QNb6h8W12aVuY4ucnmxtWRXiDDT7Ph9X4LTJVUUeCU5t",
  "key13": "5mVH827ZA1JCpayLLMeP3wq33Lp26R3uHgUpKeUwcZUirAYiKTmhqFyT6LXyufcwcjWE5vwUXkUWJYcbnPKkM1B4",
  "key14": "3QQu5jJEDHxu77LZbvfmC8iZyJAMmR8Q6kMeB62itJ8vmXLghpu6dX3aYLD2KBFd3Hi1QTxvsJeafLnLz2KjM9Bu",
  "key15": "4EoEe2vQT1KjJoShuVEBJz7wF9pU46uPimt5VPnMaKPGtEkFvMZXmj3PncLRjpDEMKoEg4JLe2UDyoK6cWCd1av8",
  "key16": "5PotzhWuXs8vR5y9gPpRfBDK5rmgtJpTBgeqz6WAdqc9UwsivAjSQ3fR9E9Kgg6oZEJG8Rt2hzyQQYanziXfNXCg",
  "key17": "5i4b4XuiQkhEbfduTyJSaJp4ThfLnRKocLFnMJWC2joP94hc53KhySFJbfb2CYaand6zcE7mpXV7w3rzbpH73Dkf",
  "key18": "3UsSUm9KgRw1ZYAr6iBJpj7p13sWtgTtVcoQifp8qG9nZtzwo5mQQhV1ABscyA9SK3fh1wPUEbrTCcpxpZ2iDsnt",
  "key19": "3cod2vspV5SYw6Rsh4vbx1E698YpYoMCfTyGEHaYsV8Vt72w9Bb3xKjAoj2RLYSsjwVWrv7vFrAGH4hDE71BthC4",
  "key20": "5CmkFSJjvCdYd1oBtsvXMj5G3fo63Ku5T1SWvCnoFtF8fjXnH1ieBAmhHFZMWpvTUEzGFHHZgcuQutEmRuUutcHa",
  "key21": "4FfHSS1vyHWXgAhqaCzWGodfoYK36MJGaHQ1YiL1gyiY2mPegp53k1rENq58jMM5krrCaJKporKYcB7zbtjwdQCT",
  "key22": "3MFMoxLxaUacTzcvud1278ttiGo9z3Zc1zMJksRGHF66aJmwShdjUnT59NT3rZWhcwD6DUJh5PBQyRQbT4JW7nB5",
  "key23": "s39S6xqawibVbUYBoELVxDShmjpmKMEv5GiS2UtNgtCtAFkU5Mk1ZxnaWaJavkkxcaDt6J5Dk9gvj1Z2kVCzWEK",
  "key24": "213cB7hVxZsSwFaXapKbGGcRRnRBqnNEHZaHv2DSribgoYvZSsp6MUhYgNnWbgDKm3okm4yC2yzNnwJgi1aYDHr9",
  "key25": "51TDXCKtnAaxwQpmyhJeup7GJYEizR6a1f2RLa8BjYjw3g4pJegcv4fb24Qy8YwB8ootG4imge6Q7XrqLGF6CgyQ",
  "key26": "4kCBzZ5A7ZEASmvBtH3KhdM5zCb4dGDbhWCMRPg4PfGMtRxfEMeo4huEPeR5URbJkUJtkKNGhQHC55VhHVAghyck",
  "key27": "3KaLQsGnSu9kUF4iRMxnHTmSVW3tUCRSAKY6kQP3q8EKJ9A2FLAwP2KhzRgaifeoosNFPgQQLbvCNQZHuu6NcHLZ",
  "key28": "666zVcrFcYbafXLPPAcp8D2RAhF2ZXcMAmcFZRXHXKcLdjS5u9WJdFihJQYKPSnFqAeQCHZFWHjyeK8DeJX4v3pp",
  "key29": "4MxKRAdnsUHJwpdvXCbcC92xi3ZiaA7kizycGaNSPK7ckKPxfbVf3JmyeufTDLttvbnGZFmheZBD53Eqcn4qkTuw",
  "key30": "2obWxk3zdroStLHgHNdBsAuQiE2Z56ozch5upyFhwSTyFqgouthtkwb8icv6HGgRMKg3sinSrt6pUr5HpNkYFTFV",
  "key31": "UyeUs72sZ25JrriCK9yC3yc2x6i4trwQRnboTG2D6vnCmfYzNYkekwSwZJZg4prjgUHxAT6ivSso7dbBsgf6e4Q",
  "key32": "aBLFJj5rwt1CDbefZXALoQXSC3EEcNTzB3HF84T7rCRn98AwMAMcDRwfrVrbF2isRPUceAHws5aeW379r1kGfws",
  "key33": "3hZ3qhcycEMmFeymQExGE9EGaC225cPc3pwBkM3v3RAPNnSC2CremomypdpRpse1iyC9kkjL8jC1suc8fASaDmCV",
  "key34": "4sXKW4426cPFRuoWUX4DrfTdFXyXqKKmywyvnpnBQgKHbP1LH3fdt6rFErRWEAerSZJ75jp8HfNLWYN5pgTuzk2G",
  "key35": "4j18vDBVX27McTQWd3bcBBAEpTEWatS8e8kJ85vrSrcW9c6km13MC673GbUYod31gZXwaC1BU8hPii2QADeZJo1V",
  "key36": "2aAZ29BKqtxPewVu4uYFo28NPBx95XQJuvcyKCynTYvLmAC2KTMLnaoBjbftMeSNo1qjMd2q9iyTgM5uKrDnLGZ5",
  "key37": "4aNy6ofCDz1YjaWmwJkgjhEw14pg4VDvTm5v9KAEwM2m24FFgVS27nqM6g1tiGm1AoR8QQsAkuyXxhHHUV1sDhHC",
  "key38": "61ny435EatcJ9TTEQ4i7Rymb9LFyLLh8pvAzCXjhTEMxkzJaDKrE3v5NmsKSPJH8Cv8v1S15ipigLKPFGTGd6zKr",
  "key39": "4TZbCm7bWUw6KnFGD59F2a9DJPW7WVAAbUox5Nhba7EwFZ3fNcLnVFWa1vTi3Sn4dsnnjiLXHKVuNQJUedMMfkhE",
  "key40": "5G78GAF4Mzva7Vj4SdeDRRZC5G64aH3YnPrQ59sTmFgKjTNXYHUEWF6jj15E8if8GfzHQ8M3NSbNjPsEYPJ9T2eM",
  "key41": "3SmaXPPEGiUbkrsJL51t3pUneXHkV75nT83MdWzjF5AtWMHEgoepopni4fxKaVULxNYB8mUDYG8vpE6QrPHxh3gj",
  "key42": "mKqXNJ3a1fqhiXL2R7DArkxkghUKsLR27ebH9BY3qrphqzKu1tobSZzssUvwYXD7vthsW1w74tUdfbgFwi5wUmM",
  "key43": "3EDkUnfY9oGu4aoBrGtdDxR6AF3kG74LVx3nYDgbuonGkbwv6mv5GtzsyExnVfZKeHQgLQbmwyfsuUdsAxBR3vE",
  "key44": "32cfY2mQyhzAyebddU6gPiVDCKrgqocMTLAjY6AFeYWMSRRKi3JgtAYvas1TF8tWQwdN4yPpqF4uVXQR1UB9N6Lk",
  "key45": "XJedMTzA6mM8szUXscUqQ7kSnNECf35jGLNNht4cq73UvT8cxibwjai1QfhQDCub4kT3AMvkTbMb14yEt5GqHU7",
  "key46": "5g32FpFvY6Z4UA6bxggyb8zieQq9onc1wUTMFDGMpugAQLnYh7cdZTN4jDjinDucP6kxxVW5Xd18ttUCfPBiYMXG",
  "key47": "5gcN1JMcrkkwjTUSD3BLEjyPyDSd3hTWGqNVtwpyy7GmwmCja71xLXX1hJg115E5iWbzjaLTzcy8F6Co2PYTvzMb"
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
