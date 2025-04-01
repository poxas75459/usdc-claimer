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
    "56nN4eKmXMTXy3zfmQ8hqiXpC3D5Zg2DSdDE84qotdC55TAHqF5Yr8KdKjixgx8EAcNUVCTtN19vRZrgNv7XxbWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vVAbr3ZdtBFfVTL7pz7ptHgrXrns5eo6aw1QbjHSVVruVxai1WGKB8zxYoj4B5e9NKdynjRunkfDjf935aJUd5t",
  "key1": "3QfxEZfAYv6hEp51odBqGvjruDZAe3eXVMWEoUqkfG1D2Y7FuhUJSsv4ME4oeHzSpt1Ev7bNWdhp48WdNeMUJuKD",
  "key2": "393xXBsGtcNU5q3Nz2tjtAWjtTYpaB1w8BszXtcdcH5Voo7h6csavuqmEL3tgrY1H2p2u2M5LqTcxNSDfdympEiP",
  "key3": "4W4enofcJyMpfxv9vXfh8Ka7DViizsz1H3h73C8uGS38dEekExuXatFAYFaWrh5skePYzhbziUEGg9K9HiNeAktL",
  "key4": "yZUXJogcCfqvgiZhiyRUegeBYxDjSoGYu3MQbveMnu5vEf6D3CTLwFzFh863taNpnqtRq6as1e1Wi595RiWCZB4",
  "key5": "5tXzFx2V6wisFSTD7XHS7LJfeDiKGXuy7fdByEdZ3VKFsc2XLXSoBBccmmmMvCD6rqE2LGr3nogtg2DxWAjYY5zh",
  "key6": "JXwVMFJSh4QLbAJrc8Tb1hQrcWLXuMBxemgKLoDJYEdcFW6XyD4j1jcShmgcnG6Zj2ns8cxqZHys8FZ1hG9b6jA",
  "key7": "6a6btYBHX9gdZ1fr66uXupZoQQDTrM5tspAgto9gnhEPgue7AY3Ko6pjGpJJWnneU5dQZSA2XZx87SgHTbQ5whH",
  "key8": "2QqwkCb2US1xVZ1AXPYanNkrX115BXei45oPyBE4T4yZkFSsDzHd3WgfXYHF9MHeGnzSH4Wpmb34Qx1G9pJ8vKfJ",
  "key9": "4m4BqEodPTPBk1Trk74VRBXJ6BChhGMgYww49Xi5NwhYPwKHj7xDBnXoWip54SmKs1TWGBqXJsdZtiTv5H8vcdhz",
  "key10": "5KowyVN4kDNUhJtpq7DNPqJT79pWp7cL131bM6wQFot2jfFVSXT1vRQcSaAZcngV9RuvHUrvSeKqQVE7oAkvizL",
  "key11": "WwARDzGbTXjHcmKhMTPwEM5KS45NnT1XUfactWcNZD5UBHxi9m7dCxx6RYcDysi1hWjQH4hq6DunCqUa5hgHNDC",
  "key12": "3hdzEk1NEFsquWpJhRQzFX5tnFYZiWxAE33krcCoDNvGF1tCozimqEeqaSkLCiddHLzf21Ejc6CAn32LRyQofzuD",
  "key13": "43m53pXB4prbGM47VsWeZV3nD6SbWG6Ladg4s8voRKtpYcDF5rkbt3PAjWYi5exy8nR2CsePWKmuYVvsacCit3vb",
  "key14": "2bzVw9wy5N2cVAApSdriMMVee4WxqB675HCZGRoZ4cVCx6tZRZjpMu1vMo6MCY9EBzxjrGRJEGq8oH7xwvAMMe6w",
  "key15": "3BX3VyUtDdjKw9qK6M1gQEGSN3hVnwAjqxQa8G7QJJ3c3g9t685QpomCjHaS3J2vcAx7VcAc1QEhkGBHGL3qyYkD",
  "key16": "65tBmF8gigggudpf9n8Yi9jU2wQbbb8vLEzKqVzJyrMayvzZAr4ZRigDFumf6PsQMrwLfW8XvcaAt94dFBPhJMaD",
  "key17": "c7rA5tTrFfqQJJYcY27hzvir21FraW55NaFvdgX1awVPgBRH1Sx9taexoZXcW41TY6NcpZLkFEnkF1zmqRLsX9L",
  "key18": "yDE5H8EYyAqguag693G3prnfRsjap7K7mwTTDGK9ZVYDa3eKjAy2CiXVMhc4Vck5GHmJjNwgj4Mp9EeFbyZcps3",
  "key19": "427jRMhM8hN6SbwRtvhe5DQht1gbuzZ5VbMeH6WAjmd9TtWvQzAxCpDdm54uPqaowbxGihB338HT41XyUiAF5RZd",
  "key20": "4VXNhKSKAUnFXLTSFcTHibL4eLFGmUYofG53YiFBsc3BdDMMDQQt89ArqB1qaKugaM7pTfCivhYjj7aSNSvwZxLf",
  "key21": "3Kq963BHoBnTCq1aJsZJJBJNzXKrZjUeq39kgcKxdpRoVfiQZKoC9f4memyVizyFrKvQHNkQE54dvYSXUQawJsWd",
  "key22": "4nwHj1Ets7TvLmJ6kw8bDjGDYVcJFZcW3QcZWgsM1HPMfrAStYdQjTkN7HSwLVvYUv7dcRCCpkrgcRiuKEFJ2AMi",
  "key23": "64k3xFb5ejyez2eCREyWWkBoRdSGxw1T5hLa6NnHewpuHHYPyEtWn7HZuk9bs9TfUL4hqxne6rtEgy4ijsdkvijT",
  "key24": "3qTXX3UHteZXR63mg36tLnnYEfzUhg7nmactLs8MUfExqHfgQSLf87oGdnakSJbnAcfcRXVieiXasj4zM4Tbs1k4"
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
