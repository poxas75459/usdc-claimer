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
    "2jKQ1MECs4NJy5aqHKYtGiVFzAihpN5DsMbLbsBwMPD6P87xMxJCF1W7HEgzstWbaeeioLgqk55vWNjnwZF9Cah3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ktb8ZezuFTBjBNgBjnM3xda5MxpTpJSf5Aun4HH5zVSYLNrBtmZ4A5w3vw9Zr6apNac4qJMkHc2Bkh8GFhaG81y",
  "key1": "2kjtzEFfTbH213xCWg19NgBUYZPZHxbG2ESFiVBPgAUFbnMzoVPdLNkc9ppSqFjLxdv6sqAhdD3Ab465pMZCfc1a",
  "key2": "4rT73bSDkcTRn5FiARj5Pv5Zfi43bLaEChnP3tnaJWATyD4WHTPH4sA7WVVDtQLr1b21SPuWzS5RHmdHfQA1Y5a6",
  "key3": "4AzVqG7sp5qFLnz8WNysizANBNFxHxsNcpAb1CLtEP3yoxcLndYtj9YME1JV6pJzkn5jZF5Yh6KVW8NYpMLubB4L",
  "key4": "67ckRJChXrZ4R5de8uPdCWoL3tCWSUf7cBnzA4oXNFWKttGaRowyYuMU9B18JunrLPfUbcZyHQmEfYsVMy7cWsyN",
  "key5": "2jbate7YY7jsKr4BK5fy4wL6VEJSvu1ENEYBoP51rvs66GFoW1HGR6ZL6v7VBpmbpyX1HhxhuF5mNA2sF61y3tqc",
  "key6": "tekQ6S4WkqBpDdauqZYFWKGqB6x2WCfgLUgpgYwQqnEqkAPHSxiyQ9QZQtaw9dVwpZ2yqQssEtAjYF7a3zv5qXG",
  "key7": "4DNX7D9iuhgFtMNjitR6HEbkP92BpKhK7cj2TcmkrYECHCa3rdm5FYPbYKrYBTHW5a4NVCZcf6UkqCaKqgmYSSPk",
  "key8": "3CKcEGZXXrFhn7QYgeKojfdLDGoJM8poGcZAtGjwJY2ufG4wNbfXH8MrhuMVoQEGK7gXzCAKURsFN5HEftimCPx7",
  "key9": "4255vz1YtWYtDdS3awFSzDUTPkjXb43Khv1Y4WpQEfHbBeaFznm8pZAARjhTCmTxwtZbRgSNVJ34zh5j2SVUGQtL",
  "key10": "5bsmmz7pNac6yy3ybguKSE6bvMsmJRyPn6WeCt82sDXGPpfpMwqBC1Uuw4P72771PrQN5CZ4wm6YZEmzWw3nvfoA",
  "key11": "2KgN8vNPqQBZfQKhcxRD3rJhgCkN6KAK37vJ3wdAwwvDBkvwsK4LU2CE6B5wPpoWZgHWwohJShDjSws2xa3eyALi",
  "key12": "3iPqGZQaj7KYPcSj6SiffJh3bGB5uT8ZY7acMdMxcDYuPHrLXNdzBSGUncHtetmCfdo73wXTtz7VaomqTLzMu9vT",
  "key13": "W3Nz6m1NTrbPbrpKFEu7fLL7VK3Hm8ZPcg99FDVuiad2qW4DZNrLL16115kwwPHM5WhNXtKkqjN4H4d3ff7n78R",
  "key14": "4178jqEGd5y9DnMnjo31NDEvfuihghYovVtDot5BC1cSWuZ1Eajtxf2BvkwGymWZbLeFFa82fNv9Wg5onkT2S9VZ",
  "key15": "4WmFhjpMhsowvHWp1ij9JpfNbhgLXdcaQMhKiXYNcasCrw2u1ogK3MJ6yjTEMBEq1gkCQX9fafm8h2zMV4AGcM3g",
  "key16": "4mWCBYm4siro41vHAozYDt2CWjyDzDT7Rz4Ub5s8xCPdd8tG35JSVacYrQr3Ev2aAH2nDi7VfWx2yyUT285d7ysc",
  "key17": "2B8QiLRvU22ZFnK9NHMu2esue5WLeSCBcw7eJLSfeTNMeeXPqfPc3sTnSjvQdTUazpaHSJBFV6yn5t7J42oWgSe3",
  "key18": "45TRoyeo8Z3WPBuTLcWmjXG5QdwTsZ66sq3hbnR4ytUstxJpiSP1f26ugrei8JYUADY8vNEs6fhgip14TRU2ypMZ",
  "key19": "3tNNEoiXSqCPX5EJGFPuTAfM5vzbZn3HaZqqnTy1oofAz74NGk4qAz2p5cMhAvXYm2zXbao2LQGicfaeqatAoSaM",
  "key20": "62nhM7M1coPojAbeTSi9pp1XqQDMVWGGMQmYshAeWkYRfFYCaXnSPudagQNqGpQAELex4rV62GNkuQyXtLw9NPT7",
  "key21": "5ePhB8hWq3dx2yVEirpN8sbHxoivAUnN1pfJqqn2U9Ps7obrQpS6Ci1E5bfhoZKV97Gt37JUi4cGeHFWiKXZfoLL",
  "key22": "3KCYFVHEPqKLf4iw2dW3ZTG6v5ePwAb7sCtchYmoWURdznTnTAyW6py9ezZouhp2aZhyB5V4FwMsWq1SXGWD3JET",
  "key23": "4Nn7k667FohYVVwWvF4EQj5bytF9iZ4iUmSjPC6MCWm6L3V1KQyUjMDNGVYD6ctsALzbpk8kcyCQgch8PHHoko1b",
  "key24": "5AGxpYu3RY2ZmEZfdtM1yHjfeusKQyiQGbpM8JpoKo9WNEgZqaAqrp6TVRBtSLiQPYMWxtPzdCQwgLpCJcsf84oX",
  "key25": "RmmipoXVBMVpb2LkLKDsUWE8as339hC793V6XAvbFJik1N4WhQrXQRWzNLqTJYSkDe8mjzLbZanEnKTdQnxmkSu",
  "key26": "3PLJ7PczApmeAKrumUtDKf7LiUApkmbZusUfkWWLSJFfDJYktVm3RT7z2wzbVatphGSoCccNZgu36dkT6dWVm6uo",
  "key27": "uvSBqHPE7jZuNVETx7W7kChrVzEYd15csAj7Rzgay6PLEN9KZUXWJYepJP7scdbkkjXvgpN9jr1kUVDmY6phkLD",
  "key28": "PxtTjRNsiZocKibs46eQ3izgaB2AJQ5PycGjGakQZ5zcNBm8Porwmx4qWZKeYW4RKTwx6ZQA4DpNxtXKNmxyueu"
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
