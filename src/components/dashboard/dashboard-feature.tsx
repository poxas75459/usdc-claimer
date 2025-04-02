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
    "48R11p15qzqZc8HpQXmvPKJ1E8rCyJpS1bo6uRFTNyjHJCMTQMrwu5SVX7u4N1bCyJafzbeCsmjqHBKRZppXgoAR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48XAnStvwUAY7LugZzX2hArtGQYQCsqG6iWHnqp1i1rA3sDt5jqPNLtxxNei1kSoZn5BvsHqPCxqYiarXE6VfXgK",
  "key1": "45sBbgskPFbDHwg3qqWXuRinbr32iTEetj1Snm5jHbhrRR4DKuTNNCtYpDkm5BHZZTdu24M2SqUGjmCuTVm2gwU3",
  "key2": "394DKKpPrP4H8upH94NyTdssF4xNiM94Pn8daPq9pA8ptXrJmibMjXck1iexnndcuvPVq1V49i4MhBe2cMNnJ9hg",
  "key3": "rGe5L7JwqW8paFw7MFr6PYTN2svihYaZEsQaGdN5N7JLjvrREhc4mjkZmPEDNWHdpk8bamEHLBCUUFm1MpUAURz",
  "key4": "RUACTmw2Bzd6FcMgrEhRvFp1Lf2vRSbSH9s4Bz8Z2Njv9DYtYgz5F2uhRLw3aeQJy2gaWjjMsGZmcuCoZRZAFzi",
  "key5": "2ZvmJamH1dGhEoDSfsXkKimcskv7mN1MAvxzy4XhuZywAtB2uESKhL6TVmnyVKp1nJNsiyQPL6qgpqXKpgidA4r8",
  "key6": "2Tkt12WkPqyj31bALwu4KYKhDnxZKsfsD6a5NTZ8AVJmc1AjNRQFzKnrQ533tWq8QTBJJYwTJb7cpRdNXsvNzVfN",
  "key7": "2mPbj855qw4pgH6xmuMzGWuZJdSBsoayDaWfrb9G4VApr8QV43NZXHexsBHYdAMd7kZ8jFxs2dRjaARtFx9F9uvb",
  "key8": "2YpH75Mb19JJgiQL4yPVDUUAxVQUDyXJwGMoHfEihzN3e6TV2WnKzQmiejYCvdyqagwcwahFPxreRN38anXG1djW",
  "key9": "6rGo4uqALL1mPawbJjchzQ1bcJeSvdGurkojxQVfS1x9tyVcoJ8FHggKjDP9JRTJ5fcYMPzQenNceqoqEvZqeZJ",
  "key10": "3UvuPkRYPD3kpA3wgUxHrAdf9SMt5WEx5F5r3ax45nyeQegWkLjvMfWNVDmfTdrPHRnNY6RD3WKbRNvNARN8BRqf",
  "key11": "3BSMBxhEPBSH5T2RfJWrMmQW5BMedDVYu4vThvZX8vxQKCZaCcDYAgxzw5fQqCiJrsNU4K8SGoFh1F1Wc4BCzTYG",
  "key12": "D7p2csbgYbLxWVN2ReW3yu1vkAMgPtNo8no25hB36WRiuoPHMH96BdK7VXuxtXExaq25V8rBFEGnTSc3Fqatr2N",
  "key13": "3BYKDbHo8E68pFPzxbZWUWRjrdKXfsuyocSrp2bGc7WBFTFxcmjdSVGih6bbQyJXqMf18MeBBmneAGLBpq97LpAf",
  "key14": "4u9Z3nHKUrdm4mKLiFdaMGhsR2VUsfsLsGhRLBnvx2wtHwGZJuuPqC7MduxKB3acNHq3XnbYNZjFQpkzfJZs35FW",
  "key15": "FLNjtbJL2XjpWggxyh1J8qaYfixRN3oKpAZMSQ5ZwuLxq2d6Ym1YzT96E3MRpShysZN9TPy68vmFDhkNEja8XpL",
  "key16": "TQ3yvJamXVeYPdiaBbPLKDYw8LKnfYmRdcEqghdz5nwXy1aeUZjY3JbyuvX6rtPCegU1bpXCmKuAFaWErGbkPz4",
  "key17": "4NY3w6tZF2XfVkaPVLCyqN2BxguxeggBGzwRaowUjTjMVSYTW7he4weVtoBLUK7nX6o1oWUDzuzcaSuh8V7h3deV",
  "key18": "39sWeUMhvgCLRrukJBjnErqe6snHec9mbgQPWndMrDNHTN3ZYZ2pdacX3xTtXtixCTbtFaWugs6dAznWKb1uptLU",
  "key19": "2qbexZZPCfuu5sNZcFb1mxL7p8TcbEwcnvUNc3Ajbz5iUv4ZThWdh2wi5tGerduxqPJfUvoRgvzKgF7EYgPVSDwD",
  "key20": "5NjZ4aAT93a8VQnGvMoWPAe9nimEgr4dGrRRrarwJvFNvJ7nsmV1AWr6FiGtyNkKea5Kvmq9Qxvh27XW851f88gh",
  "key21": "b5vcWXseC6eCdbZfJQHnecrtDV61perYjeYewDsWjGjDaWEnGBLEXcnkm1bdqVTZqHtxtMKvKH5jM4A6ud8AfGe",
  "key22": "gsjfo88vfyFiUEgeRc6ddwN7GQgY3sgLaAqHiCGJovD7eXsDpfHSLhsvPdCVih8pEogEgnXuNFpt5f5UhM58euy",
  "key23": "VFBPPz313e73jvFYEQh6YotknM39M6HSpRWNUDoHYwfA8x1bnqFyKtHCoY4VMnzR5B59frBppSXTYxUyMytRLBc",
  "key24": "2uPbmR2Lo6vPdXTCzfk2ppEZCJhSQ8UeQBVJqtqrDFrkY3uzTVFgqg1zkCRQ9SY2uTgAizBLTebxHm3Vp3U3ZL97",
  "key25": "4safvvcP265RoYUL9w8TYUfUHbA1qpvdxiGjA2WmgBFWtMjp5fKz2Cjx7aU3PxoNSh76a7pziaErZapTikyPJTgQ",
  "key26": "5ceX447LP5gu5fLLzQqR6zArguCw4kzU9KEQhMSyd7DCiL8C8N2YaHMGg5zDSWH8W38hcTSjhEob2WZgKUyrRrKQ",
  "key27": "5HAc3gkxt2HJZstid4xTrwqbj4KbfhUeRVRqeGHGhM3yWrzcJKZm3EMJymiyRAfJY8Bc6YffBX9koQh8ooseq5kL",
  "key28": "61c67tGKTNg3pHkUgp3sqSi9eum79mDxGL9thJG6AL76YULftuuvaNMu7PAmDA7PLx7Mwz6CG9WGvjuX9xGHVFou",
  "key29": "5rBC433gPg6xUMQi2wPEwrMfL1Bu1KQUNm6M7fQhPD4v53ywmfuDZcWu7GG5RnF4w3gktvoTi4rDSzushGqGDsSz",
  "key30": "5j2S3Xfqvm3LvnLSrKA9CjLY19yWLPLzC3EufYmfSASRJtgh2AVrRvAE3hhDeGCBDwJ85kmCMSRhUFjBqkzXjwmu",
  "key31": "4Z523T7ci7N6ASLddA6r5WwgAR5joZmxNTLbjwjdoWQncUMCnovvdi55ZJ3RbYW6SkyNnqt2BtZ5WQQfNWxakB9K",
  "key32": "5P7PS6oyAVHsKcNhLhwkcieM3En3PFChkfoZkNEgaMbxsBMdBHuDcnEB6ArysVqyh8a7a1h5JhCtkUdWQnmnQVRA",
  "key33": "3DcrmT5sxC9Sdi4CJKqaKkq8F9CbwSVDvdmTFTgDh2Fb5SZLVzbZXK1B1axvB2zRaFsNbHbTv5VqMeuwTSLUyd6G",
  "key34": "a7FHYVoHDio3yX6FXab2CPxXFBJSjNZVDy9AMDmsMiNNHLGQnF4v1JXr3KCkSw297zgmtTBccLjTdUoNzbyL12L",
  "key35": "5zPdxEyozrmYYxpJ2Dq4rBeoDrWB4wm3dCzn7nJJviNog6aS9nC9QkFR94pgDhEJipKPDooqmpPLGBcKpG7z1ftG",
  "key36": "4DnHQVRmQhDrb9HTjzJc4MEjbfqnCjyoc8butpC4X7VpFuFprenw4d1YkkHc7TGv3Qn9jvghE83E2TnsJ6PLA3kW"
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
