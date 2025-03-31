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
    "nMMgKRzQ9y6Et28hrL8DW3rMCUdhxwAxG3yPbkpFEYu4qnUoiwZL47jGxEaQ514jZdGpf5hMND7trR26UBCzZwd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tSmKn7TZMWBwrxMa1moXRd8tB1xpythCXqUHU2yJebmQmLbHhkFYp1RxSa6xdew8MQQz1yh7sEsJDPqvEs59VAW",
  "key1": "4NoJ7dKYokxDWudnnYesaxoDTyDRVqhJWGB4yTiGrPtiGQyT1jShkDXuaqai3aUxLG259xYm7Lx6RKLnawCm2bWH",
  "key2": "3t94aHGM3ZWBKQaXWrVpAHGH2TS8yNGDqxqiPAzk8zXSu6qr1NBGrtKB2EzCK6k31Kjedvrnp7c78mcADE8YLhFt",
  "key3": "45P2bMdj3oMWZekXwfz9hBLaG3Rt2AESFuxnyatvTY9PKYZjLSdNifZbdML8hzZ8wRija9uMcQwDCzy2zd2ciRvC",
  "key4": "27eWboC9wAoUdf4pvJvm5cdWk9rjudYYep2S4GtXo1bQ3icqaPaTfpoTCWWW6Z4Jo7VB6FSmxCpdwYgEJKFcmAba",
  "key5": "3mZNpvdw4n4h6ymLWAV4zqzMBXQgwon5pzFHFu1PGpV5BXEk6bfP8WwecQF55YJAYJhbD1MbiXysEbJxsDidGy1",
  "key6": "4FRcVsaLax1DAWfjAK5QcTNt67VEim8EMohen4YAZRDatVMZpzgqS7yYuCJUEar9tUSfraHGjqYmcTXWFMP7in5E",
  "key7": "65MgvDoozRxsRDKibWHNcaPVLA3vojiFWA7Nm9HGGQb3vN1Nm1KnnkKBubhuyVU3Q29kQXTmmmTFkg9nHdQcpQFS",
  "key8": "2wZvNGTQ7AskKyc7MijPpciEuRMQWMvNNt15b5q6JBmm9UCyXfg8EgKN8EMRHs3jKGQLhk5WVmKQifx1KvUHzoYV",
  "key9": "2wq5RvPVf43ufcUrL7wLH8U8eu2ShKU5YqPK5uobCPVMNF6M792jEyYdVUc6iTX42deE35CykL1T1f3rueQfopb5",
  "key10": "5DdS9WuEKTeKoQMKJZBZc9R87dJhk8X3nBGssqQBUSRkJ5fjJ3wELL9Utgq7k5BTBCbeEhqVszwFxgD4HJ7hGMRP",
  "key11": "2qMS5bLpU4WFGbJQRQiPqQToFxZTi378Gb67BVeCQXCMyXPv13enmNXqZv9tG5DLhy1jLBsbaadjwNhkRU5PRFs1",
  "key12": "5WoyBqZsu9rxHMuoeaqVUv88yJCqpGWtaVzm6n5pz3Z2fZ9XS98G7a5GmLBdmQEgWUsN84YugwoJ2fZNKN9wtiEi",
  "key13": "3cwVMJpnXAnjTBfSuNzz53h6u3KzRMbwwD6njBfqxYFMCRrWZ53s6wPDfGpsVYzxqvxN8LUrUFsWwtekCHZkZDkQ",
  "key14": "rGoNV6dTiQL9GqMCX4LfceKn3Uk85mrccRjuzdCpLM5Gg7XvTECmCui8mnSvtj6bfL7PCMdgzcNhcfUpkS44EkH",
  "key15": "28LJ9KTgTFPnP7nnZipRY9T2sNtVdD2hdSG6Uf6RtEnNSgSnRjKfog52NVYoj1KQVWi4GYqGVKR413W3cRw3ifEX",
  "key16": "3fS24HuLg5MiAgpi5pRZQwvLPEpTsQi8CMpLEfPNsNSjpaNQfrB2PVKRNUjcdnf8nbjmdM5f3dWy9EGymS5jb2HM",
  "key17": "65M1Mto7VBXY3wJi8yAtkP5TToQ1wxa5XYypWqarwYVHx89hqC6Z6jsHiKZCpzupk6722zcsSzqaM8ABumoLUQSg",
  "key18": "4koptUhg6GrSsr8ExrGFeMmr9AVWwN2mzobzrwCGTyfyqgqr6qzKPcgvAnWgpZf8bej618zEmwnqUW6zDmDqA9jj",
  "key19": "46bbczRGo39o1ojRWRdpsiBYU9MFvBugwXzuDRfxyLPQAqnUBXq3u5wwpufYfKR6G4mrk1cRJjXgZNTNW1kxQpJX",
  "key20": "3ng3WCYfEywFi159h2p4tgYfifedy8uKFodgHWABPLh1nnajBCoB3rSN8XdRQjy1Mf37BaSqqM2q91jgXPG2xRE9",
  "key21": "2h5wgZdXvX1WPe1EatS3Zh5vJ9e1tA3mduAbwhH133A9FNTJtp67dcnsyAr6pFkpLxhYVJXSYDty31jRiecqCdnY",
  "key22": "5K3fJ6SSeC177zhoqvbSZ3YQpaB3yZbbNquTNRrc81QhvGUAAVKYcUAAVHprqNJiiVxKrEBfF6pAofFVjTd5z1gd",
  "key23": "ytHRcxU54nyz1FXwXXH7seF9DvVLDwo7QMynkebxmcxiT9GzDbTCrHcfx4rGpL5eXThmM1MxWnNz3p82Y8XHkMS",
  "key24": "4sp5262bwsxmFAPajZCP93zZFF1KLESLG7NQ6a1uHUYn1RxqpqYYzwNTSCr1Vp8q5ktkC6VNnyU1Pf4ccMbquaqr",
  "key25": "2FPjCEczp4p2wiQPgJXod6YPQPQD9f9CHQyVxs5tPqWsPPQL3bqz5ZUhpLhdZn5c8nzeemmqS71FzZSEfkAbVgx7",
  "key26": "2kGTADjcdS8Hfb1CTkMxsecfKA8NrEdWeQdsTFzNNHL9xab4TNDUJvRoPMvSVQ7kAwdwEyyHSZrUUdec8n9Lkbsk",
  "key27": "42e7jXRANUYpAisNwBKuwoKTqbx3NHAmNKjEKpbcpN7W4DT1zRWUQPPH8E5LaTV814hY4SGs6WjpVuBT8xeu8eHq",
  "key28": "5naNS8yRZmcqNDnpkUTQUhMBdadh3FYZsRRzp1B2onQ7BxBnAjbpsdccUyZyjuhbm2LTa32NzvoRuJHhpF9iwxm2",
  "key29": "53kXbSUWVEZD6zZQGYED7NVRkjLcBteRSzTe3RjnKWWNMdzxRpJYvArHCiG9b5DckNv4Ztwc9RgEvj5xVTxKzvKF"
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
