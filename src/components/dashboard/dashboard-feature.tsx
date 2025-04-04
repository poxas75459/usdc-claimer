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
    "2DtJqMvHEVp9GTMtu8gaGFTijqUcCVJ6zVSQvPwtubnBLUzGj9FAbC8Ag2EPxXk1tJjr8P1gBMfwBkKUQT2aseNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jmzHvCdvH1pFFJ5wBvF6e6hqaQZDydkhtWpxb9Ghozwpj2PprXnq5DsBcgG2nqqtuKxSqmqREQg9L2CU5KdS66H",
  "key1": "3bQxrvtzzdrGb4BQvGwZhaazdKD8wPjjT7cZiZDbMqmLWGg83ysWz6ZSkmpfALufsq1GmhtbECw1PLernzUqGVL1",
  "key2": "2V2ozmmuJkV3SQR5DsV7x8TnqwKADr74TNzMUR8vJHdRrwTGTJVfgUb4GgarTo797Ai96ucQcAxKSqwkbjJcj9Hi",
  "key3": "2X3fSK2FSEPFgC4mPDKA33SwfHNGSX2qsu9KBSacJ4jzzqxUJBz1RXpQn8gS2gnLhvgkvCQALGhZNhvjBKCHpuV8",
  "key4": "3u53WYLAPQ6fYoGMEMTUMBAkqBPgbpPcjy7hiVyR5dExj5hXd57EEr3UPJx5BAEKt1YBhqWb64XnKD74X7D13MXj",
  "key5": "3EvX75yvACPy8KBxwr9xL53KfWtAV92NwVZzSchFDRykAkjcwhxNAZbaYvcodVRTRgMqDE9PyEkMDPr5CYXzLPv4",
  "key6": "wsBjCXK6iC8PL3bZfWgpytKDmWaWuHxRcavzS3P3rEPKMCcz4mYRKvu4Ro8pB3VSd8gnBGtdHtVpR2fiGi197Xy",
  "key7": "4EzyuNoVHJkdq9bGoZvBRVP5DM65khoXskDrcHMReSWf6xAEgugPccUbrMi75zMPyubWKRsPPw87DX1TRncoB7Bo",
  "key8": "2MnF556dGLM1xQAGAeHWHdcpRGHpUhZH9P1BH5DXkH1RA9oT7TpkTHsNM1draT9XzZHRhRZxWH5TdMuKSV6ed5xw",
  "key9": "18HjSTSfq47nMi3oNfkLytF7QuQ5EE7XkZvR23Zzk6ViUxhYHZogPkD3qiaPBBSrm2LTAJHMWe2XSx3mpXivpzU",
  "key10": "61SPqoxbct6xG6vJ2bm38zSVRY6mMQhRUiuLkhxD3z5VSmpPVnw85BvHAgD2nwJMXofjEXn4GiyBwG6orqzSLsPM",
  "key11": "49SyAyuCKUZTx73UZhvvYW59bQn7u5xKcoRtQhUh5Uaoqpsb2H1P9s7bZT1BQP16CD8tf9BGA1MwkEY9Xr2usNqS",
  "key12": "2amCYzkXXzp63RiVdXnhCV9F6sBtAsuqJpCVhKrP47RqTNnA19BX7qANubnutLxcmUodfAjDQm82JVE3PHChcDVw",
  "key13": "2Ryk58hkzQnMkkZwLfYuv6ZjBS83nkm7GXw4CJ8gg7SVcMhfaXCzu2FdKzWSPTNV6BcW24GBQVRrA68nnT82JcBL",
  "key14": "4QpZGMfTw4ucrYaCD6P7QQcYfjZxWwhikLkGdSDLNEWczUfibRES6PEgdfggwhug6qscZxWD7j7Jvjo3cDxj7xcf",
  "key15": "5MxBqrXDbTAUmKLzmX91HHTtbNphJoy461vqHDJZcqVT77T2RduYSSzv7LVAaS37beJQ7Q5WeboyNqKPC2JjnQG7",
  "key16": "5qnhLgtmfrFYdbT8ByB9VcZZR9MQEyrfvXNfAChoKbf2gCr7xQipRXGVs4p1szVsPxKdSyRS4ic8LgZHfr3NoM5g",
  "key17": "3nzRHkfLafKxHdFNk33wDWco5s4EownKarJvvkTuJqq52dsjD8UN1R2CxfJ8DQP5eKZ4qwPR31rGoj35te66T6wU",
  "key18": "4Nh3XnjoRLnscuHYspnvzBrUXfrhL1CjWRe3mAWqrMPNs2YeDxWK1CYC3n3GB69Qhr1ZXEPw8ve7akQVMDs8myd9",
  "key19": "jSD3DKsnnRYUAKVHaw1P2ZJacKJ2HEmy8dvzxfop8i5w54KWArbD7SpXSaMPiCTYHbYswDqD367TecPoYa5qM72",
  "key20": "a7LSAzvBDuLkkU5fNJoxLxx3DV1yrAAbQcYAuq3wcScXXfdtZk1dWUjTHevvSJ7Th9Kty1xyWsqginisvaFCfCy",
  "key21": "4fWcngNnka6UmE3DVZNQsURaaSX6FF2hoJhDxPjVMNJ8vLhuhdgG3HZeqMjrLKkEtezDADoX2NLCxcVUuuV4RMbu",
  "key22": "22pEqiyQnQocUQXDYag4c6PrVb3HgfJWhFkbgz373GLyVoJbr21iDWuG1Haazepts6MZp4FZjAJu16kNfKLarjUo",
  "key23": "4Aaj2gKGzc8rj1S1voircsYooxQLEjpxEwi29auxmGaxyoAsqyVcRib2rEsvFLDhZANJgN3sA56M2xdsUKdJ1ksA",
  "key24": "3bPY4LMkX2TdZcB6Wh3U5yx8MydrcU9D4ZJjuqgpgGMGsN34qzJd8ZbhtErx9jY5yqvEyKyonmWmt4uTUtTofLfS",
  "key25": "62jDcX7b5EKuwur8w2p3GiYeZHEkfD8kf2SmFgXF3jqDBuKPPn7y25x1WDBg38zJqe49jfy5RR9jny33ga2Sc1gi",
  "key26": "5WDWsZSDkvfaHCaDH53j99MYyxPftLoBp6p3is1jn67KGzqcW2db6wzH41AU2xYQt5yGRcGQCRUjemNvhUvmHAgP",
  "key27": "5QwonKpKmgCP7ShwJ3QsLtL48gnvYT376NzJG8rQ2o5eVsuVBSec5kV3oME3HxH9M3DcJkUUk68rQT3paxQ4ad2q"
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
