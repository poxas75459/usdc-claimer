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
    "5dJRS7H5ztBzqLsnro359iRdCLMg1km4641edzWsLgR9XEb6cBpGvXjVydSwNK3MvLxDavAaopnzT96aKX5qgGKE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ABdfiteMNS3awmwDZAdfm1W6iQtkqEvup2Rba7N8oN4mu5fnHjffR1UFj7Ft7ZTpn5Xn7fGr6h7PnPKctQqpF31",
  "key1": "2JgPhjArpowFFSbzyLrT6zy17eL9Cd9Dhi7jEgmu7Awttyaebeq5E5V44yZypXjP8vDU9QJF9oDwkfZ9YZFzQuE1",
  "key2": "3dPhuaH6zoHJK69tzba1R4fEx5Btn24uQ9Pe6ty5Xju8XYfMaYQPomTbrkbipEe6bvMx4X8t2rrux8aKAuNTcyqw",
  "key3": "5KBHXipgiorF1HYCGSHEcGh3LAJgnkFFPxP1kazzX25aqk1VNXBoyUnwJc8AL2fsoZam75jqSzZxpUwVTyN44whC",
  "key4": "48Kjd88SZaq7kv1u8giBFooyUyNKCGsabWxgzxs7QLbWiyNUnYD3TKemrfcBP1TeTH3bBXrivdmj7K5Cc1jHqxUV",
  "key5": "1Tbngy6SKXiUuP8uvVQEW9qwMVRdRiiox9bwTVtJByxpicDRZTK6gYBpQeJcnqSgCnGvcNixp1cbMDL5tmbQkqw",
  "key6": "4xABo9KQqznBggm3iYE9MdXRpQyFmrQP8FcV4kWLH6pLjKsspEWfkSPt2tkrUmhwbzwqaFtncHGYxBngKaCgnUNo",
  "key7": "5pi7A3E9ux7MKrBttcfrF82w2ZPxSxtzDvZ6DyCYt97fGqk51dwZA3Bo5WmQSVuqfZfsCojiYWF6oU4Ri4A637PF",
  "key8": "4jfVfN7NQgDuV1ryoxfwLJigD4Vwr8xNsTsbstBMBfpV25foqVAD3fFav6RWGHzTwgRrsvGz6T4wnDPqQRj9oiay",
  "key9": "3rVn5LkKnY3ypgxYVyxXLHVQ1xijpX4n8E4SVTPebq8XTZGSqHV7KCxXF9Eb8UjVCC9U2RueW1mFQRVNCeHYhbXK",
  "key10": "32oW8wKVurMW8qS4U1wNi5FWvKh2whKv893227QpdreBUt3NYW4Z9iu4LMsUcYCZnZk3RYxmsVXZUwfsAcRW3Ljz",
  "key11": "5ovyhEcPEBLyoFwjjzpxzJCTnxzaySa3hnaHUqXrwT3j7K72NuSBxENMfxTPqH5gqMWHGnv53VQ2kn47FWrJ9U9m",
  "key12": "4zEQF6YBaHHri2NNbLbEdKMor1CTgJZ57icFduWvcRNT6HE2JVgT9DcL9i1xUbadMyChM8p4TnNT8M6Uy7oXUT55",
  "key13": "56vswccuTMBY5hS52ce3TCw4QevxBFQpjcJsvMmoPe8koYLczBZ7tjPov674QbLA5D7DmFt74oyTKcnh28iK9gHR",
  "key14": "2Kibjzk8t78VBe1QVH2ubZWgVNt4a7GadDGwPVk2CRsnAxRHMgNbcPNY6WJ4hDHogZx37pk4tG9nhncu35wLXq5A",
  "key15": "2X5hEFgFAV6mUaWLwACH1qkZBRAZutBpCWLm2m46J3HEXmJuivEWXutCgUEf3UT4PNRr7xF6ffdGCbSjjoq7CdtM",
  "key16": "3wHrtsqrCmQtpvNzBTMRtxTX9cQzjGssx44sNni4YP3n6N4ygqkTPyd47uoNbs14kDsGTmE2y2QYAcJeR7yTAFtN",
  "key17": "2dMZGwxVSvB1gcnw9QCgCwCNg82BvWsRVR1nocaPXJPgYbo2SJA4G5px6QvjZubfCeKm3CdeYceewgcLjgX2ZycQ",
  "key18": "55HHJyn4XLZxLVLmeo9SiMQ9brTC5foACNX9RjcbPefXjos1KpEq8riSWCaTVsjnTCdoWx7q1ekw2HV4N2bTq9gJ",
  "key19": "5NVxYTK665jfUkums4Q78H4QNeggPQGfQSpU4WRbVdDg5GH6cMCQLSg2ecmft4193igXWE8sKz1j3RQPPzyUkNhT",
  "key20": "TfxwmkJzvu27J3UpfPJzyPRnKGrvAbhduLYFYrhDLtmYkWpbA9vizShREHBKwNuGh6NdZMZH9zVqXKFoWUC2ipR",
  "key21": "5m2u8gkEaU8sujiYWcfEPYHib24s9XN5xdFG4z1Gj8isbKzWWtNSqdiHPDeEFy6djzkKuYBXET4hmeQG5bwAXrrf",
  "key22": "77fqAUz95R5rAEvNSiRPEhos7gcByapU7MS1DTiBRaveT1cLrA61i7oopvB8xAs1RD845u7gCqD6rF3ksfqainP",
  "key23": "52qG26f99XyYMSirrS6RQpS5K7xDcTudCM7FpFhsCDiN2jwrupKAx59AnmED6A5oRM434WjDbbmZNTgM4Vk398uQ",
  "key24": "5DwBZYEjFarbPH5ZEMWPBGMeMj7RLM8r6PKqtiNx8oVQeXZc9BRvs6vpwTgtJjniBAgRGaHYbpEdDzUJgmsEX7u2",
  "key25": "5sQvhQ7JMian8EAcEvwV2XEBpcSCiaPx6g4qRkJ2ZBj3aJR3bZ63GaPd2JU8WB8XuvVTKSPqDFc92YeQN7SJG8Zd",
  "key26": "64GMvZ9Hq6qNXAGqptNtppRm5grXvZ57Xyqr1TLzeZ1zMguPVNS4SFZd84g1gJKUjznYp14Ha16pDH5ntxd7ovat",
  "key27": "3AgKUa392JsRQ3v32jNAJGMXGEX9zHUKX8pTS28MdX2XRmpKhgFsSzUDmyZbb6LEw5mQazuB8PkycmBjRpRLqAk8",
  "key28": "4r8grNNYAZh7L5nCdNBTUS5ipANHdsjQnzrAUx6mp8r7E8pw3yR7wt4thCZ9mPwJfgRN1Rk1REBBLbj3pC16nyod",
  "key29": "58t2xTx1P3UpY3CrTS44ge5aRuhdqeMDmmGq5uqz4qctZfY1qN2aAFQPBhXtw741zthA7egitz6meKvSxPpFRUkL",
  "key30": "3Agc9i1wE58qthCbUCY21CTuycHixjiasPcpESLmoyH4P4qgjtrxkZezd1tM9BqR85yaqyFr9hhEVxjrDwWJt63q",
  "key31": "RWiVFhigwghNoEJqiVTY3si2m898tibCPAaTvPf1mH7BqgkcZvhRkFJnzfnEVgCSj6AsuRSiyhs38g566zZhMG1",
  "key32": "56mg96kM1HxvE3RPK5PEQ22AVTgYPvYZFzejfa3ePfGLh7NQJ47EadXudPKayAK8AjQvxo9kXCVZiQX2tZDDA4fN",
  "key33": "qpjhsTkm8te8EaDa48PWhoB7sFvgfLp7ATwL83i1eVdY1R9AkoT7yf4c77qcU9h5yJq3hbBk4k4avqHxGDb9Jx7",
  "key34": "4W1bPYfTd4ycxNxHoZp8sN1sWsv3xgn7aiUkotZwGHuAL99hHnTjyd43wkzvwq5zmPaUQNmPsZ5w6JJEQbxgBpiA",
  "key35": "4v5Th7pqfjemjnCsPg1LeoQudzd7vwGe7mvDwDGNH1JsKBhmBoHo1ATivaEGt3Zfdk8ssjq4hH8knJn2X3dkqxaz",
  "key36": "ZChuh72X7wZ2jMMzsMAHycCZsKLp2xxHBogvyHuq4RQvUXY92WkmQEUq3amSHqk8vri2mpBZnum3NvFsbhaZLLA",
  "key37": "4biP82UyuKLafiveEUT3qHbu9M3n3d6Uz831B5thohRhT4qnzi4n9BEV1hR232NcNpReRMZY281MjpsVBwxsCxLE",
  "key38": "JRCBMj7g84CE9KiM2sNP9rUjjaLK4RARdo5Vz6T27NkC69PvN7h4oULk42Tc6XnQyxP9eJX52SzCM1taVa78iZJ"
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
