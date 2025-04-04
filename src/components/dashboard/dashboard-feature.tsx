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
    "fiaDQbq7AK3JTHDTnAV8zE6RCUhiX6v9Qnzcm9NEKETBDMEvGq1JoeeGygZY49JHoGRKNhn19jBHPbgKfkZwp97"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wXuvoSsRdznxLPcPhXDGuYbTiCu6z6favrRrvCUNUds3UJounxTKqbH9WidUMsDFuwZwBNX2GDZV4iXvX1qscNP",
  "key1": "4smf62otwmief8NChnDmJwEdBfFeT6gRGBzq9SsMQ2js14ZzUZeo7HgeBSPa4gb8px1N5DwEu2QvAe3NKL8rd3zQ",
  "key2": "5bjEE2BGUDEU55vkh9JV7U1WJfJvCCbWfWH9SEtffWgSzGLJjLTUFnmjSDY7Q9KeGhjL7xtT5dGsHcdEa4Mtt3jv",
  "key3": "2AWMaVAegBcD1NJUgcSZknCdAN69oJaPCYvYgqF5SPfuqA1znKxYbsXBSD67hpFDxtTu5DVsZhmxXsXMGqpaEGn3",
  "key4": "5D164QvxQdncSDq86aepQbtokGbHnG55dneyneRNkB1pmvDxM2Lh3hTjLZB9bAzSdW4p8UtWswhbWmD6xgrLcv41",
  "key5": "4NzFxGz2q9dpC8xanodHNcsKHmwv7Pp1SRYfPc7DY3hTUWaXEhTGb9mXe6puwsum1J3aTt1sAqMPsCSS5pfv9puw",
  "key6": "PeFnMR6NsdT5whWGYipaVDaxLsw9Se5gsdpjz3qYRKHTSiqNfB8jd1SKKhAmrsNFWs9dLUkeiH4LpXGYqNRusAf",
  "key7": "3EDRRhZiaLVzv7t6GSLQafZ2nL1eoGKczxfWMcDKktQX9Ykx32JNwKkct3Ek5HKYbYhi13pWiM8E3Y1zzs9jygri",
  "key8": "5cjuU4SgRvP7WYqyGYA2yiuRAcokfGevjwzXePCzQDM9LmPVp8CqvjEtzTJF1CHf8QBNMKR51EoCb1W11wVTQAb8",
  "key9": "3634UrMARus2W1Mf1Jbdy42y4JpJKgciDo5gx5c1TpkErZD8tndy1gCshkLTK8ARxXBW4V5GTJ5ds7D9P8sqRzeJ",
  "key10": "2NricLiUDrFyKQuk72WrojARoWbCP1tTD7TuoFoX8d3UtbZvtptw5xtZoZ2GpDMmeE6DD5ZYFe1LGS22QJq5D6S3",
  "key11": "2AJffLXfRqHL72EAhCu9NFYs6bvsnZuQv3u3DxWUnTJHzbUbAAxRaR2wPEF9Kjks2oPGS7sLxLz5BWuUEPoRMWGC",
  "key12": "5YxRWaid9zJcjFfi6cMyGkpwirjE2PpDQxoujfDkTWSTpqzF4R9RN2MP7mo8EiSQRXMxMkqAmtWtfVbcfG8eaJAN",
  "key13": "3KDo3xEkxDiQJoPWuETvNYsS63wFMGzNA7btviwmaqcvHGjsPXDkAukHRF5U7oPbANQEBGCoq5bnjEGKM3yV4YWQ",
  "key14": "4zfY1ww1EPgTyF4cG6d1gMkiAu8ibA6WcGDpq7iqFbkcmyv9esGtjqupB9scYJKdBLFhNvHmkcyr8LhjziEHxtzU",
  "key15": "2X12nFMR8m98em6Cb1vm33v7EQQCRsjbiAFLom3xQLeoyqjzDK2sYaeZ6HjcUWKiTDvW52Bxpduhxr2vucxPn3WW",
  "key16": "3GaMYrDzZKXQ2crSNh7yX5xHHC6sjEAXXhKhtaWnicMZCgND9JrSuUDBun1fYomki2D2iDvpYEGW5yyatpv7jn3X",
  "key17": "2ewhyBAid9Lxd38ZMddfBfjpVbkB4hBVt9CcqA6ae4bNUzW9rYuMv3XknfEcM9fWr1YEYZpdrGRCr6E8uhwiZaH5",
  "key18": "2i1N4FHAouJGvQjTBaBtBgPBw71ccQW4NE5bs8hZm4wN1KGSK5ubjeSwqb1VoQaSxVt2LUcsQjxR5UwRxc7gB6Bw",
  "key19": "3H9ymqxgJHrLVCBYZffSGNooGSuDcAqjDNtoH9MznLTFu37JfVG1Gmm4LQJECTNd6xGfvTuDkNLnYSghzwGraUQ7",
  "key20": "2nc3fKxt5y1zrPevtdGHr5zqRyXumTXZmuUti1HSBHyuGjef7fKW6vsuw5iMUMgHW7S3xHs9VGyZWFdr7ntKnq5C",
  "key21": "4NpZkS74VgbNKES2aVX7GrLFN5UPxoUxHP5bE6nHcw5puiWAMEghbyhT5w8QJK65QSpsCQwoJuyDsNREDTkzaUxu",
  "key22": "38Babiq3Rn3EXjKfkBo7XcA6RuzZu7Yc3A1ZsktbuytwiL23aUGmLuogLS4fBmTBmMnU3H5g8xFNrddfkRsCxEs3",
  "key23": "5c1xT5kWZj8TbCZREYUAN2cvJHtVAujb5P35vN4dVux3jF9BZgUjq5nvnCcNwgchjriTQZ3HeUAj1wXaAwaNZvyp",
  "key24": "57sGBPQ3CXoQZ1sLQcGj89ERW55kLfHhbGg94jEfuZgoAf1pce92FgMESc28ryoWGsaoyr2i6cvfBGQWcPzEA4pT",
  "key25": "4ecUtmE1LjfhcFLYHwNwM5AKh15SqYW1K7zD39C4H7s8fAQRWKD99rgtEjbHJsZHMaLZF6mqkGkv7zVnsB5dxpeY",
  "key26": "33Xou5iEtMpYTCWFrkp9GwvivvuVdQ2wTBLLcE4HK4MpGkUAEv6GqKStce5CPGp8acCbDfyMbZW3zEDfrpFEXWW6",
  "key27": "2NJ8MfmWKDTSA7vG7BG2r2RcnTgznvVsvzisFFXqjRWJ3QMP6rckHeB1kKDboWM6XZry3MNtuSd2wLRa5Ve6Y7sD",
  "key28": "2BgEW6BzCEqafXr7wPs49ZgTzn9cmJJKU1VVJVNsATBvZzqUVW3HM6eMUFW4kKNbUeTG16Gn5afzq8JaXqdmCH6G",
  "key29": "N4zoLNjjN9GqkQPTFQsgGKcwBZEeNcqJ2k8X33TSMs1RLtjwtCsbF87sxdNQhc7uuBsvWT2pHu2VwpajnD3PDxE",
  "key30": "5Urk4xerou7VgtctQi3Q18RQxbsFCtHyZrawo52BJsW4YvyV5bJ6KYFWTeQd2iZFjpJLFRVHJPBWbP9NfN9ET2Ch",
  "key31": "3Pkzno7xFT1zfV6yUR86mCgzovDtYtDkPATQmxgxcB4L1Ci3wiJg7kqPf8SmnsE8ZsdTCPcMzEC9EWSDmCBwobiM",
  "key32": "2Enf77yWxPBDHPq8uQ5964T7a5CLER21prbffgNvRpyo3vqwB6fRX5QS41GBU7T3W3g1Lvpd6h5v9c7J6BtxN6xR",
  "key33": "4RMS3ZDokoexgaT4J9BNsSFK3EdEi45a2GmWDEsfYugtSDRa8auDxUoHGoJhCeBqbWxvLw8SfGw1mmEZn2bDi6Qh"
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
