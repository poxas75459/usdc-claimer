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
    "63tJi54TQtYHkkMUXpSydbCXV2wBzGKcrPrzC9ivPYggbok1sSo77gaC1nx1TP2N94MntPjQU4haX4JoU3J58exF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LVVfdM1RqKYUyP7rQBvww3JXWEREAvnSHy2nPncRTazHaHVSv8pC8VYev8NuyiT5NC4B8P7bhWDGxfzAYATqXBc",
  "key1": "661urjQbaAQyYjtSRjhcYccjhe3vYCuwa4gztiyqhEh1rbN5VJELhfvmaRbBUfGfYgEo7NZeQWQyqquBLSK5GW4P",
  "key2": "SYkJYjSxtShn7FBbqQG5AFfVThNCGc2xCbEt1q1WLbUQRVbsDsEU3hWLc8YyaJwh7MY6kd64JhkM7BFdRQe1LPT",
  "key3": "bHF4CGeTP3hgzs2sHU7h4ez4CyeZtf7DQBg52huX31pni4FsXxZFN4BoEkzpL7unNxJRY91j27g6KLREHkHhF4e",
  "key4": "A1ZjQ1v7QUymyez4PkzRHNg2z1czrFjTFx9yEmRwbKLpGz62n167iAuP968s7udNsLNF3gAAaMBGgoo1UUweT4H",
  "key5": "3ukwzeopFKzzKd8UjrRPUPB9bmJZHvC8Pfbm8LPo5xcZqoiRf7jYfygRbssAw1SdtyTX88UrgZk7m6QSXaZp41zp",
  "key6": "4bJ14So8FQcgxU35L2XP64o4TwXAj4ozVTzgU3AzBcchDw3xFy1TKQ582wsWXiME3b1Y9XcRd8Y7gJ3JNF5PXZJy",
  "key7": "eMCXmaros61JSpR4To8YdpkzAzmJnccTHAKeYaY3VvfY7uQfxgHc4Z5h1ANfZuYAEDKRgMPbanS4DhVcA1xMRUp",
  "key8": "3oHHFyEVvHBcnatN7Rs9JK6iFqRvALzfFNyPd4sQFbkSpRDW9LVVA5CFX9sDQth138oxCiu4MDhfqWjhXedAUoy",
  "key9": "xp6FHeVdU77nm1ZYYFLsZWedybJCpCgeGR97SoocBLnSfneBxtuciYikE4CzNyyxtFGgsMjqMVQLQM17bs6fWsY",
  "key10": "4zm8vYho4MAbCdvb9zdhj5DdkPrxSCCQ66XkTpojYLKxjr8FGoJctKEksJb6gijhkZDB1wCN8Rhf7ArmQzr94yh2",
  "key11": "qQSLjYHKbT8WDMmg6QNtW7fNVoYTWMLxn4GJbZR7a1ipaQCCNuKwJ5BbUaZRpmygMjztGu1WUvAEqAKr63m51ic",
  "key12": "5dWNVCnxsK2Awf1W3DMt2AHmz7JxTDmnjA5NwyzmhnoVYHtj7aWJhH2e7Jr5LBz8vvuvGUFq1oDR5fmFfLPMe6ZP",
  "key13": "5u4Q5SB4TPVYRtBY2auKPV34KzxtUtcp4DTp1N8kRqp17cVcckBP1Apaaw4SykAZTD78mGM8ShBJjjzXXpWMNjda",
  "key14": "38dXtifgEB5TQKsTAhAKikSTXQy92E8PiLpc6Fx42qffs5y5MPoakmCVyCzkM6yAZo7qqAp8pQGmZb98pYbMs5py",
  "key15": "5ueJsodC7wcNXvwv1PaVmo4QxctC4FTV4xPSnyJDrBtiGiKQfa94a69YaLvTAfhEQzCpnQV41cfNWacyiyx6hdHd",
  "key16": "33MUSVokvB5RrUeazpdfLLtw9ncea6bSxrcpu19mAXBEsLVimfHG5EgEoTtrZnurusqqMVz1Vgng9LSkv3Hdmhbm",
  "key17": "dVfBRcwtKEecfc6jX1Nct5qWcQDx5j7AZ4xkK1z7rzSCCp6DRryw2jxjgAkDMwd3zHFaBoJnd311UX215ZzP2oH",
  "key18": "5XSPZfD4bLu6d5eYxG64g6giVgfjZJDofCEpb14e8fhNFXwL9dFC7D6YFbqKezhaM1ESkR56c2p5U6omHNjNNmzf",
  "key19": "UTgpzZwUfTQHpNqbR1cn1YHxZbXRHkqNmcuBhxFzgXUGvnYd7RBcReGyFxfQRchoQpRiUqQMEV911A9u4D5iq8m",
  "key20": "5BeYBt8TCDpuV6sF9oFUqgRfmBvZicTrDVBDNqpcBhXbtj6S1dRr64yUMMQSnJRtTJPCuep3DQz8SudDC2pKV9uo",
  "key21": "2mEC2iZJPLQ5BWo8zJMJpT2uqBXP9UNVpYue9ZtmDrdj5zEXSeStD4ttJWvDMeh2UgkXcVbQkBDonipKXE57MJfM",
  "key22": "2tNNpcsxxYrS5Go9j9rvmrkqUV97YQpPBdQEvjfkh6WH1uLuJmFBDhdmH6sJ9otqZLwe3g3Q8jn3S9ueyGNAnmTH",
  "key23": "2LoL7PbvWYLvuAyjEuPQCRVNTCX4sT2NuPs3id58ChLGHHpjXj8whRBXTQwprXzy97Quw2322iD5YJGPRLy4XCud",
  "key24": "2oNuD8k53WN4sVxQm2jbRjoWoqK3mm5MD6NaSoNWvJTGFejAgzcwzaLwoQVVSNsngvjWAJ1VcBD24zbBpBRLeEh3",
  "key25": "4RVY6UQaMhX8zKGpkxCTJiYLMkd6LCSqgU1fMxV7jzLnr5LEBee5UTjnXBsVYxZvHETCCfeAf1YLTWJgQrU5Lo9X",
  "key26": "2WSLYWDgVHWn5tNsK3xaL3U3AEHzQoEMBiY6V7XRdSxEUeb7HuDLC7NA1NpQz4Kw4Si9HHcd8XY91L2n8V2tdyRh",
  "key27": "3iu4Yy2DQVcn5goCRvcTZJNs4gY8XYZedRVreMME2NNdPdGRRG1BJe8NLggYbgU8bc4ASx6Bh477JpNp1vkHc5F2",
  "key28": "5hLhF5XQZ3STp46qjEWJck1b4Z2MTfiwWQbpxBbmY99EJyQzptY2fWnySCyicuBKi9HjL14aspr1oszNVp2jJ5n",
  "key29": "3HskWyFd4T6NbhbKrLuGrfnWzaEYhXaxrhaoe5t8wA1ddSP46fnzFUdmnqxjrsn21AcRkLrpEVtykv4XKCUt8Cub",
  "key30": "2TBPmXnFTmZG4BFSiM51G8KTgRoMkVJfA35N6fVXqe4oeZxXL5RFrUuhccHH6LC2RSx3koqsGR5FibYCaTskab4D",
  "key31": "CSqKP2VZbCPtKtrSBKk9CJ7RHEXcAvwUUzoX5orWtnSF4vUYpJ9ZQXtAz4beYZ5E6fMQ9Ay5YNx7LCWxDS6GTt2",
  "key32": "YdNcsdCXwMYCM6th2C3buzTnB9ssSRG8MSKLd4jo4kJMnSvQgew9vPz23X4vMbH4SbGbxT7rePXutdzAMfyR8hT",
  "key33": "62x3yZA4qh8kR15YCbUd8hXmbefFQte2WWWdSchjaPLKH2526jsfxHvVjW69ByHwG1pu3G8iT8NeQR6TawnEcFh2",
  "key34": "2hezeLPT1ucQeUkBcA3YBnrbH4jG7BAWtAE58iZCBqXwjfL7bZnUXjNUsQrvwVRNSGagy6RLjXeihspHwwmNKwzF",
  "key35": "4YF7Q7FUFy4Xdkj6YP6rdYVNmydytcL5EnXnjWMmM8f7vWgF3g431pXP3xshUiYzcVSfa6gMnDjGcAZoD79zruJF",
  "key36": "3LfzT4B33KgEWUPU7381pcDe6E2yTY68uN8SYsPN2WrKuyvpg77Vkf2DWHt3Jp9WB3efNSc79ENiUbLrA9DHLA1T"
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
