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
    "4cZ1eiEJS94QEUAoRiTJKYT49u8ecaAJDf9jXmbFqyDcy6TjGAkD5EPnrxQ4MNqyaQyVuhkFohUCbkAioYHuRw5e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zAXXLeCgy4ZD9S9bYhihqHwgmeHhpTvYwFbffJD6qhq9fWEUMtAwBzN5uEWtoqrEwzr3aNjk6mfwVFNZa8UZjiS",
  "key1": "2evA4MgtKf9SL9CoH3cEawt8D3hCx4FFr46KWGf5yjUfyfYw6q4uaHaB2x3zTg2E8EN7A6QVF8a2axEBwsaJo1cg",
  "key2": "ZE9S1bq6gQjwkjv2CCxc6Cw2L4ww55fVviAckMdijcgBwSZdVr87SJMkv3TEEY5tzB6c8VXnVKsfdxTmkiYQNr7",
  "key3": "5erL1HMv6mLyNg98NUXy9AuGSzr8qNMAUwKyWPBo2CgjarynYzr4wQwnEszuNLZGUxMg2jQfNBQHYmjVbxJrGWdp",
  "key4": "5ZXU3Wn9pFwa4HPp1vjUQEbFUuvPNSewdb5PS51bEyb3R1QsqAkqnysMa9BLicEVJ7apeiTn8B17a8Y62oQmBqp",
  "key5": "MHnVAgBtNDEj1kJNo6KLuNhFjkEzEfSCm6VcFW8WoWr16aXb7rYdJQHaPKB64wdkkQzjaFG7ZMBAeEjWHFzyFZF",
  "key6": "35Hz2mRVh79HtdVPmAms3bHzPXj331NTzvQ7TT14qWxTBYsAyJ98xxPeA18T9Nf7ouua3sByK5KGW4T9vEnMoFv8",
  "key7": "73CLBQEkZWWf5yKcniRXoiXZLRLubdmGZNkbT6QrfaNHY5KLg4CBBtWcNMid6S3yQrmi2Vuu2NkYFznHhbCKkhe",
  "key8": "2MyYXj8GzdZJb9puXMvvLimHj7boXSYnAzyosL6iiAmFNmeCBW4QtZWCJ1RVEoLB81uabXZ5xRGekYWSGaWumiXt",
  "key9": "4uJmGFTkibrZaEs18RMW3EnwsHrdVLPkJjFV2Ny4m6CLwhpkaLAa8VELAoaYUU4z4FPtPt9jEu8rLku67C1o4RG6",
  "key10": "4Vti7ymZKkijs4XZwTQmYMtS4n4tsmrizBnHTSy9WgersqN3bMeatEDcm2FDA2psKnzppCkQRp68HLhYUCoUGydv",
  "key11": "335eRoiAZHZiigd7RwXgdtZwuaiY76kFNP9Lvz1XbJa9R5pHnphwMjzhKDhtLip6qw6Wurgrb63C8jvZacLvXnCW",
  "key12": "4Tyms1TzEhxsdFjnN4mMJPRD4rLato87dVAJRKrZZBakmh4YZJTrSnqb31A9kQ7DznE1pXHCtTRYn1mQnpC2tV7N",
  "key13": "5mqsRW9WZ8fkoiziVhmeTUhUFjh48zsyteNTa64ByEbKsgrjjhEZ3PfwgSsQwtKsLtv62jti1f3XfKmGrEHEaZfC",
  "key14": "qXBYtzWm1MKPARBMBSPY1edtFaamKFXQUJSkcge12gtmbmmKYfMHgRWJu1uGbG4VZMwoL21sNYNwgvhGt2sgoZx",
  "key15": "e99aub9i6qVFHLKyufufqg4PE9QSap8DJuykzEazZcvSgH8NN6TCFep6GrqH9qEHmnS1KDU1CgFMSSnTopW2xkK",
  "key16": "49KgM94FZ7917QJuxwtF7p8sbQ3bXWz1sk58sArKE653YLydZEAhFaHuQqmSVNgxZgxhrTFD4Xuxwq11BAmXbgA9",
  "key17": "3zRNio9ipWFbSF5uJwXVbVhJiMVwrQf7XUt5H6Z1CoA523zXfjtmibeoCQ8c6FsoApmZCgcrrse8SkjZqB36dCNL",
  "key18": "5SFHUn7godijQpEGkmkEBjo9As8G43EAaptUBhAkeLECqb5ZB5DB8cz7T5S7rmJQb2UsN5routimDhuNZBYvYYm1",
  "key19": "4QBiZGC3pcEMMqaD2enWUiPr1ANEdy4m7tFDHoyBqbyRBAGSa8NcQRP63Wnzs393bxXZGAmWa6q7tVYu4CosvrBh",
  "key20": "3uMjvH1sbtAb67xymFgz5yXkxXuY5JoXAVLFk4J5vGutba8DnExieat8wAs1cnTKHqAjvMr8K3vAJ7fgiXpR22Fx",
  "key21": "5YrFTGHnYyLgYjR4c4RQ2oRvbm1ib1xDPej4EpZexn5bWUy2PgGqqfS3iRvqN7yGs5BU6NuKGu1YnCwbSR17zL6m",
  "key22": "3wnW3PYbbJZtktby6d4mAhah2tn36WxmoTN7WqCZyhZHYsVenzDau64sGqoakDpWZUWWCDAsyt1UQLNP9NyAPJYE",
  "key23": "4vYFw5dVy18B6QVMBEuULn7n3yFi6YppQso6dqHjC3drB9QEXaH9f2wpnT8AcRbfKdXK6oaeAViFhr5KkXvLDDnL",
  "key24": "2TArybMtmtCuYBKCfh8hvh12REH1gaZkGmsEJKmzzBrw4RSQTeMGAWiW8EXt8fZ3hX9Umc8PwDnZVK8yDiA5BQNM",
  "key25": "NLB72txaHv6sPCAK2ynnvmTJhQVG7ofoopvAKKAu94QMjcyaSW1fawsArDE53ZLXKt13mLozGT1axHwGj2zeXnP"
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
