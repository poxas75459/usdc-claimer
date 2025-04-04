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
    "M14PZquN9kjMu8QY7A6xUmDEY7HHxvJ6Tx4dnT7pe1FssAhPVAMgJg3rrfZxLScZfySGXZavWfRFap4SAKZm2ya"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57DRL3aFbrLZhzTq3Ciwd29DkqyhwcCbtgWgV2qZHyQEWh3kiPJVK4pP6hyqrvbDhJZrSK5RrW8tB1gcrYiQCZH7",
  "key1": "2BLXfKyBbPFNNTzwedNAV5SEtDpAfTmMWYVZ3FcUNQ1pD8TK1RyJZvaLfUWSRFZWyCkNB5of2PTkjfv9T6AQjccU",
  "key2": "3tHtoE7bKYW25o9ovaS2zEC5bir34TZTeQ1vZmb4yvtZiV5a2VdL6Ng5rhxUaZ6u9PNQXoaxDuL5i5iaKrCd3uDU",
  "key3": "4BM7oxDfdEgHGfLJDwtkASPtBgHSM5hfYMBcLNkc8GmhcM5q4DYa5bZqaYPWm5A4ze7CiurjcL5x21SaAUDMtdFb",
  "key4": "54U892km5ici25wrXfsbycomEP34FbZQa8VwSnpiyYBmQfJF8bxbesChiV7cpqWDzERSJsh1kcSmcmqDYTEoqsUm",
  "key5": "KW2MA3rZpZBhZNswDtDMpibz1FQehrCUhv8ZMWffRVpQQWrkLk5Y3tSpDf1fqN7g9XTAW2SDMqwUvZNx24Kq28r",
  "key6": "2hGcBhKeaUaoZkjFaNuEtrA1vqQxTyRTvSJqGfPUxF7U7bFBZvBVPJf5KGH8dWCdPJHu8VFtdcfjwhikkqmU8LVu",
  "key7": "j7pAH1PqhwJhnaXWGwmKdH7Cvaf5d1sVdgJQsLReHmTvKFgGJ3CZFFPYwnyVeYg4xriT8xsPihBhhhG6aVcyWWY",
  "key8": "3bpZH5VYpjZsvtmQGUVcb5kkKNWjYLJto9FQwadepXJr3QpUFyCrVoTJtvsjjFR5vZAZp2kgnB9tBZh23XhNYpxP",
  "key9": "5WYQnjg34tpHaQNA21E648QyoFBteYQ8xHSk15e3SJyoTeHdpsCR4BabFyNUKanFGaun2QSoZ8KZMjmfs4igEded",
  "key10": "5GEJfGqr94LuRhVmRvz2WvvcqeSUKCEb8WjengeCKCMBSFAmFasDa3KTNo65ZiwkYgTkJAJ2BwAGP89ixEwWW6u6",
  "key11": "aGhFcUto7k9AVhwZNiDPFUAno7KUEj66emLNzNKBoAFjPMXtZXApyX5RsSLqbUF6k8FsHdFEMqHEfjJNbd5w4X9",
  "key12": "2VXtauFf4gZ4KEDf5R3uXivYdm4n6HCXsLuEQszzLLCZf6iNhEu1KGCTUPiTGsJgNyUYP6YVyyGu8wN6bKWiXxYs",
  "key13": "2m24AAj8DaZwVb314ws29gkrKBhhF7NF4bj7toBFsSLefHyxMSgofHt3s5ARKAy1xXqX9rnjpDZk1oPusZCjCPmM",
  "key14": "2HbyReicwxM4mc3pjQMpBjN8mMTKnnoRxMZE9tupePkaDBZVK67YtLVuobPWsmTjLcm8CZR6ieEKGZ2Xo6fRSHAH",
  "key15": "5jmmNsx4LxEfvto1B31qq8t6M3xibn4GeoM3uEDW5uVXnSCYHYa4SUnxd52oVCdtCezPiXqZG1GtafEKWxekumHU",
  "key16": "3A39upPdpcByoMmPPq4tKApKxhig3LLe8Kfh4Y2TuyNV9UsxrvZ2ti5xDs9GtXvCMSAXHgbnB3ZdqbXQki8zMHz7",
  "key17": "4ZqhLp3hcQD2WTfdbbvkRuH2Tk5MSCCucQqjJGfZZiv69RYS18zCokfLqQbCQcWSP1k5x2bwdRbKWwYMaodh1iSt",
  "key18": "XrDnKoaqyeacmHYH8DHW3HW6MnC3tYAJyBYUiRRUiReLgP9Fy4b3GvcSzqaX1478gnS8e2LedPJHr9U7ZRp5HTb",
  "key19": "4hCrMRDWcCfzQRMeX7a6PBkSB5Jz6sHF4tYYMsEtC28FAWUB2gqL96YpKGmoDPxaAKiwaizJ2jvMiqX6tT1SjCAh",
  "key20": "JSUi2uf5LtH1D3EjdMLvhLzeveX5EMc6CukNtgokn4iKnfJAKa8bRqbwZtL3hfdPVtLD2PTR27gfKwJ4o83hUvm",
  "key21": "5PPyqZUf3rCff71yPnXQAYffWgoZq8ewqCeQ8mbMmL3FYm9uCdvBFtzrHBLDkQgYF2SZX9wreo74EUD5KkpfVdk4",
  "key22": "2U6ibE8D8GzRBs94pnw1H6W4scug9Qi8piy6xC3edt1uTVLXNmvxf6MpghygkC5ut3ZevTpDEj8os6mx7fXybvT8",
  "key23": "S3tGDfgxBpeVHmm9fw3DGYH94YiPF7K41gU5YDYUCbAeZ8nzVFECio6sLViwAvSUmyUVT5ZVHcN7dyFp98EAZSa",
  "key24": "3GQ5KazYuD3d7hQrrTYShfwc8bKZTtutyZ9ZUbe61No2nMiS6N2PP1DsPDGNHWJyvAPCmKVQS3hPkm5HmaGvHDMP",
  "key25": "o3b27RLjMb8pUitVD7sfjAtuPnpUsMgqCx85hhGQ4kd74BsGXw25iSQc8NPo4nWhSa6FseUao8Hp9j2d8PDgYey",
  "key26": "5gtQAScgDrvTFzPk9UaXNk9kamGd3m9iKeXxL9gHS7bDariPAtZsAVKDKqwLAH8z9QcyapzvadxRfMK6cRY3a2Kz",
  "key27": "mbqEDrFQEfMSLNJbF9bdcsGV4xhGsK9aY8MZxHLycuBLRc7nQZT2q8SG8nKepMb3NVACnDXnChVLkmFdhNfEhRz",
  "key28": "4EViAmUnNuNJsQojBQUG4F51Zv3cBHCWNks4XXrbtKmbokxhN1VS8npym8d1tQ3PPWhzheeGb9wWW9xcszwy3oBJ",
  "key29": "44cEu9e2nW3tfvmg9FUm9yrCG6kMjtbXv4asrFcj8pUB32bjChgj2QQwymoKkQDrjY8BgbTfSrFxzX3gy8vatTbv",
  "key30": "2cXQsgwfUqRpUUbfN3oggNpfCCUtNxs8NAoiqWEqVM1hFhLzYki98jZDr6VDwseTJ91zT9Ed9RybNiz91fWCn2jr"
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
