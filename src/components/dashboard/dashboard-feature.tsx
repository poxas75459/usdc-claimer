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
    "4JuGD1CuzXKttPfVkPYXLBwgp5zvdoWntXRemvDSszFSWytjE2HKBgs6DmdW7LcxpXBzrVgWzDHdAKPKx87Bgnsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pAowx6xSgZrLqwYazcsxuyt1mqeWeJy2a4x7nBJTHzECTYivvJTGFAg5JCuAsdPEXqFzP3LruFxz3k2uaXE6yxE",
  "key1": "3CoCrWcHrtqzWB8MktRvvYbY3zP3yUJrfV4vBs24VAc1MWVXCu7rsmJ556D8FZhUkb19uLz9N9fkCvTb1Yu2Mraw",
  "key2": "4pzyvNg69fAvUpM7YY6Rp1sHMf6T9DSWonrDLbCFpiNi82a4iNe4Vr9SUboaKsrPb5JRrqRHfEtkenv4yFzNtkHF",
  "key3": "3oBZcD7yzDmVDJphP8sDZvazsRtsGPZSa5tHPzhwGFNetkFEFopCGmCkn3rhsu4cyurNwiajLQfWUigmhMPC1RSM",
  "key4": "2pxhcCS8ZnTgGnGcAJzdujS1FS9Ackye84kXB1upUrLygpNxGf56VWEMAw1r6HZMAU4M1j537YVdPPV9oYduL7rR",
  "key5": "fVGMZsqZzugPrAaPoJrqDpHXs3DxRGfoMV6MLoWmxKKinP3EK3Z68K2q2crdhBTUa6r8CaxtDrh7dFPpGhFpPc6",
  "key6": "4hvp1NZZ1hsTnZqCKQF32ma697tKAje1AbfWjYmSHywgREwkiGYRE3bZkXXfoV6hotc91WqiQR3N8NoNWxUFKzNi",
  "key7": "5bvBwHfBGAJn3PNfPHrHa2G73xkLGEsvFtQmf17KYG539egKSdzMwXocHAqjrmYiaCTxeoxHzQKwVESMzBzoL2te",
  "key8": "5N2TLK59B3JPCUKKbyVSSvBogr8jwUSc56YqULkXdDeTVXnrVqAYh8ScugFp7SRkQUcawDBJhBfMjFK7iGCjkpZS",
  "key9": "2TQPhsm8D3rTTUzbtWr6ut9DRHQhnf5817bW7mtX3aJqvdy9vCQLgPGhhPhUzVdCYcKoHCgGEhx5oEwn7emvtiMn",
  "key10": "52jbdpkWSjq2FgrrhJcPobTybxrxGi3noD95iJe37NiJoDws5Ps7gYF6kcFxgFpi1eJDjVQSYfv251fvkjkKh1cA",
  "key11": "4zmoxpU8vcoshMZdESsU8Eg8byXFWHGGsVeSc8pgetnysiBKLp98eXdeNTf5oDR77QwXCzQHMQgZ1VwCu4YDVRs3",
  "key12": "4tfYZjF6fUF1WQtqMpMiMBs3YLom7ztrm64zugtpwC82N9iy955fG5xcSiy6cSwxVMkncJzLGFAzjbY8LSYQqCCG",
  "key13": "4g5P2RgZQdzMZnpktLiEHNnVfXhajg9JVaSnzhMYmYqwD5JPth2MbuLzgzQXw9PUfKLGPMRxb5yd3QxmQCxj8CjS",
  "key14": "4euBgLLCBdHjTUPP2TZS8B1bJbzrRdscEszSCWQSQeqUL1reG1ej2AMQDsmeEDbspDw1X2UBaNHANPw2p3QDMMQY",
  "key15": "4HacfvvH8tZJydZaq5VpVFfySqK1Lj9yRe4TBrGfmfnFZxo54mMasZT9bPLjcTYtiSQ59he5ctZ2H74bnw7et5DY",
  "key16": "2cpx6LknLypiavgXmedu3BALGpWhztZdDqoqHQSc2niithR6zdYExVQo8BeqWA4S3epkrhKRDGfJz4jCjrTz8JmK",
  "key17": "2N8AWmgLLKC5sKwntYGLG1fUm1vLjAUy4yEuQqGeEMYJWrr9aXMQNULEteywgKFD52nJzWhRL82BUwbWFtrZtVRe",
  "key18": "5B5vv6oNC32uR8ws6Wm7VWCwLqqEmGvhRnSCUAJUzSvEYE8hDJJjdjWynRivXQH1zqpiv2ExmqGxntWQkXEH8mf6",
  "key19": "3tqjEonbpBiyc5icEHdJzZmwAiXhcdkxS1wVZ8PFaSC5LbLSYVTf5rYrmQLUWAP7AUKXJxeAaUkkTHtUjTTA8koS",
  "key20": "4AcvmXUjWaFTwodH4QfyULRLmBmT3UNL3v81SQFBHam2wr7ZchZsNfE5JzQc3ddxVvRSLPju1HfCkRR3V2PUNgzC",
  "key21": "DjqKwAUN2d7zMELZLjeAcqbQS6GNyxDpn7UbSE3RcNd5XXU14Cwsrrtoxxqx8VvzEXdbnoR7EydUw4BnAWJtodD",
  "key22": "DV57zf8GSuYNjanBV1x2petLkfsUQo2FEzyGerrgp7QgosqHXsXqrjaZXWRV2WmorX6468sDqwgdXiksjrqpzmk",
  "key23": "ydVBtJ22K4JLkorxsUf639ufsUpaRJcTZ47hFay7oT1tqdief4TDKSGji8LCVHLELBToJjwnWvDvr2jAb9ji8ME",
  "key24": "2iup97D6qV22Txg2Qr6Fd5krdBiCtMKAqLegx8reicijJGhu2qeGrde5f4Ets2k4tDQVVcwSJzBtoXeJm4kaDCD1",
  "key25": "4WL7nsFYYuDqadyDtDy4pbxr5GeT1oRv232p7ytsNwJgkC8VeNmFE6skvwyc7nepcgph1GwB7zJzzHj7ZUkqUyAA",
  "key26": "3syd1TVCAMUF1psLWEenms8wpLnYaiCH9csDUdNyC18m2cZe4hqUtxpcXDsxhXjMtxc7uy5Ya85GFzTjKXaumkvU",
  "key27": "5EDXxNqqy4p8Yaz8fea71HREe2sT3FuPtav5HP64wiA8AibGLrMT6VExLFTcbsVwroff4H8gC8ELtHABnorRHPzF",
  "key28": "66aBMd9Xa5uUzvoSsRAkFHRKKHNWh2PoZ6rrkE3WTQj4iXHYhcPE8W4EZ1k46QX5oe2FwxcivgLoiRiwRmNTojTr"
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
