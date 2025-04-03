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
    "5UVevH8ze1CrR1fjuDPacQ9GReiNRDFEW6AnuDwJZxn6vEXWfS4x9AmooUrRxUnK1i38Fytk3jQ5Mw12dn3Gb2Zo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Szzc9g6mf86Ddg3oWsfPcGpXNeGTEfEhVfMk4a7fNmd83GiZC1hwZijB1p53wUdcrBYcCcuu75DhC3ATsve3c88",
  "key1": "4kg9zVEGUgRPqcDM1mQHjZuC4AMaDtxz65TohFMs3qmYd892Bv9eox9aN8GHqkJwhDDYLmNgqa5jCanFmeTFQfp8",
  "key2": "3QBDfysrZR3WrsmFsJXgMaFtFEfRG8j8JJQzc1ui7F3xFBjGChvNGJwC1fvTuKy5HPzEGtqw59BHfracnsUC5igH",
  "key3": "ABFjjcQqnFQmhcdyAUv1Se41QjCdmdrQb5yVamXgmm7zQ1VWvG4jHdcUmFXs27qD4geWYCnoUdZrB8vWspCQwuZ",
  "key4": "2vCGMEfmyqCr5pQSgqyjxkMMjCjM1mM4mhPybPFpJNrbwDxzuUNVfLvW8DUaLxCDedbGnDneUv9d4DzTUrZAZEEv",
  "key5": "4DoJttd4vUBg9ePY4x5bzhQHkAzYtk9XJuSJBvJBWKDyDArKQjb6PX263d2uqBD5TUXwMwP9KGcVdcoqRnQRJxTN",
  "key6": "3hfQHRkazsx1mLDtKnFN8BWe9aNnaiz9J2fLda1W82q1Dv5WGwiaDd69Qw2PVC2b3m8envYKjBeToJ9czt4v6ABD",
  "key7": "24yuLvd8dfh3n7vMUEYQ61dvtQT3VVSaTS9T6EJK3hd44zYoTU9sQNo9VbeXEJNmjCgsJUk94xvX8AERruhV4miB",
  "key8": "3qrLeXC3bPfy2ufXHXyTrUeXDonaMXx6VM6XubJxBGoXC2R2Wp6hHjpQYtmVvWWR58pR7aTYoQD73D1VbLHjQMDJ",
  "key9": "D43mx5LXYVQydDtk3MqvxpaFSjsfGUGK59TXWjny95mYaxLPs9vJPG4bFQvtupHr9oYZXqS2cDza9d8cryj9R9X",
  "key10": "nospgKhP9rPoZUEsfvaR38uRzTp1hGjhgbyHVuXhDvJc4Dinhf8JDx4GrjNGZTzPGNhTz5cmX6HtU6h9iGV487i",
  "key11": "55og3DCtGjo6vt9Ug4VcDon1FCbbJGcwULyvrQpRqpUyE8G1gVXzQzsWXiwETvV7xCsqpWHKfsrxCa7fyVochios",
  "key12": "2EmMvvcND7rYCfHu7EdPLgdVEg1xNVRS9MdrbfaFataR5SuagQFUfSUzxDRzB9c73eyypkG2aWNRf8zw8r833bou",
  "key13": "HVav1DzEtJf9zDfd9Guqh6GivyuTRbLs7YKmbHYHsoLgzh45WXrVabLoGKy4Hf3TVGmoNzaJh2SakhoqFiK6n8p",
  "key14": "3hvxiJkrd38wT5i9aa9EkLSbyESJVidgz4immCCLE5BfN8PMp11sV9JFtt26UP9dqnEmsPFnUPrCp2u42jEuWHU3",
  "key15": "6wdp3AMEJgQmUuN3twDerusCQGfevJdvfAzZCBmXFD4xzT32dJTU9dSGbzkSB5qeu4baaG56tTY62VJ9iUmHqUJ",
  "key16": "pDsL4SXtV9CXBLkW6zrGDj6GNRWrwwC4LCS5JmD3EcowspRGfiW6WPBkLo2SDsP79D62g5rtYZi3LU19CW6RCJh",
  "key17": "2gjWNrJqoDxFUEooVXW4RANpSWe1VEm7eJYVYRLfufaSKTbLSDJuzemTYaD3wMYabdSft3oPiCX5vgnaxt7vA7VT",
  "key18": "UVAjuix8uT7mpLBE4cdq9zWdfMm3c6CKwMA2VqGpYAYvzdjYuR2teKXq6WgRDGpPp3rivWgQyfXeXGKtVHqLW1y",
  "key19": "Qm6EGcpuhn1WBmQLnDv58hSaGX6dVnU5vN9M7LucjzybJvvc1KmfBGYPexqCzkCs7f65BYm3dcnUNuoabh5Dnpj",
  "key20": "1V2xye2TS4cuHZZYXmmbZceBv7jNnxoL6tkJJrPcdUJ7PHYTHanTiB4UqDepGCCmZQThMMFnCoQn7TwyDfxdbg7",
  "key21": "4NYsPuJA2tJVUASxg3nmTUu8NXsCpSvu2cRsDAxN3krpcMnW36u5YUL2yuWpwjmijkBNhcXJEzVrQSa7KiPKbSVs",
  "key22": "4AXxa38jbSdpXgVcoDpmAdSKeTPiZ35WjoJJ9zq5dcdt5JMU845tTbdzVDYLQHshDzEi4WoXGD94PGpRaXtHWb4U",
  "key23": "moLwReAckepwHANdWaqV7nG38cChGyoaTDfcRQz9jAMh8dUFUv6XDzWdYNN334V9671E2q581FTw7sFnuZJVVBC",
  "key24": "3TAknV2AoQQggzBCw6Q3CCtLLDMGmgjnMCj93S8QFupCPtm8mA2S1Y3x89NGDfEb5br8gMhV8DGb2DAG8xbw7AdB",
  "key25": "V9ueWQKoh3KzeaSzWXJBwLYNMZHZCt69evCDkf9CNReQAn5pCdfwKsAGfBfiywVu1wKYBR6m4UwobhE2mKrduQR",
  "key26": "28LYSnZeJYgjrSJWxCBJ2ov9MkTN29uofNFFvpp6TUam786X1yAyg49nDt6ZAt96zng1rGN7FJMPp1iDBBm51NnT",
  "key27": "2UxxvBXB1FmB638s9QfyhWgoK5oWrdA2R3LDM6MDQYKvvZnpLmJ2n2HZWfahiUeYdPgB1bii7eT7qJj8B8hCgm8d",
  "key28": "27yjeRtfahypDVc3rezkGcWjzAKR2rfx4r8hkFSr6hMEKYVD2qgK797YCw1hs2WtdA3YvGsLGAeR3B3qoLwNqwwM",
  "key29": "2g84gYcQcsBMYWrwJqkLpgBtgtFNSzBB2ffcycGeJGCV8jNixc1YFZEucJQyhmunfY7mamKdb6wu27t9f2SP3ebu",
  "key30": "22KSuRcQxFWCCTTPd11dH89xqdSNKihtRFuVfPMMRxaMqn35iZNgK4kMW5YNvkYiWJJq9ai1jXz45JjnwWuNhwGA",
  "key31": "2bh8z9G5ryv8EwQRrFmXGrrzimudLxMGYAHqtMCNUJZMEsA94KZNgKrfBbkooSUHTCZWkFAXVKw3JU72b6dQTQW2",
  "key32": "27K3nXMmLSWCeL5RJWK295F5DXoWPVUwu9hwq34nqX2kE7j8rfPMrN5VgtLGqmFovBehHLPAe97fT3wUXNTMeELU",
  "key33": "3KrZHVBjFZEqbCtAermsdR1tPgEASL1SHvLExn7VBP76sDREv2HUdDcw6kuP5WiYZdRUjV9vfWuo1ExjwpybhyuW",
  "key34": "5Cwk7aNNWPwB9yQ7CFC19ef8Z2ezgXQ8pzQHEvS9YNbFiXH8w6R7yusidzmJrSGFANRrEmNzroeQtXi6ZXQGG2RH",
  "key35": "5tcDkgosVYCz3YPrczuZcCnWR3cFKLmywHdKA5n4L95TBujjfQq5EKZdmBBfcMzammHDkhPvpm2JPu1S6fPzcR1w",
  "key36": "4c5EYsUvw2VavWmjWfwpFd7GqV6scG3VLRvWR3BrrJ6ekWiujqNS9vQQRphoNPKfnNQ3qsxxttJYSuetdSjiWg3o",
  "key37": "2xvfQPQwFhYkUR4kWvRau892C2MkJ5anMk7bzzVvCNsUy8ouD6h6MvpyDSKeE3Tr6NtAHZCjKxfNc5PjBXFSr5nb",
  "key38": "5SKyLJcrxcHTdpub99YVCLGy77uMcBFL7dUy4utLwqyQDLiStBQqQwhK2EjiBLZNhEoVWnoqufKyjSpwr4KcE7rz",
  "key39": "5Z8npvFq1Cq3yLRYd2n2i1PDfDn8RYYrH8Wth9HiyvPHMsn6EdHgh8ZsLM56hTxWbJufFZhP2K1wq3BCvPJmbjD6",
  "key40": "5NVRD25XKjn8o7ooRJ5ZY7hMaYQn9HBu9GoPofHN5aetLgQfeBuWA245F3bquZrgTAB1DRb6wAywpBXvTPNPfmcT",
  "key41": "2xhMr3TqaWqkX7f8XPzMSCYb6qiDJeouAjuN4NNhtQ7RYsuf6fx5UjGnv95agWkGJGp2r5sB2DgSCr4wA4zZVf5X",
  "key42": "4pKKWCw5FPGoaLZWYcwzWgYxFxa563s5zi4Vvf5R1EJaxMefGzSFJUkg9WCVW4MJzvWNXj9ZAkyv3tjUr95aDTcQ",
  "key43": "STrhQCghqyAxq3u8eJQAzQGhsj9jdmgszpuPUBbFqvrg2KtUdNnybbLr1Qaorp7x49TB7DKzWAUab29WJNBAMWw",
  "key44": "3ZKxmD9X846A1dbZhTDG4JPf1QCXm2D76958M3Dt6odVWEyww3Zya8L6Qi6GR7wUTjYfmHZK4789jKW5a8ae3foi",
  "key45": "2EY7kiDybjdhWSkszvhFx3F6Z2FdJ7naZ85m3Dbhv4UB3Q8mF9GCuED9Xzdm9e5bVGNxSuMMTV8tKRFXXxZBPEjf",
  "key46": "5eJGuKcsCzVM2kE2pYbUvq8nbJAcA6GyzKgMNFFzRgVamXi9soemMyCpBeWbvV2jxgU6Vh87S1HE4g54W5Kx7ctT",
  "key47": "cVra9DzGJ4kigLHx6ZABeJdBqTq7MKjPwNa6pRsYBg7jSrX4tyyGXF4Gidv5FeJbHmTZJrJXcX7yYx8G5kgQQUe"
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
