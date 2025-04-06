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
    "3K53mYF8uxhP4WW1MNTYZMPSkxhatMudM6Dn3kiDwajdcSnw5dYWWdMKweY59jqh28fduSBfHHYLKLobVZazvVqS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y1AmX5Pjnfuk8zmb7hE3evRA6PmFJ4iy1kBWQSxxgFYZQr828nWpnQecWApnHkDcWQDoZqKnM84L8QL7X7LVLLh",
  "key1": "22ECjRf8idumD2uwdgArqK6AofBAUbPJ7ssAtY6cfL1azu2aNva6MN2u6KSQUqyv2VNb7BBmdDwxzqJmNQiWwdCw",
  "key2": "3bX1zmfbhysUFa7a2PHnCEC5HGVUQSiYx9XkP9ZBjsWZHet98S9xCuHmNf2JL9tPfA6wfqscPNCJM7fFNQDbZwA",
  "key3": "27dmfDqTrKQiH4cja9G6HDmRvvcCoJPEHJh4jQg1DZkQTPXDr9C733x8fzkHr5Ske5SCo7dSr4RQ34ab5cjNfrvK",
  "key4": "28dxSYW7u64eTf5rwt6zkM9r94kXkFGHRSLgPEH8Gi2KGRbAZcCcv443p9SrxB16WugeDTYPog91QjLX3q7ptPSE",
  "key5": "59QvAXg6ZgXqHPDM5Fhw672oPAPTAczpzSppoJsgXrbSN6MP4MRJBmh9DBuGY78v5GNW1GW3CscG6dcg63Ns66Ac",
  "key6": "4Up74VTFAAHnkWMsEDD4FeCdW8DiAZ9PeAxLV54K8AHFd9uufwBQ6R8EBneBcYHDsk5eDABbhPA4w8QY2vvGnE9a",
  "key7": "4gc2YhYK4noekz9z7D3RZd5Swo9qtfg7Q2FvqbUTwcgkfTn7MS8Kqut3Ty37nQ1kGjA5i4eJt9TU3H1H9Cr25ozZ",
  "key8": "5NcaWKcuPG5piCWUANpcHvuc8TEH1ZdPTWuub4UVDDLkPe3CCHGprLdhxBAbLiLcUyJS1aEvFfsyXfzueXn2CnSZ",
  "key9": "5Qpzs3LN8iaKZXDRoy1o3dzgBi9XXn5Hv8XM41XKmfX1zQP4KxsZTrzehZw4FJEYTbnBS3rm7VpSLwanAxT8244A",
  "key10": "4CbvEazuCUpRDHzDGbK6m2s5AGW2oCchNVNK5cdLY5fbgxLCAn9AUG26QxnZobu3L1tQvFzdh4KXGnM8VJUQwcF2",
  "key11": "4ghE83JT76cgtQrKSoktqEkTBMo9TpeJgSCcAqDJgm6XS3voog2z44kxpmi2bp5gxfZ6eYqt62ndD1AhJwxuqgtJ",
  "key12": "5v12Lt6eBqUpTiFmgci9MA3B2JwyPMMef4yVDrnaV5LWRd4W8fJxPH3sagpZujf6UaFCJ9ULzPmuMmY4dzXgJTb2",
  "key13": "5b8WfhqBiVzu3suMGjWEFjvaXGANYD3J24E14uTEHfqViWhBysf6oyYJ5oB5A5m9WXDa1ysCaBnR7CxPSVHsfmUe",
  "key14": "3LBGAfvV7w6jgtVTAQEBf2ciSLN71T6VTYyDdezn1F7D4F6jaZwBEcVUsuZXnzLxPF3cQ9ew5hZLvjUsTKgRDXeV",
  "key15": "3pAw9aHbnm3MsJRBmZjAdSm2qyFoee5Banmi9YfRfwhKDBBQHShKudsJMUxcEqs7s6QW1JvpQsKJeb89sxmWPWEC",
  "key16": "j4EmFEUSYcdE6CRhBqW1QN8KsGnfDfWgTzp7pVidvkvnpF4EW2eXvhhKVEjhMRQZ2xRiJyFXpbfKjrSQAtqHg1e",
  "key17": "4GehpQa1CvGNEv7VELyFpvCYJHExpMfQ8QzReRaKsAPEYeRDmsbL3pyaYfUY8QgyxkAw7zmSYdQJY4k3ERrin5ix",
  "key18": "66JBd3hPZwrU7SB65HWhYRJ3UY88BZjvA6EBRNECzorKj6z8i3FsgBYZfDDvf26vK3gB6ep9x6tWUyTm7LRHgCfh",
  "key19": "34AhWEHbBEyxsoyowa2xDMTpeVEKXeHHwx8J8jny21nxnNjmuXoaJzCegZSgXHoH3FUdnw4TW1XLi7tUGhwcVHEt",
  "key20": "3ZYdF8GCfTnaC1QFzd95LtwrKJ25hoWUXHxSBmp6zNptTJHdq5DvjJS8fi7vNPYSfWRYpVmoBbiTyBmVyRCA8he1",
  "key21": "45QDoWsZf8R8EymJo9tNZsh9sZp3WJM6EU2PCxZvitj4Tw9L6ZRcM7jBc4uL2X6osseE6vRkN1ir1mM4eAe9rje4",
  "key22": "2p52asGuKB1wSABCfRh4h48rTvfwe5niD6d78Zk8RPKgUmXPw13yLTNPDmMBB7uLLM6CwbUW66SU9FQABdDSuTGc",
  "key23": "3xZumckF7sj4oWHDfkKTYi5Jghn2M4WUpHAe2jfQRtvqwmhhEQnSUBKUY76jJsH4Tknrd3AbH7r3qQcsdWAEpXi1",
  "key24": "idPdA6m4Gdy9ZY3ru1mEu9ntcAcX9vU1493PbdL3jEdjSaRHcpk7t9uirguiKdP72yy6ctTvkuA4DA6zf3xgTcp",
  "key25": "4dtANPYJcZk7DJUAtgMtCrW7QeJ6uapAG1Cmaweyr1pmECkkikcvDrfmPmZdvCCJtmE5giXBxBbAtJqBGUCBgyqC",
  "key26": "5vCsn87fHcmBrkzUm3HsJWv99VhMKSkkfFWunqbEvPW6vHCdng5WR8ZftdtGWoBaujd8GCo7UiQvqhkW9TnnWZja",
  "key27": "2ooLkSuPTUVr15htJTonQNT9TcTymZpfT4ancCcxC1pGgrK8g7fPKzsBrwzhGKmc54SSynDV7vkm6mhregkMXveh",
  "key28": "2WJ6kpfvUfBp5Fab2AA8bugmruUcQpbP55HvoU1g4oTQVERzdjonRwhmNRMwYb1yoMXGuvKFiUJe9aiEjXn8YgvT",
  "key29": "x4VBTRbL5vb4RAfyKYGXimu3TqPk88kK8wmeU8L6UM8d2t2G8h6LhjtuVCaQ1R4Tqpf6cGvHBPNEZa1gctAHH88",
  "key30": "2vksWPKi71L3zwM8fCi5JwJceb3Cyyw5cApXj8kNFpMjfTSxcGuBzLfGQFLmoe8RuWRTmTdihYn5wdXbAWMhKqaP",
  "key31": "5Yf4GPE5oh9RkNXiov7iTEE4LhjwE3SKt7BN7zKhnzEJuLQq9aseVcymPwoNfeSRWGFbguyYHXPsbrSyzpWsC2rx",
  "key32": "2658JwbBUTyYoi3ihfZ1GTV7fiThp7NuQsEWqDxmiJeoZ3j6RoCQ4XnYV7fk2pcNmvRhdoKbpq6Fqxefe4QtMkdg",
  "key33": "3ncMWgvDurSeAU8eef9rhAMWEweeAaj6x3gdxXzw5KBJrCh8NUp8Dgq1J76TrPskUTo1pt5VZdUD6BKrGe8coSuT"
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
