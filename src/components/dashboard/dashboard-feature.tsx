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
    "2rihi6Ru35e5g1doaJHxPPuLvwtTdRXTfdjDYt7fRmLHc8HKQXMTqK47J5wrxPCK7m6GTPxZqqTnBkpC12kSvVGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7yigMDsLi9DryG8HAPXqTvoawiECirgX4hS3stY3fYzrgzG4anqzpTwsbhewPwrqJWRrD2EQCtV7pZKYxWwApb",
  "key1": "3HtwJuhQMnrhka8cLZD4UKc3L9t3DVyzBe7vXtgjvHjqE9ptCsgpHSbreC5AV3dypau4HqcLRje5ao8pnjZgngLc",
  "key2": "5mnJZspr5mDMP86t6dM6hNENVJzMjQJQ4vHCXtaZP32DhJgoRxeVyQWnCafBzTL4TJuUqztXcFqgw5q7PJQ1MXpZ",
  "key3": "2XoA5zrQBTK5qd1LXz2S6YEHEyvEXLgRWL2zPJz6fZ2doGENosDC2FBBzufw9WPBqfx1VdknQ5FndMAH1zw5GDjk",
  "key4": "2Ws5ctXW3FEF3kZ2WRLouR7Dqz1zy9WvpNecXMrp2iLKDUFDhumxuHQYwV35qPkbv6Ksu4Nk2jcAuHhiDTWNwF81",
  "key5": "3KgSPp1zLPGE5viFMRVBqVRrT66QyMPBCJxfbcUqzfd5ndf6hVcUeo2cPzoBXRxj5VAAmUs58pZqfTivncm2BkJz",
  "key6": "vgt2KyDh6XFdxH5xAuRx6LHLBaN4eLksce4j5XRMFwv5bBcbzPCTG5Fjp2t8M2TqJJXdxnK83dD8Tt4BaRdxEdh",
  "key7": "bA22nWRPhvcfmVMMqJsEL5RxvpdS48FeYrHnbALYi9azSobKHHT6B763uLPfMfi9wqf2VVYXb5EZ81mSHiMcogg",
  "key8": "4JAzmZ3Ho4QrM3xfcnHvj6H7U5zNiPNpruKLxYKixNtxyFTTiVRa4CS3QQn8K6dbKKzTY2S5hhQVnQxgXbwh4xfq",
  "key9": "3dRHjC29Yjj86cWvhK57V2UmkGoBBMajATUZuBt379GGmf1ihjfy6QwUvajzJoxwsS68poM56tvaS3HzPy1a5uVK",
  "key10": "zJDrPTgjEUX7LmWZs6cu5ii7ou9uoavrPbQdzXmirhcGiWFJaSXDxuTFKbWQKNnTSW7LFgemNf5SD9C3UZuK9Tj",
  "key11": "tXtzmHt3KBmrs3727cwRDJ2syRnX34DkhDbAaGV7Niym77cFxvHBgqA4SNBJuUAxsTBrD7erTmFaV3uRgsGZuQ5",
  "key12": "4331edZnSPkdjkEjMB4JjuXYYBuA9xnTAsGEbfamTdVmjXWQeR5SK5NfbLvx74iwcBgJW4Bt6m1NAhzMdNP7py2U",
  "key13": "4wYdSQpdiKvLoPciDbxrUzW83K3UxSmhcVMLXGJ5ux1pom4c6HnK7RnVNw7qcKYVw1vkxFKyrdasy4DmHi3vTDQk",
  "key14": "2MNBAtZGpWHaqhQ4KhUHQwUyMcTPhmYBmpNHywkLEprJWE21bBoqvXAmFTeDpTwZCYu2A5HQkmAVP3FbEASUtLWZ",
  "key15": "Qbb2wYgWpms4EH3ApqQLxpf88P36Y8bH1zK2nVXWSgL3XZteguyrPXvsYK3VPHoh33QGJeCNoSFQee1aHDBiFad",
  "key16": "3pcLiPJtUHCRFrYPtfT7NfZU1cKAv3Ydv1JtbapTYVTMXSLUGrHPZWLfGcBptFAVJSoXUqgzgFE8UoJAZmHH94Nj",
  "key17": "4rXGPxwYyA1T5TrnfqikrHvmbPMK3EY5i3MiYimwMUHGMabV2mdsPNJdgkPmNqKf4NLnukWMCEUAxRNQ9VWKRcPP",
  "key18": "mUzUXoFmxN2pg4gF6TxU9tk2opPtqU6KyS2uqkbPGTPPLLqiRpoe1ctS5784tpGELD7kVCbDg62SH5rmjWKsF6E",
  "key19": "5AUWU7mEgkSWyZcAoy6qWz1bNYnTqC2tXXbL67kK1exEGjAbGg4UmVPk6FTRhapGbFAnxM584NCr9fdAtvtg1gjW",
  "key20": "4gD7Zgr1wTwW5e9frjWjZUzub93uXqYqmTpXAJb5Stea8VtWQNmGis8p9fEnHkjzBSYp2dQcKP7kdComAbGn81tb",
  "key21": "4dLPe9us1CahXBFLedxApMGr4vDDo9QYQ8xjrzNETR9Dv3ZuJVVNDsLDsd9Sc7ZuQmdcHN8ecax8466fWVKhqPY3",
  "key22": "3WC6768XBQBbjSkkYznt5B4LWD1jedsT2LipgTmLX1XrR5Qx4NwogJEYKt841hkd35bpcwo9msWqrLAnPzq1YxU5",
  "key23": "2bBh2kRkdgoneRc9UBWt64W74T2cRXuYGXo42GSEFmpKWkQQ9n2gs8ydXU1BEx6Maz66Y91Gr51XVeVCdpouwpWb",
  "key24": "4cg6n1Kcay7PMNSP3cpHuZzoajfjBemjeeUNz5Tytk5PCheKcFB4Ca76MSYNQcDTN2BK2iQhcJ4UXfs6H5RMV7A7",
  "key25": "4K1ixif35sGdddx9MFWBmhHe1dkxhf9Q7j1DgSLyyFNTkRscCTViAktGePHFcbX59ffXjMSB1wWrFZJUMhLSiV3q",
  "key26": "2DPi3qzM4SbBhSYk5ispy9svpQ5X2w1ShTUsCsjXiQCdaxkHiKqco4PSfJmafmuKgBoB9MRBd8UV159iQiYsxbNt",
  "key27": "d758U4hrufuS9Nm4AexaQyUnyotrfx7VZQVLT3rkhXTDurUEBj2hLsSU3mg92EHUsQFQg8PFvHELVRZRi5JtZeA",
  "key28": "2jPghFQseeS1CvDLE5GWEwvv7VQyX5pfPm6UQuTBQadb4Wets9fv7LQygP2iwmngmZ3g6orNtnjTTUfy2nFnJ6Cf",
  "key29": "2fnTGLPdrhPfie728WWhhBGMHo9QQovmth1gaEsoPCVXNSvKzZLCdYsnTDa56dTDWwpYSCtLNSv943zEJghKwpw6",
  "key30": "61X3CjdGqTx4m3cVaGqe1HoXnyEEsBdRAd5288cCYJbhJ3VEdLW8mfyTjogagpn1gUX2Hran5RJt23CxCFNkevHi",
  "key31": "5uGMQkGesMnkT1hadciQpki56nDjrDjuUntqtnyZyPWt8gc81xFUjJvTqyGqV5fJooX3BEZriNj4dARxC5SqLdXo"
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
