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
    "51AcNP6a1eKfKJvoGCHuvRMwCbJ3JpbxqNLGAvYCnaFQGquKvoy4GNMVHLzMja5BBBuzaSYTX8h9SoUtqkVR45ht"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58j7WgrAYt8ABg6GpkpNd5UptNJRyNVpnFK2u9FvqpVzdUjwp1xz7VBZc28uqkvyrp4nT3VPUrcisWTRQN2gpEHE",
  "key1": "59zvaZWnjER8t3bNz9Ap8cvvYFXk4B6rUZN47USTC92T3GGcgQ4BkUTjJN8Swk87gHX24Nz298sUrdtZqYHnEMB9",
  "key2": "2BAgEg4HGau1CE4971J8Tk1oniVzDa29D4T8epGP6QxVJ12wM4XMSD896Ec9WSUW3KKVSm2CV4Wg4FhXs2yLJQip",
  "key3": "3MKagfC9kxorBBAZoY6jmPmc7WE8zQtrdKVrfU7KAf13hpQA8UpM3biAtVQU1decS8LyTqTYvAwBtZ7hSUZm4253",
  "key4": "PFJNqNwRuea8HuDPL8yGoALVMzVFAkmndjpbMJ37bAr93dTXYqZQa9iMWTtEy9gKeSXoVKokj6AcTrNgZnMpbBr",
  "key5": "3uMjn2BnRpirJfLDbPQEuPwnDVpB7stkYNmSf64kpcjNUUY8YFkLmBtwsKydodZJDdUUfQ4rGE6acQLEJc7QWXU2",
  "key6": "277CGvAoAkGUYKRy6epqjqqR9iVqrEyco4T85A8T3L8xn8jZBXGP2u5yMMNAzE4wH2gzrqJ96cj95qupzpJPaWv1",
  "key7": "2noHCBXCoX267CtSLTfvxNYNSwRRua4wvCB6xGTKD4fSety7JiTBkBoy71LUmJdZpp8ZMVH86ohqksto6piWQpfj",
  "key8": "5XTLfVG3KvJdesvNZMQPGr8pU6pVXsDbMzF77kwD1Tz58aVjyZYuAWW7HE1AohaZSNsu6GWmJimpSnfiShk2YNGr",
  "key9": "2LyA94oS8XxWpweTjs1zm6D7RyFcY4UywPWFfPesFTnwbBNLzrgem6CZ93nA4m3gm2r2tHTk15jZpBXkVVpi4RQP",
  "key10": "4Ct9CCx2deXWuvyS2TVCxxBMyqh2H84EP1LYW4i2nYB6uvhWvej9fr78PP9EtbYrjaudYpz1kFLougYX8pKQyhvt",
  "key11": "sr4gY2kTi7WSiUW5qg9Wi1sDFfx2G6Jg8Uk5ZwSJGektRgEDSLUfhskPTm31LdBKbN59axup65ZS31kGTose8mX",
  "key12": "2Fek1P8WaQrjComgYgyzfrDn4idbNWAWMEJo7ecgvmoq8g9BDTohHwDxVcLmP7qf6DHVcKMAT2A4F8HSrTvtE81L",
  "key13": "FYtHFTMmJ2hW4xmE9rRk9wKXjcL29fdc8YytRofa9nmLNhJgqx4fozYuV7kL2aAWwaGqUixpP8vVd7gBQnnwLKy",
  "key14": "3VMwKsHsfvUUmvAajLab9EQBoec6C1A2pAjSafMh4uvpBLgX6ipKRb7TYZDE275jmPpUUZvKBhv1coLHjbQiRTGx",
  "key15": "5KWfyJgztWxqohMbQetSmEnDnHLLBLQu3WHp9N1gJjgwrawYCgFD3AGe8HgYrwiViagRCVqEvrqM1GYv3zXJjf6F",
  "key16": "5NbW9y9hxiNZrQFGskNLNWCAuNTrZ85XmyvvN6zVUg2kvVw9XvnHFtBvUQwdjzgwyVSnhmv2seiFf5weM5qf8THY",
  "key17": "3fQf3psk61TuBLpL729ZPRrqfDpTntTc1xsNopxyiw3opkSH5gzBPqFBqhYcZXzBt3SBAKi8kYeRf1VmRLvBjTm1",
  "key18": "zS2fHWfAAktJF5ugTJZjoHnHqtSycUmAEvMkbsCwPCVHKHxoFTyZ8i6nY6LJKPwf57nXhX8Pb42tJbPnd4mpSjV",
  "key19": "mYVRLBrED5mTjkv377npq7Zdh2mevmEgcKKTnhLYJuB4EgKgUS5Rz2jmau9FvBrwXohGYqmaZVyEx68jmRccCpn",
  "key20": "4wgynB34MKRBjZPwDQwYCWFoyE4ENyhWGT4AjC1qkDhJCBZ35WKdbDqNyVXZnjhT729TdTu2nDennTihH59cZ4eX",
  "key21": "5w1sNeZJCzXd3amHNqk9Qva9d2Xehu4WMVTVPSExPRfASrECJa9jEGYQ5Zemy16M8XQeVLnQjJ1qwB4LsPoeCnxi",
  "key22": "2LoEu1dYRhuef9WaaskZmMhqb8my7jTbBepEySQtwnvqugMxNkh8MnJdydiFKkRQYJtn3ebo2cbtx55h9J6ioaYK",
  "key23": "2FhWsouERPzw85E9Vd5K6bzVi5CLNyBCKy4F9yhiZkqstvrhdgvCo84jDak3d5X7ApmcysXAULEEWrArTLwZSbTZ",
  "key24": "5pLcKnYKeZYrVdjWWJBo6w7ULEcBbkRqLGZQuZSMeDjfcC4mvL37992WGXfoFzXgsc5HcCeXVi21WuhZvehJHA5h",
  "key25": "3JKFLTaUscrFiFqNEdXR7t9hYiLX2iZtTaSPpQeDPxVsfMnGG7dHL8q4YhdMCFhWC8FuQMkVxKqUh7L9tuJmKx9M",
  "key26": "3UhUjZMVsptCmPJgtWCN2KQeho7Ep71Qr8MFtVgBFV3pLfNRMuJb9fHNCxA2X645RrkQVuV2Lkr9mqBvbJRCY85b",
  "key27": "64f17wPHUs6q459h9mrFKoRsA7FP5ymi1CD2oGNzSBsenfe1wxMA1DSY8w4sGMirgoyZgh2f1iLKsCjuHQbw5uay",
  "key28": "5jkmTgMmQA8hJth3nZvhfEQa9MnBFSULURMcwugQmugsdRV7bQKH3dNUEJ4BeXYAy4VNMtwP72yYXcR7Re1FDQAo",
  "key29": "kK7je8LUxZzpZhfF3KicgghyhNjzE8LqaJLTXnutMYRkS43Z4qDoCyeoEs316BGncopEsWMWY8HGHabxofMm7gF"
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
