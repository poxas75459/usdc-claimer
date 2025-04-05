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
    "3x6jbV7c8y1XRvfMCWhwnh26pTWtiAxDGWf9VpHvxCKcGsceww1fhdwvoQU3ra5zKJPFFEPSxFPAMxXR5syseT6r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q2oBZrRHuHD7uASJ66upcRvsfJTk2bGxgTKMDscdLGzrwVSRqAh4r6DB1KsueSsHfMomTPi9TGBqYFFdfEX1e32",
  "key1": "21AWdeLRXFEJ2rADuGsTfZRXvNgTmTGUUrfhWfGXqAThB5LHDwQqakkFJKirboDQiaowwK6TuegbNEPF7EfonkHi",
  "key2": "3Z85zM8mZhSU1Gw2ouCsZay4irtCy9DHtowLqASWEP2PEzh2njevsMC1ziKYd8D6s7jFYaum9Tqqnk1xbKjz4KtD",
  "key3": "LMHAz4x59FrfEB4m7SKEAAy2x2mhhtX2SZ6nmLGdhNkiRkqWoGQQ7TrNpcTH51Uthopd3oqMNHpDCjj2ndBXWfZ",
  "key4": "3zqkCBR9hV6VVQJa1MnnHoue1AFwJWnTcyNrW5dQaPGCNfCxU52bsUvrBhy1KYDfEj75yvnNUBksbvcZ5NiPL1M2",
  "key5": "2MhzNy9dap86kaHUbzmSazDjebvsaYhf1xpt3zXHg6yVVfDhEa7ySYLSrzLQWA1U65cFLBXmLg89qztSkdY7GMLn",
  "key6": "3qxAaPa9amDKMbs7PE8mM8799ojUAMwTx4VWhZEde9vxmMRwdGeA9UTCQ9C1eFgMjuLnZSptVKpCULDN77bowzF5",
  "key7": "5C4y2Mwpapp4ajLetQhcQDYoz5141EuoXZvdqo6225s7hKEF6bq5L6V5PmQPJmJ7MLKxj8syYcVN6JSmjizvsaS6",
  "key8": "DKaoaU54VBj6j42xT3JnNB4VWFcecyULLPU2pbYfxMSyavzmkAaf3wizSsh7rpC9cQU5c5jTwn1uCFT7dUfPjqf",
  "key9": "63L47vLjyHbHF7j8Z9N4dVWh35qyh9cNMZTvVxPUJBops5uYF3HUZyHGWpdh7ixttyECLuxhXFFbEaCZkAWzc6fD",
  "key10": "4t8pWoT7bP69hLciY9X8trZ8UaDsSjMRhHR2KF6vvS88T5N9h8zVYhJSHRbwEh1UoYzhda2bNSiocCCvTZUVXevP",
  "key11": "5xrqofYrTiJ2nWpzgk9nXqbnM1jKPxNKVrKp3ExbuKeBLQeDQKSJLR6TkLS4cAhyoXdStAbdSZqjYkL5iroq6WCi",
  "key12": "bwrzMmYrq3Rm7WxLaNEBExsTaMwNhoLo1eG8xWGmpUv83aheR7bX8LppC6KXWAfrXcMJ7HAauJYyjE9Chct5AUR",
  "key13": "3wGU3LJtQ8WBhke4Ew69XfERroyTafgdxCatoofXSsfTcnzKRKbQAS568ASfaqj3uBMsX4QPeqqRkc5AHZ7Nd9da",
  "key14": "2aWknykjoe65SGbqYzF5dYL73dVEVi1U46sxrenevcfWpFZGTjp31oe6spF1ACGy3TKt74RRwVMkRLd7BLD7Dt2d",
  "key15": "bbqsS8F4pwftGCZBMmMDCE4bdMDLB2gDwVh9aHHjDTjg2K8pZCB7G7tbEiHhwwzLJov9ceCN3ts4TaeNWWooGFP",
  "key16": "5nWma2mjoPdcfNJYywck3gui4qNFUcjCGBsWsKdh7GPm7gfaM9ThsD6wSypEoyZTKsLZND2VFS6nKauxHvTfmzge",
  "key17": "2XrvRE1QPq3iX5SkyD26Bs4aMjmwjCbtkHafKcx9McmcN4QRWLePMzNtqftQhoVdKVFuxWoJK85njgtRk7ECmsN2",
  "key18": "2hEUHpifM4SyV48nQJn2PnaP8tCBY6d3FoMRLUW5xmiREHfNjDNnFGfQonamSpfLb7TjSizUc8NJXDWjpUfaa8b4",
  "key19": "2XP2GSp3MNEEmpW8iS8p54M6ZubrAMHMb9TeLKXWtV8KpnDzoFasQA65zHM4WA2hFNoyAyNyWUA7pLayu5i3j7fG",
  "key20": "3onZzY95aKyDN1z9faS7sAMMLyk21RYkaHxqRfHC9dum8RWGPB1tKU2hKmjVfxePJ8pfm1h14Wuj9iejSujjBNfE",
  "key21": "5Nv9GAJEommeeEaCHdUyLLC57mjsVtxuAhZdWS1Hv6ECwBCVJXyJEA2VJgpWguAbAHQ6getzp8LXLm8wdifq4GQt",
  "key22": "3XKjVZMekmbDqwCCMrF79XSoG4urM89e4nv4PdTF8GENxrsDhBysaCTLb9niCqDdy89VscZGxz6YhtdR79Hmwz9j",
  "key23": "otozbZ1B2MHmavLyRSivMirpjHiyDWBLUo23uh2YVaz3wWPWWNYoiTwbS9WL297dY7ggbVjR3eGWbdhF3W7jCoS",
  "key24": "3z3KYo3bEKoiEL6WBTiY2iCrU8sje4K4QudhjgECNCy9FYqBQhe7cULGkHQnrrVc13rYuExmtVZyzt42VMpWZWEx",
  "key25": "3GkehtYXTNcTJSzkKfjjL2XqwmV2BcVMZQcaw3ndFKggyc276vhXchp4ZprxdLpkpgvhvoGgJ31Ne1wrJhuFxKTS",
  "key26": "5cC1Xxn8fzMoXg5sS99sEUXC4ycUciENJ4Wu2x9ppstPqLUsNJM3pb7hcr8g3JuSc38r6HKwwiDwKgmmULd1pBMR",
  "key27": "2WBYHBhaypCJvCYfqdrMf8GAg6SwRWBhGznxw9wUxmdjupgwsrFt7Qzim7skj9Dcdu8DaAFaLNC9LqpURu2FyVfy",
  "key28": "5PD59KdjYzrtrBnqy97rhFvzKvHyH8tZaVE1iRV73Wrmqn8JYzrZ2xGCRqTwcUWNousCZgTPVzgBjJEDASY2zkja",
  "key29": "4UuTatzaEPvP9s8a2MNp824pWeKstNxRk9Hzs5PB6PkjZQzQWPsrMWd7a8yywXt7Q1e6pBvy77GBL4AsfdtxjUzs",
  "key30": "4hpRB764DKkxrU2rMsmi6mvrDmbu1Bt54z6hDKottGyrVJvf5jGyA8F2PtA1pHJAuz5VwPaoRdR9GCRaDWhTqedY",
  "key31": "G2fL4D6jdW16fmRzHfQFPsMfkDhr2CpvMcVPxe2ggje25VXxGxjTrunH7qxNKQCMGVi7Ldc9HpSoLMYmn84CViC",
  "key32": "2oarPnPZeeyJJoqzTWgGxJomTb3CKcyAKKWnjtojdWHbS3AoxFgYCFLrQscVD3FLcxLP99eywF8XHXQCU49zwe9t",
  "key33": "QcQ6uVRwNe4S5cnWGc6BbAom8iKDa3pJccW45DCRyFv1MeQfEd6TSHk8UitcQo7vGXdfT4TxqQs6TNxhShaDKSo",
  "key34": "2dhQMkbn6q7VqPtikrmi4ftDqnw9VB3AQxzQfuQtnFr4BK5e54YwfxtfeYQbWc42NpuWtSEg5tXBTMrBjhYnHyUH",
  "key35": "4fUMGMkKr8GMUaN7JfNfWStCun4v8ZoShUYSb9gpHrHEY4DLRrVzeHWCKKar7dxqedM1pw1CyWH2QT7hcEE9trK",
  "key36": "5LanLZ5pn3XXxrH7UjhyY9rX7skzuy4kZ2UnXBp17m9JoiXyQAdt8uCSzzKts3NrVgbR8DygTPwxMKRaSPrRBXuV",
  "key37": "5UCs6NbCVEx43zhXJVXX4mrbpeotJ52yEq1hNKb8QrtBtfTFT1Rz9WmhmoMpjBLDmXjUddEiLFKyAUKUAAZj6MsP",
  "key38": "HeEPNTBy719VCtvz57Pgyvq2omjWXZPPTresUPemDyrPAS9HETRoEGJRaRb8FH3Coebt92ASqjKafb2YSqn4yrk",
  "key39": "4kjqQvLBuQd5XtdZRcnbEygLzvsm9Uv38zAEnbp6fJArFpMoJkH1bX4DdNwUXyYHdhNiwzm8o8gMF23RgSPSYsgg",
  "key40": "4vC13ZMEMzcsTTHAcisAhi2MJtshw8u8pgSCjhbqox91NZVm4UdFt9RhkZL2F3ZvVX8aC22w1e6F7QByqj8wATar",
  "key41": "BKJ8EvBVcepjZ5Zp2AvBiAPeiDEV1rtLBsZavrkeb4MKNBhiBcAS4esTnxYzkRGPW14d48f1MZeDTn1gDxcQGUy",
  "key42": "3K665iHJwjFx1MUCVfE7Vaq4U7seZjagcJ55PvECUfbVAWEMsAeqDM2EkgD9yeWixeSHDzFESwVkWCirRwiuA5Ka",
  "key43": "2muxyx3mnQM593KvhgQs9P1h7Z1JzjGf8WzVibTCQEruGqdpq5V1xVztgTkytBbrFAbtTa5UFqfDmeNHzbbD8ZTm",
  "key44": "4Nmce3ZYsWjxNMXa3mzAgQpARTdcZnvGcdUaHGp7iYhMaDJtSUvXFeBQg9VDVKgsibpd2zZckKdwzejmMtTYWmxk",
  "key45": "4MjpiXAB8cJBMqEN5HjZDNTo57WBgRwKhzUdFqSJoZ621un1rHpWXxrVjoSfgyLhfdD1s7sDsWXP3PZ6Ly7b9cjw",
  "key46": "4mVn23RJDBWpCdNdFZbu3bmf62T1ZKoNsrGeKGG3JxjnZSXX6XG2nzkVhgNhvaFo5NLbvwtPmXstLVy1BuMRyWeR",
  "key47": "5n1uRtLZH67SUEnA9JxphkfeXhbXqpMz1ZCMNnhpLbwKSPXyxdsDEMyvPdtbH8VW2oLQhUFRneMTAS65L3BpQtkh"
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
