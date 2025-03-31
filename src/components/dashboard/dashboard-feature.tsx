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
    "H44TvN4RY6ZiUBy8aUxBWk6UiAdNKMN44adAiPhEc2WLdgRCxsZFXKVhvT9EmptbXJZ1na2QhpDak98JaC8hhRN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vEjTaRhPaGXPnuUvqwYCuY1y2kyMJ8Buz4Vk7ytGaz7gBCfWpugMChmtCmKuR4EzLAroDaJEtFE7PB3dda1eTFS",
  "key1": "26MduayZ5EbX3LHB7vveaGHqJvPjHB6WPJw9zZS37a8Trc196oJbxyGdAEPZKX6aMobF2QidPK5qMSNjPdTs7Hsu",
  "key2": "5T41hCVXtRrWivYKuYWhaLAHUvEE9aykBkZXxE5DzBN2k78tDgf2mZbkvNPVRwkJB3o92ueTrQLG4DbE5JTUwFLL",
  "key3": "3ovK2yDyFJBENJqR2MErewHSQ6s19qhbqDUx19Avq21giGyuuPhDqegJh1ZXTKtFb9eu2QYH9D65k33HmPkPmQVc",
  "key4": "3G3aWMzRk58q2LxNZFv67ZvJnFZscRisq42uv4PsNdobFwCiPfsEX67p8x7pi3kwEiXhP5AbujcZpHkDnr15tmGe",
  "key5": "2AV1j1ihU93h1w8JX2AwWDDi7EcbcD3RuiiCZt24DnDYpUUJ4qiLXfKG8XWqGAUHvEb4uFDH65j1ZXGXzCwpidvj",
  "key6": "3uaRtXx4zoNZFuNcLhhNXZhuEMYh5h8kmYpNyCCtd1L2kGnWXNwwSNpme3Qr7yEM2BT1ZBV3Z9qxgaaBZQCrxsXj",
  "key7": "3bRuCassULruKHgBNudBj8ugQJ7w2q5chPxrKfpdB7SMRiGpsMmnh6bpGNRM1riMmdJf53BMkkWck6XkW5ptJj2p",
  "key8": "3aauZzAAP7c8b8TNCswgBBoT9x99U2GtBfTrFvsuCsDd1aBwgxFAK7KrFqJpoiUnn2N8xinoxFQj53Rnj5sFzBxL",
  "key9": "2zPRq1aFTZk3xg26k5hKgNzJJ9u61VqmgKwKcBjEAoT1qZTmRjnVNVoRCzi9UYEUs65swHMhoSAPrXtW9UiLYwBZ",
  "key10": "4Nko8yuMTAjeXhZMwnCJJVTrpaGP64JS7HpaBoZ42jmAQTTXa6CroVZPPCSQqZaRkc1kgzR4QMjij8VwiHy4N6df",
  "key11": "jgpYMCP4tjUoMdVNLpz8AJE14MHzX2U4B2kyhXt1bNKLoQpwuK6jkoox67ZNRobyXRbchiWmT3VfSdyUSTPTouw",
  "key12": "2DJfLQeJ21FiMpxKxPEZTRXtgXEJ4dmMWCViaic4jsRLyVG9X1TetUcKYYYsbWnf1fPb2foSEiTYB4Zr3WGb9afR",
  "key13": "279CSbMtA8Gscp6SoDpQv6Tmow413XMrX6X1Cj3EAJbkLJ7m8bamEUYrK37zK8BjCitN6gd5q5fhy4HbVhoXb4R6",
  "key14": "4S5hg2BNgpFcJjmkpC6VwJUdxAr95YeibG69aaAwREUBRLKr1fArZEiaExzVuRq4quXdhvYTs3a4n4fC9PnwEsEt",
  "key15": "3kDG1JcX27JcvSLEx5ReXMBqyyLGPZKvLpM3yrQtnCFhfoSicFTxatbLvPLS9zbdtfE4svUknKyzHKPEPZENfpEP",
  "key16": "5W96YksTEJrbK7Y7YFb8hHFyrjDKVov4wRs5L9XkxFAr2zq4ifU7w9UiqhFuabQGfiCzTccCSwQCwXNKDsQY8mx6",
  "key17": "4LuuEtt1mtmCLgYrYXMKBrcx3oaABJueAWLFxVoLqFUa1qecSeNrxVwAaSst6Dy1q8LQ9AuvuvsnmonhxAZYmEUz",
  "key18": "4YZrXyzCKWqNeeYvZsgejhWaTdu5kZh9fYNVk5d79cLt97NztBJ974EBZzesX6TG6PaxXyVsU2oLoQx8PYjs62Rc",
  "key19": "3GGGjTzd26dsUxEdoKLSyYi9XPaFFFRDFTgTKtPF1NL5CJG7tedVMBGvhes2T56abE2CP4DmoARUDS1EafAtBqhy",
  "key20": "5DKaKDpn2LsGCADgv6bgGsv7rmp9xzR6GfuXKEZ6oUfDU77R22oqXMnrwYJMxxUUb7hdyeL1EyhwRVMmQds5pcHW",
  "key21": "28SrZhn2qhqyvYXVtHm2n2HQQ4kPAgGqGd9Zi7azXALLsoEcBbqZbHJPDZm3aTKqsTURcf4mLwQFERt13uBGJUbh",
  "key22": "31h8YD4JL5cGvL4Qu973ccPqRs7tDi6RioGbLSVeciraoaNtpQ9rVFFA8HvUYCbiYBKMPy9aHjVh3j57LYmvMqJR",
  "key23": "3mX3Ax3en2adDXE1mbhY3JyXWNv8Jee748o7mWdqQ4Deg52KmCEhNAWKzPXYzx7tNFgjDPQ17BjXsLwMDZdBFZTm",
  "key24": "2azFcZoDdWvCBAkw5UqVaT3rZNnecE3c2fwUiikL6j2p3NuTPAV3EV3Prg6hEZTyXrszWWkQAeGuRaiUfzHRt2Sp",
  "key25": "3rWJZgpEHzLt5EzbX2qsMfvTuSDKrLXxWMPatBQuZwwjng5tpkJXdX2behStY64wwycPzviVXCj1x9xEbG3E6syE",
  "key26": "4vS26SCEfE7s1N58KE2kzt85bUU9kQFQd1Gj5zNmHhBti5bp9ARp62WQ1APS365XkKoQxyx2itDZVEH51AWJqrzS",
  "key27": "7GqjuPTCShCj16gMVjVY9uT5BnqFi4ynChoQufr71djj55seMp7difCMR36Rp8BeUWQAj4xFToAJ9yN4jM4z8nf",
  "key28": "4BDqxUxdejd5Qxe3sR2MRkNx7cGzKj5j5hMZbdULLH4RDdzRQTkoTQZkiaoiBfSFsNkge9SKdp1efqUJtufszpG1",
  "key29": "67Za13bhGz6RDFAtKkAZVmxyZBhmHz6J2s7oD5zx4wfBHBFvpKXsc6Zasax74GLzkm48UqbeiDcQb56hWo2Kc7Vz",
  "key30": "5kpzcUkFDixhb1zhLqAMnzW1dMoq8fo5RH98djhESuKQnFpMCfjieyZCRVMN8KCiTxmBpxyJ1pE5XdJQheZLDRRJ",
  "key31": "4wb6qrHkKAFQ7HowRMMUkq7yTbXoabdBUH22h3j8sGcbFdf5UD3QDNCdELtkJSLqU7d17zxxCWmGjrVG2bt7vJAs",
  "key32": "zoCHG8QmKr1at9Vi2it64FFTAXCHSZZnhetxyTpq5quNA3PoJxLsKpEv3x2tCLVZWGvrFN1XFaGpZ2F3XNrTexm",
  "key33": "2cDFmGVDKhL2tijkPrsTWtUtKRPqf1td1pT3kcWStYLiFXtPmcDkjU2MCg7v9vsd1c9KCAjYaW2khWbN7s2HAo8s"
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
