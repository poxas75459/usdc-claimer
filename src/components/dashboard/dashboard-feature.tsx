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
    "QgXToq7ZsVMHfh2haE6sT6PKF7bmWtYxNW6JASsH7L1yAfvNWvTVpLSstbxkxEyJDQ8wGEXPYjopNzxdcokXYQG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pb6oMMjbuaz7kJCyBuh1wqH8qS55bpPRaDHVcGRv1e4mzm3TAMqgDUdpnkzzqBfUPCvfpLyxNZQYSQbM64ZFXDF",
  "key1": "3qzVXqP8KoFyuR9YvwyzY2E2udzvcDkKxYYumoAnyhnKovynU3CyP8Q2hE8vohsC1jUW3r3t48qs455jYCSm8qV1",
  "key2": "5u3NnaiNe7mqH2iri3UXhyqhrDseetD3rUzHuts8bobS7g76vSRyCCihGqECnVHdomDBLB5dj7FePTD9PiJG9h7T",
  "key3": "5GTCLB28wXFSvz7p1FHvYGUSey6ZMLV5A9T8WmDzBBQZeqb7JGXGzUxMH7JAN4BG4v4oKJPhZzWJhfM539UkF6kM",
  "key4": "3b5784ARBT5JhKj7RhTsPC5LH2HeELK5AD7bt6iqoRAe2NHC8tpRRm92YjdL5VoUq7K7KKVLFLZo2nEZDZTgEF7K",
  "key5": "2gVtjM5C7ngT3re9fwd5t6q2Ddxj7BzpdNoNucKtcEcCT3ixmE3uH7U9wH9HKjsoGHvED6r1Rh3V3MrLwEavdTBs",
  "key6": "63ZJ8D5b3Jk8ixvBsddyhyRF22rngt2DCcTXLYAYtDHPgSHcMkX2jSJYwBPDqVLWv9DgammYmm4daiaCKKo3BaTU",
  "key7": "oSwRk3kRbhZ6LTT9a4LjAjoRtqW1hjR5MBCcVuL35hwNG5NjVeXijzqeJBsWFbrJzMzmwaY3mLRb6pDJf8McTJM",
  "key8": "23Zgfn5kVQa437Dg6wVgQJfB8TFhvx7ueyykUy5EQXCfNfPS4g6HyzrnYXWaDSvzjJ8ZbcE1HeVAHkyoLruARehn",
  "key9": "3cPceg4udE65cCbqrHLDUpAGsZsXji6TeJh5P2LZcpERjcLt8oVxbP95zUh79f4GLbfQbARAZPwDXThnxRGAmeUD",
  "key10": "3smZURKSwX45a6QLxyTeoy3WB6b3ppFx9nbsgyYBjusAsH5TnyhUgFNk9cTgbCVsJt1onDpWEnQkFCufudDeqKPw",
  "key11": "5GR19UA7rD2frzHTfP2BNxxTwe5AZM48AVx9aMqRxi4aFVFCMQnuKiVRLNg7GfW6UCtVDBffGzhY2wKPQUSu1or9",
  "key12": "66sL8PS9r6RaCYdW64PiB5mVuAgxEdBgPUHaDkgcELeGVc7eMfV3bnwmAe5ySHKWnrXw3KszLxy1ogc5f3kE4YGT",
  "key13": "5s1p9CPUyaoyjRk59zXTQfvtwjGH9vxoygGCZ3YnsJGrU5cyqtKqKntAyh9uhknjnH73cXrfJMoYkBdppnm1vy55",
  "key14": "CuWfjJ8vT5HjgRVfwsHpHjrKmakHNcVVfoT7CBCM3Wnij2UmiHkjrRQ5yWu4AqD8cv4DsmDFYNLq7VT5a4cJkrR",
  "key15": "396sdqspdZ6tgfc9hkv1fAFAdVDFsXQYJjWHVMjGsgML14R8oy29uMmQVYYBqUYaYyAiGYdmqwRWXzz4ZFGGQYpi",
  "key16": "5bUya8WrCHtASbPkrAQhmJGzSpTESys5H1MZHtoXBV6PNX5A8JThZUmDgaxYtNCK3RNbZf8odroTtRTTMetbzy5u",
  "key17": "hfDam2RGJD6xCsA4kEk2Hh8R9MpCJzq3AdxtACv5Ruvg29BT1oqLKMGhE15d19v9FVD5jF7acvDnrunwHmEdo5U",
  "key18": "HLmdqKPfdY7tR9QyZBP9aA2GzmBYwLcXawrouGiobPfAREF9TjeRkdeHReF9d4zetL41aZfsDvTMGb7fDA87ecL",
  "key19": "3GwgijWdKNqe9JwWwjuvEi61RBB32HkNs4xbSUnA1giEoY5XKfC4KAsFt9Foz3HWLAhXH9mmkHt2Wuz7udDss7WX",
  "key20": "2fQk5G7iGS16Piue8nssQQMyvRhq7LQPHMrpMxbTbcR6tHaZdutfR6p2YjQrrhf4NsCAxqKBT6FaggBTd1xdbfPK",
  "key21": "2fRjepQ1aR1eWZsbkUSk8BfdKyaC75DxaFjydREg1n4gxNhkGqggQs86YeQesQgyEYR1woaX2SFE9BZR2uRNDm8u",
  "key22": "4W7guFYDhN7ipozEFcD69oU742nrYCsbDhoU8kRkrZCdF819y568xEmD8bJ4mrKjZoG1zjnHYPkAuNNcEzrhG71s",
  "key23": "2fi5hMM6gJQUXLJ1qG1e4SPtAGUn7irjMuSMK264voSpKS4Q4wXWadyGC849j7EaCdPwPSmN8C4kY9sGz196ShNW",
  "key24": "RiM3m4PCsCijnoy2JvHVFyeT7ewF1a41Q5nfS2ocNHuvibfg3MFY9zb6LHafnaD5sdDhrGacN5z3bd1VqZyg1da",
  "key25": "3gKT6n8avCPEVe9JtgL6nQjSXeNAW9fZ6FY23B5inD5URYoPZHe6dQjof72ew8MjfcYXXukptta5UerTwc1tdWDi",
  "key26": "4PTbh99k8Lx4BUPtYhYHLea9dGKb7ZmnkhnaH2AQ3a4D4V95GMmpZkzLCP3wAcj5KvAoeaWqzRvDXSmVHATAzjbj"
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
