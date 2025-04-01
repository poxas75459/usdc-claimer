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
    "2hU92KTVNhBGyg2Dbzr1xUWpXf2YqBNgKpePxPh1Kid4QxByiF9mR4yG36iM8VYTMPgT4rfRyU8Stoeb1LLZwucc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GJe2AAJtWouwn86tK6qJsCp4q4HdkGoZaYqoCi1Q4LfWVwG7KUzPCWLw1GK7cZERGUecoDrjK7xMf2nJ2CrN9zJ",
  "key1": "4h61NCX2jdxYAKGugjnCN1MVtXqHpftWgSSQugJFJcGU2xbnWu6qnHpSsNNd4pzBs1mhRow92PsNPkp9izi2v2Qm",
  "key2": "Wf9SPAkKJaLjNQ9TUB3HL6QUEkeTnnRfKJdDsmhBwxuQqyu1bWZKpmXJ81vdAzCpXaWVPXeMxb1PmJyRCroNho9",
  "key3": "vdFPNQKLGNnF1bPfED843gTxDiKNy2hnN5fV7inG1dBThxtH8aS7HZh36W99y78S4Mhv6u9XcQhFqpB5ZDKEbtz",
  "key4": "2zifp6Fgr5CR4A68xfamhwvYCiLjPg4uhnn5F1qU2sf7ophmjtqcFzJ3n6EpxoqLva4K82Rf5Gx4FMgCnGByCr7g",
  "key5": "EmfQMguENVUHUbCykoXk4a9mrtRTZ7ESQdmAVNqascPFP9HEhtVzjvqyxE7AsPrpiKBEbb9RBDq1rDpuAgf9ono",
  "key6": "39HQsfMTQjYxYtJTNaHSQQ1vDMfwojQyQMXPAZLezzTpgfUDZD6pdZraecKkEoHVpZckugQNhhvjusgitR8Yr4sc",
  "key7": "g5uW7ZFZQV4XvaWBjzL4RwuXBhKPJX3xeBzEwum2QWzfJJRDsoXvKGtkRNRpZeGF9dcCUDsnQqRtdXbbALzmqtt",
  "key8": "L8J7Jj9fS41YCdyemqrspv8EpZfegknqRbwc8PLdRjGJCz9npeSPpCBkeYHaRLLLJBa9MJncHLFoBijgostSDym",
  "key9": "5qSVqAz8YD1roTzLYXt9ShU1zegECjZ49nrLxffLvAVaLpspjSLtDyZtwMgDKxQPQG4oooYfabX3MwwCcjbfsUHF",
  "key10": "4MyKxUp8j51jKhcnE1SNPdwF4cmMnU8yUCKKzTaPAJ13w8bfN1sLXEivY7SPApMnQft3tw45rxJQtkhLqFr46bYT",
  "key11": "2oVCuu2eMiCFM4nrJczbbWmnXjDMbgKjhfRzNTaYeFq6GXGLVHTYopaGwqhdCTyX8w4xqsLxnxUCe56P2dtrrCXf",
  "key12": "55hiEfFwZg1twENYLejey1bo7sNHcXiigzkfRenfTFbddbJkjL65xu3k8zMuwG5i4oq2qNeeewwtcP9HXj3rxaDH",
  "key13": "3xjzRswaShG7G3iGJZvcN8HgVykH2u1JH8db7sxJWWQUSdvEiU6a68LEz2vufQatwm7ea4XotV8UjusAZGtEmy71",
  "key14": "2toHG6mWUoq26H3nQMSXGu99Gfk58znSh426XyziW4KiupBgPCyWUGUBw86YGhN2zWfZoDa2Rqms55PauoqdeLrU",
  "key15": "qTqMgWrEYuipz4j6RY3FXTxvktkSDJa313Akrp8JaHuvowvADX5aaBpXw2YXzbJjdFZNuiRkKZenfD2ieAsi7Ab",
  "key16": "5nhU88LoTKt2bBGM2D3JwYpWWpmTfou3Kdt6Q6LKZEfGiencU9dvLEeT7rYexHc35a1YHNkRhzsz9p9ssG17XzTW",
  "key17": "4K17qaQ5HyBHKoGfe7F9Tbuuzb3cM8xPKKxmD1xRLfuCgGUSf47U65enTDtXrF6JESyRUJnnw9PCSaL74n9YhM3R",
  "key18": "495LWHWNLgzypem3Kbtj8PXigfC4LWjNASGUedXPN5H5TGow3SnSj6V9qrByR1U1eqxCZEn2TDK57gpFhH7qYEXe",
  "key19": "5LfdcKUsSNLNwAP75cKEr3xgjmiqvWwrZbNU1KMsTSdQWa4hCm5RZbuE6EuoPxiY8YMwjWezUrZoiuMQ46ai5ZRD",
  "key20": "25WNQYFZuNHEbrsWZCpfqASvzy16yYhcSx94BSkSegdWvPnYa4et7mHbpkQNPpskUdjMNCbKbV8tcsok1Wv7me26",
  "key21": "351Y1KN3edzsTqnCb6J69FKenAKts4oaFi46Dfh6ABadNxKdWigzqei7HU3TbebwHZYjgToFkSbUoxkkiFnXUFKy",
  "key22": "2dxGEPDEDnxGdRVtDDzQPZRn5QWXJMkYGGC41aKCdxJ8Zp1d97NXTf2wj7pGgP9eDHMbnTf7iXbhWfkrL5mX87E6",
  "key23": "2JQfa5GtzJsHe7qmZNT3azdBeN8nCbxG6ftCKmvGWPrZkt3nTAckDu6bq3uvn8S5ZzdiTxHAUn7gnKyp2RAAbzBj",
  "key24": "2HoojenxgYrymkvk66AWzxB4vcgitmY4CRgVSzqwFpnYdbV2TbpB94sZLrkkh8zjNoNyxmieF5mCmM4Zr6NhrM4i",
  "key25": "5JnkUG4sh9mVZyfzhGChGUgaTH6QGHzVy8GwaaUUBSUZoKbJYjkTzDM5k3H7zbLYmWwvwcyWYDb7Dqn36kpBHkNU",
  "key26": "mGtEdxVF4LkPgFfpzfiXwNPV1U2pi2c5eYkaBDKJP6cw2N8rBhNiuxrJKaG5LuRT3vY9Wqq58ykgdStzKUx9vYR",
  "key27": "48E5hnaF8Avcuuq9cBCExN4GZBPwaUqKKuCPYTQnhf38vUXw6txaqUKDmxH3WtMyQcAxP7HwcyhzJeEpg8vua1P6"
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
