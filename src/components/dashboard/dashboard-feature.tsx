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
    "ogy7DAGpzCj946MrNgQCPFdMZkyYUQatr1Uj4vafRvDfppgjaRna5rMtdJ1ahnkTnHrXFvg9siuQTeXWYGStb5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2U3jnsuRVddw2nFVEmcQFxH1hYZbscEEcvVfiHEz5DMNTt75wzcV3R5yCYRKJQxks6zFdaNWKyP4hxqheVrCERsZ",
  "key1": "24criV2PW2uKGfVARi5QcKadNxP9YXrEq589wo7TUAbet6WHVFcxfAu1Ljqk27gzCcdwcG1woJ6HFREuuxzkTaaz",
  "key2": "2CPnThKBKNAz1VFFKxgUXNJ36d6VMW7EspN837sJYxQgUXx9AxLy4vu7Y6VPhXdVFv3noQBug3GvFvne4kQQQuPJ",
  "key3": "37K5Tu9DgmP4tFUavWHneG7GHueyiyUNrsZYo89oCLeQ8y9MAUJRsiynmshuD1LCYko7eJgDbYGTc2ayHdZShFyz",
  "key4": "657NDje2tRuzz6SEL3qB5AXBfAfHQdxdKR7HiLSeFQWg8nsaGnKuaDkTvg6McbPFboLtygvq4kcdrLavB8h6ZGR9",
  "key5": "CJ9bGm7NMdgYuFjYbQUzMkZosT9pkqyLEDNyPa9Pekv7yxuf6B2576xwzSoDdig68F8ryXm43YY1ZJFLsaHeqxR",
  "key6": "4jkuuKQCXXGwtd6DY4Z81NwirUUMs11AYB1NTxPj9ABw24j19U51G2TSjBddmasFCzcqYehNisdZbKLzfAjx4xRp",
  "key7": "3H1KJN9AmPhrLAxXNPP91X4pQH7jg2hLTv1ELcc6dn7b96pJLyyv33YrBoaJJNrvA8QzUUA6s93RoxFDd6BoFPUJ",
  "key8": "5WnJcTxNUy3XHicUZ2vSGN6qrvamJP49rcMubtXeiCrvC5Ct1abUbzbhiHD9JHUCAXQRx1vwrdS3jA6KJ4f4Js7r",
  "key9": "Y646XmXU1MBtgrGKMajYvUhynZ6xbqYKTajtDXQSewDQVyNrJJaAUjL6G44bYtwkovnddq432WvNFQD4X2kqofa",
  "key10": "4ZJ3cfURKVzMnTLzBfoyN3NRJfU8sYD2XZuoXE2wbKKUZqsGXJRGDNYS7Pj9FWWgct64vkdxfEdQZzLBU86owYaQ",
  "key11": "3cvaZsPKJdT9FRMZCVN9CcCGffaJz2EzZ2Z9HwR49DqtYXaaDEbwymqGwqe1rnL1aTspgSPt5Gj3pEGryL2MMQ6D",
  "key12": "5JDy3i8C1edLPA47gEVoFD6J5tQhSYBJB8oe9fVZE5vZvABorc1CDiWTfefYVkRbzudR43LQWMmanDZRo6Eq8WGc",
  "key13": "PTrPVDE7BCtJW1uCFHhCfWKDkHRBBTQKtYpjQJTxD6zg2WnVHLMLVYSaiGnQ52wSqQNRDkXfTGQL1NyRR2A7zT4",
  "key14": "iaWX2gBgNGtkqeuCqRcCCrULL1ff7XdrZ5euxjMDqWXi9eAFkyeMfWxRBHiNBVuLp1tk96SnEA8m9gJn8soEZiJ",
  "key15": "2GTAcUisnsxG5zC7DWcsz6DLupR1Zu3JMrfUNzX7AkCJK2jDuhwaqBFpMyn8Zw8WngTyuoRdkek8EKBPAZKsz1sp",
  "key16": "5QEnTheXEQDFmm5WbkRp2EUbvd8vM3JVBnhMfMHeYEuYALbsgZwzS5RdkdjAYYSu8tQy5aMgk671WaEpdHPbsVLt",
  "key17": "2ha3vcnjVNhHrTUxixENUESgpaZy9BNo2FdTBRV82cWeJGihxK8jY3B4g48u1KyGqNq7svfsp44cuGsB69oxnMyz",
  "key18": "EdSc7Ud9LMU2f7kLtdHQpp8eG7ySaa6Ydedd1oJTZtVCmEVRfNQKYr9enFNVBZnC5rfiVJXNDUjUkqiHr3cyP1M",
  "key19": "2Y2qdisc5wJ5uCJiKmqUmLwsmppwUcnFezLPjVVBWJEsb4fMJuxVvUKJw2gn8NGmXhioVAiiKEZMo3KzkBkP2ZBc",
  "key20": "2Nni9Xk8UG36D9RsBMrtHApHK4QcAgAj1auMecNgHKsprbc5XZKcwnWdSsQ3uKWwUiDdQq5uZ1bGXLfqPNZJswvr",
  "key21": "2tXDvj5462fvjuobLgHrMvJJtVhwDubs6q1KSWeUFYN77ZgBtiK3YzNsE3ogkzbHV4wWisCnQfGBPNo4q78spNT8",
  "key22": "2oZvdd6s2RdJFoiABTteM1BmHBHh96HSJbY8Cwv34yKqtQFZD3T4F6iRh1NwB6TxoyRafRxVNQU5YS88sF4mkyxz",
  "key23": "4ZT8msgQj9VoyFT1dLkBsj988neXsoVD36Dg3ZKJomuMJbk9tYYgDNTeQocUPbvWc3sFNJXQAkH6LMAQXbthGhHS",
  "key24": "3f7bdCoShD6bYNnxamizvqW71Em6e1NuyosEiDZdu4gaWU7MdHq2tKuuu68Xg8iip41xXDY9obBAX25CiFy5tNS9",
  "key25": "63yZ3wSaXtGXcLYR4Xwe4yDcnD9uhQKrZMVXB8vT9qZqFJNdJLyTo8hfsBn3h4qJqvWjeunxEvZqdobqGLsixmkH",
  "key26": "3FxBF6vMWTm1QEd8eQDP2WP9zXN6R6sAQ3WgnD74YHfuJ5sD5TgNZN134QAKQZr7n1Z98P7WmRkCgX1aEVsDgo5x",
  "key27": "3gaQKF7jDYGJhoPdeTjyq8Fn1VeH2JXtUji185qnaNcUBiKxx2g6evaNNMgfFennWoAh1LLEEhGz1HiT2ao9k8HT",
  "key28": "3L2RMmvxeCFNF7SvXVuiV353EmvtBZdQNH7tAUGpMAXMqhVXig7sE9RMEzXerP5YYPYX738HrC4SMgakdj9KeFsZ",
  "key29": "3uwC23EXJpARkRdyjdp73CdiKbzD5SBs3zP3wiBeoaExnESXmNu8oiCU5XGT7eb7r6huutoSxRSxZkBx5saH7EFb",
  "key30": "sH9xmVDDgXY9y3Br3hy4qNUPMY6SH7MmtnhWsqwTnKVoPTZuD1QtFrm1frru9U16i2APk1wV1k44KDhMKfwEy3P"
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
