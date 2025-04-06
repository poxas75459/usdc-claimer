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
    "2y5pVA4bruimsNxBBk3LVGYTK9Jbiu2HYTsbEK7Xy18JU2HraUTmNnTbjB26TSmwaXEDX3YLF1QtWSM8WWKDe25H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aZZHnMWdJqwCva6Xgd5GgnAz9SJS1D47BAdnZMykF4Sx8pdhkRU4voKMHNEpmSEghxYcPQ9jZVWj2FwmvGBTWYy",
  "key1": "4aZ1hX2pQdKHSBe4Bd5hecanT6rZNH4sgTrPVS6yN3VmXrLVZBc6rKLd631z4k29GGUMWKLNTneNhWNAD4jYiVxF",
  "key2": "2ZJUg5nLzmiREFwX6UnYVYUmiH9QPv8G3ZFJ6cEDJ2ptPmmd4oVGd3g6eftVkfhGQcwghWumQ52ppnHUtAbws2xm",
  "key3": "5WutdKX3Lw97eJZKjKY3vYnN6DKQtnPHbvf8GDyEyn4xwM8m58jmc83UjK4cBbtRRGf58gnJ3PAPZ7ijhsTXrQ4G",
  "key4": "98cjW9EqNXMQ1bhQPDHvkzguFiumMALKJzp33WP5xd7WcfWMM7QM9hRHoh22qqpQb9DdgWjuNWNjusCXVJQixaC",
  "key5": "5Hg6R55fTm9VqowDL4fcwam3CdA5tPkdA7aSxZAjMeVU1FtBH9CrYZ42XaxMDHxPNXSN7PqJrVA1UrCYgahNe1ZX",
  "key6": "5RFB7tkPiFJy8XTUpJ4TQbgFMVFMxwD6UFY2SNx3UxzdaTiMJ3F5SkpyoFckjzUAF2VoxgA3FJPqzg3N5apCGq1H",
  "key7": "2V1zjU7Vfmhz6P9NZTi5GARuqocShMp4UH1HZUxeRwditZr5Z87PtJwpbqxea2RZV2CawsAL9D1kzYByVjbd47bR",
  "key8": "3GuyB4UoVux4tScQ86N7MGUZmznWf9GziRBRKQCKaJF9aNjZqFD6XmyCpMcgucBPVxcgRCjwWPRzrz3ZUfTBzERT",
  "key9": "3stV29kwRrcjE1gLnQF2KrZSFFszmz1czubQjZM495hyPsaGCgWuRT1CsHowUJWWcHYFugGNZDyMp2YgmSHXGvXA",
  "key10": "4qaUqeioNqL9e91L1qubXUoieviCU8FX176VQxeh3UnKtGfiJGepy4mJX7h5wKe29cgbzD3641ndxJdVGGEUEYRd",
  "key11": "U6uaikJ1Wm9xBzWdtXRjLUUuJcAzDaq9pQorUBY642nuwgrsK62izCi4ULkru2SV99W5gFFkdTeAcfobhUsWqnC",
  "key12": "4bdJfzdwR7AwFURLHVUczJyoMf8i1XcNuW3fQsRhYsL9UgiwbXCLHAtcgYKyT1zgkAx8U4pcPoB6UqjdxSmCyy6T",
  "key13": "5dVAtkc2bok5KfRPzAY7y16B7WzXM23CdotUUCsAqAjr6HV9jx9wF5kgMDraZBMBJsP32i9tceCxJfvjafh15JX6",
  "key14": "oR4CHmJQ2SjJRGuxZscuSSGYwTPPGUZchNsbJ76UCejeJYyqnargUXntYwNVtysYCmBk4RGA5duDJWxWboDJeFS",
  "key15": "3QibXv1trzj8586zDkkWhWU7Q3bduTc5oKXHHSvgWwcr1hUHXJW87MaXEDBhfMA14gMAiRMiN6KoRw4yVgCywF42",
  "key16": "3oTbMZ9mUj4Vh5AjWHpVfW9n1xwmpP1nTqQ3VtPa2Zw6myW2Dxo27AcRoydrfb3Nyni6jsu2HvZCcam8qNkpBe9H",
  "key17": "55odYR3sF8VbYNryzfonazDPfiXce9PL8pYsJoidHkBngaBXy8Eb1N9xuwCNTgx8QVYNwHsiVVAYebCV2PDv8K2M",
  "key18": "2oK2Wxjq5UB4Hmzjn47EcZ3cD2ZyRsKWiEf71ZyPYREzcydJG49nMJEqJvbQjuYRPndWj9xX12U9Q9j7UwVFDNid",
  "key19": "488P48XWZmFX7yT3ZxWoJCwMrTJHUtYnhfG4e19dWaTaQgSceGbacdjrd8d11LqvfK5KWWXiyb6XHTpmPaPYJpRM",
  "key20": "aSXdYv8xXmAokPLHPGgRt7pxBz35GkSAJV6pPRnwUs6qtaKnPvuit4iiGdmfCCstwQbnPBgtm5sK8PbswQWXMja",
  "key21": "38B2wKiAdHjXNgQFTtvqF5PK5hxapb2WX1PPvcXU7TRDpHkQLFyMX3LWK7F1sT88BLXAyqAWofi96eB1eN4DM4LZ",
  "key22": "2YPA1cGwRCQy6C15yKHZknU2j9qagWfFYL9tMqyyuMNngCyoDoswcAgAVD7aY3MP3f2bncdRaoquQCVhduZ1sPrv",
  "key23": "4hCDxHiuM8dfyYCzg5yRYGL12oxu4pgwz41L5Cj3671mWkhm83xRGqB5mGNT6VeunbD9njWg6dNPUMi8zey8NEQF",
  "key24": "5Q5Sy3KvmkFEuRN2xPSmB8Mdp7gofcTk654JKBoBMPGeBVQod4GSHcPyWX9ukyApB3CANjPn9NNYFEBkwWNkqqCb",
  "key25": "2QkRkqmMtzxiuL5SpCtVL1cKSoDh3yFmb1U1wiXABjiF44oaLamntUJckbjAJnQWb3EPYs9H3ACnTexyJC9VTndu",
  "key26": "5ndyYhmeYXQwGU9AxDG83xS2HZ9JZ7rGsFiTPsixgEB9Y88TXVSmF1mC4hWXrvHjjTiTG9Fq64PLmR6Q71hnAfTP",
  "key27": "5oAquwdzTCGRJDFggD8EerQZ1R4ybt4wcqRvjh8UYEXLXu24Db9gAi4M1Rfzyqh77aiyk4EHtmqGCM7xeELdze5d",
  "key28": "33TMGpVXLY5CNWqSn9hjJ53CsMcKznPZunxi8xnsKWM7iGcL434CjA5F3NsuXyLsHAH8Fj9NGzt98dx4483mbqP1",
  "key29": "5PKtdTrwM6P2uw49GHMX3FtyAE6Rwox3bt124atUEbqCZR7qVauREorei6eXSvpL7CctE5BaktXmvpSQkZEYyYUG",
  "key30": "z1Q6W5KBVWnZ5oi8Zi5vJphQ6c4RsHyu8cU854pLqHFjLeGTALTQG96CPoztkhs3VcLk5Bw1NJ6DAEMWmLiHyGU"
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
