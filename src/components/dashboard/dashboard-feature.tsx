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
    "3aW41T2xJnMnFWP8Q5tUCACLWanMccyyU9csbJsjWfvYCEZqftEj3uHVpVFEmwoFr14gzkcfz5CVWHAScKBGAEjt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uybZY4jV8VgYheDpQW8rmZXDAYmjbP8wkx4pRWGQgNXniw7BXRJZEU7mxffBipkBPe1uqW4msasq7gr93bcVb6A",
  "key1": "48aqxkee7oG9WNXAcTJD1L7ee8aAR7zGg38hzqqQ4YRJRn37TD4p6ie6vasTDzaHrXDdtVG6udSvzD7mdRT29rYG",
  "key2": "CTER8ghLcLYf9FMxjbvCob3pfMEgXnRSc2epiMjmPgw3T7PTF6qH3mmAWCCLx729RaHYPMikgWEcBtp3eMpiWKx",
  "key3": "3ZLXndwno49y86VyVqzeWjcZVidKKUqaGBS59whoWryyFLP6KhEKdGxWNrgfWB12Uh4kpF8Go8q6SEb4c3BeCAQL",
  "key4": "2mcnDsiZ2fAjzVBggctp9tG8q42GGpUjFQzmAjWGi2DH2UrZg8biThbTLVVGFtFGo1oiV2uMG1m7GecL9pKijMce",
  "key5": "3yqxVB31pH5dxmTAVtoqAwTbZ1ETk7go7fnkpmN5jbatN5hLXaRuZPcGWjJ4ecJRLfAXFCeBZeQPrQNkTGoowfWT",
  "key6": "3UeqUAoLCogu3SxhB8uoPZ28QziPnYEReJJpnV6cvhSRKvXUMeHxq52ySeSfBjb4iRamj7uJWSXxfdCuyLyBPhc",
  "key7": "4ikLqaoumY3Gh2MwaQccrXjFwsLRb7SvkKm2fK8vLUt2aNg7CtqoaGBi8YMjwXXnTzpDUyDAh9E1MzWBAQJ5kSH7",
  "key8": "3x29rkizrDALpJpWSmVoZka82jYQGc1hQnMTDBhR4TagHNsFY78QTudCf2grZALwbozqroFxvUrNMR7QcBgjTokt",
  "key9": "5nNyGbBHztdYNhYT7S44mb66dpzotnPmBWcjDxdidmEs9AbraLqfGai9JuCecdhzj4PccFQKQqvNAyrwY2nnWyJU",
  "key10": "2Xaqsq7Ne4K2eHg2SQz6KWgHAZmMt6rzAofjJiy35919MHzmsgtnfCfqmxsYdFs4W2JNR5LBmbfgUCYVj76xNGNh",
  "key11": "5gbyxqb1nWLmfWw99jQ8ZcprqNDCqeHNcWnyrCH3yniZARNdH38hENEdjQ3MaKjt7ZGfu3poKhmJKURvDGD9VAzD",
  "key12": "XpEG8bKNfEr6MDjVekAikJRwBPWsjNBiBzm9ehafLmTf8zsmKiyXkjC3LgCfKWqvb9Vu6Gnt1Cb5p17g4vX7CSV",
  "key13": "3KhQBSfBp2vZtjcmVkaYXGcJQMjgq81T748DLpmvXMVjirE6M9SuBYD8aLD5CE8RqGzf5zL9xWLd4Nw4S71QsckN",
  "key14": "2pv9y22JSp2ZrxnTk8pyi3n8b1cwpaZtoPW924b31fEpSDUCCLDoHjwy96kdpXaRbhzcBM4SD9tXQxhkhkv4Q8fb",
  "key15": "jaFYv5kGRSPH4Zs5adUJGGgo81PL9nbcvTCETuLekUjCKMfqwvZp1D58X5hqLzFFf4HpwrYCUC25s4rUYzvJpR6",
  "key16": "23g3zw8QytXV9yY8K3DWA7tWHDfn2bn1vqq4AV7D6hzt19T3buJVKGyTTcmYYMs1DFUz981vvxrUFE3m8oWMC8nD",
  "key17": "5yQvANPS8efp1XFJg8hFiBqK4CUkxLzfP4cwLFHStBhMZLiD89wPzL4nkUEgdAmVhuTnSyWvGcNiFE8UWrt3Cpnu",
  "key18": "5QgLHW6k8UCuL9d8Fo6tQXhRQxWX4rTjoKV2sxyE1quSjuSwqwVi2Ry4EXQrcDMUpRba6kXhzgccHDoM5WVugnWk",
  "key19": "37DrFypw2WNEz3Va3TnjnnDQpR23tRcTougzQHd2bBgsMcJb6WfWpK4mT87yCrs9q1SWJ7KMKGtQefRXVdDT1fjs",
  "key20": "2JmBDAopCVBuvKsqaiPtqB5ZJXN8ZUoAqaSpfPePV24vbGAW6hwH7RSi3xK72L94b4uyDmh92rDwQsXQc9U5umnK",
  "key21": "4AqQxmV8L3svzbLDjC547vsB7aSgGhfgjntUB9YcMBFHTc4p6pzACy8y4dbfb6b66LDg2eLwVfXDWwAyK87sp5Ad",
  "key22": "4ae22kAhwuT3QRhZHgfvbqYa9MCUxmYyJX5V3uawJBgefUDNyaJ9uJX2zuEzKEb5Si46vhpgnm5HGPGBWC97xwPm",
  "key23": "5nz6STwH18bsHJ71Yihjh3fLxkeBvZjc5m3bkvdeBvadYKHjE3W9Zn5jL1RPHRY57NfWMpD2rpbPLXRxEkK1DvPP",
  "key24": "4dFXH2oDBeVsMisSh1F1Euc8hWRiWNsRyTznSQ8d2qEjUsT7bwLQcJ8wVTX2SsjvyShjzqcRp5k2rBrSWevkv8gY",
  "key25": "2DcXAeSoSvx9jK71e8petHRPXTNskM43uBbvkHX8EkzTWCLn8GKCznQ3Gvpxtzt8ahx8tcv8SSJAqHocP9SnL6JY",
  "key26": "4hHLnGVxAsJVD7R7WFLk1NUhw5AADpGD5fKUn3zkLSgdBX9KQP1eh8wyhXQvca43AFh9737xTDzKFepTjj4fpW3b",
  "key27": "4GPVT8ShjHV2DETY55AsDs98FsEu9zC8jPGUVWpDcb7mT7ySevs8ZKRL5655EBJqpYKJ9zf9JLqhQrYTpVNCqhY8",
  "key28": "5cMqNfiTLbNCXa9Qz465pBnL8jouH7Hb8JS6gktrD4Q8zhXuYV2WU4RcrfEWzTgBCTGCiByerm6CfCYaH1TiLPhF",
  "key29": "2JJJkoGV8SwTY3JUtmYZe5FPnPM7BmwmBDUsPA7BapTxEEJpr4S2mZkMAbLP2iUoHUuvEVQkE6mnG8FBcJXW193p"
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
