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
    "55Gw225SE9yrau7WT9heuSk7nbFMtnpBFA6yjWShMbmUe6Yzx5XuZXRciXnNj7C9s4pTKTjhN3CfjdapQ4pVkY4n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s3tFKyxdEf49TTZ8vQ1JffH1Q1oz2GEWDYuZdAgBS8TxGLj3gHXrMxQn3HcTJ7QmEeqv4orrBLaw8QqhQYsozsT",
  "key1": "2YiVs3RqvneMopZSWxqHtDoXEXhQADs55T1Nt7hzqfaKpq5MR4KStDDUKW1j68hrsSrRZkDw9Nq8rNw3N1RrWHBu",
  "key2": "4aFzUUAmb8brq5qPzK3pP8kEME3rc3srJhJjCdmdE3oTkwXKqaC8KvHv9q3GgNqXCCbbsvS3ztHGTxf1FnhvNjyQ",
  "key3": "3mBEEyAVJdw93SkN7evc1poEsPcENwgY6Xn9GZzVThr6bkoxBytigezzEDzekMvRD9HvKfAGhYARQFqajvWTXXPu",
  "key4": "254KPif5VvEBAY99y6MDDdrST9koYJmYg1YWTiFT2YpSKiq56igh9Xr9gPKoYnzeok9Ct8EP2ZzsAx9VjVLoP4oK",
  "key5": "49RJskXRe4XrLY6aQMUgefVD4hdHtVgbehvcVrzbeCskQpMzbBjDQhw13KQZxxkGJycXdnxFysbLWX4fqiW3uSRg",
  "key6": "2twoCfCGXjv7Y7tsnP61GUhKAKnndsPT2F4yGpedY1q88sepcURhScF2E8zgH59Uud87CmXDAk4drXFofVZsPP5Z",
  "key7": "sMRQM96U44dnHriCxUpJpQWrAfxMWMY1wbSd7xPCbtfDE6pGiiCpe17JhXC69hsuoX4kBcuKgt3CeCAUxhaERuX",
  "key8": "39M8RZUEYvndkme2RTZbu32NKbqwAfgeGQVMufjfCiwjgpAjoCsqTDthMvsiTKTBJYQswNtCNDDBNRUotcPWaDB",
  "key9": "2SK26Kme7iBbLeqEFdsxA2ti2L77C45dHPZWMJtdK8PLhZq8wH9R1XBtUmirrW2z5SWFNtVbD8CJfEWRMTQDkC8D",
  "key10": "21k9AQR66sw5fNWg2Mnaykx4ZoHc63VJfkt75X6zLa6TwQPb1UfsN6bJMT5ybYmWXC7eLGHzuCd6HpgkMj8FNyva",
  "key11": "5dbhSTxXHaKAvTkE1a8GSjQ7VXzBRPwLWVV5pvv2mkg1XqSeEGNmVZYnW5EcznCGjhxA4dcS1PXVeMVRWo9VUvHG",
  "key12": "3vE8JCwhAESRHvMJw442AZtZ6T3U9GUQcW3CJNtyPA37Ai3poBFB6dt5taURJLdKAMwZkuDYSWcNqAftbXrpgvLn",
  "key13": "xQDkBt4UB1YXxtfyDAGCS5mK3AHcup9FdCJxtzGwzKeMh1hEnptJtJTe3oXtHZDp7egVzxTMMyEX69xokH7otVd",
  "key14": "411bj5tX4nRhfuB1mh5X9bCKMPFBYehahvKzPc4BtQX6skU2qhb7KaagFCj8PCiaNWsU88VWoxTmgfCjdjbUSW8V",
  "key15": "pvSDJqnYc7oCR6Kj3mHDiSqHBWSCp16EihPLCS43n77YSDNgLWDsVm3ADNBTgko7YJLuqL9o6ij9Z9xe2nTquyp",
  "key16": "3LKXcPcu7jrvbwrxKwKq3Zsg29LjRVQbs8xh7MPAPzcg7NdjzQGZfwmhMNK1D6fgBtTcyyG8CrfLPXNWLQzUTr7Q",
  "key17": "2M7z6EeYDQEyxMb7Z2fhdfrz4z6MB4syq9pMBtCNWiR9U45iS4k8eUUrGzKrBP3CGtYVAMneyR6c43hC68nyGopx",
  "key18": "4QwjsnZhh6EQVNK4wAcKfAcbRFciKzxUGzM6UWXmhgRM9JV7p3zcWLLsqRT6envKEbF33aHBP6rj9PPDbQHNwdim",
  "key19": "whNPsU2z8sKhVcjY64qMpyJzkkEDUK3FRtcLjwJJQ9CfRY9aEHDAJ4vfFBokrCcJU81Z2qzb8UYGRBBYZmnXYgE",
  "key20": "5jR3WtbFSLpfzSyfK4ygyBc4SmJ43CoSX62JehAPLP8UzYh9wjh9b1bLSGoLS5Pwhm8c1P111qpKsiBVmTdjSM6t",
  "key21": "mo42SPLRZWssuKEpKJofHb48tBC13LN9dzT7NhhzjcKWUuPvrV83vm4Xpe5PhXq6qAq7atATFgtbcDtgpMF3mnp",
  "key22": "2quDVBXaniQCETaXvdy23gfR1Bm4ydFpQr42mECLkuBcrqT2ELWiMBgnQ7NPHUL9PdtYkY9UJiSrzpLo8jTNGa1x",
  "key23": "kQongMnP5eykEz36xTnpuw99xekt5ifWce7VKedBcbP3PauaHBCbEQTnwREKNEB7ZdwLnF5dEdGjsxbKezYePwL",
  "key24": "5WR5PEzWeaFoGnuuoWZGppy6XuhHd3KRakX6SodDHKrRJwfaJe25K66GGGMFnnSUbdGAcUjHARmkFXxgAX3TR7Lf",
  "key25": "4K4TkHTzeNiY4Q8SmsXfH2CRzecADmisTjUQ1QB47q6DXuMaSS69FqqjAKjKyNYEpKDgu2f94txtabM3Q8wF1BoU",
  "key26": "2qUXpdrnva86PQCEH4r7HaSA9VfSxNa11MM5SUkooy6DF7sDRHjj5RojMRysN95VzmmtjT51MAFdNJL73YBCkFSg",
  "key27": "4eGJ3ZVGXKydxtF1VyPDeEo6jrTStyY7aMQFdWoLuAnBRG6opPfaUXQ84dr9AGqkcAKrX4wTrrPrgPEFF9VgVkJZ",
  "key28": "4sUGDdnHHB9pDcZBvVTJD1FJeqAmABL44JXxd95PDg8fYGzcBx2DnyA5QTPz75Xb8vijtvyFg4VavLKTcKYW79Y2",
  "key29": "Zrj6H7Ae48c3KxBpoSLowPE2HwLq4uEySTRmFy7EykhyB4mPbTxVxJGQZniL8BcAFH1U9ZqpcarqaqLRcKRBN7E",
  "key30": "35Q6b2suV1CMVwXMZEUKFNjujzGYh49zAb3omgqgJhTCFEaqf5csvSuhKcgSvFEAwg1zzAXzSBwAbD5xx4EAirpX",
  "key31": "BR5K6LL9caSBVvW1ru3XaKVdS1PhmjWqW1tarSqLHGVZDVpskSRjPUuz49kPDxSuFoZMCxMgVhUDG2DdbzbDeNn",
  "key32": "4QTxuNbwCZVoqXF35xXxQiMUvKVbjhXh68SP2CVgJvUAgawqJbmP2WbkhcCt3vsf9oDR2ZNTtamKZtur6HfL2CCk",
  "key33": "2AkUTVGph6gf7j9ruGWaFD4PbMNffcDbmoYhb6vAvP1xHbFNmPUnDHEQe8tCtwL1xLJuMMM9Q7qnZ6hPZgBGVZ92"
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
