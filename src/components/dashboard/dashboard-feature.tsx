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
    "4tPzSoWjM4WW1i9kmDRsCcDhFH1UVjCdzyybAqftD1MGWcVCNpZ3ozYCBux1b4iQV1yVgVC7ig4NVPyE6niFJu54"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGkzds3sisFz9fjUoe86Z6YYgpuVWL3QHLeH7LuayhvwEfn9HcboPDSKxzr5q5LzukqFTa5AnNXK6mAXmsGKzUJ",
  "key1": "4fZ8FjH2TZbgmCh3FsHXYnPTLEKpmk3nbJWMdZU4U2PiBxHXKS8dyFN7gYUVG18dZkQoS41QwAFauZFqQyv2EKbw",
  "key2": "4T44rsebDi8nyLyDCRA4ZjnCuhRParcKUmtQfJSL83oznSdL5MM4zEB1DkMQBJawStWe87zeUtarStqLn6pLyS4b",
  "key3": "4Pp9YwxgLMZCAYrecXpQMwkYpcCwpqN1Duu2m57sNnudqksYquCRBRaS42yw9JJJ35E2cdd2Sc2Nbi9b5WwFUc2D",
  "key4": "5sPXBbgCX5sySGoUpC3CtEcFKqCRwwVWuEH9BFgqRgRdDMQBNCn4VghrRGaifZ192JSMQ6e624txaLUnkMJrntiw",
  "key5": "3cZodCn6bit3VPLprYzqArqm45NCTNmcQaQzpx8fGbvQudirZx9HzgeuF8UkLjDJXEtMQZEoDA55MKAxyPzb2BYC",
  "key6": "542zcfUv6X1FmGHWwDse1dXKQA5UgqoXTEmyjLdaLvnUk6A2whrGqaoLHyDu5VYNreJfy35eZebZCKr2uSFHv188",
  "key7": "8twpumNM38z6G82rpcwoacLPGfXqed1VCyLUp7CjcK18xJkXxFnPUzo6s4iRGFzmVFQnZNmUWDZDAxerAuzJ64X",
  "key8": "2ZhCoCa3WQtTN94muLKGXsUVzVjn4VA6hEJpEtjhFAT7RecrKLGBZjn4cvUczbZARQGQnMyjzVNhYQFv4BTBKwEq",
  "key9": "4dAc6TRgH82DxFg3HJGxkYFco4CvRizBfJmfgnGLzX1vgGC5btdLDTmJ6wHqAzGw4igAnPysQshEoo7p7Vws6nEc",
  "key10": "55kRY5nEiviU94SzSmqqADi9qG9qcejWvjrV968kpA6v2GkaXMYrKt5gkoi9tDxXqkkCEnjztZSRKXsMXhk8YWvP",
  "key11": "46NFcfr2JnzYdVAZhJMUCyb2SuG4weBXVQu3tc1dnQ44aACzLiiJrKa3d9CX83wmjSbjQKC1YsDV2NjjzU5vgiSA",
  "key12": "4oH1YcFe9iRgNXLTyrghrBWCq8XTzN87MVbCWV3AMPw1kQpsp8wyFaEL3vNL4Y3dX3U7cmRqGt1KaWrDmhmRyJf2",
  "key13": "4oPA6f65pBFjZ1BwkKrJEbVqMRQSxyvV459Wi48HYcwLpfab8AqdkPN7gngDLZoz9JD52Eo1s49AjJeHXyp4venW",
  "key14": "3XRYot5zWCbSP9LYritfZbHd1HkYvZpKT2GpFzMHETMsLnAjW3wXQPUWeoa9jZJmDqhEtrt6EkaJcA7NWwzqqJfB",
  "key15": "4Yzq5ZYCm1v5tuu1gy25jwCsRmMGoQtNYag2vozy8tFpkR8t9tEFd9gxPefuaJjgoTwwX3Vtd3okizWVjdbgZdW7",
  "key16": "4kA7eZwKQAGNTCaBYt9NLFQcfr1bsPjTzSQoNq5fsoVVxutxrYxyAkKdXCBVsG99wD6rKagpnvPsWnynzeCNCbTE",
  "key17": "4ULxmFmz1BrvswvM61wxefn2vv1gsPn2rrjojGSC7itkpNe8DDGa8ur2SayAtd6qirS7cuQPi92LCx5hcxAx6qfc",
  "key18": "5b9KNAqJexmns8Muy1MDuHT3vWJBbfowaPcAfeREWaWpGyPZvWGTvwW5RptF1qC8Wn7hnBUELMjMNcc3te1qcSEx",
  "key19": "4UVWQjEC1jfsinShDmwbcR5aJsvLbPAu4FAmtkiqqnjPfy5TpQuy5Ai5f5mN4zwgtn1SnZHivB4bqUNEfrXEQFAG",
  "key20": "2dq2yAxgqHuQxVkp2GKmDZTJKiYczfmuA5JRZgFRKRQbohQeCN6nE8ABhEwtVnL54o4rkStAYY7hp331rBP35sW",
  "key21": "3FhxwB5Pp5pX3HKMgq887N7HzLaSWSgebFXFzq2Z8ddgakVioyp689S9ex7Sbm43Q5qzXDcdWkafdM4f4nKVam4v",
  "key22": "5XqwFAi6qDwqmDUYmZjMbTGYhE79NdN736fWUV7pWNx3f45MrDsxVYpg1anb4a1F5Wp7LGrLgqnp9mPoopvviPyj",
  "key23": "4px8SnYT1XgPMVKZo8b4K23FNjy7SB5qvGDfQircYHrZdJ3oXp1t7yZkgeCCj5SuqFNBEB8LyAcV1HXRmbZdSi9s",
  "key24": "c4HEwi6TtnXG6nRPzcNCPSzmjy7hwEq7GeX2ghAqEypPZ4FPSaDrUSJPAyeycZrBPSnh4pRQXEXeRWKZykZd4DJ"
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
