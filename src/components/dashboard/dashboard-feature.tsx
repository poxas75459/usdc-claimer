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
    "5mDPzBJvG2q3LNGgzGfufwS7nSia3VUVwKt27AdNZXdKUo29UUkU3kMMt5Ae2Gk38Ce3gZ3ehi1DbeA2LE5b1HBt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HmPZ9YjtW2jiDGd7nnzwxLjwWrLFkBNqrNVKYkPCknhY5L5RRBU1NNg471f1AMonTKsBxDRc4ex5KKPTaRmZj1w",
  "key1": "4EYYE6BiXNLSCHbZQ6FgPQwcX8Ur3DdLWdtESkjnUDBskQdXgpeaoQTHE6RDfrzHSCZB3doXRuiA3FPyQfho87Wx",
  "key2": "5YVUhpXseu62Kyk4ATAJwJkyDod5fHsFhsLx8vHjGo2pxdGA4wBW5KeP6rKSgfP7kYyCXdCqjfw4cPLimfi9hFty",
  "key3": "3LPWTuKupXFW6CwQf7BD2U4BLXFopHA8wZatoKUV9p1bpRgBw5D64iUqWAVMeEzbSv5cukvqg2uxvp4fAJx1rdPU",
  "key4": "3qsKUDzERNYdMG8MWVUYvcgQXRizmo6QSG2TF3oMxVW9eFoiJm1z19JBm1JGMs5FNM8uSkZN5w9RTcEJ396PbDyg",
  "key5": "33QFxPHhB47bSmiPqhXrE5EMg1UNn5it6D4jM5Wo1NcCXd4y5A6ER3fyAnNRNQa8X1G6qdqZb2wR3LmUyFwxsfh2",
  "key6": "4HJ3y7LbyL2c9NzEfgH3twtvhWrakfa1M2stLtipfnmSQi9QtJwQqAgEf1JWnhjZtBnWV8NrnP8nTpc51KaYvfZa",
  "key7": "34qaJFovjLC45Fhx83XGA6ptyLB1YWVRom5mjJp1sBwuY6sfaVSAoLwSHVaTJ7F5WENBbAYYTWoUdeED9VghJ6st",
  "key8": "278VYJn74rXngcvWAvJhf1dx2CWLrq1NupksDcvs9PRa88WkXr8geRubwxyPq3rHwcwoy6i7ARHyd19vPeFkg6Jj",
  "key9": "2Hptb8GgdfbUaQW6hTMiVJ3Yp4Abw623nieKKHc7N9ZVBcVrDHdgVRsf1q4YsUxa9tGfjM8AN9whzaYwrASiB2UM",
  "key10": "46zPqogArcASPm2ZnXxocpHYHw9NXsPm7gfACnWHuEh33BvCm5PSeaXsGoeDn6iff6R6ENFb1PQE3z2TWyMfZBHa",
  "key11": "JHN7rTiGAW5HFoRsYPae8NrwyyfKS5pZm1mvZMiNA7zBF8vLHebLsmsndXFeeusJgEW8JuVmvWSzS2r9xDazNRJ",
  "key12": "4aA9xNYuQrd52vzsnZMhVW6bjBK6kgEUz6cPUsatReKukoZ4ucKwykRRhrC8ZWkpsEc383c9LeunyfXQiMU7AfT6",
  "key13": "3cb8ik2Lqbiqn7a74UNd2rouMYS83XTsRmzE8MnFmWi7gf4d2VsxPhScens3p4FQ1UsGzS1ztjYLgcvzaq5dCiJB",
  "key14": "3ZqBnuU5KHS6b1qmUqcWnp1Eoe3BbjsksKS6sGffH2gPc45GGsb8rHpPkb6iPfJa5BEYcZccNh3zBwyJhtz9BEDU",
  "key15": "N4PFpbmGvwz5EecNPSgHnMQYpDUs2c2Nw1VdMCREgcpM9Bpd7VdTLsQttNcyuqQXHwa1ER8iGG9PSpKean9wJis",
  "key16": "3N4uGgrfRbvmmNfV2HRzJHPNgyfQZzYd4dacva5oJJcs7q2fC7HGGnYHxccVW2K3zKCEhrPQnLZcf1MQeznTBqXt",
  "key17": "2b5e5Hk5SgxJ9x65HFYPaSDiML3p2fphoyRa7dEWLCS79d2sQqWb9p6XW48u7JtzMnSx1NrPfxnXfSKUFcD9HeJr",
  "key18": "5iiMaHBzsqtA4zcGbkSkrMbzDcAHXXh924238w8ZLvXwSPVLVNdXNFkPDQrDVAsTkRbDXVoT6NZbryAjuHKtS2Zi",
  "key19": "2s3Mz3JGXcsSrEL4CJEobo9B8Zvjw8QwFHsz8H5wBXoYSdjNeY7ha5ULkdR4iitsprU6CYwNnMmWAftwEYD1UNre",
  "key20": "3mhVdatu4JuJ5owwHotmPd6BGhTyXpB5EtVEk5oQmvpr4Y5VgQh3v1t1pSZmLuXUkYZUNH8V8PVc1C7rwo1vsug",
  "key21": "gFyY6BpeeaSwUazc2vsweezVhE4pT3kFxq1whUt5HjEcwL4m2RfEBiTVv8S65b7BRc7uGVA232MwV2FeGdbAXeL",
  "key22": "3HBVq99dcf49H5oPgafqJtjWMuSex9bJAc2iwjDA161894H9Ye7dpzvQFy7sH4h5D1bYssSQ1Z6ve4z3AUqRohY3",
  "key23": "45L86WabAnspcE9A1SQF5WFNSs4XCVgRvEkZaFvrhWAdL1RMfHYqGAP167zkB3CrgJsP9ANjvnJ49uRFbnqXnFvu",
  "key24": "5JBvsdzqouToxwVpFMeDUv1qPxhAqVECueWTbHavQ5PJnrY8QraTCQbcnjJiqust84nWDKPG7ZTThLmQzdpaSfcs",
  "key25": "TFaQBbvGzDikR1D3hKfycGdn2Wq3GxknKatfFuVra4NwGjszyoUXsPSXde1A5nQgdksX8rHyrXGv1iyEWojPTan",
  "key26": "4RJH9LLffJ6TorcitxphCA2ePq52AZfFUBPQff2UubrVU8ZT6Tmus9C6KeJScv1qgCKATnnLu1WpkkUkx7JcTCXN",
  "key27": "3gNBRxsMJCvEhrvSa82rdk6CM39kAJY9dieyzKNLhqkLARofGEV9t1x9kyqrbCh5DiUsUmCCxUh32xmY7Grt6KFa",
  "key28": "5hGtBHLvpbn4bsf1j1kqhhfA9Q15hCNasEVuZFVbKVfZbwYyXXAvv26L6SqzuuEMMN6K6JTdNFKAncww6cngNbRu",
  "key29": "23ukS7bEoUv8Zdn8bR9vKHHk8a5LeRM2Z3dJFyLJcSMYjm5iQeskNA2UnFZ9uZj94N59ueyKVFaZyhCdrbGDD376",
  "key30": "eo9h6cTgjxJ44TcDvyDS4mYGiRiPFCfAKfAx3uLYnVtjepxmj1PZEStEZSv8PrF1SdNpDeC3iHqNSXhhi5KTDPZ",
  "key31": "42trbDVuPjCtBNFTh5NMFxg8p9V7xsQyo2wQMqRgUFLynV1jzGZKyrd62h5mPx5ui3NJH3hwwGamKvY8K19TCSpB",
  "key32": "Sp8CJXuEnD6rEpEnW8v2odWEs8Hhu74H9T9QLMDY7umNdzx6W1JKgFDhnVefLx3kXYwYQzdNvRBys4QYmhjoY3t",
  "key33": "5Wt2NtGr5zjtozrG84BTwiPLf8wHLFfWs6hzeqit4xrdD29GV2CEH7djCQGBzFbB66LTVsRigmqxzteqQwTbjZLA",
  "key34": "WrAQeJh2m2Twni5Hsp7EJYJCyarkpWTeivU1X1TQ5AuvUo51yt1ur3bsjmJBEt6PgBfwQAHGXUoNrCSb4h7y2yi",
  "key35": "64CS6bPFo64p3MffD41Hq567F3qEqKTMSUeZ43hNDWm7bLuM9rEG67XqSoaAYzXjH8UJGQvpkhemb3AudysWQXak",
  "key36": "5GzEUV6sNCG5qPfiLkXpJu9VRFeaQQedzqPp2je21Cx7Gkm7K5uwp63M318wt8sFjnvMbL4EexW9x1YfqZJoo12D",
  "key37": "5U9Fev7CUtRtFAqtLZ7ZXyjADSxp8eK9wQeu9H5hFa6S8VrCpP7jmdfFREpNTqh3ypXHNjxHa7EJiqXyfRgDiihC",
  "key38": "3xE4bsEe6ivHXLqXS7XaCuXV2659WL1ZNvxctRYATW95kZ5caxDsB2DxjU8AqDMAwVFSxwqT72x5KF11RLLksVvZ",
  "key39": "446NdVSyABar2MafiYjAo4AiKUcaKP7ymgvJLaVxQckJMrscVZr95BFRMiMPZ1vP13WLuetVfafgd44GimdxkYTE",
  "key40": "2VwbJH9aaNvouS9HmBz3chqebf3WMQsjVR6Tg5XnVTcaunCDY6qxPmgEqMC7cVdyM3wSeXd8Q9dmSFkyhsPmEeQs",
  "key41": "4PkC2DCnvYY1q4qCDn6Yp6NGxfNnNUqcMu8NWR2XtRUTcaztbDT9fHV8vAA9cS4CWSsfSD8RTpeJVBsreDvSEFdG",
  "key42": "rRsCoqGaLUd6ZP1bPLeuiqkLGCdqX4X6gWWEePib7gmK2YY3iJeRTRvXALVxv45mj7aTxJbtYnev9ZgXuByTGfF",
  "key43": "2eTtdwgWiFucixPMwZQwf8bhdkRqVW9PWsiU3brFNDxVn4ubXGd6vuCLBr2RKmihaosThSPK3rftG8aL9KXJpKRZ",
  "key44": "2EDD5HRWADW3yjuW5pW9SQKc6PumRRD9xhzzhJNF8NyRxkL59av8hABGrjMTqVG5RLtRDCHvNwyZYjx5gAuEKNzN",
  "key45": "23xaiNERRxzofJetxXQCze31kZhJzkuwFbVBSvGDAqrZ2wLwJahxk3xDeksspKe9fyHgoW2B29Wx9ZYgzGdZBSXT",
  "key46": "4QYFZ3ghPvHrmJ3wavHy3xqsf3yJ2Ph8qcoDG5eu5SmBUZFgamwKVy9SMwg9e1gViKU2k2qjF7Sqy5CEUNzjkssB"
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
