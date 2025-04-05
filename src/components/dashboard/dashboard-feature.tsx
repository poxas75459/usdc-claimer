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
    "USLruhanCvqN4w4R9UMi3SpmHfPwgMfAWPx2NdW21AdGXBLL5UGedgwpSq3ipiPYsx5KRLXbQ9L9spCskSnCbCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fixezJYCBiKuD8pWvuFaNKXsesGSbfuqmzfgeAmmvZnQxYRbVMdHNakFwYnyVCaZpK7tBK2kc69QgBchxe35CxX",
  "key1": "5UX8MYBXWKMT7Q3nRVMCAAE6Ymvjyn8GoBHMJkCQkRr4ea1S6fjSG4ztbMcfvQqkDmQQgsKZqf7SBdoUM6htLbkx",
  "key2": "58HMxXM95Y9Rt7iZmAbUiTSdJBgUTRPGhvc4F4G3edcKT9vuAGbUp5uiuZwXzyMMMA9cAJE4hDKm31bj1dVxWcD9",
  "key3": "4JkgmGYZkX8LBWLcVi2yAfQ8hKxoyc3WBjjsv8HQsGhz92xUZNZRC2WLqyCEDMiy8Bp2n87ePY78p8ikcnMj7HB5",
  "key4": "HKk5z6YQaMMcUuDEuyfaPYaD6w13LbWtiXem1BJcvL3dg9DqZiQkyRb9stfKCQMkWGpqZkUApvKczbp9pVmQ2FK",
  "key5": "3sRz6nEr25yuB99tpoY6cohD3RjfAsoxq1irfa6x4HexMGCUayaVMPfxdfNUgiLqjAaFzRY7YgSWmcrAcEYdadV9",
  "key6": "2z6n3np7o1keTBfpN2zwMLiHnuAQgBsCwNTreVbv83gPYBdAaarunZ4nYd5UBaTomD2Lhf8auJpgN6AKUJuiiRGp",
  "key7": "5GqmWMtwRXcr4cqkq8T7SuCM2zhrS5j9e7QuWGUGymAM3L7CrtSb8VymSnT2eFS1oBrvqrBgWS7FxZsLWnSjZm94",
  "key8": "4rBSoxJXvCmcECp2SE11YsbEsdid69ZzgSWeTj7RJHicv8wdEMtNZ4itvPvWzY3qPchEyNtvKfAnbSnFa9iEC6HB",
  "key9": "7K8T8monrt9U3FZErT1Tj1Nx63A2se7bathRqweTs54bxphMRuwWMQ4xajrom55LSr3p7F2YscckvjgfXPiTWiV",
  "key10": "iEg3prG8mEKNKQeFT1HVEQheb4rR261Y6P92m16u6imJszTcs4pjA7UpL8zGymfdeUdvVeSCE3qycaKe4xgEgqC",
  "key11": "29GdkYbz9JNw9nsbQuHBhSYHh8u5jErvnQ2W4JiqE5xPLJNPo5iF7ECwbAPBNJbm7Gsj7vfdxLnF9eDmXZYWrbNB",
  "key12": "8t9EW6P89M5wwck4JbU9vCc6R3PWcqmDvnxVf2jg8sq6vpFv4DPoFazrHaktjkfjUFnqMN57tsnCa9iJ75j9QbQ",
  "key13": "4JuPjqVLWDkrHfjCWs48hDYaVy6UH8ySqJ1nwdXywMxTkC1Hrf8xVNheEwKxvN9mdDETBtsbHFGKTzqud5gi1432",
  "key14": "3aCje5HNhemMSDFbEUZ5PhGDspqcpijg7denND7msUgwqRAqsweoCvHq5KJS5rBBR2W9hXUVSQERe7YvzjAgsB2J",
  "key15": "2gYacASW2EcQGG8N1sZuRS5fSNgDjJfUyN5mknBhqdKBL5omaVz4W4r7hpwkfZ5YdnP5rdBz6pEnJ7oUcCFHQBXb",
  "key16": "5Kcm1cdkgEvSkWiTKFkdeY6ym5pe7S4uQwVXuvGATyLtmptyydH7BEJQY3fGzgrMK6KmZrgxwj3NpAg3W2QabWuu",
  "key17": "4p1kAP8Wvh3ayX9JBANFP8FhVscEuj1Kb1M9BTXRhpojy2xX1SZFc9AtfkMLm3rwCW7vEQuBEsEvbZffEFkDXHqc",
  "key18": "3bcRFThGDhtz9byZFZYu8x4HmaUJRJMFtjZx7tzb5jcvr5oiW1wRZmr51i3ih1Fe276Fe1bxfPBt1VSpQbXS3aZM",
  "key19": "46niqR5E2rnJxm1EK2Nm3MwByG9nkxCby4VEGN3AhrgpM9jhMyA9iuJYm9gZuNB5Ra52cuztXDJ2oQo689htSX4",
  "key20": "2xZrhU5rukzYD6Cs8tVpPJP2nmgctWBq9EtGDXdteUsKzzieeNQ8hdaExyTzi95E6qgn5Yhkg7BNuXgHkFwQ3bxg",
  "key21": "4bMVyf14sZepbKbMtmV4wtsEiug3DGWkWNepdrYeirqzogkRhR5bDXHs2iBwNafz4PdeuhqSYLXv1PxhEZAPV61B",
  "key22": "2A3af6u5ZceP7aC6isaHnvfUM1wwRp6ggD9uMyj6P8ujrB8VQ2iSdnZCmgfzFvAp5QwNUZh2dhpw5osrWz4ms1Yx",
  "key23": "3Z6KRrrMMMNaFHkMXZJhSqMPsRBFbCaAmE2Vv8siVEiMK2EhSWwQ7at8XEx4vS9j3rtLJdD2V5tXsAHaftewrArf",
  "key24": "C1jexXNNsTSQgdEU62EkhSvTg2fv46pcgmhQf7VA5E1QY3GAh4NveN72A9iebt8QGpLQG7bLDHbVpoESYHWC7pb",
  "key25": "31LiPKxNnrqcA7CsCTmkFv7mBWfHP8koLyRXDuZP6pdeSJHBSE8BuYNdutWzcMacrvcEr815UK2vs2MMSApWhA3p",
  "key26": "2uWWcH6VJgSq7WXCfBvpbz5zkeBRBtR3bgmevmgwNnxZ1RDbT7WHmMiWnJxZNYtPqHwrpqGyAmrj5e3UWoA5S7dg",
  "key27": "4z8cYwdDPXmGm3EKLbqWRANY7NuqQehdePYS7kVNHHdeP3YRsDKUZFe2jPNZhddFiWS6TGRg65HVRTfdiqbvxfW3",
  "key28": "2ufVsyGGG84toLihPQyCzgtpHBaTzE2Sknu4hLrhUohxFV7wDx9VaUmApfkeiR2W1ruUY8JTVLAdGhK7r1NZLGyW",
  "key29": "4d6rU9yM21MZ8oERBJSDLyy7Lsf1JCjQMVjs64eWdzF8LsbUbVZWD581Q5Fc9DjK9v21Xf39FeJFcBWJWVCazBpu",
  "key30": "5Xu9AUGeZXHsdiAwSd44pBJai5yqLQYqcJT8a1TbG8VXEHgBLnzhKxpBJ5TwfbE9MxTWs7eN55WhBJAbzQGA5w9P",
  "key31": "5wgie9MfVhbjdsKGWkP5BcxQ6w7baSCJWfmaKKx729r4BDMDGbhneyUGTRxdfoxq1yAeFqHYJYRqVh59czapRKn7",
  "key32": "5fREGWokhLRYkYx2EiwLzk6CBjvEqcdFWZGSaLqSGShmEjuVVyXz1owFdet9msQtwQqRk2KHN34PVPPQaGqngmiZ",
  "key33": "2SEB4GeUBpJ7VBgzaT7uvxGD5bW8uvuBqZ5Z6yYfGamquRGFsm7P9UfXcTMf5Hgm8umikgg3czkuuBrcAGS2w23L",
  "key34": "4o4FWofUTFU9iAVyvndyqmbGv2qBQBJhM1gWvsx3hT25t251xRYCJXcrQjHPfUtPdDTj8x7YkYkaJLmr5iL6cmod",
  "key35": "5i9CpR68NsZ3HC8oB7LS2mCcRNm74r5JV2SJfnJWD9MuubnAcbvGSXfUcA66xksDzXR2ngcsY4YNWZcNVSP69JUQ",
  "key36": "2FkXg5QvwNBMkGEv7vLTvejVgLNAq4znDdxPA2aAJWRT3QXAGUotMXGp1hi3rbx9QccEUqwz71CsEeoMd8rtbuoT",
  "key37": "5Cp4srDtFLPkEp5KRUhaZae6QHcTNmetBZi1W5xPebsH5NU4ejHriho7QzMdBh5GDM1qrJAweAoWYBxYhB44k9Hy",
  "key38": "eYhQKNDG5mpsPf3hkYgdgzMPzkoZCNDk3cJfD2TsGvMW3C4QBSc2NMuSFwKR4qPwgX7mdiaNqX4FKKF9FynZp8h",
  "key39": "4LNzWiEG1we296Knz3yRaYGzBRhNR7nFcN6RakUw67HK7j1yBR2X9goDJFsUqEGdH25Asvo2PmMbAFv1eem53L1v",
  "key40": "613o1ea3jGrf9UtW8MYxoaBSAKTxiYk8d6eSePtVwaif7JxFroAbRxB2gWWe4GTwUia6MKW98ibr4SD9HmsQLNr3",
  "key41": "4kYt2P2Lv2Jd8N2kH2vnLk8V1ZEx32s5tehNTvBSG37YKLGSUmDs3Wtu8hufp7UywLYL1iNPa6jm1M2Pu3XWNUmT",
  "key42": "4PPXrmxAbJc3ozetXWnd2jeXEp3eWTpiuhofrPBCE7cvsJNJFfMzRJcxnBCh1LcKHXqs3c9qZETmWcxLTvCNQiHA"
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
