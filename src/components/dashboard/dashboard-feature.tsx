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
    "3eMBfezf9oXG4d3fLH5jNPSTCMrnwYX34ooMML8ofUjtyxNFZLEgkNCDzUSDuCqPbBskP1APFNTbNGrEupnAJsH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48NheMVub4WLpNbZSYn9rPF9PpsW13bwXBgos76e3DpVHi1L9qo29wf2dLu6Q4oWXUHuboy6gt5GXX4PZwq2a7wm",
  "key1": "5C1LNsYpyPitkuqHsZi2eV8dspX9KCgkDEhLFqawiv3RKtW86Ch9PFpWXRFJPjquBThYJjriddYvt9xAL8j5CbRx",
  "key2": "3BAnniYWwu9P6ptqBbzw5PUoS8AGyBsKHfwYqh5f6JwV3hajQMAC5kSYYoT6L6A1aAEt5j2znzB63hkJdN5kYRM5",
  "key3": "9fyLgXeq6HHLgVGdtv6sRYR9SD2jaAqE67Rq78mK4gxqTrF3mx5wspzBqikLwij74ceygZKavz68eNF1y7rvcuz",
  "key4": "ecXgVz6P1CJ9B9BhJB64ufzSMzgbcJBK6HfEh8oXj3HBSH83UZBbyjhVLrHHWarEWu4tCnJPgcF8hp43HNvLVjw",
  "key5": "39EMh8NTYDakZf9V5LkUN1Dd7XVRtxQUTfrd93YhLgbaV42kjnjgTXQ364HNBrr4mXJwrRrXVhZnaf9268oVjeUU",
  "key6": "5rL6qoNU1jwaNqnV1DNetyFdcTjtDoUUGUbP8bTt4ERWuAyFNYAcbrQ8NsLBvTYwy8hzN3iWFnrEoMRG1eYAKhL4",
  "key7": "5xw9wY33uMGk8ZrCj2cFebyifvAvvT82UTqBMG77nZJfi1h6a4Aqy6PTcSoobAnUeQXdYV278WtCqDmedERWjc6J",
  "key8": "3giV7UAPy91k8b7fALhH4jatPBo2SgAVv17DEwLwmiV4cKTtA6TixdW8wLXNtN8tW4cE1dTcgM7hhcxuSMmRU9E1",
  "key9": "3AAADQk5keYmLyNA1AUSWsAVW1gWGvfPQpiKBCUZsHib9rd8Hx5EDVaayve9wb9nDz6mFDR6Ddm2NU3VZDgwQUcz",
  "key10": "3soP3E6i6NwstAES3oZtdgmbmxjK8LiyWkqEdkCuBzQfeW4CR6eGacxi8wwMYeNT9qz8DNXH98f4Ar1qVTZvKroE",
  "key11": "iHM4SCtesfxdxqyVcEfy5rjyqmwGURCJPCiuSwm3YB2xXYKaDyZ4U1BsEJMV8kFho219yvNsK9h1A4em4Q3awi7",
  "key12": "3g533sQAkQtycUpAqmW2MjLwJyBarUNmKqqRSXYcBZcwgN5A7CAkg92gzDGkG4GMNmCHjGWj8sKaMugHGgWZQGmV",
  "key13": "5u7zu6MXCtZyXQLUG6wgiTujZStEV7pw6p3wYCtKb7E2KeSLUpGiZiq8KwjdQbKkoMq17zsspnhnh4WHd3JtyYe2",
  "key14": "2y6jXmGKsFDjFN8B4dChW7bEVhsCZw7EaWyuiW9qMvpRkaoqXYES5TV1bLKoUmcABPP3JsGZgCUxXX8ecbB9vDZf",
  "key15": "4e9kjCfhAtfoa5UDbCmB5LFGdyC5pGCyuWAAktWbBeQ7LpnFjCs8qmgno6MubU5PMkcsHzDmQKnVZyHhcXTRJ99J",
  "key16": "3DjvX7oKSv95GNpEhNKQFZTq8Ppuv3wTifjUfQ81XnZyWCBVoXSCZbKL7u2J8jgdjCQVsYQoysfPYVFCdmmJQn5b",
  "key17": "44Rq1MSGcCsohtGXa9GDnt9jyfYFrKxaFi1WTzBQdtvAbZNwBnuZ3cRtKEdFnfGKM6GmU8GaNSDEt8FLGdQCmyBW",
  "key18": "3ak8YhcDLA6HZRMZyC3P5t16CD2DtQrW5yUsXez4BsT5wK72r2cbxbFmksteCTiLNcgLjaQ43WaQ11wfvUUjPMK4",
  "key19": "Uh2mfWz6e8femCMqhj2LPM8jAFrR2AyFxMQJbXcx1P8UdCmEtNSCP3HSjfvNjG1zX4159XFKp4Mr2U2sswwd3Aw",
  "key20": "q6em9ULcWTUx4v4c2sudgaqWbXsUD2m5yVzJrWApWEEZNduVuUhh5wNSfDrXLD4Pqeqmktg4VPr6SGxwd5w8tys",
  "key21": "2DuYNUbx5PJrtVzisiSoZmzRKSZCELGFPo1fcQduARaq6wuuek7aFzeYZKY1sZZ32oaRBQ6NueyjyXGyFUJ1T8ZP",
  "key22": "2NYtsGJoU8YghUX37tJD4LE7NJMqGZXu7ZzH1rwMinH7RnQN7heyfNJzh5AYKaXv46kzPwaJUuocjiWsDgziWNQL",
  "key23": "4wFaadsPZ1VqdttKUNv9L4B6ZQQrYidXgZs1GvkZhjs2f9Hfh3xJAYoKNWncncJKQkmgkP1yDceAf8pKyBkqHoGc",
  "key24": "4wAMojGZ6SsMvhNzTMywJFugWQNTeaC9UMFnHW6wemWtzT21NtQr16jGfSHRDgqDixEkozfshJu13ptywedqnXmn",
  "key25": "2pGbVg4hR6GUnwA3WcmY1WjzCWZXNpfNMjkuu8scdzbeGJEm2J3FeKPEvo8t2dGTk4QGeRE5mWfH91CF8CjBYD1m",
  "key26": "zfsfiL2Dzi3jF269pXwfoTLHhdSfpQuiox3tCEnBQ46Z2DGD4gqa9cuV2oR5wXpYAC1QUVPCNq4LD2sjBaN888o",
  "key27": "3nF3YeUiaQ7mTCJ5kKP1REwQ4TDcGdRk4fSrNfy38A2x7rNZbwWVVVopyGD3ZEPGGKoaALU1EmYsjKsamyKegz62",
  "key28": "5WJWasCE74o7D6ZXzBGqYP6RLzF7EkrnYnnRGqo7xBFn7CpZbz6mNeocRNXZtpKPtdBouUjbVStu3h4LZZp62LTX",
  "key29": "3bsArPkE5Dg8MaNQR7brHy31Pddvn1ziA48GH3e9xX4RM82detyjp33qLAYvNfsuseJuWJJM7FsVKw7yv2sBYcS1",
  "key30": "bhXreA9g41bPTLX5HqdCfksLWiSyr35thPwaRqNwB15PRwpsM5mAAjLkaFt2k5YySkN48yS8dSxns591vaujSZX",
  "key31": "F6EgiQDcfHaEHDrwHyNRZg883EsyDEPBuXqgDFSpvVtFKAp4PwiCXixiTosU5VmDxogN7dj2qCtxd8j22oo7Dfv"
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
