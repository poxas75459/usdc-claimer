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
    "yxqbqqENapGZQdE7XPKSUgg31LEtgPp5RTqAcdf7ENarUVNvpU1EBStiRGfsgDk7t9aNKgpihRMMZYx961oPQqV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jWG9W9L1Xx3P73Y1gHoKkT5H7k3BZFbQTmpxDRvJErWK65U1EN28qhHfSusv9zkR2AkgxSNPVLF5RVhas2aMjVj",
  "key1": "28VXo5MxR3VS8GnoAvtDUAGxaifNCnd1yDJtBcUacj8KUBJ1gqDbwMqqUj4b1rRSHs9aTXPaZnuwtMjdyXjpfA5e",
  "key2": "2D2U1Q5FALTDKsQVUV6csLGAjcjQY96oSYHG66XARc3QBAzA2rMji8wWJYPj6Mt3YDLHXmWu6dRKvhs6inpQu8ja",
  "key3": "5jj76XaDspAjD8HfTHYeGxKTAVKhqDVKy2srBzsmdsUp1PxWDYkDLV4f9TziWPnzbVYVnoPVWtuTpQWMv3VKxejD",
  "key4": "5WYZ2KngsNEeuhwoQYCfYKNtL71Nup7JCrV6aoEW4x74oAmHu1Mfqfnpb29sGDKYVBFLnSvDcSKr21A3P5fy3SBa",
  "key5": "3RE2CYg7eyQB2mFACDcME4nKVJ4LpzSiwHKRnwkE6nxkgbCG9Z2Vw4YtvpLGiP4JeBSBGM6X11Tvro172griphDg",
  "key6": "Y27v8HJZuXMRiE3gcGL4J1P86RVPtWoxJRtv1mP9dkEKq2CPib9JYJPEGLa84EwaCkRsV3xgUEqXoF1EWBHnm1M",
  "key7": "5oanmXRVad3pyJGWJHJcVSgk585poS359UL1HD14NcTBtp8aFWXo2HcyUJExD8EZ9pDJ34UgFbMUjt8oDkUysth7",
  "key8": "4Cxtr7Y1fcLdGNHdPiZrHGdzE2NBtGf6aGwaE3VkcfzeF7Z2mGaYR6VaFa1oJyf17pcHQ49gTZniqP7dTkV7REUZ",
  "key9": "2dSYTmu6onGaTbM7tStzTAarjCxquKxvBL8oeATpyC4rPyRwaEvCBkKuACgeWe51enE7ViJS1xH4yaeESqdwiC9d",
  "key10": "3X7rmynLAtKqzV8gBE9PCVRoX3eA4Ps7fnyRgZLtBxtdreQkSo16fL3yQ8KKCCuQb5wVn7RoDwc4FzLYvvyvVzcP",
  "key11": "328LKbsZZUA1QK8qjhvXsAbaEwRrmy5dqEod9LQrpyFGuEa8PhDoDQQ4dQkinsRCEk63PHv2VhFPfHkMP33pedMA",
  "key12": "2dwHqgaEAn5kUJjjuQ8AHBNF2Xa4UgkDFs9pvAmPwx7x7qFbp6nNYFNqJzLsmp5FGG3qeqZLJfVSvpkgzLpjAbD5",
  "key13": "2G3u74wyqBmjHkrjnuPNGVCgnby5sNG4gjSmaHRH9vXfLLTQxtzVRPKhAPTpqtAynznZYHGx2pDyZHBWiaDs8xTA",
  "key14": "5hDFZnpY3Jyo6vp7KGy6ShcTXncXG2awCg8gXkcbzSKiJG5L41gX6WF4RVwtPG72pKem2St9dbhaYnVbDLV9RXHt",
  "key15": "3UnnauLnQ4BNWkMQJUGq7EqPeGLUyQYqopin8YDnESrjQ62GvVDhGFyTaSF53hHXG9pukqvfaFQQcMteJCBYXG1x",
  "key16": "4pSi79qaiRPhg6UY3fPwUt3ejYadWrQqSRCsdMp3uBqgYaXhxhYWjds6NtehgwcH4ZY839TxJqAYByVWaP1HDM78",
  "key17": "2wnbtzxZbvaUBrD3KrWBCT7M7XvALamoufMwyruwqMkxtL7jbSC1p1sTEf3hqKBo3d1Fscm5BfXfcTFKr94jC4tL",
  "key18": "66hh8m5rqMTYxsssFDWDK9dvnmTvWPFmafqS7uuXVcB98qsd8B5Z9XRZoKU6Lu76zfwmjnpH2DW2KJ4NBE2ct4Kj",
  "key19": "5y7Cdm4fr4Cw1GUR4EaK5BycaMhzzR57GmxVL26WAnLrEhUJr6ud8WCgn6Nv7jxkicESD1h5UGGLV63Xqc1ySLSu",
  "key20": "CKbjnDheJg3Y2JChcU3DYbFgga7jKyfMGjcPm6bDyXLruZoNUdzeKuXz9jQG63zThMVoDCWkWvMHWYMQ3erAZF9",
  "key21": "2wQLJ9DCcn2tWs3i2XEjDQnGXiSHjEFRkSrUhr84kU4274VunKVhMfNDsPyDhL9nznqnj61eFsdvHsS6fQLDVppM",
  "key22": "XoPMVAAniMrQSm5qHMUnXZVBZ4AjqoNtRxatdr3zaV2eLrVBEET2x9CpFBLGYLGEo2K5FJHtJHcw9sVLND5kk6M",
  "key23": "dcenxVgBRF6UrFf4N5nEhBqb8CuD6YYF3cmtQeHapCJvu2UrHNcMYdPShAGDXbgUpbVcGV54RjeLT6MZLqsTBv4",
  "key24": "5FFnyQHnrajZhirmpvdCZD4fNYdKB45e65UisYsvMx9Lh5ZN6NpSs1supCTd2812UbbeUEr7w78SpmspLu6JARQR",
  "key25": "5aTFB5qnLAm4WVvKAPqntBg9AMJan7cGGvXcgnbmqpu8HZcKBV2f2DUud2mgLP6KtTxJbnWNdvxScxoCP9aHGhhT"
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
