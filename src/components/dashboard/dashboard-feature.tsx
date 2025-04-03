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
    "5kxDPKc5eaxCZDi7raW1aQfP1tvLsLsDrVcztZqtDyWEAdDeWjModKnRoDnzHmLvvhZgchJ5sBPQjr14Nsp7GUbL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m6NwABMvDkAeJGBFbmy5mex9d7mqETgkEPzfHrtdVqriiuFv56LXQ3pMqSHEQZoVyChgCCHPDfpVuUUCQeAZP3p",
  "key1": "5L4xprzpyNq7G7aPi7M3kbgFenQvmcNTS3HQxakJnwzeDxkUoM8wh3VgmTpttCVX2gqL47bGbobPcPReNrKC8Bc",
  "key2": "2HP4RBa8B27WeN76sBBHAhcLYbb2mz3LnSNtoh4vHEWhTihFfCdV9iWr5TyqA7BvuKXZDB5cc5T6VGt8ScDek2c7",
  "key3": "4BLrvmjkfhJ6oYUvi1QiF1oSS4zDSo5FjLGTXBG7T62FNn3QXsczjQFcH2NE3a27SEvBGrhxV4aGpkNY3btw959h",
  "key4": "3EvxuHPpZaiQKj1gUp7qwSU9RDzJ6XpcvPcF5ipc2ryQgjRenbL5Xgb69ssnJgci4vnensExM6kFHQXAtcwaRyDx",
  "key5": "28Uc1Gf7GZrmghgDY1AhejLjmvBug6wZMmPBTgwyZVrXS4d9xZm1GcT5BFGWazi5ZmH1qhTtgc76sdhrHrBLzwc3",
  "key6": "4hbnBRgVbBafVHSwyc5xJZGjrDabdgt14RHu1w6hB6TbMApo6ZJkQFbyniZLLWqoMwxMRb3hbtF9FkhWjxhTXH2E",
  "key7": "YGDa1dhNd1YpLKoFrLPrdN4bVQtz9wCf43ezPuXbVbNjvqGRbKWY4PgRvfP9foDQaZRwFXAwSZJQGsA5hfjT37t",
  "key8": "41BZSeSe4mVKiTQtsrECHEyBhtRGgMNVoHYf4uuK5TUwBjR19SYsPayufQ7aK14ZEXsAGsNaqT7kGtHBE1LiFqsH",
  "key9": "2PECGDK7QQmmxAWsa4TVTs6Poqqtyn1DdtdfUHrsYUq4eqx5daFgvvxKr1pEsbvEbd5DRy7H2RvX6vf4crowft7H",
  "key10": "4qbexqBWDUpq6Gt6nY3hKyBbT3RR3k9bqqfzp7iTKWG4trRH8uFYPZnGFMZPa1rsRAVmdiC864vf74zdFxWTo5fZ",
  "key11": "3RnXxwyDT5AWb8rhv4ATWZQqhhdLQtxmUxTEKnQFoPMJFja5sPjCprqZKHuabEzf28YQgitBThJADerHJidJD4Bb",
  "key12": "k4CrHiVks6Pv5reHvyNURM5GFXU52C46F7tJoWTZynhV6EeuSpceuFkYsnsCA3wor6QN3RGP5eH95CaUuQEPP97",
  "key13": "5omejuksWj3yAHKz7BJFrsZ6nuJZHW4a7osn9zPU1KEAH8X82S7TLJgEF5wXoK2RnRfjJncb6tBeHypH4LSZxx6Z",
  "key14": "3FxaCFVZTW33Cdhx6cfgE5My51wP2KEXwNq1hniqJZFRfburg6AMWBzDAY5g84QGkZ9Bnhdx2qE7LjqHdojBt1xS",
  "key15": "3ZTbsTvksvXsyKGwJcA8GZzKHK5qTUEmutNrhNUiY69Dko9Sa69FUCEWFjtsqj4zQS1YnrxqkA7kDuM8yRpNkSEA",
  "key16": "5S98BfmBDLrvw5i2YFypBqAyZsVPLChaMfqy6Bm942ZJXGiUyre54YbirUnCt3SD7uDjVkSYv56XzidzpHNtrzLk",
  "key17": "mVXFG7GtVVt5rbQJvdboLNAEKqX1Pq73X5N65YjKiCX18FL7j4cX12PaxtWD2soJR1kURucDGXToCUgT4tBmEv1",
  "key18": "5hY61XcyzSKgsuWyK89W2S6HNmScmU3TNMF2sHjWTJEcm6994FU7b8gYQgXZ7EUjCv67JPFxXSvWQ6whSoF6JeA1",
  "key19": "5GZta65ZLmmyTjhWjpVCn71TZTt5gysLdobtWZ7sSi4yTrukcrsM3exhb4B2SfnTkRVo8EaqbVHyU5TyFSJW1t7Q",
  "key20": "3Y21cwC9eqqVdHxm7Bsw6ECfs7N2L4R8otyg9auSNqts9yxzvseztxF1QYsjNYStVAPSV29XwjEB9gV9RhnhSCAu",
  "key21": "5oc8uPx2uL8pzgJ1NNXQQTSjuLaS2S9xedCKePrFeMLsfSmyumiJkeAhG6yhp3KyEKgjrcLqnPnZKhPWgrf8dAmc",
  "key22": "5LUdNrzTA5A5CJknfq9waUHfNfgSNm3qKgupATRDv8S5K21bDEwz1yJjQGunoaiFCa2RgL7EPBsC65fihP2sDKgk",
  "key23": "61XG4ipVehUYFqtHpf27Kosb9ytcbveXuX7ex1iRLF5wbmuJ4MsYcZ6sFAx4TZYn4N66daJ4TET4s8QeCC91FcvQ",
  "key24": "21641j2AyVpCNvgPaeL4bJaY5AEgity5PrkcmNQtdTtQRjsfWXLv1pNyVBaZ3ZNWM1WXQW7GFVKYB3SU98NhzLdD",
  "key25": "5EusvhpdPBuxy4WpdQVpfKN8nahf3rNRz6psR29dKswJQMgjUxyDabPZC8EandtypaDUonK6zsTavEdwYBeCwpA6",
  "key26": "2DaUdgrpm8cxYCqoSeE2QiQnzn8DiXzTQcLWve1bMMUUa9junLt9AWQPkDFxz8D3VpaXjL8738Y8SBmDiUe5V4YR",
  "key27": "2RKQqjVHDRDNrkNFMkgandRFtU71Dz5UZpcYee7eMjicZX7qNB2TqV1rF9TYe6Ck8CnD1Y1U1xFzoXzddtBRXkvh",
  "key28": "zM3hr3zQGwyxJgKrPhnSoby3GdzX7eZJpoEVwQmhEHK39nJ4TtRvMViX6jHQT6XVkc6SBDGTL622adH1hYeMuvE",
  "key29": "4odPSrxUokczYxJ199cNUw18o6wTpomuFS31bLPHcUmExVk49qAeZige6dT2k1M1mzMmz66BH5jt4XK6FUdTVhQc",
  "key30": "2fMbf3iRtdCq7omYA71rh2tE7b9qh9HSNwn3dHM3qJfmkdes3KgGRQ8SiKLrSRsYNEv7R53yjpAKSCdxKirACRz7",
  "key31": "SKGDtePRSoyGFzVzeyM52RGXkbMRmiRsGyQweo1ycZp2bQRUDZFXBa1PidRrqqJcSGKFfzx4tAiyz3QtyPqzCUK",
  "key32": "5WfwHsVTTy2jg5vBfDkAi9gRxqcAJpax9ozAze7LPbPr5y35GYy5U38ag9zwzgq8gjef284bLmoAWvJr81jKzFE",
  "key33": "3SMLikPYmEZ9pmToBWp9xss88uaskXfqK76TJbWJh4CsMAr8y7oTiouM4G425giDJue2QajfV8HVNkq1yWdQGTy3",
  "key34": "3ZrDia8LUxqAee4woT3H4HL6YVNa8KNa1iNqwCRKoNUL6qEg7ayDfPqUJJ7HiMY8PSEXSQRnu6aKbN8VxJQvMdFF",
  "key35": "41MwZzkQAZW9AoAVqk4mi7HUADY95KHALWReADRBpqmv7pQx7cnVgabFjFgcd3BgptEQnyhJaxPEQBhiwzR2fGTx",
  "key36": "5ndvsqL98TVmKBSrrCPAYVLoU2ghVmzpaLMjAwJXq8oAkcfaj3jiXAmDRyKFpYAKPamr57ygbNhcN9cBbaD5vFo3",
  "key37": "2LTWdeotUMzD6T9iyAnMyq7tfUU79dhUVDTcgQcs4ay6ND557jbSYVZ3QGm26pNpe7pm8u7nB2PGvDaHjiGTmjfZ",
  "key38": "4UkWDcxucRxfJyJ7TwnNdMreXBU9jR5Bxqiqno5AaBMF78aULAJgNfnAPopSa5abuKUbHL4Rf13QUUyGA5LtSYWR",
  "key39": "5poJqt7yDBERfKSQtmUeDPG9QNS6nJ66uCaS5s5eMXuEX9jdrhS75owt7WuAnrKVNQqPTJrGxUiGe5xs8m5U8e8J",
  "key40": "Wz491NKNhg2fHUyYowvFoLabzthxv1jvG4kv29seHjotnPfbTQJfoRtBpGefJmovB5ksqN7zk5A3yviaduq4RGa",
  "key41": "2Btmvf5U1Bhx82Z2Lp8d7fzmZhAbPgwbmsVcLhPDHhETzJ9s3p5x3wQBrr2rLF1T1m1b7xeLHqG4pFbAMDkX2sYA",
  "key42": "4Mc75r8G5Arkc8kDgsKoDhc6QJLQ1o6xiuFQ2tr74QRnUyCgTWkkH5thyEv5CpzPc3cTGR11VjYMuaepWT2UatuA",
  "key43": "46nUAj9yikCTjmoQZvahgosKfvwuD6s8moqi6jXp7JEY8eiu4FGFgrFhunPfv222sc21rGtpD2pwbR7QN9srcZYq"
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
