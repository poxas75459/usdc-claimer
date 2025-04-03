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
    "2prsZtoXLWwETV7TrtZrJuCPkyhxKcJxpx87YAct7JUsdxkBnwiAPczPfgwwU2T2EJuWtbPF3sjBqj3tXgGCRNJb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34eQNW3w9w7f6TgdPctrtygoYmBgeo22DXpNN8qhpkr2iy7FyS4f4eSQSMpigBZPgv4fm6g5KwW6eFvueUdnE9Yj",
  "key1": "eT3TNqFYmkbq7kwKweWz5MaxraA8z8y12o1M254AqMNaEoNBCPfLpyrjk8Xhpj4a4PyJ6kP1xPLaXUvi5jkZEoE",
  "key2": "5Zx5oGJshsEn32esyiNJT8TgAhXjEGUKTPgtfaukBoG5F8gEsZmWb2To8ut2zNsgkGCqsBCTgdrtjrZhy9pr7d1u",
  "key3": "48YES5KCXj8NCKB4hZoygvHNwLkqCPfNWNKvjbUh3BVW3n2FYVU3yCScg6s7BZUNHANK6waqTsNfdmD1yTCtmGDp",
  "key4": "2eLZweoLfoAVvc4qUStuzrVVpAisP55Yho7sC9YmgqeezqLdEMe7PiCzogTZiz5q28rhodM8EJLs9hPYABmspRm1",
  "key5": "5uG9GjD3M6zK6pVpwEVkgAHVMWBRdNGUwaS3FsacPwJCgBvWGjXoJXhQ7ARDVo2nt2GRQp3vTVZnUwMBj11de2xS",
  "key6": "3xytzjkLmbN5A2zFKAvfdDCxh7NGYWx5VUVFTCKJ8XKcsEpHKSducDqMUtAUcEUU1AYZ7bexK7MwZrYQuHXTRWh",
  "key7": "5Sr4ZRwfVv7462wcHNohEatdGWFUbD3wKzra987xVtK2hyWydn4wuVYKpsXRSAx2gyPT4cxVH6uegQp6Lr264UR9",
  "key8": "5t92dCbUStZ53KZMV6K4nJEdjULo7DR38zPxqefD1NEEdxFNsNGj9EH4TpKgrRBL2drhxiCsyrBkcpqfsFY1n5HZ",
  "key9": "3F57oMPemY18abWKD781sfnqusti3ZpHFTggdNsDFFVfHYtnqRRQjXdtekpQnhTyuZvwcfX4u3rS7YVD5xcL1VDw",
  "key10": "3AWR2Z9ZA11WoLiNLmHYujSzBJo8WiG37xUumi5vetpTC1Lw7EFjXbYYVnioFAjrtbfjcZcezcehia9AxD5v7VXx",
  "key11": "3dUyssG9WhdJWx1rrGk8rP69wuFEYjRHwB66xm8yXeiPVzyb2eUmP8t5nRMMAXwbnBg7eMC4c2KEXwN3jjHKdqZp",
  "key12": "5Z7fXaksuGArQpSLhXy6sxoziW78XB3hYdJYzZsJ6BVAmLpsrcSYGLoW4L2a5jajMG1Sgx2T8GFSpMQ72bWou9P1",
  "key13": "43m7gBjVuPaQLRcRNmwo2emduBsTJJtNEYKg8EH6nAYpKJLDjFHgGnsWab4iwjeB3VcXASqWc6AGPEcEdTigdmNo",
  "key14": "2xreRHXtF2C6Kgi4Mx7NxHxNqh5QeugWpTpXCggtys6diuXbKoKj46WumA7pnqMXZYPV7pT7MPztzSHj7TZN3idi",
  "key15": "rvGueYZwuM7g74twvpq1ndEBCFGcQvp4fUGvo3Mwhaa7qUagzqVvMwYuJzGCsJRsPm7JxBRsMoGNyEnkH4pj4Dp",
  "key16": "3PyepPDwpeUBGyK16wEP8ioUsF7sLV6wWGc23qgRbjSeooV2wB1BqmhB63aRG6kY6PYVNsushKQb1KJCKZRw75YS",
  "key17": "5JammDbt2gHzD3mbXaoFYxtZT3qtQmTir2W28PoSWjo1aP9jvRncGP3yUd2RdP9Z97dW4cUprqYgZLMwwpcvFiBb",
  "key18": "HM7Sv86JspAr5bfYn2QSS81DsWV694g5VERzo9fuDkRVrZ53tjsYXvJKMahvJhNa2kr2AFn9dHteYerRMNJJDrK",
  "key19": "2yakUm3EyohDyNWya2C6Ex2homZGY9eX8gXr6rhrM2kkCwy9QMnBkcfcuWWzhVDhNPCPt8drbG9b4NiZums7fKdK",
  "key20": "mYNGApTUpUFSzwrTPZ5eeU7UyAG19amd7peitfpdC1ngLvzCcAjFmYCj4VCywhwXJ7xaRFBH8ncfTr1Wfp25Waa",
  "key21": "zHhJheCpFhPAt47WLN9LXgFQbcsogyGcNsihSmjixMn92nZzBRZ2sjfMfwxsu3mvfRsBJFb232Nci1gecz3hffd",
  "key22": "3vy61nmbydrrUbjreVFzxtpBF4A1XuwGkjv4CYK9tKZqLVxU5HjKwqkUk3VhtkYhsGFWifwAT1BnevDJJotY13nf",
  "key23": "26VAivCNGjeisJKeDMQTTrJnDwmGavEqBYLTC1anYvJUvHaVXmHiZ2DRPfBec3vPaUUM3rtAKn8YSL6ViLtrWyYr",
  "key24": "cgd9XEWKVBTbLEnd9n2e2gREt8QiB1LeqGMCSvxUUaq6LzyDu5PDzc8yL3Qc2LuU1vzoAwHP7CJfyhpEZ5qpDC6"
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
