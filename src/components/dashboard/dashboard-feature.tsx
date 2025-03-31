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
    "4gYfexPTP76UPseGGfKj26tGms8ogdDebEoi1DMWRRPa2MrRJdtwzNsPUT5XUqjuzHGLP8J9yFteBi5Kex3eBQXm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j2Jw5SsVnjzWcsQoMnjsCTdHuNS5djJpXg8eGn7nGWvPJQ9mHgmMcpchDHqXAicsEwG5o3vEBj5fdE3VrGa9hyT",
  "key1": "2KxnNXNM8paoToJgNjCJNk6aUwdT88Jar4LPodUZr319hkD6Ff8fninQFdSjt7jxzQDvnmJEQrt8AFRqiSAE9ccz",
  "key2": "5kwntcZKe5rkY2s7ebDwFPPvSSmaLe61JRKQvjkuLG8tfAV6MhJ6EKwADeD2ccByUufQUBKofbySncCUW7zToHk6",
  "key3": "4kXG1ASqS6v89s2bJ6ajAPLhUma4qmBpsGJ6pyyv4hy4ZxaF88Cy4C2FzuyWxePiyhVtXvhvA2aRXyFC27BopChL",
  "key4": "5bR1ZfREHVGGxCjWZa39yC5gL7WH8eGbMnWp3ZfPsLrfGba49TP4AvswigkKTek9jMjMoXMxsP6vCvGXGy4BXHwn",
  "key5": "4sQ5VWTyuCdK8kowbHJYqhKN5UtW9wcuUc5GJXNNhGXJQa898YpuQzuJQuLV9ovdB2yvyMmuYfrPCk2eh46W6QWz",
  "key6": "Cfk5uNaDUdqYHYrajoo3ARiEo5va1mMNcbwkd1AxGjdSSwPa2LQB5GGYhKPzdSPnUNHB8xWf3JjwYBo7fmgqchS",
  "key7": "2uWZjdWLfrAHB3N1MFmnKijKZXZNmcbJo8LbjTrjtoDpWbmmq9zAMNpFEZEsLHDtWLUNgWFgUsT5cpYcXewse7xX",
  "key8": "5ywk4Yfty9EMkEMbE9M9rgZeb9tPWDSsQthAth556kqCu4VZ7wkBzC3Bai3isgHoZP9tXoZuQRv2eR5EZvvprY9Z",
  "key9": "mXNmCK8MDSSAB8RLdq9ZM2uuWhycKRySK8Bv47zCtHj3rqx9bhtekUAU9xX1aGJFovZ9U79jQHT5DCA9auRfKYR",
  "key10": "nMuZ4xf796askzNbBvTM4ca1qY828jxTgSMB48GnHfg9obnGGM8nCXLesEuXgNa7EWQQ37Q81eQhrD4ACYRgKLQ",
  "key11": "3Dk2HrYS4idxkixae8WAPdnaLh7V5geoLBSC5TeK53ZqqWhtiLb4RPXsmiN13ff9isU5FrCmvX2hfP5ETHmhtsGJ",
  "key12": "MnDxmVxHkEvXUFCx7aX2gpMPwmeWymAFtcUuUxJMrDgzVF4URuACWvjkzRUZnuXrHMMSTCEgnxHgW78dpydVHLH",
  "key13": "56KLc3S1TDRMfkbijPDcYgQBYVSm1xTpHzsQV1bsspQ2HA5hsyCUY3tuz7JBMcAms2GFFVszTNgmHs9LwnffAa5a",
  "key14": "5MBBTAhjL1oG9baEof3Lut6rAaFZKc4uzNjid1QeRNgmYbf93Wse2rS67fFqqCJWfEqcNgtxskDHrNV916UmsC8w",
  "key15": "5dRz8GBjQPga2t3JrNgQziQPzg8xjZF5Eq2w72m2YPK8VSf7gt2xDSjSrjQDKHW9EGbtkkyXDDG8bNjLzGD3oKp8",
  "key16": "3PsBW5fbGN5YQFvZxy47kawiZ5qgjJVdtEfzEPRRopQ358JQkhZqoHFsXCimH4Z7mEb72ZWbsu423YiWXmubNfb4",
  "key17": "5a4MANZLVm9AAE2i5rKGAhLip4qhxVMbPFtMUd92egCZy5pGPAci1ynYa12TqeQxtcpxyjNvHj9RFqknZLyHMKQC",
  "key18": "6yxoh49yDNYXWntr39FhXmnx21wfHUNov2TAPrS96j6QfjJBQrtXVyee8ny2vnxJLqQcHfqgdvLxrMAM24uPkeG",
  "key19": "2zdNYWd1o5AP6BTokF9MLEvicn3mkH8RbzPnH8jnP5T9jpeXcsfA9JNnx3gxWio2VLivUz2Cr87VtbUbc7PcK9VP",
  "key20": "4QoRA3rGHA4jtp4FpYkT1F4X4JqTUMBPNNd6Wx3TxC6WZQsHq7SnrFLLAr6PscnFHkLhMbKHcDuLQzbQV4yiFG4e",
  "key21": "3xXPRWxeqexyBFUfhJPaTfsCsjT9LFi7BGXThiiZDTpbYF9WXdFA9FbdnTyFr3GoL6EcZQm8BKZqUYcBrgQJ3cP3",
  "key22": "27NNyRTHqheNX3G9eiebjhXR2ebGBCegmjS4xsD4Dfvf2SY2NZJyksHJTLzw5uRxbLNVdT2QtRsX6ZgHN5GzaY4r",
  "key23": "5zun5ZvsKr3YaRWsfoSUud1a7Pb88AwYzayK4YiLenTx7ZK29sJHEdwLirLT9KxyomZ4DGj8zg14wtqc7nDGeUWY",
  "key24": "2ffwnwmYFVg7bmzAhHq79te8AfggwJ4jFDpQKEqrVoV37JcKhGL4tw4v1nazoKWD9DBHMNaRTF964aC7WMAX39jZ",
  "key25": "2xbwBFrtVJ8z34XsHgSrvafQPiwoL6LmA9uoVfcA3wh1FWXCyPUzuBdZ6HZPgxGpLWZg2fRSznq5xiVfgyYXPG4E",
  "key26": "3CvuRdqgGrBHRLBarA1VQspLKxKnqitgUAKNaaThAA8GMYGXS4n3pfowMaeTj1mtQqbnkt2kcBeyhAPgjtb89WxB",
  "key27": "6aaYBGboEyuWtgPxBCVGuQfUCkAkEw83GSvD4T8DUTyPXwkym2AqcpwswNACtYGE3LSb9BTqWchy3AmedE3dR1X",
  "key28": "5HwpdYMmVuryzXrG7ApnzE1jbJ6wNPfpM11G1FKsepVira7Ry2fMP2FtXo1opU2ymFa1uhXxM97gq8WsXvsJLqoz",
  "key29": "2f5cNYEhq13hqx7dQ2CVD3EuMDC4skrQoGzFFmxU4agaRnT5EpGkK2sgtEzfp3Aw5twMmQXWXRh2So5Rtq9wCbvX",
  "key30": "35kz9NXZvVJZPamboMrTnZkQf7m4kQDEEF3uxap7jWwQ5TfF9myp2Qw63AtSwT3kKZjkrWjbbqf9wVxRgcjXVVC4",
  "key31": "4w7fakpkFKyzGEsEZ3XZ6KSsb2cm7Xar7KcvngCN1rjgbTs86aDyqtyoSkkFiFNjCihtJHrcMdFMUcvpXYBrXmna",
  "key32": "31rJ9o7Zd2jC5RDzFWt3cRQ4YhVxs4mQiMatAghhbkUXALvibE1ZV71oJ1Xr1okmEw3xuayjc32aim6UX51foAxZ",
  "key33": "5oDum2UwJKkEpwJ4SZ4G2M6fuvinib4zQ5SQ2GBTTxBzGSdqWKHxNDf6Qhsh48WRXGD4fSEaSfojRrFUTdTEhCiD",
  "key34": "2sBotAg57UgvSHEMDxQWWgTtGVtvPzQLcZEy6DsukvKWBM2iA3kt9C851CknSuWvsHC6Fv4QhtLgjnLvDqYMqVvX",
  "key35": "4yWwZyUWzRprjdZkVcBdqxBeFX5kknTabNHzhSouuCTqXsTfqftHHMSRtA3kgtDee8vANkb1H2HDou8gKRyBu2Ft",
  "key36": "332JDZ5SiXPH7BsaFf8VtgrgTrV6UAMbgrJKqXSw87gVF8Q4dwEgBWzPvCic4FP5rPRygM3wdU5bGGCtbdDh4Bhs",
  "key37": "4JybDpL4mqyoK4zkyGoY1K6jTkhRv7Hncr55zhxFiHyUEPUADvxFrGgQYuV1CHGzNu9CxbU5ba8TDJX5f6Nvbkt1"
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
