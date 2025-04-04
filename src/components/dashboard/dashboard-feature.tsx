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
    "4MH5KioyQnxiXUkpxGM5Z7C98WvCXwTT9bjXCAC2dVvXEEy3PpdvGXXymVhA8v6CkFjiCwUxY41GZXENEGqccFBz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FzYxf7oRs6vhc7ivRpL7CoWMbRh6ZUadJtKRFWTvVsQ1Z13Y3mMnB48iPASM2NfCmRdcYozhJSx1KxQ8pEULsxg",
  "key1": "4SRNFu973HFSBr8MRivSpgsrmNBiuriCE15s4XnzRbvxby48ww753Pao1YT2n7BMTv3cMUZBFTXaWzKcZ5d3dgTW",
  "key2": "4eaKRdzpQFabqXraU2C2f8hjmtGACWMnnQPMTmnr3cU6jQP1fkxgjw8dfSgLTiModHFy3XCgr42nEWC1gD6cvoBs",
  "key3": "4YP7XS1biAL55oRbrHy6hFaevg1EH7w1ctN8HoEvyttuyFqcGLXkBXdFYKqZJaYipvJyoUg7qN4uGV7nahhV9e1a",
  "key4": "2c94YpXVroxQjqxMGmTExZWQWvF3CCxH2N7NVU5M4KErUHCDyoHGGtg9chcvYzTAJFHvKw1JzDNSCN4WJU6AtAAf",
  "key5": "5UwP1muD6iATr5nQm77CrFLQ8MyhE264c97YcAXLiDucAzKw2NdbVXpd4XhweroRya9iWe69qYLXVd6h6w5bJXXd",
  "key6": "44tZKqqcqP9vujTRs6Kga3QDNT8At7TXHttKvcZ2EgrS4a8rGoJBJNE5Df9oc3XvR6CE5tab5drNqLtWEKCQseLJ",
  "key7": "4uv3eMat5doMeLSQ7Jwcu6xsk7M7HG1ZHwxiAmFiFc53MRsJGTQdxiwgPdiMiLzXeGKfBG7DwUu64a97zgqy4d4P",
  "key8": "2cFTxwr2zM5XU4v6MZvCMiFfgWqYAe2V8qHN6j9xxaTTJcv1XbDETXNraqanZpYoWxyPkAwVJbn9ByVid2vVBewC",
  "key9": "X1UfUs1qY7dtckH993yx8jkBM24nwPVqHVtEM2bWEPu7u6UTDZnXTUXqaa47JPTJqaMj7Y3VeBpJHq4Q8snTzpJ",
  "key10": "3zU4xUVhsnXPLW9Wn2uVor4K1KHFXo3jA8DkLBYZbyJ5KtSTc5FVSEUHVCWVVSAZtsURspGCGzQSXm7qo8nKxdre",
  "key11": "43jH3dcwGkMkzscbJbvuVFVftcB93fvXEuEVmTSD326JdhA5HpZa3B7wGfmX8WCq51yNSEkqrTKS3R28vWCXaR6N",
  "key12": "4YubmCcFxYvhovSRHxC2cdeoZxS59SmzzX8kHH5JDzSrPQ6Vt5JUAYu2pYRwqUED49UpuwfCLFkSxde87pp1aDSM",
  "key13": "5av9tEjUH7Zmo2Zm3UWdTvRTb9iVuqDFCsqE7rKat68uqbWkG4yRdVtHH9MB9oJYQtjTeXRMZJFVBNmKE3s7ZitB",
  "key14": "tQZ3DUwUe8dv7ZJkE7S7hCDYaaVukNCt1h3T5MsSrntmmR3rmbHwz9DFjCoXxcNPh3fokvXVqsqSLJbbYW6aamH",
  "key15": "x4LiXZZqtAkcSUtt2KruodQD9PbXpNG4BFkQMLHEwztP5wTRh3oiJaNcacQtjNYCWHsHK8a6UatYY4DSqJ6Dqq5",
  "key16": "5dnrK4EBP2NHJiTGVgsTAmXksByECLGd38B1osbGieFPiQJfVVtBdEb6PEJ7YdXHjK3ikxBncpNXegffpTrNFo8n",
  "key17": "63dQmEzdJwMU74FVbarfhEDk64E6fU2yDuwU8MjaTBRWnGQynafsnXTFBwe2SbJihM7uDfQt2ynY5a9bwui81qcy",
  "key18": "42HPLLV29ctPGwQgLSkVyUvVp8kE6CFSXVSiZ8gkAZPW18wRePYRWbyYA92JTSiaL3YTzYWeiwj6KYQnGam9Pu5A",
  "key19": "4Hbqn78qd6bai7NSgqQ52St27hDAgvki449bJNwyJKEkkhPk6Ne9BPaA5UwUKQfo8QkwDjZhgVooVCJdBHhn6zfH",
  "key20": "3DwojsZR5U5PHnhpkdU7mzHEqPBQqrjoSzyMXqtXjhexN4vf9QLhXQVttk7K1jKUtEQWoYtXHJGURmRawYZy4a2j",
  "key21": "3KzziBbnMHdTcZdFXpj5XFW17Pz43sjWuWJqTvnta8LxK24VLNeuwBD8SWpvs1iVzYVob1QekzLJkyNVYfSgTvtM",
  "key22": "5DbnjVEjETWHZFSqGyJcTbwyeHTC7GBbtzVcdzxMC9Dcb5ccT77M1tPSSxq3uZUTPs2eufwAr8cSL4vE1KECCR16",
  "key23": "k35MkuVnrNPW7Bm3VQbGG3uZMCmW1kEod7oZa4zXGePKi2kwz64MuUsmtKcyPybQuKwf7hSjEogDR8Hg1VpXVRD",
  "key24": "353E15yDJLaYwW8jtxq9oW6udsXsyE7fqPsHn1o2Nf5TgHLzweB6nDRwWt4K3R2zFFhSCcXUw2E8gBhPzjC7YuWV",
  "key25": "3qfcKa45jvxe6cA3UVC73Bp22522LTqBV64SsrZD93JdmaucgM3ZX3UG2YcyannXri5xaNErmmh5L53qZi8VeWq1",
  "key26": "59YxZ8ssvZSZ11KZAuFXVFggksWcVsGYanP9ZKee9MbuwC1NYAvtcUjkHXQVV96sHcGu6da4X3GPELhL5vsYZeVb",
  "key27": "4PKMpCFgeEY6ZZM2ADBmJ9f7NL9JxNPttR7keLVLeWyJYCHkvRmyuNQE2Xcv1nUhwA9wSL8oP2GTfRZSDwtQxRgg"
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
