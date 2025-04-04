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
    "5n79P55778k2g35csjpkvjHvifCvMFzbWUNB8YfPRpHsyjYQYcqhtqePbEV5BCqsuiSiRuXmznqxy4TB9Dco3gTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NKiJ94ntR9eN2V4srSoGMJEpwZJgrup7HQkspR4vwNrZ8HQb1VyNvX3MLR29TJAbgWpgDncYV4T1447cHva4gbq",
  "key1": "4WJaSA4CyhU2pJ7NGJSxDUBZbP7zH989u2a8ui5JfJXtph11Ec4VAJnez4fRcoSnD7hC6pHs4xPeVbXxGHa7iYMT",
  "key2": "2rJxmHq1PMSuAgQ8K1H25vHNrf4yj5kxWUDwCU4FsdcUua3aXCendcy2TstLF7RSs2HtNEtH7pNGEHhxpsBqNWXv",
  "key3": "3ZkGZ3fP6xtJLnKhPpzHZ3733cSypogV1M9erhUoooZKmX1fn5osLNfsWMcceN9cgF9wYwDJhmZLqEejgq7ztrhG",
  "key4": "46YyVuYPGWam2keG8dsPVsjBWVnCjGBvJ34yvgHPoweDpAx8aFJrZMdDQNoFzebZfmZuCXTAaRJeoaAcgD8CahRA",
  "key5": "5cuxT6EkzdeHepHgXdgboLGQWkT6an7p9yGQgYxV11drurU62KR5YfdYehxvK9u9ygseBQaqo6dQvqE4W1TxWMJe",
  "key6": "5Tvp5s6eAsMmagYJ1QSzzaKgKWkkHhhEgZ8XtxmhmPhLjF1SGPUTVFji9LAU2QmiSMrgaiEHLbi9MyJcnfQtHogG",
  "key7": "2s7CbMKf3fwTSoxFN1SkwciY1atmEsN2vNjHFgCB5yMCN1u7iJ88yC2K3ZwFbtHnuMMdXUfKbs3aehY6fJhL7Lwj",
  "key8": "3qKHm18qtwnooSwp7oDNFYj5GvE2ZgxMRQ7yLf2vFtpbdGyGXdMRUj7sQpmWEVu2AuogPdKdo3C8a5ZLB9R8igiD",
  "key9": "2BEa7JqdUR7xZbWmFBHtxTRFGcHScVdLfejuxd1dFCkQ4gsr1oKRjo1Swr77HCuVsngwrhuttdyt2V62AGRcGtkT",
  "key10": "QH9ZZUhoD88QUeKrnzc1dWzhYsHCj7j2ZiyS8UQBLVdmnND8wsEZuLQjYjqfkwxT2RqJhih5WfEe6GXdFN3Aena",
  "key11": "4c7MXJhTh9jxVcmzwSdRyTBycqW1n5i5xTUdL6iHu5BoruafHC1dbgaQDeQA5n3Lqp6mpYT4c5HLQN2CUDr1PcVJ",
  "key12": "24sfDj9duaHwpaSCSmbY2jfeGLN7FTsXNycjMg2ijmwcbAumt5ScZjQN3JnHqbHfnrbx9s1BKNsaKuLeKRjhpK6c",
  "key13": "4xX6sYDsbkkznY5kNzRbXCgzsETFeJoHWwrkTAfCboMwzXELRP3sJmdbLn3gubDqZJ2RZogYxjEy5tJS7XgNaBBm",
  "key14": "5vFRmmwbrMzcqvfCoonomUr4a7taudax5GBHx44XAyfpTbTSFLrNypidtYCWGjSNEZNm9Rb7TfR3Ax8LycXdTJXS",
  "key15": "gBaahb7zNdWZRJ2t5wo5aGxMWeWV74Phxr7QMSSdC7TLJBnnxXQWTCadrq5G6BrYdnWUdEnXt5ed7i9jT4kirvo",
  "key16": "49Rk5PmoHvPQg1XmghaUi5pEpx3vUoHwuvQ9ZcZZixPT8UDspNDxv3NnpVPovChPMho359ykPcw6nJQqw1XZBTfh",
  "key17": "5SRPB8XUYRSXd9hWv3PYrXruw2gXTLrpT5VVRYumRn6U9agBfoAvoU7efAbE5LHcTj5a2Jf7SkjRZEk8CpzLfaoL",
  "key18": "2iGyPat5mxpNLGD6Q5Tn3ayRTbQHqmAtt9GpF6tcNgWvXK1YP6MbqPTRgyd4VGf6sSo4A8nN18oLaEFvPNdWzc8S",
  "key19": "32SFvfsTDqLfupSoNpPaMfaWHAkmgwSYNAdFzNCVYCiWqTSui9GXFuRyrwE6PyXs83nK3jg6qJ3MVnG3tTEr7dKw",
  "key20": "3CaYK7dyeS4kAG9sRjRYhZaonJHNynmtxpGc1FJvJNa8Gf2NBUrnQHxjoaJFACPmCQVGyvRZM4ZFCVchCYghLfXC",
  "key21": "4opZJm1z2oyGyYDWvjRFBdEmHnQ9Uir3pGMLyiAbCSU81czTfzqCoYk5foG5PXFZKSbpnudRuUZ1KVFmLKjAgMZn",
  "key22": "5nowSp6rh8hXTUeVoQLJ6cJndZm8YF91bDd2HEH97yNFHu4CDHtksvmYz9gRJvp7XMWdteE5iHmU2am9ZvGaz9BW",
  "key23": "3xJ73fah77Ktq3tZzy4jJdGv3atzD3hjLU2FxjDd4gVhNfGVV4juz2kE33itMPzMUMD9HkaqV8ULnu4CzBMCpVpU",
  "key24": "3LZbmxQ31WJ53hdFH8D8rJa5Ufg7qHLPYtT2nnxMkG85Vpofr6o3k52AGky8kjz88bJvxeLDieGTNSq3c8sZUZmV",
  "key25": "3QxSMogftbqdFK8cs74yLsfqBXXm6wGn7e1hNmhyAk7uw14f5RWQFbNoEu8PfcpVTyBy3qxTnb8qYJNE9tL6S56C",
  "key26": "2cBx5g5eXQ6Kbb4f1zmxsmWMQEaB9SU5X1TBhkvHnc1AgSjQEr4SgP2M4HFU1tWi7SBoQZq58gcdKjKsW3WJbNMg",
  "key27": "3yAdzkrsH38KBaTvPtwqhAKHdLSNb4tt5tXRvug5MzS4z2kwNSpWgNUxQKorVUjLjM2gXz6us6Dm8Qx3jfAMe4eH",
  "key28": "1Gy29YhiBpBTip3ejHMSw1UgMH2fZDPeeykrvgaPDVT7Q5zQd6xjS8CZnWKwhSmzQiFfUPNJTdt7LhpdctQYBm3",
  "key29": "T2HWchFNeATcw6dLJJ4sqPHvDt2Nvcq9aFfoGn25ucv19t8ShTA4f9bjhc64jcZrAVxApzmYZmcRturFT4Pyg4s",
  "key30": "Cxb6gr9235K5W62Es64B2ec4wk4B7WFEMdm9byBqqWtGMbemAWPLDLNjjwupfVCoxnehj4hiKU7WJ55YU4dMLHx",
  "key31": "4WR5LfZqvoRkGb5TBY5Uo2qVRMwh35d7ZacCFqBC14QHGDmSmA547QwwzvRAMBnAdovg74FrNK4zAawN9rpkKF2E",
  "key32": "5gbHLyVyKpc3R4H1BmrzZPtpw237NGXW3Q9dcwqiRuMShsFhRFfEq58MT47UBeRmmaSfZQNCmBEfX5KixQaFWh51",
  "key33": "66KFF86dfuSQprzKEracxynjCNSJHL964Pd7hbVPrCfc4oDngzWFGjNoTHVZPbFXjiM9m3MMK1Nc4Ck5YMDsnGb9",
  "key34": "rauBZNbpQCEUoCSCAJKQdYQa613Zsg5QNzMayuWhLxWFnuH7sdrGNCwse4wFFh6miiFbmryfd282vuStAXi2BDx",
  "key35": "2wS1Z7hogbV6qs2cZQUhEmzWzQS6PwZi2qXaYrBWxmRiPhrQExQqux8pN3SiMkUrVUnrYpuAucob1mdcys68WvaA",
  "key36": "5d4oMStap5mnLyefN54SwEib9WNZHZEFZpBVSCxhK8JkP1YhwWpVngDt86RMFEJTgWXkaHLmtrgWEHV8bSBmw2yA",
  "key37": "F4iR9saFYYiLFqaF2BN5UqDPHpajjAZY3jSbgsUgiF1fGw6mNgFAkLLqtLaJMk8J3rSNugXNZLHBBZ4fczp4Vsh",
  "key38": "2NKsD7yjaDznjCa1RB2Fqj3Ngqx1XzSXPMx7WBU8WcJJZB857ZwgCBA6CJCDYBaWgb3iH2WHThQuY4BRwEgKYJ2N",
  "key39": "4wM5hGbRYbkifDu6TSNdF7oRRk6kw6huYrPTWma1cBGji2NVaDf75xXsGTPyVeVbHCGzEeqbZnCnmSGCe5gwgTJL",
  "key40": "3py1wpZPyxT9vpQKS9jhVnmXSvbTdqexTPJMCrC9XED77VurrRQfg4v8UzLtVeNSucYQAVXzr4urJr5ynd2kKsFj",
  "key41": "54psYaUEM1QfugtNCknwiUvfdPGenLDEhv21yUAoad5pM2M44YVVfeZwyKbLMMY4yiF9H6nYSSrtjSfiEHckjR8h",
  "key42": "3WFRhxAocHybWqD8kx6GmBBaJXWrmL1BDNGirjhoTUnu6VCDNoi3dimNWfD6dVE3CwshbVfoF6zbcyukMJexheAj"
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
