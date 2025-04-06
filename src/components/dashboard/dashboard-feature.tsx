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
    "29t98oMGBVi2jo3zzFBiyFfvK6aRjqCFDiTcLKeS5jjv5qB9HEh15YYXnQEjZ1VMCHK7abtd4WHVU6fbxcFBZzfp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Xodgi9vRW1t5qGj1NsPXhGVyEQspLyC8raxJ1jydPDB8R9kjaH3LWWr74mdSZZ4VgU9zz2JqJA4T8v3yjreexmD",
  "key1": "3z72Tie6gMuqBt5rJozSVvLwdPrvmjcQ95UYQbuYJfZtvMToopnxMNHpDY6c1M2w3MwgZtgZ4QgLVBLkKQCbrHxy",
  "key2": "2nNcRi7T2c8gNrmPPghMnQ5vkcLLsiyn3s5vS4DNEuGwT1oLV2sGjYBJD6Y6BYcShX5p72MUmG9CZd8pDXvnLRu7",
  "key3": "zeA4sVnE7xrQxbdv7WCP7o3HPDbuDTC2oL5qVmBWu2uJN7dFjhBguVa8rNif6UD1KV3MaCu4F9hVsjsP6vyZCyj",
  "key4": "4D8aLJPB7vqHrqL9nLFGmvocgNr18WaGi9NfpVWRHTsJ85BzQqT8uwKfqQzveu1HLmFQmXJYbaBw5PWdhERi4giu",
  "key5": "hwLKmJANw6V3H69JobeQzdiPdXZVVk6AvXSJLp5udF149WsukLNcZ7PsoVCunyPrQhV2KaBv8DmT5eoDxY7NrZ6",
  "key6": "2pVjypcjTd2REQbjqrjpouSJp6XHdH1XmXvB2VwNvNeJLcj8JDCB45bySem7FsaDssNuFndLh5rtWE8nopwRaeEa",
  "key7": "2GJUoJva11CZQgaQokAjCkV2DeLUq7EVZDgBpLdLqQw5GKS9JADFAQK6YTgDDYAM5RwSmhXphi1AQ5dnQWCKCPxg",
  "key8": "4bbWbgLjDBRM87Mknq4TR3mHHMFizEdjqFErfozzpbnSS9Jq5F25GwTT1jpLRyqfVSsJ8Y6TNFzDYw2ZmP11t3JX",
  "key9": "2yQkVJrX1ugckbcE4m7V5kgbdQs6pZ3eW8hjfxUoabyQrPy7zrdX1ZojWN5sELacooFyrKfGjX8nMhLbF91o2Q76",
  "key10": "5KuvkASZSRWZb9QA4R5oWos6tp4uHnRvK4GcWCpU4qUvyLxV97LVeHUiLAdHusf4zh5hoLjFFLekg87ptY7uvRKb",
  "key11": "RD7KfNdzKvaVeSs9ef5GRxd3MJoCFZKpRJfYtGuEXaijc9K9dtK7oqtauYebyEcBRUQFXdNbg4JpW727CjCep7V",
  "key12": "44bXwPFeLNZvwRHbgi4NPmpa31bmmQyydHwd1twEN9t1KPvPQYDarRXchUVEqbL8mntsBTHXvqT8oXyjgWJhVyNo",
  "key13": "3hnw89kwgJjgLSCyhSwDsCnkjbmXUWWJ4jgEoUaoWwq4RmE9VFYQsfg6RJ9FoB4W2NdcGE7PEcyskkQDhtojcKnP",
  "key14": "5NddBkPpAJDgqwFNLg18T1Sox5UbtEPbaEnDd7ALAHU4ZV8z29jA1t4FDyzSo7TCChr5aPFCeCa29GRQ4M8PP92u",
  "key15": "5fKXsiD66csVhPQ2vnnvgE8fndHBMuVtDtg4U3mj88NVpKSbSBG1fzhtWmJu715jGC6imSVRiV5LMyxTZDjMtFwj",
  "key16": "4dYC7ZCKaR78yKnFbUE2crCu8LiQoXZobb2BUAnZQ4AQfLtvwHW1Hsxywj6ZM4if5Y55hGQrRUteTpc9VG4MJDvK",
  "key17": "25avTqdDCyxS8hXUV1XuBD6K2t9frcmjTgQNXZwnG5F8uzDEYvKmDT8jWaPrRNNqhGATxqrX33CPZcgUwbagcCoK",
  "key18": "3Dc3QUdvqAP8v3PPLtpgF4ce8LT61v6f6wrLYjbKu8XTYEW5M4i12zoy1WChayFYcd4hywvyEwwPF5fzJbp3GZwB",
  "key19": "4xUHaq6Sx2mBWAhJa4gic5MKGEUneU2wyqUT5WaPXvvXupr65rYJBMJLcFEnJUXY6sknFkxytHJ13ANfGMLyATBU",
  "key20": "55X4P8Ep9CANq9VFRrpFWhRqMDAkvKSrpoA5ArtZPBRJJVVm7LdVmMTM4dpoHaJffJu17WuJZAHh7dXA6RK3A6xF",
  "key21": "4NXDFBfj9r5iEnT2Het25GijP1Wy7pU1KQR3LtJgZUNGCJPfofwecYyboPh5ZnJRrpbcMwZLk43FjF9eAx4iaHUT",
  "key22": "5zkJqgZU5ZU4xw42xctg29w1WhjgYuFbYKc253beGFhYRc2DZiDjuvnF2Uam5xfEP2FpqABL9GEB5PBj3jUhBnDm",
  "key23": "RQUFGKtcN2tktjRoXSm5n75m2ZPp5Rh1YquQMQ73mQHRnoSfxs3odo6MwhX8omqN8DgA6mGkNLrWoPUZkAbGemr",
  "key24": "3PgKhK2S7vHnZz6c56v1QXXq1CZ1g6V8agifYxUj7cm239sME27auUGh6PM5Nxq4SeqLgkCKJEKfoGUjqLM6SL6Y",
  "key25": "u5JdYZuHEpdnmpQhzWNJbBejmZSEehzCyS9ii3RRZvefsu7NtDKDNzy5gNr53Yui3RMWP8ymNyt1iQHcj92HMdB",
  "key26": "3EM9m2ySApusW2mruymwZ7GL1qjqLmpM8SPboEvS1izuFPjmPbXB6ZkY9189ojdwmFXWZU6XSUjjdGk9pLbeUtBi",
  "key27": "4XyCmtHN98pQnmosj7jLgrfMBAK3Jn8iSkZqtheRMyC19JLRrYXTBoyjWpvbQr3aTELiyew4oNdyaX9eioN4vXRe",
  "key28": "4N5KasG3Ms4fFesrnx3LvFRvqPQx9SvDYGSvGSQKCSgTYjsv4dhPzitVfBPDcmANqQaNzWcaV94D6YCYHwYDjVDS",
  "key29": "3eVfAMVdu8C2jMwa11EHEqmpfCxFDYcW7ujYvtWyvRFT2kUCnkFfrHrTATDEiGE3npNivD8iPwaB9LdMAkuz6RZi",
  "key30": "Px93HtGMDTkmWKiFuqcqQhyDQhAZsgGKHD3KuyGC8DYt1V6HwDqW4NQZfyyGXkAVzB2cNwjgRBburzrpFhbJt8v",
  "key31": "44Yp6aVnEMA2J5Lv8rg7jXRrzZ5vG4XPDeEncp5UwZTJeG41u452PqbLdLUuQhgFnrcx7aWCmXyi8UCTMHdficY5"
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
