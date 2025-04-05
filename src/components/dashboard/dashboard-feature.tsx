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
    "W5fPpXw3uFF5WNqKcDuDcCyQpZPyKm1tUWYwJoyD7Hf97xKTJcEMRfSZCER65Nz3Eqs8Xy3VhcNM2E9UoTeHRo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zar6Ba4sckxmp5Tr8RNUH7Pamu9iF3bjsrbB2EF4mtSk7tRcYTTZSiJ4uaqXfS7j3qZWHzCsT1gYT8DbgBnaBYp",
  "key1": "fCGqMrQQn4GRHk8w9aAK9ZhzaVi21enor7UqtL86dCBfVeB6rkHZSTV1HKzf5Z6GNG2ETvnYc163DFH76QpPnPi",
  "key2": "3jbtoFJaxjM2WQ2PfBwGSBQw4NwcGP6sfTwTvAnDJHdZqyANYm2JLf38KD5TwaRZkGGg6qoBBqZs5FWBNvTQX6GB",
  "key3": "55f6VMXTdxfESievXpZ1DcXBmUbBdg7vs5gUwJTQ34iaAuuhHAh5RUE77Efz3stmcLBxm7D3v2TtAhe435NaqQRN",
  "key4": "3fvJHDncue8KssbDxkpXUxyeweVYi4HVPe1TU1emr7gXgzfn6p9fKx1mpYrEvZBtXV2PyBdRfpnrNRGQLH4mSv2J",
  "key5": "uQoBAuTqUDC3jH1zH9bVMNGcCaQ15ySp4nvA89z9Z3RTGmzgZisv3PFbKcpyUmVzxfs8pchqsyteehbGnLLYUuV",
  "key6": "3PixRQmTC3jdLRGf8zNejx53RbuLhCWLs4twnoqu5W5aYFLj5Cgtk3dG2tWYRpEKUmnk9HfqvkkhkCoVo34Nzm1k",
  "key7": "4Cy4jGfnRYg8r6ayQfFFPb9HQeeUJo3zt6MbMu3t9xa6b9fdyX2d4diAHFQNK3r2HataQZg3TfkXWU1bMwCyRpj8",
  "key8": "349eyEhK89db2RZbvpGUZAwbxwEtiaJ1ib9tNSRLPfofxhUhZ7NWj9QoZK9szXCjDJMZSwzeCiUd4tk4Y1gcTz8Z",
  "key9": "3MywLitB622H7813H3v4GnAPcjy2wd5jH7LQjqzrZg8iz4kw2ATFKfAdTaY75UAsg9vx3PjiiaMwthxE6rARYkt",
  "key10": "2Ze7W4oeUmxQ7ab7ixAnJmNhWvY57PHutYGQCpTdttNU3JFnvViUsjmB3zFj78kQyssUMxuTAHvhfv3qeSnZPo94",
  "key11": "3gXwXMCJ4q9ZLvKLTLnvYgyLKZCWm7NJAWazZyCfeGF8k9g3MVUKJLwMZyYj1EUr3eFvE2esuPGswQLHo5bCNuY6",
  "key12": "5uHANHbrBaUwGgdyj6yxTk47UFM9dXjPA1W46qraMNrv3FXHH1SDv2o2ZXoeUiBUy67NZJqg7dXchB398jUg2p7q",
  "key13": "4jJZpQKmww9a1voSdePbsJzpNr5VEgUfHuuE23Lkrf1DumeLdC117vFdNUKURrEPBaLKgP1xEuLJ9gkCxf4VDgjM",
  "key14": "2go24WUjbQ31KJDrwe9V6YJBApycAD5uWS8dMRTLSafGji3vGpru5YeGHj9FQogrwJjz7yqth8s7RhmZwfx9AFDN",
  "key15": "shxa5m9Af3q76UGRTXRPK1tZBHpX4wZWY5hmHq85Pb73b3H2Mfw8dVPq2zurhvL48nijSckSeiBnv4ALBg4Y7tP",
  "key16": "W3qpeusyUt66kZ4Bw85b2Z2yiYJyBWR2DznonyJUi4yitCReDLLoPL3pAZhu4S6dXDUMMx9TnfarDTyyPPtgoKn",
  "key17": "5KnEQvAQZz71JPbEhrF3hoNiRzwV85MJf1BXwEZm4g4fzAXxa81Y1hiqwYLRuhfAw4pFKpxbCwvzqRPJKVX4bsEZ",
  "key18": "isTk3izX3Xx9wHWVbUMDio4f7DPG5nawyCSSj7hrHP1Ajen3GTBHbYwd2EvNts8vwHr2TGqmAa3adeb7Hqwbxb3",
  "key19": "3TkqkXCM1UvrzmBKdAYHbx1xWYwN7qNxf5PGtFBk7fQtBSEbfEvQ97yYDhhqnqY3dLn6sG4T2LHgEKw5QNhffDVX",
  "key20": "gYdcdgUZAFG3ACJMuCK2LrW4TJvohQzwmjbzoe1gR2UWPEuaSCTu5g7bn9xPYoZMZ3NvRKco44yNvUu9dwegaab",
  "key21": "ydpmAs5G5ZDaHDYGS8Me5EiUupXViH3UZsEvAQ55pjrJQeT8fG2m92beWWe2An6BJ242NiSFzm7SsrAAHukjoGH",
  "key22": "5c3gApXtLEroPcTKpoNzcr66o8tikEPncnfdWMBLN3Hp7B4JDqXgfN3WjhS72YwQ5wfh8xotTGEgcZ7TSYqrfFnm",
  "key23": "3ankp2rdkBonZP39yydvHEswFzczoE3JPPVsXv4VfPwL2zMua8iZuQLSCHtNbnZPqa8AGNHVkYrhpyYyf4UR7WSU",
  "key24": "4TyF49VyoeSoX35zUBWDSXQ66iCt6uzsQFH4RFdTUUoC71Ktipsmhd2Gu8BqyPb8X92M7vrVy3ssjs12Fic7W7tE"
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
