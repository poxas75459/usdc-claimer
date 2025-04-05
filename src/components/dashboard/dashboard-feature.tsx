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
    "3h6rPinyU57iNbp9DNrdTgreQ8YfdsHL3xy9UbxjYH4LfzB6bWGDy1RXjQ1MwWbVJkKEYT8oVQskfLxK2rV1VUy3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dxrRoDyp2vjtoM2XuWexcioZSPs2hqDfANK6mLLaaYC3iNXrmFtHZ8RKPELEhLLmXkPVxSwP9AbtN2zLa39d5My",
  "key1": "5wg5A3F1ZWc9eWrRgMKRMU598cvq8AfS9dSdHtyF584mJpJPoavw3G4riYRXQqSEQ1baNdqU1aVsLggPGjnL4zkh",
  "key2": "57GLg3uy6KCWpCGaTr5rCzpaZT1tE1b12V3VzWdv6wAHT7e1ctBb52Y2kWiogK3nn83K6ea1QdNdCsZZJqY45En7",
  "key3": "3hnXBV3t9FF9jHp7QQm1xULmnQ94x1FBzawXT2sMNaPqZmmAv2sLHdTLwqCD7eNpNLJJZezCSDFLuZEb5D5j8Sm1",
  "key4": "5rg5f8cwEZYGQiJ7BJbyWFoVPHoKmW5p4PFSMFsJitoaaAsB3FhePfpzmhtxnq9DmUvovxk15ZEBEmsr7n2qgk31",
  "key5": "61VLCgv69Ucjpq5yZPawfeL3hNY8WkCkkGnop79kyYuv2r8vfeGqtNHVegNuK4ifDgeksDdRrUHWkxqdeeiqJCDD",
  "key6": "2VJZwBoAHyf9NYGMAkrRnABiPRmLvKuJ3V6ez4BFC4mHTcTxDWV6zNgsXbhWaHNVyiw46aEeRv8wXJZzPQC4qURh",
  "key7": "42Dcn6hkcciZmtjDMxoaH764b97axUcxYin7LqqUgE9oHdsiirVFvdA5b59fM1qctWbddCojkRuLj3viSCz8rpbV",
  "key8": "F16XtK71BdqC2Tze4ewGvzpNyf6LSZ8gC2JfkuaLW22kMJB2XtKxKweFR4HkA3eBno9fT9X9F3ZUrbLU5ftgRRC",
  "key9": "2bfodQCsNwVXcCzswQpNYdA34geYbsxNo7sWbgcRw6mWawEWvsVBHA6mUeqWAy5hPFs2sqETUN6VxFvejXA687Jh",
  "key10": "5LRBFiE8b2L4tTAqq3QwoyTiYAt7MWGzyHK5NJGYkZJVMSQZ4HucHZeyBNw4quCGom5FwXVPMjsYgycSHKB9qasU",
  "key11": "5vDi5kTacjpRGiBfwTPE5cUUAjUfP2859vJ1yJ7ucr3294APfen9Efb41wiBuzhESmppgatgGYSixckANXy5hB5z",
  "key12": "2x91ELuF7oxnJwVa4xkPpbaDysSNs4jC54Y1MbmdLgEV74wHuoin4hfY9LZdKPDa24hJVxJzvNdsAZjcSYmrXjK4",
  "key13": "5ruzzsicNdSFAmz4w7u3Rk6gQ4hKsSwuYF9tDJTootruiuaX1sA3DBpbSHiYQhZsHuZS4F2czzoD9c3nGJuQTx14",
  "key14": "45X54552DgeKY1xSeFpkjqLn6shEGHCwYpqtFUrWyr6JHUd6PqXSVWBGydK18Q4kqFxk47VZvMjx3aJvjS27uBYX",
  "key15": "4xQ4pbi1mj4oQvZaNxF2WWxdv1ZLa8ygKPsgSEpCKavq5XiJwX1FhaT8Dx5NHHG3z2J5wMq5u1WK7d3Dq2iqKHqC",
  "key16": "2D9sF9dzfSsjFd1v4QjAaEVvon6ggVC2RUQio18ErzWupBNGNY6mQUv9JmFSsynJ4WrTDKCgd88K4jg8RGwbCmRU",
  "key17": "5berfmqc5fW5KDzVCYqPhE5xPUS9fKfyHxoGxpEcu7pbEqCstYfySd3avHvi9gfL21gS3og8DwVtneRLdg8yWih3",
  "key18": "kA1sjyiGYjop354vWostPTeVhM6vZCPXEK5J5gomYgpeGLbA3skY52nsudiAV7en37mtwdy4rAyvp3K6zAQAt6G",
  "key19": "3qWrQnuFfkrChyNnaq2V2FbaDGG7vbhkT1o1jRyc44q2Zm6tNgcVPk9b8YYj46d5zcShK2tppjNuxNt9Eb8H3mtQ",
  "key20": "3TEBYX8Cy7RqqZ64zN5uZmBECmuPwUK8NWy9mdNxuwrpr5UscFkskYfUz6kvppr76UC3dWPCLP91bjYQf1PdpRoD",
  "key21": "3HRStzhKoRXXRANfV5kspgALxKaBiFUrgL1tSwLLiV71xrqPkqfDJTrWgHLpA9JwMoBhL2SG6q69mD4P2q2QVCA",
  "key22": "Q54zquriqhAjgCStPk6WKgLugiu8tdzdjPe2nCN5BK83p4DYYzg4cqFBscPRDqcssMwc5GNnkYmXg4gKsTsuSbF",
  "key23": "2px2YYQigrvb9n8qn5k3eE1nLvi6xbvBWxr2sHo4bW83WUqfBF7AJNtAM3zDdPCDAddS62q14fsWrVeJVbrzoCj3",
  "key24": "4XrQuZbrLh1g5CVDppxLaCVeywB4WNHTk1bkEXSz52PS6gSiZbq7bYHoDahNYugKBmg4mqYpotTjQXhr4c2FpZXV",
  "key25": "ErVmtsXpVvzkGM9kCiyTR7MAy2HHZrQC1gewjifxGBzbBdRLTAtsa3EjWNwmA5nqLLmFTKzj8kUytmJZedfKcNc",
  "key26": "R8KNLUNuNxJk8KPEhUPfTeFsm49QjHBE6ASdc4oLB8NFPhAXZ9cPD8HuW3woY64V23WqB5ACDbZ6hQxvzFT9xEZ",
  "key27": "5Er2m6ZW9ALoK4tGeGJdqYbfAeKUDp2rE6NxzJbVJMSKeuepDeaNPgYtXPH2hWgARA47a62VHMxWWBBVqUgXdJvb",
  "key28": "4pKZFdAKYzefYNeRJcCN96o1fWjGmPCeFz1vxYrJGbq1LpHwAsw2QjmXBpYjwi8ZDfxvEA6YuTzgfvh15mFwHBw2",
  "key29": "3wWrAr5hK46vp2oGS28NszG6cVbeRM2cMyxz8UFpiDueN9BzouDwk1JmeNLjzQ3RuBshj28wQQgEYVSPRjkMRxN6",
  "key30": "3xS5QR4zixRXqjqUNWaUKERZzpnc9ZQ2qQ9bGs3TNTJ7dCg4FuiPhjGHWupM6G5Hnq1EWYnPAqAbcrF48dpJAYxj",
  "key31": "3TTF8vLhd9dEwtge2k9fNa5K9wUNBagzvugWHMbNHW8E53SrVL8nubvn3yrY3znjvLxj2s4Pf4sca47gA7GmJzJ3",
  "key32": "5KL9CnJxmn1ZxRZ15eFAnuCpdtRzqjJzMfkVRhrSzxKJrNszRJdjFqoEiPLxLFQ3vYh199DHts7c7tqT1AmVtqCr",
  "key33": "61hqY91ginYDUYzCdekSNZ7fjTAG6UZ5sb7UozdnzjA8T1zJkQQG2vzUkwpm4HTjJf1siJPGJyH6XVMtLFs7EXWj",
  "key34": "izgKzdRuektSx6HMV2587JYLa3KrxaGtJitMHoLMAMESWew8SuAcwLb8HDTzHXcwtxhD7RaLkeuuXQJFdnerZuA",
  "key35": "3DqmKJRLDRwsBVFwZfvZE59unpRWeGmgSLsvZmJVYaNPkUSDQs1J6vRfNGamDYWJWC9BbUHvJ6k2bvuRLH5vZs5X",
  "key36": "3CniKXuAtHNgpEHfSyWPAkEuJrEt6QKuVQ4bg1J3wTRZEkpQLeQ9jjV7NMY7iwPo5xEmrTqLSwbjYU3HC5myGE6Y",
  "key37": "4fMpfKaKQCvE4CK16s4dcJTKV2ZC32joNMxJkczBttuKvNmQxHLoUgwUvsgP5vKXG3C1K26n7De2ShFX1Ko7ottu"
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
