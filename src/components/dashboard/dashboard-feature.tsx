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
    "1LqoZxxAohVi4FH1YBDSay461pEKHPVpuL3gP6ueT9gY8xjizmAFuUror7FqiYmLbxE86geBj5jTXJqxK1iuV8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X3FdX5mVcTN5CSRWY7npyym3cxnv8VXhKrG3nNQ3pVXzGHohnDhtd8gFVTifonXvL4mVDRCZBn21Nqodt1tUYyV",
  "key1": "32id4vdEkPj65xVZcUR1YhKcmRamxKLVYX4NzFo1NWseVmwmtFDSgiDWEvGFK1dnQM3TUMdVSTA4XmatsBAXAxve",
  "key2": "37baXxRCWx7t8XVL9qk1NDzHC6m3TpoaqZPHybhyuDaNEUvBFHtAekqEdpbzdtxfK1ya3kQUaiwtbQ1vkTHQx1Wn",
  "key3": "3Zycd7Ufx5uuXh58zeVnNtfLbGgYxrbFEmybeRuMwJMDm4RnSCjoDxeXCnrZCqBQjnp6qZnYetGJiTEYu9vVhKG6",
  "key4": "2LaQzYCztxHXzCq3hw2TmAeArFKnM5RYvPf93oYiWv5LsTfH7jVgzdsS1vvNySEAWm972fEMwB8pYLEfYfgM4cwY",
  "key5": "3yyyiHT24RQRGYtcfuZtxNoCq6nWKeekP5q89G2qi7Ed42egJaNiYqPWcdCnQYxtaayijrTr58z2byUm5nHcQfeQ",
  "key6": "4UfUtXuHuEJoMJjVNEFvJg1saRzvtTv4iEx5pTSLiP7LesZsEL4zdXo977ryt3T3QJsZTN9A9PSw6myjvd7Ay1A2",
  "key7": "3P4Wm1mUKWHXAWrknriaWYUhRSZ9LuEyRE4JPCEDCQU2W7KroCWnszbkDZomrvm43WUQepJTWc4HFmQmPhm2wA9i",
  "key8": "4RK73f7e48dzdifb48jef5tTSC8x1vPuaWzLJgaak32ZEkkDQCdHNpaZeZ1x9zNEivZPegHgDtq3nc4mjACenaj",
  "key9": "5Vmo4Jj97SUZTAXfGChF42jX7jBEpcAJ75SDYBc3LH5pDfZyuQqTiZZeYGi2zr4U5juEoMeDFMfQqx9eDwigUXbB",
  "key10": "3j4dzFs4X3Yg2z7KqT3tFBjQVsqV2kZUmNbwFrmX8s8XUtcY521WPWoZFw4T7wjqTi1ouRZh88LtJ57c4R26JZjN",
  "key11": "4ENzdZUn1bmP5BFmim3XP9wKy3JhirGBtfC3qc63yH8CZ7odpcYdQKwRsy6Bj7ZxTF4EwXLLWTSRvtoBJKNe1xu4",
  "key12": "jEY22dh9uSQ1eGKsUGsrWagAZt7nguknCxoCAtJkQutLsuur8M8x7v6GKody4RXamD745uKgxLw8sWCPriKPXkk",
  "key13": "2CCXSQ2Zm8Zjg6wxbVi5uP5VMXWVkTFcfpiWKqVRPN73cqZDPHvm9XJzjGfGUTMSc8jXXhYKGkB1eDfAsYkQNVPB",
  "key14": "5yX8KCm6LDxCXnWau2rhan12QG2GDPe9sP5L8BKUgx4T7jM6xiZgdcDfP6XnYRrN5D1acwUVnZiFhwB8haDH74Rz",
  "key15": "kiEMipJaZDRt8U2oKNjk5VmRUfSGhLCvuHa9LDmvNG4BG62EVAKqP58EAPbA9hWdeYFzxh43bpBYvTeWPbs7euE",
  "key16": "X5ayQaSzG6CmVZsBkkhAhQUa9qbjMjJDdW92B9sv3q4ocMBhkpFriALra5LvfLQoXQQkiDZxJqgKDCu53xT4xB7",
  "key17": "ygucCzW1VUDS1GoGey6Ed7UEUfuzwoAeuJiGHK2sQFDQjkKbNT2ATqtcUqS9MkwW1DitFnja4QUWAKmAKiDQ6CS",
  "key18": "46YrRaWDAjYRHKEogXnKR9n4XPT9Hod325yxQ5Dw18uX6sU1VzobTamKGAB3DeMzUC7HMEyhUHZVXcTknsrbkrug",
  "key19": "2yGZcH9Q5R4DvBwSENACQihA2b3Qi4379rRuoJyJn2M9wEHDNdZBkBEMY3mA6AKUqRcLfZPkntWjPV7WF8TTk5dZ",
  "key20": "3zbavr5oo31ttjMdJN4tRYPpR1RpSVXXC2wgL951AT5NkQ4BjQjGGUNM91jWmmFLSohU9cyB8e8ZieyXcztRX94s",
  "key21": "Dd9cPtxcmo2ThyvSkmAq7mVDWAtwqjcNuxavHjEhBYWcrqZFCYHoDD3ZqFy7HjbM5r6oN2T3b1f9SMdaqkyoE1r",
  "key22": "2DiyKdkMYr17WpYkQEtkbyG5gJU3QQJuqdYyb5mTWgx48uz34KJrSkmV767z1MZw9Y4uxZ3TeY71kP7VFzaj4TiW",
  "key23": "3JzooEBcW1rpmkrFFr48MhyZHwGx3q9XEMovA2ax32Rj5YJ7WYDTrQHMJ2kHVnFYGt8usYx5X3EEy6Hcm8EQgDcz",
  "key24": "5ymvy3neEhGDoSRGgaqkFTY4FSB41yKNxf9FeN6sV87pbxzfGQEMdXPsYsa5SXeixWnyBCVckuirrjq65kGEvBo6",
  "key25": "VGh1bXqZnmnKzvMh7WUX5EKs56xcTENkhME5b6Nu2gMVm2YgFmUAX2rXLqX6NguCcSfrXNbP7JKfcWdJKEah7Xu",
  "key26": "3wYjaNDCY9c9WnQXJzVCYZTLQPzLSb45Bk1qmCFzkFXCZDkWuEg9qUgaG1WxYiFCY4JjSh1S8cTj64QNsxdhpy3R"
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
