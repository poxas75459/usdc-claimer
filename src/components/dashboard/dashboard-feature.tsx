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
    "2eFZMmcRLHUpbmBGgpPUojSca68YyukoEc1c2fxTmyH8wuvv7Ye3E2dgqHeRD2QTdxR3bSHrvW6c9ztiqLp6KUqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xhHyctXf3piBhSu3ePzemuK6iaQtTP1pmKvzmjREY4neooXKMaBZnz6S3Mnar8o26NotaQmhGH8izEMC5km5kTP",
  "key1": "7RYzfqDtfS2s7zDcPfa9RyEL2bCnCuM6nRJ2JBu2VrQZ4eZPsj5mZKwJWfunqqi7aymZmkw6k1cqHoQdpY4BDni",
  "key2": "5nsAY5KH3CkcpRtTagrRntLsYC3c6Sj3Uz12LDwxDmm6mShBodcridkJtkLXYWXJEaNp7HqryjX4B2nXN5ZLqY55",
  "key3": "3ZRbwtcGJyb6JXWyceSaGMPHvmTT5SDgfRDfZRomV2rAWEEXj1TFESfhh57nLPYnG62U44rLzqJ2uAMAjiu6ZP5W",
  "key4": "4SPfLb5Pc8Yc265uV75o9F4MaCutcBDMPeyD1Qa2Pqt9LkfBPwEC8FhXDJ44UKZMV2YRbw24fYooNFFrBRnaphPF",
  "key5": "GQKpUDHX4DQr6T4TtVTDPWL9wLq3ATA9ivTR4mxG21Br1kWCX1xCcYhaG6DiBc6hCsqhWBZeXwAkiwAcgVfCC7e",
  "key6": "38FoETK1deuhNMKGVkk5SFFhvGuzwuvE4cJ3s4utZo4vE6rzCamw9R2DSowUvwRZMPTGM37yxqySozHSSvXKAWss",
  "key7": "2M3tcqPhmGYYm8Qo95TyYZRb9trpm6eXdRuApcqTcdLnmxShUgfE8Rz5re2Dmp3pFLoLkgNUpSvVkQJGkpJwx9qm",
  "key8": "5NMcFvvVshpP7WJWMeXSduvgYnhJozMkFuEFAt9Si4YJJVYgi8v1yrZwzq3VJFFTPaPSSrcBYaNAwYxK7zZZ6rhL",
  "key9": "56DaaAGN8xSYK8vgujVFwUHRdmFwd3gpJfJuwWaMfogops2t3y8NCvCpVWZXzYuh7e4YUFm6z2gqcMjpTtmVVR1w",
  "key10": "3prcHYhpwEx9F9aibjUBXAntYaek5zPGN6F4u1iJvkKtMh1H8XGLo93W7vowhPwjttTtjLCaa3bv9X4egp1p2UMH",
  "key11": "bXTiznpMar2Qoo4mbBqhFf9qyH7y6sLVrQa4GdnhZi2AgZqChS56kynBdCwBj3w5tcWrtEWbddSTe6nQrK26EK3",
  "key12": "3yTkhXTy9bMDks7UmqGpPmEDNSAmccZe5xud8wYWomQK3BmeCb1XoK3PoTuihmu4KauT1dFFvXE1vv3NJccwd8t6",
  "key13": "JLuNpaoKa2LEBoJfLJE587T4jePSTqJntGXNFeQ1dggTpEL6y2YtKHrpFQzy7ijvG4LmZUpwaGzJ63E77J8c3gv",
  "key14": "9U8ZBnR1jxkWKuervfk4R4v9DXnWgity8iDwbhzknbM1wBmj52A9Y53yfZi6spEn7qkPat6pQRzNdrFnq2bb4Xu",
  "key15": "3eTk2rwp3yfyYSmME2f25g9BbaWeT2RdjVTXZiyzZo7sYiSXKDkG5yVTc8TiuYxGEeZA8B2Fs6CK57b5ayktTf3x",
  "key16": "3n3xziqEhKGvmjnfHCvWFvKzX8P7pUBdZucmVcha9PqCK84oWj2qsB2FqsS9YxxAnUZwKhyE5gU5VrQKhvbx3H5X",
  "key17": "4rnu5i7uAox8NL11mcVQadDync577svtGz9jzDDwyMo47Sns6Jg5rJ6NEPfW6zohY1ZV1VMrycmwH4FvdbkdGBv1",
  "key18": "5zxyQWmfYuy94oYPqZ3cJkUNoTtom2wgpAqMN7fTrFRN3Me3Cs6f8xWqM4z2JVSCm3BaXjvt45sEjgBZwtjUs4W1",
  "key19": "3iTyA8GXdobEvtJqh5QnuwNq3k3KDSDDQsrrruahQGA9Vpy2PgvfQDZwiYwxQHFLwxhqKV228ohvh6pZC15Pgspz",
  "key20": "53JiWJ3BDRdiRrZtMGa9sbBDJxuYK7mdpctnxPk9CWeYaxS5ari7ZieGoc9Usr2GopWvW1SjmyfTCB9U19HxhGC2",
  "key21": "2ueWtszzmXoD1vyuYu81TkFQW45vrPCCvTRDAKU36LEizYqFhAJxXbXuqwg27V5U4qAuMRmumKa9qtHeBnW8Z2ne",
  "key22": "38ixEy1bAoJFiM6LrfxJnvy6xdEF2Ta4KrJBpZkH7zAqDRKpEEjTZgrBDcp8GKUi7oT4EmdtYDgQdvjEFm9ksgv4",
  "key23": "2yTLBoHGQCBBMDruEi3QVhjTgnTBoUAosNtLwFgQdiL3iNumYgnS4WWdwmV9Ee5sEUwqmgA1LFyvgmHASvAmrFme",
  "key24": "pecyFomCp4jYC5HZGwNxZtyDNqFta6KYpQ6kGabkFgCYdgoZ2kd8RSYKTpysyvV7ZbsboX6i8RZTZ1ZKTvdq7eE",
  "key25": "eSfwXjSWuQov4mznvQ22YoBU9bWqsD8ixeVQyzjhHRNuJkJeqRiwWzAYq9DQz8GkE1hF3Zp62u3WfRsbaTtPiNu",
  "key26": "5jh2Ni1g21vWDAWJGko99DVuc3cbGhA3QKB3xLmC6mRHBygUJrpcSysQuaZAfXcqniumfTgKXd48PMxEyxrPs4R9",
  "key27": "5jhtM2F3SFtyBsEqM6kjiZkE54UwJuWrg1JRFXN1B3vcdSQjAw8iRb2y8MKSAxoJCvDNK6BvyUyqbP48p5P44KvA",
  "key28": "63N6KKwzYEy2q7atANgAk6d8RqZsJw5EDTyHTF2JUHtqyhBEhtRzoDssp6VG9CieQNhvN6AGMHUAueCorgA3baN3",
  "key29": "3W8tc6vBkwtrGC28RJUKeY6jDsrBzykPmfXaf2N1FMJc5FnEork2LKrUVJusRoGHxk6YUU3kENT2imHbStckjWbM",
  "key30": "rrP8Xu8qErLHUDJtyLN5oRYTH6bYAi24NQfizqe4KRbpW5wb2BXq2ocveoYQg6S9E5jNdg99RsqZU9Xe9TMJweY",
  "key31": "4dWzPLWN5HKVcrdBoMkZziRby5Wbt1XgnESRotEro2TQ35Johsy1rcFmQDrv9BHF9MnwADhPzfSpZARR1FULz1yM",
  "key32": "EAkttDQuyPo4bESCQXA8FrhzHmzFAPiAXG3RMBeYfo3yXm1CFU6eHMQbdci7bh3KdbaHs4JkN42pte2WZdf7u8H",
  "key33": "4HunpiPsDzuEyeFaTmqNSYUqmqTnWqFDMBciU9L2zeGYishN4gGQXq9QVf1tsrSBdP2g9qMw6XmhbGV2FCZAdZn"
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
