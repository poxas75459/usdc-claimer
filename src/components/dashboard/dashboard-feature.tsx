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
    "45PtjG6drdQAwW8pzcojzrxSiSAxY2oLgY7gWBnQVPJifvisP5w2hpq1VLJxzgFsLuJLT1AEZbW2iscRRamRVwXs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NFgzSrFP2zAzPEyD3U3x3tQja28KNTJXycB9bV8GUAtmcQ6MfUiHXc1F23E5fEqGySW2orfUrMkFraufRMeqjqm",
  "key1": "62WtD5u9NWvCNQaRiGrRheY7jAFujzk7wxHtajyQFor5Lpcw1xwT4jWy1qeNJa92KG4azLqbU56B4AoqjPhzP7Cf",
  "key2": "4pMjKtbZCn2oDJJ11ZW2sSiZbAgNtoobTu7hYMLmTaJJCaXpLgpjitZbFTkzfQ8Yagg91UWBjJwPd914RfD8weN3",
  "key3": "7c1PVeCXjaPdV6vkHDHUjXyov282Hewwst7VzsPM4eujPhv4rcy34M8N9TgiEYns9HcQDGcxL3hj1gT6H22cysr",
  "key4": "3pAQNenJNfe8PCsPG9xE7G5PwtrWPnWm22ghYBSRjnTT98mz2pNiNXqHQqnpZWZ4yon2bVYCMxw6QFdkDW7rEHXA",
  "key5": "5p3TbuMhoTfhK5kpzYxUjteVrHeRLmyuFKpA7PcMAp36Bx3D4HnZMizmjHHTPEVGxvtcd3DBcabZwMPb6iR9TuT",
  "key6": "AP8a6esLvP1FK73nSkyw3EQhusNgeY9H42bpNxTzcb4feKFfzL8KSJyRcPpZqL6edXzyxpJQC95HuJ5dujXoETv",
  "key7": "31na8cNshECYanMcQAKttR9ndjGGTLgAJhz2Asuzk8eKyB9FZX6Kor6znnGcskotP727rk2Po2ZMgu34z9JygSap",
  "key8": "4fL5HxBxpuVBHUA7UmAbc1diAhbm8EvfvvDgJoGfNfHG1imWiRWhATkUfXhFsZPT73yU3NcK3Ab6ACN47YcxXURo",
  "key9": "4AQtTbQaLALVYjuYbjGzGyFLRwKFRiDynwdKvTkchhCvxnNXeQzqZ29twX3d2nCwxHfDs86TVhy9WsUdSG6TSgpw",
  "key10": "4MHmZCUqN45zW5WYi5jEm34gFDdH5TL4un8CcDPZW6FqyFXN4fAEeUfUUh3JLevwi8ZmcAYnNok7t8jhrig425g2",
  "key11": "63hDLNg4M7CkvsbNUyeskZuj5KvqydDCQzbdGPytTYVdMsRVkjzM4iQpNtcnan3zYtYutJkAaCbc6H134bZaVrmh",
  "key12": "5AjFhHCG8E3GLHSRbT86Sv14o3274tb3p6BwZMASorQSoPF4aJJvYasEy2KwEn7W9fRMGxJbhZGQXp5XNSP86GnY",
  "key13": "5ubjJeEPWSBg7p1qSQjt6qmmSVBAp45P2vpGVgXr3cPru7Fkaj6MBdKDXJLxpaCxb7aNkZ3XNAgkjqB47HxuuDEo",
  "key14": "5N8AP8skXpyhxNTtceDDwXjRtZ1wwdwrj5PzaLzLNgvroxmuYnsevjwNYhTwUSqddkRD5FfgnhStPPPtw5FYgR2D",
  "key15": "3qYsnbaZN7PD8NDTJyt6X1gD5PBGavQqsUHBBZS6uDqiuz9QcuaY4S7VRdv2NJD7YhRhpwqM4MRWzN3AYEy67XZd",
  "key16": "4T6CAyHtkgxwCdeHeFnuXt4Qxuyq4bWFgRcFrVxmyugbtxZJQgo2pwzZVotytFbf3Y1EcSJ69cUWTTAnd7u5RdJy",
  "key17": "2ZJypUsjWUkRj5SggZJ269S8893UByamAaxY3HWaTCyLYukDP5mN6YdDSNehQjzmxvrrJ1HeVffor8eYpX1N3e9J",
  "key18": "4oraLp15S28QNL4LKyEMxQBGCSBNSC6yjaDqnb9JfayMWHM3rRFX8Q75zJwjpH3NsCULRXmcedoXggyBHjYNAdH4",
  "key19": "2FiAkRzT2ZKx9LYpaPQKEox3z98asFRgJRoeG3jR2vtNUHAWvoggvVWX767k5qSSnejDV59Addv1T1CiMv7XamdU",
  "key20": "5ptHTPU9aK1Q2fRNjyptmYVZsEKCrR9wXmjS76SjKR8WBaYtxU6FfSMtNFvpYf4UgQmqwMhBfrZneuxMWEF3qjvN",
  "key21": "3LTChk7Y19gzrojcXbh6nbJDMmSh1zkRT164rjvGjFuJf8WRM68BVaGzThKsbS1f7Ja4ZS1oXQgNqgjRJGaTXZwN",
  "key22": "2pVAnBzND2KfFhFxEZeomJb5oHq8UiUdGWgUuJ3CqmGcTPfsLzoNu6SReaFrebGZGQKDqNbTKjTX6CgJ2q2ySsMh",
  "key23": "2gWRgj9V6A3qTREzC3X4JNV7piYHJwE2cHnd14F8EfYyzjzjd68kVbcFQALLruDYP31GpUDvh2hdh8f5M9NcNZ5X",
  "key24": "CwhWzbZcy33cfdwqP82FiqAFgqXeH2CTdhYGHGoXPcySk95n2i4N5ABUQqzqTSqnG28rH4aFEYmBU75MU2ced7T",
  "key25": "Q2K1byaCwbutFJQENYqcnWY7n9pUpyAXsVjPyCn6UHmqxxPv14t5AcNSC6tQbmbKnNhs13zDeBKAQx5HGonhdWP",
  "key26": "5YUCJoU8myFXkWQ9osaC1eSx4B41b9GNVsj6vCk4Yid3yzJFZRoNaD6xLLVKBnw4wKDLg7wFFD9bD8RiF6XhB6a",
  "key27": "3oaoXeJeqiPje4tBFGAbrXYJsybDLojoi1RCfCoidYfi8nMxeWUyu9cY2LoFUUNA7XSwNARVUzBwfkASDXdub6wD",
  "key28": "4Rg5pMvJjrvvXxyzPRzVPjidx3ia8cK1qXnhLbja58i74hBBDryHRnaEZQ5aQeUrbbaQMXGi9JnNzoGsA7okXRSi",
  "key29": "4N5iVTWDGt5kEbFZkDDcpYdJJppatoi3VsNFvuATHkCNKsW8T5kNdrVWBKr3rTzcL8W3rR3qnjEq3KaN6P89tRr2",
  "key30": "3B57fmFddCiuJ78dhagDjPQFmR8q1pX1TYKwiWJC3wuiXuHm1ni8q99JAYMTDmP9UoD89Sx9B8m9LeUWtAsMZW3C",
  "key31": "22zS5SvhG3UEMKGtAH5uhTqfv2mtS91WNGtART6RkN92eUYFfijPE3XL4cLBmEGKnj955sBYCJzmTqhdgvdRf8EL",
  "key32": "2ErGuVjz9hoaoQEW9za6VN6ek47HuP3joDftNL6hg1GZifRDNi9PNaSDiMdXCBYsVvKyaZzEiugZ6nGrTxEw4TUb",
  "key33": "2dkMciX5EuMk2WVbSG6WgbYynASQx1ZsA1gZxwACtE4xufZpGFYcB2eUf49tTo8bWoY6VMsWZu8Z8HJX8weFQGsx"
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
