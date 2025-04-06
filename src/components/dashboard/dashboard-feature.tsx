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
    "2wxXvQrTnm2HzCE2g4Xu2xEe3CrqBbh8V8uu8HjTijrgGESs3SCv2XLcZgQRBowkRe9oyP8ummBW4r97h7ddUarT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26AAKv3Aj5GD2KvL7ofp1B5tZR8MnQTj2uycjqq9Wt9vyGaXrMNPsGGWMyfTxzDfCbukefkBWAHbJhxv6Qp1a6oA",
  "key1": "3pNesNeheDpKsep1NTiJvHQZLbC8y7uSKE6mW5kBn85XuFERFns1AaiHDKy6XtvMfd2trEWPVuaXyafELCFe8AQL",
  "key2": "36AehafaGo5k3MHxfw5ynJr1rfsNFkHQqvxRZRpVPsCKqtCZAfC63nBs3gxkdpzc1ofnuK86M7oQPpBXCcySLsx3",
  "key3": "2yMjGvVLpd3HJjjog9hSYvcPdwJ791nQtjZX164kTJ7JzHDkNWpLNy9BHs4iyytvyzmBAve4w1TZJjdFNEjMU2Gn",
  "key4": "3uiLS59Edwq1mTHY4KVKxJJu1BLDs1G9qY7SZLeNpMkv8mSEYXH4XeJ4juMLChXBXyv8YHUy4kwQaNhuWJNs7CEB",
  "key5": "5cCqGwmhoTZyn46TUzTJGjy445j9LnQkXZ1dnuoq1bg71ptaxj63mkmMzWhnLDV23PLCDPqEJd4kCSznjcTWcucU",
  "key6": "4QuZW4yxm6PZxEfGXTrNV7LEsjevFxvEvQb2sxYwFTvdndyQVLKLfdw3KJtzTWmJjfdFG3asQot1MUgVAfyTj78d",
  "key7": "5X9p1ER9MQey2TYpoy358v6e2unn4GaVZXUhvHaGPrjzqM4v5tVwP2bKAEKEdNAMeLsLFGXK73XPQirrq9dLMgUQ",
  "key8": "345tijVYgMBNtP49mXkdyEZ2mDeBMB2oHHwG4uj4pXbc2NdGuRTLjpUye34rdmZBn6nMcriCAnCG1WRgNN8zcMRN",
  "key9": "HkneZJ1DAeAgRedEDiQNB9WEKBh3gSRMfdYr185tQc4QW7zqr1fMyYmU1jDyXNgNVw5iMV7hQgAzDuPhBAagarQ",
  "key10": "3FgY67tGbWXE2ek3XzfncLu5cJRHuJreXkAsBssnbNcM4qR2k4URqukBGV7ZUXYsfSWaHBFvCYH1Tz5CYCD8W5ED",
  "key11": "r7BJnoifvh27sP61YhayxipTPcVw99463kTfz1mza3nivifEnM35fkg9ieQdWKbpWsbQ67zVeiFSrGp69WLkvzr",
  "key12": "35CjbUCNeaV6EMc6RLzWoqgi6x3XuDaWA8y1jy3BSWqbeNG1bQzUMVypMb1UNuwXsU2DR14oSDvG7csV1t57Uwp4",
  "key13": "2WhXqtexnXD1YimWdQCkouJicQ2Wh5cS4sm6avjypnwyECz9hr5GA8iEif5Ndpy4L4qb58AdNFKwtrD95J5kRYg5",
  "key14": "LQa8ELF6Vv1UQcTgJBNYEi22JWPekkfBtdW2tW23adx9D3jdH1RG7S54TS23nY2vUcbb96TLPhGVqTLHLpGfDnT",
  "key15": "4rbjrrj8SZRupt5rgpzo9fcGPzKHUkHmEHBNQfC2tTThmwQB6qUSf2w1Hn9KdD6RqmjnZ1HoU55aZnZvxuPSpC5T",
  "key16": "4z63spvy3NVQLpFtQNrSPWWLcCHeVVjWMy1KGryHARUKGcy1QPbNUoDbEfvJPwp4Bc9iPaVYXSBzjgBFjbyV7Eio",
  "key17": "3KpKV5RGXb5aXNZNhzVB19nztHKEqmv2hx6nWY7mbzZEy1vCeg2xBU7tcmMdXoBRx3PAnzkLWnMsrdyZdfiC7bbx",
  "key18": "3c244gv2wMSjSF8rvc3fEr7puuNHfa543LVoYYJ8P1ZL6FQsVztSiwy6QvBq2aYRHuettfagVkgsDguK97n6iBVU",
  "key19": "NKwGCE9dvxahR3oQmKP6oauYJZicey2FhWSb23K2WcXbteficR7vfd7cDqstz8wYexW9J2Q2DfQ97dGJVVRRtuZ",
  "key20": "jBnNo9KUCSGFEiZ2ffXbJcQKBH8RjmhcucCKDi1y4FWJm6jV2PdX4SH5o4ghxmSBxmRF94FcnnkmpxzeRPvvUV3",
  "key21": "5XsT3syJfiJnDeLt57oYcoWxz7qGGSPKjdPuK3TFAX86NwRbbma6zfz5B1MxLxeqCo58jLCFx66AsUjX6GBHmhqN",
  "key22": "3wsRmavhj3AB6WGR4fWoknrW1xPUY2E4DKy1xJyf9VRZa3hK7txZ95oNYnGWPopWwmtCwYvxH4m3FtEWMyu9Bika",
  "key23": "3cpKuAGUZ2ReECm3o7NnF5p8yg6KcU1VUiiMyP2hCC1VubSjLpoEmv6GEDxYjZ9gDSjn272JjFaJkYs2Qd44B9T3",
  "key24": "4vXVn2Ut8Nbgg4HfcvgEtHfc2z7W9yXkZhUV6dbhJ16sTFQsfvPV3FPov4r3kF2qxhnjj9a2poTZZzvypK51poC",
  "key25": "5mD2guVvkRc4YEh98JhTJSAbuKEjfZUzso7RmoBisPdCdji6PyZLCDyyo9u8iyV9LaaHn2j5MfNWv2ZNDAiG6U6u",
  "key26": "297BJzw5hs69mVhVKsEzWMymGttb8DZX5jqrnkRcfxRRxyW9yPkjCUToxV42EH7YqahUa52T2tyS8Z8qbpi6U8Ag",
  "key27": "2wNA1oTM3ZRXm9fcD8S7mZstfZJA5jpPGXZkorGHoPHWT1e2cDtLCVhTBmWJCUnMiHU6pUBEHttzQuovQtguRbgG",
  "key28": "UD3NKghaZosNaVAznGcehDi3Jz4766TgSi4qB1xk3fUBBETLkPY2kNujTPxPuC5T2wmqyVLu7dCyXFisqeSfbTk",
  "key29": "3CNfssB4bt8AABEyGFBbgHkHnGbTsgZAykBYqhzpmj8b21cTyc89JSdCgoQ2aBqac2Jny7qzxttKcZvXvmTxGixX",
  "key30": "3qCTS2C8vTSMEhbP6U88DNqBYmx8f4KBAhS8ZrJrxUSxoHMnMDHtymfxRvu8vR4J51KSYKz5cU2YN5QVrSyQpHxV",
  "key31": "59z49UFvoJjzsprp7g4p1su5x3fShu5CxMhoiEvMQohxrtb4KaBWE7WHGzX74BWvC7iEwPYoZ3HwgRvEFvicsdYH",
  "key32": "YQ641ZKY5FvJET18KxdBu2jGqywXiwBPLgZ1k554Gxp5YfsRiBMDxptNygJ8uhvvn8DCPnesHHMrMiA8eyQ4HC2",
  "key33": "2dpAKh6RXaMbXaREdeWtf4unHT9ZR3UfzwM6i52KjaNfgKWsbe92qxbjpsziBGHM6c8eHfXkVrs74ysUCDtZXRcx",
  "key34": "2f15Ce2613X8C25WEeqqAz2rMppMgo1PboE4YzHbuKTH4YS3mYBazYK3DDttEYRMRVpU2ebS7i2FYFoK8QSZrGiH",
  "key35": "aENYLdjk85AXZdU9GYp24y7mC3YDo8nfLvMuro8eKiE5FxjwGTYbrqSGRcE42L6cpDcfTTjs6mjjfTfFGqPi4UP"
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
