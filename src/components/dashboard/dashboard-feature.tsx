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
    "2aPzH1nwxd6NrVHP3jgPfjq9kmEYmPYbsaT3Y8gEG5zvR4x3SwiFwsbUMEbkDWpCTozZj4wVyjwF34oc4n3t4icY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5khFnM2GNrmwz9uXjMPKLmxWZjDZ1jTLjUpwo9W9cLoDHFEdxEtvsuXsxE4WKMhCAfJf43Ugh1NBRpahDzbw1VDh",
  "key1": "3BD9dV1akGP4BgC2LJPgRgkZxT88Kv1BpYajkU5UwWBDTE3aGnSMXxpQzoGH2v1k9oQywnCKhxrZEcqtcDXFjJDa",
  "key2": "GdB97HZyRiVYubZnUK3c7kGRaJDQ3XVhqwetu5JrdhCTSkhBGTvMYFNs29Eqfd8JJH9CAuS428tqf1L8pkP9bmM",
  "key3": "3Nj2Rds1f3TCgoAFXAX8dRGn9kpS3PKwf4sqeKAbvc6j3EKx1MWBLuhyJsjgS3WhpHBrB1HXYxJaj8GyoaagXwdV",
  "key4": "4gyFA8s4wknNiqGT6JhNjSSmUt66oerbdio71ZMnMHsHbmBdwqHUcrkYoT6SawPPw2zHCQMShXdFjdQLjcZxVX3X",
  "key5": "upmztQyxykh4eLox62DRC656grQT1yKiAJC5Y2oHuVKcXUmDMQjJviiPFun1LQeKePvNmHU4Dnn27yUtfjrLXFS",
  "key6": "5ArPuNW1Wz5oEQiZrL3z7nUJxd7PuLhNVaXKrv3AR7JQNe6JF2FHGLVnDW4muFqtoXim61L7yVM1dEUFYXQn8zwy",
  "key7": "AJYT54ZosQVRyN3aduhb7TiofQYLZw2TZM4vEoNDkKMZwBM1j7mn2CvXypoM7PiM6Gih2UEPq4eQMqDpcWMLLd2",
  "key8": "2h3fPKrX7MiKRxpa2JPiCsp4iy4Chxs73xiyGxoX8CbQvj7vQ9e41eLKv3g6xWUuewCeRu2t31ptxqvrHHQukuE3",
  "key9": "65mHJ2WJFkzGohTQRiF6v8jrpbZhjz73fiKS7hd4YvSDD3KEdL2QZTeWcJYpuniXEcMj96BbUVLyHLNZBfJ96FsF",
  "key10": "5rWfHEgToCiwyfFYuidjDVaQwXwvhZp8qgfhBSe11kGGvy2fKyRociMG3NRNgpQk7StWbNF5PVGJmYbW473d2U7v",
  "key11": "5ChpjYZmkvBk5kp8dWSjMbghWXj9LZmQYsesDBQdCXPeVSMpQwfpAaxH527EJUpuWUyndekTcpa93zFx5mP3V9Wk",
  "key12": "5a3uEERgosF6Vfm6qQ6KLnpnnwNghx4cr44KDQSgogjgac5wtgD4Gyc2K5ezVcDxDVPsGg2PrzWkSj5Df3n5AEA3",
  "key13": "2uDzaorweZnFdEHh3BVdYYysyvXEjHZTksWAUhHUefkAATJ5Sivd9nHjHvsPMKCSWEbwdLj9AkXj6EEJRkSjr5PT",
  "key14": "2p1iMMRJrEesKqCTZ3WA5hE1NkaHJZSQLUKEnowjQm443FA54mWjYuMMw18Qbbi2VM1pE5ioXoPi6QSsVmWeJD2r",
  "key15": "2kXkEZtLzWF9sLbsFEpXSLq1tS9P3LCWx9T4FhJMssJdYDsNDTTJSy8cUtUU33acxk7DTvmxVqhTPFFDyXDi1dTb",
  "key16": "3GKwNwNG6gU3MZyCKUA8hqReCqALty8B9xpkQVyZmexCQqP8ZVATLgBgASDMNkPMTkLzBnMQSVHC9exxmYvKLAfs",
  "key17": "5194WCpyoNJWxownDP1nqLuoLhjDP7CKvfREchmb548AtsovZC7RUPrgTaxRVaT2aaZdvp7Kv2Rn1RYRUeNPmtma",
  "key18": "dm7o8SXRBGdHXc9LoAQ89CzZiaRYTM46nx4PtqB1N8aGAHg7soNZb3MPgFmp3aQwnSgtZatsfanx7RUEN3nWBEV",
  "key19": "5TeVtYYs8scUeC16cZZutVVVcboqNuTfkohgJEtRc1WmE3hciQvNJmtEmZBNTnTuTdNYP1RYN4oYRfe7A8kvEBEn",
  "key20": "5WGWeGPRxuZVbuELhHX6Q6sZ61xfJ9zL7XVQ9aa4sp9yfRSMtXu2caLzugpz4CVqGfeBKUm7vYHXo6DDRX3dySUG",
  "key21": "2nWe2HqAJLWKm7K9J4QpWoo2uLquFjhZAFcFqqrzdpZ5wV1CWJdzD9vj8jrGRdBBw5V6ZoV2CDgdQdFqjL8nDwds",
  "key22": "gqQHs3um1aVtTxXjnnG7bVX2TyZyQoZMeFfUMYYNSfZnZaDTnbTaiz6JxHnAQxnNk29tTjoGGV1Gcp6TDjeWaG5",
  "key23": "4r8WAazSBNMEKXootR6FAzaTmvW1mJkw6Vepfkm6tD8x8Qq9Grf9ikyAMpAzVDstS3wpzdogsGB47oG7nvPK7bf2",
  "key24": "43SsTAvirsCXcNjRoYcV8VeXvaU8yNsa73bbzGLGbhAMHWMvN1fuKo4Xv1RCUbSCNPmqzL7UPu2aZFDaZANnFeAg",
  "key25": "3VXCbgJ1qzivAGqEg27vzcpyAQ4jMwr7kHDyfcCNgSmRW4airhDENUBr2yjiThWbmjdH3BwZaeahGBFRwkRwzXXh",
  "key26": "4fS3BqiJPouPr4ZtcuwT7rDQe1hFzM8sz1Ubp1hNs7NPe2Lh37YQgBkaNrj4cmzaDUNUbLbozxmmTAngvP9u2YFg",
  "key27": "4fr2zs2sef4naayx561Vj2BfmL784JxkXWP8w8wK6nddsVY51Sg9HDZvTcvmvnZZ9wqYa5Un7Qf1VPD3d9nPCxio",
  "key28": "5y6bJ2CXcHwouzPMwJdboELrinjUTHAYPYp8vxeA26wGUpVUSneUksZFxt2w9ogoevsPt9v1cSEsLaM6DukumoGG"
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
