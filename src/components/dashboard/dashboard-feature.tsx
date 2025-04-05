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
    "5rbkDMiDXyk5MDuVD1B37Bobox42r2CXjPFRNmvMd5BTd72vrVyRtX7XkuxS2djm7fm1TEETZ6Vm5H9T1CbyEtYi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yn2YJjomZUgXvzpxE6wqUk9yyY5Wvtu2x6wgW4J4676JFMbSLdkACT74ZRuH1nH7Df9MD2Y3fNo1qUMH6BYDYBn",
  "key1": "effHxJUZfbr1vSiSPGEb9gthhrnqfuuQAThqAKUzkBZxmBUHUezyJwxiAHk2sukjEkbTP1JKBhPKxjfUCJnx7EV",
  "key2": "aKEVg6ntfV8ProAYHxECEcEyNiMrA6fdUft8ww4gtTLy8eYueY3ejLH8uQ3yQvQmGSKKgjoAsWoaLFBerNmZXkB",
  "key3": "2Js5o5yWmizpG2xBv7eWPuhjtbR3tC86jEikL1qsh1Tgs1nTtFhpP7Yn5YL99NSCww22fBheRYUR2WMS4wND6Bdm",
  "key4": "2JEVCgusrNSD9YYq66EfQNFLEAgxhXtB4GtWoeJZnwrkaMbJ1g5KYKEPxJVyDzmXGgND9WF4dfFL4Vtuamr5fEwR",
  "key5": "2gxEhNS8QQDHTT4sP1QgNuT7RyKBRtNaoDydspST8igxV3zmkqDMPcgCuJHA847mdMytgGcNJW9E83bLnWqWF7my",
  "key6": "2RT3yf5EQkejcEHw8GSWqyHH16WLFTRJ1JAfnGeEPXfwBfEwhizGMZ8pfi2DAaBhSQYeKCwC8hRfq6inmusbL8tq",
  "key7": "4fp5LpvA33LaCzjwKngaXi8khoGRCkZ4z9qmSfqd7Dm6cqbcC8NXnFiERzvFTxphmCuw72FmxhgMDHmZhgDb8Ks6",
  "key8": "2P4JzC8ZZcYzjWj1v5oo6gsdyAK39gFJE96sfNetBTRgxwL2ED7VUSZFbPs73QEid4xAzU3VTy9ZaTqLzMJnZbJb",
  "key9": "5EvbEnkx1M7W565FajFzEDXnNS8CUfZUjmgkSUwHhQPru7oFynCef7zEvVnhbhPq2gw5JHaeDBJFYxMfcxkxpikL",
  "key10": "UDkRtqXQ7ThhL2vEp9mW7xFQjPzofDCVvfhNRKi7uc5YDtj2EXHwrkLTMQoZZQV8bHgedpR7v5budTavdQDGwW1",
  "key11": "3g2NcQzYg3VyVdtWqcrc1Av6qnJFPYBmwsA4u2K3Lt6ohpkqPWgBdmZbJqHeEpgmRiixCmdbkRcfD2HTFQpp36kc",
  "key12": "4SnNDfC4djNMnTLDqNoV6RsjHoUQBQVmB4gjqkCHMRsuF6gdmviLjkNqw956BwegEyShLMVSQr2CFzEqxx9HFjgV",
  "key13": "5ooUjeNeL8FEqMttdJbVFQvM1ndB89s6GxSjFxu1JibfKpdaJH2SqN8jbBCaGTh122q7on6VSVKsJc6cYCm6FYkF",
  "key14": "4jenaHL3JLmtMyfRZNW37LjXJHKg9ZGjjYBphD54afwyNwkWySaXKrA2B51DENsTTLM4jBTyrXxozpWnYbBDbNVx",
  "key15": "Aho2nQNs6EH9PyTDWMYP14LWy2nZDhsuCs5EmwWggygFHQGGHDYvMQzWvkaeaXn2fumyK4D9zvfhqMavGxFWmjk",
  "key16": "Guz29G2rZqEZk9Bi13ioTZWaYUv7eHEzK5FJUaZhxbPQbHnoFVZkcbnxVPAjergbteqm5Y2eerLPC85CpVt36k5",
  "key17": "269gukyDoai7Gbj6umwR57F8gdGRU9ySxmfKAP8DQct7CiGDfeY72cVNpqiMTX7hfYzT2g1SjmCGibWCwomPp5uu",
  "key18": "5HetKxev1igZJYWnbVgy9CyNhU7nd4kSM96hJL7dt58feH9eZdCra8kEvuthLVhr9kr6HdJcvyCsQNw1ohcxd5Nu",
  "key19": "37QK8MYxgRtEruk1huUHYEZmNxvEAhprCJTB99KQdFLKrQwAx7Tw3yioA46EEeXBX5eTXurccDmWYBSRuDQ91Rby",
  "key20": "4SP8KBaAYAMJtf1CVm8CK5XYcx3YBcw6eTjUeNTCrqB7vhWPvFmCVGJTN5JmPwF3eZRmP3XZVLrLLrZmGn7Lxtef",
  "key21": "2fZf3wY4cNizRbPuoGsWTZTCUAfXYWTbGje5efi2XUZpZ7TrSV4gJctvgvQdf4TY8CyL8fzSt3EtE1QLEEUwBree",
  "key22": "5JXLqnwejsZ1hK6UFcead3DCFMxf396fxNzUoU6swGyNjHDeWtAmEQLyUYC254i1mKSfVH4yztXZSjwhxww1RWfd",
  "key23": "3AgR7zXH65uGjMkiD3vYGUd38f5DGG99L6uDWbaBrEadqvAmcEusmfYf7xNsCAg2mig8aJcPtvnGTyiZMXjTWTH1",
  "key24": "5W4VFJwyxQdwmfcMjEovjioBwiBvBqdDzBkS8dYXauAFoZKpyEzGWnHLfkYyDUxPLJoiLT9ETi1VkBJ1aNEzW5Js",
  "key25": "3sd2TWqYiGAEACKSL3rjrwnqLL4ywAGLV39T1WYAvCCiofZ3tazGb3LApciTHqTDwKvpfbYEbhEF7YwbWcu5axs9",
  "key26": "RqFo5k1gqacaf7Lj4nvtKRWWrQqonayLorN9SNdHw4rTiCtetLyoHQ6ByHig6cP7vPfVqwyKgyD3CiqvVhfmao8",
  "key27": "3FkhJT5aRP5BXuhS2CRbp3aNFPmcpkXmWP8xwpWhDRKqRV38ZVZnYWqm1sDgdAesNjD2igZihgudxwJhrJ2JT5wi",
  "key28": "2MmgCFebCR9ita3PPwU2ZF2DkXhFhw8yTHnbPsKujhJq2WRmNmmSPGEarW79oW3cjsErJd9hkoN1CYvxszG6SjKe",
  "key29": "5LKVLTiJZMfry21K7Y3zDs1qCTYDv3L4jacqjaqKAhLprjZeBrJ7LabYXrHK5mbL9dmzon4sfkB3v1fMs6KdRyqg",
  "key30": "3pL7MskqxABV1qZw2Jqs8JGk7cu2M3G9kL1gNpWEECtTtZ1dRvt2x3W34qPDXeRN6b7kU8TsUJ4GULfHzoe53n84",
  "key31": "5pJ7aDZB8W3ZWDpZQSynMMNAdVFBCAU81S3A5nwFrKC8YSZNGZ8KtbJoAm4ivYqjdNYhQrFcXFdT9fcBeidVaAAX",
  "key32": "38LCXZZqgcmLHx2DYjTpw3nVXZGwZd5iSx665U9d5P2RzFgnW1SxVaSnjn9VGrK6vxVY52ANNFSCfSENsa8vv1zo",
  "key33": "3GDWzysG43v19FsxpM9bXo3TFhQb2Dg1zPCPUcs3oyahb24Q4Rkys8N7gz1XQ4wYeRB2schAtw39UmNi1A8y279o",
  "key34": "ERLFMb6ZEjksJLERptpZfdDKPYrqR8CSFN1NxzPbStkNvXXNC3XHWzG3CfBSFV21q5sjw874rKBu5t9Zqv7jztm"
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
