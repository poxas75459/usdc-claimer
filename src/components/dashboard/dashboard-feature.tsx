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
    "5VNRdAfdzzWAoYPYMf15g2LRm9vtxDP64kyyN7LLPHQKAbQe2KRaeDaQ9Jw7jEo9SKZrqd63RjhBGEVbmkVFgpbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q8mYJdocMCPu7DjneM8o3C1t23t6WEaVpqXHaL4MZKzzyoZoSfdJWqZfjDnBj8aVX3Qig4cJHJftEx9PfFfU1PK",
  "key1": "4YGbZ3Z2ppsT14Ubad6i9m6xStiqGDMNiSCNJNEq8X1pP875hfzoJaJEuuT8KYjp1qrNoEi5MT8UuhM7jpcnFGem",
  "key2": "3VjUPcPjts1N9vnmcmMRaetnozHVYVNMdeKveaDuA88UgpDnYmeLzMryqLi4magppYTgrJxkmaw8VmczwAUJSBUy",
  "key3": "P3gBqowAohu3GESpu5Ct1gaUhLUULdhKtZCmBR4sdxq81MVuQaGpnQ62fuW7ZGdWscm6fqURmP87yc6pC8ZyN43",
  "key4": "4e8JpAUqHEfBn6mRUjVQJvGo1fjzAbcLQXTWFvkSn6pBNR2aqu4DKQsA9Dk5XuM5XAefthvxuuievv7hBxLiEHCQ",
  "key5": "rS7io9XxjhBm87eK39MrgWYEnJa9fygT7zVPygFePkrwbcaGt2dD3MafA78rJng9BAVs4uWEZMXn4n5FyTwVym4",
  "key6": "4aeLjNrsKGfErvKT88z3j2QfR6BkiNJVncJ6GZWuBgcibX3wV8tjeTittQ7xgyfA5dRK7WZaaLkEG8D4JE1GELQp",
  "key7": "4HnBZrCX7DaWR9bXRc6LsQJgHsok8qmtn2TWoHMX6GvhmXimux56YaDbPVvxBWSUMQnuhjF1znYLmrzjTguqFvyv",
  "key8": "2FqTxRSWuHFNfNtQCdtnkH8KSobRUvcbHQuaUiNBTR1CXVK8auWbzTNJ9HXqdAEQaZrGHChoLhhVuuQAc5EWU5Dy",
  "key9": "45gmhDnXour4Q9VwdMEvNefXAdyutfCSm3Cq7v1N4TKbB5qCwGMxfCDDu2dxW6pXtEtFEJY9hqCxiy5ALfJ7uoqz",
  "key10": "4fgmCSiNRBmvogwRA6dMd6D8rT3dvuP2AGtbVuv6ADDS5yyH4xNSkqAAEXWKaqdJiU7FEyRgGPJutPmk9DWXA8kW",
  "key11": "4UxQgZ1rb8v9jEHCmzvRT16EWvgoGFEeW4tjffmKpxfYspdi3CKZdqdTDikm8TZXDx4axN88NtbzEZJcJRvWpNk4",
  "key12": "4HbgQppQLR1fRmTbyjt67SS6hfNrw4Bvvvjt8T8rmRwmQ96VEQUg4CMWuRPfBJDrsMxQ85QzHx97UxgTnktS3MvG",
  "key13": "29iAMyMGnpom7JCvqir28CqJPeWkcET23HmjoTt2sfCKRGt2rieK2MWZnnnSt8xW7UkagzhzxMSpiyF6pwQszWsg",
  "key14": "5pC8DfAFx2x3UizXA2ZGqGL8h24dh83SeZ2LHLNAvGk3WighEfAWQTYThUDE1Ed6Cs7nN4TaoNaFy7feuXoC6TWq",
  "key15": "4XcruGEt5XLKy2cUyHgEtr81Ng7MFUjXowrxCnDQaXa8cu7zSsupmU7D1XCwGTEdyGB6MXAcpLtbFQ5t56tPdznk",
  "key16": "45Xs98di3PHAMBtWSiRUsncM3GdRJmwvZoD47JbE2EE3s6sm8rCXhf3FDp5ADrrJdRfzwxZUJadVW2w6R66vwCS5",
  "key17": "4SF2tT5Cr97uf7zPuVfGpQk3PGVv8kAT1JgErX44wPmeVg4st2DKyRuLimSDFzDkCvmzrcnNzxSTBtUhnrhubpT7",
  "key18": "xZyCbWF9irqvr6XUcKHv9n4g5TrpnMgdTZTqRGPWkitGc7ftm7URcBGabVuZnyCJ3kfFGmSrBVxtDHtwsJpf6Nn",
  "key19": "3DAzy6TBg8BL4NiodDAmfLKsDmqXJpxaeXdpUSNWCbAoeoFR3rVWe7Y1RW8MaEfUogZ8BrL7uci1TzUpqB85DgWP",
  "key20": "22fyK771L5VkEKqHiTpHekaBAV5voWWR2Pgn3HQfuGz1WZY2PtBAKMfgm7dq2umfGZcWEJH1dCsjSWEWBkADBqtM",
  "key21": "2UcLDDrHUHoUHNEtgEKE3wYCFiFEUKMyUG4WsGjqaEdW58c7YjXacftt44ezZS8oDGzYKr7Vzbp1MvP3vazNaCoV",
  "key22": "62f7DcqZjoADChRBgbNJvssnDWvMReR1ohVkCVu4DDiy8AjBSFZvcKzziRjodVoBUnGv4ujkB4jcFiqr5fYEGhEa",
  "key23": "FuXzDU8foKDzvxngtHa1WDGyBNWkoiUxWsPgGsoe6zcdgRJURUJbSMsu6ufncgYCnoBtwNUNDs5U1CugufjDztT",
  "key24": "sJaYJosGCde5CDvMnQD7PbjYwqSH8oix9h8ZwteEwMNsj4Pe4bKsyivibzys6FWCosCqnVSRKaBRwV47GxVfsuK",
  "key25": "4TTPyWcxfuCgTC7ekPskTuUMHYwdJff1gDa17v2W6UEmYcAg9z9YDoRi4BSqtLuzUMcRtxBJA7wfMXiB3ctBS734",
  "key26": "osbcHJ1X9A7t3eSuogMho1XMaSNXrZtVHo2PyjrNiAfBTUvVPWMg6AyELZBiddkh8cn6VjZNzk1p3hNAqmZs6fg",
  "key27": "2fU8d6r9QDXoNeBV3aKDomHh8gjYfdPkc5Aw3SND9q3skaGRPPBGqBh2nvva9FGwUgRNDyDkmpr7Vn8n4P3CNm7N",
  "key28": "3pdFeaUuU82uDDBNDBgTshoEMXDorXehzP6U5zDFXw6z8rjFaCr2DGMGHZncdam26boKgEwCKmLYeTyRwngiPAhE",
  "key29": "3xrDc5KMfjcEBxk69ggfeE1HzQwTujiuXiJQkw7NqyLnpSeXfTuhpPCmJ9KgDLBHpB3eaf2aF4GwLa91My8TiQYM",
  "key30": "CRx9ompVCNWbEXYoATgacZ19jn8vFPfWbhc6YmWN6YMHgRTWta2GwA63sJYd7FhJb13mst8YZpvadus55JE9i1H",
  "key31": "5Q1MKgZCg4aR3BY4VoiFcCspZ9s9kb3hYMYZFoHQwBAbYJmbLV1giz2Ed3ggdW6pcHs4fSxJHMxMDXDNLtEwvzad"
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
