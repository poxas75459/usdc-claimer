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
    "46PCGsz1EwsRqqTjWMbtiW3NzQNYjnKD1RNnU2z5433xGQRAfsnbPJU9QThACW8QVwtFZXMtP4t6G8M31YHDmLUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s8x4wjuXxTvzCZFWdLKbKPryGvYkUikXLiasHsgZ5dp3kcGtLMFtDW8UwDdEBm9mWGkATwZRCmLvmqp7UjhxWwC",
  "key1": "2WmW7Tk3NDyiTAwpWgNVEDTNbFKCJa6SeCt6ypxqWVWwoHfLmVtTMrcMZG2wSorFATPR6QuoonDQNzv4vJMUSYd",
  "key2": "vzq1vsiNFPK4HhTJ8UG9LDzQcBnR5m7ZCMnreSw8cSrjaPYpbAEMHj7xmekts4QwqdvZcJ4aBNxSAHTDBzE24wR",
  "key3": "5yK5wjte34ugvk4Co13xXsKdo8epzmFT4rQgRs1iJ4nc9dxpmWWAX7SdPVwXmH4iU55X1EbWcRuTAcqoRDZav9u3",
  "key4": "2kG1ZLCYwupuKfdTKJz6zMkWfcSGVrvB31czGzUEFDg7eJvMHh7Vk5EyfLJP8hHyFRPKpEptBJWqk9qkmSiJwnas",
  "key5": "36Am8gRjfxtBSgpnSPSNB3LBQdKiBhoQkd9UtQkdJUsizdB81vTYSEZ5AqYfN5SMLzCiBo5Nvz94iEmDY55nVVzG",
  "key6": "2mv2xA6xZvuKNzX7ofyyMKHVbW2mWus1BGM8gpLPqdA7uBzgv41AvF8xhv73fA5yu4Hkdmk2nV5ckipX9VaG1uTo",
  "key7": "BDPTsJS9ZK5EcsfNJnAhprcW2GWaKc3afErUqo1nE8sPDXcQcoWChQZdoWZjfr2qZ7QGVgBScepDHU3vBcqkxxM",
  "key8": "2AHSUmyTLr8d1kJKPcYS4aBLHNp7u2HAPndDNtTyfjhxwuX4hAVWBCtuv7vCfhTn3uSkiHjSUjq5ZWiWrWGTYJqS",
  "key9": "RwKHRusYrTESxgaAX2X2Low2MiNjfJeXho7K6DPAtWVecqowPm9Y8Ra19XUpi1Tsqo8VdpvFWYkqyaEZxprd6Bo",
  "key10": "2QVi2wKhMiecaypjkSW8zxSA8AkKAXR6UWjCeRYy4hnCRf2kaN2UFoHLamb6rVDatkaahZkADXXTHtF4qdFFMWcN",
  "key11": "4CwYW3b6GSBTzHsX6BrvTxkRyHuCTi7X7yK1ExQHPMKxztgW379qzppnfGmBM1k1YXukfDWtQkn9T824KmiHLzUh",
  "key12": "T6ZTfgPQY28pr8Td2K7VjodptuVBPVaHfNwEQPWoyausQSd2uRKBdR2JmWLfaZJY7RBaQRayRHFFLzRpNo38oMc",
  "key13": "3cRmgUUzYJXHP5Cj9PF9T56igJiwAZb7Lw1NaroSLWRza2B87gQBKcWVMM1U2TkHfkLhfuY4fAEvckgmQiWcYw8X",
  "key14": "5NKbAnj1kmA2XVMSdyzcuighkZwwURuPYfioGr6stCNQooXqoUR7Zo6KGKSfKQNA571BYP9tyktyPRbGJdmXxCxj",
  "key15": "Pbhu1GimACiZjNbepFnfhHyKBupmj9yPPNHEDZuNLYDvwAcFYwe5U6uG5JwUsKfG2f2V4ZiWL4womsDS39C9ffH",
  "key16": "3VY2d59ixmWfXPcAWj8nJXgwpQLvfdpD168eMKxLkTeSeYyvhY3wUrrGRFdbF1dTdWDiGSnSWxXhVixfthFxXfWh",
  "key17": "2EbpKo6ke8yiWWEKxZsmkXSfApjx5NGZwr8RXsZ5e1u4NJ2PPNFuhgcH1hFgtRQren7Kwv97QZovdpEisbk2P58M",
  "key18": "4XvfThcWAVFjPMDWPNzgrsteRJwe8kAD3SS7LnNrVyD1GmQsWpz5LvLUA8ziRXchE3Noz7wR3kPKZmU1xfhzGpHq",
  "key19": "24T73s8kWYue7fDXYfmwU6qx2nKWGuZ4qw2yoZ63JntRYqzLN4GZgEDmhEQVRca8N4dzPxpLtcoHaSgjSqXEx1xz",
  "key20": "4oiJWZGGnvB1KtB2sNPoEjqQ9tAQNBv7CDqG86Rt3BUH2BSbRbE35QmoFmv9yczZ3cE1vNBWkHepscC35dkBYw5j",
  "key21": "4C7XQpjFrcqyhVDEqpSBGiP3QHwWEXxaHXoodYThL1iEtXtWWvUnX2FoJtWs3Qt2SuREeC6wCUHQNkweok9E7RQC",
  "key22": "ELf3un25caMJ5zrc58KA8UctY6L3HGFtgjAGQaNhMhiDTRZgtkW256WfwiXxfZzEKiw1XeSF1dn2mP71Lm7cRct",
  "key23": "2HUCgFJQbMx719jfbDUJaQE4viGCGgqZXnZdzCZj9PdC1oLKooBqYFrx1erhp1KpdRFRbwBp5iikK1PKDkj1eEnv",
  "key24": "JK8Xfawzey78G7xW9iWPYkV2gmszkNVufyuQ4eKe2zEkzrV52trJWZESV7TzYAxacDRFE8Ff3P61a2Q8weuY1bA",
  "key25": "5LgC3peeQc7q8neexei1PJcsr3FHjZGkymieTwxLFgFRjTDvsDPxfnNJTra68tY1aPbzSn2YscdBgrHLLupeQE5R",
  "key26": "2xpLB6BBuYWr1qJaJxcC28bEW3sYkLJTJyZV2BKALaiov5fzpR337BYe5KzsEgMHDb1H7SBMJbu8zjWevxqhcJHH",
  "key27": "KRtrrMBnvMj8b2CaPMxnSgjuUhp8W8cDc9xJF2hTHSkNxQBaHdq2xFdhGSjFtenmKJzmDvqsuaxAussCvhEhCvP",
  "key28": "25bEidMb1Lfzsoe5Wo51EKMxDuQw1XWHMZwqr9W17NZYdk6E6kwERakXGqEQDZjVD1h75ziTpDxCG5oxduVMiTHd",
  "key29": "QpxVcspaAGjk8RhavQE4orBgvswBubAErzim32Cy6aLLfXoNrBwoXkqWvGDrnxzRmNBEyDWKoViZzhpmYfTa1jP"
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
