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
    "xJhcFx8ixdDPSDkNKDoPivtVev5RZ6LR7jgfuJ34xXEgYR7ZNBqYZN4iNEU3NXKf1qM8LVasTYyH2JWJcUuJ5Bz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H8X39wTE3ehc3iBDb1q2xdbhYovmuCVhP7NBRGN39zrMDFykjRB7HaifnhBz12zXvLn3ojWmsBXCcvRWeSdTpLH",
  "key1": "4At7DoetiWszgqQAq3CBSVvb9A5g8PP1JtdLFTyQdhgYHoKLp9JQ6jLtcA1ppqobcL3xkuQrswaPqEE79VsrUZit",
  "key2": "3spmxs3rmi46CEqCe1Q5cmHAKLGk9KCD2DGgNKzPbS48ohLYnZGDbzcTcyVX4tyEb1dPpXC2XHzi12cdtLAu5Yot",
  "key3": "4dz8VZaHGetiv4vDhToNjosECLbcBdxpumVo2nZ889pFUPZDF9aQA4eWGkYcbrdJjRMTuNirEWNeHJ1GHeo1jBYR",
  "key4": "2hDWHA34RC9sehRT4nSQMZ8FrJ47STjqAAQG4xPdLRoT74xyjkNVBDr6bLQAuDgtXMnKoCfRm3VGfaFMk6uHzNQt",
  "key5": "4YeGeUH1hzphWTLffHY37UGrkYRUHhcKMrEjy4aVQiDCmyoLiDibrrwbrVME19JmPSEivJZv8EmZwbENZwuhNckj",
  "key6": "2Cxx6N5XZDdR4PpVp78w5uTuvD85k1w9yByjuaXAaQNnZNKoxDiwNMEeXaQNhoSZuyRVtLBqjukJz8TGzyZ8Mgy",
  "key7": "56LuXPzcYdr3BnrqZzxsT827pSz2fKqyqPCPiBgRGvsBQQXq1BoQW6UdjwHhjv8PKSv5zv8VGYrLtiZ4y5EGYog1",
  "key8": "MhkYPTRPNxE1TSPoLoKyDzWVFt68npFkQqyaAUnRZEhG9Wkh6LMdeP2pkN3FeysQgrDNqH714kPq5g2NkDbT3LK",
  "key9": "4J26kt8sS9tRaFNyUYpiXRRhgAxqAH61EGTTiG4ta9hGGkUQGf54pCY3hJBBgzGf4Z9VRJqQifGmup7KW5h8iNAx",
  "key10": "3kEM5hTVS6utGiKcU1xnNh8DkvYdKDvXHxUy3uNXpg5cw5SWLqvCBp6NWCo8VcFJipwtU3t6UDevTGKbqDbqLJG7",
  "key11": "5bTafEEc3eGwm5bHPPJiTdaqQuptBERKAx4SskAbDrbUCSY53AAVsXGRx3XT9ZYDhpmHXAr1QhhT4vEivawyVSh7",
  "key12": "5ofbwnWbhUCpAGd3AgRhZJtCCi1gEa59NS2udCKbhxTu86jRkSvDBvAWFKiCDWHLdPh8b3rGHHD7MhW5scZ8vwh3",
  "key13": "A9sc7Y5aEwVJhTLg39vBa2BTeCw3xioTii4ApGT6mPqVWmkxrQy3jcki1AeVLNm8kiG8uHUm2t8fMHoLb6HhHno",
  "key14": "3W7sKwANCJsPL6xQdexxtDzsFzjSzHvwpWdcQfuACav9Ni1oduY3ztyWAXz8iBJUoQgyaA2zYEyNZqkXcgd48yM9",
  "key15": "5fv5L1zxp8W1GzGREtS8JqEXdVBNrDxtvZ2qdpDHCRyctnc3xGZNurtYWzgCLBWDWJEQBnArttKWuXra7B7NVnCT",
  "key16": "3DJkbS4c3W6XxhJbitz8ZfuGog2UwEZptf9GTZq79eWJDJJEneP1xuXzCZbGCWGKF4NUvN9kB3q6rWxUeWNEBcqY",
  "key17": "2JpTxUmKYJzRk9PeBDYFgkbQZAXt3zAftQUakzVp53rEDsLg5x96AYmGd4YsDZmhRDjvnbV7GqJabgdVNjuRr2nk",
  "key18": "3rhLv7GugKWCY8L2UxKPn3dELsTRBZUUTFNspoExsKBfyMbRwgn6wd9BZiBHVfTUpPFQ4EHMpWH2FgMaiiTWeA3F",
  "key19": "FWuj1yZhtyWC86D5XS7LKk2THUbjov1BGhz8pYmXpsrye3DRc44RQY2HhR3fZHawKN9s8Y6UDBLSpTSYv8k4XpU",
  "key20": "3FvTkkHApug3fR164LqJczzkeLnLfkVRwkB3A8HjHjQYDqQDFCfpa6mSTJMHFcDjKaNv1KeZkhcg8yJsGTXES8y6",
  "key21": "4Jiui7mrxvobuXr4djF6atajdt8CUZrdhUqgxs8LNfoVfJnWTPfyejgB2Z43wfFkp8mMrLAvFZYUfv99QfiQi1Z6",
  "key22": "3AA2MMLDhxW9yo8zFaWRYtvvo3YrRV5KxKWEtCDZaT3ge2QsJ4LN2cy8XHyt4aTgz3HYvrGKZfGGJwCXSRbpnHQw",
  "key23": "2kKQzWsGeeWMG9ckDVy9yZ7WAWTigxLbBkmzfT4Mo6vza2GzpAmLeYxxep1CdDHRYX4zssRyHD1L7QxnbqxLaPAA",
  "key24": "5PFrDNcwNC4W3SJriytXW3P5GTuP7qjFXMm75waZkHUee3EnwjpCHRdyNiAXLtJCAKL2qrnsFhuaCdjwaDo2oqD8",
  "key25": "2MFMtnHCnrU8tEqxWeaaHnXFrdpAzxqpjgE7fkBeodb8nqxeVe69iNecdVPawAooEQbZn3zqgFoFHS2YA46ADAbX",
  "key26": "4Z5NYsT1ELx6kBDDP5ZLVFd1i6mnNZvQ23sVdqJLi1tTFF1ksd9yztGSoftp5LZQzhPaiQtFjsmgHqF93feVc6HZ",
  "key27": "3PNXmLpvZuj9HzJHrp1smSg1A58mELqaYpnaqy8dgW9yvoFNHwgsWJb5L9nrPq2s5qd2N36EgRYXsJN4tUENmqUR",
  "key28": "94XXUHUgYnoyn2MLAnavzmMxuyJn6e2xyiDpMqWng1j5RVjXK3ZTxyqhgx2ycepuayBqZVzdr3KF21HbfoztHP2",
  "key29": "3uumqAbKrmsugqgEzCik6TEAWHcwsTRy5k9cu2QaG2tJEn8P72tEfWmtm8op1W91VgLSRPGPNh8nkQHiHNZAw8Nu",
  "key30": "HuEALPXkEtR8cVAPnvz46ZVV6E4jtNASz8ebCRq9YY7QqhtyFjAgLSbfvn7f5iaPWHCM7dXTzTSKsEXPbttJufP",
  "key31": "5KmiHSebDxtmCqQbKgNB9tdPgEXX3AU4KE8sgWFHWn3DYVKb93mJN83kBLd3FsRcH8j1EwNyGNR8z4Ssoy1iGu63"
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
