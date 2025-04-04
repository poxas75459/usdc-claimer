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
    "3y2wMYhakYC7T8ecmeoU68pYD4sLV5UknYMSzcc5xvUGw7DqfXa7mDKZjjNNx2itGsu9gB3gVhJ5L8v7EdcKER96"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j7X6PuAirFfF5Wx9zoZERwTeqCsNbk6cTUZRDSfm6aGZcqd8LkR54NG2P8s9RZ8WbV4awoN8BA6ohPewbUg3qg1",
  "key1": "4v3RrXERFCAJy5gz6Jx4SibSS9xqstjDhSak7MjvRLPS87o6rKWPsabwntCKs3KUFh94vZPK7BEtTmcYmv6b8Twm",
  "key2": "5T18gM6VV8MWRhCCub11efGPWykLzoZoLGXkohjfbSFZ7cdjyqGyy5GBLNCQ5SVapR8THJZvEzpxrrgnnL5Vcee3",
  "key3": "3e8PHReSfWYmCroCZsqUojYojJtH3ckn65PHxqUxBbPLXJ6zZ4hx5L7Hhf3mFNBKK8SAU2CNMhwR358yUMQN4wUE",
  "key4": "2ucqhcMxeicsvb3o3utFq81tmVkVCi9JQz2iyiVeiPCPA1RtgtrY3gDRbobdY5CBmG4ARN34kgphz41PF9raLeW7",
  "key5": "ikt29UDNu4J94fHKJU4yx8w2yYLk2gFaw7ZxXscNG5EhWWjSV2iuarHgqSF5cRnFR3muTeNPbBNiJMy3VeKmy9R",
  "key6": "2Mq5EsGUTNrRotBQkwpZdLWs9ptKBPDWfeEx2BfgVMqe3pctt5rTN38J1KEV2agDRF2Kks7dJRcVU5W4q2cKLKkV",
  "key7": "3LKMKn59kw6z1dydqGDT3PNiREb947yXUc8bU1iYYrgfVznxx3HQmtP6UcTzRvEwnsFAT1UHeeswmJFiFbuRmj4Y",
  "key8": "2otSxYRVjDxTGbsGUH4xNqtH7ha1U7ASQDeSMDCUUW7PY8CqYEB8rVjNkxhmPtKqkWgqjJRZMq22jPqeeXhmjWAN",
  "key9": "ciVvvPCqX3bNAbqtnbpCXP9uFxioaDapfeABf5gDoDHtZePJnUbd31LaXRqWS2TN589UWCzsMPJ1Ta4VDgHpWqo",
  "key10": "1gfUPYRiury3SumYXGUGooizyzuTEKhszxKPVeSi1e1eSB2RJdfvqrN6559VEBeCZDheTLRc5UcjVVykM4QJKkQ",
  "key11": "5A31mp9ks8WEiCKYmf7mczu4XtAoZmDu6mpXWy3hAWRfHQW1FEBT3BFt5H8EgsPtkHazuUkHbunTm7C282N8oRbm",
  "key12": "yuHs9peuufqr2bkR2cbHNRTRW4RXescjQ75EdcdrqexBoTPWjoyoXctdtY5fz8jLi77MiN7xt1vPbUK42LkZBVd",
  "key13": "2LLdocNUzABUrVZLd1zh4P53PZbwRvyp2MhYJFAj3JrY3CbBiFdLH1NQsvZrk9VbbEyhqRsDex7Dzn9SWEo8pRko",
  "key14": "5bUkhpQK7zGm77J9XeGtpokLmUWYYSt793n3fDHXz9N8fB8xfw5GVqSvpJtPnMpxNtrjpY7L4DWboejyBb6q3Dkm",
  "key15": "41H2szXhWvrz9aECCiAWBWCpHoJ2zwKtxMsqfeUscefECKxC9jmWkupcfe9rMXz26VPoc2x6HV47dkW4gLTwgy8h",
  "key16": "5iyJuCzmaJwp17W8iRAgBJVuRzmPTJc1YSdB9xcF7xdeSvuKswXH6LjGnnFPWV6JShUhRsSfUkFBfA6A34VfEXAK",
  "key17": "LfV5CM4KH1rz2sk5Tb5SkfGCGqUWR9C5NLdkCKkJGQgFmU7jT9yJw7gwoHw37a17hXZPxDpWGGskCFJaNx7kzYq",
  "key18": "3uESbTjkJKu37fk4eJWyxuLwNWBwGQcnsAdRNE6tEy84L6n1vt2LwXqiDKn1DJJzPH8MoZ9Y3ETWFnuRv95286jr",
  "key19": "4xukkow9GDEdbWYTK1wqxzU3zwzjWJSQCNyHXVXAVH5EDJ6c8osXJE8jY37DGJMLVtREWU5pjeij8nxzCZhNm7Wo",
  "key20": "5BgTxqKi5QSeDNfeNWCwLTFsPBNcFm1jYsuD5ehDT7iDHnvirx4AJ7bZhSU5Mmgp9tj9WDPuoioDByK1fuPcuvxz",
  "key21": "3AcRgYuTtz9u2Aymr9n4fYDChnjkJBadi99AcDdaC8uqgLWnQtoxjWUgBJbrXMa1jCS4g6jZujn8dPkES3LuXW3B",
  "key22": "eGFVn7eLZwfqUm4Mr4QmiMnLoMWbpyHFe4A6wj4iAX99T92vZ8vyXSdGoKbJ9Xm3hmw8mdr5u5cfszDaM7QFTKD",
  "key23": "5aVqWCbZ9LEHguJ8oatHeDbM5yXnF2FfCy4UqEkAiCt7iHHJeCkrwQZTutpYJHvyjwq9ZS5GV21m4CJ3nZSGvtSA",
  "key24": "2bmLxTqdRavLJgHbbDdiFMpE9NFJxto1JyZ8VzkDxKfLP8wHMmxpaaicwoEk48nVj3ofUMatehB1oEq6ytQtp6dY",
  "key25": "5E1Pd3Br67WctM2qa6hvw3Kb3xt5RLH67ccdGL7vXcsZVgBmXg4KrrYkCHRmsAaaS82HJx3JXXCSa6FRj7X8Kbdi",
  "key26": "3y9f1v6ZERwiNvWvS7tx4fvma2ihnktiBGkAv81ZugVtnCVDXboM9MwyvWH6ofiDZpnKZoy8R61uVwJEeUCM5wsb",
  "key27": "57KgF5HJnHJbiRdc4Pk2oAy13XSH8a16idSSFEwmD1ximFk8eJCzLY56satLhrqxd2JLZKkYvEuhPUCu6M1hfL6C"
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
