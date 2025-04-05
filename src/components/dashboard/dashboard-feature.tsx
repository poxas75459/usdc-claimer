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
    "44HGzeVbDX13Tdn7MhfcFNbvJ8YyF1R969ko2UanvjTobfi7BzCA4TKfGsftEbuRJ8U49cK6HCSEW69RQ21zYGiz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zg8XfNayKQW4G5txLXTogBBr5DJLbuRYQyN8i1ws2AdvufmQZ5iPgktR2JWFHSn8eeLdC3b2eHLj3NMBuBxqrvR",
  "key1": "2ttrHx5sXwiHNtzA5y49fMrTPNgfTTwTCRVNV7en6YAHdPvLHovLgycfSiBQUsPdPz3yhFtX2B9JQwZC63dNbDYt",
  "key2": "5Fa4Pz7bma9X1oc3By4TN2KSHBzaiA1mFAEtZedDfufCTpfYytrSyXFsn1nrvhDDjLR9aB2iZXAnxNysVf1m4Y3B",
  "key3": "4hFNAXG84FCL1nJU1pjzCFKN6aRUki3NUhUwJ54aLuar3sLRy3oXtgbprzFj1cXtjwHW3RP43fGiKhPtjzPDSRWf",
  "key4": "2CiQFuDK3d5EPU7Z37GqVaxRCTaaqmvcro2mn4kGNzrjqkRMuhX59CViSsUzeVvavJGi8xTU6scLnyrFD4vY8Gpk",
  "key5": "2mLHuo9z6YDQJuBUyVS7wBopRLsH7gbnPtWNb1amTGUWpTFsZZXRMtDPaG399iLdQhypYHZ9q1QQAYjTH9HRJhtL",
  "key6": "hT1tEghnSymZ7DFkFY3tVoQYwE5rDrCD8gqDPs3wmDsBLgaFr9Q6RBKqCGTFWc7gbhLwTCZL7CJZEM2Pokw3FgF",
  "key7": "RR6ABddRxErvHXrPsEwhA1mjuEesrwtQ84RqJ5Cj6N3vwzKaZ1eRuWCvEVXw7J84wq7pyQmZ5CA91oFTZHEMWxh",
  "key8": "3ZWeaTxU4AtQKDpbG8uWXG4NBjLaUyQwUXin78tcBhUCmj12CZKFgDpcpG4YW3CqTk3NqDbQKrpCHL59aPqqxNow",
  "key9": "3uT34R4aYJsxxZ9YrftDVGBDrKWkg31Vmpy62o5Q9ZEJdLfhk6x4wRAFSUmPuGhN6SS1RtMq8YK6EgbQL6D7Uy9T",
  "key10": "4m29QpqTHpEij8N1i4FBCRUyxxB79KS1biXG1jRQMaqUmt4Ei6GEYKpc1M6mZeEJ8dnauA2dcBj4WndxqGJ3xaYU",
  "key11": "5VHekAnXuUeEb79Tg6D7qQkpfsuHCJB5y5bFSn8DHjhtn47x1o43xoAPfkcmQjAL93DNY67UoPS24c7G8EuoJRaa",
  "key12": "4USEpfT9YNB6Q8i9ZjsanuUrAPWBkPZbf15ZqQNnYNEJh3f9DXiUJNLBsHMK58iEWvZG3VXWMJ4GDJ7tWeN6YbnL",
  "key13": "5A6GhBwGBPq8Pq9PZjQUeDnxQtXDDPLDNGEJja25dTgcXgfd8SWWt3K9oiVpAgRHrAuxJF1pAwRfWc164uLjyoB7",
  "key14": "3W6DrqP1QZ1xiGq92GtqZUjoUYu6TSzCVX438vHYBQpFukp34A7KiHd36m89Z8MAq3BNW9BmkmhtcWZchRzYLgU2",
  "key15": "2tigNHnMePeyiFCtRxkEHtAhL1iBx8GPEnTwPZiZJxwKGHj5ZSET5b9aLwpPPvjb2QhYGy9zGRSXk3DWV7iBjfPS",
  "key16": "3QMALoggYcz85SFLdUi8RzC6pXuWAYbM3N39yJ2oa3M2SyyKx1hiVvyU5845JVza9o88W8Are2i1NZVfhiyWLSpq",
  "key17": "4JqrAfacr3NsfeuAufNFksk1UAN298mhKBYSXT8dMjNntQKvjkVuNCX84ZiFw8vmNbu8YYQNhwxVVzUDeJEhHL34",
  "key18": "5MprywYnHXahEGVB4XorJ8MXpBJLFYVqhAuMrMSGDKVomcLGekTfV97gdF7NMsX5MsFKmJa7SFWDYVEaFbF7rpwq",
  "key19": "5Z2YqHxth8WMEYULWmz49ungERCYgcTkhxNYCRnWov24iBot7K7xYqCHARfzJA5rnu2kqGbsXxDTFAZGFnBZ4Puq",
  "key20": "5C7jAwcnfRMY11J5X2B5HPycyHjej6goW4QVZTmiCdZy3uuKPSiQWzmp2PViaYkdKn5fWG2jeXX6R5VsuNh8TyZT",
  "key21": "52jhDmW2dZuA7K7uZN7XKpWxPDPwwV7yxMMEaPxEFNZbLuVWSSSRfxWjdBDTM7Wg96THxwrRBiK3shKpHRpKA2Wz",
  "key22": "2FLFwKh5kLRCRuM79Vh4SdJmRrQwHT5hVtVxM5nA7hXUPBPtYm4xowtXHPFdKnV8usCjZiL1hh9zktbTsBKuYRv3",
  "key23": "aFCWxSWtTKpnpZ3ua5Dp1BuMJaw89ueJqobYDqsaffMZTrUuYMUqGB3PURNL1gmvr7PxmntZcjiAjJfXcJ4NmSD",
  "key24": "41fJYxSKdXRREZSWsvgGMX3qw3WA5cQPnhmG961XbbKG2zhG9ebdfQF9ey9W9AYgLE8PLvZcrWZhx91yomB2Z4u6",
  "key25": "5TGzckHxHre3ue7uEAYWbQV7m8cF7sPjR5uTUPma5huRpLUa8E6UaK6JwnyywdVN9x5BfmMgDEyoqC3tFYaF9L25",
  "key26": "4i3DNBVmV52HGFJBM7gCNT4mHVLHmNasaBGXkQTuRJSwshSc1Q7Tnr1sP4RZmUngmjw5D9VN1JDR7J9QLxhpd9rP",
  "key27": "2Xw1tMv7T4HrkbbTjtGGLWfLLD3UNoswuQPkmK4rYmBmBAm5EQTujtwLCt3BZAuP1545mw3vVuzRw1ijhZnyfZET",
  "key28": "4YRSrAcaxJNQeHQdz3t5p5WDfxBJxAaZ82vhSbc6UGY4tcpRvnMJbvNMLcrGrme2ZVRDGuzfdPUtVcVx9aQQeTrD",
  "key29": "tdg3wX3zHmhwfxKWSdPeYo9VozUjAUjmC6frVUGcdx6SjCmGLuvow1t3VWECEbdYk45ur82uwDV2EgR6HgdBEG8",
  "key30": "3jz8kdpFnaZ5KZCtxFxgbPaGgC9RRHzszqctHcz2CM7CFMerVZ2XEMgEUUBUJAZko7QbPzmHYuXhPgjQRMA9EZxe"
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
