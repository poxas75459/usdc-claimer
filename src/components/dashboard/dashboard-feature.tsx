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
    "344GKZcprKpNC6ng4ETnPk4dxoUgNnTbGUCQ4VvVm2M34NEKT9gdKFgnpsdWxmf8VZ6LDpF76Cxz99nxVYu99ZDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zxuh8TR1EyS6DyqaVaVpyt53deckoTgV6HFi4WPZUNwxmEKd9akmKju7GfzadHhNiVjM7xJDXpem312z91CNrdn",
  "key1": "2NCGMUVjHEZvKqBwASSBiuykTQFyU5CnLs5njXUz7LgW3PEsDFwdfcJ8MGR7wTGw1RNxf68xW6TfFhZZtBLeSCgp",
  "key2": "2yDSizpWkE1Q7zLW7zSz9PEipGBAWes1PGStpa3x5q72q7Gdc8ihYpRSCAyaCvU2oRiAkJajj6LTgRMeegKkCXSC",
  "key3": "FxLy7CDDpK6q7HgghZg5assHj5wZULdscFVuVgQ3oayH7jJVcgSPNSZyY7WnQp6GztM6RQTh9AoAU6Ba7aJg2P5",
  "key4": "2Mod1ekkR8QmdgpZG4wrtmiLWuZznrX2vAsD2JHgiwfjcQ86nqcDfJUM2PSz8LDdJHKK84gC96kkUU35iWkdqmEH",
  "key5": "2HbT37R5oqWbciuTNRWhp48EdPw6dg3jMTLT3KFBH3cQcwEysvZqBJNKEpDK3bEiCLkpTnEQJyjW4p4irfqTTmMn",
  "key6": "3X7fNheDx27pxPuquoUWW7v649rkDdEEPUZvfdBpBtT8D6dXJFdihgJNM3hJTZNMmaq5xnQUXh4PdoyY2wJ9Wdw6",
  "key7": "2EnrgLgdSVUbDcs8iu6rS7fa6rrpWZix6znEdfR2x1y2yVxdc9RmPLYVu5NLBFLDNZSHVy2KtciDfrhnoftLC2AB",
  "key8": "5YTpLHDX8pddVXUjNUUXP8kFYQprQQHWXHT7QicqJ8Q5mLZ6rQQ2TBnBaPnCtGFKPNcBAzqo26jLRRwHYP3KBAja",
  "key9": "49Ty5LyHZWptuHSzQxRQvwqhdzJ769KbxqrKToKNWWDgTbsHvLvzdnexwZTZQv8Ycs7yNZoHs59KyXX74cZ21E9r",
  "key10": "2hg35BLqWV8xWBaqTGvfWmNAL2t8dUHyvuhnxFSNWqgAmNzVKvLB8wv8AD2WCFn1Gio8PLYcY1YajfVY4SKKfWzS",
  "key11": "2qNsgZBPcS9D4SzYfgnk7zyniTHjzDpVodh3h1kx4j6BTJPZAK2MkrrZx79fefzCU2kbNRuJtTeMbTC9tEzyHB2t",
  "key12": "26h4zxpV3t7fCBjj5ZnfHJS1gKGDoLRLWxAv1BgeDf6kwe1KSi7h13mnhdf7Z4Z366PUfTfp1YTSoAh1UvPmk4Aa",
  "key13": "5WEkCHa8v5un2g4LTfLSEPsqjiabrvVPMap5BAeZYx9hdvEG2MqQEwnVUH8YU4jGGK21PSpXp6fGA9mDoxNi68k8",
  "key14": "38M632hdhkGmt5mGB99usS3a2wQREtZxf1V2Zmi3NSqPvtF5pt54zErBBvrzmxSrdPiw8eZfZnMF2NJX23Uk9Zxa",
  "key15": "TbftfgtbrevG3oai1GYsUsL1YwQN3a1N46Kiz9pub7uxCG2GUHzn17uuNxxVL4bwYJ1Mq1tAvzYwHXKo2ifPdfF",
  "key16": "xnYFpg2Lutg9owiCds9wkoitLAU1bCrG5AdVz2KQXqvfrJVjb9RyskuYxAN6kp1Gis5Rugh7ptmh3oPXwowwaa5",
  "key17": "3wruWjyTU9jvFB43E8nrUxtPWhowhJpN65cdgkGgDbofXmmaHxBtjQYjZu2a9F5ytfNxGUK83ewj7Jkt1zTW1qbc",
  "key18": "4zSLqPqP6YUk59TmnhMhYGhqYCcneteC82p7YFkUWC5oLXYT1vrJVDAUQZvVtDBcUwTYpMFrFL6UoxLNzg9ktHW7",
  "key19": "2Kc2BHfqkN7MkQ6n1njYWS5vmCL6aV8vkGkTWnA1CaamVNqF5TsQVQsPv4asnWPPQ7cVVHvY2VPo67Q8WYDSaZkP",
  "key20": "PSLtf2zyCDpLqFwPcZVvMAhsPjV7VEuhiwrA54ayxvHchHfv5oV8ZaGQKCZZBPXsac8YRtrFPpwDmsbEYoV1pU2",
  "key21": "3FZuTcga434NZxEGcYSa6vD3VcusPdKy4EWGMhcMoN3q181xrQQaNq1umzqAgvPW6MGYJrYbWoppW6ogK3WyU8Vz",
  "key22": "5qyTextUmQkSr9ZWhLGpS4ESBsX7XvzZdrzwcUGPo3oNpyCBUeUvrbGzDvQRpAiGXaYQWtLug6fTLwYnfKThPg2k",
  "key23": "3UtUfovdSaKwfeShhL9phM6CGW8puf72riX3mGQPc3D5K8SK5n7NdUj4RApVJacUGfRtkBMGnc3BntTSvBvjv6CE",
  "key24": "2g4zmivpbfRy95UdgCaP2gZaVpJvLriWFKH5ez7iRE6MUV3YK27PA9qTGDKvMdpuMERYnf13Whk9Nx4dSrgbqJR9",
  "key25": "4Sdo8w1JCikucYWWV1k5JfT7ZyhS1N8VHpVMR2nzbEwWGFZdcy8N6Ez6v8GgNYezoSGTaSDEeVFGCPF79nVaD7f4",
  "key26": "5bPchymr5bNYLk7s1h3M8X3BUu26sUifiiQHzLNHDdxrN3gn4Wx36R4VVNnepiZBxt4F7DJ9qVTP5q1yrAKaQopj",
  "key27": "4J7LxzqgpSiWqfVGkqSEEjKevGxcb6g9NPNongupBT84hXBqdmhWYNomDrR91qZuNwVnfEsjB6kBbMqGJ443vpKD",
  "key28": "5TNVHWcLRrkYKA4LCSphQrfr7iX9iCWjDQk46yEwS34EuzUFbnFSMamWL1MMc2EBxz8MJk6HYcFNUZBGK4pa3Dfj",
  "key29": "5JkBF2CsnkbSt9wgPhU6zuyYxqjkiLehP8JTg2kUhqMg46MowmMJqTGthQBAEXqqsRhWZYvhyv9z3wVw3c17nH4v",
  "key30": "2d3c9cyufy7GYHQdfxhWV3rQRz7w6cpVmFHBhvYUuuHebQodgJSSK8csAJMmiGL9aStSbUppfEBKHBr1JxSnDVDQ",
  "key31": "3ihVY5pYwBPcDFTzkuBv4KtX9SU9EVrHXhHj7vr11RpB6KhA6NHU89YuhFrtWfKG2m3Eg1Xs9RGhgnazwVfoxFBj",
  "key32": "49K2bzmY62DxdQ3C8VC8amDxvfwzNqLGTkA3rZdLKDnphmVvMkCUudE33PzWpiFppHNjrPVrNmuTqAvV9vaVeu2L",
  "key33": "3ht1wj2TR2fqQvEGQU3zVwaumHtbcF3vvyURBhJEtfnSJH6whVs7tLjzvjNXrKK1miPonGqqgGGef3RGqh7MStH6",
  "key34": "5c4CjxpQ3r42pUeULkBnA5oMBLqgGaE8rJEAVEXENdEsVkLHj8yjy72rh4THpvoAGPR1q35ixmsi8oyy3Z2rJT15",
  "key35": "gGvv5GHxW8L7pJEvyvqPLHm8dNTBHRgkk5otoEyUUZzqUQo734deKUz9MKfdfAHrSBtTZEwhBVs5YMhgyUtcUBY",
  "key36": "RLdpt9GmFkuZ2aUPX9SQ6fpAzSYLGf4QWE5LEFxJa2XfE2Ch4snNazcNtD7JUfNzktu8tgcDARB673sk2wxmqEJ",
  "key37": "3RjXoK5T8XjC1LhdMJYh3CHbWUbtpbnxkF3Ydf4BVnighyzouWsQvCFn55inUM7B48XpuPr8zTbSGuGW2oyBH2o5",
  "key38": "XnG2VQppmL4UCuh8xrZS5t23ngaszS7VBkunY46BTPDGb2oYwt1h94aacczs8NLWuUP8DLWuVGcbUMQUkiTR97p",
  "key39": "53vQXaq4t7GmD235E6gUXCs9wqJBmSySHanVin5VZeiWiG6xVa42qQ2MoJ6vMwgtBp3VdqVNuivpAJiamk2MEZod",
  "key40": "4fKCQ7kAkHLexi8rZi7ReABun2vfnkQfwmukdkrTfdJsCfyNw2vaseWh9rDektDrSX8QiZy1GQoDKwiaKZFG4Kh5",
  "key41": "4ev81u1i5741G4K3kmwxBZXrjPvtUfAvbhNYQjsmUR3SN9NGEZkAvCWFYa2vbdFWbJ7tRRrjR1jE1exw84FmXBAg",
  "key42": "3B5epxkp5QMji8PMyrf7RJx3oZMTfagmieRpeyFYobFdQGQNqC4m7iQCRdZsworGBfdrdVg2wcaxYaTvM2Wbywxs",
  "key43": "4p2PB3WMUnFND8haYywcv5rCmud35xW4TCWW5YocKd8yuuxFsAHwrdk1EyiRPRygUedmKRW7mqQ8Sinbc1c2BkkG",
  "key44": "5sGPUBjxvaHWhSjg8zJNQCCRV5CzozWdqDc3LVGkhAJov1Aq8LCrkGeGrq8FNYLjNNyHK46RLfFz1Ljqvaqn2kJE",
  "key45": "4wkcRr5vCd5oW1WWNz18j2Fad3AhftCY7WcsqtYfGH9JQz1vrXJJKqm8nZKtxes7j3SGHAsXkLCCJzAqFxmesKf8",
  "key46": "2m4JtxFHjVCa2vzeVkkUek3uVx6yj7pRypjJ9rZhmW1UHX117cP3YPiofpAF9Hp9ojMwRUWo6PtoFvRoTi1iKbJv"
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
