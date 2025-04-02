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
    "2HcWcmDzavVJJDzEDQFew5c6ETk4Fx4b99Q1EeQqrrNnF3keSgt6zXMLDaNnAR6adcJADxhQs5ctBN4Mqe7xEpgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NHUW1PZRBVXs6Wm3VxZydaadLNyvQGTeKmpgvpuAf6XjytDvHaht1ktGPXvf7Y8RLFDhXSchr6YiFbz9zBfsBtJ",
  "key1": "4skiYVsjVwEtdLQm2cFrSm3K9E3K61Ph12ug1eCt5v9nf9EVjUVhJC2zKzwofwM8Cprqcfd6NejYS6yd73ZHAxps",
  "key2": "43k4raNoWBqk38n2DXSHW3dP2ZTkFHA3F2TcbmvM8xKndQtgdiunPkhTkrh4RxhWXpXBnpzDy3SCp4yAddY5R7yv",
  "key3": "2aVk39pbmHXUkTpf9XiGgGtNVgBbYVBiCZ847aAny5zHpVEjxg8GbqEqVdmtLyPDDDgJncGWWhdS3X2M1M8rHQe6",
  "key4": "359x94HGY5Xm97vPXjX9PF5Gjx1aoJTc3SMnv1Zh7SaHZXrYDCLSuP3H2DEFwSyD9C7DUzjCnhk9YnXbhQ7H2fkG",
  "key5": "5iFjgmMXSg45v4tMffTZ4yEqE14NGjGyrR95Gas3ZCcC6uhV9ryaLVgNiX59mLE14YuNtfnCH11U37TkjWjohXw",
  "key6": "5bp7rutwWkeUwvFBaGaXb3bpum9d9uoG3CbXxpFPFDHFdqgpJ8V9fpXPS75PVc6B3ha1T5QA36zpaok9Lo8tUCSg",
  "key7": "5p1Hy7VPsNc89uSPDEiVenYMTXrAQb6xGQXePb6QYuKsPJy1fiHveiRfyZWTiHTXAsN33G3YLaMgw2bX2WSW9qJ6",
  "key8": "MujfGGD51H57PqKmyTwWuLJ722jnp9BGZdgdPU2QVTQXggNW5WwbhUfsf93USun1crfSwMRqpEWxSXJNFEaAWRN",
  "key9": "3ZVk52e6YFzCUc1qDoEfKqNEg4tvaqkTbD9EQHkPK5YLDQwYjMy9FTRqxofTXmk5eL5RjgusJKHxxx8c2pnUdm3z",
  "key10": "VHPjgTLbqLh8Aev4vZsKpJ3qYZLT2rdWZdJneGpSf3eeLbcuCp3aXJsenBM3iRueRr2nXU8u9gQdMRkZRFxuKMh",
  "key11": "5PUizcn6FRDM7tJEo2X7P9FxRvTbKGZ7Q9o9qnnHvN9GRQpRpjrfWtcwpnRB5LtJDfshdM6xuL7U88VEVQczLN5T",
  "key12": "5pgk2HWo61NMBr18s19be1Kx4jmvFYuTycpNUTjVjCa4WuJgJzf4HASWNFd1xy1aRaMCKwnyfFma4rCfrwJAS119",
  "key13": "292MvxbR4ebTy6raDv57P6ypKxHZnZYc6Jne9JBZBwbm6gbHfGUAecN7Sqpxg8yoccv2gAUYZMMPFdSD1o9eJfrq",
  "key14": "iAaNEJSJ2qbwwFMpHTPmYdcGteQYGiAczjgdZYEvjiWztQyB74FAEVXTjaBbxJ8xqsYHbGV5rZqTkghrmZ6ZeyH",
  "key15": "5FmiEgMktHLxe5L1uaBia5q3vr4AkwqEj3TfkjmgdqH5tpybsgpUvbnJ3JFhwgyNsy6dLomJMrQeHrpT5f49z2Wu",
  "key16": "Tv8NJYxQ8zQgzELBdcuYigc4RaEzYnCxvia3bsWMxkaNiBPhShnTjv6Y1Wf5UG9NCpoRjnmokKVNu5TWsfT847j",
  "key17": "D5FH1VEKwdiFr4mAwpmqnP72CfSkkPVEpKzM4hhjZC7hphC2SWdedxvgfE4dUitPUyJuUWmWWRWnNwqa3tCRD4e",
  "key18": "52f6EmuV8eJmXFxRrnMJDmkqxFKa4JPZCXok8QtSiww1USa1NRYf8ibGWTxU2zebEdegb5wn99riFw6RtEUfz5pP",
  "key19": "5rtrKhh2K3P4qoceS9mbfUxBJWRH74sYEeem8afJJKxKWmr25mp9o2Euwzyvs84uc6EV3fUpJjq2jtd7Axs6yrbm",
  "key20": "36BAeAS7aiWBp1jigZbSCauYyeSDDR6avq2v8b8yU9Ao4imqe4hq5vNXSsURmH5pn9E8AZwn9URdbf4xhA4jsAGS",
  "key21": "4BQ92Qcb15brjiWCuZ1g1RybcATMXaw2e2s6DGeyUYZxawvr7AVtTPN2ZVeZSunAFeExcX1ePK3KvABSanv4x9Vp",
  "key22": "4MZgzpzo7C683Ru3eTxMrTSLoVnu5XEGMZ2Yokfi2KfwAaVLdNFPirZjAsM5DgMJmoi1qiTJ3UENCAgv4qZv8J93",
  "key23": "4M5dCYoQVJG18bPhcX5xSreAFvHGLbcsbncyhmTdvuAxQ3JwhMK8cfbqRCCqW5HtLeXhpdV9Dp8tREmQWx1UU6CP",
  "key24": "2T6mPzUvwqTKB2kCXidn4gZVKjCpio2xRQFttyCr3eFZnVPuRuD5foeVgS7j4x4XA7cgAEX8k6HTXsZPYqWaxbmn",
  "key25": "9jTMAsrnf3AWGwuCaZaZvH86B9tdqPTG2Afyi8Mw9Ch9EfQHCLwYx7ctEEQhWwsgQiiJJuMKRh2Xd5LmMPUWUso",
  "key26": "3jJB26mVKchrAQdqNSgQHhQYRx3FFNfWv8KdejX69miiqxdnikDybkdERExGKxpDepyudxdRjf7rJT5JEJZ8AG7C",
  "key27": "4eBSkEsZnWuwjSFdGcchWLcYVy7DFgYqdaFF56jqmtpafLqKpYpsVNE9geDWjG49EVmsDMAXWJhALJirhSJAQNGn",
  "key28": "2oWaXJuGFkbacxB4vM48LWjsz8AQq15U5qTcMPEZLqVEJJyHQSGy6P3Cvinw8spM4UknvWrtiYDBAvy8Co4ynguy",
  "key29": "227EXWX1Dq4ix2q5mfx9NPPp4D1GBoNLnEScZcjmaNgfCvCspYS64cFPT25YcrMeSShGm4PFYpkEGh2ZMs3mK7Pk",
  "key30": "5CZRH3BxSPhYFujSm5eE4v5vwD8uAc6WFdpbLyofcP94vczqWQSW7g3AEAngRBRtEGYzmaVTUKmzW7e4fXQxWuJ2",
  "key31": "4M3Aoy1yMzw9eciy9xA3TFKmDs8t8JjU4Bqsm9Le3ctNSTwbb7LKuJ2ZN44eQkSqqczSXBGpLKg6dLfV8ycqFKfP",
  "key32": "54NgpqBzW6Dy4kyZMcX3UnvrzkiceGHdNDnLZ3v8ixxnLfpW9QGqkFtXQ1feGX7Fn9hNYFxAjo4t2GkhJ4dMisFw",
  "key33": "5ns92jJEh2BzTvip8529DRzhJgJCpSf2NKHSdms9KBkvQ4WxJESKoXc9G4Pjzxjo52RM3xZ3xCCNf45961ZHM3w1",
  "key34": "4bkuDmEpbj8dsQir3HPieQxvUtiJnKoEwa4b5bePxUmybtaAMGJVbJ3nuFjFR4p5bw6SA6HCwLww7987L7N3G27i",
  "key35": "3aTG2Tx3gHHMszCijpj9bMpa951dZosUDdt6cnSWMgA98Yqy7sEQkjZGjqrj6mVNpsbgrR37fRTg2qVkAmrojK5v",
  "key36": "55JFM33gcQqR87H2jC35fVnKi36S1NZEujH47F3M4CfBFmehCDyXy81BWZFfdiLy2qSTvfQ5VUUzbaqsLP2YTB4k"
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
