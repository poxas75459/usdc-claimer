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
    "3SdQbZ8PJqRUyFDXKe8R46f52qqqZYEBaqU9zCiiTMD8jqxERXXjRA7DugD3W5pDLb8ACKe8aYhr1gpvefPj1bU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2A6Au8frQh5Uz5UzeUW9LiP37Kx946woXj6P1RaxEge2MZDHmgSS4aN7vsK2jdg6JHRa3HYq1bhet5zcn9gkAVCg",
  "key1": "4hPiTZJRXAttCr4aNait4zevRG7PCS9heJWYy1UagFBGDgDwX5QiPA81yfgW99JnVjMZReSwqxgopzHLoSEr6ELn",
  "key2": "2WzuJLRr4xizdGcSSnJ3CfimgppUdDPchBuSKzzXqLrWP2aBjyoyEy4Y7yriKbX3DeHwKXypRrtD693XnHzaimyV",
  "key3": "2bnMiCg5V4iryh1TYbrDiwdfmeg7MhFvbdmUWGEuCnBWZtLdBDipcvTKxetriwtAH9PCdym37vbGbbcg9R4568F3",
  "key4": "4zk3NTUVU6XfhGtyznzHmC6syu3DDYC7fJgLXPLtyB5NFEPVzLvarnqMbaxHGtS8FunqfPM9hrsV1vU45SJd2mMh",
  "key5": "3eL6SCpx7xhcEs27VqRnh3r74ZwPEuGKb29BiX8vxmqPGGip94nkzJCSJgNn4yrpKNyfxmKsA4X5aasbQFst98Kr",
  "key6": "33N7pTGYwp8j5xt19hsLx3pAcAjYvg7Rjz8PD8VJHxyugVWkARFkCWcZ6Ljifupr24D5EFXyuMAe8MRo4joz2mU7",
  "key7": "518KgxX6wn9PAHo9CiLsbGoBrYzh11kAwpKzQkhsS3yBa2AioHkjhQkXQtQSRFj7zWPKSQGYtkeRE2bSCoRFwTay",
  "key8": "3ox6nbrxrDmSndxuBE9joiPfwSLUh9ecaPLAyWxBj76NfC3eWDAWDUdFrt5s7est711dKheQUXZiED7tNCMSVz3J",
  "key9": "2h7KBa19whCYPrXUZUp5Agm36ViRn7oBFvU78x8nQrNoFXkViX4umrFd252F2GzzYzZPKj2ZCXdM3Mp5owUSxdNL",
  "key10": "2chKCDQmXu7m97RscX97eKhC1hWDEUDaMWqn3Yd1VQH36Hrez7kU6J5KssAw8TJ7RfFLqoBA61hD3C8ShCkkhVmj",
  "key11": "3rZcEtAbm1bCzPiYSrqUAfiFeoRiWjBJx7Cz7he6G9NdAfVfTiRjBkBBPhsaHMiePfmQLprEjqBiu5QxzQX57dzZ",
  "key12": "24dXW2K8doStkF6AyV9iNtJxCqwSXTcB552pTLvPo513sVCE3zS9vE6dFc2jcsdZtbEpsaKBBLXw2KXv55aqEHrm",
  "key13": "3aBdHgD4FEyAGxPrkgTtfDYrssMZ5a7d2hhE9nx1TwNBb7fbTUz7N1eCwrFgNSK7UjGE4pDfUXNmLtX4i9NAnN8a",
  "key14": "4TzqMdwq874hmB8UhLvUq15afYS7LdGVTbLXnJg4x4fdLM37aHsYWepvN44vx6NBmWByhn5gK7buavE96Yay44zt",
  "key15": "2Vs9JurC49rzCdxh5L9NDytQq5AT6ogwT7jYcdUZ93AdRHPesQfpjBXcSrugRvsXPVEgQs9ZvLpZ5VV3FnbtbWym",
  "key16": "5fgrHfuxZBYx8KYa6bRhFKaCFSKubfk93QDAJZXminFxPdx8CdF6p7rQQ44yuLtnRocL74vL5KW2FBefb55sitpU",
  "key17": "3pYFE6aFQBsvbb8asyU8AATNDJa328dQNKrRHgW2h1WHu4To6gPgWUqSokig1rpC1hXFX61nxUhMrZP2hCkpGXTv",
  "key18": "gUtuQ4ACZbj2o8vzCj9KUsT6WXVZg5Ckqfw7VsdP4KEETXrYxyQPes4coiU7D95CMrtT7rMc23HB4fk9eFU223y",
  "key19": "5GA1kmGMTk9mbX4M6PcAXvMpzefXUFCXKjdTj2icNhhXjivyvqLS33PRzFNQN6nVsLkPvngKSSyf3V1hfAF4Cpem",
  "key20": "6NNqngCea2wVzM81qxZXUwLq5rAfyrizM4cwfv4pXdKEqKcWrZTcp2u5PTtkQ7286AbRbb1qNTtJK7hVJYfsiGT",
  "key21": "4EbETNpQUv1NEi4UJCowGwpUABrASD8zy6cTLxYqvouduifhcgYEv2j1x5cYGVqscLNTWWb7uAGnw1Sd4NWxFThM",
  "key22": "4iCuB3RK8uGCCFmWx1g1WuGh6NLQWa8nrr3s7qhFr73SFkjDSL74cVpF3uU2bmJktL62i3oPAVu574hEEt5Dhf4Z",
  "key23": "4JhvHAa5Afb8zK7M7i3FsQbDS8EEoWoKwXqz4Y1qWeXnxdk6X6RtmeWQRVSwEUg648JEyVWhd28EpeVBmd2LqWTi",
  "key24": "586peKrWZrzGTFYeWQKYqg1TE58fSUzEVGAjLmtpA3N2LCxa2JiPhAV2REWdjqPNXxb8AzLinESNYu3fY826FEsb",
  "key25": "2V8arRnnv6idGcVq5UU7Prs1a2kWWUYBbrEaNgvBVWokSPKptHZ1i1cDJ89SucYC7s4meTorXZJ2uZyZcZLaPjR7",
  "key26": "LRJh4bqAv6hJh4Qia8NvBej4UR3sT4Z67kUk9ofxMfBNpJbtxSPUUMn211NE7Gg1fUiWQ7xXEr1sZN8KP3ix2v5",
  "key27": "tVDt9dKY4TB8vF4nVALbpXm6z8aEgTErEkScQCWKEbk8t3erJ8HFtmvUDpMqrnpKzXx5gfCWGUCYDg8KzQFojVS",
  "key28": "5xpeh5tczQi4H1AXCJopgU3p46Jxwx5nfJzRYm6LLA3rfFZLfhoycc6MQWeqvJbdxTKeZwb2Godu33EbMfqfZhn6",
  "key29": "yk7YgMCLyGg9fg64eDjMqqBgE46BRvQnZnuEF5b7TGHAA1jHoXpip6mrHXayjC1LJDRvfhyuFgFaAnfNmLWjrDG",
  "key30": "5pfBsfNZ511T2Xqhzb49Zb84XkH1SFi1k8dWb11gxQc9iUweGRhvhrk1T5AFikyLSjYFiheKhSQwHjdH7wh2y2Hx",
  "key31": "93YD4wnfqUeKDkfNtoKSKPhiqRSRS8MANwcLrof4fSZD4QxMn9yNVhzwZUfobW1L1KuGxUcF5YXVtyTZtLqbhzS",
  "key32": "2iT8yHvvx2gKCD4m4SEQhCCfmH2ui1iEb26f9EbkvTBMW1foSzkgAbsib3pJ4e2deVFguBiDFDsivp77k64Xoe9E"
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
