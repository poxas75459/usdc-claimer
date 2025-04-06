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
    "3FuKhCxc7Xt9PLsxvCUEMYS4HMqcYhsm5kAj6928BkyaiECDaXd7Y6dgGxDhV6Tnz5xTzd4UN9CyQ2MVq4yLs4tV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37NfDFqYv3tcCyQtZNeDVaAagAEMFKu6jvAxMvEXBy86ShWZszEehyY2WFDzNHT825neyWJvMCWX6yo5bRoPoQp9",
  "key1": "4uFVNbE46iHF2cXqWczK5C8yWeb4CByf5P96mbWnTacpU2ys4UdJUzgfiomVtFZHTKba7JT9LZAGBy6CPeDKiQAd",
  "key2": "4sDjpmJnYcYccEUeB1UFPCbQwSMVhu1nScqnzhMBRitn8Xvrbe35FV2yqiUAowyvGSYy97gUTPj8hpKDpr88ud69",
  "key3": "3nKNQ7KnF919C7LPV8Guxj5xkzzknV33czgDFgtoPrs9qBAt5Ns8Mn6quoswN56xnQGGKcB2hger77MUZh1iZdBf",
  "key4": "3755ddTZ4WqLuo9LDQS8DcePisgvrWX9pkFiyNZaLXV7yNZrSiwNCzpAf5bU7AHcQM5gQqCd6FQ1bewnDaZ7rsyu",
  "key5": "4epsGTnyjbueDrxBcb563NnuajPY8pdyWxZQGv9xLjs4VTBYPN1q1Xn4AX4qWkxtQAZvZmaRabgTohARhsSZogfs",
  "key6": "mFwkEMThnQefR1WLfeEuCkhssgDeWTiaZeNPuYYRkCWGkBW42Tw24omP1SQbNYFBG9QmRxdQUhievFG3x1tdKTp",
  "key7": "4AeR1dTiiDmYBpQC5zVySUqVwBB2NSmZDoaLwUhfNozUTSnCpCk9Biwu1APyPLLvogP1YUvZQGrCaChv3VBJ48GE",
  "key8": "3inY6rH2eHPvhLVbL5TSbU7uVw6FdMfFEjqwSnQkBZWkqBUPPDNAgCXG3Xx6aCM8TLdhT3vQ9ZCBzpw6VUvgzUQu",
  "key9": "3vyxpF9YbPBrMWeUJbZiMro3eAqdm7xm3bRfP4PsJBfXJnbGyPfgWbXUjWxhx48wGpQje7tC1Mm7Hekg1uZiRUVp",
  "key10": "21GFV98TqqEzjwX4FyBDtVrECBkXDNb9K9N2mNvFKiZJkv4U272w2kgEdtsNGa6PyP312vMNXhaoiYqMoFSQBWHR",
  "key11": "5dQXdnPumHiWhexip8bEBm5YN5YsHkxMAW1U53Anbup7UWw1AuzyPiinvWLnWW1dkofUQmL3xw75YJpSZz7x6Tnd",
  "key12": "2fqn3P7wNzRWfH4MutXZMf8A9s2mK3Yj1Gtm5Pr2exsuQKagdRfUfY2VgDTgApB45UApJdunKKQhNYgTCz5jUfkT",
  "key13": "U9APAK9vJ8PS25mwPdMGzHvDqYiVFpXaG2RKUyUu394m4bWqm1FKmJ62L1x2PYPE4JLp5KiPCXGujnNFo6dfFbi",
  "key14": "4SwiTZSDHoD5hojiZM1R27dU5ZNgXkrMVuRn9tjjYGppxm5p69A23qNczGWRezYmKwxnX8e3L64quSBqkSz8M9DX",
  "key15": "67BsYb9Qf2oJCwzZybMD9Ywe7TbuNcbP2KiKDj5F7w8JspqMLKo5QRr9B3CVgXktupsBdtYRMRDhZwSwu2EaQUGR",
  "key16": "5BcpN8dQe4S1GeB6nx8it7WtPQMGqW1TZCEfWAKWggnxHN9jrsGAdNMe7giRzjTKa6WiEsS4AAjaXXmv2WRv6t5B",
  "key17": "2LmE5Nm4PmxHcUzDqJnHv9RC9koR66Bs7qvBC9jWypAAFtFEmwJyRYDGzt4KBnLaWc5BhCwQdNg4eAih9EKGJpWy",
  "key18": "4b4SqhYwkecoXNEXWLwHuRcPKECsVgzvuA42xCYXup2RniAaD9n1Qv4bk5ifNPGiovncnTEhsoSx6dX4vKmcnhWz",
  "key19": "2KxnwVr621U7rW3QEhuRDiKt2WWZhTd9ae6sBZFZFYqT8577b7JwXTsVb4eUmJh6i8hMJPzcKCsuZMdm4hUvx5wF",
  "key20": "82LZ2f1LrVaGcrDBq4rGoJkxK1ZqBS3kKT9eb648Vm4LC9kZY25wkkw3ceuZQd4Qp6mmm5TW2c3wxjbNYdmw2JG",
  "key21": "5QcHvHKTT8SayfyySocjkS9cMCZdjQu7zideMec14Myyt7UULMJrs6MkXsNHpRpnB5z3bS2D8f8VRGhiQkLum6BZ",
  "key22": "3n5SXBbSmpC63aV3uoqjzdPuiUNtAfbvtF38Cd44fS8YCzxXRh6s1cM4wxEaqwzsVp4AKroHugPDQcstUjV6Fuj2",
  "key23": "5r6RM7fqiuMposjjMceiSfGvQGHgdaDyB88VjkKSkt3gwTXgjd8phbN8nTBP22TwrgFepKVugK9hAxfwFBdNZ33h",
  "key24": "4Tqt7CtD5ccBc5z4hDekkayx1FvbbP1zEKbAvBGp1PY9Texa1umXXnCmrhWSWX3e3Ep5shbKAa18D3Hi69ZsARsU",
  "key25": "4D7N86UXZBj5YZVggMSyKXXVTDYFbn9DEossMuVGNKS645snsE87n5fi9d1qSewFecBbuvxaboUofDfQuSE49jaZ",
  "key26": "52poFTBP3FJ5kAD13x1bixv3H2KPrBCbuYBkMLFreuoMPaerKB8kTw5RtvsnjLGz9eEmDjp3t416LzUHPKbf4sfG"
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
