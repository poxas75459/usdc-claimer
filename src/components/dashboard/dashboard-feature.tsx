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
    "3A4XDCWMgPrvxnehb6mBTaHqDY7dSa9yZXLCcrNU9bozE6UNh72XRVnJetFwd2Pu6q45d3W64ekrNwyWyc8fAQAT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vDvR9JxaFQXwxaYxr1Hw89j8Cnn4SPX6yuj3MnPp3hgG3xnaQsQ7aWhYXKYMpRQgig2ENdH9Qne9f9aytqjvsXc",
  "key1": "4eXNcAf9DG7Uf8NHJogc6EtkxoKnzda6HkF1uLSUAC85kp3Lxmyvqy3utparV7MEA67h5sbJeXzVjoRxobz4AZGQ",
  "key2": "2zZ4fBtPNRi7w3nxhiTFgAHwXj1CZZCN2Q7ebVBg5H3JG2GzPPAaGgxQZgkkpMb4HMU7metDacdiPF7oKuKPJpvx",
  "key3": "3PiDizS6cQdiZg4HVHKi7wYcYoDzpGKVWZ3xrd5t7PThNnwY6i6F4ZMLfUMybkmL6JUE1iPhwRVJ41mEpZNRS4yu",
  "key4": "3Q9WeFsfuyxrePE5jMeNr6bhHvSFBEf8Y8ZuEf8J9vysrbVBrVqUdDF7KPTpZWTb1W7FAh7H3HuUp79beMjjzZ9X",
  "key5": "2msFbkm2b1Nwhwe1Hp8vVCwGnwCcGUAnUY7gqALHcVYmkpQF1Vy2FtfAqdtGy8VUUgJuTf1VHYz3njpz853FByis",
  "key6": "4bkxiwbohEbgEDzYkBJWNkTr6g4FGDBrtgESoyU18r37BF75ZBoeUswgDy8rAHRVPpUZARUmY5sJENEY3EWmscNL",
  "key7": "2a1RNFTcUtye4MYL4HQKmAJn43Z8bU7RjHv9892FYaSWw57VsRMyTBCcAG3vHZo5pePW3er6RBGz4qkZZvpn5eNL",
  "key8": "beA7nngj8FYiyNmGhBzWfs2VQLtGc2bwawbzwNGa9zXJiymdVAQhAUfc9tLXPjXcXspnuLkzMzNqP1n3SFaeftg",
  "key9": "28rPidZNVUKhRH5dyQyyr8CwZkqapSkLgs3u2eT5dMgwrUiM9F1dy9zoPUumotuLVGsxU23zUu3FkGH6Ec85tmEF",
  "key10": "3PDvjPycxKvRFLRyxvSMYCXZaSNsAmngXvmWrS7D9XuyB1CHMasMYfdqJRHiWe8hbvdwscP9SuepQe2bhxpAm24T",
  "key11": "3n85XaprXGY6pQTUnsSc9uH2FeiY942vuHcRrnQPPXvTbfi7CJHHADUFH1ZQrbpP5uKcFr1xCCW9U9Lg3fnui5RP",
  "key12": "nvST9yTM8S4atLpFhW5oaqzVSzsVMp1FYcdRamvppD4Gwd2zBQZerYvubhSP4vjNMvNTMjZKradqfAjS5prDv3j",
  "key13": "56yt7S7dgJnvNP8sVxX5NsbHWkebQTYxaFXGQk4mn2bdw8uVTYH3VcK7ckQCsUjEFb58zTAGjY7H41G2pS5TrBD7",
  "key14": "3HyVoUByzmdNAf4LRseFoPBSoWebtGkk6MrQXo7Yob6ywscPwkoQkVdHEBUj3z7ZYxyKpVp9JPMg6gdabuyqbdXC",
  "key15": "4gUzABurCBrT1GAMDsZ5FVby1ZzGngCSE1ppQtW1NjVTK2LSmCfckLxEUVodPb4W9Lk2X7efbBj8bbiiRHopCArm",
  "key16": "5uAYMYSn2tprmGtLpEJqWfxJj31sHrmiqfdRHuwkSXR9WGaNBHntMRn7THeE5qkX75vHWexmmrjq2Pqj4eoGGtFV",
  "key17": "zbkamgsg6kZQKgYubmX7JXcyJ3ujDQV5GtxPTcYQfj6zdiLNDLBCFKUCnz44F4X4yf6fe2w6bHeKWKFLbJiPNMj",
  "key18": "23Y7CmrXzmwjmUfHuZfVnGHZ7EgL2hf5FmnmLLunZoG3ZTLKV9jtgGkG75zs2eUbH5yMa1nJm4x6SYn2i1hdRuoa",
  "key19": "4mrah1ekesioNtojWDU2QXEqabybAPEhBG5fA2Nv9rZ9SdTuH6MXpy784ND1KenUhDqft6w8S25JE4vi4gQPBebo",
  "key20": "5eUZtSrKszYJ6WL8AMSfxaYUBPD3iFx6HqwCED5o4msvL9vmC2Z7s7EoGdeVuwV2nuxTkdUPUBMH4sgffShcehUc",
  "key21": "47YMNLJBMThFeY5RbSofE4z6AMVzB7GnLixHjzQERjoY7UmErb8ibsMDF6PrQYQdAfpYs9tLSe3dfyLLx7tr7Ux5",
  "key22": "3nvYuVWjSxgZAEnohfEYNGBkn78GVSaoJimSLd3FqroC3hYAy8MMsrxjQyufkjA71eynDvPd6AWZNhAaoeM5dBYy",
  "key23": "2ZzGmnsh6ZFuLCVwVmobFoYXA9WGZijgBTmWZcWZ5fQxm65Wosmai6ekykegKdgcApskECEwaZzpBFrayCqfs1Tv",
  "key24": "4g71jkcKLgFSSiCk3cckiXmY9V1TCzPbUhrJd2ffV5vVVtHfaFHBwmAjyHE369tP3FvPeCRssfxVSuNv7vN1RX2r",
  "key25": "4w7mwEPSZvRFmFh8GYfEBEtHN4f15s1mTnQLdJtPx2sywMMUzVhmgDbFobogibPNA5ghdEWFdiHopTRcvmjWSv1H",
  "key26": "cmfU3y4ZQ3wsVYd8Hxwinj2asYHD5BVcBqz9y94iNLYg9m7vbkw8Av5JerL6mdf3wgGUYwAucHM4VStVGafBWFF",
  "key27": "3QWuirmcXwvXW4mVBpVsYvEZCJnfKmAWhSAcKr92s7ddqtPN5LbhDESmit7J3kqbBPQj2LjZUVQxGpURasN13Ts4",
  "key28": "3zgWbrXxy5mb9utPyav5thcpzEp134hqV9hA7tYAnDEuGKyQrkWR4YrwhNmFHkNqvDfeDnfDfGmHdspvrTEgZ3hx",
  "key29": "2sQZyysob7SQBcLg1i2tu1dGFhN6Mwvw6jiwqsqWQ5zTW8dwfu2VHonuPnfS6a1pDjTbMZZbGsFT9wnHnX5KVx6Y",
  "key30": "3epNiHNQu7Uyw8vSRBeBTAd7vRLbcp6XDq1BMLHJLZTt2SzuoE9prh3JQrEyCYm2NdbW1vd7nvh1PjtbfBKttdYr",
  "key31": "3otknKy5CD4JDJs1n8sswgpo4p1Ne261dS3duFfcGi5iF5KdcBFcvJCk9yEQjUtNCXgD2kmaV8FB8RunR3wkpsoS",
  "key32": "3QrSSuMcHbSCC4SWx2PGGdYJLJj5Zw2hWc5w3dzaxA8Ef3fuPivraEaJPJZhSFCJwsTk2wfAoL8qKtKfhJBD1YDq",
  "key33": "2f7py2tG7NYqGoZitmGCLEke1ZhYkqsRBfN8xsoS4HA4yrcXM5vzssuiRkFiRd2BqcisQZUgbztiAk89F52mMuqS"
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
