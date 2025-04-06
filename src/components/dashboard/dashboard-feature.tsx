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
    "3e5z7YBF53mcdGfMbrWMy7SwbrXbVUgE4RUSm1NtYMmXn1kN8cBQXMQ4eHzrqSmx9f48tguUfc8kF4NYMqoeZN1w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CHSZj9tvmsxqMFL4xEGLb3JnKoSVi2qsspQK86rY4N7LFphD1nTegiRaJXeSEW1cq3MTp5oK9DkpTNZkyX96bmb",
  "key1": "5CK1ZSTg5iT5mXuATJVFnHgAVGHPPRNL3GAiuR9USqvdqDjtjusoiFJCA5EFhsMac5GMCPaScLPg13SfTCwrceF4",
  "key2": "4VEn6DSiTrsKTa9u1xiKRz6d8TxELuom2g8DWs6v8yYwZuMV2zTPDAgReic2Hi9ePGjat9mBTViDt8AZr4UUpaVW",
  "key3": "3Xuq1CCYM26Hjo3t8NSo8RPH7YcYDtKzP3br67XFBkxsY9Vfvae6seSc7hcybmbMooBVHKPeqUpYXRWxxBVZRRJ2",
  "key4": "3Q3EV6vSqhziTbwz7N9i3HhuGYijhDza8ZCxbJ98CkrK4qAxNWAtPFngYuqirCTrK54z3fTdYTWnVFTdDqUYpvJh",
  "key5": "5GqE1LY5mr4gZZQZeczGLJkoge3RkiqCv2jfV9gD4CSCPfrkcawNoX79umw6WiY2aVWyLnwRq5GEh57eCUUK2dfo",
  "key6": "4WLAM6zMGiiS8Z7aomgfRdo5fJoxuVkzZ1DFAN9kGZASDwtyfxDKu8csqcoJXy2vuDLFmc6zp9LtiyhEgzcwrRE4",
  "key7": "5pRGtMfrozigUiqY73nTN5dCXvciVZR9X3gias3j331cKXuqVX8Rnyaza7xXZNFBqUS6AT1RV8nSa7PrfGMXvLB6",
  "key8": "kNAej3WLFZ7Pk1d4ZYUJUhGyoMzKe1hUGEXNHzviiuSwQNqVfcjcmZx1LHnEpN9JeYBLG7e2V2yAEy9LdEngERX",
  "key9": "3uKqwsmeM1t7HswoZW46EZ9e1rWiumwqBw1Gn7z9Np5cPGdeHYB5McfQCogNbmYfUF8h7s6jLssJeGipNsijNruV",
  "key10": "5xHbkQfmdxaTLYhe6MwUTvLLKMMs7ETvbdSYJoZC513GcovGZUGJ9qwcTJJzNLTPEnxuvMNeqA5zNo6cX87hbRBo",
  "key11": "4u8rxTTRj5qQNAX9Sa55fyjtb9bNUPaH1QyNqkTicvnzSXw77LBxPDrQLJY5GFS6vxQLtPe7EnssNeEKtM1ra9Kk",
  "key12": "43sQQZ5CHvuepbFhrzeVWVvVFzgTAuhmvFhFhfs78ShoXZQWwsRKwfWK8XuKc6aq3kXugz2yiwcmb84TEbHp3o48",
  "key13": "5RJDacntFhtWPmZe1ZYJPGaEttvK8PsUfCs6puevCEGjAMrPjuoQp9GJjJvkZd3n19EL6ic9yWdLV5iNMxS9JhZ5",
  "key14": "sq2AepgFZ4gJiqNhiu7CuRyjjA9uoAmvZk1DkFKKuhNVh8R3w7HVtFZ8RCkJbBg4GNmvDGK7SrxEF6ccMDRnp65",
  "key15": "5MA24vaqyZc6yiHrsc3P8n6DEbActV57eA8ss4rospewBCzvHaZAy663s44Up6qTFCG7emzhqZTdZQTUv25sMLw2",
  "key16": "4VJm6EVgK5EkBomimdGyqMKd4JJYBqjWmDg1axTJBhM3qAo9xxELJGcAy1W3pyMRTRhszoAaFysSnoZE7opywusR",
  "key17": "3B1R3ykyAbFZHn2E95nH6i76nxwoKdQtPhNE3FLiHv6caDjydzQKtojpBXgkJYnQRXEK5jfhi93sbsF8xDH5hv7D",
  "key18": "TSYjiNUgXoLkrxD5C9zAV46xdHuqnzFK1bw3Ngwg2odsmESCx9K8nehYj7rmdbaMZwMYjNxdRQ4zfm5VCfL68GZ",
  "key19": "TQwcMKtFxNAkjbntfnHJ3Gaidp2ih6ArS3XFfGK49bs9b47GS89miEBpXtnaPFK1My8oTFFv57Nv1S9NAu45rGQ",
  "key20": "5tEMPeBdEttisrwdXwZfUoVNVQTcgBGrGyN5kRpj3ghHUE1NhPFboyVHzrc3ERZXTuxsXwXb51uiqVUVvuBk2fQ",
  "key21": "43u1NnLD2UsbDzgqySpfJpGrdKQiCQk4KDurQjaW4oo3aPF6mV4EMeStgg3HvL3QTRmu9U3XoRSAW5JQFY7MLCu3",
  "key22": "JDRW9ZQcjnRn3bD6rSEnD7Av35AHykhW9mth9X7crojz9RUiWchH4eUFUPaFQMiAgWxZ5kDgkdSrvReitvmWm6D",
  "key23": "3SnQTmXKXxkExc7NxJBnCDZQi7GcfmeNcbxrTNkYBTpTdWkEBxiadnrXpDs6eZ6szjYD8M9GYjAj7puyynLLAx6e",
  "key24": "648jbKSiXh6TohccYyZEGRZqPnDcDT1yv5QZ92y7DysvEDmbvFrKQW2w3TzwjgydRC5q6R8Ud9gr2faydYSik9s",
  "key25": "3GkV9opFGLarCwh7yreNAqeA6e2kXsxL1JcsKzb5fNEEG6puF3BjZQKeMewjKrntH9XooBjWHe27yjaXV6UiGDCv",
  "key26": "487Acvc7C5Zw6GXJVACjC1EX5HKR1DnxmVZrm8WYvBN9rJJofS5mT4jVxVhrQo6nr76zHGA9RQtq5s7oTTnuc5mU",
  "key27": "4f5qUAeQnrCjQMHunrCBajdfh3itYFqXJYXg2uH53JMxsu56WnxJUUcoYTa38JfTsh1H9Ph79gjsWkypdqZ2uiE3",
  "key28": "4A1JtvLvwTvnFdGWyHZyGxB993pK9TttomP5a8eCYdXknQ23CEJUfVzdzAKLbddic4gAQQLn767sC9fminUVWTpL",
  "key29": "3XQAgEWAN5E54YpGjuPtHtJXvEDtT5xuUGDHs2W3DR8tWmpCDTE1z2cxwMdkNgc7J5vuAYXzAWjQoAiAdaFdsjEc",
  "key30": "f8hfxUBPYkHF11HgFh5XJWrBG5AdnNpd74p9U8c8gHHQpD9pwuHSd7TnxGbuX8p93Crwg6QmkofvwwLsP5qv7cs",
  "key31": "2nt6YAF825HhixRKqN8jpuC3MkT13XyF7zw52wdXna59Xg6fm1Wm3niXcxTi8utyhJyXS1c8oEgGQLkxXLyq9iP6",
  "key32": "4VdAXRDd4xG4yzRVyBuUxFQi5ePv3bFPax7pT35QwGJRBY1DmpyGBWLcGmnPJ5zQMEfxyj8c6WhBr5dtvFT6B1Pk",
  "key33": "65KxRbAFyvnqvWFLtnKnVqVGJzvXErbAA3XX8mqNY6yy3arkXqp9JnPYizU512ETTp1YbtjKTec2eDkoFDfpmoNn",
  "key34": "3JUiunRBB31Le734b48mRyf2jjLNHTFhzt11Es33iNJAuVcK93vsAQ9pCXAZdgfv9br5rTzYJNSLHELMpomG8LDk",
  "key35": "PPsMMz2YZQcgtGcCPA9CsHJQm1XsC5tWEmuvZgEbAu49wtBJWB1YViobZZRkm2U5ZJAKziqKEZEvNRZQmrVFxoW"
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
