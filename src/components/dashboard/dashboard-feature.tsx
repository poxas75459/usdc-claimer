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
    "3u4S5xQScGrQ58wc4HY1pEA9z2nnScncJV4osHzzeX7Tu3fLUHySmP2UgrtTDVJ3nGeEaKQ2dtrECQAEMPXon2va"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6ss6rZcU6rBVkSLZTPbV1hoFuQB6u6Rf4wpVQ3SpGU3kbukEPBZquAcLDxnQrfFmRBcKSvb45tjAwG7tWEgVB1Y",
  "key1": "36kiXSEt62V6FfNkWPPceNPSJ67qZ5MYqCwZXc7p96VnFTbFSZQKpQ5wgqTEBXSesLQJwQPdCZ5E1CDFJbTSX1s2",
  "key2": "4XenftrV1EmCsX2eU6PTFTnSuVuost1M7rSX9VkeBLtup46qpBdMwMYAtCBtW8SXzz8oFokPapJarBw2LLCrhYFn",
  "key3": "5ytqH6HTsoKYr4uChpLJG9zPjRgwwQ51VXmtZ8rapdxN97VurufhCwttXvAoqnuM75Rzvne1WsZZqiYcLtQ36YZn",
  "key4": "5pA7faef4qY6ePUAudz2vm4Kyoh3DM4EKDqHTTYjV1UGVAqWJExrLe2xY5CBG7CJuGyYi8rqFimzZ3nZMfGSVz8f",
  "key5": "2nBU7Kuditcuidxpf2FHymoBFGLF9KtUBnKAuGQufqtHJ1BS677Y11LjrS9vHMWgRxz5EqCtpWMKzmQyMHB69dj5",
  "key6": "5mN36xFSmzqemofGiViYVtyzp5LnBw7VBxtuFr5g2hR8HLMrb851QbKrYHoCaQYasGQSPUTv9XqYdPfpkRCEjEr6",
  "key7": "2Utx1gN7kky51ak1prsETnc7uqgG17Czo5qddg5i7hvWGm9udJjhY1G6taj8keHWkJsuVuQzK9J6o4DBCyCscoTN",
  "key8": "5MVB55sC1XdRLipMxhedmU8TQWPj79iLWRCtgsNQXdkVQgFWvu3QuZ4nHXTTMMpJk8rF8QgLFvWNFuCg3gvZWWqV",
  "key9": "4MD2trYobXFSFiZdKE7NbWYip7uj1JHur6DNyDJqCpftJJdCHnKaU4UggGsAgiU7pYHw5dYQj416UHHmf3WjYGfC",
  "key10": "5bpfgkEiNaVwJkWBaMXvMmaqVKrhqC24f4CjXimSozur5FZ3bAwfmroMzhHzWBWg5xcB9uLdHfDWKdarXc5KQDaW",
  "key11": "366vJaTfVh1DuSejSovTcGAecR1J7jTEzRN2rCQfzRSGPyBBpCH9sWQzyo4JkR3CbTUkxbdFLU3ys6wJzDH5tNCE",
  "key12": "3sQsVkEMaTZsohqHWm3wapoaEHCGVPAdSbAwwdiwFrPvaikmY7ghwWCtACqKnDZ4qB47aBT43aqgWCDKoiabgSc9",
  "key13": "3tY49FZWsybomdUSRezctJgVcBjY6jugVk1rN2V35bPW3Vni1F6QHgtpZxfYBQci8zfpfLfW7aaKFk4Y6trUDDG3",
  "key14": "5FbwJKQhk1nWAANLUKzEi8aBqxK1CeuFEfD1djx2EUF5tBaPfh7NgfuwRbV49MbJ62ArBvg5YaKk2ZLGL8LAGuNA",
  "key15": "3r3W5rB8d9RD8p6ZaTJo3tZetmdT29h4x5T5TczUsyViczEjJuQ4UNft3p3L5dwQ2vZRKnvSUg1cVQf76fPRBRzH",
  "key16": "5FSnaUVyGRMNd2ez3BJ3tdFAzUa3eAmdtKQb9FsZCF4ApuSB4XT5NmXfpQJH1Q6qv6nAPMABDsegVJ4CfuGmiEMD",
  "key17": "6663YJxn7zZBCMs2ejQn63CnKtnPMKQyEnxkBwNG4E3eMWgfm9C6nDMsfpr7dbe8Z5wwLFjR6EvYNZ5fW7gn3Vdi",
  "key18": "2FrAhTJF7boALGo3BwqgeQ2y76DzqHaMvdjrCSddXxGyPKF8bDBwjLxpx6LPj1FRvLzpMHn4Ay9P5P844VV86tQC",
  "key19": "fU19n4PseoTVikZZA5q78Dof76zJ7cvznUJL3NqwCAekHn4GRoVBdUogs3LHPs7wT4kmf2eGMf8AZgrzjGVXoAg",
  "key20": "3xh7KuPsTGkVoegE6SKvPCYcJ2y5zmkLZGu71nL8HD3vWr1PFuBMaNnBdgrgyioX6QYB5oL2UF8ppHX1VLpeVYzN",
  "key21": "29WBfjx3PnLmvwfYPqBEJ4hRwMwNbtM6s7cQoP5HmjSoRP8kntquyh5AqnFzJHBxqikKUqRmuZahYYwr5edZ8pXc",
  "key22": "3vFuxuEwcuFAqT34hGyXNcuB7Kfvd8sEwcsKDqVSMA8VN2PiG5KCS84TV3F6S2D5iWVwATLm8yci2nB1fa4Z6D7Q",
  "key23": "3K1SAm2YauKXr2ME5a4jFahHTuvSnMPJv1psqHbLebG5iSgLXJjSXRRmPbRFxfzyYMMGZyf1Ntb5fe1Y4CLkaF2w",
  "key24": "2nyDx5KBUy4shYWmLeBA8DE95Yr14MqZktcrfKYhaSdeWXbuU6BqRZJeKwnnXxDwAtWsUd6MMnYPvwi8J5vmk2Ea",
  "key25": "3BsYjQnhHkEb6sQ93u4UtGBQWRS8z9NYaz6utTWiLZJdBLaRM6yzVFMtwij25Fq9zcFYse7eoeRmdmMyAhwEQ9GB",
  "key26": "5RfJVmfZN1B3r4mcnyk7RFFWyRysgkfuq7MFZLfLqDfbvB4ixQBAM28tjposDHmosX5xRP5CERTLkhhDX7rCLtw4",
  "key27": "2HxuP33rduWmy8GNwQauBur4JXzAf1iK5xiq7pAW6QNiYUSmDKFq7xPBkCRhrtxyFiTcRHbuuq4mU5py5rwxMEfR",
  "key28": "Q2S6goGZjeL5Af8DUL3TMcsxsqB7Zg4KHKG9WzSxDqCA5hAhXj4VNYq9z9MS9qT1SZHUS18pM9oGU75nqXX89nL",
  "key29": "5b9p83VsYCJ2gekLFkwkXaHtoRE231xVR5h871xAqmNFxorZEEYEBe6QGqLGa2oNSu7a9v4Jhn21Sc1GGKrkqvvQ",
  "key30": "JPG2DjUPpz8VX4QXX3FTkHE7fti3ShQsPDv86gpcEq5dXQrUArRYyqDHWVDWyYUUPkqXgv9W5LwaSbYjrbNtem2",
  "key31": "2WeaWygvwEq8qPxTgbbodqL9aVup57Fvej7DKiRiWWunzZjNFxCN69rAQpEhedmWtaCz2YSbuA4FBokxGuTrSR8P",
  "key32": "5TxMbt1q6Zgf6RQsakgsrAnSsQUFvkHiocrYRMrtXbdk2u1niqe5HHD6LDtmHFdTiw87P4PwthS6h8ttfq41KdXo",
  "key33": "4ttP6wwtS7nuRiyqgAsKCxmPPLwe2EC72mDhVLDoNwpLzZZgthFqhsNuCuQeoFNBJR9zg9NrPj8i64f22MtSWST2",
  "key34": "2XtxsRmV6UyponNBSSggzhEVeVbHmXiHDdGEqRAbFE1ybMNqYCMV1xEwbC43JnvuXZLEwBD5LzGuygMLSosFsgFH",
  "key35": "2yypXtpwckXyqqVpuoHX4Q6SwFpc63tkPQEEkByLQyBYEdXtZk13EATVDuGLTJNr5ETBJZECpXjPTyiJckgLNvKR",
  "key36": "3gpc1vBQhNWDQG6ZcFx3crCrbdHxKMEroUzh62oymzfFy6cdYpNnVF7vZMQKvNyM5EjKL27A4KKGo91hfYdK6QWJ",
  "key37": "5W3YKs5kopNmTmrtjtRSQC5Q9DEq1SJMR2nZKPnJW2GNrmDkhsQTBjueZW6ySfK26teqHzaR145TuDR53mwUaoJ",
  "key38": "33eHUERhPTzSSSQTmazmFRkxeEx6UskipoPQkfty7drKJiQWLAWJ18ruxPFzCsofApift664pU6CZ8GRnPhqQcav",
  "key39": "4zNuzzWnSauyYLQ6NhwseHW8kipp5F2T9KZ8zXNcFWsf1SiX4n3p8L5cZV6mpkVVc6GAzrcLENNFrLGnU9j7di1V"
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
