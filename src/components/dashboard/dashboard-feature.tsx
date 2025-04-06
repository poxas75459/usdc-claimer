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
    "2vhXtoBDmw8WXWo34tvevtaAZbRpu3aVkPY1TRVCqzHjXprKpVjpenk1xRAyiJ5YT2LtgHwSDVPtW4Rt49PJS6qy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2S7YrWLwzr8M1W7SSsxXAp7khpHcu9qgegw5fEzHCrKKzhPPXSjmSZ4681ZPVRQDh2r3Qi6HH6kEhJoUVofJKBLx",
  "key1": "3MsxwL2RqCNQyXfvXFRrTrJtgMMRWfGDshhysoPqAXMih2kmaat679JsVjcL4zQpvLDJ3Mx8VTyCsqc1GFMPqh8F",
  "key2": "2EjdJTNwmQGrzuWBfa1iuKt9LLAD7GP8WvV2t21S9UZ1sRjbgfggdBsebLcTgNqSwctpHhLi24eNANkgWuLPa21F",
  "key3": "iFZXrN7xmjcughqEqfy4CpdXjJsxMTrQYVitGyXtAPvnbqxyAbuHVe3utESpgdgMZXcxHsY77eLprGrCts2CAHH",
  "key4": "5upchEwWchswCJqjfZ4LovYtNEsqxRmiNn6hibRAvYa5adKGgfBEoLxg7E5aPn3tAwpiggi1gMjxApvajk27wJE4",
  "key5": "24U8wZCaRhepipAS8tU87dwfR6RKSQgyh1Buxbo5fBekUPpyByym3qPkoDdQxM1YwdRsvFyF8RTh6rDQMDrkku2h",
  "key6": "CvJ9enj5bksz7hFxAKuMopcQo2w56KjRf9jRv2rQrBrBsPc5m4S9A9Q5sGXoVGDjpxXGM8psX48eCK5EEPKRc2q",
  "key7": "2MnhVf7V1oCBfN3zmsewKudVjCP7zmFa47wAvSvdztgQHdjfLBBLgW3CLMLmbmbZ4RwonxqqbZrrXrDRWViH4ime",
  "key8": "4EA6YhJCej74CodhoYAJPXyVeatSN68QodhP6swmkV7MjsXXB7PPu97mrYiJpRicwUW3ULqzZizvgmEnvUz4p5bt",
  "key9": "124SN3MRb9X3QwiwZxey3kwaJtJccQEmuuzkx6VE5fDykZiGoEfk3iEcn16Fyb7H1nsWYMcUbEQCA4CfwBkSsywT",
  "key10": "3gifgsfJrKFd31YXPRC4vA9fvzEVx7JbPweTYJ5gRVXDBKFRGgM1y2ku3dBfBpnnTE3A6Yyx2C8fvCSNe1xLNGhw",
  "key11": "5ykTp7MF7KFySrB85bLEdwnenuDR8VFeKqHuYH13Wvq2ZmBZTJyNcgHqwNzqkShxYyqutU7WZyk2gicNQyupQ8Fs",
  "key12": "MNfCrUbpsuvkCLUPdwAxuhrsCNgPVRHhnJcqF3sH2pLKr7C4JdTiuitCtioo9xGEkuuGPGyo96CoehvXFvjLK2m",
  "key13": "2FcZFiYYzqh6E7JLn9E7Zo81dxrQdTFhxycqeWYqCP3dwYntghoRyBnUFie2ThFufiyLekTBfiZ12HCNACJCWwJy",
  "key14": "38tgStCPDMKmFei92NoxbFKkXYHQgXrvWvqyJWnePBo7SaJtdGhko3my58WyjCb4DQ4zRVSMHvX3rTUbB9Y4rhw",
  "key15": "4gMGDJvCTXTKZSGKwAA5A8YDpESVe8pfEvnY7sGk9jHXzbAvj63zT9EL2TQXXxhbSGMn18NT5MvXcJYqskeP5nRR",
  "key16": "5uqY8EMA4KyNnZxHppBF8ix6UqA4yX3CFNfJvxtEcjzPLqTygdPiCZ3fAfu9JJafRDQhSDzaTp9prgqQwgAsvHS",
  "key17": "2X8o1sYvonJwQyP82sfx9NZG6KPbF4fG8V26BECPD84PN5Un42MSDK2Tb2o7d2FLpdJJgFgY5pMZvmxSpfVQnKMX",
  "key18": "4UaDXUvCWAD3f7iztZz36BMAKH8KKScu8SJ6zGQTGy6MZCyp12sN1sSh3eit35CQ31u2F9eTb7dnv86vrd1KrMEE",
  "key19": "3zw5Nu2TZKAY73fG6T834iUSnnwt7tMrpiDc6aZ9BP5PYQnbujCJDT3oW2srNVWdgAECHLMzaBY4XF59p9QNTgBZ",
  "key20": "299v77Z7EA9nx1ZkkcQ54KeLTXpTYQZLeVP7mDUt9wSB1Ak2bnf6C3q7peTAUEE8WnEvknx15GCxd3zkS8vVQbSU",
  "key21": "4ZV37RsMKhfyDvqKEpdhJsxNXhYgvsyYGPJgjiV3ypiJKBHu5SxeS7AtCePCmntbDtCve11FBr4fWL31VtePbC8v",
  "key22": "4VBKVBntpRzXntiB3Wz5W9oih7QkHzdtExun9VHEFMdtAYdadAN6vSdFoXDfuy4nD7cbwFpLWeiYmUdsKUUdeiu9",
  "key23": "2x9yzYE8i5YcgfaND88CYjQQ6qb8k1RNeT3ysNfvcUXYBWEG1cGA2x1bjCw7z7EQXaZQTkWcUgVxCxfaNJzMwnzd",
  "key24": "2EHRiCVc6VWZ5yFXTNUT1o81zsNtKye1WrQtE4TAQGfRjvfCPmqectVG5BmFYdz5AJGmfVz2NctsJBvcW3BSvTrY",
  "key25": "XrtR2QXVLmTmeFf9vwNp1cqrPksJE6w965MAvDveDUQa2DGmY9nviWTmtSzDfa9RkDKaGk2a8MTxmu6TZyLYjnu",
  "key26": "3va9bdPRKp5UwYwrSLYGpguwMZBmVzEUSfTSDGtn4pobbaSb3Jka7AduBhneHRsJzeTQMAd4QpvwLxRCouBj7Tu6",
  "key27": "3GGxwz462v3K6naQbHU2VMdPprK4YJD6ERv19MDUBnH1eko8BHZBBauD8dAr7s6AgMeKdsEzs3H1iSZh5FkGZbPS",
  "key28": "3a6dSiUWrypjz7PeCZgpmq9vAaffgaJCZ7R8fWE7GMJjaS5ppGtuQ3NR4u6uTnLBy8jLDxx2j8kCa5pUM6NemCfu",
  "key29": "3NW2AVTRHtKUGV3WZK6c43uH7ihaHhMhQDm9pWsRRQqnyKeeLZRQwhWDx7Pn2TJjNQY4zSmCJ7ftdYJGRyxLkryh",
  "key30": "4AQ13dCFvLyDu8tSFejk5WdzcMGUJ9DdL3YetnUuHfbBt6RArxnhvr59rz9TX4SXCZXQMN5J5XF3z5VnZypHfXxa"
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
