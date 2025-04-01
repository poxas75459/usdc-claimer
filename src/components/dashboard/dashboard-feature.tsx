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
    "2tvqKy1DChGXu6pkWQgj8BQ1tTh7CV4tMYG9iTerHXx5Z1NwpPX1HSMDu85cxs859sQb29GVxU4DN6fwMVKF8y36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8V3d2jFHbhHygkYaeoMtkcFVD8vNE6ig1UbLBM2NtejxjuZ5h3Mq5UpRwc1otb4iXexz69nYcc8awrPMkBzH3A",
  "key1": "63orNjL5RuNM551VaDSyk436CzsaNtxesBAjM7vCgs3toXB4KSZZrTqX3AWo6auZPkPpVhTHAeUTo6o9ov5rZASD",
  "key2": "51ihw9gfHG7nVw5DVJo5CARyahgpqVYsdXySZ6cpPeqA58WcxvDYh1M9UU4ikTyvhnyKoVMMtrFa76S8nWM8Bsr1",
  "key3": "2RmxTNMJpKbm8tdzdXyMMej4KMwsqeuEgic93Jg1oHbPJQm5jBpZuqSoU3tKGyttR2GCwuGamiC2GrDe1ZVB3Wfb",
  "key4": "5bk9bWkNjcPW44uMnyjoSX3RGiYxqwGkC4nsBLX7N7NGzVNh3q1FJHV4tkFHZLuFAAddWJivRkTym4D2NZWA8Qm3",
  "key5": "3ePdQc4ARLSgV4dD7VodAHsMh8fXZvoeNgrHqWDrABhDGWP2rkTkN1Pf7d8E9c8AtZCeFbvYgqdaNr9aEvbXqtrw",
  "key6": "i3Xt5uvd3TKk3LXqQSQGZxB16x1VtnH6YocbUt6NMMnb3wWC1W4sXHfe566j11DS5QeLrnUYDsDLALgYkwS4Rus",
  "key7": "2pdHwoxB4YZRZWSLTcPZW14jtVsk2Ad3BFu8m7c7tz7sbZRY2Dwo9pa354YjXA6jRFEFXUebMMgQKBDJ8oX67DQg",
  "key8": "42guFEYLZKALpEV7EiLqfz2CPr3XF4MqnZrJpwbEZsgDxafpyEUNAER1gvZRm4AwsnrHf4KGdCqfxVzcWyUNQ4ra",
  "key9": "3azKxx8JasxoVGaKhAWsLhBXrLYfyD4ZYohWkCz3nYYDyRX2WakmTxSeAVZTMa8RKurbeozm42AMAyTVehSNjt4P",
  "key10": "2W38MPRwTNthpYBoKeKfTpZKzkUYEQQpyRpB9tJLDPjTSH8z2E8wWBp6at6tvrTuZvu9mi1TaHLD4QbcADTMggTM",
  "key11": "43Vn9xHSrThGPK8HPxG2qtNFSDdt3H5VrpmbNVmxxgR46ZRyW3QQSAYhKAxPEjKtCVYuGux2rdjUwTzGzGy4jyxP",
  "key12": "2ZX7agp2C63BTzGqRiemEAKbUAmy1u7vBDmcKnFHXe3mjB21eKucaTqUC9BUDbebp3mL7RdYZg919BVezcRs4XqC",
  "key13": "MYyMUiYyTUKFBF2a8ywaueHQVU5S8Y7sGAR6naJhcmGLYRtnddhx8qDjFy1fPQXkRD15LQ1PVVvTgtyaGu69YeQ",
  "key14": "kBQMiDKkodpfSGW362RK5iyeADmKaUPPH4uPxdJ16FeF2Lofn3z9RA3DKjHBNXaGjRTfY8SwcjizUxLHDGnsMg9",
  "key15": "4iBUU49PMSMi3YrFpAAds2h6TPtmRE4UfJodHdKcjK6JAy2CgwKVdyHo1eBMs6ffT1aGLTJuqVe1AvxXru7XPuii",
  "key16": "4RwaozoFLPRrWAJ4xM7vifr13FQoGHTprPZdQxsDprR3YBFMDBhV4bTDW66KmqnrGr5n29LBHeGpFXiNhbXF9r54",
  "key17": "2SoLbU1wdnpEuSrff2syNdqYLJuq4tcQJ9V8R1Q3dN1UQNtk14ChQVaD5djwvMgFxtx7jjxUc2RSB69fhVrmwGcr",
  "key18": "5vYHmeDPcAKRscJQf5scDd6ayuydUWreRT7oumoLgAMHgJwUhwBBXqGaeMyvxYCL3FS5krXr2SvCzPPKy6hHGhYv",
  "key19": "48WHuzfJ3GWAcbr2NJxw5xJqK7ywnPSAJEM42NksschDVYLj7HvRbmguu8gaKQHusz1XuxCQtvAcKWNj2rmRNmMT",
  "key20": "4JDjJjN4VMNRGM2m3xxpJXjJVjMbsfU4JBX7jPSkw1iLYG2RvVyoG8ruf7WCnTfitavdX7uxTbFCwN7nRSuifs1B",
  "key21": "2VpgmgxpuBB91MirQ6j6icKuSFNX1avV7ustn7sQZNxvBZp9MpD2SKiMwo16yGSMpRekUjGz7Y5Qq5B4kEzVh4r3",
  "key22": "5PRGUGPRPcLXGEBVYwEwD1p6tS5t7ZK7vbDHVAR8XUdrX8oP2Zx6wvvHCpwjW5uurSkqagzfN51gramEKvM9M1cV",
  "key23": "4REA9WYCdWtag49h6xFDFvx9Udh4js3VyW4ndM6nJ2ChDmUbmNEWbK19cAHnZrJN44xv3gku6NXDed6T1RX5Tw4c",
  "key24": "4GLf5awWS6DgB1188WmncFakhtiuVWw49NWQT86Jp4S12Vm16GzuMrVLMcNeYHJ6qD7oM1A7oc3BiPec7Wws24zo",
  "key25": "3X9ErscUZVKL1ovZDi4xE8sbz6oAXSpEEbmBiWLPjt11AspEryhaTYaj3ibRuPzSJ6QsaUx4CaKNTTq31m1SHzxR",
  "key26": "5AYvUaZmn9ntmW7ph1jK4rW3L6MkVx7uow4ARH6fn9kifk3JhFHwSuKMcNSvZ6GhLETX6fhXB9wkuEdnLtxLTKFg",
  "key27": "58hnQWkdHxSyTar33zCwmxMtqdSHM4NCMPWUUbjKEuUNSuaeoTT9pGrxmzDFjayTYkzKq7qGSaBqY81isQiAgEE5",
  "key28": "mBFb2yXs5bNsC9h6Wu7uTTdQHbJLYXwzSVjjhWAQeLWsSGa8KqfAZAgiyKF4ZC6DEHZB8DQ4uVCzc3NatHtCZw6",
  "key29": "3gKKxqpw9NySzv9cyLr7y5XLdkacxbLcYMx149mjaK5MpxnjTjDmt3RmBWj4YXiVoBBixG7txcZVYxw3EFPGieoJ",
  "key30": "2nPwF6bawT83sVvicTQXz5qvd2BKWNJDBJACem3LPLiZE8iFZsRQM2Rh1hndW2wBJ5m6fi8VRpfkXYYEbAyLi2KB",
  "key31": "5Uq3Jbdz97w6Y4HhZgANX61sf6cAdvw53oJVyEXT4eYgESWR763m3NHsMDk878469kpz6G1Pt4dv679P6Ldk2Vmc",
  "key32": "4pppneuCCfPEQDZNG3ScxkcaXQ5xWoLMwQXDrnJTUZUSAcNSN8PA3kChufddWHDFUWpfLUfSqUV15u8tdzrbphXp",
  "key33": "42Ky1VAiWyAXYnZC13k8Wn2MvKhTU8LterXRSGgoffrY3dXB59q32hBEo88EBW9mXz2rfyexBCkF7eXPETZBvv5K",
  "key34": "2EAqJDiApW9tB5UP9AnYt3G6fCLnxvycS8kF77PaWfx8xEV2MTQfrY4NK14YBEa9TWiiqfWTwhivYbVXZaUC1oet",
  "key35": "4YpvvvYwFg6S6ZY5mgGmoUk3ZHc2B4K6b1qbUsmeGHGKx3LKyX4RfML4neRDAVKRKtGeFM71ZF6629YCX1PfMFMG"
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
