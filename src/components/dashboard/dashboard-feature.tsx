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
    "338jWRBAA2ifZf6RW5mPdLiAhqp7z9XWKLXCayRA6UzBt8U9zLaF11MRfrshY4isacyvKAxboU68o7ncgz5umEZb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7eumhAwj6jCVqTjBZBFtpei4zqbMiF1KtR1W7ij8FH3wswvS4kD22vdX7rpifbhS9YTB2PqeQkC7ARaLU79cyQd",
  "key1": "3koqQdjkgYXsFvzymb1fjiXEhLJ5xYdWt7ZHFstQD7stXGhWBFYccZvQsUsZcpAM3oyScNJGXRRF6g2K7ykFZuxG",
  "key2": "5eVqJ7qjHH3fNx5tYKNt3Qm5qpre2iLqQncmXVxUuwLt4RhJQonLQ9P1vd9e9kmJuErjuyVzXcM9UvfJ956wuN1c",
  "key3": "aQw4uMVRx2ry84CfKwRrNqZHa5WWknBkdKdD5CAvQSsmfEeR9iRotLuUUrCQnfgHqPqqE6JFeMKRXtRzWm8soQ8",
  "key4": "2JVaDerngXuZK8cvek3cRRztr7icZcFSRXuFMo7cdyZyqhV4a8mrwii8FwsTBcA34h6bBCXpgAEafjGWKrCy8ssa",
  "key5": "5Vy7t1xGYiU4zkYQtC6fz8qaY3m4jGXWXw5KFrCDig7gGHEgw7Zau13EKbrmahQEWSniB2r5SfLXAUXAie4ZcZcd",
  "key6": "WTDQXj7TcQk5W4QTxw6GA9DQ9yUMCzwosp4fxQmjiLvi2XJoYBnXexUfRcHc4X6cotBtuDkJKohKbrXgXW7E2M4",
  "key7": "451toRci63ewm1oXowuF9HbrJXsCvNnDRHu5Hvy56QbpKVpaREK1LoNswzkybLRbihSdq3nZY28ohMGsmY4y7J8V",
  "key8": "2iddsBwCfVrGAJgHtNjFtyPXWAkXYgqKH3Vpm4ZYvHTEcB1hL5uiLD3NE79BK6ujwacR8ftqjJZB6v5waC21bwCy",
  "key9": "5Ad55NwF3bgU32ZCy7VJf227JArSqpnwcp9bpWRgFJZiAt8SeFFjB9waiVHX2nwao2g6yhUBQFLrNYZ9qayJRcbr",
  "key10": "2j3Kqc9TuKWNCUp1VhEumCsg7fCebnSqqsNSD9vMEwbcsvZHCgqsWDF7MZSch57hdztesN7HnLJdeUeo6kQXt6U6",
  "key11": "3J6ef7irQbbP5pNdCA2q2t2itDogT6Np79wrBFq1GuaMcYstqt73aUg69NWpfTPWaTk8UUnUQgR7mmnjwp5TiD32",
  "key12": "5sVM8zjJjvpHXMgYRMJYs21z1Y9iFyPEgXcMgnMz6sP48KGcmFnd8ijHMK8kRUZ3kUieG2eWwKpcXEo7Zrk5SXcU",
  "key13": "5WfD36dsXAe2UUtYfidFUA6uBfmFwBWGxv6ksjYmSmFAQkwW4Zm9p3vqnN6uUeMgAYBwudiztDwZ4rjHeTHEs3NT",
  "key14": "5xa9meXvXkc5F7LbKbf8rtHADFBYvYArz2wZepmD6j3MNuf8USj8kkvWHJiJzbj5qDnGikZbwv1PA2JbkLHefhoQ",
  "key15": "5PMkfmPc2TXKnS2nApkuuYHpd3kmDNsMqpkhkZwJkHg1NXF8Z1L7AgrbW1UVENwdCtZFh1sSLGoVX9zEZeWQjCdP",
  "key16": "257ekKvDiorVNEyRRgfC8Qcdeja7GH7BsjyTsG8bKGCFkukRWdCjjb8eS1amArdQG1pKmSrCPPjtPWKEvThPcSSX",
  "key17": "2EZi4f6No4cGxZpAEwUUnNrDbisjjSiUXf8r5o52strpyVzxbgZcPxdgdnt1Q4ufkPZmnYKuy6BEJeGqwZX2RbZb",
  "key18": "5DHTMc3RxcZnDco8kW8oz2TFBRf986ebKqmLpaWkVKTyXL84QZJQw81YE8HqkPVQPL15LTqTDDT6243Wfr2ULcdT",
  "key19": "5U1PaVxyskNNqnSSUZZt5oTWejotJe8dbnQazBm17vvLy9Gzuxn6cmaQJd6kCsr4pPUPRk22kET5kjbUL3nwZAuJ",
  "key20": "56WS84g8TUcUYCQoGBGgcTQsJ63RaSkT42GFzpq4BWTzetsfKVnH8dLYFSNhHKEQqAy6GsErGyLjF6dZNwia8CUn",
  "key21": "411WmNH9xaFBtYxr7NDKAfnxpSJ9NXFYKjbKp4mxUG5uF36CdAgumRXeS9rntu15nKrnwm7kFTyY4XL9fKMW1Jgu",
  "key22": "45SkxYjUEhEJnPYJXyjW8ZyNhJuGnaa42Xw861C5QbnAqHYrGcJ31PVeae5siQohvii6SBNWWaSREFZBpNuheTMj",
  "key23": "267eNPoRrKJpx4adLtBURC6fqcHcsbk5KqF3vNqUasLpFaB26VME2GzWoEGpeWTA2PnGnoHdkQfD3nm5fL15MzYC",
  "key24": "2qcmjrD5rKoiU36sj3FTLwSs5MCLyEBaevAuNkUsYYAj37S6Mb5fUTfNVyj9WRuexSyWzmDMmxpaJRVPw7CvBZ4f",
  "key25": "47teCTSzM1KXe26zCuP61G5GmKfEN76nTCnbmA5hMCcxGvNY3V9vuDYn4AWpNiXY8DXjwcnpXssM2D4Go53CGki3",
  "key26": "3GjQ52ii8FC7bEjAFVLhdexrwtNTaVX5oU7HjtH917nFfv6mtSp6vMEjmPVqTGK72hAkGeLFEEa3SpMVLvx6XoUH",
  "key27": "5hYTEGZQoag4uS9rdLTthx6nXo2pcMgyKC3LwLbK3vr6LkMZUvczLyfCZVuqZoTgc42R8HDmt5jDj4kVbfcg3LBt",
  "key28": "xmsXKw1m3T79te7eCqpD3nHn5cJUX5S4fMEceMnHCPCTmAJatRmBXKCLTSjWdqkD1ETCKtHmeBPBdhfNKFp1AqU",
  "key29": "54gJ8Ux85hY3A5A7vFCrfV3Ep5rGxtyj5pRJc7UjKn3bhpLo9oGNjLbPTHj5dq9QHH4KnB37rwWMVrehKzAwmz6Y",
  "key30": "5iufEqGPjszESHWKgUsds4239D8knhKeLRMDR5xJ2Y4odEottdYau3BYr3Le7XMJRtHvZWBjymTMzr6BSJvBhXzS",
  "key31": "fsjH7W1KwwH6iXj7cpRhwfBHR9vmoD1eegkujaYQvLaukgKcUbESmJo2zQvmtsCeqqBqVwGruarDPNw4sUQZCSL",
  "key32": "5LJeghu62vzp8YmeTMZcuMmCWmhm4T2oLEh34KfDYSDH8pHqcPY3QPxi5rntugbfcrd9xNCnZJmAxQTdr6fsz48b"
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
