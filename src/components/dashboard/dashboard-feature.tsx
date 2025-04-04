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
    "Jh5XVbboqnyZWTpMzBWFG4z8rGJUteuiV8Au1kFDbfsLxVBmx7fnJK8zfinkN8AoPHNBoTdYKwSaB9ybVyDmPrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QS2sojXkuoCPYuj5w1L6zmiQgPGZgtb7oihWNefxu7wFiQ44KB3sSXRf9Ecyuza2SfDw4Y9Neq7fZ8wNB9AnD1u",
  "key1": "5NmNbGFqnb3aYAvype7jZF9Tpn3FGRQ2GwvCGReceRsid4Hv7iCAeCzHyrfHTxY6wBRSgDxkroWar8t9R2u5XNKC",
  "key2": "5LM6ZgZ1zYjK3XCuYhxmBbuECkPCfitJpPor3L4TSmWRdHRJY72bYvWmwdZ4PAXkWmNb6zJLWwZPmJSdg3ESoT75",
  "key3": "4CL5i6JmNn45sA8rp1f9MGTgsyKALyXNnu91uvrxANN8XYMMPrM519JRskQr6AZyrRE1JSGP7mFPsrb1bhBt1kVM",
  "key4": "44jJw3UXqkzJHJtF3bxbv4MWopbxFirkZoy9aevnZG4MFJHBhofUrT8aPVgA6cwf1tXgx3rUGcN5Zuu2y77My5zX",
  "key5": "2FS67rkEsEjbBQz6WweyEV71aruh9bXYJDFuiVEXhVmSqLG9z64nBFi3H6UnWPAqaPF1psj3EEMzB25LaeEub4jz",
  "key6": "b9oHnz6dgUQ8sHuVCBzzkxd6BWpE5FthuJZiwFZQWmFTZnrEBt2EEdBc8qz5TfvuzB2faTBFPygHXMFzCTVxh9o",
  "key7": "5opYDiQSKA6Xu6cNn2CwZPfRcpffcZuCuz1PxiJz8DLzSGRC5aYDd1Eqky3kLnPALsLYKNAWahST2tQ1Be4ahT1c",
  "key8": "41vHGXyjjp4jBT5rX9n5Ds1TnA6YFcJJgRCmQo7dyveTn3Ss7944wruj6n8MgZ48W5otPeRNivNSKW1368HLRMHM",
  "key9": "3AxTNPM3D1AgJpr4NA9EdA9HHH7PZhJEgk5VcBwxUAhc4zE9LCPyjLkbS9Z3sKsrN2Jhzew2AfPj3tFBp73AsaZo",
  "key10": "3Khjf7t8ZNhCNPfoq3m5qrYK5DKj1v8FNw1KiZMVyY79rxjiB6whp6p6p4cbxiXGUWqViNNn4mCYQJEAwSoCevpR",
  "key11": "2DsEUkW6uthEfhTNT39o9cR8ua7WV7ibYb7LJfEnVmtSDAkKt6S6XZiAB1AUUULcfnzeuniejwoeQb7qkSU5Vr3L",
  "key12": "3soeaoyfipPvGAqywTSt1sPayQh2Zg2baTHYrFu6kzwYsBQ2C6CxcDrzzLBFpVJzJ3PTb4X7DtdSkQDEGgZWbg3B",
  "key13": "5Y5y6GWFyshjBq7U3o3CJFb17RTBXH89sqarW1GFmzeskU9WpnGutm8ooVCTs2ritWD4e4NbPzpFXtirM6n6Eofw",
  "key14": "TS7HQGrmNfmPD2E4oB7u2jBstgA99oWCx2Hojns1kzPoiZ4pzw5n9TuorXcVW3wZX3haiMuRh1qkSqrnifbm9Jr",
  "key15": "5oHBLuPmGa9MFNmB4PNpd5yr1rbGoPRFWRybXUmrNhYVy8QzTAh4VuZWpsu4DNteeKVSZ9ZD8Rvu4ZZG4eofxNK4",
  "key16": "iaQ45uDDQ5kqVJvH6mYkEW69d5pZZesnhsCVbx6MtZu8GyQjkUyNstcygK2PFNmntqRjcmmBsgUZM8CZpvp5UNb",
  "key17": "34wk6mGh7xPtRigv3UwVw7c6zzC7wokJTthM26Azk2BeKgRBSas3cd63ZYF77KNa1MzwHaZ2uUTYHo5WL2XDLHL4",
  "key18": "5ihqVsvk3S2q67M1rogsAYnzij4iQeFivVeF9FL9HSEk1Ux9fVK5AoEPgyH6rNknnFheMp1G5Sv4i5UbWEFmN7tc",
  "key19": "2b3ejxYWsLL99JhfHHPWxNCAarFDHh5jh7N2YFNEmK45zzP2GFWenhERskMi45mfZbe8P1FrNtijyLRRAGLy43gb",
  "key20": "5C88DcQEKmqMJh1FLMWBpjDqmetevnrwyB9QCsNmuAk6Rg9NzuixhyWpnhS4VriJEJjH5dTZv1pgtsXN9iMsxEUh",
  "key21": "39zkNTi4YYDcs8e2G492LnZmRcckBv2c6cYFgBaLPbGnpE9Yffrsx1A1oA8qoMms64ySaRrrhRBjq2nMjYkMD5nw",
  "key22": "2Hi3KDG7GFqXSmxUCSMVkT1a22SaLRcRjMcEn82eEntRg7TcKYghUayeVAFp8KzvLndQM6xes2FUF1P638zmJnRP",
  "key23": "3V1cm5KzVFsJSAAKyexY1KmvtvWfVS2DYvtAHefRh5CLnu5jLbZxKvEWNYUFCpoMWg1tMrTxSPE8Tv211L5UrDxt",
  "key24": "2Z2efE2axvWKX694m4bgthMndgWjk5mZhHh43bpHDJ94WVxdsbqKhpVhUYS1T3FNpJo7ewDJJA3QV3wqaEwEnjAV",
  "key25": "3PHhkged4bXbAW3jE9GzPLfpBFhj8WtHj4F3ZTMvqK4KMndkA6UhLBqq77kqs8HUmdyJz22LH1Wy7fD7Qsi1LH2A",
  "key26": "3vFajVsnFTSsRvtCm1yU2iQVoK4FQj7v3x1h5fTWwqfiitNqdgP7MRuT3K647FtiN5TMFfiPKSThsoxb5K4SDwQB",
  "key27": "ydDUN7DciwwTEpzi1zQPEU6Am8TSbxCBn88TcUGF9Tw8ptQZw7HowyDjxPopA6PUWgb7vcHpQ3q1XsUZcSB1Drg",
  "key28": "51DWENgbEPndSTDbc19F88w9cCpC6SFC1wcTunRd18aGheptUoWarpRh24FTjvpM6hUvYTiHSGSnDJaVj9YDLUn5",
  "key29": "3eZGirkKwwyez4p657JRn3EwuC8psmx2mzAivmo4G1v2s3gHmdu3MvbqTydd6dgosPRSgcdXEWgHGLbGW3iPt9hZ",
  "key30": "5qkib7mLrpEQXJWHHVdmopnpfVVLLsxymEpZPSdKX63xw9eoEdYzt3KR5MUXUsF6AAaJSmywnwt8ozG64uf9AyEB",
  "key31": "2QLpYEeXisBvADpr2UmPcT7fxe4tenYeZMXzR8u7fLo8Wzxm7MAcvQXU9VsTmkBSjAPsQtvo9aty9zk6n82gh6C",
  "key32": "9VmSp5xjFL3PA19N5HW9Pd2xE7XxtH5RyVxcMiqyrZmjz9QGc1rEYWw9E9nGwgvojAeKApxH1RUXnDZKLxbPKp7",
  "key33": "5qWVVEKpdx7KwT2ZBQJoFnHm4PMRmrMetQELK1triWPGqYNJD6MqhpEiPGTeZjXtryWX2aU8Zjt7YaQuLddjHa45",
  "key34": "5hJSGJGKKeQeHEUjmLu7CZ6PyBdcb7k46muDTWhrUUNXbea6jS4TMWgyDhQoLUP2toe4CmStp8gfR6G2bzDJ2MSF",
  "key35": "jbTAE6ev8zU9r1A9TaLE1Nat5iC8L3mbE2Boj9RWDNXdmDtMixKoiZqkLQnqittJCVsRdAKbp5a1wMfn6nS1bQN",
  "key36": "xqLJQEtGNmYcsagaCUGBEo6mgh6UjJsgYxiMsEm3praYr9G5oWQKzHzC2rtXqY8nuBaX3RUQ8VNXm8jNk9D4ZoV",
  "key37": "2ukeB8KZAP6QdAq3rg3CGJmjTmKacKqUB5rYJfUpscpajUSXHRrwnbXgGWgjLPMPyx1hfSgz2WhqCoAYGfLCrDsA",
  "key38": "3GgwJoP7NUATfdo1iEQJGeN61FkTw9q152Yw3Lou7i72hi3Zip7qVNnVBRj3Q4qtHgR6MVMFCTSuafRNAzfziETL",
  "key39": "3xqbqro82L7Wi72yBnnPfA8Dsf6hNZyqTymgwgiTkdZ3gzc7xEUDdPpS9EoWMPYuCu5oNg5qwWsM9hhCf9HHJP4w",
  "key40": "3J7ByLvaJmZPzYN4T1teWEionjyHUmZhvM6uW327RHPhkwr5rKK6f9Y9kRKyxpCbLXni7rnsuQNGwCYF3SeHvjhr",
  "key41": "yB73W6xMXkS1gZd3N6L4my7YLjg7u5P732tGdMT9ncquk2ffLuK11PcSbfpF8KtNPMvqt7aFtXCN6FqHu2iWUFB"
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
