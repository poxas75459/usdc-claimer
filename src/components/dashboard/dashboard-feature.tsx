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
    "4n3AXkkjPHSuDNNYek8555yy73aUFCrFyRrpWuJrxGtDmd8A9ADSPX8oTa9yUi2gtVVHzAMBT39yr7YcbAutNcRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27vJdb7ZYcRyYhGhJjmSVpAgf6jDRyegTZ77bXijW612ejzzT26i6BSNur34x8qjPLL811f71bujJXEpruo3LYT2",
  "key1": "3eRJCGgmR4WCXoHM4XJTtwVK1VLmewJrnr1oum9qvP2sqezGTXLXsDDaQScPh2h7JtAJGy6oNmF917t5JN8HAAY8",
  "key2": "MZFHnpB3895r56hdsJvLYwNZrPUL6MT21UaGFydRSVrTcd3Jfb8CEBYqs6QmWAMThUdwrZpdETCKy8rzNQdQ1Ct",
  "key3": "3KKMUchNmZ1Jyzq5rwveGqNn6zT9jzoJAwXDMu4HP3Z3jzYtVy4STtsYwsKB6vVonjGr92iyNaqFDXEz17JzEeoJ",
  "key4": "4WYdUEY9k1rh15FvdnsxFrvtQ4CsFLCNSYmXVvLECVHxnPv8786V3N79UKEjjyHXfuq2DuRAB9TqDh7muop3Dav6",
  "key5": "5Q4xbttki213a2TsU1RUCvqYAmWSTrex4UretkYN3X3P7WpSwEU4M7ov2YdnJUeHoqk4JSnfVptEfEJQ1gwsVznG",
  "key6": "m1aFouS5wzrASGWSx6CHARrbYgxR8aQ5FiysiqJzoFQkqkK8bezdG9JmRcS6rU4BJoFczBsUcLujeWNZtT1Zmxj",
  "key7": "2HB3kmsTUjfNFKrzR462WtaTMmbKQbjWB4T6WfDjK6gedF6RrmWizhz1NTR9xjeWZaScnVUWGvYxwaG8QHuj46ac",
  "key8": "2VHQbWbA5RVma8xzafiLphd2n6NDtc1VCGFgyJUFmc3cXWkEFozCvBJmWPLKfMVS6RXEitJ13Lxg7wefYS7noVeM",
  "key9": "3vL7MT3p1jgN4CGgDSFcpLq95UBMeh9r74FCY3kefkS9Xg47Hhwcr1iCcEQWpyfiD4FAhXq1gy3dMeX2ezDeBKWx",
  "key10": "23Xy2iKP3PXSu9QfHeiVMBQmsBd2T28BWuuqLRMzXZGeNEnujBsfbjKTTV4QVusrLEnQrbjB8gzcKNyVdHFE26pL",
  "key11": "3p1ffwZtLFoyztwze6p4wBQLg2LoXrGTaM3eChegLT33GDsQGDDYiNQKgmVKveVKJkdY3HtZGJN6SRJuWmBAASre",
  "key12": "2uVxw4n2xQh6ispHuvfbxJtqxfF3TJTT1wajz5VrFATcTG39tC9hckFmCRi1PRWDWnoB8LcRXvvmWMmAkPYo1Uo6",
  "key13": "32KtJHjdE4JVYcTXYQE9ZS3kTq9f158RNQ7Hk6sqkMkZE6wLSxoinYPZ8EAQ78h3237MoFMB2JqcfAgC8GM3nziC",
  "key14": "31BgvsFC2Vpo22omxDVsZNyeSZXDr6MB3AT18eTX4feLYqthGB4h6DyDekWXY6B144gac3nybczwsf8Wa1p8pF8V",
  "key15": "4AA1z5cjQYhqyRxLzkvgfy7bPYVwCeTxpzFfSiNJWwJw7CwRs8E3ob5yj9J4Prx96Mzo7KYjTkqJjtJ84pUojszn",
  "key16": "4VAEqg4m9gi6HadtugZS4H6qJpeuriPQih82hv8bbRu9rWN7iT8W9g9JLeTFQ5r2ZMvVGgX8iWndcLwt71QFBGnU",
  "key17": "5J4fyV1GQUEEDgPWANbQ53zjyafDeFCUyyYWhSiqT1s91PNANCPiJBSygS7DF9bmSLiJANbcUADB3PUU68Cawe7s",
  "key18": "5aqoFbJeRUsYN675ut8UtCAa4NsW7bdTbe4nFUZPtP8UFkHXuQnKacqJA77cCTpugTYynjxg6kLLUQ3TfQb5M2Xq",
  "key19": "4G7G8VRGrg2oQtYT2FMjo6RxFqdZW4tUXgtVkxAK3tRwKd65beiq8e9JFMvMJezvyHWdgu7Vk2eqmHoEuxKoWjQJ",
  "key20": "4R2HbxN9iypWs2JyrJvDCy2SAVv7m6R8vrZY6CKtwCWxqHehFLcwjZvKpPoGxXrMsvSWXSQM2rSY1uDphJEp9LTE",
  "key21": "4s8nP4Df7Zsvfj39fpfGTmAeRRAu9HuQZAFRdQwDMzQVhgWo8vBUi2ohpAs65EFWYM91tnaHJLiUsBZeEhaWwiyT",
  "key22": "56jknfRDXuo5nKRUrzZKT1oxYQKJbnrVxAX5CjPury8yRiALFMdKLwysSr9QDbM1CKM2pDx2bX5xqqqcpdGi3LEr",
  "key23": "3uyrRKAFP317kEMXABVg5zcvAd9crftaEqQyTwzhHHPSHDQoJnAkF29ZdfCB9RxMf9NYuzENbgUgkfZG7or7bPWe",
  "key24": "4akapZxfqRag4BuHXZ4uFCZg9DVU75pQuYLUmtUbRqw9UE39uF5FUceV2T1XhQdFB1cgN12eAER89to6gs1xQPiV",
  "key25": "3Eh7cvgmKKkmBMbNB8jk9oPFcdng3LL617PFx4nmRFrjo97XQyS9pQLaMux8SUVDjUjRhDmKrCmdzZ4cAw9fGfDN",
  "key26": "4xqYA5y7TAVRNExFYbxAxYBzZbvENvH3WYHB4oR22iSKYTpNf9J9BQaEnu3FQjAvshb5pNrCm67wGmegjwWVPi1r",
  "key27": "5CmctiQKZZuEysB5ypnFemDMziULwiSzEY2QxzGUBuXcygxqGKo8cYqrfyGNfrsk28MTkM3nHKQZZb7CXf7JvFPQ",
  "key28": "2rxC4WBpvvk8QQPgqPLsV75LHPfAFxj22hsvVEA2iSkjLSqMYAe9aVexSD5tTsNnwX2UMhaTWxT9GSQavX4Z53uS",
  "key29": "5MwVng5XAyfJX6trD2nAgZh4BjrWrkvhxk7HVz3KjHoBHgUhsjVGF6vGNGC8ZyYctRAVfPuSK5DKQb4mBLiY4JdK",
  "key30": "4p832L6U1xAwPQKMWrZysK9bdLDCqUD6cDEnBrZtsprTNHC384dBwn21DTbfxxpDuqzdY9FWb5CaYdrfv7wv7HkQ",
  "key31": "21wFvFruSLaAGveLtzDAqW7bqmda1acotNHCAS5zGoiLvUFv2kTFAZoqroQP1zPyjATqp5vwW6UfuWRcvkS9PEDJ",
  "key32": "2NL8QtuXRDuHs6BXHnjXaqVE8kgCbcRyE2b1kJKeJzdDTMJ6SD2guPCXbU3aXXwWDYPVZSpAyqxCHkrHSfBsSm6m",
  "key33": "5eiQdfonkRrFTVfmybPQFXr9QcvLmsysEaySXn2PKnzmZw5Fnywergwwsci8Hs5RNR94UbebxVbnoSeVFUJPoJYy"
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
