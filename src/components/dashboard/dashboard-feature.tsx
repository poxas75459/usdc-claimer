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
    "3Y9ZERQpxXdxpAetjBBP4WC8Rs3PXmLVtorSoGcvrX8UPEsXfyN66cpRcD85X44fF7c6dwKUwBNq1SR5oYWDhiTJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c6RCCGi1nXo9cysWp4Wvu5CimN9dXC1xC33vPkW9JVuZi6g66APwtqZ8nVE3DdthYus8jPC6MR6xgRAFoyg9Kiw",
  "key1": "AVeqQLwobp59jGLnubGboRU1UFLFLA925vV3iKt8JuSUaLARamdp3ycM2pYTE3YkB7WqPfPPVi6xkfm4eruhdtk",
  "key2": "3Rt52rnKRx2LZ6JEMk7wParpT7qfBUvkQGWzCZuTMBsKSNwsJfbhAeoUsBGwykLb8kHkLqDxMSzmv2HthdM3bf2Y",
  "key3": "2P8XinBjJdv5ipPsV8UbgvNwoVes42BFRsAeFs6udXbNgLH9DZckG4qdLBmY11hkG3iBFzXzfBS5EpMhSLhqkU1o",
  "key4": "46MYEoQS4V67BFvn4uTugnhbKP38jRqaNLUanPgetY98hCejRhR224N84UVpF4f22Nd4XY1ope22SwhmX35pxyrM",
  "key5": "2qUFumGnVahQkmrRiWHVh5qH1Mb73upQgLaWxFUyZHu6i6J4MCUzrmBuN2bmH4oVJdm8wKib1mNiDPAASKjeFxi8",
  "key6": "4JjaNmzTDMtuFL9eWK2DhY595YEQxtVjgknQfaJTjgopXhWoDsSJwTrLNpJQ3vvaRizxan8X3QuTSYfPAnF6VZgy",
  "key7": "4WySy6wwfqqrDoajVMLHHZV3K4sBMbK9jDBzExNktjdSCGBBbZWeCnHcpRyY3dPBuzemuV6Wct9m6g7MsyQJ5QE8",
  "key8": "4PbBFqCScVG8M96fesm6KBoX5wduFvHjcN2pcnX8gq9xoxV4xuxceU1jajUx7NAYbm8us5ucFWKhZDwHFDCA8BHi",
  "key9": "2SVDdAqpu5UeDpt1F3vBXFegjJ3cZzEkcgjX8UJufVC19movLemzohYf2X9hewTT9ReLyLaM8NYD41PrV1u8pLye",
  "key10": "5cPrxFmAqn9PdykeDVk3LLi25ZSSgrfYaDZMqUfLUQLfEP6GXCYzgXSxnANma6bKDkYwdxyn19WLVC869tnpFnY3",
  "key11": "2641ZSeNf8xymrqGJ86voYgChoFnAtVcJLoPTj4yfvUrUmwvrroLNBK9KiDhqe8ERxZxPdWvDMccr6F7CzzHKwbT",
  "key12": "5FAChmwGidb7mRHAvM1ttk4yGJas32HPk993tBLrwKz7bxawcRuwRCLjj6GCYCQtztqrqXCM64sA7tvekAzy65vb",
  "key13": "4ywv1dqZRfjAwdCEvzbRHT1XNSeMQFHq4u4NVHWw1nXcWwZC8TcJqftXKUDCMFwNdcH91fCCHnmL9x52ipNDwQmp",
  "key14": "5Rd5cXcTBtM8RGDFzprQpxMpDpE7SGfdPi79HV5Ng2a9uSyR9kM7xnMMCSNiYVJpV9qzgkVby6vwVS4iUjgYfZH6",
  "key15": "3NkTVoMmp8ptpQEtXiByrP8qiLTjfyFoNbEto9ggR7z9tWE9vCsrwJyq4uHhpj8fSUtGxKR848B6VHm3dvzzXsKe",
  "key16": "EcWMaDfbSJMfd56GXAN7Xxz9BYnXVE3tUmguRcdMLg9yg7ZBQgajFnAbvRwmKxo5kjK3Ec4iMyWKiCzZ1fWsNrZ",
  "key17": "4yAafPPqGXkM3JgeXLcxZn5FfMNoPxFrbz7SonDMQ5y5RyfJF7PfdkfvnwUrLxmni173x7iVCUmJNiXhiSYPr9MR",
  "key18": "5QgENkMempNjFfo1hEfANMxpRrvjUeQKeJ4PDeJ5zCpLmxbSv645XnJKPzwmG48dEGyyLeqo4i39sisBhPHFoJgp",
  "key19": "2j91V5kfa6ectmmzDCeB7egTreLPe2TRT5pceM4b93vyUXowzCpQJ13zajcNCyc3eieGn5SQETDq2bJ2TQCBdz8z",
  "key20": "2pd1KR2oSCNbWobdWga9N6PmvX3GJqZ3fxViz1mhJAKGrmLmfsC4hkRg3wCVHF5ZUxah1mDFQEqA1rSfH7MnsbVS",
  "key21": "5Z7DqLqAU8Es9B9Vn5UNDKRT5xHAh65cZZUbLB4St9HBg5afXmrSbe8fE3BurPvX2nhPrjdmqszzzu1M5j8RjdYB",
  "key22": "5UzmBGoTGn8zqBicjT27cgUQVaDM5DVxNG4Ns6EFsbhmAuPbqGS67eEwzB2DeMU9JNyxbz9kTJF5vkH4JDiJDnce",
  "key23": "3unFihb7TV6tHZHL9m2wLKmgSL8LiJwegW9pi5rWyH1VnJYP84ek8JL45ZEcsBVzfsvRDLYTP5MXgd6mJLRMmCDY",
  "key24": "2VzDmDErMAKUcqXMaQ3HhXaGNM8d8xy6hyHb5gpJ9CArDKMUrJAcr8wsxQUNQfWHeCq5LFvJQn7U3wRCFrEMN19c",
  "key25": "Y3TTm6MyCGCbmSt4KMZojRrdgkETLU2PcYWy5qaDhu2vybWPnUQN9qTmjqfvjqWYrMebqqHGw21ezhJjrLFg9qi",
  "key26": "2zGirSKJB1xWEvqK8AvczYa66kbSGgj3qCXDF1kMuWoc2bjYJQGRJEjJHBL4poiZkTZppbB2A8hvnfPqJiHV6XZP",
  "key27": "5hnLoDmkXhtgLG15txBMj87rb3B3B4k4Y5rL9pGfDPF7FUB2kitNBVjmbR2vTRsnUWMrCtJsSZh7azw42GLzDcao",
  "key28": "jCcSS2mX4W3LKbBkRkjV6MuznGveF8Hd3ngFchKZmNEtUSaB7QhsAYNPymDfQE3vVrXTaQQztRgZbpoHxuFA16z",
  "key29": "2zd8AUfbRWPwJhmGA11oriVYo3FdBBSMm4rVFqA1dU7NuUGKjYW5PNo4gw6nK7PKku652QqumiZg2hebek52BnDB",
  "key30": "24pkq696tM9J5h8gDJdsDgzNeXT2QKy3mxuw385mZErC7a3KQ5G83WhCGGdYcqjyNCvfHnajjRV9YLCgtgC5gJN4",
  "key31": "2c4TCDG1YYQtAj1yEH91UcE1kw9estotLDbPXKFzJ8D3ZTeMPqQ1KHXuLhcYFbeJ9Y4QKDiH9fPJRTM8ffdfviwY",
  "key32": "56dmiURP1VXqBgXGLwqNTStvfiJQA1VhLvcP86bYn2CYAocZPVK78MWUF6wnJSX5acL9wdACJZA68zswVH4c9syk",
  "key33": "3eiVGjqvkuHd53WMmvGXFYhH3jdTQfsoNzaWNi6RMSAerbmRzcXnPbYECL4y9RGWdQw59SLPBt3CXeu5XXUvg7Xx",
  "key34": "5ak9zm5ZEymP6HaCjxs1CBozUURiqNkw57oXKnjd7L55XCz41cRdMBn93qKrHwe75dydHWqCZfjkvyHz3tErJpzu",
  "key35": "L32uswNxUfn4uJyKyvcEpuwjwqwECmdhYzc6x7s6L7KQ8XLhtBpSMQmGjawzuT7PdkkBMMQvqoPEzhGB5jrJSUn"
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
