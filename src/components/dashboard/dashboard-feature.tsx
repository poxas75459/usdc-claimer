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
    "dPXY3BSPU1Z7ERZi3wvr3DnrfdWyC8HAurAKQtX2drGUbCHKJbA8YJvgWGptGMK5Zoy8Z5r731ynRX7vQKNvMay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQSWAZbqvtNDgvKSLj7di1gKuWwTDLbZPydR2wsjEmPVisJkEKzgC8wbfYxEME9npPUoqYdiQaLnE3nPXtUTvnC",
  "key1": "4WHiVWnombUF1VXHviszBFgwySrYGBjufDbAUvB22ELoiXUGXNEnEMu9iNMTpz9YgsY2EAEcq3cXLoohtzTifkiN",
  "key2": "3wBktcYD6Xa6JyAT9hRU1FYKCsjDGMVTnghQMPV79igRUbzkfhBSN27s48EpY96Ji5qpFBx5focChnzF4vBhTo4R",
  "key3": "2qQY5meziqW8gLQ46obCUY1S5rLf8vpeCmMEKNywSyEixBCg1srFffNmNYwnpVaCmPn2U4r9RFq5G8MJsWe8zShL",
  "key4": "5H3TTFz3rg6efspognww22mZ7UFzEjwHmmpjRCUf7WB8F57zmnwHBE2SN5LhN57Ks15dPuNUGQLciRMTdt81u6fL",
  "key5": "3kBWG8YqY71KZYZuryW7hotQwJX5qarLFfwFLp84EyRmuJermub2NUzVWtPvp7eY3fkYfL7G6AT1cAbn7zubJJks",
  "key6": "3hJy4Dfd2tHuoDax94M8z4tDZLo7bC7RSe4oKfRJ1twhddnjo4Wn3N33nD7XhRPKLLoxVsBQ7DYJ7fk1w8DAVeGm",
  "key7": "3Ef3L3F5sSFhA57yiV11ALKTSoaVStvAKwh6TUurqUXSa115TxpcQpFMKX1d9ZwwKv8ETg9rKh9wdocZdLB6hgKY",
  "key8": "2m7qWdmbcRaPM1mQoHQ8kd13urw43WyMTrXzqxim6Rfv9cBCeAKqyGinrjh6y4dAn9QR8RhPuTqooCBTDroZvU8h",
  "key9": "24SZ38hG9vn86kG5GKuVAeqa2aHvH8dBSH6wNSSNL2D3DQFYUJYkeDsGZYjjQYHDFKjaxe6vWiioZz3vpcPUFPZf",
  "key10": "2LnXPS57zZGtKaZgp96WzVXkSrvs5pp5bPxC5NRrfNJoZsJgTbmb4VN52Qi46nc1Jcqbje9d4G9CYnVZDRc1Pp5F",
  "key11": "PUqEbHTm73WNYVrZmj1win37hq5BsZAXuNbdvuaf9SygjgKUhvLKcW47pTLkFx5nC3BiNo6j2zMA57gf5Tqna8i",
  "key12": "2MSpe5BLi8EX1vJnuomET2VGp6ugbLAc44GpixbzdxAKBgDA3u5bSDHejiU2V2LNnk6eoF4TxRQWU6hWCLApqmgo",
  "key13": "2VY3rbSSfE1tKqTA5r6sQNvndZM6o59Q8LHiuYzRWvbA39QEviQacY458tYXfTu9aVP2HRPqP2JYPfjgwUJq5Pdy",
  "key14": "29aLs9v7n4Vx3tZP6AYyYDjCig3frUGTWinLXH2VPAeDDytN4ku7i9j8jdzBxV6Hhj5GjeiUDybBndfeQawRPxbG",
  "key15": "5PZ7u1kEUs2gopfupn4CYQvSMKeS7n8iiDKyupQsSMpSc3vaMG1PmhvM4ntBpXiJpsPPncTEmoZHNXFqxNh9FLAu",
  "key16": "2paJQE2LbHs36g4CwWrhK3cXjg4jrGkJMqCw2FrGxM674RLJjHMCLa8ZECwKpMAwprK5e479nzziQCjcNpvnxsXp",
  "key17": "4Q8iuUhd3mdsJVmoGCZwanbaLa9HYBWGb6Rap6Bko3TfT7phrPYKhLkphgF4wdEoD3xPoMnpArrSKesEUH8H2Bhz",
  "key18": "4x4h8r2eJydqzKdZqRj7aeZx2JnVJYq63ouHWvpDfJ7WygVwekES3Z2z7bh1qTrku3kQjzrwnpjFenQhJF65mnKz",
  "key19": "4GZPd817ycPPW8bazBN5fQHHw72wxz4ixGgyyxjixha3w6BUrbu1S7gyj7jaybEPjAi35vhRLpmkogYhkubL16R",
  "key20": "59azwZh6boJVqMUwZhTSp9qLVQwkjEmkPrhTrmC54N85UAm1mg5ou8sgGbtFVW1325hoayA42y4iqECuSfztSwLc",
  "key21": "2YMbzSUqZKnrVTd8JEHhMBQZ7WA9TM32LQszFgoJohY74q3Qe7HiAGgcv5jP8XfwLFUM2v8HRNFTyYT5hGZGAnDk",
  "key22": "4pwPf1cbzZ6j4HiFoYn7W32QqdCtmQbt9zoSCAFVfEA98zL8DtJxFgnspcxUGVUVrhvchYDSVL41znsT5xQLWiJh",
  "key23": "2ABjYMUPNLqoraetneGS1etFBAUi1G17oNNtUFak5pbRU32iEXJWgXvcPk5fZNNnXvUhQsCGaTmeAGeAJ2GEVDcR",
  "key24": "4Bq28q9dViJxmQueSjhtdvo2hUX9JyVp6aSbTBtLc7sSJRT8v5umuTkeVGe2nMyxqAqvpanKwiUkhgcu2KQA6fK3",
  "key25": "4dbbZLyFszjPYtsBWVN3cXCeyGe4JkQEFKJ9i4ZnUgb4i5g3jdeJuWrHnEkcTfBnUJZBNhes77zsMqG6PxJJzVU4",
  "key26": "3d3QsDCnHe6TAyVAwPXAb4kjxj5VbNVsTy7bA2Zu1UY7uDfJKBY4FoCDA3tcKrCa2rcjWbAyoDT11deYGd1i1HR8",
  "key27": "5GHNHZYGoc1yYkJjLvhc35n8TRGn4j3j3bHpbmwntGvonLmb7H4CSWtt5wdSEhwwWNJL7k8KpWQReLcjAb8YfJPd",
  "key28": "d9oMi6fKRtJLZn6xWHWE7hG2EQ4BuQYVsXAVS8CSDLghUkpK9EqEaxiuK5e7GEBrXH3kQ3kxKm7snvPvpGhTy7G",
  "key29": "28H9uA6UVNGE3C1bDALNv9HyMSEcb9nogfx7QBYNnXUxcCARAH9db48XSYiGV63GEBuH5oFg2Kd7h9qHCNmfGZPf",
  "key30": "5BzJZGcpwqxQ57An3Xy5WFEHBowqJJ8ucxT4cnqfQX9eLNjpvb8Kc9c7DgqFyMjUDKEM5aAdZNHRv9oNzVHgs7Kf",
  "key31": "5bFJKtqb2qoWhNW5ZNgmXzxVKSZ5NTA5H9FF4TM1ei3nE5GGxVLvVWuwP96NuNW8jxTxujewmub8skTbPs57RrBL",
  "key32": "3JPucVzCRdPLAhgPc2eNHpLZX7CdsKtVjaeiXWknyDcXnAy7CqLaJdKrnxvpXHDn4APJsDHQFrWFo25ETQxP41BB",
  "key33": "5V3PS7iqNX2WTrGyn6ehvdZ24xixQJWRg2qDxU5t7Ted1wSUA9jH6YCMHKgJohzSiERuuCGsb34q1XWbXLacZiTW",
  "key34": "2FzgFfaMream7EQgx8oEhhb9qY192yy6AEfHTVWyM6HPWKGKfr1Zj4YcdaoSPchRvJtqJ7npLqErpAcPonGYN4QP",
  "key35": "4Th3rCcVmRzTapzqP8XBc2izaU7qY3qNdDqDwCqMeJE4KYhstAohSWRkPVgzpLygfJbP4dMTBKPWHcfwQAsfWHdx",
  "key36": "2e3qGYBWpkg915CvybL8ktMbVi8eoEi2n6fPM15j3jVLKttgCbLh7kdJTgcsfcbdTM2fWRaBXrVF8zscPXCLnVtK",
  "key37": "3h1AYN64bzeRv4KsNThkrj69pCr52LgTB771Zi5N9uDfycp5CwQQs4mhTgk1AX3kM9kcCrcdZesRnp7dH5b7BJp4",
  "key38": "5Gb4TxV4vYToBLVHsayqyk6jnJMiSvw3YzF82bz1pHy9QHWaaYDvdP9BQZfsWkW2UJYkWsx3RW1TDLT4etjQYtw8",
  "key39": "3276mN2iz9yNKoj1DfKEf5zLN9sQ8adLMtx2PyjCn9P2XyzMCAidm6EEbqAxuEbvT4dQYVzM62XWkcyXervKRHKp",
  "key40": "2ePti6mbvuGRQvQ64sJwxNMcN9WRubaCcXej3A2ZjPeUW5SDDRWjczgy8rNhSjXcpQGon8cvQWQj66G6Erjkq3Tc",
  "key41": "5BL2Rxrx8722qdv5vLWZptHLeNMKKYNvGy68JgFq82cpTLVEi259Xa6xHWDr9oxWth357HZEARmczD7AfQo1LXZ6",
  "key42": "9dLh5UYTKVPUFzyL8FuCZ3Gja1AYpde9cQ9d936MHCzqKmqFPPhbkVfghRFSwqibBRFrj2Q51V2F3heCyPC2vzt",
  "key43": "28kdw6C5L31S6FgziSfuRVTskNfUSAhzYiffKv3ycEPhb1rrf83wRqRYn3VZ2K4B2EA4jSbvHytAAU7Hc8eY3DyD",
  "key44": "2LgWTNJKZF8zfVP9B3TMxEzSkjgF9X2Tm2gzF57KLSBgGe7VLWz44cWqiwXTsx8q8MkPVmgBrbw1koBQRsm16Xsy",
  "key45": "555Hs35dbbPH2iyPrmc6WbEAkvq34CwZmrReM8Pt2CAy5z5paneubtsDFfZH7B11kfwSB7ieSheW7vn7HAN4P23S",
  "key46": "5WpZPWYoxsaHTTaTEcc4saYKRnHE5C83aTJcsawYKizhNTV33zCh2xWfBe1McDXYgXoyet2DPKfKp9oN2xekHsuS"
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
