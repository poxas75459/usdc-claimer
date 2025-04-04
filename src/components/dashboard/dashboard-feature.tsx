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
    "2njjNiQGAuiTcfyYbKWXGxuvzSSGxZqy14i4BT96ceFPZqcaG8AEXzWpbwEsJUyFaeR3szVifNyaZsVAGTmQSSan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UDtLp62JsqRAEgQi95ZXKspMwcPiCTMmc3uhdv8MsTHUs4AbV7USikNqv2eJLtqSrgCpey8KTkJrVVGCAmJeX2p",
  "key1": "4DjMtAhaftBfijEGPk9GdAngTP9nKKW2MdHBqjoH1N2wvKCr19nmuV79K1r1nnmhvfnzxeao2xUzcsPZSosaHNei",
  "key2": "5f4iPgASgFw9JdBZGBJ9fYuL2YbxuxuJULCaxnwtKeuJLTdCyKnsAeb6GsYrkfQ9TyZGrZ4e9SR9xDUucGNAN8e2",
  "key3": "5TcSxerhEmuKPYMJfABcZ3aM5UBMXdeQruNmUqeivMBGRiXGEBtZbVbbrNDcU1yZcKeokoRLA3Fg5K9YAQGmU5Ho",
  "key4": "36aKaEFr9EXUqP8rcwvmVmrBzeK9p42WzGAWkCBzboGn62pyGnhvRUx1P52dkqADKWXUKuKnJB24UtwucXNomCbR",
  "key5": "26gpyHKMmEwtCWHDSMPtLWXdPfUFG5cyQHc8ejNwBnPbYAkq2eiWHZou7pp7vUHHRGwFGVXJfbgTULF2D584B1Va",
  "key6": "2qqp4hAaHeAQypzNQEVXThEQURD9PHc2HzVQxDna2QVqqLHZUM53zZYtfZJmxN36TWDrD7sxJ3DTZUcUnhJ4ZLLG",
  "key7": "4CBuyswj7qZr9Lm7J6rKmbEPNiyAcyCiokT17aeVMoogPyurAQjNRvSHhbp9oyHcAK5BmVkAMdgr8s8xX4nD5THN",
  "key8": "KGZmxNEmm9UhAgVVor9oWLbSxsJuv82zNoBaXZHN8PWwC6FeHkXyJoPBF3JsT1zte2UejhkdL3nfY1jZyThqqa7",
  "key9": "4CyYbaecWWRW7tdBPgs9GXWTwx5M5NGjQgFoKDbZRefYAxz3h4HJ539pnbSiSoLdvhSqysvVBK1PR4EsuGpoBnS4",
  "key10": "rWY6Lrt8BGqz7jjR4ueTjWsJvUbq8JEQUkhoQ6tZ8oiiCoekYvhLquKRWKPK55wvsPRek8ijy67TCsM92u1nFMo",
  "key11": "2jmVVVVKPYuWJaw1oMc75voggvKyXE2x1qtqMxRJGfLiuP5pE3Mr8VuQfBB3q3NphQGqiFkPGw83g3HnCW3BsNNf",
  "key12": "QbgApmz4JqBqFt5TEymuTAu19nmVobFwWXmy7wL7FCoFa81CxUVHDpUnqAwEegKdyDQLQP2PT4Ms5EWU1HtGkBe",
  "key13": "3gzngCLbTTouw1vc7HbY6GiMmH4N63SpAYM9rcMd1nSGfSnjy39ZUQijEry8nXUpGR83QDcPdYbSQGnaRhat5yFr",
  "key14": "4SpdBMCYbZjpXdYWzTsnTc2xJYF8T2NZzgS5N4d8kCivjFYUWksK3Htgdww8DnZ5nfoHiVajpTCHoepNFPfjrGzQ",
  "key15": "4hhphwhw4FDAmggvnGRK6dY7LQAJ8yEcGufmEQaYoLV6pW42goEcziubsrZPobeKTVwnStm367EEa24T7wp3pjse",
  "key16": "2qFLqXpESuNWhqHQbdWDRRhLVx5AoTPSX11VomP1emJc4BtQjhbZBKZhDdvzx2EVQwsYwp8Es4CD5mGHsVGZBVFg",
  "key17": "5wNxdE7UyGdqmFhtovrQvscPo8qzLE7PohLrpKMXj87b7uRem8bvxL9gSgcYvkgwNxxeNkYEirkGfNjLkzwBf7ye",
  "key18": "3z4utqAStrXMdTeS9nrq14JxUqXX1Dndkcg7PbaRrgs18wa1eEF19LDSHkCdECMcVxWxehTZcRorBLY4itsQx4Zc",
  "key19": "2bvvanAPgZHYhLVEfg7MjxKg1bKDKr5ZXaG73qW2jtGLm7i1wwssBMLnfDnsECH6azcDhRiJb3u3jUddugzifNJZ",
  "key20": "36qQnsaVFz8o4fCZvF98cvDffstPDp7QjgUJwJgK7Wocmgq7YVwJRNNSPPbDzyWYBEeDePzLspyQBAEMw9i1yRcw",
  "key21": "5GiqSM4H1faG9R3DiQ72iHaTxcJrqmNhdSpdujXirQBYgHsPrusZ1FtEgFzSrRisVhQCG3hMUwE6eL2BaC81JtyT",
  "key22": "45RgTMvc2mgi9iPxhYZcyCbxu486Ajuz5GXUVahbX5xV7xjYZcoAkcGrqHpte6zn3NvQ9qBbjD4fxRmRj7nURysw",
  "key23": "2kA2VgBL3KfUtj4DxTBzhJRGJB3dtYkfoHn6vmmWojNhBzCKYaovH8Dwp5NHVy4jcscH3YvwKkhcMdPqXRTxGP8W",
  "key24": "46rwVi1DCu5KCpUH7pAc6ciCrygbco5vcTtRXGupSgjSoffsNcGHa6RTz3PbeiVuUoHdQcPaKVWvAM7atXoZEbeo",
  "key25": "2wJ5ZZLsaUYr6TDBcnMmeoRRvLyPCZif3L2UBXSV7DPnQSt4MTHegNhb5SHZipqw4NBrVczzbzZNUtMP4fWojr1i"
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
