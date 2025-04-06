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
    "45tLrhmeWVfvwxJYfxnKpUFB6sx31ti8KRHK7jkEprnjj8ZHAkgjV7gknHFrHUDbtL95sUQVERupNGdiHopJJvLK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NhiPMdD8oNKKGULyhNNf268zKHzQ8QqCwEvysGihAjEthAASNz3gEjR49RDq4EvjDzLrMTcXBHbSvaWPd1Adenr",
  "key1": "5YS9u1TGiEVi9QxDZyuQLLDBnBLCPHGb8EH5sJ2DVnmvHKMXLsuCtzcFKASV8hHidqvmkDTdeCEgemCHeNNQAwdB",
  "key2": "4Crg2ZDjajupwxRZv1k1VdFYvCPB1LVGw6wd6VtMLQhFjojnbJmwQjQVnF8MJJFWxtVGDP5F8qaRKLHA51A6MhaF",
  "key3": "4VsdoZ76yAFojQ4sjdRBFxwx2GDt5YLHV4vG2qJmT5CU2m3MGHSZkXmKavDAVDNcm2FJHnyga67GRZM7SonnE1tw",
  "key4": "YWQpeYEM2s9oXBjxDqMpRVLYzXBgzVijMFbfGiM6voFWpsydd8JhkUsNAKMNQbgWJwFWkX7nDm6ZTZqYb6zv7TT",
  "key5": "RrnD32jL1Dgpk6uZmPPXis5kxwkygxm39DGMi8eoH1vg8pSJqTVrFDd8TLAWpJY7yJfX4gFZtjE2eoR1J4Rcu8T",
  "key6": "2cFnE9rJ5ForQfL2Kzb67RCKyqvkoD94YTRMG1p81Sw1BiweuTsPhvgzANRruRJ7vp2w4Nf3Yevnut2BT9sbQyhm",
  "key7": "5rAaiSBK41p1wchVysB7o2ANjUFViCzjDAogpSesinXyL4QrhYUy1Da4f7w7CS4kwm9tfMQHmRAQPwokQGfFyWBS",
  "key8": "2vEDcccGd5gNGjwJgjDcvZYy7BGNzRW27mGysPiU26YmvNc8bS6HdmnSg2HTpQfE54PLuK8d8eynXmWzKACAiymT",
  "key9": "3jGkA1163ksurhJykV9pnUEvc8d9rxcgpRe9TAh1u7BwMugN9R9sFiZ5buzCVtszG6Gu3sR9ENV6gUVrtcGsEKwX",
  "key10": "5gHgi3cfcEHDVNChaDZe4cLTJeuKzcVm8peneSpg34vqxgbuQB3LQDi2ihzhKkAnpM6kWw1rxoTxB2M5qSUaZ3L3",
  "key11": "4VE5yF1G4hXqrZi18uqSZxMURjioF5nx9U2vSQMFq6foaxs8ZbCxKXHejZoeRRLrukwKR5LfPPHmNTm9AU2rVwz",
  "key12": "25PeGc1MC48SV3oh5EVzhWw8NDBS2QeKeR4Q9cVnT9mMeKnNKw95NQqoPPs1tBfV9a8RR9QRbKkrsMCgJjpPborc",
  "key13": "JLN3tc3P1VNHQsn4hLmC9DFxjhcBsCxC3pLJSkDyBSg4QbsHMwEDbTuaYkGKAjNAxVrkqxiWmrAzfbD2H9WUpuT",
  "key14": "5uXrh3xeeQyuLCzKV7YCZsuwVtYwJEbkRP4oDg9YzfaMER6GxhQ3Qv6wnHnphadTmyFTN5cXSHmtDHvF28GZxyHN",
  "key15": "FaKk1mbyKN5xkjBoUS1fenqEUWQkcYCapQSu1P6NVTyVnyPs3MBLbhPdgJRiuaq2seaxMieJuaCUfGnYkPe4K7V",
  "key16": "jSK5EFgCGmJ3PJJFXMaa4WmSrFsfMZ8hhweAV38X4cjA8MipNz91AqHseQwNnZBPahXQoPSjkM6fQkD8zxrreQt",
  "key17": "4u3HBxrC8os39pa8ax68PfLqyMPfa31sPpeg73ooy534xPjnXVnXz8cTxjw5j8j7wgAk4odQgaQ2fhg34qnvPDpV",
  "key18": "337gSryvKB7xQAV85V4uhrsqtaushhoufTb9ZC5VpkSuKBPx14y9eE2W8xukRUrMTLDPirpZJNoXjJaEujvt1d5L",
  "key19": "2kfSWituCESfxY17Nu434H9DEmiGXweayyaSAKzTyCz1n2iB7v5gMengYF5Um34LWyYFkvkVUeVL4pNdVYJ6AhAE",
  "key20": "YqHYJxWnrDZgLViRn2nNj4Jr3R7XjX1yYRMqP9QphzZNUW6F5C1AabxJsyePuooWULNePearbZuTo77WBsFLqVQ",
  "key21": "2bcBYZeQmcpeFcW77nsWAGnYwn4zkeaiyrWvhesFdUTknacSmpm8dte5wqZwfGjnGLgmhWWHLbSe7A12S1oy5Nh5",
  "key22": "2fFAcZbX8eLWPL31rXPZaUgYiHzCCnezpdkxbPXikP3b3owDcGTAXAFg29PCVkCoZqPj9Qe9B38vXkeCi5quc8Di",
  "key23": "1yF8tHL1JSYENCTo8Hw8ouaWd2P5UGFgb9usG6LWu8gJQjFpidFjoUSdUp5z9HBhxvfrLChT4HwW2L4JW1AFbit",
  "key24": "2sfcddUbQi7T8ZuFbPNAHCCY4eE1n6NwhSB9g1zfYMKHVkZw7A6FbK9U6u2qaATxf8T9r8tEw3eJT5Q66e4mU4j9",
  "key25": "2Z4qJ7gQyikWHRbKfqFE4kRgLruppYB8RbZYKSCA7Lx7wnfyFNZF5kNrvX2MUnwtpLfssA1vMvLgP5ts73qakime",
  "key26": "3ehv6R6z2H92WNQHFi77KSpTbs3uXEy8Lwwo9ffseepCtH8EUqRRCfxUd7MKoqSYfdGi53B1PevfS1mS64DaETT5",
  "key27": "3QTi3wyrPYEhKNnPtrZKbvFfpgwYHTAA92DDQjEQpDjHHpy1DEzxZFFG8GtfECCGHrxkSaXBQFAV7fQTqFKMqaai",
  "key28": "3CZrzXynYJedP5kdMWd7U2korbt42x47ovmz2RVofgdrgrbhZaCjLfHSQH2tP3zMeCAfunwdp3ADWnHYerzLo1Cs",
  "key29": "2Mj1K21JHxLLRYgsxRJjqDwcpxQZR2iorXMkBx1xNg4teKqhbi8FwYEBFhcHtFwawA9RqXn2CAyTXx5DQMqhzamu",
  "key30": "zi4tT1WM9NG216dCuu2Mf8KTjzbfkB87mqoiXk58jCvN1FCKDtadiuzStc5NrgPVvP49XsyCjg7nQ8eBogarbng",
  "key31": "3xxptzLH24U99aLxnoyWddupheXHU9TQ9NFjWxp8jq5cgLjCYpyB5fabBRZw5S8eQii2T47tk3W6DhyFo62FNhoh",
  "key32": "4a2njghpT5rgeb9EeeJyeUd8V2MMWWbVgwi7HA7vqqj18VwfQVgNAxjhi3ZPrFH56vkmo6U3am8br9mdXE36ezJ8",
  "key33": "3hXVC8q5sVLYMg5tn8VZAXb4bXrZfhX3tUsWvbrC6CAwfr2zKGbSVGUn3P4MzJVpz7am1NtBnXk29y3nUiGAEvJ5",
  "key34": "67YWcTMrBz9CrsAJxcA9KEyWYzaJQwhDzYKHVGBzJ7bXvfc4inSwHWVjiUQyGKfDKxDkUMznYq9zkFzAA4q2NsNs",
  "key35": "4aQn3wS6s4bBD92SdYoMSGVt4S4sBCtZVbyQoFpCqZ89hHyvWQDbGCDSB6gVoXad37kVQzNG2LSYw88GRFuE8ep",
  "key36": "3mkEdwhjsUZPUe6d9asccoMVGMwkcp2iZYYtwyVxTqkZakj8Pw5Pynuf3CzVVWb5rhJSpjfCmJ6NA1txXEt5Psa9"
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
