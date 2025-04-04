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
    "Zoz7s5gSEmokaMP73WDkGrThcThk2rFZgp9RTyBZm4iKV28GpXHmutH4MKu8bZAN1ruKgqhUzcDcjXzz1j1s8kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uxqjW8qr8y2xaFwrsu2G8SP5ULCkpc4FDaJGJDHQczLk8YmVEzY9UXcX3wEPMdQFDgR1ffNCRBLcTB7PGaj1EUD",
  "key1": "4uokmPMqQGG9urCh96TVKut9XGjRppog6hyhhjbUrK3dpAAyBLtXgJR32NjMiq6ddPToPTyWU9qKscszBTM4r3YU",
  "key2": "ru7WkxYJ2uEVHRCguG9dzjntKpTCm3dKkpN8jY7F9ahBfajXp4kWD4HE1WLu3zYkGNvse6XgMpmbEzxNcgWwtVv",
  "key3": "YNHMpSW3EJGUwcEGTvTtDShPACbpa4A2mMrkXcWWv2BcbXXQEH1nVvs1ewgYpGXepCodGqwczBvVmxgfLfyYaKD",
  "key4": "4WyKQ27JX11sK81cCeGMvnjcW4unkgkZggekzWhJ4kPjG8LYw4jfzUd4WpUyk3ZZdKsQGntTfVyF6cspUhgfdkv",
  "key5": "5XWYyAniv9qXJLuY3jqZwcTnbdeupC84Eb9qe7ziwsZYLGrgGvWgG4zrC8U812dyKQE6H9nAwbe5yFi4v4xAXzsu",
  "key6": "4AiRa2Wff5JqDfgCejmnAiaBoZWDR4pXNWYv1DhRHJgGQcbEt3ZMZmg9ykug1eu6cG2uEmR2KbJHNNjysH7eY3eq",
  "key7": "KXMaoKKnSVNELeyFpnvwFXfvzch1Sg7BDEMGhxSzPjYUDEQagcFM38eaaFF2JvXFouQpxNcJj1B6ddd6X9pkHuT",
  "key8": "2SmFfvcoQeArQ1Y232jqE9ywsF2uqCxiapVwHQs8HyYrqka4DmsUS4EDz5kUDuUypFabpyyVyQpGDF5o3JAzwdEE",
  "key9": "4Bgz6Gi27ys4o4RyENT2buvV6YPjEoPgWvi8fz73grnso9Z78YAFSBThZabiFRLXksEt5fntjGw4GfnggTEgywec",
  "key10": "3YKcwV89KYWBSQUznYHvW5Ka18t76aeSLEJz1RnLNwuxQXur1Wjjg8CWQXj9aSwFUtxXjqvwJ64EE3f7jCtqVixV",
  "key11": "4akpocJs3sh2Mfx2sPCdw3qwXCdXwTET1euu6S2FBcaBsnZqxxqfEy2zjB5HQJm9SV1Ym4cztkdTZtPNj9vjBsuu",
  "key12": "2VAcxDgv1RxXpE1FgashhiGdQ6PUWggjtczAD6r2hu3bN9mCfSWRBjR364zWvVRDvavPWbRdZQHexpK5YR9w8qWS",
  "key13": "3ENiCuRkekWuvdTdBYjqqo6CQxTRNoPHj4Z6z4ZpbVGz2D8qu6Bod4WND4TqkEqpMiYo86C7z4nkTQPng4E2gkDt",
  "key14": "2bGFApzLqRowXjwq9XDdnZrUcrsfqFk9d2SvfF8szAw5cGEaspECRZxea4jfZXgbwikismtN3VpWWcEjLvP1jGYi",
  "key15": "5fCLBqDRjh5nCwtAA3gPczsrscmEstMTfx4AyWRwY2djsn8rZQTQC8tAoXouwhrQYRJRVuyKeGtFUVkrA6R8Wn7z",
  "key16": "5anoE5TJap4LVE4bMXMFAc5iYrsJd4x3AYBtGQRfY7opSxg1Fzu72N8aVdCus1ZNBt5YbS8D965TDTQkxBLm2Dv8",
  "key17": "2SWBtYHzVehFNAtvKstSr9zJVPu4fppTGmpy8tvNsLzYar5k6SGkrSB81wh3qzFbgp8p5iMxo6YXHstR1KjHd528",
  "key18": "5Su3eqJb72vsQKfHSYG3fFSYurHVBQ1EkSEHrrY7rL3r9ww1meLTwLcUaUkSp7wjWNPZpt7o3NU93sXRtq6PcNoZ",
  "key19": "3Af6sKntLFHyPbyEqvpHkWCQzLckFyJkeWqttmZDNfozxhK35Y5NG34fC5veAySfGt5Jg9EAkGTgFNsSX5KVE1ec",
  "key20": "27Ndmx9t3Gb6AfBxtEcw4LoKuyxLatuyMprFbCXzPcwHkjGzJ2CKtt9uavnPbMBbVczN9hTo3wDC1iXnBomx3rzp",
  "key21": "55fR9uR79jkjean32RPRAhBkqcj2ouvHa8SgG7szMBUP1WU4HkYb4zXc6LdVtp8TgMyGNy3EHuEnPahbrX1bs5GZ",
  "key22": "5Yn2YR8GXrL1BiuSJjaoyoqhZLw4ioBdymbyJ7t8bQ1fQgBZ1NwtxT1iUGu2XfSjL5QMAxxnEJSzrEnx8HLgRbCC",
  "key23": "2CGEMFCYqr6jKxasnLsPMXToWkEKHktEsjQdQuZCyA9DRR6jx7DHuCPGu5jiKYisKivxvJAyyGqELKGgzC4b8Sx3",
  "key24": "4xaHrTz3FWLWhFsaxq7UdvLXBaMX3H4Kt93C4f7yRfPeuzPVi6sQyC1M2aDM16aY9qLG1Bfz3FZ2xjcenumjBkTu",
  "key25": "p5GaA4grs5LW1sgrLM3G9XA23TiiPXZ7tQ3udcxh9aaDap82gmfk3FsuQwrzja8f96e4PEaUtEcBGzE7yTTqwpT",
  "key26": "46HNkyGk8BQ732WwnS7stDre2ME2n3ozARBByhtorawih9n3CByePPT7JojfpJUk67vAhPvyiac8D5aynEbcFrKK",
  "key27": "5LURxCRNXzJzLcCE2Xg6icKMjB81WeeH3jngxg1sLt45wkCt7mFzhDu3BdsRwy1q4egDVRff9PDL6J7h7k6AsEZG",
  "key28": "2Jj4epNm2PBtgjqh65bZAguXiQXDeSZykMiPW54qSKBbQWsgZuFkWa6WVSg6hBRpK633dcMKzFQZsRihjHUwKebv",
  "key29": "4rptnzmxn4SBFjvfUfv6Fhw6gE5asrwiknY7UBo6zr5u3TAx1a3T5bNfuKCDvAtBBGAPqMdbFBbRfbWJZFMoRAWu"
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
