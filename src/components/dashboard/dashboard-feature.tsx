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
    "2243VLqfikU3YaAozGpMeWWAfgbPhnDLpq7RfTUY9rfgtenEZmmMa5Eo4HPNKNuxcxcf3NYbuhRKAxyYcuwvZvWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XxdMxfSSwsT8zefS4evaAFGKpimZLor8iorZ18WTjCyACBKZcHMfsFC65MFizULqtqxM489i4J7i3zvCdhxkQGD",
  "key1": "4RXoXYqHrXXrgp1XSDRewazaL1dtLVekMTCRo2rJexFXU3q6A5PDyX8TrgJJ8FA1KKNfdNX3K9MQeao9wZecnYqf",
  "key2": "4cy2uNAhcUj31fUw1FvaaYGU9Ti2M6584S67Kjvz45wFeb2Zcm3r6Dn3zhoSmc5Hgum2ogHNyxXXj4SSVDXCTig6",
  "key3": "2wp7NJjn8voPsu9ftkeDTYJCEBTpxYjA9tfLkSDdEw12nAsVbyfPtZ7eCqZuhu93ZR4VQFzoNtq97hrmK3a15Zex",
  "key4": "SHqKZ3xbzXtpiqR7K1JTW6JcJdnELSKwnzNiivrrUmPvm7fqm1qBNDvTdyDJ4YXWjzRZ5fx1JGEGUWWvrq6waBb",
  "key5": "2XbtmiKNUmBwSKN2RMj2qBMCas25m44q4wMEyc6eVFHzX8tGrkMoH4oUjK9x5EmmFQePaCXozJSUcnGNcD3viJ3D",
  "key6": "66qqgZPza37hxAXtzQAWMQCc5JvwUWycP7gTJ6ftQ6cnE7RK2AyJYVmuE3xyGSrBcvUvgc4K9znwwMZRoeDYrvWC",
  "key7": "kMqXQBdAnP81QvWiddYz1E4sSAksHP5stLUpDzrhPEZeswRSr3uwfuhD3MnBsXzHMfgZaFEXUUVAP1y2kmf42bK",
  "key8": "5YXFUCwxyjGTDAfcB34LkaJ9HHui2uaivUucatR7yrjvreWuNErYtqo14wCF2VMPR2Z3KKw4YpXAomxVwJQbwAH",
  "key9": "fMqmRCzPMGwUNCAp1FVghSEDYTFs3E9UdorxDepmrnB5F1xHiVcKaru28myNSqeSPznsLPiXbzNAfSaJvwJiom1",
  "key10": "2Gof2NEhdMxzz4MzrnESNF8ueAxM99PKi9v1c3PY7jF878BYWGDRjNki57czb29ym8G4n8J4o7TmugTGVnkVGf3n",
  "key11": "vhe2252FWMAdFySupkwwnzySNcSysE8XPYuCPk8RSFa4gAGQfvJNX9DgPSZjmHYpQggbSBbmm8x8L4uxGWx3DE6",
  "key12": "37u1hsXRztgF5Z8TECwimDq522mv8hCUmG6qeSNnSSrTpAKnPJaHC2N2zron8fNG8MSqk3nbAFuW62ifhZm3YoCB",
  "key13": "v6othAvQHUphweAA8jwdoPSW7Ebm11ava16QjzyuD2a7vPQ2rJWje3H1FMFk2qXBswEd8mKijpn383iNsucxLdK",
  "key14": "22EGcfMPEJpVXVyopy66txztGAUegDcG6ykfvr8WffxtWfX6EiPijxF2zGLHMhwrbxiB4RsVvdiCpXE4t5cBEhnk",
  "key15": "5pwjCni4D5YJkNtCYcyv2KjMrkuk9EA9YG1XRyFzMhEaRU8THuVpxFh91uw5oTe6oiFoAL8PESZVEteB4AA52b3u",
  "key16": "4Vvzuj5L9YH35hdxq58Zke8YZmr2Bp6XBq4478tz4aMH33ApJH9q1ZtHYth4zXtJKmDUXDsWyPRnkEGR8wZT3TQd",
  "key17": "6292XsPQ2ReJLLu9NK8TE1UrDEugtx5QwRs3Skadb8enxPYEyrToUVsSN7ujdLMegRY8qq8X9PEdLBHQPmWW865y",
  "key18": "5NreqvNc6fAQGKjF9AVRw7QhKZmZXmSzMwK4RgwfGd6jGhtpawpTvw9nKyooDojNPuEZFps3kN3xFbNsHYWpGQZX",
  "key19": "3GBGExiHMLPVf6ffT4cRv8ax91WwymkUcsXRHsWVSLNoufkHVgwNXDkqFUSJbPtwEZdD7RpExDCf93qGAmTvu5Sj",
  "key20": "5D73a7o7pDGtwdB7FZvyZaPs15jXbPJitj9jUY2yfp7wsToEEnDUb3U9H5hP14nnn9ByCG48hCL36ExDWxRDFeFN",
  "key21": "2YNu661gR17oXjoZaKMLmAmRRX4Uh7nnP6vwwRZCUR7vkbDwyvqbaMRqntPSucZBXizB4nbQKbXX5LsZLf5m2Ww9",
  "key22": "2hiU816d6rsVq6nTwYU47FBdh3bsp26Wng3i1WCTUQvXgiQkGAWBXaHdAbBysEXnUexhbdc5KwmwpDCd9zpytFYP",
  "key23": "5pd9Xp6izvfBCmjYMc5CLxDJAjpfxV6NHHANniuMXBdVip9nT7emrLEE7t7tcbYkNMA8xJQ9DCqtM4GQrMK5BEZa",
  "key24": "7Ves7kvaHivhRdbgMsNAbpE2pBkDbRCH4XR8e6NqPugfFjNhCPtdZNotoxnCCVzuJGdfq6oKGF1bnqGWLUhZXts",
  "key25": "5Pc8fyDLn2rXc61qVEEv5eTtdC59DiHTHoaijY2qwgHMN1iYLYWDo757Weh79WmzrSeAwWje9UpoWV5eB8MwKyuY"
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
