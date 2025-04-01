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
    "5wY3nExtmPrUwBFcubrVsTS3HNtx4Zz4MHTXnUUzEMb7iHhTskgYy6jSG1YftDgHvZyXH9jyTwu7KztQaDovZ3e5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uc4WYWaZv8ZpVGDKfcv8pLuB1DYmLGt7YTEbjXLUJueLM11T62Kr8yRV11SX1cwD5pXaz99Gcx3hW6uHwQqUTGp",
  "key1": "3e7vr13qvGpjZ1zPRceCWMbGBXNgfg5KSHVqV9Jo8r42diD335JNCPKP3WmM4KtzwtrwkfkpLuz2kKtwvTzr3YFL",
  "key2": "4DQJQesfZhTvYXp8291scUusyRSeLtvUivNRrm739wvjypKJFgPavA4P1evMWiLrhbbMAT4twoyY6cRik1VUjvCd",
  "key3": "3iQc5W6asypLnyVnNtYYhKbdhp1WhggugtQj4CnYa6kZx1EEVtbqyEgznVH3hXeuRjDNTceiwbQXd1BdLLm1E1AU",
  "key4": "5GJwmCiUGqPxg8wuUu4eLbyaCNAQZ2WK62hQHqkqxLF7XEXXy1mEbFXqJ93kEVVuF3pZ2odonJ4sGgum3HdyRNsy",
  "key5": "SWdPg6DE5X4qEdskam67geDLo8DeKrHmf9ecYHdcga5yDqk6K9tY2d4WbGfeD6mZmgc1393NjjpqHc77EvXhHH2",
  "key6": "EByUaqpD4fBSyWTMTwbZdBZvWPbNDP9Dw2bAyZLNJiiEbigkgo8nJpa5EsidkACoeM2Gvda2QXYuznifpi6v5Gt",
  "key7": "2itobh6N7Vgx3HyxqKA7vMEr8nnAAxj3K44AzuAR8XHjL4qNJdgWtAiU8o44bnoCwXFpyFgMhodzJXVxrBinD3vP",
  "key8": "3fWErrb4qUN5zohbinQLbRrpaN7dBQoz3CcHzeihg1xN8xyhJ4GLDQ6VAEP4nR5UBoSAFqaZtHDxJjTVN58n9NZh",
  "key9": "3D6xNpEfMYagnPzjnoHihFeHfDNoAVeGoTfon1vcFmXGcHKASxocyNYTRFv2WigZ5Roq6RjhCtRHxVQdXxudATSf",
  "key10": "3pXtMbjLnY9Achc9QwtnfwZKhN5cFMbj8KoPg1HjgaXiojt6Ct7dPryda8MH2NT8WWQXLMQoy2pQR6pLcLG1edBS",
  "key11": "67n3pKYJHY85jQidmPKhNWhGC3X6Z1Pzmxv1HwujKVQRcQdrc8kYvvmxZvC9TBkYQWY4Kk2BvsHTj5Gfbzb2i9ez",
  "key12": "49QyhDpugPLUfmhtrsL9d2gVdymPysvjDDCTqTSM2cexc8sm4gzRnGhUvSeHh1axkyWDFkEp1gEdAm23YzejD3W2",
  "key13": "2GkKnUBrYvGUoCvRUtms899KmKdaJQeyPF3VGKeE5LH1Y21tXhV5zCRZb9CXkVKvUnxVUmoMFEVCwiAShMeYE1GL",
  "key14": "38CfuaebxAVJ99h1fr9xDBUAwapQtjGSvVKfr3d2kbyU1oCM8acctJRZvjPVESzJMkhmLDHcMFErNfexWvoiyVDk",
  "key15": "2LcVXrerysni5VVinRCh7ATAKh5kqKSH4VDq9T27QmszaguhjR2MCrPgzaif5sQSz4J7MAzACdXHxXrTYURczBWE",
  "key16": "4M2NmBNjiYjb8exp2KQdK4CobXJPLjU8Uy8fHgQcvTkiZkWuTH6d1dTfr59W7FyMQzJxWCWg23zNEdrVf6RGYJyY",
  "key17": "4jh4rC1XU5fBFYhKyFQgJwkE17Nr25J82B1qkL3wbBagHHU815JwNrPEHyQuydCxT3MVmaCMB9XZFi2mVWURHpE2",
  "key18": "5r8fcyd7cXvDkkLaQBE2kbgeKvSaqdFP3GC2CQRbctAZPNtXswiUxvbmsW82w1QTYNjErGUsyGxeL5QYXyDVXzw7",
  "key19": "3WP4UjU8AeR9ULKET7EPPSPsV9ULab86sXaa32iinFgTvLj9y6EqfdG4WFU5aSTyN77e5Ynb1NxqdRPPKT2Dp6s9",
  "key20": "2mKr9tqShduTpgWWdcUUHMYw4U41D6C8R5T9jpEvGdUZt6oQ3LcpBaqLCGW1oAAmH5MUtZAF3FpvN2ESeQZyJjTf",
  "key21": "4upWPrzbBhzwcv3zTVzXjcEBR5LSq36PLayd3H2wyiyiC3HnTxs45AGxdEquWLjWopaGtXU64ERQa18ngMD9d4e7",
  "key22": "2mrmzJxXC91Mhim6HuUpNT452DchbGmu8oi4KqmBDWZSLqSHWZVtD1qxVZzG2dQ1PLfkbkSPCJ3fDbstHdDwKMT8",
  "key23": "2koNzxjndAjiuMNWWDuP26wv3YENZST5AtAqvJBsjxCvNTRvoRZFY4pm1j5aqXGRH6QwUbpL7VkfLHnuHt3gTuNj",
  "key24": "vSSLYDzAeU7BH37SiHZSMC7DpvvEQWfRxgCnXm1jUXEDRAwRFLmgkq62gBDsi5y1yuu2KvELaf7S7Qca2wrPLnn",
  "key25": "4xnMDMZZ62qUyEGqKpWoUtuviG74WYeVGozWsqSC6kuNXgc9qSqcqAHv4E5iy9XFw6J2scpEb1FPT74wSr6APsTg",
  "key26": "3K6LFQBVo1vznSwAQQrD4jMYUthjG9mZpagtduqtKHd7hML9DnYvB4Cy4M1T6PsfyYFYwJdKL2NkpgaCtUZQh9nX",
  "key27": "26VNYA2j3Ht9sDmW92hMQhZDPNSBpMihoq1Dxza9ACxAYLDke5qCvg23dy9vgjWFBmWx451JKNGzC47YysPUWjiL",
  "key28": "QU6XWEPh2nKd1ot5jneZYTR9mz6abNWmtjXM1WXat4B5WrauzurbekZ5gKZpgJjERLtweqLBAnPTkQ36X94KX1q",
  "key29": "NFBPpwQmiY3bY1GkkPkZivYwdGEHNX3UH7WV4GcX8jxKaufRucFPjrCs9Yegk3RquPeKCv2JoFRy4dxk34Vb4X1",
  "key30": "4q1cDmC6HYF57ihhnKRa2gE6yBLRDoTMe8vdRVvtkv79gs34o7CUAco7f1PTV5KcnWjWTvMfQbmUSMNd3gn7dSbH",
  "key31": "5heUvGhFsME17Ntp8539Zq8YYNVMuWzSBeYz1jJiQSUeCQBzC8yeSaDmLu96yRHJjGSKQyaFysMnAxVkg17L2HqH"
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
