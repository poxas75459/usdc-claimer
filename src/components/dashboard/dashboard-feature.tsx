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
    "38zyFt73Mi8RqQD9Y52JeA21tcmutLpohVVsDg5DCi7BaviPQPJoswWLEknHkx2tvjdtDpCHoUdJjSevE4998GRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZENj7vPxDFpdYdZigvyYK8ScvLBYmdnYG2XQeWbmkkbZRpudva5WZi8VZyk8Pz4N2DeHBQbzYnDyatFbAT1mHp4",
  "key1": "3Kkz4UnpdsHkPsW5aGqVU5LW8uk4WU75eb8TJGWHUFHq4cWd6iwCkHYubmch35ap43RTerrE4Xybubw5vr9UqFPj",
  "key2": "486QPNtJQcLvJyH2r2VoMYmkowehLPRycWS9kMvKa6PkcBZEEH5YAuNnJHo2V8w2toUCMVfnUxmcuDXYs174Fp3D",
  "key3": "5Enz9dmcNgqwzFgVymmGA4sGvBDMCnqNR3vvj48NezoAjC2TSUeyZwiaf9E5svsZMCtip6BrTW4Eix6WLDCj2Vq2",
  "key4": "4CDeB15AXxPoc9tfXy6c7xdfXTJckQuLGZatvJYQXj84wpdazTDiHnxuZsgRjWkPSGxj6QjK7XpKnqiqF5RHssGd",
  "key5": "43Zf1V39TPRdNwcwsGn4w6ZdJqF2juMRfaf2LdfTzk9bYrPsyqxnN6PaNENDv29Ui4thfMScZzkMAjQ5oc9Agegj",
  "key6": "5KyAVQ7uH4xEfpCWQdnQrtNJpqy5KMu5jwWePWpkoqbiRCwCWDcsgTQwGt54R1fQNu5Eb4i7nytMSB5dgKdLLrnY",
  "key7": "4YQdHv7zxJCD3s5FUpZtdd7BpUMCTjNSSHCa5VcMEqBdjiYwKAcjC1SE2CWFHUn8W5Cndgrmq4oqkXyhhHtJAKmo",
  "key8": "46iGQFj3zKv2a5hUscEraJCvPvABrToYhu7TsqESV4Gj9zhUUHkMUFsgswmxNPfCtcERcz4B7KYwFGDCHjNdzxRV",
  "key9": "4BqgSGPannGeHKL4ttsAXUr4Bf2cDxL2ytoDkajXFctyJdAUpNzBijmuDdT7FimxjHzr1bXb7C7ubQxt7EVuvDaC",
  "key10": "5JNtqZYynzqyZNKS62stSvJVuK8TgvmHqxygRjpjixz9nXiUve9KzSBBsPwyFBDHMfwsnuRkwJkEdhmLr79RLLLB",
  "key11": "2p3CJwHe6YCkPNCCrHczWFFzKAUWjSWbnGLhaQyz3bjL6AoLPvbLcwqoguVnrfauspX1v17oQfHU1zBeUMxjwnSf",
  "key12": "3TdTJxKK1rCanSvTLSFVQwmSmE18gf2wjAytcuyiLBLub6TH6zEFo2B7dQx5T7B2zehPNjsY6hwmSGUpB5GA3d4c",
  "key13": "36Kvaghddm5tH4qy5ThzzSXvciiy8untMiekLdcjjwCysngHrRJ7YKLRF6fHsE82tDZ9ZVixnRCjJcGKQiasc6EC",
  "key14": "3v6d4nuNhrujaqgP81d49nef4Njpm9M6oK6DG46UNsG27zT2kUJwcuGrpAzRyZCv1ASshashwqLP9KuyUB1jGd2K",
  "key15": "4PN2E98B5aoCJsc7zbu26Zx4f3k4WJftEf4Ff3EABfxALzjYN9CjRPUwfwhgkmxMoVP9nE7VbvUvwui1sESBEmUv",
  "key16": "4iVPdDwdqAyuwyJLGCeSbEUcrJAhBvUsa3BwETW2k5m4qaaoC73cuh4TQ2zMohrAecfijxeCkuhdEKWg2QRk24Ce",
  "key17": "34f3vw1Jk9gWRG2FddrXds9qooSk2bzF38zmwupaNkYNLLBAvMHYZ4UKDGkL65tzuchb7ubhmhvcpCXPkfcJXReo",
  "key18": "3izD2hr1iUTqbEUHptXWDmK7mFfu47gjn43fh71QobfRjcakjJLWC4tBqjBH8C8S2r8Kdrf68TAAgaq4fGj4MqMg",
  "key19": "3Ftf691kMwC7iMD8tu9T5hCkk9Cf9fd2tBa9FXvNY9jRWS3ExWLYXByN9pVHUjZw81P1rVZKaggmWV3gWZpcTaJQ",
  "key20": "1EPo54mVaP6JU56SUkg91X2yeuRe1mrzMq3TKkspeh2LsQDMr35A2KgPEPiypAyqxtjgYpgLW8rmpuGYLZk128m",
  "key21": "5k1VisMWVRXARBkt9YkBhufkEssjrWCrqzMdtnbVvfmB7uoCe8cKF4UiFjq4bc8ofHGtMoSX5cd8iUiFmRrSkgu",
  "key22": "4XyMUgVyf2eaMtUGT8cLMgUhqX9C5B6wQYqg1K2vJ8w2Nd8pqY8RivGaxY4zaDJ7bSL8UokTDQjLdnbksYLzim2c",
  "key23": "2hGcdgkLyy647NDnPeBJEedUWhpuHTsNBAobRWuZdbfPqZRHJHTr4jsc9TA4ymfjL71RYQ6LCaYshnzyZ895E6C6",
  "key24": "3hkYMqu9fbsr9twpNTb875fiFQPWAfazEV7L5Ek9zcHqJcX2xDdJ5qStLhMkqdf5PxC9cKMroMHvWrP6SJwohQT5",
  "key25": "evfZYkXBB7SBXHQcGvaRfZsj1eH1NX81p5tV8UkCQaT9AQDPdYzYBJuEXND4pcVMrFwxQj3RzcuJ3aKHSovgAta",
  "key26": "5Hf6AdUMV4XTg4oZyHVpKrLdfXYDjMkdkNeG4rWwfhCBnGDGStosrY8vS5HrVjzpN6ed7rD9GghgyJcfphwuRXGP",
  "key27": "32dHESV7wnoh8mBC9Ay1md94LA8hux8WfEwpdK8FsF5d7wVPNpHXySF3xvrAABf9732XdUWTNKS5zFuPUB1bstbP",
  "key28": "26LpEce9pdB3L9Bjb3BTigfJrrWFL1Hzu4mTwMqkdDLBPfRsLYMV3AwGjZW9NjUdfsN4bhTwk7tgTy9zrvc7twvJ",
  "key29": "3gxioEXo5eh2ecYkcQxEGqTcKM42PArFtSaSkFysySBSknCRS8LgynSSkxUX2gbDnELTdZa7zjo3FNovPk3WpGD3"
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
