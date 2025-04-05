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
    "5gUNiXCuXy9yZV7fzEg1kEu1SzMnz4vvmcSYEzKD2ozVNMGtv2d9TiqshvYqB4pSAvniiMQspX6MUNf65pRVfxJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rzvg8Ck1iETiGw3dFSZrmMrkU5f4ruSDdP2asTtbdQPsCJBSdFiw9X1Yvc4TukPfvp5RYWNSgPGyc2TCCRKFSQV",
  "key1": "2CtyV1mSkbprd1PJJ4E9bVhY2QMxkZbP6oCHnaxmexo1t9Gh3notc2qC98qc6NuiYJ429LrvV8vDrwNvmXTxL3Lc",
  "key2": "35B4U9WaFYCZm4AwXLACvHYmCvU2nu7RYPcFyQTkg2gAJ8zUtsZpistqTE16VAC1ySGe9hLduGgA3KTrXmRcKsrn",
  "key3": "5jsSkxSp6vPXGVpQV4mn2mcHtBXvaCGqcDL1EQ45Arhp1nYSTPTqNvcJuGdStFyeT7YLsiMgNZzHNVrgV3z1s9yU",
  "key4": "3CZi4KLxwhLSippXdEgw4qnkPWAEKnf9Ysn5wfQrf8daU9YrwBo5EkTD8whWjgVBe2hJe7UA8sLVM1qzmZwNQoNU",
  "key5": "5m4FZneFwBQA7Jx5yf3QTyCYxQuk3Q8nRXXNUxT6gRD4uvr6HkLWuBGEpbBxVBFKF2Dd5CMW47N6KrGvnFXYQxRr",
  "key6": "5oFrm9xbejyMCHbDsCCTVcezy9fSsA8BqFiAPzXPTA7w1Gxg9c6RnmZmtRPNd8Mk7pgRxw9EMRwVmkhJRnB7MVo7",
  "key7": "3xdhxWpzAcQjwuAbYAM88nndSLvbpDpqzVkFXbtYAWkjoC2Fcb4XDLAwTgP7jQvdNiwnTwHhsKDusy8iyuFBFqT5",
  "key8": "2C4Fy3zK6anPfnfid5Zny3yFe62PmicdYHqCFgRRyDSwZVKbEdEuk2pNSYB4HLZ8ZoUM5bXFrYrWZFgAoxZaqHts",
  "key9": "4p5GpDhxgjtFKsWfUqmN5AaMHEs9TihfQ3dGkqLi1GLcZqxEffSUt5BosZgvwCAQV9kxDo9FbXMT2iSz1sEeSdV3",
  "key10": "521zWpBQpfiu7giX6KSwNHFf2EcMyqEY8aGd3F9mCVKyWV4W7sYtQUc4fFjBj9gkhSpvCVJKNQycqinSFxnymyD4",
  "key11": "36QvFHvN4i1hU6YLx6hWLPRty1J8bt4LgcCNvrEeQfSPsumwHCZZN4Kt8MoNB5QtUqkbusCZEFVz6FLw7RPqtXtm",
  "key12": "4zTBNwtQvFfK84CUHkezWxoQECkPYodEdVTW9QzZ9LwmDiNkQs2CJvN5kZtVrhQqLQKWetZKLMdJnkq5gDoHaCy4",
  "key13": "4z5UgZwPfDK71VgQjYtaPTarA81QjLR9W98s9c7jeQQfp21xfy6k36Pj8RC48qSA26gBALPX3RzxmcRNx7VrtDZ4",
  "key14": "T4wTnDXQKjeWVpmAkEpmHGviyaY3atoEBozUvCAMoR6TiHGN5EeLDAxRVphNQvXKhUtuco3WpKFhcJRLTBXodcC",
  "key15": "QX6WwSb3ZUY55QwHovxPuxx9qC75QzMufLYmxNGKx9r1qajuc6QP8mMuHx6eDfFPTX2KtbtXHJU1uvYQmD9m7mD",
  "key16": "63j95NfcoixZUWYKfWf7wNFgSd7LhQQWr4qcgrhybBkXCNDv5omgBsHhvjAvzfaBFnR2zF2UR6H8kf6ekuDvxkay",
  "key17": "3yNcCEg32NLeJiVvJAHwUFdfA5fbkQPDfRGMfpJTUCHmUdJnu8jQvmFhFDqN8c7DuoAG4NMcdis6Zq5k5K6riQh5",
  "key18": "2VsQ4KzbfdC4i1TNDwpYQ9Fxo41zyMzrUpHAQC9SZ5V4e5T8GexKT4ujDMdRaR39472vCSJesDqZ7Sps2EmFPgLB",
  "key19": "63ykBhhXo7zge8BSDQUqfA4amB6pHjmgvhWLQMuRwdyHmC1pZdad5oMFmY69kV2FHi8Pjua2tzrbERfrKc13Gs9j",
  "key20": "62Wt62Bqv6ZpV2RG17DsudN3AWTGxZGqwX2nn4tK3Gf2L2RJYPrPMHZayXZa8V1Hgo2qFuh2cyLzMZBpvznw5zwB",
  "key21": "5mSVWiXH4WzTsLZ2kf71BEcFVULaUuTnjmMPUYhQEtYfJ63KKN3crzmAK1gn1xN7LjoLc7ADztZwduB4HpdMGZLL",
  "key22": "42Qf66Q8QwSoR59NTE85pAzFrAZpuTEZRFmbuLpxgSxfJgbAQM8jh1QN9zYLPhuNXoqCgh9GuoaqjzJSTBW8xSTv",
  "key23": "2w26Ar3wPxGGSuFdAS4y86t65dhZE6Xzsye2xBDnWBEZGCVw5AWvSa8uvvwe26KiFhpZZ8tsYKxi4moYuKWpANaU",
  "key24": "4VT1zxzejYABVXf7DzEsU4hR13AsqQa5vaoqEAszjybfpqPCrop9YVoz56KYKXgfYSnaGGkMsQtqS2YH3hrEhyZd",
  "key25": "L3BGxFGZGTaWr8Tq7dnE98nTJL5FQ6RwqcTnaHQYCqCxvVuFJJMwfBotKFzeG99bus5qrvevtHmnB9Nsf1ccX4J",
  "key26": "i1vWoNWEcZPvMsfsku9zvug4bekZFp15fuVc37RLEfcDWGhuZw49J6QBAdUe7meRY7PwPKz8dQ432NryFXeCjnY",
  "key27": "5b9cgrr6vgKRJxYXmpn2P6x8aD7Q8xJjmDJsqksBJc4VX2HrZWtbpRJJAVEU3xE5a7g9y3wwQziuLafHBcZveUfu",
  "key28": "qyNgPadueapYekfEqTZAHTBcGZdbv8mmM4ZWGNdFiLULqNQ1VcztFgQQyYwrcu9R6UuyQU87z4AAVvf95JxxRNY",
  "key29": "3GwDAnxWfwbSu7mDiVmCqfSXhfzTGHozMphnepCicEuMN6KGoUCLQqhXE9FEFeuuUz72T5mY3VcTJKf79sM6P3Rn",
  "key30": "S6eRNzeb9KUahaCEGXg48MUrEnVWkQDocsUEEXz7BcisxxRnRWNYJ2546JTbr8dRN12JVugdzqRr3DU4cYwoNs6",
  "key31": "2L5CHM7tTvTKuE5FGWZcBZsZS6f4LPZEjfP26GwUc1QP78ypYqRpgowJhucLvcJiiZadhZyi3o1gujiD5rzeMacb",
  "key32": "3xhbSqiBph5KKSVGNJvhaCDSgyMJeL9QVRQTKuhtLf65mtQm3tXYJZ8x1qPuESFr67gF3GSmgsdigBEQsAE4czqr",
  "key33": "5TA7D9CR9p6YxWZuYC2F3FLTJ9BCNtrfRSeGHhYDpfo2iJf8EMKQixPCkSwdeYbq1zHydfTe5m6U21qFBit3Ckfs",
  "key34": "427usK1a6NWsaXk9UPKoghUBj4XaDQFUdYFa61Kxyohqt7Wz5czwU457sXDKVSBgwWyPb8Zd7527Lk7fdfmCCqTL",
  "key35": "CbvfvfjMohZAbmmfH97MWTahUmE8nNRVczFqMCvrze78suMcAbAhgVvv3yBsU128wRdQr8JJRreKnFmjrZDU6Fi",
  "key36": "UxxKVyU4ofa9dPtCGZs9ab73vqSyDYPF5Azr9ADCa8rcdJ2QkRaVHfuqASzjEdJDeQoGE52Lp5nhpeyF8XQTo1m",
  "key37": "3niAHc4bGGziWVnUwmvQX1DDMkS84inYCAqvzCKvGp2GpvUpDiip3FpXmjTecVCfrSSb6GoutiXnAY2woAsDP5eb",
  "key38": "4XpDDdwadvWrsfnHQ9bHdUGPhSawnSg5BZaCZwR8yReCMRaBuT4cxTSxctN4fRW1ZRGXfctczNrJaZ2x9akS2orM",
  "key39": "4HazocGY1CfYw9ZSqMwdaRJRY2PtxPCLQJ49juv6wac7upVdD8ZcwkTVf4AQXD66GsseoUAq2mpdxowFBLGv9g1N",
  "key40": "cyf9odF4CEFx9MNLM8hYaYRSvBWWegVWFy8CKMdubHaA331TJn6wdyHJ6JvRs1i3kpg2Q4UBuVrfzN8RfoSp7LT",
  "key41": "4HupqmVW8ZdZWokxU3PfoaUTfTMebY67rSUvcKN9kKWSvRTES3rsrtF1mbdHK8pwBeD9T6vyMZcmtVj2NSEiZKFQ",
  "key42": "5fDbVhJNaU8uwsTY7DgAie46uF7aSHHKEvhH7KxaV8ETuPqv5htjEK9D41UamT5vBr94EH1jQ72EN8UVaQrK7S9L",
  "key43": "vwBQCV5ryWpqgf36djsqjok1fZrqXAwDXmYWYv4EVtKVb2HF6hUPAMtBQdDHW1bk8CzArLekwPXy4hd3nuRDKvT",
  "key44": "2zhvKgdahc4ayXJtgUHTFAq28Zpv3eWkZ13BHjUdKMCfnKwUTtW884LQVFuyioiVyk7VoUr9C1QJXuGohDhk6bsc",
  "key45": "2kBpUqgTBNshKk1aJUVcSfSVaUvsBM1JymZByv3qBRY19Jkjq2UqYBbQmEbmgbriuapwRKD13gjFZ3YFCZZTc2Ss",
  "key46": "5fE9aKRuzkAbR2zP8eSiEr9FAEfqFzjKnjPtS1LztQBW6y25MqnbQumTFvmXtPuMaB8xP6ydbcmssEBzZTV9UrSw",
  "key47": "3E8dFH4DiudozM3cJsNVwEfMDDVNHdRxQAwGdWB5FDFQHaecyPg5sp22nxbYnREkMEFXUmyNvmDrbXQRjbum2qAN",
  "key48": "5ahDPzMQ15idGcXJ9z8KRoh7ziuE3LYZvzHG2qwdzTj1AntAnHhBa1qg2seUoi356HCrTR9SGJScs3KyUBK8taWy",
  "key49": "5CKwj7tFmHePmAQdxwq6EsAFwvSHD44TsDc13k89MRmNPdq9W79iYRGvY6syPvRP9jjFSmXnbpGnFx8X4uczjshW"
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
