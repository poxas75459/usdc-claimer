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
    "2MQeRK2kKQUemEW41SeTWrjQAjanPVeiFWiJ8cXi2VarbYj4hhSHXAqxa3Tm4R5Z8wvrcf9HG7jq3dFWxEfLvZxs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Diay4yxo9pctKzQ4hsX5bkqjWXtgTay33WBJyy3jxHwbSSJpd3EUAkqe2vQhCfRvbHac5ifi9hDS3PabVrasy94",
  "key1": "38Qa4UcFqatHihhfudNXjKtAn2aa2VFL79bJ5DTPSqfLANBZv1AtGZLr91Dzknm3eJNFdHYi9Q7Rq9QwLhXyD3kB",
  "key2": "3ZqbEs4vBe9ZL6oSXRtPgQaJ7yC4WRXCKZW8VJtHeExDmSDq2urHUL7CJouXFpVg6P4dFTdqAR7Q9mV3YDESwjs3",
  "key3": "n6xcNvVupydLiT7hw4aVXjYKBtc2Vvw1ogrMPSHprmqNdmysZBzC9ypbPhZPQEhTLuEMAsmfqU2jA9BjDGNZbxH",
  "key4": "4b4tQjwbyKvHAgvhXMqXuWZCJq4PeEbFXfoGHQqJFAuD6aejcapuf97o4GLxZdxHLRRMTuNnMdoZeDvtSpDG1PGy",
  "key5": "4qNn1n3tqTd1mANrYbE5aUikNmguBTVA5jn6qF3eARxwRw8ewckQg97NBbuqW64ZGaEdUFG6AnszipLSPah3XEJH",
  "key6": "4FCJAUfgRzemhmDXr2qYig8oXkSaGZ1jA1fd6Dy7pXf2biB4hLZY7W18nvseQ1DneMvptUk1kTrPn31GvePjTw5B",
  "key7": "2PaJz7w1ZztGX24ZHKjFtJ73SYXQa4Dc1CVGBEh1nJBVmhpi43dJyjWCSBEiWaBSKf9zyPM8QR1Z27KkENV5jsjP",
  "key8": "5H7NyeygbPNv6ZSfVtsMDG4Q3FwSSLHfiTFLGraES4yv5TjSjDGysR6CDpmJpAMhF2P54UPhi2vWfVcaM64Wgen6",
  "key9": "3JuS5UytX1JniMAJY9Fv16E4zLnQWF182mKyb3VThuSUvoMnz43PxAxjJGDVYissPoTB5EFThBdvDW6Lgort6sNu",
  "key10": "5kQZnSKU7PbnCUBTSPok2jFX73fdkhCpobBt3HJWB9wvE3g4GFCN5NZmJm56Kig3jAEexLCmPNhiJa8LtpDKL5Kz",
  "key11": "3dYAy34dCZn72E3VefvUeCArGjfuNp3aUWvnvSkBXh2unrGXTSBSyi7nfY1xCJpfm5JMqDuydVtnxxzHjFgHy65F",
  "key12": "2UpDnLJnY2vjwKApvkXrGVMEPcLGcuKocEajs5Nk7WLwfFrDDXkvkx3qZNesmnKx3hpzNTPKRW1K66wXHMXEK7Ep",
  "key13": "5h4F3111NmrbXFYaJM5G3BHRacdeA4THP4NEiyoTDvW8kzRWWjivqkh2xWk3c6uMV2YkQ8AK3r3nFqJVm2h9An9y",
  "key14": "5TY6UPhBKMU96scvpf9dxwD5qpWX64yfSyXqhskL2BNCVYgfKoX2FaaqnTJ9Pewwcn6XvAThpn8irmJhjGxvsC6U",
  "key15": "zNyXjnVFqJyH2Q7DA4sXFZmZ9YZq9BZNnLzfRWnqv2RBYVNrMtByGQnogfEjTNaDutcJgEpDVqVhvCNXUPhhcRe",
  "key16": "5mjMBdJNYUGLo3TyjJSfMUqf955xGt6BXvvZ6mcxETgN6FJPK4vgX16SEG6VeJTbMATTPugHwmAcK2mEJQA4HFDG",
  "key17": "2PvUXNXzg79BCVLt3DivJ5PhvhRDC16RYZ2GyqdpoHK2JJPapVyVEG3n9H4WqGNJGrb4XarzaYTYHhPhUrv9CNdX",
  "key18": "3NznqgvsQ4wUfEYS91BXnoo8Cu8czjAKS6U6N5Dbmn3tjFWk9hTLiAK3JLS7WipeXBX5CWb9M8GyHp8D41gAz5pG",
  "key19": "4NDxJkKrkvmMSh4aJ6mGFKN2Doj3funaqUZRVzUefxQuddczuKosyTuZA8c4PPeHSphen1bagRXPFhXKmVXkYNci",
  "key20": "4LCRiBbPv74deAC65YiBcQRf2UcmLGJNGjaU2Xesp3vuQ84bJmtsmYRkGj6Wwibc1Ch2zv9xVPpRi1D9jYLkNRMX",
  "key21": "QZD9i5V8wtprnz6G6h44HHPxUtUAcvtyUcURtVpPry4u2WK7mavjqxb1MHnGyzoMCvHAAe4G7ydmExUFkKixrbe",
  "key22": "2vkCgRtwG2K6NwEdNJLWtC8teq4qZwUY59B89k9njmhiqU3Dtyk1HnPYFL2QgCvDKJLW2S1ZmXNETi41oUuHPw8g",
  "key23": "5LTcqAmSNrBU2njPAYSeyCPasDpr1j57RrxNgXCw7MpvtN5iNKGerLjQviEpz91HhCavbmCkVTgZJRHXYqWpo1Kc",
  "key24": "58MS56besixPCCF8o4Dh2LvPNx7yS4P8EEACyubpeR3CeZEtjx2iGz4j6NG3yVSKzXdTiTnUc2CmC7oJEZENb5zJ",
  "key25": "B5WBVYthJkM223JtDC9FZPLi9wzqgkkYYRFKC1GceB7x5gCtu5cMLAJ1HAVo6h6xfhUUCEJEeYvcDRbeRDuKFhA",
  "key26": "3VsjcjfesoeTTb1upEExJ6iFpvQAH395sKy1KXqKTypnuHMGLN6yQdwcSaK8jgoR9TZJ3AYeeAoMwVdQJCiwC8SE",
  "key27": "5D9o55iFTJVYw4kJp4Lnst3VbCHHggqf83FqjX6tXNwgY7tsL7ytq1ri2Py9BcaLJb2QTPUnBr9YqPkbspWkvr3W",
  "key28": "4Jn7C5dVRbt7uURVnQhYd8LtbS9bg3tZs5wgwE1GJNBL4pbKvBqkydT4Cv9zEUezfR9uSoJohPuYmZQBWttKhsSC",
  "key29": "4UEZQFP9UXSYo1Dur5KXAzWpMpMHJDmyRWWt9ht8bhQYcNZNutW5GWzybZHuEW4yx6EUGRCnYYFn91kxQRtU837W",
  "key30": "5upQCY4GXAqMB4dXM4LHu2GwwZ12vi6hHktRsRE39i7ntasxXHoWiThU9L1TPaDnxtgH2sbUhcPgEG9X5tvPWbWW",
  "key31": "3YxfS36DQuHmJQqGsT5mwztPNPvfUfagvzh4JhH2TzvEzFKndE67ui82Vc7HvcUKdNCXbEc9zXdpZiRZ385LWAef",
  "key32": "5cao98B4vfgEJvE9KXXe3C3sb5taXzzPvpWg5jixAs7BfrHSDkYFrMZBqd5SFWn86dQpbTPpw5EbtAZJWhwtRkm2",
  "key33": "2dKCnuLhbUsBjudB72z7DeinYDgHTS7Ae3MQaKRrGfm7iGMV1oBwMtwSAL8LoU5i9TdEDTKEZoa6DgiqEXGCUWki",
  "key34": "4sjio5KyE75mgtM3FixAtyFUu1gsbYQoRY9d5M9CwCbJ22dpG7XUUrnDAtcW5pt39v8QKUX6hDWXs5G9DZJhfm1",
  "key35": "2GyxemhjhKba9hKvgBeymZJR8bkgg9Zcv7NRtxZuGQWDVfzefXEd9TrtEAL95rUKrpXb9WVzPJUfWJeChFQA6qAi",
  "key36": "5WeiodYF2aQAhtGKeY7hLzk1NuVxcZH2hry6dH4wnVgJ1LMoLLUGwwjy4sUbpiyBDchEwL9zCbVGSnKr6ZcL3VuU",
  "key37": "2vE4F9xpk8LwfEXVoYHjSt4RbzfJRQcanhr3h4rQF6Zb5GqnQg7v36nngEK5i14sRkfhnYE2xoK2dEC23keLtDAg"
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
