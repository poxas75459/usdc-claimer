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
    "8sE3mypzfWZwyUiMCRYDxeHHv2BEATvYFwHhEdUectudEdMabZFdy43XcFGbuABy3mCDMXmpoaBGYBgf9uJWSeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54dzBFBh39ESveDgQG76jmBZkLzeu94dFzgvxs6Ms5K6kAFXjr7NFhjWz8ocmkKufbcvpCoaBpuRHUiQM8at8bBx",
  "key1": "NSJrzXcwUwmwQETgzh2HqruBBt1pgEwBCbW5bDSxSgpTede7hMWPMHpS98YYWAPGEgU1MRtQ9hnYXXS1kk77yAx",
  "key2": "4e4Ex7MkG5UAMpMjLXKAD8XYiTHiTnELG5GZtm2Zf4SivzWPKhBtw6Bhx91txPnwpTx4aEAKsZuiCdFrCVcuBqHJ",
  "key3": "3YeRz269fcWwpfzCrvbaM65kSRvNu9YCK38nu6oPJAqzsZ6eNfR2zhxqVgubYXKH2tDygSYPiw1oovHam3DUXB4D",
  "key4": "3RF2MVvxtftEHuiWmYGwUj9QatjcdtfgBYQgFCn91RX8b4ydF68MJjpefbbuKU7GBSEKEY8eWRivVQpH2o9xqZ8K",
  "key5": "2KTMx5cdZQ5pdPxuiRWvYron3JfKKTUoaobjTgkkPT8dtYzrgDpUZPN3Xg89ZhLCkY58VbR4uzub68RtR1KgV8Tc",
  "key6": "2AriZVdipcvHASGNBrxxdjRhtnuHEzpi6AoVUao294n3q4SrT57PV17BPXgCZtBvktpnPbW3XA4KbeohPi66czMt",
  "key7": "4L6BpoEM1BDX3ozKJy8vW2vXLeg4Vi8j4eUtJQ4wT6ErEqKfeSwfZ1dbkUiRMR3N3xCNJJ86qceP9HvA4PCQVMV5",
  "key8": "3LD2eCBiFbm5CHCWqJwQ2wQqWbpXVGG94yQkXQAJFaneJVGsH9RwgCrdAFR9ufsHAvv3GFL9ACHjw51bW9kngNKj",
  "key9": "4tHGTwZckwqAHnpmUARdeV1E5SLGtBcC835LVt7SQbLUsEKhFYAJcpKypjNTSwjwJptKmA3jyb4LPBMdBCEgZiqq",
  "key10": "3Ey8ke2FUATDrZKW4yvdSVhRJCKWD3QAnjpojwf4taL9bGi3BqYEih5Bpe5ajKPT2mmzLifNuBnqSV9wvrywRtPg",
  "key11": "5TD5mEPrqP15mvjFd3ioEYVtMCo6eVnzjrcnBKkjTV5avr7VsyLGjcdo2buYQdA8bCTdqa91BSBcze6uK3oKnu8f",
  "key12": "QaN7wX1NCg1EbsD4ADnAwYprxXFexzneLAdgqUf41cSDQo5KVxffUBwST6jFwZv1mzjSK12UFyotD9Zrjoozwb3",
  "key13": "3HF5YPXSM3gtxTgpo2CrywNsrjSkU5HgjxFz2bGbZ3yFQyWfQHEraRgyRxxF84nLhRR6c43La2XD97MUU4TDa3a3",
  "key14": "4gGDm3iA2y1ypW2FaMNXpQmDBGoTxb6jwcTSV7zJHzdpvMh8bNANjX4wYXEzmmZBmHResxwgDzzxyeiWxoYDg7ud",
  "key15": "3x2XC3cKr9CccZh4pPmUfSHjVdegnuCTBkpzbQ2DrMUZSk4PKcSXZPSJwR4xPhMGcoAVFwyMbsyH1kQGET4TxsMc",
  "key16": "3tzVsvVVxwZnogPHnQwakfKqALUATNwdZsqNDXzNwd9kJzZr5HukUqQ7JCdf8aA6cPyh2D7Wq6Av8XmAwYnGAY31",
  "key17": "vcrYmB3AZLRpqvAz7jsZd8dEaSPpvXxebY2Douv4aQ4XBpJvpArPPMB61fTJnWfQrasfQaEedkoAgMYzjgAuhSA",
  "key18": "3zKZUzXXNRoZ52CE9TjtJbT2g2WKXCpLbdwSMnG3nKoe46vEfnrsVwwHvhRwZS2CoXT8c1SPvEfwAWYKetP9MktX",
  "key19": "4NDjWtkKsvfTyfmmTSPHRykYeS22LAjzE7hq4hZxQicCEVYGEXK8pDsT3wzbaexqtaarit3ZoYyapVfJE8AnYtW8",
  "key20": "5vq4UW9nnLYKNKsjXJYwm4x9Q5UoSM9SkYjgpZXpPdpjE5tJ5erATWNdXnXSpSSStJnCLQrP2tjev8xcgvi5JKTm",
  "key21": "5wkBhSxecVnwt4CMgbJDCVh1m4jzYN6ZcZ2GjG78kepF6rbBuUCaE9LDaxzcMPFTNVzURFpNj1UgBTd72Drxbwkd",
  "key22": "66yqMwxVnNj5pLvurGVHCxBHDCdjCbdiFm3PbfLKp1twrKA45FUeqNJjbgm6oh9NNCBjR11SKYtM9XhLh3tYrawd",
  "key23": "2iLwGc3X4xSpNSrZagFncH4C98diCQM49yBF6n3nhMRUA7fzHmALTuUbgAgQVGbzAjxBVLtWGur5aU6eMi4qRvGY",
  "key24": "dwVMRjCS3mD5v7TTtJtt1kHkbT7bju97F3LVX5pJpagSGdYemGr76EMnhvFUEcu7y2Ci6yFeYnyXcwMuuVTXpqv",
  "key25": "x9FJnTsvHioXHSY2JoAvyTF6UAaXGjr9QWjW8DV91LRrsyQhazTV4RsQMWEgJVUPdtAiL251gd7xA23ZBkErjmt",
  "key26": "2MyBQMYLubCeU7TCc9uS1LzCqxrXXrwd1KstQh6fopVBPGH9eieFWta18iRvxQ95S5t3xAmcrLoX8AzkefEd3ifn"
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
