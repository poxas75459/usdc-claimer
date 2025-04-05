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
    "21tAC6wheFKqnQWrn1YkZM3CQH68zbRbffnQg1sF7AK8TrzQGNUrp2ddPmZSu2nJZLFVbxyNsEikAiPHgxY8ZFjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LiJQqy4E75D48G96ccAUtB5JezDkn2bAtNkW6MgJL1FRAQeEr5gxHsqPNwq8LmCDkyMLRMkR799kTrePFd8xw4o",
  "key1": "4RjfKMCnHduVeG33USuHGr9zF8K7tnWbkF2pt1x7T9Zt5vzDwJZirE9hiSgcpRbgPmkDusn4ZCrYrCPPNfEtofhD",
  "key2": "3wyWUePxdaVDp46Axouis5xSpTSpS3QEFaV21tRR2n6T5hyDgUZKTDvZhcvtFZG7d75uongpfXiyBXjSvY3DMUqT",
  "key3": "4futMCwLjuc4kNkJ4T6PfHrvWSzzj1q7qhYFHvc5MHKAZBkSDo5oBfNEN7ZymnKXXVGcbkTbyLRaeUsjA4qnimVz",
  "key4": "3KRik8V6jKSHNLmg14GWjtCrF6ctphg9kPhYYtFpCTH1YGNrpnExzyqqMPVRyoSPcEU3r8Ue7JpVaVYSDDdsjsu3",
  "key5": "5SwNxqpp8tWhGxSJyf7QHb45Xg9Hb3mhbLLAov8aWhWAZcgR1rVRCZp1wSZC358SFFF8qgEubJfxfVjSZjYEhL52",
  "key6": "4vhe7BKvXypEa48FqcNnVxx1R3TVcgoAiNbP66pkSkQtB7wej7zycVHyLV2ArjnvMzu9HjvvFw7tLh6BgCh1vgX6",
  "key7": "3TxQwr4mr8B4L814MRXBz1Vbj5s8biVWke4Tom8mwTj1dRdymdHTqvqSjAKdcg9xwqDwsaXRhgNfrDt3kyTk1yqH",
  "key8": "2kwhCxuXLj3wgCnCv8xZrgUtPnAmgmoS78pgJAFA6Cc9rnJTU7cZicpoAiX98XrWHfeGZbqYjRETWjcBMVYqrCVg",
  "key9": "32b64Yjy1Bs9y36AgrRx1zxSZt2X58wbSBQpX9u6tgUz4SgjRLmJ39pLQkmX1BT5MzsqvUgyxjEsvDNQkvpdNUSM",
  "key10": "4KXuoG6SXjj2MTZkcXZQSCWppYLQEF7uRGAVrgZebBEvyapp84wNCmUmQ5htc3M8tNeTK36qejZuxeVV2vLgJG8m",
  "key11": "2Atqi1KS7YNPSuctdyhw3MqKVXb7RHHFp5MNcBDKnncioqmDXGiqkDuuMg7ZKWM2sWmq2ZzhV1n1Fjk1y2GXd5wU",
  "key12": "4SmLyX3ZqoPWP7ZVUWbwo4acpihTPRMeDzWd3PggmXSR7pw1dJDsEyfvQo4S2qmVEUxmN7VXs6DNbcx3dPGh4d9P",
  "key13": "4LD4TEBbmiwZ8o3LaXpBjX11nQowb9FL9xMRN2n6PYsMenqJRnm6TKSeGo2QszeHs8BMJAcmRwQqXBDJEMDjPc7Y",
  "key14": "f1sADot7fdZvYCemLzwyyHFBCgtHKnt7rvFP2gBj9tQtVYAkbNo1VwaFUgASp8kiRnbdYfBhueyG8Ki99B5rg2y",
  "key15": "3qVYue9s2DMZvL2EyBw5LHpSJ3J9Pi6iKvgEVuiWrqJaQVaXLyF6Gj1mvJHzrnv4VkY2nAem5aGfLAW6KB9J5ghL",
  "key16": "59RYvgp7sKg5L6EuRPwVALRc6PrUfyKCkxZepjtHhyqZYRxvAcVx65hz4FRNe3Sr31dgkr2zmJTsA2aDJGgp6fsg",
  "key17": "5KfvuAFePur9Jof2YVXUT5jhh3rrEsvd6D4Wmc9s6TycaNwUS5RVcsEh8GipVTUQ59ia43fZf8CFasCr9JWEuyLe",
  "key18": "2mckZ5XoDAdpgpuMmy6ZiNEsz18AuRf6y48JrenBf3JDWyh5a9aXY16Trd8nttHQxEASAFoS22cxoNNip3LLFQDt",
  "key19": "2Nghr2RmFfyMTEdjfmyVG7mn8hZRrc9gKYjcgDG1apwGs6cDh7DRoe4yA4Y41axPg8Geg81SNd72qZnsXdKrMt85",
  "key20": "uszpBTk8XZEUMhRLLXpBsZZZkrFaypsPgdSMzcCkqyM3AsxeginNYNBisQxkC5i89ugQX4gmLvPDJgekb6yJETX",
  "key21": "2acLKoKyZNxX5MXcdfXYQk85LyUoPbbbf7LgMWkP3NBnKH588N8SDoyEPuXsTA97c4f5k8zbWWBRXNXmA45Pp1Mb",
  "key22": "Mn3QuWrNd1YoM5DFdxkY1vA7mtNZfabY7NM9CGFb4EpyyHBrRmmWWNU5gWBPdSQUtt5dh47Kt5RgTirJ7ksR27e",
  "key23": "3LrLKxKV11KYsTtZEUz9LHQREKgg5oTTPq8c9UGHTQKBcd5kBbnaAfjCgMjoQCQ1JKP3NbnX6CLZD7C7RY6DwwwL",
  "key24": "3tc4Pttc2CjnTLqQpNKAnGw5hDpTKgry6hwtbvPRurRv4pBnWE128XQPoYStEH4LQcgTVPWuF2GNgBDghzVSpqyn",
  "key25": "62HBLVxsZBi2Z6c7itKumCBbc1EfzPVUJ25xs3nXxEdnimJ9voWYnC5Emp2vEEKxD8JbXsfjaJstBDEgPRSxT8w8",
  "key26": "2ruPbbXhnda9AKVxngsx6mvrru5uCM9Gq99v5Ub7TaUwJ5NXcrcY2p2CFZap1mqH2Brg4SPr71cgR3veipBn84vp",
  "key27": "h1r8arQg9P5hrVnhDUskc2xzoKSk66oDuMXHwrKRF9izk8ZqnHRg1rvVFBU5kUQRDe3GzyNA2QiGfjdz9etemMp",
  "key28": "5cqNGnHmSXqZzS1qmzYsmJTGBxeYSBs9gRHAPKnF4hFk7MR6yzdXbUu5mYmUmNixAR5iD4kRWbA9Kzp5ejEH51mH"
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
