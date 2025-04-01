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
    "SwrxYwJjzcFezx5fKWKRhgBrapi5FmojVFV7TEM7hCFX54iVXzLWopmjxyaHAyQ85D1TGX54sEjwmrWVpHYa8bA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UbJQXJPS2BBmwDpfqL9fJwNujnTbrYZnjWVcLd5sz1nMDWUCsMqiWfRRz3qw1uMKUHiTQx6uSxWYg6jh9NXbfjL",
  "key1": "4GyDoRGH4Ucoq88nS2tRfEmKcnaG5jnpQccheegydjssRcswrspmri6feQ8sUcecC2ZjyjSCSp2jBZrbbXdPK4Gw",
  "key2": "w1y9coJkyeqqwhh5S6L7HCGqxCUPw9X3T3FmZbLMMyTjjqjEpWfW3sxWsxiMEpg1Myg8gwESFf8zQyvzq2KXwwT",
  "key3": "2Nb8Di8mDMXNt3vMFxy1DgPs2M2xXmCjfaGVd9BxDXy3qbkr7VUGrNJ41itEdCPkBYCgQvFLYn6QMjoPFibea7cN",
  "key4": "kJUeJKgj3pWErBqkRYqAkQ3Pg8Fi4pCf5w1xaC3bhQRbrSaAbY5zPo4ZBPHCPqyTo1KgaLP2QKShsbWtbRcB2wx",
  "key5": "5WXMWDcuCyoEshJnZN4HeufBx68kjAndHumfWojeQo3vGa3dFt8xVXcYbsW1bujYVY2JbC4RzUR2z9h2VhH253rk",
  "key6": "5nbqQCdBqRgbShfcZwPtUjzuc5f1TzaXwQCHb5bmexfzRuRJwSPY9sGReS4ANHTBwsyQ5HBU2GeW1ovef7R8BHFr",
  "key7": "3A1pMaj3B5vEtm1oN2wkEuqepn2DWXL8issdqSrXwNjze7gBFSWx2yiDvB7xnQz39WRCRqZMKtbScEZXyPs1i8Le",
  "key8": "4MqjqN3dMGNjbXrjYZ5R5enpE44rm3dJnXCfQ3VTfBvEsj42xKBsfKBATgkqQxynZ6edLe66CXyi2erdfPokuLP4",
  "key9": "2Q8TN1wFVRSFCSoBjA4kyFvN4AyjGZzzHPuSScV5RBVcDhoFouJcw1CHLJgvxS4nGYLQgB1s5a34nBEgE1qQnBvn",
  "key10": "3V317PK7gUn9vT5sGjG2GXcFjwGJmp1MZs7S5YFRbwqBJaiTXGD4QvzMoGT8VYy8SDFk3rP3g3dXvx1FZSBj8cfA",
  "key11": "2ZQRABppLFZJ347oB8v85sQ2HCsY1yovWhnDYJ7bpwdk3tQuBnkQxgdNyWbmDaXg8i1A13eK12H7HZNQHB1BX4AC",
  "key12": "2hX7i5aXry8pYM8CYa3bySWyt9aFYgSiVS8zSSEr55NwttfkcJoiSQXRJ5mXFmsNs18uUHxiVqabDpaXjdwhZ7iU",
  "key13": "4ixsdkPpzTXswbCXXqc25G7uBGLjxkyLQ7RzAVtcU9Nq9xDazb7Bw1sbhfLMfRLYYBYUn2LXZgdHg3EnrQ7mqqQT",
  "key14": "3bTqYQvGsPLX8AvXFJzhFkvCU831oHZNUAVstLgw6xDe55hsNQgg6x9dzhn1o9TxfFLnaEKpg1RkSxdaWn2Kb6Et",
  "key15": "zv9kG7XQMMWdAvjmB4UNeaomir4u5u6rGseTfvPuHm4boTRVL7X41Fc3Kx6v5EzjZz9JaDXStFBZBVaZvBzn6bq",
  "key16": "5Dx4kwBwEPR1CtJF6PeiZjbtJAcECrquEzmGqHivKXm2Bnr533DsYTefAN8hWjCGZ9AVbpgn9bxE4P4nmAZV8hzB",
  "key17": "4cqQcn5Mrz2jsPoa9D91JdQUyp4UFvLP7KvkXxhLfVfDFtbiMqbK8mAg3tYEfQUwrs97UWewUfbNZfXxhyjGBvai",
  "key18": "5Lbzit9Ti3qnr5huhoL5HFUZTjRqRnZRZmT5A33sN44VzSSsfSAUfy7BRQHkxdW4YVgtsznKg62kFc5ByipcSqa2",
  "key19": "cxcUc4XTiPEqnmqBE7dQfBTXVGRfjoQa6R1GANMDcagw1Q7i217mK4fHafa2LZYBVjZLdBKCbpKgD8Zyg9CYmhc",
  "key20": "2dErDo9VRNJsv394sRANoHDqyXjYcbb1eurvQGU6jDm8RTFFhko19ZuTrYa5FoTKfYcw7YP4n1X2iM1p4KnWnqN8",
  "key21": "3KadJdBoNfkyVxq22x9nrSYQyVJx6mhMFsf84Bgf3i7cQWRjAfRUjfSrKjKFr4gXht7GV9swBUE572418EwF9WT",
  "key22": "2oB8QDQKSSGgkbKpWKhYxb5NZBy1AbDTJEXnusWDy3pHCjyL6dTi3WtFGUWLBCWByvm9CAqQTuTvBnywGmjNrq3r",
  "key23": "5ztLmJFa9YKQiGRCy39arnzGMnpPpED44rMVHD4xXsV3u8q3psV8SyrBRjhXmoU3qXwe5UEMqvBURhtpTDxVTcqi",
  "key24": "5bCSdi2XUTxSm8AGbCLC7M1SegWWtoWpDr5Uf8vKrvWxaer3bFrC9YosQmMBQLLzW6zbCgCnZmJjXYUAM9GtPQDp",
  "key25": "2azEXZyhtMd3Eyyqp1YV5iJq6AvVmYEEmLC3BFwaFeasfnWQ5hguLG7BjYiNQfyYVDCJDxP8oZVN7dUCsYQ3XP1o",
  "key26": "4hHuKNJN6BMiBkM9oqzubNpcYUKMbEDG2qUu4EpVzeDQHvuu2oEnDjhreSeMf1jVaGQWCtREpY3MJZbnA8rSJWh6",
  "key27": "5XT7N6fpxmqNhFnBgXN1VRWRo6yfJ7czUjk9SfhaF6oAitLiMum3rno2KM8f4AbTaz5dhw5xdqWfwi3udgMBDMAu",
  "key28": "5DcrGVruVqj7u8i5aT5hrVoCGhTUf24tGMZpsfLociTuGrtjXqjfLqegz19vdjupYkGKeqDKe19cyfNkq9auArsT",
  "key29": "4vaykkQdDNXRArGwLHYovffJAJD2jrw8AH7nAWdh9uUpe2Ja2cAk1536pDniwDKLNp8hM89tApd7XCbhsetyqvUi",
  "key30": "3TvcChAEzv7QPQNe2V178PMNyML2hMUUZo2kGGc6ErtGWsLvD6V3sjKpQmPxfzBMQhnxEyYTkvMCnSFN5cordovn",
  "key31": "2z3uBsvn1aT8B6HE7Puk2uxohs8QnbcRfcnSm4AM3Q1AogN6zEuxbxLthzi8tmrfn2bX3QyLiGpnksagTUyruAwP",
  "key32": "2UyjA7B7PxM3nAjTXWX3aWhKG147y7xzreTF18ZNhAtVN9XQUzxQUBHNgiQYMuPk3EYhG6BjbVuDrcJyoyF3ynoV",
  "key33": "4SrLXUocsdB6C2AjMCAyCNSvoFrp4mvxP6RrA8HuPNbsGAWXcRAJ5JGbiiYUe8fTkAzrxrZF7jXWTTFNVx55sCvU",
  "key34": "31KeAVEt21XgXCTEFo6ucdF1Ehr3WzbZgZwQT5aJ5bcC8BPaZsn8xijGUPvKVFvFQPnTvfqxAYUnTLVsUvYGvUu8",
  "key35": "5YWhcGZQVQgw4gDub3rt5Ee4Zns1yB2gnLqXBQqdm4e6Xz1Gu7nCoxt4FiCfyUX9Hgb4GYxNoJtiEuMVhP9iL7vB",
  "key36": "3ggPUUUxQ6uE7QFdjAEbuYN9AJKMtjbm8WHT9rwMMUGCwncYf95W9Ha3naVCho6P6QQVXNSobNrN4ZM2ru4tZT8g",
  "key37": "3ab9kkdSwvp4UZsmZ5KjsXoPuDDNJDo1Tuqff2jjNirgC9sERHNU6NGH44ZpJm61K3zBrQgQ1mh3Khbueu6wTzhb"
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
