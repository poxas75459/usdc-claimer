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
    "3ejLmhT1ayMmfyiVNMYZkTVKc37yRrXJyE9zVff2yEXXnB1QQNaAo679xbRJdakz9ZhAxRbHfvZzWoFJVgkCBrgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c1V49WVoKSGNxXRB6sGGSX5fGQkmZxx7wadepnsAjsnPECKrkYY6WwN8GzaFtaqCS3PxMkwAeaXNSQP9Fq9kB3m",
  "key1": "5ja67Eh8EHMJzwhwqLbV1sFsK3UngUJLwicRK4RwuxTuDLrEeTijK4pZeiPwCV8d6t6nCUu2Vc1a4RQbj7Bnv6eP",
  "key2": "4N1NuYAXPtroQEuZ4Stpx8ZAXpW9D5DHmoG1spdLvaYVCDXzk9zbXdRYzCdNay6S5sP3sADzAVr3joxta3tLCyqP",
  "key3": "37T2ANH2nq7NhBTfruC2otfkzUgXWiywGX3JzDwG8tL4mFQePM5xgUaUSpWspKY7VVX2abAjwBUDuxdHJtJArCz7",
  "key4": "53a56fTqyk7956sL6GSBwyBYFazTgxWhowMmeYvHZoSueazrRkZhKiMKoFQhNbL18nzLDTkzKqeJWLeULR6bDQvX",
  "key5": "pY3BAAKumA3XYvJtRovKN57wxohpWiBr7WosfvNKWsWEAxgXkmz2GNP5gmfAzzn3NSVtay9L8Bp8EbkVRRCrafC",
  "key6": "34WjUq96FXTJdDzjddmyyJtYhrSJUjhS4o2MymDTHp6dSigh638C5WCFFYkPpdadimCHA5iXDpiyFemCjEXDyW9c",
  "key7": "2Jis7abACiNKTdfcrFyFtm78LuCVzRuh9kdNFp7GW7jjvPWZn3txc5sLV2aLJKwXr6td2JgUXgtnVprNtGbbhWXf",
  "key8": "2FsTguXiSvD1Ec8wGEbfR7SDd1Gg4CUt2kVJy5Daibxsrf9X8TrRsy1X5PvSHk3oewppmWGddL9kfW4pUfBuUWKn",
  "key9": "53WVHyE4iBEKN8YfTdvPMkHm3akakGNBGYoZ81rX8tQ4XKAWwLULyv7dPEWMSRAtbR7enfCBvkzuLWKrJrEv6Ttv",
  "key10": "5wqyBnEN7BpFnCL2k8EKi9wC9aV4qEUDtjAG69g9h9S9431CwHNWGP1gsGH94gi1MJEHC62jNr8xXJuczWrksvqb",
  "key11": "5YcLfFwfq4FFb7vPixTEqmW3qY5LJN1tSP8RXHB7iZxxbGXu4p21phVv33PQkXqLsfNHxAef3QfYGDT1g2UTZkvu",
  "key12": "29uUDGWvsYkE4YdknDmPTCDHvCGJDdnbpCAnoWUtVh9KJ7q82k2vaYv4i3oVWFQ4gD5oFEduHF5sMSjmT8GXzWdH",
  "key13": "3iotdddgbVeB33Rq7QdceicX3zC1eerDeLXqiQzq4f7haJp4a3BJfqgbWm3oTPkpCkEoTyUFDZVrh8YbUyRBgbkk",
  "key14": "4gp49RmHmLsPkUxuQYvBy2Sjsw3xWdPFM4JRiKteLy9qQp6h3L5sek6n6EwWvo7peHXRwRCXFJ9x6AhXKqga32LA",
  "key15": "5YqAyD5ikqUnA2kDKjvVrjRP49nBJZk48eDGYHUfThkXisDf5Skh9ZX2fAutghFvDLkxmgDfaEJQpPr8RuMZDnTr",
  "key16": "4H1YGXcETZbw2MP5AfierUkKxUvgpJ1NozMsW5i3oZ6WxdwvapCuYjT9tAXDcaiBeHCwCkzxB3gMX8wNE3FaVdxj",
  "key17": "5UTW4azigftUGSiDmEXPetqKyS9YR9wcweUK5PNaFSK3LbZHteGBx3KdMwghrRAeTsoUaNL8GihZ7gQULmFooR2x",
  "key18": "3ADdqamz9GgvBVzEkTK5orD7zrNb5Uh3YZrLhxuDj6XHUazq9G6hSETT5dL4fcYpFHBo1Kj8oB4A6DYrDhvr93D",
  "key19": "3TwDqszKubJSsyJ4rCm1zMe6pqGrkrQY82fMs5cL62FgZpTQuE8xcm4MHLHY4TZ6FymNCedBQgGLT8UhkA67ZeXU",
  "key20": "5RRVxSRp21tDh1Eu77EzFBM5RgRG2HsLRAihGzRc8yoQ5KXA1gdZPvho1Ro1MyPE4qb9uJxAmuwpfzdEwo6h7isu",
  "key21": "41r7ox2yFQP3SVS8gg24r3vrtqNzKhk3UbF5SU8qoB89fHbJG82Tx7gjE3Sz35NyNCp4gCzWteKvXfQxBdwF74d",
  "key22": "UEPM5AAhynscD39hwEvhgGRveZtgP1TXSpPHkqGUBbDGaFqVw9STTeTLQ2VRsfHE4fzP1j51dXbm6e6Gw4W9Rw5",
  "key23": "6mf66kgBgX4qhCxNi5qdoP1XhLa6ynHAPWQuPdvLmqBYu5ibDyT6Z9E1EcFBVqtnemNZZ9svSGuBdjcShPAHMsv",
  "key24": "2ab86uWdKwui2f1knXNxsmJ1n62FnUnouBFZn1QyqY5NhGXGXEBo5foahGL5QsBJVBfL1bFrcBwgzhXWCM1Dfnwn",
  "key25": "2rgX9t5gb34CmCc9yNy3rZu23RGWTt5ojiVfSMUwFuAfjfx12PawswxiNVdwx4qMBahHfcutUaxpgPKDXVCHGeVv",
  "key26": "5tm533AmZU5GF7V7TStaCzYaL5FjkFV3HLX8hWCZBFTyJwH6dfoEUCvzDeYYytnVgmzT3H5WcUgEpxBBHHmYsLvi"
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
