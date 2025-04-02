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
    "fNDNk5tjEyYo6ChnPSMjb9x5QW4FwiRX5Qc6ibXsfNxwXrTLcFcrFGR2ZTizEqYQFzNqkx7LQAieja1YKyrUbjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KHyykzCqgkXT7VfJFCw8DL3MT261yNg6nSRbsfsbVXFcc3WfgbeHY3Du6ofgmk3wsFtamUTVxDNDUs1Ks6re4VT",
  "key1": "Gxbo3LL4CsRXHbq37Yf1pJJrMvjfuXx3xbW2iE4swGvTtJHUmugL1inXEbXnAFjvMduGAV2PtWor268vA5HV6jd",
  "key2": "3TszcK59Y2GM2GxL8KzjHq8Jx2SeKwRT9C2guzkTSa4h52SYPyHFCbJNHHNs6RNnR5Lcig7Eshmn1FqXvj5UX5tZ",
  "key3": "4FS5zbHTr2PoqWiLUcVMXPMWcCcMGT1cqJVbzSknHnWSjfdAXXfSYzgm8uzvqAa7TsGewQfyHTcmVqiEp6ConnA2",
  "key4": "YYVUkjT5z9hZg7NacS7kXyHj8GP8awDMNfhs3z7YNqyf38mgwjtj9Ru3C3T7n4d2StivHq3uX5MSM6z86iEkCHt",
  "key5": "3Jsoi7qheMCj7Azasc56q18recnEAHFyVWahaDbPfZPBY1ixcZWVvAy8MrAy9twFKxWtrQksKNiFahvBjgNw6pfQ",
  "key6": "66sD6UW6R4Bj1ZCCoDjPoWkMCSP2HazjGSzfi11o83hUuwVgh3j2AW83niguu3NA16CtroCAqUN7sJDDPYwC4unW",
  "key7": "3wNcKzRQD5XuPU6LmLc5iZ7bt7RiJieRvNdq5dNyhtF2V2RxhNfwLHq9oRfFh4z6pSKg7imQt8PPJbq4qXoxJfbc",
  "key8": "KryMZ6t4pGnkVh25dr6Hb6Pw99FcyCpWUwTrhgCfbrPSMn7k9PkS7XSjsuZd5NhEnWT6sSbVmbzJoBbp37LkiBR",
  "key9": "5zg1o3FMfYREH9YasNVSkxxbsVBc8skd5dGjBEqXFhB3RtjnBggqwrKM8L45gDAy2chJSrcwDXeHhABmUrMUyRvj",
  "key10": "jBsbQq6q1SXSwPMKC9TRdniuWY2uztpYNvSRxUiJkRRvA3oJqSc3tX9PkKLMLvtA1n374cLhGmRXMR88B4gVKkc",
  "key11": "2GkMfXbK72qAU86HgVsauyw3yagKg2uJtpeaVdaGw4JYuNimrqgEZp2itCsffXyUGvAnJZ94M1LYShT1fTMTHbin",
  "key12": "3yLc5obvwPmF6p1dCYNRqVQupR4D1CybuR4LMqgcbdp8TpwPPqtm8G9a4pgPgDVia1LgcX2XMWsS1q3HzyjuAWuC",
  "key13": "4p6T6HCP1cTDy5EfpNjhVdojCGAWDzn1FPUrDkLaLkLQyBkJhpBCNLqbQdqKi3GK7W8rTHsxw6Pco9X4L63FZWQR",
  "key14": "22N9WPy7NhSi1SVZ5RU6fxXdvorYCohtv4eBHr3o3vwnLgNNftRfkXdXsdzYmF3jpHeVRZPZ64PcXE5rX7ARj4Ud",
  "key15": "3ZEU5QJccE67ie1wmqKvto9cg7A7TGcdMCGWNfJUj9j74XcvBUEXaWJZAbywsNv1d78CiRvBoXQ4JhBCzGxaTgHH",
  "key16": "124sHLDNMpqHXzdTUt2Ns5E8A3wTrZbshWHszwDd1FX31fHwtpRXjiUfx7GJhAuzfjhsm2fhVrTnvkrZqsifU8Qi",
  "key17": "23cpNM8zwLt31EsHJiiWJhaQumgZEZvBX9iQcbUXZTSzRzWS19LTjyVXJkHPChJYdFuqho55KgWAyq3YWxtGjbXC",
  "key18": "4WS3PnpbfFnQwGnQsJktjaUZ8kNjJ2d6Q2ADTSD2dqqrNPXojHSSppupEpir7BpN7V2DyepA6b8ScbQtY84vGvGP",
  "key19": "4R8icrDN6EvLnMtQrkYF5bgLaPSa9c6PXSCLVykj4UpdUdR5gGEAaLpkhejPVtA1aCWZQ5HUeV8Hz1sdHMc2X9na",
  "key20": "3KsWesideVhCr79A53SA4rQhZ6LmAjkcRhCh1oQ3qQpnBU9NnwoBfdX8eLniBTWn85GKFcKV9mP9cDV3jq8CH4Ne",
  "key21": "ohgUz1ViB78FPBzz58HuXDYemV1g6jthfZ41Vxr5YXaPDVgLzxdUwNsYLwTbTqc9UjCKUBMQdTNbU1uQk58pfY6",
  "key22": "3ZFP78UtR79UamQZT9AMspQSv67kesvBWJcA4shfRKGAcug1mwPrg8rkcuRTM99Wu5b8YBuetgabBYC68vSsvy1t",
  "key23": "5i9sduux4Hn63AS25mjnStaNdSRz78K3LmEQqSrSbV2ktD6Kp5zvzSoNg8zxfTcXLPXQnwAYgDCD5yLMLg1Hehhc",
  "key24": "2uujwkL8Ugnq7g85mpaAzkJvgVLq8bKE39XspBcqieLhrshBhyav1MZTgLoBAY8GujmryYekTXovkLmzDxW5SuJj",
  "key25": "3DhTk7w5HHFVJrv2WGFvjuxPWkG25pi5BiEce33GxwNxdwoSVJn5QSk2hRXoWS9vo3CT5Gd8WHxgWfB8X4B4K56H",
  "key26": "4D7zCLfiLBo2LLXN1rjcTZY7GXyusv6nGGwLBypi79g46rpYa4DfuaMMTDuV22WEXpawnrc5zNa2ascrgBTVgcgF",
  "key27": "44XtvYj7fHuV1bTeqs2215eFkAMnsjEfcGjyGJwydLfpDcyFd646PVQaZJf7AvvFetMNXhGTz3KwMsK7Tjfet1Ps",
  "key28": "4K2qEnJ8mEhpFCfJX8B1JivGpdPDVskb4xyJTtkzHiZkDLHmw5nkPcx6Msdokxo15Y9ifPBKzKpUm1Kkmycgzzbf",
  "key29": "45XQjvSQaS9tTmLMTZ5CzQYbL9pCbLnDyVaqyPWrUy5LYw4Comto6ydcJnMm3c1vmH3E7rnhUXFeHGm4XScWtm8y",
  "key30": "35qakHenGE222kVBvhmL8Wb5oXaS7C4W2s6U2psqM4kur2sJdbqvsJQ1bJFNakTxxLT77m2G6Zg51wb48TspJPy1",
  "key31": "zQqkz8ByR4zzHu53W3CY8mdvDJYp9DR7cCxCsNitq5uJ4ynyFdg2aRrcHLoKHjHKZT8g4a3EGemhFRqrpiAYjQR",
  "key32": "5pXq214m28fzydpDyqkWGtjQt2XpmcSui6w3Z8WP8RAg6ioRQuYXTCFCpDZTkUt9urtbmZeEf4piUcEAwi93C1kZ",
  "key33": "CzhByQpVnhNQMB6iRKPmj2ziWC5uoBqCiZyNbSLBnQcQE9z9eisd3LnzhSj5gY4XgzUxgnrmBUWxVnUAyq8aV1u",
  "key34": "4qCRphiqXSQe6WhJTXXozoABLwJaq88HsLrcQFjWXnqH6n8L1zmFGSxowmddQoXRizrd4Fur3GW2xiue2uj3gp66",
  "key35": "5HvnLJPqYqiNZUvd6WPo5C4A5E3NYqrRkPGnSqkpu7cv2oB4ZGQAvuRuNgBrUmAB6kjw3R9WyF9cN7tobh6H9tfj",
  "key36": "5rf2frhnLhxKJpi95KeQCaYKsk8aRnz2kkbYpovTnvVsUWJRNAwDFG1LL5dEU5CJadaB4UfnSLeeFBPTGPD2FKWt",
  "key37": "8ztCC53XUdGEBnreEiyo6f7XHVQtLZ1ix8PBdFcsuiGs65etGHNdaY1LWjQ4YrJVs2LdpAAXgdiz3y3PKT8gkcC",
  "key38": "49jY6paPbA1tjkqfs9Y9hRW3WbAprPA2a8kJ3zjLNa8G1DSsijUskqtmCZfFBTwdoxasuXhWuntwHoiGJ6WVqmtu",
  "key39": "3NgZF4JmYPUwhYVmSYfnwfYksdvtJxGbqDmJiSWTDAeSg1stJgAxCzwbMZGGCbuB2jJ87MBStH1swt1jPXp36s2y",
  "key40": "3PuB8NcehnWHTWJdK3dBuedszGNEr2joxfy2Jw8eW75M1Jssirhm5VkBYrshGGiXb96ZneQg8E7icNXqugbj3atK",
  "key41": "3bXoNPy2Zvbrfvu73JaHgRJF4U1PBsCJsr1WMgzrGzu4P3W5ND2jyTWVSwhfg8efEyxxC9a3KKXrAa39QLXQSuhx",
  "key42": "4JZp9gxFN44V9GwcBCvAnE8m6XQupHMC4BtPSCpGmoNPcQ1fL7wgwGWCzf7kZ7qTB53Wx6PvR2t6578qw7yxKZe8",
  "key43": "2FEEbmnKvoNmLzvfevP2Hoqp6iMKcJgG28hC5khqYdmFdmWUpQyik6nMQwQg82YwPRBmigSZVcMK9nZRLjtjBzBe",
  "key44": "2ooXoKuT99ad5XUjtGDUVzkPmCFrz9jCRPR5TidE3R6pFpuSmCuKVmoGtEdQhzjisR7iauiFke3gAgTgD8xYR7uj",
  "key45": "5bTAmn4eW8xdHnxr8Qx1YANXAd7RFDyXaZMdgzBUTkv914HjzXAPF65ZCjCuus1RtaLfA6AtTrymB8AGY9FPywAg",
  "key46": "yLE4iedyqzGt37yaeDnvpJWFqnMKtnAFkCGDUMtPnuBoeg9zu3X87q4T34hMYzSRoRcxapkDWDdTTjS2gWPHrg2",
  "key47": "2GGbiPGFicU38WLgax7WHiaJxCFMrr1i1pdsffLN2Y281T5B1sEb6yGTtf7R2gEQGXZ2Ajafb9WrCPam9PBgHn4w",
  "key48": "38cMusGkCkAqojGjTqsXn9KmmoFAuyrWQ5p9XncqsRxp3zCfAaSmXT1Q4QmLN5tE4kx4QogZhBymwVZ2ma1cn7k1"
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
