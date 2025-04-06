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
    "KxcKnPCRdDZXtzd1ynR39QP9rnvBN7Wri91VHBT3dkey9U4jYuUVnCWPWDgWjTFu54r5JERWFgfm3H7R57TeQ6Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pTeo8oaXtfRDVFxo65z77s9WBkBNXyh7Xx8ZoQAxzXGuXRJkiNW2UGe8KR3Tq4Gp9dYNzdyGdTmVkC1yYMiEVkW",
  "key1": "6PjsU7S7TXW2FUA3qs7XuiohBzum9QDj79qLrNhYrK4SSxvWhEicatQVC4Frev8csnNjx1ZTUVjiUMaRjHYahn3",
  "key2": "jDcnqW7Veq66ZUJiRJ37pCiwaKV18Qf131VmR95fbPsp4co2KWV7u2wyUjxxRiCFuQ2iaBTpvUXwrAYnXxG1rxj",
  "key3": "2qiNbDMGZXiFnZdjBQoE7ZJVbj6kaNiFFU838xyYHUz1EZhDvdpJsx1XAg8njd8AWtFLPSdjXuhfggPRxofYVdWN",
  "key4": "4jCeNK2vTKeq1LszNnpK9ZqD67doB4jTYRXfSPZqm8QN1TpjZbyFRGz8r9UEZTnwEn2hT2gnqJwaejk9EibSyJ1c",
  "key5": "5n5faKjQvM2jVEv7Q5mqrTW4vZGy4XCcJNmGAXEQ1aSezoeHZvznEd22DLJ5u14ty7Jq8AJsJzjZWq58GWk66hm2",
  "key6": "bUmL17sJ4jnA8qq7RhRPJSwptdXAMHoT6QKLBpu6FS7AwSvpuWbA79VtaDZ4GgFzxCd6RrSj5TnApvRSREpyHxf",
  "key7": "2fGKoWP5v3yx4Bd6zfvzKa1word9Jj9mQesr7rMB9NVbLwwr1q9zn5L7DGgqwn2YGXCMrtbgiEgGr1Efbk8P8TvH",
  "key8": "2wKW52Lj2uqLNQMfQpf6dpH2cAry8Zm62mMLNBAwZWTaA4ikXVhikCq7WEDkREEfDE7nsCg9bFu1qoaYgB1rDv4m",
  "key9": "2px9AC8XDmRFFGqsVMjVdSt2jf5ubyPd5Mq1G7yGGXjXS2T5WrQ5pkbPNVFf4scTzC6u1Ts1WXd4UnybPAJybz22",
  "key10": "R8hGGfN5JcBxooo5qR7oesKJ5EFeLS56hq9M5kEE4b35p5Jm1rjziMuK61Xq1LjZufzKsKxTUcBPRUuPdTQZHYD",
  "key11": "GxZsYbaAfE2i6NNy7EHRQ1mGy5MougyqGq3iJj6KLeUM1SpKBBJoGVdoTerLtmWgiCRsUGgFkUe4Bmj7JDeyeLD",
  "key12": "5QPYc4GQrNrjtzJMw2LrqKBwcHKqS1xzFVqqoh4RWFz6gD4yh4MKiXEvLNHdWTySDEQ7NpPhXemvzVd2kwyK4eJo",
  "key13": "56wQrySfVE9PVPDmQp4kLcZcNHiDXkWDp4MR3zup3cPGM6evCdArRdLFWiDeP1V5mrJYXSFTUJh258G4PjAUaYs2",
  "key14": "4zADc5DriXaYj2cGGixTAAZG29F6mtAEtxjkYqs2jYY82jT36rUXj5WB9nJ24KLEzyYmBiLoHpgjR4RAACiW5p5t",
  "key15": "5tZcZaqGxDc9rdMcahWCsr8g38Lx2qmg27UkzBupJwtj7tqmP6k4BuBzp2DDY6kK75FzF3cR1iiFepBR5w1Zzobv",
  "key16": "3oE6jUmWsaFmmFbU92mjpJSvYMD5Hk7DxReAYYLGFcwohEJLZ2yDqWYQzF6nEpN9X5ngtXSS2hbkJzzWJpyuyedh",
  "key17": "2W4UK6AhtkaoazNWnkSRYmFEBHfUoa7rxrxaTC8ZMEpJvLb9h8K1mZXPPM8AUrF7RQuFW9UkBT5qon2g2c8GVHPz",
  "key18": "4LTtx3cDXWq3jnRVytnfGL8fv2cWsozAE5PVqJ3unBFvEF781piBzknDsEdT2ZVju8jYG8VxyAxWbHod2G8N5PGK",
  "key19": "5V6SnCrLH4omEmqWWtxgNdoFeKHePLXV9JU9aigoGBm4CGhTiDFwYhJ4DXGgEzjDw3WAHUo5tLr1K7qS3sDaNJvZ",
  "key20": "4Kv66XN6HqCmMMm9ZC1t84VzTzjnUtcXZAQY1svvvXdFnTQEmwSjhcmmPapFwZzdyi5SmrLpCPeij5QGrxRPznxW",
  "key21": "2EUc5U6XthFYmoMsp193nU1nzCTWNADEgTQqHy8mvu6VRrTYRFW6MFcP33wzbfMBNY5Qsq3DAfdy5Xy2qU7fad4j",
  "key22": "3DQsXbH7tPwmByH9yu7sbNYRZLdntm8oa9DqN6xe79vFejv76wmHhm8syChtekV6ybrpMiVoHScsRn58NymHBK1B",
  "key23": "3nWFNQFaMyYa3Xxmfy7oa7LVNv2ftsPdyBf512pRdESghmXpfeFiesdywDFqoNiyEt7ugLV69LnMW8gRJQq4ua52",
  "key24": "636NUZQtBzPiDJxAmbtkcY1XNbHYe4msAT4mjL6eKSHoGCi77EpCjYzUA4NVtr4H42ZaMMSV6JcyGinQeGtJhXUx",
  "key25": "5VqzTTc3NPqvHLyjynCbyRCfdD7cay7u8daAwHaoVnzCmfWyaA3PqtXPYPfqPjMTwHKXt4WU933RVuGw6mngwKnC",
  "key26": "324yg6MYyY1MHTBurhUJDxA5G8c5jqr1fsRnFcAeGtW9CiLHibapgziHMTGyeHDksKsypBG51cyPmeQdMmqc6sf"
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
