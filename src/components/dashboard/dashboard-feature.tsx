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
    "66WgAQxfyQ4QoWxFj2nKoN9sy7oYCEWC1G36mgZQDZzdJS4qyqhDeMu6xcBmq4S4Z2tMpTp8jxDiVGCstqMrmHco"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iKTHQCX4bm2Rm9mDF12W4H8mm3oXkPDFzkCKsK2GWGVFpoACyAPqYrQmr6117zb3zo9i9QjY2EAHNbfzC6TwcR7",
  "key1": "5KEit5VfAoZMM8qVv4DTkY7rHmeL76rgMUUCeyTyRcymFRp422847PyfRmAs19WEpWhVwS9mjaUNRUN1e4AjCq7t",
  "key2": "5ntXvPDLGjEXTDTkMZq73kErpmYGHPMV8NzFETCxqLsPgfpPPsNJCqurvqf6pPji9DeecL36i7LVHVE2DGR2biqT",
  "key3": "ibc3LFPNYTXVWadphEuBXU2ftBB2A9pjfzGvAiKf3SoSsu5Un1CoXAHuh2jWK6nUa7cHpHXaByAfBZ6qDBChJPe",
  "key4": "tYXMGZTm5DGiAwe1zvgpjhxtdH5rNP1y6vmvxy5PVQSHo34dJnzk26WXky7HBo9R695eiJr6GKZ6arP8pDUgsbp",
  "key5": "5Gfv3QCiH8rLpQd8LVFwFHepsUReXk1RLTBLaFanQJn1Hj99anu21m2vLLcvAheiBrRtSYrfLE5NCV6KtC3pE24X",
  "key6": "5vUZX93itc8ffWwQqJat44obcDMMAucCUctcZSKTfpWhA9PccHFNmjLD7pQfjVk3Fg6CdwrMZThwNqQtdHGFLSQt",
  "key7": "3TXbBYG5Tg1dTSGRpEkQYQciXS5q6DEtSG6ioD2EfiDLn79Js32iUS22T6LqHcf8THi89gKrRtZSYZM95hCtUiBX",
  "key8": "32PKEr1rDCizvGWYWhBRcddonVTJRMPmz7Pgpoq9qVNuGsPN43kyedsQz2kSZbQp7DQVL3jvkH5eyi8xuzCmj1jY",
  "key9": "2uHUwsPhJSbK2ZzDS88ijPf49fL7Vgzw9vwPi957XjDdVjvABCy2kU6MyJWrG9Hui9ifwnH9gkeHUe8Zwc9uway1",
  "key10": "P2sxvo52534VETZFmeJgdLVrxtVpPnFUKfUxqutEMrg67ErYvfN9dhMZ43reMh7k8jUMdkFemh2gjhb8a9Uixop",
  "key11": "4EM3T1yCGFeboEqqMruFxxPfKXDktYdMVgJjnZSUNoXBr2XDoVYp9Kb5gCNixaYHVYZxSoYuHbuUgDnw5ZnUGZN1",
  "key12": "3a3TegWEVd6aeUfRExgRhM7KDWsX1ctQqp19qZYqcqXRduCvKuiASwSAcfTuWyFZEFdNZNztaSxz2jYCrcm6KXip",
  "key13": "4SPDRmEk5u1wZQ7aC9vgvwyCX6ePsbduXweUNPX3rJ6umfdi8je9UCzrEuFSBgGYuAZAtMGHZFxo8tmUXiLcjqPx",
  "key14": "51sUR4c7HStQ3f7CEuqXJxtSKCceCUykQfAofUVdEowgFG148zV7RReUDHYAtmxPifcceDMP5jZ92QmVERJzFTRP",
  "key15": "5JqrDcV7n4DvfXSwR4AFnaw1g84frjcST2Dcn4zofKXuFRBqqgZSKkzkWi1YbCVbc2G7crFuUGSn8EHbj9vBaJVs",
  "key16": "5Zc8HPs6Q3XBFhs4wcKkeBVh5jprt5gtAyg7cnRg26TQtkT7y2vPspSnrjRMhxyiV8p4cTGtep3PwaaBrG3W3bag",
  "key17": "5DTrFW8LNNER1zsrn3JQsUfYb7yFZD3g1Fxr9q32k8Vy9XGBAPkSnSiWALzY3qEb56sM7uprJHcrFohZQ25v8Sxh",
  "key18": "5HDufRdPdPvPhzNHnmAkt4L9rfwnngbeJMYkDoUFYCFWgrXyeXR9ZcorzJpsG4YPb31GxH5JPcJrGd7RauAgsK4T",
  "key19": "3vGRc81QFiP1L9d53AYTXy8EVM8ffJPT8puAhqbfhUFdQM6QrMjbftX1DbJ2n7LU6eqPynU3EdTumFGjnM3Yz7kU",
  "key20": "3vS3aC2Hp1N6dpqGHZBGxzW3LTm1JVmXzskczaXBj12bPQRVg2T36a8gC2HPxYFvdLt8iu9sViPdZXe5zBNa2qxJ",
  "key21": "2NyjbKAx5JSvFdcYvFeHbMJcRqKCsWJdkB2yHNymKvHQunjNAyyKgRu2Vp8q5oWFV7Xh2hQik7T8XTDHh6hMF5Ux",
  "key22": "25xoQSLWE15GxegMRzEpyZeDy7381YXEVbHnBHsxks7sWM8tj6dvt4NHSG93odpBSeg3tAVJ7bWJNEZG3v4Z95fN",
  "key23": "3meqpvZTvXeRPjPnZWqgRyUttckzQvs5d9DoyCkuuwqQUNTgKTj54XT9sSnFxX1ApDTYkTfkshq9Y8UDNJFsVK2L",
  "key24": "4HSAj7bpkNc4UYzo9sa3gmjN5P4RTi7339YW2yeE1pHoxEJYs7f5AtmJGkAnUiaham5NRtzDiaguo1Ho8ozxcfTc",
  "key25": "5bsNSwsGiFqLM8tGND5PUaz1C2e6WoRMCkrrXrpx72RvW2fXXpzCBB7SvzkNL1P5aiKpsrV1p9MgiLZ45uNedu9b",
  "key26": "3xx8V5omz9he6HdodKVMHCWeYbNfw1AbF1oqXCZ9YYkmWESQHjyGgigj9tF3MnLVoorwQFkeXmi5giip9RHVgQxC",
  "key27": "5WBYDWKzxH9TyxPcKwwN3GX49YZkaAMZd1WAooh9bidYi3C3NYDdJaRSzwT7yyTTze8KBACmHUCVgRTtDx49ZdMX",
  "key28": "4tPMzjFe7fn7zexSH9oqVWhHYxMxBB4qHEoykVx6nGiW1sVy9Fuiujtkiqe2DQJaArKMZcVQv1BPko5mLoY9nfXL",
  "key29": "3fuQCSGzz7yxWEyVikNjS9s7EqmumtwAE1QRUULyb4SkFkBgTPha6bBRhzQGkAYSzZ4cecF59xNZr9jTyX9HH14g",
  "key30": "ebbogm2X85AACJbZxnk6drcisM8eGvthrJrnUETpAVufhqmBNsQ6i3AQnkK8Ns8qdsicyJY28udNeQ8U4FrutjX",
  "key31": "i7Q4CbW9yhVUTTDMtYpGy1dRPiotgS1oGbX5FRNoBo535awKVsfDWMDqvFDZdCsDJ6fauJDSL3yN7KAkfsZLF22",
  "key32": "5TAp9dAwPeKNa3dfKCXs2NsTZKBMGeGiVZEQwi73VfyV4wf48asWboD6jhznbU9GQNFxsqiVFfaKu2v769CEWM7u",
  "key33": "5C7NqZ8UotyixgcsRYM7vtRwmuHyRqsoytWXuUHjRfdV87Dm1byhuGwNWjqu2SYLkYwgVCEJuEzuaxuj1MyFTqQ4",
  "key34": "5A84JbLandAub6Lfv4TMu3PSoks3E9Gp45Bmca6oVUgfgxwyY7C4BCBU3gp849SYAeNJELjY67amSWeof1ztmeLR",
  "key35": "37vSjZQCRWNL7VwNFK6PbxCXVATsrKdprnLP6baKVEFmT1pnRNrcaHVwtQcJURPSQ432GcP6vT3H8zcRqWXj9Dgd",
  "key36": "512Kk4mYgwKPhxf4Ag67ciwkDj8BjEzajUpLHp3n2qaumEvxFEvub5JJTpWBeEPD4DYipnn3TyaahGC976n8YU1w",
  "key37": "sSzP35xbPSS9e7ziUmpMRA6iRRd9EaFyurtdW3Mq1DsGt78nLmZupC9JhQvSX95Zuh9aGT97LF5ExGPtis3RL92",
  "key38": "5w5EvY98CrmKto5LV2kZXUyv5NFVSwxpjvCTf2GoFvyMTxujKdSW6g14USLRG5b4fvg47Arswum49z9o5SEnWf2x",
  "key39": "5yM4Bsn3uPLo1tkBGkBdugJ8jKcP4ZfPZpfH5X14HLkPnEL1nundxz6vwSBeyAP9v3QaLe8cNtx4iPqLrXQQKgYq"
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
