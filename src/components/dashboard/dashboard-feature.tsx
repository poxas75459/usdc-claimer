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
    "2kXM5RCUoXvJ3zuu5F8nc2HHTqX8gVxGL9Zh27SLTEMcB4jh6npkKeoXkQ8sh4EurbWjfYru3K9FZdRvfE6nrGBv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VTCyZt3iydsYqXhD9Z4Gk6sGTFoYj2K6xeCBBoFsJ5m1UGPhgfSZk2UTmXzP7eDoQMrAxyS9iLFpdxmiANhTWu2",
  "key1": "o5m5DGyxBAYHCjgCTTrhg8bkigL2KdSozDdGa4SmNmYkZTyzwe4YJHz1hPzvnbWgqDtbQeHCNMrqScYhqQPhozD",
  "key2": "2jbsnoPBLNX5fa2wRPpFed3B1iAD14PXqBTg1SifHkBZ3aR6qV2fM4P9UytNH8WZdrVdmChA3jvHrfJoV4GJ9GU9",
  "key3": "128bMsq5MyuCgdLjzEtrSUbMbLz3z3uTFgyiRgshReQPCHrUQkrnPDK3jjsyYctNoHHHw4yPCHLQx9BB2eoKQoiv",
  "key4": "5qv9ETLYcziHnQqG6JxMX2BadG8CVrW23weF3oxXTP5JAdsjr7WWwR9nEGcwQNdX8vTSKJMbCnq8Ziaf8a9V5Qre",
  "key5": "22ZeRQc7Wz75qBNGrrs1kFn6MX75ezUDAbxRs3gWm3GBA2peSTeqXTXe6fEb4Qj931z4tCKFgkPiJiANoMDLnESs",
  "key6": "5SKDs1u76qEijEHWR82P4GBpNbuXaJLnNdQbsAU98sPTaLgfEUrq2As77xtTmoq8VXBNtjbiPNWmuYY4U6M34wQi",
  "key7": "5rUR1DcVSmNxyNPBjVHyCWKg4dyL4ogL8EfTijDBv2TH38z3mGPwYGXaW4Tt51zsGJULmszmBYVAuH1SpqfdgVbh",
  "key8": "4pCj7zHoci5HoiBpzhTHJCgyTJkZvw6ss8zacR4DHXSPopXznWyoArxABqwAuDFfi7Fg4kF29fv3uv9ovWw5MNER",
  "key9": "5xpzp77VtGfZVVMWTfNpmsucueS1Dqe1AHFNoC6bbRKDYdqF4N3m4CT8MVHvFAGYaQh6ovxxpf4rjMRWjDWLakqp",
  "key10": "46ia9ubUNPwAWs4TKPyerfCwKwEdy7g6g76iBALkLjMEuYogmNSgC6qsZgqN1SHDZzeGzk2hsQypi81MN2qvg1Tp",
  "key11": "5vmqcAX6G8EUN3Bvt8VKHwDrMGEkVRLwo1HKguHVLFc85iku3dncGnLki8pHidmQwFJJex1yXoxsMkUz8ow13j78",
  "key12": "5XmE2goTKw1iEF7yMsmA2rMHHbrjN9mJqL18VNKWY5gUo1cieuj4R833NcXtHBzRZjBD5Y7beh5tpxbhm32SMyqL",
  "key13": "pKLKrvRQRhkhJzki6w14ptGHW3kRBBdektiEjKLeRigEzp7b6kZHDXZnexp5PMBSyPrATwpmCuRJjuDanCBPNFw",
  "key14": "85qDiry6Zke77wq56LPwv47BSbUoBgqkFzQdh7RRyZ8are5yfUvCwm2aEYpv6yjXMEP68WYCJZAbic3as8cS72U",
  "key15": "5NRCrANbD4RE4pRcqHXVUGNkvvnuXzhvixd6thHhG9wY8fKpC3RBYYDiHXaw8B9RwprnK1TVr9t4uF2itM4MQsxP",
  "key16": "5qmTaZCSqgyR86sQoLv4Kr74kaLiqKnvb8yiBKuuxN92CR4fbofeMeqGngA3H6a1AnDtXtQuZNfikxDGoyvARQft",
  "key17": "4VTWsdbaJCQfytFdWz1vu6d6uQ5MaChPRdNZr5qDUu8z3tTAp49XSr6StDWDeFtemQNkYZNxodj78xk82iu3S14R",
  "key18": "474jETBv3RBccXhRvJsazX7M3fbbhGewsz64Trusxvp8X8LkNcJeNjJpST7p6poLdECo7vQTB3t4jePg9mV1LhyM",
  "key19": "25dPSAZvxawTiB5eQHUrpx5iCMWq9njsVJhZSDswVrUZeAcspgj14d96DMpu6aTJY4xMyudSWDxsWA5BbciUEk8L",
  "key20": "mUDsxyVsEH9xZXTjwbBqDWaQ1gtD5vjw4i6wcZKocUW7QBPVqxc4fuXNApWzDzxczHwte7nwWXff9f6nJxXGdny",
  "key21": "5sy8W2YVQufKAJ5Sp1WhsgoUbKjDgjmVqQfK8suiA356TtfXm7kqvbx8K3DWgxi7wo7pann8jEPG4x1LPiNgNxZb",
  "key22": "2j6DwX2GdHRqg4c3wgdgtPyYe9XTDeW8kJUAKsy9YCrrxjDG89uNVChGQ8PcMf52C9LUzKdsn67qZQv8SdZYMVjz",
  "key23": "4LMWAucsDieubXz5LYxWW4Gazc9mEZ9sXt578pWsytnqUo8pRGhGZiBDDnyyk3m8GaCzqZfZ4axmXNxgP65qwFMB",
  "key24": "5ZxhvdKbueJ6zEWUTJMMsjtamC9TVx7GzaSu5Bg6QkMejntTbfMVxwsvTHZFaqUTfHKH43jQ1eNxR5HTKyBpa12Q",
  "key25": "8wcRWZznEzJPhBN9cuywggyYtJqvYjpKaUCkcqiWnunkgHzF1WsmuXQALvVkitYkdmBJM6xPXUXEi5AaGkwvPUC",
  "key26": "5NmVrJ5mJrbChnnieUAqDHVVkL7NSPAagm7Ley9y5GwaVmoHKPnENpWNHRueWknNLf98Cfqnx4GM7pp5yTS2qJEt",
  "key27": "2WCzm7sHZxV2ZvEKbSKKs2UeP6GxHrn3SiUSdD1YBDQytCAbUnsfCQprfeD2wTcVapUgUgPBuoFeyWP8fQyDrCrc",
  "key28": "4Z6W6DJGirwSXQ16kwKwnPQDQdyFXgBwhgUpRDeHxLQut2d9Z8FTQXxkA6cXDs8SriTMaGeybQtnucQdDEtHQqEC",
  "key29": "2buUXVm3LMhKEEFktTGRawiSDPbEPYhDDZnELknAZa9WrvR2dbdgvTynHmigNGWX6P1mqUbJFxQMhgHmRSbufEVz",
  "key30": "2iT1ixWFVhQz9AC6p9TTAXX7FgMV51sEgivNXpYooJALcH9mG8TRAgkTSsuQ8kzNXkTHbRnhXR8Fc9E29GaD5AgG",
  "key31": "3rsxxp7DTvQ6hRhrASERVZ4hs2vJGTD4a5KtDKHtFGZepjg9gbsRh9yyW7KgHaHCqv7pop927Jc2JzXSQrA76jUX",
  "key32": "53HLPz67g42ZW9EAMhcXRD8wghjY6fTXfVoXqa8T5pLrBMJvkoxwr7FBoxSiRD27dmsHiFT2JmJQEzJk6YaqzsCK"
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
