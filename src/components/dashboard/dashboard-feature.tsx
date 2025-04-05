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
    "4fQgVBqcH5r5heyXtpv5zZ1jdcVbFRV3Z8dXrUnnM9gTYsJTLkR8RdC6cw1vnqdPNfdYiwmfu1m9R88wqS23m23S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XLYhJ1kxtBRERPTSYrYsBysFN2Ksji6CQZ9MLwwj29HRDSqMsoou1UdXtvmZvjZRbk8qkrySuhCL4Wmm5kQ5SRj",
  "key1": "5y9PYayb9mLzEEtKchoZtytByLn7vn2S9CYxNNzXd85ZmNGxKfFXMiFnFF6qfnNVfqxumoCe8wuLFC9Zyix42ZrZ",
  "key2": "2qhvFPwLTUpkwCHPKxXeg3ciK6siV5RoK1J7oS767MFP3piJq5dAU2jwXSMR22R6A4Q6UZoXhF68jLRMkAjJqfgn",
  "key3": "2y4MgfVqWsHhthLQfTjwaeo95pDB71EKBuS1A3UHBNdxArQc32CC7zAzEeMSmw7Bmj3r7UnUUbqS5kBzoyNMXxpS",
  "key4": "2HZPuL44xRtqgcDPN9xFKRmhsAD33jpZvzLZ45oyorJsMzJso4c62HuwB12P4vo5QsZcVfSwh7SZbHMHewQFwVeG",
  "key5": "T8uistuTCDELje3eE2fHbSKL4vfoUcSaAgd8657ZTBXRfX6bgT6smvRbLqNPph5WwHfmccZFJ2puji3RfpvajK6",
  "key6": "2m4fqo8QZKDvb4Ew53ZrBpL83w9H2xSTbZ1wV6Neq3fRhSVik52MAmdJc5iM1XUZ85cb73oNjGaE5BfxmPSszopG",
  "key7": "CCkNPdYYDWcNeFFnB3abvgego7TSLRxXMMx16QF79CWZfrFJProRsp3Cb1WoHeDP6wucDnPamK59Fobp2ec6o3c",
  "key8": "3NNbULmCfwaNbKfA5B28XicnpfUhZPZJ12nDDsHp3dz3njdeFm3ZD53ob8RzmRGqncE4DBKdAjAs2cToxJfNMYz3",
  "key9": "DhapQb2F4fybP9Q7uVE928A5tAP1T2mXz8esDWDvbfqtUd9ZAqQSzU9qtwrP1cr61vLAjFD6nAvAeGKV8xk4vS3",
  "key10": "4nwVFHQ6a4CCrctUaXaz1YsR8HMTTSQGHSBV6JotCGWwVCL2HsJsSx1UiJY8bXxBUew1Ls5o8hfcxhHDRoxvXJMz",
  "key11": "5vRrY1p7ftAvkof6NqyhMCyjxoeu6y73wLY6FKNm4U9KC6d9TUX72kAwrSs7bxgATkiEvgW7TdcHvvD5EQLxawBi",
  "key12": "4WLHiJ9vKM8HbphqJh7Nu4riNqnB4PUvySMSkf4BfCAHx2bcRXrgwANkdjV7C1UkvFTDuneVw7SnWCtGZzR79y2j",
  "key13": "3QG1WipcpZoC2od9FcrJ5kdTt37cU2qxLJmaT5RgrU3yZuazNHhfuhUNhCriZUMMakMmjfzKFKTT6m7zyzZsYEiL",
  "key14": "EUa338gvCZFaEwhX3uxQxneWrKxc11vL9jiwv1RdkuXH1YmiTNimDo8RamUQNxS9q3PdPP6tjszVQHtqrrFaNgi",
  "key15": "3US16fJfc1yHSLdQFEboKJG5WspVt4dbU3xF19iV8uQkFi9JnVPSxxCgwipUB8F4vKm9rD3WrDcx21GJ13p1f8Hc",
  "key16": "59wiZisLaBgvzGBfPLCyEfqfZw961gCcib2qrj2HDi5ouNGGkBLBiqRrMWQNxF9JB6YCjdbPm6DsdjQm59ghLkv1",
  "key17": "3TzMSp4m1yqYYnjzAYie4NT1ygmvmnr4ZJ4SzP2xC6k4NiWYDgpL9SMAYfJEqTP2kzCdgnETagCuSW2krwG2fmg1",
  "key18": "2SA585VEvHc4fH3Pnes7fuK3oLbKXZJERyXi4mvjHhLQ7T4m9VNwTLd15jVPrit94rdQ3dfZSG76TY84pS6Wb96j",
  "key19": "4KML4LnkRBN2DZKAMSYaGD6N3QDrvhfEfdbTZFNLFj6YgTTzy6vtEobAkQHVbHgDMgUToun5aWt6kYBgptptGFgf",
  "key20": "5itbD2FfhsRUozw7RaFe43Vu8gQG4KhaW3C4yUskfVKR8UFJuRzhWbVB7FehQkGm8rYPpzuKkn3QXLSmwK3KqAL5",
  "key21": "2YhwHbWaMUFdNAJ77W3ZhrUPYFZFWdeaLQUR31GGpqoZyQxxThki4T9DNoQSW8d8zyMqBVV9tmqxZuj4kSxFJKeR",
  "key22": "Ncm6pPZED7J8Stp3aFuhPg2hW5k3rZUsV6RnqqW5woKBYyB67UFh3sKzmMZJx2o772Vao3tMRCykAkt5hsW54x6",
  "key23": "2zopEP27EZTRJnNQkdXCMbhpzwTYyWjjmTZL4MwvWXdNGjw2r9KReg1eqJ7m7UCf4gfX2sWhumHLShp2NjSkBRft",
  "key24": "k2dx2eyVkUukZyoWGf93RRfYoCXQ24YuBjQPuHfWQKhL6fqtYCamjqiKmw7anui4q6nJAoJe3i5NHoAo5YANDPv",
  "key25": "3q52oeaMxYJrmScyYUjg5rnCuSU8sEPFZYexbVRCitU43XkScg6mU1bd2RCUoSm3kBXVAfpgm3VzukbC7HCgaxxN"
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
