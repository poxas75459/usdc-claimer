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
    "2wPcvbqz12NkhDBuEKKXxhDrSnk2EriyW6k9GdKn3QnhekFVp5Ep2UjZktsh3GSPPowyjUqki8eEhQUaq8XFQ4Gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5egs3vnc3MNj2jctiuwsXHwFbvZ9kvM6vCQAjotC1CzrShYYycBJeuGv2NXFUBZGfpY1BpJr6Ta7UukJdfa8NSxi",
  "key1": "2hiMkGsCbrrw9hR6Kg5RXdPSS1X6Hsfg2PQefxk7KJMtvAHw6rvrqxR31jXG5Zrb8Md76EuX47ajzEmCNhnUaAi8",
  "key2": "2RfFyD3R4uzmQF1aEJRwVD8zaZdWxQEiULdrgBdLXJ9QfjQpXE8gnge1sWacozhsqXeRu6yXjHyXDHnKFN12Lw7b",
  "key3": "3zyYXgKsTy1EzBLAW2Q8Z8mtbkhUxdmF1BBmLVGZy6jeA3wiG89dnsDGngtAS5pZVoHdSnSgxaPC4ftgCCcRu6Pw",
  "key4": "4AFKLsXoHTGaPXtJcBenYoeuPnHKEHi31heeKK2JaaLJU4rndpWxaQ4W8g8gE5bM1mFSeUCN6qPgyD2SyrnggfaR",
  "key5": "5aemaYadPfwrt8fo3a7vKd85UxyKcfHLPWVqtVCJh9MyUZUu1AfoJvm9ew4mF9hw2zJqwohhAVcc1GhhqHEoSZt6",
  "key6": "3EkkWCJHo79wdpjwLiKDFHB17WuwLR3dFLv8z7Vmn3q72Pd9QcsDkyzwLd2RizvAyLFNHPdpVoFfGSibQG6XfsGL",
  "key7": "HQpKm7LGZpeTTbHAddwgkZxVHnMW7xvuTT2SFSdhftx3cRr2yxJy1NBZSUgEceGtNkGJcW3QTo6xq84hQZEWnF2",
  "key8": "3nKKuyqn1kPzzDySx2vEq4x5DNJXkSszjLbijkUshD6kZkPioav2Rn9c9T5Hef79q97hoFhZR4PUvv8JyNhhZGFT",
  "key9": "3X9okrUtVgoUEj7mA6CucFceofsCG83UmPZapt2RCW62WPuxQzMfu8dzigWzf1CMnQBSF7h54BcXQoLAqB1wsJYN",
  "key10": "3s6yMsJmPgHKD2jzX1tDfxdaiKz1e5bxHmwxo7o9ohmFBdMzf6TeTWwXymRRYHnFeUWxZV9L1QPujry3mYtoso9H",
  "key11": "2dsyz4863JFdpRvfiaerVoGCYTh2nMF2H1gJvEDhyKqXkNf8icqPauBZaAnUN5wskcVukxUXsQbEwSVvAwcpwMhB",
  "key12": "2fDhJi2Hi9fZhNC1rrCKiK7fB7y9qrMWPikGhULyQ8XjgVKb9Gvo8Uvp4mnofWt3ePDRcRmD2A1bPYa1eW6k4czP",
  "key13": "2GqTeZmjmNhrjvpNNSh6q6SYHSmvFWDtWbsTtipH29Xw6j87oLzE5NQhAsEH2sR5skWpLfd1X44BkjYgJ9jZbikT",
  "key14": "64mqtrEB3ZT2XqDP3SfeFCrLW8w9vp87T3Pi6KcG5RaeKmvxvmCStjcEtevdjxgTw5tqxnRSJfrMZnqnAkTdfonZ",
  "key15": "24Q3xJXuTL5Xu67rRFwyPknbmtEtzQ9iN6qy2GXBRuRcpXoehQbV5tSj5aaQMnN2qDvyxmo7DfYmAbkJrcRUzEZT",
  "key16": "581cgaDz6915GF42UH8HFEjEYtWBhj5Uqw8a2t5GPTEPtF3iNdbSDjeGuhkkD6jQXa3cG3mKC9WerRsuv1ELiZdy",
  "key17": "37wNbvb99XjPPTcHAS4phrwQndqarjisCcBNCyt2vhiuq5WcQeREbKUJjJDSciqXAtMyv1d68CobAKXq8Uem8vEZ",
  "key18": "65mTxWtDbkbbdav2wDT14Qg1jNJw2YKEyZnRonAgPMxS4t2Qz5dkXyWsTj9CkGRbDX4tN8am1dZb6zU4eCde6pMP",
  "key19": "3rmUYzAdS5aoQMTw6df46WJsFyUHJBvVRaPZ54Ri3VFK6KKqbBxYcf63S8dEBVTUvD5w3ymy34bC2TETQiCtWm8J",
  "key20": "5CpUb8Bccyyx7y2iPkT3UJeX2CQCTWLwunmNAVfLoKKR46SgpNKs6A5yya2XT3WQRZ58mNMtzcfGLLi1xMWJMEdZ",
  "key21": "4VSiWvtW2yXMt1J1iu53uTzppG1yidymWfEKKVkem8g2scfyMHzudHd2fLxgQvcVdbTeUjV7AwXCuvFKnC5v2KuA",
  "key22": "4ARXy3g1eN6si4cHxZ5EcU776f9eozyQWKnotqdesh62UHZrdXskeB6Ugfxcze4TQaXybKbABJbQAUfUYbEtPQX3",
  "key23": "63CQrLvB726EBrs1PqxqoHbJCWRNUtDBxtzPQZfcaFhrRikd4cErAcEYmxMSHNzRQL1R3ZgQhgrLFupAGqaWMxm7",
  "key24": "5ukZ14d3TkisAwgLTWaijwsRZ93uSgkhR3FMZ35YDfPYYKfwd6gSP584Po7nW9PP1GXZh3DWC7qHCn62sNAMHHgs",
  "key25": "3CwGwiWkd9xJvwdZ365CqQos7UM64jgct9oH5jNSmdAPaS1hkAM9MmXNXxfjRCmok9SwnHnZUT2utZC5o2yQ4u9H",
  "key26": "RZWWyHFrXhtKpe8eHSDyG6B38GzswRjGNAbdzPN8WLgrYn7AyMGMXNmiooVzMWWbEF3rwnNtvXxfA3p7j9V3wEC"
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
