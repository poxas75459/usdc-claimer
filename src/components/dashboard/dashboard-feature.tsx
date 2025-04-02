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
    "4QQvr6skHqxxP4J7aCMTaSuzDxuTz4CMtMR9wdPp7N4TWsNhzbznRASsNos6sw53px9ajQscDCstVmRAxbdAaErB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HZi3xB3nhMnXoJsFxJE8vxG6QrL7bascVbJa85QetnRxCpcKh9bdEEzceemSeeGeEXk6grufwhswXBT6kkybs7C",
  "key1": "5UFCzMML2tZFPCYUdMzi8SeJfZrcWVwrtpDWFYaxvSw4RHpMPC1b5iwgvf9wuwJRe6b84MMQLzWirdq51YR5mpsy",
  "key2": "ajxHzcz1oTVhnjVFepETuhnWN8SKU8L1D1FSHHsS2RjhNUJ9vPE4PiPEei4MNeuhBDE1wnrmoqcrDTVoaFGd2t5",
  "key3": "5jSzFDzVJGLPajQUXp1YS4Wns5DKPXCx4fAzfmZRLFaWFJeV4pVdtJMFiZKo9mN3sy5LFnxUhuZ4cZD1Pq6gyC7A",
  "key4": "2r1KdMdXG3Txkz31zPuDaDo3JgqF6gu32Z5CUmkfhXvG2tvHnk98t5z1o6nCRJMqQRyw2QKZHBytEyuxmZE7rX5Q",
  "key5": "4fM3N6Frb3cofXiczo1yPpg19heFE4ezht43vJq9ZwrAGiAhsz2jKH39u9GCCn1H3wQqKDyykg2yUz4ipizwxYXh",
  "key6": "3Yg49bxwYNJXZgNTgRjfNiFwyYxpifceNZG5ipwYQfvwFi6mHQkjMZ6FYoYK2CmabeKmwk8tA3wELJBL54ozyxux",
  "key7": "39yaBZjQAcqHTpTFJrzfY3SG5J4oH8MLpNS583MJPbvjkTvSFPWRjT4EioTswinBS9qKYJspmc4pxroXMV63h3R3",
  "key8": "4jSrfxjFfaP8Wcfk9BCy6XKU4EZRRtErcKaREHPe5zXwF496e6u6TxzFz3PML2XZf1G8apxK6WoAi9TB27WCBVTX",
  "key9": "2kJZK8Uv8j76KfpZ7yNdVyrfhBkrpEDczURTCHm7NkYexYb2sRLADQAZT2EyyoLfH8h1hbeheLVWh9Be2eExS1mB",
  "key10": "66E6au4QMiTNbnw7UUKSLxr8EpxJgUujhjCKkDrECpFFz2zrr7RP4sihUECmTfBZJ8F1wjpHpF71fDNHuVLDSk1u",
  "key11": "vTA9vxwbUAvPmPa6zWdQRXgEhL9DRXR2LLuE48D275ZKfgFD1MaxkJdcR1bXfjVQkJNCU79BTCjp61xduKMuTbi",
  "key12": "2V7mF6mn2qaaJJsDpLJCb52YZ3a3ZfjvVdXirWgMPrsLdarvoxojbxv2sRRLCSA6HTxd9T5aJCfNY9RjceV6Yi2g",
  "key13": "4R8VZVzgcfEUVdUwAvk79LMrJWMEC7qEJwRnjZ3FNQqw9RrEm2L83TQPvQtVgueUwKFKd4bUTcUxFWDUdDScmjGU",
  "key14": "1a872n7cRAFwM1hneeuCBY8yWVV25cYLTswx6Sw5fFFv6qiYKwDQMNw2JNMCmUUNMAombYRBkfLe1mLV8HaDhuL",
  "key15": "5AeUXd4oBCNbuvXxuJb4gFJSkK5QGGuyWQpDaSyFMfRhDCC9jburikXzsZzXA3Ciyf6bYcNLzb5xjcf3y8YJXGz7",
  "key16": "3t1NDEACpv8iRnYLkP1XnoYUwo5KEK9f52YWdVvqFcDPuJtJZPAe7dQCswgNLKCzMPSf3gwmKvvwJd2nGwnmUGT3",
  "key17": "2AnsVdgnWMbxXC5Ad2Yn1XMssN7QyMAkn38ZbBfYL77USVkqpn2UXcFvpzY4ZCoXHMdqwuBFzH8VmQLq7r2xyLmN",
  "key18": "3CvEyJULQMq5JjpasWNGjbCsAktur1XWMrwfEprbnUHe2hh95HvXzFjS4NGQDHg9rSkYtseDBQ9zaBEcssNfH8uU",
  "key19": "3BkG8NsoHsKkhNhU5Rv81V3KbjQc4awfjk1pZqhqmXJesPJmgAk6GxdWZbHYAt62FMp5nDLMboWEXYGtSBSxH62y",
  "key20": "42Z5jHkUL2jq5DtCyfV9ZKDxoMPNjvD89hburRVnEVsrRVQrmczTWDjYC2gTyK8GUqjKJQe3oSYoTEeYrs6sAZ7t",
  "key21": "2g8RmGsdMKqRtdXXdwyUU74CmpFByHBqpojYeVwWFo4ZqdPTCw1hRTeyJRjiqvp2gmnP2dThQbCMKdQmvcBMnctY",
  "key22": "4jSyFjEpmw99RSzPGouWGMDunyxYt4jzwMDGroDrd2SGesCoYX6C33Cgqnp1SwoWsd4tpmPAjMQPPPJAFwaJ8rjr",
  "key23": "2Xsz5iAWZdbazC6RFjinjDMGWshRj8j4odLpUtu6af72fptFkQbvAmhPuMAQKHmqufnK4QLq4DYBL3sA6rD37HQN",
  "key24": "2PgJMT1619yyHpFJWEoJWkUBx4hNBgqe8reZSaxWFNEZ5iyoe2Yfv9TZVD8ofyK67xYon12REytDpsHCLx3JokMn",
  "key25": "22hDZ25JqYGwrpBtHcrPcbB23JY9kCeoE12JvQQML9ZGsqVGQ5aZjbbsHSCEPRgZ6LRfzgy1gnwGvNdtLLfDzN7f",
  "key26": "J7uwQeazHQkugHuz6s5PeWRRfhB5aQLbQGiVhTrtPCBLboGk4kDbUUoNEiMeAKRgwyEo4T8L1cMcTUSCp4A94Se",
  "key27": "41sNhCCJB4FokhqkGbAzasTeN4xFHQBT3MrFNdLismMKiT7npx59D4r4hw9xtFVH9C6oFLkVhjatXj8Bznc3htma",
  "key28": "GYk3FjB1Tw6QBMzArrjVJChJ4nhVvm8MpZErXDKS8BqNdsu6mpfRZtHaccmyGgh6A1jqc1T36ZnxuBtd5ti4EJ6",
  "key29": "5TjaY6qbBnnCcMNrpHPjRALu55ScWiNTE2PVpPxJXhnvd8kcvamRcr74A9hsYuCBo5MUxtUrtLh7mkUxYmq8Mj5N",
  "key30": "VzbYjSA2CXLHKrSbVKtWhEge5sWeu3PPvigPzJ1e6eZiMGVR6Fhzi5eTihjF2hW63YKuSmqQjNkT7ijCtgWJu6k",
  "key31": "2yQgUBjqxZvxJEVamZXNvU1sbi2sWUXDMagCCCfBvf1WK51xQCwVw95erJftcezBFrzeZDbhGZgUBY3gwDKSrLsF",
  "key32": "EDcND4PpMmRd687fcV9xoHE2KttAsYFU2mTqmB2KyCXwwuCwCehLUHLnHV4GsVKfSc1CmWeixRk8dKPBRMSCAe9",
  "key33": "31G3X7g2yJYx24ZRwELaktxVbUP1Aj9MhAjeJYmNNFPP9D8KtCsvYpH7uFbcPT7NwBxSU9AZY3aJRzpL5GBAdH9F",
  "key34": "5nLFL6wtx3MmxByDz4e47TRnHmxwFE47aVF4Ej6MP2zypV79so2rLuuC7w6f3tM1wS63BS7sxGdKGoq6pz7ns2vz",
  "key35": "FHqmxwsBC1ryAV9QhVWexK9SZRER4xBj97GQsxJmX6YrteFZht8hb9FR1RbA6noMBSSPTbmbionzDesgAPY4CnS",
  "key36": "42WhWf7mvMFUGhRgJUMv17ptUf2AWDt7CJtTVFYyChdFCtUQVcaLEpLKc9QHuXfzZvxztcXQ857NgJiS8hoEXHwm",
  "key37": "2WRGgcZtiY2teQFSzJGAbG2tHEUB7roYUBoX9itTSCAzHpLCkErBLpFFzzBJT1gYtudx42CZ21TE6KH85EyxCJNE",
  "key38": "SS1fpDNUotDEkkw9DZWhdnW4MAKhccsBQbYJZB8pV3YW3iVdN5HF4DusDhUGiuGiYwXYSrL8HZzr8Qgunx4GLzc",
  "key39": "5vLy6qq7aDkucx65kbYRgi5xeZZcFzxPpKfzh9JTSCmvGEPABbAQ6zXYZLUfBc3epMuYNWYtpPJqpV5iZJsKJpqw"
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
