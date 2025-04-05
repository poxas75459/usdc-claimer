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
    "2VngDSPgGPnzpNmeB1nDjTPjtN63XZK8DEU5bfbXnbDqMiHeq3NaFXrR9hpU9cjFNuX7WwDaYWVUM2wJjZdSykS9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ixi7t6Lupj496QNf6Bfm1YhXNcxaJLEABZ864XT7voBYMW4yk6zVgnmaFdXR9sHmLJDeL3nRgbLHFZ8cQ8XAtMp",
  "key1": "4J9a7gCgXjSxS1vEbZAiidPNpkW3S2SCYSsbALMq9CJ8SCYeTQjM4rnNawpC2ViDCgL7C5C1eeZ4a2wfUQAtM2f",
  "key2": "2mMaURDsp9Q3mxLpqQZbeExWBBANG5xGuNa2JFa61mphygDpuhCJfN46dR9d5VeRi2eJLXCfECWEWmoPHvmnuubJ",
  "key3": "4ARYQAUFVZBTSGF9iCi8UXnYN6hHq6uDeCC34sR84eduGNWpxEswFw1SkME6dpxkLDMkPd3p5KJKYmixAbgjcZt3",
  "key4": "3mEbpX36RXxVBfg4nBz71uQJFKLJMJdsMvpFXmw7Y76cpU7Kd87S35czMaoZfTkir2dyubZF4F2uL1nNvV1XSVwm",
  "key5": "3RsXHL3x7WwT8aR8t9tXHVTyWjEmihJVxksf19KCFgcSvfBETvB4JL5FaRZVFfL4K2yqECV1m3zkVkvhcjK1C3yg",
  "key6": "3uHDiYda6TWZs7su1EUvpZaGg3UzesDmNgeMsgg8BPjsnYhch4Z7SruhSAeH1g8EYnNauo2gwkbYYoBRQoCk5nGP",
  "key7": "2X8axvLC6mkwLc59tY2pm9eis8ERn3y63TqJNgNDwWRTndvHDvHaUE11uPB1aNJbxCaCmLxk8EfTEGB2prK6k4wM",
  "key8": "4WTLZRhDHZRj24v21HtjtiVPgCJ8XLVGwV7nw8Xfym2J23srWZhY3WSnWTeNzTivoEAPwg4FHhu84LcMdEwjL4Xv",
  "key9": "5SdfLANJTiwkzccxERNqckm19pJXHWWFkRiUfpWoUezbsZG6hCDN9U4uxTKQc6CemtXHjXyqxkjvnKrWFsR6E75e",
  "key10": "5o71MDmunukPzrStwKT1WxzQPYeP86V7iscjYeLxRiD6MpPTkVJiCS1Aueg4K59nQQCza3UAWCjGLcSVYQEKL3J3",
  "key11": "4ZtB97iHs5Dvhdvc4kmKYdqh5iqpjfUr9ziwDCvPdZ88TXLZQxxeVKXHhVxQ6sWAFFU7M4aE7UB7FGuq7gqZa9G7",
  "key12": "3oVqQ8WJjmy1w4C4f7XsS6PeDbrv6qkJaHWeWTyZwSdCPKzYiJQhPpPJozQgkd74feQknZwp86Bh82nUGEaj6xLN",
  "key13": "5o8FExL5Gffk5D8hnp27542tvERgsyow4sLuPCuksbPH1fDtSz6o6uUPvyNmjCvv3NqYz1sWRxBwQPV3NWAcqxg7",
  "key14": "38v3rzzV5BbEhgLx8TNMj4emTAM5DeNeZacWEviSPQFEvDakeMypEpDDR7H3GaZSMLK5qEX67PM1qJHYC4QprmwQ",
  "key15": "4rmnJ5n3ywqJPtKAZv5u1SobZqCE1Z1EBUFpSSviFFdvFRxhjZWPvtFJ6h1gmte76sVQU755APL3JCvRJLoehJ54",
  "key16": "4mvXe4nbAG4pVvzmCqrTVK25qJcAjWwuvFAwPvJX6F4aLwCYDEte2fQqUw8y6xrKUePPNq6ERcSpvdr4C7y9tvZY",
  "key17": "2m9gHfvUsPehJpwE8oYRjNfEwTw8Ek29WybYjKmuWViQVQkykd6PMUs6mZnNgTdhHngMJiywg7qrvUgHV6bPq3sx",
  "key18": "5wDY1HrqUqJ6xmFjexeH2NwNQzW7QeAJaWYggKaRMUfNWQo4yETcEKPJXQJHfhf3GE9zjAq1KmJU7bWGTCJFJfEF",
  "key19": "5LNmEV6NAmUZyDCKKK7AoB1eXoprMQde9kXtKhQ1g9vLZumMD35HzuKWL27KEBeJEWER18p69ZRpt7veToxrWB2s",
  "key20": "2GDg2V1uKEp9UsG4TaH1gqRSCYBnM82hXzR5URQjwwoyt68oMifss9pB9kEi3XtNZve9wHcVhtXEuLr7ioMSHmvK",
  "key21": "5QfWnAm5KNYJ71zpTbUMxC4mbtm6eMKJWtGFxhfDiny8hosEYKaVY1jhNqRiPkrRsjrsBfjCsTKV4c5hxtrnS6fp",
  "key22": "2s2S5tQwbDuXVs4bX9YNexEXf7LS9UFRceM8dBDTDDP4ZgWBcrdk2H4AX6pptpdi8ccwF2hCZMvhMDEWCmeKdMJU",
  "key23": "5mSXBQFB1yAvMAa3LzJGdpZ3TZj36fxSA1gZdc56wW9sSaKkW1wRqVMYhAyMifV3NQSYqskKLgHT8VvsE6KXJmQH",
  "key24": "4BQvtgLzHUJQ9ES4jjQqLscKBUkacTTRfZ182iyLdDpzVDjkwvR5MPUZBioXeDmvUphBDfP3KjQ8oW5Xi4ZboZdS",
  "key25": "2nFEAiFeKDny5w3QCMQp3fwQwh3saXZCNPjBn6rL7o5gdGsegSrVYriNS3cVzMkhgdoPh1xrfbQF78jSrfRjkP2x"
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
