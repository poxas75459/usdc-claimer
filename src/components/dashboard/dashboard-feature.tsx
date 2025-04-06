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
    "3q2K7YD4ZKwt5cLWEwoTK6CSXzSpo5YzDjoTpeNLg8D2jVHF38zAirwjBZ5GniQxzbdKMPZGDs2iPANF1jwKrnYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qJxKKzyHx6k28JEB8pjbNyaFt1tfQ9zNhWnZk6btQ79VQYQctSQH9xPdKvtVsBP98RRSFFBLtqBeRqd1Pgq3su2",
  "key1": "3TLcqZe2BF6Jt7GzoWjAiPRErrnK9ZtHsXLoBwKhZbUNswDr6pv5VnsskG38CsKUZL2GoQixwdgw56C1qq4us9x7",
  "key2": "5Z41kXbZMFWPcaAHvPnbBgzVN1bYfsAmFdwwAF5b4MfH814NbMTgW87Vz3k2cSG8rayoPicPfDao7oeaBnT93unM",
  "key3": "uBE6rcqrjZaPt86G9JFxu2DNAXgRnKWJyojGA7XXDhsgizJQYTGDxi7raJRuvatEwhcAW6gUxR2LQzJVvzrtTtm",
  "key4": "4dPdxqFGBawxVUK8dXTRuc2hQbigzLJugbhtR6w8xQUhr7WLMKUusadvGoc3uKs3jAjBgB3kXiBrkxXF5pmr3aB6",
  "key5": "5eDWaseoiJPrWkJFduodrtCQfo2GTZpDGKPSckRcDB9M68SqujErn1HN7dV2xGd6motjRcxvs7D5K1FEZkeiJG3H",
  "key6": "37L5EqSY4drx6KTj7iT58BFmHapK154Hhq17SzVLBaGPPXChWS7uEJNgCHdaihjAQqpHwYndjsSK3UZofYEK7h67",
  "key7": "Qu9uPmPYrRphmLkKJaG2F8hJeCJjSaR3Hid5F9x2c6aaWbXcDepkxaana4VrPSdzozjVgR58NbWnusfxd99pNpm",
  "key8": "ckdB43fNNULj9hzzZZHrgV4m2b3bpAXEdeANyXV22HeYf4VwUG7fT7AmxgtFUTNDGpXV7mCHhq8T1LJvKAyJ1hf",
  "key9": "2rTndQvYpvJ2rmj6daf1bys4iYPDMGLGybfai5eTopdYoVLcWXq6ic99G1NgXeQQy2kWEdnKYEN8zrvLmg1oxVzA",
  "key10": "2CLDcuULkVQ8Dh2b6hhNfreS4YFGkR51Mg3Qsev3f4g4Z5YSeWBXRv9fLEyBusGZgQ38vfb2npwA5Fpo5QVCp5gr",
  "key11": "3CizDcvnySziPTJ7UqtPqDk1MxKpSCJbWT4FmJUbuLPWuptVe8yvKmoHa2Tw62Hrh9mXnMJB2c7J6RQaqwBFE5ug",
  "key12": "3RuMfP8Mxib8GKQGdQ9dUiudZ2Ueb2v73kDNNhE8zn14tjuCQHz67pH5KcP2PSzHmH51HB7KBKgq31AGNYxzYErZ",
  "key13": "5GXcbTqV9xVriE1vCjXSBR56X1MZZkxVUvZbdTc9kpRaGkn7Yfr9AwXxgbLiXLsG92fhFZHGy7sBwqsuRJjefxnk",
  "key14": "5KGVmEV6VD1RZHhFS84HfTtEM3Rhw6VAw6rYZLb6ci31m43BUxwCdDDGGAuCb5uHNG8nby84MFZdrR7L1fHZvbmY",
  "key15": "29wyfY2TJdHUJkYnph88WHaiFvJb5seDGptBvJmjXYzKpqKdWAkTTAErCZXDZ96G7NTd12GkbTwwypdPjqhiF1s9",
  "key16": "3f5gCnkrvTjBF3ifDss9nRVQsg9cXdXCziGkvFZzFVnsZ5PrxSieCUEQyh1midGEQ54V39L1JTS5ehbEtZoKqZj1",
  "key17": "2jYewo4gDThh34GJ3kbM4pRxnzRibAnmiN8tvU99iY6HR6agjB3gDo7iQi4bJYfRNDzCvUh9N7VTMg4f5f7pcTZF",
  "key18": "63Dn8FH9LbgKRCoPJKXRnCU8veTSW6nCXG857XRLzYoVSoFXMLKmhgLPZQvB5ZnQNJVy8f6pCJDeqiz2pEMtXM52",
  "key19": "2CEGt4LCVMcmfjr5ozGR3iwh6dFVhFd2t24HPgYogXQKNiptyDzKk3xWpfkkdgdqBMBfZ38wc5aQk5d2bC4N9Bo2",
  "key20": "5Kg8JmeP9JsJHgsBHPBX7CYaZ4Lu8WxiMYuGcKuJruaCVX9n8kxEkGXRyZaPswJegF9teQK4xsNQ2YUiQz6rZy2z",
  "key21": "5gyW1eL8WZacDbuypdBa1zbhaybuvVEQVmSAWJ47rpJbDvpjjXSq8oJcxjYXVWS8NfN4jEYjqEwqQHohrjXrbtB1",
  "key22": "5tsxvhqhKa5WyBveVkkkhbXmibq1CZ2G9QNVezjrDYSnwACMKQRurW9sgfRYPYbyyGAoVbnhkxMvXruRS66Mkvut",
  "key23": "26tfMzW9DDYTMUPNfiz5buht2P5i3Fi7mhcaxkK42g7eeFEwwUHwUgvPo7mjQRv5wSRZTJ3BFWRqZJjpRXoGqP4Q",
  "key24": "2o5esuYhG5PaqGP4mdPs1zqfYf3idTNyeeTDQ43aKSPuizWToreLkEBGF45gpjRWN38HTVVSnZSJm8Vz3We9KMMc",
  "key25": "3iPqvWTvsqR7LPvpgQac7UttcJ4ZN7p2L5V4q3JQgNt6npS9sweapA4f6ynGGARQZxX9UAutmUSeuf1q9ZtPb1Cs",
  "key26": "uHSDKCRUsuXkeVj1yTRkcNuZdPPAawAMmQugvdyEjHfEAS7Ltjo7JGSEBXFLoUe6Hr11ko3Xou7d1Cp1LhbDdv7",
  "key27": "M26LxiJCEPpb89ECa3FdjQGvTt9UxgxrzEbP9LhbkD8kpTmzg12Mut1of8Zt3LkkqXtmJw6x3Jjt6oJ1pWAH2ug",
  "key28": "5qjNsbcYCao6pjgmRJ5rfh7FyyGpYSKr539p97CKzRseaZ9McsRMDiWpa5cDeGro581SPvE1Cmz1ycibjAmgRFFG"
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
