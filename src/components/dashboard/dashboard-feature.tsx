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
    "2WQ6yQkGFUgdz2dTpoM1C7vm616JuC651FWbuCkfTVMm8rdCRU1DL4dGpv4s6Pg58txnVrepWJw3jmRvdUQoQEhs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iWDi8sLaNnZuQrMHsY9Aka5Bj7dFraVk38B5MQV8owPy1xmBxWiMdrQxZTaGiBo2UigsQeuQ1qJ8Z87KJZ5aWtq",
  "key1": "2v2c5LrQL8dMXQzCAn93Zic4NxZbAqscNjjstBPjvYtBzFitB5YCGuG72QUQEMEZ6q4dk1XqBK19gZDMzgNMKMYM",
  "key2": "ZZycp2M914XpM7sTUdDQYgVKDPuvW2f8VzZWJd5FLdLRjKx5CAyRVdZsF9FjaobqhiXGhqmGnHvPUkG1jhvAGSw",
  "key3": "2CHnAAYDw9G67Xaq2hSBcLST2GbhK9FKffH18bBef4NcgJjqNBAZzjiPHgugMwVgbc3L6oxitHhBy5HNegPYNfxE",
  "key4": "2PAFfSM35fvX9PpxY5JEgVqVrMgNTuyVdi9QKyj3PkLipoDWYZkEx9UEjfr9whytWhYX7mopuUkrQAcpZG5VWazP",
  "key5": "4tkpFzRhQHDobSAGWinK8YqXNp59hX6PYfTeQQTrDhicRu6JyKMGCtR9AbDcErtjB1pjATuG6dJfnu2XNEJpCshb",
  "key6": "4bFWujz6QHBtWxe5o4CGPgDiS7W9KVLEkUb6NFHctGmGXFzeJLEoD7Cg26kR9u3ghHKiAYAtNbWMjiHyD4y3VKhg",
  "key7": "5kE2SE3er9VXMgFXcqzyCBRB7yJLoTdTzLrqANXrQh8JFDNUHG8MgcMU99A6FSokYASFcoURbvbKetPoURrZtgBP",
  "key8": "5o8FTMbq9SAoT1DTTVAKedWgdegu8YPDjthq4hUybYCPL9d3bxLtiA4GJk94bRSvEG4bXdxfTRmAUaUf6nwoxEew",
  "key9": "3cPz3tGbUjVPXrFxu9KxZsDikF47UdM9qDLbZUy7VnU3zjz8kKU5fPvzFAa5n1U4omYSdajikw8oPHUcCxZRT9zR",
  "key10": "eAayYvPNrVotqNuh431wfLp1S3WXdy49ajJXzJTASyYK4AkKrjbbkcaQNmfk3PxszJCrc6iphcSgMHba27HPaH9",
  "key11": "3MH7Uys8MmpzuLyxWbt7jkFcHGGrVNnQ51utPTkcNLEzDgJddnKgJdfWopeXhvcjQneiUNfzF3yvWKSRHm1j4CKv",
  "key12": "2iRRZPyMRt8WbYuUHdmQqiQWe1Rmecocx7jSgW6HBGGPme7kFPtFWVpxjkpxMKNUvq7XH7pbJvQWt47KPRKKoWDK",
  "key13": "4btZnhPG7oDn3MYUnhZyCeT7BtzgU4iWHGSzjqG5sx9rjYKsMHWkbKc671Fzweb2qHLpoDQUPAw5oSvzVfffk4Zj",
  "key14": "4u4hafv6TPYuq2L6oiShBPbCtSs7TSkfufdUfyMYK9Tj1o6LP1xzua3e4NJZF3vfJJdowpFB7L4jios9t7Ex14Ke",
  "key15": "3LUGGtNf6zwvsd4VDqZQXUnq6N6AjsyckySuW4aM5ZNfmSdCPWdsecyMbckm6bBTKcmi68zMVRAVu3B5Xsh52rA2",
  "key16": "3aMnVwTREFHL9iNUq8Ja8nuti7Msd8DXDe5bYvo4HFoGQgCQpUKytK9ySXNT3DbszLkWJW9Az3rbNZR3WxsSh1CC",
  "key17": "5zXMSzdksh19QmnizJYuqYwoPavfq64xBbNQF6QKc5DV1vngUcGApN14JQ5VcJhJRqEdJgs757eAaBEF3rcYowbs",
  "key18": "4E1AEbahRi6zU4DrxZA3fYbsvB9Y8H3jySQFvkocoDg2XVj7PF8QLUe18CXCH3uoeChDHeBhaZNigGyMpC1Ck58G",
  "key19": "SM6gVfNyXSJbVHggtv2soseFEUiDji8PwkGXi3YSPYaZQtKwKTuRRSx5nSTUDjDuzLo8iNLk23rJGSVQVY2wdYb",
  "key20": "47ycZuvG4Hiags8FrBry8SdhYVkRzqVkXqSui9EHW866qEwrJhTh7b3889rfQtyw1jEEiXu6GjQF6RbLJwmDu2dB",
  "key21": "2uGXDFKM79UyshXn4jH8e1RJM2N6fTXJsPbLMz6Z2MYuy2mHVRBGYFkCGGtdA39eGyRsWevcZ55cxiWDBLmG6j5P",
  "key22": "2sk8qV4Kci953iojz1iE8eA483DPcjerNP83XpKpxqKv63TkFoXAkstLwaTg9QgxzwdnNVVc7xbWw3rprUMapGWV",
  "key23": "4hC7GNpywECcAA6JR2WjYeTRhTU7jMwm6npMu7gKdCTHThWdSEYtuzb9CWf6Utb3dbZUEakWQZKxGvT1aVKgjJFg",
  "key24": "3fwLwDrimoFhKigGEbGVA93VMMRtsCWfLXrx8DCRYEaxbt2dycotSKR6n33aXLuRgWKyFRCfhBxWrZe8SQm72RNe",
  "key25": "5H4L9BA2pds51GEopSve2z5mzg6EgPaGNnaH8oqJ9QM7GeFoMwcBPa7RoHy3MoKovAPmrHe7H319ScyetAHi18qA",
  "key26": "48YWAVm9KuucrrNS4YJ7VsoC23wCXjyiTgCMHu1kDntVHL6eSx1eNPe7nyAhdymsQtcda4vyo2Lni28HDx9m6wkk",
  "key27": "54dETYvpwntHiFugEZaasDkHP8DwbAaJbp8XU2TX5yGND7RDsX3dvgAGvKD9q6pcRA5biBGeiPZaUURH91wsRUVE",
  "key28": "27ieXkfA74FMw6RcS4SzQFLV2TK3hmpikTdCcP2ZxsRGuecbrMNvU7Cupi38XLaxW4NTi2VzjSc5gnmaRHzZiaBQ",
  "key29": "fymPUBPiUAJgmD3iEfkWTsyZU385F1GaYB8YMU5NYPMRBfAFnQNF8PunpoWCSK84mXMcpXxLsosN9XeyACUhvDY",
  "key30": "4pQ1ChsuEEDAjp5EgdKKtFSQto4XL5sUv35q9QEX7HCgW3WaAkRJhQbMGVqMNRvx9jx8ZHPiXGbo6RafR2vYe5Gi",
  "key31": "3YRwV7xnUzjeG6jD5uiWApcqckQBcLEjbeetTXBsXkmnw7RYJy9H5giTZXSjFxVYJ15gnkxRHaC7rGTjBGDmnejD",
  "key32": "4zQkqRrcxrwAjwh1z8dx4Ao1d6XCdqqLMxomKJcFcN4FVuQEA6Pe8T9HM2aMwmJr1WFULYUWVq2qbAmXvtjYbp9U",
  "key33": "5agnXwL9SpbKTtUMHUeXzPbnLfizbLgLAn2ZK4xqPdBmsR3oqDKz7dpH4Q1kp9CPSfejXB3B1s4nmQHNXGUcpQ8Y",
  "key34": "3tbS3ixTYMjQkDNk1UMQy249vRzNSiNrD1Tx69GMVgJZBkL9tExKLVqR5o3kQrn1tyNkDGikPgsUADRR3TKzkcNc",
  "key35": "4xtyNYuH6Z4RuiGs73zMU9u6a9wEMSAqj8r2tM7URjVmga7Jpinz6wt1iUHvDcsbN99uRb7t6dKyrMzq8KkHMr19",
  "key36": "7fXTHvokG2WS93DMxmqPghrcbK69PpYcMAgtb9siFLyHA82zkkPftb1CSHAeQ2HctJXkUmgXdN1WdpE4ZLGLteT",
  "key37": "5LdwKjuUQyGAKY42U9tmwWUhcSmcyU9GFgxAHZtzmwj1j1Aa1og3ya7WJiT4KGHe2GwoC6DvMrdHHtfHkgrETBow",
  "key38": "5seKcCGKLkWHvSJXqUo6MHpj97Z1AWHaN6yJDPERBArfohqKtyDbfW1HXFEnoVCkbBeZJmj3dRsujUoCuFfxYw6q",
  "key39": "4ee6a8gPauvk9NWfUKiaqqeQELdXb4aAMdxXokBSKYf7f9cqVXTM3dHaV67Jm8cWGDXuDmffSCbikPstPBAZ4F5P"
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
