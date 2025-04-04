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
    "4x9qdYn799ohPSF11udQztuWegrcxZAaB5UNuKQP1ixc6nmbQ4hUtVYcuRkJEkhi8XE4Jm3dsvqRvATcDtm5LXnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jzMQQt7HYJFNQHVUbS7ZvKYbwg3dbJT3e98HWX6hbiBo6rASUhkVSTwPKvZ7omkuX9W4fX9eVRpHC4unqghGDSN",
  "key1": "N6ziMBTRzLvmXDAD3wh1JEUNUAVkBk5kWXqHJXRScYVK1sUWMpciZgaULHcNxosHCuq2DRLhZ186x2wzUo9debu",
  "key2": "3eCf2G6f48s9C5iQm2ABg78ozqbhmj1u3KrFnvYmqC7ZE2DD4wkQfdbAf9BTpK9ZjjmR8WYKzQd8BaB2bTfoPSf3",
  "key3": "DJzaNinGUfVYBnWaK59AoCGtwpTKLwx7fS285PrEmsezh6c56SAzc8FqWEwy26j39wsdvfpCKjaAxdysqaAFFmN",
  "key4": "4uvkSjgByWSmHksq763b1NpmJjdXBzfA1Pab73xFr2MveBeayu5CnkzepZ6ZvRCh8nToojffNUVXFcXd3yRVacft",
  "key5": "3rqMu1igTeUzB245d1TNd7TVE4uhVtBhjtkUyWUVwiHLeCxRB2HHkuUSpDYwC8Z39oK3NPNi15pdSDpwEa8x6D1J",
  "key6": "58zW99Ni7q9DRvnW5Wm7S7srEi7xzfbMaENWoSwF6u1GnjGpeNnGXFWMsmAotkp4jWnro2dtHWnCqExk9VH3NVU4",
  "key7": "3G6DRdagjdsyS1fk6SimNWRy3XtwdoY5LqtnTRfPvfZ5Qbmi4eDjUW54HhARegZ9MVw4i996FHdSEQfeDpgma7yn",
  "key8": "3mCCVHnDE1xyHXWdQS8q9wVG3SKL6d5BBZRx5nTDhaDpaLSFG7Nj3NKSg2R3f449yxuxG1K37DMSc7nmLqeM3NY",
  "key9": "3ZsChHBWTMiWbSSR8bwNjALRboFGV4U9yLAVsrZ1CYLpzHL973DqzrJFyTL5zPZ3PjQV5TtZvrTzU9d1vcxqBcud",
  "key10": "5oEaqgFqxnbGUGtFrU1qsBUyeXgpvi8dvQxjJDyJaDLfzCKLtxEwQgSLzWAcYHpeX3Uxn7tek6KDgMfVJHhcaCfr",
  "key11": "2KnruuwRsVB1HfHESfFt2ouaPHGDSGaVcSNbn1B8dEUckqXMB9qXJEGvq1ii71p7RV67Ka27DrPM6B8j7duJ5SUs",
  "key12": "4oeiaBGKjSKjzcXmbq2WQs26rVFbZReWDHVK73G4rcQ2QHPYoGDoynzGBScRMNZiQUCoYhXYVDS8w6WoUfegpp1E",
  "key13": "2CHrpDCCYzsvdwSt2pYBhQcMiDu6jSJGtfBBpdKWQE1omTF2yYukgqVMTHJxpZbdr5TgCV8xjFMtD448FRUcibS8",
  "key14": "3tt9KjSz9gCTyVGyKXdtp6eNekekN2WPEmf2BipC3nQjFBZ3KJUvvB1B8U7nhbidakeSqMvms8WmAzkwUes9bfyF",
  "key15": "QBmu7Q3v3HC8qniQMDYyL3sNG96gyZZB8eRwGFok7dsExoBG3ciuHCiJMtkhBKjf2wUd62VQypXCbkNfAN42b9s",
  "key16": "4rXP54JLdXJKQ9J2YAnro88ZP1KRmyJkXc91G2pFwmq8NZezgHe3y8rm8NiwX4HgVd2nRXm7FbxajPKPxWSWBPX3",
  "key17": "QEc2hWiSG8Ldt1c9qxnkNLMo58GvRDLfzZ8hfXSCdp9erfHb92R2My7d1itUf7nMhWfik3Wk8kfmXgSp4d5AZcZ",
  "key18": "PtuMhvqJLXvYTVZjK6f2ZwvW75TJzUybvPfBQKvvHz8k95Vo8A3sFe9NKf81wRGZCRveQtysbnBVRHioSLbJkwA",
  "key19": "2qFtcrvAa9RviQpPh3cY88kzGK3fwsyABNCcZxdnNc2XSqYddW1Ys7NpLrpuDqNjyPpVHwwDgp27WjHaZxdMjWoB",
  "key20": "2BLoiJUiRhdTE6H6QWDMQ4QZ9v7UsjbuPjVBMWkgwMupCeoJj95Deh5dgHaU73Z6SrhQm649gZAYVaA8tYCJyK2v",
  "key21": "5cqyJPuL7bHYFqqwaDtvvtoQ1yEsH9dh6EuPK2EVrNsiGf1dDeyAebp5LV3929jxov6G3EsCmbuJby5Bdgtc6zRW",
  "key22": "32s4qaafGdWDiaPm5PqJUCRX2ya5f6K7CzukTvB9Csx6Meg3D8d2NFjyHxb7B5CfZRbK99mjAzTeH1gi9Dn7wjk8",
  "key23": "3BaXLYsSq4J7b5WZJrvzu8vSFYKcQscv9DuS4fEU1D5ZdX5x6i7ErdNxtdnsDth9uVUfwpxND1ozn73dWpUzpEMC",
  "key24": "5RDaPrfcQHwzyvEycZKyHtYoNR9wnUpy7KqWrRA8X26pmCcjhztM85k86kZaeQe519qAWs1nbvtgepMFerBc8kyF",
  "key25": "26TAkWyV5vJboou1GTjJegqLotPW64fdAfPgvvBCs9LGVLUD5ERAdFaWnprzvZj19Rkm6m5AYkSBkK6gSr3ynJSi",
  "key26": "aRLz8z55EE7jKfcLtxMuDVnUycypUpiFPjgiLu5xBMG1F1ozqex8eTqaqgzPg3vf2v2tkUhwQmEMesy8sK2FwRx",
  "key27": "5LzEVBe5fRaHqFr22DCPU6vyiRjAPbWhWUEETRtXqePNHGbWU4CmTFni6Bx6UHgnk9VW8VpTmCvt6vgmBWJtwf3T",
  "key28": "4PSEDJLzm21ExNsCZ3g8MRPMXkD8y1W4jUGvL8cy61kX5SmdALx2vnEA2h1mUz9uGapMxA6PZN9RLRa1DJugViBc",
  "key29": "5JEAXWKKraqgBrYmHauhRwLwQwDQqacfqZ1tcFz1Hb1g5vSgv7BXqr9YYc7ehgeCRc7QenUAsuriKWr14EGZgu2y",
  "key30": "5my9GbMnJyK5NT7GQGH4wvLVLJ4L5MPVedcnzpKYsEGVgTez165yjDXJZTKNZFHa8Y4oRP9tXrLBnVVBhy6faP9F",
  "key31": "f3XH6mHzYcKbPSCinUK9N6kGZZPgeLtyUpGZknnFmDSyYpxQRWzZNbkCT8ykezQJfW8tYBYaniamHssHnpYTTfi",
  "key32": "56ZB6mczhn3D5ib9Mdz8fNE92A8NXj8LXaMwPAW8b8qfCCeabbnktNKSZa4VxSQAFs3siEhcqwn4N1xcCD9K9ck3",
  "key33": "4cCFcYxjYrer4M9HswCm8ASecjUgKMdSdftz7cyGjXfWuVP65CJ6xALpxEUuJg8Hkzvun5zBHj9BqZx1qWG4ZQen",
  "key34": "2TSwMw66uDGQjzsvaBCbi2EUFVAzB7mHA6Hh4rRda4PG1SnqymFsKpYvounEzsN1XyjQ55jLWEcRP66PoebE9g7U",
  "key35": "4yVX3U4YDV87GYzRptgzLvz7MnWeYfZAPqSxfX6UwqKKUyYMjWxeru6EALTvfq2yS3rkYQe7qN4XuasXfbdJ2ong",
  "key36": "5j2zCbVqg9NVcNkgs686pREq65KZVdfmSQpQZwAoGivdziPGpaHyUNTvzxsCptLXDWkqGHx5W62EpdRvzPnGYywe",
  "key37": "gZJZ2o5E4dgKrgj5uXjjJWJnzjHuJhfzowYPtyk3itievmYizQdtvA5gNFgeJcvJZuRJM5uYrLTKjSxXWFWnJny",
  "key38": "4m7YC57115s9QsWzNVNbbMreawJk1aDj6VaEPeRuy65r9wJ9PtvTtx5QH4phZxH5VGJWGkJfXsaygvcmjysbCp9s",
  "key39": "2zAHZ26MtN7JGdtg4whxUhHLKBi8pfnjW4xcmzbrxr7A8242dQA6V1Ak7cDT1z9Vgcep5UvMduLAawZGcHfwApZd",
  "key40": "3EVS2wqbNvcyahCbiMqMdTCuUReNvyRiYuEEUW6fzVHtcaEQguA3qxypbTp86MNX5evbArUEcQTGwTxv2ssMZrsN",
  "key41": "4rsM9LXXVF9wcxWwRGFGZgN2S5uqeYQupxiqTh1ZQ4TehnSTsmPTj7pCd3fF7oYuLBetwQyWiCNPC6K7JLSW8Kua",
  "key42": "5jpmi2GKpiYUopPWqQZBPHRkLX9DzsNM6U2nmyaLj1bVyXcaegZBhvqojK6UGdfyTrh4wpYmZexsMpz5fETfyVJr",
  "key43": "4cttwR5oNmJLqqeqPSnRVaAwBvWrHNLpPbcqg9NQeyXDEMNr1WeHpkj5CZb7YuSbSaxCdyUfu2XMaqKzWjSZbpsz",
  "key44": "PrXwJveTPbtBxdfBmKoV81mokoLTG8xgSusAnyP5HSP46Z6UsnvPPJFgzDnrTQH2WEybwaMjFMq9DYHxSNXFUns",
  "key45": "3Z1dHCm5kjTTgVae9YVmdFCTKJAmZYuoxwYVh9BWMNhq1Hccngu22aEw9z7FD2MJKqpH1xg3cWRphnFHVWejR9b",
  "key46": "66MZtURG1LRzriJgeDWqxkTR944omBLqE8ktFN1AeZKZHdbbzCdCTmqytZJ1UVkTSGffuG1WrYsYkhfz5mnAzdYF",
  "key47": "2kwfSH5EkgHuE9WgWLqk7mTvafcysUQ86WWtUMnE7NtpnkvCaT36he4EJiWU57DjdTLh7h7Pt9pQW9mwSouwL5Kc",
  "key48": "2kMYTLyHR7LuAQm6sLnGbhYtwo8f91MUB3rKVGudtyC7zk2hZg7cbSZmLMhR834B47WUUProLnVJiPDi5WtnGCqu",
  "key49": "Qf7vhvSFrbNSu1ZXosGfytDyfcMtxCx5RuCMnAngWVEqJpLAxTqa5edDqWR7GRXEy58Eb1zJyVb4UYGNTPJtQ5L"
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
