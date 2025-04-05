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
    "fQV1y3rQoQrURrQoAan8LE4F4gTpjtRCsngHRkm9xVyhAVhgtqwNotTqHsuFZw6E2nQTxYXADTpoQRPxobfWZUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L3yqFMcPk44mcG8UcdngHoLisxhDq1h6UC2D86A82s6L78148LkiRr8gBPmvbgbP7XWig1VyyxrihRL4N6Gz5Jp",
  "key1": "4pHHifVXAfbq6BstnUJTnse9thKn7m7DkKzrtjhCR7JTs9vbMJFDeNCSau1VG9hYhGkZfiSs6swaW2xtQ5t17QSk",
  "key2": "5XB97RbwueowGhds8Kk1eUG1nGYyBtYVeEVtSFXQSoD9qXQj3kNQwCZWvtHF4dWAd5gUKNSyhWutqBjazy3Hrehp",
  "key3": "5RiEHReKESAKEXGdQ4WFSycGDFSRhF2HawHxJEQY6ScpHWsKyY1EFMkWdtc24txA446MzGoANHFbHGetVJUytE8K",
  "key4": "4je25bV57FoZuPHM4zK9FmqLpekVdSyGtvR314aCud9noEssVERtV6K1NLPQXmzZK78o5T8rjEgb12FoNDpxo47W",
  "key5": "yADdV4TL8rygXKogMFB7Q8t8igqbPgwpFbhD3bEqF4zrr8igVz6uSsjkV4X3awwUBCNqtgXMynHVV1HkNEKQN2m",
  "key6": "gpUHgDUdSv1wLnfizfjq6tJqTB48RedX38HivMCyFRJURM8Bo1oZeLZEwN7FUVzCywbEzoQM9Li1ePQG4V6vqJi",
  "key7": "5P3oKnYHyxQ1Bx6VgjJZywrk4bgq2ri9LMFRn7xXo5B7Ewm1pp37EASU6JhzBKMFX2RDsJ16i5uXQqqBi3uBR8Ar",
  "key8": "3YhM8utmcN2Wf7gLsqZLsqjDWQNoiNCyFf1pLF6rRHj8ZXqL7oUCixYSjCBekQVbCvDFFafgXpCLab5BUdJ85Be8",
  "key9": "PeYeGqjqeAUu5qUXMDM3wKHwZP5hPGK1Xsy8M2kRbbCgXUE68jXQbBmfBVrPcLD1CFqR1mKbzVfwX7NkqyQBc3H",
  "key10": "2mUQCYYjfNAQ3rTXQTSCgR3bsCM8q4y5mKxpxsZi1ApqbbVdhU5eW6vLaaVxnHXv94Wi8MKfyY9Rz7Q2FBoz1YFw",
  "key11": "5nc4uaXR2DCMbqGsghp7S4Ny6smeXYxyNKbhTKC69rFwYrNC84vcrgwE5qhMkkDia3RzCWCJt6x43ZGSNKRt6fTj",
  "key12": "5BvnJtDkANbpzkVUhwgMV2J52ZBN7xiP3S9bm5KA9hd1tr6HbaqV9yTJXoLARGmCDZypL1Dd9LjVwBW9izSbj743",
  "key13": "qwFkqUj43vYFrx34vRq5FKgS8zw2n87MuQ91YvepwWxdmhF7Au6mYZsrU7Mb28EEb4NWoQL11GdrBaJmkyN7BvU",
  "key14": "3aVWGfchFDV1qDSj5hSoKTjMKpoa6sCoDCyGjdwAcTpZBZPcrobTzzwcdTrkheK66cSge16b2dfmanpgfDKcWJnr",
  "key15": "4BANPN1C4X1RMMCq3XU33sAYxQt5uonLY3qyEXHm2ox9PAXnKnftxR14DsumFCwfH5u7MD5HfN4Tg7jxqSeefWEc",
  "key16": "3pNiamPXxxaGB6khcSCxdEFJBqyfk4Xew52uQcgezqrRhqx2FQM6cJEaqJvTQQGSJ4vQaT2X9KPMNGMh6xkWU6iJ",
  "key17": "3u29uxYW4bzuwDdPCVfsDe9r6eAPzDjqKkN72UGj1munXpFRBXPiQXvCFbdR2gWJBEENtfjPf2eesF79PybkSGj1",
  "key18": "4zMg1fYxQMnNL7baVmv4rf1FhXad2edQFiVPtQxAH4WPfgDgWWMfzWxx9zVTRNufp7ASWwD3Zh2pEWtBQkg2VJi4",
  "key19": "2KrDjHccrgFnqqwRb6gGqhRVBHVpKr3djgPkmcVwNkv6v2zdy5rczs9j8x7AfExvLjErqfTYTW7ZWfAahea5gu4v",
  "key20": "4KiZS9iWWv9VRG3QdbjfpkuBQTWMon87yTqeHrTMBtS6UTg8qfCcbVeyqp5gVJwJjT1cPewhT3SkSzJ8iAMn2NZ6",
  "key21": "58aWcqZRfpumwGRkueBDGCEcj6XvbZ98afLbpi2J177mKruX7NbENPbE5hBLTskCRuko7CQgNcTRmhY7MFX4MMyi",
  "key22": "3DtobEx1yshaSUzqRsiH6B7gvN53mQ4z4kAdqnsHNiAbKAcAptzBGcbJ8fB6yjc9fWUxUr3m3AS7G9Jrbmp7rqTa",
  "key23": "3gZLKDbmRXRe5JiVa8h56ZvidMX77y4utSNwzqSU8ZGaSRP7gNGjjJFvVUSjcWGxvwcCm9fKJiuy8gJmoBBPJ2Ls",
  "key24": "3Hwg2ayiSAXCDtiUEUxFoQv2x9bmAPzocYF1miTdnk3TowSKXhZKdjco9hPdmPSXS9kjCMunpnF5a1vif6KTLMRp",
  "key25": "3cYiYea1j5bmvGoLL3s93og261b8vEPvgxjZSHmLLqH1Rq9mwfZcpbnrPWVXpxYRzSZBpYCZD7eFi3nauhT5Sf2h",
  "key26": "i4zAJWYMjgZSfR2Sj55czTNNYFCgCVRnP3ubLQrnP6DvgXZnrjxfSvnBoynLLqYm1CkrgYXsddrKD9Mhtp7ZTd5",
  "key27": "5fgFNDxMuRHqvMrW8RSFhD8Fu1rPHNepnrrntE2P3tNZkDEGDXFPLUp2bpYcH8kzCAFSRoNadryzVwa8gx8dq8ko",
  "key28": "4MzM3GPPSutKJSTd7eWf4VbtWojyrmvaTLXgHPMNsHekaviC6vmaCcNivKwJoEjdaGDVoaMZHfN7S7U6wApqsP86",
  "key29": "2gSE4WuuJ1zBV5zVgiUSZzticsYPFVv4hWruReqF8w8fnW2U2PZdsKWZLHch9RSNBpapShEX2ZscWk9zUFNAWxzJ",
  "key30": "4EJcX9MsfYM8T2jNbE53Bn94S8v1dFPcmrc5K1PyohtyX2rhHbpzPZYtBc8vEsV6fnsvcmtYW9pePak3nLzCuQ9P",
  "key31": "63Jtd956cj8UDPZR5o73T5UMJgNq5PhcrbTU8KrXsmRHtN1dyULCTiDhP1cQoaNNzGs6zKYxuLp2E1HkzrJTMZA8",
  "key32": "5dtkHAe2R7atVtTXidHYnM2fkMt3vPSST58ajQXTVUNSHmQC6SZtXQHBsbWA7NuxwsisRoiDsN9XxVGSHu7eLoDc"
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
