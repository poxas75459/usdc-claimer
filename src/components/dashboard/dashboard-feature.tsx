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
    "F1EdeyJWY5tNDUQMSEnd5HYkMxMauQiyqy7CD1Zq18JcL58LHs739TpNTuFpSADY3XWWy4GjEj8wsobj9N5FmbC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YunuEwYfZXqqsif2FXc59Kp6G6f9NMSaNvUzoSL8YpU7kHrWJM8KLdaNf8BYHEUN88rKFeBd9MdRaSedvhQgKe4",
  "key1": "3A5ehByBzLDZT4mRuVzDQwDBvRNztmQU1XJb4Pcdw8AJc9ZyeHR6kf4haBUeSumr2Qg9APGnwDBUqP5WWGUappoD",
  "key2": "5BSVhLtgNaS3NS1cRq9xoSq6NgC42LC1wv9bRBqdMtxrjS99g1XCApMGuW8fDQP6VLgFoFHAqYBFtBLrrPCMCQQs",
  "key3": "5jnQx7xnvTDJA2g167UcyEMMEm3aTe8sbjrfPJE2j15wjbisB9y99qawYFYeteeufFPvLCERem4d6HTs9J8cZ8zL",
  "key4": "4hHc8Pfgkra9tb2MTX2AkvcBxsyAgLcEQ8KH81LfNpFYt4UVzyR4wA2ktULqqeRyjVmAgMfmaLovpBsoPmQrkTtP",
  "key5": "4kiiCtt3pn2CPtgmdHRstcYNwVVQarSYAKmbc8RhpzwReLnaDaKNinuM9zXTs9SA5CVWbMQUUWSg7r7NN2nvvDE4",
  "key6": "mrmhhNcpdCjnGVQVDE3NUWYrE5T1spZvWnMw7Y7DmZRFLmpam14LTAtHC8zvNhyEkFNLYHeqLq6cuuePeEnio1i",
  "key7": "2ASfLet1ygEx4Qwp8hnjannP91iN5fU9euvkPZ5QFrFujXKFxMmGBsDUc8g1zNGC4tFb7kYRsLyXR6DTPxDndqkL",
  "key8": "2AwvNWxhALzKgEVtqkJ87khCrqf6k7BeujNqkyfktbgPuYZUrA28dvDhf6tG98N36dWYpCmY6DTsi94Fd7jBvMn",
  "key9": "2K4t4pTexodHXPwAzi4nwhTpW3FA88AxVs5h5hkZL1XuKrYpiG3UBobbnKiM7ustHGeyLTpwzgJq1wHeeSdHCfTt",
  "key10": "66QuZUa41KSCEm3T4b1avk1uwAr3ZZiEDpAZEtcaxVWe86oMx3WDukBs4pCm3oEJ8WiroYVpTUEVScRzxTmeJz95",
  "key11": "GKjdTHhjnYt7C27mEdk36cvZA7u1zeCvAGjmseseytFgub6Etjdx59jZMwkQKsAuEHNkUtkeLgnmZuRGGFczmLp",
  "key12": "5DUZocaS7FGDL8exYZTGuQ7he2eY3y5JTLd83oxy3NL82BJg8ZXy7NKHXgbbtcLS68GUVJpuujphioBhjh34N3dm",
  "key13": "4qDzsSeTE7VzaygHFfqknZkTWGoWyLdEsknnR9b6U2in9nXWEbynJFZXipuTKbYhvrjQ3LykFCzdSRu4wJRJSAsQ",
  "key14": "23aQPG5U7SFUo9nPoNuRPs1G5LZPhEV9Upk7DAY7cRv9PG7KUEJqRyBACfAgYkjFhpwZJ59EE4sw4cmYFDZLrPYc",
  "key15": "2w6Us7weLDauGJc2Xr83eEbwUiqRXkEdH6dsVCALikfTsNDb2mf1GjsUMfBFuhRHKbrRVzgZaiCUpYYh3UwmgqXy",
  "key16": "2ts54QQunMqgnLfMWgg6hFe4MFEdvoYwhgN6puYFHZUccyLB79mzUm4Qss9sMRpxigJjfKrsuN8udaiUxsrfTTNE",
  "key17": "KBpoqzxKxpRh91kcxraxK2HvkKFbjRNPirQv9GDkbr5D9odvXixjNdXk5EqnpzkvNzqwhkdiEqYZDmUZ2ZYc2WS",
  "key18": "4SuJwi5QJg7Xfyrg6toj8SL1So8rfUYUnumQtZpWH5XNiuW9NzXi85SDyPZZjAv4VQuhDSnp8QttcB5nfqSHM1jj",
  "key19": "ezvzeQ9C9vTy7aLrYdifP658cw3h526fGbS3dmzGbow5yAWV9sGngxZN4GD1LVzL5h2tk8vo67Q4YmxJxawEnBH",
  "key20": "2jJem45h13ZeZ5HmrqfNcJ77fyusqsmeyKcXQgQJdEtDdLQ9av3k11gM5qXysDBQVkowWZegaQzG53mFoyxZT592",
  "key21": "3jPokSGh2AWjP81oCYnX5KCG5CnYMnXgGAN9fyQZbc5EdJVR5wNTzqsLCmdcXNTTVYFPmtayemHBWniNEBcuv4fb",
  "key22": "w8raGKtoojKNyfPEiHhq1bu8wm1kLcqtHWtcYHqGwGTSVUyBnJognGJo9UBNvBtj6eMSSicoWAFPE1xC9HDiELA",
  "key23": "ztaaYHJp31WpmE98GNSYuRgsdG9ogAmLkw4QjbbR6jzdLc8tDAoh5n3JkWyBhLxHDQb3bszhoF6La2Aoi9UG4vU",
  "key24": "5Q37ckxTaZdH83WY9Kniiore5s5YfGPRu3GE5trnkhcwzarC4SJUQNB5y5zNnJb8MKisfhmPy988PfrRmX1DfEZ"
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
