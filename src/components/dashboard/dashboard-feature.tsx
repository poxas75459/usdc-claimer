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
    "4VbQcXVw3xCexyaYwp8rhLkT19usdoaGnxKP5kNo3frjvseHG61QXwX6vN6wRZZ2wpdJYrLZJ8s66AN8wTUSDjs6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44PbaFGqHmKTYafTcTkDo78FSB3DyosqToMczxBYUjKwwKwf2vxuDV15rdz1BFDAmE6dW9NdN3TgWZdg9XaLX4Qi",
  "key1": "35qm48JqT8Bg3TqD8k5FVyioBtw6ZTLpGbVsKJWPsQDDigtqJQin72Q8YCKk76KV8hQfsHwCgUBG2nMtrcrpTtLT",
  "key2": "2pUFvEuERPnfE2su1rrEng9VGG3xNKrTHnfNiuGXy777mJHgTkP4MsYaHS1MJbuJSeTdNXG33vsVXe33jcNNeQv2",
  "key3": "x2EJYvGymwDkQdG5jBi4xxBSQcP9v5kvk53Rwv8Tt5PqtohNFbwNkvNVhb6NaiF6P7b9D7GjFrmT4ZuvjGFoznb",
  "key4": "4DfPwFbLmWuzscgY7xPLuUVxmCcr3rPmjUKtsBfC8U7pBXKTph7r4t8ChDWcrgSZ6JSNa3aatvwjCADdPRFqJouh",
  "key5": "4HWLzSUzfVQdJSywXeszEhYwxEZMeJJ1nVWa7CNqJXWuc1YP9LugrcCKDt7pW2bkbxftwRCPfPo2i6xqHXeeS8e8",
  "key6": "kPXCN1AoSEZwkgjpHbgqx7z1tqzneqVYbZofbnbN5zH2vP7u2vL2b3s2m6DV3isxeme5rvj6FWHr1bK6JDWJ8tT",
  "key7": "qTQfStXJk5fsghv3NZtW8b5TMTsWpbHP259LCwEDU1CSAMEUW3FKaFWtn1tMxcHn9W4ytKwTTaiGvnKJM6mUf34",
  "key8": "UMvm3TKYiAzpBmRLvWfFJgySkexPXqMkVAoe1FEmiy7YCwfVz59KmY9zCJFZFoApcB4xfmt4Bp2a3gWUEvSBYQ4",
  "key9": "4gDssaTAiDm4bAjquVxniJ17ZcQWCq2D2Z28udRASVL78PFcLhNHKyxEYrL7gEHPRqbo7kVu5SZenNa2cMnwwcE4",
  "key10": "39Sc354DngwYcjeAAaRb3177fcx7xKXztqMxPTJ4nF6zyjsZj9bqjaAr9bwS9Dw1Av16AGe3RJQ3cUTZenqVcPnc",
  "key11": "2wb7qieQtUyvCMTFXHiJqbTmbedPSPbWV2KZ1eXpKQyagyoQN3r6fcMAJJ3DNfJP79AYuGyDuKLgWGzX5HUSn3mD",
  "key12": "4uwp3tLauqqKGcEJA341J7kTZYeXFJNENdnbR1toKiGeJ3MaWr88zZ21eiSdPdTAAVPZWXcNEg1X2bPmnBLvcN1F",
  "key13": "zgUGaBbyyHojde8rv9toWSWhTntCF9mwhTzydrPaaoC1Zppcr5i838HLBCqMfHX1cdnmkmUTdUExemzwMPCk4X4",
  "key14": "61b3HenetNi9oVJWbQAECR4mVL9SLS9xpGszwK181HceQmvBq3FwPATBzkwner2kzV4du4SeAV6Ktusa2PKB4FjM",
  "key15": "4zpBSxrg7sp7C4qvDq8tKF5NmuKns4a4VcVd4HaFPyMVBXmGWFewruFtVPgm4bmz1Hct8XMwyirq2q3Wcw35NFNj",
  "key16": "evQny62bJu1vCwvk5DWpYPtayQ257NKZZ1xZsCVASj7MvKrK9CtgP6iYMfCpQwRc8ywtJQCo3snaKSBXMbtHM7R",
  "key17": "5gbRhqZfVsRyj4D4pQHKW8tJ5GMYkxvHYpJYV23PHDF2ZVimivkP6UJVBGagDvPAoTkvc2fxpuss9Pd5haw2H2wz",
  "key18": "56rVfj6Pq3h7hbFRNke4LmwBsphkpJL88fuJhzUiv27roco6BtKnscCsyt6iFn6z9d5zbQceopena5dQKtBNogw1",
  "key19": "4XNkdtov1RqPXM4QTpYSWjMjaaLTFLqjXr8sGekzhpiZQkGtxEqtSvhMmyBW6tdkDq6xBJ7noRHiTPV1Mqfu736H",
  "key20": "5EXFRV6xuWU6V5Cz1qyULm61aLgXHrqHJyKspcNZpDjpPMGYLJ1Ad9Er6wEex7BvuMxgLkb3doZ7vYC92vqaKaCu",
  "key21": "4cRhcv4gg9KXS4oZWHFJUJfQbQmrMxsiPaV5jtcyxCNdtqd2HLBRYn1EddXHoatLy2P2A6ui7Wf5eyPWbNqXBh8j",
  "key22": "2G4RQxwuXqQwoQUt29PyHzmstKKJDGMiwg8TCmzuesctbxrFgViTNCvXyjxrik5RrfQD5qqyFXbxugei2jTc2Xk3",
  "key23": "4ztuvcafxubDU7772SDQ8MH2yj9uMoBvu2fkXZQxJ8MrPzfisXesabNeX7kwXDA8iZaCsD15E1D6hjg2n9Kh7fdn",
  "key24": "2veAaCz69HcZpw8x2tq62cLjKtt17pfeaYAiuE79CNFanKwXbU8CA4AT8go6NJ2ESjCz23FWisnPoQyDmMPeGuJ4",
  "key25": "2VUdsDPX8KQ7nYutvV4iYzAdd67YZ7CajLHy6ZoH2JDPWkbYzFnYzoQLniart9fye9g967GpiicTxFQwFNsuMYcA",
  "key26": "uGMa1ViaMRrPSoQJFKNCiAnjqNGnJXkUKUZeQPYvJSTFy6adoSPFiNH2Xfn75u9RDaLmhwTPfhCTyN71wcK3uPx",
  "key27": "5SAp1NiXT4LRVP6GXeCGtAfmZiMymRXXTwwDZP16tsDu2ntawAm8YHt3WYznJQGuKTNHSSueH9nD9P3nnX54fehA",
  "key28": "3aFs2amqhZxFEkYWVBNY2TNJsi2o8r5jFnFAqtcqbWPhyEFQsg6Ld6ueAzZtpcAbh6WxGgVGNKhEQYwsDcB9iZ3b"
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
