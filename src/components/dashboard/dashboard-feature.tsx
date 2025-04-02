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
    "28pGrqyfmyo8VvTEwZ86zrQxnX1d4SNYSUipQ8QvfWWph2FaGzhsumPkyjKi4K9tjQw2K45XZTzfnxLtPi7d4Qvo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yU8ahSyYQNLUJmuNVWq6NSwbrwSs3cWLbrNogf9QwNdd1GkR5yRYdyNmb4n7BFujgdjHDPdY1dN6PgvNBoBLZK8",
  "key1": "3TKFnUxKgRLNhJX5Nf8SYjJGg4sJnjj2VmSS7QR8US6XbTULegYCxTuNyrpvn1fJ54z5SZT8DRZToXJReTbfLnuz",
  "key2": "4HAWyYNUZxFK6tujAJgMz5UDSvekTvZrmxisX8Fs1jHWz9uhkxpH8rdkt53YgG22AK9CYHPbWSCNDUXf3JGKhcCz",
  "key3": "y1M9U4m6Fva458EQFajArMPJQrXk6ARPAWBTqKmHuAopGrpUuXuCMvQ2GEhEL7PqxQRXCNWmhKjAWeMgBqbmrec",
  "key4": "2XoXKBUxUa3EqG1tNsvL54BTCyyRY8rTAAepmKUB22fUYnBHckSLh7aGDDpJvJCysTR4uyLsVDG9RZYBam9fnNn2",
  "key5": "2rYqqPwxLXUtTRrsyDfz2WWw6ipLpRME3u7GwmyrffF8TDzSUneRjQH4iVBWaUvg9GyeZTNDwUE7XgyLUjYKfW4Y",
  "key6": "5bcYavjKUNdQ8sE2V8HiY4wyk7wqiWZ7cvtwTpRN4nvd87bkFd5FSdDmBG98WCtzQqAxaVtiRfq98GFhRyEdAQ7",
  "key7": "4WjHdjJVoXymcjxTQFy61Uz7aMV4tVUzKsZfXwMVvdsTFfQ8wT7U2eYPV2m4Pj5ZhPmsE7fEkBnyPyuDZ65dFery",
  "key8": "43NZKStphoe7KjS1YZH3DcmcJwaPpj9bD1VjKHYLFz1qQMFWM4qUXaL1Y1e2MRqhhquPyWdfrU2mioDJvY5tYnMN",
  "key9": "5Yqc4NvBrejv4dw3EXwYiELarC12d9YaEUmaVNEi4dCtjyt4su2aJYHv9AiZgNDqRc37Hjki2K3xJAYAvWBWGjmG",
  "key10": "1awi4Tm23rqUspnNeq5dmSSbM8qwSZKdFoxs1UWtpJi1urQgRJq6EX5Xw247Zt7HWqEoep7EvS3und4dTa5Tak4",
  "key11": "4zEMTtj4oNrraj7UaudgEAXKigKaoVDrzLDRX5Sqs9PK9o75KwzcCX9TVuBRsyySTw5P2TiYMZ1X5AoJzP6eVntN",
  "key12": "2tnEWYkMheNLbVEFwQGhnpxpSkQFEkYxbWFrcFzcnkZq8GRR1VGM4zYkVTGFsg8WgPY5pHu8dfRhgqRVSJfJYjKP",
  "key13": "2N9ZGG5kHFC5SrYQj58Eir9ePuJ8wJMkPaUHDSrgUE5zjkc7hBGtEJA9AG81CrognD3ZSSBHrJYn5f9nafo4cyhs",
  "key14": "kxcRp6h3AALjTqLGwvApodm7syFJML7ZA4EvanWnG6N4dQt9APcQT1tNAy58kifQ54nw3jhndpEgFroZ1mpj3hf",
  "key15": "4RiLLExbFy1upM2BzB7nXwtbY4jHpJdPL2mYcjKBwUXF48Kgbr5LJmoKHUU8uA1Ut4kZWNxqZtwU6LUEvTvb5Qop",
  "key16": "3YowRExm8KiAi47Gr3mpaHGbfVpp88w4eiknNaY76eRw93eczNmMRfc5nE3swXjn4ecd3w1DGpV9uzHqZHqdyNa1",
  "key17": "5hxrWvJXdDyN1EeSFA6mq7VHP7cERKGjgvBgoX5csvVzSzoEP8tXmic8tLVx9zMd7HGZQmvTmukuqbbcA5vW6gYV",
  "key18": "3CrZLcLb7y3QxUrcV9abBaUVyvX53qJFLKziPL9TKnRzRkPcMU1xb8XacFcHmn7oNKS4B7ic5Yis4PDgNVQZoobY",
  "key19": "37SrvC6278mPNeJ9EbDrEdw9knWYcJTbP7JMupJhaFwPX24dfMUerzdJk5fAi5xzYC6LEQApp22PVzE4iztQg7Np",
  "key20": "5MBrfEUzjAvYZ7n3UELXASykeGLBjKuQ9uzXZcFceLSRPEtVVyqokCUQxdn5a1XFGmpESErB76a8EZTEi9xQ4NzU",
  "key21": "3r1xmom5x2qW8eNqphWqdceT1uMREMYnXakXsH3rELyZUaw3vxQTfhFhLZJ2EooKoUv34Yb1csCgpHX8pE7zzAvM",
  "key22": "3dB9X4pQeEidCK3xCWj1zGZhhH7Vu3gVLFKknriTEFBjDgF7MWLcrpK6wAxK7UdXToPGNN583k7fJEktz4JPQBNH",
  "key23": "4EYMYtGx6GtcpEYTzgAx884q5WMbWaakhfeGjE4SmeZ2P1wzzThLUXfTogYikUQebqdqfHFJvHY1WEFztFLDeKZY",
  "key24": "5DEGFALsda5EVtvJWYjdvQrFKPH11DV7P7HKU9L7aBdAA3HPMvCnUBLkVsTAiaJn8N4xfDVgNbqgfsCiuLNeGjwn",
  "key25": "3JT4v1pLjhPUixBD4jGJxfUgZonHig2fcafnGu31zXV7k3kURPQZt14RqRVM6MFNS9poeTy4XHR6aRGCgizbbGgK",
  "key26": "4TgyPaS9THrN7gi18KyFzoE7gxZRjsFXMxpnNkjVLvPRxzK5w1YJSfQgoC6i76QnYjSwTisNYc1jNjCntrYNypCS",
  "key27": "3N49vawidFRvoRcpf752gFWjziSar1QNT9uDRTbWcTv7KiFCT1P2pWnVEwzgv78UndcMfhG9kB15UUQnL4XB2WuK",
  "key28": "5DNrTKfJ2fYRja8xd7M98RbRXBrYdVMsMR7APQCLfyRpjorXu7iAbRDvAM8H6ds6JpuB41QC5svHjSTW4gR3tozX",
  "key29": "2m9iTwePEptnGqcQYxR8ePXQWL73P3ve7U24BYRRUSbq1NnkGaUYXVXuV21SdXsuqx9c1HoQZE4uoiE1d1qXNKb7",
  "key30": "sDLox9GojGqTREErpyW7NYWBNmB1Wd5EjSUeMaYc6XdhVH15WxfNTFZwKUbXyTpxcYKEf72rZhmmLxjdG7X1FDZ",
  "key31": "3QAuqyKA6m8MuzhqozUaCqmR2VeGTCK75Z4FEySPqRY1Y1e6Jm1PQgavFetXdTHZoKJxfYHLeqv3itDEA2ye8dob",
  "key32": "24y4XuA31XiaGZLXKN7iQBNqySVrnMoeJc7HfpB9dB8o5dQvQueArvUHNbv45Wjkoh8yB69231oHmQdB392AiV8V",
  "key33": "4C7TXymiUGWvVimXJbjB8tSf1h3UZvFn1wz4AJgtEqCSdJzB2XKR3auhP6FKiQ6U9or6j7KYzwqpHXCUMQWvjZ2J",
  "key34": "uuhHBc1gtsXdbvn8Ba8aer61VER2VzssWsT75nS181f3FoVGFEUGuw7b7UCqtVV2CrcwPDZjEeQXB4mBWAat2Qi",
  "key35": "1X7iZoJAggGcr87wjAXEL7NZ4MnDmbZ9pG2tKBa3ZPgnFp3da98LkuJmzPEurtp1ytwKaFgUMKTEbMWaTei8Ni8",
  "key36": "5pzMZaHQ3gNF4xtjUBvgCsqxRvxCYGmnBDqydrn8RjEb4FUnRRA9Kjv5f7d5mpKNPRupQjK6ZKRzobwgDRJxC3Rj",
  "key37": "2c3oKk3jY43iBQVncEiNmhC6E297dZR9sNPU7XgkyDkgiDrCCswRkA4DWr2ScrvWnhRK2av5u52C3KGouHTEFVPN",
  "key38": "2VH6XsZ1pxnadawewpgoKDijTB2fRii5i4NyaeYbmiWs7j63nwXEZysfZryXzwrYFgnq1G2SP2gmj8mEMNRhmSAi",
  "key39": "YVEMbRPt9Cx75FBzCCDWFqZEn45uUYeqM6RYHybnYpvSNfq7YiMr1v9FLC4dEfyE6RnentGVXkH5UtYfj42ENkc",
  "key40": "XqQ3noWqQbgK4F7CGcLmzgN3RTZNhLCsftFXWVT2dKfURfcVLPuTgLy9F3pRZbkxRMFzJij6MQQkQiVKBmVUxok",
  "key41": "2XLtz1wKvrFAu93UEahZQwfT1nnoxnxLJ7gycgnVzRdGhcFpibnaowxcBRwxRBjneHP2XpLuzb6txp3LWMtNmWrS",
  "key42": "4zc6TgUrnqAa4ZDfQmijz88AJeo7NcaHpNdEojxfeSizXRUPnz66VNA7tMGECHTs3e5KuqS2YkwprwWXWCrirY3X",
  "key43": "5K27923gX9bDCRPJnnLhyoCp6XWofGgNYi6kcgHpfvpnBqspZkxd1j6pCWmFbNWwY5rEK4VkUncm9vvfvervXxqJ",
  "key44": "2F8uhgi67j6UFnUrFh6yfQyhcQDMh3eoMyQRQsPcCck5piAcY1BFoFmCAs2uPZRjYbNVwH1SXmkrq2iRo8n721Ro",
  "key45": "63BUh2b2FRtSz45rSUNG9PLikFLZtwbLXaRmiYRXTnbP49DfsQBAjb2dMTaMZuSmKjzfzt4UhQoJxYKF7Bb8swm5",
  "key46": "3kajUCZ4oLN9mYMZ9V5wfFHqCByqq55nyBZCfNyDFnHhdqi25PHo5mTq1H25AX85iTNAQiUUohB8Rrf9DZeVoH5t",
  "key47": "NZaCT1BnsYZ9ZfLNRnmH2gJhbFMt83h9TUDbxetcBYURh8Sq4Yz5hnFBDKnXC4qCA6Vb5W5yEny9J8nEZogxrbU",
  "key48": "22FbwSqKaQj4pH3x89MdhftaKih6CYmEz3xqBULJ3Vkw2mMNuJJTa1SDRd3zvzsdeo96CNaGeHmH2RFH9YK2DP7T"
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
