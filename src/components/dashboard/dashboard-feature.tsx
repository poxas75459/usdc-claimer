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
    "518Y8TMNnBLLMDXFeV9k48pefBuqrRra4g9SEfpNrBQGEQnr8x84jh2cZjn4WrJR9kdMvZvUYjg1D5kpTjPqLUqg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2umTcGUazrD3n8Wx3kCcj34b7W6bUqCHrFDPjAk7fd7cYkEUbQDzJ1s71Sv7Dysc7ZJaafVhbjAyaMvvMnUerAyP",
  "key1": "fdDh4oCnqomn9aXCc6Spaynr8TedzinxDPo2v4wUvpeCU9vzjQC9TVPczY6E6ySBq83jYB2YoLKexFLg3UHp4ny",
  "key2": "3EtHcT4GEhMDMEMunXEzbUtEaSK1upsg9gPR6rx8VVw3Dzg9mEdPWo9XN4N6YkFSSp58fJ1kNUwM5NFcNPZQCars",
  "key3": "4d3MmDt9kMze4pjmipo5q3cLdSbekrAfan94p7DhMtWUse49caVbioX3v2iWtNE2TksjCE4MS1RhXAGYJQ17sf5D",
  "key4": "2PAjjTE9fTkXUNQrb6HWAk5XypWU2GwcZqPAstnP9t41eUhajBT1EeYnEt8ZVrW5ejKC9zfMYvgGuwpGTFwbsxi4",
  "key5": "5Yqb5cq1rkJQcVz7fqYNTX823a1D9y8Nt3iGDAvhxL2DSMA6ihM2swRAkBU7mNPggEemMiaLGugw1UBG3w5Ht2du",
  "key6": "5i94V9yCFbLnVipxATvSNCZtHnkJWLWvWQBxH6GKcegomDVasLnLR2q4sm8qYjnD4deNNppNMdPcoQ5v3Go3HoDm",
  "key7": "4SKJAzhZa6FWBXBKuykSoGS1JyZkT6heTnmkyKcw1GZWkeX3SjpkCKzEYeZbuWgvyoAhwubTmip3SqTV3eBtRtoy",
  "key8": "bLkzxCU9Q7tSsA8zva2xD4NKXmPgqjKP82CoLCmSErunkSsSUsgmJeYjwKzVDB3Vzdm2sHtde1R5nAopxaZhw49",
  "key9": "3wnoWLezdZvfo88fFedH9dVQdcGjqovxSeSmzDhFMHjxvbztr8YBhXxGRfGjpWDKKPUr9WaVkLHK9idgRaFmv2gx",
  "key10": "4w8zVYsRGSAPNbWxgf5gmDTF4WBqYz924gUk9iBYrMw4PCsCWuFNYb19JmM1N4vY4ERe6WXyLH5dbLQeoffSQU6u",
  "key11": "4j5W8F7yc1BKuSiFGNKJ9qgvAwJguu8SMhhpPKonf3Nuua64XmSf3d9ckB6v8LTfr2wirBF8cRzsRgYbY4h4ejyc",
  "key12": "4K11SxoiZarvU8RmfZVwXhfVzLptp6qvgi1h3NT3913H9JHHMoRh4ZaYhJ8gRM1QYG2k2jrUexgfkcfc6PUvQQJk",
  "key13": "5YZ2eZ3WoQE69bGWT4mxDvBCMZnaPZ9W8bbFRjPU86Tftij7sGVjf7VPhmYgdzpWX3gNHYWN1efAk9tDthdCkiUB",
  "key14": "43py3mMezw2NbE779mJcnSEVXEFPZvhhn4JQmBY4bJPYkEy6CtiiGYb15WTAy6RhGDuq3ibBWFzUmJVY3YGaKvQM",
  "key15": "3cpRvgk17e7eohbgMu7gyHXHm6jabStrURcXQggDCdVymXTiehoGSvzuutp3zmcDH7sAF638p2X5CymmZa7HruoH",
  "key16": "47FkjReWmGY2c2Xi4aANicTHo8zEouVpJEwB1tRL98owYbk2tnjqYR6HqN9QUUTasjsBZdDnSkEpwhSbvdtko9Lm",
  "key17": "438pafUFuofZAAvyPaAVtMDUMu2qUPZEf7yVmHSHy8oNY8bXToF3jL9q1ZLZb6jRrJCXcSYzvuq7ZErWtAYAXSTE",
  "key18": "3R3VBjB4xcaiApRPSCPrHqFXhzBttpEVcgsi5SnDbU2Drqis7NoLpefqEtMvhxpoT2BLyRLEAVEAkVuYRf77qtHa",
  "key19": "4D9Ue1XV6Xyhgco9QmoDvNjWoFysxGdZk7ktmdkegs9RNyTj5t8htu1wHQpwLRtgXj58oCGztvJnniTvNktr4Uvh",
  "key20": "xHa7iq5UqXvRJVoB7DmewkCVP1gK8aA9BoQMGhycDGKqovSpSDS9EzRU8A27MuNpGn7xec23tivQeo9YSm28f5U",
  "key21": "xiZMznZ7UWVAUc7j6t4ftVcvYXTLhv71UpQ5ZseSzQyVPYj2e8KT9EmhTUo3DhcZgu2XYQYjRuXdKppX3wy5obC",
  "key22": "2BVtoJwpL2FyduvzeA6J5ExrfvYsdDYbHhyFTV2cH2D1mu4a58pPz2Ltc2BdRV9RdXVHETrGptzwU1wwRkzYssKq",
  "key23": "5A7wrMbnWFHk6rDKCBEVr56P5TL3Tf3XVVYzJr91aAUWUWkgPdKGrN3AS6CQCEWhumKxXoYVoRYazwRMKZMrcWbF",
  "key24": "2n3iyEzMBwFbcBBZB9VFgyeTAGmoEAbU4XZWeY3Bce4FH6hNf6eZQzCxpTCSFqQmw8TvrtWeYq2VjwedxiwuYRA6",
  "key25": "4H9pSAA8iZKzWWqN9gTXsAsqpnZSNTTrMvPCG9Vb9mztTFB9owM4H1dQPCBrjE5CTuYnZCVTidE6HcXN1XcTfwKZ",
  "key26": "269s4SW96sKVUvr2wg3Lksv3Ya69ADvTKS2AScTFjhushv9EMhL6Jkwyq8nUx2S1kTTzd4SPy918qLNJyzRd6bMZ",
  "key27": "4oP3QwQj7RoV21GB1RVbLaUoDoeAeeRFtPojTn9RShTaX5AkexbrbeCA9eZFDW5szyXXs58acqJ6PcxP6JsjQbkX",
  "key28": "2Su4UNBTKxqXbNzNTtLSS6wYnBaYwEnUgDFqPr566UeBFtUXjVNW5pxD2MPoXJWGv8TSjMHpC22gW1b8P5zUca3J",
  "key29": "aCnHN3f4Jb1tgwCFVZ1fnzLZKP5DLx37bRYA654pteGaHQgTCjneEink4coScBwLztXv1V4QbdsdoXVhmVkNkcx",
  "key30": "3jsY993ppH7Pe4a9g4aWE8cZMgDzAA7TjSRtSn3mT7etuvTmA2Vms4tUuSHu29uNg3g5is1r8ySbb7mSQXprivGT",
  "key31": "3N88k8Ttcu6M4vLAj358Tjd46w4VMTx14yUUgE4b2FtSG94xooVuyWrbQcqkBamSErJgKRDvCmvmhf2R6fdd35cz",
  "key32": "5wC6sJVimg9hnzwJZK5wqXQ7dDh8WdBf7g2TMqgbhPGVpShTmNofFZg5z78CGWDjAa2xbqn4xcGQ8LrSNmVrhHMb",
  "key33": "5L3tFC9zfw1xzgXQE4FRRny3b1LNc14bbZkXKdBcodJcmTFBJXxaz147JBYaVYFBCtakkt13YQXXUJ23nX2V7gn7",
  "key34": "5ZA7nqQBTbj8P43wXCyDUdVfCCRwHE7khw1d6yD4r6R9HpntEu5uFtKcReDcUc4wnM11GQsUtJVXfNVw9bwRn66d",
  "key35": "ZmaaufrvkDe178B1j1C6wastP32v7UhXewvDvkEqEuVnW52ubVSFAJ1YVSk5bxoUvhvzYrvFAmu5CChytCzPXzY"
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
