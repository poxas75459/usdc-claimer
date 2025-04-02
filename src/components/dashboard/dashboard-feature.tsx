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
    "PENVnTpmjtyGUmGGeAsRXjLwyMAk2MLUHt2Ud1qLa1fgLJiq2p7i2fUsQTg2b7CDwoN6U3Ka9ickCpBBSct1WDB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ob6yduXEjan31eMVDfKzeYspzW14b47oyqkDr7ay8LvYFCTDXQBoZtb524cxpSAsDG7RUJhXDic4R56KUb9yXaw",
  "key1": "2r4YujPeZtxNT9rP4eUMqr2a2LjY2yT1SjoeHVVJT7sK3mxX5xX2ZPeCfFpTNyk5DguMktMfU47DqQP3qj2n7N4J",
  "key2": "2fKFcVTcdUFuhi5HYSWBUzYKrG9mQBBiRwg7dfhE7UHLr5dMCCtvDK4LcBxj5b9VLrV1VR29t3cyTiWAxoZTMTSQ",
  "key3": "2WK5Fx6JUy55BuM78JjyFz415vrNgZq6G5ssp43BrX9L8x3ZHnD8zdDJfBovRXyVcPSgukuFcGMa1LAjtXcy1RRg",
  "key4": "55W3yP1i9KDwLNMWhDzT9B5jzpJVSR9kV9oLewEriq2ApeWrrouvUAzqS1SDndXdhR15SftTDLHt7veGotCBBkYu",
  "key5": "5cUpKFmy8MAQ6rHw6rGe7ZQYuXcw6J91PmznYTApBQp8ACGyKwqfzeMLMdimmLTijTB1faASSaugjXkpjdT3JudG",
  "key6": "5fZhiCG6xAtAXLN2Woh6pJvHDW3XXMnuM4y8X9koi514EF6Ro8WSrm5cogqtfhJq14fQb1XorseK5DN2aUYK2yvH",
  "key7": "33hH2whS75fHCmptn2m52ioVhMrxJ8GfLPJe3JKKYdb1JQ5oJjyCZZK5u9JFDRiaAJWxaXSfNWxMcqZJZX8KRxRh",
  "key8": "4yFBbDfr9QXL9Rxfds8QyaPjuwusRrZx9SVb2t2R9cbdbRCeH1aLaiiDCS5Sob3ZpAfKuexcFriKSyMLwqn28kmN",
  "key9": "Ze1ojAgRmKQrX5R8Py6YzYQBDmLF7gYR2YD5BFPXo9Yh45dEtRWioAipR8x9aszmj5675xjb5Aq7svGBvXGUZju",
  "key10": "4srgEGzJgSq3Vhro3pC8cpvSnJppTNhgGbKBunN4oS1ks3kSHctjS1eirMbnNKgt98GdA3ikYBowSaeM7S9dPoqw",
  "key11": "5NkzbbeYg6FeDTZgEzsXmRCH243hkdzZZXEZgzwz8UgLQzkQ1ps9DYdFQKetW8jVydjHBVpKT4tLsk4oAwTmWQW1",
  "key12": "63Z3eKi66Sj7uL4XxdyEqyUfJttqUUHieBAtJW1eZcjVbWBK6tR5zZnTirGq3zz8jXiwmLs5Zg34UcWZccHFMmbL",
  "key13": "4veZtTKVMC4oR3Vim8DTrY4A18o7K646rVbZKqW4VsaoZyDANxygxj9bPAgWfoLmK59aUHh6XtXuCudiQnzVNSar",
  "key14": "3AVoLXE3iB5ZKrHgk6yjSJcFSRjitpXQug1FGLKCJcdyrVtN6U2H2KfuiBheKfipDxjZXLGn1noUbxxAKWQs3Sj1",
  "key15": "3VPkAniaUPdsEMenM9ufAvPyMzGUghzNL1DWWEfyDv9p1XqbDzoT9cvtnZgL8U2VM37g6HpZVBQpQwaPsW9wTDJh",
  "key16": "2igjKr7PkH4jNndY2c5bfLQ2Pp97GfEC5KFk1YdJuz1jmWDKxq2pfcAzfqw3Sz7v1jHjsac4hz87tnS5EiKXrywe",
  "key17": "2hT8Eo4n6weECCeKx2Jm6rnKdfQEHC8yhRM5ShUivkLs3tXwu6f1hDQF1JDWEYhkwfQBz1pLieKXCnshLspmcRKF",
  "key18": "5Q7jRCqfQrjkKHAFpGurnPRh1SMD14RrPRB8BEJAXtfbcDdYi3rxFtUpWqXrXwHTypNFGp667VJVHuEuXLGpdCsC",
  "key19": "s3bjgNcngznrAfjrjeStP8zi3NwmjTAqLBvHCwVdfLDuvLf7MvnZnV6Xx4HsoU5Psp6rGg62iVAKz61sypXT7N5",
  "key20": "24BK2dobpkiaQnGn4nFDgvfTDTCxRATg4NiCcGb2oxsEu6WAyEL4jjsFdQsJkBC4jFVXu5s9NYRJzv1D3ykFSgNC",
  "key21": "DKusHNzHUN9G4uw4pjAMmBMRfKTzuYkp4nN78evnv1892f26FP9MbhpwkPZzP2KbYRZiU8mwKjh5uT3eneebkkX",
  "key22": "523yenLjjCc1DXnaB9VWe1x7ZwurYWdJYeG4EaEdvYAf3X2X2VStqLX4csnG5DfZ7qtuXx7kZ3iRQVtT8fiZsbK1",
  "key23": "5f9P4eytcAgjCvC1vmGUgspbAjSZYNXsxAwqRx5pS9cymuQJGhaipbxxnF2HasUgkcbVVSSmMhFPhRsDCbRxrGpk",
  "key24": "2zk1VXcBazcpCTUKqYjPedXYxujsMdRXcjhZmmt95UP9f3ksnmKTVJevgLHPWK64Zk1ECwkMo9itCt5iWsNTj2Bb",
  "key25": "5ngzepQvVXtmqtGyNzCKNErznQM1G3DjRiEnmXfTAd8iDCqtC776Pb379QS9u8fHGo3Rz3x3DTe3uGjZypqW3dQQ",
  "key26": "2tZj52iNvFLGGMQYvqNZsB7SHsQNu6oU5owFB5ZJciDDwkRMZ311XuAvisVctzLngUqhAn3u146GiznobVoik22r",
  "key27": "SfeXguoWowNbLosW8Bi4wn4TxghK9fEjKNf1D6z7iWxxjTguMxFh1dvJY8W94LzBGcAcahEjo6gnFzZ5SYo54t1",
  "key28": "uPV9KgFJaocBWv33W3WzKb83RyVdimtMcm21XLsQxGP3q86rbxkbnmW9Hgu5aC5nFwiScFU6rcAgK1RCWCb2cR1"
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
