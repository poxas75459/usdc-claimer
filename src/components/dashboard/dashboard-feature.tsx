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
    "3kfbbZEiXJpt6mdQJH4jumdduRh2CQ9rR1npZwXgkYeNGzwPJpANRZA8oQFn8LEydQQFp3tM1de2HXzjX7M2Kyix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UfvcbCZXokbxut7Kk23f88xEYNNC46bxEUWnCg68buqQyqS4u6yoU6MdEFxKucVG2iptY1ALNotUJ5oHVGavnF5",
  "key1": "3J29Am8wkZpanE1fBcpKjQzXixuobkp5hsK93fBX1LxjUesJVkEtar5cCcLYaZNxwZ5B3QihkcZNQoVYYuGpkN14",
  "key2": "5QtPQBNyepdTJkmkSycTUU1teMx3cDBzXirCwERxpX544SCx89xjuMWiXawyQerXUL2MxAyB7MrqsGX36ovEsoBj",
  "key3": "2HiYjHLqAJ7aVuN3YZWUPDqqkSXSuVfCuZS7hWgRSPBmmjsn9dVHr33zYkWQLHs2jFpitRF9TCn1jHNbRGK35rEF",
  "key4": "4X6u3f3aqsEe4cjAZ4rTLWHoSq1F24ouFkNZPi3onvZuZ6fXcbi6mGauwsefXWKE6NFzeEVN2JJCnRSy2hBDkxAh",
  "key5": "2ceRdEYjoz3yeTuKTXadhoB3PHg3y9svLudfsPtYS6SEApqj4JpfnueASJmofYmCiQKpo77T4X9pVEJbxqGm5b2r",
  "key6": "4afLUjbSEKn8GAB7ijSQ4o9Mq5nnL7zqxGwHSfcbJdAtW7woHJwmGqZiQRBj3Aj43mWct2qaYu4sD6yLzmZEHTY1",
  "key7": "3amPGmEfh7RZ9reG7CZArKfysL6z8bbCsiYaq9Xf2ShcPWLvdjGm2eRxo1RDc9FsEyembe6Moxbt7TxYMg6AYW5N",
  "key8": "1H5BTU3Uzz8w8ot5bPKdyVDawJQLDh3fLZw6NvXSVKAge2BZMwmod6p1PbFLBKt8b2vaf27opB2PerRUV8rosoq",
  "key9": "3f7XfSvpocw6mt2K4jRhLUp3pmbpzY9yDDb5xQGdXgCE8YduusgtN5bguMVz4yaLZJKSBSkGRLNGQTprZk2T2Bwb",
  "key10": "4zwUsAodiXnsDrC8wu7faDjTJSij6JZB74VnUJNwqJuXAWkd4ctVjshD3MPQdZNZ6PsPJ1HoasS3Whfowg41SCXk",
  "key11": "2jTkz6TtVXZPpxFKWCM2hNNgcrfzi9ETSwDGPSciMbvwAxZkHepYA765oRPQHY1UWK4HR2Nu7ehQQxNvPPmHfmBZ",
  "key12": "L7GgEDn6tkaC5fBQMSi8PTvvhAYJYfHHNaYc3XupPDpbBtRFYpU8gVUrNniTN35HKw41rwMAy9g1zRo3QBQ9Qhh",
  "key13": "qyvtHTjqirJarjNAxwxrLYGqc5HTGQyjQnEkckbYmCuJM8urbuv8w4MexccAsGodQLFYHR8McJCF23GxBZcS4ZF",
  "key14": "2JikAMEkBiE7fQPfFCepJYaiT3vAeDVpVvgg86t1WX6Hq5owTRxHRYspi1YFpkugH1JYL6wU81hBkTcyRhpsZLiE",
  "key15": "2JBbhcgvTTH6nyU8ewmvBHnbPXYub784EnLaFz55WUhZARceLT56CGRTSi7jk79eijbQrZaQG4TALG6CWzC4inpw",
  "key16": "rRKduuWfPg61TDnf9kYYDZ96kacvdKYZyxKKyhjrueR7cYVTuC3EWMZypuqw9oRi324PYdAgUzRs7UMcAL1Tiv3",
  "key17": "5cSLRDP3wxUNVgzF4Vw7tVHxUJYpD3SHmjq66AbjaUaUpXwvqjrdPe6SBod7CAysZQTqbu6aob5RUsexRUHLXkAs",
  "key18": "sNhNZuvoS2J5Nmu1yYJf9X1RMh1gKMcZeHXbNfA4nPsXcSUzcxU1j2PPH2jzR8xwosH96tGgR84nLE34MqxuDM6",
  "key19": "4QH2HCZaXddFrAaifURnpfsdzr6CT9EmhpDcSszgtvHszoWDkFkv67R1DF2MPS8xkkE1w7udSvFs2MuSg9XLtGig",
  "key20": "2qf7raaVJBsdpxRgX14VJaBsmVbxsJpBJWU1g2BdhyasWeXAmQNxyfeg1ZBVuMuAUG1cVDMneMaWK4qyYSnEfWvh",
  "key21": "Rw9mr373QDbecbqqys1yeP9e8EAX67rGf7uR9MdtxTAnfognsvub4eFK763h7hG5iBbjotjWAqet5b6QXmKpxUL",
  "key22": "2nWvbnjH4GNdjXTvLHi8imt7sRyouT7xFhj9MbttyezsSdqAJYcEiL2AdKfurAbE1q5es4htYaWbkwBjkz7zAibt",
  "key23": "376hfGFrJwLLnCNVZ5QPDrFP7szbHJbed1UeW7DsjpnteVmMWa9X5Mo5b5tECfTPXypsKpSCj4CCg4SvPUQ7A1Aq",
  "key24": "WK6UYUZEa5i17JHxpamDFaV4FdYxZZqWH16CzCVCG6GcH4hyDM4Kphg3jvu7MHhb9zQWfjnTzKufrAMMuNw8Jwx"
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
