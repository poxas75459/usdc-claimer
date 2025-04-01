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
    "3ZyLmF46ztZysMCcoe2TmcmZNUxSXDqzcfchdYi9gT9QrRfQ3x2SmZJcAucryhTwZnmRGPvgiXd4ptrsvhTMVVyx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65GGXSMgRheAYiFaUr6gQpcbuTiBCJo1gM4hrE3csUEzfpH63vuJScnKgJC3ReXPGJDfPKiAsfaQW6WqWmt8GbUH",
  "key1": "4evRVyTnda8uRVAHxidzT65FJW7DAJduoYfPqkq1K5QLfCMVewYByATwptcYEV8Xd552mVYdw3jw6xYAMepiLk1y",
  "key2": "2NFEMqmUCq5Lj4XjdAnmYDB3qw7W6nSaF3ozvdj6f3fGMVtqjndNh51XM9bUEZqsfnCnGsByfsxpYioZex1JUP7T",
  "key3": "YqzuCcT6QRotMpEcuniYcr39qKuF1XQ4S1FbQm4uruXzF57vN4RLLWSna4MptwTXQjsTbq1DScQ76cA25XZ6yGs",
  "key4": "3WuUdduuNWjWr2Awkx3ju9KVegX6BKvoLMpTnufyfTknVKmjEjyPsvZXoeoT7Yye8ZFrAwEuAcqTui4xC2f7kju5",
  "key5": "2gnuz5uzxNdzGEn3ptmU7jYPickqBA56VCa67M7TJnDBA8ZaeyMQm1gEDATF9K9bxCfVAwQvL9gpW9Y4LxKG1oCW",
  "key6": "7uCTfP24it9jBTgEpDpmnL3zjTBFvSxS5uPBkjUaerxC56DRfcLL1yAwTgTakoQC3XYcKptegmj81UAuVZi3QoK",
  "key7": "2moAMApbFBm5ypeD3Qn8BxdTUceACwFxUY33mWoJrVjkKNF8JSTXxh7ALy9hVNj1V9ygeYS65kjV58f7X83zB6Y1",
  "key8": "55atp6vHBvmtUCDQEy7mYEnGU7pJEmaekKs9oL3tTnndc4X8gcF7iKZnK92g3St8aTYnfPmV9cEML8ix8YeznERF",
  "key9": "25LuYH6HWxe6cyhjoU2Ju31TKudfSKpgabNvwsgen2Y7ofuAw3xbGEpm9YEzpNUs1neWj3sZfXC1oMXrgqLL9t2n",
  "key10": "3Eszy531CWo8F2exUjjw2mJj72bXGuvJGzfxPZ2fwsE8jHgu1nyycbfkmcAX73dzYJrFVwsQqBYhPu2EC8PEVLME",
  "key11": "5onvpymPtXgn7CaMP3GKGRzWcbXp7iPchxtpU8cvtPerXSyt6RaK4MoE1zaqFC1v3E3JcKYDbXCH14nx9WeR67DF",
  "key12": "3uLxhGqs71kLjTds1611rtb2hhEGs8wMg3AWfZztmbbXv3G6fZpkm8TXC2HhFMxrJxnRbWKZJc7tBoM2kEVbjdtS",
  "key13": "1275WgSX1gsdzhPgUnu6CZLESAA9U4azK91Ew6DaBeKpjMbvYB7N1JTuuqNopHVjNFnHSAwj3rkkUpzTt3sHHjrJ",
  "key14": "3phkJyZ8tqNoGKs5VEbrQNR34tWovgATwLtmnzy6nvWQZUm2Ws8nGXx8stj6CWubvRp4yxeTdNWMi5maB4Pq3xLf",
  "key15": "FjrJxd6ezzCfth97JVxNhUyxdWsMGYq1nTUy3QwW3kxeSwRbugtUPxpZ1vyqVhc48LcQpb5MKq87srLGPRbwg13",
  "key16": "5o1g5LQ4wQskJR2vdye1rFeVfNGgHWUX4GDWC1pTYtD4m8CGAfez5bduecpAN5Lw4kGqCmb5uZYkYZ13uwWKyhE9",
  "key17": "5qz9XnW4vRfF5PUaG4k5WzptAcRTZKRdHWHJ3pCffL8T46cdu98fG9uMpvDJVMecyMr3tqv9NnkMNaig8cApFVK",
  "key18": "5DbTMXXF9RpCzcyZJnVnA4AkgRvEdouSzFWpSNwVwj6cFx4GzWWkYiyWLgXimQhgcWcnvXMEhxp5CqBBgxxxSG3b",
  "key19": "3MPNQHNoEU3VSAaNzhJ6zQka3VhvJatquM1CRsRGi4zYo4D21vBCpCBTKHtrkSuiQhKnFXb2JxJjVXz1sNCgWinv",
  "key20": "5EQk7BKQyUefJzMUkK56pworTuFtWB6qCobFYAAXtDGtnJ4YX1efMMzgdditTNoa3jLadRRhPfMw4UDsxur27n3v",
  "key21": "3WA2NVoACruimwBgdCHamK7yBFhKwQ4oEq4JWkTiiuBs7vhVkx9uRtsKhN32MtmdFtzE3CiAvfTkN1t1GhkCKf62",
  "key22": "2M9ZDMpWgBdEvWpdtaSi9R8HUv5ny7zsqYMmeahQ7a2zwSEM1DL857Nj8jT38hwHv2RKyFervyaEQVbx9xU3ySCX",
  "key23": "Ken3Y3cyr6xjLAdVZaxLeXu5u3S88iNoV1bKSgxTCwXHyx95sQ6AaNvd3Zp5X7cMkgRePkSWssrut1DWd7iQ8E4",
  "key24": "3TZiBt3htDzRzcVLgVs6KBjBE4xwybr6ja3vB12KEZ9iomEVAur9kywM3mBNCwgsYA5mcaUJm3wPC3kn7UKWtqRk",
  "key25": "487nGXfybwhTbzVCVTHWWrqubEKYrG6VMc2AjtXpz3dvZJvjqohary8vaddQKNbcTam1hHBmKqgzihMHm4UjJWEp",
  "key26": "5kdEVQNeLH7BAXZSf6tnsfsaLx3MTSxxWVEMaJKneHNrD3eanoRBv9B4tR4hesnryUeCJ3JoV9tkP8mCpapgqXE7",
  "key27": "4RAHbX5J2o7UECZFZpreeQ4S7X4zzsm2fCQ4hWvJ6ko9rDnng88DRi3jNtoVapLdesAApicYqDLeE3d56PW233c1",
  "key28": "3sAMBGS7gewUbahCoFU9z4YnZ48k3B9EK4fbntkt3UkNWGjumn8LVW8vwZxGgBVyAEnGEKGjQVEcDextnByoMVi7",
  "key29": "3v9hkykTqetx4aUHVmEwxsqAUAFZz7jtmMygVYWr98icq2PioGopJMuVyKGboMAWqSHNdm7ZNugVTA7w1zfbsLwr"
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
