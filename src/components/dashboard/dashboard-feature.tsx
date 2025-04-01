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
    "3x4sHwUXHHVTXaApcPUz6XPJ4Yx64Ut8M9xbQFMo1XgnJ5z9oTXJengNtmauW29xuXmvHujfJHK25bfantf8QikS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t3rsEwYWLxvQyFkLkU6Aw7Pzp4BJxwCnCsrNZCveb2SUnxxhHsNyWKwsWG8kHCgp4XQisktmpDqHpHU5N58cghC",
  "key1": "4xDe4FKA4rvpLAuKhwEYDS7YWCeukVTy59GJgwGdrAPWvH7vzGQStwpbRQM8wpaFwuNDkQQVFU4pSx45LJiSh8o8",
  "key2": "34oDjyPkr7ZXv6qpcu84xthmW9bZAi9s6ovsepiyy8eLtUhD3FzJyQXaG4fvr8ZSYtK2FB9pPJMHhCpK3kUZYo9o",
  "key3": "Zi3bZnVrspkCvmgnZnS6PnH8LddpfP5uv6RNdRh3hDA5LySJPLEe8KpsokLPNvWUwrqiZKmB9mjvdKpW7DzQgA5",
  "key4": "ATQhJL19gJLccxLxQx2crRqt81zgEKUQJAeCZCGqS5wWWcZN1Y6dZjHFiLwASnZrBXb7q4nmG8Q8Evpite36EZ1",
  "key5": "3psxrFVqwfArT1tF1R3Vf799Hg6UWx7UEvjGZ7hg9oeEKG3FMwGwmjBZ54r3dMedaPry9RRTGJX3o96K2BL7UArr",
  "key6": "4dho41JtXKq4tiaaTzBCuVP2M8ggyhFRWE56v4Jzmt5BmtBrdr7YGAtR11LFQpDVXNcdZDtZ8gnawxdKAoQPEfkw",
  "key7": "cao7T7KWWDw4YH7cWp8Y6NmNoWkyRG1C4iEAeTQx6KK5vppfTxX9tUVoYA7t7HkkVVZsnmXnJugorGg8vTRUKCH",
  "key8": "gFiRuL2YZhjdp42hHm5fiVMUWrQsWaJZxr1Y6Ci3WPGCefoSi9GbkuLocYwTJ4eDbBrYwzTxcnVHxCXCf5fXjNx",
  "key9": "d2jtwKZ5BW3GMPj7gDWRepXfH5JYantwVabqUdNuFGfJxXtxJ7vRMsSGapwNUQoCErHqHWKreMEGTqCkC55Ya8J",
  "key10": "2DxN29fYc9SqE9chmHCtZw2K1xGdhXggLAPpfBWNzYuvnsgKbfJCS3PRvnet8aF4aB85NkTusuGUEDS9LrFsSEh8",
  "key11": "2Tqd98W72rYoiWFFzyee4Dsm6jLajGjEEbGpipVVnYoPWbjaKmFvitvqwRenQWKjuFVFX4ZKM2EWLSiQnUp4gD9Q",
  "key12": "4LS4g1kDm7QaJAp1r3jCrvQFbrhy5cBd8ekfvdHgs5DpaveKmBz4qMhPYNmw3aQT471NmeG3mSD7Gm6pWVb3Aerc",
  "key13": "2BTkimvfHyNFtYNovi1VPxCfQh2NmnsfgfyaG145iY42VRRF14kFDJGm9BMGmBaGjQ1CWKqX7HdzUTphXRKyygXD",
  "key14": "2oNhvmrtQgmwYn6ir8SZbANrtdCgSkXWZGzBhzrKjfkHhUavWvkYS1139Dn6hUJqZjdnbk8GkWn2Nwgue2rWGaUe",
  "key15": "5LusRQrFVCYrxm3Z9iBgoKjsMp6cDfBu4wsNpRqkDptxXKLfPHsTo8iTfMdM77iWDpmdp7z9RZskLJz3WnEk5noD",
  "key16": "m6x7yRicakD3f2xm3KuhrNQeRE3gCyvdQex1eL7YBdK3xj9Fh8UKYAkpqqmkF6Tzyt5SXPznComW1jcrFUuek81",
  "key17": "2uE2Di1ZUansfzW1uvHFsAUiN33iiQJMZpqcVLwWURyrtsPbHuUQyH1ombFzyeezGLYonvobm3q8D38vuzwFAr7g",
  "key18": "4PvyXY4Vu8acUf8PQVrybhBi3dyuPM7J7PEjjNaDJPfH7mXTQFyzaHFBssd4Dc12fEbLCjqGw2ptCcJkCeNE6xxJ",
  "key19": "5Y1E5ditSuWdbKuXxoyMwEHao495Yw8MgM7yK9zcc9ig89driLmAC3pZY2mQpTm8YJAKFT4DaXDdZimXQNXXBbT6",
  "key20": "2UfHH4geCKig8DyQSG5rzgUFBr2yTT1ndVeeZUdLdng5hPXexbNn6ENaagBBCw9okapKE8HVe3eaaQJ85qySAGv4",
  "key21": "5ZBUtEV9WkfuuFSJoPxENj2LJeQMqBa3ihacZfyx1r9Cr9FpXdQZr2isUZDP5rvtGufhcFRoQTmwGTbCbwn3eTyr",
  "key22": "2H3E3ftuaSdRJ4HUAhhd4z1WAx1NGT2QnpdzSmj6EHbNWc8f76ThqsWFDBdb7H8kunxNQ4EZC49EWgqMKUp8QQx5",
  "key23": "4wp7rounanU7NAJScxUsKdzjyq6Fwb6mGBtMeCd48dU3Y8JLM8g9bShNF2RbpRsp6rzDjPefKSTxXMpfFRLSK6bj",
  "key24": "2KD59uEp9NZTDa1LJcjpTz8fcJbFYY1jVtEMdQD6rJPz2HxipdEfQW8zviRYRsDoQrxBky8466nZEHf9DQmXEwSA",
  "key25": "2tnBBesCx3PbtmcBcqKAMc4N3QqdpVLxkPfkv88uBeCHYsMjQSngW69QgqmYyko9WhswaQooVBfH6aUQnbMSC1rA",
  "key26": "2R8oaMd6fZQYEbn7qyp5n6nbaXCu7UdK4fDdhQjECPESiBFuQNvPhP4WjHpRLRV2NW8o7HMm87DEYM8mBCEEY83W",
  "key27": "ieqeHtk48M8z4AvxHnb4gLL5n8ojnzGKo2iE3TfDvDJSQaQVtPed6BtaRNa4957swv87fsdY16PY1ayW9eYQ5b7",
  "key28": "5jsUHpBq5uZXZ9VoKtZUic3yHkdUcsTEgPPp7REcwhTtrQVZ1ST9kbkriGif4aBBYrrLvae23fZZJHUKsmKcwWGa",
  "key29": "5KEyqDXiUeURD12wiLgwDEEjar3rkJnEAvxWhAFx67dn2RoccuxSX3Qd4vUoUwWxsrA2MSeKFAGNuV6ADdU4eF65",
  "key30": "5nMhaK8LtsCf2zb7Yxj9JaqLknHt8SJHdwNosuLcB4TP92fsK6LJUjd9vmbejVKAbBK6Y5mkV81KX18bpUBQKKB7"
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
