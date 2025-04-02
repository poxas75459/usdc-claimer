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
    "2my2scWoM89T5TJXSyNfoq3AiDwSNTNTYLCNBxuNwFb4Jdc5BDRizTvmngGyPLKpUidDdECwp1qUhvesidvyLpkW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b7xAwzvEgBUSbtaXCCudUEZeVxuLKjT1GLKS6UFxdQGiB53AW5mTe5j3jtv4CCQWKrGnYaRtgux1JzVcci49Spe",
  "key1": "416d7miFiWqi1ymK1wzmFMV1y7E4qVF4zATPT2z7FHaLgAvma5zh6X6Cb1uucj23ApBVUK1MQNMvjvkCagpRwsbc",
  "key2": "zDbm8yLPPDQ4oG4cDZd7k9Hy7MfW6KBDMUsD36x2nZKXc48XPvFrn5zk83LwFRW4cRyszui5xyzBnqFWhgRvKPG",
  "key3": "3yx9zwKfUy3LGU1dtRsioj6Rr8YYNdiUyXQUsGoFn2PuwQyKTEUxVYnxoEoPKMnFsKHvZCN1h7pxqbQiL2czWYHv",
  "key4": "YHEK2Lj3xq5mbnZDP1KuAw6cxSphs7WPSqheMVxEmZvjL5514gHXjA3mPHp3zSH1mQ6g1qLn9H77xTj25dV6HSh",
  "key5": "As4oVoLDvDXsDASDXSR8wz9evcbAtFswDEAbsHodR7qJ5jfYeCUmUxudckAiRnDTcest3NNDTY3kwc4PApRAdx7",
  "key6": "4CLq93TKqFw46zmP4SYD8gKrqFPneA3Z2rRP9drSjYFPNifypq4mHSLxFRgtjy1KxJW4dw43oF6rke11h3hG89DZ",
  "key7": "3Xi3pCebsZWJ2v6aHiSYHYXB5pzmtSYnRHnPqmg5PECueKx5W7neF3Vrt2fbo5DLZbxRw5WiBX7RwnaR9tnuwbe5",
  "key8": "5QCFXcJe8bRa97KMBSmCmQjUqLjejbdbPKP9KnUbH2bb4gaJd73nvdFhiw7f66MKQnvutcgtxCDLrJ12hBtito9X",
  "key9": "3f5HTaXLWYLodySry2wJdihU5CGmfniBGNzKGKo3utqpZt8h1N9RkSwpQhfQ4vnnwQMghi2Mayxiw6E9Uqhfdmu5",
  "key10": "2q1GLbVvptEUrui195TsgWLW5XYRG3ph5AXoCMZzdboLFtDGyDSNa2NtXZAe9NJM3RKF3M41aYNVLBRnDD4USXGx",
  "key11": "2MNqDN3q7EKYd1rW21yXMkCnMsW5k9Ai2tAb6e8ANKSqUkQaPz3nLojQRCdixKFxEvtVFHH7wvbcmFyAypdKBSGj",
  "key12": "5YQMjcTmbxAq4Vchd5c4ws7475Um5qqzbSHLS9XtLKBTnCkJxxoWmq3m2TLmsz8FTc4stzwNhD5qSxCvc7QSAW2S",
  "key13": "4pin2VXg2LtenDehcbgxmSpiVum21qJZqjP2mZRn5qJMGD4mL8ZKBJ1ySSaCP24p27QYCu6uCeHfqeSArPy5eUX1",
  "key14": "4W6aQRk7cpzNS9REX48pbFdqiiLUdRgRvx6Mm46b26UqVPSfdRFbjcb8nyrozrwDCnMjvct8hFHTYrqwhFPiZrhR",
  "key15": "GyPh8f4Pvdbs64J33gJod7EkZuMeN8iUUhXjzGegKKtxaGHtxTEZD5d1Fufr1GMaNZCGvLM37SqkryKV5i2QvsG",
  "key16": "388Ca2yoYvBqyUpgMC1Tht9UtDx86Ngu5Kn1dieBUgsE3ZostzPEdYNfv2Zh6UDpobEBSWGaTb3DEYCkHAyZBUex",
  "key17": "45rWrtTkwuf832k2KRMZB8KTxa4vH7XWqENTq8KJcD4wfipxZwGNAHpevGg1bv4hvTRARzxvsw7TncHJPy4WENur",
  "key18": "28qBDqYKGjqfVWQbUWUWgCB7szjURxDmvM84CpSAfWmz445xbRwCxtZE2gNcMVC9FUcHWs42sTqXZuJeDJjPkcRV",
  "key19": "5fSgNkEgHRVniF4Mo4YwneVuiA6489Q8syfc5vDsLhLfmP352RPqaM6SdkfmcbCeAXoebndMibLt5AS2rNWXJg1u",
  "key20": "BY8HRViAiKQPBz8qttRkE3FdrbNz1zc9BT2kjTAaHMQemwzwgXmM9LxNKgxa54KdAqawn2teKiSDwgJGY4LycZw",
  "key21": "5PvgSA96f51GddEFCpRKCirQPCqQVrtLRM7ZQE8BshTodzdYH2AHUiWCjMZVA3HtGK8o5wEDcseqCGLNLsUCdPpF",
  "key22": "4NuvKMSjR7TinERixKmP9DEx3tpv57BpvBgWaetjLP9TMiQGqXFeZjykwZkHtNrv2NzL93wRGZUu98iEmmFBJG8L",
  "key23": "47fgKuHUXjDBYEWGHHF4eDw5ASUPjgpjutc9SqffvfijdDicqf5VWZQvRq8jYRE7U5MfA9qJj6xhG6hpDFDTcR7R",
  "key24": "5xsFdEwKdCCfV8ykarwgB3WPrp9p99J2Dq4zK4hPQFykC4E6jccvWsEz8dodvPyjWdcYKHAADhGTHD9hJivWzXE7",
  "key25": "48VpAe99PdYJjCtYNFfwhgruEaKVDBdFVLLmND1udJ3PRL94262aBKybRMcaULBLBiHZKJGmBGVMkAeHPz3RSYWM",
  "key26": "8J2S1cyQ7PwZ3LsQLmXBAp7R61n1yb7XBXfrzqYeDaZXTGkAekECkhwJk5xwKqUebrE41ormgnVi5qbEm34n5Hb"
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
