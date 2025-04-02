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
    "sizuTgcSbdZhpoHrJMpvZ4rkpG9nkcVxqCzG2wPZU7MhnEYFMyh8Rxsa2gCQCuzw3hYsbE4jEAkLsnb997WYzuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SPX8VPPLsQuMPmuJT64MXa84DNt9xncW5bBncLvwxBggSxdScM7DqJBK4gWo8vmvQpViRGCSYb9nHuax37gfpYE",
  "key1": "Z15EmJkaxm5y9KZtRGyRcah5dzfoHwT6tCkSeNY2zxfLHgjd7xSuSrSXXBx1eYCjoTGMYFgvoyhA3FxR3i61GGN",
  "key2": "3jCCncZcSz9Q6J65yoWzB64BamfigRVg6upmsrG1m5owss1qFACfMfSuHJzpJYDtLDoMaEyDxJJYNKP4Dqywi2ks",
  "key3": "4MnzHSn4oJH2d7e96tAdGDteTKVv3nACwNtCaAR54guEXCRg7i2fAAtpqWH3uPEanQBA5xJSmf6QfwFNWf89mot4",
  "key4": "5WXxSEHYkvWN5GW86PYWbijyyUARzsUYCZjdQNSD2VVJM6R6vWZUiePvJEypqawUSYB5tzYrY3yToA5LaYneivvE",
  "key5": "zyBGp5XzJXgwtceQJA2ytToDsf9D2SxVDF9X6RdJFaUib7o6H3QWpg8SDw98kVpPeGnNDLj7BjhZfFF3BSqUeQ4",
  "key6": "sWdFRziXjRXMhe3KfKZXtnsDcjZU76p3zz4MhPNwZ7xJRfzuc9grJXdjvqPQ4QcDpcrdSs3xfiD2Mff1jxBsZCq",
  "key7": "5DZeArK9TKrhveiRw41CSFRJYe2vC5bDKZmP6qBTGTLhv8fHNQPqZTGbmpYFkJHB5wqw7CdDMJaJfyJ8U9QMxWWa",
  "key8": "4rXVtAa4w492psfrUv6o1zitndweYTyhX81AHPbGgfxV7Z892d67i678xnSnttSNUPmgXmsHTfNwyMpGfpKv7xQW",
  "key9": "2KG7w68upiKGWwSZH65LPTT5ffuKZTAZhAQi4wFjQtoLRNweqZ26jbM7kdKPwiG2fsDzZ8whj1WRWLB6M2rykmGu",
  "key10": "4fJFPzEJPfVcr1YfuwmL6hk2jDQdz83MozYvVwq5vXSdW28KZAtbGWCKNCFEz9YGx9DRn9mePMD1S6oWNMXsmPZy",
  "key11": "5HikTySCTzzrMeKQvWeFiAWgq5LQ3t1NiJzm6DpHL9tz9CGDTdTdr8J6r5XoPCs9RRZtzmcRvtZLfJHuAes7S88V",
  "key12": "59FYM63F4ZC6PskJrXs3cczHDscgrqHotizhMwrWXaoxfJ27pxJa3R9SwPD8vQdSge1J3ZZg77riWasfdjX8heFt",
  "key13": "4EJBJdobi7ueaRRCxM2UxsJt6tV4wy3S6qt296CUBjRKzMbSz3bNLjFZARq3yX272JVurHdtfNGunbKrRfUtvF9z",
  "key14": "wEFzXkDpNqrovDSUKDZ9UkuatAQxUbR6nBV24v5Ph4E44dk3KESTFmpX3EcJKiYwDWozDEFNaPcWx8QWgLAFstN",
  "key15": "2BDHJLiCwcqq8r6eSgfFVJCRuVm1wzsK6URcxsySt57WeocV71eXEqdgWS1EnJqsLRuFdd37CF7QYaS3r2EY6vSr",
  "key16": "2Wrwzjgejr14yPxFqXkRDnsekCg4nfF8VMX4aMQ5W8KXNCRRbNSZgEunyHL4yR6wNpx57TscvVpyt8Ei42nbQBvZ",
  "key17": "4vfiQrUh4XM5TTQmikviA5Eb9cUNDA522UuBDmTFuVJo1M8rQSmHE5UdHiswkwJZgbxiLPRKpAeJshaCYzNdVDdP",
  "key18": "5fLgXQS8q27Fc6XbZBuuMUZEibEtBtBcgKZMsdhcJ41qcu9ZWR4JPwy6ndVr5tddjXog4MxFZPNGJ2e8woWYcHen",
  "key19": "Ucw8Td9EABYitWpcWA7467b84e2iq5diiNGyx1wCzyuDYQ9nAdx7pRaZpQjJoQx9wwmCARCKF4jyKX2GEof6uh8",
  "key20": "5n3KDQFXTajeyAfkBsHF65kzbzzVpm788EpYcQfiw6hffxknG5GBb5kESRerfmwzvcPnGa8gVYqDCvX4kcA3zLAB",
  "key21": "43S2Diiqxa1FTz9ePnk6hEUoe2BpgEDPEgBaL3fo75A6PDRqXJnoKmRYBQq8cwdZgJ1hj41snYFVg5ogKczJ9S3i",
  "key22": "5LxE8edSvq4u5NWyceFw985jhtCVMDewKGCmtbPedxfsB17eFUXqh84HxPrmAk1WM5GLPALRB1Yq3yr8u3QfvjfZ",
  "key23": "4RNxQRApo4ub83iGDAe8Ar1qipAcUFfoh6iyKvMDeUrEfq3dxDPSzup7iF5mndPBZXuhQvfL9bEue1nWyQB3YJca",
  "key24": "4SyNps6bUKYZFhhXVGSBBF7wtQS47oZRFNqDt6pUuA5oV82qKqRffc4783hoS4tTXEExdGtyrWhUxunLZEP2xMem",
  "key25": "NRcQ1RCFhPwoMptDSWLkukNcdB4rD67aRfXoATctd3Cp5nNhHX2jtrCxiz6FSw5rgKxdGhhmWLhfaKbxr1mo3i9"
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
