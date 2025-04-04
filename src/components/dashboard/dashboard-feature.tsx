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
    "2odSTz4NkoWTArWye5MDELGLBCxXFdsjHWaxdQmmwF1LPTEPXsgfX3LDtv8rupBd7zrTFpb3J1QKqYdPogkyqx9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pS6JKhtbLyTDJzZkqN6b39EZb9HJN6PJTjV5v9LQZHB76CCnXTSSuTGNrs7zydwFGcBQeaUzxrES9SeyVopVXa4",
  "key1": "3VJqqLCJWRtfHmp2JAo7feGJYX7bjUgExRRwS68T9QtTmSLAkNVqto34Pi6BGnttbcsTPpVTMPLyDE2eCNayfAAF",
  "key2": "4WnD6bsBkpDPicDZ5vqGMKN819HDpRoy7FHChCEB46pkqfJ2k3B1pSzqqamUBmCKc7LGb5z9kh4Duq3wuHYNyGAx",
  "key3": "2C94kUgeuni9witPJN1sZcUbd5e5bory1NvjXDGuS6oU43oJRxeScUY2FdggKmCKciWA2ddgwBk5draA1vfjjp7i",
  "key4": "39nrAdcgijSrK7QaPazft71rZiy7w2959UqW1bdnWMTh7uruUFUW8gBiDWfeUUPGigSLc3KXZZ4NxAxQoZmpaBS7",
  "key5": "3gJ4w8DBMvpm7atPYtFgqKVxvhPT6AcUncemShaCjEQkesKCZbnC9Qov4CfXEXcq8udmw17AT3SibRRmf6FHPyev",
  "key6": "5y3y597ohXmmV74ZE1ZJSRUxaz7WvpTns1hYWUkxCXr6N2TuJK97H4avsWN8BpGrN3xXGCqFvUyWLZ8BGUT8qs9k",
  "key7": "2idLodL3DGzW4APk2PREsJRm5SEeF9sDaGZv5SmnVEeb2NS3opmD5FER5UwAqzBxaGKVREWUiz5urB1oATrSuafL",
  "key8": "5z5Qah7gvtULKLRcTw9d9Kky5AKPV2fNsYeLqzZeUnh9bFjL6oXTDbdGDhsKJBVq4UjnYFkv53UEjvw3mD5BYZDh",
  "key9": "2SG1PDijyej8vKiKtonjuP9yrE9rQT5UgzQJmrF9JMXYXWdZkdE3hWpaaGH6BwhFAy5oxurSSdkKEAWBc7d9VDPc",
  "key10": "5sb3FfTvkyzAx6K1NPERs4bSAdXJhXpRNMswJnXZMgm2dBLkJeCHEkPRR1GbNC3sySawtEGUgBpcwFpi79PGhN3y",
  "key11": "AFrhcseRRujdXaQzuyovyLxJe218y5m2TfRUyijDaas5LrkmTQbS1xDBisFQUV6cwjKtkjZtpfNYB5QjLaE2wS8",
  "key12": "4CJKLoeEyStdBxrqU1mX5FB3dM3otr6ZVeDh9hsXEkcZnRcJnHquDLN39TqcwTxCsPZUjXqckcXiGNhHeBhbW6ra",
  "key13": "wXS4h4x73AJvP2S2AK4is1NqnRQU31XNTohomCxvbMR2sb7YEnL1zgNH6bCpFUD6ZtuhVxhWq11aAFNVa7LQHsN",
  "key14": "9ajg22PQMngHNfvWekRwvMhhoJgBKGrSLZcbg51EdM3J4vRVdwzcfd1sgVTM6GUBED3Mrgj5CZz8JJ6iRNwK5Uq",
  "key15": "rZqqdhJhLpmHtP7HVKm927f8GPWNC5hXbwjNyYkCPzJsCpUVJ28Q7mkZo1F1zkRoqDTeXHcdxgc32VWQEbNGD2w",
  "key16": "61QnSQMYxg4sUN2NdrogJtau4mF7rLpnWhm5tPsJh6Vqk9pnap9xshc2nE1GkRsxXpxmLw54o4VnoHuDGpMVrhhn",
  "key17": "2fpuUE3sFhiu4fKKYDcd7pjxX8qyg1ACprB17gWvUfZeyMGSMFSZ9SK5oArqyPvyVu5M2isEvwxRCn6u11qYQMDK",
  "key18": "5ui5iTuxSC3AfLSUK7r4NLkYewagKQLSCMZxq3dkxYULLmFxSqK3YMtdJt5GkTBJY4ChZ4AEfocqwZRgARRzkoKo",
  "key19": "3cDGj6JrrYhCibe3WesuUysdTaZuEnn5rPzjWuKvQD6aa8e25tq9mrMVUs6zp322XUYL6n5T5j9PDYR3EYPH1NoZ",
  "key20": "3bJ86Q8TzNfxPytvGGGptxzvTwg7c1Hjxuh4muKE5vd2jTpMSbXFVK6SsnoniqiZC7Xi6WBE7H4fwhs8tmCxThgt",
  "key21": "37fb8zNsu9Hpah4Rp354jSY58vgZ4vqB12BPeZQCmg6aNnH7TviAKD3KAnD4ZaSh56L9VrKgyKPz8AyQZXFjZAFU",
  "key22": "4efkBsiWbELA9QnUdMnReisHAthzA91pmkGt4QGxL6RRrgowVFEC8n6bt2v7tsK78XCMFRgj7weL9GaxkB5W3Qcw",
  "key23": "4hVEbdMgecAwMup89cKzaY2RAb1gkieimMzTgD4Apy9YtW2iFcDuHkbcZRfx9vHYhbRMsRHThwt9XyMMWTXZxAAd",
  "key24": "2kiuJBcFAmggFtKui6CPDmNXPzrFRerVMkKXbuGbqVPohXb3TAgQg17tDgs9ZvRFfR3e2rA8vct4ax9MypVmc5rP",
  "key25": "rgk726NXYjhzwFKVHaJkjYaoBXGH6ED43eJvGfzQ1WmEeAamzDnbDKkVKsPz4Fc8sRJ4FtTpsh4PwCDc8LYHCbW"
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
