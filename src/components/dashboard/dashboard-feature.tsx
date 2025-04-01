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
    "4fVmAi6vMtrze97VEkxwdsarzR4szbybyy7bcR6PWtz1Nvrbu2w4feLdfMq18ubAQy9ED9JBNwUxcCcbGnr9BWMz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QLt9HwQrKACbEUqPCP1VVaU8ysZKBU4meXbChKJjDZduDaW4WAfBepDA7Rvz7WqWYr2YG97ugRCwVAMSUA4pPeR",
  "key1": "SaYm7nLZx1EhR73oscZV3QSQcNVQScru82PC37icRSepEn344SsfaqWjm8REYWh3ffXjCepQA1y86rxYSd8dyoZ",
  "key2": "eSiw3ZG7bCLV1SC9N5B5owwwzSewwfRpvKr8GmbhkUEjPxE2QAHuhyYeundzigzvgMQ6rdchLb3WuriD6BCmBTV",
  "key3": "61Nj5ynZLwNhEDLyHMKFQR6dTQVUBdpSFeAPisDbePWqwgbubGBgcKdAqEitm6eDxzAwShzyA1pQaPWDtx5LucEc",
  "key4": "KmnvxYTev316e2MwTdKhrkw3jGNAZ1dK3zGYta8XcAuYwG6xq6wiCraAveJJwSVeA8yRrLVFng364AX4fM9JBJs",
  "key5": "2YE5QiwM7MPFGwCZn1nBqvvkwdpJN2JLt6bs7DG2QbLG8y9qmBa4YxxBNFhiiBdYSCZYNshkyFkH5AS9oMDR2H84",
  "key6": "3jRTgZFZyrCHMU16y9oneQPVoRMtiXE4g8nLAMonFKmtDH64Z8vdeYNBXMmSdtLzcEi21J3fSekYQRhRzqUv1tCA",
  "key7": "2W2n4Lp3d9ZC6ZUHhpoHUSTtFyTqANiJaCH9kgEwC654c3erWMy3c6EbjRKwwMe5SLs73wdkvQ266p8qZcYicgY8",
  "key8": "2LxGDnJZnpjeFkgN1NNA2FDANqUhGDuU6eHxHTfzcJKe4kWrwXn6DJMu61M6Ws67fRJxJ72vAxqtwd3Bm82QrAWR",
  "key9": "13uwgjGypC5hUX8KHhkVfKppxm2KkijxC2TdNhXj9xRFX7FPfgLFGRNg7GkPdtTqcectaJWkw9JmdmccoRksecU",
  "key10": "UqiK7ob6tczGYs7RQip2ZVTTAYY6fKgGqswoZf6GKu3p7e7ad7aThh6imJfchjzKpu8bfiLFARbFeHgxPf56uQY",
  "key11": "28CBcdoLMKkCPfFc62qFqcwDoq1pQt16ffqeGFXMkaZAxEX9stGdabbWqTiAuZn66XpUmopyGjSRX4eCvFm1csAo",
  "key12": "3LshF2qeXJ294Z8bC5ediiQHARjkRQDN4brqqPxUBNbMErFj3Kic73o9SnpBaKfyKWVk2i3ghAKtdqAAkCVxXAXP",
  "key13": "3sSQkDcbJYyHnrdz6EnXgKcvKp6h4Wa5aj6biMy73AFvytizpCGqiH1d45maNZ3dcyxjpd7GuMyMKuei8nXr4RcL",
  "key14": "5y45bTCQpC9NBnxs85QJrdEaAiSmt1PDvf32KjZ1oTtAM7KGRc9Hge27HEXiEVbivwgwY73Xza5xL7ayY9CF4oP",
  "key15": "23381dd2nsyF88hGtndrXK12wTmsavq36BTopvvxzVM4UX4Qcj3NoJ2w7FBcYQMeT65P4nWQcVroJkyWZKz5HLjZ",
  "key16": "2cyNvuDyvKJF3db3BLGtXtqeziCNraNKdR4cWsVLKNSywkZHs4Xz9nYphJDSogXwA6LnjnteokLVpHBpqLnL8geg",
  "key17": "3StjbiYfhP7Q9gs7PpmDFPvxuqKLBE2HbcNCHzRPP5pyEdaHfLJ6kE4dwGzLLvEaaXuhR7FkoxvGCBe7sLiNhz7g",
  "key18": "GDV3HktugCps3TeNGwpfqB8CdrivaYTzCn4Socvx26VSDgGXKPV2v3nSR1KFFLkLdbjkoG73o7APHe2AAuMq2Kg",
  "key19": "4F2cuBgRe8dcwmFuBxmaeFEXx418motmZpQzXAG5CJuWMd5XLbLwXhoRgtTasDcX3SVymuzUwXtYGJoMAJFDXAiV",
  "key20": "4seMgtRXdbXHs6RRLqGaXAPUdXRwGkSUV8vdxCdvRkwBDXRjp14kTCwKSa3tGr9oJbMrcMLGRmoMugPsSz3nDRDt",
  "key21": "4ky8e8k9NAxpSQucRMBmrcbtzPKk9F2TC57ELqvfo1wbNByL6Gw5VKG9qxTVEMExUAP9ZKCAEDjFikAbu5Lxhpod",
  "key22": "2CbKefmfi4qNcQBrUj3PiNRp2gWouU7zAYhLMAnTjAjx2QrqaC7Hx3KsRkKaznzV53Sv36iU9zSnKriKYNWPp7JG",
  "key23": "2D6MbxrmeHNjaizkriF1gYdYrbRDhYrsyBJRiRFNJHPWwJ4jP9CAmiQRF8vyE5dud3BnnQLfSstTHzvSTquxqtHw",
  "key24": "2XoqvVFdJjGV9PkV2xZVMC4jcpcuGquuxd25NRU5WBiHeqXFjDYcpMkQHCwB4nwAQmBvpPREPQeFngVxsFKP5Fyr",
  "key25": "4ExMNySYg652i7S22jcPP7Sg1tCyQvx8m7gmSx8KDD5vZ9Q6ig7h1yjgf3GSSPNKUortiQ4Pgq4drvA7dPenk1Gt",
  "key26": "52W49NkcFpDWB3oEGxdut5XMwKz5j7QjCw3qQV3m3e19EYSSy8pXgFzLXhGE4qgQf8YjdA89HZRN6sazfeVhBDyd",
  "key27": "4hjyJ4AbHaRJE4miMjGgk9VxTT8CoKuCdjTmten1KW5ve4PMbur5f7LjEfevHJb2fgomfjTiARLH69KAFjFPBuNu",
  "key28": "34Q7thad23ka71MDvg5gM8KCkFBPLqv45hQn1Ai1YwjVzBdECej9tR5yTwzauQY5DnxnLHxhR58EByFwxbhLkKGq",
  "key29": "4vDfTvGwp1d3yh2Jw8f2RD8RhRAGgFGNT3W8eVr8EgaUttFDDpNsLqHkMvUvjWWSYJySBZoXGpqmLCYdUv42gfqp",
  "key30": "5xySSVatVKpEE2xhDhQpwvi9dA7oXPdDgVCDhKWWMScP4z4ugJ54JwTX3rScTp3YHrRDGDi5zVXR4sSWtptcqZQN",
  "key31": "4Zstmbx2yhwMFxhmM4dmSfPXt1TMmvwWVGWsSTwCiX2FZTQ4JWoAYh7tQd5P4HD4cahGNQ26wuTC7Sj5UCBQkfJ7"
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
