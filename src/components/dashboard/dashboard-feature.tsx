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
    "2SrWqgw4VAX9pmpr29ohpxywcrk7FuVYAx64eMTM1NkwQ8XG79nFV6pVYkGVKiejk44Ymsi5kmynvRFKJeP9RFMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PXBKm88JQq43uiRzf3TQRuxnyywsPrto7VwueZUdjG9gaBNtUwGs9uYWpe9EV9AMhrVowh2jL6Abf1NqK54eEUQ",
  "key1": "cXJhtJjGhSiHzz63m6XhHSNBKVtijsBuh8wcxBR69Lg3KLe71yFM4j4vbE94K5pqmXS8Rt1Mm8fyRUo3nNq3K6N",
  "key2": "5cjEidpZiywvoRDYR2yj6Bj7JJGHWJHqSfkgHEZJxN4Kmq1Zanf7S6oKvR4nDXkSRKQKUPDum7thpJiKnK1LL9n9",
  "key3": "28nkzdynZEifF4BLYDfq9z7UzWFmXM4qf9VyW4gL3NebzyYmwmk5XvFbJQnwgkLxmwqX9xzJLHnPBou2LsTSANXf",
  "key4": "3JvNmggfmgyVsQvWLzRehJ9dDFszaP9kvEmjzLxy643Veny3Jtp14DgcEQ7bWMrXLV9TStXNvK8W2QZfrD7xVbDK",
  "key5": "nP1G1jUnjdtd296eZEBeKYZmfXPCU74eCXAj33ZD1GypJLpwssq5YpYzBT8Cibsq7uBGG7zorXJ48d4Lax9mwYB",
  "key6": "2GGCiDCZ9FySv2zYWsw9RUEVEtYu1f8MMZ4jrKAnHWf7HUJqt3S5NUz6QeXEPPN6ostMWQjJasYqCvPohM1cP9j6",
  "key7": "QS7bB5V5pr79sf2YAaVoXm2sjwvTVT4axjU7AeX2iitg1mDGGQtnPHFQKcbJ7YcTMaiEFGrfTNPKidJ58Yr3hUX",
  "key8": "2u3qUDcv1wWzvR88P1EsKn7sgYzrDsXrebmx77iqGm1SJXQ6dVAALSttuqGamsZN2uMcFBf2XZtndRNchcEZiPrr",
  "key9": "5jnTj6fTz26F59WC3CQZnWMRPfUxQGsr1TrN3FPFqtytHUXPXGQf2DDakJZqHWmsGCW6GAyMmVjYn8zGVwhFNMpD",
  "key10": "tLuvczE8e4ca1pWWowogY3PZ1jqnyokQ1KP9bSZVYjt4LwJcQ2DcjMyY2GD6L9d5RTqxZuobbdcphamSBtcS3eg",
  "key11": "4ougtc3Kf23QcKdeExSPD13YmK8HFTxxZBGbQJc6FVofsWZQxLafNhxRinqSbwBVVLDdj5tgiSdWTDMQXXYTGPUc",
  "key12": "3mCQ9HHYhRqzvvt4WmVzLqpiL6bRChC9UP526haSgeF9fGyUGnkVsFtajpQ6k7NUrK5CZuTJKhYznam23xScnDNc",
  "key13": "5QaLTWAhRAe4bedTVHPzB4c7DFAbwzYDU6xbnt7vsLeD3xswA1xptZNRxCU4jiH392n6983ScK9YFasRejaXuzKq",
  "key14": "3TDs6WJcQpnNwxSsGxBXAi2Py9s7EEt5dYaQ1NVLK3SLHqu2bSZPbwLhW3Yd9QnT87QvTA2T2uV4N2KBUU61izR1",
  "key15": "UupGvGc2odAsnZ1HDwPQtSjRnJPrYMzeZJDWrC3XzQSnmuLquy5r3WtJ5rxRD7hzzTvSAZa7CxarVBsqq3c7EEB",
  "key16": "Msz7auXtPrUDSmj2CBaftiJVd6Rq2icNkZi97rhb4dU5gEVWCfmDa675EZyeNMnzwbfnC7JzFwDQQi5Err561XJ",
  "key17": "2s8wf9A2WpA1v9vK88roTth7vthsYuemxeV1Df5JV4w2vgEZsf4U2gL2Bn8bvXCaCLT9GkwrF1iN39Vn8jkTvJvd",
  "key18": "3vVS2tLJi97xBPGwbP5Zar25WMUcghyHRC8Rechz81qmJCJpyDg1nnKMXEJZSWXbpYc9hc87vpQopwGPmqA7Y8Zi",
  "key19": "uQMeapAftomgKfKCgDmiQuXbk4m1H1vrbTVTCFgoGdSTVQFenzRSfQrgrvzgcARHZeFmCwoKYtXGXkKCex5Lrwf",
  "key20": "3h4vwyvYEMhUq1CZDT1nv7sgQWpSzB7Tec4EwDkW2VFTM3bNcmmVyhrashbYqXGaLGBjQg4vYpT1wewMEcNdUwAP",
  "key21": "Y2qmMjJmWBbcVDnMNXQbgYSsRddiSv2Tw3QtX8EkbHS68xHYeN5y4NeSrw2bx5kBUV2srEctdZCCPize298vfYi",
  "key22": "4yt5s83onF126VdmzgiU4NjYMoPqAuNAPYUmsvfrQ6YZNQdCSv1twBb1RkdoCRAyfWG5edJrdiEVak1GfvAcYQ1X",
  "key23": "64AVRSPXSqWArQ5dGBgpZ9Raa6YgHhHGscVF9kMSVB4womeNqKFidccUoduPqxV8yVsNr5Tiybd4j7Q1ZTdQ6uzp",
  "key24": "4zUkbbs644e6ekJ6KNbqg5E2JCC5y4DUwR2azEHEzAyZaiwM2ngpNHACQmuzCvy3s5RWPo7iqrfgRA4zBZzP8Gq9",
  "key25": "5xjAxBR3fctiouqyG3g2PCjETqTV1R546nrBy5pWxGPzHTY17pqp8SttH2BW17yn8RLR66NUXzpn6Jxq82nEFf2L",
  "key26": "51DuRKNhrUcMccPBQRz9XQA9KyuhPEQ4nZg2L6z5eRffEzmE8T2MwZSYiZAnbEUuCmxjA4a4sWBcm5wvAoqovJi4",
  "key27": "3W56sQxRnMMkBoZ4JvWZZXGxaY5GFYkFpvKbexrt6ezLJPH398ip3AzuHcpWeJvdgJoSEZReEdG8BgL6SYeAaCvm",
  "key28": "3cUpB1Ju7n5zf6XWmHddfqgZSG6gr7r65b1k3sdrQKYTeSQNYiFe2NCtbb8Tt8gR79bDRjxenDUc2qrzaXSiSRr4"
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
