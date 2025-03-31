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
    "FTgNaRL2Jgb9xnebWXzUUau2DDtkFZCFy4Ttj8LEL8e3j2rKrqQJjvSbweR9V5Jqrj5Su15B2cMiBPYsfF9CbBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gmh79K3n8TNhYMzoaCSBHbH6mf9crD6oxqKGTc4EMzjbxtMsZZzVEDUL2m4YcN6vU4w837jvrei8y5T2hN9eLpV",
  "key1": "nosh213DPnm5xhGQVi4hbWvJ2Xxcy9TKJ8d1pkBANJi8PLkuKCckbs7NAxsFeeJWR2Te7r6Gb9Qj1tEMbBepoUE",
  "key2": "2rxPhKgCKcexR88C2HegziXrYFmUBUVaXuqr4bce9kr4o9cSBNvFYDDUcKXxwxvYDzB3kfsAt9QFzpQbmiaV8bhU",
  "key3": "3uSgbxHRPGbjFNLcMmB4G5raBEaunSN4H6QXjKRHuzmvW6Bjft3aaiCkgCxd6rtuXBKZwxDAQGw5ajDZUu6s6Y95",
  "key4": "3nq26PskUd2x7MPup2wjz9a31AyUnNUu32yEUYCsEF8WMsQnwux9fitoPaXhhaXKbmpZQRGxQJczQvJJCS1J5DRM",
  "key5": "36ag6RCsyjC3wPbAoEVomABCMnYm3DUKyZdDfmd7L2VxZJ3k2YXPT3CaVcyjA4cFg8SX43c3qmfZNTYPJvUR7mhP",
  "key6": "4BtAtgYUzDGQWEx98XqDWQErc5H2HGRzbhb64BBzBpHjtNd2PN5TgYSvcuUp7P1hyM64GpvXJSM9y3CJGABPaZag",
  "key7": "j7v5Vgp7t8BKLeVVkxxVGr2C9vfvjiqiSTNyvjmZpiYfD9eecQ4PR8Fxk5i2odCJBzXEdaCx913NFdmoFJqn4Ud",
  "key8": "3madSdrvVjXzSU9fphheirAs2RJveUtw51eov3JZxqfYid5rV7yMXnBRENyoNx5ficSeeVXwe7nn7DaNKLLzSpEY",
  "key9": "o84ZHDk7iRrjwgyM95o9bc9T1KMyhY9YwU12RisCGPfWCn7nnEDqryGaHpfJBbdmnPkxbQ7ELmWjBenpuepkuZW",
  "key10": "3B4Uqv92wxhhp9T8ZmTtbp67KZ5HvahXcoDEkXYtXra3nnftbnn2stMwqLm2pppS2N6k5UcvSGyFWmcxMeMkQukS",
  "key11": "4Se1ExNeTJKXGKnWvoeJZBeCF9gX47R4ZwJoSBYzZ2hbwtNtD48KiYDiTqtviGACmgW7sG9ksDYp5CKT87wLTJDh",
  "key12": "6UQ8vk8dLbGuuHpiFoJhEKB3wAYvhzSN7UEPEVTwUMaSJAyp5NPinXuXkG3ZyZWVJeAAq67wH7Q6zWMpJwg1uZV",
  "key13": "H4TbZsJFh3sr3BSWed2SBoZdWEVAtVgZf9JdYxQsZ8oHuwhztnn93txtWxKfVSZWbujtc2665T6WNSPyPVc8B3i",
  "key14": "37E6hAvysBwwgkyWpLngGQWZixVs7onozdSLEPf6YtwNuwbE9eH9ZRU67tM3eLvxP2y1mPTcbrdDvUWE96LzRTKM",
  "key15": "3Z2vVFZrPG7mWdm3Yjsubij23DHGkKkX4V2VEqehicHcMy8iFoQLqrDHmvznCNKTphwqeAqz5ja9JeJETRhDDkRY",
  "key16": "2Umt6dwq9tUXXCK13qyqfAgAQtZiAc2Sx1sQyfkcEvgDevVJxCS4XwBL36fYvpsffjquzBgGEMQ6zHUE5yArcaRF",
  "key17": "3R4bMvWkwJ9kVWZmJ4XMrr7zK2Xb4vSWqFKPeeWJz3YxW9sh8TWtBPYWTNyEuDtqwW4QqQ6ak7fYVj7pEHeTdG64",
  "key18": "2LERFS9toSSzaGXWAdkx3Y3B9XbM66EDH7sAEpjVnhV7L3opZwYd13BcDsoUvDCPMUYMyVW6ELUdouV5LepKQn4L",
  "key19": "3U4QMLKhpvADGnh54j3KMEXA9PrCBifAmeTEkDs7nSK2ferVGQpifNv3HWNJUySdwbKyBVnTAhRRB7Q9bWgWBdve",
  "key20": "3JT7kZPxQ6SEbyDo8opZ74TuQN3PoxLusfYBhkaLRkNuMwVQpK6A6YjEmh14Vjk5L3runBYczhv8PBqA2iaq3BkA",
  "key21": "gjdtYCGms23hT92YQvMFQX9GVxDttte9FFwfEoiMLbwttwBkZd4WkxkxFUoXHbbMxXk3U9n3qhnuNNoiq4YDRLc",
  "key22": "63TWoZDiHvdaeHF2QG33dVuEKE32Zvvv9EKcyUG45Zqq2GZ4Zg5TBDRSpNUBPvVaH2er1RRZXDpZgWVGrKbRgoUR",
  "key23": "jFJdjm2rmV7mS79TWbvpReq5eSrdcr3WKCTq7XK3i8B7NeZg6o1EgrHsQd4TV8DAVTY8QMCzDxWdyAW72thSVni",
  "key24": "eVhRHqKRSyt8yqr7QBU8ibXSvfiUDK2SygVkp7fPSY3CrbKPtNigLDCDfLRKL8CKYMxMLvaidhyALuopkRkgd9m",
  "key25": "5KLuSHKgSTAgwKJVksQ5KSa98KU6CkTJHeQfr6fuh56vFvUtmuBStX232rbS9vnwg2JUq8CK9hE4D6z1kfSG63QK",
  "key26": "3Fu4hhoiG4mMSbDCTd58tC5ZY7vYt1fD8qoqGd4cKidd4LiFLEvw4EWKQLchpkewv2pFYZjSdQ2FdSFkgFZU6JRu",
  "key27": "32n4kGuXz7rgqGLuL2bB5yPk8M73ihR6uMgHh37Tt4dt8yJUfC71zyDkqEDQPMx5cgojUJP6xMz8UGV1vBtRjgLM",
  "key28": "5HHuz3DTEQQcCVVah55t69Mz8DLTF78D9iCX3SA7VcDSXSBBhPqTer7aCWN5D4iyEhNve3L8mPiwdaMPhGm4d4Pc",
  "key29": "67LugjPjHsdb7G9gDnppr6Pf7MRx4f6jZ4f2bQZEhqtuR9Kd2njq3ZpZJCuZF7thV2wAoTiFSQCyQ21xPbsCEQ3h",
  "key30": "5uZLyV7y3UxkuSsrHYouXeU4Yp8A1YLQvogRyeVQTu6k7CpHaeyncQMeKhMUmgkDHiCt73dpaRtVeM7iVS3Hdk6M",
  "key31": "YvgdzpPimgYx3ycvXUzKzFaz18tpMZaXmP6xguYgrEhguModDJgXPd3AxENJG722RTb6xsk7jmTxvjifDgkgaLn",
  "key32": "58794Ap39UAyFNFBjecNn5XXfjyVoJ3ZhvmXrxEH529Lyx3tWU9xEFqBZdUDcY6dFv446tkP22bw7qKY2mV3Uzz",
  "key33": "5jX78VZUfywGu375D3ztJbuvW2o1xGdqMickZW5aAedbXLej64sYPHDsrgCtepMGVzfY5yo8eV3tYNqMUZUjRr6h",
  "key34": "5ofPYoCCfZUDCyGYiZ8e9kBi1NevfiGeRMfbzfjLFrPCqLFe2EL2qnKyAfNUWntAL1121rGwCcoHpYRaSLy53zq5",
  "key35": "3Pb4ff7GjMWcRiVhSw765hNx54zD1S694eD2b8pVgFzDH1FycqsTeKy6qDNNGxWw2iE9q9agM2vTcavodbWLLjan",
  "key36": "63Jj8PNqopV6WpNq47BxZYrLx73jfAmgFWZP9i5ZdwMYSomWGWmy16KozjSnXHnmfdBoMS1DoGz3X87Jpi7gHRha"
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
