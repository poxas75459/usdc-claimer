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
    "ChW2h1qiT9BEAki7CpQsKJgFWoBVvhyui2drfAkzQXjiLJWM1byzQfQyTTmtZNsGKWUVVNcAompzjgzVbqLWofm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tMPkMndu8gvRb1WcEuGqDQXVUH9xRRPogz1owLwiDNDYkaZpbb6niEcxjpJ29qV2CRgNJftu7irAPhawm5zK5L1",
  "key1": "AgWtbcnw3zAioGftoH16HD2WqusHH7Rt4n4sAFCwMW677BiqBY2mC8rqPV7PaMCdtCa23dpdG1UxtpYXBDj2fBA",
  "key2": "3BqkDCD67ZpkERfQ4GoCYE8FXRt77g98uAs28hQ7ExLuo4Q9gM7XjQ4h1Ua78WZz5i3M3Swrwb3SACLxmXT4W388",
  "key3": "5hh8SjY8hDWUMXWeL19nooQJ87ekDCfrCYoetm7eTV7sZQS2f9Cf52ktmm7LPg3Xf4XjqBzx1aSJAyhXKRwLZuaL",
  "key4": "34q3kSJkFDfWWDFupGtrY9JwU2zNEdrqq55kpWxxQ1VvmFbsgugJ5xzkPGXkTan6fpwA6sGTjdx12djLC9B192aP",
  "key5": "3PL3AL3xLQt1wN6SkwHHLVTxwTn5zDREbmuXUP7zGvVPQ1UTqCENozU51b9AVRyZP6Mhf6aen5jGiBsjx5LdZFwu",
  "key6": "4LHKt1CT181PMNRTF6gtowiJtyEdk6zmAed3wicawGzq1Nq1aKdR9BYGFK3GZvDv9ofnwJbcWn35Rg2t3pNtCwUG",
  "key7": "bixDrEmdeDsoKLrePoxH4kbwbtBRxF8KpQWEH8yuYvEttHNEn98Amq3sXCQqwf6gK4Ypk8PmoLRJi3hVnasZaiG",
  "key8": "3CZ4G6ZRFikhNspwZs2L9cpPRiiBgcHW4UJKjEBuTEHr5MVcfhHPCLFmqeGdYccp3TnfX9ynkDGBtNfmQoumgEHx",
  "key9": "2gUrW5z6nL51aLmkEV19xLQQLykL7VwkeA4bpC4Km67jLfUnbt8SsnABpGbfGQZDGMdaMDmVkmE4jj4e8j2A2EzY",
  "key10": "5V1c75fToAmAki9YAVz1KbSRmZzFaynEtUoaCv4uFG1RqLM4dayrQrMNUuLBR7wWwK9Ag2xE1dA5MRn2vKNK5F7W",
  "key11": "42NVRLphx7xjJPh1erPAFdpxG5aram72W3RJG3LtnY38WgfNt23bWaBJjeBrTxQDeuYr56aKesZDX2S6XnCq5DNE",
  "key12": "4v4D4WfnNNdnugHJ9QJV5rRqXVpumpy9qZzYiumW4GAuQSLBZmnqGqYzP6LXqMxikk3R3DnTcAs7oFvmJrEUUth",
  "key13": "52MbPCEKvYP2NtAaSRSwz8hRpFnrWhs2KGS5ySGVkv9xzAsx8SLWJZSXNophzUgYJkDxFG5SE7v75pet9i7De335",
  "key14": "QSGgGbHMXidqmJ632U8ryrZijPSchFkJk5jm8ahvzroCZo2ziVMnhwC991FZk9EZxHMMLkjb8giwfEi73ikzDCs",
  "key15": "3vgTK9Jag4YDePv9XNj8p3q59J58Y1mozh2PD1sc5X2jYRav6cQYZABY1Jt4hY6fbmMM1JPveoz9aEmB4zBX6mDD",
  "key16": "5Su5pa6tEVxKQQs8zdZcWkYtbxnS5mcnnL6ocJGwR3H7zbHTfxo46fHZwyYxafBdaejS3AN8d5yPNSMbvoFfU4Ke",
  "key17": "2XdBFfGqhKhCie7fEaS8ZsNUQNypB1o3UGaB1UJK4aLwm6XqR47ZDFyE5T94r1dEPMikgnbbUdK7wC1PMUT1qGFQ",
  "key18": "5UvaKHfHv2zJyLmuSdwJ8ZN98HRFBbbbG9Qcj7G93jXwhuAAsWWqAst55wzpJWPPRWjpmJLRp1nKnBKLzvXB2Lu2",
  "key19": "5FGAwGzp733FjXWNe9vYdspc8w1Cx1Mnq18ZrSJioeacwfm3LVPdLH5fiTZ4o3YRNE8m5wzcbN3P8SoVWn3jusN7",
  "key20": "28aayWgk8ri33zdW2nxjMosRvMPxCDmWBNDRDUahn2cfpGtMh7FX9W9t9BHX7WqQQE2ybvnWYNWBKiK2MELFNA6P",
  "key21": "rkjCXGxdjSkaqnbFoJjiRE2Kmk36Ta7CY57WjsS1vuuxUpbtfSD1v36Ffgjc8UNmJexr6wgy5EVvmRCrxmibFAJ",
  "key22": "5BwiZyQeXhzAMKwrAKJvpJvkiKqeskrQz9jicPc6BgvqdR4hbVbKYk71cmUPm7xx3YUaibW1jW1aMsUR8mLnsSYa",
  "key23": "2G5BuvbAM9C7LLBdNFggnxH5BH3MWQnddnA4ihZFHJQZ2q7k3xLWfcZwve8efoark6sqbS58xsxSupeAgNgXdQeF",
  "key24": "3hk9CwW5xCJq5cEtRJDVC35CKzyWrctEsKAxRaK24sdzGCLM1uU7bNQQdqs8L9MAgwRS3Jnu4XV43yNKMGDDHKMa",
  "key25": "BpQsEGscBhSEgFyHmafbnMzTKgp4cebe9eSR5faBM3uMbZgFrzqJ26XGNnpym5AG8u7xU6ZVdof5Sj6bxe2Xdvf",
  "key26": "4aWBXipCJ6RwfXqSDyoJ1eVEtS9foToRbFgKRzEgYCnM1zTiWjMGmiQ5EUZd4oCsyghqMDoRSobmDiTKC9EMwiF3",
  "key27": "5CFREEwmKdenVdCMEkrHpNB6GBXz8qM9d8gKzqEW9rDdHS84PgRtYgKpcKDjHqQUvBgLQBAhJEYxmvGQ3cHVabeQ",
  "key28": "2AkRzumatQDHt7A48VxCk6yti9QSjRddxHx2G5J9W9AtS25WNKxCLaczhBMWPfYWzkw1MUHcRiZhvdjUk9R3EwHK",
  "key29": "3GN8gkircYh5Krh3gxfKnXPjuLukVARBfeVQUsuX83ymTxVVonjejLzw9wcrexJBYg7fLEzvfMHg97dYip76dfbi",
  "key30": "2V8yWazXYA7zfD7SdWvG1ATLa4Lfrw3346o6qtQWhJQ5mwceSkvALhCfmtEX7h9GqudkkzKvFEwcFuHYaHjJ4r5t",
  "key31": "4Fo9yYTurBPbH225969rGQiDMKaBfeLySRmrBEiMYGLTGbXFPA1MQ1Kx6PrDerNsm3eFeFr6kZawH6PKWkw9rUVq",
  "key32": "52DrUUMgirzVMCASFnAnebEBBWRvraS7Z9jrgbcugkcsDsH35BW8mmpNdS9METhbrePYQ8MJGu1qxxi7ZVsqKBwq",
  "key33": "5MEagNknxrX2Fcu4EzXkvGa5K6by64kfEwX9WSyoGK3BhWpsD3KqzSwD52h9exVe3b6yoMgmRDhFFNErmDFjKdpk",
  "key34": "3x1H4hzCEyi2SHrh6ynLJhTMd467XG9RZ2Z5cFhnFVQk3rbuysdjuyjeu7BqwqmXUwdUY5cmHxxAPAM29KWtsfvU",
  "key35": "3L6cVvzpihpf91nHDJk5RwDG1AdPWU2PoD9QNCyu6w9mmb7uu1v7zC6JF3SNpqS5jbfMWSbvaqdCjLxy9Pm4wBUr"
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
