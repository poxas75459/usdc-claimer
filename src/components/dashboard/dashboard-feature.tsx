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
    "35NbYihiXtkFASi5KgS6Ninmdeg6QyCj43cb33zPN5oPdFDuaaGtVgrakSW8HqW5n5DrvcTBPKYFuG8dsqDDDaJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uXAGxDqJ22AtgZdzDh7wWkBhc2MBMb5Xzm6wcSN1dQYiKVmUEUEd9qLcEEADLN84fAmKgVcncMY66E9vPDGPoqH",
  "key1": "5jXNi4KijArjZC4jggifkvFwruxohqrPxawEiupPYmokvqfyCsLQUo5LxqieQpA3ppU4TSwXXRkk8TAFn1et5ovP",
  "key2": "3ru5vwGYZvz86LmufXA4g12AWzAXBHeLCA81LwcL2DFcXJw1TABdTsNZc6h9XL5PT2UJ2DGu97xxSY82XxYbpXnY",
  "key3": "5F8heg5BQUCZ2w26sQejjkyB3138NYc3z5NnfcVLpNBHYvUEJYoxVH9LzpAaQf1t1gqdaa5i5Nt5LHbyNo4LM4Ab",
  "key4": "4AKuQfXKuxygqyzpXkhLKtkCvFWzS9qcW6qcnoU1eY2UF3LzvD6vCH2u1j9kHEE8hnLN6GdtDVWumZ5gPPy5E81z",
  "key5": "5AYYdvxfHGZN6NSjT4kFkvzdLJixd348pUFh9ojSAaK6zYQNTpPq2Jz18rbnS1B5aC567ZLK3FyeN6jginuCUr2C",
  "key6": "5WmvummBu36EQB6x3JjeAYM7vdH37Wo2e7z7oghqLjXgV2GW91EYPfZvXH7Hw9qBcn3fABfZWsGfjcG5PJQsh5zd",
  "key7": "3UNWcU4afFrbQxJXpZWNhC6u4kp6sWzHiteLCkcnXctWjMwsrjzxZEkRBaht2FNsXFT4nV9PiKWZUMhkEPLJfkqV",
  "key8": "2iZX82keG3T6p59S53EV7gYFrXJw3XZBJ2bFkhDKzzxTdLDSa7Cofd9JMUBLUh4TF7rZzC7H2VUaJi8u9PdDUp5q",
  "key9": "4cCLBSvtnkMwkayTpcmWd5PEfxP4EPWo2KNpH6p2YWpvv9NycNkHqpQtTBh1csg4aG6XyzkHXwCPJp4JCSaeG1aE",
  "key10": "58y7iiLesEwTVMQVbQhoyDuFJ4gk1RdWppCHbYSQqFAebnHChAJ8vrHyr624jhrYwBGaZmXfowUcSRXBZzSD6Fsy",
  "key11": "JnmnKS936x4i3jVabHiBjAvhbMt3FXRKVUqiwL9Ah9QGW5VRzYhWY1A51JRs9WsBnSxA9H2j5dYtrjN3u4sNLuK",
  "key12": "2k9bdKzVB7QZaDJ53JqgseGWeL7PAUYVpnZtFErcoDoFNGTLo52SpdxMExbDYBFUjJzxhm64EqutAXLPanFFdvfK",
  "key13": "4BPMhyitAURnm27GSP3SB6CrPGkYm4qYobGk7B1rn7mQocM7Q22juxSVWkEqTuLYKiJNjxYuHwpuVtMm44Lojbjm",
  "key14": "3EUfBYHskK2MgkNRDGu3BHmM2bvcJAKT92ur1sQ9xhVihSALntxKVEDkwCwgfxht4V9nHHmmKFHAaxSDyFYtTtsL",
  "key15": "3qydiGfzAGK52VnXsMbUymFUQJsmQsTDopmYViHeVipNioEbr3bUUP54kLKwGSAoeLXuQMNhHSVBTxupNz6qLkAq",
  "key16": "2ZMEw256Xb5RcYPGxBmX5FnEBiA276kVGnXXUCfyVW9kpFXtBwfnBB8fhSH4Cpmx65rF8DmMcSTvui7Y7zWb59qh",
  "key17": "4tJHJ3mRWzavaVE8oK9i6zk8rTByviPXyXnU4io7nx6z5ebQ4g56UjQBvwV9jW1CB5K9MyX8Ky2xYGo3VnWDjPPL",
  "key18": "3sbYP91A8PZfC9vMJxU1hgpfRqLzAYvDtKMXSZ81CVvMoBpiVdKLSBkKPPYLua57xc1wJFdSnTeGQeJyYbkdyVtk",
  "key19": "5zwPyvxzCNfhgdfifPfw4FTDrLKfPoJBAAxU1GzzjKDohcxZ3TvXZMVuvQU5n8yAPKyweoNqNXrCyhPNmnBpyTax",
  "key20": "Qa7shcWV9MpGUapeQ4qb36eW8tGE11rssJNXP2ALDAPXj3212k9JbPmZMSEdPUfTsxMoL4VsrNeRYSxLPQFpmob",
  "key21": "4NL19eZnnVZwEnXZaWBku4HTdDALMjPqWQoboNs4M5ia5Nt1qhTiboWUwxfjwVCuhiqFtmmQoK2jwJbjBCLE48BW",
  "key22": "3ddNEJ2cRWupPTn7XfWaLus2Kd5yivKUKp15BPP4jQY4eQtS8vizLvMyVmwwJBrcArpQzhxXL1Gxhgz7NL9qWgmt",
  "key23": "3DYHpo6Nbzp64aKAYkWAmqRjunkmJEG18ty7AkmbosutZrg18Vm8BHxyLZo6Nfd3dus9td7k8VtGwuivfeXbusV7",
  "key24": "2E8gjYN6vVs39sChFXBHDsCEKMWd1Dk5YBcQbXfZBbe2ZpqZ8UvFyBvqSofEp9apwjSHWa7xH8Hsmf8ze9chNLp5"
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
