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
    "2QmpvY7idVbyQrPJka1q5KxHaPFU4xbRdgJgVxPnxFg5Qkemj5Ar4H2HBwqpdHANmLidoAqzcuWDs6Dzfvu8yQzE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "529mbcVAewttKdTQM67iCAfimvFMzJ5re5D4M9BhbRm4R7GZSXAjxWTeeZkT5gmeDqMU3pXEjD5pTZKzdvMVmfXX",
  "key1": "3FHSMMMSdaymL2hErnYyzT9YYwjwehhp2bFs78t1KwUjsn4dKLWpEHTCo4zb4uXwHZFoDrpSu6S46mCMNwNfSwvN",
  "key2": "3HqRgaZNmLHKtfHuaQ9NxaQH2RPUGHyKbbPUViihLZhxR41KEZMsydsfLX3UJjJR6NW8caANL574yMDJf6zX8FxP",
  "key3": "p3u5WKHAdrNVxGzryPzYJnUM9BZLFUJDLKuebGLnr6qo68LBRMousEAMJa4AAAUywDWH9eQ38iewpx9fVm8NxC8",
  "key4": "2aNZaaxZwbiLFy381BUpfPAF4gU5EJK1gv56Q6R5s8fU6UhxcrtniCUseFP1qVCATnThEdVoJzQ93KhfTCdHEfTc",
  "key5": "2xB9LL9jbaZzyXk4PxZaHFPCTq9ToDhMdiDYkv97uS6GDCZAkwsCd4Vx7KjJ68Y2kN3obFQpt42boDZKfZXC9W2G",
  "key6": "2tAPnBtnbsNxN8x2PVGZnmpa3zGJ1XoTUkDBAXDUx56RpqEnx17YSpTkx36RhohCxEgG35W1fMHonioZyuc2a34Y",
  "key7": "Xh6gpo68fevRQWFogT91tK1faLBr8k1U6mUAixfus42QrckiXDwcweWBLzABzNy5wnzp2EHpuzGUQ4AquLA1VpG",
  "key8": "2oWbBENXNDmsQepQJWN9Y1qpE6uHuGTaaFwpyNBKTrTqcRdVHdyF9r1uy5p3jM22YHT9oxtQRymvcTnYTkSgQ3eQ",
  "key9": "2SfJNVzQ31ZGbFqFhWML83XMKm7jYpvjABvAoQCfZkBRkH2KApUKaAQ8C8UeiM37iTRD2L1CqK3jkbqfHnJTHKQP",
  "key10": "85A4BNjsAXvJTBDkGmrDP241thsDptHkjfQ4GnnLWCwcNQGNzVsXorbabKX43okKSduRLU6m824iuysy7LhzKzb",
  "key11": "27WRfpyXBw7Bcf8dFRJ6ykH5VKApvCzCsYUa6oYkE93L5twBz6NX4ZFYYtUyD1Z5b2Z5eaSMyKnmwJdpigqcKBm6",
  "key12": "2PUrS9GacgqSbEyR5bbYxWexCmLCwGX3XNTzUZmxg1KLaVmFyvJvyWRhVmXgB9uZaVwxBomp5szi1Nw84zdPuf7T",
  "key13": "5fbTtWTLtNLwufHr1UHbubUHiL6M9Hbes5HV7Q7umVg8R7rDUxjNmWEJYreqtmHhcASUUdrV5a3Kggypbb5JDQVB",
  "key14": "2AoB8ehLspb6cKFd3nPFsEmHukqiay1N9Y1U7L5ppkYRMaUo9p3YKZMigKqtaKQsUZjpco7gPnCA4PRi9DVtp4p6",
  "key15": "4ijWVjSwR6ccvrMBos2EqGZgmFULpz5wQ2mK3FFyDD46XVcFB8FDkQ1ktc2YEFracU9NHs93dRv6YAoMJGARasiP",
  "key16": "2yTwFx43oMZzUxKMw6EmpY5z1ou5NQod1gBSX17SVcqfdzgbJ88EGdYXfteeMwg8eX2dtWCJmngJYnMttc9bJeHH",
  "key17": "4YsBtePUYZ7FBv6RKehDLYnhpYoaWxtdNAKmGqU3sL5LdRYwbWasgN5Kx3qcE3kfeWVoTSF47eAqSFQmRwhGe6BE",
  "key18": "3d9Ca86D7942hBN4Zssvsbkukav2z8UmjD9Y7QafxEk5JuHqZgqMiQ7hcbhnGyxcQYLfEyao7HZjyeFcoZrQbeai",
  "key19": "43Yg1BSqKtW4oyKyWbpdtvFYWpR2VDftsZY2TB95UK4Umi4HjoLm2tNygqWgx7DXF7Cf84nLrBLVvuxjUXQKvbwa",
  "key20": "3LgJ7jtV5R8sYBJtKTPpzF2bdaV9ipjfos8sh1ziNL5Ap8THuQjjv3NDpZK1J9FPhBabeU69As6xrxkQrLvPNobR",
  "key21": "31MPcCfNqoeyMgaVVSdec2Xk6fVuwczqBXZiiNnTvBzNSv8YyVpJ6Z35coapGiFKSiaZV6NvSu96hdSqmyvSUcDX",
  "key22": "5pzXK3bSPpuvYh68SYEzfYSe37x1sNMqkzYGePFuSShGm66Qi9fozmDC7sPrdvKAtMBk8QGAzfT2ixMoWKPxERB1",
  "key23": "4v1H4LghqqsSaFAfF2czrDoBE36Hvo25F2FTud2LRHYzwZruyATB4SGmqgNpcmK8qmgvQuNPNbANwF2KEiQs7LsQ",
  "key24": "3Z4iZ3abtN6i5AUSNtjmnTC2knyoFU6QqScFB9Ar2BPU7R1boDLrYVig5mUoUQZcPFcccaoV5TpbL9hRmdWmwzPF",
  "key25": "62qkebNkTzFbyHUTh15kBqnHSVtEciqrrHuZ8Z3vMa99nKM54UD64fYfBBLkSRcNQpR3UdB3vWbyNraM9uHpvrA3"
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
