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
    "4env4WxuREFrgqDaVYPBrxoMewwvmRPmjjrjd34JtvoJ8oFnFYa6xNB5s9vANP1ZBVLTREQs1jbEyi8Fw3CypixG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FGdQcgMd2jEg6JAn7Yxt8xox3JdB2bNBJP3SjVmSHqpNsyEnKt3VZKGsNY9Kf4CtHqWKBNMGQidptK7E1DTKC5v",
  "key1": "43vq6B38i8majJ23CpG1hLDtJQneJHFvMbJhEbtECHgf5itsuCzwQZSouVtSF1DTeYdLM1ojXpVWk2BMUp1eVNJ1",
  "key2": "4ZxJo9hzqi3e72M1ZedMSNkvtHsaYhPoXbP1QxbNcBNVEcMYxDVGpYHsm3Pz3ocTT2cqe53WT1vFRLmW9yV9V4qN",
  "key3": "2MoCCKjNTTi2nDXrtf5bQfqAV3qsB8kJg37Fcw1Na2kEtUbs2z9NCJFVjJPsRQBoTPx7CTbPb2t1YiGsw7ntATNu",
  "key4": "2HPoyc1hpmPr7BFvVrUAUWcY6fE5w2R5Waq2efwaAdyZTUCs1YmCbEG4byhH6gjGWXnT58tfGfV39HdEQa6Pbc2g",
  "key5": "41rHFHdezdpcauSxiBLnwuFd9CDAoCkhTFVdEze7HeT3ZUsf7pMV5JXA9mQq4rZK4CE2fCW4vx5333bQUHucpAya",
  "key6": "DzKCeFnEX9J3D4kXZbL3UR4tYqKWqT7aDcu1NXiMSWWEHi8LCUbZN1hRy5HEkQT6sPVPPmLzW3kHs8A7LRnLhBt",
  "key7": "5FoTgcq4c3Ep3dwWCpvmfYYBGiUGJSpr49hemHWmuYHfhCeAzYyHTJtXs1V19s6FWNhK8mPNrEJbZQ1wTkrMAAtG",
  "key8": "2eDDAmtJDtPfEfMZU83Yg6Mb4DwzzyPh7r8Z4RdHUniUGb7K6PJHFkeaDGMqcHYWfDPzhqZ41gmFqsiTgRHY1Qvx",
  "key9": "32Q3ZWfHKKZnv8uqMpPaXWsAJ5uvSQ9zS5f47Jzkqjpho3J27T3YEAM1keFyLdDdn8GXX1yWzMCMNJxWu9tqkrNm",
  "key10": "5LUgJsEddL1vFip366zqWUHuWCogQLoUTxboU35M2PtQ8U5iLczUg61Z7vG4Y6r1rz4PXLC7rEEHAwWVMzzTfsit",
  "key11": "2ucqULEAJjrAwS422oTeEmqhDBeaUnbez3cpKTtCge7ZYDzzUppXuDMoLfnk1qy7aPJZjHJHV8ZEAf57YaeYzw7D",
  "key12": "4SLhJrrRJxF7cdhqCj4c2nzDfsj86LTrNmy9jd6S36n7dLRsnDSB6XDx9b8sQodJGWb5FV7Tc9Pb2ScaJ6rnJksa",
  "key13": "5sC1nNZFYbArsjrR4gs3yvedMtNSi5xpemxVTwH3MKJu7gqTudmJ3YVjikf3mMVBYUnwVjw2sKZ62NE3tmZoPcJg",
  "key14": "3zwQaM3uA8keUiKpMqn2QSfePwu34Te9F6R6jHCZo4BN1DEPhU69imzEw436jh5TuVzZergwb2CmgkLG6YaDtV3G",
  "key15": "4wjRgG4df5pFTG3fUxCyd6icWJi8e8Nvs6Dfh6ygMssDGcKqUrWzxrL3KBoHta3eGdJby824Ersi2sSevUVgAd2A",
  "key16": "5HjASHY9qUj4MnRaysXGmu3C2VNMB379Zr26YKYiX9tbkworLZA4m5PydT91QFziDYYk1LwkjJQQGJXyzwBsCqey",
  "key17": "3kMk8nPrGcNhPNmj5Fepn4zsUGdY72KPtpT8ucd3bLCz2CcihRHJWWAx1NsdDJa9v6kSjfqxMp2kv3x545xELwzt",
  "key18": "2SRPyQsW95P2aZisTuCGDGrAhdqpvCXCqKfLMKR4e2xj8DsyAmvTXMcjTSGJTdQ8VeWhSbjds1QK1LVgFDawzqcd",
  "key19": "4RLajDfZDeKTMmKcbJwE12bs6grJQzhpU1M4cTQVQRgGyQjyz3CfuA34Ts9SA5LxsMWRwQvRVSj83K3XBSDUGRcV",
  "key20": "25wWZNiUpi3FGRfxjpQNvn6UyizMQvGXiuW5kzXvwcQwXuz5bCDUZsNuoiq3qAKH37dfbF6AmNdGVtATx5DALj5X",
  "key21": "uPQx5qvT5hjL92289Jepi3TQndSHxNdBW3WCZzoS4hWhpmVaM7vGGjeiC3B4LEAocMNZJSWU6nQ6v8Git2BqGBi",
  "key22": "2W3A3gXHsxeh7HELse9qVXArsSbTUBVVRukQcEyEwAMYtdsRnAqN2FB959JfVjGaZKZVsnCTV7AxCW5T2ohJA2D4",
  "key23": "GaYmb3yvWqzxH1rsRTPL4r99FGouK1g6vcYynTwdqdgqfM7nP2gmBQwNv8cq2TWQ1xTbtswiwt4e5KUwKwQm2nS",
  "key24": "3SeHx3givyHgzm4SJdQbk1zW5hmYptTRzWaaMths4h9BtYtdDX1m7DGDC9eWnJvc7QmFcBv9J5dU9LePWU5Ymndg",
  "key25": "4j8DreWmMyvRyYmV4BzAvfu92pzhB2tDRD9Z2MpxU9eW1umBHLzKGeWfrSsJBCoYFcPE34XX8JmXH19Z16cAk3B7"
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
