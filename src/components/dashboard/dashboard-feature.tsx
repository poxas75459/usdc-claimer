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
    "3cSVD7akFMGW6cBudaphxT1QsZ1uMYmwLBLwMnbvorDmC4vSeLcHjR1LMjkXroNXu9rg3a8DdmeU1jtmquxwLVcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r9ENaNXxYwSZKuiiQ5H9FKXcjKeQYFJXcoGqbY2JqAQsJP3n55Hhsq2pmnSe22iBomigvHjY1eEA3XAEGJFBtVe",
  "key1": "4eNggwVFSHqAE7vqotY9EhyvY5dt9kUcbLrsi223YsCBcX79Tvuceer7U2EtZFeF2XHt8K8CjGEGzZUaXvdLia4t",
  "key2": "oW9K35G1B8EvPx9HcTSshtPDyrK6jhrCyC9N5omyaYwbSYCxbWDW2nfXuuPqMFDXAHaqYSiSx7Ag4Nc8R3GBkXU",
  "key3": "5HZuPW6TM2wfCtxk1icjzhZw84RDCC1buG7TwSn6dkWUkwjkRcdi1UKXBybDrEAN3oFWK1sX66TxZ5KvcJ1wGYpj",
  "key4": "24EQeNoSdk3J2YoXXmFuBLJGbmrK5DdrF6emnfPM19Yfy4ztsEeQ52EaTYBHVbxS2wpMeWh2YkV2MVmWrRnV1kSz",
  "key5": "4UdDqnJwFwjbKDDmXNNKubhnBrDTdh1uLXkfD6FrBRUkKqYfqt5qDvrd9nVgDpPM8QFQRZ1JiDvxZastDhZzEhnR",
  "key6": "8YfSVweC9raXyS3MurzM8VhWN4Ep7171GKC9CTCsXFpoaGSQwNsLgk91eAc35vPKJTvwKhoXa4wqAixvNTLV2Q6",
  "key7": "3RaQZsZgd7QBkqh25pSU2uHjM33MJ68zTA4zsqQBm3qTisJKZ6A51aNxt2YntVkDDSi8YBxbva6PEk87pvMP85tX",
  "key8": "4TzcEHGvh63swhiabbUnv8mjW2TkyBmN7fwFTxCgFdeqgSYaFwAtVWGLVL4kWZvDohEqi5W1sy4wsu7kGKixsyBA",
  "key9": "4r2d88Lk3rsoFas3xmppKXaND49CA4nsdryv9BxarokHarcBcVHaS5UNPbG1KhSjW6DuV3AfehB4cHabSUFpzz53",
  "key10": "4mCx5hAxQRjJwaT8TCtTJ9G66Lt9KNDzZb1NmtDudY947W1SA2bj2sxvjQjv2bfB1yhWBQLPMhRCc4BdeYE8s38q",
  "key11": "4f5bFAeuGxUW3iCTtG5jod1kDfKFz1r92Ps1RFfB5xUA1QkWcSbm2eLMsBUXexz4UpDC8smqwcVxBgYueCaNT5NL",
  "key12": "4dqy8cYgdPAZtN3mVj15Wj7hCZNe45FZjPK7oc59JTt3yeFX5gX3V7rbx8EuLvrYthbzaYLKW4jJeF5j23svrwZU",
  "key13": "45Q4KnZjJiTomfFnzxrxWmsDf2AfeToJP1TniBFS28Cu2xp24EhdPQkw8wD87nUdnCK3hgUydsM4zS4nS6eVfiy3",
  "key14": "4XSfeKSNdhGyaMuo4PTa7ketzSnRyb6cLWcW9wEeB2PZS6ycbfoHHYYFWe4pXJGd4MuFMpuSxw43kzn9X9ei6KLp",
  "key15": "2NyH49Z1Sw24hw6imXyKEnaztUQejTgATZJ2FpNSPTS3J19Xo1QubNFWTBhUAMbKzZHZavp2jXDkjwtY9FBMRZT9",
  "key16": "5nGqm8fUSoJsPZpckFKtzeM6wx4unga4vsgEsG29C571WcuSegJYJwzhf2aoF3yCkKHie9UPo4EDbRZMUqmSBRq6",
  "key17": "3VnciAwYFXNoi2jvfCZJGdw4jkAKxKrxWKTLUdWamQp9YxbMrZPqju13dsrvPujTjA8CGMKF5iWjoHCov84wpifb",
  "key18": "3JcC6N4HG31uVxPfZYj9skz4vxnvyJkuP2F8PDHuVcNjKtwvjrLq76EtUS1j3i6qRYa1wmmBTovrUm4UNPoZ4cw6",
  "key19": "frFdZvebdBBGT2k5kYsP5Esox11V1eXQQ8bkP3cFC8AiAj7dN3wJHumwucRZTUq1daFCR81dpyzn8YJhtDzLuor",
  "key20": "4QEarMcFvBgLhSbntrZgGh9w71EgN7gDa6koFaUhmZzMYs8cCt5LRvUcrYotycZoGmqp5uZXUDvmNUPLuZYGXAoc",
  "key21": "3P6oRaAMHcci1ggpSM5S2ZLEhxPTTcdxFha2P1HRSw7vDWJcypoinpndwHJwcfrbicbqwY3Tm2puCXHSdvdBBNsg",
  "key22": "n7Sc6mwFYCiYRVfiYbsnvTiLTojptMYpRwFwYgs5zzwohVXR4ycahB8KSoZWyLN2KRqm6BxKv4cCtcfrf6uFfS1",
  "key23": "3AxFUWGME5ZePMQDtiu9hgPPyXBWrxE4cbctTa3HTxipPBuGvz3QZBpF2Bsw3DvqS5MzQUknwQtir2sA9GvKpdLy",
  "key24": "BHHjwp6FT27mQeNv9w2XzBYyXhMnieuzYwpKBpXG6vnAgb72xBMCGz53Exc5t8wVLVsSpiLoe9RQsniGTfeTEEx",
  "key25": "4simXs641aAkBNN7SyvTRYpx2LKcNuK7uLuUb7AxeMn42t2yNWkhZKSC8fsKVHvj8FXjxcsgeKGHzLFkcDXS9DF7",
  "key26": "4pDQNHeoEuYWcwMfaQzFD8hDuw1L5z6MszHhiprsfwjynRBVCsFmqE6tXyuqr8Qt7Cz7SsTeCaZxArPwfRLCKbpJ",
  "key27": "3FCGg3BBP6gZiUGCf6d36d2rsBrdBtHCExHrdAdNjiYsVTTEGaEGm2sySoEGC8mGZHtxGqHEoqDUYngCWKdy1vZy",
  "key28": "64NHjAwAvoEYUwzJYEyFMx9BQViF2m3RQLwDZML6AoSc7xdXVwVNYvCyqXqoesXGAve6maVUs6BP7m8aug95mBgJ",
  "key29": "4aLUvjSuJP1YrYfMqs8JKhhQC6CmVv7t17jtCgEjvVviRqwjG7Ec1NfzKGPC4nMjgm3TFazkhteyx9SRW4uy53UL",
  "key30": "qK83ZiSa3VXiALBtm57qtAxCwqyupzd2KBb8g5DRwXoYVFUiFYfm6XAKAhb9srdbUApwRjxkUMq9XoZULXJbX62"
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
