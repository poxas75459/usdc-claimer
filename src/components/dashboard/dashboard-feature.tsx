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
    "3RfvjQs8GSeYjgMyXZv7R5THPa66cCzurZ6MW1LXAEyDdfwQ451Ntdaa2y9Umjdh6nmKL6MnfD28BUdALpZ3VytP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CpoTiQNHFsFSgjXH438LCExHuP3NJpFdCwL6RYABYcXCsSGVzNrU5YFKjyEL2rsnt2MZSxn6g41foBps9rU9ioZ",
  "key1": "21ixgvXDBnkKWHjqZtoZo5Pvw5z3SggJGGkzeXxWizeeVYAU32VQSrNcNcGjEFjhZ2irx215WBS2KAWsYusB8V9E",
  "key2": "3MaSs6qsChYtuk2mnDfCiWPWErhcHodQYaxs7KUvmaCCwnzv1AwM3DLFa8cJqDYayDfTEQuBckuTMWVGZtgW3HFk",
  "key3": "3gigE3QkAiV6HmJJfRui7WnNRoSUXX7fBfU7mnxTtvfuSiyzjtHV7wveNkQj4BGrRBnzc6MDZhy3vQgnScMKVdVs",
  "key4": "3gFrnKqh4NXBPyGkcPqmtmpKzwUWNnQVAaYoLRrBCmAYxe6QwN1Sm3hgMYQ9Ska7Q1bNT7MHUqN6fmNWqnfxuVkz",
  "key5": "2g1LCVetGnw1mFL8NVDz3eNcJSFmkFHiCL6u8BLsfUEzM6zE7mCCSsSjueTdh849g4vL5EY4AA4LTyoLundykLui",
  "key6": "jsuLdYL81LWNCdPFhygTN4wCSwaSV3KTP1Xew7r1gfJF995BbUKV7dJGxwtCRkfhhX36oBmTULWAJnfN5FdcYG6",
  "key7": "31DkrvWBhqNjHPDbEmzL18Zij4tcnb6eDLX89ALdm5mHHDvVR5W7EDhRuxjvHpfRwBaqbGoiS8uMhRXkZSHdeK8Y",
  "key8": "4iziiyJY13YihCnBNMqVsG6UCa8tXFpcq12Md6sy826joGUY1EPTtmY31mYt1zTnbcW5Up6xBB4nXv3cxeDm5DNr",
  "key9": "2QkknqXn963kpNkH7ScLaEfQs2ENacZrBHJRzvRhAMmSrarm4uBWPHWMAgXpuLidqieMmnLQq9Yjt3BCFnbDruR1",
  "key10": "5mvynmzvV5S6WZ8xSkA81RHPMVwmBeGgFFBo4FgjS1ALMPx5QqBWrfg8VQ4CH8BjWs2WQjyxJc6Bf1KAV4k7CS8u",
  "key11": "2CykTqKK1evauE6HEPhiNSC5m428HkhjW1zpzHD7tyZ5uE8riKMXuC8AZvz1gAkHZqnQmSbnCz55Nck8L3hbmqQp",
  "key12": "3SkVTJB4q5JuVV5GwzLf8vzDPCnzpX3KFCx2exZ3kW7hJAhJgMmXweAmpagWc2cbEWvtZXhSAvRbv1iDZEvfHq5L",
  "key13": "4shdw7fCFFwDtb5qpC3uvBJUW9oAFdxFXjWrGr7wsYuQZco6Xt66YETNvuqRmqwfq1FQa5qKCsfd2P85FrEWrNwg",
  "key14": "5LJ2Zp8xTTqRZnHVAiK8m7go8qAEhKg2cpAUsWQjiu2g3bBY2pSZpj4iGgr8u11aoYwMcTWzhsPDr7Na8qrkPfM2",
  "key15": "3KzrRiVpbxx1UbW4mCWyn7RpmGd5wxsFr59ahSyRudKoPKKrCfLv9S5a4EQuQHZveGNteJegvAfpR1xd6WVuPrwz",
  "key16": "Mdw95zZ3Luvu5z7jwoTHwtZwDUymAcYuuz3iwModwF8yopUHTDDMQCWALqTo3uVLP6ZfmAiRX62FSqDPrfF6QyX",
  "key17": "57dBr8oWauSdD8eVwbE6XJPoRtCV59LA6VqsDwNsbkCBquiAjRzHMxwW58jk3sZ2kmuVzyc5qNeRR7SNxpt8TSkn",
  "key18": "2asfQByZQpTMTz3ahUbfWfkec6Ccu1gRdgd3r1ZJB575eemwMAA2k2H7aVdBDPtgx8dDZpqPcVuA4pfkxkb8hunc",
  "key19": "56URwSAaehrD6BCatJFSMoPKxSYNcEbLuFRgWX1BSr4NWpc9a9Ej9v4kTKsrbeX9i8fPdeXXyautohAzd5GkhCoj",
  "key20": "L3SVxZaamPRGiBYBViFT6LNLgxmHsNTJYYkX7MCT9ESm1Sp4jPVLVnbUfm7JVjirUy6bancm3RnaMAQdS3rmy5X",
  "key21": "5EgQnC5gvwgcHRoEkM7mhof44SCxRuvY2yTK2DKXT2MSvbXfWPyT7Nrzcxew9gWa7z5ZfNyjLESRFL6CbJMNi4wc",
  "key22": "MjWyjpnnofeeEeKJFDK2a3Z2xsrmR3UJRw4T9LA5TDDe7ywSUZoKgkRA2cfzAd8aqpyqNe4WHzQuEsFDnqMYF33",
  "key23": "5YSpG8Th7buU1E6cAaCedFgpCbAkqnkpTRVBmQDU8SvfvgMZRNXavoYpEDYVgnj4Wo2V4EaG97b7Xa5cNHgPXjoc",
  "key24": "2CTo7vZyGXbQMhh9KgeSpX2q3csdM9HWu22zZvcTi37gRXzCKcLPrvfEGxWtdYoSUf3dFSNWbEPBCBrhDYNvbgbs",
  "key25": "rcYjQJAAA2L4QBpNyvafYrubm3QRbNA6whpd91oKai76AKksrFgzrJiNC3MNWU3LxkVbRMhNYiGHqsoSLfV8Xne",
  "key26": "3mwUV3721aGSbcoMjdJuE2dJUWVv2Pk2H3qpruB7wScDn9b4JzsW1xySm7jZMucwwfRG9Edg7qxvNNe3HtXawd6a",
  "key27": "5zBw2pxDvX8Lu1puAkUXhuDngPt8ajhJAu2rDjpwQCMFPxP3wNdMG5nQvLPgmsYBpDVEDGke2SvdYDMUKpwmqW6b"
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
