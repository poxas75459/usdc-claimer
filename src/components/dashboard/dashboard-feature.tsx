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
    "2mBPkyhU3XX5AtSrKJCe726temyHJEjHhWXnVm2BegPqvhFFiFPEA9PuZ88QzdU6De8mAeMMYfHXVu4HHapUXD24"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hUw4hJ1sAQgG119yAmB3NRbcPnJvibfjx1vhkj81pMmtPzGustZ7X6KXYkuYb337W1tT1Yv9GbhfxJprBGj3cqQ",
  "key1": "4o7MPSnmGPHHth74WEQVhm3HDXQnMp7XMzg2w1QEHgwbz6ap7QjaCyEhfu4Ew6Hmhy9baMTTtZGwDPucQk1arTdG",
  "key2": "5AgKmRAXtesAaH2K5qknXAwFzvNZEZ1Cac3R8MfEJHBDHiqnjsoSNZQVnhH5ogVko12bZZKnJespoKjaucfXpELL",
  "key3": "3sZZzP7y7nz8Jjf4ggEYkHsNuYJ9GL8MTjSW4qvjPDbzEb5u5azg59CTuMDegJiTt51bqd3gyxNWmMfGGSv9Wqk7",
  "key4": "5Uy6GRgaFb5Nwepu46UEFtEm5Q4bLVjqBJv1r6GXzY6VFu4auUetxoSpnPzVDkpWB3w4vnkTixYsTZFrN6qtX4pH",
  "key5": "4j21hknyBzsoFv1HLHV7hvrZEijT4frQsMBMzp9PXKCzsDvEQKEytLzjcvCTepKj9QE6MaR3pnRbqTotVkqqEJpv",
  "key6": "TTdSYaigMkCDyrH3kJ4q25a79KZqAThikbk6GLAQPhyj7MNt5biSxgBUZ4Lc1qtDKMsCAJUdfHqZB6yvenTMLNu",
  "key7": "2hSNXf6tQ8T8goZHsvv5Rpb1xxVtc7jAD6hxpFc8KBkjs9LUSDTeyfpT2VgfdkvcHZUTNdFee1DBjpEbYVNtErrw",
  "key8": "1rP3VpRdCrAmXxtvHuXKVdk2f9SfJJwiEEuoPPaHJHNQULEHJ4DzNvwzna9wx59k8rAQN6iMdJNNp4R9dvWURhu",
  "key9": "2EhnSFqhgjFh2LL1xtUZdgZsZRYFgs1A26HWVz9kFpvQ7jkqQfetL7tfmk9L9djbDnGDunBgGHTMcitd1bymwrFY",
  "key10": "5zCV1FdBktySAjiceftmekih7jErpUXKeLq5YUj6GDNBKHSpzqkZsf15YKc2ahe1VEgucnuE8UJgE5G14mWRpCX6",
  "key11": "3bqQBb9EnUsg3988LWn6JuXHhUhFGH5uSmp98Jh9gRsUkpEugQqcAXJ5a3KWsPeK5vwWo7oD5wp5aojbcuM6Pa86",
  "key12": "2wSfyqscG8QsKWQBAyQoiWLYC3QtzK6KYUxt3fwb6PybV1fJdZC65a3oqJm9tN3Fhcvv9969w872ZdWz4XRaC9ci",
  "key13": "5G2YDsV1x5SK2bV6r4c576t3x18LaRdazjaHjNgg6ZnpWfaoJwAiaVseBAxEygtYCRqNKmY36AoV28rfyjMkBpTh",
  "key14": "26kA5kraaS83hdVeixWkcxDvPk3gcCKcJgRExdMbvDTz9NweAB54XVhbxJUL3BeTKf6a9AcsX4s2gEEGR4iib9ys",
  "key15": "38wZnHt3QMXsxgNead1Qd1QZV8YREqy6keDTKAaJQBGyCSMXPXDBtvDepom4XQjHFno4BD8smzgZUXq2iUw5mDM9",
  "key16": "3npUjHXdiCqeNRmJC3naWfWGB1fHWBkHNm9Reepy11S4pAZQRssMXp9WeZnmQL8hRhdoE3nboNhEjELmq3MNPxVb",
  "key17": "3HnpH3E2Wfk2srePgSVi3NpmvBPfQttw2Zd7bk8sKx6BfLbt3b7KB2aQUq4r45Zy62dhh5j57HYHC3husVJd1EZn",
  "key18": "4tX41yiLbwDsJAXZxGRQ2detouRR73DS4RfdrxRWvWsn9LKsfX9LcAVQPCJWezikgi3FyL6sm4WaXcbSfazMWviH",
  "key19": "Ywb913EyuhyXF6RZpYzKBJ7S7CvYeu9HCq74tuQAGNavATwRW3La3DuuNsD1CR1c9UADcG8wsxLNEtRciwryfEh",
  "key20": "5g1EUwEfmRfYtk6HaTrbahC9iqnY8zfiu7d9Ghm1rQhQjynqMrtJS9pnefFnhb3BFUFE3yfrqEKyECz12UMikGQS",
  "key21": "4oueip7cCZH4r1qmPPBceKsHzPDVcND5VfTssKhJ7gtAVvgYhU4BwkKtXjEutRukPArApAnWRYLvkiaCzNAVd3of",
  "key22": "zVtz9r8jdVeCQMGZfrgAk2oFWcoL19k2bFVqWi5ueW32zUmc4ig3iJavhzoqGJ9XCPemQpF8GKY19FSp1a4pa1b",
  "key23": "48tdJ6CxCBVTVaguNvFLnK4k7Vs2AYfJZ7Ci24Qh2KExh4S13D73warj1VCTYQ6YF1TL1Z7DLjkPQwR7kMmzqRD7",
  "key24": "JzYwCdNnBTCWdw8PbiJNMdMRg2r3nAPUWgmXq8dKNUNwwUyy2DSniYyEeAC3934zWMU7sB6tAAhsVBDhbwbp73F",
  "key25": "2voYpGMN7eAXFboKnPfUxJ4XMHoybhFfZLUnM4ffPHUuEjt1qgCikvk9hvM5CBXurGv82qZqdSR6zoh35t8gVC3X",
  "key26": "4ENFyxDWXzXeQ4g8cjXHDnpSRPSJmLFhgQLyUaF5XwBLXhQuD7KaFno1fjYMWfFZEvSNy7stmJY8FfXkP1ZdDa9a",
  "key27": "5iodynqnjSfpQ78s1QuDivj84Hz5C3D8o3QnQsuDcNWvKM7pHfNtq1dz64aYbPHVLi62pqgMvd6xdASTQABgHiPi",
  "key28": "4pFdcgJx7ng7U8Nz6iiQ6ur8aQQV6fSj5AB14AwGrjvFUfXRVSTLEDb5TxFWmBTegZAj1QpDXwVKEYgxBRaZGXHR",
  "key29": "2weQNGUsqTojxjvyCJPsNerUsEnHio5LYyz62wAP5h99njH1FLnYSrwK4155XpEz7Ay3k5kQGxFnZspyhZZn6gz6",
  "key30": "3NKVqJCLSjKFbMWWV54pwvqmL2TSS61vpP9AktsmmH5sQbx2fUebMWiGSSbWeS1F15zaC9Dx3iUa7R1n3iE9Lvxk",
  "key31": "2TGUSQ44rixU454ExtoykAUorgjEVy2cCyZsQzyK5LqpWPyi4ho6dHFrCmAiU3und6qzZ3hMY8JwaiEyBv4Q6XL5",
  "key32": "B4gNKP7ftEWZXHdUgnzyJvpEejxwW5WQTATmPnX5tHyv95SihTh7U43nzfNMYL7RYxS7SGhyoSuDvfnxp7D3WMc",
  "key33": "3hRRAEca5KBKW648E8zZbuvy9DhEboY7VcZCQJ1kjfw2AsSUKjrfvrLA1EXUmqSeHKvecaYTcaHeAJ2HbAYxhrZV",
  "key34": "3EDVvdyUwyzWnK2AhYBa4FtdgsupaJtvtk1HFDweGfkBRMJy5P7pBhBn5QtWdDwkvxXHjN7qRkr28kgP6JHxbcXk",
  "key35": "4dQqYtxZqSfNKKahgHAvQCVkZVKr5i5eSwHf1V3hQ7NQnXo1Cq1MUVEY7wnzx5AwfWa1i77vUETgMrb771WcKHQu",
  "key36": "4WJbuEExCuDdL8HU82Z9CowJkiT6ZBJQp6hiXrPaL3qHp7y77hbF7as62KAtXhVtaMXBMt8xESxDdoFcp6MbcwTf",
  "key37": "53VxF5MS74DBfeF2S9aKho3KkNKTJdkQPAp37vM8exvXKVmEL75vmU2NB89FPi13MSw46GefV2RqXs7Fm7AA7RP4",
  "key38": "3J1YvzwDxfZSh8XD5vAzcbEhUB8TRBTUBqqZfRAETe6nUvn4kKTSjrc7izjeoM69rw7EjSt8j7r1K5GN1V1tDtt2",
  "key39": "q3Sxjjsznh3C1NMP9F3zyG4AyxYDSW6AZSLBrx9enxiaF4dfzrPQ4arPiiPdqSUiuoqQSnQYdH2cVxvyvAPDRsW",
  "key40": "2E8b7hFVnXGJjzvM3KhdhcwrcXbuFi4vrnPL27S9xpkRreE6xz4dziCZoB9nRcVSeHrH8uQ1WBoNp9BsboayeZm5"
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
