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
    "3wGVCh6fMx65ftVcQLCpdCGcnnuDoCU3yrqvKP65GTgvgYUt6VKsCqjZ72gz8XS6duuR4o8mdczsWhgSpHH8aAt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TC5jtWK8j9KqeAQcj2PfrdEQBwNLdpJ7XjEiS31wMqR2779ckzUarGPR3hWLujFeZyPbACzxN6WoVbPTCTLgFqa",
  "key1": "2BkYyeXBfEBA9AcvR5G4UTVmx9AmnUdvzSj6nNgApvTnEUHngA92Q7jyzKTqTHom3UoGvHH7ETzPXNg2LTLUJusN",
  "key2": "44piS7KXsXwDz8ed9NGJ8sbjwBJ75tvanbLRJzUyN8MLmv2Dn8hi6Rjjx1pJeCfqKnuz2ZvGJcuT2z7mRr4w2jEr",
  "key3": "5SAYM4T9rxvrpuyUe5YgZNKFRrhdKb7Zzqsd9F2Qe85m8SW46oiEVxoBmeny3jxVAQtUkpQUnUHbtx9nD2ogDJJk",
  "key4": "4UpBBahgp1pjUddHBzoAnLqxk1qDJZAJ9KUqe8ZMTbUWc4hZ28DVi4jd7h3TmfYeEcT9Rd9xUpsjckuNeYRDTfv3",
  "key5": "5uTGSTqQ4iLwgCCqSuJy6FGFDV6SgYJq32DctehHqcFaFgLEnX3AxqvJf2g9yLqHRsvXTwetGKq2Mo2QrSjGuMF7",
  "key6": "4netZ6LabjitEEko2UvsZy5QJZWxti3nMarq2UDWw7efjXKLrSncAhfn15nbKyDehDovuj83cuXrdWeBRFJmKSEN",
  "key7": "2XVmmpMNH5iWEBHnaHjFjJw9UUvpmF2nXuhjEaw2jC1Tz5XNzao1WmBVKUPswtdyewknUpgykGR7XPScrJ5R5LtM",
  "key8": "3ptMUbzY3pvrgEUenR7AecrGJdiv21zk4xhgRok39DM6QtryBxNJC4bFsESQC5UwJQz6iEL2BQT4CsRzpTZb5Pv1",
  "key9": "3xsR3Amfu3EosMfkTk1mgGsfALSigctQ9CPj6HJQWbW3bgmXssTn7vbQ344Gi19oZsR3rWP5LKExUrEbFpA8QAQX",
  "key10": "59scQpajZ7j2vdqqdmZduM7muECtmPBYeqdqNwDwNRpVnCEnib9hXU1yJYcsBVD25S1gkM6i356a7E2RtwnJcW7E",
  "key11": "5FhGZLNZ2pmYHXvXMfKGvd14H26nkGyqbstXwS1grdgaA4kYPfmS9h5UQFd8dycDoY77brVVQonBP7fG5ekm9KHb",
  "key12": "4QmArMnaV4b98Qkt8qud4UbMU27YUYk8GuZ7H2h8kAwTu4zAcPqusTF64DquvZsX7twxpanxmBCdUqFgrvKptnq2",
  "key13": "2VJxE3nzSqxauFqEphsEtQRjWHVPfeCUzYiQUHmm4mZgiXMqfvabrU4aeek9ABGXRavH2N5Ri9AT3zhbRHemHFR5",
  "key14": "CaC88mkUaC2tBZD2mEH36kBt4tHEzU6axWZaFXxP1491C8vHMDVqtgdiBE1SPQ9541n8ukWMF3XGzPxmsF2rdUa",
  "key15": "42WFZzX4RaDDbftMPaxFrFUhRuo729U7aqshSNpD3SdiBSpNGmAnDNmTAYpYodcpq3Jz7Y1zQGp7zGjiKcKh89of",
  "key16": "3dUNnYMLUDz1Cr8Ro19S6Xp6vJwJNfUKcAcvKSpcc1YteNk87Vq93BZhVYw9kbVEkHrbfAKNtgACLQkG3QS1WYXh",
  "key17": "34SirJRLJ3Yki3XJnAHusPTsGpfaG3ddWL2T6vYpTYXzyRFW9zt9yuYuXaxMcb6w4vzW9AAGNX66zFZsxAHrhB77",
  "key18": "28wvuTMTxRcVy3Y3fcsDkGp37xGyHFvFqHUAps6Q3w8KD3TZn9M8pXhjL31muwBJRdzKJksBNZHGjWWYfL3wbR5F",
  "key19": "5GxazkApHJED9166xPS9cPVTg2W6iLLAKoc9fE1t2hM7aVuYobKNDGURf3Cd1GEcEW2Wh3DHyayYBMFfjX9cUzPM",
  "key20": "3h3ceNBzAbevpX7zKo1SYR94gJT7CUNZ2Tve2pAKSzHpBxXGAWZG29r7U66ee39a8zg33C63DyvUEaPbm7D55Nrr",
  "key21": "56EVmUt1dQzzGCXJBsTBabPMVQq77t7gXm8iVZavYQm4FhaiqD64x1BGm8omNCR37dG77QRWW2VBwJ4TSZgeVViN",
  "key22": "4N9RT28LSS9q7XMWhUkCnKs2cfUN6N59WAMs72TmMRCAAYtr8PqPVNL91JomiuH5xLRmdWnCtt58f1PzTushDXn5",
  "key23": "63yyMfgu7MvSeoCBGPLrNTcAoUQqoYbbHDjXGPwgaZyKtYwXKpzL87bGCq2G3Qw9aD3yVHUMgArddCMDkEmZuyX7",
  "key24": "3UnPkkc31sHWBeeuoXjau9SDabWMbRXwUZYpr4AKWiqceU7LMVBbJGV5GAA4nAV9cGGJRzWjGe3h6RtsGqQmFwaH",
  "key25": "35p8PYzc4cNpXNFk3mUeauA7jQUYZVyaSudfzgKjQQJngQjrKszqbPNSmC5trmovPjULbXs6e3yUiFsNpnCDszzN",
  "key26": "4z4SMqPrxMGZi743yZEj72Bks6QayoTRdkRiYQ9347WE3uTP7QksvG2MM5awdSBpKffQeNW8qZ69C137oDxWP9hd",
  "key27": "5x1eo1xMUtf8sMvVLkzsUZwvbKmZQpD8x5h26pc3Xt3G72TgpnXSPe6b1Xz158bhQCkWk2L4FVeGYMsJT7Uo1yWp",
  "key28": "3kw2FtQMSykmJRNJgC1963P4ieZD15mGi7bABXTWY4JQrQbpH9KZPr8qPSGhkCNQAxJsoxTf1HPuqszpjjQakqc7",
  "key29": "1tPSyRV4N2ayShs5X6y1a3UySDHAEHpsQ3BiBcxMyTd17cLmwm78apgP6VAw631XPTnCqPEtjJEM62e8f8JYDi1"
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
