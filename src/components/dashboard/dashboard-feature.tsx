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
    "49fE8LA5PTDdHKFB6QqjDpMLuC4hXGXErRHqYLb1ivxLBTfdPaMrxM7QkAUwdDVeJ8AhxfdNwdR6oapQpH1NKsFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eDALhStmFAMnvniDPAo891Xnk2v48hCRMNB6HAfaa7XzTQhSZurwf1CZG7oHySfhM4gz1mr9ZqUXkLvvzsH2mu1",
  "key1": "49wBPuYBSfwg63AP2D6cyMYNUg2CRk7hohNWYzg6EUx7tMdzLE3iugMvs6ictcJnFRgBwhZaB1SQ2vmcfUNuE76F",
  "key2": "5foWBRuTohquwECpYfQ5ckNTLGUPED6141dwahjezFZrVkVyCCZMdNeDJ9M9ddusx3s1FBJaHMBxyd79cgYwUosf",
  "key3": "4NCZR51VkyE9kRN8CHpr7N9EpyTdTm5umYnKZ8Z529fJUQd1Cw8hEYs45ssZ44PcjbPzM4GEUiqyELXWYdQJkGNg",
  "key4": "5rAEimexcLzFnT49hfeWtTyn4uEi2Jb4fcBLZ49pvtHXsXqr5JtjCC93rKfu1omtPAvnDuzqxNJXVgmMwE86Pj4M",
  "key5": "4Zv2aZ1deUmj34uuUhyk3msFvK2GhGpk7eCXaMS8SVmfYbTke47Hzta9WFDbo6wj9cztZoPnFSkUu6jqL6ggwoYc",
  "key6": "2Q3NGb1RqrZ8optK2nPocR6XWAEW5PfWsDBDPJnmPHYFmStFQM3XFSyNgd298YHAEMHZcQeCNQ4ABcW8Btx8jDXd",
  "key7": "4UUvSWtSB86Mp1Z3MpsTjajmdEQqWFjRXFQVFCqxkD7yJTfugGV7jyDkBEPuckcXEatdNKDXzo24dL48WqBfQpPn",
  "key8": "5ighNJUZuN5GQVz8E9RBPMB6puue1BgPQ3LRjc19UMAWtNPzwaiMoxmfzkwvzEnVpMxBF1FUzQTHXxH6MULyy3Ka",
  "key9": "3KaqbEZX992BF5w37dHXPMP25HEdwjofkkbLFbKkqx4iH28GvE3gkPrZyWfNs7s6DyGG8hNSiyZZ6cU2z2bbKXvT",
  "key10": "5zAg3RH3FzR1ugxyCibwZbn4po1vy4w5SZcoqJQYZwobozP3jYLdGsfWgekJCVQN8YqkGmZCGMirp3jRLSn53cdR",
  "key11": "297VAfbNLRPS4zgRdLthAxnFF8qoRb2YU33tZgdAN6dkitAjqNqYNesVD8HWCJPVY586oe7msqk5oixGWajozptj",
  "key12": "2dKLe1AhxNJ4eZ27CSSxs7cFhKoEKSnpagfC4zyT7WYL9QstK44ZgD4dER5bVkM4d9P78P1FopgrKseEyWpWoKNv",
  "key13": "4r3ihEPuDnfQRB8gjUa4ygnWjmYdAptTXtmQWR9wr7jTGE2rjkeJSKRD4RDZeQA37fjf8wyfoCEpDrmBs4SWVDyJ",
  "key14": "4rD4xWCJtfgme8fZxMSeqPtc5tKM85AWPDTUnbMD7L7tGBbnoxqgyANQR89Jz6QtxD7s7yitLFzi5LeiRzGvrr33",
  "key15": "22QBfk9yTsFVYiaF5gEHF4LaVE6ZCEVCtoPToiBg1oXp5r9B5vvD8UGrvHisrZSSzxDBc2X8YHpe49JKwKEcErry",
  "key16": "2fDxRe9rZ6E1mAFf7M7KSHd8en8fdq2pnR1H8knwqMRUKF9VspPHEWXQjSDyid8imdrjy2ZduBimWWJR1qk9xaTr",
  "key17": "37J31TddwNhjezFmQjHgyR5zFXcrvtit1yPbVG6YYkN4HqY5tJQro7xGsbC7Y4k4cKy956BheU5AQSgcTyJ5Apgg",
  "key18": "4CfmFiRgNcMVsYQfmrmnjPkWXqQobGLUrJEVaiu9pSjhKVYVRs92EWYa53jMxN6Rmb37y6KcaoamZ4efamxdZHFv",
  "key19": "52zFuWvBQyKMQ9pYiQbtsFVCqjEVVmT4mZkxb7PtLSq7mC5dbwhmmccQNg5xUfFvYr4JzNLNisVaSDvZPwGvyQyD",
  "key20": "4DfRN2LkjmL2ajh2y1p8TWimbxQJzGX1wgTt35UckdqgWNYDGxtNAtpbMBwu1czw1Zuhdw7rWGPtmDCfBHJCYiJi",
  "key21": "2QqMdvKP8tobu91a2k5oWzg1yb7Sap2CAsuoBPm4C8NeaqhC66D6cvZDQxxePLhth4EMqvnf488Bxzo8CspsgE1j",
  "key22": "3RC7pJdfZCujGQmeXDWRLh1vh1Hj5fsV1FpCgVtKWbdgfTd3MxdebdVgiJpbBHvwWYjvZJFAeFrWUBjQkjy9KAJ1",
  "key23": "3HqtpvpxgVjLWPyMhYjx16FUfMotrgyMCziTXY9VFozMdQcfsRuPTuPnEX51J969nakvLXBFaHacya1uwJSXRShN",
  "key24": "Madq6pLNRZPkkG3ECdC2X5LbqeHSFrC3ro75WkxSaAdBy7yGPN74geg4WMqgnuq71pMt359DGGzXfu4jriNB6PZ",
  "key25": "5sF9CdyG2cHn8e15GFH8u3XVinh1KPsVcZZ5howMWuJQ3KCRcrE79nVEQGiGjCjs8epY6xGuq8C2zhUpb498ZUC7",
  "key26": "4ru6JrQ35mTbJn3BXCraQoej9bUVyAuiUh6UQJE58y8BvfQznvEW18MD54D1sjgq2CWEMQvqbDbyp2KTSwRZghrG",
  "key27": "37nAsb3dRL627ieuLEV81ZErzE4wqdKJfthXPJEQyH2FGQSDjzh6ghPny35WFka4BDgDPVuBJrCNLM5RShtc62gF",
  "key28": "5oWHwJYibhB9gxdobA3bkx5X9AL9vu4zvvufEZcNPjgtDBCHV4GgeyHD7kndmSvLf7FXqf3KXzanXXrQgT3ZY6Nj"
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
