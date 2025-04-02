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
    "SPDRew2haLkkqQYYJWe1L8KbtU6KapbsqoWbJCxf8uw8V66FvehRxzdZYtZK8xR8vauZoKQtC5empxjGHLLZWS5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u1anDcjoCkC6piYg41v4kXa7WQPkpkPw7HzkBNWWuFHsszrxGakXXtL7dowSvgNFMqjo6dBqiWPSnkhkBQP8N4K",
  "key1": "2L2fadEr6Akx1zeGoXLXZcjR31rPYAYxtVMm1QDR8TD1DCrvEGJnGzW63sDDypBaBzyBAL9itb5pRfLNVJFpofdM",
  "key2": "4uwryQC2QbpYe2CwnHtkXeqM674KF6yx5QrPmV54PS5aJmXeR4V5Y5q131zss1WBnBbNUK8DBWTEVz7K1tqqyYy4",
  "key3": "4yCnfNx3hfMqCwMhRiJ8YCJuKtgDWY5v7EhE7RTjqtYWhLYr11z5vuLLCRKZDKrqHhj6ngJfFeRYs2oXRBYe36BL",
  "key4": "xGRbRhRngw9cDNCUawR8MHBy8QfuA21nqevFxLgidfngTruLxeU8ndiCWYRUPBQTZLhdJnQJCjW9DcGVFLxXrHX",
  "key5": "2V9o47nqcHa88pKwCcFE981f73QDjjZ3Nqcgs1EFStYEwhMbtvCQMe2cG25BUVdgHfmaiv91hswWdvXuNs6dU3he",
  "key6": "5YCaMgm2crrpmJZ973tLvhMuPwvcezkkKEdUCakSjXMkNo8fE3vyGBQA3LWwBHdQnT25CgWs1YHq8Dtgw7mKcQqV",
  "key7": "Kvk3UCDJhRbMQLMtJiLz1H3wjjHcxcxJqsJ9suLvfLGQz8vPAbEYbEY5pjhpFPb9fvq7VUhioS4LPpPMgfD5aZp",
  "key8": "4DBm2hG41eLLTVunUkVruwHZkn5MbFKJTF3Q1njj4CqLWvH3w5hB93RubCWtMoo85531FCc5y7b2EfbXacyc7AJw",
  "key9": "2P2abSXgyBj8A26EZzwouScpm6Rg5v3uZVsk8PffdesmEjBZkpvCYpbwfxdfAwd1n828mT14frLnEv1PeLXZ1zqx",
  "key10": "2AWwgaWQKRzGVBgp3nJq6bXWSACWtPGAAi3QazSMJKbxgZANkqf28uS9UAb7KgCaz8ajaq4uf3LXaSkLUapkGfw9",
  "key11": "2xafjzrXrW86V2vqVSYxkfdwd2hxgcaRhKcc7Bia8VX1fWhQNdetNbqq487PMkFqtRtoSRXiE4zRHbv1p9sRRAmz",
  "key12": "2fmHAYYYoF2pzSakGahq1iiCtYUHAJDq5deUHhaLCDwzRFtosJ2CDfSWyCCuByBSJUWvaEM1AF2AjfiZftMNmqwj",
  "key13": "4P98hRGEmAvQnSVpCgoNnWP1kpp2qShMmdUs2HWXAsd6HYvPeD7HeXrcASqZuzPy4WTqeNHLR3Gx5zRTN7z9Pu3q",
  "key14": "3naVb1RNQYeuHPPuQFdgFHj1U2Ywy2Nv4qzn4vSCbSCRWNMpdQxDvTD1K3owVE6mwRfoskqUHZbYS4jA2ts9bKdB",
  "key15": "DwpifiSzZNFspXZKdtRq3HmRLPQpLKb3J1Kb9CNhc44WLARAwQ5B8sU9DgMFNzxkpoaGKCdaFXSsFzwSQWZrHNb",
  "key16": "BDyQvzNUwgzmXZ5WfNCQgVG2XukryWj5XiuFXPFxKVGhC1bwP35vvbE3j65BkMNFTUVpXZqqh1FwR7qt2B7TQy1",
  "key17": "5hVD9gg2zvU2xLKaBKV8x1p1KG5Fqe3N4snZhVmdnp9i9XFWfyvCFpBW5cb3P7Tx754jVP6hhLKYWYxTJ5oaXJx6",
  "key18": "2QjpbXkxdgLwq7S15iZy6UiLNvU5xZNebeYgLRJjDPEqu2ULeU2gPY8Bxi3mpNCrw1oXQQ8JiMqM7gEmTJzTdrQR",
  "key19": "2oEfTXPSWtAzosNW9PafovXKKuGx9VeeTZAuWKqLocbH8TuYZJDV6U9Kzpd9nL7n3sJ4ipNqYdbLqCxSuHheSACG",
  "key20": "3Z2667MfAjf7WYVzcTSXMEtgPqXZYcu6jUtcnQXkAY6qLG3BVobiAEWGQFYPVA1PW66EBVFQ5VpH5Vcq7YC7uamG",
  "key21": "QhW2EV5gL3ZAcHstUfTdVXiMFCAJFegMYg1Y1qDWS4thaGKtCN15zCtKttH3wzmhMjTTCEfUqTCH6gQQhfwwCsD",
  "key22": "2Cvdjzdvwzf1dUFM2jf2GKw7HVXr9xwhpkFwQ2k7Ks8hu8ymQR8YUiBwV6NVSAFgsMcwjiCppaibjXZrzABEEsa7",
  "key23": "4Xr5FH9DGoK7iBJ977WdEwKdLMULwfUxvyq61TFj9e1M6rwQDgdYnMBpqEwrcfmR8J2ybHfSsFR2HsnTvqjXUfaP",
  "key24": "4jb1GyYArpg6c3G2sbUmndpzy8mFSAuqq88Hm7hmeQjhpJ71ywq8mKbwxMWV5pScUMj3rfwE3tSgkogmjNFj6bQA",
  "key25": "NqwLagWzZWzzsYYrLYjJ3drG3T27cNGWhdLwKMixS8HpFJfF3iUb2kmoVMoGVJdguWEv6Ff3uFE9F3gCSYXDvoq",
  "key26": "3rkUJNbfUeDThzxUVy3YS5R5e1Bs2e2suzBz52cZLrsKPvxKgjUrAuq1eFKgnzk7KxsQAzBMeJdmdUNFJsukqiQh",
  "key27": "4by2Q6UxDAtVqzTTidsNswNgB1hv27BkRSNVDj1BBFQaNZ6rLtwy5RW1DpGk9HE8zR9Wept4jfV19Kxj2xDZkdWW",
  "key28": "4vA1YTJBnEWWqRKcRD8Yq9yJtVLVDxMzpm8aqEeX77qS88wEoymFKAVwCWrL3DEJjEsB3F3buUWrqyXbjdjzYRjt",
  "key29": "631u8xg3GxareHEdgqqB57bLby4CN2tBbaVDE1JXcy7Hv3uEZysC4GBeH7S4P8rH7zHofYv7RhP4pTfHr8FBhcpV",
  "key30": "4JvqajxJdNvHHE5tJu3XkDtG9axCkZqJF8XdmPpZV5uoPLnQsoE4cZWmz7Gn9P7qNQTYPXdDvvex321mV1BbFJKr",
  "key31": "3aSDrvtmM1otKpXR3n4EJMSGMZGik8HbCxLAHjHtDw2dj251X2F68zYVH6UVgXCob3Cyzhug48z3WCEqqvCniucF",
  "key32": "bv1SZ3PWGNcpvgyymeKAxTk7sWFgSTUrMogz9DVUq7U1a1Nd4tS4yNzSPvmuZZ5bsjdRqCFfp5tEDAx4vTGcd7r",
  "key33": "4gGZrwNN698DGsFekoBD5P5CvfZfKfHWPzHLciHUwAESHAYsYVP1iGRZnVoRcAeB5PogrKUJEkdLmQNJURKxxNK3",
  "key34": "55ov1hjto314Hem1UhvYh2Ku66bD9vkhhEtQdrQvpU3SF6aAfsR5xAw4kpxExCAC2GoM2S4TPWAuccaZcUfRhUff",
  "key35": "2HiTVaLsx7heLuMGaL9sMiKByJVuMyL38sugxinqfsrmeTKyFjNByDJHf2izdUqtiX2GWENq192iWJpxAkgXLeEU",
  "key36": "25EjKAyJPeg6o4BrMqGpq9g62tqJfXqjrJehyVRZQ97k682tVdqpw6XWRnVjjWAXQpo1gWddCRK9CoWCx1NEAkw6",
  "key37": "5E8iJw2jXpJzjvVrG4QELzrS9knKg4ebZFYRzYwRcSzyDUnP8VspwYqLAs7R5cb8RPoRzigrBYdEFtrZonwQCVnx",
  "key38": "56cGESZLQm6mohqideuTEcBQD7GVRxty3mxkJjq8BWsRaG3soSRiQjGFJPpUwKfWfahbh9UT2i3dHt34yUdATEai",
  "key39": "3xu5ho8QDQrmWf4pFXXCBiuAPWMT8dJmECt8BQmjR1t4y5fTbrDh9UFE8ii19chNgFGNC7LLizeeu5puy3zTswci",
  "key40": "4GS3H7Z55pabdqzrNinC7f1wKVuEvmnieytHkWNgPfsuWGMCVUSJ4zSKqFDW3Lzj5YRdSRVVYhbr81qPHUpouD8F",
  "key41": "49kdA8nZCge5b56XiPE3XDJi7cbtFzdF8s4SPtLY9neQm4nuKc2snNUcmbFjAb9gMEpRKxbakjfDEMZHkQ2Mcgv4",
  "key42": "4xhyDf2SorrgdL2RhR8CwqZMrkD48L59ADMx8pdxkFizP8qfBY6sZZdcWqgkzpjbNSDEAuMiGSpiZVHpxm85NiV6",
  "key43": "3Nt2ZnjwNmPqQ5vev1cZERWzB9b3Lg3hqDjoqxy2kiXjcQERZMzfuaPCQVENDqtXqeeWqryMTn45xDwRY4CzHpRx",
  "key44": "3NTKj57SvqpzCdGTevb15eNAjjBmuLiYb1sqDWYra6y2wyAKkRHsB9sm1c5R9GVPtqa7QctbBSLGyv5BuHMPL77P",
  "key45": "4pWqr5WiRfdQDHLRrE1zbWwxtGAN18mezPMywrZ2aCs32DGBqi8yzVVRbU5pgcyojCsuNpuzEEhDMY5WR29a2DFC",
  "key46": "4pJiXknPeC7c4oojtbmv8xj6yfzQp2FaqTacfUfma22PBgwztJKaq2TxFdUUSPWABGH9w1WJVqeGxgj5hAPteebx",
  "key47": "3Pnz4Damvt5ot7Nkh8ok4HM1zAiTaiP36MK9wGmkHK7Hwq51Hd6PWe3sVm8sRK9s6fKhMKkfaJVqtbP2e2VtUKKD",
  "key48": "4a9fd59wcdLYC2SEqJweJ8JGCLVqaQaLeDbZDdYMjVhibSoEzDBsZ35vQ9TBvww5Ntkg9L6EFABoygBYVi8BZVhu"
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
