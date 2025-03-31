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
    "2V7C9tzHVigu7j5J2XPsz85azs4TsdVFdUo3cxmMbNdGR9FyytPZYBQxYH9yp6vT82LGrzP58At5NeP9AkRwhTL3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hrrGDKxG6Z5nmLXwRXBUfdNvE58JZT45zbwJGbAiEJYhXdmKKNhbgkmVDHWH1c71iWaNeZB6jhq1p1zGKdowAs3",
  "key1": "2GUyemWts9FKaBaZnTC5pKtLhUnR9JVTREBnv8NJvJto827HKSZBzNWg3N6h9EoFJ91z1oxwUi8NNzhVPmyPA1qG",
  "key2": "2cpmvzbagQxyhU4UMs8SnvBBCDWL84ZnHv6YzWw8R8xAPXS4JxTDMApL87GWM5iXwM9abFiL9S3qJ14zDxCTXj2m",
  "key3": "62cVnLgnrtdaJymi1PpwCkCopLS1wTxFzKJztkXa3FNXcX9zb4Kty4UNL9AKMfbnussVp6yaTmSFFpzSktKq3F1z",
  "key4": "4oy2qZJB2XdheCKyUr49siTFjDv1qakEzxyw23rzpckS8GG71F7EPD6zizTEQZw1VtKRQFy7U9DpndZuo4hSPmEV",
  "key5": "39Fnc3zZ2rVJip4eSDZxSyvq7cDLrfViWhNzb4v2YYBkYn7uVNVWFBHgnw4rA1jtcrbyM3CSpLJFf4ebr2WVpKYS",
  "key6": "3EqNAVYEET3fGa9QhDEPvpp1qkpGfw85DhhFuKk3U12Vb9g8cptPzz8DKZB51UEkTM5gApwaKSspsVZf9ZVYdPC2",
  "key7": "xDH4VhToDCfk7CELAm36nf9PX4RKaXabswAAhq96f65WXLvZBvBjUWjiJ3QMVTfLrFDcNYYsLfBsW8YxP6LKH31",
  "key8": "4rpzzAQoTEP4QtJBeyZZp3GXXNFpd5yEdnWXbH7TTmU6nE7uZa8fwahZY4QwCQMJ7oz7xh3x6ud5nMECmnxbUs8w",
  "key9": "aeQG9vE1XU7BBPwXLf1MCMhrkwtKFdpa9oYSKaDqD4CCgf7eecRYCP48526Sf5gVTQF7oiYzm6gBiR4JDUhA5j4",
  "key10": "4hhGAxqtg55feykafzrzAH2iiVgYMVpy3MCAziJTSoYDTpfHzB1swGTFy4cB9uNNbM8Eoc3u5VJUehysqxFRAGDA",
  "key11": "4uvSGaXnLG7Qo5KpD8K8ZfuVnL4c7q2ty5KXRc247kksoZodPF1Ko1hGV8swQWCXVuVUrwWr1azVx4oHKdJoqxfg",
  "key12": "4ssqzb1FBZCdckeprYSiFWPCGRUwdf1k5R2LSVCESedunvXtsnbhVjyDmG8WVpk3WDVb7WWzgohYRRFiL4zEqnNZ",
  "key13": "388cyhTXDEzT3rRBHPuSACYXvC3S773YWfzhD6jQEjvL5HQ88LwD7KPohk92KCawpc8AgV9C4wRYpuVB8aRXcMd5",
  "key14": "4qTzKDEpGw51t1JaH4DLmvmy8cEBhF1LDr5oZ2kgovzfvpf1d6QFnmAZChrHgQLBhHLMLJgJLimtB1m7tqbr1spw",
  "key15": "2gRz5sV3ykno7QUviM1PzKHnRqChU9Qxz469NDT14KscC2Uw5z8vBt7TS87dowoteb6bE2hrpbYLC9PXTbQt75Bb",
  "key16": "n79xsXvXBtxb8BVWWXZwshHqhkEkUBEKfU7xhdNXFECyHekFfwb3iaR3oaheq9x7ftpjqF7KnEF8WieQzMmHpU5",
  "key17": "2rNowLTYS9aYriW4rzcJ3DgcBB6V88i1EJeFaqCZu17eJ33vaLUmtGx8bhBZEpxQhjgDJjqxfVpMNftkKfmPkZeb",
  "key18": "3UdjyX4FnEy8uSTafjcTXaf6mDSRLGMFkAL1Atf3xwenctBzucU4SdPohgtWHSNbcUYBBqMhLLRwC5uH39Pppv6C",
  "key19": "4QPwRW8qb2naGe4EzNrgQaZkCnv8DR6YFnAH1qUbLCE1adYpEL6kyg6oT5j47TrC5npArJUgkf7rHYQ99VwRbnxY",
  "key20": "5KHJnDQuk9RPjh23d8mo1jPsZRNBJubS5TdG95fx7bFJRadStFd9yGWaJK96gakCjFswaqAvRycZhCi9F9Asxve2",
  "key21": "2rDBsa13CRnVfRVGM4HM5rAxpdDdtKEkcPAHGGdG6V4daj936BgsKYkXNczTTp8RuAyz9kzXzUruM3AshsZrRtG7",
  "key22": "3TSa1tPvARFztQaokmK7BnChG9Pu1knhdZZEN6C1BtZaDcNb9pDwwVyojKzRcvEkh371AQ9PcWGCLL8TWUoMHgxk",
  "key23": "5PgD8FPW4cA2ZFbTCxmEEr4jgxXtBN4pxmJw1Je4dnDD4JiCztWgX6dwVBM9EjHkMkEVfPEktF4aFGXdhUmChoQf",
  "key24": "5gCLdGB8P4UCVGmqQDtUAnHLnqzCAphroCNy7TDaehnYAd9NbKg7SBz4rAPsJ7hxCBKU6QZ3f92M5StGaCJVN3NF",
  "key25": "4AkZueHgH2pFjZqdeqexmoxYFJ7tkE99RBQPEjZ3qRDD4UWJzQYaMyAK5QggDAgdfBJ2gV1kR5YbxsjGyRUssjRL",
  "key26": "3QpuDQrosE2x91MAZZAKc6XUix1MXSUBZAG7XbMnbRZU37pvj2Lm48JstfHThvFdMHB4deK8kXrtbtvs1NyBjLdw",
  "key27": "5w5YjMWKiFRKRPRbfvqemt1XtPh17mx1LHhnRyorEwjRU45awsfGAWNpBrmgQDY5prH3RTTEBioxVDkRK1y7qDhv",
  "key28": "48Biz1gF6yVH785Ppv8sjCJXBkyuYFJMTMdHxW1b1zP6q5UFkULXqNG37PAa1za4WTWxLLL4Y7ouYZpE6KQwuaif",
  "key29": "mFsAzPAjjb5NXPmpvG9DjiCSePfvqRDW7JjjWEnxwm4dNtbeyShckTxpiyS7TYseZ1WkdnAzRhNEMPS7JYWWGUM",
  "key30": "5h1aP4dDr1vPVv5REDppJCaDyqJpAT1mYvF5hrdqXuecvB6c7ZketUPQ9hRHeBkMsLMhSVijeCHsSTptEjHJhKX9",
  "key31": "64hPfSJdarn5MGWg1d31XmyktWQyqXvpJJWz8Dmx4K5rhjspyqG8hJmobP2xfCWndM9qJXxwe2CFfxz8q49Le81c",
  "key32": "43aAZ1tSbamovjXtH2KrMQ1cwWu9YUCzFkGfYgxhCcbU42iKJtn2q7EMMDh59J7sDQfaNEkgKxKgVgQV4or5SjeK",
  "key33": "38vptnPzKPMLWaJKz58BP9JmMdr6RDDSqYt7kz7aEzqiWEDVHUrdmmDd3f2qwvDLcSqF3LdVyUMJCZPtAU3AZruw",
  "key34": "2xGatN5mnvpF4cKRPMUTtnf6iptLWEobe2Ck8gLGknAggBUDnyi1gmf3p5r4PZ3w57adc8i2HjPiH84AHNn6v6i3",
  "key35": "37Vq52NcZVTUL1pYpXfibneBVAqhPVAurDaYXs843uRhiBVA1KCbcMzzdRNRckYQK1HGY3VpBkzTKDR6f85fDi44",
  "key36": "56kpsg8SRYa7ZueTMA4n3URtoQKcrUHuTCi22tsAcUaYVTPRpY9P79L2q3XMVBZCwB1R2YvAcVkzZH7jKeUXprEn"
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
