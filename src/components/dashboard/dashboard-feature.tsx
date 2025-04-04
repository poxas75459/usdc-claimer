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
    "4YViriN6zou7ASJVKT3kv1H6kDwVG2sfLirQ76qTSc2ZjCn9TheCg5wGGV1jQ2EqYQcX2Ha1cRxV6JVuYn7noZYp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RXdN29idVhwMyNkNPfp1rzQjx9TDiSUKhU24XGVzHFb4bUTBcngFSujxw18LCAGoWdXVmt8e2DqgPCyBMQVchnS",
  "key1": "3AhGS4so1BLrUVbNBR7FjcC3euU3mpnDT3oyYvgTRktBrJdE8H23onAkFM384zBArsaMg1kCLscKYWGitP5STuGn",
  "key2": "7FwM7SaABe34eo4NfuDY8d2MVs2i2BPxMgSc3LUPf5qfdqgwwbJQUb83TJUbsC23hwSFbyrgXU3ngmab5vRTPoL",
  "key3": "2SA4E1kX9coN4JX258tyA4PSsvHdbPSEc6njEzUMVtHNnLmyEyf6GUGeZhdwrczndGH1aq8rzPyDyMuGFdGo7HLC",
  "key4": "U6MhutnW18VjovsrKWb1gCX9mDQurSgbTkbwBKCbPxs97goBJ1VFRYDdNmKRCrU36d4Z1Vj54qT9rmeX79CM2Tw",
  "key5": "4N31hZ7C5Aq9bAVN1aTG5GZLAaPD4Towp25S2WScNPzfjwzBstdTmxkxP81K195Fxy5fh8qWyvozgFk9UstrXWCm",
  "key6": "36LkJYb2AuXCWuJ3XGSpyJ8bwxc4nXyFmtiEaMZJkhqsC1jUWZW4LwKHdDb23kmGtpHcecxGQyNJvqzzBPgeHqTh",
  "key7": "M1fuyVHn8SRkGPEXxcQ1iXykRCnZvQ7RMSeQkmCASi4J6Zgc9eBPPPC4RFdGXZc5xHCQyfJszLjdyssvZBhydS4",
  "key8": "X1PVKTiSFLvSJvNnDRnnLad8navbfuEczA8S5Rj6X36cEERNyDgDb86CCc7ErwfpatpZ4upGrFFPXuKoRzNTY6U",
  "key9": "4CVkM9Nzr9Ww93NGM1wmncH7F7gzx9QfqBaxeFm9pMsTgFRxa1tS5RZohcsuSs9eTykRcytzRgtk6PiBr7zSY1yz",
  "key10": "3XhtwuhVnE2w5UAMxbVtzvVD63D7zda84nfnfUHuA6huNDAZiSj1Yh7PjgEbSQ82UKrUuFksWscuFiTx131pMduC",
  "key11": "51USWpv5ZkZNUGs8RdyWLdxWQjDcAKXzK6un2tvAMXPZn2wbujViNvgGeVciBajytJhR12dipjHtqkJdS6Xqq3NJ",
  "key12": "kchaVPziRTbNssJJEo6rpSNQH8JSXjRy669zWWAhpsxcCmPeKcQFNaT4oSquejFjpXVEcqKWF6TQP3Lcbh3L7XG",
  "key13": "2ScKzubrrhEDZjS6TPe55xsHfMjqLtSF9W2pv5y9KQwagPGwaT8hjmhwQLfRNiNi3Ja2qkBBUhC97Byykh4pQXeN",
  "key14": "4Gc9BQBHoPhWAvsxD7qri3YidQtHvHNczYxG2UxbkEKewTcKzEWszBSVehv9FWPJZei7JevviCivm2AGtwh7Xzpm",
  "key15": "4i5YBdJP4WWKRGfAA3Z5K8wJbEaWcJBuf9rwwyCYh4waFqKDyF8jonPZHCTYPK34hf2sK1W3sqxR22zV7echVD42",
  "key16": "3m16sY5uabk6pkQFu7jK5jZeztypJPwJXX39WcTosPP1xYnW4qbHtMHbgmQLYVmBuW9CKkULXRExZeyKcSvuhDu8",
  "key17": "uH9ZZgXnzzt5845x3VwNetM9PxTpcTDQyjE8pecimVrv6dAkt2EVyDxH4UEdKauUPYVN8h7FHEcunz6ZU2J49Vp",
  "key18": "5w4oms4kibd96bGc83712EPUxKhRrmZbuwJ1Gd8599DRueFsoWYtDdzXhDnhBvLJiWgdwizxbojPULkwitKoYJ7v",
  "key19": "5GbLbukJ8oNjC51GQb9N31m9i2JXA8JHzNDQHo5UYsWApFV9PEwsz6PHg3zKRpqt2vpLhwrVNpnNcEnUBvmCcKZo",
  "key20": "3XuTD2kgr8XFwGHqmStSgbwHXm129faMpbdBXadwvChc7TY9juR96EBNLJ6cepUNCtLc1ZV9qbXaFCacpT8VNQ7W",
  "key21": "4wg6PpEXEYYeFfBEqSumXP7BN7LMWwVB3eUGDhxdmj8p25djDFH33owvAt4apTcQFX4pRwMuKX3HSuJpBPdemZ1V",
  "key22": "52jq4LPeVhSxaThPxPE45E6cpz7f6UZXXf5iYLpAK1nFC8nbtPsFDMcYQA9fenAvMnieFVR7AeiNpSKpup7jUipw",
  "key23": "2ddRWBBPLU7Anb8DvVEhWcuhw1FDhHp3xAC29C8CPSA4URCMbP9sPJnfzA64AksFQHNpWC7UYRHtKUp2wT28LCyQ",
  "key24": "LCmHQaSFYGvs1fdsTmYe6XQKMiSf7CHh6Adh2CrnY2jqPVjHQ1U3QSrCAWbL1HT9emWX2oxHFNtPd1UTdmom2y4",
  "key25": "5ck6iS7nE4oahzSPbBKHrD9FcMDF4pYANVmHt2WvkrJpJLMmywdab8wggCdNewDmp6trzPXw5jjZFuqCSy2mvKAD",
  "key26": "MHXA6ivEti58KgsuSC1VuYZ2FsfjVBKKDtDBdomV8xHUhFV8JoB9RXkagoBa8cw9EYbaZvtwLYiwVctMumwYTRX",
  "key27": "3MzS2WciuHxvu4GAzSogL2vfR17KB2Pv9ashXP8DLp2oaLmmhyfyCYdmcQT2o8uKog3ufytFL5KfCB7QLZoyAQFj",
  "key28": "4qFFVSP4yxP7hdzJn9bzc62BhtPun55t3Tmy8xsDiV1YhCHw3goWV8ieU7CpaX7vW2bFvatyTG9GyZBD5V6DuXn5"
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
