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
    "5xWYVU7kPvCDayvR3dTaN8XyMd9EHv5xoAKydRPafuarHSoRsTE4vYby5ySjtQVZYfCEtPGaRiryRj2JNYpgV4Yt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DPAhUZTMKVJj1eF2pxZao3q7LzVL7gWuUTeqSwe5FvE6p7UGHaozUbS4VJ8EKUwd5vXZmMaqCxwkc5v83Sw9TkQ",
  "key1": "2Bg81hVC9FMyJWdt5TRc9CcBxHhvLXzy15fkxPwoyJQzA7KSgr5TYihVS6kJYf2QbYmJCozUQEGPyPJm11puttpc",
  "key2": "UYZr1ipVTDZcHwfmYpcXm67JX5DJbsd5gBkQr43tQKLrzwLzAzNp1ke2a7qi5YteKobEpd7iTBt2mxKzYcdj37M",
  "key3": "Mo7hqiayQGfFnjLCvbcS62Xs8eKfR1jvhLRWg6pu2xDhBFVPR2zMBVKzhFkArrudPX59XdaksAJ1BQji99w9ypv",
  "key4": "4bXo7NBXvkCkyqtcZGXpvzUXQ2KGEjzPtAe6n1ge6Ysj3tdW2Z2DAohwjyxE8z5HUbgojuWs15eqDhy2zu9STPbk",
  "key5": "3WAWRUGWc1KzbzmjuZRg341Nx8B51Cd3ocMiMK7WxkW7KvEoRJmZnnqu8Fp1HLgFCnt5yNfZua2jgsPieRXhXBs2",
  "key6": "VRPrxN4fgFdoU75F8MdBMmMQ8KaZezEGcXgLpJZSkty8m6yyww2ctBzG4CRXqJQv6G1gXCs1xjcmtTbdcQ979Mk",
  "key7": "36Bos8p8ccPBk8Kc6G4HULSsNbFXTrMifcXNQgrS7mmcaApcpHythaVLZYHs1N1NpCNtv1VXPGrogKBYU3brRoK4",
  "key8": "21wp7Thwxb2aKv39AF9sP8hgNQSj2PZq7gtifMxpJDiF7GvWqVaNZ56jVJfVdVHaqRUB3aJKpjqBA7i4n6BEu2k1",
  "key9": "5z4vhAbJ12Gjf9xFi58fXYDsg574shc6HxmZ7C4DeUSHxvj39QaJKJpjAxaeheUYkKTXtmZsQdGzZw9XTUxxmW4f",
  "key10": "k7NaCmBtUg1CqVLrjkfv9FCxw3MArC9apFeyizZkpG73dXr65bnkcTCTXaKFX4h5Vx3RfjWtneZageCNFtLDhQ3",
  "key11": "5NYGdK5mC4fKMCXRMBupwQdMR2kMPxhuCGgamPmkzpVBtUU4ATygKi7zywzLfbj3TD8vYZzr9rYymN13TF7bfaqC",
  "key12": "5vtX96r8eGHHX5Jkp9B7jASarpfBK2YNfLG7GauzWfkNnTTyAD9ykLgxzL1KZZhGf5oPZBuqaGtoaKPpovocoovU",
  "key13": "3PMhVRxUYiRAjcf6s2ETiuiHGCKW5sn51vXDNSEk9R4dNBDWBB25YZsSt13WJ64znmwcXYJQArM7Z8kpJS2Esmfe",
  "key14": "3Qbj22DatjaMi6EYrBGvXRLSeBjdmwXz5zT3DJ2nCiAXfvtZTSAJEjrxeoQwSsvonScRxU1fDriNEWt3SvcsLyvr",
  "key15": "2Tfbg4wjJJyvK8XgqmKgXyXtdkyXKrZNfu84TMWXnjGimGcXLTB9i8grVkkDxJuohXshSV7gtQdPXtM6jtFeA4kk",
  "key16": "kiXLgLMoeJBfX6zL6PB3f4aRh3Xfmz7cJPWfuTNc2PURh2C3DtzK6m1npLY2F1BwBJ3ZyiP3rTDDKJN2wTG3wWV",
  "key17": "3RmCeHh6DCAxWRdFWDw3ZTFFYE75QxukzTeTjcsSAc4bwJA3sqYWzPsyomhP5Zy6vt8dBbqmeQ9KzvmiJy4kXY3F",
  "key18": "27nX5eMeNt6bPyeLCR9ZmeSovVUFe855veS4rvGSHaEjHN8q2y8CCg7M6XLmmcXwrrkNG7BgvXJ5w864d4X8g6XN",
  "key19": "3ZScboj86VZEnWWRK84N5SFACpcNqMhqZZzkfHL9yDwXNoLN8SoSShkDqRzRzMAUdaBAGHXMjqniLMCyAhipSCeL",
  "key20": "n1nd3mjYQ3DUEiyx9s66JkPBjLj9YMZoK9KyPsGPGy6d9rfqNDmuCafNvs2caebcsC6uNuSDYmgTrnNUDzWGmZM",
  "key21": "4P7WNf5GfWk8UyfrGSXUEBurh9oVXXUxj8bNcGj63qTVyUcC46EwTnTYTGPtjFjufLujFugYXjTgSe3oDHz5q4Fc",
  "key22": "5C4CtbffqaFgSE3cramBMCvkcEtVYoYquXrAaqoBT43Pk47PY5fSABnqurQmRtd9KEQPPsRmoh4h4zoTkDB4Hzbg",
  "key23": "2TNuycppCnzwpF7ckW6Aqs6QtBvtBNh4XXw3fH9tkmrxNRgC23cSq1zynJuPYoD9fuxF4isbfpLrhDV9w8iw92Gh",
  "key24": "4Gw7LhN5MB9CTCuj9LTvXALKBUhrE3eDhzP755RabzKaznG5CLJfv6wbLWvcY6kBVLu77wQtoxNrPxqwdhtCGaYz",
  "key25": "3SEFGLfJ1G65SaVCx68kgxCZLDQRgcywk3D8sfCzbxAFY13kVDuYR85gpfnFmm3YkKMRGA5qgFQYvzftnoh3haeo",
  "key26": "2XaM9zm1nZFRRa6Kfafrr7yZCu72kmTp7ZX2mvu3b3VLu43iMzHCzVy8RiUhcaqBtA7UceGRQ4TekBu4gLmn38a1",
  "key27": "2En3UXr86jarS1FtAMzpKzVo9kTFbaEFyTbQ9sUcNUqKj1doakf9Ck2Qi54ZvzQr6TRchK1i8x9WZqa7NBHT5u8v",
  "key28": "3bgnkyCfRT9q9tGHvBoWqqwRMUrjazgsBGkZJNLrheGcdbSXMsSz1r7cK5jBbyF1gTQiUEwTmBvUJS2LBmTCgV6S"
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
