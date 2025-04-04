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
    "4qcgy81fhoK4XeFMXiPvkghfDmVbV2g7JuL9GR4XwqTRizTuyMJZhE6GUtqCBkjKVVfZZoWQXnqJHfiX8JM4rbAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kcPHFkcCUgnG9UdE5fDPaQmJ3brdx7nxDGL8pTVvhHejsXTff74pzjPHZ6FRQDcSh7Ysg6auy7rJGtXpfeMeKnf",
  "key1": "2pZD5yhcSXnxhu3aSu6zcZW9Y5nLG65WSkskJTKSfPnm628hj5veYw5CMAqfZbbZP5mDK9TdGT5ZUrVTe8UdQD4E",
  "key2": "4SgZwGniuTkXJLqK2aGwY2uwziUHdBfVZqAkEwn8p1V2B1Kjc9m2u836faVnrPd4QN1nBfn9DzzhEzdQLYEJd1HB",
  "key3": "4qoUkruSpoGfbdKm5gmHG9dtXP7oFYUR4cJUgoJQuoYCbpK8ayGU7YjFdtLxUHKizodgxgMjFnQqB6Qs1M47KC9d",
  "key4": "4m8xqkRLrmDq6NVSUrdQnN5An5osTpuXnKFReWGoAPjx3K4mXXeTmAYGRk35ydWEKgFkq6p8LVW2Eh1Jp74svDxN",
  "key5": "Lyd62ZWS1WZ9jRdMSZUayvhsFgvLwLoVBR6XmGUBthLiN5dphuzCGbSDbx2aUPCbLTopPoDVjLxYuyjwiwSUswy",
  "key6": "2xCW84oR5RUtZ9XtWogZkxNBFwwVJ8HTriVep9jXG8Xp9cdeWMeCNBFFCe2F7WQEeWFvekvURgNEgutDgeMrmdwS",
  "key7": "5pcigahzHsunHRTj3de5wmBSVkYCTeA8RSDs3MRWnauZKtvv3srZvTEavAb5LU6uZzAe6PLSduz2LAUbkyRfT53N",
  "key8": "4mJp4Fk4JRzodsqUMtZGNgjyqUFRe7aS7y88qSjsKY8RUoS3GofQrruYtPfRXdGuh4w2y5K9Y31VwoFgqNMXtVtx",
  "key9": "ddRQnoctrqjNDUanDecGAzcUjkkdV43becU16swwt7vBYD5Yr7VmyqAVgpQZsMrEgrEgC6EoDMGTDqVp9y56HJK",
  "key10": "2YpB4L65Y7XN93P133LSaqVszrXNiU1mYy5ZYx1Fuz8iiKBo9TgSRnmxTUnxvk3XJqh8CpUgbimrsshnqgu8zou4",
  "key11": "649pw4DKTX7ijuLrpz4ezzfPyCKbm4aCWvA78U9U26TwugJHrpMTN1i9SRdhrmevPL51hky3TcPiuWjh2GPCjRfF",
  "key12": "63yYsr5cMXAY2j5K2yKDJ3udsCDEDLdB2g8uNHvVs7Bd9HG6zFkUKFxV5gZ15jLsHQ6kLhSTeFLw4TwTTqEjziY4",
  "key13": "2dVhKN9KZv4MbhXBBE73we67fRbjLErPivQf8UbB5hFgekKsbdxa8HTtSgap1nud69VEcu2cKTgzE4me5nPwDWkr",
  "key14": "5hjMMAhowHpxW1TGMQ7kzipo2yXE4p4xAWNTUKxsuY3NJEQGnMQDnsjPLUAqyKWMh9bDumZ6EMCXvSK3WxT2tcJV",
  "key15": "4qymErBwZLYhBLTfV93G6xFcuy8feaqFM4M1BusocXnschMZinMmzBoaFbUudRMYz42inVQBMARj36zX4DvNE2DC",
  "key16": "4eV5ykvAxqkrk5WEdNZ3HJxtpfL2moyaTtrLsZ2hxPNJteUWHNAfazu5MuiC9gLPq8XMroTvbGwHu8JeSQVpuC1p",
  "key17": "uBopiTs7KnJiBkn2Uf7ndFSNeY7VXCMb7jDFKvU4yA9ueo4CqRHE3DtWD8Jo1aUZkJJN3ZBWc36HR7NC47Jdrq3",
  "key18": "FrGqztJjUvMCXvgR3kTwLhxuBpAmPJp2Ei7yWRLWpQ5YqUEdnYifDdQjkJYX5XZCdJ7NRuHmk74NaaYusdJ4tUZ",
  "key19": "BD29QL9Nur7CRo6T1B4hLHcLbU3qLjohR9fFbNZWQPunuWAehTRngsBsRkTSy9WxoaGXUKjMDhXfTpqsbrvdaPS",
  "key20": "5F5ZP7QePT1gFo1mTMV5K2kWvYfRpNpero2NGGmnEsyT2ZUSoQva5hVc22Kz6nm4Bqfj2sQJVxzwofm71F3B61Ti",
  "key21": "UT45qAiPUavUy7ZU2X1rjKCkPB5wTwhUhfjcpizFs18RDDvTGxpCBEPuhfsQncNCY36TSYmpbosifJ278PK7pfy",
  "key22": "557ZAYinUgPb6mU67PamwbeutSH3Y64MEED6MC48GFiibAfR95bgEqmyvaP5M3D5M8JkEJRQxpJrdnZ3xD6cqZqv",
  "key23": "4yd3LrnpLpBcoHvvE8jYxAcXXMUy27yf15j1DJ8udb6ho6wdTmvBp7554keGqyMTYJCM8YpWRSkt1SUEvUPv7K4r",
  "key24": "5soBQKX6c6FMmGPVmWrcoFxuPVk2pobtSFYZS3252TCfbvCihYaeh6GjZxVQwGbiLYh88uZULFTANX37Ff4GQ9RF",
  "key25": "2mkrw5QiDnkxccbbDHqGTYLDAkTh67ey7G9QPjohrSB8N4487QZjPqfn3gtNfcTd3YNU5dkg3F8m6mezyf889HQ9"
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
