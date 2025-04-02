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
    "44ei6aHR9f29yveEQqjmvXtzZRAsTwbstaWUpdPnQA8mzdANDywpU557gXi8GTPjZ5dJ371kkK66ry6uyvWTXfoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sJyKTjiWkD3Fzp7sTme4JiHCKvsJVjiCoggVjCCt8KBcbfRPY6ipCC6L2RmuJWwf9Wi8wsHYhdyhXzewfSi3AQb",
  "key1": "6WMTeeaZ6WX777aHg99Fbv3PYoytRSvJJdLwttb7AdDg6XhnGuoSZt6eLFWV7kfRi5SrqvR2mdNSFFkoeLqZBUa",
  "key2": "27aPsVXc8oPQV1azmuhoJuL2FagiY4JJbgLVNfrGpiowFFMQ514qBx2RvBtCcLygkjJHztqFZUAsv1Qkt3EzK3we",
  "key3": "22KQw8H4XJKB8YmLBy3xTp4u7dKU97XYGXddqVoHRhrYWny1zuhTtuvhMfzwJUYhSjaeJDx9BbVBP7zUZWvXELdT",
  "key4": "2ANMgK58A2LcndoCQyipErP21L7gRpuqHEqSZjycW8Br5tZ4akN6HaKSGv6n5z2wndkpjBpg7ioQHnTNsE7qA7ZS",
  "key5": "4XnSucpJL8LCf9kLV7YGixUUUqYPYMwECQtsBjfuY5L6FfwChuSYPVJtxYMhShJUnnL4SDgoSTMRcsyRkXdhG5f9",
  "key6": "Qq6zzLPb8zvENSHtydJiWt3Th7CXEjifaYxKjQdYfSrFpaGPAjzQfMw3WArP5pES3JVNYmzMs4sCKVGRTaC6Xzv",
  "key7": "KFcFC6EeFia4mZHr1euVkLhtfKQFC4EGZUGi8zzf7iPBWBnXHGYiqrxYgv72bm1RgJ41r9nULYrUagxDCnJGPjh",
  "key8": "2wvQpgK8Ka2JSG7tZuH3nCz3HvqK2we52ZedzUUxEJZQwLVTzCPp7Zz1VLPhUi2D8YKi7U1th9PDEUhktbg8mt9t",
  "key9": "4udhxkMC3rNMDTkX2maEnM7UBF2iJuToGp478r1FikJqWvxmnF3das9DaRk9NxQoQ1fNswni6q4b2Bx6tNVkEh3D",
  "key10": "Hb69kpaBjDcoBAYZ9NT4gak79QzaQukMoAin4SpaviHu3fRSE9m5AdgMoGCmKBCVJUyAAQcShFE59JN2TMb9fWx",
  "key11": "5Yu7Vyf8rjYxQkgiSqTV1eaKrJd5VicHR3HDzZqjedPBjYExo2SV9Eo2KckVmZNPBrsEP2oqoDZBu9VxSuDx68Hj",
  "key12": "5w5SL1ynyC9mDh8odAankE1fSDDx3KaxWahLsLJHBywZ3NS25McTrPibJVzgWFEYZg9WywKTYBYutGMkzmWqCsXa",
  "key13": "4CaUXfVaweJ7TkZrxQ9jG7CXUBPJZY8unLHWTHWz7vmaNhZdA2WzCBVnfh41vU2d32Prcqxv183YD3fCawpcf3MU",
  "key14": "57rXJ7rMrhyyNbFVDQBoJB2QJnptV1DPszBt9dvb2ampbmN8FksRwZAbzsU9NEEnqcLNFaD5Y77zSGVyovahPDLg",
  "key15": "4CsL9NTWT9zC1BMqCtAJf8AaQVorD8pGZbWDPnDfBkqkk995ujMdYJcu3h8BSTZTiuwUMDMxpQgiuBXufZa1jMNT",
  "key16": "2vtagWZEopwT97KAg6VRkPV9dfG8b1h3WCTX6dkbMoGUzWDWkCzMXry8isg6MM7BYoEmsiChe1XamCrFAhXn952i",
  "key17": "d8QpgzWdGL3yqSf8tjTbEJ1HM82LN39eNjQ5766L46YpGiUVmY33LDo9wsfnpZP8MUJNVaKJycsBAuGZ4um6xdQ",
  "key18": "5JT6ogMhCiPPdoDAGFwAhpoobV3DzGjM5QroeLKV7ZYbTYoCZcsDAEqQDRLCbNX4Wx9qKNkKAgmdwoAz4akMSWx1",
  "key19": "5RAC1JWaDqXv6dHkg8mEWGwAftwkd2cxALtqqL7v4ux1d3LFQqCPui6QnkYchGEdDJTxd7gk1pdJomHwCmqm2tRc",
  "key20": "4sk24ugyRDEFU12XGvnd7ZWYNw75nuteqbDkVJJ8rutWz8mKfHkCyyB2iWduRFgqSxAGMSp4EFG6GAJu6nqfzg3v",
  "key21": "5as3wAQLbm3LcQxy6nedAnvjwfYd8RQrAX2dXBEBaJEHrtxfAAUkHZwKvkUBH84QWy2XjBMUYhJUmfTkzxfzF5tS",
  "key22": "32MP5edakFji8nomCHoGU5WrsQx4pN8QK2bacE34x6fAdnzwvU9oeqCxsJA59cdCaMSmEqVyQw2B9jeQNN1BsQ5p",
  "key23": "3MGFuarW5yYM7X7geubi2j2MpX7Up4VYqihXLiJsJM9mb9rFEbbJgUomvUtdKw8sTmCLiJbhjuiaqY2hZ6SwssDJ",
  "key24": "31Re3Vb2pzZ4TDmmYYsHZV1PqkVud1xHYexCSUzFXvB4zZbGfogABMLznaA1X2QzgZfdUDfzn2Grg1Xb1wTxEFyv",
  "key25": "4y3nBoBfVFjRNmABdMCha8EP16mMpJcf7kec959aPdbfcBUbcc6BpFLosqLdqPvRkncupgmmpXyyakj2Eu6QSwTZ",
  "key26": "4Aq2TJwns4DXoVK7y39EqHCWdxDnC3Y6tcfiLxFRzrwkXET4ZWi8Ug7HL32FiCCuaaxyxXeqKpGjdJNPH5q49Mf5",
  "key27": "5wCumVakVP4zkUfDNamXPZ1Us9gjpjnAVvXiCbn7Rk76EbChpXGe27YshoMo24548DUvLXCTNimXWytwr8WVuWwD",
  "key28": "hV4T8SfoThGKqAXu9FPuwQFr6WCEk9fPazm4JaQhQmKhEJg7vwzKs1d4epnvAZ5buE1MNPuzHRzKbsdtFDui6m9",
  "key29": "4zFqA4vhPnbqERWbDaV8YCYQTo1QRLxXJHewov1ezDCvhdd8PJL3wUH8GWeMByjbq3h2xjctwSXpgYYMK45dY8R",
  "key30": "4isBjgHWyaUSn1iuF71TjotiAwTT1mcCMihQeqrBZVqjrwK2HTSD5vJpBGKEK1JjhaPaHuFF9YkrhYjTjZYzijXM",
  "key31": "5Se9jbN4AVfxx5ks8ahh5kD3QbBR6WEjukLq7yHtbvaBtAUDoFTFrBS6k2rivanqaeW11jjyy9bzr4xqauuoErH2",
  "key32": "4YbvGiX24Ajx16x5SYkasWTszbi9rnLbFCwP4DDhgTcTBj8dYphTT6GSQtNQJdNux1uoAekWodFbB3c4LRhv473D",
  "key33": "5dddX1xZQBjSf3WHA7gKDZ7sWaHMv94Lu3WZDPskCifuEjUQYTgAdSVEs26p68ACSt1Tx4h63X5Jity1sFmu3BM2",
  "key34": "HKb2T9dJKLnox4JSurh3yphsYryH7EyV3hjPV2qTvQwdRbE2CkCoxPz8TWoETZNyEtekUFg6DzAn62yUR3f4Vci",
  "key35": "5Gp2gwz4hZiV5EVAwXQ7EgqDrNLdNF4N8GSgKAyYD6HqPerntrs6ZTmHv3tGybTqgwLPqTBQJHKEm3JhoLzRzwvz",
  "key36": "3hSocFyMMshpiHotzQ4Q334B6jPKH4PofaU7jpbXUFmihEV7nVsRFgYTm4erTtJr51sY9GuPBAgLiY2Xm5yw7aYb",
  "key37": "21pgwD8upWmAnMeMJ5qxkCTLt61eqio6eL9G517r5Y5xnrARNEtpS99MeT1dLKW9j7gm4kzJR86nxA4qf6fDPpEd",
  "key38": "2Mb6qCNHUFfrmA6scbFfz3u7JUrvMRiTb4BBTw959xDVJ2FWmf8jRpxLVy9afSrEy3dQvxntiacX5EXX7NKNW82D",
  "key39": "3sqFMQ3xvhGRmA4arGQuBbyy4XqkoHpZKdA2eb5Z92gBdbeMSF6M3ApdPExTS1awhGVQuBEuUTnVUfP3fw51wDwY",
  "key40": "2mwqLUg5XkPYhUkwm8ptjaU93R45NJW6PnGeaRf169mpdKJWVeQhnN3fpQB3a32aYAwCTTkKcTKmoZDREiAptXSP",
  "key41": "4PXwehjSC8CCYrYpoEEQKj3EwZr5CMoR1XKnmJh2BbJkZ4fjwJDDmb3viLyYqywfNXpscEDxu6w2uXvEC5FcdfXd",
  "key42": "64gjc6iLMQhbNzhXhzNWD4NEgx2yY3BZqFPvaJhKXkx4ZojpaiVitc9PzuLZ5QANmgSnTESHub7X9XXBdusCSSqR",
  "key43": "5vopZ7mRL53aTtj43kavwYqthYcZie6nqkY2zVT1G7CTguEtsbiQ6AZeZLRZp7y8Lmoskm4zsdqAks8Hcwyr4kFT",
  "key44": "eCNseT2QUx7bTS5rCxdxomzWhfYLrmtFcg5L1kgWbnvBVDFL4g5yPFF64WJrPZ38TLDCrPjtaarKkB7U7DbAgfz",
  "key45": "3NU2vNGHA13WUNacUPNyHStWzhTA87vQqNXzs9FCBnphqHVW1MJctsMw2ick9T6M9cTHgkuswus5zx9VxCqvGZPq",
  "key46": "4DPVfDyvXTg9X6dhRZh3Yv1NWhUj3aatA6E1XSC6by6L3oADzom7eeGPDtmNP1RqoBZzhB3t96PPMnpzfe9TFQUP",
  "key47": "3C4eTYj8Rjqn1AViX4RCpqH1nPuUCcnmNNRL8rxfxDzKWituvgmKigbJcXwgiyCSGvc4uoHecN3Dfs85cUdBwUTn"
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
