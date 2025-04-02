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
    "5axbgFPqHLSAjtYyqyu3h1kZj4rEWrtCifVfBzc5YH3LVwUpLXux3nZqggfMv7GaQG7DymY6zYVAc8y2uDV825Z9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UW9cskzik4jnBQKckTcVoNxdNFp5UyyxAFVes46KX7kyii2RWjTgmw8yErRKUXoXWUDuU7MscWMkg4TFDwBp3vj",
  "key1": "2XnLYzzy2QihTFKFDqw2s8RmfvJbfLkaBbjytTPPi4n8a2S4gZpeuX4ePWmruMi5mBh1Sb2oNjtBK3jt6VrAS3zS",
  "key2": "3McHvKmFQE7oVuEMKboD1nqP4nY5EqCCCQRCDGTW9baCfizCjkHEwxYw1t1gftwzXYfiZEW6kMFqknqeJZPaa5Yi",
  "key3": "4c1y4aYqdSS1rZxy6h3UWfHkSr7P1hMKSgAwC6dsQ1b4Hsv9pu5ekkyrEMbmBf92UoT8sTfwWnwhXimCSkNdrtUR",
  "key4": "WuyDmYWMHyuzmbETJYMagZ76zifp1L3K6wrFrGVauT9zJ4MvXVJj6TEpyN7z6e331Jpg1R1XuZUcc8VKjj6hCBv",
  "key5": "52rF5RawamYywuDv2rc6Q8eAAosNdbMsbFw8SvgDUULsytWvkXauviqt3sz7AaAwtupbpmDNr7EHnNMQhzkfKPAU",
  "key6": "Azh1YvX6uo1Z1BxJGjCGToifgGJ4cqpMbjxmz2TE1a4cY5nk6H8t4EfwdWSrMZuinpwkr3X7mpwJo8QhquGyrQ5",
  "key7": "3gqNDGNYvR11hUXSX15qyuHp4S7HtdcsTYXYRQZJXy3Z2ihshvMf8rLedeQyKdbjLySyMRpnXSnLmZ3Y4oyU4ABC",
  "key8": "2rjAwMQHtAf4bqg7Wa9upFAyeouXcqwoYhnMWn5JsygWXpG9S8PbWJ6nMUPe23yPgzjZ3yxRgr3uggjLEVNhkb72",
  "key9": "3eET7LNWrHWvo72CsgN6EGXY5By4wJZZ7QjgDVQBBbHnjFbo8VPEXPFKcvekdC8vB7b5XgPepYu4h9RA7ADfrQC2",
  "key10": "3JvzvanS2zEmsQm3uRxDsN2HLo6zd7h4fXAfXEwDixtKi21x96eXFrzB17X59knwFrvmeqov14Uhi8pNGxZiT6fn",
  "key11": "jjfVyfVew9Zhh8RArdcnNGXpM2x97QnxNMSSEnjtx2KYsSnWnBpUHLW6QEiYQNmPWhaU8mLRsVtd6ChLiusRWJ4",
  "key12": "5gQuT2eBwnHMwkhNNjjqJ6iSXmKKQBC2yp2ftSNnaEpUPuVWZB3MHMYna4VFRy5JnLMF9N6aJApCMhgLxjy4BEqS",
  "key13": "2vRw7zYXkeSBNeAJdyvWZqS5YZWWf7UZqXPSzc9ndVijiGW7Ne9cYy1MsiuecDXgXUP7n8biyrcu5mGeHPy96epa",
  "key14": "2QGHf6CXmoThLP3eFr9QaKNrUCL1taXKGN2zCi8pAXhQxGkL57YUowfGr2nU52t6L6nHLz9CULCBby36ef5kwQKG",
  "key15": "YWnyvH7pzUQ4CACfGyBnVvAh4ubd9PFx12nCxFBrRHwNNKRK3Md77GCFx7tVmh3qBCwYWuhrVigt8WfXwuzRnN8",
  "key16": "3HhhYksMvY9rVFeq7iVirbCLYFXVcA8NvvKXqidzvddXFcqjweDcE6Qb6oYDdjYvzZD1UREBQnRKqDB2zDR8ixfR",
  "key17": "C5NeZJ8odjs1sLznmBAHZdvxHcuFmPvNZfyWC1pu1vPmFFRqNqXg6ibTrRpvrAfo2M5kLeyurxYgmuwZRKeDuWc",
  "key18": "2oP2dVk8FXfVFYu9PxoEAXsLMKN5oBU4iS5K1VWepqPk3XUMam9JneTw4seobwPa8QoeMbK4PxVwqS398ywkL67y",
  "key19": "54EMsUWhao7fKmHCvWPvQzKEDQmVZqkrubbnGVfKLYxYoTUCpaTYiTE11szKszSeXAUiwzJAifVBCZTEj59FNhoK",
  "key20": "5HYaLpP8tSaWQT3uK9dDSAWUGKr845EfGwCb1UCkSw2Y7Gkhi9nNAd8fjJwcY3FE4Fwn22yA4Tc8VrRdchXnd4eR",
  "key21": "tDm59bVQJA6qr9haCjsyVN9kNdzwuEAxzjcbcJeNmNhFTVYvHZqGRPbuALRsLbZnWFx6x8795C1tiS849CyBXdS",
  "key22": "5S1JdRbGEN6mVrkb89tGoJ88rKy5Q5vp6PnvMmrA8cYf94N5qYnvi5q4vxh5jwaHMstsdZyS4rfTJ75ALqxq7g5T",
  "key23": "5mbJPde6tsMFs6N3fofnvK9nC3BMmZbWws4Umryw4UE8HEdUgeGqHPRWmXeo9wKGZ32Q6RvKuy5JLMrMYJybo7NT",
  "key24": "4tFVTFmyHEqMa8NFtEWxJKHVbPtkLKDzE78eaas6GjSbzmjbonhgYHWR9pm6wciNqVsG7ubagaLcZgrZqvHyxRRm",
  "key25": "64mupkSEPbfrwR7ShBpPUbmaVBbbZN9vgWUShajYjgwsryqFyxnynkE3yCdaQkfTnhuzvkCimGykmRQZsGGY3kgs",
  "key26": "2rfKnYYNDLDQHh3UtncH6kjbgKMfaNF6wW9siMA4ckG59pWDfNS8zehz5WYiT4wEQas8RnvZJ2RR7YMEN5qHTpJu",
  "key27": "2Ah39iU1hTwBAYDCjD6VDguqcG18DWU37u5psbftFuAdV8hCQ8Cy4WEMwpPymyoSeYceJ8ANyH3Gv614vAAhSRHj",
  "key28": "pbGdbnN4xgKprsDj3XDvXuT5f4EknuQ7Khtvn7m6wrQyeFMH5iTdgdatABhZBy8hYBsGAR2Rm63cyzn4SdGqmFg",
  "key29": "46PxPDdZJEJpNyFCiTbk3rsMxgm7osiYTuFtpm4Aq5K7AdeGyM5ZyEMVnq2Q5HBbdeePxsCcBMriirWUUHUcbk2b",
  "key30": "3hZkX1LiCgLvdk98Ud5eTDBErVgdYKS8HfrDieHDav9XWjKhDHAqcsArmQ1s7rBNpEroWRTpDFMhnRET2YyUr7sh",
  "key31": "urnhRWZDffA5pwgThJfPYg16VfUaDUd3xmVTscwotfPoMeUQ83vF8qHrHiYfywXK5UjpkJVhS56A1AG66bzBUqV",
  "key32": "3JRS9QFYzoMPo43gTmDjp7icDQVxjZwRykE4cbMxhDbk3a4DwSwg83hp9iGyz4biTLD7XhkuPAKR5MM3wnrR6zaA",
  "key33": "3bcSknTruujkNf5pbPGyoC1KsNpSu98oFYKVvnmo3mAbmkHKESce3wSYRhWGiKemCDw2hpsZPsHFQsoGTeVz7RZN",
  "key34": "GqGEJP7G9rbPhpmejYCx7TteZ4Xo8BL4cJw6ipNdGdzUiJtfQgDhbbXk8rYgNu8no36cfL5c3Xrc6ho2uCGwvVY"
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
