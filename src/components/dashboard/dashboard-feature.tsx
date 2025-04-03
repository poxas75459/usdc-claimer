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
    "3j4XUKu7CmL44EjWBQio6muzP6ejqipJjhScWVk99v26URpammF8HX2iSi5ejeFFRV3e9M7GLhsyLjUZ88te7Wfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ourYGNYgn9dJNDobc9317tVrJnGwHBdzFtEtqTDLAkmMqLeSgqDDqBKxuPJstLLMuRPHmQHoZFCykaUpaLyejZv",
  "key1": "31UVMHPprWrqFbaAbf43Aeoq6MgApsgBa8zWyMYS7smdufAayhG2vC3gKPguqR2Uf5SNdYVSjyS6s1uy4ngM67gN",
  "key2": "2yKn7Ac3AU9kzwTomjUgCWEBomnQaRwtYDB3kFCykPXQ3DsUW6c3zrDpPbvgYp5CKw4KXz141hqntwwSa7RaUpqB",
  "key3": "61UvcShLew9ptxyn6E5nuWZbcapsWb14RM9hVSLYRyuc2bEm5v5WJ56r9i7JtD1EThd3cvL9u5mWBfbWonGaLTJJ",
  "key4": "x2mGdea9TJo7w4X3ufEk7CsoaUcN7Y2d6bEzmhPo5ArvqNc19kdzXGV497PtBQurA1GcxjtND5HSFkzczPCJWfX",
  "key5": "5kMgd7Vy67FN83XAm9HZTf79TjuvJqCzEUcTemqW5nG4mpvXM6tDWzvyPrNKjrDKmVpCAquBnegqkJh9aR67xowk",
  "key6": "Nf9VQU47RbcjMbk21pm8KJx7UMkuc2NdhWmS74PBWxTzXPPPfmxhH3DJxXNed8v5nhKjAxVHX5GFcqPUen2w7TR",
  "key7": "3UNdcD9fErCo8ei7N74v4TtZY7Xz84PWx5AhwnuDa4jtCXiEFa3Th5MsbiYK7oZrivunB9pqHKquugQW6u6QxDNg",
  "key8": "5NfrUGapHt26AX8B6WfNcfLCMeGwPFkyhXHEJaz2mzMVYkNtzNpyQf7Y8QvBDbg8bWHVc5wZp2uwCLVKSxgkdwuf",
  "key9": "35GHuVLfKUAr5RGimHZE68RSzLpre65tMRtTNiCFpF4nmkFG4Doa6xHMVhXS2HF7tQDLrsvc54mo6r4BftptYYK3",
  "key10": "2w3SN7AZ56h8p95VuWeT31KzX3zkcw3xKfoTAeTXExsJKaLXqyGb3FFLCkS3CGQPMVdZrDWm2HLKmK51D9rZZ4yf",
  "key11": "4crddaDZTEvSCATLsaaAJ8cKYQWZMnL485zaAG5i79bsoATgBbZu9BvhH4t65GyD69wx9EVt8rPG9Nb3e8ESDn7C",
  "key12": "3KYHhgSeMg2QptkDTDYw2okweaZwL9FhymfoacCVL2KWRyCKxLeo5xQiyFC58fFRf26USexqjQbty9beneQGf7md",
  "key13": "65ToLveDxRaKSZMMQkcXBGnz54BrReLsUd44KsGDa71WR8uYUT1k8WuWoaga8RAXhXebzAfNuTvg73nibedR9hAf",
  "key14": "23kMrUu2QNKb7LSeKNfdep6U15nA9yncUo87sLwzSyCASLKTTzxGZDtMVCYzYN9KUDFi6sMXvw9pcd77MopqdYEA",
  "key15": "5N7tJ1NxYNwFzr2wSSH4BkYFqs8DMBTJX6tM78drKBkta6MAR7oY8z4vKvdSWLjRHekgQzBjbyYHRJmdF15vmJUW",
  "key16": "47GvgGp6jK2343JEMUi8T2biPdYbtiy8Mq6rnrngLDvNHJf4fVcZzpkNh4YbLGZ4KDJmkeCpxZPB7gbZDYAx7aEi",
  "key17": "3ot9xKvDSTvEgXLW6RMHet9mJRYAEYeMyV994k3245rLcFEspdvUXWtz2VbsType3zFwVu8HUJgZkUYx5dEeKUYE",
  "key18": "3q2w3NMxfvGb2RhkE4PPmendUTaYggmUYkSZ3sEypA5goAhGYWLX3ZaGkoyL2Wff2zE4kuVEiVmyWQSfcXzV74Y8",
  "key19": "3FEmiDfmWu4fYYjK5kStZ7eRNjx2croGrF9YumKuXzfNv9KhYBs5pY2enWEown4CJ4ys5CkcRbEkVW5wPbWqGqMC",
  "key20": "AQq4sP7sAFZTGSoBTHjRipebXWuoj2kNuKRWP7wcb7hKpEZ5QJ6ffpCRJxXqNm8JgKNkRGFYCoAzrmoY9zwz4HJ",
  "key21": "5igueZjAAcV3gCeNNVHtoFtJoR1KZwF4oRaUGNXDoeRxuy4MdeP28d1BKqLzfcKa73q85UyfL1Y5iCP4pzuqrVH3",
  "key22": "4r7DK9GgbnDpqTjY9FQs5K7TDTQzP98iFziLdGcJHNLPzV75JjdYPd1NuDRQGJZFbsgerTKT3tLv3UsyVQ5FerFj",
  "key23": "SfxVrfr25EX2ahTP2awr4D2y7eo6gJnBB44uBL7H4EcUcaV3VN475Ey4CPif9QjGqpTF2wrijrHFWLEYscK2Uur",
  "key24": "54QpGBYxSGbCFi21MaKAtnASxU3rxC8RxSvNxcP7LDcgrV43n7vbW64Qp2xZgxndboML1Gx4AC4fmxtG4jJHU8vk",
  "key25": "4C2osCMtJQWVXkroYKVchA4e6xPenqz9ScSPhnJDWbyMJa6NtTERAMSLFiu1npmxqaCYzEyeJwvvRwY1RjGXzp8K",
  "key26": "2c5xLoNFsEoWkaKwEvWLLe4FESQnU5cagCBjPL7DXoFtfmqZ1A4QxFD1223K3h6xKFZcSgDZD81mcVMVmYLVa2wx",
  "key27": "4CRTMpa184h9JdiJL4Kqaf89NoQ21j7ykiCC4j1eM32XN9VdtSNppDQ3V2NszitoNZyLbu6F6QJM3NvKPjxvYaKM",
  "key28": "4n1K2RebKKHhwzz67U5BiZVRNySx6imFyd29QegEQ1AdPsGsXFXfqPLvCTGF5q28y6uq92b7uQRQAzHnB9dz9Fye",
  "key29": "57WWJDFoqYyhmxjpTXzHLMjBMmpULBrin9jNWHmgLycBw3B8HQo4iGiqMJWTeDkFrK3erTGhqKRoQyu8oesRcCNE"
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
