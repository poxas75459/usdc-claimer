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
    "mUte8FrzKcgsWGYREAmUk196Aze81Zqx2rsP1Qzgv9PYNGWYe2QdWzLEHLjxy3bpmFSZ4FZtKKVuf5FP4RG97t5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X1MN3i2temb3fiyKUwiBmCeVigzAjsjNRfSwH2DDpJ66xjSZi136cVh9FAMUimsU37WQNJYvMocAJA1hAggpspv",
  "key1": "33LZeQCYf33CYPyiQkrJG2whytwX23eXP2ntSNXjfU2kswCeUgdLQUspwVdjWT5tsc7ECkE3tiq7FfCLU8GdWbf1",
  "key2": "4UNBnjEFpWnBqCVd8qi17L8BQrW7vveuqQax6jJBTsjPEf2dj8CDKFTkZoSzYZds7fPoRf2YiZ7jGhr8dUKgttPD",
  "key3": "5ThGTjJNZpHdtFN6stKoxjsHJNeJf89NhMxxXUWbucDSFhcGALNZczXfdbQbqCpnDbV1GZPCjoFbbHs58Tzzu173",
  "key4": "4bLQ8MvsYyMNiT1EmrXEid5sjc35a8ovBzoN88oh2xY7tu8efiFFJZ7eeH4JJhqwb1up2rPxDgdDSB3qxtU5pru6",
  "key5": "VeLpmBCkxAkHbiXsGgJzvYf4DduY4WVy3E6dvCHAhj5xGTrdPSQTd3WSkcq3tJjEQooFxt6Pdq19YMQQVFP8Gd5",
  "key6": "2MXgZ8X35fkb5B4UWqrs1yJ91HH9rezqehfr5xWQhFXPYBDVeu8ZdRdXVEt32Lxvwi6eWFSaAjAN6Yrx8v2mvWK5",
  "key7": "2zFcpfmNdUxXVWXHia87MPxKg3BhwDBgsD9dzSbu4FoDSKQa4wpwzJL2WABfXtWq434KRftwaCB172oSakSxY7je",
  "key8": "2C66zfSdsCN79EYW1rg4pWWXXSk21Jtnw8qJLMRKwc9wUcD7g8YuAm4iCa3MYL4rt2oAJP2r2HCt8h8h3qkNxSko",
  "key9": "5nSwLLahHLdgTyY8ueP69mhPsmWQLWvj4Qbi6TArmre537TVVGiP5BZEUrGHFM1wyJgQmrXCyjkW9FewE8HKB62H",
  "key10": "4vUmhnizXL4BWwDpcvzKMyyxTamMEptv3voqdi3Jkqm5PchqkJCyMLGJ42WFxN7WP98Z7v1x97Ho7WXLoK3ReRbR",
  "key11": "4qmUwMbQzcuxoAtoKPy3hqhtm7DB3wJbVAsW37Z6DcoH92jvJkj1JjTxt87FapEvfitJSmDjLPs92MMSGTUHwzSy",
  "key12": "SoS72FZpHzoatPxz221x7BjjCtW6jvjQzfuGxFjBg15q6HWeEVGe4aHGJSPhGBFy5zJHvax3eQGDLqNhJZ9SnCc",
  "key13": "4pwiGv52XWr7enZ9fmTDrDe3TTeRqxVBtdBhQigscaqK1s3cyWuKJA1LDP8FeCcj774Fq96uA7wWj2zSiCWPZdsJ",
  "key14": "53FJhaJGGHwxxBmgw2KzibEDAX3njm8Fhd7Q7qZT275qUu72E6pZcXAzVgXU7PgZqXWsTgSC4S6RpenfHkAeyyCM",
  "key15": "2qngxttzeBmuV9AqmbGTN9jqFoA6gsyd3az4dgaALeBg7YhVmpZtDD8eid397H5SySZgqSj1zeScStxm5e9t7jRM",
  "key16": "3hVb4QpuS4MQVo5uSSjz2pJs6AgopgsiuaTS58iAzCyGAVjDHfeLDSCwvRHr8yXS4xjGeCiPmHe41WqqxHwaGYU8",
  "key17": "2MHLxQw8A5boE8qjKZ8TxT7oc443gC36hJEZJjHui7iA3zb5rWDkgGEai94Jt8wXYsexTnNPfy6o4HtC2JTbk8vB",
  "key18": "wWhvaQuZ9iStxMjAZ8ByDK1QCEtRZ7RcQbJTMHLfHGqqoe7u8SAEDLJWQ2e4New1iR3gcssGgef8FgJtmeaEnnk",
  "key19": "5qoezGL2qEYcH7aY95qVFXyhg5JxiaKPj5cj5DpkHhCbKy9zgR1dYjL3CUuj7dFDEWoUBL4dPNAJfrQ7namF6gxX",
  "key20": "4NUWjNonSxsZmmq47tzbmfC2Fn9NAYZiRX9bnMZv41zs7mKyw8WHFDDqsDQiHVEQ8Du8sYe5v7EkGLszwUA4Hxvw",
  "key21": "2A9SvNmLjB2VG5Mj4gJTrAkm1SZfxAMgpFMaXcpFCqJYfZ64hJYzZi1oPKjFFHymmEYyc8oJk69EDiv7o1GFgMse",
  "key22": "2zUFpdsqhViGVdMdQ94S1GxZShhj5UJivSk3DQeRKUJYwwCTWM6PUKCytxKSgihQ2iMdbzYqTneNedajYEEU5kGi",
  "key23": "3mxBCCVheizr52hfN9RKogy1BgxQTpVni5Wh3Le6BXYmcS1cJVdLPiu5JvVzMz1BaC9qrsRsKd9pW2xYreTyN3qv",
  "key24": "2DZRKcp9Yv8Ch17wY5xdTmrWQvP1fUWA68r3C7Gpprh2xpQ3s5RphqFatFjKiEX2RBv66rCCPwXN3fiNSqUw3NP1",
  "key25": "3b4tNCVBjWcHfbEY555XEJGTjobafCX1uKqjNDbcdvUjdxss9ok15z25E4niiVLTjMXKRySgwh3y3qrwJrCrcvwK",
  "key26": "5ZQDV3vFbXSDk2vpAffpPEDFa4DC5FV1t2JnRTu6DoTSrAkV3gBjgvEgjmuhRCwyGg9P1tLduQHG7HRVbVdaNs6H",
  "key27": "u659XDKxbCC82ntSLUqu3jdEGBidQLZnR17jqTRw5iJHCtZ6zCyh7h29hcxH71roFKHPhdRGumubPEv92QE6iSX",
  "key28": "24JU8fF5uLhv5ysRb5fHbWK8XwNDFMwKnvV82XL91Ax9gSDwMxC2kxVu1q5RJjvNGbhLRmyzy5WYZtpQ3whpayRv",
  "key29": "23APNP9jq8rxwCFZkFudLuYqkeCTKZNXGp4xUUzcQRFn2EfbZ21bGAGMtYtNrMTtpgzdPnq5bQ2V9jPWKXHcbdHH",
  "key30": "1xxQ8XBvXYUdHroF3aBjYmRDZmRqN5yzLYHyrAa47KTmdr2FRMpRQHpbkCVV7mXJSN65B7kCrF8NfafJ2zASTWK",
  "key31": "sEdm1tXj7RjHjNsf8h9UVgNEvcLsbwk7MYj4uuEjoNpwxoJH1H4iqdVSzuDPyH9K1r3Atu5qjEypzjvP6fgMdaD",
  "key32": "5Cv4uLdQRTfoYWbpqYfqfhLsRzRPTj47QzDmdb5cmee5kummK7PYoXC9sMbXXff6f5iBXtcbwe7NxEXUCiRK7jrJ",
  "key33": "2AAX8HFWmpANpDW8ky7tCfTrCmf4yhLUMi2Yu1jA1jnUDJpNNp77Aj46u2cUqvsF4ceWBoJUaaLhBzZ3ji8zDedF",
  "key34": "uR7UwmcForA2xYGQR79vWkxozgXrL1u2oaZwomhRa5t4CFVsMmkQ6YknLeG5dReaEyJBdXA5r8DuAZcSrs8MVkk"
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
