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
    "5A9JBYvrPfDc2jLDu5Mdtw2KNCK4ym3UBQ4bn8hEPBRDAPduRC5zuM9cp1ybVfX77ZdEHvUZLqeijgpeLkxPNpe4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Nh2vR2c5nBrpzt3pZUbH7qdwpk54qNxyXduD84Xih7GVExYRtnigp9dKC3YdTnCw71jZMZ3bygM9iYvbiJym35",
  "key1": "kZtPG4L7eBXLoQsKdcJcuuWfPhnoWHEHxEKtZ3ytfh856QnuncucGbLiXbqiscyyD1ZRrmf5DgfBgqQmQdCU9kp",
  "key2": "5xo7fDe7aqsWwBCXH7CWubp29MnfA5yKvc4GioQXwMEZiS7Zcbz6ikqWmcZp5vSvYu7EifJwF5Mqc2vBx5wzvFNx",
  "key3": "5H4fX4PiBdu8k439VuXg6123FRhGgCLS1VzP7NQfCzg7ezM4x4XH4CF21WhunLdWARNCLeCUzV2cgXMvpStZqy1h",
  "key4": "3y8SYNsjfgKjTmMeG9tjmZKvJJ9iAMHANAkgHVX7jZTm7Ks5hDEPor1jigbmZnGJzKZkPbu3RBajtNnYbeRVMgSu",
  "key5": "31vqtAUbh4KYGeqczULVsbNJpN41Ls2NHNA5rLXMLqhKgGvf5AXj1xRfGkMDMKGKBTxaXb1o7KvZysHvEbWLBYBU",
  "key6": "5yrTwqb9VuVxr43t4JVnRinRxXheGgWBsz9gA84zDb6BRumHx6FMhCEWkoXmzA1EMSUq3fi58oBmNJcogerCLCDB",
  "key7": "38Ap4nWmswg61shtfwUQ7siByTcrXm4cdvyjuYQiHGmZhkj2SqkWHRMmherX5vKw3nQ78VgVmDAovLVHvyW4jiLS",
  "key8": "4QDioXYWZzZJ2wLQPHSd6QQHjvY8mQ4EjY5HsJJTyPZQTBNH2MDeXPYov15xTHQmu8Rbjxdd249gyGhB2ytjMLhs",
  "key9": "5HxFkoQi6nNBFdULXZyKrtSKFmqKqy4BRvz959hBrCUc8vXkcUY1Hiwa8jCrNSifKCL6jaR8azYHHMyQfVG2NAKH",
  "key10": "4Gyngo3eSQwduCTUjmQvuEafYX2FzpErJy2zaA3ptRT26oCLrjbrThHTh1twAWxsAGfmf1YQ5Kjt9Ga9K3kVzfgp",
  "key11": "22PS9SzFWkgLMiXKpKTu1Jg4igQn8ygSmrpFvH9yTMEshEYk6JNCY6uyG6GcwErCMsT8gCTY4CsvCMCFSBnipSMC",
  "key12": "3QW54M7sj4R1teYsiJenRow8CwDfSzB2EUkq92WXLDk3wf7By7NPz1DUpchpLuUCw1kKq45UspCw5Ky9h7vkLRkf",
  "key13": "2PT7XA1zyq4Ksx9eicFKGX2DSwymH38SP5tyAwJz3ctgudbFkjkFt1m56XNSJWexiCVd1NF6VCveV25vrAzCFi1G",
  "key14": "5nA55sJvAjAhrkGjsR7RgzZTzKZus9mJz6bR25m282rpHDXx8PVkn9AxWmfuko9zc5QvRikkdUZkytBjAHWBENVn",
  "key15": "2p43tAtfQDorfDSxW6oQtJNSonDUE16MnBv59yUSkWWVAcnzHfvcv1XPBhTPbvcNoVAAXmKNoyqEZVf7o3ELyHJy",
  "key16": "ooZahB4j4AvK6VfeKBYwxNTEEYrPUfJZjXY3Wge85aKkZ8CaPvYdq8e7JoLsQdSKYDTziVDzpJG8VtWYhSxJeAS",
  "key17": "Pyn4RAPneAVg83zZU86PiCCiNtLVjcQcjhXvhBHG4B7nqjtbni7h3S56UZGH4qQv6BbE1mLsR3rJpC2Cr9XvPBv",
  "key18": "2GmunbECS3qviaHceH8tYXSr54Z1Fze3pRevLoMHFrgh3TTisEiDwSA3821UZRAqyX7pSAhkZG4dX8fxHSxP1bY3",
  "key19": "5RqaYV5Nrvd1tVWCFsMnDhYt6gwLGYvGscfV3s9HCZKFaWC53DizNhsDyks2ema4TRgCT3pLnQtEixT88avHziy",
  "key20": "HtDPYF8z3EB1ypaWgCwGSTFamiJngVurhwr8JGuAp2EM3DDYYbXDioeANy1oytmcgGuDFXninqvh89Stf9wrr5F",
  "key21": "4iFSWmCBL6oD81WdRyZiobTDPWVouZAnhYvPF7zR4EhxjNLh9rbvdqNbpCpTtMyp83PGisLPpBufVDE6ip1n6cXc",
  "key22": "ABXqAQELNsEo5A9xVXbo4DWKXHvoaBFmBdDhfqY9g8y2dxpQmFELtC6oQR6vuMNm1LuBrqTMeo4pGu9xzUqjMjR",
  "key23": "3R3qmYntb8cffURJydPVUj2GfB5WRQrCB73gWmHWatVcU5eczTfuEduYzuvfSY8oeXGh9k7EixSKnPCR9inyEujU",
  "key24": "5GAfyBmGfpMRfPvgSjDpmQiGUThQFd61hffYKdU2i2nGtSPqQMsnBcr9FJBbUq2Z1F3gqmmw3yWcstJCJW3dxiXn",
  "key25": "3YrLeFw19M1UsJTwqYvUS8sUradFsK8xmEikq9Mx18ykCRmwt6aP7yYCmegDEPk37SWbrB4Sucv3rxLKUCcKJhR",
  "key26": "2HxQc4s3rwoTE17AboBGDyrAPovVxUj3GVid5VFKbS4PkSTY6KJYc3enWzgWduBnq9FKyqdoeojZach9wZhw5jPs",
  "key27": "HWYkB7mLVgD9UjgJYx6bjQrQHDFoRu45L5k5iSx4mQrUf5FxArD27RoDUtHcR1VrdBbTtf1RDYqwL5Hqhwj4CTb",
  "key28": "4mbhuBiHncan9RYQD1UYHs8Y6mTBFn9hE45JJRee91vSgL7hViSM2B7A1S9FUWh1b7iJbKRMhRzqEhu35Xy1ab91",
  "key29": "4Vmg8744YMAfBabMvDh4s9SdVMryARo38B2s11vW8UzzcXZSZfX9CxT78xGxoEQJYZuwGQgC3rErMCNVMHNbrUvX"
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
