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
    "3kx5kCb5CTZ3Vy5A87k8DDeHbwyHmmc1FE3pk2M4mjkoATzmGrmQmqqj1QQR84AHuviXKFgJ1JMsusCn3PWbvL3K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aD7GjN1mJ8Z2TfDMA3e8JGTjvYCDNFZjREZQrxFaf4zrmo9tX7JWAZFQCHrPbg9H5knU2x3PbAdwerC6y6GJwFj",
  "key1": "5gvm2DmJc2DgN3Voi9zTyEoERz1Xo3WJLcR5HfSJe8zDjQZUbFUD2mT7ykUUxjXi7oNZc94muuY4PoWZtujbxmfJ",
  "key2": "23SNgzCuxUjxciTScen3S2jSyervWHc5uZwourZXiTM1EpKLB8YvbbouDwPmfXSAru1g5N5jfDAASNLB4tGpwTSj",
  "key3": "bJXvJYh5W9V7kR4yfHPXfqj12xA2NBxYB4nSrobmgZaZpy4KvG9jW7gNnq8gz4fmX8KDqP8PgUG8u7YHnEFhRTW",
  "key4": "52wjW1p2wZDsd8xWWsgR9jgPV2Ks6YxaiLgQagZRQ73XowPqWJWtxmbarmG2JocDTB1ueDgpfEoVDmG7kBPEr7Hh",
  "key5": "4J79kEXiTQwj8zEJZy8jYy4DewVJrMw8KQvDX9K9jSiwnPABUpJDejEnizo2tCYxzyqb4n9rHH5YfPjgc3eGbgrg",
  "key6": "4mygBogrCq7vSmZPNe6un2McjMr4rLCcM9RgQDb9jiiQXmVRpguB73wFk8aV5wGQojpVQLE375G48oyM6ryymGfC",
  "key7": "4B5ajTyEqVqpnuPWwe3f3eB6oLT7629nXxcooYzqqE3mWx2uXDLejhC8nYnzprgF42qRMcD1fyr9iS51FJBxpwop",
  "key8": "35GSjJRUSnu6tEKit2pw9axAtMyZkRF5wse18ceqBHLxojjkBdwexDGxEQ6yhzhDMhhwQ8tNFkxVouSpWzkp2RUD",
  "key9": "5hrfKqg6gnZ1Lyb27AbBHHpcCmQ6XJR1kxgT9owktE7WsJ9iUeLNkyuen33HfvfYm18qxbfnAUW33N7hTBVaXABP",
  "key10": "33n4d4s4hzjEk8W2Uo3kjiaqYcB1oDSSe49fydkM3HLmrUFQv9pcAhdp9sN1cPfnhQH158FiyBydftwmg3VreBWT",
  "key11": "2q7aGMdRn74SUZmeSizttWedNXzdAdGVW5qK7eksEbmFmHcD8QmabMsfJbBQ3FQawbSD4HbYpU63kwfZ8vFHwdM5",
  "key12": "4TnMoJtsj9eUHduGQnGEywYVcrhZwj3Abkdi3e5hY2ADwg6eExXbHJJLHZ7hdxkytES5j9GDHVeGZn8txVg9WNkn",
  "key13": "toKoQmJE4fvzKbma1c81xsphHXYoXo9Vt58aEKEUHtNvh1BSmp4XaXaUBNZotfnUdom47FmpcWF3DfLDux94WCM",
  "key14": "3xeyWxD9v44XcNKacRrmBuRH655AVHaFYzV31DcwKUDjQJeFwTbwQ8mjYRyf45i962ACc4tV2FJrpyozKYCyec9w",
  "key15": "heVSjq3hWPpEouqzSD8MZrHGNDrrWfTJCxKytFd92M2jYD36ne6WPH8Uv4nKNGd3UBg9CccHYDSMCSiFaHen7pC",
  "key16": "565AbbkPz2zaufRD5AeD253dp4VRDW5m5oKibRNkV5p4gaN8rW6Cs8hpYKLJRsc1YyDcx6VGGxtAnUHgdQPoA2of",
  "key17": "3zmaZtJsx9W7hcneW8aoUyFDTjBpKWyqVJbThSRPcX3kM7ZHXTu6qDgXVjiBdoja6YUAiS56chDsi7e1BXsSafPp",
  "key18": "4zRc6n1U3no3iaZpgw1n3uKWCQkccQb9GHBC3gdv5epCNLnyX4ctkpXthskfr8EREZz1hg9LnFb4iosmpxQfbEqK",
  "key19": "2YQfXu1x59F2csaiq6diQkqssNMA4y8Cf7Z44wa9Ec6sCusukRZtbNW7LDoNafN1nkhm5KyaXxzUXcG2vsHHH6i7",
  "key20": "3H67269ovN7af6ME9WoScC6nZZEL2Pr7BRNs8x5bSRpHKf9VLsLUviJKKsmk2LpmCSatcG16vE2hSEGj68agftMY",
  "key21": "3n3rDiUZm5MkfUWuxXvGg7ib4FaCJaa4gSoJiya8jk7rVMsGXjp6ZSrYcrU1SuStJ5MkZjR5UTYkpFEk32CGdFQ8",
  "key22": "3ooZD9KY21XiBek3Gp4AWi3yDQo8RWoavWGaD56DtsTe3pX8b4TBzNnDTVNs2rzL7fgo6UGuh51f3yA4UZragMud",
  "key23": "K1CwyC1gwZx3hDaEJwTCpZckkCV4KzRKqivLYQJfScZ8Ciqh1qBdAdbLNBmEaECabzaCkLdk7frLnhGBCSkMMbs",
  "key24": "28qTb6Hj93N1xZ51RYJWEb7UPKVCUz5oSca11iAyCpcHthypvsTozzwBgZS64eE1L1HJ39PzGPnAHZc62fbE7rse",
  "key25": "3TJgCGXdmAVrG7XLAoJxurRjiFWjTKRWx4npwpbeQEqXxz7nay1bcbrdAouHW4PVGcWX9MQvCm6b821kDzrc7ZSX",
  "key26": "wWEjzPuHknDENCsxbMnmX4YruroTjnPjDM6mn3z4iGzhR4mtJzfhdET5giDiJXzZgW8Vjr1VpjpQ1pPnvNTLeS4",
  "key27": "4ZomPQ2XyA1NcKJP7Wp28PbRGhVvRj2WPGjP9HjRtBGNuuhXD8tZ5sy4aPNLSt6dXnhGFDseuT52VMB1en9K28sv",
  "key28": "4wnVQeKwtvUtQU8DpPGVjNEE9eiZ2KqHuaNfpA4iDb8mZcpzn8qNpykqMT7EYHzgy3EgMR1uLmGNjAXtB4gq3Arp",
  "key29": "NUrGJNZBHri3RVJEDG7J5nr9QkdWfdukMxGw1fi5LwTJ7T2TughXpK6vkmC4ZaKzA43wuPbKnbQxGJT9QVf4mhH",
  "key30": "eL6Vf5fwZzsdTZ9erAy78oYFAHetoDnQLreGgJhZxCxjpbVuoAyiWeTF44oVDxArpvDk3WCgrDvZwqZX6PVmyNY",
  "key31": "wmDW9ef2KwTBoSmhRXpD8A24q1V8tSmj4xB7MFWeSdTXEreExcZf3Q4cATouZSKskcnKSxTb4dwBW5ShcP692FN",
  "key32": "2oJxVR9Sj6f6qEYZFc1qYg3WWatBc2dpewiqsF2zAWH37xcqQLg6J3rhSySxTg8WFRsU4Ds2mdsTtx4hkdkP8FGH",
  "key33": "3pBBFhQtapAWrHDm2i1JULPvisiQht7gmRARqWicBipxdjY6UXXFPnYDnfzmSzgqUgDZSDwosPo4YM2ZkMP18mUa",
  "key34": "2bP9LBSZcTuSrFZPz8tExUHs6nf7FZ9f168vPmK5U7eFyYFo3w2Rd8R2zCFmebRG5iwakkdMad2DQuPxnap4mxZR",
  "key35": "4DuaykCsmHrbh6kWyesh4gNvCEsXE81q9vrNVvdeJa2fs6MFmtV56adfkTbcRFJbvKMLX3RzbQMaW3VCRjXBVXwD",
  "key36": "cMUuSoUPx6cVdvruX2Btcwp8EMsGrSnqRBdcBQZDHmiuRP7pkz2QgZ294zaVVFN9QxNG5NHrb6HW8AfGmZ9KeAh",
  "key37": "3wNJrvHELe5qePQkHPSebbPHmABN4hgrviGsSntKeZb8oRnapfm2yFBT1W1EkzTEpX88r1eAKCENyBbt76GZpYsN",
  "key38": "MiGgianUmMEJr8yH37BW7HHaxi7vb9cz7ZC5pZM9n7nYtrH8ckqfSSVzdFJcBgiZLHuPPsLbQib3bHkyjPRt2c9",
  "key39": "5xandiJftVsKBUex7QoR5PnHrHgFapEjnGaN37FDvD2Sj3yooFAUKxioMTX4NYB3DfK9TQqH5Jqitc36uPbYEtzp",
  "key40": "2DiZbmo9fQcWvUNtUfzhvrf5ftvKMkgm65cyurzHSa14FdYnwqwEYJuMW7sacJ5Ea3hLUoATgaQcLsyu4bHQWCEj",
  "key41": "x2ksic3mJeg87GyGiAejpsVDWYJvumsJKtiYxBf235eD1drPZ2aFeArAsdGXvvti7xekDVRnra7dtDsphxHRjv3",
  "key42": "4o5o3WzREXBfr4LGSvJftyWeLsCtf3mzFj3xKSQTwq3udDRoAViCWpPb9mpoMkBRMqvDESXmFzgX1KzQ3dAWxSUF",
  "key43": "2wwJ8DxRpSRQWY1HDBhnyfnubFnbyUavV1XiDbeLEZztkfRVzfuncHYKDmGTgeruVRmqxopHSuCR1x5aedFvBb16",
  "key44": "2YRoS7KHYVaRaNyo6tVCA2vXVNXL39Zah2vsi3U1Gjv5QfcpuVtbyGCCfHyQotVxVjMpDp56VmFhKP6WPojSizTR",
  "key45": "3RGDAf5N5FD249DKhWyT37Sc8NrCHZ7mRw61wRQiaAYh6BJJWZWYJGx8QLtpFczfdsxBskAQeqUbBB14xCkCsQeJ",
  "key46": "tZnyjN2Zt1tbPEG3c3VhaEk3xkFQUs7VHXyeGQNXAWGunzxNrBQNERuKV4RAHmoz9x4hx66CAP2Lwz5ZpHLQhVD"
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
