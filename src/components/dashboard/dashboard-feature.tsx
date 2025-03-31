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
    "2M7q9qjhUy6GL7ndVw2PyoeV6Uk8dPpmCGYTbcLiBWy89d55De9fvTHYDGmEUxN9eYGJ87pP5RvRgzTZhHGFmMzQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ByMmLbWgFnRgBYiSqxPK6KhqBXkfDyJTerF8XnrSAxV7iTvyqMeHfXzyEKjS1GfAY84o1TxwAD5U6QqzU9G66mt",
  "key1": "2UHfYWDG6SWkRWD25pg6cRMktzTPJRXq8tzyWwYPBEZENwGs2uqLVRxfzQMJK5uXMZkzx1NTHjnGJuV4JCr3zSU1",
  "key2": "1YSxTAX1VKiiQjT8VgZLY1akRXFLUG1re73fwZudyxSVsXAVZfaUeqGZDkoQztFgKGQw4JgD5NdANxWasJHa8UN",
  "key3": "4e1drrNCtPgAJxCpxky4TajGt5ikKk5ZcmKb73NBmH2uWUeB6anT5JUAz2fkKsgn1gnKPgLQfACK4xnTccaaYJbS",
  "key4": "2UbZrToy6DZ7E142TCvgLdEB6bAy38KUvNXJ8shWeEuEExJexYiZ7AkMfjUQ5gcEXo3JcW3W9jrounMacMn75bWh",
  "key5": "4e8q92jrXeXqdgfDeRrRFWspGNUArDonCEufarzMd7g3udEX4DaouRxfdMZubipohAhbctfuPN26p2NNkCh3fpSW",
  "key6": "5szDkbfo9hckXCjv1ETcdsRePgqZQAGQEhSXGpZ4usbYEzeEAWFSZeuCzyJW7kdfEvt27FjBZrMcXHmc51E9gj5j",
  "key7": "2X2kPBUrDfZwKZ95Tknj6bwCicf1A3X95qQnpaZcHDZWcmhYm7Ty9vg9DFyPkWPSBupC14u2fYcuG6sDdLEUkE8o",
  "key8": "5KmVwUWjGjymMUFPv2egjd7Cp4aHNHmU3Muij2YpdvesCqRNpqDk7yTTDqbUpoXosWv8rJJ9pyJQAL6cY8SmU4AV",
  "key9": "MsDyiNJrYScVHdsEiRZQ5nTtV8bzP7XUB3GJP3xGSBJtQT3UwWvn98a3z5MhFRnPuwq5akL8RUvbXP9yPZ7VgDz",
  "key10": "3CZ7vdaQrgkg23AiqtiVF9a1ckT7QLZ2gXPctassHVuBxLzKXEr2Cf3w2ZHJ3HWXmg6jzK4rtucFAFnJKG4G9DUb",
  "key11": "sNTGGB2m9eESQMWEf7ti92svxQdnLg5zisedjmepbPEnDJycDVYKCCddqKigNEiCN1S7RFv78LEU3TDvuLNce3f",
  "key12": "3a7oU14TKnMhmQCYjrjLPXLb2E3mFbeWCSNLv1MfVvbkGksnHtHyZBLiW74rapZ5MxEGXeJ3NhWJ2B4uMfSW2xGw",
  "key13": "3CWK9dUYewQDeYLEZGeesbrnvXn3AV6uW4vujSSuFJ1xznewanaoWyRTuMRbApV5rcHAVWsYwUmD98HwmZ6TyDQV",
  "key14": "5Lh1bdeVSPCb6akx31CPMpGSrybxTZj9CYMXvuHqGRLoZj49BAvjN3iQZuFseFz3LV4dZP1VP79ykKpdcDNgfDi2",
  "key15": "ofTYThxNz6QqNDPyJAS1qQHVEvLgzNgAeM2hgysVkmd44tokkWLN74JWhWCe5neBBw49hrtYLuHPciERMnUJkqU",
  "key16": "247GMYpsXDsLMGTasVec8tTeLD45SWwFpTUq7N83Um9b6hEJeuCwEZRkhVREB3hVyXLSgLfP9sKa4uGeGKyEJ7qB",
  "key17": "3JP3rWpWH7u3UkCZMgwzpYMknRNebmKWvwL6g6u7KGQ4u3ArB3NJhry3J3wKWAedxrC6wshxCD4uWxVq2xb8LeUu",
  "key18": "3Lk2bEXP1KPhoGkRVEGbFTh5eqFsLFDTancEsyarzbFEw1974nY2gbpU8MfrfRzKUnvFijZVULquFnoz6zQXeeB5",
  "key19": "P3bapGA5RMFX8zTvTqKxT6fwz74VuLhX5ZC3jf1rbG6YD9b7pq62MHxjZpcYDK95P1Gdhz7CPRw9csqNabsUjB2",
  "key20": "RgwbJKgexkFNLbnzeSwtrhmAAfesngY5pztsmtGEgX77fyzPnrkFAzJigNSntq83kjWrhiT6J4T7sChwSprigK6",
  "key21": "6vRvea53tEsvDMBMPnbnWxcGm3C9DreBBefzCx3dphZsiJF5oeQXpHa2b1o9JARjPGARHBfxYvitsp5MNS9oHfr",
  "key22": "2pCtRPYyqZZm6sWGNJcb7Ya8Pi8XFD8a95rTfUEzWy3xokkTkyUR9MrVYmjHbKTzTHHSCvtJvT72P3vncVHExexH",
  "key23": "4NypuRUb5WBSy3pQxGPL8GbHKApyG5eKdViqY5cHRLW71gVhbmWP419C2P7yvbFsGDbQFUFEBwhW1U3M13qQD3kR",
  "key24": "4uP9ApWvbHVMjNvsTD3RnygXsPhVd7iDYcF5eWyJgCNhQ9ukR2SkPmm9bUqJy9Mo1XHS4ZuSHs7TmPSFhPntKnDg",
  "key25": "57eNdbRwL6BDXG4MGDirNevfjN35mcEFfATDquseYAw3saq14z8tpg27zXixuiCjrgzAGsPxBErf7yrv7Ci9m6Hg",
  "key26": "6tHFn54cyE6K7n1gCMaKR6VeTbyfogUCbHDrtkqoRGWW8xfXruzXxJeBdLvL7esGQb9Da22Q3kbweTRmQ3kux1c",
  "key27": "3WaUnqquzC5UjnoRBXmeqZk3Gwtxaz7k7xej63n4bm6iMAiaEyLXQUhX94fd7G7NHhEoiBKGhKiLeoKGBwZxfLLQ",
  "key28": "3DMMYhpikTZoPtk1Hw6DDnkSJ4hShQycLLxbiXh8ZXGPMfG6dGmMzEcaW54vfauNHnuutUSRHmZYrjV2ZCMhuSVE",
  "key29": "5gqdg3MSjmubyReYnjhxV8gecRhjV7nL8VsGUNCcEPyLLos1bYZKFm9qFtaBybUTDALVe2GPQ255oyc2oCHH9BnH",
  "key30": "3tEZUuqT2VfayvV8Z3qNSexnQQnuyKuFyRQWSSz8iopqTB82VxzxQzY93hK1EM5eaQFRayTH1uGfPq2PtBi6vwNy",
  "key31": "5hJWZZwSjUYoafyCpDhCq2swp9uGY4jU9d8qmqoSLLU8ef2EmiJwYYghanxehTEbtRHPLRFcTAxBGjsTw5RVPsNp",
  "key32": "4uCteGVFkgobT98CUcEPiovKqdEYnR6pk5bdDtK8cvZ1HN1wCZ2eizusAPGAPzguMmrbpXj7qwdvEbHWYAVvWoF2",
  "key33": "384YDbzeDWsh6x963pKo2rqNJauDa7nkLvuzNTm3S463DmUKe4DYxW8AKDrgot9gE4T4W1bjVxydtjSyF8eKDPK6",
  "key34": "Krmrtg2zcBCHv9uFfghY5YhTQCJ5NPSHPp6mEHZJ8XrEwzcrR9xGP86fu9uBDB8T5rH2WD9Tn6yE8fPTY8pGWY9",
  "key35": "2zDJpopukpZFyvPF8Xg1jVHRbyMRxUD8Zf2o2Y5gKZPREodY2wqLLhSwdB8zxQhmsfbrz5FGBRsNksjLi16ZpD9M",
  "key36": "3z9GCQseZ9gqux9aYzaTAggHARjgkrTZVJcCEYfrvXnHHd3oddwNq4niGP2YqV3r87f68zQX319Riwoe8q8eLkNL",
  "key37": "2E4UFdfaqWX4UPVqnSrB55n3nsm3NuJwcnjHJNWbT5prie8jLZQaYM1UaigfubxsfRA47b1UYxp9yFdXptWX4jsx",
  "key38": "44es6C1qhqz1PusZF6WJws3V5qC1VDDvWA8vyyWBN2CoUBKjmzCRzLmznXhePYzxe9rKoYxcRoXnFDj3bfSSh8RS",
  "key39": "qVBeQ8sjZjVz4tmumrF5LsMv4XxbKbruFMeh73SQ3i2YZqGrjXQWMni7PHkkg8rc7QiD7e8psGVZ7JAWevoq7Uq",
  "key40": "4fxhnbCVxPPGfgLepgHWzqwppr1Wnp2dUuZERTjUR7Mx5yBwK1wHsxzoftebu77gJ3d75o2L7RHNwG6QjNKTWxYm",
  "key41": "2Nb3TPisfeEPBVujMGRuCWA5gijcJRKMWtH8CGEjxU2FzwBa2DZ8ci3Z1voucyUz7EDF23vpf3ajT3R4ooEdoHTs",
  "key42": "5A9tofSpngEEjvP3chd82U4PNHu8KhQyie9dpELZgaZxSfF8PB3gu5ChNWaBWgLFL1JZn14uyg5GsWfqgb8EJX6V",
  "key43": "4Gium5CrF59NjdVE7dWUei6Pr6BUYXiAQjtvFaSTHsgtKDkC6FaA6jVTM1AorJN4pahP1Fnm89UFyjpBU9Gw2xjk",
  "key44": "2CDVeGeMtK3SUKeaqNTRcADBzPMhLbscEX9f3hzre1Rvd2N7YfX6TfbYxGCiqZF3P9NhttgbSrC7ssGv6xds4CFz",
  "key45": "5oDChcL1fvj91MfACoZbabk2RCMYhWXp26QSYhh5QwMV7PuLvZcYLaSqjKgE4U3SySzCtBkDKsVEKRQGRdpjAbfB",
  "key46": "5eofRNfJePnKLa1PK5haKfesoYe6aRFrPzTqg6QxMuZ5r1WNhdGKVANUqcG6SHhmQmGeHG8wvukZPcS4iYibhAQC",
  "key47": "49VoTifXi3VXj6Vwi1VeQVUKzCtpXyDiqVsv3AUhciMjkZ4PRu8iqUpBzYKytV6ex3hFfFhThxPVih64ofBhUAvX",
  "key48": "4N9xYNk4iT5iSdKAUb2Hb1mSfqk8m4dEzH7CHx2w58Hpt9VVRVsgVqHjkm3AtfzjvHofYjit6vFjjajpsxK41mQj"
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
