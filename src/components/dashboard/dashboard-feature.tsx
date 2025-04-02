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
    "2qcRFzdBAvBPJB5igZjkaCdjKadMVEVPiYC2bXVeAJnEshnf5yiMuzgLM4zw88HhVrsEoXYp1iSjZF5swjYCp8hC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EHRpmUoiWg7ZisgbnAcUQPAccTMpmnPawNwT6eEXKRDVABgq6y1en5otCe3nusMaVeYevJeqbXWhP2g8FBM3dmt",
  "key1": "Ug9W7nVeJMGn2GBuVt3FCvv3iE74Kk3fWBmkpHyWxLsvUevooYk2sM5YZ1zVUnPByk2w6GiZkWcKeMPcL7BAfft",
  "key2": "4g7QYCM13UzmhBLLf14zkzMbaXGseAQRtnyiHRbVpsPmH9gxZungB9q6QVZABcU5Y1W1fzCLAShahbGrAPS1eHoK",
  "key3": "3rMtjbn8GMEANg4XvJPvVmnSbpnvftiWGqHYyLi9hhALLxg12taJC74MxW1yEjYLiD47uTF4SWnLK1QJGnh2SoDv",
  "key4": "4rUecYTvpqfkUs2HGERumTALQcZMADMZbP5g3BLnVEpJkhL44NMaLGBxBdgFHGHuNpsStv2Lh7y3FSvado1NznFs",
  "key5": "5CzDx2xC737n2G8JtixiJvijPTVaRgss2z8bGm6RT6xoWRrwjbFe38LRVgYM8YrQYeUGdRaCjpzds1vqAn1NghJR",
  "key6": "3iZ4MVw216jcC634L16VusipK9kuruKnCx8URZWxjs9Fi7k2Z5UrJBrMYae58Hw6RxQVNTv9MgsTdaRr9WTAeMEb",
  "key7": "2sG4ckpT5LEsh7aTm9WYosUAs4yYMASs6CoeJW3d3UNAigdbXDvUs8aN3GsiZDWbsNtsRHvdQqf7QeRREBistkCU",
  "key8": "UeKBY2oHTw7e9YZuSW475kqdUSSPhmh192sooxZhijVampe4qn8X5HBqqUxU63fZTNwArZAVxnsJtLiGToVUJdA",
  "key9": "neCNXyVHZkzgxndzC6oNcUAS5AvWAdnsXxucnfwo1tBaDg5Buraj1PgconoadhmxFaok1YRY4ox4k7LQNhzPZ7S",
  "key10": "3D1kyzEGnKR2JEf2VZCqqPnmqdUuuukwG2AcQpPtNuZDDNKkfmhfzbjgYZKX5dQmqARW2sqXNUkgGWVLW75Hcsvw",
  "key11": "3s5P1P8GVgKs1rZ5D8bSbV4o5o2rvaDg8JTVNaqiPZRPvUSjnQZS52UCA3MJAEWWUjAnoSGwxBDiYTSyYPWLRjUR",
  "key12": "rFRNujSvGApDaiw8qKPTH8omK8DCiDuj6AzNnp81m7SaXUBJ1XL1Uq7E2diaadgiUouoQdAhEcy8L7ajGfgbqMB",
  "key13": "4YLyfcqU51uzYWXNUtrUHgfDy2Ny1qH7coJLAS9pWXLNcrHWNMCw6zLFnuqtsypBmnqLUdgVf1hEkrpAo3zoNiCM",
  "key14": "2G9xSrEsR1JY17NgLBN1hPtStN7fqkBYwnYk87RyzbyMp45X8UoQBRYSTXwz4jjPwFLc1pXSKjmDjmfbB4VMCTjt",
  "key15": "652xfhTXc1gP3yx3CRJpRZf23UgH7QWNHYkNe1rEcRgCdgxWNZVG1C6PKNR1KQAYPnTMKeWvk3BFFP7XBa164hYS",
  "key16": "LxQFuP8R8GxTdcLtGn5TV3YW8UMVswDFtQTAioqfncZ1Vev1vcfroWEgd4RkHrnrwMTVGfGCUNFVoKpjZvqeZVk",
  "key17": "5NdwQrkUhgNK4UW8xZPHu69M4xZ9Vvd1SNaVPHxaUaNPpBpa8FYWRyso9388YtWDkwDMi9ksYjBsDJoNb5TobvXo",
  "key18": "2PMuxmS38zdzng5uQzrHrFJPDJ8MRBiuWU2Lfefq7mLTiG7yvTjc4cbsNe8qCG1u1C2kZ1nWWuJtPKAGyr1hwSW7",
  "key19": "3bNNV24SJwvtxenjmw1PotCkJnQBqAfyh5sVUfw8AUJQim5nP6EAeJTtNpqTVSbtthSRprkWuXNRarQm2XJqv9Ew",
  "key20": "88CFqwqRK7AutcnK4Tssjf6e8DpxoJbySDbsn9C5jk3Nt6oKw1kZYHa5M1umdKNSArxVBRtbksgWSSg7WinJemB",
  "key21": "2vE3MUqBkrzPGBR4KUjLc6XDgmL7UpLvsEPMLerFJCnMP7yywTonAbRix7zrfFg87sxmsRgHqvp9NQhsMGMqq4in",
  "key22": "5pk7EUWXfyby3hRAMbV7vWwZgkEHEt7xfbejx9UaWknQcrNF9aJVMnksBiJAEuPaN8cdhSFe51PXUqFJoQkMqtsU",
  "key23": "2iDsZ4TsdKLZWZhiVv9Le4YecDnkCh9N3yhdtjtxDUwvKU7iJQS6BfVJvRA4uEZYCFT3Mq98ut1wMrJiHLwdEZSX",
  "key24": "jvow2Gt5VQE791yKPzVhJBv2BEDgqkyJEoh8Tr5DRtEnVvd4FQVHr99UQVEmXagXtwHZfnXitBfNkAKZ8k6f6Jc",
  "key25": "3D2En7rs3JtXZXnPM4XFyXgUHwpvcU4JpgBb17ULJLsEN9zEDT7k6UbCwHjovgGNEbiDmH1HuQsiZ7NpxPrNYgnm",
  "key26": "jkKTugVCwVyYYcJFSpCNzDSJ5srovhDookR8vLVhxKG2REcqgbZLyWz7Y89ScZzqa1wtAsfj2g6v5BQZqyw4sjS",
  "key27": "4sBEL55Gq4xhi4qtF9HNu4iV4JuyCK4hLvSqYZ5EWby9vXEbNSgYVi66cKHKRdjX7GkQtqRQCYbcLGfC54E2Pb14",
  "key28": "4JwWDxXXL7FyD2HQtcktcXBSKHoBcWSogJyr1VfenS3KK96pR5xg36cy4MXMKRB9N5wTqqvM1RqtAKuntpMwQzxk",
  "key29": "4YzGWiKFP7ABJ4NM9k9NWvQ7HA1grq4N6zCkdQgQCk2pe5YUDgpPxqgQReUWkmEVS9pY116C3rTktb88kB5dQBtE",
  "key30": "CsdNTthV24hRTzpHiTZB8ghtXf3ufvL5EfKimtXLJu7YjYJ9iBKGR1ErZFrnkSqWLbx89RbPgqcHFMMFiRZfK2u",
  "key31": "2EUSkLJMreMLXfAYZUM7gPCF7EUhdLBdBvYepXEDB7grzRq6BQHzxkKNvLFB4jUzKtvsNEhRpnRQDwwviZ2yzg6B"
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
