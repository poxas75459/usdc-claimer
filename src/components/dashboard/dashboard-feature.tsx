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
    "63N2mVAFSgxBAvovmx67HzEdPzDnftv4K4FaGUqKsEake3NEUPi3n4mn4YjXaRNk3jMQ6g3pEybq1HRoMCTnMTcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jsWfQ9qbrxWSmQEB3dYN6rdgBsEQAmgPk8vTBmZdJobvMYLuhaWX4ehXX9itow5fZNhRkxVX3QwAaiFQwg7jKDt",
  "key1": "4cbkGZuzFs5fx8DDqZswhXQYLYKKx2f8iPR2qZYMSHutDcsJj68RF27B1vyLvmpXpj95rr8NzwqfHp1yYY4KUoP2",
  "key2": "yacS43r35VtzhjKcazvWGtoLnnrfUCT8P8ek7BSXQpSZmGWMkn3iykqE17RC5ASfj39v7KCTyog5Lhwetv93Tgh",
  "key3": "64GaHrfXX8MF3fNi6EqaPWr1hB3oRYXxKKLqhwFBCQxgjQfBsTU6QCb3eqBsE3PAPYckAa79dcoqKxYKNZq1kCSf",
  "key4": "2hV4crFySYz15EHg1yvgLeYGC3zLkoWmryQz6VMHdRHT6evJKv6uSn2wH85yu1M7v8LfF7MnELYziXKmKtQbjo74",
  "key5": "3ix8u8iCAMsUxwnz9qtdyUPd2uESLJGYfR7723zUgaYEtmovs3bzAPUsQWzZhpmDzF6n5eYmPEYLArk7z9HsDrNe",
  "key6": "3tbcBAUTnMpZLRUW1rhZGfny5jyjP5ZpRLXJBbRc9UM1rKXgQpcDo9eebFomb8TjXHxUA6TtMtXgvN6Fvcc3ixxd",
  "key7": "2LGYthSPM1KpAhHittnDn69cYJa8d1SPedYYkt98QjovxhMBro1JP4YS2KNcujHTM2rKdERyZBfpnVNNb4yntxw7",
  "key8": "4hHDRCtV79cEfWKffgB7rUedM3bv9sjrxEb8c5CxinSYByhrspQAQqktxvMPYHgvkeu16MqjS7mT3yPeydFYTRhR",
  "key9": "4HaA9Lo3EdDPaFtBmmqcWEob1hmTrQDDY3MdcvwGjoi13sioEi5EcsiBv1928TqR27xA7zMMwzS176SNaXAojv1R",
  "key10": "2UxJeqAS4GTucB4T7i5L4dZxZoTcR1ZfFKnogf9eLyT14STXNGiUHh99qLeueA7tjjJS8ZvEeGBUh7gxyvRjJavK",
  "key11": "5GrDrnX2YfwCyJb7iuCdd2fUszE4Fj5V3gRxH9YUHfenWebKwZZ7w53zQufE8CyGnFc76Vit2z5SHyETjMi4Ka5n",
  "key12": "HKuapWSeCBQDSfrsECoHN4YjjfpCTcaCH9LDSLpDQaQHo2m4VzHps1UyjBBioQkPamXF58FJEkimQDRnwAGjGTJ",
  "key13": "43cgKZpmiqMeD3yRqVfxcw58BF32pFhssAWNLY5YzUqWKTX7eoUZbb448TztEqpDWqUqTR3xyNNBj2ccdbgBfeg4",
  "key14": "QB8oz3xQd9VSzLWq7TmcMaZhhKukKKcuEqgtcZWhhjxkAbPASX4HcAYYucgUCuz9Chuh47h9WaaPyVritJ45eg9",
  "key15": "2s6TNwxoe5WqDT9FcQMLUZZ4kTDCBRo9jRyMn5wUAKb36SZoYvcQRCtuwT8fPfAbtTZGqxUSQiFAC69x4CU4vDua",
  "key16": "2NDoeDWVviidR1ujW4Fy2NtX8KUoLydsL5cSr2XPacggcHeu5Hxi8HAqjrXu4zhqkcTBpnQRAjmFsB5kiv7CgeW6",
  "key17": "42gZyaK9SgJ6pjYsAkd5wRKb4w7DCDmeyGTmK7iNSPbPxGj5Q2NsTxgK914w7CTXHtifxmkKUNR8NzHxheGaq6uK",
  "key18": "5hmqGp5DRoUFezerz2JiTuHgye9J9y3mbnPjZhN7mfgsrNT3wKKL3vWZ2uUk9rEwibFXKSkyAjaFmVL4vJgjXLT1",
  "key19": "2UEzfVW2eqWy3qJCsuK7y2hcXZu5GiqxktTDCrjMiPfgTZaReX9UfR8py1akiE3VjrjmTpkdNE5LtNrZxDmVqKS2",
  "key20": "f1ZKLiM8RZeKtQCFgWryBBX7nKgT5B3QPqmQExty564uQanWsi2zvvFzfM6ch2EUQem9C9GLxsWSncq8DK2YuNt",
  "key21": "2xfGxTShfRGjoLzi44UxE4khKvg5PkqtH2mCG4meW5jG46zNGVNuktAzsdbuUnHAGGyWtDUNrpsmRt8CtU5DupsF",
  "key22": "3JDi4tZKLRRMiV3tjP5PcEjVrpJMixaHPT8dFqYNfTbcBobbqy7fsb39qNhXKXeu3wd98BpKHp5BBAgqyEjCNVqw",
  "key23": "3wnHh7ZxdFbshtbNEskTGFqx19MUcqHnUtBw9cCJHmeyuNKLod7GHSka7t6KmLmiBo1DqVAMvfvtmcboEB6txCuu",
  "key24": "2uYXv66w7xegQQFHLNA4rF5S2kHjr4h85NRPngQ66PLTsg4yhcsdZoXkDUwnGJchoui5RoFqv1huakNoWSwQTeAf",
  "key25": "43iEX5fM135rFaXNC7WhsPjsMi6P1rB479Ws13UputXqaQ62U9D69EfkhkmFjdG5azFrgyvnzyh68bKUNBqii1Kv",
  "key26": "CpD8qT23FSaxD2kEKePoku6y4nZm84nLrPvtYkgGcW9RctSgpwjD8pZZecZzoFRLDLy2kj289nBZKbhEjHt6kXC",
  "key27": "srAVwKbjGdacwwm8TYqr9m4cLGzsSPKcXBotZWggB4NydjUw4QKpFCFfpxkR1Nc1kp7QBmW7qgJuVyC3n6YFGbv",
  "key28": "2HeGQRz2tEGvjmFDVQjNCxuXwF57qv6w9qmq3nkEpE9HJ5h78z1SdXTszo1ZFopaqxq2rzN1r2GKMR7AhrdsFN1i",
  "key29": "5eED6tMiaocMea4AGHjYAcoUpURhXXaD3NEmWTK1AsHvbKrH7nDQo8CRamb2db1FejffhVgjZoKb3ah3WtTocHWD",
  "key30": "5gxzrbVVvciUce69VaDbNLZ5f1zYNw3GhpzMn9mk6BNARThyMkYsdp9CQZ8x4esD9Kr2a8vh5n5HTA8zgkwbR4EH",
  "key31": "2qFyiLrCXW8rTpFD2uiMpdJLjiAwSddUwtkBkH68Gt8N5DNizMEzsbeY9Msf4fVhYBYK4JsTHiphikiekyUpyurv",
  "key32": "4aghiSoQmwCohDYGb16cibT4rNUTT98pQ8o7ydeoi4xAoynFvn4GxLsCyk9JNcXyM1zfuf2dBLHfywkqqawu9c7S",
  "key33": "349zTGs9LEm7NTxwbdaTNv9ypqc6dqQsfAYmYypq9BSk5dLTESpVeLSKG1QYfUguY5mW4J31Ga6n9jiXTeBK2hwn"
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
