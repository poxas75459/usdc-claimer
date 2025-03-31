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
    "5uJgPk6uxbLUYAxLGrBt8yyuMoq8uCo6Ux8VvCzmvtULTdyEki4x72iu8mAPeEM5yUzmD33EXjaJkbyUkEFToJx3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MLv3QGhaTQnPUevPwfoSmFZSkvX3p6w7icqRVw9uxHrL6oeZzX9CX4Eri19Ri8M2hK7q6iJ8BBEhKeF2Egw3ZRj",
  "key1": "22SqHbHgQKkPjiXhXGWEy4QELo4FEVf7Vq4gb4wNiMXUizUDUwMRiQ8k8zvrzTRDgtWkosXysPYeZ3SwwNa8zuk7",
  "key2": "2643pVtW5R28Zejbu6ECPEoqBkDMvwBuT1anro7P1voSio9A86z383ypZL2ndZaG5WmNQtLW4TMkeiQZFoUVJPWQ",
  "key3": "3ZQd2MBVY1LsYZWZHWrKWRodan2KiaXCDBtRnD1ACva1ZswpnphzS8XcXoXLK35E7wQEPcKMkyvTXrHxUBTZ6dDz",
  "key4": "2xbqwJPqnh5xLPUMFvD7soyPdBLHbn2rmXHB5kdpn6gvjeujw4gJapycuPWVeuaLkk3VdfJz6DNQ7ZxuTFSP9h4D",
  "key5": "3urp8ZmKYCsiX5snCPsPZKyaQHso8yGJPrSjnmfQGTCRe8GTP9C2s9F5ukjXi9kmhpznXn8eScj8xkcZjsFEMPSK",
  "key6": "c2fG1LZmgWR8uPfrv3sDA97UCxWF6fWadZL6j4us5pvfiptf3wrHdbPeLCPWjgvyHjo5djRj71EBgsNriW31Bpf",
  "key7": "67TrmAieSyyFwxFvFAChpwzviYUMaUMDYffaea4PSwgEqdw8b7DiQqJ9dLvVFAuep6xkdNxxZ58zWRkjBHajRUu5",
  "key8": "4nw8tTKxBs4GxkZFwXGSxysGgE1HtELQxJF9dkwaFjVMRzx5ATAmSk6cBFd4uaArc2BYCPcKUMJw2xijeBZNRUw1",
  "key9": "2YFH3NJuK9s1uxUw5G6xhLHDpbst8iY5fVBCKRVKvyRUE8FJR4ZJHypnSCd4MJWXdDrTSeLZdzra9mheLBxY4Bey",
  "key10": "kkXX8nMBh4E3Zr4KuGWqwQrFjsBYBHtj9uUyu4cB6wMuoduedBgHPjjSNVsxnjMTrgqbext2naNkHp1gN6d8E1r",
  "key11": "2iYYyzPVTXpDJxU3VgtNavRkt3P98TNWLqJpZ9X2pzAh59S1CoqzWKJirQGRKnDGX88fvyKkyjRuz1HE9v1CL21Z",
  "key12": "4rPswVnAyX8rytEm5fYSnt6vCK5NtGmg8ws6BY4F2YDmUVq2Z8ux31mVLTQB6geQga7zFxiQw2tcMTt1hvPqJ2JL",
  "key13": "KL4NLvRH9gFS58BY2vhDkHgk3YrqmrAU1PGk9s953FnYJnJUuBSPHkYxhbTxSHsKUngWNHCQ9DR3Bw1bhT4PjRw",
  "key14": "qQ2Ej1rZwxy6UxRKYm2S5sgQb3UD3txFMiWXXdMAF42ehG6xdM7x5EaWhjYgVUhm8uAr7JSMgZfPSFWt894CMVQ",
  "key15": "5zATWZFAqUCEJTbm83TvPXwNnpg5B9sY1CbvDcsDanGE932A9rEXXow8ZWxDCQxgLRfgGv6nM8ysPdUeah86bpyE",
  "key16": "54eqQrjL5ymTPzJNe7vnn6v983GPzEiJb69pE8eQdnme7PP2t5WbVnj14tcpBiY4KG6Zjg6ZNnGttGELBzy9LvG7",
  "key17": "3LW72qKazfWBFss4298mgHuV1VCF55GWMHxi4Yt9AfniirGHBhbXWjPkegp6fTJbeqGXi4JEnBNimKNB5ZfMSW36",
  "key18": "2XCdDwJu8DeetrQw2EZvzp7jonu73mwkSHdCJopRS88UUv3WrUWkkFDjDYRqt6PbiXwB66RgHNWVdAR19KCSqsMa",
  "key19": "YpwEPJTBHzeTWAiefNcrd3KocS6iKvAvAfXnDtjfH8UTLzRS67nPwL4zVFUSurHvhYNNjGxejmK8Tg5haocPNS8",
  "key20": "PaYd8rThD58x3gsocAhcsPrwyDFpfKXsvu53nGoh7DMEWPiPpWGF1xaDjxxUFJUPxipMwPMNoXk1vNNLdLb6BEL",
  "key21": "5v2LEEbxu5CYpnZQ5PPVyw6zApPACodCSXSh2iSgxqnzyQ317BawgAkfEc4KZAoE7NULCBst7qWFqBSMf3wTjFyU",
  "key22": "5HUTfBWxQnbtA5obDQx2DdXfhUyKdPRQ1wQoaZc2pne9j2Quf9VAFd2ggz84HMxAoKrPtYbmpKZWtkUoQnz9e1rB",
  "key23": "BZXkCfdZiNm7XYMsTNHcrj7j4nhU2Aso1Gv47QeZNgWaarXYBZxLhBUc1XhT25GAsVBEpY4e1q55L53eu5GD62T",
  "key24": "3h7GZthBQ9hfjwea5ZXALrMpfdutmDs5AbHBQiwgnLFU1XvwNdike8CrZK7fTVGCRqJ2aMCXmwzZ6uPHuyUyoRo",
  "key25": "32EKSyS11G1Cdx6G2x6iowSf2uDW8iV96QprVne6BR9iLuyb3itwwbuajKajGiVEgipTHMf4LMz6ojRttE5ekvuS",
  "key26": "558ZMKzzaas5k2fADuwecSyKa27HQ1eTx8TwC8rJLEN8HKP6qs4zZMMKk4g73dyW3Azr7LxsM762BYJBEyER7FRe",
  "key27": "4DJ3GRUPaC8ghZ2WyfbWGyUWRh7hxLvk7LfpjhWspJSJq3skdj45HQ6fPVxWdzLvqkQ4uvw47z5tc6RbQ1e6KgNs",
  "key28": "dwNsnz1PWfZ5J2gGh6pzS2mCST6PWDHKxPf1dYycghcH6Rv4n3bK8nP7dq64rHRbsCwPoc9Xxu36CCzq57q6Q6N",
  "key29": "5PmnJEJ4RpPaqR7VeseCthwf57p1kzKvP3Q3fhFYjXJvRHpUCQFUjDEJw37CzAdraar4ji5r2EiwiY2EfcGTxGXu",
  "key30": "5kP6hgWW2DKW9Rw3krwUUED9n3WRLiKsskVzPWDGXq1gmM7MHb2wAy88uTHzsJpCoo174CMVtVnRuPubScv8fSwa"
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
