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
    "5mRRFqNa4dA6jSFvLeaKuUoSJ85i5ZfiVs5KFdGTUHB9ByMCQPpWm3Ki51E6s6ggvvJQUe5UGkdwLroscq1vaJ1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5zKT8qgT9fwA1TgL6ziC2M26GbzfrfboiN5Ko4ZLquDsyVcdg56Hv5bTmByHoN5Fu1HVVn9qRucoL8AxWGnFuA",
  "key1": "xqvjjv1pb94YyHemHGnxmF3VPmzRPo5zF9fCfB4LeVwRqgoyu48UqFBKDjokhftqADWFDf3PXPr7iofgSYFd1RU",
  "key2": "3ycdofTiVea6o36fUyXMYgshbunpJzJtYgitYQmHjUix3gVi76Eyi9wX3mJgNLiqoG5Su7wmEbjcyVPNsGCo5txj",
  "key3": "3mUWNSAS3TnhFvTuFLDm2u19SBt9hWjNra9fLwKYcrug5uBWoXmYkqCw14uGXXj52yWS5ybrEUDBypCJ2PdiLsEe",
  "key4": "21fSNvCCiu5mFVceaZy8WeKU7JLg4gaXQue7C1bykiZErZiEhNop9rRQ8t1iH64YkErC2gF2MEoePHMwKzFkpLSY",
  "key5": "2E4Kbq4DfnvpTTHvZLGKpeWR5qniWznbwTVTs5VVEarCGkjdU2owbfKBY3Z9YJajxNjXo5GHPVHHhLHRRZ3L3qeb",
  "key6": "4DptiGininqQnYQmGMeHGNMhrdfG5wNJUJ9oYF6326RuG9Z71MfNxews6vzSwXkAZN8V2C468J3vQ8kzPwk9ivFn",
  "key7": "2WmbEJidgLPZTNWbp89G6pdybmeiFUJnALmfy1uEDpgVgJfnHwVLUyAgLW9nmtorcoEKubyt4rmykDfRqdLDm1MW",
  "key8": "4Mu8LkrkwgnM3ip7LnysXdkNuHbL8TnDKHF9hafEQKT7C35q34pddzPh8mpTtXpwBNSDpi9vAC9nJFLBTyWcvUpY",
  "key9": "5XjyiZ55m8aYMYaRkPazwEeXDZG9WFYN3gVtkzfA48KW1FiZ1jvxghqXASFi9k4rAW8KrwE95q3XGMqPAFQhpKzW",
  "key10": "2W4FNdfsPeh3tBNSsHbbT8zSb1AbQZy4XxmEL1xygeo9p1usAcAnmabBBG1DPr3priSruMWFa2aoH3zy8HrypRq3",
  "key11": "tP89RYqSgDPYqwx3CCvdFZxSFj2x7Miqro6dFjgwLacVcUBeoymHSej5ZeG8TEmeqtyGbYx6djG2Rf53h9DiwFC",
  "key12": "4FoSeEUikGFkhunzswZeHE4HvxGuotifsimx4GGbQhSJZGXucYZ6ibovcAT1y2Bn1zjmy4XjghBRa4DFpg5TBcXg",
  "key13": "3k984dkTBhzGfwtgMqBtAjtm2s8pYXmjhd2n6e6EfGQYBK7wC6Pemkqnr1HmBEMebKAj2KiCr2zQBykhiWG2sDmL",
  "key14": "jPZK534YNULhe9TN2KtwNtnGK8AoTrCKYSLA7zkwWCAwtDjzfcwznx9THMHYgTqcHAmhwVgaBcRbJx6AAjGemvx",
  "key15": "65ZKbQezWEYwcCxU9DKe7v5t8mzvnrLFmquUeTb8DHtCxcZoNaf76Uw9PRMKgnwGEKzVEfaSbLy9cXeww2t8uxci",
  "key16": "2BkhbkLekGnCaC7FVKjPMCb3mnketEyfU1q1WJAVhN4pVsrqxQT9JXx4QzFHKQQZxkkKM7Sw5yHtvpjBrGGfDowH",
  "key17": "4cABVDGfPCggLmo6GtUYzDgjKMgvGsVGZtBhKB7SooB76Nws1ftCaSisDqEcMz6ME8Km3vzuRReNrzvtcCFGxPKq",
  "key18": "5hehHpaFbXRhn9VyRUZvGSLoUsCpsYFWv51prHN4tMscKYfvt9utokRJD4McPhKfNPcZPtVnfRqNaFcR1wW5ZqNp",
  "key19": "3iMgf2AUxpDqf83GSX8vn4DszkPa7u8uWj7Ef8XV9nr6SAwTiXbkP2tQL79w94X1HrEFdQBZavfFALZTRxXiFV1S",
  "key20": "28koEsa442SHxW1QVNBDZLFayHHda3VdGu1rF6f4MJSqSctDoXxDRY5FKffKoJC3h37AbzKGZod4SDG2HucB2v8d",
  "key21": "2FJCsAT8w5rmxBf7WP3SVQ5D4QF4a5LPgCEK4gGM71gqudKwzaqx4kwi6BgpWQuEz4Lx7iN7PB1Q3WvnY49cf7Tj",
  "key22": "5Dn24KKHRqstV4oBk4oNmxHMSZbV2MFG2GXWRHBK4UCZHLby4skhv3BXwFVz1SbRzEEA1TVEqJWssxkceoca8RSq",
  "key23": "5sZ5ZX2wBE2nibXoMroWwre8DCV3NjSTwiaFbiSS8gCB23Adz1udAF1Re4qDWKT87z3w4vBZ9QMQEb11ZXy3dRcD",
  "key24": "34D7LFv9M149YzikusGQfjJqeU1rpUaEbbaxxAzLNDy3jLsMCn7BuKd2ULJSA8pvJkpKuwZgvSp2YXZhGdfWgdCa",
  "key25": "3yGokgnf93zKVkFGL7fxeUncguEq2qpgtL2LE6qeFVbXAa4WeuBDFAxSiG8FFJfQFKi6SLuofzZqtnYYuUa53f6D"
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
