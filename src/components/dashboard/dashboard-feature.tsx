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
    "3WzD4kZCXB5MVCfj6Agohq2rUyqUJnC2pssdYED6DhqB1BsNo7kXiQow9rwrMKSi9nkumTQhfewyZbijKKWJiDjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ekowdfwGdLztqiB2pvdZh72q57erUAtGLuMweZSYrejPF2nLvdtLesSvYCaejYjC34Ytz5J8eQaPa42btEQDtSf",
  "key1": "Y3TY13MLxRNU3p8PJqYMXjX4xemJHfRMuy4pna7bGYvknjnjND9U1Xbk6HnaBU3LJtfenZPCCg9YUqKcKTh8u3V",
  "key2": "Khe77yUfPkKGnsANrPGNP2DEMAL2dVM1ECcksXf8HoifH9G1kNgP64GbQnY7BUhfVQACGsMqatwkUxLjNXjBJcL",
  "key3": "5KCEZeAX9Zd3gQU1UmA69Bzt4BCK1sRE3wtrRjGbp7Hw9Z7GQsJEYmKRwmWb7XhVaLGKXfEcJQXva9gVfdWeDNhB",
  "key4": "4VdfKymvhTU8LJEypx9GVM3WgX12w2iFuXByySeX6zL2wNr5jJGGLd1Vowx4xYZX83y92Z36rBhUNTHLdCiCfk2v",
  "key5": "5EKnEiRa4K221WLWtiJ94HENKZ3KYDLHyPVgH6h3cDDiBbzkVWhdsh5iY14evDGZVAXaMPku1i8Zrvs5bBMmokHT",
  "key6": "3DxoDAvQySXPLC5GFbyU58Zq2m3Z8eMfKiWeS1gcsSXGnM73YTwrdDTnfBmbf4c6xCveApZ9W6SSVKhAzQtMZCxv",
  "key7": "4CXspV4sAWTZEvh7MC5eD18byxx29Zn64TUh9UNGfFsA6hf5SC8VvAaUAKBvffp7p9T9qAVpSx6uQMn8kiqXQG4e",
  "key8": "3wZH5Nb1dFQatkmvo3kh4fYM173RLLJCCVU4WaqJk1Bw4jFHmLmeUPCHJUuHDGN6yt5tqGKSzfgEVmtoqnQKrTmZ",
  "key9": "4kKiuNvRAeQZ1CNGMfsgSwaHNNnq2U956oLcLLVWNCdnvFE8xGfF2kTTnXx2azuCd9thoSuV7V9Aspr88a4SVGhd",
  "key10": "3U7pqSL5w8CEx2mgvbm3hQHXsJQVr8yz8LrcX4wNAxpng9vsuXDuW547dQywwGHYG6JjgmVpyaH83K4k2X9tF8hD",
  "key11": "5zTeqBqHFxPMUSHSjz8fUyvYGkBYjXdV9WTTGMmnVZUmc7n1RRE4Ez8uFY46t2E7bVo5cdch4y7Vxn3vCcfbcAMb",
  "key12": "aAnfH6ULTUQeu7RqcH6JZqEofWhNShvGmyRsLZdNF5im4JxTLt8kBKwToVuUFNLxeD2tBBRUc7fu4hZ7tqeWRth",
  "key13": "2J28LCuy6mbYtmUzzMCkFsoUVEwUQpzZnWa78kTQFrydo3FYG2iNQJd3UR6fPDvCLd2PGoZB6EiS9S2CkyTRPLd",
  "key14": "2nvXXDaUqhPrCGAx4MSEwaMcuypq3erkgMmKeCTUETttgfULs4ZHhrCkej6D8LTQsvAGfutypNhR7YSZiZ9Hks3w",
  "key15": "3daijiJvfW926Y18f8ikbRKVxXzRi6T1jut1DnN6aP4oeADqTwJjpRSbw3z1eyTrHzb7JLTbGUK66aEhS8LGoocE",
  "key16": "2tGgEdcwjSDiaY73rdNyQ8Cb5r89ay25vxuGoPtat7vScj7L9xTesU8DW6CvVh6WugYv5SxevenrNc5PfNDPvvn5",
  "key17": "i35zZYmn1nFQNp4T7ZLJctNbaqt7HqXtNUikKmCMCTefCDfQRFPf5cxFWmTdaT7ALY8qN2WY6PC58mtRQmB7pon",
  "key18": "28fMRYZ2iBCZdznDZHXHP84PS7fq2P3zdF6ifeVcCUMtMmt2sKDWD2b5p6wKBkEiJjyXEPiCNVdxBg8Bav2rfbtB",
  "key19": "28Tv1nr7mwGg37UJGe2P9195eVS418UjyG14RoXHk3mdEMAGYyyManLmZmAfb8jGdhDYg7iizPy2sdttN7HEzLxq",
  "key20": "47fwEsmWyb57STtAA3aFKG17tSLvcRSqoA9RnHotsk9pbS1mEN3VxvU1om52feZuyChd6VtHzVPXF8ERR2puwAex",
  "key21": "5zg61EH9SurRda8UgAEm8aW8Kz6C3Ftmtr4Hjynnn8mmkuzFHq6CY9XbZceJ5Cw3SG7E6APQaFWtMc4X4TNfSr3",
  "key22": "3XMfCPLRv8SH9cMS9vj8bTYSroQ8dSmzxeXmBqxZxhvcwP2CvfYLSPZiRZRLiXByksshtVKhVqsPyxqcmE4ssqVA",
  "key23": "zD9HbHh6H89xJnjQDxqaMZF1djsGUJocteHX7FDh3eFsDyYowaLBoqXeHuGu12FMiS3wXKT8CKgDVshQydpdJG7",
  "key24": "24Yg3eTyVNffGnaHsEZj4Ei8Bnqu1h277ykS2twUZeN9dTVwLhrEy9GwYFqM4v9ARfoCwVWo2yJaz21F8iUQBcYd",
  "key25": "3iyJr9Vo5qDL7YzrwpwHmfjAAVaesSBYS3Bz1GgThFmPBxE6RY5T5cFrAzYqbbe58WLPHy8S94zX3jetCQ2JNsiH",
  "key26": "2RuGuEf8rYF3vLcfi7JoVYb7cJNxEtkK4bhBbM9aUukgzosXEdfQjdo7mvtrhUoaysEFrKtWXxRX42t38RvsWkvW",
  "key27": "Ac8RTQg2DFYx8KALowQgJsn3NSLYEDV19tVwrFRdAYaKekrwjjTomtpXZ7K1JiX8ruvsyu6qNYiw6vGuAeBkyjn",
  "key28": "62Bx2UhtK5acXKq9gXTUpgqFEDAjSUGwAUUDEjJqTuMcRYZXE2kWbnaTZDmfvMPXonv2VhkQPv63SnzhftkWnxqc",
  "key29": "3EqaegmUpUSDDcXy49FjuZWRMgJZvZMQE28WreLp4g5cwaFd1KN8V6EPXd9NGdj3YDN6yyMtPAHnjC1qUuGDsoGj",
  "key30": "4LE1FatBp4dUC8BnaDRkCNKnFjfiaMYrmnVbM1g6vvW7EHMgoLXv2mn5ogXFL12P5DEgo5SAo3pEhHgrwPKP9GNU",
  "key31": "5UGFQXiLnqCdE6WakvdnrEwgkBRQafjp4oEr5eAe5XSTXNiukoRq3FpwJkbP1NQiK4YyAB3djChcVR3PUBgGTSnX",
  "key32": "2raojZoesvtGUAbLu9gNeRC9NCRHmd5fz22F8H2TxkWLcVXmK5CR49b2fgQWhAnwGUoeVrhak4bzRV6ixjDfDp4Y",
  "key33": "CvCguSqsdkaAk4hSEPVqcFbLCd2CaJusp5fb12QrhYt5exGEwcRHRXbmt5qA7bKKzPwLnKHjXFpzEaUMGrVZeiD",
  "key34": "5xKdhAE26bh5TkSvxgSu7BhtgKV1SzHjhM8nxhTGNJdjYMkcMN9jC49NESEmhgzHW9k41fvo4EMcNrUpCTA61wwB",
  "key35": "vAekquuPF7GiC3dEZuWnngerwFhKM179fia11EscXSzW6B5XTCJ3zvxo98EwbyYFJJ7vpBWwywi9YPZNnAKZuna",
  "key36": "NzNrBV7e2BV392eFsD4crinERRTULZfZnG7hjZZJdFpFzEfQm8CewUsfvK6omRLvMFnVAXAhmfah8rwxMBVciXA",
  "key37": "iwThXsgTHj5SHAuPAZCXgjVmAnEFQ3DJ5DMq6wK7MQ7JjAkiVLmXgYBGuhSPjb4DGEp2VJtzm5qPvopEaYN18tv",
  "key38": "64CpHGFTgEp1vG6oxkoPFPTEWdUsxJfbgm4L8ALxh7WTW897xjppqKR1whuWTXjrVXQ6HjKr7bJDKuo4tC46CTPp",
  "key39": "48dbkqaUgGqSEKKttKkdVzjw3jjsgRrPXegmNxavxnDZywod8CnB7NRgsNorAoykaX4hobWZybxGRQECAYZAbY8t",
  "key40": "3efDP2ot7pQXK926ngvFkeas63s9QZHAQ4PERKktDnkraE8mrvpbkQkt6xpVqA3YM5suLVQLf38viX2pYPRQRA4H",
  "key41": "5fRjParXzfpBFkWYMo6TvgMfLDsif6MGodqMY3Suvn9215Zd7zH5WXxkZR5weR8EjnhW3XbqDur99LJifkeywqW3",
  "key42": "Na7ME1fQx9X45mxqNURTc4j12vqwmjWEmHkDpNmrrPYhrs3JXyfp89HpGjELv8b5CHtHR8FVTg5tiztTjPSZBp9"
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
