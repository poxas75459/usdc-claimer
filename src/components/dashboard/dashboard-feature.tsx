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
    "2mehgS6CxA5PJ1Bj25BAA6iewqG5g31SixPyrMEzapvubVZXPmKEUQrusr1eFnXCVxXDtkCXGeK2cs1aFmmatwPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cnqf8ThuCXkFqPfr6oEpEJVo5ts7kfkEEbtiZf6TYB3qDm4Lg1qxm6LBWp7JKxFPb49dSfBhQWGoZxJ68qTuAyr",
  "key1": "25e39kKUzK8vCCDRuGpWNbjwbNPqXCVJpKo3ak7HGq2KFyr1o246VqdaPqnAMdyJFCMxCyTj5wWkouUs4UNiEL89",
  "key2": "3kW6mBYHdDjSCG9qHRFKT52oXmnpjrak1fnYrR7FuEn9si1fVPXZdU7Rg6GhJhdyXkKvf2TR6TciVphLPJKZjvFz",
  "key3": "5otVciNxiEQYWk8HgXbex79nwAPATptA3KLRFA3taL1fvp8a8HyDcYr8vroeBoycHXDwdruZPHbFwcD251VtRFwt",
  "key4": "37XDHBxs89YuLzB2gWwBhbUhrMyjxdsZRJ5rw4LPv9d9kitRqkbWPWWumbUeXa98EmpQyW6Bpzm9erdSx9GRDUvk",
  "key5": "2eq4Wr1fMbWHwhDocxuGVFvr5iHCRyCs3qcm7yA5Rd33RsvTBAArfvu4DDV6fQunR6hJmTxGS1KpVtJhZgYWLuvP",
  "key6": "3XofGfEudfqeSGZvtb1fayQgwCE1FMvW63huNiAaVF1opp24eipYAAJffxY4CU78sqM3DrfXmzEMFDtaV8dp6Fuh",
  "key7": "2JAaWiGLhdfhhafuzEzBXnvQ33uHc3R5AwJMxTCMKaR125sG9YdassiksDLoTrstJZS9KHv6aHVsfUsRipAspRAr",
  "key8": "2fgU2QEtoHdWYfKBssjC3TQ9qBcD62WxK1eoENQS9LpjniCcFivPUUfTZsaRjNRLxgbkCJAYpZN6CdgNUk14R8uF",
  "key9": "2H2qSzmPDYmTiACSq8VjApxHk7ZehJqgk8STWRZ3Xqnb6jxPQDjYdatoZeDzaQ9mL59zjz6T5yScpuXjHndttk5k",
  "key10": "5bzxtW9kn8GjozwCtypwYdXFu7Kr2ZcJ44YuwnQgdWQek6SZXjL4uWC85PYnXvWkBq9QJV4NT66sW8vSBoKxAbH4",
  "key11": "CzFkyRtubsQvHGWafdwudSPhs1nocpHo5ZjJpHTrTYKMdKRH5hqDcGS3YAYW1panuZK3zWRqiPLyeLVq3wmBtNg",
  "key12": "3cQ6cGiT6Kw4b7Luf1JqoHuyhJiQuztFXH5E6LyfdiNJDkV5kgXRDeQX1YhLYNtTJ5d3Sm8LdHW7HQ7hoy1t3Zo",
  "key13": "nCP2A44qhz3eUjr9hvNYQeLk9K5gQjUigteYSiDZYTDAwPvc7nvECbJ6QpajKXpn1Wcsm4svawAzGbFcdMMWYpv",
  "key14": "YrpLKuDzAJDzsn8ttUV93Dz89bwcmQQqtNJondReWuChpt667EVccQYgRzQwUz3cshNd593KE8dSkiAW6PB9o67",
  "key15": "BGmU6HUaH4VECtGq9wCtuP6FtUt9t7thj7dJgj1KSjPzJFHUBRzFWx2nE5Qexqn1FrbZSPqu5XEp4FtAtfPEvHF",
  "key16": "3g61jtYTukiDaAdJjQYPt3ZypQMDHRR66TcL7Rv2BqZy74jtHYb7MdG5V9f3AESvChipaze3NcqDZghcU12ijxmo",
  "key17": "3PgxTEVXGzHjXaAvSLMwDcfKHq6n46FFXB2LGp9EeZSi9A79dwqbbvNMue4BNph5L1uY6zUVS5ax8zfgDFci5G2",
  "key18": "55wiQVhBvZf7pcDFuPahSvmjJhAvnL1DuVZsXWG3eRBHEmAkpsWtn3jgWJwuepT3XpkaWk9Mzrr7A8VAJYJhGP6c",
  "key19": "4VANNiXfR8Gv11vAZdQWw7MxqX1sS8NPXtgBYBTHK1YuWFAJcjxSCbSoVmvAjvYtoGxhoxVz29nr17LJih8ZqvXR",
  "key20": "2JcbBoMCyeJnHqtYgEFMvrokpAtEFmv8E5N3XHmLxY83YVxN5wA2gm5iRgC7zKKztBmY5cPqXp9agw65TFSutAXZ",
  "key21": "5guMqnxSAaQrfqiu3RGr3sNFfQVejiADx1sXLDR3kkQQeNa7PjctzDU9s7uZAwf6UfxFjTqyMAT4L9z8tqRDTE65",
  "key22": "5ABYKkNtaRNXLNmQTKGxJKDQTVzTathD2JtaA4s2mfgNJAZxJCyGxGNbZ4MT9N36G4SNUTsiVJxLnNk6f3soZ92i",
  "key23": "59qViZhaSJWhLVs6fHz7TirgWdtG9FwSfN4Vt6Znugne5hCrHwAqNNRnbM8tSzhn9vnXLhG6DaGPCq6QUutujXNn",
  "key24": "5EcJpaPcbaG4yfktCHuBSszJ5zd9FmQi9X2eUj7sKKuzR742cuBd3ytX8LKjB2Sk25cNLjVtvtRUVgy1Pdfxmn8m",
  "key25": "5FVPgkEWxLBAv3LXozsDB6gWM9XtHam8R4trfXHxJQnwMiXK4oMZGVaRsJ6FWwHE5HMDrFrkiYsG1VmwejU6DAPN",
  "key26": "SrU9uLaRPcdAJzwvKxkTQwRswhgP23ob88AKJMNhavcAyVTFkBEFd5xVfUT5foN9kcphD2gurZcwQ9RbPS2yUVu",
  "key27": "3Uv8LxMvjjzrme4GNMM7M8HSpqHimeBNYtyR4A86YwCQ8WHRvs33zY6JwQsLATeUV8cngwcneNpB4j43dmJq9Tc9"
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
