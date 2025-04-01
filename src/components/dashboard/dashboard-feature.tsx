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
    "KifdQ4bmWFS8x5qYLifV5vynM1MhjLd9KjxShBhJsit9KzPb53ghRr9fKkHvG7yfMAzgtKXaBNk3bnyoHGdc3pZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "R65KeqM95dAv4ydJjR6Gf49oA2MjWEaFXgwZrJuJs2ykp1KyoA6L9QPjkRcBneDU1CDyDCaJcb2HhnbZUe2MPwy",
  "key1": "2RSSxMtySGvrcZEfFp1opsERDMD9BWJgbiXycFspWVJe16PBhy8SuqbKXhKkoiLgA9YR1Mhn6u8xuhkqFSmNTeKh",
  "key2": "2ZqWEQHAyxpSZywvE7MUZ7L69LBHScnAmSUnhLFLkm5RrxPFN1bqnEg65ndphxeV77btZt3iF1GKNeqqCHqMuKv",
  "key3": "39eYFNJw8xBgDnNic1tdrvPfh9scPfGhbXa4BkuQ8Fep3TfRLpavnKsrsEzhCUn1UW3CiKSsqvKi2iKAKEbx5z8j",
  "key4": "4hYfdfuD5exc5Gy3zAMPsJUj9qpCoukPwCT9DZTBehzsj2CqqZkv1z9uekUXWUci7Y2vxELgaTgFvsPTreB3Se7o",
  "key5": "5Az7zM9T4JmZ6j8YujoBy5Q5ZMTJtj55oiAXet1eNVxT8NrpYR1p2Xz33KGV3x63h6MWJXEZnLZP46hUveRXJ3Tv",
  "key6": "2wStVdeazCYSh8vEK7ErUnjtDRpuAtT8oYd8RiWecm8iWKNmEXGRS4KvqCgQdTqEiGDgC5CVKgxVFtben2nVPiyo",
  "key7": "2TJn6x9NbWaty6rwTGX26RaC7GZuSAsRv3U6LmzW7mKR8zLr2tL5jmbU6NhWaeavDFYAPUdnanBb6V41vDQwgVHF",
  "key8": "3WkhNhEyWK38YAwT4zU57mXx84wZ69a34yXkvoVzndYUoBSauywc98MDsrSCVzTuK3PTuzTPgV2n8HEPJ4MiLsFv",
  "key9": "5KQ3VWiQczmNDCAGmvELQrCjuwnRm5JVduhfb6xQM383oEhJg6xvDPrJAjXuR5tfPa4d37sZ8c398a4gAufiUnpH",
  "key10": "5VmgJby38ChaRjjEw4SsLeticDkpXgdRLF97y7aTGXVsVCYUL7NDCUkXUkkjoAjVFo4EB36MgNQRmk5MiTswiYBU",
  "key11": "48Nus5n6zU8hJAsykqV8tLTBE5TvMp25NAzjD6Fe6VkcRPgv4AX7kzTMwEVeXYJ2BPPbAFKriFVJjWw2Z1A89UvP",
  "key12": "5FUBs295JafGLswPefhxFeFTpYMA7EM6Lw5d7ebpoMLaaDNC8hs3qdk4fVP2nYGhyaFGVcU6nxRRc4GvevbTZEy6",
  "key13": "5pkcvR7zvoTwvWT18BKqp1DuMXr9uQuqQdhHswNLh4abaSMsaSWmqhRurea3eMcZ9Y1RumgBsAjW94MT34xWrvNu",
  "key14": "335h86UYTKBFEBu8Toq8jrAdGowRGrHtDcfiy4DYrHU83VeRPaDKp2MP9ajZXc56brnLHtvcW3B1GCgVmwyeyX6A",
  "key15": "2N8dzwLaJZanobFUuygpLE5N7hpzaqGc45wT7jNEDfPdrNFHiPHD1xFAkot3YD8KPuiqNa1qQpZDF5vrUP4s3EdN",
  "key16": "5ZnbotdvtVTqegLrMBUGj8NCTWq5NAq12RajwJigpN7Lk2cU6uyjbycSAF7Hgdc1FPNLrrhqedYoyu79xhRb38Go",
  "key17": "5kN2AboXKLsgoGjHtN5AJzE5iZ3qNoeHxh5f3rktFnWda9tkEp5u6MFj3xdg1burEcBaUseqjhsQGpYXXzmgMEQm",
  "key18": "3TT4v3mnH7y8u8HKQ9uFow7ExaLaUtXxTFY35jW8AFhVLdG8zRVtEag3fy8BLXpK89PZVhi9y2sihmzkJarocaDe",
  "key19": "5qvHc6LMt5bK7sMEMpUgqRn3giFa1Daiwneau9HwHuwZZFuEsrUMQq9Mg4WCLZGQiFSohpt2P7CT629bLHQScaHA",
  "key20": "3E2jqc4SHfJyM5cyMETi8YWbENWrpN3aLSBLXSmUNyNkCvGG9jfarvuE7c28aLXobKYoUqHeb7j8QFacrHwQTAMY",
  "key21": "48cD3C4tDHzDYGTNqPbZm5BNQJ3qE8zKvLzZxVjUyjTCZ1jhXEEbpFjcrPg59KJaJ53dePEZpja8qmtbwgNXuVUj",
  "key22": "3tmVHzX1pffVoXGSn3UvG3cWXZu7c4GGcczU7Azaj5MXKHYTrAfkNViK6BU2c3aNagoLkmcTSrAAPyjSzYYcEL3j",
  "key23": "2bv9VNaM5r9WToSyHRciS6BRQtrWz83Qe18Q67jUzoUmSJdcCXQtkuCtkzkp7CrQYQ4x2qP2YGhvSdsaBsXTEu9r",
  "key24": "Z2HHhj2qBN1getcEDQaiyhujXEcNG79PSM2wbdPMtBgEYgZYWNx9SMaccbRJiPDPSGbVXaKmPyJud3HkoDqXosc",
  "key25": "3ijuDWK88NjZpDpgkS1K5vLBdmPvaHt8bwLpcrBr6dUvqTggD2gbUf357uUj6xrJR9P9XgVeK5jC6dE2wjL2KC3A",
  "key26": "5Mp7UUU66zc2gn7F6G9yHz4bBk6eHjYZcmWzKnm1LYbuQV85VxgxTR2YLpQ5Y7BZWPhQKqyU2FSZakyRyv5juZLF",
  "key27": "4TrMW9o9ze2qYmTWKXaUH4pDmdhPFQBHeMs6QGgcsyPTawDNcmTS3n9PTTGLiuDTwDdEGzrzxcdTLKa7W4HRGdFt",
  "key28": "3YX5w5X8A9ML7hq1DyRGMnZ6oSSUqoyM2J45Rm4JhKzxSoCMUfiGT7SXusDnZd8Bz1MjaBpT5bzZ6zmDyfFWc6f5",
  "key29": "4wHT6usyLRp6NV9fb1cNB1FtF4aCGPiSJcAi6tsQMcGu8U5VZCheQKHbBa2DHsyg8Jsb6dyjkXKLTGL3XAP4tbzZ",
  "key30": "tgUZS5P9ntS3jgATLmPeP23XxMZX94miX7VHfF6xgxVgGcqGWo2eskbfbdGp81Q4Z8744Y9YV3QpgaQKWEa2rtF",
  "key31": "63UhhGpvaCrZwBBJ1i19PfFbHDh1gQMsjQUg51KZLeW7hyEDFvyewh9cNAjsUHeaGwcd28f7mSPndYMUiF21jEpH",
  "key32": "4bs7SGC9af36c66W6spw3QNG6c4Q51FUbCALzrVs66Kk738x4PFXymRkBihKBFximte88Sw5P5TQ2qrLqjv63ir",
  "key33": "4ELDR6qogB8TRzLgyHePiH5mdBUg7iHgkF1fJjijaGaqZTiUPv75bmBF77nxRUuC3uiNneZ65JYvsrk74KiCSb1T"
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
