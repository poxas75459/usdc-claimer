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
    "4VVs6fcwKWoDDgve4QoDBnznFfrCABY89FbsHK1nFiMKNgAt93MEzmTJnHywPrsKQF4dAfhMdopsKpkbs77KFRQS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B3rVizbwHPynYEXewxqcicNokw2BHmR1TPPshvJQezJkFMfzduup39ZcLBy359ieaSUcFgqHsW59YfegFcxECAm",
  "key1": "G7tzgTBHyJyJscoPTdsw3SFECtuib63VhReSydscXbBRcsyfkqVkyySxAFuC3aGft5KEdZGWzbxosphSmqxW1Me",
  "key2": "2HH2GQmuZYGrvs9VCdMHFnPLiDqKsHRNGG2DbGkYAtXseboBQ6a313TPJskLXrgRYt5YxxqibyrTE6BxNBreSzQH",
  "key3": "mnE8dieE4kBYsF9CmHzRKj1XyptyWfbHbDB6Fmckm17Gwp9XfCUveEUJXvLhipfMdZA6vQjW5cL5Xp9EcSUzp9c",
  "key4": "4nXEee7xH7cLSm5G431hDR2WCsNd6RwWdcyE1NYy38VRtrZKr9BDoRqnhQ28ufDHMUGbc2rLfdKnDHLNhoRUX2M6",
  "key5": "5PruoqouYEckSiF5p9dnhWCi3WRaDsVTdYd7Y4uvBr2i9H9uo4Q5nCWwUqqJpycbxtohZf9rxKa1CkS4YdgaCkLG",
  "key6": "3QMvs2M4UWP92NuhLde5esgR8kRcn65FBBu66gFwenJuWVZ3fPAQsyCqns59ToHAyBYmGTKBYrBREovGk3jHS3yB",
  "key7": "MaMJw3kcMKYgLBo8nz4s6r42KhSZB9o4PXUPZvcjBUCYg9gRe1snbqcKuMWecZ93fkndBD2Jz5E9N9jjcthQjCq",
  "key8": "5wh6mBhij7ujg2gX6i27JVgTUUp8anpumk33TCySKpzhDgZ4UgDcb6SwbCpwTvsusN9N248ZcxXXdpjg8LzwvVyo",
  "key9": "2C1vC2dKDGcDjyt1yqZxwP3Z4THEHGBin5NiYk1igVFGHfwKHERiai2c9LL7p7o9qZ4oCGhwv97pUnhbBbCuvMLF",
  "key10": "4Vr6ftJVp1vkS6Z4xYd2RnBvqBPDpLKtoUNGSae4vYx9sJM2dL1zo2FmJeMZK4LPHEZBDqGRM3cXe3j3Y8comb5S",
  "key11": "4FZB4tRvDpujTNyiGzqq8TVDzEvzubaB6HDP9ccFYk1nx4dFk4ZUYBtyYqrmonRjJ75eVLx43JD4nFHKwX8kus8E",
  "key12": "2tch7wbseBV4Vc6RdNrkZvunuJ7ZxeSR6oCeoEmLBMUZRTnr4eirsi7FytZihhY87zf8rYpKZQAL2myqMLpp7LnG",
  "key13": "3TndwGCaZwEeRk2AuPKWjczUmYvpaqdRGfAhTxGjkPNXHdP8zsMqkVKyBEeZbf9hqaQmVA3pnVe32Jcme447xuV8",
  "key14": "DjvunjzGQJxTn5GHxUfqsRPy12EwKTm98sCATLvSoPicZUQoutoU632tpdCRDGU1swT6cDKTsaJb18uUQmajXk9",
  "key15": "5YUqcesLg4rZEyg8FNvHGNpFrptq8DdGEFreyVpBweq3RgBF5sMjHfrGdQtUTDE96gjTH72bbnEfBpD3KZ7ENALc",
  "key16": "zqE3bKBAno5XZsgZwpjto2JVVmRiTH2ThV8g8E1BkAJ3SL6CBjwTDDNA8qjgH55ZNYuSkxGFmXw7be3hTTxTHN5",
  "key17": "4kbx684VPFQbrSto6RYRYS3BV8yZ9gD1mtN3KuqgYWygYxHYkfxtCFa6yikkEsbyKwNsRgQmUg5QQpc3mAD2zGRN",
  "key18": "3aB5bxocCjezY7uCTAdh1bRo7LHwir7py8eCAKZE4FpACoxUDEQkY9JL3dhn7CKf9kai8rnXxWfEW7qeZ6UKmbmB",
  "key19": "2CJHFpfEwCTTGKxcNy5abggztyAhY2XdHsGbKu2vuK8DYovi14MJrBApLDCMDvAyYP9xBx37WpT9Sp81eavhns6p",
  "key20": "26gMQbDRCGd24rzwevbDERwgE32yGKhro7VbKuit3hH15kwxpogzpxj8terNzgy3cJrpjQkT8EiUXRG16EyfsJF4",
  "key21": "5B4FC8dvMnnatWNdHcEf5R7QqdX6WdiG9qWgvs9e1rdWekbRZ4QrBkMTnGraPdHtUVGdAfxaQyn8an8PiDaESJKa",
  "key22": "28QE1ZBJEkkmS7DZyDBa2Fn9SyfoLeKc3ocRwF8scZYVnMACGsRUF3iMjvHzx18xERFMZRu3zpBAAgdKe6hZRLPZ",
  "key23": "2qhB5VisAcJP29tGQdC64VHzSQjy9jyfBWtogjQ8FNV6ugjnbEx6cmz9gHygJsa8q52STEoE3JhMiKiNAanALoCw",
  "key24": "4wxy6pHXN2rzZ7BVDnPBSKmEC2azK5FqNVVUjoGbfL36h1p5t3mdKE5wLaRkcsAN2MSuGRdHe6xJqYpsot3n3L3e",
  "key25": "5MenVfurd7JV7vS2fjZ1e9iFth59PkUAHqoWzqkhBTVmCtHcxLFnc8yNzAD838DHgUbFLku1wjbYM6eQvkDihvTM",
  "key26": "3PuRvCnLiXCB8nDMeKBJdDc2oxz8VonPcCqCd7aNonaF4M2FmGWVENUn6TLmw2B2JbPzgxeJgEPXvSVGdDJtghwd"
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
