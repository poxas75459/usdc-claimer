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
    "564pdZGkqxfTuzLcnmYBxZvpfvnuQL3DA8XQCg7szPjFqz9HoxiuAYkiivWoEBMsgyJbLA9jamiH5PmQv6NKMdXk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fK9Z4WDhhV1akLAPRe3E1GNyGpbdq8iPTmwpowbQUcE5cXPnMkPgx5JQoDFFYYp1nJW7BpgN5HSBLG1E9Xrwz7J",
  "key1": "2btTC9vs4kgA4RVSeEEBJE4ZKCT84QGKUsijXjavjT3Ksqjg6qfcJ4Q7RDgmiynk2wCPY6LwLuwZFaG65NK3vR9K",
  "key2": "3zLiygTEgCbkyqJcyMDWHoLd54MFuHPfBixfrMuwZrGR3FAKCN2NkvKE5oKtc4G2yPDjnyJRwnGpqRG6sqkXiVAk",
  "key3": "3cJHsaNNRGhDtkmX9iAMaWjoMszRMSGbmESaLiJw97FdxdRUrP4vSEPPUTg2aAKwkLSxBoMqpQ32VWB3tWhq5Pjd",
  "key4": "2h1o7uLM41Psm7ExdAD2EDbyXCaYjgHB9gEmZ6H39qXUiKZcN8V113gWkRdjBnEPLz3D1LK6UdGSPXEjYM8npkgr",
  "key5": "5QQxJExsGfYcsrnFNrTjaZj4zG6L1UeNSjEasp2fHyMuDfPhScSTV16YtpgwVvJZv9oRk8SGhpo5TBdLFWBq3WGV",
  "key6": "u6NWymBHm9wMkW5ZtBmyFtPr8cq2iBQWsamFcaK7jnwkfjAjGBvrCEBynjfJVYfBecv4MdDFRV29VHf3k1HgsXe",
  "key7": "3RLvmb9fiA1SEJrNoUaVwhezXJRoWiTetAw84mKV6ccx64WBDu9Q86HiM2VeQ8munHAuftVc6JF7jRzsnqGRYKZL",
  "key8": "351uFkJw3WWNb5jFEM7bke82LQWE9Qin8pdevf7HV6XeNbAJfA6aeaC78vxnM89HuCCvEmuTRjwUQ5vwBxq3mQf5",
  "key9": "4DCYG7VZbTZNY8BJF7bHG5rfbWUWadhpp19bs7DBndXE1dJ8yKP93CRFdf7zmFHen46Zzc1nbibhztEVgrjv1iv8",
  "key10": "EHLhb4D1EF2y9SGcBQUx7YgmDQeEfDL9AhWFxZLeS43d91bBnJysSE39T2XhWNcWRkWWpUYVu8jEpDxV1Vh5pE9",
  "key11": "iinh28nWPEbJ74y59YGcbq9WBb4d6etAsK99rUkv5MUqViNXmT7iQwPxc1Wi2viaqhiYuRUNPbwuDocH49sWkEM",
  "key12": "2eeTE6qCYgDJhYk1CuCZBpNX2WcG5XfKHM4Zf2TwVmbSJqTcZPfFugQ92DWK7KYxY4dQEoiNJHJMb16RowG4mNRf",
  "key13": "3dSuEmiWWYyvd6TZJzGeXsrAK7tsyieQJSkzrFHZZW8WTCydjsYLgL2GgADf8KyodFjGERuPdNtxzu3E26Dn9yf1",
  "key14": "UDsRggx4ZKwrLEgRzhpsNtowawtrFBRV4KBz9XT6RkUkFHDCytdAHdqZs77yataamX2N6CvqAU7VarYyF3pPZcf",
  "key15": "3L1AYDCZWGMB5Q6tSQCsa5YYohLGEoDWbDo8CYprwMrjrSqT4N6P6hvqYNE2i3iJx7cqq83qR62yau5ex2qiWpu3",
  "key16": "64wH1KhpmMjh7ao6jEpyUW1emQGW4ZgszutNVKX6wbX8ioTXcfiUKannprzw5MhLLWHNXYmfyPktFSfMADt5p8Yr",
  "key17": "F9CDZ1WKHqXvBkR5JwQzrJ6fZmF25ZMNfs6mhPuxjijzYFyG7Gsddx1uF11arQ4GEzQkQmDhjFDd4oDTqVWbWro",
  "key18": "uWy6kdBX57NyKChp81T4yKeLHUkT6A5HfMLnhdASoywUxj25DJFtyBhtggvPD9xVncdM3zqcTBcMT1JicpvHia4",
  "key19": "5C7wCfSZ1mvxxPWaE8oed8CmiXsgcB2ZBwMcnYL4fwZEDzVb2EcK7NFKNh7bUv4ZxVbHeohtoNTBc6PLMYPBQTeQ",
  "key20": "2aPPUh99JpNWhGp89hHpGSwFcKiV7JzvkGa4EaH6FqtoEcMXafwxfGfZVvGpmeXBTGHo8u2fWqsZ24mEGjdyfXPp",
  "key21": "2CAg5WCxXuP8udjLBJqgWcLgG3j2schveUs5WpyhPLG7xArfpizS8sUM6ErQ7nnG6DM2Qa611AVxAABwNEknhJ8f",
  "key22": "2BGUB9pNxzFWfqZzMU7X6G3Bj98KuE6T8fQHDsJQi8F5Bmh7pfHnjbcV19bUbUNLNyusjjXaxKmArdnqBmBJtozS",
  "key23": "4YNZ1M9TekFa2iHbX4ELMvDfuhbtmMYCrsji8fyb4wV4QdJNSESiwptw7nL3hh6Vf6D86YQn7bG6CtVxHfvWERN5",
  "key24": "3AQzoTSJrEQss3gZVe2gvhW67y7V4nUGEuZMQnACJ5dW7PxCswxz5xCjFNQVsTqCoJXLWRMz1YmQtnWSTueED5Es",
  "key25": "2jRS7za3DHs8pQVH1toH4rv15fZ6k48W2gvRA93gsQLZvT3sGy1nGhdmz4QZBUPUcBmzk3HTiHjAphf41NhyAXtk",
  "key26": "oV49fP5cZf8qJTkif1gFx8jwvwLiXh1C97h8UQGQ6HRoxFUQqNCCCMSUJQ3tynMr26aQiT2kWa7nuwmg1mvEU3p",
  "key27": "5hHsWZVqWSK6naRgZ9ksPQXfbTLNpPCnye4pTzStXkdrvRkNwre3rmLUJMyQ3NTKkWEVC66VNpEjnFu7ifoM9r7N",
  "key28": "4GvBNBPLy3TE4LuV2G2u5JwduedAB9s8n1NcZx6mNFqEKeD2TdjtBDi8gDrDcFSmoRiUJXRtwhhJn1GNtKcQCWcc",
  "key29": "4oHH4j4ZxfdpNPJcFLKsDxVHK4K3CQSGKJVL2FwiqBfXAWTxqKDmoPdov86XwgoiMbw6SE4TaRESAPBJ2uBrW2YL",
  "key30": "3pyNxPKCDofEANjgf4F3bBYuYniQUMXvMxn2rNsSw3f5TZcCcRg8Hk2Zc1if3wEXYtyFgkbk6SpduEbx49ALnrrJ",
  "key31": "5GS3YzXaSp2brEfuK3asm8p17Fi7AoKVkX9vVYiUsVdCjs3wKyZGmZ3vYLUDTVQ72uLMJFaHbSspUhTBWU7gQYPX",
  "key32": "2T4N56mqwpf8H3owSkQtRqgiU3u71u31u2EWguxz7YfuAUj1HtswqdpdybvmctBABkwEph2KAa71anxeDUmUiYZf",
  "key33": "54fKXaF59DT6kKbnSEvoHri1Qk5sdR8BoDA7UDnG8xcMCe3kWZuVsicgxAW5e62vTeBe49PMJLgoa5njLJfDLbx1",
  "key34": "3Ht42o6NdRZWFFnufcHsZzZkv26LoRQGeCpU5uSDZ4XrJJQcSE91SQtaaw4YtN73stxCnnphwvknyELjsxWr8zv",
  "key35": "2khqKfm8Lv7KCdFhg12kHSj4ibsMBZW3HQgGTk4BeP8n1yjks12DigVzj6cZ7GAHzm3poTN5jZ3rcExDj7BUJ6y9",
  "key36": "2N5iK4dVnckWSokiw4ZygqoA7fbfhL4Sm5pK7QB74gXeDLuWEg7yUDzfEqisoDdC56m1PVZDo5FJuJUX6EcNZHVy",
  "key37": "ajydtbEKevK4r3jCRUorXX1JbGnHwxMJoHkNKcqmTLNVvXFkHUmxZKuVCEm7C38hmpW8tMPB4gpqF4gJxRT8hqA",
  "key38": "2fP3P5nhiTxWjrXjDXASxncTnUcxXB1kHdrnHYVETujUFNF8NfrKdoPd9MT9hTCKoTbnJKeULjY9hV6DxHGgh36S",
  "key39": "4aHCEcLn4iAd7AFv6aZUqPCSujYPXigHGtM32tm7VfAbbcNXWQeFzy5T83SXiZPP83Cs7UPgyQrpSvLzCzofQoEa",
  "key40": "618HmRzJNTW1SvcPjiiHYyHuLccYyoE36jaujfcAMdaKNLrcvjUXCiJr34ENmH1X4wyq4MgVnzVHk91xMt5yHkGG",
  "key41": "gRCCtmxZf9iRhHsCjaEk6n5afduWzyZeUD2xRUnbRRRTGojfqmoYzeRDEbTqx6DdvPMLDNZxdXKiWBeP3fCZBiW",
  "key42": "5HG6WTA4gFy6a5Z9GdDUfVCDA2qXK7qvtZMoPZGXHod5KxWQ1pKPcoU3ufBBuJMK6yvP5kSqyHkFPrTd3TwxfwkQ"
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
