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
    "4hXJeYkNe4rSpWoLipJXmPgY2bUA1M1dfGoCyy1vMTMsM8aGq5nhxuTqkHXrKJ8YmThNZTPA9nuDsPZue9XRbWFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zNqsLnjb3w3YvcQSJ8KUExnJwmEeZAhzCWzQqEeMbFa1AENSHpf4zUKDmwN7kgyyFyE3gDmJYta5HiUSEG6x5Uz",
  "key1": "2p6p1hmvaM9WontnXyxYfLf773y8x295ZLsCt7n9uYqTecRJwS1GxWahAeH3s2U162p46REchG9mJ9aQpsRiu4kM",
  "key2": "4ToWrmMaWXnPZ585F43LUtdqAzs1inco9nxVrRJEXdLrCZZE4PVBcj257q9df6Czei9agFSgjz9T5yMafuLLvUfa",
  "key3": "5JMrb7xZfAHNyFrvfCkw6Q3XUYsXDcXCxh3ZoS6x8XSqJyct7utZBNaBNWXZrsanxmXHCZddzbRq4vECVEzwWMSL",
  "key4": "2SMNr2UrTDBjtxmktXs9bCG2uYfd4WhhjSvyE7bkwGsVTrqKGopbqBryuVGZG5xgMMVz87sz7x2mhnuVcimUizua",
  "key5": "3q7KScwUugU3L4gbh4MLFNKxDsc7H6chspCdQWkfV9eeTmKtVc3XkhqbapKCCdC89QvqDMEUgLpG8QTUut5xwQvj",
  "key6": "2HXDDkDgDUucdDKv5Uev89Lvpen5X7GeGM2MvDgNLjrEMnh3XHuaf39Hk65tUsiqwyoYNwGJZ7APkX54wYBL66Q8",
  "key7": "3q1FmtgPX2yJ5cB8uVhg6Wy6kVJSaC1FycNUqQ3yyxTjofjCL1QaiSBfUhG6MMLkPoWKk7R3wkFRqovGrT1XsUFN",
  "key8": "2GhKY1LXE4zAQhFoUzYS2Wnwb92Nfx4TWYUU5wJvnkqo168E7MrQt2B8CoR5UNny1Ezk3LyzEPJ3cjPZ7wRTKicL",
  "key9": "MUbJthMbidcvNQTw62cctXRmSH3nHtb61FNa5PgLTKJHKfRqx35As3dzogXEKonKD8WNUrGv2NNCZcATvjDQSyp",
  "key10": "2Rbd8K1U3G7GutnKvPq2GnTwxUTA3NiPdtY9pAXNrbBh9vfdjvUAkGQtqp8NmqbVvugix2pfneDu9B3uWXFykL9M",
  "key11": "45AHLJ5K4jpqMs3TZ6a4x3eLGtr83nz2ywvk6qEMW9Jk9DVzAVkanvqGdknki8pnNY4KCiq1DmqdJFsbDGihfJbr",
  "key12": "2TJkPSpNTArUuLL7k71WvK7rb7wnMC17bp2pg2GdZXdBXyt8EDE8KQVuR3o2NzK1nuRFMuH3r32Anvunn8j9VWTr",
  "key13": "2nynypMkA9D2dfFGxGsqBUB67H69ebT64ZgQYUE1zJVUu6vzSpvFScYHBycC2zk8ndW7mD3WUCnDGG3nBc1W9AWy",
  "key14": "3ZofY4fXsGouEM2C4RA6tvMqiDPBVPsC6PLSvXrdRohfvwmFX7QsQcfmmhFN1ZUGBDAZhvenbAToqwW1CiYF98ce",
  "key15": "5WzE7aat16eSmBurmPf4EQdxdgMn1xtYynRpASeuKiAzrV4hggiqEJj2xDvnb2BjmGaErLGTgvUGCjaC7hyGLyjM",
  "key16": "4t95CRTatB6qhtpzNDhrGN22y8aMi37WMFgeiE57FY2XBuRQbgBVv6y3a29fvar3AdV2k7fsa5QWT23EHuo86QRo",
  "key17": "3ZQwBkCrnhqrwE8sNysCGUFFASLVEHEiVGXbWRD5r9SNFckdvAVEUTWqwv7R3gFiXBhcgfCBetBLubmRHkoeND1i",
  "key18": "55GS5KGGZr7vK4Dz5XCQX6C24qHdmLsMt8A1pZe9m2ea4YHFDd9Bh8JnrGUPQgUyP4C2ujmvnYPaQ8mkUknBCCL3",
  "key19": "129tGMASunaMg8ygxbieCgrYYbyHnobU53r4oyPe6uMGbbs9MrJYi5k6B2Lr6RDZ4WTWJakUouCSe4q3CRmSmEYg",
  "key20": "3h9uR6uxWtYHm3qTxoiPdEWADqhF1xnkhZceVXvr2PEtVQKjmmrBFgHReK74d5QL6PJ5hnTpVxfvxTWcL2KPUQfC",
  "key21": "2R1YYw1U5KoyccEzJDSG3PDEJ2kYeptb8KFEERRavceat6GgJJ1j2UvEkPzmRLKHt9iQqAYnpWeaxmYNNAUhAVU8",
  "key22": "3yYnxnnE3t6bDamRTxKE2cB3yBpXbQ7RQ4TassxgPB7h7akoHxvafzdQos6YDgHk4dHAEEga9mjZabMVFotrBLGn",
  "key23": "2AnaikCKyQvS5tP7JzyLtHS2pGevgcgccguVbPw35pB1HveHtHV7nmhPfSgL2Prfrd9G6PXuisCrr6c9n2PCZ4nV",
  "key24": "4XD4mGShcQ6ao3w2iYK9jH7HKdGqyNf6F7jNJx6Nmx66tuQXD6xUafXQEbCUJdSiRz5dhxCUqad9Mh2dhxV3MXaT",
  "key25": "4ESQPee5G4V2EyT1Kk13YncmJSfS9mKAFiBDFxY1KPyJTYpxgRnLPivqsUGrXyfWnuj2gfXWa8DgDt8D2sHDj9FD",
  "key26": "4vCmG3XwoKPeU5AnPF4NRKMxdrNckyYaZk6Efk6PLEn7pPR8XsFoBEq7NXpbnqfKZwQPvB3bESCZGA9444jYMkD",
  "key27": "4QgvAtBVJTVu5UJ6AeQaaG6fUEAdwyKvtCTExbD4YN4tkM75kxwqV8q7rM9hNngAri8kKXV5aWGNdb6Lhsqg92XS",
  "key28": "5t7pFhtQbUG58YaXHXQVPEh76SULF2RvVSeuuUr745CkUNPCizLyTG5XDXs4T9v9St4UmPgdMCHbExjPGFg85FZX",
  "key29": "3JWStkhirmAhjsRb1T1ShCqrfKhuu8yQvCgijTYpwG7Y541St652ngoT5DWjp4jRfTJbFEs7TKCpntYr7z5dxUsw",
  "key30": "552tnhMeRTe3hsd4yQ9mPADkx1cVRCjCEvSRnvfLyMQUVSUomE2Rg5YAWqh6jCCbkGxZHpEXsGz8WkcWwpUaAC8C",
  "key31": "wFvcUBYRLq54CcTdYAawWpre3Ve5rGbupp1qhALSMTj4pLrXYVw3Ktj2FVrCk9eS59e1Fmy3GwdwpbFnMR4Sveu",
  "key32": "4YtVHPnziZWmTpghQWQTYcdqQmtaUPQTxdXr1dX4NL9Ge8eNNLmw3ynkQFApBj1CHQ7cgSNm6UbBMCAkBxESw9ma",
  "key33": "2uBw2XAHdXUA5o6dUyh65YsHp2drLdediHV3BVB9fbsBZe3AvhyTZS1YeAiJGjCvWLcy5kGYNyTR88M5yUGvwztQ",
  "key34": "4fmapJTAQruM2hvicm8mb86zr365pN2ibZc4zrMUYsyp4CmCYsJAZYZNgXxLZWkNoBFshyxXchbByNByZ68KU1Za",
  "key35": "4o23kdU5WcDuZRbUvQrgkfuszc1KXJmY1xSr3qhC8N9YubLESw2o49ZcXLhMFxT67nawYA5TEN222nfJ7y8a9uKR",
  "key36": "2U8QgzBrEBUGX3jHr2vohEY7VCgaPmKmFcEFHA6dGhrVuXYSK2cMQJ9CWvbfMgmVSfsTnC24UMPvo7fdhjmR92tR",
  "key37": "5y49xsZJP7wYX8F27optVwDCWUgc4TLmjWntUU9aBnRfWPG8AYsRgxdiSv3JscxXqoEeTKnKee8p17NrjiYWvUhh",
  "key38": "47AL5yQiR4xdKEm5Uxg1rMvnBo8c1WQyk57Tat2EPpoc1Ag2B7WnGs7jJ1KTe3bsKTVkZVxEPz8t9XXD158iThP8",
  "key39": "3rgEWSSh5FwSTPK45PxPe5ZFrzEUjcG8qA4jniG7Bu9HjpLmLePLBeZNMrkD5MWioXf41vBBQKTfHFiGSeqrBR9P",
  "key40": "5SFmsT3DhYyLB2ZFWPmvyNqGXSmiSLuEbPyBGPh9yCWmCc3dJa9NCeiTeiCPRDw6K8eTqWd5CNKQr73hG4AvNAAo",
  "key41": "AXuZyPJRyxMMAvZFvjiFEVFEK5Cj4ngwAd8QUknMPPq1LGtDKw3kAcYchuWPbyaLftfuFHyFXy4rSqD8sxJvui1",
  "key42": "gtHvQthCAGuUJz1cSqfQLF8MSj7BiyjL5PnATu2k4sYNxhAyBwkBWPcsKGbJZVUyEhwzbr8RDwS5uDh6cYT6uoA",
  "key43": "YPibsv4R2tDdfGuAJoLob2byW1my1DgWz8E6CDA6g2V2zFLZkfUt5U3cQLMHk2YDbY1x2S3kvSSe3GqXiHLvBka",
  "key44": "oRpPSPkzATewFtmizzPXGStrdCU3XEEEUp2JEBSwwVTZBTgfJjbDzbmbfKNhT2mNZLzXPbFQC3NoyDuSazyH2gP",
  "key45": "AEp69qqc3EbmwHsTQn6bdbS6mDqNKYrN2xDfRSFB6NiZrVo41xJAWJuZ31Vgr5cZDAaarcXBrutX3ifmh8HJFtG"
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
