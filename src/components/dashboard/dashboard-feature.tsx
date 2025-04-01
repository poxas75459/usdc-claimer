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
    "1UiZG3XsjParWeWKQg1cXZkL1yJ3YRos9u3dwgnnFGUwkZBzbbbGGAPiweuBRVL2HrVtWSwUL8ZwoyTGy7Bmarg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MxgwPgsnnvB8bjNHVg5j3RxxoYL6qHauEphdCKc7FjFfnWhatUGk8qQgFW3X1hKV5cYPsyPZWpRCAFkpRti3tzU",
  "key1": "294ef4AAGv37KNhZYbd7eVP1k2LpgTGymCLyHq7TfqZb7a6HtxFMriGEisj1JepVdaxsBnyb3v5JoyLa1n9ydQUA",
  "key2": "MieP73nePt5jRZ4ib4HhYC2ARfeTkFqfs4mTo919TpnxhBAeis4rydgLSppyEg2bSJERb1TZwrYinFeo5t4oWh3",
  "key3": "3sux6anCHkCUdt1hsDmLfDEmxLXKEKSFUbb58UoVTixDvqNkUjBsTccrbRfx4VHyMgn693fZWP5trqT6jc6VLsCe",
  "key4": "48HgshoPGZrpo7Erg6Q6WrAXuByFsvn6GR2M1NmPPg6tWk7xAb9M6ZFgmAMCW7BQoaaBqV2vj7thKcFPouqbUgee",
  "key5": "3sSwPHPzHUoAGYVoDSEfkrtQEYKDQkrbr6uDLUGsDpjbtRcjDTc1CXPAPgLRvmPbPuUfGbgLuvvHktByGScBaQfv",
  "key6": "36NchajVnjJ2SrS2u7Pmpr5YQYWgCsynrXE5qgtSsyXcAMCbLfEm3LrqGvnCKASkGinaHZBvv9PkKDz6rTGX7H2G",
  "key7": "4t6RKyy24JXjUhq3ADDibQQ1HyrjURNVyBYs7S8SoA4dcf7PD6iE9aW2c1tRFNHw9nyfSgXdwdBf9tSwxR5nX77q",
  "key8": "26vzCkfy5Yeym2KTSngJ9sRqPVARvMTfw8yP3LRSgnYzK27b9sdGauWhBrKWoXei7u6geL1WiXnMCtdHXfzRMsZm",
  "key9": "5QbDjrfiKMF2r4gNCsDGVmnV6a36g1adGADtPJ7zfTdqyE6WPnCTXo1BYWKrgizAPMhKn8Baq3aA48kmXpe4BYRa",
  "key10": "3LVkuJwfdTnPMKcGR4hBECwcZaSQNCeAE4zQ2iUy6dBUpkc2vePbs4P7RzDDwEmicqysCkUyJxAkQ3y5FxCvnea1",
  "key11": "4amZZhUNxQDPp5ibQYYC5FY2KS9zUfeaxu76HgsAeRh61qbWrRDKTXbVm4h2BraUoeC6kBdq6P8yKX1kUEfQ4r5J",
  "key12": "31kBHwHCtdSZX8Kof7eBRhBcFo99AVT9r4VXZJYcdwSZerF532qgfXgsaW3C2u98U5ViqH5G9anFDSPJoWnjqUD",
  "key13": "3jdLLQyqDuRwoDWbNm7FUV1277nufsdC8VPsd6cekXxhpPRLtFgk1SCQfdqtqhB3wpxsizTgA6Yo891KS5tKzfZR",
  "key14": "QA4WBtRTubTvku37FRW6grpUFPKHZzDZdwatpkQhvMyUtN4NAyKBPZ7M7QW6uv325FqnTw3AF5u9LUeyxUknrgM",
  "key15": "4TNSdLvpi2Pi1Zqbp7iXw9v2Um5W1LGh3BzsgfQVG2aqDFFDUd3RjHoMsZHcZx3dSMRwnCVYFeDnzNVaBmGZQAGa",
  "key16": "34Codzu9KCs1kze4knsjnDzqc1uCaEwVrW6Yaz4mxkhC1E5TXLPT7eP6RB89wdoMdRD14Uer67kSEtYydpzHStNz",
  "key17": "4hKma1fggTHXUAuQYNGMKykTKAGgYQzjhnxSfEWJSTe9yeCow9skLYcuTP4AnC6LGr1fYRnA19LEerGXfQFpXBHm",
  "key18": "5nXvnwNNd5zk8DTt4J2mvQMNT2vND52MhToLQrpeMMUcD8gDJgMaRZCFEmj619uie3m9sZSQrV4eQeaDCHmkBifE",
  "key19": "SSTZPPF4CwnHWfTLkNtdGzP2ZZvyoDdTuZRAWxQxvNvnCH6VmnnyRZjZwwP7h8WqT8k5XBXM1AviVVC8mdsayeW",
  "key20": "o6CS1CBU5Eu2tLkLWTXMXwkNghwQqE3GR8nFfJVsEHFVWFYW4PyBMS4hu8qSHbS9MxQGv5vtsA1Lmo5x7E553fA",
  "key21": "5P3QmGHYz34ga7fK3xnFqaHvzmM6cbAcWECT5bVdJqDUC8fLDyv2h74kzPkdX95hMaF7dGtDAksRFwFckcD49gLg",
  "key22": "4Kyfnx3g5UqESXr8nY92j6TU1FwUqGn2F2wLjd61TCo1KNKcXU1yGPtVgyeF7zEzWrg5HDjd5pcga7q6JicKYa3W",
  "key23": "XGT89nCDLAncSLmnJhMko6CKNu6UGV2D4vJVKC6kcL5VRKzupbxzYdsYYVMqavtmbUxTKt6Sk48NcfXeMcySUyQ",
  "key24": "3NzFbL3R2rUtpXGF7z3fnVRvEyxn1sPcMGzsXuU2bYepdygjbevopoqGu4SXEGQhDk9fsBfpecyXWjRC4vHHFzQq",
  "key25": "5BzwJ1amRoX1TxhedU712nBhxQ9fYXpnHfNPxAoWiek6aS66kSBjn1RhFfxsG3wpuQxkXrmRhwrM9UnxrULjVz4C",
  "key26": "4nTKPejLcn6ezQoVy4q4tJPmUeJGw9UFJJySWgiZr1jXut2dC48z4irLfmDEWVYxdFHQsZUFHrMqVjs3esv32FRD",
  "key27": "2VMhWXXMXGYmRZHdmzCVC1jtPxr4UbAFhRe6sGN28Lxvtgry1LaTGRpG8nUis5uSsbQpj8LMAdWbvpQkimf3Qv2g",
  "key28": "3opLqsGX2VQEA2gVhJZS5AEqYeRvJhWBw7GsaVZxrv245bBSgtATFugByynGGA6RBK66SUtJoVUqLgzPsYhpBzZ8",
  "key29": "5rfhDgRGD1byey6DpJvPAiBrWZqZy9E79TX49Nxn63jhSvbQpUnCYV1kgfQfANrowhxeRhrm6FE1vqK4W84gKCNp",
  "key30": "525eJbRYwkzredxfEwaJJ1yNHXFdsQPNhJWZZyrr9RCXKrhk36BJaRrconPck6eenF9EDzpQvVjpQxcrLoRFmJH3",
  "key31": "2FQUofi2RJ5XfqEtSAdRTbDxueZ4eyJpDbjNma78Y1zHmLvjuoGgkhCguktHVqm7ECmfEYeDC8CuRPuzeoryEhkA",
  "key32": "4U2NxLoC7YGoZHULjtVNCQHGHd6bqUPdi9vpCZ438nop5oUAHxYBzziKKRN18pH5ieir8W8iCB1j1b37dS2sSwnW",
  "key33": "44hVfuHuR4U8JE3mcSmVhpG9a4TwVknbcD8jjiBjbJ2k9jzkeWANdbsx9qstLg8jStu4JVQpeWp9LJJvzc7rEwxk"
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
