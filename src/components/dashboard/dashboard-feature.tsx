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
    "2SnsuATK46qSLqK78EQscpCaLQxQsYtzbpdWQJzseJ44zf9k5S4MpiKeA26BJrQ8W8UMd2Zf1YWwxAs7d9nF1oyP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPp6WkwdWR5EUnmhV7K7gGFqPJLvUdLkzrfG2uY8yaXKQHzmujURoyQAmm9Efi4jSgzciqYw5surJna4bXdEKu4",
  "key1": "4RjkhPYTPqboVvVkStbSBKz7u1CktWwqSVysHK2Ed17fpQ59NBifwaBrNWKwKX1P4uEx9Bpqgwg7vvvCsyzRJzJN",
  "key2": "65hYkEv61TyhA7eXCPr7G1buRWPaGy7oHcwthTcSvHNPL2yk2xBo2S6Ek88WbDGrhhkpz8EKR9KaUCCBfaHRDFvU",
  "key3": "SPVdBXWfDhbUoTnEnnZm7TgAN5PxwqXxXmM7LhnqDJDAeW5tSS7UVvdHJcHfut7A93vmZPAvH3JtcGa5UiL6VBb",
  "key4": "ESvmYPn4jwkP54ri2joCHXjPs9knQ6eGc6EV22pCYeC9jreShsJzY7FRPsmug1oCJXSVpBd3myUGnLrnd3cZuV9",
  "key5": "44NHDKwRvMWLmRQkP3EhaJZNMdCD9m3bv86kTsHQzBJqj2JUh6kh7YWU99Rm9BMPuxBjrU9gAFxw9BK9PvM25W55",
  "key6": "5vsQvYT2CknBkrGo9e6ATQ89TcsP9zQTfPXghX9nhwHzmSgmRXVn8J61pKydYsj65xLjkgqcBo5EJxCNQR4WRHFZ",
  "key7": "WNQSDn1iRBTgV8G7b8k97CNH8uD1yWzmt6pQFeHDG5b4SCw56rXEUxR76GnTwxvgABVjoe9TcMHvirzx9yUuP6k",
  "key8": "3FirCvPUzteMxRoaJ5mFdLeBv7ELbTUNtVnhQTKA2TJwM2hotefYWxWXRAvATmSiFqf6GTMSuECYSpCGzVFAmWan",
  "key9": "2pboLhuHwUmnTaX51P75GwukCFzWh7LyvMjeeVTJuaEL5W4gxGP5Hwzp6huypP3coop6hc2wty4E9RSmbDuQrcBP",
  "key10": "4hhDKatQwM9S8v3Nk8ynCXhoWRfvWj1MbfaaBTccTvW4mxPeStzb4HZfgQBTdfFwb559kCndoWVSMjLsfuY3v3wk",
  "key11": "2SMgYfMgwP5J9D2mtFZE3bSSBfdx7y38FBuvV4qTzycJWqAyNLGSAzbzPTVWtvgvrJmYNtLPKzb9wXxz6pXEdAcW",
  "key12": "4WSL5rTKA9uLnp886ZmZkSSMMzpro13xzZR6dnW7TGDEaodkphcNsbThuYrHDSTLv7fz226G9dKq4nVEiXZyHfyM",
  "key13": "46thb6xHjDmfebmLM4JtuMSvcZjCXDvSYQJwKSkQsfN4LLmZERAt8t8vV716P4GqJrc6ADsRnwZDk4gABtuqDM3s",
  "key14": "5sMuisRk6vVjHkT8eKi6UcCxRbsaKfHbJUfxV7aZV8ivBqRFHJBYqrNBQvgaeKRcSAy5Cw3uFNqgyqnn4br3EDnx",
  "key15": "2dib38jwRzBNEeew1iXwXj2ioX8bTGwYoCSneu9T9mmad3rR6rVxQzXWXKchxUjkPem6nf6C9q1FU4Q4QnpbfEaR",
  "key16": "Ccx7SbaAKdMKuVbp1pCJEG7ni4WREgVjKciUNFf6fEMM8iGKQwL4kr9D5MXWEkRD5gNg8P9d8DN8CnL3E1VQH4v",
  "key17": "cbkJ7Ys9wxPHW39W3LmVxPAjQUsGxhHBD2cyTd6BRuSbqr9v61GZJsrbGcgoBTBBzp7A2jDdjUkvPnKgoNcPzqr",
  "key18": "42Enxr7AyeZHYQShsPkiiU2vHjZgcKv3Y1nStZ76JDEXeeM7QoqEhTMKNCEsgV3aTg6uxMrjYYvyoqCuZGCJVwaX",
  "key19": "4AYcRY1ML5dncZcdXo2JWgJipNvMUNb46cpSgWtRTovPJYX6wHaHMUAaLtGL2WoZY3SYgPNAiRzBYA9KUmnWN3xg",
  "key20": "2LhwxJ3jMnuiHCVVMWUafKQCUYuSB2TVmTZP7t5s7Ns4B3thRidRBqUfHsqVcsvi6nn5REFjqCdxv68bMZVszB4N",
  "key21": "54oU46Qzhww4TA1ujwznVk6rnzxJGfXWk9cmfUCuA9A8XjMHqtHXu4vt77YSaFcynY1HyCjEueF47CVar2wLfmDm",
  "key22": "3EPJPVStEWtszEYw7WPptQdFP4UntwpnRHXxxKkjH2Qd9EcgKNVRUwGhiHPxMn2GtYv7YeVMUdZVJc19cchJMUkT",
  "key23": "3BCx31G2kFmmmBJTkgHCxfgyVFZtQEHrMtiTcdGDx5gxMDwRWZ9HSaunggBAurNNVZXbdHrwLhVGi4KSJCmstcAt",
  "key24": "aiNjKyVtNyEzdwmjTumWMH9WoMVPRFh1WxSiJgmKqoFji166ykWhkmVgc9BZCTbdrshHxSNZRDL3Vz5s2h2ktFK",
  "key25": "5A6BwXKuuWyMHZ6weXeM3kSNjFYhckEg8n13wRRd7TtKMc6MhvYnoM5qnmSgvLSeSz8MRtZRQ6GFmF7DbG5eDgrh",
  "key26": "3VcUfvfPU6AVriFxqdgULqFGNLU68VyjLgA6j8QUazsVKYphwDAWKFQPBEbbGTUsSs16qtGDnxHJnr1PqHkBs2T2",
  "key27": "61KYot6xHS8x4VKQR1ZKFRMG9NCSxmqH9C9AtrrAnLAkZzp61HAAmKZGxsAn3AzGnLCP3r7Lqo8UrB6iJegh45tN",
  "key28": "5SuvCdxvos5xrXd1k9Eb9NCcHT28chcWDo1JMaBbrcanVcfM3YWaZgr4WZYk3c6mGa8eVgQ4eyLewhaKbUty2r2F",
  "key29": "54NExqGn3z84ziynZ2n7rmgvYkjk8yn1XiRoG3Z4MZ73iH76h9uFMF3qbFvGDL1weTYVgoadWcYbTyWg7oM5M3TQ",
  "key30": "5V2dXGB7MnkpJLpTj1Fg4W7ob2TC8RBG9cWCK4Gj8mKmf1iExuykdbHMjFaMFU4rm9bB2m2CTNYbLeAJ8mFkSyKu",
  "key31": "3FudasucG6sThdeYgtGA5SK4rQvAhLrgS2DoqatYCuvSWss8495zz7ouM3EZF31uiCVn5zQ5VejBY1oKNhBxeyXF",
  "key32": "2eJnL6QwZtBGuQybyFaHSGPtG7f4gnKQa7m2tySm5axbiA548XBzHRiFrpBBKoaJNoiwaPfc8zBW7e3rLGMuHWmq",
  "key33": "44wE3BSkjq46wiPXgNEcr1QKwosjw51xxPaFBRSqQdEP3USgA8YoSoVw95CgaDzxRTaMLS8izyBJwZDAsoQsKVqD",
  "key34": "2oaHn2jz9dmTeE3Qiw8H9EvYznu4zuMBgfkERqwc6FipM4LL1VKk6qdDyC6omwvtJ8ZuUu8cDdZPdsdezkxUbwXv",
  "key35": "qLAxTcMjKti5DMvgpGH2s9H2hd7KG1bbsZHfH7wL76yoJGbTKmVDQn5cjWWa1HPibZn7ih7pWUCeETve2YVDKu1",
  "key36": "3vEp8p1H3h561WVjByUYT93fzQrP7i4b18a9cm4uYYyZTe5ATAjb3iM7FC3Kfn2ZB5DSAx1tLjZMVTjpbejFvYuP",
  "key37": "bJvaZ5eZ5iUUgcHkodvi1zNa9ibimzQ3MoD5kXw4s4WLc7Q6TDz4ozxYoj3Crj3KmHf2V4UeW2EPTmzDjD6ErJf",
  "key38": "Vhn4p3KqPzg4yUa9uo2SXNjSJoHpovoSfLuTZ3Dc8N61rmw2aJALcSwH3EVTLMGRYCcpCGKH3uL5DDeoRqfMmMT",
  "key39": "59repXMKSWxYW1FHQkihmdRztqdSgxfRPfRXWfzUWxAgdkuHqvhMBvrB4i68Ecq9zRyzFwh7ucMpVBJoBBXzdp2C",
  "key40": "66zsSXKQM4p5hEjXw6eeg5cMszkMSJnKpwHJ5rszTUnEJ4WqHCmS4fnE84zaRWykbubvriNJQjNrg52mptJ1icEN",
  "key41": "oGiWzaJQ6ud68rDZXwYNp9DZoc5T7TEPxwdQ71gPrAtPmFxNqbbrGW5XRRbB43ZSUS6ymaBPTamntHiV83Rc8xT",
  "key42": "2ia9WUBoqBGmdPEsapyR9rwPC24Yk8T3qU4VZN8jDeiQNAnqc9zN3ckxxX8abFvZ2gXykheLjhh3STqaCVtCj96f",
  "key43": "uaXZFchUHYaLmEkUAvFjgkYA3Qh4in3WRCrg4QegmvF13DnCJjxVogmV3wTiHfQEY4UkKr8MSbkUr3HHGS5mhNM",
  "key44": "3X3oWv2gwAy2oBuHoK4a8mhnv8QPrrjQTXkuycMFyLVekfURTJTm2Wc8YjzWQHdrb9xRH297qT4mTbTLfMTr4vHx",
  "key45": "2MsZHe8cax3a6xsTzCyWToXLtvKVPP9cbTp98Qz6nEBp3mz58g14t7fq129R4kRQJVGWizPhUgFcJoJrkSCBBn5x",
  "key46": "4bXfbpP9kGU8vwwJnyxw4oPGwTehL5euPXMBpM8QSafh6bQWsieYmNpzYRW6oZ8MWs86zaUSRqk3dxvUpN3NWmn1",
  "key47": "2veBPrqSK8BW1uyE3tH8ud6CPUp5yrSMBDJo9fcNLu5yXjfvdNCKY1NWUHwpQCv8hE6HLaQqw5wj2Q4gsSpXteTi",
  "key48": "5PvDbFGPZzCtpCA7vSjWVC9uqsHmgmkPagX645aWjwGn9Fm55pCKR5MfHcNqXWwTXN5FcPX8NCQSn5sZqkVq9WSE",
  "key49": "3iPVx9MRWcByWjveWQZkfBHWvFsGoiSJnD1AUJXqCUvnkNzgData7mUB7NqEDR6cdT8SWEz3nN7DUys4wfWvQYwo"
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
