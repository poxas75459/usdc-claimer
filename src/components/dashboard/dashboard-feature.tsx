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
    "2LpCk1i7LESPAJrSDoYgcaFgrVwPPtPrsqhKm5sCNs3UhEscfteVX5cgc4EoFUU9M2DgQ4d7f7Sbtk8oZjFFPZot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ptzrFeHZji7iHDEZKkKhixYyqZ5DoRWtv5WiQamaBRt7AQSyqpSBPzcTf8gFjAa5VR6FEt2GBVKUhJkdGNLpchS",
  "key1": "4L5nTKuAZfu91cjTgCWrBCiyu4R6JCXCq6T9Fs6kW4bvX8rtphiAE7tU5ChBMXaZ8wC6XVjsVeue8ydqvEmFLrmr",
  "key2": "4pJdhnVEqDFC5fboVCcPvqcnuEhE1pDraueAdzEsEXbeX9E6xEEhcEoSgqrfHjz3itUg3eHoCRCyPaC1SbzJkKKY",
  "key3": "3Gu5DdCyUyJHt4u1h5xPBHGbwgQTQCz8t8nxzcncTwvSzJ1NddtX2AGGt8HEDJGozJXgCUJx4K7JC4jZjWDqb2R9",
  "key4": "3qx6unQGSkFNt2wJhUmd7r9v2CA1BVNiCPhJaWKGioJVovBmG5greTyPt9qNf6gKgWVUYcWeD7d3E4x7jZ41t4NS",
  "key5": "3aeM7ASbhFBS5PxTQ93NeWqBzLcqyDgNxmXdWYMQhgfPEWCvbCSSKkpEYuCT1rxMqAwdGLcCgDRk7vrXJa6uQpp3",
  "key6": "CaMmHn7bmvga9JQk5M3rraQceSTMZoABGRAb4doEdiUMTHX2AD7vjzmmEFNH9djzHb181xB2KKfaMv8ATFdcBdx",
  "key7": "67MqSs6PB3VQJ7djZKuWwHpDrKLDrhGs1m2uGT65VDQjWTtNAmx9jhNUe2AtXJWrFDfePftkLcwihQEUzvBQdbGs",
  "key8": "61ohT8exRmAvEJsdNeib1mqxWZbADWAJDf3wJWwLY4XgFPBqfmL6yVm3uT6XsdCWZPXfH6X1QbwbC9vCpXmyrd4P",
  "key9": "2NndAL2f5JAJVdqqAJP1LuXkKSqWaRN8CyyejoDRXk8QCdEv5QknckLSwrcwn8CAadG66hoc9yuJrrGRqgHvhrmS",
  "key10": "3zD5DqXq1xaaNwsiUPNoDPU47v5BxnwScqeMk6d1HhMTyfNMQmg6n9LeecX6wM4Y3zsXojyBNBDupnJXrHurM5z3",
  "key11": "2pp8uVNUnhKQYaXniAsw8wfc3qtAwgtiKwPHXGyTYEqjvd1mYZrMyqaEBzsEwN3zJ9MmLj2uJ1Egj1EG4TgbUFXi",
  "key12": "2gUjbspaKvyZDjCWEKUtGmN7XaRdCqdSGR2XcCGpYhGiYTaZM8e38ytMnUbhCJFdJeVAvK15tgYFmFhXeLeAqygm",
  "key13": "QxR8KdtAS9Jo6pao2yWiUASJi4QGZPrNVWiveKZ73V8AGv6gQrppioiJbkLUXZ1sSmr48NFgX5rmCY5HkCcTHbP",
  "key14": "5J2r3VxyXWd9ARohxkDVECxhGcP8pW3XJ71eFmr6aAcdcnTsSeXcrvK9KU2x7wJjofRnTYtWgyC9KCSgbY1rdVW5",
  "key15": "4xU9mBuLffRUptcARCYTT1jq1qG15QFfN59NqApczU1esXkwV5g2jjZiXMPJvmRVkveDKJ9HyWcfAFHKqYz7qvNE",
  "key16": "4L33oYyz9LKS75QKhBXG9XVXcYmh3GXre2J3iUxqFMfQeZEjRde63Fh7vc5LrNsopKeizmLsR9YV6wCpSFA1WQGp",
  "key17": "4JznCtYMivarcZZaubLSKojxoGw6Dtweok1p5MVUbUweLK4YzuMQvq3Q1gYtgsdd4BagKg2jBaxZFX6MMyy3zDR9",
  "key18": "4U6vBBA8MLPzSHnyrve9cDCtfNqY1wzzPvxu47DBLnL8bzJrfenap6spGMiPjCAguYgKfjjPrwBKCJWtcdX3dJEm",
  "key19": "5CMHU6PweD1FMp9mGRtmP4co8xChNWoRPHhYbbfE4zNSeebr32MGqVAL2j1TtLHp6T9mFz4vrnbEmfCSJVzu4sQq",
  "key20": "2iCNRVZj3VYZDLgRqYVzYvZf6rEkP2rVufFHTi4wugEaUW2anhATH2CPJejFtfxYR8CWLWGgNG9RhTEc4kqcuYM",
  "key21": "2VSseSvuE4Vm3LQWRaPWr6EQfjQX4DkhsZRiXnBcV4p5UoBppWJzdhc2Df88qcbnMUBZapm7FVxtzrQJ75ANuLUB",
  "key22": "5ps33ojSmnh7Vf7duQLgdd3GzrUBCLGEjRbsXeyRmLbXrzdZ77nHgggX53dzjEhvy2oGzWXar29KnCAP7QvRAXmD",
  "key23": "3iYqaF55afBJ3wP4JwcnS4sKyzjxtFzFzhPLucC1ihHrEpxScnQCpEgvGqkpQX7tyo62CSTN7yLXui8fkqcbP9R",
  "key24": "3EKmuAuTWyZBg84C1qYmTqfKg1qXLoFhDwxCnt3yoN7sUDpeHfP4ri2XbzTghx6WWKePkfJgi82QDCLhT3N9QRPd",
  "key25": "WTb6V6qZa6KBNpdGZxNasW7c2H9m4p6St6YzbVfQcGgDjReXUVTEH1idU29Ah5eVZUD58Qn845yhwMVKFGk3Mtd",
  "key26": "2B2cv6u9TwjnnvBcLZ72CtSzbg9iJP61do4DZKtFeghFy5vu9zX9jPUxeGVPAXfHZPYf5ziqteRy4BXKqt57Vq3K",
  "key27": "U2QhJvJ9yKeroabZyuiK3oiP9aDMzpTakaeQKn5vTsoLxX9hCMy7ub72i6TNzEDCYcABrwXoivYUoznTqT4xR4Z",
  "key28": "kuQhtYkXUn96hHx6ybQEsTcoNf7YGd9sJZJ3MtqKZE6mYHCg7ZNZkvKZTgEbg6vX2bfu7Txof5qJYX6WDgTd65D",
  "key29": "4ikoWtgX5wEcNUncUscpwbta5yjK7y3tjLX65ZZ9PW1K6gvdgUX13hTtQvLsuTJRWYN559e6sih3daSzejiqnGuV",
  "key30": "5t5fFhuQoFkYQkBUWVHMvKDQoMRWc2ZMKB4vtMd54k89SGhL3MhFkb1R33em4VGobdbcK4gozA6mjvtKnqEP1a3z",
  "key31": "vihgaCsh78AQ29i6LosyeXeDbjd8DYjMUjEtb3i2fD5FTRN61MQqLzHaz3vsbRvkm92pwFkVwmWcJ8vFgYuZdwD",
  "key32": "4g3E9HYDtpaQKJzW1qKN7ioNvkw68cSaas37LzU6k9UCuRp1ze3f5hVFVVFfjSyZComiTpZUMwFe6zpACVUTr43B",
  "key33": "4Yizmg5hFao5igemDqWe9Mp4fd2unu3x19dqUCakXnGvNCWzhWNhRdgU4f69aoRXyYyqc1e5mJ6qv8yerSJLZ275",
  "key34": "WqwKWyrCxfnZ67M1btvrMoeVu7Ug9s7Wxp4g4ESZFBsnGBmEuXoEeY9FojUpof8bnRAPm67ehdMmcB1WSF2Bsfw",
  "key35": "2WLDVN5ZybpDEqGV6D3DFZGEE2Zqo9Nx1GTDSgXMzj1nXbwhER78qEBH5JKDGMewpD1AkJZ2tUHDdoGkxR83fReX",
  "key36": "5oACANNSBdHpFZ6KgncRFUFpK88kro5sSpQ1uErKTNZbGQsGwaV5AJXTZm3jPuhHWjMkeH4DWTkuvL57bC8q4VYh",
  "key37": "5fUfprpfbCKFhUuinYpuecyUFwv2crq86Y1BV5vciq9VEgv6j9uEbTeRbXLvPqKHNQNo6VystfgSsQudfxJsGjAQ",
  "key38": "hTjAEuHrL7dqLp3u3NSU6DbMyXU5wLocNq1nxtW2AfK6nV8b3wkg1ywxhxKgwnQznboC5eZYtJj3UMuRsQLxX5f",
  "key39": "2uE1wLUzZUntNzpDpcEnbbfxdQhyAvG46bP2hBCtZgPSPE2wF7vDBM5cH8vFSifqLgJZ1RyGGz6uHvGk5yzqC6sG",
  "key40": "RH3m4ioRmiBQ88Wp1jF9vAGAzDxQWAx4fty3Uofciozskcn77Hi1Rm7qRY6pfczdBKtYqGgVy7eu4MAjkdRBdAx",
  "key41": "28WHLuQnhBoBRM6jRa41WYnU1C6njHZvdRub1kmHKqpUT1gX8p9ZxcFDusW2npuYETmuiEF4DsN493uxUJ7rikDV",
  "key42": "5M9t77SYmzhgwYWdZLM9u2T9fq23rFzzgdkPxRc3JnesEP3AF6m6wFaSXjmef4T1MkuSwunfK2jUFzoziUaeygm3",
  "key43": "2NWEu7aqxuwdZ6JANpeUG3x6APMCwYzdu8dABjDmTZDmWsHbtZqtU1gUEY2qHrxybtRdnxB8vV6FUPKdtL2VDS6p",
  "key44": "553UBnvw7eGQV6oJEquNeBFyJ9VKyG438FMdiBkCptdtMdiwSStpAS9HRtyPCwfxuE7czjj2F4uwxfmMinMVMHJW"
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
