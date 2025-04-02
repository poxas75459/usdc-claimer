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
    "3ebWhSF99h7cZ9m6HUkMp8x33mwk8XpCKaqyCPnVky6yVf3uS18SsoHudhXWYBuZM6qCHJpwcm7vbtNd2KhP8xWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3env7wcW3k7CwPksqEPBz81FomzsAJvQTcS6i2oSM5NUgZWyssHwzwB7RVG69oCLzTS9sXmeckatudYqv9BcELKj",
  "key1": "iNPUdDDMwEThsHBpbVcoDhnRr3CGB6we7HiVLmPN7LwjXZUauNuhj8dAvrK5u4Hk2LDpj1WYr5BXzcKWotHkkvL",
  "key2": "54PbVRNFZ5KSAT8jakjGrjmAmNimhbmLQU8dzS94fJkSJAECkAVR5ctKuTnSfZBAabxgZU2xTkCBvAbyrHcL9sze",
  "key3": "4cBi4VToP65oAZjN54PEDHznFgqm7CK3ggxbRst9uw3doy2aaSzJwfW63ibkM7KANS5sfVCP475YoKmWuLDbiP4v",
  "key4": "4k5TXMXYVBkHq8DdtxBgQQU1Tw8FAjT2xDsVgYFQntNeFY3qeHVm6pZM7wUMGJGGiFvVNvT1aYKJTLV7wDu7dizA",
  "key5": "3T2yyqrYWAtErtSrxgQetHkYX4ZoUPB9EXNCb2dTpSJUh3ChZHsrv5QBuZ1W5ECjr6Mg5bMGxhmSRobqMKHCsHUf",
  "key6": "2k1K925dWKPnpRRKX8TXsdfE5knaWadRTdPA9E2u4RdWpp5qigXAXp9dKocaT2MCQtfdEhbUeKUBo7J5DJvwvtfT",
  "key7": "52PFkxCSweaMpqW33w1TJEXaRFNykFbFfmVDqHdJnAKUdTqKawPyMVdHfoahkzbVMyDUAZeFjrC8nQcEjJFMHYX",
  "key8": "yr9AJjCCojHHSgYNUvYYgJ5kN6iX8D12KDWbxyD5okHuDbo4yyzrvALJ1XWR6cjiyU8Mv4k4axia6ZvwcVm4yGp",
  "key9": "25XfsR6bp4n28KWEmMv21FMwK7yVWUPaMPcZk7GdFJ87Li7w6LCs2DtgEFCWe71AFnLieYtZndFjrPvWu46oFXcZ",
  "key10": "3NB4nnqb4LyPtWpxYGBu4ZaLgiuS9Trd2UvUPqFevybgebxUhBGbptJ17EPSDwJmiHiZ2CjCNRPdNNCKzDJx3Ug5",
  "key11": "4jmfhYjMC9QaKuGCt5qHQ92aBqRXGYRdsibBuPXwK2gMiuaW1FNn2GKexh6gQW5hTLibpDRBT218xM2FUtx7AaqU",
  "key12": "5oWqwser6eFg7JXyFuYP9zYyRbAJhTEqYomJbgW8dThrzGFZ1aA86uNnsLpeTUBQjZwU8RA2R8VeWttqUvz83md3",
  "key13": "6k311hAdEPdemF3qci7D7H35WKeALdpgpybUKRT9JDq7UL8JDweirE9z9UTZChwNKBA98hidyTCV5iYJcsykoDo",
  "key14": "4bbcVpWHUbogMddbWnsVuykfnR1skHX8mX2KScERH3Y2frPZsHkJiCexKU7y8ceNbWhZVt2yJgTSwsQEox1X7GXZ",
  "key15": "5oEGj7PtEU8bMnkYfbQBPPZpLiNguksHh5QznAN63kSVwrQo583xVvoVZB6C1J58raiHHToYxaKZEZ7ctkBXUyTe",
  "key16": "5Th3k6bUy9gQRG5Dskq8HvFUKzYAc69fDdPh7k59kmmCmf7NwDsNzmKNNcy9qwhA6oyUkZgZM6PWfB1L1inYDevf",
  "key17": "34RtpCP15Xv8zf3H4ur8XgM4AN1ZnFct5nhb4RzEwVwGasMVZetSzstozj3p2kYz9GuV365cL4cL4S11gQowbyTV",
  "key18": "4KWPk934vCq9WGbQCyF8qqKgkx7RsfBcoemkSKKikb2aVjUg1xHFoqwbDMeA7LzmVFoSm3wJ2K2ww6JB5VXrXfyD",
  "key19": "5192Z2wJastQkbnhV8LZHctkkC8PNRKjQ3hAVoYvCzjBdGS9eLr4KWMiBRhtTkfbbt4MtnTfN5E7StvFQ9ntXfnp",
  "key20": "axFDXGUEmxFUKSSZYnmDG8uhu44PEfVezh4eUyb9kweZaq3DzDeNCsSZNNyUWeQqzYRmAD4x185BNcUEGcwDnVP",
  "key21": "wgqSwHmDwG66F1PDmXGoMVe74UoTDKJmZYg4GpLDpSahkgvZEWAFxqgiFcA3g4oAjuxMnSGGNmcKRjHD4b9ktRV",
  "key22": "2v5v58e9tAxk9yNBfPhcGkd4F5CXUr63dBLtsWBFdLxbm5CE6wFRYjzKbsRZECAeW1Lqwy4AEmYd9LxkNCy8vT4C",
  "key23": "EpgHq7BW9YpCKh9ib2PPxv4v2cF5WSPPLAqyX2PuSb9DarPuA1eKUy7YTgQnpjqEDW4xMgzwzE8htmvnXnocnT9",
  "key24": "59ghdiGnRmZ1zykAVEjU6o9z7aBVKurjhri1AYkWBVgJMpn5HhPte7723eZ1pSqNKuTKfHPMNtrfmEHLfYMG56f5"
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
