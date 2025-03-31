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
    "2p4UELEVjfwpMwFcun3Qti82C3Hxju8kH9PYMGrAjoRvCFv3m1yJAn84LJszHHshNhwHp98nHp8Mo5qYTtpJA3jz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dC1FgzwACFhowLsuaYghxHWymrRb6EJLdhwZZzyQfatwZ8SX6deDsmqXfdnUTNtxPh5Hmcw9uky1XY7DeVbxk4N",
  "key1": "5wFtc15uc2oXgbs8XfaD66gfNxeXFxVnAayiAvrvm7yk5J13AGfip3bgMb9enfQBh6ShTqyEQUH5pZy3BBa7zCpZ",
  "key2": "2hyLi1SZgADkEKM8c1tkPgMnX7JoNvR8AWBjE29XfZatWDcRZmWY2reLfQbW66qpKAdpb9qQdHCBv7QaTuaLC55",
  "key3": "2uPvYYoB1Rzw5rF4QTnkBJ7wsy69vCoVUPCtiEsmXBkYf77nMMdtULZKwonZVYqCXQRiE5998AXFvTNz9fcnn55",
  "key4": "5Y2uRdmF1atEvY9rcwRe1Y6jpL7KQazgRwgU253q8KE7dCgg3g2RVLAqV1LXtKQPkFAZNBcSrZVHuJDuGCdiByEr",
  "key5": "2iZeeVVezTggVcPFboiCtuj4y4rPdiQRDozWSE7JzGKPLqNh7DF6JJPoE5B9QiYrdfXwpa7dArUgWn1VzPZSYzdu",
  "key6": "5SCZMEfzjiKoA9VHfqmnGAKS9B1j1cc9U4qgLj4RKwnB75dPGzW4E3CvqickLWsoFv8iBTSFHngv7exEWdnEW3sC",
  "key7": "563SLXtzv4Zb7nhB4CZHU7HAVdowHYnRvp8kzqdSph33GmVrze1GwTXWS8ha4hcfmtg9NyQN7SdyAi1gBQV2f2it",
  "key8": "2KZZh7qAgBbp68mrvrRmuwfud8jeFcBg3KMx9JmRPUMRBWavQUnjRTkynsPhvSJfoZJzeSL89eeWkGxXKKFVmwrA",
  "key9": "VUCmeWP7BPAhyzhtkDXPvPhvQysDGRRVgBdmpcvqBsNUQbwjfbFGHzirmbHPoc4fUvhB5E7JMk8Dh5apFa63Uqf",
  "key10": "Q57PWPqmfKTxJY5ZCfqgaGZWKpVi7Bo2BdZCfxFKYwxYPWTtq8Fyx54EcUpjQSCyVxGw9PVFsg5v9mZnkgLx1mF",
  "key11": "53esLSqxPUuesGSgY2QStaC1rF7a3BVda4QrpHKbMmWDU2W6EbpLiu5c81WMiRBT2LLhRR4nFneC9HGZvhJAWHqe",
  "key12": "4CCja1wcgGoPFYRFsLDEotTsWmTgmVig3NfXzKUw2e8XkKKLtB39boG8nW4ufwDyKTFuCYzHrJ8weVaLd4Ev85zv",
  "key13": "57MgZP5VmqvLdufVW1h763mPj5pt2MXfRRdKN8WETJxQRkF3q84a7BVb8FPKYCy95nV3suCAfMT91BMzVCJcDQS9",
  "key14": "47ZT8S4kYokjEfH4w7YbzQKPrfXXNrmg68K62ok2gB7fVNkvgpBFy2u3F4qzGEGrkMTFMXAJoehWDn1HFfU8Q75E",
  "key15": "4qjepRwyAdg4KWacCno7V7ypFW24y79XrHKSahnUXkLF9aB1uB7WfMPdDJBewz8u3Y4NLJdZJKhfhzPYygcUzhrN",
  "key16": "3KUxC8uwLcjdNgVHgPKvTMNu8AEcW2JytxeVCmYSCq6ZVCSvtdoDCVFLSQqW7boA1jCaqnRPSBSjXf6XWdYrU3Yq",
  "key17": "5HuGbdWUe8XB5wq1oNbRVTdwQr9Ckzb7Cty87P7u99S4eqq7oopzyx6nNL9QQ5Zzpxwmd5CNom6JENLu7yD5ucL",
  "key18": "4Y7pfj6BWTfGor7porrd6CxyhFsXrrJUjqwJxpiAdTCqGd1xtH8VpE71Aq6gpbPszuL7uQnhiijKn2eFHgnfKKEt",
  "key19": "4NyqTfCTNUCRXM6ZfbugcHgkvujaQ2HYRe27YbWaFu4Kbk3bGB9e797XQqMau3YLkRofJKbi7Kp3FrXMcjPpsV3o",
  "key20": "4FkcL69fK1ywAzEbGgL3fvZbfqpG2ZjTmAfjMmA2Aec4WmMUWiCehmziaLsyEuU59hR9MRnxnQTxN9y1Mya9xnSp",
  "key21": "F7FCSkWxuKB53U6emBfWjCExm3tr19UxA1LF9dG5orF8755MbVAXhPZ3ZX1TEf66bcKPbTqUHT1AQAhqCX1QQ6M",
  "key22": "HkVsmZkNY52QBARsqpWXRE3vz3NBymZ4GaUCgFtFe7a87F7Jmw8jNBeRgQGDRJuqcxo3Pu3x9u1NcQwu1NNNv4F",
  "key23": "5SZrhXAutA5HzJtkXNRkvDVCkZKN5dCk5GUQZh5Gojii5A6R3e6F4fQREAwvtLszF8waV1zzYc6kYQoTiETDaKSt",
  "key24": "5MMp6ytFM7sJKpu8CTDQzbrwpV8dAHiQxzSGXBmu1V5JuHu3dW7HnRcYNn9Lj28WTNaB5rhjUazX9vESpkiAswJZ",
  "key25": "A9Q1PbsT9DHXZ25NMCsJF4zFdivKaBRXtCetFvmXQE75wEeXg2ygpbzph625aQF8P6HThEMsAYD1fYk99FqWgiD",
  "key26": "36QMwnccu5P3iH5H1rbEgayrpsyiK8DCBLYg6JFoKrFAqxTVbTKsDiYiMu4jMABvGSEWZGy6eEsWnUpGRFxK4Nac",
  "key27": "4vtVG1w3xpp2xcLr3Tgr8SYw7aUJmZYdVP1Y4NBXpsJotPLjXMNxedm92dQj8n2YXdAijvfsnK4UwyeqV7sbkVg",
  "key28": "5HsSLxkbCNx4T3kFRN1FdeqUBHvNtrG9CXNSaFQHDBxxbwoChnPEQwRdWmak5ZBNuGT1jaCqfHLWsypiwyVhsBuy",
  "key29": "2f8jRw4ghWXT6tjTi43CS9BnMCh9spdwXnrAJwTjBgkuVUENraVQaF9PEXZHvH9wMocVYu3AupbCtZH75ZVK44Gm",
  "key30": "4ojYbGcqpbtMZjXiJhpG9s9DB7uWZG1dudFM4Jwj61zb7YT1Wab23du8FEMf6vDA8PZ7YgP8qbaXDmJ7y2KhsuZG",
  "key31": "3jrQAodtaNrY427keQtHRG8o9tB9JRkP9iYJywgFN3asH68r9mueot4ZPzwU4UuCgt3Qu4TzK6SNsNRnqz5MzPi",
  "key32": "487YQUgqqP95sbqJzQBLpAcXeVGqUHKXp4uLsSTQLuNgLjSpA8poCEBc8teYiQ3TVhMZY3X67YUnye7hTvpoxzv1",
  "key33": "2rvSdX1oZzkGsgsWMFzGUn8cgQcdP9LrF3EEV5UzQjqeHcEYcNFLxqHdhuavLBUKYJvaQBnEVshDR8KgoogGczhc",
  "key34": "8cPitB7GDJMrbEW2VXxSRdUekq9RqUdWF1bS18ZzuBeEzFkTxHbU3grCGEXzXQs8yjuAY21PanAEkKmgUGU3xAj",
  "key35": "TbjZg5Uv1YWXvmjwFy82y8k5weHhCivfWCD8gCABoUxqijwRfRJPro3RroS6i6DTDgMUVGrLZio5WDuB82yEtQQ",
  "key36": "5jJHeC3QYebtzQAVCN5ypvsiukqLij22bExt42KnDa2vNPVx8iN524jUe5D3yHttAaoqpT9bEUMSQbh21g5kT9iV",
  "key37": "3RNDnfSmw7QPrJD4E3GAZnRmcWae2BzT6bRjhQqJnmqt3zPdHVBcybzBDt8rfZLnBpFzBnLhCgFCgj79kqTuVRj",
  "key38": "2zyWhCWx8MSsGDCc16VAtJDu6WPnv1yUCnbnWtAc8tFNCdSmysXd4moYfrhpLfsXctaztXJmkEfBoeeYknv99mUC",
  "key39": "5vefPaHGSK27jsUqGACGwkQSgs9iopPiPh2XNbGAzGgXPrpwRXBmkNa2sEWRjUGmtYt2Qy5guoW8g2BgnFt94FMZ",
  "key40": "3b53XpZ7x2bNsZWjqT8oePgSnND2sEPc2v8Tq9nuqj8iBJD7mAazsE6PYcuPnWUeYSjbMET7vhERzrdCL6Y5VgnA",
  "key41": "3xEuC75qJBkQx1NBkQDSZwLa4iG1ZoYEMNEVaYtZZ7yNv2xJcjNVq84W4wyaRHtm2hg6NJL9x4M2vxkw1nvhBNG3",
  "key42": "3m3UmnQachiJeXCiaaa8KzDuvFQae2wyV4oChQ3ADV3BFbuFDwrbMypveih7m7B78XkoDpSr4nsrwBMPmTrVbQ4b",
  "key43": "45rbdos2UBN3R2NN3zxp6XoGGdevz1jDVwQFukYF2KafS5ztxZ1PqC3WTG6BA6xN2pXAsYLyQNQhiUpM3gn23eU9",
  "key44": "5Lactfw1MqbUw2CDc2ZGm6Vd9ozdN9PvQeaNxdgA2t7xpLG2H3i2S2x77k3r1DxURPM5Ykx258WJunjYFc99vnXL"
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
