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
    "2A4ospAPZVduJkQD6hHWqNTfiqUW5VLvj5D1uvot4hXjtje7f2Vau6dk8DQgVumZ7UCuiDmnuWE11VJqCFsnnp27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZwiEa88ottxCLcciYpJVedmJX2zyjmE8SthUmRA75GH2DYboeNPm2qB56Xcm8pNZFbFbHoLHVwSA3yfoY1XJ4hq",
  "key1": "5a54udfuEPjFEgyDhVXYRdCUBmG7Q4Vh8eemEX8Qc8vDZTF57rj2ZEv76ihqWbSzYB2NYGrjqExb9u2hBAAAfjJY",
  "key2": "rEcdoCGVVvrxqDQfYsyBjZJjewcrvqWC3v8WztujWNVyw2bSSeWaA1HiZxCCxEXZesfcZ6k6PSg3n1avNcEHbW7",
  "key3": "5YGhUhJQdqNe6dFv35Hp1x3neqppYG6oMbG5TsTdHaAaseDMoJAKr7EprUJpzTN944xT1mx5DS7PRBKKHwGe9art",
  "key4": "64u8tfaR3bmJ1ZixEJ5K9PP1KMopgakWTDxdTdeCeFWxPBdUvzrxAuwCgRpRQEaVx1PsDjoE62ZhBYuwWhMAosTH",
  "key5": "QffmTokShcZxPYN9xwsA8WL6QCM8T2F3MijSgeXErbEYfcAy3xpSrNX4tHFcH5B7TvnuMEnY52f37NM41ZvPQ3J",
  "key6": "2kUuPKFwgigzeUNospuu8CjeBhPN6SCpQgTkPGd1zASD3YCo8f1AeTuX1Mezn4t2tN8QVxBnc7JnddwvoUXHhTuc",
  "key7": "2AQGaTbfv45hV2VAyAbCeHhxdpxGtMvr4xDyH4BHY6UKHKzSsgY8x57yj1aBQz276z4dVzCvdc7iUF7smgEFU5bK",
  "key8": "52xC9v8PY12aZGPsctpsYFUVdU3nHW5QJhtz5yvEAEztceddcc9LnVrRXsSRdrEGpQ2b1bn6Fjqo3fvRNT3TLzZY",
  "key9": "5dizg6H7G2t1Vn2C3vWsKzD3vcrPXYxxRrtV7pzXUJASq61GwBKSCYh1L3xFG2YtpqfQUXofnsgCtzx4zBH6HJrC",
  "key10": "2Bvimc2vULwPiaNdAEibESP4atvUwu1UifrEZFdep2xJe9qrw2KNvroePs82keW5tN5c5Y4MwizVdeGRpaTRaQP8",
  "key11": "4h3Pu8x6WmBmf2vFBCtKgD9HyyyysyhhygPfr1zqX4QpNkVKP9imasdo8sTZxNuCwwp8RcVabd6gLo9NBmLqXrxL",
  "key12": "4oULNc8CrnegJY5xWLyie2gtQSDTEmmQUfJw3Nji7t8EC4GyPp1FkCCjwFyrYHWgUbMvZgYfZXUbaS2jTBntAjnG",
  "key13": "2uZxqGA4QZs5XA2ZpAdNfMUBcQ887s8eScm8n8pqyFpfBDNPCZc7gbY5cmuskfUhQ46YGCNr2QU8PC3hC4GVeArW",
  "key14": "2EfaCLmzkhj49XbJ7YzX9ziactKbgzM9A4UzkVCXHFEh8CT2hRKmeVx5Jz9daCMrTgNye8PmJATvTLzhzUtE4F8u",
  "key15": "3CeibjQAA6tqmWo1nVcBHFT1yUrN34vgkroRUGzbhWAdxAQbJjnFeswVe71bq5QMD6KxRaRS48jfq1SWMxMYeBfS",
  "key16": "4KDaBTrVigFozsnjb7ByNmMWiUApT3SfGz1CzHvrQaj758XvaEK1swsdh8gtzHzbq9gGPpiWYoL15EN8eReFSmcz",
  "key17": "2JM2UWeiZonDhmPQK1vucRw4p2yw7Vvar6cFe3ukpeiwqrFsmBMCq5BJi7rRWSuiE1nHAbvActbK29YZ1TjXnz5m",
  "key18": "29EHfEWw7hKtStMBeNkDQPUisFH9x2XPxaEDcZknDYR8UyWF2At1J9whxMYtwEJGfrEopgXj95H41X38URofKXcC",
  "key19": "2PCpjr2qR2Mjd69AJmt57Mbnt8nFEbPPHZrNPwdu6DPc388QtWn8hpBEgdoFnfxYg2HYySs7LLQvEPDfLRFavcBn",
  "key20": "MDmyFbmdLgPMnHZLmSHKSLsfoT1Qjn6BzhqBBvPUtMLGdAyG2bt1ibto82d3qWCSXGHbzqwCwGrJyKM46NwvDAS",
  "key21": "41UE2Tipy2rbL47BwuWHinG4v2qCu3jBHRswAH5tEECMbTMqCoGEaVDAiueVJxV6168AdHC7cDBPMnQ1apGvqkaA",
  "key22": "3VWtJciA8HptNMBdRjPa9pUhcVQrezXPsNSxV5Bw6C9hUbXgL8fo4tLfGDNuKEqT2uRj94vSiJsbPuMDuiQjZVEA",
  "key23": "WeSSo4HTNrG53jg5z91xyFE1iTqPutnp9zhURKXLB2LbmbUdnB9hm4BpUCftcBzTeTWsvXVGj8HL7LXE735GRiP",
  "key24": "63yU1rgKJCdf3uMgt3B7qcB4UW5NCUL8KnihkELfvuwA5Jq74kuvtk9QRcke4wCvjJh2YY87zgVLgRyPAufYCKMH",
  "key25": "HRsuCf1ZHUuERKLvjv4QaRKCmyvz7vd3enMT5LyZMkEuKHgDLxPvNP6tWmKAeK2eRRzqAVkyva753LNXrzXbdJB",
  "key26": "2Qq5miM7ES4MX6vN5d82HqpmThMkMGjsAFzdfGEw9CBCB5RB8s56txDd2zHvxQoASRdEhcPfbGUGNehvfUzVEvfH"
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
