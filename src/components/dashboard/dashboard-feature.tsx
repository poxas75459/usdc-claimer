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
    "3z3A5B3kWHPDVnj1P5jGHptwkHb5hnbgK7L5ZiWYiavbK3yQKgVmmfU1nugbnqxM5dKkgJBN3iB8SKKcPYGijrKM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cjCxjhJFXL2Vxzr3hq51kbcbrcZh8yc4iFbhcD4nfrbaWKBtndeWSgNqxqWxf3pfybHanspt6h2SJBSaHjEK77p",
  "key1": "53GsaMT9upXTuwyBaXsgJMdWqxVNeaYqup9u1EK8WoUXLsp8cUweyf8QAiXYLJqhcKb6C2D4xaVJtdm5vdWys3TG",
  "key2": "4kEskdKwmA5mL7KKJ9sAtQN234jjM5wSvgo2ASPMPAFhWg73w9x66wMpjLPsRjfxccru4MYiqZyni5ZfydD8AceE",
  "key3": "2WKW8i5yborBYqgX4pykrx5AXrcxRPxsQDZorqrjBezFpo21NuRfmmervsmZGk4DBqo5Nmtqw3riYcEBBheAsToJ",
  "key4": "xnqzNdXppXDPG3B1Hn59SR6KATyjvBcawntm4hHfNkg4oEG3yLUFcqxxpPkfs5Wk5Cmw4hNjXjvCcBi6U61mjk9",
  "key5": "akUTDVpn5Xr358tjWofxpgDbgYku7ZpFxCNZcsLqi76JpiikFdmVDhmQLG76JuYc7zUwwnMMd1Um9VyenV5dCPk",
  "key6": "7fomMvZcrE5WiYpiBk46RYtSvDAinpr9X6tNPv8aFG3kmYMe8iyLUT1cFni3aG1LjkCUKPKJ9YkBp5to3A2eedW",
  "key7": "3f4EZdUDGwYc2vyuYKy9TvLks6kt8BjwbmeRRzEXSm5opJmjT8ihNF1y4Ra9kHdoV3VmjNWpXFPAUQbED7kUby8i",
  "key8": "4E6TXS6p4uZxCqVmYyrTfixehwcEdHBLQmztqheA5eCUbk35k1Ct3jZ9bvMZBnufruEoixPWjTKy2qMPaFb71FqN",
  "key9": "4BVwaxCb77AcZRuo5PzAavvec4ffH2qp4913NJN4GgZkyzFhXF7YGmikbgRWNAJ9mpPHps8S27eqWbN84qAcJoXx",
  "key10": "4AfCWxc3xsez3zGtBWKL6UhmLoQ5RcsMbt8GdBgke4fpqtVg2GBFh116yaSgk3tUJjvQSQy6NBxCPR3PMM9x1zx1",
  "key11": "4zq6dzurZKz6dseQZ3rA9RSzT7KovoZWgh4u79y49wHoL7LNT1sREDdfFnMd1qA2hesN87mBybHFG3G7uw4kZ7Dg",
  "key12": "4SNZq8VFdBiCoZH9DvxSMvvKkTXyxHzYwjDzqPH3hiU8BWyZqi3jiuFE2PkFas2xWhPgGnwPbKp3Cz71txib7uGs",
  "key13": "248giAZVM88JaMTPoGJzarPbreAE29Wc3FdaY4Jp9Ra2JBRLbG2gPKx3uebmEJvNEQ98BFFESkpWi641pqt8FPgn",
  "key14": "457bgYWfSjny8uy7jpcdbRhVHc1DUp65omWwLVUTQrVE1psotmKuG9DGEMFHH8i1YWtkfbUYRqW38aY3RGEPWEMK",
  "key15": "S4cEmXwzrxCkDpyGaBjZBQzZMZYmhii2U84MHGsUU8AHhP9f9VprMBwkBYDsi1hsPZz7EkT6cEBBfEVXqV42f8B",
  "key16": "2e65ynvQ2XUCbVA48NiqyUhHux6q5e6JcHnyv15wn5f7RvYYEzZouaTsdxgaXnqkL4M63MK8ySqixDxDGbENRkNK",
  "key17": "4VoyW7JXWphxpMWMokKmFMELfmN7FLvLVJfdi8iSQgyC9bmfZHijCCij9Q4Kuu8fTyFKxGcynmskziWvvCefAWsk",
  "key18": "2HLAJyxdG1PjhJ8Rm5ryCQ7rKSmKG4vCjh37hKHpvE5izXVTrZsdyGsy5aSYVDSLGkTfVoLJ1HiqkD3D9Bdn2Ghm",
  "key19": "4pBVaokquPY2CxomJQPts7F98hdSWwaPtq4B1rHR4cbJtAzPC2hT4Kx5ogCefPpTg56c8FXJaZe76x9crbaZ72k2",
  "key20": "4jqAw7dd5mwgqUYL5LixFCyjAjsW1Njd3bNyN3xYMgw1Gr9ky4SMmvr5XBy16t1pU1NdD4SHCWgWcRVutVVgoGy1",
  "key21": "2jDPftWnFA7y6kMQwnSzDpz8rFPV9df1vywZYBeBs27DVZPnsV2HtyKT17iuiQibt5XQmhVrzN1WTeZVgJUgc2wF",
  "key22": "4mqRhzmNHhSJksqzsi7rV6ntet14mAoKnmRSDaQGd1hg5uxcns4gYGQeSa5yKQbyHEiJZdv9ffk3sw6inwrzGy2w",
  "key23": "5q363V9BMcc4Qw7C9VwdatQamcKkDtmMzCoEYHhPKVB3Yi3WPPjWwmWkDgNxaAJAYdnmWxSstngGds2cZVv3ykMB",
  "key24": "36xnipnKB6TvmDp5w3a2gk9h3VuwZuZheDPtrmfm52syptwnkC3VmXf4YSprgkSSiKVtDhK2wtyc13NoNRz89XiF",
  "key25": "62ybtw1UTL1om3Va8mybNYzZNgHMkvPzjicujQh9V5T8Vv8WqYdwdamda1J2ctCvToEAyhyyK4QVtV8G6E2gZSEg",
  "key26": "4vxTneqZPpc9mofWFRfXJkGNRpFbMpBAsM5ZtNYVNqPbLycGMHyncy6zoMbdbxzwUjx4vciMGmhYjTdJYgaUA4aE",
  "key27": "4dvb3dGQ56EJr9f6cVmjsYK3Swe3SPmPfWnPgoz8eZmBKGQKWssrfYisjDn73vuWujTAG2fksWchb3x9pQE7L8rf",
  "key28": "4qvMfmyDZSQM5WPwzxALRg4VMhcw6J5xDwoxj7GR2EjA3chAG9jjm5647z9Lt67xa71PATNTGRcChHzhwJqDNxCS",
  "key29": "4GMckKMYWoVVfjqkaZdquEB23rVcVha2xg5AfiE9Spmy3xVwRUM11bTCUSE8kHJmKkN8DQZmWHGt38czXoGrcTJj",
  "key30": "3MUFsprWXVgLo7GCgNTuFPam2cYg4z5qHEa2cippkjShhLV6e5u3Lvm789TE6wNRwadSUrxQhDaGyr3zMskMbwxt",
  "key31": "2ByYJXBHpgjgKMD9XPoMPUNiy9GxKJH3LoW9pbvg8b969oEqzveb3T8zSPvnP9e94HRZEEXL1krNXWMdUhHXBst3",
  "key32": "LEzyyVsRpEi7PDkx8GzkDtxZmFYjTNAbPnwTztKdjrEqKJoZJyHctK7CaW3iWUMsURETNWqL9YxjxTiVPGWF33a",
  "key33": "4n9Ss61Uj6haNk6GCTwxLNNWbZzGanuAysi1fVDnvDgy2jUhb8SUPJVcj9Yi76Q4WeQNDxTcBXYuHVwVudyqrdq",
  "key34": "2NrauhdWiqDbDLvGCmT2HuEAvXANLpb8U949WuA6ZmG6E9REFhWgd8hBm29KwYQwuwtZHexuki2k4GXF3ygkBuuQ",
  "key35": "2Uw5YhDP1YiPjcGRh2wzMZ54Rw4DDhLX9f3JycXPGZY7xaLMU1s83JXaqVQf6RKPyrQkw4f9kNR5cdCqwRa3MUUH",
  "key36": "3Cunx1P1qRa214RofwAqnyWT8u3tqoH5LBA9BnkYWtNDYduV2bR2q3KrtUgVWiSU9S9sVTjFFodzsFAsFSYetaBw",
  "key37": "4ksRnFLLR15kwdj8ZFY8jjGs2dofQpXMFxiDZDsZDhkYzV9io5phdrxazPFcFnkLxQYGg29krrBVVqTjsZ4RvdLK",
  "key38": "4Dnjymc6nhjWGyN7FXdbA3zdKbnL7VE1V8MYHcoBoP1AUAokMghqTciCs8k1j4VrK9GzwtR1GVUmm8AmZyEJyUh1",
  "key39": "HQ4DVQ7qW6AQ4NhQwEud4SL44YVCrSSC7vvRwP8CmqZxr4eaBZJjUNJZWhGaiZ1ELH7MZsiPPi4169dTnCs3PUQ",
  "key40": "4wKMJb1BpvQYoPtjfgVsPbaVeAWTyAXYudFTsKESj3HxhpUZVnEyqa1A3W4VM1HbPzpWEf7fRTyMkwDdsBeD1J2",
  "key41": "kMdG2Fk9pUEhm2Q9T3WpCue2Zv4W1qxo1rnnHDtUJ4VV4SsrrrdqezxxS3WCaZ1ocQVXt5hK3beqiZxs2fgZSEe",
  "key42": "2n466k78CaVRqCuJYqGu1ReQMbUsx3dy1m4shQwGNDa998BT4EzvNmPmKa5NrZJjh26KPjicejkQp3tF695FrT6G"
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
