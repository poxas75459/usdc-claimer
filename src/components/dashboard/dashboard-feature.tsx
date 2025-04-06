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
    "3pc7CGjf5MhQJSdgt9gzRmi4JLMJwycWb45sTAnaLvMaNrmjdRRF6j4Texcu5X9wYjBgXqZfgfaVTNgbi92Lw8Z8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dtnfBwzMXyfXiY1V2QZ3bBfRKWv3rUk2QqkPVxHsw7ZDF74kMY1SjdUKHjEF1RoKe26teYX72d1vG8YVm8GUrun",
  "key1": "4VkC4T6pdnUeRTodHtF8btYrJWyqyhgzkTZp6qEBzRPX5Qmx37VVtVS4mdWZXiL4CgYkqwrE3YVPPSRcCqvYyC6s",
  "key2": "3yJSMoen953r68KKtLnqq9gSdZaXVTou7BZGBxhfZrqPAkxXVbRjDCfuMsCPWk2SP5hgUbVmV9uiescystAxwWdM",
  "key3": "42HqqRmm8jbpHdxziLdpJf5sNbXCGp99fuBadi7MwaLB1KtE8j6gXjsELbmDERuwzQdBSk7As5f1cgERso6S7PQ4",
  "key4": "3ueVezhVGBx1J6o67TfHrQRUE5tJh1CB4bvt19H9hBRPAek2Z1JnrcCidUEj3jbp6wVNNzBjPLvxopK78vvSQbBj",
  "key5": "3ckrSmGa16BjaKgTeEsf2mUT9RmevL5u1DwAbSqjsTS4agGG8oJCyLm3NVXR9tEWRcoLmA3Ls52LjgRwDcQ4SaNV",
  "key6": "3B3etsu1CQxP95yCgwK8f8AirDajkUHv8ahV1sLRs8u81cmKrVaN4k18bnCgtF1W12skAQpobiMs53z878f7Nm3a",
  "key7": "37NNiTHGCkx72itCyCT94o3TcXW1tnBnt9uFzhGNJ9k3eHci1yBi3iDDrdzuj3oTMercPBXLk8mPXoHrifXfT4dN",
  "key8": "3B6QMJg5wru784USvme8p92exdgb5fkWEjN9xQ7c4zxR17rnno4og6xn28oRvwaUs4YXbAieMJ15pGJT2gLVtMmp",
  "key9": "LmopDeYoj7PaseV1dGm9CitHzB6KbfdMdaxZunmVc4F4LVtiRT4hVJzXmCqjdxVJxmqLYx5WmbMJ6XbAS7GEpMu",
  "key10": "4WQE75Z1UZrs4vQ8aDqH8RbxD4JQ5HhjUxxuwpSK8btcqmRXDddmhUuUN2H45kwtfk4pYZJBKSgwcn4gt9bqTPWv",
  "key11": "3NBfMgyUcpWCkE3kUYM99PNaPq9LTvRV41SAgqtQUD9NeMwqybuiDJvrn194K2gvQVLqJa6ahetXe6YB4cNPALBW",
  "key12": "36nJDPyMRPNiLp2yXmih5oaqZMcyHoftprk6gh7FFAx1oESKhrCtr5zK8QsBR2LZ58CMgnwfqCLtRjbzUU3RWdUV",
  "key13": "5F5PwcYswqvyWaf6PdDRMCbYHnVKu2oTgt24b3jLkhPYj9M2stVXhQ2HCXJQhn8U3kdJW96kQmBjvTZMZ5EFQ4r",
  "key14": "58d9xVB9u58Phtcx6R8ySw71Ny45ZBKThjXxvHYnDm79gxLHt76R2kX3KfkfkTUqdPQwGpCjn2pCgAHKLVRbsv7T",
  "key15": "5e5CkNK5QrtmBtQdt6dPyCcc2MWtihspX44d3HuSEwAPZ3cpcG5KHbWDbnbYPttxWw4DJus2D8BMGHvHumQFQ4uh",
  "key16": "5JWSFLXo9xPAcBuN1n9Ks3XnzepsDXF7zqQYe8LYbCVTP7kpF9VV6nrEcHfFLkbFoECVvyf2CgJ79U8htx7vFdev",
  "key17": "4UuBniQx8BcUZokGrKgKg9KNBhEeutJVxRGCbnAiNc5ZhxUcgp3i9JbetuEkCwXxEtoKAq3jrkftim91NJsL4cLQ",
  "key18": "4qShYyVzV3ho5G5bZCEiQ7LzovVZ7oJTJWyKNxqpgFCom4md2yWTcAU4pLb5yFSQRBiN5u5uxJi7fNSLpSuQg6q4",
  "key19": "4BGJxjtV3Hk4Vue6yP7UKpsEL2y4zyVpRaLybjvXarKDsPemu63YoVkUv1J3JHQDZEi9LYvgx3Yt4nX4XH3nhSTu",
  "key20": "5xfp7oQC8J8SZw1Y7g7HgJaebUytdG46fCu48KRvTXMy6pa947mAMFuL8BzJVq25EZoX2gHTFU5XUp9xy6WD8T18",
  "key21": "3J4mN2cKfGG7YAUdiuQyR1eZ3fyXHFDgJADuYayczXDJETXcJraTtHNhTGMwF5ZNJPmG1C1ceZoKahDbXFhEmwZ6",
  "key22": "65ef1TDcFbmoWstpHdwQU6B2oxTReNQA3dLBfy8mLe48CGLSz7wgdDevGaGoTx9YY2Cu5YaAYPnz3qGQwHD5Ckjg",
  "key23": "4U57YRRa3JTbW6WYidQbPNKzFWAotbLcW51qXKS2M9qwrHXsv7DDEiaUYZD2VZfmqmkXdqNWD8kLVwHRW8XeNV3Y",
  "key24": "5sKdvpwPbeTFdLrn2VNyNFV7VThUKqMKWFa6uDDXakD1RZcpTRKCN8cn83fznSk4YBHxjHvfpxpwEz3vDLREnSiT",
  "key25": "5VsNBRsZT1zBkJCWYY2MzQoDZR7sepyfpUHMNSP1Fq7tFAaHGpgYdM3Qiz2SeqR8yt88Etkf58QZQVLYCoVVpyfj",
  "key26": "3b1R2ux34nFG22AeenF2KcnMVNC1ePbLzY5N1kBVvdZNJoXyH1THzRyD1UcEpuCuecnA1NsiT3RmEX1C5N9xQbMU",
  "key27": "2myQJU87N7KT27XKa4C5vdVFXc1PMFYNKkFHRpufV8R2t6YuPB5m7sbMDAjeVuzF2Pnw3s951aVn62LtYpFN96f6",
  "key28": "2BqX2moHDK8i7L67YTLRs9Hh8Tk9758xb6GeXWRzWojLwt2ayDb9HUcLLftyWb5UCK3hyqQkHNSa97decFQPGVx4",
  "key29": "36A5DJn8W25kSzpYkMqDAqwRJ5GLSwfSV5FCYnPygSPyGov663f9kh93U9FRRiVRJ9kg6Jws4LRiKB7z85GLW6XF",
  "key30": "38TNBxXr7uhEFwwpYbxcv4sW6kpBiELJXKka7WsWAQx396MqQ71SzDxa7tnHj83dwCeSVZkNP6UnqEcB1wnU2YYk",
  "key31": "5sjMq45jBLFX92o7d1LV2jY9Mc36unMRtNnWR2z5wZgq3uJn5TvDggfV3pdMCbnX7GaPRRHk6SnTBcmZkLmu21Sr",
  "key32": "24mHNhXiY9y1yQDgAzLqb3RNEZudZWqiCqGDVvVsYNB97rYoYBQzVXbAFQpf3Z1H7WGsRBgPWqhYHxHWrLR34HoC",
  "key33": "4BFXMSgFY5V2i7R4DeX8BsUxzzYVLGHLkZtR6BZ7XnWDv4Dad2KuyWwxHetY2GJ7c4R4Gn32hGeRodR1VvX25cX2"
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
