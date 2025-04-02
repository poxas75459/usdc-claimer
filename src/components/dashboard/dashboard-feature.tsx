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
    "3THrrathXkejUJEVg5gNm5tFEjwQZVJdCf44C3YLT6yyYZ7jQSwg4c5fK32hWhJ7Y4gZ3GYDCDveT6RVcrQsRGrx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iEK9PouXeTi8a3rRHib8CsnG1U2uyDxJ6FU8deSgr6AHPUZnw4je5eBDHhtS23Vq33umxQJYAPCSbhmxrZeuFGT",
  "key1": "3TAGDJmSig6fwpZwuoF1ZwfgHbQBo53FFAgdRSfiZhF1uyCbECt2iCf8uLcwJi8uurQwzfJJuwk159JmHWwD56VV",
  "key2": "FAYox5HX3oAXBkj596V3LSxyukvURQPBbLN56RUdcP9y9J9FuHZeZLfj33eNaVxGw5u3GCjRF32kkGnPZiT5yN5",
  "key3": "4PcBRUAhoW6uF1bR7rgMoGy9yfQKCFjyxmE9RbPE2QFizNmBkjoiWv1RKypiFiNQ8hqRwqGonfqT4qkB1XXiR3Hw",
  "key4": "CpLreT4An3R2HK4wtWo5zKAVzFghHYisrDBNYyXACgVKDLEQv5kEc3rQeix7qjeesMmLLnaZzpJjD7YGZTRaNgQ",
  "key5": "2urJxBGpBiiRG5RLrDYGQgLNmUhDmxkd4Vh4RwTEKKWr8ADjpPSUAyKLhLoEnBsnCoCxk4i15hNaMmErcym7j21Y",
  "key6": "3pzUimeztdv67VBDUwNph6NQTkCiLYjtcfkPQzc8w8PS1KBWSD68L8vgXNm261UZW36BXW3wd9Q3HhkDusGj7Q9G",
  "key7": "4BYqvGBhe7hwL9y77nWPk83drkDEtw6PEpFVTVwVmNbfgCrczugrSVLRV2Kc6zgWUeEfVdh2DsZW3jTY7tBCcqJg",
  "key8": "3ZdBThP9c7pYte8dREM4YAVbs9vTd6KRJnLJ9s9ea6rKQv8zDmJ6ZvP2cx4KKjV7wWv5iPHY1Udag4wQtSHhaFLD",
  "key9": "34ZKAYcS2JbgSpvfJ1LfTAjdcMVPMmCwW43MGyuWeggZEHNDvKoWPGGvpP6s5Agp1TUXfheGw9MgeX9E7iHyAWjY",
  "key10": "37Dj8iPaw3pLWNyve2c8VUD7TAFZmpoWR3QTvKwgjHdzTugUsYrSCX44VQXk1wygPCioqxAFZxF1sc5EL6oj3WBi",
  "key11": "ZvgD1Wbq2Jf1nwH3YfPvo1t2qknP5Xh6bypUe6dwwGk6ty5bE8y1sa6tZTeQ44R3jQJ5fa2mZ975jvQ7DxVjt7Q",
  "key12": "5x7RBzGzPBvSnRWReSzfJfVJiTfGmvh1PMm55eQtcXimGY5Dme2FBbcr3qYHvMJTatWFz9UY85wL3XXaxRYQnmmR",
  "key13": "4e3foPwU1hi8ZjntPNePy1YZkREJsqQmDZ914JdPAmwNhSVdXvHucfXnCEe7uaTNRRo1gkDWAqF1Pd5jm9xv7LL",
  "key14": "3nMun2uMiU5tg3VL3bmseskKBD78QJg7FdRmozvN8kWJLcUhuf4NxXspLLFYMgQmSmgLuSsWN4Knyjnayhc7yr5f",
  "key15": "59BhDEG6cF8BtCUXGkP4Rp4PEHNjScMzWdugAJXdzMdf4DnEeKKbfQsp4jXTAkbkNyEMNzj2fsGpKhJjhpRu3CdF",
  "key16": "a8VmG1FmeWMowtYr8QHBiJwevo7duN3ttoRtH28Fzj9aLtF9EVqA449GzmGNPaM9647mQjHbiupVDUNYdrHNtBD",
  "key17": "49EZ779UfG96aER2mDDVfT4x5zMZ71Bx6evHsQfvgUNTXqSCrzRESUmFTvC6Qs6myNPDMfygYjos7dxePsvRacTA",
  "key18": "6yX1GBbVUh8w3fdbPWjWWL5kjNtJiRmvqMwaZazCN7bpWDAxrL9CpJgAcXhYgc1gG79vdasNEWTmMVmHndJCBSG",
  "key19": "5bWNDComPZ1zwkxuNyvrPzM2WFaMhuJeqNiXgqV5zqsnhUrP566Qjz8w2wqsKt8F9teL5smakADogweLWkBWZerk",
  "key20": "5nKo7JbBnth66ZdNMQUs5yMnFccsEUnogGy1VtGNCzLuCvSn4Y6JvHN1p7Sbo6kZ69AVfMoRAaiD6xSZ4Rzpwv26",
  "key21": "51kTWARGrRoH9JApV1xQ4g3FhgjqwP98ZKKwVkNLYMmntRQt4JjSLQpGs93uu2zuBbTzDoj2NTqSey5P19GofD6H",
  "key22": "2Xypxcq8mCWmGWJ1fE6ZSam16cVvh8grqqsnJ5qGj5Dh8mTqdDaWjqxb66Jo3jQbdkXKsc6AdhBshHBzi7NrB1w",
  "key23": "orThuK1KLsTCguL6bTHhcvcqbzdJs8FszCbh1YuEhYHYwNBe2YAcgeQFhhedfqYJ6d2TYht99GqkoMUWYr3yMuq",
  "key24": "2gpydHFsEYQeVfJNgwX23QjEyNMhXr7g8mzBU1QTCezvuFSv6MjzEL3SMmnBuEqmifDQeo82KMkRBc7DxuCj4Vgq",
  "key25": "2tkof95oQWjRvkGojyHwUi6oCTanPfdP3CKBMR4X4r4arUgDF5zwaF1E6gK2abCsRJ74AzVJSngAoAWK3FVhEb2J",
  "key26": "5eDunaVxoc2QJB4pgkmGV9ycpeA9mFfnXe8vPugBr3RvewoLur8xUvuEFxMk8VEHkAJ6hNrpSTqbpLPtAVtJ84Lt",
  "key27": "1KS1Y8s8b47rbudagEaYkVtwSxEuHgJ4mt99tWTiQWGg5vk7vXxzjnNdZYNy8sGYRLSPkgGbV94HPH1dktytT8o",
  "key28": "5f65mmxZmANeZEqjKe6AM5ksoPgaVq5nnFCRdDH3as6kQgmjGVnmvhYUwGEdcEnXaA8kqDo6onB1YDGhgYe2jce5",
  "key29": "4ozWr83VQUY1eofACHxrm6LegmRyfe4sAZJ12JFSzYTUtbwqZumxuitX2Am69mPuMEc8sCNrm9EFoLGKPh66iPRh",
  "key30": "7fdkibKCQnvbXFf3Arb1bEMTsoygjhoSPRRSNLhRTmQ3R88NUgw1wrjH7KywypC7xgniBEhkY1VfdLv5mEUWheJ",
  "key31": "ZJCGMX7oGGgbjHDkQGFNbzYAv3kEK9sL6gWjTDsUXxbjciB1F4d8CyVyZU3F5JLPxmURA4zZ66pAeN1kfdvXt6Y",
  "key32": "4bKEutDR7Lqvh8rgqHA5saNWKhbN13JQqaLYsnwvS79ExKZiaQtNijNFqcNJpUMwbi6buw6cBov4vv1PtLGDLxzQ",
  "key33": "VZCZWxSU8jEngxm5BUhQWdgNdYDez5RcBSUjhxrys3udZKUHVs5zD51t4wSAnizvsCyzpeY1r5YsmBJjbAFqs5J",
  "key34": "2Xca8Bes8B9Stuomhb8p8bVT8atd6Yg1tARbSTobAPSdzUbSyymEV3hrm4ajq1EaC2oBHrMm5DUG8DQiPZLL1EaQ",
  "key35": "24nS327iotmQVhsizxpPvBZMhhkEfJ3AbHU2UkQ98fW1peHJv79yUjWMD55dVSTCLWxWyV4buqWSfB3deDPUYegQ"
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
