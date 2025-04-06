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
    "3UPAGmbPQmzeyZaRqJyiBUm1VcymK95696ndLLaz2PaCoecXkPFS9kzXytyj4QsZqvy3Tr24P3o3CyHi7nVjzttP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r7reCUryWQcPnEbJMQVTNDB3k5xQWhcFKTP5GEJPJPcuyh5Gr9r2aQcQmLywndbFf4z8odF1ALYrxFX7KYhzxoj",
  "key1": "4N6NfVYAm9xMEvPf5NPBtSDFtrCd4i8LvdJe41sXoDXske9hSNj8JpYbxEo2xNCUwE7WHQGSPbrTswWoHWT9eKPf",
  "key2": "pfmS94F5qgmT5tK66Y6G6UENRTxmSMZqzoMvQ76yeSdgikQET9fg5AEBaaFs7qqdF5ZPf7Gsh9z2Bv6Z5BoYt6Z",
  "key3": "3Bp9q2i6VPhJz8CnEzYzKQYBdrXS2HJubPy6hBuwUK9T27udEqhxTZ8sXQ9tAQDzYV8mcBT8qMHXYZzun5AACap7",
  "key4": "4pFf6ngx3Vmw4kwZY6JRPC8J2eTosFQF49KPGFP6QfYMoCSGbrrWWA7Z19ryBYCEw8uRm3Vz3VF9t9BjJuLNNaDn",
  "key5": "hKBYhgkPF3DERpVSyXrWZYxJBm95KYhsEPeMaYFQQoC3LN1c6GTJUuPFBza1rTtScK71ZF9V2kNH4fk55zYQmRL",
  "key6": "2cJPUaZWUb1mRjtWbMBKr89qVNKiUWnwAc8YoJs2GUe4RFo6zrghYejw31UtgR5U98gcdXfM1wcBjUczzz6StM9h",
  "key7": "3bFTmwTt2vyhQCCDQjerWsTFN2fs8MRL7SGb5XJFjcQtfk8fjvDUo24xeS892wZMbUEyCMN77o7ioT7Yq6sL4KZx",
  "key8": "5nKnvQ45jK3aHrY44k6Yz6ZxXZBKQNQE7E1FAieK2yCTLBFufdNVteeZctw6mKGVJ7DnV34mHg868dzBuABm8bPq",
  "key9": "3z9ekNgyq4f8K2RriyrdZxJjy11u7HQn74nPaDp8PWvUUh4sBuL4GX1Tbc19kWMaiavuQfR8Raw85wb3by7cFmFt",
  "key10": "3HDULotwkVLpZc8AmVKsiCsZ89uuRsQRn8cv6e5siNpAqDfRsNWYTEfDPRXUWmXGeaZsXafsWwXbkY3j244anA3m",
  "key11": "61XfUK3zPBoH6SpPE8mLR6QqfgdF3kcVXr4TZyfXhxw4ma6yUn6zBbsTyjnCkhfAuUNe1tMPdLjVzd4PcBxumrU8",
  "key12": "5ykKBcLZDPyX29QwKyzuMVeMZgPTpDqHKhYCwF2ucoSit49BaLQ5zoakPJi3WSUbqiRyhikuHgfnpKzn97aHe6Zc",
  "key13": "57phhPRDi1Y8Ty15ND9y5xrMeQs1U3No21aPQ6FpTEfSQdgzZe8WgbkLS7w6qwHkYF7WEi5QMN2H5KN3WUkpAmGw",
  "key14": "5WSr1rwfZQjcLd1U2M97p2AZM6pMjXw5rvWfJe4nBEVbAypaenc6NaFTTCVLJEsLLNM9TFJv19GjaecEo85mfa9v",
  "key15": "5B2zvCs6ijp2yKBvHgsiRvHtSPNtS66zG1b1DCojP3RVqCyTc2mWdqTnnNYJRuBFsVEnS33tX3vBLXQsnNsBR75L",
  "key16": "2Geit6dUHVaxB17osjz9DJA8o5uStdHZgMuBsStCBLRPgwrXTdB5yeouhT3TifhtDuoTHwVgQXkdVFcWNKvsYsyY",
  "key17": "FN3GzBwR7T6xU3wgeNqwF3kHrv8gBbhU2a9e8bemrE6ChfzjixmmG8xZuDLue5NLSSf7qYDXTDxmkPWqYgSrBQt",
  "key18": "3TQv49GubgrZRso4ueNPovwDHmWdV77YVkTLpESimCoxWPtCSh1vhmp4TojtpCYC6nZ2jEvRB1iDYgrFosLEP5YX",
  "key19": "2YpUe7mLTmdDqXNbtgqSjncgN3egk2pDnoPxsdkUQPHj7S3WpueqRXKd6UphhSyqrrmDrrH7eD9eMu9F9wuJdBbs",
  "key20": "Qyk6Sp2XkLg2PkB43sgCHKz6tTw4vCf9yTXe2cjSninm4wWt79ZazFCsT7FQFZ8mUBfkAvne2dbR8x7hssVti6j",
  "key21": "5Niz51yQBNy4qzwK9zqwuAqViuL3FNJPv8gad4rzdfS26HETwmC2RhrzqUCMtm2gz4BjN7Z7UpSeKKu2QZYkUPiR",
  "key22": "PaCBwYSbe7A8pWDHdBa3Jy5yAXS5CTzFYCoDkn6BkpgQXHuCch486i5i244vs3pZDjb6PCBfQUV7wTmhgjSANF8",
  "key23": "FTpPr9QCsfK8r8hZDCaDxDR5jh8FB6ZM65MpB8qcBQsZcRgufQY4LZRWRHaa1tLgXHhtpXCRsFvAqywSmgVb2Cm",
  "key24": "4jxLrJLvtFQ7dtng9gwbH7pVbsn55Zb8hcQ7PdMVXGPNMy97wTVs3ZUK2MSaQABUSVPcxY84urtWrPoGFdk9kQvJ",
  "key25": "5HbM37ZwqroT9QZoXxR5iv2r99wJ8PkPeq1YXfx75YSgeLuTqrLAZ3iGpueGWwwmddAjn83i47LB9fcLeJEUBUyv",
  "key26": "4aBeLonsspg818F3kcnww2FBTSD3XMp83KV4nDDbFsvTZLsqs4o66va12DQ5ZbbTZLNZ4i1FgkAC16bnY3yZ3fJz"
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
