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
    "4gk5mWo1vU8bk7iaQoKPdn7DmEQQFAy14FiTjDNzeg24FwG8zdxYykPHVkyNbv4H7JxPqjkM617aGaFkoEjsbASw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oERw2jqkDgLjwjohaifKPfjbo9rrmouCs1XgS5Hfd1GYBG6CAMT6XG2svz647LTZPpLFeeNTQDtWKpYwi4VGALb",
  "key1": "46wVYYBam1ZoW5mG7LJgzWSEEhbqn5BzYnnrE7m2LskUGN89mkwkPMzA7kfxQDLNCcdPfTZ9wLhpdD7XhrpjXepQ",
  "key2": "5PN7DPWxN2hwErqu2EFeY3HruamZdYoZZvUiJcbhTaa7pjSrkuU3mSm9qKKYqStMHT6kyxpC68TTjcHChnWWD7sX",
  "key3": "Ac1uVwpYMRPzLzH3AyzsjMh5tjrSykE6wvwRyHWu8a8iUf9fXhyUszPQpSqRracJAvw8BVczJMPRYx54rq8JfH8",
  "key4": "2FQ1G9bz8um1fg5uMeN56ZL2WyjWFPCisFu2b8aHptiqDKmVYaC7QoshAATVtjrakrpE6Z5kGSa5kvaJDwRjSTdF",
  "key5": "3fgn61GFNYka95iSqe6Fus2WXd6PoFs2jkBCCULAGJ7HvaLASKquhsYppokh5pWcihxmzWS3FBxRwMpxfbx2ULM6",
  "key6": "5Zq7YEEEPobFmjnAoREbjjyHJjtrDAqFAWDDmTEznDkUk13EqDh7UhYs44jNr74RMaEziefuZTiUEkCA8c69STm4",
  "key7": "31mrFqATe6j9DtcuoUYiVXArwjQQRLfK8uvZewMXdh4r5Q4gaGmaCvKX6iUWrjjHw4ivggMnb17aFnBJ8uG5Woaa",
  "key8": "62skoF1tT9pCbRKdvU7SuTgSAsdFDpveYKr1neU3WzCg72wXjfCewpQHGXFM5vAxfFCYXccT8X85YyoZnf6cT1V5",
  "key9": "5Zyf7kW9pffxaGr2abEMJknztBPsXVfGA3UQm2qDiUz7dy6sVc6xVP336qvkDysotjxCjQKc8KTtFGw89K6uqV95",
  "key10": "HmNyPNX4ebZipGavsKNXhDzJfjG6Nok4PqffjVJcYRKcezmaosp9jH8V6Afz5RGiMP7M12yJZym34jPgjFBBgA8",
  "key11": "2huYG2GFbopZHhmHxQtYUa7aUwejkXYNani3h1wBQFzJKzwwD3rydTLzkkA1qtmSVRqGX1ujBuzLCpXLEtQppy4o",
  "key12": "4F9M2AYpA4QjdgvRZDiDdAE7ZbjQkDreKH2o4CqEnSDURvBBmFqd6k4LVCyMFqX9TGzSS8vvpdxUxGauUNsJArf6",
  "key13": "3yMesxgRG8iZxhmQQNHxvfEGNhW8X5aAJ3811LpmFLHUCzbWGivG5UNaCkXJWZ4rVi94wE5uzfNYgdcVL54an8on",
  "key14": "yMTvcPEqPMyFd23kR8i6xEiDS6wZtteWXNApNbFWhZY4ND7fF1RpqKddQdC1DYAquuswZdYZttzfnBhdXfqqr1Y",
  "key15": "5YJ5dWafG5FvgwTKXPH2wKJA7VH1pZQgk2w7dHtXv6bkmVpjievFLKM7RUpm164hqcrna7wr4b35vwrAV7zGY59w",
  "key16": "4DvWKpytw3EqqJCG2cx7RHmrkzmkNNdHiyQi8uc2VJvs6vCKBWUu1t9bKVCJ9zNckw9jD8nr1vahrkoNEwAD1KnQ",
  "key17": "Jg32rcSjyUDuUQkDShMTUQPncTpJxyY8EMU439TfeQhu1syYwae2fKw7bVCie31Fw7HujcCxdf3S9ZTsXrXtpff",
  "key18": "5zQssppce48NSWFXzzQgyCDTDEUGAtCiTLkjuDeEVGpAjoeBiQSHPpmXjv4ZnRxxDkLtjTorL8EUSSSosgahhhHN",
  "key19": "3AoGTxgtQrsdTC16awtYmmGEDCHHEaEMW2E9HCzYYw6iWyP6XDG33LdcTWX3ytYBXRVB3xUXHVLvHKnUuTtfQJKL",
  "key20": "jXgBHJkRo1iFdmYrNyn4QV48UTFuhUd6JaGf3GvbnLakofmuGyZiQvPygP2N2EeVfJr4cMFxrYftV9HN94Xh3CK",
  "key21": "Th5Pq1ev1j2LeEamjGy1xxHWo9pgGNSntUViUuYgx6yphg5MBbkhiSzFx23faT6ccRSEQ12avzx4eR37pxYNHmG",
  "key22": "vUp3Q3qqkxL9xf1BuD24TzQnAZKQfcQQa8w8ZRBt4pjD5jtRGwBnbEVbzsTMimXsK8nUz8CKYg4hEgXJ354QVG3",
  "key23": "4J91QS8BJjd8YEVUqRtXe5uJ4N9sGztFLmuPXCb2LVVn44F4TBSUmvCMycx9XpbKbMY6FtX3F5GjVrFMYKjr2rgy",
  "key24": "5kS9NFAWURpxjQ4CQjqSVx1gMAaLvbGpWZwBnx47BmvyRmUKdDm2cgSxeUwXLhyQhum3r2tCQCNKH4sm5srPoZwz",
  "key25": "5CUK2XytwYedW26tjRV5deorUA1hYDf192Gi5WZoYjiU7ypQpjjhze3ssD7rBhQgQjZLpS9JdiWx2YNou7HQYM9P",
  "key26": "2xzHpsML6tWnaTCfoXYtET3GQ437ZD8DwsUPRiKnLXCBTti8GqpyLDKZec3Dpk2Vi8xvBMmDexcXQnnsdixW7hZ5",
  "key27": "5m5nnx356xuwKLqQaNFgUfcPdGKP627iLb5jdBuYRPsDLgb5AthcaQL8aEBDvdQiCruprMyxNgyPjRmaddpWwMcq",
  "key28": "4gxUaK58SU2PqnhSGu7Pc126Xu4qPsBUJR5cgzGVCeizVHTndVQBNqiHJMG1iPNVJU1GGoRFcLQgm5nRSHB2WpDb",
  "key29": "fAcuCHzMo3UcMQaKrQimrbjV4oYjagVFbEKEidrHqSRv6oK7bg3avnr9WSgaQhBpuzsoY8VE4dEHfr4dEL2vfPp",
  "key30": "4bT7PAnZ8M21F6dkDKeSS9BJiDBDaP6384MGkQJQ1gH7MSqoTXbVmT6Wvbr4zNcpuRqe9ML7SV9YosSMuEvvMekw",
  "key31": "4Xu7jgJi1QMPbtrZpJkYi9Kn87Ton9fv8xYTASwsE9vC9Q6Y6QarTdfrfrRN6mFkdrqqgi93YaEjXcJACV3fw9MU",
  "key32": "XXWrDa1RgLVsxaHGWVEAfdniiAScfgkp5tkee7JBW5bwJeb8WDn7cFpDcaYjnF3PUFFpW9dXjDnJ9vRpzUi8vNq",
  "key33": "sRPDVvgcrE8DWaCVobmaQC9UAJTZ3brV8anSptdTfGY94zyuKooz55TcJmEAPQUDZ3a4yrTjgtE7CgydiQFpB3T",
  "key34": "7GzesB8ABhZ6kcvnpgSpXKu3C9yL8x3w2cRkoQJNi8aHbqbqdHtPVaMe8JFYkMazRZqdYHucDBtiNsaCVojsQFm",
  "key35": "C86Zu54WN36TEFxohWVnPW5dLpfchG6AcjmxYcWHtvRCxhj3ehqocDDHBsZdmCCYPVvEEJ658pq8y5qp37JKm23",
  "key36": "3Q1CpaXXJSCWUWkXN6wtxZT5yQKXM55JsTW665NpvNfAvpWiLBWrqUwdnGsquMwYyz8sJHBe4UJNFMF2FPGXBsvA",
  "key37": "4k3bQJtro7tat31ioSCWAWiMQfNu1uZw77KgaUn9ax6s7qHRsizH86Uv5iziwo2wR9orK3kJQdZVTELBzhi4VZZ2",
  "key38": "2dkiSjYfqwyEZKzX55iJPDC6tzsSCCWAPGz4Hx8AFywU6aqsbtEBdJ7pBx5kujLAGr5zHNvqP345HhZd8Mu1sHYB",
  "key39": "5p58WvVtDwc9Q2umh797iRKufpHNXndGWVEgMfCnseMwuPX5prh294fgAMPpCfideiBAnzYVX1CmjUbeRRZMkWjn",
  "key40": "XqCAfn8QCeuZHKD92AHEw4zVbtZ9jeUdP9VrTqrQvZ3P4nbSpDRgqeCYResx9qseNsFYLs3WHcJ7GgamLojhjhF",
  "key41": "61zeQY62qXddfCuns24i2eLsbDeTNJSrWSDe8o9W12Rub8sPscoyqqPUuYssyTqHb63D5jDAPQ5M9pqTeTQP6wZT"
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
