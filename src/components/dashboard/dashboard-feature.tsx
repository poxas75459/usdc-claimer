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
    "417JMZFioktcjk6ap2Eoeb6ktCAJcnXhzHSuJktpjNks7QrkSfkJ83KHXLHVXMYe9yoRFtXEnr2rTJVTEqR1ELnk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SXMH1JZVkGc585CuzdYKLVo4heq6QaRGy59SsZE6T1VQ4h6YzkN7Hq1QSPrtjyxPRGGLYnM71FY4eFwwAbdnBTS",
  "key1": "JPj7fCn3GZzLSY9zojWXNnX2HQQsSAwknFfwx9RRkPqHXHSCMMctwR3FdfB1W32Swr9Xc2Xz4ukwufC3KzXwdQs",
  "key2": "ZvPJv7nURt4AzQcbf5DMRbebxUUviVuQcY1XpEGv3mDpGzT3JrGnJ7RV7diwFX2j1MyGAYspv7jMb7HskEJTsyy",
  "key3": "4HAsm6ERpmk8wUCKfHKFAn6r24LpX5j3nH2HEnsTjS3No2kfkeTPYxQepfsDZkjhgapnPASypqbv1rbWzXuGtVy",
  "key4": "5qaDBxk8fNawpYiaWH9pAPWnwwsXuKdYmNu9ZAq9UxTZn5X4QdvQ1nXA2RcGoPLUVCGFvpsbSrekWvxo3CFFVAZt",
  "key5": "36Sd2bcBUPqCWSmyeTjvEA83bgSy5mGn6j8vWmSpUpVnAB2e63QtEtXDznRiKjGWit3ukS1EJgunBdLDUGP5eoMS",
  "key6": "3aP4TjfVL2ZRKvcfp7AcTvhyZcRY4WNSYRWUWYrLbjrmKiB7L8PvNKXjcEnt5Pjrn1fs1Ds2cEzkzKeaaqXDAyDW",
  "key7": "emrg6BfvjEvTM3hUXQBopY3pFP3NmzVHsUhJAG1i5pBSAhS9oEX6fp8ohn8BwC643JsPVwEP1GpDQEaEMdK41Ao",
  "key8": "2efjdvqkKzBt3ovqJBU1FJYey4UoL6NzefLqEeN9xY4rpxyerpoZpqtHWLXxo9UEtkqck9mvuWEjhwoPp8tFz9zM",
  "key9": "2QZmVoNqKjb6a33HFQBkjEfmUVQ6uN4PoVhwZ26d138svHBvrhPWpYLVo3D1xbG9BdtbSHo8Ha8XMUx55r7HMEHz",
  "key10": "qHHPjQPVRdEtqpgnW98CnZ1vGKiyyotpJjFiAcNcQjPsytGZNWuNvMkAnmvSYpLPodTo12rAH3RGnRE1fYqQfsq",
  "key11": "29XM77PKYZxayYniztGGvrP6bgqvuFN99bRjmub2MNTGhLnyZbLPFo3GbQ1e9LmpkN1hy56uwVmx5JiTBoajzyDE",
  "key12": "41djwK7pa7PbRXXPfmA2z6qtikrxBjAWxffKMS9iEFcfSMfADBdSEzJMALUSmLcmy2B2RiApwVbocRtCVBv1AtwS",
  "key13": "46iCk5bjx1VHU8iuxGnxPNHnbWPUyPNv31ZzEjPVo3vZ4vfFcUqNZN1WcHokZHFgdJZLWhAyWaeWWP2BhDeCpTe4",
  "key14": "4X7Vc8ntTcdkBJkrc9XmGQnQgQnBCZ1k8minyU2p8D7rGFXXwpstE5vzUGKMvgpmj5VPsNNuwn9xgy8a7xe6p6Dj",
  "key15": "JVf9cjneU7e2zA2jvTSqf1MUA3zqnWVxGvU8jaAD28FiZVb5DHLsfX32LeiZCK7UZVvsQXMPWNJQtXC5K4fenpB",
  "key16": "3wUQPoDGY2TRNgqADLTVvefR1iRf5VYPvbwT3y4njpbbKky5LVvLrqb5NPUpnDYgq6TdbnGRLoCnnZXw2DDxbmRd",
  "key17": "3bgeYFtx9gFbvGcW4UKGPNXgFBNRDT3jrkQz4H1du3FZLaCCQZcXjZmJM43idY6dSBFLD5CFrFP4ruJq6yz6Exaf",
  "key18": "aYtt64ipA9qfo8HgQ2AutWng9ThSf213A8f5tjjq7KQcvzwQPZmHu6gBqS6gS75nNbgxw8Dh9YysDANuY3y1dPw",
  "key19": "29KhWz3v9N68qL3WxwSJxk9a5iSkUS77gwefwvkhdiCDHVJEZpo7Ck56Bj3EMctto1g1iyT96KMvypxDB8iXRKW7",
  "key20": "zZFU8Tvzug94F9Ra8No7dUGiAXLXs6rZyPxJoysF1HMenuq9gKcmLqPkfsENThuCwa56Up9MAy7emUKLGJ2cULN",
  "key21": "DCF1oGMY94iYWBMEAikrVBVXQcraSUuLNe3fNy6th5hDWWEhNwm5mphakbJwrHbKyLL4duF2s9H2gMRkbYkpC7P",
  "key22": "9iHp4rCuvcwY6qeXA2KvrFhS6KvLSjiVV9YS9PS4kaoHUfR67ZWY7NkpAgv1qR8dT9uiuusoyL7wFrxhj6S2a1C",
  "key23": "jpJMBhrxXfwZAGBdhGpXUwgVV3RKeLFmMfNYw45eWMLfDiMAL77WMVCWTH5UEsbLdbDoypgu4AQgwXUFbFt4Gzh",
  "key24": "2UYa2V3aZNB1YW8BooSW9oGv9NQDgM4VQ9uYnodb4GF4CjeiUC76dH4F7hmAVwAFnY5HTWxBQgcdfpZUUNNQ9qKL",
  "key25": "5vmpsc7DhxqGSzsodUpeysdQ6GpwvswbpMRWVi6VSeQEdQZ6iM8gDY3rR6AuS3qjYXCijJWzdjPMFrCh26sNaMQd",
  "key26": "sp5WjGAZJHrSwyBBqbhYJ1Gp5LuactRkSMtW4eCXS6Lioj2pumZbTZC3azx1RFigiawyRF66K2ZX78T85QcKiq4",
  "key27": "22c9BZ3DczgwEBSHYaukmF4G7ViAKgQqoPtcMqgB3fCAcRwPn92fF3WtQVZvV1QCkAYNh41vwMqc2RT7T7N6r2ey",
  "key28": "2eprw2nyvDZ3iqYdvoZfFyLmi1od1ZEhWbD3VitkGUb1R2MXCUCYwEWqTy9vxAGiHo8qv59HQLcperY4oj8F1xuh",
  "key29": "7ZeGpaCg75fDSu14tW7XogWqZorUfw7gDdPama2mo6WsgERKjJ3VYq36wUabjC2fRTs66QvdtMvcDZChPxPn4Ry",
  "key30": "ZqZGGp2hwTYX5TJPTd5cBvE2Gtiw7yM8k5hdMMC4np8upxK2i17c1nJ1ir6CaR8dnurPdUFxG2VqpjeQRJ5ZEma",
  "key31": "5wEKhKmktoP8HgL6FVq1xvwBYEcNP91y77S5wKErc2fEPnZn8dr1wnGTJdExHVLFxJWAdLgPdutQptrM2UAQJJGa",
  "key32": "3LaLRvzkqGVcmBH2FhpLZ8gbGXfyTxGELJNvTPr9pdB7nyfLy99EeL9TbGWzKBK8fLUMkiSxkSWqL418suZt7U9P",
  "key33": "4nBGaSmDgd172tupRGzrmwQ2HZibMNbg5EqfzpXXmuKRwjabbdjmJCH6TgrL6dtHrKC9gv7qaorcQo7eDy6i71Bx",
  "key34": "3DxnGjQLy9UcnMR3L3DbCNNL4EN1pwmKPwrQB5hijfz2uQQbLQVe7j5jCNkQxd52r1HX54Z7Cf8auKgbYxwZiDQg",
  "key35": "3HgoJrnw1SWZLpUXXxugWbdffTmwtbkLqb87BDstqQ1o1DhpfCXvKrqMUs7KSDag1WcsaXTjmDxSVCofLdLu378X",
  "key36": "3RKrh7PbrZM6SrnBieHpJzc2H54FXiwkVdMUXTrD5VhAWAELLYeR2cTz3gHx4Z5GKwwosxbEXdPABWv24trnrTek",
  "key37": "2ZoLojtddVdHbMEKQvx7kem92NFhD95PhXVrqgHFJ5yMRuXtNqWaj31kPRCRfbeSKh4VcYrRC33SLk529BRNnXcv",
  "key38": "63ZcA9QxHSBbFNAvGr7sjtD1rDu1sS5PVBxjay9irGhW5bbNwFF389YWvkvnEvcea3kFgRitTn4NoraBT5e9w8zo",
  "key39": "4ejAmPBUkme7nEM6yxSCo26oJEkDt2pFmaVWZc2HgdbFDFwnaWBSRRBxzabWLFxHuPY3vnPkSLBbTU4j5Jie7w1m",
  "key40": "48ZMGB54thHVPmoKWTRaSNsFHF6r9wer6iwfuYVAKBpyZoTqrp1H5Wktdk5wauZKnitzQFsxkeQJhBxsyhLAYn7i",
  "key41": "HDhdu4DvYDNqadR7rgqxHacgiRZ8i616tVxko2QaVy5EnZT81kxF4XJWvUscq85nW8Zm65oUn87BYuhQTpXpyNY",
  "key42": "5cwbNDPWV8hDK3Keyw37uwQ6L4hXUiXycvmC42ygFoKY14w7ztqyZFDaYGv9ry28CwnyMZcvAxF6HBmdCu1LBy9w"
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
