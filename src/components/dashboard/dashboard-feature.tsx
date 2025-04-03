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
    "4GQpCiD4pQzZo2hppH5eNR7kEwE6XavifdudPa1rSLXfqcocffi3jbZsoMpNiec5tFmdwpdUkBqMiXR5jd2Khgg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sv4vezKhwi7mjqZ1pfJYtBzUaykQiNeiV1Gx8v5bKJKR8ydcUB4HWuUdsw4eGtV9tPoiPT8Ycesk54ijw4dxZiW",
  "key1": "3mXnoeQ5yUSDh1VHACV5uxyGFWK23f87Y2csR5euQyfH1PqHZSKu4aZPFcjwBpytaKYCiSXnzQvXxNkuorX3V9W9",
  "key2": "5FCHqZsKw4Vr1mJbj8ZkTQcgVsayB3NJBjzdAVmKpCLRqFKYMSGwV4BNZnUnp31kVr2npnTsEyBD11YrbrTLBT3U",
  "key3": "3iJbAnQ23DUSdwfzPS7fP5vugSHUSKfnudHxGemHqDGsQ4yCdY5gcXkX16qr54CNnqianvBPDRYiq3mhXpLRpeWW",
  "key4": "5iAkrYWZtvSmrYUAaZBYDWqcNznoV8rKu2c8qetm1ciFmuoPoDt4bJiNRndgnqMNsgndrXbdBUJdVaiJdNBCNsJi",
  "key5": "ZGwNC8dA85Nq7DHA6XYP8Rz19H57N3ruFNfLVAVHt1XeqW3Bwf5LAVwdv4eEq9hnEe87FSQEGPvUMtpFcBZTwgC",
  "key6": "25PUVzxumTVqHXqgwCTvQLxVAHpzs6jXk3z7tKGxyMbPefQMNmiux5mbWaXDiQrv9jQVN1LURBfSmxiyUx5eG1E6",
  "key7": "28J4Hh6x11R3TjXZa18rtmobYqwBBJJwKQQUNoeVTf1WDtKLX4VxWi23rMT3rDqa9T7cK5xiVYN2XgS2v3v9RLp8",
  "key8": "BA2yuQkPMuVCzVs3onRywJCm3W98hgX2Km7VnQ1MMxwFt4vPUvQBWd23sdQxvRyBSg3iqZUKLsrrWqRdRqhiXRY",
  "key9": "5ddxDbEBhTGxuUFHCh4NDyTSaDS3bdphS8Ha4KTKkKTXnMfQGHYFJmLn2aiHvKwHeRXYfcznQ6rPx1eA9PmL1Dw9",
  "key10": "4af5v3NNNnM2BcjjeVegGYZqKHLAzAGtYz8eL56QbDt5TnddKPHdfEqXsSwcc4HzxQaqX5wx1iWdHy2VVcSbjyHp",
  "key11": "4iY2qxfTPfv69AqoDQvMvnksRjexEARSHXy6s3CNf9R5iK2MCnVUfi1DauUEjDc28TB3DS5emMLuks2pqmJW4Gp5",
  "key12": "xfPoPKLz387rQE4U4D8bxo1DQJBpFeDBUKaUFzhwcrJkN29BCTLQYCz2cgpN2GJi1D594uGoYmk1twBhv6jBiHH",
  "key13": "2AcMvXPopLaDtVvMRdM2zf8VfrYAEnjSLtubPuFGJ2ZGsjJUf1vPHDDucGw6fa5ProBSRLAzkWtFZE4zJzq7QoQs",
  "key14": "3PV8MpvZ7tbJvtYKcyGoQcPpTtT86WjexRQEmHxG56VqrVhTptkLSnr4xPNB7s2anhvgBCgneTYYvH2qANTmiHaU",
  "key15": "4Gq2Pf1zMUtqzHnQVLtT6iEwTFewQDQfyMpaVf8mYjMCAvYH9nGpxwvJ7xCzk8gp1VWSCcAfxcE3XxAiNv68MmXU",
  "key16": "EPs32zfQMMDXpJGc2LZC23SYSDGiRH4JJdoB3KocHkFVi5J73YbKypKKyCBA4c85qggCFnYaYhL1n51gegLtFN8",
  "key17": "5KK9nrRhR34YGRw3yeN5JaNYBahFfeP4wKXTnqprzCXJch9fgmU9ZvRQfU6YgLihR7oB5t9JD3bSq5uHxtoumkx8",
  "key18": "5qkwBxHYGuTorBqRUwcYAdmhnyR9BanNwbt1sY6W3Dk61BCWKYALAA9YdzBy6CLT8WL4cYHE2bTmVhSJjAGauKSE",
  "key19": "2T8UxXpCC4dba9z1Y4LTYTkJbd99mkH8CwRieNrtE8kFzT9CiSQqT6QFCTRCbaiXhhkW28KNTtB4D8eV6hLp4njC",
  "key20": "t8NcU6uuHpoQBVxyiHxrn6KtKuXzEq4SSp3BkFgZ1kZwMGSVvxdfhTeh6zd9LUMvzTAFES8fedxqjP6PPpW2WJc",
  "key21": "66SgXBTPYzvJwZoJ7p3LuEtYUv17VqbpFP1fGVYoizaWcAgii5bomxc35k9DYQbVbUdPSA1VdcPXvJKdh17cp8BX",
  "key22": "2Qo1eN2HEtg323rQ6VCSo36dmrMv5bjKUkmyfEgYN7DNHWVYTEz17kaac99DKkJ1ZRoQmDnbV8MRE2XYPteh4Rsh",
  "key23": "2NsPbwvpMG8cxbZ5Haui1mhru89LhszkAVN7XDZkeZ32nbbbsZL4F9wp7yk57MzH15tSEGH42bZWwJgjmkgtT86H",
  "key24": "4YLgTygff8kGAnvN3TGySbqEfKVapT5TnQvPbaBP5UMLFNyJLK6cVd9A6zUEaAw2qRkjLSzGcVx4G9wUZbS2g5hQ",
  "key25": "4sm3cmcmbUaMs2sypWmjyi25xiiDRj6zYhY9pAmG2K9mUHwbMnanSspiQdk9EfhEgJUS5uEohbkEgSKpW8gAVvVW",
  "key26": "2ox7Pdkqx5ncekVt6S3zfX5at3VWREiktnFLoaCLPGP6Gkdkdfhtniz1LStRvxwpQpqLwugeSYc9UB1rwBE8EL6U",
  "key27": "kLMVdvZaMgSaGU15WbEELZtmEfFSCCa3Qn4HAKT59pp7XArHxsUggCjyXXcx6FEpdLUPEmWAJ9DAcoabGvWvsLx",
  "key28": "3ttRPUrnpnUQhWusbZaxdmXQwn9VkBTSzCBR3Rz4oYWCRMrZwp7sU1gEmAMdUYJ6gUNqVaJEdSViqmnUbetGLPby",
  "key29": "37oXz4kcZ8Y5xMzjRcFbxfeXcYp874DBi1mwRGwxrW1tH84kozRwG1iB3aNvuutK1HbUoR7RXbSFZgrYtVVFFZny"
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
