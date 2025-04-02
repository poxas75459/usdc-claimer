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
    "64Vx4fKSCkgdT2oehvCZwUJhShxfuEg2wjNUvHnVxUjpkJXbJJRAGgr6GmL1d9KnxeAuFG2Jz25s8n9MBHwJUMzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KVTXNPsSJu85qc3G9ryAQH7SRff12ozm5pWPUT3VDSahrRZdzz5BPGHrpQ1RaWAyirPaJevgFuK3XJsLmQSKvst",
  "key1": "hSUazFSeNoscVpNw5qA3npsFPmQKpeqnupX6o4geAaA8pjoGkMx1YVCSdNYQD45T4XNfBCPMxmR3sVFpJhRdBYs",
  "key2": "2JVMJeaWBVLMozVEEP8r4sJ8kp5YYvoMF7AGkDYobrzvobWrh1vx4gasgEZHa6Y4TbXTtpHnGenFZV6kCum1uLfb",
  "key3": "5ooGoyDst8vx9ndRw96N67YgXwWTUkMxwFgQNh4gfhkmqc9i6qqzMu6p7JzxDN7yUA44RZ1Dk8Heq7RmHM3RPyJ",
  "key4": "qivGWBEpeaud7jQPRxv3HPd6Vb2Qm8QCxQXHZJepbemUPpU66VtJWDLUvBLXsJxqhcxtiHMk7quc6yyzd6hiygF",
  "key5": "4hAhy2dgQ6L2JEKTny4Rpja3kYrRbiMK5N2csFi7j382VUvwgd1sTFwMEkEruQ3tEgEZqhJDzZqJCeq1Uusd5z6U",
  "key6": "93VjyNhh7wYTZQkdoQUSbziDncS1bDFwWwsCbcrDYF74YtctAX9BFpfwNfos41nj1f9MmMmMV1Ft2WeJQKacXNw",
  "key7": "3Er3M6LLmK6fm6oYp6QZDsEmXh1prLPaAogZWyE4PZK1BG6yjc5e7PYYyUWCDYZuX9gdawe5nzVH1vwijPCdUDEV",
  "key8": "5XMQJYHGRfJao2BjB98NZibBnMkHgGEEcD8d2Phir7pHNJPxoN7qaLN4k7NGoKPMvaHX34x6QyGttAUUn2t5cxUv",
  "key9": "7bSfzEZoi1pWwSRkCeKSv9HVM3WLX7DatbDmL5ctnEAPRVTpV6HwaTfuV7EuBuYSmKNJ2KcbNMin2Ce91TixuTF",
  "key10": "4BxTrhf6z5Zq6Vk8pCiApcYic8AideFaQj5ub7YDxjaQTpJHMV8wFcHcZXuJ3VSLqw5bjm66NJAXcmpzBRq2f9qa",
  "key11": "5wZwdmaabDruENUSEpeLRgyTMaPGWArNjszKBY32HscJrZdQwwQLLTwYR9Y1ZNTTL48CzLeVPfeXBbRtd5Lu67h6",
  "key12": "5Jx3QM41mFf1HL8z9CSj2aovAvwLKF6MkstM1rKojScYrFDua5xtiLVpqPuz2f9s2nySvFSxzPV58JPtwNpS8p2E",
  "key13": "48dw9ksDDAx81vqTFoxtTKdjYzrEAST2mUGZHan4cWg1w4XJcQ88czRxQfnKZVnEEmEjZjMD7oDqRouwWTUD2gQE",
  "key14": "3zkbtTBqQqBvpGYTnLGuMEU251pBvvyXK51KcUY4Nb6i3NoStpDjRVgXaPKnL7XhxgPSWdazmB4nEZ2R7mcqXBtn",
  "key15": "5FpCbvyBKt59GM2HUu7NewEA8VEgN8Ye16hBn8MbZWFXcQkvZ15nppFBuE5m5kgq6EK3HLkWrj2nudN1d8MpDJyJ",
  "key16": "3ow7V39F3D6EgJnHTs1iU2L5PnVVKKJvMHBGf8LVJWu8oZJuWToVnzmujNMm3eZmFN2ZuB5PcN4TuRFrXXV7t3j7",
  "key17": "3wS8L9Dx6TYwWMmqcRBSKADBwbuhWMUsWvYZtPxSJwpNfY8iLjf5EoZuDtToQD42ZZTmDhSgTb67fMmR9q3CJJje",
  "key18": "4fWgJaDzNYj3MSW4cK2xsSXNspuYNH8Hsa2q5UfqATPvDHARH7DeirHsoSHrLeMb4Bs2PHinJZJzEuQseQBwAAhp",
  "key19": "4pjkZjpb6YNv8nMBFXgKMx8ZjtRYH3VWZjFG3RFiVQtQtKH9waau3xG9ZrWFQdNta6kuNcVakETbvw6RArNaDemK",
  "key20": "45ALksSC4ZgXgGjYBVjU6f2z8prnJuGKxiFX4J3A2Zwbv6tTq2DC9ASXPjuaXbJfyr1jT9GecywZXpz6qsq1UaWJ",
  "key21": "4h11FFbTNDxo8sYdrgui4j5CBR9fYYCyzQzKDaKh9qHCoQ7g2oCVmJvUBi1nYDMkFJ86H7uym5Wo65p1GTRsD4Pd",
  "key22": "3EBcf7XcTuNtSPVph7pFpj3J8hjh1YeeJJz3qtRKVz6iT2fRrn6eMykNmjVZCknX36drgjjTV2677g3nN3SRHsGs",
  "key23": "5DkH7KeekKQjASC98x1JF3MbmN25YGg5RgzWT1eDAcAc1EDmF1UvB8S7opq8NeLmZxon3dtCoByyR8H5aWiKHvfd",
  "key24": "UpBS2TxBz8UUCwpm7HDPZiJh9qv7UKLkesNBLgFXPzKny3Brzu82ahFbCiiLzaULX9Lzk1tawofeKu5XnoSUyv3",
  "key25": "4cCoiqhVeU9CUiNckZkNmZsrB8vfSg3NJTiNFhFqP9XpMzSRopNMxjNLrP8QYThgg6GxM4FNPyzsjmTstUQNJM4D",
  "key26": "5KTWUn2XG3WugXomg5VebxXREMaTFrLb98XRC65mp6JqTbKANN27nf5NKi4CbqkJwfsPSCZMYYgChPAaR5pjxR5X",
  "key27": "2UfYMhmvEbYPQUwLEyK9Nrih31KHrWbGUr6kvASMXS7KpZ1aK1xuV3cMcaMW28oPg9zF7z2BHe4HbSRWv72i7sBH",
  "key28": "3ymQ4GM84usy3n5FNtsYyfTJ11PHjavFYAT93MRPuvYPdaJ24UaNFwsGaRAYmCeNsf9BRXi6zGUd3gh8KVnfaWfx"
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
