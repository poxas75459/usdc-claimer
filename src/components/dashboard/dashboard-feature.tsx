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
    "4HnKrn4AvSboNWmSGEcAiLdvGeYgkh3NegtQxhSrPSPEHuV5h2cgUdWjqbru4pRo8davxB69DjKeMQ11GBkhQgFa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63TBd6ge9bgqkN9rgNfiS1N6tmLFMtAtWfFyH5FL48QkyD81rQ1fDtnW6PadWfjrpzDX4g2DfhgHh7s6g8RZgMyk",
  "key1": "3sjssJDxqWyzihC3eZQhcVrG57WwJZ5n4aJH8cMXkdrqvTQeavLw36DobeJR2pFA4ZcqP9j1GgicmZQLdKmxKGtR",
  "key2": "2fMGBhaRyRD3eidtqG27dB8wjRLuMF5ZAyaGPbn3BdRFfK1bkXyrVCU4dxVsYJJrfHLr1rcJFBiueD7uTdFfYDd2",
  "key3": "4EJaQHRveygZ1A85eRWavrGvFVSft3nqoN7n9FxMMm299DUQ6tAXMDg8i1boQnViAdn1BbdDLR669y2AVyNzv1Xn",
  "key4": "51iRADLtTSZ77SyAoz5aRBN74WbCL8HynJew7Ghh1u21Bt1GuqwMK9tDUgJwktKyCuA4jdsxS6hpmok8p7yPf6aH",
  "key5": "2x51PzfUaay4cbR4uwqF9NzosKXYCQtU8omTfDn1LegHNWTkEaDPgHcgF1vFR9oUDbUiZkxxZCSEYdgYAU7Ccsi9",
  "key6": "4rEt4ihwVacokPmKWczoUf7xRhtrMD56fuRmKpze5DiwHRQWSwZtH3graSHqSFycppr3anuB4uF92q1PsCKW9TUB",
  "key7": "3bjE7svhCWmE65WZcNsZPeEvYjNMek3qSZQsRp766znngNHi9tzi5M9UyLWe5KRJj3gheExVR5xdn8WfjVgw11PY",
  "key8": "dYN4cdZuGjdNu6Xd8ekxueZnbUwB3V18pYqvBrpdN2VxeX2fnD1rjrsivcv3fCbcj1g4eKToRJPxYxnfE8hWbmT",
  "key9": "3xH86UbBa4pxpbVfumn3zUsKHsBpZzb2ppwwsPeZ3yWWV7SzC9oXvWzavZPbvgB1ygr4a1YfE6CUPaNLTqmTkHHq",
  "key10": "3WtEDNpyTwjFuAPUrqsV7YNKmvFBSpAw7mtF7YCiTDNoKkoDwCiPw26VYMUK7sDK4tR4Cv4EU2MEF5dGJbDKPkQT",
  "key11": "2zzT7tHZFUHz2addv8P4w8t4FmZZQa4gabJq4VcqZUea3K8QZ4sVYiKjzSC4D1o8DtNqfSsMDF46jBkfAQ9j6512",
  "key12": "3abvzio6ERVbArN8VZUocLULpEU8vYVZ5pjUmLPPXYV3ywtukALjWVEP6wCARtSTe9mMMEs3FWN7cjLs8sRpBJTx",
  "key13": "3obBLkNJ8d4ucpw2q2BSuDFXTPTruwbCVthncCQBaKQiwUfrKSTh9f8EqhMu1N1CbD39gMr7tW8QJTXrfRc1onYe",
  "key14": "4pL2duVoowBn5psEf5nkFNVvZitcLPstzxQPG2riSgMk8KVdXFDssuPEwjAY1t2hBWYBQT6MzgJX44MDZnns8yRn",
  "key15": "2gHQeDsbgYzRg9QZ7nVBp7JtrPVv72Q8zfy4a8FLLZ2gDz9GHF6iTLbwk9JiMJ3MErTzAsSkbsNo2za69dxXDFoK",
  "key16": "4AxHpB6FyDbmxX5gctizUer3a8m35ZVTjXkvVEGvbjY2ZtQ5MpYEvc7ByqUw87ewU5w1nrZpSRXDyWas6u4zp39r",
  "key17": "4E6EJJS9oXDHsMwYmaQtrSrJS9rPyaKUgUzHda133oXw6kgXEW5oV6biogud5Ek2yY8UtY8sJ9vbFbNBj7AYhBoV",
  "key18": "125kZryemaUg3fFXeNpwYo5ADpu5Je8yxv79atskcATAEJDrjd1qaZUZ1aBLGymqJ5ee5NaYuNyhJ2hkKaS5voHX",
  "key19": "3RG9jDCKwdvZQxp5xVzpF2zDV648kixD6cX2J1Etp3bnmbks7d1yC5tc9LfkwfoNremWAZYbbnz18DoLJBDr6sRJ",
  "key20": "4Mq2AeLgVCTF6fksECPbN56794V58bQoGwSPoCXX5KTpVC9a5kSMPRSwgf5ny17LJCD64xb7B632csHpMtGKzavn",
  "key21": "qpmQqAUMFgh1DSo6SNDM5MeoaoPzHc718cmomyUdaTT8TEhiRsg9G9CBiJgVNbeyKRbiqNJiHFEFo4yomfLg8pb",
  "key22": "32sdFuoyNxxVCBX4DfebE534G61xCePMYXFTeHBtKpe3qHQHrqW3a5Xn6Nh48nLwrQqNAAUNcczxVp81cuYGpxKi",
  "key23": "4oM1j6SzEdPKdQk8ySb6N27hHM9hLTXjphroYYHvtKrpnQCiECh1m2dYgixGe5RwSiNKhZfboy55wJAgjaue2NKr",
  "key24": "4TvmFcYqPQ4ZgxdHYpQfADjBz2aDTMoMtGJeQSawzT7dYFhJeakt8oqsfHx1xXnZjdFXHHRT2PhMKNuetfFFoKXK",
  "key25": "imJmwLp8hNy7isQGZMGHyt5e5baZ7EjMQd1rVaroVZ2EhToCa9AZPiNpBBxoRnAjD5bZXTtN4Ubhj68bSkrDnTL",
  "key26": "63hjZGUX8nVaDPiUHht8Y7EtrmHPBm3Y4pmn7kjEmsruecad6hoyPrxUFNeYBBxHtoGbDGFrbTBJ68h63FBCTxhh",
  "key27": "4nAimUVwTAXdPo3SPL6yHps2KeRNP7cRFTZLgZLzUX98jG85WPxUbJvcX1tx96eD64FNpCHPy3dyUbFdCbBn5nkD",
  "key28": "5WKTfUFQAkMuf39iRkqTbM4Koynh3t2emvKGgexfidDmDS9dLYxzQib3hZNoaWgEQ8gvmsbgDwbmAwyT9bP55S7G",
  "key29": "35AJyvBa8hkACmxp7Le1iirEH6PM92TvJdHY9yZPg6sh3LAn6vp5RtmfMwESfYEE1uKsFCBphnYt2rfnvVMywBMp",
  "key30": "xdQXQrfCjsy8pfPAr8E3k5ogzZjFWc9vUAPAptjHNc2JP13XSoNNotyzhi6Pn3Z2ak3JxRC14CJHys3bz1Tg6uX",
  "key31": "a3iZNCHrrcixBnF6LBUhrMKaQjXTHajgYkXHscUiUksmFvuf1zHszjH2FqNuU7iUZbCGdHTx7ewc5QcpPDEJy79"
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
