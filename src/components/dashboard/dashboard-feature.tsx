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
    "2M7zsFTzihyiLrZynjqy3ieoK1Ar7qggNUJboDnu4Mx4hG5GcNMi1NEAy51eg1WhFjCjDMAmA71YYMs4USH1UdiQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "u8njt9EueoRwH5kgSynNQwzfszrAhFgyEEwozx9y2a1uwc7RishhH4HUh71ehe1W6uqEBPU567h6prTByMyPy5e",
  "key1": "5DYE2U4u1BmTKV7RJKFaoe5GDePEHNvQPu9cvs7CugovPRABDmFKKv4ZWwttpQQtghgtHscDGn5685fzPCUmSrJt",
  "key2": "2ehUJzeVB5jEN6gcX5hBbTTkYWPb3ftgcnLBzVYWf4RpvpZzKJ8WrhGCPj3pgsXGxnb7YSAc9MeGReMVuPZWkfxe",
  "key3": "3GbdPp5RJUTcetVPLzxHqfeRXk2PMeC7R2xtdcWE9e3hDbzRzCxVmdbzHfHzmtLrjZ4SjaAajBcNkaFYNjmLLdP5",
  "key4": "2odPBwXoUN6kkrFYHmRLYgzNgg5bhFKdHZspGhbkAdvbzQtjQibaXujrb9ZWvLGQgB17izUFF7U26zS2LuLyAHND",
  "key5": "35mcoAsoDkSHTGyb6Jkwu7k9cQ7mFsyPNj4smEqp6tveQSM92MCTh7EGV2koMg8hkvQuo73ipx7gBbwfH8WMW1ZK",
  "key6": "6sQE6GnamFNZ65yUhoZnZWSXTnXh2f9n4kvN6NpegN3s1i9UcCfdvgGTdYnUwz5TzeVTDfQyuCiZY7FANbKzt65",
  "key7": "2sJddwDnmc4JsTkXHKcfBkoAvt8cABBgo6nGmxcnewU4c6jKQEMSspFHMWkVi8khkR4KAWNm4kJJGrP4WLjsBCV",
  "key8": "5z3vEG6Kg1QauP5oJLt17tqWBmbRGDHs8yWx3MFJJo6y5DhX12CdHSDQYvsoQG61N8fQX2YYAHV2BipvVFkCy6Wp",
  "key9": "58tjb56eT9sbB8qz5LdyjAKUDLY3PEK3qzY6ec8KHMNjNPagDfmZ1qkv2T4Ktqti1VXkSZho1ZnfZ9PdhW7JVf5D",
  "key10": "2TDZ1gptS4YiUnNF8QTLxpRv8ExQPW5vtCsQgqg6wZN6mKkaMGAU3LwbJxCNeHSRudUkpVzdC2kT4nudFiHxSLHs",
  "key11": "2U2ekppWfUNcKEkBP1593qvoYN4Pit4HfZZemzgoWPbsk2gwKu7RwHSoj1vBqBZ84n2ufSDSm25hDoE9veM7S9QF",
  "key12": "5HaEzY3TSupgGztX3hjp5NTJj5wCXWjMPjmL9ztKqLu9owx2XtrubiQobuJrGyuLQdmBWtkEV91qhC8vgbsN5CBH",
  "key13": "q9vPMCCcsagdxiLJ4s8oPgfeZm2BUS262kFAaZSZpk3WSxZiYQwWd9QzptDd5Au98cb8ymek8x5j8JSG8CGzwMC",
  "key14": "2s34Fqg37HGzAr96LYg1vHaN5n13dTzUZBAspNyfq3HjwuupQZ1iYrXVZ6THmYUDbmgQZ4FCT88Wvem8iQFFQK6q",
  "key15": "672n6QfzCGVt9jys6V3Fp9yRCXFEses6LsavhWYTGqVbznF2eXLB5TmTD6nEg2dWgGqXE2ix4k65brNmaLGeUdkU",
  "key16": "ZNwpMfxC81cgcTB2mDv3adhz1sgHomjBZjnapuRQ3GYxQhFsDQRZKtwc7zvat9goDoFwiUowcokEtg8Ry3BXfuw",
  "key17": "5Rd7xR6HNRNhgguSi8gVe3KdpvmJAxng2gjVuMjTnSccKjTewN6wu5Crg8ArbkFmVtbEW6beSpy1f391r9zLkNQL",
  "key18": "3uEBeLeJGsDx1DF7tRAPavVhVGrRhuFxNGby7KFKnoSMBehJU1BzjVwhTrCpBQhbjQRuTRViY91vSn75LfGrWusR",
  "key19": "55ctK1YsmE6dPkzMMN4NJfk12MnuMbiBHkLoAw4dGbWExBgBNqVGEsYsHAeYVP4VTSJVQhy1nNkmUiWeFgYvJrCn",
  "key20": "57beBBTaWCnWnzHGM3HtQUKjc55iAtMoU981y82473GuBsjPFBQFbCZpRSfumv9LQ4YueNPZnPvB8EeMHGo797p",
  "key21": "CtDvVwoYtM3TEECjsoTwQnmYCUSZ83F8hSDXk3qC3JqEZQV89SF98as1BrdPFxSjYV1LBn1TfZa5cwoZ6tNzEwB",
  "key22": "27NdSkJz4vM1teyYFNSA11MPNmkfUmoxx9xG1prTTCG3ZKrSiEjpTuapNp5Fxn7YBZ2kAemkFmMvFCjoL6gEKDR3",
  "key23": "4tYSEMXNGPyuzN9EFu6w2tVCp3GiD3tbqWJvYkMCQSfcyxMqw14P15RAPoPXUetS7Q3nY9jBNrGNLPdLf4ZBigHf",
  "key24": "4mPY3imuouyATLK6dM3aTHazZcK53dm33kHzK3mcP1LMXLuLUCfnwyik2sgAcE4tvUMLv6h4b6RGjMRFUXsqKkqC",
  "key25": "4u5k9QefMFdv9PFgGdJDDBtvDTYsRuAGKvhHtrZxypMuztEGjFZzYPCcK3qmoaonJQJkraPnbTdnveBhiEVmu6jN",
  "key26": "Zkt9HmUNbrUfvJz4KYeN4yvFc9xFhJDDxotrZ34LajXsXeV9fLt6tAiGr7sTR34bMgrMoo5MsYXzL3f7WmjNRgK",
  "key27": "4UJ9FL6f82DCY6oaNFh26nMhaQTgxBQbPMfUzh72di1se5dHK7HFn7HDwDrBvLDSDCcpWkuySDn2ZK3hoVpLsKyL",
  "key28": "4VhP2xcBrA3L5kBPTyvbGSrnvCVuiL5XVRtXuyBytR9f5eapYMLob6oSiNuzJwpNATFP4CMBiowLD6YFu432ADFe",
  "key29": "5NvcewBUYtffjeUuVKGeMq4oikWUibqEeLtUn9WjUrz1qHN1sEjKhmBswuBMNkR8ZHF2KzqvYgvyijVerqCy3FAP",
  "key30": "55JByR6rzsi4o1mhS1Utjgeom3tt8mqttFJdsL9bXtHvj2ApyUzAUBy6bCebeBqqEzdtMcYcXfY8y5fWCc1mJZCC",
  "key31": "3xAbLVa3EpyE7nukP8Vzt5UjDKQyGk2sCtENDiqf2r9krvvFndour4vqnWYSqHWSEvic4F7MYP4SDz8APGY81Wkk",
  "key32": "3XkkWtSfYEyiWDvfwbnQLCkj7866PpULuMVEYBRKU9i3RkfHryFYg1Hypo5XnD2bMa9zCpfJ3efNWj54jwkHiHky",
  "key33": "3MrvKCo4jPXuC9wNCoEzsJkC6XPZqiMuAuxSG9DP3uzvQZp8F2YbrdMtF1tK9LY9WiB3Rrwvy7kfS894AeEMtBhz",
  "key34": "4LFtAETfMjtqLQK1AKXXubuRHxgcjYx989C8b1b9RtF8b3t2nnq5dPYeoqHTiZVBm53f1AinDFiGUrEhiHxWe16m",
  "key35": "CwHrYUnpPEWKBG9iDCRbX6roicY4pq5opSnQsHSFVTAgDTZJz3jx2xoem8XWBPCQHNbSfTXPYHU7dEiaMwRgNP3"
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
