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
    "3e3ksX9qRxfwfWokhbLciK7gyrqpACwp17msSH6jmUNtLHSZYqK2fkQs2wmB56zCvfQZZ5jeBMWzJpai3KAcrvRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HwALj3eTjTZ4yyXNR6y6bpWLkH815wDmWvE1Ye49MaLwTuZqetQ7tVKCh1YttWEBjTuHttcZ5YytRve2p1FQBSa",
  "key1": "x7Ky1NKWbn49fhvHC8aB8CqYMEZo3NCNgMtESFKsHV9iUSHXpHSnv5e1VRS6LJGANANnHYhbCxc9WvnAudaXGTE",
  "key2": "3c4gGRFCPK6RZh4BQZ3P8R1jDADJDtRdziT7926fuPFQ3xYxwE4Z68RHS72vGnJjPZLDs2iukmQYwXRpnEgSTeJe",
  "key3": "3rW6CEpuueyjx58z6rYq8kidoZxQX9TXDEtcqmdBsSmPh6VGY4afi3G9MeQinaLbNcoryfhHf5xnh8PxVQC54P4L",
  "key4": "4HzNnotQZaLhexigCYMh8P9TpQDJU2GHR7a6YSFcDvDQw1NuefadhGVu6UppXaWDE4tHvFnc1vhXVSKcdqcQphvR",
  "key5": "2H9rPnKxfQWHFkttQTQTvj7FneetzMsYEUYx2ipXyqBkdJgH3VnnPvdhKuQzAvmqUWdUjYMnSFEoDgGQLcz3kDUM",
  "key6": "4uGMsXG5BuqaXC9zvPnDb4px1jwapYwGj9spF1KJSXvqp8coHCFDQACvjD8QzeNZ7ZNhHpSZg9HhUTzWTz2psbUQ",
  "key7": "5iFu2HPjgCudSWMTdMaAptfEYLZe39umFmS9Nu3SmKkP4YnpUHuKnrf2XBNE25TiT9EQ11VGeUqT7D46SdD2M8M9",
  "key8": "41asceh3LsKHA43rqVYk6mobJXoPfXGT9MTFyt4UPWMVNwP5WukFdBs44115kDYwkSUeMAFpYqbPFrpAC6m29dMc",
  "key9": "423vLxsmK676EhMdSzcuBpnpsfeyromryk4Zn9Bd54PCKAUxDWpq8YLtwt4kHy8JDHTZbcq6h63DkEBRLz7mfJHH",
  "key10": "4CZVx3iqmUspUAZ1j3mkpnf4QP7qK8jE2p9vMLoarMvJ3kXcw75x3K7oExud4SxFXxtfJoREeiyV5wBQCBk289iw",
  "key11": "2CDkttnECWYuRVmzKjmaKSEeNovz88fNwMgnhR8dYUbC3h84ydupwJY915BHg8z5YU2nQ2Pyep4WhA2UhvZeGvSn",
  "key12": "3xfGX9SrimdezJjfMbtP8pnXK7qcZfyRDoQqoVQwB4ZWtS2RTjEmiakEK3RC5V3AFe4iLstEAfnNNYBDtJVRRFbS",
  "key13": "4tktPp8ViyrPJnwb2dizpkdgZipWRCA7NTx4EwV5Nd7pdYe251ipJzLzRyeD1kL9VhD4MtKwmpj2P8KNhvxFzx8B",
  "key14": "5HWNZo5xyoJv3Pd3TgQJF4fVGbqPWrp8kfU2eCXpYqR46KYzMxJZL1ezCNK4emwkzDEhuVq4wFMgNDEKWtwJ9R8T",
  "key15": "4ihyfs1HWfw5cvuP6rSfRuRZsC7s7Rcp2Zc6Lnk4JCGGMtQzRp6i193Fi9ELiXCPaoeHQVFCAdaMXCiKXoBQ2vm7",
  "key16": "iUoA7e24nRWKkwx9aLG37UsqkpXueJhCdE6SvzH3vnGmVdmL8v21gDtEEYq1JbZBZjCg6nPW2bEfM4suuH3rrym",
  "key17": "2T5vP15B4Z7ZB9JqZw1HgmpXtaJE8XwstKzMwFUkcmFUCdLo4jeeaLeKCs3q1pupie9PCmdvEZwWvdi9oqwxf5An",
  "key18": "5ft8z8Z8toUPnZCu8BNSnwtueRyvHULvaRChJievCrkcF55w2jCyTM5LhiPnmNEBBjpYN7pnnkRh3H7M4ALzLZVx",
  "key19": "4kLNzuTME3S7qXaA6oHRku9nm7WxbDHUgiVWequCCyJz4jyfZCoNJSgHegSnZgnJ63fJLyrvySKQTYrrKiKECjmf",
  "key20": "3nrPnfFFkV8SELhWQLfG9WUw49XhpdpMTcWj4MrCZniroyLdFVLf66FYwC1JAogT3tneq4pYQXD6yEbPxdSb1H3A",
  "key21": "4R5EG2mL9BFrauUwp7ZMu8zTHedVHeWr7n2tW7vs7NynAZdgjU8MCRnHaytK6Bc16tzwPBxRhE6AueutBhXRUmgV",
  "key22": "NR2nhD9JabexNJnHbKxj8r4nZUiDXKxPk6BNLUYb1Lo3q1skvuyuhzR4dkLd2kqbW4gM4MriejcMpgMoYcK863t",
  "key23": "4EgmAU9CngwfLThCpQrLF9sFSKz8ZqaiLEPh4khBmRP1EPukoBEnE1UbjSriM9pMAdTvR9y47tXSCyHu7fzjUPfe",
  "key24": "4eWiZ1oxkGw53PsmDLooiLS7124f4L7NfCgq9GptJpZgh7XNuj2pCAWypM5GtrTB3AwV5p7Xp9bWCYtuQ7EcESFA",
  "key25": "2XzfnuSwHN8o1X3J7TS7UzbKhcEKHxTcvNT6MCjGHcERhWnP1414Jpvga7q8iZ31ckgMoRPRY6YcpJSsUHLFzWgX",
  "key26": "4W84y6bG3uw888bKE6vd4rgSgCYFyptjHP6RfcnzusDJq955HC4tNW13zLvCBzRU9SZg398fr4rpcshVqWspL9xh",
  "key27": "atfP4dSAxDuCDnn8VXDXe816tbxmXR4rhtbh1C8EKABjSCWtFniBMSbm2R3ngEmzD6aEeTh6ntLaEYyQwZiswV5",
  "key28": "4hPT4qHGwEnFT3GbiWv4dRbe3pAiEXxfGTx2KnS5EkNZ1vN3HovvynQzgCdRewqfdHALhoHHhJueEqWnZw3yrVJ9",
  "key29": "6ZfvuavTdmHEzAnLBX6iP7Vb1wmsgVS5TUBNU9sgkkTESyv2MEMdKbW4xLQFXCdiD4BZwvfnHL5J3H3aEsQSPmr",
  "key30": "2N3Bw57zi6SdYG99chm8cuxSCQENmAURLhM2Ms52dWBfheEPjGGNyiPLz4Za9B1gxfYBwGp1oXLGVB61c3kYPdFW",
  "key31": "5S63kQ6w4B1PcPHCprhP3fZKsuUwH86aJp5zWWNxmjxUH9zPxkafjPaeM9cPSQYsBStLmbViWf6DhdKkicoCHabB",
  "key32": "43t5zXEdtZway9jnCaMpb8aiJGHm2XkMvpLFKazAJd5FT3GCM5bnvfanqEqWQygG4ZGP6L2GodjNWSBxerYdvtnm",
  "key33": "RancfuWX5f5tgRfkSL7yY9kx5ePc3EsNYKKTgHRUirLfNDr1u5Hq4p2RTtaYXoiuSVNHnVxtd8H2sNhMtbjv4Qr",
  "key34": "4NSXgsaAAgVybXpNpggcc2dpTritomabjG3bRrTiRDEMQg29ymvFQPX3e5GvRcfixP2ZJkSdzqcAFg3YmaykPVzK",
  "key35": "38gwUPhZityRKrBAtWnLWkxvoXSUqaayuMMBGJxfwcfaZxxGEfQeQnFEvT6RSxMNhVFpyLqox7PgE8QpxyCSMY2J",
  "key36": "8Q1xzrETKYrUTjoVxf8vSu5GxGFm4hCyFjVyqjyrigmnX4iMj2D8MKSCgwp2wMyFj5ornrwf8QB9dF5zahZSBm2",
  "key37": "3ywzWF7ZNNF9yBfSDPCpLnYRXE8sjkbVU6xcm9x1H2sgbLzXRocPaiypeiyBkAsFzBVyU7JbqAM9qQ5fYztkeP8S",
  "key38": "4abj743TWZxvcHUCQ8c1Q2ec1dCmhzWK5SHKHGsjrkfoAtCPVMF4w2YSaZ7j5sMAyKSVATji3Q8AVJhGKMdyqRqh",
  "key39": "5QYcUJMgA6ejTxnne5m6y7yGqNuaK56kYacPs6y9MANvRrNCHMCKA5dTj4Xeywyt6WiJBdsi9ifCoCggf828Bhd5",
  "key40": "5kXH3C3J7kxr3rSejuv3i2NMSBeyvAe5vSTVyJYrp9nfwWHFNANH8VL7k4MQSD5HMckvMA8CBnZCgqvSd1oVtdfw",
  "key41": "5xgULxr4VFeTpaDVTKwRZUVVPvm6ZyXFYCfHptZJccXsf7fJojoz4aU9fKYVq6Cd6TGPhr8mTsejaFnvRi6tq3B8",
  "key42": "238W7Ze1kiNJTDFg3Aotb2Uu9epnW5ZQewngTeZjkuFUNs34jbb9zJn7TCXpj1xhUKpwdN8e8kWXuHEDh8Ggatsy",
  "key43": "4UJtjwC6wBgQbdFyt2c78oVY8MWjxMT1iB6PKb3PXonZCsSbcCy2imiRZjrQL93rZMgd4UZtsP5zK1hiC8Zqi29n",
  "key44": "2JDXeNxGjsUX9etMjey6JkvZkHpBgjiwTA9Tym2CLTFCBvE8DVfTwdWc77SjutGRJLCEGYgDAWfipcazCGsJ3Wtj",
  "key45": "3PSKtpGstVsw9NeovufHtRjsGvZDxD4mgRvb7MT3M6XJcqHVSuL2R5L2yPUAXNxF2NLVPAruFvBKhL3G2gtebwfU"
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
