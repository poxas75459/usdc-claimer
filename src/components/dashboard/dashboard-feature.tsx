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
    "5DnZg3kMUf4SoMoAYDzVjfyXCAUC9Vi9nZtr6LZ2bscNsPBsgLU5pu1GEz2UcycJvMXLmoXanNRsdJxHi1TkRjgQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u2rECp8JXuYpHJ9J6DQC6ZQNW5LyLrPPBiUm7oSxHewqp65cjET2W2JSXDvRt2GqqtjYh9PWy1u71o26J9c3PdX",
  "key1": "4ajfdeQx73dG46rsoPTwAxxZ3FRrFecuThEdfQRVv6nuGsQMVwj2PwG3PRJY8xba5q5gvSgYi6Bkibmp3Ys7EjiW",
  "key2": "5uPie41vJJT9sPbza7mUJYsf3n29SNhJYzhd43W45nWuLAf8iFRnjhrnWxCz6BQWQzEnPt5quqcav2cRczVVutSg",
  "key3": "63yutiZdQZQkvvefEJhB3ALwVFTYdCjpyFdhnppAhF8QKqWMy21bsQ9WjA75F7eHoPwR5fwbxXgRHPtoaxhZnXn6",
  "key4": "cEVepSgr67Jmf4kj9Lfdb5mu4YMTm1zUiC4xYU2urrmuXP7GCpcWaGZDBYvB4ktzmW337mdgg869vtAhpiQzPs2",
  "key5": "4A4kSSkf5ftgZepNYzmPonSafQ9MxBtsQddpoB8wZ5hiPfEjMGic7gHUeP1GF63fTXGJ5aLFzmRSRUFWVRVMwMKK",
  "key6": "5iMXiuf5Uz15pHJ14sYct9bpP7VBLwsMbbnvy4vExCxNxxd61S574fuJh6raPUXatvvLyaVjQxEezrXZzCophq46",
  "key7": "38MoEChRqd2a4eJQFGFnMh8KFBQyatjZZDpiFknUtZAGJvH38F5qnCkFQGrHeEo7Nhp7pnaKkY2BXRfC1AJoHkbx",
  "key8": "2JSW19t3VFxG6uuYwYWggdezLaCumE7pkv4PFDD5fcqhD2KWp4S8UTCyTGA2tBo2AvaBvK9YwiW5RWcgU5MtBx5S",
  "key9": "4SVsUfGNFMuKseJfAhtosXas5hDhYZmaqab2wALA2HsS3caTknnna97D28qh763mwp2p6gMtKxCW6H4M1gbFZx6s",
  "key10": "49CjBsb4pjaeuE2HjN6yyvphyiS3hZZuHe476DRRd8w1Pz5fs6FyBdn48Bm2irYtq2K456R4g8VfuKSC88hE8ejQ",
  "key11": "52McA9RFo3p4hXaEcyoFfUeLW3Nz5CNm1pdWxB4EkvgYSRPJVxFdxU56UkUGHdhqLqQXMt46AD2ACjUUpVKh1AeS",
  "key12": "3atXGTm5Ly9ZjfVDEVH66pUyjrNRmoAtgEYtFGWc5zpdk2AvUZeBfdqbK11dewxasiK297tmQag68gxMzwLMX29D",
  "key13": "hC9rSoFnazA8ezswZHPrL7q1Jq3T4KVR1jAk1W5ZCHpVwaH4PqgDR8mokrnFJrqSnXRsQR3BPcLPzhieVo5PsdN",
  "key14": "2m2gxkBFf5GEAbr62P3MD21SEjnRJGGhineakWQyU7pikkPpVwrzksbrfAokbqh1Kq9pCcRMP7kF9KYCpK3NBrHy",
  "key15": "48qhMUU8oSN8AVbLsNGhhHdJTeuq11c4NDKJK49debfUPadCyZ5HUokkJiNMXnp118eAUEaKCWnDTTVGifkRLJNo",
  "key16": "WyFPqERBWGwuk5CnR1w8c92V47qVoeWqphR4Z3yHFT7dCf3GER3xMP895MYaSFf7cDfWqDNpNqNu5CztBDCFLaQ",
  "key17": "MmFdUiiMyetwajVRxbjAbVKmgaqqMRzj1Jbvk8Qa74jG1rkv1cuXg9xkiGGKeDHmC9gJojqDm4ZyGJuVp7xyA7h",
  "key18": "5pSVRQcuaitimKq8YvSfLwzeBdeYtJ5aUxe9H5G4Mnt2LQfs89Z531kKxmfQxtYFk1wcRo8vdKua34Q5G5YDEcun",
  "key19": "2SL38hHvjQHVcKYwHapTLiJBbJZZA3PTteZa23BesrgT8t2dGDfhqycAPadCNwR1LNCJUu4JT1QE3vVr89QJqnQt",
  "key20": "4Use3Ady8SfYYkNuughHZgrRDUNx9DnQcrSwXZDWwVxwEGS1Dqr33EMkABEEqnqG1gjBMUkygA9qiofzipbAWGdg",
  "key21": "u5XyjLtsUqG6iZKtzK6F4g4ZUKjHC1pVZW6mzXoJwA3WmPkouiaQQef1WdavtNHsrxULZ6PnEzD53SZR3tUVT3F",
  "key22": "3iC1WvjXunua4kS3DZtpoTAfKsomdJsu2jYJb1BQyAbJwdsdgvSXdKgfJYXfVv1Urkn6VN4kBGCyHAbpfSbdNM2i",
  "key23": "bGZuC2zxWy7Xa1cwquFgMUbKHTCmpwtX6aTKQ19EAfs7HsE5qavHb8GneHonCGKUT1dAnqmTNeqNVqQQkoTMMaZ",
  "key24": "rTQKDDhdwomefPsm5avmmdtWzovp4JMdqrH5Tqnb1Xk1gtNyE8sdFsF8uF1fLaF7ws7DhZiJ1CRxkyvmE54k9xN",
  "key25": "49qsGzSZrRdjJ2tQ84gfJvMYyjmFvsFpr2mWZnSQCUVTHywUFE6MeV7dsT5LzX5XyYhzSbDLqSGTVXdEoGCUYS8G",
  "key26": "3h829Akwm4sLGfVCRLqwENdfErKbQEwcsmvhMGuJgwcpbjz74B1tRAjzC8pAamL6H1PRAd3JdUtojaBivvjzbeEK"
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
