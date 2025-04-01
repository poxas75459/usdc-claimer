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
    "2hUKNLoSyVhzibdz3Pr4h9P7byspRQPM5HXcXYRSWSFPi5ov7v9J15DC5pUdW9FvAxfVkt4JbBw2jGU2RWvJkndy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wteLFypai3j7VBHRh2Sa51kSEiVjQrpTx5PAXR99fRJZomxUnrAhRZTy5gq89HtgJEDgLB4XNuVe1JmcvDS6Zpg",
  "key1": "2QXebmbex2HfzMsqdKYG8nKiH4Qu3YhDyKyYVr58VW3FE8Vg3RmvBHtGmceoeZPbQbrhHXUWPCXSWzPZzoN5c5QH",
  "key2": "2Ex2JfeXcfSpAs5s2jvBQbQohfTdr3LPFbQfS9deet3AFFpjf9LJV2Vce7c2xGXjnLJQTLn9KMVAAjd7nSh7A9mr",
  "key3": "2AAU64evBjYvKkizjaEXqdh9oMFrsz265WkeiNx84h1EvuhmNJcuifN7bnyufhyEvMsqd4xMu9JSZQMN4Xd5HEQV",
  "key4": "4j9NopEUcsDVMuJfkfiXk4LyJGeicXmMJRh13NULfVX6DJWAYWjXE5ERuMTxtGu1imborrJ1gFC9zDCKrPUupyLS",
  "key5": "3QyqT29MAUDUJ5cwsToSLFdMNUVTzUj6tf8vmmgpGwwikq17MVVe1rktJVZfywaAD3mxG26JWadssvrfKhBLJZZo",
  "key6": "4t4eqshm1okVeoZtEAnJZFyoG8CrzQhrB3diYDJZWM3vCT8oJ3WJejUKaurkF8zoZyaakCiih4sJwjWWbiLoxCmW",
  "key7": "2bsKPazPt2EnJNFXQjfJtatKbAsrvN2YgmUWWTem5e99u28pk9gde4hQwVEoi5CyxFHoRMLqtrSC9feESUczSxBm",
  "key8": "4SaKEWkAjjFqxx8eBXUQrwwGVb136XqAJ73sGjP1a1qrarw9cBRkWFN2qS2AdJjFSK7kmw3ZipNie46FBgDGcXVg",
  "key9": "2QdTbsGMH3opYVgJzwceDDQuh52TftoFj5qeKeNT68dFtiUZd3HSFHtZMSrwtRpxmtVYdVrjy1H7GiAjcozfHjZY",
  "key10": "59zGMnEhgwdPU9toGPt35wpAwqVzt3ejwEd5S2QyTtEDkuQi39u5rJqF6U2D3TCzKkPLdUNnRRxT3wo65WcR5B8L",
  "key11": "3YWVNpV4ekFCaDztgSv51g2QQhfkoEH7joc7B712jEiFGRs6wL6pF3KJJr2FXPyNsGC1mKo8y2DYLmn8v25LBfT8",
  "key12": "5fiwYRggGxC2mai9jrSrU7xSUQNgXtjApZwZWJszY7ncpb3GV6B8GoJX2aVefiDPY8e8iwgVvvop1hVg9odDjbx8",
  "key13": "2tuZSB5HVZTxHCWirGsysbm3uY9Se2vq1wPqQitHxMkp4MdzjDKVZu1Xug8Hhzk62Ep1pKYXwWraGgy8yyzDe4tF",
  "key14": "URRsuLsMieZWD1ie9UCqtgjdeeLj9o74oLJ7E1z74BqGC71CHfxgroWw5cMerD9mjnXwD2okNVoayEjD1QY1SEK",
  "key15": "2d1Ctr8ijpy2xF6md3KS6tiBRzX83oMPYofqq6owShWyfJ9iwcwGq23Vxtjem6uiP3Jk1uZvG599vJbVCAT4pvaJ",
  "key16": "5Y9XUxuUM1GoNGAyxrmeLvHz37Tdn1CpXN5uaDCMtk22odffWVEdk1bd8NZpu7e2oLRcE3th8UXgAnckLuTMySfu",
  "key17": "eaMfCpyZs6cWDChrTMcm63AaCwp5n2pGzq2nmGc7tdkGmtMDtY9FNEm2yS2Luw73LtApSQy8CW43ah9RqAwb2RD",
  "key18": "41nK8F4PLeX12VefQ74wqi6ZWJfKU39hG7jvKB8E79NMA2vFMCZwanqEsDauLKf6sLkCE1min9QMScsWPLn97cfx",
  "key19": "5CvWB7dn25k97kTGUbvGR6jCsUBaw8yGZxNRz54qKH1ZqiMUL1qUfXRf6r57PusMMxc9BZk3khDuvg8D5ZWh4mnd",
  "key20": "5B5TW26B9d8pKFHxrH2gpc9A3ZcfYmjCyMZFxsVSKG47Jbae1ZJqeQNr1AjXbw1emd1UZb593FghFakekshEvayu",
  "key21": "3w89A6YWCeSDLJD59yX95fPnNa7GDke783UFajeT37r5vvZepP4z83Ex5VVLBuHQTjvUEaKPYgV7ohLQpPXHAPu7",
  "key22": "3zL3XzTv8rgMgQ1Y4FpxLbQxCx1noP3qQScXFoCeawyJRghond3kFgXLRUswDfsEsbviMZhqbM54C433ymAVmAaN",
  "key23": "3e6qLg5uVG5192haXtn9cFtrt9mWVgQgqjUq1dqvvVAsbsMoGBgNSWKBCCfpexeXADMK5G7NGg2tjCTd8UnM1PJP",
  "key24": "2LyxYYjy6Qmx9WPaYMU3VTuc6PcoS34bhG6s9Hn3wUhCMh49wxgFZ7kuT9ecgzuf63EvvdDeknDhi8t7ioif7Ys4",
  "key25": "z3Gz5HFqUwePfU1fNNTKtvmV1YbBekx5u78fwRvp7hhzedqmag9T5Cd1cAE1VbbJGtqrvvTVsbw61Y1F2TA9GjL",
  "key26": "3aLL4vJTKieLfBR1AFzRbEvBGxafa9R3SVuAe1JP2d1QpETGqGYfjUEPkkgNRLRU1NQ9KKqkQEfcW6Wqb7Arqn2K"
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
