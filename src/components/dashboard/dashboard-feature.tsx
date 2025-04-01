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
    "5Aq4f16mar8wCWFPrxWWVCHNsK2PUAqMwYqEBZjG5mC92eGtYKXpWmLvmRuNq7C5JcLu9Fzq97AECA5Af5AsRN9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sYBNTqwtjU4uk6B71Q6G3eJsSypxRNY1CCpzhu23mWXjsBhXb4tAAVmPa438DxRNLkyKVEyr4QHom4FB1FWMieq",
  "key1": "3EsHBd5cp7aqFji5aaJPaUFUcnBu2s3Qr5pZU3QjmpUVYTtdTvErz4ZdjDx1s7KdFV9EfYtcnSSv8N72bX5QBvWq",
  "key2": "zDB28qhPDjz5A7iRmrch145LHPhq9tosLML5ok4YD5nU348iCzJJC6LqfzX4uXSXDxox6Z8dg23UFFYdci8zkGc",
  "key3": "5LS2gY8NXMe6D6SaJLfFbbGPtwPRMYMC9yUzqFrUKvN7PhHr2kcP2GVFvfpZf56rXhU3WHKTDShm4sFvLwyyJ7h",
  "key4": "4duBxY5P5dZo6VuemfvF37fZ3RJ5DVipiUjaKd1kggeWpgkx3HDWjtcgKkeVsoLAGeGogLSwFJGppjh5sHtEUqaY",
  "key5": "kBgmqx6KF5eHpPX5m4Cr8w9R4FtJfVrhezrqHrPkUBP99kmBKpdLZgvBg4Lp2VuXCRtKRFedmWAKbeENE2nxhE4",
  "key6": "kEJ3VSJrRcD2FFtQbZSgHSU9eMxXEQnQUKigKvLPUxYgRtse1H19SN1iR3t5o3vYCF8NuJTNEG2Pz8kRs9MXdUs",
  "key7": "3N87zzCW9h2Fbn7ee7x24XDa3RyzaKJX1CPLmiMA6zdPKau4D3NQHeryzFvtMBTYFWvY8H8KLKwznmVWJ66oCbJL",
  "key8": "4Nody7YX5QuHRUV8HXKwZw9oyj4Cr9aCUJNwuFg1aDVG56RxWdm1UwrqfbtXKKETzy8AZ7KuLV6TZTkeohFk6SoA",
  "key9": "2shNpmX4SENe9CnbHgqnkKCMhYxXz5wdxd7KJ1vMeMervSb6WLJXanKJfKPYwmjDgE9MjhJRmngLYESGbMHQ6dnP",
  "key10": "4YXYrq4GDihRCBWPmxzzRrxigV8eXkU6Tzco3UDXpgND6Y1Pe3yW6Mztby7rtk3roXjmnoqMwaix3vK1nXnww9PR",
  "key11": "3R4AWDKMGxdiW17m3TbVMT8T8xsq2bYmgURnZawbHF651kVr87JUbqZ6yYxhPdsm4QmqTvBtc9Er6VwgCKpxxsTz",
  "key12": "5HZ5t8p7tbxjD9U1e4eaEEWUNY78GH5uksiXb62T76UVkPYMpNaf6EtpP9cm9KJa56fw238GHHj3qiANWWHi16qQ",
  "key13": "5MJDHwaveXpy8Qvcsyj3nRbHchhsB6hU7GHQYjmHu9Zo7qDfDVnizfRZzDpJSHqimPu6tbGKGYimjCqriRSGyyxZ",
  "key14": "W1xpuj89PnnynMDkA6yhVssS5E1paNRgtWcWJw9NAS31WDoEorXP2vcS55kFFs9G6J9vdfF2AEUo2ANcoJqJMGk",
  "key15": "4iRT58JU23msiWZJqfMfwfYeYwsVi36kJ88A5iLSfFHfiqT8TktvcNNzmMhWp8YU7B9PSqgR3MoCWg42HzHszx69",
  "key16": "5WS965Jfa19xsdpg5HjNYctdkwGWV3fh4BgP3EFtSnQWQs7VRNxoTh3Fn8jdkfgmxn13K1cQkiEgzvARAJ5RAm7P",
  "key17": "sJvJrKfrbgeeip87nXV3PhxbXTPbHTtnEgEnbZL2CTXwz5BGCvjNJ5shnSPbD2JWYwsEMLmKc1VAWiTPRVu9Hun",
  "key18": "uF1Zep5u7WSn19YUCsAJSyyt4BJuQCfGaWdC8VHj9pgY4n3f7AvSD4VTpacoAuULQCJqd4GQCbTz7w8RFRodD12",
  "key19": "xAxDooJLmxkzp5sn36Efnhdpz7TtdQtVm4fu1qBuSnvU2BD44UjsVDaVKQj2ZiaNuPwdjRG6zKkVLVzjfWthedo",
  "key20": "4PetaMybX44fvtNmqf1FjmbKuoT77DSApHt4vKuJrQpmKSenXH59TKFSYuToU58jvHhNMkBuzaTDGyAWPbhsRARu",
  "key21": "5o1D62Kwf2XsjQPfU4RGQX1Cau2jw7UP1myQhQ2koVmZQxx79tmDtrT7oDrRRr5i1EoEsesG8SUrTwvYP5ppWNRW",
  "key22": "2mwQxWZirqNFnzEFXD5Bf44C2Y9CJQLUXWGcJBKKRTJ3g4fSXtYTp4mGC9GjW75ztk83oFurwAE4tKw37jMiSCea",
  "key23": "4GbsmP9L8PsasN2478fQj1Yr5X698TViKB6Em26QgD7U97dBPLJVoRhbZRMqMsKzo6HQBxCTmnaYXyoxtehNRKH8",
  "key24": "3us93LCfVycSCpeVYQNtbn9GvCLM7wcBCPyHU4BRDWLXD8bGdhQuEtmM8w25c9YFMuYFyoHYVzZJcPqUrhGa2deX",
  "key25": "5N1mqgPrdoTyEimPSiDVfpkXoQZzxQdLnLfG7nUUhPqPtWjGexxPSmuEfzigY2AMuXLr8vrcCQxeuyQdCNTqhe9y",
  "key26": "3SpKMsbg4kz1S4aie4f7AsTdYruNx6de3arszUqDhAjkhytqfRbPa5wsCQjThYWen57ZUahJK9NAgPVj6S3EnxAn",
  "key27": "2xa7j2pePzJAMNj6Ma4CPDrkLpg83x4KY9qk6QF6NWfjXyqPRqJbwMFpJYJAjRU4W2j19JWn6FHgN8ebnHvNNVVa",
  "key28": "2S3FC75aUHscawhQfg1K6d9P24bTKK3UjeWLKio85DgB1VDF28KPVBi3ZfAZb5yUHpT8wus1kSfU6MFr1YBfcFDJ",
  "key29": "477FysoKtcx5uVSxz1DWDSPz5SVfom9RQAts5EeFL3Fr9CPZwihmzP9xp2FvJct3jAXHmxStfaKW2xUTsCH9Majm",
  "key30": "2D1GqWm4UAxFvMqJsY7vsQdEk17KV8rc5By3o6ZraE7kPHDp2y6dnn6FGjTE7tqCisfKH3GSnYm8gPusQApFiVxh",
  "key31": "31d9n2w26FCZ7z7AttzM3GSHGsdurxkp1D2Xq3xNX2LxdqNm5FMneLGCU6og9xdbZpDNv1oiS4H2zBc7WLzsijrf",
  "key32": "474G66X7g3AXAFpoVmKdL9ixEa6iXPvzwDYsijbpbWW3WRiRdMLqoVcbsYRgrnazNWLYfSc5kKjR4GU4id4tff49",
  "key33": "3ASE4bToz15ChDdUtTMBgi4dV8CQgn6gwHD8mbpRqS3AKTRYmjzWMmDg67koQCVpKkzUL9YaArtseokf2iiP3tJr",
  "key34": "mrT3jvfBG3HbrGHrNP3nTeR9oudt21aAiR6AMQTPJsLEpaxHxdJ6QEw2nukicBsqCytunZp39DpB4QRjgtJLq6V",
  "key35": "5wq43y34pXvXaJ9Y7dEAv1ubVvKreMFhKsWMikJ3xAJZnBMjxVRgDu8hzdq2Wb4mydn6cJV5YQiw1LVtQdf8qQ3Q",
  "key36": "5AnQ8PAoxqTXuzvD3QvMVq67i7ZBkoHpLxKwfNQzNmWFfZqMV7emCCtQVYTRKAKWXuHZs8TyDqnRmcDpEkZi1ykX",
  "key37": "5qVuRNW2mRmzvzNfguyXGQSQXz7Hijx3oEuuFQBkGb41fEPR6zNHtNiqdXSwhmYqbBWeGe3P5fWrmbrofmKCbCTV",
  "key38": "3Xa6SAufycF7GE3YohMf6T9QbykkRdTS676g9VfHv9TYDFW1cDv7KbUg6s2ddj9dSm3Vj1nuxcaYYpuL6d3KbWbu"
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
