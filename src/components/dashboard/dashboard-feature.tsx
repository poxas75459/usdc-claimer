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
    "CBeLSmWnWuys3AzDo7sWdd6YRr8pFRx4fSwNeWp6budJ1QNEMfqcCpgtDKHNpC7JoBe3W1RHXgUQDnTqnYmz6DK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NYB8rZNakCMnmDbiyLnK8DSZBqayYzqZav1koKJJP5HB71E1545YBF8wZsX33g2Z4aJtgQJjDw4wXVKBNRDi8ZC",
  "key1": "5vjpRnsTz1uRTJe89R1TBwTZbNVqjTrWBypDydrmZq9xqU5qRAdNVUqStQtqhh6oLFCdmWXZbwx5SyTFjSbH9Jxv",
  "key2": "29mMojXPUkSR1GFGFuNNFHU2ynshBB5mcSRrQ3JFhkp5PH8NctLTu1bVA8mVCCExT2iS9yDX2kngwsKGH7c5MK5t",
  "key3": "M7kgPuNBhUfbz6Ee5y2FJrKHFCFnCmeaK4MqGvnXqPXDBb23SYXUwEGH5o5Rgq7K9N27B7SRC89Ny2i25X6ZmAy",
  "key4": "ziiuvH61Tcmng6Vefnhx4kq3C6a3odGcyfWNA2jkUvoXMgSPJo7hSppy3oj8N36ddU9TaoNwJCNSESiWMWct5rv",
  "key5": "5JXm97KbmHN1yg4khLQ7fCcq14ZgkPWw8gH9XoNYWrhtUaTAt89ddDBWZiTyrhsF36RUXFqmVuwgsLbgAp88gTc8",
  "key6": "3BXZE1MtZS11CfVTEb5ijmHKcuekoJYTHeLtxZDPhn8m8wqDWUAyoJddmcUX9j2WKg2cKZNaduB9Sv1ngLFhLdHy",
  "key7": "4kSsUcAqKxiBqmZsiEkdsXtRbBwPZWKcDeT887PpQMYsicBR3Ba3z8EGuroWvWVepcvzqZrcr7CzdcXnniQGEs2T",
  "key8": "3V1Uk89U6QV99EPtA8kynwEHKeRdtXnsVhXJbNNZbNBrBypD39hpqYmwzLVn69wstG77EonZ6GWCVeB3pyf5FbDo",
  "key9": "2PyAa9smKFuUQvNYQh3ZgpVhH89UQ3v56JSVhjEMp6CzMHb4GroUfB6fbXBa85RrR7DeWfgjJez6Dt3C1kNzZubc",
  "key10": "3v2TqGSNNX6QjWspmv25Tx1cteLVzHL3NPiZmLAj6ZzdzkYkacuLHdfSN4fCm4Dufu5SVVFKgBB29YVAswbbcXUu",
  "key11": "5hwaTiMRBtq7bBfUqp8gJggcXBiQwFzE5tQYPU1t1bHNGeSFJV2Es1KWxqHfZqUav1WGupmtDmDTpyaDPQtJqZED",
  "key12": "5WXTDfPFSrEFGAFkMzxuT7p9cyVAyMWpwMvAum1Etbkd24f6ca4uVofVdqDZAKNrba9iUHPyMgBJwuDrMuiAFvDE",
  "key13": "6r7YcnceEhfujwcnB8WCo47fwn6dWKVwP6trYPq1vEv28RxcJDJ8GGGdGwC4NjHMreHZMsukBAYETWLGXZPxqDQ",
  "key14": "RWAah12hAdKp1y3WbaeGhsnGyfyoZMmZufHZofiT14hj997wev3HNHGfeawqeXYeZKd4LbQwDsVd6KeN5vRf3fB",
  "key15": "2s3tvsVdJhVpgSX6hzUpmH8f6ndQgbSLHMfGybDNauej58JEKAqEK7iwPUTorU6xXM3JG43pFF4MLH4WM6s4TKfr",
  "key16": "2oDWKMKDpkjt4UUdCR5TRkaAvpEeviPWm48n54AErs2JvgSAjCvPVXzDmFVeKLYeCG5LkHUhVtFQ1ZZ2HaJHMBaK",
  "key17": "61d8eXkkxJ8Lhi6U9u14PK5NjGrVVFJagGhKvyTT2WqGDmWEHQ3v4r9CYXjgTNeZv2yPLcNpQsuj914mPRZJGc5L",
  "key18": "3xL7MMZzP3WA4Ny6Ut4bfH8zs5QdnECrya9oprrN7m5zMDeBKbsCdToWowz968Ebss6yP6jRDrwpAVRg57oPo5U4",
  "key19": "24bSE539NDi45QdFHqUwAXqzkDfEaj1y12SNB6iH4aUA3F1JYkHj2rG4QNiFFaKy2UsPcqryuT4kV2GkfagfP1ks",
  "key20": "n4xMbHYWoZQLDkXRt4uk6cv9fBubFQjUJXC64jKuiij3tGqpXr7suQL8n4QeSzpGwjd89UQmhSdNXADGML2sEPZ",
  "key21": "CnxFmU3Ut3uyZ5rV6A6Zft8ajpftAxGEcaTtw7QPJUJ2XdvJenh8qKojrj9gxe9xqgnhEqZL39or5Dc72GDUP32",
  "key22": "5HTk4q87nhtAFFH3EJ2SGGP5Y7VezWMDww3b8d5nEUYvL1Um1WSmwjUgx5zES6mcVFtmXN6Zxnc68Uo48twtsskM",
  "key23": "2ztjFiiT2UzMTrNkCpZAWWDpgF1i8z1e1i74wLb5JbaWtRZLv76AMZGnVwS6gGrNiBXfYYFsTvYLefmPy2vUykeQ",
  "key24": "3MozQ6zix1t1uDYRPXKUAiTyD2WpXzJrgx1U64KQqFU2maZpxM7AX7AJKGKPgaxAzXyoY875XFoidGFPoG74jNhi",
  "key25": "49sxg31aD82ui9vm9PNAFTaGDFFkMNHwZuHn7dLuMJs7pZwTtnnJWtLuyuVNVpudbNWH8JoVNAp9AgGctCJ2goCm",
  "key26": "57exRADKQCJXtb7CevcrUHTabJ1WbKraxPijagz5v5A3d9hqn1JBvaF1P6KfZ8vXdaByQQTt8iVMijhYveoRYNDQ",
  "key27": "37B5YE5qMGb13p4LDkF7nmrQzp4szyHhdDNJN7M1RF3Q38MPCGvsUJxgGyarLjGauTNtMqo9jD5jivJzw5pR2Yhw",
  "key28": "2Hy1VvgYSomEaFymju1LeXmfoU2jBHAwYN34CuyAVz5cfdQhUcWsYN8CaF1nLxKYatmZMxKHGu7WsPBnaNUzYb3z",
  "key29": "3kGmQF8Jn8kSU3iz5HampgmDWZGaG8hTCgZy3JAdGUeLc3uJ2NW2yaMe4G4UisqT8LUHGLAs1haXRZFUanyQ1aZ5",
  "key30": "31dEkLLQKMz2UV9zVL98PyqYDGB8yVjmUQo94oVun5ZuS8XCFELFTw8ZFsR9dBz3zVie9fK9NzjQvH96DsnFcdJY",
  "key31": "45SQ7mAidhNT4xHmnSb87Uzuv9ccMkkiq54pFQiPaUZQwR43bWhZuCVARdQWD2jVwN6uXDtJWaE7ECRhK1YFekC6",
  "key32": "4PMgpFt8Ud4NWMcYa7cHeaxE7v9VMocZXZm36gjCoBZgvncePiWWCBMG9HFAV91o8zDbh6oKYBk68cmwoyGWmYre",
  "key33": "2cHw2GJgGWpNPNN4eLa4kiz4rXxeoNRhNCUmAxr8kQuGhgHUKEwHHvi5cbM8gB2oEqQ8Dcdw1bKFBv6PjchJqBuk",
  "key34": "s6bRDjjRFX7GgXb5bS7Ezi5PZ9yA6SpHwzmbdzb3MD46tivTYbXwh1E3BoZ8nowc6TbweetZSCdvPjuUKX7RWY1",
  "key35": "2mfvCzxSwsa24uivsZ7iEMK4CnEtpdwsxp2ijD6qntDUoP3na8yDioMTvn1zmhiW9ep9AV37YPCzoCDeqZFurstz",
  "key36": "uAPkkyiFKfasiNDmvHhhUzY68PpzjLdxkeR4cLhy91CGgaky4mCABKowGogSkbTmSwQxUZwqLUzCoey5xyRkVUp",
  "key37": "4BiMkhZ7MnY2yxGAcYuSjYwEGfTtaJBNhE42hrzvSMc8EfHt7mrKKB2L7m9HoJH2eNU1RoisEJwN6H8yb4o6gaNX",
  "key38": "3ewGRr9eqVzejM5Lk6JF8Tk7RTBRkkYRJv4j7RnSrrS8SKBKwPuCv2P8WpAhEjUAR5GmgWF4ijNwHJ8WMc15RJ3K",
  "key39": "2F6eJdRyW6zMadbmEvku7REG91xxRBBGTxaSGhA3XLJiFNgPQBENxcM7RaSB6fmR6TGM6ZyxwWw9tYLxqERyasPx"
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
