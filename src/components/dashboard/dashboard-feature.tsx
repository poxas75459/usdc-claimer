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
    "36NCysUvbZW3bviuWeJsKLh7ypPMR2nprEGS5D8C9BeuZ3jfDNJm43FLT547G8JE4tqRDHrwYCDRYPEM1WELar1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hhjWFgjtCALNoidTxCZKmZzttFfSo9pLaBXn95DCcpD8Bru1s8gmgbp6djyhx5CQfBHuaMhcNE43e7Aogpggk87",
  "key1": "4Ei6pvtqPSj6s4EYHkDLUBqNTKLFQEg72tSejYjDkZukbtmqfhp8Juv4tATy4DFeftXYPN4S8q5sxbjS3cwbWvot",
  "key2": "5hEUmmEHdDquKtrqvNcxwzJCFtQofqQDaRahrWsej7W7CgFmMFiYe7maNCsTd4xhtSXMbdu7gYN8EaHiTLSf9qP1",
  "key3": "2Por6DChsdEKtMernpeVCM5m86wBDTZ2RKEaZUGbEFrrnohhcxgtZZH1eNoRPJwUJR6WbCPaJoM8qwsU5P7r51fS",
  "key4": "cMYShdG7E4A5z674KrdBmcfQAZTgHJcE6UK24ag8BcfSuRCT33NULcvGQUmVL72wmtfnc6txL9UHuHPnbBcFXqh",
  "key5": "4JdnbLWXyBeBLjhmXRDcNA55RZR1ctvQfNr8UaUzxkQLL4kpHMhmpf7KM3ck2zhca1oPEa1VyZzrVaLqVd9U3mZj",
  "key6": "iBCRVwCZ3d4NHzkeQyfTF8of7ovQye7tYe5DvesBPuwui1aeUZBTkZWo7bN4wJ3MF17rT3gVDTajeTCoEiSeSqe",
  "key7": "xxzMKveWtK5jZUFcfL9zHE4QNh8Q7LHiMJwPsef8v1zSGmNaw8FCYNgyvaxFrKR4vVoNhcujtqrX53DJszV5QpS",
  "key8": "61rvGUxumMPjLgMvARACxq4DhVV6x1hyMd4JAXWiHj79q5tJSiiTswnF1oDocG3zSEqvazDMvX1hQMSxRSAa5qp2",
  "key9": "4YgZxqF6VhCiGzFZM1GvT3pb7AhbndXfJXuyGYDWH6KECzQEZCGoV1beQ3D95CWLBFo2rNndjvdxifcHwET9j324",
  "key10": "5sHC4avGRZF4UD2AEyKgnsG8oh3VjJoEAHYViFoxuYb53eFSML8iYQ4jQemB6YagNxY1XJvZmicDu4Pe18sQoXLH",
  "key11": "KQZREMbMSYSxDCmim66Ugkr7oF3JzigDoKFFXUZaHDPictCuZLY8w8LDCtD6DVyGj15P771edLRao97gTy2fjSi",
  "key12": "36R4V81LEEUzYx9g1aoUgmkqbzy4ii8siTjGWJBsiwLSweL9zfTdvKJZp11B5hTA81LGTxCy61JmwUdpaJnM7nHW",
  "key13": "2dPwnPAG7hcmAqtu6f8a65gbDUPQe1vcbgAYEcxwYgTtNc2DPgzQiywNTKq6N9HtnMyQtPDuSaBeYbXF7gnm3C6c",
  "key14": "3xoRaoMQ6VDXMfH4nGMyDCeXE9mMAgekG9gPD8AD2rrhud5Nha2yzXYvmEQJdh3yG8K5Y2RPcSb1Z79E5hMQ37Dy",
  "key15": "66kndjLsnSbGibY7DBb4F2KMw39k5DBEq74XSfC9a5K8cR5TzQ2dAjERtqibgj8Zq3WDx6hyGeGT36SeQTUZ3Z34",
  "key16": "2Pp6RsmeCieGZKAWDVpuv3g6BwjUg6FUkFr7pCChzkjHuLA3sw92nexXfJgUEQgXqnhJ2hWE3HfnNzC6durWem6o",
  "key17": "5EPfcqN2F355NkGoVfkFEyvHUTUJ4iE563mqZJ3JCcY5vRGF2v2gYNUHRW2iWmHxNTsdMhatG4P6isHYyPnATSjd",
  "key18": "5bo3FBJNPiosWMVPFVovWEJEyx4QL2mHUFSoezBntHjD34497bszPQ9Cdqdw6kQSWufxQtZFgQipLmAABWh4Mo9B",
  "key19": "JG8TgFXwdRVzzNu646u6ePAew9hBU5MfZZGvMXP5ATvcsrkfs1RsLBEkUjd7iBN5v7pehXzLpUKyk1bT9Bq3mXm",
  "key20": "52oVGni7yaMcxb3tFqVqRzSZVHkg8VmkGUczWwg6JE9D4Agq4W4DJFPD6bfMStz6xrgRWZjR8F6F5HJM5RZ6LBr",
  "key21": "46EiQqQ1E2kPFpUKNZ3M1doarWVbjzxFadVwnSULoPcy2KdsxgLdWMtH63qS7GV4esfdVWjFyR86da6M1gmLWJPk",
  "key22": "5FGitb5BwoL828JiuZ7JYtyFRFSUmTwPzcpXFkuomzcEZWkURR7Z1VVhANfFKHPGAoX7yD2AJZgbJZTm8acWSJ3s",
  "key23": "2h91iz3AJ9f6nLfywvSPgUVg3nxuZnmahrjwffd5VjtPcZqPQ8SVgrfcvSGCuKFKpaqMYxNAt6ahaLsiMYqBXx6S",
  "key24": "23rCBNPD9VfYJ3CwxjcQid6uod8eqfH5NU9BJu7mNj8TakBZa7mMaZrWV8jrETEjoixYdjv2ZxB4WZsmzCEJBfj2",
  "key25": "2GdMfkDFKWoSKTfXUKFQJZQaytWrk1HoevvheUGQLtpSGQ5ysmhSDuGWg53QMoiR1Qamq5U3QgDNQn7UT1vKiqHx",
  "key26": "5yUF4RV64E3LsJEQjp7qN29K2XhaPs2jnw2bfj661Ai8u96FHPJXWudDAGj2GyJBccMxPfA1E5N2VeuaVEyh4UMT",
  "key27": "2RsaACbg6mhkRPK5AH6QtRTTVqmgN4s7uS8AD4oZ7oMrLnsdDWDUkmGoSmsiW5MbQJajBJd35itWLohYd4oPJy4h",
  "key28": "4pEWrLRPkSj1RQ8xK5cz3wPbHGzDfU2dPgvb1KyFggGiqX4dujPGrG9h3tpySYbzUdGLKaePVfxXNHp4htm7GgEM",
  "key29": "4MEhKiv5tGbv8pVkespgQZPaxSvaTq2qDR9x46dnAJ6BHdJbWtqDq77sRvBeFRn2vPdFwSDfG87DKag76nCj1tTA",
  "key30": "3WUk3zzMF5NandAD1URQgx2YKtSberSbvikU2B2QJk7ssFZGhdjYxvrUgM14QYGkLduqqiiJouT29dpWvPnLDRjt",
  "key31": "3v857NxUdDC8TvkrgH75szHVHQBHn2r5RiaqYXsZHDNKnbUSCkNj1fd7tU7tZd9ij7fze387Nz4KydWSM8vbMn47",
  "key32": "3MgwMM3R799aivXkbxQSwKq6LvKdYpTFrUaFJ8senY7WAZidysian5p3ZSiL3fWxPGZLMnF64Ubh89UyvqA8Gdai",
  "key33": "2deVvCSmBtvBUEY74bLeYjbsHik5n223PMy9hkePRyabQRTFuLnd9Bdpph75EVhY7a3R3ap5EN1akj94tDKi65Sm",
  "key34": "2jNkpSyH5brbxRqt9vthDpky4j6GAdRiZ7nXWx2XinSibT3xnj3NdtBSre2VQc9pUL3FNPsHQkM92k3WBjYFDimC",
  "key35": "4haAuLAaE6sqevMFzmr5auWvjgwYadbTnim7t2KfjMbMngLCxaTNFjeJVHDtmYv47te93HueuU7aa8jV6bVRfyE3"
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
