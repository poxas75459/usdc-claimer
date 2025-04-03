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
    "2GLf8owemLSRgv3Av57XJq9jdz9GnypiQoA4LM1bz8asLphxkpAfwLUGPCiFSzBy4b8P3841hD2SzjEe3VfpeZsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5betC5Gh3PoF8qGUNgDbpRy8kh3fqYFxVrXbKiAK7xi3Q3tndMeAwY3Hqn8v7Z5pfqpNBsWG7QJqaCHHAMp7MuHX",
  "key1": "2AXsXkYaoPcVTU6uYtzQTpnGsyAPCA4vFL9449aCdoahvqC3Wgs9n6BJkGF2MUzUksp3cNtSQCiAaQsR1n969xJ9",
  "key2": "5pBEbrniCCqof6bPnpNNC9sKgFfyd2dc46gFQ82kmfCoQW8LmqMqBsbYVzxLQTokdJHLXcMM4xThiGTYrH9LcSDJ",
  "key3": "24Ynvm5fRJDHVsM9XMRUNroi4E6EeMsfr4dRjBB8LRvd83yE8EPuCpXkKMEUS6ChsmsGwXeBVieStWLWY969QadK",
  "key4": "57VAVJgqbxWavDMKZk4mg3xbNy1XZmfP1z9CCi4oVtp6qSGjMUNR9jKTwy2CpnhuBBgh13ESVZ73gcvreRf6NUSF",
  "key5": "2sgm2M1nshe5LvbPaj66vhU2AxN1SiufwHcGkVmtCqCmTmaq6u7ApSGTdkjefX7EgcbYWbr4cuuGXC5RMFv4W622",
  "key6": "2KtepstJM8Nk2Nd6k6HJ8HTwVK9keaeWG6DCU1izFdKDWV8e3QuLvTGbjcDzHcNnZ4kRLsX1n5o56kgKKPRJgjKa",
  "key7": "2wDH2CbNQUzM7mXWe694niVDLAqv7oJfe1bUW7EHf4eXYrrt4TtpaJDWpQvLzn5cvW3h8Bu1U6Scu2MfVpevDhVW",
  "key8": "5dBB2NFmUMq1Zx4d2GUvXZkx2ATcZmTqc3jGb9RjMqbDJStHfXniJTM5DRH1N4E7npwhno654f8z3bRoxirfWnkW",
  "key9": "2cBUEDRJ96mwJ1nPwK9hR4pwYHNHrFJCsZCra13BHRGntV6BxWipwaFinZ8w5KaqXRcsFEyhU2d6KkEwW1XAUvr2",
  "key10": "4v2EbuAG3k3MdbK3SboccBLjEZtbAZ5ST6nzUzjWCKpwkZ9xeNdXfX6k2pHEd6rdVJPmtxeCMgQ1pfi1enxUUZWo",
  "key11": "5ynMu5nD1TwuXGLUhn8WdYiV787mLsQnMAwKyU6NkauzhdiJL4D8bULMvK6TZxQEcAh2cEqPfUMGybjg9T3x1PGS",
  "key12": "3vL6ZxW7nVpDGmZGiDfUFTpHA5fFnhMKir6ZvNQrKPKGMtCLDZ6wn99SiJ9C89h8gbgF23bgTp1ZuHHBEYj7EJwD",
  "key13": "47RfaWjQwCNktz1hMfgE9tigyA5FAxnS9GtP9jc1Wr2UxMRMQagYgoaotGXC7XqxxYcLUCkj3nF9GegVXReHJixH",
  "key14": "2PyenYHd8eKrxhgcqZU93NCXEHZj8XVTgfjxCSouZ9FYSbQ9y2nRNDSZo8Ri6sK37Q1y2d3eDCPRmryFaqaUB5b2",
  "key15": "63nge29i7ph3jCEjBKHjXEF1ryNZHs1FWhrtDq9fyHEFkX8AprUfAdbecZREUAopjQjsUpwFf5YNQVdkyiCnQwYm",
  "key16": "2riio5Xx6d13KS2cVeD8QtX1uBvy4FUfM573ctyzUd4y47isFpFXmYwcwE4CJtoP4smmH13zgtkHHoLA4fSV17xM",
  "key17": "5cQpW4JnvdZNQKfdgRbNMWKnK8cDMxedTBn7mK7ssnbtX3aELfRkFunbCeg5oq2LbTLSM12qzvG4tcYcVFPKkw7w",
  "key18": "5oTXoZKdcqyRphn55Dkjtgm7S1WExR7BGiRV8hmcSGJikbFjvh3y88apdHHc3W9wCuuMEQ5iAaQG2nGRqF588qWD",
  "key19": "3CSbokkftWQt7gnvrJ55nwZxYyouqtKSC4LNiwQkUb8CkgCZqFFHeHfx5X173RERCnRGRt3MeiBFceiuWXcYRLUP",
  "key20": "61Pp59jb412HYe83vXmiaxM3QPqaAT1GDyJFAZLaAsU1Y83uvw5qxEy8gs6Sg7KFeyJHLHN7NKjjYHFJ8RbvjR9D",
  "key21": "3dx4ekHhSkhVGeWsBpaWLK82V1LNijjdC83bTVU5FQ2bKyNKKqSUPLxn77aYNE3Qkk1vzSvbSQ7yyfezorhgVbC8",
  "key22": "2XHr5faPmERiaZUbaULtW2VBh6uDM6Wc1BAzm3McJgRxVhEHKwXSagjR3JdyumDJPyafGtpCEQsojtik84EzjXV4",
  "key23": "3tsFxV4s6ELHCGtSXAkvfYZAQwcnxiHJWX7hbK81XV1qkFrirQWgT4WhTbsKs7SwsGo1yjiFR276BBgBEVA9V1w",
  "key24": "5puTtvyYZfK7dpLjYqBsHa7o3YDpQSCBAXx4pAA6pbNYfyyngjP9C7RDGnNzyJHtPCbkmamkFzJUxfQCHbdTfYUw",
  "key25": "ageWekdsRxpqzASbQvJkYXmEVmp3bWekkRPSfqnJmpedUaL7J3Gzss1Gno4VmKrXdEUGZbh7GN1bCaqsJYUhFNE"
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
