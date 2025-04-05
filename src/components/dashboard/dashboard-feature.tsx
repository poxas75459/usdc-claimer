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
    "MsHaYtMEJRG6ki17ztYZxATVKUYmEB6b3AD1TYjyPQCa8oigs6BNe2uGaKpAtdNGgrBMGoMfXgDW555JgmBDjNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQRWsSwYsuxuUBvkCdov2GFH4C2dHcYvqX4f7bLFho7chsadfqd3PcxR8jiTqF1AXRTBsPjq9hDhBsRrpniZ1Pb",
  "key1": "3Ugs8ACmyGmevw5hKJuVfWUsk8RH6qGSu6dvzL7bfwFABVkPzR5DtJea476fBundU5wHrsz7UkM772uBVFzBWdwN",
  "key2": "5ANupVmx4wmBsXVr6T7EaWj6tJgW5XGACnTVzZQCjDPoZaz2g7NAQ4UdXXeNSQuobr7trRFKcbSZ2q3ExRxn9gNS",
  "key3": "kiTAaTgnn7kFLELNuDGkPBJ3597H5EenTb6YdduETUt9RJ2drZZEXptQ4Lc6tiLs1nfymLZc1hpe1M2nhtsqkod",
  "key4": "2BR3Qh1kKLRxi8AfWvPViZKj5Mx96mAxmr3XchDBmmC8evesfwUUkezKQwLeqoDc8xDxaJLGcHYNpvaCaQzFQNmd",
  "key5": "3yKgxJV2rtemBFk9dB16ebxVgUcmB1FPNz9Hra1Ea5gDnFPifrT9LbG5NA7qWQzXQb14CrJ7FMLDdp5Av8K8X4a7",
  "key6": "4snxCNzocFy91gGvehmetX9C9Xqav6zwq77ud6DWZ9gZXY3QtZtNs9ZAxMBE6fCg5rw3gexE62eEZmotZDrJn2Wc",
  "key7": "32X8LUCH9T5GUFD4gPGMLzzcdDdKb5a1G9hLHJFScD88EZJmfW1e9WRexeXRuhPKXMZgsTy62b3rrd3HLypmYTSf",
  "key8": "2hARsCZ75SSPJNWmoGc84S1QtHhhUZ3n8yPJA1zWoeHKx4JMCmHMH5Uc99ssLpUhE3jZP5Gq7JNw1cB6qhVBm9YJ",
  "key9": "4jSYC2nJnZszWe4kBARiQeUDYGgkFoQDi6CiJHcbq9uuf8HgoJcgCaS4Bb9B54qVh17iE7sXHQ7n9bFmWabmUi1J",
  "key10": "4iEPsy5DSnXWCHUCdVjcGbend8CfDn59dTiN55ek1V4nwXxhGrxBcFkiwioe9xhmzquHebCVM3PwoMU1kT1gpmXi",
  "key11": "5ZEZwrSfuT71dogMmFpj5oq2Nv3e9Bc1XUWb5BEyHCdZ6kCgAkwLETWH8segiwszdS7XZWK3R91zddCF1kb3uaPk",
  "key12": "p6MXuJrp92915kxhZ4UPWKtgmNaZCobeK7G4WNg4WsDxGqx4PoiX5ffHH9GtoPKmVycng5RxeQLGors79q12w6n",
  "key13": "3Dp3aPLyjZN4voGrAKgAJDXKRBEGaDy7QdiWEYqgUpTsrLAqFJ52PzAAqt7SFUVGgrQMxSF8fcAPqSD3eKESdEhT",
  "key14": "5KDTmpzPUDw7bF3K2QMfxAMRqLLerHYRq9ZBfQkAHLqa5Ywg8B9gNnnej7VmXQRNBewWpEP9L3XWemk5uqZP9naT",
  "key15": "4ibDgEiWKU34fKZ69Gu9s7Q5ZLfS2tfPUKxgTP7Fsu6SUFWVCxojkbh9FB56zYCv5w4B9752K3xr1DLedzycaN2b",
  "key16": "61rdgpiQokZBfaoBXDjNxgjPRVcw8CqLjPcaXGPDeRCUTCmQZgAWcMi3GHpiJtBoa8voo722LRPYb5JfpfaFTw6J",
  "key17": "3AFGSpNHUnba76fj5oYDuiAJ39fC2kNFzVSwo8Rov83AiUNYdEAb5D4qjQLKvbF9iTqJdtKqDxdVrVAUEJSpSVor",
  "key18": "4boFPjSm2qJT5x1xydAuJSvd8EYRh9GrCQNy2vW59nMCtB9GyqSwonw6VfZqoViyMVenQkgKnppa2HHQiAmdXQCJ",
  "key19": "4LWU6iyxM1s7mVbCpdqNd2B1RVK7kc9hoPX5oq3RrubVnyDBMqdG1HYe8pCtSeV7ke8LmZN6s6CBse8nKxbB3b9L",
  "key20": "5givhaVuZpbURQQeg5h5ytje3JcmCidtJsugsdEuAhiyGgvsh2DMxNGXYHMw11LmqRGQ1TvNHZ9TTPSqcd7CyaFj",
  "key21": "2JsEjaqgjYzMVqpbymRk6svaAkf3GFdjzt1FfM7C6cPBGzvinzJqL9AkHY2FuFDx4qtVwCQgsVG9JEaiWf5XVr9D",
  "key22": "2iBSbDQKxMym1VWLi4kdsdTa7QYZnEjqHvNt3scbCUrorCNGmMfaoQuvdepmgsevW8F8mEAGYMtpnfkszW7c2ubE",
  "key23": "52yanxD6nuHGkSTAbakogd8NNivmU3yEwPrc9VuciSy7SUa34kz4yg2YGV8mMkkyhJZUFBeuYZZyUqkyfFwoSSEU",
  "key24": "4abSBpKitJxtW9XwSqnpYktFtuRFQpjF5JrdBDeUcSrBm25hUEvYKkSZFPXDUZUFdn2i6dEMAb63xU4gfPngMqYb",
  "key25": "34PXaXrC7Mr8bmMisw3JQLmtA92a3uo3R18cZJQzWeVLSDqQNK8KVXC9hW7RV8TBrHLPZoyzn6bZZwFRUMTkUSqq",
  "key26": "3qAYnW545TY5Tzj9WNprcPk2cA2wjVYPpQkvS2SMSS4ouukhP1rmvTBc1RZnPqpjXBxtQgFHJTbwtuvNoudNKBz",
  "key27": "3KVsoU8bUXVks9p4GtuNAPXbGMs3EHXSQgq7HB6imqajkEwSnoJBd5Yorn4ciG6rCy4efpjaWANQfVyKPbE3YLog",
  "key28": "5ZrqyjJtcbAU3xpHSD57sCbwWLTc68SfnCfNqZ6w7fAsGHckn4tAyhBhpktdYiCMCRbccmZxBhPuw7qVBJskBxuw",
  "key29": "46oA6hULa4XjfLHWjNsuYsEc3vZT1DPmuhuYELXed7iKiFAaeGoK1QzxPE78vAtknowKxLPPtxEyNTWhgBLEoMpM",
  "key30": "61UXi2YyWYj7fTBFs659E4YeQuZptYcC6suJcvPtkZhJbfq4iPhH8vSpa98uoq3HvDxpGKmEyPVtfh79NmfENYf",
  "key31": "5bnM9mdNoifkDEtAcxidVoKdic8J32KSuXjNRUqjGLqVfWBL4hY7nNCMo6T7CHfG7itt8AmEbrcTN9vvnr3wfR1z",
  "key32": "4Jy8jpTW9SbrLVwQv1QMu4e3Fy8CA93BSToX2fU78k8NoVXHdEhh8uJ1QsSoNX7TNYwKkWUcg95idQ2TiPEkLSFb",
  "key33": "5qwDfyyu5hByt7pnp4b8X1f321JWBDQ3Ss74Yo9y2YbZLDfqmV11Rjng59yt8BArZEZgTmqfttt5SXn5fRTBS4s8",
  "key34": "xkUn6fVQrAMwrftQRxBJ8cpvoM735WoZHfYmXxLUDzAvKNzU9NUg7T89c29Rn9o31WWnCirBxdjePeNtHJ4XF9d",
  "key35": "5kpByoFTU8WvGu8Di6f2VJu8n6zxiSvZ4hg38A8Zd5TaGtfgnPubnkkGwv5MhrCsXaWAppyjW1VeuBPbNv1QJxp",
  "key36": "5qqS7hCqy552jT74MSv1TqRdqF24xeu4nvGG5LyQ1EGFbSThVBRQWzqZ8sz48EFH6P9yfzsvDo69WR9a5K81tG9i"
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
