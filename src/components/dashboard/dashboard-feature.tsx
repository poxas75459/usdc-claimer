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
    "32QxbPjUdjkuZ445BfzNatZz5WfNXdadexzCxFCEairNSaAtPXttZY3outq3SC6XXRMvtaBTsA9YZorJJtx2iR42"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bwbWZLzrHGdJt566DrhqT2BUyPdR6G8BrZUtoNi1aSY6WeoG1diGmDqjGXwpz1rA51GxJz3iuhomHE9PEQkYHrt",
  "key1": "3FxnzsfPSMnkdVg9bpaj9QiS98AGhq5NpAhthdrdqgkwjEEqNdEeUAYZ1wnSfgVbD75xf9EkaSh3BS3w7zZzmghj",
  "key2": "2mF5bvcMtxy1MsCYWVY9m7C8mWS7N2dF2CrXiUc8zQdgwD7Xj9EZeTWd5AfjtpcJzS15JrTYvA9n1VTSarCr3J1V",
  "key3": "2DzHX4Z59W94S6FtDixCzUGm263CCXdU5zqPCnkVxJK3KxgkfTTNMaSQgp6a3HNnRWifYL5WaYtaFEnT21yVErEZ",
  "key4": "3kQnmwRNzjtfSkB6AeJ1BJmPoS9eHSHsmQMsi19Z9eNzWfYy9roMBRi9okzNt84gRxLwvKKQi8R1r2huGeEodyqh",
  "key5": "3b9HqeT9v4PHi5r1ctNoJnQe7dC6mtS6rLuG4icpPGZvz489QG4aUiWwMZReqJnExxuAdFrm9LVCy6vBXDvHVNgK",
  "key6": "5gRW51eDsfqEJhB58UCXK6krDFvcxj5Vhavz21Q4oS5DEsyJykxFYacC2W7C28Meorxn28ARTkFUKckJPxPE23VA",
  "key7": "3TVfDSepqHi86BWqFo8VABgb3BbCHEnJeHf8iJYuYMrLyicUTMf3PSMy97tALy1rwcvmURJgWb7bNheYnxw1sNGQ",
  "key8": "3UvpZtqnL11dCM5ZZwGxQM8PB1ng8zUAVJKFopQoUsikRSeorTKaxht9C8VTRhgtPPEAv4aBnLW2ra8ASuAmJqbd",
  "key9": "itptp8Aq2TRNXCGnLdNZYbjJ1p7bPgcACAsfQJsxHZWBw5PUcUtb3NkhFua89FrRhhHjcTmbeL6pXvxMrRPbJ9n",
  "key10": "4PvBM28uaUCXkkX13ER7ZLg84QjCqtNYAvMo5xJjdjN643pu6zwhsZ8iaoiKnQsR6uxZGprwP7qNrhqU1HMiftc6",
  "key11": "2kG2Hb6XDbcwctAc6XURJgVeA92Sab5X6iCF74RPFo5e5ta5XVfSmh7iZV7Q2GYuuyjP6FfUoxFbVPj8V9dxBtFe",
  "key12": "4qfDHBfq3aYWmypkXzBGnotJJkbhDWJx2zEDZpXdDqT7YnQ5tGEKa6yGdive4xmDvfQ1jPgryaos6PY8UrUnxxBw",
  "key13": "3i7EkhFbapjYWmVzstpq1hUyEC5MhTdksEbEmtY4fS3gF3fJzeLZF1nYxXpFfWKgsyKre3SMptMoEU88QECFcKsi",
  "key14": "HC5J3BJCeWYMRqhivrimUP5neQTt2L7dJ4neQwuXC8zudBW79KXHmbNKRfCW9yS6DbfXjhrrhEGZeq64wwjWfPS",
  "key15": "3SZjKeqwHGxp8PEsTLe7QjicD4gXAYfw65T9kSmdgSeFz8Dj1BLgcPJmkr24Ay6DMh1evnHSdwUqNLP7ZB786R5w",
  "key16": "61HSzpSpp5kgGAQinwSJtaSyBhWtowh7xPzuHc5WkvJszaERrxD2ZNQ24fHJgzb3LhzKcMoGGmHYfYa3XYcNYR4q",
  "key17": "3L6dfpATFKfW18HnED5pRx65Cp49N4y37DFmxa9QcAQGz6bd4LafZ2Xini5LNnDHWPdq1A1mYeVpVuxAsyqMVA6P",
  "key18": "K3n3EPxFmBEtyV6ZuApip7ypUJeMDBLWZtV8WqQ6cAAsFxe7MePKtYVf846e1KDDZLSnBcgzVke9GFaTaxERLuQ",
  "key19": "B2JP9CrFLvdiQ9nayQuRnFh2Kyxs7kDgem1snftyVBg1Kga8Uvz4w9p4c14qWGcrveYYGT5wXz8rAwCNQAvk5nE",
  "key20": "5fPsG8rDANk7T2KFNFxzZDaYVsyq4zXJK5u1epPtne5Q9PHfCahdMCUtDPaGwvbZ5a2AEafLphanV9wXiiBnAEyE",
  "key21": "4ER6bwUumyoikSd44Qkrku46kxjvV19ijdThjsB3ATcxZ1WL9RJDfj5GTn6r14xhyAhue67pBXG6GWHHH5kPeeqS",
  "key22": "3VvP3kaXD3MeUyWHPfFbVG2TgHRQLnJB75QzHVtJf89g1tb1c5nzaMmcyJ5smnbk5EexbnTDUPdPaC1cxFhPETVg",
  "key23": "61wdPtFf9kk3BhwebxLEkM4XqoGtBKVc7SowsQ8dY1RRGvPwe3P6JxPosGZZmAdqy3vRTE7ktH9UGWPmGuNGkNmw",
  "key24": "5PWPsR7of12W2qqJBqfC1zBDAVg237E5ErKbR4yBxtwjHTuUuhWX35rH26CNWXzytY6xfLF9DkUfTLtgBCJaeoaf",
  "key25": "5ctdGR13vACRuNZCWU5UfqVXg5GCjQDPLU5M6dS6ErjDERTJ5nSQriUHFA8G2JydvbDmUhxB4f32orgNMtXkqxJT",
  "key26": "2jzemodbY9eCgFUeqhMvbePWA6CV36o6dGiJ4tSHBfJLSX5f3P9xn85KpggqUULkMhrcbWApwWyNn3GqdfsghY4A",
  "key27": "4m9XvFmTNW3NDZzvFx39So9c2bKLqb5bzRUfY8gMfcUGug2oZZgJBtKuESYKEmtQoPPRZrYZGmNJW1TZiNv2kvzJ",
  "key28": "4DEtvsMSuxtX4ZuHzCBS85N8Tzf1vJrgSv3NVDj5K1LcfXfqjaSXYSMpGKA9WHZmdRmj8yQVpdwi5am5aLH9MBDi",
  "key29": "yWbejCEttikVdmRW1sMQBpWYqpxCHpaA2dnSph21HxWNYDcgBiu2Cb6K5sXcEHrFD3MiheWNWvLZy9c4RCHTL6q",
  "key30": "5aMfkSB55YwAp7nu5yB2wpdVeYWbM6Nf6MjHpCfiKgrBpg6SF5vATx3MgmDrWfNKFPNm1psc8zDUAYCt2mcRafCn",
  "key31": "5TrbzfyBiC2Eebf9M5xAd6G1gDAGbHx81cKPx1AoyZUEzB2eSsaYgU4jZUvxupuiQpkBtzRiN8VLukicBkxZwxu3",
  "key32": "3UgSMGLzsDdqFe3GdTdLJRrirwWxTaJrMxyXhkWonuvFAeSKpNCkUJRMMTgym1Rs1a4XsTSF9pdLnn2Q8dE1Le9C",
  "key33": "26dma9UqusUX79cqra9ref2ttMcnF47duehFkvBzb5irVBR6SD5MnBLiUvgrBDbZy1Bz4xUgn6qX3RT5vPX68p8L",
  "key34": "5BZkC8aLBHcC4MJua932ns9LCz43pmpt7zZNjaVktJmYEfDkVQ6gPXyGkXEv8TLQ9EwBEFHcNnpzY92QHQgfaUkj",
  "key35": "5v57hx5Qc8yVKAyND1qoLq9HcrhYbXzE63dy8peZqdEH67bmKdpVfTqJoQkTKp1izNKqgT3EA75BcL3kA3rtjKX2",
  "key36": "vtNy6soH5Rr6ZwjGfNC9bozrrPuP498tnNxNAbGVwo9rYz6hq3Z4eF19LqSKrZwiMFScgKLZ6sPDwrNMgPcciN4",
  "key37": "5nEV3SZPCTQrF5Kv3rbouCTZoDdYGeYPusjvzTLC9vW7FVQRLkqhkHJnNzpwFXffAcyBKjiRbthFYgDjkm9xMC6E",
  "key38": "2HAeH5MRsQDKb3qVRe788WehqZKwkXV3uQm8BNuh3E6icHrFe6kHWwLuEes4o9WdKnLoV8YC2SwRcbw2vnMkyZS4",
  "key39": "2xvWvdfyvikLHWkzfweExV7tyQZWeuyhiCUdC9gZpZq9rmdVAaBFtWf87PrAePTFV2EqBzeCGZaB3ZJ8gYC1m8q4"
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
