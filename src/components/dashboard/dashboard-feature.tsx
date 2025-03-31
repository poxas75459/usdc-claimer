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
    "xEe21RR7V214LEn4L8AdB14AHD93GJWYRLXiwNtuWep7VUCBJJZwLWkBokwL41nSps2bibUTGz1WzhaQHjUt5Lb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VgN3t4Utzo6rBmD334ytkwnmyZ1a3qXwLkCSTMQ8fKXdmfiMgZV8NQED5MU8VoJT2aep6CdDFRcWGz6HsutoKTV",
  "key1": "38b9bdLKuyTMX9UqQZQnUtG7GGXHdxWXPbNhLemAFVECefmkit24o19JwxtHK1UBv7JVRvjtyR4QShDuf3dcnSm5",
  "key2": "2Gr7r7y7yESwA9DYUmqUYyxZfiUMYgovfZ1VFkG8YcexVMzNYQjXLZXL7RbBhtaEPMxRXhW7wggMoQqA7eG7m4At",
  "key3": "AuyAiPtbRnnG7vnzdRKbav83iafMQb1hN2tZNdcrbZJUG8sS6M4HeXSAiKocRuJMXQhGZZ4NCxEVat8VHC5PsPA",
  "key4": "5Jj6iQ6DL8sX4yvyw2GM9PPEm6Ptznd6XcGQopeMxqJx7XvejuTVmyfx58vZqQvE9hvLgkfDy3eEUmCNsS93yLhz",
  "key5": "5bMLQ7Y4xQ7T5zBcan8rJ9jox9mzvHcLVHSAudi6iUv32LyjZycNx2NUDgEDpPR22z3DGQqMgERzQ1r5AHqhwqNo",
  "key6": "2wiLmF1NHPzph4UnJqogG59jAeFa68dEULF1qzDQKCF7ZtkAFF26gMgW44jZVQQzJWXrZy2Xt8YP4E7efCei9b9a",
  "key7": "5mFfawPgVam57q15FJabywsshcT77pdufvmnbGLJS6f6jWCHt9PaC1fHsSKaQE4r9NXpFJVDR5wZDRHSJVHUAfqG",
  "key8": "42V3qQZCiCPYohGPW96rzjgy2XMcmSoKPvB1dcJWaVqdCqQQduUrz2xLnqGrTRkuVWBb1q6V8QBmAcDGEzWzYLWk",
  "key9": "3aH8LnK28xJuMSbRbVbpU3LPY5ABBq4npmnq5Kwa8MpxjWgZuwFe5DeyeSer55CrnS3BRxpNhDq8CrE6UV1TBqmy",
  "key10": "ah3djP8L23BGQBgkq95EeNTUY1nEJFGXMpEoHtC7K2kvNQMWBqitzkdC2AjKGJowMP3KVv1dUrLDYAk5WcWm8P2",
  "key11": "SyLXyciWqkmaT2YrMrCQKWMF3Qpib9Q4HxkpNsooSyh8ggKvEJUdKatPzZZKFdCnvXZMmz9WU2o8Xt4d7QbK1U1",
  "key12": "311K6L6UetHreqDJt6oEeL59Yg2dEKbjVyoNVesV4Vbpc6VbPAfABxzzZk9AzXvBLQfs2WAHBGq1mXkP4fs9JCws",
  "key13": "28B8mbNZsQuCVSy1JiwE1zKBHPymwJBE29TxZ9SyuydcYQWL3T36CmVL8Jwx1hTft6CDQzAnJw2NWnVJTyuXCST7",
  "key14": "2Tqxx3CrSfWg3ChUobM82YbgJz59WFTWQtzQ4Bc8ef2rB9RH8dsmWDaQaDM7MCNNNQciNAadekPZ8esKrDyhViUx",
  "key15": "TsHrdAUJZtrErZiQYqTaENRDcrdp4Xta4a7rvZvR4hWLHZd3F4EJHmQQVFg9s5YUvBe1P1RYeEkJnLaopydFAqP",
  "key16": "2wTkvNGHMg4sqtXdyNyueBjfSqGfJE2nGWN139V8aVYWPjsCAWTnqzcxN4Go5WbUTriunqEFBkM4dxmFmyr3PYQ3",
  "key17": "35xFKftqRbeBsRfqXbrvMHqwJ2ZjZhkeecpjXWgx6Z9zuaVCaUzUCJBrNgxiW1WXT9kJh8C8e5WXPChqKApHXRb1",
  "key18": "44nAyY5Nr8z8GGTUDo48oJyqL7tjTHRnyinYFUDTuU8teve2mnu1jTQzWeSHBvVNEJESumcnUpfN7QsekwLG8C8C",
  "key19": "5CwotU2UMKfUPJxYwyyEp3ju6uxUAqk6NFT5ySSLzH9LedwVk7gqt6ce1WAiAtu81ffCz1zcJmpjP2eCc7gUC4gv",
  "key20": "2DzjYp8ZyLF8UxiDXaMfvPAU2zQqnxwLgXxoJFZLeUzv4aYo9N2jYQyk9A5UZKfiVUYs6U8qQ89XDMffNStLLXxb",
  "key21": "2gp2uthezbM7UgEpa5CKW5Sz6jjaJBYWrGqARXQLMB5cAXjb1vHDMqhGRMJ8soRV7FVjVYttRw5zLonaJsEuSYwE",
  "key22": "5PWW8tAJLu3zP8nxB7EEvuvmUEyAEiCh4aaMdBtpwwVEr2J4mZp5cgLxYX4GthuYjcZLxVHNbFVn7Wc8XXkeMzju",
  "key23": "5uqz76YNRJZxFgaStALvha5cvwkkJ9SvrP2EpsAhob8NX9Jz8vsQxT55wFYeDeJVM5PT38TkNHEU8gntrDKaXsmW",
  "key24": "25dKqB1vbct5zAfCqi2h3Visc8CzPxQw9ez7jVpHLroHLxEqmBr3Ukeh4UZVktJfiCLuaYw8BaWBEYpCNSpktcKf",
  "key25": "2PRyTj8jRJmHZZ7VasthFFqQsgcuZmEghYWtk5Qaw8zdV6LWnWnqVvaZsfTsQukZ9QyW68jmDEzYo9vJJEBn45oR",
  "key26": "4Stb5K1EG48L7KAhJKJyxH2ke6SzXZacU1xBL1zPRpCBbKfTPhQH5TvfvgJiCrpY2jV1kPZJ4bPDQMMi47hxhpCU",
  "key27": "5pAYyoGZi7BQQ7NEqR4jpYRmCBH6FruNSv8q38tVXWVMei6QeVxrFC1RVMwma2xu9GJu3nXAH1N5bB1BFoCVgQMY",
  "key28": "429Yr21G8g73R27hK5WKnkKUJDD2FXcbpQvkrEB3xWYspBuLzGCjD5SGUj4utGNvVMFLQMc4Ds8Ljrmy5vEm7kZC"
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
