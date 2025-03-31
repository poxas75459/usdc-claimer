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
    "z2Y7zr6yy5LD1Unny56V1ej1SuLzUcon4tXM6TJqConizWeNrsQJqXkNDumnbAHYLczTV1EosDYjx1ssktdyZ2P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37jJT22gGKauh9mmhcqDZ4n2rLWvVbD3SGaYyFKHrHTkMXpaMn45jamyBBkUuvnfKsPAmdLQLR4jANfsuYmz46uY",
  "key1": "4pZw8SLUw6NijMitBLVFtGAGz4Ws8YanPaL49JG2M6vCVzv2oorHr9sJ5R9PbsVjf7cjJoZSg94jiPPCKq8XC9n6",
  "key2": "3dvzjEpqZuMo2Wm15mCADtn7oePzAVbw9WbkgAcxyxk4vkxurN22wbgPwKHhxosRF8ANQFEuSBQXsqjav9d3DRK8",
  "key3": "2kYVan7YVhtjLu1jZucE9URJXBKKKTz9yPnrmdroQemuUC43eo46KXSwi8jBbR2TDmCkb83KApJ2okcMaZH2eMhx",
  "key4": "2ZXGLEmNUecW7NcWqomXpvWWrWva5dwiU4yPEJJB5CvKqgz3kSQdHsG4JRaaUwiQdYqsDdp2ZWNdBdkD7wVEHvDd",
  "key5": "dFEW1Gj3KYUmr8kz5szQXyzb1a5Y1b82DY34fyjoLqyXZzoKJHHKxtHkAcoDQQHijxzt9VMjL5dnKUbbmvgW5Hp",
  "key6": "gremsccPeKJfvqkR7rQFnocbsABSo3VjVmk4rTcropPhteU2hnMU8DspKfyYRT4qeNAMZHadZovEexvZuCEASCQ",
  "key7": "5FZFzJEMoVkMJb5aPLUYBgDuM5TxdtjWmpwp8vwDQonWToZiiaXcKEooqdUebTkg6iYPxvTzZo7TPoykADuBqVwe",
  "key8": "41iE6E3DQEg66Jo8zggmXjfTWtfWsY276kLLLAjt5JWm3nttVG9no3SzVQehYUyWNACy4WzEpHUquSDRdSrGcckm",
  "key9": "4iPbCQQx4UjJTNc5jah4uajxrDDAQrrJL8FmhGKK69fgmJaECE5rR8gaVgmdaL9e87UPRzk7m9NxuzvQnxMGDZUz",
  "key10": "675L1TECaBqYZbDgyi9T3r39YYSz3BN89XDEg16XigdnWR75rfxRfJUPucQoeVixY3SMSq1QATCUhwkV4GekEmzW",
  "key11": "2hCYWb8rEBYJThJ6guBpLpj2b1NSk3K7MHHHDGHSz1avaC3j7gGBsrSEiYBKcu6P25xugfBHsVND4FD5JfHbhbJG",
  "key12": "52UyP7m8TQYxDdNaphDNx72bWfSGw7jnZtieZNVJ21dLYAUVGoYrTBy3m3Ufp8gzzQmTVhaUaz2h7Yzr6KiggrHm",
  "key13": "23ZAp945gLwKQcmexMkyCTuNAVaWJ19otZyfQmhumd6Yr2JhLK1Z1XpyCfFVZwfmtfvwgxan7tTB9EEVqsG99t7k",
  "key14": "5zcqHaV54qUxcD3gCCavGuLsy4AxdavSUKWVv8DxVGtFWYU24RX2WA6ELQhiFBVFxGpj62nFGNPfBgqNFn9WdwpM",
  "key15": "4BLku1dtkN6jTguZk5okurF6ckGLHex466PQdbykc8VrfTuiiihSjVfK6vDFpGYBtjUdUSkuK7hukTodWUsYxbkp",
  "key16": "28XLn9QpF7YuGCgPxW8LcfGVvdtTRo2CTUgDcHgbQwhDKQm7tmS61EnsjA3JRWXoaakwDeaYXGeZDZVqXmCsiwFY",
  "key17": "5Qswdn4NCWBmJAhvrBHgJsLdpQGjPZ88GxZYn1NYCt2JECUuoT7MkTW2YD4cVyJLwKGwDHn5ae1kb5U4iFib4nCc",
  "key18": "3QM2U5GaW7r7rWMmYe1som21dqqfUmUPWEchbnS1QviZURgRRVAoLKzhwQv7Q6zq415Pxm8FkLZo71a4rrG2BjeN",
  "key19": "5QKqt2uqj5PXayogLRzGbPY7c5xwSTVhXDs6Lzh5SnpJniwQF8F6mfggLr8oc55scxKs2cfcG2QtQ2pXYyEDRYEH",
  "key20": "5aZatEDASqhLKVz91KhvzLdZx64RbsZZQtk5PdYW28AwMrMgmUNfc9xjAx3wK21LZ9PrkFrTMk7MfqvPL6T9niXt",
  "key21": "nmocuFzTes6dCPh6JLuy5suZGpFkF29m92DyroEH4CRyXK93eQbYGcYiUSqUxVYLAeCZA2gJWiGp8cSw9fT4PBk",
  "key22": "2DxvZ3DSANBYaDBNgxyiF23rUML7E1rkEEpMuirx6RuhHXWWCr41Kw6T7CejKvTWgpJ6rELGFMAgymDWQRr7bDGg",
  "key23": "5zAKxdCACnEyDNQ3vF33ypmUti8N2qhPsn9oufHvfe7iqie1QgvVTrtHNPSWVoKncih8M2LzctbEA6XGR9cjqEbR",
  "key24": "3voQy3gp51E5aGrphjo1HhqdurDQTjsPoHZgDkXXj3ExGUB6R8MacuNnYA6mY97eTJtEuDRwVszrgNHJjdytGMxh",
  "key25": "57vkdCM1mHkWsuPKRtEqHFnFaBApsC7h7zDw2brBXp4b7CFuzMuNTmaBe7AW1hJC3w7xMskyBzBQrrKVgfSj8S73",
  "key26": "5d5ARCD5CVTbLV6v4sSptJUB47XCKc7oX1XQ6kLmFZxhyGAXNBh4tQnxV63efdnPf5TG3MjPiaC9jWU7WUa4qvzG",
  "key27": "4UU6rrihfWiweV5KxZHZpaVnqvVCX47dPach1cEKAoic1BE1BaJq8dJxZZ8ghuCYxxf3bzwNt71iEPMGq5Pio5bb",
  "key28": "4YX9kkVxH7mFsycMTGeaXAG8NYRMf5xnxNSr2A3SeR5qQeRV31jQND9KgX4JEv73z2LDVzSHuRCatTpowVcXQLoV",
  "key29": "5KhBoyRvPa5M89dyFDfU7CJSkBTY4ijPtEGdnqa8DYeBdZeim4peXNEDXBWJQtqvS7Z7U1JGQCRaRKHSRU5Yjiqj",
  "key30": "31ZLpBG8qfcXd6TZ1gVvfXYe2LeotXT5MbJZsW4fe4pmnTFeRgaEQDVQmS3LUPDLWNGgy1TjHCLsDP1fGerX12RB"
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
