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
    "46T6EyqeSYWgocuYtX39Lhd5KxFMbyHeypv4L61W8twfoumCzGcxkZS5MdHs2u62tMMSMWLw2S3Rjx3f17yU1B9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BBBEC8GH88WF5xrwZCDfdeRNjd7iXyHL6j5iq6wyfzPEMtKPHBcvwWkm79rKkePCUqnrYvTbhUUVyVKZEwsFFG5",
  "key1": "29fuESeATta5bjWZNRWXcon2tZkqRSHGPUevbQc7KfmpbnAhuJPxmzUTxGsYLXZBKwNndxpBUUmYx8cRruKSgmP4",
  "key2": "aE1cMgSSR8ga4jPBRGe9UBTmZxobRHoBzyWeQwhX8yGuaWb3vsPhoUiDsj7LW2XVzEeQ9wDvvvadesmWWwCMQsB",
  "key3": "3NtVqZ2JK5XP2CfzQciSCVoNKpHhd4KjF2qWivfPkdmHQUbkuyqtVd979CMonTPsAo9fniDJgFB7mCXQC9GTzmtN",
  "key4": "5ZqQGords7Wya1U1o3J8sEHw6BYDJgsg5adXaQ2QHHX1QYRUa7U5Cv2FtkUNhSSShfqSgzSw4FWeM66jGyg8oU9q",
  "key5": "ToGcrRVBPVvebqdz29oUTD15p7WtMuRPDcX39A7VnHNxCG5B79kSm9dyZjyw9BMVHPyzDiAedNn1dscG6p6L3Uy",
  "key6": "KFMrqonbaJctJ1dAHtLbeHxxS5Yo3rRgHJePz6J3UrfotqWH7XQuyVw6xiEwgu4CPYXHrLLf8SKRsNUiEc1dRuo",
  "key7": "4o4jHSmRP5PYoGuKL5E4D9DZ629M8mYHzkyKCdTk85aHR2tyNgPK1WvT6FrqUYGXMC7175XWHsFDWBzFiLDGdX6C",
  "key8": "4uQw2po3328xmdwKpqWQ3KADc6PT7ozo7fH319RmnpLaT5iprBU7MZz9qJo6ZzpxatnaeHBzyNdu9tyA92ZLwJoc",
  "key9": "5JMMuTD9eH4aLbUkz86PrAT5XkXk9M38ZZkbRGMT6sw6p316sDHHtnGX4xHLpXYoPNKc8aEoQShqZNsAS45569xg",
  "key10": "5fzbybsEpucwpTG4us2A6DRsDTfL3okmk8ZbjqoVuoQRVu1Bwji4hJYoJA37VTxBDNvqSYftPLpy2ZrdWu1xfWiz",
  "key11": "5Uab1SdAAiTkbvV9inFoGjnRKvnbBNwyonbsBKhGd9KhWF9SpMhrTdjfGLWmjaTW9WJsoEDEzeZED5G62zdbQFuz",
  "key12": "64LkAPPVNVs8WQfxBn1EBWGHypkEAEqNy9NQDghQUKAMbKAcu7ZXwY9dKc27bni4sC1bWekqv6hRnZy43UPqN8zg",
  "key13": "PTUPxmFb6xgx88ZBiPehSz1nRctszziwaSwAqBvJnrgumrymxN838bU5hnMpxYvMSzhfb8c2B8JbHjJYGcVEXek",
  "key14": "4wDLpHzeg1AtfpmS5uMyoaE1UBdE2MvQxFXKNisoNziqkmwHWpWUyeKsyg4hEAoPF1sgDs4yNFu5tVcejrQeKkcD",
  "key15": "4MEsMQFsPLyEMJdJvM4MQFAjumfLMUFv2j6YcUD9USKwGZDT2rwMYemAd22zib8auhBFHtKLLcwEQ7x2xmEFEnGF",
  "key16": "32g3RJtGmG7KjECATnQhr3Y9BCiUTAdTeV1TpPhkdXogteMYb6TRcvxu11dj8hAQrPryDYsMvwbVMUG4nCUhVqmc",
  "key17": "FpXGUw63yv71BP1gg5mjMkUpfMhpP28zcAzxvbL1BT563DxDKET2rt1inNFqopwEsEZ2nqphTPyuG3ojCGzeT38",
  "key18": "2s2XcNQr5xajEnafPSB8hBuNWs9phvrur1fDx7DpcSdey1dcK7jo8VhpYa6EqNpEbjgLY2kSbyhtii8gYWw6rhjt",
  "key19": "51QYVTBhrhKYkRB1LKZeVQna1Nq8fiQibdPCAkRo41DvJvGyqiEdVxLBj4pAX5tJuQEW4ZYmLm4jQUEH6DJa7fVz",
  "key20": "bTjt7cVs1oZqu4KbUuJec8phFvFAzZtJUZ4cMr58L5WtTGxqmrTvfVWyvX9jK6zGm9XgpvqVHqUuuRDRVzra4FE",
  "key21": "3rpThn6esXXcfcBEp9oBZqbd9AingtAPTJrHc4c6EGU9ScWR1Hsnb5Jk4xPwMY7bhxNfCEpdahsWG45oqG3QrfSZ",
  "key22": "rVDMRDbeMzBCgH1rHgrwAxe9P7Xd34vyxNqMm9m84qLX2zBPrN3cYWqwPMeksbub1wzGZcrNPaBRtLtYGhxSEhe",
  "key23": "5Uv8x34QuDkYaSivMvgdTYjpWa9d7UPxkNKgYy9aZ75rwSfcV85tHVfHpA6eMFfXcP1vybEHLCPxM1GHNTeFj32r",
  "key24": "5QcshMt2akgtWhKniJL2tRc9znyanssP7GwxzcwdAdRVWFxNsmpZuCmWoDuVE6RfrSEbtRdiWqpdcPdYuRdxC7rh",
  "key25": "4XMsRbp4wAKJ8E6V2sf9K8ZXKT3bahCJb7nHLLY193uuDqvnMh6R1fbkj9bLobkdWwMcx3Vwtc5ShxqSWkCR9Cvg"
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
