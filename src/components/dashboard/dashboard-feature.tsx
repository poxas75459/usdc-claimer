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
    "5A5UoMhubp1mhoLSgt7LfE9LPXDnYTAqqyWogfCF8Nid7QyjDa4mZXFKCP7y3svN6Rpp3iPcoBpjM7BJXKCWzZrt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FFJhYWZLVtzFqg5Udra1VGhus7RmvqaPtJuBRDKCrDNmtk5Z2gbsfB6YMGF6iZS49sXDhGL36rWJvaxDwz4SZiw",
  "key1": "ThTdJLkXBzQzs3EZmy4Rf1217F3U6D6mQHiXjZLFicCVpatBGDLAu8fnDk62B4bK7rRt9eFJADyXSTNqA3NJTco",
  "key2": "4kmPLiaB8YdCEwoxULqZV5kCtmdq4AhK4H3tZKHXYFaVwrYkDVMSYSB2N6CSDtS1tw3J2PJVkWspXxTzJfVsjCDk",
  "key3": "TtHdXJrdpiy1rRoMHKGNnFD8BR4pTTJCt9umzCLCXNuBXgzbsDKJKqRtBoMAZNL4z4TqqKfq5BeLWmZp1XQZ47v",
  "key4": "m1yHwEKxMvKZpgHxWvCCgPnn6zHQhB3ijKFGdW2UPGjAEZT7Njis6u1Dc1iV9yE26toe2EbK9yLvLjnp87ZrTvm",
  "key5": "5sX8kVUrqUTd1BZEjqeyYUQxXwukzpmzQQmeJQng7nPh6g9TNQFqSc43kpt7bmEK2jQrduBqq9Zhv91D7PHJqbN4",
  "key6": "4LN6PgJjvsWv7VyEfEWGZGFPFiq45dVfzddLzedBaZ8c2qhr8w9W3M3F7PSRLxDSACwkmYHmGjav8cb1sWDia7hN",
  "key7": "5bLH8jf1rE8idZTbvSfGgJaE6sbCjFphGA7VuZ5r9pxHAWMX7BFHKFdvuvn3coBKNCQiT9YP8yMdmK2rSRwCG7WD",
  "key8": "2evZvLJCAhSstx6QnTBkDTvLPCvG85SFkHzBjP3fKSX6h3QoyZhVouS7bUixFBRDmghcRdXjT3XjNcbkb5WKBbK7",
  "key9": "31kWJXJZWAcgoh5MDqoAWDXJBT4sbbLuQFztDoAj2NJVUTFw1X2aET3tgfEJCHhXmu835eXeWHbamP3FuMciLDDV",
  "key10": "4GoqqFPoaqrXLZBinpeFnUVyz1Wf2LH4bbk7sdcEf3iXhnTU78wKXuGDPRer4E7iFDyjXUY1Ld6qjkpoNCjMudkc",
  "key11": "2FKqrx2VTKB1KNBoR9NvPt7D5Bz7Y6QjCPLqVZeuEheQvz41HZFgVv2nsCntuZZJ7ic6MQpvK8fWEZtJXBZXdnSW",
  "key12": "3Ac43fUcYMTssZuQUZCte5iPczqL1f1c6zaWbGEvayQ7v16ZipyKCbeeiHSdMSaSFcVSWVNyqVQ2q2yuaF6Kpvpz",
  "key13": "3mQv9qEycFvUUJ4ZkCsoeuoweRDQ9xFJDLRUSDoHVkRECPgVLiebPJaV4HVuZLAfFgzT3MuAPxaS3pu2ih6fNQ7E",
  "key14": "425LAAvxCnHuvvoVsCbfSv2B1DFVFvNUNoDgcYsfZ3DGvxAQExzFUCLUEDrZbP3fM5dCjAoeU1TDYmHeDVNbSQM5",
  "key15": "2z8CoTGT6Ht9fEHkEmXjPEfaDt8PP46mSXem59bHFXPLMcctwPx7rajmxGDCCgk61C7LRWZBtbKDLox3MNtvGuvZ",
  "key16": "2orDnaaNgxZsyVQh2vb3xvbM6yxoBpoQqRkZQNRTYJEtvvVz9m5CLCvDe2BgKsTCNqBBu3ApLE5LUGjMsGWFj25T",
  "key17": "414u7ShzMmC4KPFYcV1FNKx76APbqGRnhmRRtrgzBFLtDLpYHoEEsTPd3qwomXS2ANHXpuwiXnZKGcGjsj2Hzjbs",
  "key18": "5uvPW2J984uxVdEpGsSbrTXBAd81w66MyrNH1T2j69GBFf8NGMqwoR6g8mRAKbjY4G6ByeyLSvgc3j79cXG9EQwM",
  "key19": "4aATQc7QtqkPw3ceNg8R4vUJZoZwAa7WzU8kGb7E9dFLXHgUHuyisasxYK6XBhCnFkVvGk3QD2aFFz3jrUu5s511",
  "key20": "5XStdrJxVWogymPgaiwuM8wyKT6f5sJJAcENVtyYDsURXKByeMRPHwvUokKXexuiZoLMuUjcx4eJbWp3ifCuheCF",
  "key21": "3TR4Cu88Q5BW3TDSoi3e1kUt6DE67oUgB5BQSNkiLtuFrib6sUGafYmUMMQPbopLiduCCmizN1R9skFWZymPnxT2",
  "key22": "5jLeEZiAef4KZ4oTF4eXdqL9Bkp3P91XbJ7W7YzoWyZWqt5quxYgXbpujewXgisjYbVYrjfTma9ZpqYcYfBa971f",
  "key23": "Ltk3BUWfLHX1JioWaHvourWQFumpzXB4gUWacASTzNQx4Waf5iHWJwX4Ty6uMqmJFgJxJTFgGLBXHHZCUnBsBAc",
  "key24": "2VApgcNkgrojLaSZarDuZSHHrsy5zAEmDQUQoniKs2w1MXZWChw4LEbAEgkTbMN5Lbn7EGSgLnza82PGcXiNvXxG",
  "key25": "wYYT4nkT44S1E5hZ9vk1EScahGBEQNv388VKYJc7AtBNrjTVNwmqvfLd6VZkZASjpYtBB9tsZvv6tEBx5zgFiEF",
  "key26": "2cA72c3LbrfJkXa6kgybYFd3HchFx7uBDRXpQBsWNH4otdtHzyz9nupMA79fjXCje38RB4nLj32sDpzUDmJCx35k"
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
