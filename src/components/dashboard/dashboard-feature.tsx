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
    "2PcPZpiF87LhS7f6hDwigytjxd4GpaiYqxajpdT6ndUuUcCjrhFQWZnWKqVwvwXsNf1e92Y1st9YbvGrBdUKDAwG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jV92PemRp5u7XfAhGKcb2SDTGRuBKwiSAmJXgCiNzHZ5adbF33mrWbQGEB9RiLVy1hFEbRaTxXC2UUK3nXhjwUz",
  "key1": "4ubLimLcvecjmLH5bhfqj968H23p7n7sUAufxkHFBx6gHSZvKnjraioHZYUjd5Ei7eQPbHGUkQWPzGbwuo8BnhoJ",
  "key2": "3nZuyDjRcnAvU3q3nBSSAEFgPngKbypywHeUZyE6vWjgvDE2CDrNabZwXvG4btZCVD5rM9NnqZ8YVy6k4c1dWxoq",
  "key3": "4udXJxGSvxeGrmJisUJHxAErbQrgmR88EPLZkShr1CG2eNntGJpBsx1xCMXa6cfMR9EoNjP4eSNWsoQjKL9FbExU",
  "key4": "5cT9dHxPfRqyAmvCFM5F5REpN87K5zgekhubn2Rc2orJEt6AcWSaJk92FegpVZSaQoLhZ9mr5KtHhTFLre8MjDei",
  "key5": "4ptBnWQXqyEVCWniczoFuVoCt7jBpt7jncxN4yNfP9Ye6KLEEvt8f4EPW45dQQVh3nvS5oN9iLPiP7zjzB8QEiod",
  "key6": "mKwiiS1bSCG2A8bSDgFcYP64bRG6pm62Ucw9WymoYAkdzNYZRQMF8YKLbJmLLbkhtVTqXTkYiW9zoHDsDxdK1zF",
  "key7": "Um9aDvWLB442MvEf78yB4xr4hE4XVVVNictc9SRtGmV8Zf5DxCBYB1h8sXFRvALdRgbbmXRmr8n6q85GGpj7yAn",
  "key8": "55poZaS1uPb7bmHh6oNmRbXrDetu1nVr6XVC8M8MFfomFs3FVkfPbMCwwP9SvWyD9ynHKo5NcajCQtWXmKptCcNt",
  "key9": "5pLEfyn4KQuKd46SkfCUoDn5JdZh26q9g8QcEffvCzUaNBZ66kRRoZtRevoYd6pWCRRoCoJzB7bRAyV4TRNRfxD1",
  "key10": "5ZC3SxQVRExCGG3pCUe2ykQcfAT5nyS8dKCDS7hQHp6EzGQYKg2AK7uDVPVmDtQEP1qMgBRUASJsLYqWAxcvM5BG",
  "key11": "29VLz41dp5fPkQyJBrih6ANtscJRYSoZwkuuU4btoBxjnDjQ1MZzgDFvr98oCmaosNeUfWUamSo4t8qxaGCbX5cq",
  "key12": "4EJutcXqXXSsxcC3HiHwKo7NZHEuF1SX2DTBdSzd6dWpDaQaTjCdXs5cFwgTAcobxy6SBXSJHzTVxUTdgE4bP8j4",
  "key13": "2EZ6yiwWBVQx1YQbwsVK1wyegdxoj1Q8H6hDYR9Fw5QAYa1tcsGgXgbbAPu2ypYTXoftZZ9U8Z5LVRBwbrsw43jY",
  "key14": "3ky1Si8cdvcrGEaUWVYeMLmU9bEmWAUfZferXXCNTPev83goU1zceXm25S9iwDTVyygcQYwMag1pKmHVNP8Q8Xpj",
  "key15": "2RJmrQcSiCXkrx6UMjVbjXiYT9jpNiTYVfYjJHcdkb1CSbfMaW3PcCcJQWUc8Cajgdk219GBW5FgPVGWWDTG45r6",
  "key16": "4sCmKqTWSGGuQfGRENequu6ih2TqhQyizR7U2opya4iPDT4eygJsvuyaQ29kZnzSouBuRTtnu2mCtckEAoyd1vMj",
  "key17": "35pbg3Q6iszemU5kN9TyCM67Yv1RhR4Po6KXWdcmN7cxV2wHV1z2xrNQ4Zpuddoce7BLuP3kkf8U161ydJdbt8VW",
  "key18": "2RUP9dXWMz1uuEUrYbnQDzBi8nggaksJiAT2WcVbvy81971XXPpwwh6qXad2q9GMtfGNU3mkA9pimkKzFURwVkrr",
  "key19": "3MaeibgtTW2w5iijFd5UY2cxPFnRWBz9BDfSVtSGRtExnkyzFb5UCf9HYtg8EVmENncHXk5Asbgt6tDPuNnvmqcc",
  "key20": "BgdAavHpubF1DTLfZh13avpxgr6J94D2R95sEanm3jc9VY4tsfnLuvdqeVwxQb2fn811gb3cpSbxEKGUViRNGSa",
  "key21": "ZsKG8psQmJaezi6wiDXXaGbU1nbkoPqDMJYRZboE6xjUzUfFjvo6aT98UAcHFJtNaPLA4A6hNuDWJgDBZN9NzLm",
  "key22": "5hv44Z2f8uSXwPJ2EENGUHd66CxQeUBKk654pdBk3bEFnsQSpC1tV1z2VdrSTg9gG7AeVJGrAQ5jPMkE3VQ9FLRZ",
  "key23": "27EbRXyCvBPdmnFKcPg5C1xUPVhYrB97CMHjyBo4abjKE29UDnU2YFd6vAtDAzQuCdrjqLRpnvLoepuM4uizniTG",
  "key24": "4cHRdLp3AfWjjBzKwjwXPk973EZRH1PD8rscTAgyALBhXdZK2J9js4vhoJwuay4PZj7bk2bjVJsnpecojpnFudGM",
  "key25": "TJvMYRnR9p6Ug9twoJxxhKjKmtXEthLLeXVVRjAwtXy781vzwAM2Zc4dusgLWSHtkCaBmBRGYCoqi8K4axNgwPq",
  "key26": "2KCdq8vLg55girv7DBguNRr3oukPGLyWjLyAWAM4cqnW8TinVicWddrrYfcJa8QomDYMYCso1JdqgNoRP63A6YS7",
  "key27": "NcCK3Nqu5wFD88W5uxjaKRBWuwnwRsqbzwQziCMqCqDSPhAZtTZ6JUmDaZRE2kjQufjmWUeppQqrNbgHYqYJm6v",
  "key28": "5gZY9zFDMZ1E1n2zh1rcuCSEBJEuF4XsQaDs7vCKpL2b4phdGmYmTFSUyS98jyiciUb68SiAfcv2YCtieba9CLmM",
  "key29": "5BaexJiQ6gjMJWJqcRvyeJC6GSiYdQBDNRbYJdzKKMzf5znVVixSuri5uwoDNHMFtx35f7gKLTgP4VBXPkie4KDv",
  "key30": "5phFnooPAPBykGPJXLYCrRErs2k33A3aWQ9AVKzv7i1xK9MUdEu8N25Na3mgZ2zfHvddroD25n6UTyc8j5Nh7VLA",
  "key31": "5u3dg8GsrXdHWMSNX81VnQMonSLEPzVBbm473dVPAjDEeQ8TDEpeHQMBJLJeknwfaGj6A8Z91i9FmwTaPht4oAKT",
  "key32": "2Cye3Vfqin8b4MvyUV7TwoQsgqipfdDmLjRDkhRghf8Koveb8EjteYPqwo61FDGQS1DmhufEK49CK2QdHZUxbBbX",
  "key33": "57Jr4RZWQoxfz2o6KtcJoxGuk8GyGwtXuvFTXgKdgaiJeuxrqfRA1V2XoKkkpZiCkEeoe6MEB7bsbhXHZSNgkKYv",
  "key34": "CYAMrTVogWsvAnXckhmZTGCtJADNRUrayefvmBfndaiZvHm68qQMswDvGpmGcSLTwW6HTcbLKjkJUvHrBxTSXYJ",
  "key35": "3eQLxDtxkPo4bdKuPjDVyWKQynwZU1q5rwvrAsiKYpvsVP7j96DNNdVHwpZtRy31EnjcMdoZKjMj8WZDmyvXfJat",
  "key36": "3Zjn9dTTiuc1g56e5PND96W96gLsLzEL44SFw3kYRLiPSUEbsZP6uJLycQzybJ7vJi65CUeRh2Qve8Swoc33YSkv",
  "key37": "NZqbxaJTyChfmT9CXQCzhS1LtHrkGeC74zHb6g8DJuhK9CHvw9qxJ4Bukwa1VaNgJEPanato3jpPVZVEofw6FXG",
  "key38": "39Ye1S9NiD5VPhYRuusaQTV45sWMrXHcLmcACTJn6m7Z1bYXfYtHqTRn3RhN8StsfFQL7WE8ZRxUAVg8zmF7Jddd",
  "key39": "4875eWZdmmXpeojua8UWkzcoBs7c1w9rkXUFFmvQUfoYUqzspuPi6AsSG2dAYtPHQ5kJfdhYoffuLvqY4hihyHPA",
  "key40": "4brPpjrPNKeh6zGcwj6g9QCgJZHp8Gn8PgCovTzMv84ovB5Cr4mefagzUvk9QGVMxUqACLCPMFg3g2oYe3LijXZ4",
  "key41": "MrpGHxbn7dcqGqRue9TqUhLCxwskEKQKPxwB8h1xuQXdi5QgAogJRWkqfUbAs5n2MvLvzKHuZx6bbqUePZkMBAW",
  "key42": "33nsRYopppQqnoV37advujgMX4y17fhAhWvWW27dCHQB6KhfAbs8EV5AaGhMaavo6RY5mEJBvUbX2ppbkjnvugwM",
  "key43": "z2TMUFBGNeRDJFALdMSCbG2ZmF7UcVNhtf8GN8gdxgcpjEG3VxsvVPREpDwretQtbjMDMS1cESbZBcsuaarE4Dg",
  "key44": "4MmYm88JGTDQuttN1QeBy8CGhcLRe55crN3LjtjuqsJr471MbU1NQpY4P24UquiTDoq3vLvWf8tSDMUFFEgGjhmd",
  "key45": "5e4YZ8W9HvraeJmaToq6rrtSUELU6YSMKMdQNPBet5SNM4rxatdLHAxjgutvQDUQBK1xzRoHk5grdYsyRDMN5oX9"
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
