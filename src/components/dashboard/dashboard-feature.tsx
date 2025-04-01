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
    "4Pi9z8FhbboknZtmhKraQFudVoWKB7C31nF7ndL6hziUPHtKu18LmEptmnFnWjw86ah33isTq44KTVt1iotHnLiq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oDDtw69QuGX8n7FSJDibYzWoJkd9QzMKyPkoUPLfihEZwbd29u4acMEoBWGSWn3QErP7RbKzizmGRmjJTGoBqQN",
  "key1": "2ExKVv9C34UuyXBa1mzuZEMBkvJVRPM6XbWDHXqVfjp1Tzb2u4897tYd2ftruVAdMg6geQ2wzSk1BRFMGqG5ui5p",
  "key2": "2C18tGpMGcHvsmHh8RSKdxuUgf8hDq3gEVJCBgmbUi3kd77fW4A1i3e3AsDQCAThALLitaJqtmAVkbwEhKuPvgGp",
  "key3": "4r6xRN253AVw7fRqQHpoag4CqLm19hGrDTe2Rv2tKDiLT4wupVrn2Ke42yM1XP3ejChZCzoT1mCVkGguYz5nkrRy",
  "key4": "4NTR4Gf5Ra65YPmG2fggeBgv7LK9KQPfczDZ6GxdujeJAFucUsX2j58caDnXJVG1jVPFEmEBQPHgwTWgvg9aShvV",
  "key5": "4RP2jUJdNnr3XFk27BUUPE6h7nfW1HqS7N5Pu2CAwhmXAsNv8PkBiZAMRBr1NbRkzuSJS6BUzdSU8fCztZfUzwj4",
  "key6": "5Hx79mb7nCK3atM7zbAgrXe1FyUPdKbk4ciVzhL3BrWdwmG4nNZQqpkEX1SyRagKaPjkP8gY3ABWYeFty6ThX6mH",
  "key7": "5NPbnhSrC5gmphBUc7ge2nrLkcEkWV4jm145zMDZ7cWfHeKvf9N8RxuxF5KjrwtDK91bFX1SUTMiKxLU5sjHeEgN",
  "key8": "drh5cQyU8SBXmskMFvzKQWMHDBCnpV4YkfuJanmYgvAPEiqtodd1iBpXNA6ru84esBcZEKbiFZZz9QyWePqwY2h",
  "key9": "2kzgL3bKY7cAGAbryydpqoDrjFJ1UnB8avN8Fv9paZCyUAqsF5TMEpZHn8aoG42hn4XUTn715E3EeHU3kQG2DZT4",
  "key10": "XVUa6ediBxHaHRcDTi1GLku4zwzTKKiG1dZh6gYcpP9NkxyP6Wnt15LwWr96XZysMHCkgNEtb3ZMd9zKchfN6mg",
  "key11": "23TYfSW4QtPbKMkMNoXxaWbBT5UsNx1mKfnxaP6Yw6cNXsnNfiDuEKFdQGTaDNs2FEWDL5ohmCR3bcJcuuqkqmWo",
  "key12": "VsxZMaGbywstHK3GTSeUPtcLzyYVFQ6SkkdDGpPmNwGD4DkQz2vMYkSw5Zu298ZvAhvujo7WXGbq4upywCZVieq",
  "key13": "41iDDSREGZNrYZbJCLR6DaN7gzshFFkgLsRre15Hubp2nd2vPtKGXBfZXk2idpxX2gsFwFn8s5Pfr2MJpV5EtEa5",
  "key14": "42cELpu6JvGusnxUvGM7aTfNtTocxjFFPTLMXdW2wRzrfAvwfgHEu2746VR1HXTr1pb2kLGGJAC6D2ndt2HNSZc2",
  "key15": "4T5nAbzZ9mK2paroQ79wFPry7EXs9gVh2V2hV4F2LXyMVkt5vLAXEHX66qTtQWECLuWZ3enKhcdjjX8dCuHBmaDw",
  "key16": "3sJhW2GfQ375yv7PmPcTtYgLXXiEtpM44R8HCxc1FjmwrsqT22qDQ9sof4e6oVipRRYsY1m4ZBxQgirimv4i64U",
  "key17": "4zhsiHsf6h2P2VM5PmSvEk96zHqcnP61nU7EqUqBY5eCDADZAwMQ4zy5Z8sSGMfEpoHB9aXsZZYZ3Y79exgxpVUU",
  "key18": "5cfFCXo3FsaJszsh9zqa6a5oYwx6uECxhFaDukJ5UnjkGX9JpzVFzSuTiw8wT8MbowTZ8czB4RZiat5b43NEpqd7",
  "key19": "5BpjeKTx1XDhW7quQAJZLVevG8aTix5J7gbXG3FBVd8pLDT1kCRGuAMijVkqGAG6sV2RP5XoQ7iYTHndT1mUCfua",
  "key20": "49v2bTsG38rARL62cqRScRxzyBDWos2qWfaK59KNYRNmFbxh42HMJSC5AdADCAf84FDYjvDx5uvm1n11qzVFgCGZ",
  "key21": "3HiDr6xvrSuxQr4zs5PjzbeQK6Q2Pw6NycRcppKn1qKg1bUtHQjnvivTAqgwsXeJMWUi21tMWrDwJiEBCQ8HEeBp",
  "key22": "2WWnsgTQ9g4LAKfoRncy15mbJmmcx7tVEcrYSC2NmvW1fhPrS9fBTvudHqz2SihuFBEaPK6KdxigguopyeH3F7rR",
  "key23": "29FXhGpUxACQry8mPy4UJQnX6ASGKjNewGbaPCH8iinCnPL2UrzaryrRt8VkK8zWM1BzBV8GHm5ZnPgCX3AdBzcS",
  "key24": "52dVsbu24NfK54ngstT8os8xCfVddZXvZrcULXTmwqF4KsgccNBJzSQRp2k7jrB7iywX6uw1hY4Vmuqw3kwtP8oX",
  "key25": "z3GHFQrR9rf4Xaf8gjL1PfQHyLt5iuYWtTXFtEQUQTzDcRhERxFDgPQmnrqMKGgNUGCZQ2PqMk3UAHpUALRCygj",
  "key26": "3DYzne6soWQc1YYQvSgzGvHiq2S7fjNJmtiK5Dh9xFnZySJm2XmLU8aKSxYL6babzX6CD5igKzvDTUDG8Bmcg43T",
  "key27": "41Nu1dgEgqMgygq9kGQuhJrvmU2THdJytrXUr8GBAtym8C3qsmdM2yHsr17DAT2yhGr72zgNU1Y5xRQgK7wsgFrf",
  "key28": "gqdrHjbK22GAfFWAQgNVAWkwGJiyxK9d4uWNjRVc4NZWe79FMxQaTfrhAfM7GqQtpL1SH5ycrALX6aq9XB2JNRR",
  "key29": "5B3dtiJdyXJYfM7hV5bNC8F3zGd1ASeyrGHZgU4J3roULYxnDi7NfRgpawjbVBiFp34gSmWhRz3PYE7HcRno1Tr8",
  "key30": "3ymAGuKkNqn9a2nCiRc5squ8sWzsZ2XHFyY3kk5UTj9Q825KwyC2fhXYDS9Ghauug5BFyUefwoKu3ARVuvod2a7U",
  "key31": "4NoPaW3V2Rgo8fBPnfWc3YwyjdWENsF1Bq8WaovnB6VwSfT5SgLpUg9TgKVTkS9mHmnSBVjfr9eRhx39qyy9SF2B",
  "key32": "29dvxh7VMpEgGJ5qYUiqJQkMCXr7sAd7rHKz6rtAhdhv8bm6AivUqZfvhsAQss9dQ7gtmcFatnsgjugqX4AYP8Me",
  "key33": "4dqfn2BeuvDUvB2FCzT6Ets9Xyzh4HA1UGMgfGhmiJRqvWj41gkS6v29Xrg5H6g6aDxz1QBMStnHjFon4VXQ5iWT",
  "key34": "3YRHbj7eveuegivSFCHFcVGqgyqpHPShhy1t2SJayKHZ8i6mdWUqifUkq5ZLUfTgxuNCG8DzzgrrVZTgbmtg6Btw",
  "key35": "54S2k9NZpWSqWsEguvWHQ88b2aS2fE2XLvKpMby3eecYP1dmkoQsAMxxueXyAe2fmbgEkGJ5hGZrcdKkhDgPNyFo",
  "key36": "3RwYy3pAVFmsm3tBMNunJwet2Qua6uuGhL9DwKJJ2y6TtHms9sTwKhinDhanms7aXxiiv2rC2ZShpqCcRuFWrB4i",
  "key37": "5s7TUyFBgU3pLgukF1b7Tj6x7yid9cZBuTjmZVjAeoy5ddVSxCif6HfGiN7cXJRY4JceFyVdzGmVbcMUoiQTiaa2",
  "key38": "4Jgseq1BLTD8jepaHnxBBPDpMamAVusKbv6e7vEhkWGNUEPBVfoRgpaG9FAGZoRERK3HSNGbiodjegYvJh5GHXEu",
  "key39": "5U3C7FJ3iYTo7hXhK6t4Ht9o55Xau2o6B1EcJS4B6SgyrCFs7Gb9JBndj9nX1aK6bwaoYF7wc6Svb4A4nczEKYSb",
  "key40": "5g6SjRERNkczydwSA8KEDyg2ayV1wHxsE3Z3SRHaDYRZ1F1ezV2Jra9nwXkRcexT7FfaWwjQbNZojZfb6TUVtdk7",
  "key41": "ucPP3MqES1CuaLEXbdfi4oQys74cMjiJxjupJnpBSAXKGg9SJtsaX1NKGVJh8PaixseB6vfcMcAqVE5cQJZH2hL",
  "key42": "28otYCRjqxEnpiedPRfvPPmgT6CzpuX9L3wHitPbkM7UqUrJSYyFebPi8eDR8AiiRVpAGzGU8WaehWa6z5NDa4Ta",
  "key43": "4cLuN4T2kpcNZkUr7Vkzvb7yURCQGstEsTvjL8e6u1hZ9LJjKzGT3zeX4LVqSZaKMAiHeaJ7outFPerBZrmjzqW6",
  "key44": "4VBLGPHk1xQxKg8u1w1jfgEx8NvPYNHss3uUGwea64XxSPLee1ikPPuZXhd4BJntGYGXUpH2JaQze7tj5GGm67Rv",
  "key45": "2AHtAZAmQBFD4CFQ9eq2udvmLU9yQNbPXPXSvvVx4DXnaAzdKGzE49Cuz9K34a4EXmtbTHQAyEKj2LKFzkNkYSme",
  "key46": "4RGLruuuYP2vDuY2DYsVNgb5RkJmQWn8QdP9Ef3dA179TR7sJ1AqJiJDWCnmY8WDQxcFhzCeMynecLeVMEaNc4LC"
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
