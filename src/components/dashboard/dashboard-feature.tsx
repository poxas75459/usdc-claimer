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
    "425P4ur4wSMbt7Y7XZeL2HhZeFV3d2AAQ1bPFfbCxYcpusnPF57nid7HAqQwsFxzh1RWa3Wgmdh9uDGERV2ZohoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Rg1HXjgJyEcEV5ugw1zmEeHhAfv6zZy9K2MHzFqotANfYXY5YXTAaQAaaDzsgmreVWCy2SECMUz4qksJowsJTWa",
  "key1": "5FQGDVfkMk8MA2stbEN5ZYqbuWjxnkrQgvLAp3xjzybyD3v9yCKPfbyiFo5VvtTN2hbGkY6uW5J5NYzARMK7qzeo",
  "key2": "65x3fg1V3VkxDfnq81FU8N3Vbi5q9U49evQu6P7FL5dLBwjvUPK98Ji1cQMyqqvpf4deWiv8JG1LPPPQMaJM6UMx",
  "key3": "44pqbG6VxSs5wnmynhRr7pq5mJR5pDD1t7VTmsuXpUsK1iTd83SjhFGYYkwEz1jvZ7tumXpMAqKs4hZutKpF4kSx",
  "key4": "5GBKT3i4N2LcCoCsA8QpYC26ACaDmpCuyS15XPvFoxy5sQgky7JXuaAjhZaXWp6XpsRNK9AgiwqLSByRHZzD4Qhv",
  "key5": "Y1EnVsFHDqkkg63LbYiXSYHLwZJh2WMHN1rQUXoGMTMJo5LPhVEY7P5xRN3V1LTWFNqsXK2UxLtwECwtmH8uJLT",
  "key6": "3MaGRut7Uq8qdLn529j3VjmEgGfZJSoi69dFbHxFZ1mX14o8iEQVkZtqXxQttJ2UTcZsAfkzgFrxiK8ifY4ryQmn",
  "key7": "3VpCnsuLsjwrEaBkfG9wSG8CKyN6gkw3jnz9DWCRNLDCCpcoZ19vQexnhYRTRccW6HEmDgSEqrTLnREnoJtvHB48",
  "key8": "2YzwNwTnkicq5zR9YrbqjHxsVjVFszU7zNTAGVd6fV1j6ugaUnHMpCrC8EmudTNKo935eTz2cbiUvgAZeq2H6Abh",
  "key9": "BM4sronigEE216NkCRXcEh3yyjq5HSGTxJEX78WZuBU7Z2unVfAJdv7vnmxd5G5DFxEr6rrJaa1k8feh3aCTK19",
  "key10": "5FgMmhtTLRAQA1yHkh7BToeG8Qz6FrZnhvdnqcLmx4nFz9KgVxRn6eqL6SZLUND1ZgZXSRETsGw5NVQLXRDzrbex",
  "key11": "4Yss6nbhofNUUjAVPx7p63PSYDyVRSSBZegV1g6qgMGrrWJtnC2ZPFBYxF8c3n4tot85jHY2hvdQtmWMn5LnWChA",
  "key12": "2Nax2DiijzbgpErAaeoF9uy2JUxwRSpQd2D5jWwkccjUuUEPo2DCUZvLS8QGkZ49PzrsEDZsee4fusKmw3wmVeNZ",
  "key13": "5MhGcFUqjZEtYbnn3Sgat4YqwmLYZEhQijPFXgjP36daZymhNDQDTbe1fn5Kuod2cJrHbq5hnSJW2a1W6QyoWN9M",
  "key14": "4jBBSobZ225XjvYymAK4KvLB7gxvkSxmVrEhb9phcKvnCemswPh8U8T2AxuVZWgjakCuwaBRvBEp6zNrdsix96hd",
  "key15": "4jf4HQ5XA9RuHRCPFzUCFLSiJzJ8dgGzFSRTMTCYvPbkTit3pfXrYrmzR7hT1ho6rzFpVabSpKjwg6LF6SKEUyF4",
  "key16": "4jWdCGusbWFY5RTdFQdWdDqFhiayFYWbdP8ofPuWciw6hnq94icA2MaudK2MtHeajSy8E2KvmeVHfCwS762aiXH2",
  "key17": "2nU8o44EWMZc5Suz2fwU4RfbDPG7kDjozjnxw3WYpgPrV2hkxaL2LyNwiHAMBNxHU96hkMcNtUowpfKvRXBNtCgD",
  "key18": "2jxdbkx8ohwtSfx1dksfAcyonWhpxLNtH3ARUcZEt45bZakDzxs34sfMH9GkSHSXcHmiJXTsuXzLfaAabWjcrgW1",
  "key19": "2bjbeKbw89T6gz6nq4WnNXY4S12X7smwaQecVPE7CGWb8Q4G9iEiCP2bibCYvG5Jj2j3yGqasZhG6FQbKp5LHCaW",
  "key20": "JKBVGSbn66nJFUzMDYnrrP76rtB8XVXqCSFHVJYa1mR1uWVc5i9sFy94yD5UX3aoqU4KKGnJGN2XrE7iUh7vfth",
  "key21": "L5TvTYsivhzLNvcmcBjTKMygUSGiqYkusHQNYcGK4hJqGXHRvvP9PBAey597HGZoRAzfYvzHb9kNuv274pG4BTu",
  "key22": "2WjoyWpWWS3cjcgM7NnTPLkkPQUrSc3bNHyrAfXdArAkuN3wrhGcya4W6Zc92GcvtMLytVECrhbbWi97UwFsTcC2",
  "key23": "ELrNHvJaRsQbNrdcWPWpS74qFMxgFiCbFSmRGAuUvQXbkDed2xPsvA2DZFoZ8dMNGBozcuDpGop1W4Eja6UFHzC",
  "key24": "5MEEotDbYHjLAg3WjgNPVHMiNxY9AeYaphPnX4p9uK74cdYb8DfHeCbCTGXKuxF9bCj2EjnG2iPgGtjjqKqHj9gq",
  "key25": "5X87avPiPM2kmDysY8KopzgE3gBweHsbKAWFSpaxqVQykY2GPvrVnjF2uQXGRaz6dwPkyhJSNveiVTPhh3HE9eQP",
  "key26": "3nZjeTu1L1pgipE9QQyGtNFfJWMyh1KrLAyQZTvi5H5jp8v68AsJ6mQ3MxHXw1vxnJ1ojVMjW6aNXU7Uu4PSCfSE",
  "key27": "5UoYrw89YNCUJB4t2Q9G49jB66LsdAybgsEyHFfjAjH4UCrVwXrs5sZ6BY3AASGpE1q7YCgashdAJ7d53QxUxLdn",
  "key28": "2KDKXxjeQGfgTRnJgziFvqSzTkDRqFkvLVWrSQQnHBgzJi67hFHScqjdEydnKvxe2b1AJ5b7aCPaBkV5UQTbzyCn",
  "key29": "3GaNztC8Xj4wN53p7GjLFkoA7bR2EVeLraK2znpHMMXahzjfYRNzDWLpYyL84ffQMLgqcwPbK167Sy8Z4xuxyeqw",
  "key30": "eXXYnZNbu6txaqChaXBwYWrMJvZtYCaWVJ59PsRuj4AdRSE1dsXM3xPr36Rzzveb8gBQtfq5xuimiHRf43Wu8gE",
  "key31": "2XJzedz1hKYYmHrAiVQEzoZJArYSV6C3tEsR2i1ZTZSGAKi3N2RhKiHuccj5dtUaT4qmezKGd5ZCEMEcZd4X52Kg",
  "key32": "48QwBsXTyEoQwZviR2MQgjEKpxhnupLvGQ2rFpRFMSM5Vp9NmBpQNM7HzbUgTeV7EmL5Rob67fxwR1mkD9Ss3PZt",
  "key33": "36sASnwLLTapJjPskhR8moYnhcNGSE3956JisYzxUzZyDeeNq11tFyMRSaBBaDuRBjUGosdrokGYu4HZpimi5CHD",
  "key34": "UMGCk948RVShaUnaW2WPgHPVyUs965QZWeD9bpTVWektXqbk91bYCAAGyZp2tKHcBKYhDFCesYwVuusy4giWRr9"
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
