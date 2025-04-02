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
    "5n1FCUcrtrK8XsFn5fT2mcUu3edzvwpUi1jnCEzEWouJn892dboEQzsv6EF8axohqgCVKiF7tUCSXNpBz748Prp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JBZBjk1pWTDQfwtsxr4qQJnNEVdkNk9os9zQ9x77aFsLzdApAvjG3Q4eq24ojbnoEaWVsgF4qdG3hQ3RsXSWWUj",
  "key1": "3RYmMuPkmXjmnZnRq5eCdBRyCkeF1FMqSVBJqApTM5xvJmjW4qSpGzut2J9d6W4qzj6TRrCNKuwp5iNQkLsepcvP",
  "key2": "5cstFgJ5MChyR1yvBpBEtQxonoU8jXCv3xEcWbJe7EZzy5Q3tbqP1ptbeyf3qY5yU9RnkDLG36p4gqRfwxpDkgMy",
  "key3": "3KC1LTFmcNBcPpNp6tJQ8Q3zDjUykpVjk78G1opBmtWukLr46jwfekDv33nuu5qVpznP3qJSShKXX6VNQya2vGDi",
  "key4": "4Q1QXD6PfomKwLfP8d1Lua4nAiifETDMAjiktDGLjtTRm1V4UeEEQ6bKZXprR3MAjc4R71b1MpDjtsHF64GWjEC4",
  "key5": "2sRHWAYAQoqCWMa77bH4i8mFYzPfVcBQreQ4TsmW9ZXkqahLq8JtmKDdAv7X7XhSJd9bFPyp7AZHFEro7gTBW8uJ",
  "key6": "jmPpYwE2dyLEfKsLgZF6iM8TbReZLbnRHq2ShYmE3VkcXgVFvhFNSQApG17o4KwauhFoA5qH8QYenWTLyxxnuLp",
  "key7": "52g7gta7qMt9SNaKgWiDjtjbRkb1BQq4ptoTbryL4zGkHBWtZWsi8mv34W4r5xbCcbeBFmFczkxShVnwfnTQxLMg",
  "key8": "5W663hu7cBkXE18ccT7XqKcgmQsant5SXurPpWNQc1BbrtLzGua4hiBAiX1DPiJnPdWKkZaUzd9xExPoBJyPqZq5",
  "key9": "2SjPf5kY5hXTdnk2LN5H2ZDNVQvna1yPVgEn6S1MosbRY6U7q4vGqWrYJdwHHf4GSMyJhSdpCbsQ5CDJiAvEmZkD",
  "key10": "5KAnCAfCnG9hG5Qvavu2aKme62Nqysi7AfaMDYMkKHTjfiHJ8ho2RMe5MpJ2Qig2pTeWkWBRai18FjQiv8Ucx7y9",
  "key11": "5XuQ8gkMZJbx3ktkiyiwRUsiJWwhLsLEu8UohQbtZQ58Gju9vdV8vf5rW3iM1RuPKtVvChLak1BXmZSw538viUh6",
  "key12": "2ajDR2ogPDHgQkKNkxY4Reem5AZQhg7imSvGJqt9FgdfpmEpkBwCpZekqQGj6RwX7DcD2sA4aS3oTvyY2QawfsFF",
  "key13": "2d7oz8Fgv3q4rjzezQwr7TswEFXq8zX1vTq6AyKr157EmDKWRiydH2pnWMwGDJHT41Nnkar22K8KKfW7MsnhShmU",
  "key14": "4gdnp5bYfNxZXXXJ2ALPFtcQz5XRHspQJGgG5kQyjpV8ZmnDSTcQ4Uu7ymJpTqAhiHU5S1hsmf77Rk63WnKppgT",
  "key15": "2fUqbwxf6DQX65zutvwRR9nzrLBfevATzuqD9kNRDQU4Wt51e7MYi4Tq1sdKMdKQT1QZ6gaDCuEX1s4KDcXuHqzm",
  "key16": "2yhHewacvZ7Zck9UMdpgbkNE3tX5Tt7xXsnN1eDTsfbi285RKGuc8UenjCtuNQeeMtsSDGivZ1jdtVXWCiptbQJb",
  "key17": "2u8ozhAYSYoqzeTbzahXHF3ADngs5iZSEzMGxeni1kwLa2PFYetG2SgSd6wrZmqe461Vta4LWyQAUFm3xDwWaJab",
  "key18": "43ofjDJfFuyiVE7fSfvBdYf5XZ4NT39S6yQQ8sRC5iPmZbgcvd6YXDjGMhEthbMuFHFLzVsXtjxzLiGG91sciwcg",
  "key19": "CuLDF37EMcBNG28C39ziM9Kt2HmQiv5C4tGAVyJzC9k4LhcXGRRChdHFsgUg5Tm4YRuQxYwyar6ic8h3isY97TS",
  "key20": "59DMBieDn1WXmyoRF6JgRbU3t2PjYmhpCi9gwmzXSTBw3dTGq2YWazBc2QAzjTFajzbbgpxD3tPpNRs6ip2wepb9",
  "key21": "k7wnjQCWiF36o4tQjARCQAFJqYZR6MS8bz2TzQqaWZXdR5BeWcHk7dHhaw7ryGkNyzfPQY388ESUMenPgfj1GaK",
  "key22": "2hkX4EtZdXTuEJqHWijXnXZiaDHTYZRML9Dfhn4sA8nkyXxVNrDHnrVf2JdBjwUYgwJFuNwD2Nu4jYBxmHTGJ4TN",
  "key23": "4uFnCaFWLeiSmVH3nNsi23bGEh4gVhcPKrPjvxBADB36utB8SgomgLUNmo4TPLXVyiDEWMywDcTYHWXLVEB52wyP",
  "key24": "khb1cK7CMkcNHaXA4dWW4EqPBFwausQhqdRHhs3e9BU917Vut97dpedPS74VxzXYvj1TofF5zo4zHAEa2Buu1xV",
  "key25": "5mebjXb939CJK3bzBZbpxEHq4G5AtxjzZXA9FNRi4jMG4wafXesPsEJeZtDKnYfJrCGqSq1ngULehWfL9of2Pe82",
  "key26": "55WtMsKSy3jktXMnuKedFsbDCVidLf2x5sS4QPPd4R4oxknqxTsio4ZdPEiNaqXBWvuDe4UvCJYq7pe28GBTtHgJ",
  "key27": "2RWh1P8uU4bZQAwGt6JF6VSwDi7FtvGvqnQwySqPZjfd5mhzuDUHMk9jbLTrNY6QBzHhfcewa4xtQ7SP2VUJyRJk",
  "key28": "5mS7qxmt5xAcHXWTNHZP55V9EcQSRyDkStkmKaTbSvmWXbh8vfa5V2nSsikyu4hgsK19gJN43Piw3Yudm3u6hGq4",
  "key29": "4ber7yrczFdRxTGdXgqRqpv1nLZP63jm7qCquMCok25z6JnHEHK7vZ5fKDT5ydx33MHtf9wdnrrQHeHRvkj1E3U8",
  "key30": "3AVc2NX3Gbgygs3QUP5dWTibaN6Zc7C4rDe2ey8zUm2QeZsHqjaKhRUS9j3ReUpn2B1AxhiTFXVPkDpdLoUrVcER",
  "key31": "3tkzNJQDYciapyQGq4gpNw3KMLCzU2sm51TREtFu3irhtQJ1Gc9FSF4Q84ZnA43exPGybQJ1N1ZkqGuUR3iEaggm",
  "key32": "2yQyMcwKLrLzfsLVuppUuBUDx9htkFRXdYcnb7iAGZSfc5Z6wjtGRatQFwh2tP9NRX2RoCLpxVSgG9hQPBHM3ALk"
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
