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
    "Dpx8fS3PwRtQtBURtqDxYXVmUUtwkgLKWKinDMRwTHCK4s65xZSZx8UZLzMqMtkTNi8QsiYmTZGqPgS4e4UMQ4a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Vumf9MVHLAKDfJP5P5HsuxsuKcT3n5Q5YZLUfS7Za8K6DKBQ28dtoTncw3ayuHPmCzy7yum5p5LstZe2bTTfP1u",
  "key1": "5rodxvhwF3tMoei1zDFnFZo74HK9iFoRZT2t55NiWg6Xud6MijiWNFHubNvRNbnXZpdQ9jXB5q6u3Lvb5W8hhoBW",
  "key2": "3RARL9WdQ4wucJYAv7yMRaCtWT8Qqdqiputz5skZ8t1xEASBtifMgixzVDHqFVua1g4sHLYjBQy5TLf4FxR2DpE",
  "key3": "52nszFiLnWH2etz1vBeG4MGBRYJdfZY19boe9vyt3M7ZMWXwCStc9vJq2KvkiT9aZecBS4fUv42gzEqzJCUSXdrP",
  "key4": "5fVbGAv83vXNyiSVELdHaHEKLPQ8adV1xvthTvFjjd348bQHjQRmFwh3QkTkaxLvpEc4SY3DEDRJg6z8WrvvLwf7",
  "key5": "4iGZjpoEVH7iVL2dYrwZKaJadTtbcRbzaDTc5tWv8nFyap911GuqpLn5k3YQ9JJwe83FLmbccqtEtXCNhgAY4Lv6",
  "key6": "23HPW4zsRK1JnZrrb5giKnUAYjYbMV8XC4CUR65rjjEMQKm6v2c7gefE9YKd4KbX8oTXsppGD6YMqMF3DmDt6oQK",
  "key7": "LnkLazvx4svQPBpsZNGJf9ddHrwfxGbjabas45XxnrdmxsyYr2Z4oWk6qQwWkB78xEW5GxQTEtqhy8c5CwC381A",
  "key8": "2fp95XiAFTyU1hs2zwoH89HhHqMvVjcqjSC31FLxsQ4A6pzirwdHwcPGdp4njtmWVM2da7459SPMRmshA1H9WQPE",
  "key9": "32KUeygULbmGD4u4qeRjCfW71zDT7aZjPhyHHDtfpcw2LnwraHsb6ZA5SUVdYk5NRaPK2gbpHDFCfo39p6T2Snj2",
  "key10": "5oi1pQCHWQUseFsJn4EYRSm2mWCJtjTfcjxXNJR2L6djcZzSuVfkKj6LULNA7b6tMeNjNCymJnDKHRK42GsHGBf7",
  "key11": "5i3SWvmw9Z3ZvvVezu4P7JiHywsifo6fmqKt95qvsGsjH1c6QB2oeGXKmgFQHVUam4nJ86URhSBUmYD1bmFVSWm5",
  "key12": "MbFYsGehx4SN9BqJZv3mFhqikfK3i7SCiUNv1YwaSxpP9e34fx3A5pXm8xwwueZ7VKveC8KM2nqJSjW5wVF8Rcu",
  "key13": "ZcE2v3CNa2WQAHwUmQZ8wbq87Yo9hhfNy6YJCE5eaNzWBgbSoQKF7wqvaZ33MqYdtifVH6wA2DjZ4qcxvHPviyT",
  "key14": "4EPj4ukWnig1AgE3JjWhhM2QR528GACj6vq1KFyJ9eBXWFC8VSyNaVVpWtqjHVXQ4NDn9Xpou7n5pjNhzHaRCpEE",
  "key15": "5R3of7Hz8waUBdjE18Wp3TRKmBvn48GYzmxL3Bb2mawN9bBAKdcghoN4uqSHLgeh1r9TL7ojeEV4PM7JqViWi8Q",
  "key16": "2C5hay7WAVA2zgyon5cU68dZGA8psRFSVyFfLR56Sz8Zmsz2DxQJv7rwLifhdRDpeoPKqz8AALHtA2JEz34T4fjy",
  "key17": "541Cc2yH36ypdiYMDTERQFYEUfNvnTYXmUhio3DQ1TZFmsvTmmjy6NGtaB8S8kwp1EojiJWoPKjZVmFVqLwLM9Sk",
  "key18": "5pRv2uhZHpn9dcGQ7Jzke39chYJYiNtsKS9vYTFPkYkn7m4tJvUq2Q5wHDDzXdh1BKTdigVyhXzCt6DsNBw8WA1z",
  "key19": "5yQEYgTPocfpoeM6UFWM1y5pBNjVYUGXVNWybnMLKkZLxyCXXxgyXeDpfEzUUHuNfQg4wNzGr65U7pXd35UuHUAT",
  "key20": "2LQVRbFRKNpTD4gncY49Ha9xqxyTLQHC9J52WXBbAuqBenkVfk4WtH1sLAVtjsS1WqXPhwNtTuvZDTFXbU5mn2JY",
  "key21": "29PZuzdk2jDpj41LUUqKrDgpojheCMn7eFKLNK1btN9sGMdgeDvEsKTFPg6zmZraK9jX6gzL8GLmQGtw4nTE5QtH",
  "key22": "3mURLP1rUZeumoJiDRDLtAdViwDyVzTUbTJ6ni8CG6bixZz5SzfcmfsvZL9uoEdKRRr9sfY1YEgQfB12XF6dhQnj",
  "key23": "31MqmPjTCpozuFn223fPHuN16qizwEcp2p3RhH6kfjE9icim8DJCycsVCzFviixh6Utqd1DGCU9WJdZS8FeTHNW4",
  "key24": "2JYSoaWrivEcmGAaG3727XuQ4cQbzRsPrD1CJXm64RHYYCN7XMpEygHnoFcH3gD6CG7qYjCTZ2ECciy3HmFJHWnS",
  "key25": "3KDiRr2s8VBT3LWt8vFa9hXZf7xaUGeP3zfKtsseidQ7z5ujYwfDQyxzrFSVvJBCJp5yEtkTKWr4ReEhqS5SVyaB",
  "key26": "2ymMPK3jRj6jhL79FGXegHzFdGWmsgy8VpMyevDhBHvwqAQdAhWJvXoPECfaHACMnYjkfV2Yaep3ehVGWTxeYws9",
  "key27": "2fxyYX4fb5ov51E419JXm37YBdogBgwdcRrsFUmFMPMxcH76AuciwX1NfwbBndN7EDpTmU1YdUMLScAj9Z4WQr5i",
  "key28": "5GhexGLEXpshibzBqK9fVKTCLzx3HGWfKLLkgBaFD98hzg3HYSCL3h9PYUTsjueNdXP1MCZoYn1s327eZ1bKpjnq",
  "key29": "5GncR7B8SsXQ7m5yWJLpZQt3KL5JLEf85nEnQHHjfRLDmASiKARUhTj4dnzrLKahLVhuZLotfyz5WW6632b5epcK",
  "key30": "Hee23voBEiAAx6ut9uYpNXfqnxo6RMpi61SsvJAa9449RZPFzqw7e7ZjKkojCWTMYyASxECxVwRuqp9KwhqyYgz",
  "key31": "63J21rUQinoP6qsTVLg9eFc9LTWgXdCDbN7WsEHHdUC2JvXntFpLiEPUjdB5ZvEgth5BsX6Pi3Qf6hDr5vTyVce9",
  "key32": "4roPnetpMqhrsnxyq8XAEBkW9vHphNG4yQ6wfYBDLqsVQ778XsfXcxFUAfenoTsbp3GNMpfHarCqFeCWEL2Eg8qf",
  "key33": "3woxkowjrEbM28epjKTn1mtHmn8x985QG8Tmbk5Sj8cmeBEhbAghZ2oXVpCGmzy21jJ5hdra1TS29sSqmeTjmNPX"
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
