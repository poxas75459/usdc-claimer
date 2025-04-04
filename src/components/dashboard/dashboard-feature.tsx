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
    "4W3cSfUqUwknxVxsjCe9Tgh5kpNLWQeDwASHEXmQ4wVi7U3hg44pCsDewAqfStqbpdwYyDmTLom3Fdtw6nWa5QYZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H6kfU1EUpCaRvEahGYrcvTDs5tvj3WFFAUCKeJAUnpq57s6R4oFyebpWw26Ee2Kf6Hae67JnTt3g97hfQGAVFhU",
  "key1": "5CfnMJUfNKchFMdmFGUf2yNMnEzpaXHLDVdaA3sbB7W5uGjxePecY4nEWBFtZTjxVEqCLe23n9cQsHaLhwU177Kb",
  "key2": "2QvkPreWWLRG83Ab1AnGofFPA6ZKkBFBd1SKpQUQW4f3WsT29vtdj5RT1JQm2Qcs3ten8GWx1JH7Xs5saKbiCjtt",
  "key3": "JtDLU7VNbCoVxwYGbVBvZYiSCkrGHwodDY93gdrUjbCby2hvoHnqehAMdJYpKdN31xgZpAJr7Y1qpwEQm1Y3wKk",
  "key4": "5P6goGQi32enZbSihZM2XhrErTVh2fe2RKe8Sy3Ub3YX16cc1s4kpEp31ikg1qVNMAQzMSjCfaJvG4fm22feyH48",
  "key5": "2ufuiGPe7SC656JtrkKafsiW1pDa7d98wdnnkYufVFd4n2ELaSpMxXh6Gdvk5UPc9785S1rrY4E5CrVw79xup16j",
  "key6": "4rSxWXYmKsAFbz7udQmWtXGtrtEwjVvkneUptG1e3JBju7SS12uRenVy45fDGKaNEZHMB79Ja3cwHU9kctvsG8LC",
  "key7": "5nGUNv7vv6xtU5mLbppnWYU7k2DvjKiFAqnAeFsQePxqUC4QDUsvmPoBZ5m8Tfa32qbsWNisKT11Pxz4NgFTFbV2",
  "key8": "49YaLRMuCEBLc3nK77mpurH5fFx5LXvd1wEpcXm3ys1hyAgbNcrMbmuj3HApBukeMTFPkQJ6Gkn1eCcGhViJ9eby",
  "key9": "2YrdVXnGAudTsLJCLDzHEQFyA7RWz2QPCJmH87GLzkcwHbm2Vnpsdtm1eodcsBzVKPts4BS1tsnJhVBhx6DzBHHT",
  "key10": "5Zgi7wmDVuReEDTUTe3mUrMZxcNbomsKUXFiuhn8sBEduraFisgauaegvo1zvH6Q1aiHKkiFR99Eg7XYLBgg1HbY",
  "key11": "4M3MKBdxk1VKCDMWv7MvX3Soi1A8Lj1J3q5kGMYGADazzn5kR88zCUCeF3Smhob7tbSXT6qRAWBmH7U9AoiTpC7D",
  "key12": "3rYZwnYC48m4G4RepxgJLRJVMgRbXYDp758GnGcaKbWUosRiDkkXACVYwoAVRjJYVLk5JeQPnVrG1XDTxN1Dvtcx",
  "key13": "2F4x6QaeTNjSxeDHx2Qsq43npXAuw2rWva5tMF5Gj1gSffXUeuLoA2GNNB7rUXqriKvSJnh3S57tmVtHYS7qHzrp",
  "key14": "2STx8v9US67xGTAbJeuyc4vw5b9ZNkA33iBCjWpekXUCAFvBWBfztKBjoSAVHKzpqGihKzhsTWY4tDyfExNuXYLt",
  "key15": "5gzfjunJGXm1nHzSdnQjcSM9tciX3TTLKPgr8bT3bSvVfKormksDSeN7f5HoLV4a412hBM6NAw6FMFsHUEpxDt5",
  "key16": "2tM8hQF2k43GCkSD9d6GNCoSuECaxjxpatqvTMB5MgWadZf6cT57HyoU6ALwfYANy89SicZbYoT1CiNA6rXTtXyo",
  "key17": "3etgjZD4pkwRRAXXu2dCGVvqVc1mf8nHLvD2YfTBEaBBoqqFzxTMxfoab5Zycuh7iQassC2DYodAe1PAfjBUodfD",
  "key18": "36Ajim5o2wZsNA2uKy5NFsEbdqhdXCUVyQ2c2NdDrgyRWa2ecLdbUQxnHQqvgzWSHRQEoW6q1TR2CWUE3wWjQYNi",
  "key19": "37FG5o7NUXeGtgY2L7UMJ7BbPpM3xdkWY8n9gNUrif6WNPQpe3ckUsZWTaRoEdRG8GFkLcA1xkE4bi8duPN8kveh",
  "key20": "6P2anBZDy1ghy3XWBz6Evx7Nd8Sh2YpRAWwLzZeMy51Dko5pEiH7eYDBhUzCShazg5yuTVxEnz78wUw8a7njU25",
  "key21": "2TUcZoAZTx7xcCtLZgkEc6fs4L8xv7EwQBET9usuPyiVusHpWEqrxVxtZBuiERAVSyroTWpjZe5yPk4Aef3cwVET",
  "key22": "kzgDEWstu5aY73gaPVyy29RdFomtczJiMPqjR1swhmV7rdzuEcKQUiNN69ASTFuRfaxQb2SLLyaPtFgLvTFgVZD",
  "key23": "2wjbFmG4gKyfxBqwnez8V7tzaH4FqfK86UCyKkGmQLWQGDPow9BRQrfuG9J67VpDN5Yve9TgGzRSyzprJZG7oU7K",
  "key24": "4DKBjbHKPda6d6Wo74DzGPn3Kxes5SFX6eopZfH1PrvgoakmKVGHPLFKCZ7csuL5AqhwEJeatLqtxY7zDV1Xb2Zs",
  "key25": "wJSz9rcJznQV1HEKbvH3HQwYZqDFNM878ScLpE1onzadZcagKen5tQ84g97cd5fRbeFr5Vk6yTvfK3a1cAXhhCG",
  "key26": "2XWxy2C4nLUxXj81vjBcMorCJEYCX7Zu9acoeAm8XbxLyjFhNpjhVf5FXgqdQxXM8wr1nG4TSMJ61xdUJNheWzNg",
  "key27": "sP9nkCN1FCNwceSRwdHoAo8RS4QBY29sm2jTvfwCi1UYWj7jhyoPQ7xpPUwoD2HcwLXvD1KYW2DeY5EDFrauG27",
  "key28": "yWPDTuemVZgD638o1DsZfa9NpPRsDDNmh6ah1uXyjZ6e9omropFuaspDNY9LgibrgB8K3dB4dBMTARNNyyAWWHR",
  "key29": "4m6ZAf7zwUK2bq8gkZvmHZh5JAjVTpFUSGPLvUZTPEJz5UoCpqhbcTsUvaNQQjtz1u6ewPniPJPQerEvhfpd6eNr",
  "key30": "3addPaYMz2YBVZa3d5yuAfDbN6bjL8yt3641dnCs9t19xiJd1e3zcs1cAAFrVdTQKhYGHGo8MhqSrmqN58AWnDQt",
  "key31": "4EJi5zNRNC6uFuGAJP9iygTxAqQZxJdPFqdTV8cDKrhjm8h3y1jm7onsAVKwH8CXBmeSyCNUPcDLDKdk9uHbbF1C",
  "key32": "288dVN15HUjvviN1nhMULaM3VBs8a1orGJLTSBrt3hzEVGb4Rzoq1xBx8oN4uTXTzksrkiyPbuyDHMt2ih48ZM9n"
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
