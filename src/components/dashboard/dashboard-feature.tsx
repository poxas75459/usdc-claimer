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
    "gMP7DgoQ6NUE9gUgXn3GKCqi8AQZ2q9xfwpXLtxvEHawvfCfAB3H1EQCRpTx58aafTpG4zNu68tN5mZ1s2kvse4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4j48Q6QuMSVgNZiJZaV8GaCs44Qjc5MYoGfYYP41iv2uMhGnosCfLdg39Hy7uBjpGCtvBuhX4DdKb635SLwYRoqE",
  "key1": "JenXoSwZpFdwJAd5h56ewKFE2baxALCiM6tjkMLwHSxhcpkk4tyFYNbzUxMJKWKQizQjWBpgYZTfxLxxQYPhvXk",
  "key2": "mfQgqGJe9vqDqJBMHLtv3U2Gu7brbghPkeghph7nZAguR3ob5ME2EWsWcpaCNB62fnb465Xud6QxHUonzVvR2vE",
  "key3": "28ofg1VdMzzaCZK47wDaqfiyExwwyVraMqV6N7fDsjaAeinNqxJdXgVuGHKeFbeELFBKnY2tDUKKz6y1HzFtHzZA",
  "key4": "2EAxCGA5XCMkHM91889vfNJsUZhSVvvCcZMb99WuvgGBUjDDxN6WusnUUS45nbnheXx64HChNrGwCfnvmwZzFndn",
  "key5": "4WhmgnsaF1WzaGzrnS3apPz7i4VHWwwEE9NUQENw7ciQRAEL4eqmEvuhQCYz6RodptiGunbfrmuH1Zj2miBNWjiA",
  "key6": "VVYCRbEU5tgqD6UQATaRbGaadjev3nuiXyztdKUK4uwY71MEwT9JyGsvWEyJvX5QhVcv9cHNMqbuKV2eBnbQ4WJ",
  "key7": "3kGjQFdXVcGHJtVnjqFGpwY8GbjFGsXQonTqn7pdVaErz7hKe7riQuAC3hcJJjxErAQyXCmYVvw5oQME81JCqARW",
  "key8": "5DXcaAmfvMyGhQJdqHiZawmvzP89X4kG4YTu9ufByBqFje9wSTKmEbEtt6fxdbqy6AXhgxPtHxWv6Mez74Mr7xP6",
  "key9": "2mqSZjWvdUpTCE1BQ1R43WmrQYrcR8ry5hmjzS2MJq8f3H9KyU9rX8LfkSqxoYREvfbFybaJdhzAZBSGabkbiB4Z",
  "key10": "4fgU3dMHXV7a2pCzybpF5ykdXvKmGEU3ym1pX26bEojuYtedHdaqgg9HiZk9fJSyzXWGzbUYJvjWjTiDohKeKLFr",
  "key11": "2fnGMUYJX1dgSzK1JbpEEeQ5Xn7vF4GUezLkU35wHZEaCuuNsoWvK2h5qmmVDJWNqs5HAjTHivQfT49YBC1fKarp",
  "key12": "5MT91KCaYFS6xFAWRNFxm4PGhQ8LXsGjPysvmna1soRNN8sFszMzWmLoYw6QKWu8KReavEx36JtnRiXycyp5anoL",
  "key13": "3EYd1P6Jw6MgJ98T2hkvPKaPb8udhfBxYN2za9bASMbACZhrLbRWQxY7VzojoXS4jCoi4nLGtuEU65u4VewinoRy",
  "key14": "5HVyycoNwRyHvYND44dwKiqbEM52LT3Jr2XwK7X5tHVSMiBtiwDmyaEMam2Fh3NqCr7tCnLwkpKMmAkdMKG1Efac",
  "key15": "26Gvh5hNfqTCtkCqXVsE9R51KbJdh2ixMGhShQUmQsw3z1g2gXzrS6bk5zZXbMbVsGn2L1NPQWjUirYbVuisUQZh",
  "key16": "5JsD5SD6HPz5fpPWjKQGd1eRotNYA15nH6Sy9Txe9ceVugkGKK5DmCWSQVkCHbrXWe1rUNhtw3W5gsMPKz62NMvi",
  "key17": "5N4MQF9CvwLzG8wzgtDWCvmrgCVkrzoQkoq4Rr3GQkvdKpgmUSZNj7UYuHCzhkyZ6xz67bdA2oRtJFfzezQ3TPQj",
  "key18": "5NnCmTJnzFJxT3JiLvB7gHWv1CKBSmpZPJx3aUc8RMJtUtFiRBt1pXUZD4qbWozsJWmbrsz3dtix7fF17fZc7aHd",
  "key19": "2xtEnpjRrZzaByS1CiZjMu5SSZpke4TumZWkfCQWnq1v5hEzvyyjK1fKTRKV4wk4y3geHQw7bjLB9YTgtDsh6sLx",
  "key20": "3aSGwQvvJdxS5g2Ldqgru1AVkNkVFH83iSixo1JPEYCXyZgEdi9H1D2vwdFFLzUxyVdo1BoeSVVcttZmUwPusviy",
  "key21": "55ASn3aJ2adQ1NqCNzj5FwE6g5yxsjYe65gGGnEvS3k6MJg1TJSFPVAEFMQMuyK3NCohaLnNP3mPqYnPU5pkit2Q",
  "key22": "3CPqT8Jbx9ytwZsBst2ZkbEimELAnHR5gnqCQSr5DdhgJ79a5aoAQNxyEVbEKhEi9VcCtudYUp84wfzvu5Nk4i6b",
  "key23": "5FSrdKPmuE4Ct45sc6WxAyaLZCTd2gozv14Brp652nGb58rRHEBqN5F5huhWSyaQiqF7nSvGtt4BG78b7aRneJNU",
  "key24": "53SXLxiMejHhVYqyNS2gxaxobTaHhKJFGWj7w2eH5CBBqmMRQ8vRu11G9zaLoEgCS1PtgnibPBmegTuKKArz3jUX",
  "key25": "4zGTLAfLoKhxhzdSmkgvkLZUzE5cX4Y62wEfAhAB8cNX4LA3XqaJT7pUWYEkAMYPSH9zGJkcYqcrYD41ssYoMMLn",
  "key26": "gLpqn3N48rEriDAQo2LUn4kSZzy82k2WPeKnuF3ryVQo4twQXEvUYHGv8gy7zP3U7MGmbookE9PiD7GwYH945iV",
  "key27": "3ALYpvw5ebWfQcrKWgvAXke6h6JHzKoUCpkzjb2fVNK8W3YX3qaP57m2PypDCmsJdV3CHkUDq4ZRSBg1Ca3VvPq1",
  "key28": "5mxpFcN1KioLyDLP8PKF4dP6PpeE5uwX38NLbUE7BxY4REsexnd3nhJHDVgDbiWBRVEY5EgWxFpxAxQgawETGiY9",
  "key29": "5NMm54NBPQZ4jQL7LXFs7mFkpFmVDNsvPP5nNyWt1W4EsYUj6n97FeCqDTYAEkum9HSGcweTAB5ckngQhTCDsBx",
  "key30": "43parSx369z7q1UnZC1HrFrekZJ1DR6sYeibyxzf2t1FEgunR6fiwktsXcLS2JZv6U5SGQrf5k36oT9AStojjH17",
  "key31": "2MoueNPQ9yJAp914EnEooveLRtX1LigLzHED2E5Gu3FAd5CG8wcP3FFKZxPCe9cS7qYyTmBRuYPHaSUTmkyFQXU3",
  "key32": "sWY2yDbEn88Q66rZQjGpRG9ZPvE5asjasKzhgLAZjVVQ1apA5BS6HsJGGds88qxPRCJ9vykvhWfZqzJsqhiAwG5",
  "key33": "3hUVifXvGeVWHpUabVxzJhgYWcWWtmpoYLiwrn1Yjs7nfANwGJkU8ykAkUHivTei1HLUD6i5QUhof9hYit71fNiC",
  "key34": "62UsDkezY15ai1Z81ESgrPescbtErb95ECB1tkRJrm6sbJeHqrqLJv5myxXg4H6jpytd1NBFYwmNEK4osDrpz2hN",
  "key35": "Hao6nWRFgcRLHuL1w7YjsQHTmCjdx6g2ueGBrWBatM4UYWpowBFteYYscJNgv2wJtN1U359tKwtoeATiopWAQqD",
  "key36": "87bb7adx5XbvcuKpDXPYjze8jgAYhFkrKqaqxDdzqnWE9nonv8uyXe6eBfhDBMJhjVvebXsfZ44T79P2u9kTrbk",
  "key37": "5syFqKhqAzh8eS7mnA7rZJo5AM31J25TG9MYGy9YFLJf2ZR1VwDtZQ5WbKYJggbLGsb9T6H9VvQY2AKVyJczB6Kp",
  "key38": "4FX8UzENn18RSX9zCA2FpcfbutcfuFFzZB1XkYq4RSdzadjSC1sLvQPbEg1ZCsXtKznHLAAcM3h9VHa2wswbEekC",
  "key39": "4CtVEGYUXYHHdz4TRs8GYQNyKWN5U3xbREgwbn6D86hA8xV4Ebg7Sc6y3ia5JxkUSZG9VFD4bWJs3KcfCF9DEd94",
  "key40": "61nWE4nvLhhMcP1HvvKXPRbvWi1JvnJ9Jov1Uj3yog3yAgtUoaUXtpFVMwqdHE7SXDDXazLn43CBBLaxkz7bDeLL",
  "key41": "3uYKdAvzmWuV4dvrKf9QWJj8jdsKxz2xGtQovXp3XK1Cu4tT3RZm2n1CcTPu5Cbvc72wzJCj7DKC8YQDi9ggF2m1",
  "key42": "4rCjXtRkJJFfVSjFmcohjpT1u2gKsBVAQr431EezAMSxksSRako5KD5oQJdPC2SmG5gWsWeNt3LpvcBTaznhuqnt"
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
