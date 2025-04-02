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
    "3Du4merT6MMEdpNFuSowkn64fzeDwBmSsTuumtMuM5RuwQemkZrZzs66Mzfedx23GxGkithhDfxsfNKAtdRQdXPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WCNn3c4oySf2zEoBiXGyNTrwDwMUgLYfTgMHeZUjsgcjFN5L9oeYijSKtvJstVm5SQubwwPXWCXZeczQkxvoqd",
  "key1": "5he52hhCjtwctMSmCTZZFDRGKgH1uw9c87Vs611s5BcFF9HhrefKmm8r7TXBieUR1Cma3Df6zynRkLWaZRHLc7KH",
  "key2": "3nBubZtmobm3dDxBsB18Yy8pdtWqsEgetLSXcQ5zowCZytZuQJoKRTkREKsDk1Nz4ic6tJZop8b3x4GcJcxoe77U",
  "key3": "WrcRCSeasAKMrCAf8JYWw4fYjJhCHGXbGMbsqfB7fmKqpkidR7AbFrcec7QDNQwxwvuuVhuFSfSu7qZ2sKTMthf",
  "key4": "5aonpifBadbN5oTTaM79cAvtKBNvs27s4N2rows1ARBYWNPF2aceupxLqyYeJT4VrhNuzgbdjUa3QBU3fYn8ov4W",
  "key5": "r6SNEivK7Mvbo19grfPooUspc54xQQ9kR2VhUX7geVkQNbE5aXJLm6nuub3QNTf1P7CFHRw75Hq8tavzKvY2N5Q",
  "key6": "2AXSpEpggMWNqUmakMfGrkJCsg3mFvr5wjbEyGdAy6jtn6usLUFKPzVdbtaabppBkDRihn7WEbjf5MaeZLamdYkG",
  "key7": "3hJ5qZ9MFgfCaj3V6r7Ta3MMXvQw2fbRejf4Tfypk5gxKRX27NKv8hPhD8LMXirPc8THmZHFKQc5tifnKqxHsjCB",
  "key8": "4JtsF9nTAHbbdUoxJdevMrrSjiPYy1Y4b38pWLFnWWn8p48C6GzmpVrWVqvkiDhWv311s1L4MHsesf6RoyQNcoSx",
  "key9": "2kdhkeYXGn9fvyTyCYF2G9aNqpLogzsdu74Fcy9uzjuzgnAQ8Bh9vjhHH1eD1YF2yNsrq4KVpfKMM4sKoksSBzMv",
  "key10": "2DVKERDD5bPS91oE8aoTiUPZbGT6tH5GLAmLUzsP9YJxEge2K6piBhKb4dJSyTGgdViCmD4fjp9knSw96xPE6Xhv",
  "key11": "2y6DdwraBgPCE6z6mEc1wsjwmbtN1pK8aoTr1Y1JCe3DmCTBRdyArnP23b9gC2Ah4jH4aPerARjhw4ufSJL3NiQ8",
  "key12": "3gm4hgCYRTjYyQV2Ru1mf6o3dwrNFejfARuvGHf14XCMPMUB9Wzwyn8Z6nVcgKbEMK94AdiEjCjBJ4qBU7RxCAbR",
  "key13": "3h2BvN6am4KrnGdZEw9dKK7GxGtP59kNxfxs6AESMrFFncofUUNHwk2wgdLBXoUeLVEHw9LDWM2ewJuuzzMyMNbc",
  "key14": "4Sr3ARM3D4ECc2QLsebieQKeh9JhsraR8NAtzHc21WW33VRuzZkJLTQcCg8AKUPzdZe2N9Qpp1B8X2QJJ9ZzLVGy",
  "key15": "5bsj6KdoFV9f4FcegihNUXvx8aQNoi5EvyQDrM1NAybPScFfGpfTBfecJpfE4tiugRruEDixwiBb2zNSQd6WnMpT",
  "key16": "uXEfh2RVvpceUybiLRwtLNAAG7Urv3oA9DA7THmTB6CxwxQu4QjpVAsKkvaxchoEAZKZDZaesWpf3ytFHydE3dh",
  "key17": "37WqEA7efiU2mzJXDmFJS4bT7YcVaLboPG2dckgK6gBVCgbkG7St3RAFmxi4etzRLUWBkEGyEgFTvczH7fShNnfa",
  "key18": "2S6dsWhkaEgedLDjgtp33Ec2y3vF6enG9NeUV6d6DyTJPn4KojNcgriuS7MGnoe1mhxgrxfywaiz7NEgjX1GKoXH",
  "key19": "2ti69gZywk5J9bQXwpMkH1QSLGmj18d5f17CSPhqHH3NzVjiLPwRJ8Tib7JrQrJrc2dznRLajazUQPd8M2YDPiEZ",
  "key20": "2svmRYiPVF7hDduYb8Qbwk7htfWqnbUKvRgzWCAqCQyDiVSNdfJYXyEVwhxNjBQxA16X2HDWyqBNNyCfUAKA3xEN",
  "key21": "58EPSfZ7y8hRQeedoQpDgcZSdeQa53AeQX9Pvwmzz9VANb6mC9HiUcG4USJ3XBRQxoroeEYzEGTQ224X6JkBakwp",
  "key22": "2i7AYau4Rm6HW77vEmKGDTAwrMnUQR9yCTTAtiNnsgsFxViPotwNm9pFF5RKvaLH2WXxzKeSiJeVGchZwgBCLP9s",
  "key23": "GcQjW3DDpgaJ7ipjBB1zMXLqVUku1tHAEqFP74LqjTuvtMZB5RthfhnKzpSaf1ASNyRoKYCVzKqHwFjhccGVwc5",
  "key24": "3RejkvPpDxtB11afGvWRQxfYdWWSpnLZicVFdFDxttR1mYFMx6vYp8D5D3VLWAbFrPVeTFBnbdck91b1vLqJSGFm",
  "key25": "2chwkUYw5Ah5GNVvNnBbi3qV7TtJzafDAdnfQThy6Cy8bNriWtAS7HVgvHGUwnC5yNz5BaALyhwvVMzfbdvdntaH",
  "key26": "4KB3GMJ633PgCEcboH1k2fR8GzCDS1gdnb5uUnociTJwFLA7yTNJZYCbXSuMbC5wensjCpn5Z1V1tgrZq8CbciuP",
  "key27": "5iqQgSkJfR2iGYnpEDn1pYV5sR4KeXARJKsacBGcH1ekQUQdK8Mkm6hDS8dvgSfUVayjfnVxm6PDPCyDpmZKZnkG"
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
