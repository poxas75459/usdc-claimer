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
    "5NZxjJdbAQcmK6XZrak3tNB42ozqAeGhLuMe5VCdt7aSZhzwVbaLBnrREYESR7ztLbFohitC7TUEJSxM6MZvWQBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bh2ofkK9jWn8uzj4VqegFzcjhqTUBRtLXLCeWP9ZYjw4j1uS4mtvXa3ZBtcEJmhCEHfo27KkyY6dHU6NYdQFGCQ",
  "key1": "4GzZBF1yY5QPQHjGEtUrvvPHSuJFuEk6fFNKM3Jn78MhZxkxVcvk6DaxcKa5kETnTcuF9peJY8ES1xGJAK9vKvJJ",
  "key2": "3CXdLEsFz21bixWRnRDAyoqWDKD3GQx8G18wiseiTVQ5ADiFuM1sZ5Gy7HmLWscHhCxPFRnSXnrguASJNT2w1Wkn",
  "key3": "3LjgByKgvS9ya1zjYqW2er24JzLGmnLNgCWVPxDUP7ec2gFg3Rd4nkQkcsRLjahpnP5oaX6HsSfBd2ZnKSuweUzR",
  "key4": "4D3JU92AB1TdMR1XpJBUj8Kt3jEx61tEg1fCd4zmUxt3dnxpY1YtJY8etJmt8MbEKHxQkRtJ3RrYMDg83wMQLzo1",
  "key5": "5zhwihEGHFiAFHiupM4mMAB6VnQuCVhARiZM1rX2JvVvqMmiCJSxkuWqbDzrS228rbUXk2mUB2ifUbvCnJTQ7nDT",
  "key6": "A91C4oE1ZDw5W3WyE5aJwuKH5i3tHxyABZ2qCFDbWRSWirV3cUAuyrGnv5te94mZNAtRkCCgVYn9zyBoHDwZ7Bv",
  "key7": "fXvN2eeLxE5PjDzoJbNq2WBjj74bjtDkogtwAM5QWtdH74yrrKQ1zfd3kDnyTtN9FuetCuZtUbXvVhyEmcDbZzp",
  "key8": "3Mr6WFK15EaB1qRqXKMoe8iaBd3qvTK9UBELoF3Jbe2eYeog22X3KdNm9HrQpw5fg3P57EMpRiPD9WryvSo1J5MD",
  "key9": "5ewYspkkmLxy4dzoj6qfnmQnwCtZHA5ujBnigdgpXvVMDjV3fJdzgvD39R64wvbhC7ZLRidUVTUEo8LKfL8yJ5FH",
  "key10": "4ng32APUH1oakmehaZQdfqyPQjFMbo4375biVtNoaNwfoLz7dsZ2vKJy4yLcQ13ZakMuK5bL3xy9rm42dPgxNKmz",
  "key11": "Pva5KN1DtKe3MBh8Q4nxYDp8vQBjpsekZKRcjChDeeRh5AyicrasafRuUYY65KGgDyebTSWWVj2QDffa8vFe1Gh",
  "key12": "3VwKpac6SKDiswWiip4MUZw5AdjmGyxTGnH1NxH4GJkKxH1BzfR3Erhc9BkTKc9A5y4e9FimCPJ1sWfJEpNXfxYS",
  "key13": "4xLNC2ajkydbEvUaDVfZCaT9qCD241yWM3ZCd4385dMSPukAmffwBXrRRT1pDN5mdbLRAdh9BfLkcb4QiBdmnDEP",
  "key14": "5szdkyJBUzcNMaaECVk1F741zsyhaN9MsNW7b4fuAk8k33K2kiK83K7ohw8iLRSWvf3J3L6TZMHjL5acUGeFuisv",
  "key15": "2kqRZZxwA1LYy3za3JbmgreVX5dAbRnb3Zj9LorLKvnmr42oKRgS7z7mB8eTQwJftdrzYNAUDZ9CBi11yb5ej6Fa",
  "key16": "4TXntj1aQxL76FeYSnZQwAGNCF7wNznxcx4JJB3iMDYvswFFjQb3PtgdGLJnxcahvzFE3g6CAPWqMLcs9pp3J9Ca",
  "key17": "3gvxUAqkdUdbgB1CSSQ4Ggs7eKcbc3KEdYvLcMabgmngfSuMzZmHziWGu9vMYj5rDitWZNY9kchYdYwRg5uQEpcD",
  "key18": "4Dx3dPEwnzJuMs8Lwk89RSpTE94wzqHvVNstVaYNZsxmLjUo2RRzJZB1avYXTCzgvBytW7Xpu8dDGQktNQmaaVAG",
  "key19": "4N9jdaEaTxKM9xSQsb6JWgesq7byY2a79shknkff4rU57duPycCh6EXqoXNJRqtSvsJxzf1Uh3PfCuGKnKukvoX6",
  "key20": "dXKn6FYHiqD9Fc92iEhPqC7qmSM8YfgbDUHFHgrzNxQCVXpDSA6hsq33h5zcjLq3gwHm5uEyW5y75xwW6wwsGTE",
  "key21": "3U31Q1cmfeHx5peHKnC5LJXj1kVuPYh9aRJnd86TcGHorZDveRgmU71J3jixJTQd6mUnbFwWNZKpdg5PHTYJDef7",
  "key22": "2hqnzQHGE99rXhrZc6yFazeELmb3JpctMAZPYPEV8h5vzYmQvuMy5raRyCvMp6DeN1hfa6BDVgL9KwdKBCr1mcoZ",
  "key23": "4TKnnb9guDGYj5HZX1fY8oZ67aanMqNHu2dqdGY3fiCn11Sf8oGNxYsGv2vFeup4rs8FHzPQVXhApVq5NAUTvbi3",
  "key24": "2s9BsbxHERpkLphMJpEVSCsUX1ayEUqJV1S7dxtQ7Xrrs1ynbcVYjS34CNiUR4EQSBFxYqngSM2jQ71ZZHecUNBw",
  "key25": "2myJrbWUE3fwFveTEz3gUBwbXbqhZKWa4TVp3MrbguGoCZDRM2fkvohKj8AiBNted9cPJGSKtsW7WwRMUv7qyVw5",
  "key26": "2BEN8KgQm6w9a2Qtr3cHwdWr7EvevTs7S9E3UmcX9TeNnD2XhS23zTfdCa4t1PNeCHGS3y6QfLWswn7UrYYA98B4",
  "key27": "2e3HWeecSxjJRaYVf6K6hqDD42EFETPALBZh8PU2rTBJM8ouBSRZgTZSUWsHYwotnEM6imEKHA9fwPj3ZfadcNfp"
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
