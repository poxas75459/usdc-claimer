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
    "5rSNufDpaNMKBua3oiYsdabt5hHhFoLHSCsSkmoif21FsUFvCeeETUD5LB5VZjvTU7K7Q3Lwzziy84gfv9ztrLNr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aAiukBbeCFMDGAmY3kSg1EYRrrJphFUkNz8GAE7Avjr7zjeNaZGxNmryKHeCLn4UwUz81gBSp89Wd2ni8MLBDtB",
  "key1": "61VxMyrXj3XoVhWi4NPSfzLj1eahmZpQ2ed7rqyHkDjdvAHE4nCL98QCc66gPmeKuBoj1daLQ5shKjuSUjsR8cUL",
  "key2": "Fs4bLdyvUHzyFCbDPNe3FUMrXS5bDb93ERn4nWqapbjbnsnQ2RGjZwBpMsnqdhihxtKs9oR2qjq5a3UPLsAd2wn",
  "key3": "5X9ivLHie7yNeHLd2NTv49krFSphpjVn5YCT3TtFFWTU6MF4Xu1njEfSwbm5DZ9WvFFgD5k4DJgshy2LcjpcKBxP",
  "key4": "2vR5pkKnph4Ci33t5LcHckVd5h6fMNykdiSZGrELXo3gE3SEDisUqGHnsCk8YA5FFmfLnGfc4tz8juKg1zigA4N8",
  "key5": "5oyMcqBKxKswP8Jsaw3jQHxq68mAZdNcN8xXHWYwPyqdQq8QUmcxrEkcoWDqD158KGcwoVw3hX2mAZgzok1oVFWb",
  "key6": "2brnWNpdHYFst7YVM81Rj82rKsvPAD4yGjZUYYfcvb64sXR4aGdVxWbJDfyrTr8yWaNwMrmfaySG6nCmbPikb3Nb",
  "key7": "2BcbundaWDmETn3pxZBQbLXjhstRwa9WkdpxHztM1jeHCtcRsiEiJEhUpX5vfgrYkzGDodgi4q35ioomXqsYxwRc",
  "key8": "5vJjuZZFqALZa5N98eWfhdFhuBKf4qFXbnyZch5RwTbWVW5LxzwGXzy2hgKapGnjr8zv53UsPhs6Su9QPP8agQ3y",
  "key9": "2itLBDBC4mrBjA62MpesHqhSmrXk4ZwB2c2Fvt2x8UdyjmL3BcYHekh88FkijAL4nD9dV3TR2KbPx1Nb793rYDVU",
  "key10": "3PRQYR3D37z4bRPEqVRQmqzXV77LMevxuzKWXhGKmfkgexFaY8b99vFMidFRWfaWsoHDPaNtK7dVw6xMSLhcGAQL",
  "key11": "YpJYzqaxeDqfTu6b5Ek4ubJzhUX5XPFGRnjvHfsaQRYZPaw59bqr68rRFZzQtkERF8oguBdRqRuGYhbEnwweZy4",
  "key12": "v6XmP4Ys3Yy9hQ5EJZTx4zR2juJEYqQT5EArcdMTbSaaTk7VTv29DxA2xR7xRa4Ee8HPC7mdT6ZDPuVzLKUvdfk",
  "key13": "2ryiaBV2qAwdgULG3xBrsVJ2vwchjP1rohU5FZZW5p1TtEHCWvbmoHtyCnK2HCS6TWXFwBVZW5Nb3RzaiKnghaFU",
  "key14": "2eFHcXBisBJKtim3jsQ61sgNL6fcp13zPCRtR3bKbSQWhEtgURVYWA4fXgQRjagGDpd4HEVMhSoAv3vDuxqxnSTv",
  "key15": "2yn34ZXKBRdZJmGk47tovCGAqFxtg4n498uUGNKR4JzRWhWSQwE4Fz3ntzhwWYmVwgYrP92cZXDiKkYBmMchfp7G",
  "key16": "3HQBMBVFd6v87A7Gp6Xgy1ZxegKBpwwFcsqanueQbQzqY2yWaceHjo2aezFBREyxJs4zxkzomaWUiFC3gBmRQ2Ve",
  "key17": "vTYQZw8Jxpq1E4mmaSVeEST2K4CbbjytpQ9imQ39f1TWadPHh7jmop5dG95C9A4pTHDT7yvfoG74MVfbcaix65m",
  "key18": "4qZu4UP683WT2Y4nJQSVx6ooj4AG5mm7wtTKjEHmweiDvcQvHae8ukw5pv3WU527QnQQDkzjDkREfsSEzXy8rTc6",
  "key19": "65exgfAq7QdofttUhh61teJ5x2yRraEoK3eXU8BEnhY7vaxkTpN9p94QqmdSEtgZojPnD6nKndSrrZEbz6ZHPSps",
  "key20": "5VctNPgYfM5duu2mYsPYa7TzgRHhdVTjgZDVwdHj1tZ45ZXdVt7WTCrStVuGVrBfLq3MfKREoHkRH6wfEhQdAbYz",
  "key21": "ZuWBCJR6n7XbevXvgRoDueFJpJYswQqtmPYyweG2uJ7NL4S7fvCwmqmzFNrbhbWzwATWtaFBL8SQGUviogYApuk",
  "key22": "pUuUXjPDEU3osNb6Mzu4iTjDAaicP3iAqh1TeNsMUU9ZcMnVrTh8CnZE6SDxADThAhubMrC8rT8BgsXqpjZodvw",
  "key23": "qN4aRGmCEX5yYLyS8YbGTuTHzRLCQqW3yShu2A2s5E2Erh5bz4YVkc9FJ8ThKeYvrYLBSCbsy4N2MhgWrVuotvW",
  "key24": "3cSDkgV7C6CPY6iiFyTHJyTyR59vqhLaBYLu9uCY2YB6k6Dg8aGysXkgwx9JyFPjMURsYexjwPwy1Pd19zy241Sw",
  "key25": "5Ywhtsj297YdvhMQzZCdVZ5GbF6Jsrj8ErcaaxpzsF77CdjWE7yYXp2gJrwSbSsbPa5uxQbHgjnvVmYjTC9bhCo2",
  "key26": "i6neozLYbDrmKisDZuX8K9phNAMpVaN587hpxn3cEe4YRGLEDV4jSim1isAycU12RKSB4hEmztBCEWC6MPZDPRj",
  "key27": "659TMpWm6McRiyJAdPzycxvnd2pGYdPDMTqutGhjrJnLgk6RA9gsNf4ZEb78yjEqFthMZA9pn271gqc8rjV2AjY8",
  "key28": "eb2igbKquAUcjXWzmDuem55qZ21LEfQKgLRiULKuXvpyNDKSKi49pcDBX6ZzxyZzb7GWmaT1gXtvphBfW67PDGb",
  "key29": "2L6xBE17t7UJWoHDEhSEXwqiZeWaQ79HAmrtMwmHW9iwXPf9Z1rNLFPmga2FewXWiDxBFeuULr3crEKktG3NT1C2",
  "key30": "5HJAdpfNdsD64hQndrYG2KVrnbAGR6zmtmLnobNpqohYztAWm9Q5rayurGFKvUgcrv2B5XBB825qJ1ZAyPGJtjY1",
  "key31": "2k2nqkinhsvrgysqGfync5qAwN6JhXFdBDVs6yzyZ7DELL7JB5o9wXE4pfrzpaZRmWoFKWjZCmVBstoFG6QtwoH7",
  "key32": "3ssqM93VbQi8htdbP7j3yR7ZpX5FBW5r4MzjvuJczHTZt1s4xEmYXqz5fQUp1p23fre4kHZsYXE4ZqFu7D9dtaSi"
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
