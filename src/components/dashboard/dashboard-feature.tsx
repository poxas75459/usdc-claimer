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
    "2ivDKo42AXyyNU6jJKRHAcvBKNv4vqdXuBSHvLVwVwdns7nQ5hbLxZa5XGECr8zDcPxfEbprimxoQs6MHpgC14SN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cqA1rL16txEVUkvVv8wuRPRkxWSjc4xXBjGh3JDV8VLyFqvWCX4TdtCSrx9bLqgsrMkWyuwjptxPhHYvzgpJWrS",
  "key1": "q1yJ4KZTzQvRq5bbGMETVswR56qnV5PSNANZ1nvkJRwe9eeywKS5Ugw2BxBvvVnseyEq2CNbBqrJTLZVnHuGvWC",
  "key2": "25JiYvSFpPpWcMj62wAP98QTtATbWM614yZD4aR9FGhyXdheq4HyRCeHoZfVExZirnHhkFurZs45xS5p2ygCHatd",
  "key3": "jPZMRSfD1L2rhY1kAMQDpbwe2Bc1GUNaqv6S2oQbE7ND9aXMsJ26ZjfMfaraeqoxrnTSkiAJaxgM2PsYea1Fk7q",
  "key4": "2TYnrmpPJFCLBEAW6pD6UKYJQSvHSkminRmuhEQaRa6yBedXMLrogVJFFpauk3Rx9vvTnwnPoCqSnZVAC5tPCUDU",
  "key5": "33yYC6tTv2EnFUuZ5vns5zsDEyk3WMc2VuoxYMLgbJtCKPsdfLHgW2kzbsmCf7W2akAaHqJD2UvBRq1WKaPdAZWT",
  "key6": "5NvLGVCyry6wWMcE7C4PEyBb4yt2KCprNPKzXY6yLsK5N7QuAu38yaYa7dNVAD18M4GjBn7HSsh5qN4Gg9LfqZfh",
  "key7": "8uVgbwtA3cPeJmsAbXxqRfYVGCUgzQBVznJMNMzXMSGwum6MPc6QKeu7Cbm9NAbtwfKMubSXJvUSwMQjghyXnvt",
  "key8": "3LrFr9wNMfmoeqEdsur3uSJsKTtJUjf2nU8ZqZPYE1UkTVbjStdXYcxzia2KWqveDg6wbbMbGgXRco4ZYZDWRqwp",
  "key9": "4kapXuHQmrwnUqRmWkYJZWVcmYiyvSwqcXy9wsdTHm75ZKQswiQEkDzUKxgSVu8GnPrNRfZyYi4EhPJUwheMeFkS",
  "key10": "enA5RnDf7KK2wx1tVw7CuxzA22DHVh5cF99HJm2mTPCVbV2GeCvY6EKR9Gkk3Lh94LNvTeWGTomrvKB8d4sDbt7",
  "key11": "5mfG17uiVm2LSNN4bRr2YcvxZaLbcSMWbJaRUrAgEzgYgctngLCUee1rgtuYP1Q7kCkZiFWPPPkVfyo5LCYv4wui",
  "key12": "57fePCvsonpnSn2HVzsPLULr1ycYQsqPaQgu2RhKPrxuEy2dsZBpYBxzKjizThaG9x569yXXnWhwUSS1XLdTGS1b",
  "key13": "2yYGnK1YPXKYNRtj9s7XWGxBmoqfQYXkM1rvrmDURsq3LDTrbSEjfKGFWoPG7LPwDqcNisRC9WmkW8ptt5AcfyHJ",
  "key14": "5ZrbErqGHorEWUN7WZJsiUr4yzFiR95LP5cLCC7igibtjsCQ79mReLZ2t92cCWtftgh88u1y3zHURiLeGwg5JQ8F",
  "key15": "3ZZ3AyikxniqyQdN1GgobtDeapgsdDYn5BjfzBUqHaB5exQF2RsoCVYggGD2CJdzz75swUuonw1bnKgBoVK3UhQV",
  "key16": "4um4HT8buREVJEnoN2smknDwmdHgisNxrjGx7UEtFh8uexjnQoxLxreDYn6x7FdAVuzPiLtzt9WtuhuFTmVd3aGp",
  "key17": "5t3qRsPoLJbeUTeeRPiXz4TUGj6zvL5NcCv9BVwZrth5B5uHmzg7kmFhG5AgdtDgTjUY2okAMVj8gBeFtuTqikX5",
  "key18": "5MtKgetqu7YDUbgB37enDUuDfeDfaBFEZcXCntpMNPqpsTDEuWJAzN5BZtwzkWZJDxSGrnAtXzqu8u8oursL8Mqd",
  "key19": "4VK1sbxhS6TjZTCHpSyT1jxWkJstuiv9XzmWKak9ceQjkDXWQtb7KpwukHZ8tVaqgwsQAfFaoJLbJBw9GM6znW8W",
  "key20": "2VBuH1p6vNAGB6cGvX3PaKuysY8i2Uz2xyacUNYwLtbcaaqcKBRgyDxDHhPSySVNTwdYLk2tzQeJsDKxMs1YuBkc",
  "key21": "5Y4gm9apyP2t46Xd8hLqYFtEiqxSBHMDa37MDXiuUiwypYZLYftEuxQwWR2JEwPmELtYYFDj8UuekHNGaTwkSy5h",
  "key22": "2yFgqE4UytZXDrrnS9ME5MxJRRW1r3foSgQnt8deSovvHMkn7qqvGwsa1KUbutTC5Ph4TCERKWVHGv1JKqJueYkt",
  "key23": "vJYLnGD3i69yrrHUD9JDCE7UWZESb8c16nBjTcADL5SYE7xH9hdidBW6KHz3oyn7S5PYLyqZJy5Nwz7Lz2s4mKW",
  "key24": "4uhun3Vhetj4hcsNubJnwfqNkLqTrWBggT2W7dpsY8UhvdCBHxpvQQwoxWvAFpZT3NCdRofTZsUfiEt49BSxWe4g",
  "key25": "47CSfLhUopGmohHcz5KV4z6v655zVsRAk5nJnrqTHJNDykARzPunjUyT7VntMd18UuACTfsRJhEqJGLeRdxnGHFm",
  "key26": "2rn6wnEuPgfPbtbkiswU1KaPCjUG2tP6zhMoK79Ruc2q1pHU1483EwtvgB9J9tnjsrPj53TJyud1Mgyp9hnAmKyC",
  "key27": "5JdNNuHoRQR8Ke8FsUzELgPiJF7Ded5Gj65wPue62Q4syNqDAd2h99RpQDQ9htRt5kSLKqJkYfTmaEngFj1ybG97",
  "key28": "nLJhBKiuJX4KcDxe7qZbtDEDdzhzM2aosQiYwWWAGTGFFTQ6dLFgHEVq7oHBHTT3kLDur7DisPmFh2tyZdL5bPz",
  "key29": "3Cs1FYRKxMuUXMHtan3qVGQqmFvKqYW4XRfc9hHDwwvysAv5AmzTD4hQ9tVyUHpQ4P4DTWnmU85m2hYfYHVuZLo7",
  "key30": "2fb2MVsVDNTRryxHD6goDVQScLxjXterxCnbzZAHpHAfTgBR62hLoJqxVC2LNY81KXhkL7Zzfnv8CzpEmDuuYzCE",
  "key31": "earQmCatVqivfEMEgb87691ymLbtUc44zLrTk8XKXByXpQJnbUZLgxbVsExv1dfEUHfrYoXiW3yd4kE51YEd8t3",
  "key32": "5rb1fLgV724BYYz7Gh9dQ2Yt4uS7YpxpXKsWUa6vYanE85hgfowZi1m4RZveRNS2dTQggcByg8F4miKEjsLmdfGR",
  "key33": "4JT3ZqBnyvz5sHsD1zwuYArHEq8hvwfF43SQKhyeCNNSr8nLwhzShtcJF6Q3JV7LMLx2kmHPqD8AJ66AsSn2bfu2",
  "key34": "EUYMdgvYRB7WZjpqybQKtUUbQmHR9TrR44Tx9gQC18mU2TkpobLJWbem1WWjLC52ZQPu5qzt5UttbnXNq5AgU54",
  "key35": "5WNgiVdBn8Xvqi7HoEmtjvG6aJUv8MT6SebmoZuwBaFabi1u4CVHPnr4q5LDoTd7j75PjUapyXkGh7EFojEA8Y6x",
  "key36": "4YCKyUCi3JkNKWTsUeQgqrogazEaSwziW18G17tmyEEMEwbgoxjbw6EhgnHZ8hmTW3TQHSS5BraN1QVs8AU95S5w",
  "key37": "2UR1N3s4wa1GjP1B8CSkWAoFmPWWJM1UJvm6KnQ6vnXGwRfWbiQwsru5odQVVmrmhxip39H2omp8dcpCbjQ66tex"
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
