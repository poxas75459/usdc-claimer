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
    "3DNavdTLoAUPVWfQ8rMsQReojZiDwszrnQxQUtzbpWtD8h19ecXV3PHgMs26rYGY7AVsuixBbZjGArweMLfv8X4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PcyCUjxWiWzKGP5pXmkL22pyrtSnE7b148w3UtgUdrRaFS3qiRFhykBKEhjZBXhobA2rgesY8Ny5Eku3FXNjyi5",
  "key1": "38pi27daBPCtrDkxF5cqg5HzZo9uvs4BNeps3c6Ptt2FP9K7Qum5fncxB8ML6NWBfJ4CR9A9s9buJvoTyxpooWu1",
  "key2": "5cNHnHv3GzbYE76fsgnJbcwarEdUJ5UXhW9sG85eTW92vhqz5kDKDAKsQ9d9oBReJUsxLGK5jLDM46XeCwk7Knah",
  "key3": "2jgJkNhBZAtMhCnZcEoydXWVNDQmV3dXj9JjZy6M66vYdxWYgP2kpLgpkkWWsSqatxkLASiMdcuyLheRfS6t6nSM",
  "key4": "3AWvLWgSuk4t8By9M5tY9kExGQmPFuRztfdAo93gNz99yetLKnjPVxDS4nC5uuC9oNs9ffHkoWshPDDcZ1HFpE4",
  "key5": "3hnW3CRVP2PaCJrAZn5DrpRudcMujAn1mzSxaDWMj1QuJDa8DNYL6JCkdNTGVdwqQKMx8F35oPh9fkUG3D662eZJ",
  "key6": "56m5SCHgVaFosngQ9yihGmXMvgACJ4uG4tgFXTsmYio7NUjuRduW9NK2ecoVL79QYqsBFoJ38H1vBUpjzoeJ1BJB",
  "key7": "3eShy6wJFKPLwuRPNYGeczpkeaiCtCA8mc6zi6qxSa9TgjAY8Cao9VN176zu2GChmiMnBSvoDFdHLkni6DF4g7sD",
  "key8": "2eMNTcph1fUcHcSieKPLfyApa4E5QyXdzb7swMwxPWDi4LP8NoQTE9ozfDb3KaGfiE6THjPSradv8fQcbsUYkHSs",
  "key9": "3pK8waE76hR3xWqeqDWviry77fhdxU6Rh7kqcJhLLWn2SNvpbyLA44mCm8ZYhP4HwEsej1KaMzUn6TTJfHGsTnUY",
  "key10": "3S9vMW6i9rdmLmtmY9piKAK67m5amWjgj8EXv9c5meR76domZ4UzhkSFWKQzp4siNLsp4gCefJhz22yUAkAT1Ssq",
  "key11": "5i7XWiy9ssPGgJGTQrV2d5oFfyMtWeNZLu9CNLZ3AP13vVHNKywu6PhHvAEHxjFNdWfFAJCyJzVcgJaakXZMTavq",
  "key12": "4K5irTJaiHjUuRQxiZnwe7m5jWpZSfj2YNtQXtypfeiixbxup6A9Bp1ru74S6q6P2bVs5xuicDw9qJFcZgDJY2pR",
  "key13": "55bQhPbJpXyZQEf41zPgQr5XKMc43vfc9SWVH8p9q3BYTDb5kNqdRZVtFVtdTfssN7tHJ5o7aDDnx4yhqzKj6QvF",
  "key14": "2q3GaJJDX73JqJ7dn2NCpDy9VCAefPENmGRgcKUbcekVq7o9GyzPHqiHGka6f42JrdyfAcrhGn3iC3MxjURswbTp",
  "key15": "iEfAccuFWF8K1RM22Lnbgbtux8EJxfPAiQtjL3f9955xbWx8cdowec26o12hkwRh4dUTjMYH6rMN6xNaqWRHek2",
  "key16": "4Qc4yh15rp3MEjPSjPPotvq7ocpFqpCYP8qobBSDw1HEddCiAx2iJCCAyzzFsHKk3RyYVqd3VjND5SdXxUTKeuof",
  "key17": "5kydGQ5Te1SzSV3eFroiXDV3AwkV1egs3DDuj5oNQGEXs79Nyw96KFrkrCqn9MgHXV51GeP2BEXEEkzjrQgNoTpe",
  "key18": "3pEiFbE5QfZMELqH6x7S1F4uoC9Vhv6851UkJ3wJ67r1AKRfsR5smspqXHtPb2QkS78ubhGa3qEAtQFX8Yb989fq",
  "key19": "5j8xfM5cq1wPujJ3Ljuw5r3HQwSCffXVb8tTn9X99Vjv4rh9VHkH3ycrfDLsvm9sE2xxsaSRKwCNxd1Aa1tpW8bT",
  "key20": "zTQKfFHEY7LNfeS9qHubFzpSd2kZxXpwxA29VfzmrfMXgRidcEpfJp9S1QvZXkLQDwCC9WdGn3DU7bBtFDSNX7G",
  "key21": "3fSX9mZmWbafDjxhiqX9KeDGsymqqHK5c6pLXQZL1ZrvVjkmzzgyo7WJQPQrB9WoixdU2W5eGXrqChN6bk8qLjzY",
  "key22": "Eykcv2wwcyvqKzxpkMwB7sDMCSCfxrW1DDTBgxTkT7WBWS3SujpHLou1B4KAgyJMWb3iamzH7azDCyk4q1VNoB5",
  "key23": "tVBGkDbjQh8tn4XBPAXEHjrmenRCisaDMGXtvAqMHNfn1M5eEeAtoGcEMvrv1ofUj9sAmN2WNoFpG6WZ9KkBbyR",
  "key24": "EdfhiAmxkoBqv7uiYzXDnGwc6Xc9jn98ikzenQd8rSDehXf4vmeyyW3dTusEz7suZwye4xr14Ut7Rs51kzDDisM",
  "key25": "59PAhVTpeKXPMgx5nHyF3whftSdAfVXD1LV3k27dbjsYXpwvbrbrjAVLAwuKARMf3K4ovdgc914BH4Prk3EDTSW",
  "key26": "5NSUUYcA3wrEUVx3fPV4HuT547rEpGnSVzNHYDypqEytCb2jpRGE9y1pEiVffZNHqjVbERDobsJjc1wL8io1uNJX",
  "key27": "5cfoPLNqPne1eC2sogZtW8cWZe42jk1T4zjAaGS46pnYMdH7GNZKsPEfg62WageZtFmx4MjQyQEXVwYgM8Y7YvLc",
  "key28": "2CUooC9efsnbLQaN8PgU7Zp5gsaqW8PkGzdTzwFcjb7pshjL3usuAHLHFZpPspQDfEx9bBJd5b11hnvkknYnHYV5",
  "key29": "4jKvemQabMZ62GGS6gaEs238FNjL25XQfKUR2zN73X2mQU5MPLtG5DYzVK8q45uQTdpwW1VNhB5GBh8qW6Y8DXs2",
  "key30": "3uyLbRs7jEEgxHsmiAZiVua6a4nmkPx6Q9vQufEcFmcm3etBp3B4g9sf85uctTUTHzehTeUV5eweEEED6wsgAe8o",
  "key31": "3MprPDFPBzdfXMyAGUVuo2qUreK7YErhA7EVQfFbBBB29sp1KbvYRmDdS3SQ5NdXNYXsEg7DPMTJWKpv5sPjzHHR",
  "key32": "58e8KUgN4rAeXoqhQu6Lbwk8JYyM6vyj5pausc8cMjgU7ED9CUquua1nsHav2QeAHegY878AQcBdQzHTPHYgyQbN",
  "key33": "2DAPNqBjpzt879oHGjeJU97WyEksA5HNZpyYLhJUPijQ9KT9PvK6X9tTVS3tBtgpvjYBU2JarayftwsajBFY8ASB",
  "key34": "539fVhNHhe2rg67i52rosdF4Fg3vwK43y2egESYZw1hEZxcHFH899mh321DUMxstyhoav5avZMMratjPNd2JKJhz",
  "key35": "2CZMUZqfLxVc9EuSnGbUcq9JKHpGF5aHBN9yvS1ny1WmnFP3xqdiBCnxMZGw26szuScWHbzA9H3P7mDo28NWZ1kr",
  "key36": "2R2cDKYJetcMsrHrgDGGV4LL8VJ8wbhxDMM7v869xab5fbxLA4DPFtfVFZWSS6CRDyZPUFmsZT91ivsQ3hM2pCYd",
  "key37": "kVSkj6ccXK1Vi75fqV4SCMRmREYN29TeJHP1bMPaUDK6ytwxnJk7FvB5XFKZPvN546unmDtW4RgqNGY6WJrhKme",
  "key38": "4caREvWKTwHVWP9y1UHtBbtJwjNDPL7dFmF6hA1X34eCuK6MWwjEZZ11NAkm1S7tjhViUoaiTTx5NAu17pUuBvom",
  "key39": "e3bmFNAB2TEDKhwAR4VZS2repP36GmXxQheHX3wRLrwRrmytRqt7iEM3596AyUTHFosPQ6tvMMTL1ihWdv7HUZK",
  "key40": "gf7vGthjtsv6f6feRbJugH2oisLQ1vUCL4PN3Pz2h87Tz73SPrT8DXKUCAdqz9gpaesFaLwR4DhbMMYmuAdgYEn",
  "key41": "2jG6vEn3qZyBhtvZARTiJjeNTgFov8w55PXT9vP1HS8psYAgtnupcgLjiCTTXQB4wbZvVA5gKiiYbK1pMJmr873L",
  "key42": "4BC6hGQQhCe94rgVUhKuD6H47kQKMPgYyBjXVPNAsFPWHoFw3BCoC56VLyynEcbJVnHHvqKEH5wWJ4wrJ4XnPnHT",
  "key43": "4Z86Tdxhpe7YqH6rWRXTd3omnAc1Kefo7dwvYjMbJWUnCjHSFu9uVwFFoUYjwWtFnBJjg89XoHAynrsEviy9QhS2",
  "key44": "4dYkbScmYP9AiSaBxzefamoF6nEGQsUvVphMDTBWWW8UZf3zm62mchBn9zWckyifi9oSYY2PCX2ByT3WPkhSC6x8"
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
