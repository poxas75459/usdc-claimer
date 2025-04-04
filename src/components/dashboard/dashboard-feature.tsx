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
    "4xvfowhYcML8DMvy8mnARgiHhgxtwyVLk48kexJRx2tQrmg6QQbgBHnyhDBrdXN4A7WLs9hoD6N9nPqUDxc5jCvm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UF3gcjWqCUpeD4oYjA5bV1gs8ZRat8ELzdWmvSG49o75MnW82wELZGUNFmFTxdcqwjnRYBGhqNAF2TbLnKkCiEz",
  "key1": "5eMuVxXYuVasCKUnbsV2PQyaEgs1hcasMpX6zNxmbPA6y1ddApYsmCff6BskdCbCUJRqzAkMYx2N4suBEtqtkUXy",
  "key2": "2EpU3R82PdsrGP6ZnASut7YEjeN6hX2UofaLcHCEtTrpoprkBc67vytz7PMQTEZUQS3t8AM2LpuQbNYgETM2AvFc",
  "key3": "qbdTpw3hujBX4MAB9YPoi6f1Z93oUV8a546WFSMwHXc7JGYxe4d6amGNfW7sJgzX7XMmSyT1XbUgL8zYKV1DQ3Z",
  "key4": "58BPvP5ftgs9QnRHLub5mZDT5q7uUKTbzPrQiasVt9TFz1qc7nJDJqtKedfw1YqFChcHUjrFCuEheoCMx5dANNAf",
  "key5": "363p6f3GDbWjjbu1LwrdwaszkJ6kSooKBSNwauSGyNpVawixNfiJEKPjfuuUDSWpMnY7rKYsBBCRyPeVxn6SXR43",
  "key6": "2wK4Ug4t3aVUPniTx91sdvcETrJnDDzR73xzqoBh5BSTWJ1egGRfGWEhawBDmmSfNnQKMquadUnT6rZoVM4pzFf5",
  "key7": "2B8VHxBierrBGPuSbz5Ld89DEL4pSqcF1iyTg81nzsskYbUYY9SHsRiGKfKAY6RzZhkZGMUyQ5vkQi1eqZ7YwAyH",
  "key8": "3y9Upd6zcRqiqN9jzuL7bgDYVHNbES2CXNabx7jysbjdcpquYzpa5eBYxggy7uJghEycNySH6r2JfiFcFxfPhavB",
  "key9": "3Vgtymf9WE1NZtXjJFixCgdrBCUGksVG5U5tUwsum9BRLeSDxkL5JgVFZfMp6dP7tzRTBtjjn9pq87qjhzRHYgEV",
  "key10": "586WLLjozzTDvZxPkcyeDRV239egHqBoGz7EWh95tcHfLVwgiyhFmHueYtFCoZrdGrhsz6sNwiPq4rZc573aSSQQ",
  "key11": "2KaXa5TGo7An2mZs3CHXADApDTmkyxSenKGiMckaC67LL4webu8N7DMEMeN73JgzUWqWauDX2x8Vg56Nr4yUaGp4",
  "key12": "3WQ3L6xEjHikJhAFmp9k8G8cGSZWDGrkirKghfZLAkFVGuyfS2B1Ynug9awsEQLXfYyT9UzbevEsNNUgiWDgif6J",
  "key13": "64VUtartGWsuvQDMwYzrrr7qBWd8g6Yb4h8wvktgrpGXmEzCuUJ7pryeivjMwRZQ9xprpKZkSrqWeRRewnhtC7BD",
  "key14": "CzQw8PQGHdNufXf6ytfja956h6i3TxMwQyGuQKRaaHhbmz7jvRUPXYxxSRtqQSNZCeREjCr3xSgX5zyHpWgip7P",
  "key15": "5U4iZ3c3xv3byu5WB9VPetykGQo9Mx6haKxqG8hSydqKZBHxyM2UqDbZtqB2kFJpxfJgZszwKTsMmXcT8u5K6bsu",
  "key16": "5zTb7BvmgzAdc5wW6GztnHGVNAEyEETbgBaD4WDdngo8YrBjEkpTuXsoB5YLv3fDiYdBkNpL9Y4znGfx2izYNhEN",
  "key17": "46krBXMvdLeh2XUDAMdpU2dF3ng32fKi2BQ6rymSatpeZBB9w4EFgA8UjFj8nzBnCqqAck3GGbnHPWpcJAooCqT4",
  "key18": "2dGmmnmMT5xdtnZjVzcpWaL2npvCyJTR5hN8WbcPzVZW5tKqrqtZmqfaK2ANnqXfCvQDk95Mr8uGYC8KEdScRWDM",
  "key19": "3rCvxhMtDNyJCQHZa9DhYZLgLyieaQCMGvzJ6guACR4ocdVSw9eJWD6FMnSVwymJEeeTHmX6qRSAsrDBQotSFUdF",
  "key20": "3WvuYhauQQyQWPWHkjCZZWrRXgsws88mNrPm1xu5KzAs5PXMhBEKoNkk2wRrSutciVyu3fgxic1xHBADiMgyVPk2",
  "key21": "24w4YqjqqSKStMpirJRbrvCwUxiNMhAtpzQFV5L57KRSnobxtBbUC43hFhD9bdhpL4gdC8gkq95qmDxpMcC8VM9B",
  "key22": "2w4Amhdsr42uo548pDKwrtPYzhcaey9FEhuW7WtPeonY8wmJ21bzivWNHZ1qkc5xeTwiYP6tTqgVMCf3SipcAHTN",
  "key23": "4gmgwYUi7JspYiuZtzwSKAbz8Z1bZo9oCmmXCZeDDTtzZaZyEEJWHwjPNDePEmsC9TXU3Nx39mPBNMR6NdJUrodr",
  "key24": "3jYS3f9kSA8MdsfbaR6pgPPT26XRaDMQ9nhgzgLtyirXkzGrJxEyrgDqHgxPM2fV9zX6hADmLYnDsbNgrXGMzaVu",
  "key25": "2PSMv3mRhCqyJtvCwseSpih6DFScKHZkbMfhFqm2BVDHPq7vRaKDo1iA54XvM4EvmJtrA2aqznhiHhXctZeAPPtr",
  "key26": "4wNQw9CWgBZ2wsRmz4D55Q3AQcDzQeSboMKnKkEuUU2YkdnAdHfr1rBwY6wFubd7TtG6h2QB1X9BhhDXF4K9ndqz",
  "key27": "Ltr7YMG2ru5pXAVyR7EmGSqyDAXReoCEu4LD5RjTBy35bp1hRwBAcSL4xVFYTzGzvcFmZxuNC4VM8ZPoFueyHcN",
  "key28": "58WZnNXFfKiBcVzh7eTcDsZQS6g3RJ5KepGjfajit8orkHJd6ePKrHWtW7GxD9q7k3RksHzCEeYAsnobKtbAdiUn",
  "key29": "45mdUcHhzN3jr8Xq7VwCeJNSh2X9YJQyWFEkTtoG56BBJcJ9FsUUziu7TzBDQzGwrh5Pnsd3NdodyjQG4xCij52s"
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
