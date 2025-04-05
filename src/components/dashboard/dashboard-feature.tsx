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
    "4R4Y5XWF2dek7vgBqKJBUJrJu1gEEF8BibTCoPeBiWwhcVCzyQFNdAoP5MME3D61xm1mjwVgvVcZnEB22wB9bHva"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xT2xMasuAQ7vQcr2CDqdvpjvg67oeDuG4mE2oMgR3gNUVddSc71eTqN8y1DDdSpX386J7UQgmWBq1vLy3rYC8xE",
  "key1": "4nnzPtZThA21bzrro5MLUaQEWKLeTamAs6if9GnQASwzo4F1nQPoEDcv9b6zWBiCVcfqe38DakRefqDT6CLiv2Lw",
  "key2": "46MeXCBCkBq9ZPvYEb1hJKjj1WambPKtqGGvnwUXsgawKU87VBzxSkajpDQrLXc9qDq3BF1QWfoNzErwgG26Qw6i",
  "key3": "q8Zv4TYmbi2mJ37858VW2GUfeaZZbwZ5Lg5FtumxVYBfMMAGTBdWqGJuveYC3i6gYHxSfceyd3hyEWqNgshbmjM",
  "key4": "21bJHk2uEdRq4ne2SGB9c2gDwk4jTJDVJJ2Kk9ktZmfg8mW3UY2tmaCP1npDYjYLsNstnUqP5Wd19aT39zMXSUnz",
  "key5": "3QNTc5cRq871bEo4xX716ciMDSXgpmBNGjm9guFhhXcqExaVderGaTndthzDURGKtALs8pLGxEt33BC9JHG92ktX",
  "key6": "4wq7yc4zCWhNUweHAkAbyaDoW1aaubmqDPqyagvbVWHkP7zbxURPamupJm2ATqFFxeS4gJmXGDaJ8oXi6WSDR2M3",
  "key7": "4HsscqigcyWrMu5ubgijhtzg5ztDbs97L1U2GV2ytAjw3YaHqiP8uZFfKkMboUh4gzVdn44MTo3yHGfUUrxqDLUt",
  "key8": "NTm5vD9Us2HoVKxHa5sCQ8Y8r8UZT3JuQ3SfuFd6MyQAjkc1ieLbJYZWRtkTw2YNeGwj5QNaEgxz3NHLYj9Aa2U",
  "key9": "3CqjqCU7GL83Btc3Wg5ysx1GzNAbZfQzN2MDsYBebVxPRu9kiCjJ8cuowBtS64q7tTQHcfFKNLkey7z5ZvVFZ1H2",
  "key10": "3yVcZea49aQhTimPHAvtXTrTM5C16Ng1KheRZtWDQTPRGgu5v53FoBvDqfnFfJGLGjWYrk6tdcUFWZZzyAtzEAdh",
  "key11": "3y1bVhhsLKBUo7vet3EKw2QDtEJxyBpZ1AotNgnh9jf2VxSAQZC7gHqYvSyiNK1Ceqad4aKygp3rSzYcT1af3BqH",
  "key12": "3XEtBMAeaGJoqeFtDhhMw5y2GSoQ4kLcJBfzdSHNC8xjrzWjMjmfMwdUKSz1pTuWyfoJAJLLbzQWoNX7pJA1R9Fj",
  "key13": "2kFgPt65cxWyVFNyVDA38yuJ7rSYD4XdhRWeS65UJAGNhB2AboQJ2KRab341T9iyrzq8nUVBxh1C9Cv8T6Y8fuzz",
  "key14": "42RPZjFbkNhW7Xx3znzBjLgAfVKegpo1GKJYjfDHFiFs2b9a9qCRw9ZiQomeQrTf3iMQEB4UsF8whm4A2f2Sr3aZ",
  "key15": "KTVvYRTJsWSBkCrKwP1TZ3JAiBi3FpsS9qRxnmK45aJmFQATtkk21ZSM7sLFbmuyLK1nRHfz398hZ3Gawa22wQ8",
  "key16": "3g7hfYgZnvCtvhrcoUEAF3wh6me6r2DdpQ6X8GsGjgBviWeAjhMg6mPuv3Vnk8j27hASoadbVohX1QSfHHJWEUb8",
  "key17": "5b93ZsdqTBfgGu1hdEm15yUKN2316vDYB69tK79D4yRkAx32kEP3F91nfKcU3tKidTn3kBuPKCUzJQvw46YirRam",
  "key18": "41XEjcehAvcYG7Ne18EJneXzbJzF1mQbcots19aM9RVNMKRGt3EfvV1Gioeqffgoh5YAGXAXnKbhyq6S2f3hTCpe",
  "key19": "5WPkrGoK7Xd6GtsFHy3WdGHBxDjjj1L9CKQUZ67xBaZLhQNAXshTYbhWj1awuUMFxHgjE6hkzVVoMWYSNYdXMLQW",
  "key20": "29EJQJTFMXwNShXiPftVLUCnCARhjjuUNZhJgUbC4yCAjBaG8mwStPX868EhGfKB4DiSbHhXABXJrzGR7fbfLZu5",
  "key21": "3ZHxk87VX3oE3Sf3V3ibhwkb3JiYhFsLDuNf26FETJJ6Cvk9TeindPhSTYMAoNJnTA2GG3oXHsND5RTGRbsCjDtq",
  "key22": "6UQttgFSTHivNFSP7wYSqrpz3hzj6GxgZeXQm6RevcD7PqM2WsHuyzWs6RiehEgrLdLKrRAJGGuYBSeHtst5BLQ",
  "key23": "3J2wu5Qg1FKzymHk7CgzM8WPo9gPb4bntcXLPLXbJtnC5zCK5m7vz132AmraMmFsawNU4PdyKZLtJ7bJ4ckhJggH",
  "key24": "2K5HoUtBhGzp3uaaEZQ2KP4vcCkvrmrd5dtFtypAcSZtHTSHKWHD7Xs9NsHNLgCngykeEwnC4pCnjhtg6v4GzaXZ",
  "key25": "XUChc5ougCJUD28YdhkqBYf9q3TXuJSC4JLohiAU94FY76GUBLCBnkbyAzzxGAPycx5qCeUoXBFrGws88VfYC3d",
  "key26": "4XbnpLwzpoyTijg7gbXRYjwssW982n59txmSxzMLaxS9DqmVoiRYqoQs4iczqNbEGF79AijaSC83tSRnQjN4HznJ",
  "key27": "3V2oNqYGtSrX9KqGJb33C824hK351bcGgUSENxSbninuwj2bi9CB3ZQb25bs97TiF1gyUkXBiBx9HGxjog87SBAr",
  "key28": "2PJP6Y4D2Fw98GQYkXBq4KMkzD1x2e8WcS4SsqaPXJkK9BvpuQwpKHs5hBBHnnf2ZXPAZ9Wnmybdu9FtMiGw3L6b",
  "key29": "3n5X4KfrGTAqj8hStV65ANUvnxqn8YACQK4YiUUugCpA1KGE93osMBm7HF8hsbTrtCuMQrw5YbH61pQGNXksgHmF",
  "key30": "2nnfdAEGS8aJCq9sUGBsub2kC7eEbXz7v5HWwod62pVTUCiDssiXNNaPiNSwpPNEFRx5Aqq2AoHHi3vGYH5pz45n",
  "key31": "65opfXm82CQkM14ahekWaeUwREyTGSAJN4AWnCjaCW5KUYZ3Fdxx21FyeQ42q8q8bCTiTBVM8swWwZtNgNkNDZPg",
  "key32": "AQEjhgpxbgrQPUByjPEsiEtxwu8PCzxcsdzWveaLbVgT9Zw5DGDfwbATTWsEaWhnrZjCe8zFLgbr558wgo4HqJE",
  "key33": "41tYj5EKDGQAyKFBUSeZ6jwvYew2UPsv2gh6LPYgLHSYn7DWvvii9WjbuYXczJvzrNW8vS2KpvWkHBhmVDtLDkDd",
  "key34": "2GCvYb4Wexye7gct7ZPhTpPKcyXQStaxieCojvyPpyEGmX6M5arB6kLdcerNYPUcci6EhgxB5hruhq8baUnxRruP",
  "key35": "44Qwsc9qBTMdUsdjGPNivAnAaRD8ZRKu6Gd3ua9WMqkcZP4bV5jueBZKNMPohobiyykjw9UrSzk72MfphcaWHksu",
  "key36": "2hsxDhaepBYqMHZNXnEfdxMTMvJxby3u1PbrDfDUHHkvyDoMQYXEZWw5Kz735XhYEnFxC3zunDSMkhfFYrHE1vho",
  "key37": "2yCB7WuSgJAi4vkqYAcdjByCG82eJWoeL8iW8cuAFh7BRGMMFSnv8NN7SZgBHyVEvahumFtp3BmpvqbrD2wDbfmq",
  "key38": "5jjKJCYzWQZVYmWBWzmo4Z8ZjWHiJLzjaSLxCqioujfFNLYBd6v4a2Np4WQtDyuLE9ZTygJCJ5mk2YwpRBCWqzYo",
  "key39": "daiWSGVSmxohwMafP2GsrhUEGvhqnNA6DUSvVULxy4NSUEHsvxbxi9kXb8ao7KgvkaPqgcA7mnLPVbFZku2PRAC",
  "key40": "3G3wg9q8cWoCQqaA5nmP14iaSmedi6TYtd1e7qDk1kzPoNuFpj7xxBhhhQEXJV8VTpfU9SPGnfiu8rE9HAd1eLAJ",
  "key41": "327ULgtddw9U1Miv1f6JfoF4NKjPnybwg8URvZ64cXKqzCzJBrAJg3DA7qtVeZeUFTwKHm9BiA4Xbv1wxB1ynH3D",
  "key42": "3ZAfnsHDG7h9CeqnHHe4mzhWb78rx4kCAhYvqW8t6qS4VJEeouvP5TENrdE1taQy8LHfGWm1nNm8YDoKb9UgBZvw",
  "key43": "2v9nBVgJCUVbNTVCrMFR2JFDcdxHvQYZU5yeaTYsnmWn4snK6hp7y1bYp3TpHvZG3jwLxQc1RCxzfg3aEGbvyRUL",
  "key44": "2YpoWomWzskznJzLj6T1RgvzrosQFo8zf5pNNUKhFHphFEEJjozbaPj8LEjUY4qd8trMndfFWXgLqNCJBC2r3Rrh",
  "key45": "2eKnKGVZs9xbuJJqAs5HHEaf8SgoDUQWirZNCB1ujXRw8ugYgJA3XMKAnzSwRvWc68dQJQZt2tNStR8xpEANRRQX",
  "key46": "5bdKcFyeXBMSPoWD1c98w3vnTutkwgFi2KRdDtpgfVtrgGFmtRJpzhQMrWuVVKLFL46WV4mJtTVHbaT7WAXQj7LH",
  "key47": "3vTAZKiW8CphDjm8vLshBApU2LdEVXjgnyc4TASdTQGM52g8oCSnfiswU9U4QrEh9hJWNTvK3uXnP9m16KpzAxtM",
  "key48": "5CxiC7BHZWUrqrYeM9susxd3RFYbtj18Ki3YDD3e4dKzHMH9NwGDV9JC6U2utkXsDjGVFWTvXzcouk8VV4tL3tLN"
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
