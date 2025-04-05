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
    "mwcSDgEKJbStdqv87GkCQTjBkmPU2EMnstYeKkPfCoaEinu8xwSqHvAEXrthK12ZXeB8s69KBnbmjR2wowerSmv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4asFKhnXzYg6rRh9CcCzkj5AA5c389kKC7sEhxr12gNYoR95BRkn45D6UAPX7bhp21j6mGXjDARicck66GskgtU2",
  "key1": "4drRmQ4QnkUSU9Ntkn7LjUYCCe4cr21UVoKBgnu6cWp82CKt8hxT95E4QgZ1Zhgb3nbZ9b2e53aoCPRF4eaXMsPc",
  "key2": "4opKE4crvABjxY7pKDzbzfR9m69wjwuyj6uA8dcxtdizX7WjdpDazcimcPSDaUPthxvq4EZ3WULgqqNymGqgY1Wj",
  "key3": "3dmomivCoZPYe9CZVfyi9c2DjUJmUdLtrNwKAwDz1HopKsdmVVERCAoe1oBaUiFiKHn1NEGfttDMktatTNitoUdf",
  "key4": "2B7tYAXQg5EoB1XzC5typWpMHcSBDqtC6YsCM1CmDRyFXzsV5F4cUD2Bbrs7ocNafFbwZBB3QPfs4x96Rtwjdez9",
  "key5": "5FDvdszwWQSZU4796nyVUECqpYsMb7FXP9VQe1enHqRP6mxpCTWrNwYbDTuFdGoXs4BXGAbEQKuS7J5bp3VRUtVB",
  "key6": "zzC5nfTmmEedAss4BbhA18GuJshcF6aAkqNHQKty4aJXHFAFFY7axbs9viJyigQHASA5uwVwnvwtq5x36M3miRZ",
  "key7": "3e6BBzPgYAfZmq6JeXGAs8L344bdWwpX9EimqysGDwAQgm9yK5R9CvLjex3UhHaVrruwQFGGy7t7QmowgJDACk2Y",
  "key8": "4mVhv4t66xUZ2Y6ixt1mvsHTMsRxjcmZXPMqAeQ9zN34LMqr149DsWoxfN5BrqTm6V9zobaF2zyrPALLxbeVkwwo",
  "key9": "9jZRfUGmzErFBsN3vDxu8kVkkNxPyjkiCSgA4ihFkzeEWu69qcYxCAJzvLZHrr4T4tAFQA92R9QFyJpkwqBUQTK",
  "key10": "2951R74J9uhfasLaY9qGPFVs9XAkkcdmCNfKAZetoHdSASPHhsrmGdtNPzBxjUNF7aaUvNNHFU1VtWd6xYGg33vQ",
  "key11": "5UDDB5vS5AQ8Kk5Cj5VovvHRmu4dLUg6vicH95GSAfyR3YSH8Rv5yxfoM4931KeTKKzezokJdcXbc1b5QoE5s8CX",
  "key12": "vyRkGW8tXa75L9Q9dywrHTKfK31nrw86tUjJrE3SVUJ2LHHVYzXDcrZRcvftx5Rsq2Pq255xkP55EiK7418e39M",
  "key13": "5J2KwXEi6SmWG1iAues1VfevTy3L5CpJd6xZqWRpCX2hcQTEyCHFasPxneb4zSjWdmfURttAyvmAsrXhWNwu5vA6",
  "key14": "4XgoViz3PK8L82xb6qyVXQa8Bpr3ofxXjJAaa9jY6EUQtKGRdAHJ75dqXzqL1izRQoFTfcdu6L7xrn18u3mhRYHJ",
  "key15": "3EbscFEG5WzmrJ5nmwzXGjZGBhsHBhnrwPaNkZQigkEYkzStV8yJtxE7L6UQKVaHh9RSUw5fA1HwJZN4a4YzrMD5",
  "key16": "dEFArVp56gtuPzQBfsLKCgtMm8sTxGLacsRXts6kvuNqj1didDfLBuCMYrmfuHxWkXMWEg4nAeXXPA1h4isGKF4",
  "key17": "2tu5tRK3SXQJ7jGwTyu5GDrXiYE4BgoDj1YBHzqnewYY9diXL56MqqNG5yZzdCLLPV3aPUWeLvmFznschisuQMhd",
  "key18": "2fvDq3CtsJKk6rmaxViyxQAEmEcmKwX8h77u9D6gecZ7dDaapYMuSDURCMek4fJPiqZCTR3QXf2fLc3FSF8tej5z",
  "key19": "2x5EC3S9n1jdjAg8zqQnAWZoFLd8dRvSiGkfGohtABHk9iTZhA33TTkQDY1RNWiAsjMZw6ya15fn13Jr6cPV3i5h",
  "key20": "2WcN9KCGgBYZqWoHdtFPaTNR8eqadhAYd4STMERFHoJ9Y2yxTP1xTLkJwr95xYtsKEpdcpBeaM4s2kWYpYUmjVey",
  "key21": "5s7wCR26amshFCsYxHeK8wBHkE1QyCNw6dLQ3JNNX9xdLzrkjTVFtQr1XSyNzVavxTjxbnzA9JBrZANvjxDzyHQ7",
  "key22": "BAEH2gWNLzGhJgJKFtBsaB74PYcWyVDDhSLPeT3phVqEvPhggAoTtvUmEwuMdd1p8mrt6TdfN8Xit46vvGu57ah",
  "key23": "4s57dPKY5FrNyTWwq4teiH98uMsGmiLz9tmwiDanLJ2K3ikqPj9pCHFrYZaMjkoeRci4ANedEf9LGp6HEUnPH1F5",
  "key24": "2g3dca8Wh4wpEG55A5Mtta3SE7v3UrNtWDC85TVNkDXE9TmHEcWAoM4Fxpy9yE5hSxe2D5Zb5mkE1UubKr7Ripfd",
  "key25": "41bnbGdxhsqmLh2hPgG13P6Yw2HXvWLUzT74s83Wk4YdgyNUtjhsCw845VbTZ31wCrBXNqmPAwe6FJVcyK3CHKqK",
  "key26": "55AqxnVL4qqVGPnHBzU6C3zPj61ZGc7GCQ3VdCJfWRwTNctGJ7TtPdXDScFgHEvSYMhXzw9Mrfa8GRVgnfAbij4n"
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
