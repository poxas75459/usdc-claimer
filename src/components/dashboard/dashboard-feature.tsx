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
    "3dz1p1Y9kCV2iQWvZeVwB3TSoxMhJr8v1qNeS7GFLvx1ND723a1xZMoYcrmUhUTQZUQyrxB1GDWV79iCfwo6pXy9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ddTm2AhJDy24cnXQBVRYae13MXo4yz91dfXLecieeyJsgDSsKbyrHjHZ6MLDvjZeH8FQLcAVqMCUg8fMYx9JWKL",
  "key1": "3nHWSHBjr7jYegwMvGoXgzYz3v9DwdsJG6CP9raAbewwwwUasuPGXUoBT8mSEKLXyrRrC3WBBuZEus2HuqqCUv5Q",
  "key2": "orvwfM1GAqUivULdVKujGysofJ1vq3DT9jf9bwhDBt464qWuypF3jcmpDqmAGLqQdcw9zst7Hzdpzn5igzyZYTf",
  "key3": "2efPJtn7RsWF3Ji6W9xJcn8unixY7Dabm2NGtUtF9GrrY4ojGibcqHsaHzu3DrpWJqfrTxktVcEULxAxtSGjnYtN",
  "key4": "39N3N8n7vPPfqZgYtYT8CsHwbycTpH4W9MN56eTBrrYotJzawLMvGFL51ugWYMyUDuDknoy84GYdCmmJJh8eh8Wb",
  "key5": "3zvuYHErRGzja1M9y4swHA4PmvA3SpNEHnkTUFe2rxBurYvfaRGnqZaxNhE4xAKFvfW6Q3tjmUqh9P5N3Ana4vkq",
  "key6": "4MBMaFfxQqKv9r7rDz5ytaMVNjCKYh78JgTcxhNiipVuyuHJAZ4362aB3n6ZtAndpebPRauXsMQQgG8zW35TkyX7",
  "key7": "2bQ7ZUhCdzdhcmyYxyJBrh3fCTZjA1SGrYUqqm5XTXGuaCAFe6zZXdADwDcCZwBHJCDEWx3jNGfa6B386eh6ubTy",
  "key8": "4tX5eTbFccgGJvMHakZJB9cgmFanh1b9Xz4PJXgBtL91jnZLfF4TpqYYh9nUrecmgS5s1dKcGwdWbfdFEYKYbzQc",
  "key9": "4Y9ny28m6m82hR8zLKmnXitCjMC6pyEjkGrY1W6nxb4UaGkp7vpcYVGkwZSZUTk6kYXPsvr5NLnhqg1pJ11jvyG5",
  "key10": "5CU31rs4nsB7F9zZ3YQFMawzp5Q4QoVYEDghx2PXTzUHEcSRgJLr6dU48MchUKRHGqZk2Jm7UHE6QmQfMcdTSTtD",
  "key11": "2ZrQMrqkxDaMyeCnA27TGFPMffQeEy4URYqr65EXVaXjpiusUFRMaeCzStiAFBwkTkWFsZwFLFNxxzTjaYmnLGkc",
  "key12": "5KV4FjiDqpGsK1BvUpGBkUvn1yMTdjsDCB99GgDyQBL1x8UVeDZQydFUukpiiEWzSo6DjDvszkjbMTJWY6CJbY6N",
  "key13": "5hPjsgGSsC2hVXfg8CCTRhtA64WJe2VCZ9s2Dv3MuNLt4VZyTSdZU8A2xhguvwwFv623ei4RAeZvNbRuFoiynJna",
  "key14": "3qJUB5ifiEjEb4wXXaLPticvvZnZwhn1zH7a2vTiiXie9sB1FNM94PzJCE2SHWovRL6MvJNzmhNCU7yx3eqEdRiD",
  "key15": "2Y9XaRuECdmuLNXmW49MXvhGVK1Lyvibdfi5pNkLQ3gEW46HkwbeKRujV1R7xRfaHSa6skXoPStjcHcuiwTK8voc",
  "key16": "4x8UcMhfboxbapnXNREqQ2zLnY8MYxwNAGHN9kGMiLg2DLMZeoRDwED5XmjajzXVaAABdsFgQibVtDB46Kfb22qD",
  "key17": "2osftFjPbjehkECxcob5JgPd66kG7ADLMpExw4rJTiZGGWWtBJ7fFeqdwPTjZfAUEvgkBnnnwU7benyLCKbBbZV2",
  "key18": "2WYWChn2R66tLybrRQASVtpAGVJNHL2U8p7bjt8MDco5E2SHJF1ZRKuiqCMhugLuPczCmRw13HxAQegoEEd5Zvvg",
  "key19": "5dERL4cYu6tLSW66ugirhPkynNBL3YroJX5iXYkMHKWj8b85LbbsggboJ5tNxvSNpRV6f8Z5rdxSxfLxh9jhx6jd",
  "key20": "5y5drmcvEzHMs2Zr6YYTm6WTFDWa6CKTcCBTaPfixXs6NMRuES3gxA1Rm3ujqi4cEb2P6pgnpAtEDHgMNqCumAY2",
  "key21": "4jx7vwVtgqxJovbDJyfg9sqVetpeSiSLEaDkphjrqyXoN2inHykBAvCzku8cn6FYDbBMhfChLb3hbXEL8KZSD6t7",
  "key22": "2pAQDB6s88wLNjp1dFhkModWuGUA2bD7LoXzCsvZQcr7Hd49z6Em846gAwfyqQD9FeJYggXYcWp9LswXa1X144xj",
  "key23": "41BuoqjTKE2neucDK2261aYfp7Xe8K4442ryaFrnW6vVkozact7pn5qjQuvUGFJYRDinPPZqx2ok73u2U3NvoiKw",
  "key24": "3xE4mnxbMPg14Rp1axB7TYC6TE3UMa755hhFZGQGhhev5RaJn2hoJs9Pe5JoAEfk2SDKCTuDSaQaWJnaaqjFmFdn",
  "key25": "25iDz9uwhieVPFAGu3FgmBxLKX8gYcYkmQEkmDzNZSUMJPjCYiSjBehg38HcvBhGwG7PitN4Y8dJpNbxaVgkUHjE",
  "key26": "3fi1QzF9yhR4uRUpnCWemCVTb1uUzJbQX5eywauSngsXf76vVZWgb8uSDacknB1aBuuP6BYSqoX6vDbf91WpWyXJ",
  "key27": "sM5KWkmM8qU1paXYNWMguc2biCq8uPNyhCizNYsLNyMRmJzcrAUYMAdioKzBmYmdaFDymUbPSwLscydZaVJDMYx",
  "key28": "3YGfS26erQQtfMdkM2CwpoU6JEEU46R8rvSiLzBd1P95Kbtu7bXa4PZjx17sPBqAcBLGJRcq41ZnYGvwCPHVoDR5",
  "key29": "wGYjPQ4hojQbwfeaPiZe2MEkGzBDGHzKktArHnJg94BLeLZKhqbWH3e1F8qfGTg3B3AZNgYpPCHwxR4C2HxcKjp",
  "key30": "64TEmTKQ6E5nBtbQXzRyDWE4Ci7SC7UX45FHziUx5tbUR5UNbJnTHKSMgQDjKNc9zP4MstVuQPSK4UEKP57zuKdz",
  "key31": "3wuMY4xgVKLVJJNPK9RHSL6LvLa2eSP2ej8PesbCSmX1Rf84NkKekbzE3YdgBYfXcvS1cv65tUwksauHi7zKm34",
  "key32": "3CZPumPRw6WRHTfa18XDCQQUA1wZbNvpFShF375aWHqgf6LbXaYKxL64sptnfhrTnWqNwxhffBxE2ea3qLpHH1V5",
  "key33": "FCUDe5YEBhNMoGfKG8YRRF3ERhb8DRupLv3eSDJ9kvYHCNjbpFexr8RffAnuLzr4Zj5fNTVEw5XhzVrNJ7Q4gwp"
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
