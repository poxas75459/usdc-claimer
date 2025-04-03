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
    "2Zt2SPwB8mdcCfZMt7RwkGLvW9qgLswkJ169y9uVsJ5a7qZuFmDfy7qUg89W986otoz5XgjSzRLJcn9TrCugMDga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s65S4y81tM7W9ffZQQX5dkVGRYppiuJGF54vDKmg6S5aQpYzwadRqEFWrCufwPhUNRf7iE5ma8vDRngHcUHzCwP",
  "key1": "3uA2tSKE1tFAXnShhxDn6p5JJCsaEkkj2ZwD57c2nbz1RCFFiDRNrpkK5Thm5ekf5LoK56zyDwdmwcqYGJd2YBWh",
  "key2": "grLAQYxCt4QV8EunoTQ7HKsh73oFUGyHuoTwMEeKp36ZTE2JdkaPihxA1zqrqMaEsgyRHRTUBByoqGovvveay8W",
  "key3": "5djcoqALiXknpj5HyDf8C17rnVuiCK1dLzrFHPvBDpiyHT33rvBYGW9K47QGBBAe3pvgbf9kq1G78miT43UfqKb6",
  "key4": "3Mx5TnH3v45sRgj9Ff46ZjESEH9PVqRPWHFfbYDGGRgyz7dVh7fFKUVAfhjE2aMxB2YAXLPpzd5mnwYtSXmuc4xw",
  "key5": "oWGpU9A3qVjAkUmioeLivCDDRQnaSUsBhxEkdc2CeNXA2ETif6wHL6oMtnrr3qnUwS9mt2Pi2cAd716nRyJrZx5",
  "key6": "3zE8HVVe46xmiAjmyjjwV61NnZMfWXu9o9d3CfNcCADqJ2ituQBCxxMRgPRPczne9mmv4MmQpM2ViR6rn5a4yxd7",
  "key7": "43L9RZtQUdr9swumF4cXdDq5tVWT8TuDQaqhV2VVENgCWafXAtPJCeDJ99csvhsgksVXFZ6AmoRWegFKs19YhGb6",
  "key8": "5YwVLvrMf5nRm698EETjxhVVvdgp9aLh2xmRBjFzNsxs4vfuxA47mHm5Qv6x1AAYgbSmPRYP33iwez33Me3uNctd",
  "key9": "TK5b36xfURNf9Ds95rqiZpreYtfYgSrcXppT6BaPu4f8BJBJjRHoGWUCmBkD7GdgLE6p8zx3h92zSrDr7gY3X1A",
  "key10": "334hi5U1JMiN5bPDP969MFq4rqZRrv8bKPqUF765w2eZ6krxDcnPjn7iZDT8CXer6c7Bbvt5VsyqrZcCtNY6ZwNu",
  "key11": "4niaeEA4CjKBYvC344XYg8sLpdonHwzVSLtp5p4CyAwk4PdfpQXD9VPEL4TQ8rkP3jQSzR9YbXLU1jj9AuwZWv75",
  "key12": "5UaAnMAG8BPzWJxbczv1kquHDMZgemNgNqfrd3wLe6zDbVi2o6M6LtLFDZATaQYCaEs3BneGbsyW64JuPxFv4Viv",
  "key13": "22J119YcGnemTAC3omAQBfd2s2Ep5aMK9zKXXmFWQJit1DA7iEtpAtY2JPiPFKS8VJtY9db64TthYtRvQyArr5kg",
  "key14": "3JU7CSe5ZBzbiuPwZSma8uK8owgGWktG8ihD6KE2nGk9SbxQGQckNVkEVwzUtErZdf6oLuXfqAkVk8DjigQAwRhc",
  "key15": "3HjyVcP5aLvYX3oDSaCeAXuuwEJKhWWHCEiFPpb5H1ePJ9emvapqQ7e341WFzbVfTvWW9vkZK9YgSL6gC7G7qQfq",
  "key16": "3oN1fwQsEVXE7YFCd4HcvdYFPVo6YvZfW7KYJPKPe2ydL86MY9v3Jw4UiLz5Aq277gr4DoK531xJxWm5CbynDgao",
  "key17": "5LeyvPyNjfjdH6raPEYRnjV4nNo5FFLmEanKA5ht8exDkUBbYi1k7ReN6vuzLzFLC6tjqoA9pTKYdRpG54LkHwvK",
  "key18": "pko3Q369U5fb181oBkXVLyYfY6zUj6S2AyqrVqux6CLW1fcFQ7GLPnSbCDBVPxFK2cHFeRVsGezTJQSKHoxGxZF",
  "key19": "2cpMkScd8bZWEzRFdA5UayuVxhwFx6jSo58yvheVuv8UJtgE95PAGmqZa18ThDZnqhvY7MkydALYCdsWKXqEPAs2",
  "key20": "3bffvVarvUrYxf7JWX4Prqj7e6r3g1BJiBBSpggjJKmRDvbCxuRUto4ywggeU8TbXQhb7ozDM6bUAvNnMsRbhvRL",
  "key21": "4FNNkKQsk6AtroeWgYNHPas7sJh9PVajCnurzV9adsUWoYfjbJfBW42Rv3WBMomuDYqS8Mj38NBdtbutzpEgujwE",
  "key22": "5Ycew8oannQ2jS4WrLmyzF44okWEwXxMPe7vg1f91mxxVf8KCc43XKhVSqMBe3DWLBDSYtaGbPL2iQshQ2dVctRU",
  "key23": "672JcvN8PikFBheNvgHhh1FAvhCTihZ6kxyVwg2VLv9Ruf1nzm3Y4jGB61tLMdZm4Sk1piYUf5SyrmE7amJfKRjF",
  "key24": "aiek4Lk9YYj7WpvLUJxuxdjGXXj5ivmprDbat5ifi7X5n12YzXQBQkS6HzU49nNWfVLWNFJoW3yJcALjRDVcuKs",
  "key25": "3AgkKj8Ras1TYSa7RBpaxdT77xmQLxtLpUHwPp7eGnxmhLuewfDkGQqbWs1bKJkbocNzgHpSDvEvNQyGchbN28SS",
  "key26": "3NgYyqZbU7iPaTgUR9ziqdEaYSFC8nnQS6bRWigWqmmnz55C46hB4mLAZ6x5GZoiU5ABBm1ovBbdUhtGvszzLooA",
  "key27": "3a1KLmWFeZrDqSUEPYh4Y2mAYGN11H7eoHHRMFx7qswFrJzcgVS3FNjMAHefQwP7UgYC7to4PQG4uqxXZCGBXYu3",
  "key28": "5FbjSrQwcBnuikLnDWfsXiKStQDbEeJmf4q8V3HWiGyiVKyX8NVtML9uj9a2u91CVS5d41wdtgrqV5iVFM1A5Shr",
  "key29": "24wunU9P2SPD3qt5Fhk3LS91NY8WDFQH63eZzy3AesgjW4jbQTMtsqq63QwYHvYeLjW68g7pdhqQ24adQMKGPz5P",
  "key30": "5VnxQPwjp5E5TWKs8qwgDLp57Zs66GPBTwiBLcLBiepN1HWFBdMZg5Hii7uGnGPtLNpUYWdmTm9mqCuPek9wbBFa",
  "key31": "5wozC4Conap8GGs4BfUVYYq67SLJUJv92itzd4nWU5rgmPLK3xbDWFUVberxH28o3WDdp5hakR4kX5jt1bS7Uizk",
  "key32": "25SYbt9bE4kipuUSgwfq44uz8L2zYdet7aXvfYsXCDDqJG4nj4DLohyb1Vrb2mwuxJGq3nwgVUNE8FQbwDmPiqZq",
  "key33": "31dLZKY7ujfZdMUDqEyREuN3XJ8ztDD36zuxfMTzU4tr7CeMz46AkyrsGjaf5Njz1Ax7jzXeNJnSKdmjQ8484tcN",
  "key34": "3p78PfswNAagF7wo5C5h2eDVzkoWTbnKz7vPZsHAHFYyQhBNYyJxRQDhs3n9NhThDntjQdjjruGd46ji7B85RdE6",
  "key35": "3xQ2AZk24uCB5MTmKfVxp7GWLeo3y3Nwg3cBkXv3RqSFMphJf2C3BxG56sh8ae9p74dGzEuBZCuRUr1qxcKPb9QX",
  "key36": "4Bs2joCdDhxFkpgSS4rXW95hLqGaWzc4wrXojAb1whgELDgDPSFd9zrPRA7AsJjaqJvKsdBWmuiYQbN859mCWmJo",
  "key37": "A8gAn4DPxgQKh4kqZezGS7ZT7KdTQELND8ZmqB4x182TSRNEHoRJpJ836suDqjXM3GeTkDKqZqa3fGqM7oM7udR",
  "key38": "5M1twyZESyMnCjSCptRage2BvBcXyp9MqPN5kVmy7oVj4wGXDeYgLSpRtroSFmQN5WYgVmspWobzQi4MYD3bxP43",
  "key39": "UcmrMrNTPqL8bZnXZtRxf8t1GHZSKDiTDZvdozWz5TuFXXbrQMEXpftfAvTaBH6XUjA3H8oWaDYGQLxHJsghqot"
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
