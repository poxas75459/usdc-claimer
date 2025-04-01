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
    "2cfkpHzzfRVp75dEPH5EWqL9CfgcLsLYxkzKMcjQmpUyD17r9wVjxteFtWdxWPyx9mLkiH4ZciaeB5D6Un2zEA1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i6b8sHAUW7ZfioS8w6snLyY6oew2C6zKH6fZwTGBjc2CJVpokCurWRoK2VGw3KoUH9UFwtPALSFGRKFQxdPxYPB",
  "key1": "xbc3T2kP9Q1tPCbLX2q2HF3gRtfCJnYrtYrF3h7Zfb3RWPNWDqkFFZE3Gw3eQK1H74dnB6oHeA8pDPtTNrq7H39",
  "key2": "2qXaLEvJgMTbizp5Jdv2HRjSVufeKYv7Lu7VK3RjsBdMQ1uBkyUuXqWZPtrTPxxmXPgR5XCWA18zs6HrN7U7Rrk3",
  "key3": "3cU1mJcM8BeEtZZCN12VdHxqbQe9CvdbqX7oL5NSyMhzYupuZW7AgQsafJm637k6EZ6RnLdHfeQe11zHLxzJozop",
  "key4": "2Z2aovjDaoFihAfmfgmBnTXPmLAQRVVXgHi6jSoVGGWSk75vsSs7KJa8NUE2UuPHJkWj5Wm88cY52JmLMya1u6gR",
  "key5": "seQnmSikdamDcjrsMcPuqZyohVQhy5mhcqMM24U9HRG6RfDTM1XKkXhjpCUMmFphUtXubXsnveLMc6SdZbjimGs",
  "key6": "Q5FfBnimamPzAeAe1dfnR7VVSLpFMqoSVfzG9u6UXXqRipcdu4yti97XLXchWn7Bh9sRydoRL6srVAydybwkqEz",
  "key7": "5AQw9qngFSGegRFywetFvL5jARQus98TjrdfuC4EohBUyufJAJtwbXEyUTAfWo3VaGxoJLAQ4g8Zk5HPm5c2hN8Q",
  "key8": "38yZYwhd4UbocFt6u9skHSyCYAoLm3hSbMVayEu9kDAaLyQ1nciEMHt3aeALcJpnytTucaZ15dtq2EAHoLkfWcRb",
  "key9": "2u7iYqMoEWLCxCy1EmLUcrXsUcDSaURpnHPFMz7fZMVy96W1HsiQBnxpq2jVLr7EZigMvbwogaymaDQqR24E5Y73",
  "key10": "4dkXadAJmZJqfFWwj7HMysDWxbVhvcSdgkUNwdeVinRcdpXMDgPKFkzvatN6Vt8c44BWPVFqJqmAY98BibEYegN2",
  "key11": "2HmQwtkAb1F7avUKozD4RxShhzjxYLfQSsxW3BHM8xqmF4b8Lu8YSTBdeyu8eZ8Wx8RFmxhoaKtz9tq9mKc2G29M",
  "key12": "2cZ6VsSNTdtSrYNJQSDsR1wobCNqVDoXbQQM4LNq18z2uAg1Lr6KimYBQNYRbPN2FjGa4kueXA9CmY7cTt4skKrD",
  "key13": "3aCYph3HC3uLonVuUJM4oJKRhef7A2D1MVcwdadQasmNEbwEbMKEGUXViyisVupaGZgRcRF2SJDZd8Qm9NjuCWHJ",
  "key14": "2iswkGLSoLAjDgKwyPvu2rsn7NRabZguD8wkGYPkdFoPv3KFEpm7Ud8jq2eb8dpjuukruzjLEMGuG8t4QREfMUmq",
  "key15": "4MJwo1SFr193oTF4aj2vFXYQXMqJaVZkWZFp7u8wAwPZg8LTG6CDPogKnSLDHNgrB7E6osgemK5kNMf9zXUcRfb6",
  "key16": "RvxEhPsm9cHrJLwAsXpW25cLgD22JEsDjejxvDFLwsVF559fZFh3MztTfYqHbXR28diWVtMwMR92dHM3A1GePn4",
  "key17": "21jnZaoBhcwjCixX3vum2kS8kK7tBqJcVsCu2DjwbYcZyf8i5nu9KHycQDVL3vTfRF8jr3Hu6JrF1jpdHS6qgfMq",
  "key18": "3TkEWnfb5WzaHn623fEd75gpCqgDQYF6R24BZ9aNU1nrZeHwPRfKUxdGyvX9KqydgThqR4EtXoz3CDfRXCHosgx2",
  "key19": "2BJHf9koCBmmErJYLRvA7Lr151rm61sEczftyBeSgu6UgG6TNDr12Eu2gHNCpLCt5JHLRobu5heJbDD5W854JRsj",
  "key20": "2GXhjDoZ269FaEBFk9nyd7mp1v6UZ2xj7ZA1EDc8fkW97iV6KspBUZFPfyxpxgd9UWtvPahZ2rYPBkN3Sb4MSTjD",
  "key21": "2BDGB7NM2qvB1PrBJkQDjRp3zFJ27ynpDTR5vbjjXPsaAgbawFqhJc4iABzBFacixnwsQ2KRdQoudSC5XTSRGBE4",
  "key22": "4FwvD8FJE1YuyQWk8CkqnDk1k9QWcvF8NDWkyz5Yh2i8D1qESPHFvMwrVSveCVehS68eKNpbFSsnc8aUnx5aSGyq",
  "key23": "47qrmuzaFAk9Y4Rs5YgEDWSudmZ6YpRzQoMwt8Kvgk1CvNDSjxTBf5bSHZ6uBuHFpMBJiWx5ppRNuSpag3YXtVMi",
  "key24": "PQhX1aHmMmv2Y1MNmYcs9UsvoevWhpXPYASRYVEb3i22Ay8ggsuoRKiev6vDzJ17wBB3A5NeoKRifYZdVaSVTMb",
  "key25": "m9rhQQTWM1Nwv66dPYH2QEqKVHn6oekAj283AEncvCfiL6j5ueMydfXH9w9RYbC4uB5pdMhmWhrmqfZhdXatp5m",
  "key26": "4Ki7rAqnjXo8WWfLHs7cEEKcn86272qY1SHFcMBQqw4xBcUaqpGxde87rwU2C5jZ9BNvDH6rpmPGjnCqEix6wooj",
  "key27": "4PfM8sJXGt9nhyPDYma68fYCTtQYt1KH2oyPPeA3Uw9PWaPsNoE43xsHdJAkmSms9harjAHhTqNeKgpMCPRrKSPf"
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
