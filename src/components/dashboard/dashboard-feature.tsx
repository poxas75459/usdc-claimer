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
    "3rZ9JsBHHvD9wH6vLh9afjjXbP2YL3AGXppw4NPTGQQijgsFA4WrP4ZcGMPXi5pz9gfrfZugPejLP3bDn5qmAA1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qhdg24YGXwnC2eZwBh7MDnYBW5FDRPGfepAuCyhNtjQnHrfVsNZpNbjPXgWhC659FQyvKuHJz6RNNRX1wcmVf2D",
  "key1": "v1HsnuRxbvmPeuH5wY6YbD22U7DpHjrqy43gjDfdAuve2ifnFwx3NcFbY68m9HmNUNDoj7SiJCRTrm7LY3tPw79",
  "key2": "28Tp1Q7Ud6EezGuHLYjHbLQ5hfvR2Zehj9r99UVtzUeqXmpqZkFNC7vd7pCS3VmZQTDXnDNgDVRtPwQ71wiU1aYF",
  "key3": "4f5ZyrVEYYDfbzf9NzkLTPDMbsjjGVt4URrGuWJnN59u1GfSHSvLufUT4upq7Po9NYwWvvTvUfD1nMiT7psSUJ7e",
  "key4": "4UagdRynEHHBBn1sg8hNQwJ2ZSw3vk8XMEQGLe4VNdBNNgKKhMoqyrPiY8UQSd8eoKwz3SM5pZ5z7zmTxXnq7YVC",
  "key5": "iuH2FPYUD42BMaJGS9C47m2GyBAKN7FH5NNVx98Bfqg9B4ctk5YzBYCzm8Uc2Ax82TBh2qxpASa7aa1L6p2gciF",
  "key6": "BFmV6nKmXtrRMqFw6Sgz4sMKw5d36i6NKYhRS2iWMxSKvPjDRWENJfQgWZnNmJG6KbAYa3xY3fg9pFbhSgwmeji",
  "key7": "AtTb55KwZnYJa4ABFNRtnubLTE33yHaoceLbHzE56oGxzPuudMW3xw5K7Fsts13sxdhgVKJuF9PSaL7CnF1Bufp",
  "key8": "3px65chpaSwzJw6ysishhk72GQgzq9cw5dGYLCQNh2BQ1X8Fj3oFNRLK7qZsCXJcGN9haEpuv9EL8XWPh5cov8Au",
  "key9": "2FwrumeDCVL5dXyaNLVpj9KBxW8FoQbZxuLfZUBNoDuvZAEwwnrFvrWi4czS5UMtVAMnY7qg8jf3aJKsngXTZVEx",
  "key10": "gdU9q46JvHyW2ioXWKedJaq8zKisPJGcrLA3Pm2Pj1AyeAF4zzF7TQRxhGwVxowj3kX5oQDGUMSd9Q14a6baisY",
  "key11": "3jntVEiG2S9mZSmgYH5GWZ8fBFM2HGsvHjKhU694DDc9haAvTc2N4LURKfD72jRB2tfLpHgfEB4zg6NSyuoApHPt",
  "key12": "5Ps3LEfFRm4tCzCN4yTQ1qFzK4HJopah6P4wPDEByXzoKEYvfigqBvesRX43hckwwFpEAuyUUGdk47U9iJiTeVnm",
  "key13": "2Fp4TCM9hFbezwnR9adSgKqCjtyWHXyxXD6zrfa9cRS4EPh21AA46KfKq7tJ8Dq1b1AddpLL1nrk68LSTyawvmuj",
  "key14": "pTc2yAmerJzabafJ195iyk2BVMdeP66mRQBWvHLKjL6cJ94sGVaqBG9fWT4k3qbSoU28DSW86LPLWVxUsZtfqNk",
  "key15": "5BhSPhi2EvdFqcnoSzStYmuj9NP9mvf37D4Lu4uj3jozGCGmj6AvX8pJzebA5MTMCVg8KZ4ySPaUKDEyMUJQ8K7s",
  "key16": "mmNwsYBpU9UvJo67GNMioDJcJZBCAJgDVayTRhaZAc83aDLEPYUjjEJW4Hvau7ksZg3SyzS8hHg2mxBJWsd2hU4",
  "key17": "4PWAJRzjxuDxkceecGkxGH1gnWmn4ZhFf8aipNrr2vJhKkjjw4N9ZbwaJ5TcAohKREMvT81RApj4wgX4ZwqtZbC7",
  "key18": "4MwbqxxkxafDDo4RYXdRiWzVdCCA2o8QzdySh6mggBgviM8ddKFHsQNhBf2YVbgKaxVCym2s1uMtJ3PaZC51eFYg",
  "key19": "4D5kjy6vWS5n35F6Vnf2AUdC39s67KYfdGpZ1iFYXv5NYTaLJL8wGVVXp2xgCax9vaqozYJpF2sEuJ6ZRjF4hT2T",
  "key20": "4uYXncNJjvubqnc2nu5GGMPoybbG2tkb28RLoTNkUpX5HECGUD9dAoe69St5WJjnZTCKpGmYmbM8qaix5TF8nDLx",
  "key21": "3rXvZvJvb6ffMs4eXv8bXqeCjbZcD9cPFFg9JrTBt5GU3UrS5e5z2eZat9r9whYPWdbbxuMU1eQguoo3UmvyStdU",
  "key22": "5zyNQbXsmbh9CoQReME4ZC38D1Suhadr8XSd8rcFfXubptZq6pPGQurAVQMguAccuTxoiNVgsJj8D4mFJxCn9pTM",
  "key23": "5LT2WddTkh4tH3ai1nHC9AWEB7NFahW18dxU2PU1fvncym2XS5nQBHKBz91JUj61gsxip6mTXBFe4rL989aVCu7i",
  "key24": "HbxsDppAVL1yNcxJDYfLYpQz8Anqn5Qt876Me4BeMCtPtBf2jk2Wpp1gc7JouhUAFmHmtZhMzrtKBxm5DmpXnTd",
  "key25": "3HR1Afo2o5uUmYN9jbCBHantSYDTkf4DjNPnRcGuZWWpKjkGfipoW3EfQiBysgsrQkr48WyX2qR1hqHxULF1eT1B",
  "key26": "5XsC4zo2gQ5CAZnn3FuZKcd4SRsiVQVMVPcdJ66PciRpMPNVwF9ych75ANjgtgC21TZH2AymdniB86pxhNodUq74",
  "key27": "4HmNbwsEjJ2gYLxtPTevDMtZEherifN8PjvnLW8umizGzyxZAmsToA77HkYyg8VY9mLxc6Mw1smkdScpLV13uQbA",
  "key28": "3TCkWeUJp1Yhj64pB1qi39ikujKrKfU6rN5GWw61KLgG3p5HNppAkxyPr8Krsu5ghE4x3Lkih83BANtEKimszLRU",
  "key29": "51DrTTu6Y9g9GUgTMmNHpCQK2RdMd7NvtXSVsUgR9c4QwQ4jUJncNkrZtZmRWANp4hqzFznD6D1qVq5RMuAvnzhS",
  "key30": "53mQtNSykPptpmK1uhBF7KjpKU2NJXWkKc2qcHKtqkoaX6qSbMFvbWFekY4M34zXmjusTPraMoiCFsm6T5nqvpdD",
  "key31": "2BUWkXuXvBTzyryGy2RFKoKBUt4c6LLhYzAb2zKNQf85SdXjtBUQxwfS4MRCsEDpe1j1q82B4NAEgSfwRXkGngTm",
  "key32": "3StPz7SHZGskJGW5jNpaBzRg7j3GwF37rPayvfoV7nbJBLGfLXipErxkYA4Whc1dvHktQNQr2PKikJzBkoXT4WEV",
  "key33": "4MfmdSxFoFnTqCxZJuYdXzfZDtdoRu4NEBzAEuqAUnH6v6ddoBequQTHYQtjNrRCJsKFumLAficiQXwytsjdT367",
  "key34": "49ao72LfAzNpgH2J4MK3hZnH7VkP6AXxWa7NXzXZ4gs9QetZGgizvEUFgyRUGEKhrrww698HPRucevSfBp4dYNMq",
  "key35": "4ToFz8XMMTByhbMWZgtasct67w1wftGoF7sVs8S6m12cQmLchH55JTVJmhS2MubxJGyhW5AXf2nDibUrGBD1pXU1",
  "key36": "4AUdEBgN5hF2fvXrArYpoRzspsapPxqvzapGf4WQ5AKcJY8GGwiRnpWU756ov61nMst5oi1YZDyncgKjY1iwXsPb",
  "key37": "4oxoZACVps6Jjiz6W1YQXjW123Sezs5kHXuyyvSCkrPWFhAxhJHn5X2Y3mJHZ6mrna39MxkhVpmuoWwnH5kMNw5K",
  "key38": "ZTBYbz58bN8xW7qYfvbHLasHSPUdkxFxXCePDrLPC9N6mfFtGTdVqTK6AAwqwL677C92dTE7yQUsp4TcqQMC3jf",
  "key39": "2KKPmCD4NyoGBYRar51oP7pmHkJE97ZUr6GNM56nCs6pTRAwYmsN2LQPCT1bqd2vEmCU9XDcjuAXLi5EoXLctXcb",
  "key40": "2BwKFsew1tgdJhmEasetSKrE6nsQRkqKe1qAHNri9en58udpcDtYEHyrZ97vzNDdnWqLNrTzXs2hUVSKHncx9i4X",
  "key41": "gVDqKbZLBPv8rRfGjc739nJ3UEX943BM1cWcPCaS77X7zhnkwDqD2TKt68YFXoWKmPJ2L6SfJT7oPnYQyjzYyxc",
  "key42": "4tLNSdW6C4oMfXPKEim2tfTWasyvdGuHVwXhR4a3ucJ25fioUgFbuLsjzW9icbGpbezz1JPppGKELpm97TuD5Ze9",
  "key43": "3yPwwkAL5DMdto6uzPFuXv5yNCj95orKKN1i6QLoaV6po2RD37XEGgzdjhaVZHMrRKKjCbAHqAUQ4uzQr8mvAEZm",
  "key44": "3kqjot6RJA2ZYL8Gj4tPCu2iiBDUV2M823CUiCjNmHoLCdGq1AsZ3eECmMCv95HbstAdFnycWf8G7D4p2Fgvtj6o",
  "key45": "5xCetDHdTUk5fzmeBQR2ojXUr8fDgTKQqbGc728mfASPrmq1C7hCarX6XTZrjrXpEbxAjPbPjTYqQoBirim5TL2p",
  "key46": "4X5sokGbtoreLSYJPLfUMM9gqmKhqCWtyxvyCCPR8vU7pxSka94haJtJTQT66hppZX42x1DpsysitzeXnugnspjC",
  "key47": "3TkXzQgdC3MSmBWQLrgS77KgxnhWi15CgrrZNUWwmTwRsfWvae8EV1WwwYeQwMWsxmhEBW6W6jpvjiaNY2TYC6qc",
  "key48": "45kVvMgdeqT2x7tnUpbd6dWp95jkcrQzDTf9edWUeumY2DUTW1bRbAkchmqdKeWL4PwXSWzimkFFwF3kvZ4ny1sc",
  "key49": "3P4bscRqrYQHvqyJnptN1NUZWcrEFe3CS478vt7fbwsGtMckmkqa4jKmnk7d6ex2coYkPb78mezkEfu6FZut4pQ7"
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
