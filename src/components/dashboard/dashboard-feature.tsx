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
    "7XE2os2PQDYKd46UwPW2w3QKEwT5XhXwGcJ6zvW1Q7aNEqFwoJ3CS6CREUiRDjGrCqv5w1TDCMZdeNCijyR5sQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oQgEpg6NnDhsyBmi2LxPDxGE3ZfSV4sy9KgaiRE4S2QEWhpKX9V5h83qQE59TTq6e7XPwmmKysbUg2jhdb4dKPB",
  "key1": "34RjznjAVKrXTfK8xYH3q7D7WNiRkJcp5MZ5MBc2hCmBEvWSTtHorXwhqcKnhAaWCPdTP8csXbDfDuvrC8T7wwRY",
  "key2": "2TPb2i6JukfcUebq4AtspSKi1fMtwoM4wG1dnaJyvX9JVpV54D55h3zdc56byqEvGDALT4TiWc2HRD1NE5FSKH6v",
  "key3": "VHasQeSa21zDy9RrLNxUMBLt4UzfyWS8AheAdToWVw2foMKPNdkigp7CZYsa3FpsgWEoD1bgzqfxDDSDaznuYL9",
  "key4": "5YFhZh1X5iDeTHX82K1zUaUHyrNRZX5WQjzNXeXmEow9B8DXdy4nMds8tZAX4DT7kj2ixxWguEJFspmXu5tAUD5v",
  "key5": "23ECuZrgZ5x6kDJwPtWWush7KXn8sJ4YDGTNK3b2MnKLo1XzZzSMxCaJxd476sHVqhuNzLSaNgXTSDQkWgDLNfCp",
  "key6": "DkBC4m6B2bFJr9cDZCdZKxs2XMdkupQUic8636wu2JNWUBpEvuyXZxaoasUSo7SfwZC5EA1MTnDewev534kUkku",
  "key7": "5hB7F3wEuZM21c9j1sxVu3pCjGHBdZXPT7f7cXDe3EUKEbpTnt3uzS8K1rydjewT25GLU3c76ZG1pxFGWP4go23o",
  "key8": "2qzMoXypQNReCeWuJvW6AP8v4KsBSKHeeLDEorMTMBHSj5FGWAj6oWVSC4ACfUhtp1iPgfHN8Ms9f8yqhcxdW1aU",
  "key9": "8pRtJZU3L4EBjeefhTdnLjkKLVHMs9h5DQei2MHTtrxYwg81B6JrJMR4Jp58br3FpFVYUUH7RXbqrFsRPNAZE2n",
  "key10": "3QD7aiPUdgymE59gTfvzQwxBxMHugLi19HN9vCi4nTKgAp4ZizfkqCdHjDVECD9r5VXJfbxkWqkkSves3gSKquoh",
  "key11": "5jzNYsCvcCFv8R7DbLRbyMqaw3Uz7uqzxwhoihWQX5ve7hgUH8RfQxgSXd4xhAu9yrXBHnBBQH8ZnPHRWHrQ6KMs",
  "key12": "UYUkMRm4aUcbSkoLrD5BGjeirUzxGhpoq8fepTHEk2L9WN65yvuPJANh1k9dFz5oqYAAvddvtZKMkn5w5Jv5FJX",
  "key13": "BNiM7sGWU5kgEeai3jQv1uBLXNVTRKhTPnNoWHZ2oUx1cHY3rDa8FGMwkeiYHyz8qNTwZFJYUnW1BPJUJPsGVfo",
  "key14": "5BKsY4DZxhqcMF5PaiUhvc4oHvqY3cHx4yeA6SRg2PXGmsBTuMPHZrGLbusZBcouspMiCquPgWVGse4YaqFN1M44",
  "key15": "4u2Dbxgy9aPkeYMe6XsHSDfAZ8uizoDoRTbgrnaUUjPYkxSBrLrz5apxtNyjM9MuaEJFGSj71cs5JYj2BtU1GMeJ",
  "key16": "3EK7Y8MvnuomGuvZkw8P7P8BLNVCYTFWF6wiUCu5iqbExFN8CQa7AafCoSwzibg9Tnj69GJJdt7GTqdrCoXkDZtH",
  "key17": "3VgQhdikfACwYMvgpvGaoLbbunYYvtn4VnwgdPEFgU3NBavSB48gTYPuDMn5EMCWs7KhCV1GtHvnXHcgLHNPPnKk",
  "key18": "4jum9Jmmv5u2zv5RqAomn6q2wQXUph6G6h2NqsmWWLSMkumnX4ZQBtHYF5dn8HCYhTK4ue5VVNqAvxfUKc4C5mFe",
  "key19": "21y58hgGNTw7BvGiSZNSKyaUEhRZ1QZwtGystEYATrQMhqE319H397CGmRtqJiUWCTuyYthbjcxgnqdK1tVV2TGc",
  "key20": "2nNDnopF9HbcAMHdSuWSwFCaHWyastVDnDQvu5ZPqfFT7XzxbzR6ZsGNbMHmYMTUN6yRoitkAWGMRjZEBPsWRH5S",
  "key21": "2dnqqeoqKHbRMo3uVpjq1eHuhzPM6avF5kst13wbx6bZJBfiTifzMrhSQDrn2jJW53CziB7BheU7bUFA7kSJB3Tp",
  "key22": "2zxYRgmLS3p1RcFvPp1NfXw4MMTym3Z8Drwuq2BPA6qDu1qdoLAJdqGC9rNWVfoQxZpw8WSb8xa8waq8wQEkpqqB",
  "key23": "4H9X8YqikcgjDVUHi4F39hh2EAQmy28cQ1xqCKpbpQ7bsrfh8ZbzkJhKHAQLC9ytuMr5Q3FdWHRdKi6F2QuPwGQj",
  "key24": "S45QKPrrfQMoqfzmSDvbpWFWP6Xv7FTTLfcr31BrsBvymSkeE5McZMCCL5QaJqhGcjQRoZ8ZxJFLAC2vAB2K3pb",
  "key25": "JCbuNTbdwLC6XoRebf68ivbt7Dc1729VoDdGnneZAzS8oiMGyEJei54T28EukCGMtvWKgr9SdnF9BsHVxT1jRp9",
  "key26": "4djMSRLRso9MKznb53Xjp2wNT9eTcq6MF5DeKHy6vHjMuicPCKfW64ZiheTeqhZBK4ERnsKbSw9MdoUix8yFUm3G",
  "key27": "KDPcFeoScztjrvc6AztZg2MBsEjYrZoPysR63dDJzwBiUCrPNjBPZJtkZR8EuyxSUr4g4NG1R268vVxJsQK5LXD",
  "key28": "4hHnkr84HGZx9y2VCay9mw1CGw2Xur8ZvdtT5huhvTz4dimUQNVgLqHUFQA9z6Lp71CYAgRNDwhdaPKY33cvBdhr",
  "key29": "5ow3Y45c1gtMzTivVJpzEow76JAAq91YTTEjnh3PJuDFLA5vb6Gww1Xi3HAvW8oZjGBBQWZfsF2ZQcbQZb3uxFV1",
  "key30": "HKR4wo48MiWqLaDFYektjwJ9jm25VmDkmVrePHEFoDitFjgw1ejVHAcenbAFCpMtsqTV7pXqQwU5ZkWAmNpUYBV",
  "key31": "5RTxXkUoiKVozRY3S6obqjFgtFETNL7PX1wzTTMrwMkZNsTtndnZZSzyT2tgw89hWaPm3SqauxcvrBZdXE9LkG9W",
  "key32": "48suEJGa92DgfCsapFpSMMAWdzVjZk6SmmrXkcqfE1xEZQqdzANdRFyBfJERH8enJkq3RSNUTmPVF9fcbvNDmtWt",
  "key33": "3daWdqfpJuos4bYuWM66vabdLRwPiC2YVPaNPBbdUTaoRmkbRu6WzHVrDtf1yrM3eC5VrJuVVadRrkcu1YVkw1TM",
  "key34": "21DMrFZKv2ZZ81abaFqumnxp2DGPhNr76FUyFgGrAHqRGxNrx4Y725MzXa6t1nwvgXVfe8xPsx3j4wPjdo3raRJ9",
  "key35": "5iY5zysSVRYY15WVUUV6MHt7vytbkRELf5fjK81WD6iAj8qdDH5URc8fbMoUk3fyXxYKCkPkmML1yUMPa777QQg6",
  "key36": "2KaSN72yva3yUiXCWGtdDecwWb7HMN2cMS6Mx181yfkWnokdC8kyVRmovo3TyDSgLkovNE2imNvt9SeUhycC7Hvf",
  "key37": "iACo8QTkcFTAT2VoJtRaN3BFmRtnsKrczchiGNUKJYHogMzQvzcbzYtLarfsPiojPFB5NLBKx3idHy4LzxqboiV"
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
