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
    "5ZeaGV9y1RuqNcQQk7z2oucyT97v3ZhMyQjPPsNh6nUY95mVGMXa2x4D9LCJkqWGiLsrRPBScNbmMzQxY1eR1FvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3GqxxcpV1gt2Gz1YCwRuWstEJw34xaQAdrgDYgySTENyo82dsQEo93w5jTzGsEcPVaSWg4QVLax489rrK7pX5x",
  "key1": "3wGCvXAimRbhvKVtKPACZBR8XBhTYt9xqLwbeoVmurUHzZsHEyNDFbREJhhDyrWSg86rYVA1J6kpMtQFz8J7AKF8",
  "key2": "2jiUevY6iQ4mBfB7ksY314JycJgdsngBwcuCEMyQBYeofMCXpQAVmSXvVk4GvWcpMMQUT4sYLggzvoashSxBuJYx",
  "key3": "5QbWti46GkyYW4uAk1drpumKwWiwvikYMtraqGaWvYBRHci9t1Kexmy22X7q4VdeUiy31ftjj8z6og5VPaJohJMK",
  "key4": "a7FV4zpQznG34wHbcDaGfnEMrfJqaJ39i9wSuPLVYi9SJf3udNjrJEwwsWRPP7ZkA9CpPcpEDt6zDUCWphigzwY",
  "key5": "54tVYoZfcf2HyLuJwaU6nt68xroAxbnTAcAazLLqWKY2CC2aQw7eSbPWqcaXCdyEKdmomyPzsYHncm3cLYrVdq1x",
  "key6": "QfjZ8QvN4rFwBKKzPy99GgPqm3vPvjD1Tp1B5M5z3npMoRMhpcLWZqVwFJ23rCJyS6SLd123jZ5ab1pybsbvbtG",
  "key7": "5mYrNYm2tuGbVBgJ1BrbTbHB9QFQYpnUSegYhBW3SxH3jhWFYc8BRt7rZ5noQtPxtg3uaC3Shuv1oBUwzsGWQ7it",
  "key8": "222XSdw6HAQnDQxsFCBYwLPczDQQCizHjxfJeRAzfQaoDhRJq5zHMVAKNbp6xsaEEJgvy5zNZbo6BPCewujNqxwY",
  "key9": "3ShKbAZmjKUgEBw4BitoGiPVgsH7eRrmNrSNidDdK96QYhCZ5sp53uEDbfLK83UwWFaujvZnV6Lj1nspvhUvT4AR",
  "key10": "hK4AsBQqrcJBcxdBq1wgRDyJ8QNkuj61KtXtP8B8iowmRixrTrGg2S2ZAYLwCB71a5Qb2NWXq48TGdMacoAdzo3",
  "key11": "5mwY6e4QLFaKdNHEuVgHiev3vfZGL69jnac8Wnrm6fhuYp2cvqcD1PVDevbvY7xR9b4GZPwZX1EhhGbwBffEjFA",
  "key12": "37tG2A5xq5CaBZKwQKrvYXMxBgihsvwZGZfhSZVBtK7a3hRAAfE9ocoxpaiUVjQwLsH8anWz3HACH7vcfsBX5DyK",
  "key13": "38k6AahUDmG49HPKBcmMvXXpQmYMjd3QHfpgxvoKbbLcVoqigcMMkpqu93hUxrLzwdCRUUy5iELxZ2Dxa5sYh4VK",
  "key14": "3gD2fYKUftam9zg8tW4EWE1EZk6PJpCt6kAB3VU58ic3Z7QnrZNvrkXDWpAYoa1GeTTjT6Ku52vJ9hmieEJAS5Ac",
  "key15": "fF2ncGJXzjyytBFNJmtG9J5wkNGZAWbbx1g1oHcYvE7Ce7esMx3GYL3WjNu52Re6SwuphJTsVMNNByPSBNdVtPd",
  "key16": "56Brvj1NUDtxGZiHRWCXfdX4NJQFeiTM9bCMh7Bi72VXrfrchHggkSGp5NCTF4qHaPDjBccXxe76KbwBP5N1z9MF",
  "key17": "2XhiMosDtMDiWqZ8JsWcxwiikWDJoeQVQdw9ApjgwMtvyPR7Pk754DEmWakkZyyGqqkZjCzcKniUxdWoy6CF9TgB",
  "key18": "ZuSRsAJ8UK1NZisabpbsdfhTGpnJz8YY7AdDHopB7V77EQ4ShaudJVgTJABzpGHmJT9TmVd8gpXckM3BTf4kn1i",
  "key19": "4s9mvrGE2QRodGuaJGB3WrGpZuGyqYR52gqnhwPxfoH6vnX2hiF5F5WhurRftAWCfreVP9V2hzHYoodrTErfNjAe",
  "key20": "2GKwzk1Nu3evhYX3STkgYh4P6CyzTb2DBjPbYsNsH7NS4Xsr8DARJUevaPdH7dYuUvGpiLKmo1shXPM8QitusoFa",
  "key21": "2mfFQszzXJDufMxxTy1By9LkKWAAUo9iWz7MegzweSRas8vqyVjX12XgmsGvApWqXwAZsgaig2HdN1VTBoh94cnJ",
  "key22": "39i7fB3BurjV2pmtHtLJToiPnqmXt58FJrnvnEfjTVHasybzYiKuiFjhQGA6XyPYzkf8if5ttvtbpWNYqJtfk3ZA",
  "key23": "3M6VNAfsopAZGR7mJMmaWKQtXszhWtjaWgiy9oRWdKs2q8tf4vuNN78inUQ7kaB2NiAwXiUrp6ZGdxgEbdJY7yaL",
  "key24": "3YFRaE8eGfwuaRcy4whrPcCToQAS8dWpepGmijLXEfhzzZydx4zXDV5TKEmuHYMagiMHtXFvg5Y33wr4fg4Q3rLt",
  "key25": "3ef3R7rv1UEK6aRb6x1M91J9TeAb77fafKphHqj1N6NbrUhdRpmSPHdMku1YgCvweiAg7HmSXiJroQfNv1SDL9B4",
  "key26": "3cMxNhXJowh5EUHxBr4712MU7WucD1p2VgkAbjpMtvPbyyyYyxgQ8YchGyNVhvJMKwmFWut4gMLAFYwRvqiu7cw3",
  "key27": "3DHZ6PU27bohkLWjVEUmmJMC9WUebBBo5aDqTED8ReQsgu78ZygQwPmk8JmXQ73vmV4hw3MjcXgnmEW6SKNRvySi",
  "key28": "44cgUMRer7ZqtrR6kgekTBBKNsuX6nPzezzc6rvbtAWv8kEDPWN7MP9xhJqTYqTBT7LZExQGXRh6tFNbiUqsv6st",
  "key29": "5EbMvTv5A46uw6Em6NDx2sZMhT9k4a3qa2aLYq6gx87Sid9NThtQUqx5bHwzMXWSJ1fgkB65jrZRjRmSaH3G1xTe",
  "key30": "2ZQxGstFBaKB2wuaKqoWciizuR4ZC5XCrDt6m6LiLqQqcyCGrXhLkHf7mQ9bXZKLx7qF7TW9cmgdp9oZEuartYsa",
  "key31": "oZGkbaS8CrjywAjH5g4PfdPKEHp2pjNKqb6Z2r92QjtTAeSkVLBvGmQzVkbYLSJb9Ab12hNfyW7CKU7GNtpzLCC",
  "key32": "HohPf3wS9gWUZxptFha9qiA3q7g8ohnftsZ7dwitWAmw6E2E2vxW7C8WyXbkwYKyS8SB1zmeNmD3zw4CosaUvp4",
  "key33": "66Lk1da8CVGhVgqpV5HehyphcWag7sXfupt7SRAy7uSxoKG4niqLvL4QC4jmeUD6hShBswJjxg3j5nNRkJTiEsBw"
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
