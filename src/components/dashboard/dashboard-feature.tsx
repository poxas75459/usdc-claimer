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
    "3QMY5tYvGR2sX7YNPTHF2z7yENKxAYDXZLGYN2CChgtBzhx5X64fvcMR5guzM1cM2v3pues2zANeRqCFiieVsxZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYdqHRGVrNN2i3hLqD6Eir6x2iZAx39BYbhgCGWQzdg7GjNmqvYjjuCrEC8jryv1wE8TkQrE9VpVB8qDeUGAVwk",
  "key1": "4opyjQSD884CYo3pQhevxv2NmaQmJk2AEPZYdxNAryGKm4vn7sZRsungLitsj9z46SbD8F1HG87AinSoKM9JBBkq",
  "key2": "4zLYvzspDutvW8YpeWknMnVq8uanYuF9ZmKSZAEXbxJV84FJpcvD8b29F7JJH4h6GZd36QMBCDJhaLyK8MKRKEYp",
  "key3": "3FYpo7XyZySQWffgi3VcS8GQUVxAmufUu1TtfS71UewEixHqN4YcoGmwYbyWWgzoFDNFDBjuqXMJLF1UMoegeAkn",
  "key4": "5ea62HBVFmD4CUosLR6nyeRGQKwH3SZjLgS7hpz76Ad1Nbh5NiBhdGmvMuNCNJgtYfwe4Sr9Gzu1Hu3B99md5RaZ",
  "key5": "3fp839ee2PvX9jCQ9zBWyrwGHPRbWtu3ELLh3eukJuqbap325FSBwQQZoY6Toij7962e29CJnN1y7mECt6EdWfPx",
  "key6": "4z1oD5HFjCpzWwithBtFFfwft5mh2kxgtY5eFYEJiJCDKG1tkMhQJD6aRjaE5aDQEtfHuLvVSy8Ft2EGGNTsQbLk",
  "key7": "4nnMewjNugUnRFJmBsvpGY7pSJizkZTxuYgvYJpj8kaQ5M1ix4SKhWkbBePsdZB8wKjiGNMYcJmg3R1Gt5c3z6JK",
  "key8": "dFNDhcdvUadAw6Rpw1EkLRbFpE6pwczmgXhbEb8fCajG9iUfiiuynGc8Kat8rpY7wtCGZiu7BNNcmdbhfTn4kCi",
  "key9": "4fv3o2uUA93z1eF7CBjSXtJ6UEXwyh3mHq2J7Zj73i4Q1SMDesx91vZwS9jDZ1wAXQXAWk5EE6XB7P4E25XhEsJi",
  "key10": "2pmgox3YUfFoX5XkH7v3Tm5LAGW9y7kHuFXuf66y7f1hg1YRRc739i3XsuzNYFK85ButyDAFV43UVepvdCCtPmz5",
  "key11": "4Ng3psiAGRH4Co1rxmEaXmi6y9HN2fmwiMt3cartXgmQvAMg4ZETnhSDnASyuirSBhi4EQZBXMoHxQqcA7QnQSuT",
  "key12": "3EPqJFLP8hC4mznAjiSr9f7nQJKiAv6XNkRMQRSdpBPVc2DXytqGBkhu38XEqCZFzYjmncG51UTQ6hJFyWtcMQET",
  "key13": "3Wa1KCUJSzmTT9YHAgjfvudeWbukD5TwB9tZtej6mg6Ctdd8P8EDhcAXm6vLZ5N7EwxyfwKzzmHh7BUBQtoX8DmX",
  "key14": "4SKnGGZY75Kusd7f1iAMguA75FgKTorGKwvUqpu6KtpScjWeGkx3LwWYLLryhXm8Emf7yvGN8G3tqzy3BBmUQE2t",
  "key15": "MDUJZthtSrmG1113DoRzQ3QxrPd3aVry3FviqT1deZUfGRDonA9jn9NsgGLYRzHCK7tznmknzFq5k3UghePk2b9",
  "key16": "4fPU3PQWTfwL82SUoepsFr85ZN53dCGtMLEbWepmHBArZz8zSen11nPkPcVHdrAwzud7RxWyFqcsxGacpd3zKHpa",
  "key17": "pEK7JhfShusdZCd8YAAxK54edehGzWzvqcMQcAW4JzExYhnSFBeYvKDCTSVkesWseBEC2eMT7TsRb5eFZmZ7FoZ",
  "key18": "Vxm6qn7pQd5fDDtKmiDDvwizKC9hio5jn4fyv5b5XqyK57tHHCXExw7vAp8HSqmnN82y5LC4oFcpnRWmcmzuimS",
  "key19": "5giRAU44bfWEjE4ZaP7LyqePqSL21EEYpWtsv1NxoEQaCasya3Rx7biXmuCjA1J1oB8wnhfsHBzKbeuyVFHVPohQ",
  "key20": "668BnqDMHyL3QDcT12g7WCeAvsnSFX6bsijp7gnN5DTweiVwn3KfLbsRpJxVwaD3D1AEQWh6QyE27CfoFzJD59Zi",
  "key21": "SZG3PmYEmsKWGZeYgtbefFyqt9Cwsj1wYw9KKA1NdTYW7bCAnwu3z6e29f36iTJb4WF4aNnqryaowRZoouEiUuq",
  "key22": "xu5JgB5sNGHZgMtS7FogCuWnuLXrjKx8TLXZQ97XhT7nmb2S87s3g2ZJGMjrJiPSDCWUw43ebABVoKgndeAwiA7",
  "key23": "3wWhcVAF1FM8ah7j3aKPY5Jx5pMFbhsZhxtLZwY7CfvUjAMfWtfWwrdSR64Gcc4Co9cpjA33kpT2NFSNBEjeXKFT",
  "key24": "2bJF2QtdheeeynawB9zr1SqriQKTjewff2XPVqeNgQGDCR9oamUAkpALV3fAGEuemcZrj1Dnop6kXPjZz6TkEwub",
  "key25": "YqMpJyzDxEGZmxq8SSUib1bDpTpYbrTdXSA7FiB7ea2LBrjmzXbHFipumcpaafGrbEMYJmj3KCmY9gF8wP96dQP",
  "key26": "5Am6SUCF5NphCPeLnFbvgtWBbWbjUe6NPvWe7scZLdoGCwn8EpaHCPGu8q9W2kcz5AfEXuxUJzeYuVQhg5EoCv6n"
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
