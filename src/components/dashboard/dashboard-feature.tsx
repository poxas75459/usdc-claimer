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
    "5sS6PZ9FNcsscmff7xfY2EP5hHm5NRVy6xRnYaoy6w1QEPuTf8z2RBfBXaN3mSXfgoy3dowFxrKnY8qRjm5xfrNw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tDpdoYSdRNDTGNrRmZBqXWowerER1iaeSSt4gjX2zjKViDY9mnLwr8X7BWC2SeDsqXuFC5PpmfiNUqtbc7sit42",
  "key1": "4AacgeC5TY6CMvebZaQqeccwouoBrA4YRzKuvQe1LWvKHiZyn7x21ZRnTLk3V2awS7BTY86hvARJPciH3HZuvT7s",
  "key2": "5Avc2rZNfFB8yhhXrmg1RbVBfr3Wd4LeLnaAiMkEeFEfmmMcxp3jpe9GWTj8PyCLNRrfTcG5vPfayt6EGMLJ6ria",
  "key3": "2gCnyEdnA1tBup7bY5eZ6PD5dZjSWJJGC6N9ynEcMM5S2cLZZ5pwAHh3Z6WyXPpjr87xARGSVMkd9K3QLZxetU8a",
  "key4": "55MUPRzXyxLU7WrAGSk3UUyUx1HWsWbDPCxBd5epVQHHcEN2akSwSyuu9sZLRypgL5ta5UmRX36FZ6uUaLm1QRJw",
  "key5": "2Z1CYMWzR3oPyPdzEYZx8PLuWK3kNQWYPGE5evNgj8dUuDYvK9vUNo8gkE5vNoT3dxjDKe43vXfor1LZ7jkfegav",
  "key6": "T6GTB72tFBJhYGT36c1eWs363t6GV4Rz933nGk97f5qiHNUousqRCDUdNiy6ewaLxME5EhGLSgoczMpAGJz8BRX",
  "key7": "3VVvw7xyTgHFcsKDmDCVsv2XAKRhKbk8KLXWambvwcdhKbr5VvtyssypRepKreuAvxnV221chAz1pC37etunDPfZ",
  "key8": "3rZjZ5MZNjPLsnyUUJt3x2t1mFtkgXragv2njwAfp9jvRxxFN9L8uRK6hvxbVFcAgqhSroTqgbTjuydc4zKCNYKz",
  "key9": "3HQgcwEskKnrCMHTJmWetbRpGhieAZtF8EQ37vUytNH4JPLNDqgGmCtxnrQ8dRG6dfDde5tbiLrS2rXVXRpgxcD8",
  "key10": "2AJc7emecWuhU1SvorN8Qz6GvnLLh5AW3ghiBb2x2XrJca2Ma6KqDwXiWmpUffFWjbtaZoEppfjX1eqsQ6xPEzFJ",
  "key11": "3Wevpi7XHF7DNC86zUrMPoEmF2e7bKG6J225aVFASiDFZzHxME9M3bBCzPQfeToofxDDxbBHXP9S5hnocJBbKRPa",
  "key12": "44TxDzBHKC4LYH5ns7RRDj7V8jpL7jaKmmdhvL3iZLzdyUF8rWL3NEdAzjQwhJUQjV5FP9L45Dr9pawbLBa4qHqL",
  "key13": "3oPYun1fPbuUz9dsXGQjrm2q57NenpNfKzDNMtjJS5rz5pztM9aHp7BLh2qwack8WBoCzTqbwrovCQ34g8Lvbs1J",
  "key14": "68jD5oPqKBUwuVaGLFpw8R2KrZqP6e3UXbDrGJwqeyx9jqxTZnqJmeb5ifLJDecGyRb3Txqk9LXjhK7muMeMSEd",
  "key15": "5t3UtUbRbJK3W4fMEBqHrnoED6cqkDN3kSibLTJ2j54Qakp2smiF6UWRSHMxjavfex5e2fQw8VsLALgA7chpAGTB",
  "key16": "oeMT4r7R3kKj9siHFMkMrHMWz49Ggt54qpbeo75no6G7dXeeEbzVizETRctYA3eFTWAC4ViWHK9PVAqC5zQMYwS",
  "key17": "2qXfx9rg5u6gyQEmC5UUXmSmq9JLGKFSzBUyHNaNjyN29kjbqi1cJYAmqNHbsvHKhRRHHQijwo2cwH9m4aaP5Hv6",
  "key18": "2yAgb3phbLAURdMaxkdcsayvM3cqy2oMTGUaXTztWUM3LT7eJ3KRwoEbUCx6iHkpTeZgoHU1kuRTBxTc1yCYrAUv",
  "key19": "KTNKPMCKZo8XD1Vuasa2nLGwbUMfzXL7AJrnpJU2wrowQCgotknPkD17o33WDNchBxXsQTccU8izBpopgrzcDUR",
  "key20": "3u2ppav6w4Ab75AgGSNJQLZcBWHWNDbBeUV9i5BavrH9MnWsuWLNbfPH78ZMyW4UQQPUm9yns9AYBRbVtvePLnqt",
  "key21": "4kgYy3LPfmbQyc6RMgPwfuaVXx4X1yRvSUpVquLtDcBioX7FyMcp17FD47kE8G891x77JTkTVLUQEAsJhRDUPNrK",
  "key22": "8XVY1REN5Bax6kSBcRhKKaHYCBsnmYZciTbK1VzoiHBy8AKnEmyea5PiSnzULEqfWrcxLkPVPKuZa9ZknjJpg91",
  "key23": "4h9BW1rrsRL57s1vhv9sSWGnxFT4renm3WJeAsCBbgJ9CmwqYNK6jBNeYxcDHjkugSpFJhzZuCVn26BSYqW2mBcB",
  "key24": "43c16dX7nczVxK6WAMLAci8dkC8dywkw6exWs5Umd4hUsqYA7cUz7Kzj8U6heUTTajtftx84R1UZCjWA4PWY7PRL",
  "key25": "2bFL11aGeKgqDHDRQboQzUb6okakauJX8aFizwQotQ1oZd8ZQ4a8RbYPbyaT4F4hvxt5Tf2efR6MdE6VQEqd6Xr8",
  "key26": "4X1TUXN8SZNA97SSnxBvo5SLg42dWJXLeFATWh3Kp444tzqH3kMxsZniDqgConod8XdpbProz66PHFtn6o2G4mqX",
  "key27": "mAZEkgiJBLzYEfzNrG4q5rsSMdR2KDMyEduL6qiHiMHsNNydWPHUL6hYi8Nm4BsyJ9sFtVC7BkZHtEk2S2evMdA",
  "key28": "4dFAAzX7WcMKKBEHMHRA5W2SaHX36aKExTE4KRadBe1WHHwF7X6MevsWVXUhZ2uRr54wUfC43SD1yP7shtx6oA61",
  "key29": "2yxdKUPhLtqQbwxWYMVsWMewcPdCmLqchr92mpKrZsXnzUgTFQmhpbAiCC8tF8KvYtD1T86SqLXa8gAHhZyvsQ2F"
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
