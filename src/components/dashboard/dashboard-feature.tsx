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
    "2LXxThy3PSNDeJyChZ1T3BZ9LXMfEjNtkjRXFmbtuScbfwSLzVeek1m4sRauUHc3FWG1H5xqnvxzCWUsUuK21XCe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kCmFTTg1uhDavELpLRc2ywETdrPLu3jR4L75JcJfCQp9HpBVKi1RRBc3hMA72ibTuDeaoyfcHEMYJtKPVTGZbAq",
  "key1": "5tuV6S7Z696oLCzUTNPCAdJnuCwrJWJwb5M6JLyXkPmGzXmuhdh8MAu3Ta2HTBrG34ynVYFukK2f3ccesrc2TXVM",
  "key2": "5TYwiSxQB3PNe3P6BRCVPW4uvYNXJ4GsknPr5t9gY7P4614GLWg9f3XCAf3Wzt74Lhq2LnkmXqVxCwVjkhKdVwfz",
  "key3": "4CQZ9z2hmBzwPaWiazKngwGEQ64f4hcUb1427bKxxxmvxfz1nHoHWyBrJbx8gPb6pf11mD8qnsY9ivrBecyXsJJd",
  "key4": "2DtjfLNLz3ozitMtKmYtRg23KAYq59UqE6UhCTzVTo8w17e6MRNnqcPnEFffCopm843okohL5APrtFXN15CukcPq",
  "key5": "63UCsuVXwDQsxmwRKWPUxRRofXPUnd9AoKGbCcYNKZvBMmuEBYbdkBZ5tLbu4z6uLfYane1bkc2mWqfmN4XpJJdn",
  "key6": "5V7BVDxsaMhZZX9TZZUrLajA5orrW4LTpesPB3ReySGsPLTg56zVKHzXvT3i6KWUJiLYFrjz7eC5aDAp2x5iNarR",
  "key7": "4UUpjLLn9zMVDmVByxwdsQvGazZRS7cgtCv3AKzwTAMb7wCvvnHTRDPpKcKHkz7Cj6EQRDxhoWZDEMjAcGuwz43W",
  "key8": "5XcyeSJ2AtNNBegew9ULpvtRnEfeqo7xD47nfGAawswjRD5w7ap7kUiyWVDmpQYYofQeg1D4TL1gwrcff4K1ygxp",
  "key9": "52o5nWFNeHarNGvSBa8EsyiqUhHGpidkFpComXNkPWGD8QdTpdBnrnWZf6TioKaUv9cX8tKgXzUwjADaTjsk7qEF",
  "key10": "MQs3Da2b8zxLwqcp6pxJ9SE1rpRgyvCAoxp9ReRpMvQoZJpmiLVesfgY6rSoFfzxCUhJpTzFHpQtCeHAXbqLfbK",
  "key11": "3HmCut2EUw7genVHWDf7wujRy8dvzAgGPF4PRxKbVcV1q7YAvWUFbMCxMmeDir3vvT6v68kQRJt8Y4S8Gnx6LoWE",
  "key12": "2BpMKttKnXVktaVFNv28ewfjU73sfy3CSRS4hqeaceJQLsb2PnfPASRxhZ9UNXnhmZpJpxZv5i17tF9vC2p1NWMT",
  "key13": "3NL8zo1P7Fh8TfsVsMVkvhC1xAYD6TfzHmpnSNeQGSFm9rWMNoPzb5Yjaqnd55orc7QrzDeiiuwD2kAqPx6FSghA",
  "key14": "67Lf7ZKZyH5SACvuqRfp44KbnemPnrK5K1pVC3uwdKpMPS1bv7szFLzshSLQCKXBYVWE69VkahfRrY3eauxePSR",
  "key15": "C74QYbsGY4jEy4wBbVcfuHWmowZwZJAxEKFg5xydNoy7L4gih5MMfrdq7uymDo3ZQnG7UHNKqhZxZU3NoyVwqrZ",
  "key16": "4VL2G6tksqQYranahX2UfvsQqyzshw5GhJzGuhLurG7S1gwHr36jLXnesJie92Udi5e2ozs1CukY8HkrCsR8i6WH",
  "key17": "RwcGqAsz1AjuKrRUy2f6dYytJr8pB95WCd46zi3dAb1pJCqyUUcjhx1gpm63FbV4oXo27VcTy1Qs5tNwGFEceUH",
  "key18": "2nekbMdJNZCrfL9SczjMGkJh2zxhui35LJovubtoDkjJmkSD6xA1Lxuoe4wG7jDKkEGH4QJd2sHjY5TwLxE1ZB1k",
  "key19": "TgifnA2jNc3H7KYWwDBt7GDqFgEa5xKtwVdxrhjqMNfE9WqJUnRqiEXfyx9YSpTLPxq799T8byvpPYBpbAbJBQb",
  "key20": "4juxK9ojKuHRTuT6wsjd5dBFHTBJTww7e2g2CFsn85c3yFs6YPzwuYEW4QqRxyfw69LNKT2EYtTwNmbu5ppbyPrD",
  "key21": "4prP16qhTHzzTiAfyfwW5xiDqfm4cnM8HK1KXYWaLw6dvR9AeaNFWd7TgnJh9nnVGUTHhYFtQax2ptNcP2q6CEg3",
  "key22": "5mJ3HMbhU5kZSggEP2aZU4wCW9irUZ1AfdfUru8ZrDAGpvbayDRDgAN42cJ6sZPGL4NFgBYs3RPrdmFea5uFsVwm",
  "key23": "3vjTLW6pEomWTJGwwVJiTCg5cbeNJg3u7RtxapXS12Lc5NwDB2gko2dCGPpxEuwMEhAsjwJkeVfDLWCS3eHLkZ3T",
  "key24": "644tfuPeCTopRiQKyazUUk36fj2LYGfmCDB31D7z7LipLPmj37Cp9e9UZWwCG856TGtU6MYumyuJvX5D1oiSiPGo",
  "key25": "cBd4kpvT8t3EpZHyskiSwHDUagvPReJzfQvXxUvNWrSH9f545SuDsRkfvz6SCbv33aXFFtyDVjMsvb8V68gS4xf",
  "key26": "3PtpZGMfnxRadeH77W6rYSYJZji5EkMQKKXXViMR2p6tGPue35RPQ2uNmiDpf5opt3tT3mS73fdPYHJC8Nq4Yek5",
  "key27": "4wegacaowuN8bysdUJJXUmJdGoXDBMeYeuvdAbWjjfr5jmiJdjNJSZsCEY2zrM2JnXfKYHNZMbNMbdPwCJmTbB9A",
  "key28": "nscUaAsoTZT3jX9X7U5Syt5Q2nv1tu9mYwurYPmW4EDT82hLPGCfXv2EcDiV9nNa8n6MF4bEVsifYcBnp2bAzhf"
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
