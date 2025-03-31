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
    "xfe3UWx8SErga3HFX4dUoL9ezamsRi1zjkAfgub8Nz5x3DDA88sfYWuZ723stiPw3XrvrjB1n24vtbAjCwJrqSr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Do1LRN16gFUEdPjEB5sUkcWNqMtc82ivoqJYa1uPBMLJFmj7Ucwai3pZi4biTX8bBcsg3Crv736wDWoJxkSFL9e",
  "key1": "3rfPMhs1HCYHRRcwZDuUt5q7vmsRDa3ig51cckFePnBNCkEehVYQ4yQsz4gbEwgL9mPSA84DpgqdDSipPiSuAwk5",
  "key2": "3MrpqiYR8wtWL3H14SXLreZXsDbGXnenjrqhemZAUemng1YuHJLVcJwtzaRhRFVLvHQ6Vpq5AfdicMKgPg3HEWCj",
  "key3": "21qUTfREaGhpP1u9LVK5AGoWGn1MaA6d8BdytJAyds2Gkt4KWMXFmyxJGcMRMPyDUuWnTM7KH4PEg8qeCNTQtfvr",
  "key4": "7iBWFo5SDiY2RgEpeRLUU6v62azyVwPmgX51Fv8LaB842omh9NunHA25TqLebLEhLKh58snBkoazwXKpLxx1Q7n",
  "key5": "Twx63zk9yLs5yccWZrTbvCjeidGMwHC9DuPZJPqKQAbJCdZanvNNz2TnnGqjcvyAujn6oP6Tu4TYx3M9BiD694R",
  "key6": "3tHz4xzmqZf34AWnTpNREwFxdhChPyJRyo8Vp2tHCZZc99xGppkTzkbtDnSfqsWnr6ubRgq1NYBPmidJaXXADDR5",
  "key7": "RtsHktTD76pKcBDnzzNLgAg4vxtv35D2vogAuLXg1d88M2TiuqczvwU3SMoXro7STfBgxn8rFjX49ZEUZdkNCi1",
  "key8": "4Eo46oUxoVz6DLYSUqmYzvcHgH2uZQ6bvFz57rp5E16LfwqkusqptVftUZLgYUFx81GXoUrdz2H8fPRgGisED7Gw",
  "key9": "2yoBFx8gqE71QXC8aHLo4T6B5Ms35EzdqTqfhPwfen74erfL64ouZSWFZnZREatVRQJ4wTLiboXvU1USzVafHMF3",
  "key10": "5EhDdnsd18cB7Kfe42i7kc4rhX3E6o3cNd81bJDGf3aabdNTrEhcttW7CF3S1C51og5zaDeHQBrYWdz8JGPtFdkj",
  "key11": "3FhV7waunctUPxYSqJtn3D2fodFKDLUDSYVomnAK8orcK3hPbZywDDyf2uQE7hLecXENUmdAMYCxT3aU5E4tbk3J",
  "key12": "53euhhCYyEowicBotYEXyJwQbYZhLXepcBMik4D88HTyqZK4mpLhACgtf3WKJa5S5YU8VhHjZtCXHvS8crUW9nt4",
  "key13": "UJwg9ktCUKyhsuHRgpFvxXTqVzhNTr2xnaLDy1zwgooKmXkjNkgq2fMVQhRu69jAWeNjPLD9c5K443pW9VeEvpE",
  "key14": "2rBjQKrZ44nz5aRVZNfFM2yzff7q6mCtYzJdkZRMtq81Rxqgb6TWSjSczVLKpinSnWJUCPABpnCERJHTU54Z5mRJ",
  "key15": "zfmWPZdFskemfKvuZyBbW7pbcngK6vHyMHv2ihwnbSLV4YPnSyMZYyBGd9Y6XoCzw7XiekE9UjUMhXDwpaeZK2j",
  "key16": "4xG5RWapdCbBk3vueAGJj1Q4ZRPsrQijnCpiGP5Lkafe9d1bZ7Ph219PQoH9K6BE7smEjPDcZ5tfs9XkYpgQ3vWc",
  "key17": "2jtNM8HRwjTkutLoS9An4CnAnBRfdWneuakD1b1EeXknseo4pS5SexJuJosiNRCsiWGxsmwRzP5WtV5VinSRuWBX",
  "key18": "5Eq75q2vXSk6WibxjQ3CcRjSYgxWuyXgyUJUds5LaFXCGb8Z84o57XqXorcGcaqk8GTAi2SQokuPyHcmDAcZgLDE",
  "key19": "47zMuytDhZWwYwTYKtt6PER3rFTUNCi36qhm3vKWCvJtK7rwvjziKpgTr37hdAdNMdW5jZR5qHC2yEHpFkSX3iV7",
  "key20": "2ht55zHiR1aQc3czmYzvwpfJaxSRTp7345QW7XfytMqd1TCbkuFxugyikzfycuKTP8dAxJQ16km77ZqM93j3DVMR",
  "key21": "MTjwhucS6TupJrPBfFphJvZ7haYdA9jbGmLExYxkKFSJ4wARMzrFZrtFaM4eyVQ1MezoTFHRQJeTMAEHMRgQ999",
  "key22": "Kzbz24GrBWWAL5ASNExpT73kjb59mKF73Hcvf5j1sPLk8NfhUdSxEBZ33VwNwtFAo5vfnNC31G5X2PdPtoH9PwM",
  "key23": "2HHPQrT97qPkMPVRC39EHHmCcDkRTjnaXobXX4cNNTCmRdV1XtkyQN3zHEVRa6ZXjiqoMX8efvV1Rs9vYXjU4LPu",
  "key24": "3jNimY4YQ5WKk7WJ8niZ32ZX4sAbx1pyCf58PnNX5MmD4LoaUdZ8gvkhzg5rp3aHvCMf4HeAgcZjrCj7VAwALu3G",
  "key25": "2iQ2nPSSqG1MyzneCBPRGnkoEcxAsVVSSJRJAozW7haZu6HcxNep9imc2pGaqHNzwNdkoCjfcbQddEv9zB2dSDcB",
  "key26": "5HdphQMxRX47AD8887Y1zfV5gACBZPSqrC62mYXeE4q14ve7oojYQaRVuJfAxWSz3cwkRtpK8jRp5r4Fk3VkCeGi",
  "key27": "24L1y4b73WjPHBAmFfeVgWfX847mmmkDsNVgV8KK2FMqV8JXF7jkTQW7AEqBa4ZsmjXAm1fJh6n7z1Ywr85THtmM",
  "key28": "2XKoUE7cbVNRqvried2EdTki3tn3tTPtQkWAJTtDXGkMDnMTUotMoPErYT9RHZiXo48DMNWReUs9k95JLL3KHbn9",
  "key29": "411tXH7neSjt9uuun9hW9N2yEi4pjc9bjUbyHhXawaudBQQywrAdKhHo3kwi67n8aBNC7TTis9DFm21Nmk5XMiDA",
  "key30": "2icR4cW6L4YYTDVixpsL5qLn3A4FjCasP39Pk2ZuVdiERoxoucttML1yr1F1pW6UonU2dVccmWcf7jXXW6Vrpnzr",
  "key31": "3httSdHw12ChkoNzNMs4QNGcc7wbuKkWcRuF1mmHZb7Zmq6zHjwJzH1j8uTctNHAfhVi2wQHpBFdFC52f3mvgkBG",
  "key32": "21oR9sXDhYBpJQY3zc2sFb6jo1dPvegdQXFgvH8fkrAQdAPTQRz8dHATN26Ka3293F2fETNN7v8V4Nqm1WXPUqq5",
  "key33": "3T3gSpfUmQHV642kAZiqqvTjwzsddvzZrVbz6ovsfZa2HmSCzsEK2U4AVcfj3rMgihJ7Z36Jyxt9UChtzAUJFDtd",
  "key34": "36a5eSiVC71f8PNQ7KzsHehYWPocQsnastfsN5bCEBkGAU46ZLsBnK27GPrGCCGtMk3EVPEUwZhZpS9Urw4vgPW1",
  "key35": "5Uf7qsS5TQQFPSdMp5ujziWbSiSnEFnvoDF5zJPyq8rfaWcAjkghxCAFBvNYdh5JNQfYdvTo4t9ZL6HysiDUPX6v",
  "key36": "43bWRh7HyB45fGKAJGw98t9kDThqyg41AwAh8wDCV33MeQ421v9iju9a1LjAi3P8zg4pzMukH5GtWSGecgDkJgGo",
  "key37": "49CRM9dY3cTZiR2pU9sk9sn7NhxnfqRTBctwkzFUePyygALo25MrtjJn6wypBv2gyujCBoSWQccKVhv7W4H9cJaZ",
  "key38": "59g4vLsxpQURRpdJQhTRscCMkuLq14rVW4T7RgUdK671tTwgPHLUgQAEzQHheNz2se79NjrCi8MbDfRbXeiSqs6g",
  "key39": "2iDDPSb4ZT3bAMtZAw27uuR8niygAA5MvhrjiScwDBUkh5VfBz2ECYofPn7rhLBgmcMyAqUsNNze1uHdyuh8qwtz",
  "key40": "4xoLUpEsBEhLWpHboV14TN5gzdBotbn4oRN6jCCX8acWh7w9CZyqMfXvJNwzPoKs7UDATBCaxQr7ToC1Kt77xF43",
  "key41": "4FcM5UW6Lr18BqHQhS5Lne7rz3wJR3WrXe3N5RHPwo7sLFHYrhLsgfHCxeqnPMjdNuvwrVFAs15MeJxf8kWHoDqc",
  "key42": "29bMCqc6oeuYHUtz67e9iA6MMB6C6o4MMAJ5YE2Lq5SnSAeQNboG9Pnk94vsonqNUxGF2127xR1HGC2YkCX8qR8r",
  "key43": "373bySNmAaZVEUf96J3XqUaZyiiK9wrq78TWpjrPUUFxXNij69EfXhissM4tTp8mwPHmFHRnNNFFx1ZDkePqRdRh",
  "key44": "2XMM43chUrdubrXZQFtrXgVkuijt7Vnh5pqB5bZR6H6Hq5nCbpJ2LaS7fa92sBGqUicSY9JoYpVdySCgk23jf6YX"
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
