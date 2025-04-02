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
    "4dJQAcioAaAomqDT3455HVRJCw6M8CUYVR7yJu6GKg49rtUxLmTVswzCgCC8SDSuXc2t3q2gsxe1RwQYgCeqgRpJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34H1EBe2VXvA1uNTqqFYBTqg6vwntbeobbWb7CL5kyRPqJcEqZnXQEvQ6oWyzxuMeRvQSpi9L3qtSmtTtHe19Sr8",
  "key1": "2vJgxCSByai7JfsZfxGNKMEh7YaGNFMxKvJ6PR9JgEpnwtkiT7rG3Hz9ULbf8rguPPoo9oQuJmzt6JcKJjeYcwNR",
  "key2": "4dkW4n93wn83Qykm28gCcD8iUSF6Ee9ksTbyFvdK12pRaREKEffMVAUwyduB4ZsvQMZPbu9EEuAgo8fd7qwU5cx1",
  "key3": "5654Lg4Ga2jNFUDVFQgPeg69daECbBufACVJmVAA9TWydHQZbEKPNeeKf6eczPevqDvhqKPrqpQMfj8Tvww4n2DN",
  "key4": "hX1heow75LCHZU1yodxjEG87sorBFRWuBnYs9hRVLRMPw1LX4VYBoSzjNx1xnT5g7FSHYPHaGVDyHMrYsVbSNfc",
  "key5": "5zPw24o7XNTEgQbNekNrdj2n4BvowN3Jx2tQMgLtWHovEBY9Rw6VSWgoBeeDbuMtWXj4JzVGYs2hmoBCepFVpcmF",
  "key6": "P9ZeRjaBoijR2YzHtUYCvVSwF4kkzd3dkdgAUnz1vmemXUutNoRJRKToBDjBotioqrJBUnDR6FMfvZWLeddfMor",
  "key7": "4kpad2zDpQyC7CZdpmZme3nLdndQMgM2qixYst1CTUpELDyTPNy777V3yUTJLEeC3pDUhEyQU88L9SHsabEDW149",
  "key8": "5J7NeRjps8qnxurctaSnA1sjojoVtw7TW2yLpBT8WvcWt2a4NLc3pWu75SZqVSRY9vyQYv63hw3zrGYxEVev9SpS",
  "key9": "bVEw7dJhd9bihne7sm99Gak2Ht1geTSuA1TaCBikER3ivxihyGdQJMCKpsRxJGenCrKGY6671oDMDvC154axxy6",
  "key10": "yBZJxmjux2DLUcqYXQAkD2dENyH2s36H82ZuojexMDdHpyt79mtYYwjFN1dVAkhL97WYnadnV9LnK6b4vWG2zZj",
  "key11": "41PskGm8V9TgzCHQnF8eiprcZTA7SC3ipTFvUT6J45xTa5XS9LRDsNpyi9osZz756fuPqB2TbRWYXNoWGvsfDwVg",
  "key12": "5hTyyxuhfSdV1eSrqYobLWQYRMyZ22LTBRLQJq8wGWuRPzuaoj1GoHF2MLMiCB7s1EB458ApeUNjcGuyjraMUYUU",
  "key13": "iEbpGyFB6PnWwNzzF8M1U7fwGxUAWyoNNKv1GHJev9ADCWXsynr9E7BX6HaQKUDBvC3juWGhS79PBooJQMRqkNo",
  "key14": "5RQk5WJSxQh8v7jfaJcyUA1hw5AvFmzjVjc8ZQDuYuysHxVNEWkvZqvsZTscWTYUbAJXqyTAUPnUHE5k9wdUEuUj",
  "key15": "5RaQcKESyGFPE5ajESTRFKCnSc4PgWNkMYVd3Rm57bDdbfA7GNgxsd7GVzMKkJsMKZ92S6ahrwVFWG3gzFKeKBEm",
  "key16": "4CtWmgwWSmN3Yj3QKUWp5tysYTQ3WHXL2v9XqKba4oGJWKRMnubmXNMdLBWtjPRFhhutG7qzEPRXt1EdtsnMBVTW",
  "key17": "5j2RJUmYURsY6wk36JQWd43KbLE5zPBgDUKK43QrpkriWDfXd9zskfWoJfcdR2J8Uj1ApYWHUxvhoPobcsi2SFRF",
  "key18": "2hF3sRUXfEyfcGbKmifNqgcuMeNhFyXsm6GSXUtnzcG9G3HgkRNrsaLRmJ9HrnTP4Db3HXmnGvnXfsBE91b5h6Pg",
  "key19": "4d9UebGarnpvyMm649UyWxEtCH1VAZD2TMdBT2uMENZiGCNs9wcHPS2yDXHg4y82jgMmjfwxn8BKzUN9QzsaTvF9",
  "key20": "5gJZn93AjQuChnwvfV3YRzHAyo4ZHftuC9y4h9vt4eQrF3W9DCKsM8VgWqxgiWCQugRzYmPWsw5YPVnogwYFn6no",
  "key21": "4jbSnfwz55G1fyZ9KEf7FkuEptPzQvRs5ZAyVqHLcPiqA3HKNoxVZeKq1CNGxotrYqwuDsMXwqWbUfmpgTn7qdkk",
  "key22": "2A3ezE78317HRQhn5Qs8eaKweDsxYt6CuLUNJ69NyVfMRbVYDEc65DNDYtCtK3Mgyc9P57zP6M8nj5BJuq2rfrLx",
  "key23": "4KugN3ktZJDW3H4DMNE5rwyYwMR3rVqdmWpYhrxGQVq6RWHZWAkmFHRMtuThVdNNcDidVS7QnC54NeWpRPXH26Rp",
  "key24": "5XmndSc3SPq1KUhB9Dg1exqJehme96gyzvjy6EHnFRMvVHRnMgnGTpiyuFp6f8CeygM9vksxKGcYgiuKrRx5k15c",
  "key25": "3QHWTLFhrn4x9zL9YTXRBhpRD9wYnLuvm4Cp7d9nTukK3E7hEFqvTHHQMUjPkuTA68opSr2tkg4tSJxr3hzGVYKe",
  "key26": "4rvyyXvKrEhyGMYCqN4cYwbJuwCZ1oRF8wSbdSNyJWq3KXd21f3abe5EbxeS6TuzDWQP3xn7xz2xEJKUuNTBaef9",
  "key27": "29mqFmjUfBMPW7bYzxs1sgmRhh3geTVmTTMjPT2FxhLhHN2RHhQBtvWfpfh74yA1DM2fXHcsTCdZ8611TKiuihJX",
  "key28": "Y8ovnzYJvfYSzUvFpPQVfxG8ys8psbo6ctxeN5SKtLdcJArwhX7Mwdb3fs2XKSMwxRXJFv15f5SFqQusYon9C3X",
  "key29": "3iKuUNoDNd7FBYUTMPovNyipnRE956ckcA3h7SLXTuTJg4J5KQ6hbfk4p732qjBgCQWSmuRKqSjjC8EN6SqzJk4m",
  "key30": "4n1jNsJ9AxigoycqHNdtREHWroWJAu5JczWGjAQxD1UVbPhugdq3u1yPAF4rEaLYHHQqNQA29VKqmMbX1scGjnm2",
  "key31": "sbxPV8DFJYJ6FE7ZFK6LopgbDG7kAa76YtuN3xkVrWaeVjYddH44Uodp6s2abYXBTsssuAkxgK7U2U1w5yhMHA1",
  "key32": "5uhFYWt4Rkv64zhR8nRBgDFpn82Hdi8hNJvbDzzAMXkC5MiWhwEPBq5h1gRHEVGETTy41BYVae569uhPCLkUnHym"
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
