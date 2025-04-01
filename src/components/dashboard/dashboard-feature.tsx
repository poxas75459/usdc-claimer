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
    "2nFxDsAxhWSESaM4a92uw4UcC7RBq1oczBhYHHh3KMfAcS2VFhg4HPYQ7fo2fxaRu6g7UhP7muf6gjmdsWodY8Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ystSMAXnxDdYgMhDBPWAqYdbLmcCtUXXmznLHGENzCx6Zhw6qZUwjJ4oh4G96D7Fn6UdaXRnmrjsoVeM5Z36EBJ",
  "key1": "2MB8ZZUaZKEukJNp6C2XVMTUEEVSK8XkUmWApLikbh5QtD4PEqK4LC3whQzrXFFobeBaQpBJDV75tXPBprvgyW7c",
  "key2": "31rPtykDn7DTxdviy7nanLgr2xnKrosV18cpCDxDGa8y11b1FQkXJbVE6hnccibbEFWfqTXwU3ZHP8eWnus4izMM",
  "key3": "2huDAWTgRx7ZuBi4ziSzqF6bJRPGbadPgsi8LyMVPR2khmFNxE4xxSeywujnuV3Dmu6AY6kS4mXmUKBxbqQ4WR3f",
  "key4": "3aYgnxKf7fkW4WBGWU5bybZAva5WBHk3RoNRBd7J3Co25gxvDUvQBcfgB2nbhV3KrsJCKb5GrEYvTTJWREtWVx8A",
  "key5": "rQtfHiw3KdXiirGjf3zWzxTC1Dt9HdKcKNR65sfZAJTSALbUsg9aWiZ7Mc5mLZzrQZS9nTrrCdPPezvbYHk8LqN",
  "key6": "5kLJ9A1rkkctSV3UiEcJnmXbRgrXRGXFqZosuB8xsjKxUnunZHXnLjChn5qL2GFcwsDCq8wf1HpFa3SxEpsyJmyq",
  "key7": "5DruWRqCHfJRoVuFPW53wmUrQoVB5JqTLkjdr4VbjuKUqJG4Kb5SLFWboE5ARnTRppy6SWG2N477JknK3DjKTKtx",
  "key8": "45fmNJHTK1JwWRYmzznqxG9FH6hSWQMFB1hMcy2FFbHzd3fJdQgamZFXJnXBs5B8a3FqUvX3FeGvgZHFA7bW5YH3",
  "key9": "2jZWiJw3tVc9RdqWa63r3VViFxgTYb6eEWA6KwAU9gqahKwCaKhSoFb52owUKvDrKK11Un3xmbP8TQCt34dePeYk",
  "key10": "sdyijQPbkM4fqDJ8XWkH8wQFFSqYKQMN7VHqS8Rcy3MAqvezvMmVW6pybWLRLVC9WVUyk3pkcikYghPDC83XeSM",
  "key11": "2db1bjVD2cFt75B82ds1QWhJRbDx9jkuUu1zq5gyrFbmQw2knJu7PrMGYrLSQgnrgqM1MNByxt8qAMFUZtdeNy2c",
  "key12": "5PcnQJjDWKL3pR9FW6XBFrmr2NBrWWYqponu8FVNpw1TgpLUXCJokBWogDoSo6zZbnrSSNXd5MbmfRZUx1aZRgnd",
  "key13": "UjMFHvEVBa1YK1P9TZrhANjAnx5KnC3stu3qFTa36hawsMjbfCmfCx8TpPYJocVByWPv5ggie7ziS6RLjP34ifo",
  "key14": "4uzXGwN5dqgb8ZLy3nr33aAiQP1FSiQsRL2QEBKJ8W3x4A2BZqg1XPcxEAS1wczdPv8Vj98QfCYgpgW8yapY8NnJ",
  "key15": "2PzgaAiD1a4hN9vNvZyDN4ovacxTrW4FXBZNPnDbBM8EQiE7EKpm5anehFpBtfH6XuuYaA5SxVJHpzAu87fttLTb",
  "key16": "5Qwnz15tENuUJjMBu74hNvt8pTbGcp1qWxowSd5RebVfifoPuKV3ToiiZ5JyRVmJKR2NY3Kuxc3MsgTZkGR6Gqq8",
  "key17": "5LLJ3RH6FtkE6NsgwSDNSGsSRYkvgZNmqbPF5VcYYrpL3qy3ELBaeUsi7zu1v4xD2Ld7zdkFAUPxtdi5H6tBmhFc",
  "key18": "3A8Pk7ji7JtKYyb1cHv9Gic9PmgtWBGsuwbPKedHsH2XJZ4aWTCgxAqDPSb2cMjsYZxBWNqXYSts35Q8Hb9ZsRRS",
  "key19": "3fvtoCXtc9y82BKFKSJiWddfsZJwqNb28xLsdzvQHChxoBtYTaoMkgqqmj285GLnLUnFmHF1XHLXZs7EBDDMUnYm",
  "key20": "kjLcdZP2NLdyVchMTwGHfyYh91R86YjRJL98Vih621HK9TgxLXe9GwsB8VKcu7eF3EERTZ8qAUne2CkgA6DAYUp",
  "key21": "4BDvn6pA6aue3zRAPdXJkf7zzdYnzZ9FGXbMKRMzo365qcBNH1jdgUknBrtzecgQNAsHs6pBTxxqbczGcYNEaWKr",
  "key22": "3WNiPBhF2AcnF2s7Xv6LKUxCJwiSao8dAFwF9qFpz9UD2nQ6y6HuWA4exZmmCPQSmeZh6xDoAHf1SArj117QN8E4",
  "key23": "fvs46FWMgmSEUVNHahhF3xUUZ7WinJVY16WqBpWbd7pn7FLczMwRbDGsQYZAvufb97Zs1GFURgUgXphL1qZmN1P",
  "key24": "3bhWZZk3CgD5aC8HQiFZQsBGZRAWmuLihMzgM7MNho3ceZLpXXDHtvCoRP8iZn3WahT7efQpejjfp74whjMMmaYW"
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
