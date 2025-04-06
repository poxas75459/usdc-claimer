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
    "3sq3A5MkBsctjsrtKFJjRuBiBeicKB3kChnzYmu5eKg2RP7uUubX7dCzrjNGDYm3EWQPUraEthjpBHBCucaWxFcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iHqiVioSzqXrqGkAXUbhPA9mRe3XNue5rZ8gj4wxb2Sybb3UWZNVC4e2vEjfWCJKdosmJdFxYHJorqxQuQeEhUT",
  "key1": "LZ62tgZMdQ8ianeN2SxeBQ5fdcRmBenR8aCcZuFbN8gYwBEcioaCJh44BX2sJAHsNP7gB2tbyL9MYHUjWsF4ec8",
  "key2": "58qZgRL81MCCJ68YCE84qRJvLWgbb5Q5ids7Ho6z4HYvUytyBoUyXjnExY629H3myqLCzpGtnkv6HTDyYbBe6t72",
  "key3": "f1h9f7T3kG1ExCAYyq8dhVV3Ddm11oqnxgKaVuiHq8Zr59hJDdCZXot687JWGa69u5hJUGiHw64Cr1bNZzFM3WZ",
  "key4": "2gN8BYX9XPCbdNggjddKpkDUyHpqzbZo31wZnsB1NaEd1kQe7pbia31GCoNnxDuWULcDYzJqFjjf8vusDrXb9EtB",
  "key5": "3HmLFRPXBKTpp5By2RwgoNEPTCBLYhKhwtUbzSeT4XzYbg2JWzhi4xxbqv58XC7nWKyhg2t3pDbgjyFk3WV3Ec2f",
  "key6": "55qnmHAQGzpXP2YFFjMs7ugKnPiLXNMUAr4mfvJPWenfBWtA6Jfd828g56mdV7eUSwCxQvd65QUAC4PaRvx8sCBf",
  "key7": "5QdYaqeLbwBuCtUiD2F9HKCq8oSDsrjqEBhzHfc6DSxGkWHzsKbAuHWnb23dGsVsAqtNnRKmtmM1XHRct3sStcHD",
  "key8": "nBEvBPwL8385vEQJpt6iPTJ1gGKbDGb4S4xHEjyZyYbVzG5DH6XXgtxF1ZXiBeNVuqzxftsGjbwAHyaiuGT6XwA",
  "key9": "CfJP4gbxQw3Y6nS3ruhJ2JApyG7PjiPB1tGHqYMr8nQhEAkc6qxNKuapevnbddggzvyvbXvJV2eFcM1MpqxBhQ9",
  "key10": "iDVLadmhn1U4nDKmAAHdqoAy1J8djnFM9sN26s8uDV7VK2YRk2dCkUJx99HWpZKsFXS1uF8zNqpj5TB1GBwjmH5",
  "key11": "4R9WUFyjceS8wie8AfQ3CNVfaqKRp9XmdLYMhrjikHM9uvEDUeCQZSFFqeDL4qSbKPQu2mc7xLzKoAKKfxmEsEcB",
  "key12": "5XdjXuV14F7U5wUrcNk4QPxfNt7fZsZoxxSECVd8xLd3m8LET2NjvzBFTFB6nAazw11qpcPyi7biyw2HAPNoAmPp",
  "key13": "2r9GW2GdzECbAm4i763cn6BeVqWYGTnrBUy9TshqpvrckwKucQzLZU2W8Uv7iEjnyHuopYGSAB6vmrE4SkaWZtC1",
  "key14": "5QWgFAmDGAdjykLGqWBNjTczQD9ociF7XaiXEKqUDPBFXiGPWVJZFYQuPbDChMYQLZfFkhoDdsSjHYA8spUJPUzY",
  "key15": "62sXx9KXU2sKhKWMc5pnkUgCqcQ2FoRGY1cPS48Wwjo3RsKFTUaj18RiVc4DCrJNgPtWmv8ASsWLzyvBs1ThGqzq",
  "key16": "41wgDcMGVnui3d79ngiuZWPZ7nzqeaWGtHmKYgiVrJTBgZokzdwTEsbW14D4d2sU35Z6Ee3f7tSiT2Z2P6HRt9ZQ",
  "key17": "5U9oL319Q84yWTf72hiuhYBe5s5JWavWL8mmMwjxunmzsH15nwetvtCeox1kW6yxUVnkevLngPyDeEFScRCEXNQt",
  "key18": "39pe88jpkrwharhggdU2LWYMCm7sB5wUNvBNvREQgfCXEt5vwcg1PyWsADnrtbNyDGz17hXy3CWdcYYES5M6FGFK",
  "key19": "4yfwTBEztbgngL1RzYoj6N5TwfzDSLYb3AkY9iCacjYvHxCeqRDo6oAwnAPmn9FwZbc76aGbduVZ4Tv3y4UphhGA",
  "key20": "461HRnUwF52pGHcTXJaWDPjkG414S5KAnSgTPm8p1QRaj7RAh69TFsPMVa9QaPmgtsgcTqEgdHonuUUTr1qqReDx",
  "key21": "63JzH2ZoeqVhY5AwWjvsShm2G2RqP2nMVX97iMGo76hsYQVFEQ2a5DGvRneU8mzwmjVVWPs31oqD2RAKHiJt78GL",
  "key22": "3Jwx46bSbm2WW4qGmaKKorfkWs8Zf7ofinjUyR2jH1roeHNyweUH4ZsTSqqtSaWj5ssGmnPdb2K9W2y7qc6EQLgc",
  "key23": "4sLskZ3jHyJ25rmw2Y9YifaG93x33YMd78m47k7KX8LgkL1aJdibQT4X262fMFgFB9S5QPhq7GgkafrFgXFjarv9",
  "key24": "4t66jkgpGixXGTi7Z2VEtxjDMjB9tp1BzfGM1zSw4i35eKXdJbhiAto4ABZUzC8ZwefDzhdRYMC6yMPAuFDzDWyr",
  "key25": "2vB8XRp1W8dsvdHs28mra8fFa5BoDZ3d48JUWtoYFJ119fcrE9oeSd3ZBuSnW9kQeD9d8yxh1Vrr5E1qwatfdspj",
  "key26": "44gHPytyHuXwELNSKxocfDK3WUG3E1vyXQjFWaCrzD4CBL41T7WiaB3JzECrNDYV4HzYJs2LBB2YyHRtjgnzk4oh",
  "key27": "3krhtCEwZi1os8HUsoXjY1wyibbZL9sUQW7XV6f6tcUs8L9LexFnWvBx2HDCnT9rRJyTQbHQC9pFYnPYqrzRSai2",
  "key28": "5SdBYSUZaqh8doMWCvCBBuCkceKkmkJY4ig8C72k6VD1JMhat36iWofuyPFXVQk7P489HUe6NhSW5sTwDtpFbF9R",
  "key29": "3zkdaZYoXafEqbwd8qUY4gRCpXyscj9phBefWCK4fZj6NrkA43sHP8abgzDXNH82pBZYk5fgVqZhAuJcNJ1pGTAL",
  "key30": "2a2KBGMnGbmMWM7k8QANzhrrNJdRTM5yhi5zogZMe39qjBEmfFLLevH95Zxpzr7Em9FgZohJ3C5U5sHMCqWrEh2t",
  "key31": "5CicYtXckF73SDJctH8wrQkBd4KzoNCbqCDjDotvLDKrJ3y45iS16TNdGpAfUdEX91XMjvn6WWCVRgXGqsHAhs3v",
  "key32": "5XFynbdjno713xsZghtEd1z4pCfeqZiwGipbMRX7PzZxppJNPHT9BuHyowhWkWaKAsAzA9bQTc7qqGfdEtG6TK6n",
  "key33": "3ULktTGSUj3kQRFMvJiaPzVYe61rPUWH4f8gk1fTSLQnfNBxbukcPHWkKT6mARRkDHtPBfaP8G1wj3yvLZiQ3vUq",
  "key34": "4ZLghs1RRATx78d17jJToSZbxZd5bUpEkqhf33FcT68g2y6hcEWMur6ftjvfBPMHPQp6vZxoWV5PPXVLVmFgiq2u",
  "key35": "dH7YemrXUgXpaVEmiATaEAEaJFSSrNyqKm221uZ2YWg4xYfhz7RMqq1meia7Nn9FyH6gzPq77QgpyfiRT5R6obJ",
  "key36": "2AndrKKa3Kc72y4HwY6K9cd7mE3CNWZnQNkQcPbQFs4gAge7SY3EA3bKNJ3oe8fR1qfmSJYuyctmUdP2EiHQX5To",
  "key37": "2wVzC6N3D6fNmUH2e3EQyU6EH1LicfUMUJKFxMSCFUJJPG7Sq55e6oCL1c4CHsL5LVd36FbLst5mNX1LBMBx5Khc",
  "key38": "4Nk2sncrSVhZdy8nV4yPAj5WJAhfqfNvRpH7CFknagKo5abuscHB4CNnLjiD6i3kdPrWVB6km5U3HFcRxHqTGn3t",
  "key39": "5uF4domuH3MiexBj4jP7tLmPY9NAvPmjoYPr7n5NJMrmUZF97aGpY57eqhDjXhdz9fPyeSdd6Tg4KeW76BZqrSia",
  "key40": "MSYG8m7igjW8xLrcD4FfJDARbiMmeoK3erMY3eQzp2QQA8HPPWXrVB1ebVJnrrU9ecuoxPR9UYJjcxSaAKBcrD4",
  "key41": "3Jg3NkKtiyjeEqF3yjHkJakGwoV3hA7WRo1zKMUgXknJio7einqiJ5wzEG1BL1REXFoKeiX2aeN2YemqBHTi3qJq"
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
