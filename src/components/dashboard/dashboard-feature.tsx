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
    "4jaG1WmjtnVknxxbq4tVaZyafHah4tnvnj6KkqidMQStnpLsJPXoZNimsJo4zFFkavJsWtT55d3NoVkKHmdELcQg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFh3md2Zq9gLhGuh4Bq9WL1NJq9FLwLaf13yPFV2jnm4eTMd4ANfVwRbTfThsQz2ZccZWgkPNXMfwHwPRHVTTXK",
  "key1": "ZTcyK3DUsp3ekSRc2rLQXoz1C3VjHkEM3KXnDCUMgp1K7MMRUW6ZLANCqdLyCLHJ9oV65hkFy4EgyAJ3ta3yXMo",
  "key2": "2h2V6aL7JtnRJvwbHea4tyYN8KzgTrfT5U9oGUip1boHzop9zGFnFNAU4uP2nfrAqreyJzdEVK1tov8DQ1SmudP9",
  "key3": "2GvdkTx2QxiN6QkJfXJdR7Yj8YsgHe7ppiTWwBps6QrqxW2Zk84uCwSECaRvFGQwPMeY7gmd1hPMD4WnwfBC3KrG",
  "key4": "48UFfptYZ9GyoA5HQkiPPm4axvfhxdVyAU2BbtHs6YkGozffZAo2jxfwJGPbgz3sGq8HKWfnP38uYLipNmorWCAi",
  "key5": "5JpsGiJuCdGqmpa98XTMUKXsP8st9QxNK5U8698md39yr8B3fcWxZsxZNxshGQQCDDgQCQkfVmKgqRnHUfMaGSYN",
  "key6": "2dwPvmSnq2QevLkoz9kBTbUKrRdrny4zEww2RxggK5X5Rrh8Ai3UZZJmva2YYueHhJfZPafDvBtN6DdrVbJrn2ZD",
  "key7": "3tssK8QiELx1U2x11qQnHP99xgsfwu5pU3FnEuV4MPFBKHyDRaMQ85ar13CE3qqtMDR3e4epLDKsAYwCiW5z7Tkv",
  "key8": "3utgPswGoxMr5H3TGeeEPExz6FKTtBsvC1X9TAaMiXJNfQ5rMYrWzT8srScR81fSUjAV5JZSVaCDGBz9AG3uBA8P",
  "key9": "2Nor3d6Hwo5ph2ZuLfR4A5XAzTU5gaqb1mtB12UavsMTBSZLmkjb4UovzBAoCikq7w3fHFMDmxiFNdhNrwnPV6HA",
  "key10": "2armCfpPVvCWaqFD42DKLyVFVWW3WrPfZwRoL7py8wdbS8ouDX5A717gVc7ybwwGdJRhL9Vjtj7o5Jh8nF7xwrmk",
  "key11": "3RojU68p4xAdrushivZXLHyKgH7w8Dex1qGzEQskX14EXDFn2UUfBWiSss7eAGoSMUGyXAhfKCSSSZduVswzUReL",
  "key12": "5WT9rC9G1kpLubW3cSzgXV2C4DgNAEG9TrfZxZAqhFCqygNWXmsRn3i7XpBb52rFoHZDtzdSeisYwPVDVrR9G6V6",
  "key13": "4VRb4Aj6frHrfurZrLsmUceUhVTVZhZQtfzhLGJxjmVjdN7sTcUGBtmZx7iCuDLF4pbw5qag8PNvRMp738VSRUkR",
  "key14": "3Vi3AoWyFtvMnNKYoZ5vWR4H8vmaByhTfGSCaWMJ81nbp62q1wcs4nRYgFfFhEp45i5onH6mssZrvJcABD6woq4r",
  "key15": "2htQPxjd8pnUp86a1XoCwiW9XTwkwScsa88TUCp3YVTufvivSzGDyNEZakGbTXov3eUtbfrSfQJkZ5dPPF1KU4ix",
  "key16": "M5ZWAEQQ7jDfa8CiiqtnMEKJdqDBvgAytG9uFwqwz14jtXFhXfdixoanFPP1rgCGY9WCL5FMwThNiwAvypZyDqZ",
  "key17": "23Jf8JMxNxqjn6inmQnkmyn34twFTmSMbA6DhJ6YEHXu7rHsCwfoGgkDfxXH981mon24LctCe3nzP5yH6My9N8nu",
  "key18": "5Nb3c4nNw8LymvmnFSBnhTvZaE23LtLsRDBEh17D8PrKA6N2a1N284hPVLmXkwU193wMNgbkBDiLu82SA3ThDJNq",
  "key19": "2tEcQLpN2R6ZwEiUd8By6HY3tPJUo7RZTntokV4dmVmjfFRHHmJtTe6PvyQJUyDJJNanrCbnJfStxbUetKZuKcY1",
  "key20": "2eFKAp16stu7rqDmpRn1i8LZAL2UtDF3ZQTs7We7TevgQWLjM5EEq4Behd365NwrygBuSYzHL1SjVnLEVKq5X6C2",
  "key21": "2YimbLivzy2zHCRSrJa8AfnHERES6om9b8XbMEy7gJsnKSaL3k7qyVHtBSHzjaQsqLhpEhbybLctnRwob9zyH9ZJ",
  "key22": "4cvsSVBe9g3RvhaedMPPm2b4ryTKFt9EFCYCusK5aHgJTMg62CnGQLSKUDomWec7pgJmDQoG64UYpUyfaAuHvs1U",
  "key23": "2FevGqasf2fnWzA7mue6ftcJC6rhkLkWtF5rtk4HDGSe6yqXcjyzNwtY5Z9S6rgV1jiN3z46NZYm9aWhFhHnnh7k",
  "key24": "3tzzHa8mqVgRKbEaEMb7VAEyyJW7eWrdraWAUNTdt3h2GXz5gfEbCo7y3kQdPRspvQ9qnif7GFKMGkKw3q6xv1Pb",
  "key25": "5F7Nd4QTKnKmo1nY4ThkwZuei7iG9m4MuDMjz8EtDxSwRXyMC9p78wXyqKjgePARDZj1xSEDDFbvmbMuNZTJeaUz",
  "key26": "3Hko1x1jYLHkaVqRxJZ3eVdpkbbLrL8wC3jVgUV3GzPDkxGEzxbD8MTch349Eb7uGb2752ZuYjYVjZ8drPi6T1kA",
  "key27": "4HYrVdSw9yhuY4cAz2j7a8BkK4zDEw7w79UY5JQbxzXif6RQ4DaUCCHHjn6HAWGCcfjcWSCkWckj7kyLjwfFMFqN",
  "key28": "3vpXBEN2ztdYTRByKpyz9zuyNzWPinTcseEN3gtG77z2DcADmjJmH7jQ1AN8euCi5hxzLTfp9MANXs6NicCTyhTE",
  "key29": "2kLeSDRkYF7RwTDBFKB21vDbgtVGgcsZ4PcA124rrNh5wBzcCdErGB462Kq94wduo6nURbTT7d8XhE7PjZvLST8a",
  "key30": "2AuhD2HBad4g2xgZVXyFxabesHMJRRA4UzK1EZVhvxqKoAEbM87SYrye1Vrkg7a9pB19K9sm9pRXRb2jH3eazBoz"
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
