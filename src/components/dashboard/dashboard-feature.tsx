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
    "47CEtCcMD1kh7WRQen3uiZKzBBgbTczKL5QLAwjVoeypf5YDoXqu9G5KTFK3eaXj1Byrs5RtMyukzjEi3U6FJwAd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jg4iduW3QPf3hGfdYrSiHw1AtrC7ZutE8Wwnwa8abfPvjBoLfGZjSeA7ys2u7hYpkDL3johoB4kcztJvpBYcMN7",
  "key1": "5mKZEzgVdDXMBoCtBhLfJDG3dWx8QJw196AAbrgibvFipc9WFyeZ25aRxNddxjgaXjt9vaS73YeGfYKey3eziCUi",
  "key2": "4nBVJtRBdaWbWyC8serb4LJ8ctfUsVrYQxXKtmw9JhoEMMwDH8sXyYe6tV2eN2VpAia62uVRBAokHiWMqRb7iyTx",
  "key3": "556mbjoD72hkXt1nXzwL5vFbz6BHpx3jS1X9wuDbzXMQdtS6W4H6awP4vFfe9u41HREByVenA4ReMXGwXhwzjxGW",
  "key4": "3Ek4SQbqfGMDrmomya3yaPYpwpokgpwzhoVvbD3SvefRqWfGFMxAHdu32QavREh2btbFwZMqsGjaKrEDmQrWA27q",
  "key5": "374DWDM7iC3PVvQoAzRvhWpk1tL7r18qpqwq4Tr6ADzyatkLUZDcxTV8W92FVbDNdUL156U8NfA7BLpYwvnMNmzN",
  "key6": "3PtbGy6AkmbN5e3zzMe7C6UAeWTyQ3K6cnUBJwTr9u7qM1pyWgPEFtrVRRDjijbhfU2TLfWFykKbU7VhW783ajF8",
  "key7": "5nTNXnFyBwAtW9Lt8BqTXmC8MMKVdpoVXGed5yNFXrAX7DFxfnkuzGWi1AMMuHEJ3i1gN6ZnBdPfcCGtj611ngj9",
  "key8": "BDGGjBQsM5HCMfBoNkXhcfPNbYBnn3RzDqoYUCFSANTCPsfktCipqjpEqiKV2WeZFvCqehbNckitEcz2uqij6Uq",
  "key9": "5dqkz5oPyed6enHu5U3vNzPh8rk7RBxgGPLSvvwy87Yf7xzT6K556vQ5ZvB9yNcJ43vzR65Q2dvivWRoXDkNWwfF",
  "key10": "2YpuMhmBHqv8NMDNKmdA7SNC7e1V5UEMv8BrTTFW6LBuMD8zKUnuqmg9NQ7utNpyRWinDGzo7MjeJCt85ggnyUty",
  "key11": "i22NCczK7mZrWCdLG84KmckPk6HwfeZvnKjQ9oygqrLu7oJ2jZ9VUrMtvBF1otyUTmVcSeComFehLufqyQEdbkZ",
  "key12": "pqzeiyFH3VhL1XbMNLdroHygAcptutvEheozMVuHeKMyWrYhhzS1tssMTczuhknqEpwPKmK7PyuPXphjVXwjWoz",
  "key13": "5YPXaKB64FmBtJ1BekVEfaaLWEwZWS4ya9kxgeaZ4SNGvrs2BXbqGUEN4hUbAQ4XmCtjrcV1C3Y8A4zGnH2mNBTN",
  "key14": "2x3q4pGT2jyhMeMWqSZn1JrTMYDFyVwpwDNZ2G4gqDKHuUGpJJVqfwybqDUD128epSeNKdeqpgV22sxNrKprMrhW",
  "key15": "2HNfMMirpDEjp8ZTTJRMBPujs77M6JX4idchmRi9q629cffRcYLhRP6tEdF73Q9fU55fwGUjFeF1t9bJWmhHUGiJ",
  "key16": "WRDhV3H3BAGbDnoYsTHo9pMKA2Kx7qviJj9BXoKrkN7fFCvPe2c4ayXqnKrdYbVJRQtgHNB3aNqufgEb5W4kWXN",
  "key17": "4fNs2xQdktX8ADnGHLSqfDDpk8uujBYyFjDzABMS5jHmXkQJ4HEDrn4GkJYjJo55QhnWuzQWi4S26PyBDGu3dadg",
  "key18": "2JiQiDP4hBPfa6UrFikKMVPf7p4tXdBUKsdkeAKqKfTtbuycWN1Lmo7hE3Lr83UqF3at7zJyuHmcwauKTHe3azJW",
  "key19": "3Y6QhNn6JJDp2tPjxw61ffsJPvpMzgWHqzPP9PBdjLQXiAJwZyR5x5Sffmr7UkPmMre7bvAGvnyREPJqkYjD5oqc",
  "key20": "v2SFRFqMBLR1y31KYrKUbs3ZE9JTtR54wymuUKNeavim4jkaG1ZYNq5FSSnLjbN9Y9uoZALGV5b259qtHeTMZVF",
  "key21": "rHmLtx3Bu5WsxEVegJwGgc4fKhrQAnCzYJbJYQEYCvCFRx8vGPCLn43PyM2niaySSb88aPabKnQmeJRkjBHh7wU",
  "key22": "472zk3VGpKdbK9muQS8LDaFu8u4NiYQrGwtYA2G6phPPMMAjy1y28BxZTbQUghJoWuCTySrJ1Dtgi8fDRdnqkUAP",
  "key23": "4BDzWZoB8CaEaVuC6NvNFkEgYKhW7kDN2gHMhGi8tNNq4GHvL1V3PBNpYBsCZc2xPdHkBgnpN5V7SimmCHG5z9S9",
  "key24": "4ck7wdgwjvTFwBTwfAACQD4Pb11EsDM4pcqJ2SZASHw6wEvqRmXuPHstfpCyJJ93Vxxtm9SygbCUW5yWwh7Pvr9z",
  "key25": "2xqGzb6Kj4FMF9AgX2BB3SQZNBZzVS7NjPJoShBzxSeQjM16UDNSdAr9ivBRuX6PvHfr8hEmV6ecnp1vZdCQNvaF",
  "key26": "3wERwzkwWkdzUAnzoKpiv4hE5vq9XY5TSZ7u4CasaRKtfNrUfv4D7LLdsGV1pmrYvjwWmaHR8e6v1h9oNwKEvzoa",
  "key27": "3ajcS2yLGFMQf1NhtmX3B8Xh8EDxqxPHcuGXyeuDKHxHRg84Jy9xsVEFnVK6ktaCkPgpAVvtws9Mi98zt2ydqpmM"
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
