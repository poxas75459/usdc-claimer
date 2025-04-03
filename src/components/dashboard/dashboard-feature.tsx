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
    "3NSf69Gvr4YzsuAQgD8r3ZLGrjk9p4r9q8pNwsGpBXySqTPuHBTDNBVfECa9HRabTM1qPNymNfh7hcdE2dZjFWNS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Qien89d4aFLJM42JempEZaSzxexTXAihKUMpESQVjL45LmFzPpNgwdnJXbCzKsZpqBE2j6JbyeqQ9pNdvaDpGrq",
  "key1": "3qaNFmw7V2GFkPtHLYP6fFzUCHLs92VTAqKLiRzZVjf8mdwW4bTHSKHSfg6ZkompnT2PUPbZuRbtHn1qcL14ACSi",
  "key2": "4G8aaEc1xcsTSK7zc46hXDxQ9AkeiFJfK9DUjYRryrKaJpG5RAjZB86MjKhvrYaxTHNjwA7GSWGiza8VRVp5w5zZ",
  "key3": "2V12LikTPYPqzVo2PbyzX5N6MddNWeYubVBAyGazfbif9Ky56gS123MHigqSu6ocQr5ZubzCTG9kiHGW9XFcWyh3",
  "key4": "4ygZd9Ed8PWqiQoH9WQDFpeqDKheYs3awk1EsvjKmGbVBui6mD6WAUZAtMiJTKPxWYt15QSEAEgeUBVd8obza5v1",
  "key5": "35t5KcRXaAgBa7qQhEhPrtah2YKCa3H7EuJLfoSyGUAtpUFkEA5SntETATmXjkGzpQskPwrGCp8pedaLs1nfLLmw",
  "key6": "2tqXhTd8GxMAQAqTgTKakQEXEA5DaMQq3PiRriLVBNaqkxdHt5LWPEpwY6BmwUDgbsHeR3cgDpgUds6mQXAsLK3V",
  "key7": "ccqoEzXMtEZauF3rWFwmRLiqvCfYfSpipBpV4bMy9MKsttqJQXeccw6BLzgTFvGdMEx8q1z5mkRVtEzmrZpQpuR",
  "key8": "5hY8rGXaakvSn9Xuom69qsh9Yw8biZGt6NxLLoDPtBe2BeAwFGzvCE3ZH68D13Cx845VufHRbLDEuNp6nTmpohUj",
  "key9": "4aYj41G7umceeERsMMFTTvs2tW3QzxXPHqWGDVX8PsRq2jHfgN2Wox1rCFSK8JxKL8z9hPTPAPEuCeZz8Kfo7HD5",
  "key10": "3iZQ2ThdyMNJ3aKexYTVM5EaadiyTdSaFqTcFMen2KNkozmuwgc9ELHmJK6h8R36j1yutdmU9KPhRhtDCNyeQLwZ",
  "key11": "3JciRYVEFQ6XbKzN8Hg5gA2zP8aT7iWZQ8YjXJm2Q4eJexuA1JHUSJrHB4mgLVmcRqbytYCk3VboeB47L74b2wR5",
  "key12": "2n3yUPAEeWBF5hBTyLLUG8hcDNwP1WeXqnBbFW468PpDQR3kU7stYLXvUk6ZDk2y1g31CGwpmgmQTS1qC2DwuqZ9",
  "key13": "21Vywa8vHuD1mQpen1MfN19wMsN5oxbCvSheRGGU2bg5ZvNfL2Y41jRvqckLq8fAirheNLj6PTMTBFUKnrgbrYM5",
  "key14": "515k7K1Sr9AnRPHDHa9EZAUV6nSnHh4J8kk53jZfrpPfaRR7YAVcGMGvBk4e2tBJjRbtMU99JaQ8xHE3QLAo4AuZ",
  "key15": "2afRcMMqB7dNazpJ6zUMBQZohJGW8YVjEY7NEBhRJF35eyVBD9pR7MMWS1g1YTaHaa1KCtgTiG3MFjoc4FPewpAD",
  "key16": "jMa2dxst9PQ5EGUff5KGznJaA3exNN2gAtZGB8nR8HUqFr4nDnJ7G6tC1pXrEL4R8Xe1sRTQpBfFPwkNsDYXKfu",
  "key17": "2FMWiouqrQ8Q9VTdrxCFw3k72bEmLuYP4iCeJmT1MWBoyo9jzP7W7firWeh2ZMTKSMXQvXXVVGmiqJQ8VM8MYDXm",
  "key18": "2Cagfnrt9rKEmLwV7jAbgPaaxt8eHCJRrdopxx7hV9WfX9dG718ao6FVDtDwt5WMXvQkDNEtkg2jkD4Z574BBbig",
  "key19": "2AnmKaTtcBxMDcK3fkYmbpYwVrNBhS2no6fw2FSfb5NRqX3WzP9ogGLpHSHG5dWfLvNjbWXJwERcsXQp6K1tuQav",
  "key20": "51LxDQ4HiCWXDYQnXsWncWGpbd8twvF4V4YmDYPDxQSvGdPC4fL2cJLHCz7FsnM1LuGPBgjhhXYfKwQAi97NivFJ",
  "key21": "iw5MYmzT7arAu3smRqADEoBFSz6gLxw7XkhwG3ucK2zcpgkrqwzBpvommrT5WQbFC5vDA78MZkp1EssqUKYpapu",
  "key22": "32RPG6bG6FYa6LB7dmV2ZZcWJouXgbG3tNFrJCX9SfNWqdefN2DtKWXs3YvVPKX8NKEJBiVXJhQFHQSBxvAx38m3",
  "key23": "2gV6dA3H6iKSBaqcJ6XMo6Z48EcPodPiqvts6YRZX78fgHMDeuDsjF2RyAP8cWnbmNHttoT2fMcjSYMafNDMNuX7",
  "key24": "2kgmvuAeEhG9eZ7DYKyMyc5nWJRjLg3mtnDnSrNYi1Kv6UiaxVY83tBgCs6MKExVymbatAgQHJug7XMT4wQMPYYZ",
  "key25": "eWegekBgx2Qp36r8Z2YvMRGvTANUWZgRanZZoGDjXLcQY1VmnT6U5iLvbtc5qtJciXBRaeiAm6CTekVKMHrzDQA",
  "key26": "PJVyAqaMkkBntGcGJj6WJ63yC1w8SuYTBHfHfLQzaNmTFDmUGu3cN5MShYEyUj5rD27rtbSHwyKYfLwvxg887Wh",
  "key27": "3QVjb9TAmevNUihGNnrHertDAwKVVaho9Z8nQ5fLHbUQ4PR75sfAmoGmdSXzxazzPp6TT1J6M9yfsWk6ACGcrx87",
  "key28": "3UGphUoyThXZpKxdSyq2pMfq6nv3TUKDQF3mNENNhKNPAJNgjFZWCiYha8HWEQ49SHZuu3wqLRGUuQsE8v3LgjXd",
  "key29": "2GyVYFmFtWqoxG45eGHZ9FFuLNWJb2HLiK6J9S9pNWZjurjZeaw9nSbhyCY3ZFgph9rjkGXL1JiH52dhMS16rweG",
  "key30": "61gHqMndEUXiooVCZE5L6ECnAPVqMfYU8BwUmnqTRXqcfkgiAoxHGsFofiHLGS3qK6ZFWUip4RwgicxtZ79PGZ9X",
  "key31": "2nzFgwMNywQpXEQKEAADJgDKxLCGL19pRucJiNjMv3qKLXrbKQqqREahSRiPfVKHWmzpT85EMYwRjBrTQztTLQnp",
  "key32": "3mkVa1DqQJaFgYcBZZ2Xg8HoUVDmXFVeZyXYnF9JuZ4DJdpMJUoUHNhHR3oYNkhaZV5byZEjR8KZ2KVUHeP9iksY",
  "key33": "3HaUcdSmxKkCkhqnzkN9bmQ6a3t1N79wFBz8RmHMV5pMZPXo3Luo5jj6uvso8ctyETEJGEotCMBUnUv6p5JHXh4o",
  "key34": "2g5i1Rtj1bZCjmHiCMGYCddBJk63EaYCaAF6VPhcG3Li18e9kXED3LMbDmNizDMCtBH5snU7bNSxYM6xBAqJkRQQ",
  "key35": "4K4S8gqG9k1h5e1Wnabei6Q9XNSZ1iVnSuCg4uG7aSasThMeuHihF7KPNqcg9nkAHrWQePVr8LDJ8DF6pa27usi2",
  "key36": "2g3phJQ2sLMb4vTDpGZYC9n8f3TQC7u2vxXZWRSyPkbcvnF3PAaWk8a4fLB1Bm9AYZrrLfw66xfKQVhEoEUAkTPc",
  "key37": "JKBWEEfsv48x3Dukie8o1FYWkFSy75wai23RBqmxkZYzftr5e8cK4jZEScD4KVEC9qSGLzq8gKs4wqTe1wECazo",
  "key38": "ZDZmS9GacdjLZdqx2upsxChMHnfXG63S9vvVjDR7vjP5ojVn5Erigeo7oYhDAo4fmpo1RjtiPKFXB6NAXJrRwzd",
  "key39": "9vZgbLnAwmLecww85PFdthsmm3zLME5VNz2HJejs1jp6wY4N2cDTfFx9mW5Teo3aABoupbJNMjp4EwZTGY6A3Kz",
  "key40": "4oXrJcvqB8LpUeNiH4U8NRNzMnvCDaFzghAZdNV4z4uLmjJHapZaUN94AjnQbGU7WFkYDCUkVPo1Lw3jtLdLAjeq",
  "key41": "3V9vcZK3rQJZKN9qEFf7QFUDiH8hBBHyEKsoMXSFEZ7A5wmCB6WSwvtqRUcrMmTzfHsUhWXoZzjn69yH7nvgHRq7",
  "key42": "5j2FaGEXc9TmTFEQHEdHa74SvitjCub3Vm4qqcfCG3mZokGNu8GsKuvu41g2h5xTky9qoyZbGBaUhEth1XvfdVMs",
  "key43": "2mQtKMMfusrPqySzDLb7Cv4TsZZzkEhWnZVnZ2AdHm2ZZ22P8d6R7m8SfpJWpG6sWA6cKSFmrK7bnBfKM7w1ukp1"
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
