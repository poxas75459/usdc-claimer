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
    "4sxGbAiZzUDhb5idJp6Kziq9XcVBUzgeA9HMh7f72TsgbfixtTymB4RwLzEhmHxaanFoik3K7qvvYDrf2NoAkDYu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2giGvQUwPH9BMHETWRGChB3k4zbhF5Y1inyjKxgEFSfFbg9Snqg149Zx68HfuNS3K4sBkzj1ifJFj7JGwDDp4jRK",
  "key1": "5CAmbymxiSZbVdHw9kXHeuVfcY9YW2qoBc2PVmpXB7N7f8o4CMCNnEyjoTSyXPmfuvz54Gh9VSy9XrTLADd2e6ZS",
  "key2": "5siepG6ZcFpPBy1VkvFp5xH9rA8jLEMmMfQbnntr7UdQq5NuDqeu3d83kiNuVYaUS7yaK4cETCBgAjBjFTH3QbSs",
  "key3": "2gtDkk3bCayWvZHFqzNKrSLCetPAZiLpowHXnXak2Zbkbhxo6VAK5Z5gDYeEYrx8GWMxexYUVJKzx44EKXu6q3Y3",
  "key4": "42PTAfhBN9JTjGBujmZHjUyqtMJeP29TPfXigB5YiAKLMQFQaLWUXaQHsLAqm7Vz697dE6NZBvShEMcUBNM8arNJ",
  "key5": "2UcntCBrXipxt7ZUDJCDEMiEVmgM1qyUxojRV3bCVWsBzxzJyGFwNmga7etU42NhjbPZidSecJBx8UAsg6RXjFbR",
  "key6": "43yMz5h5mxTcmGwJ4KnnemDZX9cFKdZ1Rnu3x2bsWr3TP4bRdTFBjMyMKscsYzzk3j86tSEsuFMPsGYuw67K92ox",
  "key7": "2kzBKZEQmBxxeVHj3Rm7p5ruhT28X2p5Q1fDdiwLMni5AtBNXPA4JkuB1o51mUB85R9frJDgScpMqVjvSqfCPTRF",
  "key8": "4q8YWyWD1u3mDdB7qgSQTmm589HXuabCQdWL1aR5dq4F9aZrtm9mRh1FUzFQMSLVxnp3jEQejyVQAY3tribaeKLs",
  "key9": "3eFThucXZhHENp4gTQQg52MB66JyRSjdMMYNEHCWkxkWDUpJP24CTNRc6acmTdpznNAYzWThciDmcSbajMtVJxVn",
  "key10": "49HV2J8f41NLhmtkTBuu8imkyAiEcghszjiPYXDBZtjhVBk5heNq33xT5YK5hdyyWTPgR5VMSfPkuzb1QQEu8rF9",
  "key11": "3FMAEX3jZCWAUYdDvm3mZbtBE9PrHTYLBpy2QtifjCEKujkGYUcnadt9rXqhuZ7bxbAE1os4tizinQJwk2H3jBbj",
  "key12": "4gGL8orNwLh4nvF5cJc77PXdhTjEzWQq7tyDmdrm78riQVmF1QnvxjSv45WZPKfmegZq8wmARutrozHyoVkjX8F9",
  "key13": "5uEGV1sKSYihF6MEr1JA2dvWFn2rHV1CL5XgkNBdLEHpK683J44onBABCcgKGCMGQxvThTTvsM36osvwWMcZzqLz",
  "key14": "2erCNHajeoDaFCEzCrdo5bRTmF8zcnYo8Pj2kTTAtmXhJcPR8ZHwyR79CNe8Z2Z4gGmqu77edNVicthYdnC9hvqU",
  "key15": "viSj4qimXjyPXyB58rKXkRSXjEqHTCe9Zs3owXR6hAm8AHbx8SK9HQUZC4VWwxVUtHhwrz9QsapdDzZmSzZgK5s",
  "key16": "XiNW5GS5RQ8za6TJb8819BYKPs9LDPBdy2tK8eb5Uj23i5vnwxUjXds57zoV5KJ1qRwwjr2XTMEiVFAEX9Lui5x",
  "key17": "3153fAfKbo2uKtBu9u33MivjkpppxMt5sp46XfvWKkqiG4R9VhhQTz537ZMRMNvVxen3DHDtPPv9p2qaD4rRG5Y",
  "key18": "3M77aoQFi7Dzf46PqYVedfw8742k3rh1BrgTrdBGRxLDH2ZNff82VtrtTpRox43XRmxatBuNHjqkFiiot9mknVzG",
  "key19": "29qs5YBTwLdXr1yHjqcs4EcyB85ptWac7Vou9vrKcZow2rHTonRVorzDrpsr7kT3jCNkT1LLTBQvNbUjxHKCwkzQ",
  "key20": "2i6wksBf6VDSVA684NrhUGpmTjEpe8GgksNoBQbQTxgB6RCPE3fYdEhWSsvzU68scKow2bXwJqjvqtSrFYakBgxG",
  "key21": "4sSZWQNKjCeRoJ4TnYGMJgN5ww7z48sR8FRTxw6eUzkAU1HQ6hk1PRR5x3q77ErHoNP8i18ubHRqdnzxsitxRycz",
  "key22": "5SQeCF44j2ob2ibfzR6GEY6Gq41zQFLKnTqm3PAWTJa8FA1Tf2ABLPeN78Skio8LbHPEYY3EsvSL27v4sHdSarbQ",
  "key23": "2y7nxakQP1fY6bK11ZTWxS6WVaiFCfzC11ZeHRFT1sWdWZhruabKEip3VNmnMgswy6kjT152t6GvCEbdAKsh3wLo",
  "key24": "4XgGUNP8jaT1XJsrWknrVcmzyvoYmvzkgG93WqsRtNnSjx8LkbDN41STxJ5zkRQ8T7WhCgS1aH2qYdXAAonJuyCi",
  "key25": "3EWyrdggUojBoiFHpDUYJ6j5n4DVjQEprGzcdKSuZZR6WK3wXwCvAxG1ALexZDsjT2NqxRGvvf36GU7JqnmtXuvm"
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
