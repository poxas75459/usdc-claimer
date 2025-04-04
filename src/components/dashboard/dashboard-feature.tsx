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
    "626WXB3NpqpFUcfgyrwQPigRavNLcYABqBL5UbHYuU2T3WMvvUxzPDG5uHVTSwwbHmadxi2MPd4waymzxerHqEqW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cxnXc4UEBrwo4GAGAaHtBKLiqr97FWNMv3Yc3tPh6mxtT64x88NdYwCQrjpMVY7oAFixJ7cmLU2sTBXwq2rd6Cx",
  "key1": "2Y9j7vFrXM531h7tcSwXtCm5WXKoQkrvN8Nsoj2F2uL2iu4jPjzULRUJY8QF6JcMfDMGSgsonEhRPz3qvFTqAEFa",
  "key2": "3MfEQ4JVTzzgawy2R4jv4umaE696rQ35iJhRRteuXizYP1bCqV229pAtgYJPYn2dDhyyDnAeHdn1JhRATh3R6Qdv",
  "key3": "5wnyLV2CLbSzMtTzrA6MjS2JfKi3rDUqvdCfRcnrhnDLawY3oKgCrRShq8FqGuTAPdK5EtnBFALaZBDoyUsMv7GC",
  "key4": "E2XfgD4DAbMzFeh6abLwLCwCQbsv6FdUcwoUEcYDjQdnsm9VmENGeBAcwCbyrdXWn9x9ykm1hSzbqugB5j55LZu",
  "key5": "2aMfQ7fm2vUqY1aUAGKUXebVYHu6EpuYwwAytPX4hv6JZXoiT5bYJcR9oa5iEF5nfTduDMvgUAvky3dJK8YuqQZx",
  "key6": "xYRJo4N1rM5uoRmpqEMp8WiZYeojaHFJiu8k4krQahw7pvPoSBg7rmDhwNaGsqR4qkDwRJJbKX6DEBKfYk3LUUL",
  "key7": "3SKpih1VvFEa2YzcZi1L5ZeWXWr92BxxojypUXcKY1cmvU8AeumzE6TnVqrMURiQEwV1pbuVyQmFPssv1G71q1T",
  "key8": "5aSsYBpFdBsYooBmnKgBwthg6eKH2vt7m5WuzoBLUoASc8BgD6PRmDewrrQki2p9TF3tXh23tz6eTBwZToCZ3ypr",
  "key9": "3ugiGxtBrFQht6N3okq1qFo1bwwUXuCdtdkTeXvxwYeVrp33smpB3XscLFvx54av38NxbNzhBetwyfThxCKwG8QB",
  "key10": "2XnCZU2xfTUp4kcH45VS7Pt7KitnMK8Umqk9RTEMQvVj9SqRG2ryArXZ7B6jt43V8fdF1sDwq6wLmLqxmGANY34E",
  "key11": "3EfGmA3Se7tkjpXhut2iAGAiREa1bXHisREB8Jy3PQikhmBYSWMqD715o4EBgukxfxoikm4hUeXEY3CHZMoEHNo4",
  "key12": "5rzTFtEkjk8jwfv5L1jck3tTFjgnRKTzZKdVxjJsJvwin3BUXMeP619KbihKi8eGjdStcoj3wfzwLNAe22M8MfAu",
  "key13": "37rHQWQpqhn4zn537Rjse9uoiJAjSMXy1aVZQUSEU8nhbEdD6ZniG1X5sQuA9uh992nNcJMD5PZ66PGEywzsy5XC",
  "key14": "2Ex3JRnnuxyb1PjxhgMGD4Nu8wjEqER1Vq9HwYWhPgVWoncgZA4Sm3CpmpaWcGzVZxWWDWvVvNBkfBjEZopPxE26",
  "key15": "4mzYxmxGr1FrWDCMQxJH31W4uYeub4ha9KSFK2nqEX5Y5CeeBuKhmYz7r5GNWub6ngq7dVAGobHcdnzBzGrSPQPK",
  "key16": "4pLvDBLXpZ1Ttpwqc8uSm8ymD6iNh8zb8TrPuMWKxiouNcnmV2j3jbVhWry9bQUyf9pGG2iWkTLnYwAXYiMvMtib",
  "key17": "5vMh6essS2MRE4ihpvC6NThYzthrYeRHNfKpb9nWPqh3czkoVvLUp6EnfvPXUCsnWyX6ZgA3jZ3KFvykyW4qtwok",
  "key18": "5x8wKbEwJmUVrywBEKsvtAoNUudB3v17q4wkwzhqDifXsPhF8kV9XFTiwfwfYzDNQG1BAYMYj9eYDPPEW75vwHZ6",
  "key19": "4Phw4AyPVrr3VtAyuSzfxREtm6VJmqHs9dHSCXsBs74rqmptzUDv9L3mhWPjpRezDn5Gp2Fqy3K6Tdd9dpg4r1vq",
  "key20": "3rBfvRZxmPrWNsC6so2aSqGhiRZs2EQG6qq3vstsxuvdqa6haEquUMuGHG5z4iSLqXoypn4dv2jeLZzzpeeXq5ZR",
  "key21": "522AhDL1bsrSTUTt4hFtNZKx5PMWqe5ZHGKFWPLRcXio7xtBgB1FprurcyueyjEDaXcXrVT68mzC9YHWzEzM9fSq",
  "key22": "278161wxkLrgaGP6RCZZb8JgvW4zBJZTAkdiJWxL7sCPJHCxQZ3pTtHYYi5jUyMWRLEcywNcDGjKTJpDyJkKYYit",
  "key23": "4nLfphcR2JHgK5Tb82EWZqGwyUPUryqu1GA2x97S3dkrqdNLU8vZEPs7vV7cWpx4gp2yUJEaTsGNZ4dg3JyK3NKD",
  "key24": "4YgQm8RF5kTTPee8a2kGRWSSmYmMvEBzVo8Ny4EM4FsUrfXs4Cm2PPEqwmaenAMYC7jFxDDMnbdJGVZE4XeAnw9Z",
  "key25": "3o6HwbYfp6B372Pc33gd6bch3FceuBeCjCWqVkVcZxr46eK1TYhbvXkW8BYpHL89WZMjfDaDsBKxByPqKZGuieuP",
  "key26": "4yCqmgXR9fnXHiFsL9LQynYUTqfS885DufVzxdvUixbASBgJ2L1XfBzAFXVtPHfet9EGXK3Vyxbnv1YaZ7ZfQc37",
  "key27": "5RBXpVsUCj7vBfzA4MPqhYsuUwkgdjnxmbJGJby3adTyeNjEN28fXDiT5Eq3fVPaFfWdffQtAeyLXKL4y55XiXRH"
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
