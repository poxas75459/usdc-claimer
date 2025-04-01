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
    "4RchSomctvmjRbvnsNr2nFPHpT644gzXwLJMh8mPzabqPTd15warB5yS1xB65xtmEKWPciDPiahhMq5stUHKefUF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YpEZTeVMib94zBa7QBNrrwKQnMZMj3mk5t2LmTmEhSUXaNmVmv5bYgFr9Fi4DJKkfVHogPepMr4PDxA2FmpM5tn",
  "key1": "4FJysk6FSqYPnSYwkCuaZgnTUBu3bZLqtTaUDCnJpV9meSnnwjM86VoNRqyCnQfce3gUcRdWmsM7NnBEgZVtfrfG",
  "key2": "2uyjfkHQCnD8r5r6A5uj7FUt4brnqNG6KrEn3jwsYXY94oVip7kKcvBzATpmVACowA4av6KZyXyDY9m3DdQaW9s5",
  "key3": "53YRff9dehkz2Ahh27SgzjhbDo2PQTZgycDZcmrxLe2VJBrgLK4FQqpGJYCzRahTY26PvqKUKjkvmUmj6rpZf6gB",
  "key4": "5ZjE2gEbjh33rtS3UYBqvM2BZdzWQktUEbRbJwsfUGomsqfaLxLwVZRbxE1aj3LcduBkbstnHUygvC7DMnk5FXc5",
  "key5": "2bnyK37Q2PASHfmD9vmJfidPw5aV3cLkbPnaEftCdHJWagBurQrE2q6A5R4SDDChvWA2PM1UgdQCB6SRG3j5NgHt",
  "key6": "22cHNnvete95NQwNxHymeEKBLAGDMQhpFnRTp7jK51VexcqguxrS2v65zKfcuvo1k6AsgMVCXeCnDVZzdry8o33S",
  "key7": "2suDjcvzbctWzaMDDH984UpFXEGr3xsTDrUxka4D7CuTvJD5bsphUdT3B6xrkQd4SaZjA85cpE66Ziej9oY9uSs4",
  "key8": "2HD7Rxo9MmVgQcH68HJEup2LYsqxEuxUPMejXcA6r5BSwnfvrozyLFadAdy7hwkheqPZVNz5y53y6VEQZGh99ThB",
  "key9": "AZbDHc3kdtY9dHPBwPX4pFhvSiP6wCMabR2FKpA3FHU61CrAfzM7qQejj64RYU8Xbo7aKgbfi75XLcrRQ8WHfqL",
  "key10": "2VtV6KfxWd74W1qxd6cGP3gZiHaJuMCpWV85gMbGevG7sPSoocR3NWb53ivipHwPQWjz6woPf3AFdCEmdNYHRPEx",
  "key11": "3jh3xY26wiiodp6UMXRSStSeLKc2Hj4AmM7sdBvU7jfz1Hj62hvKL36oaiEMMWbxsMyr68sba3oBV5f196aW8ecW",
  "key12": "HoNaY7ibc9XXvdHEz97ZGXgnzn3bv34qfNUrMQNkUdWsFkp9wyGeBN51uy5Ez9Ssrq836JbVLexE3rbv58RXwPg",
  "key13": "4jaqMt5mWmArcH7PfdwqhdtUTURRxdNdt77qp6JTjbzkux3tYdH3awDwMHHE9V5gGnoR5Apa4oANm354EfZPRmKq",
  "key14": "2bXmpcV1qhpwHeuEBPZMcg69cYabmFEaDoEy4dUtQGF5VpSNPs4NkM142HXFeGTqez9shSbYa1JAmW54z1qkwhex",
  "key15": "5JmQaVL8vXDffiLRqKTRhBHwsGkia9fJk8euRCfxzkmbnNZSQyqTd1e971up1vuUGbghf7HVUGgNgAXeuRdzpVLu",
  "key16": "4B4qah3MHMSnuKaJbVWkKVV5XFfDLsFN3Nq8J7bYmyAYNB9TAgb6qoQBEErgoq81rozn4V3w4DNhQrtTVZqohExM",
  "key17": "4Kd6UbdPstM8LwSiYgsLbz224LYaLP6xVQmr1DrYAU8GY63yg9mtTiD24sLdTk6veyQxp9DXHMZY7oDb9ZkZwNPi",
  "key18": "4MHTu5im13v5GbsEievS4ZDDwxjXWDKWRk46mNKYJF62VwYpPTbbU8VrRJTRALkDWzjpGj95CHNs872jcxzx7Zns",
  "key19": "4HvXXNzuGkbtLd6GHwi3b24jKymXm4Wg7fEcXdLtDgV5f96upPcNJbCot3ykQ7z4JDfch9HBzu3mwAyAwQt9KVpC",
  "key20": "5docjubMCvZnHmRCZvnDrJaQfqkwqzGU1oim9VsUdkoXzqQDEPKckYHVXLadtxzkHneXJsGsTvg8p7qGyzvmN8rf",
  "key21": "uqukYKd5J5J8NjJxKKQzEY5M6h28kM3mFYifExLaCZzjND5AeiGyeUP2Rzum4ZUseoGVhWDwJKFfM3h2hJ7m2k8",
  "key22": "3DmdTqFMcrrztABQ74iKNgUKkZt3REd5JDSeSzuaAZFTg1ZZ1X5KTRxMjmxvKc8r3u2RunrLQB9xwExpdgFDkWLt",
  "key23": "3uiLXzqZaguCwPftzyeTn6K1f8wkQVYXEBi5d5jqSq45WSuTqju5n2ubUUvad5QZqNLTk8CKbvmKYH2n2upS5b22",
  "key24": "3FMsXYwPcE68uYx2boHvjuGbgwqEJYktjW6vinETmZxjTULYHPikwWHsoD45pZuRA5S1uhSg4UXCmcNxRGLAk57e",
  "key25": "jFELvMBYzVQjHgHJdmxjBGeTsTCdAHsU88Xw4Q2tUoYtPQSjstev5Enc9qZBCKGQbafG6J8nntQ1dduWQDghoNM",
  "key26": "XiYQaBVbkGiLVjBxuDDgHV4Mf5zeGhvNVSp9nwVDDunNaF1PxfStSt2atrKzZYbmWy7MJfPy5FdndzDMxBAcWUt",
  "key27": "5fH4xtwuVySxP3haQAuv1Hu4wGwiQTw848zuEMPQLXPU2JEd4MZUUKF53iHgrnRFDPiJJKstWnAZZWzGAbKwD1A7",
  "key28": "2RMaMT5SrtSgE9StkEeuTbbUGvjpR1kqArzzJmCVUwV8f86pvrmY5BtpvnEkU3hiU8umW64CgBHPKZLQ75hkHNBw",
  "key29": "49H7Ti5iVxFoevLoTtAWwB8ZrPHKKFhmjWY645bAwbjCoTL277XnkEUfHPEQxFpBSxxktFwqDoeEqWhtu4tjVDWf",
  "key30": "5NJA1utU4dHA2hW7LKTvv4hB7uWnpZMCBtHTNLTxcR87uT6zgDSHdiiwxnDkxpJjtrUByJ2d5uya9tmtv8sYjmwD"
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
