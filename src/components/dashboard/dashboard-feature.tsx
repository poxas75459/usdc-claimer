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
    "5VdxgUCeEf8koZEHnr1yPE3n7zHunEojUj6Zd5Up63cUJhb5j2G2uHnDkvEzyZzf4ZYqYZiJ1SuSmqWTfhS7i61P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LnWqdUwMxQ33sGEyaXQ66LdT9xhRqq1qYiGF5oC3ytFHdXN37t5zYTBTB6C2yXyR2TU6UWjPzNrsJshZWp6uzRb",
  "key1": "4zJTR2oUkQS4sY7XLmQ92HrYVEvvDm3Rog8i9hzB8F6SKdn1YTrUU7kcGvoq4C9yzcp2FRqid57K9Yg85ybrh3Fw",
  "key2": "4bc5YwPnkfTQW8vePv3FGBLPHYeQfUp8JRiKuz99hjAYfyf5FHF1yArjpQvTjyFAD1fVJ59cfQDjGATZuT1SgqTE",
  "key3": "56EKVff7YLqd3gfYXEkqMcVcNrC1yz1WytkUZTKW9w6DBMmRFjHeftuz6ivrZJAFP9RfbQin6CCd3L8YnxwNBFcj",
  "key4": "44LAyuXWszy4q8rzUQX2jsE47WfyMaEq4QJLPtSzBdKPL3EAS1PUt24ybDBxjrfCSXARPuJWdzZBXL7tv5Wg9NK",
  "key5": "4qqYUcqBD81Lh3Nd1YzoNysHGCdsHFe1d7Uw1kyG8aQ1vVUMxUhs4LP9qTn3nadiVRUkqKHC8fLrbXwzKoaWJvxR",
  "key6": "2jGMx35Smij4wJhZ7nVJymv3DgbYaqm3jMkyKPudDEicTbSriRwXEMQtJhy3U8CzbVX6yNvyWaZVYj3WivM5j5eY",
  "key7": "5D8634eXGyAyMRw5LnMJj9nYE6E2T4ozMYJ7Zrpa1mEpZZ2HcxqdzJacMUNVFyKue7ugtJuLjf8Hxhnb6RNSo97i",
  "key8": "2e7VVidsX1hDpGWfJTLZQLGVTwYZ9NiFriQ3Ef7VaUdhpYzTTWtD4NfBNi6i3ZWy9fGcebK2skzN5oD78XhKvdsz",
  "key9": "3ZAFcGqPj6ZotzgJ2QhQpmBen4Cf1pvx1qh3cjmgvpG7y89Lfm9oer9aH7q5GXJzNoyUwEJJNCHUghXT3JewC6aR",
  "key10": "5kbwbJs4MzDsH7KHgcEi3To9ybEiLixMGfWDnJ4pyA8NrQGNNQqt49o65RRJV4yVyMJfe7esVDoeJdkb2FvY7q1R",
  "key11": "4jcnjXrZMJCaHV5VapgJGSxJnpwJjM3grXm6EYydHpHdmfaTEjPsKMEJJEh8auqo8wZDqfGZeHaM4QCKGhERC1Y6",
  "key12": "2qQtqeBKs2kS4VosZjFXiJXavhRnqmfJs8eD6uC2jKNvGwqzHNST7whHtA8MJ35wc9xmVSZVv4SkcJPZv9ZeW7aj",
  "key13": "2p2QVPBGaDLDKswK5igPdRPoFEeT9SJy8GKsPGnX5zsLJBPTj6TonrBL95NhgeVP8sjHHTUvWBVSXLxQ23pDaZWk",
  "key14": "36owhBF1327eddDHCjBUhv5D4owAuQjFbCjQTTcdBYNFWZkWMNbpy45bG3YeKogP5jao6cvBEVeG13N6BCVyiX4H",
  "key15": "5xiStEzP3YwarmHgKe8N4uZgmQ4SQBaJANtRwu8KceBCPuTsK5y6HHXrWdYfPJnhJaCAJJfCY9NpqwzbuyfxsJxG",
  "key16": "4z66FNRWQExP76ZET2CDSPbQ16bUNFxAmrtPzpCsJrmWJMQz2gyFGcr2yFx9ejW5xG8v1t48A67LJ7PRgdKNfuj7",
  "key17": "5W5Vf47JXuMF31uhmZtHWYa2EBu1jiM2r6x394MfnzwVDmpKnLYCC4euH3WAPas65sspPQTb1JvT4GipJrQkZLHH",
  "key18": "341GQxUwoJGQfmYeyGtAeFDdkUFQjBhc3rwnT9CDpCUo5VAn55gw762qJvdD8cgiB71m1kK6iUP85aX8LPzWHqG8",
  "key19": "27c8fDsRjdq7G5SBd9Y5dFr48CLGpoNBiwN435mQCUmoaW85jB2y52rkAJViAoR2PpmAA4fBvKuQZvTf7mrbrXX2",
  "key20": "49tfb431Md8UE9iLAiX9idUhb8FgwY4u5LBxrgPTBKG6yXQLRVf6Fjg1frfXqE3UmSgvWAhyNrC9fMfgXhLojgEN",
  "key21": "2amfeo5XewPHjQWr35hriP3RkQkp87v4sgST93Ssyh8H45KJcLcUH9nHNwzaJ7wxawL5Xtvn77LjD5BfhcLsMez7",
  "key22": "3HB7haeQGzLMcmvEhM1VkZPS5MjNVc4WjgcGRkrgQaGqpAYi6xKRfScNDFNtR7EZzkeXMgDXj158HDhAwdzMt4Kg",
  "key23": "3RBfrhy7EGLwRHXD2Jg2nwLGAQ4VvshikTgZyLgHrKTwkJuxVcwawcqtbAS8kfoAT3wofmmM9qv3RUMZNM6mNayt",
  "key24": "YaKAd1SDSbvLFmLkKJ8CGnQDQwJguuadT3huRJHhApPTs9DmU1La8QSYXzkDx5tGdZBv2sdoRRPRE29onKxMgGY",
  "key25": "2xawEzAgvNh4seADaCaHqDF2iSL3m6kvXTS8MTN4yEvHz6ax7B6oKaD5xbk18yxhTary9mRCfZ5Pxu18aWnEbg4d",
  "key26": "dL89T8FacQG9obQfKbNTqki1LEejdUhmBNfch67vMad4eHeSy1odosUNgaLBJmZdoXqAUpmmBEwQGZYrGdkHCCT",
  "key27": "5R6MLDpmQxJbCYpiLjv4qEukoBXnaaFMFNdmHxG3EfLJ6fWxaqTmYESevoxwjoBNfkxRpaSXueXZmSsPagBQy2gg",
  "key28": "5kpkQ3zB7ENm7p3ho7sZaJxKk3SSHuoj9Se6XrVAnnizzQD8sEa2MHeP3uTHbHhGmrQ39rsF7grVm4Mu1FRfJPuT",
  "key29": "3nFeFwP3eLGKWJnQAguj921uWPQ1K76S8aEnvi1YpS4yJCQ6JuYCq5TaY9PRb7gshXNmhT5FwgBZYsDHGzUgAS3b",
  "key30": "3r9pgqbh3wjkGrWGqWiUFHgtkWUV1SDDWirQygaRdXEWw5TQGUDGF3KZj5CHCqUna1b3tjWhcj2DUbTrbP9diwCs",
  "key31": "3mSGvvaqW4VFQDjvqd9NtJc2yX6cSqKqE82taSL5C3KCPDrNL9DovQGNYob9joi8KYFPUtfiJYmoJhcVaUzcaPvy"
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
