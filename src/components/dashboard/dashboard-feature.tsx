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
    "3GVoLdiq8pWJaSHTdbHtUrnYZN2boDhkPPaaEqXVWqnms9sJb8QFwqF57fQ9KwPzwWzdtTW97ocC1myCjdnrzRDN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8EVZJ9S7PtbyRRkiivmk77zU8DZLr5Sp8vtX2hksBKUheTUjcQWSr3zfUgUvKjYArn9iRfwMubEAs1g7DJUNkdj",
  "key1": "58KunHCcT2UQZc35JSYvfjMjGxozKzsoKEeDQeL7JmDeQQrheKFCKLkMwhFyy8tRrKwU9uUPUQhweAu4Di1EZa5m",
  "key2": "5ZZWRPpvWKZmAaWq6mSJuMGPWvorD6yhMQkVc8j73HggnTCBs9FkPV5gZXruYHknrkGJaPsAEJLf5JKKAMSjEnUo",
  "key3": "3BHXTUS2JfpLSX8MNAAjZXeWJr4Kkei1jLM18yRD3VBV6HJWjQts2A2MfNjsLCf941ktezwzWsKuBotPyqcK1hCd",
  "key4": "as2VnCkqRxTfMrfZzktk1QS2kirZVC5mGV5FUo1qVKkMs1M9SrjCRMwnW12dwzVHpD8pHMkPWcVpzWtRnzSjfvG",
  "key5": "XUesgLzr792CD1vrjPe7WL9YRaoxaPPdrrXNnbjXFe1Fn2pBhADHLS4LbWqfo4V7fdihrX2q2Mwv1TF5SF7vxqh",
  "key6": "2GZwr14w4Gac74HdtVtNC9X6LH4aFLQihdUPw8AUEkAFeNsNz95varvR1LvtRyPL1nZbPg2SQmrRNVtFMcEb6vdp",
  "key7": "2UyLeJGvZLjenfTqkYWZLw9Eg8hoPBbVN7oZMU2ciqpD6Se7WaLcKrF3apgNEGP5osxD5dL2kqFjaC3TGceH7KJ3",
  "key8": "26p9KVZZK6A16w6h5e9fsuqjK6xTxcy456BiGDHEukDsXdV96tF4QS5YZrqpMn7VwppjGCcuWw6KZTMoZpaecMcZ",
  "key9": "4RsevtrvkwtLgT1R7FF7zmYJ4CMpQTGieRmjRWPkGmC16Av74GSh6Py7RaYLMunKXGhHeh8jTEN4ErJ5vprt8dE6",
  "key10": "4GpDPJDVZJXarSkaZKUju9Q1QJneVZtp7qamxrPRcLaSJ6UUVobSBr5KpJcLxA8x39n6xC1u7tLs6pd4v9XmHqdj",
  "key11": "3KK5Kex7XZW7MbtY9NdA5fbjMz8aUvH4dwiPMFe9Z5ZH37mvbvWhZLVfqhK53CprVXbWVTGqq2hBzHLP2381Ncog",
  "key12": "63dcNhDYScHBY6ikLE2oPKMWJVKSMENB7LMazNmcuHAiRGxm87ArbdVh7S8pSDFRsvkdUano9yic2Tjs1CtVSj5m",
  "key13": "4oUz4RfGVGSRyNnSm47kdMNbvBX3Fco7TeH5DBHpi2xX4615J6ci2r3z6zvW9teaGR63Rq5Zjb8umFdt6JhTSsGQ",
  "key14": "hck1Z52PGhZ8eeGGjPHFDA4LnChPNGnEWqpugtghsT2h9LdjHDu19vH8h3TdmM3SBoeaiFd8KYGWWy9jZba66XB",
  "key15": "3LB3S6AYmYRVMJx8iC4e5mrZmCz2vzjkE2LoUa6yCe1X997hFxz9iauwx1sru5GE529zhuX4AMmhrBMWPpao1dG6",
  "key16": "4sxm9oeeqhVGbN7RoNdJGepwDL11mJK2QWbmXhtcCgSNXhGeZZu8xbcaXvopgBGW8g9DM6dBVmenV8geDmVuaCUZ",
  "key17": "3uqDPskVg1t9PAGggVgnvLbDaaNBuEN2wfEBdQyufdiEx5ybjSEJQzCFgPaGCfCzsjSe8HnrRHu6JTbmNastbMci",
  "key18": "xymAvzSWgaJzaM4uEHv2nUnKEw3C6L2rads3sWqsWKKVxKxzqFYfwHfEJV62Ls7eFEgZuUkzdQtmVfPnEuyaJP7",
  "key19": "3CBAkqpwAH3VoZuNicRufemaK4361FC8Adkp2KMKA9HBfFGyYFxe6zHvqJJLhCFdoAbEZS7AmSakQ11BFeHjLd31",
  "key20": "2x5BHzq4i5fK6Lm9uoR8LRR7i8TnbkiBLrhdbsjyszJU4PBygsPWXuw6GjsHoi6vozGqTEdrjfojuspvH2zZYDA9",
  "key21": "odXsjW2oKn5eV4Xn6c6cRX5LbDW9dt5gU5VGJ8zGoPfVJHRkhZNLTMcxfkDdfpqmNhQLBVYBZ3sdFU6AnMxr5TK",
  "key22": "8qjuNMNMyz9XD9NuwWQq31EodMMLGMQ4UxjN33MpiJLNkqRf3VDSbWPXQVR9cGoyovtUK4EXDkjQ56JKo3i9Gc5",
  "key23": "33DwYfJChQ6UdjhsjXDzhE58Vbro4Ex8bQDVkhWugT9hjsSLwZZzj7LUwnKYmpGtwYJBh2QNnWaJMJYcrf5D4Kcq",
  "key24": "59gNLjWodq2yUDGishUZcGqkUC8Yw7x1EMWQbvawrKQikPDa9EqfTPzDY6gK7tzTXF58zju12etRhmEEqyk58oCn",
  "key25": "4x8wn54rxoF4hrhkANXv26xbarggz76fZNkxMKgYhowktfS7LsuTzduuA3dNzzCR7m6mw2pkyP3cD3aGNS1Ap8eC",
  "key26": "3U5WgMf72FtYp7A3p5iNbFue5Kyzg2tKGhC9t7UrQm2XSC4Qo91fSWey2UAYezBxJSPW8T34dw9UkXDYQgXzbGxm",
  "key27": "5qTqqk6SJBWMKxNwJDGztYZVBRq3W5nLwY3gQRPD9bEqA7kfW7QwnwoMbaxEoE9D8HqTPcEnqBtiGEzvG6s5obeF",
  "key28": "3L4r6CunKAiJPuskn1nTUsRy5FGKU6wNKii1a4e4nZpMAUnNELdT8xbNwCxtCjKwcBNWrNsuiNdtDyWVjL6Jazi2",
  "key29": "3JHC9JeuYhrXFAa2Uj4RT3Cqg6fARM3sa7C18MvZcaE3vyUUzna5vHecWRiQi6UXwZtTUL58KYiBFWxsJnoZdjLB"
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
