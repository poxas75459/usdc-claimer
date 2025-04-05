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
    "5KgtsYn1zRr53te6zuXQ8pECfWiJayxZeNRDG1SPBa2RH1Bk1D7mRoBdbB1D8kseF16o4vETKSX1xt9f9FkBvKdF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zqjxQ9uFTX1614QV4sG4k9DsrTQg4h79xEoEyAsKw6RrAuqL4MB89KsFMBdapGy2jo9dpHEmmGJ1WY1zwUgp2cN",
  "key1": "4bpGz4gTASG8kC9tjeS8Bmgws1DuTPpPidJaBTjA6wvBC78oDHdisWrNmoXtCsUk7brdyJ3w81RCi62am7zgEXnm",
  "key2": "62PwY3XBn1Er7yFwYZLar1jtXvTSKrjAPW1h7MdjCWhdvnndZ7mzSpWcW1V8WhSUgbL9pc9bS9WtNG6hCmpRFb6y",
  "key3": "3MZXJ6juU1bxV9KBxXuXGxxHV71V8hhnpmoabHNCo1JjJMKkmQBTQiZMazAjDzTWCpwHrVcLSDkjNxMhwPvrVEu2",
  "key4": "3ncRfBvpUKYZmf4rCbBWpGfw2WHHj8kNv1RyKgSp3nvkxRmBu8CJVALKMD9xxiKdhkqLeVtqzr5SJHfvvGTVLRD1",
  "key5": "5CUn14x6BqA6W6cqJrVBhJofnNNuevuupgysGkypz5x78bd8ngitPV7QeR3X8gttqEM7Zau6ULgpys2rTL2RyabC",
  "key6": "dSK99XXTVYTVozv5tsF3BaxQA8bhf7YbWGmAn86AovABtMA62PFsMWj1VwazAz3988scxJZP9FdqgcPGMM5637F",
  "key7": "RfxGvSkN9Wd1tRriCC4UB93fnG8EsNBDh9eKwk4JJCfBpgYC3yd9Sr67NfbczcRuAXc8JBv81kyczCaS21rgZT8",
  "key8": "2KxG7xHpr3HFEEsjaAD8Di4iN6RUFPAxBuXepXEn3kfkWZxiTwKnTmTvAtJRMyVANmJ5toTqauVVqd3c9sbD3meu",
  "key9": "3mQom4pLPx2D91USUMfWCHJ7sXWA3YiaEfgiRPwN2V9VHmpXsAuYfWLPw1iJMrCAq8evBxZJqXiD1ENE9GHKT9Mr",
  "key10": "2S3Nhs5tA8H8jDvNfx22a45CgHMiEkq122Hge23SRn8WbdHn5Jzs4ETDNg8wbedq2aGm6nzGpdvergTkRQNxXVE4",
  "key11": "2TnTtD2iaphLXiqDHwRV3ZV5uSZUfs9uxjyvTpU6ZAcpnaYm2K1Hqdg84MM2rPzEEC77cSjaaQtCpuAgNRoUSLXy",
  "key12": "2KLTFWqyG343VVP2skC2ZCPLU55y34FxuobtATXouTRYvN5QCi1JQkrYBqDNWMrPrXLUK1ohQdxHnpC6TCCZqMNq",
  "key13": "5MLMPT5kG6FKTHGtwHNbamvfu1NQW3duWKo2LJJyVfJyZXEs5FkxXn9tqAARvnV8Fu4TUJvBY6rxFWAUf5bM5jvV",
  "key14": "Fbrx8RW1jp8QxGnbYSo75WSsH7GhMAzbw6dNUfcibW6y8TSCwQaeo2Gmytv9WerHRQ8cSd8AZXMm5T94KPEmJVq",
  "key15": "3zX8AaNTXMQ9NcrU2xVK1so7pv1UQdEDftr24ZFrDw3ni6R95p7QASy2aNgKFEBB7QCpLQWaUJDF4SuVhrNmc1v5",
  "key16": "5YcVbgZN35GxF4udJgLwvRPvKUpDQYYnSSU3egDV7GueEAQJDGupDRpKCvSTaeWJfbegm7fzF2PcLUw6gLthbzpG",
  "key17": "4gfUJriGxofdi6qTbdq6tMnFsrUBB387nGa1UoJY8P2cBctbYmbiDrRYSw8zuCRifgzvmjHjn6HAFWCW45S2oXmc",
  "key18": "2PbeMvRPJfbFmnKozC9e8EUzx3hb8pdbNH1GSxm3qqz2HTugpNz99Umwvur5KG19hik5wcgqWCEePYrkABmRU3z6",
  "key19": "4caZSdVq99kWKCuy4BT7xoHaQCcibjBYaeux9NsJ9jgrk2i15PxSSL5atumyRWhC89LQ1f4BifbYiX96Je6uFbmF",
  "key20": "3jL1CmvmkuBN9MH9jXDkQecyScGc5qHXJPmZniMFYXKAumHV8HKaoZsr81J8xVxRhgx9LqwusBi7FJ9jrhTj1A3c",
  "key21": "3Pzt4S5buKMcvSysHu7CvD4j6RmHLtDugDy8871QMsVGY9SPdcTVmm4EjqaD6QfYCUmg2vWMv2ii5VwKwGR9CVZ1",
  "key22": "4NwFa2mW8VR8mE5Wnx1UXFnRxiG4MXjvW7FuL8U6WcxEq1rJ6LfvFZyFHP1uU2pFu33hTh4KLLTZ64RHFHbw63gd",
  "key23": "5qwLizZPwfasAv2fNZiaNw7GD94tAAEtHNQUvqrp41gz9YGoQM1GBkKYfZydWPqG8jKssZAykLTBNbe6JrpTQTc8",
  "key24": "29xcv8MjX5aYwJPAsMHGdrcp82KE2JuzjQWpHYT5cdWfhh1UBtY3dKeS9H1bqowrWTEnuUm1RaXbfWQzwe6oodDp",
  "key25": "84zYhc1nWyiXCPpf2vTLgBQUQ4zSFTojhnQV99LwNKGNKpkZPyvqDqRhJtveKyL5QySzLV93UGiMPbfd2rFz3Gf",
  "key26": "3KQQ7EwnfFCssDvjBX65KCTtHNcpE6ShnuUFXxw5AEE4RJLCbJnJ1gLZmpfqWsdYwFh2MMX1AgHpSuqbCzXVYcDo",
  "key27": "2hYTTreM8WrvVZCxgy6LJVZnN9qVveXQCjWSXYvZAKN2hTDHUFg64gvb3zXfPiYuU8zBerqqGdp5MgMtjncjKjyX"
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
