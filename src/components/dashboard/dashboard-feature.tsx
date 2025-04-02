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
    "2Sm45S7Hu7iiLddgkc9aG9HKnyB3T2xwALyu3Pn9VA1uj4ghpQX9NpCyCGNkW22y5X7R3WT7sEaykMqjSmGQeTRT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X2Q6hWUvXHhCNf7KrMM2crzopxaR9vFi98Jk9RqnoTTYjzd9AJ6sXdf8Zpa6N4YGb1EL8SuPnp9cuiCfzwTQX6q",
  "key1": "5ZRXkHgoUU2nREfadUV3R2NGDjYNb2G8i1sSffR2kTNxsGAmpukgVF2VAVf9xAyupQB2TDFJ13ZYJRmUNkX7xH5z",
  "key2": "3LxRn8K7DGkJ13LAhErYrNdG151p8RQSTmfzTbcDf94rGvJi6e2wc38dkVtjoFAt6ZL9JXRjpEbMYLYMEDwyncNv",
  "key3": "2WL8mArdaAfgRHrUvGLjArjkP9utqJaotBJN8BmEszb4gXct8znQSWbDzvVjcjkNZDxsEoAWznCC6LZTvGZzjsPu",
  "key4": "2uhTYz6ZucK2QKs54dNtrZFfhmVwivR4V5w7H9rCAf6F6N43tEY8TbSsLMJXppxBDRkXnurUXPRbLmTAYRzczpew",
  "key5": "3p3ogoyr5g4ZiqHpRfV7otMGuEqRx3NRaxT4ioiab9S3zJMyDnEs3QQAW3onRkKdnbMFmfvhqnU1uQL33xdkvnsK",
  "key6": "2KLUfPY2GFXyVxGef4yTpUmDzs3AdkZ7ArxRTgs7bsW2bitg5KPhxRxjEtLYhpzJ4vjdQsYpLWQe6882TD8ctKJr",
  "key7": "qhFPBpXawTUjYbuTHfDZJNaqy9TgsHmhatm29HYYqwgep2NnMdwFeGfrx3nrfAmQ8GoZR3ujRsraBYHnG2fRjMF",
  "key8": "NztPUT8d1gyvpDstzYqdCicN7nzKhTzhdQtp9wv7RNmDKYJyjDWU6UwXUkMnyXs6BvioqB8ckUo4DxntwZgWv81",
  "key9": "CepbmKxwkHz7TC8NNHUGn34qEDDGJ1YSjQdg93WXdYUFLFCgi4xY687MABzsv6L8fW7EuzSigJaMsmV7nQqUgjh",
  "key10": "9PnB7ouFrBWzSPw4CngLdJXgNFf7rDFx2dszZroabKTJZfk6BR2jwg2rye6bcRYbTHG38PGAgLoucmGziumFc58",
  "key11": "4ovd9dWK2s6SzWMoG7RPhwyKMXmzdfCgkYw3Uho2Bv7PWqaDPRZv3XsjgZNQdaCixaQo9wsPBVgBuEmnQvvWWfMr",
  "key12": "2wqrdM4eTQPPjBZDtsAHqT7eVZvwEZTmg5DBXTTL8t3P1mgiXZrjanPVCpLhA66XP8cHmQBQxzNoLLa8ae1KJda6",
  "key13": "4oWMyXgrV2tA4PQwZ5EULY5mfXn3HDoe2MmXLL5uuotkbWhrFGsZzZ1cVNuMMWgkK51NQ3smkW9D1gqeU6NExbfj",
  "key14": "3y7oLqPa2gTydp1ove2evRtHZiWRH7j5WHJXmPrKU6VtEJHhQosGbT9cCzb8PkxPDvxhFXaPnqR8LSQJdSivR9Vg",
  "key15": "dnEcACRSRxqVXiotxPvc2q8wC2pMMryy4CC1xYv1zLSmaJHDmM7Ac2GqiTGs87SeDHAMZyL6sMDra1EFpqcxwNU",
  "key16": "2EBhtVT6JtW2AHJVG3jF1ZLtAvEXKkk5u2fjDoGoWP7bUSoNrYGC9Ri81iZRdcU9r2EpXHk4P8odyUCaGp3A1jmC",
  "key17": "28bgahFVaQAvaBLBZXSPbh24FsgtP1ctwW3XjxpD4MriXe2ewS5aSTaYbDxNaqMLSWSQPxtxYSdUJfASEWwATT6X",
  "key18": "LdgtNP4gLh8st8dkGdwSzMwvxRd55jSwKGYpu6ta39AR48Qci29SgQPxbnW6FgFSWbwBsfb7FE17pNMh9zPvDcQ",
  "key19": "CKbRwaWBPQWBNUzVvfuE6wDQg1F97GJ1YLsrfWuLyZeVkBf5MfxcQ3nS1iAaW48hafKDEJs8DEKqB4wxwHyD4u5",
  "key20": "4ooDfCWB16gyx6MVpyVXRnBBEvfJzuw3ffiHYazdJ1GQCDauX8crG5fKTSKPoo1P6rkzUafoj5119849fwcMaFTv",
  "key21": "amY9HDtKguyi2N67J5NmrkmofMhEYWGKV8qbvMmnPyD7sdLpzLfTRMxTGWCz8jLGqRXmG5secSy1W91FcHG2JDb",
  "key22": "MhjQetJwxTQbxJgN8ADDtTA45CtcZq5UcwFgoHyxVKKRXLc5S7gx7NVd2fZNA5gWkC9nt5JrvtBQQsgbFjq97sR",
  "key23": "5vHVjSd3uhKr1CmykS95wk2c1XRpfKkarcxK7YH6WRuD3ge4ypTpWRb5XaeFQqJdcvzSmDhirow9i1SbZnx74eAu",
  "key24": "348kqqRJiJ4tRFW4NcuEYimWpSUM6kjH2D21aJTbY3VEPqDocSgG4UbPj8yjMJanXbdvASodVWvZZ1LwXhAai9Xu",
  "key25": "4rTkP8bkN3DmGskKVLG9ZZM7UmNaMQvaszwiMtGazi1U685w77WLQ41UGQgg29Mt84BrhqxR5Tt9D9xB2MmCaCDA",
  "key26": "61DGkTVzoMzUP9jQLnuhi7Lzsrte7GQDeBbYbvj6G63TWqgqjmvzsX3KSn5QLeQg4ZVsCwM5XoY71UGfGhKBVnBx",
  "key27": "2aqmSLwepaVvSXPEDRMTfjhcrXtcMJTV5rF82KsWUJkiCgcaKSUGoJuxVYDhWZSUmxLDtVW22jW4QgBbXt4rP59v",
  "key28": "5vihHkHRCvnzeTqqT949Ww213x8Q7rywnpik5rJcL4G4gGk2jrFfGtoFiguXA8oFjjg6WULiq9MmAAFUwNdQUzrY",
  "key29": "2tUEHrP8F1Fdwh4tB5WngW956NqPwERq5BrRe5cdFJ9xwYZ6kgV17Xcc2MNqHn9DRybqMkEiMJHLseUct9nkki1X",
  "key30": "2XVhQA8eAqnZzSr3KsseebZ1s6EBNqnpWV8xrfGCBsS1GLyurx8wbJpFweq5B63CmM6K8yt4KDk3MmGfJP6DpL2i",
  "key31": "312yP4zmhVN3nVnATyVAxoGb59MjvN73eXpXU8wRhEi6etVV5NtLdZ7PFuL3ovuHMjzu5xZ2L2ZBPGgPLpMFoXEP",
  "key32": "5vz7dG77c5MCsHZmnrj9B7gBAxbmi5tPT19GMYr9d8ZWs1SpWnXoBNyhRQ5DXjasPCPyFM7GEDiepc4zuMZPb2nr",
  "key33": "2cstcir6HDHaUiX9mz48nvoEBM7p761mW2RfkUDFWJ8StHWhuCjVc7ESyEvxZvzZjmd4LgVhBjuGPTiY5zRSsmBJ"
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
