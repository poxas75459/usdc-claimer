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
    "FjMDnmNykvGFq388kkyqtLDLtwS8PE1tT742LCMKUQWKhsVN5ZUUHLknAeouxVSKxyqta7DQg1314KusBSgnLaS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jpLjXg5sAYzFNoido6Q9iap6PHXgd2RsnkCV1d2bEwcUPQvdWhMAfeyKzwGmr2s6ST8msa6X4mCnMvnUmc1smaT",
  "key1": "Ej34pCLL7CooT3qy7hvf2E4xRqJ7ZqhtKzSDJ4nvN7cyKSDT8W9grkSK1GuHgjPpsFtEXMrhUMFt6nhiR4xpDKZ",
  "key2": "wY628zFmYwrqa3Xmt5h5QCNqfn9Ck7xadSC8uJ9i6yxSmrfTNuLTLZRehQpyE3LdKsNmDzdEGjcZMHuhJMJRYAz",
  "key3": "3kgJqG16WPykT93SFbfAMt3jEgCvshAjT69q3iLMV3K2nZDuzMuudU7n9YENt3wS3wXtVEhw7xYoeR2LpnvXUEEf",
  "key4": "66EMYoTcAAsBt6ZdyaUDqHw8xQB62dcrfAyLs1LhWp4u8WChoPq4ztJfe1iwgDz4T6kjixdZfGgU8WxiAawHQzj9",
  "key5": "5CtxqsKZcYTfrdCdAsNZLrF4UYh2Cv2fR29q9dcJTRsuwFdrU8K1Dch9qXztxuctZVMstSGmn6dmQht6t3qbCEwc",
  "key6": "39B47BnDKSQga4mkSSx9rGmA5oCXANBn1k5SRpnt7nLTLnzwvBdA85CzzYU2ECBR5ziaHXzjc9g2n6q4yYHEmu2Q",
  "key7": "7NUECd5oM36YKM3hza52dFjMLdmagpUcBXoXKaU8AjgadRgZEdB6EPM5TvBKGWTQ5cPq6c7no6r3n53YvzoLCoH",
  "key8": "3fBvEtMacv6RJFKUYA11fbP9jPyEvvcNdWEqT5Xa9BojJmTYTdidCcVpeyf1Zcn7VAEw9Q5cSqqxKRQPf3ijZQYG",
  "key9": "641fGrqGjehacFdiwVYkjTtLLUhFeRvvzNQEBSAsSmfMyqHuxtohWxRb2ZFMxqWQQu5Fk2oSetzfz5weApZxMXd2",
  "key10": "4f5DuiCqQdogVyc5xvYStNb6xam8a4orUC7aCuipV74uzdzMnNhYjwFBefP3UXoTBVesvvAb7vY2NzSyaUfpXw2Y",
  "key11": "5VEvDH5VkSxNr5od9c6NtDME6khZxJwGNhZqzYRfLk8w9QYwfjYGp6qNMZvSdQUdpChwX5DoTmdBcC2NfLGRrzBG",
  "key12": "2JkyQMv8ieYx5K14hRgCcAdzgNDDA7qinpMWtvJtPgUk8in7FDAmRg97Y1WiDunoG2bRxkvd72cp41s99mSqb7LA",
  "key13": "2dJsWVuiNcDn5kQHUMRNaxJTGR1vXCFPyeeNuRGTqLQg4DUMpcJbfMiqgDmcrywtMCt5NZdNZKdgD8W5917mie1d",
  "key14": "4LfUMfbTQivxDpFN6pBdzhMpng1qZnp2CsWJKC321WjfRbnagb3YhEtasE1kVgnJNhb5FNEEAbc77fXvi7aE4LWa",
  "key15": "2GnnEpMvRNmnte9weKFzSNfNKSUqNH2ifRb69ot2PUCzbgdeDgQu1QkE8bFmtDsGeBvfhmoXKSGvvHNako3Ta1uq",
  "key16": "PZq7Py6tFqg6LJgWcL5fKi3dCgM2yMpvtQKJsJEPcgJnhydaBNfir9kGSzGis4UVBEJy2tmHRB6rsB5wMwZ4PwC",
  "key17": "V8jQH3hx5XFP97f3kXFNCozVLzDuQpZNX3dJeSB2U6ZQ5ZTYqmgU2kiWdDSUxushTDWqXsnVZ7joj1wz53fbCon",
  "key18": "2NYXbxZ4244172SUsZfynevhgNgifuMxjWSnRbxk4L6U6dudR4wFqeu1UWmyY9YnbbLbCJtfxufUCEYCbKHK2tNK",
  "key19": "2TBciugwuDfMLM6c4LPcV4w3rC2Pe3bK25FEycVbSMS3HyVrLSF4gR7WuNpPK9FrKuhERuouhaZYd8NnGNdWLewE",
  "key20": "4t1xUTVtpjTYwDZEJwcujWNLDyrBwVUzh8iqiqrWha4tjkbR7jo1QVuWHpx6zmFPwb2rfgmAx3uue5kMHWa2uKVB",
  "key21": "5reuGxzkYRAP9GT47qWPpZXJyVyt1GCgDMcJT96C3MsXkL2YYLLPukZtVVTyqnxXorQNJ2tvwcGNMgDdbZNrJnty",
  "key22": "4L2vEF84fjFGDHX6jUPEWNVLYjc7qZqq7Zo6WGK4LT3Ccp28LovSauaHDy8HvkjTpne6f53JQK28ZDgr6RDSKAoY",
  "key23": "3EqXANy1mPZ8otzi4Yw45WyjSXE8BXtS1tLGm5iG8ffn6YTWe1RgSmXoJobHftk3y9gnUhhnVkn5LVVimmjbTUxH",
  "key24": "WUoATk7D3g9RtB7GwkaNv19hF7YTiD9F1YiH9n8ZgAiTe4GeTJW74RJWmRcGzqUxtooM9GCd1n3CNcTDcCf4w5d",
  "key25": "4AHwjKutkz1u5WAUaeNPcpJ7GWiPH7GiYW27XfFTQJZtVLXeoCCChkqiSMFzgfz6vLp86nR2arN4xP4SowExXgne",
  "key26": "5NiyR71hPVnHj6gmMmSPAttdcvNGmSQhcu9jdH9dexqJX1Ckpw78hkB5Dt8ED8MndFZ2TRYnxqEworn69FdN9Nrn",
  "key27": "4orLWzxhPgx8u5w7nFpwhVmvufPCZsRW9smBDf9r7BwQZkDKdJ95iYvipRFX23cBNLMWXQCJMgKdxAkH3SWdgmBy",
  "key28": "26odvK6YfDiYXyB5YihFtLWPdtwp521fdPdH9ms6Ht9fikZvdyseeD4qCLXP8noXd8HDzWygdV4eX3buRogEBPW7",
  "key29": "uAzbprosngPuj6DY1mFo6itRXSFFtaNm5uPJUt4BdsYCFS876DoKJDKVU4Fd1yQSFR4VmYM6JSao21MXBK3dP2Y",
  "key30": "2xVP9NqgneRJoaMDevQFfkiN1jdYsU2hH89iCxjWHXCPKRGfYpWB8NiE8ErXwYaZwZGbD3LzTr4ypKRkTZGQvwru",
  "key31": "3KtkxNcyS1WXZcNahjePzgDU44DDrVKmJvdkfQVZ3153M39pkgNM9gHunRHcmZDK7QvhMovCs4WPeGb6xXiDJZ8o"
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
