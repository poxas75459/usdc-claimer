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
    "nF2k1ZDSaFK8GifZAcS6FyPyyBHwPPbpShQuXk2ut677oNnyTe6n1BemHUCWzdWr4fd89SRGoqXukBVxGoSXY7b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JiB1dKviPkjzgrviEX1FMAAp1S3AX9gy1kkgG4b9REJJsSf79QBCoCwGrYnisdNAAuigKCMzEDhM8oLtcjDcTb5",
  "key1": "4hrjMUdTSSjAScNJ4cpoZEQU3KduPuCosc6JSRJpQ2BgXZ8euBhH3wQntdjuyh6Ugp6zmTWx5sxLJbxbrGWtt2LW",
  "key2": "5qzn5Wp2fxyh7k87QTXpVGaANrBv2coJKaVpbNFBxD4ZrPd3ShDCStSNorfae5K9pqLEVemEqM5roRVn2J7rKYnZ",
  "key3": "nthm894As5EayqvFUpWW8AYqbSg5giUYvAbtxp9jW1r8GRZpWMFpB8xvZAFtDDYcC9EPQc89XwFYB6i45SNv2kY",
  "key4": "JMA3jte4TLMCn1kt8X3BEidiqN6kUFFxJ7zHg83oua3XaqPQP5nhjbA14hyEYZxxBK9FF6n8yk8mtB2K3qRwMW2",
  "key5": "q58QFoQ2x8Ft3kXngXL34sKJiT8zpaFCYgXbdf5cT1k3yFTPfTPh2THQU1dbJxkVhSyUuhDTQrUsc8MvTet9RrF",
  "key6": "2MuWQvhnJ7sniE2PCWWZgH93LsSvSEgnBwdCJrYMH63SD6FWsRepzq5DDRobY1Kww5HwbGJjiinD8P1SEXmdkYWD",
  "key7": "5LbXLwU2Seo7ASyweQpnn6VBzDXY9yxpEbkE9BmcaueHXR4x4GfUaWCRFB99zHWKeVTHTFtyswE3bvt4WBxDpfzX",
  "key8": "2VuZKRQZ7iA19d4MowzsFsVDdDCnf7Y8oZaUo2j71J9GPzADUA9GHRc14UGxxt5ryjN7C6Yyao3bQKMVNFK55i1C",
  "key9": "FgXMAtQsjVNSvWCtTLJZFdsNUQvrVw8rUZJHeaX1VzHXo3bVS54feqrYwSmHuCjJ3kqKaWEYSS8CELga7YtodxG",
  "key10": "2jFEGdcoxJqPJWj4pS9bLTowxrs71HifBUffjCKXiCyVxq3RjqHjymwbEf6w1d3wbaQJ77Qp6UqrLCJexUjyp8z6",
  "key11": "3PUKAqgFiDHrP56YTsVQGhKXcXjpvw928hT48XJF47RahrSYveYZmzQ282K9FQmfp8kUJSn4BW6sKGrs7FnTuzw4",
  "key12": "29FXYxCjBxSFiabRWnKhconoubYtMgg3AnzXdSB8Xrhkasf6YAjN9NmeBKh3PEw8KHHa7sEYpFGaCXZ6NFDiXrER",
  "key13": "222ryArEFwgigRNtYEmqTZ8vN4iAbFd4neqxqzw8UarX7uTLVQtnkLhtbn5a5x44aHinz4ZA4phyeCYn6PD6wHuk",
  "key14": "2V96dQJXZaEKfq4XXK6CkcH21WjsMr3WHvWaZ586tayJZsViixsnn6nTwZPf7tMkJ71tUVMNo7eNAeBW75sQ1X5y",
  "key15": "2xbWPfSJ1qHtu8qtKDnF7p3Xivy6FTMNT2G25YauVeqYVkQNPs6jofgXRC2wFd58wwZvEfryo23pKGN3RTVCXjse",
  "key16": "5U4VKUJFnY94JbKC5b5A4rqaaG4vmXT8DhDHXZqXdm4AVZ3xE3iUa8eh7GB3HKRC18hisVeqctvzwsac6Cp2QKcP",
  "key17": "63YDLLS6ENiFBwK1i9x7FtMcZSppjMtgNMRKT8VfAPqw17m4V5N3qSormBgTBRN83fYNcB7XBACYYdw9kLKVmwb5",
  "key18": "3gXAdyATDt1gLNhNKN2fNvChgqmiKncbayZ4tLs54rF3gM269WEWhVkqYThFVbX72QrRKnQ9dmVHZEqq2yXAUnSS",
  "key19": "3iDxPwQVVBiofGdTC9MxbTvtf9MVPkbdrzx42zXZL94EU84ayUz31bNV9Yn4uwGqw2WpRtzieo2Jp7FTCpbGW8B1",
  "key20": "5bySRn8QTynMoTWxt7q2AHVQt5pWX1BtRqW2tzxV83BkexYaexz1pZF2n13AYiFkRiTTQZqnQNyXgWSiCSLC8PVV",
  "key21": "3ABahrXpjBkpkrw3dUPYUKXVewrxHn6tee8LcxpbA61TLFecpfpik6Z2JeNWiZGfcy4yizM81d6tfpvrGdYHJ1RL",
  "key22": "5tadCPqc9A3p4vST6zfeTUtfyuv8Z8DspqP5JJBvkFP3RTpLZAERpyQC1DVmFTMjtGzZJuPnBSGWyZ568oUDXskr",
  "key23": "5odrm3rxCirbMHmzGAwXiaDSpWrudnhtqQLy5EDRCgv7fuQKkcTnGG7df2pzfE1tq13GoV6HXYofNWRU7WU3Er1J",
  "key24": "49j91tDFW5fM13KeGVBgBJoZzVW3Q3iwtb7DHVsofrNAwuLrMgVGUbeBijHQn79pCTtFyPifZU23xx5PUegWnSxS",
  "key25": "2x8UncQn5hQDgGiYDduX33pQ6SzDjuU4NCrmhBsmNbxG2GjcUkH3Qva6zgwNPWEB4HWeAfJpdqeRZV6UrjJLbEhT",
  "key26": "3wZZydVBrMdXMA52d91DovkiUQyU47MRwNwAUL9bkPzdhnf5SVCXEGShjV8XBjz9wRzB4xgEWwT8aGT7MjsDzA5g",
  "key27": "3GUPvv9eB6gM8BEbtmYYVjXG1DcMp7tskgKmMXzYqX4Nm9oEzqvTTXdU5cRpxSbb1bxvcoNsBAPh88RdJjrkmUdZ",
  "key28": "5hUxBKcyCM1qVfxZ2237q34Mv9d6vdUQEGm3vufnrPA4oRpCmSF5T9puAoHiegjzAuqTLQThK21dZZxYzRL9A8TS",
  "key29": "C6su7ksLqHgdnQmF3tRwFGR4tcAG5rGVgv3xk6AGG8M9aZHvJkEKCEcdicGFcgW4S5ALYAs7ziDVtnZjiGhb1ow",
  "key30": "2ezzSaRdB86KYPhXHGxDhzHF21HZdfFYRrSgYq4Ucu7d6HwmU6XzB9Ztnc33bXttFDahtU3h6EFR2guEop7FdDBx",
  "key31": "4iwRnwZNp8z4mxV4qSM2Y9m1cCDW1STPbmSHAzyVBqy9yRQNsMGcvdAnQEEEx7zMfjBXe51Rt4PHf1H4JtQdThzP"
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
