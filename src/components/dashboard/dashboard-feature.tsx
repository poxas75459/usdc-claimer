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
    "2x5dN4YMB2gfuYrTy7HT15BokkSMnhZkiV2Xth5Th9NVnwcg8FSkdzSCYN9AHE4prgdEMdnp26Wn8AsFFD2euW4U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2YjEpMqLWiWQSoscjWixfRTchKBCmU9xXC4iywbLoAT3dCH5mtCbFXrxYeMKehM2XDsMtdAynbCb9BgQXE6zRP",
  "key1": "eH6RkabRTWLJUVD2w4tiHcamNT4dvfm67qtJX4Z9ku1pJRQmDWfa4ksesLMDPQVmXZWb31KNGSXgecJZ5dyu4Do",
  "key2": "232gxfsJCs59eHLUW2BeMAZXBJyHnQb1CgN6UBVcFxSHpQD4E9NvQdHgTospkp7GyTzjtiSF7828VP6ngpmeivob",
  "key3": "3YJq2m1PDt2wEScUW76dbZnah375ixeJ4NcDS3yAx26G3rnNi52eHZkfFCt7xd4SqsBiGNT7vr6gSC8QUHk2KB9S",
  "key4": "4Z8SrmKphyH6dDzueSChnsJcCDPfkPCQ7boeHbsetQU5minLedzDaWuQ5otLLJqVf11EM9nB9rAAJKFNpvRByJu6",
  "key5": "4EDTnH5kjfARWqmVh5XdXn4THrGkLdRKqbBrzo8PGfj4aKsNdqspksxajZ5o3tzGXQzoGaPYC6B5mzXrKAzrFaQt",
  "key6": "2mefYHvBs1R71Ka43KDH1u8FQKKCkFcfR2vFRzYvg3jwa4H4n4sXw12D8yA75M3jSLq6WK4hPHoPacRuA8LNN8TE",
  "key7": "2bKnLNcbjtmWLMp2asV2KiTf7BaL3aTi7BqYJJskKMKMRudhMFa6AgsqhsVBVEhAewXxV2bkoULwYTwHgCdvVwQt",
  "key8": "3pRwhy9pQ6H6dT5EjGc7ndhB3FnSQ66rQg6AGAdPpkguCypUb53HJQrPs1QPnoJzL3266ZiNZY29PHKEcBeKrGEV",
  "key9": "4zx8M2JDn7QYERSY7uYALoZxiWxdy7VupMebGb6yEneTpnNbRNC33SMAD8CRZJcvEb1VhqLe778aeJXuVAhmhfgq",
  "key10": "4v3ttfez3t4NMBcUkDuB6QzjQrDKApK1eZWewQxjwpeuGu7mC7bXhdkxV6Nj2j2kNKzS1b1DSgC22H2B71xhf96X",
  "key11": "oQQm6vUiZpcjnewM1seqmSLWANQCqXqJfn4M6chA2EQAjaRWkY74hY4wTEcyPR6oxDjNkKVGeYMZ5WcNqUgmxH6",
  "key12": "4iArR6nDETPmtKai32NAJWxeSBqq3H4EB8jYtPHrzUFc6mxCshVQMwRZAExETFt9pGLChH6cWhNbjkniME5bxXmh",
  "key13": "3u11XZuAUxzzDwnFgNQCEwZXEPkTBXeNtPvoJa78e2orsqqDdcSRsdRZwyML9G2Qh3UF1Z7toVZAATPT1VcXZvVr",
  "key14": "FDHE35xKo2EWp6HrhmeCskqBjHpG34VpYn8XmgCxsVt9LTo4cpq9hCKw93tcrtC9cRegKGoWsPXUKLHgLLhR6rS",
  "key15": "m8pbnQnDRDKjEcHiTaewoX4R2rmugd2PeCHFyDeakJkFCn5dvHHV3DdF6b1kejZs25cgun5qxyoeQ3CZzwyc9rf",
  "key16": "57hqQyokzMZ62PoR7sDYvmpsfy8L8HcCaDbaBazzafw3SHAQmTz9FguSeWgioE6GUjk99gSoYzfTaAuumQZ529rM",
  "key17": "PFqQGwyfLhdoaTpvBGuDAchZgP8vDMspQujj76hMRsG8JrtEV1qTgpnrbSU3xHsf2whTahoj7PY5ovbkqJvcSVX",
  "key18": "5PcnNn7EeHXqxpQKFyq28cFv9qF4WgYXDwgH7GGYFUxbA52EjprercUH9Mt1aRVZVkDgkpSwEeFKkSXb7mefRUtZ",
  "key19": "sTZCpf9cZ7pnGhAryvbifxkyS2PEUnevQ8edvYQgWPw2vLrGHCvi1Jz4r3iWTr83FqsdZYVeoz3ggt3ZZAxeAd4",
  "key20": "4c6Zo576QBmaXw4h6wdLQVvr8zrtf1LkqgKvCtZMwKhQBYnoMjZ6UW3XaHCLS2cSnCnwPYqx7ayPT1manBizVuLg",
  "key21": "36ZopkA6tF8cxngZKmj21bGfNFceUqdUEYNt8J8AP4J8WfRXX2pmMtUdxaYrBw9VyAAHxYQXtAjSzfNxvwiMctGG",
  "key22": "5KCgU8Sk71zDLHe16Xb4XaeX2ratrj6habmD1feM8YPSj1W2nqzvv91txFFuTmQEFWtiTue6GuNRxf5ZuQ2xP1Ko",
  "key23": "3rMFamnqTAQcq4hqdaDktFKwYCNs2hqypTC2M179e3UKA7uwuN5k6ntvjJkpJ52Ss7iNgTDS1fSgDJGiRAGQjUe2",
  "key24": "5J8nVbd4rHxL3aisgQzXECaEPYySKyBETC2qP8CSqQTkGw6nPGMgSGgqfUgFrETMJjjj4LHMTEYtfC5DCVooBVjX",
  "key25": "2pz27Bhbcf4HWXshmzQJf7PGfCYosLcqXMotLFN2eLR3c4pK9URNnUxMWx4c4uDyn6u3aynj2R7LigBP8SJGnDg"
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
