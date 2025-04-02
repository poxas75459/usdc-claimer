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
    "48i1CCYzvLdCXMdjvmT8FAqPe1SXDZvJ3cHeXZyWJnUA5vZPxZyqdjFT4szAR1zA6myKKwMp2Th1LM2R2fsaRhkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Gi3ZNAwCR4FT3mLd9mAsqu4HzNgvBqm2jyuVYAF9W7rYdkUT4y8XzkuFUtmrjQwEfX9FEG6MAKUdU4cLKL7Tqj2",
  "key1": "26z7NvrBWg6wUCGqUvbyS8Dj3Uq8C8dpwJMmSLjzjy63cW9oVr6y4TMmE8izf5FjJzhtZW3LQ2GmoubXYx1VtsAV",
  "key2": "3p8zeNTn4M2L7Y3ukom1QHdA4QrQxEmNr1PFPQnwWReYwKf7spMKtyodVp1aPFq3U1Es5hRyYSLk4Njgx49rNAqE",
  "key3": "3KhBgp7m6HpFe1QwPM4rdmDhgky7hq3kciziNCLtFa9zbbNoRaVXNZYFpuhiJtUQS5RcfiSMTY1hpdz5zVySzfNH",
  "key4": "HZvJYZ8sexDRFAFLwwQXCEBRpuhpobLUJR9zSrjBMhU6XMFrS9o4gVoU3X98wnZzY9m3pLMKLGYGC1VxnMKDnCL",
  "key5": "HtawQ45njp4muoXEkv4WzJHzbmY8vUwkbe9qVBLxefow5hnUXvjeR2wqj8KhiiGNTbvkonuoAqqXtHGNUibxEtt",
  "key6": "Ut9fGHC26Tasx75dLzYGPTAxpPH6CWB9aWrvjEZYkJVyPDToqhGPV8q1rZZUZNjoZVhyxaKTgwLnCft5gP568Bd",
  "key7": "4GcM6FagYgeAFZRXTubTeUofo8gTTRcaZSqYDx2mi41oK25KhqxLNsufRKZhwvWEkEnsphaJtTAmJcdGQ4UehS51",
  "key8": "4njCNWfeDkD83yyuEPQZrC7KGWJJAMpwDbKt7cqwfcswE2X6zRQNsugkqjdx4b6g2WtA31gGaaQ4dV2QUPCeJ9TW",
  "key9": "5xq3tVTeLF6bMyk9GiZUKhQHUrGayyF8XEsDHyPzQMAP8Nm1bY7W7p1fXg9R8BP94N99JbMrW3nWTW6hjFDse6Gz",
  "key10": "3MLzBiQ7JFQ22pFiE5812JhshDdT1FSF4xY4RyR5kHyMjfGvSwEqcH7UvQt6vTNTQ3v8yKsje8wUHPh4QLJRK3ev",
  "key11": "3ffib9REUKYU6wwgNXfwGr4WYp3s3eXxEX1WdVXMP3eFEZ41a9QuDzhNQitU2dJWPjABCvba7FFvSJygoHzke9WU",
  "key12": "2pFcbmbmd1rWbuHvTD5od46nDu5Aut1t5UdkPKmE5192dDxGo2h7USZtzbmaCjmyRj85tybrWKwuG88zeUVVVB68",
  "key13": "3LAMupvmy2XumJ5Z23qCdXteinVBn5RpBUvSZmmrwHFw6E7AvyGzfzNLx4rtRAU5F9ZMs6BDTFM2WtACQys6daJe",
  "key14": "2Q56hWfDCr587KrFZMG6tRXBQxteb57Tcrpmu5KJgX51iHQ7bbMoYyHy6fYKtDH7gCT1KWRYfuKZxo2PF9PK7MnE",
  "key15": "4zv9wPjmHnY4YFe3E6cJ5L1Ti1WPtizp2Fnat2YtqhkmxBvs2X6EyVZNJsuvvkw6hnA1vPW5jVZpRUX4oyq9kAoV",
  "key16": "5MHmuZ3euxLmQr1kbGm93pcwLu4iNLNzgAJTY3QD5a2MNK7hEjbHGWu6wyeBGhbgZTi2twmns3YqKmb2KjMgp7Lf",
  "key17": "3kZWGVGVuAhLZhEbnk6ETRGSePmPWPQjXQzNQhn6RDLUHUs3LxYzdDvFg7JYEwUpg6Hj9tvEwgrZTM9TmcM5DUkz",
  "key18": "3iNifQkooVvsfgeWaenpuUTFjUndjfYbktVgaEPNP2r2yNpWU292VhAPBTdxpTnrZLf7xU3VFRQsKzYoLYzQpfG5",
  "key19": "2aDzzSBF96yFTQuWMELFtupvae6hkTX2anMXajvgYQE23cbH4cbkEjZyeg2j4SiXjyYhaDzx2BzAAoc6m7u9SiEm",
  "key20": "UsDTZN3UpGzk48oQaDb6bKyMCJ98YwCwgJyfn66DbWFtckmnq3VLgsTULJRjv3dN7rXcWWn1ncsJmkqSK4xt7Vr",
  "key21": "3SAmVEVBx3b5Tz85esNEw72rAs2mtgELSU51rioFtYKPCm6JPajkTMdu75VTaaKQad3hBjs5zTRrvDftVXQ9rXd",
  "key22": "47oiD8yK8bvciHP5kPewDXgtWdph9NXdjuLiCvSR3NgPyiY1Paf4ZesgJLtGcoLPB8MkkU4oizosUqinxo5YCPcS",
  "key23": "3WsisAaXxaA81cUzkrhCNarVUhmM8syrtDJMzQTU53L4NYkR3nv3K67nwL1P9BiUpRZZRz7XU1UjLbX465GCavgr",
  "key24": "2wkF4itxdDqwPNpQ7Nzr21iGJFmLpDMHiHCFXsEgEUb4pr2efVxqFuY7fr5XaiuYjJCRWadLbZi5y4WJFP84jHNy",
  "key25": "axyA4tLm44VzFWHfYfkzjv4ya3t5VDKSBvwzfwVzpHaPB5StYk6AQVjXwbEyRbVezcMgs4nxDrGuiStaheQxKWx",
  "key26": "4u8p6QzasxZA6okUd5YBBZQ8n7yQ716FtcZfYrNsyNVjxTvPEQbbWEBJyeY7qYZ7CuV3ZFp2dPb79h9ahByhEvQW"
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
