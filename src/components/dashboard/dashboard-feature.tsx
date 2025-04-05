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
    "KmEPUpwFR22MX5CMhF3BhTwVae6ew6BQ798tUyLFQjMkSqWBSp5BD615zyXEoK8X3xWkYsJb3mN73NPpJNYbRBH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bsZe3ppDwqPRd59DLGrioXzzReVDBNrc6FNREYfWcg3Zj2F7K1WjwK4Jca91g5xjLP1QLQUs7U2Tjn5n9N3EJyy",
  "key1": "wrssX9UXdcQmMQxwLvnvtHFLgXaWmLENGAs9pFjwZtTznm7kZBqDvToFbJr6N8wbcQC5wbdVhBrVNQv1Fscdd5u",
  "key2": "2umqsXXxkysnmdUMNXyjcWxaCWqvFhZ6PRzjvyViYUyKUmSPxjKQh6Pv78hxmBz5yLB9guMUF5te64aJMYgw9f45",
  "key3": "bPoUDQE8XsqhQ1KjBoWxQ5rewmWzA8R9vodmHeXmwhFDuubWFvjg6Qn8nHE9xQfj6p9DBtAsW7dxmNsBUze3NGQ",
  "key4": "2bzGZG7UpfvisME4BqFEZKAtNHPZrdfF5LseCa9xNtSnB3NCLrQ8U5nxjWDzdnD1SHCov7SNjUxTUV86ZRpx2wEq",
  "key5": "5sT7MPibhNmbVxPMDxVboXop8rA6up3cBcy9EAGTrq1TvUM2mGZqQ6jSzNg81yBtWQD4CfANytchQ3ZBsCA5G5XD",
  "key6": "z5C6KN6yfvzMd5Nj6wpG6quJtHoaRZwm1dgkiUtmwaYvov9c5kJqWYRzoCbfwPbRhZH5iEaeAWuavRZkD4kSN3c",
  "key7": "3ZWqiDXqD8Y8chMEg7hQMvv68NLoeGbxrWopGgEbqXi5coWgZL8y1yjrurpfMG4WWtZwkFaD8cEnqCw1mw6YEmru",
  "key8": "4iMGV86a1WsKJh95SThQxfGNu8PLMVDJQ5iEMmhEak8XiJT6BsF38AieWKMEtR7FBH6MGngqopmgvaBteswRrzg2",
  "key9": "2UtLHFVQ1C224o3E7GxqYrogrvYHZDsMzehLg96KJ8dJW5C3y1ewfTAma8MVqHRYztxD7qt5tv5LQNggLTnwWNFX",
  "key10": "39qhBKVs8DyrQ6qRMSRTPAhe54QC7Ce9JgJfTJub78D4Bkc35d8tSWfzYAgaxDioRZX1qAV9bgQVRQdhsv9nQ5od",
  "key11": "2iyhCAHeJfCCVSo6B5dVz3z6ALKfuexF1Hb5FRymJCmvcJRH41nMA8aAWZTn8xZvtwaKFRn5PFGSE2KvBvVv2jAn",
  "key12": "2oKqw9KLvNro2xeSNtfmNPjPA4G7JanopKHAturyQq7g6oc3oSiNAfbP9PYiQjm5CueWRkgXMSZyVoApY9Kv58cT",
  "key13": "cqRbU8QbGQP9Xb7z4BobDqwWKjx5aBNCGR79X1Qc9DSbRHKNtCnDy9W4bSBZeH43t4UwLDVzpGXLFQ9jSSSrJ5j",
  "key14": "rPxP8UyfxvjS5NnK2XSEvf6Rq4JtXSGvgBCpPv1aLMzQoXGJjmjGL6La2dQ6MpSm9gsbqo8FM6qu4Vt3jz96CBN",
  "key15": "oFKryTCVgXKVnR9NbZcox4msf4XHK4eZ4xrUC5guT5S4CBstsGaWroC7spD8z7FztrVoQa7ZAFtvH3hR7v3xWLf",
  "key16": "2fh91mDEiiSYroGBdzneCRRJYyRzZpdnmJuixWwW1qe2A8ij6Lef1bUENg1XXqYpH3tfs8Pj33LrzAcfGkz9gG2W",
  "key17": "FZoNLhpMEzLFa3v1t8z13xnoDbKXDyQQ7Ln49S64JGiWTXLX362maZkiYih6z1i3sKFE6jAvvX8kGGBSAdrr9RF",
  "key18": "5FNa6akUk2ujh5HJctoenYmYi6RtbWxuNKzPTMgm6kJKPkE8R6zXApQ4EXA1vf6zWWPa61wzYtaRH4VtGAZY8NqA",
  "key19": "5NYBoDZs6a5MeS5x6j89UtNYgkyHStQvPvB8VkyUisvFHbijKvNoVoCazLnoFQ4yU5ingfoPVBbkjuQK9CKJ1r9",
  "key20": "3apxP8d6guJa6KgPQRSXj8KejT9hyBeDS1utnEucBK2w18CGkeyTm7wm539HtyPNwSTXfUcTQM2JhCvn2mozDpA8",
  "key21": "NiMfc6GqpUUojZpdUvdCkqg8Fy8z8rjUAxAnASsHEeyZCLQ6B5q6D3CpE4c1rDsGvkGDPxvyqesJHKGwRFRAubc",
  "key22": "4nxbCv8mGiej1JPkowAZsWvE4i9j2PkQGckHKqJ4XSMmArYjnaw7V8T1di3mn8qdZyt4hmQPSv8GMEQzwgD9RQCe",
  "key23": "3QsSvHrq2AE3MxB1NCqJzsVZrezFPM9rFkNjgoiUebDfS6sNLQ7GLj7yL9a9SVtysPdMQxzW9KbAFwmpiAZQB9DD",
  "key24": "5tijfGHMvGf9HLBYE7kN25BhGzKSUJznpCQ7h3AyHdMAmQBcRymhPVLs1DQEt8AYHuoyXTkeWbLXcZ4MWYJa1f6i",
  "key25": "4g6mTHPQiNkeBVRnbzfqYBx71nCaZrM2eSGBgkGnbLDH5QtjPZA3gz8otWmwUd6W8hiawiRyZvi6AF5aCkTynbU7"
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
