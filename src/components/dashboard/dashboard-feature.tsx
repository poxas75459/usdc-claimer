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
    "44VL2NLFGanx4Es9RDY8o3pX5V7cQm6bApk9DffeRirsoVDgiexNZTsbDpdAjCtXhPgVKi5qrrt3UoKnsn5qC1Qe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JAsfhZysYZ7x8uFeRVmar6SNcyjDabi25btk3vNpazB9tBfannBcfX3kLu6qKFyxmK8N468XCfGd7WV8Za6SZvT",
  "key1": "2nWowafbjrpxzcC5bMjsLqYNmfhZSstzW3RUozY53oMdPeq9VgMcxuJWQjjYRXb2imawQRZ5o7DuKe4mGmrtVM72",
  "key2": "nTCP5aCtUGv2TvUpfdFmojnEeqRKSWGJnQd3Zp5STXdRYG1kuSQ4oLB8q8BSTpxrydkevGjqamRSJTrbBSUkN1c",
  "key3": "3M4nUse9RVWjdMNuLWSFz7V9V5v8vf2a3hJest5eyj2ZdQ8K3UMoAy6ixXEoZGRj4cNPpRiuR5eJZeiF8BBfxZo8",
  "key4": "2YA8LXsnc7x7TnY5UoNYKXp7CZSLwhVs37Dm5po25ZbwHg5vdyhjMsFShrwbs7sjycRnNm1crAmDSzGtn67uj2bL",
  "key5": "5pUzmqNQNG4Bjyh7eK9sP1fk3jTBcFBePK8LVMsxeFriYXiHjZkwsQSu2eYgZfzoSir3SAcUYsockJiQwzxd2uhA",
  "key6": "2KdeguGiYuQxvMtVRLuzwTJyqe2K4kUpNXKV25o6Wg2GSDSiFr3XZBmgerkN1zKcx5sNCBZ6kTXRC2KcxCnRaE9V",
  "key7": "3GmZFaMGkBxBq17GVb2fskT1kGE2z7faZyGvh3vyLiVvQxrqBEWxxQBTdrPDSi9t7GR56yf32hbRyQnt7ExZHJWJ",
  "key8": "5SYJ3ygBGkTRTCgDaNXyXQYuCCVzf1dmZUnKE2trhQgszwcvVVWdqft8Qcv9fTQX2gVzJXbuECdwYPTYWH1tcX5x",
  "key9": "2PftuNYH2z31q32ioW57HtDwkUMoP8HJwMKPbHimdipYCKy7x1ZhVep8woEXFm6EBqUeogG1UyrpWc8mQHCAamBN",
  "key10": "4t1FPEdKn6sCXwHuxNGxYnAAu2ZbE4JjoXoT5W9q7mQXfy7pqA6jcASs2vgpcggFQ65in3jfm1REp1mBd7yF7YnC",
  "key11": "5AoHK1gNJXXWh3EC1TF3Btc7LtpjSuCLPRa7Hbi4EryhZpNr7Hnh8zSaJeTcKTbWTqPChrZm7E3KDwNYvSocYhV7",
  "key12": "3Vgthp7TGa3tWYurErzMSnZdUduQDfxq5sLa8v317HMcYoGr4tEVAizxWfVyBvUwgbz7U4sU1HdoFXcsjGsi71xW",
  "key13": "3YtEtsfmiDpkmsVNpy6RhF7riNph6jotgw1tWsHZubc57AiVab2ghqM4fHVu8LQFgBKiHV9T1tisexF9cbsQPo9e",
  "key14": "4HVcPBtLU1VVscoWZADFabCus8BGvWJ7cS4SoKr4JQQzYTutppT4Z2qivLHZGUmfPgfmks9o2dk5J2PeEEsFyoU1",
  "key15": "21DEpsf4TSPJzYAFLM8yd4AAR9oVLhwTVtERURWfAAwFCFwwMrtD9azbVFM8LCZeq9HosLQXeUu64CyKdgPQQGR6",
  "key16": "nZyRdriu9meoETvr2LSUDNZmWwFfhkcozFBocxkeit7jfuvLfzUtgrBGvDgyeiddMj5i4boNmDZkyL9iUHEHUSE",
  "key17": "2FUy68P5oFPbYGpr9MW8P1ss486Vo9d6GkorhHmWaHFvrw78paF13Arfzy4xTWqf4YrTZhb79XJkQ86KjW2Cthtt",
  "key18": "4kFsHFJa9KwQ9MYuEAUwXu77k9d7smpQePd5Txov49qrkbXvJe6K7sFgLUY9yJ9ENX7uxWB9p14WtvmPFjueMgqP",
  "key19": "522dWVmSbwgoBxAdsFr39LmDxTFdKshrHkmQHmcn8zHoTLsW3bWehCyGGnadKKpbXGPbjC1nWSKbE52MtcpHf9kS",
  "key20": "4JJhaTkDw8rBYTUU2dAC11xt4iHEpN6p3RZxnHfKrGo4puX4PoGJqELLj9fT1HyAg52GNBUFudrWTEk14c7awKi4",
  "key21": "4LzpTdfbrJVX3WLdKEM37RjCNuHSV7fHbzn8PMTf51DBxk3xewu5ZfB4R4nYyhtHrr9cSYVygNZCMN8qEYsCLrk5",
  "key22": "Ri2he5c6ouk4fydonpRTqSyLesbAzQxLreHbQjGh85hZUxiXppSehwwN68cjBEFw11Enj86tjLvy5KKF1jpS65W",
  "key23": "NSZGjKWRkgdczUK2YzbkXmqGWwrfHhDG43pDoeeZJCEXZm91MGPVgrEgWfEDw5V7773JhAmHbNQaC65s5amCpMu",
  "key24": "3LMzg73c9wkyo82tS5PHrET54dcNvuJCiLb4JJ1r71FvYPMmWEQ3hTKYz7gBbLoQMvLX7rKJwWHhcH2vH5v7um9i",
  "key25": "3YMXqHBXvUHFnw97NRMyWqVhVgA8ShgADw4UJLv9DBvY2D6JVx8VrShycmgXwWreaoER3Uxg8pGgcxuKc3A6ytFH",
  "key26": "3vAKPWepz7Zjzf93Tcx2CuTqzkkAcKmnPEsjM8vjGCqmBDdpyTCJNoEewcFEDTKcu5QDNiqaVcuMa8dzn1NCoJZv",
  "key27": "5pgXbs1nfmR56QtTQWi2eSnRz2w6nh4MTd6rf9UX6kmouy93kGxZZUim2WRFHb9CDFGirutQwuP1an4yupbU1dDb",
  "key28": "4NVKnPgh5xA3QrAJvttkLywqaku6dcH5afG7ndF8k8jAYwvxg7MZSyogvhP9PYZjjoQtL5kFQZnKK3VRjrYYmNck",
  "key29": "JDBJ2XwVUTqc7FMWGXCg4fi3yMg9jHhai2hZZM4g4Lv3Faq4HNo8kjXAnACbdRLByJ3x4dEvbr3yVCuGsY32af6",
  "key30": "er44RLSBEV2CYgio7dpiTfrpgR2iaJ5KACF3qLaedyBPDumD75zmYXUqDK2MroQqbEDBKtaygRUsLvBZSMHjBqU",
  "key31": "4VTTd6sN5MN2mMPfFVgKRCFUXBzKWymidP13bAvttZLkuBxwJtos72AgU6UueA6ZsubpcaKN9Ft5oxmbzArphFbh",
  "key32": "5RAVcKknu28gfbnKLQqXz5oujeUNJJwtY1vPsQzE5HX7jvFvmjzHVcD2RVYkTTvnMF9LXxahtCHrtnuHcCmpiMDU",
  "key33": "3qwPoa7k4i5w6qM8sKE2CgX1GNh2BzRTySESXFwPLQB6ZvHiippRB7JvCp7MHPiAQAVCmjiRGSKWa779idVALV58",
  "key34": "5eLSRP18YF7V2QTXKsFaZXJmxC6u3QET6Q3qcWupqX1RRt4m33JA2u7Lw7hYFdVDcacZsmnzsQN4WwZCrezZDQKZ",
  "key35": "3XoeWTbYLJkA1Ut2D4DpAn1oWuQdmLVXEcxyHgqbYyGyvuvwVv4STfsz4zrZ4TNijFdxmLFbrvumtiLUbEhZya8i",
  "key36": "YkbD4dUxUggGKC77B9Bqu3ZQuKo6ACq46L7RH4y188MkpkTigazmWpH8j1Z5B4ogtXVbk1PmKJa2oyBX3mXJpd1",
  "key37": "4fRnK6EDVx9bHU9gzPdAob2Bds5F2hdYy2ozumqsjQPc4bRLzkCF2nQbwNBUtRaCydadZvDLGk4FgRAe68fxwMva",
  "key38": "4napdZNrGtYWwQAQnhQBKoxcZjcH4XWkGp1xitUu4WHMSn4UJQTduQWUsrdoFK7yySqzbNNC53xnKYobQdp8e1AF",
  "key39": "63nCs9fmgsVKnW7yV7CUS39ENgji4PdXGmMPA9poZtpgk5JzpzxQFLGArefcQhkgsheq8KKjv81zT1PqHMT1Cn9e",
  "key40": "5XuzDajYBKhhsyw8Gm7HMLfhPSckJ34KoAHHbrLHjLmNaiaXPA5CyvJGoF8TDznvmGzTLMbrJT6wRomGcThNaz7G",
  "key41": "4fXjew9As9X4pGdAnULV5CaiEo9fjy77K4UJzhiFExGXtYyFxUwGvBz98FyseqcPmvcvVSmG5sJQmBK7mX4ETNhF",
  "key42": "2KmwJQaMeMBySTymDHNxSgL3sjGed2NYHpXh9epW4QY5NkrSseZFUa7ptSKAw67DjA6YW6iXK23UMpJT5oBkux1M",
  "key43": "2v7cSmsdDnZDp9wJxyPBY5fHv3WevJmxp7VZ4wVwT8iaCJBj2HorBN8GAA6nk3mH2BtPqVWNMRyyytFU33oT9n9o",
  "key44": "fLKowwZtR8cV1qhJH9toN475iiAXx4E2hQJkBLiwER8mzv1ddnbUBVXAz87oAjza3mZT5GN1CLLDNRAKr9qV6v8",
  "key45": "dRoyrmffmTvgdxRJkibz5jLDPh8QjmjZLajjWjErqNgZLVz8Q9FbeEeKDGoCfDVkG4AKjf6vCh3KYwBx5Re5D21",
  "key46": "4TgALEFBkidM5fRVHAaqc3hgZrScZ1Ae27kTKBjw4xi2vV5W1RFVDHiNXw2d541NraYV9M5kJ4obZc1eKbPPEhKg",
  "key47": "2Pid9KmLUrQZMvtnJfVi5DcvXFxRoNSPKWERFGucM9dMHeiHx2PyRHYRK7GkqvtnNmavqMoJSKLDhQUeJpWiPGdF",
  "key48": "5Kb2xRmm7aCWwRswfCK8stcsTyz5NVuTQ7PkeevsfvvqLpMhiNosPuKGggm4TeVdBC8gXpaXQxjj92orwnfVdi4p"
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
