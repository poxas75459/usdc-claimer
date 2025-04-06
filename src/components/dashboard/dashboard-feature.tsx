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
    "4XgbF57GRXbqNXRKmR4W2d4As5XSBqUJGmsa5ZejiBT5qmEk4SUs81mJVhJu9DDo4zBFKzSKX12Y1DrmnZx9nzPZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tdRCAv6gsEvFh26atGQhNFJoHsWGKf2Xbx2xf3SWqas5ZRxrZKoxJhS2KbaskX5oUgJpai4vKMXrUMh5fvTtgz6",
  "key1": "Lc61NmDGjniwQV6MD9NsSogWNdiQtGuoJMR6zLXDH6MKTqrQqAvgNgTMviPhBbfK4Y8QbELdDLDJQvb871UknCu",
  "key2": "2gSfapmadnN7URC2uy7ES9JxHjBQ21YQMu7Vn1oTnqEy9brcSqadKZtkZfBQH6dnTDLoqDQzZ6yKrbCFusgR6TbW",
  "key3": "2roYU268baRGWMQamckeNbz5JdXBbmnucg7dB2hH2vdP4xReHuMH3epF4Ag261miReHchemqgo6DicjwRwTDQqa6",
  "key4": "4Yv7HqC8XPcZK2FC7GjrL8LBGjGuYrZjkoNdUBAuTM4FzMe8uhmqT4NMzeu3emdktQG5WKUGTYArCr8hsqRnUwpg",
  "key5": "jzm7FFFMqo9hTFRgrzptVanKhmrwK3vYRSf49u8ZQMBhCR3qHUGyPHP17LUbnuDLXYKZv4EvN7xapQmnUSoZNix",
  "key6": "33GN2QPyuvxxrR339dNk89HMVFtnGmERNAFhFeLp3azZ3nKXXVpmNBfvRY3tqae47NE7yvw27fQaXSurh3MrAvvW",
  "key7": "5jqGWq7hZyLgtVohDA1wFt3jww39nNS6Nki2xad7EMBNcXDdwLp57sKDXxcByJ6RyppjqkuTr2SDAsP3CKPL5x82",
  "key8": "aqwUPUPS3WSr9xuFJEEUfoCEdBYvQxBeG8CJpVzDZEx3Mni74J4rn34dHrrZTXveuCcEmnJA5ew6LYu3E1hST3d",
  "key9": "4puBTK313xaV3VoUnQAYNxD2Ljm2L8BGgJUHkrNtNTxmGQfqrhjxC2ZkafkvwWUWfTSo9FRrntShsoQrc66n7Cjj",
  "key10": "5GytaML1TijK9KrpRRHrrTuxMmyz2oF5RDixEcpgm3JbNst4wvo6LFDA9swvEZX6gMrZtPhKKhPQNe9tZnDkRbcv",
  "key11": "3GsRvab9qnY9DuUSwchmXU8sijZoBVNXfvbojmL9yA8cFLK6ZnHecsmK489CCiyKQVmEJzDyjWNcWajeE4KutGYV",
  "key12": "3Vw99XRzC8MBro3Pyi8xqrPDXbhbKz6rzJaqTaft82LMfpKTEoysbDYcC9znbXd2kiPvkYooMaQ4WdWcUHct8JuW",
  "key13": "4a6tYPmeitjXZKXNCx5Aram71rjHuRJhvqFWvwADoJCwXYBjUuLRmNfLCQJWrY5yX1MzVMDtS5D69uMoTm9AgRpt",
  "key14": "5Mq1XkUQ9gaT1R5zBcgPtxDWo4D7j5SCAmhgQgMuhve4noUGruWiJ1CPkvYPtKeGwzbLhTWer6aJrzXFPn17UJxb",
  "key15": "5UudQLkScpKj5NA66mA9aJ2DAVvnjz55KqEedEfrCfq6ZnuH2BJh8NppfEFSCcWYYaGRJBcseW4uDfgrxb45ipqh",
  "key16": "5uTfJxMWA4YHqmYNghBBuZDdVCcpGC4BpiZh3yAUPRnJQyy95mbg2Rm1uHaDJNbf5pZ4FhX6w5bnXA3ykm2o43Bp",
  "key17": "5CJrrLCJrT9ujUvwmitPNrb9G6SaUt6PdeKmmvMK5q6xJXMY3NU3D23HdWRFC2vw8yFaoWc3nt3jEa1BtuHkhLCd",
  "key18": "58JsW32zHuc18zG6jC3yq47x2rQVz9tfEJpj9TGJnfkMUoGmKsaBG2uFtjDadGcc2y4y4qpk7umUV9qjKPXQ5kjm",
  "key19": "2yjd8DVPmrfDoxwC3NN1ULWMNejxwgTD8Nw2UkMYUpEwD9WxDTNvL7gYNb3SfXRPn4WxRJvomif81ibhKpcTqUbU",
  "key20": "CGXm5NBxe8nEKPPr9MF3eC39syC9TmhGdTAHxqz2GHPSLeHMfVQk14iGNuqEPpvYAmSCCReNYc53e8sopuvorTz",
  "key21": "39F7fM7PYTckiKbt59nKRJ771aRqMchWBMVvngVWHfw5HdDzDczrUoag3BnVguZHis9SkYyMmhN833xi2Pjqe3yp",
  "key22": "33xHE3bFJzm4VRv8ysa1jrE8jJizz5X4HKB9nV6kuBRhgVfHLW6Hb3ahrpxSJgqdPKGvKeiawcJWrUKRCNLWkB8x",
  "key23": "5EgpFDWRX7XRc41tpdMWpfivshCCukFEEbKLos77JCK97cQb8Y3rAdcgvtGmSaGMTtWots7WNdVPJamKCmTibdwf",
  "key24": "28ha3cBhbs9sJjzoHshRa7bLb51bQoXQ8vi2gbP4aSQtVgjXfSPBZnEesdujcBs1aDBPGA4BsejGoyCeHsFQEbGE",
  "key25": "61wTZxHPjYxEejeJEQLzgKTN6QBUAddQhexZ5UBqzQBV77i9kSVwMon8UocoGZi3TYKxwAXzH7u15tuUvcStNDN1"
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
