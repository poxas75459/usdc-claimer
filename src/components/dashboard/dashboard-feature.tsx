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
    "DtYR85FxZQZ3DLkv695dg3aXtQKC51k3cWNDTAZaKGxzEuNaxty7qNvUwpFWciNt5HcayU6afQGijmiTt8vJ2jR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JtRcP21NdEZRx9y5qNuLfZoPEBPXPanXH8beUbzS6ZR1HBrkggfERFsAgsS4k9YRJLH266krbqsHVvuf6JpcoMp",
  "key1": "8K8AkAM2wNAtrfuWLTvDfdz2zeSuXHaTf6U7ve5Act8VWrDHg7WV8mvAoWPTghuSLx2mTxmvQ5JJHGNMhvEqqDA",
  "key2": "bX1iq8xZzqSFcwGH9nqNnz54MLZgTNaNnRfHkefoRN6w971dsn8mEJUoZJ4LPdJM21cAGyA9DjNkdKBzWyzBsX3",
  "key3": "2bZ7cELtkkzeUvuJcQV1hzuHH51WtdtxyL5emqyyXGoTHTQmwe5bGAe9cF7nC5m2DLNXq4WSqtwidjuYwUJpaPLX",
  "key4": "FEzTgwVEGhU89wK6Lu7iRo8qCTEEAwD3qYkpAwcNCC6QwvGepPWA6E9ZL5eD7CpqqeXqKewpofKixVhULKoKWwb",
  "key5": "3Jbdi5P2csL9ugYrzWiQHfk34a9VEC4mU2wSYgFRsrrJVbgvLW8Xy83PDEVSvMUL4cKjyd4ctF4DMRWLPzWg5gpm",
  "key6": "37cnh8k4Ct3XCsm2DEMts3QvtVeycJoWZhpdJ39FYNYo1Lpx9edwniPxu8Y7SdVGgCtZ79dzsAnivtvyNW5nYwrG",
  "key7": "X2NraXTUPg9cMEGtcnvC9THCvaZoLqqMYZHBPSuJhSyRw9bbPxTk3nC1UC8CuVPgcF6MxEA6chxkmvbCr4MN5Jj",
  "key8": "2LVP4SugjwjAyWyPghVdHHaSR9aVsTDpESqX6yoS9DXPqo2Dh6s1S5gde84kz93rnhRU9WAhAPtoMCy1e9cyXjzS",
  "key9": "aFmjmQvXWoyQLB8vvKGwf12RnRwxU8JrXzncdhHQeiAd4pMJsH8h35aWcxUQRXFZJ2dxEoDnZvPohGMFbnGziN6",
  "key10": "5W7Mqyi7AV1t24YYLLui2ykoqucBdrj7SWTBrLDv9sqHjQPp8mLzMPe2Dk16v7Wmiwan1UFRMp9zuRH3eTHgLKKb",
  "key11": "3jjx3aWzZQCT2oKLTsUaEPrMvjjES1EmicqYKjqFo45rgPVjWwh5gzNkA6wkEKDV3QPykV8j6vAbWb3dUcrPuCoH",
  "key12": "4vrk13y4cYifeohkuzaXkuRN8RnYziysEUuki6JXGvcqHthioyrTaH8ez2PC97Qf5dCALg9mUug5x89rFtkYyLrx",
  "key13": "8p3TtFKFHBAv9WKFJeVndBCGuJW1tPdRz62gTayjUNk8xEjMCKLEuHrnv2ekkgnoCFHT8yVJtDpSvarHPakZt8h",
  "key14": "Ept1gyiXhzxeVkqkh323sok7UJeDiS4AooBPfEBaVA3cnednwGDaU5m9rmFy9Rxkkfczi2KLkfJH5nkppFaPA4p",
  "key15": "2z5fzxcvzq5FpBTXobhwL2woBS7gwjhz7t1DtMKA3AuUqw9VmXDRKiEJdAxsM7Ys8Ane2HqJ1dPUoZZgg8DpKnX",
  "key16": "5E4kqMCWuw7bCNsSsm3jBZkXzbBrChiT68NJKSFC7bqa6J4N3pqavwho6RNPA7bUMUn7e3mgnYpjxohTN1PCZBXe",
  "key17": "PjdhkxQyyjc1SHvw6n2UWuBA7HEFEi2bTwET7Hcx6P1QF9mrn4hFTYkSZF4fWg41YmWa4SDhBZMdyB4rvvHf5YN",
  "key18": "3LBbLXQLmgkcTqrLsbfBMv6P98Gs2bmUpveJC47yQahLR825ztu5TdMJQkSvSZx3mkHBfHHTAhHfgQSZ1ygu7Mno",
  "key19": "5cymqaoJRr1WRpamCPEE5e52LzPdwBgs16K4hXE5i29iqhTvBSrZTztNZnymVuVdAkhCcZKtGXBi22hZuVJQSDDb",
  "key20": "FLeZuQhQFLhRqTBcVk4vk1z6BFVb83nZL4DjfqwWNhdswWa269Lptfi1LHFGocxDUkec8ntsnzi6MJDa4mCA7dT",
  "key21": "KENzBSJgaickUKMuPJMREYLXcpHqaQQwioKGZp8nG52AujpEnHSCmPSWsqnpoWz5xGnWDVQhkrKhzeoDZEnnvx2",
  "key22": "vaPFyJFnoxAYjtFkcPWHxeUVukYc9A3TvwfUeT3vfY1bkiJ8Qo9aLM49QFafbo8piyZHrNFqfRmGCspNrWnVqQw",
  "key23": "4SnUbGWqzyGmmyUHfuSFf9QddXd3MxeUgYPUw55DAENz53EPW8YLFWVtJ1vdai7DDYZbEPokz8BH5wBvCsVcneFw",
  "key24": "2s7qFxgyDskzmXgHBjyyBjPz19yp77oiojSvq3mVqAd3mx8mYZfAYAjaRAnWVn3MwwBUWdCdRhCVvr2dzrmshGot",
  "key25": "4piTWRGKXEEERnLtF7DdxRb3maoVWuiAbaWhUCTdMN4JxJ2PuG3kYzBx1CKoiUhCGuj455c4dh9mHAjxNUnzFrAL",
  "key26": "5sLhDFRHXAa3vF86o2CFxcmCSxPyohf6uvAVyg91d5LvoUKtXPMc9wXmGdwVWZwoY4RFaFrF9FnzNULkZY782u7J",
  "key27": "3SM9rwDi4YprfTjjVitbiT94pfASY1Tyu6GutFZgvzLaNSjFBbM12GD4EQdSkDEpd57VZvn9Sm51UEvNr1eybHwF",
  "key28": "4kRfcupheJko8eKMXwgjxWrrRrhFgsXkjSrmQSLHs6AUykw646btDASoPiNtvcQtswKS2qH3E2Fniy1LYqbBWFDj",
  "key29": "2NxaVXt1Xvohrjpjacua1EDyp48SFbxCfQqUoWghpQfSKgUa6nwLs7hWgfuvUADBMPPVnbFu9mYNiDoNxzMSpf36",
  "key30": "4kCEEuXT45Uid8btcR6fauYuGBJAfwHZMWrvmWUrtuZZU8njtPKUoufLYUMo7Ti9oeprnyibMCG1PkTv7S1J3Mrj",
  "key31": "3hYPx5Hebf5dNC8oGxePLhbLdTW1KYTthktoxggQFUFDo1TBFiLZfiVaGdYUMExfAuSr4PQKA8xFdfuLHfFxwQka",
  "key32": "qDJMaSw1BULY7Zz4th8wNsraNsiEyd12Tzdo59GMpJz9TmtawVpapotvaM8ERdYtyVVwmDE1UdC2WWDU8GV7TXK",
  "key33": "6aKUBYrnmucfXvZUGFiutubjeYE6ti7KpbGJgs8t5NrqmQTDJayRirudF5fGGA8DCkY6a1U4a4aATcsWm1rvGSa",
  "key34": "2zbbot9aokmaU6BomZQgxbtjrjngXrkML2WCGygaruZ3LcWmEFGyUB9aMr74hD7WuB8prRPRRmqbqLrZoT3etaUs",
  "key35": "45fhXB1aSZf5Pp7CJm3brauobKVrnfmH414KVtG5CFwJjiWGXV1R7DhSJ2FmaYLWM1ZDfrMLTFPfGWuRhJuSgksE",
  "key36": "2jMBNTRvbdyju1S1XT9TxEKyE92JupSXb7yvvakV2EBoWe5naacb89yXy6bB8BH8XDa1RmYwCeRkynhXEuhd2d3X",
  "key37": "Tzr3SPT1FFgksSW8GqbWNDFE6UDXkHuWHxVxYb3RjB5a48mKM6nFdvYbv5TYhhsRVa8TFDqVrSoqDgv5xbwzNoE",
  "key38": "5tQygAi1ozBcSHTqhmwo6TJu8yzRCfn836PWZSJUkiLm6hU1YikLLc3P7FKM8z5MvHfTBqnrsbxHTVC1KnCWwB9J",
  "key39": "gJmyS87tbwvEzozAdPo1ixTpTivvRekckrH2RxEaW6asUzJuTy78vvUctw4jivfJ7F1QPgTprv8HzBtMVP2E3Hf",
  "key40": "4anJ2vUhskPK9oDhdP5Lu13y3TDBogC4w5PQkryRi9jAqfXviMDzbGgBkXdZGZAuuzM8oj6m6HryPf1XN13uMZe5",
  "key41": "r8Hd2y1khCJ4R9LZrFS3cgUXAanrMNxgvqZmENy1YSc5jg7j8Pyhj5uPRcMWovQrpFtqZ2xN8DsRzrRfkFuAiYB",
  "key42": "5juo45pUqovJ39F7XBiuvjeW74RwKtQjWEwa3yRbZwpbwsPsvHub3qBNk2Za2FEk9hCDYKDz6fWs2y828RXCUBdm",
  "key43": "3s4NHzeSZ8mDWvs3kJygxGMYM567RFKp5wmjeWJbxr4BTnEcTaGmqPiJDSnZACSTHfhUzDGdaYkDfjXXCfK3jLSg",
  "key44": "4vcTtzidX3x8GQoakKJoxodcKrgfsyHN7yKk4Qw5AA5NBG7bSxbGoz5so2KjTcjJQFjZLQcMgUxbRcktEpakW2ra",
  "key45": "rhvKLY16j7frvv6dvaXq5fQ5ZYpPcys6jukWgNsMKu3dmMUneXEWBJX2uHSD7qhBbw9uRkXrchDPHEDNZJf6uM2",
  "key46": "4EByDLkZqtoXirDSfD6w9ERtJq2o4b1tcjsmhf3CEHF8axp1r1EXoM8pD2gUVcbhXnR3YZAtGnW2BvYLRLDANur7"
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
