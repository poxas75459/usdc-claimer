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
    "3she4Lp9unqY9ahq5CrcXp7d7L2hGmceHVci62qriT17MqeXVBYY662qncm7UPoStLgP2QzpMkV4Yc64gkgtpy3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jskuCjF8bCNjCZvXq2yHYgMbMjuGMogqWkKTqeDLzsd95EPhKkrGbsxTpYrcWpN6WRcAP8V8ncM89W1VSYW22VJ",
  "key1": "3i4asmQYhQDhQQT5W4SJaqfe7fexKTHB28dn7ew1taEcnBvhE2fxiTbNLTx7DTdgb7dZ8veEynb8oobDoGSs7cqN",
  "key2": "2kzXufMtbdJSpjBz9VNiMDvYS2hYxRFWWKQLtP2zFJMv8yLdjhDW6Fuaj3BMGG7eU5Nrj8Cvz1hUwy4cEofFuFte",
  "key3": "57DihjyuAvyu967CD7374oKQ7RZmJJUHgCsy2aEkWAGRLZHicrgZi8BCCmHVng1m6pw7oqje1hfatPorGuotqQT5",
  "key4": "47JeQYsCwRRVj89mpKhcmRzKvyCQRtj1MGyTMgqBeWM52Nb5Yvr7XD6aXixEXHtB8hChX7ZVWAszXqCokgzo2mAj",
  "key5": "co9Ltf3yD1jc74GyFRVfTueFNHrnUFhZXdndNXmUtzpKn8VtNtuCdHX29AgEiX5GRku1ZBLCVSpAHPb69Er3kR1",
  "key6": "42Xz7xKdUkouC5yF7vTkRk1yUebcMnEDmgsRKW1NbRgpK5NRXe8hkHoijiH48M1dncW4aoREqcf7i2CAWtANGcQH",
  "key7": "2rrwhAyY9YubmTwhCHziRfn2R5f57amduc7uVHH95cePhrPyrCEkVDqv7wnKxNuyXaLCKLpARjHx7VtSf2QVYMWd",
  "key8": "XA98PS2obnsimNZDnPJ6gJjTUMMd6o5zjARNyQe94N3WX6ybmH4YeDMF6pPXNQhafHEjNzUW2tJBLHR9sFGaWRb",
  "key9": "4sz9UeprmnSENc2SHJokBkgEBUFpY1C7pAwCADbAHXzHZM5rBK25TYyxU2n9xsszPWiegqkhWGqxybLgsQo6GayV",
  "key10": "5tfJJhqRzw4fif1u9RRpJ34X3aukT89tVW1GdsgHFkQAm6cpFpqyaKmocwDnarE9vwy6nDDVVCjUSLJa97dfogiu",
  "key11": "2HfiiMxrgNjrSgAEvXuemGUWzPAYcffrNh5L38GNyhmkgShFN41EWvrKAgVRYvUdMzQD6uJDbEXYuiXTnHv2ZsBV",
  "key12": "8ZqAP2tc9SzXR2ayaysmXnJNFzU3xhwfxM9ueuzceBeC8PWhkP3ErcMoANxe8iiskjpv1K89fGgmPFm1v1KcDTv",
  "key13": "5KeBqFrKpruekph4ZKKfYAWtSETjGxG4Tspo8ZMTRS4EpqjcMPyhbsDCqFQFHU4bH2GdgGoRdcggzsN95XcWjaJj",
  "key14": "qnyyb29RbPjHtCAGbP8uouUThA3PcSZUNhD9My5JoQDp38gEmV938U1FCwCUwWydub6uCgPMzCStYBSQRyG8b8D",
  "key15": "5v78pgVVYpFhHJbg3qPpNAuZjpS3qqZ1Y8td7mA6eGSZa6b5geML17mKZ8sju2pjUJ9yjHbMDPsuJgp9pYoLqaYk",
  "key16": "4oaUkgfXMNL6uiXmKvqaVQ7Kg5js7WLBGWH9kEv1BuGmaWMfsZMiWpnHggkJm97qhszKFNB8MXkuTweqz4u71p8T",
  "key17": "3LV5H5P3WfjGuyDyE3ouk4ZtYrxgwgUV9XNBYAHhcA3SxSfQkvKBUfBJ7xHGZEJCjpTiMtRH3dPh5oGb2h4GxtNT",
  "key18": "nr8B6XgyGGqoephYTWNroyxmBsciGLfL79yQmHiD5pw6VPxhw3Bzm6WL3NPHsYoy9NnK6Ed1tRw8WNZ8hvN1d2e",
  "key19": "53AhtWo9X9Nc5zbSfJaytwVX6ANRsVdWtj6QZgri28evg2ojLLEix7JyMJVizkcx5tjmscT92oDAkd1mom2RDEGJ",
  "key20": "4bqC8M9dLStMPYzgH1nBjc3Fuw2LdMw1c7oioRZ4xQSCUG1WuMVETkFsCqkXQLHW8YY9xt1xraNEjH4nLE3depgx",
  "key21": "3gGKoXgGSCops6LAG2zhKziyXygoueCMdcaGeC37RwATEdHqDenhYknvLCLsPZChsSqWFGJDD5mc1EudCPrQdtZU",
  "key22": "TcE3iWk1ocQyg1f2uEW7QKguorHmErSCZtxK9HntDJcfAxooR4mgNACSDKyLm4Xo6j16KJktGstfCHydCG6r1oj",
  "key23": "2pNgqXsasGshdmzopCBTiH79MkBB4EhNtyqGqZHvymd2Mv5npiK67TxeadRx1X6go2UJREovJ29oxnxygUsvDcXK",
  "key24": "5rx8hCeneuF3z9jZKoMEjb4xsD17nFF8wq4rCgn4aEWjqRS6HVEXrwEoPbJE9QdqJUbniDeP8Ywip4azGhQ178rR",
  "key25": "3xb1cfWd1EsqwMLtSZA17JE3g23yG2AXqigQEngziJHsxogfwcif6WabXqEuJTE6dUh1zAjaypjntmj8DJB35kHX",
  "key26": "4H567K7tVx3FWfGmMufgoyRZj5pGpBut8SDre5if1LWcs9Wwn6EAqavQcVnEyTyXB25PA2HLppA5Qi8tXMqF4LGm",
  "key27": "5Zek2r5jyV8AK2nfLbwUd38wCBBJMo54DD2GMBPguJjmhjAWgpescN6Y3XzKhqct4ueGt2bZM5oLZE4ebE5ACcLE"
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
