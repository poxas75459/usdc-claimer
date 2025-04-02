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
    "5XL135kuDS5ZwnnECpnno8E8mkFaAihjg22uoJEiPZ2eH9VZ7W1kBNNtrFQyh9PxRFTHdjXsqjQLXUJ4tCT2xeEa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iNFjvkSgvYNyJN6jSMEQ41FZZVg3pKdZsUjivJwi6mh2NuEpFJAV92u37QKcUecR9JLYZuaRgKi1NfnJcfGk7By",
  "key1": "54wtTirUCjLvB8NwfNZ7cYYdNkkGfKfQv3SF88ZL4EBADwH47WBshAsYXnn49M4CFHixqwaK7W6Xf5YZttgEhqWf",
  "key2": "Hyypv7HeNMMUzmSxUhtQSZJeJRWvNP16wvE8pxh8aDEs3CHj94on6P9oTSuF2xXwN9vYkz4qjC3zg5eSukRcL4r",
  "key3": "3JbgZSX6nawuUfRnVhL5kENLu5L6D5ooe2rR8Yq1KcBPG3S7PpMyviBkV9nptBm57V6gbC17y82rRMDBG7RsMjtL",
  "key4": "5Y2w2vjvVwKNfjdb5TzEz85SUQfvhvsnpXX1HRX21Fe2qeuiUCxkfdR6jP9KKQG5FNoQiqDYQiumAAN4FYPERvw9",
  "key5": "4zgbatZuazV25Zs1YyKreZGW5dS1EjqE5XHsKjGcZpLrvo5v3AD4PLmnE3136rBJB6BMToPynh3jQYb79HXLLQfX",
  "key6": "9DgusVxeA7n8ryqJDFVVLrJoHenKwKrKXK3AhtZcGDKNi99E1FDsoFbCGZAeyBfhaupBzePtacAGJvDsnpghmpT",
  "key7": "NYmTjSFXkP8dJiaeBL36M5RbgR1MewWt4P8CeXY3UCGkPUEKyw8o8iGBVdcmqzyJ5GXSbc3HWDHyamdLNo5DSio",
  "key8": "128nSU9iCSZLCJ5MbHZX5CjFDRGWAYxykoKKB8ezpw7ibDYxmbzsPAeuZNDq6BcHHY1MXEsqFMui7KDcz8VFKFN5",
  "key9": "kSkP6iX4gMa5ShzBECUAy4HJMozbjMufGTXqhCDAVX7xLLJAKTMS49ieaMVzbqt6ebXmtrFYo7owAjwkLkqQk7L",
  "key10": "4kcqF4qMEHQ3KHXxriV1EThCRod4iZqNZyHoLFBbPCDmELGk7ekFTacXwaRCbF8Lg4dKAgV3zJT1bVmx9jvTgEsq",
  "key11": "58y3zuXW1RAc7mKPzfvsfeRRmRuGGn2EGGnBxmz9Lg73Un52F3hyZQzq6eWa6jFddLexew2hd2LvQDE6ezxCxV6F",
  "key12": "5rZztJJA9BJ3CkajtgtW6WeqahQvhEYgszE7yziFGs65DcrKv6M6UbGUT1oBj2o7R4uhJeUZxGSjxpBCcr3pSRiB",
  "key13": "4bxPbJr7727MGCBCLue2epm8iC6hosRqzRqc71MrNQyu9zN6EhRA5KijgHZsTej5MMSunAgESoLzkTH84EDdb11f",
  "key14": "5eKZdnaiyDWGrgsFcp6FFyN6hjcp1NEKTrwPmAkv39TPMUJs9kqLs8ucjPPzhnRb7ozMeXtYDG96bftnEf9MYACm",
  "key15": "66Pyr9NyxTLSQP8SERbWr2UGfpKjtfGZMGsrEzVBCocvp1AvxfnLRvmpj4jEsa1X6qtFg6LwBMsQYD1PHmVDtVh2",
  "key16": "47UbzLwu2dsDjBMKmFQrMCrworqL2r8HNkNPfg7h3xdT8ftcBLJeT9ztvULZ6PaFKkt3EcEAq5YSSQUoS1qdENn3",
  "key17": "bvTDTJnjXrPxLLyEU8yLizTSxX6JsuTLfNAJsZPYkWo8kDJuMGw92eWuv9WwTV8u5Tqrfmj5RusQAYrGegFjtsD",
  "key18": "23f81koAj8PxxM45jTYeYFNT7jp1z4W1kqVx7FcxsZneCFBBVWcDFTgDn2ppyisDVRk36CofbU8v2KnaTKGRPNPH",
  "key19": "2pPjM581PRrVjRxUikzKwPcGKAQTgQUtAfokVn62UXLXZL2jeMjGHADbnyrFvVbNWBp7CNQAfBKmGC7XXLM5sJmh",
  "key20": "36bcvrreWk5QkDHNPQfzmSA234MAY7q6tRhmFiKwmAGvJT5Re1jhKCVFGV6k5N9to28fnmTPuBsbVqrqoqp4shqx",
  "key21": "W3zkPKfXGQMfgTdSDkw1gctZSw7neBKiZZfD7ka3FXt1JxhzpCdf3Aci9DXQKsftZqP5JhwafMY7Ebcb8dKHPqs",
  "key22": "4jhcB487Uctyh9fTBLcHJnZQQNTWSiXTMLpNTnKYsgxrtQzxZ2wtRjZyFgZK5UpohkZdmvLSEcDX6HNoSJAhpRvv",
  "key23": "5BH8dic2JCGVrFqP9QzpSBzPQTqhY6oXTnkCwXrFGukk878kT4Fked2niJWG7WWxWsuhBvtkhusUBkn5FxJFjBBv",
  "key24": "3aaMPX15SeC9cKVbyyoCkgo6AwN6WeoDrwbS4BbwkJ289gmcUuYQbXb8kBQwvNRdMko62VojYCeZiGTb9hhmf3YD",
  "key25": "33ovv8SqHHGDZ6aW6B5mJpYSHKUeULvj3Jfrpv8AzUjExXm6LQnAhK34x1VLaLqFE6dnvxejGgyLFK7HMiPAYxgD",
  "key26": "259gVBk8eLmQPYxfc932ScoSx8jPWttseNPFuRB6Hu3mdubFhidBbsJ5zcMWguPsud3yLVsaiSyefS4T6Miz2MXk",
  "key27": "JABh5TV4FFm2Bv4pNM8yRhNut1X3vpzWxHBvPyKCvDpbs9XUAMLPmGT87kiTNcPumY6PTQJguaaSgd68iP6qKYG",
  "key28": "4dBDaprRfxkdY4khRwCErmVz9Lu7nNGh8Xddvyq7hcrrFKR7971ZVRKeQTxsZhNt8tVuBCrjUAzuBjR4chJRmp6J",
  "key29": "2bN8dymddr1dnyMLB17DCmKcZoZvyR9imB5R1uhrVLKsJb69eRrR5E352VGWStx8bv6dAC5WxBYeCuL8jZdo9Ng3",
  "key30": "39WbRgDHxUDqFX3KuaC3USJq6MZcfgLessuRT5icFhLhzRMpSCrozeyttgyTx8oQAXpyfSopqP9y1YfHuehH3Zez",
  "key31": "4QVhsCYQ1oN7E6hxmMouonsLUwAjzsXzSJKXAtagnQiKzzVpRYyu6Z8Xh96i6yKrZme8BGDhPdATKDcq8RU2pbeY",
  "key32": "2npEPBnrmHFbDd2XX2ii3c9gmvQGXE6G7XE5yiCx4JkR5ZVkUPH6QkvQFECmp3vVCUk5LDsqLJHDohWXojxjq3Gj",
  "key33": "5i4e5vLNkF7b7LCsRaHKbPv7oEgt6vgu4zupGLVoQMXhqVATZGtNvYAXRi5T3PDFeDCHEXy1MfQGW6aq1yJQpdbL",
  "key34": "3yQXGbiXSs4apUifNskDQVo2SpGiuq1EipDMfZPjFJY2hB7QbNPxhorcpzZgTr4rFYcKArkNinG835keDvKYKxwB"
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
