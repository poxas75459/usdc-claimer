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
    "MhZbz4VerWcCUpt65gsgeK7L6AiifhMwbamqofJUSKdR9DS6SAW5d4GB451aW8jpdSsSnEtckomPa6xGytE2mGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ykaMHVmi8i3YUxRADvA2E6wSfbJyAK8N5vQ6cP42WfiDgyFPE3vHy3FFrPS3AX75AaVxKM11MMNe7dVbG2pGVtd",
  "key1": "MUEbPx3GKxe3LtV9avmy87JSU1zASFoqoxnKCekFD3nY6dhjDbW728FBbZ1bpSNF3N7zHKPJionaNMd8sEkRLZQ",
  "key2": "5KysFMA2yJgXMdSruqkH6FCeeihJ6LM8vcmZ6dqkvzU9h2PjkqepiskNt38MNK4wAnTCrzbfvzkk8dDoHa95QmKC",
  "key3": "2P5Z23EHv34tSY4J8CkQWKELVekDRw57xhtEpVL8CMDqBrb74bA3NsF4uDCd2eApXKBnRQ4WJbMBZpNGExyTQnag",
  "key4": "45W8XEK1JzJ14sPQ7HvHeGy6fVcWhbze7ak1DEBk87W77RP52N39xT6kE4YEFS1Ctj8LL4FSjat4FtjeaDM3vgQn",
  "key5": "4DhdZzRpR6SozHhrvz1EEFxQDvFAVtiEz1cXUTgGopP7pcDz59TmXuTqWEAcVGXvPgjXp3JVQ3Xew3YfL4HSmWhN",
  "key6": "2kJxcTa2xuJUtviV71gYreahzRxRJP5jFTL8kHWbgWGCEErGWffnCkLxiCMaGA4ZtPfaCmiyNJAmSMYtRnRME4Ku",
  "key7": "2HWtYRTwfxMEgcXgNPJRkLG5EpaVQZh2cz1drevEkjLD4bCTZDVSWYFECSP3wHCBMFQJDD1btvUXqaaY4jdE8gtj",
  "key8": "26EXq4JYUcExazXybVvv7vUxBeAeWPjuCdrtL1FZBKZ56yYvyb3xcG5MpnDnFpckrSZNfyuDVxjaD2jZzCFU65qz",
  "key9": "2FmzWycg46HBGhjMua63r4s3hQEBinej7ja5CUqQb8EXJsXgsSmDyHXBAVzt7g9Tgjn7eXNyzePaEPspZHR2vPcs",
  "key10": "2EHerjLguNKeNkP4wZuQHzZMwBSm4UHt9FAvec7UqydTDTM8KQjGUhhsto4n7z1DN9bZKRb4Db4H72YDKh4rrqbq",
  "key11": "574AYJUo8rmxGqeFy45w3mk1J4QEBLYfLo7X2o9cbPKUypPjLtjrU4NmG2Cqb9cvwYrnyHsyMxW6hnr6qis2b1wX",
  "key12": "3oSftBipBPHba1oga73JwymKVpmpWZXvsmSoc9V6TX6nnfvgeurSApAfKC6wZRe5F9BtrtgTMqrHHcW6hoaJrU6o",
  "key13": "4trSKi7NagiRDbB5aD8vHsA2V6kmjFNDGxB6bRok1iUUtmHpaykqEi6dr8hvzAiV14z6wXdt8hRXZANW9TqpTRBo",
  "key14": "5vhvxStynrTgyvd5xGsg8VciZCixhcrTrXUxAnNjLxwW4U2qk3yjcH7A1kg8JS21As9YbZc1PmgcjeiL6MHVbY1a",
  "key15": "4ADJNfnoLSNkubCYgCMjYzZppoQHsnToN4Cf4fzaJ5RFxS3Px8nC5Eu4Zk7ozk6QR13d8vcFCMq6Q6DVWcLBZQTd",
  "key16": "5oNXfj67PjnTv9epfWwbsTUxP5edJfUD9QqphtoV2bFMh7QuGqhJMKCXs2PfideQueRpMwXhSiMRhPA6fWuWpAKb",
  "key17": "4tFVvQdS8Q1GjqCtYMbN8G7Mrf4NAsNjQywjpKST1MLJxq29fre4ePmgRspLv6J9FqL3PHqPARfmSf1nDCNHJ6rg",
  "key18": "2EDXAthKZMads7Vz2iViTinno7DwWsVcVDpkhoCWA35HGpxppchNNxcdToLu4XKgcm8i2KUMkaNW97147vUyK2WJ",
  "key19": "5VqPLuh6szUdz63q5wtEkjTYdUF8nnNa88g8DwzTnxdfLShUCMBJ2LyeNJjSvEjWihbFCiByX4ztsNwc2fzXZyNP",
  "key20": "4aWGTZzHNyN7FYUmwCMWmYdDJej6mjYMDsPiV9R3n6FpXyNDzWHu4P2j7x47R85RhwgHMpfNNahtRT9LKu5M9p7z",
  "key21": "49yDQgAjHLPaqYCyeQ2LavYTJKDvdbVtuQAT5moXZYfqFD6xAmqMhJQWcvMePFwB7actS5QzCbp13unAfLaNSpYn",
  "key22": "2ueJWyoxSxpQkER1eGQEwbffMt1VJ1HTVZLY1htKbnjvir54VP6b8jKxuY6Qv2WDA3BWj2URccpueKaumtKkp6Z3",
  "key23": "2yYTeFKodz5Q8T7YSdTUkpcuyiHJTxLRCVy6VjaPcdrB5A6K2fzvCrfrjbSdfJEaLFa4VhRyPb489SBQoTAo9ZkG",
  "key24": "3xrKNtwWiXqQLsKWTtiTNCAKtzteBYEH8B1u8DzgF5aB7iTjxySHa333QfWqbQtutett7ttWKeSsYzpJCvExPWNi",
  "key25": "5zczvgqjmawmMtGRVb8duk1SK4RShAKHyYgQVjxC2hjDuV9ms8VRe2KwK4A51q4djT6PPma8VXzxn7bBKoLNgKbM",
  "key26": "4Rrchnn6BueykMh9bFZis7zPCSPfdiN4VtrVKki5oDTVDRAqMfaCXcBsxCkWwSZ6gRfdZVLA5XKYW97LAkjwm3g9",
  "key27": "2TXtFyRshtRCFSL25N34kNQhBWZmNdYz94SCFmzaK9eoF8ugRbKPN7ffbjQ54TZsYZo5oyiEsPjKocEhLE3M442S",
  "key28": "kC9avFmW2nXvrWtiBGaYPkiHoZKHn8w1fsch6xHGC13mRht5ZbQVpLSbr4LTVKrQas1fomvWYztERnj9HtpLmpo",
  "key29": "62JXNZQRAQoKfU3SmBAL7UgJ1rFyLZW3eDK3kpNhkdLyXEvCkEsV6D5nxVMGwDnUovaXjPU1tirrnGvYVmu8WE5h",
  "key30": "3MQRGtpuKRtqoTFMLNv6sMaBCnHWkXGC1DuFwZrS3BvX32AYyyEwTVk8mL7HapjUno72KZowpxUzgKrSTUpV7uN6",
  "key31": "iy7Mu6otRMkJE1aTzJqdYmq2JZxsrKqHAxugc28qzjsXduhHpjuBzpgaT2frqCgE8z1EiPmZpVkVMEqXAF2U49k",
  "key32": "JoXg7rHbBLVPRKGMto57Rc1qBNiermsq7pVwxRkRxkJzUScQJMjaTCxzszL3YAhcREH3VVZgGCj9DXwVMWMeLVt",
  "key33": "6TYta5Bf2c7atHSLhBraSFnMCecxs6A5etCbfjGhmQdfoCzNw46jfXnhjbyd3kzYmwkc8LsBLVAx6MZsY5StMa6",
  "key34": "4GcR4T9qyT9nECDiLJL2du4DPBGhg1VPXuBRYkkPBjdX8prWPSP3GLucxYYvbmFQdy3qQx9BnzY3xy7krBFfwciL",
  "key35": "3tYKdSNpc1o1T84BKvrrcxErzzrKXocQ67vHdYMabFyfrz34V97xHBabpd7eWYHsAHHibtkYThhvTRr3GqBH6jZV",
  "key36": "4tsH5nDQNrpSfinb21iA5mGPcepnXHTjvToL2UKzCHUXBiuPBFqfzwUmegjRRcarMPxKzHRbGsmWsF1CpU32tbvE",
  "key37": "3hGo9YiiFGN5RTzcDJYJCCYTzPab3yRPrYRHhuBYdU2jJpmQnZGp2JVqxPUaQPmWYWs4nzaEvk71AXiyPWpBh7Z3",
  "key38": "2T3Gbit46217PkDSdaBgEpvz9jwDEgYNJyGUX9MHGUcka7uh9siiShiANZhHSDEzmxotCiQcDuuws37GeALMy99h",
  "key39": "26RTrz1joHV1Xnc4gwK1eXaZZabv5qVrxRb9yFoPWEWbBqcmjrnfic9hw4GwXv62m6R8pJoaMNFNg6HznjNNycoD",
  "key40": "4GCg3Dz9RchyjgM9UEBLsFGWe1eYqEqBoztBHLZyBw6ccB9TazwCniQTdNQETZnUJ215cmfyYhwsa5KAjBtUgV68"
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
