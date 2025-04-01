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
    "4xuWEejybENa7x6iRQsTjgyVgtTiwL7y5553HvPCoHDyHmuzGGraPxRCLkV9BUTRiiccKFrsDkZaDCLDWotGLUC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gvh4JSTrqJx9pVsVmqFe6CH8XTp3bf3SG56LPGU8pdtMqDuc8aiBXgBbSAr7x8GMxpjoXw4PCKYDB8fnV4j3cK6",
  "key1": "55nmAPmb4m3Q28vpxpcprV9nw5aCLo9kbaaTxcNoUfH5T24BhVqkzyvwe3M12HuXTqKsvfSDAU41FiBFvyfr9PKD",
  "key2": "2AKG1uBQsoU5QeTwz5riSn1q4qiW1WRt2xwuWh6voko7WAecbzfQM2KtLMyyvqt8zXC5DVD7dovumWfeduEKMFis",
  "key3": "3sB5QTHtLWVcT2dQtE9vkuFheDMjMpu9irFv9M7CtnAvZfTt856mG1b5DxDMRv61Pucui4RxKV7q9g27qMaB3eLW",
  "key4": "5bxaAPccBwKTwVTre41U2dSwGQGHtYTpqhg7BhHuox18GFzpFnNZhijs6vCTBL6dnbUY2TQP576p5bgcES718tdY",
  "key5": "58cBSkT1JzZ8GcXdaMfmcH3vaEQBxEoC1k2cS5pUthNw6pb9i56SHSizSDoQFUMGa2RXzeetQd6BbKkMJBvZiSoG",
  "key6": "3hzduU7CdQAy93b3iQ2Q4bwnVQ5nLtQC3aderaJEPqPKSWcdLz1E4TaZvqBQPg5Vqz3tTHAaZFJeQXcskFHHuuTg",
  "key7": "2fwV2ZftVFJwLeNv2GroXuSd8Ly9YWTSisHMyPYuMWPnFne2p6SvXhEb5zE9jTc1tcbnJ7eQES6qJwJVSrWyW6LV",
  "key8": "23Rv5mfNvVos4MQARnJh4VW7jxqCToW8ALXmXGCgXrLfh7iF6ZGhYCr8WTzbj3kK6Xbw4yN7KBUfsddPGVexehnc",
  "key9": "4jo3asc6d1vKYRuUz8VXZsVwD5RL8aEByEs4uoqfLSjVozfnicG9jc3cofk2DqgP7oTRBFbsSBBYJnf4VXKWWnZf",
  "key10": "3uKiR9DQLM7dEkYEwQp4RC5zCrbuLUkCtkqyxGXgVqpYxi368GkVhJqyRfc8Bq1VBPDVdi45YDd4sWUvndHXsy9e",
  "key11": "4KVTDfQYeQoMwTATW2f2JwmXBgEc16CV8VEsfSEwjknH8L1qUu2QoYUoaRTy5urQTS3DePJpYjGRhCGh8kww4BwJ",
  "key12": "2ixuyFsfTL3K68R3QiKEdgxcosSJL36aYRbSJYVHwrjGe6SqVD8BrTGznwhi3dAGW8GRz18XTu33SVNKkjVrDVaS",
  "key13": "fFoiFzGg5nR6PPwfwPKYLhnQjmj5zjzZJxMbvC95Pa6MBQtG1YUf6xen1PFWhWmsxzwX28fqX9bDAHBVQiBfXGh",
  "key14": "4hfhPhVtFMV1Tmiy8YaQYrMY7RqJFjJVQZP71CrkETyrh8hcjhLLq324awGzeStn8jnmZZ9a5NqwP16Ye1vsQDFW",
  "key15": "vkBX4hL8WnwVxaCcduWRwPe2VWdrM1up6FvHHWwAZjToApXjgMqQ3Rmd6MnvAvPekfHS5LZ1mWpVEmw5zQubaJ8",
  "key16": "WEBzZBPyo9r5Hv1CEM6bisnhsWdqWGV4eeNaJNyhGzNDRintninzcCt1z4YAKbENHEXjb4PgcfrUevuNey53T1q",
  "key17": "5ktdwifq2RBD2yGKwgx39F5AtPKZvMhwciSuHkGvBycMiCVcVs55c3ddAKVV67fGPBjpez9hcYA7hNc1bLdPsJjF",
  "key18": "2eemb4kGDiK7FXPukDqfd9dMoErLSY2C4vzdkqJBpKFyJ374r6kp6eArv9Qqd6CLbKRsrVmzo6dmhGWtHDxw7Ycf",
  "key19": "49Z7uvrPzoKh8VrA4U5AV1sUsAzR4hWEXPhyMjF1V27RJnGgTmMyjBbvwsj28ccbcDuymaUriqkZ2jU6RxE9Tjd9",
  "key20": "5HqLeRLoZRdJc4VaZZkcnyyqh2JosAKK73pGzBQPDcvYDin7j7iBsuCtoim5PwivQDpNYtg8QkwpEEkyE8smben6",
  "key21": "4RrehGphnxDHgajPz6E7mmZZqKdoWkJP2Nswa4gq81z8pKiGih1eC1qS5spei8kY5TyYGgdcJgrBEpJ5rLPexQFF",
  "key22": "zunQzbxpzhvYFjL4KdvzviDKbnPhXsxtrfmcf1gm4xXx1uufjALtN35h9yzRZgwXdEVh7MugCSZEuaKwHdpjMeh",
  "key23": "3Z92wHE1cEgPM7WwatacbZoa7hswtBeQg9X2J5V2FZzWB6u3RVdvrCVmc4cRxwXjncrk3yNYst3jpJCjzdZLKz6z",
  "key24": "XyM84SDmowsNznPF3tKBDedRJQdw1bfpTkkusRkgtjjfApkwdwthHBHMnSy1NEpezswSKiLueVyYcE7frhTFx9B",
  "key25": "4k4CC4huCVRJKeidXfPmiDWFcrLgThZZim9eqUeVcjg13XczsH5XhuuGabcdLfjNebkQFGW4J5dQ3ts1bHwyVqEz",
  "key26": "27JnKWKjuoagLmZaLQ4HbnS48SmKNidRMRxM8sdWEMTh5UxY2B7MrF23CmQaqv5RNkTgGLK3BkxWJb2Kxs7b3Rza",
  "key27": "ZgPQMVQ8uEQhDAZ8oCHonN5mDBSuGPjmc7aFWabA68dKaAsJTo9J3uuNcH7snSysX65HJgRErsc5t5SpGBu8MEZ",
  "key28": "3rUjEK28yVQKM5pSm5NPWQAcgJNrvX1c5LBibD4B8WbxUdwZkji4B2FospYpiFVNWeWRWeMZgq1ZLVovAZVvWD79",
  "key29": "31x1PsALragLeimtZsXYriRmXYQQ3AvTbJCL3sGxc7Eg7d3vWYSCwsHjZvHe94amfPj6HE89U7EVN7ULdAoQosdY"
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
