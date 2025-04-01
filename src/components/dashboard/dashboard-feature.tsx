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
    "3jjBUYunj9hN4d9AGXcHYSGnsyLKnTKu9f5PuVwvhZs9zdtSzaDisrzkp882Ai8Q2EHAYVSJdTh1Tq7jFsyrACRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iNY5hAbZniTgcwFQjNHqKj7Ni7iumVNnkVdaUhNFegT1dqGjqYLXjDDJSjSzEmRNkfr69MhcGcLHFg5yV8GHJBN",
  "key1": "38Hp5HUY66hqmB4hQSsfzuuYbdSTDrNFCEppLJDEnwz7ZJo9p4NQhHWBrgBfWcQJ3cWpTUEH7Q39px9tv5AaYU3o",
  "key2": "r5nECppigLAY3rQEA8oA8v4pDxmGVbKcBCCFJAXrFWCPXsGQLtz2UgaE2J7rk7trfKCQcpaZnT2GMaPAhsg9Xyk",
  "key3": "3yQ1eRGuwr94A4wLBpNoFQ3NuG1JhQTXnTRVzs8iuGur9sfJG9fj2wuLUL33abkx9hrCgznJ7zhR6NaajCv7nT2P",
  "key4": "615ETPr4yUb9CGZTfaqD9XtfHVpiwE4uu2qpqpvELu1zAN9PhgKxScJVkpnunEmSK2zkymuZq6gzW8jqNCG1e6Qo",
  "key5": "4rwHs2qYLthJktWhMjTr6nTLzELV4QRcLHU1Y4aQa7QPwNLqjko2QMiv8q6kBPux1UwMb6o1FASBxBm1anqXqGpa",
  "key6": "5e6Fgy2Xqqm6gLPKvUPw9VofAGaodKhP4qZDVVR5MzHCa48tTeEyugR1d1oMaAcQkzbPUKyHyRR76pCPe1j6C7YK",
  "key7": "53SuTbm2eiZBwBVCrip8jkKnguVwkDpjPL6fFWpunSyvBQUCxfrKBCLN4nTDuaPoiP2e6qkjX8koSLKDbs1BuFxL",
  "key8": "aqVjZx8nTHSmKABNmjmSsyD6GShuaQw7wXdhJKbJgnjpPRJX1jyCeXAxrqcNwsce6h3i8WzQRm7QDLmLm2op9bt",
  "key9": "5ufTAB7ynQri6Tcd7mSmNvBvuhFFzFSwQNTRy4cxykTt2qbqFwkqADrs9XooMbrVM8om7aDp1Ve6geWw3Zucu3zA",
  "key10": "2RuzCjE9XXfsqBRbcNqtvh7GkaAcKmNgXPvpsTUGhB4BChXkgxGWk2soGBkQsm4VBrpYJmdtetPcbB6WLQ8PKv6d",
  "key11": "4Hk85JygDg2x8qqJnbQJPhRbtjLQzjpjnbLGQUGFWhMQ1arLvyye5m9K7oJaLahA8jD2eKJwVkZUtX5R32Zp8n9D",
  "key12": "Qupu8XQFJp6Brm4Moaawo5JMSZTdduxwoBc1JaTPVqnccFK9HaDhtWyhLgSQZsPMLEbPNxtMyJpc3tRWYg3d23i",
  "key13": "66Gv3X7dgtnTYi9XcWNFBrmcigsU42cDhCEDFZqLeHNeMzXe6Zb6ZVEmjfaAw5yG4DgwKsFAXx1KionYkZ1z7sjN",
  "key14": "4TDPj6UFz1CPnMeptjuvDJEB2PiXjssdMoobB2U72oZaowoyhikgWozpAejDsot8B7kxwoazwEchK2EqWVYgTzFv",
  "key15": "59qHf9nw8kRQwvJAgkpwacpdEvgwP8hxZWCkPaEDri3zmcjGvm3LNHz6a8PcP4mwQvLooM5uAnjGAmk7z72Tdvau",
  "key16": "NfZVKo76YBnsvVRAYRwsLiNUHSwHVHxbVqYcCtVtAMeyDK4X7avbDocXSWbzcTdMEYLdwjVUHfJwXLWTC7rGt85",
  "key17": "2py1K8q3ktmpL8T1dqsqkFJQ8wGwtoggVPKyjeaJRd6hdhCnPT2NuSV5EStUzZCLSwgoqGyeWAtfPp4uSoCUzpBC",
  "key18": "5QMKh2HBttohH7cad3PHuUwmRoQMzNS7RcBndc49Ytjfbn7X4JcjRDjLYPg85dMFT9a2wtzSxuSvzYzcEQmLisSR",
  "key19": "389Bx3L5JrdkXg4Py3DhuU45f9mb4A7J37vJ7KG3gN1j5EMHyRx6YKKBHQngv7Gf3Dnte9xuXpBpCKaRn4SE7kHT",
  "key20": "2TGYAVAj854SU1gBUZwA9Ysqs5VkTpzz8RN7N2NGJSQv7xtbFArEESdzPb4U6mt1JdkJWQiimD5Wj3uPvPFovJBp",
  "key21": "2q2hXg9D41vrza169WZmzdWFVLuaMygharsamkEqNrihCohneUh6B9g2EdmnWqZXXnhuVZg2xdFDiKuBNue4S5UP",
  "key22": "dxzPJzLeob9LUgvhdCfQjCSXKP3zYw5118NmtPjcGuYMvLLa3uy6cTrQRWCzbTpmzq6NEVRThKGNBUCwUMsuMCD",
  "key23": "3TiZFyhCBmPgvK8WZAbigTde2NPsKXGUssb7Gy2VHtsUq9yNYezfZHBFqt2U9bCU4pnrQxwq7xAn3eZufTA7xVyM",
  "key24": "3ocX6oWTnU9h8xquZzbQGzm42tMCdWSq4Gf5xDTotcDjPXVJS8ZN6zbtMSDSZk55rZuEDRofmAf4QnRgDV4MeKLA",
  "key25": "4Ei9jopCvk5UdQDGqmmq3DCDXHausEkaiNhqfNv1bSfUTMAZeQv7CpBnDMvTk5dudrV2npg61yvBe3PV4NEF9GGw",
  "key26": "28EbGYyhEAZ32VBkJDtfMZK5TWNPx65FaegjUYt6xGxbGoJbp1ihx2mjqKMftUdodCnFKKpQ82XEudWS5WAT7514",
  "key27": "4DVu8PTBMUFSqvQVSshJcWd9KcTb4a6UzTiPYwukt9Ri4ywKtTSiqbJdPFiQqCbpSi9MxonfbyPSvpWggZniagMd"
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
