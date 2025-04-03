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
    "2kGUiks7GHJXretgtmozwF9tD62NybKBMnQQGUvDMjAfqbUWXLYwnaNC3ukdTkrNmey54MKBPq96JANuGDLiPF86"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aKYZBoqjvM889PbYkoZZwgBKg1Tsad3Yq98BYn5wYt9fUCwnzF7W8eRRJ4pRCaV2gMbWKM2z4e5aXfV15EJzRcc",
  "key1": "338gkaAUMifPC8LCaDB5Q8QyXHoqYhTd3yjppfXjhwf4zkeB6PqtuBis4QABgEJ1hsgrHpDfjHZp94qvhk9aZEiw",
  "key2": "4PjmTjzwScVJrbhPiLuk8KvfPafcE8jn93MaNgxMCG6UHRAs39zRn5bnrVCVLm344bYT7aoTLnWTrQ9hSQPQ4xRX",
  "key3": "3W4uNqPsZTja4ihGPx5TccDvwxNSfFFrAbQJL8B7fVFX8bo9fbohDwQcUsPV8USbxeJhBRQgedWxKhM4KVMCP6A3",
  "key4": "5hNiDwoDwi8SHu5bbVe4PNT2bTpum3odDcz7LqXbDbo17nQ3uVDDUURK3fwxosvX8LkxJ9XqxqkTupYQ6r31qdGX",
  "key5": "ShJHwmMcAYiEGxYMkfQ9WZVFcUpmCoYHKgkTu7dNMQbSo81tMj5nEnKyXeXh1ERHTQ6XsSwgevcoT4FX5vM3VJV",
  "key6": "VAbAbahQScJKvRV9PVi1uNqHBPbHR8gBWiKTP9eGAsjpAwNY7RmHaR54YR8kbUJxci1w2wYS5umaGkqdbQayRG1",
  "key7": "53yGv5Cg5foUeBLTWvKmeBjZ56CwUoVv3TmWLuFAaCEjoJPEN39pSWfxwpvxuQU1wpTScyqFy3gXU47gPJGYyQC7",
  "key8": "565kakgkwo1iwQJngFCS9qg3b1Kwjjah4A6g3q1Zz2rD35HhehUE9byRtgvboRxgDJZbJAsA6AFxs1UnQpshHtvM",
  "key9": "2mSsPQCvy6vNA4BQpjmHc6kshEX9N4inZBx5451c6jvLdLXocBGYAxD3cPVbkanLQupqNsVfvqHUyzyjAYiHuGYx",
  "key10": "3ktNmxjaG8biAcGwr8Yo2ZnTti538721uXxPQfvofKkT4ER1mARgFgoyCRfTsa9yBycgLZ9btPq6Wozcp46XC3Tg",
  "key11": "2CyyLGjYKffSd7h6Yu5smb9RHxRkV49BZExuidPxECzArFFMW3tSz3mj4PbthbVrCvipPzJL2v9PHam6DC6WxiWz",
  "key12": "2EuNV7Ke1UGn2zhag27BP2nizxQpGdaZfRawM6zGfmkeky4NWDfiog7KdE5DyJPftjz8HNkPRtMHxog7LF7GLLSY",
  "key13": "2kSvc5dHR9L5ct59qs2pUCgsjNZBLCRk8V5KbXbT1meGmPoDDkUrZYH6WGQzKZkyqKKS8vKFuToHFi7joMh5nhdg",
  "key14": "4E2meBhtRKZJVmGYEU5yN5kHZqqhaFSbhEvKE6Q7NMnyJr6udV5V81NBN5NKTd6uGT7JL64GwUUcGCTJGzGyFxPE",
  "key15": "hKExEHfzcWncJgLZnD1BuVs96RLQYRpKynDCZuw1jeJNCTU2ubgF5J8wguGXzNXmP5WMmGM3hxBeVMbbs7i7f4x",
  "key16": "5oFH45tktYb6oShHeLxiCbjfwKqtVJR9s3ewucSKBJoUX8EGaQzyfVAUVErgBXt92tNhjkg5CD81xoEMEv9ofj7x",
  "key17": "5YXSwwWBaGiv3fLwHx3P6p6avumFow1825a29MbErFLTnrY3zoSmUDuxWvd1mzJXvipQ11vWDvveqwx5HZY8WMid",
  "key18": "5296dNKPuuL6XdsKL9YQbanFCykCTi84SQz6iCxMSSJtrdUPufzuPmyiki3PtfBMFxgoxUp13y354tTZoxT5LKNE",
  "key19": "4wPUWeaACFJWe5Wsiuomk6b9kuwH6ePEZCk5p143baSPsL4LrbMC44dT1EJWpzgzkiMR13TPqAGdRCaF7zgFmJG7",
  "key20": "5m9xxeLCktcqDETYR3teC3p7hzJYmTxUnT3RhRPtB63XdjaAKEq4NACznqC7NbSKmRy3Ang5cDEMRF33edPF1dWz",
  "key21": "2gYvrjiqb2d78BMvQq5SSC9XrJrbaoeAc9SHrBUDy497QTT5P4ihQM6AZD6XiH77Pu5ktiHT2hTTfHPHCqP5dQg",
  "key22": "4rQYeXuaH6q2qvTGLLCEh566v229s5RaaPcvYcz4RFTJyzfkrAXgd8GaNscgnjJDeSju9gSffr1dLPmXZ7kNx2Ld",
  "key23": "28cDzWcEmzxXhuSHT5wRJeweTjmFJ2Dsrd2frkWzJC19RKqNnyfZicubiLce3d3SDrxLnkPJjdFhFSuuSbbn4VWY",
  "key24": "SxeQwpAsXZX9V2g7M1FUHygFiF8qNb1UNVwEHowDTqBdpnuqSSYhXETGGZYnWi2NtdC9SczpdZfQBjzsh2KQi9Y",
  "key25": "4cwDPG5JPV9zHKCZsJNwA4dLWGJBRSHCm8xFe4UZsfuckWBBsrrKRPJhVtLAn6ifVgDbXyGbJcUAiMx1WF5MU91m",
  "key26": "2cjCaP3FS6t72fsLUtrJqqGGvxmTuuG2bbjHUhofM2EMSgqcSsaqND98GiKqSm9ca93AbtVU1eMiD3SCUZk4EYPv",
  "key27": "5o4Sgfxfi5LznUiskMJzWa9K1XQS7KQu9oycvXK4LcJPUFee5WyhqY5E4yX6SHdbvAaZVkDqabhDhiaqTWNoEBgV",
  "key28": "FDcv6A588sXVJatmx4o3KhKPuSjpPVz5oH6dATRvmi29N8WBmek14LMdzFjU4KZJupr1xWBXi7GEi8A4ntgssaA",
  "key29": "3Qpn3b11SKvPpyGp8DttvLy7NjpNgTbSYRuXfTbJcvoVJTiKGZzKtvSa3A22PpYg8sLNymKpkBZfAbazRcGrJjch",
  "key30": "5CM8y7x5PaXRJmBFGajNfVGpUaFARDtTV3pQR8KwG3Xrmzn6tbXvnt2JJ1f322Z89UfJEYt427rAz1cXw8wnkXvZ",
  "key31": "2uhU1cSNVoJaUKSzJY2dwsy5dRnPzwzdV39p8eo85eZzv3cbq17tqCaLEV7tXW2Lz4LboNZmAYjyPycQJCkZWY9q",
  "key32": "3BS7aKusn5g9pnM9uvkDpWg7KmPVd2AQ8M4XzWQyu5hbjBAxemCWB6FrNjKK6qeWqB2U2uTWgrANf1PVmarBY3nK",
  "key33": "4Yz3sf5BXohpTo3P1Cab6BbeDyhwLopazSQpK8GoT387uMjw5sUVpQYcMyZcQgtXqfsRAdUpe6NZ8WSmhSDrQUSZ",
  "key34": "GCAUmA3tKCHsBYcVhtaXyHT9FEqxhqjQxc18PTPtvB9pjY54XyKnYeqYsr7TM5M3rYLLqH34FBwBc4eeCT3BPGQ",
  "key35": "5e45AsphBcKCbPL3K9WwfSdkQbsaGxGyXdBmkJ5ERquYDQVypw6gbMtmzyY2HDtCjrdzNz6EfKpjc6xMcTvcQb64",
  "key36": "3W6rZotgqT6heQJ1qs6b6fwWatvjzkEh7GSxzdYoSgAxHAgLDQGuYfpN38TNJKiQBqM9ToFTZHTqM1iYvDzBBUaq",
  "key37": "3uYuGKDLCxTnHj9ARdCRcCs1qnuTbaXjaJabzakuLBPPuyJgRyeN2SbmS1aFpkYy7CtWDeMXHLszNCBaXtWTM395",
  "key38": "4pn3KzCbfNKqrJsKecoVokAZNcT58z5tAbj4ii45VroEkh15bih3SztujWjWipnPhepSJiSdR49jqTvf1Dx1dauK",
  "key39": "65uCciFpefFSYUez9KpqcwaUfCN3mKDGXirhuEv2nCkkT9xSDwXJrYxGPSvhLPWTWKfifV1tFwyYGdx1s8NVVfPd",
  "key40": "5Cyx655eCTSCsKdgXsyAgkY1E2ddj9kP9AeTtzxUZtva5J6fT7cSP5sh319ogkwA3GSz1GwWS3mS7pqfCYUU5WrN",
  "key41": "5aJ95FEPuP2znAk3DxEL4fLhMMFwB9MH3hAFsVnF4T7LK99aDCKYyL2XyH39qXPUgyJ6XPZiaBqfTG2G8c41QSpk",
  "key42": "bu2vY7tikRjzVyVz7DcMYNbvBWwYR7K9yngspwLiqVdWM7n5NUiCwEtmDXqFHhgP5z7ACNZizzh4ezf1p4YHKQR",
  "key43": "4WiW19EGDDwd8ZPLednkX3uHU57tbyV3PkRtsMAPNRoPNA2jLhdb8qhdWjVwZ7VaAeqtxBWZVs6EGrPn35p5Knw2",
  "key44": "4QNgSdqTY9X5SuJAgeMqqns89xoynLuziFGyHESB5k96PzBRSymTRMR3ndAVAonrbVXbMvZHXe8BcmDcar85LaGg",
  "key45": "4YwhH7YLn4u6oABGkgxucy1f7bmWQomx2jTh4YXMKYbJY2aa6u4Ge9oJSFKaBq5rQvamtCJWtapC6VDwWx7YEL8z"
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
