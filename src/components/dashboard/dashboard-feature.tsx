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
    "2gmNbB17EHRejqtSaAqn3DCguy6XEJP5U7zWL2bn4GofknE9SRMdmqMGU1WqqvZ1c4W3dFayB4pVWc7GbBY7gkfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YwbATZGnYiwJ9YeNGE2YtXRbxjbWdX6FaGDDKmfxiDUVAS6rBkhrMyzWGrVqhcyXSkPu7h27V4CxDqkafvR8PEd",
  "key1": "3NgGPNhD41cPiZyk8cDWxHTBg5myFNiW1EGLwznNqaFrhJTZhb1nxnXozqFJ3WQcCyToeZfymmio8YqJYRiRu99U",
  "key2": "gfhMzEq2WotWdw3Qdjd6V1yEGeY6kpgskULGgx78N5Kiy4Fu2UhGhVZWfYU6CYMMVd7dhbKAnytezoyqJeUAWsQ",
  "key3": "a8LezUkChGyq3qq181iMmW24xQMowmwhtDCMbbzL3mGP882XCk2UKj4iHcfbentvPxzqtfiUrqP4RKGYmcmJE7f",
  "key4": "3EprKTYsqP1hDx5r29pNxKYAzmMhPHZaqMkEKwAHPCHYBezH8fjXBjWo7EghS7iNZ3h7P8AE9QptMQvmpjmqzGe6",
  "key5": "5xLEBQZzhBWG5KuHQ7bWTSrBSdEPEa6FsPkaqEzgaGrM1r1gLiyGDA9HZQCxqvY6Ut9XK48hjXpkju1BhaXg1hnL",
  "key6": "4piWLaohxWkxydHiMVcqi63oneAbXUXnsUyGVcfaJ3Tw7PDz9eZpP6dcHzS3hVyf2nZcqsr1tsKGdwCpSHjfYrad",
  "key7": "34Zku4m8imNHe8MjA9jiS2ywyXwFQMNbAWeq6JTBREtFEx1RfELn4UkcrNv5uDGjyEHzaeqoPFSgMU9VWDrAbTS1",
  "key8": "2wnVY91StZrYARyXDbamgx9cv8MLdywPJhznh9oM16DrTacNqELWug9oPruNuj5cwHCVL1odfdJ16sd6UhgECLgL",
  "key9": "2rSNdHCCBsecDU37v95GFEzWTLMAQH7oayFiisxAv863WLEyTEU91sz1P9TstaVKWZxuxUBW5hjWKCrg7sN5MCea",
  "key10": "2PRWSyY8EXKFUnMYKL3CYMbRixT1SAs5pX8EvvjkwYg1jB32yWMt3SvxHYR9owRG1yZnCKuqvnA9hdgpEz55VMo2",
  "key11": "3NTBq262a5KCQGzma1dvUwxHnpJ7ZDBB4wpwvPfX1GW2dbjQhb1TiQ8pqXARMKRhkbymWoC6DSYzX4XoCxaS8eSu",
  "key12": "586Noz5SmZH2sLaj6cjFgb6j1ipx47Wq1nCZXhE4t7mmXh8CjuN4stK8UYHH2kSbpZ5F9KyAh9tsoBTmA2U6tGc3",
  "key13": "5ngCbHqayXBNi6F8fjqPMHMxkSoaAfcQCskLXGdERExLCWH7F9aAJemh69F62DQEDBwNP15wThhBBLUrnrMAhiJo",
  "key14": "5Z8yJ2PJMJYrgWJF5ocSYQdif1Hdp4NxcPUrvfwT5Jr4V3Qf6UeCEfcpHRTUSxdLRUXeu65y5Fn51Ms7KHbADPqH",
  "key15": "5Uq6r5KiVfWpjMXhDxThy5poANVSz34QmoTVrBw4gJAtCXeLpjxk8LmuweNcJCdy8PkVcuT3Q4f6B87QCRmKPzug",
  "key16": "58YNjxhvFwjZt3bR7QtaXDL2nBiLH2mXAsaaZSpKyxkTvWaZdzefaToHoVmbLAWbCFijkuHADDLsjhz8QG2BujfQ",
  "key17": "39NXWkqDgzbeJFa6RLXesA4P7TUasV89cifZstDa72srY3zQEzVYrLXvQA25xDzsG2ApqVGAdknTj3riGKZXHQDY",
  "key18": "2dDJtDkzMvSqjjbupQEN49qnJtSLXoAGukUVxMyT3SLq8dMW16KNdMnpCNCkNkRsm94eDg7fRZQdhYqvhNvdhprY",
  "key19": "j4efrDNhz1Y4AuuMMsjKUdMGEaURx23W26CGca5i1ZdVkfATwPTTbTpPj2zH3Du1NCZgEPY5vhVudhEcuM6tbd8",
  "key20": "5kitc5ifWMdUchbJidrBaMqziATH6kpJ9NUHy7N8VfTFpxCSz8Fd9W2HJk3V8TUWgzpVz73EjhxaNaK4mjC4aNCu",
  "key21": "59nLQrXComNeciGdMyHnzdQS64cGk1WqdiwrUdcffCPzexAURCi1qd1RzssmeB6gVYk15LkNYZxJ1ySWE6wBmufG",
  "key22": "2fnvxfNzMDs9aLVn2294uvVcg4DqnNCvKb44G3fz51icVRLaczY6RszT2QrSmbDvS7E4kRk5G5Ljh5CjBhhksnth",
  "key23": "xE1STRqxyrAP6Z92Wt1DvKhwtDNKd1v1JYidg5SQjuaMrpucvSCPb8hGyBQUVFCWErpnZ4Fp9LbnAYtyerJLdLP",
  "key24": "2yWt99BjcXL3MSeQUfMUp3DukpfHaxXabNvdD4YvgSHzkSRUmFcUSnrUJTLJPPdizqAoai7nRJSFtNSaQhM9bjKn",
  "key25": "4QyWt9S7fkwhsc1RFoWHpFLo1KiYe5yXvUKinMkThSZRDtQtnwkoKJwvY3zu2qcA5oZftnN5c9AE981whkxEGX3i",
  "key26": "5tUKPLAgoqPmsEwp3i2tgcDiWwA37RsBuCNeHkgGhP9vwfnYnwky9VF7yXEmqMHQZe8NvAfUjNeGvF3egCSQkNVB",
  "key27": "57TB2yvwELXu8bzdKVXMCYV4Xg6uw4pm3S5UhkS2o5HnZzTYcnqdWMgjQN5VxGGfpF9KNjgk82CCEgcZzbGhpCHK",
  "key28": "3DoFpCHBhuRn6RByBQciobcu2Ub7pEqndCxV5FpvFKksnEKNSFu9y5pstKdrLgYsSSbMFoWmvX3aPAkUQ746jop",
  "key29": "55Krky8yVtvEcFfYaKHZkAAf7xn5Ray8qbCpTRdUC1SXk4bz4HSriLPA4MbM9JamKyMRCj8JUzTaHQ7tWLBDuqL8",
  "key30": "52njh4iKfCS3dbXwzVqft2noVNhVMJZyHTa2XU4RgVDSdDwMukoe3UhK9fp7CG2pHbGRPcnexzaHqNcz1hP8mZkN",
  "key31": "5Qo2hpLahY2AL4b9RUg4FpxqTmhJespi44KKgo6DbmiAdk7cy6jrKTAUBqXmsoCYgvgMH2Y6nq2a923TaHE1fYtv",
  "key32": "5YAhDNdVtxonQiTeJGTLvZFmhJLRQvRQCxMafWnAsKb9inGJzTmFKg4dmdqViR8SumrySDDfTvKezhVGq7SBZK7D",
  "key33": "4L4yYpqDQsUBTcE6ZRfDFmYHFhJiC9K8niNZQYAU3gVfQDF24cr2zjwvKbkG3CQjMLLzRL5XvaVQNjeZ99sbJZWi"
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
