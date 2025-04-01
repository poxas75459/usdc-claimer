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
    "3RSSDCbjYZffA6mq5zVTZkhYMVZJbDJYyjw6frmqpDQYLUvMDNU2bZTzSPWmpqn78Wim16Pa7nHGSHKKpxYQwLeZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "444AXWjWpZzkBs8Tsf34FfUiRiCfrNuGUrp3nVEk7CT88wk67WourVhkJAkZvf3oxT5TVjR2FCHon61gMTRqxpHf",
  "key1": "5mwMiWLXAT3kHw9Fpk9ns3jhhsLpWoSPSUmhsZijCGXHSCp8JtUpo1upYVHZrvBji9KS3XqK4kJRdQEswHoZKXAZ",
  "key2": "3dyaQ1fgL9Z46Hf7F97siNGGvywVo5AqpPyFwZf32hmzF85PuAvjswNBUocTjmX5Joym6B2rpivjGFFi5pg4zfN8",
  "key3": "5Aq8oTH83ybVDRU4PKi78XFrAQdPN9bTh7Q7UeDNRTehisASvsMcuRVC2LUGDuehTHBLYZkJLxaJVdJtcEA4TBL3",
  "key4": "34i8pn7Kavxphdz2pv95VP8mzhd5aujSgUJAfYYa23qXt7ESzwkxG3NSKWWQgTdnU2cAiHNRWAyWFFGqZn6JyRap",
  "key5": "81igKfQ5z45rYQVQ8f5wjzyEnGMV7tEdkaYzpJT3HTBdhAt9jYXejWvCvizAPAbEhye3m5z81JCnooe77mrs2M2",
  "key6": "3AHGTyNqWANoHgeF7rXWPKzf7nSVEppL1Y3zdRhME4qvDdd4zHLbg9gHFxhMDt13pBCSvBpP4KatffK7kfv8cS5g",
  "key7": "2coqdwGQAMVqSt2d5cGUqzdoDYt1evLZDhjoV9pYHJUpoXutdcVkHr5fVDKuaPUg7SLnGKPDMAFE7kUhJm2kKmLt",
  "key8": "5g34gSCV6z6nqnSF6Ek9Yab4paHYqkHWcQGpLPwgpGCxMrZB9EDm9UhbbeXHYmdqJERLrZ1iWfQtSgxsVqpDDsvV",
  "key9": "4sSUsQjDYPmvJkZp6yZzBLs1T9LP8kzQn7yFKtNrocKu5TFDsAjrL9CAGUF5imv1LrWTuuvkikR51R3jiB7xA8pe",
  "key10": "2eF8um5ByjCXtvpGq425waar7ZZUz8aN6Y8MpjKEZoDyq3GcBcL5zQgM46w77dV8X9ooPPsG12KC9W7pVAAwwG8n",
  "key11": "663oD8eJwcG9Tvsx9hPGsyo5ApmRzyAdZhkqnTJyEREv4Eu91REbE7SP1Cx9UfnEGAd6GHJmrdnDWCJdoMe6EKSD",
  "key12": "3pygWRFjCAZRsqn3JqThimAAVb9Heqh7bJRN83RnthwHswwGAcWQdMRgKni81XQact3ejSGPfcfwpaBpBaoxvXBg",
  "key13": "4DDPepJDg5ggURDyADLzjEnDLqyfX1p8ZTdyYsLfNFj42qzbboxPQf3WNrakE8tt6rQYPoLrgyY4wQKfNJut3t6T",
  "key14": "5bN5kwFS1UChHzXshTZNbgNMDWaowFdaTXBrkNaPjcHCg8oto6HyQ76gdsr4bKUtRMpSKXT79MbERLp5MMPqNryG",
  "key15": "K56FEXaWecSi2B3ggcFSMADU3vcyJkUttF17kVGEYFgGc6rUmSeQKHfspQwqhCRempw7UAmuCrCyBCYWmiBANwQ",
  "key16": "2vZFoZM76aTCfzAGCfM4FyDJMYiRWe61d3GtYBgvtK5Mgqcfx4HCcsHYTSm2TZnQq95S8KoHw6YHpVxMXdCKNvvk",
  "key17": "4UCQPiTrzycMDNRQK8F7bSnD9xhutQTb3dkV6uEj7hkdgyAo9b9nnpJWoaeug1ydFxw6tcgVSg5XMKcLLgvfVKgd",
  "key18": "3Ua9RzT3bx7irBazFGq2uLxZFCFg27YF4naznP7t86aXKEmBUG5w1kru6S4QSJom9QAoDf632mDbQ8Vozx6fzk9f",
  "key19": "5ZnJJatFT2EUNmb5j3JARVDzyyhn42kqptXSFktgzBDfgjckkz6h1ofEBoFBDauCs3EYTYvGvPCcMoKDoWyB73y4",
  "key20": "4YErw4hKYzB4EegEgrjKxfcGrgvvAnJ5eywn5LJ15ZDLbBcTSC6nb2dGnKpijqziZFXKJfxjPJLyUbyvYjnpt8Jw",
  "key21": "3eFsPhcyAoh6UE7o1KG125qXuN91pZLX6MAoNBvMVXhMsSAkBSPPkYp96P7LUHunQk993oPFdKhLVY452d2MreSs",
  "key22": "28KzhQCjPLfjRoWWVrowzvAuRnaTffq1T7uwYWyWrWc2MNUo7xotgxW3jL926pXDGEK6JCCegie1ux6eeZ6RWHD7",
  "key23": "2kGHhMyLJZQdbbAZaziJwQQC6JMZCaD2qhJXoqZEYzvemyznGWjL2FfUGG1UwXQkUsAbKRwcMhWPDPJUpZr1C9kk",
  "key24": "4QG5bHHLSs6tPT8oasxXvLMcpjMPpWNM1HJX3Cdjj5RRwrRmAxBwpp2gQPjBy8cNBPnB525Fk8A7npbUTK8jMbvZ"
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
