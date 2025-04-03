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
    "2KnHvenXXCUka6bwPoH9iE5KN7Hsz89ZLZvF1u6yBQQd5KAFkPwipNgy1wEdanAsHyM7KzYJgiPL1h2HHf9vWHBR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zvivRydCQvGXaBx9tcZ3CRUYkhfQNfh5MLcny1wexpsqNE55Nbp7mVuekv9WsVDWPn9cWsPX65vpqRRhS6wNS2h",
  "key1": "4LnMiNrZXHa1rCUSDdRRowJPq2Dn9xGighX3UUHHtDzn5rGHXXw28Mk79ZARrSMQeKubkmL5okA2txt5dLoadzz2",
  "key2": "T2MwkLoxx59Qchsn7sN2c2Zeu7mPsyrGrGQW9mTHnnttaB8Ld7MAPdTc3tagyVkJbYUQrQbcNX6egKWQovrRosR",
  "key3": "2rXoUtuPaZuvrKeCzDvJdmNECjbK5jHs3V98jdXEyLo24VihP9DV2UM3CkgZG2MrpUG3zbfae9mVR1mpZhMiQiP9",
  "key4": "59Lr6CDxiyji2mEuXagGaR6aML5GRBmAcmGwcztkmRmVqECN5Ca2yoHQx3RnAonPsMWttkEZX3BFytsjm2aSpZB6",
  "key5": "2ERWqgEqWY7QPJnvKoEGsq3kNSK9z9uW2uVpr54EUfqKtAmG1ipS1NTm6NUCAMofnnbVEVUX7DDLQvowghu7V9i3",
  "key6": "4AztvazC9YH55ecn4q5izih2kd6NGeoZkYNyDcNsMe7ghh6dzpXGZTx4o92VEsCbH4wi4bvLiQwHtfXaDYJCEXLc",
  "key7": "2KwUTbFbMdtBkggnBiWM9DmB32x2v2F9mBFjMbFmT4ii5hAHJojvUX6RSirGsFZ1pZSX3n3rSPZFCzWdjFgLn4A",
  "key8": "5VsKH1NNhEd6xLKFvpK4D6i624Ae18KghqVcGYbLgK1EA6tYTPuyxvHoceso5kEBg913uoa8fU4ByhHv39ftSrPH",
  "key9": "5CLuYon1Q8QLptNCq3TNyrcbSh6RU3mamFkNa5ew9etBfQFWhW5ttmdxqHoYiYVfKm6qLhqRmrdh1XoGwU9zDKji",
  "key10": "jUBy2sy5cSm93EMu7XpjdgGEoPK37X2kALRjFsAkabe5VP29B4cLoBHn6XDeKxGRxGB6cuJGtJArTz1Q29nJA99",
  "key11": "5jooUx35dSCQLDk45pCiwkwpKyYzPVq5sHMYxXGqeLdZ3iFJWDpwrqskPDxZFHCKjwKt8cqEGF3YsH44VtC31D5Y",
  "key12": "45uePVG7SytDDPbSDbTieNfHo7P7kV4CiuAP6Gxu9hkSSU14TzS5WZx94CKruRGaBF4RdZZhDepQAoGb2u44Psmk",
  "key13": "2KyUU7vZcBZzfNbVEvMiQ3fFBK6SpzByWWNAofaKF12kbHwQ93gsaoMgU3TAMDdC8veiE8EimMpbw4huzmPqPZQg",
  "key14": "4ttAMH4VjaHMMA2DStKofUeRZPXYAHvcmXcN7ykqioPUYQ6Eu3A7NPEmcRtHyZ6RPrnCddAMUZAkzxCryNe7WRU4",
  "key15": "5VPce2vkWTTHf7Yt129fMwrE2JMe3Z9JqzbdbsxcqjvV2yGyNqidrM4nsnCSb3UAqW58WjTJM3f9SKmz6HJUrrCm",
  "key16": "4fWTqPFB8tw2EitZhTLevnMsjwWtKv3vWbiZspRnAQesAzKQkx8rBvrrPZqgT1NqFRCKom47FCNoxNxTw6dmHGrU",
  "key17": "2X7f9NChwpszWrsKWwqkURzcoBSGjpKCLnoVP7SbTmQoRWy7S8icMG5hNuHCsExLNbbE1bRmepvewT8gJXv2P4wR",
  "key18": "2bV7Ef1cLANLs8P1c39Gynq5qJmU9yKH6ELvAbvqDYM2cJtW2oBjSBAFkbe8HRKntMzAkVqfKzJPzD4J5uKUzxwH",
  "key19": "5xufFL36ZNHVuB4yQCkhUkPRXzikQrkcRej2jf1EniduYiF9uyEViRG54DkXTonPviu3qACVRJ8xzJNJ6VCm2XVB",
  "key20": "25B5rf1RHWdqSTuzcZcggqKVgqvTiCqsDBajZqSh1n9gdyh8fXgEHdotXHWH9rZ68vTiVy5m7z6azM4rQVvsT75f",
  "key21": "4a1NGeEzoFeewFFHBDue3qqjRKZfSu9fDsCAKrAa7HtBqDSbfQHNMn7iEK7F6yyc9oSiJDaxiJ1H4m1eYj6L4K9b",
  "key22": "5H7MRy9ABEhPW1NXcxqxFVLPwcojGvCmzPLzatseu63jA9ekD2VP7qSnEvCPFqWLwDrmmSXGGM835A9ZoNzk9Uks",
  "key23": "3YQkZ5vJiW21GDRaZ4w8yF6BssqsNpYVmmvL3dgWeNWPu2sgEAmEduQ2E9cTp9jzRjYDCHtqwL1v8cPFRxZgUKGK",
  "key24": "3izLw56E31mczTW2uwsEsRVWdUyqmfp6tZAMzuemSD9ZXL5btsgF4r9y5RyzPn3e6rikyXHULyjozU9no6wKnz9p",
  "key25": "36uzhow5dFF9JTaa3bMu2nm6BRSEwz3w3KJ4BHbS6iN1DHiHmh9Sxizxov55N8XPSSogsDe9WWzx4ock1wNRhRSL",
  "key26": "3T4PwKZRFRbVRGwmwFp3yjrWLiDARTHDgyPwHXB9P8RCPFyQJJSjadbj3M8uZgxY8NojKD92c1WxXuERHqdNPysg",
  "key27": "5WtjZvSexPf5TDBHwQbi9dWxKpR3G2gBn8GBCWXm3XueL8WSg1UyQfSA8HvR1QQEXSkmhLmH9rfs3R4MuhmCT6Xv",
  "key28": "3mCQqdHWs4oBtidj7BETAz7NSmjMaqYnZyfx2RqWoj7CzhN2pNMb5cjzPJrakhgKPqGhY1uLtTUHkE3ceEtyGdBh",
  "key29": "3N2ZDYfBpqc66oggZRswMCBrhmNqCqfDQ2wiAcihen5aLP7pK1bmz7RAzEZYa7ydwDtx8c8sS8HpYMzbWQf8NhcG",
  "key30": "2sYduWDKx7pTFw72an3nj9vtrSJHYNG7ezEfFQN6Hwmma4zw9LhghgzSUzZzdNYRPLZQrpPSfVsLJ3CWDdTSa2XZ",
  "key31": "2XuhkqQD1wwzkH27b6GKVAfMP1rRng9u9gqB8N9bi14nrNU3aLcfDmfdBcHzPNpftX9mF6Jbgy2VLhQfHtsmpcJF",
  "key32": "2SMS5hDnTaBtkjoWBKZW1fjRmhsGLXnCYpeXGG7RAgzV2QvoyELVXM44bm5vZYrEtW9wPiLtMSRWMmD1JnQbaTbD"
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
