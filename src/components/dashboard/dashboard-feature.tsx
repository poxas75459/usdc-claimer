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
    "ji6n62waaNhxFnRgzge8wztHBMYCaL8GykKCxVU6w5HBPvEeq9Z2pzfguyHj9ykyRrUa4BUzcUAvxTeH4o7Xd6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dS2c3dqSmX35XqM6Mu3F9V5xEgVhuRN8JZKdSXWzk8K7ZehX2RmussMkmcTmE9KBDN83HLZxAWr2C7P3Fro3iqe",
  "key1": "2wpQhzy42KuCTXvRBUcSHFAZmb52uMo3At2PQJqaZLBqTJYdLAvxSELeEw38jdCETsND9NpnPKhGakxjSEYUjAHn",
  "key2": "5Qv9STEgKhuMnkXnyeAN2AYrpzhaKEpWzvdjaWg71DFJVxFPFTs1n7ebz52nEYhBrEqnWPzcdCRwf1FqpLioFhck",
  "key3": "5KfFLyoKqPJiZR6oxDBv2BGmbuuXpxe3Bq75wySJiJ4fKT6QMCGejjUrHsHbcLSbbMvxhfLqbCPks2rV41ed86n9",
  "key4": "2TF2RVjS2C3UEAQg4Bi7b6Q3iWegBCcKb3kKQcBQHHtTmQMdPaLqAYPEhyppHuDxt8KXUAPTySDYsPemFs6FqTaZ",
  "key5": "2b3V3U74d5hGahVHuKcgZXRP19SayVF9Rexz8oS34VBKh8W5a2ccXXQEb1qbBw4XZy1AVZLo7SbA8zNtUm4cxsLR",
  "key6": "38TcCebMttMvVb6S1w4nwbE6WkKdvwnrBMWiBVphAERE7urffsUPnuqFiQGVmaVQCsaqv3d4yAAYC2pFrx6MGMi8",
  "key7": "677rGY7XRpCro2wN1c6CHWM9Bb911HPhxCYGhFcfVFZRFey6fe1q8eC76xRCZqgathRsVD4tipPZsrKQt8AkXCb1",
  "key8": "4F7GT6TJxvokCFVTToaJU6j6mTgpYgKiou5WkqP9fVt1uNtGng1ngkH6sm5nMpkjx9SXNedXDzPgpqvWrJDEpfds",
  "key9": "51AX7thcV6XnQXAzdwFNkHRcXPH2vPiMcuSBFVJUCzNQb4f8bTntse2X3E4CvEC4WbpDbbjvKWJCNGqUFKBd8MHN",
  "key10": "mrDyefom38V3hA9Yxg39pCZ5ag8byWCCfCKCzvgvgxFpNNnkj6Snn2eT76zju9t3r8MZKQ5aCyVRDwtyoaUrgsS",
  "key11": "3gCH3xEZ3S8KgYKx7x6Xz2T4XGoKmKHQ9x7Sa9oq388UuhqzVLvoEXWqEnkWZvRjGWeJneAg4xxNQgDydK2tombT",
  "key12": "57bqdyu3i6f8B1EKi8FtFALhr7syw7WgsC54J1hjd8dRLe8uPnHRGugTSBT4EBpF3ijqUJc9cQk7j7yKQRCEtroF",
  "key13": "3TqKcFWgihYg2RzG2mNGe2bRbYJcRuUgrExytpYHsNU8UerfhW7fzYoRcnjo8wkupWfcnFATTFfTaFXsPYco4uWF",
  "key14": "2BK73rBiDqFzDQWDcvMcGa1mJViWC33RQvVpW9Wq4PtMVue62RLQdzWsXyqxbodRBKA2gDVP2MVo2xL5FeoiK1aT",
  "key15": "2FMaj984xMJaghR3PGfViKJB5mTLxSbFsZRerSGSqaWpFNERSgY5QQhuCCK76M4yPaGU8kboZhp2T8r4RFKsfaFb",
  "key16": "56Le2jeKFmd5tnCvq7fHgFcbncR2e76SKYHQYiVSxmUqRhVXtg1d5YS9AEaHmXVaXmK5HTCvgxf9umq4f5fXF39U",
  "key17": "2DjBWV5uxmxMAW8TX54AwwMA28VzfniQZt9h3iihmYYcV8mz5re92zpZQueynDDcRuzZ9Qjq5rhK55V6BSJxSir7",
  "key18": "2yt6y5z8gcaemXAxfh5HhyoZpvk1jsLpEpGCHksnFtsF6YpQJGdk8S2saY1DZxNAQkeipyVh9hPMLitXLAbWNfBn",
  "key19": "122HGw24rvBgwMo9nF7dnSdQNU3QLqnd85QyfzbWgeT92iR4rdB33Bywgr87ZGFdR29meZUfxiiY6ZscEW8fnf5u",
  "key20": "4Z3iTFACoT1mszrLbru7Wxuu9hddgd5c1YsxGJdQ1tzJ9xASf1PqKBY7KcBd9j8uocWQCi8k6mgHchMtcEGiFRSG",
  "key21": "zgHKarHKd3FqqkETvseE87rKfmSafw72aHHfCsqFp8u3RWU9FVyfSPVdkXBujYjzkCHiHBJYBgDToqCU2E79VjB",
  "key22": "4FYWpgQFEz7Q5gFARnZBzLFdGcBWdmEo3PrEJMZaurxUdyw919yNLxRAQzZ9iZ4MY7LDz3Zc7HMFxrTPRiQvPBUX",
  "key23": "4EmiVxa9HQMGwj85c9qXBhU2mzmEsSZNyN8yYtn6h1v6RLgB7wSRJUrVUqzNsW5qyg8tWLBeqh2wyuYwVusLhetT",
  "key24": "247v7fzNgyF95C7Wgz29MXtj1gpQk2mjGs83DwCqaSY1Xd7Mx5LJERAyGmVJe11mURsmLFEaMNiGgkgePg7ajtay",
  "key25": "2jGusLLSvfVUJZbnpWjEmSSxMEQAyynm2qtNaxtbkDG1NgwhGdGPVPBMkeywzc4nAiuLx6G7xpwtktw62zCMNyUx",
  "key26": "GD8rmkZCaS6eT5vuq9Ebq1LVyvHUEbUFUutQKNdgdxDixbNQop3Un9V5r3zGgGoZFPkjzwjBHtgkqBsHCDFDqeN",
  "key27": "4A7KbJ2FJ2MGsuWv2tnmSukz9h77kRWCR1JPCyjUpTXZU24iNue6SmAKaibudH1BzhGBdky7HwHXarHi6tGvc1Zg",
  "key28": "37dbchaHydoCzbyt75vZiKyR3DfyNYyZHCgC4eBJewQXLLsUy8uGJ4Gu7zsvNLfNAh8SKigQ2WrZeo4p4oKrhQsj"
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
