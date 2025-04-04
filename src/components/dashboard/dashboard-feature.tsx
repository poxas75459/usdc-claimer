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
    "3iStTMaZkthVCc5k4RCeX5wCeDZmTDUitnLUzUQuofXUJkenVGRf5UgwTapf9HrDtVtus5KhUYjkeDZRC8rETfA6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3w4UzMippKuKXW7Gg8dLr3VigCzpBxHBcMR9mwaxYVKGPUBnCiusSJBKQQAm8jvMwfcsibxS7GNy6pEjuce5ZFhy",
  "key1": "568opbPbDq5pdUbWk4oG7NSUms5NWbHRyj8vHXuQ4KCnAS29wA8NaCSJMdhF8r8QkLgxbji6hWbqCu34PwFLGyxr",
  "key2": "bAxXFTQdzEYVKbcmdgXH8t6QaS9tHPwtgqHxoxicMYtTS5WRseWzQPwjQ9nqjbJvSgDj8Dt5tQaQPuNWkh4YVoq",
  "key3": "4ZPVnEbEETy3r6R2E6uWQBZU1WJvXmDGLh7o5JLXBgqSC6ZbHs1XZwWok3xVmjx1ynzQM8JGbW9Gr7jirK7hw98y",
  "key4": "4EJsV7JzZBKRhNLoG7LG3nJEVAKw5maJenGTdakM2J3E6EY2e1dr6d6mV8Z2dpdqa9NkqFhqN8cRyNN4Avf4x6sn",
  "key5": "2ahsDv48eLS6nG7ecMxyXXGQiMLw9LkKc8U3DTzGzLhxBZ2LGYqMxDKbGKxSh3GcGMKMJdBncoktyem2dDYrUhc7",
  "key6": "2bQKC4FvdcwAWu5bxgFLnBsegbPQofry6QoCyYCMM4bo4MS8yL4jQTf9xew4Q4dxeLVbmpZat8WtGSEByTpGbjDC",
  "key7": "4nZBpBR6NUYG2iUDgwGguAsAc7N3r5eLeGRKpKb141s42ySw8fora2qqLPhn2wxbUKgsPB9jgqCtk9zwnoU6hr65",
  "key8": "57cEbX4iCcBCGXTfTii98yBUgLxJW51tng9bgghbswJdTb7u471CM6UtBuQ1t3nAnmWKxxAAB5ybTC4QdQWUaq7a",
  "key9": "3TTzt8xSTmWtkGzjWoCy1DMmJrLTPYtat4mnZzRjzoNsa4BzpSfctnX6d81Zb1tacL2Wvv2fDuX1UT1Ms3HXKVsQ",
  "key10": "DhmduN8qp8zv4vSUCB7TifNfXx5s3je44N67XAAUyGt4fQxYBuApjAK3QutnXZhZGt2y8Nsw7a8mXXsmfrBuA1p",
  "key11": "2p8z7hrjEHoLNyTEaHT1VyoX5XvGEwx997mmhaKjEPAfFHu3AtTFhc8KRLpYELQC1WSmb2vWoPfXvhKMeEw2DNsw",
  "key12": "3mMvPt7esHt3S8eu3fDqVkyNvuTrP2ZmLsQyMCTYYznEbtnLeiHsxrVGgR5ZhtJS5f2FysRn3jDq2KLhGdqjtTa2",
  "key13": "EH4oFy9H8ztsB5ahYZwVhVYu9Ep9D9AndqJJraYYRk97hiWNJj1iiCTybC7ERAg5MuhcR5Qh2rWEkEhj2PJpuni",
  "key14": "5S8Ny38FbkUtWvZ9M45S6VsBMUjPomzsSi3WjSBzJePqkNMGRErLtrQL74vchQqya5ttS68hWhqpALt3JSMBgync",
  "key15": "5vJYuf2cGj5qtj8RYBGaGGLSLdyScgnd7FoEpit1Zyq7kKLRFwoVhSXaBDYHdQHjn1bWFkx2m8ExCDF5UJcMNKdW",
  "key16": "5qqveBBaeSKwA6Bzgk2aZseXmD3gNG9Ce4pabxqy8zuqbxw3kWJNLY6pFoJPQrUnXKp2BWmsrGvd3HEFi1So4rU7",
  "key17": "3ERDYLAfKZRMfVe9D66iASpLVww9ndaRFzJYVMfYnEpjFP78CMm7DazxwKR8x6JGMVP2vPNEE2wPyJp25SnrW4mE",
  "key18": "6xMAqoKxQh15vhMCCLBt63VrD83dheVcD5DXWsEjmum6BnJSk1uveoqntgKXNfi4npZygwVNDSmUj4RWc8S8tfL",
  "key19": "5yEP6ZTHd2qVRQm9YgN5xHp3nuDGu9ToWn48Zj6RH4KuVkGLrrJAKeA8Zcg74shgPmZsQAweosdCsuVtb4i2CmuX",
  "key20": "5mcihHxjG6kyPRJ3gwoCCH6gBPWQMqpnv6VR9SW6XkxQVwVzivk4baLu34ePy39ZZo8ykeyfNRURVxaPSkhccPuR",
  "key21": "GeDEM6fuMXbc7oggwhxCsvkkEkqxg8wjRASaKAo4GUVWbrCACaNWWsRuDz4QF9iyvsgAuLP5VVHKBt2TqsLo4W6",
  "key22": "495qtEDxzXYivuWYvpoKHak14MwcSWQUdwwfzELKYTqKPSFY9kCbaMjtmQaCZNyHaJ2DAjVYd6dRmyjd1pE6FoqU",
  "key23": "4YFJjuQnrG78x2VRytqvgmUSptnxsVvMTYcRGVEUJ8MKhCTgPvcGfPxAryTNLFNaei2bsWJQugJTpUuipLQ297Wf",
  "key24": "42aYwgSNnxwyzFuJPKTHZ9yNpyrnMYgLk9cwugkYU2pHfhLzwe3MNVy6yB2oFiUj1b2LbdoUyFVRQLT5YARvfstY"
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
