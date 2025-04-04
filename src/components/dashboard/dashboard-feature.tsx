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
    "fqCcjzvBPrn5fRxu7yA3VbM756eNPGhB4eE9z7PmUmcLzJez8nyzWJ9vntYAimFdEvHyAMYp4DLQcnzXCNg2nUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VdUJXcAxdoXKMhuBU5JCvqtjuHhLNmdgyNTHgBPRGpD52WkAtAQNCDUTGma6cgwer64qWawS6QPkdMgtPM9br3K",
  "key1": "2Y78zikEJXJRMCpevfLjb8J88esLATEsp7XdWZ3h3Mab8LfM9WgzZpygXLJyC5ywbbd2UEDgfWEWpc2brumPNyo8",
  "key2": "2RtTLDJYwsUrZJZoGyiZEwNRm7Nx35Ya6nWRpJv7p28P99QM8mrqb45mpiZ9Y4j4pUuiJUa9HKksLVt2tRwatRs2",
  "key3": "PY5DtSFi3zogQdkZEepbeXTfaUwKW6mGMjZe2XEenAFXE4NDZFH8EXdvLj33qQy7bmznTDotB4Gdyzrb1J6WD9a",
  "key4": "2G6UG23S9SbqqaSDy4dKpkQ5wQtLteoPtJjV3GPUYwudSHJZGULavd6GzKV19Td5pZEbYh7UDUu7dPwRF46mw55d",
  "key5": "4D1k78omkSQUEf3FZAkLNMXTnAFqexYHrKdadYpW66oqb8LqjsvoBs86RZsky55yPBc8pVXuCjLg71X2Yc7Dq5b8",
  "key6": "2xs6mKH2bhgSZWwpf5PRmfaAemRF8uPtgGv1FTACS2TxjRGAWWRoiK9ygeTQnK9LzyQkjHQhaVuLdv7YaaNushax",
  "key7": "DK5AxDAPd52L4QpvMRZGk3c5A89fGQriBE72U8tQkscmaPHHMpwwN3ayyHA7TQ7T5ndjPEAHq5fvywTR17D3jEp",
  "key8": "63TRqMAjK86t49i29vAwT1rTrqkJLM1veyNZ4mhrQgf5ze7YGYuydEKKhfw2LTJYsPTMQeYLdYhViqkN6jeRtSDy",
  "key9": "5pvmHacbDySQ13XDbzTNhWRmNx42b83mBu2xpv6G4a2p44tjfXzB42NA7QvLQUFx7G83JCmMPuuUfHtAmpXMu3YM",
  "key10": "2H8kSBJ7qaZr5qR2Gn6MxKC5zZYQV5bG6aDP11dAnLhBrjobg7CJj6DCweCh2xYDzngYA9DcyaEJskpUJ52fRr7t",
  "key11": "2sKHajShcamnq554GxWH5MZEC9HincxLtRgcy7mxKtBQAfYmLHmmqTBYiyuhdwEzPnhg2kgTvQsD6epMLXNRAxTo",
  "key12": "5RrDkF9PKGVGTcTU4xUEd7N8KF6ziiXq14UHTWnG3qrgbYMuMMfJwvF6Fkx2RYCLtTaRS1xomB7CfVfdntVerrMt",
  "key13": "EbxzRLjRXpJehKv8NbHV46x29RytWYyKd9PzA5FnMMAq8bh81TFoWSzQ66fvbvdGhPXEZw73yM1DQpT4QLXYjJf",
  "key14": "tefJMt6Zg9AGpGrrTtSFv89ZEmcUGUGRst1QS9twJ3WqsrZaEEQMPJR1Daia1RMwd1UrnqGzGzbD3xs8FzfqZzF",
  "key15": "4KW1kvTGn5QRCpkZwfCGXgsFTjqmXvnvzUWaoWuGXwrn7sbgXVYwEEm5zb9UXj9gz5S9t5DN7ZDsdFrw3dUQyBGq",
  "key16": "4BcxDjrhZCiAcAvmoWaSNCBtfbKLyNb2PbCznCJEzcB6iswr8MCr2aS4RfsLBjvox9gT56S6C6ooWGtQLdjPTzZa",
  "key17": "5xbpR2MYTUenMxX7nQnBg5CoWcsnQDe3nHSZoDxL3WWLGASC73wKAXtwGx6Mncy2TQWHtEFDfrnQmwSw1N5EisbU",
  "key18": "FkA5EWuGa1BFRpjKPVRkKviZDZ9QfymNTx1EorAH9qrMARY7hMx5skYEurk6wjnAg1XxAdo7xybAT7gLhAoxTYc",
  "key19": "5aWzX6ifpXLAbAbjxrQqscqqKaE9tGKNHCZxJNQYn7f8BBYvPj3FLpaxvzUxkx9RMecFxcuQo9fTnaxFitSEDG6Y",
  "key20": "zAM4Nkd8qKSiCKz53YVWsUEerYUggJCJxbQT3Gybe8H9Aht63ogK5dYjcxsxTCe7q4wT7rCod9xTPkhZCXtppxm",
  "key21": "4aRDbFUY7u894HhrmukBy4tAeFntiM5EFcEjRe1mjqCQn95iUS1KBvytqvDEa2xE73Ch3N4dwgdumWJakusZgvLZ",
  "key22": "5DgC39HaYYCydXBccuenUsFCotTwmvnb8LHmA8CL1Mix363nAZoquQDbrN7P5arDRdjtKkDyTYr1Ep4wwvHxPPyc",
  "key23": "2cCNR4kxJGqqZPypQRMnJapPppSfpFVRC5hsbAoBA8fhcYsH8MqwQyJABt196Y4dBoUC7kSDkbU4dc4Q56kK9XuN",
  "key24": "3rtLC3SeiJnRMusp1ux7C2zsPbZJPFDhGpRWaCNDAqUgLzC4My8tCVsicVjZ2ZV9csqYFj7AjB9rHzsTecas2N2q",
  "key25": "452TKgefPUYHUcdgcpjYcEaFP2Y8qCbrvMxWMr5p5Q7GDEpiZR9SaNd2cFrr2RKXTNU3oSqq6ZJd1ditJ5SsLDGq",
  "key26": "4AtZ6TQbUhbs1kdBUNsXr46eUyAY1e4PVbCsLDaPwS4tDd6fX54Lx16HhdLFEXtMBLTxioZpWAeMNj4CURcR8B3e",
  "key27": "5Rgmnks1bfGou95qPZVbTHE4kRwwWg9KFQmXegJur1NSs3dBM971A9jTq9LvGnCRv1Jc1dxxza1F9fVrMkPFB1nh",
  "key28": "3itNzSiFQiKHCgpoFUp3GkTTxseVadQEnZf5XRcRX8Fw1P9NvPVeysz8htdop6ZgooZjJTtKnKwZZVQfMyoUEqVR",
  "key29": "5npHq9wmmWiirZWY8suBRpHLerXiuBRXxA4XqRdVcGGs12NU6AxvoMFDauHGkVBgTDmZFRWDBHMLG8z9m1pp42Vi",
  "key30": "3bw3JAZvcnHFxLe62tpES7idYmgDjKXqhG1X8ecpV5eiucFnGS6fsu5qerd2iAzKYfxAmwtVH3FHQs3oGX7KfK9z",
  "key31": "54mzKLT9E7dZAc4NrD46wZ7bb9vfMLfM7UDsdP5kB1ocsFFhWMG4e4Fs263pgXeNgKFB1YWtZrrPLHoG6AwR1Gy1",
  "key32": "2edbMd19P5raZZ6XuMje53XVoEPT3eHuWi3VfNaMVVZptRNkJJa2btHGW4RhgnQRq4j21UuCFEYfME8bnvEwxs2",
  "key33": "46WYy4GgXUYotk2s2WCSdaqjvHp5xvNqNw3ezxzKQudq7JNw5Utfb6EwDnsPmwRAAdiGsyxiKLMm7q95yQ2mrbDR",
  "key34": "3BADAgbU1mNYqza16iKEdmL4rm4Jfp8WKGR6zHmfWW3XTW4ZYEccqR5cgqENjRZ8PsnvkUfTXK9B2656ziMseHhp",
  "key35": "62hTe8LhLctrZSU6Lv9qSKNXTvYzrnVoK4DhGYPctMuxMjKUXy9fioJV4UFgttkVMb7Yf46d5j43RiVPfpf9Kvqu",
  "key36": "4AyjDdPjJtVr16vN3eLZhqtGZ9LnABUXtaeE74KEcTLkrK4keyvoERD7s69cD3Vh9qtDQ514edkG6riue8LgKasL",
  "key37": "34aWDcidGxxCjSpgxbvnUsyAEmbUnoVxTPFM852mz4NnqJE8bnt2sANA3h1yyZBXGmWrdazSAqkrgukRw9wT84UT"
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
