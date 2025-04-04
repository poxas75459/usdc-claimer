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
    "55H8UiJTqBc3pxwA25YhTcWS91bMJBFrXxKuxBNvR6i1JK5GmVFbqRztAVrBSACPZFNzMtt2AfHvWxtGepXkN12S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fnDShGT3cGRUTo7hGBWixtSNE9KkLxVTTz5SQgKeVCjhGmkkb5P3sXAnrb3KkPsJYfKDT7DAWtv2XqjgZ2YwLam",
  "key1": "5LmFrd3WYxYtjPxDmeEbj1q5LvVXR1SvUC9H5xJGFFfySnicrSrDoHkkpyaw1RwM1wyzKFoXEhpnthn6odYQB97e",
  "key2": "2qmRhwBqWLjbpg9PExAmuCCcyzjXBu9ZMbS6j4TMKLa79UVw896a85FweVHMeHt94x8BoWeiEobibxjPxmweqYck",
  "key3": "46F5TiP88ooNS3Ld9nV3HhzmsuPUJ8Z1WAq2auEJxXNVPUiK6i5vsX1MpTkVh2NEs4CTLhRHvAsAgQ3VyghVLorZ",
  "key4": "5mGEd39JaXq3YjAp7kuYtNfgoqVErWbYMQpHAzhucNK6QgVambQLE7exkkFwCjSidNJbdFVDUXFxo7dF2FXggEA1",
  "key5": "2k7pMXPHpqpNmDVYrRDjHf7FdDTYRdifqJztFZED5fCehd75wAh7xTGSCPNt8nwzZWKepe1or9X4QyWD2HZtniK",
  "key6": "3qp11nCYjFSbiASzuSSt1drKiAZvPAe4dTwHw59H88LG5QNe6bquLxPRRFRdGhjzDwmNq6XnJjDDpuSvQtkxXpzf",
  "key7": "3bHEFyST1LUqrPVbQhE3Qih217qhqxrMypFYar8Xc55G4g5UMif3W7xuRLPtK9xWiTBQZiSoaomGpZyupoUC2ewS",
  "key8": "7VLKYywxsKDCkwa7uFhGDwkqj7vYf1MoAweeVQPbzeQDvch5JQvisu9cfdGquqbtH3x7J7fKv8wcFQNhJvf6R12",
  "key9": "4swxC834Fh6vDxUXE2XbDPMe4WysusjYusvSSRofFktpgiRyWjUy9sKT4JRvb6VXUGPZupVhhGgdSF3jjKGtCZ58",
  "key10": "xHegdK7Qmz7rrn7KQqKeiSSYHza2xNzS2SqUQR3cZGaQue88KkPbUdPZVa9h3DQEMJ9CN4ETV6ApcxkHQ5BzaBs",
  "key11": "3xPUAp4RM68MJawWv9GQqBQtuS5Kuiwke2m8TnwazVTgsrbXhyEw68PDzWiy93iGjT4dhy3ny3GAehoog1Np94jt",
  "key12": "327Lt1uJPGEfFN2JB2iL7LK7yrmTbjZbfis123qyeXgsasSLn82Jte1QpCFDbqeXX2NAw3cw82hi46TNKdgU1gR3",
  "key13": "4bVnQvEFuCu157jUPsLeWh8zXWNHPzP7rhBFMNpxpgJ1CsfAi3qfZzBNg1DspoB2zJooMiARarzQeF2mgvADpkT9",
  "key14": "5cUvqWyf2h1Vf2Vic1Zqh5T6pEBBP9VnGDKGaPkbGLH5dYWQAbgXUknsf9m1b3MBE7S45BLHLgDKBKTWQkTpMXz2",
  "key15": "2fcBbYYmhjBfYkWGWjk81Wf9wXAMbFegogn4yqHgE8sHcQ5o7WkVQpy8g6Xjy8L8XubLuFgbwiEgabNHpZVSSuQL",
  "key16": "fQyU5qrC9YJzdoNKoJsaTb2M1P7aRQSPRhXydQ7GFe4jG5RZxi2xYgMWfHyEUo6udgKrMVj91brEWQMmR7dkQAY",
  "key17": "f1nK1hmyQrk4HsmY1ADaswzQkVsji3QTqZSQ5toAFJHcbxw7h5vw5uFRL37vxn4Poc5kiyWKx4Kkjzx9arr3fb6",
  "key18": "5fzK7HmntQX5ZZQyeri1fNswnCZuRq2qViT2mXrMLchicMvnyJA8n3DdQFMGkce5NFLwoxMzUT3bQBM4hFBBPrg3",
  "key19": "22S3w8uWHv2bpcbuLLdDWbQmTmw4ScFzGv37nzxxzsosbYvrFRdTTsXKQFgNcpXbVETjELweD6KDrPPAdYsuWGYh",
  "key20": "2msssMfW1juaAtEWQ8G2KVifxYMEKY1jgjkFRuuJmw1Lw9FMRDTrHC2pVgzJbZFShxSKKVvCvx6ZbNrAN6bT2tma",
  "key21": "3E6CzNzQNYF7BfbvchVr7BJTjhy5jYE4ayCDdjnqZ47MMGxvwKrACR8UZzqrTwbdsFrXiZxmZNz8C8Yff3YXqbfj",
  "key22": "5ET34p8Up87X9aQ85xgNmVp2GPbMF1gHyB5tLGoFTAzJZRNBWmhX9q7GgCe3znLi9q3guZjSpARsPT8uxM6LnPfj",
  "key23": "5mu54tQuABMTdmbhGJ6GvVJYd4JVx5DGHC68AWgsYDpWdNsh2s3n38BRFCdmSTciWWpbUn86s6zTLTBufdRsKqcV",
  "key24": "5EtTaXyDgVHWwtENCGGMCVyGe2xpCdCYnHtRVH2VxMtntJ4ba1LWrgQkEXGfuhZNMNFDMpho97txzV1NHwtts5cc",
  "key25": "qcMURdLbCJx9FRNqxUDus6XDnjsNW3mUZ7TV2byiXtYXEURKaVpnRi8VpD6XPPVYVj21gf3jiCdrnoR8YQY4hJg"
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
