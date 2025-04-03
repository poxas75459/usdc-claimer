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
    "5M5A5hqjfTfRH9vbKoRW6GqiKvbuJAv3UejBMRG6FS6tKZR4fNR6JwyvdDUAE3ZyVKgexbev8Ad8WQKizyJN5X5B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v5XPLL55Skt2A1uhtZ8X66erbxh91ARkWrgb8EfEHaoPcqVVcXcRehy8mHCHrk3ripPNHuxd7atNsddoxS3nKeP",
  "key1": "2okSwh6CNifVrYPs7SCgaYL8jM2XkrxxKE7EQ5CjVWsGbWRFPipT1mUWCPTVEzWCMYVtg6kdM6vx2ZsYAQHw1PoE",
  "key2": "5L9S1xNoM46ezMQy5CauaNsjgeduuvh4fuL4v2zsVm1xoExRdXuQhm42hZLSJspbD2UWdFVG4g5Jt5yBzP62DW8p",
  "key3": "3DtYzBUQjJDWmfT6wvvHCvBQ1hyvw84unKcQr1HG66nUr3BTTK4noWv5ayygtEP62abnE6vn41k3aiuSqUk8CG1g",
  "key4": "5MwvicJqgNawxpXXfUT5ynpPyicioAEiiE4gGRdHT4npSkrcUKTrknWJaniUfEr6WKKZkv4HYPX7i2ULKYjwxKpx",
  "key5": "2ziPbZoMxSiJn3get9eWTnrQ8LWHb3dEAGK66rBE6GRwtKvJmfG8bGACcqAnMvUD5cCwfdd1vd4eq6xjh9DLhGSq",
  "key6": "2RqPkcfL6gD7AHLAns213TaHkNBduZXR9YP4VdEHwhSfKSrTemtDiHvyPNGkg8owDM1x9Fq2aGJoUYhMkDnhWCHP",
  "key7": "5Un2715g2ZHwv7ZoNu9cy7GPpqAJekqHbCXRYUkHUUkuhCjgF6idh9ASbfmw614GYyEML9tCYtRAS3Q6MWsbuNne",
  "key8": "2toijCeztLnqpUTMaRoFd5Sm9ugFDzJtqAvwX3VNSmvGVydAm1ozJjKN1kkiystBJrg1TM7bATtFmkjYXXc3nw3E",
  "key9": "4NbquTgYxqrtC2xtUWZX9ekq8Q1vzqvMASaYZxcACgHoqVHfrXAzhxNgtmTNuATN3aU2k9g9RCzSuveFKxh8N1Wh",
  "key10": "fyf1hMEU5gorR2CbynF7CNw3xmitXmhfDiKc9q6NLMN2qsYtrsewXM9aGYhGTaaSJdHgnDAAVFgZoTs5JHsCd5j",
  "key11": "3iAavWt1LXbo4Jo25b5KgrmMwyL3nhdue6jRT3uqWkKnKacnsVUoR3z6DzSdsSWacRTHqWR5DC7Cwutf7w8uaf7c",
  "key12": "62Fd852vJU22gj3EJN9F985g3NKX4S5siMf7wv66z46aKDM7fdur5eARfJZrV59ehwwur4YahxoXJe25ABBYPdQP",
  "key13": "23BUK85zen1vdqUqC8stFb1BeKbAbGcfyYe8R2h4ZqVW9RJgLm6kuXu2W4GqiurCJhKNsNJWkhwqQ8BndjXJ5WWV",
  "key14": "jWUXuQpWouhkodrRKUWtoA28YdNpG2yAKqwDf54kqJdjq7XHX2miU46Hsdam2Mxcx8RNFcaosNWJTYKCQddC6BD",
  "key15": "3RKUhd4KQ3SM5S1hDJomT8YvHbV3mAj7EQjCMtv83Vdu69xptStv4mdmaxjNF8ESHnTG2HsMf8nAbRUxzt9JzZ4V",
  "key16": "netyW1JXxYPpNaMNozuYKtACcE2V8H3og1zot5pvNoGdq7MBcfv2KbNV9UiZSxD6a9gHHbBUHJsmNgQLV9HzZCi",
  "key17": "o86HEcRtdnsSJkcZtScJakhdemRYdqtNnZzuDwxQWeaYWNmAofJBXwoF7oit4Ehaxm4tprKKSQjqJDB6oVUTpC1",
  "key18": "3nGjmZcBXqztQZ4LsxA5e4y8qgyVsV35Y6j43WtVRsuub5WiaSZq2EjRbjgeGV6urR5hWN32R9KcF4WALYhUt6Qp",
  "key19": "2FiH5BJ6UYzwX9aUQbD2HsYMyhFZozrBp4gXzEUp9FUyajZiDiPVyiVJ94GQDGFsptbSFys7R5eAWUzSMdgsA3Af",
  "key20": "4V2bdVRrSFH4aAT9qmodhREtDMyxvywBAwFaDuwScfngSSAjxzR4EYHCqT9yS8HQLDFvMESQmuafoT8ggXuT5ZYy",
  "key21": "5q3Gt22mrV7p1RzKDJZamjJ2oEFfLfGaUy1gvP6YF1cBkcgZ4z7PA2jtkFc5YKoHWPvQvuoc51bVw5CtQjaMn5yC",
  "key22": "3jHgNBwt8AXprHr7ZsVKwYgCQ8172qSetb86VmsLFHoUtbjg2aMYDaj7Rm7kRwZDDsfGtwbBMtZw6ikbWuAtuojA",
  "key23": "2QN8fcjfz9qbWkujHcfQ5nU2XM74FagMPb1Wwa7Bx4RmQoiPn8iM5yhWUbiPvWKMk78sXMTtLrmH5LyrPLwKozZL",
  "key24": "suHsALDKw1TVvpVcG56yZGijm2HkyYJ3XQn1Hs4Lfk2eaKFB6yYSvtrQGaNytTo4uTTWU93xcUVdHo7Qy1o6gzJ",
  "key25": "Ctug8NwqKr8F3akiMhAvuvftZTxRGgzvM69RucGC6kyUEt5GuhdFyqW7w7qLVAmJsBwuzD7AuQPBeKnXnzpxfCM",
  "key26": "SvqWraBUt4oi5SvRNakXVnKT3A7TbcrczvwYPiEZ8eRuxrHLwyHRaz89uqctCh6zxkrtve3KmGHXAErkuYRYhmo",
  "key27": "hAEHS75kr4wuuiNpWUoZjcQ3Rh5bTbvvgNdwdDkoc1paAx2F6ziDKdegKXDdrucSDxfx88b5d9yM7YdR7LSktjD",
  "key28": "2bxwA6HvK6Xhg4zaJvgHVg8zvFtuoFnHWLABMjTTXb1goBURakc7mkSbnerMTt32PEyA2SCEA6RqtTYq8hmhXsvF",
  "key29": "5brHQP9TcChEQuC8nWMAe9XsQnnk8obLPL7fBLpXd9VnpwrpHofQCKVMc9Y1LnnVyvqd24y6ZcT9L6a1USAkPd7N",
  "key30": "4M3maFBNhzdrgjh4BsqDvqn8sTXDmtb68ErVNti5kBz8Rzg5C583wB7S3rn4sTBK3XedF7nUJD8w6pkNAZmT8rA5",
  "key31": "zCF7VWutNajKQsmSJuCAZKfaRsF3Dh1aR5Ek8yre5cM4ALJCuVcDNaE7DGoLHKKtWXaU64ogphotxtiagrNHitP",
  "key32": "2AC4Bt3f8Z9xvjNpgymBU9d5iSTQpWyU1jxqphzvmMiW52ZPPQdTiuAASn33FsJ1NzZvAhs9mhPEZm19RLzZjZjr",
  "key33": "3FMfcGwoayzPzRChqFVAjxZ5NjPpLGYhSFdHUxFTXVwpoksuSDogQqzJNJBCUbqnZV8d8zxf499f1TvuLe28uWPS",
  "key34": "4B9CizrWYQvQ1TEYugDemfGJAFdageGHien56sGcnKSLMvKvDRM6NMk8bv6EVWtfajEW55P8bwULMqf8uwN6Fqba",
  "key35": "5ksN84Vth3URciLAVba8LddcqgwQWtJhYnzhgJVVHDZNpuNYUN2H1LZXxTEncYj8rzYMENxmKg4ZiFM9ANqnyj3r",
  "key36": "vadZDYk9GXfbmeLCP4EZ4ruwTRgtn7QMkZhA3qTUJfSHcBeVZh6qJ3Df95vRxFK9535yJTgTxquRn8j6kj6sszR"
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
