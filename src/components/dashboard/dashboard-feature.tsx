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
    "46gdzRcSHmRx49vBEwWWm6tQeRJF9nZUKLA5tMzc9oXRrErWQ8eKyvUxpHefxP1rGrcUxUH3HQGnsS6yA8DkUqyc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jPwxDFQzHC5uNtuRhf1Gx3yTypMQtFYU4712vFR9rcv6f2kCtWpRk3916gKga4r9QxKdMLpYCHEU39sgT6SCqMo",
  "key1": "4h9btLV6xkqyjNSkjiAZmSzohNSD7Xr3AR5Fqsb9Woo9JPYEqrPKGwXMjfnmBfKkpyi8s1239w8FHrXT8pg5yBZF",
  "key2": "g2XfQLQSCt9Fb8Lu8FtF49a4Jpk6vu9m7g71xotSdFx18oGMjt7jWkMxVXnuJKHDwmxyV81bP7GnTZ8AQX8Qm6A",
  "key3": "4oBjAiLD54LskBEYYzkusCk7W7KGuugrcZWAyw6oXVEz4UdqLyjifA5v3xxtTR7LrhujeCuVMsZamhcsgwBXH8ej",
  "key4": "42WHGsouzt2QNGzYYXHAdyABG7s8EAtG99J3nch8T7jeY8FYRi2nqsyRk4ExCqdnDmSEzgmStqCGuf3guejuonv9",
  "key5": "2FfriWmf8Dxi8q5tLyBcEATYoLjvE3dt3MaLWVa1Z3uv1tXWHq2U5Yuitez1xXRGhLPA8njMzrF1iNWF7V275j47",
  "key6": "29rPuY5X8mEo7hLCsk2qkvBSd7Tx4k7jm4B3QCPRUMyNwzotHWDYbVkycfp5jQz5ATuaxmZSh57bXrgzNJ5fezp2",
  "key7": "5xd68rgVBYb3GAFDfYGiKG7tNEBJcG6d1m6YQg7tUsbg5NLxQZwjtqGmcNr9WjNdUAiStD7sCrbKpLJD4Yq8YBwH",
  "key8": "5ToBhtv2faw1GMeqokVAEsAkFZFYfjQi3KJ23qdAG2MUTqq23S3LbgHgZ6VEwhGH9DSj2FRAb9tdQ6HpiQt95B6e",
  "key9": "MUZDfHPyNygHY2gfZXMpkr9HQNhcduV9EGUgH6tpiAW6F8QFqgm3zXrRfASNjhdwg6e7guyTpYmh2aa9MX3ZUXd",
  "key10": "2XH5KnReTPDT1Mcz52nAXH6NQYzDk8UBvtprJZNJ3NPGQnxWrgnAagvyYgzYeHAqpfaQJgrnR4F5wMTATi7R8VuU",
  "key11": "41ZnQDU8fTuLW4BRka4kxqdNPCBt6gLwFqVsyVrSLSmSJrGNgCyhMswrkHob3HrfGMzGmAvf1H7NufEVtVJDCDJY",
  "key12": "2grjGqdWDP6bmQG78prwDE4QDxnHXPG4rJksxVzJjW11WZUzdLX9AmozS4s1V2kNPJMaxLgr2JPpnwaEpccZ4wY1",
  "key13": "54dDrq7LBpy89Mgo7XC4G7vCLri5xB8kw5o6216s2gc5wGwy65nzdRFhJBs2tRcXxjuKU9qZM8jGk4uhPeYXfgMM",
  "key14": "5dnLm9sN9kgC7AVBU2WaaG3dB2oVjnaqak3dD8uZ5p6kd9sbGpJc7j5RLN3FCkwwXhX4hmfszjeehmAiCS6v6DHB",
  "key15": "3whL4yBfbpE8HheFHxZvk4yW4LwyoJzUnq2JfVbiddVh8D3v3yRt4VmtYQCi3ZC1daVa8Rk7xuorwuk3rkNgpUa5",
  "key16": "3W8fDQb6ZP8KzEPePEs7Vsxi1cZsooctVafMw3pgSoxDp3NtWUdZBWUCpmZBd3QR4fiWYouUHd6MWev5YVkzWuVU",
  "key17": "3qoTDctxePv4oEVg2uENvdn8vZbCLqkeQ8pAf2nwe3bBRQEpszSG5xCiWHWfLucE9KAUPQFqXjPr1GpTcH5WDsh3",
  "key18": "4D27QAqWEFGyUeM5LvxCNXdue6d4vbXKWWU19wm4CfEtk13QpasDQGHphbbWcfieLyjJbQPcNSBfVMQdFJbMGyYR",
  "key19": "3wUstihgJf65hfJT4pHenGDP5FPCoCkh7KjtRCrrrxpYK8f9mYSsjZ5xoPv2xfs2Wo11j2nPSankiGDGyEgtfoYQ",
  "key20": "2gC7DeF71yEV1TnF1viKTvK9soaMoSqdhwFT9s1TfNCbbUfjU6ghf99wX4hHw5EFFSQj2Q4rWiN2ByqYk5b41q46",
  "key21": "25LLgaYhLvE33S55aUst9io5nv3y9GFJEB7JQP5i33rbsyCbJzNevUxC6KVxC2cPQCCNwUNAhdKTA9EuTQN2Tjqu",
  "key22": "neEJD4n48yUUGc5tRTzGnhkb34ABcLqeNbHQLTPtwPPum1EYyAKzijiyEVuYgAtRmAvySwXbi16GBCQV62XcSoN",
  "key23": "4zzPN3kR4evbRo1iaSKuwmhGcGrDfE5xrGWvfeDRaJjRvuQJNxmqL9k5AuQJPPNFe4mQPeUmnFBR9mdgJTCmiBWE",
  "key24": "5xNtc84LPQyuacwwxD7ivD7X3Bm9pGLJK81kyfQcrqWMV8QBJMtqjwbh9A4gF3gSk5RmTXqSYkKNEypegWUCRT2D",
  "key25": "LJp3eAE7oZwNBQcdm6u46TVHVPF7A6D55r31htFqrEuhFN1YtXxtWusdPAMWnXbP2kNZXBCvx7wp8xz5TUjEn99",
  "key26": "5ovNDpvsz3m3iEATCd6J2U3n7SgV3SpUEGTdZ7bCAPwyVhM95bYsJ9tPGFt9bKf1MEbcweFWL8zVLZv7r1XJkkeL",
  "key27": "2Tzt2KdPMwzhygHR9jK3inkUbhppSiCGH2yVHiaU9yRRNwfhymZD6jKSAiQrnWSo83j4SUW4P4wnABV6TmWWDzGY",
  "key28": "4UPeTn7J4tj6LcWk7oJG1gijiJgK7cR738D38CuLKJhFhf9KxwBWPz2qjxNLU4tghvkeD5tBNbPe7TWTYJuCFf21",
  "key29": "4vsJ1MtZekgQCyffsW2eKd796KxaEt2DfUJjU3o7a9dph4WigWhTkBFPmaChXWiURqXLnaDm3Yvu3APJnXcoMZmL",
  "key30": "2T2zyMG8LGYrWXK1ojc5NhBbS3SSTZAAwWJPqWzt2jQKDmW4dy8nxiibkno51Ecnc1j8C3ssKEuKb9kCfUaVAFuC"
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
