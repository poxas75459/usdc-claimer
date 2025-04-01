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
    "5Yn8DYuHZ3X1DPxQK3bJupNkcHvEDhc2FPj5mUBiNhLoqoEu3HLjAj4xf26LMix1pUDVjCi3wG3mWxWgsn3pQ6Nz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UNeBxbL8dGZRVr9ftLJLFby1wewHFsiXedKd3UQKKF7hbBbvZeipjRpuJiLtCC8UB3NsD1C12Ls3MuaysmG9RDr",
  "key1": "3Nmz6x1Jbtuhif1triFZfsve6HkDM7dhEmUncf43JTsULKkbAJScXTiCeumY7QrFtGyvDHZhHyfagtSymQqaPgth",
  "key2": "2cMmV8ML55D2YmrVSLyUrFthGWgVHcycv4Cs5qUgYfFv1Pmy4DbTHdHdHLVdHdHJjRVwuYxHUUhwCjdfTqN8uK6c",
  "key3": "2gEcXiqtUDMGj6vEn1NPXBjecohM4Rhqse2GBccRbYsRm3gRMRuwFpLiEaPYuubt4jV3YKYvmKAGraM2RmwiJ86m",
  "key4": "5kNR47SFviy47ygznA4ntxwT9SWVu6tk2JDGg43raxXRbC4dT873fU8hRyiHKtxT8KcQmT4HcrE4B4Unpxv6GBDv",
  "key5": "4979azchqMBN5GQjzbiKbNDACev8wemfg5fnQj22s8vLRhmqBbZyMD4bCGo2Amhq34yNQrJF9ewB2WH1RMJE8KK3",
  "key6": "4qgnsxcicTb5tDSaFVpL9S4CiaB9LSeo7kc3z7R2icMBzcGRz5iv5F9v8p9qqq5VvEuA8GmzLDUd2ccbtrAcNYE8",
  "key7": "3z92eupZtxUYw6RU4KRZziCT3SbU5Dh99LQfVY3HrrJAdsmw3JuL4B8YbM6TupL7BUNtRtUp9oxpz9wmrGp2ogYH",
  "key8": "3E7kTSPu4WsGDZEeUNApYWidHiEngXZ9tc3tu5faTLj9PA7vUzAv6Mdk3uwxSAYzkWGGown1kWVSgZMusw8k8LkQ",
  "key9": "3ZpF6L4ZTqcWG1pNXHB1svbYXQeR5Z6TYLJDhpULMjiepU5wkXTZ2VcZxN4u3yxVe4T8TcQPzSc3neq1DTE6Ejf6",
  "key10": "6hqEcmKyZcMr2pq4RhWY3jDTFJ6617JC8dGxbxxFzmK43hUJa3CPYZLzo2ghkwmomMmB6EhftQrmUWN4XFVpKRD",
  "key11": "3UjRkG2PbWQ1XdYXDip7tveWWUjC4v3tzA7HJ6mseyuKcMgpBxry5pMiwjVpNsqfACMj2zKWmVDa5t9BGsWxAZMd",
  "key12": "4cW5VXfpXJjfXVVW5DgYtJTQcFXSSQ613YM3WrqWhHLx6SeT8DUJ6FYsqr5h5vFBiBVubS1wQBody7QmtCrx83AG",
  "key13": "5hN1FBhGZRWHAERS1uTUuyajj7uZCAbp17yWau6mNHP4b1CYZa5VgMhxV1rKqsRR36NDDRWr1EE7DAf6vJNGPgsz",
  "key14": "VvwNb5aNkeQswiUvhej6bckBSByKy8w7HE3aEskGdzfYPNBo6Wo4JeaLN2YZuBRFccnyVj8X38w26fRy3vj9vHF",
  "key15": "4c5zrm2CVJHUYTU4JExDQDtu4FkhtKy349dMGPXr8S9z9frRKzCGNZnafEfe9tUEWVeckQ1FTG9BJqF7PzoMXZfD",
  "key16": "2gP4pYLKf7Q4Fp5jCaNHii2H8rzwAUD421Bs1vp81qcKvacnsEJW7wD3rWUYggUSykXGfCnh6GEscBQ1R11Q51db",
  "key17": "jL5j58zUy5s8XtpoPewFKMQ8rd3GhGVSmS5gd1FuGNNCc6VmsxmYTk3XEkGTpnwLPDXVXHExgRPHYKjY7M1yw9i",
  "key18": "2pX6NdiRsbgnmABGSKMUCosHfTW6EVhMtFq97rSD6CaSjS36te6tCoaZiXgj79yu33n4o43u6TsmA6dkwthG4Egx",
  "key19": "55xsRVyfm6NB2ZuWWjm3KUL3DXGk8EjE2AWcKLJiyUdwoaubwMh1trcAjimBVqXB2nkJ1tJxPFuvMGsLTY81o4by",
  "key20": "536LTfC8WARK1HniE1QqPt7xEMxhQYf5kx5e27kZJpnjjzkZ3FLgcLCP2bUcfsxHgsHQibuJa5La8PduPerRZLUX",
  "key21": "2hujyht4918LPZY7JmMKsApZnX4qGUvx6vqoaXNfYKMYnWUbqNXXznTidVmFpSoPWikYyTmKSW94qjvdvofAKUFy",
  "key22": "5uaAd1Et6D4JfEXsfdcPWnbVBFaRTYShPMAWL98CZexTEAnn1rZ4QGUDSxHPEhBXCcZPxJfJBcB9sDDgDaUa2nMx",
  "key23": "3cSai6Zy54gSkae4oZd2xUDRjWdyeGDaaLrB9sd6aQRNRMcJ2KaZnB1Q1pNbXG3vMGT3ecpzERub4kgtRChjScXy",
  "key24": "3s3gNpdhw4NAgJXUegkWUNa3CjPkbqu9XfHi3ZpQuzJ9fJwm3rTUHm9qvxbeNrRBvLacMae4H3Ma9S7akjKLef2P",
  "key25": "5ptA74GjX8uA2HEd9W4ut7waYuN2D1pMNKPJAPZyZAbwa3qHpAkt2oKzBcmrMWEPZqqquVgfSZznS8r6MfSoRQ6f",
  "key26": "P3MjvJof7nFR3svGk6iGc9ucPkp6RAGZztkzmdXiyiFFbraSwAMmzV6BEumtTWiu1gfRkzge2nPfSd6Gtok81pP",
  "key27": "5WeRGL7nSTmFcigr5oxrCa26BkX5PWrPJoRhms5XGCtTuzhaGeSY1MeNCdWjzWJuNBtkw8dJmdT5HchD8wL3cJ53",
  "key28": "4YbMmvnufjf1m63YbnpC5SSUZyajqWvRJVfgCKz9JbpoAjRfw2x7ibPVgz1Xd8kvDZd7JPGZiBehteEtTYWvehpQ",
  "key29": "AZeJv2XgjyaXfeHkxLNp9fKQwape8i7hzUzsmMR6mpMnHWM6JaNACuau2jFk48cLm9pZQP1ZYGJnhfFShWSExHq",
  "key30": "3i4J3WHQNTCnucEG5eJg6B28uhtKupjrNcT3D9WNj5KdRR9uuoZiWicRv2QYoL4J6PW5U39guNHV2nYKWsB8jhrM",
  "key31": "4xgbYMeaGxRNi3x9QvXEHhHZeQU6dtrcECeL5n39NtQw3TbhZHZkJ2JC6y7KxeEd9av4qETeBYXci3jQCHPiUPgg",
  "key32": "428xiJQz1s1F8eNrFgAw9jw6rvw5se6rLhxyNTM74wuoKRUq3D1jicEWU9Q21CKgjyv86FX4k6bvq3e3XVETYkRB",
  "key33": "2xKSgV7igakquz6uanRYy3b5hxBJ86VFkxHbJPp6WEXaoVDFNPGhAsjHpbkr7w4Hgtaw7TNfvCc1Z6vvVh4fDUMy",
  "key34": "4EomYMfWQkQt3H9bxgDgdmm4hecDJ51qSHQM2rGGEUh3viGHCYhnwizVtSTcWRtSnwEKVDXFe7snqNRF9kzNECBG",
  "key35": "2Ys3FUp9hkXif3dyrJRw997vtTQcaAUjAcbGcHnpigmCgvCDxyHeQt4c6eFXQ7aDfttXq3ZgWjgVvwgCpFhoE1A9",
  "key36": "2c3eQdPVacuLJZ5qhTWvzB9PXfbmGK4wnP7BEEEKbWSzYDZJnZgPqoNVPNHtYr1PNQDZoEXYW6x4UbDf6puiqA2R",
  "key37": "2AS8EF1VZMLDLD1sxYe6TK9sVvdDcGE4sFCEpZ7yECSHHWuqm3AAZRL1aprbBJpCcuuSE5zBzdaU5TRXZ2wYv1z5",
  "key38": "4PEcs1AyFAownL9KYNGa5LhF4xuw9mqPKm1h2TWhuSoLqQqAJB6HwnbViGSjfQvde5ESVzd8xDFLr2xsKh9rxfNj",
  "key39": "2RMJBGvdFK2bJ58vdrzWouM8j43rTSZhjoiMQ79KWRsftXmRwVp7DFPwcjm4B517Eh1cDvqMacJiHPbyXuFqnypA"
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
