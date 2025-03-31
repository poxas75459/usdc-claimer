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
    "35QHWpYQnDxwgxbrAzZurx6s76GJ7svyT9RFwgBQxzzTVjESs9wW6HBEGuvqXaGZqtBDSALk9kCnaXabZpRiCwzc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3itEt4j9WufoZWFxCAXtzjaKi988P4zJX84yBvZdKmhYT2JUkfBzhTMMCc4MU8ptPsMen7QDQGp8GdKV5khBEzQw",
  "key1": "28xheDhgfMYFM2eGixxPgZGigeHXxXjn9QdfyoW5fvUAarB7eet5kUPenUVybDsAK6RUozYpf7ExxF7V5cNQQHbp",
  "key2": "RFS7yf8tNL8gg4qqgLZf3mxmEJN11htSd6LcMjrQSyj4cWNZYkGbxQe8FPX57yoCwPYn2JMDwHtGsdKR9r31vWS",
  "key3": "R3bDDDL3Fvm3tFqHAvBu6ehdce5K6r6t7udjtVhF4DAKP4FR3jqNmEsZzCoTiwhaKT6QxHebJXmXY1U8c4mbLKW",
  "key4": "4Gejs3vUpEj8CQTtFK8YNMmSTBWjsFpiQT6FZe57A85dhJjDV2nT3bHdSbs2ZRW8skMfKjviZUQ6mrhKVU46EAAG",
  "key5": "5krpQFdKBVusGvjVhzUNnd6RJveQoS4HtFGyxJ5VGQYCAdZo3LZL2pvvHyPdk5oSBkEesV6YhFpTYesTzQpS17zF",
  "key6": "5PyFy6oToQRMSsctkwCne9sxGNLSR67xXaijJw65pohgJFAkEhyUJ5FeggZqg6TFpu48XkuvP5Ug71EM8nAhwiEH",
  "key7": "2SMfMD96cmYPBPMQLc4ocRqwVDCnc12i5RpM1b2Gpsc13jVuLhPVyPgdVuSvtGjiBrhz5Xj4NTfcUdc8Bx5kcVed",
  "key8": "53oFJDTGqFLtRC9GKrF7fSELgk2CnCV5EjB6ZtXZggR38ahuJxZsEPQB3rraNgkFbXkyVUXD8TKXhrVVENtj6hVc",
  "key9": "PwSaKuDodDGLU3jUogzLqo6RqCF95xPqCjKxqnvjU4mdV9dZU8xK3cDMGtoWSL9TyowAB6FDLPZZ2EcdUQgNxDN",
  "key10": "5DJHc9TTSf3oF5T5QbApH2bJ4WgXVrdAtxJXHED23vgVVBXZhRMGsy4aEf9rzJpSZN9whgJAiKaxe65boyFLXXoA",
  "key11": "4YaJJzPQudGc9CzU5QaCgRDjoSGfzdmK3Qg5qNh6ojPvSkWHSeRLurdmFA5y4d14By24JRYMTTQLsdAsXcrrfCiJ",
  "key12": "PybgQtTfdPZUFr5zrXvsyd6yqn8TBYGDPe477RZcKqXqbxJuSzFd5dmYTdXJBugFYwzPQR8d9bX4Exp8rUUWKuJ",
  "key13": "2f6pCr8af3R1vNVVAZq47BjPysoXkqFgTZcWtWrpg4W4ErrJwSbX6eZ7N2BwhGYJX5nc2RXmG2j1WtcLqVoXujeJ",
  "key14": "e4NDqKsjKEoV9FWjXFx5UAw65DiwMZbs1AfaSnwv2CNZSLVq766mPSMvxvvHbYsLhJepA9JA2YRJCvedZhwxFnP",
  "key15": "2jsn8xff1y6eLrzeExVHaeoNRk1zMBX9KE42xZMBm842VaGNpebGmzZ5Ko8pNrntV4c3jPfuB3oH5kuU8tcUQ3yj",
  "key16": "4uQT9hLuRBea5Dh2Fer4DzcJceud2EHdfE2DN3UGZP9UrCNKquMPkubQa3bdj3CBC1kzxit47FTXNJ93NJR1c5X",
  "key17": "ycZQW8mAGeYpwqpWNyAErn64FCEhDh7NqE7uSC2WE3YFMvPEcJSMn1qZorcc3Hf7GkDRZTnQLoEddhxJtw2QUR6",
  "key18": "2HYiXBHpsfFwPuGfwKEwmN9fA11DNfHuJ9yBjEt4bhcnyhxEjBp9Zoqmeq3jhGH2QYBG8G1z9c3mJMJ5rs32eQHm",
  "key19": "2zmeEaHCvJFmD5ha4n4ycb1sh5yroJDEngfA2oLiKkPRf6Z1PWUHxZeSzarkEap2CJ3yC47AA7eKL7Aj7MSCccop",
  "key20": "3RZmWdfN92SFEe26eyCT1QAGK84J9fwbZ5zZq8GYLPDUG2yiQdBnq5z9EmU1FEa6yDdTFV5uu3TwKbqAsSzww66C",
  "key21": "nuUhaP7AbKrPzQHhHLCMSryuscfkSwb1D8W9FJQpLXP8XqQ5kRe7GYYrsC7PUdDJHsqCM8TMueLWHRWZZUDWMQv",
  "key22": "TrHuik3DNnPmRqKXkn2D7VjxF1Sq6LnuidAjvwzeLnvRuLk3r9j5yqj2mEhkdzLFwyVbnYn15priFF2Bsnu38qV",
  "key23": "3oTG37N272Wfbwu6jQrL1waQynLbbcY9pnBoTyhLupP3GdDEcZQ3G3YikyQghVLpsWpRYuTwMPym3p73zqrAFYZx",
  "key24": "mVtfS1L2nRENEhq2245KEPHXMpY26Phcv5tJ5zPGs2Azvo9M5vGbR8Eqouc22GokjN769W5kTGzx3APUo93kkRQ",
  "key25": "36E9kpHEpVwF4Bmv1NXjnd9b78qH7eoSJPyvqXXMHF1VrjTpdixxqz23PC1fv2SoMoBzcseqUHHJWPjs6RDpV4DC",
  "key26": "2u4RmwDuHA7PEX1jXm5ADVNL3eBQA8HRZurEQFKe64tZ2UNqC782uBpdQDV4f2LD1yU16Cba6RQXp5WceDsq8gWr",
  "key27": "45gkQzouqMfycXfmpxAjnzkThb2iSuk2uQxXAhQbqBewFjrngvMJZuPS2W9XiVzNbzRDsRsZR6Lzd7GtoqJtQah6",
  "key28": "GXyE3p277yiXXVezDeeDMysxa9HV7tcMVNVVrmHxHWTHVfaykbgeihLEdbnkJcuE5GJNbmJ9aaovazxAMysxS9P",
  "key29": "4WyDTqncRK9pcT1o5tznyeAvb85RhnoFkDyZE6vkZhL5C7NDqeXGN1zGKodfb4SWnQYyeNFHAvFCF2Auh5N1gZCN",
  "key30": "3uKV27GeN3XUGXV9HNVqwSbNRpw8wyzjY6oCkMozEASaPH79pV6Sd4qp1HQw5Ws2WXfoDxCHbVPbygtRiJhrsWcg",
  "key31": "NH9gKD4KNDjRB4r8rAziTnUZT2zJYhVBmjAxspBbsqYWgrGWNtWCPMyEZEUFCJiWwK2ej6XYvxqbC19CiYJ1uhF",
  "key32": "3ytuvAH4YdFMGc5iaboaZBigofFKkDbngAAdzFqnhFf62pYt36XjkRFvsmAHnZhDYkUyMKW5xgGTZXBYqqKjBMbd",
  "key33": "4rYBs8XqCcGjtpFB7rmtcqpmL3Z7DfxXhR2ucNEv2bAHzQ4hTBxKhbNYjf3noZZFwWGSJLRxvMavgMyVUVXQY3Eq",
  "key34": "5W5bTumpTCqDJtjwoV9zhzZ3VDDdt8VLdvd6uSWLSf4Viwi9UeRFq6naJVuj9rDvgG8z9yLNiJGPdrBgNc2FU7zE",
  "key35": "3jxa4xBcfBtTbDGx4mVw2omUThhs3pTwa9nSzzax8PdeoseL1ZQvS5dDByJN38qXirRCvjVKiF8B1b9eFg5QaAAL",
  "key36": "eNeTGrJrBMU6bhVnQtCEtz6mxpX438MmSD8EGmXudwYcEx8cjMUjPNKgLk88ow791rwMfxYZos93Zn8mypdSMqi",
  "key37": "5YURzCnq2tQSGGr6Xn8XKpLgjTE2i5dAhLTC53TsW2ACon5iBUAhgKhEPHiVcV275iWr1dqp1QZ6EB6kszu6U7Nw",
  "key38": "3AJVDEsW28ZY6URHWg3Lw3j3USvGkLixQTg4qcMTE6B3SidvpfrykLnDvRQ16gaUndArDFzUKPmoueBjmh388SGY",
  "key39": "2UkicC7sqCAsQFRPgBdfhw3tbRxfwii1bio11vsp2L7jMBJ7CMGY3Fdxkzb2xrTyi4j7RRBTJsgzfTp7oqtuVodR",
  "key40": "4Q6BYpVAbK5kCv7arVtn7uM3ictnGXBKLyketCYb1GFdtibZNYC78UQ6P58HWFuFeVASLQh6B5MHRbdvtenSVN4",
  "key41": "3MSAKHHoLfp8BjqX41MSs3qcPw9vdQDkSBF1Ap3EeEZ5Tya3zMw2Jz94GaE8Yf8CWbem3qgxH66yaRT4CupJXww3",
  "key42": "4YskzUjDKGif36K7zKDokMcwM3Bg4LdFYHK8VJpeHFLUhggLkC4RvhALZgL1iwyL6A5LaJFgX6kmmkrKgqnCtLHc",
  "key43": "4XBf6HYnDEgjq5Xn9tv2krZb7aquKWtYRqCUDbcwbYv2fX2wwmfoqugVneb7BM5rqHfxW6Mio2zbTP7xaG3NNBPt",
  "key44": "5QNkc3ugGQD2ch5TJgrr81Ki41kZrL915uSj6sag8pTBEByq7TypMkn4DxrmJZ6zbHxTngp152faoSsaDCFQmD3E",
  "key45": "3g8aZReRDEpRMzM8f3Qf4kzw3RX7gFnQNVBKcgcxuyM3JVukkxMsEC4okvfCikaos8VNyGvtduq2ydoqFQNML7W8",
  "key46": "3FERkcQg834EVRWZke3zGiugnR8PWdHirvcETMufL4r8NDD46ZTzxKPaKFRjAADbwQhmb1mm3HH5jJvACiz49bfM",
  "key47": "5FBx9NvmiNhYjw1Nah6MusHdfTgHxaajKRswz23kfgNfhZn6YehWUZCGcE54d1MmSmu9wEo2j9YwzZueyAoEVi5j",
  "key48": "2xh7nFhAxqYMXyVdiFFaXRQbzZ2RGRjw8d2orUKhHQmhfHQEdmie5Npy5v2ijEQBTBvyyBwm8Yi3x81KEw3xFJhH",
  "key49": "3p6g7r32HoG9NRyjVG2Dgjab5SCK6KV3SPLNLBSHVcb8Fsiq3ZyZNxCd5WWNug17pZR8YFMQJuDkFP9njyLDiHcD"
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
