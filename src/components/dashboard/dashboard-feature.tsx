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
    "DGbGg43wRZ3qFBmjuooVUWqDoFfU3FP73SKg53xAHmiS3vFSRwtPYpqv4N7JpR7QPjXL5uqPrfPJw1vuTpbjw26"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43e4pqZw8ew67t3UEnBqAscDrcivRhKR2hzukQHAc1pthSeYQai3BCdTQRqfR8yJ8F4592pzGUcpmrQnHUpPWMt6",
  "key1": "27nLtS4pUZD1oUUfBtcRLyUi7vzmQYF5DDwsxyZ6oWBUiEBKQE2hwPmbAFY3fHGtFKVmX7ixjJZNqwApjE3n6j3B",
  "key2": "3eKkiqQJaKNp7bHAdurUKVFuYhf1qySvc635vc6CfEtLFabzwUuRUVaVPC5birkeTdLyjfuqdS8cwjKKxTLWhoNE",
  "key3": "PXmAf2NsMRBYJSGz6FngAZuKM1ViygKzXGfNsSsCKfie3u3gwDyqKaTVA5F5nT4SwSXBJXrnZEyHogTrhgc5oLs",
  "key4": "4bRaFRAVP5SKcQbaNePMK1BPJ6GQGPkAbQhRVYPyyzUoCzbMc6uHayEuG8UeGFHjzMKhBGRqJupVq58rHiAGBN3g",
  "key5": "3KnVyxsZmFP6c9nEuChW3cf6StnJAZwCcobwG723D1Rw4NERLwcLEmX9wqS3jUQr5gk8JAPXXaybFZKCC1PNuXBs",
  "key6": "4mCLCJgRghQnYGJaprGVoo47jKp9zgEFqfK8K53wRKEDF85NjhsKcoy6B3SmPyCNVScPSVQ8ZSKm9BSLTXvdGAR6",
  "key7": "48KpFzTWDiPYztHBiJyjYhS4PU7fz5rrbDns552zGRxivHbzpqf4VbBqFtD8nTi8oWW4Ww2j72GXoUuKTuKPVLn8",
  "key8": "3p8WfVdMDk3JUtym4AhtCxza7iSdz5EJqQ3RiwHbQdop7SPmE5NHPkQnWSKDrKFzR6CEJ5nyVPNasgVaFQ5d2nbh",
  "key9": "2voh61NZEL4jTWxCWGEp4Dy5iLxQGM4z68398QPf7htz25jHC11nJtUUVwYJctobmNJ2zohMAGNi3Z91fVB6KnfX",
  "key10": "27tuiovKRr5rTyFvuSVhNcY7aMRVGXdeXfS1Xnx9YHtUPS73qXs37vZ9ShHSh4LVnC97icEZZgBUQNchbpVuSNEJ",
  "key11": "5FTByNyYW9UdBAenvFHaNLRCWtmkks89sP3hKUaQgVjUvMAmP5BwRJ9RPbHNSmwyMoUoLHw9sKLUWZ3AUaH1HpdH",
  "key12": "5UC3UTsdKGQUDYvx783QDwwX5ZQgiA9twteqYKq11gEf8AL7fKeTiVGs5WvR1Ghgx3nSHjAiLBCxadZkshd4P6Mm",
  "key13": "2Gjifefngqk4ofqUR1hcGY7nnhSTbp2VL7XNosWfryNqSD7RUkgZbtGCU5zNFk12rBY3KbV3iFJ5AvAojTVFHWJ8",
  "key14": "4wUcGJ4MFHyxdiutSV6gG11SYYtVntFG6VJejcGreokMSMZYjZ4KEUxnk4ouxKP7z51SsqQsva7LcEkBfV2hKwrH",
  "key15": "MsTcsuPPc7jYxjkSi44XDtTdjHqkXjEmTaAVDchErWTKxxiJUpPdep1nDA2niDaNoF6V3gaxzDVgRqjEhUBB8xn",
  "key16": "4i8EaqzwsBPvjU2HHpyGhco9sinbQNYJJNcy69myvWZnBNnokmx5CadSoC3t3NuoPjBQQRp5dGpnB7yyj4TbJULF",
  "key17": "ATcphydwEFvHZguLzTD7UKHcY52WLTKwHi2H2hUjSKVGA9UjKTfW3gR3pUsq1WAA8ph86y9knWKhYVsrjG3PNUS",
  "key18": "5KGtKnmE16LwpDm41MDn6d8Ekpq7YLjkMeVExu8AuWr4f1bbXeJZknQMCjwmeXNxCQpAAWetwZuCJsxZMKUNqp8C",
  "key19": "2qjRqUocweECrkiiEJmXWZXS2oMMvwFLuSiwoTysJwLQA2r8XRM3zoXVFFgQLG3Ts5kwCv2WCWs1dk1dnSwws53b",
  "key20": "5m6ck2sRvQ77CZcx1ZPVcuqKGJv2xB6cD5h1bLcMjK4hxUzmBQmYG7LskrThSgymWbAaGTD7NTQ8Y9XAYRdbKMNj",
  "key21": "2ASHx5NkaELDJm8eBvW2qUfSKdLLpmkqXgMTUdGUF6fqDbryVhjeXmpyt7w5z7WtBbBhUUnminF1XAjDbRzTdJbP",
  "key22": "4dnfJe9fnFjZgiJHUaXVvRQJpavqvBJb1QViohxJ37bACjnNURPGeJkuU5pFtU881dJPZJNeimFtVbosh5DjsTTr",
  "key23": "5Phj6bBdep5TXSv38Yv1BS2yG5wx6zAKoe8RLs419Dsc8T5sKsSaaAdFreG7vAUUz8uhUvswZmBQGr7DbfFZjnTM",
  "key24": "2cNTXA1u7bX3pKgu1majhcEtxLxMRW1RnC4zJ4GhJTJN7FfbrRgAb55hEPYtyT3xBw6CaFU61qzx6qWkgQEJze6P",
  "key25": "pwhyBZZpjiUYJyfXh7MiYZuzPsDSa2gr6rqNqB2k5p46VrLdMmC8eS5xt3X8GByUa2BQrmpRYN6pRxJQYnBFvpu",
  "key26": "AzMnb7mP7DiQqK1We7ChCHKvZK1CWQLZo3SmNCdYEnPyhRLMMxzRdfXMThzbJ5zAgoUZqpJSLNR3J81UksxmBaK",
  "key27": "4QoTTq9yDm9oToZCye8JDddJSsk8ywWB2LMBYKiHTdZZqbkNvyAK9GbxGiG9hfwZxcWZ4g1zkHrEAmBnFHznxNyD",
  "key28": "4ABVssDWg4FPGY18hFzyaQjbZtxbpoBnbvNZDeqifnFQ76xWD7Yi47gLGzAVtS8qgUBdy3hWa5KucbKUcVyYuHTu",
  "key29": "3hQ4U9ddTeu1shyiqwu1EEiJDBjHMYC7wiBZ95rPrhFXpL8z1UZX5VszjDUXwQtBzw8H8zztS1HzuS9JPEWwDW3R",
  "key30": "5MWD7BCv5RKafqeJdptAS1HLoGLo4sDpuMp8mP6JqWZBxMzsCPMfeoL6hZwjTmViHjdV1BzQSC4s6suHWaoqBA7r",
  "key31": "smqMhXhu9L1FTEm8w1vczSVBbYrUfrfxePG8yeaCgnx2mBHcpJr1vWxnqYy71j3w2e8aJVGVD1e5SXVMj1iwiZF",
  "key32": "3rJBRtQLEDvZWDXezzv1VL9FDwqCxLcKPudzPF4P3CapE8jsJSKT4Ry8Y51iSWrjXWPC85EPGW5foy1bSFqGXfru",
  "key33": "3d7iVZ5nHz9VM6T8Yhdn7dcVM2GLy6YFJAfUnbWmfJjgsA5aD9vMBoEQDhwsR2dd9ERyBcb4joVsdchEm724Lmoh",
  "key34": "yzutFxPwxBK5gYpETmZzPJN2VMUcVtHCu4Bgf8G8CAEXTEjri5LyoF94XRWt9hjvWgFcsdkYTW3qgUQDqZby54e",
  "key35": "418944niC5c4xH6Ds2fv6diAtMJdznSHyXgESyxaqJuVKHWKBjcA3JN1LNzZzfVNzLKTk1dLzewb6pe3KGSfi2o",
  "key36": "4xMi7nxyz3Wd567Z87QabEgGVkAAu61CreTbBVPDfrPgBV183EGx2PaShzV2DcWZDA1DgA3eRP2BMCMgpDbRY8Jv",
  "key37": "267xoR5f2Kjh7qwfeMSrdbJsYzTK7ZBeLNGsRdxmNbWET4TVTC3n7Tr58BdyTr28kXB2kF4ooPAw7PQcSFKKarKf"
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
