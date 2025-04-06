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
    "zN64GsRwGq3UYNm9im7jvTZM2EyBDMpD6gg9E8n5A696oKXNa7Hr5Je7yX1XzDkDytDqT4T9hUSrwYrhpTwRB2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BrRaHKZvaks91d5v9RK9ThFa6HLuP3GMvc7FkAN9rpVw92kP49dvbPZjw7F92iKj1dCp1EuVs1QnY6zaVGmPmyd",
  "key1": "4pKkqTkPzRUxyNN3G5uaKBgACURfkEVicQwZPzTcgcmEoyquTFJajcNoPxtwgAYe5NnCfhxjG1JbbrojH7JDBdnn",
  "key2": "wEJezsHBNRgk1teAdX9DbgY6fPUzXj3ZcCa95JKtBfs8z4Vn2c1ukTDFjDCyHFrjR5Q5sqnaYogB8CLNcBArRP1",
  "key3": "3fRWLt6JjLadsbgikNnP8qPDrjqxgTrTKzbBQXesRk7M55rZxoVmnzzSH1JPVrqQJMBNLV3HwyU7AHudf8WN2ewE",
  "key4": "2rRuqTm6AHGCoxJ2HmgyScRdBhvsrJ9P5rQPAF26F1Tp34Ltr76VZ4CWMPxSqSZo5RVn4oAVwH96jgzdbMUdhkgj",
  "key5": "mReRSrxWNreH7ECTh2Xd2QJrqZeRBjNiwq72My4Vkjvb6AKN5m8ZqkiD5v8cS4ZbCzRvpRodggM1TSzfJ93yZxZ",
  "key6": "xvKanNAkVY8qd2n3foyibxJxykxbGx6h52JjLLMGLk17StZVzgs5H5PxXeULqV5nv19Auz7EzgE5UrTic9tYDTS",
  "key7": "3KmWuHusp2FZLmWTDtF5U4ruJJ5f1PnsuDEpC19RHDmBN29RyDBWe9TVWZerp6angjj8ygpd4FEU3489pFae7Fpe",
  "key8": "41kyFSmdTBXhZCAbEmgPUPieaU2tR1ESXoUUpGzUMTd7Wjp2dVEhAh8XJ4MiMcwzv3TC5aApEVjoRygMwoZbAhm4",
  "key9": "3C24kj6Bpp38Shbn9zqSNxSiA6QhQ14fK2m7v8c2d3dHVdonrNqtdqhGeQGg32dTvo8y3xkaTTMvaZCYVHAmrvWr",
  "key10": "2L4bJXy4bDRWBS4dz8kXxVhLHLZiS91bwEDSHrm32kdGzhn3yM5zdm1Jm2cB5wjPWhFtH4fwxzKNJtoZfnsSQx18",
  "key11": "2o9PJmwEjFRnEsfCCaequ62GGnCjetZL1SHGmczvrRS8scN6vLVr4Z63ZnKn7m4ZFraFAfW9mnrvS7TraAzPhEic",
  "key12": "wLG2JdJWKvy4z2EwvoLDq2HBxmH68jj5pKYpTECQ2SpEbQ6W1UhbozcBdYh9LB8ffCufbk5eAQpJuiZKhH4CQ9A",
  "key13": "tyqfp7e21WUrKLRFtacT67kdXxfvBzAH6asMuvBSRXwYr8zBS18j4DNYuNF1RvizzR2QLZ2uGZRVQT5nWATxoPX",
  "key14": "5yZRK76vyHLPJjcd5Wm3yunsvJPweRP7M4wVGJg51JCsAjg67QzqCEPiv3rppEoxLkGnLgZK7QhUy8cKhzPYCsNJ",
  "key15": "5FzwbyjiZvw8tbULndsUCBcfRKA3KuwFdKF2D7UpbafG3Krncm8KHVYLPfFpgbgiFF8prinftpKNKRsLFF2kxBpM",
  "key16": "TiuMx2RX1bjAr1C2nskiLsj95vrJZFZJMJfS1EmUx3BCwCruoBf9S3XDmhht7auhbpACuRChVvQtp7Tw8oae4cH",
  "key17": "2o5VyJkAiMAwX2dD5y5TbKTy8ikpsKEo5jG75AmihjPetvKPLeVwCdi2VQ21t4rvGUZFdJwc4LLo38bHh4Ptpw1c",
  "key18": "5bUYmGhK35jDdXFNXDJC4t4jDUNi8yQHW4qKvhpjmwd4JakbfTRnhk1ejRooyKNwfgAiiMUyr4m1xAGoVRQW1jtS",
  "key19": "2j3cish7HKjDaVckcwEXwMqQPUvzzcZFdVnby724TbFSmL7AGRrbWu8a82KeGyfBccEWd7nn2t6Fqdk5HgydR5XJ",
  "key20": "47VgPU4S4rx2YA4VCk24d2UzT7T9BCWaYT37Y9Dq95fdU2cHMcFniZUR8Lv688kGhKtNpKGqGtq1JeBeYNk235dK",
  "key21": "5zhgp6dVBYzguMTeg3ztfWHuLYAqNspU6DQrwGK56dXPQ3h9f1VBGwFxSkvmcxiCKJDcKGjYhQFzNGWDwAaiWfJz",
  "key22": "4X5oaMpWvdSVZWWmhWUVjYfeBt4igN8Nb6ToSpn16CPoXFQd3PLE8oZo2fMWhE21aEw91e27U4ky3VToz1rcSYo7",
  "key23": "65t8pksvihJFbEBwfZhYhWZEdQJCMXvDSFeSSbJaMpvdj7xDqwZc1nTuHc8A3esRJVS5yGunUoLfhBRD5SMZzfBW",
  "key24": "3uNwAY59v4F4iEVa2HaE42Hn3gLjHokf7c55wdsTvxL8k8StJTxvtZKg9C44LbfnbcA1ZHNo3tESa3QjfLnjY54w",
  "key25": "7wmovcePztbVgNSddVGissKwiRHncs6SPKKEtqw5z19fyv6nVCdeMXncHrdJCscKhXuikgF1Exa9UyCyyECYovg",
  "key26": "5S61Q5QnbGUoCU8GvSADP9EDoHQxFSfkeQjxynqUJ36KxXmUq5wG7dtoC2dM8Xi5qFBHFkRRDju8ic1vK5miCyHn",
  "key27": "3acrAMSYNeAW2QU9pnCGGSnTsTGnyTfUYaZk4ezPvX3nAzRMbrSyUT8r72W5nhXgNF3TShGx7Rofz528kbYjBS9r",
  "key28": "5osd1UmhFvgQeooDVGzWMwYruRASXBcksrWfkrifLyaP1m1ThEcJydHoEQJW6zD6LieUvAx4sEmecGJ3czwP8345"
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
