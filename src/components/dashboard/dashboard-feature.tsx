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
    "2Q2bSMhPpoJVoVU3FN5TUohCiSrcV4wTNEdTEkDAoZFFANNQVfwY3k9bqDXToW6Yp34VaYJCjKqid9f1rPn19yso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uHUuC8mkcNZ69GJgAP7mo5fbfPTuEoAobFDkBJ8RLRrSGtsUFn7CzVgfJbB9rBqASXHc3JLrWBnoPzFZnDJjydM",
  "key1": "4ZRQfQxdfCQ7x43kWHVgLmQ9FPcBpCqA9noUPEw7fyDhx996HU7TJgHJcVfjTQHWpvYhrokKjAJsmjaWnfU627yu",
  "key2": "66H1uMgwTXdvWG19cWL9HwEY5YrZfnUpPGg9ds9CF9cNnCb1umMmDCUo1joPAYLJCuwTaUL33a8v1u4EpfHFPEw4",
  "key3": "5Z7aqM8NUAMWVzZXuAbFkGoYp3t2DnbSAYsQ1bhmfLST3FSHRWUGbQzUkmJYqPFnXRUhyAGkaMPm651oU6MEF28x",
  "key4": "5MtTNcUzuGPzDSVUwLHEqmsqBQ8nkSuSJW5gxwXZZxq1VX9VStR1NbvCx6dbfkSMFDhaTop9DuLgYAcDuCPquZrV",
  "key5": "4QpxXxgZ8Y5DRJmuEEGsRhFi5qhLdLHcjJ3pkUPMnRpYg86g8bXwcTuktZLTcRheWAmDEQWTozbqydCNTqdpKxSi",
  "key6": "MFR3Va9WuvjxGUDgYK68ZvdJcxidJV967fqzabuhhhR5eEgoCJ1xiyK6yme8Qdb6837grhE4JNmF59KAJ1phxZQ",
  "key7": "2bu4H5j5Y6uN1noVes9KVHBbddu3Esx2QfnYYC4F4HHhP8aupPfjfAsCfTEVtQNwpjcDE1UeAtGMVx2WGCPRBCbk",
  "key8": "3SYoPZsdXwUhptnjUFTz97RB6fWAAgsMjUdzXCvm1EbwspDuCsuJTw2wS9i5EEyPzd55naX3tK5KwigoWjYZDUPk",
  "key9": "aSxvYswft1ToAsHJubU15V37pL1hTaKtA2DQVJ6U8QwrmBvPQQLDCHQNLF3EaAZ2mvTdEGYdMX95J5XkgQBfVLs",
  "key10": "2gksaP59sDPN3HNUrrLxWrCekZYQTrK9km4rNVqX1vEv6i5DFmKp2gyuKyEaj4jX7bbwD8dQVdEUVU3cKKfYbsfn",
  "key11": "5gykKG7DKGYZqoKbjtB74bh8J1ayjQN9xQ2QRpoRNiGrjURxhRj43S2y3CCdM736fFNpYVutCAfirFkPXTySyuKE",
  "key12": "4yiiKKW16gmv9rZA3g1ax7uS4FKfo56PhFDvt89ENGWYU95pc5YKoNq9swsmSsxaae4as5sTGd1VwnqNaKTyNFGM",
  "key13": "4dERWhLDE7i4UP3vtNfPPwMi72Z957cPYzUajTeadwEzug7DmxhZQzh1PaFrgp8NC19aTtG4pYbeR45RRLFeWiiX",
  "key14": "43oiXhrstrso3gkZi2PBkS4qmBaM4SMDiBRMqK5CHpBbBjuaXB8r4aaEivhf6J2rCj8XymuFREuGoTkUKFwFQbJg",
  "key15": "4dccqwKGBJKFju1guqwjKzX1HCCiSgzGC9o6GfeJ3YjNqLMPD2HF4dXxL4fkeHqwULMQUxSS1gGytwtqUGX7L8pz",
  "key16": "3fRigxEmo3Rq8WJKL3dMuu87ePwvCPqmdsa6iu2JeX29Va6WqLQPmmbyqzSFXd7F1Vi859rpZ63ryvbPjWZuvz2S",
  "key17": "nEGvKvHAUSEf6FdvYu1ZouzNkXjmcqYSjLYoRRywrbWCrqJudCd74vyTkhiKDYkMj1CrfjqnbzQL23ggPFVdMmF",
  "key18": "4YyXgWeEYequNBys9YVQ2GqEiuzxcWutxbNRjxbg5VkX7rZEGxVjA2qwqbf66JU9hcPuZBgYmN57bzP3nCdKCYtz",
  "key19": "zjbmiG9jMfAjbQPNdZ3JqVAaB7xm4nADsD26ohrtGVLT6iX5g33XdLp5QVdTRmVtwbU98sPxMjP2W4o8qYXAh4p",
  "key20": "3jQDC5h5ykuqqUvRa3URBfcNuqYywqXXeMgStTmA8KUUirnbpMnEQbchaM2nKU5SGVv5vdxdQ1auS4Kh5nd6z5Pn",
  "key21": "4gD5aF9H1eQBGxihU2QyjcwQGJri12R5nB818FuM789nCCWA8Z6EyQ72PH1VkFpJeyhi73pnqMTz4zEUMuSjQMWy",
  "key22": "2ubZ64t2ei3yw1rB29kKnXXeY8L8ScfH1iJQeUt2S7VRjC4SnJwp2ssEkBuTj7m6zc8KGWUGbqnzsiuNFB2SUJJc",
  "key23": "2FDg1PrZwHqDoLwuiVqCAbvfG42mjA9v79QQtcwa5YKmBfYj3RZBN7iGDARAs6iiDsFs36FU8M294kqC24iooFex",
  "key24": "QE7ecSwUjBiTUCeZZT3weu6Y6xDuNDoLFgn6vMwint2hxBuaXWLF6hsBCvsasjFnWs5miDtARba12Ju2asBd1gv",
  "key25": "AuUTuHxKqtSuFBRR7VfscJ38GWg7iRLDEwPWRSPoWRy2ygCnibjqt8A8HQFPfAHu9TWMVogbWweFf43jhxzdaUi"
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
