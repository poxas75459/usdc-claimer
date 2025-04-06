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
    "5tVGunf2QSJUA2LXXiU8x6fiWvbJnZYXmEmtjjxtTBwY9xHgTmkex76wTfPXPFsEiJ9NZ2EVB3JJES5sTr9vQrDx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dRiR9g5CSqgYZXoLQmyqbhMWTNgDZgKrpDzS7JCw8XhiBsJ26F5vr7jwL32wCYGEumz2fsUxzbz4fTG7kvZ8XE3",
  "key1": "43iiRnLqpB6GdJdzusShp4aioVzAsoTkGtjFYCuB7cyzn1hTQvc4NfoWsetMSaqkmmsQEy533Jhz4AdKUSGpVqDb",
  "key2": "3WSiA3DZCviRvDwSkjjXMgBieJpNkUz3gsarmu5aReNJLAZt8Rbwp8UjKqihRcYp2cWf63FvQTZcFLHWPRXp4pAF",
  "key3": "8LFq12JALJg9rV9u5pD7Wuz1JmLJStGwtgtvmkxYXGnePfDHVMj7zBFfdQjriJ2Mk7TTJo8WHU6feSEkzoE8uMG",
  "key4": "3e3RKjuzBgpUx1S2iaSYRNZTJXz2MS4bpxPKoMQzD1BCvC32pyHsvTvn6q1UVBTVhCkP2N62eJB8VdJKmPSGKNeH",
  "key5": "5vVaeLFWa39Pd5BQ2PDsfYxLRRNgKKge2JJPCyvtWj6sYZcoXfU5ieeTFo4VgRBE67KKpf89TeYJb8jvR54hxx4w",
  "key6": "5QYEQGJqGT4axFyUJaGYCPWztLwovH2hRQKNrcX1KGU9ApsWGvtPFcyK9gh8yXxDGyZHm754ifotZnjrxZZGDxiK",
  "key7": "5qyF8FS9YcabEefjHdz8wXyK6WausBZKQCkeHcjRnuQTTgk4a1g9RnTokbaAGb8VEr4TzGdUFbKpFvBny6aGxtxG",
  "key8": "9q6pfMAgjYydDe5TU4Cv25GgcCaV4agYZy28YVtfu8NVAPUbGtGW55YZ26NyDgzaKgEDMzzMHzpYxefW9JfXXn7",
  "key9": "3Gxdzq67YdF9WkexuaCjCrzHQVjJGTVNtFc2WycPg5GHBkm2WMpm86kT9YCdpmLeCcMCQPy6hHGV8KWVdsmhx5V6",
  "key10": "5ha8nph7Wu33my1h7U2RoBfJdqvqyZ7KAMMbauoxAWVgbfMDi7uqqU8wWzXeskJQsYAFGZ45AHUsjDNEs8Y1Hkrv",
  "key11": "ay3rgwZw3dFWbPCvH98jhQsvUkR3s8SrXKSxTA8Dhnz6endDNpBnhKCq6oBHvPJ1LAq7iREe8RrFHjdwUTpxgJZ",
  "key12": "4ZHuREZX4UsUamMgJ6MYDb35LVzSjRtYW1w41bxi8aSx1rV8bRCTBcW8G1U8XZQEputLfZUXvLeadUaJXxo8tiGr",
  "key13": "5EK77G8jTjpUmVJDYcj3f9oc5tppF2d5GBUFVTAGVisQ3CcM7qkSmDEbRYor425CESfE5jAtz7FwzBW8ktxgCb3S",
  "key14": "4KzYGK4gfuakeS6ToQWF2Ja7z1MZPxXHdNzTFAymqFsf71qDd8KsTMhnjVLeD8kavEp96p8n6UVPDSzc5XfZNgRp",
  "key15": "4CCgdVePJ3GVAjnq6TYKJ4kL23qZJrqX5wpYkF52eEAGENwaAjbB4iacKb1Tbo9GWWz2DNZVPjM4MapRhGdursrM",
  "key16": "3DeyDKzhQuBUKDGpqHGqSyFxS1HSQHopumoNty8XudEW5ZEua2nGLpUZNuFueDcjUwMCiirLkno3rDbdzVzAjgzv",
  "key17": "4Gkz9fjAqzgXDFop1wghoRiw9MDzZAxCr9W4zuYhXtvdvz44ardoV9MsjR7PQLz3YfQZ6mMCtz8Adp6HVdCFFwM8",
  "key18": "4eyLQArHw2fkPf2U1f6kMuD9fphPhHjyuySfxsEdKQT6d9BRfaGu3xLmXhbWNdqvFJVixy1iT994uTgnjFD9Z1fR",
  "key19": "3GLaDzUf7MybKFQaY8NvgQy7W4mfUZghCs718pMcfmDgB7NfPqaonFZi6BLLw8oMvpDFP23yHs3U6ZjwuwQCh2og",
  "key20": "4cpowpzEugpg7KmenPVkbk5dX6uzg35sA2zatEb9WFwe97yFvUAabBm7v3vXSVw7dBFXqsHqgEbdSKTW6b6ciexr",
  "key21": "5Jzf8sB7Eai7DG8SrQRVW7sYAZVixTwaq1qtnmf1RqSvfgzW2nwE5fHBrj5tK7sp4gM3xabqHXskfD52QNvstbDN",
  "key22": "4S5Y2DNSdzXQSwBCAhJx8m2GKYDVYatV618d9JBfB4oBykFdNa8eHDbFf5xWXAVBPXfZpUuq3EZwUN28DzuZcQkM",
  "key23": "4PeKdAgccdoQ8xoMdWZVkm8h3vqN5bN55fSSjUur5hQ198u7WReiKMYLKeDy9zfGSTbPnDPUKRSExdfH2hBFcqMf",
  "key24": "2LizrXYJyV722Ha99PHT1F4eB1Ta7yZb3VgqnGTGrDpTGKpK5S8wvrvQDgNNedawdeXcExXVLWETYvUbek1YbnL5",
  "key25": "seTni1gaGzHGJuW3EcVdBbNf9oacsuBDjtKEeNZDFa7moPMegZiLji4zShpFjkntbuetM9Nva4ZKGioJc8FgQ8Z",
  "key26": "64XNYYXEU8oPCcuWRLTmyvNvdVbebN45aKaDVxHZNCp2JNDLX7YjvHEnsnZNLzx3ANahqNupX3cjS1GH2AY7PhHR",
  "key27": "2sNRngFbZw9RQo91TddMu8FMdCWpektq2X6Z7KaTkDLYaRA8UrrFLEfEbEvCX1c1yGJFBtvHS5vpjgGWGJvuXvq6",
  "key28": "5Woudjz5YD7LfhyD9H7LAyKNJ2xfCt9mw6iG3ohcJVQSD6DW15EsXfVvEPdg2MSxqY3pkCVJRbrhDezDCeLUTEYd",
  "key29": "3uTyDGdsHco7D5coUoWsDYoS4J2KFH9vU1yCYqW1w2yZix62XTR51Jrd1K7df9do8zU2rKPAxcPZVKk9T14SVRAU",
  "key30": "2qhJFgpuL2dCqx8BdKmPKyAj4GvxUE2y9rhRJtMERLWubq8BRBqKxEwHt68wdgSsMYvaRoGHcmY8PuWMcYVD3XBc",
  "key31": "2N91hrQ1gQMMsAN17y7Fqkjk42tQxtMoZpLnA3SRBwkcURHwGLr42SB1JnejgCuR5FnmjbmnBdhW9r2fabu2njLt",
  "key32": "ZSs9Y2aZqXVXAdRthbm4Ja9jcFYUnhEnJMneC2ZHHEwmTGPVqyTyPuPY2ipgYeymYPiARdwKQojo4tdeNa9LrHC",
  "key33": "2GcU5yCc5K2993TXhwygRtmvAgsJWonZBUzeJgwJYszvahaj9cgtU1iW6X9PzCPU2CQb2z8y8uqWBAc133eGXzf3",
  "key34": "oRksqyUJ6Rekwg9bA7h3AtLBEj1e9u9LMje6yZxDMiuFTfDXCtBRfW6V31qcAy9Y2ret7dgC2PaxWKDeEtBevtp"
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
