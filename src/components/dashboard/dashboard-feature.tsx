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
    "FnetsdmKYTxz9x9c7aCnP7TjWhYMFToqeHoQ9pgPGWep74AhBTVjxXnp5P1NJHAr5dYsukjnRaFeaK4J5x5jTx8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MT5aXh4xWbkMixLRqGKc9W2sbmhhf7nwQAWWZHYgmerWFf9q8aM43YeYSPU8e5mYizBo8opuh8a5rCtUvfHcTJc",
  "key1": "4FrqdNq22KtBUTFpzsdJFpUHPCmunVZe7oXGfgniUMda5rZQdYct4rFkQi44Kv5PkurEzvs9qr5bMYLPfbFaQhd9",
  "key2": "ZpoQpqbDdHFuovRS9tib2sJ2hkZXgYvX3Q7JDXXH6YW5rp1FG5g5UfqzCSwup7SuccLWnACbnnLcLi1sWGfBCwQ",
  "key3": "cmbizihCTGvRAaMmtbaq1dtcgogcU5BGLCSweTfseAjPLgYe3ihz6syEcJEPPk4Jwuyi3jeQzjpg3mSvModvKmo",
  "key4": "PDJB9XeY4BuDmYvzHrdzVW7i7ni9mJzu7zxkgusNzNn7cSsS9dbpsMAqefeFv5eT722mEuHQvMo67B1K85haTiF",
  "key5": "44mhDgbE1fLb7HWZHHn4Z5ADFAH1LRduaJffqiEy46j1oqETSkXM4x6ncv5vZ4SuviCWpQYr4dm2vJ9XVkF5gMbw",
  "key6": "4BK8utxvtJn7LkoWWNj7XzWR1ELHPD5V1FJtW6ZC2ajYePMhAsxQkoebhdyXaLLH5C5uL5PxKHfabGyHNxcCBKFM",
  "key7": "3QEfn67YufFfamLJFocycA7TBirXnHC8Q4fUaXAuTU7LepqwsdaYdBfAB37pj331b226m6ASC56t8PsFYd474qLk",
  "key8": "4Q3gBuTnU3WJB4kXCeno9LY8aJ9JdQbY6oJ3LyN1Gfy8V1Rw6pEmkGqVq324R4za1g8HhCcg6bcocuGzXoHXxiCg",
  "key9": "5N42RTkJotzrZuQpfMZ9m8PjGPBKA1YdJ2PYTwgTj2eWx87iheiTVA6P8Vb2wgnTUaA3XqNcDPc5ZjEtVRRMeNny",
  "key10": "24diYTFMyGEi6Nk4Vc63KUXtwDSZ68WN9CdEsnm8CbEC3iHd4B3V3Kg1RbMVs7ihzfubx1UHU9DZrrFxLvrmGTLz",
  "key11": "2boXZ2ULnS5ZeWCE7Q98hFrdvfdJZMK5L5PJGpiMXAaCUmhaiyidu7JLo9zYdV2neH7RXTsnjo9HAjsFzaxH9k6J",
  "key12": "4t1ScijqZTDe7VcJSkPfqJLFQrqkBwaFezJK6taK3LMUahUaqstuSshSpaK2Lkj5x9yzpaWQkFbiS1oASrQFcPdA",
  "key13": "4sn8MFmddg1RUhMxX6C9vdHfZ5p4Pss4e2zpCGBYWCFBqhpr7VYzgy5iyt4fLR82YozEhneg1qGtnnR2X2d8hbyh",
  "key14": "3fXarjW7ejuNVNETJbtj5petSBQGtNobikNm6Huwbi7w1zixibR6udVL7ASf231EsqZDYZDSomuDcVf816Da49iG",
  "key15": "5LtircwNRz1yak9V7TwZtxCEx1SS6SCodTy9tVzF8JHy8berpR3rMjKa1iuXTbFy1VZXP8mUefCqKdvPoMA7TY51",
  "key16": "Sd5iVoGUxZHUuQFSNGG48ryhhuKkxgGxX5uctSPqSXd6XTsYQvcjhYVPHYFr7bMwtpUm6tSR7tbyef2ZvRCPcrL",
  "key17": "4uW3ZPK9ahVnGZyL9Kx9h7aP8KxfSyDt96TU17WYUKFxBY17LYChhsxGcRvQ5Tt4bWg1KMLuX8pAtbSY6cqMoLX8",
  "key18": "3PvVHJqBGmTWq1MM4MZr8zytNF9NWLY6tKydtpxBy8oPVYJG5nTGdBkWuJyyf9N21QyaaZJDcKPRRd3fYkN6x79Y",
  "key19": "3aFJdRBatEKD5SsQPFPdMbTaU5VjDdVgbro9P9qNE7RP2oivHqwgpsWDa6VvXQm7a3LLRQQcUYdkDzrP97yjZRga",
  "key20": "5EEajtyjQvKWtgaKbseZordHNmoemUrTr6XndpR6jL4NQ2xCgjnk8CP1xgBDzQzxxjukBNqLiqkWScg1Ccj4mcZK",
  "key21": "4qhiaFAMMtjFE3xg3zpQeZJ4QkgWCzJ5FegqGcE8y1qWozpG5PdRyZGzKQfc2K6eB14rmziXHj3U5zh4q3Q44fcb",
  "key22": "8CoqZNa5n9xLcL4naQPzmfiRFpfs5eKUCh6LD8DCTmZrxSXoxUwBTdGuTfC9UwurDKnJvNE9Hc3y1P7n3NR13cH",
  "key23": "5QDPuVwBK2fhTyvHDrX7fouP6RArR9A1ZXKmwTVqpauapj9H7PnfE8Paz89FJrgdc1p1oygttVFwXmC7ZeH24xbk",
  "key24": "5JGx7V8cS2GXEJXYweBqkdCog9J5dX9d8zsqLYES73bDNqFYJL7CiyNusUGgHLrKrLBX3f2Jvwpmvnc7FmccMNkw",
  "key25": "5uuqNNHbsLf6KNWSddy2Xwso64vBzrUDRuEZ5fPotScty4MNUoceXrtsxhHWxVu6ovFgkDEsJiZ5uaHmdLYQG1Fq",
  "key26": "4YTTPCfKqfebAxApTPH932wKeascfXDqoQJoFA1qTAjUg4W2qJE1HSJNQcpSR662qxAhuAqV2QgSDU5Admuizisi",
  "key27": "4aBXYk44aW9HeRuJ92TKk3CkhMmbEbbFCZTVfaSCdpHzkbmsPuYp8mqMntFzMt9R6bTvqxg5LUofwvaDXGbcXj4E",
  "key28": "5vYstb6bwivmv17JXhPwKToEPiHLuw6cG8eVkZRPuh3q97AMA5GWAB4ZhjwNrMSN41TwWXyMEkYeZdoLdGvX7p4N",
  "key29": "2j46WQVWNdUvwvQePjZvefRt9gbTavqyNNHVoyLfhUeaW2qCtN9L5X5h78txgUY6ZKp8r1yqn3kBYFumLYBcFcg2",
  "key30": "iqMyeKCEGM65wKSHasxt6JHHPrYPL91UJdm1rUbbQyUi28ChGJdfpXXqmYgrQU1gLHxMMHc8c2bmzr7zey3HVH5",
  "key31": "2bfQwT9myZyyiFmHTnj1uHenC1v9tUHp5r4RjSMDxwr7CL4fkJs6yt9xiwYjH1m8qUeMSg58rCC2cVqHSanwfKyC",
  "key32": "651XM2owzGcUtzFNVpgKQYnNzMBbZHBBYdTQbuyipUJQKaYZu3RhTAVQiY7TqYQNQ8BH9aEscQXSY5NkNCsPCQqn",
  "key33": "kuj8qTFwA4eJcNBhAxerjjQrrwfzvsyx1KfGMFqSz4AgGsEds9w35UmNecjRhMHkHG3QWJdooGm9y59M7WCyZiB",
  "key34": "3hEQeVtzjQ9x9eKBNRpzzpnZ97JQDtBoCYTgZ44GRiGqoBHap79qqAsjK16SVFKcumB1nekcnPT98qTkXpVzdRU7",
  "key35": "2x2yoHghVvE5Phg457vF3X8D3HKrfyKQBj2qMs6Mt6aRvm1c5w3PuYAbwnoevhi8yR6SiSL68EC3wjQ8tef38Bkw",
  "key36": "4ATaJ6mUoZ9jPtMateST4TWxcxaFkY5nfffMuhiDzunzVDPqPqY7FaATQ4Rec7eE3yvh86Pqqq6MW5wbUjKHZ6iS",
  "key37": "3c9CWhkRRBP2xafbAg1c7Vjt1YTdin8QNR3Hd7gFtsaRhsyKBfpQJhQwfoptBwut4aoXWYEverTjrKtmrRSoojsg",
  "key38": "4Hxm1NDB7cJ1YL4pFtMbDuwipUVYL2saBBH8UnfECExh6hLgQsPfH15ft7KkBNKLhUCqTvmednsEyVyD1CgwcTBa",
  "key39": "3zVJAKTTuxx3RZeFzTLXxMtBq3UxoJugz5jRWmCFoFhakwkERc5L1Rhgf5uoAkpmRUU2RRcitQTne3MqTZkhCQnn",
  "key40": "5VTg8kCnNiNP5dzdED6JscxihDtajLX9nDoQBFowsoejtSGDvRUCwX6jJu6RudPLNRVC7qTpn3JAHxKMo6jeGGoc",
  "key41": "3S1tvf2hxmfvjDSwZKYbqQyqMF2U8vnWJVt6eq3hLjzcCh5wciVhZdFN8xFGi4ZEEvFNomuuxNvR4pYm5M631RsZ",
  "key42": "q4qpZcNX2eVQiMGk5NWDdEpyRfEyWfj63PDH2t7GqMfPP4exCqZAZsuguRrvcHt7C939GuCMVhAXJvtugyvyKx3",
  "key43": "5AqmdujwN6dbdVGNo5b1fQRPgVWhFSEVKHZer8Tp1zkZE1aHBQkJT9JDBhxMgJFZQxKeLg3zqC5aejMjenSrgYEP",
  "key44": "4YgQPnM6dAfoJSozVuBJowh4fSn5qPibfadWJo4SUmxCppaEBpEBLnEY2i6dFuQA8D7sR4a3GLAAyP9EXaU1xfVD",
  "key45": "47RDkxbWmK1dxa44Tsvgf9a96GsBZpTUcMp7Cv3ssJZfd1QwpJr676H2VApsFShMQMkmy6JyaEeNonK5zeyBz4k1",
  "key46": "3sVHCyLAayALrmzjs3dLNTvdJJvWyyKjiyM24KuARkJDgoBdwUCUmqK8GaChMD4HqR16FRBMTt4NMbMC1hHHbxNS",
  "key47": "2G6hrfwuby5kABVANNxejTqdirYHD2yhPQ3gmQr5CKvzwgAR1Am9HpBBx9Q7yZWzPCXBECKYbnBJz4iirzusMGBv",
  "key48": "3HyWkAvCkVNyDunKnUX1f82q6wDvh1pEsTB3WTuVvrm23F75JoBpiuUG48Pb3ywRbcUZJwD1MAdtx1A5EemEgnyq",
  "key49": "5E4XsQ6xCvtphKkxKmhosBhSN6yJNoi976qDhXa8JJJLq6zJf9EUcdXDW9YX5wdUdLEMySjwwAey8NwRSHSuZtDg"
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
