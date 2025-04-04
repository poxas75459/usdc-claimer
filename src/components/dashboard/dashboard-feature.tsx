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
    "hfZmST66MZEfuXmPDQQYyStTrj6eLpxY5Nz311z5pwZS1gSN3f9eet7SZdYEJhM6EAkG1VccrNNoq2qR8nRgXHS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63Nd8ENv3q4GhtLaDafxD7TfxqxXwtbCHNwwB4FJWYcscbZJ2yEq99N8n1q5qWxFs29FuBBgcaECgSWTpQn8Y9i1",
  "key1": "3nVe7GWbUTZdqLUw7wqh2orFnmV5CwH8P73W5CmKAymBuRj4fpADuAh6CKLN7QwuL8EktCA5jsTd8DKwnQwSCvAA",
  "key2": "5CxnnHibTwkZqSHsz2wGSuh3m7AC7kCek5CroKY4J2wSMxYB6v2nNKto27C82drWH55tWutGc1oSyBp9GRqbY6m7",
  "key3": "62Md2GdJJeYVywdQR2tgUZ7VtzPtfUmjFVBcS2udZ1rckaKbE5ffJkijsi7ZBB1DgYEwDaXAYuYMHZCBi6WHbQbW",
  "key4": "3JAUcQR2Pw74YxoHif32Ke3W3ixq5WFuzrns1vdETkqvMdJLpLRsaSgfjBAtuzn5UcnD587EPbHFG4U7Qipv9J62",
  "key5": "4EH9hStf1AnQERoJ4N3AsaosfQcqsSQpjDqC7hFTjEbqL4bJbx9fFfvuR3BtjVRRfdUzfUx85bREpKFFWRReW88k",
  "key6": "2jxGPZUi4ogseUGXv68fSBRbrNaruQTjWhSQx1uCfmDKn349niX6VoVXGYSJEyFMnRcBBYAr63p7A9rXiGdAuDnv",
  "key7": "67iJk2wrAJfPMAxZ5X59sJv3sxPNFnbBNwPi1SsuNauSi4H9pB9zC2ncRWHaWYgsQMtSvy2updgqqXgBGBFf6GTw",
  "key8": "3SV3kSM6ZgeQ58QkZJxhUKPU7wcoFcf53aLUtx81Mhtv4R9tXDBqzKnt5uuBmgPDZbckzW3kCDwdkhTEVdzcPJMR",
  "key9": "5u5zU5k5KtEbJyG3jN6VhpzBGgHxGZqA2ut4regqdU72GoHUkSALZQqc27LCSU97pw4LdeeiTvbS9MZcsj1MH79Z",
  "key10": "3sFvDqbgyArfCmA3DDZhYCiJP12ybLywSDYF887ZpFf9fFsVWLyqKJYZVEAUVCrVTvGNPqjiHeKEKs4CGnxdeLpJ",
  "key11": "2p5hksskxdMW7zFfQZzjK1FQwmbBkmrjs3m7M3wnZovTx19ny6UtHzWrrrWgDRTJnvp154mHwwEQzGR3s1QTTbei",
  "key12": "51gu8rQAdQ7NP8nfrB6hWzLcrxKiD2ZjVazEarcMJBAXJdvG4A96NGorWTorM22hBaGhPBJ86bC6njSvpaLXdfHZ",
  "key13": "2cPyAu2pMLZKUKcHQV5rDkQgeZr9Ew17krUA2XhoD5oy4kFc5VUqAccydPmi5G7C4RYQjSfN4QYgv6z1hDCPiTdB",
  "key14": "DZsKr6ox7wT16vyK3ezm16h6GYnW4N2ppaEYagUhyyMGum6Qy7GXKHBTS1GZKgciaXyU2XD8TiqsuZBqph34NCF",
  "key15": "n56UHvwpKYDbACwZL5BEGz5iXP2pVpq62ctEd8fcNWbvBSdBsgJtrg54gfg5Wzeqt6cE3EjekkrWgKYQZHyJYBf",
  "key16": "4LeegCogndJchr7roQ1mpZWGAkL6qUUZA3iKUPeg4r6WFfaLZwT8bknHSLMikUHAMpdXUSuTKGvwT2pFMxKMGMRK",
  "key17": "5UYqEzSq7uNRAtoAs6WuNYBwHDDVvcp91vXUiJzg4Z3re5VENkqTG2dLojLqr9vMn26pHwHmMCtddkP56pZa1cGb",
  "key18": "2C2zct2LusxEmcteV3mVDKBe78w97sfBiV3knJNNnzT8bYd5tpcvEbEbfJqoDzekxzNLFiFQSpTypUiR5BFj9i7k",
  "key19": "3QdbBkvxNSmj4YMGhjbJypcwRD5Vug8xck1cXnWgLv3VmR8Yi1WMVUg3pJxpDAa5JnLMPAxTCTcjEQYyNqrXD9Wp",
  "key20": "3fBoM2mrSF3RWDiTyTULe4GX19LGGmQXBuZCvyN2eSbRkBxehLSgNBJjkSMDpdpnhLRNjiz4D3Duwxrj1GzQSKKj",
  "key21": "nNQDTDAWe7zrxChqX73xPCLgoFhsgLettzenBBNmtvnhUJMmudiocY56ynyW6ddPtGVgUcgi7NLks1TaWira8N5",
  "key22": "22FvdaRvufgxqnN1q6Q7bNSr9cZzg1MENRszfz7ykFQiMrZUPutrLSjR3KXXua3TqeySCBfob4nfu2YCf4mikp1b",
  "key23": "4YiBzCUu9YPfBasC8A7GyesY7H8fHngGP9jR9njRBPy4z6xMwEaikbDEhCTzLJbiR95rmufiRCLvHeF9HDt6diRy",
  "key24": "BtWQVBJvDBLvn1ch4xb6pNsqMkD54xrcG4SquwqDBLFDWPdg64kASii7akzmU8L1MnoT5tKazCtdqrd9VrGdMgo"
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
