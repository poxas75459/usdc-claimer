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
    "fndwY5kk6vnDEyhQAceTJswNJAgmkWtMyW2DDcScLXQ4ofzLxoskWnUxLnGurg5fxw5ai64SszuF6sQBoN5jHSu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JHDDT89GSRNHXRiZa2eYmfVmyGMTNT9sgRSBjZxAEg67o4d8Dpxmx7Pr4niA9eMo6S5etQWib1Sn6SDP3vKiyMr",
  "key1": "2ky7FL3L9AnGN2UWcewQh5ArfVRgygV2Y8XjnCjQvWkT5gGxNPuFRDEjt4VwwS7FHyrLq7iDEDKy2zB9ymFWv7jU",
  "key2": "3AFFkdkSwYAJBwcwWAdDv4nNpYKcGSi5xrga3Uv9kMpmeHG6Peix66LFWtjcHGXk2zUHbyeSVSX2MksVb1Ur9MuJ",
  "key3": "5wkGCQE3Qktw93GcdXNdvsc48DLkRDKUxz59DxfzRSw5SXYaMtAuQGCFzkgHzUinadiU6bNP7pgb3xvV9YgrkWkT",
  "key4": "5LHwybwWVJfT6WFWExT9BcwrPREaiBwYZdVVvLwxmE9ucyHpEYcgDaZbmvwF5m8orALRWM2fQNSpTNqnS714ktQj",
  "key5": "5Q4oZewkT4dHUdAEnDdVjgLFMrK9n374GtyBT41YFzyHzs1g2CuamvEAUQsMcMpUuUa4UcCBgCqfHu7bFefKoFV8",
  "key6": "3bkmYh3XeJ44qkziN9WXPN4jisBd9SJBVuW2sVBgfcSwMvVJbw6x2KPD3nDC67t8rxVd1sH6qCTm5vUuTc2vc5BB",
  "key7": "2j1RTYG6tx6VjCzaFEh8FHqh2rbcbidmZ8KhPR5uWNefKb8UqnTnojmhDrXKZ1dcc9xpAXy8aaNKxVafPEC79wKK",
  "key8": "2YmzTEwF59NQt1pK39n8md6g7tANT3N14xG17GstCRpGsu3NVtB5XFBvDqUdYyd8wTwk76v49iexu6BNVd7FVAJs",
  "key9": "2aEd2F36CUxdhqkNNuMWyyMTrNtn5M8whffkfEbYY6Bkt3bDDBdrqh5yjTm3UzMcvV6XTarxYLM2Cqwg4ta5eiR6",
  "key10": "3AoxZsagZ7kB8WGBtWWySVRdXqSm72cea9YKktbqKhxsqDaj9QRH1vBMssTEnSvF6WmocFexWa2bYtTGLp6GgBfW",
  "key11": "z3mrX15XXuE1mmgYmTjZ7JQNpHSV9LNv5ds8Tvt2Dkqv2A6NhuHAq2bMDNkCijB8tbgYejuz6PRohzVhCs9zb1J",
  "key12": "2qGkspy87y88XnVaHUZ8LW7s8Gx8wMEHHQL6KPGgC4pv5n8AKZbLBgvJBaWi53j2G36QXYVis59vqw4L28e1h2Xk",
  "key13": "4HuHMnHiVSR4mdmdykzFaGE2JfBUashjAExL2NJj8qiiRbsdNncAVHWmgHne9Cztu4ucM5GLfYLtEBLRtTPD9ADX",
  "key14": "25XfZVcNmJF9xFGbv213XqexEERDED3wEguKgdQgqVx35JYrYARZotKx9dMArpPk5cF6RNsRoohk1tLn7wSQmJhp",
  "key15": "64fvJtVvj62MDPnRwsahsAb3DPrjCnn9k75vNMqi3Zrw2qvWn8Xbvsfh9f42U5rTDXwgk7sQ86zKMUaxSzm6RWy",
  "key16": "3pdUaYJeryMQgLsymkHMMe5GUtiatrpMFUhyscBazPNRJxxW1GBhLdHNFvaQb4XeqYDXaYv8RsMg5jZDQmy9qjdx",
  "key17": "4ddw2wUCSkdsnCsqKhqMf7JXB7tQvY3wWjFsuFaUuwp3Wt3Fe4AuE9sH5BAASQXKStfX85gkgTmH4cb22oiwQzDt",
  "key18": "3d725zBPtenUKzkrGvG9zpDE15SpfevS6EkqSFHZ8ZAp82rUa9awjSf35oGkLSt7tqqazMu7Ufcp1ZtTgsPvUD38",
  "key19": "27NYvwMZJ4tLwex8EWa2JobkPfGUzj4Y5V1jB6qMGuWDDqAuCCXdjwR6ffb76Sb33MMGgdEfHkwiR5ZPy8X9SXgz",
  "key20": "5o94Lo4qC8mZjKFFqakiEbuHvHvNXchaY2t5aiPdu4qxzkEMWA6R9LAt9EC2EE41Qr6CBeFB9SDa8sLt5FSCJUxX",
  "key21": "39xFr48bSpQMS9qu4FjUhGh2n4Ni9F8u6JsbPT4cZYhUBeZZS6yhmtcDUFzJ9NA46NELbWFWZsMqkU5eVNgrVFyv",
  "key22": "4vKiUQxWfQLE7zbhkC3zC3wQ2JUzvxLmhpkCrLhT5r7Z826tRYEaFedqsiag2hCyP3jNLV1xgbnA1wdaT1x5r828",
  "key23": "5R3cPpiaoieSuhDadRigfMSqstBWsmRH4cUEEZXjYb5N56yVm5NRvxK15wQngm4Nm3uvzuNmxa4QqkT1vXdVqgES",
  "key24": "36zaUYzUXefHaXbwsVzu9jDNR6gYFcCW8ZqjhMnB5VmnQLNncQ2dZJRnBwXuazrzvmF2iUAi6df2AiCww5hzZBaF",
  "key25": "31cBfCb19aR9rdg1fVvHhdRpo23zW1F6bNyTY8D7RquvxjKswBXAC9BKBjpgRRWXgN7PrpAn8DQ9qxSMY4HK6GjV",
  "key26": "zVCieuVgUMioG2aDSp5EjnXYLQWyCv1UpysEKAcvVe2fAA74GnsDQSyKF4XSueiP1j7WWrY1ejWW9onStvsN4Cq",
  "key27": "4cAhpp32nFR7nmWokpvqJtbNi9UEiDgDxFUDCWwvKDMXpsGUAmhEn6okDxCSCsrpwzLjg8BvTASfxL2Ym3XjSBra",
  "key28": "6qyETPnEa9ugu5hGdhABjrz4DMQBkxrH3n1k1j6tmw2EzNciQeHu8o2FVLVTFwut8TXbZU1GWHXyTQdHGz1Kmm9",
  "key29": "RAroEkbsi24ganyNGWeEaexw1vh4eCVs82fMiARwgGKqxm23kaeqD5yGkFC4jefZ54jeNPbQCBiF3g1j2kM4sML",
  "key30": "4ofAXyWCyeA1uJ5EeUDNFMZ8fpnQNsGSqj7qyb1xtrwZdUYHkthXBoxL3zzCNxyogKp2sReoowsf8wPTgz5dMFFb"
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
