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
    "XUXAJFnuwjKuWShxFGeXthqFnyhKgHxW4QBmkHuYRhKwwPvKr2QAVUHNKs2U3ADeTM4Rt6AErGorAXaMWJkxsWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VKxMwNfnBJ1yNigj8dGdYj2MocSpDz5G8m2MhNp2ifMGm3Tc3iTSJnEjJP6MiHj65VWcBrLTaxtyL1J4X6ZjjXg",
  "key1": "5SrKrYEkkLx8hEpZWctkuq395Bb6Fg7tuzrxtmf2efXtfYMKjiyXEpgLinnRZqCQBTniAR7hw9PsdNs2jC1j9Ljg",
  "key2": "26w6xc3Uzmk5woKjB669w4AswpjS4M1frUVrFGZvoaWSrSH8vLEMSmJZiRtqGLGabRNrWT4Kdkf28vchMk9R7av4",
  "key3": "MUZTrobGyJRsTHSgtmZh2WtwsqQ4h78x8YNf9tJVNNuMQ6iwQ4euWaXtuhGQB8ofDvcEvMUYtQQbWbH1gMUMvNk",
  "key4": "2y3n79FQnGpZwnhdR5BuDFrNHp4UjZ1dChDLMEB9Pv79K314TAc9eKjokKnHL5yD6eKdXdyFArz6u7nUntFBv9Hj",
  "key5": "2Qn7qZ6FbmW1kSPTjWbkj3LyXgr1Kptc2XDqXf3Zty1Jn3tDixkCBmvJJKFcck9nxraa1L8zJyUMCBYn5GoZLCuE",
  "key6": "4dDC6KR9UEoCMy7ymLPK3cUEwAmaLSuy393oppihFt1GkqtPVQAwJaCDRUdfWvKJka8F2Mrw3pmYCtHKvxPTyxRL",
  "key7": "2HMwBP2mx82iV2cphQUTJsWH2wdiMZyFtxU54CUDvzAxdr2zZJQeUJ9e4jgxCmtUuHf5gSSayHKsTgS5d17pnuAD",
  "key8": "1EBURbkcig2tzk3XtgzUUEKbpRYNYTGx3UgCaC9DWj5Pzikq3Yv6A6hYbqgqzkr5DF5iVB86nzVZCpAwa5ieeVB",
  "key9": "f7C8bg6YtENFQvLg5nJbtXi358nhC4VymFpPxWJzNeiGCv9JpXmC8tZc4cHD5StC7KXsCVHyeU2UvnULpUq8BPg",
  "key10": "4NL9zpiVuiStPJ4xxPS63eZoTkMaZBEmhGrkUphEdMikDYWawqSb3Ys42ofmd5sunv9t1h9SQ5CpcW2YZB9qaGED",
  "key11": "41E3G4yaodE7Y2F6iufSxYuYjJZ4ZDYoMQfVHPxapGKafTG3qRPZcW87Y59bHpFyzorkTg4rzXVko8cwkmKXnA2D",
  "key12": "4SQtiTvqvDqEPw2GcFamQGE4kovS9zeVHGTUa9sFHBffdEsrkjrV6wE6SvK97ZLWANQNyYXJVGB2hgG5YGHQnBEF",
  "key13": "RyD2u5HfrJyhfzyzHjscUrYHes8aGsoSbWsoPY6rBBszXscqpZ2zMu1WUU8KQ9hHmSRxxY9jNuDK8n6NJVMbrNe",
  "key14": "2rfzdUfcxFz3qFv4hoverKxcvgmkzKXF2vx14UYgok9aNHodUYqG1LJzub5NW6ByAUGuyNMbLsUq5tvg5MtzwG16",
  "key15": "E2qF6hikUgWSYhJZBsviKMogCwDm8Rm2XfDzjP7vtZFGjEz84s7sHvNMJ3VHk8xQzfTRmv2bcu7V2oS4FPsUFtf",
  "key16": "23AV2NYNCQWNK5vpZPUr3tFAMDUqN97pWYHcMjp9zHJs3tLe5d6rndLU5mHob1wPACgPp6r2JoP56jdkztPoxdC2",
  "key17": "3ZGH1dTjXmStNQgRmc1GHFpff1C5rweFBbEMXZv1ZZEqiMCdDYBNU7v9vhoVuGUjK3Huw8V9PLgoSDnBjGdYf3P7",
  "key18": "3E5VqsP7BhuU7ABEHZaRFKvxVkzgySoKigUuLdu4a6CzbRCkLjTUcCqU5CfzEhZBJu8zw73KsXAi5oV6m9w1YW4X",
  "key19": "5APMrUmyzKa9cV7HrPHHtyqWzFoQaSWphwWrKM7qJa5drJLoymTZJnsAAwLW2h6VG1jf47W3raB4C5Z8fGLH6i7W",
  "key20": "5gDeejxGTWegUwAyg1b7vgXuDmr7tN39b9oc1RGyHcgPUK8Juh9Hrnj5K7RqAcxMyCevk4YxuUfvEtTi6ZsRdHEp",
  "key21": "5Gute1eKArMvY2j3TTtNzFeS9AsSLzrzi5cpKCYCCC33oAdupEfQZ1NPURqhUZT5vp9J4ovPb4TvKpTYM4ZPCUyV",
  "key22": "LzNNzyjZ7VYDdgpFzT8gWHMUQ1KseSTBLbEsz1j8vYkyQBDjtK7V8Dax5PM6TJFTqNegBWeiFGSt7CRtiU5p38N",
  "key23": "yjcbcXCLNEdvLyoi1RiFqjvprgAUApcZcrHL9eFod3uGK1Wi81wZUvrVs3e5iCsfHJwLKxBA69SFU3hGDigvTy6",
  "key24": "3CJccuKghaP6zhrvMaWgwHfxnC9gyLrXtubAkbtebceL59d2PJANbg8rn2wfgGWsLh939En4McoJn3Y6cgBR1boy",
  "key25": "4CV5s55LnKuGcd6oeWusTZK5xwb2chpMDLqFLnp9nyCtA4RwzqhdSVh1ZSRShL6sEw1GKgM8euVrJ7RjZithWswd",
  "key26": "61kEpfB3fAKfQM2yAFkx3AVUS5GmC14VnvPLxqK51AwkojcYvWeCZ5xbNff5BUo2a3mz1fWDqyvQ6BtojwLsh1A",
  "key27": "2nuTtBja7ebDVvcr7tEcfEDXHVgbRC6VonWW9o5JcPCMhxxGwgTiPmB1rdJ7X6gAA1t3BahFcQthvqbn5S3kysPd",
  "key28": "3tsrA6Btb4eSz9QTP3MP9RhodBnqmMVhWzBWF13em2yN2MPPnaBXxSdaY7rihkzvXP5YajwiC6hF3DCCbtzZCDsQ",
  "key29": "tpzadTNXSJgaPRmDp3gQmFFBVzdvYj8ZMEAAFwUh7XwXmb6jgBVQDiB5fBnvgGRiyiZ8ZLr6nrtY9moeJr5V5Lb"
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
