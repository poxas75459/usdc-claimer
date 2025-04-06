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
    "3bpQ52iK3V4erdAbZ38bnnXgrYrHs9TimQsQPixSfmPUhsfsm12kYFVqd9brNsjxExZtPHjSg23c1jkAsSnJMD29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tUkVb98R3FkCf9J3vZyDCHCZEexybVVyNVRdQ3zmZ1eHiebzNE6rnf9giFrzG5yzz8THFWCZFNcXoifApqwCzER",
  "key1": "YK6dSznyG5zfKafGLuJUsL7crBR3EkMMteRKtdibh2PAJN4pWMcChdWMdeiPHmRAvfLqN1LQ7At8pagQhjpFkqt",
  "key2": "4J1qKjNFUp18Cpi5PacbGgxbmhmgezewXUEmr3DSYgaSqzncPQ6TiP9454ca9ZcGJAKDVjwJ2iF9QxQBGv5cppwy",
  "key3": "3HoU6TaVdzJ13SFf5CDA7fsAnHDHYCNz5ejRdbJuymkxpejnU9ki8iEdvCEuaMWokbfmgjxJwqHFD2K5rhsjisNe",
  "key4": "2ys4xYRs8YBn688qu4CMXMM8fNeuhYXACkZ2d2ahgksebUCBckmnFC3Z2TciK7FyvW42oHYVQWDwPgsDP6eLQJiM",
  "key5": "iESnBUNHSynFhrxE5DD4QFv8cbuUdSE7kurtdbF4ABZk4WFGzrNPBcu87HAGbSryYWK9mAB1qZuDsF9zVQnvMPw",
  "key6": "5CYVJbx837oCASdksYicsUBGT7aTuj9khzzdBj8unqfvRbagNk6qoCMyTExQiLWQ8HXPmoxsYX1uN4nx3E51naJW",
  "key7": "4NMibMiG74jGZbG8XN8w1QrpDY72CDrwUeFdN6Dm5pwAwWxUzPvatTSkLNhtvn8yzq4L9KWKRUKEJS4hKAowGypf",
  "key8": "3do5XhW9D253DGmJyUYTB7XUekGbMd7KgkGveyBp2Uh5JMRsK6ecQzSPrCejBUjLN7QTtBL49f5Z5kQM59tutDZq",
  "key9": "46d6WMr2TyCgVow3DWsnazZnoiSBLLBBwn7TYdu7dycnJk2DfCUEzm2xycwwoo56dwCTqCytXAUiadDb3qYHE11M",
  "key10": "2Sx2nR3Z5wA1dEoTtZ8dgXNcb1f8ZedRSiKSKfKVDsx8fpkv4SVT65sNEDzvkyZxzPf8mNKDTknKNvxSCbq3S5Wx",
  "key11": "2S9p58KPn4T6tXwc1AG9yWdjgjFgmMMqD9WFjE5JLWCU6UaVC8RF4WAMKitA5byKo5e3yRuKyFRW4hovk7Y39TU6",
  "key12": "5ajff8i9fq2zyGzpbpr6JKgMx32K2awe1b2MsrLR4JLJoPs8qeBoSCMrgsk4NTqaV5nH5DpUAH6EcUHWJKVEq7vq",
  "key13": "3muuEMycKQZ6Sa62suZyyqjK1isejb4kRHovkP1dTR8zPD6YS6w3GuFQXhMXVtEusehKKWdWhrhTkpuxaJe1B8jN",
  "key14": "4riJWsw6bUwofDdGZbfV1oXdtQtahRCCJnSczveGbg7i2mtGZKawjSCyKMLUPRNcK5645ZLTDFBf2Dkjjpcq6W9m",
  "key15": "4mNdkAzLxpi2c8mXVoG1PTcdWT46BZDnSTNmz6SsnWpnTc3vgJS1cgqvS6V8CVmyo1HTTrXEnZKmWMUsptpnXxLb",
  "key16": "5ysJpGQtG7Y9Dtym8ZtEDbesdfzVLanu59QDzRNaaJaUfpP4qZ5Sva1y2g6PqSmS7Z1AceJDCHoG4f1b1iPABSi1",
  "key17": "5sdttFQ3S36or7ypwJs1LYJ8T84NrAZCPTRx5pdpQZVhhUAjvmPefYR1FqStrZ2cAXuTgmvBjkvrLbfgFavQRovM",
  "key18": "XMdyot2iK2qBHsRxSLVb1DzTgenqu6ZQqdamD5tY63CsBpGZGLcvukjxKyHpCXHVXrGecuiTb9UTeHin9Cnnnkf",
  "key19": "53pQv7fSWz2BkiXPQerbgdKdfYhMMxzEmstV7EvEVn73fYnym25PDFerhD9goe9qaGnuyx4uv4PenQBWDz725xjo",
  "key20": "JnRajHLxk34snXZhuECFgmbkJyz5MwL4td9wf7hTaDpxkRLKXoiNuzx2o7337tcMTtekv4J8KZr9ppbn9UTFEmS",
  "key21": "3KgxfMxCxobLraBHUL6atjJJhWQkTuJv1JmpL6iSqkruTMZqhEEXiaxiy4UKFcJR1mMG1mEq36pyvcsasm78JSHV",
  "key22": "KoWGWnXpZkv7xN4BCeW9ua6QbJUYBhTmoxp1x1T3PZq3gqvk862aBc1MSWJj4WH5pGsteCWKYvcsqHU6VaRGEQy",
  "key23": "35F7n6CQUU2dCcGMbDJ5zyL4fYUbqXWhK2gVXDJYkM6pq13zSLj268qyPdfT6qAe3uKKP6zaEoMsTWd2FhQeAePS",
  "key24": "CDWiS9qkQjwRfxTnyzPvrs9ougTYPvP2A3AKRRgcAFEoMfhY1i5SLjjF4Wt8RG9wkgFExMuzECQmNPqeSJPtXKy",
  "key25": "3WUm6iptrZY1a9QTGaZKqzwoRf7Zdsg9Wri1EYHRt8Z3NZ8WMW7r5DXYySpyGj6tm1QJHcVgKTn3xyawCZZvtfue",
  "key26": "51sVDZajfiWG2WoqVnw8vm6NUAp2eiMKweHdpfdJLVq3DbKZoimR9xrSJxearqdQD2goYNRBGSTsxLJebwswySc9",
  "key27": "2ksoueEndGkjTNvwTwNsA7TnpxbcN6mFgaP2SsHoZCsxYvPKu9o1j7AUWJ6T1aVnsKyfGv2SgmwZBXHkhEktX2e8"
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
