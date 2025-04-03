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
    "XwjZkECigdc57ocpYqTXLkp5TaGb3SpqJLDWKif9GgoGg7TdfqNv5Hzi2GC8KBEM7SRG6oegBKg5SJtXqN6ZLbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ToQ5UfpnkBrfYRSKRcB9H9Cp7NFj2WC2yweouTksPE3Xxvoc4tLorHBCfabqxUFWeAqxx1LqrVx6d1YPJaGxqGg",
  "key1": "3D8wq13bLB7XRuSFQDgZjtjvkonUA5JKUokVBgxiGSVxwvLXLycNaDMrn3NAd77HeV1nephW5Pv64qoXPWkVk3fS",
  "key2": "4YQtaTyxP8dKW9nXsr7F2SnWdet7WfcRh3BW9vcxu3di7W2kKkS5vp4k2NsEaYDR48PpZrCjoihTTRBfGEHPwjaZ",
  "key3": "3xB7GrGBXDMZpTfcGNZ3wG96asgVjBXs2NHHirik5DL3sh5gH8NoHpUAgtb5yuMhuFmEi2Gj3FAHNsGBoWwCY9Lz",
  "key4": "8wZAfLeAJ6DJXE45tduWsyLycGzDdYhRrr9ZJKA6STk2ZWDP4YdRttajDnHGHFkYe6EXpXN9Q4MKpferov2GUeW",
  "key5": "3reCKAeck32caNgrbYeHMZetzvjcshqDrskz1x17zyMDEf2rfVjUPfSAKa3bfKtiP8MN1xrHoSpvdscfBY6yD5XN",
  "key6": "5Kae4m2Qw97avZcLVeQZZh3SfP5wxWENMyYahD7qVNv1sDqtV3m67YqpWZ23ZaL8STxjK5fRB8Zpp24xFjUzwrjU",
  "key7": "x5g7vKXrZtxV215eB1FTftCxsj7tDiQWTzVo1tQULH3HDb9b1CbumKtQLtJoCExq4w2yyFH6sYTefAhKRjbgLgm",
  "key8": "9fjCp7otsy27Qu28ywAydo6yyC13QgdaPxkTw2sj5JeXZfmGMKAWSiY9tFG1XPWVwUAkiqebwKfA4fwkeH7Fu4n",
  "key9": "2FMAW19i13hTC58TJzk7M3KjvMkfLoArb7PzgEBQ5GyyZMB7KJJoV1f2WnedcPf4RkdFcXMNuuUM8gzLYD6Hn3mY",
  "key10": "5unaz5u54eZRR3MJzMdBF3jYpYFWpKj5KoD1KzM3cGushJ7n1DnviKzWBw9kcUXFB7qYcKVpDGfdXUQXw6kvuhhc",
  "key11": "4nYU1TQ98us3H8uYnmXjrfuopsV1UoCRgvyXdrtdNF9y493Lc5PCqpLpAfLUqwZ1cMLrsR7PMfpJ9Xy6RgXxQG5J",
  "key12": "5WcRqV9Xg7xns3e1zWQJJvdEPou7Q8ATQLiz8GE3LkLNYFEXEh8t7fjqhVFZrQeLRnH36QYNmXbWVBV14ppHSPp1",
  "key13": "56unh8TamLyurtaD5oYEbF7MiGDfLDQECqsxXzNnvWBrELVBf3nsJwc6hktBirjgHg3fndPAjjY8U2zbAkJ3Q3eS",
  "key14": "4mZ1n4Gn2jQPz4yzTSsiYxPPaU5SGtfwajR6vBVEqhpPEtf7bpmhzJUF2MnQqcprjzMWhQUdKiNvwcpaS7AoEDgp",
  "key15": "2BZSTdArTWjyct3e92LVVb7y6xCJTBzeUkc7wnuavmpCWkR5ycbcyrJMHLFv1PGDwQJiTq9aNFZztSnvK14tzGao",
  "key16": "54KhZDTFbGUvDuBtSvo4D5eryLFDcB2Xz4z83AvAxeSyJUcurh1PMHP9sNxYfZwxR3uJjxpcyJb1DqdpW11hietf",
  "key17": "5MJfGJQ2z2AKxNaana12dvHMvCt8w5yNdv2XZi5RnZduw4cHr9VrX5EM8471qWThsqUYFUzLHPsb8YAVRd7F6wpH",
  "key18": "d2PWECzpyf3pNKNZqAf7H5TZyQAHGwf1sZEvpGidnHscWbVzhDn5WvVJYFwUDSwedVeHVADUMPxLwAxYZ2H8nQQ",
  "key19": "5Bn9kTui8VvCbLjL3P3hfkXb1WmmEdyLV6ARMTBVTqvBBEmSgEQ2kCScwUutG3af4vCQy7VbPtQrc8s2nK3C91PN",
  "key20": "3jPY5EEPH2JtusvvPH5ySU28hHei9R2fTXEm2TJ6BqAnSKTBYh5iiXYdCeC28ku4BPig9mEk9exq1XJNdxFXDw8E",
  "key21": "MRf9f1uLiUU97Z7vLNN4DPQjgCsu6kebzx1HqhBmRLXtoJtt2mPwgkjwvoGhvqNcXYLUh2VhLbD3i1MCaUnxTzA",
  "key22": "3jxJWEPVGDpPd5Z8zY34VQGWM72LaN7FD9hPfy18tm9WsyCR3WCiTgniRfa5ejRv448hfxSqTqxfhrEpFK9NYNc9",
  "key23": "9J7kaevaE6ZwA1NtmKSoFcoNYbfCp7uvZvirPaj3MXrYvmRJEU6AigL3GegVagqbta4Z69gHPCNx3eaTDBAnQCW",
  "key24": "5fj4JdNr7ea1Xwec5aFVsnLt7gPCyKeKBsoeaund7KPue63n44X62JQASRVbSTKTYtPYEfQvqCZUpt5VWEZTKs4E",
  "key25": "3UkWrHwD3WoiaXGxihwECwenMZK7AHAuyp3rLcaU1obpN7R6PPaPnqSZh5PRY5doSk8Ezb5WrDmJB4dsk3svzVVD",
  "key26": "5wzHBDDdw6XBBqznYEC7eg95VNoe31MBbixQEzZQFrQtDWzH9q6KqfHaVkFHouwmqJ1geUVRJDRvANTv5xtnCY5t",
  "key27": "3aQWK1fSFi11zdwekM6bUuASjG3AfzAtxXSX1i2An1edFC25G7qErKf1VVU5mUHU1p2LkTUVvcZzpPcC4aKTh36P",
  "key28": "Sc8kqFDpaBZ9AqCRDKyKnL89EZBxCASunrAViDDRX5ZqxDBFn5qJrfB8YiXry8CzegSRRuSucZNj8nxqHaUPhPa"
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
