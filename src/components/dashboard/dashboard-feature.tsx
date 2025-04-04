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
    "MLBDxYVPYredHVuWcfywvQo3DGoSXfT9aHkGbW5J6ZyEfVSUkT1KCSMBJd7QA7X5u4DwgbUDok9YaaLXWjiFhsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3btx7MVcqEDJMveaa6M9fqTNhiMZH3sprChF1iSbuodPSP3fj1K2Sg5x3L2a6VHFxZmajni4hnniiqEYVoSKWEgw",
  "key1": "5nHv2zwPejCXnHUHL7D64ihvpiQtpkzS36WeSoyfDLqZuGWCgyD2mornjGfTqYkex7mivGTGWercbGzaaxv6wUc9",
  "key2": "3pRwCHf4Gig4bUis3tVUsWAAdLRbxFyjtfn75PAZYZ2PwhUrSKX47Shxjiq8ge3s7wvA24dJ3ui6cACdZhNSq13q",
  "key3": "5bvY5uGdW2a3qb3qUS2pA6SN2BrXnPwLPXWXwh7nuZ7vsjFVCo94ARtWeXphWExJEPB4Dv74ckcED98rQHKtXPU4",
  "key4": "2FN1zxANK2aTUKQ96FcHiGwc9brfwANMZhfJGBWGTmjAfQfbKuwfgZsCd5w6gN6kmLGPWvAAArPBbJMVCMCxnPwf",
  "key5": "baMwsmG4SeeTute8DXdgQwYSYxVv8axYGxqXAkXZFRjfH6AfVnTezoCnjL9mCNajMkRjHzNBgRmGHHYPjk93beD",
  "key6": "2C3RN1h156nwuyjsNhBfEvqB3QMrReBSxygLnuPXB1xYgjoaYyRAyqH4x8KQFPKcfk2juDE52utnMCe4KmJD1zFF",
  "key7": "5Wye3np1BFTyFmxY8ZyWkLs3octegN4cM4rrUoNoPp9ogZteid3acRnXMZR9ekVQM5Ct8fTRzvXsHQJaQijj88Ky",
  "key8": "uiStP8nUqLLyNrLd6ZAJEwfxAzPTYSgu8yrY9gd3DDHTb1NsXK2wNrr2XH2wsFSBkyMvTTQ8JCfQxikdy4URmje",
  "key9": "2oG8KhWdMoKCkKbZmxEQPbRSAXsPbVMKrgaxcQpMc1hY7RN53EJbRZmUxtGYKqqE9eiwTxyB1mof3qsitwQMNfr2",
  "key10": "67mQuVMQ4UK3LkYof2x1NCEndiXv51gAPB2kKzuWUnXXbkkHtdrK2KAqo9U3UuNpcz9F9gzD58mrsX3hp69zf3LE",
  "key11": "41PvwdHYxsKNkWHbWoLM2kCiKPgCU81hQJzz3H4rAPCE17NxHM2n8crcXSiVJtnJLzUuBeSQfagJbniK76q6Yd5T",
  "key12": "wh9q8KwwG4UJwPFpjQj14FSSjpXCNp2bBKC1GH4qx5dfFuz7JsjePVHLiZ2PL2qV1Ku3RzsBmq1q2U1U42C49Lj",
  "key13": "5CiobZc5FyUUDtwtuoFzhCBfD6U5K19EzHR77aRbyueKjCCN9rwdLEW27CVKRCxEBTH9pv3qxhf2JCyXJFrECHhQ",
  "key14": "4ZZ9hNYrvx9gA7iZU7kJvih2RnjSPurqdGChH5c38xQ8mbe3nan8ScDkaiBfmYVYabGNaKLqUNXow7uoir5ZzTCP",
  "key15": "2SLRteRQRGBXGP2bA451utydD7qYm9mwgMAfDmaEQ6wHMJsXRMBZ7MT1wUDipKLLqBrcx1Jf8vshjBRRr9ifNaWR",
  "key16": "3h8GJX2AaQy2rvnaxon26cS8Wx26LewoFZizYG6v2KrPxwyAUfPDkQuPbNDfVmQScZEPdawYnpBpiAfmmE1X3ZNa",
  "key17": "126362D3xe8HUxCBm6UAEgPPaJaEpyohrCVs6JR6s1gvAWezWQzSK182hHKzF8yrkPaVjKDnSUnwCYWNz2c2aUba",
  "key18": "3HPXcBKjq2pzYqFuLGZ7sFvjWZoZVbifHsmNeYJjkPDhpHJi4brT9zR5NnaBUEgkwsn5wqSFi3odESNSNRjJdXxg",
  "key19": "4H9EjMLRX1tKBrrc12SYD1Ds2KKqRtLUpjP2Q7UpiZQSHk48DeEhxW1wg5HL4TZS6Y2WNZkML1JAEz3SUGwkCdxo",
  "key20": "3VfMLrvaKdxJN5nEj5eX7zxDAhPJjDfjSxEHszJH6MpKupaLpxZ7KtpDU836zNWu4nm2kYz8Tbmd1VV2VKHJ5rfi",
  "key21": "nJ386kjrJEvDTQHaSEAFCNCr5WrEk1xpub2fAUBbY9fbhpgE7rXxASFeqii8cchp9QxDaYa2TuThwe5rdKYquWj",
  "key22": "3q8oA6Wd4esbWmzorAmrGKG4vUdPPiY39jEDNtA1MH2Fa3buWN8ZXhYFkNzxM4B2Ez5hmuHyeqMZHmfVtTHhbxfr",
  "key23": "4iT48QsnPmztxKrQBNKaF5Hp8nXxzgQKmNGvnWP3opMHN9JVYQuBxNFUKK24Wgjg3EnQ2PEAJ3YQz3dMhb9C3nxH",
  "key24": "5ZhA7xnjCUqiACKva9ZvuwiTuSqiU55yhdd5NiKevq5ViniUqWge6j3EuRtrPzWGRNBAyhKryET68DU3itWDvPUP",
  "key25": "4VV9jwJ2KSF8mj1tRJ85rRQedphiYSwZ5poNEXuzEmbkz5XS4CZHPWY8VnzaHUrKVHWqtDkbMPw5rnCULqRzgdax",
  "key26": "VUShiGuABTFovRNGeZQkgU4pamGmXoHUmgH9ZT1SRA6jFzUuge2vPKwupUjFjr6X6A2VEYUVWdXdXeXmeyaoxAe",
  "key27": "3ZzKkK3pCZgcSQRvPhwcZPpHxV7W7TbHWRno3c43fZASAy5eDX3WafhdFbCDSVCbbBrczHHbNKtvfmYSovjQorVx",
  "key28": "4r8JRcjw3oaXpn8BB8RXEzNr34Bxyp9BB18yQXhuvax2gr1zitVzaLW6GCPy1Jxb7V2TPvZe3xX4wY9uA47gRbox",
  "key29": "4dJNKehMvYMECjEMRiHmciVTmLHZkdb8WYQXN76f1Eks78JsZApnXaT4avqfGNSnDnSMbvX4aVpjVcMCSf9icLt4",
  "key30": "3tTyypmFyyekY4AkzgzeK2MnVg65yRSra6aTExybDENmZKBSRUFjbWRjqcryAu2bp3p9a96iBYLuxXEAGGaXXhhd",
  "key31": "4YTbGX2qCeVGazsB7GNsLw15UtAyWW47P3ySkPNGG2WFFHtPJyc4drhXuwuha3CYT9Fkn6ExcYbVA5VtAymM7bJ6",
  "key32": "uoUqmdGx6Uk2Bnmi7uXAHqBc5HuaC9b3RRBcEP3zS9V6Ssr5epuN8LzrU8zyvBDWd5Yo9ETbPWV2aQ8fQawRjWf",
  "key33": "2X98ZtpkhJXTU2px7pnfJb8ZrLNZ99ewAef3MS7LiPhydiv4kNnWTXFYAFyBFq8JWANd4BsnrVpUXnKjRVfg1p7X",
  "key34": "4jiJowqbdZirJYjzC6qALepFpqokzg7d4pREpa2VrCg1oWZmiduKWxt4SipbWSJgWKSFGG54AfFAKuvXn1mGTbCv",
  "key35": "4b6Ni724QXWQcyH84fHon5KPFE4pNeuefgQ1Q8wCmedF7mgkh8mSaboBH3FJNYuULRLTLWgGqJ2Jfnk6xNBmzRpu",
  "key36": "4mUngsnoU11grURv1gvrSAeqHyt1JHKbkuPesp1xzyBnxDG2yarzHcjmQHB3NUiTyQb222gC3d7iqS15d6P1QKhR",
  "key37": "4gda76vqSVan1PZQt6jfdQa9TMygY2wCmiwkLgUZZLK3mQFqPnJ18djmbzhkTdXv92kwgruvtc1N9pxCuNssHMaU",
  "key38": "y7Zdktd78D2G3Z3qb9M66Dm5w4uKspdf1hNjg5kEx1nNk8eNA6tK1AXG6bfqFuNC47wZ9yr9HJHJcMDMCFHMwDF",
  "key39": "5AnUFapkoPborHVAoeFw9rkwS8N9U6vKXzKZyP4cyUqA28p97vYm7CR2wFrHY9m3MbDAz3gvCGutq4tGegv2cGZD",
  "key40": "2ouAer36wvi4S8Yf51EZ3NSU9qvcVBGnf6jr4tf9fS9BaRFkddUNtunPxbt4soiwWnYWEmtx8X3fyFdoDbpKwDZw",
  "key41": "3yGmc4XFiVbqH7DnETsSivZt6uVUrmtKjLS1QRx9gttgkir6Qbd3SmsZuvHKMxHGk6dQmGVPtYY4YVLUMexBMsYG",
  "key42": "28jdVBUtugd2ZJxHqGttBcVQZSfr6e9Nz4K7fcDNM9Zs5WURcUpPR9U6N81avnUktUVvTBNymz47zuMAeEYKToVv",
  "key43": "sq4ada9QbtCqLWW9TuDocWUMHxeeCEVgRcN4JFmf7R6piUwcSDjjRYKt3DoBdCqnxw6pSNPoEgtYxfTAXXneTTd",
  "key44": "57CSCntbyNrbYExH59uMV26LxRLDpzi4JWen5sB3qJXBivAW4PfdAkUebL3MsvkojW69b6uv4zZ3vJg9mFdFtV2i"
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
