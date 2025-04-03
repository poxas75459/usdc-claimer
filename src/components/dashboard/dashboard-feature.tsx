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
    "61e1Lfr99Gcgkwg2Yy92AymCkv6c5a4gFqkT399aPNjJyYXQHTnn6NGgkx7ootGtCbBGYP4GNjBfxr3tzY7rEZkp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iiUqFAHK4PxUJ7wKEU7aHzKoRzSLLLo22X37p4HnaabZYCr9E3AUX3BdTRKWL47wfJ2fCNG5rXzdwbaPwD875NG",
  "key1": "4rP9SjFgRp13Bxy4zNeaBXSKsgNCZaf3HMKLToUEtTSfs5ejCgia6ntPnABvdXzSsxu7o8LLzvdkRrM23458CV4e",
  "key2": "3GhriDizj1boM8Vz2LCYHU3T9uoJwSoVPJnc3L1NQaf3SRE4nJjhYsMUm2Gztco3bjKKNejXP5aZuNvZiG9zScP3",
  "key3": "52NLfnsaruLaqpRpdUECL6BrmVgQAcUFDG3zLtiUST3uZSe86sQ5U5vVsUdAkbKKy5i3ozhvgwYDS3VW9rCpjg3F",
  "key4": "3HCt3VzFe3BU9iqR63o3pbGPnQt21NX3xKCS6Nnwz2s4awQRQhrEBm8LHoUEbpkuodLm9ZVN8thfL7UzLHizTsgK",
  "key5": "35uMjfJ1REWHJLBFzN3oZYwsW44sYRucyJmD1SucuaSJzvQjcuT1pguFXff9NwrNPMHsscFqUHZeiLCFtGUw3i2C",
  "key6": "2wPWb1shLgt3UcRRw58MWQcY2hasf8FbMdvQowcBPbDmXMUVjX7T3BwoUHmAzKUQJ6SyKXFozcPevjgYk3XfG2ME",
  "key7": "66nCEcTDohDwbq9jxzZrPMzaUFUjPFFmA8o6HN6qDYBmJJo5affXSmLMcs4aUWTuHitPHqjTyaH8NB7igUinjR9Y",
  "key8": "2shRsT95eR5GzQfmhyg4VyzGE93hhFXa4UtDCe9ZH5gKQXpR1AqrSRa3ECRhgyF7N1V1i3kc7w7tv4mT2S6qLnpD",
  "key9": "tXqx7eAz5NQDtosn3YHhpz82qiezdbREYevo2Xj2kEQL6iBTdhuJmmDPn4LLJXaFKGeBoYhPvzLmzLreGoEmEPr",
  "key10": "4nQWHcGrJXbq5ZNPXSgro4VZ2WtHCYriZ192d9WuxPB3JX3HWvwuZ1FnKSayRPZLBUAtDq9Zvx9NQa3qANm1hPoA",
  "key11": "4WxKNP4UeCGknfEcNPtyy1LprNxfywhYMyvfYbaB8gGnjnspyT7Aoab5kGvSrcHBcSr8AKQL4RKAUGq6w1Kr7RLr",
  "key12": "4uMYLNZ5NTX4kgF2KY9NV9Zt1ngoi3CoEY3ncFv1xcgjnzMFyTBKxkWLfjijrXeLZKURjnbwYFynP2rYuPxndqwA",
  "key13": "43VDGzWjsBeu3Pp7mpYQU9dHsS6pdhs6wc5T2yj4jQpkNUKVvio15G4XJDn2hHDSHHgMby9whTF6X1fNNytSPFcP",
  "key14": "57R7xNEejnpE2skz3Pzi4f5xygQaKTXqLRfjFSLYJmoXxsq2dLh2SwEKp6Bg7ar7oHzwXPKbUev42SwYNpyep5rG",
  "key15": "3kqt9F8ToTwHWrxGqtFCP6dGwDFsZMzSmzJG3qX8mRMY3PaXRJufsn48xmBUq5iiySZ16rwQTwdGmXSEZ4npoDaj",
  "key16": "52oiEHBxHwBKAsGi4Enq1Un6PoULWAWWEoXEafcUxXcpRrZXDy5QqfbTDBR4FFvPbYXwAdWuTYFRSbeYZnR1Yeid",
  "key17": "4fcfYo4sZ5JYDA6p2EFxusdL2wSvZPeqCLbucG2pRmk1nPzQijKK24y23g12rwMHZ7LSFPFeZcpBBhEm8uSn3ETt",
  "key18": "2CYstsjWoHy6wKzD4Gy2DkDG6jMiV5AJM8PXRVfdDgJ3QmWWVynjr61S34L1R2STnyqdWsA1iWoLGE9mUrVU5g3A",
  "key19": "5tQRr68RGSsqQVHC6UQ13ahWQMKJrEyHGCpgYc1C57tDBy5JdZSPqX791XKBwWVhKqW11Xpkk5tDy11EYRQyNbXq",
  "key20": "928jK7K684L56PXR42yYoGhSNXus5ssnMBQkgdSnrFjKySo6VuCvJk7A1BWFHyeTWWyX3nQXriXfxuDDgMaB1Pk",
  "key21": "4cy52uUH3t5vvUuvyLiVPSv9cZ231nHEXFzwTVCcYavF1hXH76qdjeuE911p72aMMMay2FEN3zE9N5p1r6jEbPMJ",
  "key22": "33R2DEMMbsKWKzWoEcFd4othg1ViquFneJkMJezeCbgEP3dRucLMmGnFGA649mZy2JR8WtPsJgUNhcHdb5YJc9NK",
  "key23": "37cohdyoxqTwhCu4h2PwFS4sEXfJzDhP9hULuC3zTSmY7UaqGiXB4L9b6mXuzYZtZqrLVK4TXZS4ENowsUz7hSSp",
  "key24": "2UjAajR1kzA8Rv3DLawBmF9h2tNWwGqehJJUCs28vXmusrdpj7miYtZ8Cd1bMURPuGi3qqNcq7dP2MCgnqLPm61a",
  "key25": "3ZXBH8382tmd76LSpFPSxe9jcBR53kdnp6VYAqCoEgaRjNHLM8rv6fdWnQuTBJQUrhcN5mR7P1fSfq9WuH4rvy1s",
  "key26": "5GbTijZy844sdCXjfs6hFdLEQU9vSrWe5YdQrZDYwa42MLhqP5xQdtrjLDB5CW8LsQdSCNS6pVmcGC7QjNzAyiUn",
  "key27": "5vHTZ43ggFvJHZTF5MWV1gKqvdezK3KLZxWoVCoKXVdeRvvnQFbXGbe7XjZvYTjab726tttvZwmWJRTwFaxdaApb",
  "key28": "4xuSJPCLNxLmfqGCnPStgcAE9sV8QJSABqrEGt5kHAXQwDuvP4RnAQNCjPexQGVSz8q5ix4WsBxY51aRxXzCHKgD"
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
