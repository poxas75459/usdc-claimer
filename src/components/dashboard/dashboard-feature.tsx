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
    "37dTEWH8d5ZFWv8WaVgc9FBvnAtnUTiStyV1KVYsQKPM36Hob8RVwoi4pj9t3zQT1mji3Fns4AbeiNabcBTsPNYT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zZ2VtyZB6rGfKQeBgwRNdRUQBMteLTWtCXe6JSYG2ohPHXpEFunXDRfLgf6G27oDSJTTVCU6MRAUyTAKKZCvrLj",
  "key1": "5Ro9pTcE2c17tLMAoMzvAjDAk8RL6hig6SzZzJrUhY36oHzWBdbJdkbQx6rfDiF8q56bzNGybuYq5mDB6zgrpqkd",
  "key2": "4WJcw6BJtwzJraZuMtnVcpfRCjDX3hD6KpCNbkpGnWZPj4fxs6qrpotTkfJSohE9nwBeaRnnz4M6gyma32PiRYax",
  "key3": "5n9a45RfKNYnEasLH2dRpAeLvB1CaExtMQ7QwGZzWDsFEhQgBVmaWVCiP1e9fdKuirCbDx8SyYbgb6HuPyMBMCL4",
  "key4": "6HdjwMgq7DUZ2Bt9z9SDzUQJLZrKCFuZ7MUTrubBWtmJpV88K4sBXeH3GFLSbSAwKT1o2z2iXaP82wFuLMwretf",
  "key5": "596ogvVaa9QTkyQLHBH4cWqmQ81LizYt8SuxZPN2cWXuRLuK45P8ZrSxEWbAZtGPM1DCyNVgNLkTR9eKSdefR9xK",
  "key6": "5KPvwZcppfzhRPvCE8GBgLFiKpENe3rUQY7pebgCEXkzwF8d115RBtKRG9duCvKyVLUzYZNTNLRiydvvtCUscPbD",
  "key7": "3PvUrXvmRwENKaTs1THNMZGNeeAjTvQmC7Ub7xYQJKqVG7YiKuuKufzVNnpcmRJ1hsMSEC96bCHiLFB3DmyC4CAC",
  "key8": "3nLBZsgA5S4sL3EtkUW5qcnND5f9F3eDwLzqaLsRhrxLKzxMfM8ghKvhkn16uUbKXrTaUwTpwin6Zos5XHi8ohH",
  "key9": "2dg6yXkRZsd3PG5H4MMzdVkaz1siHqudL2grTFNhrWwEGyx4Fr3M1iXE1FyB9XTR254goKxsxx9KdACgLtFxmFH2",
  "key10": "3og9CKNU4HPduFhhaUhHvJvsvYk1kMTRR383cNnh24mdxfyWuDbfZeAE2WFYjzbiFNjUmu4R41cAmVXKK16HLuty",
  "key11": "5eoLrH3bkvL9n8utwxvxu7fs1vjzULAai7N91tgw81FpZixkQEkNFki9dPCKx4YLfVS7C7Domw3zwPc68eERtGMP",
  "key12": "2MEk1NLMdncWpHCCMUWR9fNS6gM9N5fLmEzLmYZoEZaZdCMkxD8MVNUuhCdzp7PYTEeoFK8YGkUsyY5cnM9oTMNB",
  "key13": "5a5CfwUxJ2ZzCRWRHrF22VFooSqrfwqGWWJAs9Ybke7W5BLLg8oX4iMB7V1yduhr1d5doxEfRQN8W5PsT1t1SLgS",
  "key14": "46jBFcTrBuEiRCWiAnhFqQ5Nkj9GyQW4VPR9Qp9caHzH9tzyLpL5r6oQz6PSBHVqzJ9CbdW9CbsaN4pkvPNTLVti",
  "key15": "5GYTZz8kZxvS9XKTDRVNNE55prKJcX3StJzjR396xyMM87ZoezbVyJq4dP3va5BHog2cg3Q3dQesci6DXPCpKSom",
  "key16": "5irMJPWU3KW4vXPHmk2Ffr7itJCPyXDGRgK7b3idbxDs1B1Ap7ioPkCiS3hX83UVxaHJC9WEG6VWMvBaCCEtKnjL",
  "key17": "8ZXY5devG74CJbsuUzADx211hN4vnffG5uiyDgCu45j1QN8bsdVeia67yofU7VKubngVHNPPSzU2TBM6yXYFdzf",
  "key18": "2MY41zyQ9dTNpTdkkznUQm6wrmMtscmrJKDP9jHhbNrcVV8xxFvQT9BnGmP2hvWTLENtdEEDr2NDfAN574zZDKZ3",
  "key19": "2mHnqexsrTntGtbRNUCghSmjAkwNV1Aj6c55cQCYfAwzmhDdSQCtwhDBrGMkypAnz9W1fCs2UNLW7yr4Z2F6V1Lp",
  "key20": "VCvJvYsZReswhXtbivksD7GSiAiQ9YKgFXZMNDMoUn5xmPu3Xjrg9LsU91hn3xqqevMRQ3ZZWbECDeGA8HZfXaD",
  "key21": "34YHXRya2pkJHzB77v9fBdA48My6v6ZeeKJKEZ1mv3jhiW7UGWhATqyY7nVfSnT5LtJ2vn2n4z7PmCVsGhXgwoi",
  "key22": "3eRVkmVZq8WgievLmJGfJN1ccXpB1y5iKLv8No6JKLuXVcRzSvnj1RJfKYYNRFTkJyamuECSai95HViaT2J4Tp2R",
  "key23": "MfYNYabcS8dVx6xBFx8BmqZKsUuoJUjnJE3nzj1jpnhaymfQVwUFEqmn2ftxvcKnp78Np5eqHPppnPMmdGYtMNG",
  "key24": "3LFzV5JKew5rVoZ7786D4Rs6uyZDkmTBTNEBVFeVtuF7YwzxSdomuZkpgkTKbCspAVnRgaVhGxa1tGFbCCLAzvfd",
  "key25": "5KN5Bki7vCRGyZdcPoxxrnsczPzMTo6ty3aNvRMwSW1ZpJktCYYubhcHS4vaX5quMxESqAvgEVbotVqXH4D8FmbV",
  "key26": "36beYXKLNz768nTmxNed1RAKaCorMLccBeAfN83unmYaTcS5UfsePAGXrZopQcLAbZRpTnrcLscMZSkNuaJCPnMg",
  "key27": "4pp5kN1h37DqdipCejHeWdpJUHYsixktvY6hht11DBbwnasrZCedNgTYCuebsS1YPtDT7WvpxE4kxnLVxdGECSXP",
  "key28": "45AM1KBPV9yMaUx7nrT5sWgVBNKpE5fyL1HSUuLVVWPaDSPqNSsEy7EUc5ApeZZKpfb15si41RQweX74MqK5H5gb",
  "key29": "2zESe2saFaKeGeC9Ut7yCWCzmwaei713H9KCksJ8DK7xhiXSzHLoYMdXSbZhCHUWKsgKUTYDdeRiiwa4ja1ZDxkw",
  "key30": "a8VKHGhig72ACx5uSem6h7R8bYKiD25EKgrvtoV7GkzNsTfBvNUVBGYw1fXjjd7yNSdygAyjG6XYSTMeYkGGNze",
  "key31": "2rBo7fBzpp3PemAPUB3nxGfK27nQzeZCzYnoQ6aRbMb3VN1bbGT6WzUHW2DGiZ2AAULBJZZ8KvxeZnKTG6S8WNuL",
  "key32": "54jP28Rv1w9f2oXBwkYVv67YaF4FtSyxPstqYabBYUdspmZMKz1RDpQMk2uXZkARS3xb78NA8MCpTGBzv47u127q",
  "key33": "E9NoS81pqSDbu5zifCoQMFaTwq9D896vtLB864hhfuW9L9DCKppq43ARfyCGzen9TzTqwfrVL4Bc2KbDzxwBNEA",
  "key34": "5jAVX2MJtDGpATsUKCX2TEqAF1WCXQYf7JGDRQneK6AzGxh4wA1QUWg1bWtKTBmfWSpztRBVGrz35HRz67nN6Dwf",
  "key35": "5iqzuyDqkhPcUDHQrmhcqZVKTMNiyKk13c6aechpM9wfGZn5aBPrHWUHXijxnnmp2Bheec4kFv8drsXKavpyo47Y",
  "key36": "5viYzTtMnff2XD7XS8inggKumLCv2FYxR4okWqynnTiB3ybQd96Q7SnHKHsX713qHDiMv1wjNf8fbfyS5UCcs5cg",
  "key37": "4Y1ruAEh43ykCuAU6kke6Y6h9zHq9b5fbdsrd9zeuHhcwfpJrqXgL6XqDuGccM8UQpxRFB4rUbycBGZdekPDB1z6",
  "key38": "3MZNX3bt1mJb5pEbu6X5qDFbmKXRppNRz9sowwethjPga21pURLSJ6Etvp2k36A3mEYzWiFP18r6D6vK2BRFX2Ve",
  "key39": "5diKSvh6YmFKkChvtrvEQ9VTAe4gnuBN7pfQvZMtNW7o6a1sR2TG4U7amCe5bR7bVC2F35qCfoezzu2foN4iZCPw",
  "key40": "58QnXjy9UXRw1UJYN1uF9fzSDohpEBemHybtgKFDBGtqht5Kkmy22mth3KVSd5ehgSBEaV3h4oPFA6VGcw1bLvhF",
  "key41": "27rTx7upzFdP15Fm7L3bvH4bHPEfpp66mBshrNUoVPD1L58bt5ko89uDZFoAxi1CkRqVQsrjDZN1Dd5iLkZzFhzQ",
  "key42": "4aHMWni59neR4BrMgkrbJVJ1addjW9taHn63grxDxfKvM9thw1osuwKvykc5HZiWbToc2LjBpD7bX92ufL1RaP18",
  "key43": "4W71dXft7xZ3652V8GeNr84CDttPHJsfHjzWLzAdZaM25aj56w3DFVECaFnp1S6e45QUnA5CWmgXwCuagVYgcZQU"
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
