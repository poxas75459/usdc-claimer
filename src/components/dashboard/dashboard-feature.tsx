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
    "2ox7TauY1FwBspnxuXZSgmH9RBZiATtqQCWc1cexQvSqDzEHG5oQwEeNhrGPidRb53Qm8jMzKymSc2ExGW8k9btY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2e3NgAMNLqY7cKt6NZsmSJGVmaoxnpheJqje62EFLEVwB1SCAuaEgcUCZapzPUsfouaxz63xnE2ucpVi2w5Dx7od",
  "key1": "WW8z4qPXenFzD6h92iuSdrgFsG2xEKtEeBpXiqnPK3TA6cAAbDGGNZuUTgHFTqCLXzTf7fkiiWSdx5tumkELi6B",
  "key2": "3CRhhhcjhSRkiU2PCttw4WtV5oNDCFkRjDq4BxckwhAFRjanY9a3uDhWdNaa11CqGmqbsqba1oN3h6Rw5Nz1Sgpe",
  "key3": "38rwdg8ao42Qav7wzEbi36uVHyHaNML8NoT4WHgATXbrn91ZdRHDF87yoHRu2DnPfgt8AUD1pXYhLo5qMgm1EWr8",
  "key4": "27DPw7T126WftV8xrWq59KkMw3iXQqXdakNd6D4p6UB5gU83JfmjrbZtFCbHdsGJNtLMFAb2m52U5pxisCZbWPTy",
  "key5": "2Hkrnx35RJVX8ttPWiy5beUxjYfj6icq4LHsPxdAVmUwAfCKpvRucb8tcQPtC4KLfemQBtTTK2EMWhWTiCCaYpia",
  "key6": "44t9K6dh8vjVXZmN8DqQxkMb2gcc3cuHZ2baBm4sUgQcxgatFUm6euY4yArKHcXmZmefGPvKTzJae3Jjfeyo7uHf",
  "key7": "2T5U7e5AK9D8gBrAPL1yRp6mUKukrSTvMoToo5bpK5KEE5b8Zsfx9vTbhaXdyxr2UPR6ze9HVnKbmb5uLHMi6Awe",
  "key8": "2uosKoeU7SFQvckRTWu6s5SYM19eNicKtrxK4p42CN13UPxpoVSdSkCwvCUhTkZmRc5oAbPVMubgtx8vGvWPWVSo",
  "key9": "58MZUv57DAF9oKsrRCFJQtkkqcRDUWELbNV2uceQhZY5sWnX4udqvwQu2EpkigKfzSfSzvZLx65qcd6engLvgY5L",
  "key10": "2JoNb3VQpKaaeotDrihnm278XWJHfwLGMdZaesAD58o9iSuQxLRZdWNXN7wovCtYtNH2pDYEqZjLitv4sRQQiZ9N",
  "key11": "2kYfUJ6oSxcXRP7taYg2hAcYTHjXVEzdnySszBgC9vqHhTYgGQsHGbu7KXoNNTkYGYH83dRxDfxAuJf8cy6LaQfk",
  "key12": "31g5F1GrvFCEtjwtE2GoZcwxyXmsSZpFRwcJW5St6goxLZtTXZzDHzN2R9AV9Lcjs85CqH7dKE5UjSNtG2qwQM5y",
  "key13": "2RP9ZVRvzAiW5hK8WBuTXC6p12afhqYbZcvJNJ9wih9QJYLkhGtsboPzW3Y56yviHbYyWZ58kCERuJ91xEJmhDRv",
  "key14": "541Kgj7TUetozHwXtC3KSqdmG6FL8HzEQ2P8qkSPsXasxdDLLkZjRZbw5BJztTd53fzsbhzPCQ2HktzW89q3xQeN",
  "key15": "64jbfqd2Ai9uibTRQTHygZpeUzB6WZkPA5mNu7cC9QXMdNCak1tyD5psL3hyTQUmPSrZDCZkefhB6XN4bQ1fvYAw",
  "key16": "oK8ZHSjeh1uUtHF2s4kE5UyWYYQ9Pfb4Lejur9oBrmT5cbJ34KbLG9wcoS83Ff7TDik4MMF7jDNiYL8tySaN2b6",
  "key17": "3qrrD7ZZoZNrkQqtgV5HhnwCKs1KabiruQRpEmJ1ATpvDoghbE6f9BVWDngTENhRbR1Lcz8Lky2pkDtVEA5CJDem",
  "key18": "4EL5bjqGGGvW7DemvTPGN4Jm69e3t8PF1zXZH2yjyB3us1sLZPPftgo22EkPjrbis9yC6gvZJDkDpAXyjbbF6LXU",
  "key19": "5okFK7xRRFkRNfMws5pSUUX9fjurQmC6bhqfQeS9x9dS946VgULUYZjegdTooQGkLJr7PUMwZiJ2Q6Cd41yjtivB",
  "key20": "5Wdz9xu9GRUkU1ho6xobJNdzHhRsyv4yuyoCotxXW67RQbGfGGQ8ko9KAPCXsGTj93TBuaUwxzutFyD4gyn3nAnm",
  "key21": "dmYhsTo2ZNJRJe1oKTvrdcJm9u26FNAEg2G4nb1DnZDvFQS2dGBLo6SAGtv9nWr9ZYrAABAe1EMmZ3rUAQG8WnD",
  "key22": "26XZT6hCSagScGfyhJXPa9JkMkPzCnxDoVZsQE7YWnaz1E8upjQithPmgmLDQ4pALe9MC2oLoDkbGpd66E1vqQog",
  "key23": "5YZPKG4QakeBqJnk481K7x89ppceUTSNrwP6bo6w138KDdm13Jej8GrJEJEUPo9hGmpEkTM5KktVob1GBRaJGYRG",
  "key24": "21Jdkix91QWrkiHqLBDthVpkHpvixcbe38aszfw4mT4AJbyThUKaFq1dU5CMRdE1Yxn2mxrUPtVCKoNzYVERxyNx",
  "key25": "2ym8ah3bueJFQxM5Vcx93NvtyYFPyFNbdiigf5sHgVnF8fWjmkrw9epstCqXrSVUJ2JYBqT1jL7eoheivTgk7AL6",
  "key26": "Gymzm1WG4AU77S8iacMVJF2PEpGNtxxnFoUyWyu6vRTQSdjz3oJ68DT1rN5LbNgLWrVXAeVK7vSQqcqQW9byZGZ",
  "key27": "LwcxjP4aWq8fpgxf9t9qARHvU2bQFh6YMqs7eJuYovy9nBAYkdKYUNAqRpcVFjA5u6WywdhrZPVbkGvzmGq6sz1",
  "key28": "4qZYwn24vA5Xmj7h13VQmc7zJqqdJ9Q5zBhN5pk6dLN1kSUvCCx7XGN6Jte4mDxskKdMSnpBvYfabe7x3wFrjXft",
  "key29": "4wvM1pvRvSPycXGELkgDVtB4W6XrvJXRHvuyjxCj13kZAM8tNBLoAoL9JjTYc8KiVmznnUJgBY8BeMHqSNtihNTc",
  "key30": "39EigUpCCDBLtQuFvz9VqQPYPLgWab3nNPoTKZ8MPTxQ18XCqJYcVFXRLYnBz8Y9MireekeLD3vNWJJVvmXz79Vf"
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
