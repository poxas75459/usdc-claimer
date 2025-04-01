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
    "iQZkay6SCaPDSu2EUuCp9EBdYkNQwkspkwoKfRnxjgPvtHC6ETyubrbZFqh3PqfrAxXrKdRtXMEqJ8LUEP3b13Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T8j5TGheXQREKEE1hs3DUtrrQiQMXfRFw8VGxJVaujS2Nx13trdszrcUqtCecJRZGPKEZ77wKWgKbQZTVsnNDmP",
  "key1": "5aHj76vLhcmT5Hi466pAwkXSvqPkW2gwD6D21E3gx4btTt3UhXrd6DqAFFBxT5SfTzPqurSQjcd6DE9bqNBksGeg",
  "key2": "4Wa7Scst5fmmARsibQFVCRLUK3JJS7soPPteMq1gNXyqkGbu3fd9FvVXDTFHEpZmmasqvQvxfJDqYd9FMpkXXNi1",
  "key3": "BRGHnBzPevQTAeZmDNMJoS5LK3iLgJwNXMd854mP8G6GceAjyYm95pvzCme6ycnhA91onWh9SDNTsFBXw2wCabB",
  "key4": "2QSkaakZcw2DbxRtPHJ7DmE65xNtFcb1ePQ5yQyDB43ZVPbZFBU2jVq6FU3EeARwY4WkKRsy6DSveYsCn1hSwY5D",
  "key5": "2rjzPWmUAYboTEGZR3vWigZmLpqLyPLSPFRDn4LVmMbbb9P3MNG5tQYLZ1T7xg4ytGAJGLw24BVGSNEVtTJ78dt8",
  "key6": "455t7DPikQ9Pue5Mg5sfvgz7zr4GrdDduGnr3k3yqeQ1nKH3joUWBUziwJY2F8L8Uy6zFPtQ7EFsrBpLnq3za3SZ",
  "key7": "2xBe8GLtzRyD3Q7HNdCyudjPKQHrYbgVPv87DKEUBCbNL7jAPqZMoex6H3W3pSMK5jpV6e8Eo4imZZAvofMt7asi",
  "key8": "4DzCyBBDi6MMX2sSGMvPdXRPbw5JrhV8qmyXAABkEQfiuE4QyxjDjUvKsYXoKGFRiWBdAWcyXdEifVgnekRThMap",
  "key9": "3KkREyudqxUUGXCZozdazCRPV43HsEq1Bac5KFDbJC5LKA1ipywMUnuC2GJToayL7doqNCXDqBmgSFoNjxF3KbUR",
  "key10": "23DCRmKHPPoUBKMr4MUocmcQ2oNeHTG42esKVmzxnLJLDNSAFfm8xf7UrJBxJUqGSTfeWw658KYfzcwLb4jcUHod",
  "key11": "pkZCEkRvB486HPMYSVivDSbsZTQ7CbPx6yHUHn5Hdbv7znK3auaLDowHB38fVQ1KZKmnwqQWYc9saLLmqbC5CCB",
  "key12": "4sGfULwmDhm58zfcFXtQhmaqDLQRv5wXydUCfpv4xNL7htbDmHK4amcDx2JTaPqZ193Hb7tCtcGBCDceqBraCtne",
  "key13": "4GHqb3mnVJSRMz4SCdcwCVtDUroiRSps2WS9uH6TBKkCsFSMoVqh3fApRxU944pdNteE8keC8bPtnj9YR2q2Kgq4",
  "key14": "3VCXeXHzKiDbAQThYccdKk4z2gR66LWjaV1CfAdMuF63ib1BksPR85nnxqyrZR8F4dEEp4uzMFrm9wDUrWjHnGZV",
  "key15": "TXMmu3anrEtNDVcpnheGgKSH3EAXt69uUEAWU59FoJYYW82q8AKopKBrag1wZQ6LLjPz8DmXb5MUzWM3AjbdSET",
  "key16": "4igTAMViViTYYgKXfwim7HNu7ahyaX6bs2oYcoM2WRHE8ooiDii8boVKsmz9NVjVZouqoEFEcd5K7fLGwo3BDJQE",
  "key17": "4MHACBLVojQ4YyFo45QrMmxg64tMJByHY51JHiJHnaRWTPExUgFK9qQ5hgM5pFUh9e4RAq2cGH3nSWabtgKJNQuS",
  "key18": "4Fp1tUHvRnNSB5F4sq5DtgnmVvxLTSMTyLMLBJJcgdxqTKdj5fRkWiVXbC68Vyb1zvkkNgPLbq87g48JD4Vz96bS",
  "key19": "31pkftEMasFYCWbRpjAx5R2gwZeaqvZAczgHypbaj7RuhpVSQ6dohRGa5FmRZuiMLSS57EU1A3Me6qELw8jt5Dbm",
  "key20": "5UE6goF65w3kHtdrxVxPcdRtYSAerdSdvJSik1ewTWuoqT4yzSNPXQNBbaJZpVULuemR5U7vy5aH3TryvveoX3CL",
  "key21": "2RTi7MNjAHNKmDH8hmjQhQ6LJeJErQBGGRGsxSSH4GwVRqBJqPNu7Bmuid9TMLwJth9gVEwkJTRXws4RjSvuXVdi",
  "key22": "AbyUe7iQh1rktviuAk6td7abpQKrx7GwdbXdJ6zikRifrL4214WXmC4WhS7r8ZzEjAdggGFv81vcnuKTbP8ZQvD",
  "key23": "3Ss2oQkpNMurW91jVRTj2YTUnu37RnGrv1jSw36M7qBCLfqMw1xMAkJnu81DoVNtoaFXsPM4Cv63bgzqEL1svjtc",
  "key24": "2qGKPamoMzFETWzZPBPRW8AqZd3rxEF6e7wxXJSdSNjmgusBtzJC33r19VZ4zof8KnKCurruMshuKV72heoY7FXt",
  "key25": "3BZWJygrZfNDPC8y1Gn1ZfYd2z7GSEpJz59so2vbem4BRUogMqouELhyACWcvp1bWQR47CCGJXyFKi1J6UNfjANU",
  "key26": "4UZjAd8gWRuBRnyPb2J5Gu7saTiF1tWHnxyqPF1KaZnrgVJn5Z7bhqvrmEa69wHYA92b6bGiANjiY7uA5cDuUWtb",
  "key27": "5YVyduidk5mQaBWTGG8Y7yKzcFkYr8ZWZwkCCTra3GmjCeCM1sP7N9o9kRz4JjHUZbFmRwp4TPigzvdtD23oc4Y5",
  "key28": "2Uuwini5o3Fz2oyUh1NvZPnLFMtjTstqXQDuuoGSZ7tggkR2YNS2Tk2LwMoy3Tsx5tYBvFbXZzHXXpgWzqh5FGRv",
  "key29": "36CNveF9waz3LNjEW9Uftxzx9kHL12cBSts86GaTPfCMHD6DbZa6WjzrPc7YHevwRWgVgGd6mvUBcHwmwG4kmuKY",
  "key30": "3bpNFM2GqPhtYzKdyjCHLXSRTiaGjd5WE33Acy8QwGxEXmoMmxVRCf7mmfLEqvZ4PUpdXFYWKhmk7aDruToPwTXm",
  "key31": "57MyUmfUtazh3wZKrKaPVvYtFWsXPZitb7rcgMqujWGj1R85U7UXLfxYyp82AX5T5gCYh1dyJEMUYpEqMdaMXPVr",
  "key32": "4LoXxHvFkEdrRn1ZxB7vqQVfLQ8CcwpM4JeL6wK8gkUd58MGj6DzvoPMydhF1YjhtYE2d7YT61geu1DrSxofAuQi",
  "key33": "5wFFV7e381aib3KyR13cP7NTrciAvjYa5xNNiXwhsmxMhhfM6JCCqjLDspHmFoiDVvtoFasgLD58cuKemp8TuG8H",
  "key34": "F2AjhPMvnhif37UPopW2vd7aFh2fah4UiEDf8GzpoKRXEKSt3UJ4DVnXdhE1vR3mFeUv6NJCqJDSJUt7YeVTAm3",
  "key35": "4udGZTvSLzGd86tK5UgdJDYDVZS1Ku9EZHJNUAPYYgE9Jvh8yb2srgrjECN2Nic9EqUJzP2JXe4WDGZQ2q5dHe6v",
  "key36": "3jbM5YvHETT6Kqu18tC8CTKJ57rEgBpmeqpcBdjqRVxKGmZWoqc6WU6nC9xBJhKTa3CyYKBjeAWJA3vEpGZVBJDr",
  "key37": "1rneW7ubbEevt2CCDzaUt5gsL2iXqisoQCGmBvstMTs5v1CgSzQgB7rBNVqJJ8UaS5WCCHM6kxJ5vqH62Bun9Qm",
  "key38": "43pJJxMvBoedvgdpEiRbzgf3LTYSpN5CgkgFsZfPrNTajYVqk6LkGxKvde6vDZAJAVrHE6tLFc5z9MjZNruKhikF",
  "key39": "22UGtEMvttfqRWvbBFXEoxJSmdsaqk6E9fsm2Gzpt6gptWwNYnZ5krppoSuNeBUvZ5okuNF1fKZ2ostqL9sDuuDP",
  "key40": "3T8Lq8KcVUo6HUpoezz748qCCWx6sb5SWigxcou4q7d7sNq8YPhxcuKDKxDqjUpzgr2ayJ1r1MYDQ4PgLu485Ste",
  "key41": "4SsSdF6A5zbpZiC3jbEf5vZFNjit8fZS6ACTHMQsry9pWbtWPWvUhWpy99HkAdENf2s4omZGU4rRuN9ETibp6ZZn",
  "key42": "kHepMfNNpW6vucAyguaYgX8y8BE1CcvzJ31bDizjd4QWpAQxhjt6GtgBBs6SnGCXec2RJ6EvcoLy7EjoLTj3Hd3"
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
