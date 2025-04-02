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
    "3Rn1T9bLooM2C6LRRRSqj7x4X6TGQcWPYnShoW1QJaYv4iQqCReaTipL5zGfnX5WqFyL1XXi1LL9Lqo8Z9KqJbjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RbFzM8PjQDtApvVvCmyjyckZa7kJE1UtUf2pjnJuwzDtWdAobWwxwVj7B26oXvQRiJjt9mVVLeyU3gg49a8w7DQ",
  "key1": "5ov4m6mAbjAFRSWUEtSA4sJu8XxHcoicbGQ6c8RKLXttGr7UtknRD7Qso5vhKeCwi1SgEEJtK7HYe2puHgYEhNG2",
  "key2": "5bLybE6uAHdL46kkmCmBtjSp5F4iA8qmSVrW1gfKxbxEsFAGxSYrrdyFZ8kHNxWjSa2DRLrq7yibFw85Urd96s1U",
  "key3": "J5ekAUos1b36RtKWSBEJxJcn9VywqybHDC2NY79NyAEtnCiNTya6qs1jb6swCC6n5K4EGLxxZtmw6om92GijNSk",
  "key4": "4kcutX39Rc5muHqv42Ya833E1LDGjJnZmhat3oPCjDGJz5bW8iSBgx8A9MpQBR2wvoczdim1PDen72JLmnCDGok6",
  "key5": "34Y1LA76jZASz7nnfGcDueNfo9big6GPFcsU6opDFv88X7Uv3sRSsF1xw16mCwWgbt4Y5vP7os1o1rcos2fzSxjg",
  "key6": "cQy9WQ8eD16P79TMJ3rHFDoV1NEZJqMhxe3GTCKsGGtup7qKVYoyXZtKjnfZAieGPEY7FDR37SNwpNPU7Bc7e55",
  "key7": "48T1MAceRjGMB8vwAA2vcWQjrdNJ3FPkjASHd7opYFFzQJvh68TbJFYrCVnPbTesKWnWbJYKC3KrcgirHZGnRtGo",
  "key8": "3q336aavYXEcP58ECbLiRKRPD2rWsS5ZPs7m3eNbezQaJg3NF6xHSLKndRs14LpAcKSQW53cRoME546XMnoMvTXM",
  "key9": "3vLFe8ApApyiThabHSoj3YjiNSuBe8CXcGVBRzbZxWN3HcGduR6nmK2zHSL4Qbo2U1Sp7XXy5QYNAUU4Md6jyXZ6",
  "key10": "48heNRSdMADoqzRcMYMhe9WsnMYVt6yNiZgb61LKqgXYy7eKQydegshpoaNirgx6RiEsG8XjqdFoMdjcNgJp4m7Z",
  "key11": "2QxJgbzhseqauRCsGwaoCEZMnfH2F62UqE56u9yapzFwXxkuE79R1q9j6iYU2hPLAKiJyBohHVgLFfUDpBoH73g5",
  "key12": "4WmiJEanorTvVqTQ1xDLAPEibK2JLiD7S794U6VhGrdSQw38FsY5TNn9nLZTMuNAPPPSCab6bXTZRbxisMSm4Lww",
  "key13": "5Lia4N5qzK5GSVqTJyBJyDu5iRKtHymwSX7KzBjL87y9GYLNw3hTZpoRLNCn9zgKLRBSRyGQxa85pHDZnTU11Tjk",
  "key14": "5ZsDXSFsVv4SoATef2Bh8Bf6roaUYf5aGnqjUXYqdgwDmTrqda4vWtq4Y174yuVgWTqDDRvZvebqRsDqefj4mBxD",
  "key15": "d42cVYnuffd9LzvE9PryfxG2LuJw7VFKi3BW8ZzcJYKwdissTj8sKfWCJwDhozHaaffVr3CoaKmJfiKesAZT1L1",
  "key16": "5DA44Rf4JYQNWe6Qqf9CccnwxCWaaifttKngiwugmRq4mEPWVNYP9dqsAVywHeTkeRBMDBv3dhQWc4yJttqDkhhg",
  "key17": "3szLDCYhSvSY6F4VNyqSghHyWfyQX4hUSzJFH3yFym1TsjfX9BHCBFYv74r4wNPnN2j3E6ygZjfxREXD9tahWbsQ",
  "key18": "3LP9ab8HLRnE2L3aFhZ6vPTC8QHkJ5aGA7m5jAWhyMo4eRL8cP5KiDKnYSkuJaLvWQ2rB2Cd8QQT9D8DBR11DXUi",
  "key19": "ptx4gBsqjZMKPVzf5qoXxzCCkj47MapyCBmJs1FgCmWsVoBUHHSzChVzQTzQMqf57GfCUgoBBengbdqsAwB5wPU",
  "key20": "4diSiKQ9Pczfs8G4ZWWd4mfhQdSjyrLz5Dqvmvqct4UgxGAXTimJg3ic5dviwdt5NjEC6ipBtGpPUHCcicVaNcDK",
  "key21": "4kpSePpwoq8FHrBz7yBhKaT61XxcM1C6rMWp56XaEqpaLidvmDFbZgTSkCUPNakuFF7CjYQp7K1MFKLSwnpoUb3i",
  "key22": "M653MwHBddggb8f2uJa4eZD7tqQQLfHYtNy9DrPyXzSZvKn88ckyTVnJX3XZiUZ9z3Wfb7nznKXu4aJSdRSgjfx",
  "key23": "TJSMUDGWuwxd9AJZj66QrZnoMDzwELRAuCegBv7nVCLoZMUTovcNuVaCu7u4tNHGHAnRniYKfv87GvMYV7LFQse",
  "key24": "24ZbeDCvZFCXWeD1GRBtHsHg6Xs2Wz96iis7FRJTy93zi7YNznBX3tVh3E7u4mExaEf73CJhSxTeC1n1xaQETfgk",
  "key25": "4kM9sarssJjrrsVt6ohbydATApxfwA5WBvX5ZReMfARdUbj1EHNR9vQAPDwpnSVwFVU92G971HNHEc2fFARmFvt3"
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
