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
    "2cqGcGodbYGnKpdJVNUaBtxmfwJrZMvmpFbsgDcGmNVa7kW2nZznucw7efq5kzBmX295rgvJdkryps6qMxL6JEnU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xR5LmX6pE5R7GRjiLDQkVgVtMf2qYzpJ6X8JJYFtrDmpfv68Vuryec2EmXJbkXXyxFfSF18d8pNTmcFAkSRTvHb",
  "key1": "5ny4PeDoGfdoYDWUgcJa6NxDepmzTgr3BRR6TCFZN2UHCq5HDNudsKv9eHW4VvsxKyyWqxUaDusRkeLm9YAuHDs",
  "key2": "5hSLbc34nz7ovHi5ojkuZPvw2rvB3JaVUymJiENGUHQ5GyFARubthxtrz95apz3YUm9ANn5bwwuTPsdkXHCby3Gq",
  "key3": "4Tw8oMZ9FhbktvMCgi8BwVVqaMADDVg3oU6PHfwzUHw68JST1X7VYpHqu9xBph7kQKG6wAtMveWWHk3a2wF49u3Q",
  "key4": "4krbatQuKmMzLTDDLv24YvCiUqHHCNZQzwMYrFbBZqxk83o42N7udkh7iuesL9qNeUz6J2fPZRAq95C8X8utM3ju",
  "key5": "22mGvAUZEJwqktcC479V8co2gczxq7LQiro8hpQAK8hqNuav9uCp8YsXit7BsMj8yaviurAfASb6PwTV2soa4Gn4",
  "key6": "5r8Ui8TGo6ypkVS8bbXeffBS6YJs9fShmNjEjTWuJ6wz1PfFzay6yB6r2cWsT4Qi22KX713VJ4iFfDbGnRgVrqSx",
  "key7": "34wbgeFR869cC9MCXsAxxJmACw4n3DvnvV9UQ2UJ9UmUu5wokaGMUY7ZR3kXvb2ZUNETphpnC7pL19pCPV7SVio",
  "key8": "2zKLmy2vDs7PXhRnyUD238yadHjWo6PT5ukYr2AP32gJLPDhACmBcBqYd5MacwVLfapHfG3gDosjF9nq7hvDrCEm",
  "key9": "3MVU24dv3essA5z2sLqxYWz3TdXSTSV9D6BWZDWLkEqDArisJYQ2vnGJvZ3CHpSRTDL1EAPCZjkkbMajuAzuJxqQ",
  "key10": "45Kb9uMdfFZP361JctS4Fganx2EMFzTp8PrjSSGTRD51njtLVPfzSwHSzPHsSCD2AGJKffFLKSyCjEij58ByQHwB",
  "key11": "66pvsXjfgZ9ijuXpd8QqdfNhbUZAGEZRbxk4ETTah6RrcaUNDP6x4mtSFnVG6JRM3RbD8HZFHuiyV5xGzqwk2ZKo",
  "key12": "46wutqaZzteKsXpDwLZzRDHMNhpkToTaHbDTbPVCd7Uk5a6TDMXF7ia1PHS2d27mmcxtJM9o1oTeRX7v6nt62x6n",
  "key13": "4KMBPx2ghsAQYYzwbphwmio5HfSdqNo6BrQ8UjgXS4BesN3yaJjVWRLHBn4bQTxH16iZf7x2DymyorwkgTfEirnA",
  "key14": "21afUn2rAvHdD2TGXR2ZiStCyX2pcJbz1Dc5YdhdvFtzTCv5m4RnzCi8RsmU8VEWzNA3zP62YpHwAfEVukkCi7Gq",
  "key15": "3vPSHLwj4yJsTSwEeUcJkyNhRwaiAD2yfsMdvf3maqrFqLuWCzc1SYsn4TWiHgeZXc937mp1gFNkq8mg7RtFDazD",
  "key16": "3cnF8NeYhB1EfXqxdsHUX5QWegsDCaNyo6aHBAK5wgLMQXNiP2M3DxRqjfBY85fpSW85mEodqq6ynYA39MtDc5j2",
  "key17": "2Qnjx4Qta1bSgnuAovd6QBbYdkRKVkBga4WNcUeXayfaajX3YhJwfQN7xCJ6cKqimEAJkbhXE32AXcn86WHrzh9b",
  "key18": "4FJkXv4DCaoahtVt55rY9J8668hXjsNtLNHuQgbTLngwjbZi1X3EedJNxfuGcYfye4MwcGqw8gMGNzfHNBcC2Hzm",
  "key19": "52eympebGGFQwDt56XJ1u7F7PmCPKAgfhBhNtJrKcbhfMkHH9oPvgZ4ish399MwK8rFfududJThkpoUn1jFLsdg3",
  "key20": "4TtAHREyoXCYX7oXxYnRxHkGA96PGNcMKXrPYqH2rfCZnCJ6Tx5jZ4zziiUNkfWBTy6gyjaA6Wqe9btNJbPGGLCg",
  "key21": "54QzX5dDmPyV74cLVk9yoogmEEULGqbAgHTRLEWaHqJnpnSQ6JaFTGBKFA3Xr7a7Q28tF4tCeAszeTNfiEHb8Ybt",
  "key22": "5pkMDzwtu9NEgrX2UxEENQSSDRqk9x1qCKz2aWUqmQHEpEN5p5oPcW633zWXgeDbUYER6w4uNtYJz497BdDfsetC",
  "key23": "5mt7xpYWZiuQbL61SbbbqgTbCExrNdjzsQkhW53YPMjLMRE1eksRBpUwD8ppksLLMTkumh1rQgER8X2c6BpAZFq6",
  "key24": "DKY9hmEYuhfxnsY4giv86iqwApMFkDT4aZjTv8m2gjsNd2hq7PcPTkGHM1haTL43J1om3v6VY6caJFiVw1yBuwc",
  "key25": "Arn7Q3rZ3c3ZhHnBDmUZ6EVYJ1NNXgVzVPV1pUHVmRmmXa83gdxf1ZfzJMZemQeCEhb4gEhqMPjQexhw3YkWKid",
  "key26": "3M73HNv34pfP25nEmR2pFPATtTQYt5wkMj4FpsgX4jztVhB9AkcZ4ertfiV1asXhZqYUmBEpYkf6QAVq7EC6KRne"
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
