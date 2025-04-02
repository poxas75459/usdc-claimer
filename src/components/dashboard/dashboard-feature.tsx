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
    "5TJRmgmi4Vr1TBP8kcBzvSYk4uW3cgcEgYvU2BMwRBr3jn5kNpBMcrbLNc8N9mtEA4hodeC6xKZcFp9Vi49SUWqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TuYZDE22prKnbCnpjh9hammkKWdriQapUSQESgGXxF8FkrqQaqWmeoTcALrEuLke45fq7eksis3yf6kfwz4pqrM",
  "key1": "5CVNNDScyKBtyX4fGHcV6biZaBzGKvCZWAyym7WRp5R2LMRCKyRP3FR9eiFtiiSumaPeeCdkfYnzkLAfj4teLmWA",
  "key2": "5VFDoDL3NAnKiKjSaYRqBZ5xtagMzeyYuaoLHKRzDX3aSGtkWtGT6ywo4r6QjCfkWYvz3LLGc4nzouK3SWyg7zgD",
  "key3": "4h9K77RN92dCQYThzaMKbRvpNhPXciq5LAW3Eh6BhyM7MsPNZHGD54HjT3eqmxAMKbCxFS8Eqdp3cAadHSQG2YEJ",
  "key4": "5KcEuZAoJz7LuWcb1NLzKAwFLShyhfyK4tapd7VdDviWbiSCzGjaTFTEj99nPiASVZNk9M8GWcYPe7Kra1qFpVvS",
  "key5": "3Tt43dKQGBMVRQhMZqbTAGZRNKyUEG3vxpDcjpH8c7SfXjo3b12oVqn2bCEWC3MFkiERiA8qq1gptdSfo74YnDVd",
  "key6": "3bPAmchsQLSEm4g88ueZ5gPM7hfTY23Cc9XuDUnVddKyoP34cGFoNT6L4zR4tUUm5fQtRRu9ronYnZJYCdEM44sz",
  "key7": "kVBGLgEej4ZamWg17oegeQbwXNjdU7hoF1ReUWaQrCeNttEfJ1cBuoGfykFTJ2eJQquxcxKqD2EeUkvbMcACSL2",
  "key8": "5rfTrHwcivKhajC8aT4RDGHnC9741T5T5ocpKhaVrdSBmKqPsJrvezNDQY4cuJHqSQj5MXkhgQWStVeynmvBQggE",
  "key9": "4nb4CBQeXSh1ibyAmHitBfU6qLmxqsXMW7c3KNSwtpESmbwCGJErKGDzVWLjM95YN8L68cwxFq4waxLLt5BDSouZ",
  "key10": "5rMra7KDM6qUyw9eqN2vKGdBSdes5vjfZvQFfaF7L4Spte5ZjMBLu7oCWJZmKrpaqwaKGR86sSnFXRegQT6cNMZG",
  "key11": "3DbTQX87hcndTTWSVrYYU8seT6Cs8QQUZ8aCDVfYV1kyYQCSRwwh5NC7CzkJuoFWdrP5GQsJWTMDsGqGt8zPWTzc",
  "key12": "4eupKsf8RPXA8fkeguYDHetLsiuTbbGZXBQK4pym2Tw4jwmDoC8bkUP8fLEE29Z3T6nwREE8xWrmHHoxZLRsz7bg",
  "key13": "2Wc69oLRd8ghRqVbwTYRYJaWtnbxa77XVz8T5YjpH4FZX1ghsdRkye6MJSFuc5KvYqbGunz8LTWMnewYFCHdVKib",
  "key14": "4cGJEfhUaSJ7Bt2AdveGT1KT1pE6UDTDHh2hWvC73FQNQgRCcvA6Zve38MWrqLEMU9GZrJXobFjvozhgvomh1H9P",
  "key15": "3xDoaMX5J1kTB4Gv9DDffKRC9eN23V2SMWbT65FoXtuyLx78jmvozA3aphz3Vq8Pz4EjQB15pKWCS1wX24Ge4Li9",
  "key16": "2HJbhEb18iTh7XHuL7aNHQhxitKSDuAxamY7KAJyvaVUixyG17sXSQ16RKgnDiFtChPAjByWiFR5p1FGfVhdcd5w",
  "key17": "2MrL9ghvnWB59nAkCWaMHuENEj2bG7bp2LkvdY9WzBVRdbsWUcafg2s8fU7xz4uxFxqoSyJ5SQUie2CWK1XZ7tmC",
  "key18": "44GkxszoMmmrDxU4MgiEZd453LunwroovpdDwD6FPG62dCVzFPYDEJ6ngXqwL7W1HEcZnqNnYTcKxysd3rDSo3rh",
  "key19": "559AzeuPJGgFUZovEAaPScoQVaFx2t1hGywRZk1pQD4VTk7LvrGJwyjcc2jLSbpwcTs91qZaVAAxhHoaMJkMtS5t",
  "key20": "4cMoQ4xSvvPDij7qK2zVqRmDmC4JTo34X3NffwAHTzohjAZrmhHnhhxsCQ5w2wqysUrZuUxnFjuxbADzdWKP5Z6c",
  "key21": "D5wQCKC7Cbj48y544cCjC3PaiahhztG2KBrq4baWUsQPbYJZCkp36xjWv96sj2XaLkByqsv8NmH3sPfEoo4C6SP",
  "key22": "4rzuAf6a1N4CRvMSmpLCsMBCm24NhMHSoz1JyG79ZuCCHDASyVc6fsu75piyLx7uYTGNLNjxQAM2Lx66pjHXyqCC",
  "key23": "d6FHbLGaDinazMaG1UarwBCfRU5ZMHwcn77KtYyod7Tu1Nb6Wy2UTSaDZcfJzqyroJnq1k3GeThqtJbW7U9oFfw",
  "key24": "tPDJGurivT36EHDFat3EpkrE8cgTwGPzJJt9CZMV3f371FDmJ21LnamNkaz85zXbyLHqExm7o37r74QfErCF7mW",
  "key25": "5Q8gzYnA9Vd9RiGBReUBDEUyT88qfb1qGYtArFfYmGo7jPNzA1dJLX6h4TkUGquYejTWTnpnvgkTt2vSBXj8vPfn",
  "key26": "7nffH51VPAB9TxVnjGuCusdnRNBnpASR9KrggNg5TgWYF6jeyjT1p3da6LpEudgWHzXDpcUzYAem3iyTNanGgGz",
  "key27": "4nY7bzoAA7TmFK53NujFkVrBiR6tH7sk7AnHcshc24iyxg1BrgE7n8ZhmHD27J3cZGC2otwHRRhWxjwuB19ZLcBp",
  "key28": "vU5LWWgEuV4xqVNFctwTiqWgVSK8VYGL1xm1JKVr3ivhewkCHi3euieavh6mThjECjcMrj9ahStqUoNPht1w1Rf",
  "key29": "3JvaY4H9NUUtVi9ffubLM69rMhNwx6xh7MKSHN5PQBuisrNaRVWhdgx6A1raLik5NWeHSNUfowjbQwMy4ryQhQ41",
  "key30": "3KJL3DpxU6zxX8myyVzWWVbZgpP8Ncmpytx2U5QrpvcLzuUSoDkddhhvG3pVSpvSZfAXLD6SMqzyfjQQcoDECGte",
  "key31": "4UrnEBqV8XQaC8oTxtS6Mvw5PFwAnyLWSgWoupeLuwY73tKQURahcXXt1EYBzyq2D2pdnumUAoZqEB52NMw3Ss8d",
  "key32": "CkpZiFhj2rxdZh3V9UDj6nCr74KiAeUWGKRPTbQzhYszBx3ofcJGZe1PYHi7y8Khv5hp5qdvsWVLHa1v4tJ3oBf",
  "key33": "3NAoxHdBaQEC9g8sHdiWLBGuoexipSMDCJafaiV9soNMCRCzJvQD8PzK6yWWHDiv5A7sLHAXVzj51miCTmDcgts5",
  "key34": "5iCmsRXKpHRgue4BXPqLKfypynaUFoPSL2NDpwHu3b9hk57jtcVhKyhZr5BFSFEaJ4dY86Ng2wm2AjZfwpMvgPTk",
  "key35": "2s6LJZZsjKUGtJFjC5cbep5S68eirHY9zwiq5mXFyAGM94NdatLJVgzmzRDoXYLPGchDc9cjCywkrz7hpyvSk5Zv"
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
