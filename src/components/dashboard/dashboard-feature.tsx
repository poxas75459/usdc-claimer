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
    "UKH4CGZYdhhLZaVLnBNmA3XcggtjPSWuusahQfqb4JwVnZTXYnuHShpcBhJaKkza9RZSFrVnsaARYavXaMJbiKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "orytoki2K42ijuMPnRkrQ2ZjKfPnDtHoEwjRv5mLhWuP8nU1cZbHFzEbhUR8hA2M9Lf4qGCH2xW6fk2WJSJv2M7",
  "key1": "59xKPWkV9dMnFsq7n7gVgeEvetxGmSEQ295TnKskURkYH8HqWrwi9Q6NcT2kt1vxuumyd7kVpPceDYVEY3HAXTjU",
  "key2": "2czQd8tTRYUHYcGAapTNJs94nfvmuk9kiJZHyRpmY4CrT5iG9uBNrU7Fti7QpHfYe44vQFNJRpUeFnWg1NYaTXfE",
  "key3": "3yKL75nMd26H5dqKBHWPb1cG2yPJgRnXM5nWXMu5Ub5LdMdCNwEwxjwxkqEePQCUyU7werfigawHvE2jU6qu63Yu",
  "key4": "4ez64hNvjn7asKF4RxptwMcW6RUZUsWkhKo3mnxhGQgBJ5peNESa6UfMV9YiELxUMALdXb44LacAeP8rziko1NJS",
  "key5": "pQrC9uDs8AW2UYdhFRhvpPtmZ7coxSnbRJXi1nv3WytSkQpoFmpnYVVT3Jtw8ELvqkJK7643EDLzHC6xRDas4vD",
  "key6": "5nBKRyaw6XX1ophc7XYosmtLscgpyPdSaEFB4tqzyCxUNnqCVNWrBDNm8bgTUrrHBfoCBWD3hm9riNm6xmEfVkYE",
  "key7": "2pPU7j2DhSbnE8XkYgDRu8Sa2BwWmJGkuoTcHTmZTyez7k1zxuXTLPXvma1g2PjB6Dim8pVRM9UiQriabGrqcAF2",
  "key8": "3DYp2mcLQAeTfi2TBzA3trejBBT1trSrJSbkoBB8ed6HMaYKM12AvyQiUVQNBBXm3WH1qasvH5dmvnR3fb3Z8bDf",
  "key9": "2mXFDYUe9gCPc22Q6rWwBoL2WNmN3dW7bpuPrPQc5QpM9PbtzdFxg9f6dmXcLJj4caNYqKMAb736ajMcbY5h3s6o",
  "key10": "2BzxzmkVf1oeTzhCZ2MVAH1xU1i5WNnBPfENsiK2DPYZBwHKMkwywJFhNAYfH9HZSWfKHM4XLUtdpJFKmgh4xcBd",
  "key11": "4GVpbyHFcGkU3eVwzYL5PSpV81UZZxGAyJqGfk23DXQK4ovyy16tS9Qn2LpkZesX76jfBQpLwNCqSXswZSTvCe9K",
  "key12": "36fvkbjbnbpioc81gc4hUt8dfeoK9NRoCw5mVCHm668t4USSDbq81g3LtyANg9JGc4eiN1NA8q4kDF6rnAUf2YQ7",
  "key13": "Xr31MPaXKba7LbqfskY76DtmSgrhxA3nDtUfuogiJ7Z8v7Ss91r64kHBK3VGN1UJSdi4RQGkSFEL4CRUrYKqF5x",
  "key14": "3gbNJTjbCseWaNrem2rtqLtsMtzWbqtGWV5s8Kvnv6jXwTbXmnBNC7nqB9nPPTWGM2Zc9RvwMDrqAZG6bUtVKQNv",
  "key15": "5hEyN3Uez8KGSuhjSyYVsMKaNpwGqWYoTJtnKZUdDaDnTQYVDxagtxD3wsV6e3pkN6jteSjYrfcVjt8BkJB7Yx6B",
  "key16": "2ZcwpMVQa6dfXnyHuitW2dPKMSfSKeRHbEmR4Mk7WuvUcAQ5hbhf3CaFYhgHXRTGeFnc47zy73AGuBCLi9xoNCmt",
  "key17": "4oeJKeLrZ9ZUTgdsGgsn3yxP1RwktafLWGooLDjiaL8fFHxnTabXKSVKkHqKwF2CVt7p4iSzbi8xJ6veHqSishqc",
  "key18": "2Sgu9F4Qkwdggt2wZzSSnkPeNq3RGN5KyXepfo2cJDCcukcsXxD3yo4Fph4zTLPdK6QC2L5kWLtpr544DrNfNE2Z",
  "key19": "4cKaWxKmLoqKk7FpfMmYHfKeNY7QsKpeRZJRj1iZffbjo1MhePxAPPxE8cFjng6BKU6dN4tmwnyd7mRfbNeRAAsY",
  "key20": "4rGELcegvRHbyhi5wurcDykSirKBGo1CoScCq7Nmh5huQ88BCpin1wRqjT5zXzsNiD2Z52vzfCyDVwFewGyAvQbh",
  "key21": "3LrYvU8B4UMATyxU2sc3fD7ikAbthxvcoc4g439rdirDg7HLVvDT4GB2PJHvhs2SAkazcMHAAJjpFd8zk6Txpc1s",
  "key22": "2THEZxePVZoftx7E34FcxrUsrycByhBUorYfTxhHSsa8qSLgaBhxVrXgBbxUx6oNmPmn9rQ5mnknu5iCNKQji9i",
  "key23": "4D1E44juo3NMCJX2vpjQsa23gLffw31TWpEnEYj45iaR7TcEHzkhDeLNChvGLtYLqkZeJvXgjsjW3ZHXY72G7F1D",
  "key24": "5CKfwgpfGekVeZUGAbmKdYna9xJeVYx2dSjhjagM5GqHZhAZfdi6YyCgiHmJVLNhQMQURw5iKaEuPJGmyYr4Qe3T",
  "key25": "4jRyjLqBLMEBA7m7C9CK5vcbhjeJsXxm4q9yL1H9vKFMjfBtY557s1bTTHmseoTESrSB4NXSPbNLH4Uz1tTYHdxy",
  "key26": "4w7HE8weHzBVkNS8jLrjuedBCGk1NqqBREi3gQWjUzwmYv4TTU7MoUiXHxe3WqoamzK9wpJLjWM7qgumpUqXHmWc",
  "key27": "4Kyj92ALjfZcfzhMuZ7WxAXTW4DwQEy36xXW2dLhzRxoWRVxHdA2rF7UmpfaZktGi4gwdAc83YpAWBFGfEcLgHxM",
  "key28": "4aRXLBMxxvNCszxyBVHaN4f5Yb2E8wsWceGxHftCtyVEQJbLCawEicLSVXT7N9FMqq9nMJeU2NrFka3DB8prqM1f"
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
