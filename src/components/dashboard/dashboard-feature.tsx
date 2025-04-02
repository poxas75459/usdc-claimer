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
    "vyk5cRargNx7FUY85g8GCqCHrQT9ea2Q4fGpPoX2CXw6NXVEtcYPkyMkvDNwBBZNpi6KLjq3nP5LQiAhJU9kBQy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k5Ca2iGFzpeBTADMuEB5ZJLMDMiuHKxWyMx5qxQjGYsD2LCaLoqzpASZoQtsE5FLaHVhyJrrwwRxa7MEXztVA8h",
  "key1": "2Mt3bGXzfKZTmAFr7Wd4Nijvz3vuK7yH2aocAkfxFaMBUxXjDgvJha6J1u82jvxKsdnCQqyYCkW1j7ikeGzNMff4",
  "key2": "5u9qxKJ1fzZvJPpRi1ApN4a9w1op4H8QjtDgHnTXxeSZrN16nmkjAijM6c2qdnbNwoBBhUWe73fG5aP57LyoeNWv",
  "key3": "5CwGLajht2MT7K2svg7YAWMD7WmmhBVEJU9rvJoxbpRavF1W7UohAowX5VnNXAg6Nx6Q4Tokwf7BfKmTGmj8ewcp",
  "key4": "SkQf6Buz3CRrQuSKL317NvDRy6XD7D2rYDacq6BhNadfvf2fiKJjRLA5cELhEg8z6NioWipn6Y67BxH6DacKgKe",
  "key5": "zJYNSH9HkeXBCG9zvssKRmz3oGgbetyhfDiYy9b3mZLZrm253v4Pfd6bkN5jq3ULGYq1MG9a1BhEAop236meoSF",
  "key6": "4PbZCwyw8gmjqyMDsyiPA4FE5anx1WwmPUBqc4zix6eDS5qeqXN5JtBNkLimSVDzzeJAsKpsdEVfyELkEiUdmoPU",
  "key7": "4XKEKCE5mXHBfF2LGJ3p4mf6dKD6Zt55XsfWshmCBagoECUDA3kqKhL1mXUdm4zPy4Vvd6igAVhYCpkSY1h1iTS",
  "key8": "rYAhCaduda2zPEuzVYGUhS6rbp9VMMr26sP94sdzMQ21Kk42cjkJHnKjVNEyrrq8jxQiitpqwFVYvtL4LCxQhUn",
  "key9": "4JcnkncLs7cgoYMyw4vafqYgNUn7FzRHmF8B78NfeNF67unEwwmxnVgnW5L5g7pCWtfWCSdFth16UmsTL7RiMzXx",
  "key10": "2rcFRiRZHoJtdexCR39n2u3NxRimUqvptxmXtNBGfRpqdY4cqn1sJCAztVUNTstfxq6DR7ubBbBd37A8DUt1Tnkf",
  "key11": "3wfarEpsMZpqHG5e2KXMMxZP7sQ4hFPX3ey4UiaEJb9cWbbDKx6VXNepkL1qdeqWzGBhMF4EJQiwo2GNokveWUR7",
  "key12": "2287sF53FbKbrJwXiEmangQDFs5D2A6wuPMJmG8h7HHum9L5HHwjNtiTDX2MZYG9qHVbwmV1Jdrao3AYuB8CwwJe",
  "key13": "125YEtz9MkHo9NsZMXCy2ZwqAFn82Pu67RPf5qiw9pwGa8gPBgSdQMxcETggKz9zv2FRgePkxgjUrD7yFKAm3UDA",
  "key14": "2gmHeX1wTsuXp8x9ZH3s2rRt2CWTFsnsdtGH7kRRZCPWxB8XLPLFnuwip9PvydS1PGGi5Zde6wMwUAiURGeHYhLi",
  "key15": "5xWomFt9Z8kGdscwKeGVvmk9oxUKF2zZ4Yxezm4RJUwh8bLvoTPdyGvQhreaZGFvnzTgBxAEW3KhpC9HJ3AtdK7h",
  "key16": "4BKYMEBfaBY5NVonxF16GjpmWKEoygXoUaEaCJcUHc3M55WPyF61YmEoT1DqpzkM5PKhWNev361nKyrpv5iPJX2F",
  "key17": "31bm9T3zP3hmB83RDjXJkieFAAHRb3ffykXf5VmLsJdkMpuRVPpodhH1zvR2r1hcC2eCaRy1Do8SV8zSAx3CKMzp",
  "key18": "QP4yVrZYPzEV4m25UPcsCgybYVv23KFzPFCkkhrqUhmoe52aAt5BYn9PtR9eJcDbRGGkfgDgUYi2Ca2RP2dCdHh",
  "key19": "5buGvoCXULMX8i4tBM1SW3S3AuNHrcFzNeZCmbAx5J1j8ksTJEZLM5p1Xh4hzP8yRsi7VTQFbWJUZUd29PfPG5u",
  "key20": "4jHRTXndJCTruGemE4W35GDqXQFgcUs19qu63RuCkqAiJLrzauyF6T5BdwbhiyUnPNuCbwjX5dY8gQdDFHUmEJys",
  "key21": "q22zP4Qvv5WyMuJuZNjmvrMFYWx5dx29ixhvKxx5ZkWH7nnu8z7onpmUosShpkKuACDuM8ZPQZZ5CxH5xU3PfRg",
  "key22": "3okbjhdtbE9y77RVJNzz8ekrcwaTuM1LH3knNpDSwrW8MnRTaEhTKLL59bV3NAFkbXjVeESw2nZ6cLuLAfY9iXt6",
  "key23": "5JhszLjDng638HnAm9Kd8mc1D2FhkvUSt2x9Fn9NZ6x8xKTX1tug1DdCWevDrArFmTTpVWDGTCQfSAPNDYTeFzf9",
  "key24": "5KGkpiW2UuGuhQcPDeBgSKwyRHXUhoHngarFbvXdwKeQ3GLQPaXBGKY1RkSD3nYmVpbrcMzk9FCnKwUvMT41qytc",
  "key25": "3xpq2rNMJUKQmjXKiK14pdHwVrojqBoC4e35AfEoDVTu32JK3ASFe8n32zkMcJSXGvX2WZgVH9vsaCPNTcj199U1",
  "key26": "3z5uwNuVGw64exfRHhK1n1VzLXSwRzTV3nN1BL1Fq4UXRBPDoYC2bw95Lz9Vb1JJHFyUpVHgyVY4rs3wLz6VAyAx",
  "key27": "41VnXFPAjvevc43jU4ZBfrzuvicVsgverFY733BJhgYaqfdKwdDiNyXTNDbMeb9LpUdqWB3sy9sAwtVAWdVqiCr7",
  "key28": "QuNkMqscz96fjLFg8AzyXDXo7NZzotPEFNyFgqTA5Gxi6TofSmh7R5c1DAvBhqFnbXV6UTgtmooQkkjx5ae88jG",
  "key29": "57xtPZPG1KW3U6emBHhjEU2nW96Efjo6qKwPbBDNkCuuShrifZ1rsfaVnJC5KYcgjTcwEGQBprsJ2Fb9pdEVZHYa",
  "key30": "3GkkLx2C5DEveVYBDU9AvB1tCCZ2HBmxTgMZJYprfeW6cE7eeuGuGSVZ4mpTsKj9moJAraHWAY6o4YVfoNQqc9mk",
  "key31": "4QPyjbK6LksWxhT1mtg4czdZYspzTN9kdHVZy64f8uBN98eFGWPDMx9ysNvLLuxMAMYKCaRbtGWUtFpPS7AgvacY",
  "key32": "2aPa5LyKTCsYy7Ea68EEqMpnKrqukZRmE1e2hnbwBoBvDu9BBmeRAcraNnJF7DVGvS4DuYPjRS6ZcprmMivn5Vng",
  "key33": "2FDF82gVnCNGwVoo9NjhJ4wMqUrATTrTU5Bn6yo5JZcfaSB7vUtpJmVkuT2xL44E8HBWj9qikoWt6Eb69yeitjmL",
  "key34": "3K9DABvgggph8DbCF6M36VbFVySQRu5V4KwMRR5awSdqzDTaskTsRwzFLQqfBoQFgHwf5eN5QxgtCKPh8Djyv8Fn",
  "key35": "59dZzaWKewCiyeGnD7vSfd6vpWEH6CJXuU2SDpDQrKZuzZ7xT24Bjjf4gF9sGYighbdaHUAANquJYdnMKz3xNvsf",
  "key36": "4yWPzNUKWp2uj8EacttYuFnScTDakSLbUhCbVWjUauosWf8oc35zdQpzQMSSN3aaBMGGWGjJxbZNVu116dij18vp",
  "key37": "5bpKMiCpUjeQzswpRNMkJWR9CpGSMwdPH616gGmQC7XF4yXH96pJ3kVz1V9XiCtgRhiwByrh3pfaJqYYnZmd96sx",
  "key38": "5kno13zd4Pw4ZsLbcxipoDEhLVmgxmZrcxR6fLN8zQoafxTiS51LLAiRzj3xrrZca57P2WMjZiUu5Hnkj59FETTZ"
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
