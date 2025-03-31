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
    "4rtreiQxXWkiFP9EJDmu7kSTkSQZeqxbjmLRM5NAn5rSQVotbqLUvPJdt1mSCJ3dFKyViPJL8HBs3X2b9EDE1TL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FZhKsWsdnk3KK6ayhvLoXUCqtD9QZ7q32gnWy7eAnp3bCnAJsFpP4gJbhcB37SSZBgQYeKhQYf5kRyMfPeP18tG",
  "key1": "5hMpYq7oRWqNTSHjA49d7TvHS3QeobSQLmg5YGtwzdGXgg5mdur2DBnbBtDicrARLL6HC3k5a7MnsTDce58sXPUm",
  "key2": "3fMXyRaS5Go8sGgwWawLqPXsfm1bqoLeTKkk3JANkZtbaqmTwocnmBxbKuuudbF3Bk3qcZgwkJeY4XuEmoz2A5RM",
  "key3": "2nBSEkE4HHj81SMVV13VUJPrbqyu4QgaxhMFcHT24pJoY6g5KSJm994gvocFaaQLbcXWQErzRP7U8mFWyGhBTu2f",
  "key4": "5WnxTChyyR5TtskWFvuo2YGA2pqVWUsHhkPH7ZenLkMK14TJ1xqJQWGmdMTsyFR9eurpNStvro5chG3QXNMjsmMa",
  "key5": "3W6A46iGbNVHUrPAQrTEPNJWykAu5t7XADFM4wwDnP6D24TXXUu6WD5zzzkwAbfad7XeuPjdwc3nFM4XsmFdWuYC",
  "key6": "3BwogWgyMZ9bUJeoXXKwLuTPWQf3iSWTnhGS79AM6zPzjUxeEQkaNm3Zmup8qkdttrnHRjSAraNenpHnHJEzGdRE",
  "key7": "2kcZawDDjWKpJifUmaTcMQacLg1io9qh1WYTgd4JpPKBusUWL6WW1NDuUFZSmwNFSaaHCkTUm4rnuX9B77GVegR1",
  "key8": "tofdXj9sS7C6waUhzvfpgWuCZiVp9Y74tQrxDR7iZrFTZK54XtaS3NSErq1Wut1XHjtEePxMcuqC2JCpWfnAjgw",
  "key9": "2LcEXXwPD1vw6UEf1jGzb4WuzF6dHvfGJjnahJH42AEAwoxwnt6CnmDA6Wd5nMzVcbwR9QQ39AKDzBkuQCAFsvzW",
  "key10": "592WnxEJ24yZyMGgiRS7DH2vWu8uHvArgjLfwMLnMnPcgTxGMFLgPSgF5F1JuyXyBRFdfRVu8QCym1hbYk1vMDoF",
  "key11": "gqdYrRQNTtRhzp28tDxZuus34BGGPDTpwRdHXFWhr8LYz1mYk83zP8Lrp1PRreUqVzM7681ueQgbMGsFWyqPbq7",
  "key12": "37mGAiexpBV5xr5QA4ywfM2cPTUe98v9XCH53KpYb8hXC8WaJb48zMqjLei4VENH6Vtswtepf97RYjsck2NgPTh8",
  "key13": "331HjwNrjVR9ZWvY9YW2WA31YCzrihnXFHa8iHBQxGwFBrnDERSVhJmQABkmWVYqa6b4zx6aGnXycYUrUmhxi5T1",
  "key14": "4W2hBuqFczjxWoi3dAQnACqayAGGvmneVYZi7W3t2vBues1stQGCtPtZz4cNYu2LaznCUNX9byahgwAtkTAwzpjh",
  "key15": "3qnZo2a5MZSLNNAJgcFgm5QgsM44RgJ1cDnWGLNJPuu7UbXp6v37w1DAymV2Lq6KRFv8HfFMQ5Yp9JErE2T512Uc",
  "key16": "3nQLTwyRCcpUGpE9oKF6SisS1wqAjPGHHjtUNGNhVnzXgLLxhw5fMiGP3QfP4cAc5SmajAYdhfgQZwMhACKjsXR",
  "key17": "5VmT5wejDyC5KJh7KqeW1zpyYYgfd1B1yQWahRjbhBoJjanr9vfjeJwJqpvccPQxkQxVtGqrNiB5JbhLusbZEkTN",
  "key18": "3eZsg6CpZnmYSu4b8uK54o5PpsaVZx4XY4e6dyVRwV5Ny2QpXNM561iAvL4bSPbB2zSuV9k3K2c55dorNavodAXV",
  "key19": "2WiXzqerPieHWShuivb2cyVBBW5FpEgGzsbCLzFKgd8x5PkuJC7EbSbXcp5N1jkLbyQFaiAGUsqkVYXaYJ9vq4ej",
  "key20": "5E7ndHw5qXX1fZc5U5Z4JHXgkcnGSyyZgGFuALABuzPxg7P1SnPPtHT4NmQ6dP9wvkymPENTyWudS54w1KnqRQFr",
  "key21": "2EVWhZXzBXPrhiDAPQVLiwQ2EsZXLxztbDo2TtHLBU8Urwci9iezZc9FeGNWYHb9jen1SxZVAUo37CL21aNT2b3v",
  "key22": "5dhwoYGkQapoKfHtN2fu7fg5BSHfDUTAAxtRkJoexYSvL85DPJTqBBZ8ugfsYVCztQbDW7Q5f8un3MqCWyLx7aUW",
  "key23": "48twLGXSjcJhX9aq5cgHDjMQaCPEsySdF444z8ypA6p77tx8zjahW6owYiswBe49azUJr67aGmmLvwUgQUXEuvbg",
  "key24": "4PVVAcNZb6vmGE695nyiXC7kwfvJojEy4wLfq6PK5DXFZ6EASb7svkkGn2KF1jXkgV5SqMnmqJTMbygm3Tmn3EiN",
  "key25": "41ZhFPak3JETnyQKY7yovikk1MSkehoS6G6k4EJWWKnyhgF4eJRb72Hg21jbVrgrR238coKPjhPxjkbzieDfUpgQ",
  "key26": "3kg766jyRkmzBfGBm6VNH7B1CDW5kXvijjPXa9VQ4gwsbQuzL9UzcGvy57fAJwwynuE5cZd7DbXLHF3SoSNBqNE7",
  "key27": "2qNp83K5KqHvYWx1w25QHfa1mzob2fxshiEvvkoYZHUsmHhkYQc552cNAAtzg9hZVACib5jt1gw9L39u33t8mPdG",
  "key28": "63Sio8We7v7efsgbB6ntyrNZ8aYWLxkCpqz4y8o28z8yfKoEegLecGwepbApoWHi5QDfxWF8fNv4th4oucJvyVbz",
  "key29": "3g8dcUdYU2msZtERZ1ADL4E7ksgM16gKxmwSJpPbQ1vdmSRnfwTj35nWxrb2yRgmEZHhBGVpq6DfwhMDvv8SrPn3",
  "key30": "54Jr7FBG9ToLkd4sCAQA2BmSBPQXP3f5h78S1i88dhmXc6ju2FXBCw7y4R53tHDT3CGxWobSypApcga1tzDYewXs",
  "key31": "hUX8ADVKzrVezJrnBYQGvYcbc6WFZiZpB3xKtgDfGaHL2nxhNaJpiPs22wEfYBRz4eq9kTxNq5MJV3ZiskbSEDw",
  "key32": "5SBaAicedcDrYuAyDkCR7nf46Zs9f6V5aCK28yF2YVXM2yTp3hphq1avBkaHniXYdkkbs7NRo6c7ek3cMbxi5urz"
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
