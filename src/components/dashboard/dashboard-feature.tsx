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
    "5yCtVw5QL5i2UNETrQH9kzGcNmTNvHbja5w4Tt1H5Ackh4fXAEF1yqqCg14xcf9iJJQSRNCWbZJPLHRjsa4PTENA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ELVbhCrX1Z1MdwHQ4yEEM4XqYkSHskM8D79WPiHgtkC8rUhMV6TnkVc76eswyW4npPWaJVr4ugC6xje6kNqd3o",
  "key1": "2Ve3uG9Um4kYjLjGdqV2FFhS2HN6f3Zsk6bzJJvagG2VGPfiy8bBTWMy1Ee2ntTBcJtbxKHqpDTa8sP2BiP6MxwY",
  "key2": "YfNZ9J8qAGPRgnaUSeWqd9XcsMDj4HPPBjX9cCuc4tK85XLgKbXNzJNy6ctbQKoogCu6eKh4L3ouPeABRsdyoZf",
  "key3": "uSU9KWNtPwJ9xpTgRa1u7SopsqnUbFtQgFtBTciWWwtpgMvPMWPNrAPaXhX4E8HiEJiWRCn9yY34ByEtJKd3wcs",
  "key4": "3wKzVzKFxMq4qejmm46DjReFA4XqspfSzXHmHSXoSCRCLRMJ4GE6JrnXwAY7avmDHBghv4PBQidWJVufRpk85CQH",
  "key5": "21EYRNmE3rvJjVaWV1ju22kLJdVb8HoZ4amKFt7L1z63jZ2vRY6YAU1URGttWTbjyxXVTqcGQi19RB6CYGCCEa3D",
  "key6": "7bPtoWNVDFDo271fmxBG9j82vtnr8MYxXeyK6Xy3WEWAN3FHsZvQpS8WAFtZFJM8ex1heve2RKYMTXVRAy5s2Ba",
  "key7": "52XoxN8NAv1J8Niu4PVBXDoq3wipi2VJqPJEv6HbyiAMirbWFtJfporeBGA5Vp5YeTdj68azthPg6iGzdoCC8ki2",
  "key8": "633oFurvtDgogziVrXBWLvhwZdn2RtUHN6SCxX4XDUFjw4EymViwYxjviJNYh4YZwggDN2Wqzt4H4JTkjkpSEMKp",
  "key9": "4Syco8GrwteBj6yuNCPCmjG1At4DFWNWMtqJaJU8HPqDeLMh5CfQSJvGVGdvDc8KjJoubbc2cHM3FXU6MbpLiFbc",
  "key10": "rGNvNSPTAKKDMRfS2D482SJBNzD8P4NE5M8khvmPMymwMav1jBLuWkdz3PYVzMirca6SUKwysYFxaq9sFGQaW9F",
  "key11": "BbMhTFobUSPmPofAoDsacRnG3M2qjjjM5Zefp54HECvuFhskYU54hKiofXo48VJdYwKCJb3GfwLe8X1Ci1hxAUb",
  "key12": "45Vx9px9XE14ryQcWRyFVjsio2TMUjVqBdU64aU1ioWR9H689exfrKjvHvS9sXWS73H6jtwknxsiVCWU6Yitzxog",
  "key13": "4UW7KEYnSpXCCqMyTVgpNGsWgvitzwWpqgeecu5GQYRVbkAwvDk3GvcsEtKn5jsMPcswNZB7f6LFbCHMfQJLGgjW",
  "key14": "2zZ18ZDFv796yAsswPvoiCZMUvjCMvg4eKincCRUGwa4oP3MWrapbdbpVQUfgFCyYWVBLRc2qFuiawNgKteApVGy",
  "key15": "zCtN3aAULSUsQzgKnWhrKdGGNCG3LQhmVvAhw2eeScdBh9ueHvNGUyn3nafAWv1kHr9vdWrPFLUKZQZn274bFbM",
  "key16": "2ScndTrSkeTSLnpWrUspcPGyNez5QxybWFuU2whvYHgPeF42iVXgkebyzR7NKAmuUP1a1N2ijK7bzzc2kFn5T7WJ",
  "key17": "4H9TG9W7BtrZKFrhBhCh8rtgsmKt9dusuxpfb4BATDsAY4BhHupt2AG5ycmKAivYCM555EpUo5D8u7rayxVF7sRw",
  "key18": "4dBg2LchrqqumYimLcWmjWr66B2XDhKY8FepUAC9MWuS4mdKBbKuj9Vsd2jhZYLUm5m7cw88ng47M1xFZkT7dKwE",
  "key19": "Qpi8G7RKncWntRsf7nWgULXVCA16X5qwzR2dkj6piDMq8hkLm77c9upKqkFrRPBLC9YsEYeT74EU4uUtMuEASmi",
  "key20": "3ptXu2BmBsd1YZ66Zbxmgn13Bc8nxArLrSwvW2bHhwLKd6GbhZz1N8Y3CaZ6tdA1HgS5gqU5Ztqg4LNh6WWiKX7r",
  "key21": "329opJwrtqxk3Bvs7rjc4KuPgMFZoe4uZevWGTRGc1jkCdLzMRBYBAXysjjQXQrJbWrCn4gkiyzqnDaSxfEqxnhJ",
  "key22": "433VVhN9fLGoZV22cKy86XQa9A779g3TLpm8yzppyWVGJFqiZWA4Tt7WxSQA9965fo8kpFTpuKuRwEaFE1T3jryP",
  "key23": "zkgy8Nqv1tnKeKTCR3ZsQMbvtR35SR1GEwzLTBcbxs7eMansL3g8B9VzcC7mVcFbUugz4npYeMm7ay79KTBiKPz",
  "key24": "2JFN5qPAnP8fhMx6CGptpa7byoJLdoedguBxBxkMxDF2Vk7EN4BbBZHvNV6W9JKjCs1puiT1MgZoWi15eE4yyju1"
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
