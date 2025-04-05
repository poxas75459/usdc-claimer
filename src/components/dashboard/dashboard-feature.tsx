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
    "3pf4MRzHq5jSus4uJ1CJXhMRjWKJyBBDNTUDiE3tks8jhzPteWuLzTSdDoNGoYN9FgRA2mL6xJhcuu6Ub1qHxfBE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dM8T5i7PYsVxvNaCC3cDEp4EK4AFqhAzihgEMAnAiij5Zwk2J6wkuiQUAyRMjavGqLESxzDuM5F7PrptbnEjBfR",
  "key1": "3uouNiJ6FxtrNnbE48eHz6ueiVRXknYMH2SkombtJqGo3wvEpF8jUs2rgqfc9F2t6oK1CgaZk7xxwdrdohnDX3FQ",
  "key2": "3zybevuW23U5KdnLa1aCiPxRCGvMwTUo4oo9pMFKzjri9mSoR26ekR6W2Kn3whU6UpDnNy6XFCaV5ggogzhX7BSH",
  "key3": "5LXzLXNVAqnHvrzfAQPhZ7mt7jTQc4Q9DMUk46hXbGmTMQ8JwuLwXgspbSB89UtBCAtCcV2XZNA5FN45aKL7UTd8",
  "key4": "5N2HQ1QS3tR3jdiDTr9aEzKLzofGWWGAytJLHvnQ8N4X5mgxB2WyCUMVTVVPaCj5vwYX7niA4GsfikziWhZggxgS",
  "key5": "kubRbZts1JgubhJdPVoib4FN2xdn6kAkqiqMRDkhLfQ9NppUXaRHLLdX3B1zKSitVt8oRjt1mx6G3uxokBdq7VT",
  "key6": "48c6qs2oV68E9U5k5FxTNMJQSmnwvWB45rZxYXpdEw6Fy2uTvaCE4RuNJXnpVF6yNsWhvrgCFQVssCdfMAEAT33A",
  "key7": "5J4V9Ni4jbqoXwi43XRPkgGT94zDpqccLkknLHiPQzyvmtAc17a4NgoZ66e2fCMhJJmdJnonci884f9tcyX5ZvKD",
  "key8": "2EZGUvvpfx5dLZ4pQe4ZwaH7HkELvw7zDrCPyEJUewVdmjxBZVnvGRzhPR6wN1Yg8GTRFqd2byjhkKuQTxELAa9A",
  "key9": "4UEyw5QmBv9JGC5aU1oxVdaiShhTaa24XmZGwEyjPydjtstPWdUvQJU1XKpPfqxETLSdZUG2RMC1dTBFrF37ikic",
  "key10": "3v2e4KF9QwUGXTVwkgFSfGgsoN4oDPURy3L3p1Hgwm5qc3taYyGY29FRZTXdL5iitWQe19391fmJrfDrdGUs3voF",
  "key11": "yivwRsL5gdCEATVNPaFkjUhakAy6HNyMFuDxJ7puguoPgnRFZMeaDzgPJu3SPaxoajRqSTmPnsc4LQKJ5wdyLeq",
  "key12": "3SW3XZajpZHE3SBGgv8pLm7QP8epJtnRHoRuePyhimDU8Ru3PQzURGYVDKihjmdGdo1mhqbebVZRqYpaSBbJTtuL",
  "key13": "3Fy6ARjW6AkCJsvgjGwgbVFEskJHnHYqqjrc6JrnLxmQTGJztt9KmnWxbC9CASP4be62hkZoBAw1MupChaGYKUXT",
  "key14": "5rzv8EZ1BTGUifrEAAr25Ua5nHvK89D3FNBiCD81Xs89WBvwNJ437Z8CKDpEPJUmedkmWUZdSZLpgoWB3mYDXoCc",
  "key15": "5KUjsZk8nm38HNZa9YMPkTp58C8VhfYd61e2rf5sDsMswpcHiHZDU51G2mmn6oVNvafSoV9h2mSTfPrrWKdxDuaZ",
  "key16": "1hBiLVg4SNJK2oosxUAsmEwxo7DsivbtcH5G1WU93rN4eVxWaj7nvxpheUruY7CgRNg1km4HcgFQYym3K17BJqn",
  "key17": "5r7Dc16M7CdgRGqxihsyfK6b65JBKGucr9uE1a5HvniN1twiujcBYhzccRd6dKjV7Tb2Aa4cDa8DimVrZLbRdYwh",
  "key18": "2j9xnHFs7yyvr7vieBRoLAogp57N1MaPjaTt8wAMgL9hUUYWU3pK4eiCffyu9eUmNwv7aXw8YW4TDhh1JxbwkWtU",
  "key19": "5iDyHuvgkkNcs8P5vrB46vb2WejoBXqV8E7JoVUwiUyQ3WciaoCJJ1QiuukX9ehhbV3ZNh7rSamSfzbsgVhnikJS",
  "key20": "4VsKk33T6FD9H7Wm75ZvQWsZ15gubp3vY1nEe6skAKtenwSdoJNF5jTdDSDrs7s6Z6ug8HNq3t2HrHadGQNqwKZW",
  "key21": "VNcX2Ew5qfGnx7r9TCS2u6iaiQCKUiXahVWbwbb1bTnyWx7gkNjcRNR8zGS7RhbEbXd8boqphpdpLy9KxckoZk1",
  "key22": "FEzGpsVmy9StmM1FFDvcHQw4D6QKYinbmjJctgmXYctw5PfbbBhBChg2YdeP16g8b1k2oR3Z1JXK1E9fZe94Ej9",
  "key23": "3rjeSrCMUVTN28idfv4FZtAt5By2ivYCZL85BzemHkpPTRW43syC2i1fVoxqzxE5TBKu44WNRdgqkzVTPSBomwkJ",
  "key24": "5uY7C8hVYEMjLpwcpVkVppVwJb85U1VRj67dvZkFRugWPX2hVmnXdur1G9pXFsckgP7qFUyogwm7WuLTQviC7dyA"
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
