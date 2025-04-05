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
    "uLedVC8rA1kMDXrvK96zxxskFPR5toanBHaNHSL2rUajpUNs8Jf1viY1KbgPVoE8YqAcA9JqzjtJ9MUHtmhrrGP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5u2UYsy7DbXmQ1xNtYteFBFcGAktz9FoBVkoxHzaevuMYWVACthWiTLDm62mMsvpsbBLbqJ8D7boTgmurexBZjBT",
  "key1": "5R9byWvb1gGqk73GTSSzNx4j8C1WQm9vEbJ15zFEEV5863mjNVVPZF4Ce32Mf6ufkfFqTRvMm3qA1svdFAzaERbd",
  "key2": "2mS8LV2yoSorUcaVpjBjnL3sZ3MnrCuKZHJbuTvnjbRPcjRy1MrXNYbVJL7RYUfXw2nsox1h3yxwH6ede7Tsz3Sa",
  "key3": "dg1FdoN2BL1B1pFPHQcmsKea9bDXyTvBRGEBKvBxALeDah4b77Gbs8cCMWe7GcHQbmuHD3JP6jXw6DBpX6Qp1cU",
  "key4": "2HqsPBuZrfj6oMgmzQSyvuhaFasdvBVK4YXT5RQUsDzzAAyERsDQmTDBoVsMC14rQpf6tycgSGH1UCp4H2yjQj1b",
  "key5": "5V2t27sxA2ita9LXmpe7LAotQGByNErov5yVDEpYAe2mSG1Fayut5e2qdqo4TZmZafTDBujJMmvrF112GzkQMb2X",
  "key6": "Zc26Lm67iA2r9fjc9Z5Xv9tEwnEaZfn97Fza7ArhZN17B2kb7WrVhdoifgCsmFk8aqdm3Lub6YdyKB9r91rp3eu",
  "key7": "3f5YBQUg6m8ZMEXeoqSw5tcwUsQLAvYcCZQqRhEhFDHMLvvsqETGF38ddNoUJgwJPsQqGyUGAentAzRTFycJR1Bo",
  "key8": "LVuphaMoNxYm1AgJwEDxBUGy2oWe6fK2EE6h2uUXnMCTCm2fkNiadbkFS3U87uedg82KgvpeLKodbCYyxSMkpeR",
  "key9": "5vPqZ9mRJvtYon7j6GTzAt1PqsNwDvxJLpe3CJi6MU4uRuuLDnsqer9oQrVz155MSEheG6jouFLzizsU74WdVsbt",
  "key10": "6XuVXRgMXBRYzWdSuqJxy3pPasbc3TDCAH3qAybpuki7oq8vcexf8tuJFdzMAEb44camJBHM4EcwvWThzMZjxQw",
  "key11": "5bVJU2g9nAcHRQ91QeQxevPot1f1u9PPT8GEvugktg4KgoUBS85KoTMe71wWP3CKRbYXW4FUYLBzEczgDLBmdyqL",
  "key12": "62AaFjWckSnAMr8nJQW1BrVHztW6uswQeK4CaXp6uDpdV3uBq65GrdkRczuzsgYKUbywSok7B4YhCNGwhYo4hnrN",
  "key13": "FKs2uuPGn5wYAUho3YFyH5k8CchYf5DWYyshLd69csoTgi6NMkZ9EUriXk7dqhD65EqPz624mTmtciGeaivXNXb",
  "key14": "5jRVseTnRA9ipTHg6Xmsm8EoBSkxXNnoYbk2jUQzBZo1P4e4geFPdYCbno4YgmqMZLcN9McKSBjT7L8MpQW61Hfw",
  "key15": "2Gm882dNreppK4tsqiowp7y2x5Vv7yrgSk5xzHBMa5pZ7cFrJTsj3yEnVNKCKqrRPVeYWXikxjn35i1ANQv3xkgg",
  "key16": "RtrF22bXgBGMPt7Sf6koSw2R83Aeoggz8fLQrkQPajG943NEt6gpnQ666rJPY6m8K1bW4m5zpeQ5WSNmHcbjmyC",
  "key17": "3nuTXuAsw2ohmYjBq2Nk3rrSqyT6ZJTktvUH7kDwd6PqDCjJ1FoJdtzET1bnscL2D7T6Qs1SGyvKve7uL6q5jJS2",
  "key18": "59nrT6wLry7GKcCeDqTtZaK6o3ssUJvGR8v6Htur63EhuyMrUw8FETt6SUPN9g4SLjMdcgLucpFzvMiz6HzJRKnw",
  "key19": "527DCA41P1ALG5eMo74bdgauTBi1sRv2g7Wsc4x4pQkNN9iva6N6dTRvaaqaZzyzsEP8937NtfBozq4jVEEvnwep",
  "key20": "JMWSpZYbtkCrKhSdYtcExHm1fa9KMbdEm4XqLu2iY1qxy1V4kViaTza8wKAoJvCNV6GYVgqx5sss3BDxHbupWye",
  "key21": "eBNoC16vhBRyumpti8RP2zrpzjTs5HLNWmomBnUqaWWAPBLUZsDbq3DGRkdcT2nEnvXAJsy59TgTEq78Rz4u2F6",
  "key22": "3zjUWtw4VRQHqsFUegPgEwmPUymtJfqTbCdHhjo5uNSEFaEDYyu2xZNi3rhkrnM6CZwzMUbpddEpoW9o4DpqMnr1",
  "key23": "283vmt663KJGpUNmfDfEtHTyLFzDSsQh6hBREnCVpsnJSrWMCMgdVE6XFPJEG7Bo6itZS7AroWsepv8hKufzGShe",
  "key24": "5BBt3Ni1zERLAYiMsMYQeu1r6VfEvLqxMhe81377rCc6spKRBzhyFyyQjoSUkRk8PtX4TvdKmXWkbRaGfUrFvuBr",
  "key25": "A7i8cb91FcDve5dWaJRX87cenuBysTGeRoGKbGf2LgRpHew6prGVkJGuQGv6RKXrd2YZWCpPdsst5nuE8LCfcuG",
  "key26": "3ar49LYYubn7mDF22kPnpzwbvAWemfNci1rRXgBLrjiNh4Z9Bh8yEGudY7qpYXUnyBF5EcRxVHC5Kiw52diEoe1S",
  "key27": "3YuCzkgMKjaHUw5TYEmDdh2LpjufjQ5K5BrmNLnVwd3tiayZdnEybJC7rFjiEAGRj5ikSfWSh2xNDGTkn3F1w4Xy",
  "key28": "23ZsYkQf41VQnjRZzDy5g9h5e8Dw3jYScRjrk65N6FVwEEu3N8oja5NCPh2vbdkjwPx4i9BQYcaDXbMyosbUQ4hr",
  "key29": "4m1w5QAjCfk1NVpuMCn6m3u49y4SP3wrT1TedPqxwywJLk7op3tRmi3QuBZMuMrNbhGpSYowKc5RNbMn4CEjH24m",
  "key30": "32GtuVw9gUEPPENS2wXKgmgaxfzXjNDGhkK1p7DG2pCyu9GoUfcHRKkdkYGaY4qCPsiUjMEtozArTMh6g1cuiSjd",
  "key31": "4P43dzQVKtKczK5UzoDdb7WtXxUTwS8WPrBfbqCTFr7RhYH34iiXxSTe6d4kWBBE6wF6kgR6AZ6w6KhgBAgYQZPD",
  "key32": "3Enmkwvt1xTALbXBfDUbSXTqw5By3CY9UoCPNykTBG4qwT7je9hksic7HN8eAgUL6vxyawBEV7fizCBTjvJxLRTP",
  "key33": "aGvdEmVuGFBBzbu9ZfYhhvE1UjyNndJR7veqLt7H9iXG2DKVqVQnFra6EfVDjKNwpqocz2r62HdKquo2PgsNy5W",
  "key34": "BvkPXRBm9539LRCJN9ndnMuevWLrKn8jm5msBR8FqWct5S47T4bJqU1Cu27WnKCP1BzwQW7YZtEs5NatoGp8RHL"
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
