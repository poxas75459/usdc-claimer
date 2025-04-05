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
    "2y8qRfYK8E4MC8tXUqu2du97bGKHLyc7xVPRKY4VYpwahKvfGHR5JvLBrvzunS9proignxr41Zfbhy8U96X8FUKh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x5QiVBshTcCNPLcVZXHD8qaajDyg3Ev6SBKZvHMRUkiRbq6NpkGyJfSFkbFB25LuDWhMBCTxNWVoy5rMY3Hb4pF",
  "key1": "5vUWjyz7Dx85STKBRdS7C5xWdqgVnUNQGHRAugDj31cAE2xA8b6G68wNrwLRFbuV8mUuW8gUNcWdyiKDrtucf4KV",
  "key2": "Z182rxJF1cSh3BBbrrFuQSZ4kjRvTKMAF1ddNTb4be5b2LfptZBKMC7hMTP9ws12KsqHrhrzfUTznwaAjoNxNKB",
  "key3": "3QF16utwhNCLe4pAuxkNFVAY9LG9vb8CDJHKVS76rNbFtxjHJsSXXH1ckHq94CWTZpDjW9RdAcxuGmvyHUz2XQHT",
  "key4": "doVHtHkavaSUgxXyc91zNDo2QYEp4GS3Dox6G9PYCHsMJW4LPK2yEZCfAmXbeXsHKEQwxPtPzEKKFPAou74RYdh",
  "key5": "4FZTHGQG8D8EcSBFtCoMQtbpVCMv9FLnnWTSDuJBD65UENHbqV9AVMaHmH4142vu9CVQWLFw5xbtGTzPFbTDafDJ",
  "key6": "2cKpN8xQM3azamBDXXNPKmtnv24uxAu34LouiY5NzkN32RULXaEFirL1GpeykihGZVA7GNdbW23fyR5HrJ7umrWq",
  "key7": "25RtW4Ftn6bF2WbcAiSPTpJeWKcMfW27J7HM4TbsXB9UpSuqXJ1x765Yg86d64ZbpdvchP3hs96jX69PgHJZvUeY",
  "key8": "2C4MxDwo6aWemnpWgxnHCvni53WyHi7dqGhH3hCEoKhhzVZMpczzrn7kNzodNhzf6YVJKx5t3nSMYJNBu4sCxP4G",
  "key9": "5GvSB3bL62h2tKN2geayygMFScsxoJXwrZYXZQSo3Qy9ARLaa1FFeFDYrnpCUoVANeE67evR4uamkjfeHjidjXZv",
  "key10": "5oz6TxwLpBkgbWaYqEkaYbs3RKjDJmLdBZwFh6BFsbk2cQQNn84q3hHt9fgaNxynQovNwvTuqZgQ6bmVbNZeLVZi",
  "key11": "4WuQDjs3DyGzZB5HicCgiQMzMqJJ98w72XvuDuPh1e3bzdRMFAUsAneByzTEgkJ5sVPe6Tai4zRbkuAWTyxQvu5x",
  "key12": "44KYZ7uU6cMQXmVzcS1fJyFLV9udjmdfGetWsrVhRAeXu5eEZhgHXJbUZ5LNGcRf1eKRAHiwG9k4E8iygzhAHuXW",
  "key13": "5ZMhtbqbAVLBQoXDXxufthoPsNJT8uUdYNBG3e4fahTMpzTGj8FQs6tVVjtZMfu5DTXwKTRU7wSMDpEPMSkvkcCt",
  "key14": "5FqujJ6kqFiM5X1HmN6u1WzJ5pb2S2627nVDNjqZGtBbL6iHkcHMmj55ja4KUE6JPwwaUxzjvQ8FdsbxSZ8LNHRK",
  "key15": "4Uvzw2iHJmiKXfw1ukakyZ9s7oLZ853kaJko4dLUHhFj9N5rwJGjzgj4iCS6LVX3quUu5FkpE3RYDabQriJ39LF1",
  "key16": "3trH7qrpG749Nx37h3iTQ7fTk9HBQMsMcSGp5Ag6XyydDyCjzgz1piqETUv1NwzTo436tuUMw4HQygXEvU7Bg2M1",
  "key17": "32iALNb8izPCmzvFxJKfWGkCiSLPFnsMYe8mYZNfvjbXGFbfYXRqTXjXkKb4tb7Phv5edP8cRveQhdAnMfRwYpmm",
  "key18": "7QLpYmfe8ssniDmzLQLEFb4Y3tXiBhcYvzJxSV7osSorkFk7w2L5ni5foJoyePBStAmeqZKS6D2E6A8EP7RCvHL",
  "key19": "WW4gKBdBS2WeeXPqvkZhZ6LK2AmbDewK2HQxjtcQoDDmbTxt6A8AYaMm29BnwVLtbNG6rhxzPGhodFd5KEEL5ue",
  "key20": "VnRB7ngoF29GGGr6Ffv6uUHSe7KrUs9zCLZ9uAF8JzkKWiiaaTaoLmMj8PTL7PWCseCgLdRJxP7m2RuGNoA3dq6",
  "key21": "39CsLkqpHCKX5e41YmTFnGkKSgsbpEFC7jLCKxtpsfsDBCuJEEmFSfWjYhxTdfTevumcY4Dgd1X3wTuuoBMAj8GM",
  "key22": "4RaNzLBeqShfZnTouxTS4N2aiG1obEuuYjUZHCPLh6EvBKncxyj7aDUmm6ZNGQxKVLHUZW56xHEtxzXh4CuZVNNE",
  "key23": "XQxVRT57c2XPAU79J6Q8jcpcLdZLnf1hG9sNPcxgfxGe7XpWL5wByoSqHwLP1eY7q9JGUZKNguQshAJYWCfwp8s",
  "key24": "3iQZdsvB4mY7GaayfjjxdqKhR2VxENMdwmV7nRXYy18Jsn4nfCjrXri7bBiXuUNYUnLSvanTSfsrMGTpb53v5tvF",
  "key25": "4cypizGEeGpiFUsUCHQ5WSyBstxAyu8aYbRd2AcoA3fnmQFbwwMNBnX8q1sRyTu3RiGNqyz9uUrXz97owE6Nmp3A",
  "key26": "4bufTYKrdGzzEFgWCZqe6rFVKaY3fQVnL7bywVQNvZCZXPuyceXra8fk34yUGLScNmUq2PShjnkvxfUMPRNAvjbS",
  "key27": "2G6egDFRHkvTQX9i3vhosZ2DqVy7YcCQKmwwaZmLV4BUSRSiVxPrVTe7nz3nRYgynA8HF43hzMxvgqiK3hfYoGe3",
  "key28": "52fZkYKm2LF4hWVuaLaZzdMKRWw6fMnzDpMh7Cp9dcyUyxcTmTVHSaq3gwVQj3gdWmU19qeXBjA6ixdPSb5HpV5S",
  "key29": "eJL8hzFjtwNBBMmZ7PXuP55BMQPZ8ek29FEHh1rW6hnHJ1hHmVKgSv5J9YAF14rGcGduKXK3uXAgQUcniQyCx46",
  "key30": "5wehqjnDxhJoWgnWiYidDLz59ucN7HBtNFZcS8jXKCabsL1G35d3fr2HYNL4R9HM8McP5JDUbW3D6QHhj8fCYXer",
  "key31": "4jPi6TuKykg6Ncy8Vkqgqs1M9ZyFiVCstv3ZJ626jdrGnGghQchYNtcLQdk1jj1sVXr8hQDwqEcq21MbRzA8Sdfc",
  "key32": "58wJgCaPFz6PbTYUAGeWutZ4BJmxfH18zAMz3AcHoKqjNpFXduCmQsUTeMUwdByeqwFUVP9GVdceXof4C7mhj5uy",
  "key33": "3vAQK9Mi9S5KSnr1pFbBRgbgMvJcXDPH7gTMeTCvawD4DN3Lvk7NgjNd77nfjNYx1DakkbwrKjej3nVcyshtg8EN",
  "key34": "4d3DR4umEXum5vcjKvrmwPe92nFwZaM4xsfGys8JVbrcXdvyRF5J3bdRD7y9tfHY8SgspFV7ooqoWXZjoa9VPFUY",
  "key35": "4TpychLaahRXxksFR8ug6ia3kUYaPihdgPMtbCvTRFM4bssc953WS1SoiZNMzJuAHSDnk5yEcAcRsVUFgtNoNHMX"
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
