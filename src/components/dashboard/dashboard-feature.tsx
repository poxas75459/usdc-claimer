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
    "45Qzsj7bYBe7TMmzgNKzKxTa5cMwUnv7cVqdqHrGU4GoV79jpPySr4sMRyfk4gzJhEq4g8YCqaJp8WfwAwfGEWSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zYb1w2HsjnNPMAH1gQnFv3SqdjRsPUEMtiSc5kdEAawxmdMcJ8x3V3WJUkdRdmJKsYBiiADtfBrUMpD3AjzqF5T",
  "key1": "3tM52HLHkcn7qYHCinShKrgDcUL7exNcSED4hJRUYcB6RTUCavpziHUP3cZaT9AXiHVm4nPZiQoacHgARWChxkY5",
  "key2": "5zMtQeiRvoMg1hc1m7uTDtYjPsquASKC2pnkTRCymgbkQyCxpZr2CMXqr4ALaukc84zXaNMz7VbxZuQjF4JhLGYk",
  "key3": "2RDYF7Meg979s6NBeqNVyJsRzNnKE8eo2kkisxwzv25tieHaTimsMN2RzfSXafCwZ7D51WWcaF47sVtPv4tfHzBD",
  "key4": "HKPSRRuCPABZLrZECNffXzrmxH32eme7TC7CjreVMJNYDojt7qTJZMEerSv6wP9WF4FTZCAZgqaS8vZy4962k2R",
  "key5": "3gVUesrCdapRdEMxF8T4buZi61HKAGaz4TcY2h5ePLzNafvyp2pC2dVgdf2VHA8avRxw6DV8SvevraXcTLZpBDGq",
  "key6": "eMDUHiLpVWSeRvLtVzu4eB2in3U9fZyJCgKXM3PfAmq3oT8B7xsJ6wdY7MTEYZZ59zjDQJBwPK4EAo5NRfwKSX4",
  "key7": "d9yHqapp781RCFPNXZu1C2GWpHufbAkAwmBATKKyZGJ1pHdW5WJumKF4Eii1ZTBEjr6KRKad9rZ7pmw2XfGtE5G",
  "key8": "61xmYV2UMJd5mjHPVXfApU2LFaLtTEXou8YUazEXBxpggWa2QM4RByKi5kwzGoSbfmmYzu271YbDqqcWWyEEoMCC",
  "key9": "632BNJdNiwV28e5Z4Md72BRgcGW9jzrK4PB2q7oMTAvrqn9DFmgZCKZKtohYsGKLndf24WczsdHK1uvkBLNevtu",
  "key10": "5TP6z6HgYzDKjbWZBECoHxPRpZUr7aZvScf4p76hxbTuAPBDs3yvFusm9ovcZTa3ahxtBzhKzrsBoFQUtJC8WQbb",
  "key11": "4mYi1yNDqQyt4f2VFWJFGmonM5st4YUS2af7BQE2wViywGE88P9wMVUzQgGcAiaZJErjzggZyNb1exV7n2zJKEfM",
  "key12": "3Xi4Qo7GwbtYhUpqiaVsKv65ZcfvcKgR9pkUNwAsUADS6ndiTFW591r5dbZ3V8fnwmrgZiNLvQzDke33ng8Axneq",
  "key13": "211Z8bKdzLdAxeGZD4qm5Rr4i2dmtAoPbXaLQsYhhrCnJt75PHd9rbbikex3MLpodTxyPD94ZceVkHkUYVcShUqV",
  "key14": "vRa3g3sawNsetW3QpisG8v45N6Z6YBuNQyGoZTaPL1R7bRQULfZqf8hv1LcbyPXpmY6SVVqkN1k2kUSoPnedLBu",
  "key15": "55w4frjaQTNhhZjjLVH3tymmNKg94sue3Ka2a6ozdgDiBB67pCZdABx7kpbWgvYnPhzRycAjXCyjEvJa3Gdd5tnt",
  "key16": "56JNmRwAzRU6BQbGESKmHwgVJZmQ9aYo3gVFkqWvqFEtyKkFjCR7oojV53gxQJa9MxSW46uwQswu58e8w82kaY9y",
  "key17": "5oxTfsViqEeGVdYGw2UZLKP7YdFWJrW93z3c159tUFtbusmgNuLWzxZ8FMo7cLkinfELA4CLaQihj6k6hJdFdZ9D",
  "key18": "44RZBdLq5ofzSJThK6EZHxTn3dD4a79c6xA7bPQhRaV8BTz3Ktuqk8i8gxrxjiYEFLcWKHjG8pwzyMQZ56ijNCHu",
  "key19": "2HJideyYp8WBkJpziqfEKBmeqSFk8KL71nbo4G51imbr4DpGSnnVVxD6i9jgd42HEEjgxHtmn7LgBogY7A4UnNgj",
  "key20": "2w83DDQ5oDGm8brBqxf8KHUfrvwsNiNT1P7vsXf7BE1iaMwa6ME1ffYA5DytJK25vX1vn4wqgNx4XmyHttNP6iyn",
  "key21": "5GzskLGm98vH9tRfT9tFEJmv9pumxEkgLbwxAjZpsK71cTa6qXp6VwDhD3cyn8EtKwYNABpQAyqfjvv5gPWnPZp1",
  "key22": "15AppH5ztDzzUzpygaJ19uFSHP4xVZhTyeLKrChCzUcDtPehtusJ3qkHyKhv1Mbc4hBfaDetKwoUJepTRFGPDFx",
  "key23": "f3b8jymcUKracWrc7421wL36KBjM4VorGyaurEYVpAXgSNYmzkX7qN86Z8xCDiji1V5Rg5ENAgFRLL94PFKo82H",
  "key24": "QqS6MTdBtpqWn1Zj7gKV48wghSuGaHNLRM6J2v4CwPipwpa1aZE8NAUsQbiAa1YEmBspdnFxD3c6dzzfDwH3aYH",
  "key25": "3awLBFZPqQjH9o86iriW6aRqjL41x8VKVkJrRFvypuCLuKg4D71WgvGhnYdZmBPUmQW5kHG9rqty9sESjbA3L3gS",
  "key26": "5x119YvYgoE4aZe789XAe29c7U6FWhdsaBy9urxn5NAGBaAA8vgDFvz7GzJC1LFygFYrsHpMEzANdrckxp6aLA6L",
  "key27": "2m5RZSSBR1GK2AFxD7NkE152pfzavgDhuqmdaHJHtSCMMpUFruCNTwE7Ymhkesc6fYnJiThry48ha19mm2DxTwmx",
  "key28": "5UdRxaAW2NHyhUvUBrj1DYjRG2aZ3vprzam4ffrExQMvNDX9hgfTb1ts2w9TgCdEJB9e1yusJ3KQkqsgXmjP6kFs",
  "key29": "421vLXsFMXTVJVnpYNEQRXXCx4h7duSeKeqGPDYu4zVDjapS5bpKU4E3yRtTcr5qrSWRpkNTbqfSA9QSFUckrtSG"
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
