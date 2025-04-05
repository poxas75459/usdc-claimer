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
    "64abW9mKo1QjyCtE2yhLWgnUE2ZELHvKa2ihZthe7X3w3YoBj4goPZj7zrL3yU3uC12toqwKdnpywGy5SrcQMdEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "P5FtccTwW47xECrNjS7d4KC6sub3bRGE3aDoBZioKsUk14Eq4PBcU5UsTHSgsbA6r56PKt6jRWDk1BxEYBX6qKc",
  "key1": "2KF3bjcoaXhiPiDoorQMqDtoUharwACyBnRhh2BphB4Yo313fTPbVPFyx2iZ2beJFEg5161AMT99KXBrmjVvtMQa",
  "key2": "3peztVj2vsUJfE81L5mfD1gFCmLvDb3mjwNoHFsydu8QGx6rEXtzVAsrPGTSXcru5YdiKYfuuxBA6tteZwHEKhoX",
  "key3": "2uUvr5HagTzZBto15eeWrqMgbJpzNVcvFfSXdPBB6zc7d219m25kUpxCSY4LZ67AySQrBhK5fZQFQtZZqFLcP2sj",
  "key4": "3tLPsBrUFpDieMMGK5eNSatUbYC4t5VYceT5YS4Rbrj8eECceZGGhgmGXjqAhKb8YZStoyNVSE8XLqoK2cCdTcQA",
  "key5": "48hRp44a1NjeymUZHz9jTDNFKxsj263jQtbcbvjaPuhMXA28Aa9yBUXCEANUx8Q6Tk1H6SiAgeKB3v6YFBUSACcs",
  "key6": "226iecgt5dbrjpvUNRweGyAVGJY9xLi9edRtptm7bAPbGkZFk9xsATY5gtcpcT11Gcr6U4j88jv61QdQ7RMpFjGv",
  "key7": "4RNMfqBBLpJfW9bYGtDoHF27pLuvvnwxRALvmGmqasuPNaxKBaQAqLYDsCthBhyFKYdaph4YeKpVzDgofaMXg3Ep",
  "key8": "3V5FgKhTre4CdrpwM7q2p5wp9sB87WuC2rDu77ye84kfcdK87yNHN6LDrpy1VXtyJepa9HKMzkRP4Up67Hynz7u9",
  "key9": "2JrWCTY6ZztmmRijxLa1HLwEZBRHfAMiycHEVyjY21UxS11SRPHHkn2uDUKwmR516EjRfZLPikJqGWjeimaMsiLb",
  "key10": "eeYWvXgAvUfbJGa2Et7C2y2kjYCiAXKNh8MW9ui3CzTc3N7AzZLLGVj5SW667qAhyfhhWwszpj32eurnwtb4afP",
  "key11": "28nhWACLP9LvyTkHfLdXWmHQTr1WQDsnk7qTwui1qkQvDsWgARows1YQBX3uJfLQrBV8KNtneafv1BM38NrhpU18",
  "key12": "28DZs2NiZGgzxyzdvWFpSSh8q1cwjJ5i4TZxLDUXvjh2iJkfL6qUf6wZ7e57BerHVFMHuqBHkNE3smi6hSbK479J",
  "key13": "3j7S6bJKA8atN6Y9EpCNKzbiv6ypMuQjgMBiTGMVaHKdxN6CBwKEvuGZ3t1N5TUCMSp6Cchr61PtarGZ8GzD5Tje",
  "key14": "8fXRmKJGWRvaJpSr9YRvt8EYDyqGDPyGbuVKL9d9Bu9JYX4x1PsxJbgdamsTj8JqmQFM3mEWW6TndhM2G5ZQbFJ",
  "key15": "BK3njg6sr2PyHLxGii3kYtjv5zws95qYrCXhd4hxeWquqSiMDAYbjLzDSr2t6Mi7fPusPSwht9HCFemgczHV5mu",
  "key16": "4qTv9AR1sA5DxvJAtXnLLeivEad5PVsDQfKo5tbxCEboP8baqou6JCqJGG6PcdoWdXhq3wqotr381prgDN5cG23x",
  "key17": "3aSsoWyoQGSXLSvbzTZAuJVx8wR8L2Q5iHkwkchAftj1eFQer3qA8AB8MwXerpjPXDJ9pw79nbtmuYTG84EKwzbW",
  "key18": "3DVJ4rWkF3sMvFqzdQZxGwQS5qH8CehU8ZmM9SuNVnPWzL4HKykndWxzt9PX87KAr2uaRqbAfrDdBQ76uSNMXGTN",
  "key19": "tC9rR7x95SYmp2Afo1RAFiJMFo6egDDDxSdP1DCw3FN6v8dGX2Fk3js9ktcJ3Kev7Ge6yELE28THbY91JuRB1ir",
  "key20": "3up6fjiStd75CNcv4Pg4K7G6UC1ev67BXBSP6E3mHmgNruApfHa2XjXLZbz9Zh2nvD2WUfd5Esdo4frdpyBg6A61",
  "key21": "2fNjxqtxFCjJf4waqmCNEhKpeYSmhconNvyd1C6e7LbhCt5LdEeuohcwUwa15PcGNDZyquJBymdte2aaHDgTKRVT",
  "key22": "5BSah9rzGJwQc2i6bwwtUShPgSYH11dAWEoN34XpoaHydcPbgD8QsmQYrD4hLP6RJfSZf9ct7JWKQjBZCuHgQ1Zk",
  "key23": "wTYpK4sbCnJbECxMsCQ7cZCdAX3Utjkzn1poZSTskzUmuys28saJddZLNEXhu1Tk6Yz7sF1y9HcGdNCtoJFjZod",
  "key24": "5LLcB5grpVYfWqRqAdzzapFzEkxdL8xXvuebJhk7yWZ1wmQtKFbJo8wpgMav4gZpyMFNMy8nZdH1Xn2nVSqi8w9M",
  "key25": "T5zhtW26upuAGyfPKerzTmB223bN2hNG9bigffLx6xc5rnARqV7fVcZ5TmVAfMHdpHqgCWVkrgZ8uHFaEuUDHnf",
  "key26": "3XHbwk8iaYJnY8vLDLUfyffvaB9LGzQTdrqcQ9bAXdLiQWwkE9MTu9K48Wkn9X2eeLV9Tdfyp2vdAJH9AiKVFwFz",
  "key27": "4bmPbYQCCVPkfZESUVBQNEfT1uaBJEM1XMLWDwz2UdZmjj1HWYacKuPG9XrR4XmoHJukeQbJMB1LmN3hc8B5i9Qb"
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
