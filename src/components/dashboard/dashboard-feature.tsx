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
    "522mbvGLAUsp3kPsevN2RgybgcDRnag95MDoUhFizbnSaEtFRrPzb6VfuqytsCjU751dUVfVT4tLhtUj72pgaWbM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YWwQq5Bgu9twi2sNq7ZFXUmRMMA557eucaknpE1SoVrCdJNWi1Tr9D1G524z3uBjiNY3N1L1LtwLWDaWFuv5k8V",
  "key1": "2u8GGbkRoea5KcWkWbW73eHwzDkazVdBHQywG5BYKahM34U3c37gkJXpeZrb3FXQakeXnf9BEFucyqqzDMW4fSHz",
  "key2": "4VpukTogj8VZqKvdcvXWbvS625747miChgUWZs5rGaxi9ZDtqE3xmYVFzwyQcLLs8shyn19vPMTYa2PLYpNNfWpK",
  "key3": "2KdHYht1YYcS8LcC3zhufU4L2bAqH5wV65qyVTEt3ud96RriaGgcTJEbU9rwUss5XwNYJ5Lc2hf9pSKwSSh1pAoq",
  "key4": "3o2f953QPuBtRpUxKSRGLivRj9JXwGJsgs4b66q4Qr5iCtbpDdZgETpims2jVkdYATzAEcQX94cB6cRar5pjHWnu",
  "key5": "4HNstYbPUSH21ZGMJHxVGudYbeBvBWMyqApiygvEncYxqzXgT7ZHX4bbVPg8bcbBUbH3baNEvrgXUEVSLb3a1jNF",
  "key6": "2ucwCyodLUWMY5PdVzTaaT4nbtMu9LHmL6Lhtf3yvcr2uaYNwVSdtARA2wAS4U4AbdwoTFsmAKqLuqvbAHTi59dN",
  "key7": "4mZ6UUsUwasdZf5WqPxdsGBYbz8GAVBCYMyqzV8DSm3QsxtwWJAKh6KQTyXiuwjFWeNXbwYsasyKbDyUNusNXYqJ",
  "key8": "2c1aeichbVktBWfA5reHC6DCx4eEtyQuHfFeYomCtjnzzsUCMjqGX5gJqq2kSvuvoKe5fAnEURjkiPx81aiN2zGD",
  "key9": "3opVfa4SEJyeYLsgPz7VhDWeDZ2xWtfkLS2QdcE1UMEiwFugMozBAKRrrku1oF2a6MSZjXyTMzVdtUYVENQF4iUh",
  "key10": "3Ah6FKYfRQYoE3iU3mBZp8pLXnp8hzpQrqJ5vjZsj4e1mU7qmwwuqHfoMmzuiUkd5WsnjmM8rq2NRcTGyfS2wtEi",
  "key11": "2GjcwmB1VK6iCi55GhWC6TbZMSfVd96mWRhnBHxDzEjj6JkRizakrn58vbhgohJmAY7nA2no5DpbkVy5w4UFSsU5",
  "key12": "4Lo5PEMLjRjgzGLzjLr8WmTCWCT3SwwBfPrR5kGv7uMyj9KgyuVxtn8K9ytrhftFDZxmGDEZSwC32CTSqLrXNJbQ",
  "key13": "4AkSCPqZdjMXh8hLPUQgnBMrsLRiYAEnCgeZLu3Nd6aHKuHrzG2kimjkq8GQKGLdYSsjxeqQNubHf8Yj3Ud24VsS",
  "key14": "4MtFTuzBZJVHqpev6hzHgGPzPqvFc4Qcuaqpj3gy3GPYGU7bifAveWQkQKqdLckoTzvQJuKrBkLy1SoohmpEucEb",
  "key15": "2GB4sfptD7r2WPH4TB7WWF4VrgGWMqzMHVAk7wpr1nMeZySyjCWUFa9bnDzRK987z3XuSBcM4dqwJbzhLDMqaEGi",
  "key16": "4bN2eZzPoD4F4eWj9ggdcUXAZxV6P3Vp5CJu6j9DVYxzcnomqZxFR5QxBeqRAKpyhjJoCMxNWP72LABRWmJjhzBh",
  "key17": "QdBmHL1mVEFMpLooCpi4avv6MBYWfontKHoqpNRUzNq6o2Gus7FqjqhRYencmY8SZ9LvBWjKEETb9oeauqsZs9U",
  "key18": "5sbXrPUKPvz9G8PUUDcmaMYT9Qyfc3ciP4pWszf5FFxV7uTxsXLnnVCXFG4vWSgs26uqBq8kwDhujSKjFV5uMwtL",
  "key19": "5VkYGhpo2PtwKbiHwgixUheU6mZevJ3T66WSRtadQfEN39tnXNRHKr3a6duYViudiqGJcZ23Vj7ni3f1rvMtbrDU",
  "key20": "5xDG27bkhhzN57AxLTvaVTCkkDLuKvtdMjoTZP7R8hqCz81mgZgS2RnAxz3Ynbq7kme51ojdm5TuYYSGaHkgaent",
  "key21": "37DozXJsHWUj2grUq3XXWu3gDrAyxHj4tx1v2jpxEkGV6P1qpmivu55qQsh3XmYwLqf9eQVNcguzibNorZdCECUg",
  "key22": "3FNd6vANU53BDiuaF81ZW5da1HdiHHZKw2JwMdNczCfqXd58DkNfHaSSc6RxuF23Yi4sDEEU8GCLL1cVf4TFGC4c",
  "key23": "4Q899QncvQvwduNPuEHoKtPgkn5dY13dTN5wqiDadSoFXc1GeM7NHGNocVTS6hYCEEwwZSvp2yUBDbz8YKj77xuN",
  "key24": "4nt3fTAKnV7EJWyXtkjaG5CVk3WEFKZn1JVgFyTfSevFuN9CJ2kKmwANcFDNgPAXSvumH5SGHN1DfM9Y43F4WbCQ",
  "key25": "62xHMocUkShT6S5LxXqMuExv1ZNqrWunZ4HvWBc21NMLQnhFE8qVRQU6A5hWbDqxeS6LCmj2kZnvcs5paXJTBCXm",
  "key26": "29VxQBWykmNXEnC9Du3XnmiDaeSvg2yZQcwEn8hDTkYktMpZqNxQuRtYxctWSgjUiyCdzAJDarzbGpYHB29dmHpN",
  "key27": "vUVawY9hj3i68WC7zsZXVrYV6rqrR1MK48Qk1E8rmfpcTcQRxHJajhkU6FNKUAqwQYug2hcch2jwsrSCm2qX8L3",
  "key28": "3DM9L2auR9wi59mKFxHC1MhG6qifdU2eDCk3yJgCxCeUFRJPkqazwXAMyh1tNXZxuuJxvqX1QSv64uzaCak3VMAu",
  "key29": "41LQtrv3dKhGxyzpaTacuXVuJ6U7fCwKoTjsuuw6f6tNH1iB54aarkP8pDqfGxrqcHGdVNyi9tUnDFBKAMt2shKD",
  "key30": "2r7MhGnz8xLp4ZhUrsVkMCx38TS3pCNmtNvXKELMgHYBUKYqLaoDdTfPzjxWcwcPLdBSQbxMDYPd2jmnEu4Qw2oE",
  "key31": "jHT3V7e9TnD1uj1KN3xFrscZdXQ3miCSfzmpc8WxdP4HrVQFNpwRJ32ah7q6igbp3KxTZULUPtwB6ZGfzKjZtWn",
  "key32": "5iVf1eM4T2AE19BojgnAiH7mCT38r7Y6hre31zfbxNSW3mQwGbqeM4L8pi5XqygtSJpaMKKxdQYnzAntgZc8Lm94",
  "key33": "5Mf1DqKPTSSqqVSDBEHap8cz9DiVswVzptMrsMgR1y1TuEGRCSRMrWnXDK2cVybYaPxWgEy7kFfteyi7WCmA6oSe",
  "key34": "3b1UYj6i922AqWgfNfSCsKvkegcfLBhKz8qnr3Bu68urSh1CbBgoALM3rskT5EhSGqVLjDC9CQgyCxQFEZPKCnSB",
  "key35": "3JuMsBPLdzDnjLxS34bdHjHxzXdUyg8edZ7szdPK5zywLrFoibxw5xnef6CsQw7gyKfwRdG32yvRWYPyQmNmXeGZ"
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
