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
    "4Bo2Swyn7CHpKNUfuaJxKGhCjJebQaMfNJneyFacQPSrq2s8zPKWcen8nRx5Qg9UyNm4dbmfB2bn3wb9Dt7JFHxg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HYSWARtnvnawMdh1HFqi8cEX8PrEFiQRVmnoPurhQmY763pBcKFkvemfHkHkWRfrj1BkEBMLrHhcHKYQX6eJ3t9",
  "key1": "3ruYGK4LSoVCbQZpFnaSbuMH8beszZEJMju7UbhtAd6iE4BNXWa8GGi4FFwdU1U8RDNG3twzdxT5dzyNasDvadeY",
  "key2": "5vNSeH4eCfEXJWo5XAK4wq8dhW4MkCGkSmxnaVC15tqYxHGN6PUsQp5DvQ3zmThWSf7piN5WHFrCBXx4idEPwDUz",
  "key3": "2dRyr8pjVXUwGJ5oezqvGycM3Sstyab8Xw5zrWBo6akV9yZP9Z5tz3VxTQfWb8EvGzjU5jkyUMeuzpV4mgLr8Jsr",
  "key4": "5LibC5bhnn8gMnUXb6Uh1L75bAVyhidvCaZFRBxLCnWoxcLvQq7baMXWs7nv6qeUFVufgEFhoGCRm7GXwN8kV6v8",
  "key5": "FxXY9BeihSoaSLXDndFG6SZd8QE9ssDbzLth6p4ZopaZECZP6mFVWf7kw1Jqyw9WrDfbxh79a3chmBdhKdFsD9K",
  "key6": "s38c1yYL9qiKw2C2ywXwzwoy62rvF5oKFS1qGBJYY4utmHcFuo7HHQvnfwiWPVpnfpkUBAAVFYJTmU18BtCBEWo",
  "key7": "66YQGDEmPNhuUJExHttFCLZoHGLFGi6MCgPX5dHiPUibapuQdKUeh81Csn9YjskoRABxmsVaYCYNhqth95VHbfyu",
  "key8": "5vEH65xWMQpvYwQQmRUQF51t31eJ2XkmNpezy7Xzw1q9Q7Ndx6iLF6v7HXPkheCVwfPdTqidaYBFQnD19Q5kY974",
  "key9": "42RwQJBeEwHLc6LuqSCpmUjMYthTceGuj6cvF6oWAewJhLjAY14eUxpe3FcfE2V6A1pgrNastW8tCxsjGjEU4XwZ",
  "key10": "49EswQTjQqjTx1kFquzJQMj6iQspmPavUyomzxEHVBjr4o7MvVzzVowCzEnAiWQxnbrXGAHkBc1EFrDmkfJFv7qJ",
  "key11": "5YH6nT61a1952qouR4yYK7xyX13QW6vhXTw8CfTQRDj6WwVMVvj9CawfYDTLro4Y71XN8uGe63zJR3LWBfej9LZp",
  "key12": "3zAsApcnRPRKiE9nmyvinpzKeatDxPZXV8YQpFDvDu5wBHx7k3iVEDyxH1rz4qgXNtgiwbrh35BQj45mwJ4WGn4G",
  "key13": "RwYYKY9H6uFCui3x2WyX1czFu1mnLqA7wBCzap7TbdHG4V8CvmshTqZS8fWDhRcUEvGUC5qwLciNpvqGDegpNq9",
  "key14": "34ApQ3rkHj2WX5Y9G59Vsf5UCo1bM6DKcbpfojreDhUuNQ8NjTeR3nNFaWQTaYJJXCZs2XZ8sNk8hf8A4gcPBQMq",
  "key15": "38UiTr8eQEvYQqjz638eZYNe1LTWL87ovFyPZJN489YQAqx8nzUf7cd4aWneqfeMYzNPaPw3VXDLQm8i3nRaHoqB",
  "key16": "8ss7kAgT2z419k5mTmgbmxW9kicj6Dx234imTPyvcY4UVuPbhdojjT1C7NpvkZRvigjmsgbYX4obzKq1XE3en4Z",
  "key17": "3c9ThXvesnNoDVEaWJNmtLBwLyEH6BgZNywbmec5fmMDbtEvBX7nExtT5t7LQYReFaNgKnDK8PQFXuRZDwmtHqqx",
  "key18": "59vFsB95tHFbWCXTrjRjJb5dERj3cv5HeEC7m32yrMzKonktbxtny9ADHv6sGLrTQaGqRFzPwVcmwpWzsErJxaiB",
  "key19": "2w9KT2WTxETRCFsTvjeHPZ2wG4yAD8gBXpRmKSZWtr4q6eeNnD5fubhJp8vWMTFUWnKcwETnGcUbV4xZwybG44ru",
  "key20": "1hWi1BcGBqMgCxZX6DJsdxmRQztY9NG2WS63Cm7dUcpaB3R6xXiZk2iDszvYb3dxtLFMvkBBGfSTGgEwVZRKgg5",
  "key21": "4sBCFZR6dsxWJgNQVLemoD8xiRGT7GuorsYWcmeJpiHuKKTCgpAg76y9cMAiuHMiEDkmD8KbQo7LeCmhYaGfxuGE",
  "key22": "XwdhvT3V3rZaMxLyY5xjWZzs4RDta9wtdphk4UpHcCfE9cMZSgLkUwdmTTq33wPtMJsWytVB68ACi7boLAdTk1w",
  "key23": "La6ptTsQYNt5zRFt7XrXBbUK15yX8o3LBdrbqAWzuwP4GQe3hUxZYCw4c7w1VgLakJedbGkACpAFcQAH8727qQ1",
  "key24": "3kxefiduY2trobJj92hceLXdANYMF4hQBKfSkUT1YtprL9NWrNrrcyVPcBBXLHYHM29ctUNM8dXiMu82tXpXmDd8",
  "key25": "Cf4ExZjwEj5qaVjMZnZmtiPAVpp7MPPYWQADAhe5k3b3aYdwTmWu8tV1BHHNyBkkSuhaswmtzEW6dL17vRRceja",
  "key26": "3MLKfJcvBTXE9HbBe1VroKv1bRBrM2UoxyERxP6u46ca1KDJEH6DDfw2mySYp7AusJTafV2gpd8xVT3PtgJjcXCt",
  "key27": "4andZpSwPMCSzxbissrs5z4A7kE3Ed1pvVaYnoN1fHzBZ7uKzqjzuj52nBGGZbANAkRYMdrLWJMoia1S3AyEW2Mg",
  "key28": "4htD4o247GraTzDNW3Q7UsFVm6WVZmfc9C7RmWCi2JwK1bddm7JmPtKPdf5nETtWfVWdctzwA1cnmWxtaXzFfp5S",
  "key29": "2ct8WzoMua7bKLzbgyC4hA1yMnfNdPjHPMFS2bB1tc2Pot4WK9jpfBuuBUvtHaF7J2HcRDbWZiFGpNsfVopY65mD",
  "key30": "33k1CyzL5mSSGmFbn2GkbJsCTg5zF3pxQK6PmxJ6YqiEmUuztNSh4SZuLHb9YWssgZxuDEAaDBMpXHpMXrnKxBVu",
  "key31": "2hD1HGXZ34R5JCKyRraRFEuXE4BxZMYJaNgnhi9qpybBQc8XoLML9wsPNH3gwMzToFTzCk76tMDEuQsSvvCguiSo",
  "key32": "4Z2iWNbhP7ZMQTRy91mRPAnLTWhUtjTDfNawPBc4qtY2FtaeUCHG6u1nJx4KdmeKe7F4L3NmkKWuaXUMMSxdT7Q4",
  "key33": "j9piCnSQWkaWmU3JfiGCqVDK9QXpf6odHfgMLM4JnNSS8pNFWT9UZzEQxTj4DPdJdxVCU8EqQcU6oxbrovbaqwh",
  "key34": "5Uu9X98AVfpv3djUbVtLneJp6GMr7kb227AmkG7sVsWM5vebfTXPqqbfZVACxLwqtF1FFHHKaMkCP3Fqqa9ByAGH",
  "key35": "2ftq6m7Y5PAZxpmHmg6mjNRH7DrmXjJTBMwABhqdtKkiLsorVB2RZEDhXdq2PEdiyVQfDKmCtKupt86txTcGR8mJ",
  "key36": "3JrHgLFXArF1b9Q5MH24Ek528R6zAaD4ix4GdG56e6Ysu2NB9eSKC5x6u286SVoXFV2icqgHiwAhdF7JTQZwrWX6",
  "key37": "SvbuLnVtERTCmsFJYQ1JJBwkuRu763dsJpSXUmdeXeXu8nfmDFyNrqZiFTnXF1uykt7E9cLewEvWMm5LRrZsXf1",
  "key38": "5QghU1p7o12BQ91wmzBdRWseXnMdiUshc7E5opxobPuwKYFEZnoSXyGxg2npr9ur2N87up7NMsppnPPG3dgDpzaN",
  "key39": "2y31CyD5PAFE5qjLhmWmtqntNPYCi6r92GyHWtUDVWzxUuqQ5V8tcTwRtrfyzmGofoxXUhz4ZmGmgfPqBkCqNAh",
  "key40": "4hysfE7c4CC1VZ1VKHwRx6XDmc2orqQc1W8jrT4yJWsgMwSVVWxrzZcyGoZkUhb739KzN5uS7rvV31vv5WZj482a",
  "key41": "D5sXfT64toUT88476VDrCWnFBm6x6RW3K9n88h9s1rZEaQrp5vGNUxRcF9kz5WjvN4ZRHen7rXAiPsy8R1o6zVi",
  "key42": "5oumF2XBevhvSG1nBxgnBXLHFkGkuWZ6TCPFkB5Ve2VyDsTrFsMRW2cRZuN3jMMCC7VtzEH8k4RUth7M5d3bbC3r",
  "key43": "2Yc9BPEDq7Jdv8RhsLFdpRTnQTpLCcTCgsaaV8Ti51JGTxqyR6nGJ3vvxRFoqmQTfP7uDJoygMAg4GSzeigu9zUZ",
  "key44": "2Gt8wtFwheUKGicNKwoHERzatnpZroK5zbpRfTj65rbQu7vzYYokjQuSGxpFxV53XAKSSndxiqfnp986bdmwu1vg",
  "key45": "4LSY9EVBQfFCmSFVuV6XKbnedT7vb4uiJ95rj9Sfx1hBJ7M9djqnvkvT4hysUg6DgiYPziCAMByy11C7JJ5Kn5pN",
  "key46": "2CfjUjrbYBHbVgqAxSotwrV2vXW5d17DEdeLMogfo7mxxjJaKVUYrjDTGELPVPXjZkhkEtkDFNku3axhjxLt4wWr"
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
