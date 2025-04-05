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
    "yMT78UyAeN5KdT6j5xWaakgfH52FuigB7VpP3LNxvHmEn9h18mYcjYTww1QFMtgQRgN33SS5JrFUhqi1958WHV6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PCr6GgKMBah2xre5Zv1jKLH6QDTTTcCKfcy9xNqHzmCQwC7GznzbeHvJXUoAnEp23pCrDeKTjss73ZYtm1hSvsi",
  "key1": "aAMogYG9uFRU8Pq2i7KKkWSz3vD9esBjBuV6MxaJU6YVPmq9rj9xADpDUCXsQHfmmMwTbLKW1gbhKMfMrGD1ej1",
  "key2": "3BT19649JHjS6VaTspbp9yY5p1LNGs9JHQ9kUTpYzv6QWkmPjn8B1Jj1itKEGF9NzsuKzwiWTbmkhX9not1DAoiW",
  "key3": "3bUULZuCRfAyLJmUMDEktBqSzN7SB4LXhoobgZwzt5csdxiFHPf3dLjM98rrK6nAZTX2knqZpatmjLJa6eMxXarw",
  "key4": "5hW6N2j574Zei9s8eVLSK3toWFTzYNUMAm4eDvW6gdVdSX7EkKbXVHTDJUZjDPhuF4k7zhsQQQ5FjVXcgFEgNowV",
  "key5": "yR7x8RJ1RiMigVnhhNSMgNAEQJ8bXHkrMH1CQMdcneiy7EssfohtRMWcG3zyptuGqN9EZtUvBU35NmuhDC7zt3F",
  "key6": "2rEEapAwvC7EfjRdyfnS6axTnkjQ48cUvL1eNoaLrzsveou22VweG5iRH1nicEuW3s4XZJMzx3t7AoBVB2wjuMtr",
  "key7": "5knwYBm2cCgxAkWLFRB3gKqwAvY2oyeGB8rpE5tdykwr3g271q5gS91PijzLjVK1bbyE4yHs7RNgLQB37qw2nkzV",
  "key8": "27xmSmwCu2RSXt9kpxw56G4NqpFqR66V2ijxFVi9sqx78zyMwwyiah38aWe95HNJzWVKWJzUb5ARpSym7fmaV1N3",
  "key9": "2dFejxLtdvKypd43tMgNyK7hgJ4hZYDr6h1V46H43TE7cL9QLmjP7FqWokLsWKctYkgVLedBNfTKWx4Qz9cT1nb6",
  "key10": "4Gm8cgy1dMFZEQtTrmqEGUmLii664VKMJYJCPuNmhLJwK2PAhued3BN6yoG8MHydvu36VSAguRd7r4Qr8v9dxoRq",
  "key11": "3zBF9E3vTf9C5kmoWS4oCbJHe2zFEn3M5p9FLfCtQULJsbzzFHSMSa75fHrt97MXceW93vkFg6EyJBFWNYSUmCgh",
  "key12": "3xGkvqhZRsPwiAo43oZea1LGGFfF6ztt7GnsjmoWZCHDmcoE3wU2riCrVKyVjJmcgR4AWzCEtCipEx7Q4FykXrrD",
  "key13": "2SvRzATRBUNvTaQDrc9yj7SoKSJM4UhmDV2WeeTfm3UnEu9ixqtVk46MKkDGx11metgMhEysZESVaG3y6SMebgeK",
  "key14": "41MfsDvRbLg643d4WHYNExKQ9s1yZexqQGkRyjaFF9Z33qfmceTG9aboTLUnGudXngRt4ho3EqjhvMhExLTw7HA3",
  "key15": "2ATa8aFUC5UVEjX717p3t2CdCGKo6bVNSiiWzpjN82BjyqTDdJpWKhdxQtq963fET3m3mFPx5Dz7bnXPzXQz4LfP",
  "key16": "2Uf91hSWBsBkenfo2VNiHTwkVdrikP84g3RVhKNXP4PckCgRiv87K6UWYp1W5xTkEb7isLtfQWXpBzSEe12wrosL",
  "key17": "42Kyt4dZ71cGjfanS89y2WsT5sKd8RzKQP5uLSS8fbJGX34QTX4ipjhhuqNMHZSQZXQcpv221sS2pC9HUyxnde1N",
  "key18": "5qcg7wQqCESUvdeAZwQAEPLhRBU7X3MRJ5tcCJ5RxvxQZus1yEewQ6iFYBmQyhGLQi8t72DAQo4DJ9Vks14jFmEb",
  "key19": "TVusbFxpU7Kvkzg3F2brPZ9jtSYcoczqVRfcj1DmWEKKSatT7H6eCAvkBa56PSMhi5p2njf4zhHAAEHYaYfqLkv",
  "key20": "5M8AaUuEnvqbNjCFARg5TBgSh5rjPbcFia6aAqbZhzqQrnRrSyghFJSX2ayLWy57tTq1NUMaPRr6bUDxa9CiPgv6",
  "key21": "2GtKeka9fssc5nVxJZydWFN5FpBPD4RfJxWa1gXXPwtf6sQH3c6MnVLLx8HGdpBwC27wBrTwWtymeBtFCWJincxW",
  "key22": "4W6Ub5QjPg3ndcHHH8ryskF5QahJTzt8EMDYpTvJ8xEHAXz5xbNbD6z31F26pCEaCgiuR2HYgcDLHo7zKP9noxyF",
  "key23": "3Mbxh1yxcLAa5ef4Hsn2SqLtPpswDeK1mrhAZa4R5wmHyG3SpdQ2Za6FkTH2Xb9obtPSDT4CW79c8LfigmTnjv72",
  "key24": "5qjxVp3FqNeEtG2ovoGgtniU3r7E8HRSZNtMER4wPTtKT22XCkT9zHJQRTsQTv8NkYUtzd5U8sCQ8NjjjJsHbAnh",
  "key25": "3FH7D2rSXd21uSwv6w7EAfgodJdDqDrPSoLA3tyR8FxXCKypkm2i8eVmW672UN3LBv3bGHCz1QGMTHJWBRnoppkq",
  "key26": "RJLo5zAsEnNfP7SKGrVa7MokqB7wsprGpmEpGzoY9eyqfEzECSZMktM2LsAcsjbxKpCvSRZPLJN3MTBffdDirsc",
  "key27": "5dALT9sphiRkjYMmG8fX5VTs1WBkxAj5wCT8vLTK3RWXkkvVq6KfRmLGbBi9VhZrx8vrpx2aZ75ctkbJa1bk24XP",
  "key28": "3kLPNVvDc5CrmgCaPrkRXgeiUC5opKG2xyMPj7p9affRR8YQn19bfkE3xmvGNfHM9qgzENkxQMFVmjxNydcqdQM6"
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
