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
    "3ZRGUaX6RYHmF1jy5ShBz71EYSuRnc8zQeXSyKGn2P9KLZVTu8sipAimiTeXC5XHWEojDHnwbCJ7dBBR2KbTLcmz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yoxAnuPfk896R4Pr2jtfC1sNu2FH13kfBTTmXVfQNqrW3ZhLVfUBKH2ajyWtnBQY2LjZQpTHKE8N7GkM4cdxJwL",
  "key1": "ESf2i2b9L45Fj6tNo2nXxbGU6t44GtinsHmKZmun2iz5kksEpi5x9kX5dMihoDucimTkErFMMsjvDN9SdwfFZ8n",
  "key2": "2K5LD5hGVn9FNHiucXLhm9LbguSZdA331FmSGav9bAYekFH83qPJRnDwb92ZLHxYSoTTeDyLAe2V3oW4nwBQuWzi",
  "key3": "2Yq3NF35zdN95aNnCZ1gcBDEqNDLyTb6u4y1Ddpg4FBxZ9YRA2mcg3ikdjtkHnfLs5XXvGGjFs3UB7M2G6FBSwbB",
  "key4": "3ygP16rAdH8ndCVahtTHvPKCpremoWuMqHHC58CLKQNxFwbctrVGamMbMdqxvV69zU4Eoq4tUVgaTDYKHurc7L7v",
  "key5": "2ANjsDGp3SeMDTbdmBNXutGS9VDdTaujEifgKNpb3JgsgvEd9YZ8wbjaY3RyBFwyS3cRVVMDVqnoD4Z5pSb81UnN",
  "key6": "5X2HyKfE6PTz6psKETW6GfVwi5Er465LW6avpgKrFbhEQm5bSoBAkjLNoSKmikrxafmzRj9sWWdSgcXcqKy5JbRa",
  "key7": "1gMSw22HkeZnQSSKYSNMZ2XBJyEwNrubiCeaspjLiXahx3WCU6t5MqBQFD3V13Lg44gXZ64C7VUw51rBknDBuHW",
  "key8": "3NGuSTWFCaNuCpfSadbD5rv2RpNDhdUZUHn6awtr6MDz2UcZokhX1bnckZ9zi6udYeQVRFZ375x6syTgMaBoPDxC",
  "key9": "5TA2coiWPZCQ4ZW4Fmk4FquYqwXHER17x3FoLTZJdWxtoMdr322K1c9DT9ZxAkgJfhnHj6U7v2NZQypA1igsAbVE",
  "key10": "5D2fb7mp8pKo9KLJ83GB562u8uNEVcuXWMyo4cC6mo6HU4Yn9zutwe8Zpu6QaNGpX197fKSQZ6WGsnb6hNxukykb",
  "key11": "3nRyD6wuzWSp7nbYfDLAStwtRDta5uhdUWWh1VD6fUDHR41hx2JaEJoQbqdjkmEZSSpg5r3FzqTASWbkvkY1KFKv",
  "key12": "58hu5EPFGKPqxNoK6sayQm4hF8MwBQgtapEj8WYcEUAV9gMnGwAbtuvG8neeWhVn2Kg8Jn1hUs4rgWzxjxtehKmw",
  "key13": "4VNMX1n476kKyTwrEufdM9HtcFrnD7iQrFCsG1AYKRSMzECFnYARcbKyygTsSeZySG75adX3aXg79tNkFtTAXYbs",
  "key14": "4hkxM22gAqt8TdubMLcwL9EnFm7f7Z22uXvMif7bpcSaRaFMqHwGnR4mMFCzvCzk45tXXmJN5ztjDF14PEwURCto",
  "key15": "4sqY1VnTc4HWfnK3w6imds4g8seykXPy8n5awuEridfxS3NkuSty5d5S5wb6Cz9uBAFaFVJoCW5dxZmyjhSB44Ej",
  "key16": "8BWaVuK1NAajKdeiRaZiPqFNNAN8fvdrsPmBsaVra7q2mNUeJHKnVB3aohSB3WQopCT8aRKrSd8B9zt2KRaBWYv",
  "key17": "2PXsBbDibqLRkWadFtrGXEBhfpKWFsbKKk389EANqDK8TduFMsP1eJ28dGVc5qRM2Nt9YnWWueRqp3AYqCN9MvR2",
  "key18": "4dMXCDqhrEopnscbEXrhmtXD7SsTZkEySqLkdL5fB73o675zgK8BHCtQSSVCgDXpnn9hRXp1N1UjDJsbG9LNYuz2",
  "key19": "3mAwZb37pnSyo71aCxWsNwgAf8HHyBdjWybGMY91YYGDiMA6bKveCG2RmSqPrgRJxWpqok8QNU4Md3AkSs12wSKW",
  "key20": "5HmUrVgLNWJPrbEiApcKmx3WioMwa6jKH7Jye8tUZfDsFPMxBGUisKGJr6yddrZ9Xt7o4QdXDNCQm3e27euaxKoL",
  "key21": "SZiUfGLdQhnCdXJHhcA4PAiswSu8rqCNuFmrFPRj9kTT8jZWgbTeYNY8HnGPVwRfGUmX2YoztDJQABAUFCUtyxL",
  "key22": "2UZUpnWzoFwqmTH2yEsYDa1uLE42WFdRqiAvARtKHkQD3zAviLDTcmiSUGSeP7VmUXDf1jVFNnuXsxvyRkxCxmtX",
  "key23": "2XdUBJPNZTzbX1ae2dkVH7UCBxDqwidCj21Z5PALGU3pBhDQi4X2pDMmjN8C3Ef3Fgr328rGnixPebr9zs4wRX9J",
  "key24": "BrKMRwcGjfabVWHiUexNB6xGBWRP3GBSP1UFz1ZF9BUZeBndB2zJGrjCV5Z13aznusHXNw9ex6MpcbWSSN1D8SB",
  "key25": "RcXKnXoVYmdHNxKSK4wLAbkZs1PeQy2aQ8LxFZK9JQFH8Fmx9jALa3P2CVkP25MPTaXBurLXjx2bJqPNqeCb4NY",
  "key26": "5S2G6G9oEnK2KHrWZ9rY4dUbYDbz1MdP9fJbqAwYZwBtGsGPYZojHZqpj25XpQEo1iW6V5p7KThyWoVsEUzAr84e",
  "key27": "4Xhmf6nebe2nJhwBNMNmgJznGf9S46EfBGhzyZ4JkCwXhsCK5KYv7sQfSNFAdhaspZs6RVa9rAarmUpg4MVKUS9m",
  "key28": "55ge7S3KZoKFvrfRd1VTw4wC3kDzfUZmcZ1u2MgFMytSNvQNQNGi1A3zqAj3sTiff8tm7RzVLMNxeKRi2y8muGqJ",
  "key29": "3vaET1zVvvptYMd8QtEzajGA1fra2Y9F5xnDDSNeMeACPaH584FfdQKonuUq1i949JiyspHgEUKF3d5X8sHSbFxn",
  "key30": "3j29qMkAmyQsg1fjA5VyVSDGrYenpLqTJVTtPM91LWoUvfA66hrPa6Ljvb95Ahoy1kxk7CnnHEvAWWn44ZedYhiw",
  "key31": "24ZEkCmGAokrr4t3bh75anrHjAHtBm4ikG3hUQxVuFsRXhjkEqsufPXzSYB6DjpqMoLg7ZGwcUrGn9EDbKgZbjmv",
  "key32": "3n7vxXQALVUbWNAyYKLxKAsWwfqw8XVrSuaxyKts4HYmFxpTuas3JooneUVzsEB6XLoH9vVZix96kVVTTWGgJ9wt",
  "key33": "4F8Vh2W5ieB8XscusNiC2k2uhVSwdVHRB4gRXLPjPKLtKeBh2YPqvJNMLqZRuY6nYjopUFquPJRuxKjR2XihFT1y",
  "key34": "fu6nh42fEttPoFzv1FQxw8DGasXWj2CVnC9rgJis7qw5cMzLrLa9LAPsz6Uo1eugwp6WeH8tCoaw7WNSYpVgYEi",
  "key35": "45uMRXJu9kuLmymajqo4LNLHiR4AexzNTVHn7LwvC8dqzFdngPDin9AP8KHEZGLgqxyzyb4wwWWt9mmPQNqbTfS5",
  "key36": "4hTpQnnVibQaLyHz3ZydB3Y1J895QtZV9KA1G6jtNXb2cwk1eUcisnuErdwEfTzurqgqCRrcpt7mNeqUT4EWaGBQ",
  "key37": "ytaL7vQ8JrBP2mbBhqmift8WiULib1d9K5TbJ5uhy4XFmvDfwaWyEiMiN9T8qz3vfJUG2eg2fAwwSiz2V9dmSee"
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
