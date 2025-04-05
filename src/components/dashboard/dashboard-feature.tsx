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
    "5y8KCp2VUxXDninJe85Ksy3GSrrihdoTyiNFPWPoeFCpxFqHZ7ExFSdtKZtcikiFFtRgP33fMnF9CTdY6MMMFj8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nb7edLkve4VdaQ8RSmBpgDeyvpRSW1dpBzy1uVH9bD9Mf44wNJXdViPwZ6WKK5fbZ8bisiGvMgrn5FD9oJd3h9B",
  "key1": "2NFcodh4SFrjx45a8PK4dzDVtRCrW4BvQ4daLX9WYY9hvJAP9UW3HrmBFx2JXEHXsTuAvGi1jZo6jGFr8nxwD94Z",
  "key2": "3y7G83SEarw5w9o4VEXR6MbD8kELB173xWm3fw4oaMiP94VvmHv315naDYC9TrS9sF1CnSdVRfnCkLyoNoPuiwiE",
  "key3": "PUBxGstGdqzmxJAUa7fcFPY5ijyXdRmsbz1aT5crNu3c7LxnahMc238LH4NMmjEqLvYnpxvomxhWi3u5PCL3bh9",
  "key4": "5EbmB9ciY9D46zqbmqhUajXVqUaW7LYGq66ER71Dt8G7LmU6JYh8Me38zaPfdxFReLX4DxicTDTbmWGfwJmzLYDJ",
  "key5": "2Mb8AfhXE8RRToiQcptnREvAgfGmFYCAdGSSEzedbGTgS5beEW9CjqQZvuDvkmss2WpVc2SC4r6WRCM8nYF644T5",
  "key6": "3NQgcqf51nowAknwsiCVhkmkJHgNwT2hNj3CSQAJYsN1vKDo8YseFLRJdR54MHb7yHXcNm3CEhiNopbXpy3yFAdo",
  "key7": "268gGTVWTgVAoZQfXytopU5ih7vGQNXWT84kmCSw8sejfHQvrBkA1inAAKDNwWnTc7yJJBDyH3B51u36aPjy6XQk",
  "key8": "2DA7EVp61jREkTmjy59ozy5VGKChLPP3y2FtS4F442bkRaDNujwwYAyjcyrHCmkv7Ryhpfw5S8zdjKQMDLW6LCgt",
  "key9": "66XcxtcXLVtqfu8Bj1todqws9jBf5ikmUd2me8hFhHjSCWonntoUZJ4Gu3rK246NU1iUBo2xHp1Hrtsqs95yvnLe",
  "key10": "LFcqWW2pQLmdwjsjgb1PfFq7SAHJgGdDm6ZvnsnzDWAcsJTthciKh7iVZ61KD3LEWG73cPSv8egtGMTejPvXdCV",
  "key11": "2PRMpcdfwDShYPgtQWPo4xXLDBx66CgCKect97TTgHnUQFimetS3Cwhc3g1C95hQRPPECivFtp6J4LQHe2hxAc1r",
  "key12": "66msE8Xz6oggboVmDJQrMaqhpSDmt5rU21Vd2gEoggiJRfNVJqjexUNBwDrmpQ8tP4cezC8EJWvyRcrSo6LeuYYQ",
  "key13": "UZBtH5m7DuDCgPJBAKXm8BUED1UEU6gsDiN8kaq9onjZhFxoZNZKCWRD5AnqZefU4omcjEsn78aVD1CyTtAVLzx",
  "key14": "2bP6KpayiaTATSLRtupWXvDcagnM4Mgyo3AK1nV293M7AnBtu3T9VZDpKVwQFKyBJ8hb92mo6fQ1Xs8j7hR67dgy",
  "key15": "4Ke8posdg4CeviuNyZjHxTfzbE5ncb97D4VDdQT5XdmyUraju58vjfUSY6WNDYHZGmvPu2SeWh1JPniugByS9fWG",
  "key16": "2T6zxaaecY8tchDXAzinV1wr2en6sz9iwtYboQuh2zNa8zGjt2wqLAe5CvV2UJEnepXES3rG6ZThmrjc66UvcR2H",
  "key17": "4JUv3BgHUvWeG4fi2WfLB9zkjTumgycR92JbmeqPB1qigbTLiR1fHy5RqHAA7nEDMQ1jcdZBhmPycDFDtEGTPYzd",
  "key18": "4BzkUGVkpyEVFABUSBk1ouB33gx5W1ntckTaUDLxa1qxV6S6yzirzTzD8PccwhDiJDZEcyr2457g86unvEpM6hnT",
  "key19": "3GxBC3AMJgtaYWfMq2pjdiEkwfeJTXivFagwXtSJWPDcthjxmXv5xdJbDThhdKEHXFiEvJPbsZB5wHScokyHLmyG",
  "key20": "4bnpNmvMj8bpxP8RzvNPmtXZMyrDjhBv6TLPKDGQVmiNPLTgcajTPRWNZdgKhSCJ7YH7HfZWQ1xhA7KPBCyrPSH5",
  "key21": "46fVfAXp4eNvBoZTod6D8ur74pckRtWaP5tfVScxAgaj2QXrNTMf66n1hmF5cz9xPPa19XrW9tetmnx65CeXpkbX",
  "key22": "Tneo9iaRDQxTJLEm6Ax6rwMPg9byToxesYE3UyPzLJc6bzFpPgSUHmft19Z8ymykuhLeosFxB27p2HKiMbquAU8",
  "key23": "5jTr1sE1nQgiQmyWFZKbsUNjuChj1zbLkh3z5DijLyth8gTsXAwgSdcEdZJLiUSUEW7KwnWGEtRWVMvWWAhggVAF",
  "key24": "2HcHeXHHbu6ZrXwhwzUP6ycfUTCsCgW1nqpE3qSVBYaFQbarv6viogtwZDBER17na4PStT51DUCCMSupakaoaWk4",
  "key25": "EGM4wMk7LqoX1dXhb5qj2bQ4QjAfiRcKfqmHXTvnjDbXZXDDwWsKrZjzjELY9LNgFYgUpG1GoEXz17bsoDUDKoZ"
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
