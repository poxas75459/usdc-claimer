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
    "2jZza5XUzjRkkvRneKEa5nhRsyC2njvxnRcL4hNP9R8PvrjcEzeWybr1uxyEjWeWtHa9sGV5gN9dUb2rF1ppoFkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Xjypt1wiut2sYucW8V3m4WuqkYycUrZ36jQMaQrp71TBU9zW8eVzp1MbGbQv4GnHuXRpC4gW7QgesbRUi2QmrNS",
  "key1": "Tz1XkeUqYzdtUAKKvpfJY7VBwSghjUvvn8HWB4QQRpiTAh1SvT2LnC2Tsudq97r8kzEU1Hk7CGPCM76UzXK8cie",
  "key2": "5xV3XuaaeBCEbHDyNzRzRg3th22v4A9arzeyD4aUNegYcHbZQiXRwMnuT5L49MzmBcimVfaNLpv26KrBVbJZmsJN",
  "key3": "5mnH8Rwq1SHNBfgux3Uygur7w5RFZUXJB42mEtBvywxfRxf3MCeCcNCAUWycMCGM47yUgo9F4GpASELpkxTnYR1Y",
  "key4": "2mepbAjUxPbrSmbNtCiSjb4LuEB6iFLc1pwXgmJzGpB1qxC7xpW2pxfhWfW32MiZyQ4H3vEpx2YXVfuwkS2Gn6hb",
  "key5": "466jPXmupngXuPLdgembe7b4iBiB1HJkoVMNU2LzKu3R5vNrLtN28vKm8y75yNqLxUWYt4AfyBeP93U41nt7brKD",
  "key6": "3Tu1NJUk2k1gyEBjDrA8aTpGVm4d5fMB5Tj4jcQ6DeucvrQaKFkMGjcdArRyUQEckEQsPxKDwAfUKTEeR9EDfLqg",
  "key7": "63cCAjx2iuJscVpf7mfxzN39afDemYApLSPEfdwKB5wRqtg8NaN4RFiKXCpSPXksqDFJ7tnrsYTfZPxBao91xtya",
  "key8": "28CKA9geRhjtYjxvcwRf83Ts5p7tvrg8ZNY5Xg3sW14sc12FCFKcYVfJuC27B1jtw51w7yDpZFv1P7FxyEpHWj6g",
  "key9": "eZLXdY28LG9QvbCKREY3NYgb54XP9D26gogh1JtShPv2ryrGA63swDg4E4xLesNaj7Zqfuh2xMBzicCVEG2hVMh",
  "key10": "5Zo51eDRPH1HjkzhVvadGZTxVRT6BKWa5MgwmNyG82JzkKBWWcPd5SmnGtPnHg4zs3VoDYjAV3u6q3F4nPR1ZxEa",
  "key11": "2jcyDQTmqDsxMJ1bf7rXDzbjfDsjoBU1Qo9a581HK8mSMnn7BnQupYTFkrieVgVme8RfzU2ztF4xUUeZoAsGiqbf",
  "key12": "rSimGFi1b3vYxwcF7u9yJtEu2c88M9sDH7nc1ZMgSqLGgJ8mZGmYuJ2mFk7iruMNnwzVJbuiyrBcu6zo4wSZMMb",
  "key13": "5hCtSYts9L3KTkHKzFQ9MgPSvjc5uBT7TyJnyQBhLaZZ7xFezwLB6xhicQr3a3H4dqzF4KfqM1H9Lh5GmpUaz6VX",
  "key14": "5NH1HRCRtiVhbhRcxL1LgKQFqbHNiFmyV3mo6jVbzQxFju4Emdt6EyttXD1LKfXr4tP98jJ6XXo4WPMKU33ABiBU",
  "key15": "3yWi3hHtbpGr9ZukuwamT9496fLe8dvd9cx46S7xytXExCKhV2L63v67FpNMHyEVC4Kca3F78LgkR7daSqKCu523",
  "key16": "2etSoPGFMeY9S2HimZwHjXwxuTuzbpkXjrqdQdb6E3yt1MPQBYJmYHe4S1rRZGQu7nR6iC2sXL3xVTVtESCGLGSf",
  "key17": "brbmPByfuEkVSTY2wtjB4bMYKG4sPqjbhLaZMUMnehB2h6TrLFkvm7LdN5FECRrjtK5fxpnw2Vp4ZEbz2BCRwwg",
  "key18": "4C9m9HNnomZeyMG2Xy2ddUsaTJGZWq6SBBd6oWEjuxDnExmuA7ACbV3gpPnmZA9wBUZ87SvraoV5wYnNUwY9NQ6M",
  "key19": "5ukR7J2sKwsaVxutyuBDfENZU36vzJnPR5sU8r6g1GcZa6tw1BUyPdNjutbKLyFTE7eWLAkwJZUCRQta8GoAR5xx",
  "key20": "2VMeR2e6QyzXsTLdHb7rHqYGbFm766MN3RGYVkBde9a3RdjjJocNmFw4YdmexsWPY1Htn46G88aLmBs5Sn1S1rLm",
  "key21": "67FHEQqCcEQtq7JoWjNQu9bg3uvYfYSN71oZEvN83kXkTXtovLrEqXduKU5KQE6pPv2fbsjHsHdRaX6LupiSbaNG",
  "key22": "4zjbLQWiQmmTjPoxoygGdL6mWCxRhKtsqjFsa8xG8Y18pf78rMFmc3KqM5FwLtCjYNJTtCS6YzNzjoHwtthpxF2K",
  "key23": "4QB1x2kJRT3bp3owPCPLkpwXZLFzLs42oRNxG6DJ6dzT1m4QTo7f2ipPcvZnY3KVLbPjBsQ8c3JPrGY3YWEkYq9d",
  "key24": "2DEPFvm6ZjsWyELyhp7yGN9yuKayvij6zTe4ob8boEEeWtvoGLPPziyVfwVQyc82ThRNWUUW8Zpy5Bq8qKjH3q58",
  "key25": "3ja69myzZRxV5f6rY4rxTpFuvNFeWRZJXhCzB7adCzLTGp1fVP4uVazu3hW2JJceM2uTqJSBByQBVqVEbhfyihC1",
  "key26": "3TiukQjGd77pUqwNHRbnS3NgsDfh2eZXoaWgtkUFmc6e9L3aFQRv2iyKSJsLuKZY6pAUe4R1rHPWmjCjwXtZnYza",
  "key27": "2kHaWT2CEMCK5PCDK6fsFAHsCvkQ8rQya5pjRimmXj9YWWFTEtaEUD2bJECwWY9P4jyqDDoNtYMKBK94xcmxBujq",
  "key28": "3BqZx9CCCcjssctxDpcgLrK8fesu8a33BRaMTqhCHnW2Kw2EKYs3gG89m4QE7ojsSABCUBpado1UGLnyAnkRYxeA",
  "key29": "4qmYT5zAwPTTDcMPnHJEigwd1HpbZsU2hoCPcZLWemCPj4FrUDMQNsVSzREQQEQ3PtzXroiK6b9axgrZXtFAFNLp",
  "key30": "5CNpUFtaHHVKDD19PPJTucji2WqbJJnnSQX4g526RVWG5HCmqrfQmPDyxBqtwx71aLjgDHF51LzMTcdUyv9D2BYU",
  "key31": "4wLXokCZuwjzv72a24nfKqFL3h8jh4v6GZjjxkYpgzgoHKQ35YffRDcoU2kJTMGDBSUv74KFPxq2wMjvsv7SKTKH",
  "key32": "2QsHMQBr36Lg6mrKuDpFPUgWgPJ6hLZENrZ9Xvb2wZRdqtUQwYNCF7dk38ZWaErZ4qVunghs6pVUPyWdAYzoJwBT",
  "key33": "41bY3T9z11nwKBB6soiC6e6qrUFrQeeUJH3nzQpNRj4fpiztMsCf4vFnT4Pkt2z8rQmgaW6f91NiL4ZQybB988AW",
  "key34": "5b4TpBZCThJqQF6CqXjLpdfuwgWGZSkx4mGzdWgt2opQ1iLL7rJv7Zu5X59rCjaf3KETx1hUGEGBPEnEc2HuJuxa",
  "key35": "26H6Sqp1CViVd9q6XKkwq9BvHaKCX1WpYQc3vPCKD4F1MPUQ7D7VC6XDn9Wrtb4Gr7Eyu3eJWjKumu9XnbNCFtoY",
  "key36": "3o9tkb77ySzBNiNjaXDtPkGSCZDrPY1gyhWWZHm4Z82YgacvyMcbR17s5RFHGa5un5NpiEMGaCwd47vVg57LCL2T"
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
