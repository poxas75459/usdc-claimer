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
    "RriRBu11enLCRSrHzW2YRPe2MfaPisGUXKG9dsZkkcyjEVf4Qp1tfwGXTbHDcpJP7yP7tpoXJi4N4VDZ8rJfjAr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F62YHedbvZdyj22pYuG7Yu6DXpdJhmnyLb22HGZ3Y1D6SbvAYFn2nZBXNECCUE56n6CUs1REC5LvjiQiJ9SFD8h",
  "key1": "5bpcy7nurZNNzx9tKHQprbTzMY86VMNQbWL6K2UFvw88oeQDb9fYo1XFPEbmYbPzLkXi6z8dnPq7AiMjcaCyNent",
  "key2": "4P9k5dWQpm4i93Qp2PrpwNVmqCaixY5XAR63jqTUjn62G4S79aorAMNtgLD2VaAArbGpzEhyQ5ELg88ySm5gbYzh",
  "key3": "HC3UyZ1vwbdRksqhHDicR9wrahLZ7u1PnvjhNV5B9sVAidpqQkbGm7p9i726YKTsi2Bz2Lq2vX3RoTzggE1s5Ya",
  "key4": "4Mt92Vqc83DHY2kMa23Lkh5d6A5hynVj7rTgLVVAZDbH9fxES2BZic97HPvAGJ1EtxVNrTaPNA7H4V1km9cRmaho",
  "key5": "5evjp7Mm3ALPQEd6MLc99i1PfabtzxvaxazPrNm8Q9KSjqCbubVZLpdwNxu8Tg3Zg7jCEFysDFCSnL4jqFEWiYgH",
  "key6": "4Nhv45Tewdo5W3reCiTQ6fjfQeFjy3axTucyc98VtzDQTprXqEkT19khHZWLyoVZHVooUwgCCvL8efuNQZ34XAdy",
  "key7": "mtQThKJYwj2iRUGqN4b6FFrHFnmGH5xYkU1SSK3PixkyfYLLENDv4eNQtuHVtW5D8hLiNRxCkDGrh8BHMrqo1VN",
  "key8": "Z9XX6L6McRLqDpjnTAyvzoJdG4Qge6wWetEW7FLDQDaThofTbQovLYYcCwxKACzhVAWXwyLbWiSjE8ffgSQ1ESo",
  "key9": "5qkbAgVT1zJT3aH7VzTc7omMsPsueRFaUPxpMUpjBeFx2fRtjsRURi7tLg1N69ZiETHMmKL6crXY2vEqt8am1FuT",
  "key10": "4Q1swfeKmKhfSbkQEH7EKJ3KEUNvH1UE14azA41oPuRBB7kyFsD3GuCH2SxGByHahtD2zvNJYFVCr7pV6KWj1hhL",
  "key11": "5fXs9VTJQTgx9FvwiGFM1H7vJkcxovmEm1fcvJo5zyNziwTuE8dTw2wtKDRKiMkL5BkfGrP8LJyBHpaFv5nwZZDy",
  "key12": "3fkKaW9zx5TqxV1nfgT2nvYuEbn95jiw9CEy7szZnsCfqUxF9hLcyVbpArtVJ4pF71AFvuoeaF32MEE7XyHS2UZC",
  "key13": "21hyb9dFtXgv1xAjPhdWewvZALbQ8w8CteabEKw2bqvbohuSyVpgCnVWM3J5eaJYKM82X35Q9fodnMEaWrhsVgZK",
  "key14": "65mNtbMiy5DMfgohZKZv8WvrCUkjvrsZ9wsV3wDbrSeUo1WJN8esjJmG159hjao3GohQuxgX8BcCcdBXv33Ker5E",
  "key15": "4GLAcSVziYBEFe1NNkAvGeQ8kGiVSYPgUvF2vowh39aZho4Rgzc5zzvRYc154d5H5ptQgmE2VhkuWAScZ72qfz2T",
  "key16": "3MfSiBKZ1KgKWM7opFjoj4nZJVnJfZdMHR7NVYJAERpg8BBXbjq7ApqB6iB6sRuBJFiBssKwGuEsPdWtM9LjCygB",
  "key17": "5ZBVCJtq83531xiHoCMskwDpe8ji8NBDcyoSwRWeFB33rpjD6pwzvgp8YsrLWmZatnw2reLLF8XHSHbZBkHmacso",
  "key18": "5NGwJhC398S8zwESo9C4655CWkJXprwtSokmoi4dbUo1krBP8DaaFnRewjbom2DqBoFqBVTZdFsWWihRqaAyY4tt",
  "key19": "4TsYKhAiAfWFGAEBknWiowSTgBJBpf81gWEwkoQ5fSAtpfqRpPSWAT5G8FFE4CVVpY7dSNiQNn3JBdCYnzmhLGMC",
  "key20": "vji2MdU1VTrsD9XW4RJpeVEZJjmzfCVTibk7dqoHHQxy6MBvfrk1BogD4x5onnjCnRnk5qKBiHGMtQmfQjWgPdU",
  "key21": "2ypDQPDhFjDZGqMPKckVShYfy15RRWsQc5ddMKTfq5NeZivF3k7AJLQy9kJ6yiy3MMkmir3d6oPkiByVEhzLbfwa",
  "key22": "wvBCzkQjRLQ1eKgfNPQgv2jqpEiAqF4M8SjpWb7zQgUoUPhKrQ4h1yxg7pkS1kKTHeupcAb94JjrFC9u996jmKr",
  "key23": "5csN5XGCsiR7whgRCnx2Q4TgBqEaocbvvkT3nPVdr2d3EJzFpXJvbUFEe3vuRCGp7i97BgegRGzYkSnQeyUv62kg",
  "key24": "3VHu3amULvh9RWT73sXHMeJzAR1fWfUnnYJFbM5rWtN44k3EuE4QGFYkKzWs2kuRwWdyxR1CidJ63SrZ1CXfs88m",
  "key25": "4AihoPg5GiFCrMnFmX7rVSunQ7DMQZswzUUKMjaNUs9aG1fBSFN4cHQhEpe148bEA36KVWBkS1W1EKqirkzRjPnJ",
  "key26": "2KXVqjxnmQ3VH9hKfG5jVCpubdE7hFBwgNHYKCajvjoMURZqXPjGVZ3tdvKJJkPZT5jkx8ZiGV9Pf7xtQLr4Tb8L",
  "key27": "23rg8yd5uSwuAVVum1wWvn1VcdqZujhRZBUMvNLkn88ELS2rcn5cHtrJ6T29HNpqg3Y18FRMBFzMgHBbhwGh6FcZ",
  "key28": "2CuVTLUQP2aUq8jnumCNBZWfjfAdFTXSWyfgwYE2QJ63Z3PKhQcXyVTqZrEupAzxqEb2Wd1VnVeAwubUBd53dchx",
  "key29": "3qN6qwyEXBfj3zBbnc9KGT1uJR2qbs1xzYLRgwZfFSkrGMG7dkWsvqaomdWBJFTwwHYLCG51QUfPkdjhJs7TuDZ9",
  "key30": "3NRUQq72Ek6bUuvk1C8SQmEtk1fneMqZQxiKcpJDwJPdBqTkLmQW6NBmeRWbkgTaxeAjRXruJpyHa4pkB8DbJFxP",
  "key31": "4NnCNW6N1EuXEJptjUjfvQnhUFQDzMP3i6g1GnSeTMdusiv7LD3n2qGg3CUTWaGnkhRiXTaaXYpXxTTSdJShDQwV",
  "key32": "5N9TPU9o8sVH7Yhdio4hGWZruZ6R1ZjtBLp8SK7jJ6CWqpcKSqZMXJASz9KzEoLFRnNA3NzFg1uszkmKRYtqGSqY",
  "key33": "5M9NURRpRy4tz9KAksW7MxUbQmZnWrJhXZZYFVcWWCyaCraHeAE9bBu3w8Wyb2oepk39xnCrmgTi2jSgHm6XRGkx",
  "key34": "q26jjDDYVzHvC66YnMM7tdvKg6SsNZg1y9S8NFvAxLdGmDHUHZTHbweSPgjKW8wyWmdWs3XPy4GnM5sRecysbaN",
  "key35": "RpE7dasLr8tJo8phpSZUHK5Qa74oTfhM2RbbsJvhsnjqmo9qtNekqaRPX1rTQPs5pAxdZwL1V1Dm8hy37E1Hgv9",
  "key36": "42enGjgFnL7b7ApMug1bXJ5QkjCMgzpSnj1fVvJgLUT27c5LikerrbGEaAhhRuJ8wR5VaTtFY9R3eZF8PtGE7dJR",
  "key37": "4Fz8CZMPFRzM2hQ5giiis1bqojwDErv7WbTRELmeka9y2WkVSNytzXWAfJqEc62hgaAmPApa3YhAR9EuERjEsns4",
  "key38": "3Zzb4FhkMCkd4ekAYHQqbZZFNaUBD7NeSuZHKge8CqQpADvU9UR9SC8s7Usy8zpsL5rhngeqnFmp5p4yJQcPjAm7",
  "key39": "5db6vj5X4wpnWx54a5dAafXTsvByypBXuKg6XQayvBa6a7zShj5rDwHkPeGMoKY8xyW3VfuYQ2WzsiVtEsM9A8Zj",
  "key40": "5ncXZFGRqbv1U1AKWcemkxhWghCHHWoSLkDLLRjfddUd59Kowsmy2Re4dkZVNUufoD7L6c5mFT6qEGbVCkmjFGDA",
  "key41": "4dbXx74ptkLT8qR6XQSyHJzfjAkkb875drL17XX8W28pJdrzZRwFm3uayhuVurXuwvXk3z2tQgLVYNjNZsmeYVUW",
  "key42": "4jmm3BzuBkjVna4fCENcqvnZhri2JN2pMyr4C5GH8R4uEEA7LYoD6orCC8jcMfhWaJrVwZSrYawbDn1qvSdmbGvs",
  "key43": "4G9CdXYCu9bvMkYks51hesfrVTaCVjbcNMq8Dpi7AHyqqYpMgjS5UAkp7YnRNSsfTgeDTyrk8vRz68CivYeG1QRt",
  "key44": "jdctqRycfPXgLi13DuBkz9955yNTo4GXGsukfTYKEBUvBJ8c9XTM9uFacuTKKkEE4kFdChxVFSsm8uqapqEJFfR",
  "key45": "L71vJtDW5s4y3ykMWNtdV4orqScv87wn5zXk713MJHmwGVRzcw58ZHpdYZqj21aRXH85WTCGLwjV9yEvAaAti8J"
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
