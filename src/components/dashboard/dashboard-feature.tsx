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
    "5nh7Q9PGrUVKtj4t4gakiyctBuQ1DHvNTZmMXVzXNHDjmmk3ZxymSQtF7D82aLiGDAXVX62Hwu1bgCHB9ZcuHo2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BArXfeSqNeMvdvhUXwYLihpQQWMdjHhU44sux4UNxwsUK7kQjGabB2mF4bx7mCMcgo5iWih9tivjDjnTUezFdWR",
  "key1": "X7ZoiidAb29p7AgEtnwNvkSEfJ78DjXkeveNvwSki3vi6C8Dzp17Zd363Tsmv493N7Rh1fZrBDbuabui6W9wHMu",
  "key2": "3SZF18yBBQ9WgVkdc84bhpBaANs5Ta7bVGvSbVYKfQe52kjmLqu5oHNgVCzSaRQWTWSS1gaSUuPvczAGY1gEShQH",
  "key3": "3YtmJtMYuX2nxJSWhyqTuVLs5Fudipiiu8v9qFEu3tyGngh6K5jcpE5fSU4PFpMw6UXQT4YChVQpEwGoJeeqkXrs",
  "key4": "4zYnMPUBy3jDFSTQfzxjm7Fze5VSDZuAmvjwoj5gSpDiAypaHHf7HsmPv9vdQCjHEhVQcHvomjSxuMfuyU9ibfJf",
  "key5": "64KjTDNBCRZDr4mxS4MGhq1nCSAe1hDxZUSVt37oiANw7DRGvsiAYQZjr4pneJwddoVJteAvbABA4A5HBSKcJvx",
  "key6": "46Gc91TZGm5UWMNkNN9HKMBMdjG3aFBdCdjAFvXASqj7ExVabfaDKt5GvmMKVRbneDYb5aSXvVKZPFininyUWNd9",
  "key7": "2jrFRG4mgPchiiVFds5BJotVwuY9sucK3jteCKbC3QU8E7qJ9QUF8zgoTZxNt3Q2fh3b69gpo5aq9dYH884y5Tih",
  "key8": "2Vfv9NQfPBWvTmHp2EWci9qzryoipjbYS66sxwtoPsyLhYrMzb3gA1YzkB4kYFcQQhgUkTJ1NkUnrSahT22TUWN5",
  "key9": "2jp45hyxPC339YvKPepxEf7XRJeg8qtGceR1oqU91vubkqc2yg3iNFcY1ypqGkLH2zA8ReQ5GHLJjyX9exzaQMuv",
  "key10": "465fQx3sCHGEaL8Jb3rPa4GFq3UWtFtaz1t3FHfLuyQ59qr9i3gugUvKT9sPzC3opQVhGhLrCDRWuw7zJsu8zzKT",
  "key11": "kY5k3Tyy8Er9mzu6DwxRMB6MDj5fg2xkKABEj6ti56NqSiGrpVEX6ZA4K9iYKEJuRZFD1bYitepTsoJWZKgsYLU",
  "key12": "jBrJVWk4hT1SSfxcPRM8wXq6LzhwgrmRNwU4HbUW6P8hn1gqqKyVAYV5y9ZjiQXjT1eqZHbHirRpoHkdnTyqfcm",
  "key13": "FTmUSf2dAEfwwxp785zjzy3mfWWtneSo8Typ8ZhppLdBBrkkUzsp9S7wJ6SMRVcD18GopgE2w5Vq1SkAgf5nfDR",
  "key14": "3cnd5H5voYLzFKKwuix5vNYgbfSHyCqXgiiwhCLyeY9UxEiGGjXAKs2sm2mRD8AJpMCyuk9hrGtXkPtfvFLZEStv",
  "key15": "5z8zfGDVuXhKtG7xkqMzKD19u5DBywqxKH2k8PBMeSsf6CcuqyxjizvfyGAC1iEDWxqWQPfvww2trDeBWPa4Sgw7",
  "key16": "4d5txjuBMJgwivCJfpkWUrK9JrWM26gN8wfkTQWBjRFHkqaXFHam7Se2RfEF39P5vfv1R5H87vEYFdDujzQrxueV",
  "key17": "76F6ohFPxLXicQqHe3An1doJYq244bu8tpgoJG6rAmrSVXo6q4rwuno9b9PGFZxxstkssoTtyu3kSBhaMMVxXUF",
  "key18": "373QC1J5YssMf4YBUsurkXeLYseZdqvr7KaRNaXjUs7tNpVHhZXLiite58BqFW5PexDpHQFgL7TmJvdy79G5ArGS",
  "key19": "QS34PDXwBgfZgKymdMMnX11T8zTUTbbFNNX6wQbGuSbCSzkv4s24nHDfh4En3YQDDMh5hBVM5wyQH44EEN6g37Q",
  "key20": "558wxKGwytKxDv4GyfwE7YHpzsZFQrw3rqxGzWZNfgpxY3poQL7HRjz3XUQYGFnQKUXcYw4NP1TxuofHsTkhmvUU",
  "key21": "qsbchaDtwDY4781ckS9c8sEYrx2udiQmkZLk6UmzTNrU1SQVKBub6fJTzBfetg7vyunj4NN6gWtWMi3AozvroET",
  "key22": "5XjaeVK2gPLUunV6oUKPN7opyXZBDoPRc6qACsXxQd54rnqGEZeWNJ8Tg2iFScoa5sUXuAALc4T31eVPrUwx4K3o",
  "key23": "gWKfnua14zG6JDYXFHV9aWvSmmbkDU3M8zjYJWwtvtuiNRNCzXaGWAdVPMQBKU41DQX2Gyo9wKYyGCJeYkaxvpL",
  "key24": "5Dpo5mafUWZEzETVDYmT1U9YsKh6RSiJ8LaSZ98JNAmubX53KoR3BSvSTNYSAmoJm5PYoeX7LZRRbkKHMbWSxd9g",
  "key25": "2bMW1Fdhcq3yuoszmnapVq77ZbqVWxrQsr2BX7k2KhBwgNPhsV8XyFAV12iVpac6ihBkzGzWFGjVCA3szKj7xQ44",
  "key26": "4ZKjPJDrzy3MCheuZeb2hcpixBhWjpnnV4XiG2JR1CT2YFUL7h2eKAE8bSxeXifR2ixbGa182pbzeqbRqHsCq9Fw",
  "key27": "5gQBZjPF7T2jkPQmN2Ljy9XN5r9uBJEiAD2416w5SsfX7grGVUUf2Ldch2vdb6x29Vzz7pFff3fNyXfdxJk1xE7F",
  "key28": "27kmEVsgViSh7GUJXzzEC2DETZ2ax1JUrNikbbtNUQkBABCvdL6Gy557uU9xtgbUgFVs9rvPwt5Zs6YekC5PgS96",
  "key29": "5znzxZJ5Rp5WwiFn5VpGv3Wj95sozJApj6kDNEFiWyeyYemZPn7vaAJv7SKLiG9Ka5N7CP54PGaFMyzBUz2Kx252",
  "key30": "4Gi93PqSZ4ftxGS9YxGoWMSKXeToTmn98YY8cemP9aPstor85Z1fKex8Qf2EpcgAp56eEdX4mNUBjpURL3t6EfMk"
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
