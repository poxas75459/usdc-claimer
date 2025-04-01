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
    "2P8GGnFrHCVeXSMQUFwyD1Bs7EcwxSaSGx6b2GZER5Ne1EDiK9nhkvk1J8daK3VZXq3PxDeb7pWAYZTWrvHA4NFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WJNDmtnDLvsnXWfbNhNJgYjKePiuf9xu4qdxdhAfXbAagneMdXmG7bkxUuRmaBLTtrbX7etWTqyyt5E2YUNU3Jh",
  "key1": "3VBbQ2XZsQrHeb5bq6pZ2gJ17v7c6JNUY7RKURcto9vBQTN32yXvzBv5ki36hN5yvy9p8mKE8x3aZT2B3PxvByH3",
  "key2": "4ryaFzMVrKrbXKoKoMkR5F1TsJ1ej9ALpieVS47s9bBynnW255cKVQR46TvbtkvqXr5QteWhZVQ6Q3Eo5dXwhjwB",
  "key3": "43DUZyeiZtqAcCSpYHe4CvWcSZrG6ZXjx6jXgX4wj1Le3qKnunNMD2NQWE45gNY6iYD1bRrdKGGSeidRjsJX6RW",
  "key4": "2wnjmqWJSBsYvd9cWd5d7LgwSeC73S1bCRHBxxsFAPV8c2XMD77ZKjmUnVgtfLWnAfQt5jurLefWyKNxXzQK3KrA",
  "key5": "4QdntsoenotW82sBmELwwkbfoEXWM7UKaLxgk2qhBvuDz3uR4k5wRWUPzUQbsLTLcCMJ1Yxyc9JRzpJda4a2AaBc",
  "key6": "3ZJUjMMNiPcR1yNuUJ6ehiTD5dKczbgCkUJRt27gudZhyGfCAM7xFLfZDzZfrjBiPQw8msGZD62Hy1BuLV9zn6Ar",
  "key7": "2TKr7cyNsdk6d6tjXhPQNvgiA7JiJ2bWFmQX9pDEzvwaWJYWNw6oXkrXkbijS6rb79fVweRdHnfSuybVHUmKfDGd",
  "key8": "2drMrxoSCra81gunfXrxZQP17s7JfU8TAxoQQde2a2D8JdLcpov3Cy9zAaJWGxqew9bsPCvMPrQm9GtDuLjCmWuL",
  "key9": "XUvhuV1DtAdeMBfXjaZ4R86ZznbZzKWfj1u1FC4isC2Rehs2o9MvdeydrZTKGvCsFHYJANtFBfJRtmb4r1xqS8r",
  "key10": "5XtHkSU3C1cMmssnR9CAsgqP3c4C1amNa4VMBtHHLnFt7By9FiaK73NzYhK7XTT2cnsR2KYpfZ2VfsyGmqEpyHuX",
  "key11": "8dKKK8t7UttxBg8wLq4TuBYf8nH1LGdVuyjZ7onmzz7ZqJYF8jJ77dwrmLASftrbPsXoj21rYtLagX27TzbRMwT",
  "key12": "2vcZ8UagPxeQpGeNY1zvEyzGdHWEru3HFqb5nboQzeiLjGdXXyFy652fuTbxE43mVwb2XXGkviUwPVk17qS1Z82C",
  "key13": "DsGcDX1xRr7dADHASVXbZz3WE3EmYXrxnq16uj4oJKnjjAdEZvAu6b3GF4oUDmK2ZK5SrFr8Wc2xPRafJZNq2nt",
  "key14": "5BAhsMTP191PzX18v8mRzzwhGAPANZ4kzPgqV8rf9eQhtqu8wgDB3vFzNRvU9qUgF4o8ZR5Qwoi8Zi6EM5Jkfc2t",
  "key15": "5Rnjf49gmhcc1f4Yi1iFEHBHdkVTR9P3H41irramJ3FULJpLsR6h1j9f2wgRSuVRNsVFkwE78fNbAtm1bN7V99u8",
  "key16": "VThbxtFcxb2P8Q4yVnVuwen9iVRthJU6URBtqx3gcMh3BAN5SLzYqGs5b4Fbyr3hNfTzBhMhQ3tZ5g6j41huBNp",
  "key17": "4scmTJZGT3pgwNJE9L2trBne9FdnvUSiByy25XqekoYZGvGbpgw6zW9oAjm66iSZWHQ63eRNUM7Y4mZ8DavXdy4v",
  "key18": "2cDRrm81vwbYJFhnZVqTNuN3Bj4tN1ntAD2mfhCNxviEv2AMV8Htp5KPs5drq7YgEtxJixEpayF6sU1z4zPt54L7",
  "key19": "2nS9M13kS9dyVcmuNrtCbQiRoRXLNjBb8wuB2PWw2rkbUDU83hLpnUyXyPE8KVwh5Np5vfAZ54Ng2BEwwbufbw6P",
  "key20": "21agV6BSM1fkZMkjTu1JQD2KBi4otAV496ncxuhKPMd1rFmxaRYUZx914wL3AgG2UFMbfnLaoEpoJfkCs1JqANV4",
  "key21": "5iu7EL4bYUPiZkDzSgEptm7ChG4Tu3G6498nXhBpwCcU54UpDGyuju9ezcBcAVhk7q3yav7NoJuuKDKqypvj678L",
  "key22": "jekEwQz5ZpomPBKRrXrWRHfc9uxPgtomD23hhG69XjZPSGTRs1QaX96zBqvJVEJUmCYRRtjijDULfs78dsxVFEV",
  "key23": "hyY9NHFsii9NvyH9HwvQHFm9CKW9UWZii9gNADG18MCngBquuZ4npXMyxx8CdAomRNLt6xJYfgSSVAVUiAgCBjy",
  "key24": "5qcUQjNCPUUxC1CXESEA5ZgDgB8K26mVN5heK7ejGhV5UJAvmaBJfQi2YpnMACM9Xq766HsxzEBHVhsAi8dSkdhf",
  "key25": "2wAnDxkach4Cm3bEobC94mJ5XYfHGZUMjwVHfoDT4ToDo855xtfB3cMEebstQKHKm5jtbTx1zbWMK6edUBLsn8Mf",
  "key26": "2NWJmwqeoZ2rvSmeNDqTg5S2KCkJPYZRrWQBSuPEe2PVS5yNBWBaRtrpyFHNpsbDwzuYHNKUvHBVtGbcM4WoBGpo",
  "key27": "5wmRw6ZwtTFPnaVVftuwHErHMZnESFGkRKcA48VQpmT8qBnQ8oN4SvWvBJpUyRTbE6MBDgHq4XEah6F7Np7Vf4ET",
  "key28": "5uB69YXCVwiCQZDqUh2bwEJ9GDPBDwVfne5rJPDYXLby7rkGLhzdHsEUFTmDuLRfSZW5FiyGzfXWndJj9RVM62kA",
  "key29": "LC8WamY5u5W75HiMyxAhfnQ5qhrdiML3XDirKxTE7tcbmVY34ZfvjQsWyZsBmJ8jJq6r85LzDTHKq5JvKweB1YW"
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
