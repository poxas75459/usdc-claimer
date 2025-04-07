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
    "K6MDVZxogV7BFGo2UNjyzosRbxWBtkciDxaH88rowMQECcd64hqwbWGKSY6NvrARywyp6XNdD46WvcEspnBHKfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HU95qxWA8XDbRfCTU2R4U24MSbi5o2cyiQ4bbVXMhwSyfQM1pA9DKQz9wGcWpyQvqZuNE2ajZyqFxAmwFfmKhTn",
  "key1": "615oQHmg4pDQJ1sLhJvsq4B5gC7fsnNbS5LbGqysm3cuTAJrw8FrAYqHX7ACF3aAjk8EVmMSvy55X4LqzVEHuWk4",
  "key2": "3rd9mma4EJRfLTSicAtjbQfGvjPtMk6xKxaRqPu5FW4YZ34Hgt9VbK8sudh9YkMicqDUcd6CnyEnwY61esmo4agW",
  "key3": "56uxMsddiRHuhDdvmbBB9go8ot5UkXxgSMummYSZfNM3Vi4wUccHvHJuogJoDDP8xmcGfw2o3P2xywdXBJ5VusZu",
  "key4": "5szBDsmZ94viS16xRVoVNcEBJFAJgbHV1QuEBFt41eZXsgpNFHmVy3MontMwAD9ZKkugJfx9Vnyztby5CFPNShVh",
  "key5": "2nNpCT3EWfrDYM6JretWbFXdcsUHYNBMa77JJ9RDeuvkSMGYaMRko8CmzKLMgSjiJNN9AbTCESKr2eYv1PeUtMMF",
  "key6": "4Dz9bpDnnpGwzQSZbGzfkBb8JGSouHAZAaw4w6omSVDAezoMgebfWWGmAhWBdmBWUzVrwaJdCxjx1yJ3nTjdzGHn",
  "key7": "neLBZs7rsWHdn8eaomGiF3JSF83KD1NPaYjM96HSGgXQZkMzb5BwNF8HYMmXxx25bz6uW8fCAy5EjTAnY3GqobR",
  "key8": "rzsTeTSixHM5epRfMuGcEdQDc6CrbbUGHLHPc5a14UWicpFyWzmpKANmt7EEZopedChb38AtX9jsrcqteuR9ubN",
  "key9": "2gFXfNxSdJUZx2yB9TRgCXhrXL4kpLihYKJD8fRKEeQPG5HjWXoy7W23jqy9mx38NHRjYYaCfZdiLeh3EyG1uXSJ",
  "key10": "3BWVaQX5eVCueDLYhXMJBSeavDCYB5TQhdfvXxTrrCiahdrnnK8sqJUFRbXXqFbyYvyT5GnP6KFy6QHiz49tMBam",
  "key11": "4SFXPjBmwfaEv1B2bSQnwRga6o18bMTinV95KJyu4zMDicenzNKEPjuk4mMYFvgYQum5koL4G7Xd7FDY5PMx2eny",
  "key12": "5U66nVnLcnRLzgSGmDd59yozyHUMrKtomwYkrefSvQpZupjw7CsF7h28g9R5ftZ8ZqaxAZJoETFv8tz63xJn68yn",
  "key13": "2rM9HQk7Lj34eTpBDDfoMAUv4iH63EEqiDNVqNwr9WQs17XXkhUXRF7Kzu9YGNpTnxTJLpUcPvJ1Y6Ko3RC5mMY1",
  "key14": "4RpDC1ZtXJEP7nL8wcxmDNzZz18Y662QANuKY8RvCJ2WMUhHZhwzonfn44ib2HKxvWumLhjKd3UvSe85bYEmR9sy",
  "key15": "3LCqchiAMKH5bewLsky1sB78noGVkQ59meLTqqZ2cTG7FYG7suC2eHgQcha4Hq4V18CnstbBnYmGu4Wqm2pg6SYe",
  "key16": "2JoLXKuHJF12C21SNeBbX9Dxs92fABSNWZbjkxthFg3JemcG1fYv7UE9fq84RrLvz2PEJxa3uQbk79mCgMjXU6XV",
  "key17": "66qJYfCrnkA5z7GZyZuPsGESnX1tNUFvaag8juFgGJZdQK3zq28scKxvppb1q2R3vRJYS6qBygzby36xHeuQHAQU",
  "key18": "3GYyGedLkffJsW91Pv72Aw1KGkb4WzPLuFedFny9NzrtocasHPZyUFCYREdc9RS5sX6ixhDgAQxqFBpdi97mT4vJ",
  "key19": "4X28sCeApRGbh873GnA8UBwTbzHZZzqv7WfDCt14S2PEHk6LdbLy5QYqXZRiKVF5X7QnC3uJWKwP17RqTJCh7f1u",
  "key20": "ShX1QuRSHwxh4pkC7Mo3fc5F1LqV9v7JxCjw3ZC9HWCwASoGgtLzyvuQBFTSDtRVfWgVyiWPDQUikZyyd1cFJLZ",
  "key21": "236izaoezZJvUFHwiob534DMfpuKBJ7dLiCenHFtt6Ek4A3DtjqpK734zkDJEBJtEuUsWhs9K6Y8QfGvK9BFASei",
  "key22": "4EHHc53HnVsmhrpLR3djN8bFDiA6v6q8SrBqv9yzS2wW8JDNWRMab4deVjBJ1SAwSopEcEx2yCmS7Z9LuehWgtvQ",
  "key23": "4vy71LjKzB3kVUqL7NsyvBHBHYi2JkoVreUywqX5ZuT3X7aJX1LQJG4bSLgDXh3HggDSZ5aFo9qDWWqbw7UsLVZL",
  "key24": "5jsDSoW4NFt72rTVCHx3JmQqPJPyMY4MP2nRNKo1pJ2ngMLor4X6xg8oTt2HJQveZDZ4ZFkLXBJSBdGZkuB9Y3td",
  "key25": "2NwqxvSMJZVC9u5n72euxdmKeajGe8fVcmbyLs9shPyTffLW2g793k6uAGBmdue2LPwUibEY14BzgQxJiuNpCsrc",
  "key26": "4cATsa31x1MiyBXKCGKsp5yCciNcWevbcrQPNfM5XPFTg1nSRF6e64iVPZK7aUkXe1kc63AbEzE2ox2i9m9TJvKP"
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
