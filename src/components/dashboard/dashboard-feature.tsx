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
    "5HQPGpL9dum9vt1wWQoSNJAnCyP5F8znHyjpUk7VswBSF73KSxBytfXNdXBYrBzuyiBAMKHiMabpcENNVWEcyPr3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zJ2Bk6xU88vNSoXEpC22cYNTirgocnt2vUcZqzYPFLkgTgc8uKgHrZjmr5oR27dfoeYreupeC9ETbsxATVBN7L5",
  "key1": "5JkCQQowxphkyGgAbXT6w4TT6rpWc45V2xBcuHGdf7zhFz1ATHbyzGV88qA57uSzNj8BUP5JAHhNBH3nq7qUYLvn",
  "key2": "4FfKSH9ouePQL7W1QNh9jdNXiE9h42aCf5y5PtXfaR2BbWwCGmy4drTQ6c9FWzP86EbhYiffD4b2oFAfRA5zYKSc",
  "key3": "2zd3kszZ777cRCEb9oRJMi5QJWvemHoWVvA9gfoDeU9oCGTTg5zH6TaeN9jdgB7d6aKhNbKHKFYH3CkhHUfdfMJW",
  "key4": "5gzNN3bKSUbYHhmVbGzhTWoRu73s476ftpmNvfTJetUNwP3hYDGQdkqCP5xb2Kne2fhootBjk5AkFCumDqTBLxmA",
  "key5": "59761xkU8Dxv5dL42Qjo8Jm4mbnjS3J4XfKUdyAuosRwbRaHauEPCVNW4k3brkRUhn6edsLTiFaRAdMjyuHv4h1C",
  "key6": "5s64zh74ExU57BaQpoH1CdNNzCdkwfozQMSsCXrnahmpvixGG8AcbtJAshoP2hy1bwkfLRHdAM2kkDUjkJ9Yb4yP",
  "key7": "uX3YFtKDiN1o9waxHt7omgD6cqk5A8NifdgfHUiz9G2Z9aSCLB3DRGBPM1JWeSq3pb3rLTBBwgAVoBNK8iVS4or",
  "key8": "23krkDE21PZBKafy7R6VzaNg442mHEHaysA7izb7SUHyupkMzNvNgdH8FMQq8t8yS9wKwKby55o88zAV6WLaHBKU",
  "key9": "4TPjk3jBfjbuX6HriigcQEvqrnujuhA9cXUjfhTEzHWkT2q8fqSeoLJnLtnFv9dJ9Q6fxx84j7azZQYev2dn6fB8",
  "key10": "ik6rAJoYrdcMnrmc5ardGE3wwqk6jEd3yHtK9bUdcNF6iBQSKUTnmJfyFVFrJ8iyyjHWn93DwiEyBQHjL79XGaF",
  "key11": "5eZY56JrjBLo97UMDBS4ET2b93Fy37iqjHstumh4vZjeqydiaxrtFYm9w9N4sJTru1jXoy5TWVvJ9NtYMjCwscAZ",
  "key12": "4yy6fWWbSNg3ZArBuRUuroYrXwtC5AfdvTFDAQ4gGAe4F4S3fksL2edQ3wi1uPcF3Cv5SPuNxjGYbyQrAuyDW2AM",
  "key13": "4zhLXU2ko9bgKS7DmamksPgmenRRqjUUNgZv3Dvd3Fue3pysuGnJp97ZoYt3zBnygzLA8FUBNMSMQZ5gwvwaVyQA",
  "key14": "327EHK6m86j19Y2asQzBx1eTYY9neWBFNxKM2Jii97mS3nGeyKdCeYuAyjpLT3sy8HWQyiBdVqsquzePUtx6CDpW",
  "key15": "29dCe7TFJavan1Sc6UMhLfQPzoNZgeLXzQ9SLVPd4ZMChA7ybJ5uMnM5cdSmaAma7zNhf1ezeFAqvnANm4pjAWrB",
  "key16": "qsWeUo3tZHQH8hEyNQWM7iuqARafwPkTP2hUMtR21Lkx2NWprTpiT7rmrNQTPdjLSRAuoFYUjBtgMjxPJFADYQF",
  "key17": "3Vv2niuLLKuf2EmGPg1nmGJNX3y9R3CUuyuw7TuadYdJUJZWp3Mdz1DZGkj68FHDkRG5YVaHF5vqtgRttXjUdpsK",
  "key18": "iWXnvVycPT4Q6PgELiDn6fTCMoVeR2phjBy9ozWx1suj5RUs9BFDQEJq7c6WUKnHLRmGWpxoMcShaD3QsbKH3Kj",
  "key19": "5miUPMrZTwaSjmFQH9QcCF3ahEEax2PbXfo4Mrt1CUVW8JYxDBRSiatP4KXbqYZt4Jr9RXTov7hsgwvk2buhXegt",
  "key20": "gfZS5HVGqXH2bEuWEeKGgLHZhcpokui7qgMQi4ZSNrMJ8GKp3aoEWvnsHEKfiDmQu87VK5UebqQUKP6sFzUtLYv",
  "key21": "4jCf5ZhqF9iD331wAduaxfZSMfd2Ccmn2sizrr5K3hjvoeZSegYWtHdwPGXEiTZFKVZzJAiyddsp3Ne8xwPYyMmo",
  "key22": "MZixeGUT79nzDseVBGXdwN2oWXG4FxgMyz9WmP4xvUmUhEt7Ur7aqrKe3eXbMoBM87EDPZyANTc5sbHw8rHj5bR",
  "key23": "2HdNXNsdvqwvMiJm9Pg6ottFP7H6MGvUZuKa9n3hE6uR1C3adfiPqkxBoK1WeAfCuiRuva1Dcs49ooSi26kZkTAe",
  "key24": "56d6uzf3EGjcmof2NC368z3LB7FuHrjkyQma6VN6Tmkxe1RMoDh2kRS2bm1dKLqA5V3Q66zhYwzs7XXuZt2pvMYx",
  "key25": "3bXmFxJfReBJihXuRDiTjZv77i4A3jx3WjBuCoDRfXVxSz9cC2bk9NETdwvwpwbZPQUdSZoKYqBvWfeCdKejkCjV",
  "key26": "5J6pkCr64HfYbHDrAqXDjYw2emvNFSojZvorxc2fdvGwmrWegP4naqBknUY52uhCMrnFEugZV6fvfDx4RiQHJEny"
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
