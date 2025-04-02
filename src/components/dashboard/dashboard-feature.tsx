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
    "5DtS31UbdD2jNLxeuoV4eHkCRWmLMn2yLC4vCg43Dt52CzwE6GRsonP3VKWXK7qa2y7BP8ELfKF9XRx7GEBLvCK7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uet8eAwLVzdmyH2ra7uCZtMP6x7Q4zCttYhcNNDmoMC9PkNGe2PH3f3vCT84igF7X4PcdFcti63XCwnb6qc1jer",
  "key1": "j3hghn7YgzRSbKcCcrawLo1VKc2WtdcRN19PYizFfeJ9cSej3gzJzQY8CzVwYHoeGkT3cwhrEfSzJX6hgohgjrF",
  "key2": "2NT6bdsku3dCHRQQ8hZVy5tpJFgvNFEGumdmKV3ce5bY3ZkELQ2Pfrx2jUcVNnHbAosGd68JU2YvUFEidQd2neXD",
  "key3": "4eMD3YwSDVztcbeN6hJBju1DN1tgRSpHcmiNWPtZ1yiXSZQpwQPWadtJvamn7GMUWh37s9dUATnZ7wd5KBUms7T1",
  "key4": "YXncmok4Vtmjgx6UBdABQ6BDviYYMxKBtnTbxhAvMWiViqPQXg121qS13Ptt3oAJph144aBAqoUbx2n9Grg53YW",
  "key5": "2r7rqWf9mN2SVJupBX6HNXHNxmsWNv5SqUFiwGuiYSj44HnNC418kAoo5zHdUrM1xtGZ1EPmoTnUYPGxSdR5Fhxb",
  "key6": "4tpBN8hLc9S5hwTJfWtrMmZoZQoQ7JhqbSkfCLiccckrsXN9eTRBWJbYD3BD6uGi8E3TMuKmvG4C3U4f1AzQtXGL",
  "key7": "35amVvbmXPHwH4MNdiVq6MikXyb87tmX1YN5i71zhnqDRnwoJXPsQF5nywKiSW6u1SdQh83eCQuNGGnwdpwcDVuH",
  "key8": "4shgmpaLWXjEeVSP8F6cqnawzKFtbbVYsbAK4z31SAbz26u5h5pLgSedmLqxPnwgmYSUefJkCuVgScH3y48ba7XN",
  "key9": "2PyckTELLpS9ZE9HtrREbpS4AZm67DgVQPbbbhCD2EPqs1gzoBjBYDaKZo9xM2BPHpUkij6hYkXn6pNK6MhkFLpY",
  "key10": "KZuZcGAQuZaFTfCjzvEdkU1f4aFrMuFCfuj8QhreB2EuMts94eFCCsZdjZgY8zbyjoPjxR5W233mAk6v2fvo6CF",
  "key11": "4c9UNXZPfwkYhi29p8ZRPUzMRXJgKzyXP5gvA74dCcHAsFj1npneDPguPcNSQUrS1nWta27maRzbKMrRQAaxRnSy",
  "key12": "3QpAHX74hTjCboZCyppHF6JfDX1HJtkYZCDXjhm7dAj9neBmnm1ZZP7auAAm2Ab41nQFNEaunuK6RQxvdcjHdruq",
  "key13": "4a5tVXGQqgR24xZiqXhcLJ2MDEbPV1ECaWE5J8GfiSCRoKZ3k12JRUz8a7CWZ4uNahmR2ntNyvvutfZMMZx99xtC",
  "key14": "2Cyyahcr1zdyqsNqqguBmiaR8QY3FTUiotPFDYx8iMJuzbc2oPtzkaxhkhhgQ2JgV54ZpjduphjjuKtevdKnmrgG",
  "key15": "4yaDhxDqW4Xvud7LgLkfaecnpTpfHKYaeNhmG5aqaXmoJ3yhiYRo5n4yVNbtfQfbHmCBQA2LwPkefXZ3d1BtEAVC",
  "key16": "sayDii2jUzueyCxV6tgGqbob8V7GzEcnqTQZ2HDEsX6eSLCn7R3DCV8SFP3HCRb79TuFnjsuBgNgtdHBmvQbLHi",
  "key17": "35HnzxeoQHMuNKgJ5Z3osaV5Zs8ZqXRiGYTT6wmjp4BTrbWjQQ3smvfFqTjH1HiNfwc2rVxoJGxAhusYkbNpYJiz",
  "key18": "4jqgeuuGBGGfmi8x8ZXoNsM2on9oNtMsdb9NLqcuifX2awWpN6drca7Bsm9yURhf7ALWZgQYHn3L5Am2dfvxs1D6",
  "key19": "2EwdL356TXXiYrB8tuPu2yM6ZuHd2oHzBrtnfpBRNb6etYB97qLDJfvmYaE1u5L4H78tTRs75qnBFVMqvaf66U4P",
  "key20": "wjT5v5NQ5RDKHdQXBUiEft2a2FdiuRndsAognqNk6znrVkYGpPjeuwxquy5iNCzgumjA2rgu1m1UshdRyVxfVMi",
  "key21": "4xubEs9Vvg7kTu6AUdS7GfNaozeBTp2n5pB4k91qgtdxnQ2T5EtND5BCZid2PLoeYpk7TUSDfSxjAjtu1bURhcMs",
  "key22": "7ekPpDjYf4HiDxJYTMXBjHzKyWMT1Nx4RHUKyzUbA3DeiDJH2SwKpuQZBreunWLdUYbdq3Xi8kZb1ah8d6cPLgv",
  "key23": "44kiYUKqQBxQJ3X81x2aWXFfQpTvgTpQ5McVSawz9DnECdXiK5yBVsUk5HvxLmgQmbSBjod63rdDZwLxJ7wnqctF",
  "key24": "4puHB54jXSJCtjj3K5YM2a2grRNV3wuZKfuCPsqMurVBoet66nmVGMAthVrWQFnoZavoh76hnufV6VXvHp5dzL4Y",
  "key25": "4HcvwR7HqD1w2qPcyRuZGbjWgAAC7ytXqzf41vEQANKsViLVfte1wLjvnk1FMW5bCbSfVgZL1z45qAjEySFZYMgM"
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
