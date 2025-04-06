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
    "54fouJ2tu18z8U8rms6AY3C6eBiAuDq2nAo3yg2iKZwSvcsbE1tbjUYRFmXWBfb3Jmyyfmgqu7RgKKsqobvM9JsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Twed8MsvfcCBhQUk7jHYHgKZRcR8EE2tg4r7AfrfkvkJtK7mEURoYA5WFH5YPzBw6J9BLRkNTnRPpHvqdgDd6Wy",
  "key1": "2bMGLDT9xx8hhvz4rmAdX19yYyay7VU3v3oFncMZJ6Qyk6UCiB5cRPy6CGUTP8mXS9TLTSg8gBkZ3Z3s4pFUgZpo",
  "key2": "5vRvvP1o1SrjnXRm2G5XBotF62G6fmZb89XSRxXkvkZp7CcofgZdYMHZ2p6ggjJfPeGAcaSudbxWyKYDhnwNbpfF",
  "key3": "4z67phhU5eQW5mZbGvmoBUudcMHEpsAGTJk7UB91KuKmFYW3MBXGQ4JuBP7kFvrCEWKyAiwr1Z75A7kiBKd3zXAj",
  "key4": "2gKQw73PoRZ5Hm6U5qTggxiseFqS5A7igYQmnb5uoEvLHEgdapDGyqyxaYt7mQ6pCn1d9TBgfF3u45Tx1YbNPVK1",
  "key5": "tA7WyTyEEwEEiVru2BH2qUonQCiPQJhcYbFEN4F2B5RYRp1CZFApGdWbDYwdAeh9HG95b7TpZNpBDEr4wRLG7zH",
  "key6": "pUTEJwNR1xcZDHBCEmST9kV335GKA8esKqHwZDG6jjXjU1KTVDyi1HkMR3cKoU4NoPWxB8zfWEqy9po2QYzKEhP",
  "key7": "2uLc7V4gWCfGxaSwzFU3RED2M37dTh6dBJBHtvSJMGmSaAy5ZB3FMQHukXDDTdbPvVqp26dUNR9LFwEidi6WDGLp",
  "key8": "5u3n7sCfHXUWNhJd3Tuat8ZHwDsmv1hrRWzfvjkUySAuoW6fmo9D41N2VZ9P3kovcwBwQ62M5X6CGSMk61zhg1nQ",
  "key9": "473zmuBtHLrUtikBfHSVduSQNozfMsgDGvF8oGUrqCqGzHpJ2LAYk19Rv9VqP1Ms1vS4g5YkGdLXfFckHaGAvDZS",
  "key10": "34prLVxhFrT71Jn8aypRWMVddHPgkfwqkrHrHGo4YCJ9eCHcGTNHX2eEBprPQrieoXZd7nXDrctfnXHrHusoJWJF",
  "key11": "27acDtyCbSgCEDw4W19we5K22dnnPxoyVSpJGQNWvE7RLkFm9vTn397b2iLwNSJB5B2AUULybDukUp3TkojFwtgG",
  "key12": "4AmvwMKDMTqTiT6ZfXTKPVCoqaW9dm5tcPc8aHi7M1u5c8iKuNF5tc1dRrKFcQbR3iAtAdgabTce8L6ACH5feMsX",
  "key13": "63QjnbjtBTvAmnmi722Rm7pubC9jQbqGZ2L5DdVRMK42krCzZvXBycbCHAcbPzhZK5xUuGj4cKK6LGqCBYYFvftH",
  "key14": "BAFzS7MR1u4ZRbe1eGvVZv5eV5o7bimBvVrKvULYJnAHwBtw4bW1gNv8UszHETt9TDjk3d87dwEf3a6RDnggjz7",
  "key15": "3N32tLH56AuEuFRRTzyRSuuVFVejkK2QZMFGS3cXtRrkFz9sHJGHD7o95LBbAtzMcDAPCAQferLAFQoazMJ9qoPc",
  "key16": "3WkNtfajso5Rtk5NHVaweugpee3vY2q7NHaThr1vaCkisonhdsd4xF94a5ki3Wwt81jL9WCGCkYrhonhS9Xc1DZw",
  "key17": "2ejDeKEwQh74xJP25Kogb32atw5oFWrqfaMAKBaAaaSYDtuKQ6SAJpStCiPfsyHabgKVMcqbTFh87bmh5TjvSFBG",
  "key18": "2DcrLZX5oSpCVGdcGdJ5qik4C3yw25N25H8U13wxwgFBbP6jiJZipkMazinJk1ggf5KrfHGFYprz7sUhXxGvpypN",
  "key19": "8gCAbgpo2qQ2BTQ2GrsrA68548McxJnUXf4s5QzaBjCwqdujoGL6aZ4oYfxhF4XbhbZ4E1N4Yvh6HbQeRT2fn9N",
  "key20": "3zYymG6cFtgKo6ppwKPDikyqiEaXWT6hb9uL2bPnAs366ZaP4ze9XS25UAdJY94r8MEg4VaPNbZDZEcATpPfpAEu",
  "key21": "45JSTkJrHGCq9Kpfv6ftVJmoJtMfS8E8i5tid1LCtS71fbCbzR6ANZkvkDe8REhcLXgoF3gttZHL2gYGU6opHSPr",
  "key22": "22tx9yLoA2iYmJpxV1jVBaF5kEQp5T3PXXdnreiDhyfkrzR9nRuMbgURxbotuAPMDuWutDk6cQTrhPbSGYA3zAwh",
  "key23": "3a11Gn5dktC2z2msCt5iJaHKqQ5zGnoqH5YPYy9rfbR6L8RuEjFUc2kWj6Bq8u2UTjAgVmBVgwm4KhM6WgrCaxsh",
  "key24": "4ih6xohfDPKPQvKpC1dZE1Cr7N24snBn67G4cvBjdiqLszfuhRgDRq7K7rDk8U2H4GET9szDuTT52i49z4eJAd5f",
  "key25": "4Vzr49dir2URAdPsnLQv9QRnzCiew2z13p74qX6P85Ki38aLNjWtUs5neUHc6Bu8ywdVPwgmS51nunfXnNbwswSb",
  "key26": "4xok1DzPAuA2oFJuivy8DxEzPhD4btorNLGmiyUhggV3WYh5cURgAFQU523c6Xr3tfWveZsohQfqceexKqcgAeY2",
  "key27": "ie9xnnfwpvxChLMFmiRS8ahKD5vm9MrBGTaWZRDUK9dJY4PGCyN99tpnWRWdHpjneeW7WU9pUFPF8azVVTRVHAU",
  "key28": "3eMWPp5j3nJGaEPtCpeuhZUayiZ5jzYwuLJe7cQ9oRT1eoPNjjSVbLnMCzqvJjRaAoHj1eWL6MLVjUw9Sjo9cAFx",
  "key29": "5o6tn21g1i4goGSjN79GqE1w1NPugDT9x9jzrsXPZAJa9xkk5At7fCG5oXZRtJLPCpa6t9nYAXXp539A2UMMhQoY",
  "key30": "oWQZfgqufvsRr1GZvLyX7hjgVJH1GirQCGFXSddDjarv57cnpaK4QgHNVHPLXFff3ZJ9w9kMsSYvnGLPJWyWXGi",
  "key31": "56R2PSuKmpb33WRovF6VKjsCWdP8xH9kYHTwPF15gvFwRGqXJ3XVsQtWRRnApcgmwZ22zSQ9viNwbUMjr6zFzD69",
  "key32": "5v7yGWS2u8FtpsgPTG2mKt2x3YkuP5aVW387t9ZtE7mG4cpBAhpuUWHPFiRK3hAAK3EDGnFRLVMhxmjWQcg1NU3f",
  "key33": "4MoxpxuyMi3r8rQBzH2S6mRfdrPjTT8gbqE16nsTxBEq6fTGX7XXuNyCKNNRAtSGCHDPRgwtV1RZxMgySoQTb8TM",
  "key34": "2j67XWfcPsPHBLpZgboV8c9B5fbqjwZa8A8svDpcmoxKYevR33pr3RZE8D6ShJxr6FcLRXSRmssxbTUbj4Vw2BjJ",
  "key35": "5DHvgayDZXtVA3ZwYMFy3EMfhHY9twH8aW6twWWaQuj42Rw2CnfHHDkt3oAQH5fVov45Rs81aUF5z7n9bFKHDyja",
  "key36": "57jZH4oKrXseNYwhzcTCGAT5weMVFANRroQsAg4YV9s1F14jjAQ44aBK4utj8LurofTEq98LMgq9UuH59D6Ab3Lw",
  "key37": "t1K4HJ1x5vCf1n1LKZeaEEB9M9RFRFW2XJX9zTpjRbpGxVKQzB7a1U6pyVUACF8Q1CwKwJe1v4Lmd7hz535jmvT",
  "key38": "4Mno6usKwSAUmb6Y2WBs6CpWb5XCK4Fz1tyd7FoSpS5HFadaGiJ4arJA26D1dBSKPSvSQBBLJZs3HD7CGKkLvv6z",
  "key39": "Yub1oZSyeA33WtGijYMSJGQk3U4cQhjJg7vsQum6pj4d3MpwSNadzHehScJPP4gDh2NTEBHFUtVnGK2L9SVeWC6"
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
