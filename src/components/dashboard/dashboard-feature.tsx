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
    "JwKVTWPFxWPerybDnvcVyxCXe73YLCh2cYfiD8FSX5oWufN2FD8qXVdeKDgH2q7WN7wCJzZeePXpbw5PWgdEq5o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nAFHVcuczmDuJzdfwbVjYAUnAnPVfu72VZUQ5HjhUPaPqDWg7xc9AnTD5oGCbP1T68UmDygXNV5vXieCC2qRi2D",
  "key1": "3SiiXoo21sWTa65yrzQLhXLMdKiP5DvL5afKLWs4WHTh3MmvLX4QLC2Qooh63WXngxsmmzXcCNwmHW2xGsWbzaEN",
  "key2": "2ZHWxMaP8CjNLS3VVaTcWEN3QTB6Co11KzQWujrdJP1Gau3u3gxf3oGv3xkBNV2KJFE2WDJ3UDagbSynr5pymimS",
  "key3": "4phit7R6q43szY92ywZzSPoEiJ7zBfbBppUNBBMRDKCE5ZULnqUi5pZirftbXGXBLWCVovYLDk5yW97F1Zbq1hq5",
  "key4": "5E9mJC6b8gJadS1La4XD4TSsuSXyasVNpgNiRMv4CEuUDuhQdmxR9oQmWx6VSbj3fJBhTJyYeSJDWT9eWHUBN45Y",
  "key5": "5Ri4gopLTXaKFYjeQPsj47j7kCaA7qWC4vLUQoAcWUYdWVdSqY9AqUiCuz2dZa6y9Sz1q8m8VyQ6UJk9T3Loyqy6",
  "key6": "5pXiprwYxk17mm2amfC1vVTyQAVBwiHz6Ut6JV3ffpZqH4b5gSAKXnngYXv6gWx68SpLVi93hsd256PWCE6DcMfH",
  "key7": "52KP3mvDYdSxM3z5PP6Qdxe6tdMyqQZnRSKi64BMaBfRJxfRsopcHrsnxHbW9iRPByDA42V9bBCvgpYmMXEY31yo",
  "key8": "48JVNYUZ5Qombd64oNonDyjtYrbJcMMs14LdxgXkjdATzG2Q8CgRFooNZcu9T1Ua9wYVWxb1hc2fpQWXurLddhUR",
  "key9": "WzhsVULoyhjActXsg143io933FgkrmdgsthMFAGSRjYJoMUDw1E3YygdFe81CD8mYWCGf4fyRBgxroQjZSas5Tq",
  "key10": "4YCUXt8MXs8EA514y4K2PnK44sXzHMaUzbhKYPnM2q912ELJDLCCEJggWoeSxFja8h59uxFVbU8XFFdfFmY8zRqa",
  "key11": "3HHU2dS4ZTvzDNEKiZB5Vhu7yLkCS7RfWiJhESB9CqDAMUpDoXxU5efDR6wYRUQpZ7ds6MQQv3KjnKWnW2a2kD4S",
  "key12": "3UZekEjK5G9jyqp6jtmu8z7iqkUsZVSW5ckBEU4moUojt1tp3P5uFsT9s5K5YYpVCLPG2UT3ppD6RPtf9XmcdSiD",
  "key13": "42WSVSk1vvYBBQaj5wUh8ERZLzXoRLNciovpgy9fYvMjjf49FYcx9TpbWZG1DZattkTijdPSUTx9HzVbf4Ycgcn9",
  "key14": "2fN7nMg1yzjAQMv7ksyemVygDetyLNvWXfxupQcFxXnofyqxvidMKRVj5fBm5Utch8VQam2sNbdkP5BpQ6g5qJ7v",
  "key15": "49jj95gqtjxiTKGJfgTztpntv3wnxdsmP2HZHxCunCgQfkgAwSJDu9AxEZQoCCdu4w1XYevnZrVoQXAQ7sTu7tcB",
  "key16": "5bGUdepg2kC9UWqPxywhyiG1gN2NQRZ1Kfgd1ZVuPPdk9hZFsuFzHaJndQkTZUH1ygkJ2RYyGXPAVN2Kvww2sP1v",
  "key17": "4qzhLGN5A2x9k6g89WJjWiubAgZha6b1amtJxgDXWFTvaEipjioNtNrWmWAZrpjqaTyV3pzjJmJTHqdmYaVkqUQw",
  "key18": "2WfcuQub36YqK1q9gzrwruFggAv2DesRVNKVj2JezpJGgBds8dKn8macHUvLoczkseRAY7PoccTkY1V1uQhLoXB",
  "key19": "tckuhMpGnLBtf77ntf1Dcg6i88k2wFdFXa9CdsseWEaFFwLUFAmvpJwQpksRyetBYQfTKFDeFrjvFCc3dbyTag4",
  "key20": "3rGae21DMBJ18o9vnRPvNLi8RxuEp9cgeJdwzgV81xr9EVCMDZR41MaDa3TEoyAEmgsbMBobnr8atRdZAJ1J1X2t",
  "key21": "2C4DSGeWyQ7QipnNzuEsbr82cTyd39zWtHam8A96dbunmg2LBHLNMdhzbgqUVkcZgbY5kuTMzEP8rqye5XqzDeCt",
  "key22": "42UgMH5FNQ8WbccKwUNURkmEZQkkrLcVajaevC4MWcyGyPYQ3L9icFcB46xxzoAe1ds2xhU6fiUYoUpKsj3wpbhG",
  "key23": "4BtNvqzLtnoHEaWzYnDjw3cDbrdaDUMiv6NLRuvQ9XnM31PvX3KB4hiop2dbAuJHeK3LKvgHFspeo4vNcX6DtQsD",
  "key24": "3dJWiHTzpt7rsfQN7k885XQMvUHea8TCLoCQ6SUhMyswHL11Z8B8C1VEvdfP4y4H4wbBa2TGe8pJC7iuTcaqQcaC",
  "key25": "4N6eoHJmraJvbaWDdfhDXJJyKri2jyYcJigujDdfpyutUtzAGxB3yAbnRZbvo64PzjTChWJQhgDqJG9uEtWJBhxq",
  "key26": "2ibMHyrL4A4DThAKEgEj7h7TSW6wHivn5qGs5NS5EbgrD1weSeQiWNfTYdrv3aqLNKJuqnQnEGtgfgtGQBtpxF3Y",
  "key27": "2F5owreoDhKLfoVgorHub1b3fnuDfgqAPuYGkDoFAYpdzMZw3MQh6MqSM5b2NTptRV6nRkDjSAPK3WD3gjZUu8ja",
  "key28": "4Va6fDJufraQW54DmQEKUFLzMGFUgtXZ44H4a5PCXqbuNDfe6c6hWFJDHkmd5AeLSxsTWC8FMj4mZVzoaMGCCVDM",
  "key29": "5KfTj24AZkLxxJ3qBr5EMotK7BJv4hwfjFEEYeEhkGnD6yzZLX3uhxFKbX1dvRV1i9mjVDBcm3DnvaTmDAXKy31d",
  "key30": "1R9QqKixdpywgg61PJp3oPA2bvaAwEU3M3Nx9Y6czCRXWSK1QAFhMb1wWMnJq71gdEeyoPKNtzQkwwcupRxssPv",
  "key31": "5suNVeehCXJ1r7jWDm45voPMs2cshcLcsvrnjtNpEEH9R84eygemkoZLQ9pKSfkU6dLtq7H7cURXE6QAfydGfE9F"
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
