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
    "5LgBLnRHkKi3h5DLVQuZMsGogJPDRFELQZj4hrR1pC7zFKsdNTbFezM3JzkvYwku5ncFdPcY6vkvxjWGoZUTwQB2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ftSvujQWNshwEP2qafukEs4mJEsVu4owxQSmcHfHUK8wAH9mnu5wUc3y8JUPUCkwtziiBVgDvfRzp7LHiY6nRVV",
  "key1": "49M6YKFJwFzMa2bu78RWMTcy4qhbuQ2HrBw9Qe5B8wdizwwjDPc5muoAxSg779wiiMChfLfMtU3zifsmSpDYT2oH",
  "key2": "5R6Z5PoqHApjEvho4XBCcfvZJBJUC8Zt4RoQf4k5dweJ7kXmpdfoi2USAgSSapgwUHxTNXnrwwtcvy6XHqUAyNKt",
  "key3": "uNTL6ApU3WxYjoj6PK6Wy2zoD25QKLfoBMdAmAi6FyMy74e8ZZPvqdLBWZTaQb9J238qNd1vqU3D9wJgLbQDtJJ",
  "key4": "43QMdKpUbkqXNcAwkBjnkEAgBeu5tH8QutHqmMcQcH43DJH2xYq8DaET7NT4gPj9fguYrQQi8mediS1exVmfwVQE",
  "key5": "5nHpgLNkYGp5e4JiBd2DjADMVgG9BGbpNnzBBVU44c9rLEkn89mejhbG3bNdwfqd6RsezpkMw25L3dpnMnvyWAJx",
  "key6": "2iEv7pTj9iGTbygJ5H1k4DRMDGjXWDXJHrYHyP3goFwgQPnvLMEf35PmqKB3hNXnai8NUPvVdaZNfKZEFRJjEqwu",
  "key7": "66JNcM4cjbPMY2QFpc7Ta25wBQjTHWUC7BKtMMBQvhE5o9x9HqsqK3goxVfEdKCEsoxRq2BLn1FnpTEo5FxX4fDe",
  "key8": "5LCZ2X4398KDJ19uKzEp62LK9KEn2TRqBHS16vxGKxY58LXFcb3K2V2uuUQQpBesBQRFKMcSAWvhUMoUikVGxfWV",
  "key9": "3z6NL6ADDzSKGnixMrEgEa2rPeV5xyFtsczeiaNdUmarjyjsPijnyTmKqLdmZU3bKJDpoVKvtoLeMJDKnqSyFgm4",
  "key10": "5y7TSh7DBDuuJat3r65tezUvt7iHWdWzWrbVpSH1Ud76Rs6SwRpNJM6BVTVzuGZijcVrCSB3soUonjXTFwGtuvJq",
  "key11": "5x1EdnDr9353zfhDQTorPuQH2HRtYm7phnpbRisCazW84Y9nxjnGyZqqmVGLqs83YaAF8d2rggZ4KxFPARxUL2Qp",
  "key12": "4L1Ygh7TkNA7CkNHzjbmLKjbxD9apGLhaAH8XUvc4MKzXFawr99r9XC7rykW86KfQ8Yi8btUT2XJLaQLjxL3XYUj",
  "key13": "2xEb1Wx3ms4t5aDv6vBaGsooca4NkKDx4NmAdL55AhwbcC292D8fvVLHQR18mQSJzsT8xTcYmipSqXeMShSpboj1",
  "key14": "5F7j5q7gE3RCzWB868egMgmJKUdpm9waSWAZHxwSR24XDk4G2QDczYzy6umb5AWGoHi3tFuTgRCcPZfggBHBwCyw",
  "key15": "5N4CWy9gZfchkD2s4VvperRPX4h4xDZLdTq4cRAcdJ1JwtYkbQxCqo5bNz27QubfkwAVxm1YWNxPqp46kwscNrFx",
  "key16": "3vmsdToeDDz97PdbukPaPdzhf7tSD1fZXbJncaKUMUC7kWBbvFnGXcXBwR6NoQEmqBNsVVsgRyfZh7wcSQnrR41e",
  "key17": "2wJKQPgX7dFEAJqZ64NLvSHUQozMscTc1aRkiRaB41botAT2BhwCyhumDg5MEbyzvRyuGBbNiDQz56E45GUWP7Kv",
  "key18": "4gTJHgfTfrx9NxrRh5djyiJDb9XU4MDUdvPi4xYGEutbyuRC6W7vV8pb7dSEEjx9JESVXg1ZCNRrSYUAxUknn8p1",
  "key19": "5mHPFqjLQsg6L7mNVViSRKNtL36J1eDurSpN4e3zErhQackfNzsAzmdAT5mxLKDrkB2rqj1T54Y7VB9feodoT6SE",
  "key20": "5vJuC7AEG66ebLnaD1tebKAqA7HVbSSU4cEaBP1TgPTnCLqKCcagwUbbfZhmzNt7hG9z3RWo8vCngPkyFx3HwWK6",
  "key21": "2hbbvr8koSzFiifa748eyXNmcJ5weB1QjYUfF2Ft3Enjdu12o8cy4NVfwcAkgVusPE7dE8MMT2HroLXmroTuxjMT",
  "key22": "5wqr1QkWZXQb9Z1yewuAZGqcahECQpzCn2twhtFfRBz8uimMdTiSQ5DMTpfY4yGJkWpL4v6RwXG5suH9y5TezAoa",
  "key23": "4VAfKE1j6w1VtyY55bUeCkQ3oXJGr56hXy1mSG7k134Lxpi4rp1Hf1nqatrMeB5ubjj3bMcEE82CYH5GPA16LZkC",
  "key24": "5fUJYJ3W9iNMGtR36iwf4YV5Puq8hDe7cTDDSzncFYLyXA2TKPxTXPNoZpbcM6sVrvB4r86vUzNYy3SCnY9wLG9B",
  "key25": "4rb6mhsiszdCxG6mxLMeFeqnmFdhdBZz9r9PUjYPrBwfCUpsUj9kj5UwYrr211N2ZPAW7UZoDNjNxT52zX1obvRu",
  "key26": "VHTjcfCRqj91yU6V1VCLDnrDAL5JUXZGLa6GQhack5yVq7CPiKAMAZMwad4VFPiSLThUmGeYfpseJuP3H5rG5Dz",
  "key27": "2CA1SJoFj53AjiU4k6zMitDdD69KhgRTYoPjjYVbHeazx4YPUg45ZWLqNTqD7UH9nvgGgXzja7ApqV1KimH1wWnb",
  "key28": "31aFtugcjnVWVmgYgXWANYgqcAag5QsgkuDUjKqWLcL6zdgGXum7bx4bVwne6VZ4LrRShCmYKWXoRnhm25uujUBT",
  "key29": "3G4R5AkaDG42neDS2hdXFH7aD25hki2tg3hLC13DPCKCJ5uziw5kpfo3tGNvEp57yY5md8oQYEaaCu1KKsEWF4aV",
  "key30": "544fXe9dLG6RCtsG56vQ5wL8zd6f6t788hHdEmWySKQju6QC7tJ4YMLRF5pjDcNqpt9UM1wFsK8Raxa2j6bWGJwi",
  "key31": "gF7QcUTMfCCRbj6DT6xmk24zxjGDpimVkCoXVj8gZxiwgJYu1vnXAMiDk6a3sw41YFuqBPK6hsiMsPLpzKgx3Vs",
  "key32": "ru8ZekmSQQGoJkAyVU9od8Wjrmyoy47fXnyswY2ZPTuCW1jYKai4s2Pb6YdkHsBaiHF1L6YLCsz1Mp1a2CK3Vjt",
  "key33": "55uKgWuy4nfhZGDmGfe9ekM1hkpzk8Y5sFvoKsznrTYXPX5nLFkFTu4eqk1e81no48bqM1Hvyz1HGjqhrwuc1Paz",
  "key34": "2tqS2y92rHGS1m6hmbpqmb6J4Nm6EGPMMtxU3fKzPm1vngKxyhpzrusLXN4hR4hjaUThrSDx45wvqUCBYYJhyZ9H",
  "key35": "2eVXR61eGnS3wutnAa3kufuRkrX6BB62tBUd2uTHXv7DD1eofTjF2Hr2EUszwkwTcKm9CaiLb1uCPMGtX65VHBhw",
  "key36": "536qjjuM4JqKhscSXgkzqf3NtRthajwc6F6Z1pzsXC3KWjnJJ45jCYQQpGsRjuFaRYG8G1ZF8fi2Btw6DE3QsVhH",
  "key37": "3p3hUdBNhB22hszFU7vBxFbzTCka1nZC8ifMaxkh5xnbuhLQVKs35AHVhk61ehxmWmiAKkLiUEdbYXsz2SHUFRQc",
  "key38": "XqXbaZEf45KXAypr7RZSGXaV6i3C4UhwSgHtJpitWBNGsydyeUjxWrhyXobcdDEGcTaNbRPcjTeuKqymzBbiGrs",
  "key39": "5BBrQoWBEHkgejJjvBAXvtX9qfD5g1cPq1VMfA1PhWRa16PPPrg4qV4eMUPTpvii4CsiKzxmiBJbZSzsaBsCPP5c",
  "key40": "3R7oQrJhnHQRrTtd2g7cGnwiXNdoMr3T9w8kqaWZu5j9AsYGrJdxjQqsVgQoFbL1vJfKQzoHPxqBZJSQ5UdpcBRQ",
  "key41": "4u5RkDiv7f94a1spd3jCLhsC4dL15ooGVHYAUk2M3fSaXBDBFQyMCTtYzy2w8gCKk4C2e69x72MVuYKQoxbnxqnK",
  "key42": "aaFku12KLP5fdefQzuyA2VFgpX3oRXqUDZDXC9fomYjf9ZCwP6WAUCstHarL9CcGfGCRPtzj9ZPaSL9FvJ2d2u8",
  "key43": "VYWkM8dXABtgDxPRzkz1ej94MPZX5p4QJxePLTE1oW2MaZCfecZC8q12ZmniSYgE2iQne32m2cC9dws9iti1fCN",
  "key44": "3Fv2sdveSDqpHRrrmQLoD9uwkqkG1MkzJ5tgpMf6ExYUjcP9nvrpw58f7XjEZ2zXvyob22oHpbaqrdZ1X4rQtSAQ",
  "key45": "5qr3CUNfGgPoCHkNcVF8ts7epLU5Pd5DFDfip6osR8FWdSgyTJX3M3GvpoeN4BnvYXw9F9fxDFonWZW2HX6oKABe",
  "key46": "3sJvPXrzc2MVu2Y1PysgtQU9k3LaAjSahapJYiofTAxb1h6UitivVF5MonjrW6Q8fFARnTaYZqQjgiwcrHqzY6AU",
  "key47": "2fr3BcgodveZwMyz7PEA8fn7q6mhAPRj4dhHpJkokBBYuruJXFVwazPaKyPxYTQkzyrzwFMN1nburJJmJRKnEETc"
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
