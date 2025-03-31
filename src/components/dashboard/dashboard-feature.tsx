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
    "2dkd8YbWJumuB3HnXMk8NMjbr7RgLBD3gWVTgupWq2BeECxnDEG9iMzFModUDepCESw7rCKrHsmt9V5ZXPKgc2eA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1izrC1fEc1Wn9FFGCbuixPAHmEre9F9z6V97E28iF2MXE5csPQWuZq9rAH2hyqkxJAPNktC9J2tLeyQKNBKiGsP",
  "key1": "KerHDZi7Hay4Wawya2vJhzPRToFerH73cCKMdS8F6K29mxK15MKSBNaGnWgbqkCXGWbiTS9gcPQRGXTfpvFCkqi",
  "key2": "2QWam8DboJSpEockZYD1J4pyM8Dp8zyVgwH6fpddhGC7RJ29QvPvynf7NueUmwJrBw3g7ZBuKAQax9boddNSR58g",
  "key3": "4JNkEfqQhZLUXrcSfRDoaM6MzweNJkTXY6y2i76g1JcEi6M3uj35p9sSxugNncFAGBpTL3L8iAzeoU5T9N4pFUd7",
  "key4": "2Qywgdau5s1sRbNwfEVpNstfMx461Bv7PvYWcbf6Sw6KPoPvFeSAvYSiQYcqRmAcX3FQ3RhYjUC9Pvdzsh3RUXEs",
  "key5": "5ds1KhgHMbncB3hk4TmFz96A9T4t2F5qxhmE3YmARUyTY8sAg1kyLyXS6BP7Mgdzfw3Ee8oqYgNUzLem3cam1fqJ",
  "key6": "2Un33A2LJDTVbkMn8Q3Kn2i51rrAKBxWtjdXGWHVF9h1ieX527u7gipEwpsR2ZFxp9HY6JZQtcKUg67CvN3AWuZk",
  "key7": "4BEhPvR1LfE5VLDVypRHhTD8YuHjoAkSgsmNjkuSFD1YN9zF7ATCvB6YChsJRaVTQa8d79rcjQLY8YHMyQxRb17R",
  "key8": "8WdwSduo1mwz8nps14G3EaVareos371PGwYD6FSL3jadvzTwXud1kTLW8rZeAVahbQsZsrp3XcxoATPcPmLQW3e",
  "key9": "3jqW3sRCuayfqb2ZtHUJT83c4j9EruX6T34Gw3FNgGHLcXusRWmgQcYnk3mqns2yiCD7so9QWAW9qDsEYxdSwnFE",
  "key10": "3aoiA9tNXrNn7FSZ3JBTHig5o3wxMxBHUKNzCFzrYBZJ4824MyzgX9YVGmJcYcYzrMEVBR5CvqoyvdPTaZE51xHt",
  "key11": "3goz1kfmd4v91r5theDDKNpkAWtmp4dKsNt51GwmNj8bWy3fZ3ugxREAtjzKcc6xNwxL5hkVAazdekSzyadfsmpQ",
  "key12": "4NwHeJL6xemfkgXZf6R8Ry1gq3DgLF2ZxKhoLpDW9jF6o5ioMh1uaiCh4xKnsf3S9sigiAfWVfa8LF894A7eQQsY",
  "key13": "5eEyrUq1XZLktRygwNbExKNRq3RN7JgzUQJV6Wf4ZySAduwozZBc14s7ZFA6VQ3UP4s9H4Ry46sg1cpHFQb8Gcr9",
  "key14": "5asvusfNLhkA219wrrBudBj6VR1nrvstKcWTy7MoSHrCKDvxnHBo2syznjcohrgG7phhYa1aZqL2MZDvwjEnkUF4",
  "key15": "2LkSoaG2SpuYyiZLCpzZPWPKzws7iiHJtLEbJdfDgavHKT3NUCZ67bcVr5yHoifA8UAQdPxXhHfPBTHKDqXeyxaw",
  "key16": "25zCe18atGWxWYDvkQxRStKm4xrb62b6Ro3a86T5qGojTJTESqb1enpwv4iM87Sjx27P4mdPsPjJY5KyVpv6mJ2t",
  "key17": "28aAsPtDhzeFEvdvBtsV2RLgdmpoLbE71f7JpcQMw4qyND5Dvdbg5FnGQNjS3MU6xL7fF4e5bEHUXV9ATLAdUMvu",
  "key18": "2tVxNMiTqDgEB1YhWmazBFaqA9HHdVxJMrKDEYECu7jmcX8hR7ot8ohdwuxpf99wuVLCuKpfQ5CoCrGGRjSfe39z",
  "key19": "2KGcrj1FtgLnnsj1aTE1M6o4BgAUCXSBvXxXky1AnhFH2tNX6MtFVoE9QiutPjfNQgjCGsrHbUCzv9KZJNRZiWD5",
  "key20": "2yiDNdEK22HJUkXFCa7NA6VEarpoPLETpdqC9qtV2ZbVu9nzXGpu1UCUDoNYwZEKitWeRQWKsXPkR7ppedfZeXY5",
  "key21": "47mRuWWXfc746YJEZsQo8tLcqfj1arGuMzqUeFAJZMzi9HdJhjDUxDbsmgooZdokFnV7rexqVthREhbXqUh7idWg",
  "key22": "xWz3BJeGqjz2jV5yiR85wRgrYR91Ma7zF9RgTdcXm1L7wYhaZ7Eg5uJHTVCXKbuG41mCBAi75UpBomqhXWciczn",
  "key23": "duuJUoyxTFVPCnEqHi4198mhaYRFyuJZGrmmBqGg8HR3CAbtVwwqHNHTuMHsp728CCBPBGV9EudCMm8zzSLt5Hp",
  "key24": "2C4uPFNwchnD2i83jSqyydhtgNKZq7HSVTa9GaXLbcDMxjkCNjNNvqJNs1nbLm9LLfwYPyLESWdqPymuZeVdHzgK",
  "key25": "5hnmCGdYvQwCjTHUQYHnsWh7hp2vzdYEYbF4HcqQxcqAAoKQykc3r49tQjznVhGNGZPbdZHMnNe9i4mDa3eNmhuT",
  "key26": "3P7UdqCXNvA3eAdVUy79UR55F6MikKj6gNe22SQAjZububcMTdbhMAgDNwqg36DoPKuBinL1xP8NsnqPVLpj7Svc",
  "key27": "3ue5hBvxyH1KW98VxtsTJRbtn6uTn8hsuUEF9kZWaJfkv9uKtJqyReiQxrn22266e6YTu5vrD4Vr3icoy1KTuvou",
  "key28": "4JrDgWozEPGA6FfKFaVXRF7dLAeLuEzFqNjd6EqJinQ6MiWFtRoWQwLz78gG3ZuCpHRsCAF9Q3W3nq7LuwmZkXo8",
  "key29": "5i2tQa2ZUzmXg1nkdfJGssw5wqGAkJpsZsbFtBNvGKyazyptQMbWtzbb45gfqvsUERSy3vzs7HkTUhwizVY3mwUT"
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
