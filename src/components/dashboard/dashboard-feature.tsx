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
    "44kHnfYyTGdBSF6HyHhYSkmH5ACqHLkqSoVaxkWDuczS7ktfbXefQ3CJDK9VxEURMdEYGXqskgC7UYgjBKSYExRf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5V5WCvppYHNJS4AXSdMbLyNUdtb3nPgP1rfVkzL5HgfBv7FXLTdXhs98xsTwYSaTWfLYHocsiVZHMhxTuck5NZX6",
  "key1": "3oxxda5LxnPAaRzNE2QD2fVjiFuAc66KLjNYVYn15trw1PbNtpD8N6uL3kvXahvXq5xpkSWAaoiQ5SndAW8tuSKn",
  "key2": "2eLreNWFMoPvAramHfReV2btMonZu2W2bNsSghKM3k8FmcGhPHQERiZ7BakXfRLjyubQDCa4n4hPSniQNQn6q6pF",
  "key3": "5Zsu7ASdTNwK5yTR24fYFGUSiyvh3xTneE1RdGxvkD5gZPDnYfvEPsPv1n5kAdUbEQHW32muifomVyDeA1Ek7tFS",
  "key4": "3eM8JFEob7Rdj7mqX1N5cSudKc6Tqo1SDfZCcUqtm1sKkotPYMUUk7K6viyZuRp7gbiTBq544VcATuUUEZQgEz5",
  "key5": "3TVkRogQH9jiXTUrpZ7emmTC8Z4t7M333iJTuE698nJUhzBk8WBsV3D4AqHw9tSTdAW7mqPcXhZvgEqMGEd83qo6",
  "key6": "4cPLmFCg5cgLA14aHFeeeHmFZbjSxNs7j2MVPCLGioBMzAWhbzxmckXDuohKThGkqvtUAPhtxiz3xW3ohPqyWWnY",
  "key7": "3kiYPDFktxNC7UDfdnASZu4FcDHiFYRPe2PpB37x6WH6LcKeSqo4nDebxDn3ohodX6Tmo5fYC5xTTc2G4v6d1TnP",
  "key8": "4Gh9ATFgnaQYAXzxZUqt1iacqQuXTMKR9Der9ZLrgdDRVJgCY4n34oqSEUkSHFrCFrLEGVrQjChgdB6cBm1Qm4UN",
  "key9": "5BQHVCViNrkLWjvpTjzqMX7g9tYueH3SnLkRiMpWJkedC6RroBf1CqXMbc5mGG6aFuMyFecHGWysiir9iHpYY6mW",
  "key10": "2yjgCf432kiHmUsFBwqcNqxXMLkSfnFaCg4swft9wiLQU1G4W9WLYqib1xM5bhRdLv5hTV78RErJ2E9yRr537THQ",
  "key11": "JQW2abNLzpf6j6YxQbb4JdLHXDd8DRgszmZLrpga8CnqGPLowXNejyf58gNKCMRS5hGgTint61TKywd81HAbsr9",
  "key12": "3HqH6u6NAbZuDsPSDqeygvhhjQz5uZE3NgHosPTjLBad6DVzgAAtPvfjaG7QCij9biR7egFxJYeTXPYKMe48Dv8X",
  "key13": "4BeA9uufvys6GcG8Dt499JP352s91xVDJ1U2j2qCkHJmADBAHMv3wK7c43UXA9RbdELmuNs3dPvk1qcQBFyXzbjs",
  "key14": "2YDzNyUgJJ4UhmrQRNJfGqGxThokJjzpYp6BRNhqMQMJuQLwAMZJz1NBxHeUZgFYmTiVdQTJ1MHxVQgiQSfymdxs",
  "key15": "2ETy8hFik5hYEfVtpAqsZsfvcEqwnZArrQvnEzeqZPkQPCn4vqa9c7vJqPvvjovrUkS7nezLiKAhypiTMzk5iKmc",
  "key16": "5oomp3zLAuBsM3ST2nJggmJBMsopFSVzwDChFFKYqZxybCx7tCKpkS7BRai8hBMQKjsZ4iL8WA3EsCQzRmkwkwh1",
  "key17": "2DGc8Dkds6GEerBsUaJ5qqvtZ9K3wJW2cWpHQVbVjpeQ8WwPfYcBNqr18hvyyAx799dtdXdhHmtH6gyAyawTQ7RB",
  "key18": "2wCMcFFoHQ2qiU4xnDrVRTMRrXREBBng9x2AuHgGgSBkSBxMMtU7M25DMLuCynZvo51utdLBc3HkgCLkKm4hhP2B",
  "key19": "CZhrsZdmhiNH8V4tSZVyLyeVHGLAdgUsjcA9oVPi8cSGBo34k5MhdFy4rVNVmgkmR86aynWFiGDqr5wtbxmqL6s",
  "key20": "2sJLnKtQaA59JRLjEkV8hqGq8FxybxBwvaUWceboS5jB9LrWKnsECWAWWNFML2G2eEK9AnkJkTQYz27hshn791bf",
  "key21": "5i7YVV25i1oQ1NeA1VTTB6dGPLhSy118tjgHzjzmYGfgaQYTVfb3QpWECHZoMrgLa43iGkBZB8T6a9QLemzNsVKk",
  "key22": "EQ26TUwkse14S7huSFjGkvgyMWc5weRYSnATW8YA8TpvTbtnuvsP3ugAWVrU9W3Pmv7FQXZ41CM3QvN4dEkkHwU",
  "key23": "61X4BBcfNZqVRxkE7Hi79k4LYNXSg1Vk62QGPj5VAUoQw26HqU9ANFfxRggL6x8D6rJSJSSdBMm7VNjqYmz9rZQn",
  "key24": "2Cb6orTPNiJPYpzNDw4DfP3wSdwDV96XkzhniL2tavFdaLzj68HwptpBHmFpaoWxZ4tMoH6RFrJvGhcxnbMm71Sc",
  "key25": "vU6jaR18WErXpTRZ7EzXty3z1jq116NWte2ztmLVDSupM45Vu2pb6QNoYJzFep3N8bZfoqz5d6iZS7ocycjg8aQ",
  "key26": "4DBKEx3KpkQvYUSF8LX8FYvEMutrZaehkeQLWk1VKZgcMcFbM3dHEKz2FRtCwH2hGuavMykpmX5gHPkMRbUVLuoa",
  "key27": "JqHVVjYg5q959RjNeDRK2pFK3YxkW162yFYCHySLmeUzrUeQRZvhVeX46VQv62tFahGkCY6sw8vJmQYnBWPZ1vR",
  "key28": "3wJ7rSUNws4bQEevQJHN6mN9BgFmYNtUDCzTSfvZGVbcCBY2jgCuc8y4y3Lu2cTDE5QNx9ULwfyJrKpTsSrKwmkN",
  "key29": "MPeeGpPvGes4EhSH6LWtKLitNdoNHCwZbx3XVwTM7Pgq99YCP3hpYQyXha7mrt1q8iuaivkxXKRjqscKkNAEfM9",
  "key30": "27DPX68BX9yqVbUQCdphqaQpakGpZUT6xCm5SBjvy6kkKT65ELxu3ie3erbZzF5tNUUpa37wDXnc4URHx1AHZzMG",
  "key31": "3x6VuZz5J18UHvUw1XcjbGfLuuimXpfoYbonw4Jogf8mQGFzHeKGNq6w4xKJGW9UgRrhvTnauWKWEkGYFyTWRePM",
  "key32": "3ASwBz6rENXwUEWV5bQuVesqtjhz3XeXR5xqLGrzF4Dme6MKKvyJSti1DCyidSmWFC3mbzDBhAd5Bz5RWfNNNSd6"
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
