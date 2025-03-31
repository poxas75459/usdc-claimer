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
    "6589kohvg9wNeVsHjap99CxSsaesLVyxngud56K1wGhMFfqYcEDtgL7cJh4SDhSWCE1KA31vyFNbCa6hCt3X2X1B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zhApYSY2tzqwSZadc7U7mJRFQF1f7Nk9qFVrDUmfX2WEh9YqpbKWdqq9tAUesVDtHi48iFRfFi9eSGEF4zCiEhr",
  "key1": "3YcGdB4fRnmRchFCFc3csEWA71cDz8KpPJFpCdWaPPhDsJMb3QC1YfD8gH1RuargXkX7jk18Qps7My3zpkkUNUCT",
  "key2": "3AzsUm7A7ruzeY8PzF7ZLeFkstLJxYJHFJQ148npAhirpaaoCLxMjwu3b9Z65YtJLaRFUHH3KCWmWB8wV4VovT2M",
  "key3": "5z3t7rtzYed6GW6H75vry6vSFHTMWNrjL8jGDaTFMW3rBPTH4fVnrcCgK6pUwbFwxE6rVSHQFP3ZfowYcQsi6hdF",
  "key4": "43DQsKFZWiHyhUQrzJ5UWn5Q521LzA9oQ9UDFCKnRBoFrAADx1R1grVhcaZAP1zGmpfxmyA5hwVywiz5rD41SHTx",
  "key5": "5MZDBx2SL8N8DhfDv8qc6PeAgoRiqcPFHkTNqWoxEeqBCJiuEfGhopvvGTtMswJiwdh8qrgfJaBT1kYh8B92erup",
  "key6": "3MVqVEH4mcDYa46qqmDwS5QoKAd5QojXrP2k7D6CcUmLZ6idtLHjQhgmW771k63N6KzbthPYJLtjXo2PSMY5o1Cn",
  "key7": "4Xudi3UoE5vQ4ZpRvvtvbo75S8edWjphsxxuGPrxi3SzKu9MtAcEUoNR7FKczcntz73etoMkvLmdWTEw1BbHfY2n",
  "key8": "44ykfu5wD2Ab146SmH3SacBkSb2Yx7QU3iswErjREyfkmzEN8ytwv95KVAM9n9sdBFkpfLWnaPPETNwTrHEZnBpe",
  "key9": "3EVd1sD5j38PW22HtRoWahRsiNu9L7EWPHkLkRcDD7RV687Actr4Yi11jRomSB5gFqSSyot68Mg6UoBkjh6xVEG2",
  "key10": "318WtFrUk2VNqxb1qfo5dfjXnVaSR49ZaKwh1ELPwryi5xiafEU5ehoGPqM2Znw4cQnK5oyFWgUTQhsVpnXiYS6v",
  "key11": "333bVKCG6CCEFfRGWjvPbYHAV73AFhYdAGe5oda2AdS2ofpgzaTwqW2Sy8kLBoxq2ernRaLXMhQVzDgySHtAmuHG",
  "key12": "4hxedtmhSU6LqsjWfTbqyodESw977JKxqAGEkGpDPcsjAeYQMRNy4Br4b7WwFYziQBSghTys18fmW21byJKNRYBF",
  "key13": "2qTXzv6shw2i3MmMM5b2CGhqreRuo8boZeHVZyUQHY7XLALQHpVGbzQgk5yKLVWfXh23RLthbPa8FKm5tS7uLWVc",
  "key14": "4HkLhQgnu8TzUV32WuQXDCzD5ibXaXkjU1sqFM1xxgHWTjnw3uhKvtnzkssQfFDLiBPQoVw3xxKNLokjTrazQWJS",
  "key15": "4KD1MxVg46uF485yE4KhYKcWEVPAVCnC3hk4qGArqUXAht3EvFFo3YMcxZqMe7bG7GZvZgZzTmqz9UUyFzpXGamN",
  "key16": "LiRc4mkCba8niW7KL55a8wHYVxtmdVMPnsSzqCMqKcZLoUgBxwp7e9n4LBjSGvCNRhUGuwXNMNDK1cF8ZyZ1eb3",
  "key17": "3XN19PDpkmxjv8FcR7AGTU5JmCNeJSsQEPsYQgVCDCiHpwDsTx2CDnHaLZMKTTNrEFQCDwDAwEFGtwa6c7hb1Kbk",
  "key18": "2BhKxJSYqpzWAEKeUqWSKcGGHzv6HM8mKjEWNX8nmz5E8WoTvyz3PWSF6nX1bBcbMvmsEyHmSmD382sF8jxK1m2V",
  "key19": "2s6peGcsD2gxUeZcaaEvYETL3Z1rccJiuFS5dEGmCReas5yzQHJRRL95MQxvMFQAAcKMUd2XNqdvLknAJF3b34Rg",
  "key20": "4hBew2gWG4cmy6bBm4Ds3Z7frYc5Cd4LRpYmcmfBg2KPEvL7fEafhTW5Y6mmwSq9f3PD8tVTCvMQb1oxbYhosaGs",
  "key21": "jveDd4Va9AposB4MEAVqNDHBeEpeomtyCLNZThyhXj865Tcs5Mx5S18HbCrJxpXiDvfyWKanfK3dcWC9ZwGLxmd",
  "key22": "2jyxA3a4apWL68PRyDdt8wRBJoXjecQ3ZW9JYzGuA9xGk7iswdVjkwtYHvys54mvsuzWBeix4hFQR64n51YZdQXD",
  "key23": "5MWTEq3pjNnGaXvGCzRC1E6DoCyDxt7xjABbcP5zci6CcVXbTNCkrm7D5NoDAdoga5vVfrsugqJyy9WCmcLtANXi",
  "key24": "5nLCvZTUF2KBLZTTQmVuLqyaD5P2UgnKqHF5DvWMmCnwDkXzE9xfmx9vUzkZ3BvdZqjfD69ek4FiD8WNLagt6csB",
  "key25": "5ghNZj6vZSZ2jYTFavcxERzE1PwqXtz4Lp4wfAPDyU5JWeC8iyGWvEMmLf3jvW6pQ7NGx8X3umg6eDR2wyL69611",
  "key26": "3HBv9b4yAsGyDZdVmhMdtPvMGQ5CmfV2WAphyTP7N32Siy8LioSqUbr8czaZJRXerKAyJYAx9L9vju4oBLZpMcwk",
  "key27": "3WqVrdbqa9NgV5F57xUGJMBQX7mbRj6oWN3cQYaB1vsu8qi1Mg9KW1WgRVp9yXLZwnD3KU9Q6pzac8tybG7CThdM",
  "key28": "2ooz1uQrA1J7wrp8dqR51vLUjWxPDP4QidchwDuJwSUymYgGHwYXBLaXWJPDQzcfCTmjrA5J1nRkpFJUaBW23kC8",
  "key29": "33e4i996nRbvEcirfNxpUcipUxQz6j6sU4Z52jeHM7VDMZtC8dHLkkbnSQfxX3d625iCAQYnX2BtiPqmSVaHw4Bw",
  "key30": "5F9DYhKjhGSHczs1Max9ejEnNACwstHZfMTF2QNoyE4uuToGFnBcc3un5Wd32zejyifHHCQbAX3Po7HKmH6GJryG",
  "key31": "5ojDD8o3m5xsb9g1jcHVsz2B8CyhSXfKg6crFHy2b7Mho4nQaKaP8F7r4CVjc3TFMuP1wTFDdmR1SfRc22qny2Q7"
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
