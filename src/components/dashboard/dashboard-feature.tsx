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
    "3UFjCEt8iHX8QwsUhBmm2LMrDGcc9jgmHDZM92kkvs4pwfQq4gZKTA5ZcdnM9Lsuf8Yk4Mh4RnxY1sMkHgWu5ntQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "396fwMMTHEAMs8VHD9N4FBarb3syNL2dKZNFQpLRsh4LsZxj1MSDJ62qzF45znF9ZuiyW8MLK85Ht1P7RGHLtb5L",
  "key1": "SUE8ZSEf4UK1wcXM3ZiGHzbqpPjKySwnnUzM9de9jd3PEy7GA4V1rBBWLkixVoqkMWY9tvEJwkW8fueJKcskJkP",
  "key2": "5Jkgv6azbTAoJ9wCLZTYFrsQhM3KbgK27QUqhYM31chwgHSUjaBj4dHGv6w52W96bxFwtKP9dnj9J1NpfuJh69Qf",
  "key3": "5NLyPAuyfNXYo9GiePJeGArFPjZCbSCHkZABLAziEH4JQib1hT3SPyeEJhx4x96LL5GrEBxdkT86ZB1MNiFxGTDg",
  "key4": "3x6Z7rBsjnhZyTkjBDH8gNK4CRUZ5nbfx2yKGnsYXB57fCMbenB7Pebb2FsefGUSMkKg2G2V6gK2GCNUzCo3c6yV",
  "key5": "4N4KiWaobpigJUnTuN2L2fxqRvVui4UJiTbdAsoUhUMafpeiVQPnptcGongEZjwnDRaFTsQ234NNqtEMhHRyMUz2",
  "key6": "3d8xyJEcZz2GAVHTDLLxs12nmfdsEpix4Ti9AJ1LuHnatyGb2qFPSSts4hyVsCyw7ZU2AA5o6A1ip8usShbm8Fs6",
  "key7": "4BKHBBt7VFNZhSBuUYkdEr26schaQreL7JP1Y4yXT2wfHCCfyHVPoy6VPfvGVwYVAu4ZwKVNyGZ9KQ9gwzZc98RU",
  "key8": "5WtUshtCRwj4g7AKP8vL8bQbB8P34Zvn5kxfwD5JmJJkbQ9Car2CnpZP6VsETo8RrtqcPdrBJYd54gf4mTK4Tg2z",
  "key9": "4fdSqUuS56PYhcd89srrSH8P55C3zhNdcpaFBsNiVYeDr5qbsZ4VxSu9xZycCpfrPaZ6Z9zdnkb49StfLU2h79r8",
  "key10": "3v4Kd4Cgh3XjFDdG9HXUHgh45JNJbHmwPZTLE6tajG2Ugf3fp9bJdmBsW1GHxnnjUzVNTqxatkPKsHgoZT2nFqko",
  "key11": "4G5o2V6DVBy9SQougZ1mmUCx3y4N1gZ46GEp1JqgvCag9oHnik4vEiUJSy621mKmNVSAnezoNxn3SxhNPssGjJuh",
  "key12": "2EU2EunovnumHhVJK3q3LMvipyDye2kVP1mDBbNxaUcMsNakUB2BfXmgaknH9gbYFd73PjpHHZefyAhJYqEv8tpB",
  "key13": "FXgqu5zW9scxLJUehMH1Gab95yA6D4mjLaxtWcDnabJJzT5Cfpjok2RVCgdznQbUFoqQdb19GRRgRdWGVMcaxXc",
  "key14": "29bqxwizcWUMnwpqujt6qiambfxa6KXNxWrcn88fLzySdZ9bj6Tmxr9Qud5crWutMyXjGr9RcmPeRU21xyoZgs8K",
  "key15": "46X7MMEYi4PTGX3oTfTzCaRTwrREQw56FpuAcoMPdGsycVgFhquggBW5vmHSmi9Ui4XH6phebc1PdVF6zzbwuirh",
  "key16": "2NMZr1bQhnyKVgKNfgkUgGMRky6hwDANdyinvGmZ8BYgc3u8PqSwrh53LjQ1KynbkVPjdQbHT3ZLn8XNGkcempmV",
  "key17": "34odLZqzUpFbJCgwqTtfs3nC2ZES4VoMCNDMPXTHRuwTBbGnvaYK9ebQmyndPUxQyfkJikB5HnYFQ99EajQ3eTNF",
  "key18": "5RY3FQfqvWf46zu3UUB5MMRQoFpM1H1kakMVNhGKR9mQoM9jPCijk4nwTqitXMQF6xLbiPzAxQiN1ewRuVxLXLCM",
  "key19": "43EgdNfsA4E9DN4pn1bKevUTd9ovAtdUkM1nDcnkQ3ZyJo1XXrK8w1nRjYWgkCgcj3Qx3CeL8sHrt5DRhmmXMdEA",
  "key20": "2sjEVBnR2qNFev6gN347Gb5Qy4EPfASHZUcxQ7e8UvMcSmSBm7bh1cHLYWuJit8RpGhvb35wj4HXhTDyihk7saSb",
  "key21": "32sYqEAtfm9nkDUHihGr7UgtXLfmeQHubQWphCi5bii4S1edL18J6WkGZAiT2ikf4EtqdjDkTrwGaSYKym7QSpjV",
  "key22": "9PY2NGspDwhxy8sZncwHSNn9KcRjersbbFbT7vhAZesVxBBJ5SbkYxHUZ1QGjKRxdacmcpeeRK1qLQtBXUqCgxy",
  "key23": "4dL6wbsCDUfMVStfXT8Vsg3csPTjDRUhNCsmVcWtaHFSuf9iphpbwDughcsrL6pdhNnF3Bvq7pRjPMUKXEkxpDro",
  "key24": "623H2sGLZSJkHus1cvTpz1h3aB9AakKxu8uNcu6ZZa7kmZCBQwuhr8REgTz3B8ccZujwAR4onYaq82acbWd9yPhV",
  "key25": "3BrYxX85iAKMsiW4f5cpnFSbzx6BooMA3irX1KfSyKBg7tmaSVQ9bxHfd7TqR8C1RWEDzHdw1ZyXV1528MzAsvb6",
  "key26": "M5YbDxZFq7cVhto8JJ1u2v5gxLUxC42B5Tou5ZxwetvtKMwS74SUUPgpsNY9bSvXLZBsi2r55M2cZ9nGomGQhLf",
  "key27": "4CZhKym8kENTjDrBnHQVmMZ9ivXqBhYzySHziQSm9rfygFmDTJ2FBKSwznPMwVBE9sid1RVyaUV5DKEW7X7af8X9",
  "key28": "4XQoSGTchepnDnXKEDZjm8hqcDvATnh8sijRrHFGnM8pYfFdQ8uAUbWLNzJ2nwki2R4rxHxyXyvw2wDFg9QNwTBM",
  "key29": "5wqxVqn3HXNvxw7LgVKKAbyedQuQMhkdYc25LW7c5cZxYgn9NJ7eJeTpfJLkgyANeegag1TdMQRZX5zmHMuxuniy",
  "key30": "2C1dpnfi1uTLvEQYACy1qQvR6zP3fkjkcAeLaHhNWiYx3py56Q74SQCaLSPSH7baMnP5oLvVBdEJfp1YzzWe2rdz",
  "key31": "49tznUysM1Fv76iupVxNoUAeAP6mA1VCbC68uLqGRUFgo22Ewy66BG9Sh7ZKKopHEVwomWhyrFgYbGRhH2Q65MAY",
  "key32": "3Zw9yq4gz4MinCmTK4vyMdn1MdSCcCM4dzz94kAHtH1YXjHC4aMjF3yqc9UkPAKmGLSU55RaDUQVxvES9A76CAKg",
  "key33": "4Y6fbjPQc3cLgdYN8TjFBBZoExcHzpCfRQELucyukcntoGmwiMm6SDxLterkBPUHWZsSqrBbuXP6LLb3GGAV1VsY",
  "key34": "462rGVBFVvoFrwVKXqpxqFQ7H1HP3uKV68YS3ewJuf2RGjLgM82XBBX9YozYwvGnKN5gPo9mhwEujwxWcK3TE1nm",
  "key35": "5L33L4TZd73MpPiut35fHm6U1QXgfZiRyJ56UJpADrE6v5fY59XUc4uGb2d9DcsRHVpjEhhgD1eRtmcrejUJQDJH",
  "key36": "4xKvBq4vyXZVshBSJB8zq3tY9JeRirsPtqpwHGwSEk31kMpKPMUUmwvWtRLwZJmLmkvH3mRW9zeJjAHuPEKhAWvg",
  "key37": "i8gUrsQFMRarjsEW3DQqofSK9BG4VTgefyEyrca7oZpoFH8b98mB8rtpbV7mK5QNAqxWSUFZ2jgvoYexnaTMw5z",
  "key38": "3wCxY1xX8tZUH3YhEwSDEHxE9huwKnowMUb6bnr8JNfMcrVEfBLGG3xJQwK82WC1g7hxx4X4pUKi8P6AsoJLo55f",
  "key39": "PMdH555w6f8i46Fj1WWrDycKsZv1cJwgYSpnCRn4Wec7PSHCLjpMfTjnrQXKzT5i83bLxC8SiofQQ3sA3jAxRLw",
  "key40": "2rgc6awALzwRfkGozdsRXXSJTJ3hsTduY5cV1BU4MJgzb1sqL9Z2CUTEX6D8A2oDnU9dPjWRoHQjcdyzsWMQNKf2",
  "key41": "HD6ddPwaEGEdmSL7wyvY3YZK85sKUzuHx4mPH2pbfdw42CaMUyL7Qa46TvMguRi6sa7KpZ5z2UyMtRN8yrycjdF",
  "key42": "3vxk2MFsbRc6zd5WNfJutNHUMEdjfmmRVJwCco5oBmcKEew2o8MqkubMnoYa2kMZgi4WWvcyqPA3hViYWyMfsKMM",
  "key43": "5fqB1TDsh7henPUw4mcA9CRcnVaUeWKZ1unhxxFAwaeLr4SMoBaBED3F39EX6MbmLYDSM3dfns31gi2bxYYGoBJj",
  "key44": "3JLBDiVTqHwJLyunXkABLbCECNE2TASEz6Z36fRhwB3uVYHx7f2g5tDY91fVp2AywEY3hX9RQh6gx3c4APz6JrzW",
  "key45": "4ZZZp6RzdFhk1AAovmzomjbrgcwnZ8bninVLZePMuGKexmtUBiVSrg8hABfjZEmW75cs2LC667jNJ57Pyf8664d5",
  "key46": "4fSdoxX6tuLrVY4qEdN5y8AViw5cpZmQV6tBW5w9tEzQuHCNskMqe72XZuinj6gf9iUkxvRPr8G1LdMsqacrbFSf"
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
