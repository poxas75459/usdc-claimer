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
    "iVaupZpoZS98kgMSGnf6o7hNvb6hiRnRhvTLM9FFBGmo9cxk5DENErfpQ3jdF9wMgnYwvb6UMXyxHM2UxtoXBZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61YwRTrd4d4ET5ZkU1J3JtoEQwUXVXyY5gQEgdnfnZkx6KUUCKppz1Eq3R5JKnjREa2MKXnfth1DmuDfk2ZYRVDJ",
  "key1": "2gB1bNyRrSjEiatpo978gjd2X2CfxDyru2EssaBNB4e4MAAufU1oA4AP9GgiE32ziqWCeTpDarnPE7ff9p1kV9c",
  "key2": "3gGd5PhTvE3QCrWifD2XTsnUqqZQpV5wMCcA65wS53dd4hddyMkAd2vGtVJqrVj5v9aQExerbmUQPTMcDuuw3TWH",
  "key3": "2jNXBhpLkbA7nmZ9pHSxW2M56G1rycDN9yD4aB3TY1CA2NmCsCs4FjNW3hzmmWjbKvJd6xDb5iztK3yLmbWfizdk",
  "key4": "BoCgkS6o9VhuAhrf9cRpt3oB7S8mMSfJ4AeV1wXCisw1dFL2GMHJJATAyMMobSa68EL5NucwR4LBfV8n8hNJtmL",
  "key5": "KM8Boqky4HfgMAsumr69Ky29tzvQGdR51fVg4pe53px3hMpKDDnXa9TPotCLDX6SbzLFNJrpCHBLK2mbZV1BTwC",
  "key6": "4Xx7wwKDsfe1VqWy1rPjH733QL2WCMgj6MyyQgLMvxo9f8wyFDn4gY9iYS1YQX7TAFc5uVs5pAq3aXDViwz3yyF7",
  "key7": "2bzFSBHnTN6UouwvRdtJk53DBAKtq1RDGuezJ6pPnSL8jruoZ5NEUFG3L1i9GndDNTY4VuJwh1d3fgE1Qi45oSrG",
  "key8": "4ugaj3NJ7MzBUqonCVinWPCaX2kZmnc1rH4kMDP32UAJC55Pks2WDQ6zc4YxuM2zGR4NARCrWknn8soBpSAo6hk8",
  "key9": "3MvYjxzvB7QEV4CECjNgNGi4quPmWyjrNeeeBcgg4iVyW6s2XV4k6n4VVNNHkbzQsht9ZJTsAvUfYqH8Ue7HwxU",
  "key10": "2QvmFfiyPpD7SmNwvBrh98sEc6Wy4gZDRrqyMvWhPMGP51DTm4hayUVUa28mH3Pw1xbGL5xMjkbPKFiFyaki1FYP",
  "key11": "3rb7PDqVMBRpgnyMRbijcWWAL8xCfCbKrryetcMX2cF7T7H6fYk3AqzR1rkXTogQW8WkEjg6zPhyFjSD21qB3sBo",
  "key12": "4eQnsJReWyCaMPEzvzC9SLk4KnBWnKDKUZzWRdQgFnhDup268AwijZ8kNPnDFQUBop6c1mSagBdHNYPn5pWoYSrZ",
  "key13": "2HbotcN9rNzGp945sCc3MjK9RK8DKQ9iupPBdn4YBhRdQHh5AEp2BGLRivXa4fMSuhE9dXG1aMRTUN32UjQbqTfx",
  "key14": "5Ab8uUHyukGshzHgUuehmYJNgYw81JUfLY4tsWuXpb41r82pzhFybRUuMFNyFEyghfC5DyJL8hczsr7fN1ZW2CCi",
  "key15": "2dZZFGkpRtYZuEMYhooZeZ2gRo4g1q1rbcuAFysuQduz8Bgsi3CfmWtWYPk68CRq7xKHwgJxBUioEsvVSfJaXQSi",
  "key16": "q4Wzza2F28wBHYgrpYpzGRFGfqnS7UUgcazaLJohNhdCQZX5FCsuBFdhpWz63RajnNuGaNvxjD5jnHWauJDsYnG",
  "key17": "2vpQktqx6ygFwrr8cBcy4AjRcsCqxymUxgurWmiYpkvo74kVHEefF9QgvHjsqWH6KpcBA8PLdb7FR6t3f7vuikrL",
  "key18": "FAZH1NBofrE3hn4A9Hrm3LTqStG67pfXELRExScVYgtwnWyPSg5TAazGvt5xQ9etTrEzuEnofEoZPLZTtQumpP2",
  "key19": "2tZoeYTrL16UL5cHCRRnR47prahUdzmQSFVSh2aEhWddeQMvBXfQBsuMzuBQzdBhfqtw33zZ9Rw3dKWw7WDFdZ7V",
  "key20": "9C5Pr1sRekaRJneR1cCYrQrkGGxW8W1Dgmg9EwxxifE5qtPr27QaxTE8Pk6jJDhprfypxrAMiPgexhJjwS5ZJhm",
  "key21": "3RXb86gEQSd6cPMiyCYNpQeaFkVRkEn9VF5Am9Wm7kLUhWwS9r76tqS8Ev5QD273f1HkKy6XXcEwB2FT1r6Q59SM",
  "key22": "2FCptHrbshe831rFz88edyywGX1PRAdHNmEgk9vZskWgzB9G6N34rg8YrLNG7EQB2tksSsLdv5YvpK1iELbDWnPH",
  "key23": "Svziy5or4TvX4JuDitjYQ61n8PRU8kxnjA9R5iL4whdT9yChcL6AdxqpN7qM3jobt8VPzDyKcQgk4DFq6aoJyb3",
  "key24": "3fFqYZKvHpjfauLsKK63agkPF9kcCcNaMWxgJ9k7yzEwPw16pyD7qQtDym48vUmXQQN54YDVremRMwiSf1SHY5iM",
  "key25": "387fKcxw3g5EKobYdRF6dh58soGcXQGzZLBwWVqet2f9y1rx12JfFPWiXKAjJxHp2JtJgGf2DuUha5MQoGNPijtS",
  "key26": "HGTJxeWBUxxsqJcCoDjmUWF1rmRtDAGtXpnBjeBKbKK6k81Bm8DHfrVbU3W5JqfL7tC2jZrMjkWtsDPsaXSwxMA"
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
