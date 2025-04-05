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
    "5JuGfgQnVXAqK7rmwvNWRh4b4rRSz16u3Ba9aiAch8uUHQAMUo7XgJ6Fga9PbC5PG8Hhb77yAEpfxcQG5S5VGzQT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwxSrJKx6P5sr1Zvhb7f2YdExvc78YGr4LMYtxw2T3h68bp169PB7Dw1uuh6zY4PWQ5vsSZVzUxXYGDQGnR3UMm",
  "key1": "65HrBHoUcNX88LeSVe1EjHMG8XGSZXgPSRTQx4KBdXvJAs8rRzHRW5hStaMqG6k4jYd9VCa1D9GiNH6vRr61WqXQ",
  "key2": "hnp3J2S1A2DyAdouP1fUj7PYR5TgXD1DhJBGRs1faeEj8H4VKsVJLSKoKfi3dN3bkWVCfuhDwDmMCksKsE4tELJ",
  "key3": "3VDDmq3GmpJ7Lr9suDXZe7zrV5r7Fv6UJeBfDj2EjAq7JZCZnk26Sp1zYBpmhnUFrGyp6mB6pooR3wXQzQapaQo5",
  "key4": "3p69KYCwKyNgFRRcsj4Pm2wPDu6phGcy7wo4qtv7vSm6fE2YEbwd6ZXg8Tdas5AGjZnNzEdXLR3okgRHJvn2LGAL",
  "key5": "5wJVrxs5L84xpWm3FCf6QwsLkJKNQiWaNY9wmXFT4BKH16g3XsCsm2d2yhh1ULTKseYhVmifKSbSMdBamFWhuXfk",
  "key6": "4WHiuVhYNX8W2LUCpibD4zYwfGytFn6a3gXdUXWpMqiJ317hN6fNrMzSzQEnitML4NwUEdFzjpVfpg83HFVY6UT8",
  "key7": "5qyLEqSnRwq867nfE5sc1JmgEeQ38RDXFPgQdTJ18URGmwaPavM8PcVM9LSmieeKaSCQcQCLmCPQtBRS5UA28V1f",
  "key8": "2u1c1RbJZxcfrHwAfxb5kAZuMFdHgxkKCK99MHwLWWtho4TjpExR8LkNscPWSTtc1ned2GMPC33YbmztjFcC65Qo",
  "key9": "5CLuUjr6WLq2ATBtfXoxtjbx5CVdRcF48MBzU5EZ2qfCsDnN9TYpMmF1UgwVcpoxvg9zzLAQwRHBLmnfMCZquZ6k",
  "key10": "3PiZ3RwtFDCEWPQKHEyivjg73KZdMX3LhkqZEZg6m9qFcPnCWczVDb5QCUhrhvJWteEujfgwhMJKkmX7pMm8txAE",
  "key11": "3uq9VwESVeAqRANrrUoij23L2zPigPoTpkMb3wii5wyYPWtTi6thNC8bZfFbJUKSpvaLGkNuWw8qALmgDKHtJYjA",
  "key12": "4mmrJBKbxJAZxv6SVVdRdiKnD8FoFRaD3KKmTZrgBJNsmULJcqis9u3qZTRnAE2yEooa4yEgu7WmC9kBegsSRgNh",
  "key13": "3mEjwSRH48acD4qBAo2DzXyEqfbpUC9obakUsnZKQGNwn2TmSdjug9Jbweg4AZCRNVAmVFfLB5rXEqwnxJNpPVSS",
  "key14": "4x5qSogAi3KhAKJbtaBMCXSGbnLbSNjCJqFvp2UYvhvVBvGiVJFwTSkpZdfXyiDxvAvZH8fZHt4MdzEKufvW1a4a",
  "key15": "3KQ75y1d4TD2C31enhco2o3TgdGrifYP5ZQb8Psx6G5K3hpQtGCbWNzRYH3UFNtJdQK43g9ynqKduHjCpXCV1z5i",
  "key16": "3MBYhyqW3BrG9o48taT5zji2pgN1ajHbdcgWudGiVYxwJEhxGhZyyMM77X2yVxPSyTxqWiSWEZCVuD2SRnAe5Ujg",
  "key17": "uWoiXz4aHao5LKsXURrsG3SmZfhUpiKR2QzAP9BPFJLYRBZXD6zzafRiTf2zdaJPF2s3vC2s3Fx5BM1JGEHrMta",
  "key18": "21q2N7QVViST2TnMe7iXmwEdKiwvpwmft37ZpkGf8gTBeaph3PHw3PsjyW6qnGVF4Gm1TRuY3ZN5MrBGeG9yFjys",
  "key19": "nZzUk71fM9jCPbSkNF8qrXPY1gF5LtK9miTXWpXRG8vvNVP7irqqSEjnbnZL6YkTbgTNRmPkCyhnyieJ7yBJnB7",
  "key20": "5PpwzYUboKGTH8f6hsyXynChpC7Qi8os5LppUQSZNfL3EreQqtzGBCU1hrMUfvBFo67iZjaaiuetvvcw72Ci1EW7",
  "key21": "4SaptLPU3P9J6tD5Zs6qu4GhemWYejDR8noscjSyaBRFdiYPoQYwD6xTYjxxx1SCUUSgk4fxojveZ6ZfLXbwHYzv",
  "key22": "4mYYv6UDRTZ99PEs3N6DXsZUt9gXsMXWByff9sX2dZCEXaGFqXt72scnz2QgeeviR9Qn66rfCqKSPiD89tKCdgZo",
  "key23": "u765zYnPPvvwki5MEEboBqtoJ8XyWwfLiD9w18NWqXrE6bxXdD5wwTLDqMPYRhxzjoabjBcPUs1aViZ4PqJzZZ7",
  "key24": "2RLjRUtfxPqWT9GKfg3KJUoKq7KFVX1nCbGYyV9FjXQew6MS977wnMatSp9To87tQz4FoAxwBp141GVUkJ6TugCc",
  "key25": "n9RgTKGHbgxRQpwGH8CHxjyo3Wbsqc7Vvo8p3UARnjdwNevn4cEw4yn11ys9FnV5yFUZRSZ67j4s1DbZgzMDsEJ"
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
