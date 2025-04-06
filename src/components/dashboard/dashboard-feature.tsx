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
    "5xUw2ejNxmAPakVCCdje1ENYuFAQ4hMP4kDaNpdRUFLBSEXwqjB1YHJxbFtxSLX83v4Cd2ehwpj1MkQ42Znxf3iG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26aSsFR9qBVktoU6nbaRDYhhEeAWm4qz7pcU22KQYb9JGaVMmNmrTYB3nbVM7931rDKyddSnChDHqR2jAptKy5vK",
  "key1": "3C7qgywdeWkHcLVAgKkFUrUMRd5Daub96g5FH7EzbxFynHXQAZeoHMuLEN3YGSY47zWe76NQ2NNX5vUvf56GUP9t",
  "key2": "5QJ4UGjrXADJsLby96HwEQ7d65f8EdeLubNERtf7PaXGAo39rSpHwqksiRvfjWXeycxXqBQH6mCDVEggb4Dyk8y6",
  "key3": "4nRjrCo8Qgcduj5XprGveTfLmrP5TerCyCF3wgMF6unBU75pHwSqdQe9FgpM3J1g29mY4AdmHcgUWze2HJQ96JSv",
  "key4": "2irQMu28oKHixZ5AfPcnNp3TNLcchV5XhwWJhwBuVcsAHQS1eQdjJBW8YKmA2a5njGQjCc8NdB5Go7CPvQ6Lbxfp",
  "key5": "4tXfzFwVPkQdwWcDZEys6QHsnNfxNJuYzkZGhbxqxgxff6zkhw4ZsFmmF6oCmYfzk8kc4gR5FsfgWEF9P6ikAp8H",
  "key6": "2swwZMVXF5dMR6BvqMb3HDH3F6q17sv2NfU9HpQ4WY2VW8A2foAQMqfoWyWEkCQ84oiud28YWb9ktjq9MmfgtTVd",
  "key7": "3LyA6gULkLB2Jb1u9yyshsodFL1HceiaNcw5rLzAJNFrQHn8yRA3s27AbA1jqmCthNsNLUXGvU8yP66B9ZyYBBTS",
  "key8": "51nxsK4MBadBD9mDRJ71WRx9wUnKN1k7CVBzcts96muRgmpcT5EsoCAgjFesEJZ1M8hE9JQkjXS8NS69WWf6YoRt",
  "key9": "4VuBbKzqHY7x8RKXMZgS6JmTWCDu8hwgXujr61r7NcPYbp2sMb7PMx3nizRcktgQC8uzJM5EzHPThjPjibQEWEzn",
  "key10": "3K3qTiU5CCKXKofBTUVKNesbswyT2onDx3X8M9Bk5wWEPTTqu2pYqJjCzRvsfEgmnYhpGBqnoVUeq6nH3eBkfvsf",
  "key11": "4Z3mGmRin7sD88Snq4a9NfKFvAwacbTYLoTT9NftbUMovEh6wZcRFkVooS2u3cwWG7d2uEQeqV8soRw34kxE5i6s",
  "key12": "dDeDYxLpzVh8fGniwgzyHVCRuzPfrmEpQiwb66C8QuZ3buSbVmNZhEHTgVuAEZLTqDkMyWHw6iyqYPnx1xWrP4Q",
  "key13": "4G3xJfT7ciPYzwKKk47kvVWHmceAjjhLN17LBDKe1UnfGN55idnaTXCLJfmuUufwmj5GJcxqDkrbhx952agjdE4U",
  "key14": "53eKqLqrxp2fo8BFG1XjmyehokZhXufSzTk3bea1Gzg31Soz1NjR1ACFhSFxcybFaAxcxSZR7cWJUToVQj2cjHwL",
  "key15": "KpcSi5nD2ekjfYNdt9DLRw9QPtHW6anZhNLnsdsBzshQKfAGy5cep6kqarAzty51jHi6K8Fk9JZ2jhuk2aF2Hzu",
  "key16": "5dnsb9DeYroug3g7u7buBAURXKqpGwnfkMLDeuZHF5rUL75BbvSJbTK4EsyyEGkofMJUnEyhvWUc5uugawyZ5oWX",
  "key17": "2yh3VTxZtdmoXwDwwQQrQ8YZwG6qWsN6yaX8stV2oTDC24ryDE8DUc6vL58CoAjeVzQvz9xLzNS4QpmLF4KDUwaA",
  "key18": "5Q4CaxBUNAUjcpBvLq6bSvyjx19inJNrzGRaqAkdY7n7Bc3AFMaagx9Gr4eCHMotH6gHMJkpFbp7fqEhPHiERkta",
  "key19": "6NY57vJDc3jYovg6XzNCCapotoAR7J4qsJGVgveKWyFypw3m1bUzLzZ76wnhpG14iazjNhcdzHb37DX7NtDLQ1R",
  "key20": "44MJuEjhPyMn4thTvCa5ggbQPQiQcKRmdjMN9XxorStWUDARaNKw43djGJc5byKBWpCBYuf1MCSiHRqftDPJF5ED",
  "key21": "5CXNRLnMUmzSCJc1MFTPrsKpBWrSHwCc4ioUhnQXm1aVyDav7usALzFszHj6MVVHYeZ57LKkNVwU5zWDAEh2sY5C",
  "key22": "2SKEzbCp45UrLKjmjzs1cgGks42EwPDwWLWCX7mqUroitixX85gFHZRTutwJV5JqHj2JcxeJLRotvUB6Hyjyhpoa",
  "key23": "3GrKgRyh6Giwe9wqR6J6KspvAEk9UnTyM2b48xVB7t1ikUZUxZt7d2fjA98LzfQEbS9UthXswCER8HEqL9hyko8B",
  "key24": "3sJvJvHRYdCfBriDEmbyGyiozVeJyuarQ3nBDXrFdXGSCTDVMuz9C67WVXokkmj8zgnLfS8SVyXmFYZ3QcaUEruA",
  "key25": "3JSYPtEjJdPV4mo2kR98aAikSzRyBsXdx7ueHkYe298kqXzLgZsa8ApZPwDokreTjViURkpt3wxhVQsohy75zR8a",
  "key26": "495VRTpjJCXWDXDbSU3QTJczAHwo8tF9Y2ziGmjkpTYwiDoHEin7oL3fHSHNxx3BYrw7TxcoDaWF8CqPk3TTAyhp",
  "key27": "45PwAiWjN4kKWF3uJJurt5BVGzDzueLpMhVoGB2Yp5qgEuosEWp18n4JTaBtk9ae4pF1BzNzaZypBVM9DuR1FLKz",
  "key28": "2gtxBHWk6oTfMvREzXPdEginaRkveiDa6gzTcHovPhfUojtFnMMtgXH1dJeAgL7yHcRmVPomW8hESp71u9uafCAV",
  "key29": "39ayMdXQeXyrkqoqX4G7BMBhRe5wbSxT7WuBqfwGrGqDe2NKFFchqpooZvBXCEEK5rubDBUiGmAmrPShGs8GVj9x",
  "key30": "2uy65DV9j1Uaup8K2zGJNdLhPXgwKXHFgLwMEMbpFmb14ztjiWPDG8S4PGLguf3pPsWW7x8NQWWabKq2CjS7JNFz",
  "key31": "5kNCXdYceubkJv4fcXkeFeZpBfXSa5ZwFN618oTYikEoc7wMUip1EtNVCLzSv5zEPXskW9zQR8drCi3dvhjHefPV",
  "key32": "61CxdqsMSQQucAnhKUNtx2ajojaGsTMJsFoPTKTz8aYAVMm8VWXYmxgME2aCZ8ZC5n7ox3mYv5NvtqKGBx1TEYdG",
  "key33": "48fwfBak7e8H27TKfi4b1wiUfTGrJeSjZrKuykt8m6QsaYJAouM77bnYpo47nEF8ht76ZHEp12cCah5CDud98TRN",
  "key34": "2NJYzs2H2piv4UpsB5pj7zN6fimMDK5bcifEoQYFCMueobDio8rs5g7niKanKes8giX8ki6Y6qFRfUVEzPwNvJPR",
  "key35": "2vdUitLtrC6z5BhTGpzi7N2pEyYVego5zb83Sk6g86UqmNHG6yLHWAdYzSKred6kR8RMPg6ZHT7SKRA24HD3g2K7"
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
