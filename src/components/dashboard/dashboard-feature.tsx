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
    "JMJVimDYut1oW3Xnubt4oQYzEXwTj5vx1dHqTdjd8gMyfPudP8Mo12SA6iYrC2V3BvPAtCv1WNma2W5MmYWjvhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26Dn2iDjLmDTjgviNUbvZhhXjunrufPrtPiBvZVM5TTtsiuw3rRSp9VBsJM1KCgcAeiDwShbayEjWMxPGCSmq9F6",
  "key1": "5k5m7FhhmVyrmsavmqbgJ3om4fdRq8VH2v6mL4iq9c9jj1uueJPFUSvMs7VCQSc9A5nJNrhVk3DsABobmFso1rzu",
  "key2": "4kSUzbhS62qc3UbM7w9jeneaxVbNdgQGPaRnoe8YTaRQNgFCmpqh7X5DUj8oM3cBi8aWG9UXRgptetaUq1VnBKEJ",
  "key3": "4ce82b4apr7kZ3fFy7VXEeeyJWnPEPx5dMnDYR1Pe2eDQFQy5xyhcaR2QVJfhqfNdLZUqmeJpqL1vsEEyYQ5VorD",
  "key4": "5WraJeBDJ2QUkhHtG5ofRjPBtESiPPxXU4LGSrqiaCRTXwSQ8ey1ASftka3G5FurewupyvXJvZx5JkNAyGWFJLc1",
  "key5": "Bo4kCXFx6UmtUpKceSnV2TGKMTjMeTdM9kTUGNcnQL5vfyYYdxhzSo9vjjR8m7eYt4KFHFveDaBn1cAR5Ly6oNM",
  "key6": "nFfhKutHwqELoVpggqTvytd5tw1q9vxaWgXdfxDESjkVqZxYsMKkqtcEd1FCKF9EQNonZpJFoVo4c8kvdzJ3uGX",
  "key7": "65rngFubCkWmAsbRBsTqexbF5PeE4Gptg8G5756Bu2bddhyYSf6PKey7LDCP2GMuCaLKHLPAZMseU8CwcqR5zfjp",
  "key8": "2z9UzA75twsp8nwNKextd6TscMSzz1dbd9bjKzrKxk1dvWQnXLMaBQGzeTxn2VWubV67hUZxQFCjQZ1eNGNyTb8E",
  "key9": "5XYsTWTd7ezzSqDAGAZW5iXUpykf4gtjWFdmaRjtLRXSTAEkd7tdjyeRvVbKSPKgPXTc6uPABkgWW9gkTonpKTTm",
  "key10": "Sg1rqx56CnSh6sDnAKe1WgtDdRjgZ7M1H9Cp81p9w3bn7pjGBiLEkdeZ3QvqKUKWzyX42pjnHW7wbMFZBxhgBcK",
  "key11": "SD9kuKnYzVuVLCX8UP2w1eBAbJaCEFm1W9KeuKvYmGpeuGCQNiJoncW95DRcRkB8pATtGgFgVYzqTG3bXoarjAr",
  "key12": "3rDEQyyzWhsUkRobEHgWfXFjogBeeSgKYKfLsvVN9Byqiz7GDoqUu7SkSTwD3cwtAzYoKVBTe3ebHMAX62UZrDqD",
  "key13": "5n64U4GKhAb2wjxoTNPCbe3H4n77w85SHK6qmJWCS4o8zmnBtHZiQ1bXKpJkVEjod9dCCF3UXd9BNzQxt8yZfnRK",
  "key14": "4tKPqw8bYfbg5itVCfTeR1mMAEurCqLyUQKTWU6RWmBWiCzdW9ouVb11q1aG7ubhijz2Foka95gEdgft3hgJqoMv",
  "key15": "DwSKtB5mfRES4N1VXydxVgQdaiJqzBnthrZgMNrof6f3aBP5PNrY9DgMoHvDatrKiHkPnsMDdhhfYf8YBQ1zMH5",
  "key16": "4QmvqRUdCxtprJcLHmVgUBW8A5x5UHv5xtUVT3RCkDzRjjLWzzePeSeQSm5RLdafSezxbxNKsUJ984MAksEdwbXi",
  "key17": "5bFTAa5dQsEuPbkbndKdsaE3CD49NJg8P8KucoJqNSFVxYbnzHG8DKkopxvcgGXbsYyGi8G5vsC5ftmD8WBg6VVD",
  "key18": "56qDYpH5anwEHZs6y3xRm7AVmTjhPMUMQhbmPMcdHWvpBfogRi8TvzHMKjmHhu5JkBbr7Ksc9LfNZGLswuLRcUy7",
  "key19": "2hSvdShfVQeQME1p6L8EYRJecucSPSuBKqWMWbdDr7vKptwD7TaTk7Ce2JFExyYepKZExa5FtMVSNji1oVr4D5PX",
  "key20": "i8cyaTwevcnoM8u6U6kEiLBx1r8prXA1AFmcZwnvYYGdCJG5fneyLvxQJMVCDXCP6pMjyw2Atc3Kkebej6cy3Ub",
  "key21": "2ENsDm5YTj84SqrDVkR9Yc1GG1xLcRfWZjrPFWCow4oxPU9wKjhxH8dGp8VTQZUZFFh5xxmqpAGy7798Sd51YsYX",
  "key22": "48ovskhHQG8pur9L2Nj2pbLYRuZMRTbjQXrvfBKUR1WE7ffvNrjMMsmJBp2DZiG7rNmUPpXawxiUuu4AohPbdjkY",
  "key23": "2oo5aiJanYYY1TPFE9AnfjnZvAbtFyZoZ2W66ypNRdixakHFaCwoTVFH7XZREugkF8k6CxWpppxJr8RQ56FapoJe",
  "key24": "4NuUga8jqWiWtjJkBW8ZVenmmzSmfGd9yPLho9tMBDaZ571bGiqXj17MMhGdzjW1CF3L2xijJvUGBCRoQEdda913",
  "key25": "2X5z58FEA13pXADbemcv1GgRuLXY7v5juPxvd8p7vN3eAwEeHjf5hVwZZRsJyZtfUfeD5BiMoThQxqP2i8V1iE57",
  "key26": "2ABXcCpwiHierGvefJicNXSMWGe8vckmbvY1xkrW5VSzoPpUf1kAj9PyJm1Zm2UBNPuQxEgv7cSUnZ4mja2t6Rcp",
  "key27": "4ag3TA5ppDs1C736nq1MyjRENEC2ff8YqFqbv2QCKh8oGHFZKBFNLHXTmvAAT1ggfJbQFv6FgqkesNQahELgB836",
  "key28": "4mKdxzNRV3fabWtb4hUoUWJrMytUsquXSyJvkTfoNT5PJPu7GhDitkpue31Zes3zYqnNJXBm8EVUr36CeQ54xaio",
  "key29": "cmzqhchBNG5pU6qzM7ncKa5ENcnqmiPh4TJ2Wukgdd49BdnWzow56pY9UhWoaP8KiH2zKBMcVHtcLBvE9Bg3Q1L"
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
