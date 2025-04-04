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
    "4UxbgdbigS4jpvv1LQQGTu8X5o9ZX6wRuMXxjhaEQWzFsUYkunaK8ymYK5U5v2Bk7wKzuK9PpMdQVT8qPrTCi4FJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56rSAbfuDX5n8bJyxVKo8g4eGFZ4tGLTuxqgRG1NFCsmH3spEgUn6QtERCtaK5pD458rxziDTyP9wMd6kjp3E4rh",
  "key1": "2UDQpGjuxcPtxw7b1tm5gZdEdMJpZBhSubZ8M9waWXy8EBYHDge11a2PpPUmx8w6BpEvGPZLuh5GRCKyiNdbBZ1s",
  "key2": "2xKetRyHXRe7jgCuN3QWoVb9NfuUhv4ZddR9GTaPEsKfFwo7DJhhcSEGfcKNw827xNip1YE8EUnwounDG7VNR9fR",
  "key3": "4mDDUNrQjZoKhdB7ufEFtNvWEu52zMb6b2JBUPaNgsYR6fB8QTywf4kpMKrPAZt3eGX64BJM2EtDn5yPQmp2Zm4x",
  "key4": "5Ls3c7XuCAVrnkV31NWSmW5PPk3jjut5Zj7CFqdwgoZRPxAK26ncnBYzBFeHU8z3Xw3FqirvkS77qCfn2nABgCDd",
  "key5": "5VrcKBtC5EyB9PFjqgyd4cjfJdRcdcWDN4SLAEKSGsSgprQkSvt4zvUFB6FHAejt3ZrBhMFKwQPVRwFTCxemyuUV",
  "key6": "2sY67w3Rf39sqnhkGcpuPsVdL25ctwQEe5kdck46xSifkejhJRXuB4w8fr4yA4o3Y4yVsbU18rD49v3ViPAHmDjT",
  "key7": "4SVT6FmJCHVqFzzsFa854vutFWPkkfDMivujXj4ZybYuHNqjCUK7wKYNbdaTQorrtP14sKYeTwro36NvnRtQnkKf",
  "key8": "5Xn5AZfSYmiY4gVMwdt11kDDP4LTXNHCnBEqn2Q3tPACTbPmwW4ME9ceypKcwRTDBV6BmKrirH8kYUNEKVuadWiE",
  "key9": "5ku6H1vxR6BCPSsJQgR8eyd7pKULPe8dmWPBdsf5Cwunpj5RNvHLBmVu2ycVSkKKqejLRH2R9e3zjSU5R5xPtxvD",
  "key10": "5YuXzDoJquyPESMExUQLjDnqatXFXHiYqq91yquMwaSdWJNoWuG5cxq4H3f8tNcQDhkfGAm9oRAMR9v2AMTm8Wbn",
  "key11": "3hjdPmWgaGSi3SbhkCXfvXssa4FBZTajiVuA7Ki3rHotkeqy3Vp5kqZTEVjGBiYfdEfv1EujvcMeSnoPjXPYtZmJ",
  "key12": "3Xsfrz42ae3inTnqYqK6CB1SAbc1ehDwgxwm37FD5djDyLQWkBaedx2zeerJKMaepXVMj27oUmgZp1hcfbdKqDRi",
  "key13": "qLTQMFRKvnCeAUVHMhY6WDkri5Z2RLLjB8NLxgAbDnr2JpBnBMz8oJtZNvpu2tLvejPREBzvFuGFWUiKr892Zhp",
  "key14": "4zg6698tfY1gchWdBDkBnykiFdTBFwA5nQMsQWCyQj2BdR1WQQmmWM3mpQganUec3kRXSgjjdBuYn2HVBCi1y4SK",
  "key15": "64fCY2V2c7rYEs6YgJnpFYvMpitsYU15BTXWTaHRX4SSHCq1ihwZTyxteKrzXVnMYzWSLCKeBXeYDmLwk48mp2q9",
  "key16": "3E6YXxoHmrT5zJMiXm1pj6ESvjGCuAH5gGHFjNWY59MCkVrdZWMtqgNbsYGrFp7vcfT3sFo8P43EeEv9DKDLHgxd",
  "key17": "49HeZjL4KgAhXBzFfnpZ7Qtbyrt1ReVXuycBTYiM57KkRqYaMAV6nsnPVLLSBQN8xi8VWeXjAvDoNrBTHkmJgAug",
  "key18": "2iWLie1bB9ysc1Wr8XUeCWi4Dd7fPcSYW2roekAm7VoaywofehRCzkw6z4WymHp6F7C8piF4VFiqh9XEG4M4gme1",
  "key19": "3pMKAQykiifCG33sxRkGQyYEwJwPtDE2Dm5svqNpLiUBXorMpXp4Ygbqq9kHCtrNvzuu3e5GDYD2kxssDtuVVUhQ",
  "key20": "5AMHMiNEtxJTxTnVfTMLLnuCRTV429jaeJJTUasYipiLzb1UodiH84EF7ZUCjhpzNpooxTRfYnirmUwegt2qmEXP",
  "key21": "5hvowp4UXxWYVshhT1gAzTnRzeVK16hbQXnsiHhEDv9JfqZuB25iCQnrzQ4fFTmwuaCDoVdUMk491neVEzcN5bML",
  "key22": "2cpPDwDCvf2pcLiRPZEsd3NwR52rP2VwGYsz8QJ9KZ6gsCJxSZJ3eXARykhVrhWwrNmDesJ4pUeQKGqh4VMgvk7d",
  "key23": "53ErTXbV42nUrAbnhXZRpm21HQCLCfRQTbADFybdqZuoLYfCGwzPYwBwtrVmntRZuzKyq14Zo46nYW6jb3oNkuFA",
  "key24": "3CrUbG2gZzeR67NSe2haFLz5WPXvDSTUZiwP9QSW11335JUW3FbXkF6dYxg1XseVrJJGczio4RVwnSHfxpPNmLfS",
  "key25": "4WNna9XGCYxAzDQTtsLRfxsSHYpkKZLkWz93c3kTpfc3nhib3bgMURUu1DeBcyrDvXrkyGsyGx9NEpvWHZehL3YN"
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
