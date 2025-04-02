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
    "tVrusXMoFV2p2fLgkDbKCdQBzH51rmju8ceDVA64bt4nbh192Jp6B7Fh1x2KFeDcqBShDbvQsmp29A6Wm9L2EKW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WpeokTuS7VreouLgL6U6Fe1DMrNxSZf4NeJdR8KYW9ygK6PzhVaeP4nw7SWuFmwVcDe7bbVFbWSm5vLgem3noH9",
  "key1": "5BTxHLjKddP7AnnHohTi1EV1kpgVoK8UvpApw9Y5haR7QEQL9UbzCBeQu5wTHaAScGjAwib9xjEYiH75fGLnD7oi",
  "key2": "4jqvqk6GufirvdQtNYMggV1V3dMs4buURsS6PH5ZyQeT2B51pzLUc9cgHysMzCQWwCXmUynJSpsgDgpHtZhmYx7z",
  "key3": "3LhFCgcDcAWorXpa8M5uADHcYRXL6Vt9bE2sWvHDxjPnot8XkxRFenKHBEcBmTkcaSuG7KNV5vnV1W1cocZCkbat",
  "key4": "3T143ooRsyqVEi3SG3XaREU4aM6o4qFbSu5WBfBGYkaEQHzwCsnUa19wSRSmQdHzyLGiTeNZT2g2k7mMVYuJhQ61",
  "key5": "2HAKfoFPS5LzzJ1t9N5e7qPrThzGSuTRKdEhBxueQobCZZV6BLELHihEAKT79WnYSFetqqNVR1NomhKTEnwaqFEJ",
  "key6": "ZeEqiTs6uvaAnDkVKKJxC8R9BPuJLEHeXz1Txa5iUgRaqfc62sknppGYC9FWkKNFjZTTGj4yHirDqJ1HCGLN6z7",
  "key7": "5gQyJiS642nh9oSKwRXMJYMiGFmWHDoSUh3ej9M7H6NYfTbjQWXgT6oJo1aBQDtjZ1qEHLaeFEtQZHpdQTmr9eiC",
  "key8": "224kq9vo16DYQwwHMC5KipBKtRzApJqUGcnH4daA6gYY6m2ChYtpkn8NwiTViMaquJqSxxnPnEzTMSARRABGrfj7",
  "key9": "2Ae5kVLXs92MWqaD2Pc6fhAEeQq8Ek5oy6Q2d91SZ1ZViEEr8YKVwqjwfZfq61gzZZWrArhjzQ7opQyzXHeheMFS",
  "key10": "2prAJMGJNoTfjXNwGpYGwjd4P3K9wXwjiW5Sg9g8adY4LqMSX2QKySVSXpnmWgVuVDxiiZz4e1GpZYHPjw6JhVAN",
  "key11": "42qG3YvX653YvU4PFH7s93YWAHu7ftSAh2DRbj1TVr9i6uqAj5ZTUrkp1q6vyYPcZSaido4u5GheDDBGdoyATFMS",
  "key12": "5b89rFwA8rsHsYRyUVhLDJC6R753fYRvxvm4J5f73z9JNCyGqjsmSr9ooZzTDaP89FdxTtFE8b3CoAtZ4gPixaEV",
  "key13": "54k4eUcSc7MmzfyDgbBtEReDdPQx1KWRNKvXqNBTJAvcd3srKtmA2dwiwoG1Uiyd4i9RB92G5K1pYeBDGfW4jYjH",
  "key14": "5c3QrE9b74GrHRRKMfEjaTKzG8sTozHnepfgTZB4YPBGVPk8HGFnd5R4ww8jLyp7WthupNy3qSbBFGe3ESrPa7wK",
  "key15": "61nEr5otJ4MEQoCL9G5oQYyiiDRzguSzSi6bHJfTpP4DZA4SKnvH8U1cMGHCd67eg5bbXH83mp9EF188bzpdgmsc",
  "key16": "5zoPXVrGJ7VRqJ2SnDNcGtiAZtTi6A57XHXjC9gPfpsmbsAUb7kyie3KD2uUgzTuA6JrCjpxe4qdEDw1eq6EDyxB",
  "key17": "3vZVq51bgD3X4jFhEfhtT216rsW4hLAWWLkkSwHK5eTwvChjaN9EtfC2mpF7QjCQW95tKphwijH4zczZzwqLmkmV",
  "key18": "2JSZjvHSLKvo5z3q2b2A31sjVn2rW939u2JbGGqiy9fpz2D56Dv62WjVRu6dCdW1UKf3VNyeYwKrWpdyT6NEoZUb",
  "key19": "39AvFaZm8uvRqMLn1dHDC6efFUXZShEahamWTjHvBLh5TCHRpabXFh5NkUem3fUMLCMzbJskxrY7ntQZfVnkPLf1",
  "key20": "2XNfug1zCjZFG7j5LTmEGk7A6KhN8A7bDXh87beT1A1vN1NdG6y7uKsS2eTVaiRp8tBc2h7wnp4MK69xQ6adypNB",
  "key21": "52meHDive2HNjK15y6BrvFg3FY6HA4dtsGi7fohnWVWx42vCE5BhGYe5HAMk6hRNFiLVmTXzrmNmFNfpJiXhJGsF",
  "key22": "3QTu32jexjnz6wriYgg5BU67up4mP472m37FRHoxGwwSJnJeynRLN4KJBtnfpEJSzmqGDoq6tjRYAVmZzMuqEFsH",
  "key23": "5yPT9JEjECdRkrrvKo9CLQVdpTn7BthdjgBsKQMvvS6eDqgaLDCzafpzgdGFTYx3jeB6vcj3GEeiDJbWvAWUvndo",
  "key24": "2HwhNnAYc7gUF1xUkuEjhhosKxmzNKtNMDrQ4zQwNvN4t6y4TVmHkLer76jq1K9KzTjmWFvMJ1f4hdDNHuACcxg3",
  "key25": "2vSjFPhRyEQz6AptthvaTLRpoNRzhvptGYvoeQhDMYnyS1JS3FTY8wkPjmA4dwGnkQ2BtaGekfRrSBBFsPAU7CJe",
  "key26": "W2yMAxjfyLym6DRnsJj5vKyvjaG7LzCk9HMw16ULUwNt5eHs2EJMCe2iPeDi1HaKQ8GZURRFMjqvpPKuKWjMA8R"
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
