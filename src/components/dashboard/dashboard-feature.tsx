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
    "3KhUhXoQ2NjwtndAD2Lgiyntzv5VC2kSDbJ5H7p1adtfYQpxMuuYm55v6CgWx2qrxHc353UHPK1KDmKeyrqSrFtS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FWCNDgcwyAVSqM1stMiFLmbTimASs7awk3R86wE5cJz1fZWmJKiBdvmAbJVrf39doJdht8ZXSPRJmzSrHrcLrJg",
  "key1": "2uu6Cz73YTrC4511NAniD5aKKaYtzRTqbuN6DwU5Q9HwshRBzhafXcXwUivtEbkjjW4tbJUifjC9HGkQvNSaZ9sZ",
  "key2": "2Mrt87GjL3faneKv8rvQ1DcR96RUF9eX1RJPCfSCHj9EKFSoFVDY783U44nAz7BVGR4nZoTVnTD7z2Uk1kFmCPnC",
  "key3": "4vYUm39RUahjuavsneANfiDhLMdvsgFrR76qHWAN8Aqx6WfE1Wzs84VUibq2bMofopwpZEe2zTdpH4WnYeVH775Z",
  "key4": "64oRVMwp8RC7nozEAoVHrYV3hdpmKhutKmqYPZ7fzaPJ1hzLny7VxePcxo3MciurHr4aTTEJAhv6juSY3VC28Tz9",
  "key5": "3b3L71VyuxbdRfFwMmBXjhgasU38H3z8JqDPGSM2tEMEjPEgcwzXvpydiEwt7DrfKFuA3b4iuVEov4QviCG8UcfY",
  "key6": "5XZzSjAQLQGDNpAdmnugQ7z5HmpjZgh48SAGxdhog9GDyXqKSc1R24pjYbwMHNaHjePhJiHE2mn9PXy7f2wjzbrG",
  "key7": "4vHwHLZJvtTUdLNTd7rp3AXBJgCQSBi3taokfX1gyQwL5kTWmm8rDiugznUJWmT5eWxd9qoDuBUCh4D6j1Lj4Lez",
  "key8": "Zb1FGwHQKWqK5qWFQ2Ce9ew1QZZcxwo3ZZ69JnqqEKr3d2icjMYHqgk67qsqoCFiWR3TZhedwuGhQuXDSFBVwtf",
  "key9": "5GeSm6q2dprb8QDASZrUZXNBQ8XmjypgmEWRo2jH9gSVA3J8DEXivUwgX5yQBiisMX5PgHX62521LH5PQbyZpmCv",
  "key10": "3zg3BJjYZG9VvVCQny63WRyaF1jQqErwAhKQt826QTd1x8MMBFBBBiRhuoNFe6KeW4wYnP965t61YAP7S3jDBLwp",
  "key11": "27oLofvQLayKS1hGzyoFT23pRmutFhBwTi9zQDCcCM3kMYGR4jz9qZAxQTQEhwmSQNVP7JUqR97pNEHtgY74NzHF",
  "key12": "24t6CrU5UPr3uR4AbJWCh87iHFxjD7vxqdCSsEzchEMUccV8MLNLbTtUnPdnAEBG56ANNd1KtrSQd3NM4CZbBSiJ",
  "key13": "2MviudEANk7U1shNTus4B4kSMg6NHGYMnAwjodEnJKg4coY7fgqU6hpNcSmnTET2tLPXsiti7U6Svd2ZDN6kn2vE",
  "key14": "4dAiYbFjJiCtGJ1qyb7wyr8VySDSb9SDKsJaTUaP8ez9oDUrGEngNG9fsAaVmG4jDYFVWvFcuj7CY7v8R3J1rc8z",
  "key15": "2mzmHtMyEXNd5aMA1ztCM6wpWJHUdseSYnqomeDRxQsr84HCGZ3s1vojQrHzJR3WXMVm5nQ3WGbimGJP2t1XwW1L",
  "key16": "41sLTkGx1SU8hJo8sWX3cF4oaQogqBmaUEWxEoeYH23GNtq8z4BiWyqMnuETsrNEJLMBRPsui6K64sBX16APHdNG",
  "key17": "5HohksuDDYbqYHuyfpBbkVzMaWn7vNEVuM34gEpXoRbScAzYqgfHG1CZKaAqtNA4udPcnLQmoGzeUU6iBBa7cPif",
  "key18": "8UK9NcP32jCVJ42tGGsunY9wAGbKEpVPgpSirVf7FmkM5mG7UAniQiC7PLr1tU2aqYJVLXukLYz1SEzY2qchJZi",
  "key19": "5h2JNUSX8hoQMZaQCwxJa7LTmxCKLejmVy9oxwSS9DsaLFRdBCHnaAr27KyKGnWSVfc34s1mKaTWEWNu8FUj7L3V",
  "key20": "2aHh3mptnSTjxvX5MAZRWf6Xb9NSYZCCwgHy7LSZfQvMnk7nACT4prQWrmuFDvEquoczrFB3fxSebCNvkK7RHQLB",
  "key21": "4qdog5FLDQNwKoVy5EoPCVQt657tTsPf7cQ5F8vApA4ep39kV2HwAs8bRmeGSh9PPACCLsPsbgqu2cLRfu2db6BZ",
  "key22": "2wzMoRFqsqYxc83UsDkwKkpffot5RoLMXDrMjXiUPCxCDTmFEfYkCAbwhntP8hd3TK6cmw4YEeReMpdp6nGHui1V",
  "key23": "48mmmQKsd3PZF3PsS1Pb8cn9btJcvpBZsr5Fq3MNYMksbLkttRwRFp4Wgp66Mi2fswj3Wh5w1wLh9PZRp7FbwKGA",
  "key24": "rRWWLVeZdFQW6BVwM8m9cxZ1aDPNkYefv4F4Xs4tMeGAT1syPqkuwdrmjg4HKwtzXdyVDcfnGAHPmmzEEVUsUAp",
  "key25": "4LHs4W3EtfEJWcJWo1roQiCtTLuZL4fj1zEvVZfvEkYAKFzLhHNpZzp5uhfNhXr7CG27qokJCceD3mmDtfCzCafJ",
  "key26": "2kodGiyuESXneNDiK4wF8ELQnhQ24uLnL7kk7tFvzq8oTU5QxJxRsBsGb1mHgsP4xPeCJzYoWrHUKG9QxkYpvPNd",
  "key27": "22vaNE7uWZeNMwLuUa4yuh75XiQkngnRoKsQjjxfczWv7tHNyjVP9R7kZgJZLWYyq1c5D6SMo8G7SFTngzLE6cXk",
  "key28": "rgogHTWDLYdsvbaAUzNoSi7KCygo3bBJYcQ8SX6HAPgUs99mPqidsz1HZfmmQsK1Yy7xta8JftNoXfCGbEVwbgS",
  "key29": "5oRCrRPZ7Meu3HwqXBC8L9UXaF2sMBVNfUiDXxNtuq5uNzqFTdcXQruin2hYyAS3SfrJ3nZiG7J98D3VF2w9EvTc",
  "key30": "2uEgV1RjPGuZEUqDXWFHUndPrHWUQMxKEVo7m6WQEaCv6BRgwdCxorpdR83VCcCHRKMYYJiyhGWkrWEVFP3vh1sS",
  "key31": "3MCM2bFoNYoRX5BFcqVmaKhzu4P4voTnemReJRB1iD1xaWdo4aJGv1WTF2zAJznQiJRgLs4UrsX63SpDzL4wEXTc",
  "key32": "62sCepaCbSxHc2298mDyUirpR5RD6bU84ysusrCT2aqpuNL3p2Tyn4QSDe1LjzzF6YUATYp2LXBQaKwzJ8MtdYRQ",
  "key33": "4WemWfRsNgt3EuswpH6jHRUGGWzPcV7xwAxDAS1RVxNxLphqF1qkKpYhouNURqsTQBMh1u9jQRPKKcfUDHv2pPCe",
  "key34": "4Ky288Q6nK8abS3Tf11aia1Y5Zkm8KxeKEEpeNTFyNXryTuAheTDfGEQMTUqMNMgFca2xhJ4uvpmgrCrCrgmfXiw",
  "key35": "5asFLw6HWYC6oYTBdZNcswxmoZmDuq83gxqSVhhujpPxpeemPy98cBvSA6Ga6kb351HdBnAJqAHxB37YCkhgkkdC",
  "key36": "36Cf3asx3t5hgggNvzSGZ8faR9z91RU11yRxC4stH6UxYB6h2jQrqAqvCfULTQmQ91LczEmGy8U26F9et4kCjUHr"
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
