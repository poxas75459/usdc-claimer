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
    "42c4MNzJZDy7nLru6y6kyMBCi8Eeh9NXrCAaPU1HmKV1PSMouDXEP8FK9QBCLxBzAjfXK2FgVkpsMFCSkU77nG7u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hbeWp4QcKxLvJpkTCFyr2JY2jz2qQJFtsaoFujp3kXYcB25HWDk5a6Mc8ZqwqmtndRWhxisfZ4v1VjfQxnpSpCC",
  "key1": "4akvoQX9GXdREQD3PKpTjEq1gGcBTfYereWWkau7KjYsGN9ijuwWHUnJwwBcoB1NSVpHeBFMfP1vLvhrhqwaqKxM",
  "key2": "4JXeMYzmLG3v4KzJv5Egrc8yzGVEY6bPvneaeKpXNDg8eT7SeRstTAZBrSvKcddmHfJ8Lq4Q4qDV33iXNJx9rS3j",
  "key3": "5kgNa9CttKhgq8fLhFcGm2K1jYQV6qeJDXSPPZ274Abk8QcXYkJDKXbLh4h9gPkG3zi1jrwQVkCqz7KndKKm1ArU",
  "key4": "bVySDQNUdrRZRfkwQQjGuR8ZsrE9wM4snojJHh2dftxm4ENAUhCqDE4Z8Kz9z5xjpabmM6uMPvxB4DdzxykJhhY",
  "key5": "32h8JWkMYdzjDZGkkoSneAhDzASXQQYsnnzDVgbAjdGMQdSUfJuhm4ZW3J8opP1LcyfgUNq8HgWjZmXPgbSLixVM",
  "key6": "442R9q68EA7CKFqMhh9rHnsR5fEpsKv4USG4MxEsp8Fp2aEAVrTU44okTGBNTGPYkoRit8iv6d8Pfokf1B3tQL4f",
  "key7": "2KMK7WesBDdUUp17wGLzwMZm95rVdqDHzsSx3ys3VoB8gFasFjGgxa9M25KrTGc5ybkLGpt2Ybq2Sy51w54FusCh",
  "key8": "ZNq2VnVhj3NyKw8kndjrX6qqw3CSSXdBQePY9eqcviKpUCuSJKRvQu1v6vGUY6EB9LoD7PGo2DeCp9HwzcejHXp",
  "key9": "2nv9GSMPvt552fKA1yHTzjpxB4NgqiCkRtM24kC21kzotugQKoEjbNPzhk1U5x57r7xZkpVQt1czBKtndTUwSTdG",
  "key10": "5mkSm6FX87rY9NJn74eWnzMJzbYWxWVTLK9hP1soGNRys4KW3ZpLv7JW1ZZ3dZT4eYHicGK2wvGPK1xmhdA73Hyz",
  "key11": "4sa5ePnFFjZiGSrxoyZimqE9kqtJ4hRq5ppV2WwVvNqYyN7YdTKuxae3usPgDajMrP8WPxy81ajSbFzoYboEktVQ",
  "key12": "3ywiS6uW7k27hKjKZDPzCvrp9JbzkysfXjghKCJFYZxn4eWV8Z5VTGFUFFTweaXuXqBQwaLrwRLkwq3z4QXA3GQe",
  "key13": "Y6R6iZ5pw1gr71BNB5pXVwZ6tVvUDPUBFr5G7DdCt1Jj8vDVToAFsHSYRuMS5aoF6wNrjFLhhYsXY1DjxRtd6PY",
  "key14": "4ZS6i35NffSVaArKpf6VafJnNjfgBHegyU88LBum9RuiEJhgs62FaCpKWZaMPPo4KwjPmw85FDEj982hRxpCeGyM",
  "key15": "3t9cXG1snAMnbUckLFJx4gnr3KVW4NsW7RJsKvJxkTpAPN8DAyWBYBALdUHga5MiDvTwJ5icAQVNLocSEFko8Rvs",
  "key16": "5orM26uRQcaWbVNNBAhczQBE6bLJSeuGuNaHkrVA7UR9nWH9AZevrUJ3wuQJV4k5qniwcJcnNpmjbLczALZm6sv8",
  "key17": "3B8WumtQMuB9VcN6UFNiVFgUzHiRhHLEQKReGJUsoYEe5TLmTgN38gbJb4u9xyGfragc4xeqXrC4gwtUrFSMGyK6",
  "key18": "xJGZGF4VgjvYD4u5g8ECcSrzXazZTMMMdRe2YtZ7SAvC8p4mG47f53Uxwg8TSFUHaJMnRN5d68CKbrt7tGhMDGe",
  "key19": "2rvTL5qkDPSksJuPFtQxa2qPDcz7hi844KHX8Xrt8u2TscEHZR4jwV7VTtAWvaJkqgdC3EPyUJuJ5oVwQazoRqhT",
  "key20": "FF7JhPCnLGjUAs8tDVZA1C8PPJrEF6RYrKHM2YcyoiePY8Bj1uZ6Wf8mcxHANAcgiRkSxRaSxB4oLDztR98dP1A",
  "key21": "3FH34yvDous3Zeu4bKSb1sGcyMRsn7VnbvUNGjhHDp5hMygP8YohxeFaGw4xJgKviUmqA386Sb1Q5oaANBYjcXnJ",
  "key22": "58b1XmyTWEiopenFLsHKdYjFXPr68jNMbkZoBGrvdfC5QwHeCBtprbhUTPj66ihoU61VjnFKejaoRww4SDVb2NMd",
  "key23": "3waj3DDhVdWbc3mjynKD7BVGsZz8Q9vhQ1RjZQ8T3cyvG9rQooGDf4NTkKA5GNRoChhj45KSkNXQQce2AAVMcs4Z",
  "key24": "31W9HW79p1buvdxgYcd9iG8qCxMfdQrLhA2PdyHr7wTiDoA8WTt3k94CHhfPnFHDWxzP9NfsN551JiR59bQRJE7R",
  "key25": "4oTvw7fcwb9RN9oBpzim3sUrRNV91mKnPwKewNihwj9uh5Gx1Z5tJoyCeWjE5Zd86xaVv1ZhEtBJiv8jpLiFBxx8",
  "key26": "3wSdbXDVrbpLV5mQaCFwAuZVWP7JEreqi2ccvqVj42tuznYkhRo4cbcrQcnYKJiN29ZxhH5zYR5TyZRvz9hjtpFL",
  "key27": "2nD8ALUTAnNC8WCyDztVPccuR8bxxdmus8ZtTNcHQXw5y9uKLtLCDaQrYH5ZzNPF4TyRk8JwwjexY2WpYeNw5EzA",
  "key28": "2cBLHjb6uVE7K8jxXE34KPnD3aVF9UY3wPpp6Rt71zNbRQBRA4pu3f79kB67SPBTE5zwsMVYkpCcLuNjtM4RMKTe",
  "key29": "2gDh89XD9yHh6FFfe3NwzJore5Kk6JmsYaQzEAyoBj7Y73459DJTWian2ZVAhK3YSpJwD9BiUGw6mai36KKg74Qr",
  "key30": "2ace7We6b2PyXQv6BJBWWMSD68oyLoTgczrxaneSHXAtYJ4UmUvZ4KdwBSRc2cSPfnLzB8DsStcxNzmroNedCmwn"
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
