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
    "413SvvwavMfiWD5L5fKi32TqijijE7sp4rg1GbroyBAV5gdKcwQKakACJz8VVGDZYtcjKdXhEEQiRokhWjuaatit"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36g3t85qy1wx2m2EpkYbNtiuz7u7ZCWW7xt7CUQoQfduhjFnD4k5jjbUsFK6iAMbu5YcpXAQCUcbomHNuFhEqPyp",
  "key1": "2CaaHdHbXkT98cMtu1gq2WR6xPB6CvgrQ49Cp7Sbvfco77P1UZzvkHQfNCW3s2JKKEw2zi9FH8vaNybwp6GCgSWo",
  "key2": "2JL5u114NP9VJ1KRRuwo7o7eq7Sf6CqkshDR7NiBTbQvPVed1UE79CyNomvRdaUGzeZ8dUBoQ3zMNNiUwLUc3wQN",
  "key3": "24Hj9VrAWfyNMAfALKGquAKhia72yxZsAZnCRCQoKyyWSfjWKjpx5N1zE9XjnZ6P3FgxrCH6waKWjRdF4XYbeLAk",
  "key4": "4BvqCu1NVE5tyDWs79sCbnBu4YCc3v69G2x6KYirdt19JEWCiaeotsakTGKfgJPGX6Vg9ooN9kSAtwm93Pqvgz77",
  "key5": "2KwsdFyiGn32kkqFGgXHwFMbLxaGQ3SpRqEyKtyNLMJPQEC7P9dFrgFNxpD3Z1cJZsDFWAKtSBwjdhFnQ9QuJMzZ",
  "key6": "5VP62rdsuB66MhWMxqRATe3yP1UC1acUvsSyMDZoeRAgbwfkcaqCTQMchR2ugyRuFqhvPcUJ5DVVMrLvvjHgLb2n",
  "key7": "2sqs7M5TAS5YQ2wyT9j7PVqsPF7GToQd72zg2yJvFAzXuHjMEoXBJzNiAE2asJpXWG6ewkgkiabNQCNcvC2VemkD",
  "key8": "3xkCnV1drWpfDhLpRw55FaFZPN2fUbyXGiqxa7TkbVeFZY8exHcxUmLvbpJQoU5rsWqRJz54auhCMiKTBX4oLQHD",
  "key9": "4pqCjis36JwasBE7bDdq6DMV6BvZ25npzsiYDTrKax2UWg2Uhib2Qx2vYss8Ta6c5Lsr5qFEpxUPmRLnpTzbz5Jr",
  "key10": "3hVSFEGe7j4LXtrVfcdEk1nJEBBN6yhKgxim9ndsjdNTTpL4GVNJhyEQNVeMJYPsAkj2u2d6iHM2rk3UDfXmCjww",
  "key11": "5MrJHAXTuZAnrqvDrLksG66RQVH35CAHHh191K7FHSCo75RQWfAp6TLPg1JaM2AX2hNWYKnBqwGYSuaZi5G69a6s",
  "key12": "4uY9vmv2oaoYCZF8muBzGwnmrc2gbNBwWjRr6ZtLW1ambZE5tB6DcdiubkwLGmDbXUh56qjbsXDS3D4iVPkEjPvE",
  "key13": "65bo35gTRwUkNrjkNV9PyPEbXJbbotqxSbz5g47qUDiemw4xp7huniGr91GsLNK4iiQV2TXC5vi6xvwQHWohZ17o",
  "key14": "5mwexNALUHayp9mdspHpTHwZNcVPHcguf3amipUsG4eD5XG8cVPEr3NAJSX6pxYdb8PnapYueqfyTLyCtTevKXV9",
  "key15": "2hVX9DXdazAfExT9M7uabA4H9GhsZabUYLURaduLNzUq2HCxLR1e4UTwMU3PaJ8A9RU33VQBzX3mQm6GJpr84FXN",
  "key16": "3j3F4a7o99V5iTLb2WrxwgB8fMDV5449ewZZZQHuYygC5ghgMSH1Y3NDQcVjWseRuoXxfULr4MJZx9SbQ4oXSmEx",
  "key17": "4ijyyyXyae9czKdmcAMS3zKHHn2pryNZvLWJWKk8vKAQQfWJQqj6XNGwBVfCMLn5xYxd3VvWAPJh1uqyu92q1VcR",
  "key18": "4wcm7knvjnD5pQd6ZgKbrRnwdop71QXjGRC6tSj2MnLJ7xDbK6sv1p1usjcHQfQwpwi9D8VX8Bxk7Af22zoxsPnQ",
  "key19": "55efKsVNZbCuwAWwLndUxeN5tZM9K41rxKfEkciTifYzD58cjBF9ikGruR5irboWeeymikv2GRnWYrRApQx49WWh",
  "key20": "4VngxBjfouK8WzAeVT5Y166H5z6jxNH8eerxCwyrUxP2xyuWQHsRJBgg5JAgBxLUDk2bXtjzLwojJeKdFWdfTiCB",
  "key21": "EKMKaE87zWSZRHYCs2vRWxWcJvxMa61MBB5rjwwLHdDaSh4eW5Qx7q5PSP5bdMVxVrncj27Jgg9eKZMqPB1P5Fd",
  "key22": "MScXSyh4U1pYhHwbMrPosx6oZ6FCMAcr3htPe7rxkRyYeAJJxetDfkKUDMqh3kyo2VvSUUQ6idb5QVqLkhcfHhh",
  "key23": "47o2c4QZiB61gKXugynZSCYjoyCDdrGEPKHsbjVXRY8tPCC3gHTPNbiQeZPVXA9PbyYyb9YtKKhW4tYMQTxmcf7x",
  "key24": "2nmMXFNBy8HKji9LbxTkxwBA3B9QF5BHHWkEoMAcy7pdmV7jrRS3RRsD37wXJjanTwsHmZgPxDEURS4Rkr9BMh5M",
  "key25": "3MpStpmGkerWnJbYLTAenGzVfqP7AJccd5FXEPZetUQCjrWHR8z19dXaCdNavTweuVLxw84iPe99N6G2J7H8GLDC",
  "key26": "3c6eP63Gc1wBK2zet8F5BkzYkKNZ2c3taEHJ7WWBLftTjhpd4p1wAYX7S1GbLAV3VDxSGLX5SZgSYKX7VdyPT3pi",
  "key27": "47D4xsNBoaRywQeg7R96amYULse8C6BbDn8BfPmsS5NNa3aciSo5kaZSwj5ZJDwPL92M6xs7aayr71aHvVVSgRFv",
  "key28": "39TzqssTG5rUF74GvrGy8wWt9MaLgYiMi8D6bEUnXzqYJBdvzy8CYWUokvk6qwMBCd1ujty6zWmRMPuujf442rNK",
  "key29": "3QzXB4Wu6THtyRLtcAcxCHeT9R69STLhwVxmq9W5GWhUEtPw3ddAtuPokyup1wAmLqoNNgWjcAWktbt9s6qWRGp8",
  "key30": "3HDL5uARyYzhox3ZZLsYGcB39P2ddPoeuoVCjVicgFgk9M3aZuKuhCaLnm6TQf9uCSBMbgtfUMFUXQJyb2U3WrEL",
  "key31": "5pa9JEFWkm1nJaYfQxdVT5fbEdFUbY19oP5hURRN3QAtqqH2A1e6Hv2uHB7WMAMQuxS2j9Aso7JPJF6eNFB9hR5u",
  "key32": "2sgU9jEtJtrh3EGN4uQuRCgpMDZetqHGABtLo4YYSgHrw8wu5ofKBzo9Y4CZYNdETVdAkiHQ4epVqmfKGDLnwEfQ",
  "key33": "5MQKzWvT2eZtv5Bk1T6VY8HTdXKXkEbEPy9N8na12FtbNrPEKSKtAQFfgX9Lu2yQVfASRjDVm3EDCTgoQPhi6Xkj",
  "key34": "3WFHwdgrVY2zRR4qa9E5WuVYFaCfZNgaHYe4hTLHwrkUwe1vATHe4GbZYGFsy6VEVNLWYz5hVqg7MFPjgfzvukq5",
  "key35": "4wmKUb2wSpUvA3KHTxh72X9BbAH3VfioN7U5Nu5vbU4SeeLY5kBpHHiDaFDjE1bBVL83UcfzkgZ4jrjgSoRnYez9",
  "key36": "3hBoR8ojnK6QpM22fZKSEZUqb8VPZCPFjTW37vqZG3vysZESyWo9CEQjNhZ9WakMktzMz8KdJyNcXbofeMUvSkrS",
  "key37": "53H4ixZ5YDsatm5ctCo3ULMmKTMrNdLJBRkDMd84SLoeCwwEtQ1jNwfMzrbAwS2Bjd1kEWcAq1nXFDdWfiJ8ZBYE",
  "key38": "3p8Z3tiBQVSUuBxunf95GXiCyHrgKuxnSM1NYTMvren9bLUodqgsdXEj66ToSXsF7SSnenJ8ecpo2pLTQByTuaH5",
  "key39": "4B7Sg5AjTtGq7MLbEBG6hpNoc23dBLXADg6aPCAkt4vE8mmgFiJATrBnVudDwq926QMg5edv296Pjd8G8o22XuYJ",
  "key40": "5RYFG6aXRVC2cJFgFhTdqpSrbDs22FCa5bxm8wshrnDjPS7YEZvJ5QAKzzFz9XLbAqoiwNy7gV8feWZusW4FMTnU",
  "key41": "5nDCV2HuUBGPYriSWHqrira8ijyBFAMKyzoS4NAo6k237eVdYxphiuhPQ7ryaFXLLcKBQoS4iw5rbFQgowMBmWzF",
  "key42": "EyyVQJVFH9YPyq75aNc4B8U2qjfH5cGRgUisYLmj5oJvywUZy5b5U5kYKQXU6tnJaqvs4FaP5s7MKCv3oU4dv4W",
  "key43": "36Dbvwq6BadSXDYVMm4ya8rERPk3VdZGzao5N6NC9x7NWB67PxEVhwxNgEUakUKRt4LkpyrrNEPYxaKBKR5GVRDQ",
  "key44": "4BLqdsmXpuu6GwXa9s7vHbZN4WUP6t9rYn58hhXx8GD6FyGBd2fDTa4kk1zDUpCUeCoSdC6iRqa7xjRBG65D4z1h",
  "key45": "5R9LzL15FXiHNwQrbBD2zNbGmbBpD3VhgjhLmwY5Sh7RpLuPFwTSYQX42aSNUPEXRbNgwnG3yxZ177kqxVKNee7V",
  "key46": "5ennUv83jH4YsXherQxpyh3p9Gazcj26WSh55fnXPji9eBJW6yHbnsiHzT81RfypNBVqCCY1NFi2UzpSPDjonuL4"
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
