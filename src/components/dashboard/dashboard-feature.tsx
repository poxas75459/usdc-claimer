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
    "65nKN6EepFKWsvHdWHsJayRA7t3qoGTW8ZcP97mypkSmv9qqZCVCxgkBTk5rdvMJN8qFxdrUFUdRLGEFrsmRbKhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xMDpm6BdmkWkiVHEAie94X7o9X8cFbVehK8a1hZPyq2sGU5cDxDkzK1mqS62cYJwCVTaW7yWgrr7cPM93jmPgE2",
  "key1": "66UoJpwSeTDszsZLUsyq3WdVkhAk92nkTh9J2LG4e23WKBAn8MagDWfBzYwnp8TWxNek5Pxd6nY8snuhH7AQBCA9",
  "key2": "4NVYu47vBT9TrMMwYp5j1EB5TvLuqohCipP9Tm4abNDhCm8TzetBSsCAozk87tNUWLHdugEzYgbzop1sGtAXinab",
  "key3": "UPAU7UNFT8PcgZ84riRgd8Myk8kHcWhVqzFaohhT4VsqxuJnvAZ4DCWf4dstLSG5h7aGvhyK55rMBHjkEqkyT3o",
  "key4": "61yorM1cqDXk7B8Xzz7eyNs769yneMjz5yKTs1zi1vuiepN3jCVZfzFo3uqXLkrCz2hVLy37JgoRq3kzgH4aSyid",
  "key5": "3JgeTzJdoUWcBzaeizCKdV7R7v2Uu81Rq9ngKfUGrAiqQA5yPQdWzFE4vzFj7vNGbc5srXGVZqNnKSPQtmghDhUX",
  "key6": "3PaWtLoMszjS9fqqFaY3rKAiQemxt3v1xdNucT2VVuuvGPq57djALKLzAB4LX863uMsSHNFsHLsiN7oAXQNnRGFe",
  "key7": "33qRZvLeYB883YJfNQb18HUugjHA5ggzuR7vxMF151MbKa9dsSuR39D776U98znFeRtobAQ1WDzHFWiWwuauqRBA",
  "key8": "3W8cDUfmDp4AMzPvJvHtMGY9Hs51GJz4V49g3UxTFwyT6FXDx2EVdX1LKSVu3uG6SU9Nw7s8euHQ6ryKSiwaRsxS",
  "key9": "3xmoY6yGL4jpn4vbr6mMQymhCXRKRxNdWXn4Lfea7dhe95h22TToxoWAJNm3z8nWy4b5ehaugdf5ocX5WZf1WmVE",
  "key10": "57d8boMsTtBu3oi2yVZkU6RFNfmUpaFXvJ92jyxTU8HY29LwsSUsYBngH9WMNn8N3ebLmY4hj6UJfXwNoKC53zV6",
  "key11": "5VdsUWHxpQ4th7indy9SYjioBKa5zRoRWhMZCR1N7mAh9yy3T1Z5HuNwdsVFDqbiXU1UVVCfaoE2DefzmzwCtf3b",
  "key12": "41Yonq9pvSdUVsWZJyxkWVzrLLf72unexRoSxEYfbqEMy4PJEqKaTw2cGJCCxBcpTvV5D79pNbuPkJBLb3y77Mt9",
  "key13": "5sZnzrEkYrPhEbcB5fvyaBncPCLj9KdpzzURLkwmJTGZXY3NY3pBjWW56wouf69widob5b61gTSJnAf7LykLBUz5",
  "key14": "4W5Pp8rxWnN4PqLx5gWjcGmJ9K7ofUUf5Y9meFZWiM3BMjNRjPVfjaRkWfQYmQke56X7rMjge4JJtKKtAvJerLhi",
  "key15": "WAEz9HMeX4e415Lk3jc3mP6miDsXHZKoZdvm7ymoK4jeyGvjj1aySh12NsvkfFkR6NFp2hNnySc8cv58ssfoGUy",
  "key16": "64BSAoTUjBkKdvPPxctrHZ9HXCkKAwT9zUn7tyakXQMp3Qv66rUT2TSAZNsCAzDUGVTiM1v4PpfLseZ6PBr3GsWq",
  "key17": "39FGwQa3zmBfFZN66hBf6w58Q7KQ74z2ukP8g94HD3h7Cx1o1YmWeod2d7op1S49wXwZi1hUZpKX6opNCjp9D1MU",
  "key18": "5ANwoiudtsECFZ2J42orKGZoLFcsB8MtS2ysFFCzQjYN2PAcSj6bn4eLVVy29JgfaFDVyWmRYB6MCyrS3Uw7Ao22",
  "key19": "MotndYACscm3WHiS9DExJ75Th2HpVWzJRadohNh8VhXFmQusoRzmVJ8e6dTgJXMxmguujPzYVoUmzmF8NveLBXp",
  "key20": "121LkAwHM2k8KsXYFmEM8xFDJNui6dQkNy3Cm9Yycoq3NPUtJz6T1DmiW5MRkAwxXV2EGqUeF315t6hNAcmSNVtf",
  "key21": "5KsFQXeg7erbdmstmVngMrKqhPBSJUVgHEVUyrU2UPAL5Z7nq5Gjd2tdzCw3PSVLGxQxmPWZdWnL2iw9hh7PkzVC",
  "key22": "3PfhspdkfzoMrziYCjaqpg88hAXDoUfv8wxh5eFcwH9tuyMMeFXiDUE8H3fRTKfwcWHrJ9yQM1TJDi61jYaap8gg",
  "key23": "5hxmLayGMPwvtf4SXph3yg7W52DKAcnwi329ZboKUejykMrG5MtZi1ZBQS8FNa21zgX2isCJ6XDQcHrq4aqqb9wd",
  "key24": "5dVev1x3pAoLkQfM11Az7zisQm1BUt39W8kFxPE6V5zU3QJHvLUP6pAgNZwpamgEYsgxfB9JkwhX3ziPBqUjM1Tt",
  "key25": "x1Q3kmaJFpVXYoeu6btkrRADsFCDPEK8unDsorBj5DNzRo6qYgXpqxVywK2PhBwKAbsSmjMBYuP2EBNRhXh1Zh4"
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
