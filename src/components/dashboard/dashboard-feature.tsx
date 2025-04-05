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
    "5zwzgLZnhD5RAApKcBNCAEyD5Mjcp7mESAGZ9DciexUgzMN1bQA72rRYUxW9Kd4gKVJ1M9W1CgstcAVzdmrpVXua"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igr7JzWpUYDdedo6wkp1Spj5NoKSeNhcCH9wxCW1pCTwx9gA6RsmiirL1ASzhNWFtBumvQY8LFCcT9EVDGkKQ1U",
  "key1": "4tGJcSPRGQoUKx1bGCL1c6rBK1u2fTZya2n8ERZNeKGZNASnUjzdtqwqjsENYZbakKPjtSgUNm4pSwfQ9cp1BysU",
  "key2": "31TPWLqCL1tqxuXC1Ct4HiTDhTu7rvKXEfhzCHQxTtZfgs33HH3xQppKYa5Rvkrsd7cHBxVBCBhdrvsENmZG9vbx",
  "key3": "qnR44WvmXs75s79R2A5p1yipHyqx4ZTzSeuKQ4MsiNkhrH1aNnq99Xhkintb17v1u8r857tWWKiztRcCMQBc9Bj",
  "key4": "2MvUUuGS7qYzwF81JtgJD2sHovT1CwPsE5do1A5fVzowspcQqxopC2gvaD1pnscgey4W83Buu6qsNpxRvka4hx8M",
  "key5": "2aWY8uAGy8fhXbFiZx1NnYutabF48BYMCnUEg6ULBuv1of1tDg6yozR56xAc3VbZrSRbyC9HsrZtBzf9iNfjrRGM",
  "key6": "3NsCjiqKWExw366U8Wg3DTzbn4SDweWitFSP7ReNAmeeZ3CK2GDU2mAproUW9nm9fooTFELd8Xk5o6V9XGvz49r1",
  "key7": "428BNa1R4BEv3NBAs9N1nqv7djaRFCXpMVX7VahtUq5MFqz7tnUJRNRy7XJDW4oYaqLAfQV6NGe6iVGXRRhbtjoj",
  "key8": "34QLNhESoFRFQsRtGJhqBhfv5ZZwssCThhB2jB8wbwSrHS5FK3LD2BBdXq7tC5fe9kmoss8WQgoUNCF7XindhhYK",
  "key9": "CxeEcgQrdpRbdhMeP14ZKcYJw2rJpshaz6yAvMzRKCbAupD2S75kVAyphi5Bd6bgNmaBFAWamMDcf3ErTnVpxAH",
  "key10": "27d2qrXjhsMp9s53ugvaBtSBxuXSrpTGQJJk2rqi3w5ozwe4BHmmfJdijekkhaqBgWnNHBARt6civwHMmReMCETk",
  "key11": "fzQXzLTkF62qwrSX9rhrTtDYpYyxkgcdD7421eV53f8FuVV37tdJhjEy6zUT8RFnKXkT5EkUwYZPPrYySkfhTSz",
  "key12": "ZqXPszMUynZkW2oxQ9NetWfbnGvQYDYUj1TNY3u1cRCCMDiU5k4NBRSMqc3VV71ht8sUWgKg2KhxDzK4pwuk2vP",
  "key13": "5XpVunM5wyC858nPSFLqu3LCrZWrnpmTum93mn8qyH5KacyYyJE6VXTydvnR2RcNoJdV557zQxbpMjMRocAAFnbM",
  "key14": "344oKSXCKJTr9HnJRA5or9AEpmfVNYjszTiWNcXd9KqHNcFKmJMyxGEJ2bL1sR3hP3h2VwgoKqYmENWEHcVpcb5a",
  "key15": "61fryVXJfKwtMG2FDPv9ZX3DexGTF6f9G4KCQTeYdRVhrBSvukhBqBWjVGodGChB1X4xeZm1s49JWRjDLCSQcHbr",
  "key16": "ZuXYV39tcLB1ps8Q1RP2giA1q52piQMpRxPHnjn9YKNtv9pAnqaQVVKPGWoPuxa8DSdaFHEd9MiKuKxpUCHo8Bu",
  "key17": "kM19K2PBGyrU3qTp78ywcMqh4n4RUGtfe9LCSoMxbmtYg5x2QS3z37KfwPZgehvLmQzMXwPeSPnQ7DkYUpc9Y1j",
  "key18": "3d3wWZqURyCEg1Uaq8ZpCG17MZwcvH1oB9QWKS1RpNK3GQgcsK7AkS9RrBBQdpTtsRwQgiTFpuK4DE4a3HjBFNkG",
  "key19": "3qLDEBS2rPu4NDMhv3eUbDa1vzreh8R8XrjH9wwgSsVz5saJeGs2uCoT3rNGt6289j3TJZ8eQ3y9gwUgfXqayJWA",
  "key20": "2bhjqJZGRA8Jxmrhmyy9QCk7hRMP2HCEFeDiZN9tHAZsCf8dmuU5CgyMAWUMdFfxpU5XLWfyD4L6W4DcomFRXnzZ",
  "key21": "45W41116VV6vfE6UVj2jkQxzrWnegbLX5bz1TmvLVmdV6VHiHX2phvm5pqf6AEYAMSVPUzana1fVC29vpVmfbHYb",
  "key22": "SuStyd2L94SCv9vUTVSAb6MFyuQ4cX6bEfCTgLy4i2DAZQDe2ozDP9aoVcAT4ie3uUGEcKg5BJhGY1oAQ6AEFPS",
  "key23": "5s6z6RyxCpLPLvXGRUHwGjductJs3cwtEc26RC99rmbrJBH9HG2SM8pQjoYdhf9HcuPCkUUwspSf7YqTNAioHYTF",
  "key24": "YWg5eoB7doikqYyfQLjpMGiWH6cwsk6FMFU3DqtXCuaWF9ZZV46Pr8n5CCME1g4MW1dexmxcoFzPPYDFZ8m3yie",
  "key25": "4NL3aCFDbj7xMHym5behXRDdkgdkzn7dcWyQMz3DrEsjhYCAgcXMN4R64NurY5Rw9HDoQVno7GK6idhuBwNa91NS",
  "key26": "45EhNL27zgAUyQXotxAuy6SakGZukfitnzNiEukFPSLQmdLzQ6C1reroiAzY14WvbBuYAq7dSTZFCLjvX7gwzz5M",
  "key27": "3hxQP4ZY7g4nvkZoQXDPzTwKs3auERmhzAbmuZPF2LBdHp8qVaruUQLuv2q67D8BKGm1WXmka6aUY72mm5tNSVBA",
  "key28": "3Yv4uWiercUKrjsJHRomJ6HFDfjXusSzgzr9dD5f4yBgxKDhW1bd2rtXPXr2DZSRSYiija5RF15dWocrJbk56CPY",
  "key29": "3MYpSF65Rqi27hXdpFEvx7fE9MFzWHWpeu1gmLfrAaPaXBmgEVRrKNgPFC8qqR5DVbKkaJoWwVhKpUysymycJ1JW",
  "key30": "4BtMLUybEDDaAY7syWs9uPhuufBnkgWGRVq4Z8t4pipD7QSP3fFu77rfByKLHm5TKeE5V1sGsNR7bbDTfcwrrx4v",
  "key31": "49HGAABgsjSsNGcCWyeBy4WdraC9ZX3NcyypV7iqz2ATG9NPyAvzo7UjFQ7yqXTYwzWzEqb3xqx21JqHNEUke1pM",
  "key32": "DcWjpdBzfJGETsmihJccsQWkCJmcQomgMYggGnQvzkSScbsTLstmLPXsDtRPBMuZhFsLCwYgYG888FWrmJfvUjq",
  "key33": "5j5cAdbFgX8K7FRyfCipGmvjd75wLiT9uWxDv1cBsLxwHdwFDGZKidJmGF7XA7XUU787hyUYmJrm7BBvtkix6NuF"
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
