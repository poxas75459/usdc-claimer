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
    "4pYGnAUDv2QQ6k6uZoew4XtYD2KNGh3xUpGWuTkdosFoiNfRBZbXJnprySA1HGSUHAvUCTmgPd7JSyZJHwRT9GnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TwCFaUx4jTVktoLojrByisrnvBTezqfcvGx6LZkKs6mHcJXeHMCp4ayUKTjJLm5xDxkAm9UUoiPpYK8M6mxf3sq",
  "key1": "HvsseAXwuXynp4pD3YG4V2z37dCR2xP6MWrxxVswbLomJfDvyxpvs973GySjckRpjT2vSEgUM2rbhfRWdL6tNzd",
  "key2": "61es7yai6NpwWfjEPneC9jzANyYELgHxFChLMsjUrcs754m6JHwro8Am5kUcf4tPG8TYCaZPcDh4Ea1Ed1jMiJUV",
  "key3": "5dFFWrN7u6uwdUNLoKzfA9piQKy8ZsEjmZPAnUFvYM5b8PQLUGznk1rbYDiTRz2sXmz8gSRdyabjJdaG9NXXydQi",
  "key4": "2hDM4gQxus7wmaUVKkMUFMk9QkRqDtrird24Vk96rtJUdPBSVUqmhszgeQYgUjhGDD1c1cVC58oHaSAAk18tQwv",
  "key5": "2UfPiqA9SMWP3JNoRnn9RQ7zPtab2z9CJ89gkyS6MCJBaViV296zbBryiCyoKg9nXRe4MwMiNMmd8ZCPPXqMWNqw",
  "key6": "zNY6FxAjpq7Z8Ri1dNiCEn9hEuK8NCvKTenVUafLCPzo4Q9AQ6b3gJsSNrDkSFmgVcJBxG6KvgeeYyFugWKbgus",
  "key7": "3bAEinuDbWRLyy4vwB338ixh33Kaj5WBEpwRejAMuH31PYN4TcvUEGx4CW15HmGiUuSEErgDmn4sjV3GLWrorZo7",
  "key8": "29RQfD5fN3u4dMuKMHXvv6yDzn2WFUFupDnso3Ta1TARo3gJN2PMTCF6YdTvHENWYdXmNRtXoQekkb53UbwvcjYz",
  "key9": "4CmBKmoWLFtD4GuiGvayLVnHGabsP8WJ5d5gkhAgUu65e25aSiTFVkFYQhcqWktdYG6fQhHkMPSSFR9J2NUQ8E1e",
  "key10": "2p6c3PHVZAg2qTANxovcNogp84W3qgHS2yb12K1rsdy1aY38pmph4yspr4CZwkFW2SNpC48UAyFLz4Nk9xdxDVJn",
  "key11": "4yw26C4HU5KAEwZmJrVPQj116viEFjN9mTnHMPNTP44Gp5WsjtRKLt7pRu6g6mmfXAjYzzWn7NUVQS4271EVQkAU",
  "key12": "nRFoM7JbKu8YCvEjbjc7JUtY6bP8faxTxF4jUunArDzt7SnahkVzmbpRvsdMJLqPK2Mtukuq5GMzoGobw7JVo3X",
  "key13": "4Vxi5HTRuQXgN1YnQgFrGTQCWJLozdYksdprE43wDcyigBm4o6ZVJqosNwWE8AMRo6xJFUTwbYPmDtAkGuZxgNmG",
  "key14": "2JCHXW6iH4hNkYuamw2BenNHQUkC6hcrQKeyVRBRkosbLgU48JVfWY8m3XhHMvSixS2RM52aswZYZDtcWQgtCRgt",
  "key15": "3R3HKDHpDvmWiKr7Br1QkzaYdCKZTKkXcom4NSqefaZf1HgzWb4Xec5C6Lf27SpczxUMpVygLbpsTZ3rQmFe7mJB",
  "key16": "5iXKx8152EpLTdJzgVPT5dvNP4yJENqByLWT8UYw8GevEa4FR1c9Fix5MrQAVkYoYt8N2VDr3aLaqyRRoupZ6Cb3",
  "key17": "2j5dLPoXuuxhdDD7fArB3kwepii7MqHbZfoEaM9tHXRUMx6k8KABXpx4P9G69MmdwnPGAEN6fw2HbmLXdM2fRVLy",
  "key18": "ojDj8EanSpV9fT76ywfSoCpeJznZSyqF6WojoL6S1Qgw4v9aFHHFJAiULXoTqkcW4w9WynCaB7q1bBYgpyG2fCR",
  "key19": "5Vn2pht1fFtxywFRZjHnnJvhSGsgFCzvdtv2QSG2jHAgWEBzJP9w9G1LNKFBMEJFyKeyzmgfenPZYnHBrbk9uxkE",
  "key20": "4dXodSCdrqQKep53hTYoE21C7c6Qs74D4Qp1cAuNffvQ97b1rdUGMobyAyMBMSjd6Aunj8VXBdyFVfixy2tHBPw3",
  "key21": "21mPnzUx8p6eDp8tzTeo1sH96LJZosSZuFCybQQayexZgWsepjWt1BQZX37Z9i5RS9tvV4eMv9R2GQ3rF2uYReX7",
  "key22": "33oLznrZn6zfCJz6RPfybGiJDifQaSHDqhGHftJfy7czvf33orLtkaoKVD77yefWhHQDWYRDJ8cdqeYb37tT9a9P",
  "key23": "4RTR3vmjmQmGrK8DBRGhdkVFhnc1PYdx21U1aGxgPUe4pUh8aiE1mQ5oHschEGQg7rTUbzewu7mg2ywtVupykfBC",
  "key24": "2qW2StFjC1XhSeBb1zcm18LKhkBQjtTepiJsfgusSd6whSyArCHmyWg1g2SyGMdZ47yLuuarFooxJeCBrKNguPFE",
  "key25": "2nunB3MRZfcraR2wsgXKCb3tgNGKRgQdgHyy8xiJKWCyJx7E29T4WpjF6nL1yh7G4YwAGTpfuR2h8PcDAzruwQpu",
  "key26": "5BHL3TgjdtMT2FYjGfMGRX7pynjqTWSScQBjoQeZwSoWjEJQZTVGer3soV1kYtSXLs9f7P1FC5GTfKFEEMBRLei6",
  "key27": "5cXPft36yr1NeHtTSGj8ERiGvu1JwbxLwiR61q1ywykxU6LJaUpBW2NrsPM25HVyCfQc3vjXE1TzCxe2cmezstj6",
  "key28": "5wj8DxRHU3nN41qtZpEtXckS1iUoMoHR51JZy1NKW5kVmdAuU1pDZf1aDEvqCSXFxTLt2wekzskAWSoNcrQA5Szk",
  "key29": "4kpGX94qDp3NypTPsfYk9wG84TmEpRHZPgypcRCn39XgJ3nnJg5ocEiNCNg6HF9Y9uMf3cpeAeP8sSiNu8v78Bgm"
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
