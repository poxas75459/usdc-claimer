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
    "4GtRtFA66rQbMY3Yk2kz2Bk4fDBMQng5A7FzDAEUBZ5eE3wazxRtMVsTuctuKigAKpS6EHuEuwDH1BcPnZFoUzcg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LFtir6GDRahUJnDhLZ5RAFnPPB3X8BoYwsKHVbRf2dTUTzpBpeSfzgNxMkwZ4Z4moNy4kzXQ7QbZ4DmXwm2ZJxD",
  "key1": "B2fBa7uNfsph9wb8r5m1QpjobA7g61ZhCQkFiHLZEJ8Kday8HmaWskU9iU6MPDwomuFdHS1xhRNN6wCpyYZp2up",
  "key2": "5h4Dx6tRZUgxFdWQtzg7BkKRQT5BUbz2596HRSfhw1txmnGT6QDTfJruZ6S87ibrfynHPktAY62R6kj3ETGQKBmZ",
  "key3": "5Aeqw88aqMNcUt3So6K9Ep6uibqJumhWocmFLn6dwTzXupiRjYrw5G1yKPiMLdfQG7m4uF5Xiz6ekB75jfVCkiHj",
  "key4": "3UyP2ggAoMJCfC7TZazzwDafP4KGrbsEU1SZzrhgfW2YGBDdeu53SxjYiATY5pKq9eZhiHYv2B4REM1699m5RDAv",
  "key5": "2ukbC45eyN9JcgjgpryeAnevJR17U7fUwg6tdAkg3vcjgWJ3FXU73G6s5ZDmo4jGSw7TAkSvFM8GekokVQDBuPnT",
  "key6": "3GqmNwwEz4DxyxaR1pRefW4YGYM7RDifE24DJTCT8zwJnyLtVghfik8wEf5AFJAq9ULCu7ZPLM84nxqzyjaARuG1",
  "key7": "23h2i5w52GNxoUZ1SE1qJKzo6sFFiwFq8przTN437EyL4nUxXWGEa8deuGmUMy3SUk59L9S8KCG1X7x6UcL6YVyH",
  "key8": "4C8b4mx9h3CJJGxTv3Tsbg6H5r6aNgEwzmoE8WEsXpPWorqBHVMWbJPs3JAFDsaYJUiCsui8TUPEzD7Zf8ve5ciL",
  "key9": "oyYnS55UsRtQeqZtGQ9vWcgZU8eGULRtdEH7R7e5xUVnLAq978TB2ypzAM2T8hayPEGVmQ1xbCd7qBraZJcVi4R",
  "key10": "3eNwP9i8XBZznL58xpuaSZ5Z4jfs4JcdUz7vzotzGyjUsViEZEpHP1FSQ48vyUb2h93x9DUvWeEfCP1hbhd9JLBG",
  "key11": "2fQKkczT9ggixMAnf6XhYo5D294Y2mZUWse7iEN6523UnSgDWKDMngPZPzTjLJiLgPhtuoe1u2iauXQoFcKB8KRw",
  "key12": "3chEpyBE1mxfYkJCBCMABAg3JNdMS2jpcNuanG81b7FJxkrz39R9HPMXYohysCM743GAWMfQ3JuHtVdopGw9JASX",
  "key13": "2vzLGL5TXZUe6FwyxtCSc6EgECZ7AUCp3psrqvw63XTfS552LZAXzC6jQ2UefvUgJRodRrqb797dnydjze2Yfhbz",
  "key14": "33JsG6drHM9Pmi8yyq5n2DHQ1THuKUW21JvrCTyuMwe6cJFSpwes1xz5zyxsoDtwJe93CLTPi3MggCU218BA8yxT",
  "key15": "5SdVVQf5V77MGzVhCoogYFknj2z8SGXJ3vWwrx2EnYJgBdAisSgxCfmeeH3YCh9Zh7PR7S91B6cXxHuUvciEHrt7",
  "key16": "2RCSbfDcmAcVe9dHoRPmxDYi6jJit3CCiqri9LHfGG8DwfAbRTWxCX2CdeLDPu5Brk8yJNMjD7C2kfwAkZK7LhJ1",
  "key17": "4MxJZxNZBPGNSD2RJy8NCa7eCmRhnBemvbXaY3dvMwhmFmn2o7E4qvHJEyt6gpnLvqbtLxqMUa73NmvMMwQZg1yH",
  "key18": "5Hy5RUMxoRmed1CvM18e9GV2rETMhzKP9mA6nBhVTbuz3z3hayKKiggeJxNZB7yNYeTqmfk7yvq3r1chDVGQL8TA",
  "key19": "eqbNycXdUGUUEj9tSGP295jM3hbJ283v37AwSX9cC5uooUcLAchEpYhzcGag3ppm6YC6iWPL6ZZbvDPoXt7sWcy",
  "key20": "hUeWVRcmupV1ZBjj5CZsnW22Ex2d2rgRAky93mFQBaSCgYuGqPi6HHbUWFgpaSvbTFDebvcNrtL8BAVoLgNhXUM",
  "key21": "2aFURCzxa4MWyYDzUwNN7uA9s2vAgiSgf87NPcTBQua9VbuAYALpD6cv4SaTC7SmLdhbiMNsrChUUXDpNAvi2h5W",
  "key22": "3ZSPjGMPHQeUwLA9d23NLwJrBNBVRgv31dBgtvLvJn1kF6cnZNSuwT7BCcRdYCLL9FbPGLVgMHKiXtsprt1DNcQ3",
  "key23": "5NsjYfHqr3ATy9pWHtaEMDMBxorPHahAD3tazrPTX53JiezCv5r9CADtcN2dvRF7wZe7ff6Z6K9rWos4c1Se8Uqg",
  "key24": "2LM9KAFFHUuokgZEhct7xXBPu2fdW2jucQEMs5PwintKQN5nWENE311Las8MtKex3Se8FjUm4HkpUwwRq8rjafnp",
  "key25": "2FaGTMr6YrUBCCcbr6FTpxFLEU1ApmwyX4ERasF6jW93MYcCVFP37fNGR4QdfQdxjCS6soqSy8kbFajapLAH7vHm",
  "key26": "yenoAhCrD1yZckPJzCk58c2Sx7YT98gQQQPzASM8Gx7vSa2E2x7y7MnZEezVJtBtHJ6i9ed4FvF7xDA4GHUU6BX"
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
