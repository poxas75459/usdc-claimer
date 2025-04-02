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
    "3HPAKMejNpq7dbqYweESpUMzweERSaVYv27dUtGcPGEn7mUhdnXiTJ4Vk8Q2GbYs8BdvtHQS9dEaUtbucX629SvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zamkfxwCbChsLWmN6V1TFMzXkWNBu9YMtc5oTZXNVPzpSibW6kDccZC21fCATCC2qKDDQL4XVynd2Wrr7guZDmk",
  "key1": "5YnLgusU9Due4Y5S1qA5Wj3KNPYtSQiGSCzN1KYp7xDQRn9X2AedL8xjgujBUGAp4uErVtLH7g4BQ9FJhRFXWCRd",
  "key2": "npMhDQF5j5sFgEWn5EqPGAjtFisf46fv2i9qAtGSjqpwGiBopCEs7RndoHX4g67a3afZ5wgtqos9YsQPmxt2SbF",
  "key3": "5VdiADgVTP5RdhZNZuZ1FKY8Y1D9r7Fp2H3kCo6HV5pbQfhcCoXz5H4nLgTYFWeex83q6uNW7ZkmJdYBc9Nd2uHr",
  "key4": "4yRKCBjifNCMTHN8Gny577jjB6JyWeU7fq8WHGfnjKSD4bvHbaWW8c74Zdoae894GuGgxijJ6KGpJ3jmXNEFFyQF",
  "key5": "JUZMHAHXxXRer7QVwM245uGFJMSy3NBAPWu84Qk75nKWGJfEr2FgGChx3nmVxWWMnFS6PLxVwERf5tnzxGQ3mFV",
  "key6": "5xQwjPKjAJ4ytDiEcvZdLVYGJaRXY3Ccu8nZbSWBQuCj91ytdVBKdL1ZYnCnNpLPAVnPH7GqwbQFEEqbLZQ5qdYR",
  "key7": "2hQZW7W5kMXrvkSAqPiknYDanwcFEjJ2DXKr7EYfEGPf2PucDPvxeBEn73YwjjfidR3Ja8nPYkVBxnw45cMLUehn",
  "key8": "4Qc6b5xkMHVTMiQ9DdANUJpBDzkL4zfPFNpwTDNtu6LY17tBBACS8Wt84it2KCfAjY9Sx6n26kSZmU9LUnuqi5oz",
  "key9": "WKfC5wjoHUYr7aP2SyiG6huQY626eh2eEFgniR2Svi1h5wG2auzRnvDDwMGCVHyedDtnmhMSSYbQB3J6qQbj94Y",
  "key10": "2eN5MAa4Q63wfVDqjDVZkKn6HDC7ZpXuJRz3qn4JzLhkRm3nK2EYu4uhEgoH8kYtXbRTPwMRZxGwojvWyBvqEYCN",
  "key11": "b4J7tpazrhT7Eh757DEDBxVKXMCvFvaEKjrVMen3vBzDMDQg77UaitBusBykvxHCQJVBVF1Fc3Mqw8uDySNJeMg",
  "key12": "5f2hJDCm9Q5s6LEZvPYk69xXY4vYPvuLvcc4hCYzMmNUQcy4BHqEg3eJTFbbZMFUmcRb4Ekmbis28123yCAxMLro",
  "key13": "2x7WQ5K9aLwHjv4vCVJsK3VmZh3t7eoR5xsmyJ2TixnjMkRQgVzjRx7UE4r1tMhwTUTYSxUjpfpgAuB5eDi2L7ox",
  "key14": "4ExxxdRbL8chKCHka3hp2etwhBFUzn2hgH1RxbvncLKokYhjcmHTQEb5du5pern326kVPVxNr8kHYPwp8BsuPM4F",
  "key15": "4WEpRavtu5QFdgjJBe1dHWTsVPmznc4Z2WwECnv1kFA6KF4v6KQu6ZavEkEobLpn1TUzPMwiJ7GHkEkVvtwW7PVQ",
  "key16": "3ak6TagXqFn4LMT2sgjpEfWtxEJDP6T4T21JPxGmhWF6JQQQHDhEggMBWbrFEyji1DZLnpRabvngfdexT4S2WvAU",
  "key17": "63rvU737UrTv74CnXPFwjN5gC4akaDBvZazmfWSxnQAnDp2pw4gPKDCqLVLckRPifNc18dFLfFz8dXJmSh29amdL",
  "key18": "3JmhGzgRqhNPdwjhHpPBsK96GcxS5fcSHua2sSUzRkwy3YGgp1tqi5XBV31ujwEBD24vhbWgkqnVjyZfzW9KyrDw",
  "key19": "3HUa1YBpnHkxSuCeDb9Adnbgu5RBgVJHenzocwt7Zmi4P7nqucKNvJ6ciXmuP9PTup4XvABfLNsc8MDt7MDpwmgm",
  "key20": "4zbZMSPycsiGeVEwxrQAejEazmhnGQ3g98SxnPeFiYryp9cHk6YQDHizXDzYWx5aY6wby6sEN9dGsuaUUMTewdfW",
  "key21": "4oUh9fEqJsjN6YH9Ay8WpQ3joAMzwCruwNW6gCJUMLRDKqUx8YiXzBuohyPKydChNvTg5Jzn2HrtjNixuj1B37qp",
  "key22": "56aiv3HbTRDmi5VGGKKH6QVXnzZm6VE69btziBxGyFbMHnu6zNQTsD5xrWCEDDGWvooAiJs18Eh4UfJSkAW6voYA",
  "key23": "3ApS3i6e8Pv5codQvQu1FK33PZZ1ZCCBx7mKhh5eLTwAoN3uQP3VoK2CuHHt5yzWpPpggj1fkHCS81ewiT2DjL2y",
  "key24": "3fUTvJWcBFo8tB3QVqGpwWD1HC3r7Fh3L8qSUbMswaH6zjStD1odRChDMZaTDtNx6vjj9XDkvAqvYVM69aAMTzNT",
  "key25": "3G4prUAVJopad8bkJrgcNeYPpS2vUDozU1HhsAocK9vZfzAjhq9poqJnyvSAgENNm9aTHxsJ1tzK4UYLxsP857aR",
  "key26": "2d4FHQ4a2x5z8eT7BQLMCLwxxnAxLoPZ8NBRsag7S4j6E78KUyZJno3E2kw3nXzNe7yKYoxQvbfB8DQTSA6JapEX"
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
