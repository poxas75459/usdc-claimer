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
    "qUYvu4zJvrLXZzdMG8gae8mFs4jnd4jcTcswzoy2ZTtN4Ywky5BXQhnHQKB71n3u2mURmRGtpZYKiW5Rh9WWb6x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CQXnjfihz6bGJZFZb4qa7v3te5WnvckWf5yLG43MCW2uU3P1GMPEEWjhz9DxHejFgEPaWgkbWX6oMqCtps69284",
  "key1": "5r4Bqs39HHtwzxAKkpCpxxQTWV81zWGRELpry3THMZbyS1CnrH6Rtn1iKWZvsYppNY5J4F6m7TdrPBZ1VKnhs6Mw",
  "key2": "4ZfcbWAGfqp49xxurCkfM3Qepc76LooDmXzSWbGhRLhF2sh6zUWawgZSUPWti8BCwRFy7Hx7ik8KFBGAuSRt6MHy",
  "key3": "3BpRNnYcnUn9JckMFwqi8JYxnTbJbEhjLxe9rNUDqcgWLiyNghkor2WmK92RoKbVQ5VKQ46rNLpjPe12JAXxZgar",
  "key4": "3MyarizRc4L4jeQPRpgzTo2wWhcq8JPK1JWA34v9mDU9UghV1vE8oX9HqTUx67pAZ7wKEenBvdKqhCJWPooWLrfj",
  "key5": "3hfmbc3amyGp6oBKXPKjTCD6gk6mEdnQ5ypksH5Fkfh8LZeWxHERqtAJqCu8TGXz4tAxuNcZchPthvBcRAoWgUpG",
  "key6": "oLqHLdQyEgnHwUzukLvsq1EJEN3h1sLdTJcwhQh4nY1zYUt5mB9XdhrXYatkjEJwpm6TSYo4gvSmT21p99Bc4GU",
  "key7": "2Mi7jXo5Wx2R9wM3ayrvVrDaS5QAVSQ6GacnC9xHscGfcdbBGSjg1WgE5GkkFWK7kVwUu8Ln4tgVW1SjtqyiC19V",
  "key8": "5sdA1pDuV5iwQTeqZzGX9oaxLpVV7XDMYRMjcjF1TqXJjtMExCVGwnG3hmSg461r6zN1QnQH6faGiKn8Qpi6zUBs",
  "key9": "5kTo27XD4DUkF9W3ZZ417WQ6FtoLpv15r9HMKFB6hpQdguWhCxeiQJKMJrw92X9PLEg6LE1gANPUoDyKghpUjoXy",
  "key10": "pqBbEj1AQYK8AztreRiqaL6oNfPgvTEu5TGmeY7X8j9LgP8qRHqcj9wibYRd4m9WhCJokm83zeCGy6F48QCyhpa",
  "key11": "5yBaBKk5ESFQubTcJSNmsqUY9vG1WLwLKtRqcR1LxHAr1LH92NbWZ41Edvc3LgqfNj9GrnTa5akhDKUkBdAVucqf",
  "key12": "XZDkd8AeHW8RqmtnEszvktAYX2kYqhYVTSVxLkBMA8bi3BtmhFqUmYwvHbPLtzNtKEiNkjfVnVCwy3Lwqz5AvYo",
  "key13": "25Auiy2ZyEGXwiLu9gQNtbgK8MQXHZwGNJrgGycUKpXZRGS3BWzFBmh87AVAKT45fkQ7jmiYdudyhet5MsdC6pT5",
  "key14": "3QUTzpbWfvq78mhzpYmTp3G7DuSuBtLPL4HmZhSrsxgxoFiRETU9bzvzqtTqUVSqVwJ3oJa8Neob5EBoxy7MyuoJ",
  "key15": "4FVFjt1cu5ehjY3vC6uaGzUMuDxVqpmmHdJ31Ak1P9DZvXr2uKPWTxPvJBt42fSbG7VSsCDCcb7fKJVqLb6YvcAk",
  "key16": "3ARjaKhudMjamuyFcfBCKaUwWS3kuyi5DTiRhaHwV7NWiPh9XnLzwVqCmjivuzdn6tPH6B9hR7FJVJd5o3u1BiWe",
  "key17": "MYHgH6rEuDyxPBWeUZzNXDnKXUUt5SmHQXPU67ZYY5mTJJQmcqcG7GFMDFZ8CmB4Wzwej8kcBge5375FM9g6DBn",
  "key18": "3EerxU8d2Kjc4DVmy8facqg4C9knf8QE3EdqcRG4UrSCWzjSCWX32gAtLsUjKbHKDJhPvjzCP2BsxnmGnZoSRepR",
  "key19": "2as2dQs3xJxnQdaBSJySssCsL35E4uetdfw8aabKCLEVsd6sHWbhhQwZhqbf1aU5ANsL8vkeofQuB6qvKVjFwTh8",
  "key20": "336Q592DZamzv7PAvuD74gevXrGcqpqcpfnBuyFA6BqSEDJvpx3Pz6LCCRoDDDaV6ZvCEvHSe7Fc2oE32YsYyvsw",
  "key21": "287HgXTHFkkk7uogFZcsCNgeyNSBM5URAP9WwCcd2ea2Q9LsXrLzCKb7yUf1NCUaVsxS6GtTDNBBxPGvVbnZm782",
  "key22": "7zLHJmubjKxsZ7eQtaLv65nXJikzgwodDrrM7aEftvBBkwYsPBWDZytM7Eaw2zbXv8n6D9p1N3TUwTzsBQwiRJB",
  "key23": "55ghzWp9DMEjiiiJkjFAxiEXzXcL1YtTWmedEeHt1yub6g2vgdcKJPvhfijA8sJ9kn9vASaTzhb6mG2DegGV9h54",
  "key24": "3YHs6ztZeACcXoGTNzfCcZ6YXZCbPLtGsmzokK93fuhUaEUrquQcNgbs6RYseJrqu8sQiWs57dTRiLcfY5W84wx1",
  "key25": "29oMzdKRZrQCR6MpAFrYZzCsgVAjQomXSfT7hz594oGYSPxxRcXkuezggZG1W3Y8otwCDGMF3TBwhe9LwJVCE8PN",
  "key26": "3xXxjVfwo3eKb7G9nKAyzBuu5mnrBgKvSxRmRYTpNkanmWcGLhKgtHzPBGk3WW3srWFDaWETZS7WGwqmXLyyBChG",
  "key27": "2uvzQEakQ3P9XKJQjBcHW95NLinhqMuGCp5uVkbrF1KSzMpUr5qZRwr3AHD6HZwAz7VwdZKzSdsF2a2SAbimKbW5",
  "key28": "3FN7doPLPLdQj26Qxq5ttLhYpqqM3Zpu4cd9uzR49XJNwmnPRDpHy9KhM4Pd3kavtBUrGTLSBXUzZ8SMgsYspwek",
  "key29": "2coPqDDicHdytRuxKKMS2j2WEjP1GhaoorNxeCzLdbvJSFvh9NVKJoz8aoS8dTMUfaLv3D3XmADwfCm7yMCvKjCF",
  "key30": "35DwUnssHnX6rYGqtiBKa1Ze4LJSrX5nahRhFbNZtp5rUcRVnyD2j6RjJy9rGba3Q3bAfJak1PM9kZoz5xKY6hSw",
  "key31": "v3f3wJoJ7BxNnaavCsKVNmujoUBF8CLYY45faVWkLRhwzsBXWY5vCdPHrnoyioW1TJAt7jnxedstR8iRYSMFSVi"
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
