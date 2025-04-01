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
    "iJxeNj7JhszFMz4vSLUSbcNfDxENoHJWvLd3n3FwDUecf1kVPynNW51218FAa6bpyWF2Lp7ksqLpPX1hHEDWeYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qq864pwVFwpU8wnsokdJxpditYX3MpSoWJYQFHFSKP3tAsqbRAxzZpRWADds3M71GN9ke1uJCMGKYu2QybheWvq",
  "key1": "5NKKzPzZuNCdBzXxzVx9wCmR5YCtNCu61DroXoYFLHsS6DmjcgumfF9nQBDYAJjKgW8UbY3H7WUbpTjQa4rvj87h",
  "key2": "51FdXgcUaz8r6e4SxFs2HJQz7MS2UeXqsHaCKE2eLug8GTeMHV1U3QFV6Az8shMDmmVZx786FuY8FdZsGftDNeGx",
  "key3": "unNTk87XtVBP5dGn22VCtWqdK2ZPuEn2uzcP7du5FgJMPWVE1RBwKaamPF4papxiVFJ9znRCfPWaM6T4JrbgoLg",
  "key4": "526VLvR31fNYMoBfLSpTkQswQ9gJVBPHUSMJWXDrYnATHe3vNJivxPMck18BhPEGmGYT8Vhi3mrRfvim4RMfnSgD",
  "key5": "3yKuZS2BzifgfZ7WEqKMBe5ScVyZG1Drft5jK1mMFMgEHqY7WZzGA4tFdx2t6zPfn34pQ2Waau1xNpSJnzb3DPUx",
  "key6": "3eze8Xky7iWS55mSVmtJvjnqXipXwvzrvRrGN4m9Pc7wN9NatfVpm4Z5o8PLLUhrum7rB2jKMpFpKbMDa4fMBU75",
  "key7": "53wSfiVjR6mQ93HrubYUHT5f9SenjgrSTCzDvtf41345C3ARdg382RwtRnXSR9f3yVwh6qGpviVUgM59zdUqZJL7",
  "key8": "55gzqiLhitA5ZQpxjLAYVxCyvU9jHEzzqoe82SjnH3e27vFxoure4kLY7LANChacEi2ibkUgPzK7nftHbvZXJpxX",
  "key9": "4QNHZE3tQDiz9sRmypDTpLrRjqBKYyfYX1M5Dff5eBNH4Eq8isPddTNv7Wo5LVP3xWd39k3265ZRtx5mNNtb9tTb",
  "key10": "54puRoedc9iNXvnuDqFp9BGQ39VJGvGS3SdJK82sPvwysM3v8KKmR5QMGoRMyk87WQQ181dCrdhhYzUdtG9nizJu",
  "key11": "4K3hg5QsN9UovrkmUF9MXSfuEAuxVLyLMPYwfin4WvvLsRrstL7FZQGUtkVqe6mhkkM5q4dD5EZCE52xwEoT9Hwo",
  "key12": "4YcY8NdV1P7M9yRK4FT37KLvS6yVyHcrfTMfi8bGiwDBn7orMW9KyGq1fFxKSQzgxTQeHek1QNMKKrj3X5KoFp44",
  "key13": "24zKHNdhvAxpLKzabCEQrBiqNyJ8KEKkFnYKNXPXgEeKKwZLLXvg9VusoqPYcqCh9KAyXhjY2t48giqqiFkNxNFL",
  "key14": "swn16jSncNETxei1RdH9CfX3cUxHg5wNfTHL9DBuKUpisAMC9LqK4zsyQB5KtETyvRf7rpDwTX4niuoxxAeHveX",
  "key15": "4kjuHSLazxPsm2nQi86jVh4Fi8AoukJ67r48xZ6duHx4dUU8MV2L1nBjRgGk1HWxZb6n1c7ANQZPqjt58z3FPdZx",
  "key16": "2xwKzkQhXPFfwoQLUqX6a1FizxqfPzRPXExGuikPmbVYVkCprsDfR6TdqemXnbDWcZcSpyXz3v8xKg2UBAbAZR8W",
  "key17": "2JArnyEMZu4vU7hxBmDSiVMFkdh4PxbFGKvUjqaynKNSBSi3617JYf255PDP4a4BwgxWbJ8KA4nxdwr4bFUV12b8",
  "key18": "qNueaqgQQCgRbXeLUdi165DqcrPbjDqeZb3n3nYTqWRqT1RCMkbqQ5sBK8j8TPD8A6r97mCYh4zqhZKk3qC4WXu",
  "key19": "5UTKjMU9X35GchqEgRCqeZXs7255fAnakU33UNyWBBZyvcmU2NNPMexqyBeEqYbDqFezAobSosavZkoEeTFrx1E6",
  "key20": "hDWxaqHApiaQytuNd66zdXsKM7cGdhMye13d77C2VbLFYKiqE64617jfv23oidFwzSxw1TPJiXupKcY9bgF78pF",
  "key21": "2ofbdzTY319xYgJyW2pEqgfYgVhW5DRBVtyoda18KhLtpdS1TVvYjPGyEWDi4gozjuvp9dhQ1BKkLz2X5Vukwww5",
  "key22": "5zeq6m8S7y5S7rwQFgTdDixF6PLzFpvto88XYR7wjU4t6js7hgWDS2oE7rWvhs62xCeAV6kvNcbMvCwT6q2GvDca",
  "key23": "fUnC76F6sjbMBbipcNdqNuvTf1Js2AKbwAYA2tTAkvxwqKX1ps14KYh6dfZJmrqHE9nWPDNYMdH2dzDbrMoSx5t",
  "key24": "3A53RxCphhSbVqerWcfoUMNfQw72RqBApr7WUvQnfu1X3Q5iKXPQ7AHeZC1XucAHJfefRmH2pyY2Vz3vRiv7TDbd",
  "key25": "F1sBMAj4AnPkaUMdoJjGYZWUfnjSvWKqwpu1Pg3yZ3X9BZuy6BwR6JRohz7juybdeHFRG98B8C1QRiyn6svxr2H",
  "key26": "2DhxRvPny2YaTre5oS1DPbXokAMaWBC4VvLeSSVN2w6DdCEHdLcZX55fRq6Gv2rdJ6cxgx4zBpg2LEhRtsXEkYkK",
  "key27": "9Zrn12ybrGekwnrekx1jPwGSpz4bDh2Ldy4E2urQwHTPBgypoh7EtpNMqmozS4ABWgRqzoCV1YmSK8xF4vfyXUJ",
  "key28": "duxi7abjsTkpDBhB7VrjeRThRdeUJJwi9ysbSnjwipT1EwbromsjdCMYHZgx9BawTXs2xAw47PoUFTQDo317dyF",
  "key29": "3bjWGMfdXKJkkz1gjeThYUFZugfYNZ84tJAzEdFGbMX4kt6LYrHNv9y2VFa6AY9firmHY9wD2fvfBMsg7MvgZHzV",
  "key30": "4dabkKzm4ivoNxZsk5j24ky8m1N65Y6Zc16Uy6Ku3Sm5qCCFeyvtadBj7s3tULZjmjfLaAP5RbtUGcxuZygEsNdb",
  "key31": "5DHM1Lt1NBF93kDmHhCqMFBamvtDgpuyLHMk6HMgGNRwySAJMdRDJHBcMJsSc1XfXMPRweYRh12ZnjoQj9jXFrvv",
  "key32": "3j5YaEcdJDirTi2LbiiYDomco6Xzz44m8J8nJMq2p41dAA83Ewd2p5JECQvGR3j77qmqANJ7Mz5dhK4J4smTxDQY",
  "key33": "591AprbCMV4qGCsCaJSpzyxvu1SnEq1c9LLXcnLF7bqpiA9q68W3Ef5P4bL1QFStLXv9HYLQK9MWNNGSy3QWKRFv",
  "key34": "2MVaXzwJqqZXR3JZkSdKyKXMoxspLumXwLTXGBYNMgfFXTAuWSnpcwT8Tijtg2WPJTVvRYYEsLhkXVM9HRkHrbj5",
  "key35": "3G5tXPxGNDH6M27krGJndiQVEEN9WmWEZ5stjEsjFtsyVWcGpPzs1nKAmDcj8j44ZoMnZRESvzWVVxuhdwtRMGWX"
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
