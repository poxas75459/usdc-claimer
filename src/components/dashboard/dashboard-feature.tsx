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
    "61CbstrvYcW2uYRAs71fCBPuqgwuXx12MqKt11xKQzdSfQZQYfLtRj6fCGLgzg2z5F5cCTHpyEH9nQ8FX87kadvQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5daNoSAbfiHaTwjyfqXPu7pvFHL8CbSBZjUdoE4wBsB8beRX3LeZupV2Ku8x6k1h3WpG5a27X1EzJoqELb6igb8r",
  "key1": "5Hb78CEFVBLtUzKaR3dJBNRBWWvz9deHaTEr8RczE2Y3EoPFca9612wStvPTqHZbymGxvEsyRn4xqeuteRVZDSY",
  "key2": "3JUDVRFo3uz5wwVsVPQPkVPM32BSbZqTD3rN9eqUPJb8Uh1DxgPhb5t45igjZB8fMsdvCScTU2RnQtjQsGT8LuNx",
  "key3": "41HwPfTcB3qefigtTbv8MMN5pSbMg45GQj9kC4Ew3P6Y88FVCC4Q5LwZXF2GskzGAz7dQCvKtdUMbPBKmy6gFbhn",
  "key4": "5NzD8u9TbnU5pW2ADTZkM4Z1wc7wyjBtMRvUUzLoxNiVScTKJTtSZfAHeFWXLVREQtzfViaHT3av1HidGdHB9HFk",
  "key5": "5qkbGMBEDP9CknoMRcnzeU5GetyPTHhi9HTmYQmbx4JxFtf33DtTpWi6sywWBG6HmRkymUcjDqesDd8ToqUM76gJ",
  "key6": "5DhHviJjteiWXFwxiNnaz4n4fPTqdwGziiD6eJYDKi6kYwYDn4mnZrDL3grxAd8m2maBAA396VGYmUJTviahe93X",
  "key7": "3fWcv3CNhT54BqAcG5zzFE18gkHwL8fozb7YZhxSk8vRycvKf2GsVpobY1PVvkwnUBQrNYxhGGtCo4xEi2b5mEH1",
  "key8": "2ZQnpHzfnwYU67KRzdE4UFhRo9SPYTR9VtbByVKBtVo5SVbc23R6cAPSxNm5sYqQtFgEh5T58KW9GgcgzjiY9Xc5",
  "key9": "2J9Cajntbykey4zZmrieJ3mcV5v6JnZC9MZBG7f1kYCG6FC3BiiNZKSDYPWFcTNqWf8ovM2jv6JZrxgtR2DChq9r",
  "key10": "5vcwny2GNGAj5TuoP9oo7oHJG9AD7DBuNErneLQjQtMGq7in4cYgkG9mfWpY2ESNEj5XBaNgFDmF6xSc19tZ2ahE",
  "key11": "4PW8fbG6qXecGsEbd4PEVkEtvRfECnPHcX1RkXyYj6sTvGkkoFYyXLZmXBVb9RWe3rxphGrm5oHepzeayE6GpMAx",
  "key12": "2gBejQZ2K1C5AY21fWo3voXkQevnrWaErHPAEeRHQf1ZcVYfVNurhTRhLpcBrCYYFHTiiSaubcwfEG7vvBFHbf6u",
  "key13": "oSCuHnDvMKw4QT9w3QA5xLPP9qYw3bqcVj5ARWb1DjGqBA1tWUdLLmWNrAQZKkMi1iKXT5qKU9aYkoGFS986wt8",
  "key14": "mbJkcab67SLagfjxMYmJLj8NsJphsrRS9UkrZoHUSn4phN7mo7nWTCfcxA33H2iSfMWVPP2V6ixPVDpWB9GiMiC",
  "key15": "2QQKmAXn2U7ukhdYfFJVaWhjVQS2XsjUBi4LfBBUvSQExCgkMmzDgQAE1kGNeceYAm2xuXMtQZT4ZECozWuNrwXg",
  "key16": "4VbD4wcEBs3t3hTyAP7q9SsUyTMRQcnKQDB7gC7RRP8VwvXmXHZCLZbUEg2PWUdsP12R5L2RtrBgEtKXuZ3gMQyd",
  "key17": "638Ng9mS5Y57uSVqXfeVqmpPVkcVEd6giKcLGsfAMnDm7pcFcGHPHVe5f4awvj7EjD6UAwQoTAkRkz1dWKrgjj7L",
  "key18": "2hNvE6kzC1Ag6PekqaqvxVjijptSBUiPkgrkssxFCgEEKsHDviiMfSHNAeH1Z5wxpAw5qiNR4wj128LNZRuBMLnx",
  "key19": "spr8UDkv37RnyT3rNxM39yXZbd2tPA4zU2trcCsKGtLFGqqEj3dsUp1rzFr1UVx3SXBDLL9b3U43g1gfZtgrdcd",
  "key20": "43YcMtnMtUs1mMsJjn7gLDmuNi3NQBZRfbdREdAaq5JQt39A1PHmLQpFBYwkzs7GXVAtG7TrGqeYgUrNQc1YDJ9N",
  "key21": "2327NwdorGRDjCmULrtnoarEC22u6XQacZWADLWamS1FRprL9jtHzKQMHS8WXrKbADVRJHDUgiWyAEtFacPYcc5B",
  "key22": "5V5DG3sQtJeXTpZgfAPhZZBMghTq3sP8CNoSiYpnn8B34fXyonauELuC4UJPcFiNtdh4WsmeJdeLHhBXoEjoyf5y",
  "key23": "4jvFHwC8FsFdV5JuMwLR3aGXHjNFa33Hb66aUMeh7gH57LxWHghx8YThAmfBPFqPtGmpTBBvZobvyiQ8saQ3a5Yz",
  "key24": "3tk2f51ZXQsrCdug3pgCWW9V7TvkYjN1nNYRbzh2F8BqDiMm4r4tXvLjUxYkdnE1PVfG4iswfYuq8A546hunVtQ3",
  "key25": "2FnhGksV9qjeckBkaoK7mNwqyE6xHwVhzawjLK65rZ3CLmX7q7N2jtiLVAMCSKv7azSeuHAi1qKJ8w1mFzpNzx6Q",
  "key26": "5Sa7XgueQFXFPybeco7gtHytddRSt746KiBHQcc6nSBNFswBo8mgEXNzStQfVuuyfsxxMRX1eUEibg5kpAjiP5wF",
  "key27": "3uNzfooNcyS3SoUW2ZDJpYPxcNHbbPseigpivrsYdqv7ZwvkK8jisuUHo5kECMZeXUbtBvDRwMXgWvf9XimG1wWx",
  "key28": "3qTuj996gzDTmKTNPeSpx9p1t1HCmithuxU1Z7wsXzEbGYR3LuL1wuF36oEd57DmhSWi3K3MTYsxFBVbun3grKUn",
  "key29": "2PePGJCvTqf6oJBFq2nvz3HFjcd3GQkcbD8cHVaqEX23Wj5NchyQ6vEZPAk3CTUFmNw6Dw1g2vkdrWJqS5QFLAw1",
  "key30": "5n713hhCxzDdAHXTpLDgwRT1M7a28Ph5LCaXaQpzSmX2XUqzu2YWEy9MzbbZcZKAjA3UJsBpvENRibCNGrP1AsVH",
  "key31": "21wQn5pSgEVKHAJA8ANfLpDNSJ39k6gTw5H6b5y4y38KMYFWP8kpm3SyLwSTCvKgPQzofvUGdRnHEhq8xcbMdXJ4",
  "key32": "wozga6iLhQdZMeB9irGz7HAiCxMJmGTGcske3yzWLGvawaRFjJ1nKB6gbRynHF1SUaaXePhfXQ2pAZU7RTbbejm"
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
