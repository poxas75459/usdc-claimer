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
    "QDbCxUzZHvoyizAWvqma5wPCSC9wFt4JyvMkzh77bTiHQNs8AADrmVSdzpEQfstFppfZN1iX1uwfJXjkStXqL5E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3seqCvo7ABJjc5s3s4kdYoSYUGqVWob94dbqSuYVhxrxywZ9opKiVZ5bAs9KtTo2GQXqSxkrABLM9NSNEiJwwodk",
  "key1": "2Lxwj2yDuMvoSsxpPd5iSQhHbkQStTXwRMWuL2Ta7LynD42Uhzutd4R1bFkHZWpTX1ajSnGbNsBU2sEdFYReerzJ",
  "key2": "4DZ347pVf5fnJn1azELdbxHgbyezGgAS6npMVK3PestF7bnvFBPTdQo9rADXTpxjQsTWCYfTqHAWv7fSuPhTFNoK",
  "key3": "3oJA6pzZW6gS41osv8deN9aJWJuNieNmnv2JWXWaYn49fFDUGFcqyeCqSdPcDR5LRURLcVzjp8oZghf7sZPMrc75",
  "key4": "4tcsZ8qhQkEsZQFKC6QKW2X3g4Wsaa2J9yFEgaBXhpYggYnZGF17rpsEcJaJY9LhYnxzaVaAy1HaZFPSQNmPUKJz",
  "key5": "3fHTr1TnF4ta479XFqUQuGGPEQT3SVX7q7q21Fch1oNVKamjBfnpswEcijCcQYB6gs6Rez71EJc4AbSYATUcvDWN",
  "key6": "3MQvQ9K1HVpc5fvck3WrUm9kLeBpZw71Vs77Z8dEVxBB4zy8M9oa5KGcDqdfcnJhfrHQ8QctynUhhKmDfkFFKxdy",
  "key7": "SvAtdYPYBr1L2HRsHpq4sU8XHCsYMxHpf3pqx6Gmz3ELskqmTafxAguHuuSVx1D6pNJQVNei914p9bRAZvtseUG",
  "key8": "232LX53oRvUUoPEuLkenSZwPNLgkjFwJ9Wq1MzPy3sA8oYLHE87QFmXAMn8b9DMkMA7vT6JWgNUeu8Pq3ofcpMJi",
  "key9": "353Uvk13mwetDyupGJVQtUuu2qbnGAnVk39MVqJUVJ5eM1y2vAWL7LB2mEkenA7qc9zQZMXoTJaSZoUWTX48Spe2",
  "key10": "4vgtskzkQevx2Mfm3vDJG91CXAkdLDAGYjSuqB8r5piRrimnob6HDwh6EWmCkLjyvYtgocdY6nipE8ehchPsWC9W",
  "key11": "5xUdsAQNsHYZjmQv67bmdpfnHzrSgMUdd6tZbF2eD7dhHwDJGCjrpN9ttAgKprnhe8BfqWVqe5s742xmBWjn7ke3",
  "key12": "65Wbe4SFYHePaKUPGS1LcDYzQESPkSHCrCNG5LeU2X71LZXAFRbv38CNABtbaP5ZU8dNKVUrU9RuCDypHqzCgSS5",
  "key13": "5osSRdBzJ23bvH55rZxHaXDHCN2Sib7Z4FTwTQ8rvDPvc9n4SpeM9X7XWgeTRqqcgJa13bXzH27ntxVtCg2umAqK",
  "key14": "3VQMJ7RYAdC6RZeEcUxjkq944bzbivFXtxbBu2mJ3CjrH1QGpj45JeTVxyrXMZtrs3mEM46NwsP2gC7yar1Uf4HM",
  "key15": "37VDXgY6WguADScssu4sfayod5Sa8QnYstXQutzrykjNXe7XGxDNfb51anwr5MVTh8LQUoLJkdu272Cuig8M1q5D",
  "key16": "3e3YNkLA7sdBvnFESaWKADCuL42AN4pkKKKFnw4tk6C3j7kGQyr1aNiasF4keccbF9qmYsXD2aS164Ya8AZfXHLE",
  "key17": "2wyRz8w6kMX7RytCMm7YkaztHfdrQtARqkU5xT41JXqiSSiwRBc5BDBM8UT8hqUp14eSv147NZwVSu1AEo3Rxvqr",
  "key18": "PgaHmTo8n3vZ7dTeGKSDCXyR9tjrQbRzpc3sxkbs1REVXxbsPEZxAJHWqQDMnK4CKBQGYLp5mnRHJf3c2urZWzm",
  "key19": "3kXUMoM3AAb1CmKr9bBjv615UWCudw3WFs9K7xor5EkXvWGjndy9b8UffGuThBHk22qTyptkLn2qSVmrH9eYY6uB",
  "key20": "3cnZx2vmm3DtHxLFsB1zfaBX3YkToPq9nE4bqk4kDX2kF2YHo3b4y52CeAdudgFLo9n8z36ZChNHmjEbqkjKjtpy",
  "key21": "5Bw197DVF1csDdTKxdf3FAQzDTxJe4LB2gDtLHgxwkHBq97PnkAEnNKyCDA3bW9PYFAvoVex3f4EvFxANQAvhf8P",
  "key22": "24kxRXotMA1xgKwgxVmPkyaDNmV2r3NSxxdmWRpa5yU45Dsxktjkxx2NW7biamBeqwj5GBziRHetN6JSWQBMxqYX",
  "key23": "4ncb1pvCvEcTLyXg3112uxduvdToNVLk4HtZiKnhBmXbarvUDhqrpAdv5ETnwNJ4CbcSAeLto4PmoKHXuccyZNus",
  "key24": "4bFjWWYHwrXtQsMxQRsE5sP2s2mXqfAtpxXXCJRvdTqRekzKNBUCsRdV2CgD2fHQKP1LfpJpza2TrjBD93dExh8w",
  "key25": "1GeMmT7toZvbJdmeF1Ep8g4oHwNJ8GaHT8qtfcPJ64R9gjUyNgeHkhxL4oSd38vEbFNxAwG46D9FR9PGYHgPhtq",
  "key26": "2qQipZRJusomRcCDbDsvJADPYvsNksyvxEKafdeMinqLNz8xdJc6vYtvKqAuRFy52zKcjBY4emnKndeU2JqEQKnT",
  "key27": "34QYW4xmwpGhqCP3Tq4EewJ7TBKWBPUSUUVLFX7B7BrNwyBfoWi7X3oYz292kpJXagFSyYG61QsRcmng23Lxp3wk",
  "key28": "5Brhu1FHsuDJnUpTp2wH3ehrdmPCLW1mi9H3KS42X4ikaLumwEwRYZkMKWEWLdVawQxeeDKnG2ZW9dJ6kfrvku9q",
  "key29": "39gkuDw5EvcDua7DEKwextUu9mvznxeuwavrqw5N8HYqgjMTBnqD47QbuCYDpeeEF3g2pgRSS88ePP7VdvetQXs6",
  "key30": "1QYrYmHpCDoqTrNeAC686Q9rd5eTu5zouyNawVjcaW3uDs5wZ5UeLLkKrZbhNdu46JPbBficnGoxK4GCp1zTy3i",
  "key31": "4AapjfbdYZU3xEZnbRsuWdxdEPmtVgtYqKirVgvVM1JzzmRsAgX1sgRbRkGAXatmgbYQArRVKXUZTeh1WrpaXoz1",
  "key32": "61b7ZFXsMTutJRrs7oNQosqXhatB7jsbaErrhpfnWobUVYvMNHGeAnGG38CFAckYwZB5AMXPRxL4RaxbJdt4TwZn",
  "key33": "34xpFkuUachBptKUUFiiuBQGk7NpcAp5AHBPXc1UhrJ5r1Qp1TCytba9JcaSvHDmARS6smwuf5CbnMiTfqZBafWV",
  "key34": "2F59WrKxsTpJBDpMEixhwFL9jJMAXqfiKypkUPNEeZFSFJuPxxfEjUxJpr3FgYj5rrwBjFhwEKHjDJHvwbT63iGM",
  "key35": "YmbrVA5wxMAeCD1cF9198JkJJy7HXZLKzU1bA1MWPq5APStDktSvPVtBwefvAgpR9QBNUFYuGk5NSRX1e8y4RpZ",
  "key36": "2VUZhmH2NvcaCHb6sKgVA31RxQzmGRMut3cXYjgANKgqEFe1oUGyXoXBget3twLwsu7KYhTbqDhiTopw8fERhzXW"
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
