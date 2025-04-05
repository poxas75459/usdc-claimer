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
    "2tZ85D9CEn6eBkvuR3hwboG565BmxxjaDud7yDC6u9jFZz4z46fyDyB3e4xnh3M5JMKy4Jw3yuaimuKfL2ERvorK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ArZa1Fsqs83Ec5Q9S7MPjy9MDkCNB6hyMvHxJ3yMgAUnRY8PuGiYvtnge7sug4sBCwZ8jT2R6mZt6byRj7ujehu",
  "key1": "5QVYKP2o2KuRabTqddLgSdBRkGYmQL9Uc45ct3jSL6FBu92rBwmkL3DKcU5njHeV5EFPhjHG29wj937e4RbQ82qH",
  "key2": "4x7EKKV4RRVGRJQrBEYQdCGub54eqq2WDtbAPqUMJNZcsNEF8kwWqqr4xgWg8nJfNwzffERSwerDt6XaAVvPAgQZ",
  "key3": "2jkB5qLhT6GwPgwG3dpJxDPEiAuayknEjihDd61e2MFuPhJVgHE4cpGiAHT3VMGJvXQQHfELv9pstpwNSfkReJnM",
  "key4": "5zEtjtjeYwruCTkNJyDnB8hf63XkpLNQVyoajNJDZo3obZAFS4GPzvKMHEs9huaJdv6kBZ2MyHRnGNpTVXknyHfN",
  "key5": "2H4QVjjtHmZYkuaFcgt3nid9wwwqbzmbbr8SMgpyhoUL3PABRfW1o4UKtsrU6UCKBxidSZ8JbC6ttKSwepKjieLv",
  "key6": "4ooGskgmU7dsD6sbHjNR2hDGE1JzVaWkE311TF9nfnuEFLfpRRnTys4GrxaLPSAbxfUtTmkNVMyDQ4AGzc17ZYLt",
  "key7": "4SpN2cBsxNPg5N8jMsn3rtBAyYg8sm3ZC5bnc1HqXs5814Jsr7W5Yib3uAmAWS9zBhTcBsX7KXFKZ3NhrjDyKNeJ",
  "key8": "62JzkYzthDUgvz1Ncfe9BGhP1zHXLsacsdSy6ZFVzKBEpxpkzBWm9AsKUS1avt1grR7hhwzqu1QaC24hz5wduVKk",
  "key9": "4jtV1RRtkUXFCwk4ZwGcYvHuqGHuQNgKMRxi4hrDFweaVpnkCJ28exPRjSMaPE74Wz6HQSX6TmMbMsV9fjXLwJob",
  "key10": "4ogdYKy88DabFhh7mgzXrsFW1T81AxzoXjFCpreQoK4APqXTfZ7ktFs6qDgy6nLp5qSTJbkJuerg13gLTois2Hfa",
  "key11": "43ADtzBmRmWTJ2st3XAaGvaS1NhETHdVPr1xf2Yvd9N6BnfGxS8MbkrAkAZvqsPfgjTdJEcSpHgw29nxauuu2wQD",
  "key12": "2pMGXmQWQ24XnZrutMn2crJMb79AzWiRUg7wkmouTKC328kGe9JJCsFYzjzPzFZ5p6oYRuMpHi9RcHTBHEyuzUbe",
  "key13": "3QqPamx1WqqMoSgD4hGm17YWZKtoPdy18WnZ99BAGRSCm3LduUoGY1TzoNGWT1z9kwMsNsoAQupemRQGWYZGbyYz",
  "key14": "uL19SarescX78KYcZc775jNeKXDaTDfk7Jut8mHyToA1jfyM6TbzAFWtQvpqQwuemQRqud2z5VErvyzHAViswxA",
  "key15": "3qtXM3v25Fw2Mj4TrPwPVS6aC5YQC94DFpGtGdScEkFvw3ZtYRJCW7EoJvqUJZMp4cvgG7jySozDK37rhiUs6e5h",
  "key16": "5U4e7SmRLD48QMmuaJpyndBUtABfa4hguYBPZkMT7xYqUZv69hDNyrpBNv6Adayymi9H7AdxSvPk1wFfwEztV476",
  "key17": "41m2jLzJWQFAw6DoseRmn6dAZMUvZnL1ity5bASv8boWYBigrPPFuJzc5d4TrTz1Z8DrSVELePAZruETky6tsn3f",
  "key18": "4PjUouSUvxHXCZXfdiP8PcFaEiBUjFNpWiSRR9sVuxtQMwigSBRqxnJtdbappTisdazNoxMD34d2XWjBHgdfs5rW",
  "key19": "4aihqPbyQ9qeQsdK3GgoadgF1qEuRSVepNPKKCJMad5UGArdBzY4q7qsG1aZacA8FR7kdQBTVW3diLwR9SYyZL97",
  "key20": "D3cNf5Afs1B1oDYzBHjFRzNcWujLvVf8jxkvKerUH1cvRQVDCnWLPmQnLXg1UwQ7dyZuBZfDX3kH8A4737wMVrk",
  "key21": "4FnWqNKgwNZQdxmG9TzNhkwAVtYMPonYpHov6PWXpdm9ubkzFxuBmnYsfRqZ52K4RPiPYrDABXc9vPdH2Qd632DV",
  "key22": "i4Ke6JFMAqpMBtfz2izaqkM8D5hvbcBYigy8v7WEyJi4n5YjRT3XUz4B9nVNYpWjc1eq4KAsQ145C1sfDMQ49MB",
  "key23": "1XiHnh6ZqBjM7nxwyPPyaEECghYiJg6QRNTYNqctb3NBB4npSvqVkh7er8XSbfcuwkn8DBUY4Z5eBsrTTPMpinv",
  "key24": "2hZEJg9va7v2purCMMZi59r1isLWopb47XPb82xYyuE4mBKQuCYaft87Gjf2CSyew54ZjBjJmoPx2C7tagD9Pr3a",
  "key25": "2WUaZ1vGFXsKLjCVSTbPSh2Htj1Kry1mEzqNLiG8rmqYBu5f5fDBBAqhGeN5gRsuA24VSPWSNu5Ly2pNgfvMbgSd",
  "key26": "4UXCGBCXEWqZjR1SFPuLsVagRrcwrj6dgvv7vPz5pi485wuYPKatLsuTYbLx1j3QUSE4BifRTKY5RmEfEss1aezA",
  "key27": "2XZyZcBtmuxkB5xJegPPxu5pKi2YXfjkbtUxGhrurbYuKSwp75GwwvC1YLkqv6uAtwrjZE4vSYwXpjoWW5ksEcJC",
  "key28": "UbNkwKJqdkPTRTf6pbVeQfAvGKEC8YVcTdtDJE6UAUVcfjyUJohqXy4uBFVKSzBAHn9ZgrYyfArh3EBCMdV53Tv",
  "key29": "4hAnYAkbdGpRBHfjTGZmM7nXh1Bh3m9MBCDVbDNfyQmfuPYtyMm6ikUpmXAXs5PjbWi2tBocZQATT7S8vXgKjL67",
  "key30": "5NiGYTzjo529Vq5nds6CVVe5VFuE4bpBYA8onGaycsyVNQ8XcUCtL8jxeGMwYo2ySKhRtSBLbfHYSk5qLZYHeygQ",
  "key31": "2nUugsNZ7Bi9bLAnsUNjzt3qGHJ9T3VaXsrGJ3TLNvDEEQLQYNwXQzfvy6Qu4nSxDYityX7fhLXyYYKQ2YosSVPa",
  "key32": "4NK3xHzycacde8gC6cKkr9ssRQWWazP6F4QpT4Bq7Q5rzNEXMr6CaiSSeRiDWk3MpvFJEy39rDG4uSfR8FUrStEq",
  "key33": "2hY6WAMcR5z6CcdmJbEgHNVgknTg4hEgH7oDNu28BPmymGpu3Yjw8LUFgRGZxTCbJPTnHS8rwU9FBtFHYhRCS4Dr",
  "key34": "51224CqoboDNpNnbq8faNmy5g4SeZp4Nsy89a6rakzfjhRF1PhHUv9HgWwHa1CPEqHNptTvjPBQgUeif1aMJdhXb"
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
