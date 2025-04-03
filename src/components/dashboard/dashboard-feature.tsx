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
    "5tUREtVwRdntTTuy2UJtZTiyL8odgRdKywTKyTNSwFCQHboZixLUYnhTcpen43miBKo65HAgdWHSbX18JWzbJwy8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54JHdSRtTocXTqAbejGsiyDPsNC6ySLr6jagTKhDE9VFr2FLZRRFePRVQeJXvLbFxfcTiTx8LdNxpGyyDsrGotU4",
  "key1": "3s5grrTRYeaF3QAjdYhiPkUjapwTorynDvVm3JH4i25mK38TBv8Np2UAzUe9zXkXLbMHd3a7g6XqpASpJxTjuZGq",
  "key2": "3FAVeyXyKtg8QyWgaXnDP7gpr2DPe9pCe5YnKQQGU7mHnjgXvEkFf1mXQAsSBvU7f6A5nbqM1JoxEqKL8omvs9ju",
  "key3": "3NCRae7KVMWhvaEg9s3QKKLLzNfqkFFbG66jxmA12LhGYVJAe714zoyk2AnpM1JJurHwrTX22MNoyecfuS9PPHcF",
  "key4": "B7AGrRKsKFcTXtLze3LAZSsoLsQJT7awyMxfmtyjE7VZ5YaUTYjYChuHCHGKuAEThLrfJiy1VLc7pQ5ynuodfS9",
  "key5": "535Sr42xESsV3QcAraucFaP6pYLSx5RfWQRbibNjDooYNdvDtRBnmQcReUKC75UBt4RDm9S18FehDujFo8pxiHew",
  "key6": "429QPDxvVhY4BqXwAMVsC3vxVGyrwc3MGpyrHqx9M33dDX5zN3HnZX9dxAFULds5ZpDoHnUdaGuTky5Wc6Z2nyyN",
  "key7": "2qxWci49ayH7NLbZz3wzXbYygo4o8LgXe5qvfj4koBtuaz9sHMGZDzHuZD9LyuZExECJws2uvqFGce3VtGbE6y69",
  "key8": "4dCRmT5ETmdJZNRpG5S9Sp7MGXhmHSvLEPoYMQGHPKKb73vdgd9PhmzFuoGhhSvQfoaBpDRqZjmXhKQGJHvheY9Z",
  "key9": "dYwFDwna23nBcJiyxxUwbTDg3n6pt5o6XJFBbjwT8VuzuKpdD8YUpWRAJ1MzLhWBg3X6K5k72v5KYKx8utaMnVk",
  "key10": "JHjgosBVE24FiYoBpdEXfoVj1TLwp5X3XjX3NCeGSe7EQT6YKuDMxhExTPaDBWGYfDnUtggjFQHVZQ9Bp4YTn5b",
  "key11": "4zEqfZweE2hE1pVQTzgkaDBEJPGpnyq8PmahNYfJiEiWQCjaaEpLG9bymVw13oyEKJSKAB7DmkjUk6xQiSjxya3z",
  "key12": "R8QXA1nNh1orqu4aXKaiRXDoWdG4WxinEaLGYCxUvQJeZnjm24jJVPSqMBUBNKnFnJQQtcU7DjrmiEgL262b2zX",
  "key13": "44hGu12wKKdKZD7EZLgRrFRiuha91Dco1pM6Bne4bXJzjpubp1jWMzKB2AkCVG3Bpsc9rtw8xfQp9VJnAS688TQo",
  "key14": "53KxVukj5P2o9KZ3jasvsNZBYcpDr62Gr8sAbVryjszDmXtwpccgUPAhVxzRLKxB4zWaAnPq9HqFze7AfetD3TbM",
  "key15": "39rGyX51T3hN5CQP5sG8EKwYGZxnE5jY8a4cvC4y5EeypBhBDiNfpBUDVJU22pknA3E4tDFTwoSYeZW97ZyVpkZS",
  "key16": "56W6PeJA2NXAAJFBmmm6j6Z6nuX5iFmVNBnD5eLq6XAayFAwPwyVsZhtVtn5mTaFxbysRCMdkG2Nfk2uC4ugJGfK",
  "key17": "49HbPXD43z8NHgB2EebXysLpoLDpHMqSLqJkqVr3otcZsuTpsQDu3U1fgNXwoSNK4MmaH1L1H25gXuDTuanFAMLi",
  "key18": "B7e6dYcbDBAcWwfUfHNYVTY8vdraL9k73TooKRRMcXUwXLaNYHC4SPi2FkqvfQiDei125RZys5nBvvYteXvw2gA",
  "key19": "2Sy5mJGKKdPmvuXvKKXNwxq8yExt33Q7EjJZUarqvwwiv8vjHsymUwzNYM3ZguRhSNLj3BJjLrxZ1bHn5G3NLLXX",
  "key20": "61wJ5TNSkQhBzU2aNVvEQHfZ51F5wAb7c2RKhC1ixsSW3zFpccjA5MCjn5bfJpc8eAEzdZRnPNP2aUAQs5HFKGTr",
  "key21": "5JP2iQWTncB3aBdAvavxGWWf3VKuebUwUBzRBgrUPJF8SwL9AhVTPTvRztRUToZmsoomt55BuorqLhV8NHdzn3MQ",
  "key22": "4a1BAXL7ueGP2HCmcEkkgNBRmErR4sfq9JwCudKkmdo6LApKTTK2BfJa7JexbcTPy7VcLrzZAUXNnMTkxWS52xFs",
  "key23": "F8zLvKktqDvkVwa3As8SsHjuVjmg6eSfT7EjXDtkiJVbAUKcotcZHeAEW4Xd3YDBEknYS9cgtofANBaZQK8MnV9",
  "key24": "5FuMvbvkEm6eagsb2mR7qRhH7Q6tybkVZDaMDmYpGM5ouBwb1XJnvjvb4GdHhyw8nMcL5ZSYagsn5RXTJArC5dcB",
  "key25": "2aXmxGPeH18HLXon8U9KG7rahvRkV8qtSNVgiTE6CWxPBpfUyi5VJ7zyy92BMYVNos2RD4kgMPhkNNhtY9SYWbtx",
  "key26": "5jEkwgTCucvBpAVuXAKcM5Tr4BuhUMRLzPP3Ahz3qBG7paHKBJAZhfpMmWbaFkZkswW4jwFx3m26LVxspmseqw8K"
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
