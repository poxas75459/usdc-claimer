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
    "4KKSvDrH5SPH6nHSUbXb5W4bYcxJtLerCRgHeN2JJcwSi61RDbs597565k3EzYxgfEN7DGw76Qonx6CvawJvSJ1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H3xMpExvNPJ75vgKnZNuJhp6nvaCJ4S16sSjWdTSJ9NSuYwrQn8E2Ro1Kq6Nqd8oWuAmrBRTHF66YuENK6xKdMN",
  "key1": "JA1pVB7BetsckYwHsxZ4xiXCg3T59A8Mdbjp6JBTHnJGKBGQRpE6KgcTCVumvzZwJfcEPku9ydFBhWmWvgpqjkA",
  "key2": "5zzdybXcjtV6WATFMxGR5VTPjcuuS3Vb15PQWz2SDxnyJ4gzEapteVkqbHCDtdFUxP1mhQXk1uyGtKtMWhrsp96R",
  "key3": "4fvHrCUrgCiGsuoFG48HfitGdYxnLy2FihwLY3wV5UqBmLtJeTfXjDW3tCTB9QXzQs1WxYwKE7nRbbPppp4smeff",
  "key4": "45FBTjx6hbJxWbibETNuTqveNnjQbPuREdBWrKEqPYsJH2ge3BKnc4wu1tAnwsXAUUigm1pNdPEvQp3DQzGLpSFC",
  "key5": "4neAn6AodqGRTuynVtjz1TzxYyVkpkWvyN6unhEuZeSG1Q35BgqviR5Lgs2R2CGyNMuVFFx6ChyNDwKFNLK3havp",
  "key6": "5meqbBa3MaKuRknEusUuzsghw5doagUsuzquREyka5C8Vu8MFpjSCBJEvyurmtfMynbijtvErA8DRpeGzt3KbD42",
  "key7": "2t6CwMYZfhVSq3Qb5rhn3ESzfzP2JhWdB6iZo5osLMJnBtCoVTbYRoCKCigG8z8ZYLgpYnyKCcM5zXTtEJuYe5dT",
  "key8": "5dRuFMX7TmPcrHD9163z4QHXWHLq1ga2DLQUXZzkjTXNBZfjvRcuveYDaSH3XJXeB1xBM1oQ7JKxYFp6UWsd3PfN",
  "key9": "sCi81msP2fgq7YJdZUVfvaVbALrr6Kq6NjzcHo6behzZnV4MmpmDaJsMULUzJHcaPPZELuqgDawBTffxSgPKRbT",
  "key10": "4rEHsY9TaRnPfZSWBPJ1DtTUifPXwAsWPC8xvT8TNjkRybwQp1LvzoLH2rArTxR42H5CYQdV2NBMYFYWWbX4tYKK",
  "key11": "334aeHgYzmXPTxtPi9rwdjZRjiyL9w4v2rbqWYLGn3BPT7M5rwtmoZGrBkhwGf11wppigoTfhJb71vW1gVLyvWkV",
  "key12": "3nvSo1fJCjfZR5go82678TFJr119MENHV5RhP9qhf3fjGLvZJJfqkNVLM3FJMst2uNM62hPPBbiqWpiZS83oXAjn",
  "key13": "5UoJmtso2ETaGQJU6PU5bi6f9mQPTMcS1KZYs95t2CzDQHQ95Ho2rMYhs3Kyq7rZhwqTF9pmzJpwKSvV1MeikrNY",
  "key14": "4A1Eg9i6Uwwrk2oEysWeMTTSBj3UEreNAqguX2cWmCLA27uWHZSCgYSPRZYm3tkTWFwmvY1FVAtre6JKCk862252",
  "key15": "2so4bfCbSAw2yhbDGgFif63GZ2u3ztivHjTccvYno3p2Qf1mFDzSXpWr1qkDUgM8vr5FLQLibPjy3YbAGFr8XSKZ",
  "key16": "27zfxKGP5vi5Vpzckiwa7tZygT72hWRhnfLtQjqPUf5Q9nwATmHKnz8M4maS9CTKzqVaJUJcH4f9sa1JTC6PTCnc",
  "key17": "3XMpLkk3eu331TzQ8xbTdxgZ7m4aVn7oYLDaksgb6nZQ34RpCRWa5EPiJsGz7C55N2zuR88cffz2AXqdnt1758GX",
  "key18": "5H7zeDzJExgMVCqxsb1nBWRT6BPRj16D35inatP48HNSiFNUy6D91Af74VKHdFjMsz6YbCKxiYKMJJGhoUyxnw1S",
  "key19": "4VJFzCzteYpuxJ7AZTUE11LQAnW7YkH4GsuJUxshKh6g923sPyYU9JoLFtJMBZJcxfBAKusYtEaKVSRckS8mRHhp",
  "key20": "evRMPkUnFkZ1Rfa9p7wZREmJiaP4uRyxVYXAAa2XsP8KwPDBErixHddPge963cBsmgnTEMKktewu4wqLLWhoUuA",
  "key21": "2jeb65TsVKSm7EgBiFRV2YpkoLDgNz6vpiCwBAwdjjHL2hmwUt3LZTaSnizcheqbX7xdgDwmY9zFvt1YXYmeZE5j",
  "key22": "57ie1FdDfoDmmaAXUukUUNrytKaV7KukvQ6jchUsHwAqcqAwQi6tMh6ouz9rtR2mwGoc3UVF4Z6u77NK1HaT66iD",
  "key23": "489aKddaBc9ygxFt4yaRFZvz2mo1bgZWzb5m3UVirHcXdPZv9Y47zcAjT8iAcNTW4FbWLwBnYXHwLioimHthm6SU",
  "key24": "5CAWKDgeds69wgUJSyTzvd1Y5WxEhw5yf5oX5icvKxDfLGTxK2iQW8PqHiNaGzwWDfEF9WRFN4Ne96u51viXULwN",
  "key25": "3ZBFWMgsPEQy2UGE4JYt1BfvRpYTnZ7Y3VpNiLzkDN64kEcacBd8M6wWbG9q4sMJDjR6MY2VGb5RXUQvjtYiwKtE",
  "key26": "5bBnNQbegYreje1NaRDbgKYn2bGhrNhiUZz9neDYuQgwthCKVZi8xBrJV3NbtErej9VXVhirKwesFFcBtDxZDMEo",
  "key27": "HvmtaJ2PYJBGpLg5ku8qn3VLdrak6rjgnvk4r6zKb8wUBc8bDcQjdpdwWjJAukW1kV5HzKCVSN36cvb2Baojbgv",
  "key28": "3hLKf1xx3wprud2KUQCPuYZwmvtJdLxpbxKuyyQLtyuvLZF5pkakeRQzFNf71imhzzqtfJSuusnDCUXbMCFNHRyn",
  "key29": "AeGqTg2FwBTp5w1dQRKic3Auzc38kZxyzy1sfgcR7aFyGGADzqLhG3vT4owWJa8Q662dQfY4bfaDv8cdbxQfV5V",
  "key30": "49QAAaFbtcvppVsy9mWD5D6y2VmeS8YvwZCTYtxyNyArm2WrXGvSkSfWwWZU5RyF1J9jyou6vNutRxCAMgwHNdPv",
  "key31": "7Ya3sgXm2Rzm1xPg8VXevgAN8JpwbDdRjbbRMUFaEeFfCzizDzy4fNDEHHpwc8n2fvt3s2eLAvNXBuWZ5deeSaz",
  "key32": "31GD6yKiLmh6JkoH2u3feFHBeGJsuk45FgA25nqbHRZb34XnnK97ihAdH99ukzna4MWeCxZC2qVYYvkwrAS7xGoA",
  "key33": "dDCgPM9QSAhFjQ7LD88XFFdrVsCQuFhcXB7BYtcq158BcmznyLJA3gQ9EVwh43xta13AjZLooiXrk7Ef4RSJYZX",
  "key34": "4d4eDoP7WK7dUgkC3aRxXHMSjv6pqPDmvj5XhbiQngE7LGaceJjvwvM23U22EXJqJZomBt1htunNgG9jdCV2q6PH",
  "key35": "2tTt2iUMqm3nBi1gwXsfQrwx1FsphYRs3pKpQzJs8kYHMdZ8v5t2cbFrZ6EeXEzrXJDGt2cb952a5Kt7Rmh6c61u",
  "key36": "2WCK6HPZ7Qm8tzr4k6orujGgnjaFPTfPULDzcYydguVkSCBp2F4QC5nStocPHB4TNU7bfttpbFV3reZAk3DDccBr",
  "key37": "2LYN9QHEVmRG7ZhAvoAtxEGBR11EfWGT6B9QZPqA18qyY2BgSyLBRsCejDqQAndURVKBguPVjBPZACZoBLMyB53A",
  "key38": "4pH8XVyRJp4hbsquzBNzPVRAiEJbBKR6dtc3G2yBXKSMSBhGcG6DP2hSUpeM7qqEunvYvcC5nwcfM2nhdKkEmPng",
  "key39": "ESRiskeraikjb7QERXZLeJYMwHwD6eKfKm7tnEXLyy6xG2sct33f9xfknGgbY3TGa91n3MTRj2xHfjkYuHyfpDy",
  "key40": "awycaRHuvqCKg5Hu3Ywasw5czMW8KY7cCyuz2k8nmWYWafAW9VNi6XQysErH5MR1HMFdXssYcjKXCKX9Rf61fb4",
  "key41": "4Mnde4kLDC6mEcDDJJBc8CQjotNbyA19RJ4e4vPfcxy9Lz6umhxzjCLVLZGhD7UseDKk4PqUwx7e8tAitfqHuSmk",
  "key42": "5ddkL2TpcUEebfDbotLVbSQbveBha4WbSN42GkyMoVUFG22ZRk98esCGRdeB8AqEwaCxrAa5PhfRzYh15LsLCiR1",
  "key43": "3q54YefYeyYYy2c4BiG7L1xrZGtHRdxXoaustECE8YwDn1xpJD5Qzehj8kmFqoxspmC9JYWHCXFxtDCtFowwofs4",
  "key44": "2tPX9bcafc1Gsom7dK1nFtrSSUTdkiMFTaMExRrtwdPbmSjXEpNLK9Wnj5RHzfaSfAvvDWzfA8jm9S4nsUMFZDKm",
  "key45": "2aAdnC5aAX9tawS6XkyqoJHvQ7BWqoyHxmoAXAQSh75Qx1eEhjy4ecjBF6qZfXVxQN8prv8GJ8taQ4Xg9yNvFHto",
  "key46": "5nJa6thMKx9hUuCXSNxUBhwwmHUCAd1XzkQZPuygupX8EEdFQbCEGwj1JQdLbKko6Qqm1xyeMaMfkgnjGNiBZCE9",
  "key47": "2Kpm6XghMoayPywKMbzALLe8hxexXjMp2CEbvrEbsrJrbmzYHMHNUEdDvDNMVt19JJxt78JikpM92qy9TBWg76wD",
  "key48": "4hP4zcM8pdQMJA87sSyz8cKoWj52Ar92UZaaQPMewmkFdvkjfF9thpUsJXXP8bTbRAPZ9Gn1LaYkkyoeTguCedqP"
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
