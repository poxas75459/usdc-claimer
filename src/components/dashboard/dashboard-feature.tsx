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
    "3SR4F2xonVsk5ELJ8HHwrr1YzKkLa1QxV9U7H2XUMZGADwRyJYHDXiwfAnZeBg362kLNR3jP2sibzcL3aNq63Po"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f5a5fUwARBWuaWMX5B6YmnfQZZVHsiBuHVGKsBtVFgcyeBncjZFsEeZ6evFm6pBR2dac4AdDTxiBvU2AfHdFZXZ",
  "key1": "4QdZGkn76C3ZBYfG821oKgwWNfrzXRmEaE8FHqVRGvjAwZQ3PEDYsYtR1Ay58kqmRCWde55sTzb6usGUSDcFp5nL",
  "key2": "5E8NqrKKVuV2nPRBQc7CGGTuCqYfxZarpootvUszHaHkixURHV8eMUemysjiWTQsaFfP2L6KRQaQh2zviRSTpaEa",
  "key3": "4umgzctKhzwkFD6sUjbgrbxcM1K3NRPS5Xi7LsXdVuaqyhiGZA6QTQqLGkLsKSedjFaeNygcNdXEgGL2NhLf4TF7",
  "key4": "4Z72E18LxCHP2Wx1c5VFm9qeFJ6Lx7krY6BSGrXLzmJLnEtBR3HAGb8sB5dmr9FCTK4p5SZM3XfLY26F7j1miSUj",
  "key5": "BFEpHEauRgieqjQpUwZ4PEoFphNyAndYkbnYfXZENuZNLquxY9BPhTmPZEKYSpjw3T92xLMjFE6ncsSLmbjjPt1",
  "key6": "31TEBUYPUKAbK9VfjhqioK8gh6uKBZ8vcRrBbSWyvHaSguVyshw32jvTiWoUHeASKhjjmChToZ9FanTaPgJmnp4b",
  "key7": "3qEB2iMsT8V8xy6gH8CD5MqzCxQMsmgtZgrMrLiyNzr9oh1f89ytyj5N2xhXL5KKmYUaBHjvxbHaQj5yA4PTG9HR",
  "key8": "58158phJDN4drLdXpVbnJjPGJGYctPEELMpLct3hGVva8zzgwxR7vMWFMDhQiXqKjDDSCHs2L1bN27zV4sU8JqVi",
  "key9": "3HKkWM4DZH625gYmUatsXvo5qB4tue9L6Rjwip6wvEv5hHJxBMnZGqieHERc6GnsJgerWF72ZAmGsQJ1qehzvvnm",
  "key10": "3Q4FViZKNK6B1icE7s9b2QLTTmYbcpvcfLYNsaRiWmgdNUCLb2t1j4pwdVzHoNgoV5hjdH4DaTzigRyqgVxCtPTd",
  "key11": "3pARMohJpCk9HvT9tjkL4LCSa5AEqQLLz4ftJehAcWvySox9zG8rR2dXXTeMu4PG6yfZdmNky32BZjsT5JcHZq7G",
  "key12": "2irvmLoVwoVfikMUqTQjxvHkYDKGz1p174kuPSuSVM72Zuoxf8RCo8iNBHLZaNNXdfEZqSrTmLchUeB2vCit2dMt",
  "key13": "2ZN3iYLpHZn4QMi4wF66RVXaLX6KVmDubFrPWpZdi6ZYqjzWKEM573RBXtnRqgmMSnDrf6VAo3c7kD8HQktmvNZk",
  "key14": "3uMrDJvpxKuqSmywaFX4RXGDyAmpbQ9aq6f6ADfBoABHLmEhkjiJpd8HxzoSLyJiWadjbWvckQWEMH9ypSg2V6Tu",
  "key15": "49GRuqNPYYL5FEBLuKSwPAheZe1GecKyxHeat2c3zWt6fjTr4WVFbV13t9j44PvBCxYBkELZM8rbhwDQLzj88M3G",
  "key16": "4mSXG8aonzCyQ7ZEK17DFEEcicFBYvA5Ed6a1cW6T8LPHPGJWrSLiv85tgFRjuqbdGRYEk13TAFW6KMnmFwQk6qV",
  "key17": "NDkiWWMrSSugbGGJAdUvF4puCu6vtNGiLXS9Ywo1LAb89t7BeYcuU2uF69SWCGyMNUHcKqmDZFM6G7zDu3yZVoP",
  "key18": "5BwKUTjeLdQVD9uQTJdvnGLYxNFwdu9EfwKcA3VzWBiZT6zvtyxzRdn2gd7TYWPcXcRhpaqRzEZ1QV4G6sJHVRMV",
  "key19": "64x5t77XcN8Qmfz5kWeYtKDoLDsvzpoxbekK8zkFrk77oGDCKofSZtjki17FEqRob4zyZCYHwJm2QC34zVR9GLEd",
  "key20": "4Y19JNqBZqDYDHabua7XX3YpaUrWB1vUK2Q9azL9KAXxwrJrsX7DaQjLj95Yqsgir1E9DU5hQ93pZZauCGoqAteU",
  "key21": "4kRC46pFnreWGNxZDKV8F4HCU8GVwJDFBh8kUiQFVWKsCrAUG3t5x1YYSkenr21srwNQNWZgm6NWaoZ8WnnFxKM4",
  "key22": "2TQqZU36yt8p8AeFZ2TRoQi1Re2VQiXtMuEpCVg5RkicaWGdKqQEA4k7H2RX2p5omkg8xqm7QQNuMJ5gaBnZ4j6g",
  "key23": "2aVGfKZkMfTAXohoM89AmLbVKseBz6ATV5JcLhRf5FUiQgXFzV8hPA9URyz7jUinNQ2ja35ox48qEB2Vo1McjCQb",
  "key24": "XQXU5xFxPB5C1a1GyXnq2PKMe7Xtw34v6mWen3hzuGkt6uk1W3rLio7uF7odiSedYAtUvgF44ff9kABCkNgANhT",
  "key25": "21434n96vFDns95aL79aqYrb6e2LYhFV8qs9Ae5aU5h9d1NHE2H119y7GguYZTAPsbFBNwEKYx5Jbm5arBTbF7Zg",
  "key26": "4sSq2BqRyRxKBV9ib6eRbF1N1i3j1L9CaTZd7V9r9F9jmfFkudkcUTZr9PW7rD8qNeDPV8QxpSCqgUSJuUL92FoP",
  "key27": "496M7fGpx9b9hCF7kGTkLMHZ2SuLSdTmnhvNy7ZSn8An9KVxvm7stA84eVdfU7vyQSbRHEd8LBdnr2z7ZAHyAypj",
  "key28": "4S28m8w2eJvEBdjdGpEDKFbJF5BYESn7FU7oCp4VxXpr93aq9DD98EFq4smYQHKGjJiqacgLzX1hNSyRgVq3tysp"
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
