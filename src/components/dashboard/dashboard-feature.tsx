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
    "EwZFFG7GjyUCKUcLheTkM3DfG5g2fVpXWrk3cTftyDYNi5RA38xidAZAPFruyaMPStNKobyEXU4zqca8hBnUarx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BWZDw9JZF7hc6UGBBax7Ko7Pdd7hRNcYmVUgm3NoVQ2CRxM9AcDoTjT73uw89jHg87X6EGGgGSLFTWuLAqa8a7R",
  "key1": "5ujBbdjjYJuVWnQDrUwS57QFYGNLjJ4yVFAnGt54hBQMiCC3ZTMgUzgEZQ9F7didj8oXacgvtzpPCuQbVyFD9eXc",
  "key2": "4gANXHG7cei3UxgBDL41cpPCmftFPR4JHbts3g6P14SxHgxHYPmoR4GnukcNeutq874mbj7eHnigDJ3a5UYvmpms",
  "key3": "vHA1xm6HrtF25Wwwg2bCnc7kRSdrp9jbLXaTVbaQEQ4JVpUP39zbp7kkpYaQeT1p2WpizdLporfeQDtz7RjPU5K",
  "key4": "3oaE8op3dpyVorzbMPLwuykVG6jXtpJNejmpNPAwM3dQKGFyHvQjz4mvcmgV9c5GJuWxEgJ1BNo7ic35PiRAWh7d",
  "key5": "2KxpCHFFb5Mhxg9byaXJHSNryeKnH6UFgYZMVKwRLcA1xx8jkQuArzQcDLuUSSkGh1sK6hWwjDeFodttBasr6Gcm",
  "key6": "47Wqy9JH6DUmDCLU4SjmAfK5MP7SbAbHHFbmZijEM3onGusAw7NBbYjiudZFJodvA59n8vniRtxArkRa3MCX2wHk",
  "key7": "5QjERsZ6Cmq9qYxG5b9DLAmLa1w9CPm7zTmHkrzmCYdbYjKs5o4vZCWwsRKFpye8MVkmdgo7iD5dCNbmm2nP3Myz",
  "key8": "26oCcU7wRAEUhzJ1kKEiQhixGfZzniHSUjWaeJG8Apei2K5EiYSyfQTyJkqLo86uBiEAhJM7DkCptaQRD8GJAHZt",
  "key9": "3DAro8H5Z11BE6mMDhSwzqJhVJc2G2RpTX7VQFuSzLA9wKdmNE36GNNN2akCKm2fKjhN7HcbChAEnFC75pA5zWeB",
  "key10": "2YfkuqYEtBxrLTa2vvckurAiXYdxqt6HGFPCm9nNeeXbxKFRv4K3AEdcqbSLLua88gBMDwnBH29yko1JsNevoMaD",
  "key11": "2fXxFidhedVGK7U98Vwez96k5gRdN98aKy1L8gWq7jggkSpn2q4B7mqaeJbQ34DXRS2XxhrnHroqVMuFu2vbr7Jo",
  "key12": "2WPdnhh5hf1FwuHVtgpQRZGEAYujdGcUMAVJJMR3yZ86LVnwnZxVdtNSUm1pChBvTz3DGHkQ8vT2MdFSg8cpRSUE",
  "key13": "e6PYMh1CwC3oV3qfUzpSdwweStFsJFntVs1Jq5XkGoshZESEgr5Jt2p1r6zyoyQbUBgLEDToHwiUT94U3jDGnuJ",
  "key14": "3mrtTJUFZZkkSpHXcerwg5Y549PJptzThJkqNPSvA88u6hCDw4XACGvCGUQ9qmRAGrPpowsGcL95H6GV5tAyrVtD",
  "key15": "3f342UC6qvmfP9NpMXmoZJXDiKnYXASEAyTv7kkkE6uj31AoebeSoV4cUkR7mVzQa69Wu2NJ1VyiiBjP3ztjCPVv",
  "key16": "5MZSr39sW9X5VJkKR9HXKhDK7X6ipYNS8p5ZeozN7AQPwuoZgW7n2QBrjLiXU8c6U981Uy284p46UpnVZue4kq2a",
  "key17": "3NfepQ6Tq1rdrnYuUYnMMQnZgFXLLkWskSoJLtYqxe3DpiRi76BarHSaDR1FBpaV3DFYyVLTL9fL7N73pJMfRAEY",
  "key18": "2E5UkJE3v8xsJ9dM6gk6S6M8oUCbh6uXimW2rt1Vf1RJsQFPzuCDzVCbbt7Cz6Hnqq2eUYk7GAqyftataw1rFjGq",
  "key19": "2P4GinfGKYd2WzMWVy7QtqhfGcqBisFMXnhBasNWXVX6RU9Tpn9QF7TradNmpGngQFC1jEgygLUeKzKQwz74DnZg",
  "key20": "2Tw2sVgbGzBX2j5tijqm9jaB2HuN3hULGU8FQ6J8VFbbZeZ36iSLWbUDbmQactUgU3bTurBy37GWWAtnkoNvdAL7",
  "key21": "5LzGNgZcAKndPSdqn5WbsaLp8URBmgTimbvQk9QyDKUiWT3tZcyUWBmX8JNKWf5iiKiSG8jrHKNW8nPR789dqBDk",
  "key22": "4K4xuTugmEiJKoHoL1j8U181iZCmVzsQSzQzEVjMS7EWiLDaM7CuGhgqLaYbdoFtn8eix64AzZnWHW85Ht5983no",
  "key23": "4hGtDUwyYHkrSAMskkBJNj4XfAUVc9WFcmRh68NrWvSGsdGFU9WWxiNB2RXXcJEu1Pnx2eWCFWMzMYBrAVJ1XhXA",
  "key24": "3bURrFdxin9dRRCkVMF1eGvUfQpvffhw8khiTk31kHwfdagmSKHMRsCCzVsqWtGWX4jxNSon288YcSmCtkqd7uZs",
  "key25": "5owmPApmqUR58WgPinJZ6cMFEkEk24c5RkmjPs2W8xQLc27Mis2vtQJsFq3gRqALy3fiv4aB76p3M3D5YTbVo2Cr",
  "key26": "m7dDV7yXUf9t5ghgpS5qjYPG7ovED7YursVdxoxd12ruDxp5SjT9Meoguyo4hy8fA52bBocZeDs6o2VZPW4cJHW",
  "key27": "2J8TWdcVn9L2y9NZYRacDgZKERiuKJrAiTGhj98cj3fGyq5b9vUNztdJLALTmy4yF5MH6CBtuQ76GyABrLX2Dk9C"
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
