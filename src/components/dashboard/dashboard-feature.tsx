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
    "2gM9xtmHTvgT86gcZUBdZbvsmitKPmJVpPPdTmphzRRKw48EEfyzxbBK4dHTkDYqhWYrVxCjiNArAgjph8zcjUhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmajEkDxbTqiW5p19KdaRJsfxBgtcABmL1JmVWX324g6zq3Pb6BtZ7hxC5DCkfz57JWEJRrZohwgAByt3FupvLJ",
  "key1": "5cQ5nu9EGH4nUHb5kTQ1NLnr9AZ22zK4hrf8KqXDWWbuk7ANzdYiWNYugysaZe2nDei1E4JwiqMrqawrCUDe7pWm",
  "key2": "2pYpDhm9hJF22GDZ68GSKzuQBmHWKvMH9cFH4J5weRsLAhmVN4iPKuoaQssxMdtJYQwVTNpCkwhJx3A5FagaYoBR",
  "key3": "5oF9T2HGQ1bLGgUoT5PERboZHGVCTBMnquyKHBruYFyKGGqd1Esi2kx19hb6eLEY8ZxcKU3q41HKeYQ2XGQvzwM3",
  "key4": "xR5n2r1UhPf12jyBZFywtejdZDCZKtth97vBQr2YzdPhfthQdkwPEfgZtT2M99tKiaHzBqaG7fw7teuAk942AhQ",
  "key5": "2PXh7SdBYyATqjrshu4LDM4BmBEDSApVWmLUZMB4F8hrJrnWA4LR931nfPxrFTV8ZGhhrEB1F31SkNbEpb9vkLd3",
  "key6": "45JXbDFtBkJAsrfNsMmMRRQaMQDov9JGWdd8XnsCdE7AKZ1T5kpuxvFMn8igDmcmHLHd7Ji75GiJ858AF5XwCcYq",
  "key7": "5WTvqA5Tni4gRtw39VvatkQ8EGAQZgxHnLdGFr98JM9sK6pvsRMrBT1XAeFUaVHZdk6tDeapazoJM2Tyo36fDbsC",
  "key8": "5MfXoBUnoehoaovEgCGco297K5hCkyeBrZ6z25QZwHWUkE7LyLfdaicaQjkTBgtXefyyNj96UXvHQJADhLyWxJ15",
  "key9": "2G3DqNBiQU1Lc79GURchRSziQ18HDnGzjLEQndU7cQU89xtSqH3uQF6hyC6u8MeUSE8tGXF52QFLJ1MXZLKZkGwZ",
  "key10": "4MGsEozeaNsvKfjhtuSRpeyh1af4QPHPmNUzdFpKocjnFeYX8FMz7grgZpLcX7WLThkigHmJQFAyQsLUniDUcnE7",
  "key11": "5RxpmTC7p4vnyBrURjK7jLqrHhxUoicqKdh3DHgzTqzp8zMAefVHCW4hymSiaBTaijm4jbEdtpJJzkTq623ySBZ2",
  "key12": "2JFPxmMkyBbpum789wUugsqfuvXR7KKUjbwKXXp8BKCZWp8NM1YZX2P5i3ojbDgRzk2hAjHLNfUrtEgRPoSbRHCL",
  "key13": "3dtfyJe9rnseWJC41GK49tJvPuKo6bZyBMNJujYm1V3Pqg5uLvtRSsN7NbnzYsuBh9ybuB1j5Eae36PZMX4S9vFM",
  "key14": "5zadH5ezmtXDHG1JdkykvvjHQM1sDv1pWUycpdZwvS3fzJRvE7RWQ9SDmnQ9NKBM5BBGJPKQjactE3dmyHxgUBws",
  "key15": "3ATzaZKqzAGrkiekGj6XtqQpscFJGgZAtPBRvest13BGKrfBH2L9BBX8MZjhGsKhgjSFTKydzJh18Sq26oyDg7vF",
  "key16": "2npk4WEVLeskGGUkQARrKFMeg4hBfQL4aNShUNcjPFRNQg3Ltm2QPJNbmUJFc3verBZpjMFNvXofW4mqzReKLohz",
  "key17": "3HQ6uvbtS9bYwASAQUmocsfmXhef9rurTEZTUBNCH1PBUiv4ahsoXtCQkKQAjB2m56CgweML7jM4bQbEw57idHea",
  "key18": "YD8gkWufEpTVFrDerM7ZCFEM1DrmsCU5nEPFvaRtLtAgpKkXwsGpgEvnyYewHNXYjWuDRjqrgga6VDhw8xkHtDp",
  "key19": "52X8iYJ26Z2hhDefs4UjYNjnYAxa5DYgG5xrMXxwjN9anbkP9LENFLYg28Xu1B1yWgNt8KQLiyuybjFiG1Q61fHf",
  "key20": "2RREH5GDBkTUReL7oXHXojzHavDZSzVPJBHkcq9BeqJB5fvyeJKmftHNRfjV8tkVTzZmzteBpDchKACavKEozx5f",
  "key21": "4h48m8VGoKzWsM2gPogsjs45Q4sPRT5n8oRGLTejWGTRHg3fA4Be5rd5fS2Bgdvry4oXgdCoiu6p8LRMfERSvJXB",
  "key22": "29e5wiH6KkMo1FKApCR8QMJP2G8XEz5RgfcDr5wUmK8HbAeJhqPW1sZqt7kmKtafQQ1yN6mJmHjJUYW7AigBsPbC",
  "key23": "35veoXraSm2KHVfuGFdt5HYUuzSssZNx4M3AsjCewBf92uWLuLfsw6YvrPds3GeCEPw2GQuGpj8vNuVVcFyqdJD",
  "key24": "yN5Wp1aWcQYrpsUif8ANMA2rQyWnk6tahhwvW7rgS7jU5DRuxwLj5kEaBvwUW5RHzPXQZBewEL33L1pkWKovAFT",
  "key25": "5M91bU3hyWYSahBfuLupMgD4ipQ7XcUwmEMZcPF2x27sGwo6ssr3GPeqNFQVrXZZ2cGNDw9V26wiKdvDcR3cWFiw",
  "key26": "3cZFFXy8g3PVXmoy7ANn2MTZVwn8NhLxQ5fXsJVVh85FHtztXtXp6drkiYxg4Ho48stNrxiWzF5PvCD7WEUyXGsi",
  "key27": "36koybJerVLx7w3BPGyzWbY8PBqAD7nsxV7gBzRvMGnjqjWo9EVbjEwDzVPBdPcF8XruB3Qei6C1BXq9125r7JJ4",
  "key28": "5Pu4QrguC7QsdeRAbwQPwQcwmqZtVWwjKMNS6sJK2Vaw2eV2mxiNFZutAzL4ek73HLE8zwUVor83AnknXNeD8r3o",
  "key29": "2Fr2WdUMbecqNfvps6qcgTxQi5J2euSLNXcoPNjNuhA9ycRryiLt7qxpFipe9V6hKhCwsnfrALsTEozPEDvk3STY"
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
