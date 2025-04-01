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
    "FzF7pJtLwcEot4ap3aKSjUy2bsqaTj8PTAd7xb9LEPZH4vUtq79RvUGpc3Pbx2Z6UouRX8AP7bhU8XhDmtD1deD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wtBxLZ5MATpCGYYdkoGAbJDpw9WPBj16VnvVUb4KUpoAqtLFAB71w7SfGhJXvHKigURVLWVXNg99JepHjecpNZJ",
  "key1": "5WDyg23VrDgTSW6twRttbqcpKSnKQbeSbNbTccf3BdfWXyzQ55nx8cp3Ej2cagJjr1YG457S7K6kyBKkV9mKXbJw",
  "key2": "63HixFTHctjePUbBCFzVno7g43cTJmJKJ56LfHVkvt4up5QfQrbtnnvu3K8kV5S3ijtPeD2MR5RqHqr3iyzYE9Hg",
  "key3": "5y3Wj45qrmjj1jJSPLPybRw7EWMjZxJwkh9EmQxNLWVCHz1iZYRu7gmraMZbivFRZw6prgkUBkkSiKW5wjKw5PAg",
  "key4": "2Ua6eogenx7S5hdpQyonoHQUB3RXVrf8qNCZDsEHmJEXY9FUZ9MoNTYesdBYFZUrtPBH16xVDzTedPMHkJEGxtJ6",
  "key5": "CiHefV585ppY7omtNfngQ5rK4JrtX8idW2HvQUfcVzQqXpVKG6qjPecAiU4vpZXfJTRmsnq7Nbwaa3PVQ3G6vEM",
  "key6": "34zjQi5nKRfqamqAK1gufqYfXFQDyHj7qAyEHL27amiS9p5b2edEqM8uK7CSHJnU25niZEvLEPVkdBQ8xbpsqMu5",
  "key7": "2PyovmSrAB6ko5F92UTGU7BdFubPTfrCzew8RbnXMsbi13oNHSzTmQ6DSmPTtL7bheFQgpoAAiwHGR8SdtPY9ZTr",
  "key8": "LCL2jBJzRjRehhq7pmkibFiac5Fi4aBX8gpGS2H4PCJU2YpofQW8233kzcqwQA8mzpdzxxDnbgLkzxzQWC13QR3",
  "key9": "3sSwhU3bqQ3UcML8pvobJGALkASHRXdhz3ycuqAidme5jXME1sCYVftdzHCTHHTBGamthJ1D8AQ3NBgyWTFEHiwy",
  "key10": "awRAGosWAWEyn4sR8RSKX9th6SphogxxCZBNMU3dYtvbUpN8aLqv8CzjJdEiquutHzhf4JNdKVyFERCrAi7fDos",
  "key11": "2Z4idJ89sRaG7nRgrMUEbhtSPoBpUvrgVsrtZceXxdG8BdX6nKRatUxRvTm1iVtxSSPZEfUKQ4dNNqJJR4zrqTtS",
  "key12": "2EqhBdcboyEK3StMc2afTDCDJ2d5t62jbWqKFY4dQM3ZoTtwzxxd8uxq5jrT68PehnX8xyPsJJCs5BCS2vMiJtGm",
  "key13": "2BZs7qVVHQCs5B8UD9NJz4MC7DBNVXWLqEtpM5oNwpVFmPr9e6mB8daf21MrD4Lo73Qxi7ooEu1LqPNCty6F8awo",
  "key14": "2ZbTWf198UPCLBU1MN6XeQw8sLE9Wn2HiPRjB6sjFGUHUtct6eR5NNCoUVMgGXeY8Ect39bPqyrEZANu4dPDuNyT",
  "key15": "54yjUcaZY4woTw4KAfKmw16rK5UPEkSNAXyBokj8nmWKMGivNyhzyuQZWk2TiuqveQ3Fc1pN8i76Lv8sT1m3vPLW",
  "key16": "61rj9E4X7sz5N4wh5VBgA5GnUXXSgDbKEbpjAdxB19T3Tn7VR5jx6Y6kfCKZX7ajFMw2wHsS81gK8LGnNBbSnZVe",
  "key17": "2jgEQTUxiuZKRtoSC13UmZ5p2mGtqrspKDedKDhTtQCSD5PpXPm1BkeR2Gp6EY3mw5SLAzGdhj8JpQHfALeyQNxi",
  "key18": "2uinLnNZs5UgG3Nvboomonk9qeZMMtqeoLRSz3UXirRK8QcY51iEDY7gh5YVSYCajuXSVQstH5bXRuXARRGK8Yh",
  "key19": "2Ksg2R8PMXPPXbSSx5FoNn1ZTPsAoQ9TWZ3ScutE3Uxqs2a1SxgAUwd93rQWjG1tm2VwQcDqQSrZcahZMnwPU1dn",
  "key20": "5g6ULAcKwGNW5cHcW7YtvhiJjwV2saxa6a5GL7LsRF9FWfeUHWG52zzCEgKY9W4TNN7cm2nkmqHXKgwsvjCqT1Eh",
  "key21": "JXghkuVzCA4nN1DnjghEyL1unp5EGUozVg69n5weGYErpQq3kr3dFFy6QkWoPQkonNVdK1EVeof8Bq4bJha5VmM",
  "key22": "4vNhPJboVdEy7rSx6Ls1hHPZk7s9tvaMfMcEGAjbzpMxeKdFVRCBpRB8e9LZncL5kk69UZKgcV8QabnnJFB5DNeg",
  "key23": "4GBZ1oXaJBUoGY7i4yQnsBemXfkc9nQ79AxYET4KUnLKTwrY1AWQRUQEoCMab9mVDJrXte9TH25U82cbEoetTZ8A",
  "key24": "5xB9r43RtKhsakTUTYJPcYmRmrogu2D5cFRScrytyRRcvM4RVpgN6NjqQwDMNR6M1iDUfHfG1epjMa22Re91uv7J"
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
