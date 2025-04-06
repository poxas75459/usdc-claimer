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
    "3xZ8Ge8xsj4iDEbpDEzRZ38g2gyzvpZhNArfQHfY5bMA5e5UV5AwTy5Ym1TDCoNrQL1hE3QSFQD9uXQgpYsuZ124"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HTboua3vTt33zbuAbJbcCjHiMYySxk1N9PF9MHecKZJEXJKv9QDUu1LawtKUUCDnVau4krqjEXME3E3hMi7hVXH",
  "key1": "zPwXhitEFmXssbPA4usKZySn4DPNXmmmHwUHMs2yqnzEkjUNgx6zDzkGwUhnRNKvcRtYo6XeyiMAbEctqEqdznK",
  "key2": "2eCLJmUEtYSNirREFWbuQbW3BDSwzM1DLZjFU4ou2TeYZZNfXQBY986vbg8yzgiLV9ovMLvcSgDQ8UiVmfbCdc7d",
  "key3": "4h9Wpckt1xmpGkkyPdX7xsovfSaNGZFXYFcFM85C2RkZE4aLG2KuJLm2Awrwcc5ZstdvkREAfaepmQJjKYZiNK7T",
  "key4": "3NSaskfuR5rGXzgXkHpWR8bUj5YzVKwr149GmGgyCz8iNZY4LZYNChFvgiq69eCSz5vGCha6aDtrCoARqvYGNsT8",
  "key5": "Xrapbk2M9HFU8r1hy27B3ZXSScynoUxBmXJg67nL3iv9As6CYuHmF7HRRLNcE2J1mKYZPdsduQgzC7HBSzMpdfM",
  "key6": "5MJ65WAigzgue31BrFDefzM3FMdQYuSrSruVd7DMQ1mqh8AdxTfhBWypbnFrznuULosLanfwLoXLWBT9N5Fk685t",
  "key7": "4oWK3DhniDmoG5rxBr9AaXrTgur8LXTQmE5csaKVSPdiw4LgRyrNkTJKP6eA3xexoAFQTdA14pAqv31hyBBih5km",
  "key8": "2AKKmj7VDx5WBnz3T2LjTFG3Yy6NwRrvoqg1NvXMizVipmKKWpBZrNbKnzrZLwHDkzScv5zPoRNcy9DQjnh62HHR",
  "key9": "5mTqp5vfnX2JUwyqcC1vmRucpHkFvuq6SCjVTYkug8XwBDgp4zUBTu2pyk1qt8T3i9ymC6xGmpWBdR1MEBuy5yht",
  "key10": "4wUxAaVHSYpUtvJwTiPFXC2Z2iQ5fFo1FaitWQWnDvoSxcPBMZYkh51eHbRDjEGyjZeRAW6ZKZ3LhHT1tWxqnEDP",
  "key11": "41pDdtFkQA2wRGUHjsb12vHR2CeT39uZeKZAkNo43iozchhabryexcnkgf62XGQtx7gkBkfgB2WQmCBhbhPZtoFY",
  "key12": "2ibGSyum1g53ezxqoYTGC1Yv1SYD3WM6GtwvcT1wmUvftfsAczFeu3suBExGWBB3CSDSrZMaAaDLUmJ2VszF9bzs",
  "key13": "4fjA23ui3sDt2vSZntB8q6y435tusT1n6P8w8JEPGGtUmxdXGwdZHBP8n2wqbxwmSY6spovGh1erTftvn2vvZ4x6",
  "key14": "34MNRkf5TWj9Cqx8MveRf68MSNYsaLXsdRjGJy3w89adwP96ZYmCh4Ytun1qL3vRVg232YmBpD8UHAGLdaKXU54",
  "key15": "5WynunTHjpXmU17zKpH8vVRDzgrMUYxe5gfhgRYBUTDNiyYJ5ins5HG9cTTnju8Yzo7TR199D5cD6vVmct4iGZ5y",
  "key16": "5J5HaW4iTTqkbuRf7MLWPMXudKBfriRS4VZURhhjEv2DNQjBf1rWtwHpnfUTjB7Ty9pNbpFdpcNyYq3bitwRMH7t",
  "key17": "4EoztKdWRFM8Nvre68BkmDauDfLBZPes3KbrJNC3iNwgZAxNVJ8nnTFBmikrYNw1vqDEhDwGy1pNJanMgtBvPRn1",
  "key18": "3QKqsoVA8QBRuy7k6eTEaZSsWg6HQhE2poAT52i47PiieBv3AQMxvqtYvNpvDkA2HprzDD2TfuU234pseaLU8SKZ",
  "key19": "2guQCxFDCY4JHXYr8ZmMPLvVFBy9FxdQHibzTWjL8kQ6qqbb2gFEgZAhZhjea66F6wvdcAFkkQkjJdtryd4mXrgz",
  "key20": "3sKnh7C1eQo4VDDXALRZcUjcwzsCJ9cm2iNj2SbLBhgoPYHPQPxTahvgtNPagtSp9BVSeaaSATMMPuPUKDJgHLDd",
  "key21": "5J2DPCvYDKCQ3sF5Dc4zekGQgX7jNEZgLYimMUrbjK3ZoN9AeHZb9RCbTZ7SES6kQ1kW2UivT5iT1fpx9h9HwjJZ",
  "key22": "4h4ozBBqUJ7TuFrPwetXrEF3BFAajEYnYR81gpievi2fe2VjGCmttBnZ53sBY4yqPP3zRDhydfaeaHu42vPk5D9M",
  "key23": "2UYDY3mKyzBDw88yAAStiW5Q1dDELANVccsEhU3uY1oMVn631KnMJkuxsTHuNuyrAuCyCFiFEhQPmstuybhiTKfp",
  "key24": "3n9oZBFpTLUPKbPGiWbjDxP1skw4nfbMXvEN5dfecpuiN1Fm6NESQMVya22bb8NAH9RWGh1xXBJbCa95EALvWeAV",
  "key25": "3dbVihtRtZSjxmzt2EAvrpv5ovgCTcxM2FZoMqJZhEGSq3tApoeqenYFqRxoZzxBQWaZiKX3h3vx5P6jaMEZiFuJ",
  "key26": "2shQNckPAErgrrUN6Xi7EhJbcCuYkmCFAtJQKL6VGHDAs8Vne2qdHJNEu5tCWeqPnVcne6HGcYxesFLvfHRHk5VT",
  "key27": "46ZybD3EHbbsqSUwpzcbLEEYwR1GimdzExwuvSjtVHLohxQSoaZBv4hTDLbC4WkrRmZH4VAsuR3pvSKXX1ShEEuL"
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
