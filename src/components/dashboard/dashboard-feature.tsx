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
    "4sHsyEyRrVrJbgqXtDZ2hnXFmk3hM2jyBYUk6NM7T3FH98ytMRT6akXb2K6bm3p9Cth2ybt26nCCevQTm6cRybXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nxh6qetWRbup9YCs9Yfwj6rRvCQrtVNXXsJjSrRuUYEDTFHr7s6RpNAAFKV2GnZa2VGSk8urh46LxDaAVj1DG6Y",
  "key1": "4C5fcWYvW6E3PNFFMHfd86hjUGX3bbkTwb6gqjkM4rYz4EfxLVH5Rqmkx1CqWTMh8UEZZc6sM3nBmh1AV7MtB56G",
  "key2": "2BQ6MbYfLQ2o2F6q5RvfJdpnLWrJfXaBFscshEFUjggyipyACZXpomTGjYmxo3bK55nTkfx8RRMsFo56Jg2JqGbY",
  "key3": "3ys9dk2xE2pEJjY1fNmCWSCXXGz1xBTd8Z2QcrWHUkv4JC6SKLDkeH92B2VK2c9bvq5DhLmpADcF48K1XX4PcyJc",
  "key4": "3rMvio28warrb2W2d615c15qDW34W9L1MuX6F9QHqwRQtTAK7LQatQiB8K8zbXw4WHVFWnaL3TuLVCxDmfnp2yWQ",
  "key5": "42hbtbRkBB77tnw4J8JxK7KWPDafwW8NXVpRi8FvCqo6LKT4taLWrYsSEYCz6YgBe33x2W9NCwvcDVUZgosTsB3T",
  "key6": "2nBLxcpS8MUHutB9As1Q5uZyeesPX2kPzkBDCk6FiVoZB5UE5Gwinbgc97MaeRFuQYai7JtKhkaUuNBXK8736U7z",
  "key7": "3nCFi3bi8RJRrFuPGM2J8HEq9wxU9rYHK6b5TqnUgcYDvrnBca92qnDK1pVhyv4GtUejssFqSkzxWpz6mJDn5jtG",
  "key8": "NmttPTRiNVwQh49Qy8apKbD8PaTX3yzvKmyBPuPh4cVdd4JDQrsnrsuGcwNkcxgNQTUyrHEbPvEVUR1hcWzjTHz",
  "key9": "5ufYX8RwCBq1tHj2y3KtHs3WBXgsrvMZLEyJpyH4W9nmiUfWJCi4UcRKKp9HJAgDb9ErWXczWjSfss4DiCCoqFq4",
  "key10": "3Gp9NLAjajNUZU54V21igiS6TPA7at4yyS1hsb7wgrHG6w39cmpWDapZDQ2sehqaje7Hc6QLRbMn7Q4DN4vUPuAK",
  "key11": "4HAWYyXJg4a5zYox5RV1rWzWLjKip9Y5WVfFnJWfPU8r9zNCBhRWqRrdPjEqwKSSBNgd8S14WcusvqYwccTYsTn5",
  "key12": "5ryfhoUt2wa61wNTtvSun46Ex199eS1wFvKBtvXz4oHHA5hVDZhw1fkVwNdTL4MDPVdN6SA5M2sVtTnfwZvai4Xs",
  "key13": "PhoYtjncYczVJndFCX8UN2m3a2Am67BMwWF5DiTw8sZoPTwcbKV8m6QNvXKXEmzVMkehBppsW5f7FHneY3uL8XG",
  "key14": "2UkfQrbT1Nw4pZUesiTGtaBUhCBsm5gF76YeaQou9Y3L851Unm542jRHcpb6W3TxU85hdnz3ie8tenHxU8PnYPJp",
  "key15": "26ML7d697S1Lyta1ezLes8kF5NAXWMFaS3912ff6oDuvaUqak1cKJKAyReTAyJuHTS2G4qqAf41Gjbznkfd2kQ26",
  "key16": "LJ1AtSTabQZdar4WzTRYWnuSwygP1EVftJxch9zypmqLRVUdmNxLsz2ek8nb6uTem6d5HKXL3Vys3HT6WsqcjkZ",
  "key17": "4aJiWvyV7HyQzToABUdvk8FougBDQ4nsYrEYWurDUQBFiijJttrce6D5JgSJ6M5YfJbmHvMd1FUrTYqB835su8wB",
  "key18": "43FCbyo2vXPzjgBBXrh7ut6XRZjCUmt4f43jTpvMHiTJyVwMGF84uNyivi3dhK6QfwWjk2AJgouNvDMVvaFtrGJU",
  "key19": "3j4ts4iJMaksr8fskyjoPnvShkJcdkEzWdLmnGcMakup4CBtRGU1T9UKWpXn9QoefDHURxDQYkfAq5gV9uNqG7K3",
  "key20": "4MB8bXEcGm1WqPnJKD1AeZJPCMdhowcz3B2qHEvXfMiWszhmWKcXVfwnm8RGxcm23gmBQQxTeWh2STJVWhgqkrKj",
  "key21": "3pFpRJVbDNHeZbCL6Q4rBXTs34nXbT8MdTqhRDKkg1XAPhogA9fVaiJvohsy5karroHFVxRXSheej22hddakopES",
  "key22": "3d2Y18ZPkUCw24ioZMN3ZRFZRBaUeJoSL9myeKHssNZHV7azanZnEUvW8Qfc5WpD9EdEQjw2LM4r9txJCJY3bVbf",
  "key23": "3zGDvEdHj7GdtZTwGrpbFTPCfLwJhMhcUDh6o2xYS7pRd9fxokdSp91cZYQfwayYAaKQSe7a3MD5GgCth5EXC17e",
  "key24": "5b2bND5sMxCwAMtz2vMCpxy9c6Fd5ytGdMQF2WJxE7JgiGFU2nCHXmY5DERPgTKPVFW2TR1Po1vASXEQrN1c1vkp",
  "key25": "5bFF8MEcwXFZqGwDe72tHPSFteTnbgigcE8aBVxt8htjriBp1YCjZrVXGwCBLnUDvY6DLtMpiHyKdg8FcMZyvaxN",
  "key26": "3kF7vaWPxG3dPD5zS3ACut4Z8PtE7XuyUPUAjtSGZRT929XWBe2z2NU5FS7fuv3ehYuqqwi3NjUndKb6r37GDc8d",
  "key27": "4uBYJAb7PzRC1x19VEfnLPacCwj5JpagXK9NiTH8YgEXZHvBwvz6S4rNWm9gYUsFWURN4fsGbe9vExj31n3YqRDh",
  "key28": "2mWqM4dMMGRx9ijPw8Xy3NjC5FcBZiQtTikfkByfHeeRCJVtmFPJqpUWaqrozcidH1hjnjP1LDSD75HdNdyfDPVA",
  "key29": "25dni8qcTBdavqRv3v6pCJp1NdNvqqsEqB2vy5iH8wKBZAAUq2ycW2pii2enh6VMTDucCFMMp9aEty8eQExmCH34",
  "key30": "49M865wGnNmXYv45xYS3WrxdTM2G6yYtVmXLAECzzhZWG9um8bUbtJPKxHJz8cdRmg6XuJUw3dXWD4cz7kpoH879",
  "key31": "DoCJZhNQRHBxkYtp8gTRRiS8yzLhov2U3N2YR7FeobYgcb7zsbyHvjW49iNLEVhVeprhwhbCkWFDn7jvHF35nHy"
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
