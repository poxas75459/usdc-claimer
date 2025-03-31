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
    "3pGoVsc9gegjGsEMictxPZqgYwyJL5rbnpjegTvntgc1A3yyoF7Z594ieZnb51nQxvtAu4F4cZaBnNWUhHqSLahc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AUdV5B3QegUGBzAFkxucxqx7Pxx84eoD1kmTsb4QfosyTzth1Hhgsz9vonpE5JcUvSP3FT4tSjeA3JmP8cGwp2R",
  "key1": "2FrfrL6aemy4UmA7STo9u3fBkfT2guty2GzyYrow3soRSB1ztRa9hA9XCbRDpD1HWuSVppJiRbjAuLCbkExHGm4n",
  "key2": "4EBX6g2pBS3ou2jNHPD2fVNY2dyp49WWrZf4QxjUvvxLeczQsWGEKLFWcbxYS1bCVcTqesL6zgrMuaazSPF686XS",
  "key3": "ZMLmrCmZ5vFwocBMPWmjbowfs9JQmGfMBauds5s4sLAWztULPoLRrpbdmtpNPLu6gfWBu4pNJ3oaoUTTDwAJsXo",
  "key4": "Rq1gMoMuwW62JpYNrWKMEVmisZ1pBYnr8JNk8WarRbe3rJFyPZphgPooDmt1UFtcaYWMhz2sg7xAUenQqnzXMTg",
  "key5": "4we1YEztUVSnKrkun1kCgvoWMze4guJpCYMeyU9SiAvEiQw524c6es5d6pwZdSCnyxaTXhEamWA4P7uEHHE37uBy",
  "key6": "3h44jgkkBzYXGcsteW8ML9qkXJ422DLY9hmkBvM93Pprj66AnpHVp7LcooYgn321nUczapEuCfp1Rcy5xT7dEfDw",
  "key7": "66dNfDW8Fp3Jfzk9JshTr2n7VvWh2KLYGJeo95u3p1yXw4giKTwjh9b7LsobxQngRKp4CpyUNCLdStdZ6Ec3ufUq",
  "key8": "66TQB4BLwbV4gDBH3WJyX3MphG2GUGWAXaEZszjEK5kq6ya5xheC47NNef1vCAsCEDPrWTQKJ5Kp1hjvwjo6K8hV",
  "key9": "5UgHRVWa9ojizYykJuRuXYiGPzHukmzvfQoAqA7bkiWqavat8wYeQY5fiPkxukXbtuDtRypnwxSLL8PmQpo5NHEJ",
  "key10": "3D8MxxdwcPmVpVm4Xqo3zZ1fx6Nr8ULKgttYnNDQzYCwF1P5X3sCREDLJkkoS3d6vCT8wy3x9TAWeQ86rccvdWft",
  "key11": "3Pb8rV8hi2sBMRYC3yhAk2pAveU3GwS8D3YM2Yidgc5dxg5cppAtpVz6eNzT1dkh7bKQYnyfXZDNNU5gGGjiBUEQ",
  "key12": "5c2wtKdWUuyX7DGQA6J3vy2MZvzn3aGk2xHpqbJyL4kh5qxaqJCKGyWbztxRdkxyVBKpN8fD1zi8ceZKFn5H9fcV",
  "key13": "65VP1cxEtER6uk5RY1UgCfkMJgaYPgnPrGGR4bVE9iXSXQcSCS5xMtZsRTFrC9UGMQpNNbQJiu3WcLmnePzprQov",
  "key14": "KQbtcPZaGpZqw3BCw83A2SX5SaPP2T2jWBzaRP5djqvS2CdJXj1vTCDSJtRyFNcx4c3o4Lh7N4REL6WcD4SVJmP",
  "key15": "3cBvedM2qxbeU97aD3S55nNqya2aNfKekFCVSvMWzfKJ4bKM6qw3gzBD174T9TKhZw3tbNvBwN71CZWnajf9Zi7e",
  "key16": "WZihxR7ggmGfZXJnxnw6BirrvFVnECGmPRPAmuuHUhvAiMobZVPiSASXrpkehLnGVoWQFepSXgtQAFCt5RH3MYs",
  "key17": "3LsacWwH3rKQWhdGiEE1rTgFirVqTiXE3CvrLENZ2t33y9opLHL9n9sYt2JRcbRApFo8mn1zPjGuQHdbxBu4kfZs",
  "key18": "54pGd7wKK3JikR5RZrR6RUkyjcCzbAGfNArnRTmACxnXdo1nw74wGSLMNAFcX4TNJpygBhPaVqMJsrY9n8P5JQ9e",
  "key19": "2KCvqrEzAMLm9ctDmeLLjjHW1r76xDHiAxi1oswxWwVQHTyDiPJ7XbkVZPSWCC3CUXhK1u4yzQFvK2qGv2656MAp",
  "key20": "2LgbTdr1f8AcWWebY7RZEqQY29s7SSc3gYLAg3LhHs9C2VqTZCHUqXEp8Gw5gZ84mLERkvWvP449xWX3xxx2fjgM",
  "key21": "47G4ni5Cg4z8zYZafhaUWbwRZ4riyRWw3tJgqwR9NgyrM1MrR2DUGUrTzZtWBLGG2xvQE84UsCkgtzWGSEYTdGPZ",
  "key22": "4cHQRH4igrNcoznNKCM7AWwanVXeVXJ6UK1UmJ8b4NPRD9sw4ps7vLaqwuiXpBFKMBZ2ZBD9r2zMnrb6Ew8MwZnh",
  "key23": "jiNTeiZmX7mVSmgAoR8RtzDyWBpAh5L8HeKcWgYexstoBibwRmbmqSEPzMaGpR89a6cXz6Nwt65fmHDMSNoAXAY",
  "key24": "64tmrw5x4vd92cEAwFsMSgh8zu1FXfzmwVVyAYo3uxNH89y2quQFo3UCuMxpgNovzaePsgxyyW9DtyTymBXH653d"
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
