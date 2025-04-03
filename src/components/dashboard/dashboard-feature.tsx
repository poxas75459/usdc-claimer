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
    "2ExKs4GCXNiZQ52pZURb5P1Yr6J9HiQneihssas3rUs56wCeiQdcdiJwg4XffQ75yzMje68siQaBJVKHesQTFHoD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UU2PkNw8u1Em4ho1vYxivnaSk5Rjq6C7wcc4ZKvjoAvJfBJpBhBDfmzBMtwptmkyVZHdbNghZ4cvzu7R5nVnMGg",
  "key1": "25TbXGVQeeDfipkah7UJheybiovpFADU4aAHD9NmaNMPYJdh8P51QARZ7zMcVd4R6UqvNWJPgxUGCMP2AzpCxxp2",
  "key2": "2VQmoJjH55xnEDpzaQKyTZUQioi8fo5dGwTsPSkKCvk8H1ZcN4c1LPxaWz9oBL2Y9ZQ97rFQZSDGcvnRfBHnYaa5",
  "key3": "2WA8pyjHDF5rxhVtfkXD23rPZSbpR3tNkMZ6aGbrWyrF5PimrVkCPHr4nGTjYirMDrDzZDNNRJ5tS1nv77oQ4gW6",
  "key4": "5yPWn9VYgBG1dm1Nywn5Z4E2kD69VGda9FyGt4QGAw3vULXDcrqy2DHo5vf82rgM4D6sQgzYXVzLJPB3M7nKmdg5",
  "key5": "2KJgL5UDZrdZvPvXAiapZXbbRpvmqrCwY9fa3QVkTV4ZvXHHzxUTowXejV9RdPeLt56mCXGL9fu7Cb5xe4SvHnN7",
  "key6": "vdr17ksmWbw15iQR9N3jP9CkyDWMTJTBkZyawYGzTqvBjS7cCUohLGwaAMJV41sdaiD8uGWod1R815T1H6Cs1hv",
  "key7": "3xPfypLdNq5LDaMG8cxJtfZuPFuB9GcX4cf7NjBWi4UmfstZrxHyUVMa85a57juvkdY6MmEYb7VCQaYvuLPyZuVm",
  "key8": "5FKtSyNcyEniLT1jVnng4KroENNEZaF6Vy4iFrY6gzumuPDRqNNAArcYudBvD2z4xC7iMf3yYKXKRoGLcY2pZ4SV",
  "key9": "2fTcEcXvffo78EhKtNhSFZJKeryStCYQrwq6fK3MoPvKr9bUP5HwzKZH8XwSmj6bUTm35qTMt5wg1TVp2jGy67ug",
  "key10": "4asrV1GZpadwmCuyQ44geb2bcVe5hYdsh3k2fCJgrMhaKQNtmAeSSMaCuot77fbktLAu6SJPQXFBZHc4e6Q3oTRa",
  "key11": "4W6i7hbcq6mqPN2QDU66rDApqnoRatWPpngjogakQ7mExTRVkKMxa97UThuAvFDxrbvDhvjHRNfivseqqi5MZbqr",
  "key12": "3RwHcfTU6JDNhd1e3cZYQFdhFQcu4inRawEurvrhDzkF4JNLc7Z2cihf7LDyP8krqkFQLp63TGkQPbiwjcqGVZ42",
  "key13": "3N5rZbx1YFrjPeaAGHz4piSgXAZkoKDoo5kiNTZro4bUuQGBhPqz7gmAYazCAyxcTd1vCwLjwE6hUMGUiWwyLL3N",
  "key14": "61A8A6XGpDZLw5hRzPQTVZHscqnZL5tBqJBfg5i9YTULAxd3fyVNxpKizkaoxDQgGtN98uhnMVgFLSjAJyLarAU5",
  "key15": "4HnZBFwjpJvfr8mHGmQ3xM4C93eVDLx6DPKEeFZvqWUaCPmDvEDkT771gM4G4aChobzy4H3pYCRMojfi719d3dop",
  "key16": "qcKkBDApXNNefjjdSmCaSMo8aug3w2ain9MrQ93Yd25gphw44EWSZ4HvESLhb3QQk6u4W9keH7FmrdD9YQGd5aN",
  "key17": "pGd32LLYBNk11H2o2h1KkpsLdDUFVLX9M11oEXAsNFaqvieTQynHk9KdcfQTsDoQgzARMYAwiPte8Yh1T1NJ2v1",
  "key18": "3LiRB3WJ5mo2MkiBCrUZ1BMiUfQywy45GAMJZ836ASPDF6KAcqjgvh3LP2W2nZMUwRqADJgBnnDxuJDamtH3AR2q",
  "key19": "bgZerj8zDeHHdQt1s9MLMF1V5SpDABQ2JST9NegCZbp6DNzMLCKRWAL8zBeQNYobXBiYpuKauM1J1LGooSJdEmf",
  "key20": "2EJqFfC9wuuMWqr7MU2LGW9ZynXdVieHrHgEChW4kCrbCsdPstLn3AzB9pPyxbfPofdUJxUKAwiL9EkVd4Ehd8qc",
  "key21": "2A9XXWhsvgDw4e84KSn1X3YkAJy4M44FGQZQpGqKVwvLQxzWy4L7WNQcb6zyYTtZVrCDV9MKrUMLtcAKyVm3YC7r",
  "key22": "4WopBHGBWNfLa9Mx1h1Szwjjj1ypNbzwakCGpnAdP8GAub6GfvvNuHNM6xNzFCLgJPnFS2e3dNs3KDjqwPcyjaAh",
  "key23": "ZfqLyS8gGzMcMLrbCHk5genkf7d6aAMjqK5k5wD5freawPNK63cgoZTaqZpqYnxwdHFPn4UbRuLYHVRiAzZXrbK",
  "key24": "4s4SYvLCUezVNQxP4WkDfjAWZZnHDqu9u8wk4cBvNNZckis8huRyCTSziRXGjMKFxPwpuT3AFeuFpHub7ZfP9o3v",
  "key25": "5GknSU4sQQxi9y3rznR35h8sZXS3DSHRQf5grUyMfM8L7pWqcfzQQwEHfQrXdyD6k43ZTB7Ad1fRFHiLoEohppy6",
  "key26": "5eN13NR3zs9FmfRe7mAhJDtQ1vWPy4AZDJEig4TmWv7tes8mp8AELrs5vkX1DJGcB4RBj5c76pgbT5MPbuFViGVw",
  "key27": "5L69SQo2Pjgge1n1nqHvfKK71TWx9TQ1nJcaeQaxGJevn7VytdNsmWbqJm8tLekz3zkAvTborGU59c4LyH8EurnR",
  "key28": "4RBtW85m5pawaUgyMh6HNRSeJeF6dyKpgJvfQczPUmoeekHW7vgBBRym9BaYDBn99bUJGtPXFRPoP5ZXbbRXRSpo",
  "key29": "S63weJY6W5JZHN7iZikWBRCyi37zjqhgAJsDC6iqfePgHd99BgWYzEVXooA8P9fc9EAekVRzEBK2L9e1TPGpNmp",
  "key30": "5Q6XXQXpB3WWskeJK5g3QuC6jZPXNe99o9R2rLXE2Z5ALbfB6Wf3DYUgz7THAcniwFxV9mzAaLVSTJPUApSudwZ3",
  "key31": "2NE5dRZjigPhfj1tVdHVNoguVmhR61y4CgzqjMej4WU8VLB4CkCutwBvavkjHXWhhWDyzzRDMGZtU9qgk2NRCvHF",
  "key32": "2gep35VuG97M8QPAmbGC1nJsuKcYqNvYMLWYdhehPv4vqn8BG2MTo9E1TcpLnghrH2wk9NWeBz8vJDr9PkzStsxh",
  "key33": "JRiGPaLFLcjFDU3GXNtajS3ht8A5M3L52LzuhJ46Gy9jjUFgRVbnE5tBmtq6qZEtuK1E1zkQgidVSWHZCG3LjM9",
  "key34": "4eucCUqVj6QisVwCtfN4TMb2jXMSFJdMftiM4mandjioXVM82kzEZf3qsJSDAc7wvd26HZ1BoKAghzLq7JK86yyW",
  "key35": "5CWBFar55LLeuASstDFfe1dcvykunXhQLcawaqAkGYQ6yKtcDtiDvBYRR2HXyp3JsKgnw3kmShbAhMNF62YAjQks",
  "key36": "3h4gP6399DjPftNybnES4tSirAeDJPV4mVA2wHEtazaSrSCqaan9gNAF4AFL677m9zqLNNoMNSJ8WjXzpz7z1UPh",
  "key37": "4NfwXGqvSgUqhEsFuvjqSHdasiKxVAC5f7qAQgU9eDcUH5bQ1Nn8D4Zcc3mHHqSmpb7V8ov7Tg9eW17uN4C35n9Q",
  "key38": "2ixnxKtWu4KsTEgiNt5jCM9pddgfUNiVCP8hgdW52pa83TXEcbiJLZjDDar6JCS1j2WmwX2LqSVqLyxMRJk6ZKUA",
  "key39": "4Q8we7RZzozNMtRToHe2xyf6iKAKVwDWyfFApFA2Qebb13qscEShptoCoEdcoWDpfKeuPC1T1EJbQkfZgnoK4Ng2",
  "key40": "5TebiBnihuEMyngKCASqFxbdEJXarL6NVSna9dLWV9XDP1pNoH4k3nwtJVpwZUwbpEH8LYENeturzRkqPK3vCVN4",
  "key41": "2asCqTPF9UNe2q5hDgxrcUojMtTLN6dPMCWSzwQxgdUiFdSADP5urBxP9X4AEUK8f4Ju53irtpxP138d9Si6Fy1y"
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
