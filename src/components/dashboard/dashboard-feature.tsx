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
    "5xQUGhewd9iXFX3Mfu4JHrFux7PESsFFAAsARt1nKJDQYsmYBN39RJ5bN5Ej2j8eZQwktJ35vop5oTQf8oVcjbVx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUadGbPiJg138QDFp3toK8LmwQ1z6UaeN9gW6w6orBPApJuX7EhkRnzBdT2NhskYrSQCieu75V2YpGXsdFNbNSM",
  "key1": "5uLMnY7AZsXMY4reuhLvbg2S2yBimeP3JT34SzfTxAQQQBF7ap1HY5au9SoazGKPza3Y7RRhwyKpd8Nk7dTWUcJz",
  "key2": "2M8CwPC6RhRqY3yyJ6Hh8nacc24rXo4xw6sNXkS4vx1kjE68qdL51e45zZ3FRKCedJMFYPUrfkhKPGE27rYN37K",
  "key3": "5kkpE6s49YC2UhAXGXdH2mpifJgfBRXtbdfF6WwrqAzTij8FdFqW3rx7hLoJjjnzDBRgdYk51MRjxBpyNzsZkNFv",
  "key4": "3RFanr6C7p5uECbwce6Yxc38Mc1mU6oGJUJRHWZ7hgzWd2ax1ftYbLNuHieGUYHcZK6RJ1t6WcSYRoYCGSG52J5x",
  "key5": "5yioc3Ky8QpxZowyeBmMRjSENBDyP6LD2T6BnZHymwrkoGv6azamP3r3opeXYCs4dh98HyHgXwp3FnLpRajYMvWv",
  "key6": "5jU4Cz1KftKGGrbFgoHSwJWn2FThuLKojjE7kiNyYkjFL8K1BfP563H3qCbcGSoK6pqMgnQjwUa54U5s8BMEpDUM",
  "key7": "3eWstSzYZtzMxNGX5CqkPLSLwJrYmoG1dot9U5YAfP22EkMiuCd8ccr77yGSKXcQTSrj1KcibQkwoiNXT5GybP1X",
  "key8": "3q4J1DVEadr7hWzFe3KKWQRmsmcexKE3nYFLu3ThSYpEXzujQSfSQfyy7wNmB4M6AEAL4MMi2tbrAANwETFU2W1y",
  "key9": "32qDv6eYghxywzTKNi6KEuXYehnbA8tcjBn4LTcWWHfDbm7eJx1yyJ8N6L7Wr5w6shhdyaXoeRD7H766JBrnb3v4",
  "key10": "aCcTXLGy23YoM4QPJ1KV3t1xkSJ8vJ6YwX6jGJTLwTWJkfDT4Lf6uQHLPA4Yr5H6JsQHgpJmPP467zBrShxotcJ",
  "key11": "3DjfQ26Wz78t7NQT8wsrp74ybw7yuC7eKnwwhD75yg5EeESu9YHzmvFPw4a85o9BPSrAa4Yja2AFhoqLWrGnab58",
  "key12": "4pKVRui4PXVGxFAnYWoms8EMkTsCzaxXEjvJQ1GPBWvKrFunQJ143ewajuLMejjrpd6dGT9oEueqiwmZZsdL7LWL",
  "key13": "4178CD24Uuzax9NwccVK7dvrsNhXSMWCbMqRthgjjyDz6SLfRhTnpMnw8JtQTZyR7ENzbEMcjAYiq3tN5JCq5HqT",
  "key14": "3Vq1DtP5SiJ26kzMYE11HWTG3qqLUB4pMcHgHivNASFtzWAYE3NoRBYFJb7wh5Vqr3xriZuGfiFNcag4sSTzCnsv",
  "key15": "2zb8aaS9FeRbV7kjZoY49UvNgCoAnmDxMGM2WMSz1yVu1zuXPLnDL4UJohcJkuV8Jw5vhFwKk7QBYiPaMjS8sVUF",
  "key16": "3P9ZYNBZyPvfzt2Y3NryqqpuaoAbsctPbBpH1MnvZ4QEnswNBYqpZB7sE6uz9i35RdEGwDsAUEibsfBVxLaJKDe9",
  "key17": "59gWqQMQZn42aVdCmHWQNxamwJrWAxvysh64gzm2WJnwDJwyMef6SXcytzA6aDFcybSFU7EJyVS5pcBnuvJi1up7",
  "key18": "3xhNDpyCtysoFJnQHnrcwUYRh2LtFU6ecjkFxqvrSJ3WAfW6Mu58DMEHj6b45jyVJg3pv6xpMKRgdMExwXw3o95h",
  "key19": "4xZwSUpPya4EndUZ6CtdkZRvsx6dWYWynNwrx7ipmVp93q6jfW3CPgvmuH8UmHYdyfQgYsUjtLmR534LytDCiPga",
  "key20": "5ahhictZkMSiNWa3WXSbEFKBQLZ47dCkMyHZWHQNcvUAQnTKzkxESiUFEXqotWLuyBz1aZAKoZY5xMZCHv49KpSa",
  "key21": "5byzoUYQvukVkXZHZRfbrVVfHYbge38pB1vw2hkvx6RRD6jDoWhNbGasQb8AX7nzrHyhaPoyE4nm8tfzPmUwJzuT",
  "key22": "3VhZ8mp7noTWv4A7YmjkUU8L3UtYp3r2Bjwm8kJqDKLh7BA2hTJTWRiDZnQnD2rtj4LijVr7sH3XsvUvjiXZa7My",
  "key23": "41deGP15q8QHKV3kzy2jfcfRnaEwZC59eULjZQB4ZnfRLjVcUW4V5TsaUQPMJByhe4uwCmaYH3YYXQNxoTpTTE3B",
  "key24": "8pfFBbED7TaMACuQWsoWvWidhcXpUGfYrfUc6f6Yhp5A1nG4cnLpMFuRMzY2QwXkSHHvmFqPexJ89qjCig9Zpfn",
  "key25": "5B3wbpGPMWLQY9ZTaEjRg2fkgNnucH43sPWEPvgdRZfQC2NCar1u5SaZSsNFYFnLFxTJh5vMdJ6Wxsv22ruTENSx",
  "key26": "3qmx8bCn7NHiMjMQuM3sjk8N19ttaY9ReiZwWLyU4r2XHtxLkQVMX26Qtwm9EHXna6yQncJKuUShzns4xzfjf14y",
  "key27": "5b9ZwwBJrS2woNwzwDePpQqjA46Fj63BwoNFeWaKqveEP56XTGEP1qHQUpkUYXFodtqE9c9H3YsLTEweYVFFz85G",
  "key28": "26RzPVqrG3BjN7nHoLCbVzdDE84Qf1UYX7JTN2GsNVKRHRjD9UdTz62YecUjzLFKQ994bRoKVVTwwvdeUBNTBEyf",
  "key29": "4EGeFpHAr9Zst4vZCZgeJsb7SNv4pLZ1X6m8HQgbCYdDG78yL6ohH1mZXEtNhGCTkwQMApXZHS2JC6GiQp82X3Gm",
  "key30": "4LzdzX4tebKqrcZoKs5c9DTcWdejv3ge522AxJivMiNQd46fcydCd1rVkBAkdfQtevmHxxXCK9y75YvZhuGa5EA2",
  "key31": "2WNNCzrnBZyNwx17gZW5g4KWJb3Yq5WgNrRMHfyPmsvsSyr1TvMTYgiCmr6XaEB3AqRfr375hoH5MQAMJwtfk3HM",
  "key32": "2ca3CNKrVZsjkQbpJYD3mcAGoqftXymMpZMQopfXkv2o2Ku2KjMxUvotfFSQVpiZDTAZRPy5xqzGUmK2BxjsS1LY",
  "key33": "4YrzovpRcfauv6n6Kevufx8QEToiSJjP2jSXzyJ5Xufxvc3otHjicwHUo2ZnNjKYCoiDzkCEfSj9sXVTg3xqU8zc",
  "key34": "5ZB7rFdmhvAWAaR2YACYkyqog95GsYreAvhae452WjDikFFNf62qJa3PAwS4RrZyUxzfCgFJeK7UuWiG5a7FF69n",
  "key35": "61mrXDmfjRkTteNs6bTbZmfjt2cF29eg6kV9R1gDrS9HtfAb3oFticCjWe69T9tgmFWMToqFDXFMunJrUgeoXRjP",
  "key36": "3iToz8ZXEdwV4icFtHJBGCSj1vKz3Lh8EgsbdkDPJ4bJMDdQmsAZr7wKpqPBkVTNKvWbjHk1onyRmoPemSEsBkjw",
  "key37": "2Wb4yq7rzZDRfopU6vuv2dfecFmkK9aKL5ro6PNifJHq5uKWDD1JZcM3gktxxKZQ3bECiYbqNpGhBY6kuq5qp1Mn",
  "key38": "3WwpF4ssBXXo3P6sBqto5qi3xqAxBrG8ELvV9CAiJFVEceqGh7o3kFn4ULxzdDxb12uzuEua2reEcKaEkYPdp1PF",
  "key39": "3JjzEJ5S6k5aKYEqQe4AQaHgY3mqQQgwsvPCUsxbJ6KfanPQ8vR1tmiMcxFCf5jF1LxZpsCUvKChPRFPRLJG2x1Z",
  "key40": "26eMaM3G4NJu1AGxVUhNVDNH4eA6hLzTgR8KeoQxSQpZ3WaKQxywuUK3WncF4j7yQ4y4sxCy5MfgPsyozhDNcoVD",
  "key41": "2tmy9p7P8GXoShKMQpg2Jb2EBcrbGFCwegUfA6Qzr2JYPYNeYUVaYUhkKKm79DiLtcUeyDDgz4magabgS8WWZVNV",
  "key42": "2UgTqKJNMLfXCKWmJdB9QpM7TfeqRH43XvDNE5BxvodchJFtsWgt9im8ymtJnV2HMnxYvov5Vt4FvW5XBMjrtSqx",
  "key43": "ZBrDpBHAKHBQYZSNPe2NcscUvpf8z3idxxMaoNzJHzpidhfiXfgp5MVTP8McjJLoo4E2a2NFgMJbk5u3ijfrjwF",
  "key44": "4wr9RcrurmgUTCsX97dNnT8wbBr9bW6Eg9gDsNjCdhtEkJoknybQHsvDKu3rum4PkDTqtAviD1x5L1KpZbj5WyHY",
  "key45": "2PnLwJmqmEJwApruUF1NsR7YBS8RELQHQW9dC1chKtszc2RLt3uJsRbKjS7h2Gk2LtBjHTwWoqJSWNUoyNHUJtgp",
  "key46": "2C3cdLNVXrAVb7fAquGnRY2gUTrTB8RvxVcT2Z9s1bQ7NaqZUgzKjGAXYyRa7SzYfXBUxi2fywYXe7xev4pKfBf6",
  "key47": "4s3ioF84wUQVMhCgXuat1eftjp5bafa4CfQimCFycUbUvRSehix8Fs1ZwR7GdPsnbWMtyG5RbtYSX8JXdSwHcoWq",
  "key48": "5MrwAJEV9LyBZoNVLYt8a8pjVPJg4n7ttPbXeNPpYRssbxTUU1P2vChDZQ8LHSZBD4PHuPy776qUZHA9p17JJQ2o"
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
