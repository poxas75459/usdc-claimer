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
    "5mU1hz1UMuHdBW3FufpyM8D3dYbWNLbshMdQWfwQouHMPa9Lz16oKHCBW8GX7FjeMKKFqZ9vadgvobqGPUFgLcuy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UtpGKR21HTSFMpH1XdDnXmyNQDu21rSUYWvwKKennrDBYeWyoDLhwD3UtjQPdPWHpHeNZYyk2iKmZKdc1MkYXdG",
  "key1": "4z2smTH9ZP1b5BTPxeRsUQw1S4FDpSP6xZSRz1eNmFJTNRguG4oVakgXLAsKgqBZC3ZSXnYNMtchz8emLe56QJ9h",
  "key2": "5hpTtxeHJDJcRedWpr3VDnzATr4RUPcVb7J49LHLeGDAiSMJ7S6PvaroXNtCPzmoyoPhEVQY7oytXtMR8UFmMVNr",
  "key3": "4u8Q6kfBxq9BSBZC9bPsbDRf1pogobxLgpBsqHvDEqhFnfHKDPPbmAqca3NepiDatMS1foewqMs5D6gkH6Ecrmaz",
  "key4": "5Gzve2nNWKFRUaViezkGR1B8X2yQir2ebCoK5BuBYVrUiDyDnG6GicNavJVTUEtEMJpNMUxuC77q23NXUncSwf6G",
  "key5": "5FpRcpmkTYZJsRzgLM494FQFnUVgjJJNLYGK5RtfvAQUn49rp8pCtrPRT25362Mnft8NFDxrALyuHyZDvxjAiekF",
  "key6": "4zsGGxsTJokJ1CH47HrdAmpNm49n3uM9zdhuvqPYoCCGtv8AdTbpd5sWuX67zhNie6zk7jPt7NU1f7Uy1KD9xdTz",
  "key7": "5Apk4Rn83rprjkT3Wu6Dwso6eXdd6KssAWDCy9X9GD8uxBveeBFVkXDLLF5WgdR6C9coc8Vq7yZpvFvZJfZbtA8a",
  "key8": "5pNyuYdDJG2XGjSWSXKV4tFq8LgLx9Qq5hEbnBTVHJ11mxU5WXtqhugiKz5cQrzeqcF9BWd3srsJv5Y9PWmJvxyg",
  "key9": "23y9FC6fjV1gq6FZYnifB5LGECctwVmzE7d4Bf1fs1odkDLb51tjNAdRaKUZVWq4by76qDnuDgq56MJAvQAwtVtk",
  "key10": "49okSFS3KfuxYWmkLioKpZuVtpnntbBH5aPJ6dBXHJhGW2mty7uMwq2DcuPAayqG8bauk9sQphMuZJFtqTZwCgmn",
  "key11": "33ffCYPkgs2pbrE5cUyStZUYyNR5yAm1wYXkXbJoMRys9snJJNnuuK74Fp6xb7bBHF11mfnDD7mmH92nXNc1ZSDy",
  "key12": "2GVpN6t8FLLF2HmdTxvx531vwRVsoSgA943ZdHKd97MWyNwtfEEmftBEChQaPsUbNShwqSWzUEdHTT7CxS6LJ84G",
  "key13": "4qDzLD61XwbMSHfuJ96xzseE9oBsomwt7QuQWdG81yTeD12kJTPiyS99q8DjRorj8pAicbLnNVA8bV884pXb1FME",
  "key14": "z1DhAF1oCQV7xobFXfS266G3UZispGc8RmLehqva5gA7uUneEaFFpjMhe7kCFVmijjkHQ52MyAX9JKrPCLcBb9c",
  "key15": "v1AUDFVjzALUwC2EEqY8aQWq4CMCnsSv8Q7qm4ELAg99dxqNjaYzM6rmK3Wnt3JRRCQbWHAvmZrW2tRf74nRk4b",
  "key16": "pjjmjhWELAA2ktSyKq1orcNeK9kVpqhfh8XdT3Au3AkYmWYTMgZHKWyfNcV5U5zNpdjVS1fQuJE7NiFFwEtiQir",
  "key17": "2pp7CnBHFseDNQEQtFWxFsUk7Mtpdppp1EyzSnhUJnKpufDi8qToKk8Xv3Tm1dFwgyv1rvonPoA6bSxsxqENFRjW",
  "key18": "4gEhTR7W1tP9afSj8p6nLneEwAweEV8xeKCPQyX6DuUNfzEmp3CBJ1eKLXqQxzRrRL1sqEoMsrLSCANbPjo1ft89",
  "key19": "2wEFmoHmpV16qHkopd12ne6uBSjSdr5eYjNP1uAeiS7FKctFBjEHzbZKJvhAQ9agVhxGUjMuwqQZ2mFSSkXRzPeM",
  "key20": "4BahgGomGa8f46EzBrxessoAWZq3ttJp6CHtKLLU6UXDu2eAbHqcEy4otzAeySwRn8ubaGJLMjBnxio7LJzWvKBF",
  "key21": "2suTWUdqetKbBVBuu2DJtx2C1MZ344PSaqYAC39r5sdkmwszUUBJtErSvsHuB94hr4YQqqDNz1oL4jXP8B7wNayS",
  "key22": "Q2pxaenKsq5U8Lq6BFZX2LfABWMzpo8WqDWpSgp3hv3Z8gyj5MfmpvefVubXakS1r9hDnR6k2pY5u9WLK4x65ap",
  "key23": "4jAX2LgEWLdkZCJ54QLSJHnTNwRoB4ETUjQvSd3nuuxk2ib6b6zSq4KkRXSA2p4pRbVX69A5aNq9wbpe6mp1enXX",
  "key24": "4oNRuhgMkYGoksotfPbcEUgNdDKCnbgBqt5wNUsm4wZ8T14RFHKZWJduFAhhY1gkWLUcaukUfiiatTpkMS4aznu2",
  "key25": "2FyXLGZp8L94ZwZZMRvKgJCzCp6k7mJvjU3cXsY9y4P5wrdXFqxB5DBPhU1uABj63jxv9FMmDg99hAtFVVDTat49",
  "key26": "2PKq1qA6dZzyzhTuXsHFKg3oLU64yK2LMNcYEWceWzpirSos2LttSbWKSPezkaAxkC23ALdRBKUaHtvdt518q9aM",
  "key27": "5xcdzcfJw87gLak4fFvCMcUwsxoPajSLMerZxzFVLrexiCUeN5Fiq7fCKqQxVHjPzVQqZuHsoyCbcRzctLxqvYc7",
  "key28": "zwttCXVBnH9YCCtnNrbJ1QCrKA6oUEGPjTFAgZhFRgNPj7UohXWg5fZqg9NRU3GY6jKim1dSJ76FL5HYuJ9gbgD",
  "key29": "3GP9MiQnYj4akPowsdnRB83JXypimcXCBj853248wfvfyWiVJAxwqbqCgVC6974hKT8KSsw1xXCduZWzeLW5r5kk",
  "key30": "3vra5EvSo4xRr3NzsSC2Lx537ZY9SKLzszcAWeGWbYj9fDAjMmjLq6JFfiWJSWuKfFLEKHn9i9BQba61HtmAZbRz",
  "key31": "4oeZBMaBE1rSSgccJrMoneRSTfHSWW4xSMXrPjBdUZfUxRbRuS4c7cAJLzr2PtnBPmNvt1bsmnBLeW87qhMuWZe4",
  "key32": "2iRAijtSjhgmWaafY7fvjJGB6m7QknAJZ5N3ofygi8rmg5bkH63mjZnaKr741seXVMLA3oNujUdt6wrdo5VYMHv4",
  "key33": "38Nhu1vprCNNi9br6tcoEX6kGWVqMtv2s9bEF7tgnzh64Mri3cXvoUqE8ULhafUW8dWtTMhgVz4nstheKrYVbL8Q",
  "key34": "5xP7z7rywmcMuta7KQZyq4YWxdRkHU3VCP5Mauj6u6YDpQ6XBRYDxM8Uoawra5xKvYnJerNDUkiXqe5p4CedCncZ"
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
