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
    "2SpKoigx5LD5YHw4382xZbLUWZm1hoCbywrdqaQrXX6imicsZ9c4e1rGXbGQYBdRdBwUoF9DHh5DmZCWYvHRvQ73"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22otDYKFUuYoAb4ZkxtLkqzNBHDiZopF7cKAiMzjcRj6Q9Fjvxd1TV7zjfMxXu74pe7kJKsCAjKkGup2LieAhV9M",
  "key1": "FzvSoE9XyP9yE2FmVptKv8ghYUSko15TXXegUr3aj4vXNmZeU8uz1K2xMbgBJGhbHYrrXzDCNScb41W2ReCkiUh",
  "key2": "2GxwUsBfDZnxcXSLts6iQ1XnikTLwRjiqRJRwMZkMjpngiavvsPSeqJvMy9acfCwmBrQ6FhNG4pVRHQK6ge1nQYp",
  "key3": "2qpZPp9T39tj8LtHeELxcmK1aZJwdr5ifsiCktQCEa88PP7XWyuagCuUvGgyNARzpnL73KKeerrusomEGkZTuDkd",
  "key4": "3iGEg7pdkDSbT32UpmpDCMRFqQWWigDk7LBbhxZ97YcJuoN8Xmgmut66QrimMBGMZZD6EUFr36AVV3Aj8v1XVtMb",
  "key5": "2RW6KgDRf5YMZAoAWeP26KrPVqCqUicnHGLAaKpRvctR4wVvKua9gU6t5VBTeyUi8fiPaSHDQxkPmFconaqU11zw",
  "key6": "4p3D4dCgv4F1KEmwgG4yroUNqrJvwhe2Cwdao2mvATJpE6F2g8nexWmG5yNAmvmmPK1WLPGUeiZxKGdpojPSzxDy",
  "key7": "2ZgEostwCPpLPzMMTq93puDHDWsJ3ehTj6wnfWs2d518uTjAi8BVZJfDNMtnh9phbDNDjbGi2XpZWxunpY3Bf66m",
  "key8": "jdtptsTwwSiWqUwVZARQwvtkTYbk6ACrAbt9nSYYMTgSNns5m3zdaHexLz3BUGejA3odZD8kgcyLoCggoVEyq7J",
  "key9": "5YbHriWy49E9xA1Py5zVz5MuDhkE9yMaBMrhdPsuA4WVdqoDp7q9xDFa2dUtjJazTvHsaMsewfQj2eSy6AvCTuj7",
  "key10": "aN2NfW3qvBQNbZKcktdSV2LNpNSicvDSmJTEK1DcxydBgXsnHmCFK3ts5ALe2tYkLzECWAEEgHtrU35KLaH8GeD",
  "key11": "4JxvEpgKKXfBFGEgCuLXyhZCBZjr4zzx1UJ3SYyMurrSF6SHXsEKZSC8nqFWTbWyiugBDQjbYjGcSCgdGbzVSG9Y",
  "key12": "53Mt85fgaJFLJKni7TogDJEC7WjCjsmNPWFLGJBCVyB2sExARBQCwxKHz23PymbLewN7USdKC35davozbpqAXv7t",
  "key13": "4xKQs2R7CKxrigyg8zxA4Qe6W17XQn4gy1hje93ihvq4TJdHKGjL2QFPEuGx4enctpmYpwvJ7qE169i7x2LRKsq5",
  "key14": "4b4k4rrJ6Ugn2zPHhtp6EvEPnc97yirqBo1pBubseggsJDSmmt7EnFnTbBXmms3HTS9kT6Mtfj5ZiVAa6VFVmFjN",
  "key15": "5j4Gu4GaDSgBeXRNqitCTRS4E5RiDizetMmWFxJd4s3CdcE5XjXH7BY1YQCmAzvDBcPbB69xiJU36WttMRve2Eqi",
  "key16": "2Uwp6UdTDRJyJM1mosBFY63MRYiyunLnL6k77X7CsJB9z6E7rMRtiRbYnxLyatz2PUZJKTeesxCL2atj1YFLpjZ7",
  "key17": "26FkcjJ4amfdJxtY5Jzw9MUQ9oZyXSiGY75BoLWfKZwLSmBsNUX2ks71LkoqtoPXtzNA3vKEMrR7krHYJ2L3vqbt",
  "key18": "4rkEY3C3d6qka3zTTBNGvna3HkYp2ZYYqFFq7i7UhQSPK6YMmjdchPWcTm4etFbNmEfgagivg2vawMTmDfPEoSZE",
  "key19": "3etG6pA9PihgkMpWoAuC8A8U4u11MgubEbVt7FNDNLWgzSt8YhvNKMucqoPhYHPtRhJEbrFpKKaCTDA5Lf5v8UYp",
  "key20": "nsf9j6fRPfHuVq8kqtjnH5fhCcrLtxrhnijhPmkJEBMyvrSsxwSPTnT9PGJDPx3F7ZWm5JDv1tDKaKDSYVT6fT7",
  "key21": "2pGLyqNmTvsXkg9MuhNwNn19KeoW9zMgBTHMjxtvnzB2Ray4EavTq4bcSsB6sP72kiqLFh45P3gC6qZ6o7u2hTRA",
  "key22": "37CRFuLHsQHdfzDnVo7jUa2YC8yujMPztgTe5x1oy85m8T1Au1sZL2WehpUEkzKm7p2qZDfG2yvBAQcx9HTzVs7M",
  "key23": "2KKvfcRdLQk8qNJs6NqFBZbBUjpQzAF6GtxkeEvJzeaEScWyxiWbunbQA9gACz9o4VguQFcGDGhaRSsbBZYbsXbi",
  "key24": "HwmLc9L5byu2ANmh94JEsk3axnqWNUSmtm6nv7gmELNXXB4hDVGy9uMSLuG2kcjs3oVugXad6zWEpLiiFzWpTU4",
  "key25": "eDpefL5XPxFXTWnL1sQM6589crwngHVTQyBkF5ftxdN67S9gVrwzPJudB9w1eRbHGBNmxL2sbcJ2Z3ptC8VQiq3",
  "key26": "3o5c7db3fkpVuWmz4vDWTmZuAmxuq97g4ayAaDqgAQS2H4e7pyZidkvjMEWqSgSTRpQH4ExJkY3RUJFzQpokNi25",
  "key27": "38x6jvNsNjbnukcf4Ut4TRLu2NCLmHv2g4Kic7KZ5f1W6kbojUjEPQfAftFSMx3qSvqQ5EWXEASrr8vNMDSGQEYf",
  "key28": "3DoebV9Rvzg1DzdtZGzw1xYs96QuSXtb2Swt7rH5JuoBSSBaF4YwiHyMryTAKVYq9XRWEZPZ3JxqS5pv6EHofgJy",
  "key29": "4b2YrJiKhFC6tgb4gqK3GV4s28YJNmHkmwVAC1sQGJu9xvkKcPT8heGoNP4hsNnoUA9s9ZpcyVuYn9ZvU23D8Fer",
  "key30": "j43msr38ATrpL8L7ADaLPWqaMt5LWVunL7LQDcNwrEZeyVD8WYMzjNoAtWVYR8xk89g2jWz4sbcNPAQoj4kib6p",
  "key31": "49kd34irB8jNwEondsC16uWpwL3c9udwhStYh6zm72CbTNbcS7srLTF82V2qQVq9HA1eNehrjfKrGf8Tcr6bM4tE",
  "key32": "3v12VW93eyFyzkpXKJuJEgLaCpKMpiooHTJFJmZVuk3rF9ApcSv2Ew6HsGneoSL2xUXpWS4bXHa1RGVxLVbECEZQ",
  "key33": "4tuiZKFtNuj6hNYxKxbxdXoMvbio8mcK5EW3bQMpPSF7rTY2tDoVf6D3GnoH4b91zMD821aqmdV5exrMZdYGxodH",
  "key34": "2PerMSh66abu6PUDZBNVeHJW1ZCrvWGbUBB9LBYrxX5dbMCoUTbmi3r762cFRpoURvWoiSant4wRD3W3QPoUhZAo",
  "key35": "4qU5kL2KAVjvNauL4w3qnguWHjyMrXt58T5sozNQXSYKGW9P77FMhSZ5eBACKZAskddK7qyJpwxwn3sxFWQVe9Lk",
  "key36": "2bh11i6v7dxq3DnEqSjS32859pDcFn1VHP4trzm5Y6AEXSttHgWqCvHhQ6sHfEQU5oSaxXHiQ9wcoKiP5NoQPu1r"
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
