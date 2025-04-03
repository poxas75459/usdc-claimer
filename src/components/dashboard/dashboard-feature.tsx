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
    "9giVukkqN5iF1t9TuJZXX8GHcRwjSTXkbjGX4VQSxXo39CkayQjGM94ZAtyEkU7MuF7sQkU4XrHhEVMpVTx1Xhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZRMgTdYX1anWikm4NtZ19WDgWsJSpy6pLCHbymGA4AMT861RBdTNzLmGvy96uJkgtu8Lc7i6HjL1vP4AkC7iQPR",
  "key1": "3csTLhn3jXW3pWDyBiSArzXdNuEPnkauziS5LxNbWXJFmvFro2rH9n5rZ5t54LSbpPi4m5veSoSWS75tnLMuoCDP",
  "key2": "38jgnb6niKBBx7UQBpGRcXsbphEhmaX5KX27ppQ2goq3D86Hzdm6pMUHGJFgneJrJpqFuoLM5Nf6YQveMXLpXPFg",
  "key3": "59UMgPMPuoqLMKNJcwLRRPMQxgoGccXJUDhpVV75AseVroNaa99SgRKpi6gsTN2scQSPY7LpTGEvSiAR2FQKLn4V",
  "key4": "5GH2Yt9z8NEbwtXydRpoqgUxcWK16BvRHXMUcorGgCMFmxqCiqXVEhXtBHdxqdWjGo2q7QpdGvbMoDPZmbRm7UE6",
  "key5": "3Vp2j6AR9V7Fwhg17hYun3ycr1b2oXYNA57V7P5EB2PeKLEcmm3YbJcUp5PLj7H8dv7DpSyDn3La2nj8BL8RfazF",
  "key6": "4wYh7qiayRU3d2fy7qXWEHgksvNEjdByLcK2VspTLpXJsWSdPje62mBQPf9qxShfENc6L2dHPuMx6fAyEj8RtKD",
  "key7": "2eURwZoUjuawSKP9i2uE5k9dQei8CPM9smZYAk2zZUgLcg6UeccZmTGU25NDfuQ4d1gupCmrqYpa95eLWPNaHC2j",
  "key8": "65ikzdhgP66oqeDxM3ELKTfvupqARxrgWWjbRYDVNdUyrmiNRj8YzrkB5yE4Y3x9gPrH23fVUM6wP1Qwx4jxF1Sc",
  "key9": "61Xro7w7ChoEjuzEN3yJWbCL2qV9D5odoA8YC8HdttyCyzadm39TdCMf88YBekcMt34RME6hmaQT8n8XPJdWrXs2",
  "key10": "45d38cfnUT4UebSya2t4yEKhbyDxkme8fwN9GAtmK134CaJxuvnt33cHhsJEYQAjMTSBuWUEpzJoTyLJR2AAS9Ri",
  "key11": "41VPALFg7rfsxuWgk5s3HmjzrLHuF2ni4ecDTmGT8Pw5DCpCBUDM1kEFCKpTUypXNAJDJPo5oykozVF17Yu3qrJ5",
  "key12": "53PmgNAwznYDptsn2XgBbAQjgwEUNjgX3QyTWci1HQHJ3p5hph75qCQ9UriCcckcxuTfdhKzR5nxRoZ4EAx9Co3",
  "key13": "2cTP1ESypH6T52nwFYagjA2teXL12tVYm22iUFMP8musxS4NQGUWk8sS5xT1Q9Y8YTyQscGL6cWPmLyxZAuVvB86",
  "key14": "64REfuAQBpwWgWM8Psu2QatE7DjVuQEZNbAAuXJPHP3P4nw6Sqcb2kRM7yrNiG72zgRh2degvNMNLMa84rUBhp2S",
  "key15": "4B7ri3EFwFG7XjaGqNnhd2rzZokLgWqMQZawhAMsrffYbzYnVpR4aim2HpxHFdoNArFGb6VSDKLpi6HDBzm5pPeb",
  "key16": "2G8F2744mZTsLY8NeCz3HVhRRoyY9gKDBwU7wS9Tc7tvDR38FJnZiHJ8egbcJkuc9xgdxhuv6XqRqU68cKnMrEy4",
  "key17": "3SLxMArqxYNQ2MbgkK1uP2MtPifGMyCgnZzBm6m3aJ4EezkqP9bzaxTpkyhgcx6t5hz5AjNbUnZoa4evebCt3qxM",
  "key18": "eAqKchNUfPCdfuGG7MSeWbxEjLVJ9DJc86RVhsZXTPzB6DbuZv5XRnyoxEqw2iYN13V68o4L6zo7yfxJrKrkqxC",
  "key19": "2Rd9PgmFXLsQL3kuivkp1VpH2Qu6KnBt5nnJC2qfmEhoF2w5zCnAfNG1uP3qh8s5YPRBA31dpxyEmd4y6yLHjovG",
  "key20": "3zH1kbv61XN42eVFVUNmYpamH2YmFG69FWBvd4xRLBxYnccSv3jaVkBvnHQJdMNZyzH9ZbqFZNdfNToqeNx9QSpt",
  "key21": "okzJSfcWPdjrTmAkZ3Fv71fwRbJzpnEhTGFqY5gbZszLsW4y2yvaz5DCkmcDJACFK3gxgi7pP9yggNYAs69STKy",
  "key22": "41nhUavwVeux4WjDbWTXBPvRED1B589N54kvztVZ7KoyDkAdgoZnneyFKdEWRKfroPpujvDYVjRhQiFUMZtdMGyu",
  "key23": "4bPshxmoRnyaxF6mc6a3P7myMKsripiwTuT6bfiAbhHgG5CfhwRTFi8CxUCBus4AVgKoo34gD9pMX1WHhkf37tEq",
  "key24": "3w8zDVVQgk1GkCJK9RBkMBAuV9GSUd6fjX8ufq9DZSHvVmUAYaypT63HHiZ7fHYZaHZiML4AuKdeqpTDoeNikoos",
  "key25": "3fbQ6U6RCaqgLgeTSuvYXchMVrzPzifcizuNJu3NHfZL1TwEkSYMuFbu7ABukWYZrE7iPAnYF31qC8XeUPZnuny5"
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
