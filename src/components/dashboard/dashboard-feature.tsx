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
    "4UM74eQ1kUg1EV6feJ82C6gTsVEtgdvLHxxcy8nzP87L6QhDRWo2kDys3XtaN18mxZAXm2mig8VkK8BjVYccqSix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sqwZS4FjNYVzCDNXa24cMoqf7mixNR1kTbX5aJityrgnXesRgNn5tbKBFnk1WmYoYq8SF49jexxLUewVRrbVFuW",
  "key1": "5oQQ3Mr1x5hCvCkRr9CFfGSaQT4US1cGbBpTmqymwiKCRkx2zMCiAJYT7rGfngxDgn6EqF7Z9gSX8xkMti6MtiMc",
  "key2": "2GCymVcdMGBf6xEcUt2Tp6ukWyh3Nzq63yv2Y8ub1qJtkTyHjvwNU9DeqBcHFSbK9mRZiD1PDMtZCzZNt3Ph7FHM",
  "key3": "4dUftM69qn8wk1oJdfajwC6szUX1ZumzPtjsJvN74XKmW2tJcoWiGaPJdHsbRDeL3TnKBPTtFYw1zXZDtgLCPVpP",
  "key4": "2ijCNwezqdhqUwVP2yq93fVamGMph3bgzpiAS2T9nc5ESnMiegqCuUQu4qKaUmb8JTTCtpqeQhRKQwvygSWHdADA",
  "key5": "3AbAWm78MrCGbRFn2w5AMAQwV9XCoN5khfZS27eBrYYbfeqmxBeaKJrjZvb8aosiTbYE2A2r4kxjjumSHE6qUgJs",
  "key6": "2ZQvWWDF64Zx5DRLm15BZjovGYd7W28AETFsdEGw453dxKKkYJ16cmdw2RCpx69n9z4y4PHSbgKXXwTkhXQoERJu",
  "key7": "2enicHJUmFPCzeu7MESUbbM38BzUE7RswFXvA7miWp2e1uVERKdaMR3eixxWL9Dv8VmPegyXj6ndXpz2okNmZVms",
  "key8": "3tV57ocfrujfnShSsoiCrvRuaQN3H2jvY8nSvQVAsCvJtewUdSHAcJuVr5i9fzNdJ51RDCxUvfGDhgTn2iYea6JY",
  "key9": "2UbpKLor95Zm9TAwW6bFPd1SeVWtAxHcvEzF4GiKQ3N5ZFFNJLg5oRRpd74yvWnGi9Cwi5e9SNnhC5Y71XTzZ7cu",
  "key10": "3kaYUrn3tRME1iEbyjsMoxupZpxWzSusKPh6ZqhtE5tcLtRC9AB5n7n6NWx9i9ozaMKt1aLr3rngooQUroKfHkzL",
  "key11": "62E2JBXmgNMCBNRC38Y5yWiy9vzJ6jjftJEHCBqBXnNruwDTqCqAqE1qSeBW1V7KeXsLsg97fSWPHcLsBX1sWQJe",
  "key12": "25xLSpur7SdpyQDFd4gorapNq4r3sB4boa2gPzEtauTNXH8PwhM5rUzLY7j52uQa7suvXiD9SW7q91yyT9vzMVK3",
  "key13": "5D2M3zgAgGS62KztG5GNrVnzCfhFHKva91A47TYwFFQQ72qTzdiYT6v13jhV8uuZrBYEa5tbZp3EYHZLKWtdGgcN",
  "key14": "28rpewVjmY4WwMQUW9Dx2P7HK8PcjUYnfVpF538GjJ2xfG5Z7dh9F9TTPPu6hWpdqvzmNVLRFxi8YqVk63aqp2PH",
  "key15": "5TtYALsrtuXHpVVvjdeaXwYuJe3Eof7ZAgui8sx9ryQQ3A36fDHh6UCta1szpe6WeUEUNRqsDjiLTPGUyarD9bhA",
  "key16": "2c5CBqKhUPBJYCnZDKLQqhKM19Jq6dRV3j48BoVxcQeTnAS6d4AE8AMi9uh2ZYX3wWLaEXHAHG3pihFzACDePYz4",
  "key17": "4jo3i87H7pduH6exjseHpZaufQ2GgGjNZRtQhjt2fH8JTT1ugbgQ7CsZdWTHn3a8ka4vxEPsKnQYPweKnC5fvjVH",
  "key18": "48DmczCWTL4AALUL55Mh7R5drAUEpnGq85QiCHdCZKvmE4MXBBpEM3qGsxzAPAiw5VW5JGynmpkpbMaxGweD4ggP",
  "key19": "3JhrzpXLqAbgCDcC8AJaTV7qyW9EeKAZD1YxGkFVb4hHrahRD15Zi64L7kXyE2qPrf5hs4a1wjPMGz3eXzuQioc2",
  "key20": "63Y5dgRgx6oqdWp96Fo9Y9Zbgx8ToSbisGFSyiaVEr4zM1r26iJ5PGVMQbv4TAQmx453er3tfnaHbERdCrdD5Ugj",
  "key21": "31LJQU5THzEyXvte6dDZfKwYT934jc999owfHrmi9S1K3psxLi6fpTaaMuDXQSWLtoHg9PGEQCkyYvWNk3AGjAZt",
  "key22": "4boAdujgDbEFfBr7ybTWpKfYYUvwAfxh3f5FxWeCGr5X2Dgkwr8sfM3bf2YiatDNkJ12fMXUwV32T7Ti7Jt88q4H",
  "key23": "3KX5MULY7YAfA4iBPbAmYnYLSkyCCTUjks8655oeTr68mKeari38JW4m6WLudiZMUDTfGD2Mj4w9MUr18BJQhE3W",
  "key24": "49xzrbrsDuWqny586aPg32GyCeBANH3SrdsPWCKXAskJQQyvcAGsWndS29Ww5BebfmtGZo4MSWny2BThu213KpPV",
  "key25": "289hXpVstJ1GcF6gk29EhyQkezLxARYEzLFPNDwdvMtb1CRgVPE1wwUEvSSSagrGF8unBibchFLx4vcHGouJLSbK",
  "key26": "61fy2vLDfKfxz6HSw9n4kpa4uwjJNpMqRtPhYtTqpS8omyDhZEefiZaHBfMc47zPPUwMAUtLRy1gSk24XeJBFvPR",
  "key27": "5g5deX2KvhaGwby44vwbWxjipT2afJ3HxjWUiTar5pDv6E4vrMPp4WeXcnjfrvRzFnLbK6YbLhpPQCtPKmPSAwAE",
  "key28": "5Dxp9PxG2hHciopLowrM9B3f83LrhoYhwooQjLXTtTtkeKGy9RhEkAa1QVVvvz9TsxYmud5FwbkARHAyYcRTP97V",
  "key29": "1bW3JtVH2JdDGkmkZcnoouy6xkGfED67uofABvK3KeBQzj7e6k1qE2i2UVXceKu8NJj6MbXiC9kdn2cchJmbm6f",
  "key30": "2Cv8f6mYvcUgrfYU6eaXRirxh276C2tB69Hr7t9SGpnbrTYfd9GFPfUnhK5nuKLkg6tjszWvTSjAYrRJ9GNnySRZ",
  "key31": "q1jaJFMintXrJrmqa7sRwfXCAb3NZm3Vtn4s64Ax5uopb7QJytG9E3tn1pv7K1A4Z94RtCRunMHAhHAdMVhTj3L",
  "key32": "5sMAckBqnZFtiycQ4iLfxLmoKCSpiWo1LEnqoUg7bN2MCDZii2tFmnNR7hfRCznkPmvyvkHes7hxrQVV7z8D2BRh",
  "key33": "2EmZTsbiYAebDuzM4mZLqQNLbdqtzjkcx7QEU9ipiB9dkh7adSMF6oTuB1RURT6rxjpRgX582jXJyvFube9MQ8s8",
  "key34": "vBjdAmSD3M3crDwZLXhwxSF5dTAccMFFNcynTWBQajxk1BkvyyyG3G41FX5d45S2dLaVkE4hyPYN7apmJGnT6Qd",
  "key35": "2XvppMkk5Mc1Ru52WRtZwYhnJNjyvaAJMnp3wqcXaZxjfSZMLPnFiMdspStG1smtJr7ayQEyf9opm9hJyvncEqH3",
  "key36": "3jxS9Bq6YAXpP7NUKHdL7xXhBthfYtRt4JGb86UeoyJqNduyAFUcWiVWKfNGNkivaV4mPLC9zWqEDFLvJCSVAEif",
  "key37": "2aFrbRwqaBmRRwM4whv589q77i3hKBy4q5JDLwMZNv9bL6T5VqwAfPnA59CcPWd6HWm5Rrf1u86dqJgrGGzTDNen",
  "key38": "57PpcpD6e8WMAd2SsLgMhoHatLzJupwr37oNpT4Z7brhpgf8aHg2Hvgawdj5c3oaErxnwNSbFsEDNAsoHWBcEmgy",
  "key39": "52ZEMAHiT6owABz7azP1FoP23Sbsmf1BtUkGKiCpi9KCcBPCdfbgk64fPZWXnkBFPDCaHYtFnxKqEAs1yJopS2ms",
  "key40": "4GbBvyVBmv7bs1GJ7iWZVYWSWPZWh3kWrBUwnsGf86FdLh2oaudS8mSiQpUZ1peTiwPPRBGzcDm46Rka6Gn62NkA",
  "key41": "4fMJzxr918sDaEkyoS2cwnHG2tYZLdigWP25kek1quKjw34a8dvgiuvK3fjyb9h2n1eByr9WBZHYLvNTTRCGFQ9K"
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
