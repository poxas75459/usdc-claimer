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
    "isYdJjedUBVzFvZb7EZRrygfGKQVvL36T1JLNPUyqSqnknpodYxVJUub4JDvBMLVomYGkKL7rvqD1Vq8ZFnEQ4C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5e2FbhxGwVj5eApGX1yYKNix47Xnf8GUsx8RJ2jEyd1fGuQtZjpxxfcyY7tUMVMnJ2rHDfM2VJQU1mvZfoS2o7Ve",
  "key1": "5JFh2mHSfwsPNW8Jv7kVejuaHtibEuEgrwhKSy1FgZ81yZjDUKpZvKpcuxzufg5of9noJzg31bEE4mZU6im6Ssr5",
  "key2": "46EpwR4jphuyDdFqUAtSbPqMYNt1UFqeVg6ZexRGr9Pn5HG4dQXQ7iYtX45odzT5QTQr4awPHh8tDkBv6oZnRpPX",
  "key3": "5z6QR3UJnu8UqiVVTAyDreqzMwpdrYMvXFZmZdkXVfS2wPwPr6tWK8ktrWCJxWo6mWw5N78nmX8n9K6vPqJTdvyK",
  "key4": "3o2WMNpwNkSDukbX7j3rTceyL5M282mA3LjZYMLAkTzL5JCDsQrHqahxDqVZLHaSC4pWjozxmMYjgKfVz1KAq7aK",
  "key5": "3H6Pi3U6SPHMPWzQthXBzkMjbwDsaK2xAay9vNYAcGyXtDkHbAt5gFvjnctvrfVJLi4LvQtos8TyDsuwBb65aM6W",
  "key6": "2wTwjKKriCP6RCLDj9FtYf2NWAZ8jHW6CApABAaM9EvD4hK2gJQyjqxiXPhX3qJSEATyJSWNsRaZRXj6vpmvueMy",
  "key7": "679nGDyJzfBtHCe5Q3CA9waBMNRDmZN9PeysYNQTsP4zvccn5GMvX3dcWbrR2vg6DWgQGcAec6FeYNFCs4YAAE2v",
  "key8": "2UznwdhmaUiwYq7iiuGxzZnEhzZKuAV4j3MmYYSBhNkpRBSG4gMU3FS9A2sTb6xAjDSrjdPEgRX5r3fCwGxQPPtS",
  "key9": "2PqSDPBZHnZeqH7yBg1FwF76YNmW2S4CnFNfrZSRWLSq7e3zYjGCYjHnSJxqGe5nLvSX1HtDBK3FmAafnztJSUQa",
  "key10": "4XpUQvecxktPshR9JofA741Ei3dxFHT4iZyDD44GxhpsnqtmzepJMaqtB8DDoV2pS4oiU7wU2E1VCgBBowYMdvFq",
  "key11": "ayqQhUL1Zc7muTPUZsJC3nhXVSHHnnabF9PEQwa2aZv4fDNAULACcG1xPF6Traw4zWuQKVCJXLrwn7iNaGrU9Tz",
  "key12": "h3cHJppiaDf6f5GmtU7MC9hPEUvdecpbYiVNtBLWHsvwyLa3JGzf4ZxK1E3U9jpG6UsuSXG8t4WGiizrKSnV8La",
  "key13": "2RMk5LSwEfm8KQHj5jzdeGRRmnAVwDSmfoWemBec8oQXrEbBGmv3JGgDhU1fvQGNSmqBcjebu2Zyps44qCAZuFfJ",
  "key14": "66TFctMaUFsSD8odW2EDWLPn4REzQpiMcJohYmzv8rTSFYbzzL9ViLPhA6mjGLf8aSCX9n6WHTNmCXinwYWJwtB5",
  "key15": "3b2Fx1abTj9HVZQWGW8LMY7Lz3Cn28wpEXsCJw7LLgch49A1AcPdEN32WJK39PPzfaHBQKyMokrCzjtgmiBGooeb",
  "key16": "5XVjz2dHKaV9ign8nCgG3JkHZaw3MuR23uLEMrMS4XkevHVEQTGprfmKmtbfNT8ofYScPAHSxnXAdvJadF8WNRcm",
  "key17": "5nDmfTrrVGg9dDbui7TWKjQwyFxHsxqtVnfZXzqwkxATvNbb2FiBCGXatuUH3QgjcUFnkMWYXkpdDNzJUoL32JUq",
  "key18": "4ZeT2TiFA1SY1iKeaoT3tpKSg4xaEKKWvDF983MsBi3gdsHzEbqEAeYWD3xG8WxA4ZHP8GsdfWsenvSjfuYFJoRN",
  "key19": "47gJXDwnwX1qNiLXp7QZ3PFKGm1sZE7KtG59cGVa4QRtBeDq2XSo5akmyQW5mYDbrsBJHWddSmMqbW3XgcMw65TZ",
  "key20": "41ZAWRBzer7FdEidP586DzH58nsaUuJHhuiGqpwbV5zux9yB3F4QCDjxzs8SsrNmsxbinbw3RtThNfifmUqz5Naz",
  "key21": "666SmLka518RtRnCDMNCZ8sbEXXYkh7DmwwiXeruPySymcnQSDofxyYGDR8G6hBmnX9iK9yDXFhCZuErdn1YrYSn",
  "key22": "62859RrfhPsHu8U4VoC2V96ABZMGQGv4eUedJJ9AGuL98232H3iWPqm7whQHgJvbGVugUHUEx23wKe7MGJsP8P9U",
  "key23": "EpNCBSqS1VTMrPxuZ2YcPH23D3iTNS9gg2jJA4KPkXaMsWbhqy3LU9H9wrd4HAYC9g3nNbsaUi8a4V6EeyiHRtu",
  "key24": "5e8hfb22mA1whgUrrUrUgffZ4yeGjBz9tcdWmH66SNkziQcmLHQeQacPnP1jmt4YYqei3TXWBXffZAxjJChzxBsS",
  "key25": "3JKsfJeULsequJh8WoiAb1uXMyB9mbdyeGhNArP5dujfyUy49bAsqVgGaUqfNNAJn72tq9LchJRF9fzBPQLanQ3Y",
  "key26": "5A13D3BADVzcGtUsLxx9KWqXYkFYhUnFrfMyySmdAWqZgKdUgaMq5fbeMZVvWPZSgxF8DBWK2ef9qie4ZpYGiDNc",
  "key27": "4Kfk92JukbdudAdCwGcGv9ZKqwNXYfXMjqV3KVcLTxPXCydcHERParQeEeLg5aoxNK5NXBtpwFSbmghfyWbrjhFP",
  "key28": "2QjZdEpmgcWRL66KWEQncAR8RvV48qumpkVDmfA1rwfRNCgHn1AfaQvDQzoE34Jj8oWp4QSgZDryrcHtLQw9VbqL",
  "key29": "269qUTzTQSEzEgaG1Dd9sbqcASzddMpBPPtg59bEMRjuGdXUXqvr2WRPHk8dLBwhS5qRgJdfd9pJ46GBBzFsBqGs"
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
