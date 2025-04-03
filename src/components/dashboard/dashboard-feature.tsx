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
    "ovnMgYQNwdK5WwMfiiY4mR5x78SHj8NzDHkruQhGxB6dryspfshpwSoWBu9gMjAeBwYTb8cNm5qQAwEw5PjeYN5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FTduRyoFAZE5X4a85udfh6MtyrjbbxzToUizfd8sCaF3xaYwehvDxnKUyuXLbNY2bfGqHFivPhvgVcLYuaNd2cp",
  "key1": "568ENpV5iZpUwp6FHTiVu7PWnGaD9EWbeL5v9QVDjhYCA9M1pMGaREtyrtWj4N5AgSPrAt5TTq5cTzyMZ6UofcpK",
  "key2": "53ZEW2Ma8LDCLaL4QF3ykMx4t1GwKgStCRcGWR8oqve3CsC5am5NRWL31E1UBtC6kWQDWJgUjJmC7DP1nWfgBTao",
  "key3": "2WkVegJigttmC3qdFD37CbGefHyCHbpDs81SjCDxnrs3MtPBFyQQYhNNgkm51WPu6oDFgVEUjdKCqc9UyNPynhe1",
  "key4": "3SmCTbRxSoTj4R9JWfQ93yrCZH2iKiT1e6ym12dVgjiX5zT6Ftoz8fXJdWDiieDA1R4xxz3EDCAxJCipJFc8HpFB",
  "key5": "4cjzFS7ipN9LZ5Jr2jRVUFodNcYHUqXhbxPMYLiBDCkfuodcgcdkXLJZkskpzwAT4VrEurBsQeeDFSyLH7krdf5d",
  "key6": "56SfjdJk7G9Fey559YAYzFa7r7JdVw3LF1AQwwkGrJAWmPWAvpMQP5j57QHzMhXiLF5gALibXMKyiAnQPFvrfLcb",
  "key7": "4oKAmrxfcKAgDtKuuYE3veNL2kSzQWWbzWX7owqoUmcbPshjisKqRQLWvBoaTvoPVDwpR5d9zUNB944Ayggdxk5W",
  "key8": "4iNqrqE52q8yQ5F1UrdtGwYPsgiyAdVbBn8F6XXUnseZPBiMDkRsCKPPtwEctopHWgqViiizrdehzsrDYvbzwxZu",
  "key9": "av2vRBVEPWTNsu5K8AvHVGjQp9UoeXDiQdsHQQtuaDoBPNUYPrGYPFxWRG7rmUvrVEmRdjTxCEfxhzotSQrvp8i",
  "key10": "25vSHZiHM9PHCsxGkxDCgj39rQ4ymGfkSd9WnnMmC7SfbeJ4obfahDZH4gd8nmhsh3am4cQ2XrXzweVdfJShN6KM",
  "key11": "wxirytuj5J6AxArTN4mbQ7KfLfpmTHPohbyFjQbE7MKdBPTCThHx2TgdtWLwy9tyJCBxRtpWmPqEJ6DEBuVTSSQ",
  "key12": "58MdpdnfNLG74mvwYqnuZaH2VF3i7QEpxsrVa1mevEeAh57bv1aqDKkLgxtsidjbs6VjMGEpvj4e9xw4i4mf3v2",
  "key13": "4CwMC2qejJSkDqdRy2hvkVsSzCYwbz3yNbbm5xvL9r9b9fyySuDkdpoQJbxFGMhiKvTzu1URs4TmW8BvEwrrY5Cq",
  "key14": "4f8eg11wtgtkbMMagHKjLFc1Gv9kR5aTMdDtubxuuVTF9sYoVxh6zY7UPekoh8smwcfGNBrWFTQf6LHF7AXNNjRn",
  "key15": "bd4jTd7tnPRXbqHgt9Lt7sDM2ir5LnHZiAZDXBPC5xibUPLd5itLDPwEodrGL69JgWQpNVaeSdHsrW9ViQSMzx5",
  "key16": "28wRm42UZZ5EJrosm7njeoeHZcvfT588iG9p1vVUHVMrHyuzD2h7PPTC4ZKzTCkNFC9iFZMQMdiBJV13qmDbemex",
  "key17": "ZWsN4droC3WMuBmvGNe7uUd9snKQKoh79RPw34bw8zVR5ZkDCoxBH33CiYpDTDRfWoToqKozTNV3jJb4AMyc7s1",
  "key18": "355dyTfFhKBxCDa98zofEnYg3Nu7dKKVQYHN5YUBRyep3yhi9BCXvhxznWj6NS5768FTQoqQBC54vQjSpSjpFnY5",
  "key19": "4bN5beGxdf8oAWbvQzzPwU1isHpejsa5uWiTDfT2uWiK51XjaxybdbW7qGJDziiYY3N5JMMAjZfCwe6GXcdR1Ji5",
  "key20": "KTV5zfmtFBPPs9F1gx1XxheNXyTW2LSFABFRkZA2Q5bp4x41hGqSMLy5Mmcr5y7UFk9eFBCaL5NRati9nwgTEFN",
  "key21": "4NXv1eB2raYpaoWjvQ9eWrxemJcKuFLGUL9EsAoGMaTbQt34wfr6nx6sTZQgBYCYk8DCyGzjn8B7GyZKdqANAZx3",
  "key22": "LgHg9BMD4ZR6mwPG5rQLdxpXYWhmF1KtBspj5G3xJDFN8XP18bThJHFDiLPs48qsBmPK5UuNP36frRGAJu6Syd1",
  "key23": "5XpyhgBJueyJATHov2P4wtzDgLpaAcYGDwxYHBqDmZ9HDdo978ZHohUe5B6ncTPBWGcSdgqsBC4FZZtBKnssEmBy",
  "key24": "36Lo2q6hDnxTFK3d5yDvEmATotaZxS248iEGbFXhyCQdwRRY3JC5XLUghfEbFQVoPCXZViWkJjufUKBb7rCXMBp5",
  "key25": "2hp929kE9WvvgaNbfZKgrs3CVjRoAJLXosKCiXtV4vB3cPXokY62SvJe8Ew4sVnEqCJwSV1vMw8ZTSJdU1RpPBpE",
  "key26": "3VXewTn6ZJWxPN7rHGR95yG3wz4Kc84G6LTo61CdMSZKDsSgfD4Eh9i2n6JGrpRh84wYx5womPbXqQUi3VyXcyUx",
  "key27": "2Eue9bkAgAZbBJ3i2wSNu7Qe2HTFykcZT9hD3eNdZTpvG3XoUu175A8aFGpqfZVUhQ5SvsKmVPY82zngskXje6V3",
  "key28": "6mhtJJhayuLmtGwzmB2W3vWaRj59sVk8y9dKpvjSU7ZKyp4pR8V7f5pb633h44hVkfwSBZJ8vD3kkQp4n6tocgo",
  "key29": "3Njtsgm73EtrGmLPgncvJzkUfKZ9GEqKBwsZBJakEG87g3yVMo5FpJZsFXPWsvW4NLnYkLiQWU2HV3aUh2PhRcUr",
  "key30": "3hcbviXwUPB4XZypRyk9Smy9Kpcix4ZFPdqK3rrHt5UU7ehm11ZXvZxsLZawhTetCi6XQDQKanEZ2vhKSrvmDmrz",
  "key31": "3Axtz9VkqFWGBiX2jwp6oQdoD64fz6bE8MkCoc74bffPfdmsSJNxEfX2SFnBZvBJbewcsQwiUJR8DuuL3Wbo7p6a",
  "key32": "33ETQkUsMXiiKrRcsqU2WrKqjNhMCChLxZp4Q7qtjiTty4KnCn2an3doCWjKZdYih8ArXU3QYaPWhnqzgpQmJN6z",
  "key33": "4WD3CCD2hjB2eVmon17jCwBeh9iiSxe1zjKHXWEXhBTBSMoTRXNAtYjiw9cALK1bEPMTHpEvdAZ9tqe4xGrXbphA",
  "key34": "4eB9ducD8YYZWxNcFb3zX7ZFwKuEeXcnBAjVr6B8FxefCPwzSPgHubPhq4unk2jYuU3Q1AbWUGUgCA58Bu5ma96k",
  "key35": "5DpiutmtQXJzoAUodKGKsNSL7Wmhwx1suWQvz2D5wofH7z1MTar2FaXMfUWBgg9TomKicUTs1V4LLF8knsF4Lvj2",
  "key36": "2dkhZ6z9vnVSJFz9NNC1fPMEnKCzAnjq1yMYfaXJdQTsua1GzyH92yHkK3LZkZCkifUimTkBMPjr8vLVWPoCYjuN",
  "key37": "5tnzYp8W7uy4HL26EMvGgRvErU6YvD2vYpS9pTheVLoAi7Rah2EXaKJudMH5nmdmUcMyqDpu1rwbW4SeMGqEbbbw",
  "key38": "5S6wWtb7z12sRkTVvhwUPsEVvqsF9WaMfkz8qQKcMC5GMKkrbxXiu9QMinFkBey2ZGFEoQdGew69Wcjs3xixAxjj",
  "key39": "kA8KqgDSkFjZwGpVHZdwF32n3BJC4sUtkTBKgET6H9NLwQcNjJjLLrmpuREVu3ptND2vrn5nF5NvWYFr5EscHiX",
  "key40": "597AShu51v5M2TWPMpUzB9NCT9N9LbyBd6Yy8ZWYgDjgX8UXd8WRJi6zG6dpH3cEAjmat2gun4mgytnxL2x6ZkD3",
  "key41": "2HRABcnW2P13GF36EWHTJBf553rnMTmCxKBTwg1YvtyvW1QT2H7pKiuzt3JrCUKVKL31QfwyH3JYan1YZ1HN3q3c",
  "key42": "2sFXDFjorvoRBAKFGGmMSmQmvWC6yVtDF3hNhiWN7kheLPNmJ9hrqEfqcekns21PYTeUB7ZQATzSf3ZKgA2seALn",
  "key43": "4eBwnz64uJvCuGiwPdyKFwSsrChUMZerHS7ti9zVMtHbMaFkAT5ZSx2PSxLTa5v5CcmR9httUj6hZ7TAWrsCmdgC",
  "key44": "38oeXgMpPesBumtCixzHkiMFKxD8AvkUwY317uqx38AsMVNPVRknXfFCGaRY3pcMa4fYkepwRGYQUKSjXe63dSdK",
  "key45": "3EvPeZYX2vytaecPepSYQEF3jDByV6qGX5YrED6kEGnR1wR2757Z9ZGtMunY4ATZv5PiRsFUyTYkdLrfzGmLFMGN",
  "key46": "2tLiRZrygUv2tH2JGWeJvEQpbMpSeWSggm6SHYFs7pF8anoJjiYanJ8KPnx6QxWMEpZj5zzdTPBcVHgGxQAohfnS",
  "key47": "39oaWM9WdqenQiKomhXFcq9PNXLLGbyvmrTjSVrdAEpio52dUzXvZSpMwSMjq9TkTkDCXYL5Mm1TsrdVnMKWrny4",
  "key48": "4Hke34tWnp5CwDHuFCgs3cnU15CbfZoWF1xHbBJthJbrL2jmBuq5iFww5YdPWbrhPfZgKZzixkd1nVDKY1oURoU7",
  "key49": "3HoCmuauVLfgBhRjYR7HVbxQ3toQWM5vBPNvrWdHukSHQA3e19z2cNRNbeC3GLRMeNMJ5RCZAPKGb66Gps7JhDoo"
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
