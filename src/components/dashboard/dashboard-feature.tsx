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
    "27xsg3zsNnMpZ8pWxRrBkwa4o8KV9z5kQHMXadvM6U7BR3xwT4FHcLiEZaernzXdDaNvj6r6fyHyp3x4Rf8fQf7L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QEGGc3FqexhKQF2eYbPkzM7e75EEFHenGQGpFUmi4kjFcWdsvPnVcyxdwiHRQ5k6XALMHm2HkE726fJRp1Nxjz7",
  "key1": "4uSVrtjabppBNnrcXTWpR8xq5hj3rjCX4tKocunFcFyfyRfjig8k8weoJLV3zmvxNsAJzK5mLgcyiNyXLuCuDUqC",
  "key2": "4JgYakLEqWo5kL9K4JgW9zh4aPZ44idz4CsVwF5rBUBXPXkg6ZFqFFN1SRu1uKT2NMs8e3j83n8Nx4nJvvwKLnmF",
  "key3": "4yrbfapU4gFnt1JHUNXs6xcem3uTohhznWUg3CqZLsDhMDZo7P1T2f3mGBSKJfjUCV9nRL1kqAymnB5EjAkQkA2u",
  "key4": "65roS5jXZoLN2b2T5NHVkv1my6QDFcbWYPALVmT3GPQ66TLNnB8wzQuc1rQNrCVwgU4wQkNK3gVowQUKTstSRMqn",
  "key5": "5R8F9j1wHeonDeMPyJyMqobrDuGkPcrj1fzQ63GG2odkW3X9Rswav9sj1MenG5RjNVXavxHxZQ1hCFNqmZvSBCAa",
  "key6": "4fntg7JDLGB8J8sEsFyerBME2qwnKC111piYdASfpSddUTgvh4T64KDUQeJ7m9MYBpJdakpU5aMgND74mDX12aiY",
  "key7": "456HkufL3WJQ5Bi9xXej9F7jyuezY6mzVzy5jqmHR6jb8P4GT2FKPpPWMQG5XcmvN99iaxQi9NmgrZJyAeUVDUXg",
  "key8": "37QVoJPWG7VgHUHyc1kZ5Uxus8er5mvmZZLxYZfyi2xvoxkXA1kurZCvXoDVgQmGvNkPQ9dHJp2xKFmMGGtoAvs3",
  "key9": "4GJDMngQLA5qy2hQZBuMhWoowRB1BZbTy5WuQZF3y1eTBSP79v1Y5GLR7FuB6bVdYs2jVrs8FM8qbhkdV73an3JU",
  "key10": "3CiTatParPzXYAv67qKznwxuggKXZo4XaPQv9cTnPcUAfmj9uAGSR6n7RG5zLMdzHVdHHfYHjPdqpaED6LfEMstD",
  "key11": "dUEJLriDGMophnVDbkQK8hUag9bQavwvs9e2t6kS3BSeQQrGh4pAKiUi6Lab2TNcEaLJ8kBiRtXJBBRdzccLeTG",
  "key12": "5P9tYpH7FtpgQCfk7FcWmHBCn6a5dcMWYkUyscRcbaHeiwcuvBqm5J7TuFHLZLn4ebRgbrSd5S8exAkFpewhSCph",
  "key13": "64gEy24oK1Wa39sz9SUAcqaJSbFLuPHtKxFaS4fWtvH6UkYrua6pqopYdAVCBUsaazA5YhcPgY9o7o4R8cv3FQzA",
  "key14": "3mezSq1pfUpjiAiysF4dCKeRubx4zv49SSFHAkXPqAzee1QWnyS1XJ9EVcGsaDPWRmJTWtRpbfz6fy5qMsRdzodQ",
  "key15": "2A2Gmr2dRPChncU2ct3843Lq6PD5oak3SJjJ3yMhhXuZU9pt36MSw3VbrNsSTMzyRpy3Xov7NqQH1FZQ28stnBSV",
  "key16": "5hkVYcfB7gWUJaGq9A96MBDyhXYAPjRyqF9kReXpmN2o5gwc9AoKYkqJopDW7ZCHZcUtSpVx74JQpVsH3h9qaCcr",
  "key17": "2zFFVadCHZAqmjqT7nX4DrrJ8KsVXvxymsH2WF9mYnCpQrkTc1sGt5w8H4yuCMg2hp1PK9g7kgfPewA7Pz31Egop",
  "key18": "4XEDKS1cGpmVpogqTjmXPRpAEGi6zMRt8C8AWiNHj3qcKfkguSyu42mJiw4akmHQz2dUgPEXabrpAhoQi2Lwgfta",
  "key19": "4MYLzHZrpSkh4cqnEB2cmVjmj2jfMCo14dym4JWAkWmJR5W8RNqxExWNXHw976xJRFbTDG28gWh7EkdppkMhecha",
  "key20": "aZyoSsWK8qTmiEJALgCkz4XuqW6M8e4tDqEAEKz1HHhYjFcTtfcxrPdQHQseiTQv9kRUtG39vtP6yKcKCbD6nXC",
  "key21": "3AfpegKoTeKpTCVdGo6Ekvs7MonF6W5WS2yduFxsFyoYKhgVL3YTxUCY8sW1MxgVVRBvua9HNAwFnv282hS4qzPj",
  "key22": "5DABVEddk6htZWKs8z5SAUsDt4eCL8xNj3HgoUK7Ndpo7pRG1yRcxgKNJtm9rgcs4HpxQWqndf3vTGxPEsm1JapG",
  "key23": "cvZHGsZ5MhUFTnLq7ycqvVcmPeVcCW5EhbD37ChZs5BtPYESgzZ1EV2MDsCuYH6ogDKDEJzqvfxRtHW8euhioej",
  "key24": "5vU4pTePifDb6HccNug2VqkBxiDaeov799Qm9Ka4WmJf26A8QbRtJyGXmb5DpU63MrNaCz1v5wdogLsG55umTVoM",
  "key25": "4oW7eevdwKALBD79t1tr4DMCW1jLAGfC6FqccJxPABe5AP1vw215AzSwCWyzDK6Su1RS1uYKmwCdbEqhmpRD7MLi",
  "key26": "3LwbZkw9EsmsiMkw5s8UvtugV1ZipejDvBLFpxmENtUpKTPfbW9h2koWkWgqkqj9VerNuTarA6kh3UvBi7eEqcTZ",
  "key27": "HMHd3BohVZ6KUh2x4Z37oW4oKjShigkJwpH7Jt8jrgaxKuhz8XpcCio6vHW1f1iXPEi1pWc9Ky5N9fkK8uQfxow",
  "key28": "51QgeBtAdid6VPe5kmU2bjWX8xPgEmT8PMj3DNCB2CaiejSd4fMv4qcJN93y1McpNVpTwCdzLJr22Zd1CXZk9aWt",
  "key29": "4wTMcxyM2GAyCwZiWzr3tsN4MgoMNE3ti8jMR8dPox35EGDkdj7CufmVwUNq8AGXPrYARQLtkLD9JnN1oP8U1ggK",
  "key30": "278R7sqq6GVN6tKgxji9W3H1x7rxkRppP13quXo1G7JcC8dgUWZGdFW8R3ZRwRPuofajJU6CxjEWQ2DHRpdFt8NT",
  "key31": "mzGbFu5bVNgJVcQpxF9NMHFFvLm35AXx5P4S5ebzbz8y384P36vgpanmA52CinzvTF1fqstEQv25eVMKEpFYmMV",
  "key32": "2jP4ruRvmzrXSXotnuuXXC45N3By22jMnqhTgD6RBzEpzghmNo1WFM861jdv5jSiG24cGiq5MyhyTMNNQCZEqnF9",
  "key33": "RzraaKsdsoJ9t8uZAUdm9G4bnRp4DyoeE5dCZd6TaUobjaQTFRSWbX2NMFohVmFmZTaWGeevauh5jATbtLR3MqR",
  "key34": "58oGrTckcCgGkv5sgcuxDYcGduEEdiqrDWjv5xTYs4trYW7Nw1JbRQmaQQSBDNb2CGZd1Dygn9UsYpZUXikjFyMR",
  "key35": "2AbFVti6gnvzpF6tt5vGsjhprWCLdc8GaW5RLtzKwRZRnV4ZmBsn3ysi66oxgG2M7SEtTi4DQhmn2k3faKxRPZaK",
  "key36": "4pgVT9V5NwpS4yXTDFt4nAXyy2frbwMwaax5N8BTJFceNGufVH6dfnYY3faYDNNEgQ4Tf5J6SYAod6SP3qEwV8RX",
  "key37": "2UuwvRbowQ41dJ44DVp7TcUdNHWN19Za3ARyPTFTk2p8VFA2bvs9gQajq7soWZFZ9Sm5cmiTWFiXLcK9xTxEyNwL",
  "key38": "4p8o2jzJDS714y1FrHgRaRs84sBRXtRnQ1iL2peWFeGAiPPNakRpnsFiAp1ajQCmSd54hnWoQzC6sCzLXxR1PUjd",
  "key39": "5YS73xx6Y2ytjjgL4hoZRGMZeBc21oBymeQpjN6B5mHjir4aEWw1YuxKpKjr2HuEctnQCsAx7vqaCq1GB8MCcH5y",
  "key40": "3Z4PEcofeLdmrThD3c4p2GMLmxXiZNW2fBn6eLFHbMxxXSiAB4GJVd14ySbw7mhFdnCP2KVueBRtJ2ABsphHF1RS",
  "key41": "5kupARhhNdsBwGKqq6Snnwt3N8wJFnDY4hrX8yR5DUoUWVSeN3a3WdB4RdH8ij2oKf9m78qKKn546nQFNrDnR1yE",
  "key42": "4Tz86LuwXDf2AGuJanLVMG8pM1u3CZWCtP9k1rWE5ehwygTWvPTdtsHCFbdwzNwSbnizPoX9vuAtxrUTuZvHLVn1",
  "key43": "YEzTzH9LqWxvzfLcPKerfymC9vzH5UdKMPhkdeUFT1ke3poi2VdzRhKVvAhxVLhBDaZgq6JRM9QyCf628seYdPM"
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
