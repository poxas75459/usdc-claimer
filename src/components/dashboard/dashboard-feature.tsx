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
    "2wKPmY1fCQhqEDxT9hUocqZxEGejUXT7oKGr3uqTbmFiRZeP5sokpV65YwPHG7j3MwobJodHvuuqs2eKsqb8RLut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aM3ReebaZL19axp9Jgxp2MxEGw2Bfoh8jsiALqGbh8MTLvnpu1Yyfu1oUMWGxmebeNdPNc4vSe4i8Yi1am7GR8p",
  "key1": "4P2qsNFftzhbf3nP6UzHVykmNAjyZzA1RLE1arGxNUU1gvQtFxeYGsL83Cka3vpLcJnydK5D1eMJRP6bDLLiCowt",
  "key2": "2e3hgsw1B3eaLL2RQogY9ViDaPNgRvEcYmTMUzD7CgHrVgxtVLykC8F54hKZPnKqZKJ3iAMRVfdYRrAuMtJgCs5y",
  "key3": "2UC9WgS87kkHXWcSTvyH93YHQNFpeJzxqoBodLHoM8LGGACru7ekGgZbbCH2P5B6G27GjyyqHqUkF5zo7rsgCd6g",
  "key4": "5tEb7vvx4tAVWSqNcZFR8jvFtSBP7eZ8LvuMuAUjwVCD7zM2SvU2y21rnCkK1sFbKxBwEYUA7sLjnsunRhFu7w9o",
  "key5": "DrkCG9Ew1PQarRpbXK9aKwGrVjDerApXxvm7st3p4jKJRJMdNPktVLckXGZXy74dRNTFQG7A471CKuhVFjhsAYu",
  "key6": "egRKRBxh3y1zg72ots5KTYCaqjsDUUCL4uSWdEqowdZCdp5ZRHWYyCVZar5BRsYtqGhSG15KNLEXHihLERqUwEN",
  "key7": "sFFZJfwG5awZm38hrjkJrC8ZFzabuWnNfe1ZAwftyKKkkM1cYwG4YFSqy2cgKGCndj5SdKTo1VWYZq5YHYMpa6c",
  "key8": "3DyTfbfNpJKyzrDRzvizDv3SptZhuYmv4RNLSm6vxSESW4uD5zCCBpMDHKAHdLLiMXXATXiyk7zbFZmYRK74DRWP",
  "key9": "4nJA2Ugs2uM4BNjc2SDT7qsULEUzVAwjKBJEYis8V1erg6GczmGryDqZf5TXoUDWVWUvzUqsPdnhGLt4G4CQ5Wcw",
  "key10": "46cotEKKN2tk1rqwBqrZkLC4jroUxuapV2XApktEcPPL6jZnCnpGCP1Gnk1XAUS86vr1hoKAn1MtFV8B7i88hc2o",
  "key11": "2Bx4HNoXN2hKCwS9JSyGvw5XxAwwY6WnebjfxEqrZNKYwi3ohoCg7YMMcmX5EDWm5xm7TBRAGGkb4HL8goUQSYfi",
  "key12": "MqhPyP4WEBsqrQADWSs4835yz6PpYTZkm6Yr4gYWRAc5NNdQe8GqfoXdCBAgTMAfDxtK4gx437Fjx5x2q9Cp9yL",
  "key13": "2vu28cLVckDBEfuZPFedXXQEox84e3gekXVQhtyUqc6mevj6uNckD12ejNQPLeeAyxg6ULyjeYFyroACN5eWRk6A",
  "key14": "4VCPF2X6RcZP3So7g9oEhJJez8egSuBeYvLxMvTWjiddM6irY3PiSrwW5WUFoS1bu5hYCmhnqGxN153h4f9FJjW6",
  "key15": "2z5uwhBNQR1hZsKqGTVwEojcbK5ZaX3PSkSGBsLt3b1QsAkPhdCqRAMK7SdjNE1xPYZhcdNcFjPKhKri6QRrNNqo",
  "key16": "4Cf9juSxBHQGZNQjTfaCS9FatPfvfaCqWxAW2mEA4PyTpd22GM5NB3tDygNgKRraPYC9HjmY4VJfY8MGHqXaYA3H",
  "key17": "5HUDDAV8qg2AADmtQeYwftHZVMCK77bzcHbJBjpWmsgXUsm7wxNsPkFqrqhGZPYvw2fv1LUizEBAwjs7jKKnhbNv",
  "key18": "2aD5xTqacFfxdZEu5ed7KXQRUk8gCGVsFBM7ehPNvNYcjj7k72HDQUMB6zmaNoS7k5fimdGD1GsNk4m2Ei4PAE5B",
  "key19": "o4CaE9hUREMvpRcgVZkxQHQhvyrMoAyjnog7F6bvexjpy3S2sBSfHR3PsC5oKSNuwfwUY8WaF2xziDZABpDZ1jj",
  "key20": "3hGN2RGEJ1dLy1DFCSA82N9rMtXqSdMEA7bDoKvFcVN98CVWLCHCq5qgJtcbUMyg5RuLAAaywmY3QGytFcCiXK7e",
  "key21": "3CTbWbXwH5vVXJ5jSbjVQTYCY7smFpAaTPdsK2jWwWL1aqcC4hZvNaZPWweTCa1HGAHupGjkv6ShjqnWPXpbbzzv",
  "key22": "4F1HjJ2wAog26CuqXw8KxZ9fQPAcVtWJEpAjW5HybaRJfjbDkzkF97bYYjM94w7oJq5nbhLjS3tguLhJUkK273nT",
  "key23": "5YCAqwd4QUm2XjmPgHTxFe3oXFXnkGMyrvbeofSbgsRiex6ab4zH2Rb4bdBu6UfFS4PTTha4m5D3Jk6CyXxq6VxZ",
  "key24": "qQzb7yAuWG7SrhN78QVwkgmMBDTdrpzrnySYejdL4ec7jaw7XbYe387cQocv1mk72GrUv9LhhiVYpeA3cuFSubY",
  "key25": "5WsVfd2WQKxMfkLQjscjG85tdKhrFDQiDbNNgwomQBJJLrVUCApyMuKay16GvN395kxpBKC69Bkzs1mKvmu6ZLZr"
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
