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
    "4xqfWypPpHv2HfEZwsWaqXrxarsgfPWt9XxzNkvhuvagm5kknxkeprhPb6E9tvJqSgXgSdX3aFYGDBfMSTPKuKrH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsNruPvYXomSZ7K85JcEhTqPbyqMT9tfjaZN9JMTpBU69FthdzagjnpUDapQwm5G7EiSGM7qc4TJxgMMC7e9Gtw",
  "key1": "4aHyBqmEu9wgVCDqLcUkEsMpUfAru5e19SUNe5gsCUGUm5bW5UM51x4QDVm8FY56db3hbvH5g3QHaX27KBEvxKib",
  "key2": "4QKTN8WKArN2dJD1NkroNb3huUxgg5vfb8RPPy5L2FenQQt92Gr5A2vXxnSLo1MyMS2HGGnTBYTr5MqEDXnqLwGY",
  "key3": "5okN7n4wXvJaTiojZake5FkwrxxU2ezDWifRNUn7cLdUWcqyW3gk3x81f9icP3S5wxfhNmDzA3h4VBsePFwXfoWX",
  "key4": "2nD2m9XcgiNQ2gDmi7sfCDgxFMWcNhtQ87syQMwzMTiLUHRRVEtUC5QfqnbNcybHg8h7WSBFCyXjfbF6BkTPYYm6",
  "key5": "BkeWtdgXW7L9KcBsGkhfBj6hA5c3WEMN71ur4NdGjLBJBksHgVCdngeKM2YZwTcZAVFXe9CoCtPMkh3SRUFxXT4",
  "key6": "GNfpPVRTqi9XcsNFNqKzPa6oTrWuzoB9A9dcDaN3JASkbVafGD44PhTW67fEokHVnrFPWKSvtzDkX5M39kqcTqG",
  "key7": "5TC56dHmM4tE9XWYkHD1opN4qdHdyPAtpE3gFL75HrN8GB5eJ7wjB62WVUVq73UxQvCFiPYgDSjGjWsC2F21YoZK",
  "key8": "5SYAQUvHmaRUNZkkdWxJdYNW2ydST8JB6aLmQNWqb6nj1YNuTaV2BXsaUxq1kGqkqGUKKYTFvNwqAcfzWbUKuvzz",
  "key9": "5LWfybgjUcPHnc8wXRohty6f76Rf9dwtfCnJQPZFez2dAjhvYWooUrCXZ4NNM68PyFVDAnzto95Nc4NU3hHsH7dd",
  "key10": "2ZLcP6vfr8a6A5DVscvno4BijPTNnDDtCQsCcbuFZiL56eXcd4xXpirMMdFLDYgG2Eup7EDGpfDXBFd2JsXKZd9a",
  "key11": "3rPQkNYUgqJb2nod8t3qPxphi8GcnRLzBXFLmiqCpYNZ1UsSDGGADPoeQ8AgoGuAcqUMiAyhVn3tHVNQ8Skondce",
  "key12": "3Lx6v4HqYmvWemP8bSeo1UMJkKLdj94PRcaYAecGsHLTZGxPdLKbSB1dHEfGZgxZkhMxUbk8VLYZxT1pH6rGitWm",
  "key13": "3GAp4EedQaPMA5VVbP25gCwxwQLhLdn8xKCeW8Jx8rki89agzgi8ym3TtcrLPkYesXgX3ptf7afNov3eQWbza4ig",
  "key14": "3t65tJMGjGeKD9DXGcfAbh4VwSTu3dXUc1ZUTX3N9xmS5z96aZahCVrnq9tben389MbnrTU7Xoaeu5BFdPfV3YRv",
  "key15": "3c8sPqdEMEuBH5TCEsDgrdngAYncq1DCJR7HFXs1RNx1VpETKNArFtuznWJmcc6NvzVvsyhrsCey6qrcvHpQWW3g",
  "key16": "3VwQ6r8oASzPBgfTVyy1sd5EAZexgayniPmTwJRgoLAcqRQvEf4g4TKtdm9B4Bko3RCyivYTpg7rVZ1Nh6NRrNJi",
  "key17": "2UWvcQ7Whq2CxY6PjpWv8yf95gSfFewHw1AqnGJu4LVQN5ijgZEXNcx7oF5tdX4nHuoWcjkrbxf4otzwjn2BuR5J",
  "key18": "5Frxt1hf1DAgbDX8Ppg1gs9d2SJwJ2mEHuKJ3fCepCCq9Xzux8vCVLEGMtsfJwVEEnEhCaAeNJdPqaM69HffQnGV",
  "key19": "4bPuTtuWqtttqSaeEB1J2TCkBespEKmLK1JpG4X2UFXHtyjTDcobt1umFYxhaJCQ4bXqREAHFcsUAi4F62oC7E7C",
  "key20": "5eGexYH72yKMn2NLe1q6eAUt3GASbBbFAV6mPAjdZxAyCp68KrshF7CfpD81ZeygrATzfW85wavMiNC5w1hVngCe",
  "key21": "3xiPPFTAXH8jqoEnh6TPbVD6fJXg6hHPs1uTm2U8RpKPw52vw6NsUxmCYCfeEndpzk9y8WjDw15a6niPadF7iJMj",
  "key22": "5rjmGw7UZG1fDSiUb2zu5TDnhYfHuiuSUBTYH3ANfgNiAqrVoibNHKCTnv816UEnBG4ypTkBStmDScteYsqy54t4",
  "key23": "2WjvNaLUNGiCJNX83HzaCT1yGeb2C2eA9tC1KY2KJV4XdypAr9dDQVxur1GgKBFFzJAfgJALTZYqLAJ8HuBZ942R",
  "key24": "AFeAgQ65EHgUSQMcaRGqeEMxnmbGz1T561yBxKb5yyng97BJQs622dp8wWHymGNHwJS14AQ38jR8bBTvvADYfUs",
  "key25": "3WdgBXcZy38Sg5SsVvzAjsMCrcU7uUn39gqkuWkkjZJDYkLsNR3PcYthux8VwMP4TFmPvEVEbzrexg1HVpCpp7yH",
  "key26": "4AJWb6q4UGiUyBrSVkyZRNJaeHgpdDknMVKr2oaBL2KrEPuZQyFqJ7VVzTbn3Zaxue6fUytvBkA6oCjUbnXaeDmQ",
  "key27": "54ywj7f4q65YYWiY7eqL4caYV9maXY9UnfWSc4F61Rz7cqabPqKdRj4hGV8mRxv7zNw4gAPpmYjxxSuaJPVczNA",
  "key28": "8MGDMZFwdzecMffJztVKGLnN4inSaZnwUUqYw3NQMMNMx9wFkzvcDuAtr19zDMmPkKfXaGVN6XBz7awNzERs32p",
  "key29": "2MTfxYAG1YNbioQnYH2vik6N6EMyJA84DU16wdZqzUfKKRv2JW7wGX2Jqa4V7iArGT25UYDtRih1RTVojDeGpPWB",
  "key30": "NeFkSj2SkntQgUPReLiLngsMUEPUN53dDFMYoWpgZik3RzzXynL45etb1t4FaUU7et42kDukv21qoJQdBWhvCCV",
  "key31": "4dyh3hzDh9PDQWahRxGXwDMr8NjsDazEvhQPXxanAF6DA292pqAeeXt2Anqr7HRwRfhP82xMGkqFuwUL4mnLSXhu",
  "key32": "Spzpi8TnPZgqcgQ99Cf6hyWfUhaPWWvUn7dd1Q4HwFVXeTgfMeyVY2tuRskX3NqHw2k8toJbsexFJQpZwpfyJbt",
  "key33": "4xHuduadiJm3fJuX2tRLwaWLPo7a9jqnbfrBq68U8ekEGxeys1WFUGYQ9A3BL3RWHnBC5BgQNipwSCPbiAhPE7Ms",
  "key34": "3iw7SgFctpKSVD8T4EzyqP6FqmY3SUKaD3PeX7Wdg4avSvUPhDrn1bRyDwouEGjdQj3CKfofuKfS9RuSJACCd3K4",
  "key35": "bqNr13H26PSeR9Dd8gx7MN3C4vToDrJq4QMszbrHdG6jhzGPGLdECBRYAbDfuFqZdTPYNeZPKNjZdnDKmn926rv",
  "key36": "3ka7JrCz91VSLbJ7wHtVg55i5ViBety9umYYUroNnGo6rQNLZvYLopGYWVLzm73kdFhA1kWfumWJqEqo2atGqz3a",
  "key37": "44UxzD7pzgivydcoG1KudTTpzSqCsB3Y5oJaoNM59HAe2Cj7jrwGWoGWe7en5B6m5mAnjSgSNyYfRXgGvcBx15Mv",
  "key38": "5FSVxeLapo9LoJLScUNrUFaSpDMDdstmDJFAqHPNQgY6apyTjoaor1xoDNGh2Jbmw4cBM8q43R4cd72EdJJwSKMQ"
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
