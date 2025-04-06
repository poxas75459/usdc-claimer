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
    "3hXSrVk11aUMGsj3rV5XZ6BxsjFVS45NYQfW2HwF68PBnFsfEqBs8iyRsbv1D8UABtDodXkHoHRSecEJhpDAZA2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkzmnsDxWmYZLs9p5UFfUDwSsxBVjwxAEjJsi37t5fNAKevuSwWmbzQ44AAQPf7MvpohWnD8SSRYoKkKiPNfczh",
  "key1": "56hweL52ZjLKS7YUS1L3uqsso9dTCrz9Uoqtt75NkMJZLzi7vBHpStGMbEMSrPdjay4gpegbfeHxM7vT8p5uAJw",
  "key2": "4jGinEZCsb5CS45TfoLMkfXV62GxrW7mzmU84aC4u7gH4mZkY246rqY2vhRbJ52P9dBWFhjCHgWzAN7K2ESoifn5",
  "key3": "2JpB7JfFDENpnhhmnpGasmHuA3KEHXUNsbbgh8HgHjYhK7hsr4hG23iZj3hi5dgCNsXk19JkXAo2tNsT131fe8Aq",
  "key4": "3pFCB8hBS7td5QFaUZAbUZmxFNeeKpecTn1dtY6XPW2AQ6ukji43mugUHwQL5JHRf8S87cYcZp1TnRcLVUXP4iCn",
  "key5": "UaTt8SDYPsNghF2Aq4dC9LfAEFu1V8mLzZBNgpwCo1BtqXer5X8vMYYTYQrWYm46qHxY4NrWFn9PE64U4BGYLeN",
  "key6": "3ThSztFgjBdfRzA6izGrqQHyKyYnBUh1g2nc418b9E6rzK4g1iHMoyZR2fa4ae1fXubbjVQfMoYNvBXZ1XSzsE6W",
  "key7": "36mbCAaZ44pg5KenKfyps1RgtBVpG5V2eTwjpe1mqGLHKAPsPh2ou8ehRvucvVhLEHBgecXLxRF7FxBanvgq9HVw",
  "key8": "2kJ8G4g1CTbkyMaXDpai5NvyZUp3LHvNejPTV95S9kzPgADX9njiYpBi9Y5g4ZQrqEvcYu2Zj5uzNMoko5Jfvp8X",
  "key9": "2ahxtYgBYtpbdn7afCjun7rmhX7umDVeYg3LJfR8PAAvwtE2d6ebwxKMLMYaj89oL6o8i38oDY3op37X2YgEZ4Bq",
  "key10": "5f8QsZJo6sUwWrNjN8cJCLR6nLi1NUL9YJBeZJDeUqTxhxZtCz4PZ44MvdXvDqN1xe4Tzkf1C1Nz243VUGW3eoxP",
  "key11": "47S5dzpACz2m3rKP5tFDhvjifGyR3pyd1x9atW6ep2tFV76xWGMTfbRaGfhscVujNxuvcHkNCz6EMms4FDxqRuwA",
  "key12": "2EZ61yoJzTbtBq21fPhVRBPWfTBc7HoXsKNZ7yr5ixu3oaDfNwJzSZKUJZw5jDoXQ98yrW9mVLX4rkjLtetN27wk",
  "key13": "5sK2NPBBkRyP4K5NEu8t8TGVo5FcNTBt2vMPn2iUa1rMuxiSwvQcP1yeDWkURDREqtVBYA47YdcN3izbM1SWu7bL",
  "key14": "sBAee8JNAehAiVu3eiMBSiAkVDYVkm6jdMnXM6X8EcAuTgKYVgsU2i6RxpjB9ciaEs5UHnk2BgWx8RyR8Ebaszj",
  "key15": "4os9cDNDx2Uzn6vZvGEQ6MdofhcBJqoxaVdJr2AvD1AmHmBQoxF7jS8H8S6CSWsxQzFeCgvD6yY2ydwyH7kTGXiU",
  "key16": "3FN9Q1MhzsDnBzS8dTguVkpPu9zfvTm4rj3ogeXse5mbRaWzhvf2qbn5sk92Sxo3EXA8Umwoptc4KtSFc7bfRdp1",
  "key17": "55AhU8MkQBcduWvd4kSaYSSVuX7swXHaP3XwHDbhy9jCkaVHAGLdv9gUESEfzoM5AZpkfwqFtaesv7Ejf7mSiLmB",
  "key18": "xj3Z4cb9SSn2ADHKG2BTomCcCHH4P9xwAEtKvth8GRoP8MakDBucatKNXkZPzXRtD98jvX5tUDWCe541bDsbNaL",
  "key19": "bCb4wWBTyn37bV9L86mwmUVJC92ppY9m5MLcQ4eVR7VH3qRJtYb4KcAmK3uWQMP29YNC36UYMUc2cxyp3DvW2pk",
  "key20": "5URiHJd7cYiibsK6e67ftpmcdYJS2T3U6kbEGiypT4F3mTRSs4pJ3wDzdLGEqo3QG4CFTcAhWo9uGhdaYQmK8JMa",
  "key21": "LDoXeYVeAdaLQ1VKuHfEjRpFfDnB4gcy3VsZmmJVS2CWEpMJC2qjRcAKmynL2C2bC15g6BJuineYE8NGMpzYP4i",
  "key22": "47WRZSjs1ooMrfmSoCRtTMFU1cjbp9ki49bCZDBJET1LxP5dktNGqp6bJcWPRqbdR1fJATnZiQ7rfP3zJpC5awZo",
  "key23": "4dUs4Xq5G4gQ2fqZt66M1CvDwhEcEccxkjTn1oyNeNyBHErEG4XZedrMi8ukrv7ejSmdPa6AsDY5sZXH5ELRH7Zu",
  "key24": "5dLi74wRykeBr9nj995uBbtAvN48RfDeC7NfgPGpx1YxE1uSmveZKBB5MFBPptWAzs3bpJTTffLuCJAJVDfvy5qf",
  "key25": "HxRL6zCxq8nZkG5DH19e6jMzMXw2r84qk5BYkWr4X6SPR8Bjw5SMdRH1nhxKj3u1oQNNFcf8cCi5G8tKqZhu5wj",
  "key26": "JoUPcjBK4aTtdVwTpKzsW8oYZtvkJpHDwjzFtLdaFXWjk5jLwsMTpqVb19cRqBW1LC4zRAs8TZu9fnv2ssGDH5E",
  "key27": "4LhKevmqpNnJZuTRNJs4VxqQhpbuHTkkaGQBGieV6UBxTQomrA5JunXi4VKsMYAEReAW4V18KSc6XXLfFoVYGadN",
  "key28": "yjKwvdiv3rV6rJEKbHkfMgvuHNcbm6ft8ogB2cVYDpNaVaM4LeRErxsEDStkbvrw5ZuiVFpwou4ADYR3uJ6Xfcj",
  "key29": "P4g1qiBrYyRRHvd42STh2mJW8ukKLgpcEwHwAA31gM6qgxPthtJYmnjUTohmeietyC3tdYtpmwG6rpKfu7W4br5",
  "key30": "5iBjhsbFQWLPLMcJLcX8y6qkzejLyJvRYqpGwZwf335wskC51eiF2zQntPfzKvmEokdYPaDo2xa3kUSBguSKCw67",
  "key31": "4bZ6TyabSuE6YG2YNHR9Lf1T4yVgevHYZKoXWsdexY7sABCT9PrDf2yHnmdk8zNSsznfokVATn5AjUsQ7xZt4vBP",
  "key32": "5PqVW1fRHvCp2Mm76uUwGW3QoTDiw394ecxD49WcJz7XkeF9Mx2iczHGmVWuvGiY8LnTzY1A6eSwy91pk3KJPcwQ",
  "key33": "3qjtJYmNsAHfhMtzzFLumC7LnW2216xyfqLzB7vNFCbsxXjvkLJ2yxSoYHTtmvvhM42tnFzoSZEz8HTaqVmjtVpg",
  "key34": "2X7uYdf8TzZm2oSzQJmfd8eJ3krsx9pY85GXMtwzP2HPQDd44RQ5paxWA7WsEcZAEKnqceErgFRTWqh1paXhL5NQ",
  "key35": "Na4AVW2PL2no4VzMqMvYF2vjRsHhz2RTExHWnrHKs36fezLxkzPehPo8VXEpuJnhzcFUQY5pjn2iJXi7k7XkP5P",
  "key36": "2iLzqQwaM6w4pr8k2Ncz5KZJj4BZBqnEFAyYqqw4PWeK2rN2JftbrNeq49voCUM8R5E29jQ9S8cCX4ak3ocwdB4V",
  "key37": "4CpKfRMAU2EYTnJX2HWRxnRusgMAazUQUw3CoFwVw7gZu5NEPaD5Bosi1Xe4KGUobmYoaTXqRgLNcnfTBofDuejj",
  "key38": "5v5aj3zbPVt4zFZZXkX1vXxgQ9wTHJtfhNEPkWfNcAo7JfPpSAxF3n9TtkoNkqxJ2h1tJqkp5MrFiFkYVtWC3Kcc",
  "key39": "4ox6L6ko1ev92wY4ujvhwBtKBY5gRDAsgrjez5QHsCtFf2P8hiZYRsGbNFWDF7npVQcqrPpRny3M4ohgUN8rKvHj",
  "key40": "4RjWDGvPZhkCzdZYBsyd1oVErvGMF5myvXDnsuPa2XnHH6FL668VeV2m3fbcayt6MXPZGc3D11udT1ehLcb7RfXr",
  "key41": "3riNz3q6B16TGmr3MCbU3QVNBsQu7PMo7HvmbgZcVjRqEDPwGHD42nMepD4z23ufPDfSN1PuHRq1m4binq6r7Xtt",
  "key42": "52jxSWeJtoseHL9eKMs4Ks2Cmwuz2qwATakn42rixVRow4VjvtdZ9n6FDwPFMBXPp586tMPHY7dHvgHWbpGiPxPz",
  "key43": "3KZy7SXDx6qX8Jw1S4eKiKEXBUaEGcdfp9u3SVp5x72Zq4KeZNJAfPAHrK8KZT6f9dNRpD6nvZiUyX1XcmHHQoSy",
  "key44": "4f9pb5JL2cMktCarwA5meTMF9r7fAr8P1vSGKubn4MN2p35cgvHBNWzWay2hZsvMhFPnSRPs12m2XkZbTULry7Av",
  "key45": "5uqiZc7FbX5iVs2fXJ7V8uHZNjYQCh8hSAQZoLcvrdmFzao19GcQTmZfUERHBApPY5r9Unqq1XsKpejLhjpxEuhH",
  "key46": "aZ7DBPxPpxjpYv4tRwDCzxYDo7Px78ZurSMRFXcxnxqpN3i6gACC6qYj2ZUk86MgvXvHP2ht4194EtNL6kcnRDp"
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
