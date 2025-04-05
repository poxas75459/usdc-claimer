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
    "5qfXq9W9qmtwSF5qjkKB3BHnN9QSALuD5sQGtVKArpD67h8d7dqpWLhJ7qi651afEvcs9SDuuL6whm9tPcYcvgKb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NygdNHqCaKhehZooLqjsTH44jECbHSf8ofqoqq3n9qBCKFST56Ks4C6t4zNKxkTpURPstRehASyCdPAK26AP2h8",
  "key1": "651mLHpDNjP1naxAVn1tyzn3mx5UNmwbENJpa9RXaDiscZz19qMqkUzGiNbU75cob3nndkECinqdTwwMY2Wc9PXA",
  "key2": "4xMAvqQiy1FCfbNstoub9tpBLSTq8Ydgu1EeZLYyz2oN8Mds3RQh69QvXfdtv1eA4mTBsEn7kVw3c2ofFBSdWLxC",
  "key3": "26PgfTykYRdXkzoPwomTMxr37GP6mDhV76PE9Q5kQEjVKUG17XcwsFyVcukxBbqEPrJUyCAVDZ66BXDnU4TNuvTA",
  "key4": "5pULbXNL3fFLmLE6a3QyWK7fHj4n5KEGMWqfxkLcGko7DeiXBy3xGN3wW1KnwhStxPSrAYivaCg5KkZCszaALEQE",
  "key5": "4184xAaoyoaFb6CBFh3RgwhKkYG8hKPkuZtRKeexqKEBLHrPbQNRH8dWguGKySzyj75XVDJ4DjjqZKhHaEABbkti",
  "key6": "AkNdRhJP39ixoBA4kzoy1aqyA5qXwccdY9xxPyB3qTnWESvVs8Nn1oYsT1C2sc7PAAekwCRb7zhQyXYf4e7W76N",
  "key7": "3Tu4SJcsiEWfjct7t6uXisCbK6o9GBRdPHYFAGEYyzRpweN1C6T7kTUChR18ihw4NPFYuLZSEsspFeRuxy6sGkYR",
  "key8": "5w5zqfPLsReZegyeyU1fj3krYZ89qxEPfrwWYiVrV6nxMTLZS2QzPETb3FKf56spAhn2y4e9qbMhYMqGyLVDRvUg",
  "key9": "31ZGt5478zYkBQaG4nwwxUMoTE8zMaMTBfMWhwxqrGYovB2j61PJoudtBjHZdV9pX1MirBgaH92ECNRm3mDNeq6n",
  "key10": "4rwfCytSvkq1sHbgT9XjUuyTYovk9JFBeR9ntJZL13LarUXgGc2aMkQCzqkVGopLWdsD19mTeKXLDsvxrc422o4Z",
  "key11": "2FeG5ch7KbJKPhcfePRq38snPbdRktAyoguq2asdtjAJWF3tN9abxJgmXfyFr3qEADPXgjX9UBzkgmBeBXWKsZqu",
  "key12": "2quMvCEJrXPiaHdMuShHPZzFz68sg6ekzVCHftpgXfDj3N2NiBirKtQs9s4CQeyMCi5AT5N4AyxfgP4d7EYA5Jp",
  "key13": "26wqVHGD5diTzds6PxXqR5xaT2JRdrF4KRZ5SsXLba66VDptk6eANLZNdm3mcBUL7DtaQvJwP5HkZDx9ezEaZ5Pz",
  "key14": "4mQ8d23E4p4hKL7RgbTGyZsR87xoXzHBiyfY4fEVfPSYEJo6yKQXUrYJuE8mLmMHQz55wbPum5yS6AUMGgG2sAP6",
  "key15": "2zQRKFrGs9AFiQ9iNmYsrHu3DZKqmDS1M2UurAXHkzRJJpdAw1AV36konKnUgXXb9s2Axih3HmPwdr7twLVf4Vj3",
  "key16": "rbhDt6XAVW76nsaVCY1sNm4kT8bk64L6E6t6cQJvFdd2sH71LzezygX1MjsxycnoefDhGcDP3rCBzKPH8aRez9s",
  "key17": "34pQC7ToSqQGvVozZBNNZPHnvRrVbiYsgViErHKK2rHi3APwPHfyuHTKWnYhv8nnXbP6p9HWafm6ANEknUGCD2c2",
  "key18": "23KWkCUCqEgwtuVuf5VP2ewFKyzWU1jYZ7VEJAYBrJ5abkDVJS7h6czx6kgEAComu75v7G2Qu2QDgWRKZRGwF3d4",
  "key19": "4U8mYfCi7LNLMXofd328UzujJri9dxu7SxM8aC3S2dwXAbfe7QFidpeJDauoQ136TeEBfHGcxgwU1NkLWFS56Mxo",
  "key20": "4fE9if8CRaQCFKY12CiCDof1V6gZ4cbQiB4vZNqh7RrCLH9cJyNQpmkWhHoFm4Fz4Fhn6Cge4ypa4s9RaE4VoqZZ",
  "key21": "2D5GytMrh1eEbLkP45N8CXffZ7KvzgdPGquptbyJ1ZdWz9Z2DM7CaqWbgaB2trJeDKFSUYjzwjuZGmtjDy9JHitx",
  "key22": "4tZkt2GodpSYcHwRxxKKtijNxvv1uvTUL4r2MghqUdbRgqFThoccepqRBNgcZKzYNJtt3p9MseBXivkSeWLdiPD4",
  "key23": "2JYLZyfcR7qakTwhLD8Vzo4DerUE8mv42R32QkNkaGBuM1ie4Fv9coP9ebCGWoL15pHCqbjX8iamDHqPFiCB8hVt",
  "key24": "4hsGapvUrVkeqvUgEkZ8pWFQ4oa4UmWJGhGQNorTAj4dYkecAxotyonnkEjnS5bysqGxwAQTw3nrCpeUkkMT2k1x",
  "key25": "28FK6wHgvMeTVXnYq7aBdskPpVxMLgFhDR3232mYQeG41XD68f5VGVMHNHYYyUiuMFm2ySGxrcSnSSY3jYy8rDR7",
  "key26": "4QmANk8heKSBn3bCiTN8bQyK4WW1sR7uiWpJLiaQmGcnFxYUfTc9PMfRAQN4PDRXuEQ8LheZpqnBzEtR7RKa2fH5",
  "key27": "61q1dJmumzwR85aqgsrZvs2ewumuv4dRqR5ASL3kQSTRDkHtPuChTuBshwC9mUUHTJbPK7YUBFBFqHB2XCUoSDwV",
  "key28": "24CARu1XSbBWaCX725DGCtA8zFVbNS6VRVPZ4igo3R3pMwXsT7a3D5J1SZspc5EkgRwXXWLBayGcvZ3SwFxVLzKZ",
  "key29": "jRNuVL3gAzzR9GpRSiSNhKVzXzQrnztmZ8FA2hHRp4hv8CFF3Yy8i9u7PCpHeiEQcU2bTrNP5iTLC17mHdxE23U",
  "key30": "4juWUYByzTMvKkGPHFrq1UwSQy6yrqWecTFAKFUowXnZ4wh7wsWuhmyYfTEtaNM1R2pT6FGSGpVZyqmPdEy8gahm"
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
