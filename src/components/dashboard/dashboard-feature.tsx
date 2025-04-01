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
    "Yx4P4LmHVvwjxHGDBrWyKkNZaFtzrthc5tyuW4ZwM3NQ2E4sNKgFqp9Nihsn8s6xue72QsFZkiWxMdzfMAnStHg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22wj21joDNbbYzfpn1yC8HsqxmvJKcLHPEwzVGnJkgbyy2s4Do9pe77s2gcZPxCGujZ4qn4tMpEhcTMdxqbjzg4Q",
  "key1": "4oCk9pZUUDEudQFJeAegziutpFp1kqVUYpwmiMSo2V5Dhi8tCGdwTgRfAG2LDQRKc3pdQ6Haw745m3euk8q7jjGT",
  "key2": "5b6tikvTYroyfoknuDdiBGv6uwfZXujEZ7YLDN5JHiwmukA4Naj4NR1TXWzk7pRQQcB1dC7nMhdZsF3Q6zo6DnwB",
  "key3": "3Ueag8KC68ACvKhpZuTNoWLtmTvFk7oGo4V4m7Va7XLNVMKe1e98e4Anz68Q596cG4UQ98v13GfMtNUA6M1i3psE",
  "key4": "2wvuJWG1DdHeuRBZkdTLTNZQbDReLtsQVxg5DSDw76ZGy5DBS82EGDbhSWQpZZvrif5ncxuyRTgYkjgiqM7fT3Ua",
  "key5": "bXwNyKshamv28YnAbBSyin4rNzRBGVzMXwrwtqFuAHLz5ZysnGyPsVMAw7S4WJ9qw2cTzJuG1Cs59xdCUUoHvHC",
  "key6": "Z8EfpVUA5EuqV1UewyZdorhdkKkd57v9VN9ACXSFqeY8JK7wWoLTk8nRwMPbPchPaqjhNrcj8Z7HkqPnjRk45T9",
  "key7": "5PdJ1DV2tQnc7z2F33Fy7zS8ijCUtUXZvMfvWJsg4vYGSiGhuiNEBo7u3xCru1uyrJZysw7wp4EyWhMAuYXZ8YA9",
  "key8": "3TsnCPKT1qReDowMS7uVuX2QgNFtTxXPD863kB8YppmATudNV4Ton6eg6KXwBadqqwHmyDoPy91HJjaHmxtHqA71",
  "key9": "39ENh3rcok8tuJY1kTTSsKtfJoRvC2ZZtWzZgSYsxWf2BvWV2XsRSCsW3qjPq2x5Z6bwXsLoQUsHCHfGtDxu28wH",
  "key10": "QGbhzhY4d6ZGJAQ5UjuUqYJPMraqbSERosVJtgU8eRpnUfRrQ1pCTo5AZuZfZaQZEMhyL3kPgdAUt6wxFsqrTts",
  "key11": "4DkEMijeWc8vUVeks4gseZZvSMxctQfNmVuqkdkimRjacNMqoiSvtrr6NSv1V21khQNpY1yQuQu3c9axBCBbdBtF",
  "key12": "67Mp1iv5oT2zj1682Nr6cnDAKMGHp1mPywm45RgCGoH326jSaFEFC47ML8T4aKEJzN4QB2UDKnzPyfoMiMxHM228",
  "key13": "5Lqa1btAzVGXCmRW7gxUmiyV1tX9sjFPDqRi5QJm1Uu2ZJqvo41pKDZfoWEEVeZYSwxRzArFKNCpWznwaeP1pVgj",
  "key14": "25tFLWH71ojzeokkVqFakpvF4v413iCcVwSsjsBg2vdg5oEmCPi3yC9jAzNMpTP1jLu3Hgn1PzqyLSRBaLZFK13a",
  "key15": "5jBxEXeapHUNZH1VTd1cnLnxa7GirJ5vGd5oycaVTLqXo4KhKT5sxELGqhMW8PtTX6Bwz2SvzaQjGErRrmUbrqHc",
  "key16": "TLjNx8Jqh1SJkywmsQhCHceWFj2qvDeRrxBLWkuhy5uqBSn2joAki265BUBJnEyRwBDGhBbAJzqWJEwSwmbdnHJ",
  "key17": "5J8BJPihCEuchDFJYw6Umqw9sPniWJ42dK5dunn19rCSZCJeZCedWydE1QreQazXPYhFH1RaLuksVYeHNLtH6pvY",
  "key18": "4cqToVNiTrfX4FhC4bejT1ivr6ASU4kV3WRLYmFx21SbaDHiuy9EGn3JCG6uHyojLrCweiBu2Di8zYisFBp6MvCF",
  "key19": "224hvdbXuCLqgxMWYyR6yR98tyHBLSeRCQxjG5h985hnHQWnDkDcs9qC3BEztUFT3phJXTX7mAde5MWK4GA352G5",
  "key20": "KkUka8U9cuRG7a788GjhkAZotNHxxXd3Td11mKrLpbPhN7FdU2YkBXgwK5KCuxpRzKzz3R2kQTN4QRpCrnDAeYt",
  "key21": "4gPa9y3pb2sduzd9qkv7Gxi86n6QP9bjzToVHC2VMLa4CGBNfbTfuLgfRX9tw8X8z6ZYBo2j45tVxgfvHYTW7rUb",
  "key22": "pUQq3XnfbVsQFdbbw4sbdP1NEyzYUUXRKBmq9bjX9JSLV1GBrNppzcAq2ko4x7y8wg84TmHkkE6USwtJjAHDtQX",
  "key23": "3m8dtBm6poyyo8ZQ6vfQcGf1LpBWBRMcCAZpDLDyqVBduZwDHxGkCCmfqR7fedrVxWXZ6AqGaf3Stx66xNS9KoFz",
  "key24": "4ybuvPxdTgzTtFGiEufzzv8aEYAFYK9N7aJQykpRj5EuaC39szeCVioSQz6PpQgLUnxhXSqLcQQuJKiyoEGRxN6e",
  "key25": "3kiompWTJeQKTAr8nc5F6ceVP7YH8p7prVFLoZruvoM4qyDMJhn1UmgbQxDzDzoMjn23nmNUdmJpQuvwUC8hvjFQ",
  "key26": "3s78GPo2jVdnvKuC3fSoDJTq45nsbZwjEeUsA5d71JDLEfgdScwPdSK6YNbP3b3mbAv7hVBxCnYjRhZJQYWEBK1V",
  "key27": "4ZnsbEqgBaKBqVNSmZb3HkvuFEcb6ku1TSupwzJMqVjxsXYmv1cjjfBGRxWdMPjp39wM8AHwSawvSiPuwxXTERZw",
  "key28": "4xKCLz5wmyoFHUWir48XDpeDhYDhnBQA9hhB9JaQUWVim4MPs4LQbE6t7bHn3T1ahzkm6K9uDBe1e5Xnkfk3iL6U",
  "key29": "hxwm1P8RE6VxUnPhVtVGkmF9bxGNyRuG6b3UAHNCWd36EbXsvk6bxAdi7o96gJtT9GBohAGrCTTVcx1MmBZaDFx",
  "key30": "2yzX6FdR6FCAL6xvsnKkaKSdiwbUi4qL3k94WffxaKvAu3Ex4xARuNvunFKhXctEZbQj7CyNCtY1gQuZv3PoyUPQ",
  "key31": "34cMQ99sJP6mwVc7WYi3eKV6R2LDev4JJUsTDUSTzie66FTcryy3xLsHkzu8MDzsHTexMjHTxcwJE9bEGn7Qu7vY",
  "key32": "2MQjxARZXYhwUGWeNafEH6RrZ9YvzmfycLDgG9Dpjsv9wJTNpBxxRz6hAzKRjXcq9AnXCXVajmDsRxkv6T5V6XLa",
  "key33": "JY9xPham42osdJ1axdryZjZdYao9hWohc8vsfXxPgC7zYz2A9YTgSTa3fqdg9HKkwGq8ZYfBd6GuXNZDNnqXhz4",
  "key34": "4zgubBkG36oC57kjfcAfuTndP23Rv3D9jFxeHLr5LGrQFY2gk15XnbcjkJA7K2krJHBfHnxuypPswSydq1QEeR6h",
  "key35": "4xHzaFvmFrs5CYbxEQ7WhRzBymh3A4TKw1yk8QWrEwSyfBNG83NdvKX6Bmqp2fYAGdcErQHVs9qupkqQ5PZMaPgP",
  "key36": "AFBc7tormk679PRpxwpDD1fSPLQ9JgTww363ZbAn7boRLPovpfHRvQHdDMmnKXvkwgWsJ3B37ohYcCT95ZmjdjJ",
  "key37": "3nDSm2NVBfVX1NWFgDS7wL2W6GjjEMJeA26SR4yqqY3oEEWXQAPhBpW5G4ub2uPGMYkL8uhtuYTuQBAXLXaC9Ym",
  "key38": "5KP5yzUS6GiAspVRnoroCqQ1RmDRNaV7C7qF4rdbWaSdQw2AabfP4ga5SunS6vz3dBNWQyhy26etwnwmcyqgyxjC",
  "key39": "4bXFSmq2wdEfk4RPoBQxffPv9RjVxdbusZYRLpYYY7Lf5NqAA5A4orsuuZRtp3vYpyjV62Bn6UUS6FPHq5pwTA96",
  "key40": "67MQAKEwdXbf6XMmrfF48g8vmVyjh4nwnx9g1ew86RQuMKhnP2XLgjaGQJjDjHqvKVEixysjNPRKJRPAhgcbYyZa",
  "key41": "3RD6PUWk2CYDFrDP8zmy8YLbFZdivZgdx5ScmWe2B4mxLXkZ8MWLA2ZvvTXLdKrbWHNf1i1cbiNTXZZziw4CDfJv",
  "key42": "4q7wjTmjGJu9C52juKNEzPTqsMukLzw6xtKhwdYLe17f5eWKX2c5JsRazzuYboUzYWHXLEuRLue8DdC3p4WFkKgh",
  "key43": "2SsuH6ASpaYs1EPwoSmjFpJVdXpt6RH4rQZchj5XEywCf7Fiz2bXNQbgL5kTrgdShobEZ5siEoV3WPmU5WkhGPLn",
  "key44": "2jr6LsCAZ5Qo9LkK9AicfMW9cyJR8asJHuaPxZEh7g6oCQV9ZHCKKMk7Wrojq9eSEM3baFycSNWuQ93Pdp3ywL6A",
  "key45": "3KiahAtX62KRSPh6k8DYyR6xVfNz1ybd5tAMNMi4btdt8R9XxmZUEHwkvj8kb3h2T4XUGMhBZXtQtFQcY135Ednf"
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
