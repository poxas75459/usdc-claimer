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
    "5GGVLfYFRFXTZ6qpESoaBVLs5CKtSLpJ5KkAfcnrhoHbQvNHE1XKDAnf7t1zuuMiqnWf4GGEg9RX5mpZfCSE62Lz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JrPxvrKM2oaMCjkMa6cJAZGa6VdJZHqcsfoZ1LXCyffgWLEwMdmPatvqLNN8uxgDqAjdvkBq9T6J6spYXvJx2T7",
  "key1": "4B7cwQ1iU28Bokq83v27jXFMbsBdv8MYzf9PZfEDkHmgxhL7EPWC7qLTwMKfYgKyViK1oajmxRJ55Us2NNwsewkR",
  "key2": "3XcDiZUc9AtjDHsinmmjQB92ukPaG6m9yMnWrGPDTW5QshwtYELmNvo7wx6rToLSC4JqGAEy2Nm3S6aV6VxGAPSG",
  "key3": "2aiokhVoydeeqiXeBRgbRzw8o8seiNCZJNweHwv4SHJQNSH7Aim5UYqBu7u4Hr6V5qaeheAkirbXVY5diKqZFBYh",
  "key4": "4uyuFSDdTi3Aw97QoFwTKCHbUjEZ14V1gEqSVdbUrGZiPLDfDwRmbeKBFR8DSxDN46daAVj2YuxhW1USJJEAdALN",
  "key5": "whexn5nwn9PEG9XuFi4eFtUvskNnR1ZwfqBL2uJRAwr85GDWCc4cW6C3SdDavRbyiLtCkBdTP1x9VSdtnKjKXpG",
  "key6": "exskZzr8VJgqPci2FdQjYn8rXbUtCK363XiZ3LvgxGxFMcnhTsKDw9wt3yApxH7rZHf5TeiXwbwz9zvCDJgfgXr",
  "key7": "4ZHzkxnjMc96WyZePBzniCgnrkHxLFW3Y9r9PrQ1LEd827WMnG9xer4atkiAxkMZNvRvqLfMDBWKRANJVMhT1FTp",
  "key8": "3KNFpsr8akhFnrV9v4PBLArESFVYe7iqitPGnh7FNJaBVJ1rWFfZ5F8HdzDbweHXq7bsf1maJsUaumoCiRVwLX4d",
  "key9": "4fEGG5GcQ58vpvFj9NZ345zb76wFmHoRAMofmikmN8FeJiWym9PcyUJwJjvg194h1UgPpiGUTkHmwUDZ6hB7Uzwe",
  "key10": "YNnoFfPFQ7w85mK5B3qwm46gFz21HadVMtFbP8uXseyAmjM1HvYdx2mLmVRJjmuvyWLKRMEA8QrmHvgk4EU6W9T",
  "key11": "Njck4QqqL91GkZi8wgisCpujTda7XiuS8oiAQGdNvMX3sGCHGxJ55GhvddLL3jNhq7HKHRqeS9mrrDfFFdkb7KN",
  "key12": "3tyxiBcVmoZjSkjYEevkfwtuN7AjazfPkiX1egF84u7nYpsDFr1fh1yvwZZBRGTHL5o7T295JT7hX46KkVbZ1eEC",
  "key13": "YftgPv18rReRpAyktuSqBbXPkVVLCEcS1dqsfVg2XbcNkysGgAdyy3tnR8gdPHkw3aNMaKg2PqobDG4BD6d8CCV",
  "key14": "4mYH2Noi9heo4Hy8MqbYdaSPFhwzSkZDLR8i2pmuoUEihvgwQtQP6HFUksgHgkKhUpdUTDqBtBMfWvk85mLc4mPq",
  "key15": "3cn8FDT5wj7ajnUBfPLHiB7VYF9e7j2KumGfVsrXSGL9HpRkh1PingoxdgM53nr8td51c4TbYRqzGjCK4Egz8sMZ",
  "key16": "47RpSMALr44y2i18zs44mSoNpm2Layu3j6aLf5SeCoHgQeiSRmxBu3XTuBVSci6JJ4W3gnsicHV6BU3Ey3AJRDgn",
  "key17": "5wLM2kbUZbKKKN93hV6r4mb3sjywqoKDoyJZpPYLaESQvcMn3PnFDcw3K8xnoH5tB5K1dyFVaScvYr6h58Qojcom",
  "key18": "osCkKjuDW4z9apr5bzXsSVBV2x4sZwZiAQeskJU3t71xEXAmA61pU7p8MbY6LwLS7G9tCrewcjs7n5Qn4mi7AAV",
  "key19": "2BqxR2AtupdP6QJZttPuSribGzafGCVrCXJwyGEGNcQFos9QSkXXjr25xDpjg4b7kWDQsCwDKKKZUbaK173qef9",
  "key20": "4gvNt7JpjQ4vXJLv2KokTgXzk9emZBm4L1jGCy5xL1sha4ZHmnYageeR2PQc5gZiwTkkUfXMMYdi6i4svmKZaH1f",
  "key21": "58sJXt54FwTsKtgysCpr13N6EQUX8hTPnkrCbtNNF5onY35bgXVxES5hUb7dKDA1SirSE5ZhAm1c5SahJRXqS2Gi",
  "key22": "3WeQ9okHiZiU8yi4LtRSyEZNQgBHBGxvycwrWcutYEWenbLMdXPP54juE7UxmLBR5Kty1oZiBMukWQPDd4PZT24j",
  "key23": "5uqS9yYRNZVM6ymicnxTRxNksfFe6HC6LgdyGXfHwbEq5KWLBz8p4QQhYHtDEPyzfXwysUXKoyzR4BBg54JyzuMV",
  "key24": "rRMZwkQdzvVDwtN25nLzQzQtFr6XXpCQCe148bN3cNxr6x4cABzkPq4VjLLBsmYoHuTw5RrWZ8iXUqwBz7kxP7W",
  "key25": "5hZY9GXTrp5pok53w4h3EHcgAW3nrsVKd7Jerh546Tc1gwKDTtQEv7NMJ7DWasuB5tbugmYdhSd3Wto4P5nB3tfZ",
  "key26": "3ygv4MLAmte2z43hyh6GT3qkoDY6QkjS5Hx6oBgr58qwZcFap3niy1Y5eaVmtB1P6oi2Tc5dethhG2rSLMz2X29q",
  "key27": "62vHDZMczDzRdiKrX1H37ZratVKKLus62KDkXNoySzwV4WY13VKYKGbBMYdVcf2mkbdjUtyH1q2VQcWFXV3RcYWe"
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
