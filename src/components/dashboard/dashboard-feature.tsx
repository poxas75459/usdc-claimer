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
    "2DeB1Nhp5mJPzNxRwQXf4pPSH9uZbAY1hhmMt3jbXebX2zqxTnxasbqZN7AQob38c562MBkDXmPqcpSL59XwVFSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oTWJvvBNPZ6mGXi6Ak53pkr4PUt3oQvRkZFzzX2TyfebaYEYQq5ywu9g6zeF2q7Z66BNbmaghrR5ud2n9ZKw374",
  "key1": "3696nu6JucBnoeQfWcMqAR5oFJdkpMSEJhiU8D7oYdncofMu8UWuVQw845LVHYnKNFzXe1Dx2EmrULbycrCMcYX9",
  "key2": "53j46kvtw3QmgbP2oXb4DAR5iqgLNmvmHDDY9o1aiV4ssCEBbEm4TuY5HVqZ6pET2453B5ZkKcVG8FuUjsuLUpa",
  "key3": "3uxopHUHM9fZcVCD65sd9S2JGMfED3qMe4e7n5a1PrnbGnZcv9VGvZGiEcrrtVN8TZEyFZPNBacAEgxMd6kufLen",
  "key4": "634a5EdXynRu67WGVFiS7SWVg9hcPKjC7nbTzacCkbc3aHrXSViLqCn4pKNf1bDHWPSS1S7Zzz16oGKTaEXLLYTZ",
  "key5": "4J2xM2pyL3SPwC4EJafF5eCTiuQGS2RdL7aPj4vXsbQcMzgDNxqBPw2oaQMfq5JnnDoFCmTxprWanpf5KyWPXkti",
  "key6": "5pUCpqS3yW4BgNKrf5LXESR9dkXmLCuhzuHdHVjfz5mnFD2Jd2egWtCAaiZeYSfMPdgHs8PwfMUkENBhDcd5EsPe",
  "key7": "2Sdd776cGXszsrXFfi2iCLtSbwhmdgRN71vAKDauMPpuhoPE5yyThCWGcQTHKTRiaQNwM9qfk231f2h1zmssGYoC",
  "key8": "2hWBQ6AmU9HXdjHkxqpo7SxHYQJVdsWTEnCzPjUD4yskkdkg1NEZn7q5K3EMqoj6ZvCXsMYwQETurAComvcRqxZ9",
  "key9": "4i8W1uExm9SH8MaKBeiCFN3SWnj5shXdVrm1mCL2xRqoXgLeN7nuj6jD3AfZK8Fc4mEzYKcra4WWD93WGDSXtdYU",
  "key10": "3F8Z2tiHmpkW7iWVtKNDWoqgwYvkVtH9hunzhiwZEvwJdE7trqLT7tSvg94HiQVYX8DzrEkUDQTkZpEGQahrcN1E",
  "key11": "2aMZYUVTx6Z31R7AC726J5yx6zBvQm5MTmY6EAbAwLxZYKYm7gLsJkHCeG5wSiQ9YC6STZgw48h4UbL9UC2AZVhV",
  "key12": "4sGPM2byXxQtvyQeVvrcnMiciyqY1GkYzwSJEat5YynUuYVSEDYNspitn5Qm6iECn97zaNWhcGVAUHjWCbuaUNwj",
  "key13": "2kenuLjVK9R1RAgiKpXDBi213amiQrnjpXeV2ZCH7BeNYdLpEKXzGmTF7Zxsa1SW3sRfTxferrrm5GNNdFoxePzF",
  "key14": "5Zz1BHGTYmsULjimZSow38DbwU1TXtKUMWS7e3Wd3YCUR8971p524rzeLu46ssoYXvuCJbrp4RtZM8cFN8Pu926F",
  "key15": "FsJGeEoE4jJwJv8yUUKHAu5FP4oguzESPw8P2Nbi2AsbSuCvPK7TJP2BsKDp4j9hxFP7wapvw1av3AEDzTwoSer",
  "key16": "4ztTG7wkhTiDv5R8GUK9aHZMaF9djRYxVj4CmxRbE7QnngVzEfott8LDVE7Q4nuqBTSz6GWdrBspMWmdo4SHucT1",
  "key17": "2z51E4uJ5Nr4ha3bCXBPm2sCnuz5UNJHYn3iUoD1SW5tSxWuCYKUJF6ycod74hNeYyzRUuz5nDuHnt4viTcWQzNz",
  "key18": "4hSDtiVTUg9169AFSDaZPsRay6PMTZky14apsZkhYDvAz4ujAszzXUTx5qKtVSZAEyzgocLVMmac8ryuUFNbRmV",
  "key19": "243Rv4W3dxEJza1NxckQogLMhzn4hqoGenSWt5NBuZ1SbPKCtFQh6Zizf74wTQen6xSXZEMXzfk4k7v418PxdUKc",
  "key20": "5tXbJv9F9tLdmMddhdJrGVt7mVk9mgofN2UEtR3fEVx63ajMWRCLS5Mt2zvLzZohgsa8CTiXsB7GtKABaQ9r9RYk",
  "key21": "2V2LAixodsqNAN5hErx4jDh9CGBdwn9NE6nGYcmHzy3WS2Sgm8deaGJUNyZaAMAMPg1iAn7dPfs74R95b3kJEqeC",
  "key22": "fynWe3A15Z6VcfTGx8Dsdq8rSsVtm8t4EKxKmy2J9afTdzWfAExrJgDHtkCQwWBGBs69cj75o1gRqF5pxvhVHBR",
  "key23": "5pFELuW9BYMiVA59u2rWBBJxyB1k7U12mKFcTGNYRGoba7WfFrf7fQxrrxvLJAfuwZnEBWGqhbXTDvhYnbVtRgKF",
  "key24": "3R3T6F9ad8bw1cLS9MD2UxDkJdGt8NR6SscUTjD7dcLEc1v5JyyiaKPhQRBH36iC3jnaqzqGsj32CBM2eFL3C7fm",
  "key25": "n6LM5HnfgqgBdQmwKF5PJtm7sipQjhoV5T8h9HBcknC13xKQ8L5BQSCd6h8A7MXwkLkSykVMB1rqzt87PZ9oR1w",
  "key26": "2CqfwHuqa7xrzJvmszKm6LwMVc6LsLcnSipimBrEnPM4Xd9AbUgy4N4x6MgLp4mmuG1Mdu1LSFRycdFGg1VRZ9ya",
  "key27": "3bJoxMpwVboYETQPhJeTjXVYs3GjBaXkcuonAtTWALuVcFiTNxr2bYaYugA93xPAKe39QeqbedGURKrV1dLEAUWx",
  "key28": "4Mhk3juFx2VfABLPqVz7iKCsefgdbX3K9WAuZvg3hjspQhgFE2uBg3vf8tmrCHmeyDaEEtcPS8KRTFs8FHRR9QYZ",
  "key29": "4a2E8TtUMgtoq5gPCrXWk2pa5TG9Q9NPj2ZbrkVphGLnJQ37TvnK34yWUYJJkQP2t5V29DDXEvSMXPLc13wMNC1w",
  "key30": "WF2iHEMKa7QGWFMpXckcHh3AmVJYTwV1C36YYxTxxo2WFC7qXr45cedCgJVNSBn2qN22aeGyy7Ber1ot5qse6oE",
  "key31": "5rYFmk2EBNeWN3AESxt8r1zNkx5tn5Q3WCQr63Ucn5KnxQ45tEy1xqaLw1asV4AaHxfzdQ7T6uuwW9fpecHF7CJC",
  "key32": "5tozmxibT4qAPSbhhosbY92JZRe4mXVxswHE1xH9TG82rnKD9vRN4kDSV1yp6VfHw4dpd9rRAj9bkx8mGrTHhUso",
  "key33": "4mvbV4wwiRkPcU5Kbvg6hsAvDoAfY9TAmBSAibmXWnHuAQbKR4X7X6uQAFxocZHDLpSYvUs4jEcSwNHDVWJ2VSH7",
  "key34": "3aAhdEvpDz2PXbo41qBKW65wTRkYd4Dw2QWNTsLFX9UGZoYPKp1y5ZotZhJe9eJh2FSveoBAMLSEzZQ2XqSDHfw5",
  "key35": "4QzWzBzzKzjuZTTBwWFBbSyhjHv1D6rU2k2MS9cKRo6Km5JXA2J45dVQGkYqV2Yw4de73YJKeKzYj39XYKb6SuVB",
  "key36": "5yijV5NqV5A8HWgo97L1WHjaxPqLY5bYU5ttCFiPKBnM9tg75LytrV7joBetsSY6edgy6ekkGjPRkUJCYC4rGMfA",
  "key37": "2PCTPABPEB4fYKnoS9Pm3eRCTnFmJYKpGmUBFtfHQfAwpZY7QfrxkfBmxQvp3PT6noSHbnnBN2Eqnxd8raZKB6aj",
  "key38": "2wfFHcziztgLmCvdNhrj6wd2oy2LA3GLmxLmTojTa4eca9r19LM1TrzcP2W2UJb1ud58u3qziuCjjSD5M43xmJ6p",
  "key39": "MxXnkmZ3TX2kG8Z92AZ1oMHqBwAHVw6iiQB2VNqitAgowVyZkefBDBzgz3GZRLCdx1jbZMxGWKiNtReasuka7rw",
  "key40": "4uh36roJS7pprANThCvkU9wNahoRsaUMGc2CMaGzzan9oUPUn9QuKUmEdSfiRqSsnDfdSfm2534RuUrqBFumsUaj",
  "key41": "2QMqte6cRtPAvEVZwunJJwohMWwQSTgkiGrJdJc1S9zGXsDGbyobTcfXEm1VDiAwuo6EKHECQUwmMNruN3468dPW",
  "key42": "4JqEj3iv6SyjBGcKixj7GkLgEFZLMwhENzCoK7RLdxRWXYJMvfhFxxfM2qx585XdRFemokpmp2EKmbfyHwXUWCqJ",
  "key43": "4cpHc3aBUo6sgfG7giztU5y8QNL2YLyeos568D6qtoAE8Kv7seySz1YZfdgVmRFyyvctWD2HPHeGJH29cQfVQMgw",
  "key44": "2fg8pmiC5sMsApVtSN8uxHbtHHnxignBr2gUvN7scYUocwTVpRJNXy6X3gnow5x51KCZHiRtaHpTYzCLhq5meEuX"
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
