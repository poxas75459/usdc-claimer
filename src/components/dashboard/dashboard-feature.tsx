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
    "2C8ZAXxcUWRxbfhygKHwnxYDhDiqbEPy66fhqxfsXupDLfmg8d5xGYKrGp3ihMZCiXr9cHhtz31qQNzKW1L75JL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iHSv4hA9tNoN8CZ1JCdFa9JAzDd9CqVMpvUDej93kVCSb6ZaPbGnXftcTNj8KYyR4gGmbHshQoC6drQpG3Lzm7S",
  "key1": "4T7pa7YULq9nzQyjTfuFXvuvTKT1UU4jhhxAZC2t5MSoP1F4Nd4CLbTdeWyD1Lb3oCvyofSiXt5Dk2QkRJt4gHPv",
  "key2": "3R16D48oKxPKYzojaxEAuwr9UB8G93D6BxcGbcZvgxr6u9cYL6i2kQpWyV2271CccgeZ3SpyqnVfHitmCtCqL8ia",
  "key3": "4K1jCCWYcyVWFRDXa3ta8rkSRVyfs27miVJu6wq9pKNapERSrYRA1NXcrFXasUoXCFxWzdBieoQcF7nZba7PAGKH",
  "key4": "43oGP7NU4RqqNdohdNAQ6v9xxXxyacr9djjsEU97M5zagWTkeuAY7gz9eaEWwSLrXYzHLnxGncPbYzAXZtic4nTc",
  "key5": "43XmsX6tMR2aFwheaKxme3MrQu1uoiJeRjgVreFcC5Svt3QiVQG1fajcRe3X9k7TPjyy5KyC3JQxL18kTc2ynKBb",
  "key6": "Vt2zHEzUWKyZHsXDcCrsFCT9f1zUHvQTiLfU6YF53Nvs6H8xMqvFKNVpru1NkoyTivXqpVwVtAPRu7Yf2SaAzJk",
  "key7": "5F6VYCfQP8uerWkaGgpNcdRum7PoqGA72E8F34sTWsu2Bd5si7UqAwhfbMVZWbcJKvrxytZZzLo23NfKLuPfgoAZ",
  "key8": "3Y67YUQ8zFh8s9E39HALFkh3WiQY4WmC1uZkR1PdpiquzHN3Xv6MNb4vc4HxxM88kgDGrywnVEtgeDNAdGKHo4cr",
  "key9": "UW68cAWW9fWvmjXqEjd5iuXNgF2nyhDgzEKUusKtv5vYFPFyQeRBQLTh1xFvAZHHJ297BJM8Jugf7E6z33sU7w1",
  "key10": "3kYnxZbDUbVj5FNJKWAD5USysghA2N1cfENESHfP5RT9VB3pw735j4E3dQjGqyQayKKNmGSAbEB8mdYf1CtEphNx",
  "key11": "23AXd8pCMDGjPSPZvyD3fBdSXghG8UgryTvNfjcoHYnfxDwNSryN9XsA74de2NmybeJpCyyhXxTBcZNZ64qRDZQM",
  "key12": "48vyzdFJSaiizfePL37oXuPtQjfbdx9hvKcepF4qhXcnv9joYjfv1e1trsSPMHVQbuoZs8JFDDPQyiELxi8QjiWF",
  "key13": "TGoKdh9FvR7rCkyainYGGaGrkgy3qwkbwdZ5agKmYi665qLFhKcc8BjB12CgPmvGra3XsbaSPmG9bFbF4351yPS",
  "key14": "59vPx3PTCG5NC2dGpY7wc9oaynXjvToFH95gu6KAbjPjiFdqLN6QLzCxJUZEL19hJYPVty6gXhrV8Y5Qxix249Sv",
  "key15": "qm5r5Yg73mR8Fq1Z2ahRHGsBfNhF2LkZ7goUWfGNLc3RFWdiWFZRi6reMMotAckeKZAcVD2DvYbmXhDar7nE7uY",
  "key16": "57C8abPMAQEhrYLsv8Wo5C24pyudBZYu6Zfi3aUovSj8V7UGd2dQw5EhGbT9bU92NGWUYtxtrLFFk3FsAXYRVKUx",
  "key17": "4iVkkVbg2zDFuwnNZ414aY4PnRqyzKsrdgauRVSNByJpNiSrsd2KCCCeWXC9tZsy5GkDrNnz5zCa5TsftNMjVLGx",
  "key18": "3r4WpqSe4qiuFDurHRXhggqGaKUozfJUsMjvKvSPi8H38jxQzqYbtKPgHRD3K83BHjNKdmTjCo8F3eERPkfojxYK",
  "key19": "3YaXcrrtumnGYHjX8rmS1337TL25hytoHRBE5J4JhWgFvMCw5sTENNc8gyKGj1xKSNYoDUXrgKuVHQfWx37VZ94X",
  "key20": "2EE8qc4DcpKhQVhBzqdX57v23SoHQsNDCh1Z87EHZHjGMwj8MvnE9N2whBSB4Z7zo8fj1aYmgYdRkDARUQCG9acw",
  "key21": "2q2fK77BaRTVSwJP8dFcTEP2sDi4ufBF28nS6jSkttYeBX2LJrrugXrAt2TMaorRWj9orSz4az2LG3QdHSpJpQRX",
  "key22": "55nN1h8pEr45MtKu6UAgXfknYRJ3qcenVNdsVvhSyHom3CWHc6CjNTurJfg7xJhXRMgxaD8M2DekA59kdirnPJXi",
  "key23": "26CgfSDC8CQDcpKJsAX5aFJqyrJc6eT6igwBwafhK364bTMMu7UqVXLdGMRSSvnqPXjeJ3gcn8rk33mpB842Cukg",
  "key24": "2NpSsNw4ZyKBznnU58H3MVDSsW9mH6sn72XuVddCAerSoFt3VYJbUizwR71hZPux44xmfP5A7jAA2Z5SWTM2M64p",
  "key25": "2Ys84peNCvQssAUxXrdKZNfFgryPwDM2ppD2m2iJR76hEVsuEnK7WBNGMURmikG3YTUGbwzZdFA6LaAvTy6AMUyY",
  "key26": "4JYqAdwgv1xik1APHLyCrxrSphunAM5KZ1x73wasyKZth4FvHjAtMAS1WQ3w6tfkXSiACBoAUPWxGxfuMTUpP695"
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
