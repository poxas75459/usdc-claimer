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
    "2kS3xzDXbf1Ktuy5KmbE7weBTP2aeSCT5AH3g8iwYG52ZvR3qa54GAi3FNx6vZRj3hV7JUZfx4dXipKqAyPTrop1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38h3Pv2BbEx9CWjTLZyJSmsM7pmm1j9hoP4G7dJWx4Dxi1nFugH1aToiPu5vGCfwYJFhu7uyogE412AJKpg3CDkE",
  "key1": "4fC85K2dZ9XBDFb8hc9QR4eY7PENBWpiNKrpbrnYLQNym7QQiMxuXxKQThkEzpCBju9F2gEtV69Frhf3g596TmRe",
  "key2": "3Yvu2rBvgaosVanGNAPpN7nDFZLLj2jswrfkPqLWQEAPcrU99sjYp42z1NGuudNNKWJTXTSMEWQh6tX9fHjHgSha",
  "key3": "5msdAHJtKgzngFHC1HsfLTE3b9tn8nBQUgqWVoNug1yBnp4x3Nc53PBsDNEoioRFULRKhszfDVyWkhuEjvoMLuQE",
  "key4": "2JfnV5UWy6vWvMmDC9zgbAC33sUibgUzGfs1soAmCcFK9HTWm8xi4PY8ij7a7B5e7q8u6QRyheSwekD2DpHPu4cd",
  "key5": "3PuKzhhz3aaoA98zHJN8HSXDwAR5FJxtA6ekoEHBJ9BJBk3JCZDYEf6bdrLg38i8bY6Xfnh1PFh4nBua2KjMYm9u",
  "key6": "aoHES5vZgWbKLrpxJpdZcnygczymPpA3Bi9sMG65iC5xoEZ4ANS7z6cUjWr2TKBSiBkMaooebL44y1sciUSm79M",
  "key7": "3BMMePMpn6nzcu44Ju5zja1NdgG5XKJhpDtH7Fq5dUZ9aW7aQf1LR7awNZTjQobCYut4oJNkM9WY3DnTqhnmnn4V",
  "key8": "4gYzp6hqUQSTF3bPxpFrqbPBTGcRZqYev6vdFdar38de8gC5F3ghQoFwzTBuPZvHh3wsDNLfX5FhcugUQ8LHmQwr",
  "key9": "SrJct4ksthtvVSfbpZUJPotXYtjVd6AY5A6yyxVVwYAVkogAY91NZmoqtozyzGwfRMFSCyDwP1B2zXcNy3jG5gS",
  "key10": "657r2tET9tGPVG4smzxR3zNivyf3hZcLsmURXuuteJV2GpSrfBfD7Hn8qzChbPUwNpn69CwazDA4AhsBEBYNe8X8",
  "key11": "5Bn2wDSK3kCsQDdEM8BHEXUC3NtMe9Xdu2nRJrRccjUGpHfxpviQJu9S8MxzB1uo9thtnby7eZV1yDfSt18thZq4",
  "key12": "K3QyTcShMUgrjPoh4zhnYrhX4u73mcBnY6C5gd1SzG52xYp93ARZWxDafmtBzg9sAffzsNZXk2ujPJ9M4i5vFQP",
  "key13": "4Vg4NP9h4YB5Z3CUixhUPdLpKWjduxhMVFFCRBhpeVSdjw5KAZv3q4D5RQzT1mMbXCwdXYKF2eWo3UPWAq22WxwT",
  "key14": "5W6k77tKuuRxTrdyaWFnA7u5QbeeRarnCjdPN1ChRgeR7GT8p9yjy12mAPo11QZKJkrYAVLGFBWWXGrz4bfp2Ma6",
  "key15": "5YyESvfNohLoh6rh2stMW3sn428qJ4AV8dLQEQ5e6Juu3TLSDuTZWjcQ1XLqGvoT9tFyQrMkRMRHbx4U7xmRybiX",
  "key16": "3Vv2RRjWj22gPXbrdJWsLZL7KD5rJaRvqG58ngrKCogASDVoCehtmmZC5KdhuNJYRb5cEnXFWAE15d3uWRPiNbb5",
  "key17": "zzqBSQkPgYN6d5vVrGKTMTRvJqQ7gg4YVC3SvSutL2Xb6utHJDQhfk78g2zbAvWhvL7b3kN6aicL7zHRLEu5wL4",
  "key18": "StijWStgCK1DfccnzfUxtXpe23o1ZkumsZ6iyeFLtZ9u4P45XNg252ZqaTiT9hm1sS36Cjf2EGVj2FDLzj1yXH7",
  "key19": "4u6GUZPvrr5DMYNofnEfayUtuV2AQ1G7rj7exPV1qnigGiqbAgzSLUbfeyue3rnmEm5k5U25o6Gb95jXB82jBTzX",
  "key20": "4hJ1s6Yeo1kzYAuRWdHEmf76gYSGSYQeaNwn5hDMXkYPW2q1AMHu3VPMTxbPpDgHfNbVWrkzRd1ePUnwGbbVMjB",
  "key21": "jnoL5jQgjDnCEzerNPVgTV1TthKctuSKWP4a9XJGb4VZCFNfnuodp2mDRPk9GviBPCsASKnarJaUTmpFRxh6kYC",
  "key22": "4Mxy5mC5YD2aY5pBxUDC6tKg8AWigx98CF4whifqFxhpnzPkUUX3ommtUsZXb5rgfEnjC4jXq7L126Nk3miHEQvh",
  "key23": "4Lxp52kBujhkeU1yLZYMxzPGrr18QKVT2qf8rfWhm3pzLaaj52ydpKdQRWRyUvweNsgDhDWaiT7GRkgvXUYJHgPH",
  "key24": "2CCtZACD6i9j29vMBvdZgBJnHz6DzUwu1vinudQssoLeeVD824qY7QvXtdA59Z1HwYhPTh37NqHAKJ5J9QBg3BG9",
  "key25": "29FZm6Jgd2GXdMA7WLPAg2R9HUA1YMFNoxLY3PG2tEcBs8wuYWZ5quZkNwr8unFHUECvcraAR6PAGPe4u6KQk7Uw",
  "key26": "3sk69t5JwXPmJ9Ac4a3L5roZaSGrS4ZMqijKbAQsDt8Tnv31Hzn1bBvJeCkD8KCv9SykXuDNFzv4XvPgP82GwAaR",
  "key27": "4BwH7ah7RopZPPmnyKCQkBNTJ9imdiqAqNPoKrHGX31EMrckTRUrgxhW1M75iTDjBS34inkWkxLp64eipMQUtzLS",
  "key28": "2hEqViqWYBKZzzn7VpCFDQv6rQisE4PdNoaxXDCuo4N3tZ8TzHH8knSQZesAgS2UBwavTQw4UJigMTNwJvjVTPXG",
  "key29": "4CqkLBYCKqS5r8NiVVEr8LEGcQbhiTocGCwnvmYZExdwt9H7C6v7Mq6yhhRK29EdakCm7LCEqa67SwtymSifBHwW",
  "key30": "Z6muenV9UX2HrFmgJikceAwJvfAH6WPVmtLvx98dmRYwk6UfrH7TvKe1v5M65XCtEHizBK3Lzyu93JbZAyMMvAz",
  "key31": "3GPMAQXSywUK43Ht6erFWAH74xE8ayMkaMhBcyMSjVECMqPECgprm43nL1eBKgV9Z3H2tCnRuva7FrmSDijs7xFR",
  "key32": "2nYDVAYicYudKMEBkdTH1amQ3srLfH1ZABJdh2JbwvW2hFbu8ecovWb47czon8fYYmdGca2KkkSXCghDMWjLvCZY",
  "key33": "5LYxudaCLmNXP3Tons3aHrTUrthi1QhxvTukPYDAV93cTeBBHcu5cwNwSXR4tHAnvfkSA2pecoBGyDzWwK1QaKHo",
  "key34": "54ukNP3tkhrVfh1DqmjEDSh1vJshB8AE3ziFMhXt1K3qLsno8q256ev32VCBc4B11fJCuMGjAorWrRjkfgiEE465",
  "key35": "5je3xygkVDAsEEL4Ehk9JkohPS13m5sUyjFH1MvVLEo9HSnSBgyKreMt8m3LeYZJ8wt7brMQ8G7W4sHMWVcdVFyq",
  "key36": "iaDDqKUoA3t3RjEspdtN3a39YW1nvJMvsD9eyubF5hCAYPbJ6iJbV7PuZWERwGRMzY4NA7LLh6JZAGci73dQCC7",
  "key37": "3STJCwbRZE7R1J7DMwvMuQ4DM1GZYsR4yKtEpCABnkZ8wtDmZsmS1tCCyBeGLQgJ4XzCaDkDS1CLxfp1EqDa8JZZ",
  "key38": "53SygCmbv6Qx6dLJHXstgFARvUNP1ovMRTo5ThBqS9GS6ZeSSQfFwej43J7dtUMFKzu15qgpJhCM5sJW9WE31vmj",
  "key39": "4RafNjCRZ5fRqsdSgJb5mgEZZkC6jY3diwA6FwmbVgoHFx5jherpo2wBjfVxKkhmru3AYsd3mqUuEwX8BtqKDcXr",
  "key40": "45DE6f2sAoXgh6Xycw96n755GuDL356QUTu2Nh9r6DptpDDyujnKoG2PNoaJ1Sda18nwtv5eG4A7wmrAsvVs22rr",
  "key41": "3nudJa8wNXUU8ZSWXhgbo8EbJdvTDzCiet3bzgKoU88HTiatWcJwmvMGnjnbtenyioz5fFhtnzBiaka8x6B1ZDYZ",
  "key42": "4wC38sgLVCGVzTxntT912fGvJgKLJSTRFWLVhHNnch5TQ6x1cwppntfHX7MtEvFeZXTPBUosbe8FeMBBfH7zs71x"
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
