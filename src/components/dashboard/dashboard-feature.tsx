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
    "3KXqHM8Qiefg58wJmibkJJTvR28T3imfFNXzmTrg3rJjEUG2S5gRpqDEE4njdZL39ftn7GJQzaegww9NsPRiQura"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q2YBmEj46zaPKLmk23fvpw7GZnsrb9xKvHUZZDuPrbRKNMtUvnGnuTAH1KYb6ut9iEV6zYJHJ6kwcfWokJpybLJ",
  "key1": "5nrpzgm9wqLPimwGvR44dC9Bi6JBwk2Nyr4qPuzw6Dh3yfHudUm7V6bhSMW94LoR2gkwNnXPFs8hZ473eZQcaUK9",
  "key2": "4Tf5WaBJpDuSgWF2CZBpbwLgQon2JmnkD2ZByxqS5MztF8ZZmpJnJL9g14joh3uQPWDaezQNda5ruWJiJXDwcRYy",
  "key3": "37xga6q22wTcrAQXRqYwBKzabGxF1Mokf3uU1vaRfibXUZ84WhFxC4gUNMp6fzyW7cTid4nfRegbcVTY9rXmeSQD",
  "key4": "55DLRuKiARzphj6jNtBJaadHFETMewVoFKfRwSDMkRtBe4rwX5mPnECYQbL5sZD4mjifuZnyQbUYdrhGYs99vGyw",
  "key5": "57TRP3FqnnDbDPteDdTdkwM91vKfWPjgSRKFpq9efuioTjQ3gmhYQex3MvtjVtU7L9yCvGrB8vZJvD77zzZ4emaD",
  "key6": "2febDqJX2anKHXGYoKwJjSuZSCvvSXc8Mxs4XTzWh4hLdcUdTSDiRqedyH2QFtuHTKiARKuCiAqZVQx7BivdtS1F",
  "key7": "2GKXojWQidKLt9JJeQTRHvRJkztbNvexDaZZVHEKhGws4MvoqZsD3smxXZXLoiN4qhEhcC2CnbfLghzk7czKQE4M",
  "key8": "3s8L3AC6HBU8AaVjwz9gwGkGXrfeBtZexW114DtH7ACJR846xs4jyoSJb7maJwHESzjMFh6j3mjyB9wWpKCnM91p",
  "key9": "5GZmArDm63ZHQg8o7PqJjc85CMiMBifTLtG2oK9kny7bSFr5qdug8qR6Wi2CjUGCCDn1rFLHhgPT5tUyDZvHP162",
  "key10": "5REpLW5HKnXGmWQcLAZSUMfFeveUYPm8ZJEP15R2ebmsshxVNbwomWhZy1a7mAtyC7cjdSnpkNXEtyJwLPhzUagD",
  "key11": "2UTyZgymAjhJdPmHDAsquPXzzVhtPPyNBNioFCG8pwu5XJeXJuzyaN3UFZDPHML7uZ2spv6wSaAEEpnWsASgjaae",
  "key12": "2vRQqRbL3C6MjjZPkceYVAYdahQn8nS6RVgUnCbX8Fb1JZpojUZbTC27qfLgGce9fhuAJtQaYXBZYWyiPJEPSo24",
  "key13": "wTGTpti8txmcmCVUs3ndjdFAuNEAo21tREXtdRKZem49UPzNvXZ9tikZV3S8VLYf1rsczxZJLtm3f67ARuaHfuC",
  "key14": "2DrSqzQzqtvCfJmp8YxEXBWgRWH6rg1JBHMrjiWkFzVyucM1DyWrFSSPxQFvdHXi3CcjCPf4wzZFS8J6ySonW6CR",
  "key15": "5Lz38T9gx5HKk95ZzAPQ8tdkp7qxYuagPRR6uvcSeQAKCg9FdR5M6YxkSFXL4o8EdxqALpGf6mjFUnmM194sFSt8",
  "key16": "4BJDywfp8EHFdTPsZPAzoEmmqycVri3XhMC2YdHRHBUDqLtVu2UjkR859Ej9f1MciyWnuSegZjXQAR9iKUZpAjzD",
  "key17": "3bZvVCxJxJzns1KQtoeYfEAea6yFKAbbDCJnqAYRK4jFhk9ju1K8mNzk39wK8K5qcgJbFDyAoDGvpdSsMoKvfe5d",
  "key18": "4LQ745mG3x8kobv9BBDczG91QZXYXx2mPoSXBRMeiKHmZheDmoKU9AVyTgBFYHqjBHBHygwpBRuGBPwRCxMn7gji",
  "key19": "4SwZxZxdQmijgXhH8eqEWDC65FT1gwxz3nr8WnGxzJNxDVN5EwpQSmuzpuehu317eBgiR78zAqoZ7xhYbQi8RmZV",
  "key20": "PLpVdAirDJ4xakhL1JwoUursecmPqhrYCcb97UTricB6gg8Fr1Kt732gzdVvo9RpqoqBdx6Ne1B9Gy5HXT8Kn6m",
  "key21": "UsSPsTaXPyd19W8nvZwc8ue73Ea5MNnaMf5t26nKXDzg2ufXYoa55MbZ29HBQGKDfdHPxaVHwrAs9RnZx5tVbvC",
  "key22": "29qNoY9HSpPVZ1aosgnq217mWriV1owit7De6SLMyCnt7zBymZGTR5VUmSHFg6wCGa6pJTYS9yUnEBRzXhwNtcYm",
  "key23": "5zmUffbpDCc5g7UaMSY2AX3aGcE7baRytdAkA5cE7EGs7ECWswfe2LmA73A5bMvMviqaMcyKQEzQTJcXu7W9yssk",
  "key24": "2JKBQkak4TuSMFnHZt1Xi7zrtTMmube3d172raDWqCcZLeAKdcsYkVj7Tzq6wt6uWBpb6Ehn5oDyqHeZYWVDVUCe"
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
