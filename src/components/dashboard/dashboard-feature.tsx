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
    "3a8q2MK8akLb66paBHhvgnsZk3zdmjfvAmcPmeC8VBGQk5xmWGMagj5zRh5vMorT8jaM3i8S1HRLyWcEvZbfqMFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3veTswQ9WHtNYpSNAN4XJYVTY4agFRgcnxq7nVkv28gK1Xd5nkWM4q9kHDLqsuigA8tHj3crzZXTWjrVZUG8MkF7",
  "key1": "2qeb5KgWHdQ8eia2BdmEe9bmRU6K5nSK3KUitfcoLkAymG2yjp3MMBaBcLB6Z6FtHNhDZwY891XgAiHmQPUi1vPz",
  "key2": "2qN6YKZETXjWBrEhVue7d4MfxufpoV6E2G7oUiWgipaAiVnNojcJ1L5JCAsffn3qKHDjM5bqvPkZJkTKnWpfd2FP",
  "key3": "2mNEmS557scN5oX6EH2boi58ttVzN8w1ahJhK3hRXBKrudKVV8QE5RboqYa1ovmyN9CP65j4K1NpR63jKe9UrRB3",
  "key4": "2KworGF3x6saoAB4q5oHqDsu6Gz7vfAwJdbQxiL9FPLhhqeYMXXPWVp9GE5gqajv5Ru1WMTnxC1ELPJBFwHvryGv",
  "key5": "4nBkuf8AND54xLMdoR4vYh7S85Uzy8yymypzpQNE6k2mPkZPn8PTRKmBxPmgY8NM8YK9A2DkaYWuT8hurakSkjD5",
  "key6": "5A1yJLga4gXBez7h6myiAuoaLxSp5usTnULquRzKzrx4yryVQoTL7fBCsK8LtV8picPvKWyV15CYSCo5VbV9Ucdm",
  "key7": "3FuURGkGUxvQHTDKiRTeNRjfAdkRQh9wyzPm2r9wj1g4XZA8c1Lw8sMfRSFTVTxcjPrd5GxrEJ3C1Nvw6GPo9YFc",
  "key8": "2tGcdL5P73zxrgHbBFhbXGoABBBUWkz4m1nDg3pV4YQ6BkJikPEjtrnBWZeLLZD3nvQPKbFub5pFTjEK4Cc51z9G",
  "key9": "2AbDA6gNUA8jrH433NEfjZLNzWxcsdzJnpL5WhYZydqwmUJbQuVMVciCfsQNsFgp1iyPvPdMWb7XRo1rDC8gMZ1m",
  "key10": "XKiKQtnXCnmVNJiHW5o4Qz7GRMigx4JZ6APfyGsgUyiKiN2uf63PL3bnCeXhcWtayoiDkSwM1poU8rYFEZH3YWi",
  "key11": "3Xg2xuUo6ppugLciH4v17BS247AVMppQdSwnjmr7nGuyqCYjX34asdEHeaHC4FcFUJixhyq8uvWrvhc5rRtTpgVX",
  "key12": "3xwjukDc6eU8RaoTmotzn2iPXxygS7b7oB99ETxTivD2G4QCcK1964Z1uju1n7aBVvntAuFhKhJ9dQ7co3gk4acJ",
  "key13": "YG4RwBx8bX3pczUPj7kN3BbgRUwRJn3otDoFJbmf8AWXZzHG7d6HrSUoRAgr4wHCt8Uz1z2vB49K5RwMYvQc55C",
  "key14": "nFqWQBmEtDZfmUotk1k29JTG6jhAD1XgZcbDLDvSF7CJxYxgfv69jX6Gk5FZtn5MX7edqwfKTjjVRT1rDVrqWvk",
  "key15": "3qDRBVbdpTAAToduAUrpzZAfA3WakfR61ebEzN4uBERT95jRErgeXLtkhchQAEmVUYcUQKuuimodfAjiJ3p6d96g",
  "key16": "3eVJz4SbXNR7YgyXT7vQQaGDyHJgHnGeQE3uPpC7VauLxLuHdWaNi6QSmLxFEbPEButGujNXjaWk3ATMvA3viVSF",
  "key17": "n6rA3ZsAUMLDReFVUezsU24bcKKULjiZ7NstQEmcRBFGxHBdXRbj9MK87GpSiiBnchAdm22E1ZxZech61ekQZX3",
  "key18": "2x3Nbg3V4frn2iJSXP6ZB4oAyu5DP5Ep7VNgVgrGmpU5ZrMKG3bDTbYbvudPW76C6iGMoio6v1BL7xNznBSCLTUx",
  "key19": "3YXMG3yrLucJX6C4JL3buS5GyVHtx6QmVWBjXzwzftC4mEmCCNDhLpdu2Ne4nsArHsBPt66WmKW1AKE3aCxdiGQx",
  "key20": "2ckiiNgCvNWxNczL7NdomWEpwvxBwzADNLGXArm2wNAauHvG3dJZ6Y4naqYeA4ao6QkWuDGN7mE2TWF6SEZB5hXB",
  "key21": "4PauTZRQ71ATHQfabJrJrb8HKz8NkaSEYxqWgcn8apNhuzXeVfaRjvpu1jqqYteraK7L2b68XtjruHkrEt4WLcpa",
  "key22": "24hKcuBXZ615FBfmHcwzVq2HM7QvMap1R4iYfP3QqnaLXfrNrenpPTtKoSYxwsKyPuUdYnmmRDJUghxUrkkV6uRg",
  "key23": "4toJw47oFBRpXJW4UkKK37FTA3XL5vWmNB3KUnHRS5Kb4Ni5X25kW9YxqTqervksxP8R4DRCmRkowHsQuKRbL3Tw",
  "key24": "yDiVRyui6BZspNLbpHhZkLc3GPgVRphh2EmGGPoEBfmcxFoo9hPb9GxBTU83U67EmXmuGBQQMyKzwjf2Hmd4R1F",
  "key25": "2YBa2gSmznCU6s7pqpL6iazHUpPXpPA9A2661scDQwR8yPy4rXCV2y65bx41YKY1VgGKGe5DbybUMp8JowtYE8TX"
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
