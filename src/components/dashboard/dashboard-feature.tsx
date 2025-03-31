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
    "4PDWoeRP7y2gtaeDi4aTCfsjuGE5Q5jXcXJavao1FPJ4b53dC1X5GGTTBnahojJLZwcrxyYKbcrzZrm1dfCXS1jL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3uxdvDt87RR4VH15xEBDuVXLf1MXDgXQbzSq1jk1G228nFeY4YWqPN69qZ9jVc3yZ54uhQJ5mawV3AJrqefJ2G",
  "key1": "2VfBtopY7fLqkmCrU5sgDdESRsyK4xia91QeZA4D2drDfG6YHHMCbbQgYxVtJVg99zyDNCb3gVpBUMC2B5wFnEYU",
  "key2": "d7TuhHab9FoJEH4znzDrcGDSjz4e5eAzYH1dyr7vsDxV6wEFC9FabHiyLB83MN2hGSyc4iMcqMsecMVLGHaNbLu",
  "key3": "8KDihWxiavgJCFfh5HJZCfaVJWEonQbdJ8Udy3dCcPKRhfU5r4mf6tyxXaxwfhA61vN1wg7BBZpPUbn9SjSAE2K",
  "key4": "4y5sAaZkgT6NQ9Dnk3NdeKMXW1BsSCAyoX9tJWxai36fqYFjrq2BvWFk1dUuCtXN3gvwZL3fMfwBxBtA3derybCz",
  "key5": "3HxfyKXxLzp3AuNVsyxNbVhFj7PoMeNrP4JZDmMxrXyiqZDt9r7ycLehJ4d4HojFQJYL8qiWd1vLNFXCUVBiZcBM",
  "key6": "FeNbBzhyfrLVPaS7cxiRrJ4XzNomwc5kVHC1oTFQTkgSUV9KHGKygw3CueTrzQEieea1m43Hv3QZKwukGCf5zDR",
  "key7": "4B3C3MYyZuSg9md9yacyEH3F4WfH6SGe4unk6fUZdgWxc2eKP8WcGUgQemMVM6fNxodBrnUV71Yz1gEed1S2cfX2",
  "key8": "NFbKqkbTEB1pnhKbdf7fVRrFffLy6VADEQYSCv9Lo4yBLpEtpKFKKMjCKfStc1wL1WHrRgJxHmaLV3sxRMvdWtM",
  "key9": "3Nh2SXEaDUnRwkyMWdXDYEgqn6LSPXEWoR6eEPUGNp2BRXnacf4rqme6wyF9YKGRaNnzb7xgvKQ1dPFXERM9oRv8",
  "key10": "5cZLFTYXWXciSj5hTwnukzSih43KW4CeKQovP8LPSx5twH9NDXT6EMkJMvK5uTY9fPT4L9j67bAx6mQsGf7tpRVh",
  "key11": "34rB8SsfmJD2oY775HTYdUn3GBrRcazPKSmqHxLNB319fiNY8qVE3fF79vvAwN8CgjCbLqvpsmCVH4jNoyNZaJQc",
  "key12": "4aDBMVR4utBqr9kzFguxmGMLAHTvtANmgRS2jBJQBDC1ScjrPayQGs1Fn3WW2NkPY6vDB526LCu7uiE4EJtxofNZ",
  "key13": "snYXeUkXRWLNSriS7gM6jPZQszyzp7R7y4X7YYjgabKZ3E25cZNcmzTEPX9LiD8rsUuY4ckbm1j9Znu9SbYn3ax",
  "key14": "3Wbj3DQLeB7yL42sAt969tSDinGoUWpin2LMTv4oAseyTMD2ySfiAy1KPDrJwwFSfjpB3yYTepFFFZeb8K6JNyDU",
  "key15": "5iRjFuu4cEnpYK5XKDx2WtbxivJPWGkfigoTmAt6bkPWftL8Rzc2Xt5rsfJhZoZg8Wi3Nsm9icBA46UaCW9svHM9",
  "key16": "5vGb5RDWk3BoXbYekMTTzrggVLo58DLBVFTsFfGn32GdcQEdXpWwop3hDusk3vtgk6cKNMF7c1VPLo9gFuNSepbo",
  "key17": "6BJk8Zr3WXA6odvu3tTzPbBviyew35XBbGmFGMqvj7EHt11ZQxn52atvJ7AinsQbRkZQf4UjZJRhREzNhGyqG6K",
  "key18": "2Q9B73obDqbdvsArVvano4dsy5wcpdsojKwp3jxboHAPPZadQXUQ4TEVQvUQ9Ni2bg3x9YSos8FAUfg84VkvCYKv",
  "key19": "DZoT5f5evJHTzjEcaWTjAxCwwvwveG4o2N2KAt8YMwx7QyucKpWQ98jvTsbkbodfgREMqmV4oviuijzX1uX4KMK",
  "key20": "4LPawvsVNmLCG4nB312r1eEqVwc6kZ46v3SwSVCD8vTcquzys2RfMQDJ2dnKVRKNT6obVfCyrXUFhUBuzNvJpEzr",
  "key21": "3PyUNYQY3rHnSTqe8wsHpuyGUd93yDNsshCtZuGE7nHJBgZ65D6FGhzdb4eqMCUKiQhQp9qmnEz9KSytwv8ykEjH",
  "key22": "3FsTeoDBEZmQUXYwiQhzUVkESgRfjrEYRMmfUJQQhWnNeXAa2YjoC38iDNU9JqdqwNxLbR9zmniXcxZkiFUpZbwb",
  "key23": "4brHfUvsJHzgvsA2kQp9m4Jez9V2eqVYNesdkWAg7wbRguMQP5k27btC9oZoUZ9omDXQ5ThSGGJqRnKGQJtCcAx5",
  "key24": "3kp6KxSHiR3LYJfBhGLr9ue4cpGhiYNZda2FNiNSSVz8wfTxhQCxMdPU7D99ZoJZrRuTrtriuSBTd5oQniGkPFP8",
  "key25": "2ztUCNRp6zEUF7UaxYCXiea3URztkjCavn88PuMCsjrMfoUNsEem7dTwDm6PswtfsBm7BNBDXU6UiV2C4cmitBZg",
  "key26": "5NQ5Lpp4jjKXXouH2dYD8REzT3FRkP8skwQurNpFJjurtv39PN56vzAdRThyNg5YQUmkKn7nzQXE8iUfy9G7YNMr",
  "key27": "21PSg14piUsXBqLmpwfW9fWxnibsrcZUK9X4oUtiN4JvQ55Rq6PULTgj8rMciWhPWjhXx2eMVsuaQTmkSAGRvntJ",
  "key28": "5iawFqv5dXAVkJLAFcADnJsxpXkD28JpYZb7MP4UPBfBx5Hg3qQTBYhYaFDHV4v1RfXzZtVdRk2ughi4fGtDjYd5",
  "key29": "GCvrW9N5NBP6WxmECgRYF1ZiDRnhUDZveaNXn5suzAkjXvth1bvPrLR6kaamPVmFJApSLmHxYHu57TMhQh4xer2",
  "key30": "3NjidSV3mGiduVpoh56ScijLRGJMLh3WYbPtfXFwbh9viJwDjKDTA2szFsuq5by7BnCss5s34LK2KTQmu98zWKBR",
  "key31": "3nqv7EQf18cpyKStmXstGcoe7i1mrHbiaVCbmsd5NR5tcEd6oLxdcvHfez17kz8ejhDWUcFaGsP7TL7a3kKiZirn",
  "key32": "4kVwhUKNAyvETnQQh575H3SN7mnh1Tnd2Y4yfYWg1vP7Dvyztnv7qDqx3gMLNJ5VB4vtfwgNVapnNHF9PUNAWd1v",
  "key33": "FWNwy9sqqUXnkoERBXMQrBkGtWkctrmxwpgCtw7Vf2XiAgLkWBNhzR9UMQVVVEUCtCbXGvLJ2KTEdiDuFjWyBjv",
  "key34": "mY9Cb1WAd3VhFgXKrSHU5qCezo8zvSq1GZ3P3qUFfER3aiEgbyPGmFQfD9RpB6qpMdewb7sL758c1k5Fkmt7b3f",
  "key35": "3g4AXy9Mu9hzXjaTgAo8zBUqhxkpUj64ytrDwwZC3ahwtNY94vYXgTPrwfqsPp69nUvzLRjH6zeqrgsVMkZTQgHh",
  "key36": "5isLSWVw8b5tqdwPHcaXoQ6oyM5uX4WTMtkJoT27k4zFLkjXdoFJNLY4qwK3F51J2BPdd9wosu341aJBWhFXV5fc",
  "key37": "2v8Q5apQAUVAGUUBxLQ9Ecyw3HdKohoYXftDcmcdfpQ2aAbF3og67e8RKjyW9GRJ3yuDewXB3hTxjk6P9kbsj2DD",
  "key38": "3mYCaoJZxKUu7RZaT1GhmeUfg2nrdpCHB3wnHeBuwLwXtctxFV3n2HNMwMqGWQN7nzWZCbmUVs3m3KLM3XMgodVr",
  "key39": "4YcrkyQcM6ojsnAcB4Gpz4CXXew48qNRLNiwTbdsTPG2XHkFkpbZwnxnCCZjSeEs9WYKL2J6snbwSb64tRnVeh5v",
  "key40": "4tMXLaNdMxQ7YSUBX3KTjMgSqTwajYPZc5xCQpTP9XHs66qjLkmrjvpyEfrU81hBjhvV6KkAir6DjS3hXWFhRPDK"
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
