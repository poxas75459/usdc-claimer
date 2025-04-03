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
    "4oZoZVcJjzdq8cUTcWLsehgka1bMg8ebRV8FJ2DRf8h91C2ue3r1drQJTLVw4gExthWbWB2a84XFYhmZs1gacBHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w4u7utyjapTrwvooUqw9XQVrSaY3VJ7hLoiwkyE4G5mM4Q8E8QnKfygeGp2x1D7nE4qfEyXogCqiknL5QQWoveH",
  "key1": "vZRBQ9WbwDU4pCUptuZbf5i6252qN6Lodtg2xhgpjMm2C1QmjEwZiHvcdrUgGtWqwuaPfgNPVHjSWkkf1MDssmd",
  "key2": "5SnDp3rAVnfjorFd74Y2CK4Fv7P1erVbR7vP7BK2az9gKicHqiJWiNU2TXbNRihLKrCzwvkXgeutLZmU5nnedbFC",
  "key3": "5qnFy33dUza8SN25smGD64mHNx8eHw4iSnuBRVBrJidPKDkqzF1aH5eKNbcTRSmMaCYx6m99VYk2rj5CSz6GuerU",
  "key4": "5kCm3uUbZtkLbGANf7SMhDwU2p7oM9GHkJb4VfYTC4wsw5zFTnPQm7iMGKwA6A8n5bR5WcxmaFnojEAy3RbMdkse",
  "key5": "2diwCwa1XDqkRGUej75TcWPxJ3nvKhDbXe5J9TGRzEDtmefUxVr57R8ZQAUzeC9Cy2kfkr4wZwQYX1CYaHbtMjch",
  "key6": "2deKpi5mAsjEkTyRsQAyDdAKPKSEJLqW39XViQ2UM9Jz9et6yvRyrQMbWn9bEHQA22RXVYgoBqsQGQQcBm9HTEK",
  "key7": "2Knua1U6vNP5DwmjxYie6VEJHE64qZpZpSsAEZ6KHef2VEwkditWAycky7hR4UcSB6bscibPzsCqmGdkpLbBW4EB",
  "key8": "2jg1eT2uYvbdW3VfwQCa5maN1QEGKea69E3ebSyZHp5cNzLFwN4N6TWZkALuXm4tAVpoN9hwHHUDsR36PDpvodfQ",
  "key9": "WmJsFYTsWHif5hKrqiGshwmwFfDVYTkG2B3SwLLhp3pavfakSSVvaskdLh1556LbH6E53fSFwBL2TjUC8gzxCmz",
  "key10": "477utSg4jyZomUVvrSjUiYKmVm6FdBuTPRE5XaY7VncohhjWZ2fqjx8bg6BMaef7GWr6QZMVyjG2gQ32Q3ZVBzhh",
  "key11": "271McPk3BLBDhbjh6dtNpbybvNPgZUWTWugpDEJdGABwBxfGxFpC66FVDQUarQiTPVspmjyetYXo3gQPPsbnCDwP",
  "key12": "2HPeeJyu3UDms7yoBvxzWxeotQfEz9T4448FYgbFTzuVd8p3NLAeypC1X2GmjAgxwXxAVUG99JSFwuVySXXFSsfa",
  "key13": "2gxJEkbWFp5YY9BiCBSinSMWneWtg5XpS9W5tu1VJRXTs87hu3hGHyQCjGdkGJebySkr2pT4fWT7wq3yqbKtvvKu",
  "key14": "2zxfGZZq7hXGPJqwcepfoHaCLZTFDcr4U1a41mYqDHxPWxmbfV92zNodsz7GeD4ideQYFcM1nSykR1mgXF7NB52D",
  "key15": "ZPBLzoSD818UJLijdKrRLuha9tjHViNYeUtwrCDHhYH3r4BzdvbT5rzEUaj6xPYSkyocd2fsxQRhLbyKJi4wJ8j",
  "key16": "27CcnFT879XaXdY99pfF3SjfofAzLD4NDWJpEUVEuhz5DJGtpem1F5msR4gpgAzUApt1iThMSfF8hy6nsWnc34aL",
  "key17": "3AArNTaSMMcjiNwotNCYLgJCuxtuecGKBEk1FaFpJhLHe7q77yAGBSCyXNVqw4qVsACywcpS3SKtXAyF8VmsvshB",
  "key18": "3dhBGSVPEVCGu58gfaSo9TqLyjMb6NgUA1pBRQMZ6ZhRYe8uNhJWbEWzKW4me79qn6CcczMqFNWuLgrBcvc5MfJS",
  "key19": "5k4HPHZTLZx6oNTXP6ntaFtTZfoUgkmyRLGDcEwSZVpa5VodusG5aK7Jg7d9uYo2Gb8oVeFpzZ4Sji3Zz3mtEUGt",
  "key20": "2xbPghpq6u8BD2QygVSoLRAFTpusVRtQSp8fgmeNCHLtacPpWwNp9ruAwjVXEegAVQbWyMkePSXerRTSo5vGwxd8",
  "key21": "5JyzEh5kcMC5TXQC3i7crr1NsM3fU4CPUbpQF8QMj9979CRajnvXWrXKp9p73gD3AgfRFPPKdcC5Wt92YrBg4MHc",
  "key22": "4bgs3gpKjb6CyoMQTRCfacmL9oKqwZ2H6NTwYFukpgiLd4abZiQd3K4e8V2Npi7yDaDLDDA7NMrrmFS5Zeq4GJZj",
  "key23": "5YANJrnedGRHzLv95MV6iytcMdCzEU8AvV6StRpXmiz1DUJEdvBJtXaybiW1m3raGHTG5JCy4LVRCZjkU3kKRWuh",
  "key24": "4Szw1m31XmUwTDH48Hk22iySL6kJqzAgcLYGykMPN4QdvHewgL9RTBfe8WnudZnvzNxzfr1LzyhdSWGDg6Fips91",
  "key25": "3JZVJ9C4Ahomw2Y1vAcnMDC9An1X981dRBtcG95tj4m4cAGD1zjtfxrBDEewMvf5mcfosMg4h8c5Nt1fkYteZq5H",
  "key26": "8iKd9LQz8icz1ReTKBdgNrjtnu87hfqX8qxpqYvqgw5iT6XtPWE79EVaCpmReWPhWyu2BFLBHeBUVxDrFkjTDkT",
  "key27": "24v8BCQkV7K4WT8hLcGYD73KJERHwpiQyxCdYBR6XWj1PpNjysG42ZRz9Fd5EQyGJwjgu9YiV8ZaiCQAKF3N9GKJ",
  "key28": "3TTRfD7tDvfv7TWqbUVLReyspE59GJjWdA6W2ZwqTppfeczzzVT8LPxABHpSPtykFq9BZUXduQ4u9moF34DFiUio",
  "key29": "3DDUz6ByLbN1HTSCXM2jjFjGRz9CyvA7KeteCk21i9VhP8qGTLYc1dxWsvA6DQmdFNLGFZ3FmAKrjbcijcXjxQUb",
  "key30": "3Msk3td2xJXovtguvj6vhF6CwTpyGJxAZZcYokNo3nmd366GmuJbVBcY1fZtamA4UH5ixZ7wDeS4S4FJmQT7UkWh",
  "key31": "3qhynWjvq8Cvq6VZE6Br4XA6L6YzCFN3kGtTTarCZKDsGpSVPvzZbonmvia5adnEWd9ZgxHN5GSpmmAiDX2uYrM7",
  "key32": "2haznfJQae2gVbvBZEMZ6ckh2pf5X4nb5CcgWdstHiw6aLtdgyZxpxL5xVpuQCACsJe3pU8wMRdvNdnWs1vL5WqN",
  "key33": "yVuSRuTrXH5dNtv7VfWzahtToWSEdQY5WWNa27mrsjsRWryQaspjoGwrbBaJWntaCncW5geCMpNob5Z1oA5pTaz",
  "key34": "7uiQ65BSrBLXEuxmUuSEBxdTzsCrcamnVaxfPjzojzYiwcqd2mAKy2c99fdc54c6YvvFnBgV1e8fTjZRuD2h7d9",
  "key35": "4DsJWRFXnZQ2MPDEonnCyuBcnnfTCwxUBTe2AW4fbPm1xNKmS4Pqvn6tkNkorQ9wzFjs6UBv1mDZJrQf8hXmK6fV",
  "key36": "3z5ZMC6f1HhFUy4tTLwMQCvMseRYCeVcUNoXjukSFtQQtZdT9pEXLrex7zKJGvS3W51feVbsufkLBkCtyXaGKGoR",
  "key37": "3j4g3wmkEr64yQSCtVgqDasb6TWCiz8SVuuPiKPUf5NCHAZA1jPbVwFNvJffVdnVpJjboncteLV5dMkDqURaBrp1",
  "key38": "LLCz5ZsVGapQs8iGD8TXZ64BmMq2UWYHeGdRipK8gCZSN5r76J9FffRmuxNFS6UbHjEFxpVVyFMazR8Uc6XwDJ9",
  "key39": "2k4HTe1NXkxv5ccEjygGoD8m5BHLkkCxVjsVV92nwJg9CiTfZh2Yd2Ct13g7uYAzQYmW1CRi2UZowHFFaNuTqq62",
  "key40": "5E76Gp3QZodm4wTpEcnP7TLvqCyJafuYxsYnpqoXNgfc58hRqwc5swz9ve1VA79yqVCojfu8EdJq31KsPWnKgzop",
  "key41": "5nW6MgWp6cz4NxrpYEDhT8n8xXSRGwmaDtkuUyhFzDpYUpanb6EyEXv7DgLQd7BFibMEYFZCLckPDoT6HQ7HAyKG",
  "key42": "rpthXCcdXXqkrwsfK9SXTD7fnFZ4UPQqwkNrEaxA7nCayANnRgWbQVZcWJZCCWYtC3q5ZSb6ccbzyU8Mejyihhp",
  "key43": "5EFj4PswDCyAYKNSunxVqAJuJnDvPdnqrGmzomV9ZE4HLfEEE884dezA2hUrgqhqtABg2bqNwZaAAVRXPgG8G914"
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
