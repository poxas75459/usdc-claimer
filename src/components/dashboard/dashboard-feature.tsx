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
    "9dmJ7J6DhzyNDpuot2ygofemm7eqPMHQpU9XQNEC4jLn3VzNntkfSNEvkBwb1KzYK7nTKYujgSDv4KRLfqxBEiJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oyt4mSwrd4x1xGp16y2sb1pSrAEPTseEp7kPyQFfMrNygfsmkHMGwpCm5CKrqSUFGeFZbMW2AEqtGQDdGjzAEcx",
  "key1": "2AfTgaUEeasiprLe9HXF8tQRjb1xF3DKRGcLq4Mkv84Gu3cTZBLcMYPM1z8h9JggohBijDXnzGsrnASBwzXJ8ZCk",
  "key2": "4f5sNsRy5s4oGTTbYgi9v4VFykoQWs1G5RWTphLLyLPn8TJjD4XnV6FZdKwJVXQ1HFTQT9oggHgAfFPzqKsLiM1G",
  "key3": "3NkK3aWCHPNjYVTfyiP18cLsNR7uYduUbwephJ41HGRVGGndo5UbxgGEoDKWwjwd4xaQtwp7u48Y2J9FmxLP1j4",
  "key4": "2EcdAoiSxPCxPePtCMFUpTzttv57V7gdqWaiaGQLHARBfukNVS9NaCc6EVuvP7RkgPw3oeDz8JxYh2DBJ9divVDj",
  "key5": "4E1UaG1t7L7gVFBXQ6PBtB9UXaUpURixsWxcrvGdwESXNL6oGoKF3PxBUoSssoprVB64FBWbePrJqRybSuJ5d6rM",
  "key6": "5UiJunBeyCukkMoeRL8KQ9gjpoV8HEo7d57n8F42Asvx3fxS1NACJhiDCFWosF7p4UAKEknrwbH2ghEB1wTCFsgD",
  "key7": "41NvE7nJ7gGxmD4XFwFMqZFSoGpLVG7tn4oZGdAx4GUGjJySxh2ePVRHyRcPWDSbKFyNPfwv8YyvbZYPZRR9acLa",
  "key8": "45hXDF2hAeCPaTpz7KwztpjDxaVBagoaMYrSRQLuSqqJM7qD6viNAEvSBbV1Ts2eBRCjv15ZCahNMhhCbf9jEYsN",
  "key9": "5G656fdphouD65vVWqD6z4xibeRKgizycRBCe28HbVLxbVyMj5MX3qfdEofC9HDG9crbNrvmjfkAfsjMqzKPyfm6",
  "key10": "3DJvZCvkjvCcaFmbUwRgXF5ApBxQxqvq9JxdntMmrEH9TPpqAuQskAMGgZ1ywbdbXpYZwM2PJciPUxNsLMgbyf9y",
  "key11": "22vL1npPTG1MzEXZHyiTdJqqp2YidVhxbauLVeifGWSjybxK2rxtMAizhbTXDdrTjTnhyZqvcP6ctwYZ3mZp2PLW",
  "key12": "EHovGdEn79syFc77iVDNDYrnTZGQgfXgx5a6XfPjaH3NNivUmfRUbWcegZjxDEMVpAo3GycNbD7NzLKjFrzW6QM",
  "key13": "3naVyKZ2exUazwoazcMcKK27pof5TPZCWHopymBiKoRREcM6gFYdNJW3xYuaB8miJy1EC7HWXdjca7Qd2FaXWj1V",
  "key14": "2L77yVwxvPgKmUG6ybJ7nJ3QdSsQKjDDyFfZ9wrjusftbDLN6rG2CKdE5beFJs5gxaVcrh6UbA1Z9wCPkzvPy1Cx",
  "key15": "4we8x7hyiEsp9LPxUkQRHS3Ni4CB4dPsm9EPBs8ERLRTERyMQtLBCym5ZUeQNsAgzrhvS8eWMVtM5L5G5TUmoXey",
  "key16": "45izwzfwjRkfxjgShqAW1sQSx63dsvK5Md6sWTXkFKRS2bzYwzg2QvgLcxWna2DAUHFTDW3HjU5H8HHXjQVWbCud",
  "key17": "VCMYitkritddiUP5GACWyHJAudkC7z9K5k9GvYoU9qXRGjgzSocgZrkLMtZAkntnWjuEJRqXFFvMEQDorS63Azy",
  "key18": "2CjPEHbpioMroFDTVUKDdrv6hjvzu2w61KbKSGfKuStjAxRoLALc9jedwnN8SZAq25LFjbXWM2ioPtN55foTgxV8",
  "key19": "2hP2VESsr1R2pAu842cPZC95WZAzkrgcEqd677y81WktC6UpDMxJLJEUSWWwStbncDP7ZDvp3XXv5c72MtLgqMBG",
  "key20": "2FJ2Juu3HMdGw65nqYJK2RsSvNwyFk8o1MHQJTyxPJbqQvPRyHY66ukG2gxugMSmKVsoAxvF3cEQzm3aNT9sFiQU",
  "key21": "63AxSDNhsrdsrdYVWTxPTPeNWs8sXeKCAEvGKaeQPaVTGPShDfBwURR8ELzBoUb4Pz31xhy6zahvXm3MJ3w3AXMF",
  "key22": "5GaWsuhxmWp2hFWAQ9RoVrD57Wf964QCCYx2AFwd8EhJMZRar7BMuFnXSz64EAJLiutosvTFo17ycfqSSAZUbCXf",
  "key23": "dsHtXmiqQAtCvUTUBxXRPvVNCxr5PcJVKywY8FdunN74boyU5KzL8fxSvXDTTH3L6AG3KndDAmyg3d3HZ9VwD2t",
  "key24": "37vN33DxwXQxsFoW4Ng3VMbsPXnJJ5r26exesJmdvjJGQP9WwXLKawftjS96FftqjNDXvMdpEqwmn3yTAJGnWR9L",
  "key25": "5x5KUzimSSxyKG4Dg2xjdWNBX8Rr8SzbPK6ce5co8QWaSF97NWcCgpyMGruhKrxyvNA3mZr7WtDKeR4BtwfxhaBZ",
  "key26": "4YW65MDARVSpvNKQkTP3zgxPQzz18cc8XANxz5Qqwx7BSJX9RJ1RMMru7Ac8J5x3AfKdpK7cvAevdnh2p3fKS86v",
  "key27": "2SPZsLZd6e7ixKduYdPJRmwuWeHG9bEonp1bEx8RuRta2BihzLbirtqNPHiVK2fRvkUW9XUJPKhRdvkPLeREFM9P",
  "key28": "27wchD393hhqHUEZdmpifFEA4jc9nqjiRKNY9jas3L2Ar9C7sA7edKKbeMREjG8qXVPxw4XtzgWYA13D8Zv3XULR",
  "key29": "uUdRMDmTxeha2hnmKTt3GR7dcMkoD81qfkYLUmcs24LrGWcQenh5XExhzSYUXUKduVZCkeNtAKpn37MuhrfmUCr",
  "key30": "4wQsTtAWCisAKr587MAZ2p53Dg62mJrVa1dwyzvg6ShuwWD4cVXBpwLCpgo7CfcBBwTFaBC3WzdcePuRBQkXMehd",
  "key31": "4ZmxjCPFrswxuoF6PzZiijFEtPDFZpDXhGCn54FFrXjXzJ7cR4oVay1JN9MXEpU9c9prudKLyeojmMP1J4Mxe8n2",
  "key32": "5rzc6Yug8e9BVyHyacqDMSv2UT9vHPL8Jw6TndM1VZoskfN6cHVJDUMtdwS5yA5Stqwgm5rHVPo992kxi8ubn3hA",
  "key33": "54TmgJnvBxT3VVWdo7A6Pjy6wCCgzxMDjysZpjzcsWXAyVKoTurd4pSvnVP2roCBuzNpgTFgS3Qq1yn4VbALeMio",
  "key34": "4ERsvGEtEHhWeukNJpERPGzYnQcQTciBjByfdU91vPiBr7NU4v4PPTwZF4TmG8cuC2Cq9tDWxdwHSPyqVBGZzuek",
  "key35": "66jNkXbZJ9oJGRycRYSA81rEbJuR75LUqBuCPBS9i79YTviYmfZaq3g4RkSWUjtLVYCdWuTXq8kWCoKpiHvGqhW5",
  "key36": "wGbFvaef7TosSkx95ETQsjTub8ikm8EXoxaFzj6Sj7u7DzowypWzVwgEkj6ZKXDdVr93qM4q9SEUBzwApswEDFU",
  "key37": "3rGi5iLGn9GAuDWpEkmf3Lh6MzxTuYQ7ti7Y45oGNNE4XnkvdZT4EtJcQMQoP43VKyEcTxtY9VP9MEPePZQNmNei",
  "key38": "2RNczJPwHzeK2EsZ2bZpEnQPR1YUBMrke5N5P4PLgQ16XvqGKNfRZ4HWdiM6MyrAyiT9VQGtJ1kdLxv4ixvrRTmg",
  "key39": "2YroVLSPEt2WT7mTdHLWQ3iqwwjzRbBv62Nofbe3WNaRu6UhzoBtw3TN1shDuXtjoMBJC12Rr5sXwd6oWpQ9ZiHc",
  "key40": "4bPkDzCjtCX36ZfLWViaCCHWKxKZvq5AoyCkjJtrAe21d8TdN8EUKvEkLuS7vd38WzeeGSyqsMdBYzYAPrbp1AyT",
  "key41": "hiFBuw9BV9XYSCjhsKp8VuuN7jxbp3YFNaEgZvAR3ZWMGuQ4Q4sd5rqpG3qMJ6v8K2emG5bnP7tEyDtMaDWwe7G"
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
