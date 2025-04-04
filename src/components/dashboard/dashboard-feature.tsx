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
    "JqTYukigEkh317PFaqoboNoXrnHrv3xMYgfn3DrUnpFn4wjcAxMCBoi8iBdnbjE1F6h98wq8QKW7xyvjvLwY54x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48yQhoN2fah4EALmzUBPhZeo1eoug6VepFSceMZSe4xYfkuUnj7VSmSHZEm719to39RpWRj8UpbUxtr1jC9Urmkg",
  "key1": "2dn2JdQnue9fcXNUH7ZpTf8nF2wCVmsQTskgwtyXZsgYg3TLeMTksErqtv6ZSuTRFcyGtvDcUR8Jz4W68Kfx1UiA",
  "key2": "jx7weRMbccFFdcWY7xmNBP1HYfU2HXkSQk8XXAq1aQpcoGjTzr9Pwu8bpiNpR8auPP33etMLUssG6QvC7DKzqy2",
  "key3": "5fkSGzbXrLXnmKoSsX1d5ykXpweTYtTmHrinFo8i3meWdvHHcBMP4bfDomx8pvMz9hUZ3N9nYDPYu4ngw7EnLkEp",
  "key4": "3kvCYX1RnnRGTZ4DJrBDCAKwZWNNoEGmc2i49pKWqWtX3d848TKsiP4ffmeLfNVtfQsTEjH3Dr9wKRsqNeYgGG3m",
  "key5": "5SmkoVcniVnZaZLBpquadMErdfpziQDfKr7r93GTHYL6WMTqbirLQGs2GEoYxF8SkRWmkAjx8mTUkmnnfddaxenp",
  "key6": "3paK6iBk6NkVmFa6oLeAukfXsF1SJkz7wMNSWGgAz8tnmdCLF46ZgLeWz9MBfuS8QD6U3zMf4JwDBGwCmjHY2Ez",
  "key7": "4mPSDto2roFxSoajtvZq9FfosUovZUd8nu8321bfYPFEtP6kmvqTPkzUUS1MKn5Jqik9vBLsaSDQf4MbacfEDF17",
  "key8": "hd6f6ht2dRqmN8DkBFbRwGJzCrQxgNZt1PvZTtXeP96rjg74hkLcoVezSk9rByZzLttLeamGxC8uynAqnzqXqsv",
  "key9": "5xQoYb7CgdQNYYv2FgfQJA622S8SyaEmMJ3n88jTiPrNsthvBinhHpJeL73egSDaftKiLw4A6uZcGKW14kgaXH8D",
  "key10": "2xbL8JJepGwyq47V3v4xGXry36tzchWtqtNXwLmJRmKeekJvZdWCUKfVFyjCSi6iJzqgZURPvnhuZX7HNLTyrKtw",
  "key11": "3CrVTiFUmLb93yYYR6j1ezP9xNYEHW1QRHpBB1YffQhT5WJx8orU1Wqr53UDBRSzx2QETejtwESQEtcZLQZkPZAG",
  "key12": "4SvLFQNZcEtrAz8Boepfw1DrZPKZxjv3oHXgaqYPQbRAA1Q9nF4tLt6shWDfjeRd5VZcuYCyagRSU9veoKesWFH9",
  "key13": "4rY7s6XEvzvz5tMyfvc5ZgEU5AYhWJVyC2LpBeWuqSGn6SEk29zJSEAR2U4vEooKsdEFwQFsySV3PnDYSsykLpjM",
  "key14": "D8as2cGWnzv7FZnafMay7WteNkM5vaP1YpkK67iTS1o7CK6LimJTXnHg6fL9BWmph42WcmnRJXZUZKZzf7EuzeG",
  "key15": "4MnG3huXpgMqPHiC5RRW5sqkEh9Gyn5kmPYaZ44ZnduDMXG1xRWJPep8fzjuHKFsCF9NDXP4sKiEuSbyBBwXfA6n",
  "key16": "43y4r4trwZSUHU8RdnWKvrvd5ffoLCHRjYUy6WSqoiTVwfXueLdATXcecL9aYH4zAagUuJWbQqSzPZQrSQ456ZQm",
  "key17": "5QoHw9DtjTb3HmxDNmMyZRFexkUgftXDiRUK3q8DvRRxthracNqhyZ352KPwcE52shvu474vB7gVuPpECAV35Dif",
  "key18": "5ShBWUNAHxo6LBXNcZTYsz7wuTugt7yGDsuVGLANS6YvQwMKqnNP2Zz13jZ34dRoopxMNwY15d2HANpJ1eNx38Eb",
  "key19": "2hoxhq5NPvnBvzM4qmN9CtawXsZEBUDXhM9znDwP5hVyNfWoBzyw9cu4rLwvGn53srmvzSbFraq85T2esS9iQiKr",
  "key20": "29Gtfk4wfA1yZeQ9fGYvN76Q7jpBAFqJrEuvyRrAcrK8GtuPGayWt9qretj6wzj5xhCL6etXAbCLQ4tJfqzL5zDd",
  "key21": "5qoZNzEseFfUqn4Fu6D7uQyzRzfcewbke57tHAbQL1BstLSe3o7M9GsaKM219S5cbVuXQeBE6BmLparB8W7Wmv4M",
  "key22": "5F2u3gXbsPP94DNr35knFiLrN4pV3Lgovw7fGUQ2A8MKHEoePmoxrqhExu7RbCLDqBymqfZywzreHNMSmgP1Jire",
  "key23": "5wLbFL31z6AyA9R3t2mMii7mNspb2EuttBxfsWNHsRayLczJmEv6Tzinc4nQHhKuqBvQVbJGqa95pdf23yDFBs6X",
  "key24": "5EVTXNNQ4GDZ6iEePMsZrQiCc57Ew4T5gMPBNuqiLqZL7eq2sXuQXuH47FjBRxAp4Vzpq8ySyktrqT8sWU4nBCNH",
  "key25": "3Ffy1g7X4KS5otkzqmsGjh7hPzudvNrHZFWrTtavGcz3YMUwhPyRsKbpwkSaYNkAtf34Fe9NWTSU1nc4S9uEeLvu",
  "key26": "2QiUqGMx5cVxEu8VTqc6MXm5XAD6qAbrqRqQVR5jDo86wxZCruKZJS7FHUFVRVK2VezdQQLEBfMaBycyQ7iSd2AC",
  "key27": "VZKkeJaipJXg6iY56TbEY19Vhx37tDLc7g3FjQuNLxVVANSk68xhLBGydah45JzYeQVt1ktEyZ45mzv49a3Fxvq",
  "key28": "TdstH28Uu8wSHSbuBveAeE24Nt8BRsRBytuHbW4h1XjpvuASCqqPE5f2sPsqouTQEUvLFbsQcYkWjx22YELu1Xi",
  "key29": "39DpZpBAbjS59FkpDUT5wMc14TGEWrknMbnTwbSqKtxC9UEJ3R1akwvjnYCgXtvyaoMNqaPUa8aLbosjGsB3d1uU",
  "key30": "ju3GNsNbnrZXJucsJKqBPG8dP18uFWaJKEzcsgP1LXFxjRg8w5gXmSuoWoCdQXQNzxYMeEjfeofsTEaStxVvaT5",
  "key31": "pnBi85PrxALmX6oiCqm31KjWRwcKyQ9pTCtpD2fMgSFwvyvW6oLDgPEBiJos1HoQHjeqxmS1k7cphPL4S6s3DG4",
  "key32": "5i9pwryEAvHr8QfqkJg8gGjGAH6B1nQePaRy9qqtDxGAR9ceHi7SRqbTzkD59apne556zUWBPHJLhVfDDq5w15GX",
  "key33": "5wzywD6XusWReUSpDF27MAZnvfks1NK5YsGqVg6EhEeATgW3rbbbzWmmwXP5KE7NpKjdmtBjHhi14TvakDT1r5bA",
  "key34": "36hhorvBX6YMRtVSP3H1KT29FUzdXsAtgcskJpZLCfhYv8fdGWg5dx1F4X6oah5syz64hYsXghjngPY6UqxsX1Yj",
  "key35": "2Ao9PAQ4RJw6x2Eh9Jg4Lt4TaQGkNTdmpuysGXJXDHXEHZg6nsthMU1YX6Rus6yHQAgMg4MgwTTshR3MqjxR7V73",
  "key36": "4VXGQieUDvQjn3E8iU8NABmhZE1HJnguQBfayKNgP77ER5MN7MfJpN7yb2zFLXcxx7pBNCZwvChJQER2Jx8nq5hM"
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
