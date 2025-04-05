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
    "2NCdS9K4kvNcXKBSfiRsBR9Wd6tUCp49vwuiz7nZdCUni9w35vsYXuTpScPFq9cV6VKv4iYYfAsarvPDMcuocHqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bftpb7wxpmsAJ9bYmZTzAaVBsRQwqTXM2tSt6M9dSAsM3aQvAyYhvX9BapzFsouYSN5onmcp6DxSiBFwUETdTC3",
  "key1": "5bsyGHWvVa1DE6KoqTHC8KGJZNmbAzM4DeHDfbMDqS7izUZniWkuKq3RcK5v5eNmUiEyGR4k91U8dn4YNUkmNRNi",
  "key2": "5gLLkw1sSBqFRXxEJQyADtcdV6ENXiLSEK9KJHmTg2K3aML1VETDFWwLxoxYmKJXuz8QPKy1C7jyZGBG6AyHC9Kd",
  "key3": "EKB6QjQi8xb7Tp7Yea4XajTLDWcgJFbMMXzEj8X3K9i4W59RTn7euv9CgaPU3RMFz9viYSsXY1wTDH7tfy4AvGE",
  "key4": "4pUTb216Rnva6aJyYvHkmwP9cHg9ff8dRwVgjLfKaLKPrbc4dtTkG3Cejw6NDATg4PykTzLAEspUAPPfUik3jtio",
  "key5": "3RgP7s6bgoRQiRGfxQ1nJzXXRCpBTGd5VXK22VWpsAurEBbqYczntMMFm6yF8fv38hKwZwitg1Y3dzCy8eKfNVa2",
  "key6": "3FkDD5RFGyY29HSTW5ibf7ttmmMbsvZf7VKiNprhzPbYR5oFvxA3J12SUZJNvaxRKCha6RXcnZPGKsB7zz11Xp5s",
  "key7": "XWgBGTq8GSU27A6DANZVerRm7mWJk8nsuBVYSTai6BXVEGzAvun7BsMhvwkzhAnu7aqnLHVJy5Ua5Yw4hBkB9jv",
  "key8": "dKHQRSDyNTJH7pJjrEdRWtWViZGF871bVML4AbkJJJFwAoJLn6SXx7cKmeYpZ6gFezqE2dscQYBWYqcH1AzTfDk",
  "key9": "3YhM6Wq1KrdCDBgHHaFmCJCzgMRVghEn7PbDnvL5ybELAnMK5dstWZJTuPo8re5dcPJ6LpVrqecDn3WmREa5wG43",
  "key10": "552JmQvaXLdeZGE36xMbk2BbLjjZVrxUYBLv1VHvUc2wNnLUsyRYtt3goFFnFPLxXy873XLuUDUZaN8oCT3FPqxk",
  "key11": "3jPeXAndViPJCpoAp4VvLqzYnmnPgECbiZ7DWZkSqkgxz7E8WBpm7RPz8VFA7Uvjm9KBY9Q8cnMwPKvALuJhZfZn",
  "key12": "3R345E96nK7TMq9yLFnCh8kruSfgjesZNto8HovvqdA6SWn8bVWdHiRcTqpGGF7RznHxo4fNSbUzZUU2k7Bjejd1",
  "key13": "2nLWQmT6Jz4vfaT73dW1M42gJF7CVdkVwvAAomdd7XhrVyTRdQZAdd8bxVbQva1Annm6aUAmCsfsdKqqWEmJAHe",
  "key14": "RWh9T2BcVkvwb4RZ5KL4y4HHHpzbBaKxaKKtF7R2tUubUro5cFxhuDb3whcn8knagfTMAZWMMQq23oZ8i6vmuqh",
  "key15": "2HYUU8Snj6jAiNmmJGaHjZ7SsWbrrAMpvK4txajwGqbhzyc9burQrnGQnMDSZfz1Ma6kzURkfnWbC2SNBeCbpLUr",
  "key16": "GeqdcLUf2BRTxNcdei936UJjpH32yMAgpTfMkdd2BN4qzDhVj1QCBJjaAB1bLvxdk2mN3V2WEjXfVFKFBqF59dB",
  "key17": "pGM5nt8U8Y2ENSdHNexK2pKLjas6tKPU2NGKyvYuZkiD8LbhiVQ2HXaQxzXYNLrubHgy8CZr4QnaSZaJQKxUeGn",
  "key18": "2APwNRHHNHJudbzxbGJ1jRBNRzB7ZpyZ3iHtpJh6nexJuAXF6dCDHq27WGvp2SGb4Z2eyFcv3EiNVv3z2kZJxzAN",
  "key19": "3jMfwy6tJasxoSSLTQxWgGfrCvZP1yW7WkNeUtbKTK31eiqqFEjBVV2xzJy6nrGMtYb9wCynMJJYYqGWjRRHc17v",
  "key20": "4yGuEaor2X32RJsh22kREZwUU2LgmyurydjUX54rJ7KZ7QGze3QgV5NzmgP7B2uVksLSin5mR6Vzt7AxXqkVmXxg",
  "key21": "513D2mkfYDzgB591rKaaWiKG6TuxJWUHpUB4digZt6Nv2VqctxYANexwKkEYQ37aywuwdDk19ybJY1PEikZxf7ZK",
  "key22": "21D4JMUHtUqSgRLZECLfvkivT4JNQR5Hb4NoKymfYXpNbHgunUjtJfysARC2oPY2aPQoGfhkZRuKyDermvK2pvFP",
  "key23": "5Gp5hg7zZDMPPfwhx7eyccf2zPZs4ohBRhKzVGrrshmUAJ1KuFmCf8E7dhqRo5Q5Ea1Mqi7RNBpFttWqWWAqpRc4",
  "key24": "5foDybSBmC4DprBf2PgtHYkYtkp46X1tZGtdF7WA4NXhHbXaUYoyeAFgvh8jHLir2t6r66HAP88dW4jkLtWoBTAD",
  "key25": "5RiquscKjFuHffMfcWJL6F7QVTcozNfDjrCRNpDKpXM7Z6z69KRxA5af6uKjaJfb4hoTsQQTes5zYUqZZyRPA2A4",
  "key26": "isy5NhHqPWEsiy8J6u46Bp68NiApjfVGPpfLDUAgyyGcqr9DEXFCuMXCrWSj7QoEAJrY7tBkwyn46ogRcTAA2dw",
  "key27": "5fjgsZ6YHHG7MsPpJusnrHWVi8ycQoBmo7J6cHNQzm85CUMrHEBykBN1osNH5tnVBahoU9qNjdYxwUgxKCAvyyDm",
  "key28": "anpY5QkTqCFbACJaG55DUCDWQxrLF9byYf5VzbdHNRANzRLSWqSAjaQ6JmJZKJE1MtDbYLfTravrzXgfFGiBzuh",
  "key29": "5cgsanB4KEcskEcA2iCUJrtuX9nagEfUoW6EDmrA2guWU69hghawnkmRD1gKwu3ePovxLrXQZUQNur6fvmZPPjrr",
  "key30": "3KZkNAhBv579q45o5bDDR3vyxQ4e6EgJES8K6jfvypmi8E1idyfUmmdpf1nT6e2VsftGo3z1LQhWDgB2uSK5MZ5P",
  "key31": "2VULqLu4SYiGtR1r5Vx67k5GhY5TTCcdaxA99ax3pAehNteE8yEPi9GWjmo3VLcFzGRGu9aztmSyET4Z9suVi1r1",
  "key32": "2dyMzs9HcS4cf2WWLk71mB3qVVsbc3TdDdePrFUK2buUubWnTX2skeuBpfSCtspuLdtXXkZ62YNDU5zaxfSZcWE7",
  "key33": "2dVhKG7PCxzsshJ7woBTgvMK36Sy3s8p2fdyG2u1xEuLwtdMHTsUKoFmHTRBqXysk4ytJz7nMBWeKBQTW7VwGeY",
  "key34": "5axAyyGJ56sBLykdnnqdKqqMMdbrwzof2LDVFN3gVVK1xPUUqHxNcCueH6JAeGVDoiAVz6nLhPNi6uSytZfgsAds",
  "key35": "5uRDrxNJZn81JxtUiCZg25DHMUPU8tKsGVnGXFSuEQyhtH67bTdvBVFEdQemmmdtrTzgukkAUw5Sr3cyPNx72X8T",
  "key36": "31mu51ddiUjSRJp6ZjboqEopSm3QYiBy9BpCspF5AdGGW1ed7u1awKxe6AoT1aWLXoQRs8saS4QnDvM3McuoyLLt",
  "key37": "4UmggiMhmiymqbRaGu7SRGR4XEMKzLH4mXv3vhqKdwC2MbZzbHoK4wvHsrHgfjqN56yWuMPAwG7znYRtETViPNTJ",
  "key38": "4phPANcxPTrqSk7ccKYnSka7gxWpyxjoVPQ1352eUspH1c3hyfo2Qewr89CaiE26J6J3wtsshks99XZfNMbGiqaS",
  "key39": "wfsUd5Ydc1M7fQngVaPUFzvbCGhb2Tsj4HTn93t1qokWeKJuynXkoNauKKEdfuX2vpyospFDnJ54aYP9Rxs8PpU",
  "key40": "3kLk74apRrLwopdkkLTfUF4eYeuszJFGovE6JtaaCM7YWbE5K4JLhFPwS7RJAQMpZpgTtA9j3EN868dSkwbKdu37"
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
