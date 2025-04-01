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
    "CTN2PMmrcv2MDdFgBZANo58yDkpZRsVTeVpzPdE9rjmpeXFdUzgKeHrhiuqNVodfw13ZJ535vjBCvNS3PkVCGpa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YRQ92htmqdvjmNxhwdNAXgqsWamZwZnzuGWZ2XbZri5r3PqkhcWozchKhqUUZKY9kVNk6L1bzhrkqVAubHRS3f4",
  "key1": "3w5a9G56Rp4K5QTRydvaU8uCftuQPpoEpxRwR2AtUBR5AS6YavnYsXujoVdzSHEMptSHYbsgyXocVEUMX4UgEaSc",
  "key2": "4tzwgBk8EQUXYkt37a4ZabZ9axuX4m7BqSdqdiiAX4hMamgVwT4YfoJmSQ6JEEtRecUvFgEXSu4W3KWvm58mDH2r",
  "key3": "4C5KsrvaiqGDWqASR45AYE8ZNx3fS53prR5VQhrBnRNbHQwFUwjheQFKGyr95YFdyVT2cntFy1W4VfvXcWJx3W2N",
  "key4": "AsPdZy7sHdtgTvJgbNiAMMssQMkN4gNTS3RNWsf2pdFxndNPLYGwYReE6S5adHhp6jRxuBppGUq3WMjceekXT7t",
  "key5": "4cWJkXQ6Pacw9GSkArmqSswr76p1FdqNgysRHStG6FCwYUwVgZtHeTevXWpYwBxot85zp1HmhGHQ24wJzaZhaNta",
  "key6": "4uVn8eenhCinTZQLDKKBViQM1g3VnMd2GiLrqvgByqSJLyu6ZBCapDERz3Ve8Li61JQc8yWYkjMgpCQKwcrhnJ8N",
  "key7": "2FwJug2vTmtVfTQyC6rnGze2qNuk6FX7YbKV2ihJncg4sHV2rmEcnuxdPtegQx5RgmUcWRd7pYsJmCWFDWd6Fhvu",
  "key8": "4jkDrgEy9RtKooHaBesbN8J6rNLRrneJ5hwFfGPbWn6oM32g4UWM46FFqawDa7f1pYKk6uSjAunasw2d8cV1JNmy",
  "key9": "5LmauU41jqiPmYPE6QvUxqdbXxCYi1ZQzFU6hNVaPE3NW2MXtvJMDoTDTGTRFg7A6gnfMrw4GaTz7ZJZQ2hs8qpx",
  "key10": "2rXsqXbc4YQ2B8WJpwCsJDh8BofuKk2mdpuVQ6KHPA6dVmoJGyFMMwjF8Nw1cevETwSu1SmuPwGdxTiWXDaSjAGi",
  "key11": "4eTMWNjfvumyEjNUpqis1uzhFwKvMND53emEySkXjVAkw6RieZ5QuuvDpD4rhQsVcczPKhb2j19Y7DQMATfG4WmY",
  "key12": "ryNCU5PTc2RGP3caxWWMxAoXv1poKFN5KgApcA75m3DJACGiQUh3BLpszjUKmYXJJKoh9nMv1ghSCsh5RXWmRs2",
  "key13": "4kHWJMqxkuNtoKFRTr9JNtNfoNEs41E4PXv9iqCAGMAGuewoSxgh6hYsgJHnsGYwkzUg1V28FaDUJrYGVrWW8MwY",
  "key14": "3Bx2TxNTQzU5PVY35ibCcs5YxnVUNbfZr4xrihvG2bQFkhcZSYAueQZWcthchHL2WXza4CEUDyngQe8qX9onRLoN",
  "key15": "2e4MxHJGGspNE2CtfdfwXg5Yys9JHQ5xgDSk7QBBsgTDJByWWYE52u5uzoo9ZxGYoDXk3eqQDjsgtBFjNTHbwRox",
  "key16": "2LntGeStb3ALu8QHN5bgR1PELhTLkzbboyx6gs5TyU1T8w754T4oPKHD6YzdK44C7SvskvqqieN2tPENAq4ohg72",
  "key17": "39FFeNW6rWa1kGodRFEr355uSmtrNQsrow4qD3DVtVBKkmV85LxnByZcachsxCAmit3L1T6YoYdiaBX5ApL8zYM4",
  "key18": "5RVvH3SE1o9F8TgDZHxT1sTp2WqFTkCCPxAVPESx4YZsY5sEjH3gwCANSM49qaWo4WFSu9kHoEsRY9HRL2xEgkjr",
  "key19": "5Ce3XdV7TrP8RqNktRKZv5bhpKC7YVBSMyUjrcGA2yV5VzZ8zbt2PsFFoNj6htprvLMFGT3cJL5UngX1sJEaFMBY",
  "key20": "5J5wyjQ6nZQRqsvrq4LTt36MrgvBAnvhE8CBcF5AxRvg4awE2yEVbcAxzFQoJR4XVk3uZgm3WwUR81KXZF5w2MJH",
  "key21": "fYfQ6thAoSvS56UHnJvde2K4ir35vcsimQfC3DGSXxH816L8kDni2GmtHCj8K6PegDXppnpPUR7MjMExPxMsofb",
  "key22": "3dSL24k6ozscWsNwccuaqKSjd4wrBFLSTtG7pHCEo5qd5WfwvgrfvVKAchZ3ZXScXSnaXat3JY5AfAKsjxC2mpRU",
  "key23": "5gaFVQAHwEwCio2mmqH6knDqRykBxGFVtKkY7i4nsTEvfwcHaKvBm6aQqLQJToNdxi9WvWr7K4JrKVGgzMaYAo5c",
  "key24": "3PNJzaeHpHfGEZSLdATnxhnLGY4YwyNLMYCEtrYHQnw981DMNqB1FGzg9EPjCMhP9K6SMsVHWjkA7PrqvZr3ARfS",
  "key25": "4dNcMRuwUp5emBiAtMogmNzczNXk2sBH3LxT5SAaosaLWRK5iRfeDRxQKZkZKreJCdyNbwaRrE5UkzYXC2Hqfxhk",
  "key26": "aAvpddTua4xJMyR7GiLaNC9p2kH98Bb5q98CTkugNhRmZLa9dxT5qXBndKmxEaMBRYw6nQZNnmNc9WRMfFNmEpu",
  "key27": "2NqeE1nuDs1m9CvYMJyAPBKqjsE4KXYyd1EXtcVJEonPJpT7SoUDnw258UE6Stf8u8pa7g5hEVAzYaJEw8oKvmqM",
  "key28": "zDdpeinpA3iCkcLSKyc1oNqcza42JZRqR9d9pY2RJ6eczJaxKJBL9Tknu95byuaU2cKwRzjGRTG6ZLgNxtHWiC6",
  "key29": "4Z3aQjfpiCKkwe6Qq3gGKipX5tfEPTrSKFSuxr6tqfvQS3YG5KeNdnD4m8mqtMxguYjFxX1tgY8xrxwMs9Lt2x2E",
  "key30": "2beeTAyyaTCVHvQwE97dw9weVcreAYRc7DFUEzVyAdszYxpNyreZi4e5SHVjiTC22QubEBuFbGfHXCtKETHS1iQo",
  "key31": "en9M9G4CDz29HgRHR1igkefwzxcvRFHm2ouXiZoPLzftbHBTQFs49QJfR1GWN4LeQoBF4xPe8kmADWB18F46aJL",
  "key32": "2e1WvNo6mAFTEALN1wDGFmiaT5Nee8RKEtowiDkZTXujvUkohTETostzHefGnUxXkRqWSRcTFTwQRVvDwJbok23P",
  "key33": "4WxneN5GUakqJpJEkizfodMQWngEJWXCkR5DDxyJ1wdQCDAqt4fsMNQaX18u5q5d7tyi8PuYVpqV3i47ufzRUpad",
  "key34": "4sHeE9VvqbhS3dtJ3tZvgG2TWV2JTbRVW6UQWQhtWgQWKa9ds2nVdr56He9keEQ7b27U8w8A4zPp1vaZdg7yrx2i",
  "key35": "4yF95xKWR8sy8ZGjKfvGheJ1mjKdAftPTc5UbPLLkn6K2ZQ1nB7UUfPmUBWcqrZV5RUDLyBujkiz8jWjWq2vSCdj"
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
