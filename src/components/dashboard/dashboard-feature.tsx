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
    "4BUsAa8RtpjeDEzVdWkR4eNWuzUq7L59gxv1LAVZcVSURoNJNsKB58FhwNYFj8JGqP9MgLNoK8CTgk3i9T3v3g3A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tpMmkZ6BFF4gyi75VcWCr5mF2E4wpwk8rqVyRLTZi6HckhfzFh82cM4uHmPL29f2XMtpUETkGe2aBZfqknLYk8C",
  "key1": "PNekeCEvX6pa5dyDUQaQXFYVNUNTnkg4yz9rgvpngMGXJRCBK2vxF67Bkv5GxxNjxy82ZebEy1JBRiuYzQDWgDM",
  "key2": "4Rqe8JyVJ2kta5ft5WeBREqcyUT54d3GW1XGzk6aso8FRdHCrdHkdNtS1zLZL9BBUsUeTqKTzrU2eEgs5Xy3R6qX",
  "key3": "59YETvtUGpU8PcAmNvYUfmrZhi24dnhytZ4uMiXNqrhDet5bdhiYgHM8hkna8gDyVfHDQSuuHajwbpnuQ7sNaHMD",
  "key4": "3N592mFYNFi5Ygf5GbtDzLEKdcKsWkokn6rkmSJwfuxEU5mr15am86KRs3kxJjyG8NzKTCXePXTzTBwuN5PhuwbS",
  "key5": "2poue933XMvJunPtzcbBD2SQfQUAZRZovEZuRiuNoMxP8PbZdnhdpY4E55wUwcNtCvSnp8wgbgW2vCUFyp5JYwzu",
  "key6": "2mTmo6UJq24L9U669YZwXkjqdgSP9pnhprQpHfwyYzsKDohAjLbnqPYsA2AKaeDzFLLEVmoh4LbseVXPgyuprhZJ",
  "key7": "2cyzHJDXnVAR17KhmLiEmhuHCPqDnB7VE7tAhyohttZRnt7eRHhCjMjhsPFwQn9NR5DCzM9GQpNhD8fEk3kwAmZJ",
  "key8": "3E1uzpGSAPmgD61THp7Nt2WZKLsaSHx88Tb6DE8f22FYWScnNvc8qwtA5n6go57YxZf89dGuLfAnKEgV8uRdn4Nj",
  "key9": "5qRx7N1CHpko54ogRzer4iWT66qsVhmQQLGQYctfN3SGw65LvHu8rwc1wqsbyqu1Fc2PUQQPCVGvXX4M6zTLbb2P",
  "key10": "2zLrxsmQBejrjWUcs8jsjyyG3M5DHGQWdPSPimri628WiNFSV42ms6FZypf5zFP7Z56KbZJ5USwuxdcvJcoPBhhZ",
  "key11": "jSosEJDQrHhc9ZnvtkpgwMbB1Z3PSZrCtn7MY3fB6xYaMy7yWJ4nSLL31zWBSRiSnr3WWQUqMDgxbaqYYNzKUmd",
  "key12": "4UQTnpX5cs77zfuM4htepmtFKuvi8z4J7yB52ccTeq1vKgRG5FUbSuCBtY9KWuR8BgWKHS5kR1jiGES4NfHqnW9L",
  "key13": "2fWTpPt65DiJWcGWTi3F4jaE3qMBrrd9PNRC78Tbb59Jy1r9DGXCCJG4vKKwAExjdp7JbiJKW2KSUdTF4qiMfqpX",
  "key14": "3xdzbHUi6KJrXJdzbqv5J53Whu85jrGFiNjxk5AqsU9ck8SddPR39Qx4K1hJymuPmSdjMyPF9owPcvhA47eW4um1",
  "key15": "zHbpZkb2oxrktAwHWe9kvyqDjWdf6feTskXWE6onFaH9aZDUYUgvsu3in5L6PEMzoxkrHcrYSck8TeLWrusUs7g",
  "key16": "2VzH8epNvFYASWMrYjgawiYxjjj2y6YyQvM8VdT3SYS9hadvFbfTiVggRJJFjyx4oP2cxwJjs3Caz93gjjNDouBY",
  "key17": "36a9gt2EQ6MeDjssbPTywjR2HkKkm3SvvdyczsB3hwq39JFwTWKG6ZNBhs61toh9DcoUeRLTtgoodPFEK4BebP4M",
  "key18": "6mQTf2WH1Gv7frA3UBXF26f9omfJf88HGAmiHXjDhg7pLB95k9HuuGRfUL1mike6xuKHpucwRJ3zpz6qEwiHQ1X",
  "key19": "37UhyVDD6ySBUHKP14gV3LFre1mZ8QEXutRAmfguTuubcupKb2WgiTStXUnLtmVLsf5PycqdPzF7NnpKaLf5P63v",
  "key20": "qUyWU2y5dL3trc35jThhpmKs4Jg5rYkS53TUC6b5S6Mgo6xfLwYLhVSBvm9hj8AoJ9ojZifeS77MJS5DynGeGPE",
  "key21": "53J3xLbPU9Tf6dQ2gLwxbse2hcefRMDGpu3uq4CcvazMua2kSwuayTQH1kMK6UBS2r6VN9EZQUD3dtgRhubK3QbT",
  "key22": "5FGEE4ru8tP2cberXpf2eKzhuNUcbvdQfgH3BsEpkhwBxjWhqeAXGjdeKmRBsatVQm9wcj6b6VBtoYijrAs1UrWz",
  "key23": "41exA3GaXgWQnnNKfnT7pt5yiYsLHP8oc6Zt9PhvmP4tLBRaJUwC2KfpR1zY34aSqvmbj1Ju5bPWC13dzAqMgUUn",
  "key24": "2aKgxkLXqjqVFWmdb8QySMp56XxwryS8ho3SX4evkmd56A8eyDtKptj5SHU6aQQ4g2x3eBxKNjsgst5osj5FDUSq",
  "key25": "2WXhZmZLhaYcTkkjfyuUdZMNg7SwFKF1Yj2CMhLwQTH8VgjfqFn8owvhajxRNiqDLNLg79mjmQCCd2kJbeN5UXDM",
  "key26": "N45eeXPzyN4ZTnBHs2F9WhhEbfKYSJBiw5hdv2rXT37qEAD8UY9wW4ugGWmc8yTVMsR94dPSEqfFPkdvBaP5x4H",
  "key27": "EHVpZdjcJamkKE9ERKwqADeUhZFQxw3RGZAGwh1vk7Qehz3R11dhPZVK3wJTn5NZ3fvpQCEvmkXyJ6wFJVZCdSb",
  "key28": "4DqMzk6ttBsvFK9VUPoGUzyQs3Ystdp5KetdXG57MDB4kMsrecgZ26rzFp7FQXRg2jgVEnEAn9i2Zt8WKQnrmCYZ",
  "key29": "2UMWxYGhEiZmewcyRN45eMeGMqgnusFAw6QCfhBFk2eG2RbRUXBqTRkGYEjbqckdQ3i41sDCWRhdgsEjf4PYXG31",
  "key30": "22bqveEFfSMTbj1VV1j4p3B2u5kDCEs8JuRoqZsK9jcCncjkyiAHZpYfyMotpL2M9WSETA7KaEYX6qE3WmqtMPmT",
  "key31": "3FCUQ27xWpnXQXUYZeKEETrxv3njMxsCVpgPNJ6W6EizZEqknFwt4bpRXccDPFXwii3DGLQvhaHMC7q69Gi1B2Ye",
  "key32": "38HEymhpaFpCmpc5sMwmz3RXi848vxNCvaA3dJqjvMt5iNWbPaTH7LmaaH1pvJCp4stWkiSwxwjeVTFUdTMu2Jwh",
  "key33": "23HR29byGzM12PBPXy2eeLoQQymtawagn4KZJMVV7pGimpyPqk4pRZAtPmYHUoaQkwvJiq17VS37aVqRyHENVVio",
  "key34": "3cdBSe7Zw8gZjjXERUFXXJ28VoQhdZ6KFtWMQ4mcDnjuDEwCE8q5vArr1Agerccp7ha8peCZytF6vczVaowMbgub",
  "key35": "3b9w3M52oxCrEPhRzQBCsEoa32yBSp8CAX5S51DffgKgTRSf6yrCVHYSmi6dunLSfEkwhw1tEPRjsCp6cseFmVwA",
  "key36": "4Z8Kp9tHbrhtQsqwjj8naNBaqmLU8TFqLQFUH4R9wjCqdrbZC1crFYkSJFGKK7eXFaZTCyPVPxJ1FSYWU9TtfNpN",
  "key37": "3gdmRD1c6ZvcggAUZpPrJ4tQue63RJDCe8ra8nzPrvVFDbmZtsH2sJ6pnRkSxV57xLkHgkGJMbpDsccbM9WZHKDa",
  "key38": "3rpfkSxWjsdtg88aXTykSK6jSTrv1J6y6ftakUkFB28Lts1yEBFqDZSZb6K3Kv4vGN1XnBhuy9xAugch5c17H8tC",
  "key39": "5M2tr85pLdbRZFA6JLMz9WqGAynkY4oQk2odTEN3HSj6ACq9RovwAcnkYPsgdzEeGA4o3V5XVrw5j3Dj7FTMm1Gk",
  "key40": "4dUHTgjYKP1bzTn1VufzN6vyY25W1Ng8edLnUPahEUtFhKU88n2TLu99E36RXYR2wap24bQzM8ZbbBtSra5h2Vu1",
  "key41": "2Z59NrACupH9tpFh1LotmjewuKTKU7WBuZMGTDHACLftV4iCKDbdxEpjjUwuPnk88YFQ8G2xTwpKp1a2pCZDHs8X",
  "key42": "2fw5S7GZ9tT9Tgr9K5PApkYbgVXiH5DFopP4mjeFAGANNofhEzR7WDaWT7ENQyWJC2n98c7nawaUMMANWoATAP7F"
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
