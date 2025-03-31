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
    "4NQXJBcqq8HC14BRrobYGMJukVT8S3S1YMEXHvA7eGxPb3Uwr3Yd2SGbeoqpxGUF6Ry8QwB6FGMvCKVRGaLspQyX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jUpznk2K1wJeorLk1Hjq69PsZyeyRkvydZG6t7GaDHctF1iCyD6c8HJzBvCvPdvvqfoGpkTRRx8K6TyDXZfqTYS",
  "key1": "5X6JoZ9ecJsF7qR9fBqZGzNcHWtM6fQ7snwGJdHxXgtdSZL63tffRV3CiwBNXDQwzbaYqSngHsjXPhoqPwtA8ZzQ",
  "key2": "43wdTDKPQHawUsbvKFSvQCpwMFaokaA5JgdTjfar9eE6cR6MTvsUcVmsz63KwAepjT5Aout2FoGXMmh634TrGAC5",
  "key3": "3hLSeuJ9ngXnghtjxLbZTpwAZ6nu1ebnFa7B6qhACbxJRjDJ44P1XVSAATaJxi6p1egeU264jmJRA2RWMsW2WYmf",
  "key4": "3w88ZZW7CLxvD4eKA3hJwMyTspzQN6WJDHonPEwz4sDciM6pa1pEvu2u22oe1MmoJvJ9zor9EHC4ChpLkK5sCPT6",
  "key5": "4CHRaPX9G4VVMV7HjFyRzehp1mhGjNirXY69hSs4TABubbrmwxwHNV2iP57uYzQAkyDbdjv184J6j2k1fkAxTyf2",
  "key6": "5bGGavZUY5p3CNuqecAmz7ptcjBkKN1kdRYgrWY8iJHzkdmeZP4Uj83G5hUSbzU4KsqXuk5kqgoRau8Kox3KHPks",
  "key7": "4hRNqaRKHgjrz2FQsPbhpT4ozcMqNQLxE8h3MX8oT2PVfd4mnELEvwz3rSLFgTeS6db3No56WdxLd4oEec1Ew6n",
  "key8": "3KyMTjDQbQZmdAPTvg15x5yMjn2RLcubVppkUtbyRpDc7BRUtNqg7n6p97TZ7pZTwZqeTbXJPcouhmnatsw1WpWw",
  "key9": "KykuQguvnpL11oW66k97ourZaqykYUnRrNfu9XW7Jv33KqyjRVgnbh5f19N32fa76Nge7x16XHxVxDp9na2tZoA",
  "key10": "dKuNZxhTR5UsWcsn1UaNz4XcrGnxuxszQcJbQrkz26WK7qoyLVfZskSuqEph8nXU3TPM6dSm3rpYtxexSmv6yUX",
  "key11": "Y4Zoui3At9YFTY1yktydWKuKhqSBWbDpDzjz45JrQhxZKVwcLtsqoQNUYTm9Yy9UyAGAGoUeaZPUKGDJycReecu",
  "key12": "5JqDKmvwL6Zp5T2doPULEQyeZ7q7jDPut1J2MsjH8VXuHRKbpWaT3fXTwfxYGn2VtNcuu57shxTFtRubV1sJL6ny",
  "key13": "57cjAUE2EPLzfobvhzeHKGw4vQXktLme6rZk8SLvUnN5fFTYftDB5GBiDUBgeVDMd4N1HFZaEcy3ykETucukcY5f",
  "key14": "4WBD6zzTQZUhqY5LKMhqdSQFkZf3msNShKxqhnXjSyySJXvhwYt7Lu41UJkyVtPwQW9bNutJ1aMJbnFo6yZgfq1B",
  "key15": "2UTpUmK6Sf7Rx7BGRcM6X9H9U1Y36XQcSa2K6C1AhXSHx52LeR8zSVKwGz4ULeDoa7nmERwdAG7kca1tRuuXCJ2A",
  "key16": "VRkPjomnve6LtCHZBUopGLh4ie4vzUVSQ5aZH5zE3CKZaAwwZjxp95367ScmQB3NUUKzGowMF4deJSmSVeaynJj",
  "key17": "oY45ugQ72dDnTExvjhppogGwmUUnaye2EZ47v69GR1Uke3fV6iHUV7unk543QrLzHMZVZhS1WuXpSsHbqeonUVZ",
  "key18": "c1obqNPuad45gK44QqwiKhUQqCJ7A3SRQWcWDLLUnnJ2R2AcMmPHT8myhdute9hkVQWkREyQNiovzeh7Akw2PrB",
  "key19": "3h5Qo6TB6h8D9YWPcTWHBxGyVnTeZ8S1L9X5kEZLErr2LaQhau9skP1MhiTYju8pRW987ng6oxMU6x9EaE4n32mY",
  "key20": "3s871JwoX3oGBYbBuTyx8o1L3RmYH8pxunCt2qF9PpCbcaFTxRBaGWCQywm6woYGH6PDG61WNbrypTiJJZnizx2e",
  "key21": "z1t4cTpZLHmadzipQKbAc4ZM2yzcJzX4LGpaKJZsdcStZxgd3q8KqHi6rNUNNTuASFjiyriqxS9supX6ACbBoLS",
  "key22": "32BJ7nFFf3zBQdDbfrfC6ERbREMjrM1vQRryBxg8AHp44huz39YeSWSin9vS6SDJdETEryWSb3cAW18MohYcMa4u",
  "key23": "UMKiHQuypfyXnHn1XQR6xhzL6ZXTd7oHSMY5Hb1QHoforSgDw5wTnXYMTTBgRei2wUNx3HyH3bvsR52ZrpCzGhZ",
  "key24": "5PWieQpPrfH9nQGnRMiPBnbdRmtNb1gMQEY4VgPtkUhUY9gt2fdaBGZ3GenBs89RRV426rJgw6eNxiMqfmPGw4wW",
  "key25": "2UUQBM48tYYga1zrfwv3EuWNLUtsBAUPQJ5iHywxSXwt9jJZ6QjQ2nrH1Xa6aTYGYd8daycSmMLxg3HhkSNo4Adw",
  "key26": "2ewK1SFcMhk6qCftHNZvTapquPVVwRj7xHrm1qZkCdnrCeXBRke2BJ7yri4ht4k6LzYMNzzdHxyGAweXTKRRu7yT",
  "key27": "58tNDBoEEFM6Ek8uP28XUHF8Ppif8e38g5dsgmttsMg2DFZpatLP3HzDgjKzAzKnaEEqiPFfVhzTmctZiqQcWZYJ",
  "key28": "5xjj5jA5RzTwo7gvQ98eqKm9D1CgrfUTPPJ4X4rZH9SVC1HDuiCNMPY4VPyQu23t7wMatDRLVJCGwWVn8jt65UV8",
  "key29": "3w4XumxHP6Y7YY53Yd9bo17jXEmYY8Xb7xNBQin7vfRSrnrmJo5xJXFVwMa7iM7mvJuQLN2vCQEnRQ4ATasjoB8H",
  "key30": "jmkvW7xWCXVHdPcroEnKa5SPCPhqKgWbn4WnErp4GxLbgzD89on6ETwxQ5D2qyGjfFAohV3FMM93Fy3SuDkqoYW",
  "key31": "3LQYzT2vJ1X5uSW2sRoWJKrr8MbMpuLyQLgwutAjLS4EGXs2byTzuwUgED3gqgHdZUBZdt5EVs6uXKz6EupnVGiX",
  "key32": "5wpaGrHubtnB5JVZocZYDa9PsEV4niBszsEVSwAuJNAbY7PRjudJbm8vmSBcCFks7xmFPmDCG6L69C1XfwDRBFmL",
  "key33": "dTD8mLUzQwJ7LbWo97KfS8qMjiHHMPc7zwEUPm8BQzXs2yrpg736t61JcdVZcemEGv31w53eRu1kJAcH3J7k1YT",
  "key34": "631Jj4yFQucY18STjwjAhneZfBLsfhUCGW15wtyPbzTiRRq2ZtVwVgrL73F6RtVvcLJmpLyQWkL7PX9t3CptekyV",
  "key35": "44k9pzKjLSzWdBnrMvYfxmkuRajAR3z7ofDemdJBZB7Ytc6JhmsDKSUpsVxRUxRDWHuKiQyx8h7JovuUsGAgwquB",
  "key36": "3N42VLBPafTc9KH6tBsi3LSv8ZjeshFDjgGHUJUns6uDCVpJEtWeUNxWbqf8kuX4HxEyWae7yb5f2EcHrjqaSfFM",
  "key37": "5rSHFjs8uAbCdwFPBwrPumsRBU3iESqNFRotv1CryPDxgvMn9FYhuajxJhDkj3AHLnAnJzLdEgfGHbFgx1NPqFn6",
  "key38": "4UTJ9GgW39fCftY1cXTw2noHhphyVzy5YbKCdijfzGWaHp4vPNGevZ1f6jH6ddwYfEuuWMBsY1CP39X1c6EYXQbn"
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
