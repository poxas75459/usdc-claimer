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
    "3xY84yAQwMwfngq4B948NB7Nz3V3XqzySsNWbCN7xEqFgvXZcAi7TnktWArQJsrFJH1q6D8s2XyXGPgmNsb5HpzR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TNZ9pNcQhmyBHKiGa56bw1qMzDNn2EQpfKYMG6pjLyqTs3xkEmwiyZkkDXqSDQMkWFnZoMMy7CpV9iZdizsGDqf",
  "key1": "27TPbHtbyjw3vn9Q83qpvXt1foM6fQgRVAVorN1dWd8q9w1C1h49rgQxUVMcBAEfrZMwqRQvH7KqhnCY1iUuZTBy",
  "key2": "2NnYLek3xZLd2mxBbReKiTnTi2Rv2MD8ygdEcgba365LtLaq76mvj8CBtKXXNKzCFneAHCD5uGmhu146Qpu4YE4H",
  "key3": "2GFRDh9ykEaMX3ofRPjdaisrVUJgs4uVqG342XZuTxHA5rF43M8EUfEWsonkKR1acZtc91KE2xRpPGcoRyNGNMSg",
  "key4": "3tL94CRtucA9xJ8roxRBp4XekTGC8ZfkqHMKe4jcgXmzxnabvALsc5oyT2HYs74iYR3voDek6XpvtVQpAn4AsoSF",
  "key5": "5wwTYsMJKokLX5L8UsvkUvarkJm72KTQ8SUqsDEyJXnviGh3xfSzq9bm1PAVHES28kj7L6UeGgjXSJ2acSDkjLAE",
  "key6": "2CGTGWwYHv1QSvaDJndQJSLNCjE82TCBjT1ozo2cyeJTydX5mmFFAYuaNtNeE1TwQow6gMmkUWiGD3iCbU4Lp4dR",
  "key7": "4H3bYFmpLtMXPbn8F1uSYbGsvRGJctNfV7DfUsyvpp97qKSN9TcxGh9aDND17oJ2H4HimCr8E7kLfKihbwHvfYSk",
  "key8": "3Ned1e1zWfqJCHYaAc4yVKxMTqUC9gG3EEHDTFB9jZ7qofhnbXWUzKghyHcNxhBprTAwMgKB8doEsoP66VEDY1LM",
  "key9": "DsyxJRzDKZmJx9BnG4dKggV3nZ1fsgYWkv4VV9vGW5HqzCaPFDMyFKuvPgepPX3qUfen5iHAQR5xJxQSbg997Vh",
  "key10": "3KKskrXfEZQrWS6NXHfaGgvEhPQpDatvPHY3ZKo45sMyXX7YiJhGp4BoP4NEJhPy2AbKdtNfioEtS67NZS2UNe4u",
  "key11": "JJ1ES4i9giKtqKSSQAWDskQejFVCYpUPmunFw8AhYxMC67iWN169B8mFZYwvGskENBr814ZjBbaZoVo3RrgUXFg",
  "key12": "4HuvHUWgGu11Gdt3ZKDX2QXqML73oRNxDZ1FKQLM5FEkhZvYGzjangXEBX2QGENrRB2u9mAS5SrZqQgEYSTpod44",
  "key13": "5D98DfTUbMYaQzmARGAvCMxFgQr2wWu7XCjE14SeJaRGSoSQ7EfqUcUtwSbG6t3BMoQQMvfVztMQTSXa5XZqRVv2",
  "key14": "3Gn42aLVHZqQb7u3SMJh41eNjgfiqxboeBS2jVtrSUWhkZdAuFQQhi1eL68R7erviv4ta43Qptb1PtA92DdV2cUT",
  "key15": "eZLFnuDqNPbBaHKg8Wzsqqj6cqg8MoshPfLWbHw8g1MxHTP3gthXKyR3pvwmSCnBWefpmPJEoWiNgpzfHUHJNu2",
  "key16": "2VHqUr8DyZV6Vg3DzU8xZvnCaZ2wE7GpbLEAvhx1LwTF45pmPgbaqgftgin5UfEuLoJwJ4drEwkWg6KcZProg7TD",
  "key17": "39AZZxTdTKfmDDb1Q75CEaKxPvXT8qyUyfRudXRiTptogRDn1YDY4MV72BrAHy8mQz11Fdef5FB9EXmBFvdEPziQ",
  "key18": "3jGAV36AuXi5emy8pDBetCrV6Gq6o7oeuPQiWPHh6KU7BZnTreJT24x4feUXjGPKjUxwLfPWUgV524TxwrDjYkV9",
  "key19": "XozmPQggaTFWjDTmQEGc5jWm3drsYxek7rTrMt4DBWdP4qaxejSkpaxV78cVX74RRGKKPjUmM65mWyEYHn8AQ1X",
  "key20": "4fyZzAGQWDrHs9RGx5fikr4Qy5LXVuEFxM5Bxv1x77WcKXgQ3hXNEU822Gphqmvne8FHRKUsjF67SsCGCcwNqXpp",
  "key21": "szPaFyiLS7N2666YsC9nwzotuuUHE2a8htKaiqXo92pe6SsYsugKRBZvf44CKfGDWLUDif6aHEmLmzvBM1QXQTp",
  "key22": "yojxgQy6oUB4ghTXaRfpn8mS1oNPkVeduU3UKm4wroys8qGTektJEMS9KYsyVywk13LosEnyj7ZumPiTkrEwTPU",
  "key23": "2GHkXCpSnYyt9zCC77n1ZTqKtjeXnshLKJsdV3EFhckZqusxVb12UjBJzoLGoomw5uyukhkba8fxKom5jaucx9Eb",
  "key24": "35eyDRhdZS6TFqfHgbjv51rp2RXjYfz7HYEAaSBak41SXKBSCQnjpYgviNpDZSoGbGQfbbzMRk1uK7nofC3y3JfG",
  "key25": "EdAXambUahDW8dJcfGjFUpPcQz4xbfYrjhgCoMR1kWeADzuK2ipNu8HTJYfYzNvbAE2Zf4TGopQZKfmDZKv4UJk",
  "key26": "4ydWVZp2fsgncNmfVpWaE1VGxeRpGfahNivouV376osb5dgRNDcuveah7FX3Kc8RAohs19g8zWAN3mk3bZth33rF",
  "key27": "3ciVR9uttsHbAtpFS5iF3F2DWGXgtt7UFP3dWywqQzKo4m2sWooQN1Nmn41ncatJXSBVvhvYjDmJEa2iS5nexiZJ"
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
