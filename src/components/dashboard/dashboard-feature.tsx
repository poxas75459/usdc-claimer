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
    "2fy4jEBa1sC8ZuqDktce3LdJ5Z7uNeV88ue2Mg44kS3pEqxVbLefAvfXesY5nDERsNt4827mAqrwHywQiVVX7mY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NgmCh1PHW3GxRSTNjpxqKAbAfv7Q7SbFjUn6HudTKSd24AFvtkVohVJmfwcamLfVnEw2Qn6WxVJyP6q5XMF9W9m",
  "key1": "3mgPH5RGdeEU7ZmnG1uBMBB4kQmyAEgHbHSKg8XcQNv97MiCi6iFW183NawMHftbpgk6PvQCKD8dciLWN19NcqC4",
  "key2": "3439aX5oyPiBNqqKGY5Hhvvh9ZnZX4xamiP7PqxoJts7Di6nyyqbrAZPHPGazmZam6PCGnnkdAiR8KvHa2mzVLxL",
  "key3": "3qqhqkWkQVbs1E5XsxXszoKmcTNcPJbHHc8LkHm2fkotQz3taq35dxQbTPz8LYRedPkKpM4zE5a9bjThW7gTDg1x",
  "key4": "7q1pyDZUcdox7Ya7d5shQ1WPStLUnsuTSp1MhUVLGpxKybnX6zWqDYpnxHCZv6WytN6t94416B9vQws5XZM7TnK",
  "key5": "2sNDVb2DXJC5tKWbKE5pSG185etmRAEwZRDrZEHhwEDpTYhXwP2jzeqyH79Urr65E5rrq9opJ6ruPFnWNzuSLT2T",
  "key6": "RQPdEa49zEDNxonnnzNW8iHvZtm1ChPNHuxp2qdVQrVuRwb3Zicq8sPsEHxJ6NStegfdk2KcsSfP5XW6boMHwc7",
  "key7": "21Q8aAZv5UemfVFWc6qYVK9fRa7SwKQx9k6sjJfeibnPu74purKyaPa9c4Ee1HKGT8ZQyaHDp7Cr8KWMZQCCsMH5",
  "key8": "X3uca2qMo4yC6s6CCUuZqNoRjw2jst8cSTtQux9LHAD65oCJm42JUc4Jgs8tCrCwFhgZJ7ZX5RRvtdyzmM21Uta",
  "key9": "4gmXAa5A4f5GQQTKu3cuiddxpmvuMmotyPnCU1Ku4tr8HagC8L5QxhuJUENQBqGBNJ93gBTidPWZsugoTU4QCC4V",
  "key10": "4XPuyWsQb8Fth8BMNJkwjNZ2ATu6cZTPAeChUWHpqZSRET6yEA74gLNP1jiRF15EqXCA5QofHRYxC39s4MeLLhz3",
  "key11": "eyDRpdH7Bj3jWjdViyKhgceN9oRtHRRLKBNd4HZ2rkqZgUddgyLS3eUgSqLQPzmfhfTNtvQGk8K1ZdcvdCVJoPm",
  "key12": "5JWbZYkkChh8Tp9DPpC2EGfEpH4yKjhLnjYyHYCW3wUDJp2SWoVDsJ63QHkFFEXLe4L1jdjbtb1hRZeRsTsmZo9Z",
  "key13": "5wzgRZWnVxgfLbHgG2kywTRTxuyas73kC42Rn5jRh78rbMLCrke9H2fnWKDoZCLB1JBHwEAV3eoqRH6YpHt2Mz3J",
  "key14": "4eDSbo4vtVzi32ZoK3cCeAueLcFxb7pSHoAR2VDxsjqaAPhFyMECsVih3xFHHpWwdCH94PiksgS4JzD6LqJPSn39",
  "key15": "5ZYHn8KmoAczYwdJepbvrm7cN6jb38oPApBiqqDRnzUiR3DqBqN4aBu5FYGa3kKsURb4emaTT1a5ujvffLgjHuHB",
  "key16": "4pvdXaFPvGQdFLgstpSAmC5YecUCPcoWJ9KZngZBhKRo2WTYLtbTNxkKVEiT6UsqS9PYbJ8iJSvLGsWFB4BYppMb",
  "key17": "4R5bLS5AaWmBUNJW5QvEW4CbDhtZvBFHnqin5yhXKoadiJSh4Vhpq3iYjUQLfACc7XCMsMJYquUXKp9bwcaER4vy",
  "key18": "4Ks5ARdqUEd8vMYiJy8eQ3M9prGahm6k2toRvxq69NmoS5i41EuHhPUaq8LK1EeUJPfjLPdZ3J2VT5gV2ipA12He",
  "key19": "2CaCYdE3gdrjtgMw8RR6hPMJ2azCzhzfqnPwbEiQDPuSTDUfJ81tDxShB4RGw8G85kTo9niwPFSzDv8BK1y3sxWi",
  "key20": "3T2WTgD3wkgWpwKaDMCYP3EBVuqSxPGEEMimBPnGRvbyX2RKjQTz1GrQWaUBC9tqExAdTvgBxhrYjY6T9uyBQf4p",
  "key21": "gXf4sMLFSrmvK3738D7W47ExRenVoyi38WK95hp41evwtV3Kjsihr5rxtiTPuiNK2b3mNiejSHsXWqYgCDYubYY",
  "key22": "2bqThYWiFNDVNjoGyqT3WFfc6JQik4F3Unhm2BAeRQHx71yXfrP4mbuoh7WPCbPZ1iyc2vgE2U2CeXn6e8zBaaZs",
  "key23": "2qARLq41Rv97TzGVBir8vzZMn4eBsHvK8f5mzdv1j26vxERPyTD6GWXNHixRbJix4wTpLuVmXUQ7o49BuyzRDpfU",
  "key24": "3pjdReU1qhy7bgerc7t4mEaykvRzE9aTa7rK25J1c5uzYEkzmVNLyUKwSgo7PPgopdHEnu3PzJjaNzMUFQxqwtpG",
  "key25": "4sxNTpYCn8rBorNUbZ9SckSM2XziUyX1dNEaT8YxQW1mCiNFDEe6fF1upnGgNvPEESo16kYxeQmwUvkUcoFbc4cU",
  "key26": "3bFc2TSZhjBe1Fv9frihPgqfKTHWhZcVD4N22hSuw9A6sFEsxBKWrinEwD3gXBLL5osFKAGvcnvSfcWNAPeAwNy9"
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
