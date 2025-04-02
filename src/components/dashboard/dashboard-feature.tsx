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
    "5t57VNQbTMb6ActvKhzbuhCoQixkCoNrzJK2YAjJ4YPzuSvT4ULN5VFWmMoTakZVVkSyEBFcXCpTj1KiyjjDhvr6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27zPGeTNqNNaT6LtaQmN5tR3AfTow6THSLqTYRLxTanms6VJqt9okxnpuJyrkSnnS9vU795nsbGMsR1BVZ3Nxjj5",
  "key1": "5Y7kM8G1C4v7j6JvLU3D7Gr5CiZVGq5YAfMVi2PWQoJGDdkCaMMr3793uQi6Lw8vr1nPNc4mB85z1dqpurA73jZz",
  "key2": "4kdPfh2p9CpRL9roS43Uw5b8t2nbmJGSPb9N3dMr7Tiz91sozpLoN4nAhcYcpXpmEirNDY3kCLTEX6Y21BwJNZZU",
  "key3": "42BDS8Fg7Mmo4fVggqiTcAPNbi3xKAbuLBFeFFhtqXcKaFxF2EvJtMe5K7WvZG5ungeYN8b5L3RPYXypGwvacKd9",
  "key4": "5LpYU2iMT5VXewHicK9enu8GUDc6MF4x69yP2eXvZ8jfPyRsen1ZDTcg1mfLWEroxmrKhVUga92PmNeVLfZAxFG5",
  "key5": "4Jsbv7YnryTo9Ld89nKmgWGd8uNCaLaKNNhqUMFm2qddkhTCKCZGWJYHE8nHnVGhpFwefeJVee2ToQWnenLboqDt",
  "key6": "2Vrrxm79WAsYSm7kW4PsjbhbJFHMAf9UPYeXcamnW3n14Lg2rJVTfECV3L9desceV3BU6RVPmBAhtJXt3TppHXL2",
  "key7": "2meibxJcHcQTzyVdkKtQAfpdY1fW9gkiSPfUojYPn96JtkijbcfFfwT5x3pjTE9eeK6qFjUpTouFXmnDxyxyZqrf",
  "key8": "5q6mdTFreYc8DsgudysJJZWNqcR5MZ5r2UwEuHB8MyopKM3VZn5PQfBZjyfxYwFtmUUraTb9rRiP1KN6C2PQwdg3",
  "key9": "3vkxsmoQhAbWHNEKGRo7auGVZhVHw95xJ3c1LsCje6SnBwG19UrEneP8Homhisju3rd4qTAXs9hWuMPhKxqhcKxF",
  "key10": "5ER615XiJFStPv5gJyu5sUSdtcVNz7sd1f9U5SUc1SciihPdS2VdL7uQ55EMwKnEJXNWxEkbNpSoBqSRVPuAZx3h",
  "key11": "3yV1PnahH74szJKyJoB6mySymDuN6b42ZeG8UmuG8xPbS2oEimcAEuMVCmv1gsdtSLQ1iqTzhq2GCe86NPWAkUkg",
  "key12": "5KLjUndgFRYQQhAyX9hCxocZ36d51PepK5nAa2EQvipZxY3A2jmqBrtvtJN2iSPEmLVaECrtGch3Brgt8VaqBQaG",
  "key13": "4LBhQG788mLu2kbQTmrsu7RumJsFW1CiCffs1FWMVCPxXLzg6n2TdWzxtPEpQ6zvraUdPfWpoEb5RTQWE7LoHwbH",
  "key14": "4FngafibifPp55Dzc3vSsnm9z4mmDKJiMxhrET85TcLAt9CD71taju7nmZFpbcd33vYBdeFc38LZe1hVoUezNRCC",
  "key15": "2mRekvgAbsBTGhxGTAeSpuYMFCAuxL8G5ccQUzj6UXW9HsUNQKXuRw73TGrdCgnZ86ydMRsWxi9hqBSwJEFEYXFo",
  "key16": "U9Php5QDRyWLarfu1dLsNiN8V1G2peRUE2pp335PaB1sv1MbWoZWRja5WYe6JJz3GivJXs1etixgrwQVwKHNhxm",
  "key17": "4YiH6vtWsRddwPAbh3Sq9Zf47reZ2jxSDV3ZE2bhP2mN9DaTZzexC8u1UTEVkpiaEVYUmKA2H7SiCM3pisjK7vTX",
  "key18": "3HVebFBNrckbxFQefsRmGEros8DVDccxs1qPW4PQsfFWQTf4yJpxbwKbZZjTRpKWrwhPz7tqwvYjujWsW2kL8Jk9",
  "key19": "KrMHHwoYGCsVdpWfheqH9qMtVQBprPFX4V7CzwoYGhvoMWoyAtEy4hQE339XLiQZUvW9XBtVj67f32VKs8wWFNx",
  "key20": "5TfQu3AqMi3MEk9s3k1zmf2jmpfUov7dDQBW8oANBXeRQ4PuJ5tJnbpBJQqdSHhsn52d2EZcq9nfDjA34HjWVrmw",
  "key21": "2kfmQEbdgnRba16PYvGCzmLjnkLBvppnLQqb93XFyGmmgHs55bnvVc1fvR3HePANEs99xgNY2vsKYs48vEDhWyCW",
  "key22": "5c6WQJdvsXw4ndSSMcaUUZNWjkPFzqhVNW3gpsg23kjQ5ypLDXgNM9tEsitZ46ptekyTg1kk9x4hadNDqjPd8Ktg",
  "key23": "3PSuQG8H9wZm8xw9zKR5EXS2YKAjc7ctKMGwHbBd6Nk89jWXnQVScQRdDcnhBw2JJpRbSAddN5M2nLP8b8SDWNM2",
  "key24": "2ysQv5oTh3y5SEN8DojACSE4sHWojYE6Nw7GJZ8J426BS54dbwFe84PEwVSBGMZN13rvdAakfuWGctmTv1k1cKTj",
  "key25": "5YwakPA6jKj5ZeCKmhKkjCydHXjxk5ezzk4WdDzK2Xc2kBsNqeQrwUiXRu6EdTQqrnMusJmCUMVsAMaeBjLQ8ysH",
  "key26": "DJFVi6YSG5eNuwf1HzLS2tgMCXdzvjd2n9YqZwAbEagzQGYH7nhaeoAgzHnUD5HT9SfagXVS6jqySGuDFUjt871",
  "key27": "3tSjR8mydk3tsTaUcrCzKgEFjaKwWsatQmGKEpot8tyCKdjc6FqZJLYBxtRL3kt4gSNuW773qchdqwV3fSMYnUED",
  "key28": "vmZ9XWP9JLyNWBrNYx7RcWMNGSNauaHuvEzfXjdki4dzQYe4GNAuPQV78oCMHwDUiMj6EF1ybJbCKCuYTJTQQJi",
  "key29": "44Po4ZCLTLKv68YR3RGrKHpPG6hUmJ6btFgDfhaHaBJ7YpApKdE4ZPj6e8qbfXvDgr91e5mektXSGLdiARREVTgK",
  "key30": "2ZyvaeQ5QT33PjSKvV7f78ZnEDjCrjVVrQrKNUXHzDKBAi7dHhzS1MdSRX9NPXkZvVzGNUbqaSqbEp5neKPYQ6RU",
  "key31": "5T4Dz2T6J9z6u7Rdxqs1ve5YTDrUwsdzLZY7wrMBFAPCwXF7mrVkSLHiBbXam95XkXcyieVD5tGnLCT9dY5MhMon",
  "key32": "481wJQ76ftW6DAc66cA2tsRtZePcCRhpuNZLbTc8PuXDtaYvmHMAkU4Vqmei6gFeTtesFFGn351Mg8wKkvv5Q49g",
  "key33": "2zaDS8f7A2M7frVcrZEbYk3a8GQFojWaaBYY28wHr3tCyrDfN3rm23AcCj3chEaHWsaCDE5rqqnTGAa3TAM1erGf",
  "key34": "en56GHLShyFAo3LEGmhm5fkWXT6md5iTTXmYvJV8DdvLWUPPGhcAih3d9ZPDTAcrEsPgexDLYAYUWYqeTNnYPxz",
  "key35": "62oVubdHrQhRBu3JMqhhYVDwULSjr88QM96BS5jmPpX8PWDNKGTkqTib5HwoJ6ueag8ZMWf1sJPPGWgogfvarUCb",
  "key36": "4EG66Xq26tQsrFAk433PrmGcCitRc6oPMN58uJfR9wtbRv5bbD2fyWJH6ZbqVj2zkWk32mgD3ZqJhwgEmrQoJV1Y",
  "key37": "2VBgWxSTTBaoLUZzZNFf4QDRnoGdqriT6eZmWr9WuJrvKX4fBvQsVnLbwyozfvgasWRPcr5FMT2qKU778Uicc7L7",
  "key38": "5gweHhq5MwR4ux4SrLYw4TCKzX6psG1ck7H1ZoC7EQW3Mqshv7ooeY8xd9GStGqj8reg3odU3WpurgT8p2RJCdaL",
  "key39": "2FGmiib6HNGM1D6LNee8edtsNASFV1gf9K4hxLc5pXr1GyVTJbxaziWsU23bdRSYQCY5pTreDoEGafeHALzrgEg7",
  "key40": "2yNNqrB5jT7VFrReibhRXjHYw6Uf66J99aLBBcTxHqVv2e8a1c53fAgSBTWJ1Wrj6ibjN8aBHPzX8euqvD11JA8T",
  "key41": "2BPJa5wqjx5nT1qbDWgcxgTjQ313JmmfPixuqB4pLxZkzf9gAu3hrkMsLLCD4Jh4DQYJLVeZ4otqtshhAdbeGFFW"
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
