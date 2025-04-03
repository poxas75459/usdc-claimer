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
    "4EDu42L5nUcNP39rac777SSQcw5xzab16NwB8afVPsj3FLUzX3JChy3fa8MUP4Uf2p9oZepvdKMbTsYtmqmstSUh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TjRXCL7tfcHARo641zPzUdsNy465KwNfsd8CRGrmKYhkVnzssiJ3wpV3cJpLnhsLPoHTYZz364NSwdcfvM8qbz7",
  "key1": "5fDbqdDHaPCFnXiyQfaJeeMrSNdYsYWjvGPjeXmkGbUw6EyB2Q4oPSWPk3pg6qTecuJ5sfqRZwhPKkaSFKGpxW3e",
  "key2": "4cpmjpqMTuuaDXSqRsKqkTBFxAJ8yDqP6qqmUQA9yMHFTwMkHjvrZ61RW9Q9X6DfARHFhLaw7TwrQGkUZbqcPQGS",
  "key3": "3ckCXysdadb2Zpp86iAjR2xTHG6b4yqhYC4sWNCeLq6CCFaktYtyLy7YZBJKxfePz6k9wppYMhb8f9Xabf1E3drS",
  "key4": "51y2u1WVU75GXnxXatE5H5m6jgX8a4y9PpcXkza3devcnQweS7SJ3ah266bFKHPJrDtoVEmhQvSDMta6r7gG515m",
  "key5": "2vyhNt5KqEJZaSoWerMnePYDaMktUWz5bPbKZ2Bd8hGEEb8hdMrjKDuqMiTb6JLSXAMTZqe9RmDTWifpExnGSzpe",
  "key6": "32E7rkP6E8mRzfMbPtP4qk6eP9ypARTw4R8yckRwq8ppK7C8hRnYnnhrMGx2AdSnrfcMH27W8hTJjehAAHvs7Hba",
  "key7": "4VZjd2TbTQEAL34jgqtegr1VpGQHv2zzMu7vRnp5N76fC3CTFDFKnBp1PzhYF8a1msA28dfAzNx8SX6rwomEjtcm",
  "key8": "66LiLH3YiDUEZvumhd3avTYnREuioTbx6CHGVpT2y1PznGc4XSi9bCUw8rERtB99oyMAHAXXe4btQaiihxyqX8MJ",
  "key9": "3wNbyFwuBT9VLXLfYXMUZ5DSJEPdp9hKpph1GpWFHFBNwEYPXuPzbseQ8s3zfDLk3fW7wUQWzfTvS4Pi3FBoGyov",
  "key10": "21MomKfRx4Fb7nNroXVAwsYVfwsFaTUiGHbH3g6CoEQcH32QzePYAo8tT35mh51t7EVJRosc29eZH21L69e96Kbp",
  "key11": "3KWF57n9BbDeCsszwVcgaxqx3no29Uj6mLb1yahTuLKYCg4B5SXodKXmdz4qLKGztWxrtCW4SUV5vNEoEhRQCv3e",
  "key12": "5kecGPrHXzF9YjGGjadonb42VLtwyHDCaA5CVA6t8YgnsZcdBabE8wyfJHffq1tyrB7MJZGkhuFmfcasTdGwvw2m",
  "key13": "3mAQc6vtCHF5WSxk5WiYnam8u3vTA78feZmxyG2kvsRE63mHjS8ncZpvujM79ZLfqgcHYsPQPVLM8Gh5dsUguitq",
  "key14": "4kuhxtDfCfKYHfKX1ABQ2Nzoiwh3m2ada1LzfkzrCDqqPH4yh3MhE7dNesRh5da1P9h73g7m7wut9QKrnX6jpSxn",
  "key15": "3caNVBRCVoRZ6vyfVrLwVnhQHnTpbwuvHTn4GQwPSEx69Zxbo8QjNR4gBZxsd7V5HUGUpfG4oTtcEy3o77VQQqvc",
  "key16": "WkJkcjNHfvg5NH1LjaeFRDgCKf7aKiz95Ws1xdk9yfbdSg6RQGufBJL2it7TVp71K9G2i7TuoNVBonx2MoB1N1w",
  "key17": "25Y32bwHAgLouewxZszHtBiEDf9igPpf1xGMZ7LFw2MpGE2PY9gge4r7NmYJdvoBTRwoTmY9WTS8zA3aBw251vvV",
  "key18": "46EV3fD7GGd7ohRArPGVpaMtkrpJtAnf16sxcARpnnjfwkSWrTsAo3w5uorcX4jv3gi9PkwHCo9EmH5xTmmo1pRm",
  "key19": "2ZLGFHsu6JafvTCKZEpRm4rBLbyj65iqGqGAdBHe6sQqPSLHkN8SLk5sJqmZf9k29fNn5WcgHmtfnGv8debURVnB",
  "key20": "4x8Det2QPG2sUxLxUXbnoLUjtXgh6LTgQG6oibgn3a2Mr8uCVy52krZbA7g8DbVoCzK6B2zZeBKK41vL7yUGNSLb",
  "key21": "5MYMY5aLbGSmA6YPhncPdrj9CyaKTZZMhTnt7bXY6PdnDkNLDWM828UndMeQmxWSgX9Fvyczmwy7sKfGvWQfFBX2",
  "key22": "5oH168jtuEnzhFtKzhPoerTVaqdrWRQ3CBAbFKYMyjgqcXFeWKM9NR4nojdymNb9Dm36ZUcuKLsMkAD1R5Xrukb7",
  "key23": "379N92AdcyyNWvme4Qf3jtiisbKC7foJ5JQjeGdY41852dFhUG7Cuwx3uytaU41o3cEfbogqQKMfYdDn3R7ZgV2o",
  "key24": "mRAxeHqEmfqypFXBtL3R5aiQMkuYXhKxhgA93b5SDJdzVcREgfDwGXdd7c1tjsfKBp14YXCSbZK8dZFuJTzTrGD",
  "key25": "4uXfxhntx1Ft7gzhEvFAUqGX1vCRiniFgYDJgvCrHUd7VRnbuPr1hH62xgnnBmM7mBjuz4PSCnQoW8RxZjucHRff",
  "key26": "4Tgy2CFTgzXtrrYhYbN7rXo4WrwojhPc8SrAKYMqv78EchVYdiVtVkR2Kx94cR8KK9TSbU4P9U6CBCjpzWjHUEnf",
  "key27": "3YC5RGVTY5XHRWurNLKggS29rB9dKg3tqXH5oCyvm1QsSNLscqAr3WU2HbZ2wuD9deAKSyFu1UTuoUz6wN84L6bQ",
  "key28": "2hzKSn66x5LbZ1PE5jXiqbQBiHWDPGKJt9zkyNpLQXtjkqnDfgMY1XrYaiXSR1hbmSvobtwRmBgsFHPzmhhq24B",
  "key29": "MBfwozifPapjQF2KP48JXonooW7fCSKPdjH8W26aeBDrobcRNxxi9FftTBfBxuu3zQauE51zxjby3EaVKhxdkBb",
  "key30": "uJzoWPdVtV72LmaPTKZUFgc1WJD6r8hC7XjTwFoQvqf3tyKTAS7wmbAzYEmFiDXEfAwDQ8jvc6rG6TSmngR9T9M",
  "key31": "5GmYHCv2biFNG9vtvJmmL4fBdTGWSwE92cpYepGPKwDKjpKtvSJPgz1Y1rA4xGjbPbcvCMHddAo6hGctmfHszZ1X",
  "key32": "3XHxy2PdUHWaeN2GdeEskaXos3PS2kZBHpgunXanZ1j1pbwJEJdfsXsvcpjNLQB8GtR1c4zBfyrz8oVbT1wtkyUw",
  "key33": "2XtDksbDGtYyrzdNvXquxhZ3mg4No3X4qwAHXhP8rKHL58u8zJdKYxKYZT8nrbAD1sNBThdcGEXJU3DrCNzAwdNE",
  "key34": "3qyaV1THTotcjj7CYrYWGSLP9ywvhusQBETqP11ihgf8XGmugrA3HRvHSRiRP83YMTVCD8rbuaDrRzCCTkyYCfF5",
  "key35": "3bRdUPf8Do5CsFXjfdXjxpzSSDfYzsBtJJsXTxerXP5BtaBwswkEf9vroe2Hm3FpxtDi8KKcvfjgKUiSWtG4VreM"
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
