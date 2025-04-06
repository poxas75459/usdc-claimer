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
    "8t2ayZq5Uzdg9RFJwQ2ZGM6Uxb4VdRymjXtEp6U1c17rW8YcvAeGaCbZcTsFdvDgACvp2X1UZgWzii5qEk2Mu5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h4zjCzMTZx1ZHxLxNaNzM5iE5DoxEyi5SCqsGX6VQ1ChwufzEP8peu5QxbTv8yRjHBSMsL7CYdsiyq73LcB7Bog",
  "key1": "3QaENSzZrowYx2AHXxYc6WUnba4n2xt3wH6Vm48wigsqWwE5BnQjfG1VPxPQq6uU5bM2XxNqqDeB3rdhdaWTnETv",
  "key2": "4W7JVpMh7cJ7gkUMtvSquTCYdixyCNFJbdUCP29dNRoxTjXgr9nsJZYAF3ZvcWnQHao6Shb4sTew4M7w4d35TLZ",
  "key3": "5qbUzvXxDTg5KaWCotLTFiZVRfebFLBe982eM9yQJt2P5d8c3kb51mYtyE2BGw1rspCUP5kTMWRXACbGpqrn54v3",
  "key4": "g21hbyh3KqHtyuMhbV1g4wP7uGRLUzbkCsDH1zZqvMwFUp167FwbCnHZVTmCjkAcKYGbz8K5iQinKfPWTfX6k7U",
  "key5": "5yt5VCgXKZ9naLkh1UX8FgSsnFgbCrXgnT1nEkuAnLKFhF89KkRoWJBvugPWA8uioW4RU1GGgGK1ckniv7y4qRw9",
  "key6": "44BBN6M2yCugasPxDAWnwuU6Anqj5vGDgfrqRgF79huegdfeK4GpXvwkfLbmwn43vQx2CosiZEyA6xCmJ4EXKSt9",
  "key7": "4rAYZT3nFphNTT8w4b8gsobGYnsbfUqGgRyuGoL5bZuDnKVRn5NdM5rU1HWNwJGzffNvfUz7qdW6MmAP2bk3f1Xv",
  "key8": "41cPyaPR47wV6UongFgHaKBZyCFcFomwnW5YQnbaGWjXAqW8FqaFz459BtmbCzbqUFAeLHRhFbWt3EWtuNCaEJZ5",
  "key9": "4mV9JopbBbw3Zo37eE6qdWfzD112imDiVYT7hpkXBcYzdGmYXAWMZiBKP5iGS5mxXSnBkQargzgNbDAcjedsAVVV",
  "key10": "4ELZZJR55GXjKG1hYDiWL9Nkw1d29XJPHpuZHH38CskCyR7fuWY8GezEJWjTGVCp46WnWerJZVSoNkpKNqPyc31t",
  "key11": "3rYqw45EcDe8ydLCXozmRaQttnqc1bKa6xdTsvr4eZjsBffEvfdvgwEsSerhS2qpxVadSnh1jDtsKnrCq9x7YUwJ",
  "key12": "33WybM5UQRegdPEAXV6SodnWKdHeMxseJsdhTpYRXFQnDR69v8CZZ22uZ3NzzunKSY5uJe9Q8RsPkadxBMvPraiP",
  "key13": "2Vtz7wrTRWN3HKFF6NqhiVp2yGuf99J6Yow6Rj7eqVuL2tNbeUGYi3z6iHzsonRWeMZHWAyTmpd9BppnSP1BFM9r",
  "key14": "4X76PjK7EEWZNu3gtWqQLTN2dL8L7iWJLC3PHppprSyJ1JFmXr2BU2wwp1FWhkJC1czudNaRrLktEHt7XZC61NFe",
  "key15": "LHLi6fUKyxvJX7BhNW7iUQw3bF8z1t3Rcf8QYTNFTWVqc1WabPpM1KSwosALTVQo1qe4K2eKhTTUgP1CrZ3bYrH",
  "key16": "7MBP87oEF9smjP7nytNhcMBqFQi99TK3VzeEHSypAHCZ9T9uwMZ2ZJaVAQZDmhyjLKNYSFNbcqm7tB7CmY5b4Yt",
  "key17": "4bETLN3AiJNURHveCfWxHv4igVvo4DX45J37na5ktq6WPo4LuT3LN1m95Ji1xRTYKVmxQB3xncUM8wM8F13LhuMp",
  "key18": "2EAi6jGtJPiXs5sswkpCg3DGAFdKg15NZgV3zETdvLrADmDMHd6nEWfbBYvrLP4Am2m3gcXqgDhhaZH7Sto79WXH",
  "key19": "2KEbLNSXzA8gPFDtaQA481CceKSZ79ngf9JcVkGhkfDRHnUf15wKkXFJEEK8jbm7jVr5NzDuuDuoSb3FSa3PjJSo",
  "key20": "3qsqMS1WUWYnQHCPZB62Sw9htYZLcqLfbPJLY5XNSPHN8kkjoHQowh6A68DvyTioKXRVUL3Us9RE99j9hpCnWrPs",
  "key21": "5xsSbSozwMMP5SP7f2ABTXXP69TLsrSBLiBXFTytMJvhFK7Wxp1WWL6MWaBFKpUFnoMmdLud6Vgf67vXgrDYyRw2",
  "key22": "374eg1Cvuki6rhnZM8donhQoHy8C9EbDuDpD3SGzUHeZguMSz9b6iJW48eXnbNJxTodeVfHdftJk53DbccANhUZa",
  "key23": "3xxr3TMqy9dFSXbb5PSRrLZv5b6AnHASTEdL9XZyCDEDRhSFBGphJUwa1ahtUDoDdMSbRYMokdXKByMT5KBTksMS",
  "key24": "37R1t4ehm4Es58tJqZ1g557dFSGSoXyKUiNKTbu2PhoRsF6mJHe16qsciJqrZhMckNja194mjS4nrzRiizehtG5N",
  "key25": "ncJmgNubZNfx7Q336LD4grgqmazzvNKR3aYwkkYLES8GKopxLvhN6qcpvhfrK5oZMVWa1Syukbz9oiDG8r3tcut",
  "key26": "2iND8F1ggiBtNHfaCzerSVGNryqTAbLsoNVq8YrbYvaeUAJ1tTCq7TdGruYg36bSZcbtKw5gA7Rz4dX5EgJ1VSuh",
  "key27": "5tKmhHK4RcUbPtEweY74njARFfXxjD4B8BJXUE3nsDbN9huRZjqnZxg5aqxBRAtQ3fVQ9jkktvXraZF2sVCtJD6w",
  "key28": "2YoQKVeiu298jG4MZ1nd7rc5tyCmTR5TnNYKFEFD2URG6jWJT2kgRGDHRrmogjBbb8F9rttk4GDmJSNU2Ri6kPss",
  "key29": "4Nen9Uy4RpWNUSu1mndkCQ99XzNNc54uK77Ur2vhh5G99Te1eWRLgeWwLc2uCYqbXFiLdiHbgaXFx4rGw8osMuYg",
  "key30": "3Qs52hk2jZYd11GWvHEjMrJdLzMSSxvPAVyqjhgnxcMFGki6MXZiAiJjQkcB8mnnbm4uPF6LkXkym8eSUczkdYRy",
  "key31": "4fb7yq4ptMAATUjTAzFnDJx53TYZ7ip5oASL4fo3aCrqeSPiRYb37F8TNveFjz8vPBbkF9mChrJuoMZZYbTmtqB4",
  "key32": "7vKyjKMspYKF3V4dkePyxSer4STe7CYXQCcNgeeYDyH9aqgjCDhKSYPN1ApRqkwxBTCutXSwcYfrzmrrGcDPVwR",
  "key33": "5KgKBWcHzV8pTXoSwzSXTW2Lq8wMueHSiZDABoXfbCdDiNDrnqJ66wdnFYvVHJQ3D9JwDASM6eEUW8ziHVjnaa3C",
  "key34": "5tjpgHkW1oTvZw2KG12UVK4vCz2YM5xxiWe9cupUhUsHwNgMBVnLrn9BhUkfnaqRzTwbq8Dr4Lz7Zm59hg1WaaPL",
  "key35": "5deP8ZuhJiDrBw9djHHSNCHMdA4JcRYF9CuvqhpotaA6pxxNMxHSFP4ufq9xn4k37dk6FbgDjMo9HmA4dED4hku6",
  "key36": "2nuqwwEkDA2nFq1DBRJPWiPBoKioWwXjDfCFV4mGxeeyMdmpNzMy3ibzk3srRGARkRdA2yzvkJPphpRLk468uYYL",
  "key37": "5pdkYUCsaxAyfhQ6iPvgQfLuu8FBKxyKZJ7fYG7exHSfySS582ihAeMSLrMmjUnSavx29iEmAnu6g47NuHNhMJeY",
  "key38": "5vFT5EfrstvpefLn4iZVEVbAeiKeUZCx8nbSZcnvvggSmzGejZ1HBKRMJDJnpYqX3xJzBUjfRZDjauL5NscQvUf2"
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
