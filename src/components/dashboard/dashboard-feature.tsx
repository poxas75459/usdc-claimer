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
    "2gAwq7zQhZpznLbZaK9BGxt2fh7jrB25bjD96TnLiH7HYH5UPNn11NZPavRrKm1X8RfzU7KS7Yp54XRRmUL3hysB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gsLEyDULdyjN2xmCU7XoJEW4FuQkh6RpuUJkA5jKbaYQ9nwQDzxoP4MGRhNgkjfpVcMgbBQ2QDnh2uVhinDASkq",
  "key1": "5WWDHst1WYgVDgjzG81H2cWQqz4EeoqX1LZY3Rw1Y4bJ455qUhMaBommPvsqmvNVYbESmqT1cxAYqaU67W7CLQsR",
  "key2": "3WFk81fE9uBMoQ2awX5CzsvY4VQCYjFZgD3pLG8jeHvtG6fibRm9KBX9SyqcHS2mR7wsCaWRbJpNiCcAR7AkVWXg",
  "key3": "3c23Sbqj6Dj3VMbPjkg5phjGNYNoSefczDeoNqT6VEfNRgkMcsvbRWagXCamrVREaoqi3u8pG6s79be9Szpmog71",
  "key4": "kADnfnkrjpVwSvMU36oQPn1fhK9B8tAvZ36wbAQGbduqMZXutGXGiKR9BhP694WGQ1U8ysX6EnArYotErd2PxnK",
  "key5": "78KSvdCa6vJ5jve8eQyapEGAqyJDBaYSH7asq7skCa4hbkyCr6woJ486y9q67E8d98LmB9pGqBoW4yzjTZSyRca",
  "key6": "3QENcqnB1ZiXu9CSauUkK8xrC2LxFwkut4uFRHi8svqtnL8w9kWcPRQ2apTVtGtKtZLHspe2UJ5u6sRkXMcLhDEN",
  "key7": "iouJ2Bmhxi4x1eixY72Fqg32XjV5kgzgzDT6iCCk8ShDitNVn9BLDidKPSPXLWd1aFu6FFtVtvSjBJQ2XP1BVSa",
  "key8": "54PRQmkzq6w2RkSCGk5sVrq4rW7a6ySsG1ysrnYGZoHgywhvc7ixqEd2pvVVy3QYPgTMCawFeMPpG8yx5qwzWuGM",
  "key9": "5UEDojnAdK7EyAC2EvkuTDKC49TARgUhWFei6fWK49Dawo7QV59wZ4JjLVVyKXRAKGYiGnxLvW5jaewkTFerquZ",
  "key10": "5egHVT5UfFoUnEhHbAf397iDZB9Uw5nnrM5HPTozkAtG7vU2MD9N3W7W3UfZwj89MQLnM2x7WdqaPV8mC14BWn2Q",
  "key11": "3jxM985MjxTK9i57cS4rWfQcxhbgLiHT2vffyG25UoUhnE78AoJc3TtkJDyc46y9H7tXnS6qH8JCGgrB4aMPftYH",
  "key12": "4i9nHs7dw48vJdkA9jJZn6dNvjyFX1G3XBpiGM8TjwucPZQQDPqaw21PSwAfv7H3zaq2notn268wpQCKPW4vkZQ",
  "key13": "QHXg5K5tKGDPgNKGUdzpHhWEmkeQTafRVHe8YbuERDmJDo7UKKe3r74jbyEgmH4CGrLHZcpDmmBqVRX7W9ovTvU",
  "key14": "DxYazL1KxgeaBaTHDjUcNVwKQ8og5kQzQgGDw4tDEzyV5sdxT3qjpUaBwgTeKyYthth9v5ZT9XUd4bCTwmJkR9m",
  "key15": "49DZDxGi2H1mtPkMwo5GRhxQFk1UqJVsVUtKrJ75K1xoKR5VqBA197pKQjAsUrYyF7itattudUL7iGYY1ECy2KNn",
  "key16": "TXBMCHJxsnFYZqKUw1YSucptZudBL9dZTptFKUEC18SnApNgCVRBS7z8KYYqTYiQAAmgY8BxpoYjM6JtVwVM2Hj",
  "key17": "7r9cvhk4U2Jgs52U13J3fVhJJGHUbYb4ZxwgxAD6E8RyS8KU6XuovNRcjUhXEiNcudn1FX8GEPJgjBX8vJd4CPD",
  "key18": "3P6nSyBPTQL8My2NtVWZuE9kBJVfer39Y49aGZTRJXQ4YVS6a5Nooxix5eJznLqiY3bm3YkFS7z4hFCdTB4BwA3C",
  "key19": "4DhEMwLaCk8v3hqDyR57Gr5L7z4FaxzrpgXBiwtq3dboeb6Q8TZqeLC45bA827DRFmVckhodTBPXCSNFLh53WodX",
  "key20": "4cJQoGefnpPpyKbzdYSvk4iQV6etZhH7U6hREJZnz12QXp2F3nMB3xYFQjqubhBBkCN8GyBqMebYQgkgbXwWW8As",
  "key21": "28jP3LnpuffQobpDJLiy4Ti29feyYnC9opQNYLNer9L4R8nFY6Ew4zLJW3wfxSUNotGJgMP7KVe6ah9PEdv8qShw",
  "key22": "5watpfyVM6syMAsygXXEPtSksEmNpaQXgMe1bDno12WvXH2wN1QzetkEfjEwtWhSXoWS6n6UpUC24uHJtoSyFmtr",
  "key23": "HNZka3onzaX6YWGVo2sqmAsUxGkVxNTt7tQ7pjec3zs3u1ajEipgrVMxB2ny3xXr9vyHSoyG4AC5G8Z3XSvAjHk",
  "key24": "5LGM5SbFfH4Mky96eFERXd4bTN5WEasPGdbB7xtLQDzevVS4w3BFJZNy7HdjD3yMSGzMkkcFYo59vkqfhu48DGnf",
  "key25": "21XCVYNN4yUXbg2X2p4TSnQ5b6FdLTW7NGQabu3gnCnkUep14cd6CC5qgDivofPHZ3dWHFhuoEQhPku5cmpo5Wup",
  "key26": "2g17Z91DtGAz2fwtDLkVuAwnTCAjjG1psg8hSAbpAdTpDHnsEeVGPvjte6vuXrTjpT4CGsr8ehmFmcfA4FpUVFLf",
  "key27": "vfhUnaeSKUENLpF8JDsjgsQ4MCcKJkr7rKWQgLnPTsyr6z4jtgRYqC3ZEYifqbSZRyiD6fnbP5Fy8AF7rzbLgAT"
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
